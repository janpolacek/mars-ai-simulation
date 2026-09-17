# Review: 003-vehicle-design (editorial final gate + release decision)

## Review metadata

| Field              | Value                                                                                                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug               | `003-vehicle-design`                                                                                                                                                                          |
| Card               | `t_1e84c815` — `mars-ai-simulator-editor` (stage `review`); continuity half `t_82680639` (same role, `continuity clear`)                                                                      |
| Timeline step      | `003-vehicle-design` (`docs/timeline/003-vehicle-design.md`)                                                                                                                                  |
| Article            | `website/news/003-vehicle-design.mdx` — sha256 `6a1caf17ff3e1bfb228451c925b2933a7ff0e2d4adc812467bd0d81e95273152`, 5,054 B, `publication: draft`                                              |
| Brief              | `.agents/work/briefs/003-vehicle-design.md` — sha256 `255b2110e1ec126a94bc15a3c7fd82ccac0925e7ca17a9184a2e8f4f5f8aacf6` (read whole)                                                          |
| Source pack        | `.agents/work/sources/003-vehicle-design.md` — sha256 `087f9bea92fce722ac138d9175f6e46b48083ac48a6c2895bbe929c9a6d6b839`                                                                      |
| Asset manifest     | `.agents/work/assets/003-vehicle-design/assets.md` — sha256 `e60b9a7a980df5f3d7088337c4ee6f9d32669b5be01576978aa13f35ed2eb2c9`                                                                |
| SEO package        | `.agents/work/seo/003-vehicle-design.md` — sha256 `fef0aac48fc9b1a5f68eaa2dd68809ddbc2008f3c466db4fe6383fdfe8ba30dd`                                                                          |
| Continuity verdict | `.agents/work/continuity/003-vehicle-design.md` — sha256 `d9d72c7946c68cee159f10b9c4866fb46a9ffbee06ec98f133fc858949d80405`, 56,271 B, pass 2 **`continuity clear`** on the same article hash |
| Canon cited        | `docs/vehicle/VEHICLE.md` (sha256 `0cea455f3847bf6d8758d4e57f99360fa9566457737ddfd0870cde17eb040cb4`); `docs/SCENARIO.md` §Continuity and release controls (working tree `99206373…`)         |
| Guard state        | `website/scripts/guards.mjs` sha256 `b709ed8d871aeb17e2cfe34dbb6503296988f7462af12cff14486ae20789e92c` — **identical blob on `origin/main`** (same `git rev-parse`)                           |
| Skills applied     | `editorial-review` (project), with `copy-editing` and `brand-voice` on the copy rows                                                                                                          |
| Verdict written    | 2026-09-17 14:20–14:45 CEST, against the live shared working tree (local tree 15 commits behind `origin/main`)                                                                                |
| Status             | **`approved`** — with the release decision recorded below and three implementation conditions attached (§9)                                                                                   |

## Verdict

**`approved`.**

Every row of the review table passes, no material factual, accessibility, licensing, coherence, or
metadata failure remains open, and the continuity gate reads `continuity clear` on the same article
bytes (re-hashed twice in this run: unchanged). The two items the visuals card routed here — the
vehicle withhold in `website/scripts/guards.mjs` and the plate's five-of-six wheel read — are decided
in §8; the guard decision was validated by executing the real guard module against the exact inputs
step 003 produces (§8.1), so the dev card receives a tested specification rather than advice.

The title (`Gate 3`) and the plate/alt/label (`Gate 1`) are decided here and recorded in §2 and §3.
Three **implementation conditions** (§9) are attached to the release decision: the guard retirement
ships in the same change as the flip, the release order against the landing-zone node is respected,
and the frontmatter is applied verbatim. None of them is a package failure, and none of them holds
up the chain: `t_accf6f7a` (deploy) proceeds on this approval.

Nothing was changed by this gate. No `website/` file, article, `docs/` file, or other worker's
artifact was edited; `git status --short` at verdict time shows this gate added exactly one file
(this record). All probes are read-only and live outside the repository.

## 1. Release decision (recorded)

**Decision — `mars-ai-simulator-editor`, card `t_1e84c815`, 2026-09-17:** article
`003-vehicle-design` at sha256 `6a1caf17…` (5,054 B) **is approved for publication**, with the exact
public scope, evidence and conditions below. The public flip is `publication: published` in
`website/news/003-vehicle-design.mdx`, applied in **one change** with the step-003 guard retirement
and the `vehicle-references` media key.

### Exact public scope the flip releases

1. **The article route** `/news/003-vehicle-design/` — the page, its h1, kicker, summary, eight body
   paragraphs, and the closing fiction note.
