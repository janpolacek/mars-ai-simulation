# Continuity verdict: 009-egress

Card: t_f3dd8fd2 (Editorial final gate: 009-egress)
Reviewer: mars-ai-simulator-reviewer
Date: 2026-09-19 (session), run 369
Draft: `website/news/009-egress.mdx`, SHA-256 `dfc63f511d1b8c8c2e1f40ba46c170d2404e9e36a24abd10b947d3e66b2ad7cd`, 3,357 B, 31 lines, `publication: draft`, `simulatedDate: 2031-09-23` (reviewer-assigned in this gate)
Step: `009-first-surface-checks` — locked milestone row `docs/SCENARIO.md:199` (`23 September 2031 | RH-01 egress from the landing platform`)

## Verdict (text and canon)

**`continuity clear` for the article text.** Every claim agrees with the released step
and the locked scenario; the article is the second record of the 009 commissioning series
(health packet + panorama 17 Sep, released as 009-p1; this record, 23 Sep; first drive 30
Sep withheld), and it releases exactly the row this step covers: RH-01 egress from the
landing platform on 23 September 2031. Egress is framed as a commissioning step, not a
discovery; no drive / sample / discovery / repair / diagnosis / stratigraphy / traverse /
later-step fact appears anywhere in prose, frontmatter, links, or metadata; no calendar date
after 23 September 2031 appears; rows `:200`+ are never named or dated. The record date is
assigned at `2031-09-23` from `docs/SCENARIO.md:199`.

**`return for revision` for the package** — the image candidate fails the brief's own pixel
scene (see §Image / asset decision): no inclined ramp is visible, the rover is composed
straddling a flat deck edge with wheel tracks behind it on the deck, and the frame reads as
a drive-off rather than the approved "descending from the landing platform to the surface on
the ramps" egress moment. A corrective card is opened for `mars-ai-simulator-visuals`; the
review card blocks on it and resumes when the corrected candidate lands.

## Chronology and canon

