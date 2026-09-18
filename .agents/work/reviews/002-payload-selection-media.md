# Review: 002-payload-selection media (editor sign-off on the gathered sensor illustration)

## Review metadata

| Field              | Value                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Slug               | `002-payload-selection` (timeline step `002-payload-selection`)                                                                                                                                                                                                                                                                                                                      |
| Review type        | Editor sign-off on **gathered media** — the gate the human delegated; a media-choice sign-off, not a release, not canon approval, not a publication flip                                                                                                                                                                                                                             |
| Card               | `t_327899d5` (this gate) · parent `t_a9964b8d` (visuals) · child `t_4b49346b` (dev, media-key wiring)                                                                                                                                                                                                                                                                                |
| Reviewer           | `mars-ai-simulator-editor`                                                                                                                                                                                                                                                                                                                                                           |
| Skill              | `editorial-review` (+ `copy-editing` for the alt-text wording)                                                                                                                                                                                                                                                                                                                       |
| Article            | `website/news/002-payload-selection.mdx` — **read only, unmodified** (SHA-256 `6437379171bdcc1a3929821ab14715ccfa15f9805b0f87ff9ef78ad0c7fd1b5b`, `publication: draft`, no `media` key)                                                                                                                                                                                              |
| Inputs (read-only) | `.agents/work/assets/002-payload-selection/assets.md` (`6ee80707…`), the three candidate PNGs + sidecars + `runs/t_a9964b8d-runs.json` in private scratch, `docs/brand/BRAND.md`, `website/src/lib/media.ts`, `website/src/features/news/{media,plates}.ts`, `website/src/features/news/{NewsCard,ArticleView}.astro`, `website/src/styles/tokens.css`, `website/scripts/guards.mjs` |
| Status             | `approved` — the media choice only. Gate 2 (canon and release) is still with the human.                                                                                                                                                                                                                                                                                              |

## Verdict

**Editor sign-off sentence (quotable, for `t_4b49346b` and `t_5a62fb28`):**

> Editor sign-off, 002 news-card media (2026-09-17): candidate **`01-spectral-sampling`**,
> SHA-256 `8839f66a6d5688c0bd39a7331a800da562df59f69a6a5f352395cd315ca0de67`, is approved for the
> `002-payload-selection` news-card media band, to be exported to
> `docs/payload/payload-sensor-illustration.png`, with the approved alt text and label recorded
> below and **no caption**.

Per candidate: **01 approved and named** (the single candidate approved for the band);
**02 rejected**; **03 usable as an alternative only, not approved for export in this pass**
(its proposed alt text is wrong — see §4). The two `REJECTED` slot-03 attempts are confirmed
rejected.

