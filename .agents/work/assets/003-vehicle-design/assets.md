# Asset manifest: 003-vehicle-design

## Manifest metadata

| Field            | Value                                                                                                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug             | `003-vehicle-design`                                                                                                                                                          |
| Brief            | `.agents/work/briefs/003-vehicle-design.md` (§Media: key `vehicle-references`, plateCount 1, altCount 1, captionCount 0, requiresLabel false)                                 |
| Draft            | `website/news/003-vehicle-design.mdx` — SHA-256 `d27508403891557992aab2306def3ceb9c065d9e06c4c7463bc7bd0e6e30171d`, 5,057 B, `publication: draft`                             |
| Timeline step    | `003-vehicle-design` (`docs/timeline/003-vehicle-design.md`)                                                                                                                  |
| Release plan     | `.agents/work/releases/003-vehicle-design.md` §Media key decision (binding), line 74                                                                                          |
| Card (this pass) | `t_72fda1ae` — `mars-ai-simulator-visuals`, run 127, 2026-09-17 13:59–14:10 CEST                                                                                              |
| Status           | `complete` — one reuse entry; **no new imagery generated, no ComfyUI job run, no GPU time spent**; four blockers/findings recorded, none of them settled here (see §Findings) |

## Determination

**`no new imagery: reuse docs/vehicle/canonical.png`** — the approved studio reference that the
step-003 release plan names as the article's single plate.

The card asks one thing of this role: record the pre-existing plate rather than produce one. Nothing
is generated, derived, cropped, re-encoded, or upscaled. `docs/vehicle/canonical.png` is already a
stable canonical file in the subject dossier that `docs/README.md` assigns to
`project-documentation` with this role, so **no export/copy step exists to propose** — the stable
filename is the path it already has.

### Reuse check across the dossiers (run first, as the card requires)

