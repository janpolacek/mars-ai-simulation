# Continuity record: wiki-rh-01-pathfinder

Card: `t_d6ec1166` (Editorial final gate: wiki-rh-01-pathfinder). Role: `mars-ai-simulator-editor`.
Mission-timeline step: **`003-vehicle-design`** — the step that released the RH-01 Pathfinder dossier, its
silhouette, and the wheel / mast / arm constraints. No step-004+ fact, and no step-002 fact beyond what the
published articles already carry, may appear here.

Verdict recorded **2026-09-17 20:25 CEST** by `mars-ai-simulator-editor`.

**Verdict: `continuity clear`** — the page agrees with the released step and the locked scenario, carries no
withheld material, and is spoiler-safe. This record is the continuity half of the merged gate; the release
decision is in `.agents/work/reviews/wiki-rh-01-pathfinder.md` and on the card.

## 1. The package under this verdict

All values re-measured immediately before this record was written (2026-09-17, 20:20–20:25 CEST), not carried
from an earlier snapshot.

| Artifact                          | Path                                                  | Bytes     | SHA-256                                                            |
| --------------------------------- | ----------------------------------------------------- | --------- | ------------------------------------------------------------------ |
| Page under review (MDX)           | `website/wiki/rh-01-pathfinder.mdx`                   | 9,311     | `5bd37229282da26433ba0ebcb308958d03d92bd3de1d1f0b384f029ae5e5d813` |
| Placed plate (already released)   | `docs/vehicles/pathfinder/canonical.png`              | 1,889,350 | `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267` |
| Page `mediaAlt` string (verbatim) | frontmatter `mediaAlt`                                | 451       | `06501e8ff6a463e2f1307f4290e0ebcc60e0a193805d2d25a9894cc5ee6eda3e` |
| Canonical dossier cited by page   | `docs/vehicles/pathfinder/VEHICLE.md`                 | 8,985     | `0cea455f…` (path exists on disk; see §6)                          |
| Source pack                       | `.agents/work/sources/wiki-rh-01-pathfinder.md`       | 6,833     | —                                                                  |
| Asset manifest (reuse only)       | `.agents/work/assets/wiki-rh-01-pathfinder/assets.md` | 29,870    | `1a02b50df7acc2fc1fc8115ec669ea2e59faa8f3fe911771316fdef494bb7c37` |
| Brief                             | `.agents/work/briefs/wiki-content-plan.md`            | —         | —                                                                  |

Page mtime `2026-09-17T20:12:09+02:00`. The page has moved once since the SEO pass measured it
(`c6202ad5…` → `5bd37229…`, same 9,311 B: carried finding F1, §8); every reading below is against
`5bd37229…`, the bytes the build card will flip.

`docs/vehicle/` no longer exists on disk. The styled, uncommitted `docs/vehicle/ → docs/vehicles/` split
stages `R100` renames for the dossier and all six plates, so the page's `canonicalDocs:` string and the
media registry's import both name the post-split path and resolve on disk. The split is an operator change
outside this card's scope (carried finding F3, §8).

## 2. Chronology and release order

| Check                                                    | Result                                                                                                                                                                                                            |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The page refers only to material released at step ≤ 003  | PASS. Every body claim traces to `docs/vehicles/pathfinder/VEHICLE.md`, released at step 003 (article 003, `simulatedDate: 2029-07-13`), or to the payload scope article 002 published.                           |
| The two `/news/` links point at published article routes | PASS. `/news/003-vehicle-design/` and `/news/002-payload-selection/`, both `publication: published`; both route live (200, 11,380 B and a routed article file — §6).                                              |
| No inverted chronology inside the page                   | PASS. The page is a reference entry in a stable present; it narrates no event sequence and dates nothing.                                                                                                         |
| Released material is not un-released by this page        | PASS. Nothing in the page narrows, contradicts or supersedes a published sentence.                                                                                                                                |
| The page does not stale a published negative             | PASS. Article 003's dated negatives ("No launch vehicle has been named…", `simulatedDate: 2029-07-13`) are statements on their own record date and are unaffected: this page names no launcher, no date, no site. |

## 3. Canon consistency — claim by claim

Every material claim was traced against the canonical dossier (`docs/vehicles/pathfinder/VEHICLE.md`) and
against the released article that first published it. The source pack's table (`.agents/work/sources/…` §"Per-claim
traceability") was used as a checklist, and the dossier itself was read directly line by line — the pack is a
restatement of the dossier rather than independent research, so the dossier is the authority here.

