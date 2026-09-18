# Planner brief: homepage roadmap round 3 — four steps and a step-1 rename

## 0. Brief metadata

| Field               | Value                                                                                                                                                                                                                                                                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card                | `t_9f4bbea2` — `mars-ai-simulator-planner`, follow-up to `t_116ca903` (writer, completed)                                                                                                                                                                                                                                                                |
| Stage               | Planner commission · advances **no** timeline step                                                                                                                                                                                                                                                                                                       |
| Deliverable         | A planner decision paper (this file) and a five-card child graph                                                                                                                                                                                                                                                                                         |
| Revision            | 1 — first pass on this card                                                                                                                                                                                                                                                                                                                              |
| Inputs              | `t_116ca903` parent handoff + parent deck `.agents/work/drafts/roadmap-004-link.md` (recipe hash `2dbbafcf…`); four published articles (`001` `923a12d8…`, `002` `7b69bd7f…` HEAD / `8dc22a4f…` working copy, `003` `51f2ee69…`, `004` `7da71fec…`); `steps.ts` `1236ead7…`; `progress-log.test.mjs` `4fc56e74…`; `docs/SCENARIO.md` continuity controls |
| Skills applied      | `create-article-workflow` (chain shape), `brand-voice` and `copy-editing` (read before deciding)                                                                                                                                                                                                                                                         |
| Public/canon impact | None directly — this card files no website/ edit, runs no build, commits nothing, pushes nothing, deploys nothing, publishes nothing. The children do the work; the planner decision is the spec they execute under the editorial gate                                                                                                                   |
| Status              | Planner decision recorded. Writer deck, SEO pass, editorial gate, dev transcription, and a human-rename escalation to be filed as children of this card (see §6)                                                                                                                                                                                         |

This brief is the planner's record of what the children must produce and why. It is
not itself a writer deck; the writer card builds the writer deck off it.

---

## 1. The commission, the parent, and what this card adds

The human story owner asked for two changes to the homepage mission roadmap:

1. more than three steps,
2. a step-1 title that does not read as a political coalition.

The parent card (`t_116ca903`, writer, completed) was scoped to the round-2.5
curation gap exposed by the publication of article 004 — one link move and one
subordinate `detail` clause, no fourth step. The operator note on the parent
(2026-09-17, ~20:00 CEST) routed both of the round-3 asks to this card. The
parent's §11 handed the writer's deck and the live measurement forward; this
card builds on them, and it does **not** duplicate the parent's decisions.

Round-3 baseline (live, measured on `origin/main` = `5a59f340…`):

- `steps.ts` carries three steps: 1 `Announced` / `Coalition and purpose` → 001
  (`Read the announcement`); 2 `In hand` / `Mission architecture` + `current: true`
  → 003 (`Read the rover design`); 3 `Ahead` / `Surface operations`, no link.
- The four published articles (`001`–`004`) carry four distinct milestone classes
  the panel currently collapses into three steps.
- The published record uses the noun `coalition` in six places across five files
  (`steps.ts:33`, `news/001-project-announcement.mdx:77`, `news/002-payload-selection.mdx:87`,
  `news/004-launch-provider.mdx:14`, `features/mission/facts.ts:18`, `features/mission/Hero.astro:12`).
- The word "coalition" sits inside the rendered title of step 1 — the only roadmap
  string the human reads on first contact with the panel.

## 2. Decision 1 — step count: **four steps**

**Decided: the roadmap grows to four steps.** Step 3 becomes `Integration and
readiness` (unreached), `Surface operations` is pushed to step 4 (still unreached,
still last, still linkless).

Evidence (record-only):

- The published record carries four released milestones. Each is named as a
  distinct decision class:
  - `001` — programme announcement (name, partners, purpose, budget frame,
    schedule frame).
  - `002` — payload scope agreed (four measurement classes; instruments still
    being chosen).
  - `003` — RH-01 Pathfinder design frozen.
  - `004` — delivery architecture chosen (Ariane 64, cruise stage, lander
    platform with entry/descent/landing and surface relay; integration and
    readiness work still ahead).
- Article 004 explicitly names the next body of work, `004:50–52`: _"What sits
  between this decision and the flight is integration and readiness work:
  bringing the elements together into one stack, testing that stack and its
  parts against the conditions the mission will face, and closing the reviews."_
  The article does not call this a new milestone _step_, but it does call it
  _work_, names it by name, and structurally separates it from "the decision"
  (`004:2`, `004:14`, `004:52`) and from "the flight" (`004:48–49`). The panel
  already names two such work classes by name (`Mission architecture`, `Surface
  operations`); a third — the only one 004 names by its own noun phrase — sits
  unnamed in the panel today.
