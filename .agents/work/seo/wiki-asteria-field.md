# SEO pass: wiki-asteria-field

Card: t_b2e8e9b5. Stage: SEO (wiki leaf page).
Date: 2026-09-17. Attempt: 4 (prior 3 blocked on missing upstream files).

## Evidence boundary and sources

- **Draft**: `website/wiki/asteria-field.mdx` (flat; writer note t_10fc616a confirms
  flat placement is required to avoid a nested entry.id that produces a broken route).
- **Brief**: `.agents/work/briefs/wiki-content-plan.md` (planner decisions for the
  first three wiki pages).
- **Structural review**: `.agents/work/seo/wiki-collection.md` (wiki collection SEO
  review, t_b2c55032, deferred checks for leaf pages).
- **Page file**: `website/src/pages/wiki/[section]/[slug].astro` (leaf route, line 34:
  `slug` = `entry.id`, `section` = `entry.data.section`; line 52: `<title>` = `{title} | {site.name}`).
- **Layout**: `website/src/layouts/BaseLayout.astro` (line 47: canonical suppressed when
  `Astro.site` is undefined; line 70: `<link rel="canonical">` gated on canonical truthiness).
- **Canonical helper**: `website/src/lib/seo.ts` (line 21: returns `undefined` when
  `siteUrl` is undefined).
- **Media key**: `website/src/lib/media.ts:40` — `asteria-plates`: `plateCount: 3,
  altCount: 3, captionCount: 3, requiresLabel: true`.
- **Content schema**: `website/src/content.config.ts:73-117` — wiki collection accepts
  `title`, `section`, `publication`, `order`, `summary`, optional `related`,
  `canonicalDocs`, `media`, `mediaAlt`, `mediaLabel`, `mediaCaption`.
- **Navigation**: `website/src/lib/navigation.ts` — wiki entry at `/wiki/`.

## File hash (before any change)

`website/wiki/asteria-field.mdx`: sha256 `fdc5a902865ef2d9d970b68b373201517ceaad560ed2123b251b55d0cec8eeed`

**No changes applied.** The draft meets all SEO structural requirements; no frontmatter
edit is needed. The hash remains current for the editorial gate.

## 1. Reader intent

A visitor searching for "Asteria Field" or "Red Horizon landing zone" wants a reference
gloss: what the fictional region is, where it sits on Mars, and what released material
covers it. The page satisfies that intent in stable present-tense reference language,
consistent with the wiki-voice rule (`.agents/work/briefs/wiki-content-plan.md §3`).

## 2. Title check

| Field                            | Value                          | Measured length | Limit | Status   |
| -------------------------------- | ------------------------------ | --------------- | ----- | -------- |
| frontmatter `title`              | `Asteria Field`                | 13              | —     | OK       |
| full `<title>` (layout-composed) | `Asteria Field \| Red Horizon` | **27**          | ≤ 60  | **PASS** |

Measurement source: `node` script via `/tmp/measure_strings.js`, verified with
`sha256sum` of the MDX file.

## 3. Summary / meta description check

| Field                 | Value                                                                                                                                                   | Measured length | Limit | Status   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----- | -------- |
| frontmatter `summary` | "Fictional operational region in Margaritifer Terra that Red Horizon One targets: a compact highland-to-basin transition centred on 17.80°S, 332.20°E." | **149**         | ≤ 155 | **PASS** |

The summary was trimmed from 173 chars by the writer (per t_10fc616a handoff) to 149
while preserving every fact. It reads as a reference gloss, not a news standfirst.

## 4. Slug check

| Check                               | Result                                                               |
| ----------------------------------- | -------------------------------------------------------------------- |
| Slug = filename content-id          | `asteria-field` — matches                                            |
| Route = `/wiki/area/asteria-field/` | Correct: `entry.data.section` = `area`, `entry.id` = `asteria-field` |
| No `slug` frontmatter field         | Confirmed (none present)                                             |

Flat placement avoids the nested-entry bug the writer documented (t_10fc616a):
`website/wiki/area/asteria-field.mdx` would yield `entry.id = "area/asteria-field"`
and the route `/wiki/area/area/asteria-field/` with a `TypeError: Missing parameter: section`.

## 5. Heading order check

