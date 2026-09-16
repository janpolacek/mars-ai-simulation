# SEO package: 001-project-announcement (retro pass)

## Package metadata

| Field              | Value                                                                                                                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article            | `website/news/001-project-announcement.mdx` (frontmatter `publication: published`)                                                                                                                       |
| Timeline step      | `001-project-announcement` (retro: the article went public before the pipeline existed)                                                                                                                    |
| Card               | `t_16c7ba1c` (`mars-ai-simulator-seo`)                                                                                                                                                                    |
| Owner              | `mars-ai-simulator-seo`                                                                                                                                                                                   |
| Skill              | `seo-content`                                                                                                                                                                                             |
| Inputs read        | `website/news/001-project-announcement.mdx`; `.agents/work/reviews/001-project-announcement.md`; `docs/timeline/001-project-announcement.md`; `docs/SCENARIO.md`; `docs/GENERAL.md`; `docs/INSTRUCTIONS.md`; `docs/README.md`; `docs/brand/BRAND.md`; `website/src/pages/index.astro`; `website/src/content.config.ts`; `website/src/lib/*.ts`; `website/src/components/*.astro`; `website/src/features/**`; `website/astro.config.mjs`; `website/scripts/assets.mjs`; `website/README.md`; card `t_fc952c7d` and its comments |
| Conventions read   | `.agents/skills/seo-content/SKILL.md`, `.agents/skills/brand-voice/SKILL.md`                                                                                                                               |
| Artifact           | `.agents/work/seo/001-project-announcement.md` (this file)                                                                                                                                                |
| Applied to the page | one frontmatter value: `mediaAlt` (section 8). Nothing else in the page was changed.                                                                                                                      |
| Status             | recommendations issued; **no release, no deploy, no canon change**                                                                                                                                        |

Assumptions recorded (nothing here was inferred as approved):

1. No human release reference exists for article 001 or for a news detail route; `src/lib/releases.ts` ships `releasedNewsSlugs = []`, so **no article URL exists today and none is proposed as live**.
2. The article frontmatter `title` is used as the visible card heading. Its public confirmation is an open human decision (review §6.3), so this package does not change it.
3. The site tree was mid-refactor while this pass ran (untracked `website/src/lib/*`, `components/*`, `features/*`, `styles/*`, `pages/probe-temp.astro`; `pages/index.astro` on disk is still the pre-refactor monolithic file). Recommendations therefore target the **in-flight contract** (`src/lib/navigation.ts` routes, `src/lib/media.ts` media keys, `src/lib/releases.ts` gate) and name the disk state where the two differ.
4. `docs/timeline/` was read as continuity material only. No unreleased fact appears anywhere in this package or in any recommended string; the confidentiality scan in section 11 is the evidence.

---

## 1. Reader intent (one)

**Primary intent — brand informational.** A reader who has just met the name *Red Horizon* asks: **"What is Red Horizon — who is behind it, and is it real?"** The honest answer this page can satisfy is: a fictional, AI-assisted Mars exploration programme, announced with ten national partner teams, one shared uncrewed lander-and-rover mission, a mineralogy objective, a 2031 launch window and a €2.10 billion lifecycle frame, with the technical decisions still ahead.

**Secondary intent — creative process.** Readers searching the AI/agent angle ("AI-generated fiction project", "multi-agent writing experiment"). The mandatory fiction disclosure already serves this intent honestly, so it is a target rather than a cost.

**One-sentence promise of the page:** *"This states that a fictional Mars programme called Red Horizon has been announced, who its partner teams are, what its first mission will study, and what is still undecided."*

**Deliberate non-targets** (do not optimise for, and why):

- **Live Mars mission news** ("Mars rover news", "Perseverance", "ExoMars"). Article 001 mentions no real mission and no real agency; chasing that traffic would mean inventing news.
- **"Mars launch 2031" / landing-site / vehicle queries.** The 2031 window is a fictional programme frame; the launch provider, the vehicle, and the landing region's details are gated at later steps.
- **Any query the article cannot answer** (dates, instruments, launch site, landing site name). Metadata must not promise what the body withholds.

