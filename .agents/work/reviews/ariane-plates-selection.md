# Ariane plate selection — canon, rights and release verdict

Card `t_58c90eb5` (`mars-ai-simulator-editor`) · timeline step `004-launch-provider` · stage:
canon and rights selection · workspace `dir:/home/janpolacek/Projects/mars-ai-simulator`.

Written 2026-09-17 20:14–20:5x CEST. Verdict set, all measurements and all hashes in this
record were taken **at verdict time** on the live shared checkout (`HEAD` = `origin/main` =
`5a59f34`), not from the planning brief.

This record is the card's only deliverable. The chronology / canon / plausibility / spoiler
verdict the merged role owes is a section of this file (§11) rather than a separate
`.agents/work/continuity/` companion: the card names one artefact, and a second file would
need its own publication path in card B's close-out. The choice is recorded here so a later
reader does not read the absence as an omitted check.

**This card publishes nothing, places nothing, edits no `website/`, `docs/` or
`tools/visual-generator/` path, runs no build, and commits and pushes nothing.** Its only
write is this file.

---

## 1. What this card decides

Which of the six operator-supplied plates in `docs/vehicles/ariane/` may be placed on a
public surface at step 004 — one verdict row per plate, the rule cited by `file:line`, the
per-plate re-measurement the card body requires, the admitted canonical name, the approved
media wording, and the release decision or the named withhold.

Fail-closed: an admission is this role's own decision (merged editorial role, 2026-09-17); a
withhold needs no approval from anyone.

---

## 2. Input inventory — measured at verdict time (2026-09-17 20:14 CEST)

`docs/vehicles/ariane/` is **untracked** in git (`git status --short` → `?? docs/vehicles/ariane/`).
It holds the dossier plus six PNGs and no sidecar, no spec, no JSON, no text file of any kind:

```
$ sha256sum docs/vehicles/ariane/*.png
cf3323bf5dfb45e77b3400cd0d0dc1b107359a1d9403a6d7442a480d1228c44b  canonical.png
7407fa7d4b8d8f65cc7b64f49a625c951d2ae62448094a83994b0d2acc521fa1  front-left.png
c4744fff0da848e509dfbc8ab95e702a469eeac85c15f98f8f490041b0e60895  lunch.png
8669bf7537c0cdfa75fd6da92c76ffed9b81c8c9b82b7a58df8606e5c0c88f44  rear-right.png
458618791a82d75bd733b31d37692e9972b36570fce59c266a24e806bc533334  side-view.png
6f133b76c7e67111de3660ae1e957ec0f9d293e4a96ff5687d96e3e020dc53b4  travelling-to-mars.png
```

All six are 1,122 × 1,402 = 4:5 portrait, 8-bit RGB, non-interlaced; every plate the
newsroom publishes today is landscape and the carousel cell is pinned to `aspect-ratio: 3 / 2`
(brief §2). mtimes 19:52:19–19:53:42 CEST. The six hashes equal the six the planning brief
recorded at 20:04 CEST — **nothing moved between the brief and this verdict**.

Other inputs read: `.agents/work/briefs/ariane-plates-incorporation.md`;
`docs/vehicles/ariane/ariane-64.md` (31,797 B, sha256 `3ef87d9d…`);
`docs/timeline/004-launch-provider.md`; `docs/SCENARIO.md` (`:173-207`, `:272-282`);
`.agents/work/releases/004-launch-provider.md`;
`.agents/work/assets/004-launch-provider/assets.md`; `website/src/lib/media.ts`;
`website/src/features/news/media.ts`; `website/src/lib/assets.ts`;
`website/scripts/guards.mjs`; `website/news/003-vehicle-design.mdx`;
`website/news/004-launch-provider.mdx` (sha256 `7da71fec1f2ce0dbaff8aa2966e802b6de439eb78b73e34b1a8eafab5d764ca3`,
4,029 B, `publication: published`, `simulatedDate: 2030-03-11`, **no `media*` field**).

---

## 3. Provenance — measured, and it corrects the brief's premise

The brief (§2, §5 Gate C) records: _"No PNG text chunk in any of the six. Nothing on disk says
who produced them, with which tool/model, or whether any third-party material is in them."_
The first half is true — there is **no `tEXt`/`zTXt`/`iTXt`/`eXIf`/`iCCP`/`tIME` chunk in any
of the six**. The second half is **not**: every plate carries a private ancillary chunk
`caBX` holding a complete **C2PA / Content Credentials manifest**. Measured with a stdlib PNG
chunk reader (`/tmp/rh-ariane/png_chunks.py`, `png_c2pa.py`, `c2pa_summary.py` — outside the
repository):

| Plate                    | `caBX` bytes | C2PA manifest URN (verbatim)                    |
| ------------------------ | -----------: | ----------------------------------------------- |
| `canonical.png`          |       23,617 | `urn:c2pa:f0db47ab-4a17-4981-a95f-d8dc6dd711c9` |
| `front-left.png`         |       23,617 | `urn:c2pa:3c8aa66c-adc2-4dcd-94bd-1c0b0afe6f52` |
| `lunch.png`              |       23,617 | `urn:c2pa:d9900417-e5c6-474e-99cc-992ca8dcdcc3` |
| `rear-right.png`         |       23,617 | `urn:c2pa:b7ae76de-95ac-4516-a8c3-807736bb1177` |
| `side-view.png`          |       23,617 | `urn:c2pa:539cb125-76a2-46c5-bafb-902f4a990ddb` |
| `travelling-to-mars.png` |       21,844 | `urn:c2pa:73f336f8-a41f-4359-9753-4e83287409d8` |

