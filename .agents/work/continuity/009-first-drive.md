# Continuity verdict: 009-first-drive

Card: t_994c9f28 (Editorial final gate: 009-first-drive)
Reviewer: mars-ai-simulator-reviewer
Date: 2026-09-19 (session), run 380 — corrective re-gate (supersedes run 378)
Draft: `website/news/009-first-drive.mdx`, SHA-256 `4085054bee2f5e82893b331a97ca019359bf6a0da4f6f80b75724480c5816de`, 5,415 B, 43 lines, `publication: draft`, `simulatedDate: 2031-09-30`
Corrective: t_b95f08c8 (`mars-ai-simulator-writer`) — F1–F3 applied; reconstruction of
run-378 bytes `acfe24bebe5e0c31a44fb9d2c1abe8554f758fd2d8cb6f713639773ecde35780` (5,476 B)
succeeds byte-for-byte from the corrected file, so every row judged in run 378 carries
over and only F1–F3 are re-judged here.
Step: `009-first-surface-checks` — page 3 of 3; locked milestone row `docs/SCENARIO.md:200` (`30 September 2031 | First controlled drive and mobility assessment`)

## Verdict

**`continuity clear` for the article text, metadata, and package.**

Run 378 found the article text and metadata `continuity clear` with three material
package findings (F1–F3: negated "sample collection" mention; false egress attribution;
private "wheel placement" wording). The corrective card t_b95f08c8 applied the three
clause fixes; this re-gate re-verified them in fact:

- **F1 fixed** — the `sample` family is absent from the corrected bytes (0 hits);
  the withheld row `:201` milestone family is no longer named in prose. Line 21 now
  ends the science-traverse delimitation at "no target approach, no contact tool
  deployment."
- **F2 fixed** — line 35 now attributes the open question to the two articles that
  actually published it: `008-landing.mdx` ("An open question", :55-61) and
  `009-health-packet-panorama.mdx:38`. The egress article never carried it (verified:
  no "question"/"condition"/"nominal plan" tokens in `009-egress.mdx`).
- **F3 fixed** — line 23 now uses the released six-wheel geometry language
  ("six-wheel geometry and suspension"); "wheel placement" has 0 hits.

Each fixed clause remains true on the record date 2031-09-30. The drive stays framed
as a short, measured, commissioning-level movement — not a science traverse, no
long-range traverse claims; the landing-era condition is reported at the
observable-symptom level only; no sample/discovery/repair fact appears; no later-step
row (`:201+`), step 010–011 event, `docs/timeline/` path, landing-design geometry, or
invented telemetry is present. The record date is `2031-09-30` from
`docs/SCENARIO.md:200`.

## Chronology and canon (carried from run 378; re-verified unchanged)

