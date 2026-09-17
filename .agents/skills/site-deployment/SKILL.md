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
  probe and rebuild clean afterwards: `dist/` is gitignored but `public/` is
  tracked, so an orphaned probe shows in `git status` and stays publicly served.
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
