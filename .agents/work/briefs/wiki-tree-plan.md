# Wiki tree plan — Red Horizon

Stage: site information architecture (wiki) — **plan only**
Commissioned: 2026-09-17 by human story owner
Planner card: t_4e047758

---

## What the human asked for

*"Plan creation of proper wiki tree (automatically indexed when new wiki is added) → landing zone (area), project, vehicle."*

Three engineering properties:
1. **A tree, not a page.** Hierarchical reference material, top-level nodes: landing zone (area), project, vehicle.
2. **Self-indexing.** Adding a wiki page adds it to the index with no second edit.
3. **Public, therefore gated.** Same fail-closed publication rule and canon approval as articles.

---

## What exists to become the first nodes

| File | What it is | Can be published today? |
|------|-----------|----------------------|
| `docs/area/AREA.md` | Asteria Field dossier + three plates AF-01..03 | **No** — gated per SCENARIO.md:279; name/coordinates/plates released 2026-09-17 for article 001 only |
| `docs/vehicle/VEHICLE.md` | RH-01 Pathfinder dossier | **Yes** — RH-01 imagery gated per SCENARIO.md:277 (releases at step 003); dossier itself unconstrained |
| `docs/SCENARIO.md`, `docs/GENERAL.md`, `README.md` | Scenario and project framing | Reference, not published directly |
| `docs/payload/payload-sensor-illustration.png` | Payload illustration | Yes — approved in article 002 flow |

**Fourth node?** `payload` is a plausible fourth top-level node given the existing dossier set. Decision deferred to the human story owner. The wiki tree as planned has three nodes (area, vehicle, project); payload can be added as a fourth without a structural change.

---

## Content model

Collection: `wiki` in `website/wiki/`

**Frontmatter contract:**

```
title: string                          # public page title — required
section: z.enum(['area','vehicle','project'])  # top-level tree node, also URL segment — required; missing fails the build
publication: z.enum(['draft','published']).default('draft')  # same fail-closed default as news
order: z.number().int().nonnegative()  # sort within section index — required
summary: string                        # public page summary / meta description — required
related: z.array(z.string()).optional()  # IDs of related wiki pages (cross-links built from this)
canonicalDocs: z.string().optional()   # path in docs/ this page is derived from
media: string.optional()               # media key (validated by src/lib/media.ts; wiki uses same keys as news)
mediaAlt: string | string[].optional()
mediaLabel: string.optional()
mediaCaption: string | string[].optional()
```

Schema enforcement: missing `section` fails the build; missing `publication` defaults to `draft`.

**Media:** The vehicle wiki page reuses the existing `vehicle-references` key (1 plate, 1 alt, 0 captions — already defined in `src/lib/media.ts`). No new media key. No new site card for the key itself.

---

## Route shape

```
/wiki/                               → wiki root index (lists all published pages grouped by section)
/wiki/area/                          → area section index (lists published area pages)
/wiki/area/asteria-field/            → Asteria Field leaf page
/wiki/vehicle/                       → vehicle section index
/wiki/vehicle/rh-01-pathfinder/      → RH-01 leaf page
/wiki/project/                       → project section index
/wiki/project/<slug>/                → project leaf pages
```

**Derivation of index/nav:** `src/lib/wiki-query.ts` exports `selectPublicWiki(entries)` — same predicate (`publication === 'published'`) and sort (`order asc`) as `selectPublicNews`, keyed on wiki frontmatter. It is consumed by:
1. `pages/wiki/index.astro` — all published pages grouped by section
2. `pages/wiki/[section]/index.astro` — published pages for that section only
3. `pages/wiki/[section]/[slug].astro` — `getStaticPaths` maps the selection to routes

**Adding a page:** change exactly one file (the new `.mdx` page with `publication: published`). No edit to navigation, query, or index page.

---

## Navigation and SEO

**Navigation:** `src/lib/navigation.ts` adds `{ label: 'Wiki', href: '/wiki/' }`. Rendered in both header and footer (no `footerOnly`).

**Title convention:** `{page.data.title} | Red Horizon` — same suffix as articles.

**Canonical:** suppressed without approved `SITE_URL` — same behaviour as news. `website/src/lib/seo.ts` unchanged.

**Sitemap:** no sitemap integration exists in this revision (`package.json` has no `@astrojs/sitemap`, `astro.config.mjs` has no sitemap integration). Until a human authorises a canonical production origin, no sitemap XML will be generated and no wiki route will appear in one. A separately reviewed origin-gated integration is the planned path; it is not present today. Never infer `SITE_URL` from an existing deployment URL or emit made-up absolute URLs into a sitemap.

**Structured data:** none for wiki pages until a production origin is authorised. Keep `website/src/lib/seo.ts` behaviour.

**Internal linking:** wiki pages link to other wiki pages via `/wiki/[section]/[slug]/` and to published articles via `/news/<slug>/`.

---

## What PLAN.md Phase 2 item 1 commits to and what this card delivers

| Phase 2 item | Status |
|-------------|--------|
| Define MDX collections for news, wiki, mission-updates, media | **This card graph delivers wiki**; mission-updates and media out of scope |
| Require frontmatter for title, slug, state, timeline step, publish date, related entities, canonical refs, optional media | **Delivered** (section is the entity key; timeline step not added yet — human decision) |
| Implement listing, individual-page, tag/entity, and chronological views | **Listing and individual-page delivered; tag/entity and chronological views out of scope** |
| Private validation command | **Out of scope** |

