# Release plan: wiki-001-vehicle (first wiki content)

## Status

**Planned — not yet released.** Gates A and B are answered (operator, 2026-09-17: both A — the
area and project wiki nodes are public at step 003 in publication STATE). The Gate C human
approval sentence is superseded by the 2026-09-17 role merge: releasability and canon
confirmation belong to `mars-ai-simulator-editor`, whose recorded release decision is what
licenses a flip.

This document records the planned release structure for the first wiki content
(RH-01 Pathfinder vehicle dossier) and the real-content validation handoff from
the SEO structural review (t_b2c55032). It does not publish anything.

---

## Canonical source

`docs/vehicle/VEHICLE.md` — approved, unconstrained dossier.

The vehicle wiki page may use this source directly via `canonicalDocs` frontmatter.

---

## Gate ledger

### Gate A — Landing-zone (area) node at step 003

**Card:** t_9b2a308d — **answered A** (operator, 2026-09-17): the landing-zone wiki page
(Asteria Field) IS public at step 003 in publication state.

Fail-closed default (superseded for this node): `/wiki/area/` returns 404.

### Gate B — Project node at step 003

**Card:** t_9b2a308d — **answered A** (operator, 2026-09-17, same card): the project wiki
page IS public at step 003 in publication state.

Fail-closed default (superseded for this node): `/wiki/project/` returns 404.

### Gate C — Canon confirmation and release decision for the first public wiki content

**Card:** t_c77be834 — assignee `mars-ai-simulator-editor` (reassigned 2026-09-17).

No human sentence is required. The merged editorial role confirms the pages against released
canon and records the release decision on the card. The sentence below is a recommendation that
role may apply to its own decision:

> "I approve the [vehicle/area/project] wiki page(s) for public release as of [date].
> Canon facts reflect approved scenario material only."

Fail-closed default: no wiki page is published; all pages remain `publication: draft`.

### Gate D — Canonical production origin (sitemap + canonical URL activation)

**No card yet — human decision required.**

Fail-closed default: no sitemap, canonical links suppressed.

Until a human authorises a canonical production origin:

- No sitemap XML is generated (zero integration present)
- Canonical links are suppressed across all routes including wiki
- Never infer `SITE_URL` from an existing deployment URL

Options:

- Authorise a canonical production origin → triggers bounded integration card
- Defer → no-sitemap state continues; canonical suppression unchanged

See `.agents/work/seo/wiki-sitemap-resolution.md` for full record.

---

## Real-content validation handoff (from t_b2c55032)

These checks are deferred from the structural review to this release plan.
They apply to every wiki page in the first wiki content graph after editorial approval.
They are NOT a separate SEO card — they are acceptance criteria on the wiki content pipeline.

### Check 1 — Titles and descriptions

| Field       | Rule                                                              | Enforcement                |
| ----------- | ----------------------------------------------------------------- | -------------------------- |
| Title       | distinct, non-empty, ≤60 chars including " \| Red Horizon" suffix | measured at content review |
| Description | non-empty, ≤155 chars, no silent factual truncation               | measured at content review |

If title exceeds 60 chars or description exceeds 155 chars: flag and return for
editorial replacement. Never silently truncate the writer's summary.

Schema currently allows empty strings and duplicate titles. A regression guard
(flag blank/duplicate/overlong output) is recommended but not yet created.

### Check 2 — Canonical links

- Canonical suppression: when `SITE_URL` is absent, `BaseLayout.astro` suppresses
  canonical links. This is verified correct behaviour.
- When an approved origin exists: canonical links activate automatically via `seo.ts`.

### Check 3 — Sitemap membership

- No sitemap integration exists today.
- Sitemap membership applies only when the origin-gated integration is separately reviewed
  and approved. Do NOT add wiki routes to any sitemap before that integration exists.

### Check 4 — JSON-LD

- Zero `application/ld+json` scripts for wiki pages.
- Origin approval alone does not establish eligibility for schema markup.
- Never emit Organisation markup for the fictional programme.

