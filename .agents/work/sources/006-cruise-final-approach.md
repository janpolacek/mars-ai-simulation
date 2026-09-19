# Source pack: 006-cruise-final-approach

## Metadata

- Slug: `006-cruise-final-approach`
- Brief: `.agents/work/briefs/006-cruise.md` (page section: final-approach row, `:11`)
- Timeline step: `006-cruise` (page 3 of 3); dependency: released step `005-launch` and released pages 1–2 of this step (`006-cruise-first-correction`, `006-cruise-checkout`)
- Locked milestone source: `docs/SCENARIO.md:196` — `21 August 2031 | Final approach correction opportunity`
- Proposed reviewer-assigned record date: `simulatedDate: 2031-08-21` (proposal only — reviewer verifies from the locked row; writer leaves it unset)
- Status: research source pack (2026-09-19); not a canon record, article, or release decision
- Access date for repository and web sources: 2026-09-19 (session date)

## Confidentiality rule

The private timeline (`docs/timeline/006-cruise.md`) is continuity material only and is not
reproduced here. This pack uses the locked milestone row in `docs/SCENARIO.md`, the approved
brief, the released public records (005, 006 pages 1–2, 004, wiki), and the downstream card
bodies created by the planning container. The optional-issue idea in the private timeline stays
gated and is not carried into a public claim (see C11). The milestone rows after `:196`
(`:197` entry/landing and all later surface steps 007–011) are the spoiler boundary and are
never referenced, named, dated, or implied. No public file, canon change, release decision,
commit, or push is part of this research card.

## Claim inventory

