# Continuity check: 003-vehicle-design

> **Pass 2 (2026-09-17 14:16–14:25 CEST) supersedes pass 1 and clears the package.** Pass 1 judged
> article `d2750840…` and returned it for revision (C1, C2). Corrective card `t_9f191d53` applied both
> changes and nothing else; pass 2 re-verified the corrected bytes `6a1caf17…` and records
> **`continuity clear`**. The pass-1 sections below are kept verbatim as the record of what was judged
> then; the current verdict, the byte-delta proof and the live-surface check are in
> §Pass 2 near the end.

## Check metadata

| Field         | Value                                                                                                                                                                                                                                                                                                       |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug          | `003-vehicle-design`                                                                                                                                                                                                                                                                                        |
| Article       | `website/news/003-vehicle-design.mdx` — pass 2 (current): SHA-256 `6a1caf17ff3e1bfb228451c925b2933a7ff0e2d4adc812467bd0d81e95273152`, 5,054 B, 744 body words, 0 body headings. Pass 1's `d27508403891557992aab2306def3ceb9c065d9e06c4c7463bc7bd0e6e30171d` (5,057 B) is superseded — see §Revision history |
| Timeline step | `003-vehicle-design` (`docs/timeline/003-vehicle-design.md`, SHA-256 `2fbb1a98f47d599ff32c001d93d3ae50157bea6c7db91b26d159cad6d81c9b0e`)                                                                                                                                                                    |
| Canon read    | `docs/vehicle/VEHICLE.md` (`0cea455f…`), `docs/SCENARIO.md` (`99206373…`), published 001 and 002, `docs/GENERAL.md` §Media policy                                                                                                                                                                           |
| Card          | `t_82680639` — `mars-ai-simulator-editor`, continuity half of the merged editorial gate (reassigned from the retired `mars-ai-simulator-continuity` profile)                                                                                                                                                |
| Role / skill  | Editor-in-chief; `.agents/skills/editorial-review/SKILL.md`                                                                                                                                                                                                                                                 |
| Checked       | Pass 1 2026-09-17 14:04–14:15 CEST (record `33a38509…`); pass 2 14:16–14:25 CEST — both against the live shared working tree, pass 2 additionally against the live production origin                                                                                                                        |
| Package state | `publication: draft`; no `media*` field; no 003 route in `website/dist/` **or** on the live origin; draft untracked in git; nothing committed by this card. The local working tree is 15 commits behind `origin/main`, which is what production builds — see §Live public surface                           |
| Verdict       | **`continuity clear`** (pass 2, article `6a1caf17…`) — pass 1's `return for revision` (C1, C2) was applied by `t_9f191d53` and re-verified; superseded hash and what moved: §Revision history                                                                                                               |

## Verdict (pass 1 — superseded by the pass-2 section below)

`return for revision`.

Every material claim the article makes about the **vehicle** agrees with released canon. The chronology
follows the release order, the fiction's technical descriptions are plausible and trace to the dossier,
and no later-step fact, no Asteria Field detail, no performance figure, no launch or landing material and
no gated name reaches the draft, its frontmatter, the SEO package's applied strings, the asset manifest's
placement row, or the built output.

**Two claims fail.** One is a canon-fidelity failure on a public-carrying sentence (C1: "no landing site has
been chosen" — a claim about the programme's internal state, traceable to no canonical source and
contradicted by the locked scenario). One is a card-face correction required by the same pass (C2: the
frontmatter `summary`'s closing clause can be read as describing a vehicle that exists, which step 003
forbids implying, and the string is over the snippet budget the SEO pass measured). Both fixes are wording
only, in one file, and both are with the owning role on corrective card `t_9f191d53`.

Everything else that came in from upstream — the build-guard withhold, the plate's wheel visibility, the
dossier's missing private provenance, the placeholder public title — is recorded below as routed,
non-blocking, and **not settled here**.

## Required changes (owner: `mars-ai-simulator-writer`, card `t_9f191d53`)

### C1 — blocking: the closing caution's landing-site clause

Current: "No launch vehicle has been named, no launch date has been stated, and **no landing site has been
chosen**." (line 66; keep the surrounding caveat.)

- The claim cannot be traced to canon: `docs/vehicle/VEHICLE.md` is silent on launch and landing, and the
  source pack's own "Unresolved" note says so.
- The locked scenario contradicts it: `docs/SCENARIO.md` §Asteria Field fixes the landing target and its
  landing/operations geometry as the "canonical local mission definition". What the release controls withhold
  is that material's **publication**, not its selection.
- It is a regression against published copy: `website/news/002-payload-selection.mdx:103` carries the
  qualified form ("…has been chosen **publicly**"). Article 003 drops the qualifier, so the newest published
  surface would claim more than the one before it.
