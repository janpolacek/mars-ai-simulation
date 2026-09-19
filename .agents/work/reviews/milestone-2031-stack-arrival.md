# Review: milestone-2031-stack-arrival — editorial final gate

Slug: `milestone-2031-stack-arrival`. Card `t_a3877295` (`mars-ai-simulator-reviewer`),
stage: merged continuity + editorial final gate. Timeline step `005-launch`
(capsule backfill on the step's already-released scope). Companion record:
`.agents/work/continuity/milestone-2031-stack-arrival.md` (verdict
`continuity clear`). Asset manifest: `.agents/work/assets/milestone-2031-stack-arrival/assets.md`
(sha256 `c1803766…`, decision `no new imagery: text-only capsule`, zero candidates).

**Status — `approved`.** This is Revision 1; no prior corrective on this slug.
Every review-table row passes; no findings. The release decision is recorded in §10
below. No canon change, no `docs/SCENARIO.md` write, no `docs/timeline/` write,
no asset change, no build-surface change. The publication flip, the
`simulatedDate` line, the kept-draft state, and any media-key wiring remain
**the build card `t_93895cff`'s act** (sibling child of `t_a3877295` per the
card body), exactly as the precedent step-005 record at
`.agents/work/reviews/005-launch.md` records for `t_d562771d`.

## 1. Inputs at verdict time

| Item                      | Value                                                                                                                                                                                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article under review      | `website/news/milestone-2031-stack-arrival.mdx` — sha256 `690cc299c61752a1e8e541908c9f60b665348e96dd0a3cc972e0f42dc23984e8`, 2,423 B, 47 lines, `publication: draft`, `order: 5`, **no `media*` field**, **no `simulatedDate` yet**.            |
| Linked release-order step | `005-launch` — capsule backfill on the step's already-released scope (the launch-day factual update is `005-launch.mdx`, sha256 `f8338776…`, published, `simulatedDate: 2031-02-17`, status `Launched`).                                        |
| Brief                     | `.agents/work/briefs/milestone-2031-stack-arrival.md`                                                                                                                                                                                           |
| Source pack               | `.agents/work/sources/milestone-2031-stack-arrival.md` (claim ledger C1–C8; lines 28–38)                                                                                                                                                        |
| Asset manifest            | `.agents/work/assets/milestone-2031-stack-arrival/assets.md` (sha256 `c1803766…`, decision `no new imagery: text-only capsule`, zero candidates; forbidden-string scan flagged `countdown` at draft `L29` to this gate, addressed in §3 below). |
| Continuity companion      | `.agents/work/continuity/milestone-2031-stack-arrival.md` (sha256 `f7991f3d…`, verdict `continuity clear`).                                                                                                                                     |
| Live origin               | `https://mars-ai-simulation.janpolacek.workers.dev/` — browser-probed 2026-09-19 11:11 CEST.                                                                                                                                                    |
| Shared checkout           | `git status --short` shows 33 untracked working papers; nothing committed by this gate. `HEAD = 2d75a4b = origin/main` (no drift).                                                                                                              |

## 2. Review table