| Dossier         | What it holds                                                                | Usable for step 003? | Why                                                                                                                                                                       |
| --------------- | ---------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/vehicle/` | `VEHICLE.md` dossier + six renders (five studio references, one scene image) | **Yes**              | This is the step's own subject. `canonical.png` is the primary studio view and the release plan's named plate source (line 83)                                            |
| `docs/brand/`   | identity mark + transparent derivative + `BRAND.md`                          | **No**               | The programme mark, not the vehicle; already carries the 002 reuse and its own Publication-boundary decision (`docs/brand/BRAND.md`)                                      |
| `docs/payload/` | `payload-sensor-illustration.png` (the 002 editor-approved candidate)        | **No**               | Illustration for the 002 payload article's key only; depicts no vehicle and is not a studio reference                                                                     |
| `docs/area/`    | Asteria Field plates AF-01/AF-02/AF-03                                       | **No**               | Released **for article 001 only** (`docs/SCENARIO.md:279`); barred on any 003 surface by the brief §Forbidden angle, and the article must carry no Asteria Field material |

## Plate 1 — the only entry

| Field                   | Value                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Plate / stable filename | `docs/vehicle/canonical.png` (in place; no copy, no derivative, no `public/` file)                                                                                                                                                                                                                                                                                                                                |
| SHA-256                 | `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267`                                                                                                                                                                                                                                                                                                                                                |
| Bytes / pixels / format | 1,889,350 B · 1448 × 1086 · PNG, 8-bit RGB, non-interlaced · mtime 2026-09-15 23:19:27 +0200                                                                                                                                                                                                                                                                                                                      |
| Aspect ratio            | 4:3 (1.333)                                                                                                                                                                                                                                                                                                                                                                                                       |
| Subject                 | RH-01 Pathfinder, studio baseline configuration — warm-white rectangular body, dark flat instrument deck, six open-mesh wheels on visible articulated suspension, short central stereo mast with one camera housing, single front contact arm nested in its travel cradle, seamless neutral studio floor and background                                                                                           |
| Story step              | `003-vehicle-design` (first released appearance of the vehicle)                                                                                                                                                                                                                                                                                                                                                   |
| Placement               | News-card media band of `website/news/003-vehicle-design.mdx`, and the article's lead `<figure class="article-media">` once the article is published. Both resolve from the `media:` key, never from a URL                                                                                                                                                                                                        |
| Label                   | `RH-01 Pathfinder · studio reference`                                                                                                                                                                                                                                                                                                                                                                             |
| Caption                 | **none** — the key's `captionCount` is 0, so the schema rejects a `mediaCaption`; the card prints only the label chip and the article only the `mediaLabel` `figcaption`                                                                                                                                                                                                                                          |
| Alt text                | "Illustrative artwork of the RH-01 Pathfinder rover in its studio baseline configuration: warm-white rectangular body, dark instrument deck, six open-mesh wheels on visible suspension, short stereo camera mast, and a single front contact arm nested in its travel cradle. A fictional vehicle for a fictional mission; no real agency is named or implied."                                                  |
| Tool                    | **reuse — no generation.** Exists in the dossier since 2026-09-15 (commit `9797b2a`); untouched by this card                                                                                                                                                                                                                                                                                                      |
| Rights                  | Fictional Red Horizon project asset — the fiction's own vehicle, described from the programme's dossier (`docs/vehicle/VEHICLE.md`). No real space agency is named, no third-party or stock imagery, no insignia, no recognisable real hardware. `docs/GENERAL.md` §Media policy governs: the image preserves the canonical vehicle silhouette, and visual style may not overrule established equipment placement |
| Approval status         | Approved studio reference for step 003 (`docs/timeline/003-vehicle-design.md`: the canonical reference package defines silhouette, colour, mast, wheels, suspension, arm, rear panel). **Canon confirmation and the release decision are the merged editorial role's** and are not made by this manifest                                                                                                          |
| Private provenance      | `docs/vehicle/canonical.png` + its SHA-256 above. The generation record (prompt, model, seed, raw candidates) is **not present anywhere in this repository** and is not held by this card — recorded as finding 3                                                                                                                                                                                                 |
| Generation required     | no                                                                                                                                                                                                                                                                                                                                                                                                                |
| Placement status        | **withheld by this card** — not approved, not placed, draft untouched (see §Findings)                                                                                                                                                                                                                                                                                                                             |

### The media key contract this plate would render through

| Field             | Value                                                                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Key               | `vehicle-references`                                                                                                                                   |
| Requirement tuple | `{ plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }` — mirror of `payload-sensor-illustration` (`website/src/lib/media.ts` line 44) |
| Resolver          | none yet (`website/src/features/news/media.ts`)                                                                                                        |
| Asset import      | none yet (`website/src/lib/assets.ts`)                                                                                                                 |
| Exists today?     | **No.** `newsMediaKeys` is `['programme-identity', 'asteria-plates', 'payload-sensor-illustration']` — verified 2026-09-17 14:04 CEST                  |

Frontmatter to apply when the site card lands (and only then):

```yaml
media: vehicle-references
mediaAlt: "Illustrative artwork of the RH-01 Pathfinder rover in its studio baseline configuration: warm-white rectangular body, dark instrument deck, six open-mesh wheels on visible suspension, short stereo camera mast, and a single front contact arm nested in its travel cradle. A fictional vehicle for a fictional mission; no real agency is named or implied."
mediaLabel: RH-01 Pathfinder · studio reference
# no mediaCaption — the key renders no caption and the schema rejects one
```

**The card's premise does not hold today.** The card says the alt text is "the `mediaAlt` from the
MDX frontmatter". The draft carries **no** `media*` field of any kind: its frontmatter is
`title`, `category`, `status`, `publication`, `summary`, `linkLabel`, `order`, `accent` (verified
by grep at 14:03 CEST). The alt string recorded above therefore comes from the card body and the
brief, and it is the string the frontmatter must carry verbatim when the key is wired — it cannot be
"taken from" frontmatter that does not have it.

### Placement, crop and accessibility notes

- **News card** — `.news-image { min-height: 22rem; overflow: hidden; background: var(--rh-surface-plate) }`
  with the image at `width={1024}`, `width: 100%; height: 100%; object-fit: contain`
  (`website/src/features/news/NewsCard.astro` lines 91-104). The 4:3 plate is **contained, never
  cropped**; the leftover area is the light plate `--rh-surface-plate: #eeebe5`
  (`src/styles/tokens.css` line 22), which sits close to the render's own near-white studio field,
  so the letterbox reads as a continuation of the studio floor rather than as a band.
- **Article lead figure** — `.article-media img { width: 100%; max-width: 24rem; height: auto }`
  (`ArticleView.astro` lines 96-99): natural 4:3 aspect at up to 24rem wide, **no crop**. The
  component also passes a nominal `height={1024}` attribute beside `width={1024}`; the source is
  4:3, so the CSS `height: auto` governs the rendered box. Worth knowing if anyone measures the
  reserved space: the square attribute pair understates the plate's height.
