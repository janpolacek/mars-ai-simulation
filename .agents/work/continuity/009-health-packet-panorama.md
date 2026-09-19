# Continuity verdict: 009-health-packet-panorama

Card: t_26edaeda (Editorial final gate: 009-health-packet-panorama)
Reviewer: mars-ai-simulator-reviewer
Date: 2026-09-19 (session), run 362
Draft: `website/news/009-health-packet-panorama.mdx`, SHA-256 `571803344a6c4657bbe88c1096f59a9a51f2f9ec49281206ec52b82006959ca0`, 4,587 B, 39 lines, `publication: draft`, `simulatedDate: 2031-09-17` (reviewer-assigned in this gate)
Step: `009-first-surface-checks` — locked milestone row `docs/SCENARIO.md:198` (`17 September 2031 | First engineering health packet and platform panorama`)

## Verdict

**`continuity clear`.** Every claim agrees with the released step and the locked
scenario; the article is the day-after record of the 16 September 2031 landing
(released row `:197`, published article 008), and it releases exactly the row this
step covers — the first engineering health packet and the first platform panorama on
17 September 2031. No later-step fact (egress, drive, samples, mineral results,
discovery, repair, end-of-life) appears in any of: text, summary, status, category,
frontmatter, link text, link targets, or asset metadata; no calendar date after
17 September 2031 appears anywhere on the page. The image decision resolves to one
approved plate (`02-terrain-forward`) whose pixels contain only released vocabulary and
whose alt text is verified against the pixels. The article's record date is assigned at
`2031-09-17` from `docs/SCENARIO.md:198`. The release decision is recorded on the review
card and in `.agents/work/reviews/009-health-packet-panorama.md`.

## Chronology and canon

| #  | Check                                                                         | Result | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -- | ----------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | The page covers the milestone this step releases.                             | Pass   | `docs/SCENARIO.md:198` is the locked row for this step; the article names "17 September 2031" (`:15`) and the row's own two events — "the engineering health packet returned" and "the first panoramic image from the rover's mast cameras is now available" (`:15`). The 008-era boundary that kept row `:198` as a spoiler (`.agents/work/continuity/008-landing.md` row for `:198`) is resolved by this step, exactly as the source pack's C2 records.                                                                                                                              |
| 2  | Calendar days in the body trace to locked rows only.                          | Pass   | `17 September 2031` × 1 (`:15`) — the page's own row; "the previous day" (`:15`) refers to 16 September 2031, the released landing row `:197` public in `008-landing.mdx` (`simulatedDate: 2031-09-16`). No date after 17 Sep 2031 appears; rows `:199`–`:207` are never named or dated.                                                                                                                                                                                                                                                                                               |
| 3  | Health-packet claim stays at the released architecture level.                 | Pass   | `:19` defines "engineering health packet" plainly ("the rover's own summary of how its systems are doing") and routes it through the released relay architecture (`004-launch-provider.mdx:37-43`, mirrored in `008-landing.mdx:30-34`): platform stays where it landed, steerable X-band downlink, rover short-range link, low-rate direct-to-Earth health connection. No telemetry, cadence, pass count, timestamp, or data field. "Power, communications, and the rover's core systems" (`:19`) is the released 008 confirmation set plus a generic core-systems wrap.              |
| 4  | Panorama claim matches the brief and the released terrain vocabulary.         | Pass   | `:23` — rocks, dust, layered outcrops, seen from mast height while the rover remains on the landing platform: the brief's own scene (`009-first-surface-checks.md:15, :35`). `:25` labels the image illustrative ("not mission photography") per `docs/SCENARIO.md:280`, and the three region classes it names (cratered basement; basin-margin material as laterally persistent, finer-grained layers; channel and bench surfaces) are the released Asteria Field regional-setting vocabulary (`website/wiki/asteria-field.mdx:88-92`). No new area fact, no landing-design geometry. |
| 5  | Sensor check-out stays at the released payload scope.                         | Pass   | `:29` — stereo cameras on the short, central mast (`003-vehicle-design.mdx:41-42`; `website/wiki/rh-01-pathfinder.mdx:77-82`), navigation imaging, environment and weather sensors — all released payload-scope terms (`002-payload-selection.mdx:21-24`); "rock sensing" is the released scope term. The private payload list (`docs/SCENARIO.md:157-166`) is not imported.                                                                                                                                                                                                           |
| 6  | Commissioning order within the 009 series is correct; zero movement reported. | Pass   | This page (health packet + panorama, 17 Sep) precedes egress (23 Sep) and first drive (30 Sep) records; the article reports no movement: "before any movement" (`:33`), "'the ramps will be checked before the rover leaves the platform'" and "the local environment must be assessed before surface activity proceeds" are the released 008 checklist (`008-landing.mdx:36-43`). "carried to the surface and is planned to deploy from the platform when the checks are complete" (`:33`) is the released 008 phrasing (`008-landing.mdx:45-53`).                                    |
| 7  | No later-step fact leaks.                                                     | Pass   | Token scan (egress, drive, sample, discover, repair, mineral, stratigr, track, traverse, sol, telemetry, POV): clean. The only affirmative movement-adjacent words are the released planning forms "deploy from the platform" and "before the rover leaves the platform"; no milestone name or date from rows `:199+` or from steps 010–011 is named; the closing "Later surface milestones belong to subsequent updates that have not yet been released" (`:33`) mirrors 008.                                                                                                         |
| 8  | Landing geometry stays name-only.                                             | Pass   | "Asteria Field" appears as the released destination name only; no ellipse, P0, science zone, hazard inventory, traverse logic, or AF-* unit identifier anywhere.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 9  | Landing-era uncertainty stays an uncaused open question.                      | Pass   | `:35` — "Whether the commissioning sequence will complete entirely on the nominal plan remains an open question" — identical in form to 008's uncaused open question (`008-landing.mdx:55-61`); no specific concern, symptom, or diagnosis is invented (source pack C7).                                                                                                                                                                                                                                                                                                               |
| 10 | Ariane 64 reference keeps the released non-endorsement framing.               | Pass   | `:37` and `:39` repeat the released non-endorsement disclosure verbatim (no real agency, launcher operator, or launch facility is a partner or has endorsed the programme); the body adds no architecture or operator claim. The paragraph is the 008 boilerplate carried verbatim; the body itself does not otherwise discuss the launcher (editorial observation, not a continuity issue).                                                                                                                                                                                           |
| 11 | Fiction disclosure is present and prominent.                                  | Pass   | First sentence (`:15`) and final italicised paragraph (`:39`); same boilerplate as the released 001–008 pages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Spoiler safety

