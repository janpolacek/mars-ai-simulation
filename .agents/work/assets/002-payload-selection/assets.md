# Asset manifest: 002-payload-selection

## Manifest metadata

| Field         | Value                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------- |
| Slug          | `002-payload-selection`                                                                       |
| Brief         | `.agents/work/briefs/002-payload-selection.md`                                                |
| Draft         | `website/news/002-payload-selection.mdx`                                                      |
| Timeline step | `002-payload-selection` (`docs/timeline/002-payload-selection.md`)                            |
| Card          | `t_cb3464ef` — `mars-ai-simulator-visuals`                                                    |
| Status        | `complete` — reuse recorded; no new imagery generated; one human release decision outstanding |

## Determination

**`no new imagery: reuse /assets/logo.png`** (source `docs/brand/logo.png`).

The card's reuse check was run first, across all three dossiers. The result is
narrower than "any approved image will do": the only asset family this repository
has cleared for public release is the Red Horizon identity mark, and the two
dossiers that hold step-relevant imagery are barred at step 002.

| Dossier         | What it holds                                                                                                           | Usable for step 002? | Why                                                                                                                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/brand/`   | `logo.png` (light-field variant), `logo-bg-black.png` (approved source mark)                                            | **Yes**              | Approved by the human story owner on 2026-09-15; the only source `website/scripts/assets.mjs` copies into the public build                                                                               |
| `docs/vehicle/` | Six RH-01 Pathfinder renders (`canonical`, `front-left`, `side-view`, `rear-right`, `contact-arm`, `contact-arm-scene`) | **No**               | RH-01 imagery is a step-003 spoiler (`docs/timeline/002-payload-selection.md`: "Do not publish a final rover render unless step 003 is approved"); the directory is also an explicitly gated sync source |
| `docs/area/`    | Three Asteria Field map plates (AF-01, AF-02, AF-03)                                                                    | **No**               | Asteria Field is step-007 material, and `docs/area/AREA.md` bars copying it into `website/`, public filenames, or public metadata without a separate human approval. It is not a sync source either      |

So the reuse that satisfies the card is the identity mark as the article's
news-card media band — the same asset family the published step-001 card already
uses. No generation was run and no GPU work was spent: nothing in this card needs
an image that does not exist.

## Candidate assets

| Asset                                                                                                                                     | Placement                                                                                                                | Alt text                                                                                                                                                                                                        | Caption / label                     | Tool                                                                                                                                    | Rights                                                                                                                                                                                                       | Status                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/brand/logo.png` → `/assets/logo.png` (SHA-256 `d23d7c99986efd73ee33e84e3699ff757bf2b0c286fa0cf24e5252e4623ff0f5`)                   | News-card image band of `website/news/002-payload-selection.mdx` (frontmatter `media`, with `mediaAlt` and `mediaLabel`) | "A rust-red Mars disc crossed by low highlighted hills, with a small Sun rising behind its upper-left edge and small blue Earth and Moon points at upper right."                                                | `Red Horizon // programme identity` | Approved identity mark; original candidate produced with GPT Image (see `docs/brand/BRAND.md`, "Status and approved source") | Fictional Red Horizon project asset, human-approved 2026-09-15 for the Preparing site; a **new public placement requires a separate human release decision** (`BRAND.md`, "Publication boundary") | **Selected for reuse** — release-cleared file; placement withheld pending that decision                                                                               |
| `docs/brand/logo-bg-black.png` → `/assets/logo-bg-black.png` (SHA-256 `f9543989560da54fc56a8973002833b2b8dbe3d1c085fc1293af3faca457b749`) | Same band, if the human prefers the black-field mark over the light-field variant                                        | "A rust-red Mars disc on black, crossed by low highlighted hills. A small Sun rises behind its upper-left edge, while blue Earth and a smaller Moon point appear at upper right." (the guidelines' own wording) | `Red Horizon // programme identity` | Same approved source mark (this file's hash is the one recorded in `BRAND.md`)                                               | Identical release boundary as above                                                                                                                                                                          | **Not selected** — offered only as the differentiation option; it is an opaque RGB file and would render as a black panel inside the site's light `#eeebe5` card area |
| Sensor-focused editorial illustration (new)                                                                                               | Same band, replacing the reuse row if the human wants step-002-specific media                                            | Not written — alt text must be written from a produced candidate, never before one exists                                                                                                                       | Not decided                         | Local ComfyUI (Flux.2 Klein, `image_generate` provider `comfyui`) — **not run**                                                         | To be determined before generation; must not claim documentary mission imagery                                                                                                                               | **Not produced** — requires an explicit human decision; brief below                                                                                                   |

