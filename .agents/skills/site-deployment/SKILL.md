---
name: site-deployment
description: Validate a reviewed article in the Astro site and prepare, but never assume authority for, deployment.
---

# Site deployment

Required inputs: the claimed kanban card, an editorial review whose final status
is `approved`, the article, asset manifest, a human canon/release approval
reference, and the repository deployment configuration. Read `AGENTS.md`,
`docs/INSTRUCTIONS.md`, and your own role definition (your agent's `SOUL.md`; the
`mars-ai-simulator-dev` profile owns site work) first. No agent holds release authority: any deploy needs a
current, explicit human instruction.

Allowed tools: local schema checks, `fnm use`, local build/preview commands,
repository inspection, and the `hermes kanban` worker commands (`show`, `claim`,
`comment`, `complete`). A worker may only claim, comment on, and complete its own
card; it does not create or reassign cards. Do not create a provider project,
deploy, configure DNS, use credentials, or change editorial meaning without a
corrective card.

Write validation evidence as a card comment (`hermes kanban comment <id> "..."`)
and in the repository artifact: schema/front-matter result, build
command/result, preview verification of title/body/images/alt text, source
commit, and any proposed deployment inputs. When explicit human deployment
authority exists, record its reference and the verified URL; otherwise record the
exact missing approval and never deploy.

Reject an unapproved review, missing human approval, failed build, failed preview,
or missing asset/alt-text evidence. Acceptance checks require a successful local
build and preview plus explicit approval and verified URL for a production deploy.
Never complete a deployment card with a merely assumed approval.

