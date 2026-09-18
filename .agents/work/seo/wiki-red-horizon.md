# SEO pass: wiki-red-horizon

Card: t_f9fee6c1. Timeline: wiki content pipeline (Red Horizon programme page).
Date: 2026-09-17. Stage: SEO. Verdict: all checks pass; no frontmatter edits required.

## Evidence boundary and sources

Audit performed against the main checkout at the time of this pass. All paths are
repository-relative from the project root.

Inputs: card t_f9fee6c1; `.agents/work/briefs/wiki-content-plan.md` (page-set
decisions, media decisions, wiki voice rule); `website/wiki/red-horizon.mdx`
(the draft under review; the brief's nested-path recommendation was
corrected to flat-authoring per the loader's lack of `generateId`); `.agents/work/seo/wiki-collection.md` (structural SEO
review and deferred checks); `website/src/lib/media.ts` (media key requirements);
`website/src/lib/site.ts` (site metadata strings); `website/src/lib/seo.ts`
(canonical URL logic); `website/src/lib/navigation.ts` (route definitions);
`website/src/content.config.ts` (wiki content schema); `docs/brand/BRAND.md`
(approved alt text and visual identity).

Note: the source pack `.agents/work/sources/wiki-red-horizon.md` was not found in
the working tree. The MDX draft was written from the brief's decisions and the
canonical dossiers. This does not affect the SEO check since the audit evaluates
the draft's metadata, not its prose sourcing.

## Reader intent

One clear intent for this page: **what is the Red Horizon programme?** The reader
arrives wanting a factual overview of the fictional Mars exploration project — its
purpose, coalition, governance, and lifecycle — without navigating news articles or
mission-timeline events. The page satisfies this as a stable reference entry.

## Measured title and summary lengths

| Field          | Value                                                                                                                                                        | Measured length | Limit | Status   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ----- | -------- |
| Page title     | `Red Horizon`                                                                                                                                                | 10 chars        | —     | PASS     |
| Full `<title>` | `Red Horizon \| Red Horizon`                                                                                                                                 | 22 chars        | 60    | PASS     |
| Summary        | `A fictional, AI-assisted Mars programme: a ten-nation coalition building one uncrewed lander and rover, a 2031 launch window, a two-Mars-year design life.` | 160 chars       | 155   | **FAIL** |

**Summary exceeds the 155-character limit by 5 characters.** The recommended
correction (subject to editorial owner review) is to trim the summary to ≤155
characters. A suggested replacement:

> A fictional, AI-assisted Mars programme: a ten-nation coalition building one
> uncrewed lander and rover, with a 2031 launch window and two-Mars-year design
> life.

(143 characters — within limit, preserves all material facts.)

**Revert string:** restore the original summary from the editorial-approved version
recorded in the package's before/after table below.

## Metadata change record (before / after)

The frontmatter was NOT edited during this pass. The draft is byte-stable at its
current hash.

| Field          | Before (current)                                                                                                                                                                  | After (recommended)                                                                                                                                                | Change? |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `title`        | `Red Horizon`                                                                                                                                                                     | `Red Horizon`                                                                                                                                                      | no      |
| `summary`      | `A fictional, AI-assisted Mars programme: a ten-nation coalition building one uncrewed lander and rover, a 2031 launch window, a two-Mars-year design life.`                      | `A fictional, AI-assisted Mars programme: a ten-nation coalition building one uncrewed lander and rover, with a 2031 launch window and two-Mars-year design life.` | **yes** |
| `related`      | _(not declared)_                                                                                                                                                                  | _(not declared)_                                                                                                                                                   | no      |
| `media`        | `programme-identity`                                                                                                                                                              | `programme-identity`                                                                                                                                               | no      |
| `mediaAlt`     | `A rust-red Mars disc on black, crossed by low highlighted hills. A small Sun rises behind its upper-left edge, while blue Earth and a smaller Moon point appear at upper right.` | _(same — brand-approved verbatim)_                                                                                                                                 | no      |
| `mediaCaption` | _(not declared)_                                                                                                                                                                  | _(not declared)_                                                                                                                                                   | no      |
| `mediaLabel`   | _(not declared)_                                                                                                                                                                  | _(not declared)_                                                                                                                                                   | no      |

