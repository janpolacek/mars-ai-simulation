---
name: article-drafting
description: Draft one accessible Red Horizon article strictly from its brief and source pack.
---

# Article drafting

Required inputs: the claimed kanban card, `docs/content/briefs/<slug>.md`,
`docs/content/sources/<slug>.md`, the article template, and the relevant writer and
brand-voice contracts. Read `AGENTS.md`, `docs/INSTRUCTIONS.md`,
your own role definition (your agent's `SOUL.md` — the `mars-ai-simulator-writer` profile),
`.agents/skills/brand-voice/SKILL.md`, and the source
pack before writing.

Allowed tools: repository editing, source-pack inspection, and the `hermes kanban`
worker commands (`show`, `claim`, `comment`, `complete`). A worker may only
claim, comment on, and complete its own card; it does not create or reassign
cards. Do not research around an unresolved source-pack gap, approve canon,
create media, or deploy.

Prepare only `website/news/<slug>.mdx`. Preserve its stable front matter and set
`publication: draft` until a human authorises publication; the website filters
drafts out. Use clear Markdown/MDX, link sources naturally, and distinguish
real-world facts from the fictional, AI-assisted Red Horizon project when
relevant.

Reject uncited material claims, a conflict with the brief/source pack/canon, or
missing required metadata. Acceptance checks: title and body match the brief;
each material claim traces to the source pack; no private timeline material is
present; Markdown headings and links are usable. Record paths and checks as a
card comment (`hermes kanban comment <id> "..."`) and in
`website/news/<slug>.mdx` before `hermes kanban complete`.
