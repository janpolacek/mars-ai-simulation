# Source pack: 009-health-packet-panorama

## Metadata

- Slug: `009-health-packet-panorama`
- Brief: `.agents/work/briefs/009-first-surface-checks.md` (page section `009-health-packet-panorama`, lines 9, 15, 35; common framing lines 19-23; forbidden list lines 25-32)
- Timeline step: `009-first-surface-checks` — page 1 of 3 (this card; the step's pages 2 and 3 are the egress and first-drive records)
- Locked milestone source: `docs/SCENARIO.md:198` — `17 September 2031 | First engineering health packet and platform panorama`
- Proposed reviewer-assigned record date: `simulatedDate: 2031-09-17` (proposal only — reviewer verifies from the locked row and assigns on the review card t_26edaeda; writer leaves it unset)
- Status: research source pack (2026-09-19); not a canon record, article, or release decision
- Access date for repository and web sources: 2026-09-19 (session date)

## Confidentiality rule

Row `docs/SCENARIO.md:198` is THIS page's own record: unlike the 008 page (where `:198`
was the spoiler boundary, per the 008 pack), this page may name "17 September 2031", the
"first engineering health packet", and the "platform panorama" — the locked row and the
approved brief license exactly that event and calendar day. Everything after the row
remains the spoiler boundary: rows `:199`–`:207` (egress 23 Sep, first controlled drive 30
Sep, first onboard sample collection 31 Oct, mineral-stratigraphy campaign, one Mars year,
final-year review, end of supported operations, listening-campaign end, archive completion)
must not be referenced by name, date, or implication. The 009 brief's own pages 2 and 3
(`009-egress`, `009-first-drive`) are later records **within the same step**: their content
is not this page's story and must not anticipate it in prose, metadata, SEO fields, alt
text, captions, or asset names. The private timeline (`docs/timeline/009-first-surface-checks.md`)
is continuity material only and is not reproduced here. No public file, canon change,
release decision, commit, or push is part of this research card.

## Claim inventory

