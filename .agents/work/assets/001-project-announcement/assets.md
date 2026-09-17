# Asset manifest: 001-project-announcement

## Manifest metadata

| Field             | Value                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Slug              | `001-project-announcement`                                                                                                         |
| Brief             | `.agents/work/briefs/001-project-announcement.md` (§"Three map plates — RELEASED (reuse, no generation)")                          |
| Draft             | `website/news/001-project-announcement.mdx` — SHA-256 `5755f92eb03bf16823116a8d3abb63e1f2c6d99ea65a74c59ee2e65cf67e770e`, 4,778 B  |
| Timeline step     | `site-foundation` / step 001 (`docs/timeline/001-project-announcement.md`)                                                         |
| Card (superseded) | `t_6498855e` body, 2026-09-17 01:23 CEST — "no new imagery: reuse `docs/brand/logo.png`"                                           |
| Card (this pass)  | `t_6498855e` — `mars-ai-simulator-visuals`, 2026-09-17 02:00 CEST, ruled by the planner comment of 01:37 CEST                      |
| Status            | `complete` — three released plates reused; **no new imagery generated**, no ComfyUI job run; three findings routed (see §Findings) |

## Determination

**`no new imagery: reuse the three released `docs/area/` plates (AF-01, AF-02, AF-03).`**

The decision recorded in this file at 01:23 CEST ("no new imagery: reuse `docs/brand/logo.png`",
with a HELD map/position-graphic section) is **superseded** and is kept only as a was/is record.
The human story owner answered on 2026-09-17 — relayed by the operator, recorded in
`.agents/work/briefs/001-project-announcement.md` lines 3-11 and in the card comments — that
**no new imagery is needed and the three map plates already in `docs/area/` are to be used**.
The article was rewritten onto them the same day (`media: asteria-plates`, comment 46 on
`t_30760665`), and the site support card `t_3922071d` added the media key that renders them.

Nothing is generated, derived, upscaled, or re-encoded by this card: the plates are existing
canonical files under `docs/area/`, imported at build time by `website/src/lib/assets.ts`
(lines 4-6) and emitted by Astro's asset pipeline. No `tools/visual-generator/` run was made,
no prompt was written, no candidate exists, and no GPU time was spent.

## Released plates (reuse)

| Plate | Canonical path (byte-identical; nothing copied into `public/`) | SHA-256                                                            | Size / pixels                  | Scale on the plate               | Article placement (brief line)           |
| ----- | -------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------ | -------------------------------- | ---------------------------------------- |
| AF-01 | `docs/area/asteria-field-01-mars-locator.png`                  | `f12c58f57d3315f6446bcea61fb5258e4731192fb7fa2f9390dfe3d06a48085c` | 2,333,852 B · 1536 × 1024 RGB  | printed bar 0–4,000 km           | Introduction / orientation (brief 162)   |
| AF-02 | `docs/area/asteria-field-02-regional-context.png`              | `253784572f441738c305c2d481c1ece785872b305113e373371a9f5af4f357e0` | 3,311,859 B · 1536 × 1024 RGB  | printed bar 0–200 km             | Geographic-setting paragraph (brief 163) |
| AF-03 | `docs/area/asteria-field-03-local-operations.png`              | `2890e34343bf7f5441ae3352d681039fc4383edbb7fabdebad7aab875c451c23` | 3,492,102 B · 1448 × 1086 RGBA | printed bar 1 km; 8 × 6 km frame | Mission-design paragraph (brief 164)     |

All three are `GPT Image generation, 2026-09-16` per `docs/area/AREA.md` §Map package (line 239),
and all three are **generated visualizations, not orbital imagery**.

### Text as the article declares it (frontmatter, `website/news/001-project-announcement.mdx` 10-18)

| Plate | `mediaAlt` entry (as published)                                                                                                                          | `mediaCaption` entry (as published)                                     |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| AF-01 | "AF-01. Whole-planet Mars view with an arrow marking the fictional Red Horizon target region; a generated visualization, not orbital imagery."           | "The fictional target region on the planet, at roughly 1,000 km scale." |
| AF-02 | "AF-02. Regional map of the fictional planning envelope with working terrain units and a centre marker; a generated visualization, not orbital imagery." | "The planning envelope across the region, at roughly 200 km scale."     |
| AF-03 | "AF-03. Local operations frame for the fictional planning area with scenario planning overlays; a generated visualization, not orbital imagery."         | "The 8 by 6 km local frame used to keep mission planning consistent."   |