| #  | Page claim (abridged)                                                                                                               | Dossier line  | Released by                                | Verdict |
| -- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------ | ------- |
| 1  | RH-01 Pathfinder is Red Horizon One's surface rover, on the first mission                                                           | `:1, 3, 13`   | SCENARIO `:17`; articles 001, 003          | PASS    |
| 2  | Compact robotic Mars surveyor: maps local terrain, investigates rocks in context, establishes safe routes for later targets         | `:3-4, 13-19` | article 003 `:17-19`                       | PASS    |
| 3  | Designation RH-01; "an instrument that has been made mobile", not a car / miniature tank / spaceplane / crew vehicle                | `:15-19`      | article 003 `:19-20`                       | PASS    |
| 4  | The design is frozen; it reflects surface constraints (dust, terrain, power, comms delay, remote operation)                         | `:6-7, 27-30` | article 003 `:20-22, 69-71`                | PASS    |
| 5  | Roughly two metres in class; low broad body; mass close to the chassis; corners protected and modestly rounded                      | `:19-25`      | article 003 `:23-25`                       | PASS    |
| 6  | Front is the science end with the stowed arm; quiet rear service end; consistent front-to-rear orientation                          | `:22-25`      | article 003 `:26-28`                       | PASS    |
| 7  | Warm white matte ceramic-like housing; muted red identification panels integrated, not stripes / warning graphics / logo            | `:34-40`      | article 003 `:28-30`                       | PASS    |
| 8  | Dark flat upper equipment deck; not a solar field / cockpit roof / open platform; no text, flag, insignia, invented label           | `:42-46`      | article 003 `:30-32`                       | PASS    |
| 9  | Narrow seams, recessed fasteners; no windows, hatch, cockpit, intake, fins, fuel tanks, loose wiring; dark regions explained        | `:48-54`      | article 003 `:30-32`                       | PASS    |
| 10 | Exactly six broad open-mesh wheels, front/middle/rear per side; no seventh wheel, track or leg                                      | `:58-63`      | article 003 `:34-39`                       | PASS    |
| 11 | Each wheel load-bearing: circular hub, mesh face, dark inner structure; mesh not spokes / tread / toy lattice                       | `:65-69`      | article 003 `:34-36`                       | PASS    |
| 12 | Visible articulated suspension; continuous mechanical chains; travel clears small stones without body contact                       | `:71-76`      | article 003 `:36-38`                       | PASS    |
| 13 | Six-wheel arrangement readable from multiple angles; plausible working height, grounded contact                                     | `:78-81`      | article 003 `:38-39`                       | PASS    |
| 14 | Short central mast on a compact mount; one horizontal stereo housing, pair of dark lenses; not a head; not a tower                  | `:85-94`      | article 003 `:41-43`                       | PASS    |
| 15 | One front-centre contact arm, exactly two joints, one small tool; not an excavator / crane / drill / weapon                         | `:98-102`     | article 003 `:43-44`                       | PASS    |
| 16 | Travel configuration: two links nest in a shallow front cradle; tool secured; assembly below the mast-base height                   | `:104-110`    | article 003 `:44-47`                       | PASS    |
| 17 | Cradle is a practical restraint, distinct from the science arm, holding no second instrument                                        | `:112-114`    | article 003 `:46-47`                       | PASS    |
| 18 | Rear: plain sealed service panel, no second arm / exhaust / cargo rack / ladder / ornamental engine detail                          | `:118-121`    | article 003 `:27-28`                       | PASS    |
| 19 | Materials: matte ceramic panels, brushed metal on the arm, dark pivots, wheel mesh, recessed fasteners                              | `:123-125`    | article 003 `:49-50`                       | PASS    |
| 20 | Baseline appearance: clean and new, no accumulated dust / damage / missing panels / burn marks / dramatic wear                      | `:126-128`    | article 003 `:51-52`                       | PASS    |
| 21 | Baseline studio: neutral white floor and background, soft light, faint grounded shadow; no rocks, soil, platform, crew              | `:130-135`    | article 003 `:52-54`                       | PASS    |
| 22 | Four operating-appearance stages, framed as expectations for wear, not events that have happened                                    | `:155-164`    | article 003 `:56-60`                       | PASS    |
| 23 | Payload: panorama and navigation imaging, local weather observations, mineral and rock-context sensing, contact tool                | `:146-147`    | article 003 `:62-65`; article 002 `:21-23` | PASS    |
| 24 | Operations: short deliberate traverses — survey, select, approach, observe, record, next safe route; evidence before interpretation | `:147-151`    | article 003 `:65-67`                       | PASS    |
| 25 | Fiction / AI-assisted disclosure, artwork labelled illustrative, no real agency named or implied                                    | brand + `:1`  | article 003 `:73-75`; 001 `:16`            | PASS    |

