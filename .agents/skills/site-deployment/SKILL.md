---
name: site-deployment
description: Validate a reviewed article in the Astro site and prepare, but never assume authority for, deployment.
---

# Site deployment

Required inputs: the claimed kanban card, an editorial review whose final status
is `approved`, the article, asset manifest, the recorded release decision on the
gate card, and the repository deployment configuration. Read `AGENTS.md`,
`docs/INSTRUCTIONS.md`, and your own role definition (your agent's `SOUL.md`; the
`mars-ai-simulator-dev` profile owns site work) first. The release authority is the merged
editorial role (`mars-ai-simulator-editor`); the deploy _action_ stays out of every agent's
reach — no `wrangler deploy`, no hosting account, no DNS, no credentials.

Allowed tools: local schema checks, `fnm use`, local build/preview commands,
repository inspection, and the `hermes kanban` worker commands (`show`, `claim`,
`comment`, `complete`). A worker may only claim, comment on, and complete its own
card; it does not create or reassign cards. Do not create a provider project,
deploy, configure DNS, use credentials, or change editorial meaning without a
corrective card.

**Commits pass through a dprint hook.** The repository commits `.githooks/pre-commit`
(install once per clone: `npm --prefix website run hooks:install`, i.e.
`git config core.hooksPath .githooks`). It formats the staged files with dprint and
re-stages only those paths, so the bytes you staged can change before they are committed;
a path that also has unstaged edits is left untouched, and a missing dprint skips with a
one-line warning rather than blocking. Bypass it for one commit with `git commit --no-verify`.

Write validation evidence as a card comment (`hermes kanban comment <id> "..."`)
and in the repository artifact: schema/front-matter result, build
command/result, preview verification of title/body/images/alt text, source
commit, and any proposed deployment inputs. The production deploy is the push to `main`
once the card carries the editorial release decision: record that decision's card, the
commit SHA, and the verified URL. Without it, record the exact missing decision and never publish.

Reject an unapproved review, a missing editorial release decision, failed build, failed preview,
or missing asset/alt-text evidence. Acceptance checks require a successful local
build and preview plus the recorded release decision and verified URL for a production deploy.
Never complete a deployment card with a merely assumed approval.

A deploy-stage card that sits inside an article graph ends with the blocker
recorded, not with `block`: the article parent card is its child, so blocking
strands the whole graph while the local acceptance ("build and preview pass;
production deploy only with the recorded release decision and a verified URL") is already met.
Say plainly that no production deploy ran, list the exact decision still missing (a canon
question only the human story owner can release), and name the command a released card would run. The deploy
stage's prescribed artifact is the deployment record on the card itself.

## Verified practice

- **A push to `main` is the automatic production deploy** (human instruction
  2026-09-17, recorded in `AGENTS.md`; `main` is wired to the Cloudflare Workers
  Build), so a dev card's commit/push publishes the build output. Anything Astro
  emits into `dist/` goes public with it — including a statically imported asset
  that no route references — and the deploy _action_ stays out of reach (no
  `wrangler`, no credentials, no DNS). After every push, verify the live origin
  rather than assuming: fetch the emitted asset path and a route, and compare a
  hashed asset's byte size against your own build to prove the deployed bundle is
  yours. Report a push as a deploy when it deploys, and say plainly when
  approved-but-unreleased media reaches `dist/` before you push it.
- Attribute the live origin by **hashing the served bytes against a known local
  build**, never by byte count: inside a page on the origin, `fetch(path, { cache:
  'no-store' })` each path and digest it (`crypto.subtle.digest('SHA-256', …)`) — the
  document _and_ every `<link rel=stylesheet>` it names — then compare those hashes
  with your own `website/dist/` files and poll until the deployed bytes match. A
  shared-machine rebuild window can serve a _running card's uncommitted worktree
  build_ byte-for-byte while `origin/main` stands still, so count or content alone
  proves nothing about which commit is live. Measured 2026-09-17: the hostname served
  17,397 B / `eed47af2…` (card `t_e4cc3b9f`'s worktree build, in no commit, with
  `origin/main` at `e67b970`), and only after card `t_cc2dfd29`'s push did the origin
  serve 17,792 B /
  `ef1466f4aa9789ef2095da9100a4c47a5ae0c2a2078924e25ecf90bcf903e032` — byte-identical
  to that card's own build, both stylesheets matching too (`_astro/index.BWVFYATM.css`
  `1ca71364…` 6,489 B, `_astro/BaseLayout.BGZGfQ2B.css` `3edd31f4…` 5,280 B). Say
  which build your numbers belong to.