`mediaLabel: Red Horizon // Asteria Field planning plates`. Aspect ratio of the source files is
3:2 (AF-01, AF-02) and 4:3 (AF-03); the renderer fixes the width (`MediaPlates.astro` line 34:
`width={1152}`) and scales by height, so **no crop is applied and no crop note is needed**.

### Composed caption the reader actually sees

`src/features/news/plates.ts` `plateCaptionText()` composes `label — caption + plate note +
set provenance`; `src/features/news/media.ts` supplies the provenance and the AF-03 note. Ready
to paste / verify:

- **AF-01** — "AF-01 · Mars locator — The fictional target region on the planet, at roughly 1,000 km scale. Generated visualization for Red Horizon scenario planning, 2026-09-16. Not orbital imagery."
- **AF-02** — "AF-02 · Regional context — The planning envelope across the region, at roughly 200 km scale. Generated visualization for Red Horizon scenario planning, 2026-09-16. Not orbital imagery."
- **AF-03** — "AF-03 · Local operations frame — The 8 by 6 km local frame used to keep mission planning consistent. The local-operations frame is fictional scenario planning, not a confirmed operational plan. Generated visualization for Red Horizon scenario planning, 2026-09-16. Not orbital imagery."

The provenance sentence is **not** in frontmatter by design: it is printed from the media
registry (`website/src/features/news/media.ts` line 26) so an author cannot omit it, and
`website/test/news-media.test.mjs` (lines 148-181) asserts that every plate caption carries it.
The mandatory provenance for every caption and alt text is therefore satisfied at render time,
not by the article's own strings.

## How the plates reach the page (contract, verified)

| Stage                  | File                                          | Fact                                                                                                                                                                                                                                                                            |
| ---------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article declares a key | `website/news/001-project-announcement.mdx`   | `media: asteria-plates` — a **key, not a URL**; `mediaAlt`/`mediaCaption` = 3 entries each, `mediaLabel` set                                                                                                                                                                    |
| Schema rules           | `website/src/lib/media.ts`                    | `newsMediaKeys = ['programme-identity', 'asteria-plates']`; `asteria-plates` = `{ plateCount: 3, altCount: 3, captionCount: 3, requiresLabel: true }` — a missing or blank plate text fails the build                                                                           |
| Key → assets           | `website/src/features/news/media.ts`          | `asteria-plates` → `asteriaPlate01/02/03` with labels `AF-01 · Mars locator`, `AF-02 · Regional context`, `AF-03 · Local operations frame`, the provenance sentence, and the AF-03 `captionNote`                                                                                |
| Asset import           | `website/src/lib/assets.ts` lines 3-6, 44-46  | The three plates are imported from `docs/area/` — the only import of them in the site; `website/public/assets/` holds two favicons and nothing else                                                                                                                             |
| Renderer               | `website/src/features/news/MediaPlates.astro` | Three lazy `<figure>`s, `width={1152}`, `format="webp"`, per-figure frontmatter alt, composed caption                                                                                                                                                                           |
| Guard                  | `website/scripts/guards.mjs` line 52          | `gatedTextMarkers = ['RH-01', 'Pathfinder', '18° 42', '226° 14']`; the released field name was retired from this list on 2026-09-17, and `docs/area/` is not a withheld directory, so these plates ship without a build guard — their release rests on the human decision below |
| Route gate             | `website/src/lib/releases.ts`                 | `releasedNewsSlugs` is **empty**, so no `/news/001-project-announcement/` detail page is generated today; the plates are therefore not yet live in a built route. Only the homepage news card for 001 renders a plate (AF-01)                                                   |

## Release record (human)

- **Human story owner, 2026-09-17**, relayed by the operator: (3) "No new imagery is needed —
  three map plates already exist in `docs/area/` and are to be used: AF-01 planet view with
  arrow, AF-02 region, AF-03 zoomed-in locality." Verbatim, in
  `.agents/work/briefs/001-project-announcement.md` lines 3-11 and in the card comments on
  `t_6498855e` / `t_23c10313` / `t_2a0f700b`.
