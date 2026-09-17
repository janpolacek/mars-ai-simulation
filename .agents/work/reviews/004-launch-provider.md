# Review: 004-launch-provider — editorial final gate

Slug: `004-launch-provider`. Card `t_35061463` (`mars-ai-simulator-editor`), stage: merged
continuity + editorial final gate (editorial-review · copy-editing · brand-voice) · timeline
step `004-launch-provider`. Companion record: `.agents/work/continuity/004-launch-provider.md`
(chronology, canon, plausibility, spoiler verdict; same verdict: `return for revision`).

## Review metadata

| Field                | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card / stage         | `t_35061463` — editorial final gate. Parent `t_6fde5f04` (visuals, done); child `t_de6e9055` (build/deploy, `todo`); grandchild `t_1105aa0d` (release, `todo`)                                                                                                                                                                                                                                                                                                                                                                                      |
| Package under review | `website/news/004-launch-provider.mdx` — sha256 `6d79c6e2f0fb6b9bb186e3b8244ef6055c4eca0b2960902354f8a6251fe14080` (R2, the revision this decision covers), 3,999 B, 57 lines, `publication: draft`, 578-word heading-free body; R1 reviewed `4ac5647b…` and returned it (§12.2)                                                                                                                                                                                                                                                                    |
| Gates applied        | 004-A Option A (verbatim, the locked canon stands; the launch-vehicle designation is cleared for public copy) · 004-B recorded in its "not required — no real provider or institution named" form, with the two constraints · 004-C release-order advance approved (verbatim) · 004-D title deferred to the release gate under the fail-closed default, **no byline** · 004-E not applicable (`docs/SCENARIO.md` unchanged). All on `t_4d1b3041`, 18:52 CEST 2026-09-17; scope applied in `.agents/work/reviews/004-launch-provider-gates.md` §R3.3 |
| Evidence boundary    | Shared tree `HEAD` = `origin/main` = `ad8f5ac`; every input re-hashed at ~19:29 CEST and again at ~19:35 CEST after the working tree moved under the gate (a path-only `docs/vehicle/` → `docs/vehicles/` split, §9 and continuity §11 — the article is byte-identical); the shared checkout was **not** built and no `website/` path was written. Live origin and a throwaway copy outside the repository were measured instead                                                                                                                    |
| Record date          | **Verified at R2 on the corrected bytes:** `simulatedDate: 2030-03-11`, milestone line `docs/SCENARIO.md:188` ("11 March 2030 — RH-01 flight-model assembly begins"). Assigned here, re-measured on a fresh built surface and on the live origin (§12.4), and applied by the build card `t_de6e9055` with the flip, in one change                                                                                                                                                                                                                   |
| Verdict              | **`approved`** (R2) — R1 returned two clauses on one claim family (wording-only, corrected by the writer); §12 re-judges the corrected bytes and every carried row                                                                                                                                                                                                                                                                                                                                                                                  |
| Release decision     | **RELEASED at R2 — see §12.5 for the decision sentence and the exact public scope.** R1 withheld it (§7 stands as the R1 record: no flip, no route, no card, no plate at that revision)                                                                                                                                                                                                                                                                                                                                                             |
| Status               | **`approved`** (R2) → `kanban_complete`, which promotes the build/deploy card `t_de6e9055`. R1's `changes_requested` → corrective card linked as this gate's **parent** → `kanban_block(kind="dependency")` is the completed history                                                                                                                                                                                                                                                                                                                |

## 1. Verdict — `approved` at revision 2; the release decision is §12.5

**`approved`.** R1 returned one claim family in two sentences (quoted below, kept as the record of
what was returned). Corrective card `t_3021fd7f` (`mars-ai-simulator-writer`) applied the qualifier
to both, and §12 re-judges the corrected bytes (`6d79c6e2…`, 3,999 B): both clauses now speak about
the public record, in the form the published articles already use (002 `:104`/`:106`, 003 `:70`);
the revision-to-revision diff is exactly those two clauses plus the line break one of them reflows;
every other claim row and every containment item carries over on a byte-delta proof; and the record
date was re-measured on a fresh built surface and on the live origin. The verifier did not take the
corrective card's own revert proof on trust — both reconstructions were rebuilt here (§12.2).

**R1 verdict (superseded — kept as the record of what was returned).** The article is well built —
plain, specific, correctly scoped, and free of every withheld family — and it fails on one claim
family in two sentences: a not-settled statement written as the programme's internal state ("No
launch day or time has **been set**", "it has not **been narrowed** to a day") where the locked
scenario fixes the launch day and the published record uses the public-record form. This is the
defect class the step-003 corrective C1 (`t_9f191d53`) was raised for, and the remedy is the same:
the qualifier, no canon change.

Three things follow, each load-bearing:

1. **The gate must not complete.** `t_de6e9055` (build/deploy) is parent-gated on this card,
   and a completion would promote the build card into publishing two claims that canon
   contradicts. The correct terminal action is a dependency hold behind the corrective.
2. **The fix is not mine to make.** It changes factual meaning (internal state → public
   record) in another role's artifact, and this card's acceptance forbids a `website/`
   frontmatter edit; so it goes to the writer as a scoped corrective card, not into this
   record as an edit.
3. **Nothing is released by this card.** No flip, no route, no commit, no push, no plate.
   The article stays `publication: draft` at hash `4ac5647b…`.

## 2. Review table

| #  | Check                                                                                 | Result               | Evidence                                                                                                                                                                                                                                                                        |
| -- | ------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Every material claim agrees with the released step and the scenario                   | **FAIL (2 clauses)** | Continuity record §3 table, rows 4 and 18: "No launch day or time has been set" and "it has not been narrowed to a day". 21 further rows PASS                                                                                                                                   |
| 2  | Claims trace to canon or a cited source                                               | **FAIL (same 2)**    | The two clauses trace to no released source; `docs/SCENARIO.md:23`, `:193`, `:176–177` fix the launch day, so the state reading is contradicted. Every other claim traces to a released article, a `docs/SCENARIO.md` row, the step file, or a source-pack source               |
| 3  | Derived claims are judged, not waved through                                          | PASS                 | Continuity §5 J1–J4: the single-launch claim, the rationale framing, the no-orbiter sentence and the adapter interface qualifier are each judged with the canon they rest on                                                                                                    |
| 4  | No later-step fact, no unreleased `docs/timeline/` detail                             | PASS                 | No calendar row, campaign event, launch day or readiness claim; the architecture facts are the source pack §2.4 option-agnostic rows; token scan below                                                                                                                          |
| 5  | No landing site, Mars surface imagery or Asteria Field material                       | PASS                 | No site, region, coordinate, ellipse, P0, science-zone, hazard, traverse or `AF-*` token; no media field, so no alt text or caption can carry one (`docs/SCENARIO.md:279`)                                                                                                      |
| 6  | No performance, mass, cost or specification figure                                    | PASS                 | No figure anywhere: the 4,250 kg ceiling, the €180 M planning allowance and the €2.10 B frame are all deliberately unstated                                                                                                                                                     |
| 7  | No real institution, provider, operator or facility named (004-B fail-closed default) | PASS                 | Token scan: 0 hits for the operating company, the agency family, the launch-facility family, the launch complex, in body and frontmatter. The only real token is the launch-vehicle designation 004-A cleared                                                                   |
| 8  | The six accurate / non-endorsing rules applied to the exact public sentences (C2)     | PASS                 | §4 below, rule by rule, on the sentences that name the launch vehicle and describe the campaign                                                                                                                                                                                 |
| 9  | Citation form: no dead or unauthorised links                                          | PASS                 | Three internal links: `/#mission`, `/news/001-project-announcement/`, `/news/003-vehicle-design/` — all published routes (live 200). No external link, so no real institution's URL carries a name onto a public surface                                                        |
| 10 | Coherence and structure                                                               | PASS                 | Single narrative arc, 579 words, heading-free (the SEO package's measured threshold decision), 8 paragraphs, correct internal references; the build renders one `h1` and no `h2`                                                                                                |
| 11 | Voice: informed, composed, candid, specific, modest                                   | PASS                 | Concrete verbs, no grandiosity, no urgency, no unearned certainty, no acronym left undefined (UHF rendered as "short-range radio link"; EDL spelled out); disclosure in the first sentence and a closing note, neither as a footnote nor as a claim                             |
| 12 | Copy mechanics (grammar, repetition, terminology)                                     | PASS                 | No repeated phrasing across the architecture paragraphs, consistent terminology (flight stack / lander platform / cruise stage), one editorial register                                                                                                                         |
| 13 | Frontmatter schema conformance                                                        | PASS                 | `title` string, `category`, `status`, `publication`, `summary` (153 chars), `linkLabel`, `order: 4`, `accent: amber`; no `author` (004-D: no byline); `media*` absent, so `newsMediaIssues()` has nothing to reject; `simulatedDate` absent by design                           |
| 14 | Metadata carries nothing withheld                                                     | PASS                 | Title 32 chars, summary 153 chars: no date, no figure, no institution name, no step-005 fact; the summary names the cleared designation only                                                                                                                                    |
| 15 | Image placement, captions and alt text                                                | **n/a — no media**   | No `media` key exists for a launcher plate (`newsMediaKeys` = the four published keys), the visuals candidate is unapproved, so the package carries no figure, no caption and no alt text. Measured: the card renders the amber placeholder, the article page renders no figure |
| 16 | The record date is assigned from a locked milestone and named with its source         | PASS                 | §6: `2030-03-11` from `docs/SCENARIO.md:188`; order, containment, and compatibility with the article's own (corrected) claims all checked                                                                                                                                       |
| 17 | The record date is verified on a built surface, not only in the file                  | PASS                 | Throwaway copy outside the repository, build B: the page states `Simulated record date · 11 March 2030` once, each card once, no ISO form, no machine-readable date; build A (flip only) states none — the red-first control                                                    |
| 18 | The label presents the value as part of the fiction                                   | PASS                 | `src/lib/simulated-date.ts` owns `Simulated record date` and the separator; `ArticleView.astro` and `NewsCard.astro` render the same string; the field is never emitted as `datePublished`, `dateModified`, `<time>` or a sitemap value                                         |
| 19 | The published surface is checked, not only the file                                   | PASS                 | Live origin and built output measured (below and continuity §7); its own `check-dist` postbuild guard is green and no withheld marker reaches `dist/`                                                                                                                           |
| 20 | Already-published copy is order-sensitive against this flip, and is time-bound        | PASS                 | 002 `:104`/`:106` and 003 `:70` carry record dates (2027-03-19, 2029-07-13) earlier than the assigned 2030-03-11, so ledger C6 is satisfied in form; recorded again as a condition for step 005                                                                                 |
| 21 | Asset provenance by content, not by path                                              | **n/a — no asset**   | No asset in the release scope, so no hash to compare against `docs/brand/BRAND.md`; the candidate plate's hash (`cb09992c…`) is private provenance and stays unplaced                                                                                                           |
| 22 | The fail-closed state holds **in fact**, not on paper                                 | PASS                 | Live `/news/004-launch-provider/` → 404, 0 bytes; `/news/` and `/` list 001–003 only; shared `dist/` lists no 004 route; the article is `publication: draft`                                                                                                                    |
| 23 | No external action of any kind                                                        | PASS                 | No commit, push, deploy, hosting/DNS/credential use or media upload; `publication:` and every `website/` path untouched; the shared checkout was not built                                                                                                                      |
| 24 | The card's out-of-scope list respected                                                | PASS                 | No canon option chosen, no provider or vehicle named by this role, no public date set beyond the record date this role owns, `docs/SCENARIO.md` and `docs/timeline/` read-only, no prose rewritten, no imagery produced, no flip                                                |
| 25 | A release decision is not manufactured                                                | PASS                 | §7 records a **withheld** release and the scope a later release will cover; no approval sentence is applied anywhere                                                                                                                                                            |
| 26 | Concurrency probed before the verdict                                                 | PASS                 | Only this card was `running`; `t_de6e9055` (deploy), `t_1105aa0d` (release) and `t_0abfd5b6` (container) are `todo`. No sibling `website/` card can move the article or the surface underneath this gate                                                                        |
| 27 | Correction routed to the owning role, not applied here                                | PASS                 | §3: corrective card to `mars-ai-simulator-writer`, linked as this gate's parent; this role edits no other worker's artifact                                                                                                                                                     |

Token scan of the reviewed file (script outside the repository; families reported by hit
count): launcher designation 1 (`Ariane 64`, cleared), **institution / operating company 0**,
**launch facility 0**, **withheld launch-day forms 0**, **landing-region coordinate markers 0**,
**performance / mass / cost figures 0**, **Asteria Field material 0**, **step 005+ tokens 0**.

## 3. Required changes (owner `mars-ai-simulator-writer`, corrective card) — R1; both applied by `t_3021fd7f`, verified in §12

Both are wording-only, in one file, and need no canon, gate answer or `docs/SCENARIO.md`
change. Full reasoning and the published counter-examples: continuity record §4.

| #      | Current wording                                                    | Required                                                                                                        | Why it blocks                                                                                                                                                                                                  |
| ------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **C1** | "No launch day or time has been **set**" (paragraph 1, line 16)    | Speak about the public record, not the internal schedule — e.g. "No launch day or time has been **announced**." | Not traceable to a released source; `docs/SCENARIO.md:23`, `:193` fix the launch day, so the state reading is false; and it regresses against 002 `:106` ("is being stated") and 003 `:70` ("has been stated") |
| **C2** | "and it has not been **narrowed** to a day" (paragraph 6, line 48) | The public-record form — e.g. "and no day within it has been announced."                                        | The same defect; the sentence adapts 002 `:105`, whose second half is the qualified "No launch or landing date is being stated."                                                                               |

Constraint to keep in the same pass: the corrected clauses must still be true on the assigned
record date, 11 March 2030 (§6), and must keep the article free of any real institution,
operator or facility name and of any date beyond the 2031 window.

## 4. The six accurate / non-endorsing rules, applied to the exact sentences (C2 item)

Reviewed on the sentences that name the launch vehicle and describe the campaign, because
Gate 004-B was recorded in its "not required — no real provider or institution named" form
and the fail-closed default therefore binds.

| Rule (canon proposal §"Accurate / non-endorsing wording rules")                     | Verdict                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. The fiction is labelled as fiction on every public surface                       | PASS — first sentence ("a fictional, AI-assisted Mars exploration programme") and the closing note                                                                                                |
| 2. No implication of participation, approval, funding or endorsement                | PASS — "no real agency, launcher operator, or launch facility is a partner in this programme or has endorsed it", repeated in the closing note                                                    |
| 3. No real price, cost, schedule or performance figure presented as the programme's | PASS — no figure of any kind; the launch-service allowance is not printed                                                                                                                         |
| 4. Nothing reads as an advertisement for the real provider                          | PASS — the launcher is stated as an architecture fact, with its record explicitly "not to Red Horizon"                                                                                            |
| 5. The real provider's public record is separated from the programme's interface    | PASS — paragraph 2 (the vehicle and its record) versus paragraphs 3–5 (the injection and payload-adapter segment, cruise stage, EDL, relay)                                                       |
| 6. Verbatim wording review by the human before publication                          | Not required in this form — 004-B returned the "no real institution named" answer, so there is no real-named sentence to approve; the rule set above is this role's applied review, recorded here |

## 5. Copy, brand voice and surface

- **Copy.** No change requested. The prose is the house register: short declaratives, defined
  terms, no acronym display, no slogan. The three-link inventory is correct and minimal; the
  built page's full anchor list carries no link this article does not own.
- **Surface.** `BaseLayout` supplies the title (`The launch architecture, chosen. | Red
  Horizon`, 46 chars) and the summary as the description; the article page renders one `h1`,
  no `h2`, no `<figure>`; the newsroom and homepage cards render the kicker, summary, link
  label and the amber placeholder cell numbered `04`. Measured in the throwaway build and on
  the live origin (continuity §7).
- **Build guard.** `website/scripts/guards.mjs` `3c95f223…` (§9, §6): `gatedDirectoryNames =
  ['timeline']`, one withheld file (`docs/vehicles/pathfinder/contact-arm-scene.png`), markers
  `['18° 42', '226° 14']`. Nothing in the reviewed file matches any of them; the guard has
  **no** marker for the still-withheld families (institution / operator / facility names, the
  launch-day forms), so 004's containment rests on the gates and these reviews — recorded as
  ledger C5 with `mars-ai-simulator-dev` as owner, and it must never gain a marker covering
  the released designation.

## 6. The simulated record date — assigned at R1, re-verified at R2 on the corrected bytes, applied by the build card

> `simulatedDate: 2030-03-11` — milestone line **`docs/SCENARIO.md:188`**, "11 March 2030 —
> RH-01 flight-model assembly begins".

- **Order:** after 003's 2029-07-13 (`:187`) and before step 005's `:193`; the published
  articles stay in order by the dates they carry (2026-10-12, 2027-03-19, 2029-07-13,
  2030-03-11).
- **Compatibility:** the row whose state matches what the article claims — integration,
  testing and readiness reviews still ahead, nothing integrated with a launcher, nothing at a
  launch site. `:189`–`:192` each name an event that would put the article's own framing in
  the past; `:193` is step 005's launch row and is withheld.
- **Containment:** not readable as a launch, landing or other withheld mission date; the
  surface shows only the date under the in-fiction label, never the row's text; it contradicts
  no published sentence, and the corrected negatives (§12.3) hold on it.
- **Rendered surface:** `website/news/004-launch-provider.mdx` frontmatter (`simulatedDate:
  2030-03-11`, applied by the build card `t_de6e9055` together with the flip) → the article
  page's header line and the `/` and `/news/` cards. **Re-measured at R2** on a fresh throwaway
  copy of the post-split tree as `Simulated record date · 11 March 2030`, exactly once on the
  page (`<p class="article-date">`) and once per card, with 0 machine-readable date tokens and
  0 raw ISO form anywhere in `dist/`; build A (flip only) renders none on that page — the
  red-first control (continuity §12.4).
- **Status at R2:** assigned here, **re-verified on the corrected bytes** (built surface and
  live origin), and **applied by the build card with the flip in one change** — the build card
  and the release record carry it forward. It is a lower bound on step 005's value. At R1 it was
  assigned, not applied and not released.

## 7. Release decision — withheld at R1 (superseded by §12.5, which states the released decision and the exact scope)

> **Release decision, `t_35061463` (`004-launch-provider` editorial final gate), recorded
> 2026-09-17 CEST by `mars-ai-simulator-editor`: the package is NOT released. No
> `publication:` flip is authorised at this revision, no route, no card, no metadata string
> and no asset becomes public, and the build/deploy card `t_de6e9055` must not start. The
> article's wording fails canon fidelity in two clauses (C1, C2); the release decision will be
> recorded on the corrected revision, whose bytes this gate re-judges.**

**Exact public scope the release will cover once the corrective lands** (recorded now so the
release card applies one scope, and explicitly **not** an approval):

| Surface                                | Content                                                                                                                                                                                                                                                       |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Route                                  | `/news/004-launch-provider/` — one page, trailing-slash directory route, generated by `src/pages/news/[slug].astro` for a published item only                                                                                                                 |
| Card on `/` and `/news/`               | the fourth card in frontmatter order: kicker `Launch architecture 04 · Architecture selected`, the drafted title, the 153-char summary, `Simulated record date · 11 March 2030`, link label `Launch architecture briefing`, amber placeholder cell (no image) |
| Frontmatter metadata                   | `publication: published` (the flip) and `simulatedDate: 2030-03-11` (this card's value); plus the existing `title`, `category`, `status`, `summary`, `linkLabel`, `order`, `accent`. No `author`, no `media*`                                                 |
| Plate and emitted derivative           | **None.** No media key, no approved asset, no `docs/` file and no `/_astro/` derivative enter this release; the hover/fill treatment and placeholder stay as measured                                                                                         |
| Provider / vehicle designation strings | `Ariane 64` — the launch-vehicle designation Gate 004-A cleared, named in the title-free body, the frontmatter summary and the page's own sentences. **No** operating company, institution, operator or facility string, anywhere                             |

**Preconditions of that release:** the corrective applied at a new hash; this gate re-run on
the new bytes; the record date re-verified on the built page; the `publication` flip and the
`simulatedDate` line applied in one change (the flip is the release mechanism, and no second
divergent flip may appear later).

## 8. Conditions and outstanding items

| # | Item                                                                                                                                                                                                                                                                                                | Owner                                                                      | Where                                           |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------- |
| 1 | **DONE at R2** — the corrective `t_3021fd7f` landed both clauses (`4ac5647b…` → `6d79c6e2…`), re-verified in §12.2 and §12.3. (R1 form: C1 and C2 wording corrections (§3), then re-request this gate on the new hash; do not flip `publication`, do not commit or push)                            | `mars-ai-simulator-writer`                                                 | corrective card `t_3021fd7f` (done)             |
| 2 | **DONE at R2 (§12)** — this gate re-ran on the corrected bytes: re-hashed every input, re-judged the two clauses, carried the other rows on the byte-delta proof, re-verified the record date on a fresh built surface and on the live origin                                                       | `mars-ai-simulator-editor`                                                 | this card (R2)                                  |
| 3 | Six-rule review of the exact public sentences inside the release decision, on the corrected revision (C2 of the ledger)                                                                                                                                                                             | `mars-ai-simulator-editor`                                                 | `t_1105aa0d` (release record)                   |
| 4 | The homepage roadmap (`src/features/progress/steps.ts` `1236ead7…`) curates its list and says "Add a step's link when its article is published": when 004 publishes, the panel needs the 004 link and the current-flag decision. Its strings stay true today, so this is a follow-up, not a blocker | `mars-ai-simulator-writer` (then a dev transcription, the round-2 pattern) | card created this run, parented on `t_de6e9055` |
| 5 | The build guard has no marker for the still-withheld families (institution / operator / facility names, launch-day forms); it must not gain a marker covering the released designation (ledger C5)                                                                                                  | `mars-ai-simulator-dev`                                                    | `t_de6e9055`                                    |
| 6 | The visuals candidate (`cb09992c…`) remains a candidate: the human's selection, then the site engineer's `docs/` copy, then a media key and a dev card, then its own release decision. If selected, the alt text must keep describing the pixels (the manifest's 347-char string does)              | human story owner → visuals/dev/editor                                     | `t_6fde5f04` manifest; a future card            |
| 7 | The **RH-01** wiki leaf's own publication state is still unrecorded (004-C's grant is node-specific and names the launch-vehicle node)                                                                                                                                                              | `mars-ai-simulator-planner`                                                | the wiki pipeline card                          |
| 8 | `t_1105aa0d` (release) and `t_de6e9055` (deploy) are both gated behind this card; neither may start before the release decision exists                                                                                                                                                              | —                                                                          | board                                           |

## 9. Mid-run observations (non-blocking, recorded for the next reader)

| Time (CEST)  | Observation                                                                                                                                                                                                                                                                                                                                                                                                                                  | Effect on this verdict                                                                                                                                                                                                                                                                                                 |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~19:22       | Live `/news/004-launch-provider/` 404; `/news/` and `/` list 001–003; `/wiki/vehicle/` 404; both record-date labels present on the published pages                                                                                                                                                                                                                                                                                           | None — the fail-closed state is the expected one for a draft package                                                                                                                                                                                                                                                   |
| ~19:22       | `/news/002-payload-selection/` returns 9 institution-family hits on the live origin (14,265 B, `a8eb93c7…`)                                                                                                                                                                                                                                                                                                                                  | None — all pre-existing and already released: that article's own sources section, inside its explicit "they are not partners" framing                                                                                                                                                                                  |
| ~19:24–19:25 | Throwaway copy built twice outside the repository (A: flip only; B: flip + the value); both green, `check-dist` clean, no 004 route in the shared `dist/`                                                                                                                                                                                                                                                                                    | Supports the record-date row (§6); the corrected revision needs the same treatment                                                                                                                                                                                                                                     |
| ~19:29       | Every input re-hashed immediately before the verdict; the article unchanged at `4ac5647b…`; `HEAD` = `origin/main` = `ad8f5ac`; the shared tree carries only this run's two new record files                                                                                                                                                                                                                                                 | None — no input moved under the gate                                                                                                                                                                                                                                                                                   |
| ~19:29       | Only this card `running`; no sibling `website/` card in flight                                                                                                                                                                                                                                                                                                                                                                               | None — no concurrent writer can move the reviewed bytes                                                                                                                                                                                                                                                                |
| ~19:35       | **The working tree moved under the gate**: `docs/vehicle/` split into `docs/vehicles/pathfinder/` + `docs/vehicles/ariane/` (staged renames, uncommitted), with `website/scripts/guards.mjs`, `src/lib/assets.ts`, `src/features/news/media.ts`, `test/guards.test.mjs`, `docs/INSTRUCTIONS.md`, `docs/README.md`, `README.md`, `docs/GENERAL.md` updated to the new paths; `HEAD`/`origin/main` still `ad8f5ac` and no other card `running` | **None on the verdict** — the article is byte-identical (`4ac5647b…`), `docs/SCENARIO.md` and both timeline steps are unchanged, `newsMediaKeys` still holds no launcher key, and the dossier's substance is unchanged; the copied hashes and path citations in §1/§5/§6 are updated to the new paths (continuity §11) |
| ~19:35       | The moved dossier re-read at `docs/vehicles/ariane/ariane-64.md` (`3ef87d9d…`, 31,797 B, was `b1b1c01c…`, 31,761 B)                                                                                                                                                                                                                                                                                                                          | None — the four-booster configuration, the top-and-bottom arrangement, the interface wording and the "must never" list are unchanged; the delta is its own path references (continuity J9)                                                                                                                             |
| ~19:35       | **Hotspot:** the uncarded `docs/vehicle/` → `docs/vehicles/` refactor touches `website/scripts/guards.mjs`, `website/src/lib/assets.ts` and `website/src/features/news/media.ts` — files the step-004 dev card is also scoped to touch; the guard's withheld file is now `docs/vehicles/pathfinder/contact-arm-scene.png` with the marker set unchanged (`3c95f223…`)                                                                        | None — flagged on this card's thread, owner named; the dev card must stage only its own paths                                                                                                                                                                                                                          |

## 10. Lifecycle action taken

The corrective card is created for `mars-ai-simulator-writer` with an explicit `dir` workspace
(the `kanban_create` default is a scratch workspace, which cannot edit the shared tree) and
linked as this gate's **parent**; this card then holds with `kanban_block(kind="dependency")`,
so it resumes automatically when the corrective completes.

**Not** `kanban_complete`: the build/deploy card `t_de6e9055` is parent-gated on this card, and
a completion would promote it into publishing a package whose wording this gate returned.
**Not** `kanban_request_changes`: this card was not claimed from the review column; the
corrective-plus-hold is the mechanism the project's own procedure records for this case.

## 11. Acceptance checks

| Acceptance criterion (card body)                                                     | State                                                                                                                                                 |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Every claim agrees with the released step and the scenario                           | **Met at R2** — C1/C2 corrected by `t_3021fd7f` and re-judged (§12.3); the other 21 material claims carried on the byte-delta proof (at R1: not met)  |
| No later-step fact or Asteria Field detail in prose, alt text or captions            | Met — none, in any surface, including the built output (re-measured at R2: 0 withheld markers across `dist/` and on every live route)                 |
| The article carries a record date drawn from a locked milestone, named by the record | Value assigned and named (`2030-03-11`, `docs/SCENARIO.md:188`); re-verified at R2 on a fresh built surface and on the live origin (continuity §12.4) |
| The review is approved with no unresolved material failure                           | **Met at R2** — `approved`; no unresolved material failure (at R1: not met)                                                                           |
| The release decision names the exact public scope                                    | **Met at R2** — the released decision and the exact scope are §12.5 (at R1: a withheld release, with the scope a later release would cover)           |
| No `website/` edit, no build, no commit, no push, no deploy, no publication          | Met — the shared checkout was not built and no `website/` path written; the only builds were in throwaway copies outside the repository               |

## 12. Revision 2 — the corrective re-verified; `approved`; the release decision

Second pass of this gate, 2026-09-17 ~19:33–19:52 CEST, on the corrected article
`website/news/004-launch-provider.mdx` — sha256
`6d79c6e2f0fb6b9bb186e3b8244ef6055c4eca0b2960902354f8a6251fe14080`, 3,999 B, `publication: draft`.
Trigger: corrective card `t_3021fd7f` (`mars-ai-simulator-writer`) carried both clauses of the R1
return. Companion: `.agents/work/continuity/004-launch-provider.md` §12 — verdict
**`continuity clear`** on the same bytes. This pass writes only the two records; the shared
checkout was not built, no `website/` path, canon file or other worker's artifact was touched.

### 12.1 What R1 recorded, and what R2 changes

| R1 item                                                                      | R2 state                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| §1 verdict `changes_requested`; §2 rows 1–2 FAIL                             | **`approved`** — both clauses corrected and re-judged (§12.3); rows 1–2 PASS                                                                                                                                                            |
| §3 the two required changes — owner writer on a corrective card              | **DONE** — `t_3021fd7f` completed; both substitutions verified from the bytes here (§12.2)                                                                                                                                              |
| §4 the six accurate / non-endorsing rules on the exact sentences (ledger C2) | **Stands**, and applies unchanged: the corrective touched only two negative clauses about the public record, which name no provider, operator or facility (§12.4)                                                                       |
| §6 record date "assigned, not applied and not released"                      | `2030-03-11` from `docs/SCENARIO.md:188` — **re-verified on the corrected bytes** (fresh built surface: once on the page, once per card, no ISO, no machine-readable date; live origin 404) and applied by the build card with the flip |
| §7 release decision **withheld**                                             | **RELEASED** — §12.5 below states the decision and the exact public scope                                                                                                                                                               |
| §8 conditions 1–2                                                            | **DONE** (both), replaced by the conditions that survive the release (§12.6)                                                                                                                                                            |
| §9 mid-run observations, incl. the `docs/` split hotspot                     | Stand as observations; the hotspot is re-flagged in §12.6                                                                                                                                                                               |
| §11 acceptance checks "not met" on two rows                                  | **Met at R2** — the table above carries the updated states                                                                                                                                                                              |

### 12.2 The corrective, proved from the bytes (not from the writer's helper)

Two independent reconstructions, both run in a scratch script outside the repository, both
recovering the R1 hash `4ac5647bc8695e81100953c136501a1d7a10ba7ebaf1cb3e75f473fbdab18f33` exactly:

- **Proof A** — reverse-applied the two claimed clause substitutions to the corrected file,
  restoring the line break the longer C1 clause reflows (line 17 changes by whitespace only).
- **Proof B** — took R1's own throwaway build copy of the article
  (`/tmp/rh-004-gate/website/news/004-launch-provider.mdx`, `5b85f49e…`, 4,021 B = the R1 bytes
  plus the flip and the date line) and undid that frontmatter delta.

The revision-to-revision diff is exactly two hunks — line 16 (C1) and line 48 (C2), plus the
whitespace move on line 17 — and every other line is byte-identical to R1, so **every §2 row that
passed at R1 carries over on this proof** rather than on a fresh reading. The file stays 57 lines;
3,991 → 3,999 bytes; 579 → 578 words. Continuity §12.2 records the one trap: a reverse-apply that
keeps the corrected line break derives the right byte count and the wrong hash.

### 12.3 The two clauses re-judged, and the review table

| §2 row                                    | R1               | R2                                                                                                                                                                                                |
| ----------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 Every material claim agrees             | FAIL (2 clauses) | **PASS** — "No launch day or time has been announced" / "and no day within it has been announced": the public-record form of 002 `:106` and 003 `:70`, asserting nothing beyond the public record |
| 2 Claims trace to canon or a cited source | FAIL (same 2)    | **PASS** — both clauses now assert only the state of the public record, which the release controls own (`docs/SCENARIO.md:278`)                                                                   |
| 3–14, 16–20, 22–26                        | PASS             | **PASS (carried)** on the §12.2 byte-delta proof                                                                                                                                                  |
| 15 Image placement, captions, alt text    | n/a — no media   | **n/a — no media**; re-measured: 0 `<figure>`, card cell is the amber placeholder numbered `04`, nothing emitted into `_astro/` for 004                                                           |
| 21 Asset provenance by content            | n/a — no asset   | **n/a — no asset**                                                                                                                                                                                |
| 27 Correction routed to the owning role   | PASS             | **PASS — discharged**: the corrective card completed and this gate re-ran on its bytes                                                                                                            |

Token scan re-run on the corrected bytes, same families as R1: launcher designation 5 (`Ariane 64`,
cleared), **institution / operating company 0**, **launch facility 0**, **landing-region coordinate
markers 0**, **Asteria Field material 0**, **performance / mass / cost figure 0**, **step 005+
tokens 0**, **the two defect phrases 0**; "launch day" occurs once, inside the corrected negative.

### 12.4 The accurate / non-endorsing review, on the corrected revision (ledger C2)

The §4 review is re-confirmed on the corrected bytes. The corrective changed two negative clauses
about the public record and nothing else, so the sentences the six rules govern — paragraph 2
(the vehicle and its record) and the closing note — are byte-identical to the revision R1 reviewed
under the fail-closed 004-B default: they name the launch-vehicle **designation** only, state that
its record belongs to the organisations that build and operate it, and state that no real agency,
launcher operator or launch facility is a partner or has endorsed the programme. No institution,
operator or facility name appears in the article, its frontmatter, its alt text or its captions;
Gate 004-B was answered in its **"not required"** form, so this remains a fail-closed default and
any real-named sentence would need a verbatim human approval covering it first.

### 12.5 RELEASE DECISION — `t_35061463` (`004-launch-provider` editorial final gate, revision 2)

> **Release decision, recorded 2026-09-17 CEST by `mars-ai-simulator-editor`: the package
> `website/news/004-launch-provider.mdx` at sha256
> `6d79c6e2f0fb6b9bb186e3b8244ef6055c4eca0b2960902354f8a6251fe14080` (3,999 B) IS RELEASED.**
> Canon is confirmed against released material, continuity is clear, no unresolved material
> failure remains, and the article may go public. The build/deploy card `t_de6e9055` applies the
> `publication: published` flip **and** `simulatedDate: 2030-03-11` in one change and pushes; the
> release card `t_1105aa0d` then records the live verification. Any change to the article's bytes
> voids this decision and returns the package to this gate.

**Exact public scope authorised** (unchanged from R1 §7, now released rather than withheld):

| Surface                                | Content                                                                                                                                                                                                                                                                                                     |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Route                                  | `/news/004-launch-provider/` — one page, generated for a published item only                                                                                                                                                                                                                                |
| Card on `/` and `/news/`               | the fourth card in frontmatter order: kicker `Launch architecture 04 · Architecture selected`, the title `The launch architecture, chosen.`, the 153-char summary, `Simulated record date · 11 March 2030`, link label `Launch architecture briefing`, amber placeholder cell with number `04` and no image |
| Frontmatter metadata                   | `publication: published` (the flip) + `simulatedDate: 2030-03-11` (this card's value), on top of the existing `title`, `category`, `status`, `summary`, `linkLabel`, `order`, `accent`. No `author`, no `media*`                                                                                            |
| Plate and emitted derivative           | **None** — no media key, no approved asset, no `docs/` file, no `/_astro/` derivative                                                                                                                                                                                                                       |
| Provider / vehicle designation strings | `Ariane 64` — the designation Gate 004-A cleared; **no** institution, operator or facility string anywhere                                                                                                                                                                                                  |

Measured evidence for the decision: the fresh built copy (build B, continuity §12.4: route
generated, one date line on the page and one per card, 0 ISO, 0 machine-readable date tokens,
`check-dist` green, 0 withheld markers) and the live origin (pre-release: the route 404s at 0 bytes
and no live route carries the launcher token).

### 12.6 Conditions that survive the release

1. Flip and date line in **one** change, no second divergent flip; the decision above exists before
   the push (`AGENTS.md`).
2. **Ledger C5** — the build guard still has no marker for the still-withheld families
   (institution / operator / facility names, launch-day forms), and must never gain one covering
   the released designation. Owner `mars-ai-simulator-dev` on `t_de6e9055`.
3. **Order-sensitivity** — the article's negatives are time-bound by its record date 2030-03-11;
   step 005 must carry a later record date.
4. **Hotspot** — the uncarded `docs/vehicle/` → `docs/vehicles/` split touches
   `website/scripts/guards.mjs`, `src/lib/assets.ts` and `src/features/news/media.ts`, the same
   files the build card is scoped to touch; stage only the card's own paths.
5. The visuals candidate (`cb09992c…`) stays unplaced; the RH-01 wiki leaf's publication state
   stays unrecorded (planner); the homepage roadmap follow-up `t_116ca903` adds the 004 link after
   the article publishes.

### 12.7 Lifecycle action taken

`kanban_complete` on this card, with the release decision above recorded in this file and on the
card thread. Completion is what promotes the build/deploy child `t_de6e9055`; `t_1105aa0d` (release
record) and `t_116ca903` (homepage roadmap) remain gated behind it. No `kanban_request_changes`
this pass: the R1 corrective completed and its bytes pass.