Every manifest records, in every one of the six:

- `c2pa.actions.v2` → action **`c2pa.created`**, `when` **`2026-09-17T00:00:00Z`**,
  `softwareAgent` name **`gpt-image`**, version **`2.0`**;
  `digitalSourceType`
  `http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia`
  — the IPTC code for **AI-generated media**.
- action **`c2pa.converted`**, same date.
- action **`c2pa.watermarked.unbound`** with `allActionsIncluded` (recorded verbatim; this
  record does not interpret what the watermark carries).
- `c2pa.hash.data` — a SHA-256 **hard binding** over the image data.
- `claim_generator_info`: **`OpenAI Media Service API`** (`c2pa_rs` 0.79.2, specVersion 2.2.0);
  `dcterms:title` = `image.png`.
- A signature block whose certificate chain is issued to **`OpenAI OpCo, LLC`** —
  `OpenAI Media Service`, intermediates rooted at `SSL.com-C2PA-I-R1` /
  `SSL.com-C2PA-Root-2025-RSA`, plus an OpenAI timestamp-authority chain.

**Consequences (recorded; this role may not infer an origin, and does not need to — the
origin is in the bytes):**

1. **The generator and the model are recorded on disk**: OpenAI **gpt-image 2.0** through the
   **OpenAI Media Service API**, on 2026-09-17, signed by OpenAI OpCo, LLC. Escalation 3 in
   the brief asked the human to state _"who made them / with what"_; **that half is now
   measured from each file** and no longer needs a human sentence. This is a signed
   content-provenance credential, not this role's guess.
2. **They are not the project's own pipeline.** The accepted 004 candidate was rendered in
   the local ComfyUI / `flux-2-klein-base-4b` stage (`tools/visual-generator/`,
   `.agents/work/assets/004-launch-provider/assets.md` §Candidate). These six plates are
   `gpt-image` outputs. Any downstream comparison against that manifest's provenance rows is
   comparing two different generators; the plate family's tool record is the manifest above.
3. **Rights.** `trainedAlgorithmicMedia` means no third-party photograph, stock frame or
   scraped imagery is embedded: the material is model output, produced through an account on
   the OpenAI Media Service. The plates carry no real-person likeness, no logo and no
   insignia of their own (plates 1–4 measure **no text at all**, §5). What the bytes do **not**
   establish is **whose account produced them and that the programme may publish them** — a
   rights statement only the human story owner can give. That is the residual question, and
   it is carried as condition C1 in §10, not as an unresolved _origin_.
4. **The credential travels or does not travel with the asset** — see §12, O-3. Nothing in
   this record authorises stripping it.
5. **Not validated cryptographically.** The manifest was read structurally; no C2PA
   validation tool was available to this session, so the hard binding and the certificate
   chain were **not** verified. A re-encode or edit after signing would invalidate the hard
   binding; nothing here asserts that the bound bytes validate.

---

## 4. Re-measurement method, and its known failure mode

The card body requires the inherited vision read of plates 2–4 to be re-run at full
resolution before the verdict, naming the crop region used. That was done, and it exposed
that **a vision read alone cannot carry this decision**. Three instruments were used, and the
verdict rows say which decided:

1. **Pixel silhouette top-profile** (`/tmp/rh-ariane/png_tops.py`, `png_apex.py`, stdlib PNG
   zlib+unfilter decoder): for every column, the topmost pixel darker than the studio field
   (luma < 246), sampled at 4-px steps with a 5-column mean. A separate nose-cone apex per
   booster shows as a local minimum.
2. **Dark-blob connected components** (`/tmp/rh-ariane/png_blobs.py`, luma < 110, 8-connected,
   area ≥ 40 px) over the engine band `y 1100–1310`, plus row band-scans (`png_rows.py`).
3. **Tight-crop vision reads** (`vision_analyze` with a named region), used only where the
   question is "how many separate cylinders/bells does this crop resolve", never to overrule
   a measurement.

