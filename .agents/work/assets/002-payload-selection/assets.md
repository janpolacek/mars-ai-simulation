# Asset manifest: 002-payload-selection

## Manifest metadata

| Field              | Value                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Slug               | `002-payload-selection`                                                                                                   |
| Brief              | `.agents/work/briefs/002-payload-selection.md`                                                                            |
| Draft              | `website/news/002-payload-selection.mdx`                                                                                  |
| Timeline step      | `002-payload-selection` (`docs/timeline/002-payload-selection.md`)                                                        |
| Card (first pass)  | `t_cb3464ef` — `mars-ai-simulator-visuals`, 2026-09-17 01:23 CEST                                                         |
| Card (this pass)   | `t_1d89f2b4` — `mars-ai-simulator-visuals`, 2026-09-17 01:50 CEST — re-validation against the moved tree (see §Re-validation) |
| Card (illustration pass) | `t_a9964b8d` — `mars-ai-simulator-visuals`, 2026-09-17 10:06–10:14 CEST — three sensor-illustration candidates produced in private scratch (see §Sensor illustration candidates) |
| Status             | `complete` — reuse recorded; no new imagery generated; the illustration alternative is **blocked** on a site card plus a human go-ahead; one human release decision outstanding |
| Status (after `t_a9964b8d`) | The illustration alternative is **produced, not approved**: three candidates exist in private scratch with prompt, seed and hash records; the editor sign-off the human delegated (`t_5a62fb28`, Gate 1 answer of 2026-09-17) is **not yet recorded**, the `payload-sensor-illustration` media key does not exist yet (card `t_4b49346b`), and the draft is untouched. Fail-closed default still holds: no `media` key, amber `news-placeholder`, `publication: draft` |

## Determination

**`no new imagery: reuse docs/brand/logo-bg-black.png`** — rendered through the site's
existing `programme-identity` media key, which resolves to exactly this canonical file.

The card's reuse check was run first, across all three dossiers. The result is
narrower than "any approved image will do": this repository has released very little
media, and of the two dossiers that hold step-relevant imagery, one is withheld outright
and the other is released for article 001 only.

| Dossier         | What it holds                                                                                                           | Usable for step 002? | Why                                                                                                                                                                                                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `docs/brand/`   | `logo-bg-black.png` (hash-approved source mark), `logo.png` (RGBA derivative), `BRAND.md`                               | **Yes**              | The source mark is the asset `website/src/lib/assets.ts` imports; human-approved by the story owner on 2026-09-15 for the Preparing site (`docs/brand/BRAND.md`)                                                                                        |
| `docs/vehicle/` | Six RH-01 vehicle renders (`canonical`, `front-left`, `side-view`, `rear-right`, `contact-arm`, `contact-arm-scene`)     | **No**               | Vehicle imagery is a step-003 spoiler (`docs/timeline/002-payload-selection.md`: "Do not publish a final rover render unless step 003 is approved"), and `vehicle` is a withheld directory name that `website/scripts/guards.mjs` scans for and fails the build on |
| `docs/area/`    | Three landing-area map plates (AF-01, AF-02, AF-03)                                                                     | **No**               | That region is step-007 material and this card's brief bars it. The human's 2026-09-17 partial release is **article 001 only** (`website/src/lib/assets.ts` doc comment, `.agents/work/briefs/001-project-announcement.md`, `docs/SCENARIO.md` §Continuity and release controls). `docs/area/` is *not* a withheld directory, so no build guard catches a misuse here — this bar is a release boundary enforced by review, not by the build |

So the reuse that satisfies the card is the programme identity mark as the article's
news-card media. No generation was run and no GPU work was spent: nothing in this card
needs an image that does not exist.

## Candidate assets

