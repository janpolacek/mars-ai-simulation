# Brief: 009 first surface checks (three timed pages)

Timeline step: `009-first-surface-checks`; dependency: step 008 (landing confirmation). Public-safe goal: a commissioning series recorded on the three dated milestone rows: first health packet and platform panorama, egress, then the first controlled drive. Each date is one public page; the reviewer assigns each `simulatedDate` from the locked table.

## Pages in this brief

| Page slug                    | Locked milestone row                                                | SCENARIO line | Proposed `simulatedDate` |
| ---------------------------- | ------------------------------------------------------------------- | ------------- | ------------------------ |
| `009-health-packet-panorama` | 17 Sep 2031 — First engineering health packet and platform panorama | :198          | 2031-09-17               |
| `009-egress`                 | 23 Sep 2031 — RH-01 egress from the landing platform                | :199          | 2031-09-23               |
| `009-first-drive`            | 30 Sep 2031 — First controlled drive and mobility assessment        | :200          | 2031-09-30               |

## Allowed facts (per page)

- **Panorama (17 Sep):** the first engineering health packet returned; the first panoramic/point-of-view image is available and establishes terrain scale and operational reality (rocks, dust, layered outcrops, the platform environment). Mast and core sensors check out at the released level; commissioning continues before any movement.
- **Egress (23 Sep):** RH-01 egressed from the landing platform onto the surface; platform ramps and rover mobility hardware performed as planned; next step is measured movement testing. No drive distances yet.
- **First drive (30 Sep):** RH-01 completed its first controlled drive and a mobility assessment; short measured movement on the local terrain; the minor landing-era condition is observable but does not prevent basic science or short traverses (describe symptoms before any diagnosis).

## Common allowed framing

- Red Horizon is a fictional, AI-assisted Mars exploration programme; keep the standard disclosure present and prominent.
- Plain, jargon-light commissioning language; define terms on first use.
- The earlier uncertainty may be mentioned at the released observable-symptom level only, never as a diagnosis, never contradicting later steps.

## Forbidden / spoiler facts

- The major discovery, a solved repair, long-range mobility, traverse distances, sample collection, mineral results, stratigraphy.
- Landing-ellipse geometry, hazards, or surface targets beyond the released destination.
- Real facility/operator/agency/partner claims; documentary framing; invented telemetry, sol counts, or technical numbers.
- Any later-step event (010–011); private timeline text or paths.
- Turning illustrative artwork into a photograph or documentary record.

## Assets and image decision

- **Panorama (17 Sep):** `new imagery: one bounded panorama candidate` — the first surface image is this step's narrative centrepiece. Moment: mast-height platform panorama of the surrounding terrain (rocks, dust, layered outcrops), establishing terrain scale and operational reality; the rover may appear on/from the platform but must not show egress, driving, or the sample tool deployed. Aspect 16:9, one (max two) candidate(s) via the hosted image path (probe `hermes auth status openai-codex`; report `imagegen_request_id` and cache filename per candidate; hosted-unavailable → local ComfyUI fallback rules apply, report final `comfyctl status`). Continuity references: `docs/area/asteria-field-02-regional-context.png` and `docs/vehicles/pathfinder/canonical.png` for terrain/rover silhouette. Forbidden in pixels: egress/drive/sample actions, later-step scenery, documentary framing, institution marks. Intended alt meaning: illustrative panorama of the fictional mission's landing terrain, not mission photography. Write `.agents/work/assets/009-health-packet-panorama/assets.md`.
- **Egress (23 Sep):** `new imagery: one bounded full-rover egress candidate` — RH-01 descending from the landing platform to the surface, referencing the approved pathfinder plates for silhouette continuity; no drive or sample action. One candidate, 4:3; hosted path with the same probe/report requirements; forbidden pixels same as above. Write `.agents/work/assets/009-egress/assets.md`. If the 17 Sep candidate is approved and the reviewer sanctions cross-page reuse, the visuals role may instead record `no new imagery: reuse <exact path>` with a manifest; it decides, this brief only sets the options.
- **First drive (30 Sep):** `no new imagery: text-only` by default; the manifest `.agents/work/assets/009-first-drive/assets.md` documents the decision and may record reuse of an already-approved 009 plate if the reviewer sanctions it. No generation by default.

## Draft contract (each page)

- Target: `website/news/<page-slug>.mdx`, `publication: draft`; `simulatedDate` unset (reviewer assigns per the table above).
- Writer owns the integrated SEO pass; no separate SEO card.
- One central update plus only the released context needed; date-scoped language; accessible structure.

## Acceptance criteria

- Every material claim traces to a canonical source or explicit unresolved note in `.agents/work/sources/<page-slug>.md`.
- Commissioning order is correct across the three pages (health/pano → egress → first drive); symptoms precede any diagnosis; no later-step fact.
- Visual decision explicit (generate/reuse/text-only manifest written).
- Reviewer checks chronology/canon/confidentiality, verifies each exact `simulatedDate` line, and records the release decision before dev validation.
- No public file, canon change, release decision, commit, or push in this plan.