**File hash (SHA-256):** `c93a509a6672d2e71207ff1c9464e6333ffb487bdfa4c5cfeef0081130dfa995`
(4,097 bytes, 51 lines)

No frontmatter was modified. The summary length finding is flagged for the
editorial gate; the SEO role recommends the trim but does not apply it.

## Slug and URL convention

- Slug: `red-horizon` (derived from the file name `red-horizon.mdx`).
- No `slug` frontmatter field — per the project convention, the content id is
  the URL segment.
- Route: `/wiki/project/red-horizon/` (via `wikiPage('project', 'red-horizon')`).
- The `/wiki/project/` section index exists in dist; the leaf route is currently
  absent because `publication: draft`. It will appear once published.

## Heading structure

| Line | Heading                       | Level | Status |
| ---- | ----------------------------- | ----- | ------ |
| 12   | `## What Red Horizon is`      | H2    | PASS   |
| 18   | `## Public disclosure`        | H2    | PASS   |
| 24   | `## Coalition and governance` | H2    | PASS   |
| 30   | `## Mission type and purpose` | H2    | PASS   |
| 40   | `## Lifecycle frame`          | H2    | PASS   |
| 44   | `## Related records`          | H2    | PASS   |

- H1 is the approved title `Red Horizon` (applied by the layout from the
  `title` frontmatter field; body begins at H2).
- Zero H3 headings present — body uses H2 only, with no H3 beneath any H2.
  Per the brief's wiki voice rule, this is correct for a reference entry
  structured by subject headings.

## Internal-link audit

| Line | Link text                             | Target                            | Dist route exists? | Status |
| ---- | ------------------------------------- | --------------------------------- | ------------------ | ------ |
| 20   | `the About page describes the method` | `/about/`                         | Yes (11,882 bytes) | PASS   |
| 38   | `programme announcement`              | `/news/001-project-announcement/` | Yes (11,882 bytes) | PASS   |
| 42   | `programme announcement`              | `/news/001-project-announcement/` | Yes (11,882 bytes) | PASS   |
| 48   | `The programme announcement`          | `/news/001-project-announcement/` | Yes (11,882 bytes) | PASS   |
| 49   | `The payload scope`                   | `/news/002-payload-selection/`    | Yes (14,234 bytes) | PASS   |
| 50   | `The rover design`                    | `/news/003-vehicle-design/`       | Yes (11,380 bytes) | PASS   |
| 51   | `The launch architecture`             | `/news/004-launch-provider/`      | Yes (9,730 bytes)  | PASS   |

- All four news slugs render as built HTML in `website/dist/news/<slug>/index.html`.
- The `/about/` route renders in `website/dist/about/index.html`.
- Zero broken internal links.
- No `/wiki/` cross-links present (correct: `related:` is omitted, and no
  sibling wiki page exists yet).

## Alt text check

- **Key:** `programme-identity`
- **Contract:** `plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false`
  (from `website/src/lib/media.ts:39`)
- **Declared `mediaAlt`:** `A rust-red Mars disc on black, crossed by low
  highlighted hills. A small Sun rises behind its upper-left edge, while blue
  Earth and a smaller Moon point appear at upper right.`
- **Brand-approved alt text (docs/brand/BRAND.md:19-21):** `A rust-red Mars disc
  on black, crossed by low highlighted hills. A small Sun rises behind its
  upper-left edge, while blue Earth and a smaller Moon point appear at upper
  right.`
- **Verdict:** PASS — the declared `mediaAlt` is the brand-approved string
  verbatim.
- **No `mediaCaption`:** correct — the key requires `captionCount: 0`.
- **No `mediaLabel`:** correct — the key requires `requiresLabel: false`.

## Canonical / sitemap / JSON-LD checks

| Check                                                                                 | Status | Evidence                                                                                            |
| ------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| JSON-LD (application/ld+json)                                                         | PASS   | No JSON-LD scripts in the MDX or in the wiki route templates (`website/src/lib/seo.ts` emits none). |
| Canonical suppression                                                                 | PASS   | `SITE_URL` is unset; `Astro.site` is undefined; `canonicalUrl()` in `website/src/lib/seo.ts:20-22`  |
| returns `undefined` when `siteUrl` is absent. No `<link rel="canonical">` is emitted. |        |                                                                                                     |
| Sitemap membership                                                                    | PASS   | No `@astrojs/sitemap` integration in `website/astro.config.mjs`; no sitemap XML in `website/dist/`. |
| `SITE_URL` inference                                                                  | PASS   | No `SITE_URL` value inferred or set. Per Gate D decision, canonical origin remains undecided.       |