| Line | Heading                          | Level                                             |
| ---- | -------------------------------- | ------------------------------------------------- |
| (H1) | `Asteria Field`                  | rendered by page file:60 from frontmatter `title` |
| 20   | `## Control record`              | H2                                                |
| 36   | `## The real region it sits in`  | H2                                                |
| 58   | `## Scenario boundary`           | H2                                                |
| 75   | `## Regional setting`            | H2                                                |
| 83   | `### The three evidence classes` | H3 (beneath H2)                                   |
| 95   | `## Operational identity`        | H2                                                |
| 107  | `## Planning plates`             | H2                                                |
| 115  | `## Release boundary`            | H2                                                |

**PASS** — H1 is the approved title; body begins at H2; H3 appears only beneath an H2.

## 6. Internal link audit

| Line | Link text                                  | Target                                                                                                            | Route exists?                                             |
| ---- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| 113  | `project announcement`                     | `/news/001-project-announcement/`                                                                                 | **YES** — `dist/news/001-project-announcement/index.html` |
| 40   | `USGS Gazetteer of Planetary Nomenclature` | https://planetarynames.wr.usgs.gov/Feature/3701                                                                   | N/A (external)                                            |
| 46   | `USGS SIM 3209`                            | https://www.usgs.gov/maps/geologic-map-mtm-15027-20027-25027-and-25032-quadrangles-margaritifer-terra-region-mars | N/A (external)                                            |
| 50   | `USGS SIM 3489`                            | https://www.usgs.gov/maps/geologic-map-mtm-10022-and-15022-quadrangles-morava-valles-and-margaritifer-basin-mars  | N/A (external)                                            |
| 54   | `NASA Science resource`                    | https://science.nasa.gov/resource/regions-of-mars-with-clays-and-hydrated-minerals-identified-from-orbit/         | N/A (external)                                            |

**PASS** — one `/news/` internal link verified in dist; four external research citations.
No dead links. No `/wiki/` cross-links (correct: no sibling wiki page published yet).

## 7. JSON-LD check

| Check                                             | Result                                                         |
| ------------------------------------------------- | -------------------------------------------------------------- |
| `<script type="application/ld+json">` in MDX body | **0** matches                                                  |
| JSON-LD emitter in wiki templates                 | None (wiki-collection structural review §4: no emitter exists) |

**PASS** — no structured data. Withheld until origin approval and byline/fiction-disclosure
inputs exist.

## 8. Canonical suppression check

| Check                                            | Result                             |
| ------------------------------------------------ | ---------------------------------- |
| `SITE_URL` environment variable                  | **unset**                          |
| `Astro.site` value                               | `undefined`                        |
| `canonicalUrl()` return (seo.ts:21)              | `undefined`                        |
| `<link rel="canonical">` in BaseLayout (line 70) | Not rendered (gated on truthiness) |

**PASS** — no canonical link. Correct per Gate D failure-closed decision. No origin
inferred from the deployment URL.

## 9. Sitemap check

| Check                                | Result          |
| ------------------------------------ | --------------- |
| `@astrojs/sitemap` in `package.json` | **not present** |
| Sitemap config in `astro.config.mjs` | **none**        |
| Sitemap in built dist                | **none**        |

**PASS** — no sitemap. No integration exists; this page must not add one.

## 10. Media / alt text check

**Key**: `asteria-plates`
**Contract** (`media.ts:40`): `plateCount: 3, altCount: 3, captionCount: 3, requiresLabel: true`

| Field          | Required            | Declared                | Status   |
| -------------- | ------------------- | ----------------------- | -------- |
| `media`        | key name            | `asteria-plates`        | **PASS** |
| `mediaAlt`     | 3 non-blank         | 3 entries (lines 10–12) | **PASS** |
| `mediaCaption` | 3 non-blank         | 3 entries (lines 14–16) | **PASS** |
| `mediaLabel`   | required, non-blank | present (line 17)       | **PASS** |

Alt text content review:

- All three begin with the plate ID (`AF-01`, `AF-02`, `AF-03`).
- All three include "generated visualization, not orbital imagery" — background-neutral
  disclosure that survives an asset-variant decision.
