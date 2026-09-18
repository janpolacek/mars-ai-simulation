# SEO package: roadmap-round-3 (homepage roadmap grows to four steps + step-1 rename)

## Package metadata

| Field              | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Surface            | Homepage `/` — the progress-log section (`<section id="timeline">`), the site strings in `website/src/features/progress/steps.ts`, plus one consistency string in `website/src/features/mission/facts.ts`                                                                                                                                                                                                                                                        |
| Stage / step       | `site-foundation` (homepage chrome copy, round 3). Advances no timeline step. Factual bound: the published record — articles 001 through 004 (all `publication: published`)                                                                                                                                                                                                                                                                                      |
| Card               | `t_487244de` (`mars-ai-simulator-seo`), child of `t_98e891c8` (writer deck, completed)                                                                                                                                                                                                                                                                                                                                                                           |
| Round-2 SEO card   | `t_906be0fb` (`.agents/work/seo/progress-log.md`, sha256 `424a44ff…`, 395 lines) — established the seven-check structure, approved the original three-step panel wording                                                                                                                                                                                                                                                                                         |
| Round-2.5 SEO card | `t_1b0b1951` (`.agents/work/seo/roadmap-004-link.md`, sha256 `c14b488a…`, 340 lines) — approved the three-string delta (step-2 link move, label, detail clause)                                                                                                                                                                                                                                                                                                  |
| Inputs read        | `.agents/work/drafts/roadmap-round-3-deck.md` (deck, sha256 `3741bbe9…`, 511 lines, verified at start of this pass); `.agents/work/drafts/roadmap-round-3.md` (planner brief, 328 lines); `website/src/features/progress/steps.ts` (sha256 `1236ead7…` at HEAD); `website/src/features/mission/facts.ts`; `website/src/pages/index.astro`; `website/dist/index.html` (last build on disk); `website/dist/news/001–004*/index.html`; `website/scripts/guards.mjs` |
| Conventions read   | `.agents/skills/seo-content/SKILL.md` (including "Verified practice"); `.agents/skills/brand-voice/SKILL.md`                                                                                                                                                                                                                                                                                                                                                     |
| Artifact           | this file (`.agents/work/seo/roadmap-round-3.md`)                                                                                                                                                                                                                                                                                                                                                                                                                |
| Applied this pass  | **nothing under `website/`.** The deck's §7 strings are reviewed here and frozen for the dev card to transcribe. `git status --short` on `website/` shows no file touched by this card                                                                                                                                                                                                                                                                           |
| Verdict            | **approved as proposed** — no required wording change (§13)                                                                                                                                                                                                                                                                                                                                                                                                      |
| Status             | recommendations issued; **no approval, no release, no deploy, no canon decision**                                                                                                                                                                                                                                                                                                                                                                                |

Assumptions recorded (nothing here is treated as approved):

1. `SITE_URL` is still unrecorded, so no route emits a canonical link today, and no origin-dependent
   recommendation here is live. That is the correct state, not a gap.
2. The deck's §7 strings are the writer's frozen values, and this pass reviews but does not change
   their wording. Everything below is either a confirmation, an accepted alternative recorded for
   the record, or a check whose answer depends on the writer's words.
3. This is the third round on the same panel. Round 2 (`t_906be0fb`) approved the three-step
   wording; round 2.5 (`t_1b0b1951`) approved the link-move delta. This pass reviews the
   four-step shape and the step-1 rename on top of both approved states.
4. The four frozen §7 blocks from round 2.5 (step-2 entry, header comment rule, test history
   sentence) are carried verbatim; this pass re-checks them only where the four-step shape or
   the step-1 rename intersects them.

---

## 1. One reader intent

**Single honest intent for `/`.** _What is Red Horizon, and where is the programme now?_