| #  | Check                                                         | Result | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -- | ------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | The page covers the milestone this step releases.             | Pass   | `docs/SCENARIO.md:200` is the locked row for this card; the article names "30 September 2031" (`:15`, `:21`) and both milestone terms — "first controlled drive" and "mobility assessment" — defined plainly on first use (`:17`). Releasing the row's own date and milestone names is this page's step release (source pack C2; the 008/:198/:199 convention).                                                                     |
| 2  | Calendar days trace to locked rows only.                      | Pass   | `30 September 2031` ×2 (`:15`, `:21`) — the page's own row. "landed at Asteria Field on 16 September" (`:15`) = released row `:197` (article 008, `simulatedDate: 2031-09-16`); "egressed from its landing platform on 23 September" (`:15`) = released row `:199` (article 009-egress, `simulatedDate: 2031-09-23`). No date after 30 Sep 2031 appears; rows `:201`–`:207` never named or dated.                                   |
| 3  | Commissioning order within the 009 series is correct.         | Pass   | Health/pano (17 Sep) → egress (23 Sep) → first drive (30 Sep) per the brief table (`009-first-surface-checks.md:9-11`). The article is the series close-out: it resolves the egress "next step is measured movement testing" promise (`009-egress.mdx:29` quoted verbatim at `:17`) and the 008/p1 open question.                                                                                                                   |
| 4  | Drive framed as measured mobility assessment, not a traverse. | Pass   | "short measured movement" (`:21`), "deliberate and commanded" (`:21`), "a commissioning and mobility-assessment event, not a science traverse" (`:21`); no distances, durations, sol counts, speeds, pass counts, or route detail. "Short" is the only magnitude word the brief licenses (brief `:17`).                                                                                                                             |
| 5  | Mobility hardware described via released vocabulary only.     | Pass   | `:23` — six broad open-mesh wheels in a front/middle/rear pair on each side, visible articulated suspension, clearance over small stones without the body resting on the ground — mirrors `website/wiki/rh-01-pathfinder.mdx:59-71` and `003-vehicle-design.mdx:34-39`. F3 removed the private "wheel placement" wording; no new mechanical fact.                                                                                   |
| 6  | Design constraints restated at released level.                | Pass   | `:27` — "limited power, uneven terrain, and the communication delay that means every decision on the surface is made remotely" condenses the released `003-vehicle-design.mdx:20-22` constraint list; no power-technology fact (radioisotope/americium = 0 released hits).                                                                                                                                                          |
| 7  | Operations model restated at released level.                  | Pass   | "short, deliberate traverses … surveys the terrain, selects a target, approaches it, observes, records, and chooses the next safe route" (`:27`) matches `003-vehicle-design.mdx:65-66`; "put instruments in front of the right ground" (`:39`) matches `rh-01-pathfinder.mdx:132`.                                                                                                                                                 |
| 8  | Region vocabulary at released level.                          | Pass   | "rocks, dust, and layered outcrops" (`:29`) is the released p1 terrain wording (`009-health-packet-panorama.mdx:26`); the wiki `asteria-field.mdx:83-93` evidence classes are name-only at the released level. No new area fact, no landing geometry. Observation: the phrase's released source is the p1 article, not the wiki entry itself — immaterial, not a fail.                                                              |
| 9  | Landing-era condition at observable-symptom level only.       | Pass   | "A minor landing-era condition is observable … does not prevent basic science or short traverses … No diagnosis is offered at this stage" (`:33`) — exactly the brief's allowed outcome (brief `:17`); the C7 unresolved note is honoured: no specific symptom invented, no cause assigned, no repair. "monitor/tracking how it develops" is the timeline's licensed "what the team is still monitoring" angle, reviewer-confirmed. |
| 10 | Open-question thread resolved without contradicting canon.    | Pass   | The question ("whether the commissioning sequence would complete entirely on the nominal plan") matches the released p1 sentence (`:38`) and the 008 sentence (`:57-58`); the resolution ("did not complete entirely on the nominal plan", `:33`) is the observable-level answer the private timeline permits. F2 fixed the attribution: line 35 now cites 008 and p1, the two articles that actually raised it.                    |
| 11 | Ariane 64 stays at the released non-endorsement level.        | Pass   | `:41` and `:43` repeat the released paragraph and closing disclosure verbatim from `009-egress.mdx:31, :33`; `005-launch.mdx:17` ("launched aboard Ariane 64") supports "records the mission's departure aboard it". No real operator/agency/facility claim.                                                                                                                                                                        |
| 12 | Fiction disclosure present and prominent.                     | Pass   | First sentence (`:15`, `[fictional, AI-assisted Mars exploration programme](/#mission)`) + closing italicised paragraph (`:43`); `/#mission` resolves to `src/features/mission/MissionPanel.astro:6` (`<section id="mission">`).                                                                                                                                                                                                    |

## Spoiler safety