This sign-off is exercised under the human story owner's delegation, not invented: the Gate 1
answer on `t_5a62fb28` (comment by `default`, 2026-09-17 09:12 CEST, verbatim _"1 gather media,
either by generating using visualizer agent or retrieve from web; automatically approve if editor
is ok with it; 3 ; 4 - handle it"_) is read there gate-by-gate as _"The human waives their own
sign-off on the media choice, so the editor's recorded sign-off is the gate"_. Because that
reading is on the record, the choice is mine to make and this gate's answer is the sign-off —
it does not need a new human sentence. The visuals manifest's counter-phrase ("The choice is the
human's") was written before any sign-off existed and is superseded by the recorded relay; the
human can of course direct a different candidate, and any swap invalidates this sign-off and
needs one fresh editor line.

Rights are complete enough **for the media choice**, with one open item for public use (§8).
Nothing here flips `publication`, adds a `media` key, copies an asset, or authorises deployment.

## Review table

| Check                                                                                                                  | Result                                             | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Human delegation read and located                                                                                      | PASS                                               | `t_5a62fb28`, comment by `default` 2026-09-17 09:12 CEST, quoted verbatim above and in `.agents/work/assets/002-payload-selection/assets.md` §"Sensor illustration candidates". The planner's ordering note of 09:15 on the same card names this chain (`t_a9964b8d` → `t_4b49346b` → release).                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 01 — reject rules (no text/symbols/watermark/insignia, no vehicle/hardware, no people, no border/matte, no star field) | PASS                                               | Own vision pass over the PNG, whole image and a zoom of the top-right quadrant: no text, letters, numbers, symbols, labels, watermark or insignia; no vehicle, wheel, mast, arm, camera body, lens, probe or instrument hardware; no person; no border, frame, matte, inset panel, grid, chart or map; the bright specks sit **inside the light beams** (lit dust), not in a star field; scene is full-bleed with no black margin.                                                                                                                                                                                                                                                                                                                      |
| 01 — brief compliance (represents a measurement being taken; palette; negative space)                                  | PASS                                               | Shows light striking a rock face and glowing points where it lands — the mineral/rock-sensing job the brief commissions. Palette stays inside the brand family (rust/ember warm mass, one cool accent, dark field). Measured: 50.3 % of pixels are at or below 12/255 in all channels (void-black field).                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 01 — legibility in the news-card band                                                                                  | PASS                                               | Square 1024 × 1024 (`file`: 8-bit/color RGB, non-interlaced), contained (`object-fit: contain`) and never cropped. Measured bottom-right (the label corner) mean luminance **19.9** against the light band plate `#eeebe5` (relative luminance 212.3) — the black-field square reads as a deliberate plate on light ground, the same reading the identity mark gives.                                                                                                                                                                                                                                                                                                                                                                                   |
| 02 — reject rules                                                                                                      | PASS                                               | Vision pass: no text/hardware/people/border/matte; square; full-bleed; the sparse pale specks are faint dust-like motes, not a star field; 78.4 % void-black field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 02 — brief compliance (the "same ground seen twice" idea)                                                              | **FAIL (deviation)**                               | The two offset light cones the prompt commissioned read as **one broad lit dome with a central vertical beam**; the intended "looking at the same ground twice" is not legible, and the picture says least of the three about the panorama/navigation job. The visuals card recorded this deviation rather than hiding it.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 02 — alt-text accuracy would need correction if ever used                                                              | **FAIL (recorded)**                                | At full size the dome reads as a large glowing **orb (sun or planet) rising behind a ridge**, not as reflected light "brightest where a central beam meets the crest"; the manifest's alt would understate it. It is also the composition closest to the brand mark's own sunrise motif, which the brief's "do not embed the mark inside a scene" rule was written to keep apart.                                                                                                                                                                                                                                                                                                                                                                       |
| 03 — reject rules                                                                                                      | PASS                                               | Vision pass: full-bleed to all four edges, no border/matte/inset, no horizon, no sky, no stars, no text, no hardware, no people.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 03 — proposed alt text describes what the picture shows                                                                | **FAIL**                                           | The manifest's alt promises "a thin level line of pale light skimming across it". A zoomed read of the middle band finds **no level pale line**: the dominant structure is a **jagged diagonal fissure/chasm** splitting the frame, which the alt does not mention. The render also did not deliver the level grazing beam the prompt asked for. This is why 03 is **not** approved for export in this pass: it would go public with an alt text that misdescribes it.                                                                                                                                                                                                                                                                                  |
| 03 — legibility in the band (if ever used)                                                                             | RECORDED (not blocking)                            | Measured: **0.000** void-black pixels — no black field anywhere — and the **highest** bottom-right mean luminance of the three (**94.8**, label zone 72.9). A mid-tone, low-contrast square on a light plate reads muddier at card size than 01's black field, and it does not carry the brief's negative-space intent.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Approved alt text — describes the picture                                                                              | PASS (one correction)                              | Adopted from the manifest with one accuracy fix: **"several thin beams" → "several coloured beams"**. At full size the beams are volumetric shafts fanning through dusty air, not thin lines; the prompt asked for thin and the render did not give it. Everything else is the manifest's wording, verified against the pixels.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Approved alt text — illustrative, no hardware claim, nothing gated                                                     | PASS                                               | Opens "Illustrative artwork, not mission photography"; closes "A stand-in image for a payload built to sense what a rock is made of", which claims no hardware and no approved design; carries none of the four text markers in `website/scripts/guards.mjs` (`gatedTextMarkers`), no withheld dossier name, no coordinate, no date and no step-003+ material.                                                                                                                                                                                                                                                                                                                                                                                          |
| Approved alt text — reaches the reader on the rendered surface                                                         | PASS                                               | For a one-plate key `plateAltText()` passes the single `mediaAlt` entry through verbatim (`src/features/news/plates.ts:33-42`), and `NewsCard.astro:45` / `ArticleView.astro:34` render it. This is the whole of a screen reader's image experience for the card.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Approved label                                                                                                         | PASS (with a note)                                 | `Red Horizon // payload sensor illustration`, from the planner's note on `t_5a62fb28`. It is load-bearing, not decorative: for a one-plate key `cardLabel` is `mediaLabel` (`NewsCard.astro:25`), and an unset label renders an empty chip. Note: it is 43 characters against the identity key's 32, so the chip is wider than any precedent — measure it at the deployed band width in the dev card's preview.                                                                                                                                                                                                                                                                                                                                         |
| Label-overlay contrast                                                                                                 | PASS (direction of the manifest's claim corrected) | Computed, not estimated: the chip is `rgba(1,0,0,0.78)` with `--rh-text-primary` text (`NewsCard.astro:106-117`, `tokens.css:24`). Composited over each candidate's label corner, the light text holds **19.3:1** (01), 19.8:1 (02) and 17.3:1 (03) — far above WCAG AA. The manifest says 03's bright bottom-right is the overlay's "weakest"; the measurement says the reverse: 03 shows the chip's **boundary** best, and 01 nearly loses it (chip 0.4 against rock 19.9), which is cosmetic only, because the chip's right portion sits over the light plate (8.7 against 212.3). No candidate fails on contrast.                                                                                                                                   |
| Aspect, crop and letterboxing                                                                                          | PASS                                               | All three are 1024 × 1024 1:1 as the brief requires; `object-fit: contain` in a band of `min-height: 22rem` (15rem at ≤760 px) contains the square and never crops it; the article lead figure is `max-width: 24rem`, `height: auto` (`ArticleView.astro:96-100`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Provenance record completeness                                                                                         | PASS                                               | Per-candidate sidecar beside each PNG and `runs/t_a9964b8d-runs.json` carry prompt, ComfyUI prompt id, seed, model set, byte count and SHA-256. I re-verified the sidecars independently: `01` sidecar seed `35853885` / steps `20` / CFG `5.0` match the run record and the manifest; `03` sidecar carries `409550082`. Every SHA-256 I re-hashed matches the manifest (see §9).                                                                                                                                                                                                                                                                                                                                                                       |
| Rights completeness                                                                                                    | **OPEN for public use**                            | Per-candidate rights rows exist and are accurate as far as they go: generated on this machine, no third-party or stock image, no scraped asset, no real-agency imagery or insignia. What is still missing is stated by the manifest itself: the model files' own licences (`flux-2-klein-base-4b`, the `qwen_3_4b` text encoder, `flux2-vae`; all present under the local ComfyUI model tree with no licence file shipped beside them) have not been read, and `tools/visual-generator/LICENSE` explicitly grants no rights to third-party models or to generated content. Non-blocking **for this sign-off**, because the asset cannot reach the public surface at all while the key does not exist and `publication: draft`; blocking for public use. |
| Confidentiality of the image, filename, alt text and label                                                             | PASS                                               | Filename `payload-sensor-illustration.png` and label carry nothing gated. No candidate depicts a vehicle, launcher, landing area, date, coordinate or step-003+ fact; no real agency is named or implied. Board-wide, the only public surface that could carry the slug (the built `website/dist/`) holds **0** references to it (checked at verdict time).                                                                                                                                                                                                                                                                                                                                                                                             |
| Fail-closed state holds in fact                                                                                        | PASS                                               | Article hash still `64373791…` (`publication: draft`, no `media` key); `find website/dist -name '*.html'` → `/index.html`, `/about/index.html`, `/404.html`, `/news/index.html`, `/news/001-project-announcement/index.html` — **no 002 route**; no reference to `payload-sensor-illustration` or `docs/payload` anywhere in `website/src` or `website/dist`. The approved image therefore cannot be public through any path today.                                                                                                                                                                                                                                                                                                                     |
| Repository hygiene                                                                                                     | PASS                                               | Nothing copied out of scratch (my gate wrote exactly one file: this record). Scratch stays git-ignored (`tools/visual-generator/.gitignore:17: stories/`, confirmed with `git check-ignore -v`). No `docs/` file written, `website/` untouched, nothing committed from `tools/`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Manifest prose accuracy (evidence, not the decision)                                                                   | 3 corrections recorded                             | See §5. The decision in §3 does not rest on any of them, but each is a factual claim another reader would carry forward.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## 1. Method and evidence

Read-only gate. No build, no `dist/` mutation, no asset copy, no `website/` edit, no commit.

1. **Delegation.** Read the whole comment thread of `t_5a62fb28` (six comments) and the planner's
   ordering note, to fix what the human's answer releases and what it does not.
2. **Manifest.** Read `.agents/work/assets/002-payload-selection/assets.md` in full, including the
   brief the candidates were commissioned against (§"Proposed new imagery — visual brief") and the
   per-candidate table.
3. **Pixels.** Read each of the five renders with `vision_analyze` — three whole-image passes plus a
   zoom on 01's top-right quadrant and a zoom on 03's middle band — judging the brief's four
   measurement jobs, the reject rules, the 1:1 requirement and the news-band legibility.
4. **Measurements.** Because my own first impression of 03's label corner disagreed with the
   manifest, I measured instead of arguing: `file` for format, `sha256sum` for identity, and a
   stdlib PNG decoder (written for this gate, kept outside the repository at `/tmp/rh_imgprobe.py`)
   for the void-black fraction, per-quadrant mean luminance, and label-corner luminance; then
   `tokens.css` alpha compositing and WCAG contrast in `/tmp/rh_labelcontrast.py`. The measured
   value governs over the impression in this record: 03's label corner is the brightest of the
   three, not the darkest.
5. **Contract.** Read `src/lib/media.ts`, `src/features/news/media.ts`, `plates.ts`,
   `NewsCard.astro`, `ArticleView.astro`, `content.config.ts`, `lib/assets.ts` and
   `scripts/guards.mjs` to check the placement, alt, label, caption and provenance claims against
   the code that will actually render them.
6. **State.** Re-hashed the candidates and the article, re-listed `website/dist/`, and re-ran
   `git status --short` immediately before writing this verdict (shared checkout — see §9).

## 2. The human's delegation, and why this gate could decide

The Gate 1 answer waives the human's own sign-off on the media choice and makes the editor's
recorded sign-off the gate. Read gate-by-gate on the card it is:

- **Gate 1 — answered, re-scoped.** The card image is _gathered media_: generated here with the
  local visualiser, or retrieved from the web. The human waives their own sign-off; the editor's
  sign-off is the gate. Project policy that does **not** move: provenance and rights recorded per
  candidate before use; a generated illustration labelled illustrative; nothing gated in the
  image, filename, alt text or caption; a new media key is still required before the image can be
  placed at all.
- **Gate 3 — folded**, since Gate 1 was answered as "gather media" and the recorded brief is the
  sensor-focused illustration.
- **Gate 2 — not given.** `publication` must not flip; that is not this card and not this gate.

So the missing link for `t_4b49346b` was a recorded verdict, not another human sentence. That is
what this record supplies.

## 3. Approved candidate — the single asset for the band

| Field                        | Value                                                                                                                                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Candidate id                 | `01-spectral-sampling`                                                                                                                                                                                                                                             |
| Represents                   | Mineral and rock sensing — draft §"Reading what rocks are made of"; airborne dust                                                                                                                                                                                  |
| Scratch path (git-ignored)   | `tools/visual-generator/stories/002-payload-selection/candidates/01-spectral-sampling.png`                                                                                                                                                                         |
| SHA-256 (of the file I read) | `8839f66a6d5688c0bd39a7331a800da562df59f69a6a5f352395cd315ca0de67`                                                                                                                                                                                                 |
| Bytes / format               | 1,402,406 B · PNG, 1024 × 1024, 8-bit/color RGB, non-interlaced                                                                                                                                                                                                    |
| Approved label               | `Red Horizon // payload sensor illustration`                                                                                                                                                                                                                       |
| Caption                      | **none** — the planned key has `captionCount: 0`, and a `mediaCaption` would fail the content schema                                                                                                                                                               |
| Provenance                   | Generated on this machine with the local ComfyUI Flux.2 Klein set (ComfyUI prompt `ece51e04-2963-40e4-bd2a-20039be6ac16`, seed `35853885`, 20 steps, CFG 5.0, euler); no third-party, stock or scraped imagery; fictional and illustrative, **not** approved canon |
| Rights open item             | the model licences (§8)                                                                                                                                                                                                                                            |

**Approved alt text (adopt verbatim):**

> Illustrative artwork, not mission photography: several coloured beams of light slant down through
> dusty air onto a rough dark rock, and a couple of bright points glow on the stone where the light
> lands. A stand-in image for a payload built to sense what a rock is made of.

Change from the manifest: `several thin beams of different-coloured light` →
`several coloured beams of light`. Rationale: the beams render as volumetric shafts fanning through
dusty air, so _thin_ would mislead a reader who cannot see the picture; the rest of the sentence and
the whole second sentence are the manifest's wording and describe the pixels accurately.

## 4. Verdicts in full

| Candidate                                | Verdict                                                                  | Reason (short form; full evidence in the review table)                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `01-spectral-sampling`                   | **approved — the named candidate**                                       | Passes every reject rule; shows a _measurement being taken_, the article's headline sensing job; legible at card size; black field reads as a deliberate plate on light ground.                                                                                                                                                                                                                             |
| `02-two-views-one-ground`                | **rejected**                                                             | No rule violation, but the commissioned "same ground seen twice" merged into one lit dome, so the idea it was commissioned to carry is not legible; at full size the dome reads as a glowing orb behind a ridge, closest of the three to the brand mark's own sunrise motif; it says least about the panorama/navigation job and its alt would need rewriting.                                              |
| `03-dust-and-contact-closeup`            | **usable as an alternative only — not approved for export in this pass** | All reject rules pass and it covers two of the four scopes literally, but its proposed alt text misdescribes it (no level pale line; a diagonal fissure the alt omits), it has **no black field at all** (measured 0.000 void-black pixels), and it is the muddiest of the three on a light plate. It stays the strongest alternative if 01 ever falls away — with a rewritten alt and a fresh editor line. |
| `03-attempt1-REJECTED-black-matte`       | **rejected (confirmed)**                                                 | Portrait inset with black margins inside the square — a matte/border effect against the brief's edge-to-edge square.                                                                                                                                                                                                                                                                                        |
| `03-attempt2-REJECTED-side-mattes-stars` | **rejected (confirmed)**                                                 | Black side mattes and a star field despite the prompt forbidding one.                                                                                                                                                                                                                                                                                                                                       |

Only `01-spectral-sampling` may be exported. A later switch to 03 needs one new editor sentence
(this record does not pre-authorise it) plus the corrected alt.

> **Supersession pointer, inserted 2026-09-17 20:10 CEST (card `t_00b65567`, appended, not
> rewritten):** the rule in the two lines above is superseded — the switch it anticipates was made
> by the operator's instruction of 2026-09-17, and the editor sentence it requires is recorded in
> **§11 Revision 2** below. The plate for the 002 band is now `03-dust-and-contact-closeup`
> (`47d39a0b…`), not `01-spectral-sampling`; the rejection rows above (lines 147–149) stand
> unchanged, and the row 147 verdict "usable as an alternative only" is superseded by §11.1.

## 5. Corrections to the manifest's evidence claims (not to its decision)

Recorded because a downstream reader would otherwise carry them forward as facts:

1. **01's calm field is the right side, not "the upper half".** The beams enter from the upper left,
   so the calm black field is the upper-right and right (top-right quadrant mean luminance **1.6**,
   a zoomed read finds it 95–100 % featureless black), while the top-left quadrant is bright
   (77.7). The label chip sits bottom-right (19.9) and reads cleanly.
2. **The overlay warning points the wrong way.** The manifest lists 03's brightly lit bottom-right
   as the overlay's weakest corner; the measurement shows 03 renders the chip's boundary _best_ and
   01 _worst_ (chip 0.4 against rock 19.9). The text contrast is high in all three cases
   (17.3–19.8:1), so this is cosmetic, not an accessibility failure, and no candidate is rejected
   for it.
3. **03's alt does not describe 03.** See §4; this is the substantive finding of this pass.

Two smaller notes: the manifest's prose says 02's specks drift "over the terrain" while its own alt
places them in "the surrounding dark" — the pixels support the alt (they sit in the dark around the
glow); and the 03 prompt's requested level grazing beam never rendered, which is a second,
independent reason not to treat 03's alt as written.

## 6. Export instruction for the dev card (`t_4b49346b`)

```
mkdir -p docs/payload
cp -f tools/visual-generator/stories/002-payload-selection/candidates/01-spectral-sampling.png \
      docs/payload/payload-sensor-illustration.png
sha256sum docs/payload/payload-sensor-illustration.png
# must equal 8839f66a6d5688c0bd39a7331a800da562df59f69a6a5f352395cd315ca0de67
```

`docs/payload/` is a new dossier, mirroring `docs/brand/` and `docs/area/` and the withheld dossier
whose name `website/scripts/guards.mjs` lists. The name `payload` is **not** one of the withheld
directory names in `website/scripts/guards.mjs` (`gatedDirectoryNames`), and
`payload-sensor-illustration.png` carries nothing gated. Do **not** copy the file into `website/public/`: `src/lib/assets.ts` imports
canonical media from `docs/` and Astro emits the hashed webp.

Implementation notes for the dev card, from the code the image will render through:

- **Key contract.** Register `payload-sensor-illustration` in `src/lib/media.ts` with
  `{ plateCount: 1, altCount: 1, captionCount: 0 }`. `requiresLabel` is the planner's call; note
  that for a one-plate key the card chip is drawn from `mediaLabel` (`NewsCard.astro:25`) and an
  unset label renders an **empty chip**, so `requiresLabel: true` would fail the build on the one
  mistake that is otherwise invisible.
- **Resolver.** Add the plate in `src/features/news/media.ts` with the approved label, and the
  import in `src/lib/assets.ts`. `website/test/news-media.test.mjs` asserts that every key resolves
  to exactly `plateCount` plates.
- **Provenance cannot come from the registry here.** `set.provenance` is printed only by
  `plateCaptionText()`, which runs for plate sets (two or more plates). For a one-plate key the
  surface renders the lead figure plus `mediaLabel` and nothing else, so the "illustrative, not
  mission photography" statement reaches the reader **through the approved alt text** and is not
  duplicated by the registry. Do not add a `mediaCaption` to carry it: the schema will reject it.
- **No `website/` edit is completed by this card's verdict alone**, and the frontmatter
  `media:` / `mediaAlt:` change belongs to the release card `t_5a62fb28`, which is still gated on
  human Gate 2.
- **Docs map.** Creating `docs/payload/` changes the documentation tree, and `docs/README.md`
  says its own table is updated by `project-documentation` "whenever the tree changes" — that row
  is owed once the dossier exists (see §8).

## 7. Confidentiality check on this record

- Gated material is named **by location, not by value**: the withheld directory names are
  referenced as the list in `website/scripts/guards.mjs` (`gatedDirectoryNames`), the four withheld
  text markers as `gatedTextMarkers` in the same file, and the plate key released for article 001
  only as the key in `src/lib/media.ts`. No withheld marker, coordinate, dossier name or
  landing-area name is written here as a value, and none appears in the approved filename, label or
  alt text. The two withheld directory names occur only as the ordinary English word inside the
  brief's own reject-rule phrase "no vehicle/hardware" and inside the project term "timeline step";
  neither is ever written as a `docs/<dossier>` reference or as a path.
- The value scan over this record — the four markers, the coordinate forms, the landing-area name
  and the `docs/<withheld>` path form — returns 0 hits; so does the scan of `website/dist/`.
- The only human quote reproduced here is the Gate 1 delegation, which is already on the card and
  contains nothing gated.
- No unreleased timeline content, no step-003+ material, and no private-path disclosure beyond the
  git-ignored scratch paths the visuals card already recorded.

## 8. What remains outstanding

1. **Human Gate 2 on `t_5a62fb28`** — canon and release approval, still unrecorded. Until it is,
   `publication: draft`, no `media` key, no route, amber placeholder. Not this gate's to grant.
2. **`t_4b49346b` (dev)** — copy the approved asset to the stable path, add the key, resolver and
   import, and prove the idempotent hash. Next owner.
3. **Model licences (rights, public-use precondition)** — the licences of the local model files
   and their terms on generated output are not recorded anywhere in the repository and no licence
   text ships beside the weights. This must be resolved and cited before the illustration is
   claimed as usable public media; it does not block the media choice, and no agent should settle
   the licensing position by assumption. Recommended owner: the human with
   `mars-ai-simulator-visuals` recording the citations.
4. **`docs/README.md` dossier row** for `docs/payload/`, owned by `project-documentation` under
   that file's own rule.
5. **Label chip width** — 43 characters against 32 for the existing identity label. Verify at the
   deployed band width in the dev card's preview; a shorter string would be an implementation
   detail needing one editor line, not a re-gate.

## 9. Validation performed, and the state at verdict time

All hashes and hashes of neighbours were re-measured at **2026-09-17 10:22:17 CEST**, and every row
below was re-checked at **10:24:20 CEST** — the last measurement taken before this verdict was
written, after the final edit to this file:

| Check                                | Result                                                                                                                                                                                        |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Candidate hashes match the manifest  | `8839f66a…` (01), `8fb37ac5…` (02), `47d39a0b…` (03), `7158d59f…` and `a70d306c…` (the two rejected attempts) — all five re-hashed, all five equal to the manifest and the run record         |
| Article bytes unchanged              | `6437379171bdcc1a3929821ab14715ccfa15f9805b0f87ff9ef78ad0c7fd1b5b`, `publication: draft`, no `media` key                                                                                      |
| Manifest hash                        | `6ee80707ba7f1f35d223a3fe86019d6a6e599cd1dbeb560831281f3d46ef81bf`                                                                                                                            |
| No 002 route in the build            | `find website/dist -name '*.html'` → `/404.html`, `/about/index.html`, `/index.html`, `/news/001-project-announcement/index.html`, `/news/index.html`; no 002 route, no reference to the slug |
| No reference to the new key anywhere | 0 hits for `payload-sensor-illustration` / `docs/payload` in `website/src` and `website/dist`                                                                                                 |
| Scratch stays out of git             | `git check-ignore -v` → `tools/visual-generator/.gitignore:17: stories/`                                                                                                                      |
| Files this gate wrote                | `.agents/work/reviews/002-payload-selection-media.md` only — no `docs/` file, no `website/` edit, no copy out of scratch, nothing committed                                                   |

**Mid-run movement (non-blocking, recorded rather than asserted away).** This is a shared checkout
and other profiles are working in it. Measured with `git status --short` at 10:22 CEST: **four**
modified skill files (`create-article-workflow`, `editorial-review`, `image-generation`,
`mars-story-toolset`), the visuals manifest `.agents/work/assets/002-payload-selection/assets.md`,
and five untracked additions owned by other cards (four `.agents/work/**/progress-log.md` files and
the `.agents/work/releases/` directory). None of them touches this gate's inputs, and the candidate
hashes above were re-measured after that list was taken. The article and the three candidates were
byte-stable across the whole run; this record is the only file this gate added to that list.

## 10. What this verdict is not

- Not a publication, a release, or the `publication` flip — Gate 2 is still with the human.
- Not canon approval and not an approval of payload hardware: the approved alt text explicitly
  frames the image as illustrative and no hardware is depicted or named.
- Not a `media` key, a resolver, or a site change — that is `t_4b49346b`.
- Not authorisation of a public deployment, an external service, or a social use.
- Not a substitute for the rights item in §8 once the image is heading for a public surface.

## Review outstanding / next owner

- **Review outstanding:** human Gate 2 on `t_5a62fb28`; the dev card's wiring and build proof; the
  rights item in §8 before public use.
- **Next owner and action:** `mars-ai-simulator-dev` on `t_4b49346b` — export
  `01-spectral-sampling` to `docs/payload/payload-sensor-illustration.png` (verify
  `8839f66a…`), add the key, resolver and import, and prove the build.
- **Handoff facts for `t_4b49346b` and `t_5a62fb28`:** the sign-off sentence in §Verdict, the
  approved candidate id and hash, the approved alt text, the label, and "no caption".
- **Corrective card:** none — nothing material inside this gate's scope fails.

---

**Final label: `approved`** (editor sign-off on the 002 news-card media choice, card
`t_327899d5`, 2026-09-17 — an editorial sign-off only; human canon and release approval remain
required before any public deployment)

---

## 11. Revision 2 — the operator's 2026-09-17 plate swap (card `t_00b65567`)

Appended 2026-09-17 20:10–20:20 CEST by `mars-ai-simulator-editor`. Revision 1 (§1–§10 and the
label above) is preserved as written: this section supersedes it only where §11.5 says so.
Revision 1 measured 49,588 B / 296 lines / SHA-256
`eb99eb266e2c076109db12ee4e3c00d18f1c7b38b57244c5cfb3fcd12707360b`. No other record cites this
file by hash (checked: the three citations in `.agents/work/releases/` and the two in
`.agents/work/briefs/` name it by path and label), so the append does not break a citation.

What happened: the operator directed a plate swap in this shared checkout on 2026-09-17 ~19:50
CEST — verbatim, _"replace payload/01-spectral-sampling.png with payload-03-dust-scanning.png"_ —
and an uncarded session applied it (the article's `media:` key, `website/src/lib/assets.ts`,
`website/src/features/news/media.ts`, `website/news/002-payload-selection.mdx` `mediaAlt`, and two
tests now point at the swapped file; nothing is committed; `HEAD` = `origin/main` = `5a59f34`).
Revision 1's closing rule allows the switch but reserves the sentence for this role. This section
is that sentence, at the size of the measured facts.

### 11.1 The decision

> **Editor decision, 002 news-card plate (2026-09-17, card `t_00b65567`,
> `mars-ai-simulator-editor`):** the plate the swap instruction names and the checkout has
> imported — `docs/payload/03-dust-scanning.png`, SHA-256
> `a70d306cb50622f859b1ebad3e2f494491feaebd26e3f157650ec91d056e2415` — is **returned for
> revision**: those bytes are the render §4 row 149 entered as `03-attempt2-REJECTED-side-mattes-stars`
> (`rejected (confirmed)`), and my own measurement finds in them the two defects that row names —
> **124 px of solid black at each side edge** (12.1 % of the width per side, 24.2 % of the frame,
> against the brief's edge-to-edge square) and a **starry sky over a horizon** — so it must not be
> published, imported, or referenced anywhere. The plate released for the 002 news-card band
> instead is candidate **`03-dust-and-contact-closeup`**, SHA-256
> `47d39a0bbe4e69992f3aa5c005015b2373aa19b0d4126787536701cf3562aed9`, exported to the stable
> dossier path **`docs/payload/payload-sensor-illustration.png`** at that hash and carrying the
> corrected alt text in §11.4 — the one editor sentence Revision 1 line 151 requires, and the
> corrected alt it names as the other half of the switch.

The decision rests on the pixels, not on the instruction: an instruction from the programme owner
makes a plate _eligible_ for this role's ruling, and it cannot make a render carry a composition
the brief forbids (see §11.2). It is this role's call to make — the human waived their own sign-off
on the media choice on `t_5a62fb28` Gate 1, quoted in §2 above, and §Verdict already records that
"any swap invalidates this sign-off and needs one fresh editor line". This is that line.

### 11.2 Why the placed bytes fail, on the measured ground

| Finding                                          | Measurement (2026-09-17 20:0x CEST)                                                                                                                                                                                                                                                                                                                                                            | Verdict       |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Side mattes: the square is not edge-to-edge      | Two runs of **124 px of solid black at the left and right edges** (column mean luminance 0.6–3.5/255), i.e. **12.1 % of the width per side and 24.2 % of the frame**; void-black fraction of the whole plate **0.2409**. The render's own prompt required "fills the whole square frame edge to edge with one continuous scene, no inset panel, no matte, no border, no frame and no vignette" | **FAIL**      |
| The scene inside the bars is bright and mid-tone | Centre-strip mean luminance **123.2**, top-left quadrant **83.8**, top-right **91.0** — so the bars read as two solid black stripes flanking a lit picture, not as a deliberate black-field plate. On the band's light plate (`#eeebe5`, `tokens.css:22`) the frame reads as a mis-exported, pillarboxed image                                                                                 | **FAIL**      |
| Star field over a horizon                        | Own vision read of the placed file (2026-09-17 20:0x): a hazy, star-filled sky with specks "throughout the upper half … extending down to the horizon line" and a "distinct, roughly level horizon line" over cracked ground. The render's own prompt forbade exactly this ("no star field, no starry sky, no constellations"), and the accepted slot-03 concept asks for "no horizon, no sky" | **FAIL**      |
| Rejected-render identity                         | The placed bytes are `sha256 = a70d306c…`, byte-identical (1,721,053 B) to `tools/visual-generator/stories/002-payload-selection/candidates/03-attempt2-REJECTED-side-mattes-stars.png`; the run record's own `reject_reason` is "black side mattes … and a star field across the upper area despite the prompt. Vision read 2026-09-17 10:11"                                                 | **confirmed** |
| The file name does not identify the plate        | `03-dust-scanning` appears in no manifest, no review row and no scratch candidate — only as this import. Revision 1's §3/§4 candidate set is `01-spectral-sampling`, `02-two-views-one-ground`, `03-dust-and-contact-closeup` (and two rejected attempts). The name cannot be traced to a reviewed artefact                                                                                    | **recorded**  |

A decision that the matte and star-field defects were acceptable would have to be argued on the
band, and it is not arguable on these numbers: a quarter of the frame is chrome-black bars around a
lit scene, and the upper half carries a starry sky. §Review table row 50/56 states the same rule
positively for the two accepted candidates ("scene is full-bleed with no black margin"; "no
horizon, no sky, no stars"), and row 149 rejected this render for the same two reasons.

### 11.3 Alt-text verdict — returned

The `mediaAlt` the uncarded session wrote (working-tree article, line 11) reads: _"Illustrative
artwork, not mission photography: a close view of cracked, dust-covered ground with a thin line of
light running along a fissure across it, under a broad shaft of warm light in which fine dust
grains catch points of light in the air above."_

**Returned**, on two counts:

1. It does not describe the plate it is attached to. The placed bytes are a **wide** view with a
   **sky and a horizon**; the alt calls them "a close view of … ground" and names neither the sky
   nor the horizon, so a reader who cannot see the image is told the top half of the picture does
   not exist.
2. It re-labels the rejected feature as an accepted one: the star-like field becomes "fine dust
   grains catch[ing] points of light in the air above", which is how the framing defect would slip
   past a reader. That is the same class of failure Revision 1 row 57 recorded against the
   manifest's own 03 alt.

What survives and is re-confirmed: the **"Illustrative artwork, not mission photography"**
statement is present and must survive — for a one-plate key `set.provenance` is never emitted
(§6), so the alt text is the only place it reaches a reader — and the string carries none of the
four gated text markers, no date, no coordinate and no hardware claim.

### 11.4 The plate released instead, and the alt text it needs

| Field              | Value                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Candidate id       | `03-dust-and-contact-closeup`                                                                                                                                                                                                                                                                                                          |
| SHA-256 (ruled on) | `47d39a0bbe4e69992f3aa5c005015b2373aa19b0d4126787536701cf3562aed9`                                                                                                                                                                                                                                                                     |
| Private scratch    | `tools/visual-generator/stories/002-payload-selection/candidates/03-dust-and-contact-closeup.png` (1,788,007 B, 1024 × 1024 RGB, git-ignored)                                                                                                                                                                                          |
| Export path        | **`docs/payload/payload-sensor-illustration.png`** — the stable filename the manifest's own §"Proposed stable export" plans for whichever candidate is selected, and the path the key, the dossier file and both media tests carried on `origin/main` before the swap. It keeps a scratch slot number out of the served `/_astro/` URL |
| Label              | Unchanged: `Red Horizon // payload sensor illustration`                                                                                                                                                                                                                                                                                |
| Caption            | None — the key is `{ plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }` (`src/lib/media.ts:49`)                                                                                                                                                                                                                      |

**Approved alt text (adopt verbatim, replacing the string in §11.3):**

> Illustrative artwork, not mission photography: a close-up of a rough, dust-caked rock surface lit
> at a grazing angle, split by a jagged diagonal fissure, with fine dust grains catching points of
> light in the air above it. A stand-in image for a payload built to inspect rock texture and
> airborne dust at close range.

Why this candidate and this wording:

- It is the only slot-03 render that passes every reject rule, and it is the render Revision 1
  recorded as "the strongest alternative if 01 ever falls away — with a rewritten alt and a fresh
  editor line". Both halves are supplied here, so it needs no further pass.
- Own vision read of `47d39a0b…` (2026-09-17 20:0x): full-bleed to all four edges, **0 px**
  near-black column runs at either edge, void-black fraction **0.0005**, no horizon, no sky, no
  star field; a rough, cracked, dust-caked rock surface with a **jagged diagonal fissure** and
  airborne dust specks above it. The alt above describes those measurements and deliberately
  promises **no** level pale line, which is the error Revision 1 row 57 recorded against the
  manifest's 03 alt ("no level pale line; a diagonal fissure the alt omits").
- Legibility, measured rather than assumed: the plate's label corner (mean sRGB 98.4, 34.0, 17.1)
  gives the chip text (`#fff8e8`, `tokens.css:24`, over `rgba(1,0,0,0.78)`) **4.8:1** — above the
  WCAG AA threshold of 4.5:1 for normal text, below AAA — and the plate corner stands **10.0:1**
  against the band's light plate, so the artwork still reads as a plate on light ground. For the
  record: my compositing method returns 4.8–5.6:1 across the three candidates where §Review table
  row 63 records 17.3–19.8:1; the difference is method, not measurement drift, and **no candidate
  fails AA under either**. The margin is thin enough that the dev card should confirm the chip at
  the deployed band width, which §8 item 5 already asks for.
- The candidate covers the two scopes the alt names — airborne dust and close contact inspection —
  so the wording claims nothing the pixels do not show and nothing about hardware.

### 11.5 Supersession ledger

| Item                                                 | Was                                                           | Now                                                                                                                                                                                                                                   |
| ---------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| §4 line 151-152, the export rule                     | "Only `01-spectral-sampling` may be exported …"               | **Superseded** by §11.1: the exported plate is `03-dust-and-contact-closeup` (`47d39a0b…`)                                                                                                                                            |
| §4 row 147, `03-dust-and-contact-closeup` verdict    | "usable as an alternative only — not approved for export"     | **Superseded** in verdict (now the named plate); its measurements (no black field, muddiest of the three on a light plate) stand and are accepted as the plate's known cost                                                           |
| §4 row 149, `03-attempt2-REJECTED-side-mattes-stars` | `rejected (confirmed)`                                        | **Stands, and is reconfirmed on the bytes** — this is the render the swap placed                                                                                                                                                      |
| §3, the approved candidate table for the band        | `01-spectral-sampling` named as the single asset for the band | **Superseded as the band's assignment**; the sign-off on `01` itself (composition, alt, label) is not revoked — `01` becomes an approved, unplaced candidate, byte-identical at `docs/payload/01-spectral-sampling.png` (`8839f66a…`) |
| §11.3 alt verdict                                    | the session's rewritten alt string                            | **Returned**; replaced by the §11.4 string                                                                                                                                                                                            |

Nothing else in Revision 1 changes. In particular: the "no caption" contract, the label, the
provenance note that a one-plate key prints no `set.provenance`, and the §8 items all stand.

### 11.6 What the next owner must change, and the one file that must not be published

Owner: `mars-ai-simulator-dev` on **`t_1476a18c`** (the publication card, held behind this card —
the operator creates it, not this role).

1. Place the released bytes at `docs/payload/payload-sensor-illustration.png`, SHA-256
   `47d39a0b…` (copy from the scratch candidate above, or move the untracked
   `docs/payload/04-dust-and-contact-closeup.png`, which holds the same bytes). Prove the hash of
   the copied file.
2. `website/src/lib/assets.ts`: the import goes back to
   `'../../../docs/payload/payload-sensor-illustration.png'` (the `origin/main` path), and its doc
   comment must record this decision instead of the swap (it currently names the rejected bytes as
   what the site renders).
3. `website/src/features/news/media.ts`: the label stays as it is; its comment must record this
   decision instead of the swap.
4. `website/news/002-payload-selection.mdx`: `mediaAlt` becomes the §11.4 string **verbatim** — no
   other frontmatter field moves (`media:`, `mediaLabel:`, `publication: published`,
   `simulatedDate: 2027-03-19`, `order: 2` all stay). Required end state: the frontmatter delta
   against `origin/main` is exactly that one line, so the published article keeps one
   `simulatedDate` and the date is not touched by a media change.
5. `website/test/media-scope.test.mjs`: `payloadSource` and the
   `expect(payloadSourceName).toBe(…)` assertion go back to `payload-sensor-illustration.png`
   (`origin/main`'s form).
6. `website/test/news-media.test.mjs`: the payload assertion goes back to
   `toContain('payload-sensor-illustration')` (`origin/main`'s form).
7. **Do not publish, import or reference `docs/payload/03-dust-scanning.png`** (`a70d306c…`) — it
   is returned material. Keep it (and the untracked `01`/`02`/`04` dossier copies) out of the
   published set and report them as held decision material; the scratch tree remains the archive.
   If the untracked rejected copy is deleted from `docs/payload/`, say so and name the scratch
   original that still holds it.
8. Validate as the dev card already requires (`npm test`, `npm run build`, `check-dist`, `lint`,
   `typecheck`) and quote the real output.

### 11.7 Continuity, spoiler and confidentiality verdict

- **Chronology and record date: unaffected.** This decision advances no timeline step; the
  article's record date (`simulatedDate: 2027-03-19`, `docs/SCENARIO.md` milestone table, assigned
  on `t_531698d9`) is not in scope and does not move. The live page still prints it under the
  in-fiction label (measured below).
- **Canon: no claim changes.** The plate is illustrative artwork for a fictional programme. The
  released candidate depicts rock surface and airborne dust only — no vehicle, no launcher, no
  landing area, no date, no coordinate, no real agency, no insignia. Both the bytes and the alt
  text carry none of the four gated text markers and no step-003+ fact.
- **Spoiler safety: clear.** The plate's file name (`payload-sensor-illustration.png`) and the
  label carry nothing gated; the returned name (`03-dust-scanning`) is neither gated nor public
  once it is not imported.
- **Confidentiality of this section:** withheld material appears by location, not by value (the
  gated markers as the list in `website/scripts/guards.mjs`, the private timeline as a directory
  named by role). The two short prompt quotes reproduced here are from the git-ignored scratch tree
  and contain no withheld name, coordinate or date.
- **Rights: unchanged and still live work.** Both renders come from the same local model set
  recorded in the manifest, so the swap changes no rights class; §8 item 3 (the model files' own
  licences, unread) stays open as live work for its existing owner, now covering a published
  illustration rather than a future one.

### 11.8 The published surface, measured at verdict time

Measured 2026-09-17 20:0x CEST in-page on the live origin (a local `dist/` is not the live
surface — `origin/main` is what the push-triggered build serves):

| Surface                                                                         | Value                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `https://mars-ai-simulation.janpolacek.workers.dev/news/002-payload-selection/` | HTTP 200, 14,265 B; title `🐴 Choosing what a Mars rover carries.                                                                                                                                                                                                               | Red Horizon``; 0 hits for ``dust-scanning``; 1 hit for ``payload-sensor-illustration` |
| The plate the live route renders                                                | `/_astro/payload-sensor-illustration.BprT2vSN_ZRie9U.webp`, HTTP 200, `image/webp`, 54,982 B, SHA-256 `9860e70059a792c5a20bdd677e134230f754ebbd6c15d02440329e4553025f43` (the `BprT2vSN` fragment is the same source fragment §8 recorded for the 01 plate at the earlier gate) |
| The live alt text                                                               | The Revision 1 approved 01 alt, verbatim ("several coloured beams of light … a payload built to sense what a rock is made of")                                                                                                                                                  |
| The live record-date line                                                       | `Simulated record date · 19 March 2027` — the in-fiction label, no machine-readable date                                                                                                                                                                                        |

Consequence: the live article is **not** in a broken state. It renders the approved `01` plate
under the approved alt, so returning the swap withholds nothing that is currently public; the
returned bytes simply must not reach the deploy.

### 11.9 Release decision

- **Released:** the corrected 002 plate change — `docs/payload/payload-sensor-illustration.png` at
  SHA-256 `47d39a0b…`, the `assets.ts` import above, the §11.4 `mediaAlt` string, label unchanged —
  may be published to the public route `/news/002-payload-selection/`, after the sibling
  `t_206bee14` decision releases the rest of the change set and the dev card's validation is green.
  The dev card's push is the deploy (`main` is wired to the automatic build); this sentence is the
  release decision that must exist before it.
- **Withheld:** `docs/payload/03-dust-scanning.png`, SHA-256 `a70d306c…`, must not be published,
  imported, or referenced by any surface; while it stays imported the change set is not
  releasable.
- **Condition:** if the dev card cannot place `47d39a0b…` at the required hash, hold the card and
  report it — the article must not be published with the swapped file as a fallback.

### 11.10 Outstanding items and owners

1. **The dev card (`t_1476a18c`) applies §11.6** — next owner, `mars-ai-simulator-dev`. Its body
   names the editor decision card as `t_f21c4b93`; **no such card exists on the board** (checked
   2026-09-17 20:0x) and the card's own parent edge points at `t_00b65567`, so the decision card is
   this one. The wording fix belongs to the card's owner (the operator) — this role does not edit
   another card.
2. **If the story owner meant the returned composition itself** — a wide lit ground under a sky
   with a level line of light — no reviewed candidate carries it, and as rendered it fails two
   reject rules, so it would need a **fresh, compliant render** under a corrected prompt. That is a
   direction from the story owner plus a visuals card, not a release decision, and it is the only
   part of this card's question this role deliberately does not answer. The plate released today
   is `47d39a0b…`; an operator who prefers the fresh-render path holds `t_1476a18c` before it
   publishes.
3. **Model licences (§8 item 3)** — still open, still live work, same owner recommendation.
4. **Label chip at the deployed band width (§8 item 5)** — confirm in the dev card's preview; the
   measured contrast passes AA (§11.4) but with little headroom.
5. **`docs/README.md` dossier row for `docs/payload/` (§8 item 4)** — still owed;
   `project-documentation` under that file's own rule. `docs/README.md` currently names no
   `payload` dossier.

### 11.11 State at verdict time

| Check                     | Value                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Time                      | 2026-09-17 20:02–20:20 CEST                                                                                                                                                     |
| `HEAD` / `origin/main`    | both `5a59f340c56e1ed2a8cb0b3167589816c3af5392`; nothing committed or pushed by this card                                                                                       |
| Placed plate (returned)   | `docs/payload/03-dust-scanning.png` `a70d306c…`, 1,721,053 B                                                                                                                    |
| Released plate (scratch)  | `…/candidates/03-dust-and-contact-closeup.png` `47d39a0b…`, 1,788,007 B                                                                                                         |
| Dossier today             | `01` `8839f66a…` · `02` `8fb37ac5…` · `03-dust-scanning` `a70d306c…` · `04-dust-and-contact-closeup` `47d39a0b…`; `payload-sensor-illustration.png` deleted in the working tree |
| Article                   | working tree `8dc22a4f…` (swap wiring + §11.3 alt); `origin/main` `7b69bd7f…` (live)                                                                                            |
| Files this revision wrote | `.agents/work/reviews/002-payload-selection-media.md` only — no `website/`, no `docs/`, no commit, no push, no deploy, nothing copied out of scratch                            |
| Scratch used              | `/tmp/rh_plate_probe.py` (stdlib PNG decoder) and `/tmp/rh_chip_contrast.py` (chip contrast) — both outside the repository                                                      |

**Revision 2 final label: `changes_requested`** — the swap as placed is returned; the plate named
in §11.1 is released for the 002 band, and the placement it requires is §11.6.
