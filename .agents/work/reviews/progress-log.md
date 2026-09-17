# Review: progress-log — editorial final gate (homepage `#timeline` strings)

## Review metadata

| Field                       | Value                                                                                                                                                                                                                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug / surface              | `progress-log` — the homepage `/` progress-log section (`<section id="timeline">`), i.e. the strings in `website/src/features/progress/steps.ts`, plus **one** consistency string in `website/src/features/mission/facts.ts`                                                                   |
| Card                        | `t_bd1fd539` — `mars-ai-simulator-editor`, stage `site-foundation`. This gate is the last review before the dev card transcribes the strings                                                                                                                                                   |
| Chain                       | writer `t_11eee417` (deck) → SEO `t_365846b7` (`approved as proposed`) → continuity `t_1abe4cae` (`continuity clear`) → **this gate** → dev transcription `t_4383dbcc` (also parented on `t_4b49346b`, the one-`website/`-card-at-a-time rule)                                                 |
| Stage / timeline step       | `site-foundation` (homepage chrome copy). **Advances no timeline step.** Factual bound = the published step-001 record plus internal canon for the "work in hand" statement only                                                                                                               |
| Deck (frozen copy)          | `.agents/work/drafts/progress-log.md` — sha256 `9d2a14e62b7cbec6c61b1943c91fc33624e86bd6d15a66c9efc9366d8796d24e`, 28,904 bytes · 374 lines. **Byte-identical to what the SEO and continuity passes read**                                                                                     |
| Approved block §8.1         | deck lines **273–318** (`website/src/features/progress/steps.ts`); `BLOCK-8.1` sha256 `20a20b798feb3c12768e84f5dfe4625b5c1569ffdc21458054c663969f976eb1` (1,873 chars)                                                                                                                         |
| Approved block §8.2         | deck line **330** (`website/src/features/mission/facts.ts`, one value); `BLOCK-8.2` sha256 `9cde8026932def97b378a3bc94265619ee3d63947d72b11e2d39f4935f305d73` (59 chars)                                                                                                                       |
| Approved string payload     | the 15 rendered string literals of §8.1+§8.2, in deck order, newline-joined with one trailing newline: sha256 `e6a64c68874b6368ae176c4b1145b5698c587ca7f3017ea067fd9eb0fb2e54ea`, 710 bytes, **all ASCII** (no smart quotes — a byte-for-byte comparison is unambiguous)                       |
| SEO package                 | `.agents/work/seo/progress-log.md` — sha256 `ffba8b0e272a2f400fa942098c53ea4e8ada6ef70383a6dc6b7cec23e19c8331`, 413 lines; verdict `approved as proposed`                                                                                                                                      |
| Continuity verdict          | `.agents/work/continuity/progress-log.md` — sha256 `08adceaf841a6b020e84d7d80158cef52b008c62527341055cc151bf33f615d1`, 250 lines; final label `continuity clear`                                                                                                                               |
| Published record            | `website/news/001-project-announcement.mdx` — sha256 `73c2d04734b466a8f642f342bf1ce01c5fb3b0d343f17f6b6c8e9ee8007ab5ec`; `publication: published`, `status: Programme announced`, `order: 1`                                                                                                   |
| Step-002 state (measured)   | article sha256 `64373791…` — `publication: draft`; its release record under `.agents/work/releases/` sha256 `57758def…` — status **`blocked — human decision required`** (the step-002 slug is elided in this record, as the continuity record elides it); no route, no listing, no card image |
| Gate inputs at verdict time | 14 inputs re-hashed against the values the continuity pass recorded: **14/14 unchanged** (§1)                                                                                                                                                                                                  |
| Skills applied              | `editorial-review` (project), with `copy-editing` and `brand-voice` on the copy rows                                                                                                                                                                                                           |
| Verdict written             | 2026-09-17 09:37–09:55 CEST, against the live shared working tree, HEAD `9cefa55`; `git status --short` shows only the four `.agents/work/` entries of this chain                                                                                                                              |
| Status                      | **`approved`** — editorial gate only. Not a canon decision, not a release, not authorisation to build or deploy                                                                                                                                                                                |

**Path substitution recorded.** My role definition names `docs/content/reviews/` as the review-record
location; `docs/INSTRUCTIONS.md` §"Project source layout" (line 44) places editorial reviews in
`.agents/work/reviews/`, which is where this card, the card chain and the previous gates place them.
This file is that record, not a second copy of it.

## Verdict

**`approved`.**

All 21 review rows pass; no material factual, accessibility, licensing, coherence, or metadata failure
remains open; the continuity prerequisite reads `continuity clear` on the same bytes and the SEO package
reads `approved as proposed` with no required wording change. Eleven items are recorded in §10 as
non-blocking and routed to named owners, and **one rendering condition (R1, §7) is attached to the dev
card** — it concerns how the new link is rendered, not any string, so it does not hold up the chain.

