# Draft: progress-log — the homepage progress-log wording (round 2)

## Draft metadata

| Field                   | Value                                                                                                                                                                                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card                    | `t_b634310c` — `mars-ai-simulator-writer`, stage `site-foundation`                                                                                                                                                                                                                          |
| Deliverable             | Site copy strings (not MDX): eyebrow, title, description and the three steps of `website/src/features/progress/steps.ts`, plus one navigation label in `website/src/lib/navigation.ts` (§8.3)                                                                                                |
| Skills applied          | `brand-voice` (preloaded), `copy-editing`                                                                                                                                                                                                                                                   |
| Timeline step           | `site-foundation` (homepage chrome copy, second round). Advances **no** timeline step                                                                                                                                                                                                       |
| Supersedes              | This deck's first-round revision (`t_11eee417`, deck sha256 `9d2a14e6…`, 28,904 B before formatting; the copy is live today — §1)                                                                                                                                                            |
| Factual bound           | The **published** record only: `website/news/001-project-announcement.mdx`, `website/news/002-payload-selection.mdx` and `website/news/003-vehicle-design.mdx`, all three `publication: published` with routes in `website/dist/`                                                              |
| Structural bound        | `docs/SCENARIO.md` §"Continuity and release controls"; `docs/INSTRUCTIONS.md` §"Canon and information safety"                                                                                                                                                                                |
| Status                  | `draft` — no approval exists, nothing under `website/` was edited by this card, no route changed, no build and no deploy run                                                                                                                                                                 |
| Public/canon impact     | No new canon. Rewords a **live** public surface (the round-1 copy is the wording served today, §10.7) so that it matches the published record of 001 + 002 + 003, and renames the section: one eyebrow string and the fourteen nav anchors that lead to it (two on each of the seven built routes, all from `navigation.ts:63`) |
| Human release reference | The operator commissioned this round (2026-09-17), relaying the human story owner verbatim. An editorial `approved` is not a release; nothing is deployed by this card                                                                                                                       |
| Visual brief            | None — no new imagery; the section's markers are decorative CSS                                                                                                                                                                                                                             |
| Deck file sha256        | `ccaac88bbc729ba980200c1ca46f980397a751695e241a4ee85cab9888387b15` — hash of this file with the 64-hex value in this row replaced by the literal `<64-hex>`; recipe and re-check in §10.9 · see §0.1 on formatter drift                                                                        |
| Frozen-block hashes     | `BLOCK-8.1` `a6b774eb20e26c13eaf9450362f3a56ad41cf02d4c848f645e5a404390edaf45` (2,035 bytes) · `BLOCK-8.3` `6773c7d688642088949826a03fed05b9f54d34de42e2efdf3b18e9dd319bb280` · `STRINGS-15` `9a54650186c5ccab2b709e4b11a23b58799a3dbcf3b1612b5df9809f674e7a0f` (15 literals; recipes in §8.4) |

The operator's commission, verbatim: _"make planner update 'progress log' section on
homepage, it does not make sense .. prefer better naming; rough dates if available,
clickable links to articles"_.

String lengths and hashes in this file were produced by scratch scripts outside the
repository (`/tmp/t_b634310c/`); they are measured, not estimated.

---

## 0. What this round changes, and where it differs from the card's recommendation

The card's D1–D5 are planning-level decisions this deck may not change. Four of its
recommendations were opened by the card itself as alternatives, and this deck takes the other
branch on each; the last two rows record consequences rather than disagreements. Recording all
six here, in one place, so no reviewer has to reconstruct them from §5:

| # | The card's recommendation                                                                                        | This deck                                                                                        | Why (one line, full reasoning in §5)                                                                                                                                                                    |
| - | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | Move `current: true` to step 3 (`Surface operations`)                                                             | **Keeps `current: true` on step 2**                                                              | The card allows this branch if a released sentence supports it; two do (§5, D2). Moving it would assert surface operations are the work in hand, and the record says nothing has been built or launched    |
| 2 | Rename step 2 to name what is now public (`Rover and instruments`)                                                | **Keeps the title `Mission architecture`**                                                        | The step is the assembly of the whole mission; naming its two published parts would state the settled half and hide the open half, and it would break the one-term-per-state link with the mission panel  |
| 3 | Link step 2 to 002 and/or 003                                                                                     | **Links 003 only**                                                                                | D0 freezes one `link` per step; 003 carries the design claim outright, recaps the payload scope, and carries the onward link to 002 (§5, D2)                                                              |
| 4 | D5: move the `facts.ts` `Current state` value to the new highlighted step's title                                  | **D5 resolves to no change** (the existing value is still the highlighted step's title)            | Follows from 1 and 2: `Mission architecture` is both the highlighted step's title and the panel value, so the two surfaces already agree (§5, D5)                                                        |
| 5 | D1: propose a new eyebrow; state whether the nav label and the section id move                                    | **Eyebrow + nav label renamed; the section id stays `timeline`**                                  | The human rejected the section's naming, and the nav label is the section's other reader-facing name; the id is internal and names the form the component draws (§5, D1)                                  |
| 6 | §6 "unchanged"                                                                                                    | **§6 keeps its shape; its state is updated**                                                       | The round-1 §6 predicted the next move as "add the 002 link, no reword"; 003 has since published and the trigger has now fired against a reworded detail (§6)                                             |

The section's **structure** (§4), the file layout, the single optional `link` field and the
fifteen-literal shape are unchanged from the round the editor approved. No fourth step, no
split of step 2, no generated list.

### 0.1 Note for the reviewer: the round-1 deck's hash, and byte drift under the formatter

