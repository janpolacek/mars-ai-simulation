# Editorial review: 011-end-of-life

- Card: `t_1c13ab54` — editorial final gate + continuity (one pass), stage review
- Article: `website/news/011-end-of-life.mdx`
- Route once published: `/news/011-end-of-life/`
- Timeline step: `011-repair-and-end-of-life` — page 2 of 3 (this card;
  `docs/SCENARIO.md:206`)
- Article SHA-256 at verdict: `e146ecbe6658ef40c38c19302c8411f18241d691866f7055bc7cd87ff023f510`
  (7,041 B, 46 lines — `publication: draft`, `simulatedDate: 2035-07-21` applied
  by this gate; writer draft was `f7cc6c2d…`, 7,015 B; delta +26 B = one
  frontmatter line)
- Review run: 2026-09-19 (session date); probes re-run at verdict time
- Continuity verdict: `.agents/work/continuity/011-end-of-life.md` —
  `continuity clear` (text/canon dimension)

## Revision history

- **Pass 2 (this record, run 429, 2026-09-19 ~22:35):** final status
  `blocked` → **`approved`**; HUMAN GATE row FAIL → PASS; release decision
  **WITHHELD → RECORDED** (below). **Article hash unchanged**
  (`e146ecbe…` — the pass-1 verdict stands on the same bytes; this pass only
  re-judges the human-gate item and the release decision). Supersedes pass 1.
- Pass 1 (run 428, 2026-09-19 21:55): final status `blocked` — text/canon
  rows all PASS, single unresolved item = missing step-011 human approval for
  this page. Article hash `e146ecbe…` identical. That record is superseded by
  this one; no row that passed is reopened.

## Final status

