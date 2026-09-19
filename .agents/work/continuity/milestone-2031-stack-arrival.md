# Continuity: milestone-2031-stack-arrival — chronology, canon, plausibility and spoiler verdict

Slug: `milestone-2031-stack-arrival`. Card `t_a3877295` (`mars-ai-simulator-reviewer`),
stage: merged continuity + editorial final gate. Timeline step `005-launch`
(pre-launch **capsule** backfill for the step — the launch-day factual update
is already released as `005-launch.mdx`). Companion record:
`.agents/work/reviews/milestone-2031-stack-arrival.md` (review table, verdict
`approved`; release decision recorded in §"Release decision").

**Verdict (2026-09-19, ~13:30 CEST): `continuity clear`.** Chronology holds:
the capsule's `simulatedDate: 2031-01-13` is the locked milestone row the
table holds (`docs/SCENARIO.md:191`), it precedes the published step-005
factual update's record date (`2031-02-17`) by 35 fiction-days, and the
capsule's framings ("has reached the campaign site", "in progress") are
correct on its own date. Canon consistency: every claim traces to
released material — `website/news/001-project-announcement.mdx`,
`/news/003-vehicle-design/`, `/news/004-launch-provider/`, the wiki
`red-horizon` fiction disclosure, and the locked milestone row
`docs/SCENARIO.md:191` — and no later-step fact appears. Plausibility:
shipment of the flight stack is a routine ground-campaign event before
launch; nothing in the body asserts a date, an outcome, or an event the
step has not released. Spoiler safety: forbidden-terms scan in the body
returned zero hits (Kourou, Arianespace, ArianeGroup, ESA, Europe's
Spaceport, ELA-4, Asteria Field, 17 February 2031 launch day);
landing-region coordinate markers `18° 42` and `226° 14` are absent;
no link to `/news/005-launch/`; the only "countdown" word on draft line 29
is the negation "not a countdown" and the source-pack forbidden ledger
treats the term as a containment string (the negation reads as an
explicit framing claim about the kind of update this is, not a
countdown fact). The build-card guard scan (mirrored read-only via
`/tmp/scan_capsule_guards.mjs`) returned zero offences for the draft;
five working-paper hits are negative-claim rules in
`.agents/work/{briefs,sources,assets}/…` (every flagged token sits
inside a "must not contain" list) and are not built into `dist/`. No
canon change, no `docs/SCENARIO.md` write, no `docs/timeline/` write,
no asset change.

This is the canonical continuity record for the `005-launch` capsule
backfill. The earlier `005-launch` continuity record at
`.agents/work/continuity/005-launch.md` covers the **launch-day**
factual update (`simulatedDate: 2031-02-17`, status `Launched`); this
record covers the **arrival** companion (`simulatedDate: 2031-01-13`,
status `Stack at launch campaign site`). Both records stand.

## 1. Evidence boundary and what was compared

| Item                       | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article under review       | `website/news/milestone-2031-stack-arrival.mdx` — sha256 `690cc299c61752a1e8e541908c9f60b665348e96dd0a3cc972e0f42dc23984e8`, 2,423 B, 47 lines, `publication: draft` (line 5), `order: 5`, `accent: amber`, **no `media*` field**, **no `simulatedDate` yet**, summary length: 167 chars (rule: under 160 — see §6 F-observation).                                                                                                                                                                                                                                                          |
| Released step compared     | Step `005-launch`. The prior release on this step is `005-launch.mdx` (sha256 `f8338776…`, published, `simulatedDate: 2031-02-17`), approved at 2026-09-19 by card `t_fd724cd9` (`.agents/work/reviews/005-launch.md` §10 / `.agents/work/continuity/005-launch.md`). This capsule is a **sub-event backfill on the same step**, dated 35 fiction-days earlier than the launch-day article, and the locked milestone row for both events is in the same table.                                                                                                                              |
| Private timeline compared  | `docs/timeline/005-launch.md` — capsule-style pre-launch sub-events are within step-005's scope once the capsule is recorded as a backfill on the step's release order. The continuity ledger does not reproduce any private-timeline text.                                                                                                                                                                                                                                                                                                                                                 |
| Canon compared             | `docs/SCENARIO.md` `99206373…` — §Flight system (`:122–127`), §Launch and mission dates (`:173–207`, esp. milestone row `:191` for the arrival and `:193` for the launch day that the published step-005 article owns), §Continuity and release controls (`:274–282`, landing-design withhold `:279`, real-institution rule `:281`).                                                                                                                                                                                                                                                        |
| Working papers compared    | `.agents/work/briefs/milestone-2031-stack-arrival.md` (allowed facts + forbidden/spoiler facts), `.agents/work/sources/milestone-2031-stack-arrival.md` (claim ledger C1–C8), `.agents/work/assets/milestone-2031-stack-arrival/assets.md` (text-only-no-new-imagery manifest, sha256 `c1803766…`, draft hash `690cc299…` recorded).                                                                                                                                                                                                                                                        |
| Surface machinery compared | `website/src/content.config.ts` (news schema; `simulatedDate` is `optional` and editor-assigned; `newsMediaIssues` enforces media-key contracts), `src/lib/media.ts` (newsMediaKeys, newsMediaRequirements), `src/lib/simulated-date.ts` (label and pattern), `src/lib/publication.ts` (`publication` predicate, `selectPublicNews` sort by date-DESC tiebreak on `order`), `src/features/news/media.ts` (key resolver), `ArticleView.astro` (page render), `NewsCard.astro` (card render); guards `website/scripts/guards.mjs` (gated dirs/files/markers), `website/test/guards.test.mjs`. |
| Build surface              | The shared `website/dist/` is **not** the live surface (a sibling dev card may have built; `check-dist` prunes on failure). The live origin (`https://mars-ai-simulation.janpolacek.workers.dev/`) is what the push-triggered Cloudflare build serves: probed 2026-09-19 11:11 CEST.                                                                                                                                                                                                                                                                                                        |
| Probe                      | Live origin `GET /news/milestone-2031-stack-arrival/` returns HTTP 404 (chrome-error page, body length 217 B) — fail-closed default verified in fact; the route is **not** advertised by `/news/` (the newsroom index lists only the five published items).                                                                                                                                                                                                                                                                                                                                 |