| Asset | Placement | Alt text | Caption / label | Tool | Rights | Status |
| ----- | --------- | -------- | --------------- | ---- | ------ | ------ |
| `docs/brand/logo-bg-black.png` (SHA-256 `f9543989560da54fc56a8973002833b2b8dbe3d1c085fc1293af3faca457b749`; 1254 × 1254 RGB) — canonical media; nothing is copied into `public/` | News-card media band of `website/news/002-payload-selection.mdx` (`NewsCard.astro`, `width={1024}`, `object-fit: contain`), and — only if the article is ever released — the lead `<figure class="article-media">` in `ArticleView.astro`. Frontmatter: `media: programme-identity` plus the schema-required `mediaAlt` and the recommended `mediaLabel` | "The Red Horizon programme mark: a rust-red Mars disc crossed by low highlighted hills, a small Sun rising behind its upper-left edge, and blue Earth with a dimmer Moon at the upper right." — verified against the asset's pixels by a vision read on 2026-09-17 (see §Validation); background-neutral, so it survives a light-field placement variant | `Red Horizon // programme identity` (schema-optional, functionally load-bearing: for a single-plate key `NewsCard.astro` draws the label overlay and `ArticleView.astro` the `figcaption` from `mediaLabel`, and an unset value renders as an empty overlay) | The approved identity mark; original candidate produced with GPT Image (see `docs/brand/BRAND.md`, "Status and approved source") | Fictional Red Horizon project asset, human-approved 2026-09-15 for the Preparing site; a **new public-site or social use beyond that site requires a separate human release decision** (`docs/brand/BRAND.md`, "Publication boundary") | **Selected for reuse** — release-cleared file; placement withheld pending that human decision |
| `docs/brand/logo.png` (SHA-256 `d23d7c99986efd73ee33e84e3699ff757bf2b0c286fa0cf24e5252e4623ff0f5`) | Same band, if the light-field derivative were preferred | Would describe the same mark on a light field | — | Same source mark, re-derived | `BRAND.md` forbids altering or re-deriving the mark for public use; the derivative is not a released asset | **Rejected** — the step-001 editorial review failed this derivative, and `website/src/lib/assets.ts` records the black-field source as the file in use |
| Sensor-focused editorial illustration (new) | Same band, instead of the identity mark | Written for each produced candidate in §Sensor illustration candidates — see the recommended selection | Candidate labels recorded there; a caption is one field this key's planned contract does not have | Local ComfyUI (Flux.2 Klein through `image_generate`, `provider: comfyui`) — **run** 2026-09-17, three candidates in private scratch | To be recorded per candidate before any use; must never claim documentary mission imagery | **Blocked, not merely undecided** — it needs a **new media key in the site** (engineering card: `src/lib/media.ts` key + requirements, `src/features/news/media.ts` resolver, `src/lib/assets.ts` import) *and* an explicit human go-ahead. `newsMediaKeys` currently holds only `programme-identity` and `asteria-plates`, so the illustration cannot be placed today even if it existed. Pattern to copy: `t_3922071d`, which added `asteria-plates` that way. Brief below. **Partly superseded by card `t_a9964b8d` (2026-09-17 10:06–10:14 CEST): the three candidates now exist in private scratch — see §Sensor illustration candidates; the asset is still unapproved and unplaceable.** |

## Approved stable exports

| Asset                   | Path                                                       | Approved by                                                                |
| ----------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------- |
| Red Horizon source mark | `docs/brand/logo-bg-black.png` (canonical; no public copy) | Human story owner, 2026-09-15 (`docs/brand/BRAND.md`); reuse recorded here |

No copy step exists or is needed: canonical media stays under `docs/`, and
`website/src/lib/assets.ts` imports the file at build time, so Astro's asset pipeline
emits the optimised, hashed webp that `NewsCard.astro` renders. Nothing was copied out
of `tools/` (no generation run happened), and `website/public/assets/` still holds only
the two tracked favicons.

### Placement release gate (human decision)

The draft keeps **no** `media` field in this card. The single change that applies the
reuse is:

```yaml
media: programme-identity
mediaAlt: "The Red Horizon programme mark: a rust-red Mars disc crossed by low highlighted hills, a small Sun rising behind its upper-left edge, and blue Earth with a dimmer Moon at the upper right."
mediaLabel: Red Horizon // programme identity
```

`media` is a **key, not a URL**: `src/lib/media.ts` allows only `programme-identity` and
`asteria-plates`, the content schema rejects any other value, and the schema also requires
exactly one non-empty `mediaAlt` entry whenever `media` is set — so a mistyped key fails
the build instead of silently dropping the image. For this key the requirement tuple is
`{ plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }`: **no
`mediaCaption` may be present** (the schema rejects one), and `mediaLabel` is optional but
should be kept, because it is what the card's label overlay prints for a single-plate key.
`website/README.md` "Declaring media in an article" documents the same contract.

It is held back deliberately. `docs/brand/BRAND.md`, "Publication boundary", requires "a
separate human release decision … before any new public-site or social use beyond the
current Preparing site". Until the human records that decision, the step-002 card renders
the designed amber `news-placeholder` (number, rule, and the `Payload brief 02` category
line, drawn whenever `media` is unset) — an intentional state, not a defect, and the
correct default for a `publication: draft` article. The route gate is separate and also
closed: `releasedNewsSlugs` in `website/src/lib/releases.ts` is empty, so no
`/news/002-payload-selection/` detail page is generated for this draft.

## Private provenance

