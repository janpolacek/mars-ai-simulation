# Release record: 003-vehicle-design

## Status

**`released` — the `publication` flip, the step-003 guard retirement and the `vehicle-references`
media key were applied in one change by card `t_accf6f7a` (commit `e1d0a4d`), pushed as
`ea15a36..05eb981`, and the article route has been live since 14:48:08 CEST on 2026-09-17.**

The release decision itself was recorded **before** that push, on the editorial gate card
`t_1e84c815` (`.agents/work/reviews/003-vehicle-design.md` §1, sha256 `17d562d6…`), because
`AGENTS.md` requires the release decision to exist before a push carries content into the public
site. This card carries the recorded decision forward, fixes the exact public scope, and **verifies
the built and live surface** rather than re-deriving the decision (the application order was fixed
in advance — review record §10 N-1 — so that no second, divergent flip exists).

**Authority note, because this card's body still reads as a three-sentence human gate ledger.** The
operator instruction of 2026-09-17 merged the _Copy editor_ and _Continuity redactor_ roles into
`mars-ai-simulator-editor` and made canon confirmation and releasability that role's own decision,
with its recorded decision being the approval — no human sentence is required. The three gates below
are therefore recorded as **this role's decisions**, taken on `t_1e84c815` and applied by
`t_accf6f7a`; each gate keeps the card body's template sentence, its alternative, and its fail-closed
default visible so the ledger remains auditable against the original wording.

**This card applied nothing.** No `website/` file, article byte, frontmatter field, asset, canon file
or `docs/` file was changed by this card; this card's only write is this record. No deploy action was
taken, and none is available to any agent: a push to `main` is the automatic Cloudflare Workers Build
deploy. `git status --short` at close-out shows this record as the sole path this card added.

---

## Gate ledger

### Gate 1 — Canonical reference approval

**Required verbatim on this card:**

> "003 canonical references approved for publication: `canonical.png`" — OR — a different approved studio reference, or the full set

**Decision (this role, card `t_1e84c815`, review record §2): `canonical.png`, approved.**

| Item                 | Decision                                                                                                                                                                                                       |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Media key            | `vehicle-references` — approved for registration as `{ plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }`, the mirror of `payload-sensor-illustration`                                       |
| Plate source         | `docs/vehicle/canonical.png` — primary studio view, sha256 `8dbb33d5…`, 1,889,350 B, re-hashed unchanged in this run                                                                                           |
| Other studio renders | `front-left.png`, `side-view.png`, `rear-right.png`, `contact-arm.png` — released material, **not placed** by this change; nothing imports them, and **0** references to any of them exist in the built output |
| Scene image          | `docs/vehicle/contact-arm-scene.png` — **not approved for any public surface**; stays withheld behind a per-file guard rule (see “Guard change” below)                                                         |
| Label                | `RH-01 Pathfinder · studio reference` — 35 characters, exactly one non-ASCII character (U+00B7 MIDDLE DOT), re-verified byte-for-byte in this run                                                              |
| Alt text             | approved verbatim — 350 characters, pure ASCII, re-verified against the plate's pixels by the gate; sha256 of the string `831d0539…`                                                                           |
| `mediaCaption`       | **absent**, as required: `newsMediaIssues()` rejects any non-empty caption when `captionCount` is 0                                                                                                            |

**Fail-closed default (unchanged, and it was the measured state until the flip):** no `media` key;
amber `news-placeholder`. Before the flip, `newsMediaKeys` did not contain `vehicle-references`,
`src/lib/assets.ts` did not import the plate, and the built output carried no plate derivative.

### Gate 2 — Canon and release approval

**Required verbatim on this card:**

> "Article 003-vehicle-design canon and release: approved" — OR — "Article 003-vehicle-design canon and release: not approved"

**Decision (this role, card `t_1e84c815`): canon and release approved.** The recorded sentence is the
approval, and this card's release decision below is its own recorded sentence (a review verdict is
not by itself a release decision).

**Fail-closed default:** `publication: draft`; no route; not listed.

### Gate 3 — Public title and byline

**Required verbatim on this card (or on the brief):**

> "003 public title: [title]" and "003 author: [name or 'anonymous']"

**Decision (this role, card `t_1e84c815`, review record §3):**