| ID  | Proposed material claim / use                                                                                                                                                                                                                                                                                                 | Canonical source                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Support and boundary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Status                                                           |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| C1  | Red Horizon is a fictional, AI-assisted Mars exploration programme; every public page keeps the standard disclosure present and prominent.                                                                                                                                                                                    | `website/news/006-cruise-checkout.mdx:13-14, :59-62`; `website/news/006-cruise-first-correction.mdx:13-14, :55-58`; `website/news/005-launch.mdx:16, :50-53`; `website/wiki/red-horizon.mdx:14, :18-22`; `docs/SCENARIO.md:3-6` (private canon, boundary only)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Released disclosure boilerplate; reuse the established paragraph. Required on this page.                                                                                                                                                                                                                                                                                                                                                                                                                                             | supported                                                        |
| C2  | Red Horizon One is in interplanetary cruise after its already-released 17 February 2031 Ariane 64 launch and Earth departure.                                                                                                                                                                                                 | `website/news/005-launch.mdx:16-18, :27-35`; `website/news/006-cruise-first-correction.mdx:15-18`; `website/news/006-cruise-checkout.mdx:15-19`; `docs/SCENARIO.md:193` (locked row)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Released by step 005 and restated on released pages 1–2 of this step. State only at the released level: launched 17 Feb 2031, early checkout met nominal criteria, mission entered cruise. No launch-time, orbit, or performance detail.                                                                                                                                                                                                                                                                                             | supported                                                        |
| C3  | The cruise stage handles navigation, thermal control, and communications with Earth; the mission has moved from ground control to deep-space operations, and routine cruise operations continue.                                                                                                                              | `website/news/004-launch-provider.mdx:32-33` (solar-powered cruise stage for navigation, thermal control, communications); `website/news/005-launch.mdx:29-35` (transition to deep-space operations); `website/news/006-cruise-first-correction.mdx:37-43`; `website/news/006-cruise-checkout.mdx:40-47`                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Released architecture + release context. Use generically for the cruise frame; no subsystem specs or numbers.                                                                                                                                                                                                                                                                                                                                                                                                                        | supported                                                        |
| C4  | Plain-language definition for this page: a final approach correction opportunity is a planned manoeuvre to refine the spacecraft's course toward Mars, carried out as the stack nears the end of its interplanetary cruise — ahead of the arrival phase.                                                                      | `.agents/work/briefs/006-cruise.md:19` (approved definition of a trajectory-correction opportunity); `.agents/work/briefs/006-cruise.md:11` (page-3 row names the final approach correction); writer card t_04a389ea acceptance ("the final approach correction opportunity executed/assessed as planned ahead of the arrival phase"); released definition frame at `website/news/006-cruise-first-correction.mdx:20-27` and `website/news/006-cruise-checkout.mdx:21-30`; NASA Science, Basics of Space Flight, Chapter 15 "Cruise" (TCMs "are executed to fine-tune the trajectory"); Chapter 13 "Navigation" (during interplanetary cruise a minor flight-path control maneuver is typically called a TCM) — URLs live per search index, verified 2026-09-19 | Define the correction in the same accessible way pages 1–2 did, adding only the final-approach positioning (near the end of cruise, ahead of the arrival phase). Do not import real ΔV magnitudes, engine times, or real-mission telemetry examples from the NASA chapters into the fiction.                                                                                                                                                                                                                                         | supported (definition only)                                      |
| C5  | The 21 August 2031 milestone is the in-fiction record of `Final approach correction opportunity` (locked row). The released checkout article already named it as the next status: "a final approach correction opportunity around 21 August 2031".                                                                            | `docs/SCENARIO.md:196` (locked row, date + milestone name); `website/news/006-cruise-checkout.mdx:49-51, :7`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | The row licenses the event and its calendar day; the released checkout record already names the milestone and date publicly. Unlike page 2 (where the final-approach name was a first public naming flagged for reviewer), the naming here is released canon and needs no first-naming confirmation — the page 2 flag (t_989e1191 C8) was resolved by the 006-cruise-checkout release (pushed b2f770f). Reviewer still verifies `simulatedDate` 2031-08-21 from the locked row. This page is the in-fiction record of the milestone. | supported (name/date/framing)                                    |
| C6  | The final approach correction was carried out and assessed within the planned frame: routine operations have held, and the spacecraft is tracking as expected — the established released record for correction updates. No figures or measurements of any kind.                                                               | `website/news/006-cruise-checkout.mdx:32-38` (released pattern: "carried out and assessed within the planned frame: routine operations have held, and the spacecraft is tracking as expected"; "discloses no figures or measurements of any kind"); `website/news/006-cruise-first-correction.mdx:29-35` (page-1 precedent); writer card t_04a389ea acceptance ("executed/assessed as planned")                                                                                                                                                                                                                                                                                                                                                                 | Mirror the released routine frame exactly, as pages 1–2 did. Anything beyond it (course-state claims, measured margins, anomaly-free proof, success superlatives, per-subsystem health) is not in canon and must not be invented.                                                                                                                                                                                                                                                                                                    | supported with boundary                                          |
| C7  | This correction is the third scheduled course-refinement manoeuvre of the journey, following the released first (3 March 2031) and second (20 May 2031) opportunities.                                                                                                                                                        | `website/news/006-cruise-first-correction.mdx:16-17` ("first scheduled course-refinement manoeuvre"); `website/news/006-cruise-checkout.mdx:17-18, :2` ("second planned course-refinement manoeuvre"); locked rows `docs/SCENARIO.md:194-196`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | The ordinal follows the released counting convention and the locked three-row sequence :194/:195/:196. The word "third" appears in no public route (0-hit scan of `website/`, 2026-09-19 — matches only test comments), so if the writer uses the "third" label it is a new public wording derived from released counting; alternatively the released label "final approach correction opportunity" suffices without an ordinal. Flag for reviewer confirmation if "third" is used.                                                  | supported with boundary (optional ordinal — reviewer to confirm) |
| C8  | The next status the programme expects to report is the approach and arrival-preparation phase, in generic terms — NOT a claim of entry readiness (before step 007), NOT landing success, and no later-step milestone names or dates.                                                                                          | Writer card t_04a389ea acceptance ("next status expectation in generic terms (approach/landing-preparation planning, NOT a claim of entry readiness or landing success)"); released future-status pattern `website/news/006-cruise-first-correction.mdx:45-47` and `website/news/006-cruise-checkout.mdx:49-51` ("The next status the programme expects to report is …"); released "arrival at Asteria Field lies ahead" at `website/news/005-launch.mdx:42-43`, `006-cruise-first-correction.mdx:46-47`, `006-cruise-checkout.mdx:51`                                                                                                                                                                                                                          | The safest form mirrors the released sentence: the arrival phase lies ahead and the programme will report on the approach / arrival preparation in its next record. Do NOT name row `:197` (atmospheric entry and landing) or its date, do not claim entry readiness or landing success, and do not reference rows `:197+`. Reviewer approves the exact next-status wording.                                                                                                                                                         | supported with boundary (reviewer to confirm wording)            |
| C9  | The mission destination is Asteria Field (name already released); no landing/entry/site detail beyond the name.                                                                                                                                                                                                               | `website/news/005-launch.mdx:43`; `website/news/006-cruise-first-correction.mdx:47`; `website/news/006-cruise-checkout.mdx:51`; `website/wiki/red-horizon.mdx:34` (name + designation context); gate `docs/SCENARIO.md:279`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Keep as the released "arrival at Asteria Field lies ahead" phrasing at most. Coordinates, plates, ellipse, traverse, hazards, and all landing-design facts remain gated for article prose, alt text, and captions (`docs/SCENARIO.md:279`).                                                                                                                                                                                                                                                                                          | supported, name-only                                             |
| C10 | Routine cruise operations (navigation, thermal control, communications with Earth, instrument safing/checkout) may be described generically at the just-released public level.                                                                                                                                                | `website/news/005-launch.mdx:29-35, :37-41`; `website/news/006-cruise-first-correction.mdx:37-43`; `website/news/006-cruise-checkout.mdx:40-47`; `website/news/004-launch-provider.mdx:32-33`; NASA Ch 15 (checkout periods: instruments powered on, exercised, calibrated)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Generic descriptions only; no subsystem, power, thermal, or communications numbers; no invented schedule items.                                                                                                                                                                                                                                                                                                                                                                                                                      | supported (generic)                                              |
| C11 | At most one manageable technical concern (e.g. sensor calibration drift, thermal margin, communications schedule constraint) with its next review is permitted only if traceable to an approved source; otherwise routine is the valid story. For this page no approved public source names such a concern on 21 August 2031. | `.agents/work/briefs/006-cruise.md:22` (condition); `docs/timeline/006-cruise.md` (private optional idea — gated, not used)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Same finding as pages 1–2: no approved source exists for a specific concern at this milestone, so the default story is routine operations. A concern must not be invented; if the human story owner authorizes one later, it needs its own review and must not contradict entry-readiness/landing or the later rover condition.                                                                                                                                                                                                      | unresolved by design — do not default to a concern               |
| C12 | Ariane 64 is a real launcher designation; naming it says which launcher this fictional mission is planned around and nothing more; no real agency, launcher operator, or launch facility is a partner or has endorsed the programme.                                                                                          | `website/news/005-launch.mdx:20-25, :50-53`; `website/news/006-cruise-checkout.mdx:53-57, :59-62`; `website/news/004-launch-provider.mdx:23-27, :58-61`; `docs/SCENARIO.md:281-282` (real institutions require explicit review before public mention)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Required if the launch/cruise context brings Ariane 64 into view (link to `/news/005-launch/` or `/news/004-launch-provider/`), as on pages 1–2. Reuse released non-endorsement wording; do not name real providers/operators/facilities beyond the already-released vehicle designation.                                                                                                                                                                                                                                            | supported (disclosure)                                           |
| C13 | The article's in-fiction record date should be `2031-08-21`.                                                                                                                                                                                                                                                                  | `docs/SCENARIO.md:196` (locked row); proposed at `.agents/work/briefs/006-cruise.md:11`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Reviewer-owned exact value; writer must leave `simulatedDate` unset and the reviewer must record/verify it against the locked row, then verify it on the built page (reviewer card t_a3cfbc80).                                                                                                                                                                                                                                                                                                                                      | reviewer-owned                                                   |