The card quotes the round-1 deck as sha256 `9d2a14e6…`, 28,904 B, 374 lines. That is the deck as
the round-1 writer delivered it (commit `05eb981`: re-hashed in this card's run, exact match).
The same path at HEAD is sha256 `53096bae…`, 32,682 B, 376 lines, because commit `c470741`
(`dprint fmt`, 2026-09-17 15:10) re-padded its Markdown tables: the bytes move, no string does.
Both revisions were hashed side by side in this run (`git show <rev>:<path> | sha256sum`).

Consequence for this round: a formatter pass will move **this** deck's file hash the same way.
§8.4's block hashes and §10.13's per-string hashes are the durable acceptance criterion, because
the formatter does not touch the text inside code fences, and the string literals themselves are
the thing the dev card transcribes.

---

## 1. What is on the page today

`ProgressLog.astro` renders `progressHeading` and `progressSteps` as a three-item `<ol>` inside
`<section id="timeline">`, last on the homepage (`src/pages/index.astro`). The header and the
footer link to it through one definition, `navigation.ts` (`homeAnchor('timeline')`).

The strings below are the **live** ones: they were read from `website/src/features/progress/steps.ts`
at HEAD and confirmed on the deployed homepage (both measurements in §10.7).

| Field         | Current string (live)                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eyebrow`     | `Progress log`                                                                                                                                     |
| `title`       | `One step at a time.`                                                                                                                              |
| `description` | `The public record moves one step at a time. Published steps link to the article that carries them; the highlighted step is the work in hand, and the steps after it are not settled yet.` |
| step 1        | `Announced` / `Coalition and purpose` / `Ten national programme teams, one uncrewed lander and rover, and a mission to work out how water changed an ancient equatorial landscape.` / link `Read the announcement` → `/news/001-project-announcement/` |
| step 2        | `Current progress` / `Mission architecture` / `Turning the announced objective into a mission: what the rover carries, who builds what, and how the mission reaches Mars.` (`current: true`) |
| step 3        | `Later` / `Surface operations` / `Using the rover on the surface to survey terrain and examine rocks in context.`                                   |
| nav label     | `Progress` → `/#timeline`, in the header and the footer of every page                                                                               |

## 2. The defect, against the record

### 2.1 The highlighted step is behind the record

Step 2 is highlighted and its detail is 001's own list of what was **still open** on
2026-09-17: "what the rover carries, who builds what, and how the mission reaches Mars"
(`001-project-announcement.mdx:73–74`). Two of those three are now published outcomes:

- `002-payload-selection.mdx:20–21` — "The programme has now agreed a payload scope for Red
  Horizon One: panoramic and navigation imaging, weather measurement, mineral and rock sensing,
  and a contact tool for close inspection." Its frontmatter reads `status: In selection`.
- `003-vehicle-design.mdx:16` — the programme "now has its first surface vehicle design"; `:70`
  — "The rover design is settled; the mission around it is still being assembled."

So the section's one highlighted sentence now reads as if nothing had been decided, while the
homepage's own newsroom, one screen above, links the two articles that report the decisions. The
highlighted step's **detail** has to name what is settled and what is not; the step's position is
a separate question (§5, D2).

### 2.2 Only one of the three steps links

Step 1 links to `/news/001-project-announcement/`; step 2, whose two articles are published,
links nowhere; step 3 correctly links nowhere (no article reports surface operations, and
`/news/004-*/` does not exist). The human asked for "clickable links to articles" — this section
can now carry two of them. §5, D2 decides which article step 2 points at and why not both.

### 2.3 The naming complaint

The human rejected the rendered result, and the naming is the primary reason: `Progress log` /
`Current progress` / `Later` read as a changelog — a record of what already happened — rather
than as the course the mission is on. The eyebrow, the nav label that names the same section in
the header, and the two state labels that do not come from the record are all in that register.
§5, D1 and D2 answer this; the description's first sentence ("The public record moves one step at
a time") sits in the same register and is replaced too (§5, D3).

## 3. The section as a reader sees it (proposed)

**Mission roadmap**

## One step at a time.

_The programme's steps, in the order it reaches them. The highlighted step is the work in hand;
the step after it is not settled yet._

- **Announced** — **Coalition and purpose** — Ten national programme teams, one uncrewed lander
  and rover, and a mission to work out how water changed an ancient equatorial landscape. The
  schedule frame is a launch window in 2031.
  _Read the announcement_ → `/news/001-project-announcement/`
- **In hand** — **Mission architecture** — The first rover's design is frozen and the payload
  scope is agreed. The mission around the rover is still being assembled.
  _Read the rover design_ → `/news/003-vehicle-design/`
- **Ahead** — **Surface operations** — Using the rover on the surface to survey terrain and
  examine rocks in context.

and in the header and footer navigation, in place of `Progress`:

- **Roadmap** → `/#timeline`

## 4. Structural recommendation

**Keep the static curated array. Do not drive the log from the published collection.** Reason:
the log is not a second rendering of the article list. Two of its three entries are things no
collection can supply — the step the programme is working on now, and the step after it — and the
first is a canon judgement that needs a source and a continuity check, not a build rule. A
generated list would also promote _any_ future published item (a correction notice, a media
update, a briefing) into a "step" without an editorial decision, and it would still need
hand-maintained "current" and "ahead" entries beside it, i.e. the same array plus a new coupling.
The defect was a stale string, not a missing mechanism, and the smallest change that fixes the
wording problem is the wording.

**Smallest change of shape that this deck does recommend (one optional field):** a step carries
the published article that reports it, and renders it only when present.

```ts
/** The published article that carries this step, if one is published. */
link?: { href: string; label: string; };
```

Rationale: article detail routes exist (`/news/<slug>/` is generated from the published set by
`src/pages/news/[slug].astro`), so a step can point at its own evidence instead of only
describing it. It stays fail-safe: the field is optional, so a step the record has not reached
carries no link and cannot produce a dead route; the href comes from `routes.newsArticle(slug)`
in `src/lib/navigation.ts` rather than a hand-typed path.

**One link per step, deliberately.** The field holds one article, so "link every published
article from the roadmap" is not available without widening the field to a list — a shape change
D0 forbids this round. It is also not needed: the homepage's newsroom section already lists all
three published articles (measured in §10.7), the roadmap's job is to say which step each article
belongs to, and step 2's single article carries the onward link to the other one (§5, D2).

Rejected alternatives, recorded:

- _Auto-derive the list from `getPublishedNews()`_ — see above: cannot express "current" or
  "ahead", publishes unreviewed items as steps.
- _Replace the static array with a build-time "newest published article" flag_ — the newest
  article is not the current step (a correction notice is newest while the step has not moved).
- _A fourth step for payload selection (or for the vehicle design)_ — rejected in §5, D2: that
  work belongs inside `Mission architecture`; a separate row would give a section of the mission
  the same weight as the programme's announcement and its surface phase, and it would claim a
  milestone boundary the public record does not describe.
- _A `date` or `window` field per step_ — rejected in §5, D4: only step 1 has a released date, and
  a column that reads "no released date" for two of three steps invites an invention.

### 4.1 Where the copy lives

No new file, no collection change. The strings stay in
`website/src/features/progress/steps.ts`; the nav label is the one string in
`website/src/lib/navigation.ts`; the dev card transcribes §8 verbatim. The file-header comment on
`steps.ts` is replaced in the same edit, because its rule ("Move the current flag and add the link
when a step's article is published") was disproved by this very round: two articles published and
the flag did not move (§6).

## 5. The decisions, decided

### D1 — Naming: a coherent eyebrow and nav label; the section id stays

**Decided: the eyebrow becomes `Mission roadmap`, the nav label becomes `Roadmap`, and the section
id stays `timeline`.**

Why the eyebrow moves: the human's complaint is that the section's name reads as a changelog.
`Progress log` names a record-keeping artifact; `Mission roadmap` names the course of the mission
the page describes, in words a first-time reader already has.

Why the nav label moves with it: `Progress` is the same word, in the one place the reader clicks
it, and the header is where the section is named for anyone who has not scrolled. Renaming the
eyebrow alone would fix the visible section and leave its other name in the rejected register.

Why the section id does **not** move: `id="timeline"` is not reader-facing; it is the anchor the
nav generates from one definition; and it accurately names the form the component draws (a rail
with markers, `ProgressLog.astro:47–92`). Renaming it would add `ProgressLog.astro`'s `id` and
`titleId` to a round whose scope is the section's naming, for no reader-visible gain, on the same
component that carried the round-1 rendering condition R1.

The break, stated: `navigation.ts:63` becomes `{ label: 'Roadmap', href: homeAnchor('timeline') }`.
That single definition renders in the header **and** the footer of every page, so `/#timeline`
appears twice on every built page — measured on the current build: 2 occurrences on each of the
seven built routes, all from this one line. The section `id` and the nav href must therefore move
together or not at all; this deck keeps both as they are, so no anchor breaks anywhere.

Header-width check: the measurement recorded in `navigation.ts` (four header items, 187 px of nav,
right edge at 311 px against the 320 px minimum-width layout) cannot grow — `Roadmap` (7
characters) is one character shorter than `Progress` (8).

Rejected alternatives, recorded:

- `Mission timeline` — collides with the section id `timeline` and reads as dated steps, which most
  of these steps are not.
- `Programme roadmap` — clear and in the project's own vocabulary, but "programme" is the
  coalition-and-funding sense the page already uses for its partners; the list is a sequence of
  mission steps.
- `Programme so far` — a retrospective of what is done, sitting directly above the step that is
  not done.
- `Milestones` — a bare list noun, and it means dated checkpoints, which these are not.
- `Progress log` (kept in the record only as the string the human rejected) — names the record
  rather than the course.
- `id="roadmap"` — the internal-only alternative: rejected because nothing reader-facing or
  link-fragile depends on it, so the change would be churn (§4.1 note on R1).
- Nav label `Progress` kept — rejected: it leaves the header calling the section by the name the
  human rejected, while the section itself is called something else.

Title: **kept — `One step at a time.`** It carries the roadmap metaphor in the section's own
voice, it dates nothing, and no part of the complaint attaches to it; changing it would be churn
the operator did not ask for. Rejected alternative: `Where the programme stands now.` — a
status-report heading, i.e. the register the human rejected, and it adds a temporal word to a
heading.

### D2 — Steps: three rows, the states renamed, the current flag stays, and 003 is step 2's link

**States.** `Announced` (kept) / `Current progress` → **`In hand`** / `Later` → **`Ahead`**.

The two rejected labels carried the changelog register the human read as "does not make sense"
(`Current progress`, `Later`). The replacements are positional, and both are words the page or the
record already owns: the round-1 description's "the work in hand", and 001's "are still ahead of
us" (`:73–74`). Rejected alternatives: `In progress` (the same "-progress" family the human
rejected, and the description says "work in hand", so the label should match the sentence),
`Now` (too bare, and it says nothing about what is in hand), `Not yet` (sits in the schedule
register this section is trying not to use).

**Step titles.** Step 1 `Coalition and purpose` and step 3 `Surface operations` unchanged
(the prior round's verdict; only step 1 gains one sentence, below). Step 2 **keeps the title
`Mission architecture`** — the card's option (a).

Why the title stays (against the card's recommended rename to `Rover and instruments`): the step
is the assembly of the whole mission, and the released record describes exactly that state in
almost the same words — "The rover design is settled; the mission around it is still being
assembled" (`003:70`). A title that named the two published artefacts would state the settled half
and hide the open half (the launcher and the landing site are both publicly recorded as
unannounced: `002:103`, `003:69`), and it would break the one-term-per-state link with the
mission panel, whose `Current state` value is `Mission architecture` (§5, D5). The detail names
what is public instead.

**Step 2's detail, rewritten.** Was 001's list of the *open* selections; becomes the record's
current state after 002 and 003:

> The first rover's design is frozen and the payload scope is agreed. The mission around the rover
> is still being assembled.

Three clauses, each published: the design is frozen (`003:4` `status: Design frozen`; `003:16`;
`003:70`); the payload scope is agreed (`002:20–21`, recapped at `003:62–63`); the mission around
it is still being assembled (`003:70`, verbatim in substance, with the pronoun resolved). The
detail uses the published noun `payload`, which 002's release put on the record.

Rejected wording: keeping 001's triple ("what the rover carries, who builds what, and how the
mission reaches Mars") — true as a list of questions, but as the highlighted step's whole sentence
it now reads as if nothing had been decided, which is the defect in §2.1. Naming the remaining
open decisions (launcher, landing site) — rejected: the launcher is a class the record keeps
withheld, and two "not yet" clauses would turn a homepage step into a status ledger; the record's
own sentence carries the open-ness without a list.

**The current flag stays on step 2 — `current: true` does not move to step 3.** The card invited
this branch if a released sentence supports it. Two do:

- `003:70` — **"The rover design is settled; the mission around it is still being assembled."**
  The mission-level work is the work in hand, by the article's own closing sentence.
- `002:4` `status: In selection`, with `002:22–23` — "Which instruments will do those four jobs,
  and what they will be called, is still open, and the programme is treating it that way."

Why the flag must not move to step 3 today: marking `Surface operations` as the work in hand would
assert that the mission has reached the surface phase, while the released record says the opposite
about everything that has to happen first — `003:68–70`: "describing a fixed design is not the
same as having built one. No launch vehicle has been named, no launch date has been stated, and no
landing site has been announced"; and the only released schedule token is a launch window in 2031
(`001:65`, reaffirmed `002:104–105`). There is no released sentence that says surface operations
are under way, so the flag stays where the record supports it. This is the sharpest of the four
places this deck takes a branch the card opened (§0), and it takes it for the reason the card
itself sets out.

**Step 2's link: one link, to 003 (`Read the rover design`).** Why 003 rather than 002:

- 003 is the newest article that reports this step, and it carries the step's lead clause outright
  (the design is frozen).
- 003 also carries the payload clause: `003:62–63` states that the vehicle "carries the payload
  scope the programme agreed in its second public step" and links to `/news/002-payload-selection/`.
  So both published articles are reachable from this one anchor, which 002 could not offer: 002
  predates 003 and links nowhere forward.
- The homepage's newsroom section above already lists all three published articles with their own
  labels (measured in §10.7), so nothing is hidden by giving step 2 one link.

Rejected alternatives, recorded: linking 002 instead (the design claim would then be unreachable
from the roadmap); linking both (would widen the frozen `link` field to a list, which D0 forbids,
and put two anchors in one step); lifting the payload work into its own step (§4).

Anchor text: `Read the rover design` — subject-bearing, describes the destination out of context,
and distinct from the news card's own `linkLabel` on the same page (`Rover design briefing`).
Rejected alternatives: `Read more` (no subject, and it describes no destination); `Rover design
briefing` (duplicates the news card's label a screen above).

**Rendering note carried from round 1 (R1), and how this change stays clear of it.** Round 1's one
approval condition was parity: the step that gains a `link` must render its detail paragraph at the
same font size, colour and measure as its two neighbours, because the component's detail rule used
to key on position (`li > div:last-child > p:last-child`) and the appended link broke it. The dev
card satisfied that by keying the rule on the `.timeline-detail` class, and `ProgressLog.astro`
carries the measured explanation today (the comment above `.timeline-detail`, lines 104–119).
Moving the link to step 2 therefore adds no new rendering risk: the rule is class-keyed, so the
newly linked step keeps the same styling as the others. If the dev touches those selectors, R1's
constraint applies again to all three steps.

**Step 3: no link.** `/news/004-*/` does not exist, and no published article reports surface
operations; the step keeps the title and detail the prior round approved, with the new state
`Ahead`.

### D3 — Description: replaced, and the maintenance clause with it

**Decided: replace the round-1 description with**

> The programme's steps, in the order it reaches them. The highlighted step is the work in hand;
> the step after it is not settled yet.

The round-1 text's clauses still hold — they were true and are truer now that two steps link — but
three things have changed around them. (a) With the states renamed, the description no longer has
to name the highlight and the tail in different words: `In hand` and `Ahead` say it, and the
description's second sentence now only introduces what the marker means. (b) The first sentence
("The public record moves one step at a time.") sat in the changelog register the human rejected
and echoed the h2 directly above it (the editorial gate's observation E). (c) The clause "Published
steps link to the article that carries them" was the package's one live maintenance obligation (the
editorial gate's observation A): a description that states a mechanic must be re-edited whenever
the mechanic changes. Removing it removes the coupling rather than renewing it — and the same edit
closes observation D (the distributive plural in that clause).

What the description still does: says what the list is, in what order, and what the highlighted
row means. What it does not do: promise that the list is regenerated, extended, or maintained —
the recorded maintenance trigger (§6) is where that obligation lives, not in the copy.

Rejected alternative, recorded: keeping the round-1 description verbatim. The clauses hold, and the
human's complaint was aimed at the section naming rather than the description — but it is 184
characters of mechanics in a section whose naming has just been rejected, it keeps three recorded
observations live, and its first sentence is the register the human objected to.

### D4 — Dates: one released date sentence, on step 1 only

**Decided: step 1's detail gains `001`'s own sentence, verbatim — "The schedule frame is a launch
window in 2031."** The human asked for "rough dates if available"; one date is available and it
belongs to the step whose article made it.

Per-step audit of the released record (full citations in §9):

| Step            | Released date sentence                        | Source                                     |
| --------------- | --------------------------------------------- | ------------------------------------------ |
| 1 `Announced`   | "a launch window in 2031" (added, verbatim)   | `001:65`; `001:6` (summary); `002:104–105` |
| 2 `In hand`     | **no released date**                          | `002:105` — "No launch or landing date is being stated."; `003:69` |
| 3 `Ahead`       | **no released date**                          | nothing in 001–003 dates the surface phase |

Nothing else on this page is a released date: the budget's "constant 2026 euros" (`001:65–66`) is
a currency base rather than a mission date and does not belong in a step; the surface-life figures
(`001:68–71`) are duration, not dates, and are not used; `docs/SCENARIO.md`'s locked calendar and
`docs/timeline/` are private and stay out. The fact grid's `Launch date: To be announced` /
`Landing date: To be announced` rows are **out of scope** for this card and are escalated, not
reconciled, in §11.

Surfaced as a sentence in step 1's `detail`, not as a new field: a `window`/`date` field would be
a shape change (§4), and a field that reads "no released date" for two of three steps is an
invitation to fill it with an invention (§4, rejected alternatives).

Framing note: the sentence is 001's, and it says *schedule frame* and *launch window*, not launch
date — which is the honest reading of a record that publishes a window and states explicitly that
no launch or landing date is being stated (`002:105`). That wording is also what keeps this
sentence from contradicting the fact grid's date rows any more than the published record already
does (§11, item b).

**A related change is in flight on the shared checkout, and it belongs to the next round rather
than this one.** Commit `6cc2f37` (15:20 CEST today) makes the simulated record date a policy — the
editorial role assigns each published article's `simulatedDate` from the locked milestone table —
and `website/src/lib/simulated-date.ts` with its test is being added by another card while this
deck is written. **No published article carries the field yet** (measured at 15:25 CEST:
0 occurrences of `simulatedDate` in the three MDX files), so no article date is released today and
none is used above. When the three published articles do carry their record dates, that becomes a
second released date source the next homepage round could draw on for the human's "rough dates"
ask — an editorial decision this deck may not pre-empt (§11, item e).

### D5 — `facts.ts` `Current state`: no change required (decided, not omitted)

`website/src/features/mission/facts.ts:23` publishes `{ label: 'Current state', value: 'Mission
architecture' }`. Under D2 the highlighted step is still step 2 and its title is still `Mission
architecture`, so the panel and the log already use one term for one state; editing the value
would be churn and would put the two surfaces at risk of drifting apart next round.

The round-1 drop condition is unchanged and **not triggered**: no live card or comment instructs
dropping the item (checked in §10.8). Recorded consequence if a later round renames step 2: the
value must move with it in the same pass, or the homepage will carry two statements of the current
state.

Also recorded as a decision: `missionIntro.description` ("…from early coalition planning to the
work of its first surface vehicle.") stays as written. It describes the *range* the public record
covers, not the current state, so it is not stale, and "surface vehicle" there is the generic
class phrasing the mission brief already owns.

## 6. Maintenance trigger — when this log moves next

The shape of the trigger is unchanged from the round the editor approved; its **state** is updated,
because the round-1 text predicted the move this round actually made and got it half wrong.

- **Trigger (unchanged):** a step's article is published (`publication: published`, route emitted).
- **Action on firing (corrected):** add that step's optional `link`. **Do not** move the current
  flag because an article published: move it only when the released record carries the *next*
  step's opening. The round-1 header comment said "move the current flag and add the link when a
  step's article is published", and this round is the counter-example — 002 and 003 both published,
  the flag stayed, and it stayed correctly (§5, D2). The frozen block in §8.1 carries the corrected
  rule.
- **Fired, and answered, in this round:** steps 1 and 2 now carry links; the current flag stays on
  step 2. The round-1 prediction ("when 002 publishes, step 2 needs no reword — only the optional
  link") held for 002 alone; what made the detail stale was 003's release moving the same step on,
  which is why the trigger's action above is now stated as two separate moves.
- **Next expected move:** the next article that reports `Mission architecture` work would have to
  **re-choose** step 2's single link rather than add one — the field holds one article, so either
  the writer decides which article best carries the step, or the field is widened to a list by a
  planning decision (§11, item d). The current flag moves only when the released record carries the
  surface-operations opening; nothing published today does.
- **Trigger for step 3:** nothing about surface operations may appear until the record reaches
  them. Step 3 keeps no link until an article reports it.

## 7. What the copy deliberately does not say

Withheld material is named here by class only, so this working paper adds no copy of a withheld
token. Read together with the released 002 and 003, the proposed strings still do **not** carry:

- the rover's designation, and any body-shape, wheel, material, camera-mast or arm configuration
  from 003 — the homepage describes the work, not the vehicle's identity;
- any regional or landing-area designation, its coordinates, its maps, or any local detail
  (001 published the region; everything about the landing area remains withheld);
- every payload instrument name or individual instrument decision — 002's own line is that they
  "have not been approved" (`:101`), and none is used;
- the launcher, the launch provider and the spaceport — a later release step's material;
- any launch or landing date beyond the 2031 launch window on step 1, and any date at all on
  steps 2 and 3; the surface-life figure and the budget frame are published but not used;
- partner countries, the responsibility split between them, and any completion verb, percentage or
  schedule claim for any step the record has not reached;
- any real institution, and any implication that a real agency has endorsed the programme.

Nothing in the proposed strings names the rover's designation, the region, an instrument, a
provider, a partner country, a budget figure, or a schedule frame other than step 1's window.

## 8. Transcribable strings

The dev card transcribes these blocks verbatim: it does not reword, reorder, re-punctuate or
re-scope them. Property names and file paths are the dev's to place; the string values are frozen.

### 8.1 `website/src/features/progress/steps.ts` (replaces the file's heading comment, interface, `progressHeading` and `progressSteps`)

```ts
/**
 * The public progress log.
 *
 * A curated list, not a generated one: the steps the published record carries,
 * the step the programme is working on now, and the steps after it. No string
 * here may describe a fact the record has not released, and `link` points only
 * at a published article. Add a step's link when its article is published; move
 * the current flag only when the record carries the next step's opening.
 */
export interface ProgressStep {
    /** Small label above the milestone title. */
    state: string;
    title: string;
    detail: string;
    /** Marks the milestone the programme is working on now. */
    current?: boolean;
    /** The published article that carries this step, if one is published. */
    link?: { href: string; label: string; };
}

export const progressHeading = {
    eyebrow: 'Mission roadmap',
    title: 'One step at a time.',
    description:
        "The programme's steps, in the order it reaches them. The highlighted step is the work in hand; the step after it is not settled yet.",
};

export const progressSteps: readonly ProgressStep[] = [
    {
        state: 'Announced',
        title: 'Coalition and purpose',
        detail:
            'Ten national programme teams, one uncrewed lander and rover, and a mission to work out how water changed an ancient equatorial landscape. The schedule frame is a launch window in 2031.',
        link: { href: routes.newsArticle('001-project-announcement'), label: 'Read the announcement' },
    },
    {
        state: 'In hand',
        title: 'Mission architecture',
        detail:
            "The first rover's design is frozen and the payload scope is agreed. The mission around the rover is still being assembled.",
        current: true,
        link: { href: routes.newsArticle('003-vehicle-design'), label: 'Read the rover design' },
    },
    {
        state: 'Ahead',
        title: 'Surface operations',
        detail: 'Using the rover on the surface to survey terrain and examine rocks in context.',
    },
];
```

with the import at the head of the file (unchanged from the round-1 edit):

```ts
import { routes } from '../../lib/navigation';
```

### 8.2 `website/src/features/mission/facts.ts` — **no edit**

The round-1 value stands, unchanged, and this deck freezes nothing here:

```ts
{ label: 'Current state', value: 'Mission architecture' },
```

### 8.3 `website/src/lib/navigation.ts` — one label (D1)

Line 63 of `navigation.ts`, one string changed, the route untouched:

```ts
    { label: 'Roadmap', href: homeAnchor('timeline') },
```

No other line of `navigation.ts` changes. The section `id` (`ProgressLog.astro:6`) and
`titleId` (`ProgressLog.astro:11`) stay `timeline`.

### 8.4 Hash recipes

- `BLOCK-8.1` — the fenced `ts` block above §8.1: the block's inner text between the fences,
  trailing newline included, sha256 of the bytes.
- `BLOCK-8.3` — the fenced `ts` block above §8.3: same recipe.
- `STRINGS-15` — the fifteen rendered literals in deck order (eyebrow, title, description,
  three steps × state/title/detail, two link labels, and the nav label), joined with `\n` and
  sha256'd; each literal also has its own hash in §10.13 so the editor can check one string at a
  time. Every literal is ASCII.

## 9. Claim → source trace

Re-derived from the three published articles for this round; the round-1 trace covered 001 only.

| #  | Claim in the proposed copy                                                                 | Source (published, with line)                                                                                                                              | Carried by        |
| -- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| 1  | Ten national programme teams                                                               | `001-project-announcement.mdx:23` (ten named teams, counted)                                                                                               | 001               |
| 2  | One uncrewed lander and rover                                                              | `001:24–26` ("a single uncrewed Mars lander and rover together")                                                                                           | 001               |
| 3  | A mission to work out how water changed an ancient equatorial landscape                     | `001:28–29` ("Red Horizon One will study how water changed an ancient equatorial landscape in the Margaritifer Terra region")                                | 001               |
| 4  | "The schedule frame is a launch window in 2031."                                           | `001:65` verbatim; `001:6` (summary frontmatter); reaffirmed `002:104–105`                                                                                 | 001               |
| 5  | The first rover's design is frozen                                                         | `003-vehicle-design.mdx:4` (`status: Design frozen`); `:16` ("it now has its first surface vehicle design"); `:70` ("The rover design is settled")          | 003               |
| 6  | The payload scope is agreed                                                                | `002-payload-selection.mdx:20–21` ("has now agreed a payload scope for Red Horizon One…"); recapped `003:62–63`                                              | 002 (recapped in 003) |
| 7  | The mission around the rover is still being assembled                                       | `003:70` verbatim in substance ("the mission around it is still being assembled")                                                                           | 003               |
| 8  | The highlighted step is the work in hand                                                    | `003:70` (the mission around the settled design is still being assembled); `002:4` (`status: In selection`) and `002:22–23` ("is still open, and the programme is treating it that way") | 002 + 003 |
| 9  | Using the rover on the surface to survey terrain and examine rocks in context               | `001:28–32` (unit mapping) and `001:38–39` ("one rover to compare altered material with unaltered material"); the same phrase is already public in `facts.ts` Objective, and `003:17` ("maps local terrain, investigates rocks in context") | 001 + 003 |
| 10 | `Announced` as step 1's state                                                              | `001:4` (`status: Programme announced`)                                                                                                                     | 001               |
| 11 | `Ahead` as step 3's state; the step's title                                                | positional site copy (no dated or completed claim); "are still ahead of us" is 001's own register at `:73–74`                                              | site copy         |
| 12 | Step 2's link target `/news/003-vehicle-design/` exists and is published                    | 003 frontmatter `publication: published`; route present in `website/dist/news/003-vehicle-design/index.html` (§10.5)                                        | site-foundation |
| 13 | Step 1's link target `/news/001-project-announcement/` exists and is published              | 001 frontmatter `publication: published`; route present in `website/dist/` (live since round 1, §10.7)                                                     | site-foundation |
| 14 | 003 carries the onward link to 002                                                          | `003:62` (`/news/002-payload-selection/`)                                                                                                                  | 003               |
| 15 | The nav label `Roadmap` points at the existing section anchor                                | `navigation.ts:63` (`homeAnchor('timeline')`) and `ProgressLog.astro:6` (`id="timeline"`); 2 anchors per built page (§10.6)                                 | site-foundation |
| 16 | "The highlighted step is the work in hand; the step after it is not settled yet."           | site-copy reading rule: the highlighted row is step 2 (`current: true`, row 8) and the row after it is step 3, which no published article reports (§10.5)   | site copy         |
| 17 | The eyebrow, the title and the description state no programme fact                          | site copy; no noun in them is a canon claim                                                                                                                 | site copy         |

**No gap blocks this wording.** The only released date is step 1's launch window; steps 2 and 3
carry no date and none is invented. The open questions this leaves for the human story owner are
listed in §11 — none of them changes a string this round ships with.

## 10. Validation performed on this card

| #    | Check                                     | Command / source                                                                                                                                   | Result                                                                                                                                   |
| ---- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 10.1 | Current strings read from source          | `read_file` on `steps.ts`, `ProgressLog.astro`, `facts.ts`, `navigation.ts`, `index.astro`                                                        | §1 table matches the files at HEAD, field for field                                                                                      |
| 10.2 | Published/draft state of the record       | frontmatter of the three articles + `website/dist/news/`                                                                                            | 001, 002, 003 all `publication: published`; three route directories present                                                              |
| 10.3 | String measurements and per-string hashes | scratch script `/tmp/t_b634310c/measure.py`, report `/tmp/t_b634310c/report.json`                                                                  | 15 literals, 679 characters in total; lengths 15 / 19 / 132 / 9 / 21 / 184 / 21 / 7 / 20 / 122 / 21 / 5 / 18 / 78 / 7; every per-string hash in §10.13; no literal is non-ASCII; the only digits in any literal are `2031`, in step 1 |
| 10.4 | Containment of §8 strings in §3           | same script, string-by-string presence check over this file's §3 slice (whitespace-collapsed, because Markdown re-wraps the rendered block)        | 15/15 frozen strings present verbatim in §3                                                                                                        |
| 10.5 | Link targets exist and are published      | `find website/dist -name index.html`; `ls website/dist/news/`                                                                                      | `/news/001-project-announcement/`, `/news/002-payload-selection/`, `/news/003-vehicle-design/` all built; no `004-*` route                |
| 10.6 | Section anchor reach                      | `grep -o '#timeline'` over every built page in `website/dist`                                                                                      | 2 per page on all seven built routes — header and footer, one definition (`navigation.ts:63`)                                            |
| 10.7 | The live surface                          | browser read of `https://mars-ai-simulation.janpolacek.workers.dev/` (read-only; no deploy)                                                        | the round-1 wording is live; live nav is `News / Wiki / Mission / Progress`; the live homepage already links all three published articles |
| 10.8 | Drop condition for §8.2                   | board read of this card's siblings and the mission-panel chain                                                                                     | no live card or comment instructs dropping the `facts.ts` item; it is complete                                                          |
| 10.9 | Deck file hash                            | `sha256sum` of this file with the §metadata `Deck file sha256` row's value replaced by `<64-hex>`, re-taken after the final edit (`python3 /tmp/t_b634310c/verify.py`) | the value in the §metadata row; §0.1 records why this one moves under `dprint fmt` while §8.4's block hashes and §10.13's per-string hashes do not |
| 10.10 | Gated-term scan on this deck             | `/tmp/progress-log-scan.sh` (the pattern list is held outside the repository) over the whole deck, which contains all fifteen frozen literals, plus a live positive control | 0 hits on the deck (grep exit 1, no output); the positive control `docs/vehicle/VEHICLE.md` fires (grep exit 0, four matched lines), so the scan is live |
| 10.11 | No `website/` file touched               | `git status --short`, 15:25 CEST                                                                                                                    | this card's only entry is `M .agents/work/drafts/progress-log.md`; the other entries belong to cards in flight on the shared checkout (`content.config.ts`, `ArticleView.astro`, `NewsCard.astro`, `seo.ts`, a new `simulated-date.ts` and its test, the step-004 briefs and source) — and the checkout moved again as this deck was finished (step-004 continuity and review papers, an in-flight `editorial-review` skill edit), all of them other cards' |
| 10.12 | No build, no deploy, no route change     | —                                                                                                                                                  | none run by this card; `website/dist/` was read, never written                                                                           |

### 10.13 Per-string hashes (deck order)

The dev card's byte-for-byte check: each value is the literal as it appears inside the §8 code
blocks (no trailing newline); `STRINGS-15` is those fifteen values joined with `\n` in this order.

| #  | Literal           | Chars | sha256                                                             | Value (truncated)                                                    |
| -- | ----------------- | ----- | ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 1  | eyebrow           | 15    | `8458f7421f051caceb1da4635d86b3683c82430f3c665414808dc6761df971e2` | `Mission roadmap`                                                    |
| 2  | title             | 19    | `e53974be2c9c34d6c696d81f9ab9d2515636f7b4d559e3b8cb8cea12b6ba1b38` | `One step at a time.`                                                |
| 3  | description       | 132   | `7aa33eab66c563291402dc2199ee341e203a54ee95a5c1280f871bc341f56939` | `The programme's steps, in the order it reaches them. The highlighted …` |
| 4  | step 1 state      | 9     | `07dfab861df1deb5ba1a8e08901ec65b98f57681715e3adf25010a0e0c61d400` | `Announced`                                                          |
| 5  | step 1 title      | 21    | `f78ba01c9cf090a4d9b100f19e0e1b1922aa5b4a96bbf3439840a715b355750e` | `Coalition and purpose`                                              |
| 6  | step 1 detail     | 184   | `baeba9cdbfed08ebe691063e776a169cc80ab16dd999b0ea36ea2bfd149692ee` | `Ten national programme teams, one uncrewed lander and rover, and a mi…` |
| 7  | step 1 link label | 21    | `649e96eb1857df084df082fa9aff6bf1474b1b82df024fc7f2cb7de58ade9dc3` | `Read the announcement`                                              |
| 8  | step 2 state      | 7     | `3cfbe4b0a512e082765d03b0c9800dc7a2f5e9bcc9c62097b2f9219ce9ee2b08` | `In hand`                                                            |
| 9  | step 2 title      | 20    | `c993bf2460fc7ba6f3f09fc35b3da6ced6d7f53d98cfcf7c673909e72ff7c9c6` | `Mission architecture`                                               |
| 10 | step 2 detail     | 122   | `10f90a089a652ef44a55fdd596455e64ee20df74266a0281056e814605f920a0` | `The first rover's design is frozen and the payload scope is agreed. T…` |
| 11 | step 2 link label | 21    | `35b9a90c97211b2679a97df607b356842fde2950b37fcac4386264cac43ee973` | `Read the rover design`                                              |
| 12 | step 3 state      | 5     | `a8f94e9869fad501623408d902d674faa68eb82f7358c3285a3cfeb888860d40` | `Ahead`                                                              |
| 13 | step 3 title      | 18    | `90056cbe550c04f09b07edf49aefbcdb998cd10b2ab6bb84bb4282f34edda703` | `Surface operations`                                                 |
| 14 | step 3 detail     | 78    | `9d986123636079eb18ccbbe08df24c484d8b2c0aedec2221f0a0391a2dfc4d42` | `Using the rover on the surface to survey terrain and examine rocks in…` |
| 15 | nav label         | 7     | `92375f997ffe65ab7f04eeda8cb2d7f69ebea949a06132afd53c83fff276ef54` | `Roadmap`                                                            |

- `STRINGS-15` = `9a54650186c5ccab2b709e4b11a23b58799a3dbcf3b1612b5df9809f674e7a0f`
- `BLOCK-8.1` = `a6b774eb20e26c13eaf9450362f3a56ad41cf02d4c848f645e5a404390edaf45` (2,035 bytes)
- `BLOCK-8.3` = `6773c7d688642088949826a03fed05b9f54d34de42e2efdf3b18e9dd319bb280`
- The two link labels (rows 7 and 11) and the nav label (row 15) are the only strings outside
  `progressHeading` / `progressSteps` / `navigation.ts`; the `facts.ts` block in §8.2 is an
  unchanged existing value and adds no literal to this table.

## 11. Escalated to the human story owner, and next owner

Questions this round cannot answer, dated 2026-09-17, each with the fallback this deck ships under
so the chain is not blocked (the wording can go out as frozen here either way):

- **(a) Step 2 carries no date.** The record releases no date for the mission-architecture work —
  002 and 003 both say no launch or landing date is being stated. Should the homepage say anything
  about when this step happens, and if so, from which released sentence? **Fallback shipped: no
  date on step 2**; the step's date row in §5/D4 reads `no released date`.
- **(b) The fact grid's date rows are still `To be announced`** (`facts.ts:24–25`) while the
  published record carries a 2031 launch window, and this round puts that window on the same page
  in the roadmap. Reconciling the grid is **out of scope** for this card and was already routed by
  the round-1 chain (continuity `t_a0ee9abf`, via `about-method.md` §15 row 5). **Fallback
  shipped: the grid is untouched**, and the new sentence keeps 001's own "schedule frame … launch
  window" phrasing so it states a frame, not a date.
- **(c) The section's name change** — eyebrow `Mission roadmap`, nav label `Roadmap`, section id
  unchanged (§5, D1). Is that the naming the human wanted? **Fallback shipped: if the nav label
  should stay `Progress`, it is a one-string revert in §8.3 and the eyebrow stands alone.**
- **(d) The roadmap links two of the three published articles** (steps 1 and 2), because a step
  holds one link. Linking every published article from the roadmap would need the `link` field
  widened to a list — a planning decision, not a wording one. **Fallback shipped: one link per
  step, with 003 carrying the onward link to 002.** This is a question for the planner/operator,
  not for canon.
- **(e) Per-step dates, once the simulated record dates are published.** The human asked for
  "rough dates if available", and the released record carries exactly one today (step 1's launch
  window). The simulated record date policy (`6cc2f37`, 15:20 CEST today) will give each published
  article an in-universe date of writing; when it does, a later homepage round could put a
  *published* date on each step instead of a projected one. **Fallback shipped: no date anywhere
  except step 1, and no date invented for steps 2 and 3.**

**Chain and next owner.** This card's SEO child is `t_906be0fb` (`mars-ai-simulator-seo`), which
owns the heading outline, the two internal links, the homepage prose and the metadata question
(the homepage `<title>` still reads "…in progress" while the section stops using the word — the SEO
pass confirms whether that needs compensating). After SEO: continuity, then the editorial gate,
then dev transcription. **Nothing here is approved, released or published**; this deck edits no
`website/` file, runs no build and no deploy, and the strings' first public deployment on the next
push of that surface needs the editorial role's recorded release decision.
