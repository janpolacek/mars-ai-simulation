---
name: image-generation
description: Produce or select reviewable Red Horizon article visuals with complete accessibility and rights metadata.
---

# Image generation

Required inputs: the claimed kanban card, completed article draft,
`.agents/work/briefs/<slug>.md`, vehicle/canon references where applicable, and
`.agents/work/assets/<slug>/assets.md`. Read `AGENTS.md`, `docs/INSTRUCTIONS.md`,
and your own role definition (your agent's `SOUL.md` — the `mars-ai-simulator-visuals` profile) first.

Allowed tools: local image-generation workspace, approved source libraries,
repository asset staging, and the `hermes kanban` worker commands (`show`,
`claim`, `comment`, `complete`). A worker may only claim, comment on, and complete
its own card; it does not create or reassign cards. Do not change factual prose,
assert media is approved canon, upload media, or publish.

Keep candidate files, detailed prompts, and generation records in
`tools/visual-generator/`; do not commit them. Complete
`.agents/work/assets/<slug>/assets.md` with the private candidate path/provenance
reference, placement target, meaningful alt text, caption, source or prompt
reference, model/tool, and licence or permission status. Only human-approved,
stable selections are copied out of the generation workspace afterwards, into the
subject dossier under `docs/` (`docs/vehicle/`, `docs/area/`, or `docs/brand/`) with
a manifest entry.

Generation runs on this machine's single local GPU. Start the local ComfyUI server
before the first generation and stop it before completing the card
(`~/.hermes/profiles/mars-ai-simulator-visuals/bin/comfyctl start|status|stop`, or
plain `~/.hermes/bin/comfyctl`), and report the final `status` output in the card
comment. One generation at a time. If the backend is down or a job fails, report
the failure and the server log tail on the card — never substitute a locally drawn
or synthesised image, and never describe an image that was not produced. See the
profile skill `mars-visual-studio` for the model inventory, commands, and pitfalls.

Reject an unknown licence/permission, missing meaningful alt text, an unsuitable
or inaccessible image, or a visual that contradicts vehicle canon. Acceptance
checks: each candidate has a complete manifest record and placement is coherent
with the draft. Record file paths and validation as a card comment
(`hermes kanban comment <id> "..."`) and in the asset manifest before
`hermes kanban complete`.