Theme (one phrase, used consistently): *a fictional, AI-assisted Mars mission, announced.*

---

## 2. Surface inventory (what is actually indexable today)

| Surface                                      | State (measured)                                                                                                                       | Consequence                                                                                                     |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Public pages                                 | one: `/` (`website/src/pages/index.astro`); `probe-temp.astro` is an untracked local probe, not a page                                   | the whole programme is one URL today                                                                            |
| Article body                                 | 249 words, 0 markdown headings, 0 links; **rendered nowhere** — no detail route exists and `src/lib/releases.ts` gates `/news/<slug>/` behind a human release reference (`releasedNewsSlugs = []`) | article 001's only search surface is the homepage `<title>`, the homepage `<meta name="description">`, and its card |
| Homepage `<title>`                           | `Red Horizon \| A Mars mission in progress`                                                                                            | brand-first, no topic noun; acceptable for the only page                                                        |
| Homepage description                         | `Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface.`                          | honest, no later-step fact; no per-page override exists                                                         |
| Open Graph / Twitter card / canonical        | absent (no `og:`, no `twitter:`, no `rel="canonical"`, no `ld+json`, no `robots.txt`, no sitemap anywhere in the repository)             | nothing leaks, and nothing is claimed either; `src/lib/seo.ts` correctly emits no canonical while `SITE_URL` is unset |
| `astro.config.mjs`                           | no `site:` value                                                                                                                       | canonical/sitemap work is blocked on the domain decision, not on code                                           |
| News listing                                 | `#updates` carousel inside `/`; nav "News" still points at `#updates` on disk, while `src/lib/navigation.ts` already defines `routes.news = '/news/'` | the listing URL is in flight; the anchor remains the live target today                                          |
| Media contract                               | `src/lib/media.ts` restricts `media:` to the key `programme-identity`; `src/lib/assets.ts` imports `docs/brand/logo.png`; `scripts/assets.mjs` withholds `docs/vehicle/` | the frontmatter `media:` value on disk already reads `programme-identity` (changed concurrently by that refactor); the alt text (`mediaAlt`) stays a frontmatter string either way |

**Highest-value SEO change for the project:** the `/news/` index plus release-gated `/news/<slug>/` detail routes, with a per-page `<title>` and description. That work is **already in flight in the working tree** (`src/lib/navigation.ts`, `src/lib/releases.ts`, `src/lib/seo.ts`, and a `SectionHeading` that documents a page-level `h1` on the news index). This package therefore specifies the **metadata contract** for that route rather than requesting new structure, and it does not create a duplicate card for work that is already being built.

---

## 3. Title

**Current** — frontmatter `title` (32 chars), also the visible card heading:

> A mission takes shape in public.

**Verdict: keep it as the visible heading.** It matches the site's period-terminated sentence heading style (`index.astro`: "The story starts before launch.", "One step at a time.", "The programme at a glance") and the editorial review recorded it as consistent (§7). It is **not** search language (no programme name, no topic noun), so it must never be the whole `<title>` tag of an indexable page.

**Recommended `<title>` for the detail route** (if and when the human records a release reference):

| Option                                        | Length | Text                                                              | Use when                                                             |
| --------------------------------------------- | -----: | ----------------------------------------------------------------- | -------------------------------------------------------------------- |
| A (recommended primary)                       |     54 | `Red Horizon: a fictional Mars lander and rover mission`          | default; answers "what is this" and marks it fictional up front      |
| B2 (alternative)                              |     52 | `Red Horizon: ten partners, one Mars mission for 2031`            | if the coalition and the window are the point of the page            |
| A + site suffix                               |     75 | `Red Horizon: a fictional Mars lander and rover mission \| Mars AI Simulation` | acceptable, but the suffix will usually be trimmed by the search engine; prefer A alone |