## Approved stable exports

| Asset                                          | Path                                                   | Approved by                                                                           |
| ---------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Red Horizon identity mark, light-field variant | `docs/brand/logo.png` → public copy `/assets/logo.png` | Human story owner, 2026-09-15 (`docs/brand/BRAND.md`); reuse recorded here |

No copy step is required for this export: the file is already tracked in
`website/public/assets/` and is copied into the build by
`website/scripts/sync-assets.mjs`. Nothing was copied out of `tools/`
(see "Validation performed": no run happened).

### Placement release gate (human decision)

The draft keeps **no** `media` field in this card. The single change that applies
the reuse is:

```yaml
media: /assets/logo.png
mediaAlt: "A rust-red Mars disc crossed by low highlighted hills, with a small Sun rising behind its upper-left edge and small blue Earth and Moon points at upper right."
mediaLabel: Red Horizon // programme identity
```

It is held back deliberately. `docs/brand/BRAND.md`, "Publication
boundary", requires "a separate human release decision … before any new
public-site or social use beyond the current Preparing site", and open question 2
of the published step-001 review (`.agents/work/reviews/001-project-announcement.md`,
section 6) is still unresolved: which identity-mark variant a news card should
carry, and whether a new public placement is released at all. Until the human
records that decision, the step-002 card renders the designed amber
`news-placeholder` (number, rule, `PAYLOAD BRIEF 02`) that `index.astro` draws
whenever `media` is unset — an intentional state, not a defect, and the correct
default for a `publication: draft` article.

## Private provenance

- **Identity mark (reuse).** The approved mark plus its SHA-256 is the durable
  record; its private provenance — the selected GPT Image candidate and its exact
  generation record — lives in the local visual-generator workspace, which keeps
  no permanent assets. The guidelines also cite the retired pre-kanban tracker
  entry `mars-ai-simulator-2tm` for the original approval. Note for the record:
  `docs/beads-archive.jsonl`, which `AGENTS.md` describes as that archive, is
  currently absent from the working tree (already reported as an adjacent issue by
  the step-001 review; owner: story coordinator — not this card).
- **New imagery (not produced).** Nothing to record: no prompt was issued, no job
  was queued, no workflow sidecar and no run directory were created under
  `tools/visual-generator/`.
- **Nothing from this card was committed.** No model file, workflow, raw run data,
  or candidate generation was added to the repository.

## Barred media (do not place in this article)

- RH-01 Pathfinder renders under `docs/vehicle/` — step-003 spoiler, and the
  `sync-assets.mjs` gated source.
- Asteria Field plates under `docs/area/` — step-007 material; `AREA.md` bars
  public-site use without a separate human approval.
- Any asset carrying `RH-01`, `Pathfinder`, `Ariane`, `Kourou`, `Asteria`, a
  coordinate, or a date — none of which may appear in a public filename, label,
  caption, or alt text at this step.

## Proposed new imagery — visual brief (NOT produced; requires a human go-ahead)

The step-002 timeline names a candidate for this moment that does not exist yet:
"labelled but non-final instrument concept, or a sensor-focused editorial
illustration". This is the brief for the second option, recorded so the decision
can be made in one pass. **No image was generated.**