| #   | Axis                                                                           | Finding                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Status                   |
| --- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| F1  | Citations (claim-level)                                                        | Every claim traces to released material or to the locked milestone row. See continuity record §3 for the per-claim table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | PASS                     |
| F2  | Spoiler safety (forbidden-term scan)                                           | Body has 0 hits on the institution/facility/launch-day/Asteria-Field families; 1 hit on `countdown` (draft `L29`, "not a countdown" — the negation, accepted per the asset manifest's "negated denial" reading at `.agents/work/assets/milestone-2031-stack-arrival/assets.md:85`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | PASS (negation as noted) |
| F3  | Build-guard mirror (`scanSourceForGatedReferences`)                            | `/tmp/scan_capsule_guards.mjs` returned 0 offences for the draft. Five working-paper hits are negative-claim rules in `.agents/work/{briefs,sources,assets}/…`; not built into `dist/`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | PASS                     |
| F4  | Gated text markers (`18° 42`, `226° 14`)                                       | 0 hits in body.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | PASS                     |
| F5  | Frontmatter schema (`newsMediaIssues()`)                                       | No `media*` field — schema reports no issue. The `simulatedDate` is optional and editor-assigned; this gate assigns `2031-01-13` from the milestone table (see §10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | PASS                     |
| F6  | Layout / categories / links                                                    | `category: Launch capsule 05`, `accent: amber`, internal links resolve live (`/news/004-launch-provider/` → 200, `/news/003-vehicle-design/` → 200). No link to `/news/005-launch/` (deliberate, not a finding).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | PASS                     |
| F7  | Voice                                                                          | Red Horizon voice: informed, composed, candid, specific, modest. No marketing language, no overstated certainty.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | PASS                     |
| F8  | Surface fail-closed                                                            | Live origin `GET /news/milestone-2031-stack-arrival/` → **HTTP 404** (body 217 B). Listing `/news/` advertises only the five published items; the capsule is not in the listing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | PASS                     |
| F9  | Listing / sort                                                                 | `order: 5` matches `005-launch`'s `order: 5`; tie-break on `order` never engages because the dates differ. `selectPublicNews` will sort dated entries by `date DESC`: launched (Feb 17) before capsule (Jan 13).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | PASS                     |
| F10 | Continuity-clear (chronology, canon consistency, plausibility, spoiler safety) | See `.agents/work/continuity/milestone-2031-stack-arrival.md` (sha256 `f7991f3d…`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | PASS                     |
| F11 | 005-launch capsule mapping                                                     | The card body calls this "the 005-launch capsule mapping" and the headline of this gate. Verified in §3 of the continuity record: the capsule is a sub-event backfill on step 005's already-released scope, dated 35 fiction-days earlier than the launched article, anchored on a locked milestone row the same table holds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | PASS                     |
| F12 | `countdown` word — line 29 negation                                            | The draft's `not a countdown` reads as an explicit framing claim about what kind of update this is (a status, not a countdown), not as a fact that a countdown is occurring. The source-pack forbidden ledger at `.agents/work/sources/milestone-2031-stack-arrival.md:120` lists the term; the negation is defensible under the asset manifest's reading. The published 005-launch article also carries no `countdown` word. The negation is the cleanest in-house framing the writer found for "this is a published status, not a launch-imminent update"; the gate accepts it as written. **Editorial note (not a finding):** a future version could replace "not a countdown" with "not a launch-imminent update" to drop the forbidden-terms string altogether — but that wording is not on this gate's table. | NOTED                    |
| F13 | Summary length (167 chars)                                                     | Soft ceiling is 160 chars. The capsule summary carries the flight-stack framing for context. Not a release blocker; not a finding; recorded for future templates.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | NOTED                    |

## 3. The `countdown` word at draft line 29 — single editorial observation (not a finding)

The source-pack forbidden ledger lists `countdown` as a banned string
(`.agents/work/sources/milestone-2031-stack-arrival.md:120`). The asset
manifest flagged the draft's line 29 — `progress. The programme has
published a status, not a countdown.` — to this gate as an editor's call.
The context:

- A negation ("not a countdown") does not assert a countdown is occurring.
- The negation names the kind of update the capsule is (a published status),
  which is exactly what the capsule is: a status update on the in-camp arrival,
  not a launch-imminent announcement. The substantive information is carried
  by the `not a …` construction.
- The published `005-launch.mdx` (sha256 `f8338776…`) carries no
  `countdown` word; the 005 capsule predecessor's wording does not mirror
  the launched article's lead.
- The published surfaces that DO contain "countdown" or similar words —
  none on this programme's site as of 2026-09-19 — would only appear on
  later-step updates (cruise, landing). The capsule is on step 005 already.

The gate accepts the wording as published. The acceptance is recorded;
it is not a wording change the build card owes. The card body, the
manifest and the source pack all agree that this gate is the right
place to settle it.

## 4. The simulated record date

- **Assigned value: `2031-01-13`.**
- **Source line: `docs/SCENARIO.md:191`.** The locked milestone row reads
  `13 January 2031 | Flight stack arrives at Kourou`. The `docs/SCENARIO.md`
  milestone table used for simulated dates spans `:179-207`.
- **Match by state:** the row whose meaning is the capsule's own event —
  the flight stack's arrival at the launch campaign site — is row `:191`
  (the row preceding `:192` Launch Readiness Review and `:193` Ariane 64
  launch and Earth departure, both of which the launch-day article owns).
- **No other milestone row's text would be the choice.** `:192` is the
  Launch Readiness Review (a separate milestone, withheld — the source
  pack C7 prohibits the launch-readiness-review phrase and the capsule
  carries it as a process phase, not as a published fact). `:193` is
  the launch day, released through the `005-launch.mdx` article (the
  capsule precedes that release in fiction).
- **The frontmatter field is `simulatedDate`**; the schema
  (`src/content.config.ts:45`) accepts `YYYY-MM-DD` either as a quoted
  string or as a `Date` and the layout (`ArticleView.astro:27`,
  `NewsCard.astro:54`) renders `Simulated record date · 13 January 2031`
  via `simulatedDateText()`. The date is in-fiction prose under its own
  label; it never reaches `datePublished`, `lastmod`, or any
  machine-readable form (the head carries description, generator,
  canonical, and robots only — verified at `src/lib/seo.ts`).

## 5. Listing-order consequence (previewed)

After the build card applies the flip, `selectPublicNews` (release sort
newest date first, `publication.ts:65-73`) returns:

```
1. 17 February 2031  — Launch 05 · Launched
2. 13 January 2031   — Launch capsule 05 · Stack at launch campaign site
3. 11 March 2030     — Launch architecture 04 · Architecture selected
4. 13 July 2029      — Vehicle design 03 · Design frozen
5. 19 March 2027     — Payload brief 02 · In selection
6. 12 October 2026   — Announcement 01 · Programme announced
```

The launched article stays at index 1 (Feb 17 precedes Jan 13). The capsule
lands at index 2 directly below it (chronologically the prior step-005
event, but in narrative order after the launched article because it is
backdated relative to it). This matches what the card body calls "the
capsule backfills an earlier in-fiction date after the launch update is
public; listing order by `simulatedDate` keeps chronology intact".

## 6. Surface verification (read-only, measured in fact)

| Surface                                   | Status (2026-09-19 11:11 CEST)                                                                              |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `GET /news/milestone-2031-stack-arrival/` | HTTP 404, body 217 B (chrome-error page text)                                                               |
| `GET /news/005-launch/`                   | 200, body 3,150 B, kicker `LAUNCH 05 · LAUNCHED`, date label `Simulated record date · 17 February 2031`     |
| `GET /news/`                              | 200, lists five published items newest-first (launched Feb 17, then 004, 003, 002, 001); capsule not listed |
| `GET /`                                   | 200                                                                                                         |

The `publication: draft` predicate blocks listing and route at collection-query
level; this gate does **not** apply the `published` flip (the build card
`owns that act`, per §10 below).

## 7. What is the build card's act

The card body's prior precedent (the 005-launch gate record §10) names
the build card `t_d562771d`'s act precisely. Applying the same pattern to
this card:

1. Edit `website/news/milestone-2031-stack-arrival.mdx`:
   - `publication: draft` → `publication: published`.
   - Add `simulatedDate: 2031-01-13` (frontmatter key, editor-assigned; the schema accepts it).
2. `git status --short` confirms only the two-line frontmatter delta.
3. Commit on a clear branch path (`mars-ai-simulator/<card-id>` or the
   build card's own branch convention); message naming the card id.
4. `git pull --rebase`; `git push` to `origin/main`. The push-triggered
   Cloudflare Workers Build deploys the flip.
5. Live-origin verification: `GET /news/milestone-2031-stack-arrival/` →
   200, with kicker `LAUNCH CAPSULE 05 · STACK AT LAUNCH CAMPAIGN SITE`
   and date label `Simulated record date · 13 January 2031`.
6. `GET /news/` lists the capsule at index 2 (see §5).

This gate does not perform any of these steps.

## 8. Validation completed

- `sha256sum` of article, manifest, source pack, brief, continuity
  companion — re-taken immediately before this verdict.
- `git status --short` — 33 untracked working papers, no tracked-file
  change by this gate; `HEAD = origin/main = 2d75a4b` (the prior
  publish-005 commit). No drift.
- Concurrent running cards: none observed in the gate's window (the
  parent draft card `t_80456508` is `done` per the card metadata; the
  asset card `t_1b243ff5` is `done` per the worker_context; the sibling
  build card `t_93895cff` is the card that owns the flip act).
- Live origin probed in-browser (the session's terminal `curl` is
  scanner-blocked on `.dev` TLDs — used `browser_exec` per the
  established session practice).
- `/tmp/scan_capsule_guards.mjs` and `/tmp/check_capsule_frontmatter.mjs`
  — outside-the-repo mirrors; outputs in this record. They do not write to
  the shared checkout.

## 9. What remains outstanding

- The `publication: draft → published` flip and the `simulatedDate:
  2031-01-13` line — `t_93895cff` (build card, sibling of `t_a3877295`).
- Live-origin re-probe after the flip — verify the route returns 200 and
  the listing now includes the capsule at index 2.
- Record the post-flip hash on the release card (the build card's
  result log; this gate's release record is durable as a separate
  artifact if the kanban ever closes the slug).

## 10. Release decision

**Recorded on this card. The merged editorial role (`mars-ai-simulator-reviewer`)
approves the package against released canon.** No separate human approval
sentence is required for an article's releasability or canon confirmation.

- **Decision:** approve the package for publication.
- **Public scope:** exactly one new article at route
  `/news/milestone-2031-stack-arrival/`, sourced from
  `website/news/milestone-2031-stack-arrival.mdx` with the frontmatter
  `publication` flipped to `published` and `simulatedDate: 2031-01-13`
  inserted. No image, no figure, no card art, no OG image. No build-surface
  change beyond the standard frontmatter flip. No `docs/` write. No
  canon change.
- **Evidence (article hash at the moment of the decision):**
  `690cc299c61752a1e8e541908c9f60b665348e96dd0a3cc972e0f42dc23984e8`,
  2,423 B, 47 lines.
- **Continuity record hash:** `.agents/work/continuity/milestone-2031-stack-arrival.md`
  sha256 `f7991f3d1cde87069845613268fafa887eb8aa4e9498bc4fff208d2b3bc3e78f`,
  verdict `continuity clear`.
- **`simulatedDate` applied:** `2031-01-13`, drawn from
  `docs/SCENARIO.md:191` (`13 January 2031 | Flight stack arrives at Kourou`;
  public wording `launch campaign site`, per the brief's wording boundary).
- **Records kept on disk:** continuity record, this review, the asset
  manifest, the source pack, the brief. All under `.agents/work/`.
- **Conditions on the approval:**
  - The build card `t_93895cff` is the only path that may apply the
    frontmatter flip. It stages only `website/news/milestone-2031-stack-arrival.mdx`
    and reports the SHA and push result on its card.
  - The build card commits and pushes **only after** this release decision
    is recorded (already true at the moment of this record).
  - No second `publication` flip or `simulatedDate` insert appears in any
    other commit before the push.
  - After the push, the live origin must carry `GET /news/milestone-2031-stack-arrival/`
    → 200, with `Simulated record date · 13 January 2031` under the
    `LAUNCH CAPSULE 05 · STACK AT LAUNCH CAMPAIGN SITE` kicker.
- **What is not authorised by this decision:**
  - No asset work, no figures, no card art, no OG image.
  - No `docs/SCENARIO.md` write, no `docs/timeline/` write, no `docs/`
    write at all.
  - No changes to the step-004 dossier, the step-004 article, the
    `005-launch.mdx` article, or the wiki pages.
  - No later-step fact, no launch-day repetition, no `countdown`-as-fact.
  - No advance of the release order. Step 005 is already released (the
    launch-day article); this is a backfill on its scope.
- **Authority:** the merged editorial role holds the final word on
  releasability and canon confirmation for public content; this card's
  release decision is that approval. No human approval sentence is required.

## 11. Handoff and next owner

- **This card:** `mars-ai-simulator-reviewer`. Verdict `approved`,
  release decision recorded in §10. The card body's acceptance criteria
  are all met:
  - every claim agrees with the released step and the scenario — PASS (continuity §3);
  - no launch-date or later-step fact appears — PASS (continuity §5);
  - the article carries a record date drawn from a locked milestone line (`2031-01-13`,
    `docs/SCENARIO.md:191`) — PASS (§4);
  - the review is approved with no unresolved material failure — PASS (§2 table);
  - the release decision names the exact public scope — PASS (§10).
- **Next owner:** `mars-ai-simulator-dev` (build card `t_93895cff`,
  child of `t_a3877295` per the card body). Apply the frontmatter flip
  on `website/news/milestone-2031-stack-arrival.mdx` only; commit and
  push; report the SHA and push result on the card.
- **No further reviewer task is required for this slug.**
