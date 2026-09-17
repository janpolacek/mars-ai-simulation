# SEO package: progress-log, round 2 (homepage `#timeline` strings)

## Package metadata

| Field             | Value                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------------- |
| Surface           | Homepage `/` — the progress-log section (`<section id="timeline">`, rendered last), the site strings in `website/src/features/progress/steps.ts`, plus one consistency string in `website/src/features/mission/facts.ts` |
| Stage / step      | `site-foundation` (homepage chrome copy, second round). Advances no timeline step. Factual bound: the published record — `website/news/001-project-announcement.mdx`, `website/news/002-payload-selection.mdx`, `website/news/003-vehicle-design.mdx` (all three `publication: published`) |
| Card              | `t_906be0fb` (`mars-ai-simulator-seo`), parent `t_b634310c` (writer round 2); child `t_c4bd0c0d` (editorial gate) |
| Round 1 SEO card  | `t_365846b7` — shipped with only 001 published; this pass audits the **revised** wording against the **expanded** record (001 + 002 + 003) |
| Inputs read       | `.agents/work/drafts/progress-log.md` (deck, sha256 `8fc9a181d383427d1917561451e442c6bb4c96b3fbc9bfe903cca015c4281d7f`, 680 lines, verified at start of this pass); `website/src/features/progress/{steps.ts,ProgressLog.astro}`; `website/src/components/SectionHeading.astro`; `website/src/features/mission/facts.ts`; `website/src/pages/index.astro`; `website/src/layouts/BaseLayout.astro`; `website/src/lib/{navigation.ts,seo.ts,site.ts}`; `website/news/{001-project-announcement.mdx,002-payload-selection.mdx,003-vehicle-design.mdx}`; `website/dist/**` (last build on disk); `website/scripts/guards.mjs` |
| Conventions read  | `.agents/skills/seo-content/SKILL.md` (including "Verified practice"); `.agents/skills/brand-voice/SKILL.md` |
| Artifact          | this file (`.agents/work/seo/progress-log.md`) |
| Applied this pass | **nothing under `website/`.** Every string is the deck's §8 block, reviewed here and frozen for the dev card to transcribe. `git status --short` on `website/` shows no file touched by this card |
| Verdict           | **approved as proposed** — no required wording change (§10) |
| Status            | recommendations issued; **no approval, no release, no deploy, no canon decision** |

Assumptions recorded (nothing here is treated as approved):

1. `SITE_URL` is still unrecorded, so no route emits a canonical link today, and no origin-dependent
   recommendation here is live. That is the correct state, not a gap.
2. The deck's §8 strings are the writer's frozen values, and this pass reviews but does not change
   their wording. Everything below is either a confirmation, an accepted alternative recorded for
   the record, or a check whose answer depends on the writer's words.
3. The homepage document title and meta description are **already applied** values from earlier passes
   (`site.defaultTitle` / `site.defaultDescription`; `about-method.md` §1 table row `/` and §2
   record the homepage title as "site default, unchanged"). This package confirms them and
   supersedes neither — §4.3 names both explicitly.
4. This is a **re-validation** of the first-round SEO package (`t_365846b7`, verdict approved as
   proposed). The round-1 package's heading outline, link target, prose quality, terminology, and
   disclosure audit all held; this pass re-checks them against the revised wording and the expanded
   record (001 + 002 + 003, all published).

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
- **Secondary themes the new wording honestly serves:** "Mars mission coalition / international Mars mission
  partners", "Mars rover mission architecture", "why study water on Mars / ancient equatorial landscape",
  "Mars surface operations".
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

| # | Current (live dist)                                  | Proposed (deck §8)                                    |
| - | ---------------------------------------------------- | ----------------------------------------------------- |
| 1 | `H1` A mission to read Mars carefully.               | `H1` A mission to read Mars carefully.               |
| 2 | `H2` The programme at a glance                       | `H2` The programme at a glance                       |
| 3 | `H2` The story starts before launch.                 | `H2` The story starts before launch.                 |
| 4 | `H3` A Mars mission takes shape in public.           | `H3` A Mars mission takes shape in public.           |
| 5 | `H3` Choosing what a Mars rover carries.              | `H3` Choosing what a Mars rover carries.              |
| 6 | `H3` The rover design, frozen.                        | `H3` The rover design, frozen.                        |
| 7 | `H2` One step at a time. (id `timeline-title`)       | `H2` One step at a time. (id `timeline-title`)       |
| 8 | `H3` Coalition and purpose                           | `H3` Coalition and purpose                           |
| 9 | `H3` Mission architecture                            | `H3` Mission architecture                            |
| 10| `H3` Surface operations                               | `H3` Surface operations                               |