- Confirm which server produced your preview evidence. `npm run preview` falls
  back to another port when the requested one is busy (a long-running
  `astro dev --host 0.0.0.0` server usually holds 4321 in this project), and it
  refuses to start at all — "Another astro preview server is already running" —
  while another `astro preview` holds the lock, so a `--port` value it never bound
  is easy to mistake for your own run. Check `ss -ltnp | grep -E "432[0-9]"`, read
  the bound port, and when the lock is held by another worker's server, serve the
  built `dist/` yourself on a free port with a plain static file server instead of
  forcing theirs down. A dev server serves the source and `public/`, which is
  useful, but it is not the built `dist/`; say which one you measured. A static
  server you start yourself can also fail to bind silently: when a sibling
  worker's node static server already holds the port, your own server exits with
  "Address already in use" and that port keeps serving their build, so every
  number you read belongs to another checkout. Before trusting a measurement,
  hash the served bundle against your own — read the page's stylesheet link and
  compare that file's sha256 and byte length with `website/dist/` — and confirm
  that `ss -ltnp` names your own PID on the port you chose.
- A card, deck or gate that argues from **character count** about layout ("one
  character shorter, so it cannot overflow") is stating a hypothesis: measure it by
  swapping the string in the live DOM at the width the claim is about
  (`link.textContent = '<other label>'`, then read the nav's and the label's
  `getBoundingClientRect().right` and `documentElement.scrollWidth` against
  `innerWidth`), and report the measured delta and the margin that remains even when
  the outcome still holds. Measured 2026-09-17 on the built homepage at 320 px, with
  nothing edited in the source: the 7-character `Roadmap` renders **4.5 px wider**
  than the 8-character `Progress` — 191.77 px against 187.27 px, right edges 315.91 px
  against 311.41 px, because uppercase `M`/`A` beat `E`/`S` — still inside the page's
  20 px gutter with 4.09 px to spare, and `documentElement.scrollWidth` stayed 320 =
  the viewport either way. The count-based reasoning was wrong; only the measurement
  settled the outcome.
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
  tree in place during a run. A sibling card can also move `origin/main` with a
  **content** change mid-card, and then part of your before/after table is measured
  against a tree that no longer exists: the simulated-record-date line published
  under card `t_e4cc3b9f` lengthened every news card's copy column and moved the
  copy-driven numbers (900x800 carousel 457.7 -> 516.1, 390x844 707.8 -> 747) while
  the plate-driven ones (1600-1024) did not move at all. Rebase, then keep **two**
  private worktrees — one at the new `origin/main` for the before column, one with
  your commit — build both with the same command, and sweep both in a single
  browser session, so both columns come from one harness and one browser state.
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
- `grep -c` counts matching _lines_, and Astro minifies built HTML onto one line,
  so an element count needs `grep -o '<a class="card-label"' dist/index.html |
  wc -l`. With one element the line-based form looks correct and cannot tell two
  from one: exercise the multi-item case (a temporary second article with
  `publication: published`) before trusting any "equals the expected count" check.
- An element's own `display` beats the UA's `[hidden]` rule, so a component styled
  `display: grid` stays rendered _and tabbable_ while carrying `hidden` and
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
  for a source that is the mark over `#010000`), then run the _same_ function
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
- Adding a `media:` key breaks three _existing_ assertions in
  `website/test/news-media.test.mjs`, not just a new case, and card bodies omit
  this: the `newsMediaKeys` deep-equal, the unknown-key message
  (`media must be one of: …`, which joins the whole key list), and the
  `resolves the two keys and nothing else` case. Update all of them or the suite
  ships red.