- **Identity mark (reuse).** The approved mark plus its SHA-256 is the durable record.
  Its private provenance — the selected GPT Image candidate and its exact generation
  record — lives in the local visual-generator workspace, which keeps no permanent
  assets. `docs/brand/BRAND.md` also cites the retired pre-kanban tracker entry
  `mars-ai-simulator-2tm` for the original approval. Note for the record:
  `docs/beads-archive.jsonl`, which `AGENTS.md` and `BRAND.md` both describe as that
  archive, is **still absent** from the working tree (re-confirmed 2026-09-17 01:50;
  already reported by the step-001 review and by the step-002 continuity record; owner:
  story coordinator — not this card).
- **New imagery (not produced).** Nothing to record: no prompt was issued, no job was
  queued, no workflow sidecar and no run directory were created under
  `tools/visual-generator/`. `comfyctl status` at 01:50 shows the server was never
  started for this card.
- **Nothing from this card was committed.** No model file, workflow, raw run data, or
  candidate generation was added to the repository.

## Barred media (do not place in this article)

Names appear in this private working paper only to record what must not be placed. They
appear **0 times** in the draft and **0 times** in the built output, and never in an asset
filename or label.

- Vehicle renders under `docs/vehicle/` — step-003 spoiler; `vehicle` is a withheld
  directory name that `website/scripts/guards.mjs` scans for and that
  `scripts/check-dist.mjs` fails the build over.
- The landing-area plates under `docs/area/` — step-007 material; released for article
  001 only, and barred on any 002 surface by this card's brief.
- Anything carrying a **current** gated text marker. `guards.mjs` sets
  `gatedTextMarkers = ['RH-01', 'Pathfinder', '18° 42', '226° 14']`, and it did so before
  this pass: the landing-area name was **retired** from that list on the human's
  2026-09-17 partial release, so the automatic net for that term is gone and clean 002
  surfaces rest on review, not on the build. The launcher and spaceport of step 004, and
  any coordinate or date, are barred here by the brief rather than by a guard.
- No public filename, label, caption, or alt text may carry any of the above: filenames
  travel into `dist/_astro/` and any future social preview.

## Proposed new imagery — visual brief (NOT produced; blocked on a site card + a human go-ahead)

> **Status note (2026-09-17 10:14 CEST, card `t_a9964b8d`).** This brief was executed: three candidates were
> rendered on the local GPU and are recorded in §Sensor illustration candidates below. The brief text itself is
> kept unchanged as the record of what was commissioned and what it was judged against.

The step-002 timeline names a candidate for this moment that does not exist yet:
"labelled but non-final instrument concept, or a sensor-focused editorial illustration".
This is the brief for the second option, recorded so the decision can be made in one
pass. **No image was generated, and none can be placed until a media key exists.**

| Field                     | Value                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Moment / subject          | The four measurement jobs the step-002 payload scope covers — panoramic and navigation imaging, mineral and rock sensing, weather measurement, and close contact inspection — as a **sensor-focused editorial illustration**. Abstraction over hardware: optics, spectral bands, airborne dust, surface texture at close range. (The draft's four job categories, not the brief-§Allowed-angle ranked science objectives: those are the writer's open content gap and do not change this visual brief.) |
| Placement                 | News-card media band of `website/news/002-payload-selection.mdx`, replacing the identity-mark reuse if selected — and then only through a **new media key** added by a site card |
| Candidates                | 3, one GPU job at a time, serial                                                                                                                                                                                                                                                                                                                                                           |
| Aspect ratio              | 1:1 — the card contains the image (`object-fit: contain`, `width={1024}`) inside a band at least 22rem tall, and the article's lead figure is capped at 24rem wide and scales by height; both canonical brand marks are 1254 × 1254, so a square is the placement-safe shape. Nothing is cropped; an odd ratio letterboxes on the band's plate colour                                                                                                            |
| Continuity references     | Palette only, from the table in `docs/brand/BRAND.md` (void black `#010000`, Mars oxide `#A0301D`, ember `#CD553A`, relief shadow `#9F321F`, rim light `#FCC78B`, sun core `#FCA042`, halo `#895215`, Earth blue `#7BA7FA`). Do not restyle, crop, recolor, or embed the mark inside a scene                                                                                               |
| Allowed canon facts       | The four payload scopes; the "ten partner groups, one vote each" frame; the 2031 launch-window year; the "not a life-detection mission" framing — all as already published in the draft                                                                                                                                                                                                    |
| Forbidden spoilers        | The vehicle's name, silhouette, wheel count, mast, arm or contact-tool geometry (step 003); the launcher and spaceport (step 004); any exact launch or landing date (steps 005–006); the landing area's name, coordinates, maps, local units, or traverse detail (step 007); the real institution awaiting approval; any fact from steps 005–011; real agency insignia or endorsement cues; astronauts; text or captions burned into the image |
| Intended alt-text meaning | Plain-language description of what the produced candidate actually shows, naming the measurement types it represents. It must state that the image is illustrative, must not describe payload hardware as approved design, and must never claim documentary mission imagery. Written only after candidates exist                                                                           |
| Tool                      | Local ComfyUI, Flux.2 Klein through `image_generate` (`provider: comfyui`); reference-then-angle-then-scene sequencing per `.agents/skills/mars-story-toolset/SKILL.md` is unnecessary for an abstract illustration                                                                                                                                                                        |
| Human gate                | Two gates, in this order: (1) explicit human decision on this card + a site card adding the key; (2) generation — `comfyctl start` → one job at a time → select → `comfyctl stop`. Candidates, prompts, and run records stay in `tools/visual-generator/`; only a human-selected export may be copied into `docs/` by the site engineer |
| Rights                    | To be recorded per candidate before any use; a generated illustration carries no third-party rights but is not approved canon until the human selects it                                                                                                                                                                                                                                   |