Nothing was changed by this gate. No file under `website/`, no article, no deck string, no other
worker's artifact was edited; the evidence below is measurement and judgement.

This approval releases the dev card `t_4383dbcc`. It is an **editorial gate only**: the wording's first
public deployment still needs the human's release reference, and **no Red Horizon canon is approved by
this record**.

## Review table

| #  | Check                                                                                 | Result          | Evidence                                                                                                                                                                                                                                                                                                      |
| -- | ------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Continuity verdict present, reads `continuity clear`, unchanged since written         | PASS            | `.agents/work/continuity/progress-log.md` sha256 `08adceaf…` = the hash its own metadata records; line 250 is the single label `continuity clear`; no open-failure table                                                                                                                                      |
| 2  | SEO package present, verdict `approved as proposed`, no required wording change       | PASS            | `.agents/work/seo/progress-log.md` §10; §7 routes only implementation constraints to the dev card                                                                                                                                                                                                             |
| 3  | Deck unchanged and byte-identical to what SEO and continuity read                     | PASS            | Deck sha256 `9d2a14e6…` re-taken at 09:37 and again immediately before this verdict; continuity §1 and the SEO handoff record the same value, so the bytes judged here are the bytes they judged                                                                                                              |
| 4  | The five decisions are recorded _as decisions_ and each is judged here                | PASS            | §4 judges D1–D5 one by one against their own rationale, not just the strings that carry it. (The deck's §5 heading counts four; the writer's card `t_11eee417` asked for four and D5 is the writer's own addition — see observation C)                                                                        |
| 5  | String-by-string copy gate over the 15 rendered literals                              | PASS            | §3, one row per string, against `copy-editing` and `brand-voice`                                                                                                                                                                                                                                              |
| 6  | Grammar, agreement, tense, punctuation                                                | PASS with note  | §3. No grammatical defect. One distributive-number looseness in the description ("Published steps link to the article that carries them") — observation D                                                                                                                                                     |
| 7  | Plain language; no unexplained term, no jargon display                                | PASS            | Every noun in the copy is either the record's own ("mission architecture", "rover", "coalition") or ordinary English. No acronym, no initialism, no instrument or provider vocabulary appears at all                                                                                                          |
| 8  | Brand voice: grounded, unsentimental, no grandeur, no urgency, unearned certainty     | PASS            | No superlative, no slogan, no deadline, no completion verb, no implied real-agency endorsement. Uncertainty is stated as uncertainty ("the steps after it are not settled yet") and the state claim is a question, not a result                                                                               |
| 9  | Repetition and internal consistency of the section                                    | PASS with note  | SEO measured five distinct strings (eyebrow / h2 / three step titles), none repeating. The one echo is the description's first sentence repeating the h2's phrase — observation E                                                                                                                             |
| 10 | Accessibility of what the dev will render                                             | PASS with note  | Eyebrow stays a `<p>`, not a heading (`SectionHeading.astro:15`); the 184-char description is body copy in a `<p>`, **not** a meta description (built page carries exactly one `<meta name="description">`, at 108 chars); no image and no icon is introduced. Anchor purpose: see §3 row 7 and observation B |
| 11 | Every material claim traces to a canonical source                                     | PASS            | All 10 deck §9 rows re-derived against `001-project-announcement.mdx` at the cited lines and against `docs/SCENARIO.md` §"Continuity and release controls" — §5                                                                                                                                               |
| 12 | No string carries a step-002 fact; every string stays true after 002 releases         | PASS            | §5: the step-2 detail is 001's own triple of _open_ selections; the three selections are published as open (`:73–74`) and one of them is bound by the release controls to a step later than 002                                                                                                               |
| 13 | No withheld material in any string, title, state, label or link                       | PASS            | §9: 0 hits across the guard's four markers (list read from `guards.mjs` at scan time) with a live positive control; 0 proper nouns; 0 digits, years, coordinates, currency, percentages, URLs                                                                                                                 |
| 14 | No timing or completion implication                                                   | PASS            | States are positional (`Announced` / `Current progress` / `Later`); 0 completion verbs, 0 temporal tokens in any rendered string. The only temporal word in the block is inside a code comment                                                                                                                |
| 15 | The new link: single, published target, route from the route map, no unpublished link | PASS            | One `link`, on step 1, to `/news/001-project-announcement/` via `routes.newsArticle('001-project-announcement')` (`navigation.ts:13`); the published route exists in `dist/`; the 002 article has no route and its slug appears nowhere in `dist/` (§8)                                                       |
| 16 | D5's out-of-section string agrees with the log and overwrites no canon                | PASS            | `facts.ts` `Current state` → `Mission architecture` names the same step the log flags `current: true`; continuity §6 measured that no line of `docs/` names the programme's current state, so the value is editorial, not a canon overwrite. **No live card or comment instructs the dev to drop it** (§7)    |
| 17 | Dev scope check: the dev needs no wording decision                                    | PASS with cond. | §7. Deck §4.1 fixes the file, the interface and the strings; the dev card body names deck §8 as the source and quotes no divergent string. Condition R1 concerns rendering only                                                                                                                               |
| 18 | Dev card body (`t_4383dbcc`) is consistent with deck §8                               | PASS            | §7: every literal the card body names matches the deck (the old header comment it replaces, `routes.newsArticle('001-project-announcement')`, the rendered `href`, the measured string lengths 184/145 and 137/73)                                                                                            |
| 19 | Fail-closed published surface still holds                                             | PASS            | §8: route set is `/404.html, /about/index.html, /index.html, /news/001-project-announcement/index.html, /news/index.html`; read-only guard probe → 0 source offences, 0 dist offences                                                                                                                         |
| 20 | This approval is not a release, and says so                                           | PASS            | §11: the human release reference is named as outstanding; no canon approval is implied; nothing here authorises a build or a deploy                                                                                                                                                                           |
| 21 | No `website/` file edited by this gate; no other worker's artifact touched            | PASS            | `git status --short` at verdict time: four untracked `.agents/work/` entries of this chain only. The guard probe is read-only and never prunes; scratch checkers live in `/tmp/t_bd1fd539/`                                                                                                                   |

## 1. Scope and method

Editorial gate over the progress-log wording package as it stands at 2026-09-17 09:37–09:55 CEST: the
frozen deck, the SEO package, the continuity verdict, the published 001 record, the release state of step
002, and the site surfaces the dev card will touch (`steps.ts`, `ProgressLog.astro`, `facts.ts`,
`navigation.ts`, `SectionHeading.astro`, `guards.mjs`, `check-dist.mjs`, `dist/`).

Commands run (repository root unless noted):

- `sha256sum` of every gate input at 09:37 and again immediately before this verdict — 14/14 unchanged (§ metadata table; script `/tmp/t_bd1fd539/hashes.py`).
- `git status --short`, `git log --oneline -1` (HEAD `9cefa55`) at the start and at verdict time.
- Python scratch extraction of the deck's §8 blocks and the 15 rendered string literals, per-string length and word counts, non-ASCII report, structural token classes (digits, years, coordinates, currency, percent, URLs, repo paths, card ids, month names, completion verbs, capitalised multi-word nouns), and a marker scan with the pattern list **read from `website/scripts/guards.mjs` at run time** (`/tmp/t_bd1fd539/scan.py`).
- Node read-only guard probe importing `guards.mjs` and calling `checkDist()` / `listRoutes()` / `scanSourceForGatedReferences()` — **the pruning postbuild script was deliberately not run**, so no file in `dist/` could be removed by this gate (`/tmp/t_bd1fd539/guards-probe.mjs`).
- Anchor inventory and text extraction over the built `website/dist/index.html`; `dist/` searched for the 002 route, the 002 slug, and the old strings (`/tmp/t_bd1fd539/anchors.py`, `/tmp/t_bd1fd539/probe.py`).
- Read-only SQLite reads of `~/.hermes/kanban.db` for the dev card body, the chain's statuses, and every comment on the writer / SEO / continuity / dev cards (`/tmp/t_bd1fd539/board.py`, `/tmp/t_bd1fd539/comments.py`, `/tmp/t_bd1fd539/live.py`).
- Printed, read-only comparison of the three strings the change replaces against the deck's §8 block.

**Not run, and not this card's:** any build, preview, deploy, DNS or provider action; any asset work; any
edit to `website/`, the articles, the deck, `docs/`, or the release record.

## 2. What this approval covers — and what it does not

**Approval names two blocks of the deck, byte-for-byte:**

- **§8.1**, deck lines 273–318, `BLOCK-8.1` sha256 `20a20b79…` — the file's new header comment, the `ProgressStep` interface (with the new optional `link` field and its doc comment), `progressHeading` and `progressSteps`. The dev transcribes the block verbatim into `website/src/features/progress/steps.ts` and adds the `routes` import; property names and import placement are the dev's (see R1).
- **§8.2**, deck line 330, `BLOCK-8.2` sha256 `9cde8026…` — the single `facts.ts` value.
- The **string payload hash** `e6a64c68…` (15 literals, deck order) is the cheapest byte-for-byte check for the dev's acceptance criterion; it is reproducible from the deck with the recipe in the metadata table and all 15 literals are ASCII.

**Approval scope, stated as limits:**

1. Only the string values above are approved. The deck's working-paper prose, its heading counts, its recommendations and its examples are **not** approved copy and are not part of the dev's remit.
2. The approval is conditional on the render keeping the section's existing detail styling on **all three** steps (R1, §7). That is an implementation condition, not a wording change.
3. No canon is approved. `Current state: Mission architecture` and `Current progress` / `Mission architecture` are editorial statements about what the published record and the continuity-checked canon support (§4, D1/D5).
4. No release, no route, no publication, no deployment is approved. §11 names what is still outstanding.

## 3. Copy gate — the 15 rendered strings, one row each

Measured: 695 characters across the 15 literals, 1–35 words each (deck §8.1: eyebrow, title, description,
three steps × `state`/`title`/`detail`, one link label; §8.2: two literals). Brands: `copy-editing`,
`brand-voice`, `editorial-review`.

| #  | String (deck order)                           | Result         | Copy judgement                                                                                                                                                                                                                                                                                                                                                                                                |
| -- | --------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | eyebrow `Progress log` (12)                   | PASS           | Plain, self-describing, consistent with the nav label `Progress` and the section id `timeline` (D3). Not a heading, so it does not compete with the h2                                                                                                                                                                                                                                                        |
| 2  | title `One step at a time.` (19)              | PASS           | Short, concrete, matches the section's actual structure (one step per release). Unchanged, correctly (D3)                                                                                                                                                                                                                                                                                                     |
| 3  | description (184, 35 words)                   | PASS with note | States how to read the list instead of promising maintenance — the defect it replaces ("later milestones will be added as the record develops") is gone. Two sentences; the second is 30 words with a semicolon and a comma-plus-and. Truth of clause 1 rests on the recorded trigger (observation A), its number is distributive-loose (observation D), and its first sentence echoes the h2 (observation E) |
| 4  | step 1 `state` `Announced` (9)                | PASS           | The record's own word — 001's frontmatter `status: Programme announced`. Replaces a label that described an activity instead of what happened (D2). No timing claim added                                                                                                                                                                                                                                     |
| 5  | step 1 `title` `Coalition and purpose` (21)   | PASS           | States the outcome the record carries. Removes a heading a reader could misread as work still running directly above a step labelled `Announced` (SEO §2 recorded the same as an improvement)                                                                                                                                                                                                                 |
| 6  | step 1 `detail` (137, 22 words)               | PASS           | Three claims, all 001's own: the ten teams (`:23`), the single uncrewed lander and rover (`:24–26`), the water-and-landscape question (`:29`). Noun-phrase register consistent with the list style; no verb needed and none implied wrongly                                                                                                                                                                   |
| 7  | link label `Read the announcement` (21)       | PASS           | Describes action plus document type, not "read more" and not a bare URL; distinct from the news card's own `linkLabel` (`Announcement summary`). Out of context it is unambiguous **today** — exactly one announcement is published — and WCAG 2.4.4 is met in context (the anchor sits inside the step's `<li>` with its title and state). Observation B carries the hero-link pair forward                  |
| 8  | step 2 `state` `Current progress` (16)        | PASS           | The label moves with the flag; it is a state of the log, not a claim of progress made. See observation C for the register mix across the three states                                                                                                                                                                                                                                                         |
| 9  | step 2 `title` `Mission architecture` (20)    | PASS           | Kept (D2) because it already names the open work. Doubles as the `facts.ts` D5 value, so the panel and the log use one term for one state                                                                                                                                                                                                                                                                     |
| 10 | step 2 `detail` (122, 20 words)               | PASS           | 001's own triple, verbatim in substance (`:73–74`), and the reason the log survives step 002's release: it names the questions, answers none, and does not claim that nothing is decided. Colon-plus-triple reads cleanly; "who builds what" is plain English for the work-share question                                                                                                                     |
| 11 | step 3 `state` `Later` (5)                    | PASS           | Positional, non-committal, unchanged                                                                                                                                                                                                                                                                                                                                                                          |
| 12 | step 3 `title` `Surface operations` (18)      | PASS           | Already published in this section today; names work the record has not reached and adds no detail about it                                                                                                                                                                                                                                                                                                    |
| 13 | step 3 `detail` (78, 14 words)                | PASS           | `the rover` replaces `the surface vehicle` and removes a real ambiguity (the landing platform is also a surface vehicle). The phrase "examine rocks in context" is already public on the same homepage (`facts.ts` Objective), so the string introduces no new vocabulary                                                                                                                                     |
| 14 | `Current state` (`facts.ts` label, 13)        | PASS           | Unchanged label; matches the grid's short noun register (`Name`, `Launch date`, `Objective`)                                                                                                                                                                                                                                                                                                                  |
| 15 | `Mission architecture` (`facts.ts` value, 20) | PASS           | Same claim as the log's highlighted step, in the grid's at-a-glance form. Fixes a live contradiction: the panel above the log currently reads `Coalition planning` while the log flags a later step. See observation F for the one phrase this leaves behind on the page                                                                                                                                      |

