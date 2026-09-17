---
name: mars-story-toolset
description: Use when rendering vehicle references or scenes with tools/visual-generator. Covers the job spec, the docs-in/docs-out scratch contract, and the ComfyUI run.
---

# Mars story toolset (local vehicle renders)

Procedure for the staged vehicle pipeline in `tools/visual-generator/`. Read `AGENTS.md`,
`docs/INSTRUCTIONS.md`, and your own role definition (`SOUL.md`) first — the tool renders, the role
decides, the project owns the canon and the asset manifest.

## The tool holds no permanent assets

`tools/visual-generator/` is a processor with a disposable scratch area. Nothing in it is canon.

- **Input:** copy the identity or scene text out of the vehicle and area dossiers under
  `docs/vehicle/` and `docs/area/` into a scratch `spec.json`, and copy any reference image you
  need out of `docs/` into the tool before running.
- **Output:** candidates, run records and the spec stay in the scratch paths (`spec.json`,
  `assets/`, `stories/`), all git-ignored and deletable at any time. A human-selected export is
  copied into `docs/` (with a manifest entry) by the site engineer — never by this tool, and never
  by committing a generated file.
- Do not add project presets, dossiers, or accumulated renders to the tool: the approved vehicle,
  area and brand assets already live under `docs/vehicle/`, `docs/area/`, and `docs/brand/`.

## Before you render: check what already exists

`docs/vehicle/` already carries an approved canonical reference and derived views
(`canonical.png`, `front-left.png`, `side-view.png`, `rear-right.png`, `contact-arm*.png`). Reuse
them. Run the `canonical` or `angles` stages only when the card asks for a vehicle, view, or detail
that has no approved source yet. `scenes` is the usual job: three reference views in, one field
moment out.

## Authoring a spec

- Keep background canon out of the prompt: planet lore and a vehicle `mission` are context, only the
  visible description belongs in the spec's prompt fields.
- One stable identity per vehicle: silhouette, materials, locomotion, fixed instruments, and a
  consistent front/rear orientation.
- One readable action per scene, with terrain, camera position, lighting, and a specific wear state.
- Prefer concrete relationships over extra parts; tools must attach plausibly to their target.
- `assets` entries guide one detail in the canonical stage only — never redesign the vehicle in a
  later scene.

## Run

```sh
# A kanban worker runs in a 4 GiB-capped systemd scope (hermes-worker-kanban-<card>-run-<n>.scope):
# starting the server as a child of this shell loads a 4–8 GB model inside that cap and the kernel
# OOM-kills the worker mid-card (four runs of t_a9964b8d died this way, 2026-09-17). Own unit:
systemd-run --user --unit=comfyui-server --collect --property=MemoryAccounting=yes comfyctl start
comfyctl status                   # ~/.hermes/bin/comfyctl — confirm running: yes
cd tools/visual-generator
python3 -u scripts/generate_story_set_via_api.py --server http://127.0.0.1:8188 --stage scenes
comfyctl stop                     # before completing the card; releases the GPU
```

Never `systemd-run --scope` for this — that form blocks in the foreground until the server dies.
Keep the alias in mind: `~/.hermes/bin/comfyctl` only resolves when `~/.hermes/bin` is on PATH.

- Stages: `canonical`, `angles`, `references`, `scenes`, `all`. Narrow with `--vehicle <slug>`.
- Spec: `--spec path/to/spec.json`, default `./spec.json` (scratch). Shape: `README.md > Job spec`.
- `--resume` only after an interruption; it reuses a result only when the exact graph and
  source-image hashes still match. Never submit a duplicate while the original job may still run.
- The runner refuses to start while the ComfyUI queue is busy: wait for the other job, never force
  it. One generation at a time — one 8 GB GPU serves every role on this machine.
- Camera descriptors must come from the vocabulary in `scripts/prompt_inputs.py`; anything else
  fails before a job is queued.

## Provenance and handoff

Each render writes `stories/<slug>/runs/*.api.json` (graph), `*.inputs.json` (prompt + source
hashes), `*.job.json` (submission id), `*.history.json` (execution record). Cite those paths as the
candidate's private provenance in `.agents/work/assets/<slug>/assets.md`, together with placement,
meaningful alt text, caption, tool/model, and licence status.

Report the exact commands run, the stage and vehicle, the candidate and run-record paths, the final
`comfyctl status`, and what still needs human selection. Never claim an image is realistic,
mechanically consistent, or an approved canon choice without human review.

## Failure policy

If the server is down or a job fails, report the failure with the real error text
(`comfyctl status`, `~/.cache/comfyui-server.log`) on the card. Never synthesise a substitute image
with another local tool, and never describe an image that was not produced.
