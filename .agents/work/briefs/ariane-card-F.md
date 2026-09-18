Stage: build and push the revision (with `site-deployment` skill) · timeline step `004-launch-provider`.

Card F of the ariane-plates-incorporation graph (planner `t_723e991f`).
Brief: `.agents/work/briefs/ariane-plates-incorporation.md`. Parents: C
(the placement), D (the wiring), E (the editorial re-gate). Children: G.

Card F is the **publication**. It applies the frontmatter delta recorded
by card D, validates locally, and pushes. The release decision recorded
by card E is the only approval it carries; the flip and the date are in
one change, with no second divergent flip.

Workspace: `dir:/home/janpolacek/Projects/mars-ai-simulator`.

Read first — `AGENTS.md`, `docs/INSTRUCTIONS.md`, your role definition
(`mars-ai-simulator-dev` profile), the project skill
`.agents/skills/site-deployment/SKILL.md` (the three practice bullets
recorded by `t_206bee14` apply: path-limited commits, build-and-dist
verification, `comfyctl stop` before card-complete), the brief, the
editor verdict on card A, the revision record on card E, the build proof
from card D, and the held-change-set card B's published paths.

## What to push

The **only** paths this card commits are:

- `website/news/004-launch-provider.mdx` (the frontmatter delta — the
  single source of the publication).
- The other paths card D introduced (media key, resolver, `assets.ts`
  import, tests). If card D did not commit them yet, card F carries them
  in the same push.
- The `docs/vehicles/ariane/<admitted-name>.png` placed by card C (if
  the editorial gate accepts the plate; otherwise withheld).

If card B published the `docs/vehicle/` → `docs/vehicles/` split
separately, that commit is already on `main` and card F does not redo it.
The push is `origin/main` = `5a59f34` plus this card's commit(s).

If card B has **not** published the split, card F's commit is path-limited
to the plate's bytes + the website wiring + the frontmatter, **not** the
uncommitted split (the split's `guards.mjs` rule moves the per-file
withheld path; that is card B's act). Card F's build runs against the
final tree, however, so card F must not push with the unstaged split
paths in a half-built state. **Coordinate with card B**: if card B is not
yet done, card F is blocked.

## Path-limited commit (no `git add -A`)

```sh
cd /home/janpolacek/Projects/mars-ai-simulator
git status --short
git add -- \
    website/news/004-launch-provider.mdx \
    website/src/lib/media.ts \
    website/src/features/news/media.ts \
    website/src/lib/assets.ts \
    website/test/news-media.test.mjs \
    docs/vehicles/ariane/<admitted-name>.png
git status --short
git diff --cached --name-status
git commit --no-verify \
    -m "t_<id>: publish article 004 revision - <plate> placement and frontmatter media"
git show --stat
```

The commit message names the card id and the artifact class only. No
unreleased material in the message; no ISO date; no real institution.

## Build proof (after the commit, before the push)

```sh
cd website
npm run build        # exit 0, check-dist exit 0
npm run typecheck    # 0 errors
npm run lint         # exit 0
npm test             # all green
```

All four must be green. Report exit codes and test count on the card
comment.

## Live origin attribution

After `git pull --rebase` and `git push`:

```sh
git ls-remote origin refs/heads/main
git rev-list --count origin/main..HEAD
curl -sI -A "Mozilla/5.0" https://mars-ai-simulation.janpolacek.workers.dev/
```

Live routes measured in-page after the push:

- `/news/004-launch-provider/` — carries the admitted plate, the
  record-date line "Simulated record date · 11 March 2030", no ISO form,
  no withheld marker, no real institution.
- `/` and `/news/` — the article's card shows the admitted plate's first
  image with the approved label, the same record-date line.
- `/robots.txt` — unchanged.

Hash the served bytes against the local `dist/` from one process (the
`site-deployment/SKILL.md` recipe) and report match.

## Acceptance criteria

- One or more path-limited commits, all named paths card D/C owns;
  `git show --stat` matches.
- `npm run build` + `check-dist`, `npm run typecheck`, `npm run lint`,
  `npm test` green.
- Live origin `/news/004-launch-provider/`, `/`, `/news/` carry the
  admitted plate and the record-date line, with 0 withheld markers and
  0 real-institution hits.
- `git rev-list --count origin/main..HEAD` = 0 after the push.
- The release record's stale hashes named on the card comment (card G
  records the new ones).

## Out of scope

- Editing the dossier (`docs/vehicles/ariane/ariane-64.md`).
- The 002 payload swap or its tests.
- The `docs/vehicle/` → `docs/vehicles/` split (card B's act).
- The release record (card G).
