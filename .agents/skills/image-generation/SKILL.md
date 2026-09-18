# Image generation

Required inputs: the claimed kanban card, completed article draft,
`.agents/work/briefs/<slug>.md`, vehicle/canon references where applicable, and
`.agents/work/assets/<slug>/assets.md`. Read `AGENTS.md`, `docs/INSTRUCTIONS.md`,
and your own role definition (your agent's `SOUL.md` — the `mars-ai-simulator-visuals` profile) first.

Allowed tools: the hosted `image_generate` tool, approved source libraries,
repository asset staging, and the `hermes kanban` worker commands (`show`,
`claim`, `comment`, `complete`). A worker may only claim, comment on, and complete
its own card; it does not create or reassign cards. Do not change factual prose,
assert media is approved canon, upload media, or publish.

Candidates, prompts, and generation records never enter this repository: they live in the
profile's image cache (below). Complete `.agents/work/assets/<slug>/assets.md` with the
private candidate filename and provenance reference, placement target, meaningful alt
text, caption, source or prompt reference, model/tool, and licence or permission status.
Only human-approved, stable selections are copied out of the cache afterwards, into the
subject dossier under `docs/` (`docs/vehicle/`, `docs/area/`, or `docs/brand/`) with
a manifest entry.

## Primary path: the hosted gpt-image-2 generator

Imagery is produced through the Hermes `image_generate` tool on the hosted `openai-codex`
provider (model `gpt-image-2-medium`, on the operator's ChatGPT subscription). It needs no
local GPU, no ComfyUI server, and no credential of your own.

1. **Probe the backend before the first generation.**

   ```sh
   hermes auth status openai-codex      # expect: logged in
   ```

   Anything other than `logged in` is a stop, not a puzzle: report the status on the card
   and say what is missing. The sign-in is the operator's action (device flow); never start
   one, never type or store a credential, and never route around the subscription with an
   API key — the ChatGPT API path carries no credits (`429 credit_balance_exhausted`).
2. **Generate.** Text to image: `image_generate(prompt=…, aspect_ratio=…)`, where
   `aspect_ratio` is `landscape` (16:9), `square` (1:1), or `portrait` (16:9 tall); take the
   ratio from the card and record it. To edit or transform an existing image, pass
   `image_url` (a public URL or an absolute local path) plus up to 16 `reference_image_urls`
   for style, character, or composition continuity. One call, one candidate; the card says
   how many candidates the moment needs.
3. **Keep the candidates outside the repository.** The tool returns the image in its `image`
   field and writes it under the running profile's image cache — for this role,
   `~/.hermes/profiles/mars-ai-simulator-visuals/cache/images/`, named
   `<provider>_<model>_<timestamp>_<short-id>.png`. Never copy a candidate into the
   repository and never commit one; the only image file that enters `docs/` is the export a
   human selected.
4. **Provenance is mandatory.** Each call returns an `imagegen_request_id`. The manifest and
   the card handoff both carry, per candidate: the `imagegen_request_id`, the cache
   filename, the exact prompt, the model id, and the aspect ratio generated. That pair —
   request id plus cache filename — is this path's private provenance record, and it
   replaces the local path's old `comfyui-*.workflow.json` sidecar. A candidate without it
   has no rights record and may not be placed.
5. **On failure, report the real error** (status, message, and which profile it came from)
   on the card. Never substitute a locally drawn or synthesised image for a failed
   generation, and never describe an image that was not produced.

## The manifest record for each candidate

`.agents/work/assets/<slug>/assets.md` carries one record per selected candidate, and the
selection itself is a human decision the assets card records. Every record carries:

| Field                  | Content                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------ |
| Stable filename        | The name the approved export takes under `docs/`, once a human selects it            |
| Subject and story step | What the image shows, and which timeline step releases it (private)                  |
| Placement target       | The site contract it enters — the media key or layout slot the draft uses            |
| Caption                | The public caption, or "no caption" with the reason                                  |
| Alt text               | Meaningful alt text, verified against the candidate's own pixels                     |
| Crop notes             | What each supported crop must keep, and what it may not cut                          |
| Aspect ratio           | The ratio generated and the ratio the placement uses                                 |
| Tool and model         | `image_generate`, provider `openai-codex`, model `gpt-image-2-medium`                |
| Private provenance     | The `imagegen_request_id` plus the cache filename and its absolute path              |
| Licence and permission | Generated for this fictional programme; the provider's terms apply; not canon itself |

## Fallback: local ComfyUI (only when the hosted path is unavailable)

The retired local generator stays installed and documented at
`tools/archive/visual-generator/`, and is usable as a fallback. Say on the card that you
used it and why. Its GPU and scope rules still hold:

- **Never start the ComfyUI server as a child of your own worker shell.** A kanban worker
  runs in a transient scope capped at 4 GiB (`hermes-worker-kanban-<card>-run-<n>.scope`);
  a server started from inside it inherits the cap, and loading a 4–8 GB model there makes
  the kernel memcg OOM-killer kill the worker mid-card (no terminal kanban call, counted as
  a protocol violation — four runs of `t_a9964b8d` died this way on 2026-09-17).
- **Start it in its own uncapped unit, with the server itself as the unit's main process.**
  Wrapping `comfyctl start` in `systemd-run` does not hold the server: the transient unit's
  main process is the `comfyctl` wrapper, so systemd tears the unit — and the server inside
  it — down the moment the wrapper exits (measured 2026-09-17, recorded in
  `.agents/work/assets/004-launch-provider/assets.md`):

  ```sh
  systemd-run --user --unit=comfyui-server --collect --property=MemoryAccounting=yes \
      --property=MemoryMax=infinity --working-directory=$HOME/Applications/ComfyUI \
      /bin/bash -lc 'exec .venv/bin/python main.py --listen 127.0.0.1 --port 8188 --disable-auto-launch >> $HOME/.cache/comfyui-server.log 2>&1'
  ~/.hermes/bin/comfyctl status      # running: yes  (pid, queue, gpu_used)
  ```

- One generation at a time — one 8 GB GPU serves every role on this machine — and stop the
  server (`comfyctl stop`) before completing the card, reporting the final `comfyctl status`
  output in the card comment so the GPU is free for the next role. `~/.hermes/bin/comfyctl`
  resolves only while `~/.hermes/bin` is on `PATH`; the visuals profile also ships
  `~/.hermes/profiles/mars-ai-simulator-visuals/bin/comfyctl`.
- The fallback's job spec, stages, scratch contract, and run records are in the
  `mars-story-toolset` skill, and its prompts and run records are the candidate's private
  provenance instead of an `imagegen_request_id`. The visuals profile's own `mars-visual-studio`
  skill keeps the model inventory.

## Retired local tool

`tools/visual-generator/` was retired on 2026-09-17 and moved, read-only, to
`tools/archive/visual-generator/` (operator instruction, card `t_ad6d3fb3`): the hosted
`gpt-image-2` path replaced it. Do not restore it to the live tool tree, do not run it as the
production path, and do not treat its paths as current. Its `spec.json`, `assets/` and
`stories/` scratch stays beside it and stays git-ignored.

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
