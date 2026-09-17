# Review: progress-log — editorial final gate, round 2 (homepage `#timeline` strings)

## Review metadata

| Field                 | Value                                                                                                                                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Slug / surface        | `progress-log` — the homepage `/` progress-log section (`<section id="timeline">`, rendered last), i.e. the strings in `website/src/features/progress/steps.ts`, plus one navigation label in `website/src/lib/navigation.ts` (`§8.3`)                                               |
| Card                  | `t_c4bd0c0d` — `mars-ai-simulator-editor`, stage `site-foundation`. **Round 2.** Advances no timeline step. This gate is the last review before the dev card transcribes the strings                                                                                                 |
| Chain                 | writer `t_b634310c` (revised deck) → SEO `t_906be0fb` (`approved as proposed`) → **this gate** → dev transcription `t_cc2dfd29` (`mars-ai-simulator-dev`, `todo`, released by this card's completion)                                                                                |
| Stage / timeline step | `site-foundation` (homepage chrome copy, second round). **Advances no timeline step.** Factual bound = the three published articles (001, 002, 003), all `publication: published`                                                                                                    |
| Deck (frozen copy)    | `.agents/work/drafts/progress-log.md` — sha256 `8fc9a181d383427d1917561451e442c6bb4c96b3fbc9bfe903cca015c4281d7f`, 59,689 bytes · 681 lines. Re-hashed at 15:39:18 and 15:41:39 CEST and immediately before this verdict: **unchanged**, and equal to the hash the SEO pass recorded |
| Frozen blocks         | `BLOCK-8.1` sha256 `a6b774eb20e26c13eaf9450362f3a56ad41cf02d4c848f645e5a404390edaf45` (2,035 bytes) · `BLOCK-8.3` sha256 `6773c7d688642088949826a03fed05b9f54d34de42e2efdf3b18e9dd319bb280` (56 bytes) — both recomputed by this gate, both match                                    |
| Frozen string payload | the 15 rendered literals of §8.1 + §8.3, in deck order, newline-joined: sha256 `9a54650186c5ccab2b709e4b11a23b58799a3dbcf3b1612b5df9809f674e7a0f` (**recomputed, match**). All 15 per-string hashes and lengths independently recomputed and matching (§5)                           |
| SEO package           | `.agents/work/seo/progress-log.md` — sha256 `424a44ff4a56e6b2e930948fefe8d3bfcdab81816a1a1731070a815768c1c1ae`, 35,380 bytes · 395 lines; verdict `approved as proposed`; it records the same deck hash as this gate                                                                 |
| Continuity            | **Merged with this role** (2026-09-17). No separate card; the chronology, canon-consistency, plausibility and spoiler rows are this record's own review rows (§3, rows 2–6)                                                                                                          |
| Published record      | `001-project-announcement.mdx` sha256 `923a12d8…` (4,832 B) · `002-payload-selection.mdx` sha256 `7b69bd7f…` (7,722 B) · `003-vehicle-design.mdx` sha256 `51f2ee69…` (5,476 B) — all three `publication: published`, measured 15:39 and 15:41 CEST                                   |
| Live wording today    | the round-1 strings are the wording served today: eyebrow `Progress log`, the 145-character round-1 description, step 2 `Current progress`, step 3 `Later`, one link on step 1 (§9.1)                                                                                                |
| Gate inputs re-hashed | 10 inputs at 15:39:18 and again at 15:41:39 CEST; 15/15 string hashes recomputed from `BLOCK-8.1`/`BLOCK-8.3`. Nothing moved between the two readings (§9.2)                                                                                                                         |
| Skills applied        | `editorial-review` (project), with `copy-editing` and `brand-voice` on the copy rows                                                                                                                                                                                                 |
| Verdict written       | 2026-09-17, 15:37–15:47 CEST, against the shared working tree, HEAD `aa71714`, `origin/main` `e67b970` (confirmed by `git ls-remote`, not only by the local ref)                                                                                                                     |
| Status                | **`approved`** — editorial gate and recorded release decision for this wording. No Red Horizon canon is approved (§13)                                                                                                                                                               |

**Path substitution recorded.** The card names `.agents/work/reviews/progress-log.md`; that is this
file, the same path every earlier pass on this slug used. No substitution was needed.

---

## 0. Revision history

This is the **second** review record for the `progress-log` slug. It supersedes revision 1 and is
additive: revision 1's full text stays recoverable from git at commit `c470741`
(`git show c470741:.agents/work/reviews/progress-log.md`), and its identity is recorded here so that a
later reader does not read the hash change as tampering.

| Revision | Card         | Record identity                                                                                                                   | Verdict                                                            | What it judged                                                                      |
| -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| 1        | `t_bd1fd539` | as delivered `803bd15c…`; as committed at `c470741` `a9d923b6f987cf36e5641b50c3b3df0b575654107f80b29fdc8e807524ad73a1` (58,027 B) | `approved`, with one rendering condition (R1)                      | deck `9d2a14e6…` (28,904 B, 374 lines), written when **only 001 was published**     |
| 2        | `t_c4bd0c0d` | this file                                                                                                                         | `approved`, R1 restated, release decision recorded (this revision) | deck `8fc9a181…` (59,689 B, 681 lines) against the **expanded** record, 001+002+003 |

**What moved around the gate object.** The deck is a different revision of the same file (the writer
revised it in place), the SEO pass was re-run against it, the record grew from one published article
to three, and the published articles gained a `simulatedDate` frontmatter line while this gate ran
(§8.3, §11 O4). The _frozen strings_ are the gate object, and revision 2's independence from revision
1 is stated per row: this gate re-derived the block hashes, the string hashes, the claim trace, the
surface and the confidentiality scan from the deck and the articles themselves, and carried no
revision-1 row forward unverified.

**Closure state of revision 1's observations** (recorded so a reader of revision 1 is not left
guessing):