### Check 5 — Internal links (wiki and news)

- Wiki pages link to other wiki pages via `/wiki/[section]/[slug]/`
- Wiki pages link to published articles via `/news/<slug>/`
- A link to `/news/<slug>/` is only valid once that slug exists in `dist/`
- `selectRelatedWiki` resolves IDs against the published selection; handwritten MDX
  links are not protected by that helper — both must be rechecked at first release

### Check 6 — Selected-image alt

- The vehicle wiki page reuses the existing `vehicle-references` media key
  (1 plate, 1 alt — already defined in `src/lib/media.ts`).
- Alt text must describe the selected visible asset and satisfy its plate contract.
- No hidden names, equipment claims, or keyword stuffing.
- No OG image, alt string, or media key created for unwritten pages.

### Check 7 — Section labels (from SEO structural review)

| Route            | Current title               | Recommended title            | Recommended description                                                                              |
| ---------------- | --------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| `/wiki/`         | Wiki \| Red Horizon         | (keep)                       | Reference pages for Red Horizon, a fictional Mars exploration project.                               |
| `/wiki/area/`    | Area wiki \| Red Horizon    | Landing Zones \| Red Horizon | Published reference pages about landing zones in the fictional Red Horizon Mars exploration project. |
| `/wiki/vehicle/` | Vehicle wiki \| Red Horizon | Vehicles \| Red Horizon      | Published reference pages about vehicles in the fictional Red Horizon Mars exploration project.      |
| `/wiki/project/` | Project wiki \| Red Horizon | (keep)                       | Published reference pages about the fictional Red Horizon Mars exploration project.                  |

The section title changes are SEO recommendations from t_b2c55032, not yet applied.
They go to the merged editorial role (`mars-ai-simulator-editor`) for the label
decision, with the implementation on the dev card that applies them.

Proposed new strings are in `.agents/work/seo/wiki-strings.json`.

---

## Pipeline graph (first wiki content)

```
t_4e047758 (planner — wiki tree plan) [DONE]
  └─ t_5f4bee93 (dev — wiki collection + pages) [DONE]
       └─ t_b2c55032 (seo — structural review) [DONE]
            ├─ t_9b2a308d (editor — Gates A + B: area + project publication state) [DONE, answered A]
            ├─ t_c77be834 (editor — canon confirmation + release decision) [ready]
            └─ t_bb11a025 (planner — sitemap + first-release planning) ← this card
                 └─ [wiki content pipeline — created as the content cards promote]
                      ├─ [Gate D: origin decision — human]
                      ├─ [wiki content card: vehicle page draft]
                      ├─ [wiki SEO pass]
                      ├─ [wiki editorial review + release decision — editor]
                      └─ [wiki release — dev]
```

**Note:** No content pipeline cards are created here. They are created after:

1. Gate C is decided by the merged editorial role (release decision recorded on t_c77be834)
2. Gate D (origin decision) is resolved (triggers integration card if approved)

---

## What this plan does NOT deliver

- No wiki prose written
- No page metadata applied
- No sitemap integration
- No `SITE_URL` set or inferred
- No publication
- No release decision recorded yet (t_c77be834 is with the editorial role)
- No origin decision made (Gate D)

---

## Inputs this plan rests on

- Wiki tree plan: `.agents/work/briefs/wiki-tree-plan.md`
- SEO structural review: `.agents/work/seo/wiki-collection.md`
- SEO string recommendations: `.agents/work/seo/wiki-strings.json`
- Sitemap resolution: `.agents/work/seo/wiki-sitemap-resolution.md`
- Vehicle dossier: `docs/vehicle/VEHICLE.md`
- Existing gates: t_9b2a308d (answered A — editor), t_c77be834 (release decision with the editor)

---

_This record is working material, not canon. Canon lives in `docs/SCENARIO.md` and
`docs/brand/BRAND.md`. No content is published by this card._
