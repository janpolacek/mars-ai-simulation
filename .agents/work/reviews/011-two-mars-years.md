# Editorial review: 011-two-mars-years

- Card: `t_eda18653` — editorial final gate + continuity (one pass), stage review
- Article: `website/news/011-two-mars-years.mdx`
- Route once published: `/news/011-two-mars-years/`
- Timeline step: `011-repair-and-end-of-life` — page 1 of 3 (this card; rows
  `docs/SCENARIO.md:205`)
- Article SHA-256 at verdict: `25a7710b805f83942878b4914c5d195e74dbd26fbb01d7096aac60b4786ced26`
  (9,036 B — corrected revision from card `t_00556575`)
- Review table run: 2026-09-19 (session date); probes re-run at verdict time
- Revision history: **Revision 2 (this file)** supersedes Revision 1
  (`d408046a0c9e81607e96236957936704546ca83ca7ee60c03f0a0928de28f5b0`, 8,945 B —
  the state the pass-1 records cited). What moved: corrective `t_00556575`
  applied exactly two hunks — F1 (draft line 44 wording) and C1 (health-review
  link, line 32). Reconstruction proof: reverse-applying those two hunks to the
  current bytes reproduces the pass-1 hash `d408046a…` byte-for-byte (8,945 B),
  so every pass-1 row carries over unchanged except the two corrected items.
- Continuity verdict: `.agents/work/continuity/011-two-mars-years.md` —
  `continuity clear` (Revision 2)

## Final status

**approved** — F1 and C1 resolved and verified on the corrected bytes; the
step-011 HUMAN GATE is satisfied (recorded human story-owner approval on this
card, 2026-09-19); the release decision is recorded below and on the card.

## Simulated record date

- **Value:** `simulatedDate: 2035-06-21` (assigned into the article frontmatter by
  this gate on pass 1; unchanged by the corrective).
- **Milestone line:** `docs/SCENARIO.md:205` — `21 June 2035 | Two Mars years
  completed; supported surface operations end` (re-verified at verdict time,
  line 205 of 312).
- **Checks (re-verified pass 2):** implies no unreleased event (it IS this page's
  own record row); cannot be read as a launch/landing/other withheld mission
  date (surface-completion milestone, not a flight date); contradicts no
  published sentence; keeps the news chain in timeline order (…010-stratigraphy
  2032-04-18 → 010-one-mars-year 2033-08-03 → 010-health-review 2034-09-16 →
  011-two-mars-years 2035-06-21). Calendar verified on pass 1:
  `2031-09-16 + 1374 d = 2033-08-03 + 687 d = 2035-06-21`.
