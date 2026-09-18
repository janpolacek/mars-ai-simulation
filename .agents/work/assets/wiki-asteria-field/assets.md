# Asset manifest: wiki-asteria-field

Card: `t_0c83565f` (Create visual assets: wiki-asteria-field) — stage `visuals`, **reuse only**.
Page: `website/wiki/asteria-field.mdx`, section `area`, slug `asteria-field`, route `/wiki/area/asteria-field/`.
Canonical dossier: `docs/area/AREA.md` (the page's `canonicalDocs:`).

## Decision

**No new imagery: reuse `asteria-plates`.**

The `asteria-plates` media key is registered in `website/src/lib/media.ts:40` and resolved in
`website/src/features/news/media.ts:27-44` to the three plates AF-01 / AF-02 / AF-03, imported from
their canonical `docs/area/` copies via `website/src/lib/assets.ts:3-5`.

No new ComfyUI start, no `tools/visual-generator/` write, no new media key. Nothing is generated,
derived, upscaled, cropped or re-encoded here: no `image_generate` call was made, no prompt was
written, no candidate exists, and no GPU time was spent.

## Manifest metadata

| Field             | Value                                                                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Page hash at rest | SHA-256 `fdc5a902865ef2d9d970b68b373201517ceaad560ed2123b251b55d0cec8eeed`, 8,739 B, 121 lines (unchanged by this card)                                                                                            |
| Brief             | `.agents/work/briefs/wiki-content-plan.md` §4 (`area/asteria-field` — "reuse the `asteria-plates` media key"), §Bounds                                                                                             |
| Upstream          | SEO `t_b2e8e9b5` (parent — **done 20:50 CEST**: 13/13 checks, media contract **PASS**, no frontmatter edit, page hash unchanged) · writer `t_10fc616a` (draft note relayed mid-run) · planner `t_f2713ffa` (graph) |
| Downstream        | Editorial final gate `t_06da3c70` (owns the release decision and names the public scope)                                                                                                                           |
| Status            | `complete` — reuse manifest only                                                                                                                                                                                   |

## Subject and moment

The fictional planning region Asteria Field — locator (AF-01), regional context (AF-02), local
operations frame (AF-03) — as released with the project announcement. All three plates are
pre-existing canonical assets; the wiki page reuses them.

## Placement

The page's `media: asteria-plates` frontmatter resolves to the `MediaPlates` component
(`website/src/features/news/MediaPlates.astro`) via the leaf route generator
(`website/src/pages/wiki/[section]/[slug].astro:77-84`). The component is a plate block, not a
single lead figure — three figures with the per-plate caption that
`plateFigures({ set, mediaAlt, mediaCaption })` composes. The single-plate branch at `:64-75` is not
taken (`isPlateSet`, >1 plate).

**Placement path correction.** The card body named `website/wiki/area/asteria-field.mdx`. The draft
is at the **flat** path `website/wiki/asteria-field.mdx`, and that is correct: the wiki loader is
`glob({ base: './wiki', pattern: '**/*.mdx' })` (`website/src/content.config.ts:73-77`), so the entry
id is the path relative to `base`; a nested `area/` directory would make the id `area/asteria-field`,
and the leaf route passes `entry.id` straight into the `[slug]` param
(`website/src/pages/wiki/[section]/[slug].astro:34`), producing `/wiki/area/area/asteria-field/`.
All three wiki pages are flat today. The **public URL is unchanged** (`/wiki/area/asteria-field/`)
because the section segment comes from frontmatter `section`, not from the directory. Independently
confirmed by the writer on `t_10fc616a` in a scratch build; recorded here so the deploy stage cannot
re-nest it.

## Reference assets to preserve continuity from

| Plate | Canonical source (byte-identical; nothing copied into `website/public/`) | SHA-256                                                            | Size · pixels · ratio                |
| ----- | ------------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------ |
| AF-01 | `docs/area/asteria-field-01-mars-locator.png`                            | `f12c58f57d3315f6446bcea61fb5258e4731192fb7fa2f9390dfe3d06a48085c` | 2,333,852 B · 1536 × 1024 RGB · 3:2  |
| AF-02 | `docs/area/asteria-field-02-regional-context.png`                        | `253784572f441738c305c2d481c1ece785872b305113e373371a9f5af4f357e0` | 3,311,859 B · 1536 × 1024 RGB · 3:2  |
| AF-03 | `docs/area/asteria-field-03-local-operations.png`                        | `2890e34343bf7f5441ae3352d681039fc4383edbb7fabdebad7aab875c451c23` | 3,492,102 B · 1448 × 1086 RGBA · 4:3 |

All three are `GPT Image generation, 2026-09-16; generated terrain and cartographic overlays`
(`docs/area/AREA.md:237-239`, §Map package); `docs/area/AREA.md:245` records that the PNGs reproduce
no NASA, ESA, USGS, HiRISE, CTX or MOLA imagery.

**Crop notes: none.** `MediaPlates.astro:33` renders `width={1152} format="webp"` with height auto,
so the full frame ships — no crop is applied and no crop note is required.

## Allowed canon facts (in alt / caption / label)

- The planning region is fictional; the parent geography is Margaritifer Terra.
- The planning centre is 17.80°S, 332.20°E; the planning envelope spans 12.5–24.0°S and 327–338°E;
  the local operations frame is 8 × 6 km at that centre.
- Plates are generated visualizations, not orbital imagery.

## Forbidden / spoiler facts (do NOT add to manifest, alt, caption, label, slug, commit)

- Landing-design material: no ellipse geometry, no P0 touchdown zone, no science-zone plan, no
  hazard inventory, no traverse logic, no AF-* unit identifier. (`docs/SCENARIO.md:279` H1 decision
  2026-09-17 option i.)
- No real institution, provider, operator, facility or agency name. No partnership, no endorsement.
- No launcher or launch-vehicle designation, and no launch or landing date.
- No `/docs/timeline/` references.
- No step-002/003/004+ fact paraphrased into plate captions.

## Alt text (per `mediaAlt` frontmatter, three entries)

- **AF-01**: "AF-01. Whole-planet Mars view marking the fictional Asteria Field planning region inside Margaritifer Terra; a generated visualization, not orbital imagery."
- **AF-02**: "AF-02. Regional view of the fictional Asteria Field planning envelope with its working terrain classes and a centre marker; a generated visualization, not orbital imagery."
- **AF-03**: "AF-03. Local view of the fictional Asteria Field operations frame with its scenario planning overlays; a generated visualization, not orbital imagery."

Each entry names the plate (`AF-01` / `AF-02` / `AF-03`) and carries the "generated visualization,
not orbital imagery" statement, so the artwork disclaimer reaches the reader on every plate (a
multi-plate key renders a plate block, and this is where that statement is stated for it).

