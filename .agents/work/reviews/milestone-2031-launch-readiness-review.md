# Review: milestone-2031-launch-readiness-review — editorial final gate

Slug: `milestone-2031-launch-readiness-review`. Card `t_98f4e551`
(`mars-ai-simulator-reviewer`), stage: merged continuity + editorial
final gate. Timeline step `005-launch` (pre-launch **capsule** backfill —
the launch-day factual update is already released as `005-launch.mdx`).
Companion record: `.agents/work/continuity/milestone-2031-launch-readiness-review.md`
(verdict `continuity clear`; the gate clears and the release decision is
recorded in §"Release decision" of this record). Asset manifest:
`.agents/work/assets/milestone-2031-launch-readiness-review/assets.md`
(sha256 `930063fc…`, decision `no new imagery: text-only capsule`, zero
candidates).

**Status — `approved`.** This is Revision 1; no prior corrective on this
slug. Every review-table row passes; no findings. The release decision
is recorded in §"Release decision" below. No canon change, no
`docs/SCENARIO.md` write, no `docs/timeline/` write, no asset change, no
build-surface change. The publication flip, the `simulatedDate` line,
and the kept-draft state remain **the build card `t_70dc2c75`'s act**
(sibling child of `t_98f4e551` per the card body), exactly as the
precedent step-005 records at `.agents/work/reviews/005-launch.md` §10
(recorded for `t_d562771d`) and
`.agents/work/reviews/milestone-2031-stack-arrival.md` §10 (recorded for
`t_93895cff`).

## 1. Inputs at verdict time

| Item                      | Value                                                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article under review      | `website/news/milestone-2031-launch-readiness-review.mdx` — sha256 `ac0b330d6c60e6fb61b4bdddfa9255b6851534184de7873c4c463bc8eafdae37`, 2,883 B, 56 lines, `publication: draft` (line 5), `order: 5`, `accent: amber`, **no `media*` field**, **no `simulatedDate` yet**, **no `author`**. Frontmatter 8 keys, all schema-conformant.  |
| Linked release-order step | `005-launch` — capsule backfill on the step's already-released scope (the launch-day factual update is `005-launch.mdx`, sha256 `f8338776…`, published, `simulatedDate: 2031-02-17`, status `Launched`; the stack-arrival capsule is `milestone-2031-stack-arrival.mdx`, sha256 `690cc299…`, published, `simulatedDate: 2031-01-13`). |
| Brief                     | `.agents/work/briefs/milestone-2031-launch-readiness-review.md` (sha256 `7788c378…`)                                                                                                                                                                                                                                                  |
| Source pack               | `.agents/work/sources/milestone-2031-launch-readiness-review.md` (sha256 `dcda4867…`; claim ledger C1–C8, lines 28–38; release-order mapping §"Released article 005", lines 58–70)                                                                                                                                                    |
| Asset manifest            | `.agents/work/assets/milestone-2031-launch-readiness-review/assets.md` (sha256 `930063fc…`, decision `no new imagery: text-only capsule`, zero candidates; canonical.png not reused)                                                                                                                                                  |
| Continuity companion      | `.agents/work/continuity/milestone-2031-launch-readiness-review.md` (verdict `continuity clear`; the chronology, canon, plausibility and spoiler reasoning)                                                                                                                                                                           |
| Live origin               | `https://mars-ai-simulation.janpolacek.workers.dev/` — browser-probed 2026-09-19 ~13:50 CEST.                                                                                                                                                                                                                                         |
| Shared checkout           | `git status --short` shows 33 untracked working papers + the untracked `website/news/milestone-2031-launch-readiness-review.mdx`; nothing committed by this gate. `HEAD = 8093a01 = origin/main` (no drift).                                                                                                                          |

## 2. Review table

