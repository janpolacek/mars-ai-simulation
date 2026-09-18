# Source pack: wiki-rh-01-pathfinder

Card: t_bfcc9237 (Research source pack: wiki-rh-01-pathfinder).
Page: `website/wiki/rh-01-pathfinder.mdx`, section `vehicle`, slug `rh-01-pathfinder`.
Drafted bytes: 9,311 B, sha256 `5bd37229282da26433ba0ebcb308958d03d92bd3de1d1f0b384f029ae5e5d813`, `publication: draft`.

This pack restates `docs/vehicles/pathfinder/VEHICLE.md` so the editorial gate can verify the page claim-by-claim. The page writer (`t_18b3554b`) was dispatched without this pack (the writer recorded the gap and traced every claim directly to `VEHICLE.md` instead — that trace is in the writer handoff comment). The editorial gate's review uses this pack as the independent check.

The dossier currently lives at `docs/vehicles/pathfinder/VEHICLE.md` (sha256 `0cea455f…`) on disk; the page's `canonicalDocs:` frontmatter names the post-split path. The split lands via card `t_1476a18c` once both upstream gates (`t_00b65567`, `t_206bee14`) close. Until then, the tracked path is still `docs/vehicle/VEHICLE.md`. The frontmatter string is metadata only; the build does not import it.

## Released scope at step 003

The surface vehicle RH-01 Pathfinder and its design freeze were released by article 003 (`website/news/003-vehicle-design.mdx`, `publication: published`, `simulatedDate: 2029-07-13`). Article 002 (`website/news/002-payload-selection.mdx`) released the payload scope the rover carries. The wiki page may describe what the rover _is_ in a stable present; it links to both articles without paraphrasing their content into the wiki prose.

## Per-claim traceability (`docs/vehicles/pathfinder/VEHICLE.md`)

| Page claim                                                                                                                   | Source line in `VEHICLE.md`                                   | Released by                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------- |
| Designation: RH-01 Pathfinder; Red Horizon One's first surface vehicle                                                       | `:1, 7, 13`                                                   | article 003 (`:17, 24-26`)                        |
| Vehicle type: compact robotic Mars surveyor that maps terrain, investigates rocks, establishes safe routes                   | `:1, 13-19`                                                   | article 003 (`:25-26`)                            |
| "Instrument, not a character; instrument that has been made mobile"                                                          | `:13, 15-19`                                                  | article 003 (`:17-19`)                            |
| Design frozen (2026-09-17)                                                                                                   | `:7, 21` (the page omits the calendar date — wiki voice rule) | article 003 (`:69-71`)                            |
| Roughly two metres in class                                                                                                  | `:21`                                                         | article 003 (`:23-24`)                            |
| Low, broad rectangular equipment body; corners protected and modestly rounded; equipment mass close to chassis               | `:21, 24`                                                     | article 003 (`:24-25`)                            |
| Front-centre contact arm; rear plain sealed service panel                                                                    | `:22, 24`                                                     | article 003 (`:27-29`)                            |
| Warm-white body, matte ceramic-like finish; small muted red identification panels integrated into the body                   | `:33-46`                                                      | article 003 (`:29-32`)                            |
| Dark flat equipment deck; no text, flag, insignia or invented technical label                                                | `:38-47`                                                      | article 003 (`:31-32`)                            |
| Exactly six broad open-mesh wheels, front/middle/rear on each side; no seventh wheel, no track, no leg                       | `:59-83`                                                      | article 003 (`:35-39`)                            |
| Visible articulated suspension; links, pivots, hubs form continuous mechanical chains                                        | `:71-82`                                                      | article 003 (`:39-40`)                            |
| Short central stereo camera mast with one horizontal housing; two dark lenses                                                | `:85-94`                                                      | article 003 (`:41-42`)                            |
| Single front-centre contact arm with exactly two joints and one small contact tool                                           | `:98-110`                                                     | article 003 (`:43-47`)                            |
| Travel cradle built into the front body; arm nests inside while driving                                                      | `:103-115`                                                    | article 003 (`:43-47`)                            |
| Materials: matte ceramic-coated panels, subdued brushed metal, dark protected pivots, durable wheel mesh, recessed fasteners | `:118-127`                                                    | article 003 (`:48-51`)                            |
| Baseline studio appearance: clean, new, on a neutral white floor with broad soft light and faint grounded shadow             | `:129-135`                                                    | article 003 (`:51-54`)                            |
| Four operating appearance stages (baseline, early surface, mature, late mission)                                             | `:152-164`                                                    | article 003 (`:56-60`)                            |
| Science role: observational and methodical; traverses survey → target → approach → observe → record → next safe route        | `:146-150`                                                    | article 003 (`:61-67`)                            |
| Payload scope: panoramic and navigation imaging, weather observation, mineral and rock-context sensing, contact tool         | `:146-150` (read with article 002 scope)                      | article 002 (`:21-23`) and article 003 (`:61-67`) |

## Withheld — do not paraphrase

These are in `VEHICLE.md` but **not** in the released surface (the page writer did not paraphrase them; the editorial gate must confirm):

- No performance figure (speed, range, mass) unless released canon. `VEHICLE.md` does not publish a specific mass; only "roughly two metres in class". The page does not give a mass.
- No launch vehicle naming or step-005+ fact. No Ariane 64 (step 004).
- No `/docs/timeline/` reference.
- No real-institution claim.
- The four studio renders `front-left.png`, `rear-right.png`, `side-view.png`, `contact-arm.png` are **not placed**; only `canonical.png` is.
- The scene image `contact-arm-scene.png` is withheld — `scripts/guards.mjs` per-file rule fails the build on any reference to it.

## Media contract

- **Media key**: `vehicle-references` (already registered in `src/lib/media.ts:60`).
- **Plate**: `docs/vehicles/pathfinder/canonical.png` (sha256 `8dbb33d5…`, 1,448 × 1,086, 1,889,350 B), imported via `src/lib/assets.ts:9`. Approved by the editorial gate `t_1e84c815` for step 003.
- **Key requirements**: `plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false`. The page declares one `mediaAlt` (background-neutral wording that names the silhouette and carries the "Illustrative artwork, not mission photography; a fictional vehicle for a fictional programme; no real agency is named or implied" statement); no `mediaCaption`, no `mediaLabel`.

## Internal links

- The page links to `/news/003-vehicle-design/` (which first released the design freeze) and `/news/002-payload-selection/` (the payload scope). Both slugs are routed and `publication: published`.
- No `related:` list.

## Built-surface checks the editorial gate must re-measure

1. Title `RH-01 Pathfinder | Red Horizon` ≤60 chars (currently 30).
2. Summary ≤155 chars. The writer used a 154-char replacement; the brief's pinned 206-char summary is over budget.
3. No JSON-LD.
4. Canonical suppressed (`SITE_URL` unset).
5. No sitemap membership.
6. Internal links resolve.
7. Withheld-term scan clean: no Ariane 64, no real institution claim, no `/docs/timeline/` reference, no `simulatedDate`, no performance figures.

## Open questions / gaps

None blocking the editorial gate.

## Out of scope here

- Writing the wiki MDX (`writer` owns it).
- SEO metadata (`seo` owns it).
- Visual asset manifest (`visuals` owns it).
- Editorial review (`editor` owns it).
- Build/deploy (`dev` owns it).
- Editing `docs/vehicles/pathfinder/VEHICLE.md` or any other docs file.
- Re-deciding the dossier's withheld scope.