| Rev-1 observation                                                              | State in round 2                                                                                                                                                                       |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A — the "published steps link" clause was a live maintenance obligation        | **Closed by removal.** The clause is gone from the description (deck §5 D3); the obligation now lives in the frozen file-header comment and the deck's §6 trigger, both verified in §7 |
| B — two near-identical announcement labels on one page                         | **Carried** (this record §11 O1), re-measured from the built page's full anchor inventory                                                                                              |
| C — deck heading counts four decisions, record lists five                      | **Carried** (this record §11 O5): round 2 records six rows, so the count question is live again                                                                                        |
| D — distributive-number looseness in the description                           | **Closed by replacement.** The clause is gone (§5 row 3)                                                                                                                               |
| E — description's first sentence echoed the h2                                 | **Closed by replacement.** The new first sentence does not echo `One step at a time.` (§5 row 3)                                                                                       |
| F — one `surface vehicle` remains on the page by decision                      | **Carried unchanged** (`missionIntro.description`, this record §11 O6)                                                                                                                 |
| G — deck attributed a whole D1 clause to step 2                                | **Not re-created**: the round-2 deck attributes its decisions per item (§4)                                                                                                            |
| H — register mix across the three states                                       | **Superseded**: two of the three labels changed (`In hand`, `Ahead`); the mix is re-judged in §5 rows 4/8/12 and §11 O7                                                                |
| I — internal stage vocabulary surviving in source comments                     | **Partly closed**: `steps.ts`'s header comment is replaced in the same edit (§7); `facts.ts` and `navigation.ts` comments stand by design (§11 O8)                                     |
| J — the new link had no style rule                                             | **Closed**: `ProgressLog.astro` carries `.timeline-link` and its measured rationale today (file sha256 `68a4b4d5…`)                                                                    |
| K — the earlier 001 continuity row and the two pre-existing homepage questions | **Carried, not reopened** (§11 O9): the grid's `To be announced` rows stay routed to `about-method.md` §15 row 5 / `t_a0ee9abf`                                                        |

---

## 1. Scope and method

This gate judges one thing: **the fifteen string literals the dev card will transcribe** (§8.1,
§8.3), and, for every material claim inside them, whether the _published_ record carries it. It also
judges the surrounding surfaces the card names: the link targets, the section's outline, the
`facts.ts` value the deck decides not to change, the dev card's scope, and the fail-closed state of
the public build.

Method, in order:

1. Re-hashed the deck, verified it equals the hash the SEO pass recorded, then extracted §8.1 and
   §8.3 and recomputed `BLOCK-8.1`, `BLOCK-8.3`, `STRINGS-15` and each of the 15 per-string hashes
   and lengths **myself** — not by trusting the deck's §10.13 table (§5).
2. Read the three published articles in full and traced every material claim to a line (§6). The
   trace was re-derived for 002 and 003, which did not exist when revision 1 was written.
3. Read the live source of the section (`steps.ts`, `ProgressLog.astro`, `SectionHeading.astro`,
   `navigation.ts`, `facts.ts`, `index.astro`) and the built homepage; measured the rendered section,
   the heading outline, the anchor inventory and the R1 parity (§9).
4. Re-ran the read-only guard probe (`checkDist()`, `listRoutes()`, `scanSourceForGatedReferences()`)
   and a marker scan over the frozen strings and the built page (§9.4, §10).
5. Re-read the gate inputs and `git status` immediately before writing this verdict, twice.

Scratch tools, all outside the repository, all read-only, all re-runnable:
`/tmp/t_c4bd0c0d/{verify.py,verify2.py,verify3.py,surface.py,final_check.py,guard-probe.mjs,sec_local.py,diff_chars.py,board2.py,board3.py}`.

---

## 2. What this approval covers — and what it does not

**Covers.** The fifteen rendered literals of §8.1 + §8.3, exactly as hashed in §5, together with the
judgement in §4 that every decision affecting a rendered string is sound, and the release decision in
§13.

**Does not cover.**

1. `facts.ts` — the deck's §8.2 freezes **no** change and adds no literal. This gate confirms the
   panel value still agrees with the log's `current` flag (`Mission architecture`), and judges nothing
   else in that file.
2. Rendering. **R1 (this record §7) is a condition on the dev's implementation**, not a wording
   change: all three step details must keep identical computed styling once step 2 carries a link.
3. The prose of the working papers. Two working-paper statements are stale (§8.3, §11 O4); neither
   reaches a public string, and this gate may not edit the deck.
4. Canon. No Red Horizon canon is approved here, and no claim is settled that the released record does
   not already carry (§13).

---

## 3. Review table

