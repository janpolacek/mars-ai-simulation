# SEO package: roadmap-004-link (homepage roadmap after article 004)

## Package metadata

| Field             | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Surface           | Homepage `/` — the progress-log section (`<section id="timeline">`, rendered last), the site strings in `website/src/features/progress/steps.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Stage / step      | `004-launch-provider` (article 004 is published and live). This card's panel change advances no timeline step of its own. Factual bound: the published record — `website/news/001-project-announcement.mdx` through `004-launch-provider.mdx` (all four `publication: published`)                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Card              | `t_1b0b1951` (`mars-ai-simulator-seo`), parent `t_116ca903` (writer deck)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Inputs read       | `.agents/work/drafts/roadmap-004-link.md` (deck, sha256 `613cf4763ff6e8448432b29f4c79c69e8d55edfc236f03ed93c3d50842a2a2b5`, recipe hash `2dbbafcf238254418b75664472bf1486f154e5c8d5ec74ce8c39a8d0cc4a0609`, 25,778 B, 212 lines, verified at start of this pass); `website/src/features/progress/steps.ts` (sha256 `1236ead76962cb8672d2ce25fabc73b45efc04e2e346adafa015a630c08e4db5`); `.agents/work/seo/progress-log.md` (round-2 SEO pass, pattern to follow); `website/news/001-project-announcement.mdx` through `004-launch-provider.mdx`; `website/dist/index.html` (last build on disk); `website/src/lib/{navigation.ts,site.ts}`; `website/test/progress-log.test.mjs` (sha256 `4fc56e74…` per deck §10.2) |
| Conventions read  | `.agents/skills/seo-content/SKILL.md` (including "Verified practice"); `.agents/skills/brand-voice/SKILL.md`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Artifact          | this file (`.agents/work/seo/roadmap-004-link.md`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Applied this pass | **nothing under `website/`.** The deck's §7 strings are reviewed here and frozen for the dev card to transcribe. `git status --short` on `website/` shows no file touched by this card                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Verdict           | **approved as proposed** — no required wording change (§10)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Status            | recommendations issued; **no approval, no release, no deploy, no canon decision**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

Assumptions recorded (nothing here is treated as approved):

1. `SITE_URL` is still unrecorded, so no route emits a canonical link today, and no origin-dependent
   recommendation here is live. That is the correct state, not a gap.
2. The deck's §7 strings are the writer's frozen values, and this pass reviews but does not change
   their wording. Everything below is either a confirmation, an accepted alternative recorded for
   the record, or a check whose answer depends on the writer's words.
3. This pass follows the round-2 SEO package (`.agents/work/seo/progress-log.md`, sha256 `424a44ff…`)
   as its pattern. The round-2 pass approved the panel's wording for 001–003; this pass reviews
   the three-string delta on that approved panel.

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
- **Secondary themes the new wording honestly serves:** "Mars mission architecture", "Mars rover mission
  delivery", "Mars surface operations".
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

| #  | Current (live dist)                            | Proposed (deck §7)                             |
| -- | ---------------------------------------------- | ---------------------------------------------- |
| 1  | `H1` A mission to read Mars carefully.         | `H1` A mission to read Mars carefully.         |
| 2  | `H2` The programme at a glance                 | `H2` The programme at a glance                 |
| 3  | `H2` The story starts before launch.           | `H2` The story starts before launch.           |
| 4  | `H3` A Mars mission takes shape in public.     | `H3` A Mars mission takes shape in public.     |
| 5  | `H3` Choosing what a Mars rover carries.       | `H3` Choosing what a Mars rover carries.       |
| 6  | `H3` The rover design, frozen.                 | `H3` The rover design, frozen.                 |
| 7  | `H2` One step at a time. (id `timeline-title`) | `H2` One step at a time. (id `timeline-title`) |
| 8  | `H3` Coalition and purpose                     | `H3` Coalition and purpose                     |
| 9  | `H3` Mission architecture                      | `H3` Mission architecture                      |
| 10 | `H3` Surface operations                        | `H3` Surface operations                        |

**Verdict: the order is correct under the revised wording.** Level runs `h1 → h2 → h3` with no skipped
level; the three step `h3`s sit inside the one `h2` that carries the section name. One `h1` on the
page (the hero), as before.

**No heading text changes.** The deck does not change any step title, the section heading, or the
eyebrow. The heading outline is byte-identical to the round-2 approved state.

**No change required.**

---

## 3. Check 2 — internal links after the change

### Anchor inventory (current → proposed)

| Surface           | Current anchor                  | Proposed anchor                      | Target route                      |
| ----------------- | ------------------------------- | ------------------------------------ | --------------------------------- |
| Hero text link    | `Read the first announcement →` | unchanged                            | `/#updates` (newsroom)            |
| Roadmap step 1    | `Read the announcement`         | unchanged                            | `/news/001-project-announcement/` |
| Roadmap step 2    | `Read the rover design`         | **`Read the architecture decision`** | `/news/004-launch-provider/`      |
| Roadmap step 3    | (no link)                       | (no link)                            | —                                 |
| Newsroom card 001 | `Announcement summary`          | unchanged                            | `/news/001-project-announcement/` |
| Newsroom card 002 | `Payload selection briefing`    | unchanged                            | `/news/002-payload-selection/`    |
| Newsroom card 003 | `Rover design briefing`         | unchanged                            | `/news/003-vehicle-design/`       |
| Newsroom card 004 | `Launch architecture briefing`  | unchanged                            | `/news/004-launch-provider/`      |

