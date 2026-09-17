# Wiki sitemap resolution — t_bb11a025

Card: t_bb11a025. Owner: mars-ai-simulator-planner. Date: 2026-09-17.
Status: decision recorded; no site edit applied.

## Finding

Fresh build at 72743e5 (`env -u SITE_URL npm run build`) produced zero sitemap XML.
Confirmed by `.agents/work/seo/wiki-audit.py` on the dist tree:

- `package.json`: no `@astrojs/sitemap` dependency
- `astro.config.mjs`: no sitemap integration
- `dist/`: no `sitemap.xml`

The plan `.agents/work/briefs/wiki-tree-plan.md` line 88 stated:
> "Astro's `@astrojs/sitemap` integration runs over all generated routes."

This is **incorrect for the current revision** — it describes a planned integration that does not
exist. The premise has been corrected in `wiki-tree-plan.md` as part of this card.

## SEO recommendation (from t_b2c55032, accepted here)

While the canonical production origin is unapproved, a sitemap XML would emit
made-up absolute URLs (e.g. `https://example.com/wiki/` with no verified domain).
SEO recommends a **deliberate no-sitemap state** during this period.

Once a human authorises a canonical production origin, a separately reviewed
origin-gated sitemap integration should be added:

1. Human approves the canonical production URL origin (e.g. `https://redhorizon.example/`)
2. A bounded implementation card adds `@astrojs/sitemap` integration to `astro.config.mjs`
   and sets `SITE_URL` to the approved origin
3. Integration is reviewed before it ships

**Never infer `SITE_URL` from an existing deployment URL. Never emit made-up absolute URLs.**

## Human decision needed

No deployment or provider action is required. The decision is whether to authorise a
canonical production origin for sitemap purposes, which also affects canonical URL
generation across the site.

If the human approves an origin, the integration card (see below) is unblocked.
If the human does not approve, the no-sitemap state remains — the site works
correctly without one.

## Planned integration card (not yet created)

Once an origin is approved, one bounded implementation card should:

- Add `@astrojs/sitemap` to `package.json`
- Add the integration to `astro.config.mjs`
- Set `SITE_URL` to the approved origin
- Include tests that verify: published routes ARE in the sitemap, and draft,
  error, and verification routes are NOT
- Not include any new canonical URL behaviour beyond what `seo.ts` already does

This card is NOT created here; it is recorded as a dependency on the origin decision.

## Canonical suppression status (cross-reference)

Without `SITE_URL`, `BaseLayout.astro` and `canonicalUrl` suppress canonical links
across all routes including wiki. This matches the news behaviour. Once an origin
is approved, canonical links activate automatically — no additional code change needed.

## What this card does NOT do

- No sitemap dependency added
- No `SITE_URL` set or inferred
- No deployment or provider action
- No wiki publication
- No SEO work card dispatched back to SEO

## Sources

- `.agents/work/seo/wiki-collection.md` (t_b2c55032) — evidence boundary, acceptance checklist,
  SEO recommendation
- `.agents/work/seo/wiki-audit.py` — dist inventory
- `wiki-tree-plan.md` — corrected premise (this card)
- `website/package.json`, `website/astro.config.mjs` — confirmed absent sitemap integration
