# Source pack: wiki-asteria-field

Card: t_91cca417 (Research source pack: wiki-asteria-field).
Page: `website/wiki/asteria-field.mdx`, section `area`, slug `asteria-field`.
Drafted bytes: 8,739 B, sha256 `fdc5a902865ef2d9d970b68b373201517ceaad560ed2123b251b55d0cec8eeed`, `publication: draft`.

This pack restates `docs/area/AREA.md` so the editorial gate can verify the page claim-by-claim. The page writer (`t_10fc616a`) was dispatched without this pack (the writer recorded the gap and traced every claim directly to `AREA.md` instead — that trace is in the writer handoff comment). The editorial gate's review uses this pack as the independent check; if a page claim is not in this pack, it is a finding.

## Landing-design withhold — restated at the top

`docs/SCENARIO.md:279`, H1 decision 2026-09-17 option i. **No landing-design fact** may appear in the wiki area page's prose, alt text, or captions: no ellipse geometry, no P0 touchdown zone, no science-zone plan, no hazard inventory, no traverse logic, no AF-* unit identifier. Only already-released material may be reused:

- the scenario designation **Asteria Field** (released 2026-09-17 for article 001)
- the planning centre coordinates **17.80°S, 332.20°E (27.80°W)** (released)
- plates AF-01 / AF-02 / AF-03 (released for article 001; the plate images may carry the landing-design depiction)
- surface mission lifetime (two Mars years / 1,374 Earth days) — **article-001 reuse only**; the editorial gate must clear it for wiki reuse before this page uses it

Everything else in `docs/area/AREA.md` (planning envelope, local operations frame, executive brief material beyond the released set, any future surface or operations plan, geology, terrain classes, hazards, science zones, traverse logic) stays withheld and may not be paraphrased, summarised or implied.

## Per-claim traceability

| Page claim                                                                                                                                 | Source line in `AREA.md`                                                | Released by                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Scenario designation: Asteria Field                                                                                                        | `:11`                                                                   | article 001 (`news/001-project-announcement.mdx:53-56`)                                                                                        |
| Designation type: fictional Red Horizon operational region                                                                                 | `:12`                                                                   | article 001 (`:53-56`)                                                                                                                         |
| Real parent geography: Margaritifer Terra, Mars                                                                                            | `:13, 46-49`                                                            | article 001 (`:46-51` + USGS Gazetteer)                                                                                                        |
| Planning centre: 17.80°S, 332.20°E (27.80°W)                                                                                               | `:14`                                                                   | article 001 (`:54`)                                                                                                                            |
| Planning envelope: 12.5–24.0°S, 327.0–338.0°E                                                                                              | `:15`                                                                   | article 001 (`:55-56`)                                                                                                                         |
| Local operations frame: 8 × 6 km, centred on the planning centre                                                                           | `:16`                                                                   | article 001 (`:56`)                                                                                                                            |
| Working revision: AF-0.2                                                                                                                   | `:17` (date omitted in the page)                                        | article 001                                                                                                                                    |
| Real Mars context, USGS Gazetteer, regional geologic maps                                                                                  | `:46-64` (citations to USGS SIM 3209, SIM 3489, NASA hydrated minerals) | article 001                                                                                                                                    |
| Three evidence classes (resistant basement, basin-margin material, paleochannel benches)                                                   | `:28-34`                                                                | article 001 (`:36-40`)                                                                                                                         |
| Mission does not search for living organisms or claim evidence of life                                                                     | `:36-40`                                                                | article 001 (`:42-44`)                                                                                                                         |
| Three plates AF-01 / AF-02 / AF-03 — locator, regional context, local operations frame — are generated visualizations, not orbital imagery | `:227-249`                                                              | article 001 (`mediaAlt` lines 12-14, `mediaCaption` lines 16-18, `mediaLabel` line 19)                                                         |
| Plate imagery provenance: generated 2026-09-16 for Red Horizon scenario planning                                                           | `:244-249`                                                              | article 001 (`:59-60` — "The planning plates released with this announcement show that region as it is currently drawn for mission planning.") |

## Withheld — do not paraphrase

These are in `AREA.md` but **not** released for this wiki page (the dossier itself says so at `:18-19, 251-263`):

