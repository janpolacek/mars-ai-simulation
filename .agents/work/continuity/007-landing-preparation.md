# Continuity verdict: 007-landing-preparation

- Card: `t_0c98f3bf` — editorial final gate + continuity (one pass), stage review
- Article: `website/news/007-landing-preparation.mdx`
- Route once published: `/news/007-landing-preparation/`
- Timeline step: `007-landing-preparation` (no locked milestone row; record date
  human-assigned via `t_fb4e97da` — sits in the gap between `docs/SCENARIO.md:196`
  (21 Aug 2031) and `:197` (16 Sep 2031))
- Article SHA-256 at verdict: `ea35a507634b20c1e9f07ce48907bba5386c3f84c56729c2793c4734b5bf5a8c`
  (3,937 B — gate-applied revision: writer draft `c4a36ba1…` + required `status`
  field + sanctioned `simulatedDate` + two copy fixes, all recorded here)
- Review run: 2026-09-19 (session date); probes re-run at verdict time
- Continuity record: this file; full table and release decision in
  `.agents/work/reviews/007-landing-preparation.md`

## Verdict

**continuity clear** — chronology, canon consistency, plausibility, and the
spoiler boundary hold on the gate-applied revision. The fail-closed
record-date gate is cleared by the human story owner's answer on `t_fb4e97da`
(comment 616): **YES — separate 007 article, simulated record date 7 September
2031**. See the review record for the full table and the release decision.

## Chronology

Every date and order claim matches the released record chain:

| Event                                           | Article                                                  | Row (SCENARIO)                               | Article's own date       |
| ----------------------------------------------- | -------------------------------------------------------- | -------------------------------------------- | ------------------------ |
| Final approach correction opportunity           | `website/news/006-cruise-final-approach.mdx` (published) | `:196` 21 Aug 2031                           | simulatedDate 2031-08-21 |
| **Landing preparation briefing (this article)** | **`website/news/007-landing-preparation.mdx`**           | **no row — human-assigned via `t_fb4e97da`** | **2031-09-07**           |
| Atmospheric entry and landing at Asteria Field  | `website/news/008-landing.mdx` (published)               | `:197` 16 Sep 2031                           | simulatedDate 2031-09-16 |

Ordering on the published surface: the pipeline sorts news by `simulatedDate`
descending (`src/lib/publication.ts` `selectPublicNews`), so 008 (2031-09-16) →
007 (2031-09-07) → 006 (2031-08-21), with frontmatter `order: 7` as the
deterministic tiebreak/fallback. The article therefore sorts between 006 and
008 both ways. `category: Landing readiness 07` matches the card body's label
(and the "Cruise 06" / "Landing 08" pattern); `linkLabel: Landing preparation
update`.

## Canon consistency

Claim-by-claim against the source pack `.agents/work/sources/007-landing-preparation.md`
(C1–C14) and the released record; every material claim traces (verified against
current bytes):

- **C1 disclosure** — opens with the standard fictional, AI-assisted disclosure
  linking `/#mission` (pattern of 006:15-16 / 008:17-18), closes with the
  boilerplate sentence. Present and prominent. ✓
- **C2 journey context** — 006 closed the cruise record on 21 Aug 2031 with the
  promise of the "approach and arrival-preparation phase" (006:49-54); the
  article opens from exactly that promise and no earlier launch/correction
  dates are repeated (kept to the 006 close only; no trajectory/timing/mass
  detail added). ✓
- **C3 continuity anchor** — "closed the cruise record and promised the next
  status: the preparations for reaching the destination. This update is that
  record" mirrors 006:49-54 wording ("The programme will describe the
  preparations for reaching the destination as they develop"). ✓
- **C4 record date** — `simulatedDate: 2031-09-07` set from the human decision
  on `t_fb4e97da` (comment 616; reviewer decision comment 617). Checks: no
  unreleased event implied (plain briefing date); not readable as a launch
  (2031-02-17, released), landing (2031-09-16, released in 008), or other
  withheld date; contradicts no published sentence (008 does not mention a
  7 Sep preparation item); keeps timeline order 006 → 007 → 008. ✓
- **C5/C6 process framing** — "The team completes entry, descent, and landing
  readiness checks; the landing terrain and surface-science rationale are
  selected; and a landing ellipse is named by the team. Throughout, the outcome
  stays uncertain — the landing is confirmed only later, by communications."
  This is the step's own process description
  (`docs/timeline/007-landing-preparation.md:5-7`); "a landing ellipse is named"
  is the source pack's allowed process-level sentence (never geometry/numbers —
  none appear). The four-question structure (what will happen / which systems
  matter / what the team will know first / when another update will follow)
  matches the approved angle; "the programme is not running a live countdown"
  honours the no-fake-countdown constraint. ✓