**Measured failure mode of instrument 3, recorded because it bears on the verdict.** On
`travelling-to-mars.png`, three full-frame/crop reads returned three different transcriptions:
one read gave `RED HORIZON ONE`, `RH-01`, an ESA roundel and `ariane 64`; a crop of
`[150,950,1000,1402]` instead asserted a **SpaceX wordmark and a NASA "meatball"** on what is
the Earth limb and engine section, and named the vehicle a "Falcon 9 second stage" over "Baja
California" — a confabulation with no support in the other reads. The project's own skill
records the same class of failure ("three passes over one plate returned three different
counts"). The `SpaceX`/`NASA` reading is therefore **rejected as an artefact**; the markings
that appear in **two independent reads** are the ones recorded in §5, and one read of the
same area returned `R-01` where two others returned `RH-01`.

---

## 5. Per-plate re-measurement

Full-resolution crops named per row; "apex" = a local minimum of the pixel top-profile
(instrument 1); "bells" = instrument 2 plus the named crop read.

| # | Plate                    | Crop regions read                                                                                                                                                                                    | Booster count (from the crop)                                                                                                                                                                                                                                                                                               | Bell count                                                                                                                                                                                                        | Text visible in pixels                                                                                                                                                                                                                                                                                                                                                                      | Scene                                                                                                                                                                                                                        |
| - | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | `canonical.png`          | full frame; left flank `[400,540,560,720]`; right flank `[600,540,760,720]`; engine band `[390,1150,730,1330]`; pixel profile `x 400–760`                                                            | **4** — apexes at `x≈448` (topY 582) **and** `x≈488` (topY 605) left of the core; `x≈628` (570) **and** `x≈671` (598) right of it; core/fairing apex `x≈564` (topY 18). Both flank crops resolve **two separate nose cones**, the outer higher, the inner behind and lower                                                  | **5** — 2–1–2, centre bell largest, pairs partly occluded (tight-crop read); the bells merge into one dark base mass at `y≈1240–1310`, so the count comes from the crop read, corroborated by the read of plate 2 | none                                                                                                                                                                                                                                                                                                                                                                                        | studio only: seamless near-white floor, faint grounded shadow, whole vehicle in frame                                                                                                                                        |
| 2 | `front-left.png`         | full-width lower band `[0,600,1122,1402]` (the region the card names); left flank `[400,520,570,720]`; right flank `[600,520,780,720]`; engine band `[390,1130,730,1310]`; pixel profile `x 400–760` | **4** on the flank crops — apexes `x≈453` (555) and `x≈488` (591) left, `x≈633` (565) and `x≈662` (600) right; each flank crop resolves two separate nose cones. The wide lower band alone merges each pair into one body and reads **2** — that is the disagreement the brief inherited, and the resolving crops settle it | **5** — 2–1–2, centre bell largest                                                                                                                                                                                | none                                                                                                                                                                                                                                                                                                                                                                                        | studio only, whole vehicle in frame                                                                                                                                                                                          |
| 3 | `side-view.png`          | full frame; left flank `[390,540,580,800]`; right flank `[580,540,780,800]`; engine band `[390,1150,730,1330]`; pixel profile `x 400–760`                                                            | **2–3, not four.** Pixel profile resolves three tops only (`x≈454` left; `x≈624` and `x≈663` right); the left flank crop reads two nose cones with the rear one occluded, the right flank crop reads one. At least one pair is fully hidden by the near booster                                                             | **5** — 2–1–2, centre bell largest                                                                                                                                                                                | none                                                                                                                                                                                                                                                                                                                                                                                        | studio only, whole vehicle in frame                                                                                                                                                                                          |
| 4 | `rear-right.png`         | full frame; left flank `[390,540,580,800]`; right flank `[580,540,800,800]`; engine band `[390,1150,760,1330]`; pixel profile `x 400–760`                                                            | **conflicting / not four.** The pixel profile resolves **two** tops (`x≈455`, `x≈675`); the flank crops each read two nose cones with one occluded. The instruments disagree, which is itself the finding: the count is not resolvable on this view                                                                         | **5** — read as five separate bells with clear gaps, centre largest; the pixel run for this plate shows three dark clusters, so the count rests on the crop read alone                                            | none                                                                                                                                                                                                                                                                                                                                                                                        | studio only, whole vehicle in frame                                                                                                                                                                                          |
| 5 | `lunch.png`              | full frame; pad crop `[100,700,1050,1402]`                                                                                                                                                           | 4 boosters / 5 bells readable on the pad crop, but the count is irrelevant here (§6)                                                                                                                                                                                                                                        | 5                                                                                                                                                                                                                 | **none** — two independent reads, no letter, number, logo or marking anywhere on the vehicle, the pad or the sky                                                                                                                                                                                                                                                                            | **lift-off.** Blue sky, clouds, concrete mount, blast walls, steel platforms, stairs, pipes, **two lattice towers**, bright engine flame, exhaust plumes and heavy white/grey smoke; the vehicle is off the pad and climbing |
| 6 | `travelling-to-mars.png` | full frame; upper stage `[200,250,950,700]`; upper body `[150,500,1000,1050]`; lower band `[150,950,1000,1402]`                                                                                      | 0 boosters visible; one large engine bell firing (the vehicle reads as a single-stick stack in flight)                                                                                                                                                                                                                      | 1                                                                                                                                                                                                                 | **yes, burned in.** `RED HORIZON` / `ONE` (black, upper stage); `RH-01` (one read: `R-01`; black, upper capsule); blue oval/ring emblem with a white `a` and blue lowercase **`ariane 64`**; a **blue roundel with a white stylised `e` and arc plus blue lowercase `esa`** (an ESA-style institutional mark, in two independent reads); an orange/red semicircular graphic with no letters | **in space, in transit**: Earth limb and surface, clouds and ocean across the frame, Mars small in the upper right, black star field, engine firing with a bright plume. **No on-pad or studio framing at all**              |

---

## 6. Verdict table — one row per plate, rule cited, provenance, next step

| # | Plate                    | Path                                                               | Rule cited (canon)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Provenance                                                                                                                                                                                                                                                   | Verdict                                                                                                                                                                                                                                                                                                                                                                                                        | Next step                                                                                                                                                                                                                                                                                                                                                                               |
| - | ------------------------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | `canonical.png`          | `docs/vehicles/ariane/canonical.png` · sha256 `cf3323bf…`          | `docs/vehicles/ariane/ariane-64.md:56` (four-booster configuration, the defining feature), `:62` (one core, four strap-ons, no extra), `:70` (two on each side, top-and-bottom; no additional strap-ons beyond the four), `:84` (studio baseline: no tower, gantry, crew, smoke, plume, flame, overlay), `:140` (Operating appearance item 1: engineering-reference level, no launch-site context), `docs/timeline/004-launch-provider.md:21` (candidate media: a non-sensational mission-architecture diagram or approved integration image), `docs/SCENARIO.md:280` (generated visuals labelled illustrative) | recorded in-file: `gpt-image` 2.0 / OpenAI Media Service API / signed `OpenAI OpCo, LLC` / `trainedAlgorithmicMedia` / `c2pa.created` 2026-09-17 (§3). **Producer and model resolved**; the producing account and publication rights remain the human's (C1) | **admit — placed plate**                                                                                                                                                                                                                                                                                                                                                                                       | card C verifies this path's hash (no copy and no rename are needed: it already sits at the admitted canonical name) and marks it placed; card D wires the key, the label and this alt verbatim                                                                                                                                                                                          |
| 2 | `front-left.png`         | `docs/vehicles/ariane/front-left.png` · sha256 `7407fa7d…`         | same as plate 1: `ariane-64.md:56,62,70,84,140`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | as plate 1                                                                                                                                                                                                                                                   | **admit — alternative only; not placed by this release**                                                                                                                                                                                                                                                                                                                                                       | none. It may be placed only under its own release decision; the approved key renders **one** plate, and a two-plate set is a different contract (a `MediaPlates` set with its own alt/label set) that this card does not authorise                                                                                                                                                      |
| 3 | `side-view.png`          | `docs/vehicles/ariane/side-view.png` · sha256 `45861879…`          | `ariane-64.md:62,70` — the four-booster arrangement is the feature the designation asserts and the feature that distinguishes the vehicle from the two-booster variant of its family; the card body's admission test (§"Re-measure before verdict")                                                                                                                                                                                                                                                                                                                                                             | as plate 1                                                                                                                                                                                                                                                   | **withhold** — _not-the-silhouette_: the composition cannot show the four-booster arrangement (two-to-three tops resolve; the visible flank reads two, one pair fully hidden), so the plate is indistinguishable from the two-booster configuration canon defines the count to separate, and cannot carry an "engineering reference" claim to this designation                                                 | stays exactly where it is; **not renamed** (Gate F: a rename is a `docs/` write and withheld plates are not renamed). Escalation: re-render if more than one plate is wanted — 4:3 or wider, four boosters, studio only, no scene                                                                                                                                                       |
| 4 | `rear-right.png`         | `docs/vehicles/ariane/rear-right.png` · sha256 `8669bf75…`         | as plate 3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | as plate 1                                                                                                                                                                                                                                                   | **withhold** — same defect as plate 3, and here the instruments disagree outright (pixel profile resolves two tops; the flank crops read two per flank). An unresolvable count is a withhold under this card's fail-closed test                                                                                                                                                                                | as plate 3                                                                                                                                                                                                                                                                                                                                                                              |
| 5 | `lunch.png`              | `docs/vehicles/ariane/lunch.png` · sha256 `c4744fff…`              | `ariane-64.md:131` ("**On the pad.** No on-pad image, no launch-tower image, no service-gantry image … is part of step 004 public copy"), `:130` ("**Flight-ready.** … Step 004 is a design decision, not a launch readiness statement"), `:142` (Operating appearance item 3: launch day belongs to step `005-launch`), `:136` (a card wanting to cover one of these negations must consult the human story owner through Gate 004-B first)                                                                                                                                                                    | as plate 1                                                                                                                                                                                                                                                   | **withhold, fail-closed** — step-005 scope; a lift-off with flame, smoke and pad towers is the launch event itself, not the "design decision" step 004 releases                                                                                                                                                                                                                                                | reserved for step 005; do not delete, do not rename, do not import. **Human gate (escalation 1).** Note the narrower canon allowance at `:84` ("a second plate may show the launcher against a generic launch-site setting … if the visuals role decides the moment is shown that way") is about a _static generic site_, not about the lift-off moment, so it does not free this plate |
| 6 | `travelling-to-mars.png` | `docs/vehicles/ariane/travelling-to-mars.png` · sha256 `6f133b76…` | `ariane-64.md:129` ("**In transit.** It is a launcher, not a spacecraft; once it has placed the cruise stage on the outbound trajectory, it does not continue in flight"), `docs/SCENARIO.md:281` ("Real institutions … require explicit review before any public mention"), the step-004 release record's exact public scope row ("**No** real institution, operator or facility string, anywhere") and Gate 004-B's recorded fail-closed form, `ariane-64.md:136`                                                                                                                                             | as plate 1                                                                                                                                                                                                                                                   | **withhold, fail-closed** — **two independent bars**: the plate depicts exactly the "In transit" negation, and it prints an ESA-style institutional roundel with `esa` beside a real institutional name. A third, separate bar: the burned-in text (`RED HORIZON ONE`, `RH-01`, `ariane 64`) is wording nowhere approved, and the labelling belongs to the site (`mediaLabel` / `mediaAlt`), not to the pixels | **Human gate (escalation 2).** A "yes" would also have to settle the burned-in text against the approved wording **and** amend the release record's "no real institution … named" scope row before any surface carries it                                                                                                                                                               |

**No plate is admitted by default and none is admitted by assumption.** Two plates (1, 2) are
admitted on canon and plausibility; four are withheld, three of those fail-closed on canon and
one on a composition that cannot carry its own claim. Because plates 1 and 2 are admitted, the
chain does **not** collapse: cards C and D have work, and card G is still reachable.

---

## 7. Admitted canonical name(s)

| Plate | Path on disk (unchanged)              | Admitted canonical name               | Hash                                                               | Card C's act                                                                                                                                                                                                                                                                                               |
| ----- | ------------------------------------- | ------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | `docs/vehicles/ariane/canonical.png`  | `docs/vehicles/ariane/canonical.png`  | `cf3323bf5dfb45e77b3400cd0d0dc1b107359a1d9403a6d7442a480d1228c44b` | **no copy and no rename** — the file already sits at the admitted name under the operator's naming precedent (`canonical` / `front-left` / `side-view` / `rear-right`, the same set `docs/vehicles/pathfinder/` uses). Card C verifies the hash, records that the placement is a no-op, and copies nothing |
| 2     | `docs/vehicles/ariane/front-left.png` | `docs/vehicles/ariane/front-left.png` | `7407fa7d4b8d8f65cc7b64f49a625c951d2ae62448094a83994b0d2acc521fa1` | **nothing.** Not placed by this release; card C must not copy, move or rename it                                                                                                                                                                                                                           |

Card C must not touch `side-view.png`, `rear-right.png`, `lunch.png` or
`travelling-to-mars.png`: they stay byte-identical where they are (Gate F).

---

## 8. The media-key contract — approved

The earlier visuals card's draft is **approved as the proposal, with no amendment to the
wording**: the dev card owns the final key name and the code shape, and the two strings below
are approved **verbatim**.

| Field               | Value                                                                                                                                                                                                                                                                                    | Verdict                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Key (proposed name) | `launch-vehicle-reference` — card D owns the final name                                                                                                                                                                                                                                  | approved as a proposal                                                         |
| Requirement tuple   | `{ plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }`, mirroring `vehicle-references` (`website/src/lib/media.ts:60`)                                                                                                                                                  | **approved** — one plate, one alt, **no caption**, label optional-but-supplied |
| Resolver            | one entry in `website/src/features/news/media.ts` `newsMedia`, one plate importing the new export from `src/lib/assets.ts`, label as below, **no `provenance` line** (a one-plate key renders no per-plate caption, so the illustrative statement reaches the reader through `mediaAlt`) | approved                                                                       |
| Asset import        | one import in `website/src/lib/assets.ts` of `../../../docs/vehicles/ariane/canonical.png` (`vehicle-references` imports `../../../docs/vehicles/pathfinder/canonical.png`, `assets.ts:9`)                                                                                               | approved                                                                       |
| Tests               | `website/test/news-media.test.mjs` asserts every key resolves to exactly `plateCount` plates — card D adds the assertion for the new key                                                                                                                                                 | approved                                                                       |
| `mediaLabel`        | `Ariane 64 · engineering reference`                                                                                                                                                                                                                                                      | **approved verbatim**                                                          |
| `mediaAlt`          | the 347-character string in §9                                                                                                                                                                                                                                                           | **approved verbatim**                                                          |
| `mediaCaption`      | none — the key requires `captionCount: 0` and the schema rejects a caption                                                                                                                                                                                                               | approved                                                                       |

**Wording measurements (so card D's byte fidelity is checkable):**

- `mediaLabel` — 33 characters, **34 UTF-8 bytes**; the separator is **U+00B7 MIDDLE DOT** at
  character index 10 (its own instruction: _must not be normalised_). UTF-8 bytes:
  `417269616e6520363420c2b720656e67696e656572696e67207265666572656e6365`;
  sha256 `f3437f4bef10ec16ba13a2042625b17b0301f1911a03f3e3aaf72abc26481c06`.
- `mediaAlt` — **347 characters, 347 bytes, ASCII only** (0 non-ASCII code points);
  sha256 `20d1f41ed8c11ff6f80830775231f21439d67e520219e44be9b3df3d8a690bdd`.
  (The brief and the manifest both state 347 characters; re-measured here from the manifest's
  own YAML block, not retyped.)

**Two wording judgements recorded rather than silently made:**

1. The label keeps **`engineering reference`**, where the 003 precedent reads
   `RH-01 Pathfinder · studio reference` and uses "studio". Approved as written because
   "engineering reference" is the dossier's own term for this vehicle's plate
   (`ariane-64.md:84` "an engineering reference appearance"; `:140` "the engineering-reference
   level") — the ariane label is drawn from its own dossier, and cross-vehicle label
   uniformity is a style preference, not a defect. Card D writes the approved form, not a
   harmonised one.
2. Every cue the alt names was checked against plate 1's pixels and is present: one central
   core, **four** strap-on boosters **two on each side**, **five** dark engine bells at the
   base, a short fairing on top, a plain studio floor — and the plate carries **no text**, so
   "no real agency is named or implied" is true of the artwork. The alt carries the
   illustrative/fictional statement the site rule requires (`docs/SCENARIO.md:280`) and
   asserts none of the dossier's forbidden negations in the positive
   (`ariane-64.md:125-136`): it says **uncrewed**, claims no readiness, shows no pad, names
   no institution, and states no mass, price or specification.

---

## 9. Frontmatter wording — verbatim, approved

To be applied **only** when the key lands, and only by the card that owns the key:

```yaml
media: launch-vehicle-reference
mediaAlt: "Illustrative artwork, not a photograph: a white uncrewed heavy-lift launcher with one central core and four strap-on boosters, two on each side, five dark engine bells at its base and a short fairing on top, standing on a plain studio floor. A stand-in for the launcher this fictional mission is planned around; no real agency is named or implied."
mediaLabel: Ariane 64 · engineering reference
# no mediaCaption — the key renders no per-plate caption and the schema rejects one
```

`media` is a key, not a URL; an unknown key or a missing `mediaAlt` fails the content schema
(`website/src/lib/media.ts`), so a mistyped key cannot silently drop the plate.

---

## 10. The release decision

> **Release decision, recorded 2026-09-17 CEST by `mars-ai-simulator-editor` on card
> `t_58c90eb5`: the plate `docs/vehicles/ariane/canonical.png`
> (sha256 `cf3323bf5dfb45e77b3400cd0d0dc1b107359a1d9403a6d7442a480d1228c44b`, 1,122 × 1,402,
> 4:5 portrait) IS RELEASED for public placement.** Canon is confirmed against released
> material (the four-booster configuration at `ariane-64.md:56,62,70`; the studio baseline at
> `:84`; step 004's released scope at `:140` and `docs/timeline/004-launch-provider.md:21`);
> the plate carries no text, no scene, no launch-day fact and no real institution, operator or
> facility string; and the package it enters is a **revision of the already-published article
> `website/news/004-launch-provider.mdx`**, which stays returned to the editorial gate (card
> E) because the article's bytes are changing.

**Exact public scope this release covers**

| Surface                       | Content                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Plate                         | `docs/vehicles/ariane/canonical.png`, byte-identical to the hash above, emitted through the new media key and rendered **uncropped**                                                                                                                                                                                                                                       |
| Rendered surfaces             | the news card's media cell for 004 on `/` and `/news/` (`NewsCard.astro` renders `media.plates[0]`) and the lead `<figure class="article-media">` on `/news/004-launch-provider/`                                                                                                                                                                                          |
| Strings published with it     | the label `Ariane 64 · engineering reference` (U+00B7) and the 347-character alt text of §9 — nothing else                                                                                                                                                                                                                                                                 |
| Artwork content released      | a white uncrewed single-stick heavy-lift launcher with one core, four strap-on boosters two per side and five dark engine bells, on a seamless studio floor: **studio only — no pad, tower, gantry, smoke, flame, plume, crew, people, integration equipment, site, sky, horizons, Mars surface or graphic overlay; no burned-in text, logo, flag or marking of any kind** |
| Not released by this decision | plates 2–6 (2 is an admissible alternative only; 3–6 are withheld, §6); any crop of any plate; any derived, re-encoded or re-rendered variant; any caption; any second plate; any text marker in the image                                                                                                                                                                 |

**Conditions attached to the release**

| #  | Condition                                                                                                                                                                                                                                                                                                                                                        | Owner / where it is checked                                                      |
| -- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| C1 | The **human story owner's rights/account statement** for the six operator-supplied plates — that they were produced under their own account and may be published — is a precondition of the **push** (card F). The C2PA manifest supplies _who made them and with what_ (§3); it does not supply the human's rights statement, and this role will not assume one | human story owner (escalation 3, narrowed); card F applies it, card E records it |
| C2 | The placed file is the hash above, **byte-for-byte**; card C copies nothing and renames nothing                                                                                                                                                                                                                                                                  | card C                                                                           |
| C3 | **No crop**: the plate is contained, never cropped. The portrait 4:5 plate is rendered in the carousel's pinned 3:2 cell and in the plate-sized `/news/` cell, so card D **measures and reports** the before/after cell heights (brief §2, §3.5)                                                                                                                 | card D                                                                           |
| C4 | The label and alt ship verbatim from §9, with their U+00B7 and ASCII properties intact; no `mediaCaption`                                                                                                                                                                                                                                                        | card D; card E re-checks the bytes                                               |
| C5 | The in-file C2PA manifest is **not** stripped, re-signed or falsified; if the build re-encodes the plate, card D records what the emitted derivative carries (§12 O-3)                                                                                                                                                                                           | card D                                                                           |
| C6 | The revision's `simulatedDate` stays **`2030-03-11`** (milestone `docs/SCENARIO.md:188`, "11 March 2030 — RH-01 flight-model assembly begins"). An added plate is not a dated event and this release sets no new record date; card E re-records the value it verifies                                                                                            | card E                                                                           |
| C7 | No other plate of the six enters any public surface on this decision, and no guard marker is added that covers the released designation (the 004 release record's C5 direction)                                                                                                                                                                                  | cards D, F                                                                       |

---

## 11. Continuity, canon, plausibility and spoiler verdict — `continuity clear`

- **Chronology.** The admitted plate carries **no date of any kind** in its pixels and implies
  no event: a studio view of a launcher is not a mission milestone. The revision changes no
  article date; the article's record date stays `2030-03-11` on milestone
  `docs/SCENARIO.md:188`, which remains the **lower bound on step 005's value** as the 004
  release record records. Nothing in this selection advances the release order.
- **Canon consistency (the plate against released material).** Four strap-on boosters, two on
  each side (`ariane-64.md:56,62,70`) — measured, both flanks. Single stick, one core, no extra
  or hidden boosters, no cross-feed (`:62`) — measured. White body, dark nozzles, no decorative
  graphics, no flags or logos (`:82`) — measured: **no text at all**. Studio baseline with no
  tower, gantry, crew, smoke, plume or flame (`:84`) — measured. Not crew-rated, not reusable,
  not in transit, not on the pad, not integrated at a campaign site (`:125-136`): the plate
  depicts none of the forbidden positives.
- **One deliberate acceptance, recorded.** The booster pairs read **staggered** (one higher,
  one behind and lower) on both flanks of plates 1 and 2. That is **not** a deviation from
  canon: `ariane-64.md:70` describes the arrangement as "two on each side of the core,
  **top-and-bottom** on each side". The earlier visuals card's finding 3 read the same
  geometry as a soft deviation from "top-and-bottom"; that reading is corrected here — a
  vertical stagger **is** what "top-and-bottom on each side" describes, and the render matches
  the dossier rather than departing from it. No caption or alt text asserts an arrangement
  beyond "two on each side".
- **Plausibility.** The plate shows an uncrewed, non-reusable, single-stick heavy-lift launcher
  with no recovery hardware, no crew hardware, no second core. It is a **generative render of
  a real vehicle**, and it is presented as illustrative artwork rather than as an engineering
  drawing or a photograph — which is what the alt text states and what the release record's
  "record belongs to the organisations that build and operate it" framing requires.
- **Spoiler safety.** No step 005–011 fact: no launch day, time or date beyond the 2031 window
  already public; no launch site; no flight-readiness statement; no integration campaign; no
  landing-site, ellipse, science-zone or `AF-*` material; no private-calendar fact; no
  `docs/timeline/` path; no real institution, operator or facility name. The admitted plate is
  the only one of the six whose content carries none of the withheld families.

---

## 12. Observations, hygiene and hotspots

- **O-1 — the withheld plates sit untracked inside `docs/`, in a public repository, with no
  guard on them.** `docs/vehicles/ariane/` is entirely untracked, and
  `website/scripts/guards.mjs` withholds only `docs/timeline/` (`gatedDirectoryNames = ['timeline']`,
  `:44`) plus one pathfinder file (`gatedFilePathSegments`, `:63-65`) — **nothing covers
  `lunch.png` or `travelling-to-mars.png`**. A card that ran `git add docs/` would commit the
  pad lift-off and the ESA-marked in-transit plate into the public repository, and any future
  card that imported plate 6 would publish it with no build failure. **Owner:** the card that
  stages `docs/` paths (card C, and `t_1476a18c` for the repository's `docs/` publication) must
  stage **named paths only, never `docs/` wholesale**; and `mars-ai-simulator-dev` should add a
  per-file rule for the two withheld plates as defence in depth (a marker, not a blocker —
  adding one that covered the _released_ designation would be the wrong direction, the 004
  release record's C5). **Hotspot: `docs/vehicles/ariane/` — six uncarded 1–2 MB plates plus
  five never-cleared files in one untracked directory.**
- **O-2 — the plates come from a different generator than the plan assumes.** The plan's
  visual-brief path is the local ComfyUI / Flux stage; these six are `gpt-image 2.0` outputs
  through the OpenAI Media Service API (§3). Any card that reasons about "the renders" from
  the ComfyUI manifest is reasoning about a different artefact. **Owner:** the planner's
  brief and card D's provenance rows; recorded here, not repaired.
- **O-3 — the C2PA manifest may travel into the public build.** `website/src/lib/assets.ts`
  imports the plate from the canonical `docs/` path, and the site's asset pipeline "reads the
  file … and emits an optimised, hashed file" (`assets.ts:19-22`). If that emission is a byte
  copy, the served derivative carries the manifest — including the OpenAI OpCo, LLC
  certificate chain and the real generation timestamp `2026-09-17T00:00:00Z`. Editorially that
  is **acceptable and in fact transparency-positive**: it is a provenance credential about the
  artwork, not a statement of the fiction, and it does not imply participation, approval or
  endorsement by anyone in the programme (`docs/SCENARIO.md:281` protects real-institution
  _mentions in the fiction_, not the generator's credential on a generated file). It must
  however be a **measured** fact rather than an assumption: card D records whether the emitted
  derivative is a byte copy or a re-encode, and hashes it. Nothing in the credential is a page
  string and nothing renders it as text.
- **O-4 — the module resolution of this record's own strings.** The alt and label were measured
  from the manifest's YAML block with a stdlib script (`/tmp/rh-ariane/measure_strings.py`),
  never retyped. If a later reader re-measures and gets a different digest, the difference is a
  changed proposal, not a transcription error here.
- **O-5 — the six plates are portrait; the newsroom is landscape.** Recorded by the brief
  (measured cells 586.1 / 644.6 / 527.1 px at 1280×800) and unchanged by this selection; C3
  carries the measurement to card D. `object-fit: cover` was already measured and rejected
  (`NewsCard.astro:243-247`).
- **O-6 — `lunch.png` is misspelled for a lift-off plate** (Gate F). It is withheld, so no
  rename is performed here or by card C; the name is left as the operator wrote it.

---

## 13. Validation performed, and what was not

| Check                                | Method                                                                                | Result                                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Six plates unchanged since the brief | `sha256sum`, `stat`, `file` at 20:14 CEST                                             | all six hashes equal the brief's; all 1,122 × 1,402 RGB                                                                                         |
| PNG chunk inventory / text chunks    | stdlib chunk walk (`png_chunks.py`)                                                   | no `tEXt`/`zTXt`/`iTXt`/`eXIf`/`iCCP`/`tIME` in any plate; one private `caBX` per plate                                                         |
| C2PA provenance                      | stdlib string extraction over `caBX` (`png_c2pa.py`, `c2pa_summary.py`)               | all six: `gpt-image` 2.0, `OpenAI Media Service API`, `OpenAI OpCo, LLC` signer, `trainedAlgorithmicMedia`, `c2pa.created` 2026-09-17           |
| Booster count                        | pixel top-profile + apex detection (`png_tops.py`, `png_apex.py`) + named flank crops | plates 1, 2: four (two per flank); plates 3, 4: not four; plates 5, 6: not applicable                                                           |
| Bell count                           | dark-blob components + row band scans + named engine-band crops                       | 5 (2–1–2) on plates 1, 2, 3, 4, 5; 1 firing bell on plate 6                                                                                     |
| Text in pixels                       | named crop reads, per plate                                                           | none on plates 1–5; burned-in markings on plate 6 (§5)                                                                                          |
| Scene                                | full-frame reads                                                                      | studio only on plates 1–4; pad lift-off on 5; in-transit with Earth/Mars on 6                                                                   |
| Article state                        | `sha256sum`, `stat`, frontmatter read                                                 | `7da71fec…`, 4,029 B, `publication: published`, no `media*` — the release record's hash, unchanged                                              |
| Guard state at verdict time          | `website/scripts/guards.mjs` read                                                     | `gatedDirectoryNames = ['timeline']`; one withheld pathfinder file; markers `['18° 42', '226° 14']`; **no coverage of the ariane plates** (O-1) |
| Wording byte fidelity                | `measure_strings.py` over the manifest's YAML block                                   | alt 347 chars / 347 bytes / ASCII, sha256 `20d1f41e…`; label 33 chars / 34 bytes with U+00B7, sha256 `f3437f4b…`                                |
| Fail-closed scope of this card       | this file only                                                                        | no `website/`, `docs/`, `tools/visual-generator/` write; no build; no commit; no push; no publication                                           |
| **Not performed**                    | C2PA cryptographic validation                                                         | no C2PA validation tool in this session: the hard binding and certificate chain were read structurally and **not** verified (§3.5)              |
| **Not performed**                    | build / `check-dist`                                                                  | deliberately: `scripts/check-dist.mjs` prunes `dist/` when it fails, and no site source changed here                                            |
| **Not performed**                    | emitted-derivative measurement                                                        | card D's, per C5 and O-3                                                                                                                        |

---

## 14. Escalations this verdict carries forward

| # | Question                                                                  | Default applied                                                                                                                                                                                                                                         | Owner                       |
| - | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| 1 | Plate 5 (`lunch.png`) admission                                           | **withhold** (`ariane-64.md:131,130,142`) — reserved for step 005                                                                                                                                                                                       | human story owner           |
| 2 | Plate 6 (`travelling-to-mars.png`) admission                              | **withhold** — two independent bars (`:129`, `docs/SCENARIO.md:281`) plus unapproved burned-in text                                                                                                                                                     | human story owner           |
| 3 | Rights/account statement for the six plates                               | **narrowed by measurement**: who made them and with what is recorded in-file (C2PA, §3); the residual question — the producing account and the right to publish — is **C1**, a precondition of the push                                                 | human story owner           |
| 4 | Dossier release (`docs/vehicles/ariane/ariane-64.md`, sha256 `3ef87d9d…`) | unchanged: publishable state unrecorded; no card in this graph writes it (brief §8)                                                                                                                                                                     | `t_1476a18c` / `t_206bee14` |
| 5 | Wiki leaf `/wiki/vehicle/ariane-64/`                                      | not opened by this graph (brief §6)                                                                                                                                                                                                                     | planner                     |
| 6 | Card D's shared-checkout collision gate on `t_1476a18c`                   | unchanged: stage named paths only                                                                                                                                                                                                                       | card D                      |
| 7 | Re-render of plates 3 and 4                                               | **not pre-created**, and not created by this card either: plate 1 carries the chain, so a re-render is optional work for a future plate set (4:3 or wider, four boosters, studio only), and a new visuals card must not exist beside the selection card | operator / planner          |

---

_This record is working material, not canon. Canon lives in `docs/SCENARIO.md` and the dossiers
under `docs/vehicles/`. The release decision in §10 is this role's own sentence and is what
licenses the plate's placement; the article's own re-gate is card E's._