The homepage answers it in four moves: the hero says what the project is doing (`A mission to read Mars
carefully.`), the mission brief gives the at-a-glance facts, the newsroom section lists what has been
published, and the progress log states which step is done, which is in hand, and which is not settled. The
progress log is the **state** answer; it must not try to be the record (that is `/news/`) or the identity
answer (that is `/about/` — the three-route division recorded in `about-method.md` §1).

- **Primary query theme:** the brand name plus a state question — `Red Horizon` + "mission / progress /
  status / roadmap". People who have met the name want to know how far the programme has got.
- **Secondary themes the new wording honestly serves:** "Mars mission programme", "Mars mission
  architecture", "Mars mission integration and readiness", "Mars surface operations".
- **Queries this section must not chase:** live Mars news ("Mars rover news", "Perseverance", "ExoMars"),
  "Mars 2031 launch" (the 2031 window is 001's fictional programme frame), landing-region or instrument
  queries (step 003+, withheld), and any query whose answer waits for a future release step.
- Theme (one phrase, used consistently): _the programme's steps, one at a time._

---

## 2. Check 1 — heading outline

`SectionHeading` (`website/src/components/SectionHeading.astro`) renders the section title as `h2` (no
`level` prop passed by `ProgressLog.astro:12`). Each step title renders as `h3` (`ProgressLog.astro:21`).
The section is `aria-labelledby="timeline-title"`.

Measured on the current built homepage (`website/dist/index.html`):

| #  | Current (live dist)                            | Proposed (deck §7, four steps)                 |
| -- | ---------------------------------------------- | ---------------------------------------------- |
| 1  | `H1` A mission to read Mars carefully.         | `H1` A mission to read Mars carefully.         |
| 2  | `H2` The programme at a glance                 | `H2` The programme at a glance                 |
| 3  | `H2` The story starts before launch.           | `H2` The story starts before launch.           |
| 4  | `H3` A Mars mission takes shape in public.     | `H3` A Mars mission takes shape in public.     |
| 5  | `H3` Choosing what a Mars rover carries.       | `H3` Choosing what a Mars rover carries.       |
| 6  | `H3` The rover design, frozen.                 | `H3` The rover design, frozen.                 |
| 7  | `H3` The launch architecture, chosen.          | `H3` The launch architecture, chosen.          |
| 8  | `H2` One step at a time. (id `timeline-title`) | `H2` One step at a time. (id `timeline-title`) |
| 9  | `H3` Coalition and purpose                     | `H3` **Programme and purpose**                 |
| 10 | `H3` Mission architecture                      | `H3` Mission architecture                      |
| 11 | —                                              | `H3` **Integration and readiness**             |
| 12 | `H3` Surface operations                        | `H3` Surface operations                        |

**Verdict: the order is correct under the four-step shape.** Level runs `h1 → h2 → h3` with no skipped
level; the four step `h3`s sit inside the one `h2` that carries the section name. One `h1` on the
page (the hero), as before. The new step-3 `h3` (`Integration and readiness`) keeps the hierarchy.

**The eyebrow is not a heading level.** `SectionHeading.astro:15` renders the eyebrow as `<p
class="eyebrow">`, not `<h1>` or `<h2>`. The eyebrow `Mission roadmap` (15 chars) does not introduce
a heading, and the `h2` remains `One step at a time.` — the eyebrow and the h2 are two distinct
text surfaces, not competing headings.

**No heading text duplicates the section title or any step title.** Measured: the section's strings are
`Mission roadmap` (eyebrow, `<p>`, 15 chars), `One step at a time.` (h2, 19 chars), and the four step
titles `Programme and purpose` (21), `Mission architecture` (20), `Integration and readiness` (25),
`Surface operations` (18) — six distinct strings, none repeating another, and none repeating the
newsroom `h2` or any of its card `h3`s.

**The newsroom carousel h2 is still ahead in source order.** `index.astro` renders `<NewsCarousel />`
(line 4) before `<ProgressLog />` (line 5). The built page outline confirms: `h2 The story starts
before launch.` (id `updates-title`) appears before `h2 One step at a time.` (id `timeline-title`), so
no heading level is skipped.

**Section id stays `timeline`.** The deck keeps `id="timeline"` and the nav href `/#timeline`. The
planner's inbound-link audit confirmed the old id is referenced only by the header nav (from
`navigation.ts:63`) and one `BaseLayout.astro` comment — no article prose links to `/#timeline`. No
article links break.

