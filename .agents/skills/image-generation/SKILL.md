---
name: image-generation
description: Produce or select reviewable Red Horizon article visuals with complete accessibility and rights metadata.
---

# Image generation

Required inputs: the claimed Beads issue, completed article draft,
`content/briefs/<slug>.md`, vehicle/canon references where applicable, and
`assets/articles/<slug>/assets.md`. Read `AGENTS.md`, `docs/INSTRUCTIONS.md`,
and `docs/agents/visual-creator.md` first.

Allowed tools: local image-generation workspace, approved source libraries,
repository asset staging, and `bd`. Do not change factual prose, assert media is
approved canon, upload media, or publish.

Place candidate files under `assets/articles/<slug>/` and complete `assets.md`.
For every image include its path, placement target, meaningful alt text, caption,
source or prompt, model/tool when generated, and licence or permission status.
Only human-approved, stable selections may later be copied to `assets/media/`.

Reject an unknown licence/permission, missing meaningful alt text, an unsuitable
or inaccessible image, or a visual that contradicts vehicle canon. Acceptance
checks: each candidate has a complete manifest record and placement is coherent
with the draft. Add file paths and validation to the Beads note before closing.