- **Label overlay** — the card draws `.image-label` bottom-right on `rgba(1, 0, 0, 0.78)` with
  `--rh-text-primary`; on this light plate the chip supplies its own dark ground, so contrast does
  not depend on the pixels beneath it (unlike the black-field 002 illustration, where the chip and
  the field are near-isolues). The article figure prints `mediaLabel` as a `figcaption`.
- **No crop note is needed anywhere**, and no safe-area discussion applies: nothing is cropped on
  either placement.
- **Alt text vs pixels.** Both placements pass the frontmatter entry through verbatim for a
  one-plate key (`plates.ts` `plateAltText()`, lines 33-42, takes the single entry unchanged).
  The string was checked against the produced pixels — see §Validation.

## Findings (routed, not decided here)

1. **The withhold guard blocks this plate's import, the emitted derivative, and the article's own
   released strings — three separate build failures.** `website/scripts/guards.mjs` still encodes
   the pre-003 state: `gatedDirectoryNames = ['vehicle', 'timeline']` (line 31) and
   `gatedTextMarkers = ['RH-01', 'Pathfinder', '18° 42', '226° 14']` (line 52). `npm run build`
   runs `postbuild` → `scripts/check-dist.mjs`, which calls `scanSourceForGatedReferences()` and
   `checkDist()`. Executed probe against the real guard module on 2026-09-17 14:05 CEST
   (`node /tmp/vehicle-guard-probe.mjs`, scratch outside the repository):

   | Simulated input                                                                                               | Offence returned                                   |
   | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
   | `src/lib/assets.ts` importing `../../../docs/vehicle/canonical.png` (the exact import the dev card specifies) | `gated-path` — detail `'../../../docs/vehicle`     |
   | `dist/_astro/canonical.ZZ1234.webp` (Astro's emitted derivative of the plate)                                 | `gated-name-stem` — detail `canonical.ZZ1234.webp` |
   | a built `/news/003-vehicle-design/index.html` carrying the article's own summary and label                    | `gated-text` × 2 — detail `RH-01`, `Pathfinder`    |

   So the release of step 003 mechanically requires **retiring the vehicle withhold** in the guard
   (or narrowing it to the artefacts that stay withheld, e.g. the scene image): the vehicle dossier
   and its studio references are what step 003 releases, and `docs/SCENARIO.md:277` already says
   "RH-01 imagery waits for step 003" — the guard comment itself says the dossier is withheld
   "until the vehicle-design step". The 2026-09-17 precedent is exact: the released landing-region
   name was **retired from `gatedTextMarkers`** while the other markers stayed.
   **This is a release-control change, not a mechanical edit**: the withhold list moves only with a
   recorded release decision, and the right owners are the merged editorial role (decision) and the
   dev card `t_accf6f7a` (implementation + tests). This card decides nothing and changes no code.
   The blocker is recorded on `t_accf6f7a` as a comment, because its body already scopes the media
   key but not the guard.
2. **Wheel visibility in the plate vs the dossier's own baseline sentence.**
   `docs/vehicle/VEHICLE.md` §Operating appearance, stage 1: baseline has "all six wheels visible
   against a neutral background". Two vision passes over `canonical.png` (2026-09-17 14:03 CEST,
   full frame and a lower-half crop) both read **six wheels total with five visible from this
   angle** — the right-rear wheel is occluded by the body — and found no seventh wheel, no
   duplicate, no floating or mismatched-shadow hardware. The alt text as written
   ("six open-mesh wheels on visible suspension") describes the vehicle and is accurate; it does
   not claim six _visible_ wheels. Recording it because the dossier's stage-1 sentence and this
   render are not literally the same statement, and the missing sixth wheel is the kind of thing a
   reader counts. Owner of the call: the editorial/continuity gate `t_1e84c815` / `t_82680639` —
   either accept the render as the canonical studio view (it is the approved reference) or reword.
   This card does not rewrite the approved alt text and does not touch the dossier.
3. **The renders have no recorded private provenance.** `docs/area/AREA.md` §Map package records
   each plate's producer and date ("GPT Image generation, 2026-09-16"), and `docs/brand/BRAND.md`
   records the identity mark's approval and its private provenance line. Nothing equivalent exists
   for `docs/vehicle/`: `VEHICLE.md` documents appearance only, and the six PNGs carry no
   sidecar, no record, and no reference outside the dossier. Their file times are 2026-09-15
   23:19–23:22 and they entered the tree in commit `9797b2a` (2026-09-16). The provenance
   reference this manifest can honestly give is therefore the **canonical path plus SHA-256**; the
   generation record is not in the repository and was not available to this card. Gap owner:
   `project-documentation` / the editorial gate, not this card — `docs/README.md` line for
   `vehicle/` assigns the dossier to that pairing.