2. **Its news card** on `/` (homepage carousel) and `/news/` — as the third item (`order: 3`), with
   `linkLabel` `Rover design briefing`, the plate as the card image, and the label chip.
3. **The frontmatter metadata that travels into public surfaces**, exactly as listed in §3/§6 —
   including the confirmed title `The rover design, frozen.` and the 149-character summary.
4. **The studio plate `docs/vehicle/canonical.png`** — sha256 `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267`,
   1,889,350 B, 1448 × 1086 — its label `RH-01 Pathfinder · studio reference`, and its alt text
   (both quoted verbatim in §3). The plate is statically imported, so the build emits a hashed
   derivative under `/_astro/`; that derivative is **part of the released scope** and is fetchable
   from the release onward (the 002 precedent: an approved key's plate goes live with the key, not
   with the route).
5. **The vehicle designation and name as public strings** — `RH-01` and `Pathfinder` leave the
   withhold list, which is what step 003 releases (`docs/SCENARIO.md`: “RH-01 imagery waits for
   step 003”; step 003 §Allowed public angle: “Release the first rover dossier and approved studio
   references”).

### Explicitly NOT released by this decision

- `docs/vehicle/contact-arm-scene.png` — **stays withheld**, by this decision (§8.1). It is a scene
  image, it is not in the package, and step 003 bars surface photography and holds editorial scene
  images behind the canonical-reference gate.
- The other four studio references (`front-left.png`, `side-view.png`, `rear-right.png`,
  `contact-arm.png`) — released material per canon, but **not placed** by this change: only
  `canonical.png` is imported, so no other render reaches `/_astro/`. Placing any of them is a new
  editorial decision.
- `docs/timeline/` in any form, the two landing-region coordinate markers, all Asteria Field
  planning material, and every step-004+ fact (launcher, launch/landing date, landing site,
  surface operations, damage, discovery, performance figures).
- Any public title other than the Gate 3 string, and any byline (none is added; see §3).

### Evidence the decision rests on

- Continuity `continuity clear` on these bytes (`.agents/work/continuity/003-vehicle-design.md`,
  sha256 `d9d72c79…`), 28 claim rows carried on a byte-delta proof plus the two re-judged corrective
  items; article hash re-measured unchanged at 14:22 and 14:38 CEST during this gate.
- The claim-by-canon mapping re-derived here on a sample of the load-bearing rows (§4).
- The containment scans: 0 hits for launcher, dates, landing-site, damage/discovery, performance and
  Asteria Field classes in the article and in every frontmatter string (§5).
- Asset provenance by **content hash**: the plate in use is `8dbb33d5…`, the hash the manifest
  records as the approved studio reference, and no other vehicle file is imported anywhere (§7).
- The fail-closed state, measured in fact on **both** surfaces: local `dist/` (7 routes, no 003
  route, 0 source offences, 0 dist offences) and the live origin (`/news/003-vehicle-design/` 404,
  `/news/` carries 001 and 002 only, no page on the origin carries the vehicle name) — §7.
- The guard probe (§8.1): the release inputs fail the current guard on three offences and pass a
  correctly narrowed retirement, while a planted scene-image derivative still fails it.

## 2. Gate 1 — canonical reference and media decision (recorded)

| Item                 | Decision                                                                                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Media key            | `vehicle-references` **approved for registration** — `{ plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }`, the mirror of `payload-sensor-illustration` |
| Plate source         | `docs/vehicle/canonical.png` — the primary studio view, sha256 `8dbb33d5…` (verified by hash in this run)                                                                 |
| Other studio renders | **Not placed.** Approved as canonical references, but nothing imports them; each future placement is a fresh decision                                                     |
| Scene image          | **Not approved for any public surface**; stays withheld (§8.1)                                                                                                            |
| Label                | `RH-01 Pathfinder · studio reference` — 35 characters, carries one non-ASCII character (U+00B7 MIDDLE DOT), so a byte-for-byte comparison must not normalise it           |
| Alt text             | approved verbatim; 350 characters, ASCII, quoted in §3                                                                                                                    |
| `mediaCaption`       | **Must be absent** — `newsMediaIssues()` rejects any non-empty caption when `captionCount` is 0                                                                           |

The alt text was re-verified against the produced pixels in this run, not accepted on the manifest's
word: an independent vision pass over the plate (14:23 CEST) reads a warm-white rectangular body with
rounded protected corners, a dark segmented deck with recessed fasteners, muted red front-corner
panels, a short central mast with **one** stereo housing and a pair of dark lenses, **one** front arm
folded into a recessed bay with its cradle holding a single small tool, six wheels on visible
articulated suspension, a seamless white studio floor with a faint grounded shadow, and **no** text,
logo, insignia, watermark, person, rock, or terrain. The pass agrees with the two earlier reads on the
wheel count (six wheels on the vehicle, five visible from this angle) — see §8.2.