- **Scope: article 001 only.** Recorded in `docs/area/AREA.md` §Control record lines 18-19
  ("Partial release approved 2026-09-17 — name, centre coordinates, and plates AF-01/AF-02/AF-03
  released for article 001 only") and `docs/SCENARIO.md` §Continuity and release controls line 279.
  Every other Asteria Field artefact stays gated; the plates must not be reused on any other
  article, card, or asset surface without a new human decision.
- The key that renders them (`asteria-plates`) exists **for article 001**: `website/src/lib/media.ts`
  and `website/src/lib/assets.ts` both say so in comments, and the 002 manifest records the plates
  as barred for step 002.
- **What is not approved:** no `docs/` file, no route, no `releasedNewsSlugs` entry, no deploy.
  This manifest is not a canon approval and does not publish anything.

## Engine state (no GPU work)

`~/.hermes/profiles/mars-ai-simulator-visuals/bin/comfyctl status` at 02:01 CEST on 2026-09-17:

```
running: no   url: http://127.0.0.1:8188  gpu_used: 2074 MiB
```

The server was never started for this card, so there is nothing to stop; it is `no` at the end of
the card as well. The 2,074 MiB belongs to a non-ComfyUI process on this machine. ComfyUI is
**N/A by decision** — the card needs no generation, and starting the engine to produce nothing
would only hold VRAM against the next worker.

## Findings (routed, not silently decided)

1. **The plates visibly carry the planning geometry the brief keeps private in prose.** Pixel read
   of the two detail plates on 2026-09-17 (see §Validation): AF-02's legend names the five working
   units `AF-H0`, `AF-B1`, `AF-C2`, `AF-L3`, `AF-E4` and prints the boundary `12.5–24.0°S /
   327.0–338.0°E`; AF-03 prints the `6.4 × 3.2 km LANDING ELLIPSE`, the `P0 INNER TOUCHDOWN ZONE`,
   science points `S1–S4`, the hazard legend, the traverse routes, and the comms-safe shoulder.
   The brief's gated list (items 2 and 5) keeps exactly that material out of the announcement, and
   the continuity child card `t_23c10313` re-checks "no landing-preparation geometry (ellipse, P0
   zone, AF-unit identifiers) appears". **The prose obeys; the images do not — and cannot, because
   the human released these two plates by name and description.** The alt and caption strings were
   deliberately written neutrally ("scenario planning overlays", "the 8 by 6 km local frame"), so
   the article's own text names none of it. Owner of the resulting call: the continuity re-check
   `t_23c10313`, then the planner ruling `t_8274703e` — either the plate release is read as
   covering what the plates show (an explicit statement of that reading should be recorded against
   the release), or AF-02/AF-03 placement is re-scoped. **This card does not decide it and did not
   touch the plates.** Recorded here because the asset manifest is where the pixel truth of a
   released plate has to be stated.
2. **AF-01's caption states a scale the plate does not print.** The caption says "at roughly
   1,000 km scale"; the plate's own scale bar reads `0 1,000 2,000 3,000 4,000 KILOMETERS`. The
   figure traces to canon — `docs/area/AREA.md` line 237 and brief line 162 both say "approximate
   1,000 km scale bar" — so the caption is source-backed, but it is also the only numeric cue in
   the caption set that a reader can check against the image and find different. Recommendation to
   the editorial gate `t_ff937d33` / the writer: drop the number ("at planet scale") or align it
   with the printed bar. The writer's caption is not rewritten here.
3. **Reuse of the released plates needs no public-file copy and no `sync-assets.mjs`.** That script
   no longer exists in the tree (`git status`: `D website/scripts/assets.mjs`,
   `D website/scripts/sync-assets.mjs`), and `website/public/assets/` holds only the two favicons.
   The manifest therefore records no export/copy step: canonical media stays in `docs/area/` and
   Astro emits hashed derivatives from there.

## Barred media (must not appear on this article)

- `docs/vehicle/` renders (six files) — step-003 spoiler; `vehicle` is a withheld directory name
  that `guards.mjs` scans for and `scripts/check-dist.mjs` fails the build over.
- `docs/timeline/` material — private continuity source.
- Any plate reuse outside article 001: the release is article-scoped (above).
- No public filename, label, alt text, or caption on this article may carry `RH-01`, `Pathfinder`,
  `18° 42`, `226° 14`, an absolute date, a launcher or spaceport, or a vehicle design detail.
- No plate may ever be presented as orbital imagery, documentary mission imagery, or a confirmed
  operational plan — the registry provenance sentence and the AF-03 note are the enforcement.

## Validation performed

All rows run on 2026-09-17 between 02:00 and 02:03 CEST against the live shared tree.

