# Review: 009-first-drive

Card: t_994c9f28 (Editorial final gate: 009-first-drive)
Reviewer: mars-ai-simulator-reviewer
Date: 2026-09-19 (session), run 380 — corrective re-gate (supersedes run 378)

## Inputs verified (run 380)

| Input                    | Path                                                                                                                                                                                                        | Hash / status                                                                                                                                                                                                                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft (corrected)        | `website/news/009-first-drive.mdx`                                                                                                                                                                          | sha256 `4085054bee2f5e82893b331a97ca019359bf6a0da4f6f80b75724480c5816de`, 5,415 B, 43 lines, `publication: draft`, `simulatedDate: 2031-09-30` (re-hashed at verdict time; reconstruction of run-378 bytes `acfe24be…` = 5,476 B succeeds byte-for-byte)                                    |
| Corrective               | t_b95f08c8 (`mars-ai-simulator-writer`)                                                                                                                                                                     | done; claims A1–A3 with new hash `4085054b…` / 5,415 B / 43 lines; verified here independently (reconstruction + token scans)                                                                                                                                                               |
| SEO package (integrated) | `.agents/work/seo/009-first-drive.md`                                                                                                                                                                       | hash `5a1c5566…`; title 51 ch, summary 149 ch; link list and alt recommendation consistent with the brief (no imagery — text-only)                                                                                                                                                          |
| Source pack              | `.agents/work/sources/009-first-drive.md`                                                                                                                                                                   | hash `5e4cfec7…`; claims C1–C10, C7 unresolved by design (no canonically fixed symptom); C9 link palette, C10 text-only                                                                                                                                                                     |
| Asset manifest           | `.agents/work/assets/009-first-drive/assets.md`                                                                                                                                                             | hash `517c3082…`; `no new imagery: text-only`, 0 candidates; validation-row discrepancy noted in run 378 (grep claim contradicted the file it hashed); corrected bytes now satisfy the manifest's forbidden-string intent                                                                   |
| Brief                    | `.agents/work/briefs/009-first-surface-checks.md`                                                                                                                                                           | hash `08668856…`; row 11 fixes the milestone/`simulatedDate`; §First drive allowed facts (`:17`) and forbidden list (`:27-31`); §Assets (`:37`) text-only                                                                                                                                   |
| Timeline step            | `docs/timeline/009-first-surface-checks.md`                                                                                                                                                                 | hash `7659fd4b…`; continuity control only; no symptom named; "movement tests must agree with wheel placement, terrain, power, and route logic" is private (F3 source)                                                                                                                       |
| Scenario                 | `docs/SCENARIO.md`                                                                                                                                                                                          | hash ``99206373…``; row ``:200`` = `30 September 2031                                                                                                                                                                                                                                       | First controlled drive and mobility assessment` (re-verified at verdict time) |
| Released context         | `website/news/008-landing.mdx`, `009-health-packet-panorama.mdx`, `009-egress.mdx`, `003-vehicle-design.mdx`, `005-launch.mdx`; `website/wiki/rh-01-pathfinder.mdx`, `asteria-field.mdx`, `red-horizon.mdx` | line citations re-verified; F2 attribution now cites the two articles that actually raised the open question (`008-landing.mdx:55-61`, `009-health-packet-panorama.mdx:38`); `009-egress.mdx` carries no open question (verified)                                                           |
| Content schema           | `website/src/content.config.ts:14-71`                                                                                                                                                                       | `publication` defaults to `draft`; `simulatedDate` optional union; no undeclared key in the draft                                                                                                                                                                                           |
| Surface                  | `website/src/features/news/ArticleView.astro:36`, `NewsCard.astro:88`, `src/lib/simulated-date.ts:28,82-85`, `src/lib/seo.ts`, `website/dist/` (read-only)                                                  | date renders as `Simulated record date · 30 September 2031` under the in-fiction label; seo.ts keeps the simulated date off every meta surface; no `/news/009-first-drive/` route and no "First drive update" card in the built news surface while draft (fail-closed, re-verified run 380) |

