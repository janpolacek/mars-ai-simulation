# Editorial review: 010-one-mars-year

- Card: `t_b3e19a8e` — editorial final gate + continuity (one pass), stage review
- Article: `website/news/010-one-mars-year.mdx`
- Route once published: `/news/010-one-mars-year/`
- Timeline step: `010-operations-and-discovery` — page 3 of 4
- Article SHA-256 at verdict: `27c98ad080bd319ff75b0c8184378e4d739b77d6148fc96cb269b6b40d332ec9`
- Review table run: 2026-09-19 (session date); probe timestamps UTC 2026-09-19T18:06Z, rerun at ~2026-09-19T18:08Z
- Revision history: first pass. Supersedes no prior hash (file is new this chain).
- Continuity verdict: `.agents/work/continuity/010-one-mars-year.md` — `continuity clear`

## Final status

**approved** — release decision recorded on card `t_b3e19a8e` (see card comment).

## Simulated record date

- **Value:** `simulatedDate: 2033-08-03` (assigned into the article frontmatter by
  this gate, the only change from the writer's draft).
- **Milestone line:** `docs/SCENARIO.md:203` — `3 August 2033 | One Mars year of
  surface operation completed`.
- **Checks:** implies no unreleased event; not readable as a launch/landing/other
  withheld mission date; contradicts no published sentence; keeps the news chain in
  timeline order (008 2031-09-16 → 009-p1 2031-09-17 → 009-egress 2031-09-23 →
  009-first-drive 2031-09-30 → 010-first-sample 2031-10-31 → 010-stratigraphy
  2032-04-18 → 010-one-mars-year 2033-08-03).
- **Surface:** the pipeline's own module renders `Simulated record date · 3 August
  2033` under the in-fiction label (`src/lib/simulated-date.ts`); nothing
  machine-readable is derived (`src/lib/seo.ts`). The dev card `t_aafb44aa`
  verifies the built page states it after the flip.

## Review table

| Area                                  | Result | Notes and evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Citations / claim grounding           | PASS   | Every material claim traces to a locked SCENARIO row or a published article (chain: 008, 009-egress, 009-first-drive, 010-first-sample, 010-stratigraphy; design frame 001:69-72; ops vocabulary 003/rh-01-pathfinder/002). No claim requires unpublished canon. Source pack C1–C12 verified against current bytes.                                                                                                                                                                  |
| Links                                 | PASS   | All internal links are released public routes (`/news/008-landing/`, `/news/009-egress/`, `/news/010-first-sample/`, `/news/010-stratigraphy/`, `/news/003-vehicle-design/`, `/news/002-payload-selection/`, `/news/005-launch/`, `/wiki/vehicle/rh-01-pathfinder/`, `/wiki/area/asteria-field/`, `/wiki/project/red-horizon/`, `/#mission`). No working paper or private path.                                                                                                      |
| Coherence                             | PASS   | Anniversary framing follows the released record-chain style; sections flow (milestone → presence/durability → science so far → routine ops → what comes next → disclosure); no contradiction with any published sentence.                                                                                                                                                                                                                                                            |
| Voice / grammar                       | PASS   | Red Horizon voice maintained: informed, candid, modest, specific. No grandiosity, no marketing language, no unexplained acronyms; disclosure present and prominent (top-of-page sentence + closing italic + Ariane non-endorsement).                                                                                                                                                                                                                                                 |
| Image placement / captions / alt text | PASS   | `media: vehicle-references` (existing key, `plateCount 1, altCount 1, captionCount 0, requiresLabel false`); exactly one non-empty `mediaAlt`, no caption — `newsMediaIssues()` returns NONE (probe). Alt is studio-reference meaning for the reused plate `docs/vehicles/pathfinder/canonical.png` (SHA-256 re-verified `8dbb33d5…`): clean baseline, no dust/wear/Asteria-Field/after-Mars-year claim, no date. Vision read of the plate is consistent with the alt's composition. |
| Metadata / schema                     | PASS   | Frontmatter validates against `src/content.config.ts` (title/category/status/publication/summary/linkLabel/order/accent/media/mediaAlt). `simulatedDate: 2033-08-03` accepts both schema shapes (js-yaml yields a Date; normalises to `2033-08-03`). `publication: draft` — flip is the dev card's scope.                                                                                                                                                                            |
| Published surface                     | PASS   | Probe (read-only, no build) shows the draft route `/news/010-one-mars-year/` is absent from `dist/` route list — the body is not public. `scanSourceForGatedReferences()` over the website source reports NO offences. HEAD == origin/main == `797f45a`; the article is untracked (draft); no accidental deployment path. Date label verified via the real module (`Simulated record date · 3 August 2033`).                                                                         |
| Spoiler / confidentiality             | PASS   | Forbidden-token scan clean (probe): `sol\b`, `scan target`, `wheel route`, `second Mars year`, `docs/timeline`, private instrument names, power/thermal facts, rows `:204`–`:207` dates/names, step 011 events — absent. Only `confirmed`/`habitable`/`fossil` hits are the released stated-limitation sentence. No private timeline text reproduced.                                                                                                                                |
| SEO / metadata quality                | PASS   | Search intent honest and descriptive ("how long has the Red Horizon rover been operating on Mars" / "one Mars year on Mars"); title 55 chars; summary states the milestone + date; heading outline scannable; internal links reinforce the record chain. Note, non-blocking: writer's handoff says summary 148 chars; measured 111 — immaterial, nothing gates on the number.                                                                                                        |
| Accessibility                         | PASS   | Semantic headings, alt text non-empty and descriptive, plain language, no text-in-image.                                                                                                                                                                                                                                                                                                                                                                                             |

## Evidence files

- Probe script (outside repo): `/tmp/review-010-one-mars-year.mjs`
- Probe results recorded in this record and in the continuity record
- Asset manifest: `.agents/work/assets/010-one-mars-year/assets.md`
- Source pack: `.agents/work/sources/010-one-mars-year.md`
- Image index: `.agents/work/image-index.md` (row: `canonical.png` released, placed on 003)

## Release decision

**Release granted.** Exact public scope: `website/news/010-one-mars-year.mdx`
(route `/news/010-one-mars-year/`), frontmatter `publication: draft → published`
applied by the dev card `t_aafb44aa`, carrying `simulatedDate: 2033-08-03`
(drawn from `docs/SCENARIO.md:203`, milestone line `3 August 2033 | One Mars year
of surface operation completed`) — a third public placement of the released
`vehicle-references` plate (`docs/vehicles/pathfinder/canonical.png`, SHA-256
`8dbb33d5…`) as the commemorative visual, with the studio-reference alt. Article
hash at the moment of this decision: `27c98ad080bd319ff75b0c8184378e4d739b77d6148fc96cb269b6b40d332ec9`.
Condition attached: none beyond the standing chain requirements — the dev card must
build, run the guard, verify the built page states the date under the in-fiction
label, and push its own scoped change with the release decision recorded first
(recorded on card t_b3e19a8e before this completion).

## Handoff

- Next owner: `mars-ai-simulator-dev` (card `t_aafb44aa`) — build, guard, preview,
  flip `publication: draft → published`, verify the built page states `Simulated
  record date · 3 August 2033` under the in-fiction label, commit `t_aafb44aa:
  publish 010 one-Mars-year update`, push, verify the live URL.
- No corrective card required. No human approval sentence required: this gate is
  the release decision (role authority, merged editorial role, 2026-09-17).
- Outstanding after this card: dev flip + live verification only.