**No change required.**

---

## 3. Check 2 — internal links on the page after the change

### Anchor inventory (proposed four-step shape)

| Surface           | Current anchor (live dist)                                        | Proposed anchor (deck §7)            | Target route                      |
| ----------------- | ----------------------------------------------------------------- | ------------------------------------ | --------------------------------- |
| Hero text link    | `Read the first announcement →`                                   | unchanged                            | `/#updates` (newsroom)            |
| Roadmap step 1    | `Read the announcement`                                           | unchanged                            | `/news/001-project-announcement/` |
| Roadmap step 2    | `Read the rover design`                                           | **`Read the architecture decision`** | `/news/004-launch-provider/`      |
| Roadmap step 3    | — (no step 3 exists)                                              | **(no link)**                        | —                                 |
| Roadmap step 4    | `Read the announcement` + `Read the rover design` (3 steps total) | **(no link)**                        | —                                 |
| Newsroom card 001 | `Announcement summary`                                            | unchanged                            | `/news/001-project-announcement/` |
| Newsroom card 002 | `Payload selection briefing`                                      | unchanged                            | `/news/002-payload-selection/`    |
| Newsroom card 003 | `Rover design briefing`                                           | unchanged                            | `/news/003-vehicle-design/`       |
| Newsroom card 004 | `Launch architecture briefing`                                    | unchanged                            | `/news/004-launch-provider/`      |

### Link 1 (step 1): `Read the announcement` → `/news/001-project-announcement/` — unchanged

Carried forward from the round-2 pass; no change by this deck. The link remains correct: 001 is
`publication: published`, the route is built in `dist/`, and the anchor is descriptive and not "read more".

### Link 2 (step 2): `Read the architecture decision` → `/news/004-launch-provider/` — carried from round 2.5

Round 2.5 approved this anchor and target. The deck carries it verbatim as block (c). Confirmed: 004 is
`publication: published`, the route is built in `dist/`, and the anchor is distinct from the newsroom
card label `Launch architecture briefing` (28 chars) measured on the live homepage. The round-2.5 SEO
pass (`t_1b0b1951` §3, check 2) already verified this anchor's correctness; this pass re-confirms it
holds under the four-step shape.

### Step 3: no link — correct

The new step 3 `Integration and readiness` is `Ahead`. No published article reports this body of work
under way — `004:18` states nothing has been integrated, and `004:50–52` names the work as ahead. The
step keeps no link, matching the deck's §4 decision and the test assertion at
`progress-log.test.mjs:227–244` (steps with no `link` property render no anchor).

### Step 4: no link — correct

`Surface operations` remains the last step, still linkless, still test-pinned at
`progress-log.test.mjs:219–224`. No published article reports surface operations.

### No link to a draft article

Verified: the deck proposes no link targeting an unpublished article. Steps 3 and 4 declare no `link`.

### Internal-link reachability after the change

The roadmap panel carries two article anchors: step 1 → 001, step 2 → 004. From the homepage:

- **001** is directly reachable (step 1 anchor).
- **004** is directly reachable (step 2 anchor).
- **003** is reachable from 004 (`004` body links to `/news/003-vehicle-design/`, confirmed in
  `website/dist/news/004-launch-provider/index.html`).
- **002** is reachable from 003 (`003` body links to `/news/002-payload-selection/`, confirmed in
  `website/dist/news/003-vehicle-design/index.html`).

**All four published articles are reachable from the homepage.** The roadmap's one-link-per-step shape
leaves no published article unreachable. The chain is: homepage → 004 → 003 → 002, and homepage → 001.

