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

Write `.agents/work/reviews/<slug>.md` with pass/fail findings for citations, links,
coherence, voice/grammar, image placement/captions/alt text, and metadata/schema.
Set its final status to `approved`, `changes_requested`, or `blocked`.

Reject and keep the card open for any material factual, accessibility, licensing,
or coherence failure. Create or request a scoped corrective card and link it as a
blocking dependency of this review card
(`hermes kanban link <CORRECTIVE> <REVIEW>`); this skill may create that one card.
An `approved` review is an editorial gate only: human canon/release approval is
still needed before public deployment. Record the result, evidence paths, and
remaining approval as a card comment (`hermes kanban comment <id> "..."`) and in
`.agents/work/reviews/<slug>.md` before `hermes kanban complete`.

## Verified practice

- Verify the published surface, not only the article file. An MDX body can pass
  every gate while the page that carries it leaks: check the site chrome under
  `website/src/pages/` and inspect the build output (`website/dist/`) for gated
  names, imagery, and unexplained values. Report surface failures in the same
  record — the gate covers the published package, not just the copy.
- Verify asset provenance by content, not by path: compare `sha256sum` of the file
  actually in use against the approved hash in `docs/brand/BRAND_GUIDELINES.md`. A
  re-exported or transparent-background variant of the same artwork still fails the
  approved-hash check and needs a human release decision.
- Re-read the gate inputs and re-run `git status` immediately before writing the
  verdict. The working directory is shared with other profiles, so the scenario
  file, timeline steps, and asset paths can change mid-run; never assert a broken
  reference or a stale path from a snapshot taken earlier in the run.
- Corrective card mechanics: create it as `<CORRECTIVE>`, link it as the parent of
  the review (`hermes kanban link <CORRECTIVE> <REVIEW>`), then block the review
  card with kind `dependency` so it resumes when the corrective completes. Write the
  corrective body with withheld-by-default actions and an explicit "not yours to
  decide" list, so no agent settles a canon question on the way through.

Acceptance checks: every review-table row passes, the record's final status is
`approved`, and no material failure remains unresolved.
