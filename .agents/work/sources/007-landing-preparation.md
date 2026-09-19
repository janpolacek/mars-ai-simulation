# Source pack: 007-landing-preparation

## Metadata

- Slug: `007-landing-preparation`
- Brief: `.agents/work/briefs/007-landing-preparation.md`
- Timeline step: `007-landing-preparation` (dependency: released step `006-cruise`, pages 1-3)
- Locked milestone source: NONE in the `docs/SCENARIO.md` "Launch and mission dates" table —
  no row exists between `docs/SCENARIO.md:196` (21 August 2031, final approach correction
  opportunity) and `:197` (16 September 2031, atmospheric entry and landing at Asteria Field).
- Record date: **RESOLVED: 2031-09-07 (canon source t_fb4e97da, human-assigned)** — the human
  story owner granted a separate 007 article with simulated record date 7 September 2031
  (clarify response 2026-09-19; recorded on t_fb4e97da comment 616, reviewer comment 617).
  Milestone line column for review artifacts: **"human-assigned via t_fb4e97da"**.
- Status: research source pack (2026-09-19); not a canon record, article, or release decision
- Access date for repository and web sources: 2026-09-19 (session date)

## Confidentiality rule

The private timeline (`docs/timeline/007-landing-preparation.md`) is continuity material only
and is not reproduced here. This pack uses the resolved human decision on t_fb4e97da, the
approved brief, the released public records (001, 004, 005, 006 pages 1-3, wiki leaves), the
approved downstream card bodies created by the planning container (draft t_084f4fbd, visuals
t_021419c1, editorial gate t_0c98f3bf, deploy t_34d79c6f, container t_b8742495), and the
released 008 article only to know what the landing record already says (boundary mapping — not
to be anticipated by this page). The milestone rows `:197` (16 September 2031, atmospheric
entry and landing at Asteria Field) and later (`:198`-`:207`) are the spoiler boundary: they
are never referenced by name, date, or implication on the 007 page. No public file, canon
change, release decision, commit, or push is part of this research card.

## Claim inventory

