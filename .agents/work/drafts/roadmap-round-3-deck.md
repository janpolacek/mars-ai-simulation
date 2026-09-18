# Deck: roadmap-round-3 — the homepage mission roadmap grows to four steps, and step 1 is renamed (round 3)

## 0. Deck metadata

| Field                                     | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card                                      | `t_98e891c8` — `mars-ai-simulator-writer`, child of `t_9f4bbea2` (planner, completed) · advances **no** timeline step                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Deliverable                               | The after-state of `website/src/features/progress/steps.ts` — four steps instead of three, step 1's title renamed, `current: true` still on step 2 — plus the matching history comment in `website/test/progress-log.test.mjs`, frozen in §7 for the dev card to transcribe verbatim. Three rendered strings change (step-1 title, step-3 title, step-3 detail); two non-rendered source comments change. No other string, file or shape changes                                                                                                            |
| Revision                                  | 1 — first pass on this card                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Skills applied                            | `brand-voice` (project), `copy-editing` (project), both read before writing                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Decisions in scope                        | The four the planner brief (`.agents/work/drafts/roadmap-round-3.md` §2–§5) records: (1) four steps, step 3 `Integration and readiness`, step 4 the existing `Surface operations`; (2) step 1's title becomes `Programme and purpose`, state/detail/link unchanged; (3) `current: true` stays on step 2; (4) two files, comments only outside the rendered strings, no assertion change. This deck proves them from the record and freezes the strings; **the decisions are the planner's and are not re-opened here**                                      |
| Round-2.5 bound (carried, not re-decided) | `.agents/work/drafts/roadmap-004-link.md` (deck hash `2dbbafcf…`): step 2's `link` → `/news/004-launch-provider/` labelled `Read the architecture decision`, step 2's `detail` gains the delivery-architecture clause, step 2 keeps `current: true`. Round 3 carries that after-state verbatim and re-lists step 2's entry as §7 block (c)                                                                                                                                                                                                                  |
| Factual bound                             | The published record only: `001-project-announcement.mdx` (`923a12d8…`), `002-payload-selection.mdx` (at `HEAD` `7b69bd7f…`; the working copy is `8dc22a4f…`, an uncommitted `mediaAlt` edit from a card in flight that touches no sentence cited here), `003-vehicle-design.mdx` (`51f2ee69…`), `004-launch-provider.mdx` (`7da71fec…`, `publication: published`), `steps.ts` (`1236ead7…`), `progress-log.test.mjs` (`4fc56e74…`), `docs/SCENARIO.md` §"Continuity and release controls" (`99206373…`), and the live origin measured this run (read-only) |
| Structural bound                          | `steps.ts` `1236ead7…` at `HEAD` = `origin/main` = `5a59f340…` (20:52 CEST); the round-2 frozen shape (one optional `link` per step, exactly one `current`, section id `timeline`) is untouched; the declaration's quoted-literal count grows by exactly three — the new step's own `state`, `title`, `detail` (13 → 16, measured §10.5)                                                                                                                                                                                                                    |
| Status                                    | `draft` — no approval exists; nothing under `website/` was edited by this card; no build, commit, push, deploy or publication run                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Public/canon impact                       | No new canon. Proposes the next wording of one live public panel so its step count matches the four released milestones, and renames one panel title the human story owner reads as political. First deployment needs the editorial gate's recorded release decision (round-2 pattern). The five other public instances of the word the rename removes are **out of scope** (§3, §12(e))                                                                                                                                                                    |
| Deck file sha256                          | `fd04377c3f34c997c1d1c6118ac8dc04e3cea3c22dc8a643e2ba13ca6f2d2cda` — hash of this file with the value in this row replaced by the literal `<64-hex>`; recipe and re-check in §10.1                                                                                                                                                                                                                                                                                                                                                                          |
| Frozen payload                            | The five §7 fenced `ts` blocks (transcribed verbatim by the dev card) and `STRINGS-3`; literal values in §10.3                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Sections                                  | §0–§12, in the order the card lists them                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

Every measurement was taken on 2026-09-17 between 20:52 and 21:05 CEST from the shared checkout
(`HEAD` = `origin/main` = `5a59f340…`), the live origin (read-only browser reads; never written)
and the four published articles. Nothing is estimated: hashes, lengths, literal counts and scan
results come from scratch scripts outside the repository (`/tmp/t_98e891c8/build_after.py`,
`measure.py`, `fill_deck.py`) and are printed into §10 as literal values, so this deck does not
depend on those scripts still existing.

**Size note (recorded honestly):** this deck runs about 41 KB — roughly 1.6× the parent deck's
25,778 B and above the card's 25–30 KB target. The round covers six changed regions (the parent's
covered three, all in one file), and §8 and §9 are carried in full because a step-count change is
the first panel-shape change since round 2; no required section was dropped to reach the target,
and no section is padding. Re-measure with `wc -c` if the size matters to the gate.

---

## 1. The state this deck starts from, measured

**The live panel** (homepage `section.progress-section`, browser read 20:53 CEST) carries eyebrow
`Mission roadmap`, `<h2>` `One step at a time.`, and three `<li>` steps:

1. `Announced` / `Coalition and purpose` / "Ten national programme teams, one uncrewed lander and rover, and a mission to work out how water changed an ancient equatorial landscape. The schedule frame is a launch window in 2031." → `/news/001-project-announcement/`, label `Read the announcement`.
2. `In hand` / `Mission architecture` / `is-current` / "The first rover's design is frozen and the payload scope is agreed. The mission around the rover is still being assembled." → `/news/003-vehicle-design/`, label `Read the rover design`.
3. `Ahead` / `Surface operations` / "Using the rover on the surface to survey terrain and examine rocks in context." → **no anchor**.

The module agrees with the page: `steps.ts` at `HEAD` is `1236ead7…` (2,083 B, 51 lines) and
carries exactly those three steps, so the panel is measured twice — in source and live.

**The published record underneath it.** Four articles are live; frontmatter and route reads
measured this run:

| Article                    | Status                  | `simulatedDate` | Route read (20:53 CEST)                                                                                                                                                         |
| -------------------------- | ----------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `001-project-announcement` | `Programme announced`   | `2026-10-12`    | 200; `<h1>` "A Mars mission takes shape in public."; 0 `<h2>`; record-date line "· 12 October 2026"; body anchor back to `/news/` only                                          |
| `002-payload-selection`    | `In selection`          | `2027-03-19`    | published; reached from 003                                                                                                                                                     |
| `003-vehicle-design`       | `Design frozen`         | `2029-07-13`    | published; reached from 004                                                                                                                                                     |
| `004-launch-provider`      | `Architecture selected` | `2030-03-11`    | 200; `<h1>` "The launch architecture, chosen."; 0 `<h2>`; record-date line "· 11 March 2030"; body anchors to `/news/003-vehicle-design/` and `/news/001-project-announcement/` |

The newsroom above the panel already links all four articles, so every published article is
reachable from `/`; the roadmap's own anchors reach 001 and 003 today, and 001 and 004 once round
2.5's link move lands. **The step the panel does not carry** is the body of work article 004 names
in its own words, `004:50–52`: _"What sits between this decision and the flight is integration and
readiness work: bringing the elements together into one stack, testing that stack and its parts
against the conditions the mission will face, and closing the reviews that establish the mission
is ready to fly."_

**The hotspot, named.** `steps.ts` is written by two rounds at once. Round 2.5 (`t_116ca903`,
completed 20:46 CEST) decides step 2's link move, label and detail clause; its chain stands at:
SEO pass `t_1b0b1951` **done** (20:50 CEST, verdict "approved as proposed",
`.agents/work/seo/roadmap-004-link.md`), **no editorial-gate card filed** (that SEO card's
`children` list is empty at this run's read), **no dev transcription card filed and no
transcription landed** — both files are still the pre-2.5 bytes. Round 3 (this card) edits the
same two files: the fourth step, the step-1 rename, the two comment regions. Round 2.5 is also part
of round 3's after-state: the §7 blocks describe `steps.ts` after _both_ rounds, and step 2's entry
is block (c) so the dev card transcribes one coherent file. One card at a time, 2.5 first (§12(f)).

---

## 2. Decision 1 — the roadmap grows to four steps

**Recorded by the planner, proved here from the record: four steps.** Step 1 `Programme and
purpose` (`Announced`), step 2 `Mission architecture` (`In hand`, current), **step 3 `Integration
and readiness` (`Ahead`, new)**, step 4 `Surface operations` (`Ahead`, still last, still linkless).
Its detail sentence, built only from `004:50–52`: _"Bringing the elements together into one stack,
testing them against the conditions the mission will face, and closing the reviews."_

The record carries four released milestone classes, each named as its own decision:

- `001:24–27` — the announcement: _"Ten national programme teams … have agreed to build a single
  uncrewed Mars lander and rover together, sharing one mission architecture, one science archive,
  and one public record."_
- `002:21–24` — the payload scope: _"The programme has now agreed a payload scope for Red Horizon
  One … That scope is not a finished instrument list."_ Folded into step 2 (the mission being
  assembled) because the scope is explicitly unfinished.
- `003:4` — `status: Design frozen`, and `003:71` — _"The rover design is settled; the mission
  around it is still being assembled."_
- `004:2` / `004:14` — the title _"The launch architecture, chosen."_ and _"The coalition has
  selected a delivery architecture for the mission"_: step 2's newest carrier (round 2.5's link
  decision) and the article that names the next body of work.

The fourth step is therefore not a claim about the future. It is the body of work 004 names by its
own noun phrase — _integration and readiness work_ (`004:50`) — sitting between the architecture
decision (`004:2`, `004:14`, `004:52`) and the flight (`004:48–49`), and not yet opened by any
published sentence. The panel already names two such work classes by name (`Mission architecture`,
`Surface operations`); this is the third, and the only one 004 names itself. `docs/SCENARIO.md`
§"Continuity and release controls" requires every public fact to be sourced to the released record:
the new title is a released noun phrase, the detail sentence is built from `004:50–52` only, and
the step's `state` is `Ahead` because the record has not opened that work (§4).

**Rejected, with the reason each fails:**

- **Five steps.** No published sentence opens surface operations or any later body of work:
  `004:18` — _"no part of the flight stack has been integrated with a launcher or delivered to a
  launch site"_ — and `004:52–53` — _"The programme has published a decision, not a countdown."_
  A fifth step would name a phase the record has not opened. This is also why the new step 3 is
  `Ahead`, not `In hand`.