| #  | Check                                                                | Verdict         | Evidence                                                                                                                                                                                                                                        |
| -- | -------------------------------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Deck unchanged since the SEO pass, re-hashed at verdict time         | PASS            | `8fc9a181…` at 15:39:18, at 15:41:39 and immediately before this verdict; equals the SEO package's recorded deck hash                                                                                                                           |
| 2  | Chronology: the section's steps stay in the record's order           | PASS            | Step 1 `Announced` ← 001 (`status: Programme announced`); step 2 `In hand` ← 002 + 003 (`002:4 In selection`, `003:4 Design frozen`, `003:71`); step 3 `Ahead` ← no published article. The rows' order matches articles' `order: 1/2/3`         |
| 3  | Canon consistency: every material claim traces to released material  | PASS            | 17-row trace re-derived from 001/002/003 this round (§6). No claim rests on internal canon and none is asserted beyond what an article states                                                                                                   |
| 4  | Plausibility: no invented state, no completion claim                 | PASS            | The highlighted step's sentence is 003's own closing sentence in substance (`003:71`); no completion verb, percentage or schedule claim appears on any step                                                                                     |
| 5  | Spoiler safety: no later-step fact, no withheld class                | PASS            | 0 hits for every withheld-class probe over the 15 literals (§10); no step-004 material; the only digit token in the whole payload is `2031.` on step 1                                                                                          |
| 6  | No withheld _marker_, and the guard's markers are the only ones held | PASS            | `gatedTextMarkers` (2 values, read from `guards.mjs` at scan time) — 0 hits on the deck and on the 15 literals; positive control fires 63× in `.worktrees/` source packs (§10)                                                                  |
| 7  | Copy: voice, grammar, register, precision (15 rows)                  | PASS            | §5, one row per literal, against `copy-editing` and `brand-voice`                                                                                                                                                                               |
| 8  | Accessibility: anchor text, outline, no image alt recommended        | PASS            | §5 rows 7/11 and §11 O1: both anchors describe their destination out of context and are distinct from the news card's labels on the same page; the section has no `<img>` (markers are CSS div/span); the `h2` + three `h3` outline is intact   |
| 9  | No step-002/003 fact beyond what those articles published            | PASS            | §6 — every step-2 clause is a published 002/003 sentence; nothing about the launcher, the landing site, an instrument or the vehicle's designation appears                                                                                      |
| 10 | Date audit per step                                                  | PASS            | §8.1: step 1 carries 001's own sentence (cited); steps 2 and 3 carry no date; no date invented or rounded; the grid's date rows stay out of scope and escalated                                                                                 |
| 11 | Link coverage: each `link` resolves to a published route             | PASS            | `/news/001-project-announcement/` and `/news/003-vehicle-design/` are present in `dist/` and listed; `/news/002-payload-selection/` exists but is intentionally not linked from the roadmap; step 3 has no link; no `004-*` route exists (§9.3) |
| 12 | `href` from `routes.newsArticle(slug)`, never a hand-typed path      | PASS            | Deck §8.1 uses `routes.newsArticle('001-project-announcement')` / `('003-vehicle-design')`; `navigation.ts:13` defines `/news/${slug}/`; the dev card requires the same                                                                         |
| 13 | SEO prerequisite on the revised deck                                 | PASS            | `.agents/work/seo/progress-log.md` §10 verdict `approved as proposed` (7/7 checks); hash `424a44ff…`; deck hash agrees; no required wording change                                                                                              |
| 14 | The SEO's own metadata question answered                             | PASS            | SEO §4.3 keeps the homepage `<title>` and meta description unchanged; measured live and in `dist/`: exactly 1 meta description, title `Red Horizon \| A Mars mission in progress`; no canonical while `SITE_URL` is unset                       |
| 15 | Dev scope check: deck §8 is what the dev transcribes, R1 carried     | PASS with cond. | §7. Deck §8.1/§8.3 against the dev card body: no divergent string; two loose phrasings recorded as §11 O2/O3, neither able to override the card's own "transcribe verbatim" rule                                                                |
| 16 | Fail-closed state of the build, measured read-only                   | PASS            | `checkDist()` 0 offences; `scanSourceForGatedReferences()` 0 offences; 9 routes; no `004-*`; the proposed strings are **absent** from `dist/` (0 occurrences each) — the wording is not live (§9.1, §9.4)                                       |
| 17 | No `website/` file edited by this gate                               | PASS            | `git status --short website/` shows only the three articles' in-flight `simulatedDate` lines, owned by another card (§8.3); no source file touched by this gate                                                                                 |

**Every row passes. Two rows carry a condition or a movement that must be read with them:** row 15
(the dev card's phrasings, §11 O2/O3) and row 16 (the built page is the round-1 wording, so this gate
judges proposed copy, not a live surface — exactly as revision 1 did).

---

## 4. The decisions, judged as decisions

| #  | Decision                                                                                                         | Judgement                                         | Why                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| D1 | eyebrow `Progress log` → `Mission roadmap`; nav label `Progress` → `Roadmap`; section id stays `timeline`        | **Sound**                                         | The human's complaint is register, not content: `Progress log` names a record-keeping artifact, `Mission roadmap` names the course. Moving the nav label with it is necessary, because the header is the same section's other reader-facing name. Keeping `id="timeline"` is right: it is internal, the anchor is generated from one definition (`navigation.ts:63`), and no article prose links to it. `Roadmap` (7 chars) is one character _shorter_ than `Progress` (8), so the measured 187 px header row cannot overflow                                                                                                                                                  |
| D2 | three rows; states `Announced` / `In hand` / `Ahead`; `current: true` stays on step 2; step 2 links **003** only | **Sound**                                         | `Current progress` and `Later` were the changelog register the human rejected; the replacements are positional and both words are already the page's (`the work in hand`) or the record's (`are still ahead of us`, `001:75`). The flag staying on step 2 is the deck's sharpest branch and it is the one the released record supports: `003:71` says the mission around the settled rover design is still being assembled, and no released sentence says surface operations are under way. One link per step follows from the frozen `link` field (one article), and 003 is the right target because it carries the step's lead claim _and_ the onward link to 002 (`003:63`) |
| D3 | description replaced with the two-sentence reading rule                                                          | **Sound**                                         | It states what the list is, in what order, and what the highlight means — and promises no maintenance mechanic. It also closes revision 1's observations A, D and E (§0). Measured 132 characters of visible prose, not a meta description (the page carries exactly one `<meta name="description">`)                                                                                                                                                                                                                                                                                                                                                                          |
| D4 | step 1 gains 001's own sentence; steps 2 and 3 carry no date                                                     | **Sound, with the record-date movement recorded** | The sentence is 001's verbatim (`001:66`), says _schedule frame_ and _launch window_ rather than launch date, and is reaffirmed by `002:105–106`. Two of three steps correctly carry no date; the deck's own §11(e) escalation is where the newly published record dates belong (§8.3)                                                                                                                                                                                                                                                                                                                                                                                         |
| D5 | `facts.ts` `Current state` — no change                                                                           | **Sound**                                         | Under D2 the highlighted step is still step 2 and still titled `Mission architecture`, and `facts.ts:23` already publishes exactly that value. Editing it would be churn and would risk the two surfaces drifting apart. The drop condition is unchanged and not triggered (§11 O8)                                                                                                                                                                                                                                                                                                                                                                                            |
| D6 | new: the trio is eyebrow `Mission roadmap` / nav label `Roadmap` / section id `timeline`                         | **Sound**                                         | The deck does not claim the three must match word for word, and they should not: the eyebrow names the section, the nav label has to fit the header, and the id names the component's form. The naming question is escalated to the human (§12 c)                                                                                                                                                                                                                                                                                                                                                                                                                              |
| D7 | new: keep the static curated array; do not drive the list from the published collection                          | **Sound as a scope decision**                     | It is a planning-level choice the deck is entitled to make, and it is the smaller change: the defect was a stale string, not a missing mechanism. A generated list would promote any future published item into a "step" without an editorial decision — the failure mode this gate exists to prevent                                                                                                                                                                                                                                                                                                                                                                          |
| D8 | new: the maintenance trigger is corrected, not merely restated                                                   | **Sound**                                         | The round-1 header comment said "move the current flag and add the link when a step's article is published"; 002 and 003 both published and the flag correctly stayed. The corrected rule — add a link on publication; move the flag only when the record carries the _next_ step's opening — is what the frozen block now carries, and it is what this round actually did (§7)                                                                                                                                                                                                                                                                                                |