| Family                                                              | Step file / row                                                                  | Status on this page       | Notes                                                                                                                         |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| This page's own milestone                                           | `:198` (17 Sep 2031)                                                             | **Released by this page** | The article names the date and both events ("health packet", "panorama") — that is this step's release.                       |
| RH-01 egress                                                        | `:199` (23 Sep 2031)                                                             | Not referenced            | "Egress" has 0 hits; "deploy from the platform when the checks are complete" is the released plan form, not an egress report. |
| First controlled drive and mobility assessment                      | `:200` (30 Sep 2031)                                                             | Not referenced            | "Before any movement" is the only movement wording.                                                                           |
| First onboard sample collection and mineral analysis                | `:201` (31 Oct 2031)                                                             | Not referenced            | No "sample", "mineral", or analysis language.                                                                                 |
| First mineral-stratigraphy campaign                                 | `:204` (18 Apr 2032)                                                             | Not referenced            | No campaign wording.                                                                                                          |
| One-Mars-year / final-year / end-of-life / listening / archive rows | `:205`–`:207`                                                                    | Not referenced            | None named.                                                                                                                   |
| Steps 010–011 (operations-discovery, repair-end-of-life)            | `docs/timeline/010-operations-and-discovery.md`, `011-repair-and-end-of-life.md` | Not referenced            | No later-step event, discovery, or repair language.                                                                           |
| Later 009 pages (egress, first drive)                               | `009-egress`, `009-first-drive`                                                  | Not referenced            | This page reports only its own step; no anticipation in prose, metadata, or alt text.                                         |
| Landing-design geometry                                             | `docs/SCENARIO.md:279` gate                                                      | Not referenced            | Name-only Asteria Field; pixel plate carries no map overlay or AF-* code.                                                     |
| `docs/timeline/` content or paths                                   | private tree                                                                     | Not referenced            | Absent from prose, frontmatter, links, asset metadata, and the approved alt text.                                             |

## Plausibility

