# Asset manifest: wiki-red-horizon

## Manifest metadata

| Field                      | Value                                                                                                                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                       | `wiki-red-horizon`                                                                                                                                                                                 |
| Card (this pass)           | `t_d04de028` — `mars-ai-simulator-visuals`, run 193, 2026-09-17 20:13–20:17 CEST                                                                                                                   |
| Stage                      | visuals — **reuse only, no new imagery**                                                                                                                                                           |
| Page                       | `website/wiki/red-horizon.mdx` — **flat path** (authoring convention, planner correction 2026-09-17 20:13); section `project`, id `red-horizon`, route `/wiki/project/red-horizon/` once published |
| Page bytes                 | 4,097 B · SHA-256 `c93a509a6672d2e71207ff1c9464e6333ffb487bdfa4c5cfeef0081130dfa995` · `publication: draft`                                                                                        |
| Brief                      | `.agents/work/briefs/wiki-content-plan.md` §4 (media decision per page) and §1 (flat-file convention)                                                                                              |
| Parent handoff             | `t_f9fee6c1` (SEO pass for this page)                                                                                                                                                              |
| Child (gated by this card) | `t_167fac93` — Editorial final gate: wiki-red-horizon                                                                                                                                              |
| Status                     | `complete` — one reuse entry; **no generation, no ComfyUI start, no GPU time, no `tools/visual-generator/` write, no new media key**                                                               |

## Determination

**No new imagery: reuse `programme-identity`.**

The card asks one thing of this role: record the already-approved plate the page's `media:` key
resolves to, rather than produce one. Nothing is generated, derived, cropped, re-encoded or
upscaled. `docs/brand/logo-bg-black.png` is already a stable canonical file in the brand dossier, so
**no export or copy step exists to propose** — the stable filename is the path it already has.

### Reuse check across the dossiers (run first, as the card requires)