## Canonical source notes

### Locked scenario source

`docs/SCENARIO.md:196` is the only source for this milestone and its calendar day: `21 August 2031 |
Final approach correction opportunity`. The row holds exactly two columns (date and milestone
name), so it licenses the event and its date, not an outcome, magnitude, or technique. Rows
before it (`:193` launch, `:194` first correction 3 March, `:195` cruise checkout and second
correction 20 May) are released public record (the checkout row's article was pushed in commit
b2f770f on 2026-09-19 and carries `simulatedDate: 2031-05-20`). The milestones after it —
`:197` (16 September 2031, atmospheric entry and landing) and `:198+` (surface steps 007–011) —
are the spoiler boundary and must not be referenced in any form, including their milestone names
or the entry/landing date.

### Released article 005 (primary released context)

`website/news/005-launch.mdx` is published with `simulatedDate: 2031-02-17`. It is the released
record this page continues: launch on Ariane 64, early checkout nominal, cruise entry, the
transition to deep-space operations, naming of the first correction opportunity (`:37-40`), the
checkout as the next expected status (`:41-42`), and "arrival at Asteria Field lies ahead"
(`:42-43`).

### Released article 006 page 1 (immediate predecessor of page 2)

`website/news/006-cruise-first-correction.mdx` is published with `simulatedDate: 2031-03-03`. It
records the first planned trajectory-correction opportunity as "carried out and assessed within
the planned frame: routine operations have held, and the spacecraft is tracking as expected" with
"no figures or measurements of any kind" (`:29-35`), defines a correction opportunity plainly
(`:20-27`), and names the checkout as the next status (`:45-47`).

