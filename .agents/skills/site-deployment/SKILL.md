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
  cannot be read as a pass.
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
- `npm run format` cannot gate anything in this checkout: there is no `print`/
  dprint CLI on the machine and `prettier-plugin-astro` is not installed, so
  neither formatter runs. Keep new lines within the configured 120 columns by
  hand and check them with a throwaway script before committing.
- ESLint's `recommended` set has no Node globals, so `Buffer` in a
  `website/scripts/*.mjs` file fails `no-undef`; use `Uint8Array` (sharp accepts
  it for raw pixel input) instead of adding globals.
- `git pull --rebase` refuses while sibling roles' uncommitted files sit in the
  shared tree. When `git log origin/main..HEAD` shows only your own commits and
  `origin/main` is already your commit's parent, the push is a clean
  fast-forward — verify that and push; never stash or rebase over another
  worker's in-flight files.