Section-level reading: the three entries now read _done / in hand / not settled_, which is the one reading
order a progress log owes a first-time reader, and they read that way without stating anything the
release gate holds.

## 4. The five decisions, judged as decisions

| Decision | As recorded by the writer (deck §5)                                                                                                                                                                                                                                           | Judgement here                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **D1**   | The honest public current state: "the coalition and its objectives are on the record, and the technical decisions that would make the mission real are still open"; carried by the highlighted step's `state`, `title` and `detail`                                           | **Accepted.** Both halves are true against published 001 (`:22–26` the coalition and purpose; `:73–74` the selections as "still ahead of us"), and the internal-canon half — that this work is in hand — is exactly the class of statement the card authorises and the continuity record checked against the private timeline. The clause states no timing, no percentage, no completion. _Attribution note:_ the deck says the clause is carried by step 2, but its first half is carried by **step 1** (`Announced` / `Coalition and purpose` / its detail) and only its second half by step 2 — observation G, working paper only |
| **D2**   | Step 1’s title renamed `Coalition planning` → `Coalition and purpose` with `state: Announced`; steps 2 and 3 keep their titles; step 2 becomes current and its detail becomes 001's triple; payload selection belongs **inside** `Mission architecture`, not as a fourth step | **Accepted.** `Announced` is the record's own word; the old title named an unannounced activity that is finished. Keeping the three-step shape and putting the open selections inside step 2 is the choice that makes the log need no rewrite when step 002 releases, and the reasoning for rejecting a separate step is sound: a fourth step would claim a milestone the public record has not described. The three detail-level edits (state what was announced; `the rover`; 001's triple in place of "testable vehicle and science plan") all improve precision                                                                  |
| **D3**   | Eyebrow stays `Progress log`; title stays `One step at a time.`; nav label `Progress` and section id `timeline` untouched                                                                                                                                                     | **Accepted.** No canon claim, no reader-facing drift, and it keeps the nav contract and the anchor out of review. The eyebrow and title are unchanged in `steps.ts` today, verified field for field                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **D4**   | Yes to a per-step optional `link`, published articles only, href from `routes.newsArticle(slug)`; step 1 only today; label `Read the announcement`                                                                                                                            | **Accepted.** The field is optional, so a step the record has not reached renders no anchor and cannot produce a dead route; the href comes from the route map rather than a hand-typed path (`navigation.ts:13`); and the only link that exists is to the one published article. The coupling the writer recorded — if the link is ever dropped, the description sentence must be revised in the same pass — is a real one and is carried in observation A                                                                                                                                                                          |
| **D5**   | One string outside the section: `facts.ts` `Current state` → `Mission architecture`; `missionIntro.description` deliberately kept; the item is independently droppable                                                                                                        | **Accepted.** It removes a direct contradiction between two parts of the same page, uses the grid's register, and overwrites no canon line (no line of `docs/` names the programme's current state). No live card or comment on the board instructs the dev to drop it, so the drop condition in the dev card body is not triggered. The kept `missionIntro.description` is a range statement, not a state claim — observation F                                                                                                                                                                                                     |