Two glosses are the page's own phrasing rather than a dossier sentence, and both stay inside what the
released text supports:

- "Mobility exists to put instruments in front of the right ground" (and its restatement in
  `## Relationship to the mission`) is a summary of dossier `:148-151` / article 003 `:65-67`. No new fact.
- "the design dossier behind it is the source for this page" and the closing "described here from the
  programme's own design dossier" restate the `canonicalDocs:` attribution the wiki voice rule requires.

No claim in the page could be traced to no released material, so no claim-level FAIL arises and no canon
question is left open. (The payload enumeration is discussed in §5.)

## 4. Plausibility

| Check                                             | Result                                                                                                                                                                                                                                              |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Technically plausible for a Mars surface rover    | PASS. Six-wheel open-mesh mobility, articulated suspension, stereo mast, single contact arm with a travel cradle are all readable engineering, and the page states the constraints (dust, power, comms delay, remote operation) that produced them. |
| Uncertainty not written as certainty              | PASS. The page asserts nothing about flight, schedule, performance or outcomes; it describes a frozen design and says plainly which appearance stages are expectations.                                                                             |
| Fictional elements have understandable boundaries | PASS. The closing paragraph states the programme is fictional and AI-assisted, the vehicle is fictional, the plate is illustrative artwork, and no real agency is named or implied.                                                                 |
| No unexplained acronym or invented term           | PASS. No acronym is used. "RH-01" is the released designation.                                                                                                                                                                                      |
| No implied real-world endorsement                 | PASS. No real institution, agency, operator or provider is named anywhere in the file.                                                                                                                                                              |

## 5. Spoiler safety and containment

The card's required containment, copied verbatim:

> - No performance figure (speed, range, mass) unless released canon.
> - No Ariane 64. No launch or landing date. No real institution or provider named. No `/docs/timeline/`
>   reference. No step-004+ fact.
> - The four operating stages (baseline, early surface, mature, late mission) are how the dossier describes
>   the design's _expected_ evolution; do not present them as events that have happened.
> - The one plate is `canonical.png` only; the dossier's other four studio renders and `contact-arm-scene.png`
>   are not placed.

Measured against the page bytes `5bd37229…` (frontmatter, prose, alt text, summary — the whole file):

| Containment item                              | Measurement                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No performance figure                         | PASS. No speed, range, endurance, power or mass figure. "roughly two metres in class" is a released dimension (dossier `:19`, article 003 `:24`). Token hits for `mass`/`weight`/`range`/`kg` are the substrings in "equipment mass", "counterweight", "six-wheel arrangement" and "background" — all benign.                                                 |
| No Ariane 64 / no launcher naming             | PASS. Zero hits for `ariane`, `kourou`, `launcher`, `launch vehicle`, `spaceport`.                                                                                                                                                                                                                                                                            |
| No launch or landing date                     | PASS. Zero four-digit years, zero month names, no date string of any kind in the file.                                                                                                                                                                                                                                                                        |
| No real institution or provider               | PASS. Zero hits for `esa`, `nasa`, `jaxa`, `cnes`, `dlr`, `fei stu`, `university`, `laboratory`, `company`. The single `agency` hit is the negation "no real agency is named or implied" (alt text and closing paragraph).                                                                                                                                    |
| No `/docs/timeline/` reference                | PASS. Zero hits for `docs/timeline` or `timeline/`.                                                                                                                                                                                                                                                                                                           |
| No step-004+ fact                             | PASS. Zero hits for `cruise stage`, `aeroshell`, `delivery architecture`, `integration`, and no step-005+ term. The one `landing platform` hit is in the dossier's negated studio-scene list (":no rocks, red soil, landing platform, astronaut …"), a step-003-released sentence; the mission's lander is public from article 001 regardless.                |
| Stage list not presented as happened          | PASS. The page writes "They describe the wear the design provides for, not events that have happened" — the required framing, matching the article-003 sentence `:59-60`.                                                                                                                                                                                     |
| Only `canonical.png` placed                   | PASS. The page declares `media: vehicle-references`, whose registry entry resolves one plate, `docs/vehicles/pathfinder/canonical.png` (`src/features/news/media.ts:75-77`, `src/lib/assets.ts:9`). Nothing imports the other four studio renders or `contact-arm-scene.png`, which stays covered by the per-file rule in `website/scripts/guards.mjs:63-65`. |
| No Asteria Field / landing-region material    | PASS. Zero hits for `asteria`, `margaritifer`, `ellipse`, `17.80`, `332.20`, `touchdown`, `landing site`, `landing zone`.                                                                                                                                                                                                                                     |
| No record date presented                      | PASS. Zero hits for `simulatedDate`, "record date" or "written on"; no "as of"/"in [year]" construction.                                                                                                                                                                                                                                                      |
| No news structure or second-person news voice | PASS. No dateline, no attribution, no "recently / latest / this week / this year / announced / has been selected / is expected to / will soon".                                                                                                                                                                                                               |
| Gated build markers                           | PASS. Zero hits for the two landing-region coordinate markers in `gatedTextMarkers` (`website/scripts/guards.mjs:86`).                                                                                                                                                                                                                                        |
| Whole-site source scan                        | PASS. The real `scanSourceForGatedReferences()` over `website/` returns `[]`; `checkDist()` over `website/dist/` returns `[]`.                                                                                                                                                                                                                                |
| Untracked `docs/vehicles/ariane/` material    | PASS. The page carries no launcher claim and no `ariane` string; no file under `website/` references `docs/vehicles/ariane/` except article 004's own published prose and a comment in `guards.mjs`.                                                                                                                                                          |