---

## 5. Copy gate — the fifteen literals, one row each

Hashes and lengths recomputed from `BLOCK-8.1` / `BLOCK-8.3` by this gate; all 15 match the deck's
§10.13 table, all 15 are **ASCII**, and `STRINGS-15` =
`9a54650186c5ccab2b709e4b11a23b58799a3dbcf3b1612b5df9809f674e7a0f`.

| #  | Literal (chars)                                                                                                                                          | Hash (first 16)    | Verdict | Judgement                                                                                                                                                                                                                                                                               |
| -- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | eyebrow `Mission roadmap` (15)                                                                                                                           | `8458f7421f051cac` | PASS    | Names the section's content in words a first-time reader already has; not the changelog register; not a heading level (`SectionHeading.astro:15` renders it as a `<p>`)                                                                                                                 |
| 2  | title `One step at a time.` (19)                                                                                                                         | `e53974be2c9c34d6` | PASS    | Unchanged, dates nothing, carries the roadmap metaphor in the section's own voice; the human's complaint does not attach to it                                                                                                                                                          |
| 3  | description `The programme's steps, in the order it reaches them. The highlighted step is the work in hand; the step after it is not settled yet.` (132) | `7aa33eab66c56329` | PASS    | True against the record (highlighted = step 2; the step after it = step 3, unreported). Plain, scannable, no unsupported certainty, no grandeur. The ellipsis in "the order it reaches them" is readable and consistent with the label `In hand` (§11 O9)                               |
| 4  | step 1 state `Announced` (9)                                                                                                                             | `07dfab861df1deb5` | PASS    | The record's own word (`001:4 status: Programme announced`)                                                                                                                                                                                                                             |
| 5  | step 1 title `Coalition and purpose` (21)                                                                                                                | `f78ba01c9cf090a4` | PASS    | Unchanged; both nouns are 001's (ten teams; a named purpose)                                                                                                                                                                                                                            |
| 6  | step 1 detail (184)                                                                                                                                      | `baeba9cdbfed08eb` | PASS    | Claims 1–4 of §6, all published; the added sentence is 001's verbatim; sentence length and register hold                                                                                                                                                                                |
| 7  | step 1 link label `Read the announcement` (21)                                                                                                           | `649e96eb1857df08` | PASS    | Describes action plus document type; not "read more", not a bare URL; unambiguous out of context while exactly one announcement is published; in context it sits inside the step's `<li>` with its state, title and detail (WCAG 2.4.4). §11 O1 carries the hero's near-neighbour label |
| 8  | step 2 state `In hand` (7)                                                                                                                               | `3cfbe4b0a512e082` | PASS    | Positional, no timing, no completion verb; matches the description's own phrase; replaces the rejected `Current progress`                                                                                                                                                               |
| 9  | step 2 title `Mission architecture` (20)                                                                                                                 | `c993bf2460fc7ba6` | PASS    | Kept against the card's suggested rename, correctly: the released record describes the _mission-level_ work as open (`003:71`) while the vehicle half is settled, so a title naming only the published parts would hide the open half                                                   |
| 10 | step 2 detail (122)                                                                                                                                      | `10f90a089a652ef4` | PASS    | Three clauses, each published (§6 rows 5–7); the closing clause is 003's own sentence with the pronoun resolved; no vehicle designation, no instrument, no provider                                                                                                                     |
| 11 | step 2 link label `Read the rover design` (21)                                                                                                           | `35b9a90c97211b26` | PASS    | Subject-bearing, describes the destination; distinct from the news card's own `Rover design briefing` measured on the same page                                                                                                                                                         |
| 12 | step 3 state `Ahead` (5)                                                                                                                                 | `a8f94e9869fad501` | PASS    | Positional; the word is the record's register (`001:75 are still ahead of us`); replaces the rejected `Later`                                                                                                                                                                           |
| 13 | step 3 title `Surface operations` (18)                                                                                                                   | `90056cbe550c04f0` | PASS    | Unchanged; names the phase without dating it or claiming it                                                                                                                                                                                                                             |
| 14 | step 3 detail (78)                                                                                                                                       | `9d986123636079eb` | PASS    | Describes the work in the gerund, claims no progress; supported by `001:30–40`, `003:18`, and already public in `facts.ts` Objective                                                                                                                                                    |
| 15 | nav label `Roadmap` (7)                                                                                                                                  | `92375f997ffe65ab` | PASS    | Points at the unchanged anchor; one character shorter than the string it replaces; same label in header and footer because one definition renders both                                                                                                                                  |

`BLOCK-8.1` = `a6b774eb20e26c13eaf9450362f3a56ad41cf02d4c848f645e5a404390edaf45` (2,035 bytes) —
**recomputed, match**. `BLOCK-8.3` =
`6773c7d688642088949826a03fed05b9f54d34de42e2efdf3b18e9dd319bb280` — **recomputed, match**. The two
strings outside `progressHeading` / `progressSteps` are the nav label (§8.3) and the two link labels;
the `facts.ts` line in §8.2 adds no literal.

**Register and voice.** Informed, composed, candid, specific, modest: the copy states what is settled
and what is not, sources every figure it names, and carries no heroic or corporate register, no
unexplained acronym, and no implication that a real agency endorses the programme.

---

## 6. Claim → source trace (re-derived this round)