- `docs/SCENARIO.md` §"Continuity and release controls" requires every public
  fact to be sourced to the released record. The phrase "integration and
  readiness work" is a released noun phrase (`004:50`), so naming it on the
  panel is in-bounds; no new date, no new institution, no new event class.

**Why not five steps.** No published sentence opens the surface-operations phase
or any other unreleased body of work. The parent deck §3 already documented
this with two article citations — `004:18` _"no part of the flight stack has
been integrated with a launcher or delivered to a launch site"_ and
`004:52–53` _"The programme has published a decision, not a countdown."_ A
fifth step would have to name a phase the record has not opened, which fails
the continuity control.

**Why not keep three steps and explain to the human.** The operator note
explicitly routed the _expansion_ to this card; the human's first ask was
unambiguous (*"mission roadmap has only 3 steps .. add more"*). Adding a step
is what they asked for; refusing on record grounds would re-litigate a question
the human story owner already settled.

**Rejected alternatives:**

- **Adding "Vehicle design" as a step in its own right.** The vehicle design is
  the rover (003), which the parent deck §2 already folded into "Mission
  architecture" because 003's own closing clause names it that way
  (`003:71` _"the mission around it is still being assembled"_). Carving it
  out would split one body of work the record treats as one.
- **Adding "Payload selection" as a step.** Round 2 explicitly rejected this
  (round-2 deck §5), and 002 itself says _"That scope is not a finished
  instrument list"_ (`002:23–24`). A panel step named for a partial decision
  reads as forward-asserting.
- **Adding "Integration and readiness" as the _only_ new step, with "Surface
  operations" demoted.** "Surface operations" is the test-pinned last step
  (`progress-log.test.mjs:220`); changing its position is a test-shape change
  that the dev card must carry in the same edit.

## 3. Decision 2 — step 1 title: **`Programme and purpose`**

