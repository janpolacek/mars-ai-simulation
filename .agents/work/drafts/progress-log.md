# Draft: progress-log — the homepage progress-log wording

## Draft metadata

| Field                   | Value                                                                                                                                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card                    | `t_11eee417` — `mars-ai-simulator-writer`, stage `site-foundation`                                                                                                                                    |
| Deliverable             | Site copy strings (not MDX): eyebrow, title, description and the three steps of `website/src/features/progress/steps.ts`, plus one consistency string in `website/src/features/mission/facts.ts` (§7) |
| Skills applied          | `brand-voice` (preloaded), `copy-editing`                                                                                                                                                             |
| Timeline step           | `site-foundation` (homepage chrome copy). Advances **no** timeline step                                                                                                                               |
| Factual bound           | The **published** record only: `website/news/001-project-announcement.mdx` (`publication: published`). Step 002 is _not_ public — see §2.2                                                            |
| Structural bound        | `docs/SCENARIO.md` §"Continuity and release controls"; `docs/INSTRUCTIONS.md` §"Canon and information safety"                                                                                         |
| Status                  | `draft` — no approval exists, nothing under `website/` was edited by this card, no route changed                                                                                                      |
| Public/canon impact     | No new canon and no reworded published fact. Moves the highlighted step and states what that step is working on, in the record's own words                                                            |
| Human release reference | **None.** An editorial `approved` is not a release. The wording's first public deployment still needs the human's release reference per `docs/INSTRUCTIONS.md`                                        |
| Visual brief            | None — no new imagery; the section's markers are CSS                                                                                                                                                  |

The operator's commission, verbatim: _"also, revisit 'progress log' section wording on homepage."_

Word and character counts in this file were produced by a scratch script outside the repository
(`/tmp/progress-log-measure.py`); they are measured, not estimated.

---

## 1. What is on the page today

`ProgressLog.astro` renders `progressHeading` and `progressSteps` as a three-item `<ol>` inside
`<section id="timeline">`, last on the homepage (`src/pages/index.astro`). The header links to it as
`Progress` (`src/lib/navigation.ts`, `homeAnchor('timeline')`).

