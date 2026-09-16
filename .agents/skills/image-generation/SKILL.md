---
name: image-generation
description: Produce or select reviewable Red Horizon article visuals with complete accessibility and rights metadata.
---

# Image generation

Required inputs: the claimed kanban card, completed article draft,
`docs/content/briefs/<slug>.md`, vehicle/canon references where applicable, and
`docs/content/assets/<slug>/assets.md`. Read `AGENTS.md`, `docs/INSTRUCTIONS.md`,
and your own role definition (your agent's `SOUL.md` — the `mars-ai-simulator-visuals` profile) first.

Allowed tools: local image-generation workspace, approved source libraries,
repository asset staging, and the `hermes kanban` worker commands (`show`,
`claim`, `comment`, `complete`). A worker may only claim, comment on, and complete
its own card; it does not create or reassign cards. Do not change factual prose,
assert media is approved canon, upload media, or publish.

Keep candidate files, detailed prompts, and generation records in
`tools/visual-generator/`; do not commit them. Complete
`docs/content/assets/<slug>/assets.md` with the private candidate path/provenance
reference, placement target, meaningful alt text, caption, source or prompt
reference, model/tool, and licence or permission status. Only human-approved,
stable selections may later be copied to `docs/content/media/`.

Reject an unknown licence/permission, missing meaningful alt text, an unsuitable
or inaccessible image, or a visual that contradicts vehicle canon. Acceptance
checks: each candidate has a complete manifest record and placement is coherent
with the draft. Record file paths and validation as a card comment
(`hermes kanban comment <id> "..."`) and in the asset manifest before
`hermes kanban complete`.