- **Surface:** the pipeline's own module renders `Simulated record date · 21 June
  2035` under the in-fiction label (`src/lib/simulated-date.ts`, probe re-run
  pass 2: `formatSimulatedDate('2035-06-21') = "21 June 2035"`,
  `simulatedDateText(...) = "Simulated record date · 21 June 2035"`); nothing
  machine-readable is derived (`src/lib/seo.ts`). The dev card `t_3242d709`
  verifies the built page states it after the flip.

## Review table

| Area                                  | Result                | Notes and evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Citations / claim grounding           | PASS                  | Carried from pass 1 on byte-identical context (reconstruction proof): every material claim traces to a locked SCENARIO row or a published article (chain 008 → 009-egress → 010-first-sample → 010-stratigraphy → 010-one-mars-year → 010-health-review; design frame 001:69-72; ops vocabulary 003/rh-01-pathfinder/002; relay 004/008). Source pack C1–C12 verified against current bytes; no claim requires unpublished canon.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Links                                 | PASS (revised)        | All 21 internal links are released public routes (008, 009-egress, 010-first-sample, 010-stratigraphy, 010-one-mars-year, 010-health-review, 001-project-announcement, 002-payload-selection, 003-vehicle-design, 005-launch, wiki rh-01-pathfinder, wiki asteria-field, wiki red-horizon, `/#mission`) — verified against the `dist/` route list (31 routes). C1 resolved: `/news/010-health-review/` is now linked where the final-year health review is recapped (`website/news/011-two-mars-years.mdx:32`, "as the [health review update](/news/010-health-review/) recorded"). No 011-end-of-life / 011-archive slug, no gated route.                                                                                                                                                                                                                                              |
| Coherence                             | PASS                  | Carried from pass 1 (uncorrected bytes): closeout milestone record follows the released 010-family structure; "What comes next" correctly replaces the standing "RH-01 is operating at Asteria Field" state with the campaign-start framing. F1's reworded line 44 ("The campaign is closeout — not an extension of surface science, and no further surface operations are commanded — …") is coherent and reads naturally.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Voice / grammar                       | PASS                  | Carried from pass 1; the corrected clauses keep the Red Horizon voice (informed, candid, modest, specific). No grandiosity, no marketing language, no unexplained acronyms; disclosure present and prominent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Image placement / captions / alt text | PASS                  | `media: vehicle-references` (existing key, `plateCount 1, altCount 1, captionCount 0, requiresLabel false`); exactly one non-empty `mediaAlt`; `newsMediaIssues()` returns NONE (probe re-run pass 2 on corrected bytes). Alt is the studio-reference string for the reused plate; plate on disk re-hashed pass 2: `8dbb33d5…` (matches index and `assets.ts:115`). Reuse sanctioned by this gate (reviewer's C10 decision; manifest `.agents/work/assets/011-two-mars-years/assets.md`).                                                                                                                                                                                                                                                                                                                                                                                               |
| Metadata / schema                     | PASS                  | Frontmatter validates against `src/content.config.ts`; keys: title, category, status, publication, simulatedDate, summary, linkLabel, order, accent, media, mediaAlt (probe re-run pass 2: js-yaml parse OK, `publication: draft`, `simulatedDate: 2035-06-21` normalises to `21 June 2035`). `publication: draft` — flip is the dev card's scope.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Published surface                     | PASS                  | Probe (read-only, no build) shows the draft route `/news/011-two-mars-years/` is ABSENT from `dist/` route list (31 routes) — the body is not public while `publication: draft`. `scanSourceForGatedReferences()` over the website source reports NO offences (`{}`). HEAD == origin/main == `76bfd0a`; 0 commits ahead; the article is untracked (draft); no accidental deployment path. Date label verified via the real module.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Spoiler / confidentiality             | PASS (ledger refined) | Pass-2 re-run of the pass-1 forbidden-ledger probe: 2 substring hits, both resolved against published bytes as released-level restatements — (a) "mission over" ⊂ "…for the mission overall" in the disclosure sentence, verbatim from published `010-first-sample.mdx:47`; (b) "mature operations" as the released operating-appearance stage name inside the "vocabulary for the wear the design provides for, not as events that have happened" sentence, verbatim from published `010-health-review.mdx:37` (released stage names 003:56-58). Neither is a containment failure; the pass-1 record's "0 hits" prose was over-broad against its own ledger — recorded here so the ledger reads honestly. No rows :206/:207 material, no EOL/final-contact/archive phrasing, no private timeline vocabulary; bare "supported operations" outside the milestone phrase now 0 hits (F1). |
| SEO / metadata quality                | PASS                  | Carried from pass 1: search intent honest and descriptive; title 53 chars; summary 129 chars with the milestone date + campaign start; heading outline scannable; internal links reinforce the record chain.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Accessibility                         | PASS                  | Carried from pass 1: semantic headings, alt text non-empty and descriptive, plain language, no text-in-image.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Findings (Revision 2)

