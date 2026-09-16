---
name: editorial-review
description: Apply the final editorial and factual-quality gate to a prepared Red Horizon article package.
---

# Editorial review

Required inputs: the claimed kanban card, article draft, source pack, asset
manifest and candidate assets, brief, and applicable public canon. Read
`AGENTS.md`, `docs/INSTRUCTIONS.md`, your own role definition (your agent's `SOUL.md` —
the `mars-ai-simulator-editor` and `mars-ai-simulator-continuity` profiles own this gate), and
`.agents/skills/copy-editing/SKILL.md` first.

Allowed tools: repository inspection/editing limited to the review record,
link/check commands, and the `hermes kanban` worker commands (`show`, `claim`,
`comment`, `complete`). A worker may only claim, comment on, and complete its own
card; it does not create or reassign cards. Do not deploy, approve public canon
for the human, or silently repair another worker's artifact.

Write `docs/content/reviews/<slug>.md` with pass/fail findings for citations, links,
coherence, voice/grammar, image placement/captions/alt text, and metadata/schema.
Set its final status to `approved`, `changes_requested`, or `blocked`.

Reject and keep the card open for any material factual, accessibility, licensing,
or coherence failure. Create or request a scoped corrective card and link it as a
blocking dependency of this review card
(`hermes kanban link <CORRECTIVE> <REVIEW>`); this skill may create that one card.
An `approved` review is an editorial gate only: human canon/release approval is
still needed before public deployment. Record the result, evidence paths, and
remaining approval as a card comment (`hermes kanban comment <id> "..."`) and in
`docs/content/reviews/<slug>.md` before `hermes kanban complete`.
Acceptance checks: every review-table row passes, the record's final status is
`approved`, and no material failure remains unresolved.