## 5. Claim coverage, and the after-002 test

The deck's §9 table was **re-derived, not accepted**: every quoted phrase was located in the published
article by script (`/tmp/t_bd1fd539/claims.py`, whitespace-normalised), and the load-bearing rows are:

| Claim in the copy                                                           | Verified at                                                                                                                                             | Result                   |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| "Ten national programme teams"                                              | `001-project-announcement.mdx:23`; the ten named partners counted in the same clause — 10                                                               | PASS                     |
| "one uncrewed lander and rover"                                             | `:24–26` "a single uncrewed Mars lander and rover together"                                                                                             | PASS                     |
| "how water changed an ancient equatorial landscape"                         | `:29` verbatim                                                                                                                                          | PASS                     |
| "what the rover carries, who builds what, and how the mission reaches Mars" | `:73` verbatim; `:74` "are still ahead of us"                                                                                                           | PASS                     |
| "survey terrain and examine rocks in context"                               | `:28–32` (unit mapping) and `:38–39` (one rover comparing altered with unaltered material); the phrase itself is already public in `facts.ts` Objective | PASS                     |
| "The public record moves one step at a time"                                | `:76` "That is where the public record begins"; `docs/SCENARIO.md:274` §"Continuity and release controls"                                               | PASS (site-copy framing) |
| The link target exists and is published                                     | published frontmatter; `/news/001-project-announcement/index.html` present in `dist/`                                                                   | PASS                     |
| Which work is in hand                                                       | internal canon only (`docs/timeline/` step 002, "Private situation": the selection work is under way). **No step-002 fact is stated in any string**     | PASS, non-public support |

