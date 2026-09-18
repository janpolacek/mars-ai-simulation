# Continuity check: roadmap-round-3 — the homepage roadmap grows to four steps, and step 1 is renamed

## Record metadata

| Field                           | Value                                                                                                                                                                                                                                                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card                            | `t_a635e5eb` — `mars-ai-simulator-editor` (merged editorial role: continuity + copy edit + release decision), child of `t_98e891c8` (writer deck) and `t_487244de` (SEO pass)                                                                                                                                           |
| Stage                           | `site-foundation` (homepage roadmap panel, round 3) — **advances no timeline step**                                                                                                                                                                                                                                     |
| Released timeline step in force | `004-launch-provider` (article 004 published, `simulatedDate: 2030-03-11`, live route 200)                                                                                                                                                                                                                              |
| Package reviewed                | `.agents/work/drafts/roadmap-round-3-deck.md` — 42,284 B, 511 lines; plain sha256 `3741bbe9b5997ea83c96e9c5b0e59fb3df8d3dff7b312dbe65f67999fb26cee8`; deck recipe hash `fd04377c3f34c997c1d1c6118ac8dc04e3cea3c22dc8a643e2ba13ca6f2d2cda` (re-measured from the file's own §0 row at gate time; fixed point reproduced) |
| Verdict                         | **`continuity clear`** — the card body's `approved`. Two documentation-level observations (§9 O1, O2); one routing item (§9 R1). No continuity, canon, plausibility or spoiler failure                                                                                                                                  |
| Record date                     | Not applicable — this release publishes no news article and no wiki page. `steps.ts` declares no date field and carries no `simulatedDate` (measured). See §5                                                                                                                                                           |
| Public/canon impact             | The homepage roadmap panel only. No new canon: every string is the released record's own wording or a condensation of one released sentence. The five other public instances of the word the rename removes are **out of scope** (§7)                                                                                   |

Every measurement below was taken on 2026-09-17 between 21:10 and 21:20 CEST from the shared checkout
(`HEAD` = `origin/main` = `3f53fdf1480922fdd775ec8cd6efd743d42837b0`), the live origin (read-only
in-page fetches; never written) and a throwaway build copy outside the repository
(`/tmp/ed_gate/scratch`). Scratch scripts live outside the repository
(`/tmp/ed_gate/verify_deck.py`, `verify_25.py`, `verify_25b.py`, `build_afterstate.py`, `panel_check.py`),
so the tree gains no new copy of any withheld name.

---

## 1. The record this check is measured against

| Source                                                     | sha256 at gate time                                                                                                                                                    | Role in this check                                                                   |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `website/news/001-project-announcement.mdx`                | `923a12d87a92279712a51e61dfa8b42793474b1d239ec2bef8c3cdc03617d399` (4,832 B)                                                                                           | step 1's title, detail and link; the 2031 schedule frame                             |
| `website/news/002-payload-selection.mdx`                   | `8dc22a4f3fae9bd4d48810e04810d378ce4efd0515234487a8eeaaec18514bc1` (7,702 B, working copy)                                                                             | the payload scope's unfinished state (folds into step 2)                             |
| `website/news/003-vehicle-design.mdx`                      | `51f2ee690feacdcf7efe97ad06c457d72081a4b13b5b6cb31ca8fdba78b09e6a` (5,476 B)                                                                                           | the frozen rover design; the closing clause step 2 restates                          |
| `website/news/004-launch-provider.mdx`                     | `7da71fec1f2ce0dbaff8aa2966e802b6de439eb78b73e34b1a8eafab5d764ca3` (4,029 B)                                                                                           | the architecture decision and the noun phrase the new step 3 names                   |
| `website/src/features/progress/steps.ts`                   | `1236ead76962cb8672d2ce25fabc73b45efc04e2e346adafa015a630c08e4db5` (2,083 B, 51 lines)                                                                                 | the before-state the round transcribes onto                                          |
| `website/test/progress-log.test.mjs`                       | `4fc56e745b8ee875bbb2c429df5f2e8bebf06cc194942e3c4b682998e5094042` (14,194 B, 298 lines)                                                                               | the painted shape the new entry must satisfy                                         |
| `docs/SCENARIO.md`                                         | `99206373bbb6140bac1202dc6cc5e80c6315bec649e49e223b61f305b636bc54` (26,509 B)                                                                                          | §"Continuity and release controls", §"Mission identity", §"Launch and mission dates" |
| `.agents/work/drafts/roadmap-004-link.md` (round 2.5 deck) | `613cf4763ff6e8448432b29f4c79c69e8d55edfc236f03ed93c3d50842a2a2b5`; recipe `2dbbafcf238254418b75664472bf1486f154e5c8d5ec74ce8c39a8d0cc4a0609` (fixed point re-derived) | step 2's link, label and detail clause, carried by block (c)                         |
| `.agents/work/seo/roadmap-round-3.md`                      | `53ce72a7f8cbb6247caa46e1cdbc20f196d5bcb37c5081ad553a7e9597393a2d` (38,012 B)                                                                                          | SEO verdict `approved as proposed`, 10 checks, no `website/` edit                    |
| `.agents/work/drafts/roadmap-round-3.md` (planner brief)   | `5f04cda53c8d14a5e71a94635842e3082548c7d30af1ee02506b4aef34c6b415` (19,248 B)                                                                                          | the four planner decisions this gate confirms                                        |

The deck's own frozen payload was re-derived from the deck's §7 fenced blocks rather than trusted
(§2 below): **5 of 5 block digests match**, which is what lets the dev card's "byte-for-byte"
acceptance be checked by a third party.

---

## 2. The frozen payload, re-derived (not trusted)

Recipe: sha256 over the fenced block's own bytes, the final newline included. `STRINGS-3` is the
three changed rendered literals newline-joined in §6 order with **no** trailing newline.

| §7 block                             | As transcribed | Declared (deck §10.3)                                              | Measured | Match                            |
| ------------------------------------ | -------------- | ------------------------------------------------------------------ | -------- | -------------------------------- |
| (a) step 1 entry                     | 401 B          | `3a4a767a394c92601dae843eb2b16daa237ee7e2cf2ec4521f6731ae260cbdcb` | same     | yes                              |
| (b) new step 3 entry                 | 243 B          | `94801b742ba4c492d77bfb7049e8fe1c317e468822650360639dd0da6521b750` | same     | yes                              |
| (c) step 2 entry (round 2.5 carried) | 401 B          | `ffb5e4c4c20e4caa6f6f1dbe06a00385149c3225781226c0f03aa47eaebba5d5` | same     | yes                              |
| (d) header comment rule region       | 272 B          | `e97515189f3a615b25a9f339b649c7ea55e6fca6dac72211161e818d1e57653a` | same     | yes                              |
| (e) test history comment paragraph   | 958 B          | `6e82765f0b43c98cd0ffe422ef061a0e9306c9204a59cf83c85580bc78581371` | same     | yes (count row off by 4 — §9 O2) |
| `STRINGS-3`                          | 178 B          | `4f54548983c47a7d653cc152ba60189c1da188c2824f994bfbaafdef04c00864` | same     | yes                              |

**Round 2.5's delta is carried verbatim, proved by reconstruction.** Block (c) is byte-identical to
round 2.5's own §7 block 1 with that deck's `//` label line removed (84 B): both reduce to sha256
`ffb5e4c4c20e4caa…` (401 B). Round 2.5's three comment lines appear verbatim inside block (e), and its
header-rule wording appears word-for-word inside block (d), the only change being the case of the
clause-initial `Add` → mid-sentence `add` and the spliced new branch. The round-2.5 SEO pass
(`.agents/work/seo/roadmap-004-link.md`, `c14b488a…`) approved those three strings; this gate confirms
them against the same record (§3.2) because the panel lands them in one commit (§9 R1).

---

## 3. The planner's four decisions, each confirmed against the released record

Source of the decisions: `t_9f4bbea2` (planner, completed) via `.agents/work/drafts/roadmap-round-3.md`
§2–§5, frozen in the deck. This gate confirms them; it does not re-open them.

### 3.1 Decision 1 — four steps, with `Integration and readiness` as the new step 3 (`Ahead`, no link)

Confirmed. The panel names four **work classes**, each of which the published record states:

| Panel step | State                      | Title's source in the record                                                                                                                                                                                             | Detail's source                                                                                                       |
| ---------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| 1          | `Announced`                | `001:23` — _"Red Horizon is a [fictional, AI-assisted Mars exploration programme]"_ / _"Ten national programme teams"_; `001:29` — _"The purpose is mineralogy and the reconstruction of ancient habitable conditions."_ | `001:24–27` (ten teams, one uncrewed lander and rover), `001:66` (*"The schedule frame is a launch window in 2031."*) |
| 2          | `In hand`, `current: true` | `004:2` — _"The launch architecture, chosen."_ / `004:14` — _"has decided how Red Horizon One will leave Earth"_; `003:71` — _"The rover design is settled; the mission around it is still being assembled."_            | `003:71` restated; round 2.5's clause traces to `004:14–16` (delivery architecture selected)                          |
| 3          | `Ahead`                    | `004:50` — _"integration and readiness work"_ (the record's own noun phrase; the panel drops the trailing noun as it does for `Mission architecture` / `Surface operations`)                                             | `004:50–52`, condensed (§3.3)                                                                                         |
| 4          | `Ahead`                    | round-2 approved; no article reports surface operations                                                                                                                                                                  | round-2 approved (`003` describes the rover, not surface operations)                                                  |

**Why the fourth step is not a claim about the future.** The step names a body of work the record
itself names, and `state: 'Ahead'` marks it as not reached. The alternative — a fifth step — stays
rejected: no published sentence opens surface operations or anything later. `004:18` (*"no part of the
flight stack has been integrated with a launcher or delivered to a launch site"*) and `004:52–53`
(*"The programme has published a decision, not a countdown."*) are the record's negatives, and a search
over all four published articles for integration / qualification / readiness / testing / review
language returns **only** `004:17–18`, `004:49–53` and `004:7` — all of them framing that work as
ahead. No article reports it under way.

### 3.2 Decision 2 — step 1's title becomes `Programme and purpose`; `state`, `detail`, `link` unchanged

Confirmed, title only. Measured in the after-state (§8): the step 1 entry differs from the live file in
exactly one line (`title:`), and the `state` (`Announced`), the detail (184 chars, digit-free, carrying
`001:66`'s released 2031 window) and the link (`/news/001-project-announcement/`, `Read the
announcement`) are byte-identical to the live entry.

Canon check. `docs/SCENARIO.md` §"Coalition and governance" keeps _coalition_ as the internal
collective noun, and the release controls introduce "the coalition and the lifecycle budget frame" with
the project announcement (step 001). Nothing in canon requires the public panel to use that noun:
`001:23–24` names the partners as _"Ten national programme teams"_ — the same words the detail already
uses — and `001:29` supplies _purpose_. So the rename removes a wording, not a fact: no released fact
is dropped, no unreleased fact is added, and the detail that carries the fact is untouched. The five
other public instances of the word remain on published surfaces and are **not** in this round's scope
(§7).

### 3.3 Decision 3 — `current: true` stays on step 2

Confirmed. The rule the file states (`steps.ts:9–10` live; `:9–12` after block (d)) is _"move the
current flag only when the record carries the next step's opening."_ The record carries no opening for
the new step 3:

- `004:18` — nothing integrated, nothing delivered to a launch site.
- `004:50–52` — the work _"sits between this decision and the flight"_: ahead, not under way.
- `004:52–53` — _"a decision, not a countdown."_
- No published sentence in 001–004 reports integration, test, review or readiness activity (§3.1).

Step 2 stays the newest carrier (`004`, published) and keeps `In hand` + `current: true`; the new
step 3 takes `Ahead` and declares no `current`. The test's invariant — exactly one `current`
(`progress-log.test.mjs:255`) — holds in the after-state, and the built page carries exactly one
`is-current` (§8).

### 3.4 Decision 4 — the diff surface: two files, three rendered strings, two comments

Confirmed against the deck's §5/§6 and the assembled after-state (§8): `steps.ts` gains one title
change, one new step entry and one extended header-comment region; `progress-log.test.mjs` gains one
extended history comment; **no assertion, helper, import or CSS change**. The three changed rendered
literals are `Programme and purpose`, `Integration and readiness`, and the new step 3 detail —
`STRINGS-3` `4f545489…`. The declaration's quoted-literal count goes 13 → 16 (the new entry's own
three strings), one `current`, two steps declaring a `link`, two without — matching the deck's §10.5.

### 3.5 The step 3 detail sentence, clause by clause

The panel form (130 chars): _"Bringing the elements together into one stack, testing them against the
conditions the mission will face, and closing the reviews."_

| Panel clause                                                | Record source (`004:50–52`)                                                       | Verdict                                                                          |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| "Bringing the elements together into one stack"             | _"bringing the elements together into one stack"_                                 | verbatim                                                                         |
| "testing them against the conditions the mission will face" | _"testing that stack and its parts against the conditions the mission will face"_ | condensation; "them" = the elements/the stack — no new subject, no new claim     |
| "closing the reviews"                                       | _"closing the reviews that establish the mission is ready to fly"_                | condensation; the dropped trailing clause asserts nothing the shorter form needs |

Two editorial points recorded rather than corrected — both are in the panel's own established form:

1. **The sentence is non-finite, like step 4's.** _"Bringing…, testing…, and closing the reviews."_
   has no finite verb, exactly as the round-2 `Surface operations` detail does (*"Using the rover on
   the surface to survey terrain and examine rocks in context."*). That is what keeps it clear of
   `004:18`'s negative: the detail describes the work the record names, and the `Ahead` label above it
   states its status. A finite verb ("mission teams are now…") would have turned it into a claim the
   record contradicts.
2. **The title drops the trailing noun** of _"integration and readiness work"_, as the panel does for
   _Mission architecture_ and _Surface operations_. No loss of meaning; the work class is named.

---

## 4. Withheld-class scan, re-run on the frozen strings (the writer's audit re-derived)

My own pattern set (§ family list below), run against the four rendered strings the panel will carry
after this round — the two changed titles, the new detail, and the carried step-2 detail — and,
separately, against the two comment regions (blocks (d) and (e)). Pattern list kept outside the
repository; **no withheld token is printed in this record** — only family names and hit counts.

| Withheld family                                                | Rendered strings (4) | Comment regions (2)            |
| -------------------------------------------------------------- | -------------------- | ------------------------------ |
| Launcher designation and its operator                          | 0                    | 0                              |
| Rover designation                                              | 0                    | 0                              |
| Region name                                                    | 0                    | 0                              |
| Gated coordinate marker 1 (`gatedTextMarkers` `guards.mjs:86`) | 0                    | 0                              |
| Gated coordinate marker 2 (same list)                          | 0                    | 0                              |
| Degree values                                                  | 0                    | 0                              |
| Institution / operator / facility names                        | 0                    | 0                              |
| Launch-day forms                                               | 0                    | 0                              |
| ISO dates                                                      | 0                    | 0                              |
| Any digit (subsumes figures and currency)                      | **0**                | excluded by design (see below) |
| Currency                                                       | 0                    | 0                              |
| `docs/timeline` path or step reference                         | 0                    | 0                              |
| Launch/landing-day wording                                     | 0                    | 0                              |

**The digit exclusion on the comment regions is checkable, not trusted.** The complete digit-bearing
token set in block (e) is 10 occurrences over 8 distinct tokens: the two card ids the history names
(`t_cc2dfd29`, `t_9f4bbea2`), the two article slugs it points at (`/news/003-vehicle-design/`,
`/news/004-launch-provider/`), the ordinal `4` inside one slug, and the ordinals `1`, `2`, `3` in
"step 2" / "round 2" / "round 3". Block (d) carries none. Both regions are source comments and are
never rendered (`ProgressLog.astro` renders only `state`, `title`, `detail`, and the link paragraph).

**Positive controls (the scan is live, not vacuous).** `docs/vehicles/pathfinder/VEHICLE.md` fires 2
families, `docs/vehicles/ariane/ariane-64.md` fires 9, `docs/area/AREA.md` fires 6 — all withheld or
release-controlled material firing as expected.

### 4.1 The built surface, measured

The throwaway build copy's homepage was scanned for the same families. The homepage as a whole carries
pre-existing published occurrences outside the panel (the newsroom card for 004 prints the launcher
designation in its summary — released at step 004 with article 004; the 003 card carries the rover
designation and its studio label — released at step 003; the plate filenames and alt text carry the
region name — released for article 001). **None of them is in the panel**, and the panel's own four
rendered strings carry 0 hits (§4 table). The round-3 delta adds nothing to any of those surfaces: it
edits `steps.ts` and one test comment, and the test comment is not rendered.

---

## 5. Dates and the published record

- **No new date token.** The only date-bearing string on the panel remains step 1's _"The schedule
  frame is a launch window in 2031."_ — 001's own sentence (`001:66`), unchanged by this round. The
  new step-3 title and detail carry no digit (`measured: 25 and 130 chars, ASCII, digit-free`).
- **No unreleased date is implied.** The locked calendar (`docs/SCENARIO.md` §"Launch and mission
  dates") holds the flight-system dates; the panel names none of them, and the new step's wording
  ("between this decision and the flight") is itself the record's own non-committal phrasing
  (`004:49–53`).
- **The new step 3 is `Ahead`, not `In hand`** — so the panel's own "the step after it is not settled
  yet" (the section description) stays true: highlighted step 2, the step after it is step 3.
- **Record date: not applicable to this release, and the absence is the check.** A _simulated record
  date_ belongs to a published **news article** (`website/news/<slug>.mdx`, frontmatter
  `simulatedDate`). This release publishes a site panel, not an article, and `steps.ts` carries no
  date field at all: measured, `simulatedDate` appears nowhere in the file and the file's only
  four-digit token is `2031` (step 1's released window). No wiki page is in scope either. The four
  articles' own record dates are untouched by this round (`001` 2026-10-12, `002` 2027-03-19, `003`
  2029-07-13, `004` 2030-03-11 — all four verified live and in file).
- **Order preserved.** The panel's chronological order is unchanged by the insertion: the new step 3
  sits between the `In hand` step and the unreached last step, i.e. after 004's decision and before
  the flight — the same order the articles carry.

---

## 6. Plausibility and spoiler safety

- The new step names a **work class**, not an event: it states no date, no site, no vehicle, no
  institution, no count, no outcome. Nothing on the panel can be read as a launch, landing or mission
  date; the only timing statement on the section is 001's released 2031 window in step 1.
- Nothing in the panel reveals a later timeline step. The withheld families the scenario controls
  (§"Continuity and release controls") — later payload detail, RH-01 imagery beyond the released
  dossier, the launcher (released at step 004, deliberately not named on the panel), exact launch and
  landing dates, institution/operator/facility names, Asteria Field's landing-design facts — are
  absent from every panel string and from both comment regions (§4).
- **Uncertainty is not written as certainty.** The panel's framing of the unreached work is the
  record's own: work ahead, a decision and not a countdown. The `Ahead` label and the section
  description both mark the unreached steps as not settled.
- **Asset, metadata and link surface.** No asset, filename, alt text, caption, metadata, JSON-LD or
  sitemap entry changes in this round (SEO §4, confirmed: the round touches no metadata surface). The
  two declared anchors point at published, live routes — `/news/001-project-announcement/` (200,
  11,882 B, "Simulated record date · 12 October 2026") and `/news/004-launch-provider/` (200, 9,730 B,
  dated 11 March 2030) — both measured on the live origin at `2026-09-17T19:15:17Z`. Steps 3 and 4
  declare no link, so no unpublished article can be reached from the panel.

## 7. What this round deliberately does not touch (scope containment)

The word the rename removes from the panel still appears on **five other public surfaces**, measured
now: `001:77`, `002:87`, `004:14`, `features/mission/facts.ts:18`, `features/mission/Hero.astro:12`
(`003` carries none). Those are published surfaces; rewriting them is a publication decision the human
story owner makes, and the planner filed it as the separate escalation card `t_8e8364e4` (not in this
publish chain). This gate's release decision covers the panel only and **does not** authorise any edit
to those five, to `facts.ts`, to `Hero.astro`, or to any `website/news/<slug>.mdx`.

`facts.ts:23` publishes `{ label: 'Current state', value: 'Mission architecture' }` and still agrees
with the `current` flag's continued position on step 2 — no coherence gap is created by this round.

---

## 8. Verification performed (measured, not asserted)

1. **Frozen payload re-derived** — 5/5 §7 block digests and `STRINGS-3` reproduced from the deck's own
   fenced blocks; round 2.5's entry and comment lines reproduced byte-for-byte (§2).
2. **After-state assembled** from the deck's §7 blocks exactly as the dev card is instructed, in a
   throwaway copy outside the repository (`/tmp/ed_gate/scratch/website`, `docs/` symlinked as its
   sibling, `node_modules` entries linked one by one): `steps.ts` 2,491 B (59 content lines, sha256
   `5efd5d986fa1252541be5b712ff5534e7d50b93a730d0d31b9236638faa48c92`); `progress-log.test.mjs`
   14,488 B (301 content lines, sha256 `370f3a66709e3329c6edb7699622b3cbb7a94023020b7f56cde9322f9e196b7e`).
3. **`dprint check` exit 0** on both after-state files against the repository's own `dprint.json` —
   the blocks need no reformat.
4. **Build** (`npm run build`, project CLI) exit 0, and the postbuild guard passed:
   `[check-dist] no reference into a withheld directory, and no withheld file or marker in dist/`;
   `[media-scope]` clean; 9 routes generated.
5. **Test suite** (`npm test`, vitest) **14 files / 153 tests passed, exit 0** on the built
   after-state — including the seven `progress-log.test.mjs` cases the card names (`:184–224` link
   contract, `:200–224` last step by title, `:255` exactly one `current`). No assertion needed a change.
6. **Built panel read back** from the copy's `dist/index.html` (`50cd9dd5…`): 4 `<li>` steps in order
   — `Announced / Programme and purpose` → `/news/001-project-announcement/`; `In hand / Mission
   architecture` with **the only** `is-current` → `/news/004-launch-provider/`; `Ahead / Integration
   and readiness` with 0 anchors; `Ahead / Surface operations` with 0 anchors. Heading outline
   `h1 → h2 → h3` with the four step `h3`s under `One step at a time.` (`#timeline`).
7. **Live origin measured read-only** (`fetch(..., {cache:'no-store'})` + `crypto.subtle`), which is
   the pre-flip state and the authoritative released surface: homepage 200, 18,846 B, sha256
   `4c16d7f103e4bf07068fd19b39f02ca4d59bb43ebd17ef92b5e5b5ec576f667a` — still the **three-step**
   panel (`Announced / Coalition and purpose` → 001; `In hand / Mission architecture` `is-current` →
   `/news/003-vehicle-design/`; `Ahead / Surface operations`, no link), i.e. round 2's state, with no
   round-2.5 link move live yet. Both target routes 200 with their record-date lines.
8. **Input stability re-checked at verdict time**: every hash in §1 re-measured unchanged, and the
   shared tree showed no uncommitted edit to `steps.ts` or `progress-log.test.mjs` (`git status`;
   `HEAD` = `origin/main`). The round-3 dev card's lane is free: no other card in `running` or `todo`
   writes `steps.ts`.

---

## 9. Findings, and what is routed

**O1 (documentation, no rework).** The test-history line names card `t_9f4bbea2` (the planner that
decided round 3), where round 2's line names the dev transcription card `t_cc2dfd29`. The card named
does record the round-3 decision, so the line is true; recorded as convention drift only. Comment-only,
not rendered — not worth a re-freeze of block (e).

**O2 (documentation, no rework).** The deck's §10.3 states block (e) at 954 chars; the fenced payload
is **958 B** (957 without its final newline). The digest in the same row is over the fenced bytes and
matches exactly, so the authoritative check is the digest. The same section's `STRINGS-3` recipe is
the newline-joined form **without** a trailing newline (178 B) — recorded here because a trailing
newline flips the digest. Also: the deck's §6 row 6 predicts the extended comment at `test.mjs:13–25`;
the assembled after-state puts it at **:13–24** (12 lines replacing 9). Documentation drift in a
working paper no shipped artifact depends on — superseded here, with no corrective card, per the rule
that a gate does not repair another worker's file.

**O3 (documentation).** The writer's card metadata records the deck's _plain_ sha256 as
`605f1b86…`, which was measured before the deck's final (self-hash) write; the current bytes are
`3741bbe9…` plain and `fd04377c…` under the deck's own recipe, and the SEO pass's recorded
`3741bbe9…` agrees with the current bytes. Both declared values verify, so the deck has not moved since
the writer's final edit (mtime 21:02:37 CEST) — the stale figure is the writer's pre-final measurement,
not a change to the approved bytes.

**R1 (routing — board structure, not this package).** Round 2.5's lane (`t_116ca903` writer deck →
`t_1b0b1951` SEO) has **no editorial-gate card and no dev transcription card filed**; the board shows
its chain ending at the SEO pass, and neither `steps.ts` (`1236ead7…`) nor the live panel has moved.
Its three strings are nevertheless safe to publish **because this round's §7 block (c) carries them
byte-for-byte and this gate's release decision names them explicitly** — which is why the dev
transcription can land the whole four-step panel in one commit and must not wait for a card that does
not exist. The routing is: a comment on `t_28348940` (this gate's child) telling the dev worker the
condition the lane rule was written for is met and that it may proceed; a comment on `t_116ca903`
recording that its lane's decision is superseded by this gate's decision record, so no second,
divergent decision appears later; and the open item recorded in this card's completion metadata for the
operator. Nothing about it blocks this release.

**Unresolved?** None that touches the package. No finding leaves a material claim untraceable to canon,
and no later timeline step becomes public through this round.
