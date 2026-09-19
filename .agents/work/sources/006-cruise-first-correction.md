# Source pack: 006-cruise-first-correction

## Metadata

- Slug: `006-cruise-first-correction`
- Brief: `.agents/work/briefs/006-cruise.md` (page section: first-planned-correction row, `:9`)
- Timeline step: `006-cruise` (page 1 of 3); dependency: released step `005-launch`
- Locked milestone source: `docs/SCENARIO.md:194` — `3 March 2031 | First planned trajectory-correction opportunity`
- Proposed reviewer-assigned record date: `simulatedDate: 2031-03-03` (proposal only — reviewer verifies from the locked row; writer leaves it unset)
- Status: research source pack (2026-09-19); not a canon record, article, or release decision
- Access date for repository and web sources: 2026-09-19 (session date)

## Confidentiality rule

The private timeline (`docs/timeline/006-cruise.md`) is continuity material only and is not
reproduced here. This pack uses the locked milestone row in `docs/SCENARIO.md`, the approved
brief, and released public records. The pack deliberately does not use `docs/timeline/` text as
an article source; its optional-issue suggestion (a small, manageable concern) stays gated and is
not carried into a public claim (see C10). No public file, canon change, release decision,
commit, or push is part of this research card.

## Claim inventory

| ID  | Proposed material claim / use                                                                                                                                                                                                                                                                                                   | Canonical source                                                                                                                                                                                                                                                                                                                                                      | Support and boundary                                                                                                                                                                                                                                                                                         | Status                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| C1  | Red Horizon is a fictional, AI-assisted Mars exploration programme; every public page keeps the standard disclosure present and prominent.                                                                                                                                                                                      | `website/news/005-launch.mdx:16, :50-53`; `website/news/004-launch-provider.mdx:16, :58-61`; `website/wiki/red-horizon.mdx:14, :18-22`; `docs/SCENARIO.md:3-10`                                                                                                                                                                                                       | Released disclosure boilerplate; reuse the established sentence pattern. Required on this page.                                                                                                                                                                                                              | supported                                                                   |
| C2  | Red Horizon One is in interplanetary cruise after its already-released 17 February 2031 Ariane 64 launch and Earth departure.                                                                                                                                                                                                   | `website/news/005-launch.mdx:16-18, :27-35`; `docs/SCENARIO.md:22-23, :193`                                                                                                                                                                                                                                                                                           | Released by step 005. State only at the released level: launched 17 Feb 2031, early checkout met nominal criteria, mission entered cruise. No launch-time, orbit, or performance detail.                                                                                                                     | supported                                                                   |
| C3  | The cruise stage handles navigation, thermal control, and communications with Earth; the mission has moved from ground control to deep-space operations.                                                                                                                                                                        | `website/news/004-launch-provider.mdx:32-33` (solar-powered cruise stage for navigation, thermal control, communications); `website/news/005-launch.mdx:29-35` (transition to deep-space operations)                                                                                                                                                                  | Released architecture + launch-update context. Use generically for the cruise frame; do not add subsystem specs or numbers.                                                                                                                                                                                  | supported                                                                   |
| C4  | A trajectory-correction opportunity is a planned manoeuvre to refine the course toward Mars; explain it in plain, accessible language.                                                                                                                                                                                          | `.agents/work/briefs/006-cruise.md:19` (approved definition); NASA Science, Basics of Space Flight, Chapter 15 "Cruise" (TCMs "are executed to fine-tune the trajectory"); Chapter 13 "Navigation" (during interplanetary cruise a minor flight-path control maneuver is typically called a Trajectory Correction Maneuver, TCM) — URLs verified HTTP 200, 2026-09-19 | Plain-language definition only. Do not import real ΔV magnitudes, engine times, or real-mission telemetry examples from the NASA chapters into the fiction.                                                                                                                                                  | supported (definition only)                                                 |
| C5  | The first planned trajectory-correction opportunity is the milestone dated 3 March 2031.                                                                                                                                                                                                                                        | `docs/SCENARIO.md:194` (locked row); already released naming at `website/news/005-launch.mdx:37-38` ("first planned trajectory-correction opportunity, expected on 3 March 2031")                                                                                                                                                                                     | Supported as released canon. This page is the in-fiction record of that milestone; reviewer verifies `simulatedDate` 2031-03-03 from the locked row.                                                                                                                                                         | supported                                                                   |
| C6  | The released 005 page frames what the opportunity tests: whether the cruise stage has placed the stack on the correct course for Mars, and whether navigation and communications systems perform as designed during the long cruise phase. The locked row records only the milestone name and date — no outcome, no parameters. | `website/news/005-launch.mdx:37-41`; `docs/SCENARIO.md:194` (two-column row)                                                                                                                                                                                                                                                                                          | The page may report the opportunity was taken / assessed within that released frame ("as planned", "routine"). No success superlative, no course-state claim beyond the released "correct course" framing, no figures.                                                                                       | supported with boundary; outcome beyond "as planned" is unresolved by canon |
| C7  | The next status the programme expects to report is a cruise checkout around 20 May 2031, covering the health of all flight elements.                                                                                                                                                                                            | `website/news/005-launch.mdx:41-42`; `docs/SCENARIO.md:195` (locked row for the later page)                                                                                                                                                                                                                                                                           | Released naming in 005. This page may point to the cruise checkout as the next expected status; it must not report the checkout's content, results, or later correction opportunities (row `:196`) as having happened.                                                                                       | supported as future-status frame only                                       |
| C8  | The mission destination is Asteria Field (name already released); no landing/entry/site detail beyond the name.                                                                                                                                                                                                                 | `website/news/005-launch.mdx:43` ("arrival at Asteria Field lies ahead"); `website/wiki/red-horizon.mdx:34`; entry gate `docs/SCENARIO.md:279`                                                                                                                                                                                                                        | On this cruise page Asteria Field appears as a destination name at most; keep it optional and sparse. Coordinates, plates, ellipse, traverse, hazards, and all landing-design facts remain gated (`docs/SCENARIO.md:279`).                                                                                   | supported, name-only                                                        |
| C9  | Routine cruise operations (navigation, thermal control, communications with Earth, instrument safing/checkout) may be described generically at the just-released public level, e.g. checking spacecraft health and performing planned course refinements.                                                                       | `website/news/005-launch.mdx:29-35, :37-41`; `website/news/004-launch-provider.mdx:32-33`; NASA Ch 15 (cruise: health checks, calibrations, planned trajectory refinements)                                                                                                                                                                                           | Generic descriptions only; no subsystem, power, thermal, or communications numbers; no invented schedule items.                                                                                                                                                                                              | supported (generic)                                                         |
| C10 | At most one manageable technical concern (e.g. sensor calibration drift, thermal margin, communications schedule constraint) with its next review is permitted only if traceable to an approved source; otherwise routine is the valid story. For this page no approved public source names such a concern on 3 March 2031.     | `.agents/work/briefs/006-cruise.md:22` (condition); `docs/timeline/006-cruise.md` (private optional idea — gated, not used)                                                                                                                                                                                                                                           | No approved source exists for a specific concern on this page, so the default story is routine operations. A concern must not be invented; if the human story owner authorizes one later, it must be added with its own review and must not contradict entry-readiness/landing or the later rover condition. | unresolved by design — do not default to a concern                          |
| C11 | Ariane 64 is a real launcher designation; naming it says which launcher this fictional mission is planned around and nothing more; no real agency, launcher operator, or launch facility is a partner or has endorsed the programme.                                                                                            | `website/news/005-launch.mdx:20-25, :50-53`; `website/news/004-launch-provider.mdx:23-27, :58-61`; `docs/SCENARIO.md:280-282` (real institutions require explicit review before public mention)                                                                                                                                                                       | Required because the 005-launch link appears in this page's context. Reuse released non-endorsement wording; do not name real providers/operators/facilities beyond the already-released vehicle designation.                                                                                                | supported (disclosure)                                                      |
| C12 | The article's in-fiction record date should be `2031-03-03`.                                                                                                                                                                                                                                                                    | `docs/SCENARIO.md:194` (locked row); proposed at `.agents/work/briefs/006-cruise.md:9`                                                                                                                                                                                                                                                                                | Reviewer-owned exact value; writer must leave `simulatedDate` unset and the reviewer must record/verify it against the locked row.                                                                                                                                                                           | reviewer-owned                                                              |