### Link 1 (step 1): `Read the announcement` → `/news/001-project-announcement/` — unchanged

Carried forward from the round-2 pass; no change by this deck. The link remains correct: 001 is
`publication: published`, the route is built in `dist/`, and the anchor is descriptive and not "read more".

### Link 2 (step 2): `Read the architecture decision` → `/news/004-launch-provider/` — new target

| Question                                                | Evidence                                                                                                                                                                                                                                                                                                                                                 | Result         |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Target is the published article carrying step-2 claims? | 004 frontmatter `publication: published`, `status: Architecture selected`. Claims: "selected a delivery architecture" (`:14`), "decided how Red Horizon One will leave Earth" (`:13`), "integration and readiness work" (`:50`), "the mission around the rover is still being assembled" (substance at `:50-52`, restating `003:71`). All present in 004 | **yes**        |
| Route exists and is listed?                             | `website/dist/news/004-launch-provider/index.html` present; listed on `/news/` (`href="/news/004-launch-provider/"`)                                                                                                                                                                                                                                     | **yes**        |
| Route form correct (trailing slash)?                    | `routes.newsArticle('004-launch-provider')` = `/news/004-launch-provider/` — matches `trailingSlash: 'always'`                                                                                                                                                                                                                                           | **yes**        |
| Anchor descriptive, not "read more"?                    | `Read the architecture decision` (30 chars) names the action and event type; distinct from the news card's own label (`Launch architecture briefing`) on the same page                                                                                                                                                                                   | **acceptable** |
| Step links to a published article?                      | 004 is `publication: published`; route built in `dist/`                                                                                                                                                                                                                                                                                                  | **yes**        |

### Step 3: no link — correct

No published article reports surface operations. The step keeps no link, matching the round-2 approved
state and the test assertion at `progress-log.test.mjs:220` (last step has no link).

### Internal-link reachability after the change

The roadmap panel would carry two article anchors: step 1 → 001, step 2 → 004. From the homepage:

- **001** is directly reachable (step 1 anchor).
- **004** is directly reachable (step 2 anchor).
- **003** is reachable from 004 (`004:31`, "the six-wheel rover" → `/news/003-vehicle-design/`).
- **002** is reachable from 003 (`003:63`, "the programme agreed in its second public step" → `/news/002-payload-selection/`).

**All four published articles are reachable from the homepage.** The roadmap's one-link-per-step shape
leaves no published article unreachable. The chain is: homepage → 004 → 003 → 002, and homepage → 001.

**No change required.**

---

## 4. Check 3 — metadata and the indexable surface

### 4.1 Homepage `<title>` and meta description

| Surface                           | Applied value (measured)                                                                                                                      | Decision                                                                                                                            |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Homepage `<title>`                | `Red Horizon                                                                                                                                  | A Mars mission in progress``(from``site.ts:15``, built into ``dist/index.html`)                                                     | **keep — no change.** The string is true under the new step: the page is still a mission in progress. |
| Homepage meta description         | `Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface.` (108 chars, from `site.ts:17`) | **keep — no change.** Range statement about the record; not a claim about the current step, so the panel wording cannot falsify it. |
| `<meta name="description">` count | exactly **1** on the built homepage                                                                                                           | The 132-char section description (`steps.ts:27`) is visible prose, not a meta description. No conflict.                             |
| `robots` / canonical              | none emitted (`SITE_URL` unset)                                                                                                               | correct state, unchanged                                                                                                            |