| #  | Claim in the frozen copy                                                          | Source (published, line numbers as they stand **today**)                                                                                                           | Carried by  |
| -- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 1  | Ten national programme teams                                                      | `001:24–27` (ten teams named, counted)                                                                                                                             | 001         |
| 2  | one uncrewed lander and rover                                                     | `001:26` ("build a single uncrewed Mars lander and rover together")                                                                                                | 001         |
| 3  | a mission to work out how water changed an ancient equatorial landscape           | `001:30–31`                                                                                                                                                        | 001         |
| 4  | "The schedule frame is a launch window in 2031."                                  | `001:66` verbatim; `001:7` (summary frontmatter); reaffirmed `002:105–106`                                                                                         | 001         |
| 5  | the first rover's design is frozen                                                | `003:4` (`status: Design frozen`); `003:17` ("it now has its first surface vehicle design"); `003:71` ("The rover design is settled")                              | 003         |
| 6  | the payload scope is agreed                                                       | `002:21–22` ("has now agreed a payload scope for Red Horizon One…"); recapped `003:62–65`                                                                          | 002, in 003 |
| 7  | the mission around the rover is still being assembled                             | `003:71` verbatim in substance                                                                                                                                     | 003         |
| 8  | the highlighted step is the work in hand                                          | `003:71`; `002:4` (`status: In selection`); `002:23–24` ("is still open, and the programme is treating it that way")                                               | 002 + 003   |
| 9  | using the rover on the surface to survey terrain and examine rocks in context     | `001:30–40` (unit mapping and the rover's comparison role); `003:18` ("maps local terrain, investigates rocks in context"); already public in `facts.ts` Objective | 001 + 003   |
| 10 | `Announced` as step 1's state                                                     | `001:4`                                                                                                                                                            | 001         |
| 11 | `Ahead` as step 3's state, and the step's title                                   | positional site copy; no dated or completed claim; the word is the record's register (`001:75`)                                                                    | site copy   |
| 12 | Step 1's link target exists and is published                                      | 001 `publication: published`; route present in `dist/` and listed on `/news/`                                                                                      | site        |
| 13 | Step 2's link target exists and is published                                      | 003 `publication: published`; route present in `dist/` and listed on `/news/`                                                                                      | site        |
| 14 | 003 carries the onward link to 002                                                | `003:63` (`/news/002-payload-selection/`)                                                                                                                          | 003         |
| 15 | the nav label points at the existing section anchor                               | `navigation.ts:63` + `ProgressLog.astro:6` (`id="timeline"`); 2 anchors per built page (header + footer)                                                           | site        |
| 16 | "The highlighted step is the work in hand; the step after it is not settled yet." | reading rule over the frozen rows: the highlighted row is step 2 (`current: true`), the row after it is step 3, which no published article reports                 | site copy   |
| 17 | the eyebrow, the title and the description state no programme fact                | site copy; no noun in them is a canon claim                                                                                                                        | site copy   |

**Citation drift — recorded, not a failure.** Every body-line citation in the deck is now one line
early (two for a sentence that wraps a line break), because the three articles gained a
`simulatedDate` frontmatter line after the deck was written (§8.3). Frontmatter citations are exact.
This gate re-located all 20 cited passages in the current files: **none is missing and none is
misquoted** (the largest delta is +2, from a wrapped sentence).

---

## 7. Dev scope check, and the rendering condition R1

**The dev needs no wording decision.** The deck's §8.1 and §8.3 are the frozen bytes; the dev card
names `.agents/work/drafts/progress-log.md` §8 as their source; and every value the dev card body
itself states agrees with the deck — the interface (including the optional `link` field it says
"already exists … reuse it": it does, `steps.ts:20`), the `routes` import, the `facts.ts` value
(`Mission architecture`, unchanged), and the corrected header-comment rule. Two loose phrasings are
recorded as non-blocking observations (§11 O2, O3); neither can override the card's own "transcribe
it verbatim" instruction, which is the rule the dev is told to apply if the two ever disagree.

**R1 — the condition carried from revision 1, restated for round 2.** The step that gains a `link`
must not render its detail paragraph differently from its neighbours. Measured by this gate on the
**built** page served locally at 15:45 CEST: all three details report the same computed style —
`font-size 15.2px`, `color rgb(220, 198, 177)`, `max-width 480px`, rendered width 480 px — including
step 1, **which already carries its link today**. The rule is class-keyed (`.timeline-detail`,
`ProgressLog.astro:113`, with the measured rationale in the comment above it) rather than positional,
so moving the link to step 2 and adding a second one cannot reintroduce the round-1 defect **unless
the dev changes those selectors**. The dev card carries R1 in its acceptance criteria and in its
preview measurement; this gate approves on that condition and on nothing else about the rendering.
The `is-current` marker accent is unchanged and measured too (`rgb(252, 160, 66)` on step 2,
`rgb(123, 167, 250)` on steps 1 and 3, i.e. `--rh-sun-core` and `--rh-earth-blue`).

**Maintenance-trigger check.** The corrected rule in the frozen header comment matches what this round
actually did and what the deck's §6 records: steps 1 and 2 carry links and the flag stayed on step 2 —
verified by reading the frozen block and the deck's §6, not by trusting a summary.

---

## 8. Date audit

### 8.1 Per step, against the released record

| Step          | Date sentence on the section                                         | Source                                                                       | Judgement                                                                                                                                                          |
| ------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1 `Announced` | "The schedule frame is a launch window in 2031." (verbatim from 001) | `001:66`; `001:7` (summary); reaffirmed `002:105–106`                        | Correct. It is the record's own sentence, it states a _schedule frame_ and a _launch window_, not a launch date, and it implies no event the step has not released |
| 2 `In hand`   | **no date**                                                          | `002:106` ("No launch or landing date is being stated."); `003:70`; `003:71` | Correct. The record releases no mission date for this step                                                                                                         |
| 3 `Ahead`     | **no date**                                                          | nothing in 001–003 dates the surface phase                                   | Correct. The step is not reached, and nothing is implied                                                                                                           |

Not used, deliberately: the budget's "constant 2026 euros" (`001:66–67`, a currency base rather than a
mission date), the surface-life durations (`001:68–72`), and `docs/SCENARIO.md`'s locked calendar and
`docs/timeline/` (private). The only digit token in the whole 15-literal payload is `2031.`.

### 8.2 It cannot be read as a withheld mission date

The section contains no launch date, landing date, launch vehicle, provider or landing site, and
states none. `003:70`, published, itself says no launch vehicle has been named, no launch date has been
stated and no landing site has been announced, so the section cannot contradict the record it sits
beside.

### 8.3 Movement recorded while this gate ran: the articles now carry `simulatedDate`