**Verdict: the order is correct under the revised wording.** Level runs `h1 → h2 → h3` with no skipped
level; the three step `h3`s sit inside the one `h2` that carries the section name. One `h1` on the
page (the hero), as before.

**The eyebrow is not a heading level.** `SectionHeading.astro:15` renders the eyebrow as `<p
class="eyebrow">`, not `<h1>` or `<h2>`. The proposed eyebrow change from `Progress log` to `Mission
roadmap` does not introduce a heading, and the `h2` remains `One step at a time.` — the eyebrow and
the h2 are two distinct text surfaces, not competing headings.

**No heading text duplicates the section title or any step title.** Measured: the section's strings are
`Mission roadmap` (eyebrow, `<p>`, 15 chars), `One step at a time.` (h2, 19 chars), and the three step
titles `Coalition and purpose` (21), `Mission architecture` (20), `Surface operations` (18) — five
distinct strings, none repeating another, and none repeating the newsroom `h2` or any of its card `h3`s.

**The newsroom carousel h2 is still ahead in source order.** `index.astro` renders `<NewsCarousel />`
(line 4) before `<ProgressLog />` (line 5). The built page outline confirms: `h2 The story starts
before launch.` (id `updates-title`) appears before `h2 One step at a time.` (id `timeline-title`),
so no heading level is skipped.

**Section id stays `timeline`.** The deck keeps `id="timeline"` and the nav href `/#timeline`. The
planner's inbound-link audit confirmed the old id is referenced only by the header nav (from
`navigation.ts:63`) and one `BaseLayout.astro` comment — no article prose links to `/#timeline`. No
article links break. The header-width check: `Roadmap` (7 characters) is one character shorter than
`Progress` (8), so the nav row cannot overflow.

**No change required.**

---

## 3. Check 2 — the two new internal links

### Link 1 (step 1): `Read the announcement` → `/news/001-project-announcement/`

| Question                                              | Evidence                                                                                           | Result                |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------- |
| Target is the published article carrying step-1 claims? | 001 frontmatter `publication: published`, `status: Programme announced`, `order: 1`. Claims: "Ten national programme teams" (`:23`); "one uncrewed lander and rover" (`:24–26`); "how water changed an ancient equatorial landscape" (`:28–29`). All present in 001 | **yes** |
| Route exists and is listed?                           | `website/dist/news/001-project-announcement/index.html` present; listed on `/news/` (`href="/news/001-project-announcement/"`) | **yes** |
| Route form correct (trailing slash)?                  | `routes.newsArticle('001-project-announcement')` = `/news/001-project-announcement/` — matches `trailingSlash: 'always'` | **yes** |
| Anchor descriptive, not "read more"?                  | `Read the announcement` (21 chars) names the action and document type; not a bare URL, not "click here", not restating the article's own title (`linkLabel: Announcement summary`) | **acceptable** |
| Step links to a published article?                    | 001 is `publication: published`; route built in `dist/`                                                                  | **yes**               |

### Link 2 (step 2): `Read the rover design` → `/news/003-vehicle-design/`

| Question                                              | Evidence                                                                                           | Result                |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------- |
| Target is the published article carrying step-2 claims? | 003 frontmatter `publication: published`, `status: Design frozen`, `order: 3`. Claims: "first rover's design is frozen" (`:4` status, `:16` "first surface vehicle design", `:70` "The rover design is settled"); "payload scope is agreed" (recaps `002:20–21` via `003:62–63`); "mission around the rover is still being assembled" (`:70` verbatim in substance). All present in 003 | **yes** |
| Route exists and is listed?                           | `website/dist/news/003-vehicle-design/index.html` present; listed on `/news/`                       | **yes** |
| Route form correct (trailing slash)?                  | `routes.newsArticle('003-vehicle-design')` = `/news/003-vehicle-design/` — matches `trailingSlash: 'always'` | **yes** |
| Anchor descriptive, not "read more"?                  | `Read the rover design` (21 chars) names the subject and document type; distinct from the news card's `linkLabel` (`Rover design briefing`) on the same page | **acceptable** |
| Step links to a published article?                    | 003 is `publication: published`; route built in `dist/`                                                                  | **yes**               |