### Released article 006 page 2 (immediate predecessor)

`website/news/006-cruise-checkout.mdx` is published with `simulatedDate: 2031-05-20`. It is the
released record of the cruise checkout and second correction, reports the same routine frame
(`:32-38`), and — critically for this page — already names this page's milestone publicly: "The
next status the programme expects to report is a final approach correction opportunity around
21 August 2031, as already scheduled in the mission's sequence. The mission remains in cruise,
and arrival at Asteria Field lies ahead." (`:49-51`). Page 3 must continue this record without
contradicting it and without repeating the 20 May event as if current.

### Released article 004 (architecture context)

`website/news/004-launch-provider.mdx` (published, `simulatedDate: 2030-03-11`) supplies the
released cruise-stage description (`:32-33`) and the Ariane 64 real-vehicle/non-endorsement
wording (`:23-27, :58-61`). No new architecture facts are allowed on this page.

### Public wiki disclosure

`website/wiki/red-horizon.mdx:14, :18-22` supports the standard disclosure that Red Horizon is
fiction produced by a real project and that real places/technologies appear for grounding only;
`:34` carries the already-released Asteria Field designation. This page must preserve that
framing, keep Asteria Field name-only in article copy, and never imply a real agency partnership.

### Downstream card bodies (planning-container decisions)

The writer card t_04a389ea, visuals card t_0c212d4a, reviewer card t_a3cfbc80, and dev card
t_3bc27807, all created by the planning container, codify the approved scope for this page: a
short cruise update recording the final approach correction opportunity executed/assessed as
planned ahead of the arrival phase; the next-status expectation in generic approach /
arrival-preparation terms (NOT entry readiness or landing success); imagery stays text-only; the
reviewer assigns `simulatedDate` 2031-08-21 from `docs/SCENARIO.md:196`; dev commits and pushes
with the message `t_<dev card>: publish 006 cruise final-approach update` under the standing
2026-09-17 commit-and-push instruction. This pack treats those card bodies as part of the
approved working plan and provides the canonical citations and boundaries for them.

## Real-world sources

Used only for bounded plain-language technical context, never as support for fictional mission
occurrence or programme participation.

1. NASA Science, _Basics of Space Flight_, Chapter 15 "Cruise",
   https://science.nasa.gov/learn/basics-of-space-flight/chapter15-1/ (verified live via search
   index, top position, 19 Sep 2026; HTTP-200-verified earlier the same day in the page-1 pack).
   Supports the plain explanation that trajectory correction maneuvers are executed to fine-tune
   the trajectory and that instruments are powered on, exercised, and calibrated during
   designated checkout periods. Generic context only.
2. NASA Science, _Basics of Space Flight_, Chapter 13 "Navigation",
   https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/ (verified live via search
   index, top position, 19 Sep 2026; HTTP-200-verified earlier the same day in the page-1 pack).
   Supports the definition that during interplanetary cruise a minor flight-path control
   maneuver is typically called a Trajectory Correction Maneuver. **Boundary:** this chapter
   contains real ΔV magnitudes, engine firing descriptions, and real-mission numbers — none of
   those may be imported into the fictional page.

