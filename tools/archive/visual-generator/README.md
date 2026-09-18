> **Retired 2026-09-17 — do not use, and do not restore.** Red Horizon imagery is produced
> through the hosted `image_generate` tool (provider `openai-codex`, model
> `gpt-image-2-medium`); the live procedure is
> [`image-generation`](../../../.agents/skills/image-generation/SKILL.md). This generator was
> moved out of the live tool tree to `tools/archive/visual-generator/` by card `t_ad6d3fb3` on
> the operator's 2026-09-17 instruction (_archive tool inside project to generate images
> (sunset), since we use gpt images for much better quality_), and is kept read-only as the
> last-resort local fallback and as the historical record of the ComfyUI stages. The fallback's
> procedure is [`mars-story-toolset`](../../../.agents/skills/mars-story-toolset/SKILL.md). Every
> instruction below is historical: it describes the tool as it was while it was the production
> path.

# Local ComfyUI generator

A small, standard-library-only driver for the local ComfyUI server. It renders one vehicle in three
stages — canonical reference, derived camera views, scene — from a job spec you write per run. It is
the tool behind the `mars-ai-simulator-visuals` role: see `.agents/skills/mars-story-toolset/SKILL.md`
for the procedure and the Hermes `image_gen/comfyui` plugin for single-image generations and edits.

## This directory holds no permanent assets

The tool is a processor, not a store:

- **Inputs come out of `docs/`.** Copy the identity or scene text from the vehicle and area
  dossiers under `docs/vehicle/` and `docs/area/` into a scratch `spec.json`, and copy any
  reference image you need into the tool before running.
- **Outputs go back to `docs/` only after a human selects one.** Candidates, run records and the
  spec live in the scratch paths below, which are git-ignored and safe to delete at any time. An
  approved export is copied into `docs/` with an asset manifest entry by the site engineer.

```text
spec.json      scratch job input
assets/        scratch reference inputs
stories/       scratch renders and run records, per vehicle slug
```

## Job spec

`scripts/generate_story_set_via_api.py` reads a JSON spec (`--spec`, default `./spec.json`).
Background lore stays out of the spec: only visible text reaches a prompt.

```json
{
    "planet": { "id": "mars", "visual_description": "Visible terrain and atmosphere." },
    "photo_style": "Shared realism, materials and photographic character.",
    "reference_style": "Studio reference look: seamless neutral background, soft light.",
    "scene_style": "Documentary field-camera look for scene stages.",
    "reference_camera": "Front-left three-quarter view at body height.",
    "reference_angles": [
        ["front-left", "front-left quarter view high-angle shot medium shot"],
        ["side", "left side view eye-level shot medium shot"],
        ["rear-right", "back-right quarter view eye-level shot medium shot"]
    ],
    "vehicles": [
        {
            "slug": "vehicle-04-orbiter",
            "name": "ORBITER-04",
            "mission": "One sentence of context; not sent to the model.",
            "identity": "Concrete body, locomotion, instruments, materials and limits.",
            "assets": [],
            "reference_pose": "Front-left quarter view on a white floor.",
            "scenes": [["01-landing", "One visible moment."]]
        }
    ]
}
```

`scenes` entries are `[id, description]` pairs — the id names the output file
(`stories/<slug>/scenes/<id>.png`). A mapping (`{"id": ..., "description": ...}`) is also accepted.
Keep an identity mechanically simple: one body type, one propulsion or locomotion system, a small
fixed instrument set, and clear attachment points. Optional `assets` entries
(`{"path": "...", "instruction": "..."}`) guide one detail in the canonical stage only. Any camera
descriptor in `reference_angles` must come from the vocabulary in `scripts/prompt_inputs.py`; an
unsupported one fails fast before anything is queued.

## Run

Start the server first and stop it when the batch is done — a loaded ComfyUI holds several GB of
VRAM for as long as it runs:

```sh
comfyctl start                     # ~/.hermes/bin/comfyctl: idempotent, waits for readiness
python3 -u scripts/generate_story_set_via_api.py --server http://127.0.0.1:8188 --stage scenes
comfyctl stop                      # unloads models, then terminates the server
```

Stages: `canonical` (one clean reference), `angles` (derived views from the canonical),
`references` (canonical plus views), `scenes` (each scene from the three views), `all`. Narrow a run
with `--vehicle <slug>`. Use `--resume` only after an interruption: it reuses a result only when the
exact graph and source-image hashes still match. The runner refuses to start while the ComfyUI queue
is busy — wait for the other job instead of forcing it.

## Run records

Every render writes an audit trail next to the image under `stories/<slug>/runs/`:

| File             | Meaning                                                           |
| ---------------- | ----------------------------------------------------------------- |
| `*.api.json`     | Exact ComfyUI graph submitted for one image.                      |
| `*.inputs.json`  | Resolved prompt text and source-image hashes.                     |
| `*.job.json`     | Submission id and graph hash, written immediately after queueing. |
| `*.history.json` | Final ComfyUI execution record.                                   |

Cite these as provenance for a candidate, then delete them with the batch when they are no longer
needed. `workflows/` holds the same three graphs in ComfyUI API and UI format for inspection or
manual import; `scripts/build_ui_workflows.py --spec <spec>` regenerates the UI examples.

## Model requirements

The graphs name these files exactly, and they must exist in the target ComfyUI installation (here
`~/Applications/ComfyUI`). `models/checkpoints/` is empty, so every graph loads through `UNETLoader`:

| Stage            | Files                                                                                                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| canonical, scene | `flux-2-klein-base-4b.safetensors`, `qwen_3_4b.safetensors` (`type: flux2`), `flux2-vae.safetensors`                                                                              |
| angles           | `qwen_image_edit_2511_fp8mixed.safetensors`, `Qwen-Image-Edit-2511-Lightning-4steps-V1.0-bf16.safetensors`, `qwen_2.5_vl_7b_fp8_scaled.safetensors`, `qwen_image_vae.safetensors` |

One generation at a time: an 8 GB card swaps badly with two workflows in flight. Expect roughly 1-4
minutes per image.

## Layout

```text
scripts/generate_story_set_via_api.py  stage runner (spec in, renders out)
scripts/build_ui_workflows.py          regenerate workflows/*.json from a spec
scripts/workflow_factory.py            Flux.2 graph builder (canonical and scene)
scripts/angle_workflow.py              Qwen-Image-Edit graph builder (angles)
scripts/prompt_inputs.py               prompt composition and camera vocabulary
workflows/                             reusable API and UI workflow examples
```

License: [MIT](LICENSE). Nothing here grants rights to third-party models or to generated content.
