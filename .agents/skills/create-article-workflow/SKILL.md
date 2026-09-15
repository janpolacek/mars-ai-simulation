---
name: create-article-workflow
description: Turn one approved-to-draft Red Horizon article request into a Beads epic with a serial, inspectable worker graph.
---

# Create article workflow

Required inputs: a public-safe title, a lowercase hyphenated slug, the user's
brief, author, and an allowed timeline step (use `site-foundation` only for
non-story material). Read `AGENTS.md`, `docs/INSTRUCTIONS.md`,
`docs/agents/story-coordinator.md`, and only the timeline material needed to
validate that step. Never copy private timeline text into a public artifact.

Allowed tools: `bd`, `fnm exec --using website/.node-version node`, and normal
repository inspection. Do not publish, deploy, alter provider configuration, or
approve canon.

Run `scripts/article-workflow.mjs create` to create the epic, the five child
issues, their blocking dependencies, and artifact templates. Required outputs
are `content/briefs/<slug>.md`, `content/sources/<slug>.md`,
`content/articles/<slug>.md`, `content/reviews/<slug>.md`, and
`assets/articles/<slug>/assets.md`.

Reject a missing brief, invalid slug, unspecified timeline step, duplicate slug,
or any request that would reveal private future material. Acceptance checks: the
five child issues have the required role/stage labels; DRAFT depends on RESEARCH,
IMAGES on DRAFT, REVIEW on IMAGES, and DEPLOY on REVIEW; all artifact templates
exist. Add the created IDs and paths to the epic note. Close the orchestration
issue only after those checks pass.