Rules attached: exactly one `<title>` per route; brand name first; no date, no number that a later step changes (no launch date, no landing date, no budget figure in the title); the visible `h1` may stay the house sentence (option: "A mission takes shape in public.") as long as `h1` and `<title>` describe the same event — the gap between them must never promise more than the body says.

`keywords` meta: **do not add one.** It is ignored by search engines, and on this project it would be the easiest place to leak a gated term. No keyword list appears anywhere in this package.

---

## 4. Meta description

**Current** — frontmatter `summary` (250 chars) serves two jobs: the homepage card paragraph and the only description-shaped string the article owns.

> Red Horizon is a fictional, AI-assisted Mars exploration programme. Ten partner groups have announced a shared uncrewed mission to study how water changed an ancient equatorial landscape, with a 2031 launch window and a €2.10 billion lifecycle frame.

**Finding:** at 250 characters it is 95 over the ~155-character snippet budget. Used verbatim as a detail-page description it would truncate around "…with a 2031 launch window and a €2.10 …", i.e. mid-fact. It is honest and factually correct; the problem is length, not truth.

**Recommended description strings** (measured):

| Option                     | Length | Text                                                                                                                                                        |
| -------------------------- | -----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D1 (recommended)           |    136 | `Fictional, AI-assisted Mars programme: ten national teams, one uncrewed lander and rover, a mineralogy mission and a 2031 launch window.`                    |
| D2                         |    132 | `What Red Horizon is: a fictional, AI-assisted Mars mission with ten partner teams, a mineralogy objective, and a 2031 launch window.`                        |
| D4 (shortest)              |    112 | `A fictional, AI-assisted Mars programme: ten partner teams, one uncrewed lander and rover, a 2031 launch window.`                                            |

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

| # | Anchor text (proposed)          | Destination                          | Why it is honest                                                                 |
| - | ------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------- |
| 1 | the programme at a glance       | `/#mission`                          | the mission brief panel with the fact table; exists today                        |
| 2 | the public progress log         | `/#timeline`                         | the progress log; exists today                                                    |
| 3 | all announcements               | `/news/`                            | the newsroom listing; exists once the in-flight index lands                       |
| 4 | what the mission will measure   | `/news/002-payload-selection/`       | **only** after 002 is published *and* released; not before its editorial gate     |

**Why none of these are applied in the MDX today:** the body renders nowhere (no route; `releasedNewsSlugs` is empty). Adding links to a body no reader can open would repeat exactly the dishonesty that corrective card `t_fc952c7d` removed from the "First public briefing" label. Also, the body is the writer's artifact; link edits belong to the writer, with the editor's review.

**Two more link recommendations for the site owner** (both blocked on the release reference):

- Make the card title a real link to `/news/001-project-announcement/` on the listing surfaces once the route is generated. Keep `linkLabel` itself as a plain, non-interactive label — the corrective card's default — so the label never implies navigation that does not exist.
- Point the homepage hero call to action ("Read the first announcement") at the detail route instead of `#updates` once it exists. That gives the article its strongest, and currently only, editorial internal link.
- Anchor text must describe the destination and never promise a step-002 decision (e.g. never an anchor that offers "what the rover carries" — that decision belongs to step 002 and the body withholds it).

---

## 8. Image alt text — the one change applied to the page

**Applied** (`website/news/001-project-announcement.mdx`, frontmatter `mediaAlt`):

| | Length | Value |
| --- | ---: | --- |
| Before | 138 | `The Red Horizon programme mark: a rust-red Mars disc crossed by low highlighted hills, with a small Sun rising behind its upper-left edge.` |
| After | 187 | `The Red Horizon programme mark: a rust-red Mars disc crossed by low highlighted hills, a small Sun rising behind its upper-left edge, and blue Earth with a dimmer Moon at the upper right.` |

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