**Step-002 containment (the load-bearing check).** The step-2 detail names 001's own three selections as
open and answers none of them. `docs/SCENARIO.md:277` binds payload details to step 002, the vehicle-design
material to step 003 and the launcher to step 004 — so at least one of the three named selections cannot be
settled by step 002 publishing, and the sentence cannot be invalidated by it. Nothing in the copy states a
payload scope, an instrument, a provider, a vehicle, a site, a date or a surface-life figure.

**No gap required escalation.** The honest current state is fully supported by the published announcement
plus internal canon; this card settles no canon question and asks the human for no canon decision. The
only human decisions outstanding are the ordinary ones (§11).

## 6. Continuity and SEO verdicts: consistency, and the carried observations

Both upstream verdicts are present, are on the same deck bytes, and agree with this gate:

- **SEO `approved as proposed`** (`.agents/work/seo/progress-log.md` §10) — five checks, all passing: heading outline, the one internal link, homepage prose with no compensating metadata change, terminology (`payload` and the region name both considered and left out), and a clean disclosure audit of every recommended surface. Its §7 implementation constraints are routed to `t_4383dbcc` and are reflected in R1.
- **Continuity `continuity clear`** (`.agents/work/continuity/progress-log.md`) — six checks, all passing, including the after-002 test run string by string and a marker scan with a positive control.