- The health-packet framing matches a generic post-landing engineering summary: the rover reports its own systems state through the released relay path; no invented values, cadence, or fields.
- The panorama claim is confined to the brief's scene (rocks, dust, layered outcrops, mast height, rover on the platform) plus the released region classes; the page and the plate both say the image is illustrative, not mission photography.
- The sensor check-out list is exactly the released payload scope; nothing beyond it is asserted as checked.
- The open question is generic and uncaused; the "next record" phrasing is the released house pattern (008) and promises only that the programme will report developments.

## First-public-wording scan (released-route scan)

| Token                   | Hits in this draft              | Released-route hits (2026-09-19)                                    | Verdict                                                                                                                                          |
| ----------------------- | ------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `health packet`         | 1 (`:15`, `:19`)                | 0                                                                   | Released by this page (the row's own milestone name); defined plainly on first use; no cadence/data detail. Safe.                                |
| `panorama`              | 4 (`:15`, `:23` ×3)             | Payload-scope only (`002:29, :40, :64`; `rh-01-pathfinder.mdx:126`) | Released here as the first surface-image record; uses the 002 plain definition in link text ("A panorama puts a target in context"). Safe.       |
| `outcrop(s)`            | 2 (`:23`)                       | 0                                                                   | Brief-approved scene element, consistent with the released "finer-grained layers" vocabulary (`asteria-field.mdx:90`); reviewer-confirmed. Safe. |
| `POV` / `point of view` | 0                               | 0                                                                   | Not used; "first panoramic image" and "seen from mast height" carry the meaning. Safe.                                                           |
| `egress`                | 0                               | 0                                                                   | Not used. Safe.                                                                                                                                  |
| `ramp(s)`               | 1 (`:33`, released 008 wording) | 1 — `008-landing.mdx:40`                                            | Only in 008's exact frame ("will be checked before the rover leaves the platform"); no count, no deployment method. Safe.                        |
| `deploy`                | 1 (`:33`)                       | Released plan form                                                  | "'planned to deploy from the platform when the checks are complete'" mirrors 008's plan; not a deployment report. Safe.                          |
| `sample`                | 0                               | Payload-scope only                                                  | Not used. Safe.                                                                                                                                  |

## Internal-link resolution

All 10 internal links resolve to released public routes; none points at a working paper, a `docs/timeline/` path, or an unreleased route:

- `/news/008-landing/` (`:15`) — published route (release commit 74cba38).
- `/news/004-launch-provider/` (`:19`) — published.
- `/news/002-payload-selection/` (`:23`) — published.
- `/news/003-vehicle-design/` (`:33`) — published.
- `/news/005-launch/` (`:37`) — published.
- `/wiki/area/asteria-field/` (`:25`) — `website/wiki/asteria-field.mdx` has `section: area`, so the route is `/wiki/area/asteria-field/`; published.
- `/wiki/vehicle/rh-01-pathfinder/` (`:33`) — `website/wiki/rh-01-pathfinder.mdx` `section: vehicle`; published.
- `/wiki/vehicle/ariane-64/` (`:37`) — `website/wiki/ariane-64.mdx` `section: vehicle`; published.
- `/wiki/project/red-horizon/` (`:37`) — `website/wiki/red-horizon.mdx` `section: project`; published.
- `/#mission` (`:15`) — homepage anchor.

The released shorter `/wiki/asteria-field/` link anomaly on `website/wiki/ariane-64.mdx:63` is **not** copied here.

## Image / asset decision

- **Approved plate: candidate `02-terrain-forward`** (`~/.hermes/profiles/mars-ai-simulator-visuals/cache/images/comfyui-flux-2-klein_20260919_134741_f19cb2ac.png`, sha256 `fec43bacc306b73a09e181b26bf964dd79feb7c94dc21645e4b2e0f32c402c9b`, 1344×768 = exactly 16:9, PNG 8-bit RGB non-interlaced — re-verified on disk in this gate).
  - Pixel verdict (fresh full-frame vision read in this gate): first-person mast-height view; terrain fills the frame — gravel, dark angular rocks, dust ripples, a pale layered mesa near the horizon, uniform dusty ochre sky; platform corner and part of one rover wheel bottom-left for scale; **no text, logo, sign, people, wheel tracks, ramps, or deployed tool**; lighting flat and factual, not cinematic. Matches the timeline step's own instruction ("First imagery should establish terrain scale and operational reality, not look like a polished cinematic hero image").
  - Alt text (verbatim, approved): "Illustrative panorama of the fictional Red Horizon mission's landing terrain at Asteria Field from the rover's first mast-height view: a wide rocky plain scattered with dark rocks and dust ripples, a pale layered mesa near the horizon under a dusty ochre sky, with the edge of the landing platform and part of the rover's wheel just visible in one corner for scale. Not mission photography." — **390 characters / 390 bytes, ASCII-only (0 non-ASCII), sha256 `25e17733c63a84e8e9c5fc5135fd225af1eab028bf68475cebbe45f0b4abd4c1`** (measured in this gate; the manifest's own "377 characters" figure drifted and is superseded here, owner: visuals working paper — no shipped artifact depends on it).
  - Every alt cue verified present in the pixels by the gate's own vision read.
- **Candidate `01-rover-scene` (sha256 `9fc4bd2ed5d88aa620e514d9f141e267d2620e5d068faf649bcdb1b6ce35e1ca`, 1344×768) — verdict: usable as an alternative only, not placed.** Six open-mesh wheels in a rocker-bogie, short central mast with a stereo housing, stowed contact arm, platform, layered outcrops near the horizon; no text/people/tracks/ramps; the composition is subject-forward and reads closer to a product-visual/hero frame than the brief's terrain-scale first-image test, so the one-plate key places 02. The mast-height finding (manifest §Finding 3) is a cosmetic reading, not a defect; no further render is requested (004 precedent).
- **Media contract (approved as the proposal; dev owns the final key name and code shape):** new key `surface-panorama`, requirement tuple `{ plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }`, resolver in `src/features/news/media.ts` importing the plate from `src/lib/assets.ts` (`../../../docs/area/asteria-field-panorama-02.png`), test assertion in `website/test/news-media.test.mjs`, label `RH-01 Pathfinder · first surface panorama` (41 chars / 42 bytes, U+00B7 MIDDLE DOT at index 11, sha256 `8a56f33a915f5334023a99b8dadd4c49f87760dd5992e6d192f08e68a3c4080c`), **no caption** (one-plate key renders none; the illustrative statement reaches the reader through `mediaAlt`).
- Frontmatter to apply **only when the key lands** (dev card's act): `media: surface-panorama`, `mediaAlt: "<the approved 02 alt verbatim>"`, `mediaLabel: RH-01 Pathfinder · first surface panorama`; no `mediaCaption`.
- **Copy instruction for the dev card:** `cp -f /home/janpolacek/.hermes/profiles/mars-ai-simulator-visuals/cache/images/comfyui-flux-2-klein_20260919_134741_f19cb2ac.png docs/area/asteria-field-panorama-02.png`; the copied file must hash `fec43bacc306b73a09e181b26bf964dd79feb7c94dc21645e4b2e0f32c402c9b`.
- **Conditions recorded (human-owned residual, carried not blocking):** (a) the human story owner may redirect the plate choice to `01-rover-scene` or a further render at any time before the dev push — any swap invalidates this approval and requires a fresh alt-vs-pixels gate read; (b) rights: the plate is locally generated by the project's own visuals profile (flux-2-klein-base-4b through the image_gen/comfyui plugin, workflow sidecar + comfy prompt id `8664c2dd-6d45-41cf-bb93-8d7d50584bda`, seed 1327557701) from a text prompt with no third-party/stock/agency imagery, insignia, or real-person likeness; the publication-rights confirmation for the specific plate remains the human story owner's (mirrors condition C1 of `.agents/work/reviews/ariane-plates-selection.md:120-121`); (c) the hosted image path is still 429-exhausted (manifest finding 1) — routed to the operator to reset the usage cap before the next hosted generation; not a blocker for this release. The chosen-candidate rule in AGENTS.md/`docs/INSTRUCTIONS.md:58-63` is discharged by this recorded editorial selection with the human override right, per the project's plate-selection practice (`.agents/work/reviews/ariane-plates-selection.md` §6/§10; `.agents/work/reviews/002-payload-selection-media.md` §10).

## Surface and metadata

- `website/news/009-health-packet-panorama.mdx` frontmatter:
  - `title`: "Red Horizon returns first surface panorama and health packet" — declares the row's own events; no superlatives, no later-step promise.
  - `category: Surface 09`, `status: Health packet returned; first panorama available`, `linkLabel: Health packet and panorama update` — consistent with the released precedent (`Landing 08` / `Cruise 06`); no later-step milestone named.
  - `summary`: "First health packet returned and first surface panorama available, establishing terrain scale. Sensors check out; commissioning continues before movement." — carries the row's two events, terrain-scale framing, and the "before movement" boundary; no later-step fact.
  - `order: 9` — slot in the release order matches the step number.
  - `publication: draft` — fail-closed default until the release decision flips it (dev card's act).
  - `simulatedDate: 2031-09-17` — reviewer-assigned from `docs/SCENARIO.md:198`.
  - No `media*` field yet — the fields land with the key (dev card).
- No `datePublished`, `lastmod`, or schema-banned field present; schema `website/src/content.config.ts:45` accepts `simulatedDate: z.union([z.string().regex(simulatedDatePattern), z.date()]).optional()` and `2031-09-17` matches `simulatedDatePattern`.
- The rendered page states the date under the in-fiction label: `ArticleView.astro:27, :36` renders `simulatedDateText(...)` = `Simulated record date · 17 September 2031` (`src/lib/simulated-date.ts:28, :82-85`); `NewsCard.astro:54, :88` renders the same line on the card; `src/lib/seo.ts` deliberately keeps the simulated record date off every meta/search-engine surface. The dev card verifies this on the built page.
- `website/dist/` (read-only inspection): the slug is `draft`, so no `/news/009-health-packet-panorama/` route exists yet — the built route, the plate render on detail/newsroom/homepage/carousel, and the guard pass are the dev card's acceptance, not this gate's build.

## Coordination observations (not blockers)

- Reviewer-owned edits to the draft in this gate, recorded (not silent): (1) inserted `simulatedDate: 2031-09-17` in the frontmatter; (2) deleted the brief-internal phrase "at the released level" from the sensor sentence (4,583 B → 4,587 B). No other byte changed; the article is untracked in git (same state as 008 before its dev commit).
- The child dev card `t_2d42e950` waits on this gate; its body scopes the push to message `t_2d42e950: publish 009 first panorama update`. This record's release decision is the editorial approval the build card requires before it copies the plate, wires the key, flips `publication`, builds, and pushes.
- The shared checkout's HEAD is `74cba38` (`t_ba8e974b: publish 008 landing confirmation`); no pending commit of this slug exists. `.agents/skills/research-and-fact-check/SKILL.md` shows a modified state from a sibling card — not this card's file.

## Validation performed (2026-09-19, run 362)

- Re-hashed the draft at `571803344a6c4657bbe88c1096f59a9a51f2f9ec49281206ec52b82006959ca0` after the gate's own edits (pre-edit writer hash `618c3dc601cbc04bd2181d8c9ad1d593fa94544953534041c155f656834f1ac0` recorded in the manifest).
- Re-hashed `docs/SCENARIO.md` at `99206373bbb6140bac1202dc6cc5e80c6315bec649e49e223b61f305b636bc54` — row `:198` holds `17 September 2031 | First engineering health packet and platform panorama`; `:197` is the released landing row.
- Re-verified both candidate images on disk (sha256, `file` 1344×768 PNG 8-bit RGB non-interlaced) and ran fresh full-frame vision reads in this gate for both; approved plate 02's alt was verified cue-by-cue against its pixels; measured alt length/bytes/ASCII/sha256 and the label bytes myself (manifest figures superseded).
- Verified the four wiki route mappings (`section:` frontmatter), the Asteria Field region classes at `website/wiki/asteria-field.mdx:88-92`, and the 002 panorama definition at `002-payload-selection.mdx:40`.
- Banned-token and first-public-wording scans clean; confidentiality scan clean (no `docs/timeline/` path, no later-step date, no landing-design fact, no real institution/operator/agency name beyond the released Ariane 64 non-endorsement disclosure).

## Findings

No material canon, chronology, plausibility, spoiler, or surface failure.

Observations recorded (not blockers):

- The writer copied one brief-internal phrase ("at the released level"); removed by the gate as purely editorial.
- The Ariane 64 disclosure paragraph is the 008 boilerplate carried verbatim although the body does not otherwise discuss the launcher — consistent with the released house pattern, flagged for the owner's awareness (possible future tightening, not this gate's call).
- The manifest's alt-length figures (386/377) do not match the gate's measured values (380/390); the strings themselves are unaffected and are the approved byte-identical forms (sha256 above).
- The hosted image path is 429-exhausted; operator must reset the usage cap before the next hosted generation.

## Outcome

The package is `continuity clear`. The review status and the release decision are recorded in `.agents/work/reviews/009-health-packet-panorama.md` and on card t_26edaeda.
