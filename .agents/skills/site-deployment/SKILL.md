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

The measured recipes this skill used to carry inline now live in one file per theme under
[`references/`](references/), so a worker opens only the file its card needs. Every bullet
there is a recorded measurement — its numbers, hashes and card ids are the reason it exists —
so treat the text as evidence, cite the reference you used, and extend it verbatim rather than
paraphrasing it.

| Open this reference                                                                         | Use it when                                                                                                                      |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [`live-origin-attribution.md`](references/live-origin-attribution.md)                       | you are pushing, or proving that what the origin serves is your own build: which commit is live, which bytes, which server.      |
| [`build-output-gating.md`](references/build-output-gating.md)                               | you are proving what the build emitted or did not emit: guard trips, withheld markers, grepping built HTML, unreferenced assets. |
| [`test-suite-attribution.md`](references/test-suite-attribution.md)                         | a shared-checkout suite is red or green and you must show whether your change caused it.                                         |
| [`shared-checkout-git-hygiene.md`](references/shared-checkout-git-hygiene.md)               | you are about to commit, push, align or merge here, or another card's files and staged entries sit in your tree.                 |
| [`formatter-and-local-tooling.md`](references/formatter-and-local-tooling.md)               | `dprint` or ESLint objects, or this session's scanner refuses a command form you want to use.                                    |
| [`media-and-layout-contracts.md`](references/media-and-layout-contracts.md)                 | your card concerns an image, plate or derived asset, or a layout contract you may only claim by measuring it.                    |
| [`release-records-and-reconciliation.md`](references/release-records-and-reconciliation.md) | you are publishing a record whose bytes and hashes are cited elsewhere, or a card body contradicts its own acceptance list.      |

A new measured lesson goes into the reference file whose scope names its subject — one bullet,
the measurement it rests on, verbatim — never into this file: the single flat list is what made
three concurrent dev cards append onto the same lines.
