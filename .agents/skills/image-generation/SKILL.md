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

Generation runs on this machine's single local GPU. Confirm the local ComfyUI server is up
before the first generation and stop it before completing the card
(`~/.hermes/profiles/mars-ai-simulator-visuals/bin/comfyctl start|status|stop`, or
plain `~/.hermes/bin/comfyctl`), and report the final `status` output in the card
comment.

Never start that server as a child of your own worker shell. A kanban worker runs in a
transient scope capped at 4 GiB (`hermes-worker-kanban-<card>-run-<n>.scope`); a server
started from inside it inherits the cap, and loading a 4–8 GB model there makes the kernel
memcg OOM-killer kill the worker mid-card (no terminal kanban call, counted as a protocol
violation — four runs of `t_a9964b8d` died this way on 2026-09-17). Start it in its own
unit instead, which returns immediately and leaves the server uncapped:

```bash
systemd-run --user --unit=comfyui-server --collect --property=MemoryAccounting=yes \
    ~/.hermes/bin/comfyctl start
~/.hermes/bin/comfyctl status      # running: yes
```

Do this before the first `image_generate` call as well: that tool auto-starts the server as
a child of the worker when it is down, which reproduces the same OOM. One generation at a
time. If the backend is down or a job fails, report
the failure and the server log tail on the card — never substitute a locally drawn
or synthesised image, and never describe an image that was not produced. See the
profile skill `mars-visual-studio` for the model inventory, commands, and pitfalls.

Reject an unknown licence/permission, missing meaningful alt text, an unsuitable
or inaccessible image, or a visual that contradicts vehicle canon. Acceptance
checks: each candidate has a complete manifest record and placement is coherent
with the draft. Record file paths and validation as a card comment
(`hermes kanban comment <id> "..."`) and in the asset manifest before
`hermes kanban complete`.

## Pitfalls

- **Clear the release architecture before naming any reuse path, and name the
  variant as well as the file.** A dossier sitting under `docs/` is not released
  material: read the site's own gates (build guards, media registry, released-route
  list, the dossier's publication boundary). A brand asset can itself need a human
  release decision for a _new_ placement, and two renderings of the same approved
  mark can have different standing — one hash-approved source, one failed derivative.
- **Write the placement in the contract the site actually uses.** Read the content
  schema first: a media field may be a registry key rather than a URL, and a required
  companion alt field can make a bare key invalid.
- **A later-step article's step-relevant dossiers are barred.** The timeline step
  states the spoiler boundary. If the only release-cleared asset is an identity mark,
  record that reuse and the unproduced-image brief — do not generate.
- **A second dispatch of a completed assets stage is a re-validation, not a redo.**
  The reuse determination and the draft stay untouched; what gets corrected is the
  manifest. Re-run every validation row against the live tree and record a dated
  was/is table — the editorial or SEO records may already have flagged the drift and
  routed it to you. Never re-decide the reuse or regenerate to look busy.
- **Verify alt text against the asset's pixels, and re-check the precedent article
  before leaning on it.** Read the canonical file with a vision pass and confirm
  every cue the alt string names exists at the position it names; a prose
  cross-check cannot catch a wrong cue. A "byte-identical to the published card's
  alt" anchor can be voided mid-run when that article is rewritten onto a different
  media key — then the wording must stand on the brand guidance plus the pixel
  read, and the manifest must say so.
- **Re-verify immediately before `kanban_complete`.** The card can be re-linked under
  a new parent, or the site contract can be restructured by another worker, while
  this card runs. A generic "unknown id, stale run, or already terminal" error on a
  card still shown as `running` means a blocking parent is not `done` yet: wait for
  it, then re-read the tree instead of retrying the same call.