| Field                     | Value                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Moment / subject          | The four measurement jobs the step-002 payload scope covers — panoramic and navigation imaging, mineral and rock sensing, weather measurement, and close contact inspection — as a **sensor-focused editorial illustration**. Abstraction over hardware: optics, spectral bands, airborne dust, surface texture at close range                                                             |
| Placement                 | News-card image band of `website/news/002-payload-selection.mdx`, replacing the reuse row in this manifest if selected                                                                                                                                                                                                                                                                     |
| Candidates                | 3, one GPU job at a time, serial                                                                                                                                                                                                                                                                                                                                                           |
| Aspect ratio              | 1:1 (1254 × 1254 to match the assets the site already declares, `.news-image img { object-fit: contain }`)                                                                                                                                                                                                                                                                                 |
| Continuity references     | Palette only, from `docs/brand/logo.png` and the palette table in `docs/brand/BRAND.md` (void black `#010000`, Mars oxide `#A0301D`, ember `#CD553A`, relief shadow `#9F321F`, rim light `#FCC78B`, sun core `#FCA042`, halo `#895215`, Earth blue `#7BA7FA`). Do not restyle, crop, recolor, or embed the mark inside a scene                                                  |
| Allowed canon facts       | The four payload scopes; the "ten partner groups, one vote each" frame; the 2031 launch-window year; the "not a life-detection mission" framing — all as already published in the draft                                                                                                                                                                                                    |
| Forbidden spoilers        | RH-01 name, silhouette, wheel count, mast, arm or contact-tool geometry (step 003); Ariane 64 / Kourou (step 004); any exact launch or landing date (steps 005–006); Asteria Field name, coordinates, maps, local units, or traverse detail (step 007); FEI STU; any fact from steps 005–011; real agency insignia or endorsement cues; astronauts; text or captions burned into the image |
| Intended alt-text meaning | Plain-language description of what the produced candidate actually shows, naming the measurement types it represents. It must state that the image is illustrative, must not describe payload hardware as approved design, and must never claim documentary mission imagery. Written only after candidates exist                                                                           |
| Tool                      | Local ComfyUI, Flux.2 Klein through `image_generate` (`provider: comfyui`); reference-then-angle-then-scene sequencing per `.agents/skills/mars-story-toolset/SKILL.md` is unnecessary for an abstract illustration                                                                                                                                                                        |
| Human gate                | Do not generate until an explicit human decision is recorded on card `t_cb3464ef`. Then: `comfyctl start` → one job at a time → select → `comfyctl stop`. Candidates, prompts, and run records stay in `tools/visual-generator/`; only a human-selected export may be copied into `docs/`                                                                                                  |
| Rights                    | To be recorded per candidate before any use; a generated illustration carries no third-party rights but is not approved canon until the human selects it                                                                                                                                                                                                                                   |

## Continuity note

No asset may depict RH-01 imagery, Ariane 64 hardware, Asteria Field terrain, or
any fact gated to steps 003–011. Assets are labelled as fictional or illustrative
and are never presented as documentary mission imagery. The reuse recorded here is
a programme identity mark only: it makes no claim about payload, hardware, or
schedule, and `mediaLabel` says exactly what it is.

## Validation performed

| Check                                  | Command                                                                            | Result                                                                                                                                                                                                                                                    |
| -------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reused file is the release-cleared one | `sha256sum docs/brand/*.png website/public/assets/*.png`                           | `logo.png` `d23d7c99…` identical in both trees; `logo-bg-black.png` `f9543989…` identical in both, and equal to the hash `BRAND.md` records for the approved source mark                                                                       |
| Gated media is not publicly reachable  | `ls website/public/assets` ; `ls website/dist/assets`                              | Both hold only `favicon-32.png`, `favicon.ico`, `logo-bg-black.png`, `logo.png` — no vehicle render, no Asteria Field map                                                                                                                                 |
| Sync policy understood                 | `website/scripts/assets.mjs`                                                       | `publicSourceDirectories = [docs/brand]`; `gatedSourceDirectories = [docs/vehicle]`; `docs/area` is neither copied nor gated                                                                                                                              |
| Image files match their descriptions   | `file docs/brand/logo.png docs/brand/logo-bg-black.png` plus a visual read of both | `logo.png` is the RGBA light-field variant used on the site's light card panel; `logo-bg-black.png` is the opaque RGB black-field approved source mark                                                                                                    |
| ComfyUI state                          | `~/.hermes/profiles/mars-ai-simulator-visuals/bin/comfyctl status`                 | `running: no   url: http://127.0.0.1:8188  gpu_used: 2491 MiB` — the server was never started for this card (no generation was authorised or needed), so there is nothing to stop. `nvidia-smi` shows 2490 MiB / 8151 MiB in use by a non-ComfyUI process |
| Repository hygiene                     | `git status --short`                                                               | No file added or modified by this card except this manifest                                                                                                                                                                                               |

**Review outstanding:** continuity check `t_5f29e3aa` and editorial gate
`t_db1becc6`. The editorial gate's "Image placement and caption" and "Alt text on
all images" rows apply to this manifest's reuse row and to the release gate above;
no image is placed, so no alt text is live in the draft.
