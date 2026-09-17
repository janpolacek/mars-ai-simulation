# Review: wiki-gate-c — editorial gate and release decision (Gate C, first public wiki content)

Slug: `wiki-gate-c`. Card `t_c77be834` (`mars-ai-simulator-editor`), stage `wiki tree` (gate).
Companion record: `.agents/work/continuity/wiki-gate-c.md` (`continuity clear`, withhold state).

## Review metadata

| Field                      | Value                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card / stage               | `t_c77be834` — Gate C: canon confirmation and release decision for the first public wiki content. Parents `t_9b2a308d` (`done`, Gates A/B) and `t_b2c55032` (`done`, SEO structural review); child `t_6f4f785e` (gate ledger, `todo`). **Not a package review and not a page release**                                                                   |
| Package under review       | **None exists.** No wiki page, draft, source pack or frontmatter is in the tree: `website/wiki/` is absent in the shared checkout and in every worktree; `origin/main` `72743e5` carries only the collection's code (routes, query, config, tests)                                                                                                       |
| The gate's question        | May the first wiki page(s) be published as public canon? Original card form: a human approval sentence. Current form (authority changed 2026-09-17): the merged editorial role confirms against released canon and records the release decision itself                                                                                                   |
| Recorded human material    | Operator answer on this card, 2026-09-17 13:40 CEST, verbatim: _"Withhold — no wiki page published yet; I approve on the release card when the page is ready."_ Operator authority change on this card, same timestamp: the approval sentence is no longer required from the human; it is a recommendation the merged role may apply to its own decision |
| Evidence boundary          | Shared tree `HEAD` `0ca543f815b3bd8293440f1ebca0fd5782d03933`, 13 commits behind `origin/main` `72743e5cc9e509b80217199bc368952ac1d3bf1f` (wiki routes landed in `4500b95`); route code and live surface read, nothing reset or checked out. Input hashes re-taken at 13:42 CEST (all unchanged)                                                         |
| Fail-closed state          | Verified **live** at 2026-09-17 13:42 CEST, not on paper: `/wiki/` 200 / 4,639 bytes / sha256 `c4b22582…` with an empty index; `/wiki/area/`, `/wiki/vehicle/`, `/wiki/project/` and all three candidate leaf routes 404; no sitemap document; `robots.txt` mentions no wiki route                                                                       |
| Released material compared | `website/news/001-project-announcement.mdx` + `002-payload-selection.mdx` (`publication: published`); `003-vehicle-design.mdx` is `publication: draft`, so step 003 is not public; `docs/SCENARIO.md` `99206373…` release controls at `:272-282`                                                                                                         |
| Release decision           | **Withhold — no release.** Recorded as its own sentence in §2, not inferred from the status row                                                                                                                                                                                                                                                          |
| Verdict written            | 2026-09-17 13:42-13:46 CEST, against the shared tree and the live origin                                                                                                                                                                                                                                                                                 |
| Mid-run movements          | Two, both recorded in §5 as observations: dev card `t_a01bca40` (running, index metadata only — live `/wiki/` still byte-identical to the pre-change build) and the operator label settlement on the ledger at 13:45 CEST (labels only, no page, no fact)                                                                                                |
| Status                     | **`approved`** — the withhold state is correct, complete and verified, and the gate is satisfied without a release. `approved` here approves the _gate record_, not any page: the release decision is the sentence in §2 (§1)                                                                                                                            |

## 1. Verdict

**`approved`** as a gate record. The fail-closed default is the right answer for this card, it is
implemented and observable live, and the gate can close without releasing anything.

Three things this approval deliberately does **not** do:

1. **It does not release a page.** No wiki content package exists to confirm against released canon,
   so the release decision is `withhold` (§2). `approved` describes the gate record; a later reader
   must take the release decision from §2's sentence and from nothing else.
2. **It does not invent the card-body sentence.** The sentence
   _"I approve the [vehicle/area/project] wiki page(s) for public release as of [date]…"_ cannot be
   applied: there is no page and no date, and writing it here would manufacture an approval no one
   made. Under the 2026-09-17 authority change it is wording this role _may_ apply to its own release
   decision — and the decision it applies to is the one recorded on the first wiki page's release
   card, when that page exists (§4, C1).
3. **It does not advance the release order.** Step 003 is not public in this checkout, and the wiki
   area/project nodes were released in _state_ only (Gate A/B). Publishing a page whose facts need a
   step the release order has not reached stays the human story owner's call (§4, C3).

Nothing was changed by this gate: no `website/` file, no canon file, no brief, no card body, no push.
The two records it writes are new files; every other path this run touched was read-only.

## 2. Release decision (the gate's own sentence)