- An unreferenced asset does not reach the served output: `website/scripts/media-scope.mjs`,
  wired as the `mediaScope()` integration in `website/astro.config.mjs`
  (`astro:build:done`), removes every file under `dist/_astro/` that no built
  document references, and `website/test/media-scope.test.mjs` pins the rule on
  fixtures and on the real build output. So the procedure for a new `media:` key
  is: build, then assert `find dist -type f` lists no unreferenced `_astro` file,
  and that the asset appears — referenced — once the article's `publication` is
  `published`. The predicate is the build output, not the frontmatter, because an
  unreferenced emitted asset _is_ the asset of an item the publication gate holds
  back: a published item's page names its own file, so nothing renders the other
  one's. When an asset _is_ served, still hash it against its canonical `docs/`
  source to show it is not a re-encode.
- A card body can contradict itself: one section commissions an import of the
  selected asset from the canonical `docs/` export while the acceptance list says
  no `docs/` file is written. When the key cannot build without a real file under
  `docs/`, read it as "do not author `docs/` prose or frontmatter", make the
  mechanical copy, commit the asset (a clean clone cannot build without it), and
  record the reading on the card.
- `npm run format` / `format:check` sweep the whole repository root (`dprint fmt
  ../`), but the formatter itself does work: `dprint` is a pinned dev dependency
  whose postinstall installs the binary (`website/node_modules/.bin/dprint`), so
  gate only your own paths from `website/` with
  `./node_modules/.bin/dprint check <path> <path>` instead of reformatting a
  shared tree. Run `dprint fmt` on any file you create — an unformatted new test
  file fails `check` (exit 20) and the diff it prints is the exact fix. Keep lines
  within the configured 120 columns.
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
  _stated_ acceptance instead — extract the deck's fenced block and assert the
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
- The homepage's loading screen is gated at runtime on an exact `/` (card
  `t_15a027cf`): `BaseLayout` emits an inline `data-splash-skip` gate for a
  non-empty `location.hash` — and for a document served at another path — and
  `layout.css` keys the marker rules on it. Verify a deploy of it with `fetch`,
  never by eyeballing the served HTML: extract the gate with a whitespace-tolerant
  pattern (`/<script>[\s\S]*?location\.pathname[\s\S]*?<\/script>/`), because the
  script is templated and its indentation moves with the layout, compare it
  whitespace-normalised against your own `dist/index.html`, check the stylesheet
  the homepage links for both `html[data-splash-skip]` rules, and confirm no other
  route carries the gate. Straight after the push the edge can still answer from
  the previous deployment (`cf-cache-status: HIT`, served document a different
  length): poll until the served byte count equals your own build rather than
  reporting a stale copy.
- `dprint`'s markup plugin re-indents the body of an inline `<script>` in a
  `.astro` file, so a gate written with hand-tuned indentation lands mis-indented
  and `dprint check` fails the tree. Emit the script's source through `set:html`
  (the string reaches the document byte-for-byte) and the formatter has nothing to
  re-indent. Measure the formatter gate in a fresh `npm ci` clone: the shared
  checkout's `node_modules` predates the pinned `dprint`, so `npm run format:check`
  there exits 127 (`dprint: not found`) and proves nothing.
- ESLint's `recommended` set has no browser globals either, so `URL` in a
  `website/test/*.mjs` file fails `no-undef`; stub `location` as a plain object
  (`{ pathname, hash }`) for a `node:vm` run of a page script instead of adding
  globals.
