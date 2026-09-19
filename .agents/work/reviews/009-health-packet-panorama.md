# Review: 009-health-packet-panorama

Card: t_26edaeda (Editorial final gate: 009-health-packet-panorama)
Reviewer: mars-ai-simulator-reviewer
Date: 2026-09-19 (session), run 362

## Inputs verified

| Input            | Path                                                                                                                                                                                                                                                                    | Hash / status                                                                                                                                                                                                                              |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Draft            | `website/news/009-health-packet-panorama.mdx`                                                                                                                                                                                                                           | sha256 `571803344a6c4657bbe88c1096f59a9a51f2f9ec49281206ec52b82006959ca0`, 4,587 B, 39 lines, `publication: draft`, `simulatedDate: 2031-09-17` (reviewer-assigned in this gate; pre-edit writer hash `618c3dc6…` from the asset manifest) |
| Source pack      | `.agents/work/sources/009-health-packet-panorama.md`                                                                                                                                                                                                                    | claims C1–C10 supported/bounded; C4/C5/C7 carry first-public-wording flags and the reviewer-owned calls, all resolved in this gate                                                                                                         |
| Asset manifest   | `.agents/work/assets/009-health-packet-panorama/assets.md`                                                                                                                                                                                                              | sha256 `570d2d63d58a87ccc27d6afdde71f4fb6686dbfdbc327f409f4dc5cfad0872d8`; two candidates (01, 02) with provenance, alts, label, placement, key contract                                                                                   |
| Brief            | `.agents/work/briefs/009-first-surface-checks.md`                                                                                                                                                                                                                       | row 9 fixes the milestone and the proposed `simulatedDate`; §Assets fixes the image decision (one bounded panorama candidate, 16:9)                                                                                                        |
| Timeline step    | `docs/timeline/009-first-surface-checks.md`                                                                                                                                                                                                                             | continuity control only; constraint "First imagery should establish terrain scale and operational reality, not look like a polished cinematic hero image" (`:12-14`)                                                                       |
| Scenario         | `docs/SCENARIO.md`                                                                                                                                                                                                                                                      | sha256 `99206373bbb6140bac1202dc6cc5e80c6315bec649e49e223b61f305b636bc54`; row `:198` = `17 September 2031 \| First engineering health packet and platform panorama`                                                                       |
| Released context | `website/news/008-landing.mdx`, `004-launch-provider.mdx`, `002-payload-selection.mdx`, `003-vehicle-design.mdx`, `005-launch.mdx`, `website/wiki/asteria-field.mdx`, `website/wiki/rh-01-pathfinder.mdx`, `website/wiki/ariane-64.mdx`, `website/wiki/red-horizon.mdx` | line citations verified against current bytes; wiki sections verified — `/wiki/area/asteria-field/`, `/wiki/vehicle/rh-01-pathfinder/`, `/wiki/vehicle/ariane-64/`, `/wiki/project/red-horizon/` all resolve                               |
| Content schema   | `website/src/content.config.ts:23, :45, :60-63`                                                                                                                                                                                                                         | `publication: z.enum(['draft','published']).default('draft')`; `simulatedDate` optional, `simulatedDatePattern`-constrained; `media*` optional; no undeclared key in the draft                                                             |
| Surface          | `website/src/features/news/ArticleView.astro`, `NewsCard.astro`, `src/lib/simulated-date.ts`, `src/lib/seo.ts`, `website/dist/` (read-only)                                                                                                                             | date renders as `Simulated record date · 17 September 2031`; seo.ts keeps the simulated date off every meta surface; no `/news/009-health-packet-panorama/` route in the draft state                                                       |

## Simulated record date

**`simulatedDate: 2031-09-17`** — drawn from the locked milestone row
`docs/SCENARIO.md:198`:

> `17 September 2031 | First engineering health packet and platform panorama`

The row is exactly the milestone this step releases, so the record date is the row's
own calendar day — the date, inside the fiction, on which the article is written.

Checks against the value before applying it:

