---
name: create-article-workflow
description: Turn one approved-to-draft Red Horizon article request into a kanban parent card with a serial, inspectable worker graph.
---

# Create article workflow

Required inputs: a public-safe title, a lowercase hyphenated slug, the user's
brief, author, and an allowed timeline step (use `site-foundation` only for
non-story material). Read `AGENTS.md`, `docs/INSTRUCTIONS.md`,
your own role definition (your agent's `SOUL.md` — the `mars-ai-simulator-planner` profile owns this
workflow), and only the timeline material needed to
validate that step. Never copy private timeline text into a public artifact.

Allowed tools: `hermes kanban create`, `hermes kanban link`, `hermes kanban show`,
`hermes kanban comment`, `hermes kanban complete`, and normal repository
inspection/editing. This skill owns card creation; other skills do not create or
reassign cards unless they say so. Do not publish, deploy, alter provider
configuration, or approve canon.

Follow the manual `hermes kanban create` and `hermes kanban link` sequence in
`docs/CONTENT_WORKFLOW.md` to create the parent card, five child cards, and their
blocking dependencies. Create the artifact templates during the claimed workflow
card. Required outputs are `docs/content/briefs/<slug>.md`,
`docs/content/sources/<slug>.md`, `website/news/<slug>.mdx`,
`docs/content/reviews/<slug>.md`, and `docs/content/assets/<slug>/assets.md`.

Reject a missing brief, invalid slug, unspecified timeline step, duplicate slug,
or any request that would reveal private future material. Acceptance checks: the
five child cards carry the required assignee profile and stage name; DRAFT
depends on RESEARCH, IMAGES on DRAFT, REVIEW on IMAGES, and DEPLOY on REVIEW; all
artifact templates exist. Record the created card IDs and paths as a comment on
the parent card. Complete the orchestration card only after those checks pass.