- **A "Vehicle design" step of its own.** The vehicle design _is_ the rover (003), and 003's own
  closing clause names it as part of the mission being assembled (`003:71`); the parent deck's §2
  folded it into `Mission architecture`. Carving it out splits one body of work the record treats
  as one.
- **A "Payload selection" step.** 002 says the scope is not a finished instrument list
  (`002:23–24`); round 2 rejected this for the same reason.
- **Demoting `Surface operations` to make room.** `progress-log.test.mjs:220–224` pins the last
  step by title and asserts it carries no link and renders no anchor; demotion would force an
  assertion change, and the record gives no reason to move a step nobody has reached.
- **Naming the new step after the launcher or the landing.** Both would put a step on the panel
  whose event class the record has not reached, and both would drag a withheld-class token into a
  public panel string (§9).

---

## 3. Decision 2 — step 1's title becomes `Programme and purpose`

**Recorded by the planner, proved here from the record: the title changes; `state`, `detail` and
`link` do not.**

The human story owner reads the current title as political. The word that produces that reading is
the title's _Coalition_ noun, not the partners: the record's dominant wording for them is `001:24`
— _"Ten national programme teams — France, Germany, Estonia, Norway, Spain, Poland, Czechia,
Slovakia, Japan, and Canada — have agreed to build a single uncrewed Mars lander and rover
together"_ — and step 1's detail already says "Ten national programme teams" without the word. The
record's wording for the work is `001:77` — _"with a shared objective, a coalition, and the
practical decisions that turn a mission idea into a testable plan"_ — where the load-bearing nouns
are the objective and the decisions.

So the rename is the **title only**: `Coalition and purpose` → `Programme and purpose` (21
characters each; both ASCII and digit-free). `state` stays `Announced`; `detail` stays 001's own
sentence (ten teams, the lander-and-rover mission, the 2031 schedule frame at `001:66`); `link`
stays `/news/001-project-announcement/` labelled `Read the announcement`.

| Candidate               | Source                                                                             | Survives the political reading                                                             | Step-pair rhythm                                                                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `Programme and purpose` | `001:24`, `001:29` _"The purpose is mineralogy…"_, `001:77`                        | yes — drops the noun outright                                                              | "Programme / Mission architecture / Integration and readiness / Surface operations" — four work classes in the order the programme reaches them |
| `Partners and purpose`  | `001:62` _"each partner holds one vote"_                                           | yes — but recasts the partners as the headline                                             | "Partners / Mission architecture / …"                                                                                                           |
| `Ten teams and purpose` | `001:24`                                                                           | reads as a count; does not generalise past step 1                                          | weaker                                                                                                                                          |
| `Programme and mission` | `001:75` _"the practical decisions that turn a mission idea into a testable plan"_ | yes — but "mission" is overdetermined on a panel whose other three steps are mission-named | weaker — collides with step 2's `Mission architecture`                                                                                          |

With the four-step shape (§2) the title column reads as four bodies of work rather than four
events: _what the programme is and why it exists_, _what is being assembled around the rover_,
_what sits between the assembly and the flight_, _what happens once the rover is on the ground_.

**Out of scope, and not released by this deck.** The word being removed from the panel appears on
five other public surfaces: `001:77`, `002:87`, `004:14`, `features/mission/facts.ts:18`,
`features/mission/Hero.astro:12` (measured this run). Rewriting a published surface is a
publication decision; the planner filed that escalation as a separate, non-blocking child
(`t_8e8364e4`) for the human story owner (§12(e)). **This round's transcription touches `steps.ts`
and `progress-log.test.mjs` only** — no article, no `facts.ts`, no `Hero.astro`.

---

## 4. Decision 3 — `current: true` stays on step 2

**Recorded by the planner, proved here from the record: the flag does not move.**

The file-header comment states the rule (`steps.ts:9–10` today, `:9–12` after §7 block (d)): move
the current flag only when the record carries the next step's opening. After round 3 the next step
is the new step 3 `Integration and readiness`, and the record carries the opposite of an opening:
`004:18` (nothing integrated, nothing delivered to a launch site), `004:50–52` (that work _sits
between this decision and the flight_ — ahead, not under way), `004:52–53` (*"a decision, not a
countdown"*), and no published sentence in 001–004 reporting integration, testing, review or
readiness activity. Step 2 remains the work in hand on the newest article: `004:14` reports the
mission-level architecture decision and `004:50–52` restates 003's closing clause (`003:71`) as
work still ahead.

So step 2 keeps `In hand` and `current: true`, the new step 3 takes `Ahead`, and the test's
invariant — exactly one `current` (`progress-log.test.mjs:255`) — holds unchanged.

**What would move the flag** (recorded for round 4): a published article reporting the
integration-and-readiness work _under way_. That is a step-005-class release; the launch and
landing dates and the operating-company/facility families stay withheld until their authorised
steps (`docs/SCENARIO.md` §"Continuity and release controls"; launch-day forms in the gate ledger
`.agents/work/reviews/004-launch-provider-gates.md` §R3.4 + condition C5). No step-004-adjacent
release can move it.

---

## 5. Decision 4 — the diff surface: two files, three rendered strings, two comments

**`website/src/features/progress/steps.ts`** (`1236ead7…`, 51 lines) — three changes:

1. **step 1's `title`**: `Coalition and purpose` → `Programme and purpose` (§3).
2. **one new step entry** inserted between the current step 2 and the current step 3:
   `{ state: 'Ahead', title: 'Integration and readiness', detail: '…' }` — no `link`, no
   `current` (§2, §7 block (b)).
3. **the file-header comment's rule region** (`:9–10` today) extended to name the "add a step"
   branch this round exercises, keeping the "re-choose the link" clause round 2.5 added (§7 block
   (d)). **Source comment only, never rendered, and no new comment block:** the extension stays
   inside the existing JSDoc stanza; nothing is added above or below it.

Round 2.5's changes to the same file (step 2's `link.href`, `link.label`, the subordinate `detail`
clause) are **carried unchanged**; §7 block (c) re-lists step 2's entry so the dev card transcribes
one file from one source.

