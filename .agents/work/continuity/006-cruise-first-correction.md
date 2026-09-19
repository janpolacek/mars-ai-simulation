# Continuity: 006-cruise-first-correction — chronology, canon, plausibility and spoiler verdict

Slug: `006-cruise-first-correction`. Card `t_f0689b4a`
(`mars-ai-simulator-reviewer`), stage: merged continuity + editorial final
gate. Timeline step `006-cruise`, **page 1 of 3** (the first planned
trajectory-correction opportunity). Companion record:
`.agents/work/reviews/006-cruise-first-correction.md` (review table, status
`approved`; the release decision is recorded in §"Release decision" of that
record).

**Verdict (2026-09-19 ~12:00 CEST): `continuity clear`.** The article is
within scope, the chronology holds, every material claim traces to a
released source, no later-step fact leaks, and the simulated record date
this role assigns is drawn from the locked milestone the table holds.
There are no findings to return for revision; the companion review's
§"Release decision" carries the recorded release decision.

The reviewer in chief records the release decision in the companion review
`§"Release decision"`. No separate human approval is required.

## 1. Evidence boundary and what was compared

| Item                       | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article under review       | `website/news/006-cruise-first-correction.mdx` — sha256 `9193de2cf44e109524a449bd35c11fbec0710adb13d09332edda44e281f44570`, 3,401 B, 57 lines, `publication: draft` (line 5), no `media*`, no `author`, no `simulatedDate`, 411-word heading-free body (the SEO-compatible integrated package the brief requires)                                                                                                                                                                                                                                        |
| Released step compared     | `docs/timeline/006-cruise.md` (private situation, allowed public angle, spoilers and handoff); released precedence `docs/timeline/001-project-announcement.md` … `docs/timeline/005-launch.md`; `docs/timeline/README.md` for the "do not invent" invariant                                                                                                                                                                                                                                                                                              |
| Canon compared             | `docs/SCENARIO.md` — §Mission identity (`:19`, `:21`–`:25`), §Flight system (`:122`–`:140`, esp. `:124`–`:125` for the cruise stage), §Launch and mission dates (`:173`–`:207`, milestone row `:194` the first correction), §Continuity and release controls (`:274`–`:282`, landing-design withhold `:279`, real-institution rule `:281`)                                                                                                                                                                                                               |
| Working papers compared    | `.agents/work/briefs/006-cruise.md` (the step's bound brief, "allowed facts" + "forbidden/spoiler facts" + the three-page milestone table); `.agents/work/sources/006-cruise-first-correction.md` (claim ledger C1–C12 + real-world grounding for the plain-language definition only)                                                                                                                                                                                                                                                                    |
| Asset manifest compared    | `.agents/work/assets/006-cruise-first-correction/assets.md` (text-only decision; `placement: none`; `candidates: 0`; `travelling-to-mars.png` remains gated per `website/scripts/guards.mjs:77` and `website/test/guards.test.mjs:831`)                                                                                                                                                                                                                                                                                                                  |
| Published record compared  | `website/news/001-project-announcement.mdx` (`923a12d8…`, 4,832 B), `002-payload-selection.mdx` (`7b69bd7f…`, 7,766 B), `003-vehicle-design.mdx` (`51f2ee69…`, 5,476 B), `004-launch-provider.mdx` (`7da71fec…` released / `be20389f…` post-Form-A), `005-launch.mdx` (`f165f3ab…`, 2,900 B, published 2026-09-19, `simulatedDate: 2031-02-17`); release records `.agents/work/releases/004-launch-provider.md` and `.agents/work/continuity/005-launch.md`                                                                                              |
| Surface machinery compared | `website/src/content.config.ts:9-71` (news schema, `simulatedDate` regex, `newsMediaIssues`); `src/lib/media.ts` (newsMediaRequirements, `newsMediaIssues`); `src/lib/simulated-date.ts` (label `Simulated record date`, U+00B7 separator, ISO format); `src/lib/publication.ts` (publication predicate); `src/features/news/media.ts` (key resolver); `src/features/news/NewsCard.astro:54` (newsroom card render); `src/features/news/ArticleView.astro:27` (article page render); guards `website/scripts/guards.mjs`, `website/test/guards.test.mjs` |
| Shared tree read at        | `HEAD` = `origin/main` = `72d41f2` (commit `t_70dc2c75: publish milestone-2031-launch-readiness-review capsule`, 2026-09-19); working tree is dirty only with the untracked 006 working papers (brief, source, asset manifest) and the untracked `006-cruise-first-correction.mdx`; no `website/` write by this card                                                                                                                                                                                                                                     |
| Build surface              | The shared `website/dist/` is **not** the live surface for this slug (the article is `publication: draft`; `check-dist` prunes `dist/` on failure and a release-stage gate must never build over the build card's output). The live origin is what would carry the published bytes after the build card pushes                                                                                                                                                                                                                                           |
| All input hashes re-taken  | Immediately before this verdict (2026-09-19 ~11:55 CEST); every hash identical to the read cited above                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## 2. Chronology

- **Release order.** Step 006 (cruise updates, page 1 of 3) is released by
  the editorial review's recorded release decision; the article is the
  step's public surface and stays `publication: draft` until that flip.
  The step's three-page brief (`.agents/work/briefs/006-cruise.md:5-13`)
  fixes three dated milestone rows (`:194` first correction, `:195` cruise
  checkout, `:196` final approach); page 1 of 3 covers row `:194`.
- **The step's own boundary.** `docs/timeline/006-cruise.md` (private
  situation): the allowed public angle and the spoiler scope are
  re-stated by the brief's "Allowed facts" / "Forbidden / spoiler facts"
  lines (`:17-32`); the dependency is released step 005 (the launch
  update, `simulatedDate: 2031-02-17`). The 006 timeline step is the
  cruise-update chain; pages 2 (`006-cruise-checkout`, row `:195`) and 3
  (`006-cruise-final-approach`, row `:196`) follow page 1 in serialised
  release order (brief :43 "the cruise chain is serialised").
- **The milestone row the step covers.** `docs/SCENARIO.md:194`:
  `3 March 2031 | First planned trajectory-correction opportunity`. The
  record-date skill (§"The simulated record date" in
  `.agents/skills/editorial-review/SKILL.md`) instructs: "pick the
  milestone the article's released timeline step covers". Page 1 of 3
  covers that milestone, and the row the table holds is the one the
  article's subject reports. **The record date this role assigns is
  `2031-03-03`, drawn from `docs/SCENARIO.md:194`.**
- **Order-sensitivity against already-published copy.**
  - 001 (`:66`–`:72`, record date `2026-10-12`): the only calendar
    sentence is "a launch window in 2031". Article 006's "3 March 2031"
    is a cruise-page date, not a launch day, so 001's no-launch-day-
    announced framing still holds at 001's own date.
  - 002 (`:105`–`:106`, record date `2027-03-19`): "The schedule frame
    remains the 2031 launch window set out in the [programme
    announcement]. No launch or landing date is being stated." Article
    006 does not name a launch or landing day; at 002's own date 002's
    claim still holds.
  - 003 (`:70`–`:71`, record date `2029-07-13`): "No launch vehicle has
    been named, no launch date has been stated, and no landing site has
    been announced." Article 006 names no launch vehicle, no launch day,
    no landing day, no landing site. The 003 sentence holds at 003's own
    date; falsifiable only when the step that publishes a landing _site_
    runs.
  - 004 (`:47`, record date `2030-03-11`): "no day within it has been
    announced". Article 006 names no launch day; the 17 February 2031
    launch day referenced as already-released history is **already
    public** at 005's release, so the 004 release record's
    "lower-bound-on-005" condition is unaffected.
  - 005 (`:37`–`:42`, record date `2031-02-17`): "The programme's next
    immediate check is the first planned trajectory-correction
    opportunity, expected on 3 March 2031." Article 006 **is the
    follow-up to that 005 sentence** — the in-fiction record dated on
    the date 005 named as the next check. The 005 sentence reads as
    "expected on 3 March 2031"; the 006 article reports the check was
    carried out on the same date the prior step named. **No
    contradiction.** (005 carries its own record date, so 005's own
    sentence is a statement about its own moment; the 006 article
    reporting the check is the next page of the same record.)
- **Order floor carried forward.** Step 006's record date
  (`2031-03-03`) is **later than 005's** (`2031-02-17`). The bound holds;
  page 2 (`006-cruise-checkout`, brief :11) must carry a record date on
  or after `2031-03-03` and page 3 (`006-cruise-final-approach`,
  brief :12) must carry a record date on or after `2031-05-20`. The
  values the brief proposes (`:10`-`:12`) satisfy the floor.

## 3. Canon consistency — material claims

Every material claim in the body and frontmatter, with the released source
it traces to.

| #  | Claim (article, by paragraph)                                                                                                                                                                                                                                                                                                                                                                                                                      | Source                                                                                                                                                                                                                                                                                                                                                                                                                  | Verdict                                                                                                                                                                                                  |
| -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | "Red Horizon is a fictional, AI-assisted Mars exploration programme"                                                                                                                                                                                                                                                                                                                                                                               | 005:16 (the disclosure pattern); 001:23 first-sentence                                                                                                                                                                                                                                                                                                                                                                  | PASS — first-sentence disclosure as 001–005 do                                                                                                                                                           |
| 2  | "the programme has reached its first planned trajectory-correction opportunity. On 3 March 2031, Red Horizon One — already in interplanetary cruise since its 17 February 2031 launch aboard Ariane 64 — carried out the first scheduled course-refinement manoeuvre of its journey toward Mars"                                                                                                                                                   | SCENARIO.md:193 (the launch day), `:194` (the first correction), 005:17, 005:37–:38                                                                                                                                                                                                                                                                                                                                     | PASS — released launch day as history; locked row `:194` as the step's own event                                                                                                                         |
| 3  | "The [launch update](/news/005-launch/) records the mission's departure and the naming of this opportunity"                                                                                                                                                                                                                                                                                                                                        | 005:37–:38 (the released naming)                                                                                                                                                                                                                                                                                                                                                                                        | PASS — internal anchor to a released route (`/news/005-launch/`, published)                                                                                                                              |
| 4  | Plain-language definition of a trajectory-correction opportunity (paragraph 2, L19–:26): "a planned manoeuvre to refine the spacecraft's course toward its destination … small uncertainties accumulate over weeks of travel … engines fire in a carefully planned burst … navigation systems that guided the spacecraft out of Earth's gravity well now take on the harder job of steering across millions of kilometres of interplanetary space" | Brief :19 (the approved definition); NASA _Basics of Space Flight_ Ch 15 "Cruise" (TCMs are executed to fine-tune the trajectory; instruments powered on, exercised, calibrated during designated checkout periods) — HTTP 200 verified 2026-09-19; Ch 13 "Navigation" (a minor interplanetary-cruise flight-path control maneuver is typically called a Trajectory Correction Maneuver) — HTTP 200 verified 2026-09-19 | PASS — plain-language definition only; **no** ΔV magnitude, **no** engine firing time, **no** real-mission telemetry number imported from NASA Ch 13 into the fiction (boundary the source pack records) |
| 5  | "The 3 March opportunity tested whether the cruise stage has placed the stack on the correct course for Mars, and whether the navigation and communications systems are performing as designed during the long cruise phase"                                                                                                                                                                                                                       | 005:37–:41 (the released framing the 005 article named as the test the opportunity will perform); SCENARIO.md:125 (cruise-stage function)                                                                                                                                                                                                                                                                               | PASS — same capability framing 005 released; no telemetry / health numbers                                                                                                                               |
| 6  | "The programme reports that the opportunity was carried out and assessed within the planned frame: routine operations have held, and the spacecraft is tracking as expected. No course-state claim beyond that released framing is part of this record, and the opportunity discloses no figures or measurements of any kind"                                                                                                                      | 005:37–:41 (the released test framing); brief :22 (routine is the valid story when no approved source names a concern); brief :25 (no trajectory parameters)                                                                                                                                                                                                                                                            | PASS — the explicit "no figures or measurements" sentence is the source-pack C6 boundary made visible; nothing in the body or frontmatter contradicts it                                                 |
| 7  | "the flight stage handles navigation, thermal control, and communications with Earth; instruments are exercised and checked out; and the mission's teams monitor the spacecraft's health from across the deep-space link"                                                                                                                                                                                                                          | 005:29–:33 (cruise-stage description); 004:32–:33 (solar-powered cruise stage for navigation, thermal control, communications)                                                                                                                                                                                                                                                                                          | PASS — generic cruise description, identical phrasing to 005; no subsystem specs or numbers                                                                                                              |
| 8  | "That transition from ground control to autonomous deep-space operations — already underway since launch — means the mission's own team carries full responsibility for the vehicle's journey, with limited ability to intervene physically"                                                                                                                                                                                                       | 005:31–:35 (transition to deep-space operations)                                                                                                                                                                                                                                                                                                                                                                        | PASS — exact 005 phrasing re-used                                                                                                                                                                        |
| 9  | "The next status the programme expects to report is a cruise checkout around 20 May 2031, covering the health of all flight elements"                                                                                                                                                                                                                                                                                                              | 005:41–:42; SCENARIO.md:195 (`20 May 2031 \| Cruise checkout and second correction opportunity`)                                                                                                                                                                                                                                                                                                                        | PASS — released naming in 005; locked row `:195` named as future-status only                                                                                                                             |
| 10 | "The mission remains in cruise, and arrival at Asteria Field lies ahead"                                                                                                                                                                                                                                                                                                                                                                           | 005:43 (the released destination-name sentence); 001:53–:60 (Asteria Field as the released landing-target name); wiki `red-horizon.mdx:34`                                                                                                                                                                                                                                                                              | PASS — destination name already released; **no** landing date, **no** ellipse, **no** coordinate, **no** surface detail                                                                                  |
| 11 | Closing note: "Ariane 64 is a real launcher designation … no real agency, launcher operator, or launch facility is a partner in this programme or has endorsed it"                                                                                                                                                                                                                                                                                 | 005:50–:53; 004:23–:27; 004:58–:61; SCENARIO.md:281 (real-institution rule)                                                                                                                                                                                                                                                                                                                                             | PASS — identical disclosure pattern to 005; **no** institution, operator or facility named                                                                                                               |

**Derived claims, judged, not waved through:**

- **D1 — "the first scheduled course-refinement manoeuvre of its journey
  toward Mars"** (row 2): a paraphrase of the locked milestone name
  ("First planned trajectory-correction opportunity"). The plain-language
  form does not introduce a figure or an outcome. PASS.
- **D2 — "the same navigation systems that guided the spacecraft out of
  Earth's gravity well"** (paragraph 2): a plain-language description of
  interplanetary-cruise navigation, consistent with the brief's
  definition and the NASA Ch 13 / Ch 15 grounding. PASS as language,
  not as a system identification.
- **D3 — "routine operations have held, and the spacecraft is tracking
  as expected"** (row 6): the routine framing the brief authorises (`:22`).
  The article itself explicitly disclaims any course-state claim beyond
  this released framing and any figure or measurement (the "No
  course-state claim … no figures or measurements" sentence). The
  disclosure is in the article body, not just in the source pack. PASS
  with the in-article caveat as the operative boundary.
- **D4 — "arrival at Asteria Field lies ahead"** (row 10): the released
  destination name as the future frame; no date. PASS.

## 4. Withheld-marker scan — full inventory

Scanned against the article and the frontmatter, by family. (The scanner
runs in a scratch script outside the repository; the article body and
frontmatter were scanned line-by-line.)

| Family                                                                                                             | Hits | Notes                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ---: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Launcher designation `Ariane 64`                                                                                   |    1 | L14 (body, in the history clause); matches the 005 disclosure pattern                                                                                                                                                                                                                            |
| **Real institution / operating-company** (Arianespace, ArianeGroup, CNES, ESA, FEI STU)                            |    0 | The disclosure's reference is the word "organisations", which the scanner does not pick up                                                                                                                                                                                                       |
| **Launch-facility family** (Europe's Spaceport, ELA-4, ELA4, Kourou, Guiana, Centre Spatial Guyanais)              |    0 | The article makes no reference to a launch facility or city                                                                                                                                                                                                                                      |
| **Withheld launch-day forms** (`13 January 2031`, `11 February 2031`, `22 November 2030`, `30 August 2030`)        |    0 | None of those rows appears in the article                                                                                                                                                                                                                                                        |
| Named milestone dates                                                                                              |    — | The three named milestone dates are reported individually: `17 February 2031` (SCENARIO.md:193, already released at 005), `3 March 2031` (SCENARIO.md:194, this step's own row), `20 May 2031` (SCENARIO.md:195, released at 005 as next-status); all three are within the brief's allowed angle |
| **Landing-region coordinate markers** (`18° 42`, `226° 14`)                                                        |    0 | The scanner pattern is identical to 004's                                                                                                                                                                                                                                                        |
| **Private-timeline paths or withheld filenames**                                                                   |    0 | No `docs/timeline/` reference; no AF-*, no `contact-arm-scene`, no `travelling-to-mars`                                                                                                                                                                                                          |
| **Asteria Field / landing-design** (Asteria Field, ellipse, P0, science zone, hazard, traverse)                    |    1 | The single mention is `Asteria Field` on L46 — already released at 001:53–:60; no coordinates, no ellipse, no surface design                                                                                                                                                                     |
| **Performance / cost / mass / schedule figures** (`4,250 kg`, `€2.10 billion`, `€180 million`, transfer durations) |    0 | No figure anywhere in body or frontmatter; the `210.7-day` planning anchor from SCENARIO.md:176–:177 is **verified absent**                                                                                                                                                                      |
| **Step 007–011 milestone rows** (`:197`–`:207`, rover egress onwards)                                              |    0 | The only later-step reference is the released "arrival at Asteria Field lies ahead" sentence, which carries **no date**                                                                                                                                                                          |
| **Documentary-image framing** (a "photograph" / "mission record" / "footage")                                      |    0 | No image of any kind on this page (the asset manifest records `placement: none` and `candidates: 0`); no documentary phrasing anywhere                                                                                                                                                           |
| **Real URLs** (http://, https://)                                                                                  |    0 | The article has no external links at all                                                                                                                                                                                                                                                         |

## 5. Plausibility

- **Article body.** 411 words, heading-free, six paragraphs
  (paragraph 1 — the lead and history clause; paragraph 2 — the
  plain-language definition of a trajectory-correction opportunity;
  paragraph 3 — the test framing and the "carried out within the
  planned frame" outcome, with the in-article disclosure that no
  figure or measurement is part of this record; paragraph 4 — generic
  cruise-operations description; paragraph 5 — the next-status
  expectation and the released destination-name future frame;
  paragraph 6 — the closing disclosure note). Voice is consistent with
  001/002/003/004/005: short declaratives, defined terms
  ("trajectory-correction opportunity", "cruise stage", "flight stage"),
  no acronym display, no superlative.
- **Frontmatter renders.** Title 59 chars (≤60 budget), summary
  130 chars (≤155 budget), linkLabel 38 chars; all well within the
  site budgets the SEO policy records (`titles ≤ 60`, `descriptions
  ≤ 155`). `category` (`Cruise 06`), `status` (`First correction
  opportunity assessed`), `order` (6), `accent` (amber) all follow the
  established convention; `publication: draft` stays until the release
  decision is applied by the build card.
- **Internal-link inventory.** Two anchors: `/#mission` (line 12, the
  fiction disclosure link to the homepage mission brief) and
  `/news/005-launch/` (line 16, the released launch-update context).
  Both targets are released routes (200 on the live origin today).
  No external link, so no real institution's URL carries a name onto
  a public surface.
- **No `media*` field.** The article carries no `media`, `mediaAlt`,
  `mediaLabel` or `mediaCaption`; `newsMediaIssues()` returns `[]` on
  no `media` (the schema short-circuits in `src/lib/media.ts:124`).
  The asset manifest's text-only decision is sound (no approved
  in-transit visual exists; the Ariane plates under
  `docs/vehicles/ariane/` are launch/vehicle plates and none carries
  an in-cruise moment; `travelling-to-mars.png` remains gated per
  `guards.mjs:77` and `guards.test.mjs:831`).
- **Step-006 source format is consistent with the brief's
  instruction** for "date-scoped language so the page does not imply
  an evergreen current status after its fictional record date" (brief
  :43): every dated token the article prints is either the step's
  own event (`:194` `3 March 2031`), already-released history (`:193`
  `17 February 2031`), or the released next-status frame (`:195`
  `20 May 2031`). No number, no trajectory parameter, no telemetry,
  no later-step fact, no rover-deployment number, no surface target.

## 6. Spoiler safety

Of the four families the 004 release record flagged (institution /
operator / facility, launch-day forms, private calendar, withheld file
names), article 006 scores **0 hits** on all four. The three dated
references the article prints are milestone rows `:193`/`:194`/`:195`
— all public rows the cruise-update brief authorises; `:196` (final
approach) and `:197`+ (atmospheric entry, landing, egress, drive,
samples, mineral stratigraphy, end-of-life) are entirely absent.

Step 007 to step 011 detail (landing success, surface operations, rover
egress, drive results, samples, science findings, end-of-life anomaly,
the dossier's publication state) is fully withheld — confirmed by the
twelve families measuring 0 above and by no token matching the
step-007+ milestone names (`:197`–`:207`, rover egress onwards;
nowhere in article 006).

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
editorial half is in `.agents/work/reviews/006-cruise-first-correction.md`._