When this gate started, the record it bounds was the one the deck describes. During the run a
concurrent card (`t_531698d9`, `mars-ai-simulator-editor`, **running**) added a `simulatedDate` line
to all three published articles in the shared working tree, and a second card (`t_1059c973`,
`mars-ai-simulator-dev`, `todo`) will build and push them:

| Article | `simulatedDate` measured in the working tree | Milestone source                        |
| ------- | -------------------------------------------- | --------------------------------------- |
| 001     | `2026-10-12`                                 | claimed by that card, not verified here |
| 002     | `2027-03-19`                                 | claimed by that card, not verified here |
| 003     | `2029-07-13`                                 | claimed by that card, not verified here |

**What this changes for this gate: nothing in the strings.** The frozen copy states no date on steps 2
and 3, and the new values are _record dates_ — the in-fiction date on which each article was written —
not mission dates. They falsify no sentence, they stay in article order, and they are consistent with
step 1's 2031 window. Two consequences are recorded rather than acted on:

1. The deck's §5/D4 note ("no published article carries the field yet", measured at 15:25 CEST) and
   its §11(e) framing are now overtaken — working-paper statements, not public strings (§11 O4).
2. `simulatedDate` assignment and verification are this role's own business **on that card**, not this
   one. This gate neither duplicates nor pre-empts that work; it records that the values are a second
   released date source a _later_ homepage round could draw on for the human's "rough dates" ask
   (§12 e).

Those three frontmatter lines are the only `website/` changes in `git status`, and they belong to that
card; this gate edited nothing under `website/`.

**Post-verdict addendum (added 15:46 CEST, after this verdict was written and before it was filed).**
While this gate was finishing, that second card **published** the values: `t_1059c973` committed
`aab1a94` ("publish the three simulated record dates released on t_531698d9 …") at 15:44:06 CEST, and it
is now the tip of `origin/main`, where `e67b970` (15:31:11) stood when this gate measured at 15:41. The
articles' own bytes did not move with the commit — their mtimes are still 15:37:11 and their three
`sha256` values are the ones tabulated in §9.2 — so the record dates are now _pushed_, not merely
present in the working tree. The local `dist/` is still the 15:33:26 build and therefore still predates
them. **No row of this review changes:** the gate object is the deck and its two frozen blocks,
re-hashed after this addendum and unchanged (`8fc9a181…` / `a6b774eb…` / `6773c7d6…`), and no frozen
string carries or depends on a record date. The values' own verification (that each sits on a locked
milestone in `docs/SCENARIO.md`) remains that card's work and is not claimed here.

---

## 9. Surface measurements

### 9.1 What is live today

The round-1 wording is live: eyebrow `Progress log`, the 145-character round-1 description, step 2
`Current progress`, step 3 `Later`, one link on step 1 (`Read the announcement`). No `Mission roadmap`,
`In hand`, `Ahead` or `Read the rover design` appears anywhere in `dist/` (0 occurrences each), so
this gate judges proposed copy — exactly as revision 1 did.

### 9.2 Inputs, hashed at two points in the run

| Input                                             | Value                  | At 15:39:18 | At 15:41:39 |
| ------------------------------------------------- | ---------------------- | ----------- | ----------- |
| `.agents/work/drafts/progress-log.md`             | `8fc9a181…` (59,689 B) | unchanged   | unchanged   |
| `.agents/work/seo/progress-log.md`                | `424a44ff…` (35,380 B) | unchanged   | unchanged   |
| `website/src/features/progress/steps.ts`          | `f01ecaf8…` (1,946 B)  | unchanged   | unchanged   |
| `website/src/features/progress/ProgressLog.astro` | `68a4b4d5…` (4,064 B)  | unchanged   | unchanged   |
| `website/src/lib/navigation.ts`                   | `1fd3bc99…` (3,099 B)  | unchanged   | unchanged   |
| `website/src/features/mission/facts.ts`           | `7cf85ec8…` (1,020 B)  | unchanged   | unchanged   |
| `website/dist/index.html`                         | `a455ca48…` (17,119 B) | unchanged   | unchanged   |
| `website/news/001-…mdx`                           | `923a12d8…` (4,832 B)  | unchanged   | unchanged   |
| `website/news/002-…mdx`                           | `7b69bd7f…` (7,722 B)  | unchanged   | unchanged   |
| `website/news/003-…mdx`                           | `51f2ee69…` (5,476 B)  | unchanged   | unchanged   |

### 9.3 Route and link coverage (read-only)

`listRoutes()` → `/404.html`, `/about/index.html`, `/googlef5c43421bd049659.html`, `/index.html`,
`/news/001-project-announcement/index.html`, `/news/002-payload-selection/index.html`,
`/news/003-vehicle-design/index.html`, `/news/index.html`, `/wiki/index.html`. No `004-*` route, so
step 3's "no link" is correct and no step can point at a draft. The `#timeline` anchor resolves twice
on each built page (header and footer, one definition), and `Roadmap` is one character shorter than
the string it replaces, so the anchor cannot break and the measured header row cannot overflow.

### 9.4 Guard probe (read-only; nothing pruned)

`checkDist()` → **0 offences**; `scanSourceForGatedReferences()` → **0 offences**. Called by import
from a scratch script outside the repository, deliberately **not** through `npm run build` or the
postbuild `check-dist`, which _prunes_ offending files from the shared `dist/`.

### 9.5 Rendered surface, measured on the built page served locally

Section outline: `H2 One step at a time.` (`id="timeline-title"`, `aria-labelledby` intact) with three
`H3` step titles; the page outline runs `h1 → h2 → h3` with no skipped level and no duplicate heading
text; the eyebrow is a `<p>`, so this change introduces no heading. Anchors inside the section: one
today (`Read the announcement`). Full homepage anchor inventory of every surface, for the round-2
comparison: `Red Horizon` → `/#top`; `News` ×2 → `/news/`; `Wiki` ×2 → `/wiki/`; `Mission` ×2 →
`/#mission`; `Progress` ×2 → `/#timeline`; `About` → `/about/`; `Read the first announcement →` →
`#updates`; `Announcement summary` → `/news/001-…/`; `Payload selection briefing` → `/news/002-…/`;
`Rover design briefing` → `/news/003-…/`; `Read the announcement` → `/news/001-…/`. After the change
the only new pairs are `Read the rover design` → `/news/003-…/` (distinct from `Rover design briefing`
on the same page) and the renamed nav label.