**`website/test/progress-log.test.mjs`** (`4fc56e74…`, 298 lines) — one change:

4. **the history comment paragraph** (`:13–21` today) extended by three lines describing round 3 —
   the new step and the step-1 rename — after the round-2 and round-2.5 sentences (§7 block (e)).
   **Comment only:** no assertion, helper or import change (§8).

**No assertion changes.** Every predicate in the file is shape- or predicate-based (one block per
declared step; one anchor per step that declares a `link`; the last step by title; exactly one
`current`; every step detail carries `.timeline-detail`), and each holds under a four-step list
whose unreached steps declare no link (§8). The one string a stale comment would contradict — the
history sentence naming the 003 target — is refreshed by change 4.

---

## 6. Before / after — every changed string

Line numbers are `steps.ts` / `progress-log.test.mjs`. "Before" quotes the live files at `HEAD` =
`origin/main` = `5a59f340…`; "after" quotes this deck's §7 blocks. Rows marked _(2.5)_ are round
2.5's delta, shown so the dev card sees one coherent after-state — **round 3 changes neither**.

| # | Where                                                                                                     | Before (live, `1236ead7…` / `4fc56e74…`)                                                                                                                         | After (this deck, both rounds)                                                                                                                                                                                                                  |
| - | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | `steps.ts:33` → `:35` step 1 `title`                                                                      | `Coalition and purpose`                                                                                                                                          | `Programme and purpose`                                                                                                                                                                                                                         |
| 2 | `steps.ts:44` → `:46` _(2.5)_ `link`                                                                      | `link: { href: routes.newsArticle('003-vehicle-design'), label: 'Read the rover design' },`                                                                      | `link: { href: routes.newsArticle('004-launch-provider'), label: 'Read the architecture decision' },`                                                                                                                                           |
| 3 | `steps.ts:42` → `:44` _(2.5)_ `detail`                                                                    | `The first rover's design is frozen and the payload scope is agreed. The mission around the rover is still being assembled.`                                     | `The first rover's design is frozen, the payload scope is agreed, and the delivery architecture is chosen. The mission around the rover is still being assembled.`                                                                              |
| 4 | `steps.ts:45–46` → new `:48–53` **insertion**: the new step entry between step 2 and `Surface operations` | _absent_ — step 2's entry closes at `:45`, `Surface operations` opens at `:46`                                                                                   | `{ state: 'Ahead', title: 'Integration and readiness', detail: 'Bringing the elements together into one stack, testing them against the conditions the mission will face, and closing the reviews.' }` — no `link`, no `current` (§7 block (b)) |
| 5 | `steps.ts:9–10` → `:9–12` file-header comment rule region (non-rendered)                                  | ` * at a published article. Add a step's link when its article is published; move` / ` * the current flag only when the record carries the next step's opening.` | §7 block (d) — the same region after round 3, four lines                                                                                                                                                                                        |
| 6 | `progress-log.test.mjs:13–21` → `:13–25` history comment paragraph (non-rendered)                         | round 2's sentence plus its tail ("…asserted through the site's own predicate rather than against a hand-kept slug list: …")                                     | §7 block (e) — the same paragraph with round 2.5's clause and the three-line round-3 note                                                                                                                                                       |

Two notes the dev and the gate need. **The insertion is an insertion:** row 4 sits between rows
2–3's entry and the existing `Surface operations` entry, so that entry shifts from `:46–50` to
`:54–58` with all three of its strings byte-identical. **Row 6 carries one join** — 2.5's added
clause ends with a period, so round 2's remaining sentence opens with a capital (`The published
side of the contract is asserted…`); §12(a) gives the alternative and the reason. Every changed
string is ASCII and digit-free where it renders (§10.4); the two comment regions legitimately
carry card ids and article slugs (§9).

---

## 7. Transcribable strings (the dev card transcribes this verbatim)

Five fenced `ts` blocks, in this order: **(a)** step 1's entry with the new title; **(b)** the new
step-3 entry; **(c)** step 2's entry (round 2.5, carried unchanged); **(d)** the file-header
comment's rule region after round 3; **(e)** the test-history paragraph after round 3.

Each fence contains **the payload only** — the bold line above it is this deck's label, not part of
the transcription. (The grandparent deck's blocks carried their label as a `//` comment _inside_
the fence; hashing pure payload here removes the one place a dev card could copy a label into a
source file.) The blocks are the exact after-state lines named in §6; each block's sha256 is in
§10.3, and all five are `dprint check`-clean under the repository's own `dprint.json` (§10.9), so
the dev card may run `dprint check` after transcribing and expect no reformat.