**`approved`** — every review-table row passes, including the HUMAN GATE, and no
material failure remains unresolved. The release decision is recorded below.
The step-011 human story-owner approval arrived on this card on 2026-09-19
(worker comment, operator relay of the human's clarify response), scoped to
THIS page and covering the final sequence, public wording, authoritative final
media, and archival strategy.

## Simulated record date

- **Value applied:** `simulatedDate: 2035-07-21` (frontmatter line 6, inserted
  after `publication: draft`, matching the page-1 field order).
- **Milestone line:** `docs/SCENARIO.md:206` — `21 July 2035 | Thirty-day
  listening campaign ends and mission end-of-life is declared` (re-verified at
  verdict time, line 206 of 312).
- **Checks:** the date is this page's own record row; it implies no unreleased
  event (the campaign-end + EOL declaration are this record's two clauses); it
  cannot be read as a launch/landing or other withheld mission date; it
  contradicts no published sentence (page-1 released campaign start 21 June
  2035 and the row's own "Thirty-day" name make the end date public-derivable:
  `2035-06-21 + 30 d = 2035-07-21`, GNU date, verified); it keeps the news chain
  in timeline order (…010-health-review 2034-09-16 → 011-two-mars-years
  2035-06-21 → 011-end-of-life 2035-07-21; row `:207` 2036-06-30 stays the next,
  still-withheld boundary). Calendar arithmetic is consistent with the
  published design frame.
- **Surface (verified via the real pipeline module, probe `probe-011-date.mjs`,
  node 26 type-stripping):** `formatSimulatedDate('2035-07-21') = "21 July
  2035"`; `simulatedDateText(...) = "Simulated record date · 21 July 2035"` —
  the in-fiction label from `src/lib/simulated-date.ts`; the article footer
  states `Simulated record date: 21 July 2035. This date is inside the fiction
  and is not a real publication date.` Nothing machine-readable is derived
  (`src/lib/seo.ts` contract). The dev card `t_469c6c98` verifies the built page
  states it under the in-fiction label after the flip.

## Review table

| Area                                  | Result   | Notes and evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Citations / claim grounding           | PASS     | Every material claim traces to a locked SCENARIO row or a published article: row `:206` (two clauses), page-1 campaign frame (`011-two-mars-years.mdx`), chain `008 → 009-egress → 009-first-drive → 010-first-sample → 010-stratigraphy → 010-one-mars-year → 010-health-review → 011-two-mars-years`, relay architecture (`008`, `004`), operating-appearance stages (`003`), Ariane disclosure (verbatim page-1 `:56`). No claim requires unpublished canon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Links                                 | PASS     | 14 internal links + `/#mission`; every href resolves to an existing released route (news files present; wiki flat-file + section frontmatter confirmed: `section: area` → `/wiki/area/asteria-field/`, `section: vehicle` → `/wiki/vehicle/rh-01-pathfinder/`, `section: project` → `/wiki/project/red-horizon/`; `/about/` exists). No 011-end-of-life / 011-archive self-or-next link, no working-paper or private path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Coherence                             | PASS     | Structure reads as a close: lead → milestone record → campaign closes → declaration and record → record so far → disclosure. The page resolves page-1's "The listening campaign is the mission's next phase on this record" by recording the campaign's end and the declaration. "Later record updates follow as their own events" is the brief-required C6 third arm, not a promise of page 3 (no name, date, or shape of the archive event).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Voice / grammar                       | PASS     | Red Horizon voice holds: informed, candid, modest, specific. No grandiosity, no farewell melodrama, no unexplained acronyms (EOL as acronym: 0 hits). Disclosure present and prominent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Image placement / captions / alt text | PASS     | Text-only by brief (`no new imagery: text-only — a dignified close; no generation`); article carries **no `media` key** (verified: js-yaml parse keys = title, category, status, publication, simulatedDate, summary, linkLabel, order, accent). No figure, card art, or OG image — the absence of candidates is the deliverable; asset manifest `.agents/work/assets/011-end-of-life/assets.md` (placement none) confirmed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Metadata / schema                     | PASS     | Frontmatter validates against `src/content.config.ts` (js-yaml parse OK; `simulatedDate` declared `z.union([z.string().regex(...), z.date()]).optional()`, normalises to `2035-07-21` → "21 July 2035"); `publication: draft` — the flip is the dev card's scope; no `:207`/archive/continuation values in any metadata field.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Published surface                     | PASS     | Probe (read-only, no build) shows the draft route is ABSENT from `website/dist/` (only `/news/011-two-mars-years/index.html` present) — the body is not public while `publication: draft`. HEAD == origin/main == `5d32ad9f`; 0 commits ahead; article untracked (draft). Guards: `gatedTextMarkers = ['18° 42', '226° 14']` and `gatedDirectoryNames = ['timeline']` — no marker, directory, or withheld-file reference in this article; no guard flip required for this page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Spoiler / confidentiality             | PASS     | Forbidden-ledger probe: 0 hits (row `:207` shapes, private timeline phrases/paths, reserved step-011 facts, continuation vocabulary, real facility/operator/agency names, telemetry, landing-design facts, "mission over"/"terminated", farewell words). "The last signal received from the rover… part of the mission's communications record" is the C6-licensed conceptual distinction (no dated/narrated/denied contact event). First-public tokens (`end-of-life`, `declared`, `21 July 2035`, `intact`, campaign-end) used at the row's own scope.                                                                                                                                                                                                                                                                                                                                                                                               |
| SEO / metadata quality                | PASS     | Writer's integrated SEO pass (no separate card): search intent honest ("what happened when the Red Horizon mission ended"); title 57 chars (≤60); summary 141 chars (≤155) with the milestone date and the record-intact phrase; heading outline scannable (5 H2); internal links reinforce the record chain; metadata carries no gated fact.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Accessibility                         | PASS     | Semantic headings, plain language, no text-in-image, no media to describe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| HUMAN GATE                            | **PASS** | Recorded human story-owner approval exists **on this card**, scoped to THIS page (worker comment 2026-09-19, operator relay of the human's clarify response): "Approve — record approval on the card and unblock (archival: archive update as its own later event, per article)". Scope approved: `website/news/011-end-of-life.mdx` — milestone 21 July 2035 (`docs/SCENARIO.md:206`), 30-day listening campaign closes, official transparent EOL declaration, record intact, no hardware-fate speculation, no continuation hints, `simulatedDate 2035-07-21`, text-only (no media). Archival-strategy direction: the later archive/record update is its own separate event, not part of this article, consistent with `:207` staying the next withheld boundary. No separate authoritative-final-media choice applies (text-only per asset manifest `t_8da8530c`). This satisfies `docs/timeline/011-repair-and-end-of-life.md:28-30` for this page. |

## Findings

- **No corrective findings.** Every text, link, metadata, spoiler, and
  accessibility row passes; the single item held open in pass 1 — the step-011
  HUMAN GATE — is now satisfied by the recorded human approval quoted above.
  There is no unresolved material failure.

## Release decision

**RECORDED — APPROVED FOR RELEASE.**

- **Exact public scope:** one news article,
  `website/news/011-end-of-life.mdx` — "Red Horizon declares mission end of
  life at Asteria Field", route `/news/011-end-of-life/` once published;
  `publication: draft → published` applied by dev card `t_469c6c98` (this card
  does not flip the field); `simulatedDate: 2035-07-21`; text-only — **no media
  change** (article carries no `media` key; asset manifest confirms placement
  none).
- **Evidence:** every review-table row passes; continuity `continuity clear`
  (`.agents/work/continuity/011-end-of-life.md`); article hash at the flip
  `e146ecbe6658ef40c38c19302c8411f18241d691866f7055bc7cd87ff023f510` (7,041 B,
  re-verified immediately before this record); HEAD == origin/main ==
  `5d32ad9f`; the draft body is absent from `website/dist/` while
  `publication: draft`.
- **Record date applied:** `simulatedDate: 2035-07-21`, drawn from the locked
  milestone line `docs/SCENARIO.md:206` — `21 July 2035 | Thirty-day listening
  campaign ends and mission end-of-life is declared`. Rendered as
  `Simulated record date · 21 July 2035` under the in-fiction label; footer
  states it is inside the fiction and not a real publication date.
- **Human gate:** satisfied — operator-recorded human story-owner approval on
  this card, scoped to this page (quoted in the review table above).
- **Conditions attached to the approval:**
  1. The `publication` flip is applied by the dev card `t_469c6c98` (still
     parent-gated on this card) as commit `t_469c6c98: publish 011 end-of-life
     update`; nothing is flipped or pushed from this gate.
  2. The archival/record update is its own separate later event (human's
     archival-strategy direction; per article, not in this article).
  3. `docs/SCENARIO.md:207` (30 June 2036, calibrated science archive and final
     engineering report) stays the next withheld boundary; page 3 of step 011
     remains serialized later — no continuation.

## Handoff

- Next owner: **`mars-ai-simulator-dev` (`t_469c6c98`)** — build, guard,
  preview, flip `publication: draft → published`, verify the built page states
  `Simulated record date · 21 July 2035` under the in-fiction label, commit,
  push, verify the live URL.
- No corrective card is needed; no commit or push was made by this gate (working
  papers only; nothing staged — the article file stays untracked for the dev
  card's flip-and-commit).