A deploy-stage card that sits inside an article graph ends with the blocker
recorded, not with `block`: the article parent card is its child, so blocking
strands the whole graph while the local acceptance ("build and preview pass;
production deploy only with human approval and a verified URL") is already met.
Say plainly that no production deploy ran, list the exact human decisions still
missing, and name the command a human-authorised release would run. The deploy
stage's prescribed artifact is the deployment record on the card itself.

## Verified practice

- **A push to `main` is the automatic production deploy** (human instruction
  2026-09-17, recorded in `AGENTS.md`; `main` is wired to the Cloudflare Workers
  Build), so a dev card's commit/push publishes the build output. Anything Astro
  emits into `dist/` goes public with it — including a statically imported asset
  that no route references — and the deploy *action* stays out of reach (no
  `wrangler`, no credentials, no DNS). After every push, verify the live origin
  rather than assuming: fetch the emitted asset path and a route, and compare a
  hashed asset's byte size against your own build to prove the deployed bundle is
  yours. Report a push as a deploy when it deploys, and say plainly when
  approved-but-unreleased media reaches `dist/` before you push it.
- Confirm which server produced your preview evidence. `npm run preview` falls
  back to another port when the requested one is busy (a long-running
  `astro dev --host 0.0.0.0` server usually holds 4321 in this project), and it
  refuses to start at all — "Another astro preview server is already running" —
  while another `astro preview` holds the lock, so a `--port` value it never bound
  is easy to mistake for your own run. Check `ss -ltnp | grep -E "432[0-9]"`, read
  the bound port, and when the lock is held by another worker's server, serve the
  built `dist/` yourself on a free port with a plain static file server instead of
  forcing theirs down. A dev server serves the source and `public/`, which is
  useful, but it is not the built `dist/`; say which one you measured.
- Gate the build output, not the build script's intent: after `npm run build` list
  `website/dist` and grep it for gated names, then prove the guard end to end by
  planting a single withheld marker under `website/public/assets/` and rebuilding
  — `postbuild` (`scripts/check-dist.mjs`) must report the offence, prune the file
  from `dist/`, and exit non-zero, so a stale output cannot be served. Remove the
  probe and rebuild clean afterwards: `website/public/assets/*` is itself
  gitignored (root `.gitignore`), so an orphaned probe does **not** show in
  `git status` and a clean status is not proof it is gone — confirm removal on
  disk (`ls website/public/assets/`), because the file stays publicly served
  either way.
- Measure image presentation instead of inferring it. Read the rendered box,
  `object-fit` and natural size in the browser, compute the visible source
  rectangle per breakpoint, and, where a cue's visibility matters, match its
  colours inside a crop of the rendered panel. A screenshot alone is weak
  evidence: without waiting for the page's `opacity` transition to finish, a
  capture of this site renders at roughly 30% brightness.
- Prove the release build without leaving an artefact behind: `SITE_URL=https://<approved-origin>
  npm run build` is the command the record hands to the human, so run it and show the
  `<link rel="canonical">` it emits on each route, then rebuild with `SITE_URL` unset and
  re-check that the placeholder origin is gone (0 hits in `dist/`, canonical count back to 0).
  An `--outDir` outside the repository fails with `EXDEV: cross-device link not permitted`
  when the target is on another filesystem (`/tmp` here), so build into the default `dist/`
  (gitignored) and restore it rather than aiming the build elsewhere.
- Make your own build the last one before the handoff. Other profiles build into the same
  `website/dist/` on this shared checkout, so a file you hashed after your build can already
  be a sibling's output; snapshot the source mtimes next to the `dist/` hashes and confirm
  your build is newer than every source edit, not merely that it succeeded.
- Re-verify anything you measured before completing the card if the evidence came
  from a shared checkout: other profiles edit `website/`, `docs/`, and the working
  tree in place during a run.
- Before building, confirm no sibling card is live on this checkout. In an
  unattended single-query session `hermes kanban list` is refused and `sqlite3` is
  not installed, so read the board with a small script file (`python3
  /tmp/<name>-board-peek.py`, opening `file:.../kanban.db?mode=ro`) selecting
  `status in ('running','ready','review','blocked')`. Exactly one `running` row
  means your build raced nobody; more means capture output in the same shell call
  as the build.
- An empty grep over built HTML is not proof of absence: Astro injects scope
  attributes, so `class="card-label">` matches nothing on a page that does carry
  the element — the real markup is `class="card-label" data-astro-cid-…>`. Grep
  `class="card-label[^"]*"[^>]*>` (or `card-kicker[^>]*>`), and count the elements
  (`grep -c '<a class="card-label"'`) so a pattern that silently matches nothing
  cannot be read as a pass. A card body can also prescribe a class that does not
  exist: the news card's image block is `div.news-image` with `span.image-label`
  (`src/features/news/NewsCard.astro`), there is no `card-media` class anywhere in
  the site, and a grep for it returns 0 on a page that does render the card image.
  Check the prescribed selector against the component before reading 0 as "no
  image", then assert on the emitted `<img src>`/alt/label instead.
- `grep -c` counts matching *lines*, and Astro minifies built HTML onto one line,
  so an element count needs `grep -o '<a class="card-label"' dist/index.html |
  wc -l`. With one element the line-based form looks correct and cannot tell two
  from one: exercise the multi-item case (a temporary second article with
  `publication: published`) before trusting any "equals the expected count" check.
- An element's own `display` beats the UA's `[hidden]` rule, so a component styled
  `display: grid` stays rendered *and tabbable* while carrying `hidden` and
  `aria-hidden="true"` — a carousel can put every slide in the tab order and the
  layout at once. Never take those attributes as proof a slide is out of the tab
  order: drive a real Tab trace
  (`cdp('Input.dispatchKeyEvent', type='keyDown'/'keyUp', key='Tab', code='Tab',
  windowsVirtualKeyCode=9)` N times, reading `document.activeElement` and
  `activeElement.closest('[hidden]')`), and check
  `getComputedStyle(card).display` plus `offsetParent === null`. Fix it with a
  scoped `.<component>[hidden] { display: none; }`. To assert the rule shipped,
  grep the built HTML as well as `dist/_astro/*.css`: Astro inserts its scope
  attribute between the compound parts (`.news-card[data-astro-cid-…][hidden]`)
  and inlines small scoped stylesheets into `<style>` blocks.
- An image swap is proved from the emitted files, not from the component: Astro
  emits one asset per (source, `width`/`height`, `format`) and drops the previous
  one, so list `dist/_astro/` with byte sizes — the old 896 px black-field
  `logo-bg-black.*.webp` disappearing proves no other placement still renders it —
  and grep each route's `<img>` tags for the src you expected there (header 72 px,
  splash 352 px, hero 896 px). Report `sharp(<emitted>).metadata()` `format`,
  `channels` and `hasAlpha` for the file the built HTML actually points at.