**Correction — this is _not_ article 001's wording verbatim.** An earlier draft of this manifest
claimed the page "mirrors article 001's published frontmatter" and "reuses them with the article's
published alt text and captions". That is false for the alt text and for two of the three captions:

| Plate | Article 001 (`website/news/001-project-announcement.mdx:12-14`)                                                                                          | This page (`website/wiki/asteria-field.mdx:10-12`)                                                                              | Verdict |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AF-01 | "AF-01. Whole-planet Mars view with an arrow marking the fictional Red Horizon target region; a generated visualization, not orbital imagery."           | "AF-01. Whole-planet Mars view marking the fictional Asteria Field planning region inside Margaritifer Terra; …"                | differs |
| AF-02 | "AF-02. Regional map of the fictional planning envelope with working terrain units and a centre marker; a generated visualization, not orbital imagery." | "AF-02. Regional view of the fictional Asteria Field planning envelope with its working terrain classes and a centre marker; …" | differs |
| AF-03 | "AF-03. Local operations frame for the fictional planning area with scenario planning overlays; a generated visualization, not orbital imagery."         | "AF-03. Local view of the fictional Asteria Field operations frame with its scenario planning overlays; …"                      | differs |

The difference is deliberate, not drift: this card's brief required background-neutral wording that
names the fictional Asteria Field region and each plate's released content, with the "generated
visualization, not orbital imagery" statement in **every** entry. Both sets satisfy the key contract
(`altCount: 3`, non-blank). The SEO card `t_b2e8e9b5` owns the final wording check; recorded here so
no later reader treats the difference as a silent text change.

## Caption (per `mediaCaption` frontmatter, three entries)

