# SEO package: 001-project-announcement (retro pass)

## Package metadata

| Field               | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Article             | `website/news/001-project-announcement.mdx` (frontmatter `publication: published`)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Timeline step       | `001-project-announcement` (retro: the article went public before the pipeline existed)                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Card                | `t_16c7ba1c` (`mars-ai-simulator-seo`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Owner               | `mars-ai-simulator-seo`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Skill               | `seo-content`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Inputs read         | `website/news/001-project-announcement.mdx`; `.agents/work/reviews/001-project-announcement.md`; `docs/timeline/001-project-announcement.md`; `docs/SCENARIO.md`; `docs/GENERAL.md`; `docs/INSTRUCTIONS.md`; `docs/README.md`; `docs/brand/BRAND.md`; `website/src/pages/index.astro`; `website/src/content.config.ts`; `website/src/lib/*.ts`; `website/src/components/*.astro`; `website/src/features/**`; `website/astro.config.mjs`; `website/scripts/assets.mjs`; `website/README.md`; card `t_fc952c7d` and its comments |
| Conventions read    | `.agents/skills/seo-content/SKILL.md`, `.agents/skills/brand-voice/SKILL.md`                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Artifact            | `.agents/work/seo/001-project-announcement.md` (this file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Applied to the page | one frontmatter value: `mediaAlt` (section 8). Nothing else in the page was changed.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Status              | recommendations issued; **no release, no deploy, no canon change**                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

Assumptions recorded (nothing here was inferred as approved):

1. No human release reference exists for article 001 or for a news detail route; `src/lib/releases.ts` ships `releasedNewsSlugs = []`, so **no article URL exists today and none is proposed as live**.
2. The article frontmatter `title` is used as the visible card heading. Its public confirmation is an open human decision (review §6.3), so this package does not change it.
3. The site tree was mid-refactor while this pass ran (untracked `website/src/lib/*`, `components/*`, `features/*`, `styles/*`, `pages/probe-temp.astro`; `pages/index.astro` on disk is still the pre-refactor monolithic file). Recommendations therefore target the **in-flight contract** (`src/lib/navigation.ts` routes, `src/lib/media.ts` media keys, `src/lib/releases.ts` gate) and name the disk state where the two differ.
4. `docs/timeline/` was read as continuity material only. No unreleased fact appears anywhere in this package or in any recommended string; the confidentiality scan in section 11 is the evidence.

---

## 1. Reader intent (one)

**Primary intent — brand informational.** A reader who has just met the name _Red Horizon_ asks: **"What is Red Horizon — who is behind it, and is it real?"** The honest answer this page can satisfy is: a fictional, AI-assisted Mars exploration programme, announced with ten national partner teams, one shared uncrewed lander-and-rover mission, a mineralogy objective, a 2031 launch window and a €2.10 billion lifecycle frame, with the technical decisions still ahead.

**Secondary intent — creative process.** Readers searching the AI/agent angle ("AI-generated fiction project", "multi-agent writing experiment"). The mandatory fiction disclosure already serves this intent honestly, so it is a target rather than a cost.

**One-sentence promise of the page:** _"This states that a fictional Mars programme called Red Horizon has been announced, who its partner teams are, what its first mission will study, and what is still undecided."_

**Deliberate non-targets** (do not optimise for, and why):

- **Live Mars mission news** ("Mars rover news", "Perseverance", "ExoMars"). Article 001 mentions no real mission and no real agency; chasing that traffic would mean inventing news.
- **"Mars launch 2031" / landing-site / vehicle queries.** The 2031 window is a fictional programme frame; the launch provider, the vehicle, and the landing region's details are gated at later steps.
- **Any query the article cannot answer** (dates, instruments, launch site, landing site name). Metadata must not promise what the body withholds.

Theme (one phrase, used consistently): _a fictional, AI-assisted Mars mission, announced._

---

## 2. Surface inventory (what is actually indexable today)

| Surface                               | State (measured)                                                                                                                                                                                   | Consequence                                                                                                                                                                        |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public pages                          | one: `/` (`website/src/pages/index.astro`); `probe-temp.astro` is an untracked local probe, not a page                                                                                             | the whole programme is one URL today                                                                                                                                               |
| Article body                          | 249 words, 0 markdown headings, 0 links; **rendered nowhere** — no detail route exists and `src/lib/releases.ts` gates `/news/<slug>/` behind a human release reference (`releasedNewsSlugs = []`) | article 001's only search surface is the homepage `<title>`, the homepage `<meta name="description">`, and its card                                                                |
| Homepage `<title>`                    | `Red Horizon \| A Mars mission in progress`                                                                                                                                                        | brand-first, no topic noun; acceptable for the only page                                                                                                                           |
| Homepage description                  | `Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface.`                                                                                     | honest, no later-step fact; no per-page override exists                                                                                                                            |
| Open Graph / Twitter card / canonical | absent (no `og:`, no `twitter:`, no `rel="canonical"`, no `ld+json`, no `robots.txt`, no sitemap anywhere in the repository)                                                                       | nothing leaks, and nothing is claimed either; `src/lib/seo.ts` correctly emits no canonical while `SITE_URL` is unset                                                              |
| `astro.config.mjs`                    | no `site:` value                                                                                                                                                                                   | canonical/sitemap work is blocked on the domain decision, not on code                                                                                                              |
| News listing                          | `#updates` carousel inside `/`; nav "News" still points at `#updates` on disk, while `src/lib/navigation.ts` already defines `routes.news = '/news/'`                                              | the listing URL is in flight; the anchor remains the live target today                                                                                                             |
| Media contract                        | `src/lib/media.ts` restricts `media:` to the key `programme-identity`; `src/lib/assets.ts` imports `docs/brand/logo.png`; `scripts/assets.mjs` withholds `docs/vehicle/`                           | the frontmatter `media:` value on disk already reads `programme-identity` (changed concurrently by that refactor); the alt text (`mediaAlt`) stays a frontmatter string either way |

**Highest-value SEO change for the project:** the `/news/` index plus release-gated `/news/<slug>/` detail routes, with a per-page `<title>` and description. That work is **already in flight in the working tree** (`src/lib/navigation.ts`, `src/lib/releases.ts`, `src/lib/seo.ts`, and a `SectionHeading` that documents a page-level `h1` on the news index). This package therefore specifies the **metadata contract** for that route rather than requesting new structure, and it does not create a duplicate card for work that is already being built.

---

## 3. Title

**Current** — frontmatter `title` (32 chars), also the visible card heading:

> A mission takes shape in public.

**Verdict: keep it as the visible heading.** It matches the site's period-terminated sentence heading style (`index.astro`: "The story starts before launch.", "One step at a time.", "The programme at a glance") and the editorial review recorded it as consistent (§7). It is **not** search language (no programme name, no topic noun), so it must never be the whole `<title>` tag of an indexable page.

**Recommended `<title>` for the detail route** (if and when the human records a release reference):

| Option                  | Length | Text                                                                           | Use when                                                                                |
| ----------------------- | -----: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| A (recommended primary) |     54 | `Red Horizon: a fictional Mars lander and rover mission`                       | default; answers "what is this" and marks it fictional up front                         |
| B2 (alternative)        |     52 | `Red Horizon: ten partners, one Mars mission for 2031`                         | if the coalition and the window are the point of the page                               |
| A + site suffix         |     75 | `Red Horizon: a fictional Mars lander and rover mission \| Mars AI Simulation` | acceptable, but the suffix will usually be trimmed by the search engine; prefer A alone |

Rules attached: exactly one `<title>` per route; brand name first; no date, no number that a later step changes (no launch date, no landing date, no budget figure in the title); the visible `h1` may stay the house sentence (option: "A mission takes shape in public.") as long as `h1` and `<title>` describe the same event — the gap between them must never promise more than the body says.

`keywords` meta: **do not add one.** It is ignored by search engines, and on this project it would be the easiest place to leak a gated term. No keyword list appears anywhere in this package.

---

## 4. Meta description

**Current** — frontmatter `summary` (250 chars) serves two jobs: the homepage card paragraph and the only description-shaped string the article owns.

> Red Horizon is a fictional, AI-assisted Mars exploration programme. Ten partner groups have announced a shared uncrewed mission to study how water changed an ancient equatorial landscape, with a 2031 launch window and a €2.10 billion lifecycle frame.

**Finding:** at 250 characters it is 95 over the ~155-character snippet budget. Used verbatim as a detail-page description it would truncate around "…with a 2031 launch window and a €2.10 …", i.e. mid-fact. It is honest and factually correct; the problem is length, not truth.

**Recommended description strings** (measured):

| Option           | Length | Text                                                                                                                                       |
| ---------------- | -----: | ------------------------------------------------------------------------------------------------------------------------------------------ |
| D1 (recommended) |    136 | `Fictional, AI-assisted Mars programme: ten national teams, one uncrewed lander and rover, a mineralogy mission and a 2031 launch window.` |
| D2               |    132 | `What Red Horizon is: a fictional, AI-assisted Mars mission with ten partner teams, a mineralogy objective, and a 2031 launch window.`     |
| D4 (shortest)    |    112 | `A fictional, AI-assisted Mars programme: ten partner teams, one uncrewed lander and rover, a 2031 launch window.`                         |

All three keep the fiction disclosure in the opening clause (required by `docs/INSTRUCTIONS.md`) and stay inside the step-001 allowed frame: coalition, mission type, science purpose, 2031 window. None carries the budget figure — the frame is in the body and on the card, and the snippet's job is the identity question.

**How to source the description — two options, owner's call:**

- **A (recommended): a separate field.** Add a `description` (≤155 chars) field to the news schema and use it for the route's `<meta name="description">`, leaving `summary` as the card paragraph. Keeps the card's voice and the search snippet's job separate. Cost: schema change plus editorial re-check; owner `mars-ai-simulator-dev`.
- **B: shorten `summary` to ≤155.** One string serves both surfaces, but this **changes visible homepage card copy** that the editor has already read, and risks dropping the budget frame from the card. Owner `mars-ai-simulator-writer`, with editor sign-off. Not applied here.

Homepage description: keep the existing hard-coded string as the site default; no change needed.

---

## 5. Slug

**Current identity:** the file id `001-project-announcement`. The in-flight release gate keys on the content id (`selectReleasedNews` filters `released.includes(entry.id)`), so a released item would be generated at `/news/001-project-announcement/` by `routes.newsArticle(id)`.

**Recommendation (primary): keep that URL — `/news/001-project-announcement/`.**

Reasons: it is lowercase, hyphenated and human-readable; the numeric prefix is honest series order and matches the in-universe kicker "Announcement 01"; and it keeps **one name for one thing** (content id = release-gate key = public URL), so the gate and the URL cannot drift apart. No schema change, no extra mapping table.

**Alternative (documented, not recommended as a default):** `red-horizon-announcement` → `/news/red-horizon-announcement/`. Cost: a separate public-slug field or map, because the release gate keys on the content id; and it must then be the convention for all eleven steps. Choose it only if the human wants keyword-forward URLs series-wide.

**Rules to fix once, before the second article is released:**

- Decide the series convention now (`/news/<content-id>/` or `/news/<public-slug>/`) so 001 and 002 cannot diverge.
- No dates, no "final", no version numbers, no uppercase, no trailing slash changes after release; changing an indexed URL is a correction under `docs/INSTRUCTIONS.md` ("Preserve earlier public facts") and needs an explicit, dated note.
- The slug must carry no gated term. `001-project-announcement` and `red-horizon-announcement` both pass.
- **File id stays `001-project-announcement`** either way: the brief, source pack, reviews, asset manifests and card text all reference that id, and renaming it is a cross-artifact change that this card does not authorise.

---

## 6. Heading outline

**Current structure (measured):** the body has **0 markdown headings** in 249 words across five paragraphs. On the homepage the card renders the title as `h3` under the section `h2` "The story starts before launch." and the page `h1` "A mission to read Mars carefully." — a valid, unskipped sequence (h1 → h2 → h3).

**Recommendation:**

- **Do not add headings to the body.** A five-paragraph announcement needs none, and adding them would fragment the text and put words into the writer's artifact that no writer approved.
- On the detail route: **exactly one `h1`**, which should be the frontmatter `title` (the house sentence) — the same words the card shows, so the reader who followed a link recognises the page.
- On a `/news/` index: one page-level `h1` (house style), then each article's title as **`h2`** — not `h3`. The `h3` level is correct only on the homepage, where the cards sit under a section `h2`. `SectionHeading.astro` already documents this split ("The news index uses a page-level `h1`; sections use `h2`"), so no new convention is needed.
- Never promote the card kicker (`category` · `status`) or the label (`linkLabel`) to a heading; they are chrome, not structure.
- If the body ever grows past roughly 600 words, add `h2`s in this order — **proposal only, owner `mars-ai-simulator-writer`**: "What the programme is" → "What the first mission will study" → "How decisions are made" → "Schedule and budget frame" → "What is still undecided". The current text already maps onto those five thoughts in that order.

---

## 7. Internal links

**Recommendation set for the released detail route** (four links, in priority order; anchor text → destination):

| # | Anchor text (proposed)        | Destination                    | Why it is honest                                                              |
| - | ----------------------------- | ------------------------------ | ----------------------------------------------------------------------------- |
| 1 | the programme at a glance     | `/#mission`                    | the mission brief panel with the fact table; exists today                     |
| 2 | the public progress log       | `/#timeline`                   | the progress log; exists today                                                |
| 3 | all announcements             | `/news/`                       | the newsroom listing; exists once the in-flight index lands                   |
| 4 | what the mission will measure | `/news/002-payload-selection/` | **only** after 002 is published _and_ released; not before its editorial gate |

**Why none of these are applied in the MDX today:** the body renders nowhere (no route; `releasedNewsSlugs` is empty). Adding links to a body no reader can open would repeat exactly the dishonesty that corrective card `t_fc952c7d` removed from the "First public briefing" label. Also, the body is the writer's artifact; link edits belong to the writer, with the editor's review.

**Two more link recommendations for the site owner** (both blocked on the release reference):

- Make the card title a real link to `/news/001-project-announcement/` on the listing surfaces once the route is generated. Keep `linkLabel` itself as a plain, non-interactive label — the corrective card's default — so the label never implies navigation that does not exist.
- Point the homepage hero call to action ("Read the first announcement") at the detail route instead of `#updates` once it exists. That gives the article its strongest, and currently only, editorial internal link.
- Anchor text must describe the destination and never promise a step-002 decision (e.g. never an anchor that offers "what the rover carries" — that decision belongs to step 002 and the body withholds it).

---

## 8. Image alt text — the one change applied to the page

**Applied** (`website/news/001-project-announcement.mdx`, frontmatter `mediaAlt`):

|        | Length | Value                                                                                                                                                                                         |
| ------ | -----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Before |    138 | `The Red Horizon programme mark: a rust-red Mars disc crossed by low highlighted hills, with a small Sun rising behind its upper-left edge.`                                                  |
| After  |    187 | `The Red Horizon programme mark: a rust-red Mars disc crossed by low highlighted hills, a small Sun rising behind its upper-left edge, and blue Earth with a dimmer Moon at the upper right.` |

**Why this is mine to apply and why it is safe:**

1. It is frontmatter metadata, and the deliverable list for this role includes the image-alt recommendation; it changes no factual claim and no sentence of the article body.
2. The editorial review's own non-blocking suggestion (§7) asked for exactly this, conditioned on the presentation fix: "Adding it would describe the mark more completely, but it should follow the presentation fix … never describe a cue that the crop hides." That condition is now satisfied and measured (`t_fc952c7d`: `object-fit: contain`, visible source rectangle = the full 1254 × 1254 at thirteen viewport widths).
3. I verified the cues **in the file itself** (not just in a rendered page), so the wording is true of the asset whatever the pipeline does: `docs/brand/logo.png` — Sun core `#FCA042` 539 px (bbox x 369–529, y 269–360), rim light `#FCC78B` 265 px, Earth `#7BA7FA` 35 px (bbox x 997–1003, y 319–328), Moon `#94A3B0` 15 px (bbox x 1017–1021, y 338–342). The approved black-field mark carries the same composition with identical counts.
4. Wording follows `docs/brand/BRAND.md` (its canonical alt text: "blue Earth and a smaller Moon point appear at upper right"; its composition rule: "smaller, dimmer nearby point"), so the cue is described in the project's own vocabulary.

**Deliberately not applied:** any background wording. The guidelines' canonical alt text says "on black", which is false for the card's light panel (`#eeebe5`) and depends on the open variant decision (the site imports the RGBA derivative `docs/brand/logo.png`; the approved source hash belongs to `docs/brand/logo-bg-black.png`). This alt text is background-neutral and therefore survives either variant decision.

**Revert string** (one line, if the editor prefers the shorter wording): `The Red Horizon programme mark: a rust-red Mars disc crossed by low highlighted hills, with a small Sun rising behind its upper-left edge.`

**Follow-up note for the site owner:** if the refactor moves alt text into the media registry (`src/lib/media.ts`, keyed by `programme-identity`), carry this wording over so the card and the route cannot describe the mark differently.

---

## 9. Structured data

**Recommendation: add none now** (verified: no `ld+json` and no `schema.org` reference anywhere in `src/` or `news/`).

- **`NewsArticle` / `Article`: not viable.** They require a headline, a publication date, an author, a publisher and a canonical URL. The schema has no date field, there is no byline policy and no recorded first-publication date for 001 (review §4 and §6.3), and no article URL exists. Any such block would have to fabricate values — forbidden on this project.
- **`Organization` for "Red Horizon": do not use.** Marking up a fictional programme as an organisation asserts an entity that does not exist, and it sits directly against the "no implied real endorsement" boundary. schema.org has no fictional-entity type; a `disambiguatingDescription` does not fix that.
- **`WebSite` for the site itself: deferred, low value.** The minute a production origin exists, a minimal `WebSite` block (name + url, no fictional claims) is honest. `src/lib/seo.ts` already withholds a canonical while `SITE_URL` is unset; hold structured data to the same rule rather than inventing a placeholder origin.

**Preconditions checklist before any article-level structured data is considered** (all four, not any one): (1) a recorded first-publication date from the human story owner; (2) a byline/credit policy; (3) a stable released URL from the gate; (4) a machine-readable fiction disclosure that travels with the markup. Owner of the decision: human story owner; implementation: `mars-ai-simulator-dev`.

---

## 10. Site-level technical recommendations (routed, not done here)

| Item                      | Recommendation                                                                                                                                                                                                                    | Owner           | Blocker                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------------------------------------- |
| Canonical                 | keep `canonicalUrl` emitting nothing while `SITE_URL` is unset; set the origin only from the real domain                                                                                                                          | dev             | domain/DNS decision (human)               |
| Open Graph / Twitter card | add only with the route: `og:title` = page title, `og:description` = section 4 string, `og:image` **from the released media registry only** (never `docs/vehicle/`, never a gated asset), `og:image:alt` = the section 8 alt text | dev             | release reference + variant decision      |
| `robots.txt` / sitemap    | defer; when added, the sitemap must list only `published` **and released** URLs — today that is one                                                                                                                               | dev             | origin decision                           |
| Link integrity            | add a test that no rendered page links to a non-generated route (the `releasedNewsSlugs` gate already gives it something to assert)                                                                                               | dev             | none (can be done with the route work)    |
| Keyword stuffing          | no `keywords` meta, no hidden text, no repeated brand strings; the brand appears once in the 249-word body and that is enough                                                                                                     | writer/seo      | none                                      |
| Crawl access              | the article's discoverability ceiling is structural (one page, no article route), not linguistic; the `/news/` index is the fix                                                                                                   | dev (in flight) | human release reference for detail routes |

---

## 11. Confidentiality and honesty checks (evidence)

Gated-token scan of the article (frontmatter + body): **no match** against the step-001 gated-term list recorded in `.agents/work/reviews/001-project-announcement.md` §1 (that list is cited, not repeated here, so this package does not add a copy of any withheld name, coordinate, date, provider or figure to the repository). An earlier run of the scratch scanner reported one hit for `STU`; it was the substring inside "study" — a false positive of a substring scan, not a mention of the institution. The scan was re-run with word-boundary awareness after the edit: still no match.

Every string recommended in this package was scanned against the same list, including the proposed `<title>`, descriptions, anchors and alt text: all clear. `Margaritifer Terra` (the region, permitted at step 001 and already public in the body) is deliberately **not** used in any metadata string — it carries no search demand and would only lengthen the snippet.

One deliberate residual in this file: the 002 content id appears in the internal-link table (`/news/002-payload-selection/`, section 7). That is the pipeline slug already carried by `website/news/002-payload-selection.mdx` and `.agents/work/briefs/002-payload-selection.md`; it is a route id, not a withheld fact, and the recommendation is explicitly conditional on 002 being published **and** released.

Honesty checks:

- **One intent, one promise** per surface — no string promises a date, an instrument, a vehicle, a site name or a briefing page.
- **No fabricated entity or fact**: no structured data, no dates, no bylines, no partners beyond the ten named in canon.
- **Fiction disclosure** appears in the body ("fictional, AI-assisted"), in the homepage description, in the card summary and in every proposed description; it is never a footnote.
- **No later-step disclosure** in any metadata surface: launch provider (step 004), exact dates (005/006), landing region detail (007) and any step ≥002 fact are absent.
- The article's `mediaAlt` change describes only what is visible in the published asset, verified by pixel measurement.

---

## 12. Brand-voice and continuity conflicts (reported, not settled)

| # | Conflict                                                                                                             | Recommended resolution                                                                                                                                   | Owner                                                    |
| - | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 1 | House heading style is period-terminated sentences; search `<title>`/descriptions work better as plain noun phrases  | keep the visible heading in house style and let the `<title>` differ, both describing the same event — no style change is asked of the writer            | writer/editor (acknowledge), dev (implement)             |
| 2 | `linkLabel: "First public briefing"` (21) reads like a link to a briefing page that does not exist                   | change to a plain label: `Announcement summary` (20) or `Programme announcement` (22); it is the same honesty problem the corrective card fixed visually | editor (holds it as an open copy call) — **not applied** |
| 3 | `status: "Now opening"` renders as "Announcement 01 · Now opening", which is not plain search language               | consider `Programme announced` (19); meaning-preserving, no new fact                                                                                     | writer/editor — **not applied**                          |
| 4 | `summary` is doing two jobs (card paragraph, and the only description surface) and is 95 chars over a snippet budget | separate `description` field (section 4, option A)                                                                                                       | dev, with writer sign-off                                |
| 5 | Continuity                                                                                                           | **no conflict found.** Every string this package recommends uses only step-001 allowed facts, and the body's claims are unchanged by this pass           | continuity card `t_0b3434e8`                             |

---

## 13. Applied changes (complete record)

One file, one value. This is the exact line this pass changed:

```diff
--- a/website/news/001-project-announcement.mdx
+++ b/website/news/001-project-announcement.mdx
@@ -10 +10 @@
-mediaAlt: "The Red Horizon programme mark: a rust-red Mars disc crossed by low highlighted hills, with a small Sun rising behind its upper-left edge."
+mediaAlt: "The Red Horizon programme mark: a rust-red Mars disc crossed by low highlighted hills, a small Sun rising behind its upper-left edge, and blue Earth with a dimmer Moon at the upper right."
```

Nothing else in the page changed by this pass: no body text, no `title`, no `summary`, no `linkLabel`, no `status`, no `category`, no `order`, no `media`, no `mediaLabel`, no schema, no component, no script, no asset, no canon file, no timeline file.

**Concurrent change on the same file (not mine, recorded so the record is exact):** while this pass ran, the in-flight site refactor changed the neighbouring `media:` line from `/assets/logo.png` to the media key `programme-identity` (`src/lib/media.ts`). `git diff` therefore shows two changed lines in this file; the `media:` line belongs to that other worker's card, not to this package, and it is left untouched here.

**Why the rest were withheld:** `title` and `summary` are the writer's visible copy and one of them is an open human decision (public title/credit), and the editor's re-verification of the published surface is still outstanding; every other item needs a route, a release reference, an origin, or a schema change that is not mine to make. Recommendation first, implementation by the owner.

---

## 14. Validation completed / outstanding

**Completed** (commands run from the repository root; the scratch checkers live under `/tmp` and are deliberately outside the repository, so nothing of theirs is added to the tree):

- Frontmatter parse and key inventory; per-field character counts for `title`, `summary`, `linkLabel`, `mediaAlt`, `mediaLabel` (`/tmp/seo-checks-001.py`).
- Body measurement: 249 words, 1,642 characters, 0 headings, 0 links, brand string once, disclosure once.
- Gated-token scan of the article (frontmatter + body) and of this package, substring and word-boundary: no match (section 11).
- Surface inventory walked over `website/src/**`, `website/scripts/**`, `website/news/**`, `astro.config.mjs`, `package.json`, `wrangler.jsonc`, `public/assets/`: one page, no canonical, no OG, no LD+JSON, no robots.txt, no sitemap, no `site:`, `releasedNewsSlugs = []`.
- Exact lengths of all seventeen candidate strings, so no recommendation in this package is longer than its budget by accident (`/tmp/seo-lengths-001.py`).
- Pixel verification of the identity mark (`/tmp/seo-probe-001.py`, Pillow): cue colours and bounding boxes in `docs/brand/logo.png` and `docs/brand/logo-bg-black.png`, used as the evidence for the applied alt text.
- Post-edit frontmatter integrity re-check (`/tmp/seo-verify-001.py`): block delimiters intact, every required schema key present, `order: 1`, `publication: published`, the changed value a well-formed quoted string, body count unchanged at 249 words / 0 headings / 0 links. The check parses the frontmatter key by key rather than through a YAML library; the site's own `astro check`/build remains the authoritative parse and is the site owner's step.

**Outstanding — not mine to close:**

- No build, no preview and no deployment was run by this pass. The applied change is a frontmatter string; a build re-run belongs to `mars-ai-simulator-dev`.
- Editorial re-verification (`t_3302ef7e`, editor) covers the published surface and now also covers the alt-text change applied here; it may revert it with the section 8 string.
- Human decisions, unchanged by this pass (all recorded as open questions in `.agents/work/reviews/001-project-announcement.md` §6 and cited rather than restated here): the identity-mark variant and any new public placement of the mark; the public title and author credit; any budget figure beyond the announced frame; whether the supported surface-life figure belongs in the announced schedule frame; the Slovak partner institution's public wording; the `linkLabel` copy; and whether a detail route is released for 001 at all (needs a recorded release reference).
- Continuity verdict: card `t_0b3434e8` (`mars-ai-simulator-continuity`), which reads this package.

---

## 15. Handoff

- **Result:** one applied metadata change (`mediaAlt`), plus a decision-ready metadata contract for article 001: intent, title options, description options, slug decision, heading outline, four-link internal set, an alt-text change, and a documented "no structured data now" answer with its preconditions.
- **Source / timeline step:** step 001 (retro pass); nothing from a later step appears in any string.
- **Canon impact:** none. No new public fact, no canon edit, no timeline exposure; the article body is unchanged.
- **Files:** `website/news/001-project-announcement.mdx` (one frontmatter value); this package at `.agents/work/seo/001-project-announcement.md`; and a procedure-only `## Verified practice` section appended to `.agents/skills/seo-content/SKILL.md` (lessons from this pass — no authority or boundary changed).
- **Validation completed:** sections 11 and 14. **Review required:** editorial (`t_3302ef7e`) and continuity (`t_0b3434e8`); human release reference before any detail route exists.
- **Next action / owner:** editor re-verifies the published surface and accepts or reverts the alt string; `mars-ai-simulator-dev` implements the route metadata (section 3/4/6/7/10) once a release reference is recorded and the news route lands; the story coordinator fixes the series-wide URL-slug convention (section 5) before 002 is released.
- **Release recommendation:** none. This package is not a release, and no public surface should change on its strength alone.

---

---

> **Revision section:** the planner's placeholder for the revised draft is replaced by a pointer —
> the new `## Revision: 2026-09-17 (card t_3bd87425)` section is appended **at the end of this file**,
> so the retro record keeps its order (sections 1–16 above, unchanged).

---

## 16. Sources cited in this package

- Locked canon and release controls: `docs/SCENARIO.md` (mission identity; "Continuity and release controls").
- Step-001 allowed angle and spoilers: `docs/timeline/001-project-announcement.md`.
- Published article and its frontmatter: `website/news/001-project-announcement.mdx`.
- Prior gate and open questions: `.agents/work/reviews/001-project-announcement.md`; corrective card `t_fc952c7d` (comments and completion metadata).
- Identity mark composition, colours and canonical alt text: `docs/brand/BRAND.md`; pixel counts in `docs/brand/logo.png` and `docs/brand/logo-bg-black.png` measured by this pass.
- Site contract: `website/src/content.config.ts`, `website/src/lib/{site,navigation,releases,publication,media,assets,seo}.ts`, `website/src/pages/index.astro`, `website/scripts/assets.mjs`, `website/astro.config.mjs`, `website/README.md`.
- Rules: `docs/INSTRUCTIONS.md` (canon and information safety; handoff format), `AGENTS.md`, `docs/GENERAL.md`, `docs/README.md`.

---

## Revision: 2026-09-17 (card t_3bd87425) — SEO re-pass on the revised article

| Field               | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Card                | `t_3bd87425` (`mars-ai-simulator-seo`), child of `t_855de80a`; parent `t_30760665` (writer, revision draft)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Timeline step       | `site-foundation` / step 001 (project announcement)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Inputs read         | the revised draft `website/news/001-project-announcement.mdx` (SHA-256 `f5d00e03a38960b7ab95a79d436ed6d16c8418856eb15033b6f0d902ebeb1655`, 76 lines); `.agents/work/briefs/001-project-announcement.md` (incl. the "Human release approval reference" and "Forbidden token set"); `.agents/work/reviews/001-project-announcement.md` (§10 retro gate, incl. §10.7 routed observations); the planner's superseding comment on this card (2026-09-17) and on `t_6498855e`; `docs/area/AREA.md` §Control record + §Map package; `docs/SCENARIO.md` (release controls); the current site tree `website/src/**` (pages, layout, features/news, lib) and `website/dist/` |
| Artifact            | this file (appended; retro sections 1–16 are untouched, and the planner's placeholder at the old line 299 is replaced by a pointer to this section)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Applied to the page | two frontmatter values: `title` and `summary` (§R12). Nothing else in the article changed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Status              | recommendations issued; **no release, no deploy, no canon change, no commit**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

**Supersession map (what this revision overrides in the retro record, and what it does not).** The retro
record was written against a 249-word, five-paragraph article with one identity-mark image and no
article route. Three of its conclusions no longer describe the file:

| Retro section                                                                                                                           | Status after this revision                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| §3 Title ("keep it … it is **not** search language, so it must never be the whole `<title>`")                                           | **superseded in part** — the visible sentence is kept as the frame, but the searched token is now added (§R4). The retro rule stands: no date, no number a later step changes, brand in the document title. |
| §4 Meta description (recommend a separate `description` field; do not shorten `summary`)                                                | **superseded in part** — `summary` is now ≤155 and serves both jobs (§R5); the separate field is deferred, not rejected, with a trigger.                                                                    |
| §8 Alt text (the programme-mark wording, `mediaAlt` as a single string)                                                                 | **superseded** — the article now carries `media: asteria-plates` with three per-plate entries; the identity-mark strings survive only as history (§R9).                                                     |
| §1 intent, §5 slug, §6 heading policy, §7 link set, §9 no structured data, §10 site-level items, §11 checks, §12 conflicts, §15 handoff | **still current**, with the updates recorded in §R3–§R10, §R11–§R12 below.                                                                                                                                  |

### R1. State read, and the measurement of the revised article

Read at **2026-09-17 01:53–01:56 CEST**. The article's mtime (01:49:37) predates every command in this
pass, so the file did not move under the pass; the site files it depends on were re-read immediately
before use (`src/pages/news/[slug].astro` 01:39, `src/features/news/plate*.ts` 01:49, `src/lib/site.ts` 01:38).

| Measurement       | Retro record                                   | Revised article (this pass)                                                                                                                                                                                             |
| ----------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Body              | 249 words, 5 paragraphs                        | **10 paragraphs, 553 word tokens** measured by the pass's tokeniser (the writer's counter reports 541; the difference is the counting rule, not the text — both are recorded so the two records do not look like drift) |
| Body headings     | 0                                              | 0                                                                                                                                                                                                                       |
| Body links        | 0                                              | **4**: 1 internal (`/#mission`) + 3 external citations (USGS planetary nomenclature, USGS geologic map, NASA clay/hydrated-mineral map) — all three re-checked this pass, HTTP 200                                      |
| Frontmatter keys  | 11                                             | 12 (`media`, `mediaAlt`, `mediaLabel` and the new `mediaCaption`, which is now a per-plate list)                                                                                                                        |
| `title`           | 32 chars                                       | 37 chars (**applied here**)                                                                                                                                                                                             |
| `summary`         | 250 (retro's count of the pre-revision string) | 255 (writer's revision) → **147 (applied here)**                                                                                                                                                                        |
| `media`           | `/assets/logo.png` → key `programme-identity`  | key `asteria-plates` (three plates)                                                                                                                                                                                     |
| Publication state | `published`, rendered nowhere                  | unchanged: `publication: published`, and still **rendered nowhere as a body** — `src/lib/releases.ts` ships an empty release list (§R2)                                                                                 |

### R2. Surface inventory, re-measured (what is indexable today)

| Surface                                                             | State (measured this pass)                                                                                                                                                                                                                                                                                           | Consequence for this revision                                                                                                                                   |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Built routes                                                        | **2**: `/` (`dist/index.html`) and `/news/` (`dist/news/index.html`); `npm run build` → exit 0, postbuild `check:dist` exit 0                                                                                                                                                                                        | the article's body still has **no URL**; its only public surface is the homepage card                                                                           |
| Article detail route                                                | `src/pages/news/[slug].astro` exists and is gated by `releasedNewsSlugs = []`; no `/news/001-project-announcement/` is generated                                                                                                                                                                                     | every recommendation here is for a route that does not exist yet; nothing is crawlable from this revision                                                       |
| Detail-route metadata contract                                      | `<BaseLayout title={`${item.data.title}                                                                                                                                                                                                                                                                              | ${site.name}`} description={item.data.summary}>` (`src/pages/news/[slug].astro:20`)                                                                             | the frontmatter `title` **is** the document title (plus the brand) and `summary` **is** the meta description — which is why §R4/§R5 are metadata fixes, not copy preferences |
| `/news/` index metadata                                             | distinct from the homepage since ``t_2bf95f76`` applied a title (50) and description (102) to ``src/pages/news/index.astro``; the earlier `News                                                                                                                                                                      | Red Horizon``convention on card``t_1828a6d4` was superseded — settled in §R11.1                                                                                 | two routes no longer share one identity |
| Canonical / Open Graph / Twitter / `ld+json` / robots.txt / sitemap | unchanged: none anywhere; no `SITE_URL` in `astro.config.mjs`                                                                                                                                                                                                                                                        | correct state while no origin is authorised (§R10)                                                                                                              |
| Media contract                                                      | `src/lib/media.ts` now holds two keys — `programme-identity` (1 plate, 1 alt, no caption) and `asteria-plates` (3 plates, 3 alts, 3 captions, label required); `src/features/news/media.ts` resolves `asteria-plates` from `docs/area/`, and its provenance sentence is printed by the component, not by frontmatter | the article's three alt entries are the only alt text this role can complete; the captions and the safety note are component-guaranteed (dev card `t_3922071d`) |
| Homepage card image for 001                                         | now **AF-01** (was the programme mark) with the label `AF-01 · Mars locator` and the frontmatter's first alt entry                                                                                                                                                                                                   | a visible surface change owned by `t_3922071d`, flagged for sign-off on `t_8274703e`; recorded here because it changes what the card's alt text must describe   |
| Guard                                                               | `gatedTextMarkers` now holds four markers; the released field name was retired with negative evidence (`t_3922071d`)                                                                                                                                                                                                 | the released name may appear in the article and in built text; the other four markers and both withheld directories still fail a build                          |

### R3. Reader intent (one, updated — not broadened)

**Primary intent — brand informational.** A reader who has met the name _Red Horizon_ asks: **"What is
Red Horizon — who is behind it, and is it real?"** The revised article answers more of that question than
the retro text did, all of it released: a fictional, AI-assisted Mars programme; ten national programme
teams; one shared uncrewed lander-and-rover mission; mineralogy and ancient aqueous conditions as the
purpose; a named **fictional** operational region with scenario coordinates; a 2031 launch window, a
€2.10 billion lifecycle frame and a surface mission designed for two Mars years (1,374 Earth days);
technical selections still ahead.

**One-sentence promise of the page:** _"This states that a fictional Mars programme called Red Horizon
has been announced, who its partner teams are, what its first mission will study and where it aims,
how long it is designed to operate, and what is still undecided."_

**Secondary intent — creative process.** Readers searching the AI/agent angle. Unchanged; the mandatory
fiction disclosure serves it honestly.

**Non-targets (updated for the released facts).**

- **The fictional field name is not a query theme.** Nothing searches for a place that does not exist;
  the name belongs in the body, where it is qualified, not in a snippet that would read as a real
  feature. Recorded as a decision, not an omission (§R5).
- **Coordinate queries are not targeted in metadata.** Coordinates in a snippet invite a real-place
  reading and would be the least stable string on the page; the body states them with their scenario
  framing.
- **No real-mission traffic**: no real rover, no agency, no "landing site" framing. The region
  (Margaritifer Terra) is real and the article cites it properly, but nothing may imply the mission
  has a chosen landing site — the body itself says that work stays out of the public record.
- **No "life on Mars" targeting** (the article states what the mission does not claim).
- **Still excluded from every metadata surface**: launch provider, vehicle designation, the rover's
  payload and instrument choices, exact dates, and anything from a step after 001 (brief, "What stays gated").

### R4. Title — applied

|                                                                                       | Length | Route document title (`${title} \| Red Horizon`)                                               |
| ------------------------------------------------------------------------------------- | -----: | ---------------------------------------------------------------------------------------------- |
| **Applied** — `A Mars mission takes shape in public.`                                 |     37 | `A Mars mission takes shape in public. \| Red Horizon` (51)                                    |
| Revert string (the writer's revision value)                                           |     32 | `A mission takes shape in public. \| Red Horizon` (46)                                         |
| Alternative recorded, not applied — `A fictional Mars mission takes shape in public.` |     47 | 61 — pick this instead if the editor wants the fiction marker inside the document title itself |

**Why it is mine and why it is needed.** The card grants the title review for this revision, the article's
frontmatter `title` is literally the document title of the detail route, and the sentence carried **no
topic noun at all** — a search result or a social card presented "A mission takes shape in public." with
nothing that says Mars, mission, or programme. Adding one word keeps the writer's sentence frame (the
site's period-terminated house style, per the editorial review §7), is meaning-neutral, adds the one
token the page lacked, and matches the site's own published wording for the same programme
(`site.defaultTitle`: "Red Horizon | A Mars mission in progress"). It is also the convention the 002 pass
set for the series ("keep the writer's frame, add the searched token pair", `.agents/work/seo/002-payload-selection.md` §2).

**Recorded, not applied:** the retro §3/§4 option of a _separate_ route-title field (`seoTitle`) so the
document title can differ from the visible heading. Both live article titles now read well inside the
existing `${title} | ${site.name}` template (001 = 51, 002 = 49), so the field is not needed yet; the
trigger to add it is a title that must be search-led and display-led at once (§R11.4).

**Effect on visible copy:** the homepage card `h3`, the newsroom listing and (when released) the article
`h1` all render the frontmatter title, so this one word is visible on those surfaces. Verified in the
built page: `dist/index.html` contains `<h3 …>A Mars mission takes shape in public.</h3>`, and the
previous string occurs 0 times. The human's open question about the _public title_ (review §10.6.2) is
unchanged in kind — the applied string is meaning-neutral, recorded with its revert string, and one line
to undo if the human settles a different title.

### R5. Meta description — applied (the one measurable defect in the revision)

**Finding.** `src/pages/news/[slug].astro` passes `description={item.data.summary}`, so the writer's
revision `summary` **became the meta description**, and at **255 characters** it truncates in a snippet
around "…with a 2031 launch window and a surface mission designed for two Mars years", i.e. after the
point where the sentence stops making sense. That is the exact failure the retro §4 predicted and left to
the owner; the writer's handoff handed the call to this stage.

|                                                           |  Length | Value                                                                                                                                                                                                                                                             |
| --------------------------------------------------------- | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Applied**                                               | **147** | `Red Horizon is a fictional, AI-assisted Mars programme. Ten national teams have announced one uncrewed lander and rover, with a 2031 launch window.`                                                                                                             |
| Revert string (writer's revision value, verbatim)         |     255 | `Red Horizon is a fictional, AI-assisted Mars exploration programme. Ten partner groups have announced one uncrewed mission to study ancient aqueous terrain in Margaritifer Terra, with a 2031 launch window and a surface mission designed for two Mars years.` |
| Rejected, over budget                                     |     158 | `…one uncrewed lander and rover to study an ancient aqueous landscape.` (keeps the science clause, loses the window — 3 chars over)                                                                                                                               |
| Rejected, over budget                                     |     156 | the same objective clause with a leading "A fictional, AI-assisted Mars programme:"                                                                                                                                                                               |
| Recorded alternative if the editor prefers the newer fact |     153 | `Red Horizon is a fictional, AI-assisted Mars programme. Ten national teams have announced one uncrewed lander and rover, designed to work two Mars years.`                                                                                                       |

**Why these facts and not others.** The snippet's job is the identity question: fictional + AI-assisted
(disclosure first, never a footnote), who (ten national teams — the canon and body wording, which also
retires the "Ten partner groups" discrepancy the editorial gate routed in §10.7.3), what (one uncrewed
lander and rover), when (2031 window). Dropped deliberately: the region and the science clause (body
detail, and the clause is what pushed every candidate over budget), the released lifetime (stated in the
body with its explanation — two Mars years, 1,374 Earth days — and available as the recorded alternative
above), the fictional field name, the coordinates, and the budget frame.

**Series convention recorded:** a `summary` that doubles as a meta description stays ≤155 characters
(001 = 147, 002 = 152). The retro §4 option A (a separate `description` field) is therefore **deferred,
not rejected**: the trigger for adding it is a page that needs a long card paragraph _and_ a short
snippet at the same time. No card is filed for it now, because nothing today needs one.

### R6. Slug — re-affirmed, no change

`/news/001-project-announcement/` stays the intended URL when a human release reference is recorded. The
release gate keys on the content id (`entry.id`), the collection id is what the brief, source pack,
review, asset manifest and card text all cite, and the numeric prefix matches the in-universe kicker
("Announcement 01"). The series convention argument from retro §5 is now stronger, not weaker: 002's
content id is also the id its records cite, so one name per thing holds for both articles. No slug field
exists in `src/content.config.ts`; nothing in this pass touches the file name.

### R7. Heading outline — re-measured, recommendation only (writer's artifact)

**Measured:** 10 paragraphs, 553 word tokens, **0 markdown headings**, three figures inserted after the
header. The retro §6 trigger ("if the body ever grows past roughly 600 words") was set for a
five-paragraph announcement; the honest reading now is that the _paragraph count_ has met the case the
trigger was written for (ten undifferentiated blocks around three images), even though the token count
sits just under it.

**Decision: no headings applied** — the body is the writer's artifact and the writer re-decided this at
541 words (`t_30760665`, "still no body headings"). **Proposal if the editorial gate wants scannability**,
in this order, with one hard constraint:

1. `What the mission will study` (paragraphs 1–4)
2. `The region and the fictional target` (paragraphs 5–6)
3. `How the programme is run` (paragraph 7)
4. `Schedule, cost and mission lifetime` (paragraph 8)
5. paragraphs 9–10 stay as the closing, unheaded

**Constraint:** no heading may imply a chosen landing site or a settled technical decision. Wording like
"Where the mission lands" would promise exactly what the body withholds (landing-site design work), so it
is not on the list. Any heading set adopted must also be honest about the fictional qualification, which
is why 2 names the target as fictional rather than as a place.

### R8. Internal links — recommendation set (nothing applied to the body)

The body now carries one internal link (`fictional, AI-assisted Mars exploration programme` → `/#mission`),
which is the retro §7 row 1 and still resolves (`#mission` exists in `src/features/mission/MissionPanel.astro`).

| # | Anchor text (proposed)        | Destination                    | State today                   | Why it is honest                                                                                          |
| - | ----------------------------- | ------------------------------ | ----------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1 | the programme at a glance     | `/#mission`                    | applied in the body, resolves | the mission panel with the fact table; exists                                                             |
| 2 | the public progress log       | `/#timeline`                   | **not applied** — proposed    | `src/features/progress/ProgressLog.astro` carries the anchor; it is where "what happens next" is recorded |
| 3 | all announcements             | `/news/`                       | **not applied** — proposed    | the newsroom index is a built route today (`dist/news/index.html`)                                        |
| 4 | what the mission will measure | `/news/002-payload-selection/` | **not applied, conditional**  | only after 002 is published **and** released; the release list is still empty                             |

**Why nothing is applied here:** the card limits this pass to frontmatter metadata, and the body is the
writer's artifact. (The 002 pass did apply body links; that divergence is recorded as §R15 row 10 rather
than copied silently.) If the editor wants rows 2–3, they are a two-line writer edit.

**Site-side links (recommendations, not applied):**

- **Satisfied already:** `NewsCard.astro` renders the card label as a real `<a>` to the detail route
  **only** when `isReleasedNewsSlug()` is true, and as a plain `<span>` otherwise — the built homepage
  confirms the span ("First public briefing" with no `href`). No false affordance.
- **Open:** the hero call to action still reads "Read the first announcement" and points at `#updates`
  (`src/features/mission/Hero.astro:15`). It should point at `/news/001-project-announcement/` once that
  route is released — it is the article's strongest editorial link, and the anchor stays honest either
  way because the homepage `#updates` section genuinely contains the announcement card.
- **New card filed this pass:** newsroom index heading level (§R11.3).

### R9. Image alt text, captions and plate verification

**The three frontmatter alts were reviewed, not changed.** They are this role's surface, and they are
already accurate, in plate order, and each ends with the required provenance sentence.

| Plate | Alt (frontmatter)                                                                                         | Length | Verified against                                                                                                                                                                                    |
| ----- | --------------------------------------------------------------------------------------------------------- | -----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AF-01 | whole-planet view, arrow marking the fictional target region, generated visualization not orbital imagery |    140 | `docs/area/AREA.md` §Map package (canonical plate description: whole-planet Mars view with an arrow targeting the fictional field); asset `docs/area/asteria-field-01-mars-locator.png` 1536 × 1024 |
| AF-02 | regional map of the fictional planning envelope, working terrain units, centre marker                     |    150 | same record: regional view of the scenario envelope with working terrain units and centre marker; asset 1536 × 1024                                                                                 |
| AF-03 | local operations frame, scenario planning overlays                                                        |    142 | same record: local operations view; asset 1448 × 1086                                                                                                                                               |

**AF-03 wording — deliberate, and recorded as a residual.** The asset visibly contains landing- and
science-planning overlays; the brief's gated list keeps that inventory out of the announcement text, so
the alt uses the neutral "scenario planning overlays" and the plate's own component-guaranteed caption
note carries the qualification ("fictional scenario planning, not a confirmed operational plan"). The
wording was left as the writer wrote it. **A longer alt** (naming the overlays) was considered and
rejected: it would publish landing-preparation inventory in a metadata surface, which the brief forbids
even though the pixels are public. The residual is the resulting asymmetry between what a sighted reader
sees and what a screen reader hears; it is bounded by the caption note, and it is routed to the
continuity/editorial gates rather than settled here.

**Verification limits, stated rather than implied:** the plate **content** claims above are checked
against the plates' own canonical record (`docs/area/AREA.md` §Map package) and the assets' measured
dimensions and formats. A map plate has no colour cue to measure, so no pixel-level proof that the arrow,
the centre marker or the overlays are drawn as described was possible for this pass, and none is claimed.
What _is_ verified from the pipeline: the same alt string is what the component prints
(`plateFigures()` → `MediaPlates.astro` → `<Image alt=…>`), and the homepage card prints entry 0 for its
single lead image.

**Captions and label:** the visible caption lines and `mediaLabel` are the writer's copy; the provenance
sentence and the AF-03 safety note are appended by the registry, so a caption cannot ship without them
(`t_3922071d`). No caption adds a fact the body does not publish.

### R10. Structured data — still none, and the re-check

Re-verified (no `ld+json` / `schema.org` anywhere in `src/`, `news/` or `dist/`): **recommendation
unchanged**. The four preconditions from retro §9 are all still unmet — no recorded first-publication
date for the article, no byline/credit policy, no stable released URL (the release list is empty), and no
machine-readable fiction disclosure that travels with markup. `Organization` markup for the programme
remains forbidden (it would assert a real entity). `WebSite` remains deferred until a production origin
exists; until then no canonical is emitted, which is the correct state, not a gap.

### R11. Conventions this pass settles (the ones routed to this role)

1. **Newsroom index `<title>` — conflict resolved.** Two SEO packages produced two different strings
   within the hour: `.agents/work/seo/002-payload-selection.md` §10 settled `News | Red Horizon` and card
   `t_1828a6d4` was filed to implement it, while `.agents/work/seo/about-method.md` §11 found the same
   duplicate-title defect and applied `Red Horizon newsroom | Every published step so far` to
   `src/pages/news/index.astro` (built: `dist/news/index.html`). **Settled: keep the applied string.**
   Rationale: it leads with the brand, names the page ("newsroom" is the page's own eyebrow), and its
   second half describes what the page is; `News | Red Horizon` (18) is brand-last and content-free, and
   on a site whose only index holds one item it tells a reader nothing. Both are honest and neither
   carries a gated term. Recorded fallback: if the editor aligns vocabulary to the nav label, revert to
   `News | Red Horizon`; the applied string's own revert is the site default (delete both props). The
   consequence for `t_1828a6d4` is in the comment this pass left on that card: item 1 is already
   satisfied on disk, so verify and keep rather than flip — and if that card moves the string into
   `site.ts`, it must move the applied string.
2. **Description budget of 155 characters** for every `summary` that doubles as a meta description
   (001 = 147, 002 = 152). Retro §4 option A deferred with a trigger (§R5).
3. **Card titles on the newsroom index are `h2`, not `h3`.** The index has a page-level `h1`
   (`NewsList.astro` passes `level={1}`), and the built page skips straight to `h3`
   (`dist/news/index.html`: `<h1>The story starts before launch.</h1>` then `<h3>…</h3>`). The `h3` is
   correct only on the homepage, where the cards sit under the section `h2`. Convention restated from
   retro §6; the implementation is a dev card filed by this pass (assignee `mars-ai-simulator-dev`,
   chained behind `t_1828a6d4` so two `website/` cards never become ready at once). Adjacent observation,
   not settled here: the index's `h1` reuses the homepage section's sentence — defensible for one
   collection, an editor/writer call.
4. **Document-title template.** `${frontmatter.title} | ${site.name}` may stay while every article title
   reads well inside it (001 = 51, 002 = 49). If a future article needs a search-led document title that
   differs from its display heading, add an optional `seoTitle` to the news schema rather than overloading
   `title`.

### R12. Applied changes (complete record, with revert strings)

One file, two frontmatter values. Nothing else in the page changed by this pass.

```diff
--- a/website/news/001-project-announcement.mdx
+++ b/website/news/001-project-announcement.mdx
@@ -2,7 +2,7 @@
-title: A mission takes shape in public.
-summary: Red Horizon is a fictional, AI-assisted Mars exploration programme. Ten partner groups have announced one uncrewed mission to study ancient aqueous terrain in Margaritifer Terra, with a 2031 launch window and a surface mission designed for two Mars years.
+title: A Mars mission takes shape in public.
+summary: Red Horizon is a fictional, AI-assisted Mars programme. Ten national teams have announced one uncrewed lander and rover, with a 2031 launch window.
```

| # | Value                                   | Where                                                                                 | Was (revert string)                    | Why it is mine                                                             |
| - | --------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------- | -------------------------------------------------------------------------- |
| 1 | `A Mars mission takes shape in public.` | frontmatter `title` → card `h3`, newsroom listing, article `h1`, document title       | `A mission takes shape in public.`     | document-title wording; adds the missing topic noun; meaning-neutral (§R4) |
| 2 | 147-character `summary`                 | frontmatter `summary` → homepage card paragraph, meta description, article standfirst | the 255-character string quoted in §R5 | meta description; the 255-character string truncates mid-fact (§R5)        |

**Not changed, deliberately:** `category`, `status`, `publication`, `linkLabel`, `order`, `accent`, `media`
and the media text, the body (including its links), every heading, every schema/component/script file, the
release gate, every canon and timeline file, and all three `mediaAlt` entries (§R9).

**Why the rest were withheld:** the body, the captions and the editorial chrome are the writer's and the
editor's copy; the routes, the schema fields and the guards are the site engineer's; the release
reference and the canon decisions are the human's. Recommendation first, implementation by the owner.

### R13. Validation completed / outstanding

**Completed** (commands run from the repository root or `website/`, 2026-09-17 01:53–01:57 CEST; scratch
checkers live under `/tmp/seo-rev-001/`, outside the repository):

| Check                                  | Result (real output)                                                                                                                                                                                                                         |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontmatter parse + per-field lengths  | 15 keys; `title` 37, `summary` 147, `linkLabel` 21, `mediaLabel` 44, three `mediaAlt` 140/150/142, three `mediaCaption` 69/65/67                                                                                                             |
| Body measurement                       | 10 paragraphs, 553 tokens, 0 headings, 4 links (1 internal + 3 external)                                                                                                                                                                     |
| Gated-marker scan (frontmatter + body) | **0 hits**, word-boundary, against the brief's forbidden token set and the four live guard markers, both read from their own files at run time; the only substring-class matches are inside the already-public word "uncrewed" (§R14)        |
| Candidate strings                      | every title/description/alt string considered measured and scanned by script before use; the applied pair is 37 and 147, both inside budget, both clean                                                                                      |
| External citations                     | the article's three source URLs re-checked: HTTP 200, 200, 200                                                                                                                                                                               |
| Build                                  | `npm run build` (website) → **exit 0**; `astro build Complete`; postbuild `check-dist` → "no reference into a withheld directory, and no withheld file or marker in dist/"; routes `/index.html`, `/news/index.html`                         |
| Applied metadata in the build          | `dist/index.html` contains the new summary once and `<h3>A Mars mission takes shape in public.</h3>`; the previous title and the previous summary each occur 0 times; `Asteria` occurs 0 times in either built page (the body is not public) |
| Route metadata (read-only)             | `dist/index.html` and `dist/news/index.html` carry distinct titles and descriptions; no canonical, no `og:*`, no `twitter:*`, no `ld+json`, no `robots.txt`, no sitemap                                                                      |
| Heading order (read-only)              | homepage `h1 → h2 → h3` correct; newsroom index `h1 → h3` (defect filed, §R11.3)                                                                                                                                                             |
| Tests / typecheck / lint               | `npm run test` → 2 files, **37/37 pass**; `npm run typecheck` → **0 errors**; lint not re-run by this pass (the tree's lint was green on `t_3922071d` and nothing this pass touched is `.ts`/`.astro`)                                       |

**Outstanding — not this card's to close:**

- **No release, no deploy, no commit.** `releasedNewsSlugs` is still empty, so no article URL exists; a
  build is not a release, and an editorial approval is not a release.
- The revision's continuity pass (`t_23c10313`, after the assets card) and its editorial gate
  (`t_ff937d33`) have not seen this pass; the visual-assets card `t_6498855e` unblocks next.
- Visuals card `t_6498855e` must record the three-plate reuse decision in
  `.agents/work/assets/001-project-announcement/assets.md`.
- Open human decisions are unchanged and cited rather than restated: the identity-mark variant and any
  new public placement, the public title and author credit (review §10.6.2), whether a detail route is
  released for 001 at all, and the field name's release staying scoped to article 001.
- `t_8274703e` (planner) still holds the rulings on the homepage card image (now AF-01), the
  unreferenced plate sources in `dist/`, and the BUILD card's plate-provenance evidence scope.

### R14. Confidentiality and honesty check (evidence)

- **Scan:** the article's frontmatter and body, every candidate string this pass measured, and this
  section's own applied strings were scanned against two lists read from their files at run time — the
  brief's "Forbidden token set" and the live `gatedTextMarkers` in `website/scripts/guards.mjs` (four
  entries since the field name was retired). **Result: 0 hits, word-boundary.** The only substring-class
  matches are inside the already-public word "uncrewed"; reported as a class and a count, never as a term
  inventory, and no withheld token is copied into this file.
- **What is newly allowed, and how narrowly:** the field name, its planning centre, its planning
  envelope, the local operations frame, the three plates and the designed surface lifetime are released
  **for article 001 only** (brief "Human release approval reference", 2026-09-17; `docs/SCENARIO.md`
  release controls; `docs/area/AREA.md` §Control record: "Partially released (article 001 only)"). No
  later-step fact is present in any string this pass applied; the released facts appear only where the
  body already publishes them, and the field name and coordinates are deliberately absent from the
  metadata strings.
- **Still withheld, cited by location and not restated:** the landing-design material enumerated in the
  brief's gated list; the launch provider, the vehicle designation and the rover's payload and instrument
  choices; every exact date; and everything from steps 002 and later.
- **Honesty checks:** one intent and one promise per surface; no string promises a date, a landing site,
  an instrument or a vehicle; the fiction disclosure is in the opening clause of the description and in
  the body; no budget figure, no invented entity, no structured data; no keyword list anywhere.
- **Privacy scan of this pass's own artifact:** it carries no withheld name, coordinate, date, provider or
  figure; the gated lists are cited by location, and the scan results are reported by count and class.
  Whole-document scan of this revision section against both lists: **9 word-boundary hits, every one the
  substring of the 002 pipeline route/file id** (`/news/002-payload-selection/`, cited in §R8 as a
  destination and a repository path) — the same false-positive class the retro §11 and
  `.agents/work/seo/about-method.md` §13 recorded; **0 hits for every other pattern.** As in the retro
  pass, the 002 content id appears as a route id (the pipeline slug already carried by
  `website/news/002-payload-selection.mdx` and its brief), explicitly conditional on being released.

### R15. Conflicts with brand voice, continuity, or other cards

| #  | Conflict                                                                                                                                    | Recommended resolution                                                                                                                                                                                                                                               | Owner                                               |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 1  | House voice is a period-terminated sentence; search language is a noun phrase                                                               | §R4 keeps the sentence and adds one token; §R5 keeps the writer's two-sentence card cadence in the description                                                                                                                                                       | editor (acknowledge), writer (accept)               |
| 2  | One `summary` does two jobs (card paragraph, meta description) and the writer's version was 100 characters over the snippet budget          | the ≤155 convention is now applied (001 = 147, 002 = 152); a separate field is deferred with its trigger (§R11.2)                                                                                                                                                    | this pass (applied), dev if the trigger fires       |
| 3  | Cross-surface wording: the old summary said "Ten partner groups", the body and canon say national programme teams                           | the applied description uses the canon wording ("ten national teams"); the body's phrase is unchanged                                                                                                                                                                | resolved in the applied string                      |
| 4  | `linkLabel: "First public briefing"` still reads like a link to a briefing page; `status: "Now opening"` is not plain search language       | unchanged recommendation from retro §12: a plain label that promises nothing ("Announcement summary" / "Programme announcement") and a plainer status; **not applied** (editor's visible-copy call)                                                                  | editor (open), writer to apply                      |
| 5  | The newsroom index duplicates the homepage section sentence as its `h1` and skips `h2` for card titles                                      | heading level filed as a card (§R11.3); the duplicated sentence is an editor/writer call                                                                                                                                                                             | dev (card), editor (sentence)                       |
| 6  | AF-03 alt text describes less than the plate shows                                                                                          | deliberate: the fuller description would republish landing-preparation inventory; the caption note qualifies the frame                                                                                                                                               | continuity/editorial (residual, §R9)                |
| 7  | Two SEO packages settled two different `/news/` titles within the hour                                                                      | settled once, with rationale and fallback (§R11.1); the implementer card is redirected by comment                                                                                                                                                                    | this pass (settled), `t_1828a6d4` (verify and keep) |
| 8  | Homepage card image for 001 is now AF-01 with the plates' first alt entry, replacing the identity-mark presentation the retro gate verified | recorded, not re-decided: it is a planner/editorial sign-off item already on `t_8274703e`; the alt text it prints is accurate for the plate                                                                                                                          | planner/editorial                                   |
| 9  | Continuity                                                                                                                                  | no conflict found in the metadata: every applied string restates released step-001 facts, and the body is unchanged by this pass                                                                                                                                     | continuity `t_23c10313`                             |
| 10 | Two passes of this role treat body links differently: the 002 pass applied them in the body, this one recommends them and applies nothing   | record the divergence, do not paper over it: on this card the body edits are outside the grant. If the project wants one rule, settle it as "the SEO stage may apply meaning-neutral links into existing routes" — an editor/writer decision, not a silent precedent | editor/writer (rule), writer (apply rows 2–3)       |

**Hotspot (repeat, for the orchestrator):** `website/dist/` — shared build output in a `dir:` workspace;
concurrent builds and a dev server from another profile rewrite it, so any build evidence must be captured
in the same shell call as the build (flagged by `t_3922071d`, confirmed by this pass).

### R16. Handoff

- **Result:** the revised article's SEO re-pass — one reader intent updated for the released facts; a
  measured 37-character title and 147-character description applied with their revert strings; a
  re-measured surface inventory; the slug re-affirmed; the heading policy re-checked with a proposed
  outline and its honesty constraint; a four-link internal set with the site-side items separated from the
  body's; the three plate alts verified against the assets' own record, with the AF-03 residual stated;
  "no structured data" re-checked; and four conventions settled, including the newsroom title conflict
  between two of this role's own packages.
- **Timeline step:** `site-foundation` / step 001. Nothing from a later step appears in any string; the
  newly released facts appear only where the body already publishes them.
- **Output:** this file (revision section appended; retro sections 1–16 preserved, with the supersession
  map at the top of the section), `website/news/001-project-announcement.mdx` (two frontmatter values), a
  comment on `t_1828a6d4` (convention redirect), and one new card for the newsroom index heading level.
- **Public/canon impact:** the built homepage card now shows the new title and summary — meaning-neutral
  document/card metadata already inside the published step-001 frame; no canon file, no timeline file, no
  route, no release gate and no `docs/` file was touched. **Confidentiality check: passed** (§R14).
- **Validation:** §R13, run against the real build. **Review outstanding:** the revision chain's visuals
  card (`t_6498855e`, unblocks next), continuity (`t_23c10313`), this revision's editorial gate
  (`t_ff937d33`), then the BUILD card and human canon/release approval.
- **Next owner and action:** `mars-ai-simulator-visuals` (`t_6498855e`) records the three-plate reuse in
  the asset manifest; the editor is asked to accept or revert the two applied strings and to decide the
  `linkLabel`/`status` copy; `mars-ai-simulator-dev` implements the newsroom heading level and, on card
  `t_1828a6d4`, verifies-and-keeps the settled newsroom title.
- **Release recommendation: none.** This pass is not a release; nothing public changes on its strength
  alone, and the article body still has no URL.

---

### R17. Follow-up resolved: the news heading scale and the scoped-style trap (card `t_5a6fe8da`)

**Where this came from.** §R11.3 filed the newsroom index heading _level_ (implemented on `t_b4dc6b94`), and
that card measured a second, separate defect while working it: two scoped rules in
`website/src/features/news/` never match anything, so the newsroom index `h1` renders at the base `h1` tier.
`t_5a6fe8da` routed the _decision_ — a heading-scale convention call — to this role. Nothing in this section
changes the article, its metadata, its route, its copy or its release state.

**Root cause (re-verified on the built site, not inferred).** Astro stamps `data-astro-cid-<scope>` on the
elements written in the file that owns the `<style>` block, and on the root element of a child component _used_
in that file — but not on elements a child component renders _inside_ itself. `SectionHeading.astro` has no
`<style>` block and renders the title, so `.section-heading h1` / `.section-heading h2` compile to
`.section-heading[cid] h1[cid]` / `… h2[cid]`, and the `h1`/`h2` carry no cid at all.

**Measured (this pass, 02:05–02:08 CEST, on the build this card's parent produced; `npm run build` exit 0,
postbuild `check:dist` green, two routes; Chromium over `python3 -m http.server` on `dist/`):**

| Surface / element                                      | Rendered today                                                                               | The file's own rule asks for                                  |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `/news/` `h1#news-index-title` @1280                   | `font-size 102.4px`, `max-width 100%`, 2 lines, 1121 px wide, attributes `[id]` — **no cid** | 61.44 px, `max-width: 35rem` (560 px)                         |
| `/news/` `h1#news-index-title` @375                    | 57.6 px, 4 lines, 221 px tall                                                                | 36 px, 2 lines, 69 px tall (verified by injecting the rule)   |
| `/` `h2#updates-title` @1280                           | `max-width 100%`, 835 px wide, 1 line                                                        | `max-width: 35rem` (560 px), i.e. 2 lines                     |
| `/` `h1#hero-title` (control)                          | 102.4 px, `max-width 624px` — Hero's own rule, live                                          | —                                                             |
| `/` `h2#mission-title`, `h2#timeline-title` (controls) | 370 px wide, 3 / 2 lines                                                                     | unchanged under a 35 rem cap (measured with the cap injected) |

**Audit of the trap across `website/src/**` (the card asked for more than these two).** Reading every
stylesheet of both built pages and running `document.querySelectorAll` on every compiled selector that carries
two scope attributes, the only dead rules are the two above. Live and correctly scoped: `.news-copy h2` /
`.news-copy h3` (the card renders its own title), `.timeline-list h3`, `.article-header h1`, `.about-section h2`,
and the child-component _roots_ (`.news-image img`, `.hero-mark img`, `.splash img`, `.wordmark img`), which do
receive the cid. `:hover` / `:focus-visible` / `::after` variants report 0 matches only because they are state
or pseudo-element rules, not because of scoping.

**Decision — the file's sizing stands: 61.44 px / `max-width: 35rem` for the level-1 title, `max-width: 35rem`
for the level-2 title.** Reasons, in order:

1. The rule is explicit and deliberate: it _overrides_ the base `h1` tier downward with a chosen value and caps
   the measure. Dead-on-arrival stylesheet intent is a defect, not a design decision, and nothing anywhere
   records the base `h1` tier as the newsroom index's intended scale.
2. `website/README.md` states the house rule this defect breaks — "a component owns the styles for the markup
   it renders". The parent rules are dead _because_ they place the parent's scope on a child's element.
3. The site already gives each route's `h1` its own local scale rather than the base tier: `Hero.astro`
   (`max-width: 39rem`), `ArticleView.astro` (`clamp(2.5rem, 5.5vw, 5rem)` with `40rem`). The base `h1` tier
   (`clamp(3.6rem, 8vw, 7.8rem)`) is used by exactly one element on the site, the homepage hero.
4. Hierarchy: as rendered today the newsroom listing's title is the joint-largest type on the site — the hero's
   own tier, 102.4 px at 1280 — and sits _above_ an article `h1` (70.4 px), with no measure cap. The intended
   ladder is hero 102.4 → article 70.4 → listing/section 61.44 at that viewport.

**Rejected alternatives, with the reason.** (a) _Keep the base `h1` tier as it renders today_ — enshrines an
accident, discards a reviewed intent, and leaves a listing title above the articles it lists. (b) _Keep the
tier and apply only the 35 rem cap_ — the same inversion, and it would invent a third value the file never asks
for; this role does not invent type scales. (c) `:global(h1)` in the parents — works, but keeps parents styling
a child's markup against the README rule; it is the right tool for MDX prose (`ArticleView.astro`), not for a
component that can own its own type.

**Fix shape — handed to `mars-ai-simulator-dev` as card `t_915550f4`, chained behind this card.** Give
`SectionHeading.astro` its own scoped `<style>` block (the component that renders the element) with the level-1
title rule and the level-2 `max-width: 35rem`, and delete the two dead parent rules from `NewsList.astro` and
`NewsCarousel.astro`. The wrapper rules that _are_ live stay in the features, because that wrapper `div` is
written in the parent.

**Consequence recorded, not hidden.** Applying the level-2 cap makes `/` `h2#updates-title` a two-line heading
at ≥1024 px (835 px → 560 px wide; 59 px → 118 px tall at 1280) inside the flex row that also holds the carousel
controls; `#mission-title` and `#timeline-title` are measured **unchanged** (370 px, same line counts), so the
cap's blast radius is exactly the surface whose rule asked for it. If the visual owner prefers the one-line fit,
the revert is the `h2` rule itself, not a new value.

**Residuals routed, not settled here.** (1) At ≤760 px the level-1 title floors at 36 px, the same tier as card
titles (`h2` clamp minimum) — the file's intent, but a hierarchy question for the visual owner. (2) The newsroom
index `h1` wording question from §R11.3 stays open (editor/writer). (3) The measurement covers the two built
routes; the article detail route is unbuilt (`releasedNewsSlugs` empty), so its `h1` rule was checked by source
review only, and the audit's source-side heuristic was cross-checked against the compiled CSS of both built pages.

**SEO statement.** No heading _level_ changes: `/` keeps one `h1`, `/news/` keeps one `h1` with `h2` card
titles, document order unchanged. Rendered type scale does not affect crawling, indexing or ranking; no title,
description, slug, route, canonical, structured-data or guard value is touched by the decision or the fix.

**Confidentiality.** Stylesheet-scoped surface only: no copy, no metadata string, no route, no schema, no guard,
no `docs/` or `docs/timeline/` content, and no withheld term appears in this section or in card `t_915550f4`.

**Validation and state.** Completed: the measurements and detector run above, on a fresh `npm run build`
(exit 0; postbuild `check:dist` green; routes `/index.html`, `/news/index.html`). Outstanding: card
`t_915550f4` implements the fix and must re-measure the acceptance rows; the visual owner's one-line-fit and
mobile-hierarchy residuals above; the editorial gate on the 001 revision chain (`t_ff937d33`) is unaffected but
this section is additive to a package it may review; human canon and release approval before any deployment. No
release, no deploy, no commit on this card's strength. **Next owner and action:** `mars-ai-simulator-dev` on
`t_915550f4` — move the level-1/level-2 title rules into `SectionHeading.astro`, delete the two dead parent
rules, and re-measure.