| ID  | Proposed material claim / use                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Canonical source                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Support and boundary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Status                                                                    |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| C1  | Red Horizon is a fictional, AI-assisted Mars exploration programme; every public page keeps the standard disclosure present and prominent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `website/news/008-landing.mdx:13-14, :76-79`; `website/news/004-launch-provider.mdx:16, :58-61`; `website/news/002-payload-selection.mdx:16`; `website/wiki/rh-01-pathfinder.mdx:142-145`; `website/wiki/red-horizon.mdx:14-22` (disclosure frame and "no real agency is a partner" wording); `docs/SCENARIO.md:3-6` (private canon, boundary only)                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Released disclosure boilerplate; reuse the established paragraph (008's closing sentence is the current template). Required on this page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | supported                                                                 |
| C2  | The 17 September 2031 milestone is the in-fiction record this page is released for: `First engineering health packet and platform panorama` (locked row). The proposed `simulatedDate` is 2031-09-17.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `docs/SCENARIO.md:198` (locked row, date + milestone name); `.agents/work/briefs/009-first-surface-checks.md:9` (page table row); reviewer card t_26edaeda (assigns/verifies from the row)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | The row licenses the event and its calendar day. Naming "17 September 2031", "engineering health packet", and "platform panorama" on this page IS this step's release — the 008-pack convention that kept `:198` as spoiler-boundary ("no first rover POV/panorama (row `:198`)", 008 pack C11) is resolved by this step and does not re-apply. Reviewer still verifies `simulatedDate` 2031-09-17 from the locked row.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | supported (name/date/framing); date reviewer-owned                        |
| C3  | Landing context (released, day-before record): Red Horizon One landed at Asteria Field on 16 September 2031; power, communications, and the rover responding are confirmed; commissioning of the rover's instruments and systems is the first step; sensors will be assessed next; ramps will be checked before the rover leaves the platform; the local environment must be assessed before surface activity; the rover is carried to the surface and deploys when checks are complete; the platform stays where it lands and is the mission's relay.                                                                                                                                                                                                                                                                                                                                                                                                                             | `website/news/008-landing.mdx:16-22, :26-34, :36-43, :45-53`; row `docs/SCENARIO.md:197` (released by 008); relay language `website/news/004-launch-provider.mdx:37-43`; "rover deployment" + platform role `website/wiki/ariane-64.mdx:35`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | This page is the day-after record: 008's "what remains to be checked" list (commissioning, sensors, ramps, environment) is what this page begins to resolve at released level. Reuse 008's plain wording; do NOT add EDL numbers, ramp count, deployment method, or any landing-design fact (gate `docs/SCENARIO.md:279`; `docs/area/AREA.md:18-19`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | supported with boundary                                                   |
| C4  | The first engineering health packet has been returned: the rover's own summary of its systems' state, reaching the team through the released relay architecture (rover → platform short-range link → steerable X-band downlink to Earth; the rover keeps a low-rate direct-to-Earth link for health reports and commands, with no dedicated programme orbiter).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `.agents/work/briefs/009-first-surface-checks.md:15` ("the first engineering health packet returned"); released health vocabulary `website/news/004-launch-provider.mdx:41-43` ("low-rate direct-to-Earth link for health reports and commands"), `website/news/008-landing.mdx:34` ("low-rate direct-to-Earth health connection"), `website/news/006-cruise-checkout.mdx:21-24` ("A cruise checkout is a scheduled health check…"), `website/news/006-cruise-first-correction.mdx:40, :46` and `006-cruise-final-approach.mdx:31, :41` ("monitor the spacecraft's health")                                                                                                                                                                                                                                             | "Health packet" itself is first-public-wording (0 hits in released MDX, 2026-09-19) — it is the milestone name (row `:198`), so this step releases it; the writer must define it plainly on first use (e.g. "the engineering health packet — the rover's own summary of how its systems are doing"). Boundary: no telemetry values, data fields, pass counts, timestamps, or sol counts; no schedule of when packets arrive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | supported with boundary (first-public-wording flag: health packet)        |
| C5  | The first panoramic/point-of-view image is available and establishes terrain scale and operational reality: rocks, dust, layered outcrops, and the platform environment, seen from the rover's mast cameras while the rover is still on the landing platform.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `.agents/work/briefs/009-first-surface-checks.md:15` ("…the first panoramic/point-of-view image is available and establishes terrain scale and operational reality (rocks, dust, layered outcrops, the platform environment)"); `.agents/work/briefs/009-first-surface-checks.md:35` (visual brief: "mast-height platform panorama of the surrounding terrain"); released payload vocabulary `website/news/002-payload-selection.mdx:21-24, :40-43` ("panoramic and navigation imaging is the baseline of the payload… a panorama puts a target in context"), `website/news/002-payload-selection.mdx:29-30` ("A panorama shows where a rock sits in a layered sequence"), `website/news/003-vehicle-design.mdx:41-42` (short central mast, stereo-camera housing), `website/wiki/rh-01-pathfinder.mdx:77-82, :126-128` | Masters the "first surface image" record. Boundary: the image is an illustrative/generated panorama (labelled as such — `docs/SCENARIO.md:280`), never a documentary photograph; it depicts only the platform environment (rocks/dust/layered outcrops from the brief; consistent with released regional-setting vocabulary at `website/wiki/asteria-field.mdx:83-93`, e.g. "finer-grained layers" — no new area facts); no landing-design geometry, hazards, or targets beyond the released destination; no egress, driving, deployed sample tool, or wheel tracks (no movement has happened); no later-step scenery. "Point-of-view" is first-public-wording (0 hits) — brief-approved; prefer the plainer "first panorama / first surface image" on first mention.                                                                                                                                                                                                                                                | supported with boundary (first-public-wording flags: POV / point of view) |
| C6  | Mast and core sensors check out at the released level; commissioning continues before any movement.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `.agents/work/briefs/009-first-surface-checks.md:15` ("Mast and core sensors check out at the released level; commissioning continues before any movement"); released check-out context `website/news/008-landing.mdx:39-41` ("Commissioning of the rover's instruments and systems is the first step; sensors will be assessed next…"); released payload scope `website/news/002-payload-selection.mdx:21-24` (panoramic and navigation imaging, weather measurement, mineral and rock sensing, contact tool — "not a finished instrument list", `:23-24`), `website/news/003-vehicle-design.mdx:63-65`, `website/wiki/rh-01-pathfinder.mdx:126-128`; the assessment-result phrasing must stay at the released level                                                                                                   | "Core sensors" must be expressed through plain, released-scope terms (the mast's stereo cameras; navigation imaging; the environment/weather sensors at the released scope) — do NOT enumerate instruments beyond the released scope, and do NOT import the private payload list (`docs/SCENARIO.md:157-166`). "Before any movement" is the boundary: this page reports zero motion; no drive, traverse, or egress facts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | supported with boundary                                                   |
| C7  | The landing-era uncertainty may be mentioned only at the released observable-symptom level, never as a diagnosis, and never contradicting later steps; if any wording is used it stays at 008's open-question level.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `.agents/work/briefs/009-first-surface-checks.md:23` ("The earlier uncertainty may be mentioned at the released observable-symptom level only, never as a diagnosis, never contradicting later steps"); `.agents/work/briefs/009-first-surface-checks.md:15` (no symptom is listed for this page — the condition becomes observable across the step per the private timeline, continuity control only, `docs/timeline/009-first-surface-checks.md:12-13`); released open-question pattern `website/news/008-landing.mdx:55-61`                                                                                                                                                                                                                                                                                          | No approved public source fixes a specific condition on 17 September 2031; the exact condition is decided later and must stay consistent with steps 009–011 (the first-drive page's brief says symptoms precede diagnosis). Do NOT default to an invented concern (dust-related calibration, actuator margin, thermal/communications) — same finding as the 008 pack C9. Reviewer confirms any uncertainty wording (t_26edaeda).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | unresolved by design — do not default to a specific concern               |
| C8  | Commissioning order within the 009 series: health packet + platform panorama (this page, 17 Sep) precedes the egress record (23 Sep) and the first controlled drive (30 Sep). This page reports only its own step and must not anticipate egress, movement, samples, discovery, or repair.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `.agents/work/briefs/009-first-surface-checks.md:9-11, :15-17` (three-page ordering); spoiler boundary rows `docs/SCENARIO.md:199-207` (never named/dated); `.agents/work/briefs/009-first-surface-checks.md:25-32` (forbidden facts incl. "any later-step event (010–011)")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | "Egress" has 0 released hits and belongs to row `:199`; "drive"/"movement" claims belong to row `:200`. The writer's close-out may use 008's released generic phrasing ("later surface milestones belong to subsequent updates that have not yet been released", `008-landing.mdx:65-67`) without naming dates or steps.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | supported (ordering/boundary)                                             |
| C9  | Imagery: `new imagery: one bounded panorama candidate (max two)` — the first surface image is this step's narrative centrepiece. Moment: mast-height platform panorama of the surrounding terrain (rocks, dust, layered outcrops), establishing terrain scale and operational reality, not a polished cinematic hero image; the rover may appear on/from the platform but must not show egress, driving, or the sample tool deployed. Aspect 16:9 (article lead, newsroom card, homepage card, carousel). Continuity references: `docs/area/asteria-field-02-regional-context.png` (terrain) and `docs/vehicles/pathfinder/canonical.png` (rover silhouette). Forbidden in pixels: egress/drive/sample actions, later-step scenery, documentary framing, institution marks. Intended alt meaning: illustrative panorama of the fictional mission's landing terrain, not mission photography. Artifact: `.agents/work/assets/009-health-packet-panorama/assets.md` (visuals-owned). | `.agents/work/briefs/009-first-surface-checks.md:35`; visuals card t_6e9f1cae (full brief); generation path `docs/INSTRUCTIONS.md:58-63` (hosted `image_generate`, provider `openai-codex`, model `gpt-image-2-medium`; candidates and provenance outside the repo; local ComfyUI only as fallback, `comfyctl status` reported and server stopped); label rule `docs/SCENARIO.md:280`                                                                                                                                                                                                                                                                                                                                                                                                                                   | Reference assets verified on disk 2026-09-19: `docs/vehicles/pathfinder/canonical.png` = PNG 1448×1086, sha256 `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267`; `docs/area/asteria-field-02-regional-context.png` = PNG 1536×1024, sha256 `253784572f441738c305c2d481c1ece785872b305113e373371a9f5af4f357e0`. Pixel continuity notes: rover follows the released silhouette (warm-white body, dark instrument deck, short central stereo mast, six open-mesh wheels, contact arm stowed in its travel cradle — `website/wiki/rh-01-pathfinder.mdx:39-95`); no wheel tracks (no driving yet; "short wheel tracks" belongs to the later operating-appearance stage, `:117-121`); no ramp descent; no deployed contact tool. Alt/caption templates to mirror: `website/wiki/rh-01-pathfinder.mdx:10` ("Illustrative artwork, not mission photography; … no real agency is named or implied") and the plates' "generated visualization, not orbital imagery" (`website/wiki/asteria-field.mdx:9-17`). | supported (visual decision)                                               |
| C10 | Internal links resolve to released public routes only; draft contract: `website/news/009-health-packet-panorama.mdx`, `publication: draft`, `simulatedDate` unset; writer owns the integrated SEO pass (no separate SEO card); one central update plus only the released context; date-scoped language; accessible structure; dev card later commits/pushes with message `t_<dev card>: publish 009 first panorama update`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Writer card t_b60c8f54; visuals card t_6e9f1cae; reviewer card t_26edaeda; dev card t_2d42e950; `.agents/work/briefs/009-first-surface-checks.md:38-44`; standing instruction AGENTS.md (2026-09-17); route scheme `website/src/lib/navigation.ts:19` (`/wiki/${section}/${slug}/`) and released links at `website/news/008-landing.mdx:19-20, :31-33, :49-52`                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Released link palette: `/news/008-landing/`, `/news/006-cruise-final-approach/`, `/news/005-launch/`, `/news/004-launch-provider/`, `/news/002-payload-selection/`, `/news/003-vehicle-design/`, `/wiki/area/asteria-field/`, `/wiki/vehicle/rh-01-pathfinder/`, `/wiki/vehicle/ariane-64/`, `/wiki/project/red-horizon/`, `/#mission`. Do NOT copy the released ariane-64 leaf's shorter `/wiki/asteria-field/` link (`website/wiki/ariane-64.mdx:63`) — an existing anomaly. Search-intent boundary for the integrated SEO pass: the page answers "Red Horizon first surface panorama / first health packet after landing / what commissioning found" and nothing beyond; metadata/headings must not promise egress, drives, samples, discovery, or repair.                                                                                                                                                                                                                                                        | supported (contract)                                                      |

## Canonical source notes

### Locked scenario source

`docs/SCENARIO.md:198` is the only source for this page's milestone and its calendar day:
`17 September 2031 | First engineering health packet and platform panorama`. The row holds
exactly two columns (date and milestone name), so it licenses the event and its date, not
telemetry, an outcome list, or technical details. Row `:197` (16 Sep landing) is released
public record (008 article pushed in commit 74cba38 on 2026-09-19, `simulatedDate:
2031-09-16`). Rows after `:198` — egress `:199`, first drive `:200`, first onboard sample
collection `:201`, and the monitoring/end-of-life rows through `:207` — are the spoiler
boundary and must not be referenced in any form.

### Released article 008 (the immediate predecessor record)

`website/news/008-landing.mdx` (published, `simulatedDate: 2031-09-16`) is the continuity
anchor for this page: landing confirmed at Asteria Field with power, communications, and
the rover responding (`:26-34`); the to-check list (commissioning first, sensors next,
ramps checked before the rover leaves the platform, environment assessed before surface
activity, `:36-43`); first expected surface operations ("the rover is carried to the
surface… deploy from the platform when the checks are complete", `:45-53`); the open
question on the commissioning sequence (`:55-61`); "later surface milestones belong to
subsequent updates" (`:65-67`); and the current disclosure paragraph (`:76-79`). This page
is the first of those subsequent updates and reports the first released results of that
checklist.

### Released architecture and relay vocabulary

`website/news/004-launch-provider.mdx:37-43` is the canonical source for how the health
packet and the panorama reach Earth: the platform stays where it lands and becomes the
relay; the rover talks to it over a short-range radio link; the platform returns data to
Earth over a steerable X-band downlink; the rover keeps its own low-rate direct-to-Earth
link for health reports and commands; no dedicated programme orbiter. The milestone name's
"health" term has released support ("health reports", "health connection", "scheduled
health check", "monitor the spacecraft's health"), so the writer can define "health packet"
as a new, milestone-named term without inventing architecture.

### Released payload and vehicle vocabulary

- `website/news/002-payload-selection.mdx:21-24, :29-30, :40-43` — payload scope and the
  plain definition of a panorama ("Panoramic and navigation imaging is the baseline of the
  payload… a panorama puts a target in context"; "A panorama shows where a rock sits in a
  layered sequence"). This is the released language the writer should reuse to define
  "panorama" and "navigation cameras".
- `website/news/003-vehicle-design.mdx:41-42` and `website/wiki/rh-01-pathfinder.mdx:77-82`
  — the mast is short and central, carrying one horizontal stereo-camera housing with a
  closely spaced pair of dark lenses; `:86-95` — one front contact arm with exactly two
  joints, stowed in its travel cradle in the travel configuration.
- `website/wiki/rh-01-pathfinder.mdx:117-121` — operating-appearance stages; "short wheel
  tracks" belongs to the later early-surface-operations stage and must NOT appear in the
  17 Sep panorama (no movement yet).
- `website/wiki/asteria-field.mdx:83-93` — released regional-setting vocabulary for the
  three evidence classes (cratered basement; basin-margin material as "laterally
  persistent, finer-grained layers"; channel and bench surfaces). "Layered outcrops" in the
  brief's scene description is consistent with this released description; the page must not
  add new area facts or landing-design details (`:115-119` release boundary).
- `website/wiki/ariane-64.mdx:35` — released "rover deployment" and "surface relay"
  vocabulary for the landing platform's role.
- `website/wiki/red-horizon.mdx:14-22` — the programme disclosure frame.

### Approved brief and downstream card bodies (planning-container decisions)

The brief (`009-first-surface-checks.md`) and the four chain cards — writer t_b60c8f54,
visuals t_6e9f1cae, reviewer t_26edaeda, dev t_2d42e950 — codify the approved scope:
first-image and commissioning update for page 1; engineering health packet returned; first
panorama establishing terrain scale and operational reality; mast and core sensor checks
at released level; commissioning continues before any movement; symptoms before diagnosis
if the landing-era uncertainty is mentioned; `simulatedDate` reviewer-assigned 2031-09-17
from `docs/SCENARIO.md:198`; NEW imagery (one bounded panorama candidate, max two, 16:9)
via the hosted path with `imagegen_request_id`/cache-filename reporting and the ComfyUI
fallback rules; dev commit-and-push message `t_<dev card>: publish 009 first panorama
update` under the standing 2026-09-17 instruction. This pack treats those card bodies as
part of the approved working plan.

## Real-world sources

Used only for bounded plain-language technical context, never as support for fictional
mission occurrence or programme participation.

1. NASA Science, "Mastcam-Z's First 360-Degree Panorama",
   https://science.nasa.gov/resource/mastcam-zs-first-360-degree-panorama/
   (verified live at top search-index position — position 1 on 19 Sep 2026; keyless
   web-search tier, HTTP fetch blocked by this session's security policy — same policy
   noted in the 006 and 008 packs). Optional plain-language context only, IF the writer
   wants a real-world definition of how a rover panorama is built (mast-mounted cameras;
   many frames stitched into one view; the first panorama follows the landing). Boundary:
   the page is a real-mission record (Perseverance, Jezero Crater, sol counts, image
   counts, resolution figures, "144 degrees"/"360 degrees" specifics) — none of that may
   be imported into the fictional page; the released `002-payload-selection.mdx:40-43`
   language is preferred and sufficient on its own.

No additional real-world source is required for the central claim (a fictional milestone
whose canonical source is the locked row). The scenario's own real-world grounding list
(`docs/SCENARIO.md:284-312`) is available for reference.

## Forbidden fact ledger

Intentionally unsupported for this page; must remain absent from prose, metadata, SEO
fields, links, asset names, alt text, captions, summaries, and commit messages:

- `docs/timeline/` content or paths; private scenario phraseology anywhere in
  `docs/SCENARIO.md` beyond the released level (private payload list `:157-166`, ramp
  count and deployment-after-imaging detail `:131-132`, relay specifics beyond released
  level `:134-140`, platform power/thermal design `:154-155`). The private timeline's
  "measured movement tests", "diagnosis", and "mobility assessment" phrasing stays out.
- Rows `:199`–`:207` milestones and dates: RH-01 egress (23 Sep), first controlled drive
  (30 Sep), first onboard sample collection and mineral analysis (31 Oct), mineral-
  stratigraphy campaign (18 Apr 2032), one Mars year (3 Aug 2033), final-year health
  review (16 Sep 2034), end of supported operations (21 Jun 2035), listening-campaign end
  and end-of-life declaration (21 Jul 2035), archive completion (30 Jun 2036) — in any
  form, and no milestone names or dates from those rows, including on later 009 pages that
  do not belong to this record.
- The major discovery, a solved repair, long-range mobility, traverse distances, sample
  collection, mineral/sample results, stratigraphy, and any diagnosis of the landing-era
  condition (symptoms before diagnosis; no cause assigned).
- Landing-design facts: ellipse geometry, P0 touchdown zone, science-zone plan, hazard
  inventory, traverse logic, AF-* unit identifiers (`docs/SCENARIO.md:279`;
  `docs/area/AREA.md:18-19`); coordinates beyond the already-released planning centre.
- Real facility/operator/agency/partner claims and endorsement implications; Ariane 64
  stays at the released non-endorsement disclosure level if referenced at all.
- Invented telemetry: sol counts, health-packet cadence or data fields, pass counts,
  timestamps, signal levels, power/thermal/communications numbers, image counts,
  resolution figures, distances, or schedule figures.
- Documentary image framing: any wording or visual that turns the generated panorama into
  a photograph, orbital image, or mission record (label it illustrative, per
  `docs/SCENARIO.md:280`).
- Movement evidence in pixels or prose: wheel tracks, egress ramps in use, driving, or the
  contact tool deployed.
- Links to anything other than released public routes (see C10), never to working papers
  or private paths.

## First-public-wording flags (2026-09-19 scan of released `website/news/` + `website/wiki/` MDX)

| Token                   | Hits in released routes                                                                                      | Guidance for the writer                                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `panorama`              | Payload-scope term only — `002-payload-selection.mdx:29, :40, :64`; `rh-01-pathfinder.mdx:126`               | THIS page is the first surface-image record (row `:198`); the term is released here for the first time as an event. Keep "a panorama shows where a rock sits in a layered sequence" (002) as the plain definition. |
| `POV` / `point of view` | 0                                                                                                            | Brief-approved ("panoramic/point-of-view image") but new public wording; prefer "first panorama / first surface image" and use "point-of-view" sparingly with a plain definition.                                  |
| `health packet`         | 0                                                                                                            | Milestone name ("First engineering health packet"); released support only for "health reports/connection/check/monitoring". Define plainly on first use; no cadence/data-field detail.                             |
| `outcrop`               | 0                                                                                                            | Brief-approved scene element ("rocks, dust, layered outcrops"); consistent with the released "finer-grained layers" regional-set vocabulary; flag for reviewer confirmation.                                       |
| `mast`                  | Released — `003-vehicle-design.mdx:41-42`; `rh-01-pathfinder.mdx:77-82`                                      | Use the released "short, central mast / stereo-camera housing" language.                                                                                                                                           |
| `sensor(s)`             | Released — `008-landing.mdx:40` ("sensors will be assessed next"); `002-payload-selection.mdx:10, :88, :103` | This page reports the assessment result at released level; no instrument names beyond released scope.                                                                                                              |
| `commissioning`         | Released by 008 (`008-landing.mdx:7, :39, :57-58, :66`)                                                      | Continue the released term; "commissioning continues before any movement" is the brief's boundary.                                                                                                                 |
| `egress`                | 0                                                                                                            | Do NOT use — row `:199`'s record; say "rover deployment" (released term) only if needed, and avoid implying it happened.                                                                                           |
| `ramp(s)`               | 1 — `008-landing.mdx:40`                                                                                     | Only reusable in 008's exact frame ("the ramps will be checked before the rover leaves the platform"); never state the count or deployment method.                                                                 |
| `drive` / `movement`    | Released only in design/planning context (`002:43`, `003:20, :47`, `rh-01-pathfinder.mdx:95, :118`)          | No movement claim on this page; "before any movement" is the brief's phrasing for what comes next.                                                                                                                 |
| `sample`                | Released only in payload-scope context (`002:42` sampling target)                                            | No sample collection/claim; no deployed contact tool in prose or pixels.                                                                                                                                           |
| `dust`                  | Released — design constraints and weather (`003:20, :51-58`; `002:11, :70-74`)                               | Approved scene element for the panorama.                                                                                                                                                                           |
| `platform` / `terrain`  | Released broadly                                                                                             | "Platform environment" and terrain-scale framing are this page's record; no new area facts.                                                                                                                        |

## Asset finding (visual decision)

**NEW imagery: one bounded panorama candidate (max two)** — the first surface image is
this step's narrative centrepiece (brief `:35`; visuals card t_6e9f1cae). Decision made at
planning time; the visuals card executes it. References verified on disk 2026-09-19:

- `docs/vehicles/pathfinder/canonical.png` — PNG 1448×1086,
  sha256 `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267`.
- `docs/area/asteria-field-02-regional-context.png` — PNG 1536×1024,
  sha256 `253784572f441738c305c2d481c1ece785872b305113e373371a9f5af4f357e0`.

Continuity guidance to hand to the visuals role (already in the visuals card): the rover
appears from the released silhouette — warm-white body, dark instrument deck, short central
stereo mast, six open-mesh wheels, contact arm stowed in its travel cradle
(`rh-01-pathfinder.mdx:39-95`); no wheel tracks (no movement yet — the "short wheel
tracks" operating-appearance stage, `:117-121`, belongs to later records); no ramp descent,
no deployed tool; terrain at scene level follows the released regional-setting classes
(`asteria-field.mdx:83-93`) without map overlays or landing-design geometry. Aspect 16:9;
placement article lead, newsroom card, homepage card, carousel. Forbidden in pixels:
egress/drive/sample actions, later-step scenery, documentary framing, institution marks.
Intended alt meaning: illustrative panorama of the fictional mission's landing terrain, not
mission photography. The visuals card reports the hosted-path probe (`hermes auth status
openai-codex`), the `imagegen_request_id` and cache filename of every candidate, or the
ComfyUI fallback's final `comfyctl status` with the server stopped, and writes
`.agents/work/assets/009-health-packet-panorama/assets.md` with placement, alt/caption,
tool, provenance, and rights — per its own card body.

## Validation completed (2026-09-19)

- Read the task card (t_237a6b09), the downstream writer card (t_b60c8f54), visuals card
  (t_6e9f1cae), reviewer card (t_26edaeda), dev card (t_2d42e950), `AGENTS.md`,
  `docs/INSTRUCTIONS.md`, `docs/README.md`, the research-and-fact-check project skill,
  `.agents/work/briefs/009-first-surface-checks.md`, `docs/timeline/009-first-surface-checks.md`
  (continuity control only), `docs/timeline/010-operations-and-discovery.md` +
  `011-repair-and-end-of-life.md` (existence/boundary), `docs/SCENARIO.md` (incl. `:150-233`,
  `:260-312`), `docs/area/AREA.md` (`:1-30`), and the released `website/news/008-landing.mdx`,
  `004-launch-provider.mdx`, `002-payload-selection.mdx` (`:1-126`), `003-vehicle-design.mdx`
  (via search scan), `005-launch.mdx`/`006-*`/milestone pages (via released packs and scan),
  `website/wiki/asteria-field.mdx`, `website/wiki/rh-01-pathfinder.mdx`,
  `website/wiki/ariane-64.mdx`, and `website/wiki/red-horizon.mdx` (`:1-30`).
- Verified `docs/SCENARIO.md:198` holds the locked row `17 September 2031 | First
  engineering health packet and platform panorama`; `:197` is released (008) and `:199+` is
  the spoiler boundary (never named or dated on this page).
- Verified every line citation against current file bytes (008 `:13-14, :16-22, :26-34,
  :36-43, :45-53, :55-61, :63-67, :76-79`; 004 `:16, :37-43, :58-61`; 002 `:16, :21-24,
  :29-30, :40-43`; 003 `:41-42, :63-65`; wiki rh-01-pathfinder `:6, :10, :39-95, :77-82,
  :86-95, :110-121, :126-128, :142-145`; wiki asteria-field `:9-17, :31, :83-93, :115-119`;
  wiki ariane-64 `:35, :63`; wiki red-horizon `:14-22`); all hold.
- Verified reference assets on disk: `docs/vehicles/pathfinder/canonical.png` (1448×1086,
  sha256 above) and `docs/area/asteria-field-02-regional-context.png` (1536×1024, sha256
  above); no `.agents/work/assets/009-health-packet-panorama/` manifest exists yet (the
  visuals card owns it).
- Verified the first-public-wording scan of released `website/news/` + `website/wiki/` MDX
  on 2026-09-19: `POV`, `point of view`, `health packet`, `outcrop`, `egress` = 0 hits;
  `panorama` only as payload-scope term; `sensor(s)`, `commissioning`, `mast`, `ramps`,
  `drive`, `sample`, `dust`, `platform`, `terrain` restricted to the released contexts
  listed above.
- Verified the NASA Science Mastcam-Z panorama URL is live at top search-index position
  (position 1, 19 Sep 2026); recorded the import boundary.
- Verified the serialized chain for this slug: research (this card t_237a6b09) → writer
  t_b60c8f54 (released on this card's completion) → visuals t_6e9f1cae (new imagery, gated
  on the writer) → reviewer t_26edaeda (assigns/verifies simulatedDate 2031-09-17 from
  `docs/SCENARIO.md:198`, records the release decision) → dev t_2d42e950 (commit-and-push
  under standing 2026-09-17 instruction, message `t_<dev card>: publish 009 first panorama
  update`); no separate SEO card exists beyond the writer's integrated pass.
- Confirmed no public MDX, public canon file, release record, commit, or push was changed
  by this research task.

## Review still outstanding / next owner

- `mars-ai-simulator-reviewer` (t_26edaeda): in the review card later in this chain, confirm
  the event mapping (009-health-packet-panorama = row `:198`, 17 Sep 2031), the
  first-image framing (terrain scale and operational reality, not cinematic hero imagery),
  the mast/core-sensor check-out boundary (C6), the released-level relay/symptom handling
  (C4, C7 — symptoms before diagnosis, no specific concern defaulted to), the
  first-public-wording flags (health packet, POV/point of view, outcrop, panorama-as-record,
  egress, ramps — C4/C5/C8 and the flags table), the name-only Asteria Field boundary (C3),
  the new-image decision and pixel continuity (C9, Asset finding), the internal-link list
  incl. `/wiki/vehicle/ariane-64/` and `/wiki/project/red-horizon/` (C10), and verify
  `simulatedDate: 2031-09-17` from the locked row `docs/SCENARIO.md:198` on the built page.
- `mars-ai-simulator-writer` (t_b60c8f54): next owner; draft
  `website/news/009-health-packet-panorama.mdx` with `publication: draft`, `simulatedDate`
  unset, integrated SEO pass, fiction disclosure, date-scoped language, accessible
  structure; first-image and commissioning update — engineering health packet returned,
  first panorama available establishing terrain scale and operational reality, mast/core
  sensor checks at released level, commissioning continues before any movement; symptoms
  before diagnosis if the landing-era uncertainty is mentioned; may link the released
  routes in C10.
- `mars-ai-simulator-visuals` (t_6e9f1cae): execute the new-image brief (one bounded
  panorama candidate, max two, 16:9) via the hosted path with the probe/reporting
  requirements, or the ComfyUI fallback with server stopped; write
  `.agents/work/assets/009-health-packet-panorama/assets.md`.
- No publication or deployment is authorised by this pack.

_This source pack is working material. It does not create canon, approve release, or expose
the private timeline._
