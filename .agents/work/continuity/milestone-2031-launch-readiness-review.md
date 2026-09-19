# Continuity: milestone-2031-launch-readiness-review — chronology, canon, plausibility and spoiler verdict

Slug: `milestone-2031-launch-readiness-review`. Card `t_98f4e551`
(`mars-ai-simulator-reviewer`), stage: merged continuity + editorial
final gate. Timeline step `005-launch` (pre-launch capsule backfill — the
launch-day factual update is already released as `005-launch.mdx`).
Companion record: `.agents/work/reviews/milestone-2031-launch-readiness-review.md`
(review table, verdict `approved`; the release decision is recorded in
§"Release decision" of that record).

**Verdict (2026-09-19, ~13:50 CEST): `continuity clear`.** Chronology
holds: the capsule's `simulatedDate: 2031-02-11` is the locked milestone
row the table holds (`docs/SCENARIO.md:192`), it precedes the published
step-005 factual update's record date (`2031-02-17`) by 6 fiction-days,
and it follows the released stack-arrival capsule (`2031-01-13`) by 29
fiction-days — a tight in-fiction sequence on consecutive milestone rows
the same locked table holds. Canon consistency: every claim traces to
released material — `website/news/004-launch-provider.mdx`,
`/news/milestone-2031-stack-arrival/`, the wiki `red-horizon` fiction
disclosure, and the locked milestone row `docs/SCENARIO.md:192` — and no
later-step fact appears. Plausibility: a launch-readiness review is a
routine, well-documented ground-campaign event before flight; the body
describes the review's purpose (systems, operations, open risks) without
asserting a pass/fail result, an authorisation, or a launch-imminent
claim. Spoiler safety: forbidden-terms scan returned **zero** hits on
Kourou, Arianespace, ArianeGroup, ESA, Europe's Spaceport, ELA-4,
Asteria Field, the 17 February 2031 launch day, the 11 February 2031
readiness-review row's outcome language, or any "ready to launch /
approved / certified / cleared / passed" framing the locked row does not
carry. Landing-region coordinate markers `18° 42` and `226° 14` are
absent. No link to `/news/005-launch/` (chronology discipline, the
capsule precedes the launched article in fiction). The build-guard mirror
returned zero offences. No canon change, no `docs/SCENARIO.md` write, no
`docs/timeline/` write, no asset change.

This is the canonical continuity record for the third `005-launch`
capsule in the sequence. The first two records cover the launch-day
factual update (`simulatedDate: 2031-02-17`) and the stack-arrival
capsule (`simulatedDate: 2031-01-13`); this record covers the
launch-readiness-review companion (`simulatedDate: 2031-02-11`). All
three records stand; the milestone table at `docs/SCENARIO.md:179-207`
holds all three dates and is the only source for the calendar values
this capsule carries.

## 1. Evidence boundary and what was compared