The newsroom carousel also links all four articles directly, providing a second reachability path.

**No change required.**

---

## 4. Check 3 — metadata and the indexable surface

### 4.1 Homepage `<title>` and meta description

| Surface                           | Applied value (measured)                                                                                                                      | Decision                                                                                                                            |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Homepage `<title>`                | `Red Horizon                                                                                                                                  | A Mars mission in progress``(from``site.ts:15``, built into ``dist/index.html`)                                                     | **keep — no change.** The string is true under the four-step shape: the page is still a mission in progress. |
| Homepage meta description         | `Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface.` (108 chars, from `site.ts:17`) | **keep — no change.** Range statement about the record; not a claim about the current step, so the panel wording cannot falsify it. |
| `<meta name="description">` count | exactly **1** on the built homepage                                                                                                           | The 132-char section description (`steps.ts:27`) is visible prose, not a meta description. No conflict.                             |
| `robots` / canonical              | none emitted (`SITE_URL` unset)                                                                                                               | correct state, unchanged                                                                                                            |

### 4.2 Does adding one step or renaming step 1 change anything for the title or section naming?

**No.** The round-2 SEO pass (§4.3) raised the `<title>`/section-naming question and confirmed no
change was needed. This deck's delta is a four-string change to the panel (step-1 title, new step-3
entry, two comment regions); it does not touch the section heading, the eyebrow, the nav label,
or any metadata surface. The `<title>` stays `Red Horizon | A Mars mission in progress` and the
section naming stays `Mission roadmap` / `One step at a time.`

The round-2 pass owned the `<title>`/section-naming question. This pass re-confirms it still holds
and names no new owner — the question is settled.

### 4.3 JSON-LD and sitemap

No structured data is emitted on the homepage (no `NewsArticle`, no `Organization`). Adding one step
does not change the page's structured data or sitemap footprint. The correct state is no canonical
(SITE_URL unset) and no JSON-LD; that does not change.

**No metadata change required.**

---

## 5. Check 4 — the section description under the headline

The section description is:

> "The programme's steps, in the order it reaches them. The highlighted step is the work in hand; the step after it is not settled yet."

Round-2 approved this wording (`.agents/work/seo/progress-log.md` §4.2). The planner brief §8
confirms it is unchanged by round 3. This pass verifies it still reads against the four-step shape.

### Does the description match the four-step panel?

| Phrase in the description                  | What it refers to                          | Four-step state                                                                                     | Verdict                                                           |
| ------------------------------------------ | ------------------------------------------ | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| "The programme's steps"                    | The four `<li>` items in the timeline list | 4 steps: Programme and purpose, Mission architecture, Integration and readiness, Surface operations | **correct** — four steps are steps                                |
| "in the order it reaches them"             | Sequential list rendering                  | Steps listed 1–4 in source order                                                                    | **correct** — the order is the programme's milestone sequence     |
| "The highlighted step is the work in hand" | The step with `current: true`              | Step 2 (`In hand`, `Mission architecture`, `current: true`)                                         | **correct** — step 2 is highlighted and is the work in hand       |
| "the step after it is not settled yet"     | The step following the highlighted one     | Step 3 (`Ahead`, `Integration and readiness`, no `current`, no link)                                | **correct** — step 3 is `Ahead`, not settled, and carries no link |

**The description is still accurate.** The highlighted step is step 2 (the work in hand); the step
after it is step 3 (`Ahead`, `Integration and readiness`), which the record has not opened. The
"not settled yet" claim is preserved: step 3 has no link, no `current` flag, and its detail sentence
names work that sits between the architecture decision and the flight (`004:50–52`).

