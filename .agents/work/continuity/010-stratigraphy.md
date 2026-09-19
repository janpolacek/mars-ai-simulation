# Continuity: 010-stratigraphy

Card: t_8625a8df (Editorial final gate: 010-stratigraphy)
Reviewer: mars-ai-simulator-reviewer
Date: 2026-09-19 (session), run 396

## Package

| Item           | Path                                                                                                                                            | Hash / state                                                                                                                                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article        | `website/news/010-stratigraphy.mdx`                                                                                                             | sha256 `a7283e3017f8f6a184f34bef7e0a4693716c2beed94c1273cf0c5e5bae831dae`, 7,136 B, 45 content lines, `publication: draft`, `simulatedDate: 2032-04-18` (reviewer-applied this run; +26 B over the writer's 7,110 B = the single inserted frontmatter line) |
| Source pack    | `.agents/work/sources/010-stratigraphy.md`                                                                                                      | claims C1–C12; all line citations re-verified against current bytes                                                                                                                                                                                         |
| Asset manifest | `.agents/work/assets/010-stratigraphy/assets.md`                                                                                                | REUSE decision: AF-02 primary / AF-01 alternative, AF-03 barred; placement none (no media key); hashes match image-index                                                                                                                                    |
| Brief          | `.agents/work/briefs/010-operations-and-discovery.md`                                                                                           | page row `:10`; allowed facts `:17`; common framing `:21-26`; forbidden `:27-34`; asset rule `:38`; draft contract `:42-47`                                                                                                                                 |
| Timeline step  | `docs/timeline/010-operations-and-discovery.md`                                                                                                 | continuity control only; private phrases at `:7`                                                                                                                                                                                                            |
| Scenario       | `docs/SCENARIO.md`                                                                                                                              | row ``:202`` = `18 April 2032                                                                                                                                                                                                                               | First mineral-stratigraphy campaign completed` (re-verified at verdict time) |
| Released prose | 001, 002, 005, 008, 009-egress, 009-p1, 009-first-drive, 010-first-sample; wiki `asteria-field`, `rh-01-pathfinder`, `red-horizon`, `ariane-64` | quotes re-verified verbatim against current bytes                                                                                                                                                                                                           |
| Surface        | `website/dist/` (read-only), `website/src/lib/simulated-date.ts`, `website/src/features/news/query.ts`, `website/src/content.config.ts`         | fail-closed pre-flip state re-verified; label + render pattern proven on sibling                                                                                                                                                                            |

## Chronology

| Check                      | Result | Evidence                                                                                                                                                                                                                                       |
| -------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Locked milestone row       | Pass   | ``docs/SCENARIO.md:202`` — `18 April 2032                                                                                                                                                                                                      | First mineral-stratigraphy campaign completed`; the row is the event this page releases |
| Record date                | Pass   | `simulatedDate: 2032-04-18` = the row's own calendar day; reviewer-assigned per the standing rule (row named in the review record)                                                                                                             |
| Released day references    | Pass   | `16 September 2031` (landing, `:197`), `23 September` (egress, `:199`), `31 October 2031` (first sample, `:201`) — all released rows; no other date                                                                                            |
| Timeline order             | Pass   | `2031-10-31` (010-first-sample) → `2032-04-18` (this page); the article's own chain (16 Sep → 23 Sep → 31 Oct → 18 Apr) is in order                                                                                                            |
| No later-step date / event | Pass   | Rows `:203`–`:207` (one Mars year 3 Aug 2033, final-year health review 16 Sep 2034, supported-ops end, listening-campaign end/EOL, archive completion) absent in every form; step 011 absent; no next-record date, no second-campaign phrasing |

## Canon consistency

| Claim in article                                                                                      | Source in released canon                                  | Result                                        |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------- |
| Milestone event and definition of stratigraphy / mineral-stratigraphy campaign                        | `SCENARIO.md:202` + plain definition                      | Pass                                          |
| "Further samples and observations belong to subsequent updates" (close-out promise)                   | `010-first-sample.mdx:45` verbatim                        | Pass                                          |
| Mission record chain (landed 16 Sep, egressed 23 Sep, first sample 31 Oct)                            | `010-first-sample.mdx:17`, `008-landing`, `009-egress`    | Pass                                          |
| Ops model: short, deliberate traverses; approach–observe–record–next safe route                       | `rh-01-pathfinder.mdx:130-132`, `010-first-sample.mdx:45` | Pass                                          |
| "gathers evidence before an interpretation is made"                                                   | `rh-01-pathfinder.mdx:128`                                | Pass                                          |
| Panorama / layers vocabulary ("layered outcrops", "layered terrain", "layers above and below")        | `002:29-30, :42`, `009-p1:26`, `009-first-drive:29`       | Pass                                          |
| Region evidence classes (cratered basement, basin-margin material, channel and bench surfaces)        | `asteria-field.mdx:83-93`                                 | Pass (see F2 for the test-attribution clause) |
| Mission purpose (mapping clay/chloride/sulfate/basaltic units; lake-groundwater vs episodic question) | `001:29-33`, `red-horizon.mdx:32`                         | Pass                                          |
| Caution ceiling (no confirmed clay/sulfate/habitable/fossil-bearing; no confirmed mineral detection)  | `asteria-field.mdx:101-105`                               | Pass                                          |
| Not a life-detection mission / no life claim                                                          | `002:110-114`, `001:42-44`                                | Pass                                          |
| Atmospheric landing / disclosure                                                                      | standard boilerplate family                               | Pass                                          |
| Ariane 64 non-endorsement paragraph                                                                   | `010-first-sample.mdx:49` family                          | Pass                                          |

## Plausibility

- Cautious interpretation staged as observation → corroboration → cautious interpretation → stated
  limitation; "consistent with", "point toward", "the team is checking" family; the interpretation is
  explicitly not a final determination and carries a mandatory stated-limitation section (brief
  `:17`, `:23`). No telemetry, no layer counts/thicknesses, no outcrop counts, no distances, no sol
  counts invented.
- Real-world NASA Science link used as plain-language context only; the boundary sentence "no real
  mission values are imported into the fictional record" is present.

## Spoiler safety

- Scans (2026-09-19, at verdict time): no `docs/timeline/` path; rows `:203+` absent; no 011 event;
  no landing-design geometry (ellipse/P0/zones/hazards/traverses/AF-* unit ids); no private
  instrument names; no invented telemetry; `stratigraph*` and `18 April 2032` appear only as THIS
  row's own release; `campaign` only for the completed mineral-stratigraphy campaign.
- **F1 (material):** the phrase "sedimentary history" (`:32`) is a private-timeline phrase from
  `docs/timeline/010-operations-and-discovery.md:7` and is named in the source pack's Forbidden fact
  ledger and flags table as one that must stay out; 0 hits across released public routes today.
  Placing it on this page would make the private document's wording public for the first time.
- Asset surface: no media key, no alt/caption/label — there is no image surface to leak. The reused
  plates (AF-02/AF-01) are not placed by this article (placement none); AF-03 is never placed or
  described.

## Verdict

**`return for revision`** — chronology, canon consistency, and plausibility are otherwise clear.
Two writer-owned items must be corrected before the package can be approved: F1 (private-timeline
phrase "sedimentary history", `:32`) and F2 (evidence-class test attribution, `:20`), both detailed
in the review record. Package pronounced `changes_requested` on those items; corrective
t_066d01b8 is linked as the parent of this gate; release decision withheld until the re-gate.

_Continuity record. Verdict recorded 2026-09-19 by mars-ai-simulator-reviewer. Not a canon record
and not a release decision._

## Revision 2 — corrective re-gate (run 396b; supersedes run 396)

**Corrective t_066d01b8 applied.** The two writer-owned items are resolved on the corrected bytes
and the review is `approved`:

- Superseded hash `a7283e3017f8f6a184f34bef7e0a4693716c2beed94c1273cf0c5e5bae831dae` (7,136 B,
  run-396 reviewed bytes, `simulatedDate` reviewer-applied). Reverse-applying the two claimed hunks
  to the corrected file reproduces it exactly — no third change rode along.
- Corrected hash `42d8119994092c38394c721f111552796a258dd62dc65b33f8b5180ed3037b` (7,158 B, 45
  content lines, `publication: draft`, `simulatedDate: 2032-04-18`).
- Continuity verdict on the corrected bytes: **`continuity clear`** — chronology, canon
  consistency, plausibility, and spoiler safety all hold; F1 private phrase removed (token scan 0
  hits), F2 evidence-class attribution now matches `asteria-field.mdx:88-93`.

_Revision recorded 2026-09-19 by mars-ai-simulator-reviewer._