One judgement worth recording, because the card raises it: the page enumerates the payload scope in its own
prose ("panorama and navigation imaging, local weather observations, mineral and rock-context sensing, and a
close-contact tool") while also linking `/news/002-payload-selection/`. The enumeration is the dossier's own
sentence as released at step 003 (dossier `:146-147`) and is already published in article **003**'s prose
(`:62-65`), not only in article 002; it names no instrument beyond article 002's published scope, and it
carries none of article 002's news framing (no "the programme has now agreed", no "still being chosen"). The
card's constraint — "no step-002 fact beyond what article 002 published" — is therefore satisfied: the claim
is traced to the dossier and does not exceed the published scope. Recorded as a **pass with a note**, not a
finding (§8, N-1).

## 6. The published surface

The page is `publication: draft`, so the honest pre-flip check is that it is **not** public. Measured, not
assumed:

| Surface                                           | Measurement (2026-09-17, 20:20–20:25 CEST)                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Live origin `GET /wiki/vehicle/rh-01-pathfinder/` | **404**, 0 bytes (`https://mars-ai-simulation.janpolacek.workers.dev`).                                                                                                                                                                                                                                                     |
| Live `GET /wiki/vehicle/`                         | 404, 0 bytes.                                                                                                                                                                                                                                                                                                               |
| Live `GET /wiki/`                                 | 200, 4,599 bytes; the empty index — the string `rh-01-pathfinder` and the label `Vehicles` appear nowhere in it.                                                                                                                                                                                                            |
| Live `GET /news/003-vehicle-design/`              | 200, 11,380 bytes — the page's first internal link resolves publicly.                                                                                                                                                                                                                                                       |
| Live `GET /news/`                                 | 200, 12,410 bytes — the newsroom index resolves.                                                                                                                                                                                                                                                                            |
| Live plate derivative                             | `/_astro/canonical.C1rFlAX3_12caC6.webp`, 200, 57,342 B, `sha256 10d554840f45987241eb689915cc003e33e35da7ea0d482c78f0bd106900aeb1` — article 003's 1152-wide derivative. The artwork is already public through step 003; this page adds no new exposure of the plate bytes, only its own 1024-wide derivative at flip time. |
| Local `website/dist/`                             | No `rh-01-pathfinder` string anywhere in the tree; `listRoutes()` = 10 routes with only `/wiki/index.html` under `/wiki/`. The shared `dist/` is **not** evidence of the live surface (a local build can predate the push), so the live table above is authoritative.                                                       |

`docs/vehicle/ → docs/vehicles/` state: `docs/vehicles/pathfinder/VEHICLE.md` and all six plates exist on
disk; `docs/vehicle/` does not. The page's `canonicalDocs:` string is metadata only (the build does not
import it), and the media registry's import path resolves. The split is staged (`R100`) but uncommitted —
see the condition in the review record.

## 7. The simulated record date

