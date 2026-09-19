# Assets Manifest: 009-egress

**Subject:** RH-01 descending from the landing platform to the surface on the ramps — full-rover egress candidate
**Story step:** `009-first-surface-checks` (23 September 2031, RH-01 egress from the landing platform)
**Visuals card:** t_13617352
**Generation date:** 2026-09-19

## Generation path

**ComfyUI fallback** (hosted `image_generate` returned HTTP 429: usage limit reached).

- Probe: `hermes auth status openai-codex` → `logged in` but hosted API returned 429
- ComfyUI started via `systemd-run --user --unit=comfyui-server`
- Stage: `scenes` from spec.json (RH-01 Pathfinder, egress scene)
- Model: Flux.2 Klein (4B) via `workflow_factory.py`
- Spec corrected to enforce: stationary rover, no dust plume, sample tool stowed, 4:3 aspect (1200×900)
- Server stopped after work: `comfyctl stop` → `ComfyUI stopped; GPU memory in use now: 2714 MiB`

## Candidate

|| Field | Value | ||---|---|
|| **Stable filename** | `01-egress.png` |
|| **Source file** | `01-egress_00003_.png` (1,741,086 bytes) |
|| **Subject** | RH-01 Pathfinder stationary on/near the ramp leaving the landing platform; full-rover egress scene |
|| **Story step** | `009-first-surface-checks` — milestone row `docs/SCENARIO.md:199` (23 September 2031, RH-01 egress from the landing platform) |
|| **Placement target** | Article lead (`website/news/009-egress.mdx`), newsroom card, homepage card, carousel |
|| **Aspect ratio** | 4:3 requested; generated at 1200×896 (4:3 approximation) |
|| **Tool and model** | ComfyUI fallback (`generate_story_set_via_api.py`), model family `flux` (Flux.2 Klein 4B) |
|| **Prompt** | See `spec.json` with corrected constraints: stationary rover, no dust plume, sample tool stowed in travel cradle |
|| **Caption** | Illustrative artwork of the fictional Red Horizon programme's RH-01 rover leaving its landing platform — not mission photography |
|| **Alt text** | Illustrative full-rover scene of the fictional RH-01 Pathfinder rover stationary on a ramp leaving a landing platform onto the Martian surface at Asteria Field; warm-white body with muted red identification panels, dark instrument deck, short central stereo mast, six open-mesh wheels with articulated suspension, contact arm stowed in travel cradle; no dust plume, no motion blur; restrained dust and short wheel tracks on open rocky terrain; label as illustrative artwork, not documentary mission imagery |
|| **Crop notes** | 4:3 crop keeps the full rover silhouette and ramp; may trim terrain at edges; must not cut the contact arm or wheels |
|| **Licence and permission** | Generated for the fictional Red Horizon programme; the provider's terms apply; not canon itself |

## Private provenance

|| Field | Value | ||---|---|
|| **Prompt ID** | `044b6750-95d0-40c7-96a2-0a1d8e50d1bb` |
|| **Graph SHA-256** | `41b6e478b528127118208d97a0abcb91ece5cc1c1f976e0547cca56d332f982c` |
|| **History record** | `stories/rh-01-pathfinder/runs/01-egress.history.json` (status: success, completed: true) |
|| **Inputs record** | `stories/rh-01-pathfinder/runs/01-egress.inputs.json` |
|| **Job record** | `stories/rh-01-pathfinder/runs/01-egress.job.json` |
|| **API graph** | `stories/rh-01-pathfinder/runs/01-egress.api.json` |
|| **Candidate image** | `stories/rh-01-pathfinder/scenes/01-egress_00003_.png` (1,741,086 bytes) |
|| **Profile cache** | `~/.hermes/profiles/mars-ai-simulator-visuals/cache/images/comfyui-flux-2-klein_20260919_170600_01egress.png` |
|| **Reference hashes** | canonical.png = `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267`, front-left.png, side.png, rear-right.png |

## Continuity check

- **Rover silhouette:** warm-white body, dark instrument deck, short central stereo mast, six open-mesh wheels, contact arm stowed in travel cradle — per `rh-01-pathfinder.mdx:39-95`
- **Scene:** egress moment (rover stationary on/near the ramp leaving the platform)
- **Stationary:** verified — no motion blur, no dust plume behind wheels
- **Sample tool:** stowed in travel cradle — not deployed
- **Surface dressing:** restrained dust and short wheel tracks permitted per `docs/timeline/009-first-surface-checks.md:117-121`
- **Terrain:** follows released regional-setting classes (`asteria-field.mdx:83-93`)
- **No map overlays or landing-design geometry**
- **Label:** illustrative artwork per `docs/SCENARIO.md:280`

## Known issues (resolved in this run)

Previous candidate `01-egress_00002_.png` had the same issues as `01-egress_00001_.png`: rover appeared in motion with dust plume behind wheels and sample tool extended. These have been resolved by correcting `spec.json` to explicitly require: stationary rover, no dust plume, sample tool stowed, and 4:3 aspect dimensions (1200×900). The new candidate `01-egress_00003_.png` passes all constraints on visual inspection.

## Status

**Not approved.** This candidate requires human selection and review before placement. The reviewer (`mars-ai-simulator-reviewer`, card t_f3dd8fd2) determines whether this candidate is releasable.

---

_produced by `mars-ai-simulator-visuals` role (t_13617352) via ComfyUI fallback. Hosted path unavailable (HTTP 429 usage limit reached)._