## Simulated record date

**`simulatedDate: 2031-09-30`** — drawn from the locked milestone row
`docs/SCENARIO.md:200`:

> `30 September 2031 | First controlled drive and mobility assessment`

The row is exactly the milestone this step (009-first-surface-checks, page 3) releases,
so the record date is the row's own calendar day — the date, inside the fiction, on
which the article is written. The milestone line is named in this record per the card's
acceptance. Applied by the reviewer in run 378 and preserved byte-for-byte by the
corrective (re-verified: line 6, `2031-09-30`).

Checks against the value:

- **Implies no event this step has not released** — the date IS the step's event.
- **Cannot be read as a launch / landing / other withheld mission date** — drive row
  `:200`; landing (`:197`, 16 Sep) is released by 008, egress (`:199`, 23 Sep) by
  009-egress; the next withheld row (`:201`, 31 Oct) is not implicated.
- **Contradicts no sentence already public** — the egress close-out ("No drive distances
  have been recorded yet, and commissioning continues", `009-egress.mdx:29`) holds until
  the record date, and this article is the record that reports the measured movement.
- **Articles stay in timeline order** — `2031-09-16` (008) → `2031-09-17` (009-p1) →
  `2031-09-23` (009-egress) → `2031-09-30` (this page).
- **Schema accepts the value** — parses as a UTC-midnight `Date`; `simulatedDatePattern`
  matches; `src/lib/simulated-date.ts` normalises to `30 September 2031`.

Published surface: `Simulated record date · 30 September 2031` under the in-fiction
label; seo.ts keeps it off `datePublished`, sitemap, and every meta surface; the built
sibling `website/dist/news/009-egress/index.html` already renders the same label pattern.
The dev card verifies the route after the flip.

## Review table (run 380 — carries 28 rows from run 378; F-rows re-judged)

| #  | Check                                                                         | Result                 | Evidence                                                                                                                                                                                                                                                                                                                                                                                  |
| -- | ----------------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Chronology agrees with the locked milestone row                               | Pass                   | Only `30 September 2031` (this step's row, `:15`, `:21`) plus released day references 16 Sep (`:197`) and 23 Sep (`:199`, `:15`) appear; no later-step date leaks.                                                                                                                                                                                                                        |
| 2  | Canon consistent with released public records                                 | Pass                   | Drive framing, six-wheel vocabulary, design constraints, operations model, region vocabulary, Ariane 64 non-endorsement, and disclosure all mirror released 008/p1/egress/003/005/wiki wording; no new mechanical, architectural, or area fact.                                                                                                                                           |
| 3  | Drive framed as measured mobility assessment, not long-range/science traverse | Pass                   | "short measured movement" (`:21`), "deliberate and commanded" (`:21`), "commissioning and mobility-assessment event, not a science traverse" (`:21`), "short, deliberate traverses" operations model only (`:27`, `:39`); no distances/durations/speeds/sol counts.                                                                                                                       |
| 4  | No sample/discovery/repair fact appears                                       | **Pass (F1 resolved)** | Corrected bytes contain no `sample` / `sample collection` token (0 hits; re-verified). Line 21 delimits "not a science traverse — no target approach, no contact tool deployment" without naming the withheld row `:201` milestone family. No discovery/repair language anywhere. Run-378 FAIL row superseded.                                                                            |
| 5  | Commissioning order within the 009 series is correct                          | Pass                   | health/pano (17 Sep) → egress (23 Sep) → first drive (30 Sep) per brief `:9-11`; the article resolves the egress next-step promise (`:17` quoting `009-egress.mdx:29`) and closes the series close-out (":39").                                                                                                                                                                           |
| 6  | Landing-era uncertainty at observable-symptom level only                      | Pass                   | "A minor landing-era condition is observable … does not prevent basic science or short traverses … No diagnosis is offered at this stage" (`:33`) — the brief's exact allowed outcome (`:17`); no invented symptom (C7 unresolved note honoured), no cause, no repair.                                                                                                                    |
| 7  | Open-question thread resolved correctly                                       | **Pass (F2 resolved)** | Line 35 now reads "raised in the [landing confirmation update](/news/008-landing/) and the [surface panorama update](/news/009-health-packet-panorama/)" — verified true: the open question appears in `008-landing.mdx:55-61` and `009-health-packet-panorama.mdx:38`; `009-egress.mdx` never carries it (no "question"/"condition"/"nominal plan" tokens). Run-378 FAIL row superseded. |
| 8  | Internal links resolve to released public routes only                         | Pass                   | 9 links: `/#mission` (MissionPanel.astro:6), `/news/008-landing/`, `/news/009-egress/`, `/news/009-health-packet-panorama/`, `/news/003-vehicle-design/`, `/news/005-launch/`, `/wiki/vehicle/rh-01-pathfinder/`, `/wiki/area/asteria-field/`, `/wiki/project/red-horizon/` — all present in built `dist/` or (news) released routes; no working-paper or `docs/timeline/` link.          |
| 9  | External links policy                                                         | Pass                   | No external links.                                                                                                                                                                                                                                                                                                                                                                        |
| 10 | Fiction disclosure present and prominent                                      | Pass                   | First sentence (`:15`) + final italicised paragraph (`:43`); same boilerplate as released 001–009 pages.                                                                                                                                                                                                                                                                                  |
| 11 | Ariane 64 stays at the released non-endorsement level                         | Pass                   | `:41` and `:43` repeat the released egress wording verbatim; `005-launch.mdx:17` supports "records the mission's departure aboard it"; no operator/agency/facility claim.                                                                                                                                                                                                                 |
| 12 | First-public-wording flags resolved                                           | **Pass (F3 resolved)** | `wheel placement` absent (0 hits; re-verified); line 23 uses the released six-wheel geometry language ("six-wheel geometry and suspension"), adding no new mechanical fact, no clearance/travel figure, no real-system naming. All other flagged tokens pass (scan table in the continuity record). Run-378 FAIL row superseded.                                                          |
| 13 | Voice / grammar / brand                                                       | Pass                   | Composed, candid, specific, modest Red Horizon voice; milestone terms defined on first use; date-scoped language; the "released environment/constraints/observable level" phrasings are the established released-X family.                                                                                                                                                                |
| 14 | Accessibility / structure                                                     | Pass                   | Frontmatter metadata, semantic `##` headings, short scannable paragraphs, one central update with only released context; no image (text-only), no alt/caption surface.                                                                                                                                                                                                                    |
| 15 | Frontmatter schema                                                            | Pass                   | `title`, `category: Surface 09`, `status`, `publication: draft`, `simulatedDate: 2031-09-30`, `summary` (149 ch ≤ 155), `linkLabel: First drive update`, `order: 9`, `accent: amber` — all declared fields; no `media*` key (text-only, consistent with the manifest); no undeclared key.                                                                                                 |
| 16 | `simulatedDate` fits the milestone table                                      | Pass                   | `2031-09-30` is the locked row `:200` value; reviewer-assigned per the standing rule; milestone line named in this record.                                                                                                                                                                                                                                                                |
| 17 | Spoiler / confidentiality scan                                                | Pass                   | No `docs/timeline/` content or paths; no later-step date/milestone (rows `:201`–`:207` untouched); no landing-design geometry; no invented telemetry; corrected bytes touch no withheld family.                                                                                                                                                                                           |
| 18 | Continuity verdict (separate file)                                            | Pass                   | `.agents/work/continuity/009-first-drive.md` — verdict `continuity clear` for text, metadata, and package (run 380).                                                                                                                                                                                                                                                                      |
| 19 | Asset decision (text-only)                                                    | Pass                   | Manifest `no new imagery: text-only`, 0 candidates; no media field in the article (verified); no drive-evidence plate exists and none is claimed.                                                                                                                                                                                                                                         |
| 20 | Corrective completeness (only the three hunks changed)                        | Pass                   | Reverse-application of A1–A3 to the corrected file reconstructs the run-378 bytes exactly (`acfe24be…`, 5,476 B) — byte-identical proof that no third change rode along; token scans confirm the three forbidden strings are gone and `simulatedDate: 2031-09-30` / `publication: draft` are untouched.                                                                                   |

## Findings (run 378) — all resolved in run 380

| ID | Location | Finding (run 378)                                                                                                                            | Resolution (run 380)                                                                                                                   |
| -- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| F1 | `:21`    | "no sample collection took place during this step" — first `sample` occurrence on the released surface; named the withheld row `:201` family | Clause removed by corrective A1; `sample` / `sample collection` = 0 hits in corrected bytes.                                           |
| F2 | `:35`    | False attribution: open question "carried through the [egress update]" — the egress article never carries it                                 | Attribution corrected to the [landing confirmation update] and [surface panorama update]; verified true on the published 008/p1 bytes. |
| F3 | `:23`    | "wheel placement and suspension geometry" — private acceptance wording                                                                       | Replaced with released "six-wheel geometry and suspension"; no new mechanical fact.                                                    |

No unresolved material failure remains.

## Final status

**`approved`.** Every review-table row passes on the corrected bytes; the three
run-378 findings are resolved and re-verified independently (reconstruction + token
scans). This approval is the editorial gate **and** the release decision — no separate
human approval sentence is required.

## Release decision (recorded on card t_994c9f28)

**RELEASED — approval of `website/news/009-first-drive.mdx` for publication on the
009-first-drive package release.**

- **Exact public scope**: one article `website/news/009-first-drive.mdx`,
  `publication: published`, `simulatedDate: 2031-09-30` (already in the reviewed
  bytes; the dev card t_6b058257 flips `publication` in the same change, message
  `t_6b058257: publish 009 first-drive update`). No imagery (text-only; no media
  key, no figure, no card art, no OG image). No new canon: the page's public facts
  are the locked row `:200` plus released step-009 context; nothing after row
  `:200` is released by this page.
- **Evidence**: article hash at the moment of the decision `4085054b…` (5,415 B, 43
  lines), re-hashed immediately before this record; run-378 hash `acfe24be…`
  reconstructed byte-for-byte from the corrected file; token scans clean
  (`sample` / `wheel placement` / `carried through`); `docs/SCENARIO.md` row `:200`
  verified; fail-closed pre-flip state verified in fact (no route, no card in the
  built news surface, `publication: draft`).
- **Conditions attached**: none beyond the recorded state — the approved revision is
  the corrected hash above; the dev card must flip `publication` without altering
  body bytes, keep `simulatedDate: 2031-09-30`, and verify the built route.
- **Confidentiality**: verified — corrected bytes name no `docs/timeline/` path,
  no later-step row, no landing-design geometry, no withheld telemetry.

## Card-state notes

- Parents t_9f288780 (assets) and t_b95f08c8 (corrective) both `done`;
  `unsatisfied_parents` empty — this completion is valid and promotes the dev child
  t_6b058257.
- Inputs re-verified immediately before writing this record: article hash
  `4085054b…`, `docs/SCENARIO.md` hash `99206373…`, `HEAD == origin/main ==
  53c1f98`. No concurrent movement observed (git status: only this chain's working
  papers and the untracked draft; a sibling's `.agents/work/assets/009-egress/assets.md`
  modification is outside this card's scope).

## Revision history

- **Revision 1 (run 378):** status `changes_requested` on hash `acfe24be…` (5,476 B);
  findings F1–F3; release decision withheld; corrective t_b95f08c8 created and linked.
- **Revision 2 (run 380):** status `approved` on hash `4085054b…` (5,415 B); all F-rows
  resolved; release decision recorded. This record supersedes Revision 1.