**(a) `steps.ts` — step 1's entry after this round (only `title` differs from the live file):**

```ts
{
    state: 'Announced',
    title: 'Programme and purpose',
    detail:
        'Ten national programme teams, one uncrewed lander and rover, and a mission to work out how water changed an ancient equatorial landscape. The schedule frame is a launch window in 2031.',
    link: { href: routes.newsArticle('001-project-announcement'), label: 'Read the announcement' },
},
```

**(b) `steps.ts` — the new step-3 entry, inserted after step 2's entry and before the existing
`Surface operations` entry:**

```ts
{
    state: 'Ahead',
    title: 'Integration and readiness',
    detail:
        'Bringing the elements together into one stack, testing them against the conditions the mission will face, and closing the reviews.',
},
```

**(c) `steps.ts` — step 2's entry (round 2.5's after-state, carried unchanged; re-listed so the
dev card has one transcription source):**

```ts
{
    state: 'In hand',
    title: 'Mission architecture',
    detail:
        "The first rover's design is frozen, the payload scope is agreed, and the delivery architecture is chosen. The mission around the rover is still being assembled.",
    current: true,
    link: { href: routes.newsArticle('004-launch-provider'), label: 'Read the architecture decision' },
},
```

**(d) `steps.ts` — the file-header comment's rule region after this round (replaces the region
that begins ` * at a published article.` and ends `next step's opening.` — two lines live, four
after round 2.5, four here):**

```ts
* at a published article. Add a step when the record carries a new body of
* work; add a step's link when its article is published, and re-choose it when
* a newer article carries the step; move the current flag only when the
* record carries the next step's opening.
```

**(e) `progress-log.test.mjs` — the history comment paragraph after this round (comment only; no
assertion changes):**

```ts
* Round 2 (card `t_cc2dfd29`) added the second roadmap link — step 2,
* `Mission architecture`, now points at `/news/003-vehicle-design/` — and the
* 004 round re-chose it: the step's newest carrier is `/news/004-launch-provider/`.
* The published side of the contract is asserted through the site's own predicate
* rather than against a hand-kept slug list: `publishedSlugs()` reads the real
* `website/news/` frontmatter and runs it through `selectPublicNews()`, the same
* selection that feeds the carousel, the newsroom index and the `/news/<slug>/`
* generator. A step may therefore link only to an article those three surfaces
* already publish and route, and the step the record has not reached renders no
* anchor at all.
* Round 3 (card `t_9f4bbea2`) added a third step, `Integration and readiness`,
* for the body of work 004 names between the architecture decision and the
* flight, and renamed step 1 to `Programme and purpose`.
```

`STRINGS-3` — the three changed **rendered** literals, joined with a newline in §6 order (step-1
title, step-3 title, step-3 detail): sha256 in §10.3.

---

## 8. Test impact, measured against `progress-log.test.mjs` (`4fc56e74…`)

No assertion changes. Each predicate is re-derived against the §7 strings.

| Predicate (live line)                                                                                                                    | Under the four-step after-state                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `:161` built `<li>` count equals `progressSteps.length`                                                                                  | holds: `ProgressLog.astro:16–26` maps `progressSteps`, so 4 declared steps render 4 `<li>`                                                                                                                                                             |
| `:176–181` every step renders its own `state`, `title`, `detail`                                                                         | holds: the new entry's strings render through the same `.timeline-state` / `<h3>` / `.timeline-detail` elements (`ProgressLog.astro:20–22`)                                                                                                            |
| `:190–197` rendered article hrefs deep-equal the declared `link.href` list in order, then each must be an existing `/news/<slug>/` route | holds, and **requires 2.5 in the same file**: the declared list becomes `['/news/001-project-announcement/', '/news/004-launch-provider/']`. Steps 3–4 declare no `link`, so they add no anchor. `/news/004-launch-provider/index.html` exists (§10.8) |
| `:200–214` every rendered article href resolves to a slug in `publishedSlugs()`                                                          | holds: 001 and 004 are `publication: published` (§1)                                                                                                                                                                                                   |
| `:219–224` last step by title is `Surface operations`, its `link` is `undefined`, its block renders 0 anchors                            | holds **because row 4 is an insertion**: `lastIndex` becomes 3 and index 3 is still `Surface operations`                                                                                                                                               |
| `:227–244` each step renders `step.link ? 1 : 0` anchors, and `silent.length > 0`                                                        | holds: `silent` becomes `[2, 3]` — two unreached, anchorless steps                                                                                                                                                                                     |
| `:250–261` exactly one index carries `current`, and only that index renders `is-current`                                                 | holds: the flag stays on step 2 (index 1); the new step 3 carries none                                                                                                                                                                                 |
| `:266–280` the `is-current` marker and dot rules                                                                                         | holds: no selector, class or CSS rule is touched                                                                                                                                                                                                       |
| `:286–297` every rendered step has a `.timeline-detail`, plus the CSS assertions                                                         | holds: the new step renders its detail paragraph like every other step; no CSS change                                                                                                                                                                  |