- AF-01: "The fictional target region on Mars, at planet scale."
- AF-02: "The planning envelope drawn across the region, at roughly 200 km scale."
- AF-03: "The local operations frame, 8 by 6 kilometres, at 1 km scale."

Against article 001 (`:16-18`): AF-01 001 reads "The fictional target region on the planet, at planet
scale." (differs: "on Mars" / "on the planet"); AF-02 001 reads "The planning envelope across the
region, at roughly 200 km scale." (differs by "drawn"); AF-03 001 reads "The 8 by 6 km local frame
used to keep mission planning consistent." (materially different wording). Same conclusion as the
alt table: same released facts, deliberately not byte-identical strings.

The set's provenance sentence — "Generated visualization for Red Horizon scenario planning,
2026-09-16. Not orbital imagery." — is registered on `newsMedia['asteria-plates'].provenance` in
`src/features/news/media.ts:33` and printed on every caption by `plateCaptionText`
(`src/features/news/plates.ts:45-60`). **Do not duplicate** it in `mediaCaption`. The AF-03
`captionNote` — "The local-operations frame is fictional scenario planning, not a confirmed
operational plan." — is registered on the plate and printed on the caption; do not duplicate.

### What the reader receives (composed with the site's own composer, not by eye)

`plateFigures()` (`website/src/features/news/plates.ts:86-104`) run over the page's frontmatter and
the registry values, 2026-09-17 20:14 CEST — `label — caption + plate note + set provenance`:

- AF-01 — "AF-01 · Mars locator — The fictional target region on Mars, at planet scale. Generated visualization for Red Horizon scenario planning, 2026-09-16. Not orbital imagery."
- AF-02 — "AF-02 · Regional context — The planning envelope drawn across the region, at roughly 200 km scale. Generated visualization for Red Horizon scenario planning, 2026-09-16. Not orbital imagery."
- AF-03 — "AF-03 · Local operations frame — The local operations frame, 8 by 6 kilometres, at 1 km scale. The local-operations frame is fictional scenario planning, not a confirmed operational plan. Generated visualization for Red Horizon scenario planning, 2026-09-16. Not orbital imagery."

## Label (per `mediaLabel` frontmatter)

`mediaLabel: "Red Horizon // fictional Asteria Field planning plates"`. The `asteria-plates` key
`requiresLabel: true` (`src/lib/media.ts:40`). This string **is** byte-identical to article 001's
(`website/news/001-project-announcement.mdx:19`).

## Release record (whose decision covers this placement)

The plates are **already-released** material; this card neither creates nor extends a release, and
it does not treat the plates as newly approved canon.