Note: direct `curl`/`web_extract` verification was blocked by this session's security policy
(unattended single-query mode); both URLs are confirmed live at top search-index positions and
were HTTP-200-verified earlier the same day in the page-1 source pack. The scenario's own
real-world grounding list (`docs/SCENARIO.md:284-312`) is available for reference; no additional
real-world source is required for the central claim (a fictional milestone whose canonical source
is the locked row). The planning anchor transfer duration in `docs/SCENARIO.md:176-177` /
`docs/SCENARIO.md:296` (210.7-day outbound transfer) is private scenario detail (verified absent
from every public route, 2026-09-19) and must not appear as a public number.

## Forbidden fact ledger

Intentionally unsupported for this page; must remain absent from prose, metadata, SEO fields,
links, asset names, alt text, captions, summaries, and commit messages:

- `docs/timeline/` content or paths; private scenario phraseology.
- Exact trajectory parameters: correction magnitude, delta-v, burn times/thruster durations,
  course values, or any real-mission maneuver numbers (including from NASA Ch 13).
- Telemetry, fuel state, power or thermal numbers, communications rates, or mass figures.
- Transfer duration / transit-day count including the `docs/SCENARIO.md:176-177` /
  `docs/SCENARIO.md:296` planning anchor.
- Outcome claims beyond the released routine frame (C6): course-state claims, measured margins,
  anomaly-free proof, success superlatives, per-subsystem health results, or any figures.
- Entry readiness (before step 007), the entry/landing milestone name or date (16 September
  2031), landing success, surface operations, egress, drive results, samples, or discovery — in
  any form. Rows `:197+` milestone names stay out entirely, including milestone names and the
  entry/landing date held at `docs/SCENARIO.md:197`.
- Landing ellipse, landing-site details beyond the released destination name, traverse plans,
  hazards, surface targets, coordinates, or plates (gated at `docs/SCENARIO.md:279`).
- Real facility/operator/agency/partner names and any partnership or endorsement implication;
  real institutional mentions beyond the generic non-endorsement disclosure pattern already
  released.
- Final-repair plans, anomalies that contradict later steps, or any later-step event
  (steps 007–011).
- Invented dates, mass figures, or technical numbers; any claim that a specific technical concern
  occurred (see C11).
- Documentary image framing: no imagery on this page, so no illustration may be presented as a
  photograph or mission record.
- Links to anything other than released public routes (`/news/005-launch/`,
  `/news/006-cruise-checkout/`, `/news/006-cruise-first-correction/`,
  `/news/004-launch-provider/` as needed — never to private paths or working papers).

## Asset finding (visual decision)

Text-only capsule: `no new imagery`. No approved in-transit visual exists. Verified on 2026-09-19:
`docs/vehicles/ariane/` holds only launch/vehicle plates (`canonical.png`, `lunch.png`,
`side-view.png`, `front-left.png`, `rear-right.png`, plus dossier `ariane-64.md`) and none carries
an in-cruise moment; `docs/vehicles/ariane/travelling-to-mars.png` exists on disk but remains
gated per the brief (`.agents/work/briefs/006-cruise.md:36`) and must not be reused for this page.
Pathfinder plates are surface-rover plates; Asteria Field plates (`docs/area/asteria-field-*.png`)
and `docs/payload/*.png` are site/payload plates; `docs/brand/*` is identity material — none
applies. The IMAGES card for this slug (t_0c212d4a, assigned to `mars-ai-simulator-visuals`)
already carries the exact text-only brief and must write
`.agents/work/assets/006-cruise-final-approach/assets.md` recording the decision,
`placement: none`, and zero candidates (no such manifest exists on disk as of 2026-09-19).

## Validation completed (2026-09-19)

- Read the task card (t_e960b29a), the downstream writer card (t_04a389ea), visuals card
  (t_0c212d4a), reviewer card (t_a3cfbc80) and dev card (t_3bc27807), `AGENTS.md`,
  `docs/INSTRUCTIONS.md`, the research-and-fact-check project skill, the planner role definition,
  `.agents/work/briefs/006-cruise.md` (page section), `docs/timeline/006-cruise.md` (continuity
  control only), `docs/SCENARIO.md` (incl. `:1-6, :173-208, :272-296`), and the released
  `website/news/005-launch.mdx`, `website/news/006-cruise-first-correction.mdx`,
  `website/news/006-cruise-checkout.mdx`, `website/news/004-launch-provider.mdx`, and
  `website/wiki/red-horizon.mdx`.