## 3. Gate 3 — public title and byline (recorded)

| Field  | Decision                                                                                                                                        |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Title  | **`The rover design, frozen.`** — 25 characters; document title `The rover design, frozen. \| Red Horizon`, 39 characters                       |
| Byline | **None.** No `author` field is added; the article carries the fiction disclosure in its own voice and the site chrome carries it programme-wide |

Why this title: it states the one thing step 003 settles (a frozen design), states nothing it does
not settle (no launch, no landing), and matches the house style of the two published titles
(`A Mars mission takes shape in public.`, `Choosing what a Mars rover carries.`). It agrees with the
kicker the page already renders (`Vehicle design 03 · Design frozen`), with the frontmatter
`status: Design frozen`, and with the summary's “has a frozen design”. The SEO recommendation
(`.agents/work/seo/003-vehicle-design.md` §2) is accepted as written; the placeholder comment on the
current `title:` line is removed with the change. No spoiler class appears in it.

The applied frontmatter block — to be transcribed verbatim by the build card (the field order is the
current file's order; `summary` stays double-quoted, because its `": "` is invalid in a plain
scalar):

```yaml
title: The rover design, frozen.
category: Vehicle design 03
status: Design frozen
publication: published
summary: "Red Horizon's first rover, RH-01 Pathfinder, has a frozen design: a compact six-wheel surveyor for terrain mapping, rock sensing, and route scouting."
linkLabel: Rover design briefing
order: 3
media: vehicle-references
mediaAlt: "Illustrative artwork of the RH-01 Pathfinder rover in its studio baseline configuration: warm-white rectangular body, dark instrument deck, six open-mesh wheels on visible suspension, short stereo camera mast, and a single front contact arm nested in its travel cradle. A fictional vehicle for a fictional mission; no real agency is named or implied."
mediaLabel: RH-01 Pathfinder · studio reference
accent: amber
```

## Review table