- Required: reword so the clause speaks about the public record, not internal selection — preferred:
  "…and no landing site has been announced." (matching published 001's own framing, "landing-site design
  work stays out of the public record for now"); 002's "…has been chosen publicly." is an acceptable
  alternative. The step bars this article from announcing a landing site, so the replacement must assert
  nothing beyond the public record.

### C2 — required in the same pass: the frontmatter `summary`

Current (157 chars): "…Here is what it looks like, why it looks that way, and what it is built to do."

- "what it is built to do" can be read as describing a vehicle that exists. `docs/timeline/003-vehicle-design.md`
  §Constraints and decisions holds that "design freeze" does not imply the vehicle is built or launch-ready,
  and the article's own body says exactly that. This field travels into the news card and the search snippet.
- At 157 characters it is over the ~155-character budget measured by the SEO pass
  (`.agents/work/seo/003-vehicle-design.md` §3), which supplies a checked 149-character replacement.
- Required: reword to remove the built-vehicle implication and land at ≤155 characters.

## Inputs read

- Draft: `website/news/003-vehicle-design.mdx` (`d2750840…`, re-hashed 14:11:39 CEST — unchanged since the
  visuals card hashed it)
- Released step: `docs/timeline/003-vehicle-design.md` (`2fbb1a98…`); release control: `docs/SCENARIO.md`
  §Continuity and release controls (`99206373…`)
- Canon: `docs/vehicle/VEHICLE.md` (`0cea455f…`); `docs/SCENARIO.md` §Mission identity, §Scientific purpose,
  §Asteria Field, §Payload and onboard samples, §Power and thermal design
- Published canon: `website/news/001-project-announcement.mdx`, `website/news/002-payload-selection.mdx`
- Working papers: `.agents/work/sources/003-vehicle-design.md` (`087f9bea…`), `.agents/work/briefs/003-vehicle-design.md`
  (`255b2110…`), `.agents/work/assets/003-vehicle-design/assets.md` (`e60b9a7a…`),
  `.agents/work/seo/003-vehicle-design.md` (`fef0aac4…`), `.agents/work/releases/003-vehicle-design.md`
- Surfaces: `website/scripts/guards.mjs` (`b709ed8d…`), `website/dist/` (built 14:02:40), `website/src/lib/media.ts`,
  `website/src/features/news/media.ts`, `website/src/lib/assets.ts`, route list from `listRoutes()`

Assumptions: (1) public canon at the timestamps above is published 001, published 002, and this draft, and
nothing else; (2) the tree is edited concurrently by other profiles, so every result below is point-in-time
and names the command that produced it; (3) `.agents/work/` is a private working area, so a gated fact may be
named here only to bar it. No withheld value (coordinate, geometry figure, launcher, date, budget, unit
identifier) is written in this record.

## Claim-level continuity check

| #  | Claim in the draft                                                                                                                                                                                 | Canonical source                                                                                                   | Result                                                                                                                                        |
| -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Red Horizon is a fictional, AI-assisted Mars exploration programme                                                                                                                                 | `docs/SCENARIO.md` header; published 001                                                                           | PASS                                                                                                                                          |
| 2  | The programme now has its first surface vehicle design (a design freeze)                                                                                                                           | Step 003 §Private situation                                                                                        | PASS                                                                                                                                          |
| 3  | RH-01 Pathfinder is a compact robotic Mars surveyor that maps local terrain, investigates rocks in context, and establishes safe routes for later science targets                                  | `docs/vehicle/VEHICLE.md` §1                                                                                       | PASS — restated from canon, nothing added                                                                                                     |
| 4  | It is an instrument made mobile — not a car, a miniature tank, or a crew vehicle                                                                                                                   | VEHICLE.md §1                                                                                                      | PASS — canon's list also excludes a spaceplane; the draft omits one item and contradicts none                                                 |
| 5  | The design answers to dust, uneven terrain, limited power, a communication delay, and remote operations                                                                                            | VEHICLE.md §1                                                                                                      | PASS                                                                                                                                          |
| 6  | Low, broad rectangular equipment housing, roughly two metres in class                                                                                                                              | VEHICLE.md §2                                                                                                      | PASS — size only, and canon's own figure                                                                                                      |
| 7  | Equipment mass kept close to the chassis; corners protected and modestly rounded                                                                                                                   | VEHICLE.md §2                                                                                                      | PASS                                                                                                                                          |
| 8  | The front is the science end and carries the stowed contact arm; the rear is plain and uneventful — a sealed service panel with no second arm, exhaust assembly, or cargo rack                     | VEHICLE.md §2 and §7                                                                                               | PASS                                                                                                                                          |
| 9  | Warm white panels, matte ceramic-like finish; a small number of muted red identification panels integrated into the body                                                                           | VEHICLE.md §3                                                                                                      | PASS                                                                                                                                          |
| 10 | A dark, flat equipment deck on top that makes the mast mount easy to find                                                                                                                          | VEHICLE.md §3                                                                                                      | PASS                                                                                                                                          |
| 11 | No windows, no cockpit, no exposed wiring, no insignia; nothing on the vehicle names an agency                                                                                                     | VEHICLE.md §3                                                                                                      | PASS                                                                                                                                          |
| 12 | Exactly six broad open-mesh wheels — a front, middle, and rear pair — each with a clear circular hub and a broad perforated face over a dark inner structure                                       | VEHICLE.md §5                                                                                                      | PASS                                                                                                                                          |
| 13 | The wheel count is fixed: no seventh wheel, no track, no leg                                                                                                                                       | VEHICLE.md §5                                                                                                      | PASS                                                                                                                                          |
| 14 | Visible articulated suspension; links, pivots and hubs forming continuous chains rather than isolated bars; clearance to cross small stones without the body touching the ground                   | VEHICLE.md §5                                                                                                      | PASS                                                                                                                                          |
| 15 | A short central mast carrying one horizontal stereo-camera housing with a closely spaced pair of dark lenses                                                                                       | VEHICLE.md §4                                                                                                      | PASS                                                                                                                                          |
| 16 | Not a tower: no second camera mast, antenna cluster, dish, or radar boom                                                                                                                           | VEHICLE.md §4                                                                                                      | PASS                                                                                                                                          |
| 17 | One front-centre contact arm with exactly two connected joints and one small contact tool                                                                                                          | VEHICLE.md §6                                                                                                      | PASS on the article's side — the plate could not be read reliably for joint count (O3), and the alt text claims no joint count                |
| 18 | In travel configuration the arm nests in a shallow cradle in the front body, tool secured, whole assembly below the mast base                                                                      | VEHICLE.md §6                                                                                                      | PASS                                                                                                                                          |
| 19 | Materials read as a field machine: matte ceramic panels, subdued brushed metal on the arm, dark protected pivots, durable wheel mesh, small recessed fasteners                                     | VEHICLE.md §7                                                                                                      | PASS                                                                                                                                          |
| 20 | Baseline is clean and new: no accumulated dust, impact damage, or dramatic wear                                                                                                                    | VEHICLE.md §7                                                                                                      | PASS                                                                                                                                          |
| 21 | Engineering-reference studio appearance: neutral white floor, white background, broad soft light, faint grounded shadow                                                                            | VEHICLE.md §7                                                                                                      | PASS                                                                                                                                          |
| 22 | Four operating stages (baseline / early surface / mature / late mission), described as expected ageing, not as events that happened                                                                | VEHICLE.md §8                                                                                                      | PASS — framed exactly as the step requires; no surface event is narrated                                                                      |
| 23 | Payload scope agreed in the second public step: panoramic and navigation imaging, local weather observation, mineral and rock-context sensing, the close-contact tool                              | VEHICLE.md §9; `docs/SCENARIO.md` §Payload and onboard samples; published 002                                      | PASS                                                                                                                                          |
| 24 | Science role is observational and methodical; short deliberate traverses — survey, select, approach, observe, record, choose the next safe route; evidence before interpretation                   | VEHICLE.md §9                                                                                                      | PASS                                                                                                                                          |
| 25 | A fixed design is not a built vehicle; no launch vehicle has been named and no launch date has been stated                                                                                         | Step 003 §Constraints and decisions and §Spoilers and handoff; `docs/SCENARIO.md` §Continuity and release controls | PASS                                                                                                                                          |
| 26 | "no landing site has been chosen" (line 66)                                                                                                                                                        | **No canonical source; contradicted by `docs/SCENARIO.md` §Asteria Field**                                         | **FAIL — C1**                                                                                                                                 |
| 27 | Fiction disclosure: fictional vehicle described from the programme's own dossier; the studio views are illustrative artwork; no real space agency named or implied                                 | `docs/GENERAL.md` §Media policy; `docs/SCENARIO.md` generated-visual rule                                          | PASS                                                                                                                                          |
| 28 | Frontmatter: `title` placeholder, `category: Vehicle design 03`, `status: Design frozen`, `publication: draft`, `summary` (157 chars), `linkLabel`, `order: 3`, `accent: amber`; no `media*` field | Draft frontmatter; step 003 §Private situation; `website/src/content.config.ts`                                    | PASS except the `summary` clause — **C2**; the placeholder `title` is the content id, not a public title (O5)                                 |
| 29 | Internal links: the programme brief (`/#mission`) and the second public step (`/news/002-payload-selection/`)                                                                                      | Published 001 and 002; both routes present in `dist/`                                                              | PASS — both targets are live routes                                                                                                           |
| 30 | No performance statistics                                                                                                                                                                          | Step 003 §Allowed public angle ("avoiding unverified performance statistics")                                      | PASS — no speed, range, mass, power, duration, or budget figure; the only quantities are the six-wheel arrangement and canon's own size class |

## Chronology and release-order check

- The article is the third public step and presents itself as a design freeze, with the payload scope
  attributed to the second public step and linked there. No event is narrated out of order and no later
  milestone is referenced.
- No calendar date, sol count, duration, mass, or budget figure appears anywhere in the draft or its
  frontmatter (regex scan over years 2020–2039, month names, and unit strings returned 0 hits).
- The four operating-appearance stages are described as expectations about how the vehicle will age, and the
  article says so explicitly ("not events that have happened") — the correct posture for a step that releases
  no surface operations.
- The closing caution places the vehicle's readiness correctly _before_ launch and landing decisions; only
  its third clause overreaches (C1).

## Spoiler and confidentiality check, by surface

| Surface                                      | Check                                                                                                                                                                                                               | Result                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article body                                 | regex scan for launcher/spaceport/provider terms, the landing region and its geometry, gated date and year strings, real institutions, performance units, damage/discovery terms, and step-004+ operational terms   | 0 hits on launcher, region, dates/years, performance, damage/discovery. Four substring-level hits, all benign: `stud` in "studio" (line 70), "no accumulated dust, impact **damage**, or dramatic wear" (a negation, canon wording), "early **surface operations**" and "**traverse**s" (both canon's own stage/§9 vocabulary, licensed by the brief) |
| Frontmatter fields that travel into metadata | `title`, `summary`, `category`, `status`, `linkLabel`, `order`, `accent` read as a set                                                                                                                              | No gated term; no `media*` field. The `summary` clause is an implication problem (C2), not a disclosure                                                                                                                                                                                                                                               |
| Built output                                 | `listRoutes()` on the real guard module: `/404.html`, `/about/index.html`, `/google…html`, `/index.html`, `/news/001-project-announcement/index.html`, `/news/002-payload-selection/index.html`, `/news/index.html` | No 003 route, no 003 card, no listing entry. ``dist/`` carries 0 files matching `RH-01                                                                                                                                                                                                                                                                | Pathfinder` |
| Build guard, source half                     | `scanSourceForGatedReferences()` imported from `website/scripts/guards.mjs` (read-only probe; `checkDist()` deliberately not called because it prunes)                                                              | 0 offences on the current tree                                                                                                                                                                                                                                                                                                                        |
| Guard marker set                             | `gatedTextMarkers` read from the module                                                                                                                                                                             | Unchanged pre-003 state; the three offences the visuals card proved would fire on release are routed (O1), not settled here                                                                                                                                                                                                                           |
| Asset manifest placement row                 | `.agents/work/assets/003-vehicle-design/assets.md` read whole                                                                                                                                                       | Places nothing: no `media*` field was added, one 003 plate recorded, the scene image and every Asteria Field plate barred                                                                                                                                                                                                                             |
| SEO package's applied strings                | `.agents/work/seo/003-vehicle-design.md` §8 rows                                                                                                                                                                    | No change applied to the draft; recommendations only, none gated                                                                                                                                                                                                                                                                                      |
| Public surface                               | `git status` — draft untracked; `dist/` is gitignored; no push from any card in this lane                                                                                                                           | The draft cannot be live while untracked; no route exists to reach it                                                                                                                                                                                                                                                                                 |
| Landing-area publication state               | `docs/SCENARIO.md` §Continuity and release controls, 2026-09-17 wiki-area note                                                                                                                                      | The note bears on the landing area's publication state and is why C1 matters. At verdict time no wiki route exists in `dist/`, so nothing public contradicts published 001's own framing; the note is recorded as O7                                                                                                                                  |

## Plausibility and technical grounding

- The description is coherent engineering prose: a low equipment body for dust protection and mass
  concentration, six open-mesh wheels for load spreading on irregular ground, visible articulated suspension
  with working clearance, a short stereo mast for forward vision, and a two-joint contact arm stowed in a
  cradle to protect it while driving. No physics is claimed, no capability is quantified, and no real
  hardware or institution is named.
- The plate and the canon agree on the power architecture's visible consequence: the deck is a sealed dark
  instrument surface with no solar array field, matching the rover's power design in `docs/SCENARIO.md`
  §Power and thermal design (not a step-003 public fact, and not named in the article).
- The article keeps the fiction boundaries explicit in its own voice (fiction disclosure in the first
  sentence and in the closing note) and marks the imagery as illustrative.

## Uncertainty and fictional boundaries

- What the programme has not settled is written as not settled, in its own paragraph, and the article does
  not fill any open item with apparently canonical detail. C1 is the one place where a not-settled statement
  is put in terms of internal state rather than the public record, which is what makes it false rather than
  cautious.
- No fictional body is described as a real institution; no real agency, company, or mission appears.

## Render and canon observations (answered here, non-blocking)

**O2 — wheel visibility (raised by the visuals card).** An independent vision pass over
`docs/vehicle/canonical.png` (14:07 CEST, full frame) confirms the manifest's read: six wheels on the
vehicle, five visible from this angle, the far rear wheel occluded by the body; no seventh wheel, no
duplicate, no floating hardware. `docs/vehicle/VEHICLE.md` §Operating appearance stage 1 says the baseline
has "all six wheels visible against a neutral background". **Judgement:** the alt text as approved describes
the vehicle ("six open-mesh wheels on visible suspension") and claims nothing about what is visible from one
camera angle, so nothing published becomes false. The dossier sentence is a general statement about the
baseline configuration, and no single oblique view of a six-wheeled body can be required to show all six;
that reading needs no canon change and no alt-text change. If the dossier owner ever wants the sentence made
explicitly per-view, that edit belongs to the dossier, not to this package, and is optional.

**O3 — contact-arm joint count could not be verified from the plate.** Two vision passes over the arm read
circular pivot-like points on the folded assembly (readings differed between passes), and a third pass
resolved the wrong object (a suspension link). Conclusion: the rendered joint count is **not reliably
measurable** at this resolution, and I record it as unverified rather than as a conflict. It does not gate:
the article's "exactly two connected joints" traces to `docs/vehicle/VEHICLE.md` §6, the plate is the
approved studio reference, and neither the alt text nor the label states a joint count. Flagged for the
editorial gate as a "do not assert" item if any future caption or alt text is extended.

**O4 — the `docs/vehicle/` renders have no recorded private provenance** (no sidecar, prompt, or run record,
unlike `docs/area/AREA.md` §Map package and `docs/brand/BRAND.md`). The manifest could honestly record only
the canonical path and SHA-256. Gap owner: `project-documentation` per `docs/README.md`; nothing to fix in
this package.

## Routed, not settled here

**O1 — the `docs/vehicle/` withhold in `website/scripts/guards.mjs` is a release-control decision, not an
editorial one.** The visuals card proved three build offences on the release inputs (gated directory path,
emitted derivative name stem, and the released strings on the built page). The guard's own header and
`docs/SCENARIO.md`'s release controls say the dossier is withheld _until_ this step, so this is leftover
enablement rather than a content conflict — but the withhold list moves only with a recorded release
decision. Owner: the editorial gate `t_1e84c815` (decision), then `t_accf6f7a` (implementation and tests).
Not decided on this card, and not a continuity failure: nothing in the package asks for a withheld fact.

**O5 — the public title is still the content id** (`title: "003-vehicle-design"`). Publishing that verbatim
would print the slug as the headline. Owner: the editorial gate's Gate 3 decision (`.agents/work/releases/003-vehicle-design.md`
Gate 3); the writer's corrective card is explicitly barred from touching it.

**O6 — the SEO pass's heading outline (8 `h2`s), its title recommendation and its third internal link are
recommendations, not applied.** The draft has 0 body headings at 744 words. Editorial/writer call, made on
the editorial gate; not a continuity matter.

**O7 — landing-area publication state.** `docs/SCENARIO.md` §Continuity and release controls carries a
2026-09-17 note that the area wiki node is public at step 003 in publication state, with landing-design
facts still withheld from prose, alt text and captions. At verdict time no wiki route exists in `dist/` and no
wiki package has been approved, so nothing public conflicts with published 001's framing. Recorded because it
is the context that makes C1's wording matter rather than a stylistic preference: as the landing area becomes
publicly present, an unqualified "no landing site has been chosen" ages badly.

**O8 — housekeeping: a superseded corrective card is parked on the board.** This card's corrective was first
created as `t_81e80a10` with a scratch workspace, which could not have edited the shared tree; it was
re-created as `t_9f191d53` with a directory workspace. No agent on this board can archive another card
(this session's `hermes kanban` CLI refuses mutations from a delegated child context, and the kanban tools are
scoped to the caller's task), so `t_81e80a10` remains `ready` with two comments telling any dispatched worker
not to work it. Human action: `hermes kanban archive t_81e80a10`.

**O9 — shared-tree concurrency.** Every hash in this record was taken at 14:11:39 CEST, after the checks;
`website/dist/` was built by the visuals card at 14:02:40. The draft is untracked and unchanged since the
visuals card hashed it (`d2750840…`, identical at 14:03 and 14:11). If another profile moves the article or
the canon before the writer's corrective lands, this verdict must be re-run rather than carried over.

## What this verdict is not

`return for revision` on the continuity half of the merged gate is **not** a release decision, and it is not
a canon decision. Standing at this moment:

1. **Release decision — withheld.** The article stays `publication: draft`; no route, no card, no listing.
   The release decision is recorded on the editorial gate `t_1e84c815` and only by the merged editorial role.
2. **Canon confirmation — not given.** C1 must be corrected before canon confirmation can be recorded; the
   correction is a wording change to the public-record clause, and does not require any canon change.
3. **New canon — not touched.** No `docs/` file, no code, and no frontmatter was edited by this card. The
   guard withhold (O1), the dossier's wheel sentence (O2) and the provenance gap (O4) are routed to their
   owners, not settled here.

## Validation performed

All rows run 2026-09-17 between 14:04 and 14:15 CEST against the live shared tree.

| Check                                 | Command / source                                                                                                                    | Result                                                                                                                    |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Article hash, size, body metrics      | `sha256sum`; a stdlib script reading the file (`/tmp/editor003/textprobe.py`)                                                       | `d2750840…`, 5,057 B; summary 157 chars; body 744 words; 0 `h2`                                                           |
| Package hashes at verdict time        | `sha256sum` over draft, manifest, SEO package, source pack, brief, step file, scenario, dossier, guard                              | as listed in §Inputs read (14:11:39 CEST)                                                                                 |
| Claim-by-claim read                   | draft read whole against `docs/vehicle/VEHICLE.md` and `docs/SCENARIO.md`                                                           | 29 rows, 1 FAIL (C1)                                                                                                      |
| Gated-token scan (body + frontmatter) | regex over the whole file for launcher, region, geometry, years, institutions, performance units, damage/discovery, step-004+ terms | 4 benign substring hits, 0 material                                                                                       |
| Published-precedent check             | `grep` of `website/news/002-payload-selection.mdx` for the landing-site sentence                                                    | Published 002 carries the qualified form ("…chosen publicly") — evidence for C1                                           |
| Route list, read-only                 | `node /tmp/editor003/guards.mjs` importing `listRoutes()` and `scanSourceForGatedReferences()` from `website/scripts/guards.mjs`    | 7 routes, none for 003; 0 source offences                                                                                 |
| Built output marker scan              | `grep -rl -E "RH-01\|Pathfinder" website/dist`                                                                                      | 0 files                                                                                                                   |
| Build freshness                       | `stat` of `website/dist/index.html`                                                                                                 | Built 14:02:40 by the visuals card; no 003 route                                                                          |
| Plate identity and pixels             | `sha256sum docs/vehicle/*.png`; independent vision pass over `canonical.png`                                                        | `canonical.png` `8dbb33d5…`, 1,889,350 B, mtime 2026-09-15 23:19:27, unchanged; vision read matches the manifest (O2, O3) |
| Live/public state                     | `website/dist/` route list; `git status --short`                                                                                    | No 003 route; the draft is untracked, so no push can carry it to the site                                                 |
| Repository hygiene                    | `git status --short`                                                                                                                | This card writes only this record; no `docs/` file, no code, no frontmatter, nothing committed                            |

## Handoff

- **Next owner:** `mars-ai-simulator-writer` on `t_9f191d53` (C1 + C2, wording only, in
  `website/news/003-vehicle-design.mdx`; the card lists what is not theirs to decide).
- **Then:** this card resumes automatically (`t_82680639` is blocked on the corrective) and re-verifies the
  new bytes against released canon; on `continuity clear`, the editorial gate `t_1e84c815` proceeds to the
  editorial review, Gate 3, and the release decision, after which `t_accf6f7a` builds and `t_dcd80a99` records
  the release.
- **Human action requested, once:** archive the superseded card `t_81e80a10` (O8).
- **Not this card's to do:** no `publication` flip, no guard change, no `docs/` edit, no commit, no push, no
  deploy.

## Pass 2 — re-verification of the corrected bytes (2026-09-17 14:16–14:25 CEST)

**Verdict of this pass: `continuity clear`.** The corrective card `t_9f191d53` (`mars-ai-simulator-writer`)
applied C1 and C2 and nothing else; the corrected bytes re-verify against released canon on every point
pass 1 checked, and both failed claims now pass. No canon conflict remains, so nothing is escalated.

### Revision history

| Pass | Record SHA-256                         | Article SHA-256 | Verdict               | What moved around it                                                                                              |
| ---- | -------------------------------------- | --------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 1    | `33a38509b629ca81…` (42,125 B)         | `d2750840…`     | `return for revision` | C1 + C2 opened; corrective created as `t_9f191d53`; pass-1 sections above are kept verbatim and judge those bytes |
| 2    | this revision (supersedes `33a38509…`) | `6a1caf17…`     | `continuity clear`    | C1 + C2 applied by `t_9f191d53`; pass 1's other 28 claim rows carried over on the byte-delta proof                |

Downstream records that cite `33a38509…` cite pass 1's reading of `d2750840…`; the mismatch with the
hash of this file is that supersession, not tampering.

### Byte-delta proof — rebuilt here, not taken on trust

I reproduced the pre-edit bytes myself from the two claimed substitutions, without using the writer's
helper: revert the `summary` line to the pass-1 unquoted 157-character string, and `has been announced`
→ `has been chosen` in line 66 → SHA-256 `d2750840…`, 5,057 B — equal to the hash pass 1 recorded and
byte-identical to the corrective card's revert copy (`/tmp/rh-003-corrective/reverted.mdx`). `diff` between
the two revisions is **exactly two hunks**: the `summary` line and one word of line 66. Every claim row
that passed in pass 1 therefore still passes on these bytes; only C1 and C2 needed re-judging. Body
metrics are unchanged (744 body words, 0 body headings).

### C1 — re-judged: **PASS**

Line 66 now reads: "No launch vehicle has been named, no launch date has been stated, and no landing site
has been announced."

- Direction of the fix is right: the clause now speaks about the **public record** instead of the
  programme's internal state, which is what canon supports. `docs/SCENARIO.md` §Asteria Field fixes the
  landing target and its geometry as the canonical local mission definition; what the release controls
  withhold is that material's publication, not its selection.
- It now agrees with released canon instead of regressing against it: published
  `website/news/002-payload-selection.mdx:103` carries the same posture ("no launch vehicle has been
  named, and no landing site has been chosen publicly"), and that sentence is served live at
  `/news/002-payload-selection/` (verified 14:21 CEST). Published 001 announces a _target region_ and its
  planning centre, framed as mission planning, and does not carry the word "landing" at all.
- It respects the step: `docs/timeline/003-vehicle-design.md` §Spoilers and handoff bars a landing-site
  announcement, and the article makes none.
- The same three negatives hold for a second reason: no public surface carries them as positives. The
  live origin serves no page that names a landing site as chosen or announced (see §Live public surface).

### C2 — re-judged: **PASS**

The frontmatter `summary` is now the SEO package's recommended string verbatim
(`.agents/work/seo/003-vehicle-design.md:50`), 149 characters, ASCII, double-quoted because its `": "` is
invalid in an unquoted YAML plain scalar.

- Measured with the parser the pipeline resolves (`js-yaml` from `website/node_modules`): the frontmatter
  parses, the parsed `summary` is the intended 149-character string (no quote leakage), and the key set is
  unchanged — `title, category, status, publication, summary, linkLabel, order, accent`, 0 `media*` fields.
- The built-vehicle implication is gone: "has a frozen design" states the design-status fact step 003
  releases, and step 003 is explicit that "design freeze" does not imply the vehicle is built. The body's
  own caution ("describing a fixed design is not the same as having built one") is untouched.
- No gated term: the whole-file scan returns the same four benign substring hits as pass 1 (`stu` inside
  "studio"; "impact **damage**, or dramatic wear" — canon's own negation; "surface operations" and
  "traverse" as canon's stage/§9 vocabulary). 0 material hits, 0 year-like tokens, no launcher, no region
  name, no geometry, no performance figure, no Asteria Field material.

### Live public surface — verified on the production origin, not only in `dist/`

| URL                            | Result at 14:20–14:22 CEST                                                                                                                     |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `/news/003-vehicle-design/`    | **404**, 0 bytes — no route, no page, no card                                                                                                  |
| `/news/`                       | 200 — two cards only (001, 002); no 003 card, no RH-01/Pathfinder/frozen-design string                                                         |
| `/`                            | 200 — no 003 marker                                                                                                                            |
| `/wiki/`                       | 200 — index only; its links are site chrome (`/news/`, `/wiki/`, `/#mission`, `/#timeline`, `/about/`), no link to `/wiki/area/`, no "Asteria" |
| `/wiki/area/`                  | **404** — the landing-zone node is not public                                                                                                  |
| `/sitemap.xml`                 | 404 — no sitemap served                                                                                                                        |
| `/news/002-payload-selection/` | 200 — carries "no landing site has been chosen publicly" (the released posture C1 now matches)                                                 |

Local build, checked the same way: `listRoutes()` on `website/dist/` (built 14:14:34 CEST by `t_9f191d53`)
returns 7 routes, none for 003; `listGeneratedRoutes()` the same; `scanSourceForGatedReferences()` 0
offences; and no file in `dist/` matches any of the four `gatedTextMarkers` case-insensitively, which is
how `checkDist()` compares them. **One caveat the local build cannot answer:** this working tree is 15
commits behind `origin/main`, which is what Cloudflare builds — the wiki feature (`4500b95`) is live
upstream and absent locally, so `listRoutes()` on the local `dist/` is _not_ the live surface. Both were
measured; the live table above is the authoritative one, and it is what pass 1 could not show.

### Release-order condition attached to this clearance

`docs/SCENARIO.md` §Continuity and release controls (working tree `99206373…`) records the 2026-09-17
operator answer that the `/wiki/area/` landing-zone node is public at step 003 **in publication state**,
with its flip being this role's own release decision — landing-design facts (ellipse geometry, touchdown
zone, science-zone plan, hazard inventory, traverse logic, unit identifiers) still withheld from prose,
alt text and captions.

At verdict time the node is not public: 404 on the live origin, no wiki content package approved (Gate C
`t_c77be834` withheld), and the live `/wiki/` index links to no area page. So C1's third clause is true
today — and it is **order-sensitive**. If the `/wiki/area/` flip is recorded _before_ 003's own
publication flip, a public page describing the landing zone will sit next to an article saying no landing
site has been announced.

- **Condition:** before either flip, re-read this clause and published `002:103` against the area node's
  publication state, and re-word the clause if the area node is public first. This is a release-order
  condition, not a requested wording change today: the claim is true against released canon as it stands,
  and the ordering belongs to the release decision.
- **Owner:** the editorial gate `t_1e84c815` (release decision), then the release card `t_dcd80a99`.
  No canon change and no new card are required.

### Release precondition carried forward — the build guard (O1, re-confirmed)

`gatedTextMarkers` in `website/scripts/guards.mjs` (`b709ed8d…`, identical blob on `origin/main`) still
lists `RH-01` and `Pathfinder`, and the article legitimately names the vehicle that step 003 releases
(`docs/SCENARIO.md`: "RH-01 imagery waits for step 003"). A published 003 page therefore fails
`checkDist()` on `gated-text`, and the `docs/vehicle/` import fails the source scan on `gated-path`, until
the step-003 retirement lands. The retirement must ship in the same change as the flip, or the production
build fails closed. Decision: `t_1e84c815`; implementation: `t_accf6f7a`. Not a continuity failure and not
this card's to decide: nothing in the package asks for a withheld fact.

### Observations added in pass 2

**O10 — the wiki-area exception note lives only in the working tree.** `git show origin/main:docs/SCENARIO.md`
is `4cc0438b…` and does not carry the note; the working-tree canon is `99206373…`. Canon is the working
tree and `docs/` is not a served surface, so nothing public is affected — but the note, and the other
uncommitted canon edits, should be committed so a fresh clone reads the same canon. Owner: the human story
owner / `project-documentation`; not this package.

**O11 — the local tree diverges from what production builds** (15 commits behind `origin/main`, see the
live-surface note above). The build and deploy card must work on the up-to-date tree; a rebase that moves
the article or the canon invalidates this clearance and requires a re-run against the new bytes.

**O7 — updated by pass 2.** Pass 1 recorded the landing-area publication state from `dist/`; pass 2
measures it on the live origin (table above) and converts the observation into the release-order condition
stated above. Nothing public announces a landing site today.

Items left exactly as pass 1 recorded them, re-checked and unchanged: **O2** (the plate shows five of six
wheels from the canonical view; the alt text claims no per-view visibility, so nothing published becomes
false), **O3** (contact-arm joint count not reliably measurable in the plate; no public string asserts it),
**O4** (no recorded private provenance for the `docs/vehicle/` renders → `project-documentation`), **O5**
(the public title is still the content id → Gate 3 on `t_1e84c815`), **O6** (heading outline and the third
internal link are SEO recommendations, not applied), **O8** (duplicate card `t_81e80a10` still on the board
— human action: `hermes kanban archive t_81e80a10`).

### What this pass does not do

`continuity clear` is a canon-confirmation and continuity verdict, and it is **not** a release decision.
No `publication` field, `docs/` file, code file or canon file was changed by this card; the release
decision remains with the editorial gate `t_1e84c815`, and the article stays `publication: draft` with no
route and no listing in either the local build or the live site.

## Final label

`continuity clear` — pass 2, on article `6a1caf17ff3e1bfb228451c925b2933a7ff0e2d4adc812467bd0d81e95273152`
(5,054 B), superseding pass 1's `return for revision` on `d2750840…`. Release decision: none from this card
(withheld by default; `publication: draft`). Next: editorial gate `t_1e84c815` carries the editorial review,
Gate 3 and the release decision, and holds the `/wiki/area/` release-order condition above.
