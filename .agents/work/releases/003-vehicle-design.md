# Release record: 003-vehicle-design

## Article

| Field | Value |
|-------|-------|
| Slug | `003-vehicle-design` |
| Title | _(Gate 3 — to be confirmed)_ |
| Author | _(Gate 3 — to be confirmed)_ |
| Timeline step | `003-vehicle-design` |
| Canonical source | `docs/vehicle/VEHICLE.md` |
| Status | `publication: draft` |

---

## Gate ledger

**Authority changed 2026-09-17** (operator instruction): the Continuity redactor and Copy editor
roles merged into `mars-ai-simulator-editor`, which holds the final word — canon confirmation and
releasability are its decision, with no human approval sentence required. The template sentences
below are therefore recommendations it may apply itself; each gate is recorded as the editor's
decision on the editorial gate card, and the release decision is its own recorded sentence.

### Gate 1 — Canonical reference approval

_(editor's decision — confirm the plate source against released canon and record it)_
> "003 canonical references approved for publication: `canonical.png`" — OR — a different approved studio reference, or the full set

**Fail-closed default:** no `media` key; amber `news-placeholder`.

Plate source candidate: `docs/vehicle/canonical.png` (primary studio view).

---

### Gate 2 — Canon and release approval

_(editor's decision — this is the release decision; record it on the editorial gate card)_
> "Article 003-vehicle-design canon and release: approved" — OR — "Article 003-vehicle-design canon and release: not approved"

**Fail-closed default:** `publication: draft`; no route; not listed.

---

### Gate 3 — Public title and byline

_(editor's decision — set the public title and byline the package ships with)_
> "003 public title: [title]" and "003 author: [name or 'anonymous']"

**Fail-closed default:** title stays as-is in frontmatter; byline absent.

---

## Containment checklist

**The article may state:**
- [ ] RH-01 Pathfinder is the first surface vehicle
- [ ] Its design reflects dust, terrain, power, communication delay, remote operations
- [ ] Body, wheels, suspension, mast, arm, rear panel, materials from VEHICLE.md
- [ ] Four operating-appearance stages from VEHICLE.md §4
- [ ] Science role: panoramic and navigation imaging, weather, mineral/rock sensing, close-contact tool
- [ ] "Design freeze" does not imply built or launch-ready

**The article must NOT state:**
- [ ] Any launch vehicle (step 004)
- [ ] Any launch or landing date
- [ ] Any landing site or surface operations detail
- [ ] Any Asteria Field material (name, coordinates, maps, traverse logic, hazard inventory)
- [ ] Any damage, discovery, or late-mission event
- [ ] Any performance statistics (speed, range, duration, payload mass)
- [ ] Any step-004 through step-011 fact

---

## Media key decision (binding)

| Field | Value |
|-------|-------|
| Key | `vehicle-references` |
| Plate count | 1 |
| Alt text required | yes |
| Captions required | no |
| Label required | no |
| Plate source | `docs/vehicle/canonical.png` |
| Label | `RH-01 Pathfinder · studio reference` |

Approved studio references in `docs/vehicle/`:
- `canonical.png` — primary studio view
- `front-left.png` — front-left three-quarter
- `side-view.png` — side profile
- `rear-right.png` — rear three-quarter
- `contact-arm.png` — contact arm detail

`contact-arm-scene.png` is a scene image — requires Gate 1 approval before any editorial scene image.

---

## Pipeline graph

| # | Card | ID | Assignee | Artifact |
|---|------|----|----------|----------|
| 1 | Research source pack | `t_1b86d4e9` | mars-ai-simulator-planner | `.agents/work/sources/003-vehicle-design.md` |
| 2 | Draft article | `t_f54d1943` | mars-ai-simulator-writer | `website/news/003-vehicle-design.mdx` |
| 3 | SEO pass | `t_e48168fa` | mars-ai-simulator-seo | `.agents/work/seo/003-vehicle-design.md` |
| 4 | Create visual assets | `t_72fda1ae` | mars-ai-simulator-visuals | `.agents/work/assets/003-vehicle-design/assets.md` |
| 5 | Editorial final gate (continuity + editorial + release decision) | `t_1e84c815` | mars-ai-simulator-editor | `.agents/work/reviews/003-vehicle-design.md` + `.agents/work/continuity/003-vehicle-design.md` |
| 6 | Build and deploy | `t_accf6f7a` | mars-ai-simulator-dev | deployment record on card |
| 7 | Release: 003-vehicle-design | `t_dcd80a99` | mars-ai-simulator-editor | `.agents/work/releases/003-vehicle-design.md` |

**Pipeline edges:** RESEARCH → DRAFT → SEO → IMAGES → REVIEW (continuity + editorial + release decision) → DEPLOY → RELEASE

The continuity stage card `t_82680639` was created before the 2026-09-17 role merge and is now
assigned to `mars-ai-simulator-editor`; it is the continuity half of the merged gate, and the
release decision is recorded on the editorial gate card. The retired `mars-ai-simulator-continuity`
profile no longer exists.