## Canonical source notes

### Locked scenario source

`docs/SCENARIO.md:194` is the only source for this milestone and its calendar day: `3 March 2031 |
First planned trajectory-correction opportunity`. The row holds exactly two columns (date and
milestone name), so it licenses the event and its date, not an outcome, magnitude, or technique.
The milestones immediately after it (`:195` cruise checkout 20 May, `:196` final approach 21 Aug,
`:197` atmospheric entry and landing 16 Sep) stay out of this page except as already-released
future-status framing (C7). Entry/landing and all later rows are the spoiler boundary.

### Released article 005 (primary released context)

`website/news/005-launch.mdx` is published with `simulatedDate: 2031-02-17`. It is the released
record this page continues: launch on Ariane 64, early checkout nominal, cruise entry, the
transition to deep-space operations, the naming of the first correction opportunity (3 March) and
the next expected status (cruise checkout around 20 May), and "arrival at Asteria Field lies
ahead". This page is the in-fiction follow-up dated 2031-03-03 and may link to
`/news/005-launch/` for context (link only as needed). It must not repeat 005's launch-day status
as if it were the current subject.

### Released article 004 (architecture context)

`website/news/004-launch-provider.mdx` (published, `simulatedDate: 2030-03-11`) supplies the
released cruise-stage description (`:32-33`) and the Ariane 64 real-vehicle/non-endorsement
wording (`:23-27, :58-61`). No new architecture facts are allowed on this page.