- **Implies no event this step has not released** — the date IS the step's event (health packet + platform panorama).
- **Cannot be read as a launch / landing / other withheld mission date** — it is the day after the released landing row `:197` (16 Sep, released by 008); rows `:199+` are not implicated.
- **Contradicts no sentence already public** — 008's open question ("whether the commissioning sequence will complete entirely on the nominal plan") and 008's close ("Later surface milestones belong to subsequent updates that have not yet been released") both hold on 17 Sep; this article is the first of those subsequent updates.
- **Articles stay in timeline order by their `simulatedDate`** — the released chain ends at `2031-09-16` (008); `2031-09-17` follows it, so the date is the lower bound for the egress and first-drive records (`:199`, `:200`).
- **The schema accepts the pattern** — `simulatedDatePattern` (`/^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/`) matches `2031-09-17`.

The published surface (built `/news/009-health-packet-panorama/`) will render the date
under the in-fiction label `Simulated record date · 17 September 2031`
(`src/lib/simulated-date.ts:28, :82-85`; `ArticleView.astro:27, :36`);
`src/lib/seo.ts` keeps it off `datePublished`, sitemap and every meta surface, and it is
never presented as a real publication date. The dev card verifies the label on the built
page.

## Review table

| #  | Check                                                                     | Result | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -- | ------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Chronology agrees with the locked milestone row                           | Pass   | Only `17 September 2031` (this step's row) and the day-before reference to 16 Sep (released row `:197`, article 008) appear; no later-step date leaks.                                                                                                                                                                                                                                                                                                                           |
| 2  | Canon consistent with released public records                             | Pass   | Relay architecture, landing-day context, ramp/environment checklist, deployment plan, open question, and the non-endorsement disclosure all mirror the released 008/004/002 wording; the three Asteria Field region classes match the released wiki vocabulary (`asteria-field.mdx:88-92`).                                                                                                                                                                                      |
| 3  | Health packet defined and routed at the released architecture level       | Pass   | `:19` defines the term plainly and routes it through the released relay architecture (`004-launch-provider.mdx:37-43`); confirms only the released 008 set (power, communications) plus generic core systems; no telemetry, cadence, fields, or timestamps.                                                                                                                                                                                                                      |
| 4  | First-image framing establishes terrain scale, not cinematic hero imagery | Pass   | The approved plate `02-terrain-forward` (candidate verdict in the continuity record §Image/asset decision) is a first-person mast-height view: terrain fills the frame, flat factual lighting, only a platform corner and one wheel for scale; the timeline step's own instruction (`docs/timeline/009-first-surface-checks.md:12-14`) is the test and the plate meets it. The article text frames the panorama as establishing "terrain scale and operational reality" (`:23`). |
| 5  | No egress / drive / sample / discovery / repair fact appears              | Pass   | Token scan clean; the only movement-adjacent words are the released planning forms ("before any movement", "planned to deploy from the platform when the checks are complete"); no milestone name or date from rows `:199+` or steps 010–011.                                                                                                                                                                                                                                    |
| 6  | Mast/core sensor check-out stays at the released payload scope            | Pass   | `:29` names only released-scope instruments (stereo cameras on the short central mast, navigation imaging, environment/weather sensors, "rock sensing"); the private payload list is not imported. One brief-internal phrase ("at the released level") removed by the gate as purely editorial — recorded, not silent.                                                                                                                                                           |
| 7  | Commissioning order within the 009 series is correct                      | Pass   | Health packet + panorama (17 Sep) precedes egress (23 Sep) and first drive (30 Sep) in the brief's own table (`009-first-surface-checks.md:9-11`); this page reports zero movement and keeps the released "ramps will be checked before the rover leaves the platform" framing.                                                                                                                                                                                                  |
| 8  | Landing geometry stays name-only                                          | Pass   | No ellipse, P0, science zone, hazard, traverse, or AF-* unit identifier in prose, frontmatter, links, or the approved alt text.                                                                                                                                                                                                                                                                                                                                                  |
| 9  | Early-uncertainty wording is an uncaused open question                    | Pass   | `:35` is generic ("whether the commissioning sequence will complete entirely on the nominal plan remains an open question") with no premature cause — same form as 008's open question.                                                                                                                                                                                                                                                                                          |
| 10 | Internal links resolve to released public routes only                     | Pass   | All 10 links resolve (`/news/008-landing/`, `/news/004-launch-provider/`, `/news/002-payload-selection/`, `/news/003-vehicle-design/`, `/news/005-launch/`, `/wiki/area/asteria-field/`, `/wiki/vehicle/rh-01-pathfinder/`, `/wiki/vehicle/ariane-64/`, `/wiki/project/red-horizon/`, `/#mission`); no working-paper or `docs/timeline/` link.                                                                                                                                   |
| 11 | External links policy                                                     | Pass   | No external links.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 12 | Fiction disclosure present and prominent                                  | Pass   | First sentence (`:15`) + final italicised paragraph (`:39`).                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 13 | Ariane 64 stays at the released non-endorsement level                     | Pass   | `:37` and `:39` repeat the released disclosure verbatim; no new architecture or operator claim.                                                                                                                                                                                                                                                                                                                                                                                  |
| 14 | Image decision explicit and consistent with the brief                     | Pass   | Reviewer approves exactly one placed plate (`02-terrain-forward`, sha256 `fec43bac…`); candidate `01-rover-scene` is `usable as an alternative only, not placed`; provenance (workflow sidecar, comfy prompt id, seed), rights statement, label and alt are recorded; the dev card gets the copy command and the required hash.                                                                                                                                                  |
| 15 | Asset provenance by content hash                                          | Pass   | Both candidates re-hashed on disk in this gate — `fec43bac…` (02), `9fc4bd2e…` (01) — matching the manifest; `file` confirms 1344×768 PNG 8-bit RGB non-interlaced for both.                                                                                                                                                                                                                                                                                                     |
| 16 | Image alt/caption/label truth-vs-pixels and accessibility                 | Pass   | Approved alt (02) verified cue-by-cue against a fresh full-frame vision read: 390 characters / 390 bytes, ASCII-only, sha256 `25e17733…` (the manifest's "377" figure drifted — superseded here; owner: visuals working paper); key contract `captionCount: 0` so no caption is emitted; label `RH-01 Pathfinder · first surface panorama` (U+00B7 maintained).                                                                                                                  |
| 17 | Voice / grammar / brand                                                   | Pass   | Composed, candid, specific, modest Red Horizon voice matching the released 005–008 chain; technical terms defined on first use; one brief-internal phrase removed by the gate.                                                                                                                                                                                                                                                                                                   |
| 18 | Accessibility / structure                                                 | Pass   | Frontmatter metadata; semantic `##` headings; short scannable paragraphs; one central update with only released context.                                                                                                                                                                                                                                                                                                                                                         |
| 19 | Frontmatter schema                                                        | Pass   | `title`, `category`, `status`, `publication: draft`, `simulatedDate: 2031-09-17`, `summary`, `linkLabel`, `order: 9`, `accent: amber` all match the schema; no `media*` field until the key lands (dev); no undeclared key.                                                                                                                                                                                                                                                      |
| 20 | `simulatedDate` fits the milestone table                                  | Pass   | `2031-09-17` is the locked row `:198` value; reviewer-assigned per the standing rule.                                                                                                                                                                                                                                                                                                                                                                                            |
| 21 | Spoiler / confidentiality scan                                            | Pass   | No `docs/timeline/` content or paths; no later-step date or milestone; no landing-design fact; no real institution/operator/agency name beyond the released non-endorsement disclosure.                                                                                                                                                                                                                                                                                          |
| 22 | Continuity verdict (separate file)                                        | Pass   | `.agents/work/continuity/009-health-packet-panorama.md` — verdict `continuity clear`.                                                                                                                                                                                                                                                                                                                                                                                            |

## Reviewer-owned edits to the draft (recorded, not silent)

1. Frontmatter: inserted `simulatedDate: 2031-09-17` (line 6) — the reviewer's own field per the standing rule.
2. Body: deleted the brief-internal phrase "at the released level" from `:29` ("Mast and core sensors have checked out."). Purely editorial; no factual meaning changed.

Net delta: 4,583 B → 4,587 B (+4 B). Article hash at the moment of this decision:
`571803344a6c4657bbe88c1096f59a9a51f2f9ec49281206ec52b82006959ca0`. No other byte of
the article changed in this gate.

## Final status

**`approved`.** No material failure remains unresolved.

## Release decision (recorded on card t_26edaeda)

The package is **releasable**. The exact public scope:

- **One article**: `website/news/009-health-packet-panorama.mdx`, with `publication:
  published` and `simulatedDate: 2031-09-17` (the simulatedDate is already applied in the
  reviewed bytes; the dev card applies the `publication` flip in the same change).
- **One placed plate**: candidate `02-terrain-forward`, copied by the dev card to
  `docs/area/asteria-field-panorama-02.png` with the command
  `cp -f /home/janpolacek/.hermes/profiles/mars-ai-simulator-visuals/cache/images/comfyui-flux-2-klein_20260919_134741_f19cb2ac.png docs/area/asteria-field-panorama-02.png`;
  the copied file must hash `fec43bacc306b73a09e181b26bf964dd79feb7c94dc21645e4b2e0f32c402c9b`.
- **New media key** (dev card owns the final name and code shape): `surface-panorama`,
  requirement tuple `{ plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }`,
  resolver importing `../../../docs/area/asteria-field-panorama-02.png`, test assertion in
  `website/test/news-media.test.mjs`.
- **Frontmatter media fields, applied when the key lands** (verbatim):
  - `media: surface-panorama`
  - `mediaAlt: "Illustrative panorama of the fictional Red Horizon mission's landing terrain at Asteria Field from the rover's first mast-height view: a wide rocky plain scattered with dark rocks and dust ripples, a pale layered mesa near the horizon under a dusty ochre sky, with the edge of the landing platform and part of the rover's wheel just visible in one corner for scale. Not mission photography."` (390 chars / 390 bytes, ASCII-only, sha256 `25e17733c63a84e8e9c5fc5135fd225af1eab028bf68475cebbe45f0b4abd4c1`)
  - `mediaLabel: RH-01 Pathfinder · first surface panorama` (U+00B7 must not be normalised)
  - no `mediaCaption` — the key renders no per-plate caption and the schema rejects one.
- **Rendered surfaces** that carry the plate: the `/news/009-health-packet-panorama/`
  lead figure, the newsroom card, the homepage card, and the carousel — per the manifest's
  verified placement notes (`object-fit: contain`, no crop).
- **No other public file, canon change, deployment, secret, DNS, or external media upload
  is authorised by this decision.** The dev card `t_2d42e950` carries the plate copy, the
  key wiring, the frontmatter flip, the build/guard/preview validation, and the commit and
  push under the standing 2026-09-17 instruction, with commit message
  `t_2d42e950: publish 009 first panorama update`.

**Article hash at the moment of the decision**: `571803344a6c4657bbe88c1096f59a9a51f2f9ec49281206ec52b82006959ca0`
(pre-flip, reviewer-owned edits included); the dev card records the post-flip hash.

**Conditions attached to the approval** (from the continuity record §Image/asset decision):
(a) the human story owner may redirect the plate choice to `01-rover-scene` or a further
render before the dev push — any swap invalidates this approval and requires a fresh
alt-vs-pixels gate read; (b) publication rights for the specific plate remain the human
story owner's residual confirmation (mirrors condition C1 of
`.agents/work/reviews/ariane-plates-selection.md:120-121`); (c) the hosted image path is
429-exhausted (operator resets the usage cap before the next hosted generation) — none of
these blocks this release.

## Next owner / action

- `mars-ai-simulator-dev` (t_2d42e950): apply the release decision — copy the approved
  plate to `docs/area/asteria-field-panorama-02.png` (required sha256 `fec43bac…`), add the
  `surface-panorama` key with the approved contract and strings, apply the frontmatter
  media fields and the `publication: published` flip, validate (typecheck, build, guard,
  preview), verify the built page states `Simulated record date · 17 September 2031` under
  its in-fiction label and renders the plate on detail/newsroom/homepage/carousel, then
  commit-and-push with message `t_2d42e950: publish 009 first panorama update`, report the
  commit SHA and push branch/remote, and end with clean `git status --short` and empty
  `git log origin/main..HEAD`.
- Note ahead of the dev run: the configured postbuild guard (`website/scripts/guards.mjs`)
  may need nothing for this release (no gated marker is retired by step 009); the dev card
  will prove the guard on its own run.