Also measured: **no other test file reads the panel.** A search over `website/test/*.mjs` for
`progress-section`, `progressSteps`, `Surface operations` and `steps.ts` returns
`progress-log.test.mjs` only (`guards.test.mjs` matches the word `timeline` solely as a withheld
_directory_ name). `website/src/pages/index.astro` and `ProgressLog.astro` consume `progressSteps`
by iteration, so neither pins a step count. The only stale text after the delta would be the
history paragraph (`:13–21`), which block (e) refreshes — comment only, same file, same change.

---

## 9. Withheld-class audit on the new strings

- **Rendered strings — 4 × 10 families = 0 hits.** Audited: the three changed literals (step-1
  title, step-3 title, step-3 detail) and the carried step-2 detail. Families: launcher designation
  and its operator; rover designation; region name; the repository's two gated coordinate markers
  (`website/scripts/guards.mjs:86`, `gatedTextMarkers`); degree values; institution / operator /
  facility names; launch-day forms; ISO dates; and any digit, which subsumes currency and figure
  forms. The digit family cannot fire on any of the four because none contains a digit (§10.4).
- **Comment regions — 2 × 9 families = 0 hits.** The header rule and the test history paragraph are
  audited on the same nine fact-bearing families, with "any digit" **excluded by design**: a history
  comment names the cards that made the change and the slugs the panel points at, exactly as the
  round-2 and round-2.5 comments do. The complete set of digit-bearing tokens in those regions is
  recorded — two card ids, two article slugs (`004` inside one), and the ordinals `step 1`/`step 2`/
  `step 3`/`Round 2`/`Round 3` — so the exclusion can be checked rather than trusted.
- **Positive controls (the scan is live).** `docs/vehicles/pathfinder/VEHICLE.md` (`0cea455f…`)
  fires 2 families, `docs/vehicles/ariane/ariane-64.md` fires 6, `docs/area/AREA.md` fires 6. The
  two marker families exist only in withheld material, so they are proved against a synthetic probe
  built inside the scratch script from the markers themselves — 4 families fire, and the probe is
  never printed into this deck.
- **The pattern list is not in this deck.** It lives outside the repository in
  `/tmp/t_98e891c8/measure.py` (family names, expressions, the two marker literals) and is cited by
  location, as the grandparent deck cited its own. Nothing in this deck, in §7, or in any proposed
  string carries a withheld token.