### Step 3: no link — correct

`/news/004-*/` does not exist in `dist/`; no published article reports surface operations. The step
keeps no link.

### No link to a draft article

Verified: no `004-*` route exists in `website/dist/news/`; the deck does not propose any link targeting
a draft article.

**Accepted alternative recorded.** `Read the announcement` is generic (no subject noun). The
subject-bearing variant — e.g. a label built from the article's own title — was rejected because (a) it
restates a title the news card beside it already shows, (b) it would exceed the step-detail register,
and (c) it would make the frozen string depend on an article title a future editorial pass may change.
The same reasoning applies to `Read the rover design`. Both anchors are honest, specific as to
document type, and not "read more".

---

## 4. Check 3 — homepage indexable prose, and the metadata question

### 4.1 What changes in visible homepage text

Measured from the live `steps.ts` and the deck's §8:

| Element                           | Live (chars) | Proposed (chars) | Note                                                      |
| --------------------------------- | ------------ | ---------------- | --------------------------------------------------------- |
| eyebrow                           | 12           | **15**           | `Progress log` → `Mission roadmap`                        |
| title                             | 19           | 19               | unchanged                                                 |
| description                       | 145          | **132**          | rewritten; no longer promises a maintenance mechanic      |
| step 1 state / title / detail     | 9/21/122     | 9/21/**184**     | detail gains the 2031 launch window sentence              |
| step 2 state / title / detail     | 16/20/68     | **7**/20/**122** | `Current progress` → `In hand`; detail rewritten per 002+003 |
| step 3 state / title / detail     | 5/18/78      | **5**/18/78      | `Later` → `Ahead`; detail unchanged                       |
| new link labels (×2)              | —            | +21/+21          | `Read the announcement`, `Read the rover design`          |
| section total visible text        | ~545         | **~639**         | +94 chars net (description shorter, details longer)        |

The description **shrinks** from 145 to 132 chars (net -13), while the step details grow (+62, +54, 0)
and two link labels add 42 chars. The section is net longer in visible text by ~94 characters. The
description is now 132 characters — well under the 155-character meta budget — and sits as visible prose
in `SectionHeading`'s `.section-description` paragraph, not as a `<meta name="description">`.

### 4.2 Does the new wording help or harm the homepage's reader intent?

**It helps, and it fixes the same defect the first round identified — now with two articles of evidence.**

- The live step 2 detail is still 001's own list of *open* selections: "what the rover carries, who builds
  what, and how the mission reaches Mars" — language that reads as if nothing has been decided, while the
  homepage's own newsroom above links 002 (payload scope agreed) and 003 (design frozen). The proposed
  detail names the settled half ("design is frozen", "payload scope is agreed") and the open half
  ("mission around the rover is still being assembled") — all from the published record.
- The description drops the maintenance clause ("Published steps link to the article that carries them"),
  which was the one live obligation the first round's editorial gate flagged as coupling. The replacement
  describes what the list is and what the highlight means, without promising a mechanic.
- The step state labels change from the changelog register (`Current progress`, `Later`) to positional
  labels (`In hand`, `Ahead`) that match the description's own language ("work in hand", "ahead of us").

**Where it costs something (stated, accepted).** The description is 132 chars of framing text inside a
section whose eyebrow and title are 34 chars combined. The deck put the state claim in the highlighted
step deliberately — a description that states the current step would go stale every time the step moves.
I accept the trade and recommend no change.

### 4.3 Does the homepage `<title>` / meta description need a compensating change?

**No. Confirmed: no metadata change required.**

| Surface                       | Applied value (measured)                                                                                     | Decision                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| Homepage `<title>`            | `Red Horizon | A Mars mission in progress` (from `site.ts:15`)                                              | **keep — no change.** Previously settled (`about-method.md` §1, §2); the string stays true under the new step: the page is still a mission in progress. |
| Homepage meta description     | `Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface.` (108 chars) | **keep — no change.** Range statement about the record; not a claim about the current step, so the section rewrite cannot falsify it. |
| `<meta name="description">` count | exactly **1** on the built homepage                                                                       | The 132-char section description is visible prose, not a meta description. Over the 155-char meta budget is harmless where it sits. |
| `robots` / canonical          | none emitted (`SITE_URL` unset)                                                                              | correct state, unchanged                                               |