---

## Card graph created

```
t_4e047758 (planner — this plan, completes now)
  └─ t_5f4bee93 (mars-ai-simulator-dev — wiki collection, query, index pages, nav, sitemap, tests)
       └─ t_b2c55032 (mars-ai-simulator-seo — SEO pass: metadata, nav, sitemap, internal linking)
            ├─ t_9b2a308d (mars-ai-simulator-editor — publication state: area + project nodes at step 003) [reassigned 2026-09-17]
            ├─ t_c77be834 (mars-ai-simulator-editor — canon confirmation + release decision for first wiki content) [reassigned 2026-09-17]
            └─ t_6f4f785e (mars-ai-simulator-planner — decision ledger: the editor's decisions in one place) [informational]
```

No scratch workspace. All cards: `--workspace dir:/home/janpolacek/Projects/mars-ai-simulator`. Site work and content work are separate cards. Dev card is one `website/` card at a time.

---

## Decisions required (authority changed 2026-09-17)

The Continuity redactor and Copy editor roles merged into `mars-ai-simulator-editor`, which now
holds the final word: **canon confirmation and releasability are the editorial role's decision, with
no human approval sentence required.** The three decisions below are therefore routed to that role.
What stays human-only is *advancing the release order*: publishing a node the released timeline step
does not yet allow is new canon and needs the human story owner's word. The fail-closed answer below
is available to the editor without any human input.

### Gate A — Landing-zone (area) node at step 003
**Source:** SCENARIO.md:279
**Fail-closed default:** `/wiki/area/` returns 404; no Asteria Field wiki page generated.
**Card:** t_9b2a308d — assignee now `mars-ai-simulator-editor`

Options:
- A: *"The landing-zone wiki page (Asteria Field) IS public at step 003 because [reason]."* — requires the human story owner to move the release order; the editor cannot grant this one.
- B: *"The landing-zone wiki page IS NOT public at step 003."* — the editor's own decision, and the fail-closed default.

### Gate B — Project node at step 003
**Fail-closed default:** `/wiki/project/` returns 404; no project wiki page generated.
**Card:** t_9b2a308d — assignee now `mars-ai-simulator-editor`

Options:
- A: *"The project wiki page IS public at step 003 because [reason]."* — same release-order limit as Gate A.
- B: *"The project wiki page IS NOT public at step 003."* — the editor's own decision, and the fail-closed default.

### Gate C — Canon confirmation and release of the first public wiki content
**Fail-closed default:** no wiki page is published; all pages remain `publication: draft`.
**Card:** t_c77be834 — assignee now `mars-ai-simulator-editor`

No human sentence is required. The merged editorial role confirms the pages against released canon
and records its release decision on the card — the sentence below is a recommendation it may apply
itself:

> *"I approve the [vehicle/area/project] wiki page(s) for public release as of [date]. Canon facts reflect approved scenario material only."*

---

## Recorded answers (operator, 2026-09-17 13:40 CEST)

The human story owner answered Gates A and B on card t_9b2a308d (selector A on
both). Gate C on card t_c77be834 was answered WITHHOLD under the old human-approval
rule; the 2026-09-17 role merge (Continuity redactor + Copy editor -> the
`mars-ai-simulator-editor` editor-in-chief, holding releasability and canon
confirmation with no human approval sentence) supersedes that requirement: the
publication flip is that role's release decision.
Recorded verbatim on t_9b2a308d, t_c77be834 and the ledger t_6f4f785e.
`docs/SCENARIO.md:279` was amended 2026-09-17 to record the wiki area-page
exception: the old "not published until the landing-preparation sequence allows
it" default is superseded for the wiki area page at step 003 in publication
**state** only — the publication **flip** is now the merged editorial role's
recorded release decision.

Net effect on this plan:

- `/wiki/area/` and `/wiki/project/` are no longer absent nodes at step 003 in
  publication STATE: the area (Asteria Field) and project wiki pages may be
  authored and routed through the editorial chain.
- The publication FLIP for any wiki page is decided and recorded by
  `mars-ai-simulator-editor` on the release card: canon confirmed against
  released material, exact public scope stated, and the flip applied (or pushed by
  the dev card). No human approval sentence is required. A page whose canon cannot
  be confirmed — or which would need a later timeline step public — is withheld
  instead, and only then does the human story owner's release-order call apply.
- Landing-design material (ellipse geometry, P0 touchdown zone, science-zone
  plan, hazard inventory, traverse logic, AF-* unit identifiers) stays
  withheld for prose, alt text and captions per SCENARIO.md:279 H1 decision
  2026-09-17 option i. Only already-released material (name, centre
  coordinates, plates AF-01/AF-02/AF-03 for article 001) may be reused in the
  area wiki page.
- The three downstream wiki content cards (vehicle, area, project) are
  created with the withhold rules written into their bodies as the fail-closed
  default for their release step.

---

## What this plan does NOT deliver

- mission-updates collection (Phase 2 item 1)
- tag/entity views (Phase 2 item 3)
- chronological views (Phase 2 item 3)
- private validation command (Phase 2 item 4)
- writing any wiki prose
- publishing anything
- changing `docs/timeline/` or `docs/SCENARIO.md`
- the step-003 vehicle article flow (parent card t_20728027)