### Public wiki disclosure

`website/wiki/red-horizon.mdx:14, :18-22` supports the standard disclosure that Red Horizon is
fiction produced by a real project and that real places/technologies appear for grounding only.
This page must preserve that framing and never imply a real agency partnership.

## Real-world sources

Used only for bounded plain-language technical context, never as support for fictional mission
occurrence or programme participation.

1. NASA Science, _Basics of Space Flight_, Chapter 15 "Cruise",
   https://science.nasa.gov/learn/basics-of-space-flight/chapter15-1/ (accessed 19 Sep 2026;
   verified HTTP 200). Supports the plain explanation that cruise is the travel phase and that
   trajectory correction maneuvers are executed to fine-tune the trajectory, with instruments
   powered on, exercised, and calibrated during designated checkout periods. Generic context only.
2. NASA Science, _Basics of Space Flight_, Chapter 13 "Navigation",
   https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/ (accessed 19 Sep 2026;
   verified HTTP 200). Supports the definition that a minor interplanetary-cruise flight-path
   control maneuver is typically called a Trajectory Correction Maneuver. **Boundary:** this
   chapter contains real ΔV magnitudes, engine firing descriptions, and real-mission numbers —
   none of those may be imported into the fictional page.

The scenario's own real-world grounding list (`docs/SCENARIO.md:284-312`) is available for
reference; no additional real-world source is required for the central claim (a fictional
milestone whose canonical source is the locked row). The planning anchor transfer duration in
`docs/SCENARIO.md:176-177` is private scenario detail (verified absent from every public route on
2026-09-19) and must not appear as a public number.

## Forbidden fact ledger

Intentionally unsupported for this page; must remain absent from prose, metadata, SEO fields,
links, asset names, alt text, captions, and summaries:

- `docs/timeline/` content or paths; private scenario phraseology.
- Exact trajectory parameters: correction magnitude, delta-v, burn times/thruster durations,
  course values, or any real-mission maneuver numbers (including from NASA Ch 13).
- Telemetry, fuel state, power or thermal numbers, communications rates, or mass figures.
- Transfer duration / transit-day count including the `docs/SCENARIO.md:176-177` planning anchor.
- Entry readiness (before step 007), entry date (16 September 2031), landing success, surface
  operations, egress, drive results, samples, or discovery — in any form.
- Landing ellipse, landing-site details beyond the released destination name, traverse plans,
  hazards, surface targets, coordinates, or plates (gated at `docs/SCENARIO.md:279`).