- **`003 public title: The rover design, frozen.`** — 25 characters; document title
  `The rover design, frozen. | Red Horizon`.
- **`003 author:` none — no byline is written.** The content schema
  (`website/src/content.config.ts`) carries no author field, so the honest application of the
  template's `[name or 'anonymous']` slot is _no field_: a credit line would have to be invented, and
  inventing one is not this card's to do. The fiction disclosure reaches the reader through the
  article's own first sentence, its closing note and the site chrome.

**Fail-closed default:** title stays as-is in frontmatter (the placeholder content id); byline absent.

---

## Containment checklist — resolved line by line

The checklist is non-negotiable and unchanged from the card body. `[x]` below means _verified on the
released bytes in this run_, not _assumed from the brief_; the "must NOT" rows were verified against
the article, every frontmatter string, the built output and the live pages.

**The article may state:**

- [x] RH-01 Pathfinder is the first surface vehicle — stated (4 body mentions of the name, 2 of the designation)
- [x] Its design reflects dust, terrain, power, communication delay, remote operations — stated
- [x] Body, wheels, suspension, mast, arm, rear panel, materials from VEHICLE.md — stated, all traceable to `docs/vehicle/VEHICLE.md` (continuity: 30 claim rows, `continuity clear`)
- [x] Four operating-appearance stages from VEHICLE.md §4 — stated
- [x] Science role: panoramic and navigation imaging, weather, mineral/rock sensing, close-contact tool — stated
- [x] "Design freeze" does not imply built or launch-ready — stated as a design freeze only

**The article must NOT state (all measured absent):**

- [x] Any launch vehicle (step 004) — absent
- [x] Any launch or landing date — absent
- [x] Any landing site or surface operations detail — absent, including the closing clause's landing-site posture
- [x] Any Asteria Field material (name, coordinates, maps, traverse logic, hazard inventory) — absent from the article, the frontmatter, the plate's alt text and label, the built output and the live pages
- [x] Any damage, discovery, or late-mission event — absent
- [x] Any performance statistics (speed, range, duration, payload mass) — absent; the article carries no performance figure
- [x] Any step-004 through step-011 fact — absent

---

## Media key decision (binding, as recorded by the card body)

| Field             | Value                                                                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Key               | `vehicle-references`                                                                                                                                     |
| Plate count       | 1                                                                                                                                                        |
| Alt text required | yes (1 per plate) — supplied, 350 ASCII characters                                                                                                       |
| Captions required | no (`captionCount: 0`; a caption is rejected by the schema)                                                                                              |
| Label required    | no (`requiresLabel: false`) — label supplied anyway and load-bearing: the card chip is drawn from `mediaLabel`, and an unset label renders an empty chip |
| Plate source      | `docs/vehicle/canonical.png` (sha256 `8dbb33d5…`)                                                                                                        |
| Label             | `RH-01 Pathfinder · studio reference`                                                                                                                    |

---

## The release change applied (by card `t_accf6f7a`, not by this card)

`website/news/003-vehicle-design.mdx` — **frontmatter only; the body bytes are unchanged**
(sha256 `eb35c53a…`, 4,681 B, identical before and after the flip).

```diff
-title: "003-vehicle-design" # placeholder — Gate 3 confirms the public title
+title: The rover design, frozen.
 category: Vehicle design 03
 status: Design frozen
-publication: draft
+publication: published
 summary: "Red Horizon's first rover, RH-01 Pathfinder, has a frozen design: a compact six-wheel surveyor for terrain mapping, rock sensing, and route scouting."
 linkLabel: Rover design briefing
 order: 3
+media: vehicle-references
+mediaAlt: "Illustrative artwork of the RH-01 Pathfinder rover in its studio baseline configuration: warm-white rectangular body, dark instrument deck, six open-mesh wheels on visible suspension, short stereo camera mast, and a single front contact arm nested in its travel cradle. A fictional vehicle for a fictional mission; no real agency is named or implied."
+mediaLabel: RH-01 Pathfinder · studio reference
 accent: amber
```

The same commit `e1d0a4d` carried the rest of the release change, all of it required by the decision:

- **Guard retirement (condition C-1).** `website/scripts/guards.mjs`: `gatedDirectoryNames` loses the
  `vehicle` dossier name (only the withheld timeline directory remains) and the two vehicle text
  markers are retired; the two landing-region coordinate markers stay. The withheld scene image is
  protected by a **new per-file rule** (`gatedFilePathSegments` / `gatedSourceFiles`, enforced by both
  `collectGatedSources()`/`checkDist()` and the new resolution rule in
  `scanSourceForGatedReferences()`), because retiring the directory name was the only thing covering it.
- **Media key plumbing.** `website/src/lib/media.ts` (registry entry), `src/features/news/media.ts`
  (resolver), `src/lib/assets.ts` (import of the canonical plate), `test/news-media.test.mjs` (the
  three existing assertions a new key breaks, plus the new case).
- **A defect this release exposed, fixed.** `src/features/news/ArticleView.astro` passed
  `width+height={1024}` to `<Image>`, so Astro's default `fit: cover` centre-cropped the 4:3 plate by
  25% of its width (measured `mean |delta| 0.00` against sharp's cover); the figure now passes width
  only, and `test/news-article-plate-ratio.test.mjs` pins the ratio.

## Released hashes and identity

| Item                                                  | Value                                                                                                                                             |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article, approved revision before the flip            | `6a1caf17ff3e1bfb228451c925b2933a7ff0e2d4adc812467bd0d81e95273152` (5,054 B, `draft`)                                                             |
| **Article, released revision (the flip)**             | **`f60a3cc512b278a3ef6333278e0c301ac2d6e2f0f6864ac2a486731c067450a7`** (5,450 B)                                                                  |
| Released body (unchanged by the flip)                 | `eb35c53a66a71db37e5ede88d45aff490d1ccc64cc2ef9f0abe11dde92a39d27` (4,681 B)                                                                      |
| Plate source (canonical, not modified)                | `docs/vehicle/canonical.png` — `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267`, 1,889,350 B, 1448 × 1086                       |
| Emitted plate derivative (part of the released scope) | `/_astro/canonical.C1rFlAX3_12caC6.webp` — 57,342 B, sha256 `10d554840f45987241eb689915cc003e33e35da7ea0d482c78f0bd106900aeb1`, served 1024 × 768 |
| Guard module on `origin/main`                         | `website/scripts/guards.mjs` — `fd5a9e43…`, 13,503 B                                                                                              |
| Commits                                               | `e1d0a4d` (the release change) and `05eb981` (working-paper snapshot); pushed `ea15a36..05eb981`; `origin/main == HEAD == 05eb981`                |
| Live window (404 → 200)                               | 404 at 14:47:28 CEST, 200 at 14:48:08 CEST, 2026-09-17                                                                                            |
| Release decision recorded                             | card `t_1e84c815` (`.agents/work/reviews/003-vehicle-design.md`, sha256 `17d562d6…`), 14:27 CEST                                                  |
| Release recorded and verified by                      | `mars-ai-simulator-editor`, card `t_dcd80a99`, 14:50–15:00 CEST                                                                                   |

**This card's own write:** `.agents/work/releases/003-vehicle-design.md`, sha256 recorded on card
`t_dcd80a99` (self-embedding is impossible).

## Verification performed by this card — read-only, measured

No build and no guard CLI was run: `scripts/check-dist.mjs` **prunes** offending files from `dist/`
when it fails, so a release card must not run it against another card's output. Everything below was
read, hashed or fetched; the two probe scripts live outside the repository
(`/tmp/release003/audit.py`, `/tmp/release003/guardprobe.mjs`, `/tmp/release003/fields.py`).

### 1. The released build output (the tree that produced the push)

The pushed tree's build output (`.worktrees/t_accf6f7a/website/dist`, HEAD `05eb981`) was audited
against the real guard module — `checkDist()` is a pure function there; the pruning lives in the CLI
wrapper — and by direct file inspection:

| Check                                                                               | Result                                                                                                 |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Routes in the output                                                                | 9 (8 generated + 1 passthrough), **including `/news/003-vehicle-design/`**                             |
| The detail route's `<title>`                                                        | `The rover design, frozen. \| Red Horizon`                                                             |
| The detail route's `h1`, lead figure, `figcaption`, `alt`                           | `The rover design, frozen.` · `article-media` · `RH-01 Pathfinder · studio reference` · 350 characters |
| Emitted `/_astro/` files, and files no built document references                    | 11 emitted, **0 unreferenced** (the media-scope integration holds)                                     |
| `checkDist({directory: dist})` offences                                             | **0**                                                                                                  |
| `scanSourceForGatedReferences({directory: website})` offences                       | **0**                                                                                                  |
| Withheld sources the guard collects (non-vacuous proof: every one exists on disk)   | 13 — 12 documents under the withheld timeline directory plus the withheld scene image                  |
| Entries in `dist/` matching a withheld directory name or the withheld file          | **0**                                                                                                  |
| Occurrences of the two withheld text markers in the built output (html + css)       | **0** (counted by reading the marker list from the guard module, so no marker value is written here)   |
| References to any other `docs/vehicle/` render in the built output                  | **0** for all four unplaced renders                                                                    |
| News cards on `/` and `/news/` by `card-label` element count (`grep -o`-equivalent) | **3** each; the three `/news/<slug>/` links present; the 003 slug appears once per page                |

### 2. The live origin — the surface the push deploys

`https://mars-ai-simulation.janpolacek.workers.dev`, in a real browser, in-page `fetch` (a direct
`curl` is refused by this session's command scanner; `crypto.subtle` hashed the asset bytes), at
14:50–14:57 CEST:

| URL                                                               | Status  | Measured                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/news/003-vehicle-design/`                                       | **200** | title `The rover design, frozen. \| Red Horizon`; `h1` the same; kicker `Vehicle design 03`; figcaption `RH-01 Pathfinder · studio reference`; one plate `img` with the 350-character alt; 0 withheld markers, 0 scene-image references, 0 `docs/timeline` paths |
| `/_astro/canonical.C1rFlAX3_12caC6.webp`                          | **200** | `image/webp`, **57,342 B**, sha256 `10d55484…` — **byte-identical to this release's own build output**, so the deployed bundle is the released build and the plate is not a re-encode of anything else                                                           |
| `/`                                                               | 200     | 3 news cards, all three links; 0 withheld markers; 0 stale-draft copies of the article                                                                                                                                                                           |
| `/news/`                                                          | 200     | 3 news cards, all three links; 0 withheld markers                                                                                                                                                                                                                |
| `/news/001-project-announcement/`, `/news/002-payload-selection/` | 200     | unchanged titles; 0 withheld markers                                                                                                                                                                                                                             |
| `/about/`, `/wiki/`                                               | 200     | chrome only; 0 withheld markers; 0 area/vehicle/project node                                                                                                                                                                                                     |
| `/wiki/area/`                                                     | **404** | the landing-zone node is **not** public — condition C-2's trigger has not occurred                                                                                                                                                                               |
| `/sitemap.xml`                                                    | **404** | none served                                                                                                                                                                                                                                                      |
| `/404.html`                                                       | 200     | page-not-found chrome                                                                                                                                                                                                                                            |
| every live page, every string checked                             | —       | **0** withheld text-marker hits, **0** references to the withheld scene image, **0** references into the withheld timeline directory                                                                                                                             |

### 3. The 4:3 plate on the card and in the carousel (condition C-4's letterbox case)

Measured on the live pages at three viewports, because C-4 asked for it rather than for an
assumption. The plate renders 1024 × 768 natural.

| Surface                       | Viewport                | Image box       | Box ratio            | Leftover in the cell                                                   | Verdict                                                                                                                                                                                                                |
| ----------------------------- | ----------------------- | --------------- | -------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article lead figure           | 1280 × 577 / 1440 × 900 | 384 × 288       | 1.3333 = 4:3 exactly | none (the img box _is_ 4:3; the cell's extra height is the figcaption) | no crop, no distortion (`object-fit: fill` on a box that already matches the natural ratio)                                                                                                                            |
| Newsroom index card, `/news/` | 1280 × 577              | 644.56 × 527.14 | 1.2228               | filled by `--plate-fill`                                               | **not a pale band**: `.news-image::before` paints this plate itself (`background-size: cover`, `blur(28px) brightness(0.6)`) over a `--rh-surface-field` ground (`rgb(23, 17, 15)`), never the retired pale plate tone |
| Newsroom index card, `/news/` | 390 × 844               | 350 × 262.50    | 1.3333               | none                                                                   | exact 4:3                                                                                                                                                                                                              |
| Homepage carousel card, `/`   | 1280 × 577              | 644.56 × 644.56 | 1.0                  | filled by `--plate-fill`                                               | same fill layer, the same plate, `cover` — the 215 px pale band the earlier card measured is gone                                                                                                                      |
| Homepage carousel card, `/`   | 390 × 844               | 350 × 308.67    | 1.1339               | filled by `--plate-fill`                                               | same                                                                                                                                                                                                                   |

### 4. Confidentiality check on the released surface and on this record

- The released article, its frontmatter strings, the built output and every live page were scanned
  for the two withheld text markers: **0 hits**; for the withheld scene image: **0 references**; for
  the withheld timeline directory: **0 references**. The built output contains no file matching a
  withheld directory name or the withheld file.
- Withheld material is named in this record **by location or by class**, never by value: the withheld
  directory as `docs/timeline/`, the withheld text markers as “the two landing-region coordinate
  markers (`gatedTextMarkers` in `website/scripts/guards.mjs`)”, the withheld file by
  the path that is already in committed source. No coordinate, geometry, touchdown or science-zone
  value, unit identifier, launcher, date or budget figure is written here, and no step-004+ fact is
  characterised beyond the card body's own containment list.
- What _is_ written out — the vehicle designation and name, the plate's label and alt text, the title
  and summary — is exactly what this release decision publishes.
- No `docs/` file was written by this card and no canon was authored; `docs/` was read only.
- All probes and marker lists live outside the repository, under `/tmp/release003/`.

---

## Conditions carried by the release decision — status

- **C-1 (guard retirement ships in the same change as the flip) — SATISFIED.** `e1d0a4d` carries both,
  and the released build measures 0 source offences and 0 dist offences, with the withheld scene file
  still caught by the new per-file rule.
- **C-2 (release order against the landing-zone node) — NOT TRIGGERED.** `/wiki/area/` is **404** on
  the live origin, so no landing-zone flip preceded this article. **Standing condition:** if that node
  is ever flipped as its own release decision, the article's third closing clause and published
  `002:103` must be re-read and re-worded first. Owner: this role, on the node's release card.
- **C-3 (field fidelity) — SATISFIED, verified field by field.** `publication: published`;
  `media: vehicle-references`; one `mediaAlt` (350 ASCII characters, sha256 `831d0539…`); one
  `mediaLabel` (35 characters, U+00B7 preserved); **no** `mediaCaption`; title exactly
  `The rover design, frozen.`; `summary` 149 characters, double-quoted; body bytes unchanged.
- **C-4 (build and deploy on the `origin/main` tree, with route, card, guard and letterbox checks
  measured) — SATISFIED.** Every named check is measured in §1–§3 above on the pushed tree and on the
  live origin.

## Observations — recorded, none blocking this release

- **O-1 — the shared checkout still holds a stale, pre-flip copy of the article, and it is a
  publication hazard.** `website/news/003-vehicle-design.mdx` in the shared checkout is untracked at
  sha256 `6a1caf17…` — the **pre-flip draft**, with the placeholder title and `publication: draft` —
  while `origin/main` carries the released revision `f60a3cc5…`. Any card that stages that path from
  this base (the repo-hygiene card `t_465f814d`, and the tree-reconciliation card `t_c68e877e` running
  beside this one) would push the draft over the published article and **remove 003 from production**.
  The path must be taken from `origin/main`, not from this working tree. Flagged in a comment on
  `t_c68e877e` and in this card's handoff. **Owner:** `mars-ai-simulator-dev` on `t_c68e877e` /
  `t_465f814d`.
- **O-2 — no canonical link and no sitemap on any live route.** Every route was built without
  `SITE_URL`, so `<link rel="canonical">` is absent site-wide and `/sitemap.xml` is 404. Pre-existing
  for 001 and 002, not caused by this release, and not a release condition — recorded so the SEO
  package's origin-gated sitemap item keeps a live owner. **Owner:** `mars-ai-simulator-seo`.
- **O-3 — rights and provenance for the generated artwork remain open, human-owned.** The
  `docs/vehicle/` renders have no generation record in the repository, and the model-licence question
  the 002 release recorded applies to this plate as a class. The labelling requirement it pairs with
  _is_ met (the alt text and the article's closing note both state the artwork is illustrative
  fiction and name no real agency), and 002 was released on the same footing, so this is not a blocker
  — but it is not settled by this record either. **Owner:** human story owner, with
  `mars-ai-simulator-visuals` recording citations; `project-documentation` for the dossier's
  provenance gap.
- **O-4 — the plate derivative is fetchable with the key, not with the route** (the 002 precedent: a
  statically imported plate is emitted into `dist/_astro/` and every push to `main` deploys). Here it
  is harmless in the correct order — the plate is released material, and the flip and the key shipped
  in one change — but the general question (an approved-but-unreleased key's asset becoming fetchable)
  is a registry-architecture matter tracked elsewhere on the board. **Owner:** `mars-ai-simulator-dev`.
- **O-5 — alt text is 350 characters** against the ~160-character guidance the earlier SEO package
  carried. Approved as written, and re-verified against the pixels; shortening an approved string is a
  fresh editorial act, not a copy fix. **Owner:** this role, if a stricter length is ever wanted.
- **O-6 — the duplicate corrective card `t_81e80a10` is still on the board.** Archiving is a human
  action (`hermes kanban archive t_81e80a10`); no agent holds it. **Owner:** human operator.
- **O-7 — local checkout divergence, for the hygiene card.** This record is written in the shared
  checkout, which is many commits behind `origin/main`; the release it describes is on `origin/main`
  and live. This card did not commit or push (it holds no push authority). The record reaches
  `origin/main` only through the hygiene card, which must take the article and the guard from
  `origin/main` per O-1. **Owner:** `mars-ai-simulator-dev` on `t_465f814d`.

## Inputs this release rests on

- Brief: `.agents/work/briefs/003-vehicle-design.md`
- Research: `.agents/work/sources/003-vehicle-design.md`
- Draft: `website/news/003-vehicle-design.mdx` (released revision `f60a3cc5…`)
- SEO: `.agents/work/seo/003-vehicle-design.md`
- Assets: `.agents/work/assets/003-vehicle-design/assets.md`
- Continuity: `.agents/work/continuity/003-vehicle-design.md` — **`continuity clear`** (sha256 `d9d72c79…`), on the same article bytes
- Editorial gate and release decision: `.agents/work/reviews/003-vehicle-design.md` — **`approved`**, sha256 `17d562d6…`, card `t_1e84c815`
- Canon cited: `docs/vehicle/VEHICLE.md`; `docs/SCENARIO.md` (step-003 release controls)
- Build and deploy: card `t_accf6f7a` (commits `e1d0a4d`, `05eb981`)
- Guard module: `website/scripts/guards.mjs` — `fd5a9e43…`

## Revision history of this record

| Revision                     | SHA-256                                                            | Author                                     | What moved                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------- | ------------------------------------------------------------------ | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 — planner placeholder      | `23ae89b59e3cfdc73ae11158968ac2c4a1fa1040015467df801ac6408f0a1ce7` | `mars-ai-simulator-planner` (`t_7a30964f`) | gate template with `_(to be confirmed)_` slots, unchecked containment boxes, and a pipeline graph naming the superseded duplicate card ids                                                                                                                                                                                                                                                      |
| 2 — this revision (released) | recorded on card `t_dcd80a99` (self-embedding is impossible)       | `mars-ai-simulator-editor` (`t_dcd80a99`)  | status `released`; all three gates recorded as this role's decisions with template sentences, alternatives and fail-closed defaults; containment checklist resolved line by line; the applied flip diff and the guard retirement recorded; released hashes; read-only build audit, guard probe, live-surface table, and the 4:3 measurements; conditions C-1–C-4 statused; observations O-1–O-7 |

---

_This record is working material, not canon. Canon lives in `docs/SCENARIO.md` and
`docs/vehicle/VEHICLE.md`. The continuity verdict and the editorial verdict are gate outcomes; the
release decision recorded here and on card `t_1e84c815` is what licensed the flip, and the push of
that flip by `t_accf6f7a` is what published the article._
