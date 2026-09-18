# Git hygiene in the shared checkout

Committing, pushing, aligning and merging when one worktree belongs to several cards at
once and the index can already hold another worker's entries.

- Before building, confirm no sibling card is live on this checkout. In an
  unattended single-query session `hermes kanban list` is refused and `sqlite3` is
  not installed, so read the board with a small script file (`python3
  /tmp/<name>-board-peek.py`, opening `file:.../kanban.db?mode=ro`) selecting
  `status in ('running','ready','review','blocked')`. Exactly one `running` row
  means your build raced nobody; more means capture output in the same shell call
  as the build.

- `git pull --rebase` refuses while sibling roles' uncommitted files sit in the
  shared tree. When `git log origin/main..HEAD` shows only your own commits and
  `origin/main` is already your commit's parent, the push is a clean
  fast-forward — verify that and push; never stash or rebase over another
  worker's in-flight files.

- A stale shared checkout's `git status --short` is measured against a stale local
  `HEAD`, so it is not that checkout's outstanding delta: paths a later push
  already published show as untracked, and paths the remote rewrote since show as
  modified. Measure against the remote instead — `git diff --name-only origin/main`
  and `git diff --stat origin/main` — because a card body's list of outstanding
  paths is a point-in-time snapshot and can be hours stale.

- Align a stale checkout non-destructively and path by path: `git fetch origin`,
  then `git checkout origin/main -- <explicit paths>`, then `git reset
  origin/main` (mixed: it moves the ref and the index and leaves the worktree
  alone). `git reset --hard` is refused by a single-query session's command
  scanner, and `git checkout origin/main -- .` can sweep a file a live sibling
  card is mid-write, so name the paths rather than using a glob. Confirm with
  `git diff --name-only origin/main` (0 paths), `git status --short` (0 entries)
  and `git rev-list --count origin/main..HEAD` (0).

- Publish a local edit whose base upstream moved on with a 3-way merge, never with
  a copy: `git merge-file -p [--diff3] ours base theirs`, with base taken as the
  shared checkout's `HEAD:<path>` bytes. A conflict there is usually upstream's
  formatter reflowing the very block the edit rewrote rather than a content
  clash — keep upstream's content and prove it by counting the lines present in
  theirs but in neither ours nor base.

- A commit in this shared checkout is **not** a plain commit: the index can already hold
  another worker's **staged** renames or edits (7 `R100` entries, a `docs/vehicle/` →
  `docs/vehicles/` split, on 2026-09-17), and `git commit -m …` publishes those under your
  card's message. Stage only your own paths and use the pathspec form — `git add -- <paths>`,
  then `git commit --no-verify -m "<card id>: <change>" -- <paths>` — and prove what landed
  with `git show --stat` (your commit names your paths and nothing else) plus `git status
  --short` (the other worker's staged entries are still staged, still unpublished).

- **Split a shared file by hunk, never by path.** `git add -- <path>` and `git commit --
  <path>` both take the **working tree** content, so on this single shared worktree — where one
  file can carry two cards' edit families at once (measured 2026-09-17, and still true:
  `website/src/lib/assets.ts` holds the 002 payload-swap imports plus a release-comment
  amendment) — either form publishes the other card's hunks (measured in a scratch repo:
  `git add f.txt` plus `git commit -m … -- f.txt` committed both families and left the file
  clean). Commit the content as its own **blob through a temp index** instead: (a) derive the
  commit's bytes separately — `git show HEAD:<path> > /tmp/x`, apply the same edit to that copy,
  and prove separability with `diff <(git show HEAD:<path>) /tmp/x` (your hunk only) and `diff
  /tmp/x <path>` (the foreign hunks only); (b) `blob=$(git hash-object -w /tmp/x)`; (c)
  `GIT_INDEX_FILE=/tmp/idx-<task> git read-tree HEAD`, then `GIT_INDEX_FILE=… git update-index
  --cacheinfo 100644,"$blob",<path>`, then `GIT_INDEX_FILE=… git commit -m "<card id>: <change>"`
  — use a **fresh** index filename, because removing a stale one is refused in unattended runs;
  (d) set the **real** index entry to the committed blob (`git update-index --cacheinfo
  100644,"$blob",<path>`): without it `git status` shows a phantom _staged reversal_ of your own
  change (`MM <path>` while `git diff --cached` prints your edit backwards), which the next
  worker can commit; (e) verify with `git show --stat` (your commit names one path) and `git
  diff --cached --name-status` (the foreign staged set still staged, not in the commit). Steps
  (a)–(e) measured end to end in a scratch repo on 2026-09-17. Check your own copy yourself,
  because the hook cannot: `dprint check --config dprint.json /tmp/x` (exit 20 = not formatted,
  0 = clean, measured on this config). The hook's "unstaged edits present, left untouched" guard
  does **not** cover the pathspec form — git hands that hook a **temporary** index
  (`GIT_INDEX_FILE=…/.git/next-index-<pid>.lock`) in which your path already holds the
  working-tree bytes, so `git diff --name-only` inside the hook omits it, dprint runs on it, and
  the commit fails or formats bytes you did not choose (measured: temp-index blob == worktree
  blob). The guard protects only a path staged in the shared index that still has an unstaged
  remainder and is committed **without** a pathspec.

- **Gate a card on the owner instead of hunk-splitting a file another card is still writing.** A
  path's working-tree copy can carry two edit families at once (`website/src/lib/assets.ts` held
  the 002-swap imports and the release-comment amendment); any commit of that path publishes both
  families, whole file. The ariane graph gated card D (`t_5da0efad`) on `t_1476a18c` for exactly
  this reason, and the close-out card (`t_74d301a3`) then found the shared set already published
  (operator `1d6adff`) and committed none of it. Measured 2026-09-17/18 — the hunk-split blob
  recipe above is for when the owner's pass cannot wait.

- **Validate the exact pushed commit in a detached worktree, never in the shared checkout.** The
  shared tree holds other cards' half-applied change sets — measured 2026-09-17, and still true:
  a deleted tracked payload source (`docs/payload/payload-sensor-illustration.png`) and an
  editorially _returned_ plate imported by `website/src/lib/assets.ts` — so a suite that runs
  there proves nothing about your commit, green or red. Recipe: `git worktree add --detach
  /tmp/verify-<task> <commit-sha>`, symlink the dependencies (`ln -s
  <repo>/website/node_modules /tmp/verify-<task>/website/node_modules`), put the pinned toolchain
  on `PATH` (`export PATH=$HOME/.local/share/fnm/node-versions/v26.8.2/installation/bin:$PATH`;
  the `export` form passes the session scanner), and validate there — the named test files, `npm
  test`, `npm run build` (whose `postbuild` runs `scripts/check-dist.mjs`; `npm run check:dist`
  re-runs that check alone), `npm run typecheck`, `npm run lint`, and `dprint check ../` to see
  which drift _your_ commit adds versus what HEAD already carried. Clean up in this order:
  `unlink` the symlink **first**, then `git worktree remove --force` — measured on 2026-09-17, a
  plain `git worktree remove` refuses while the untracked symlink is present (`fatal: … contains
  modified or untracked files, use --force to delete it`, exit 128) and succeeds right after the
  `unlink`, while `--force` with the symlink still there removes the link itself and never the
  dependency tree it points at.