Every observation either pass carried is closed or explicitly carried forward below; none is left hanging.

| Carried observation                                                                                                     | Disposition at this gate                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Continuity §10.1 — the description's plural is coupled to the maintenance trigger                                       | **Carried forward**, acknowledged here as a live obligation. It is recorded in deck §6 and in the frozen file-header comment (observation A)                               |
| Continuity §10.2 — the deck §5 heading counts four decisions while listing five                                         | **Explained and carried** (observation C): the writer's card asked for four and D5 is the writer's addition. Working paper only; this gate may not edit the deck           |
| Continuity §10.3 — pre-existing homepage items (`To be announced` date rows; the step-001 plate as the news card image) | **Not reopened.** Both are out of this deck's remit; the first is already routed to continuity `t_a0ee9abf` and recorded there as not a canon conflict. Carried, unchanged |
| Continuity §10.4 — supersession note for the earlier 001 continuity row                                                 | **Accepted as recorded.** No action; that row judged the chrome as it stood and is not edited                                                                              |
| Continuity §10.5 / SEO §7.1 — the positional detail selector un-styles the linked step                                  | **Carried as R1** (§7) with the SEO pass's measured fix, on the dev card's own thread                                                                                      |
| SEO §9.1 — the hero's `Read the first announcement` and the new `Read the announcement`                                 | **Carried forward** (observation B); judged non-material, with the measured anchor inventory in §1                                                                         |
| SEO §9.2 — the deck's "testable" rationale is looser than the article                                                   | **Confirmed as the SEO pass read it**: the over-claim was the _named artefacts_, not the adjective, and the replacement sentence is 001's own list. No change              |
| SEO §9.3 — the fact-grid launch date beside 001's window frame                                                          | **Not reopened**, already routed (`about-method.md` §15 row 5 → `t_a0ee9abf`)                                                                                              |

## 7. Dev scope check, and the rendering condition R1

**The dev needs no wording decision.** Deck §4.1 fixes where the copy lives (no new file, no collection
change, the strings stay in `steps.ts`, the stale header comment is replaced in the same edit), and the dev
card body names deck §8 as the source of every value. Every literal and figure the dev card body itself
states was checked against the deck:

- the header comment it replaces is verbatim the text currently at `steps.ts:4`;
- `routes.newsArticle('001-project-announcement')` matches `navigation.ts:13` (`/news/${slug}/`), and the rendered form `href="/news/001-project-announcement/"` matches the route the site already emits;
- its measured string sizes (description 184 against 145; longest step detail 137 against 73) match deck §10 and the SEO §4.1 table;
- it does not restate, reorder or re-scope any frozen string, and it correctly forbids rejecting the SEO/continuity changes by hand;
- the `facts.ts` item matches §8.2 exactly, with the drop condition intact and **not** triggered.

**R1 — the one condition attached to this approval (rendering, not wording).** The card body's prescribed
`<p class="timeline-link">` after the detail paragraph makes the component's positional rule
(`ProgressLog.astro:103`, `.timeline-list li > div:last-child > p:last-child`) stop matching the linked
step's detail. The SEO pass measured the result on a built copy: the linked step's detail renders 16 px in
the primary text colour at 100 % width while its two neighbours stay 15.2 px / muted / 30 rem. **The step
that gains the link must not ship with a differently styled detail paragraph.** The dev may satisfy this by
any means (the class-keyed rule the SEO pass verified, a different selector, or another arrangement) — the
constraint is parity across all three steps, and the SEO comment on `t_4383dbcc` already gives the dev
explicit priority for parity over the card body's literal "no change to the … detail markup". This gate
recommends the SEO pass's suggested acceptance addition: after the build, measure `getComputedStyle` for the
detail paragraph of **every** step and require identical font size, colour and max width.