| ID  | Proposed material claim / use                                                                                                                                                                                                                                                                                                                                                                                           | Canonical source                                                                                                                                                                                                                                                                                                                                                                                                        | Support and boundary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Status                                             |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| C1  | Red Horizon is a fictional, AI-assisted Mars exploration programme; every public page keeps the standard disclosure present and prominent.                                                                                                                                                                                                                                                                              | `website/news/006-cruise-final-approach.mdx:15-16, :63-66`; `website/news/008-landing.mdx:17-18, :78-81`; `website/news/005-launch.mdx:16, :50-53`; `website/news/004-launch-provider.mdx:16, :58-61`; `website/news/001-project-announcement.mdx:23`; `website/wiki/red-horizon.mdx:14, :18-22`; `docs/SCENARIO.md:3-6` (private canon, boundary only)                                                                 | Released disclosure boilerplate; reuse the established paragraph. Required on this page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | supported                                          |
| C2  | Journey context up to this record: Red Horizon One launched 17 February 2031 aboard Ariane 64, entered cruise, and carried out the released course-refinement opportunities on 3 March, 20 May, and 21 August 2031; the 21 August update closed the cruise record and named the approach/arrival-preparation phase as the next status.                                                                                  | `website/news/005-launch.mdx:16-18, :27-35, :37-43`; `website/news/006-cruise-final-approach.mdx:15-22, :30-38, :49-54`; locked rows `docs/SCENARIO.md:193-196` (released)                                                                                                                                                                                                                                              | Recount the journey only at the released level; do not add trajectory, timing, mass, or performance detail. The final-approach page already says "details of entry, landing, or surface operations are not part of this record" (`:52-53`) — this page is where the preparation part of that record begins, still before entry/landing.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | supported                                          |
| C3  | The 006 final-approach article (published, `simulatedDate: 2031-08-21`) explicitly promises the next record: "The next status the programme expects to report is the approach and arrival-preparation phase… The programme will describe the preparations for reaching the destination as they develop" — this 007 article fulfils exactly that promise.                                                                | `website/news/006-cruise-final-approach.mdx:49-54` (published 21 Aug 2031 record; commit 337f558); `.agents/work/briefs/007-landing-preparation.md:3, :24` (allowed public angle)                                                                                                                                                                                                                                       | This is the continuity anchor: the landing-preparation briefing is the promised next record. Do not repeat the 21 August event as if current; open from the released promise. The promise explicitly kept entry/landing/surface details out of the 006 record, so this page must not smuggle them in.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | supported                                          |
| C4  | Record date: the simulated record date for this article is **RESOLVED: 2031-09-07**, human-assigned by the story owner (new scenario canon, granted on the question card). The milestone table holds no dated preparation row between `docs/SCENARIO.md:196` and `:197`; 7 September 2031 sits in that gap, preserving the published order 006 (21 Aug) -> 007 (7 Sep) -> 008 (16 Sep).                                 | Kanban card `t_fb4e97da` comment 616 (human answer: YES — separate article, date 7 September 2031) and comment 617 (reviewer decision recorded; verification that the date matches no other milestone row and implies no unreleased event); reviewer pointer on this card (t_56f19c03 thread); `website/news/006-cruise-final-approach.mdx:6` and `website/news/008-landing.mdx:6` for the neighbouring published dates | The pack's page-table simulatedDate cell reads **`RESOLVED: 2031-09-07 (canon source t_fb4e97da, human-assigned)`**, per the reviewer pointer. The **draft leaves `simulatedDate` UNSET** (writer contract t_084f4fbd); the editorial gate (t_0c98f3bf) applies `simulatedDate: 2031-09-07` from t_fb4e97da and writes "human-assigned via t_fb4e97da" in the milestone line column. No milestone-table row is created by this pack; the table stays untouched (the date is canon on the card, not in the table).                                                                                                                                                                                                                                                                          | supported (canon on t_fb4e97da)                    |
| C5  | The landing-preparation phase is what the mission does before entry: the team completes entry, descent, and landing readiness checks; the landing terrain / surface-science rationale is selected and the landing ellipse is named by the team, but the outcome stays uncertain until communications confirm it.                                                                                                        | `docs/timeline/007-landing-preparation.md:5-7, :13` (continuity control only — the step authorizes this public angle); `.agents/work/briefs/007-landing-preparation.md:23` (approved working plan)                                                                                                                                                                                                                      | Pre-landing framing only. "Ellipse" in the sense of an event/oval shape is the step's own wording, but landing-site geometry (ellipse coordinates/dimensions, P0 touchdown zone, science-zone plan, hazard inventory, traverse logic, AF-* unit identifiers) is gated by `docs/SCENARIO.md:279` and `docs/area/AREA.md:18-19`. Use the process-level sentence "a landing ellipse is named by the team" at most — never its numbers or layout. Outcome is explicitly uncertain on this page.                                                                                                                                                                                                                                                                                                | supported with boundary                            |
| C6  | What will happen (the step's allowed public angle): a landing-preparation briefing describing what will happen, which systems matter, what the team will know first, and when another update will follow — without a fake live countdown.                                                                                                                                                                               | `.agents/work/briefs/007-landing-preparation.md:3, :24`; `docs/timeline/007-landing-preparation.md:13, :17` (allowed public angle / constraint — continuity control only)                                                                                                                                                                                                                                               | The four-question structure (what / which systems / what first / when next) is the article's skeleton. No countdown language, no hour-by-hour schedule, no telemetry tones or pass counts. "What the team will know first" at the generic pre-landing level is: whether the systems made it through the readiness checks unchanged; the landing is confirmed only later by communications (boundary: 008's `:28-36` confirms power/communications/rover responding — NOT to be anticipated here).                                                                                                                                                                                                                                                                                          | supported                                          |
| C7  | Which systems matter — released architecture only: the landing platform handles entry, descent, landing, rover deployment, and surface relay; the rover is carried to the surface and deploys when checks are complete; the rover talks to the platform over a short-range radio link, the platform returns data to Earth over a steerable X-band downlink, and the rover keeps a low-rate direct-to-Earth health link. | `website/news/004-launch-provider.mdx:32-43`; `website/wiki/ariane-64.mdx:33, :35` ("aeroshell and powered stationary landing platform"; "entry, descent, landing, rover deployment, and surface relay"); `website/wiki/rh-01-pathfinder.mdx:15-19` (rover identity); disclosure `website/news/004-launch-provider.mdx:58-61`                                                                                           | Reuse the released vocabulary exactly. Do NOT import real-mission EDL numbers (altitudes, velocities, masses, "seven minutes of terror", sky-crane/airbag details); do not add the private platform power/thermal design (`docs/SCENARIO.md:154-155`) or private relay details (`docs/SCENARIO.md:139-140`). The rover is RH-01 Pathfinder (released designation); "RH-01 carried to the surface" is the released phrasing.                                                                                                                                                                                                                                                                                                                                                                | supported with boundary                            |
| C8  | When another update will follow: the plan reports that the next record will be the landing outcome once communications confirm it — stated generically, with NO date and NO success claim (16 September 2031 and the "Atmospheric entry and landing at Asteria Field" milestone remain unreleased until 008).                                                                                                           | Released future-status pattern in the 006 pages (`website/news/006-cruise-final-approach.mdx:49-54`); `.agents/work/briefs/007-landing-preparation.md:24, :31`; boundary row `docs/SCENARIO.md:197` (never named or dated here)                                                                                                                                                                                         | "When another update will follow" must stay at the generic level: the programme will report the outcome of entry and landing when communications establish it, in a later record. Do NOT name 16 September 2031, do NOT say "in September", do NOT name "atmospheric entry" as imminent-with-date. The 008 article's released opening ("On that date… entered the Martian atmosphere and confirmed landing") is 008's record, not this page's.                                                                                                                                                                                                                                                                                                                                             | supported (generic)                                |
| C9  | Destination name: Asteria Field (already released as the mission's destination; name-only on this page).                                                                                                                                                                                                                                                                                                                | `website/news/001-project-announcement.mdx:53-60` (name, planning centre 17.80°S 332.20°E, envelope, local operations frame, plates); `website/news/005-launch.mdx:43` ("arrival at Asteria Field lies ahead"); `website/news/006-cruise-final-approach.mdx:53-54`; `website/wiki/asteria-field.mdx:24-31` (control record); gate `docs/SCENARIO.md:279`                                                                | Name-only at most in article prose, plus a link to the released wiki leaf. Landing-site geometry (ellipse geometry, P0 touchdown zone, science-zone plan, hazard inventory, traverse logic, AF-* unit identifiers) stays out of prose, alt text, and captions (H1 decision 2026-09-17; `docs/SCENARIO.md:279`; `docs/area/AREA.md:18-19`). The planning centre coordinates are already released (`001:54-55`) but are not needed on this page and carry geo baggage — prefer name-only plus the wiki link.                                                                                                                                                                                                                                                                                 | supported, name-only                               |
| C10 | At most one early uncertainty may appear — e.g. a dust-related calibration concern, actuator margin, or intermittent thermal/communications behaviour — ONLY as an open question with no premature cause, at the released level. No approved public source fixes a specific condition for a 7 September 2031 preparation update.                                                                                        | `.agents/work/briefs/007-landing-preparation.md:31` (outcome remains uncertain); `docs/timeline/007-landing-preparation.md:8-14` (constraints — no specific condition named); same finding as the 006 packs (C11 pattern) and the 008 pack (C9)                                                                                                                                                                         | Do NOT default to an invented concern — the released 006 close reports routine operations, and 008's "open question" about the commissioning sequence (`008-landing.mdx:57-63`) belongs to the post-landing record. If an open question is used at all, keep it at the generic uncertainty level (readiness checks complete within the planned frame; outcome confirmed only by communications). Reviewer confirms any uncertainty wording (t_0c98f3bf).                                                                                                                                                                                                                                                                                                                                   | unresolved by design — do not default to a concern |
| C11 | The article must stay pre-landing: no landed rover, no first image, no success condition achieved, no entry outcome, no landing/arrival milestone as imminent-with-date. Systems may be described as being prepared/checked, never as having performed entry, descended, or landed.                                                                                                                                     | `docs/timeline/007-landing-preparation.md:8-14, :23` (constraints and spoilers — continuity control only); `.agents/work/briefs/007-landing-preparation.md:28-34` (forbidden/site geometry); t_fb4e97da comment 616 (constraint carried with the grant); gate `docs/SCENARIO.md:279`                                                                                                                                    | Hard acceptance criterion on the draft, visuals, and review cards. "Landing-ready" is a process state, not a certainty; the article says the team completed preparation and waits on communications. No wording may turn the reused plate into a record of a landing or of a landed rover.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | supported (boundary)                               |
| C12 | Imagery: `no new imagery: reuse docs/mission/cruise-final-approach.png` (media key `cruise-final-approach`, already registered and placed on the published 006 final-approach article). Do NOT use `landing-confirmation` (depicts the rover already landed on the platform — a later-step image).                                                                                                                      | `.agents/work/briefs/007-landing-preparation.md:36-38`; visuals card t_021419c1 (exact brief); media registry `website/src/lib/media.ts:30, :168` and `website/src/features/news/media.ts:198-204`; image index `.agents/work/image-index.md:117-118, :134-135`; on disk `docs/mission/cruise-final-approach.png`                                                                                                       | Verified on disk 2026-09-19: PNG 1024x576, sha256 `4989b707a260b2c63fb93323441afde038a08785e817ce0c4e4e7e3f5df93270` (matches approved export, image-index row 7/8). Frontmatter: `media: cruise-final-approach` with a `mediaAlt` in the "Illustrative artwork, not mission photography" pattern — generic cruise-stage stand-in with Mars ahead, nothing landed, no success claim (006's published alt at `006-cruise-final-approach.mdx:12` is the template). Plate label 'Red Horizon · final approach correction' (`features/news/media.ts:203`). The visuals card writes `.agents/work/assets/007-landing-preparation/assets.md` with hash, dimensions, placement, alt/caption, provenance (candidate origin + approved export), rights, and `no new imagery` + no comfyctl session. | supported (reuse decision)                         |
| C13 | Internal links must resolve to released public routes only: `/news/006-cruise-final-approach/`, `/news/006-cruise-checkout/`, `/news/006-cruise-first-correction/`, `/news/005-launch/`, `/news/004-launch-provider/`, `/news/001-project-announcement/`, `/wiki/area/asteria-field/` (canonical wiki route), `/wiki/vehicle/rh-01-pathfinder/`, `/#mission`.                                                           | Route helper `website/src/lib/navigation.ts:19` (`/wiki/${section}/${slug}/`); links already released in `website/news/006-cruise-final-approach.mdx:15, :21, :57-58` and `website/news/008-landing.mdx:17, :32-33, :51-52`; canonical wiki route verified in the 008 pack (`website/dist/wiki/area/asteria-field/index.html` exists, built)                                                                            | The Asteria Field leaf's canonical route is `/wiki/area/asteria-field/` (section `area`). Note: the released ariane-64 leaf links the shorter `/wiki/asteria-field/` (`website/wiki/ariane-64.mdx:63`) — an existing anomaly for reviewer awareness, not to be copied. Never link working papers or private paths.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | supported                                          |
| C14 | Draft contract: `website/news/007-landing-preparation.mdx`, `publication: draft`, `simulatedDate` UNSET, `order: 7`, `category: Landing readiness 07`, `media: cruise-final-approach`; writer owns the integrated SEO pass (no separate SEO card); one central update plus only the released context; date-scoped language; accessible structure.                                                                       | `.agents/work/briefs/007-landing-preparation.md:40-45`; writer card t_084f4fbd; editorial gate t_0c98f3bf (applies `simulatedDate: 2031-09-07` from t_fb4e97da); deploy card t_34d79c6f (commit-and-push under standing instruction AGENTS.md 2026-09-17)                                                                                                                                                               | Search-intent boundary for the SEO pass: the page answers "Red Horizon landing preparation / what happens before the Mars landing" and nothing beyond; metadata/headings must not promise landing success, first images, egress, drives, samples, discovery, or a landing date. Dev commit message pattern: `t_<dev card id>: publish 007 landing-preparation update`. The milestone line column in the review artifact is "human-assigned via t_fb4e97da".                                                                                                                                                                                                                                                                                                                                | supported (contract)                               |

## Canonical source notes

### Record date — resolved by the human story owner (t_fb4e97da)

The card body and the brief were originally written with the record date UNRESOLVED "by
design" because the milestone table holds no row between `docs/SCENARIO.md:196` (21 August
2031) and `:197` (16 September 2031). That question was put to the human story owner on
`t_fb4e97da` (fail-closed) and answered on 2026-09-19: **YES — step 007 gets a separate
landing-preparation news article, simulated record date 7 September 2031** (clarify response;
recorded as t_fb4e97da comment 616 by the reviewer, comment 617 records the decision and
verification). This pack therefore writes the page-table simulatedDate cell as:

    RESOLVED: 2031-09-07 (canon source t_fb4e97da, human-assigned)

The date is new scenario canon granted by the story owner and lives on the card, not in the
milestone table. The reviewer verified it matches no other milestone row and implies no
unreleased event, and that it keeps the published order 006 (2031-08-21) -> 007 (2031-09-07)
-> 008 (2031-09-16). The **draft still leaves `simulatedDate` unset**; the editorial gate
(t_0c98f3bf) applies `simulatedDate: 2031-09-07` from t_fb4e97da and cites "human-assigned
via t_fb4e97da" as the milestone line.

### Locked scenario source

There is no locked milestone row for this step. `docs/SCENARIO.md:196` (21 August 2031,
final approach correction opportunity) and `:197` (16 September 2031, atmospheric entry and
landing at Asteria Field) bound the gap; rows `:193`-`:196` are released public record, and
`:197`-`:207` are the spoiler boundary. The 007 article may reference the journey facts
released by 005/006 and the arrival-preparation framing, but must not name or date row `:197`
or anything after it. The mission identity block (`:12-30`), the private architecture detail
(`:118-172`), and the Asteria Field landing-design gate (`:279`) stay private exactly as in
the 008 pack.

### Released article 006 (primary continuity anchor)

`website/news/006-cruise-final-approach.mdx` is published (`simulatedDate: 2031-08-21`,
committed 337f558). Its next-status paragraph (`:49-54`) is the dangling promise this step
fulfils: "The next status the programme expects to report is the approach and
arrival-preparation phase… The programme will describe the preparations for reaching the
destination as they develop; details of entry, landing, or surface operations are not part of
this record." Its `mediaAlt` (`:12`) is the template for the reused plate's alt text.

### Released articles 001 / 004 / 005 (destination, architecture, journey)

- `website/news/001-project-announcement.mdx` (`simulatedDate: 2026-10-12`) released the
  destination name and planning geometry (`:53-60`), the fiction disclosure (`:23`), and the
  real-region / no-life-search framing (`:42-51`).
- `website/news/004-launch-provider.mdx` (`simulatedDate: 2030-03-11`) is the canonical EDL /
  relay language (`:32-43`) and the Ariane 64 non-endorsement wording (`:23-27, :58-61`).
- `website/news/005-launch.mdx` (`simulatedDate: 2031-02-17`) records the launch, cruise
  entry, deep-space transition, and "arrival at Asteria Field lies ahead" (`:16-18, :27-35,
  :37-43`).

### Released article 008 (boundary mapping only — never anticipated)

`website/news/008-landing.mdx` is published (`simulatedDate: 2031-09-16`) and records the
post-event confirmation: power / communications / rover-responding before "successful", the
to-check list (commissioning, sensors, ramps, environment), the open question about the
commissioning sequence, and the first expected surface operations. None of that content may
appear on the 007 page as preparation detail; it is the landing record's own story. The 007
page ends where the landing _will be_ confirmed, not where it _is_ confirmed.

### Released wiki leaves

- `website/wiki/red-horizon.mdx` (`:14, :18-22`): the programme fiction disclosure.
- `website/wiki/ariane-64.mdx` (`:33, :35`): "aeroshell and powered stationary landing
  platform" and "entry, descent, landing, rover deployment, and surface relay" — the released
  EDL vocabulary; note the legacy `/wiki/asteria-field/` link at `:63` (anomaly, not to copy).
- `website/wiki/rh-01-pathfinder.mdx` (`:15-19`): RH-01's released identity.
- `website/wiki/asteria-field.mdx`: control record (`:24-31`), scenario boundary
  (`:58-73`), plates (`:107-113`), release boundary (`:117-119`) — the canonical
  `/wiki/area/asteria-field/` route.

### Approved brief and downstream card bodies (planning-container decisions)

The brief (`007-landing-preparation.md`) and the chain cards — writer t_084f4fbd, visuals
t_021419c1, reviewer/editorial t_0c98f3bf, deploy t_34d79c6f, container t_b8742495 —
codify the approved scope: the promised landing-preparation briefing (what / which systems /
what first / when next), record date applied by the reviewer from t_fb4e97da with the draft
leaving the field unset, reuse of `docs/mission/cruise-final-approach.png` only, pre-landing
framing, integrated SEO in the writer card, and dev commit-and-push under the standing
2026-09-17 instruction. This pack treats those card bodies as part of the approved working
plan.

## Real-world sources

No real-world source is required for the central claim (a fictional milestone whose date is
human-assigned canon on t_fb4e97da). For the record, the same bounded plain-language
technical context used by the 006/008 packs — NASA Science "How We Land on Mars"
(https://science.nasa.gov/planetary-science/programs/mars-exploration/mission-timeline/how-we-land-on-mars/,
verified live at top search-index positions 19 Sep 2026; keyless web-search tier, HTTP fetch
blocked by this session's security policy) — may be referenced IF the writer wants a plain
definition of entry, descent, and landing beyond the released 004 language, with the same
boundary: real-mission numbers and systems on that page are NOT importable; the released
`004-launch-provider.mdx:32-43` language is preferred and sufficient.

## Forbidden fact ledger

Intentionally unsupported for this page; must remain absent from prose, metadata, SEO fields,
links, asset names, alt text, captions, summaries, and commit messages:

- `docs/timeline/` content or paths; private scenario phraseology; the private landing-plan
  detail beyond the step's own process description.
- The landed rover, a first image, a success condition as already achieved, any entry/landing
  outcome, and the entry date 16 September 2031 or row `:197` milestone name — in any form.
  Also no "imminent landing" scheduling language (no "in September", no countdown).
- Landing-site geometry beyond the released destination name: ellipse coordinates/dimensions
  (P0 touchdown zone), science-zone plan, hazard inventory, traverse logic, AF-* unit
  identifiers (gated at `docs/SCENARIO.md:279`; `docs/area/AREA.md:18-19`); planning-centre
  coordinates only if already-released value is needed (name-only + wiki link preferred).
- Steps 008-011 content: no "landing confirmed", no commissioning/ramps/environment checklist
  as pre-landing activity (that is 008's to-check list), no egress, no first drive, no
  samples, no panorama, no health-packet, no discovery, no final repair plan; rows `:198+`
  milestone names and dates stay out entirely.
- Invented telemetry: tones, timestamps, pass counts, signal values, power/thermal/
  communications numbers, masses, altitudes, velocities, sol counts, or schedule figures.
- Real facility/operator/agency/partner names beyond the standard non-endorsement disclosure
  (Ariane 64 stays at the released disclosure level if referenced at all).
- Private architecture detail beyond the released level: platform power/thermal design
  (`docs/SCENARIO.md:154-155`), private relay specifics (`docs/SCENARIO.md:139-140`), ramp
  count and deployment-after-imaging detail (`docs/SCENARIO.md:131-132`).
- Documentary image framing: any wording that turns the reused illustrative plate into a
  photograph, orbital image, or mission record, or that implies the rover has landed.
- Links to anything other than released public routes (see C13), never to working papers or
  private paths.

## First-public-wording flags (2026-09-19 scan of released `website/news/*.mdx` + `website/wiki/*.mdx`)

| Token                                      | Hits in released routes                                                              | Guidance for the writer                                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `ellipse`                                  | 0 (matches only this private step)                                                   | Allowed only as the step's process wording "a landing ellipse is named"; never geometry, numbers, or layout (SCENARIO.md:279) |
| `touchdown`                                | 0 (code comment only)                                                                | Prefer "landing"/"arrival" process language; "touchdown zone" is gated                                                        |
| `landing-ready`                            | 0                                                                                    | May be introduced as the preparation goal; define as a process state, never a certainty                                       |
| `P0` / `science-zone` / `hazard` / `AF-0x` | 0 (AF-* appears only in released 001 alt text referencing its plates)                | Never use in prose/alt/captions (gated landing-design facts)                                                                  |
| `ramp`/`ramps`                             | 0                                                                                    | Keep out of this page — the ramp check belongs to 008's post-landing to-check list                                            |
| `commission`/`commissioning`               | 0 (test fixture only)                                                                | Same as ramps: 008's post-landing checklist, not pre-landing preparation                                                      |
| `entry`/`landing`                          | Present as released architecture terms in 004/wiki routes and as 008's event record  | Allow at the generic process level ("the systems that will carry out entry and landing"); never as outcome or dated event     |
| `panorama` / `POV` / `egress`              | `panorama` only as payload-scope term in released 002/rh-01 routes; `POV`/`egress` 0 | Never on this page (later-step records)                                                                                       |

## Asset finding (visual decision)

**No new imagery: reuse `docs/mission/cruise-final-approach.png`** — the approved plate
already registered as media key `cruise-final-approach` and placed on the published 006
final-approach article. Verified on disk 2026-09-19:

- `docs/mission/cruise-final-approach.png` — PNG 1024 x 576,
  sha256 `4989b707a260b2c63fb93323441afde038a08785e817ce0c4e4e7e3f5df93270` (matches the
  image-index approved export row 7/8, candidate origin
  `~/.hermes/profiles/mars-ai-simulator-visuals/cache/images/comfyui-flux-2-klein_13310_cruise05.png`).
- Media registry: `website/src/lib/media.ts:30` (key), `:168` (`plateCount: 1, altCount: 1,
  captionCount: 0, requiresLabel: false`); `website/src/features/news/media.ts:198-204`
  (plate src + label 'Red Horizon · final approach correction'). One-plate key — an article
  frontmatter `media: cruise-final-approach` renders exactly this plate.
- The 006 published page already carries the alt to mirror: "Illustrative artwork, not
  mission photography: a generic cruise-stage stand-in fires its final correction burn with
  Mars ahead." (`006-cruise-final-approach.mdx:12`).
- Do NOT use `docs/mission/landing-confirmation.png` (media key `landing-confirmation`):
  image-index `:135` describes "Broad square landing platform on a rust-red rocky plain,
  six-wheeled rover aboard" — a landed, later-step depiction that contradicts the pre-landing
  framing and the t_fb4e97da constraint. It stays with the published 008 landing article.

The visuals card t_021419c1 must write `.agents/work/assets/007-landing-preparation/assets.md`
recording the exact reused path, hash and dimensions, placement (`media: cruise-final-approach`
on the 007 draft hero/card), alt/caption wording, provenance (candidate origin + approved
export), rights status, `no new imagery`, and that no GPU/comfyctl session was started.

## Validation completed (2026-09-19)

- Read the task card (t_56f19c03), the human question card (t_fb4e97da) and its resolved
  answer, the downstream cards (writer t_084f4fbd, visuals t_021419c1, editorial gate
  t_0c98f3bf, deploy t_34d79c6f, container t_b8742495), `AGENTS.md`, `docs/INSTRUCTIONS.md`,
  the research-and-fact-check project skill, the mars-release-planning skill,
  `.agents/work/briefs/007-landing-preparation.md`, `docs/timeline/README.md`,
  `docs/timeline/007-landing-preparation.md` (continuity control only), `docs/SCENARIO.md`
  (incl. `:173-207, :275-282, :284-312`), the image index `.agents/work/image-index.md`, and
  the released `website/news/001-project-announcement.mdx`, `004-launch-provider.mdx`,
  `005-launch.mdx`, `006-cruise-final-approach.mdx`, `008-landing.mdx`, and
  `website/wiki/ariane-64.mdx`, `rh-01-pathfinder.mdx` (via released packs where cited).
- Verified the record-date resolution end-to-end on t_fb4e97da (comment 616 human answer,
  comment 617 reviewer decision, status done) and the reviewer/gate pointer comments on
  t_56f19c03, t_084f4fbd, and t_0c98f3bf; no contradictory date exists on any released route
  (order 006 -> 007 -> 008 preserved).
- Verified line citations against current file bytes (006-cruise-final-approach `:6, :12,
  :15-16, :15-22, :30-38, :49-54, :63-66`; 008-landing `:6, :17-18, :28-36, :40-45, :57-63,
  :78-81`; 005-launch `:16-18, :27-35, :37-43, :50-53`; 004-launch-provider `:16, :23-27,
  :32-43, :58-61`; 001-project-announcement `:23, :42-51, :53-60`; wiki ariane-64 `:33, :35,
  :63`; wiki rh-01-pathfinder `:15-19`); all hold.
- Verified `docs/SCENARIO.md:196` and `:197` bound the gap; `:193-196` are released and
  `:197+` is the spoiler boundary; `:279` gates the Asteria Field landing-design facts;
  `docs/timeline/README.md` ordering puts 007 after 006 and before 008.
- Verified the image decision on disk: plate dims + sha256 above; registry keys
  `cruise-final-approach` (1 plate, label 'final approach correction') and
  `landing-confirmation` (1 plate, label 'landing confirmed') at
  `website/src/lib/media.ts:168, :177` and `website/src/features/news/media.ts:198-211`;
  image-index `:117-118, :134-135` carries provenance and released status.
- Verified the first-public-wording scan (table above): `ellipse`, `touchdown`, `P0`,
  `science-zone`, `hazard`, `ramp`, `commissioning`, `POV`, `egress` have 0 hits in released
  routes beyond the noted payload-scope `panorama`; `entry`/`landing` appear only as released
  architecture terms or the 008 event record.
- Confirmed no `.agents/work/assets/007-landing-preparation/` manifest exists yet; the visuals
  card t_021419c1 owns it.
- Confirmed the serialized chain for this slug: research (this card t_56f19c03) -> writer
  t_084f4fbd -> visuals t_021419c1 (reuse manifest, gated on the writer) -> editorial gate
  t_0c98f3bf (applies `simulatedDate: 2031-09-07` from t_fb4e97da, records the release
  decision) -> deploy t_34d79c6f (commit-and-push under standing 2026-09-17 instruction) ->
  container t_b8742495; no separate SEO card exists beyond the writer's integrated pass.
- Confirmed no public MDX, public canon file, release record, commit, or push was changed by
  this research task.

## Review still outstanding / next owner

- `mars-ai-simulator-reviewer` (t_0c98f3bf): in the editorial gate later in this chain,
  confirm the continuity anchor (C3), the record date applied as `simulatedDate: 2031-09-07`
  from t_fb4e97da with milestone line "human-assigned via t_fb4e97da" (C4), the pre-landing
  framing (C5/C11), the four-question structure without countdown (C6), the released-level
  architecture (C7), the generic "next update" statement with no date/success claim (C8), the
  name-only Asteria Field boundary incl. the ellipse wording (C9/C5 + flags table), any
  open-question uncertainty (C10), the plate-reuse decision (C12), the internal-link list
  incl. `/wiki/area/asteria-field/` (C13), and the draft contract (C14); record the release
  decision naming the exact public scope.
- `mars-ai-simulator-writer` (t_084f4fbd): next owner; draft
  `website/news/007-landing-preparation.mdx` with `publication: draft`, `simulatedDate` UNSET,
  `order: 7`, `category: Landing readiness 07`, `media: cruise-final-approach` + pre-landing
  `mediaAlt`, integrated SEO pass, fiction disclosure, date-scoped language, accessible
  structure; may link the released routes in C13; no landed rover, no first image, no success
  claim, no entry outcome, no landing-design facts, no 008+ leakage, no invented concern.
- `mars-ai-simulator-visuals` (t_021419c1): write `.agents/work/assets/007-landing-preparation/
  assets.md` recording the reuse decision, plate verification, and `no new imagery`.
- No publication or deployment is authorised by this pack.

_This source pack is working material. It does not create canon, approve release, or expose the
private timeline._