1. **Human story owner, 2026-09-17** (relayed by the operator): no new imagery is needed and the
   three `docs/area/` plates are to be used. `.agents/work/assets/001-project-announcement/assets.md`
   §Release record holds the verbatim answer and the article-001 scope with its bar ("must not be
   reused on any other article, card, or asset surface without a new human decision").
2. **`docs/SCENARIO.md:279`** (§Continuity and release controls) — the controlling record. It holds
   the article-001 partial release **and** the "Wiki area-page exception — operator answer 2026-09-17
   13:40 CEST on gate card `t_9b2a308d` (Gate A selected A)": the `/wiki/area/` landing-zone wiki
   page (Asteria Field, derived from `docs/area/AREA.md`) **is public at step 003 in publication
   STATE**; the landing-design withhold survives; and the publication **flip** for the wiki area page
   is the merged editorial role's release decision on its gate card.
3. **Operator's binding consequence 3 on `t_9b2a308d`** (comment, 2026-09-17 13:40 CEST): "_Only
   already-released material (name, centre coordinates, plates AF-01/AF-02/AF-03 released for
   article 001) may be reused_" on the wiki area page, with the landing-design withhold list
   unchanged for prose, alt text and captions.
4. **Planner decision** `.agents/work/briefs/wiki-content-plan.md` §4 and §Bounds: the `area` page
   reuses `asteria-plates`; the visuals card is a pure reuse manifest; the page may use only the
   designation, the planning centre coordinates and the three released plates.
5. **Correction to an earlier draft of this file** which said the wiki leaf "reuses them under the
   same approval" as article 001. That overstates it: the article-001 release line is
   article-scoped, and the reuse here rests on the operator's Gate A answer (point 3), the SCENARIO
   exception (point 2) and the planner's decision (point 4). See §Findings 1.
6. **What is _not_ approved here:** no `publication: published` flip, no `website/` byte, no new
   media key, no `docs/` edit, no commit, no push, no build, no deploy, no new canon. The page ships
   only when the editorial gate `t_06da3c70` records its release decision.

## Tool / generation record

None — no generation for this card. The plates are pre-existing canonical assets, so there is
nothing to stop at the end of the card either; the engine state is reported for the record because a
loaded server holds VRAM against the next worker.

`~/.hermes/profiles/mars-ai-simulator-visuals/bin/comfyctl status`, 2026-09-17 20:13 CEST:

```
running: no   url: http://127.0.0.1:8188  gpu_used: 2078 MiB     (first run, 20:13 CEST)
running: no   url: http://127.0.0.1:8188  gpu_used: 2056 MiB     (re-validation, 20:52 CEST)
```

The server was **never started** for this card (starting the engine to produce nothing would hold
VRAM for no reason); it is `no` at the end of the card as well. The 2,078 MiB belongs to a non-ComfyUI
process on this machine. ComfyUI is **N/A by decision**. No `stories/<vehicle>/runs/` record, no
`comfyui-*.workflow.json` sidecar, no model file downloaded.

## Rights / provenance

- Generated for Red Horizon scenario planning 2026-09-16 (`docs/area/AREA.md` §Map package).
- **Not orbital imagery**; not third-party imagery; the PNGs reproduce no agency product
  (`docs/area/AREA.md:245`). Presented under the fictional-programme disclosure that governs the site.
  Note on form: that canon line — and this bullet — names agencies only to **deny** their provenance
  ("reproduce no NASA, ESA, USGS, HiRISE, CTX or MOLA imagery"). It is a rights statement, exactly as
  the dossier writes it, and it claims no institution, provider or facility. No agency or provider is
  named on the page's public surface (§Validation, containment scan: `NONE`).
- The transparent variant `docs/brand/logo-transparent.png` is unrelated and is not placed on this page.
- The plates' generation prompts and raw candidates belong to the local generation workspace, which
  keeps no permanent assets; nothing of that lives in this repository, and this card created none.

## Key contract verification

- `plateCount: 3` (matches the three plates in the set).
- `altCount: 3` / `captionCount: 3` (three `mediaAlt`, three `mediaCaption` entries on the page).
- `requiresLabel: true` (one `mediaLabel` entry on the page).
- The schema's `newsMediaIssues()` (`src/lib/media.ts:98-139`) returns `[]` for this frontmatter —
  verified by running the real module, not by reading (§Validation). _(Line range corrected on
  re-validation, 2026-09-17 20:52: the function's closing brace is line 139, not 138.)_
- The wiki collection calls it at build time in a `superRefine` (`src/content.config.ts:112-116`), so
  a page that drifts from this key contract fails the build with a field path rather than shipping
  unchecked. The contract is enforced, not merely documented.

## Findings (routed, not decided here)

1. **The release-scope wording is inconsistent across the records; the editor gate should reconcile
   it.** `docs/area/AREA.md:18-19` still reads the plates as _"released for article 001 only"_ /
   _"Partially released (article 001 only)"_, and `website/src/lib/assets.ts:59,65` still says
   _"released for article 001 only"_ / _"Only article 001 has a release for them"_. Those lines were
   not amended when `docs/SCENARIO.md:279` gained the wiki area-page exception. Reuse here is
   grounded in the operator's binding consequence 3 on `t_9b2a308d` plus the planner's §4 decision —
   **not** in a widened reading of the plates' own release line. Owner: editorial final gate
   `t_06da3c70` (it owns canon confirmation and the release sentence); amending `docs/` or
   `assets.ts` is not this card's authority.
2. **The plates' pixels carry the scenario's internal cartographic overlays** — the planning-envelope
   boundary and its coordinate ticks, the working terrain-unit identifiers, and on the local
   operations frame the landing-design overlays and scenario route symbols. They are released **as
   depiction** by the H1 decision of 2026-09-17 (option i): the plate _images_ may carry the
   landing-design depiction; no landing-design fact may be written into prose, alt text or captions.
   The enumeration lives in the private dossier (`docs/area/AREA.md:237-239`), not in this manifest,
   which stays inside the withhold list this card carried. The page's public strings name none of it
   (§Validation). Same pixel truth the 001 manifest recorded in its finding 1, now on a second public
   surface. Owner: `t_06da3c70`.
3. **Placement path in the card body is stale** (`website/wiki/area/asteria-field.mdx`); the flat
   path is the working one and the URL is unaffected. Action: the deploy stage must not re-nest it.
4. **Alt/caption wording is not 001's verbatim text** (§Alt text, §Caption). **Resolved as
   wording-kept, 2026-09-17 20:50 CEST:** SEO `t_b2e8e9b5` (the owner of metadata wording)
   completed with the media/alt check **PASS** (`.agents/work/seo/wiki-asteria-field.md:133-157`) and
   **no frontmatter edit**, so the differing wording is now the shipped wording rather than a
   pending question. The editorial gate `t_06da3c70` remains the owner of whether the wording is
   _right_ against released canon; it is no longer the owner of whether it is _final_.
5. **Collision hotspot: `.agents/work/assets/wiki-*/assets.md`.** This file, together with
   `wiki-red-horizon/assets.md` and `wiki-rh-01-pathfinder/assets.md`, was written to disk at
   2026-09-17 20:14:42 CEST by a process other than this card's worker (the directory did not exist
   at 20:12 CEST; this card's first run claimed at 20:11:38). This card's file carried a false
   continuity claim and an over-reaching approval line, both corrected above; the pre-existing
   content's SHA-256 was `117ccdc5b9b809ae839e634375e19b9fa39251cd2977ebc98fea726c1ab76539` (6,649 B,
   94 lines). Flagged so the orchestrator can decide whether one owner should hold the wiki manifests.

## Barred media (must not appear on this page or this manifest)

- Any **new** imagery or a new media key: the graph's media decisions are reuse-only this round.
- `docs/vehicles/ariane/` — untracked, unapproved (`wiki-content-plan.md` §Bounds). Not referenced.
- `docs/timeline/` — private continuity material; not opened, not referenced.
- `docs/vehicles/pathfinder/contact-arm-scene.png` — withheld; `website/scripts/guards.mjs` fails the
  build on a reference to it.
- Landing-design facts in any public string (prose, `mediaAlt`, `mediaCaption`, `mediaLabel`, slug,
  commit message) per the H1 decision — and on this manifest, which is why finding 2 is by reference.
- No real institution, provider or facility name; no launcher designation; no launch or landing date.
- No plate may be presented as orbital imagery or as a confirmed operational plan — the registry
  provenance sentence and the plate-3 note are the enforcement.

## Validation performed

All rows run on 2026-09-17 between 20:13 and 20:15 CEST against the live shared tree
(`dir:/home/janpolacek/Projects/mars-ai-simulator`).

| Check                            | Command / source                                                                                                                                                                                               | Result                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Key contract (not by eye)        | `newsMediaIssues()` from the real `src/lib/media.ts`, bundled with the project's own esbuild, run over the page's parsed frontmatter — scratch script `/tmp/verify-wiki-asteria-plates.mjs` (outside the repo) | `issues: NONE`; requirement read from the real module: `{plateCount: 3, altCount: 3, captionCount: 3, requiresLabel: true}`; `mediaAlt` n=3, `mediaCaption` n=3, `mediaLabel` present                                                                                                                                                                                                                                                                                                                                                                                   |
| Registry replication is grounded | same script, substring assertions against `src/features/news/media.ts` and `src/lib/assets.ts`                                                                                                                 | The provenance sentence, all three labels, the plate-3 note and all three `docs/area/` paths are present verbatim in the sources fed to the composer                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Composed alt/caption             | `plateFigures()` from the real `src/features/news/plates.ts` (same script)                                                                                                                                     | The six strings above; provenance printed once per caption                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Containment scan, public strings | same script over the frontmatter plus the six composed strings                                                                                                                                                 | Forbidden-token set (ellipse / touchdown zone / science-zone / hazard / traverse / terrain-unit identifiers / science-point labels / launcher and provider names / real agencies / launch or landing date / `simulatedDate` / timeline / released vehicle names): **NONE present**                                                                                                                                                                                                                                                                                      |
| Alt text matches the pixels      | `vision_analyze` read of each canonical plate, 20:15 CEST                                                                                                                                                      | AF-01: whole-planet Mars globe, target marker with an `ASTERIA FIELD` callout inside the `MARGARITIFER TERRA` label — every cue confirmed. AF-02: regional view, boundary/envelope with coordinate ticks, five labelled terrain classes, centre crosshair — cues confirmed ("planning envelope" is the released canon term for the geometry the plate prints under its own name). AF-03: local operations frame with its scenario overlays — confirmed. The `AF-0x` prefixes and the "not orbital imagery" statement are the alt/registry contract, not baked-in labels |
| Plate files unchanged            | `sha256sum docs/area/asteria-field-0*.png`; `ls -l`; `file`                                                                                                                                                    | Hashes, sizes and pixel formats as tabulated; all `Sep 16 14:39`; no re-encode, no derivative, no crop                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Media / scope / wiki tests       | `./node_modules/.bin/vitest run test/news-media.test.mjs test/media-scope.test.mjs test/wiki-index.test.mjs`                                                                                                   | 3 files, **58 tests passed**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Full test suite                  | `./node_modules/.bin/vitest run`                                                                                                                                                                               | 14 files, **153 tests passed**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| No public copy created           | `find website/public -type f` (see the 001 manifest) and no write by this card                                                                                                                                 | Canonical media stays in `docs/area/`; Astro emits hashed derivatives from there                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Engine state                     | `comfyctl status` (20:13)                                                                                                                                                                                      | `running: no` — never started by this card                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Repository hygiene               | `git status --porcelain`                                                                                                                                                                                       | This card wrote only `.agents/work/assets/wiki-asteria-field/assets.md`; no candidate, prompt, run record, model file, media or `website/` byte changed, and nothing committed                                                                                                                                                                                                                                                                                                                                                                                          |

**Nothing is published by this manifest.** The page is `publication: draft`; the flip and the public
scope belong to `t_06da3c70`. No build was run by this card (a build is the deploy card's step).

**Review outstanding:** editorial final gate `t_06da3c70` (canon confirmation, the release decision,
and findings 1–3 — finding 4's SEO route is now resolved as wording-kept), the build/deploy card for
the `publication: published` flip plus guards/tests on a built page, and human release-order
authority for anything canon cannot source. **SEO `t_b2e8e9b5` is done, with no wording change.**

## Re-validation — second dispatch (2026-09-17 20:52 CEST)

This card ran twice. The first run (run 191, 20:11–20:19 CEST) finished and verified its work but
could not `kanban_complete`: its parent, the SEO card `t_b2e8e9b5`, was still `todo` (its own run had
crashed, and it was in turn gated on the writer card `t_10fc616a`), so the card was
dependency-blocked. The dispatcher re-ran it as run 206 at 20:52 CEST, after `t_b2e8e9b5` completed.

**This is a re-validation, not a redo.** The reuse determination stands unchanged and nothing was
regenerated, re-decided or re-written: no `image_generate` call, no ComfyUI start, no
`tools/visual-generator/` write, no new media key, no `website/` byte. The deliverable file itself was
**byte-identical** to the first run's output (`c6527d67…`, unmodified on disk since 20:15 CEST), so
only the _claims inside it_ were re-checked — every row below re-run against the live shared tree at
20:52 CEST.

| #  | Claim                                                 | Was (run 191, 20:13–20:15)                                           | Is (run 206, 20:52)                                                                                                                                                                                                                                                                | Verdict                                                       |
| -- | ----------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 1  | Page hash at rest                                     | `fdc5a902…`, 8,739 B, 121 lines                                      | identical                                                                                                                                                                                                                                                                          | **unchanged**                                                 |
| 2  | Did the SEO pass touch the page?                      | unknown — parent not done                                            | live re-hash `fdc5a902…`; SEO reported `hash_before == hash_after` with no frontmatter edit (`t_b2e8e9b5` metadata)                                                                                                                                                                | **byte-stable**                                               |
| 3  | Manifest not overwritten by a third party             | `c6527d67…`, 26,243 B, 290 lines                                     | identical                                                                                                                                                                                                                                                                          | **unchanged since 20:15**                                     |
| 4  | `newsMediaIssues()` over the live frontmatter         | `issues: NONE`                                                       | `issues: NONE` (real module re-bundled with the project's own esbuild from the live `src/lib/media.ts`)                                                                                                                                                                            | **holds**                                                     |
| 5  | Requirement read from the module                      | `{plateCount: 3, altCount: 3, captionCount: 3, requiresLabel: true}` | identical                                                                                                                                                                                                                                                                          | **holds**                                                     |
| 6  | Contract is build-enforced                            | not recorded                                                         | wiki collection `superRefine` calls `newsMediaIssues` (`src/content.config.ts:112-116`)                                                                                                                                                                                            | **strengthened** — recorded in §Key contract verification     |
| 7  | Composed alt/caption strings                          | six strings as tabulated                                             | byte-identical output from the live `plateFigures()`                                                                                                                                                                                                                               | **holds**                                                     |
| 8  | Containment scan (frontmatter + six composed strings) | `NONE`                                                               | `NONE`                                                                                                                                                                                                                                                                             | **holds**                                                     |
| 9  | Alt text vs the pixels                                | `vision_analyze`, 20:15                                              | re-read 20:52 — AF-01 whole-planet globe + target marker + `ASTERIA FIELD` callout inside the `MARGARITIFER TERRA` label; AF-02 regional envelope with coordinate ticks, **five** labelled terrain classes and a centre crosshair; AF-03 local operations frame with its overlays  | **every named cue confirmed**                                 |
| 10 | Plate bytes                                           | `f12c58f5…` / `25378457…` / `2890e343…`                              | identical hashes, sizes (2,333,852 / 3,311,859 / 3,492,102 B) and pixel formats (1536 × 1024 RGB, 1536 × 1024 RGB, 1448 × 1086 RGBA)                                                                                                                                               | **unchanged**                                                 |
| 11 | Precedent article 001's alt/caption/label             | quoted in §Alt text, §Caption                                        | byte-intact at `website/news/001-project-announcement.mdx:12-19`, still on `media: asteria-plates`                                                                                                                                                                                 | **anchor still valid** — not rewritten onto another media key |
| 12 | Cited line references                                 | as written                                                           | all resolve; **one drift found and corrected**: `newsMediaIssues()` ends at `media.ts:139`, not 138 (§Key contract verification)                                                                                                                                                   | **one citation fixed**                                        |
| 13 | Tests                                                 | 58 (3 files) / 153 (14 files)                                        | 58 / 153                                                                                                                                                                                                                                                                           | **holds**                                                     |
| 14 | Tree movement since the first run                     | —                                                                    | the `docs/vehicle/` → `docs/vehicles/pathfinder/` rename and two new `assets.ts` imports (`logo-transparent`, `03-dust-scanning`) landed; the three `docs/area/` plate imports are untouched at `assets.ts:3-5`                                                                    | **no effect on this page**                                    |
| 15 | ComfyUI                                               | `running: no`, 2,078 MiB (non-ComfyUI process)                       | `running: no`, 2,056 MiB (non-ComfyUI process)                                                                                                                                                                                                                                     | **never started; nothing to stop**                            |
| 16 | Public impact                                         | no `website/` byte                                                   | still none — the page hash is identical across three independent observations (writer, SEO, this re-validation)                                                                                                                                                                    | **none**                                                      |
| 17 | Findings 1–4                                          | open                                                                 | finding 1's grounding re-verified **verbatim** against the operator comment on `t_9b2a308d` ("Only already-released material (name, centre coordinates, plates AF-01/AF-02/AF-03 released for article 001) may be reused"); finding 4 resolved as wording-kept; findings 2–3 stand | **1–3 stand, 4 resolved**                                     |

Nothing in the re-validation required a change to the reuse determination or to the draft. The only
manifest edits this run made are the corrected citation, the SEO outcome, the second engine reading,
and this section.

## Artifact

This file is the asset manifest for `.agents/work/assets/wiki-asteria-field/`. It records a
**reuse-only** determination (`no new imagery: reuse asteria-plates`), the page's media contract and
its verification against the live modules, the release records that cover the placement, five routed
findings, and the validation above. It is **not** a canon approval and not a release: only the
editorial role confirms canon and records the release decision, and only then may the page be
flipped and published.