- Verified `docs/SCENARIO.md:196` holds the locked row `21 August 2031 | Final approach
  correction opportunity`; `:193-195` are released and `:197+` is the spoiler boundary (never
  named or dated).
- Verified every line citation against current file bytes (005-launch `:16-18, :20-25, :27-35,
  :37-43, :50-53`; 006-cruise-first-correction `:13-18, :20-27, :29-35, :37-47, :55-58`;
  006-cruise-checkout `:7, :13-19, :21-30, :32-38, :40-47, :49-51, :53-57, :59-62`;
  004-launch-provider `:23-27, :32-33, :58-61`; wiki red-horizon `:14, :18-22, :34`); all hold.
- Verified the final-approach naming is released canon: a `website/` scan on 2026-09-19 shows
  "final approach" and "21 August" appear ONLY in `website/news/006-cruise-checkout.mdx`
  (`:7, :49-51`), which is published (`simulatedDate: 2031-05-20`) — the page-2 pack's
  first-public-naming flag for row `:196` is resolved by that release; no reviewer confirmation
  of the naming itself is required, only of `simulatedDate` 2031-08-21.
- Verified no public route under `website/` contains the private transfer-duration anchor
  ("210.7", "transfer duration") or "entry"/"landing" milestone naming for rows `:197+` on
  2026-09-19; scan hits for "entry"/"landing" are test fixtures and already-soft architecture
  terms in released 004/wiki routes, not step-007 milestone claims — the page must not add any.
- Verified the word "third" appears in no public route (0-hit scan of `website/`, matches only
  test code comments on 2026-09-19) — the C7 ordinal, if used, is a new public wording for the
  reviewer to confirm.
- Verified the real-world NASA source URLs are live at top search-index positions on 2026-09-19,
  consistent with the HTTP 200 verification recorded in the page-1 source pack earlier the same
  day; recorded the boundary that Ch 13's real ΔV/mission numbers are not importable.
- Confirmed no `.agents/work/assets/006-cruise-final-approach/` manifest exists yet; the visuals
  card t_0c212d4a owns it.
- Confirmed the serialized chain for this slug: research (this card t_e960b29a) → writer
  t_04a389ea (released on this card's completion) → visuals t_0c212d4a (text-only IMAGES brief,
  gated on the writer) → reviewer t_a3cfbc80 (assigns/verifies simulatedDate 2031-08-21 from
  `docs/SCENARIO.md:196`) → dev t_3bc27807 (commit-and-push under standing 2026-09-17
  instruction); no separate SEO card exists beyond the writer's integrated pass.
- Confirmed no public MDX, public canon file, release record, commit, or push was changed by this
  research task.

## Review still outstanding / next owner

- `mars-ai-simulator-reviewer` (t_a3cfbc80): in the review card later in this chain, confirm the
  event mapping (006-cruise page 3), the routine-frame boundary for the final approach correction
  (C6), the optional "third" ordinal (C7), the generic approach/arrival-preparation next-status
  wording — no entry readiness or landing success, no row `:197+` naming (C8), the name-only
  Asteria Field boundary (C9), the routine default (C11), the text-only decision, and verify
  `simulatedDate: 2031-08-21` from the locked row `docs/SCENARIO.md:196` on the built page.
- `mars-ai-simulator-writer` (t_04a389ea): next owner; draft
  `website/news/006-cruise-final-approach.mdx` with `publication: draft`, `simulatedDate` unset,
  integrated SEO pass, short cruise update recording the final approach correction opportunity
  executed/assessed as planned ahead of the arrival phase, plain definition per C4, next-status
  expectation in generic terms per C8, fiction disclosure, date-scoped language, accessible
  structure; may link to `/news/006-cruise-checkout/`, `/news/006-cruise-first-correction/`,
  `/news/005-launch/`, and `/news/004-launch-provider/` as needed; no exact trajectory
  parameters/telemetry, no entry-readiness/landing/surface facts, no later-step leakage.
- No publication or deployment is authorised by this pack.

_This source pack is working material. It does not create canon, approve release, or expose the
private timeline._