- **C7 architecture** — "The landing platform handles entry, descent, landing,
  rover deployment, and surface relay; the rover is carried to the surface and
  deploys when checks are complete. The rover talks to the platform over a
  short-range radio link, while the platform returns data to Earth over a
  steerable X-band downlink, and the rover keeps a low-rate direct-to-Earth
  health link." All released vocabulary (004-launch-provider:32-43;
  ariane-64 wiki:33,35; 008:34-36). No real-mission EDL numbers imported. ✓
- **C8 when next** — "The programme will report the outcome of entry and
  landing when communications establish it, in a later record. No date and no
  success claim are part of this update." Generic; 16 Sep 2031 / "in September"
  / countdown absent. ✓
- **C9 destination name** — Asteria Field name + link to the released wiki leaf
  `/wiki/area/asteria-field/`; "already released as the mission's planned
  landing site" uses the load-bearing qualifier "planned" (pre-landing), which
  the released record supports at the same level (001 "target inside that
  region"; 005:43 / 006:53-54 "arrival at Asteria Field lies ahead"; wiki area
  leaf "the place the mission plans its surface activity in"; 008 "the mission's
  destination"). No planning coordinates, no geometry, no P0/zone/hazard/traverse
  facts appear. ✓ (boundary checked)
- **C10 uncertainty** — no invented open concern; uncertainty held at the
  generic readiness-check level ("the landing is confirmed only later, by
  communications"). ✓
- **C11 pre-landing boundary** — no landed rover, no first image, no success
  condition achieved, no entry/landing outcome; systems described as to-be-
  verified, never as having performed entry/descent/landing. ✓
- **C12 imagery** — reuse of `docs/mission/cruise-final-approach.png`
  (media key `cruise-final-approach`), hash on disk `4989b707…` matches approved
  export; alt text follows the "Illustrative artwork, not mission photography"
  pattern with no landed/success content. `landing-confirmation` not used. ✓
- **C13 links** — `/news/006-cruise-final-approach/`, `/news/001-project-announcement/`,
  `/news/004-launch-provider/`, `/news/005-launch/`, `/wiki/area/asteria-field/`,
  `/wiki/vehicle/rh-01-pathfinder/`, `/#mission` — all released public routes,
  all present in the built route list or as anchors. ✓
- **C14 draft contract** — `publication: draft` (flip is the deploy card's
  scope), `order: 7`, `category: Landing readiness 07`, `media:
  cruise-final-approach`; `status` added by this gate (schema-required, writer
  omission — see review record §copy fixes). ✓

## Plausibility

Technically plausible at the released level: EDL readiness checks, terrain/
surface-science rationale selection, and a named ellipse are described as
process, not outcome; relay architecture matches the published framework; the
"no live countdown" framing and the deferred confirmation (by communications)
are consistent with the milestone table and the 006 close. No invented
telemetry, tones, timestamps, pass counts, masses, altitudes, velocities, or
schedule figures.

## Spoiler safety

- No `docs/timeline/` content or paths; private scenario phraseology absent.
- No 008-011 facts: no landing confirmation, no commissioning/ramps/environment
  checklist, no power/rover-responding trio, no egress/drive/samples/panorama/
  discovery/health-packet/final-repair language, no rows `:198+` names or dates.
- No landing-design facts: ellipse geometry, P0 touchdown zone, science-zone
  plan, hazard inventory, traverse logic, AF-* unit identifiers — absent from
  prose, metadata, alt text, and captions (SCENARIO.md:279 boundary).
- No entry date (16 Sep 2031) or "in September"; no countdown; no imminent
  landing schedule.
- First-public-wording scan over the article: `touchdown`, `P0`, `science-zone`,
  `hazard`, `traverse`, `AF-0/1`, `ramp`, `commission`, `egress`, `panorama`,
  `POV`, real-facility names, coordinate strings — 0 hits. `landing`/`entry`
  appear only as released architecture/process terms; `ellipse` only in the
  process sentence the source pack sanctions.
- Reused plate depicts the cruise stage with Mars ahead (pre-landing); the
  `landing-confirmation` plate (rover aboard platform) is not referenced, not
  imported, not renamed. No image strings imply a landing or a landed rover.

## Fail-closed / surface state

- `/news/007-landing-preparation/` is the draft route; `publication: draft` in
  frontmatter. `listRoutes()` on the current `dist/` (34 routes) shows NO 007
  route; news routes jump 006 → 008 exactly as the brief's gap check recorded.
- Live origin probe (2026-09-19 23:2x CEST, browser fetch):
  `https://mars-ai-simulation.janpolacek.workers.dev/news/007-landing-preparation/`
  → HTTP error (page not found); live news index text contains no 007 slug, no
  "Landing readiness 07", no "Preparing for arrival". Fail-closed state
  verified in fact, not only on paper.
- `scanSourceForGatedReferences()` over the website source: `[]` (no offences).
- HEAD == origin/main == `be678bd`; article untracked (draft); no accidental
  deployment path.