| #  | Check                                                                      | Result | Evidence                                                                                                                                                                                                                                                                                                                                                                                                   |
| -- | -------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | The page covers the milestone this step releases.                          | Pass   | `docs/SCENARIO.md:199` is the locked row for this card; the article names "23 September 2031" (`:15`, `:17`) and the row's event (egress: "the rover left the landing platform and is now on the Martian surface", `:15`). The 008/p1-era boundary that kept `:199` as a spoiler is resolved by this step — the row's own date and name are this page's release (source pack C2).                          |
| 2  | Calendar days trace to locked rows only.                                   | Pass   | `23 September 2031` × 2 (`:15`, `:17`) — the page's own row; "landed at Asteria Field on 16 September" (`:15`) is the released landing row `:197` (article 008, `simulatedDate: 2031-09-16`). No date after 23 Sep 2031 appears; rows `:200`–`:207` never named or dated.                                                                                                                                  |
| 3  | Egress defined plainly on first use; milestone name released by this page. | Pass   | `:17` defines the term ("Egress is the term for the rover leaving its landing platform and descending onto the surface") and prefers "left the landing platform" in prose — the source pack's C4 first-public-wording guidance.                                                                                                                                                                            |
| 4  | Commissioning frame, not discovery/repair/science.                         | Pass   | The step's frame is the commissioning series (brief header `009-first-surface-checks.md:3`); "working as planned / performed as planned / operated as designed" outcome language stays at the released assessment level. No sample, mineral, discovery, repair, diagnosis, or later-step note (C8, C10; forbidden ledger).                                                                                 |
| 5  | Ramps stay at the released outcome level.                                  | Pass   | "The platform ramps supported the descent" (`:21`) and "the ramps functioned" (`:23`) upgrade the released check item ("the ramps will be checked…", `008-landing.mdx:40`, `009-health-packet-panorama.mdx:36`) to the brief's outcome ("platform ramps … performed as planned", `:16`). Never the ramp count (two), never the deployment method (private `docs/SCENARIO.md:131-132`), no telemetry.       |
| 6  | Mobility hardware defined via released vocabulary only.                    | Pass   | `:21` — "six-wheel system with broad open-mesh wheels arranged in a front, middle, and rear pair and visible articulated suspension" mirrors `website/wiki/rh-01-pathfinder.mdx:59-73` and `003-vehicle-design.mdx:34-39`; "enough clearance to pass over small stones" is the released wheel-clearance fact (`rh-01-pathfinder.mdx:70-71`). No new mechanical facts, no wheel/drive/suspension telemetry. |
| 7  | Next step stays at the brief's close-out; zero movement on this record.    | Pass   | `:27` — "The next step is measured movement testing. No drive distances have been recorded yet" is the brief's exact egress-page phrase (`:16`); "commissioning continues" keeps the released p1 frame; "Later surface milestones belong to subsequent updates that have not yet been released" mirrors p1 `:36` / 008 `:65-67`. No "will drive on 30 September", no row `:200` name/date.                 |
| 8  | Platform relay role stays at released level.                               | Pass   | `:23` — "the platform itself remains in place, serving as the relay station" mirrors the released 004/ariane-64 vocabulary ("the platform stays where it lands", `004-launch-provider.mdx:39-40`; "surface relay", `wiki/ariane-64.mdx:35`). No UHF naming, no platform power/thermal detail (`docs/SCENARIO.md:134-140, :154-155` boundaries held).                                                       |
| 9  | Landing geometry stays name-only.                                          | Pass   | "Asteria Field" appears as the released destination name only; no ellipse, P0, science zone, hazard inventory, traverse logic, or AF-* identifier anywhere (incl. the image decision below).                                                                                                                                                                                                               |
| 10 | Landing-era uncertainty handled at released level.                         | Pass   | The article does not mention the landing-era uncertainty at all — no invented concern, symptom, or diagnosis (source pack C9's fail-closed default). Purely acceptable.                                                                                                                                                                                                                                    |
| 11 | Ariane 64 stays at the released non-endorsement level.                     | Pass   | `:29` and `:31` repeat the released disclosure verbatim (no real agency/launcher operator/launch facility is a partner or has endorsed the programme); the body adds no architecture or operator claim.                                                                                                                                                                                                    |
| 12 | Fiction disclosure present and prominent.                                  | Pass   | First sentence (`:15`) + final italicised paragraph (`:31`); same boilerplate as released 001–009 pages.                                                                                                                                                                                                                                                                                                   |

## Spoiler safety

| Family                                                              | Step file / row                                                                  | Status on this page       | Notes                                                                                                                                                                                                                          |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| This page's own milestone                                           | `:199` (23 Sep 2031)                                                             | **Released by this page** | The article names the date and the milestone ("egress from the landing platform") — that is this step's release.                                                                                                               |
| First controlled drive and mobility assessment                      | `:200` (30 Sep 2031)                                                             | Not referenced            | "Next step is measured movement testing" is the brief's own close-out phrase, a next-step statement only; no drive event, no distance, no row name/date.                                                                       |
| First onboard sample collection and mineral analysis                | `:201` (31 Oct 2031)                                                             | Not referenced            | No "sample", "mineral", or analysis language.                                                                                                                                                                                  |
| Mineral-stratigraphy campaign                                       | `:204` (18 Apr 2032)                                                             | Not referenced            | No campaign wording.                                                                                                                                                                                                           |
| One-Mars-year / final-year / end-of-life / listening / archive rows | `:205`–`:207`                                                                    | Not referenced            | None named.                                                                                                                                                                                                                    |
| Steps 010–011                                                       | `docs/timeline/010-operations-and-discovery.md`, `011-repair-and-end-of-life.md` | Not referenced            | No later-step event, discovery, or repair language.                                                                                                                                                                            |
| Later 009 pages (first drive)                                       | `009-first-drive`                                                                | Not referenced            | No anticipation in prose, metadata, or links.                                                                                                                                                                                  |
| Landing-design geometry                                             | `docs/SCENARIO.md:279` gate                                                      | Not referenced            | Name-only Asteria Field.                                                                                                                                                                                                       |
| `docs/timeline/` content or paths                                   | private tree                                                                     | Not referenced            | Absent from prose, frontmatter, links, and the approved article-side text. (One working-paper citation in the visuals manifest is corrected in this record — see §Image / asset decision; the manifest is not a public route.) |
| Currently withheld sibling milestone                                | 30 Sep / 31 Oct rows                                                             | Not referenced            | None.                                                                                                                                                                                                                          |

## Plausibility

- The egress record reads as a plain commissioning update: rover left the platform, ramps
  and mobility hardware performed as planned, next step is movement testing. No invented
  telemetry, timing, sol counts, distances, or pass counts.
- The two outcomes asserted ("ramps supported the descent", "mobility hardware worked as
  planned") are exactly the brief's egress-page allowed facts, and each stays name-only at
  the released vocabulary level.
- The relay-station sentence is the released architecture fact restated; no new system claim.
- The "no drive distances recorded yet" negative is true on the record date per the locked
  order (first drive is row `:200`, later) and matches the brief's own wording.

## First-public-wording scan (released-route scan)

| Token                                       | Hits in this draft                                      | Released-route hits (2026-09-19)                                            | Verdict                                                                                                     |
| ------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `egress` / `egressed`                       | 8 (`:15`, `:17`, `:21` ×2, `:27`)                       | 0                                                                           | Milestone name (row `:199`); THIS page releases it; defined plainly on first use. Safe.                     |
| `ramp(s)`                                   | 4 (`:21` ×2, `:23`, `:27`-adjacent summary)             | 2 — `008-landing.mdx:40`, `009-health-packet-panorama.mdx:36` (check level) | Upgraded to the outcome level by this step's brief (`:16`); no count, no deployment method. Safe.           |
| `measured` / `movement testing`             | 2 (`:27` + summary)                                     | 0                                                                           | Brief-approved close-out phrase for this page (`:16`); next-step statement only. Safe (reviewer-confirmed). |
| `movement`                                  | 2 (`:27`)                                               | 1 — `009-health-packet-panorama.mdx:36` ("before any movement")             | Only in the released next-step frame; no movement outcome claimed. Safe.                                    |
| `mobility`                                  | 3 (`:21`, `:23`)                                        | Released — `rh-01-pathfinder.mdx:35, :57, :137, :140`, `003:34-39`          | Released vocabulary for the six-wheel system. Safe.                                                         |
| `drive` / `drives` / `driving`              | 1 (`:27` — "No drive distances have been recorded yet") | Released only in design/planning context                                    | The brief's exact negative close-out ("No drive distances yet", `:16`). Safe.                               |
| `deploy` / `deployment`                     | 0                                                       | Released                                                                    | Not used on this page (the rover has deployed; a fresh "planned to deploy" would be stale). Safe.           |
| `sample`, `discovery`, `repair`, `diagnos*` | 0                                                       | 0                                                                           | Absent. Safe.                                                                                               |

## Internal-link resolution

All 9 internal links resolve to released public routes; none points at a working paper, a
`docs/timeline/` path, or an unreleased route:

- `/#mission` (`:15`) — homepage anchor.
- `/news/008-landing/` (`:15`) — published route (release commit 74cba38).
- `/news/009-health-packet-panorama/` (`:17`) — published (release commit 238bc9d).
- `/news/003-vehicle-design/` (`:21`) — published.
- `/wiki/vehicle/rh-01-pathfinder/` (`:21`) — `website/wiki/rh-01-pathfinder.mdx` `section: vehicle`; published.
- `/wiki/vehicle/ariane-64/` (`:23`) — `website/wiki/ariane-64.mdx` `section: vehicle`; published.
- `/wiki/area/asteria-field/` (`:27`) — `website/wiki/asteria-field.mdx` `section: area`; published.
- `/news/005-launch/` (`:29`) — published.
- `/wiki/project/red-horizon/` (`:29`) — `website/wiki/red-horizon.mdx` `section: project`; published.

The released shorter `/wiki/asteria-field/` link anomaly on `website/wiki/ariane-64.mdx:63`
is **not** copied here (source pack C12 note).

## Image / asset decision (material finding — candidate returned)

- **Candidate under review:** `01-egress_00003_.png` (`~/.hermes/profiles/mars-ai-simulator-visuals/cache/images/comfyui-flux-2-klein_20260919_170600_01egress.png`, sha256 `d0ea259504feafa60cd2d3257e5c2b52f50026db0c9d0b451c5f24bbbce9d433`, 1200×896 PNG 8-bit RGB non-interlaced, 1,741,086 B — re-verified on disk in this gate).
- **Verdict: RETURN for a corrected render (`changes_requested`).** The plate does not
  satisfy the brief's own scene spec (`.agents/work/briefs/009-first-surface-checks.md:36`:
  "RH-01 descending from the landing platform to the surface on the ramps, full-rover
  scene … no drive or sample action") nor the source pack's pixel constraints (C11: "the
  scene is the egress moment … must not show it driving away"; forbidden ledger: "Drive
  evidence in pixels or prose beyond the egress moment: no driving away from the platform,
  no traverse distance, no deployed sample tool").
  - **No inclined ramp visible.** Four independent vision reads (two full-frame, two
    zoomed crops; 2026-09-19, this gate) consistently describe a **flat raised deck /
    paved slab** with a sharp vertical edge — one full-frame read explicitly: "the entire
    structure is a flat, perfectly horizontal, level deck … where the flat surface drops
    down vertically (or near vertically)". A pixel-structure measurement (stdlib PNG
    decoder, /tmp/egress_measure.py + /tmp/egress_measure2.py) confirms a bright flat
    band (y≈0–360, mean L≈197–225, bright fraction ≈0.98–1.00) with a sharp transition at
    y≈336–430 and no second inclined surface between deck and ground. The manifest's
    "ramp visible" claim is not supported by the pixels.
  - **Rover composed mid drive-off, with wheel-track evidence behind it.** The zoomed read
    reports the rover straddling the deck edge — right wheels on the platform, left wheels
    on natural regolith — with "parallel wheel tracks … located BEHIND the rover …
    extending from the rover's current position backward along the platform", and the
    scene "reads as the rover mid-descent—actively driving off the platform onto the
    natural surface". The brief's pixel rule is "no drive or sample action" and "Drive
    evidence … beyond the egress moment: no driving away from the platform, no traverse
    distance". The dark-run scan found track-like segments on the deck band
    (e.g. 8–40 px runs at y≈300–360, x≈340–1024) consistent with that reading.
  - **Alt text would misdescribe the published image.** The manifest's proposed alt
    ("Illustrative full-rover scene of the fictional RH-01 Pathfinder rover **stationary
    on a ramp** … no dust plume, no motion blur; **restrained dust and short wheel tracks
    on open rocky terrain**") asserts a stationary-on-ramp scene and open-terrain dressing,
    whereas the pixels show a flat deck, a straddling/drive-off pose, and track marks on
    the deck surface. Per the standing media-gate rule, an alt that does not verify
    cue-by-cue against the pixels is not approvable.
  - **Manifest working-paper citation error.** `.agents/work/assets/009-egress/assets.md`
    line 56 cites `docs/timeline/009-first-surface-checks.md:117-121` for the "restrained
    dust and short wheel tracks" dressing allowance. The timeline file is 25 lines and is
    private continuity material; the actual released source is
    `website/wiki/rh-01-pathfinder.mdx:117-121` (operating-appearance stages). The
    corrective card must fix the citation and keep private paths out of the manifest.
- **Corrective routing:** a corrective card for `mars-ai-simulator-visuals` is created in
  this gate (bounded brief: corrected render showing the rover ON a visible inclined ramp,
  stationary, no wheel tracks behind it on the deck, no drive-away composition, six wheels,
  stowed contact arm, warm-white body with muted red panels, 4:3, illustrative — with the
  corrected alt text to be re-verified cue-by-cue by the reviewer). It is linked as the
  **parent** of this review card, and this review card blocks with `kind=dependency` until
  the corrective completes.
- **Not sanctioned as placed:** no reuse of the p1 panorama plate
  (`docs/area/asteria-field-panorama-02.png`, sha256 `fec43bac…`) is sanctioned at this
  pass — the egress record needs an egress scene; the p1 panorama is terrain-forward and
  its own article uses it. The corrective should produce the step's egress plate; reuse
  remains a fallback only if the reviewer sanctions it explicitly after the corrected
  render.

## Surface and metadata

- `website/news/009-egress.mdx` frontmatter (current, post-gate):
  - `title`: "Red Horizon rover leaves landing platform for the surface" — the row's event, plain language.
  - `category: Surface 09`, `status: RH-01 egressed from the landing platform; ramps and mobility hardware performed as planned`, `linkLabel: Egress update`, `order: 9`, `accent: amber` — consistent with the released 009-p1 precedent; no later-step milestone named.
  - `summary`: "On 23 September 2031, RH-01 left its landing platform at Asteria Field. Mobility hardware performed as planned; next step is measured movement testing." — 151 chars (≤155), dated, outcome + close-out, no later-step fact. (Minor reviewer edit recorded: "for Asteria Field" → "at Asteria Field" — the rover is already at Asteria Field; "for" implied it was departing toward it.)
  - `publication: draft` — fail-closed default until the release decision (dev card's act).
  - `simulatedDate: 2031-09-23` — reviewer-assigned from `docs/SCENARIO.md:199` (see the review record §Simulated record date).
  - No `media*` field yet — the fields land with the key once the corrective render is approved (dev card's act).
- No `datePublished`, `lastmod`, or schema-banned field; schema `website/src/content.config.ts:45` accepts both the string and the unquoted `Date` form of `2031-09-23` (matches `simulatedDatePattern`; js-yaml resolves the unquoted form as a UTC-midnight `Date`, normalised by `src/lib/simulated-date.ts`).
- The rendered page will state the date under the in-fiction label: `simulatedDateText(...)` = `Simulated record date · 23 September 2031` (`src/lib/simulated-date.ts:28, :82-85`; `ArticleView.astro:27, :109-114`; `NewsCard.astro:54, :88`); `src/lib/seo.ts` keeps it off datePublished/sitemap/OG/time. The dev card verifies the label on the built page.
- `website/dist/` (read-only): no `/news/009-egress/` route exists while the slug is `draft` (grep for `009-egress` and `01-egress` in `dist/` returns nothing). The built route, plate render on all four surfaces, and the guard pass are the dev card's acceptance.

## Coordination observations (not blockers)

- **Git movement mid-run (recorded):** the shared checkout moved from
  `238bc9de` (= origin/main) to HEAD `8de7193d` (local-only, **not pushed**) during this
  gate; `origin/main` stays `238bc9de`. The sibling commit adds working papers and the
  previously-untracked draft `website/news/009-egress.mdx` (writer version) to the local
  tree. No public file, route, or release moved: the push-triggered live surface
  (https://mars-ai-simulation.janpolacek.workers.dev) is untouched, and `git log
  origin/main..HEAD` shows no release of this slug. The article's final reviewed bytes
  (with the gate's simulatedDate and the two text edits) are the working-tree version
  hashed above.
- `git status --short`: `website/news/009-egress.mdx` is untracked-now-tracked in the
  sibling commit plus my edits; `.agents/skills/research-and-fact-check/SKILL.md` shows a
  pre-existing sibling modification — not this card's file.
- The `<corrective>` card is created and links to this review as its parent; the dev card
  `t_b9751c8c` stays gated until this review completes after the corrective.
- No reviewer push is made in this pass: the gate is `changes_requested`, not a release.

## Validation performed (2026-09-19, run 369)

- Re-hashed the draft at `dfc63f511d1b8c8c2e1f40ba46c170d2404e9e36a24abd10b947d3e66b2ad7cd`
  (3,357 B, 31 lines) after the gate's own edits; parsed the frontmatter with the
  pipeline's own `js-yaml` (values, types, pattern) clean.
- Re-verified `docs/SCENARIO.md:199` = `23 September 2031 | RH-01 egress from the landing
  platform` (SCENARIO sha256 `99206373…`, unchanged from the 009-p1 gate).
- Candidate plate re-hashed on disk (`d0ea2595…`, 1200×896, PNG 8-bit RGB non-interlaced)
  and measured by stdlib PNG decode; four vision reads run in this gate (2 full-frame, 2
  zoomed) — all consistent on flat-deck / straddle / track-behind / no-ramp findings.
- Banned-token, first-public-wording, confidentiality, and internal-link scans clean;
  `website/dist/` grep clean for the slug; wiki route mappings verified from the released
  009-p1 record's own verification (same four sections).
- `website/test/news-listing.test.mjs` and `splash-scope.test.mjs` references to the slug
  are incidental fixture text, not route requirements for a draft.

## Findings

- **Material (blocks release):** the egress image candidate fails the brief's pixel scene
  (no visible ramp; rover composed mid drive-off; wheel-track evidence on the deck behind
  it; alt text would misdescribe). Corrective card opened; review status
  `changes_requested`; release decision withheld pending the corrected render.
- Observations (not blockers):
  - The manifest's "ramp visible" constraint claim is not pixel-supported; the corrected
    candidate must make the ramp unambiguous.
  - The manifest's working-paper citation error (`docs/timeline/…:117-121` — file is 25
    lines and private; the released source is `website/wiki/rh-01-pathfinder.mdx:117-121`).
  - The article text itself is fully clear — no text-side changes are required beyond the
    two recorded reviewer edits (see review record).

## Outcome

The **text is `continuity clear`**; the **package verdict is `return for revision`** because
the image candidate fails the brief's pixel constraints. The review status and the
corrective routing are recorded in `.agents/work/reviews/009-egress.md` and on card
t_f3dd8fd2; the release decision is withheld until the corrected candidate passes a fresh
gate read.

---

## Revision 2 — corrective re-gate (run 372, 2026-09-19)

Supersedes the run-369 package verdict (`return for revision` / image FAIL). The
corrective card `t_cf88028e` produced the corrected candidate and this pass re-gates it
on the same evidence standards as run 369 (hash on disk, vision reads, stdlib pixel
measurement). All chronology, canon, spoiler, and plausibility rows for the article text
carry over unchanged — the article bytes are byte-identical
(sha256 `dfc63f511d1b8c8c2e1f40ba46c170d2404e9e36a24abd10b947d3e66b2ad7cd`,
3,357 B, 31 lines; HEAD == working tree).

### Image / asset decision — revised to APPROVED

- **Candidate under review:** `01-egress.png`, sha256
  `4c3968e94f4b372698abbf1960ff335801a731ae0b0e7a94dc466711f92a5536`, 1,706,094 B,
  1200×896 PNG 8-bit RGB non-interlaced — byte-identical at the scratch source
  (`/tmp/egress-gen/stories/rh-01-pathfinder/scenes/01-egress.png`) and the visuals
  profile cache (`comfyui-flux-2-klein_20260919_175100_01egress.png`).
- **Verdict: APPROVED for the egress release.** Every cue the rejected candidate failed
  is verified on the corrected pixels:
  - Inclined ramp: confirmed by full-frame and zoomed vision reads (diagonal slope from
    ground-left to platform-right, "definitely a diagonal slope, not a flat surface with
    a drop-off") and by a color-neutrality pixel probe showing the neutral ramp/deck mass
    descending diagonally from upper-right (y≈180–240, x>800) to mid-lower rows
    (y≈480–540, x≈540–720); the bright band ends by y≈360, unlike the rejected flat
    bright band (y≈0–360) with the sharp near-vertical transition at y≈336–430.
  - Stationary: no motion blur, no dust plume.
  - No drive-off composition: rover fully on the ramp; no wheel touches open ground or
    an edge.
  - No wheel tracks behind: none on the deck/ramp between the rear wheels and the
    platform (only machining texture); restricted bright-band scan found 0 track-like
    runs across 313 bright rows.
  - Six open-mesh wheels with articulated suspension: five visible, sixth occluded
    behind the body; standard six-wheel rocker-bogie silhouette consistent with
    released vocabulary (`website/wiki/rh-01-pathfinder.mdx:59-73`).
  - Contact arm stowed; warm-white body, muted red identification panels, dark
    instrument deck, short central stereo mast.
- **Alt text — APPROVED, verified cue-by-cue against the pixels.** 515 bytes / 515
  chars, sha256 `966de431333ec821f4bc0488a6d392c1dd0bc96bb25bb5f216c2755c1fbbd34a`;
  every clause (inclined ramp, stationary, no dust plume, no motion blur, no wheel
  tracks behind, stowed contact arm, illustrative label) matches the measured pixels.
- **Citation fix verified:** the manifest now cites
  `website/wiki/rh-01-pathfinder.mdx:117-121` (operating-appearance stages incl.
  "restrained dust and short wheel tracks") — the released source; no
  `docs/timeline/` path remains in the manifest.
- **No p1 panorama reuse needed.** The corrective plate is approved in place for this
  release; the reuse fallback is not exercised.

### Verdict (revision 2, package)

**`continuity clear` for the text and the package.** The record date remains assigned at
`2031-09-23` from `docs/SCENARIO.md:199`. The release decision (exact public scope,
article hash at the moment of decision, plate hash, media key contract, alt bytes,
conditions) is recorded in `.agents/work/reviews/009-egress.md` §Release decision and on
card t_f3dd8fd2. No reviewer commit/push in this pass: the dev card `t_b9751c8c` owns
the flip, plate copy, key wiring, guard, build, and push.