### 4.2 Does re-pointing the anchor change anything for the title or section naming?

**No.** The round-2 SEO pass (§4.3) raised the `<title>`/section-naming question and confirmed no
change was needed. This deck's delta is a three-string change to the panel wording (two rendered
literals plus a source comment); it does not touch the section heading, the eyebrow, the nav label,
or any metadata surface. The `<title>` stays `Red Horizon | A Mars mission in progress` and the
section naming stays `Mission roadmap` / `One step at a time.`

The round-2 pass owned the `<title>`/section-naming question. This pass re-confirms it still holds
and names no new owner — the question is settled.

### 4.3 JSON-LD and sitemap

No structured data is emitted on the homepage (no `NewsArticle`, no `Organization`). Re-pointing the
anchor from 003 to 004 does not change the page's structured data or sitemap footprint. The correct
state is no canonical (SITE_URL unset) and no JSON-LD; that does not change.

**No metadata change required.**

---

## 5. Check 4 — anchor text uniqueness across the page

All link text on the homepage after the proposed change:

| Link text                      | Location          | Route                             | Chars |
| ------------------------------ | ----------------- | --------------------------------- | ----- |
| Read the first announcement →  | Hero              | `/#updates`                       | 31    |
| Read the announcement          | Roadmap step 1    | `/news/001-project-announcement/` | 22    |
| Read the architecture decision | Roadmap step 2    | `/news/004-launch-provider/`      | 30    |
| Announcement summary           | Newsroom card 001 | `/news/001-project-announcement/` | 21    |
| Payload selection briefing     | Newsroom card 002 | `/news/002-payload-selection/`    | 27    |
| Rover design briefing          | Newsroom card 003 | `/news/003-vehicle-design/`       | 22    |
| Launch architecture briefing   | Newsroom card 004 | `/news/004-launch-provider/`      | 28    |

**All six link texts are unique.** No two anchors share the same string. The new anchor
`Read the architecture decision` (30 chars) does not collide with:

- `Launch architecture briefing` (28 chars) — the newsroom card 004 label a screen above, which
  uses a different noun phrase and a different action verb.
- `Read the announcement` (22 chars) — step 1's anchor, which has a different subject noun.
- `Read the first announcement →` (31 chars) — the hero link, which is a different sentence shape
  with a different destination.

### Label length targets

The round-2 pass measured the two roadmap labels at 21 chars each. The deck's new label is 30 chars —
9 chars longer, still well within the 155-char meta budget (which applies to `<meta name="description">`,
not to link anchors) and comfortably short for an in-page anchor.

**No change required.**

---

## 6. Check 5 — no later-step disclosure

Every recommended surface audited for later-step exposure:

| Surface                           | Recommendation                                                                                             | Later-step exposure                                                                                                                                                |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Homepage `<title>`                | unchanged (`Red Horizon \| A Mars mission in progress`)                                                    | none — brand + progress state, no step, no date                                                                                                                    |
| Homepage meta description         | unchanged (108 chars)                                                                                      | none — range statement; no 2031 window, no instrument, no region                                                                                                   |
| Section heading text (h2)         | unchanged (`One step at a time.`)                                                                          | none                                                                                                                                                               |
| Eyebrow (`<p>`, not a heading)    | unchanged (`Mission roadmap`)                                                                              | none — names the section's content, no fact                                                                                                                        |
| Step titles (h3 ×3)               | unchanged (`Coalition and purpose`, `Mission architecture`, `Surface operations`)                          | none — the third names work the record has not reached, in the same words already public                                                                           |
| Step details                      | 001 and 003 unchanged; step 2 gains "the delivery architecture is chosen" (deck §4)                        | none from step 003+: the addition cites 004's published decision; no vehicle designation, no launch-day forms, no dates beyond 2031, no institution/facility names |
| Internal link anchors             | `Read the architecture decision` (→ 004), `Read the announcement` (→ 001) — both published routes          | none — no link to a draft; no anchor hints at an unreleased article                                                                                                |
| Link targets                      | `/news/004-launch-provider/` (published, 200, route in `dist/`)                                            | none — the target is already live                                                                                                                                  |
| Image alt text                    | **no recommendation** — no new image; the section's markers are decorative CSS                             | none                                                                                                                                                               |
| Structured data                   | **none recommended** — `NewsArticle` inputs incomplete; `Organization` forbidden for a fictional programme | none                                                                                                                                                               |
| Sitemap / robots.txt / Open Graph | not touched by this change                                                                                 | none                                                                                                                                                               |

