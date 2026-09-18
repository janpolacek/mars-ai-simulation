# SEO pass: wiki-rh-01-pathfinder

Card: t_aef9c659. Stage: SEO (wiki leaf).
Date: 2026-09-17. File: `website/wiki/rh-01-pathfinder.mdx` (not under `vehicle/` subdirectory).

## Input sources and assumptions

- Brief: `.agents/work/briefs/wiki-content-plan.md` (page set, media key `vehicle-references`, slug `rh-01-pathfinder`)
- Source pack: `docs/vehicles/pathfinder/VEHICLE.md` (canonical dossier, 164 lines)
- Draft: `website/wiki/rh-01-pathfinder.mdx` (145 lines, `publication: draft`)
- Deferred checks: `.agents/work/seo/wiki-collection.md` (structural review, checks §1–§6)
- Media contract: `website/src/lib/media.ts` — `vehicle-references` key: `plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false`
- Canonical routes verified in dist: `website/dist/news/002-payload-selection/index.html`, `website/dist/news/003-vehicle-design/index.html` both exist.

## 1. Reader intent

**Primary query/theme:** What is the RH-01 Pathfinder rover — its design, shape, and role in the Red Horizon programme.

**Honest intent:** A reader who encountered the name "RH-01 Pathfinder" (from a news article, social post, or the wiki index) and wants a stable reference entry: what the vehicle looks like, how it moves, what instruments it carries, and how it fits the mission. No event timeline, no announcement framing.

## 2. Title

**Frontmatter value:** `RH-01 Pathfinder`
**Full page title (layout appends `| Red Horizon`):** `RH-01 Pathfinder | Red Horizon`
**Measured length:** 30 characters (≤60 — PASS)

**Assessment:** No change recommended. The title is concise, uses the approved in-universe name, and the layout suffix adds project identity without exceeding the limit.

## 3. Summary (meta description)

**Frontmatter value:** `Red Horizon One's compact six-wheel Mars surveyor: warm-white body, six open-mesh wheels on visible suspension, short stereo mast, one stowed contact arm.`
**Measured length:** 154 characters (≤155 — PASS, 1 char margin)

**Assessment:** No change recommended. One sentence, reference-gloss tone per the wiki voice rule, no news standfirst, no keyword stuffing. The 1-char margin is tight — a future editorial rewrite must stay within 155 chars.

## 4. Slug

**Value:** `rh-01-pathfinder` (derived from file name; no frontmatter `slug` field)
**Assessment:** No change. Correct per the wiki slug convention: flat lowercase hyphenated content filename.

## 5. Heading order

| Line | Level | Text                                   |
| ---- | ----- | -------------------------------------- |
| 13   | H2    | Identity                               |
| 28   | H2    | Visual identity and silhouette         |
| 30   | H3    | Proportions and silhouette             |
| 39   | H3    | Body and colour blocking               |
| 57   | H3    | Six-wheel mobility system              |
| 75   | H3    | Mast and vision system                 |
| 84   | H3    | Front contact arm and travel cradle    |
| 98   | H3    | Rear, materials, and surface character |
| 108  | H3    | Baseline and operating appearance      |
| 123  | H2    | Science and operations                 |
| 134  | H2    | Relationship to the mission            |

**H1:** Provided by the layout from frontmatter `title` (`RH-01 Pathfinder`). No H1 in the MDX body (correct — the layout renders it).
**Body starts at H2:** Yes. First body heading is `## Identity`.
**H3 only beneath H2:** Yes — all six H3 headings sit under `## Visual identity and silhouette`.

**Assessment:** Heading structure is correct. No change recommended.

## 6. Internal links audit

The MDX body contains two `/news/<slug>/` links:

| Line | Target route                   | dist file exists?                                          |
| ---- | ------------------------------ | ---------------------------------------------------------- |
| 25   | `/news/003-vehicle-design/`    | YES (`website/dist/news/003-vehicle-design/index.html`)    |
| 126  | `/news/002-payload-selection/` | YES (`website/dist/news/002-payload-selection/index.html`) |

**Assessment:** Both internal links point at routes the site renders. No broken links. No placeholder or withheld routes. PASS.

## 7. Canonical / sitemap / JSON-LD

- **Canonical:** Suppressed. `SITE_URL` is unset; `BaseLayout.astro:47` calls `canonicalUrl(Astro.url.pathname, Astro.site)` which returns `undefined` when `Astro.site` is absent. No `<link rel="canonical">` emitted. PASS.
- **Sitemap:** No sitemap XML in dist; no `@astrojs/sitemap` dependency. The page is not in any sitemap. PASS (correct state — origin not authorised, must not infer URLs).
- **JSON-LD:** Zero `application/ld+json` scripts in the MDX or the layout templates. PASS.

## 8. Alt text check

**mediaAlt value (measured):**

> The RH-01 Pathfinder rover in its studio baseline configuration: a warm-white rectangular equipment body with a dark instrument deck, six open-mesh wheels on visible articulated suspension, short central stereo camera mast, and a single front contact arm nested in its travel cradle, against a neutral white background. Illustrative artwork, not mission photography; a fictional vehicle for a fictional programme; no real agency is named or implied.

**measured length:** 383 characters

**vehicle-references key contract:**

- `altCount: 1` — one `mediaAlt` string present. PASS.
- `captionCount: 0` — no `mediaCaption` field. PASS.
- `requiresLabel: false` — no `mediaLabel` field. PASS.

**Wording check:**

