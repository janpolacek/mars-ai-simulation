# Asset manifest: wiki-rh-01-pathfinder

## Manifest metadata

| Field            | Value                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Slug             | `wiki-rh-01-pathfinder`                                                                                                                   |
| Card (this pass) | `t_4a919a79` — `mars-ai-simulator-visuals`, run 192, claimed 2026-09-17 20:13:39 CEST, worked 20:13–20:2x CEST                            |
| Page             | `website/wiki/rh-01-pathfinder.mdx` — `section: vehicle`, route `/wiki/vehicle/rh-01-pathfinder/`, `publication: draft`                   |
| Draft identity   | SHA-256 `5bd37229282da26433ba0ebcb308958d03d92bd3de1d1f0b384f029ae5e5d813`, 9,311 B, 145 lines, mtime 2026-09-17 20:12:09 CET             |
| Timeline step    | `003-vehicle-design` — the step that released the RH-01 dossier and its approved studio references; this page adds no later step          |
| Brief            | `.agents/work/briefs/wiki-content-plan.md` §4 (line 141: reuse `vehicle-references`, pure reuse manifest), §1 (flat-file wiki convention) |
| Status           | `complete as a reuse record` — **no new imagery**; not approved, not placed by this card; page untouched; nothing committed               |

## Determination

**`no new imagery: reuse `vehicle-references`` — the existing media key, resolving to the one
approved studio reference the step-003 gate released.**

Nothing is generated, derived, cropped, re-encoded, upscaled or copied: the plate is an existing
canonical file in the subject dossier that `docs/README.md` (line 23) assigns to
`project-documentation` with `mars-ai-simulator-visuals`, so **no export step exists to propose** —
its stable filename is the path it already has. No `tools/visual-generator/` run was made, no
prompt was written, no candidate exists, no GPU time was spent, and **no new media key was
created**.

## Subject and moment

RH-01 Pathfinder — the studio reference plate, the only approved artwork of the vehicle. The page
is a stable reference entry about the vehicle's design, not an event, so the moment it needs is
exactly the one the plate already holds: the baseline studio view, before any surface operations.

### Reference assets to preserve continuity from

| File                                             | SHA-256                                                            | Bytes     | Pixels      | Placed?                                     |
| ------------------------------------------------ | ------------------------------------------------------------------ | --------- | ----------- | ------------------------------------------- |
| `docs/vehicles/pathfinder/canonical.png`         | `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267` | 1,889,350 | 1448 × 1086 | **Yes** — the one plate this page renders   |
| `docs/vehicles/pathfinder/front-left.png`        | `8dd257eed4ddb3298385786d84b3b7a74d815a3ff2efc8c6a9038a23eb1eb422` | 1,792,437 | —           | No — approved reference, nothing imports it |
| `docs/vehicles/pathfinder/side-view.png`         | `441a115255b0c171020d40073a2be3dc3042e2b6860df15abfcbf0a63de5e0f7` | 1,755,564 | —           | No — same                                   |
| `docs/vehicles/pathfinder/rear-right.png`        | `579ef86f226334faf553dec9442e13e93694134b29cac18b4a445cd480895add` | 1,785,236 | —           | No — same                                   |
| `docs/vehicles/pathfinder/contact-arm.png`       | `a1817732e3a6374e71415757753da77de29078dd1cc67773b9f7a704a3b886f4` | 2,125,751 | —           | No — same                                   |
| `docs/vehicles/pathfinder/contact-arm-scene.png` | `63d047e5541801e0d085381af728b84b4bd966b86355c3a003128db761b2ae03` | 2,672,139 | —           | **No — withheld**, per the rule below       |

All six hashed in the same pass, 2026-09-17 20:1x CEST. The placed plate is 4:3 (1448 × 1086 =
1.3334), 8-bit RGB, non-interlaced, mtime 2026-09-15 23:19:27.

## Placement

The page's `media: vehicle-references` frontmatter resolves to the **single lead figure** in
`website/src/pages/wiki/[section]/[slug].astro` lines 64-75 — not the `MediaPlates` block. The key
selects that branch mechanically: `isPlateSet()` is `plates.length > 1`
(`src/features/news/plates.ts:67-69`), and this key resolves one plate, so `plateSet` is `false` and
the `MediaPlates.astro` branch at lines 77-84 never runs. Verified by executing the real module —
see §Validation. The figure renders between `.wiki-header` and `.wiki-body`, `width={1024}`,
`format="webp"`, `loading="eager"`, with `alt` taken verbatim from the single `mediaAlt` entry and a
`figcaption` printed **only** when `mediaLabel` is set — it is not, so the figure is image-only.