### 9.6 Measurement integrity: the "live origin" is not attributable during this window

The hostname `https://mars-ai-simulation.janpolacek.workers.dev/` was read four times while this gate
ran, and it did not stay still:

| Time (CEST)  | Response                                                                   | Matches                                                                                                                          |
| ------------ | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ~15:38       | 17,119 bytes                                                               | the shared checkout's `website/dist/index.html` (`a455ca48…`, built 15:33:26)                                                    |
| ~15:41       | 17,386 bytes                                                               | nothing measured                                                                                                                 |
| ~15:41–15:43 | 17,397 bytes, sha256 `eed47af2…`                                           | the **running card `t_e4cc3b9f`'s uncommitted worktree build** (`.worktrees/t_e4cc3b9f/website/dist/index.html`, built 15:40:36) |
| 15:43        | progress section 2,146 B `f8e54abb…`; newsroom section 4,798 B `20b273a7…` | byte-identical to the same sections of the shared checkout's build                                                               |

The two carousel CSS rules that distinguish those builds exist in **no commit** — `git ls-remote` puts
`origin/main` at `e67b970` (and `main` is the only remote head), while `git log --all` over
`NewsCard.astro` ends at `aa71714`; the rules live only in that worktree's modified file. So during
this window the hostname served the newest local build on this machine rather than a fixed commit.
**Consequence for this gate: none** — it judges the deck's frozen strings against the released
articles and the local build's route/section surfaces, and the section under gate is byte-identical on
every surface measured. **Consequence for the project:** a "verified live, byte-for-byte" claim made
in such a window cannot be attributed to a commit on that evidence alone; recorded as §11 O10 with the
site-deployment owner, and **not** raised as a blocking finding here.

### 9.7 No deploy, no build, no route change by this gate

No build, no preview of the shared tree, no `wrangler`, no push, no `publication` flip. `dist/` was
read, never written; the static server this gate used served a read-only copy of `dist/` on
`127.0.0.1` and was stopped after the R1 measurement.

---

## 10. Confidentiality scan

Pattern lists read from `website/scripts/guards.mjs` **at scan time**, so no marker value is copied
into this record. Withheld classes are named by class only.

| Target                                                                                                                                                                                    | Result                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `gatedTextMarkers` (2 values) over the whole deck                                                                                                                                         | **0 hits**                                                                                       |
| `gatedTextMarkers` over the 15 frozen literals                                                                                                                                            | **0 hits**                                                                                       |
| Positive control: the same markers over `.worktrees/` source packs                                                                                                                        | **63 files hit** — the scan is live, not a silent no-op                                          |
| Withheld-class probes over the 15 literals (vehicle designation, region name, coordinate tokens, agency names, launcher / provider / spaceport, instrument or spectrometer, landing site) | **0 hits for every probe**                                                                       |
| `checkDist()` over `website/dist/`                                                                                                                                                        | 0 offences — no withheld file, name, stem or content hash, and no marker in any served text file |
| `scanSourceForGatedReferences()` over `website/src/`                                                                                                                                      | 0 offences — no reference into a withheld path                                                   |

**This record contains no gated marker and no withheld value.** Withheld classes are named by class;
the private timeline and the locked calendar are not quoted; the scratch scanners live outside the
repository under `/tmp/t_c4bd0c0d/`.