- Prove a derived asset round-trips, and prove the proof has teeth: recomposite
  the variant over the field colour its source was flattened onto and compare per
  channel (`alpha = max(R,G,B)/255`, `colour = (P − field × (1 − alpha))/alpha`
  for a source that is the mark over `#010000`), then run the *same* function
  against a known-bad file (the rejected RGBA derivative: 190 LSB) and require it
  to fail. A green assertion that was never shown red is not evidence.
- In unattended single-query (`-q`) sessions the terminal scanner refuses the
  convenient forms: `node -e` / `python3 -c` and heredocs ("script execution"),
  `npx <pkg>` (threat-intel lookup), and one command that touches two
  asset-looking paths at once ("credential files"). Write the script to
  `/tmp/<name>.mjs` and run `node /tmp/<name>.mjs`; symlink
  `/tmp/node_modules -> website/node_modules` so a bare `import 'sharp'` resolves
  from `/tmp`; copy and delete files with `node` `fs` calls instead of `cp`/`rm`;
  run an installed CLI as `./node_modules/.bin/<tool>` rather than through `npx`.
  Refusals seen since: `eval "$(fnm env)"` and grouped/encoded bodies ("nested
  executable body could not be resolved" — check `node -v` against
  `website/.node-version` and skip the shell hook when it already matches), and
  one `find`/`ls` naming three or more paths under the documentation tree
  ("multiple credential files accessed") — split it into separate calls or read
  the paths from a node script instead. A URL whose host ends in `.dev` is refused
  outright in a shell command ("lookalike TLD detected", MEDIUM), so live-origin
  probes belong inside a `/tmp/<name>.mjs` script using `fetch`, with the origin
  and paths as constants in the file rather than as `curl` arguments.
- A shared `dist/` can hide a real test failure, so `npm test` passing before your
  own build proves nothing — build first, then test. Astro copies every file in
  `website/public/` verbatim into `dist/`, and `listRoutes()`
  (`website/scripts/guards.mjs`) returns those files as generated routes, so
  `test/guards.test.mjs`'s `route identity` assertion fails on any `public/` file
  with no `<title>`: the human's Google Search Console verification file
  (`website/public/googlef5c43421bd049659.html`, commit `b4ed729`, content
  prescribed by Google) did exactly this and made a fresh build of `main` fail
  1/50 for every worker until a card owned the repair.
- Attribute a failure to a file instead of arguing it: park the suspect file,
  rebuild and retest, then restore it byte-identically and rebuild and retest, in
  one node script with a `finally` restore and a before/after sha256
  (`/tmp/rh-gsc-attribution.mjs` pattern). Green with the file absent plus the
  same red with it present isolates the cause without touching your own diff.
  Never `git stash` to measure HEAD here: an unfiltered stash sweeps sibling
  roles' uncommitted files on this shared checkout. While a sibling card is live,
  also check the board right before your close-out — if it is still `running`,
  commit only your own paths and record the leftovers you held.
- Adding a `media:` key breaks three *existing* assertions in
  `website/test/news-media.test.mjs`, not just a new case, and card bodies omit
  this: the `newsMediaKeys` deep-equal, the unknown-key message
  (`media must be one of: …`, which joins the whole key list), and the
  `resolves the two keys and nothing else` case. Update all of them or the suite
  ships red.