4. **`contact-arm-scene.png` stays withheld, and it is the one vehicle file that must stay gated
   if the guard is narrowed.** SHA-256 `63d047e5541801e0d085381af728b84b4bd966b86355c3a003128db761b2ae03`,
   2,672,139 B, 2026-09-15 23:21. It is a scene image, and
   `docs/timeline/003-vehicle-design.md` line 26 holds that the visual creator must produce and
   the reference package must be approved before editorial scene images; the brief repeats it
   (lines 52-53). It is **not** the plate in this manifest and must not be placed on this article.
5. **No GPU work was done, by decision.** `comfyctl status` at 14:06 CEST: `running: no   url:
   http://127.0.0.1:8188  gpu_used: 2214 MiB`; `comfyctl stop` answered `ComfyUI is not running at
   http://127.0.0.1:8188` (the 2,214 MiB belongs to a non-ComfyUI process). The server was never
   started for this card, so it is `no` at the end of the card as well. ComfyUI is **N/A by
   decision**: the plate pre-exists, and starting an engine that would load a 4–8 GB model to
   produce nothing would only hold VRAM against the next worker.

## Barred media (must not appear on this article)

- `docs/vehicle/contact-arm-scene.png` — scene image; needs the reference-then-scene gate (finding 4).
- `docs/area/` plates AF-01/AF-02/AF-03 — released for article 001 only (`docs/SCENARIO.md:279`);
  barred by this brief, and no Asteria Field name, coordinate, map, unit identifier, traverse or
  hazard detail may appear in any alt text, caption, label, or filename on this article.
- `docs/payload/payload-sensor-illustration.png` — the 002 article's illustration, not a vehicle plate.
- `docs/timeline/` — private continuity source.
- Any step-004+ material: launcher, launch/landing date, landing site, surface operations, damage,
  discovery, performance statistics. The plate itself is studio-only — neutral floor, white
  background, no rocks, no red soil, no platform, no astronaut, no smoke, no caption or overlay —
  so it depicts none of it.

## Validation performed

All rows run 2026-09-17 between 14:02 and 14:06 CEST against the live shared tree.

