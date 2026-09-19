# Continuity: 006-cruise-checkout — chronology, canon, plausibility and spoiler verdict

Slug: `006-cruise-checkout`. Card `t_77e34313`
(`mars-ai-simulator-reviewer`), stage: merged continuity + editorial
final gate. Timeline step `006-cruise`, **page 2 of 3** (cruise checkout
and second correction opportunity). Companion record:
`.agents/work/reviews/006-cruise-checkout.md` (review table, status
`approved`; the release decision is recorded in §"Release decision" of
that record).

**Verdict (2026-09-19 ~12:30 CEST): `continuity clear`.** The article is
within scope, the chronology holds, every material claim traces to a
released source or the brief's "Allowed facts" line, no later-step
fact leaks, and the simulated record date this role assigns is drawn
from the locked milestone the table holds. There are no findings to
return for revision; the companion review's §"Release decision" carries
the recorded release decision. **One observation** is recorded (title is
61 chars, 1 over the SEO skill's ≤60 char budget) — not material, not
blocking; the writer's wording is preserved.

The reviewer in chief records the release decision in the companion
review `§"Release decision"`. No separate human approval is required.

## 1. Evidence boundary and what was compared

| Item                       | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article under review       | `website/news/006-cruise-checkout.mdx` — sha256 `c1230b412801b99685fc1bc3c23e8bd91d750f9dff709ebbc29aeb85769ee381`, 3,653 B, 61 lines, `publication: draft` (line 5), no `media*`, no `author`, no `simulatedDate`, 490-word heading-free body across 7 paragraphs (the SEO-compatible integrated package the brief requires; brief `:40` "an integrated SEO package")                                                                                                                                                                                                                                                                                                                |
| Released step compared     | `docs/timeline/006-cruise.md` (private situation, allowed public angle, spoilers and handoff); released precedence `docs/timeline/001-project-announcement.md` … `docs/timeline/005-launch.md`; `docs/timeline/README.md` for the "do not invent" invariant                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Canon compared             | `docs/SCENARIO.md` — §Mission identity (`:3-6`), §Flight system (`:122-140`, esp. `:124-125` for the cruise stage), §Launch and mission dates (`:173-207`, milestone row `:195` this step's own event, `:196` the next-status expectation, `:197+` the spoiler boundary), §Continuity and release controls (`:272-282`, landing-design withhold `:279`, real-institution rule `:281`)                                                                                                                                                                                                                                                                                                 |
| Working papers compared    | `.agents/work/briefs/006-cruise.md` (the step's bound brief, three-page milestone table at `:7-12`); `.agents/work/sources/006-cruise-checkout.md` (claim ledger C1–C13, NASA Ch 13/Ch 15 plain-language grounding only, forbidden-fact ledger)                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Asset manifest compared    | `.agents/work/assets/006-cruise-checkout/assets.md` (text-only decision; `placement: none`; `candidates: 0`; `travelling-to-mars.png` remains gated per `website/scripts/guards.mjs:75-78` and `website/test/guards.test.mjs:831`)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Published record compared  | `website/news/001-project-announcement.mdx` (`923a12d8…`, 4,832 B), `002-payload-selection.mdx` (`7b69bd7f…`, 7,766 B), `003-vehicle-design.mdx` (`51f2ee69…`, 5,476 B), `004-launch-provider.mdx` (`7da71fec…` released / `be20389f…` post-Form-A), `005-launch.mdx` (`f165f3ab…`, 2,900 B, published 2026-09-19, `simulatedDate: 2031-02-17`); `006-cruise-first-correction.mdx` (`9193de2c…`, 3,401 B, published 2026-09-19, `simulatedDate: 2031-03-03`) — the immediate predecessor on the cruise chain; release records `.agents/work/releases/004-launch-provider.md` and `.agents/work/continuity/005-launch.md` and `.agents/work/continuity/006-cruise-first-correction.md` |
| Surface machinery compared | `website/src/content.config.ts:9-71` (news schema, `simulatedDate` regex `simulatedDatePattern` at `src/lib/simulated-date.ts:21`); `src/lib/media.ts` (newsMediaRequirements, newsMediaIssues); `src/lib/simulated-date.ts` (label `Simulated record date`, U+00B7 separator, ISO format `YYYY-MM-DD`); `src/lib/publication.ts` (publication predicate); `src/features/news/media.ts` (key resolver); `src/features/news/NewsCard.astro:54` (newsroom card render); `src/features/news/ArticleView.astro:27` (article page render); guards `website/scripts/guards.mjs`, `website/test/guards.test.mjs`                                                                             |
| Shared tree read at        | `HEAD` = `origin/main` = `6c1aeb9` (commit `t_0694d835: publish 006 cruise first-correction update`, 2026-09-19); working tree is dirty only with the untracked 006 page-2 working papers (brief, source, asset manifest) and the untracked `006-cruise-checkout.mdx`; no `website/` write by this card                                                                                                                                                                                                                                                                                                                                                                               |
| Build surface              | The shared `website/dist/` is **not** the live surface for this slug (the article is `publication: draft`; `check-dist` prunes `dist/` on failure and a release-stage gate must never build over the build card's output). The live origin is what would carry the published bytes after the build card pushes                                                                                                                                                                                                                                                                                                                                                                        |
| All input hashes re-taken  | Immediately before this verdict (2026-09-19 ~12:25 CEST); every hash identical to the read cited above                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## 2. Chronology

- **Release order.** Step 006 (cruise updates, page 2 of 3) is released by
  the editorial review's recorded release decision; the article is the
  step's public surface and stays `publication: draft` until that flip.
  The step's three-page brief (`.agents/work/briefs/006-cruise.md:5-13`)
  fixes three dated milestone rows (`:194` first correction, `:195`
  cruise checkout, `:196` final approach); page 2 of 3 covers row
  `:195`.
- **The step's own boundary.** `docs/timeline/006-cruise.md` (private
  situation): the allowed public angle and the spoiler scope are
  re-stated by the brief's "Allowed facts" / "Forbidden / spoiler
  facts" lines (`:15-32`); the dependency is released step 005 (the
  launch update, `simulatedDate: 2031-02-17`) and the released page 1 of
  this step (`006-cruise-first-correction.mdx`, `simulatedDate:
  2031-03-03`). The 006 timeline step is the cruise-update chain; pages
  1 (`006-cruise-first-correction`, row `:194`) and 3
  (`006-cruise-final-approach`, row `:196`) bracket page 2 and follow
  in serialised release order (brief `:43` "the cruise chain is
  serialised").
- **The milestone row the step covers.** `docs/SCENARIO.md:195`:
  `20 May 2031 | Cruise checkout and second correction opportunity`.
  The record-date skill (§"The simulated record date" in
  `.agents/skills/editorial-review/SKILL.md`) instructs: "pick the
  milestone the article's released timeline step covers". Page 2 of 3
  covers that milestone, and the row the table holds is the one the
  article's subject reports. **The record date this role assigns is
  `2031-05-20`, drawn from `docs/SCENARIO.md:195`.**
- **Order-sensitivity against already-published copy.**
  - 001 (record date `2026-10-12`): the only calendar sentence is "a
    launch window in 2031". Article 006's "20 May 2031" is a
    cruise-page date, not a launch or landing day; 001's
    no-launch-day-announced framing still holds at 001's own date.
  - 002 (record date `2027-03-19`): "The schedule frame remains the
    2031 launch window set out in the [programme announcement]. No
    launch or landing date is being stated." Article 006 names no
    launch or landing day; at 002's own date 002's claim still holds.
  - 003 (record date `2029-07-13`): "No launch vehicle has been named,
    no launch date has been stated, and no landing site has been
    announced." Article 006 names no launch vehicle, no launch day, no
    landing day, no landing site. The 003 sentence holds at 003's own
    date; falsifiable only when the step that publishes a landing
    _site_ runs.
  - 004 (record date `2030-03-11`): "no day within it has been
    announced". Article 006 names no launch day; the 17 February
    2031 launch day referenced as already-released history is
    **already public** at 005's release, so the 004 release record's
    "lower-bound-on-005" condition is unaffected.
  - 005 (record date `2031-02-17`): "The next status the programme
    expects to report is a cruise checkout around 20 May 2031,
    covering the health of all flight elements" (`:41-42`); the
    article also names "the first planned trajectory-correction
    opportunity, expected on 3 March 2031" (`:37-38`), which the
    cruise page 1 (`006-cruise-first-correction`) is the in-fiction
    record of. Article 006 page 2 reports the checkout **on the date
    the prior step named**, and reports the first correction as
    already-released history. **No contradiction** — both 005 named
    checks have been carried out at page 2's date, and 005's own
    record date is fixed so its sentence is a statement about its own
    moment.
  - 006 page 1 (`006-cruise-first-correction`, record date
    `2031-03-03`): "the first scheduled course-refinement manoeuvre
    of its journey toward Mars" was carried out on that date (":14-
    :17"); "the next status the programme expects to report is a
    cruise checkout around 20 May 2031" (`:45-46`). Page 2 **is the
    follow-up to that sentence** — the in-fiction record dated on the
    date 005 and page 1 both named as the next check. The page-1
    "routine operations have held, and the spacecraft is tracking as
    expected" sentence is the released framing that page 2 inherits
    for the checkout outcome. **No contradiction.**
- **Order floor carried forward.** Step 006 page 2's record date
  (`2031-05-20`) is **later than 005's** (`2031-02-17`) **and later
  than page 1's** (`2031-03-03`). Both bounds hold. Page 3
  (`006-cruise-final-approach`, brief `:12`) must carry a record date
  on or after `2031-05-20`; brief proposes `:196` (21 August 2031),
  satisfying the floor.

## 3. Canon consistency — material claims

Every material claim in the body and frontmatter, with the released
source it traces to.

| #  | Claim (article, by paragraph)                                                                                                                                                                                                                                                                                                                                                                                                                                   | Source                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Verdict                                                                                                                                                                                                                     |
| -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | "Red Horizon is a [fictional, AI-assisted Mars exploration programme](/#mission), and the programme has reached the milestone recorded for 20 May 2031"                                                                                                                                                                                                                                                                                                         | `docs/SCENARIO.md:195` (locked row, this step's own event); 005:16; 001:23 first-sentence                                                                                                                                                                                                                                                                                                                                                                      | PASS — first-sentence disclosure as 001–005 do; the milestone date is the locked row the brief authorises at `:10`                                                                                                          |
| 2  | "On that date, Red Horizon One — already in interplanetary cruise since its 17 February 2031 launch aboard Ariane 64 — carried out the scheduled cruise checkout of all flight elements and the second planned course-refinement manoeuvre of its journey toward Mars"                                                                                                                                                                                          | SCENARIO.md:193 (the launch day), `:195` (the checkout + second correction); 005:17, 005:37-38, 006-cruise-first-correction:14-18                                                                                                                                                                                                                                                                                                                              | PASS — released launch day as history; locked row `:195` as the step's own event; "second planned course-refinement manoeuvre" is the C7 first-naming of the row's "second correction opportunity"                          |
| 3  | "The [first correction update](/news/006-cruise-first-correction/) records the mission's earlier manoeuvre and the naming of this second opportunity"                                                                                                                                                                                                                                                                                                           | 006-cruise-first-correction:14-18; SCENARIO.md:194 (the first correction row, released)                                                                                                                                                                                                                                                                                                                                                                        | PASS — internal anchor to a released route (page 1, `simulatedDate: 2031-03-03`, published 2026-09-19); C7 first-naming chain licensed by row `:195`                                                                        |
| 4  | Plain-language definition of a cruise checkout and of a trajectory-correction opportunity (paragraph 2): "A cruise checkout is a scheduled health check of the flight stack's systems … onboard computers, instruments, communications hardware, and thermal systems must all be exercised and verified … A trajectory-correction opportunity … is a planned burn to fine-tune the spacecraft's course toward Mars … engines fire in a carefully planned burst" | Brief `:19` (approved definitions); NASA _Basics of Space Flight_ Ch 15 "Cruise" (designated checkout periods; instruments powered on, exercised, calibrated; TCMs are executed to fine-tune the trajectory) — HTTP 200 verified 2026-09-19 (sibling pack, page-1 source-pack validation); Ch 13 "Navigation" (a minor interplanetary-cruise flight-path control maneuver is typically called a Trajectory Correction Maneuver) — HTTP 200 verified 2026-09-19 | PASS — plain-language definition only; **no** ΔV magnitude, **no** engine firing time, **no** real-mission telemetry number imported from NASA Ch 13 into the fiction (boundary the source pack records)                    |
| 5  | "The 20 May milestone tested whether the cruise stage has maintained the health of all flight elements and whether the second correction burn could be carried out as planned"                                                                                                                                                                                                                                                                                  | 005:41-42 ("covering the health of all flight elements"); SCENARIO.md:124-125 (cruise-stage function); SCENARIO.md:195 (the step's own row, this milestone)                                                                                                                                                                                                                                                                                                    | PASS — same capability framing 005 released; no telemetry / health numbers                                                                                                                                                  |
| 6  | "The programme reports that the checkout and the opportunity were carried out and assessed within the planned frame: routine operations have held, and the spacecraft is tracking as expected. No course-state claim beyond that released framing is part of this record, and the milestone discloses no figures or measurements of any kind"                                                                                                                   | 005:41-42 (released test framing); 006-cruise-first-correction:29-35 ("carried out and assessed within the planned frame: routine operations have held, and the spacecraft is tracking as expected"); brief `:22` (routine is the valid story when no approved source names a concern); brief `:25` (no trajectory parameters); source-pack C6 ("No course-state claim … no figures or measurements") boundary                                                 | PASS — exact 006-page-1 framing inherited; the explicit "no course-state claim … no figures or measurements" sentence is the source-pack C6 boundary made visible in the body, not only in working papers                   |
| 7  | "Behind the scenes, cruise operations continue in the routine way the programme has described. The cruise stage handles navigation, thermal control, and communications with Earth; instruments are exercised and checked out; and the mission's teams monitor the spacecraft's health from across the deep-space link"                                                                                                                                         | 005:29-35 (cruise-stage description, transition to deep-space operations); 004:32-33 (solar-powered cruise stage for navigation, thermal control, communications); 006-cruise-first-correction:37-43 (identical routine cruise description, with this role's C7 reading)                                                                                                                                                                                       | PASS — generic cruise description; same wording as page 1; no subsystem specs or numbers                                                                                                                                    |
| 8  | "That transition from ground control to autonomous deep-space operations — already underway since launch — means the mission's own team carries full responsibility for the vehicle's journey, with limited ability to intervene physically"                                                                                                                                                                                                                    | 005:31-35 (transition to deep-space operations)                                                                                                                                                                                                                                                                                                                                                                                                                | PASS — exact 005 phrasing re-used                                                                                                                                                                                           |
| 9  | "The next status the programme expects to report is a final approach correction opportunity around 21 August 2031, as already scheduled in the mission's sequence"                                                                                                                                                                                                                                                                                              | SCENARIO.md:196 (`21 August 2031                                                                                                                                                                                                                                                                                                                                                                                                                               | Final approach correction opportunity``); brief ``:11``(page-3 slug row); source-pack C8 (authorises the **first public naming** of row``:196` as the next-status expectation); 005:43 (released destination-name sentence) | PASS — name + locked date only; **no** scope, **no** outcome, **no** entry/landing implication. C8 first-naming. |
| 10 | "The mission remains in cruise, and arrival at Asteria Field lies ahead"                                                                                                                                                                                                                                                                                                                                                                                        | 005:43 (released destination-name sentence); 001:53-60 (Asteria Field as the released landing-target name); wiki `red-horizon.mdx:34`                                                                                                                                                                                                                                                                                                                          | PASS — destination name already released; **no** landing date, **no** ellipse, **no** coordinate, **no** surface detail                                                                                                     |
| 11 | Closing note: "Ariane 64 is a real launcher designation; naming it here says which launcher this fictional mission is planned around, and nothing more. Its record belongs to the organisations that build and operate it, not to Red Horizon, and no real agency, launcher operator, or launch facility is a partner in this programme or has endorsed it"                                                                                                     | 005:50-53; 004:23-27, 004:58-61; SCENARIO.md:281 (real-institution rule)                                                                                                                                                                                                                                                                                                                                                                                       | PASS — identical disclosure pattern to 005 / 006 page 1; **no** institution, operator or facility named                                                                                                                     |

**Derived claims, judged, not waved through:**

- **D1 — "the second planned course-refinement manoeuvre of its journey
  toward Mars"** (row 2): a paraphrase of the locked milestone name
  ("second correction opportunity"). The plain-language form does not
  introduce a figure or an outcome. C7 is the first-naming of "second";
  source-pack notes this page is the **first public naming**. PASS.
- **D2 — "the same navigation systems that guided the vehicle out of
  Earth's gravity well now take on the harder job of steering across
  millions of kilometres of interplanetary space"** (paragraph 2): a
  plain-language description of interplanetary-cruise navigation,
  consistent with the brief's definition and the NASA Ch 13 / Ch 15
  grounding. PASS as language, not as a system identification.
- **D3 — "routine operations have held, and the spacecraft is tracking
  as expected"** (row 6): the routine framing the brief authorises
  (`:22`). The article itself explicitly disclaims any course-state
  claim beyond this released framing and any figure or measurement (the
  "No course-state claim … no figures or measurements" sentence). The
  disclosure is in the article body, not just in the source pack. PASS
  with the in-article caveat as the operative boundary.
- **D4 — "final approach correction opportunity around 21 August
  2031, as already scheduled in the mission's sequence"** (row 9): the
  C8 first-naming of the next-status milestone. Locked row `:196`
  carries the date (21 August 2031) and the milestone name (Final
  approach correction opportunity); the article uses both verbatim and
  adds no scope, no outcome, and no implication of entry readiness.
  PASS — name + locked date only.
- **D5 — "arrival at Asteria Field lies ahead"** (row 10): the released
  destination name as the future frame; no date. PASS — same
  date-free framing 005 and 006 page 1 use.

## 4. Withheld-marker scan — full inventory

Scanned against the article and the frontmatter, by family. (The scanner
runs in a scratch script outside the repository; the article body and
frontmatter were scanned line-by-line.)

| Family                                                                                                             | Hits | Notes                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------ | ---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Launcher designation `Ariane 64`                                                                                   |    2 | L52 (body, "Ariane 64 is a real launcher designation …") and L58 (closing note); matches the 005 disclosure pattern                                                                                                                                                                                                   |
| **Real institution / operating-company** (Arianespace, ArianeGroup, CNES, ESA, FEI STU)                            |    0 | The disclosure's reference is the word "organisations", which the scanner does not pick up                                                                                                                                                                                                                            |
| **Launch-facility family** (Europe's Spaceport, ELA-4, ELA4, Kourou, Guiana, Centre Spatial Guyanais)              |    0 | The article makes no reference to a launch facility or city                                                                                                                                                                                                                                                           |
| **Withheld launch-day forms** (`13 January 2031`, `11 February 2031`, `22 November 2030`, `30 August 2030`)        |    0 | None of those rows appears in the article                                                                                                                                                                                                                                                                             |
| Named milestone dates                                                                                              |    — | Three dated tokens: `20 May 2031` (SCENARIO.md:195, this step's own event), `17 February 2031` (SCENARIO.md:193, released at 005 as history), `21 August 2031` (SCENARIO.md:196, C8 first-naming of the next-status expectation). All three are within the brief's allowed angle. **No other date appears anywhere.** |
| **Landing-region coordinate markers** (`18° 42`, `226° 14`)                                                        |    0 | The scanner pattern is identical to 004's                                                                                                                                                                                                                                                                             |
| **Private-timeline paths or withheld filenames**                                                                   |    0 | No `docs/timeline/` reference; no AF-*, no `contact-arm-scene`, no `travelling-to-mars`                                                                                                                                                                                                                               |
| **Asteria Field / landing-design** (Asteria Field, ellipse, P0, science zone, hazard, traverse)                    |    1 | The single mention is `Asteria Field` on L50 — already released at 001:53-60; no coordinates, no ellipse, no surface design                                                                                                                                                                                           |
| **Performance / cost / mass / schedule figures** (`4,250 kg`, `€2.10 billion`, `€180 million`, transfer durations) |    0 | No figure anywhere in body or frontmatter; the `210.7-day` planning anchor from SCENARIO.md:176-177 / `:295-296` is **verified absent** (re-checked 2026-09-19 ~12:25 CEST)                                                                                                                                           |
| **Step 007-011 milestone rows** (`:197`-`:207`, rover egress onwards)                                              |    0 | The only later-step reference is the released "arrival at Asteria Field lies ahead" sentence, which carries **no date**; row `:196` is the C8 next-status framing (name + locked date only); rows `:197+` are entirely absent                                                                                         |
| **Documentary-image framing** (a "photograph" / "mission record" / "footage")                                      |    0 | No image of any kind on this page (the asset manifest records `placement: none` and `candidates: 0`); no documentary phrasing anywhere                                                                                                                                                                                |
| **Real URLs** (http://, https://)                                                                                  |    0 | The article has no external links at all                                                                                                                                                                                                                                                                              |
| **First-naming scope** ("second correction", "final approach")                                                     | 1, 1 | Both are C7 and C8 first-namings authorised by the source pack: "second correction" is licensed by SCENARIO.md:195 ("second correction opportunity"); "final approach" is licensed by SCENARIO.md:196 ("Final approach correction opportunity") and the brief's "next-status expectation" instruction at `:11`        |

## 5. Plausibility

- **Article body.** 490 words, heading-free, seven paragraphs
  (paragraph 1 — the lead and the milestone date; paragraph 2 — the
  plain-language definition of a cruise checkout and a
  trajectory-correction opportunity; paragraph 3 — the test framing
  and the "carried out within the planned frame" outcome, with the
  in-article "no course-state claim … no figures or measurements"
  caveat; paragraph 4 — generic cruise-operations description and the
  deep-space-operations transition; paragraph 5 — the next-status
  expectation (C8 first-naming of the final approach correction
  opportunity); paragraph 6 — the released destination-name future
  frame; paragraph 7 — the closing disclosure note and the italic
  footer). Voice is consistent with 001/002/003/004/005/006 page 1:
  short declaratives, defined terms ("cruise checkout", "flight
  stack", "cruise stage"), no acronym display, no superlative.
- **Frontmatter renders.** Title 61 chars (1 over the SEO skill's ≤60
  char budget — recorded as review O1, not material, not blocking;
  the build schema does not enforce the budget), summary 152 chars (≤155
  budget OK), linkLabel 22 chars. `category` (`Cruise 06`), `status`
  (`Cruise checkout and second correction opportunity assessed`),
  `order` (6), `accent` (amber) all follow the established convention;
  `publication: draft` stays until the release decision is applied by
  the build card.
- **Internal-link inventory.** Two anchors: `/#mission` (line 12, the
  fiction disclosure link to the homepage mission brief) and
  `/news/006-cruise-first-correction/` (line 17, the released
  cruise page 1). Both targets are released routes (200 on the live
  origin today — `/news/006-cruise-first-correction/` published
  2026-09-19). No external link, so no real institution's URL carries
  a name onto a public surface.
- **No `media*` field.** The article carries no `media`, `mediaAlt`,
  `mediaLabel` or `mediaCaption`; `newsMediaIssues()` returns `[]` on
  no `media` (the schema short-circuits in `src/lib/media.ts:124`).
  The asset manifest's text-only decision is sound (no approved
  in-transit visual exists; the Ariane plates under
  `docs/vehicles/ariane/` are launch/vehicle plates and none carries
  an in-cruise moment; `travelling-to-mars.png` remains gated per
  `guards.mjs:75-78` and `guards.test.mjs:831`).
- **Step-006 source format is consistent with the brief's
  instruction** for "date-scoped language so the page does not imply
  an evergreen current status after its fictional record date" (brief
  `:43`): every dated token the article prints is either the step's
  own event (`:195` `20 May 2031`), already-released history (`:193`
  `17 February 2031`), or the C8 next-status frame (`:196` `21 August
  2031`). No number, no trajectory parameter, no telemetry, no
  later-step fact, no rover-deployment number, no surface target.

## 6. Spoiler safety

Of the four families the 004 release record flagged (institution /
operator / facility, launch-day forms, private calendar, withheld file
names), article 006 page 2 scores **0 hits** on all four. The three
dated references the article prints are milestone rows `:193`/`:195`/
`:196` — all public rows the cruise-update brief authorises. Row
`:194` (the first correction, page 1's row) is not directly dated in
the article body, but is referenced through the link to page 1 (`:17`)
and through the "second planned course-refinement manoeuvre" framing
on `:14`; both are within the brief's allowed angle.

Step 007 to step 011 detail (landing success, surface operations, rover
egress, drive results, samples, science findings, end-of-life anomaly,
the dossier's publication state) is fully withheld — confirmed by the
twelve families measuring 0 above and by no token matching the
step-007+ milestone names (`:197`-`:207`, rover egress onwards;
nowhere in article 006 page 2).

The C8 next-status sentence ("final approach correction opportunity
around 21 August 2031") does not imply entry readiness: the article
does not place the final approach correction in time with entry,
landing, or surface operations; row `:197` is not referenced;
"arrival at Asteria Field lies ahead" remains date-free.

## 7. Continuity verdict

`continuity clear`. The article is canonically sound, chronologically
safe, plausibly framed, and spoiler-clean. No findings to return for
revision; the companion review's §"Release decision" carries the
recorded release decision. No canon change, no `docs/SCENARIO.md`
write, no `docs/timeline/` write.

The reviewer in chief records the release decision in the companion
review `§"Release decision"`. No separate human approval is required.

One observation is recorded (review §"Conditions and observations" O1,
title 61 chars over the SEO skill's ≤60 budget by 1): cosmetic, not
material, not blocking. The writer's wording is preserved (this gate
does not silently rewrite another worker's artifact).

---

_This record is working material, not canon. Canon lives in `docs/SCENARIO.md` and
the dossiers under `docs/vehicles/`. The continuity verdict above is this role's
chronological / canonical / spoiler half of the editorial gate's verdict; the
editorial half is in `.agents/work/reviews/006-cruise-checkout.md`._