**Decided: step 1's `title` becomes `Programme and purpose`.** The `state`
(`Announced`), the `detail` (record's own 001-sourced sentence), and the `link`
stay unchanged.

The record's own dominant wording for the partners is `001:23` _"Ten national
programme teams"_, and the dominant wording for the work is `001:77`
_"shared objective"_. The current step-1 detail already says "Ten national
programme teams" — the political reading comes from the **title's** "Coalition"
noun, not from the partners themselves. So the rename is the title only.

**Candidate comparison (each row survives the political-reading test):**

| Candidate               | Source                                                                         | Survives political reading                                              | Step-pair rhythm                                                                    |
| ----------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `Programme and purpose` | `001:23` `programme teams`, `001:29–44` _purpose_, `001:77` _shared objective_ | yes — drops the noun outright                                           | "Programme / Mission architecture / Integration and readiness / Surface operations" |
| `Partners and purpose`  | `001:24` _"partners"_, `001:64` _"each partner holds one vote"_                | yes — but recasts the partners as the headline; slight off-record       | "Partners / Mission architecture / …"                                               |
| `Ten teams and purpose` | `001:23`                                                                       | reads as a count; doesn't generalise past step 1                        | weaker                                                                              |
| `Programme and mission` | `001:75` _"practical decisions that turn a mission idea into a testable plan"_ | yes — but "mission" is overdetermined (steps 2–4 are all mission-named) | weaker — collides with step 2's `Mission architecture`                              |

`Programme and purpose` (recommended) drops the noun that triggered the
reading, keeps `purpose` — the 001 article's load-bearing noun after "Mars
mission" and "shared objective" — as the second clause, and reads as _what
the programme is and why it exists_ rather than _who joined_. With the
four-step shape (Decision 1) the title set reads cleanly: _what was
announced_, _what's being assembled around the rover_, _what work sits
between the assembly and the flight_, _what happens once the rover is on
the ground_.

**Not in scope for this card.** The word `coalition` appears on five other public
surfaces: `001:77` (announcement closing), `002:87` (payload briefing), `004:14`
(launch architecture lead), `facts.ts:18` (mission-brief description),
`Hero.astro:12` (homepage hero). This card does **not** rewrite any of them.
Editing a published surface is a publication decision; the editorial gate
owns the release, and the operator route for a published-rename decision is
the human story owner (per `docs/SCENARIO.md` §"Continuity and release
controls" — _the coalition and the lifecycle budget frame are introduced
with the project announcement (step 001); anything beyond that frame waits
for a later step_). This card files a separate child escalation to the
human story owner (see §6) and does not include those five edits in the
publish chain.

## 4. Decision 3 — `current: true` stays on step 2

**Decided: step 2 (`Mission architecture`) keeps `current: true`.**

Reasoning identical to the parent deck §3, carried forward:

- `progressSteps` header comment (`steps.ts:9–10`): _"move the current flag
  only when the record carries the next step's opening."_
- `004:18` — _"no part of the flight stack has been integrated with a
  launcher or delivered to a launch site."_
- `004:52–53` — _"The programme has published a decision, not a countdown."_
- `004:50–52` — names the work between this decision and the flight
  (integration and readiness) as the _next_ body of work, which is exactly
  the body of work the new step 3 names on the panel. The current flag
  remains on step 2 because step 2 is still the work in hand; the next step
  (Integration and readiness) is `Ahead`, not on.
- Test invariant (`progress-log.test.mjs:255`): exactly one `current`. Step
  2 carries the only one.

**What would move the flag** (recorded for round 4): the record carrying the
opening of the body of work 004 names — i.e. a published article that
reports integration and readiness work underway. That is a step-005-class
release, and the launch-day forms stay withheld (gate ledger `t_4d1b3041`,
`.agents/work/reviews/004-launch-provider-gates.md` §R3.4 + condition C5 —
the families that stay withheld are operating-company/institution and
facility names and the launch-day forms). No step-004-adjacent release can
move the flag.

## 5. Decision 4 — test impact and the two-file diff surface

**Files touched by this round (both already a hotspot with round 2.5):**

- `website/src/features/progress/steps.ts` — three changes:
  - step 1 `title`: `Coalition and purpose` → `Programme and purpose`.
  - one new step entry inserted between current step 2 and current step 3:
    `{ state: 'Ahead', title: 'Integration and readiness', detail: '...' }`,
    no `link`, no `current`.
  - the file-header comment's second rule line (currently `steps.ts:9–10`) is
    extended to name the "add a step" branch the round exercises. (Source
    comment only, never rendered.)
- `website/test/progress-log.test.mjs` — one change:
  - the history comment at `:13–14` is extended by one line describing round 3
    (the new step and the step-1 rename), in addition to the round-2.5 line
    the parent's §7 block 3 already adds. Comment-only; no assertion changes.

**No assertions need to change.** The test predicates are:

- `:220` — `expect(progressSteps[lastIndex].title).toBe('Surface operations')`.
  Holds because step 4 is `Surface operations`.
- `:255` — exactly one `current`. Holds because only step 2 carries it.
- `:184–224` — link contract predicate-based, asserts one anchor per step
  that declares `link`. Holds because only steps 1 and 2 declare `link`
  (steps 3 and 4 are `Ahead`).

**Header comment recipe.** The dev transcription card must update the
file-header comment's wording to: _"Add a step when the record carries a
new body of work; add a step's link when its article is published, and
re-choose it when a newer article carries the step; move the current flag
only when the record carries the next step's opening."_ This is a
source-comment wording change, never rendered. The parent's §6 row 4
already extended the "re-choose" branch for round 2.5; round 3 adds the
"add a step" branch in the same line.

**Test pinned strings (`progress-log.test.mjs:13–14`)** — the round-2 deck
wrote a one-line history comment; the round-2.5 deck extends it with a
004-link line. Round 3 extends it again with a third line:

```
* Round 2 (card `t_cc2dfd29`) added the second roadmap link — step 2,
* `Mission architecture`, now points at `/news/003-vehicle-design/` — and the
* 004 round re-chose it: the step's newest carrier is `/news/004-launch-provider/`.
* Round 3 (card `t_9f4bbea2`) added a third step, `Integration and readiness`,
* for the body of work 004 names between the architecture decision and the
* flight, and renamed step 1 to `Programme and purpose`.
```

The writer card transcribes this verbatim (its §7 block N+1). The test
assertions are unchanged.

## 6. The chain — five children of this card

**Standard publish chain (four cards, one lane, depends in order):**

| Order | Title                                                              | Assignee                   | Parent              | Writes                                                                                                                                                             |
| ----- | ------------------------------------------------------------------ | -------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | Writer deck: homepage roadmap round 3 (four steps + step-1 rename) | `mars-ai-simulator-writer` | this card           | `.agents/work/drafts/roadmap-round-3-deck.md`                                                                                                                      |
| 2     | SEO pass: homepage roadmap round 3                                 | `mars-ai-simulator-seo`    | writer-deck card    | `.agents/work/seo/roadmap-round-3.md`                                                                                                                              |
| 3     | Editorial final gate: homepage roadmap round 3                     | `mars-ai-simulator-editor` | SEO card            | `.agents/work/reviews/roadmap-round-3.md` + `.agents/work/continuity/roadmap-round-3.md`; files the dev card                                                       |
| 4     | Dev transcription: homepage roadmap round 3                        | `mars-ai-simulator-dev`    | editorial-gate card | `website/src/features/progress/steps.ts` + `website/test/progress-log.test.mjs`; commits only those two paths; pushes once the gate's release decision is recorded |

**Sequencing rule (the hotspot).** `steps.ts` is a single file. Round 2.5's
chain (SEO card `t_1b0b1951` running as this brief is written → editorial
gate → dev transcription → push) is mid-flight. The dev transcription card
in round 3 **must depend in prose on round 2.5's dev transcription having
landed first**; its body must say _"this card must be the only card editing
`steps.ts` in its run window. If the round-2.5 dev card has not landed,
`kanban_block(kind='dependency')` and wait. Do not start a parallel checkout
on `steps.ts`."_ The chain runs one lane at a time.

**Separate, non-blocking child:**

| Order | Title                                                                  | Assignee                    | Parent    | Writes                                                                                                  |
| ----- | ---------------------------------------------------------------------- | --------------------------- | --------- | ------------------------------------------------------------------------------------------------------- |
| 5     | Coalition rename on published surfaces — escalate to human story owner | `mars-ai-simulator-planner` | this card | none (information card); the body names the five other public instances and proposes three rename forms |

The escalation card does **not** sit in the publish chain. It is filed as
`todo` and is independent of the publish chain. The human answer routes to
either a separate writer card or to the editorial gate of an existing
article revision; the chain that publishes the roadmap panel is unaffected.

## 7. Withheld-class audit on the planner decision

The four decisions introduce **zero new withheld facts**:

- Decision 1 names the new step `Integration and readiness` and a `detail`
  sentence lifted from `004:50–52`. The noun phrase is `004:50`'s own
  wording; the sentence contains no date, no figure, no launcher
  designation, no institution or facility, no coordinate, no rover name,
  no digit, no ISO date, no currency. The audit pattern (the same one the
  parent deck §10 ran) records 0 hits across ten withheld families on the
  new strings.
- Decision 2 changes one title from `Coalition and purpose` to `Programme
  and purpose`. The new title contains no digit, no institution, no
  launcher, no date, no figure.
- Decision 3 keeps `current: true` on step 2; no string change.
- Decision 4 changes two source comments only; no rendered string changes
  outside Decision 1 and Decision 2.

The writer deck's §9 must re-run the same audit on its own §7 frozen blocks
and print the count into its §10 validation table. The SEO card's audit and
the editorial gate's continuity check repeat it.

## 8. Out of scope (recorded so the writer does not pre-empt)

- Rewriting any of the five other public instances of `coalition` — those
  are published surfaces and belong to the escalation card (§6, item 5).
- Changing `progressHeading.eyebrow`, `title`, or `description` — round-2
  approved wording; still true against the four-step list.
- Moving `current: true` onto the new step 3 — the record does not carry
  that opening (Decision 3).
- Renaming `Mission architecture` (step 2) or `Surface operations` (step
  4) — both are record-noun phrases that survive every reading test and
  the human did not ask to rename them.
- Adding a fifth step. Decision 1's evidence does not support one.
- Adding a date, a digit, an institution name, or a launcher designation
  to any new panel string.
- Editing `facts.ts`, `Hero.astro`, or any `website/news/<slug>.mdx` file
  from this round. The publish chain touches only `steps.ts` and
  `progress-log.test.mjs`.

## 9. What this card hands to round 4

Round 4 (not this card's work) is whichever of these lands next:

- A new published article that opens the next body of work 004 names
  (integration and readiness) — that moves `current: true` onto step 3
  and is the editorial gate's call, not this card's.
- A human story owner answer to the §6 item 5 escalation — that opens a
  separate revision cycle on the five other public instances of
  `coalition`.
- A fifth-step release — out of scope on the current record (§2).

Nothing in this brief binds round 4. The decisions here are the spec for
the chain in §6.

---

**Next recommended owner and action:** `mars-ai-simulator-writer` on the
writer-deck child card (§6, item 1). The writer reads this brief and the
parent's deck, then writes `.agents/work/drafts/roadmap-round-3-deck.md`
with the §6/§7 transcribable strings, the frozen block hashes, the §9
withheld-class audit, and the test-comment extension. After the deck lands,
`mars-ai-simulator-seo` runs the SEO pass, `mars-ai-simulator-editor` runs
the gate and files the dev card, and `mars-ai-simulator-dev` transcribes
once the round-2.5 dev card has landed.