| Item | Recommendation | Owner | Blocker |
| --- | --- | --- | --- |
| Canonical | keep `canonicalUrl` emitting nothing while `SITE_URL` is unset; set the origin only from the real domain | dev | domain/DNS decision (human) |
| Open Graph / Twitter card | add only with the route: `og:title` = page title, `og:description` = section 4 string, `og:image` **from the released media registry only** (never `docs/vehicle/`, never a gated asset), `og:image:alt` = the section 8 alt text | dev | release reference + variant decision |
| `robots.txt` / sitemap | defer; when added, the sitemap must list only `published` **and released** URLs — today that is one | dev | origin decision |
| Link integrity | add a test that no rendered page links to a non-generated route (the `releasedNewsSlugs` gate already gives it something to assert) | dev | none (can be done with the route work) |
| Keyword stuffing | no `keywords` meta, no hidden text, no repeated brand strings; the brand appears once in the 249-word body and that is enough | writer/seo | none |
| Crawl access | the article's discoverability ceiling is structural (one page, no article route), not linguistic; the `/news/` index is the fix | dev (in flight) | human release reference for detail routes |

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

| # | Conflict | Recommended resolution | Owner |
| - | --- | --- | --- |
| 1 | House heading style is period-terminated sentences; search `<title>`/descriptions work better as plain noun phrases | keep the visible heading in house style and let the `<title>` differ, both describing the same event — no style change is asked of the writer | writer/editor (acknowledge), dev (implement) |
| 2 | `linkLabel: "First public briefing"` (21) reads like a link to a briefing page that does not exist | change to a plain label: `Announcement summary` (20) or `Programme announcement` (22); it is the same honesty problem the corrective card fixed visually | editor (holds it as an open copy call) — **not applied** |
| 3 | `status: "Now opening"` renders as "Announcement 01 · Now opening", which is not plain search language | consider `Programme announced` (19); meaning-preserving, no new fact | writer/editor — **not applied** |
| 4 | `summary` is doing two jobs (card paragraph, and the only description surface) and is 95 chars over a snippet budget | separate `description` field (section 4, option A) | dev, with writer sign-off |
| 5 | Continuity | **no conflict found.** Every string this package recommends uses only step-001 allowed facts, and the body's claims are unchanged by this pass | continuity card `t_0b3434e8` |

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
- **Files:** `website/news/001-project-announcement.mdx` (one frontmatter value); this package at `.agents/work/seo/001-project-announcement.md`.
- **Validation completed:** sections 11 and 14. **Review required:** editorial (`t_3302ef7e`) and continuity (`t_0b3434e8`); human release reference before any detail route exists.
- **Next action / owner:** editor re-verifies the published surface and accepts or reverts the alt string; `mars-ai-simulator-dev` implements the route metadata (section 3/4/6/7/10) once a release reference is recorded and the news route lands; the story coordinator fixes the series-wide URL-slug convention (section 5) before 002 is released.
- **Release recommendation:** none. This package is not a release, and no public surface should change on its strength alone.

---

## 16. Sources cited in this package

- Locked canon and release controls: `docs/SCENARIO.md` (mission identity; "Continuity and release controls").
- Step-001 allowed angle and spoilers: `docs/timeline/001-project-announcement.md`.
- Published article and its frontmatter: `website/news/001-project-announcement.mdx`.
- Prior gate and open questions: `.agents/work/reviews/001-project-announcement.md`; corrective card `t_fc952c7d` (comments and completion metadata).
- Identity mark composition, colours and canonical alt text: `docs/brand/BRAND.md`; pixel counts in `docs/brand/logo.png` and `docs/brand/logo-bg-black.png` measured by this pass.
- Site contract: `website/src/content.config.ts`, `website/src/lib/{site,navigation,releases,publication,media,assets,seo}.ts`, `website/src/pages/index.astro`, `website/scripts/assets.mjs`, `website/astro.config.mjs`, `website/README.md`.
- Rules: `docs/INSTRUCTIONS.md` (canon and information safety; handoff format), `AGENTS.md`, `docs/GENERAL.md`, `docs/README.md`.