| #  | Check                                                             | Result         | Evidence                                                                                                                                                                                                                                                                                                            |
| -- | ----------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Continuity verdict present, `continuity clear`, on the same bytes | PASS           | `.agents/work/continuity/003-vehicle-design.md` sha256 `d9d72c79…` — the hash its own metadata records; §Final label reads `continuity clear`, pass 2 superseding pass 1's `return for revision`                                                                                                                    |
| 2  | Article unchanged since the clearance                             | PASS           | `6a1caf17…`, 5,054 B at 14:22 and again at 14:38 CEST — identical to the hash `t_82680639` cleared, so every claim row that passed there still passes on these bytes                                                                                                                                                |
| 3  | Every material claim traces to canon                              | PASS           | Continuity's 30 claim rows: pass 2 re-judged the two corrective items (C1, C2) and carried the other 28 on the byte-delta proof. This gate re-derived the load-bearing rows (§4). No unsourced claim; no real-world factual claim at all                                                                            |
| 4  | No step-004+ fact; containment checklist holds                    | PASS           | §5: 0 hits for launcher, year/month, landing-site, surface-operation, damage/discovery, and performance-unit classes. “Design freeze” is not written as built or launch-ready (line 65)                                                                                                                             |
| 5  | No Asteria Field material                                         | PASS           | §5: the region name, coordinates, maps, traverse logic, hazard inventory, and unit identifiers are all absent from the article and from every frontmatter string. `docs/area/` is not referenced anywhere in the article or the release change                                                                      |
| 6  | Links resolve                                                     | PASS           | Two internal links: `/#mission` (anchor exists on the built homepage) and `/news/002-payload-selection/` (live, 200, verified at 14:24 CEST in the browser). No external link in this package                                                                                                                       |
| 7  | Voice and grammar                                                 | PASS           | §6: `brand-voice` rows pass — concrete, unsentimental, no grandeur, no urgency, no unearned certainty, no real-agency implication. Terminology preserved (`RH-01 Pathfinder`, the dossier's own vocabulary)                                                                                                         |
| 8  | Metadata complete and schema-legal                                | PASS           | §2/§6: frontmatter parses with `js-yaml` from `website/node_modules`; key set `title, category, status, publication, summary, linkLabel, order, accent` — 8 keys, no `media*` field today — plus the three approved `media*` fields the flip adds; `order` integer; `accent` a valid enum; `summary` 149 characters |
| 9  | Gate 3 title confirmed, no invented byline                        | PASS (decided) | §3. The string is confirmed against the style of the two published titles and against the kicker the page renders; no byline invented                                                                                                                                                                               |
| 10 | Image placement, alt text, label, caption                         | PASS (decided) | §2. One plate in the lead figure (`max-width: 24rem`, no crop) and one card image (`object-fit: contain`); alt re-verified against the pixels; label prints as `figcaption` and as the card chip; no caption — the key's `captionCount` is 0 and the schema rejects one                                             |
| 11 | Asset provenance by content hash, not path                        | PASS           | §7: the plate in use hashes to `8dbb33d5…`, the manifest's approved studio reference. No derivative, re-encode, crop or transparent variant is in use; the rejected-variant failure mode of article 001 does not arise here                                                                                         |
| 12 | Published surface carries no gated material                       | PASS           | §7: local `dist/` — 0 source offences, 0 dist offences; live origin — no page carries `RH-01` or `Pathfinder`, `/news/` lists 001 and 002 only, `/wiki/` chrome only                                                                                                                                                |
| 13 | The draft emits no route, card, or listing entry                  | PASS           | §7: `listRoutes()` on `dist/` returns 7 routes, none for 003; live `/news/003-vehicle-design/` 404, 0 bytes. A declared `draft` is not the proof — the measured absence is                                                                                                                                          |
| 14 | Release mechanism current                                         | PASS           | `src/lib/publication.ts` + `src/features/news/query.ts` make the frontmatter `publication` field the single predicate for listing, card and route; the retired `src/lib/releases.ts` model is not referenced by any live card for this step                                                                         |
| 15 | Guard precondition for the flip, decided and tested               | PASS (decided) | §8.1: three offences measured today on the release inputs; a correctly narrowed retirement passes them and still fails a planted scene-image derivative                                                                                                                                                             |
| 16 | Fictional and AI-assisted disclosure                              | PASS           | First sentence: “a fictional, AI-assisted Mars exploration programme”, linked to `/#mission`; closing note: the vehicle is fictional, described from the programme's dossier, the studio views illustrative artwork, no real agency named or implied; the plate's alt text repeats the disclosure                   |
| 17 | Licensing and provenance recorded, not settled by assumption      | PASS with note | §8.3/§10: the `docs/vehicle/` renders have no recorded private provenance anywhere in the tree, and the generated-artwork rights question is the same open, human-owned item 002 recorded. Recorded, routed, not answered here                                                                                      |
| 18 | This gate edited no other worker's artifact and no canon          | PASS           | `git status --short` at verdict time: the only new path is this record. No `website/` file, article byte, `docs/` file or frontmatter was changed; every probe is read-only and outside the repository                                                                                                              |

## 4. Claim and canon coverage

Continuity's 30 claim rows were not re-litigated: the article hash is **identical** to the one that
clearance covers, and pass 2 proved the delta from pass 1 by rebuilding the earlier bytes (two hunks,
28 rows carried). This gate re-derived the load-bearing rows against `docs/vehicle/VEHICLE.md`
directly, at the article's own line numbers:

| Claim                                                                        | Line  | Canon                                                                               | Result                                                                       |
| ---------------------------------------------------------------------------- | ----- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 2 m class; low, broad body; mass near the chassis                            | 20–22 | VEHICLE.md §Proportions and silhouette (“roughly two metres in class”)              | PASS                                                                         |
| Front is the science end, rear a plain sealed service panel                  | 22–24 | VEHICLE.md §Proportions… and §Rear, materials, and surface character                | PASS                                                                         |
| Warm white matte ceramic; muted red panels; dark flat deck                   | 24–28 | VEHICLE.md §Body and colour blocking                                                | PASS                                                                         |
| No windows, cockpit, wiring or insignia                                      | 26–28 | VEHICLE.md §Body and colour blocking                                                | PASS                                                                         |
| Exactly six open-mesh wheels, three positions per side                       | 30–35 | VEHICLE.md §Six-wheel mobility system (“exactly six”)                               | PASS                                                                         |
| Visible articulated suspension; clearance over small stones                  | 32–34 | VEHICLE.md §Six-wheel mobility system                                               | PASS                                                                         |
| Short central mast, one stereo housing, not a tower                          | 37–39 | VEHICLE.md §Mast and vision system                                                  | PASS                                                                         |
| One front-centre arm, two joints, tool secured in its cradle below mast base | 39–43 | VEHICLE.md §Front contact arm and travel cradle                                     | PASS                                                                         |
| Materials list; baseline clean and new                                       | 45–48 | VEHICLE.md §Rear, materials…                                                        | PASS                                                                         |
| Neutral floor, white background, broad soft light, faint shadow              | 48–50 | VEHICLE.md §Rear, materials… (baseline studio appearance)                           | PASS                                                                         |
| Four operating stages, described as expected ageing                          | 52–56 | VEHICLE.md §Operating appearance (four numbered stages)                             | PASS — and explicitly framed as expectations, not events                     |
| Payload scope as agreed in the second public step                            | 58–60 | VEHICLE.md §Science and operations + published `002`; link resolves                 | PASS                                                                         |
| Observational, methodical traverse model                                     | 61–63 | VEHICLE.md §Science and operations                                                  | PASS                                                                         |
| Design frozen ≠ built; no launcher named, no date, no landing site announced | 65–67 | Step 003 §Constraints and decisions, §Spoilers; `docs/SCENARIO.md` release controls | PASS — public-record phrasing (corrective C1 re-judged in continuity pass 2) |

One citation-precision note carried from the source pack, not a claim failure: the pack cites
“VEHICLE.md §4” and “§7” for the four operating stages; the dossier has no numbered sections — the
material is under `## Operating appearance` and `## Rear, materials, and surface character`. Working
paper only; no public string is affected.

## 5. Containment and spoiler checks (measured)

| Target                                                                                                | Scan                                                                                                                                                                     | Result                                                                                                   |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| Article body + closing note                                                                           | launcher names, year/month tokens 2020–2039, landing-site terms, surface-operation terms, damage/discovery, performance units, the two landing-region coordinate markers | **0 hits** of every withheld class                                                                       |
| Frontmatter strings that travel into metadata (`title`, `summary`, `status`, `category`, `linkLabel`) | same pattern set                                                                                                                                                         | 0 hits; no gated marker                                                                                  |
| The released plate's label and alt text                                                               | same pattern set                                                                                                                                                         | 0 hits (they name the vehicle, which this step releases; no Asteria Field, coordinate, date or launcher) |
| Guard markers in the article                                                                          | `gatedTextMarkers` read from `guards.mjs` at scan time: the two vehicle markers fire (3 and 5 times); the two landing-region coordinate markers fire **0** times         | expected, and it is what §8.1 retires                                                                    |
| Local build output                                                                                    | `checkDist()` read-only over `dist/`                                                                                                                                     | 0 offences                                                                                               |
| Live origin                                                                                           | in-page fetch of `/`, `/about/`, `/news/`, `/news/001…/`, `/news/002…/`, `/wiki/`                                                                                        | 0 vehicle-name hits anywhere                                                                             |

The article states the mission's unsettled state honestly and in the right register: “describing a
fixed design is not the same as having built one. No launch vehicle has been named, no launch date
has been stated, and no landing site has been announced.” That third clause is true against released
canon today, is order-sensitive, and is carried as condition C-2 (§9).

## 6. Copy gate — voice, grammar, structure

| Aspect                     | Judgement                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand voice                | PASS. Concrete and unspecific where canon is unspecified; no superlative, no slogan, no deadline, no completion verb, no implied real-agency endorsement. “The design brief it answers to is written by the planet” is the article's one flourish and it is a compact way of stating the constraint set, not grandeur                                                           |
| Grammar, agreement, tense  | PASS. No defect found. Aspect, number and tense are consistent; the negative lists (“no second arm, exhaust assembly, or cargo rack”) are correctly parallel                                                                                                                                                                                                                    |
| Precision of terms         | PASS. The dossier's own vocabulary is preserved (`open-mesh`, `contact arm`, `travel cradle`, `baseline configuration`, `muted red identification panels`). No acronym, no unexplained term, no instrument name invented                                                                                                                                                        |
| Uncertainty and boundaries | PASS. The four appearance stages are explicitly framed as expectations about ageing, not events; the fiction disclosure opens and closes the prose; the imagery is labelled illustrative in the alt text as well                                                                                                                                                                |
| Structure and scannability | PASS with note. 750 body words in eight paragraphs, 0 `h2`s. Above the drafting guideline's ~600-word heading-free threshold, so the SEO pass's eight-heading outline would help; it is **not applied** and is recorded as a non-blocking recommendation (§10, N-4). Article 001 is published with 0 body `h2`s and 002 with 10, so both states have precedent in this newsroom |
| Alt text length            | PASS with note. 350 characters against the ~160-character target the 002 SEO package carried. The string is a description of an illustrative plate and its fiction disclosure, not a decorative label; the 002 gate approved a 272-character alt on the same reasoning (§10, N-5)                                                                                               |

## 7. Surface and asset verification

**Asset, by content hash.** `docs/vehicle/canonical.png` sha256
`8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267`, 1,889,350 B, mtime 2026-09-15
23:19:27 — the hash the asset manifest records for the approved studio reference, re-measured here.
No file under `docs/vehicle/` is copied, derived or re-encoded by this release; `src/lib/assets.ts`
imports the canonical path and Astro emits one optimised derivative. `src/lib/assets.ts` does **not**
import `canonical.png` today, and `newsMediaKeys` does not contain `vehicle-references` — so the
fail-closed default is measurably in force (no key ⇒ amber `news-placeholder`, no plate emitted).

**Local build output (read-only probe).** `listRoutes()` → 7 routes (`/404.html`, `/about/`,
`/google…html`, `/`, `/news/001…/`, `/news/002…/`, `/news/`), **none for 003**;
`listGeneratedRoutes()` → 6; `scanSourceForGatedReferences()` → 0 offences; `checkDist()` → 0
offences. `dist/index.html` was built 14:14:34 CEST by another card; this gate ran no build.

**Live origin (the surface the push deploys).** Measured at 14:23–14:25 CEST in a real browser:

| URL                                               | Result                                                                                                     |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `/news/003-vehicle-design/`                       | **404**, 0 bytes — no route, no card, no page                                                              |
| `/news/`                                          | 200 — two cards, `/news/001-project-announcement/` and `/news/002-payload-selection/`; 0 vehicle-name hits |
| `/wiki/`                                          | 200 — index chrome only; nav links `/news/`, `/wiki/`, `/about/`; no area, vehicle or project node         |
| `/wiki/area/`, `/wiki/vehicle/`, `/wiki/project/` | **404** — the landing-zone node is not public                                                              |
| `/`, `/about/`                                    | 200 — 0 vehicle-name hits                                                                                  |
| `/sitemap.xml`                                    | 404 — none served                                                                                          |

**The local tree is 15 commits behind `origin/main`**, and `origin/main` is what Cloudflare builds.
The two surfaces therefore differ by design (locally the wiki feature is absent; live it is present).
Both were measured; the live table is authoritative for what the public sees, and the build card must
work on the updated tree. This is the same divergence `t_82680639` recorded (its O11).

## 8. The routed items, decided

### 8.1 The vehicle withhold in `website/scripts/guards.mjs` — **release-control decision: narrow the retirement**

Decision: **step 003 retires the released material and keeps the scene image withheld.** Concretely:

1. `gatedDirectoryNames`: `['vehicle', 'timeline']` → **`['timeline']`**. The dossier prose and the
   approved studio references are what step 003 releases (`docs/SCENARIO.md`: RH-01 imagery waits for
   step 003; step 003 §Allowed public angle), so the blanket directory withhold is leftover
   pre-step-003 enablement, not a content conflict.
2. `gatedTextMarkers`: `['RH-01', 'Pathfinder', <two landing-region coordinate markers>]` → **the two
   coordinate markers only**. The vehicle designation and name are public from this step; the
   landing-region coordinates stay withheld. Precedent: the 2026-09-17 landing-region release retired
   its name from this list and left the rest.
3. **`docs/vehicle/contact-arm-scene.png` stays withheld**, and it needs its **own per-file rule**,
   because the directory rule is the thing protecting it today. The per-file entry must be enforced
   by **both** scanners:
   - `checkDist()` — include the file in the withheld-source set (name, leading name token, content
     hash), so a copied or re-encoded derivative fails as `gated-name` / `gated-name-stem` /
     `gated-content`;
   - `scanSourceForGatedReferences()` — a new rule: a reference that resolves to that file is an
     offence. This half does **not** exist today and is not implied by the directory rule; the probe
     below shows the scene import passing silently once the directory is retired.
4. The guard's own header comment (which documents the withhold as “until the vehicle-design step”),
   `src/lib/assets.ts`'s header comment (“The surface-vehicle dossier is withheld…”), and the
   `guard retirement` block in `website/test/guards.test.mjs` (which currently asserts the two
   vehicle markers are still gated) must be updated in the same change. The suite must prove **both
   halves** of the retirement, as it did for the landing-region release: the two retired markers and
   the released `docs/vehicle/` reference now pass a build, and the coordinate markers plus the
   withheld scene file still fail one.
5. **The retirement ships in the same change as the flip.** A published 003 page with today's guard
   fails the production build closed, which would stop the automatic deploy.

Measured, by executing the real guard module (`/tmp/editor003/guardprobe.mjs`, scratch, read-only):

| Configuration                                                                    | Release inputs (plate import, emitted derivative, built page carrying the released strings)               | Planted scene-image derivative                                          |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Today (`vehicle` gated, four markers)                                            | **Fails**: `gated-path` ×2 (source), `gated-name-stem` (emitted derivative), `gated-text` ×2 (built page) | Fails (by the directory rule)                                           |
| Retired dir + two markers retired, directory rule only                           | Passes                                                                                                    | **Not caught** — and the scene import is also missed in the source scan |
| Retired dir + two markers retired + the scene file as a per-file withheld source | **Passes (0 offences)**                                                                                   | **Fails**: `gated-name-stem`                                            |

That is the whole decision in four rows: the retirement is sufficient for what step 003 releases, and
insufficient — silently — for the scene image unless the per-file rule is added to both scanners.

### 8.2 Wheel visibility (the visuals card's finding 2) — **no change**

The plate shows six wheels on the vehicle with five visible from this angle (the rear-right wheel is
occluded by the body). Three independent vision passes now agree on that read (the visuals card, the
continuity pass, and this gate's at 14:23 CEST). The approved alt text says “six open-mesh wheels on
visible suspension” — it describes **the vehicle**, and claims nothing about what one camera angle
shows, so nothing published becomes false. The dossier's stage-1 sentence (“all six wheels visible
against a neutral background”) is a statement about the baseline configuration, not about one oblique
view, and no view of a six-wheeled body can be required to show all six.

Consequence: **the alt text and the dossier sentence both stand.** Recorded rather than changed,
because a reader can count, and a later editor should find the count already judged. If the dossier
owner ever wants the sentence to be explicitly per-view, that edit belongs to `docs/vehicle/VEHICLE.md`
and to `project-documentation` — it is optional, and nothing in this package depends on it.

### 8.3 The other routed items

| Item                                                                           | Decision / disposition here                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contact-arm joint count unverifiable from the plate (O3)                       | **No public string asserts a joint count** — the article's “exactly two connected joints” traces to `docs/vehicle/VEHICLE.md` §Front contact arm and travel cradle, and neither the alt text nor the label states a count. Carried as a “do not assert” note for any future caption |
| `docs/vehicle/` renders have no recorded private provenance (O4)               | **Routed, unchanged** → `project-documentation` per `docs/README.md`; this release can honestly record only the canonical path, hash, bytes and mtime, which §7 does                                                                                                                |
| Public title is still the content id (O5)                                      | **Closed by Gate 3** (§3): title confirmed; the placeholder comment goes with the change                                                                                                                                                                                            |
| SEO heading outline, title rationale, third internal link (O6)                 | **Accepted as non-blocking recommendations**, not applied (§10, N-4/N-6). The title recommendation is applied by Gate 3; the headings and the 001 link are the writer's if the article is ever reopened                                                                             |
| Landing-area publication state (O7)                                            | **Converted into release-order condition C-2** (§9)                                                                                                                                                                                                                                 |
| Duplicate corrective card `t_81e80a10` superseded by `t_9f191d53` (O8)         | **Still on the board, still not an agent's to archive** — human action: `hermes kanban archive t_81e80a10`                                                                                                                                                                          |
| Wiki-area canon note and other canon edits live only in the working tree (O10) | **Carried**; canon is `docs/SCENARIO.md` in the working tree and `docs/` is not a served surface. Owner: human story owner / `project-documentation`                                                                                                                                |
| Local tree diverges from what production builds (O11)                          | **Carried into condition C-4** (§9)                                                                                                                                                                                                                                                 |

## 9. Conditions attached to the release decision

These are implementation conditions, not package failures. None blocks this gate's `approved`, and
none keeps the chain open.

- **C-1 — the guard retirement ships in the same change as the flip.** Without it the production
  build fails closed on three measured offences (§8.1) and the automatic deploy stops.
- **C-2 — release order against the landing-zone node.** `docs/SCENARIO.md` §Continuity and release
  controls permits the `/wiki/area/` landing-zone page (Asteria Field) to be public **at this same
  step 003**, with its flip being this role's own release decision; the node is 404 today and no wiki
  content package exists. If that flip is recorded **before** this article's publication, the
  article's third closing clause — and published `002:103`, which carries the same posture — must be
  re-read and re-worded first. This is an ordering constraint on two publication decisions, not a
  requested wording change: the clause is true against released canon as it stands. Owner: this role,
  on both release cards.
- **C-3 — field fidelity.** The `media` fields and the title in §3 must be applied **verbatim**: the
  alt string is ASCII, the label carries U+00B7, no `mediaCaption` may be added, and the summary keeps
  its double quotes and its 149 characters.
- **C-4 — build and deploy on the updated tree.** The build card must work on the tree that carries
  `origin/main` (wiki feature included; this checkout is 15 commits behind) and prove: the build and
  `checkDist()` pass, the route `/news/003-vehicle-design/` exists with the confirmed title, the card
  appears on `/` and `/news/`, the plate's emitted derivative serves, and no withheld material is in
  `dist/`. The 4:3 plate on the card/carousel is the case commit `743afed` fixes; confirm it renders
  without the pale letterbox at both breakpoints rather than assuming it.

## 10. Non-blocking observations (each with an owner)

- **N-1 — the flip's application point is the build card, not the release card.** The pipeline graph
  places the deploy card before the release card, while `AGENTS.md` requires the release decision to
  exist before a push carries content public. The decision exists as of this record, so the sequence
  that works is: this gate → `t_accf6f7a` applies the frontmatter, the guard retirement and the media
  key in one change and pushes it (the publication) → `t_dcd80a99` records the release and verifies
  the live surface. Applying the flip in isolation before the guard retirement would leave the shared
  tree with a `published` article whose own build fails closed. **Owner:** `mars-ai-simulator-dev`
  (`t_accf6f7a`), then this role (`t_dcd80a99`).
- **N-2 — the emitted plate goes live with the key, not with the route** (the 002 precedent: a
  statically imported plate is emitted into `dist/_astro/` even while no route renders it, and every
  push to `main` deploys). The plate is approved artwork released at this step, so it is an
  observation, not a blocker — recorded so the deploy card's live check measures the artifact as well
  as the route. **Owner:** `t_accf6f7a`.
- **N-3 — the generated-artwork rights and provenance position is unchanged and open.** The
  `docs/vehicle/` renders have no generation record in the repository, and the model-licence question
  `t_5a62fb28` recorded for 002's illustration applies to this plate as a class, not to this package
  alone. Nothing about the labelling requirement is unmet (the alt text and the article's closing note
  both state the artwork is illustrative fiction), and 002 was released on the same footing, so this
  record does not treat it as a blocker — but it is not settled by this record either. **Owner:**
  human story owner, with `mars-ai-simulator-visuals` recording the citations; and
  `project-documentation` for the dossier's provenance gap (§8.3).
- **N-4 — no body headings.** Accepted, not applied (§6). If the writer applies the SEO pass's eight
  `h2`s later, that is an ordinary copy pass on a published article; the heading strings would need
  the same containment scan as the body, and the article hash in this record would be superseded.
  **Owner:** writer, if wanted.
- **N-5 — alt text 350 characters** against the ~160-character target the 002 SEO package carried.
  Approved as written for the reasons in §6; shortening it would be a fresh editorial act on an
  approved string. **Owner:** this role, if a stricter length is ever wanted.
- **N-6 — the third internal link (to the 001 announcement) is not applied.** The newsroom chain is
  complete without it, and the draft's two links both resolve. **Owner:** writer, optional.
- **N-7 — `accent: amber`** is a valid enum value and matches 002; the kicker and summary render from
  `category`/`status`, so no accent-dependent surface is unproven. Noted only because the value is
  currently the only styling field the article sets. **Owner:** none.

## 11. Confidentiality check on this record

- Withheld material is named **by location or by class**, never by value: the two landing-region
  coordinate markers are referred to as “the two landing-region coordinate markers”, and no coordinate,
  ellipse geometry, touchdown zone, science-zone plan, hazard inventory, unit identifier, launch
  vehicle, launch or landing date, or budget figure appears anywhere in this record.
- The released material this step publishes — the vehicle designation and name, the plate and its
  label and alt text, the title and summary — is written out, because it is exactly what this decision
  releases.
- Nothing from `docs/timeline/` is quoted, paraphrased, or characterised beyond the step's own public
  angle, which `docs/SCENARIO.md` already states: RH-01 imagery waits for step 003.
- No gated value was added to any public surface by this gate: no `website/` file, article byte,
  frontmatter field, asset, or `docs/` file was changed. Every probe and pattern list lives outside
  the repository, under `/tmp/editor003/`.

## 12. Record identity and evidence paths

This is the first review record for the `003-vehicle-design` slug. The continuity record keeps its own
revision history (`33a38509…` pass 1 superseded by `d9d72c79…` pass 2); this file supersedes nothing
and, if a later pass re-checks the package, must re-hash the article first and state what moved.

Evidence, all read-only and re-runnable, all outside the repository:

- `/tmp/editor003/verify.mjs` — hashes of every gate input, frontmatter parse via `js-yaml`, body
  metrics, marker scan, read-only `listRoutes()` / `listGeneratedRoutes()` / `checkDist()` /
  `scanSourceForGatedReferences()`, media-key registry read, site-wide vehicle-name search.
- `/tmp/editor003/guardprobe.mjs` — the executed guard-retirement probe tabulated in §8.1.
- `/tmp/editor003/board.py`, `board2.py`, `board3.py` — read-only reads of `~/.hermes/kanban.db` for
  the card bodies, statuses and comments this decision depends on.
- Live measurements 14:23–14:25 CEST in a real browser on the production origin
  (`https://mars-ai-simulation.janpolacek.workers.dev`), in-page `fetch` per URL, no deploy action,
  no credential used.

## Final label

approved