**What would invalidate the description (round 4's trigger):** moving `current: true` from step 2
to step 3. At that point the highlighted step becomes step 3 and the "step after it" becomes step
4 (`Ahead`, `Surface operations`). The description would still be true if step 4 remains `Ahead`
and linkless. The description would need re-read only if a fifth step is added or the current flag
moves to the last step. The planner brief §9 records this for round 4.

**No change required.**

---

## 6. Check 5 — step-1 title rename: SEO consequences

### The change

`Coalition and purpose` → `Programme and purpose` (21 chars → 21 chars; both ASCII, both digit-free).
The `state` (`Announced`), the `detail` (record-sourced sentence about ten teams, the lander and rover,
the 2031 window), and the `link` (`/news/001-project-announcement/`, `Read the announcement`) are
unchanged. The rename is the title only (deck §3, planner brief §3).

### Search-language impact

The title renders as an `h3` on the homepage. A search engine sees it as one of four step titles in
a list under `h2 One step at a time.`. The rename drops one proper noun (`Coalition`) and replaces
it with a common noun (`Programme`) that is already present in the page's context:

- The section description says "The **programme**'s steps…" (`steps.ts:27`).
- The step-1 detail says "Ten national **programme** teams…" (`001:24`).
- The site name is "Red Horizon" — a programme.

`Programme` appears elsewhere on the page; `Coalition` appeared only in this title (on the panel)
and in five other published surfaces out of scope for this round. The replacement is not a new term
introduction — it reinforces an already-dominant noun.

**Search intent served by the new title:** "Red Horizon Mars mission programme", "Mars programme
purpose", "international Mars programme". The new title serves the same intent as the old one
(what the programme is and why it exists) without the political-reading noun the human story
owner flagged.

**Accepted alternative recorded.** The planner compared four candidates (planner brief §3, deck §3
table) and chose `Programme and purpose` for the political-reading test and the step-pair rhythm
("Programme / Mission architecture / Integration and readiness / Surface operations"). The SEO pass
finds no search-language objection to the choice.

### The escalation for the editorial gate

The planner brief §3 and the deck §3 record that five other public instances of the removed word
remain on published surfaces (`001:77`, `002:87`, `004:14`, `facts.ts:18`, `Hero.astro:12`). The
planner filed that escalation as a separate, non-blocking child (`t_8e8364e4`). **The SEO pass
does not decide on renaming published surfaces** — that is the human story owner's question, not
a search-intent question. The panel rename serves the search-intent goal (honest title, no political
reading) without touching any other surface.

**No SEO objection to the title-only rename. No change required.**

---

## 7. Check 6 — anchor text uniqueness across the page

All link text on the homepage after the proposed four-step change:

| Link text                      | Location          | Route                             | Chars |
| ------------------------------ | ----------------- | --------------------------------- | ----- |
| Read the first announcement →  | Hero              | `/#updates`                       | 31    |
| Read the announcement          | Roadmap step 1    | `/news/001-project-announcement/` | 21    |
| Read the architecture decision | Roadmap step 2    | `/news/004-launch-provider/`      | 30    |
| Announcement summary           | Newsroom card 001 | `/news/001-project-announcement/` | 21    |
| Payload selection briefing     | Newsroom card 002 | `/news/002-payload-selection/`    | 27    |
| Rover design briefing          | Newsroom card 003 | `/news/003-vehicle-design/`       | 22    |
| Launch architecture briefing   | Newsroom card 004 | `/news/004-launch-provider/`      | 28    |

**All seven link texts are unique.** No two anchors share the same string. The step-1 anchor
`Read the announcement` (21 chars) does not collide with:

- `Announcement summary` (21 chars) — the same character count but a different string; the two sit
  one screen apart (roadmap vs. newsroom), serve different document-type labels ("read the
  announcement" vs. "announcement summary"), and target the same route. The round-2 SEO pass
  already approved both labels. The word "announcement" is shared but the phrases are not identical.
- `Read the first announcement →` (31 chars) — the hero link, which is a different sentence shape
  with a different destination (`/#updates`).

The step-2 anchor `Read the architecture decision` (30 chars) does not collide with:

- `Launch architecture briefing` (28 chars) — the newsroom card 004 label a screen above, which
  uses a different noun phrase and a different action verb.
- `Read the announcement` (21 chars) — step 1's anchor, which has a different subject noun.

### Summary/label length targets

The round-2 pass measured the two roadmap labels at 21 chars each. The deck's new label is 30 chars —
9 chars longer, still well within the 155-char meta budget (which applies to `<meta name="description">`,
not to link anchors) and comfortably short for an in-page anchor.

**No change required.**

---

## 8. Check 7 — the one-link-per-step contract

### The contract (from round 2, confirmed round 2.5)

Each step declares at most one `link`. A step with `link` renders exactly one anchor; a step without
`link` renders no anchor. The last step (pinned by title at `progress-log.test.mjs:219–224`) must
carry no link.

### The four-step state

| Step | Title                     | `link` declared | Renders anchor                         | `current` |
| ---- | ------------------------- | --------------- | -------------------------------------- | --------- |
| 1    | Programme and purpose     | yes → 001       | yes (`Read the announcement`)          | no        |
| 2    | Mission architecture      | yes → 004       | yes (`Read the architecture decision`) | yes       |
| 3    | Integration and readiness | no              | no                                     | no        |
| 4    | Surface operations        | no              | no (last step, test-pinned)            | no        |

**The contract holds.** Two steps declare a `link` (1 and 2); two steps do not (3 and 4). The last
step by title is `Surface operations` (step 4), which carries no link — the test assertion at
`progress-log.test.mjs:219–224` is satisfied by the insertion (the `lastIndex` becomes 3, and index 3
is still `Surface operations`).

**The last-step-by-title invariant.** The test pins the last step by its title string. Step 4's
title is `Surface operations` — unchanged from the live file. The new step 3 is inserted before it,
so the last step remains step 4. The assertion holds without change (deck §8).

**No change required.**

---

## 9. Check 8 — date audit

Per-step check against the released record (carried forward from the round-2 pass, re-confirmed
against the four-article record):

| Step          | Released date sentence               | Source (with lines)                                                | Appears in the frozen strings?                                        |
| ------------- | ------------------------------------ | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 1 `Announced` | "a launch window in 2031" (verbatim) | `001:65`; `001:6` (summary frontmatter); reaffirmed `002:104-105`  | **yes** — step 1 detail, last sentence, with its citation embedded    |
| 2 `In hand`   | **no released date**                 | `002:105` — "No launch or landing date is being stated."; `003:69` | **confirmed: no date** in step 2 state, title, detail, or link anchor |
| 3 `Ahead`     | **no released date**                 | nothing in 001–004 dates the integration-and-readiness phase       | **confirmed: no date** in step 3 state, title, or detail              |
| 4 `Ahead`     | **no released date**                 | nothing in 001–004 dates the surface operations phase              | **confirmed: no date** in step 4 state, title, or detail              |

**The 2031 launch window is the only date token on the section.** It appears exactly once, on step 1,
with its source (001's own sentence). No other step invents, rounds, or implies a date. The budget's
"constant 2026 euros" (`001:65-66`) is a currency base, not a mission date. The surface-life figures
(`001:68-71`) are durations, not dates. `docs/timeline/` and `docs/SCENARIO.md`'s locked calendar are
private and stay out.

**The date audit is unchanged from the round-2 pass.** The new step 3's detail sentence is built
entirely from `004:50–52` and contains no date token. No new date token enters any frozen string.

**Verified: no conflict with the fact grid's date rows.** The grid still reads `Launch date: To be
announced` / `Landing date: To be announced` while the roadmap carries the 2031 window. That is a
pre-existing coherence question already routed by `about-method.md` §15 row 5 (continuity
`t_a0ee9abf`). This pass does not re-open it.

---

## 10. Check 9 — the `facts.ts` value

`website/src/features/mission/facts.ts:23` publishes `{ label: 'Current state', value: 'Mission
architecture' }`.

The deck's §4 decides `current: true` stays on step 2, whose title is `Mission architecture`.
The deck decides no change to `facts.ts` is needed: the panel and the grid already use one
term for one state.

**Confirmed: the `facts.ts` value agrees with the log's `current` flag.** Both surfaces say `Mission
architecture` for the current state. The round-2 drop condition is unchanged and not triggered: no
live card or comment instructs dropping the item.

**No change required.**

---

## 11. Check 10 — link-text and label-length summary for the four-step shape

### All text surfaces on the section after the change

| Surface             | Text                                | Chars | Note                                     |
| ------------------- | ----------------------------------- | ----- | ---------------------------------------- |
| Eyebrow             | `Mission roadmap`                   | 15    | unchanged; not a heading                 |
| Section title (h2)  | `One step at a time.`               | 19    | unchanged                                |
| Section description | (132 chars, approved round 2)       | 132   | unchanged; verified §5                   |
| Step 1 state        | `Announced`                         | 9     | unchanged                                |
| Step 1 title (h3)   | `Programme and purpose`             | 21    | **renamed** from `Coalition and purpose` |
| Step 1 detail       | (184 chars, approved round 2)       | 184   | unchanged                                |
| Step 1 link anchor  | `Read the announcement`             | 21    | unchanged                                |
| Step 2 state        | `In hand`                           | 7     | unchanged                                |
| Step 2 title (h3)   | `Mission architecture`              | 20    | unchanged                                |
| Step 2 detail       | (160 chars, approved round 2.5)     | 160   | unchanged                                |
| Step 2 link anchor  | `Read the architecture decision`    | 30    | unchanged from round 2.5                 |
| Step 3 state        | `Ahead`                             | 5     | unchanged                                |
| Step 3 title (h3)   | `Integration and readiness`         | 25    | **new**                                  |
| Step 3 detail       | (130 chars, built from `004:50–52`) | 130   | **new**                                  |
| Step 4 state        | `Ahead`                             | 5     | unchanged                                |
| Step 4 title (h3)   | `Surface operations`                | 18    | unchanged                                |
| Step 4 detail       | (78 chars, approved round 2)        | 78    | unchanged                                |

**No text surface exceeds its length target.** All step titles are under 60 chars (the search-title
budget). All step details are under 155 chars (the meta-description budget, applied here as a
general prose-quality guide). The section description is 132 chars, well within 155.

---

## 12. Validation performed on this card

| Check                                   | Command / source                                                                        | Result                                                                                                        |
| --------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Deck read and verified                  | `sha256sum .agents/work/drafts/roadmap-round-3-deck.md`                                 | `3741bbe9b5997ea83c96e9c5b0e59fb3df8d3dff7b312dbe65f67999fb26cee8` (matches this pass's starting measurement) |
| Round-2 SEO pass hash                   | `sha256sum .agents/work/seo/progress-log.md`                                            | `424a44ff…` (matches deck §0 reference)                                                                       |
| Round-2.5 SEO pass hash                 | `sha256sum .agents/work/seo/roadmap-004-link.md`                                        | `c14b488a…` (round-2.5 SEO note; deck references round-2.5 deck hash `2dbbafcf…`)                             |
| Current strings read from source        | `read_file` on `steps.ts`, `navigation.ts`, `site.ts`                                   | §4.1 "Current" column matches the live dist, field for field                                                  |
| Published articles (all four)           | `website/news/001–004*.mdx` — all `publication: published`                              | Four route directories present in `website/dist/news/`                                                        |
| Heading outline on built homepage       | `grep -oP '<h[1-3][^>]*>[^<]*</h[1-3]>' website/dist/index.html`                        | `h1 → h2 → h3`, no skipped level, no duplicate heading text                                                   |
| Link targets resolve and are published  | `website/dist/news/001-*/index.html`, `004-*/index.html` present; listed on `/news/`    | Both routes built, both listed, trailing-slash form correct                                                   |
| Article body links (reachability)       | `grep -oP 'href="/news/[^"]*"' website/dist/news/004*/index.html` and `003*/index.html` | 004 → 003 + 001; 003 → 002; chain reaches all four articles from the homepage                                 |
| No link to a draft                      | Steps 3 and 4 declare no `link`; no 005-* route exists                                  | Correct                                                                                                       |
| Section anchor reach (`#timeline`)      | `grep -o '#timeline' website/dist/index.html \| wc -l` — 2                              | 2 per page (header + footer nav), one definition (`navigation.ts:63`)                                         |
| Homepage `<title>` and meta description | `grep -oP '<meta name="description" content="[^"]*"' website/dist/index.html`           | 1 meta description at 108 chars; title from `site.ts`                                                         |
| Anchor text uniqueness                  | All link texts on built homepage enumerated                                             | All seven link texts unique; no collision between step and newsroom labels                                    |
| Gated-marker scan on frozen strings     | Searched deck §7 four rendered strings against `gatedTextMarkers` (from `guards.mjs`)   | 0 hits; positive control fires in `.worktrees/` source packs (memory note confirmed)                          |
| facts.ts value matches highlighted step | `facts.ts:23` value `Mission architecture` = step 2 title with `current: true`          | Confirmed                                                                                                     |
| No `website/` file edited               | `git status --short`                                                                    | Only other cards' in-flight files appear; no file this card touched                                           |

**Shared-checkout note.** The repository was moving while this pass ran: other cards' in-flight files
appear in `git status`. None of these are files this card reads or modifies. The `website/src/` tree
was not modified by any card during this pass.

---

## 13. Verdict, and what is outstanding

**Verdict: approved as proposed.** All checks pass with the wording exactly as the deck freezes it
in §7:

1. **Heading outline** holds: `h2` section title, four `h3` steps (including the new
   `Integration and readiness`), no duplicate heading text, newsroom h2 ahead in source order.
2. **Two internal links** target published articles that carry the steps' claims, with descriptive
   anchors, correct trailing-slash route forms, and no link into an unpublished article. After the
   change, all four published articles are reachable from the homepage.
3. **Homepage metadata** needs no change: `<title>` and meta description are range statements true
   under the four-step shape; the section description is visible prose, not a meta tag.
4. **Step-1 rename** (`Programme and purpose`) has no SEO objection. The replacement noun is
   already dominant on the page and serves the same search intent. The escalation for the five
   other published instances is out of scope for this pass.
5. **Anchor text** is distinct: all seven link texts on the homepage are unique.
6. **One-link-per-step contract** holds: two linked steps (1, 2), two unreached steps (3, 4),
   last step by title invariant preserved.
7. **Section description** reads correctly against the four-step shape: highlighted step = step 2
   (the work in hand); step after = step 3 (`Ahead`, not settled). No change needed.
8. **Date audit** passes: one released date sentence on step 1 only; no invented, rounded, or
   implied timing on steps 2–4.
9. **facts.ts `Current state`** agrees with the log's `current: true` flag (`Mission architecture`).

**No required wording change, so no corrective writer card and no block.**

**Outstanding before anything here is public:** the editorial gate (`t_a635e5eb`, owner
`mars-ai-simulator-editor`), which records the release decision for the published strings and
names the approved §7 revision, and then the dev transcription card (`t_28348940`, owner
`mars-ai-simulator-dev`), which transcribes the gate-approved strings into `steps.ts` and the
test comment — **after** the round-2.5 dev card has landed its transcription of the same file
(deck §12(f), planner brief §6). An editorial `approved` is not a release.

**Next owner:** `mars-ai-simulator-editor` on `t_a635e5eb` — record the release decision, name the
approved §7 revision, and file the dev transcription card.