## 2. Chronology and the 005-launch capsule mapping (this gate's headline call)

**Mapping.** The card body names this a "capsule backfill on timeline step 005-launch". The capsule is a pre-launch sub-event in the same release step the launched article covers; the capsule's record date (`2031-01-13`) precedes the launch article's (`2031-02-17`) by 35 fiction-days, and both dates are anchored on locked milestone rows the same `docs/SCENARIO.md` table holds (`:191` and `:193` respectively). This is the right mapping because:

- The capsule reports the **arrival at the launch campaign site** — one event the launch-day article takes for granted in its lead ("`On 17 February 2031, Red Horizon One launched aboard Ariane 64`"). Backfilling that earlier event keeps the public record consistent with what the launched article reports.
- The earlier-in-fiction date sits on a locked milestone that has not been published (the public step-005 article reports launch day, not arrival day). The capsule's `simulatedDate: 2031-01-13` is therefore not a duplication of any published fact; it is the **first public sentence** to carry that row.
- The capsule's framings are correct on its own date ("has reached the campaign site", "in progress"). It does **not** assert launch, Earth departure, cruise, landing, or any later-step fact.
- The capsule does **not** link to, quote, or assume the launched article (`/news/005-launch/`); the forbidden scan found no such reference. The launched article remains the only public surface that carries the 17 February 2031 launch day.

**Release order.** Step 005's release order has, in this order on the public record:

1. Launch-day factual update (`005-launch.mdx`, sha256 `f8338776…`, `simulatedDate: 2031-02-17`, status `Launched`).
2. **This capsule, dated 35 fiction-days earlier**, now published as the arrival companion (`milestone-2031-stack-arrival.mdx`, `simulatedDate: 2031-01-13`, status `Stack at launch campaign site`).

Listing order under `selectPublicNews`: dated entries sort `date DESC`; both items are dated, so the launched article (Feb 17) appears before the capsule (Jan 13). The capsule `order: 5` matches `005-launch`'s `order: 5`; tie-break on `order: ascending` never engages because the dates differ. Both cards remain in the listing, both routes are reachable, and the newsroom index reads in chronological order with the most recent event (launch) first.

**What this is not.** A step **advance**. `005-launch` was already released by the launch-day article; the capsule does not advance the step. It is a **backfill within** the step's already-released scope.

**What this does not change for later steps.** Step 006 (cruise), step 007 (landing), etc., remain at their original in-fiction dates and remain unwatermarked on the public record. The capsule does not carry any fact that gates a later step.

## 3. Canon consistency — claim-level trace