- Landing ellipse geometry (6.4 × 3.2 km, 078°/258°) — `AREA.md:148-156`
- Inner touchdown zone (2.4 × 1.2 km in the western half) — `AREA.md:151-153`
- Science zones P0, S1, S2, S3, S4 and their priority — `AREA.md:191-204`
- Baseline traverse sequence (P0 → S4 → S1 → S2; fallback P0 → S4 → S1 → P0) — `AREA.md:200-204`
- Engineering hazards (mantle over hardpan, block fields, bench breaks, cross-slope, dust/visibility) — `AREA.md:174-188`
- Operating rules (12° sustained, 15° stop threshold, 75 m stand-off) — `AREA.md:169-188`
- Communications and operations (no permanent surface relay, comms-safe pause point) — `AREA.md:211-225`
- AF-* unit identifiers (AF-H0, AF-B1, AF-C2, AF-L3, AF-E4) — `AREA.md:97-105`
- Mineral targets (phyllosilicate-bearing, sulfate, iron-bearing phases) — `AREA.md:114-126`
- Terrain classes (H0, B1, C2, L3, E4) — `AREA.md:159-167`
- Working geological history (basement, weathering, deposition, mantling) — `AREA.md:92-112`
- Sources block — `AREA.md:266-276` (cite where the dossier says to, never as endorsement)

The dossier's "Release boundary" section (`AREA.md:254-263`) is the canonical source for this list; the page names withheld material as a gap rather than paraphrasing it.

## Media contract

- **Media key**: `asteria-plates` (already registered in `src/lib/media.ts:40`).
- **Plates** (resolved by `src/features/news/media.ts:27-44`): AF-01 (`asteria-field-01-mars-locator.png`, 1,448 × 1,086, 1,889,350 B... actually need to verify in `assets.ts`), AF-02, AF-03 — same registry.
- **Key requirements**: `plateCount: 3, altCount: 3, captionCount: 3, requiresLabel: true`. The page's `mediaAlt:` must declare three entries in plate order; `mediaCaption:` three entries; `mediaLabel:` one string.
- **Provenance**: "Generated visualization for Red Horizon scenario planning, 2026-09-16. Not orbital imagery." — registered on the set, printed on every caption by `plateCaptionText` (`src/features/news/plates.ts`); do not duplicate.
- **Plate labels** (per `src/features/news/media.ts:35-44`): `AF-01 · Mars locator`, `AF-02 · Regional context`, `AF-03 · Local operations frame`. The AF-03 `captionNote`: "The local-operations frame is fictional scenario planning, not a confirmed operational plan." This note is registered on the plate and printed on the caption — do not duplicate.

## Internal links

- The page may link to `/news/001-project-announcement/` (which first released the name, centre coordinates and plates) for navigation. The article's slug is a real, routed page (`publication: published`, `simulatedDate: 2026-10-12`). Verify in `website/dist/news/001-project-announcement/index.html` before claiming the link.
- No other internal wiki links this round (no sibling wiki pages exist yet).
- No `related:` list.

## Built-surface checks the editorial gate must re-measure

The deferred checks the SEO structural review passed through to the first wiki content release (`.agents/work/seo/wiki-collection.md` §1, §3, §4, §6):

1. Title `Asteria Field | Red Horizon` ≤60 chars (currently 26). The wiki leaf route prepends the title verbatim; the layout appends the suffix.
2. Summary ≤155 chars. The writer used a 149-char replacement; the brief's pinned 173-char summary is over budget and would fail the SEO gate.
3. No JSON-LD on the page (no `application/ld+json` script in the rendered HTML).
4. Canonical suppressed (with `SITE_URL` unset, `BaseLayout.astro:44-72` suppresses canonical links).
5. No sitemap membership (no `@astrojs/sitemap` integration).
6. Internal links resolve to routes the site renders.
7. Withheld-term scan clean: no `AF-H0`/`AF-B1`/`AF-C2`/`AF-L3`/`AF-E4`, no `P0`, no `S1`-`S4`, no ellipse value, no `/docs/timeline/` reference, no Ariane 64, no real institution claim.

## Open questions / gaps

None blocking the editorial gate. The dossier's withheld parts are named as a gap in the page's "Release boundary" section (per the writer's traceability table).

## Out of scope here

- Writing the wiki MDX (`writer` owns it).
- SEO metadata (`seo` owns it).
- Visual asset manifest (`visuals` owns it).
- Editorial review (`editor` owns it).
- Build/deploy (`dev` owns it).
- Editing `docs/area/AREA.md` or `docs/SCENARIO.md`.
- Re-deciding the landing-design withhold (it is a locked decision).