**Confidentiality scan (result, not an inventory).** The two gated markers (`gatedTextMarkers` in
`website/scripts/guards.mjs`) were searched over the deck's three changed/frozen strings (the detail
after, the label after, and the header comment): **0 hits**. The positive control fires in
`.worktrees/` source packs (confirmed by the memory note `gated-marker-positive-controls`), so the
scan instrument is live. The withheld classes the deck lists by class (vehicle designation, landing-area
detail, launcher, dates beyond 2031, instrument names, real institutions) are absent from every
recommended string.

---

## 7. Check 6 — date audit

Per-step check against the released record (carried forward from the round-2 pass, re-confirmed
against the four-article record):

| Step          | Released date sentence               | Source (with lines)                                                | Appears in the frozen strings?                                        |
| ------------- | ------------------------------------ | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
| 1 `Announced` | "a launch window in 2031" (verbatim) | `001:65`; `001:6` (summary frontmatter); reaffirmed `002:104-105`  | **yes** — step 1 detail, last sentence, with its citation embedded    |
| 2 `In hand`   | **no released date**                 | `002:105` — "No launch or landing date is being stated."; `003:69` | **confirmed: no date** in step 2 state, title, detail, or link anchor |
| 3 `Ahead`     | **no released date**                 | nothing in 001–004 dates the surface phase                         | **confirmed: no date** in step 3 state, title, or detail              |