## Continuity note

No asset may depict vehicle imagery, the step-004 launcher, the step-007 landing area, or
any fact gated to steps 003–011. Assets are labelled as fictional or illustrative and are
never presented as documentary mission imagery. The reuse recorded here is a programme
identity mark only: it makes no claim about payload, hardware, or schedule, and
`mediaLabel` says exactly what it is.

## Validation performed

All rows re-run on 2026-09-17 between 01:50 and 01:52 CEST against the live shared tree.

| Check                                  | Command / source                                                              | Result                                                                                                                                                                                                                                |
| -------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reused file is the hash-approved one    | `sha256sum docs/brand/logo-bg-black.png docs/brand/logo.png`; `file`; `BRAND.md` line 10 | `f9543989…` for `logo-bg-black.png`, identical to the hash `docs/brand/BRAND.md` records for the approved source mark; `d23d7c99…` for the rejected derivative; both 1254 × 1254 PNG                                                       |
| Alt text describes the actual asset     | `vision_analyze` read of `docs/brand/logo-bg-black.png`                        | Confirmed: rust-red disc with a low highlighted relief line, a small pale-yellow Sun partly behind its upper-left edge, a larger blue point and a smaller dimmer point at upper right, black field, **no text in the image**. Every cue the alt text names exists, at the position it names                 |
| The site resolves this asset as claimed | `website/src/lib/assets.ts`, `src/lib/media.ts`, `src/features/news/media.ts`, `src/features/news/plates.ts` | `identityMark` imports `docs/brand/logo-bg-black.png`; `newsMediaKeys = ['programme-identity', 'asteria-plates']`; `programme-identity` → one plate → `identityMark`; `plateAltText` passes a single `mediaAlt` entry through verbatim for a one-plate key                                                              |
| Placement and crop                      | read of `src/features/news/NewsCard.astro`, `ArticleView.astro`                | The card renders `width={1024}` with `object-fit: contain` in a band of `min-height: 22rem`, so the square mark is contained, never cropped; the article lead figure is `max-width: 24rem`, `height: auto`, also uncropped; label overlay / `figcaption` come from `mediaLabel`                             |
| Draft state after the SEO pass          | `grep -n '^media\|^publication' website/news/002-payload-selection.mdx`; `sha256sum` | Still no `media` field; `publication: draft`; SHA-256 `6437379171bdcc1a3929821ab14715ccfa15f9805b0f87ff9ef78ad0c7fd1b5b` — unchanged since the editorial gate, so no build, route, alt text, or crop change follows from this manifest        |
| Build and content schema                | `cd website && npm run build` (01:50:30)                                        | Complete; 3 routes (`/index.html`, `/news/index.html`, and `/plate-probe/index.html`, the last being another card's self-labelled temporary probe); no 002 route; `postbuild` `check-dist` exit 0                                          |
| Postbuild dist guard                    | `node scripts/check-dist.mjs` (via postbuild)                                   | `no reference into a withheld directory, and no withheld file or marker in dist/.` (exit 0)                                                                                                                                            |
| Confidentiality of the public tree      | `grep -rIl` for each of the four `gatedTextMarkers` over `website/src` and `website/dist`; `find dist -path '*002*'`; title grep | 0 hits in each tree for each marker; no 002 file or route in `dist/`; the draft title occurs 0 times in `dist/`. `dist/_astro/` holds only `logo-bg-black.*.webp` and `asteria-field-*.webp` — no withheld term in any emitted filename       |
| Test suite                              | `cd website && npm test` (01:50:16)                                            | 37 of 37 pass in 2 files (the SEO pass recorded 36 of 36; a guard test was added by another card since)                                                                                                                                  |
| ComfyUI state                           | `~/.hermes/profiles/mars-ai-simulator-visuals/bin/comfyctl status` (01:50)      | `running: no   url: http://127.0.0.1:8188  gpu_used: 2360 MiB` — the server was never started for this card, so there is nothing to stop; the 2360 MiB belongs to a non-ComfyUI process                                                 |
| Repository hygiene                      | `git status --short`                                                            | This card changed only this manifest; no candidate, prompt, or run record was created, and nothing was committed; `docs/beads-archive.jsonl` re-confirmed absent                                                                          |

**Review outstanding:** continuity `t_424d8b68` (verdict `continuity clear`, v2) and the
editorial gate `t_0f626603`. The editorial gate's "Image placement and caption" and "Alt
text on all images" rows resolve against the reuse row plus the release gate above: no
image is placed, so no alt text is live in the draft.

## Re-validation (this pass, `t_1d89f2b4`, 2026-09-17 01:50 CEST)

This card was dispatched a second time for a stage already completed on `t_cb3464ef`. It
was handled as a **re-validation, not a redo**: the reuse determination stands, the draft
was not touched, and no generation was run. What the pass did change is the manifest's
factual drift, which two upstream gates had independently flagged as unrepaired
(continuity observation C; the SEO package's §8/§11 note to this card).

| Was (as written at 01:23)                                                                       | Is (verified at 01:50)                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "this repository has cleared exactly one identity asset for public use"                          | The identity mark is the only *identity* asset, but a second released set exists: the three `docs/area/` plates, released by the human story owner on 2026-09-17 **for article 001 only**            |
| `docs/area/` barred partly because "the guard's `Asteria` marker would fail the build anyway"    | Untrue and now corrected: that name was retired from `gatedTextMarkers` on the partial release, and `docs/area/` is not a withheld directory at all, so the 002 bar is a **release boundary**, not a guard |
| `newsMediaKeys = ['programme-identity']`                                                        | `['programme-identity', 'asteria-plates']`; `programme-identity` = `{1 plate, 1 alt, 0 captions, label optional}`, `asteria-plates` = `{3, 3, 3, label required}`                                     |
| "Precedent in the published article: 001 carries `media: programme-identity` with this `mediaAlt`" | Published 001 was rewritten at 01:46 CEST and now carries `media: asteria-plates` with three plate alts and a different label — so **the "byte-identical to 001's alt" anchor is void**, and this manifest's alt string is the live one  |
| `mediaLabel` presented alongside a "required `mediaAlt`" in the same breath                      | Corrected: only `mediaAlt` is required; `mediaLabel` is schema-optional but load-bearing for the card's label overlay and the article's `figcaption`                                                 |
| News card described as `width={1024} height={1024}` square rendering                             | `NewsCard.astro` passes `width={1024}` only and contains the image (`object-fit: contain`) in a band of `min-height: 22rem`; the article lead figure is capped at 24rem wide. No crop in either placement |
| Illustration alternative "requires an explicit human decision"                                   | **Blocked**: it also requires a new media key added by a site card. No key exists, so it cannot be placed today even with a produced asset                                                            |
| ComfyUI row `gpu_used: 2781 MiB`                                                                | Re-measured: `running: no`, `gpu_used: 2360 MiB` (a non-ComfyUI process)                                                                                                                            |
| `docs/beads-archive.jsonl` "currently absent"                                                    | Still absent at 01:50 — unchanged, same owner                                                                                                                                                      |

Unchanged and re-confirmed: the reuse decision, the `programme-identity` key, the alt-text
wording (now pixel-verified), the release gate that keeps `media` out of the draft, and the
bar on steps 003–011 material. Two gate decisions remain **human**: the identity mark's new
public placement (`docs/brand/BRAND.md` "Publication boundary"), and canon/release approval
plus the `releasedNewsSlugs` entry before any 002 route can exist. Neither is implied by this
manifest or by any agent verdict.

**Alt-text provenance, recorded because the anchor moved.** The wording kept above is the
one the step-001 SEO package wrote and the step-001 continuity check verified against this
same asset (`.agents/work/seo/001-project-announcement.md` lines 171–172;
`.agents/work/continuity/001-project-announcement.md` row 14). `docs/brand/BRAND.md`
lines 19–21 hold the human-approved brand wording as the canonical alternative
("A rust-red Mars disc on black, crossed by low highlighted hills…"), which names the
black field and is therefore correct only while the black-field source mark is the file in
use. Either wording is accurate for this asset; the one recorded above is background-neutral
and is the one the editorial gate already reviewed.

---

## Sensor illustration candidates (card `t_a9964b8d`, 2026-09-17 10:06–10:14 CEST)

### The approval this work rests on — and the one still missing

The human story owner's Gate 1 answer, recorded verbatim on card `t_5a62fb28` (comment by
`default`, 2026-09-17 09:12 CEST):

> "1 gather media, either by generating using visualizer agent or retrieve from web; automatically
> approve if editor is ok with it; 3 ; 4 - handle it"

The same comment records what that answer releases and what it does not. The card image is to be
*gathered media*, produced here per the sensor-focused illustration brief above; the human **waives
their own sign-off on the media choice**, so **the editor's recorded sign-off is the gate**
("automatically approve if editor is ok with it"); provenance and rights are recorded per candidate
before use; a generated illustration is labelled illustrative; nothing gated may appear in the
image, its filename, its alt text or its caption; and the engineering prerequisite stands —
`newsMediaKeys` holds only `programme-identity` and `asteria-plates`, so gathered media cannot be
placed until a site card adds a key.

**Editor sign-off on these candidates: NOT YET RECORDED** (checked 2026-09-17 10:14 CEST).
`t_5a62fb28` holds six comments; the editor's own two (09:10 CEST) predate the human's answer, its
card is `blocked — human decision required` on Gate 2, and no comment anywhere on the board accepts
or rejects these images — none of which existed when any of those comments was written.
**Nothing in this section is approved, selected for placement, or placed.** The fail-closed default
holds: no `media` key, the amber `news-placeholder` renders, `publication: draft`.

### Candidates (private scratch — never committed)

Every render below was made this pass on the local ComfyUI server: Flux.2 Klein base 4B,
text-to-image, 1024 × 1024 (1:1), 20 steps, CFG 5.0, euler, one job at a time. The `image_generate`
plugin passes an **empty negative prompt**, so every negative constraint is stated positively inside
the prompt text. Each PNG has its `*.workflow.json` sidecar beside it, and
`runs/t_a9964b8d-runs.json` holds the full prompt, ComfyUI prompt id, seed, byte count and SHA-256
for every render including the two rejected attempts. The tree below is git-ignored
(`tools/visual-generator/.gitignore` line 17: `stories/`).

| # | Represents | Private provenance (path, SHA-256, bytes) | Alt text (written from the produced pixels, 2026-09-17) | Caption / label | Tool + seed | Rights | Status |
| - | ---------- | ----------------------------------------- | ------------------------------------------------------ | --------------- | ----------- | ------ | ------ |
| 01 | Mineral and rock sensing — draft §"Reading what rocks are made of"; airborne dust | `tools/visual-generator/stories/002-payload-selection/candidates/01-spectral-sampling.png` · `8839f66a6d5688c0bd39a7331a800da562df59f69a6a5f352395cd315ca0de67` · 1,402,406 B · sidecar `01-spectral-sampling.workflow.json` (cache original `…/cache/images/comfyui-flux-2-klein_20260917_100601_dc903fe9.png`) | "Illustrative artwork, not mission photography: several thin beams of different-coloured light slant down through dusty air onto a rough dark rock, and a couple of bright points glow on the stone where the light lands. A stand-in image for a payload built to sense what a rock is made of." | No caption (see the key contract below); proposed label `Red Horizon // payload sensor illustration` | Local ComfyUI, `flux-2-klein-base-4b.safetensors` + `qwen_3_4b` (`flux2`) + `flux2-vae`; ComfyUI prompt `ece51e04-2963-40e4-bd2a-20039be6ac16`; seed `35853885` | Generated on this machine; no third-party or stock image, no real agency imagery, no scraped asset. `tools/visual-generator/LICENSE` is MIT and explicitly "grants no rights to third-party models or to generated content" — the model files' own licences must be read before any publication claim. The asset is **fictional/illustrative, not approved canon** | **Candidate — recommended for selection** (see below); not approved, not placed |
| 02 | Panoramic and navigation imaging — draft §"Looking at the landscape" | `…/candidates/02-two-views-one-ground.png` · `8fb37ac5e32c58425632eb1a2d3e8c21cae2e403b8064e541f33bc623bb3d7fb` · 456,065 B · sidecar `02-two-views-one-ground.workflow.json` (cache original `…_100722_59b041e2.png`) | "Illustrative artwork, not mission photography: one narrow band of rust-red terrain lies across the middle of a black field under a broad dome of warm orange light that is brightest where a central beam meets the crest, with the ground falling away into black below and faint pinpoint specks scattered in the surrounding dark." | No caption; same proposed label | Same model set; ComfyUI prompt `44334aa1-39c4-4089-a9cd-115b9da63394`; seed `882236924` | Same as 01 | **Candidate** — weaker than intended: the two offset light cones merged into one broad lit dome, so the "same ground seen twice" idea reads faintly (recorded, not hidden) |
| 03 | Weather measurement (airborne dust) and close contact inspection — draft §"Watching the weather" and §"Getting close enough to inspect" | `…/candidates/03-dust-and-contact-closeup.png` · `47d39a0bbe4e69992f3aa5c005015b2373aa19b0d4126787536701cf3562aed9` · 1,788,007 B · sidecar `03-dust-and-contact-closeup.workflow.json` (cache original `…_101135_0c16fc45.png`) | "Illustrative artwork, not mission photography: an extreme close-up of a weathered, dust-caked rock surface lit at a grazing angle, with a thin level line of pale light skimming across it and fine dust grains catching points of light in the air above." | No caption; same proposed label | Same model set; ComfyUI prompt `8467d25f-b560-44e1-990f-9de1514f8574`; seed `409550082` | Same as 01 | **Candidate** — strongest alternative to 01 |

All three were read back with a vision pass before being written up: no embedded text, letters,
numbers, symbols, labels, captions, watermarks or insignia; no vehicle, rover, wheel, mast, arm,
camera body, lens, probe or instrument hardware; no people, astronauts, faces or hands; no border,
matte, inset panel, grid, chart or map. No candidate carries a star field: 01's bright specks sit inside the light beams and 02's are a
sparse drift of dust motes over the terrain, while 03 carries none. Every image is 1024 × 1024 RGB
PNG, 8-bit, non-interlaced.

### Rejected during this pass (kept in scratch, so the decision is auditable)

Two renders for slot 03 were rejected **before** any was written up as a candidate:

- `…/candidates/03-attempt1-REJECTED-black-matte.png` · SHA-256 `7158d59fdd37dc782db728b82e3b9f030ad20ad28d7b752c6cf1f64af9f724c7` — the scene came back as a portrait panel inset inside the square with black margins all round (a matte/border effect), against the brief's edge-to-edge square; faint star-like specks as well.
- `…/candidates/03-attempt2-REJECTED-side-mattes-stars.png` · SHA-256 `a70d306cb50622f859b1ebad3e2f494491feaebd26e3f157650ec91d056e2415` — black side mattes (the scene did not reach the left and right edges) and a star field across the upper area despite the prompt forbidding one.

The third attempt changed the composition concept rather than fighting the model — a full-frame
close-up with no horizon — and passed every check. The rejected pairs are kept beside the
candidates with matching `*.workflow.json` sidecars.

### Recommended selection

**Candidate 01 (`01-spectral-sampling`).** It is the only one that shows a *measurement being
taken* — light reading a rock face — which is the article's headline sensing job; it is legible at
card size; and its subject sits low-left, leaving the upper half as calm black negative space so the
card's label overlay and any headline treatment sit on empty field. **Candidate 03
(`03-dust-and-contact-closeup`)** is the strongest alternative: it is the closest literal reading of
the brief's "surface texture at close range" plus airborne dust, and it covers two of the four
scopes. Candidate 02 is the calmest and most abstract but says least.

The choice is the human's; the editor's sign-off is the gate the human delegated. This card does not
select, approve, or place anything.

### Placement, crop and accessibility notes

- **Aspect and shape.** All candidates are square 1024 × 1024, the placement-safe shape the brief
  asks for; nothing is letterboxed inside the image. The news band is
  `.news-image { min-height: 22rem; overflow: hidden; }` with the image at `width={1024}`,
  `height: 100%`, `object-fit: contain` (`website/src/features/news/NewsCard.astro`), so the square is
  contained and never cropped. On a band wider than it is tall the remaining area is the band plate,
  `--rh-surface-plate: #eeebe5` (`website/src/styles/tokens.css`) — a **light** plate, so each
  candidate reads as a deliberate black-field plate on light ground, the same way the 1:1 identity
  mark does.
- **Label overlay contrast.** `.image-label` is drawn bottom-right on `rgba(1, 0, 0, 0.78)` from
  `mediaLabel`. Candidate 01's bottom-right is unlit regolith and 02's is the black field (both
  strong); **03's bottom-right is brightly lit rock**, the weakest of the three — check the overlay
  at the deployed width if 03 is chosen.
- **If a future key ever rendered `cover`** in a wide band instead of `contain`, the safe area to
  lose is the empty black top of 01, the outer thirds of 02, and the crack shadow at the edges of
  03; no subject sits there.
- **Alt text** is the string in the table for the selected candidate, and is written to the
  commissioned key contract: it names what the picture shows, states that it is illustrative, makes
  no claim about payload hardware as approved design, and never presents itself as documentary
  mission imagery.
- **Confidentiality check on the public surfaces of a candidate.** Filename, alt text, and proposed
  label carry none of the gated terms (`RH-01`, `Pathfinder`, `18° 42`, `226° 14`, the withheld
  dossier names `vehicle` and `timeline`): the proposed export name is
  `payload-sensor-illustration.png` and the label is `Red Horizon // payload sensor illustration`.
  No candidate depicts a vehicle, the launcher, the landing area, a date, a coordinate or any
  step-003+ fact; no real agency is named or implied and no insignia appears.

### Proposed stable export — NOT created by this card

| Field | Value |
| ----- | ----- |
| Proposed stable filename | `docs/payload/payload-sensor-illustration.png` — a new `payload` subject dossier mirroring `docs/vehicle/`, `docs/area/`, `docs/brand/`. `payload` is **not** one of the withheld directory names (`website/scripts/guards.mjs`: `gatedDirectoryNames = ['vehicle', 'timeline']`), and the name carries nothing gated. The dossier choice and the copy are the **site engineer's** act, on the human's selection, never this card's |
| Copy source | the selected candidate's scratch PNG, e.g. candidate 01 at `…/candidates/01-spectral-sampling.png`, SHA-256 `8839f66a…` — record the hash of the file actually copied |
| Frontmatter contract (planned by the planner on `t_5a62fb28`, 09:15 CEST) | `media: payload-sensor-illustration` · the selected candidate's `mediaAlt` · `mediaLabel: Red Horizon // payload sensor illustration` · **no `mediaCaption`** (the planned key has captionCount 0). The key does not exist yet: card `t_4b49346b` adds it. This card did not touch the draft |
| Draft state after this card | `website/news/002-payload-selection.mdx` unchanged — no `media`, no `mediaAlt`, `publication: draft` |

### Public/canon impact and repository hygiene

None and none. Nothing was published, no route or listing changed, no canon was authored, no `docs/`
file was written by this card, and no candidate, prompt, sidecar or run record was committed: the
whole generation tree is git-ignored scratch (`tools/visual-generator/.gitignore`), and the only
repository file this card touched is this manifest plus the run record under the ignored
`stories/` tree.

### Validation performed this pass

| Check | How | Result |
| ----- | --- | ------ |
| Server up in its own uncapped unit before the first job | `~/.hermes/bin/comfyctl status`; `systemctl --user show comfyui-server.service -p MemoryMax`; `systemctl --user status hermes-worker-kanban-t_a9964b8d-run-70.scope` | `running: yes url: http://127.0.0.1:8188 pid: 710266 queue: running=0 pending=0 gpu_used: 2449 MiB`; unit `MemoryMax=infinity`, `MemoryAccounting=yes`; this worker's own scope peaked at **308.4 MB** against its 4 GiB cap — no model was loaded inside it, which is the failure that killed four earlier runs of this card |
| One job at a time | `curl /queue` before each submission | empty queue before every submission; no overlap |
| Candidates match the brief | `vision_analyze` read of each PNG (3 accepted + 2 rejected) | No embedded text/symbols/labels/watermarks/insignia; no vehicle/hardware/people; square 1:1; palette within the brand family (void black field, oxide red, ember, peach rim light, amber); subject placement as recorded per candidate |
| Reject rules applied | the two slot-03 attempts above | Both rejected for matte/border and star-field defects and re-rendered; three clean candidates delivered |
| Aspect and crop | read of `NewsCard.astro` (`.news-image`, `object-fit: contain`), `tokens.css` (`--rh-surface-plate: #eeebe5`) | Square is contained, never cropped; light plate noted in the placement notes |
| Provenance completeness | per-candidate sidecar + `runs/t_a9964b8d-runs.json` | Prompt, prompt id, seed, model set, byte count and SHA-256 for all five renders |
| Repository hygiene | `git status --short`; `git check-ignore -v …/01-spectral-sampling.png` | This card added no tracked file: the scratch tree is ignored (`tools/visual-generator/.gitignore:17: stories/`); the manifest is the only tracked edit |
| Draft untouched | `git status --short` on `website/news/002-payload-selection.mdx` | Unmodified; no `media` key added |
| ComfyUI released at the end | `comfyctl stop`; `comfyctl status` | `Requested model unload + memory free … ComfyUI stopped; GPU memory in use now: 2678 MiB`, then `running: no url: http://127.0.0.1:8188 gpu_used: 2678 MiB` — server stopped, models unloaded, GPU free for the next role (the remaining 2678 MiB is the desktop's own non-ComfyUI load) |

**Review outstanding:** the **editor's recorded sign-off** on the gathered media (the gate the human
delegated on `t_5a62fb28` Gate 1) — no such sentence exists yet; and the human's selection of a
candidate. **Then**, and only then, the site card `t_4b49346b` adds the `payload-sensor-illustration`
media key and the site engineer copies the selected export into `docs/`. Nothing here flips
`publication` (Gate 2 remains with the human) or the `media` key.
