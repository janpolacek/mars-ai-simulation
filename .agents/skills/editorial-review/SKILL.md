---
name: editorial-review
description: Apply the final editorial and factual-quality gate to a prepared Red Horizon article package.
---

# Editorial review

Required inputs: the claimed Beads issue, article draft, source pack, asset
manifest and candidate assets, brief, and applicable public canon. Read
`AGENTS.md`, `docs/INSTRUCTIONS.md`, `docs/agents/copy-editor.md`, and
`.agents/skills/copy-editing/SKILL.md` first.

Allowed tools: repository inspection/editing limited to the review record,
link/check commands, and `bd`. Do not deploy, approve public canon for the
human, or silently repair another worker's artifact.

Write `content/reviews/<slug>.md` with pass/fail findings for citations, links,
coherence, voice/grammar, image placement/captions/alt text, and metadata/schema.
Set its final status to `approved`, `changes_requested`, or `blocked`.

Reject and keep the issue open for any material factual, accessibility, licensing,
or coherence failure. Create or request a scoped corrective issue and add it as a
dependency of this review issue. An `approved` review is an editorial gate only:
human canon/release approval is still needed before public deployment. Record
the result, evidence paths, and remaining approval in Beads before closing.
Acceptance checks: every review-table row passes, the record's final status is
`approved`, and no material failure remains unresolved.