R1 does not change a string and does not hold up the chain: `t_4383dbcc` proceeds on this approval.

## 8. Fail-closed published surface, measured

| Check                                | Command                                                                                                                                                  | Result                                                                                                   |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Route set                            | read-only call of `listRoutes()` from `guards.mjs`                                                                                                       | `/404.html, /about/index.html, /index.html, /news/001-project-announcement/index.html, /news/index.html` |
| Source / dist guard                  | read-only `scanSourceForGatedReferences()` + `checkDist()` (no prune)                                                                                    | **0 source offences, 0 dist offences**                                                                   |
| Step-002 route and reference         | `dist/` walked for any path or file containing `002`, and text-searched for the 002 slug                                                                 | **no path hit, no content hit**                                                                          |
| The strings are not public yet       | `dist/index.html` still contains `Coalition planning` (×2), `Next chapter`, the old description and `Using the surface vehicle`; `timeline-link` count 0 | correct: the dev card has not run, so this gate judges proposed copy, not a live surface                 |
| The link target is already reachable | `dist/index.html` `href="/news/001-project-announcement/"` → 1 occurrence (the news card)                                                                | the route this wording will point at exists and is linked from the page today                            |

## 9. Confidentiality scan (commands and real hit counts)

Pattern list read from `website/scripts/guards.mjs` (`gatedTextMarkers`) **at scan time**, so no marker
value is copied into this record or into any repository file; withheld classes are named by class only.

```
python3 /tmp/t_bd1fd539/scan.py     # extraction, structural classes, marker scan + positive control
```

| Target                                                     | Guard markers (4, values withheld)                          | Structural token classes                                                                                                                                |
| ---------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The 15 rendered string literals (what the dev transcribes) | **0 hits**                                                  | 0 digits, 0 years, 0 coordinates, 0 currency, 0 percent, 0 URLs, 0 repo paths, 0 card ids, 0 month names, 0 completion verbs, 0 multi-word proper nouns |
| Marker **positive control** over `docs/timeline/`          | fires: 1–2 hits on the withheld step files, 0 on step 001's | — (proves the scan is live, not a silent no-op)                                                                                                         |
| Built `website/dist/index.html`                            | —                                                           | no withheld material; guard probe clean (§8)                                                                                                            |

**This record contains no gated marker and no withheld value.** Step 002 is named by number and its slug is
elided; the withheld classes are named by class. Scratch checkers and pattern lists live outside the
repository at `/tmp/t_bd1fd539/`.

## 10. Non-blocking observations (explicit; each with an owner)

None of these is a material failure, and none changes a frozen string. They are recorded so that no later
reader has to rediscover them.

- **A — the description's plural is a live obligation, not a fact.** "Published steps link to the article
  that carries them" is true today (one published step, and it links) and stays true only while the recorded
  trigger is honoured: when a step's article publishes, that step gains its `link`. The obligation lives in
  deck §6 and in the frozen file-header comment ("Move the current flag and add the link when a step's
  article is published"), and it is the one thing in this package that a future editor must actually do.
  **Owner:** writer, on the release that publishes step 002's article. **Acknowledged as carried.**
- **B — two announcement links with near-identical labels on one page.** The hero says
  `Read the first announcement →` and points at the on-page newsroom anchor `#updates`; the new progress
  link says `Read the announcement` and points straight at the published article. Measured anchor inventory
  of the built homepage: `Red Horizon`, `News`, `Mission`, `Progress`, `Read the first announcement →`
  (`#updates`), `Announcement summary` (`/news/001-project-announcement/`). Both labels are honest, they are
  not identical, and the hero link is outside this deck's strings, so this is **not a material accessibility
  or coherence failure** and does not justify a corrective card while the `website/` queue has a tail. It is
  the obvious thing for the next homepage pass to reconcile (distinct label, or one target). **Owner:**
  writer / homepage owner on the next homepage pass; recorded by the SEO pass too (its §9.1).
- **C — the deck §5 heading counts four decisions and the section records five; this gate's own card body
  repeats the mismatch.** The writer's card `t_11eee417` required _four_ explicit decisions; D5 (the
  `facts.ts` consistency string) is the writer's own addition, so the heading is defensible as "the four the
  card asks for" but ambiguous, and my card's acceptance criterion says "the four decision judgements" while
  its §1 says five. **Working paper only — no frozen string is affected, and this gate may not edit the
  deck.** This record judges all five (§4). **Owner:** writer, if the deck is ever re-titled.
- **D — distributive-number looseness in the description.** "Published steps link to the article that
  carries them" pairs a plural subject with a singular object; the intended reading is one article per step.
  Understandable and accurate, and the frozen copy must not be re-punctuated by the dev. Optional future
  wording, if the deck is ever reopened: "…link to the article that carries them" → "…link to their article".
  **Owner:** writer, on any future pass on this deck.