| Family                                                              | Row / step                                                                       | Status on this page       | Notes                                                                                                                                                 |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| This page's own milestone                                           | `:200` (30 Sep 2031)                                                             | **Released by this page** | Article names the date and both milestone terms — that is this step's release.                                                                        |
| First onboard sample collection and mineral analysis                | `:201` (31 Oct 2031)                                                             | Not referenced            | F1 removed the negated mention; the `sample` family has 0 occurrences in the corrected bytes (re-verified). Next withheld milestone family not named. |
| Mineral-stratigraphy campaign                                       | `:202` (18 Apr 2032)                                                             | Not referenced            | No campaign wording.                                                                                                                                  |
| One-Mars-year / final-year / end-of-life / listening / archive rows | `:203`–`:207`                                                                    | Not referenced            | None named or dated.                                                                                                                                  |
| Steps 010–011                                                       | `docs/timeline/010-operations-and-discovery.md`, `011-repair-and-end-of-life.md` | Not referenced            | No discovery, repair, or later-step event language.                                                                                                   |
| Landing-design geometry                                             | `docs/SCENARIO.md:279` gate                                                      | Not referenced            | "Asteria Field" name-only; no ellipse, P0, science zone, hazard, AF-* unit, coordinates, or traverse logic.                                           |
| `docs/timeline/` content or paths                                   | private tree                                                                     | Not referenced            | Absent from prose, frontmatter, links, and metadata.                                                                                                  |
| Invented telemetry                                                  | —                                                                                | Not referenced            | No distances, sols, durations, speeds, pass/timestamp/signal/power/thermal/comm figures, image counts, resolution figures.                            |

## Plausibility

- A first drive as a short, commanded, measured movement during commissioning, followed
  by a mobility assessment, is standard surface-operations practice and matches the
  released "measured movement testing" promise (`009-egress.mdx:29`) and the released
  "short, deliberate traverses" operations model (`003-vehicle-design.mdx:65-66`).
- The claim that the assessment confirmed the released six-wheel geometry "works as
  designed for local-terrain movement" stays at the outcome level the brief licenses
  ("short measured movement"; movement tests agree with wheel placement/terrain/power/
  route logic), with no mechanical figure attached. The phrase "six-wheel geometry and
  suspension" (F3 fix) is a released-level rendering, not a new mechanical fact.
- The observable landing-era condition is reported without symptoms, cause, or repair —
  plausible and fail-closed against the unresolved C7 note.
- No sentence asserts more than a first short drive and its assessment; nothing promises
  or reveals the 31 Oct record.

## First-public-wording scan (2026-09-19, run 380 — re-run on corrected bytes)

| Token                                | Hits in corrected draft                                            | Released-route hits                      | Verdict                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `sample` / `sample collection`       | 0                                                                  | 0                                        | **F1 RESOLVED** — family absent from the corrected bytes.                                                                        |
| `wheel placement`                    | 0                                                                  | 0                                        | **F3 RESOLVED** — released six-wheel geometry language used.                                                                     |
| `carried through`                    | 0 (egress attribute)                                               | 0 (egress sense)                         | **F2 RESOLVED** — attribution now cites 008/p1.                                                                                  |
| `first controlled drive`             | 3 (`:13`, `:15`, `:39`)                                            | 0                                        | Milestone term (row `:200`); THIS page releases it; defined on first use (`:17`). Safe.                                          |
| `mobility assessment`                | 4 (`:17`, `:21`, `:27`, `:35`)                                     | 0                                        | Milestone term (row `:200`); releases here. Safe.                                                                                |
| `condition` (landing-era sense)      | 2 (`:33` ×2)                                                       | 0 (landing-era sense)                    | Brief-approved ("the minor landing-era condition", brief `:17`); qualified, no bare "the condition". Reviewer-confirmed.         |
| `symptom`                            | 0                                                                  | 0                                        | C7 unresolved note honoured — no symptom invented.                                                                               |
| `monitor` / `tracking`               | 1 (`:33`)                                                          | released (cruise-health context)         | Timeline-allowed "what the team is still monitoring" angle; landing-era-condition sense flagged and confirmed. Safe.             |
| `traverse(s)`                        | 3 (`:21` "not a science traverse", `:33` "short traverses", `:39`) | released ("short, deliberate traverses") | Only the released operations model and the brief's "short traverses" outcome; no completed science traverse, no distances. Safe. |
| `measured movement`                  | 1 (`:21`) + summary                                                | released (`009-egress.mdx:29` + summary) | This record IS the measured movement the egress next-step promised. Safe.                                                        |
| `drive(s)`                           | 4 (`:13`, `:21`, `:23`, `:39`)                                     | released (design/planning context)       | After the defined milestone term, "the first drive" is the defined referent; no distances, no next-drive plan. Safe.             |
| `power`                              | 1 (`:27`)                                                          | released ("limited power" constraint)    | No power-system technology. Safe.                                                                                                |
| `discovery` / `repair` / `diagnosis` | 0 positive; "No diagnosis" `:33` only                              | 0                                        | Only the released negation; no discovery/repair language. Safe.                                                                  |