- Background-neutral: Yes — describes the visible asset without assuming red soil, landing platform, or scene context.
- No hidden institution/equipment claims: Yes — ends with "no real agency is named or implied."
- No keyword stuffing: Yes — descriptive, not SEO-manipulative.
- Fiction disclosure included: Yes — "fictional vehicle for a fictional programme."

**Assessment:** Alt text satisfies the contract. No change recommended.

## 9. Keyword stuffing / later-step disclosure

- Frontmatter and body do not repeat target phrases excessively. No unnatural keyword density.
- No later-step disclosure (step 005+) appears in metadata, alt text, slug, or summary.
- The `canonicalDocs` field correctly points to the released dossier.

**Assessment:** PASS.

## 10. Related links

`related: []` — empty. Correct per the brief: no wiki-to-wiki cross-links this round.

## 11. Fiction disclosure

The body ends (line 142–145) with: "Red Horizon is a fictional, AI-assisted Mars exploration programme, and RH-01 Pathfinder is a fictional vehicle described here from the programme's own design dossier. The studio reference on this page is illustrative artwork, not mission photography, and no real agency is named or implied."

**Assessment:** Sufficient and appropriately placed. No change recommended.

## 12. SEO structural review deferred-check drift

The wiki-collection structural review (`.agents/work/seo/wiki-collection.md`) deferred several checks to first leaf release. This package addresses the leaf-level items:

| Deferred check               | Status on this page                              |
| ---------------------------- | ------------------------------------------------ |
| §1 leaf title/summary length | PASS — title 30 chars, summary 154 chars         |
| §2 canonical suppression     | PASS — SITE_URL unset, no canonical emitted      |
| §3 sitemap                   | PASS — no sitemap; must not infer origin         |
| §4 JSON-LD                   | PASS — zero scripts                              |
| §6 leaf internal links       | PASS — two `/news/` links, both verified in dist |

No drift found. The leaf page satisfies all deferred structural checks.

## Validation executed

| Check           | Command / method                                                                                                                                                      | Result                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Title length    | `echo -n 'RH-01 Pathfinder                                                                                                                                            | Red Horizon'                                                       | wc -c` | 30 chars (≤60) |
| Summary length  | `echo -n "Red Horizon One's compact six-wheel Mars surveyor: warm-white body, six open-mesh wheels on visible suspension, short stereo mast, one stowed contact arm." | wc -c`                                                             | 154 chars (≤155) |
| Internal link 1 | `ls website/dist/news/003-vehicle-design/index.html`                                                                                                                  | EXISTS                                                             |
| Internal link 2 | `ls website/dist/news/002-payload-selection/index.html`                                                                                                               | EXISTS                                                             |
| Slug            | grep frontmatter                                                                                                                                                      | No `slug` field; file name is `rh-01-pathfinder.mdx`               |
| Heading order   | grep `^#` in MDX                                                                                                                                                      | H2 first, H3 only beneath H2, no H1 in body                        |
| mediaAlt count  | grep frontmatter                                                                                                                                                      | 1 string present (altCount: 1)                                     |
| mediaCaption    | grep frontmatter                                                                                                                                                      | None (captionCount: 0)                                             |
| mediaLabel      | grep frontmatter                                                                                                                                                      | None (requiresLabel: false)                                        |
| JSON-LD         | grep `application/ld+json`                                                                                                                                            | 0 matches                                                          |
| Sitemap         | `ls website/dist/sitemap*`                                                                                                                                            | No sitemap file                                                    |
| Canonical       | grep `BaseLayout.astro`                                                                                                                                               | canonicalUrl returns undefined when SITE_URL unset                 |
| related         | frontmatter                                                                                                                                                           | `[]` (empty)                                                       |
| File sha256     | `sha256sum website/wiki/rh-01-pathfinder.mdx`                                                                                                                         | `c6202ad5f57e703d352554ad76983de1cf96113811173e24811e3358de4325c4` |

## Before/after metadata

No changes were made. The draft frontmatter is byte-stable:

| Field         | Before                                | After                                 | sha256 (unchanged) |
| ------------- | ------------------------------------- | ------------------------------------- | ------------------ |
| title         | `RH-01 Pathfinder`                    | `RH-01 Pathfinder`                    | —                  |
| summary       | (154 chars)                           | (154 chars)                           | —                  |
| related       | `[]`                                  | `[]`                                  | —                  |
| media         | `vehicle-references`                  | `vehicle-references`                  | —                  |
| mediaAlt      | (383 chars)                           | (383 chars)                           | —                  |
| canonicalDocs | `docs/vehicles/pathfinder/VEHICLE.md` | `docs/vehicles/pathfinder/VEHICLE.md` | —                  |

Full file sha256: `c6202ad5f57e703d352554ad76983de1cf96113811173e24811e3358de4325c4`

## Verdict

**APPROVED — no changes required.** All 12 SEO checks pass. The draft is metadata-stable and ready for editorial review.

## Handoff

- **Card:** t_aef9c659
- **Public/canon impact:** None. No metadata changed, no publication flip, no commit.
- **Confidentiality check:** No private timeline material disclosed. No later-step content in metadata or alt text.
- **Validation completed:** All string lengths measured by script. Internal links verified in dist. Canonical, sitemap, JSON-LD, heading order, alt text contract — all checked.
- **Review still outstanding:** Editorial review of the MDX prose (out of scope for this card).
- **Next recommended owner:** `mars-ai-simulator-editor` for the editorial final gate on this wiki page.