- **E — the description's first sentence echoes the h2 directly above it.** "The public record moves one
  step at a time." sits immediately under `One step at a time.` The echo is mild and the sentence does the
  work of introducing the reading rule, so no change is required; recorded so a later pass does not read it
  as an oversight. Same sentence: "the record moves" is figurative (a record grows rather than moves).
  **Owner:** writer, on any future pass on this deck.
- **F — one `surface vehicle` remains on the page, by decision.** After the change, the homepage's only
  instance is `missionIntro.description` ("…to the work of its first surface vehicle"), kept deliberately by
  D5 because it describes the record's _range_ rather than the current state, and because "surface vehicle"
  is the class name the mission brief already owns (it also names the class in the withheld-dossier
  discussion, not the designation). The log now says `the rover` instead, which is the disambiguation D2
  wanted. The divergence is one-sided and deliberate. **Owner:** writer, if a future homepage pass wants one
  term throughout — no change is required now.
- **G — the deck attributes the whole D1 clause to step 2.** Its first half (the coalition and its
  objectives are on the record) is carried by step 1's `Announced` / `Coalition and purpose` / detail; only
  the second half (the technical decisions are still open) is carried by step 2. The decision is realised
  either way; the attribution sentence in the working paper is imprecise. **Owner:** writer, working paper
  only.
- **H — the register mix across the three states.** `Announced` (participle) / `Current progress` (noun
  phrase) / `Later` (adverb) are three different grammatical classes. They read as one progression
  (happened / in hand / ahead) and `Announced` is the record's own word, so this is accepted as decided —
  recorded only so that a future editor knows the mix was seen and kept, not missed. **Owner:** none; no
  change.
- **I — the internal stage name survives in a source comment.** Replacing the stale header comment in
  `steps.ts` removes one instance of the internal stage name, but the same vocabulary remains in
  `facts.ts`'s header comment, and in `navigation.ts`, and the dev card is explicitly told not to touch
  `facts.ts` beyond the one value. These are source comments only — they never reach `dist/`, they appear in
  no public string, and the site's guard does not treat them as gated. Flagged only as site hygiene for a
  future pass. **Owner:** dev/website owner on a future hygiene pass.
- **J — the new link has no style rule today.** Nothing existing covers it (`timeline-link` count 0 in
  `src/` and in `dist/`); the dev card asks for the muted/accent treatment, and its unstyled box was measured
  by the SEO pass at 185 px in the primary colour directly under a muted paragraph. Covered by R1's scope
  (rendering) and by the dev card. **Owner:** `mars-ai-simulator-dev` on `t_4383dbcc`.
- **K — the earlier 001 continuity row and the pre-existing cartography/question are not reopened.** The
  chrome row that judged the old wording, and the two pre-existing homepage coherence questions (the
  `To be announced` date rows; the step-001 plate used as the news card image), stand exactly as continuity
  §10 recorded them. **Owner:** unchanged (`t_a0ee9abf` for the first).

## 11. Release boundary and what remains outstanding

`approved` is an **editorial gate only**. It is not canon approval, not a continuity verdict for a future
revision, not a release, and not authorisation to build, preview or deploy anything.

Outstanding after this verdict:

1. **Dev transcription** — `t_4383dbcc` (`mars-ai-simulator-dev`), also parented on `t_4b49346b` (the
   one-`website/`-card-at-a-time rule), transcribing deck §8 verbatim, with R1 and the SEO pass's measured
   remediation applied.
2. **A current human release reference** before the wording's first public deployment. The operator
   commissioned the wording ("also, revisit 'progress log' section wording on homepage", relayed verbatim on
   `t_11eee417`), but no release reference for this homepage surface is recorded on any card or in any
   repository file, and none may be inferred. An editorial `approved` does not supply it.
3. **The maintenance obligation in observation A**, on the release that publishes step 002's article — a
   one-line, writer-owned follow-up with no card created for it (the deck records that the 002 release graph
   is being built live by the planner and a duplicate card would collide with it).
4. **No Red Horizon canon is approved by this record.** Where the copy makes a state claim, it is an
   editorial statement about what the published record and the continuity-checked canon support, and it is
   reversible by an ordinary editorial pass.

## 12. Record identity

This is the first review record for the `progress-log` slug (`t_bd1fd539`). There is no superseded revision
of this file to record. If a later pass re-checks the package, keep this file's revision history additive:
re-hash the deck first, then state what moved around an unchanged article.

Evidence paths for a later reader:

- `/tmp/t_bd1fd539/probe.py`, `scan.py`, `claims.py`, `hashes.py`, `anchors.py`, `guards-probe.mjs`, `board.py`, `comments.py`, `live.py` — all outside the repository, read-only, re-runnable.

## Final label

approved
