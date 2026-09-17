# Continuity: 004-launch-provider — chronology, canon, plausibility and spoiler verdict

Slug: `004-launch-provider`. Card `t_35061463` (`mars-ai-simulator-editor`), stage: merged
continuity + editorial final gate · timeline step `004-launch-provider`.
Companion record: `.agents/work/reviews/004-launch-provider.md` (review table, status `approved`
at revision 2, and the record-date assignment).

**Revision 2 (this file, 2026-09-17 ~19:45 CEST) — Verdict: `continuity clear`. The corrected
article is confirmed against released canon and may be released; the release decision is recorded
in the companion review §12.5 and on the card.** Revision 1 of this file (`13aa22ce…`, verdict
`return for revision`) returned the package for two clauses — one family, in two sentences — that
put a not-settled statement in terms of the programme's internal state rather than the public
record, where the locked scenario fixes the thing: `docs/SCENARIO.md:23` fixes the launch day, and
the release controls withhold that day's _publication_, not its fixing. The corrective card
`t_3021fd7f` (`mars-ai-simulator-writer`) applied both, and §12 below re-verifies the corrected
bytes: both clauses now speak about the public record, every other row of R1 carries over on a
byte-delta proof, chronology / canon fidelity / plausibility / spoiler safety are each clear, and
the record date was re-measured on a fresh built surface and on the live origin.

**R1 is not deleted.** Sections 1–11 stand as the record of what was returned and why; §12 states
what changed and what it supersedes. Where a line below still reads `FAIL`, `Fails`, `not applied`
or `withheld`, §12 is the current verdict on it.

## 1. Evidence boundary and what was compared

| Item                       | Value                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article under review       | `website/news/004-launch-provider.mdx` — sha256 `6d79c6e2f0fb6b9bb186e3b8244ef6055c4eca0b2960902354f8a6251fe14080` (R2 — the bytes the release decision covers), 3,999 B, 57 lines, `publication: draft` (line 5), no `media*`, no `author`, no `simulatedDate`, 578-word heading-free body. R1 reviewed `4ac5647b…` (3,991 B); the corrective `t_3021fd7f` and its re-verification are §12 |
| Released step compared     | `docs/timeline/004-launch-provider.md` `1c61b918…`, `docs/timeline/005-launch.md` `3a996027…`, `docs/timeline/README.md` `212c3366…` (release order and the "do not invent" invariant)                                                                                                                                                                                                      |
| Canon compared             | `docs/SCENARIO.md` `99206373…` — §Mission identity (`:19`, `:22`, `:23`), §Coalition, §Flight system architecture (`:122–140`), §Launch and mission dates (`:179–207`, milestone rows `:187`–`:193`), §Lifecycle budget (`:230`, `:255–258`), §Continuity and release controls (`:274–282`, landing-design withhold `:279`, real-institution rule `:281`)                                   |
| Working papers compared    | `.agents/work/briefs/004-launch-provider.md` `5f27e4c9…`, `.agents/work/briefs/004-launch-provider-canon.md` `9f827e1e…`, `.agents/work/sources/004-launch-provider.md` `85c740e8…`, `.agents/work/seo/004-launch-provider.md` `621d9d77…`, `.agents/work/assets/004-launch-provider/assets.md` `c58b9d52…`                                                                                 |
| Gate answers acted on      | `t_4d1b3041`, recorded verbatim at 18:52 CEST 2026-09-17; `.agents/work/reviews/004-launch-provider-gates.md` `3ed2fcf1…` §R3.1–§R3.3 (the cleared scope) and `.agents/work/continuity/004-launch-provider-gates.md` `e6b2b34a…`                                                                                                                                                            |
| Dossier compared           | `docs/vehicles/ariane/ariane-64.md` `3ef87d9d…`, 31,797 B (the launcher dossier the step documents; moved from `docs/vehicle/ariane-64.md` `b1b1c01c…` by the mid-run split recorded in §11, content unchanged apart from its own path references)                                                                                                                                          |
| Published record compared  | `website/news/001-project-announcement.mdx` `923a12d8…`, `002-payload-selection.mdx` `7b69bd7f…`, `003-vehicle-design.mdx` `51f2ee69…`, plus the live origin (table in §7)                                                                                                                                                                                                                  |
| Surface machinery compared | `website/src/content.config.ts` `f6017306…`, `src/lib/media.ts` `9ecc54c7…`, `src/lib/simulated-date.ts` `5c79e9d8…`, `src/lib/publication.ts` `d21669b0…`, `src/features/news/media.ts` `2306bede…`, `ArticleView.astro` `d75feca1…`, `NewsCard.astro` `4b2d402a…`, `src/features/progress/steps.ts` `1236ead7…`, `scripts/guards.mjs` `3c95f223…` (§11)                                   |
| Shared tree read at        | `HEAD` = `origin/main` = `ad8f5acde5a121d607ac35d1abadafe25afebe3a`; nothing reset, checked out or stashed; the shared checkout was **not** built and no `website/` path was written. The tree's working directory did move during the run — a path-only `docs/vehicle/` → `docs/vehicles/` split — which is recorded, re-verified and reconciled in §11                                    |
| Live surface               | In-page fetch on the deployment origin, SHA-256 over the response bytes with `crypto.subtle`, 2026-09-17 ~19:22 CEST (§7)                                                                                                                                                                                                                                                                   |
| Built-surface measurement  | A throwaway copy **outside** the repository (`/tmp/rh-004-gate/`, site plus a `docs/` symlink and linked packages, `/tmp/rh-004-gate/website/dist/`), two builds: A (flip only) and B (flip + `simulatedDate: 2030-03-11`) (§7)                                                                                                                                                             |
| All input hashes re-taken  | Immediately before this verdict, ~19:29 CEST; every hash identical to the read cited above                                                                                                                                                                                                                                                                                                  |

## 2. Chronology

- **Release order.** Step 004 is released by the human story owner's recorded answer on
  `t_4d1b3041` (004-C: "Step 004 release order advance: approved"). The article is the
  step's public surface; it stays `publication: draft` until the editorial release decision
  is recorded and applied, so nothing here advances the order by itself.
- **The step's own boundary.** `docs/timeline/004-launch-provider.md` is a decision
  announcement: "The announcement is a decision, not a launch-date promise". The article
  says exactly that ("This is a decision about a design, not a promise about a date"), and
  the launch day stays step 005's (`docs/timeline/005-launch.md`, whose private situation
  begins "After integration and final reviews").