- **F1 — resolved.** Draft line 44 no longer contains the freestanding
  "supported operations". Corrected wording (verified in the corrected bytes,
  single occurrence): "The campaign is closeout — not an extension of surface
  science, **and no further surface operations are commanded** — and marks the
  transition from commanding the rover to monitoring it." The milestone's own
  phrase "supported surface operations end" is retained for the milestone
  statements (3 uses: status line, lead, listening-campaign frame — the row's
  own vocabulary, released by this record per C4). Bare "supported operations"
  and the private planning phrases ("supported surface interval", "supported
  science operations") have 0 hits on the corrected bytes. Corrective card:
  `t_00556575`.
- **C1 — resolved.** `/news/010-health-review/` is now linked at the health-
  review recap (`website/news/011-two-mars-years.mdx:32`). Corrective card:
  `t_00556575`.
- **HUMAN GATE — satisfied.** Recorded human story-owner approval exists on this
  card (comment 2026-09-19 21:30 via the operator's CLI verify session),
  quoting the operator's clarify response of 2026-09-19: "Approve as-is —
  record approval on the card and unblock". The recorded scope covers the final
  sequence and public wording of the article as-is: milestone 21 June 2035
  (SCENARIO.md:205), closeout listening campaign, no EOL declaration,
  `simulatedDate 2035-06-21`, media `vehicle-references` (approved rover
  plate), corrective `t_00556575` applied and verified. This satisfies the
  brief `:33-35` and the card body's human-gate instruction.

## Evidence files (Revision 2)

- Probe scripts (outside the repository): `/tmp/rev-011-pass2.py` (hash +
  reverse-reconstruction + forbidden ledger), `/tmp/scan-011.mjs`,
  `/tmp/review-011-two-mars-years.mjs`, `/tmp/scan-011-links.mjs`,
  `/tmp/routes-011.mjs` (all re-run on the corrected bytes)
- Asset manifest: `.agents/work/assets/011-two-mars-years/assets.md`
- Source pack: `.agents/work/sources/011-two-mars-years.md`
- Brief: `.agents/work/briefs/011-repair-and-end-of-life.md`
- Image index: `.agents/work/image-index.md`
- Corrective: card `t_00556575` (handoff recorded its `new_sha256
  25a7710b…`, matched on disk)

## Release decision

**Release granted (Revision 2).** Exact public scope: `website/news/011-two-mars-years.mdx`
(route `/news/011-two-mars-years/`); frontmatter `publication: draft → published`
applied by the dev card `t_3242d709` (this review records the decision; the dev
card owns the flip, build, guard, preview and push per its card body), carrying
`simulatedDate: 2035-06-21` drawn from `docs/SCENARIO.md:205`, milestone line
`21 June 2035 | Two Mars years completed; supported surface operations end`.
Media: existing `vehicle-references` key reusing the approved plate
`docs/vehicles/pathfinder/canonical.png` (SHA-256 `8dbb33d5…` re-verified) with
the studio-reference alt — the reviewer's sanctioned reuse decision.
Article hash at the moment of this decision: `25a7710b805f83942878b4914c5d195e74dbd26fbb01d7096aac60b4786ced26`
(9,036 B, `publication: draft` still set — the flip is the dev scope).
Conditions: (1) the step-011 HUMAN GATE record cited above is required to stand
(recorded approval of the final sequence and public wording; the card body
names this before any release); (2) the dev card must build, run the guard,
verify the built page states `Simulated record date · 21 June 2035` under the
in-fiction label, and push its own scoped change with this decision recorded
first; (3) nothing beyond the already-released rows — page 2 (EOL declaration)
and page 3 (archive) of step 011 stay withheld. No unresolved material failure
remains.

## Handoff

- Next owner: `mars-ai-simulator-dev` (card `t_3242d709`) — build, guard,
  preview, flip `publication: draft → published`, verify the built page states
  `Simulated record date · 21 June 2035` under the in-fiction label, commit
  `t_3242d709: publish 011 two-Mars-years update`, push, verify the live URL.
- This gate's release decision is recorded on card `t_eda18653`; no further
  approval is required before the dev push.
- Outstanding after this card: dev flip + live verification only.