> **Release decision, `t_c77be834` (Gate C), recorded 2026-09-17 CEST by `mars-ai-simulator-editor`:
> no wiki page is released at step 003. No wiki content package exists to confirm against released
> canon, so the fail-closed default stands — every wiki page stays `publication: draft`, `/wiki/`
> stays an empty index, the section and leaf routes stay 404, and no push may carry wiki content into
> the public site. The release decision for the first wiki page(s) is this role's to record, on that
> page's own release card, after the editorial chain has run; that release card must exist before any
> `publication: published` flip.**

Exact public scope of this decision: **nothing becomes public.** The wiki tree's only public surface
remains `/wiki/`, an index with zero entries, in the state measured in §5.

Evidence behind the decision: the absence of any wiki content artifact in the tree; the live 404s on
every section and leaf route; the empty live index at sha256 `c4b22582…`; the operator's withhold
recorded on this card; the merged role's authority to decide without a human sentence; and
`docs/SCENARIO.md:279`, which keeps the publication flip gated while releasing the area node's state.

## 3. Review table

| #  | Check                                                                   | Result              | Evidence                                                                                                                                                                                                                                                  |
| -- | ----------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Card read against its own body, its parents and the plan                | PASS                | Body asks for the approval sentence and the fail-closed default; parents `t_9b2a308d` (`done`), `t_b2c55032` (`done`); plan `.agents/work/briefs/wiki-tree-plan.md` `3fe2ec55…` §"Decisions required" already carries the authority change                |
| 2  | The gate's human record is quoted, not paraphrased                      | PASS                | Operator comment on this card, 2026-09-17 13:40 CEST (comment ts `1789645064`): _"Withhold — no wiki page published yet; I approve on the release card when the page is ready."_                                                                          |
| 3  | The authority the decision rests on is stated                           | PASS                | Operator authority change 2026-09-17 (comment ts `1789645212`): the sentence is a recommendation the merged role may apply; corroborated by this role's own definition and `docs/INSTRUCTIONS.md` §source-of-truth                                        |
| 4  | No human approval is invented or inferred                               | PASS                | 0 approval sentences attributed to a human in this record or in the continuity record; the card-body sentence appears only as a quoted template and as an unapplied recommendation                                                                        |
| 5  | Fail-closed default holds in the tree                                   | PASS                | No `website/wiki/` directory, no wiki `.mdx`, no `publication: published` wiki frontmatter anywhere in the shared checkout or any worktree; the only wiki paths on `origin/main` are code                                                                 |
| 6  | Fail-closed state verified in fact, not only on paper                   | PASS                | Live in-page fetch at 13:42 CEST: `/wiki/` 200 (4,639 bytes, sha256 `c4b22582…`, 0 page entries); `/wiki/area/`, `/wiki/vehicle/`, `/wiki/project/`, `/wiki/area/asteria-field/`, `/wiki/vehicle/rh-01-pathfinder/`, `/wiki/project/red-horizon/` all 404 |
| 7  | No public emission exists                                               | PASS                | `/sitemap.xml` and `/sitemap-index.xml` 404; `robots.txt` 200 and names no wiki route; `/wiki/` carries 0 canonical links and 0 `ld+json` scripts                                                                                                         |
| 8  | No withheld or future material on the served surface                    | PASS                | Gated-term scan of the served `/wiki/` bytes: 0 hits (category terms read at run time, reported by count only); 0 dates, step numbers or future-event names in the served document                                                                        |
| 9  | Decision agrees with released canon                                     | PASS                | `docs/SCENARIO.md` `99206373…` `:279` keeps the wiki publication flip gated while releasing the area node's state at step 003; withholding every page implements that exactly                                                                             |
| 10 | Landing-design and programme-frame withholds intact                     | PASS                | Withhold list cited by location (`docs/SCENARIO.md:279`, H1 decision 2026-09-17 option i) and by category name only; no withheld value, coordinate, unit identifier or plate content appears in either new record                                         |
| 11 | Chronology and spoiler check complete for this card                     | PASS                | `.agents/work/continuity/wiki-gate-c.md` — `continuity clear` for the withhold state: no page, no claim, no release, no later-step material in the tree, the build or the new records                                                                     |
| 12 | Copy gate on the records this gate writes                               | PASS                | Plain, specific, ASCII; the withhold is stated as a decision rather than hedged; no slogan, no unsupported certainty, no acronym left undefined                                                                                                           |
| 13 | Upstream gate records are current and consistent                        | PASS                | `reviews/wiki-index-metadata.md` `c545ed5c…` (`approved`, index wording only) and `continuity/wiki-index-metadata.md` `11b0ff50…` (`continuity clear`); neither is a release and neither is contradicted here                                             |
| 14 | The withhold is written into the content chain, not only into this card | PASS with condition | `t_f9298a63` (area) and `t_927e91b5` (project) are `todo`, gated on the ledger `t_6f4f785e`, and their bodies carry the withhold rules and the landing-design list. Their wording still reads as a human sentence requirement — reconciled under C2       |
| 15 | A release card exists for the first wiki page(s)                        | PASS with condition | **No release card exists.** None may be created for content that has not been written; C1 makes its existence the precondition of any flip, and it is recorded on the ledger for the pipeline owner                                                       |
| 16 | Facts beyond the released step are not settled here                     | PASS with condition | Step 003 is not public (`website/news/003-vehicle-design.mdx` is `draft`; release card `t_dcd80a99` `todo`). Routed, not decided: C3                                                                                                                      |
| 17 | No canon file, brief or other worker's artifact was edited              | PASS                | `docs/SCENARIO.md`, `docs/timeline/`, the dossiers, `.agents/work/briefs/wiki-tree-plan.md`, `.agents/work/releases/wiki-001-vehicle.md` and the SEO package are unread-modify; this run created two records only                                         |
| 18 | No external action of any kind                                          | PASS                | No commit, no push, no deploy, no hosting/DNS/credential use, no media upload; `publication:` fields untouched this run                                                                                                                                   |
| 19 | Concurrent work probed for interference                                 | PASS with note      | `t_a01bca40` (dev, wiki index metadata) `running` in its own worktree — index strings only, no ability to publish a page; live `/wiki/` still byte-identical to the pre-change build at 13:42 CEST (§5)                                                   |
| 20 | Asset provenance                                                        | N/A                 | No image, media key, alt string or OG asset is proposed or touched by this gate                                                                                                                                                                           |