- **The deck's own text, scanned.** The same ten families were run over this file (it is not a
  public surface and the build guard does not scan `.agents/`, but a deck that quoted a withheld
  token would still be a leak into the next worker's context). Result: three families fire — the
  digit family (this deck's own hashes, line numbers and card ids), `ISO dates` (the four articles'
  **released** `simulatedDate` values in §1) and `launch-day forms` (the published sentence
  `004:18` quoted in §4, plus §9's own family name). All seven remaining fact-bearing families —
  launcher designation, rover designation, region name, both gated coordinate markers, degree
  values, institution/operator/facility names — are 0 hits, so no withheld token appears anywhere
  in this file.
- **What the new step deliberately does not say.** No launcher designation (released at step 004 but
  kept out of the panel; the linked article carries it at `004:20`), no date beyond step 1's released
  2031 window (`001:66`, unchanged), no institution/operator/facility name, no figure, no
  coordinate, no rover name. The detail sentence describes work, not the vehicle's identity.

---

## 10. Validation performed on this card

| #     | Check                                       | Tool / source                                                                                            | Result                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.1  | Deck file hash, recipe re-checked           | `/tmp/t_98e891c8/fill_deck.py`                                                                           | §0's value, taken as the last edit of this file; the recipe is a fixed point (re-running it reproduces the row's own value). **Caveat:** this deck keeps the parent decks' Markdown shape (tables unpadded); `dprint check` reports the round-2.5 deck and the round-3 planner brief as unformatted for exactly that reason, so this deck is not `dprint fmt`-ed. Any `dprint fmt ../` over `.agents/` would re-pad the tables and change this hash — re-measure the row before comparing, or format `website/` only (§12(d)) |
| 10.2  | Input stability                             | `/tmp/t_98e891c8/measure.py`, 20:52–21:05 CEST                                                           | `steps.ts` `1236ead7…` (2,083 B, 51 lines); test `4fc56e74…` (14,194 B, 298 lines); 001 `923a12d8…` (4,832 B); 002 working `8dc22a4f…` / at `HEAD` `7b69bd7f…`; 003 `51f2ee69…`; 004 `7da71fec…`; `facts.ts` `7cf85ec8…`; `Hero.astro` `d600b0b3…`; `ProgressLog.astro` `68a4b4d5…`; round-3 brief `5f04cda5…`; round-2.5 deck `613cf476…`; round-2 deck `8fc9a181…`; `docs/SCENARIO.md` `99206373…`; `website/scripts/guards.mjs` `3c95f223…`; `HEAD` = `origin/main` = `5a59f340…`                                          |
| 10.3  | Frozen payload hashes                       | `/tmp/t_98e891c8/fill_deck.py`, taken from **this file's own §7 fenced blocks**                          | five blocks plus `STRINGS-3`; literal values in §10.3 below                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 10.4  | String measurements                         | `/tmp/t_98e891c8/measure.py`                                                                             | step-1 title 21 chars (unchanged length); step-3 title 25; step-3 detail 130; carried step-2 detail 160. All four ASCII, all four digit-free; `STRINGS-3` 178 chars joined                                                                                                                                                                                                                                                                                                                                                    |
| 10.5  | Declaration shape                           | same script                                                                                              | quoted literals inside `progressSteps`: 13 live → 13 after round 2.5 → **16** after round 3 (exactly the new entry's three); one `current`; two steps declaring a `link` (1 and 2), two without (3 and 4)                                                                                                                                                                                                                                                                                                                     |
| 10.6  | Withheld-class scan + controls              | same script, pattern list outside the repository                                                         | 0 hits over 4 rendered strings × 10 families and 2 comment regions × 9 fact-bearing families; controls fire 2 / 6 / 6 families; marker probe fires 4 (§9)                                                                                                                                                                                                                                                                                                                                                                     |
| 10.7  | Containment of the §7 strings in §6 and §7  | `/tmp/t_98e891c8/fill_deck.py`, whitespace-collapsed presence check                                      | the three changed rendered literals and the carried step-2 detail are all present in §6 (before/after rows) and in §7 (fence or `STRINGS-3` line); the new step-3 detail sentence is also quoted in §2's evidence                                                                                                                                                                                                                                                                                                             |
| 10.8  | Link and step targets published and routed  | live origin browser read, 20:53 CEST                                                                     | `/news/001-project-announcement/` 200 (`<h1>` "A Mars mission takes shape in public.", 0 `<h2>`, record-date line "· 12 October 2026"); `/news/004-launch-provider/` 200 (`<h1>` "The launch architecture, chosen.", 0 `<h2>`, record-date line "· 11 March 2030", body anchors to 003 and 001); both frontmatter `publication: published`                                                                                                                                                                                    |
| 10.9  | §7 payloads are formatter-clean             | `website/node_modules/.bin/dprint check --config dprint.json` on a scratch copy of the after-state files | exit 0 for both files: the blocks need no reformat (the long `detail:` string lines follow the pattern the live file already uses at `:34–35` and `:41–42`)                                                                                                                                                                                                                                                                                                                                                                   |
| 10.10 | No `website/` edit by this card             | `git status --short` at verdict time                                                                     | this card's only write is this deck (a new file under `.agents/work/drafts/`); every other modified or untracked path belongs to cards in flight on the shared checkout                                                                                                                                                                                                                                                                                                                                                       |
| 10.11 | No build, commit, push, deploy, publication | —                                                                                                        | none run; the live origin was read, never written; the after-state exists only in §7 and in scratch files outside the repository                                                                                                                                                                                                                                                                                                                                                                                              |

### 10.3 Frozen payload (values measured from this file's own fenced blocks)

Char counts include each block's final newline; the digest is over those same bytes.

- §7 block (a), the step-1 entry with the new title, as the dev card writes it (401 chars): sha256 `3a4a767a394c92601dae843eb2b16daa237ee7e2cf2ec4521f6731ae260cbdcb`.
- §7 block (b), the new step-3 entry, as the dev card writes it (243 chars): sha256 `94801b742ba4c492d77bfb7049e8fe1c317e468822650360639dd0da6521b750`.
- §7 block (c), the step-2 entry (round 2.5, carried), as the dev card writes it (401 chars): sha256 `ffb5e4c4c20e4caa6f6f1dbe06a00385149c3225781226c0f03aa47eaebba5d5`.
- §7 block (d), the file-header comment rule region, as the dev card writes it (272 chars): sha256 `e97515189f3a615b25a9f339b649c7ea55e6fca6dac72211161e818d1e57653a`.
- §7 block (e), the test history paragraph, as the dev card writes it (954 chars): sha256 `6e82765f0b43c98cd0ffe422ef061a0e9306c9204a59cf83c85580bc78581371`.
- `STRINGS-3`, the three changed rendered literals, newline-joined in §6 order (178 chars): sha256 `4f54548983c47a7d653cc152ba60189c1da188c2824f994bfbaafdef04c00864`.
- step-1 title alone `Programme and purpose` (21 chars): sha256 `9762ee7266bc78f6e05d7b8368aa6086a50cbe4c13d18d478711ff1fe28c60c5`.
- step-3 title alone `Integration and readiness` (25 chars): sha256 `93622870f61595559b49bbc061d98dc697b33e022b836e4e22b3f1dc76eb9ccf`.
- step-3 detail alone (130 chars): sha256 `74184b78780afd84ba455dab8f3a4ec12517d0ae84cbd738faf4bf3d3f796666`.

The five block hashes are taken from this file's own fenced blocks, so the dev card and the gate
can re-derive them from the deck the gate approved, and the gate can re-run the same recipe
(`/tmp/t_98e891c8/fill_deck.py`, §10.1) instead of trusting these lines.

---

## 11. What this deck hands to round 4

- **The flag's trigger is named, not dated.** Round 4's first candidate change is moving
  `current: true` from step 2 to step 3; it needs a published article reporting the
  integration-and-readiness work under way — a step-005-class release (§4). Nothing here moves it.
- **The next panel-shape question is the fifth step.** With four steps the panel names every work
  class the record has opened except the flight itself; a fifth step needs an opening the record
  does not carry (§2).
- **The panel's framing will need a re-read when the flag moves.** `progressHeading.description`
  ("…the step after it is not settled yet.") is round-2 approved and still true today (highlighted
  step 2; the step after it is the new step 3, `Ahead`); the SEO pass re-checks it for the
  four-step shape. Changing it is round 4's question.
- **The human's answer on the five other instances of the word** (§3, §12(e)) opens a separate
  revision cycle on published surfaces and does not gate this panel. **The one-link-per-step rule**
  still holds at four steps (two linked, two unreached); round 2's parked escalation about
  widening `link` to a list is unchanged.

---

## 12. Escalated, and the chain

**(a) One editorial join in the test comment, for the gate.** Round 2.5's clause ends with a period,
so round 2's remaining sentence opens with a capital in block (e): the live `— so the published side
of the contract is asserted…` becomes `— The published side of the contract is asserted…`. No other
word of round 2's sentence changes. The gate may prefer a semicolon splice (`…; so the published
side…`), which leaves round 2's leading word untouched; either way the dev card transcribes block
(e) as approved. This is the only non-additive edit in the two comment regions.

**(b) The round-3 history lines sit at the end of the paragraph, not straight after 2.5's
sentence.** The planner brief §5 sketch places them immediately after the 2.5 sentence, which would
leave round 2's explanatory sentence dangling mid-argument. Block (e) appends them after `anchor at
all.` instead, so the paragraph reads: round 2's sentence with 2.5's clause → round 2's two
explanatory sentences → the round-3 note. Words unchanged; position chosen by this deck.

**(c) The header comment's rule line is re-wrapped.** Round 2.5's wording is kept word-for-word
inside block (d); only the line breaks move, to hold every line ≤ 80 columns in the file's style.

**(d) Deck hashes and `dprint fmt` (project-level, for the chain).** `dprint check` reports both the
round-2.5 deck and the round-3 planner brief as unformatted because their Markdown tables are not
padded. This deck matches them, so its §0 hash row is measured on unpadded bytes; a `dprint fmt ../`
over `.agents/` would re-pad the tables and invalidate every deck hash in flight. The dev and gate
cards should format `website/` only, or re-measure the row before comparing. The §7 payloads are
formatter-clean either way (§10.9).

**(e) The five other public instances of `coalition`.** `001:77`, `002:87`, `004:14`,
`features/mission/facts.ts:18`, `features/mission/Hero.astro:12` — published surfaces, **not** in
this round's release scope. The planner filed the escalation as card `t_8e8364e4` (child of
`t_9f4bbea2`, `todo`, information-only) naming the five instances and three rename proposals for the
human story owner. It is **not** in the publish chain and does not gate it.

**(f) The hotspot, and the round-2.5 lane.** `steps.ts` is a single file written by two rounds.
Round 2.5's chain, measured this run: SEO `t_1b0b1951` done, **no editorial-gate card filed, no dev
transcription card filed**, and neither file has moved off `1236ead7…` / `4fc56e74…`. Round 3's dev
card (`t_28348940`, filed by the gate `t_a635e5eb`) must depend on round 2.5's transcription having
landed first — and that card does not exist yet, so the dependency is a real ordering constraint,
not a formality. **The round-2.5 lane needs its gate and dev card filed before round 3's dev card
can run.** This deck files nothing; it records the constraint and names the missing cards.

**Chain, as filed** (the planner's children of `t_9f4bbea2`, re-read on the board this run):

| Order | Card                                               | Owner                       | Writes                                                                                                                                     | State                                          |
| ----- | -------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 1     | `t_98e891c8` — this card                           | `mars-ai-simulator-writer`  | `.agents/work/drafts/roadmap-round-3-deck.md` (this file)                                                                                  | running                                        |
| 2     | `t_487244de` — SEO pass                            | `mars-ai-simulator-seo`     | `.agents/work/seo/roadmap-round-3.md`                                                                                                      | `todo`, child of this card                     |
| 3     | `t_a635e5eb` — editorial final gate                | `mars-ai-simulator-editor`  | `.agents/work/reviews/roadmap-round-3.md` + `.agents/work/continuity/roadmap-round-3.md`; records the release decision; files the dev card | `todo`, child of this card and of the SEO card |
| 4     | `t_28348940` — dev transcription                   | `mars-ai-simulator-dev`     | `steps.ts` + `progress-log.test.mjs`; stages only those two paths; pushes once the gate's release decision is recorded                     | `todo`, child of the gate                      |
| —     | `t_8e8364e4` — escalation to the human story owner | `mars-ai-simulator-planner` | no file (information card, §12(e))                                                                                                         | `todo`, **not** in the publish chain           |

Nothing in this deck is approved, released or published; this card edits no `website/` file, runs no
build and no deploy. **Next recommended owner and action:** `mars-ai-simulator-seo` on `t_487244de`
— the two anchors on the four-step panel, the four-step link inventory, and the step-1 rename's
search consequences — then `mars-ai-simulator-editor` at `t_a635e5eb` for the release decision,
which releases `t_28348940`'s transcription — after round 2.5's lane has landed `steps.ts`
(§12(f)).