- Real facility/operator/agency/partner names and any partnership or endorsement implication;
  real institutional mentions (incl. any NASA/JPL/ESA facility names) beyond the generic
  non-endorsement disclosure pattern already released.
- Final-repair plans, anomalies that contradict later steps, or any later-step event
  (steps 007–011), including the scope of the 20/21 August correction.
- Invented dates, mass figures, or technical numbers; any claim that a specific technical concern
  occurred (see C10).
- Documentary image framing: no imagery on this page, so no illustration may be presented as a
  photograph or mission record.
- Links to anything other than released public routes (`/news/005-launch/`,
  `/news/004-launch-provider/` as needed — never to private paths or working papers).

## Asset finding (visual decision)

Text-only capsule: `no new imagery`. No approved in-transit visual exists. The Ariane plates under
`docs/vehicles/ariane/` (`canonical.png`, `lunch.png`, `side-view.png`, `front-left.png`,
`rear-right.png`) are launch/vehicle plates and none carries an in-cruise moment;
`docs/vehicles/ariane/travelling-to-mars.png` exists on disk but remains gated per the brief
(`.agents/work/briefs/006-cruise.md:36`) and must not be reused for this page. Pathfinder plates
are surface-rover plates; Asteria Field plates are landing-site plates — none applies. The IMAGES
card for this slug (t_a751ca6a, assigned to `mars-ai-simulator-visuals`) already carries the exact
text-only brief and must write `.agents/work/assets/006-cruise-first-correction/assets.md`
recording the decision, `placement: none`, and zero candidates.

## Validation completed (2026-09-19)

- Read the task brief, `AGENTS.md`, `docs/INSTRUCTIONS.md`, the research-and-fact-check project
  skill, `.agents/work/briefs/006-cruise.md` (page section), `docs/timeline/006-cruise.md`
  (continuity control only), `docs/SCENARIO.md` (incl. `:22-23, :173-196, :279-282, :284-312`),
  and the released `website/news/005-launch.mdx`, `website/news/004-launch-provider.mdx`, and
  `website/wiki/red-horizon.mdx`.
- Verified `docs/SCENARIO.md:194` holds the locked row `3 March 2031 | First planned
  trajectory-correction opportunity`; `:195`/`:196` hold the later cruise rows that are
  future-status only for this page; `:197`+ is the spoiler boundary.
- Verified every line citation against current file bytes (005-launch `:16-18, :20-25, :27-35,
  :37-43, :50-53`; 004-launch-provider `:23-27, :32-33, :58-61`; wiki red-horizon `:14, :18-22,
  :34`); all hold.
- Verified no public route under `website/` contains the private transfer-duration anchor
  ("210.7", transfer-day counts) or any exact maneuver number on 2026-09-19.
- Verified real-world URLs return HTTP 200 (NASA Ch 15 and Ch 13) and recorded the boundary that
  Ch 13's real ΔV/mission numbers are not importable.
- Confirmed the serialized chain for this slug: research (this card t_1a202744) → writer
  t_264c1f92 (released on this card's completion) → visuals t_a751ca6a (exact text-only IMAGES
  brief) → reviewer; no separate SEO card exists beyond the writer's integrated pass.
- Confirmed no public MDX, public canon file, release record, commit, or push was changed by this
  research task.

## Review still outstanding / next owner

- `mars-ai-simulator-reviewer`: in the review card later in this chain, confirm the event mapping
  (006-cruise page 1), the no-outcome wording boundary (C6), the future-status frame for the
  cruise checkout (C7), the name-only Asteria Field boundary (C8), the routine default (C10),
  the text-only decision, and verify `simulatedDate: 2031-03-03` from the locked row.
- `mars-ai-simulator-writer` (t_264c1f92): next owner; draft
  `website/news/006-cruise-first-correction.mdx` with `publication: draft`, `simulatedDate` unset,
  integrated SEO pass, short cruise update, plain definition of a correction opportunity, the
  next-status expectation, fiction disclosure; may link to `/news/005-launch/` and
  `/news/004-launch-provider/` as needed; no exact trajectory parameters/telemetry, no later-step
  leakage, date-scoped language.
- No publication or deployment is authorised by this pack.

_This source pack is working material. It does not create canon, approve release, or expose the
private timeline._