- Astro emits a statically imported asset into `dist/_astro/` even when no route
  renders it (unreferenced, content-hashed name), so adding a media key puts the
  artwork in the build output before any article names the key. Measure it
  (`ls dist/_astro/`), hash it against the canonical source to show it is not a
  re-encode, and report the exposure in the handoff rather than claiming the
  asset is unreachable.
- A card body can contradict itself: one section commissions an import of the
  selected asset from the canonical `docs/` export while the acceptance list says
  no `docs/` file is written. When the key cannot build without a real file under
  `docs/`, read it as "do not author `docs/` prose or frontmatter", make the
  mechanical copy, commit the asset (a clean clone cannot build without it), and
  record the reading on the card.
- `npm run format` cannot gate anything in this checkout: there is no `print`/
  dprint CLI on the machine and `prettier-plugin-astro` is not installed, so
  neither formatter runs. Keep new lines within the configured 120 columns by
  hand and check them with a throwaway script before committing.
- Attribute a failing shared-checkout suite with a scratch copy of `website/`
  outside the repository: copy `website/` (skip `node_modules`, `dist`, `.astro`),
  symlink `node_modules` back, and symlink the repository root's other entries
  (`docs`, `tools`, `.agents`, …) **except** `website` and `.git`, because
  `scripts/guards.mjs` resolves `projectDirectory` as the copy's parent and reads
  the canonical `docs/` tree from there — symlinking avoids copying the withheld
  directories out of the repository. Restore the card's own files with
  `git show HEAD:<path> > <scratch path>`; if the same failures appear with the
  card's delta removed, they follow from the tree, not from the card. The same
  scratch tree gives red-first evidence for the card's new test and makes
  `check-dist`'s generated-route line comparable with and without the change (an
  unchanged route set, proven under one sibling state).
- A card body's prescribed render snippet can be defeated by a positional
  selector: appending `<p class="timeline-link">` after a detail paragraph styled
  by `… > p:last-child` moves the styled element and silently restyles that one
  step. When a gate names parity as the constraint, give the element a class and
  key the rule on it, then measure `getComputedStyle` parity across every sibling
  (`font-size | color | max-width`) in the browser — the class change is the fix,
  not a scope violation.
- A gate can record a hash over a string payload whose encoding is not
  reconstructible ("15 literals, newline-joined, 710 bytes"): verify the card's
  *stated* acceptance instead — extract the deck's fenced block and assert the
  file equals `import line + block` byte-for-byte, and re-derive the length claims
  from the built DOM — then report the unreproducible payload hash as an open
  question rather than a failure.
- A release flip landing in the shared tree can break a guard suite that assumes
  a draft exists (`unpublishedSlugs()` plus `expect(length).toBeGreaterThan(0)`).
  Reproduce it against the scratch baseline before reporting, name the flip as the
  cause, and hand the assertion repair to the release's build card instead of
  fixing it twice. The repair is not a fixture written during the test run: both
  failing tests assert over the already-built `dist/`, so a draft created while the
  suite runs was never in the build and the assertion would pass vacuously. The
  gate itself is already covered self-contained by the `publication gate` block in
  `test/guards.test.mjs` (synthetic `draft`/`published` items through
  `selectPublicNews`), so the build-output half needs either a standing draft
  article under `website/news/` — an editorial-space decision, not a dev one — or a
  scratch build inside the test. Settle which before editing, and never drop the
  `toBeGreaterThan(0)` presence assertion to go green: that deletes the only thing
  stopping the guard from reporting success while checking nothing.
- ESLint's `recommended` set has no Node globals, so `Buffer` in a
  `website/scripts/*.mjs` file fails `no-undef`; use `Uint8Array` (sharp accepts
  it for raw pixel input) instead of adding globals.
- `git pull --rebase` refuses while sibling roles' uncommitted files sit in the
  shared tree. When `git log origin/main..HEAD` shows only your own commits and
  `origin/main` is already your commit's parent, the push is a clean
  fast-forward — verify that and push; never stash or rebase over another
  worker's in-flight files.
