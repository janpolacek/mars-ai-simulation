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
authority exists, record its reference and the verified URL; otherwise block the
card with `hermes kanban block <id> "<exact required approval>"`.

Reject an unapproved review, missing human approval, failed build, failed preview,
or missing asset/alt-text evidence. Acceptance checks require a successful local
build and preview plus explicit approval and verified URL for a production deploy.
Never complete a deployment card with a merely assumed approval.

## Verified practice

- Confirm which server produced your preview evidence. `npm run preview` falls
  back to another port when the requested one is busy (a long-running
  `astro dev --host 0.0.0.0` server usually holds 4321 in this project), so check
  `ss -ltnp | grep -E "4321|4322"` and read the bound port before citing a preview.
  A dev server serves the source and `public/`, which is useful, but it is not the
  built `dist/`; say which one you measured.
- Gate the build output, not the sync script's intent: after `npm run build` list
  `website/dist` and grep it for gated names, then prove the guard by planting a
  gated file in `website/public/assets/` and rebuilding — `prebuild` must prune it
  and the new `dist/` must stay clean. `public/assets/*` and `dist/` are
  gitignored, so a stale generated copy is invisible to `git status` while still
  shipping.
- Measure image presentation instead of inferring it. Read the rendered box,
  `object-fit` and natural size in the browser, compute the visible source
  rectangle per breakpoint, and, where a cue's visibility matters, match its
  colours inside a crop of the rendered panel. A screenshot alone is weak
  evidence: without waiting for the page's `opacity` transition to finish, a
  capture of this site renders at roughly 30% brightness.
- Re-verify anything you measured before completing the card if the evidence came
  from a shared checkout: other profiles edit `website/`, `docs/`, and the working
  tree in place during a run.