| Check                                   | Command / source                                                                             | Result                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Plate present, hash and identity        | `sha256sum`, `wc -c`, `stat -c '%n %s %y'`, `file docs/vehicle/*.png`                        | `8dbb33d5…`, 1,889,350 B, 1448 × 1086, 8-bit RGB, non-interlaced, mtime 2026-09-15 23:19:27. The five others hashed in the same pass for the record: `front-left.png` `8dd257ee…` 1,792,437 B · `side-view.png` `441a1152…` 1,755,564 B · `rear-right.png` `579ef86f…` 1,785,236 B · `contact-arm.png` `a1817732…` 2,125,751 B · `contact-arm-scene.png` `63d047e5…` 2,672,139 B (findings 3-4). Nothing was copied, re-encoded, cropped or moved                                                       |
| Alt text matches the produced pixels    | `vision_analyze` full-frame pass + a lower-half crop pass (14:03 CEST)                       | Confirmed: warm-white rectangular body with rounded protected corners, dark segmented deck, muted red accents, central short mast with **one** stereo housing and a pair of dark lenses, **one** front arm folded in a recessed cradle, six wheels total on visible articulated suspension, seamless neutral floor and background, faint grounded shadow. No embedded text, label, watermark, insignia, people, rocks, terrain, no duplicated arm, no extra wheel, no floating or disconnected hardware |
| Aspect, placement, crop                 | `NewsCard.astro` lines 91-111, `ArticleView.astro` lines 30-42, 91-104, `tokens.css` line 22 | `contain` on the card band (light plate `#eeebe5`), natural 4:3 within 24rem on the article figure — no crop, no derivative, no export needed (above)                                                                                                                                                                                                                                                                                                                                                   |
| The key genuinely does not exist yet    | `website/src/lib/media.ts` line 17, `website/src/features/news/media.ts` line 22             | `newsMediaKeys = ['programme-identity', 'asteria-plates', 'payload-sensor-illustration']`; no `vehicle-references` requirement, no resolver, no `assets.ts` import                                                                                                                                                                                                                                                                                                                                      |
| The guard failure is real, not inferred | `node /tmp/vehicle-guard-probe.mjs` (scratch, imports `website/scripts/guards.mjs`)          | Three offences returned with the exact details tabulated in finding 1: `gated-path`, `gated-name-stem`, `gated-text` ×2                                                                                                                                                                                                                                                                                                                                                                                 |
| Build (current tree)                    | `cd website && npm run build` (14:02:40)                                                     | Complete; 6 pages; `[media-scope] every asset emitted into _astro/ is referenced by a built document.`; `postbuild` `check-dist` exit 0: "no reference into a withheld directory, and no withheld file or marker in dist/."                                                                                                                                                                                                                                                                             |
| Build output carries no 003 material    | `find dist -iname '*003*'`; `grep -rl 'RH-01\|Pathfinder' dist`                              | No 003 file or route; 0 files carrying either marker; `dist/_astro/` holds only the brand, area and payload derivatives — no vehicle derivative                                                                                                                                                                                                                                                                                                                                                         |
| Draft untouched and correct state       | `sha256sum website/news/003-vehicle-design.mdx`; grep of its frontmatter keys                | `d2750840…`, 5,057 B; `publication: draft`; **no `media`, `mediaAlt`, `mediaLabel` or `mediaCaption`** — the manifest adds none                                                                                                                                                                                                                                                                                                                                                                         |
| Test suite                              | `cd website && npm test` (14:02:52)                                                          | 81 of 81 pass in 7 files                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ComfyUI state, start and end            | `~/.hermes/profiles/mars-ai-simulator-visuals/bin/comfyctl status`; `comfyctl stop`          | `running: no`; stop answered `ComfyUI is not running` — never started for this card, nothing left holding VRAM (finding 5)                                                                                                                                                                                                                                                                                                                                                                              |
| Repository hygiene                      | `git status --short`                                                                         | This card's only edit is this manifest (untracked path `.agents/work/assets/003-vehicle-design/`). No candidate, prompt, run record, sidecar, model file or media was added, and nothing was committed                                                                                                                                                                                                                                                                                                  |

**Review outstanding:** the continuity half of the merged gate `t_82680639`, the editorial gate
`t_1e84c815`, the dev card `t_accf6f7a` (media key **and** the guard retirement in finding 1), the
release record `t_dcd80a99`, and the merged editorial role's canon confirmation and release
decision before anything is published. Findings 1–4 are routed to those cards, not settled here.
**Nothing in this manifest is approved, placed, or published.**

## Private provenance and repository hygiene

- **The plate is a reuse.** The durable record is `docs/vehicle/canonical.png` and its SHA-256
  above, plus `docs/vehicle/VEHICLE.md` as the canon the plate illustrates. No
  `tools/visual-generator/` run was made: no `spec.json`, no prompt, no `assets/` or `stories/`
  output, no `*.api.json` / `*.inputs.json` / `*.job.json` / `*.history.json` run record, no
  `comfyui-*.workflow.json` sidecar. Nothing was copied out of `docs/`, because the plate is
  already at its canonical path.
- **No new imagery.** No candidate exists to select, so no stable export needs to be created by
  the site engineer. If the editorial gate ever prefers a different studio reference
  (`front-left.png`, `side-view.png`, `rear-right.png`, `contact-arm.png`), that is a one-line
  change of the import and a new manifest entry — the dossier, not this card, holds the files.
- **Nothing committed.** This manifest is the only file this card touched; the repository stores
  no generated media, model file, or run data from it.

## Handoff

- **Next recommended owner:** the merged editorial role `mars-ai-simulator-editor` on the
  editorial gate `t_1e84c815` — decide whether step 003 retires the vehicle withhold in
  `website/scripts/guards.mjs` (finding 1), and whether the studio plate's five-visible-wheel read
  changes anything in the alt text or the dossier's stage-1 sentence (finding 2). Both are
  release/canon calls, not technical ones.
- **Then:** `mars-ai-simulator-dev` on `t_accf6f7a`, whose media-key work is necessary but not
  sufficient — the guard retirement must be in the same change, or the build fails on three
  separate offences. A comment with the probe output is on that card.
- **Not this card's to do:** no `docs/` file was written, no canon edited, no code changed, no
  `publication` flip, no push, no deploy.