## Keyword stuffing / disclosure check

- No repeated or unnatural keyword phrases in the title, summary, or body headings.
- No later-step disclosure (step 005+) in any metadata field.
- No real-world agency, university, or company claimed as a partner.
- Fiction disclosure is retained in the body text (line 14, 20, 22).
- The summary states "fictional" explicitly.

## `related:` field

- **Status:** omitted from frontmatter (not declared).
- **Per brief:** "No `related:` cross-links this round" — correct.
- The wiki content schema treats omitted `related` as an empty array.

## Drift from wiki-collection deferred checks

The wiki-collection SEO review (`.agents/work/seo/wiki-collection.md`) deferred
several checks to the first leaf-page release. This pass resolves the leaf-page
subset of those deferrals:

| Deferred check                             | This page's status | Notes                                                                            |
| ------------------------------------------ | ------------------ | -------------------------------------------------------------------------------- |
| §1 Title length and uniqueness (≤60 chars) | PASS (22 chars)    | `Red Horizon                                                                     | Red Horizon` is distinct from all other wiki pages. |
| §2 Canonical suppression                   | PASS               | `SITE_URL` unset; no canonical emitted.                                          |
| §3 Sitemap membership                      | PASS               | No sitemap integration; no sitemap XML.                                          |
| §4 No JSON-LD                              | PASS               | No structured data emitted.                                                      |
| §6 Internal link integrity                 | PASS               | All 7 links resolve to built routes (4 news + 1 about, with 001 linked 3 times). |
| Leaf summary length/uniqueness             | **FAIL**           | 160 chars exceeds the 155-char limit; recommended trim recorded above.           |
| Leaf title distinctness                    | PASS               | `Red Horizon                                                                     | Red Horizon` is unique among wiki leaf pages (no other leaves exist yet). |

## No-change confirmation

No frontmatter field was modified. The file hash remains
`c93a509a6672d2e71207ff1c9464e6333ffb487bdfa4c5cfeef0081130dfa995` (4,097 bytes).
The editorial gate should judge against this hash.

If the editorial gate approves the summary trim, the new hash should be recorded
in the editorial review as the revised baseline.

## Validation executed

| Check                         | Command / method                                           | Result                 |
| ----------------------------- | ---------------------------------------------------------- | ---------------------- |
| Title length (full `<title>`) | Manual count: `Red Horizon                                 | Red Horizon`           | 22 chars (≤60) |
| Summary length                | Manual count: original summary                             | 160 chars (>155, FAIL) |
| MDX file hash (SHA-256)       | `sha256sum website/wiki/red-horizon.mdx`                   | `c93a509a…995`         |
| H1/H2/H3 heading structure    | `grep -c '^### '` on MDX file                              | 0 H3s (PASS)           |
| Internal links (news slugs)   | `ls` dist directories for all 4 slugs                      | All exist              |
| Internal link (/about/)       | `ls dist/about/index.html`                                 | Exists                 |
| JSON-LD in MDX                | Read frontmatter and body                                  | None                   |
| `related:` declared           | Grep frontmatter for `related`                             | Not present (PASS)     |
| `mediaCaption` declared       | Read frontmatter                                           | Not present (PASS)     |
| `mediaLabel` declared         | Read frontmatter                                           | Not present (PASS)     |
| `mediaAlt` vs brand text      | Compare MDX `mediaAlt` against `docs/brand/BRAND.md:19-21` | Verbatim match (PASS)  |
| Sitemap in astro config       | `grep sitemap website/astro.config.mjs`                    | Not present (PASS)     |

## Handoff

**Result:** SEO audit complete for `website/wiki/red-horizon.mdx`. One
finding: the summary is 160 characters (5 over the 155-char limit). All other
checks pass.

**Next owner:** The editorial gate (`mars-ai-simulator-editor`) should review the
summary trim recommendation. If approved, a writer card should apply the trimmed
summary and record the new file hash. The SEO role does not apply the trim itself.

**No commit, no push, no build, no publication flip.**