## Reviewer-owned edit (run 378, unchanged by the corrective)

1. Frontmatter: inserted `simulatedDate: 2031-09-30` (line 6, after `publication: draft`) —
   the reviewer's own field per the standing rule, drawn from `docs/SCENARIO.md:200`.
   Pre-edit writer/visuals hash `770cdc55e985c932294dd850fa3d80ab2509bbb372e70d4da5b2d09486ee5ac3`
   (5,450 B, 42 lines) → post-edit hash `acfe24bebe5e0c31a44fb9d2c1abe8554f758fd2d8cb6f713639773ecde35780`
   (5,476 B, 43 lines). +30 B = exactly the inserted line. No other byte changed in run 378.

The corrective card owned the three body-clause fixes; the gate made no further editorial
edit.

## Revision history

- **Revision 1 (run 378, 2026-09-19):** read of `acfe24be…` (5,476 B) — verdict text
  `continuity clear`, package `return for revision` on F1–F3; review status
  `changes_requested`; release decision withheld; corrective t_b95f08c8 created and
  linked as this card's parent.
- **Revision 2 (run 380, 2026-09-19):** read of `4085054b…` (5,415 B) after corrective
  t_b95f08c8. Reconstruction of run-378 bytes from the corrected file matches
  `acfe24be…` byte-for-byte, so only F1–F3 were re-judged; all three resolve. Verdict
  `continuity clear` for text, metadata, and package; review status `approved`; release
  decision recorded on card t_994c9f28.

## Observations (concurrent-tree and record-fidelity notes)

- The visuals manifest (`.agents/work/assets/009-first-drive/assets.md`, hash
  `517c3082…`) records its "Forbidden strings in draft" row as `grep … exit 1` (no
  matches) for a pattern including `sample collection`, while the file it hashed
  (draft sha `770cdc55…`) contained the negated phrase. The claim contradicted the
  byte count it recorded; superseded in run 378 without a corrective of its own (no
  shipped artifact depends on the manifest's grep exit code; owning roles: visuals
  t_9f288780 and writer t_590f09c0's "Forbidden-term scan clean" claim). The article-side
  containment fix was F1; the corrected bytes now satisfy the manifest's stated intent.
- The source pack's first-public-wording table stated `sample` has "2 released hits in
  002-payload-selection (002:23, :42)"; a 2026-09-19 re-grep of `website/news` +
  `website/wiki` finds **zero** occurrences of `sample` in any released article or wiki
  page. The pack's claim is stale/superseded by the measured reality, which strengthens
  the boundary (the family is entirely absent from the public surface until a release
  licenses it).
- `HEAD == origin/main == 53c1f98` at verdict time in both passes; nothing unpushed. The
  article is untracked (`publication: draft`), no `/news/009-first-drive/` route in
  `website/dist/` or the built `/news/` index ("First drive update" card absent), so the
  fail-closed state holds in fact at the run-380 snapshot too. Re-hashed at verdict time:
  `4085054b…`, 5,415 B.

## Next

Review record `.agents/work/reviews/009-first-drive.md` (status `approved`, release
decision recorded) and the dev card t_6b058257 (flips `publication: published` +
commits/pushes `t_6b058257: publish 009 first-drive update`), which this card's
completion promotes.

_Continuity material only. This record confirms a package against released canon; it
creates no new canon and does not authorise publication._