**The 2031 launch window is the only date token on the section.** It appears exactly once, on step 1,
with its source (001's own sentence). No other step invents, rounds, or implies a date. The budget's
"constant 2026 euros" (`001:65-66`) is a currency base, not a mission date. The surface-life figures
(`001:68-71`) are durations, not dates. `docs/timeline/` and `docs/SCENARIO.md`'s locked calendar are
private and stay out.

**The date audit is unchanged from the round-2 pass.** The deck adds one participial clause to step 2's
detail ("the delivery architecture is chosen") — a state claim, not a date. No new date token enters
any frozen string.

**Verified: no conflict with the fact grid's date rows.** The grid still reads `Launch date: To be announced` /
`Landing date: To be announced` while the roadmap carries the 2031 window. That is a pre-existing
coherence question already routed by `about-method.md` §15 row 5 (continuity `t_a0ee9abf`). This pass
does not re-open it.

---

## 8. Check 7 — the D5 `facts.ts` value

`website/src/features/mission/facts.ts:23` publishes `{ label: 'Current state', value: 'Mission
architecture' }`.

The deck's §3 decides `current: true` stays on step 2, whose title is `Mission architecture`.
The deck's §5 decides no change to `facts.ts` is needed: the panel and the grid already use one
term for one state.

**Confirmed: the `facts.ts` value agrees with the log's `current` flag.** Both surfaces say `Mission
architecture` for the current state. The round-2 drop condition is unchanged and not triggered: no
live card or comment instructs dropping the item.

---

## 9. Validation performed on this card

| Check                                   | Command / source                                                                                            | Result                                                                                                                                 |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Deck read and verified                  | `sha256sum .agents/work/drafts/roadmap-004-link.md`                                                         | `613cf4763ff6e8448432b29f4c79c69e8d55edfc236f03ed93c3d50842a2a2b5` (matches writer's addendum)                                         |
| Deck recipe hash fixed point            | Same deck, recipe: replace §0 value with `<64-hex>`                                                         | `2dbbafcf238254418b75664472bf1486f154e5c8d5ec74ce8c39a8d0cc4a0609` — matches §0; fixed point confirmed by writer                       |
| steps.ts hash                           | `sha256sum website/src/features/progress/steps.ts`                                                          | `1236ead76962cb8672d2ce25fabc73b45efc04e2e346adafa015a630c08e4db5` (matches deck §0)                                                   |
| Current strings read from source        | `read_file` on `steps.ts`, `navigation.ts`, `site.ts`                                                       | §4.1 "Current" column matches the live dist, field for field                                                                           |
| Published articles (all four)           | `website/news/001–004*.mdx` — all `publication: published`                                                  | Four route directories present in `website/dist/news/`                                                                                 |
| Heading outline on built homepage       | `grep -oP '<h[1-3][^>]*>[^<]*</h[1-3]>' website/dist/index.html`                                            | `h1 → h2 → h3`, no skipped level, no duplicate heading text                                                                            |
| Link targets resolve and are published  | `website/dist/news/004-launch-provider/index.html` present; listed on `/news/`                              | Route built, listed, trailing-slash form correct                                                                                       |
| No link to a draft (step 3 linkless)    | Step 3 remains linkless in the deck; no 005-* route exists                                                  | Correct                                                                                                                                |
| Section anchor reach (`#timeline`)      | `grep -o '#timeline' website/dist/index.html \| wc -l` — 2                                                  | 2 per page (header + footer nav), one definition (`navigation.ts:63`)                                                                  |
| Homepage `<title>` and meta description | `grep -oP '<meta name="description" content="[^"]*"' website/dist/index.html`                               | 1 meta description at 108 chars; title from `site.ts`                                                                                  |
| Anchor text uniqueness                  | All link texts on built homepage enumerated                                                                 | All six link texts unique; `Read the architecture decision` (30 chars) does not collide with `Launch architecture briefing` (28 chars) |
| New anchor length                       | `Read the architecture decision` = 30 chars                                                                 | Under 155-char meta budget; acceptable for in-page anchor                                                                              |
| Internal-link reachability              | Chain traced: homepage → 004 (step 2) → 003 (`004:31`) → 002 (`003:63`); homepage → 001 (step 1)            | All four published articles reachable from the homepage                                                                                |
| Gated-marker scan on frozen strings     | Searched deck §4 clause, §6 after-label, §7 block 1 (detail after + label after) against `gatedTextMarkers` | 0 hits; positive control fires in `.worktrees/` source packs (memory note confirmed)                                                   |
| No `website/` file edited               | `git status --short`                                                                                        | Only other cards' in-flight files appear; no file this card touched                                                                    |
| facts.ts value matches highlighted step | `facts.ts:23` value `Mission architecture` = step 2 title with `current: true`                              | Confirmed                                                                                                                              |

**Shared-checkout note.** The repository is moving: other cards' in-flight files appear in `git status`.
None of these are files this card reads or modifies.

---

## 10. Verdict, and what is outstanding

**Verdict: approved as proposed.** All seven checks pass with the wording exactly as the deck freezes it
in §7:

1. **Heading outline** holds: no heading text changes by this deck; `h2` section title, `h3` steps, no
   duplicate heading text, newsroom h2 ahead in source order.
2. **Two internal links** target published articles that carry the steps' claims, with descriptive
   anchors, correct trailing-slash route forms, and no link into an unpublished article. After the
   change, all four published articles are reachable from the homepage.
3. **Homepage metadata** needs no change: `<title>` and meta description are range statements true under
   the new step; the section description is visible prose, not a meta tag.
4. **Anchor text** is distinct: `Read the architecture decision` (30 chars) does not collide with
   `Launch architecture briefing` (28 chars) on the newsroom card a screen above, nor with any other
   link text on the page.
5. **No later-step disclosure** on any recommended surface; gated-marker scan: 0 hits.
6. **Date audit** passes: one released date sentence on step 1 only, with its citation; no invented,
   rounded, or implied timing on steps 2 or 3. The added clause is a state claim, not a date.
7. **facts.ts `Current state`** agrees with the log's `current: true` flag (`Mission architecture`).

**No required wording change, so no corrective writer card and no block.**

Outstanding before anything here is public: the editorial gate (`mars-ai-simulator-editor`), which
records the release decision for the published strings and names the approved §7 revision, and then the
dev transcription card (`mars-ai-simulator-dev`), which transcribes the gate-approved strings into
`steps.ts` and the test comment. An editorial `approved` is not a release.

**Next owner:** `mars-ai-simulator-editor` — record the release decision, name the approved §7
revision, and file the dev transcription card.

---

## 11. Lessons offered to the `seo-content` skill

Recorded here rather than applied (no skill file was edited by this card):

1. **A three-string delta on an already-approved panel needs a shorter package than a full review.**
   The round-2 SEO pass established the heading outline, link-target correctness, metadata confirmation,
   terminology, later-step disclosure, date audit, and facts.ts alignment. This pass re-checks only
   what the delta touches (anchor text uniqueness, link reachability after re-pointing, and the
   metadata question again) and confirms the unchanged facts still hold. The seven-check structure
   stays; the prose around each check should not.

2. **Anchor-text uniqueness is a live-page audit, not a deck reading.** The deck names the proposed
   anchor and the newsroom card label, but the live page carries six other link texts (hero, step 1,
   four card labels) that the deck does not enumerate. Measuring all of them against the proposed
   string prevents a collision the deck's scoped analysis does not see.
