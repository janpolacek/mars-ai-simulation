---
name: create-article-workflow
description: Turn one approved-to-draft Red Horizon article request into a Beads epic with a serial, inspectable worker graph.
---

# Create article workflow

Required inputs: a public-safe title, a lowercase hyphenated slug, the user's
brief, author, and an allowed timeline step (use `site-foundation` only for
non-story material). Read `AGENTS.md`, `docs/INSTRUCTIONS.md`,
your own role definition (your agent's `SOUL.md` — the `planner` profile owns this
workflow), and only the timeline material needed to
validate that step. Never copy private timeline text into a public artifact.

Allowed tools: `bd` and normal repository inspection/editing. Do not publish,
deploy, alter provider configuration, or approve canon.

Follow the manual `bd create` and `bd dep add` sequence in
`docs/CONTENT_WORKFLOW.md` to create the epic, five child issues, and their
blocking dependencies. Create the artifact templates during the claimed workflow
issue. Required outputs are `docs/content/briefs/<slug>.md`,
`docs/content/sources/<slug>.md`, `website/news/<slug>.mdx`,
`docs/content/reviews/<slug>.md`, and `docs/content/assets/<slug>/assets.md`.

Reject a missing brief, invalid slug, unspecified timeline step, duplicate slug,
or any request that would reveal private future material. Acceptance checks: the
five child issues have the required role/stage labels; DRAFT depends on RESEARCH,
IMAGES on DRAFT, REVIEW on IMAGES, and DEPLOY on REVIEW; all artifact templates
exist. Add the created IDs and paths to the epic note. Close the orchestration
issue only after those checks pass.