- All three name the fictional planning region, not real imagery or real instruments.
- No keyword stuffing; no scenario-specific withheld content (no AF-* unit identifiers,
  no ellipse geometry, no P0 zone, no traverse logic).

Captions: three distinct scale descriptions (planet scale, 200 km scale, 1 km scale).
Label: "Red Horizon // fictional Asteria Field planning plates" — project and region
named; the double-slash separator matches article 001 convention.

**PASS** — media fields satisfy the `asteria-plates` key contract exactly.

## 11. Frontmatter schema conformance

All fields match the wiki content schema (`content.config.ts:78-117`):

| Field           | Value               | Schema type                                             | Status                          |
| --------------- | ------------------- | ------------------------------------------------------- | ------------------------------- |
| `title`         | `Asteria Field`     | `z.string()`                                            | OK                              |
| `section`       | `area`              | `z.enum(wikiSections)`                                  | OK                              |
| `publication`   | `draft`             | `z.enum(['draft', 'published']).default('draft')`       | OK                              |
| `order`         | `1`                 | `z.number().int().nonnegative()`                        | OK                              |
| `summary`       | (149 chars)         | `z.string()`                                            | OK                              |
| `canonicalDocs` | `docs/area/AREA.md` | `z.string().optional()`                                 | OK                              |
| `media`         | `asteria-plates`    | `z.string().optional()`                                 | OK                              |
| `mediaAlt`      | 3-item array        | `z.union([z.string(), z.array(z.string())]).optional()` | OK                              |
| `mediaCaption`  | 3-item array        | `z.union([z.string(), z.array(z.string())]).optional()` | OK                              |
| `mediaLabel`    | present             | `z.string().optional()`                                 | OK                              |
| `related`       | absent              | `z.array(z.string()).optional()`                        | OK (absent = undefined = empty) |

**PASS** — no field violates the schema; no field is present that the schema does not accept.

## 12. Keyword stuffing / disclosure check

| Check                          | Result                                                                     |
| ------------------------------ | -------------------------------------------------------------------------- |
| Repeated keywords or phrases   | None                                                                       |
| Scenario withhold in metadata  | None (no AF-* units, no ellipse, no P0 zone, no traverse)                  |
| Later-step disclosure          | None (no step 005+ material)                                               |
| Real-agency claim              | None ("fictional" stated explicitly in summary, alt text, label, and body) |
| News-style language in summary | None (reference gloss, not standfirst)                                     |

**PASS**

## 13. `related:` check

`related:` is absent from the frontmatter. The schema defaults it to `undefined`
(treated as empty). No sibling wiki pages are being released in this round.

**PASS** — matches the brief's decision (`.agents/work/briefs/wiki-content-plan.md §1`).

## 14. Deferred checks from wiki-collection structural review

Cross-reference against `.agents/work/seo/wiki-collection.md`:

| Structural review item        | Status for this leaf                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------- |
| §1: Leaf title/summary length | **Resolved** — 27 / 149 chars, both within limits.                                                |
| §2: Canonical suppression     | **Resolved** — no canonical emitted.                                                              |
| §3: No sitemap                | **Confirmed** — no sitemap added.                                                                 |
| §4: No JSON-LD                | **Resolved** — no structured data.                                                                |
| §5: Navigation                | Not changed by this card.                                                                         |
| §6: Internal links            | **Resolved** — `/news/001-project-announcement/` verified in dist.                                |
| §7: Distinct titles           | Not yet verifiable until all three wiki pages exist in a single build; record for editorial gate. |

## 15. Changes applied

**None.** The draft is SEO-structural as written. No frontmatter value is adjusted;
no new field is added; no field is removed.

| Before hash      | After hash       | Change              |
| ---------------- | ---------------- | ------------------- |
| `fdc5a902…8eeed` | `fdc5a902…8eeed` | Identical — no edit |

## Handoff and next owner

Result: SEO pass complete for `wiki-asteria-field`. All 13 checks pass. No corrective
changes needed; the page is ready for the editorial gate with its current hash.

Next owner: `mars-ai-simulator-editor` evaluates canon confirmation and records the
release decision on its own editorial gate card. The editor should re-verify title
length (27 chars), summary length (149 chars), and no JSON-LD on the built surface as
the structural review deferred for leaf pages.