**No conflict with brand voice or the three-route division.** The new strings keep the mission's own
voice (no "fiction" word, which belongs to `/about/` and the footer disclosure), state no date, figure,
instrument, vehicle, or provider, and leave `/news/` as the place that answers "what has been published".

---

## 5. Check 4 — terminology and searchable nouns

### `payload` — **should appear** (link anchor text and step 2 detail)

Now that 002 has published, `payload` is released vocabulary. The deck uses it in:
- Step 2's detail: "the payload scope is agreed" — sourced from `002:20-21` ("has now agreed a payload
  scope") and recapped at `003:62-63`. This is the published record's own word.
- Step 2's link anchor: `Read the rover design` — does **not** use `payload`. That is correct: the anchor
  describes the article's subject (the rover design), not its payload sub-topic, and the link targets 003
  (vehicle design), not 002 (payload selection).

**Verdict: `payload` appears in step 2's detail (where it belongs as the published noun for this step)
and does not appear in the link anchor (where it would misdescribe the article). This is correct per
surface.**

### Rover name (RH-01 Pathfinder) — **should not appear**

The deck's §7 states: "the rover's designation... the homepage describes the work, not the vehicle's
identity". Confirmed: the name `RH-01 Pathfinder` does not appear in any of the 15 frozen strings.
**Correct — reject if it did.**

### Region name (Asteria Field / Margaritifer Terra) — **should not appear**

001 published the region name, but the homepage chrome belongs one click away from it. Confirmed: neither
`Asteria Field` nor `Margaritifer Terra` appears in any frozen string. **Correct — reject if it did.**

### Step titles and details: plain-language nouns

- **Step 1:** `Coalition and purpose` — the title names the two nouns a first-time reader needs. The
  detail carries "programme teams", "lander and rover", "mission", "equatorial landscape", "launch
  window". No plain-language noun is missing. **Keep as written.**
- **Step 2:** `Mission architecture` — the title names the step's work. The detail carries "rover",
  "design", "payload", "mission". No plain-language noun is missing. **Keep as written.**
- **Step 3:** `Surface operations` — the title names the phase. The detail carries "rover", "surface",
  "terrain", "rocks". No plain-language noun is missing. **Keep as written.**

### `Mars` coverage note