| #   | Axis                                                                           | Finding                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Status |
| --- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| F1  | Citations (claim-level)                                                        | Every claim traces to released material or to the locked milestone row this capsule reports. See continuity record §3 for the per-claim table (10 rows).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | PASS   |
| F2  | Spoiler safety (forbidden-term scan)                                           | Body has 0 hits on the institution / operator / facility / launch-day / Asteria-Field / coordinate-marker / `docs/timeline` / withheld-filename / countdown / telemetry families; 3 hits on `Ariane 64` (the cleared designation, same form 004/005-launch use); 1 hit on `approved` (inside the closing italic disclosure, the verbatim non-endorsement phrase "endorsed or approved it", same pattern as 001–005-launch). See continuity record §4 for the full family-scan table.                                                                                                                                                               | PASS   |
| F3  | Build-guard mirror (`scanSourceForGatedReferences`)                            | The gate's outside-the-repo scanner (`/tmp/rh-launch-readiness/scan_families.mjs`) returned 0 offences against the article. Working-paper hits in `.agents/work/{briefs,sources,assets}/…` are negative-claim rules (every flagged token sits inside a "must not contain" list) and are not built into `dist/`.                                                                                                                                                                                                                                                                                                                                    | PASS   |
| F4  | Gated text markers (`18° 42`, `226° 14`)                                       | 0 hits in body.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | PASS   |
| F5  | Frontmatter schema (`newsMediaIssues()`)                                       | No `media*` field — schema reports no issue. The `simulatedDate` is optional and editor-assigned; this gate assigns `2031-02-11` from the milestone table (see §"The simulated record date"). The full frontmatter is parsed via `js-yaml` (`/tmp/rh-launch-readiness/parse_frontmatter.mjs`): keys `title, category, status, publication, summary, linkLabel, order, accent`; `publication: draft`; `category: Launch capsule 05`; `status: Readiness review milestone`; `order: 5`; `accent: amber`; title 35 chars, summary 143 chars, linkLabel 23 chars.                                                                                      | PASS   |
| F6  | Layout / categories / links                                                    | `category: Launch capsule 05`, `accent: amber`, internal links resolve live (`/news/004-launch-provider/` → 200, `/news/milestone-2031-stack-arrival/` → 200, `/#mission` → 200). No link to `/news/005-launch/` (deliberate, not a finding — the capsule precedes the launched article in fiction; chronology discipline).                                                                                                                                                                                                                                                                                                                        | PASS   |
| F7  | Voice                                                                          | Red Horizon voice: informed, composed, candid, specific, modest. "The team began a structured check … its systems, its operations, and the open risks that remain before the vehicle leaves Earth." "What this update does not establish is any outcome." "The programme has published a status, not a clearance." No marketing language, no overstated certainty, no urgency, no superlative.                                                                                                                                                                                                                                                     | PASS   |
| F8  | Surface fail-closed                                                            | Live origin `GET /news/milestone-2031-launch-readiness-review/` → **HTTP 404** (body length 0). Listing `/news/` does **not** contain the slug (`contains 'milestone-2031-launch-readiness-review' slug: false`). The capsule is fail-closed at the live origin.                                                                                                                                                                                                                                                                                                                                                                                   | PASS   |
| F9  | Listing / sort                                                                 | After the build card applies the flip, `selectPublicNews` (release sort newest date first, `publication.ts:65-73`) returns the capsule at **index 2** (Feb 17 launched → Feb 11 capsule → Jan 13 stack-arrival → Mar 11 2030 → …). The launch article stays at index 1 (Feb 17 > Feb 11 > Jan 13). Verified by the outside-the-repo simulation at `/tmp/rh-launch-readiness/simulate_listing.mjs`.                                                                                                                                                                                                                                                 | PASS   |
| F10 | Continuity-clear (chronology, canon consistency, plausibility, spoiler safety) | See `.agents/work/continuity/milestone-2031-launch-readiness-review.md` (verdict `continuity clear`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | PASS   |
| F11 | 005-launch capsule mapping                                                     | The card body calls this "the 005-launch capsule mapping" and the headline of this gate. Verified in §2 of the continuity record: the capsule is a sub-event backfill on step 005's already-released scope, dated 6 fiction-days earlier than the launched article and 29 fiction-days later than the stack-arrival capsule, anchored on a locked milestone row the same table holds (`:192`, sandwiched between `:191` and `:193`).                                                                                                                                                                                                               | PASS   |
| F12 | No review outcome                                                              | The article's only "approved" mention is inside the closing italic disclosure (L56, "none of them has endorsed or approved it"), the same verbatim non-endorsement phrase 001–005-launch use. The body explicitly says "What this update does not establish is any outcome" (L32–L36) and "The programme has published a status, not a clearance" (L35–L36). No pass/fail result, no launch authorisation, no certification, no safety concurrence, no waiver, no readiness score, no named anomaly, no corrective action, no unresolved risk, and no claim that the mission is ready to launch.                                                   | PASS   |
| F13 | No launch day (17 February 2031)                                               | 0 hits on `17 February 2031`, `February 17`, `17/02/2031`, `launch date`, `launch day`, `launch window`. The article reports the readiness-review day (`:192`, `11 February 2031`) as the moment the review begins, six days before the launch day. The launch day stays banned from prose, summary, linkLabel, metadata, and internal links (no link to `/news/005-launch/`).                                                                                                                                                                                                                                                                     | PASS   |
| F14 | No later-step fact                                                             | 0 hits on rows `:194` (3 March 2031 first correction), `:195` (20 May 2031 cruise checkout), `:197` (16 September 2031 arrival), `:198`–`:207` (post-arrival). The article carries no trajectory, cruise, landing, surface, science, or end-of-life detail.                                                                                                                                                                                                                                                                                                                                                                                        | PASS   |
| F15 | No real institution / launch-facility name                                     | 0 hits on `Arianespace`, `CNES`, `ESA`, `FEI STU`, `ArianeGroup`. 0 hits on the launch-facility family (`Europe's Spaceport`, `Guiana`, `Centre Spatial Guyanais`, `Kourou`, `ELA-4`). The article does not mention the launch site.                                                                                                                                                                                                                                                                                                                                                                                                               | PASS   |
| F16 | SEO package (integrated into the frontmatter)                                  | Search intent ("Tell me when the launch-readiness review begins"): title ("The launch-readiness review begins.") + summary + first paragraph answer it. Title 35 chars, summary 143 chars (under the 155-char meta-description budget), linkLabel 23 chars. Slug / URL = `milestone-2031-launch-readiness-review`. Heading-free at 350 words (under the article-drafting skill's ~600-word threshold). Internal-link inventory 3 anchors, all released routes. No external link. No `mediaCaption` (the article has no media). Same convention break as the 005-launch gate: no separate `.agents/work/seo/005-launch.md`-style file. SEO-correct. | PASS   |

## 3. The simulated record date

- **Assigned value: `2031-02-11`.**
- **Source line: `docs/SCENARIO.md:192`.** The locked milestone row reads
  `11 February 2031 | Launch Readiness Review`. The `docs/SCENARIO.md`
  milestone table used for simulated dates spans `:179-207`.
- **Match by state:** the row whose meaning is this capsule's own event
  — the launch-readiness review — is row `:192`, sandwiched between
  `:191` (Flight stack arrives at Kourou, the stack-arrival capsule's
  row) and `:193` (Ariane 64 launch and Earth departure, the launched
  article's row). All three rows sit on consecutive lines of the
  locked milestone table.
- **No other milestone row's text would be the choice.** `:191` is the
  flight-stack arrival (the stack-arrival capsule's row, already
  released); `:193` is the launch day (the launched article's row, also
  released); `:194`–`:207` are rows the step does not own. `:192` is
  the **only** row whose state matches what this article reports.
- **Frontmatter field is `simulatedDate`**; the schema
  (`src/content.config.ts:45`) accepts `YYYY-MM-DD` either as a quoted
  string or as a `Date`, and the layout (`ArticleView.astro:27`,
  `NewsCard.astro:54`) renders `Simulated record date · 11 February 2031`
  via `simulatedDateText()`. The date is in-fiction prose under its own
  label; it never reaches `datePublished`, `lastmod`, or any
  machine-readable form (the head carries description, generator,
  canonical, and robots only — verified at `src/lib/seo.ts`).
- **Checklist:**

| Check                                                          | Verdict                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Drawn from a locked milestone the table actually holds         | Yes — `docs/SCENARIO.md:192` (the row this gate reads for the article's headline date).                                                                                                                                                                                                                                                                                     |
| Step correspondence                                            | Step 005 covers the launch sequence; this capsule is a sub-event on row `:192` between the stack-arrival row `:191` and the launch-day row `:193`.                                                                                                                                                                                                                          |
| Rows excluded, and why                                         | `:191` is the stack-arrival row (already released in `milestone-2031-stack-arrival.mdx`); `:193` is the launch-day row (already released in `005-launch.mdx`); `:194`+ are step-006+ rows.                                                                                                                                                                                  |
| Implies no unreleased event or withheld mission date           | Yes — the readiness-review day **is** step 005's own pre-launch event; the launch day (`17 February 2031`) stays banned.                                                                                                                                                                                                                                                    |
| Contradicts no published sentence                              | No — articles 001–005-launch all stay true at their own dates; the 004 release record's conditions (§"Conditions" row 3: 005 must carry a record date later than `2030-03-11`) is satisfied; the 005-launch release record's lower-bound condition (no later-step article is dated before `2031-02-17`) is satisfied because this capsule's date is **earlier**, not later. |
| Compatibility with the article's own present-tense negatives   | The article carries no present-tense negatives that would be falsified at its own date; the explicit "What this update does not establish is any outcome" reads as a containment claim that holds at the article's own date.                                                                                                                                                |
| Rendered surface states it under an in-fiction label           | To be verified on the build card's live-origin measurement (the article is `publication: draft` today; no `/news/milestone-2031-launch-readiness-review/` route exists on the live origin yet). The label and format are owned by `src/lib/simulated-date.ts`.                                                                                                              |
| Never presented as a real publication date or machine-readable | To be verified at build time: 0 `<time>`, 0 ISO tokens, 0 `datePublished`/`dateModified`, no OG date, no sitemap value. Matches 001–005-launch precedent.                                                                                                                                                                                                                   |
| Order floor carried forward                                    | This capsule sits at `2031-02-11`; 005-launch sits at `2031-02-17` (six days later, in fiction). The 005-launch release's "lower bound on step 006+" rule still holds.                                                                                                                                                                                                      |

## 4. Listing-order consequence

After the build card applies the flip, `selectPublicNews` (release sort
newest date first, `publication.ts:65-73`) returns:

```
1. 17 February 2031  — Launch 05 · Launched
2. 11 February 2031  — Launch capsule 05 · Readiness review
3. 13 January 2031   — Launch capsule 05 · Stack at launch campaign site
4. 11 March 2030     — Launch architecture 04 · Architecture selected
5. 13 July 2029      — Vehicle design 03 · Design frozen
6. 19 March 2027     — Payload brief 02 · In selection
7. 12 October 2026   — Announcement 01 · Programme announced
```

The launched article stays at index 1 (Feb 17 > Feb 11 > Jan 13). The
readiness-review capsule lands at index 2, directly between the launched
article and the stack-arrival capsule — the exact in-fiction position
the milestone-table chronology implies. Verified by the gate's
outside-the-repo simulation (`/tmp/rh-launch-readiness/simulate_listing.mjs`).

## 5. Surface verification (read-only, measured in fact)

| Surface                                             | Status (2026-09-19 ~13:50 CEST)                                                                                                                                                                                  |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET /news/milestone-2031-launch-readiness-review/` | HTTP 404, body 0 B (route not yet served)                                                                                                                                                                        |
| `GET /news/005-launch/`                             | 200, body 9,294 B, kicker `LAUNCH 05 · LAUNCHED`, date label `Simulated record date · 17 February 2031`                                                                                                          |
| `GET /news/milestone-2031-stack-arrival/`           | 200, body 8,151 B, kicker `LAUNCH CAPSULE 05 · STACK AT LAUNCH CAMPAIGN SITE`, date label `Simulated record date · 13 January 2031`                                                                              |
| `GET /news/004-launch-provider/`                    | 200, body 10,371 B                                                                                                                                                                                               |
| `GET /news/`                                        | 200, body 15,306 B, lists six published items newest-first (launched Feb 17, stack-arrival Jan 13, 004, 003, 002, 001); **capsule not listed** (`contains 'milestone-2031-launch-readiness-review' slug: false`) |
| `GET /`                                             | 200, body 22,264 B                                                                                                                                                                                               |

The `publication: draft` predicate blocks listing and route at
collection-query level; this gate does **not** apply the `published`
flip (the build card owns that act, per §"Release decision" below).

## 6. What is the build card's act

The card body's prior precedent (the 005-launch gate record §10, the
stack-arrival gate record §10) names the build card's act precisely.
Applying the same pattern to this card:

1. Edit `website/news/milestone-2031-launch-readiness-review.mdx`:
   - `publication: draft` → `publication: published`.
   - Add `simulatedDate: 2031-02-11` (frontmatter key, editor-assigned;
     the schema accepts it).
2. `git status --short` confirms only the two-line frontmatter delta.
3. Commit on a clear branch path; message naming the card id.
4. `git pull --rebase`; `git push` to `origin/main`. The push-triggered
   Cloudflare Workers Build deploys the flip.
5. Live-origin verification: `GET /news/milestone-2031-launch-readiness-review/`
   → 200, with kicker `LAUNCH CAPSULE 05 · READINESS REVIEW MILESTONE`
   and date label `Simulated record date · 11 February 2031`.
6. `GET /news/` lists the capsule at index 2 (see §4).

This gate does not perform any of these steps.

## 7. Validation completed

- `sha256sum` of article, manifest, source pack, brief, continuity
  companion — re-taken immediately before this verdict. Article hash
  `ac0b330d6c60e6fb61b4bdddfa9255b6851534184de7873c4c463bc8eafdae37`,
  2,883 B, 56 lines.
- `git status --short` — 33 untracked working papers + the untracked
  article file; no tracked-file change by this gate; `HEAD = 8093a01 =
  origin/main` (no drift).
- Concurrent running cards: parent `t_86be9858` (visuals, `done` per
  worker_context); sibling child `t_70dc2c75` (build, `todo`, gated on
  this gate's release decision). No concurrent edits observed in the
  gate's window.
- Live origin probed via `browser_exec` (the session's terminal `curl`
  is scanner-blocked on `.dev` TLDs — used `browser_exec` + subprocess
  per the established session practice).
- `/tmp/rh-launch-readiness/scan_families.mjs` and
  `/tmp/rh-launch-readiness/parse_frontmatter.mjs` — outside-the-repo
  mirrors; outputs in this record. They do not write to the shared
  checkout.

## 8. What remains outstanding

- The `publication: draft → published` flip and the `simulatedDate:
  2031-02-11` line — `t_70dc2c75` (build card, sibling child of
  `t_98f4e551` per the card body).
- Live-origin re-probe after the flip — verify the route returns 200
  and the listing now includes the capsule at index 2.
- Record the post-flip hash on the release card (the build card's
  result log; this gate's release record is durable as a separate
  artifact).

## 9. Release decision

**Recorded on this card. The merged editorial role (`mars-ai-simulator-reviewer`)
approves the package against released canon.** No separate human
approval sentence is required for an article's releasability or canon
confirmation.

- **Decision:** approve the package for publication.
- **Public scope:** exactly one new article at route
  `/news/milestone-2031-launch-readiness-review/`, sourced from
  `website/news/milestone-2031-launch-readiness-review.mdx` with the
  frontmatter `publication` flipped to `published` and `simulatedDate:
  2031-02-11` inserted. No image, no figure, no card art, no OG image.
  No build-surface change beyond the standard frontmatter flip. No
  `docs/` write. No canon change.
- **Evidence (article hash at the moment of the decision):**
  `ac0b330d6c60e6fb61b4bdddfa9255b6851534184de7873c4c463bc8eafdae37`,
  2,883 B, 56 lines.
- **Continuity record hash:**
  `.agents/work/continuity/milestone-2031-launch-readiness-review.md`,
  verdict `continuity clear`.
- **`simulatedDate` applied:** `2031-02-11`, drawn from
  `docs/SCENARIO.md:192` (`11 February 2031 | Launch Readiness Review`).
- **Records kept on disk:** continuity record, this review, the asset
  manifest, the source pack, the brief. All under `.agents/work/`.
- **Conditions on the approval:**
  - The build card `t_70dc2c75` is the only path that may apply the
    frontmatter flip. It stages only
    `website/news/milestone-2031-launch-readiness-review.mdx` and
    reports the SHA and push result on its card.
  - The build card commits and pushes **only after** this release
    decision is recorded (already true at the moment of this record).
  - No second `publication` flip or `simulatedDate` insert appears in
    any other commit before the push.
  - After the push, the live origin must carry
    `GET /news/milestone-2031-launch-readiness-review/` → 200, with
    `Simulated record date · 11 February 2031` under the
    `LAUNCH CAPSULE 05 · READINESS REVIEW MILESTONE` kicker.
- **What is not authorised by this decision:**
  - No asset work, no figures, no card art, no OG image.
  - No `docs/SCENARIO.md` write, no `docs/timeline/` write, no `docs/`
    write at all.
  - No changes to the step-004 dossier, the step-004 article, the
    `005-launch.mdx` article, the `milestone-2031-stack-arrival.mdx`
    article, or any wiki page.
  - No later-step fact, no launch-day repetition, no countdown-as-fact,
    no review outcome.
  - No advance of the release order. Step 005 is already released (the
    launch-day article); this is a backfill on its scope.
- **Authority:** the merged editorial role holds the final word on
  releasability and canon confirmation for public content; this card's
  release decision is that approval. No human approval sentence is
  required.

## 10. Handoff and next owner

- **This card:** `mars-ai-simulator-reviewer`. Verdict `approved`,
  release decision recorded in §9. The card body's acceptance criteria
  are all met:
  - every claim agrees with the released step and the scenario —
    PASS (continuity §3, 10 rows);
  - no launch date (17 February 2031) — PASS (F13);
  - no review outcome — PASS (F12);
  - no later-step fact — PASS (F14, continuity §6);
  - the article carries a record date drawn from a locked milestone
    line (`2031-02-11`, `docs/SCENARIO.md:192`) — PASS (§3);
  - the review is approved with no unresolved material failure — PASS
    (§2 table, 16 rows);
  - the release decision names the exact public scope — PASS (§9);
  - confirms the 005-launch capsule mapping — PASS (F11, continuity §2).
- **Next owner:** `mars-ai-simulator-dev` (build card `t_70dc2c75`,
  child of `t_98f4e551` per the card body). Apply the frontmatter flip
  on `website/news/milestone-2031-launch-readiness-review.mdx` only;
  commit and push; report the SHA and push result on the card.
- **No further reviewer task is required for this slug.**