- **Route:** `/wiki/vehicle/rh-01-pathfinder/`. Not live: the page is `publication: draft`, and
  `dist/wiki/` currently holds only `index.html`, so no leaf route is generated (2026-09-17 20:1x).
- **Aspect ratio / crop notes:** 4:3 source, **no crop at any placement**. `.wiki-media img` is
  `width: 100%; max-width: 24rem; height: auto` (lines 151-155), so the plate renders at its natural
  4:3 shape inside a 44rem column. Nothing is contained-and-letterboxed and no safe area applies,
  because the figure is narrower than its column and its column is text-width. No derivative is
  authored by hand; Astro emits the webp at build time from the `docs/` original.

## The media key contract, verified

| Field             | Value                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| Key               | `vehicle-references` (`website/src/lib/media.ts:60`)                                                    |
| Requirement tuple | `{ plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }`                                 |
| Resolver          | `website/src/features/news/media.ts:75-77` → one plate, label `RH-01 Pathfinder · studio reference`     |
| Asset import      | `website/src/lib/assets.ts:9` → `docs/vehicles/pathfinder/canonical.png` (the site's only import of it) |
| Page declares     | `media: vehicle-references`, one `mediaAlt` string, **no** `mediaLabel`, **no** `mediaCaption`          |

Frontmatter keys present on the page: `title`, `section`, `publication`, `order`, `summary`,
`canonicalDocs`, `related`, `media`, `mediaAlt`. The wiki schema validates the same media fields
through the same module as news (`website/src/content.config.ts:107-116`), so the contract above is
the build gate for this page too.

## Alt text (one `mediaAlt` entry, as the page declares it)

> "The RH-01 Pathfinder rover in its studio baseline configuration: a warm-white rectangular
> equipment body with a dark instrument deck, six open-mesh wheels on visible articulated
> suspension, a short central stereo camera mast, and a single front contact arm nested in its
> travel cradle, against a neutral white background. Illustrative artwork, not mission photography;
> a fictional vehicle for a fictional programme; no real agency is named or implied."

451 characters, one entry (`altCount: 1`). Background-neutral: it names the silhouette and the
studio field, and claims no terrain, no event, no agency. The fiction disclosure is in the string
itself, which matters here: a one-plate key renders **no** caption, so the registry cannot print the
"illustrative artwork" statement on this page — the alt text is the only place it reaches the
reader. This card did not rewrite it.

**Verified against the pixels** (two `vision_analyze` passes, full frame and two crops, 2026-09-17
20:1x CEST): warm-white/off-white rectangular body with modestly rounded protected corners and dark
red accent panels ✓; dark flat matte instrument deck ✓; six open-mesh drum wheels on visible
articulated (rocker-bogie) suspension, silver hubs ✓; one short central mast carrying **one** camera
housing with **two** dark lenses, no dish, no radar boom, no antenna cluster, no second tower ✓;
**one** front contact arm, two links plus pivot, lying inside a shallow cradle recessed into the
front face (stowed, not raised) ✓; seamless neutral white studio floor and background with a soft
grounded shadow ✓; **no** embedded text, caption, label, watermark, logo, insignia, flag or graphic
overlay ✓; no seventh wheel, no duplicated arm, no floating or disconnected hardware, no impossible
shadow ✓.

Two honest qualifications, both verified rather than smoothed over — and neither is a defect in the
alt string:

- **Six wheels total, five visible from this angle.** The right-rear wheel is occluded by the body.
  The alt text's "six open-mesh wheels on visible articulated suspension" describes the _vehicle_,
  not six visible wheels, so it is accurate as written; the same read was recorded as finding 2 on
  the 003 manifest (`t_72fda1ae`) for the editorial gate, which owns the call.
- **"Short" for the mast.** Two vision passes disagreed on the ratio (one read the mast as ~1.5×
  the body's side-panel height, one as ~0.5× the body height); both agreed it is one restrained post,
  not a tower. The word follows the released dossier's own sentence — `docs/vehicles/pathfinder/VEHICLE.md:85`
  "The mast is short, central, and restrained", line 90 "The mast is not a tower" — so it mirrors
  approved canon rather than this card's judgement.

## Caption and label: none

- **No `mediaCaption`** — the key's `captionCount: 0`, and the schema rejects one
  (`newsMediaIssues()` returns an issue reading "media renders no per-plate caption when media is
  vehicle-references; remove mediaCaption").
- **No `mediaLabel`** — the key's `requiresLabel: false`. The registry's plate label
  (`RH-01 Pathfinder · studio reference`, with its U+00B7 MIDDLE DOT) therefore stays unused on this
  placement, because the lead-figure branch prints a `figcaption` only from frontmatter
  `mediaLabel`, never from `plate.label`. The label would need a frontmatter line and the editorial
  gate's approval; it is not added here.

## Tool / generation record

**None — no generation.** The plate is a pre-existing canonical asset in the subject dossier. No
`image_generate` call, no `comfyui-*.workflow.json` sidecar, no `tools/visual-generator/` run (no
`spec.json`, prompt, `assets/`, `stories/`, `*.api.json` / `*.inputs.json` / `*.job.json` /
`*.history.json`), no model file downloaded, no `docs/` file written.

## Engine state (no GPU work)

`~/.hermes/profiles/mars-ai-simulator-visuals/bin/comfyctl status` at 20:1x CEST on 2026-09-17:

```
running: no   url: http://127.0.0.1:8188  gpu_used: 2089 MiB
```

The server was never started for this card and no model was loaded, so it is `no` at the start and
at the end of the card as well; `comfyctl stop` has nothing to stop. ComfyUI is **N/A by decision** —
starting an engine that loads a 4–8 GB model to produce nothing would only hold VRAM against the
next worker. The 2,089 MiB belongs to a non-ComfyUI process.

## Rights

- Generated for Red Horizon scenario planning: the fiction's own vehicle, described from the
  programme's dossier `docs/vehicles/pathfinder/VEHICLE.md`. **Not third-party or stock imagery**, no
  real institution, provider, partner or insignia depicted or named.
- The plate's public standing rests on the **step-003 release recorded by the editorial gate on
  `t_1e84c815`** (`.agents/work/reviews/003-vehicle-design.md` §2, §8.1), which approved
  `canonical.png` by content hash. That release, not this manifest, is what clears the file — this
  card neither makes nor extends a release decision, and **only the human chooses the authoritative
  file**.
- Vehicle name, silhouette and equipment placement are governed by the dossier and, on the brand
  side, by `docs/brand/BRAND.md`. No brand asset is used by this placement.

## Barred media (must not appear on this page)

- `docs/vehicles/pathfinder/contact-arm-scene.png` — **withheld**. `website/scripts/guards.mjs:63-65`
  holds a per-file rule for it (`gatedFilePathSegments`), and `checkDist()` fails the build on a
  copied, re-encoded or re-derived version of it by name, name stem and content hash.
- The dossier's other four studio renders — approved references that **nothing places**; only
  `canonical.png` may be imported.
- `docs/vehicles/ariane/` — untracked material for a later step; the page carries no launcher,
  provider, institution or launch/landing-date claim (grep-verified, §Validation).
- `docs/timeline/` — private continuity source.
- `docs/area/` plates AF-01/AF-02/AF-03 — released **for article 001 only**
  (`docs/SCENARIO.md:279`); no Asteria Field material in any alt text, caption, label, slug or asset
  name on this page.
- Any step-004+ fact: no launcher, no provider or partner, no launch or landing date, no landing
  design, no performance figure (speed, range, mass) beyond the dossier's "roughly two metres in
  class".

## Findings (routed, not decided here)

1. **The page changed after the SEO pass measured it, and the SEO record's byte-stability anchor is
   therefore stale.** `.agents/work/seo/wiki-rh-01-pathfinder.md` (card `t_aef9c659`, completed
   20:12) records the draft as byte-stable at SHA-256 `c6202ad5…` and measures its `mediaAlt` at
   "383 characters" while quoting a 449-character string. The file on disk now hashes
   `5bd37229…` at the **same** 9,311 B with mtime 20:12:09, and its `mediaAlt` is **451** characters:
   the current string inserts "a " before "short central stereo camera mast" at index 190, and the
   SEO's own quoted string is itself 449 chars, not the 383 it reports. So the page's bytes were
   rewritten at 20:12:09 — after the SEO read — by a same-length edit. The current frontmatter still
   satisfies the key contract (verified by executing the real module, §Validation), and this card did
   not touch the page. **Owner: the editorial final gate `t_d6ec1166`**, whose acceptance criterion
   is "the continuity verdict on the same MDX bytes the dev card will publish" — it should anchor on
   `5bd37229…`, not `c6202ad5…`, and should re-check the 154-char summary margin the SEO flagged as
   1 character.
2. **The placement path in this card's body does not exist, and the delivered page's path is the
   convention.** The card names `website/wiki/vehicle/rh-01-pathfinder.mdx`; the drafted page is
   `website/wiki/rh-01-pathfinder.mdx` (flat, with `section: vehicle` in frontmatter). The brief
   already corrected this — `.agents/work/briefs/wiki-content-plan.md` §1: a nested file has
   `id = "vehicle/rh-01-pathfinder"` and the route generator produces
   `/wiki/vehicle/vehicle/rh-01-pathfinder/` or fails. The nested path in the card body is stale
   wording, the flat path is correct, and **no worker should "fix" the page onto the nested path**.
   Owner: `t_d6ec1166` (which carries the same operator note) and the dev card.
3. **The `docs/vehicle/ → docs/vehicles/` split is staged but uncommitted, so the path this manifest
   states is the working-tree path, not yet the published one.** `git ls-files -s` shows
   `docs/vehicles/pathfinder/canonical.png` in the index as an `R100` rename, and `docs/vehicle/`
   **no longer exists on disk**; the site's import (`src/lib/assets.ts:9`) and the guard's per-file
   rule both already name the post-split path. Publication is card `t_1476a18c`
   (`mars-ai-simulator-dev`, currently `todo`). If that card were instead to revert the split, the
   import path this manifest records would break — worth knowing before anyone treats the split as
   settled.
4. **The plate has no recorded private generation provenance.** `docs/area/AREA.md` records its
   plates' producer and date and `docs/brand/BRAND.md` records the mark's, but nothing equivalent
   exists for this dossier: `VEHICLE.md` documents appearance only, and the six PNGs carry no
   sidecar and no record anywhere in the repository (file times 2026-09-15 23:19–23:22). The
   provenance reference this manifest can honestly give is therefore the **canonical path plus
   SHA-256**; the generation record (prompt, model, seed, raw candidates) is not in the repository
   and was not available to this card. Carried forward from 003 finding 3; owner
   `project-documentation` / the editorial gate, not this card.

## Validation performed

All rows run 2026-09-17 between 20:13 and 20:2x CEST against the live shared tree. Scratch probes
live in `/tmp/wiki-veh-probe/` (outside the repository). **No build was run** — the card forbids one,
and none of these checks emits into `website/dist`.

| Check                                    | Command / source                                                                                                                     | Result                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Plate present, hash and identity         | `sha256sum`, `stat -c`, `file` on `docs/vehicles/pathfinder/*.png`                                                                   | `8dbb33d5…`, 1,889,350 B, 1448 × 1086, 8-bit RGB, non-interlaced, mtime 2026-09-15 23:19:27; the other five hashed in the same pass (§Reference assets). Nothing copied or moved                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Alt text matches the produced pixels     | `vision_analyze` — full frame plus two crops (mast region, body/arm region)                                                          | Every cue in the alt string confirmed at the position it names, plus "no embedded text / no duplicated arm / no extra wheel / no floating hardware"; two qualifications recorded above                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| The key contract genuinely passes        | `esbuild src/lib/media.ts` → `/tmp/wiki-veh-probe/media.mjs`; node probe parses the page's frontmatter and calls `newsMediaIssues()` | `isNewsMediaKey('vehicle-references') = true`; tuple `{plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false}`; **`newsMediaIssues()` returned `[]` — the schema would pass**; `mediaAlt` = 1 entry (451 chars), `mediaLabel` absent, `mediaCaption` absent                                                                                                                                                                                                                                                                                                                                                 |
| The key resolves to one plate, not a set | same probe over the real modules; `isPlateSet` in `src/features/news/plates.ts:67-69`                                                | 1 plate → `isPlateSet = false` → the single lead figure in `pages/wiki/[section]/[slug].astro:64-75`, not `MediaPlates.astro`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Media contract suite                     | `website/node_modules/.bin/vitest run test/news-media.test.mjs` (20:16)                                                              | **27 of 27 pass in 1 file** — includes the assertion that every media key resolves to exactly its declared `plateCount`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| The reuse is not blocked by a guard      | `node /tmp/wiki-veh-probe/guard-probe.mjs` (imports the **real** `website/scripts/guards.mjs`)                                       | `gatedDirectoryNames = ['timeline']`; withheld file = `docs/vehicles/pathfinder/contact-arm-scene.png` (exists, ≠ the placed plate); **`scanSourceForGatedReferences()` → no offences**; **`checkDist()` → no offences**                                                                                                                                                                                                                                                                                                                                                                                                |
| No spoiler fact in metadata or prose     | node marker scan over frontmatter and body separately                                                                                | Zero hits for `ariane`, `launcher`, `provider`, `orbit`, `institution`, `NASA`, `ESA`, `2031`, `2026`, date forms, `timeline`, `asteria`, `touchdown`, `ellipse`, `18° 42`, `226° 14`, `speed`, `km/h`, `recently`, `latest`, `will soon`, `is expected`, `partnership`. Every hit of `agency` (3) is the required "no real agency" / "no official agency insignia" negation; `landing` (1) is inside the negative list "no rocks, red soil, landing platform, astronaut"; `mass` (1) is "equipment mass visually concentrated close to the chassis", a shape descriptor; `kg` (3) is the substring inside "background" |
| The page is not live                     | `ls website/dist/wiki/`                                                                                                              | Only `index.html` — `publication: draft`, so no leaf route exists; nothing public is affected by this card                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| No `docs/` file written, no page edit    | `git status --short -- docs/vehicles website/wiki .agents/work/assets`                                                               | The only path this run writes is this manifest; the page's SHA-256 is unchanged from the value recorded at the top of this file                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Engine state                             | `comfyctl status`                                                                                                                    | `running: no` — never started for this card                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## was / is — what this run corrected in the pre-seeded manifest

This file already existed when this run started: written at **20:14:42**, 63 seconds after this card
was claimed (20:13:39), 5,418 B, SHA-256 `e2552e2b…`. This run did not write it, and the card's
event log shows a single claim (run 192, `t_4a919a79`), so its content — which mirrors the card
body's own wording section for section — is read as a pre-seeded draft, and it was revised rather
than replaced on trust. Three of its statements did not survive verification:

| Claim in the pre-seeded file                                                       | Measured state (2026-09-17 20:1x)                                                                                                     |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| The guard's withheld file is `docs/vehicle/contact-arm-scene.png` (its §Path note) | The rule is `docs/vehicles/pathfinder/contact-arm-scene.png` — `guards.mjs:63-65`, post-split path, confirmed by importing the module |
| "the tracked path on disk is still `docs/vehicle/canonical.png`"                   | `docs/vehicle/` **does not exist**; `git ls-files -s` shows the post-split path staged as an `R100` rename — see finding 3            |
| "The schema's `newsMediaIssues()` returns `[]`" (asserted, no evidence)            | Now **executed** against the real module and the page's real frontmatter: `[]`, plus 27/27 media tests                                |

Everything else the pre-seeded file recorded — the reuse decision, the subject, the placement block,
the allowed/forbidden fact lists, the alt text, the no-caption/no-label contract — matched the tree
and is carried forward, now with the evidence this card is supposed to supply.

## Private provenance and repository hygiene

- **Provenance reference:** `docs/vehicles/pathfinder/canonical.png`, SHA-256
  `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267`, approved for step 003 by
  `t_1e84c815`. No generation prompt, model, seed or raw candidate exists in this repository
  (finding 4).
- **No new media** anywhere: no candidate, sidecar, run record or model file was added; nothing was
  copied out of `docs/`, because the plate is already at its canonical path — so the site engineer
  has no export step to perform for this page.
- **Nothing committed, pushed, built or published.** No `publication: published` flip, no
  `website/` edit, no deploy.

## Handoff

- **Next recommended owner:** `mars-ai-simulator-editor` on the editorial final gate `t_d6ec1166`
  (child of this card) — it owns the release decision for `/wiki/vehicle/rh-01-pathfinder/`, and it
  should anchor on the MDX bytes `5bd37229…` rather than the SEO record's stale `c6202ad5…`
  (finding 1), keep the flat page path (finding 2), and rule on the five-visible-of-six-wheels read
  in the alt text if it wants a change.
- **Then:** `mars-ai-simulator-dev` applies the release decision to the page and builds.
- **Not this card's to do:** no `docs/` or `website/` file written, no canon decided, no release
  decision made, no commit, no push, no build, no deploy. Nothing in this manifest is approved,
  placed or published.