| Item                       | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article under review       | `website/news/milestone-2031-launch-readiness-review.mdx` — sha256 `ac0b330d6c60e6fb61b4bdddfa9255b6851534184de7873c4c463bc8eafdae37`, 2,883 B, 56 lines, `publication: draft` (line 5), `category: Launch capsule 05`, `status: Readiness review milestone`, `order: 5`, `accent: amber`, **no `media*` field**, **no `simulatedDate` yet**, **no `author`**. Frontmatter schema-conformant: keys `title, category, status, publication, summary, linkLabel, order, accent` (8 keys). Title 35 chars, summary 143 chars, linkLabel 23 chars — all within site budgets.                                                                                         |
| Released step compared     | Step `005-launch`. Prior releases on this step: `005-launch.mdx` (sha256 `f8338776…`, published, `simulatedDate: 2031-02-17`) and `milestone-2031-stack-arrival.mdx` (sha256 `690cc299…`, published, `simulatedDate: 2031-01-13`). This capsule is a sub-event backfill on the step's scope, dated 6 fiction-days before the launch article and 29 fiction-days after the stack-arrival capsule.                                                                                                                                                                                                                                                                |
| Private timeline compared  | `docs/timeline/005-launch.md` (capsule-style pre-launch sub-events within step-005's scope once recorded as a backfill on the step's release order). The continuity ledger does not reproduce any private-timeline text.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Canon compared             | `docs/SCENARIO.md` — §Mission identity (`:19`, `:21`–`:25`), §Flight system (`:122`–`:140`, esp. `:124`–`:127`), §Launch and mission dates (`:173`–`:207`, milestone row `:192` for this capsule and `:193` for the launch day the published step-005 article owns, `:191` for the stack-arrival capsule), §Continuity and release controls (`:274`–`:282`, landing-design withhold `:279`, real-institution rule `:281`).                                                                                                                                                                                                                                      |
| Working papers compared    | `.agents/work/briefs/milestone-2031-launch-readiness-review.md` (sha256 `7788c378…`, allowed facts + forbidden/spoiler facts), `.agents/work/sources/milestone-2031-launch-readiness-review.md` (sha256 `dcda4867…`, claim ledger C1–C8; lines 28–38), `.agents/work/assets/milestone-2031-launch-readiness-review/assets.md` (sha256 `930063fc…`, text-only-no-new-imagery manifest, draft hash `ac0b330d…` recorded).                                                                                                                                                                                                                                         |
| Published record compared  | `website/news/001-project-announcement.mdx` (`simulatedDate: 2026-10-12`, published), `002-payload-selection.mdx` (`2027-03-19`), `003-vehicle-design.mdx` (`2029-07-13`), `004-launch-provider.mdx` (`2030-03-11`), `005-launch.mdx` (`2031-02-17`), `milestone-2031-stack-arrival.mdx` (`2031-01-13`); wiki `red-horizon.mdx:14-22` for the fiction disclosure.                                                                                                                                                                                                                                                                                               |
| Surface machinery compared | `website/src/content.config.ts` (news schema; `simulatedDate` is `optional` and editor-assigned; `newsMediaIssues` enforces media-key contracts), `src/lib/media.ts` (newsMediaKeys, newsMediaRequirements), `src/lib/simulated-date.ts` (label and pattern), `src/lib/publication.ts` (`publication` predicate, `selectPublicNews` sort by date-DESC tiebreak on `order`), `src/features/news/query.ts` (filtering at collection-query level), `src/features/news/media.ts` (key resolver), `ArticleView.astro` (page render), `NewsCard.astro` (card render); guards `website/scripts/guards.mjs` (gated dirs/files/markers), `website/test/guards.test.mjs`. |
| Build surface              | The shared `website/dist/` is **not** the live surface (predates the build card's push; this gate does not build). The live origin (`https://mars-ai-simulation.janpolacek.workers.dev/`) is what the push-triggered Cloudflare build serves.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Probe                      | Live origin `GET /news/milestone-2031-launch-readiness-review/` returns HTTP 404 (body length 0) — fail-closed default verified in fact; the route is **not** advertised by `/news/` (the newsroom index does not contain the slug; live-probe confirms).                                                                                                                                                                                                                                                                                                                                                                                                       |
| Shared tree read at        | `HEAD = 8093a01 = origin/main` (no drift). 33 untracked working papers + the untracked article file; nothing committed by this gate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## 2. Chronology and the 005-launch capsule mapping (this gate's headline call)

**Mapping.** The card body names this a "capsule backfill on timeline
step 005-launch". The capsule is a pre-launch sub-event in the same
release step the launched article covers; the capsule's record date
(`2031-02-11`) precedes the launch article's (`2031-02-17`) by 6
fiction-days and follows the released stack-arrival capsule
(`2031-01-13`) by 29 fiction-days, and all three dates are anchored on
consecutive locked milestone rows the same `docs/SCENARIO.md` table
holds (`:191`, `:192`, `:193`). This is the right mapping because:

- The locked milestone row the capsule reports is `docs/SCENARIO.md:192`
  (`11 February 2031 | Launch Readiness Review`), a row the table
  actually holds (`:179`–`:207`).
- The row's meaning — a launch-readiness review — is the step's own
  pre-launch event, not a later-step fact. No event the step has not
  released is implied.
- The release-order consequence (listing by `simulatedDate` desc) lands
  the capsule **between** the launch article (`2031-02-17`, index 1) and
  the stack-arrival capsule (`2031-01-13`, index 3) — exactly the
  in-fiction position the chronology implies.
- The capsule's framing on its own date is consistent with the
  step-005 released scope: a launch-readiness review is **before** the
  launch (which the step-005 article already releases) and **after** the
  stack arrival (which the stack-arrival capsule already releases); the
  capsule reports the moment the review begins, not its conclusion.

**Order-sensitivity against already-published copy.** Verified against
the six already-released articles:

- 001 (`:66`–`:72`, record date `2026-10-12`): the only calendar
  sentence is "a launch window in 2031". Article 005-launch-readiness
  reports the readiness-review milestone (`11 February 2031`); at 001's
  own date the readiness review was nearly four years away, so the
  condition holds.
- 002 (`:105`–`:106`, record date `2027-03-19`): "The schedule frame
  remains the 2031 launch window set out in the [programme
  announcement]. No launch or landing date is being stated." Article
  005-launch-readiness reports a milestone **date** (`:192`) inside the
  2031 window but not the launch **day** (`:193`); the brief keeps the
  launch day banned. At 002's own date the launch day was not yet
  stated, and 002 carries its own record date, so its own claim still
  holds at its own moment.
- 003 (`:70`–`:71`, record date `2029-07-13`): "No launch vehicle has
  been named, no launch date has been stated, and no landing site has
  been announced." Article 005-launch-readiness reports no launch
  vehicle (004 already did), no launch date, no landing site. The
  sentence holds at 003's own date, falsifiable only when the step that
  publishes each of the three things runs.
- 004 (`:47`, record date `2030-03-11`): "no day within it has been
  announced" (the 2031 window). Article 005-launch-readiness does **not**
  name the launch day; it names the readiness-review day (`:192`),
  which is six days **earlier** than the launch day (`:193`). At 004's
  own date the launch day was not yet announced; the readiness-review
  day is also not announced (this is its first public statement). The
  sentence holds at 004's own date.
- 005-launch (`2031-02-17`): the launch-day article reports what
  happened on launch day; article 005-launch-readiness dates **6 days
  earlier** in fiction and reports **what started on that earlier day**
  (the review), not the launch outcome. No contradiction: the two
  articles describe different in-fiction moments.
- milestone-2031-stack-arrival (`2031-01-13`): the arrival capsule
  reports the flight stack reaching the launch campaign site. Article
  005-launch-readiness dates 29 days later in fiction and reports the
  readiness review beginning. No contradiction: the arrival capsule
  leaves the readiness-review milestone open ("integration, site
  checks, and readiness work remain in progress" per the stack-arrival
  body); the readiness-review capsule closes that open work by
  reporting the structured check.

**Lower bound carried forward.** The capsule's record date is later
than 2030-03-11 (004's) and earlier than 2031-02-17 (005-launch's). The
004 release record's conditions hold: 005-launch-readiness's record date
is later than 004's; the 005-launch record's "lower bound on step 006+"
carries forward unchanged (no later-step article is dated before
`2031-02-17` because of this capsule).

**Upper bound carried forward.** The capsule's record date is earlier
than 005-launch's by 6 fiction-days. The capsule **does not** sit on
the launch row; it sits on the readiness-review row the table holds
exactly one step earlier. No article's negative at the later date is
falsified.

## 3. Canon consistency — material claims

Every material claim in the body and frontmatter, with the released
source it traces to.

| #  | Claim (article, by paragraph)                                                                                                                                                                                                                                                                                                                           | Source                                                                                             | Verdict                                                                                                                                                                                                                                                                                    |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1  | "Red Horizon is a [fictional, AI-assisted Mars exploration programme](/#mission)"                                                                                                                                                                                                                                                                       | 001:23 (disclosure pattern); wiki `red-horizon.mdx:14-22`                                          | PASS — first-sentence disclosure as 001/002/003/004/005-launch do.                                                                                                                                                                                                                         |
| 2  | "the programme has reached the launch-readiness review milestone"                                                                                                                                                                                                                                                                                       | `docs/SCENARIO.md:192` (the locked milestone row this capsule reports); brief §Allowed facts (:23) | PASS — verbatim row meaning; no later-step fact implied.                                                                                                                                                                                                                                   |
| 3  | "On 11 February 2031, the team began a structured check of the Red Horizon One mission: its systems, its operations, and the open risks that remain before the vehicle leaves Earth."                                                                                                                                                                   | `docs/SCENARIO.md:192` (date + milestone name); brief §Allowed facts (:30)                         | PASS — date drawn from the locked row; "structured check … before flight" is the generic process context the brief authorises, not a programme-specific outcome.                                                                                                                           |
| 4  | "The review covers the flight stack as a whole. The already-selected architecture — an Ariane 64 launcher interface, a cruise stage for the transfer to Mars, an entry, descent, and landing platform, and RH-01 Pathfinder, the mission's six-wheel rover — must be verified as one ready unit."                                                       | 004:16-19, :29-35; SCENARIO.md:124-127                                                             | PASS — released architecture context (step 004), no new subsystem specification; the "must be verified" wording is the review's purpose, not a programme outcome claim.                                                                                                                    |
| 5  | "A launch-readiness review is the point at which a programme examines whether the mission is ready for the next phase. It is a systematic check of mission systems, operations, and open risks before flight. The review establishes what is ready, what remains open, and what still needs to be closed before the vehicle is cleared to leave Earth." | Brief §Allowed facts (:30) generic process context                                                 | PASS — generic definition of "what a readiness review is", not a programme-specific outcome; the sentence describes what such a review establishes in principle (ready / open / closed), not what this specific review established.                                                        |
| 6  | "What this update does not establish is any outcome. The review has begun; its conclusion is not part of this record. Everything between this review and flight — the remaining checks, the open items, the decisions that follow — stays open. The programme has published a status, not a clearance."                                                 | Brief §Forbidden facts (:38–41); the negative framing is a chronology-discipline claim             | PASS — the explicit no-outcome wording is exactly what the brief's allowed-facts line permits and its forbidden-facts line requires. The negative is a containment claim that holds at the article's own date (the review is reported as begun; the outcome is reported as not-yet-known). |
| 7  | "The architecture behind this flight stack is set out in the [step-04 launch architecture update](/news/004-launch-provider/)"                                                                                                                                                                                                                          | 004 (the released article)                                                                         | PASS — internal link to a released route on the live origin (200 OK); context only.                                                                                                                                                                                                        |
| 8  | "The [stack-arrival update](/news/milestone-2031-stack-arrival/) records that the flight stack reached the launch campaign site on 13 January 2031, and that integration, site checks, and readiness work were already in progress at that time."                                                                                                       | `milestone-2031-stack-arrival.mdx` (released article; record date `2031-01-13`); 004:51-56         | PASS — internal link to a released route (200 OK); the chronological-safe predecessor; the wording "reached … on 13 January 2031" repeats a published milestone the stack-arrival capsule carries, not a new release.                                                                      |
| 9  | "Ariane 64 is a real launcher designation; naming it here says which vehicle this fictional mission is planned around, and nothing more. Its record belongs to the organisations that build and operate it, not to Red Horizon, and no real agency, launcher operator, or launch facility is a partner in this programme or has endorsed it."           | 004:23-27, :58-61; SCENARIO.md:281                                                                 | PASS — re-states the fail-closed non-endorsement language in the same form 004 used; **no** institution, operator or facility is named here (the disclosure lists categories, not names).                                                                                                  |
| 10 | Closing italic note: "no real agency, launcher operator, or launch facility is a partner in Red Horizon, and none of them has endorsed or approved it"                                                                                                                                                                                                  | Same as row 9                                                                                      | PASS — closing disclosure in 001/002/003/004/005-launch pattern.                                                                                                                                                                                                                           |

**Derived claims, judged, not waved through:**

- **D1 — "11 February 2031, the team began a structured check"** (row 3):
  the locked milestone row `:192` is exactly `11 February 2031 | Launch
  Readiness Review`; the "began a structured check" is the row's meaning
  rendered in plain prose, not an invented programme-specific event.
  PASS.
- **D2 — "the launch-readiness review milestone"** (rows 2, 6): the
  phrase repeats the locked row's wording and is not a later-step
  publication. The launch-readiness-review phrase is a process phase,
  not a published event the brief bans; the brief's forbidden ledger
  bans **outcomes**, not the milestone's name. PASS.
- **D3 — "Everything between this review and flight … stays open"**
  (row 6): a negative claim about the article's own scope; at the
  capsule's own date the review has begun and the launch has not, so
  the negative holds. PASS.
- **D4 — "the programme has published a status, not a clearance"**
  (row 6): editorial framing, not a programme outcome; consistent with
  the 001 standing rule on "reporting technical risk and anomalies
  candidly, not only successes". PASS.

## 4. Withheld-marker scan — full inventory

Scanned against the article body and the frontmatter, by family. The
gate's scanner (`/tmp/rh-launch-readiness/scan_families.mjs`) ran
outside the repository against the article file at the verdict-time
hash.

| Family                                                                                                                              | Hits | Notes                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Launcher designation (`Ariane 64`)                                                                                                  |    3 | L19 (architecture description), L46 (non-endorsement framing), L52 (closing italic disclosure). All three are the cleared designation from step 004 in the same form 004/005-launch use.                                                                                                                                                                                           |
| Real institution / operator (Arianespace, CNES, ESA, FEI STU, ArianeGroup)                                                          |    0 | None.                                                                                                                                                                                                                                                                                                                                                                              |
| Launch-facility family (Europe's Spaceport, Kourou, Guiana, Centre Spatial Guyanais, ELA-4)                                         |    0 | None — no facility named; the article does not mention the launch site, consistent with the chronology discipline that keeps the launch day banned.                                                                                                                                                                                                                                |
| Withheld launch-day forms (`17 February 2031`, `13 January 2031`, `22 November 2030`, `30 August 2030`, `11 March 2030`)            |    0 | The `13 January 2031` mention at L42 is the stack-arrival milestone already published in `milestone-2031-stack-arrival.mdx`; it is **not** a withheld launch-day form — that family is the launch-day row `:193`, which the article does not print.                                                                                                                                |
| Landing-region coordinate markers (`18° 42`, `226° 14`)                                                                             |    0 | None.                                                                                                                                                                                                                                                                                                                                                                              |
| Asteria Field / landing-design (Asteria Field, ellipse, P0, science zone, hazard, traverse)                                         |    0 | None — no surface mention, by design.                                                                                                                                                                                                                                                                                                                                              |
| Performance / cost / mass / schedule figures                                                                                        |    0 | None.                                                                                                                                                                                                                                                                                                                                                                              |
| `docs/timeline/` paths                                                                                                              |    0 | None.                                                                                                                                                                                                                                                                                                                                                                              |
| Withheld filenames (`contact-arm-scene`, `travelling-to-mars`, `af-*`)                                                              |    0 | None.                                                                                                                                                                                                                                                                                                                                                                              |
| Review-outcome language (`passed`, `failed`, `cleared`, `authorised`, `authorized`, `certified`, `approved`, `waived`, `concurred`) |    1 | L56: "**approved** it" — inside the closing italic disclosure, as part of the verbatim non-endorsement phrase "none of them has endorsed or **approved** it" — the same wording 001/002/003/004/005-launch carry. This is the same containment pattern: the term appears **inside the negation**, asserting that no real party has approved, not that the review itself has. PASS. |
| Countdown / telemetry / launch-status language                                                                                      |    0 | None.                                                                                                                                                                                                                                                                                                                                                                              |
| Real-world agency names (European Space Agency, French space agency, etc.)                                                          |    0 | None.                                                                                                                                                                                                                                                                                                                                                                              |

## 5. Plausibility

- **Article body.** 350-word heading-free body (paragraph count 7
  - closing italic note); one central readiness-review update with
    architecture context for comprehension; voice consistent with
    001/002/003/004/005-launch — short declaratives, defined terms
    ("flight stack", "ready unit", "open risks"), no acronym display, no
    marketing language, no unearned certainty.
- **Frontmatter renders.** Title 35 chars ("The launch-readiness review
  begins."), summary 143 chars, linkLabel 23 chars ("Readiness review
  update") — all within site budgets; `category`, `status`, `order`,
  `accent` all carry the established convention; `publication: draft`
  stays until the release decision is applied by the build card.
- **Internal-link inventory.** Three anchors:
  - `/#mission` (L12, the fiction-disclosure link to the homepage mission
    brief);
  - `/news/004-launch-provider/` (L39, the released architecture
    briefing);
  - `/news/milestone-2031-stack-arrival/` (L41, the released
    chronology-safe predecessor).
    All three targets are released routes on the live origin. No link to
    `/news/005-launch/` (deliberate, the capsule precedes the launched
    article in fiction).
- **No `media*` field.** The article carries no `media`, `mediaAlt`,
  `mediaLabel` or `mediaCaption`. `newsMediaIssues()` has nothing to
  require. The asset manifest records the text-only-no-new-imagery
  decision and the zero-candidate count; no `image_generate` call was
  made; no ComfyUI server was started; `docs/vehicles/ariane/canonical.png`
  was **not** reused, imported, renamed, or relabelled as a
  readiness-review image anywhere in this package.
- **Date-scoped language.** The article uses date-scoped wording ("On
  11 February 2031, the team began a structured check"), so it does
  not imply an evergreen current status after its fictional record
  date. The summary and linkLabel are written in present-tense for
  search-intent reasons but pair with the article's first-paragraph
  date anchor.

## 6. Spoiler safety

Of the eight families the step-004 release record flagged (institution
/ operator / facility, launch-day forms, private calendar, withheld file
names, performance figures, coordinate markers, Asteria Field name,
review-outcome language), article 005-launch-readiness scores **0**
hits on seven. The one review-outcome hit is inside the
non-endorsement disclosure (row 4 of the §4 scanner table); the three
`Ariane 64` hits are the cleared designation. Both are
already-contained patterns from earlier published articles.

Step-006 to step-011 detail (cruise checks, landing, surface operations,
science results, end-of-life anomaly) is fully withheld — confirmed by
zero hits on the `docs/timeline/` paths, zero hits on the landing
coordinate markers, zero hits on `Asteria Field` or any surface-related
term, and zero hits on any milestone row later than `:192`.

The two-step-005 dates the article **does** name are: `:191`
(`13 January 2031`, the stack-arrival milestone, already public at
`milestone-2031-stack-arrival.mdx`) and `:192` (`11 February 2031`, this
capsule's own milestone). Both are milestone rows the step owns. The
launch-day row `:193` is absent from the body, the summary, and the
linkLabel — by chronology discipline.

## 7. Continuity verdict

`continuity clear`. The article is canonically sound (every material
claim traces to released material or to the locked milestone row the
capsule reports), chronologically safe (record date on a locked row the
table holds; no later-step date leaks; published negatives at the
earlier articles' own dates hold), plausibly framed (a generic
readiness-review description; no pass/fail claim, no authorisation, no
launch-imminent claim), and spoiler-clean (forbidden-terms scan
returned zero hits on every material family; the two patterns that hit
are the cleared designation and the verbatim non-endorsement language).
The companion review record's §"Release decision" carries the recorded
release decision; no separate human approval is required.

---

_This record is working material, not canon. Canon lives in `docs/SCENARIO.md`
and the dossiers under `docs/vehicles/`. The continuity verdict above is
this role's chronological / canonical / spoiler half of the editorial
gate's verdict; the editorial half is in
`.agents/work/reviews/milestone-2031-launch-readiness-review.md`._