| Check                             | Command / source                                                                                     | Result                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Plates present and byte-identical | `sha256sum docs/area/asteria-field-0*.png`; `ls -l`; `file`                                          | Hashes and sizes as tabulated above; 1536 × 1024 RGB ×2, 1448 × 1086 RGBA ×1, all `Sep 16 14:39`; no re-encode, no derivative                                                                                                                                                                                                                                 |
| Alt text matches the pixels       | `vision_analyze` read of each plate, 2026-09-17                                                      | AF-01: whole-planet Mars, yellow leader arrow to a marked target, north arrow, legend, printed bar — matches. AF-02: regional map, coordinate envelope, `AF-*` terrain units, centre marker `17.80°S / 332.20°E`, bar 0–200 km — matches. AF-03: local frame, `N`, ellipses, `S1–S4`, hazards, routes, comms shoulder, bar 1 km — matches the neutral wording |
| Alt text names no gated fact      | read of the three entries in the draft                                                               | The three `mediaAlt` strings name no ellipse, no zone ID, no unit identifier, no date — the pixel truth of finding 1 is not asserted in public text                                                                                                                                                                                                           |
| The registry resolves as claimed  | `website/src/lib/media.ts`, `src/features/news/media.ts`                                             | `asteria-plates` → 3 plates, 3 alts, 3 captions, label required; provenance sentence and AF-03 note supplied by the registry, not by frontmatter                                                                                                                                                                                                              |
| Caption composition               | read of `src/features/news/plates.ts` `plateCaptionText()`; `test/news-media.test.mjs` lines 148-181 | Composed strings as printed in §Composed caption; the test asserts the provenance on every plate and the exact AF-03 note ordering                                                                                                                                                                                                                            |
| Media tests                       | `cd website && npx vitest run test/news-media.test.mjs` (02:01)                                      | 18/18 pass                                                                                                                                                                                                                                                                                                                                                    |
| Full test suite                   | `cd website && npm test` (02:01)                                                                     | 37/37 pass in 2 files                                                                                                                                                                                                                                                                                                                                         |
| Draft state                       | `sha256sum website/news/001-project-announcement.mdx`; `grep -c '^media'`                            | SHA-256 `5755f92e…`, 4,778 B; four `media*` frontmatter keys (`media`, `mediaAlt`, `mediaCaption`, `mediaLabel`) — unchanged by this card                                                                                                                                                                                                                     |
| Guard contract                    | `website/scripts/guards.mjs` line 52                                                                 | `['RH-01', 'Pathfinder', '18° 42', '226° 14']` — the released field name is absent, so these plates depend on the recorded human release rather than on the build                                                                                                                                                                                             |
| Route gate                        | `website/src/lib/releases.ts`                                                                        | `releasedNewsSlugs = []` — no detail route; the plates are not live in a built page                                                                                                                                                                                                                                                                           |
| No public copy created            | `find website/public -type f`                                                                        | Only `assets/favicon-32.png` and `assets/favicon.ico`; no plate copied, no export step needed                                                                                                                                                                                                                                                                 |
| ComfyUI state                     | `~/.hermes/profiles/mars-ai-simulator-visuals/bin/comfyctl status` (02:01)                           | `running: no` — never started for this card                                                                                                                                                                                                                                                                                                                   |
| Repository hygiene                | `git status --porcelain`                                                                             | This card changed only this manifest; no candidate, prompt, run record, model file, or media was added, and nothing was committed                                                                                                                                                                                                                             |

**Review outstanding:** continuity re-check `t_23c10313` (which owns finding 1), the revision
editorial gate `t_ff937d33` (finding 2), the planner ruling `t_8274703e` (findings 1-2 rulings and
the homepage card-image change), BUILD `t_f63be155`, and human canon / release approval before any
public deployment. `releasedNewsSlugs` must carry a human-recorded release reference before the
plates can appear in a built article route.

## Private provenance

- **Plate sources.** The three PNGs are the canonical scenario-planning plates produced with GPT
  Image on 2026-09-16, stored beside the dossier in `docs/area/` and listed in `docs/area/AREA.md`
  §Map package with their scale and provenance. Their generation prompts and raw candidates belong
  to the local generation workspace, which keeps no permanent assets — nothing of that lives in
  this repository, and this card did not create any.
- **No new imagery.** Nothing to record: no prompt, no `image_generate` call, no
  `comfyui-*.workflow.json` sidecar, no `stories/<vehicle>/runs/` directory, no `tools/visual-generator/`
  run. No model file was downloaded.
- **Nothing committed.** The repository stores only this manifest, which points to the canonical
  `docs/area/` files by path and hash.

## Artifact

This file is the asset manifest for `.agents/work/assets/001-project-announcement/`. It records
the reuse of three released plates, the human release reference and its article scope, the
render-time provenance contract, three routed findings, and the validation above. It is not a
canon approval: only the human selects the authoritative file, and only the site engineer copies
an approved export.