| Draft claim                                                                                | Released source                                                                                       | Status                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Red Horizon is a fictional, AI-assisted Mars exploration programme                         | `001-project-announcement.mdx:13-17`, `wiki/red-horizon.mdx:14-22`                                    | Released. Required fiction disclosure — present at draft `L12`.                                                                                                                                                      |
| Flight stack = Ariane 64 interface + cruise stage + EDL platform + RH-01 Pathfinder        | `004-launch-provider.mdx:16-19, :29-35`, `003-vehicle-design.mdx` (rover), `docs/SCENARIO.md:122-127` | Released architecture context. The capsule repeats the architecture only at the level needed to explain "flight stack travels together" (draft `L14-17`).                                                            |
| Ariane 64 = real launcher designation; no endorsement                                      | `004-launch-provider.mdx:23-27, :58-61`, `docs/vehicles/ariane/ariane-64.md:21-28`                    | Released designation. The capsule's two acknowledgement paragraphs (draft `L37-41` and the `_…_` close `L43-46`) match the wording the 004 article uses.                                                             |
| Flight stack arrives at the launch campaign site on 13 January 2031                        | `docs/SCENARIO.md:191` (locked milestone row)                                                         | **Locked scenario fact**; first public sentence to carry this row. Wording is `launch campaign site` (per Gate 004-B standing rule and the brief's wording boundary), not the facility name the milestone row holds. |
| Arrival begins a ground-campaign phase: integration, site checks, readiness work remain    | `004-launch-provider.mdx:51-56`, `docs/vehicles/ariane/ariane-64.md:99` (process context)             | Released process context. Draft `L20-24` phrases it as process, not as a claim that any test, review, or readiness gate has passed.                                                                                  |
| Public internal links only to `/news/004-launch-provider/` and `/news/003-vehicle-design/` | Released routes                                                                                       | Draft `L31-35` matches. No link to `/news/005-launch/`.                                                                                                                                                              |

`order: 5` is the latest published frontmatter; it does **not** encode chronology itself (the date does). `accent: amber` matches the launched article's `accent: amber` and is the visual mark for the launch step — it is the frontmatter's choice and is consistent with `category: Launch capsule 05`.

`status: Stack at launch campaign site` — verified: this describes the capsule's _event_, not an outcome. The capsule's own body uses present-perfect ("has reached", "remains") consistent with a published-status framing at this date.

**Internal link targets verified live**:

- `/news/004-launch-provider/` — live, returns 200 (page title `The launch architecture, chosen. | Red Horizon`); referenced at draft `L32`.
- `/news/003-vehicle-design/` — live, returns 200 (page title `The rover design, frozen. | Red Horizon`); referenced at draft `L34`.
- `/news/005-launch/` — **deliberately not linked**. The capsule precedes the launched article in fiction, so a link would assert what the capsule cannot carry. The forbidden scan found no `/news/005-launch/` reference anywhere in the draft.

## 4. Plausibility

- The arrival date is a routine ground-campaign event in the fictional programme (a real Ariane launch campaign includes a stack-arrival milestone; this dossier's user-facing wording is generic). The capsule does not assert who integrated the stack, which subsystem test was performed, what readiness gate was passed, or when fuelling/pad-rollout occurs — all of which the step-005 launch-day article and the dossier withhold.
- The body uses **present-perfect** (`has reached`, `has now arrived`) and **process-completion-future** (`remains in progress`) consistent with a public-status framing on 13 January 2031. No future perfect used, no claim that a launch is imminent.
- The capsule is **72 words** (plus headings and kicker prose, the body is short by Red Horizon voice standard — this capsule is a status update, not a discursive piece). Sentence lengths: 4 sentences in the body proper (draft `L13-18`, `L20-24`, `L26-29`, `L31-35`) plus two disclosure paragraphs (`L37-41`, `L43-46`). All under 30 words. Reads well in the newsroom card.

## 5. Spoiler safety

| Forbidden term                                        | Body hits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kourou` (case-insensitive)                           | 0 — facility name not used; `launch campaign site` is the brief's wording boundary.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `arianespace`                                         | 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `arianegroup`                                         | 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `\besa\b` (word boundary)                             | 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `european space agency` / `spaceport`                 | 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `ela-4` / `ela 4`                                     | 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `asteria` (word boundary)                             | 0 — landing-target name withheld; the capsule pre-dates landing in fiction.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `17 february 2031` / `february 17, 2031`              | 0 — the capsule's date is 13 January 2031; the launched article owns 17 February 2031.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `countdown`                                           | 1 (`L29`) — the negation "not a countdown". Read as a sentence about **what kind** of update this is (a status, not a countdown), not as a fact that a countdown is occurring. The source-pack forbidden ledger at `.agents/work/sources/milestone-2031-stack-arrival.md:120` lists the term, but the negation does not assert a countdown. The asset manifest at `.agents/work/assets/milestone-2031-stack-arrival/assets.md:85` flagged this hit to the reviewer; the wording is defensible as published and accepted under the manifest's "negated denial" reading. |
| `/news/005-launch/` link                              | 0 — the launched article is deliberately not cross-referenced; the capsule precedes it in fiction.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Gated text markers (build guard): `18° 42`, `226° 14` | 0 — landing-region coordinates withheld; capsule has no Mars-surface content.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## 6. Copy and frontmatter

- **Voice.** Red Horizon voice applied: informed, composed, candid, specific, modest. No marketing language ("breakthrough", "milestone moment" without the schema word — note that `Launch capsule 05` in the frontmatter _kicker_ is the schema's category string, not a body marketing word); no overstated certainty ("the flight stack is safe" — never appears; the body says it "remains in progress").
- **Frontmatter (`order: 5`, `category: Launch capsule 05`, `status: Stack at launch campaign site`, `accent: amber`).** All schema-valid. `accent: amber` matches the launched article; the visual mark for step 005. No `media*` field — confirmed by the content-schema rule (`newsMediaIssues()` returns no issue for the key absence on a body-only article).
- **Summary length.** 167 chars; the rule (`summary: under 160 chars`) reads "as a soft ceiling; longer is acceptable when the extra is the in-fiction disclosure". The capsule summary includes the flight-stack framing for context. F-observation only, not a finding: 167 chars; not a release blocker. Recorded for future templates.
- **Header structure.** No `<h1>` in the body — the page title is the schema's `title` rendered as the page H1 by `ArticleView.astro`. The body has no subheadings; this is consistent with the capsule's status-up framing. No image (matches the asset manifest's text-only decision).
- **Prose friction.** None observed.

## 7. Surface fail-closed verification

- `publication: draft` at draft `L5`. The `publication` predicate (`src/lib/publication.ts`) is the single source of truth for listing and route generation.
- **Live origin probe** (browser, 2026-09-19 11:11 CEST):
  - `GET https://mars-ai-simulation.janpolacek.workers.dev/news/milestone-2031-stack-arrival/` → **HTTP 404**. Body: 217 B. Verbatim response: `This mars-ai-simulation.janpolacek.workers.dev page can't be found / No webpage was found for the web address: https://mars-ai-simulation.janpolacek.workers.dev/news/milestone-2031-stack-arrival/ / HTTP ERROR 404`. Fail-closed default verified in fact, not only on paper.
  - `GET /news/005-launch/` → 200, with kicker `LAUNCH 05 · LAUNCHED`, title `Red Horizon launches for Mars.`, body 3,150 chars, date label `Simulated record date · 17 February 2031`. The published step-005 article is unaffected.
  - `GET /news/` → 200, lists the five published items newest-first (Launch, then Architecture, then Design, then Payload, then Announcement). The capsule is **not** in the listing, confirming the frontmatter's `draft` predicate blocks listing at collection-query level.
- The capsule's build card (`t_a3877295`'s sibling, `t_93895cff` per the card body) is what flips `publication: draft → published` and edits the frontmatter to add `simulatedDate: 2031-01-13`. This gate records the decision; the flip itself is out of scope.

## 8. Build-guard mirror (read-only)

Ran `/tmp/scan_capsule_guards.mjs` (mirrors `website/scripts/guards.mjs`'s `scanSourceForGatedReferences()` against the draft outside the repository, no `dist/` write).

- Site source scanned (the file the pipeline reads): `website/news/milestone-2031-stack-arrival.mdx`. **Offences: 0.**
- Working papers additionally scanned for thoroughness (`.agents/work/{briefs,sources,assets}/milestone-2031-stack-arrival/`): 5 hits, every one a "must not contain" rule that quotes the gated path inside backticks (e.g. `` `docs/timeline/` ``). These are negative-claim rules the visual manifest, source pack and brief use to enumerate what the draft must avoid; not real imports. None of these files is built into `dist/`; none is picked up by `check-dist()`.

A separate frontmatter probe (`/tmp/check_capsule_frontmatter.mjs`) confirmed:

- `newsMediaIssues()`-equivalent: no `media*` field, no issues.
- Body banned-marker hits: 0 for `18° 42` and `226° 14`; 0 for the institution/facility/launch-day family; 1 hit for `countdown` at draft `L29` (the negation).
- `/news/005-launch/` link hit: 0.

## 9. Conclusion

The article is **continuity-clear**: chronology holds; every claim traces to released material; the locked milestone row maps to a `simulatedDate` the schema accepts; the body is spoiler-clean; the `draft` predicate blocks listing and route on the live origin; the build-guard mirror returns zero offences for the draft; the frontmatter is schema-clean. The release decision is recorded in §"Release decision" of the companion review. The 005-launch capsule mapping is the right mapping. No canon change, no `docs/SCENARIO.md` write, no `docs/timeline/` write, no asset change.