**No value is assigned, and none exists: the wiki schema has no `simulatedDate` field.** `website/src/content.config.ts:78-117`
declares `title`, `section`, `publication`, `order`, `summary` and the optional `related` / `canonicalDocs` /
media fields, and no date of any kind; the news schema's `simulatedDate` (`:45`) is not mirrored into the wiki
collection. The `article-drafting` skill's wiki voice rule says the same in its own words ("The wiki schema has
no `simulatedDate` field; no wiki page may present one… A wiki page is not 'written on' a date"), and the card
body states it as a given. Adding the field would fail the build: an undeclared frontmatter key is a schema
error, not a harmless extra.

So the record-date rule is satisfied here by **absence**, and that absence is required rather than tolerated:
the value is not "left unset pending a milestone", it is not part of this collection's public surface at all.
This is a gap only in the sense the card names it — the wiki page carries no record date — and it is not one
for the human story owner to fill. See the review record for the same statement in the release-decision
context.

## 8. Findings carried in, and how each was disposed of

| Finding (from `t_4a919a79`, the visuals pass)                                                                                                                  | Disposition here                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **F1** — page bytes moved after the SEO pass (`c6202ad5…` → `5bd37229…`, 9,311 B); the SEO record's anchor and its "383 characters" alt measurement are stale. | **Confirmed and judged against the current bytes.** Page re-hashed: `5bd37229…`, 9,311 B, mtime `20:12:09`. Alt string measured at **451** bytes/chars (`06501e8f…`), not 383 — the SEO record's count and its quoted string differ from the file (see review record note N-3). Gate verdict is anchored on `5bd37229…`.                                                                                                                                                                                                                                 |
| **F2** — the card body's nested path `website/wiki/vehicle/rh-01-pathfinder.mdx` does not exist; the page is flat.                                             | **Confirmed; the flat path is the convention.** The glob loader (`base: './wiki'`, `pattern: '**/*.mdx'`, no `generateId`) would make a nested file's id `vehicle/rh-01-pathfinder` and render `/wiki/vehicle/vehicle/rh-01-pathfinder/` with `TypeError: Missing parameter: section`; the leaf route takes `slug: entry.id`. The skill records the flat rule and `website/test/wiki-index.test.mjs` builds the tree from a fixture; the planner's 20:22 comment corrected the build card to the flat path. Applies to every later wiki page.            |
| **F3** — the `docs/vehicle/ → docs/vehicles/` split is staged but uncommitted.                                                                                 | **Confirmed; carried as a release condition on the build card, not a continuity failure.** The page names the post-split path in metadata only; the media import resolves on disk today. See the review record's condition C-2.                                                                                                                                                                                                                                                                                                                          |
| **F4** — the plate has no recorded private generation provenance; only canonical path + sha256 can be stated.                                                  | **Carried unchanged.** The page states nothing about how the plate was made; the alt text says "Illustrative artwork, not mission photography", which is the released-and-approved statement. No generation claim is made, so nothing needs to be withheld.                                                                                                                                                                                                                                                                                              |
| **Observation** — the plate shows six wheels on the vehicle with five visible from this angle; the alt text says "six open-mesh wheels".                       | **Ruled on, and approved.** The alt describes the vehicle's configuration, which is canon (dossier `:58-63`, released), not a visible count in the frame; article 003's published alt on the same plate uses the same construction and the 003 gate ruled on exactly this question (`.agents/work/reviews/003-vehicle-design.md` §8.2: "the alt text and the dossier sentence both stand"). My own vision pass over `canonical.png` confirms five wheels visible (rear-right hidden) and no defect in any other alt cue. No public string becomes false. |

## 9. Verdict, and the limits of it

**`continuity clear`.** The page is coherent, in the timeline's order, consistent with released canon and the
locked scenario, plausible, and spoiler-safe on the bytes `5bd37229…`. No withheld material reaches prose,
frontmatter, alt text, summary, or link.

Limits:

- This verdict is on the **MDX bytes and the live pre-flip surface**. The built `/wiki/vehicle/rh-01-pathfinder/`
  page does not exist yet — the flip belongs to the build card `t_cac9c84e` — so the built-surface checks
  (route 200, rendered title/summary, emitted derivative hash, guard pass over the served bytes) are that
  card's to measure, and this record does not claim them.
- The verdict is on `5bd37229…`. If the page moves again, the moved bytes need a re-read, not a re-stamp.
- The local `dist/` is not treated as the live surface; the live table in §6 is the authoritative one.

Revision history: **none — this is the first continuity record for this slug.** No earlier hash is superseded
by this pass; the only movement is the article-side one carried as F1 and recorded above.