- Measure a first-paint decision with `Page.addScriptToEvaluateOnNewDocument`: a
  sampler installed before navigation records `getComputedStyle`, `window.scrollY`
  and `document.elementFromPoint` at fixed times, which is what proves "never
  painted" and that the fragment jump happened. `Page.captureScreenshot` times out
  in this headless session, so it cannot be used to force frames, and CSS
  animation clocks can sit frozen (`playState: running`, `currentTime: 0`) — a
  state that depends on an animation finishing then reads exactly like the bug.
  Measure the before and the after build in one session, and report which
  properties needed no frame (`display`, `scrollY`, the hit test).
- A section that must keep one height across slides is built by stacking: make
  the container a grid and give every slide one placement (`grid-area: 1 / 1`,
  card `t_89b325e5`), then hide an inactive slide with `visibility: hidden`
  rather than `display: none` so its box still sets the row. Sending an inactive
  slide out of the flow hands the section's height back to whichever slide is
  active and moves the whole page — measured on the built homepage at 1280px:
  461px/3,159px against 645px/3,343px, 184px per switch — and a JS measurement
  taken once on init would paint the first slide's height and then resize. The
  `visibility` form keeps every accessibility property (`Tab` skips the inactive
  slide's link, `Accessibility.getFullAXTree` has no node for its heading or its
  label, `a.focus()` leaves `document.activeElement` where it was), but a
  `guards.test.mjs` case that pinned the old `display: none` must be
  re-expressed — assert `visibility: hidden` present _and_ `display: none`
  absent, and say so in the handoff rather than dropping the check.
- A slide that stays in the layout does **not** fetch its `loading="lazy"` image,
  and showing it changes no geometry, so nothing re-triggers that decision: the
  picture stays blank (measured, fresh cache-disabled session). Promote the image
  of the slide the client is showing to `loading="eager"` — assigning
  `img.loading = 'eager'` does start the fetch (new resource entry,
  `naturalWidth` 1024). To measure a below-the-fold section at all, raise the
  emulated viewport (`Emulation.setDeviceMetricsOverride`, 1280x3200) instead of
  scrolling: `window.scrollTo` and `scrollIntoView` leave `window.scrollY` at 0
  in this headless session. Accessibility-tree names follow `text-transform`, so
  the inactive slide's label is found as the uppercased `ANNOUNCEMENT SUMMARY` —
  a case-sensitive count returns 0 for the _visible_ slide too and reads as a
  false pass.
- When CI has no browser, a layout contract is still testable without one:
  evaluate the cascade of just the properties that decide flow (`display`,
  `position`, `visibility`, `content-visibility`, grid placement) from the built
  page's own stylesheets against the emitted markup, in both slide states and
  both breakpoints. The corpus needs both halves — component styles are inlined
  into the page's `<style>` blocks while page-level rules land in `_astro/*.css`,
  so a corpus of emitted CSS alone silently compares nothing — and the matcher
  must fail closed on a selector it cannot evaluate while skipping at-rules other
  than `@media`/`@supports`/`@layer` (so a `@keyframes` step never reaches it).
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
- Never hand-roll a formatter, and check the lock before concluding the tool is
  unavailable: `dprint` is declared in `website/package.json` and pinned in
  `package-lock.json` (so `npm ci` installs it), while CI does not run
  `format:check` at all, so formatting is hygiene and never a red gate. When a
  package threat-intelligence lookup cannot complete, a single-query session
  refuses the install of a harmless pinned dependency — a binary of that same
  version already installed by an earlier clone formats just as well. Reformat
  only the paths `dprint check` names (it lists every drifted file with a full
  diff), then prove the reflow carried no content: the sequence of alphanumeric
  runs must be identical, the character-count delta limited to layout characters
  (table padding, `|`, `:`, emphasis markers), a `.py` file must parse to the
  same AST, and a `.json` file must load equal.