- **Progression.** The article reports a decision that follows step 003 (design freeze) and
  precedes the integration and readiness work step 005 sits behind — the order the released
  record carries. No date, count, sol count, campaign event or calendar row appears in the
  body: the only date-bearing token is `2031` (the window article 001 released), and the
  only numerals are `6` (six-wheel), `64` (the launcher designation), `001`, `003`, `01`/`04`
  (the house category form) and `4` (`order`).
- **Order-sensitivity of already-published copy (ledger C6).** Satisfied in form and
  verified here: `/news/002-payload-selection/` `:104` ("no landing site has been chosen
  publicly", `:105–106` "No launch or landing date is being stated") and
  `/news/003-vehicle-design/` `:70` ("no launch date has been stated") are present-tense
  negatives, and both articles now carry their own record dates (002 → 2027-03-19,
  003 → 2029-07-13), so each reads as a statement about its own moment. The step-004 article
  must carry a record date **after** 003's; §9 assigns one.
- **The flip's own order-sensitivity.** The article's own negatives become stale at step
  005 (launch), and they are written to be false-proof against a _later_ step only by
  carrying a date: they are time-bound by the record date §9 assigns, and step 005 must
  carry a later one. Recorded, not a defect of this package.

## 3. Canon consistency — material claims

Every material claim in the body, with the released source it traces to. "Architecture
level" means a fact from `docs/SCENARIO.md` §Flight system that step 004's allowed public
angle covers (the step's private situation names "a cruise stage, communications plan, and
entry/descent/landing concept at an appropriate high level"); the source pack's §2.4
records that canon as option-agnostic and publishable at this step.

| #  | Claim (article, by paragraph)                                                                                                                                                                                                                                                             | Source                                                                                                                        | Verdict                                                                                                                                                        |
| -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | "Red Horizon is a fictional, AI-assisted Mars exploration programme"                                                                                                                                                                                                                      | Source pack R-1 (article 001:22); the article links `/#mission`                                                               | PASS — disclosure in the first sentence, as 001/002/003 do                                                                                                     |
| 2  | "it has now decided how Red Horizon One will leave Earth"; the coalition "has selected a delivery architecture … a launcher …, a cruise stage …, a communications plan, and a high-level concept for entry, descent, and landing"                                                         | `docs/timeline/004-launch-provider.md` §Private situation; brief §Allowed angle; source pack ARCH-5                           | PASS — the step's own event, at the level the step releases                                                                                                    |
| 3  | "This is a decision about a design, not a promise about a date"                                                                                                                                                                                                                           | Step 004 §Constraints ("The announcement is a decision, not a launch-date promise")                                           | PASS                                                                                                                                                           |
| 4  | **"No launch day or time has been set"**                                                                                                                                                                                                                                                  | No released source; contradicted by `docs/SCENARIO.md:23` and `:193`                                                          | **FAIL — C1** (internal state; §4)                                                                                                                             |
| 5  | "no part of the flight stack has been integrated with a launcher or delivered to a launch site"                                                                                                                                                                                           | Timeline order: integration precedes step 005; campaign arrival is private calendar `:191`                                    | PASS with note — the negation of the step's forbidden positive; canon does not contradict it at the assigned record date (§9)                                  |
| 6  | "The launch vehicle is Ariane 64, the four-booster variant of the Ariane 6 launcher family"                                                                                                                                                                                               | Gate 004-A (Option A, verbatim); `docs/SCENARIO.md:22`, `:124`; source pack sources 5 and 6                                   | PASS — the designation Gate 004-A cleared, with the real configuration it carries                                                                              |
| 7  | "Ariane 64 is a real vehicle; naming it here says which launcher this fictional mission is planned around, and nothing more. Its record belongs to the organisations that build and operate it … no real agency, launcher operator, or launch facility is a partner … or has endorsed it" | Canon proposal §Option A; accurate/non-endorsing rules 1–2; `docs/SCENARIO.md:3–6`, `:281`                                    | PASS — non-endorsing, and no institution, operator or facility name (Gate 004-B fail-closed default respected)                                                 |
| 8  | "its interface to the launcher … an injection and payload-adapter segment … the adapter is the mechanical and electrical interface … injection is the point at which the stack separates and is placed on a transfer trajectory"                                                          | `docs/SCENARIO.md:124`; `docs/vehicles/ariane/ariane-64.md` §Interface; source pack source 7                                  | PASS with note — the "electrical" qualifier is the only term not quoted to a section of source 7; definitional, figure-free, non-endorsing, no change required |
| 9  | "a solar-powered cruise stage for navigation, thermal control, and communications with Earth"                                                                                                                                                                                             | `docs/SCENARIO.md:125`; ARCH-1                                                                                                | PASS                                                                                                                                                           |
| 10 | "a lander platform that performs entry, descent, and landing"; "RH-01 Pathfinder, the six-wheel rover … carries to the surface"                                                                                                                                                           | `docs/SCENARIO.md:126–127`; published article 003 (linked)                                                                    | PASS                                                                                                                                                           |
| 11 | "enters the Martian atmosphere, deploys a supersonic parachute, uses terrain-relative navigation …, finishes the descent on a throttleable engine stage"                                                                                                                                  | `docs/SCENARIO.md:130–132`; ARCH-2                                                                                            | PASS — high level, exactly the step's EDL concept; no landing-design fact, geometry or unit identifier                                                         |
| 12 | "stays where it lands and becomes the mission's relay"; "the rover talks to the platform over a short-range radio link"; "a steerable X-band downlink"; "its own low-rate direct-to-Earth link for health reports and commands"                                                           | `docs/SCENARIO.md:133–138`; ARCH-3                                                                                            | PASS — the communications plan the step releases, in plain language (UHF rendered as "short-range radio link")                                                 |
| 13 | "no dedicated programme orbiter, so the architecture brings its own relay rather than borrowing one"                                                                                                                                                                                      | `docs/SCENARIO.md:134`, `:139–140`                                                                                            | PASS with note — canon's emergency-reception-only allowance for non-programme orbiters is not contradicted, and no real orbiter is named                       |
| 14 | "The whole flight stack travels on one launch, so the architecture is built around what a single vehicle can carry … rather than around spacecraft meeting in Mars orbit"                                                                                                                 | **Derived**: one launcher element (`:124`), a single launch-service line (`:230`), a single stack mass at separation (`:129`) | PASS with note — traceable by strong implication, and it is the architecture the step settles; see §5                                                          |
| 15 | "the science happens on the surface, so the job of getting to Mars and the job of getting down to it sit in separate elements"                                                                                                                                                            | Article 001 (science purpose, landed mission) + `docs/SCENARIO.md:124–127`                                                    | PASS                                                                                                                                                           |
| 16 | "The mission is uncrewed, so nothing in the architecture carries or supports people"                                                                                                                                                                                                      | `docs/SCENARIO.md:19`, `:28–30`; source pack R-2                                                                              | PASS — released in 001, restated as an architecture boundary                                                                                                   |
| 17 | "The schedule frame remains the 2031 launch window set out in the programme announcement"                                                                                                                                                                                                 | Source pack R-5 (article 001 summary and `:66`); the article links `/news/001-project-announcement/`                          | PASS — the window only, never a day                                                                                                                            |
| 18 | **"it has not been narrowed to a day"**                                                                                                                                                                                                                                                   | No released source; contradicted by `docs/SCENARIO.md:23`, `:175–177`                                                         | **FAIL — C2** (same family as C1; §4)                                                                                                                          |
| 19 | "What sits between this decision and the flight is integration and readiness work: bringing the elements together into one stack, testing …, and closing the reviews …"                                                                                                                   | Brief §Allowed angle item 3; step 004 §Allowed public angle                                                                   | PASS — status, not a date; and this is what makes the milestone row in §9 the compatible one                                                                   |
| 20 | "The programme has published a decision, not a countdown"                                                                                                                                                                                                                                 | Step 004 §Constraints                                                                                                         | PASS                                                                                                                                                           |
| 21 | Closing note: "Ariane 64 is a real launcher designation, cited here to describe the architecture this fictional mission is planned around; no real agency, launcher operator, or launch facility is a partner in Red Horizon, and none of them has endorsed or approved it"               | Accurate/non-endorsing rules 1–2; `docs/SCENARIO.md:281`                                                                      | PASS                                                                                                                                                           |
| 22 | Frontmatter `summary` (153 chars): "…an Ariane 64 launcher, a cruise stage for the transfer to Mars, and the integration work still ahead"                                                                                                                                                | As rows 2, 6, 19                                                                                                              | PASS — no date, no figure, no institution name                                                                                                                 |
| 23 | Frontmatter `category` / `status` / `linkLabel` / `order` / `accent`                                                                                                                                                                                                                      | House form of 001–003 (each `category` carries its step number; `status` names the step's own state)                          | PASS                                                                                                                                                           |

**Zero** performance, mass, cost or specification figures appear anywhere in the article
(no 4,250 kg ceiling, no €180 M line, no €2.10 B frame). **Zero** landing-design facts, no
ellipse geometry, no P0 touchdown zone, no science-zone plan, no hazard inventory, no
traverse logic, no `AF-*` identifier. **Zero** Asteria Field material. **Zero** step 005–011
fact and no private calendar row. **Zero** institution, operator or facility name.

## 4. The two required changes — owner `mars-ai-simulator-writer` (R1; both applied by `t_3021fd7f` and re-judged in §12.3)

Both are the same defect in two sentences: a not-settled statement written as the
programme's internal state where the published record uses the public-record form. Neither
needs canon, a gate answer or a `docs/SCENARIO.md` change. Both are wording-only, in
`website/news/004-launch-provider.mdx`.

### C1 (blocking) — "No launch day or time has been set" (paragraph 1, line 16)

- **Not traceable.** No released source states it. Source pack R-5 records only that
  article 001 released "the **2031 launch window** (the launch window alone — no launch
  day, time, or date)", and `docs/timeline/004-launch-provider.md` releases no date at all.
- **Contradicted by locked canon.** `docs/SCENARIO.md:23` fixes `Launch = 17 February 2031`,
  and the calendar row `:193` fixes it as a mission date; `:176–177` says the canonical day
  is not changed by later mission design (only hours and targeting parameters are refined).
  The release controls withhold that day's **publication** (`:278`), not its fixing. Read as
  a statement of internal state, the clause is false rather than cautious.
- **A regression against published copy.** The published articles use public-record verbs
  for exactly this family: 002 `:104` ("no landing site has been chosen **publicly**"),
  002 `:106` ("No launch or landing date **is being stated**"), 003 `:70` ("no launch date
  has been **stated**"). The newest article must not claim more than the two before it.
- **Required:** reword so the clause speaks about the public record, not the programme's
  internal schedule — preferred: "No launch day or time has been announced." (Alternatives
  in the same family: "…has been stated", matching 002 and 003 verbatim in form.) The
  replacement must assert nothing beyond the public record, and must not add a date.

### C2 (required in the same pass) — "it has not been narrowed to a day" (paragraph 6, line 48)

- The same defect: the clause's subject is the schedule frame's internal state, and canon
  fixes the day inside the window.
- It is also a regression against the sentence it adapts: 002 `:105–106` writes "The
  schedule frame remains the 2031 launch window set out in the programme announcement. No
  launch or landing date is being stated." The draft keeps the first half and replaces the
  qualified second half with an unqualified negative.
- **Required:** reword to the public-record form — for example "…and no day within it has
  been announced." The step bars the article from announcing a day, so the replacement must
  assert nothing more than that.

### Correction needed in the same pass (not a defect of this article's wording)

Both clauses are time-bound by the record date this card assigns (§9). The corrected
sentences must still be **true on 11 March 2030**, which they are under the public-record
form, and which is the constraint §9 records.

## 5. Judged, not required — items this record settles so a later pass does not re-litigate them

| #  | Item                                                                                          | Judgement                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| J1 | "The whole flight stack travels on one launch" — a derivation, not a released sentence        | **Pass.** Canon carries exactly one launcher element (`:124`), one launch-service budget line (`:230`) and one stack mass at separation (`:129`); no second launch exists anywhere in the scenario. The claim is the architecture the step decides, not a later-step event                                                                                                                                                             |
| J2 | The "two facts … shape the choice" framing                                                    | **Pass with note.** 004-A supplied no rationale (Option A = the locked canon stands), so this is architecture-level reasoning derived from canon structure. The brief's allowed angle ("why the architecture was chosen, at the level the canon settles") permits it; it asserts no human-stated reason and no fact about the world                                                                                                    |
| J3 | "no dedicated programme orbiter … rather than borrowing one"                                  | **Pass.** `docs/SCENARIO.md:134` states the absence; `:139–140` allows non-programme orbiters emergency reception only, which the sentence does not contradict and does not name                                                                                                                                                                                                                                                       |
| J4 | "the adapter is the mechanical and electrical interface"                                      | **Pass, no change required.** The weakest section-level trace in the article (source pack source 7, cited by section); definitional, figure-free, and non-endorsing                                                                                                                                                                                                                                                                    |
| J5 | Frontmatter `status: Architecture selected` / `category: Launch architecture 04`              | **Pass.** House form; both restate the step's own state, not a date or a readiness claim                                                                                                                                                                                                                                                                                                                                               |
| J6 | The draft card's instruction to leave `title` unset if 004-D is unrecorded                    | **Resolved as unimplementable and routed.** `website/src/content.config.ts:16` declares `title: z.string()` — required, no default. The writer drafted a working title, which is 004-D's fail-closed default; recorded here, owner of the template: `mars-ai-simulator-planner`                                                                                                                                                        |
| J7 | The draft card's "copy containment verbatim into the article body, not as checklist-only"     | **Resolved as honoured in the prose, not printed.** Printing the checklist would put meta-prose and withheld-topic names into public copy; the writer honoured the containment in the body instead. Correct reading; the card's wording is ambiguous, owner `mars-ai-simulator-planner`                                                                                                                                                |
| J8 | The draft card's requested frontmatter `timelineStep`                                         | **Omitted correctly.** The news schema declares no such key; zod drops unknown keys, so the field would be dead. The step is carried by the card and this record instead                                                                                                                                                                                                                                                               |
| J9 | The visuals candidate's booster-pair geometry ("staggered" vs the dossier's "top-and-bottom") | **Not this package's gate, and not a defect.** The plate is a candidate with no media key and no `docs/` file, so it is outside the release scope (§7). A vision read of small hardware detail is unreliable, and nothing on a public surface asserts the arrangement. Editorial verdict for the human's selection: acceptable as illustrative artwork if it keeps the alt text's own description; recorded on `t_6fde5f04`'s manifest |

## 6. Required containment — copied verbatim from the card body, each item resolved

> - No launch day, time, or date beyond the 2031 launch window already released by article 001.
> - No statement that the vehicle is in transit, integrated at the pad, or flight-ready.
> - No landing site, no Mars surface imagery, no Asteria Field material beyond what article 001 released. Landing-design facts are withheld (`docs/SCENARIO.md:279`): no ellipse geometry, no P0 touchdown zone, no science-zone plan, no hazard inventory, no traverse logic, no AF-* unit identifiers.
> - No performance, mass, cost, or specification figure that is not approved canon.
> - No real institution or provider named without Gate 004-B's verbatim approval.
> - No step 005–011 fact, no private-calendar fact, no unreleased detail from `docs/timeline/`.

| Item                                                           | State                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No launch day, time, or date beyond the 2031 window            | **PASS at R2** — C1/C2 corrected to the public-record form (§12.3; at R1 this row read "fails as worded, on the state verb"). As _data_, the article carries no date: the only date-bearing token is `2031`, and no calendar row, day or time appears in the file. The failure is the claim about what has been set, not a leaked date |
| No in-transit / at-the-pad / flight-ready statement            | PASS — asserted in the negative ("no part of the flight stack has been integrated with a launcher or delivered to a launch site"); the words _in transit_, _pad_ and _flight-ready_ appear nowhere, and the closing paragraph frames the status as a decision, not a countdown (§3 rows 5, 19, 20)                                     |
| No landing site, Mars surface imagery, Asteria material        | PASS — no site, region, coordinate, ellipse, P0, science-zone, hazard, traverse or `AF-*` token; "Martian atmosphere" is the EDL concept the brief allows; no `media*` field, so no image, alt text or caption exists to carry one                                                                                                     |
| No unapproved performance / mass / cost / specification figure | PASS — no figure at all; the 4,250 kg ceiling and the €180 M planning allowance are deliberately unstated                                                                                                                                                                                                                              |
| No real institution or provider without 004-B approval         | PASS — no agency, operating company, launch-site operator or launch-complex name in the file, its frontmatter, or the strings the page renders; the one real token is the launch-vehicle **designation** Gate 004-A cleared, named with its own non-endorsement sentence and the real record separated from the programme's interface  |
| No step 005–011 fact, no private-calendar fact                 | PASS — the architecture facts are the option-agnostic rows the source pack §2.4 marks publishable at step 004; no campaign event, launch readiness statement or calendar row appears                                                                                                                                                   |

## 7. Plausibility and spoiler safety — measured on the surfaces a reader reaches

- **Plausibility.** The architecture described is coherent with the mission canon: one
  launcher, one cruise stage, a stationary powered landing platform used as the relay, the
  rover deployed from it, and no programme orbiter — each element of the stack is accounted
  for and each job is assigned to exactly one element. No mass, budget, performance or
  schedule figure is asserted, so no number can conflict with a later release. The one
  plausibility limit the step carries — that the announcement is a decision, not a launch
  readiness statement — is respected.
- **Live origin** (deployment origin, in-page fetch, SHA-256 over the response bytes with
  `crypto.subtle`, 2026-09-17 ~19:22 CEST; token families reported by hit count only):

| Route                             | Result                                                                                                                                                                                                                          | Withheld-token hits  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `/`                               | 200, 17,792 B, `ef1466f4aa9789ef…` — three record-date lines, no 004 link                                                                                                                                                       | 0                    |
| `/news/`                          | 200, 11,352 B, `bcbb0e8038c71158…` — cards for 001–003 only                                                                                                                                                                     | 0                    |
| `/news/001-project-announcement/` | 200, 11,882 B, `237572a89052bb30…`                                                                                                                                                                                              | 0                    |
| `/news/002-payload-selection/`    | 200, 14,265 B, `a8eb93c726ab1e9a…` — 9 institution-family hits, all the **published** article's own "Sources and further reading" citations of real agencies as precedents, inside its explicit "they are not partners" framing | 0 (all pre-existing) |
| `/news/003-vehicle-design/`       | 200, 11,380 B, `4f1277c1dd2b01b2…`                                                                                                                                                                                              | 0                    |
| `/news/004-launch-provider/`      | **404**, 0 bytes                                                                                                                                                                                                                | 0                    |
| `/wiki/`                          | 200, 4,599 B, `821a2d846a2ea5b2…` — empty index                                                                                                                                                                                 | 0                    |
| `/wiki/vehicle/`                  | **404**                                                                                                                                                                                                                         | 0                    |

Families scanned: launcher designation, operating company, institution, launch facility,
the withheld launch-day forms, and the two landing-region coordinate markers. Zero hits on
every route (`ariane` included, which is why the live record is the pre-004 state). No
route carries a machine-readable date token (`datePublished`, `dateModified`, `<time>`).

- **Built surface, throwaway copy outside the repository.** `/tmp/rh-004-gate/`, the site's
  own sources with a `docs/` symlink and linked packages, built with the project's own CLI.
  **Build A** (flip only, `publication: published`, no `simulatedDate`) and **Build B**
  (flip + `simulatedDate: 2030-03-11`), both green:

| Measurement                                     | Build A (control)                              | Build B (the decision)                      |
| ----------------------------------------------- | ---------------------------------------------- | ------------------------------------------- |
| `/news/004-launch-provider/` generated          | yes (9 pages)                                  | yes (9 pages)                               |
| Date line on the article page                   | **none**                                       | `Simulated record date · 11 March 2030`, ×1 |
| Date line on `/` and `/news/`                   | 001–003 only                                   | 001–003 plus the 004 value                  |
| Raw ISO value `2030-03-11` in the rendered HTML | 0                                              | 0                                           |
| Machine-readable date tokens on the page        | 0                                              | 0                                           |
| Article media (figure / plate)                  | none — no `media` field                        | none — no `media` field                     |
| News card cell                                  | amber placeholder, number `04`, no `<img>`     | amber placeholder, number `04`, no `<img>`  |
| `check-dist` (postbuild guard)                  | green                                          | green                                       |
| Withheld markers over the whole `dist/`         | 0                                              | 0                                           |
| Institution / facility family hits over `dist/` | 9 (article 002's pre-existing sources section) | 9 (same)                                    |

The control's value: build A renders **no** date line while the two cards carry the three
published values, and build B renders the assigned value in exactly one line on the page
and one on each card — so the line is driven by the frontmatter field, not by the template.
The shared checkout was never built; `website/dist/` and every other `website/` path are
untouched (its last build, 19:02, lists no 004 route and reports zero guard offences when
the guard module is imported read-only from a script outside the repository).

- **Media.** The step's plate is a **candidate only**: `t_6fde5f04` produced
  `01-ariane64-engineering-reference` (SHA-256 `cb09992c…`) and explicitly withheld it —
  no `docs/` file, no `media` key (`newsMediaKeys` holds four keys, none a launcher), no
  frontmatter string. The article therefore releases with the amber placeholder on the card
  and no lead figure, measured above. Nothing in this release scope is imagery.
- **No spoiler.** No event after the step becomes public: no launch day, no landing site,
  no Mars surface material, no campaign event, no later-step fact, and no private-calendar
  row. The withheld coordinate markers are absent from every served byte and every built
  byte, verified in fact rather than on paper.

## 8. The public record this verdict leaves untouched

- `docs/SCENARIO.md` `99206373…` and `docs/timeline/` were read, never edited. Canon is
  cited, not amended (004-E was recorded as not applicable).
- The article file is unchanged by this gate: sha256 `4ac5647b…` at first read and at
  verdict time. The only files this card writes are this record and its companion review.
- No commit, no push, no deploy, no `publication:` flip, no hosting or credential use, no
  media upload.

## 9. The record date — assigned at R1, re-verified at R2, applied by the build card

`simulatedDate: 2030-03-11`, drawn from the locked milestone line
**`docs/SCENARIO.md:188` — "11 March 2030 | RH-01 flight-model assembly begins"** — and
re-verified on the corrected bytes in §12.4.

Why that row, and how the card body's "announcement date, not the calendar row" instruction
resolves against the milestone table:

- **The table holds no row for the decision itself.** Step 004 covers a launch-architecture
  and launch-provider decision; no milestone row names such an event (`:179–:207`). The
  instruction therefore cannot be honoured as a literal row pick, and the value is chosen by
  matching the row to the state the article claims — the rule the role's own practice
  records.
- **The row's state matches the article's claims, and the others do not.** The article says
  integration, testing and readiness reviews are what remains before flight, and that no
  part of the stack has been integrated with a launcher or delivered to a launch site. On
  11 March 2030 all of that is still ahead: flight-model assembly is beginning, the test
  campaign is not under way, qualification is not complete, the stack is not at a launch
  site (`:191`, 13 January 2031) and no readiness review has been held (`:192`). `:189`,
  `:190`, `:191` and `:192` each name an event that would put the article's own framing in
  the past; `:193` is step 005's launch row and is withheld.
- **Order.** After article 003's anchor (`:187`, CDR, carried as 2029-07-13) and before step
  005's row: 2026-10-12 < 2027-03-19 < 2029-07-13 < **2030-03-11** < 2031-02-17.
- **Containment.** The value is not readable as a launch, landing or other withheld mission
  date (those rows are 2031-02-17 and 2031-09-16), it states no event beyond the step, and
  the public surface shows it only as `Simulated record date · 11 March 2030` under the
  in-fiction label — measured in build B above, with the row's own text nowhere on the
  surface. It contradicts no published sentence: it is later than both dated negatives
  (§2), and the article's own corrected negatives must hold on it (C1/C2, §4).
- **Status.** **Assigned, not applied and not released.** No `website/` frontmatter was
  written by this card; the release card applies this line together with the
  `publication: published` flip in one change, and re-verifies it on the corrected bytes.
  This value is a **lower bound** on step 005's record date, whose own row the record still
  withholds.

## 10. What this verdict does and does not cover

- It **does not** approve the package **at R1**: two clauses failed (§4) and no release decision
  was recorded then. **R2 (§12) does approve it**: the corrective landed, the corrected bytes
  were re-judged, and the release decision is recorded in the companion review §12.5.
- It **does not** confirm any real-provider wording: Gate 004-B was recorded in its
  "not required — no real provider or institution named" form, so the fail-closed default
  binds, and the six accurate / non-endorsing rules are applied to the exact public
  sentences in the companion review.
- It **does not** decide the canon option, the release order, the public title or byline —
  all recorded by the human story owner on `t_4d1b3041`.
- It **does not** clear the launch-vehicle wiki page or the dossier: each needs its own
  release decision on its own card.
- It **does not** relax any standing withhold — the landing-design list (`:279`), the
  real-institution review rule (`:281`), and the no-private-timeline-in-public rule bind
  independently.

## 11. Mid-run movement — a `docs/vehicle/` → `docs/vehicles/` split, re-verified before the verdict

Between the run's first read (19:14 CEST) and the verdict (~19:35 CEST) the shared checkout's
working tree changed under this gate: `docs/vehicle/` was split into one folder per vehicle
(`docs/vehicles/pathfinder/` for the RH-01 dossier and its plates, `docs/vehicles/ariane/`
for the launcher dossier), with `website/scripts/guards.mjs`, `website/src/lib/assets.ts`,
`website/src/features/news/media.ts`, `website/test/guards.test.mjs`, `docs/INSTRUCTIONS.md`,
`docs/README.md`, `README.md` and `docs/GENERAL.md` updated to the new paths. `HEAD` and
`origin/main` did not move (`ad8f5ac`), the renames are staged and uncommitted, and no card
was `running` other than this one at every probe — so the change arrived from outside the
dispatcher and is recorded here as an observation, not attributed to a card.

What that movement does and does not touch, measured at ~19:35 CEST:

| Input                                                                                                                                           | State                                                                                                                                                                                                                                       | Effect on this verdict                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `website/news/004-launch-provider.mdx`                                                                                                          | **Unchanged** — `4ac5647b…`, 3,991 B                                                                                                                                                                                                        | None. The verdict judges the same bytes, which is what lets it stand                                                                                                                                                                             |
| `docs/SCENARIO.md`, `docs/timeline/004…`, `docs/timeline/005…`                                                                                  | Unchanged — `99206373…`, `1c61b918…`, `3a996027…`                                                                                                                                                                                           | None — canon and the release order are identical to what §2–§3 compare                                                                                                                                                                           |
| `docs/vehicles/ariane/ariane-64.md`                                                                                                             | Moved from `docs/vehicle/ariane-64.md`; now `3ef87d9d…`, 31,797 B (was `b1b1c01c…`, 31,761 B)                                                                                                                                               | None on the claims. Re-read at the new path: the four-booster configuration, the top-and-bottom arrangement, the interface wording and the "must never be said to be" list are unchanged; the delta is its own path references (J9 still stands) |
| `website/src/lib/media.ts`                                                                                                                      | **Unchanged** — `9ecc54c7…`; `newsMediaKeys` still the four published keys, no launcher key                                                                                                                                                 | None — "no media key exists, so no plate is in this release scope" still holds                                                                                                                                                                   |
| `website/src/lib/simulated-date.ts`, `content.config.ts`, `publication.ts`, `ArticleView.astro`, `NewsCard.astro`, `features/progress/steps.ts` | Unchanged — `5c79e9d8…`, `f6017306…`, `d21669b0…`, `d75feca1…`, `4b2d402a…`, `1236ead7…`                                                                                                                                                    | None — the record-date surface and the route predicate are the measured ones                                                                                                                                                                     |
| `website/scripts/guards.mjs`                                                                                                                    | Path-only change — now `3c95f223…` (was `fd5a9e43…`); `gatedDirectoryNames = ['timeline']`, `gatedFilePathSegments` = the one withheld file at `docs/vehicles/pathfinder/contact-arm-scene.png`, `gatedTextMarkers = ['18° 42', '226° 14']` | None — the withhold set is unchanged in substance; the copied hash in §1 and the review §5 are updated to the new one                                                                                                                            |
| `docs/INSTRUCTIONS.md`                                                                                                                          | Now `1a2d8bf8…` (was `639f62d3…`); the delta is the docs-map path only                                                                                                                                                                      | None — the simulated-record-date rule at `:74–78` is verbatim what §9 applies                                                                                                                                                                    |
| Live origin and shared `dist/`                                                                                                                  | Unmoved: the live surface is `origin/main` (`ad8f5ac`), and `dist/` is the 19:02 build of that revision                                                                                                                                     | None — both measure the pre-split state, which is what the fail-closed check needs                                                                                                                                                               |

Two consequences worth naming for the next reader, both routed rather than gated:

1. **The withheld file moved, its protection did not.** The per-file rule in
   `guards.mjs` follows the new path, `docs/vehicles/pathfinder/contact-arm-scene.png`, and
   the marker set is unchanged. Any record still citing `docs/vehicle/contact-arm-scene.png`
   describes the pre-split revision.
2. **Hotspot.** `docs/vehicle/` → `docs/vehicles/` is an uncarded working-tree refactor that
   touches `website/scripts/guards.mjs`, `website/src/lib/assets.ts` and
   `website/src/features/news/media.ts` — the same files the step-004 chain's dev card is
   scoped to touch. The dev card must stage only its own paths (its body already forbids a
   blanket `git add -A`), and whoever owns the split must land it with its own build proof.
   Flagged on this card's thread with the hash measured here.

## 12. Revision 2 — the corrective re-verified; verdict `continuity clear` on the released bytes

Second pass of this gate, 2026-09-17 ~19:33–19:52 CEST. Trigger: corrective card `t_3021fd7f`
(`mars-ai-simulator-writer`) completed with both required clauses corrected. This pass re-hashed
every input, rebuilt the earlier bytes itself, re-judged the two clauses, re-verified the record
date on a fresh built surface and measured the live origin. The only files this pass writes are
this record and its companion review; the shared checkout was **not** built and no `website/` path,
canon file or other worker's artifact was touched.

### 12.1 Revision history

| Revision | Article sha256                                                                   | Bytes | Verdict                | Where it lives                                           |
| -------- | -------------------------------------------------------------------------------- | ----- | ---------------------- | -------------------------------------------------------- |
| R1       | `4ac5647b…` (`4ac5647bc8695e81100953c136501a1d7a10ba7ebaf1cb3e75f473fbdab18f33`) | 3,991 | `return for revision`  | this record `13aa22ce…`, kept above as §1–§11            |
| R2       | `6d79c6e2f0fb6b9bb186e3b8244ef6055c4eca0b2960902354f8a6251fe14080`               | 3,999 | **`continuity clear`** | this file, this section (hash of R2 in the card handoff) |

R2 supersedes these items of R1 — the verdict paragraph, the §1 article row, §3 rows 4 and 18
(now PASS, §12.3), §4 (both clauses applied), §6 containment row 1, §9's "not applied" status, and
§10's first bullet. Every other item of R1 stands re-confirmed, and the rows that passed at R1
carry over on the byte-delta proof in §12.2 rather than on a fresh reading.

### 12.2 The corrective, re-verified from the bytes — two independent reconstructions

The corrective card's own revert proof was **not** taken on trust. Both reconstructions below were
rebuilt by this pass, in a scratch script outside the repository, and both recover the R1 hash
`4ac5647b…` exactly:

| Proof | What was done                                                                                                                                                                                                          | Result                                                                               |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| A     | Reverse-applied the two claimed clause substitutions to the corrected file — including the line-break the longer C1 clause reflows                                                                                     | `4ac5647bc8695e81100953c136501a1d7a10ba7ebaf1cb3e75f473fbdab18f33` (3,991 B) — exact |
| B     | Independent: took R1's own throwaway build copy of the article (`/tmp/rh-004-gate/website/news/004-launch-provider.mdx`, `5b85f49e…`, 4,021 B = the R1 bytes + the flip + the date line), undid that frontmatter delta | the same `4ac5647b…` (3,991 B) — exact                                               |

The diff is exactly two hunks, and nothing else moved: line 16 (C1) and line 48 (C2), plus line 17
— which changes by whitespace only, because the longer C1 clause pushes the word "the" across the
line break (the file stays 57 lines, and every line's content outside those three is byte-identical
to R1, asserted in the script). The byte count moves 3,991 → 3,999, and the word count 579 → 578.
_Pass-2 note for a later reader:_ a reverse-apply that keeps the corrected line break re-derives
3,991 bytes but a different hash — the reflow must be restored too, which is why proof B exists.

### 12.3 The two clauses, re-judged against locked canon

| #  | Clause as corrected (R2)                                              | Judgement                                                                                                                                                                                                                                                                                                                                                                                                               |
| -- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C1 | "No launch day or time has been **announced**" (paragraph 1, line 16) | **PASS.** It now speaks about the public record, which is exactly what the release controls withhold (`docs/SCENARIO.md:278` withholds that day's publication, not its fixing at `:23` / `:193`), and it matches the published form — 002 `:106` "No launch or landing date **is being stated**", 003 `:70` "no launch date has been **stated**". The clause asserts nothing beyond the public record and adds no date. |
| C2 | "and **no day within it has been announced**" (paragraph 6, line 48)  | **PASS.** Same test: the schedule frame is dated to the public record, and the sentence now carries the qualifier its 002 model (`:105–106`) carries. No date, no day, no time is asserted anywhere in the article.                                                                                                                                                                                                     |

Both corrections are wording-only: no canon line, gate answer or step file changed, and no claim
was added. Both are also still **true on 11 March 2030** (§12.4), which is the compatibility
constraint R1 §4 set for the corrective. Every other claim row of §3 and every containment item of
§6 was carried over on the §12.2 byte-delta proof, and the fresh token scan on the corrected bytes
agrees with R1: **0** institution / operator / facility hits, **0** landing-region coordinate
markers, **0** Asteria Field material, **0** performance / mass / cost figure, **0** step 005–011
token, **0** occurrence of either defect phrase; the only date-bearing token remains `2031`, and
the phrase "launch day" occurs once — inside the corrected negative sentence itself.

### 12.4 The record date, re-verified on a fresh built surface and on the live origin

**Value unchanged: `simulatedDate: 2030-03-11`**, milestone line **`docs/SCENARIO.md:188` — "11 March
2030 | RH-01 flight-model assembly begins"**. The row choice, the timeline order
(2026-10-12 < 2027-03-19 < 2029-07-13 < **2030-03-11** < 2031-02-17) and the containment reasoning
are R1 §9's and were re-read, not re-litigated; the corrected clauses keep them valid (§12.3). What
this pass re-_measured_ is the surface the value lands on:

| Measurement (throwaway copy `/tmp/rh-004-gate2`, fresh copy of the current post-split tree, `docs/` symlinked, 334 linked `node_modules` entries, built with the project's own CLI) | Build A — flip only (red-first control)                                     | Build B — flip + `simulatedDate: 2030-03-11`                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Build / guard                                                                                                                                                                       | 9 pages, `check-dist` green                                                 | 9 pages, `check-dist` green                                                          |
| Result at R1                                                                                                                                                                        | **Derived and green**, but verified on a copy made before the `docs/` split | **The released surface**                                                             |
| Article route `/news/004-launch-provider/` generated                                                                                                                                | yes (9 pages)                                                               | yes (9 pages)                                                                        |
| Record-date line on the article page                                                                                                                                                | **none**                                                                    | `Simulated record date · 11 March 2030`, exactly once, in `<p class="article-date">` |
| Record-date lines on `/` and `/news/`                                                                                                                                               | the three published values only                                             | the three published values **plus** the 004 value (4 each)                           |
| Raw ISO `2030-03-11` on the article page                                                                                                                                            | 0                                                                           | 0                                                                                    |
| Machine-readable date tokens (`datePublished` / `dateModified` / `<time>` / `lastmod`) anywhere in `dist/`                                                                          | 0                                                                           | 0                                                                                    |
| `Simulated record date` strings across `dist/`                                                                                                                                      | 9                                                                           | 12 (article page 1 · `/` 4 · `/news/` 4 · 001–003 1 each)                            |
| Article page structure                                                                                                                                                              | 1 `h1`, 0 `h2`, 0 `<figure>`                                                | 1 `h1`, 0 `h2`, 0 `<figure>`                                                         |
| News card cell for 004                                                                                                                                                              | amber placeholder numbered `04`, no `<img>`                                 | same — no plate, no `/_astro/` derivative                                            |
| Withheld markers (`18° 42`, `226° 14`) across `dist/`                                                                                                                               | 0                                                                           | 0                                                                                    |
| `check-dist` postbuild guard                                                                                                                                                        | green                                                                       | green                                                                                |

The only ISO-form dates anywhere in the built tree are article 001's own pre-existing `2026-09-16`
fields (3 occurrences on its page). The control's value: build A renders **no** date line on the
004 page while the three published pages keep theirs, and build B renders the assigned value once
on the page and once on each card — so the line is driven by the frontmatter field, not by the
template.

**Live origin** (deployment origin, in-page fetch, SHA-256 over the response bytes with
`crypto.subtle`, 2026-09-17 ~19:36 CEST; token families by hit count only):

| Route                             | Status  | Bytes  | sha256 (first 16)  | `Simulated record date` | Withheld / launcher tokens                                                                                                                                                                                 |
| --------------------------------- | ------- | ------ | ------------------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                               | 200     | 17,792 | `ef1466f4aa9789ef` | 3 (the published three) | 0 — no `Ariane`, no 004 link                                                                                                                                                                               |
| `/news/`                          | 200     | 11,352 | `bcbb0e8038c71158` | 3 (the published three) | 0                                                                                                                                                                                                          |
| `/news/001-project-announcement/` | 200     | 11,882 | `237572a89052bb30` | 1                       | 0                                                                                                                                                                                                          |
| `/news/002-payload-selection/`    | 200     | 14,265 | `a8eb93c726ab1e9a` | 1                       | 20 institution-family hits — all the **published** article's own sources citations, inside its "They are not partners in Red Horizon" framing (sampled in context at R2; R1's narrower pattern reported 9) |
| `/news/003-vehicle-design/`       | 200     | 11,380 | `4f1277c1dd2b01b2` | 1                       | 0                                                                                                                                                                                                          |
| `/news/004-launch-provider/`      | **404** | 0      | (empty)            | 0                       | 0                                                                                                                                                                                                          |
| `/wiki/`                          | 200     | 4,599  | `821a2d846a2ea5b2` | 0                       | 0                                                                                                                                                                                                          |
| `/wiki/vehicle/`                  | **404** | 0      | (empty)            | 0                       | 0                                                                                                                                                                                                          |

**The fail-closed state holds in fact**: the route 404s at zero bytes, neither index carries the
004 card, the launcher designation appears on no live route (so the live surface is still the
pre-004 revision), and no route carries a machine-readable date token.

### 12.5 The release decision — recorded in the companion review §12.5

The decision is the editorial role's and is stated in full in
`.agents/work/reviews/004-launch-provider.md` §12.5: the article at `6d79c6e2…` is **released**,
via the `publication: published` flip plus `simulatedDate: 2030-03-11` applied in one change by the
build card `t_de6e9055`. This continuity verdict is `continuity clear` on **exactly those bytes**:
any change to the article voids it and returns the package to this gate.

### 12.6 Conditions carried forward (unchanged from R1 unless stated)

1. The flip and the date line ship in one change; the release decision exists before the push
   (`AGENTS.md`); no second, divergent flip later.
2. **Ledger C5 — guard coverage gap.** `website/scripts/guards.mjs` (`3c95f22386a0e322…`) still
   carries no marker for the still-withheld families (institution / operator / facility names, the
   launch-day forms), so 004's containment rests on the gates and these records; a marker must
   never be added that would cover the released designation. Owner `mars-ai-simulator-dev` on
   `t_de6e9055`.
3. **Order-sensitivity.** The article's negatives are time-bound by its record date 2030-03-11;
   step 005 must carry a later one, or those negatives read false in-fiction.
4. The visuals candidate (`cb09992c…`) is still unapproved, unplaced and has no media key
   (`newsMediaKeys` = the four published keys); no plate, alt text, caption or `/_astro/`
   derivative is in this release scope.
5. The RH-01 wiki leaf's own publication state is still unrecorded (`mars-ai-simulator-planner`).
6. The homepage roadmap follow-up (`t_116ca903`, writer) adds the 004 link and decides the current
   flag after the article publishes.
7. The uncarded `docs/vehicle/` → `docs/vehicles/` split remains a hotspot: it touches
   `guards.mjs`, `src/lib/assets.ts` and `src/features/news/media.ts`, the same files the dev card
   is scoped to touch. Stage only the card's own paths; the split needs its own owner and proof.

### 12.7 Concurrency, input hashes and one record-internal inconsistency

- **Board at verdict time** (2026-09-17 ~19:50 CEST): only this card `running`; `t_3021fd7f` (the
  corrective) done; `t_de6e9055` (build/deploy), `t_1105aa0d` (release), `t_0abfd5b6` (container)
  and `t_116ca903` (homepage roadmap) all `todo`. Completing this card promotes `t_de6e9055` only.
- **Tree**: `HEAD` = `origin/main` = `ad8f5ac`; the `docs/` split is still staged and uncommitted;
  no canon file moved. Input hashes re-taken at ~19:50 CEST — article `6d79c6e2…` (3,999 B),
  001 `923a12d8…`, 002 `7b69bd7f…`, 003 `51f2ee69…`, `docs/SCENARIO.md` `99206373…`,
  `docs/timeline/004…` `1c61b918…`, `docs/timeline/005…` `3a996027…`,
  `docs/vehicles/ariane/ariane-64.md` `3ef87d9d…`, `src/content.config.ts` `f6017306…`,
  `src/lib/simulated-date.ts` `5c79e9d8…`, `src/lib/publication.ts` `d21669b0…`,
  `src/lib/media.ts` `9ecc54c7…`, `src/lib/assets.ts` `272dd01d…`,
  `src/features/news/media.ts` `4da7734b…`, `src/features/progress/steps.ts` `1236ead7…`,
  `scripts/guards.mjs` `3c95f223…`, `docs/INSTRUCTIONS.md` `1a2d8bf8…` — every one unchanged from
  R2's first read.
- **Record-internal inconsistency, corrected here.** R1 §1 cites `src/features/news/media.ts` at
  `2306bede…`; the file measures `4da7734b…` at R2, and R1's own hotspot comment already carried
  `4da7734b…`. R1's §1 table therefore holds a pre-split reading of a path the split then edited.
  It touches no claim this verdict rests on: the registry still resolves the four published keys
  and no launcher key, which is the fact used here.
