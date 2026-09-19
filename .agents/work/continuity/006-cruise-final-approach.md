# Continuity: 006-cruise-final-approach — chronology, canon, plausibility and spoiler verdict

Slug: `006-cruise-final-approach`. Card `t_a3cfbc80`
(`mars-ai-simulator-reviewer`), stage: merged continuity + editorial
final gate. Timeline step `006-cruise`, **page 3 of 3** (final approach
correction opportunity). Companion record:
`.agents/work/reviews/006-cruise-final-approach.md` (review table, status
`approved`; the release decision is recorded in §"Release decision" of
that record).

**Verdict (2026-09-19 ~12:45 CEST): `continuity clear`.** The article is
within scope, the chronology holds, every material claim traces to a
released source or the brief's "Allowed facts" line, no later-step fact
leaks, and the simulated record date this role assigns is drawn from the
locked milestone the table holds. There are no findings to return for
revision; the companion review's §"Release decision" carries the
recorded release decision.

The reviewer in chief records the release decision in the companion
review `§"Release decision"`. No separate human approval is required.

## 1. Evidence boundary and what was compared

| Item                       | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Article under review       | `website/news/006-cruise-final-approach.mdx` — sha256 `d837f40f53bcaa9d7b55167386290998972f035764c6d6bf18d60aedfae6a900`, 3,741 B, 63 lines, `publication: draft` (line 5), no `media*`, no `author`, no `simulatedDate`, seven-paragraph heading-free body. Frontmatter keys (verified via `js-yaml.safe_load`): `title` (50 chars), `category` (`Cruise 06`), `status` (`Final approach correction opportunity assessed`), `publication` (`draft`), `summary` (120 chars), `linkLabel` (`Final approach update`), `order` (6), `accent` (`amber`) — all schema-clean.                                                                    |
| Released step compared     | `docs/timeline/006-cruise.md` (private situation, allowed public angle, spoilers and handoff); released precedence `docs/timeline/001-project-announcement.md` … `docs/timeline/005-launch.md`; `docs/timeline/README.md` for the "do not invent" invariant                                                                                                                                                                                                                                                                                                                                                                                |
| Canon compared             | `docs/SCENARIO.md` — §Mission identity (`:3-6`), §Flight system (`:122-140`, esp. `:124-125` for the cruise stage), §Launch and mission dates (`:173-207`, milestone row `:196` this step's own event, `:197+` the spoiler boundary), §Continuity and release controls (`:272-282`, landing-design withhold `:279`, real-institution rule `:281`)                                                                                                                                                                                                                                                                                          |
| Working papers compared    | `.agents/work/briefs/006-cruise.md` (the step's bound brief, three-page milestone table at `:7-12`); `.agents/work/sources/006-cruise-final-approach.md` (claim ledger C1–C13, NASA Ch 13/Ch 15 plain-language grounding only, forbidden-fact ledger)                                                                                                                                                                                                                                                                                                                                                                                      |
| Asset manifest compared    | `.agents/work/assets/006-cruise-final-approach/assets.md` (text-only decision; `placement: none`; `candidates: 0`; `travelling-to-mars.png` remains gated per `website/scripts/guards.mjs:75-77` and `website/test/guards.test.mjs:831`)                                                                                                                                                                                                                                                                                                                                                                                                   |
| Published record compared  | `website/news/001-project-announcement.mdx` (`923a12d8…`), `002-payload-selection.mdx` (`7b69bd7f…`), `003-vehicle-design.mdx` (`51f2ee69…`), `004-launch-provider.mdx` (`7da71fec…` released / `be20389f…` post-Form-A), `005-launch.mdx` (`f165f3ab…`, `simulatedDate: 2031-02-17`), `006-cruise-first-correction.mdx` (`9193de2c…`, `simulatedDate: 2031-03-03`), `006-cruise-checkout.mdx` (`c1230b41…`, `simulatedDate: 2031-05-20`) — the immediate predecessor; release records `.agents/work/continuity/005-launch.md`, `.agents/work/continuity/006-cruise-first-correction.md`, `.agents/work/continuity/006-cruise-checkout.md` |
| Surface machinery compared | `website/src/content.config.ts:9-71` (news schema, `simulatedDate` regex at `src/lib/simulated-date.ts:21`); `src/lib/media.ts` (newsMediaRequirements, newsMediaIssues); `src/lib/simulated-date.ts` (label `Simulated record date`, U+00B7 separator, ISO format `YYYY-MM-DD`); `src/lib/publication.ts` (publication predicate); `src/features/news/media.ts` (key resolver); `src/features/news/NewsCard.astro:54, :88` (newsroom card render); `src/features/news/ArticleView.astro:27, :36` (article page render); guards `website/scripts/guards.mjs`, `website/test/guards.test.mjs`                                               |
| Shared tree read at        | `HEAD` = `origin/main` = `b2f770f` (commit `t_e1bab2b2: publish 006 cruise checkout update`, 2026-09-19); working tree is dirty only with the untracked 006 page-3 working papers (brief, source, asset manifest) and the untracked `006-cruise-final-approach.mdx`; no `website/` write by this card                                                                                                                                                                                                                                                                                                                                      |
| Build surface              | `website/dist/news/006-cruise-final-approach/` is **absent** (verified 2026-09-19 ~12:45 CEST); only the eight released article directories are present (`001-project-announcement … 005-launch`, `006-cruise-checkout`, `006-cruise-first-correction`, `milestone-2031-launch-readiness-review`, `milestone-2031-stack-arrival`). `check-dist` prunes `dist/` on failure and a release-stage gate must never build over the build card's output. The live origin is what would carry the published bytes after the build card pushes                                                                                                      |
| Live origin                | `https://mars-ai-simulation.janpolacek.workers.dev/news/006-cruise-final-approach/` returns HTTP 404 with "No webpage was found" (verified in-browser, 2026-09-19 ~12:45 CEST); `/news/006-cruise-checkout/` (the immediate predecessor) serves the rendered `Simulated record date · 20 May 2031` line under the in-fiction label as expected (verified the same minute). Fail-closed state holds **in fact**.                                                                                                                                                                                                                            |
| All input hashes re-taken  | Immediately before this verdict (2026-09-19 ~12:40 CEST); every hash identical to the read cited above; `d837f40f…` confirmed via fresh `sha256sum` against the current bytes                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## 2. Chronology

- **Release order.** Step 006 (cruise updates, page 3 of 3) is released by
  the editorial review's recorded release decision; the article is the
  step's public surface and stays `publication: draft` until that flip.
  The step's three-page brief (`.agents/work/briefs/006-cruise.md:5-13`)
  fixes three dated milestone rows (`:194` first correction, `:195`
  cruise checkout, `:196` final approach); page 3 of 3 covers row
  `:196`.
- **The step's own boundary.** `docs/timeline/006-cruise.md` (private
  situation): the allowed public angle and the spoiler scope are
  re-stated by the brief's "Allowed facts" / "Forbidden / spoiler
  facts" lines (`:15-32`); the dependency is released step 005 (the
  launch update, `simulatedDate: 2031-02-17`) and the released pages 1–2
  of this step (`006-cruise-first-correction.mdx`, `simulatedDate:
  2031-03-03`; `006-cruise-checkout.mdx`, `simulatedDate: 2031-05-20`).
  The 006 timeline step is the cruise-update chain; page 3 follows
  pages 1–2 in serialised release order (brief `:43` "the cruise chain
  is serialised").
- **The milestone row the step covers.** `docs/SCENARIO.md:196`:
  `21 August 2031 | Final approach correction opportunity`. The
  record-date skill (§"The simulated record date" in
  `.agents/skills/editorial-review/SKILL.md`) instructs: "pick the
  milestone the article's released timeline step covers". Page 3 of 3
  covers that milestone, and the row the table holds is the one the
  article's subject reports. **The record date this role assigns is
  `2031-08-21`, drawn from `docs/SCENARIO.md:196`.**
- **Order-sensitivity against already-published copy.**
  - 001 (record date `2026-10-12`): the only calendar sentence is "a
    launch window in 2031". Article 006 page 3's "21 August 2031" is a
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
    announced". Article 006 names no launch day; the 17 February 2031
    launch day referenced as already-released history is **already
    public** at 005's release, so the 004 release record's
    "lower-bound-on-005" condition is unaffected.
  - 005 (record date `2031-02-17`): "Red Horizon launches for Mars" and
    "the first planned trajectory-correction opportunity, expected on
    3 March 2031" (`005:37-38`); "a cruise checkout around 20 May
    2031" (`005:41-42`); "arrival at Asteria Field lies ahead"
    (`005:42-43`). Article 006 page 3 reports the final approach
    correction in the same released routine frame and reports the
    already-released history (launch, first correction, second
    correction) as historical, not current. **No contradiction** — all
    005-named checks have been carried out at page 3's date.
  - 006 page 1 (`006-cruise-first-correction`, record date
    `2031-03-03`): "the first scheduled course-refinement manoeuvre
    of its journey toward Mars" was carried out on that date
    (`:14-17`); "the next status the programme expects to report is
    a cruise checkout around 20 May 2031" (`:45-46`). Page 3
    references this through the "third such opportunity … following
    the first on 3 March" framing on L17 and the link to
    `/news/006-cruise-checkout/` on L18. **No contradiction.**
  - 006 page 2 (`006-cruise-checkout`, record date `2031-05-20`):
    "The next status the programme expects to report is a final
    approach correction opportunity around 21 August 2031, as already
    scheduled in the mission's sequence" (`:49-51`); "The mission
    remains in cruise, and arrival at Asteria Field lies ahead"
    (`:51`). **Page 3 is the in-fiction record dated on the date
    page 2 named as the next check** — its own first paragraph
    ("the programme has reached the milestone recorded for 21 August
    2031") makes that explicit. The page-2 "as already scheduled in
    the mission's sequence" sentence is the released precedent that
    authorises page 3's "third such opportunity in the mission's
    sequence" framing (the C7 ordinal). **No contradiction.**
- **Order floor carried forward.** Step 006 page 3's record date
  (`2031-08-21`) is **later than 005's** (`2031-02-17`), **later than
  page 1's** (`2031-03-03`), and **later than page 2's**
  (`2031-05-20`). All three bounds hold; page 3's record date sits on
  the released row `:196` (the in-fiction event page 2 already named
  as the next-status expectation).
- **Order ceiling kept open.** Step 006 page 3's record date
  (`2031-08-21`) is **before** the `:197` row (16 September 2031,
  atmospheric entry and landing) and every later surface-step row
  (`:198` first engineering health packet, `:199` RH-01 egress,
  `:200` first controlled drive, `:201` first onboard sample, etc.).
  Those rows stay future-status only on this page; the C8 next-status
  sentence ("the approach and arrival-preparation phase") uses
  generic terms and does not name, date, or imply row `:197`.

## 3. Canon consistency — material claims

Every material claim in the body and frontmatter, with the released
source it traces to.

| #  | Claim (article, by paragraph)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Source                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Verdict                                                                                                                                                                                                                                         |
| -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | "Red Horizon is a [fictional, AI-assisted Mars exploration programme](/#mission), and the programme has reached the milestone recorded for 21 August 2031"                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `docs/SCENARIO.md:196` (locked row, this step's own event); 006-cruise-checkout:13-14, :49-51; 005:16; 001:23 first-sentence                                                                                                                                                                                                                                                                                                                              | PASS — first-sentence disclosure as 001-006 do; the milestone date is the locked row the brief authorises at `:12`                                                                                                                              |
| 2  | "On that date, Red Horizon One — already in interplanetary cruise since its 17 February 2031 launch aboard Ariane 64 — carried out the final planned course-refinement manoeuvre of its journey toward Mars"                                                                                                                                                                                                                                                                                                                                                                                                                        | SCENARIO.md:193 (the launch day), `:196` (the final approach correction); 005:17, 005:37-38; 006-cruise-first-correction:14-18; 006-cruise-checkout:14-19                                                                                                                                                                                                                                                                                                 | PASS — released launch day as history; locked row `:196` as the step's own event                                                                                                                                                                |
| 3  | "the third such opportunity in the mission's sequence following the first on 3 March and the second on 20 May 2031. The [checkout and second correction update](/news/006-cruise-checkout/) records the mission's earlier opportunity and the naming of this final one"                                                                                                                                                                                                                                                                                                                                                             | 006-cruise-first-correction:14-18 (first correction, "first scheduled course-refinement manoeuvre"); 006-cruise-checkout:14-19 (second correction, "second planned course-refinement manoeuvre"); SCENARIO.md:194-196 (the three-row sequence)                                                                                                                                                                                                            | PASS — C7 ordinal "third" derived from released counting (pages 1–2 named "first" and "second"), now applied to page 3; the link to `/news/006-cruise-checkout/` (released, `simulatedDate: 2031-05-20`) is the immediate predecessor reference |
| 4  | Plain-language definition for this page (paragraph 2, L21-27): "A final approach correction opportunity is a planned manoeuvre to refine the spacecraft's course as it nears the end of its interplanetary cruise, ahead of the arrival phase. During the long cruise, small uncertainties accumulate over weeks of travel, and at designated intervals the spacecraft fires its engines in carefully planned bursts to adjust its path. By this point in the mission those adjustments have narrowed the route to its finest resolution, fine-tuning the track so the stack arrives at its destination on the intended trajectory" | Brief `:19` (approved definition); brief `:11` (page-3 row names the final approach correction); NASA _Basics of Space Flight_ Ch 15 "Cruise" (TCMs are executed to fine-tune the trajectory; instruments powered on, exercised, calibrated during designated checkout periods); Ch 13 "Navigation" (a minor interplanetary-cruise flight-path control maneuver is typically called a Trajectory Correction Maneuver) — both HTTP 200 verified 2026-09-19 | PASS — plain-language definition only; **no** ΔV magnitude, **no** engine firing time, **no** real-mission telemetry number imported from NASA Ch 13 into the fiction (boundary the source pack records)                                        |
| 5  | "The 21 August opportunity tested whether the cruise stage has held the spacecraft on course and whether the navigation and communications systems remain healthy as the mission approaches its destination"                                                                                                                                                                                                                                                                                                                                                                                                                        | 005:37-41 (released test framing); SCENARIO.md:124-125 (cruise-stage function); 006-cruise-checkout:32-34 (page-2 test framing, identical shape)                                                                                                                                                                                                                                                                                                          | PASS — same capability framing 005 / page 2 released; no telemetry / health numbers                                                                                                                                                             |
| 6  | "The programme reports that the opportunity was carried out and assessed within the planned frame: routine operations have held, and the spacecraft is tracking as expected. No course-state claim beyond that released framing is part of this record, and the milestone discloses no figures or measurements of any kind"                                                                                                                                                                                                                                                                                                         | 005:37-41 (released test framing); 006-cruise-first-correction:29-35 ("carried out and assessed within the planned frame: routine operations have held, and the spacecraft is tracking as expected"; "discloses no figures or measurements of any kind"); 006-cruise-checkout:32-38 (page-2 identical framing); brief `:22` (routine is the valid story when no approved source names a concern); source-pack C6 (the boundary)                           | PASS — exact 006-pages-1-and-2 framing inherited; the explicit "no course-state claim … no figures or measurements" sentence is the source-pack C6 boundary made visible in the body, not only in working papers                                |
| 7  | "Behind the scenes, cruise operations continue in the routine way the programme has described. The cruise stage handles navigation, thermal control, and communications with Earth; instruments are exercised and checked out; and the mission's teams monitor the spacecraft's health from across the deep-space link"                                                                                                                                                                                                                                                                                                             | 005:29-35 (cruise-stage description, transition to deep-space operations); 004:32-33 (solar-powered cruise stage for navigation, thermal control, communications); 006-cruise-first-correction:37-43; 006-cruise-checkout:40-47                                                                                                                                                                                                                           | PASS — generic cruise description; same wording as pages 1–2; no subsystem specs or numbers                                                                                                                                                     |
| 8  | "That transition from ground control to autonomous deep-space operations — already underway since launch — means the mission's own team carries full responsibility for the vehicle's journey, with limited ability to intervene physically"                                                                                                                                                                                                                                                                                                                                                                                        | 005:31-35 (transition to deep-space operations); 006-cruise-first-correction:42-44; 006-cruise-checkout:44-47                                                                                                                                                                                                                                                                                                                                             | PASS — exact 005 phrasing re-used                                                                                                                                                                                                               |
| 9  | "The next status the programme expects to report is the approach and arrival-preparation phase, in the routine terms the mission has used throughout its cruise. The programme will describe the preparations for reaching the destination as they develop; details of entry, landing, or surface operations are not part of this record"                                                                                                                                                                                                                                                                                           | 006-cruise-first-correction:45-47 ("The next status the programme expects to report is …"); 006-cruise-checkout:49-51 (the released next-status framing — page 3 follows page 2's pattern, but uses generic approach / arrival-preparation terms rather than naming the next milestone); SCENARIO.md:197 (atmospheric entry and landing — **not** mentioned in body or frontmatter)                                                                       | PASS — C8 next-status framing in generic terms; explicit "details of entry, landing, or surface operations are not part of this record" boundary; **no** row `:197` naming or dating; **no** entry-readiness claim                              |
| 10 | "The mission remains in cruise, and the arrival at Asteria Field lies ahead"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 005:43 (released destination-name sentence); 001:53-60 (Asteria Field as the released landing-target name); 006-cruise-first-correction:46-47; 006-cruise-checkout:51; wiki `red-horizon.mdx:34`                                                                                                                                                                                                                                                          | PASS — destination name already released; **no** landing date, **no** ellipse, **no** coordinate, **no** surface detail                                                                                                                         |
| 11 | Closing note: "Ariane 64 is a real launcher designation; naming it here says which launcher this fictional mission is planned around, and nothing more. … no real agency, launcher operator, or launch facility is a partner in this programme or has endorsed it"                                                                                                                                                                                                                                                                                                                                                                  | 005:50-53; 004:23-27, 004:58-61; 006-cruise-checkout:53-57, :59-62; 006-cruise-first-correction:49-53, :55-58; SCENARIO.md:281 (real-institution rule)                                                                                                                                                                                                                                                                                                    | PASS — identical disclosure pattern to 005 / page 1 / page 2; **no** institution, operator or facility named                                                                                                                                    |

**Derived claims, judged, not waved through:**

- **D1 — "the final planned course-refinement manoeuvre of its journey
  toward Mars"** (row 2): a paraphrase of the locked milestone name
  ("Final approach correction opportunity"). The plain-language form
  does not introduce a figure or an outcome. PASS.
- **D2 — "the third such opportunity in the mission's sequence
  following the first on 3 March and the second on 20 May 2031"**
  (row 3): the C7 ordinal derived from released counting. Pages 1 and
  2 named themselves "first" and "second" respectively; page 3 is the
  third. The source pack notes this ordinal is a new public wording
  derived from released counting and asks the reviewer to confirm it;
  it is **semantically equivalent** to the row `:196` name ("Final
  approach correction opportunity") and the source-pack C7 boundary
  authorises it as an ordinal option. **The reviewer confirms** — the
  three-row sequence `:194` / `:195` / `:196` is unambiguous on this
  page, and the wording follows the precedent. PASS with the
  reviewer's explicit confirmation recorded in
  `.agents/work/reviews/006-cruise-final-approach.md` §1 row 17.
- **D3 — "By this point in the mission those adjustments have narrowed
  the route to its finest resolution, fine-tuning the track so the
  stack arrives at its destination on the intended trajectory"**
  (paragraph 2): a plain-language paraphrase of why a final-approach
  correction exists. Consistent with the brief's definition (`:19`)
  and the NASA Ch 13 / Ch 15 grounding. PASS as language, not as a
  mechanism claim.
- **D4 — "routine operations have held, and the spacecraft is tracking
  as expected"** (row 6): the routine framing the brief authorises
  (`:22`). The article itself explicitly disclaims any course-state
  claim beyond this released framing and any figure or measurement.
  PASS with the in-article caveat as the operative boundary.
- **D5 — "the approach and arrival-preparation phase"** (row 9): the
  C8 next-status framing in generic terms. The released precedent
  (pages 1–2) named the next **milestone** ("cruise checkout around
  20 May 2031" / "final approach correction opportunity around 21
  August 2031"); page 3 names the next **phase** ("approach and
  arrival-preparation") because row `:196` is page 3's own row and
  the only remaining named milestone is `:197` (entry and landing),
  which the brief forbids naming until step 007. The page-2 release
  record (`:48-51` "as already scheduled in the mission's sequence")
  made the same point — page 2 named row `:196` because it was the
  next-status **after** page 2; page 3 cannot name row `:197` for the
  same reason and uses generic phrasing instead. The article's
  explicit "details of entry, landing, or surface operations are not
  part of this record" sentence is the operative boundary. PASS.
- **D6 — "arrival at Asteria Field lies ahead"** (row 10): the
  released destination name as the future frame; no date. PASS
  — same date-free framing 005 and 006 pages 1–2 use.

## 4. Withheld-marker scan — full inventory

Scanned against the article and the frontmatter, by family. (The scanner
runs in a scratch script outside the repository; the article body and
frontmatter were scanned line-by-line.)

| Family                                                                                                             | Hits | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------ | ---: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Launcher designation `Ariane 64`                                                                                   |    2 | L14 (body, "17 February 2031 launch aboard Ariane 64") and L53 (closing disclosure paragraph); matches the 005 / 006 pages 1–2 disclosure pattern                                                                                                                                                                                                                                                                                               |
| **Real institution / operating-company** (Arianespace, ArianeGroup, CNES, ESA, FEI STU)                            |    0 | The disclosure's reference is the word "organisations", which the scanner does not pick up; **no** Arianespace, ArianeGroup, CNES, ESA, or FEI STU in body or frontmatter                                                                                                                                                                                                                                                                       |
| **Launch-facility family** (Europe's Spaceport, ELA-4, ELA4, Kourou, Guiana, Centre Spatial Guyanais)              |    0 | The article makes no reference to a launch facility or city; the Kourou row `:191` is not named                                                                                                                                                                                                                                                                                                                                                 |
| **Withheld launch-day forms** (`13 January 2031`, `11 February 2031`, `22 November 2030`, `30 August 2030`)        |    0 | None of those rows appears in the article                                                                                                                                                                                                                                                                                                                                                                                                       |
| Named milestone dates                                                                                              |    — | Three dated tokens: `21 August 2031` (SCENARIO.md:196, this step's own event), `17 February 2031` (SCENARIO.md:193, released at 005 as history), `3 March 2031` (SCENARIO.md:194, released at 006 page 1 as history), `20 May 2031` (SCENARIO.md:195, released at 006 page 2 as history). All four are within the brief's allowed angle. **No other date appears anywhere.**                                                                    |
| **Landing-region coordinate markers** (`18° 42`, `226° 14`)                                                        |    0 | The scanner pattern is identical to 004 / 006 pages 1–2's                                                                                                                                                                                                                                                                                                                                                                                       |
| **Private-timeline paths or withheld filenames**                                                                   |    0 | No `docs/timeline/` reference; no AF-*, no `contact-arm-scene`, no `travelling-to-mars`                                                                                                                                                                                                                                                                                                                                                         |
| **Asteria Field / landing-design** (Asteria Field, ellipse, P0, science zone, hazard, traverse)                    |    1 | The single mention is `Asteria Field` on L51 — already released at 001:53-60; no coordinates, no ellipse, no surface design                                                                                                                                                                                                                                                                                                                     |
| **Performance / cost / mass / schedule figures** (`4,250 kg`, `€2.10 billion`, `€180 million`, transfer durations) |    0 | No figure anywhere in body or frontmatter; the `210.7-day` planning anchor from SCENARIO.md:176-177 / `:295-296` is **verified absent** (re-checked 2026-09-19 ~12:40 CEST)                                                                                                                                                                                                                                                                     |
| **Step 007-011 milestone rows** (`:197`-`:207`, rover egress onwards)                                              |    0 | The only later-step reference is the released "arrival at Asteria Field lies ahead" sentence, which carries **no date**; rows `:197` (atmospheric entry and landing) through `:207` are entirely absent                                                                                                                                                                                                                                         |
| **Documentary-image framing** (a "photograph" / "mission record" / "footage")                                      |    0 | No image of any kind on this page (the asset manifest records `placement: none` and `candidates: 0`); no documentary phrasing anywhere                                                                                                                                                                                                                                                                                                          |
| **Real URLs** (http://, https://)                                                                                  |    0 | The article has no external links at all                                                                                                                                                                                                                                                                                                                                                                                                        |
| **First-naming scope** (C7 ordinal "third")                                                                        | 1, 1 | "third such opportunity" (L16) is the C7 ordinal derived from the released counting convention pages 1 and 2 set ("first" / "second"); "final approach correction opportunity" / "Final approach correction opportunity" (L4, L15, L21) is already released by the 006-cruise-checkout page (`:7`, `:49-51`), so the milestone name is **not** a first-naming on this page — it is the in-fiction record of a name 006 page 2 already published |

## 5. Plausibility

- **Article body.** Seven paragraphs (paragraph 1 — the lead and
  milestone date plus the history clause naming the launch and the two
  earlier corrections; paragraph 2 — the plain-language definition of
  a final-approach correction opportunity; paragraph 3 — the test
  framing and the "carried out within the planned frame" outcome,
  with the in-article "no course-state claim … no figures or
  measurements" caveat; paragraph 4 — generic cruise-operations
  description and the deep-space-operations transition; paragraph 5
  — the C8 next-status expectation in generic approach /
  arrival-preparation terms with an explicit "details of entry,
  landing, or surface operations are not part of this record"
  boundary; paragraph 6 — the released destination-name future
  frame; paragraph 7 — the closing disclosure note and the italic
  footer). Voice is consistent with 001/002/003/004/005/006 pages
  1–2: short declaratives, defined terms ("cruise stage", "flight
  stack", "trajectory"), no acronym display, no superlative.
- **Frontmatter renders.** Title 50 chars (≤60 budget OK — well
  within), summary 120 chars (≤155 budget OK), linkLabel 20 chars.
  `category` (`Cruise 06`), `status` (`Final approach correction
  opportunity assessed`), `order` (6), `accent` (amber) all follow
  the established convention; `publication: draft` stays until the
  release decision is applied by the build card.
- **Internal-link inventory.** Three anchors: `/#mission` (line 12,
  the fiction disclosure link to the homepage mission brief),
  `/news/006-cruise-checkout/` (line 18, the released cruise page 2
  on which the final-approach milestone was first named), and
  `/news/005-launch/` (line 54, the released launch-update context
  from the closing note). All three targets are released routes
  (200 on the live origin today — `/news/005-launch/` and
  `/news/006-cruise-checkout/` verified in-browser 2026-09-19
  ~12:45 CEST). No external link, so no real institution's URL
  carries a name onto a public surface.
- **No `media*` field.** The article carries no `media`, `mediaAlt`,
  `mediaLabel` or `mediaCaption`; `newsMediaIssues()` returns `[]` on
  no `media` (the schema short-circuits in `src/lib/media.ts:131`).
  The asset manifest's text-only decision is sound (no approved
  in-transit visual exists; the Ariane plates under
  `docs/vehicles/ariane/` are launch/vehicle plates and none carries
  an in-cruise moment; `travelling-to-mars.png` remains gated per
  `guards.mjs:75-77` and `guards.test.mjs:831`).
- **Step-006 source format is consistent with the brief's
  instruction** for "date-scoped language so the page does not imply
  an evergreen current status after its fictional record date" (brief
  `:43`): every dated token the article prints is either the step's
  own event (`:196` `21 August 2031`) or already-released history
  (`:193` `17 February 2031`, `:194` `3 March 2031`, `:195` `20 May
  2031`). No number, no trajectory parameter, no telemetry, no
  later-step fact, no rover-deployment number, no surface target.

## 6. Spoiler safety

Of the four families the 004 release record flagged (institution /
operator / facility, launch-day forms, private calendar, withheld file
names), article 006 page 3 scores **0 hits** on all four. The four
dated references the article prints are milestone rows `:193` / `:194`
/ `:195` / `:196` — all public rows the cruise-update brief
authorises. Rows `:197`-`:207` (atmospheric entry and landing through
end-of-life) are entirely absent.

Step 007 to step 011 detail (landing success, surface operations,
rover egress, drive results, samples, science findings,
end-of-life anomaly, the dossier's publication state) is fully
withheld — confirmed by the twelve families measuring 0 above and by
no token matching the step-007+ milestone names (`:197`-`:207`, rover
egress onwards; nowhere in article 006 page 3).

The C8 next-status sentence ("the approach and arrival-preparation
phase … details of entry, landing, or surface operations are not
part of this record") is **explicitly spoiler-safe**: the article
itself states that entry, landing, and surface operations are out of
scope. Row `:197` is not referenced, named, or dated; "arrival at
Asteria Field lies ahead" remains date-free.

## 7. Continuity verdict

`continuity clear`. The article is canonically sound, chronologically
safe, plausibly framed, and spoiler-clean. No findings to return for
revision; the companion review's §"Release decision" carries the
recorded release decision. No canon change, no `docs/SCENARIO.md`
write, no `docs/timeline/` write.

The reviewer in chief records the release decision in the companion
review `§"Release decision"`. No separate human approval is required.

---

_This record is working material, not canon. Canon lives in `docs/SCENARIO.md` and
the dossiers under `docs/vehicles/`. The continuity verdict above is this role's
chronological / canonical / spoiler half of the editorial gate's verdict; the
editorial half is in `.agents/work/reviews/006-cruise-final-approach.md`._