## 4. Conditions attached to this approval

- **C1 — a release card must exist before any flip.** The first wiki page's release card is the place
  the release decision is recorded by this role (exact public scope, evidence, file hash at the flip).
  No page may be flipped to `publication: published` while that card does not exist. Owner: the card
  that opens the first wiki content pipeline (planner, via the ledger `t_6f4f785e`).
- **C2 — the content cards' Gate C wording is superseded.** `t_f9298a63` and `t_927e91b5` still state
  that the human must write the approval sentence verbatim. Under the 2026-09-17 authority change the
  condition is the _editorial release decision recorded on the release card_. The withhold itself is
  unchanged and fail-closed; only the owner of the decision moved. Correcting the card bodies is the
  owning role's edit, not this gate's — `AGENTS.md` forbids silently repairing another worker's
  artifact. Owner: planner, on the ledger.
- **C3 — release-order limit stays with the human.** If publishing the first wiki page requires a
  fact, image or outcome beyond what the released material already allows (step 003 itself is not yet
  public), that is new scenario canon and the human story owner's decision. This gate neither grants
  nor forecloses it; it records the limit.
- **C4 — the withhold lists bind independently.** Landing-design material (`docs/SCENARIO.md:279`, H1
  decision 2026-09-17 option i) and the programme-frame withhold stay in force for prose, alt text and
  captions, at every later step, regardless of who records a release decision.

## 5. Mid-run observations (non-blocking)

| Time (CEST)      | Movement                                                                                                         | Effect on this verdict                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 2026-09-17 13:42 | `t_a01bca40` (dev) running: applies approved wiki index titles, descriptions, section labels                     | None — index strings are not gated by this decision and cannot publish a page. Live `/wiki/` unchanged at measurement |
| 2026-09-17 13:45 | Operator settlement on the ledger `t_6f4f785e`: labels `Landing Zones` / `Vehicles` / `Project`                  | None — settles labels only, explicitly releases no page and no fact                                                   |
| 2026-09-17 13:42 | Re-hash of all five gate inputs (`docs/SCENARIO.md`, the brief, the release plan, the two upstream gate records) | None — all hashes identical to the reads cited in §3                                                                  |

## 6. What is outstanding, and who owns it

| Item                                                                                                  | Owner                       | Where it is recorded                     |
| ----------------------------------------------------------------------------------------------------- | --------------------------- | ---------------------------------------- |
| Record this decision verbatim in the gate ledger and reconcile the content cards' Gate C wording (C2) | `mars-ai-simulator-planner` | ledger `t_6f4f785e` comment by this gate |
| Open the first wiki content pipeline and create its release card before any flip (C1)                 | `mars-ai-simulator-planner` | ledger `t_6f4f785e`                      |
| Run the editorial gate on each wiki page when it is written (per-page canon confirmation)             | `mars-ai-simulator-editor`  | that page's review + continuity records  |
| Release-order question, if a page needs later-step facts (C3)                                         | human story owner           | that page's release card                 |