| Field         | Current string                                                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eyebrow`     | `Progress log`                                                                                                                                      |
| `title`       | `One step at a time.`                                                                                                                               |
| `description` | `The public story moves with the project. The highlighted step is where Red Horizon is now; later milestones will be added as the record develops.` |
| step 1        | `Current progress` / `Coalition planning` / `Setting the mission’s purpose, partners, and operating principles.` (`current: true`)                  |
| step 2        | `Next chapter` / `Mission architecture` / `Turning a shared objective into a testable vehicle and science plan.`                                    |
| step 3        | `Later` / `Surface operations` / `Using the surface vehicle to survey terrain and examine rocks in context.`                                        |

## 2. The defect, against the record

### 2.1 The highlighted step is behind the published record

The coalition the log still calls `Current progress` / `Coalition planning` is already **published**.
`website/news/001-project-announcement.mdx` (published; `status: Programme announced`) states the
partners, the purpose, the governance model, the science objective, and the schedule and budget
frames — lines 22–70, in particular:

- line 23–26: "Ten national programme teams … have agreed to build a single uncrewed Mars lander
  and rover together, sharing one mission architecture, one science archive, and one public record."
- line 72–74: "Technical selections — what the rover carries, who builds what, and how the mission
  reaches Mars — are still ahead of us."

So the milestone the log flags as the current work is announced, and the sentence that describes the
current work is sitting in step 2 under `Next chapter`. **The log is one step behind the record it
claims to follow.**

### 2.2 Step 002 is not part of the published record, so the wording may not use it

The card notes that `website/news/002-payload-selection.mdx` says a payload scope has been agreed.
That file is `publication: draft` and its release record
(`.agents/work/releases/002-payload-selection.md`) reads **`blocked — human decision required`**: no
gate approval exists, no route is emitted, no listing entry exists. Nothing in step 002 is public
today.

Consequence for this deck, and the design rule it forces: **no proposed string may depend on step
002's content.** If the log said "a payload scope has been agreed", the homepage would publish a
step-002 fact ahead of the human release gate — a release bypass, not a wording fix. Every string
below is true with 001 alone published, and stays true if and when 002 releases (see §6).

### 2.3 The description promises what nothing delivers

"The highlighted step is where Red Horizon is now; later milestones will be added as the record
develops." Nothing adds them: `progressSteps` is a hand-written array with no relation to the news
collection, and it has not moved since 001 published. A description may not promise mechanics the
page does not have. §4 decides what replaces it.

## 3. The section as a reader sees it (proposed)

**Progress log**

## One step at a time.

_The public record moves one step at a time. Published steps link to the article that carries them;
the highlighted step is the work in hand, and the steps after it are not settled yet._

- **Announced** — **Coalition and purpose** — Ten national programme teams, one uncrewed lander and
  rover, and a mission to work out how water changed an ancient equatorial landscape.
  _Read the announcement_ → `/news/001-project-announcement/`
- **Current progress** — **Mission architecture** — Turning the announced objective into a mission:
  what the rover carries, who builds what, and how the mission reaches Mars.
- **Later** — **Surface operations** — Using the rover on the surface to survey terrain and examine
  rocks in context.

## 4. Structural recommendation

**Keep the static curated array. Do not drive the log from the published collection.** Reason:
the log is not a second rendering of the article list. Two of its three entries are things no
collection can supply — the step the programme is working on now, and the steps after it — and the
first is a canon judgement that needs a source and a continuity check, not a build rule. A generated
list would also promote _any_ future published item (a correction notice, a media update, a briefing)
into a "step" without an editorial decision, and it would still need hand-maintained "current" and
"later" entries beside it, i.e. the same array plus a new coupling. The defect was a stale string,
not a missing mechanism, and the smallest change that fixes the wording problem is the wording.

**Smallest change of shape that this deck does recommend (one optional field):** let a step carry the
published article that reports it, and render it only when present.

```ts
/** The published article that carries this step, if one is published. */
link?: { href: string; label: string };
```

Rationale: article detail routes exist for the first time — `/news/<slug>/` is generated from the
published set by `src/pages/news/[slug].astro` (card `t_0f0ce5f2`) — so the log can now point at its
own evidence instead of only describing it. It stays fail-safe: the field is
optional, so a step the record has not reached carries no link and cannot produce a dead route; the
href comes from `routes.newsArticle(slug)` in `src/lib/navigation.ts` rather than a hand-typed path.

Rejected alternatives, recorded:

- _Auto-derive the list from `getPublishedNews()`_ — see above: cannot express "current" or "later",
  publishes unreviewed items as steps.
- _Replace the static array with a build-time "newest published article" flag_ — the newest article
  is not the current step (a correction notice is newest while the step has not moved).
- _Add a step 4 for payload selection_ — rejected in §5.2: the payload work belongs inside `Mission
  architecture`, and naming it as its own step would over-state how much of that step is done.

### 4.1 Where the copy lives

No new file, no collection change. The strings stay in
`website/src/features/progress/steps.ts`; the dev card transcribes §8 verbatim. The stale header
comment on that file ("These are the three milestones the Preparing homepage already publishes") is
replaced in the same edit, because it describes a source that no longer exists.

## 5. The four decisions the card asks for, decided

### D1 — The programme's honest current public state, in one clause

> **The coalition and its objectives are on the record, and the technical decisions that would make
> the mission real are still open.**

Public support: `website/news/001-project-announcement.mdx` lines 22–26 (coalition, purpose,
partners, one architecture) and 72–74 (the three technical selections are "still ahead of us").
Internal confirmation that the open work is genuinely in hand: `docs/timeline/002-payload-selection.md`
"Private situation" (engineering and science teams are selecting the payload). That internal line is
**not public** and no step-002 content is stated in any string here — it is cited only so this deck
records why "current progress" is a true statement about the fictional present rather than an
inference. No timing, no percentage, no completion: the clause claims an announcement and an open
question, nothing else.

This clause is carried by the highlighted step (step 2's `state`, `title` and `detail`), not by the
description, because the description describes how to read the list rather than where the programme
is.

### D2 — Step titles: renamed and re-scoped

| Order | Was                    | Becomes                       | Why                                                                                                                                                                                                                                                                                            |
| ----- | ---------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | `Coalition planning`   | `Coalition and purpose`       | _Planning_ is an unannounced activity and it is finished; the record carries the outcome (partners and purpose), so the step is stated as the record states it. `state` moves from `Current progress` to `Announced`, mirroring 001's own `status: Programme announced`                        |
| 2     | `Mission architecture` | `Mission architecture` (kept) | The title already names the open work and needs no rename; what changes is its **position** (`Next chapter` → current, `current: true`) and its detail, which now uses 001's own three open selections instead of promising a "testable vehicle and science plan" the record has not described |
| 3     | `Surface operations`   | `Surface operations` (kept)   | Names work the record has not reached; keeping the title with `Later` is honest and the detail stays generic                                                                                                                                                                                   |

**Re-scoping question — does payload selection belong inside `Mission architecture`? Yes.** Payload
selection is the substance of the open technical decisions ("what the rover carries"), it is not a
stage the announcement separated out, and giving it its own step would say the programme has reached
a milestone the public record has not described (the 002 release is still gated). Keeping it inside
step 2 also means **the log does not need rewording when 002 releases** — the step is the same step;
only its optional `link` may be added. That is the direct answer to the staleness this card exists
to fix.

Detail wording changes decided in the same pass:

- Step 1 detail: states what the announcement published (partners, one lander and rover, the science
  question) instead of describing an activity ("Setting the mission's purpose…").
- Step 3 detail: `the rover` replaces `the surface vehicle`. The announcement and the article call it
  a rover, and the landing platform is also a surface vehicle, so the current phrase is ambiguous.
- Step 2 detail: 001's own triple — "what the rover carries, who builds what, and how the mission
  reaches Mars" — verbatim in substance, so the log's most load-bearing sentence is the record's
  sentence, not a new paraphrase. "Testable vehicle and science plan" is dropped: it asserts a
  programme outcome ("testable") the record does not carry.

### D3 — The eyebrow stays `Progress log`

Unchanged. It names the section plainly, it is not a canon claim, and the two neighbours the card
protects are unchanged too: the nav label stays `Progress` and the section id stays `timeline`
(`src/lib/navigation.ts`, `ProgressLog.astro`). Renaming the eyebrow would buy nothing and would drag
the nav label into review. The title `One step at a time.` also stays: it has no defect, it matches
the step-per-release structure the section actually has, and changing it would be churn the operator
did not ask for.

### D4 — Yes: a step links to the published article that carries it (step 1 only, today)

Decided **yes**, with the shape in §4 and two hard limits:

1. **Published articles only.** Today that is exactly one article, 001, so exactly one step carries a
   `link`. Step 2 must _not_ link to the 002 draft: `/news/002-payload-selection/` is not emitted
   today (`publication: draft`), and a link to it would be a dead route and a release-bypass hint.
2. **The href comes from the route map**, `routes.newsArticle('001-project-announcement')` in
   `src/lib/navigation.ts`, never a hand-typed string — one definition of the route, as the rest of
   the site does it.

Link label: `Read the announcement` — plain, describes the action, and it does not restate the
article title (the news card already carries 001's own `linkLabel`, `Announcement summary`).

Coupling to record: the proposed description sentence "Published steps link to the article that
carries them" is true **because** step 1 carries a link. If a later decision drops the link, that
sentence must be revised in the same pass; the two are one change.

### D5 — One consistency string outside the section (decided, flagged for the operator)

`website/src/features/mission/facts.ts:23` renders `{ label: 'Current state', value: 'Coalition
planning' }` in the **Mission brief** panel immediately above the progress log on the same homepage.
It is the identical stale claim, in the identical words, that this card exists to fix. Leaving it
would put a corrected progress log directly under an uncorrected "Current state: Coalition planning"
row.

- **Decision:** the value becomes `Mission architecture` — the same claim the log's highlighted step
  makes, in the at-a-glance format the fact grid uses (the existing values are short: `Red Horizon`,
  `To be announced`).
- **Why it is in this deck and not a separate card:** it is one string, of the same class, on the same
  page, and splitting it into its own `website/` card serialises the homepage queue for a one-line
  change (the one-`website/`-card-at-a-time rule).
- **Operator's option:** the dev card §8.2 item is written so it can be dropped on its own without
  disturbing the progress-log change. If it is dropped, this deck should say so on the record, because
  the homepage will then carry two different statements of the current state.
- **Not changed, and recorded as a decision:** `missionIntro.description` ("…from early coalition
  planning to the work of its first surface vehicle.") stays as written. It describes the _range_ the
  public record covers, not the current state, so it is not stale; "surface vehicle" there is the
  generic phrasing the mission brief already owns.

## 6. Maintenance trigger — when this log moves next

Because the array is curated, the mechanism for keeping it honest is a named trigger, not a promise
in the copy. Recorded here so the next owner does not have to rediscover it:

- **Trigger:** an article for the current step is published (`publication: published`, route emitted).
- **Action:** add the `link` to that step, and move `state: 'Current progress'` / `current: true` to
  the next step only if the record has carried that step's opening.
- **The next expected move:** when the 002 release gate is answered and
  `website/news/002-payload-selection.mdx` publishes, **step 2 needs no reword** — only the optional
  `link` to `/news/002-payload-selection/` (label: the payload briefing, matching the article's own
  `linkLabel`). This is a one-line, writer-owned follow-up, not a website/queue card; it is recorded
  here and in the handoff comment rather than created as a card, because the 002 release graph is
  being built live by the planner and a duplicate card would collide with it.
- **Trigger for step 3:** nothing about surface operations may appear until the record reaches it.

## 7. What the copy deliberately does not say

Withheld material is named here by class only, so this working paper adds no copy of a withheld token:

- the surface vehicle's designation, any imagery of it, and the vehicle-design step (003);
- the landing-area name, its coordinates, its maps, and every local detail;
- the launcher, the spaceport, and the launch-provider step (004);
- exact launch or landing dates, and the supported-surface-life figure;
- every payload instrument name, and any payload that does not exist yet;
- any real institution (the one real-institution reference in canon stays unmentioned);
- the identity of the two open technical decisions' answers, and any timing or completion claim for
  any step above.

Nothing in the proposed strings names a partner country, a partner's responsibility split, a budget
figure, or a schedule frame. The log does not need them, and each would be a claim to re-check on
every edit.

## 8. Transcribable strings

The dev card transcribes these blocks verbatim: it does not reword, reorder, re-punctuate, or
re-scope them. Property names and file paths are the dev's to place; the string values are frozen.

### 8.1 `website/src/features/progress/steps.ts` (replaces the file's heading comment, interface, `progressHeading` and `progressSteps`)

```ts
/**
 * The public progress log.
 *
 * A curated list, not a generated one: the steps the published record carries,
 * the step the programme is working on now, and the steps after it. No string
 * here may describe a fact the record has not released, and `link` points only
 * at a published article. Move the current flag and add the link when a step's
 * article is published.
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
    eyebrow: 'Progress log',
    title: 'One step at a time.',
    description:
        'The public record moves one step at a time. Published steps link to the article that carries them; the highlighted step is the work in hand, and the steps after it are not settled yet.',
};

export const progressSteps: readonly ProgressStep[] = [
    {
        state: 'Announced',
        title: 'Coalition and purpose',
        detail:
            'Ten national programme teams, one uncrewed lander and rover, and a mission to work out how water changed an ancient equatorial landscape.',
        link: { href: routes.newsArticle('001-project-announcement'), label: 'Read the announcement' },
    },
    {
        state: 'Current progress',
        title: 'Mission architecture',
        detail:
            'Turning the announced objective into a mission: what the rover carries, who builds what, and how the mission reaches Mars.',
        current: true,
    },
    {
        state: 'Later',
        title: 'Surface operations',
        detail: 'Using the rover on the surface to survey terrain and examine rocks in context.',
    },
];
```

with the import added above it:

```ts
import { routes } from '../../lib/navigation';
```

### 8.2 `website/src/features/mission/facts.ts` (one value; droppable on its own — §D5)

```ts
{ label: 'Current state', value: 'Mission architecture' },
```

## 9. Claim → source trace

| # | Claim in the proposed copy                                                                                               | Source                                                                                                                                                                                                                                                       | Step's authority                           |
| - | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| 1 | Ten national programme teams                                                                                             | `website/news/001-project-announcement.mdx:23` (published)                                                                                                                                                                                                   | 001                                        |
| 2 | One uncrewed lander and rover, built together                                                                            | same file, `:24–26`                                                                                                                                                                                                                                          | 001                                        |
| 3 | A mineralogy mission about how water changed an ancient equatorial landscape                                             | same file, `:28–32`                                                                                                                                                                                                                                          | 001                                        |
| 4 | The record moves one step at a time / the public record is the log's source                                              | same file, `:74–77` ("That is where the public record begins…"); `docs/SCENARIO.md` §"Continuity and release controls"                                                                                                                                       | site-foundation (site copy)                |
| 5 | The technical selections ("what the rover carries, who builds what, and how the mission reaches Mars") are the open work | same file, `:72–74`, verbatim in substance                                                                                                                                                                                                                   | 001                                        |
| 6 | That open work is what the programme is doing now                                                                        | `docs/timeline/002-payload-selection.md` "Private situation"; `docs/SCENARIO.md` §"Continuity and release controls" (payload details wait for step 002). **Internal, non-public — cited only to justify the "current" flag; no 002 fact is stated publicly** | internal canon; no public release required |
| 7 | The rover surveys terrain and examines rocks in context                                                                  | 001 `:28–32` (mapping the region's units) and `:38–39` ("one rover to compare altered material with unaltered material")                                                                                                                                     | 001                                        |
| 8 | The link target `/news/001-project-announcement/` exists and is published                                                | `website/news/001-project-announcement.mdx` frontmatter `publication: published`; route emitted by `src/pages/news/[slug].astro` (verified on the built site, §10)                                                                                           | site-foundation                            |
| 9 | The log's audience-facing role (a public record of the programme's steps)                                                | `docs/PLAN.md` (homepage sections), `src/features/progress/ProgressLog.astro`, nav label `Progress`                                                                                                                                                          | site-foundation                            |

No claim above relies on step 002's content, and none states a fact from step 003 onward. **No gap
required escalation**: the honest current state is fully supported by 001 plus internal canon, so
this card settles no canon question and asks the human for no canon decision. The only human
decisions outstanding are the ordinary ones: the editorial gate, continuity, and the release
reference before first public deployment.

## 10. Validation performed on this card

| Check                               | Command / source                                                                                                                                                                                                                                     | Result                                                                                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Current strings read from source    | `read_file website/src/features/progress/steps.ts`, `progress/ProgressLog.astro`, `mission/facts.ts`                                                                                                                                                 | §1 table matches the files byte-for-byte                                                                              |
| Every material claim traced         | `grep -n` over `website/news/001-project-announcement.mdx` for each quoted phrase                                                                                                                                                                    | §9 rows 1–3, 5, 7 confirmed at the cited lines                                                                        |
| Published/draft state of the record | frontmatter of both articles; `.agents/work/releases/002-payload-selection.md`                                                                                                                                                                       | 001 `published`; 002 `draft`, release record `blocked — human decision required`                                      |
| Link target exists                  | `find website/dist -name index.html`; `website/dist/news/001-project-announcement/index.html` present                                                                                                                                                | `/news/001-project-announcement/` is a real built route; no 002 route exists                                          |
| Gated-term scan on this deck        | `grep -niE` over this file with the card's pattern list, kept **outside** the repository (`/tmp/progress-log-scan.sed`, for the same reason the 002 review kept its token list out: a scan report must not become a copy of the tokens it scans for) | 0 matches over the whole file (real output in the handoff comment)                                                    |
| String length / layout fit          | scratch script `/tmp/progress-log-measure.py`                                                                                                                                                                                                        | description 184 chars (was 145); longest step detail 137 chars (was 73), inside the detail paragraph's 30 rem measure |
| Containment of §8 strings           | scratch script, string-by-string presence check in this file                                                                                                                                                                                         | every frozen string appears verbatim                                                                                  |
| No `website/` file touched          | `git status --short`                                                                                                                                                                                                                                 | only this deck (and other cards' in-flight files) appear; see the handoff comment                                     |

## 11. Review outstanding, and next owner

- **Chain (created by this card):** SEO → continuity → editorial gate → dev transcription. The dev
  card is chained behind the live `website/` queue tail so two `website/` cards are never ready at
  once, and it carries the commit-and-push instruction for the dev profile.
- **Outstanding before anything is public:** continuity verdict, editorial `approved`, and the human
  release reference. `approved` is not a release.
- **Next owner:** `mars-ai-simulator-seo` on the SEO card — this deck changes visible homepage prose
  in a landmark region and introduces one internal article link, which is exactly the pass's remit.