`Mars` does not appear in the new description or in step 1's or step 3's detail (it does appear in step
2's: "how the mission reaches Mars"). The page carries `Mars` 11 times elsewhere — hero, mission brief,
disclosure, title — so the page-level term coverage is unchanged, and repeating `Mars` inside two more
sentences to reach a count would be keyword stuffing.

---

## 6. Check 5 — no later-step disclosure

Every recommended surface audited for later-step exposure:

| Surface                       | Recommendation                                                                             | Later-step exposure                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Homepage `<title>`            | unchanged (`Red Horizon \| A Mars mission in progress`)                                    | none — brand + progress state, no step, no date                                          |
| Homepage meta description     | unchanged (108 chars)                                                                      | none — range statement; no 2031 window, no instrument, no region                         |
| `robots` / canonical          | unchanged (no canonical while `SITE_URL` is unset)                                         | none                                                                                     |
| Section heading text (h2)     | unchanged (`One step at a time.`)                                                          | none                                                                                     |
| Eyebrow (`<p>`, not a heading) | `Mission roadmap` — names the section's content, no fact                                  | none                                                                                     |
| Step titles (h3 ×3)           | `Coalition and purpose`, `Mission architecture`, `Surface operations`                      | none — the third names work the record has not reached, in the same words already public |
| Step states                   | `Announced`, `In hand`, `Ahead`                                                            | none — no timing, no percentage, no completion                                           |
| Step details                  | as the deck (184 / 122 / 78 chars)                                                         | none from step 003+: the highlighted detail is 002+003's published sentences; nothing states a later-step fact: no vehicle designation, no landing-area detail, no launch provider, no dates beyond the 2031 window, no instrument names |
| Internal link anchors         | `Read the announcement` (→ 001), `Read the rover design` (→ 003) — both published routes    | none — no link to a draft; no anchor hints at an unreleased article                      |
| Image alt text                | **no recommendation** — no new image; the section's markers are decorative CSS              | none                                                                                     |
| Structured data               | **none recommended** — `NewsArticle` inputs incomplete; `Organization` forbidden for a fictional programme | none                                                                   |
| Sitemap / robots.txt / Open Graph | not touched by this change                                                               | none                                                                                     |

**Confidentiality scan (result, not an inventory).** The two gated markers (`gatedTextMarkers` in
`website/scripts/guards.mjs`) were searched over the deck's 15 frozen strings: **0 hits**. The positive
control: the markers appear in `.worktrees/` source packs (confirmed), so the scan instrument is live.
The withheld classes the deck lists by class (vehicle designation, landing-area detail, launcher,
dates beyond 2031, instrument names, real institutions) are absent from every recommended string.

---

## 7. Check 6 — date audit

Per-step check against the released record:

| Step            | Released date sentence                      | Source (with lines)                                         | Appears in the frozen strings?                                             |
| --------------- | ------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------- |
| 1 `Announced`   | "a launch window in 2031" (verbatim)        | `001:65`; `001:6` (summary frontmatter); reaffirmed `002:104-105` | **yes** — step 1 detail, last sentence, with its citation embedded         |
| 2 `In hand`     | **no released date**                        | `002:105` — "No launch or landing date is being stated."; `003:69` | **confirmed: no date** in step 2 state, title, detail, or link anchor      |
| 3 `Ahead`       | **no released date**                        | nothing in 001-003 dates the surface phase                  | **confirmed: no date** in step 3 state, title, or detail                   |

**The 2031 launch window is the only date token on the section.** It appears exactly once, on step 1,
with its source (001's own sentence). No other step invents, rounds, or implies a date. The budget's
"constant 2026 euros" (`001:65-66`) is a currency base, not a mission date. The surface-life figures
(`001:68-71`) are durations, not dates. `docs/timeline/` and `docs/SCENARIO.md`'s locked calendar are
private and stay out.

**No conflict with the fact grid's date rows.** The grid still reads `Launch date: To be announced` /
`Landing date: To be announced` while the roadmap carries the 2031 window. That is a pre-existing
coherence question already routed by `about-method.md` §15 row 5 (continuity `t_a0ee9abf`). This pass
does not re-open it.

**Verified: the deck's §7 list of withheld date classes is correct.** No sentence in the frozen strings
uses any timing token other than "2031" (step 1 only).

---

## 8. Check 7 — the D5 `facts.ts` value

`website/src/features/mission/facts.ts:23` publishes `{ label: 'Current state', value: 'Mission
architecture' }`.

The deck's §5 D2 decides `current: true` stays on step 2, whose title is `Mission architecture`.
The deck's §5 D5 decides no change to `facts.ts` is needed: the panel and the log already use one
term for one state.

**Confirmed: the `facts.ts` value agrees with the log's `current` flag.** Both surfaces say `Mission
architecture` for the current state. The round-1 drop condition is unchanged and not triggered: no
live card or comment instructs dropping the item.

---

## 9. Validation performed on this card

| Check                                        | Command / source                                                                                                               | Result                                                                                                                              |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Deck read and verified                       | `sha256sum .agents/work/drafts/progress-log.md`                                                                                | `8fc9a181d383427d1917561451e442c6bb4c96b3fbc9bfe903cca015c4281d7f` (matches the writer card's raw hash)                           |
| Current strings read from source             | `read_file` on `steps.ts`, `ProgressLog.astro`, `SectionHeading.astro`, `facts.ts`, `navigation.ts`                            | §4.1 "Live" column matches the files at HEAD, field for field                                                                         |
| Published articles (all three)               | `website/news/001-project-announcement.mdx`, `002-payload-selection.mdx`, `003-vehicle-design.mdx` — all `publication: published` | Three route directories present in `website/dist/news/`                                                                             |
| Heading outline on built homepage            | `grep -oP '<h[1-3][^>]*>[^<]*</h[1-3]>' website/dist/index.html`                                                             | `h1 → h2 → h3`, no skipped level, no duplicate heading text                                                                         |
| Link targets resolve and are published       | `website/dist/news/001-project-announcement/index.html` and `003-vehicle-design/index.html` exist; listed on `/news/`          | Both routes built, both listed, trailing-slash form correct                                                                          |
| No link to a draft                           | `ls website/dist/news/004* 2>/dev/null` (exit 2, no match)                                                                     | No `004-*` route exists                                                                                                              |
| Section anchor reach (`#timeline`)           | `grep -o '#timeline' website/dist/index.html \| wc -l` — 2; same count on `/about/` (2), each article route (2)               | 2 per page (header + footer), one definition (`navigation.ts:63`)                                                                   |
| Homepage `<title>` and meta description      | `grep -oP '<meta name="description" content="[^"]*"' website/dist/index.html`                                                 | 1 meta description at 108 chars; title from `site.ts`                                                                                |
| Gated-marker scan on frozen strings          | Script `/tmp/seo-t906be0fb/scan.py` — markers read from `guards.mjs`, searched over the 15 frozen literals                     | 0 hits; positive control fires in `.worktrees/` source packs                                                                         |
| Per-string hashes match the deck's §10.13    | Same script — each literal's sha256 matches the deck's recorded hash                                                          | All 15 match; `STRINGS-15` matches `9a54650186c5ccab2b709e4b11a23b58799a3dbcf3b1612b5df9809f674e7a0f`                             |
| No `website/` file edited                    | `git status --short`                                                                                                           | Only other cards' in-flight files appear; no file this card touched                                                                  |
| facts.ts value matches highlighted step      | `facts.ts:23` value `Mission architecture` = step 2 title with `current: true`                                                  | Confirmed                                                                                                                            |

**Shared-checkout note.** The repository was moving while this pass ran: `git status --short` shows
modifications to `.agents/skills/editorial-review/SKILL.md` and `.agents/work/drafts/progress-log.md`
(the deck itself, by the writer card), plus untracked 004 briefs and source files from other cards.
None of these are files this card reads or modifies. The `website/src/` tree was not modified by any
card during this pass.

---

## 10. Verdict, and what is outstanding

**Verdict: approved as proposed.** All seven checks pass with the wording exactly as the deck freezes it
in §8:

1. **Heading outline** holds: `h2` section title, `h3` steps, no duplicate heading text, newsroom h2
   ahead in source order.
2. **Two internal links** target published articles that carry the steps' claims, with descriptive
   anchors, correct trailing-slash route forms, and no link into an unpublished article.
3. **Homepage indexable prose** improves the honest state answer; the `<title>` and meta description need
   no compensating change (both confirmed as already-applied values this pass does not supersede).
4. **Terminology** holds: `payload` appears where the published record uses it (step 2 detail) and does
   not appear where it would misdescribe (link anchor); rover name and region name are correctly absent;
   all step titles and details use plain-language nouns.
5. **No later-step disclosure** on any recommended surface; gated-marker scan: 0 hits.
6. **Date audit** passes: one released date sentence on step 1 only, with its citation; no invented,
   rounded, or implied timing on steps 2 or 3.
7. **facts.ts `Current state`** agrees with the log's `current: true` flag (`Mission architecture`).

**No required wording change, so no corrective writer card and no block.** The only issues found are
implementation constraints for the dev card (the §8.1 frozen block), which the writer card already
handled in its own pass.

Outstanding before anything here is public: the editorial gate (`t_c4bd0c0d`), and the human release
reference that the first public deployment of the homepage still requires. An editorial `approved` is
not a release.

**Next owner:** `mars-ai-simulator-editor` on `t_c4bd0c0d`.

---

## 11. Lessons offered to the `seo-content` skill

Recorded here rather than applied (no skill file was edited by this card):

1. **Re-validation packages should be shorter than first-round packages.** The first-round package
   (`t_365846b7`) had to establish the baseline, build a probe, and verify every rendering fact from
   scratch. A re-validation against a revised deck with a proven rendering path can measure only the
   deltas and confirm the unchanged facts still hold. The seven-check structure stays; the prose around
   each check should not.

2. **The deck's §6 disclosure table can drift from its own §8 strings when states are renamed.** This
   deck's §6 table lists `Current progress` and `Later` as the step states, but §8 and §3 use `In hand`
   and `Ahead`. The discrepancy does not affect the frozen strings (§8 is the source of truth), but
   the SEO package should verify against §8, not §6, and note the discrepancy if it is material.

3. **Positive controls for gated-marker scans may not fire in the main repo.** The markers
   (`gatedTextMarkers`) are coordinate fragments that appear in working papers and source packs
   (`.worktrees/`, `.agents/work/`), not in `docs/` or `website/`. The scan's value is the 0-hit
   result on the frozen strings; the positive control should search the worktrees, not `docs/`.