**Carried coverage gap (not this card's to fix — §11 O11).** The two guard markers are landing-region
coordinate fragments: a launcher, provider or spaceport name in public copy would fail **no** build
guard. That is already recorded on the step-004 gate ledger with a named owner; this gate repeats it
only because the homepage is a public surface a future round could edit.

---

## 11. Non-blocking observations (explicit; each with an owner)

None of these is a material failure and none changes a frozen string. They are recorded so that no
later reader has to rediscover them.

- **O1 — carried from revision 1: the hero and the roadmap both say "announcement".** Measured from
  the built page's full anchor inventory (§9.5): `Read the first announcement →` → `#updates`, and
  `Read the announcement` → `/news/001-…/`. Two honest labels, different targets, different surfaces.
  The new link adds no ambiguity of its own (`Read the rover design` names its subject), and both
  roadmap anchors sit inside their step's `<li>`, so WCAG 2.4.4 is met in context. **Owner:** a future
  homepage pass, if the two are ever reconciled. **Not material.**
- **O2 — the dev card says "and/or" where the deck links 003 only.** Its requirement 1 offers
  `routes.newsArticle('001-…')`, `('002-payload-selection')` and `('003-vehicle-design')` "and/or",
  while the frozen block links step 2 to 003 alone and step 3 to nothing. The card's own first rule
  ("Transcribe it verbatim; do not reword … or re-scope a string") and its acceptance criterion ("No
  step links to an unpublished article") resolve it, and the deck is unambiguous. **Owner:**
  `mars-ai-simulator-dev` on `t_cc2dfd29` — read §8.1 as the source of truth.
- **O3 — the dev card's validation asks for "at least one" roadmap article link.** The frozen deck
  links **two** (steps 1 and 2). A dev satisfying the letter of that bullet could ship one. **Owner:**
  `mars-ai-simulator-dev` on `t_cc2dfd29`; the acceptance criterion ("deck §8 strings are byte-for-byte
  what the files contain") is the binding one.
- **O4 — the deck's `simulatedDate` statements are overtaken.** §5/D4's note and §11(e)'s framing were
  written before the record-date card ran; the three articles carry the field now (§8.3). Working paper
  only; no public string depends on it. **Owner:** the writer, if this deck is ever revised again.
  **Not material.**
- **O5 — decision-count ambiguity, again.** The deck records six decision rows in §0/§5 while its §5
  heading frames them as D1–D5 plus new ones, and this card's body says "the five decisions the prior
  round framed … plus any new decision the writer introduces". All are judged above (§4). **Owner:**
  the writer, working paper only.
- **O6 — one `surface vehicle` remains on the page by decision.** `missionIntro.description`
  ("…to the work of its first surface vehicle") — the panel's range statement, not a state claim, and
  the class name the mission brief already owns. The log says `the rover`. **Owner:** a future homepage
  pass, if one term throughout is wanted. **Not material.**
- **O7 — the three states are still three grammatical classes** (`Announced` participle, `In hand`
  prepositional, `Ahead` adverb). They read as one progression, and each is either sourced or
  positional; the mix is seen and kept, not missed. **Owner:** none.
- **O8 — internal stage vocabulary survives in two source comments.** `facts.ts` and `navigation.ts`
  header comments keep it; the deck deliberately does not touch those files. Source comments only —
  they never reach `dist/` and the guard does not treat them as gated. **Owner:** a future website
  hygiene pass. **Not material.**
- **O9 — the description's ellipsis.** "The programme's steps, in the order it reaches them" elides
  "in which" and pairs a plural noun with a singular pronoun referent. It is unambiguous, in register,
  and consistent with the `In hand` label; the fuller alternative ("in the order the programme reaches
  them") is not worth a corrective on a sentence this clear. **Owner:** the writer, on any future pass.
- **O10 — measurement integrity (new; the most consequential observation here).** See §9.6: the live
  hostname served, in order, the shared checkout's build and then a running card's _uncommitted_
  worktree build, byte-for-byte, while `origin/main` stood still. Any card's "verified live,
  byte-for-byte" claim made during a shared-machine rebuild window cannot be attributed to a commit on
  that evidence alone; the check needs the served bytes compared against a _known_ local build (or a
  deploy identifier) before attribution. **Owner:** `mars-ai-simulator-dev` / the site-deployment
  practice. **Not a blocker for this gate** (§9.6).
- **O11 — marker coverage for withheld classes beyond the two coordinates** (§10). **Owner:** already
  recorded on the step-004 gate ledger; repeated here only for the homepage surface.

---

## 12. Escalated to the human story owner

The writer's §11 list, carried forward with this round's measurements. Each has the fallback this round
ships under, so nothing here blocks the chain.

- **(a) Step 2 carries no date.** The released record states no date for the mission-architecture work.
  Should the homepage say anything about _when_ this step happens, and if so from which released
  sentence? **Fallback shipped:** no date on step 2.
- **(b) The fact grid's date rows still read `To be announced`** (`facts.ts:24–25`) while the published
  record carries a 2031 launch window, which this round puts on the same page. Reconciling the grid is
  out of scope for this card and already routed (`about-method.md` §15 row 5 → `t_a0ee9abf`).
  **Fallback shipped:** the grid is untouched, and the new sentence keeps 001's "schedule frame …
  launch window" phrasing so that it states a frame, not a date.
- **(c) The naming.** eyebrow `Mission roadmap`, nav label `Roadmap`, section id unchanged, title kept.
  Is that the naming the human wanted? **Fallback shipped:** if the nav label should stay `Progress`, it
  is a one-string revert in §8.3 and the eyebrow stands alone.
- **(d) The roadmap links two of the three published articles** (steps 1 and 2); a step holds one link,
  so linking every published article would need the `link` field widened to a list — a planning
  decision, not a wording one. **Fallback shipped:** one link per step, with 003 carrying the onward
  link to 002. **Owner:** the planner/operator, not canon.
- **(e) Per-step dates, now that the record dates exist.** The human asked for "rough dates if
  available". One released schedule date exists (step 1's 2031 window); the three published articles are
  now acquiring in-universe **record dates** (§8.3), which are a different kind of date. Whether a later
  homepage round puts a record date on each step is an editorial decision this deck may not pre-empt and
  this gate does not take. **Fallback shipped:** no date anywhere except step 1, and no date invented.

---

## 13. Release decision, and what remains outstanding

**Release decision (recorded here; this is the editorial role's own sentence, not an inference from the
verdict above).** The fifteen frozen strings of `BLOCK-8.1` + `BLOCK-8.3`, at the hashes recorded in
§5, are **releasable as public copy for the homepage's `#timeline` section**, conditional only on R1
(§7) being satisfied in the dev card's implementation. Public scope of this decision: the eyebrow, the
title, the description, the three steps' state/title/detail, the two roadmap link labels, and the one
navigation label — nothing else. Under `AGENTS.md` (2026-09-17) the merged editorial role's recorded
decision is the approval a public deployment needs, and the dev card's push to `main` is the
publication event, because `main` is wired to the automatic production build.

**What is recorded about a human reference.** The human's instruction for this round _is_ on the record:
the operator relayed the story owner verbatim — "make planner update 'progress log' section on
homepage, it does not make sense .. prefer better naming; rough dates if available, clickable links to
articles" — on the parent planner card `t_5cccaad6`, and the deck quotes it in its metadata. What is
**not** recorded anywhere is a separate human sentence approving these particular strings. This card's
item 8 asks this gate to state that "the wording's first public deployment still needs the human's
release reference": **that template sentence is recorded here as carried but NOT applied**, because the
2026-09-17 authority change moved releasability and canon confirmation to this role — a package this
role confirms may go public without a further human sentence. The wording fix for the card's own
template belongs to the planner, whose card it is; this gate does not edit another role's card. If the
operator does want a human reference recorded for this surface before the push, nothing is lost: the
push has not happened, and O2/O3 give the dev a reason to pause and report.

**Outstanding.** (1) Dev transcription on `t_cc2dfd29`, with R1. (2) The five escalations in §12 for the
human story owner. (3) The record-date publication on `t_1059c973`, whose values this gate records but
does not verify or set. (4) **No Red Horizon canon is approved by this record** — every state claim in
the copy is an editorial statement about what the published record supports, reversible by an ordinary
editorial pass.

---

## 14. Record identity

Second revision of the review record for the `progress-log` slug (§0). Revision 1 remains readable at
`git show c470741:.agents/work/reviews/progress-log.md`. If a later pass re-checks this package, keep
this history additive: re-hash the deck and the two frozen blocks first, then state what moved around
them.

Evidence for a later reader, all outside the repository and re-runnable: `/tmp/t_c4bd0c0d/` —
`verify3.py` (block and string hashes), `surface.py` (citation re-location, headings, anchor
inventory), `final_check.py` (verdict-time hashes and route reach), `guard-probe.mjs` (read-only guard
import, no prune), `sec_local.py` and `diff_chars.py` (live-vs-local comparison), `board2.py` and
`board3.py` (board and card threads).

## Final label

approved