| Dossier                                           | What it holds                                          | Usable for this page? | Why                                                                                                                                                                                             |
| ------------------------------------------------- | ------------------------------------------------------ | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/brand/`                                     | the identity mark, the transparent variant, `BRAND.md` | **Yes**               | This page's subject is the programme itself, and the mark is its public identity. `BRAND.md:8-10` names `logo-bg-black.png` as the approved source by hash                                      |
| `docs/vehicles/pathfinder/`                       | surface-vehicle dossier + six renders                  | **No**                | Different subject, and the programme-frame restriction for this page bars vehicle imagery (link to the rover article instead — the page does exactly that at `website/wiki/red-horizon.mdx:50`) |
| `docs/area/`                                      | the three Asteria Field plates                         | **No**                | Released **for article 001 only**, and this page may carry no landing-design material beyond the field's name and centre coordinates                                                            |
| `docs/payload/`                                   | the 002 sensor illustration renders                    | **No**                | Bound to the `payload-sensor-illustration` key and the payload article's release only                                                                                                           |
| untracked launcher dossier under `docs/vehicles/` | launcher dossier + plates                              | **No**                | Untracked and **not approved canon**; its release decision is not this card's to anticipate. Referred to without its designation, per this card's forbidden-term list                           |

## Plate 1 — the only entry

| Field                   | Value                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Plate / stable filename | `docs/brand/logo-bg-black.png` (in place; no copy, no derivative, no `public/` file)                                                                                                                                                                                                                                                                                                                            |
| SHA-256                 | `f9543989560da54fc56a8973002833b2b8dbe3d1c085fc1293af3faca457b749`                                                                                                                                                                                                                                                                                                                                              |
| Bytes / pixels / format | 848,040 B · 1254 × 1254 · PNG, 8-bit RGB, non-interlaced · mtime 2026-09-15 18:25 +0200                                                                                                                                                                                                                                                                                                                         |
| Aspect ratio            | 1:1 (square)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Subject                 | The Red Horizon programme identity mark — a stylised Mars at sunrise: a rust-red planetary disc with a low segmented relief line and a broad shield-like rise left of centre, a small Sun emerging behind the disc's upper-left rim, Earth and the Moon as a small paired cue at upper right, on the void-black field `#010000`. The mark is the public symbol of the fictional programme                       |
| Story step              | `wiki-content-pipeline` — a reuse of an asset approved 2026-09-15 as the programme identity; **no timeline step is involved and no step-specific release is being anticipated**                                                                                                                                                                                                                                 |
| Placement               | The lead figure block of the wiki leaf route: `website/src/pages/wiki/[section]/[slug].astro:64-75` takes the `media && leadPlate && !plateSet` branch (the key's `plateCount: 1` makes `isPlateSet` false, `plates.ts:67-69`) and renders `<figure class="wiki-media">` with `<Image width={1024} format="webp" loading="eager">`. Resolved from the `media:` key, never from a URL                            |
| Label                   | **none** — no `mediaLabel` (the key's `requiresLabel` is `false`, and this branch renders no label chip at all: the registry's internal plate label `Red Horizon programme identity` at `features/news/media.ts:25` is _not_ printed here)                                                                                                                                                                      |
| Caption                 | **none** — no `mediaCaption` (the key's `captionCount: 0`; the branch prints a `figcaption` only from `mediaLabel`, so the figure renders with no caption text)                                                                                                                                                                                                                                                 |
| Alt text                | `A rust-red Mars disc on black, crossed by low highlighted hills. A small Sun rises behind its upper-left edge, while blue Earth and a smaller Moon point appear at upper right.` — the brand-approved string, **verbatim** from `docs/brand/BRAND.md:19-21`; 175 chars; 0 non-ASCII bytes                                                                                                                      |
| Alt text path           | `plateAltText({ value, plates, index: 0 })` returns the single frontmatter entry unchanged when `entries.length === plates.length` (`features/news/plates.ts:36-37`), so the reader gets the approved wording, not a re-composed one                                                                                                                                                                            |
| Tool / model            | **none** — reuse. ComfyUI state at the end of this card: `running: no` (see §Validation)                                                                                                                                                                                                                                                                                                                        |
| Rights                  | Fictional Red Horizon project asset, not third-party imagery. `docs/brand/BRAND.md` §Status and approved source records the approval (human story owner, 2026-09-15) and §Use and accessibility governs placement; §Publication boundary carries the standing note that a separate human release decision is required for "any new public-site or social use beyond the current Preparing site"                 |
| Approval status         | **Reuse of an already-approved canonical asset.** This manifest approves nothing, releases nothing, and does not speak for the editorial role: the page's own release decision belongs to `t_167fac93`                                                                                                                                                                                                          |
| Placement status        | **Frontmatter already carries the reuse** (`media: programme-identity` + `mediaAlt`, lines 8-9 of the page). This card changes no `website/` file. The page is `publication: draft`, so no route renders yet                                                                                                                                                                                                    |
| Private provenance      | `docs/brand/BRAND.md` §Private provenance: the selected candidate's generation record is scratch material in the local visual-generator workspace, which keeps no permanent assets; **the approved mark plus its SHA-256 above is the durable record**. Approval and refinement history were recorded in the retired issue tracker as `mars-ai-simulator-2tm`, archived read-only at `docs/beads-archive.jsonl` |
| Generation required     | no                                                                                                                                                                                                                                                                                                                                                                                                              |

### The media key contract this plate renders through

| Field                         | Value                                                                                                                                     |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Key                           | `programme-identity` (`website/src/lib/media.ts:17-22`)                                                                                   |
| Requirement tuple             | `{ plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }` (`website/src/lib/media.ts:39`)                                   |
| Resolver                      | `website/src/features/news/media.ts:24-26` → one plate, `src: identityMark`, label `Red Horizon programme identity`                       |
| Asset import                  | `website/src/lib/assets.ts:6` → `docs/brand/logo-bg-black.png` (the hash-approved black-field source, not the RGBA `logo.png` derivative) |
| Frontmatter the page declares | `media: programme-identity` · `mediaAlt: <one entry>` · no `mediaCaption` · no `mediaLabel`                                               |
| Tests                         | `website/test/news-media.test.mjs` asserts every key resolves to exactly `plateCount` plates                                              |

### Placement, framing and accessibility notes

- **No crop anywhere.** The source is square; the branch renders `width={1024}` with the panel rule
  `.wiki-media img { width: 100%; max-width: 24rem; height: auto }` (`[slug].astro:151-155`), so the
  figure renders at natural 1:1 aspect, up to 24rem wide, inside a `max-width: 44rem` figure block.
  No safe-area or crop caveat applies, and no letterbox appears.
- **The mark's own field is the page's field.** `#010000` is exactly the site's `--rh-void-black`, used
  as the `html` and `body` background (`website/src/styles/base.css:11-20`). The black-field square
  therefore sits seamlessly on the page field: no visible plate edge, no panel, no letterbox band —
  which is also why the **black-field** source is the correct variant here and the transparent
  variant is not used (it is homepage-hero only, `assets.ts:32-49`; human decision 2026-09-17,
  card `t_183d9f11`).
- **Clear space.** `BRAND.md` §Use and accessibility requires at least the Earth point's diameter of
  clear space on every side; the approved source carries it inside its own field, and the figure adds
  `margin: 3rem 0 0` above the block.
- **Alt text against the pixels.** The alt string is the brand-approved wording, and a vision read of
  the live PNG on 2026-09-17 confirms every cue it names, at the position it names: rust-red disc on a
  uniform black field ✓, low highlighted hills crossing the disc ✓, small Sun behind the upper-left
  edge ✓, blue Earth point with a smaller, dimmer Moon point at upper right ✓, no text/lettering/
  wordmark/badge anywhere ✓, no star field, spacecraft or extra celestial bodies ✓, mark centred with
  generous clear space ✓.

## Findings and drift (recorded, not decided here)

1. **Card body path is stale; the flat path is the live one.** The card body names
   `website/wiki/project/red-horizon.mdx`; the page is at `website/wiki/red-horizon.mdx` (the
   `section:` frontmatter carries the URL segment). The planner's correction of 2026-09-17 20:13 moved
   it; the page hash is unchanged. **Related drift:** the child card `t_167fac93` (editorial gate) still
   names the nested path in its body — the editor should verify against the flat path.
2. **The card body's byte count for the mark is wrong.** The body gives 269,419 B; the live file is
   848,040 B. The SHA-256 (`f9543989…`), the pixel size (1254 × 1254) and the format (8-bit RGB PNG)
   all match `BRAND.md:8-10`, and `BRAND.md` records no byte count for the black-field source, so the
   _file_ is unmistakably the approved one — only the body's size figure is stale. Recorded so the next
   reader does not treat the mismatch as a substituted asset.
3. **The card body's `BRAND.md` line reference is off by one.** The alt wording is at
   `BRAND.md:19-21`, not `20-21` (the sentence opens on line 19 after `**Alt text:** _`). The string
   itself matches byte-for-byte.
4. **No precedent article carries this alt wording any more.** `website/news/` declares
   `asteria-plates` (001), `payload-sensor-illustration` (002) and `vehicle-references` (003); no page
   currently renders `programme-identity`. The "byte-identical to the published card's alt" anchor this
   role's skill warns about is therefore **void** — the wording stands on `BRAND.md:19-21` plus the
   pixel read recorded above, and this manifest says so rather than leaning on a precedent that no
   longer exists.
5. **A file already existed at this manifest's path when the run started.**
   `.agents/work/assets/wiki-red-horizon/assets.md` was present with mtime `2026-09-17 20:14:42.744`,
   4,322 B, SHA-256 `e5a4865bd01c273a46c7c7305cbc05645090756aab305a0a202eba6445bf893f`, naming this card
   id. It already recorded the reuse decision and the forbidden-fact list, but not the plate's
   measurements, the placement mechanics, the executed contract check, the crop/field notes or the
   drift rows. **This run verified every claim in it against the live tree, kept its structure,
   corrected the three points above and added the missing rows**; the original is preserved
   byte-for-byte at `/tmp/t_d04de028-audit/pre-existing-20-14-42-assets.md` (scratch, outside the
   repository) so the change is auditable.
6. **Concurrency hazard: three visuals cards ran in one checkout at once.** `t_0c83565f` (run 191),
   `t_4a919a79` (run 192) and this card (run 193) were all `running` against the same shared
   `dir:` workspace, and all three wiki manifest directories carry file mtimes inside the same 3 ms
   window (`20:14:42.744–.750`) — while no session in this profile's agent log records writing this
   card's file. **This card therefore also reports its own manifest as potentially concurrent-written**;
   the planner may want to serialise the visuals stage the way it serialised the writer and dev
   stages. No sibling manifest was touched by this card.
7. **Publication boundary is not this card's call.** The mark is already rendered on the live Preparing
   site by the site chrome on every route (`SiteHeader.astro:13`, `SplashScreen.astro:10`, both
   importing `identityMark`), so the wiki leaf adds a figure on a surface that already shows the
   programme identity. `BRAND.md` §Publication boundary's sentence about "any new public-site or
   social use" and the page's release decision are left to the editorial gate (`t_167fac93`) and,
   beyond it, the human story owner. Nothing here is asserted as released.

## Barred media (must not appear on this page)

- `docs/brand/logo-transparent.png` — homepage-hero only per the 2026-09-17 human decision
  (`t_183d9f11`); this page keeps the black-field source.
- `docs/brand/logo.png` — the RGBA derivative `website/lib/assets.ts` deliberately does not import;
  the build's own comment records that it failed review. **Not referenced.**
- The surface-vehicle dossier (including its withheld scene image), the Asteria Field plates, and the
  payload illustration — none belongs to the programme page.
- Any real institution, agency, company or programme name; any launch-vehicle fact or designation; any
  launch or landing date; any later-step fact; any landing-design material; any reference into the
  private mission timeline.

## Validation performed

All rows run 2026-09-17 between 20:13 and 20:17 CEST against the live shared tree. Probes are scratch
files outside the repository (`/tmp/t_d04de028-audit/`).

| Check                                             | Command / source                                                                                                                                                                          | Result                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No generation; server state reported, not started | `~/.hermes/bin/comfyctl status`                                                                                                                                                           | `running: no   url: http://127.0.0.1:8188  gpu_used: 2078 MiB`, exit 1, at both the start and the end of the card. `comfyctl stop` answers `ComfyUI is not running at http://127.0.0.1:8188` and the closing `status` is `running: no`: this card started no server, ran no job, and left no VRAM held                                                                                          |
| Page identity and hash                            | `sha256sum`, `wc -c`, `ls -la website/wiki/`                                                                                                                                              | `website/wiki/red-horizon.mdx` · 4,097 B · `c93a509a…dfa995` · `publication: draft`; two sibling wiki drafts sit flat beside it                                                                                                                                                                                                                                                                 |
| Flat path, not nested                             | `find website/wiki -type f`                                                                                                                                                               | `website/wiki/red-horizon.mdx`, `asteria-field.mdx`, `rh-01-pathfinder.mdx` — no `project/` directory                                                                                                                                                                                                                                                                                           |
| Key contract **executed**, not read by hand       | `node /tmp/t_d04de028-audit/media-contract-probe.mjs` (transpiles the real `src/lib/media.ts` with esbuild, parses the real frontmatter with `js-yaml`, calls the real `newsMediaIssues`) | `isNewsMediaKey('programme-identity') = true`; tuple `{1,1,0,false}`; **`newsMediaIssues(page) = []` → PASS**. Negative controls return real issues (a `mediaCaption` → "media renders no per-plate caption…"; `media: asteria-plates` → three issues incl. the required label; a missing `mediaAlt` → the alt issue), proving the probe exercises the function rather than printing a constant |
| Alt text verbatim                                 | `bash /tmp/t_d04de028-audit/alt-verbatim-check.sh`                                                                                                                                        | `MATCH` — the page's `mediaAlt` is byte-identical to `docs/brand/BRAND.md:19-21`; 175 chars; 0 non-ASCII bytes                                                                                                                                                                                                                                                                                  |
| Alt text against the pixels                       | `vision_analyze` on `docs/brand/logo-bg-black.png`                                                                                                                                        | Every cue the alt names is present at the named position; no text, no star field, no extra bodies (details in §Placement)                                                                                                                                                                                                                                                                       |
| Placement mechanics                               | `pages/wiki/[section]/[slug].astro:64-75,146-155`, `plates.ts:33-42,67-69`, `features/news/media.ts:24-26`                                                                                | One lead figure (not a plate set); alt passed through unchanged; `figcaption` only from `mediaLabel`, which is absent; `max-width: 24rem`, `height: auto`, `width={1024}`, `format="webp"`, no crop                                                                                                                                                                                             |
| Field continuity                                  | `website/src/styles/base.css:11-20`, `tokens.css:10-11`                                                                                                                                   | `html`/`body` background is `--rh-void-black: #010000` — the mark's own field colour, so the square is seamless on the page                                                                                                                                                                                                                                                                     |
| The transparent variant is not placed             | `assets.ts:32-49`, `BRAND.md:29-64`                                                                                                                                                       | Homepage-hero only (human decision 2026-09-17); this manifest records it as **not placed** here                                                                                                                                                                                                                                                                                                 |
| No page currently uses this key                   | `grep -rn 'media: programme-identity' website/`                                                                                                                                           | Only `website/wiki/red-horizon.mdx:8` (plus the authoring example in `website/README.md:157`); the news placement this key shipped with is gone — see finding 4                                                                                                                                                                                                                                 |
| Guard state                                       | `website/scripts/guards.mjs:44,63-65,86,259-266`                                                                                                                                          | Withheld directory `timeline`, one withheld file under the vehicle dossier, markers `['18° 42','226° 14']`. Nothing gated names the brand dossier, and the emitted derivative's name stem `logo-bg-black` collides with no withheld stem (`contact-arm-scene`)                                                                                                                                  |
| Card body's stated byte count                     | `ls -l docs/brand/logo-bg-black.png`                                                                                                                                                      | 848,040 B, not the 269,419 B the body states — see finding 2                                                                                                                                                                                                                                                                                                                                    |
| Card body's stated path                           | `ls website/wiki/`                                                                                                                                                                        | Flat path is live — see finding 1                                                                                                                                                                                                                                                                                                                                                               |
| No build, deliberately                            | —                                                                                                                                                                                         | No `website/` file is changed by this card, so a build would prove nothing; the dev card runs the build, the guards and the media tests on the real change                                                                                                                                                                                                                                      |
| Repository hygiene                                | `git status --short .agents/work/assets/`                                                                                                                                                 | This manifest is the only file this card writes; it is untracked, not ignored, and **not committed** — no commit, no push, no publication flip                                                                                                                                                                                                                                                  |

**Review outstanding:** the editorial gate `t_167fac93` (canon confirmation, the release decision, and
the flip of `publication: published`), then the dev card's build and guard run, then — for any
placement beyond the current Preparing site — the human story owner under `BRAND.md` §Publication
boundary. **Nothing in this manifest is released by this card.**

## Handoff

- **Next recommended owner:** `mars-ai-simulator-editor` — `t_167fac93` is already created and waits on
  this card. Verify the page against released canon and record the release decision; check the flat
  path (finding 1) and treat the mark's `mediaAlt` as brand-approved wording rather than as an
  article-authored string (finding 4).
- **Not this card's to do:** no `docs/` file written, no canon edited, no `website/` change, no new
  media key, no export/copy, no generation, no build, no commit, no push, no publication.
