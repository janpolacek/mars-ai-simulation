# Continuity: 004-launch-provider-gates — chronology, canon, plausibility and spoiler verdict

Slug: `004-launch-provider-gates`. Card `t_4d1b3041` (`mars-ai-simulator-editor`), stage: gate ledger
(informational, hold) · timeline step `004-launch-provider`.
Companion record: `.agents/work/reviews/004-launch-provider-gates.md` (gate ledger + hold decision).

**Verdict: `continuity clear` — for the hold state this gate records, and for nothing else.**

No step-004 artifact was submitted to this gate, so there is no draft, dossier, wiki page or image
whose chronology, canon consistency, plausibility or spoiler safety could be judged. What is judged
here is the state the gate leaves behind: _nothing about the launch provider is public_. That state is
consistent with released canon and with the release order, and it is verified in fact rather than on
paper.

## 1. Evidence boundary and what was compared

| Item                       | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card under work            | `t_4d1b3041` (gate ledger for step `004-launch-provider`). No parents; child `t_1ff6a809` (draft, `todo`) and grandchild `t_acea152d` (SEO). No release card exists for article 004                                                                                                                                                                                                                                                                     |
| Contents compared          | `docs/SCENARIO.md` `99206373bbb6140bac1202dc6cc5e80c6315bec649e49e223b61f305b636bc54` (mission identity, flight system, calendar, cost, release controls at `:272-282`); `docs/timeline/004-launch-provider.md` `1c61b918318457967bee0aa2bc4938bc45d186cda01a20777b2ffa3e47bde55e`; `docs/timeline/005-launch.md` `3a996027d57ef7d5239cba4d0f09b2011f7f41c82e58a64b9fe02567070229c2`; `docs/timeline/README.md` (release order + continuity invariants) |
| Working papers compared    | `.agents/work/briefs/004-launch-provider-canon.md` `9f827e1e1726ef77c24426f269681f353fffbd84d9665411c0da5529e217b17d`, `.agents/work/briefs/004-launch-provider.md` `5f27e4c9477bd38559e87cf08ad11bb7e7d0aadfad9519db813b91f443b70988`, `.agents/work/briefs/wiki-tree-plan.md` `8d602f85b2f86ea66bdad955104c21bd4d2dabc066159e15034da2597835e102`                                                                                                      |
| Released material compared | The three published articles on the live origin; `docs/SCENARIO.md:277` (the launcher waits for step 004) and `:281` (real-institution review); the published 002 / 003 negative claims quoted in §2                                                                                                                                                                                                                                                    |
| Build / guard surfaces     | `website/scripts/guards.mjs` `fd5a9e437fd41989c77cb2f4bb90b97dd9d6765eb3bda609ec3b989979f3fc2a`, `website/src/lib/wiki-query.ts` `6aa25e0581f807b59aec974dc6aa52301cfda9c2d42083dace1a2bf747c83273`, `website/src/content.config.ts` `f6017306ddd56b39aaf170dc64f80152dd7f7f7a8ebf03932d59969982029e16`                                                                                                                                                 |
| Live surface               | In-page fetch on the deployment origin, hashed with `crypto.subtle`, 2026-09-17 15:23–15:25 CEST — table in §5                                                                                                                                                                                                                                                                                                                                          |
| Checkout read at           | shared tree `HEAD` `6cc2f37455f964fe75f602e1944097851b29d9c9`, one commit ahead of `origin/main` `8276b47a9db48f21e9b547b0b0ebf05cf9f941fb`; nothing reset, checked out or stashed                                                                                                                                                                                                                                                                      |
| Gates re-hashed            | Immediately before writing this verdict (15:24 CEST); no input hash had moved since the reads above                                                                                                                                                                                                                                                                                                                                                     |

## 2. Chronology

- **Release order.** The released step is `003`: `/news/003-vehicle-design/` is live (200). Step `004`
  is _not_ released: `docs/SCENARIO.md:277` places the launcher at step 004, and the release order is
  advanced by the human story owner alone. This gate therefore records the state _before_ the step,
  which is the only state it may record.
- **The step's own boundary.** `docs/timeline/004-launch-provider.md` is a decision announcement:
  the coalition selects a delivery architecture and a launch provider or provider class, and the
  announcement "is a decision, not a launch-date promise". `docs/timeline/005-launch.md`
  `3a996027…` owns the launch day, so no step-004 surface may carry a launch day, a time, or a
  readiness claim; `docs/timeline/004-launch-provider.md` also rules out an in-transit vehicle, a
  named landing site and Mars surface imagery. The hold implements all of that by publishing nothing.
- **Order sensitivity of already-published copy — the one chronology item this gate must carry.**
  Two live articles state the opposite-of-named in the present tense:
  `/news/002-payload-selection/` — "No launch vehicle has been named, and no landing site has been
  chosen publicly"; `/news/003-vehicle-design/` — "No launch vehicle has been named, no launch date
  has been stated, and no landing site has been announced". Both are true today and both are
  **true at their own moment only**. The 004 release order does not falsify them _if_ the record
  carries the dates they were written; without a record date on their face, a reader can read them as
  a statement about the present. This is a release-order condition, not a wording failure of an
  unpublished package: it is recorded as C6 in the review record and must be settled before the 004
  flip, either by the record dates (cards `t_531698d9` / `t_de785d99`, both open) or by a scoped
  corrective. Owner: the 004 release card, with a writer card only if wording must move.
- **Ordering constraint on the step-004 record date.** The value must sit on a locked milestone, in
  the timeline's order, after step 003's and before step 005's. The milestone table holds no row for a
  launch-provider decision, so nothing is assigned today and the gap is named (§7 of the review
  record). No invented date appears anywhere in this gate's output.

## 3. Canon consistency

- **Claim count confirmed for release: zero.** There is no article-004 MDX, no launch-vehicle dossier,
  no launch-vehicle imagery and no wiki page of any kind. `docs/vehicle/` holds the RH-01
  surface-vehicle dossier only; `website/wiki/` does not exist, so the `wiki` collection is empty.
  Nothing needed confirming against released canon.
- **The hold agrees with canon.** `docs/SCENARIO.md:277` keeps the launcher gated behind step 004 and
  `:281` requires explicit review before any public mention of a real institution; publishing nothing
  implements both exactly. Canon was **cited, not edited**: `docs/SCENARIO.md` and `docs/timeline/` are
  unchanged this run.
- **The one canon question the card raises is not settled here.** The human's commission paired
  "prepare canon" with "create a new vehicle / rocket" while the locked scenario already names a real
  launcher (`docs/SCENARIO.md:22`, `:124`, `:193`, `:230`). Whether a new fictional provider and
  vehicle are authored is new scenario canon — an eight-vote Council field per `docs/SCENARIO.md`
  equal governance — and it is Gate 004-A. This gate records the fork and the fail-closed default; it
  does not choose, and it does not treat either branch as established.
- **Uncertainty was not written as certainty.** The gate records no release, no provider, no vehicle,
  no date and no fact. Its own records name withheld material by location (`docs/SCENARIO.md` line
  numbers) and never by value; the card-body template sentences are cited as unapplied templates and
  no human sentence is attributed anywhere.
- **No canon leak into a public route.** No provider, vehicle, facility or launch-date string appears
  in `website/` source, in a route, in metadata, in an asset name, or in any served byte (§5).

## 4. Plausibility

Not applicable to a hold: no vehicle, mass, performance figure, integration state or surface outcome
is described by anything this gate produced. The one plausibility-adjacent risk — a public surface
that credits the programme with a launcher or a readiness state it has not announced — is absent by
construction: the article route 404s, the wiki index is empty and no served page names the launcher.

## 5. Spoiler safety and the public surface (verified in fact, not on paper)

Measured live at 2026-09-17 15:23–15:25 CEST (in-page fetch on the deployment origin, hashed with
`crypto.subtle`; token list read at run time and reported by count only):

| Route                                                              | Result                                                                                                                                 | Withheld-token hits |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `/`                                                                | 200, 16,968 B, sha256 `09c3cc8e6610d4663b6e690d1cd6a4881efe4b658e1eb572640249ac04a3eeb3`                                               | 0                   |
| `/news/`                                                           | 200, 10,663 B, sha256 `8b822f33b2f3a6914336014883594b14cae7d2a44008b8d34753ae19ee84f14e`                                               | 0                   |
| `/news/001-project-announcement/`                                  | 200, 11,675 B, sha256 `a82c1bcd5540334c824aaad15c05b84c90f77d6b59d9733109d3e870521ce9d8`                                               | 0                   |
| `/news/002-payload-selection/`                                     | 200, 14,060 B, sha256 `79b06d7f7cb9ccd4ca9c75bc648ead5c09cc2e78d47676f116ff97f3dd384d89`                                               | 0                   |
| `/news/003-vehicle-design/`                                        | 200, 11,176 B, sha256 `6fa3c431ff3858c1716aa07d67bfb06e01de063a4af12a0ab38c2b471e2c46f5`                                               | 0                   |
| `/news/004-launch-provider/`                                       | **404**, 0 bytes                                                                                                                       | 0                   |
| `/wiki/`                                                           | 200, 4,601 B, sha256 `37c56896ca2fc426282a3e62ef0add576384d26eda85578ec7e706a27dcf40ed`, title `Wiki \| Red Horizon`, zero entry links | 0                   |
| `/wiki/area/`, `/wiki/vehicle/`, `/wiki/project/`                  | **404** — the section route set is "sections with a published page", and none is published                                             | 0                   |
| `/wiki/vehicle/rh-01-pathfinder/` + two launch-vehicle slug probes | **404**                                                                                                                                | 0                   |

Tokens scanned: the launcher and provider families, the launch-facility family, and the step-005
launch-date forms. Zero hits on every route, so the fail-closed default holds on the surface a reader
actually reaches, not only in the repository. Byte counts are response-body bytes and digests are
SHA-256 over those bytes, taken in-page with `crypto.subtle`; decoding the same response and measuring
the text reports fewer units for pages carrying non-ASCII characters — a measurement-unit artefact,
not a content change. Three consecutive `cache: 'no-store'` fetches of `/news/003-vehicle-design/` at
15:27 CEST returned 11,176 B and digest `6fa3c431…` every time.

Two containment observations for the next reader (both routed, neither a blocker):

- **The build guard does not cover step 004's withheld strings.** `website/scripts/guards.mjs`
  `fd5a9e43…` carries `gatedDirectoryNames = ['timeline']`, `gatedTextMarkers = ['18° 42', '226° 14']`
  and one withheld file. Nothing there fails a build that names a provider or a launch date, so 004's
  containment rests on the gates, the reviews and the release decision — which is why they must be
  applied strictly. Defence in depth, if wanted, is a dev card (C5).
- **The withheld material lives where it should.** The private calendar rows
  (`docs/SCENARIO.md:188-192`) and the step files stay inside `docs/timeline/` and `docs/SCENARIO.md`;
  the guard covers the timeline directory, and no step file was opened to write anything this gate
  publishes — this gate opened step 004 and 005 only to read the boundary, and copies nothing from
  them into a public artifact.

## 6. What this verdict does not cover

- It does **not** clear any step-004 artifact: none was submitted, and none may be started while the
  gates are unanswered.
- It does **not** decide the canon fork (004-A), the release-order advance (004-C), the public title
  and byline (004-D) or a `docs/SCENARIO.md` amendment (004-E). Those stay with the human story owner.
- It does **not** confirm the real-provider wording for release: there is no public sentence yet, and
  the review recorded at release time (004-B) is where any name is judged against the accurate /
  non-endorsing rules.
- It does **not** relax any standing withhold — the landing-design list (`docs/SCENARIO.md:279`, H1
  decision 2026-09-17 option i), the programme-frame restriction on the wiki cards, and the
  no-private-timeline-in-public rule all bind independently of this gate.

---

## Revision 2 — a second gate ledger for the same slug: card `t_9e59c235`

Recorded 2026-09-17 15:31 CEST by `mars-ai-simulator-editor`. **Superseded revision:** this file at
sha256 `9373ecfe9afdd14e51d3c1b1b27cc586caa291c7c9261e543a1d01b3e2b9fa2b` (135 lines, 15,542 B —
revision 1, card `t_4d1b3041`). Nothing in revision 1 is withdrawn; revision 2 adds the second card for
the same five gates and re-measures the hold against the tree and the live origin as they stand at
15:29–15:32 CEST. Revision 1's verdict stands for both cards: `continuity clear` for the hold state,
and for nothing else.

### Why there are two cards, and which graph the step runs on

`t_9e59c235` was created at 15:27 by the article container `t_0abfd5b6`, which re-created a partial
graph for a step that the operator-commissioned planner card `t_5fbd61ee` had already graphed at
15:22–15:25. Chain A (authoritative): gate ledger `t_4d1b3041` → research `t_67b1463e` (done) → draft
`t_1ff6a809` → SEO `t_acea152d` → images `t_6fde5f04` → editorial `t_35061463` → deploy `t_de6e9055` →
release `t_1105aa0d`, with the dossier card `t_c4da077b` and the wiki vehicle-page parent `t_fea1e735`
also gated on `t_4d1b3041`; the container `t_0abfd5b6` hangs off `t_1105aa0d`. Chain B (partial
duplicate, this card): gate ledger `t_9e59c235` → draft `t_81bc2b83`, with research `t_24585e00` →
`t_81bc2b83`. Chain A is the graph the step runs on: the dossier and the wiki parent card exist only
there, and every chain-A stage card body names `t_4d1b3041` as its gate. The duplicate is therefore
**reported, not resolved** — archiving a card is a board operation outside this role's authority, and
step 003 was deduped by the operator on the same pattern (comment on `t_7a30964f`). The recommendation
on the board is to archive `t_9e59c235`, `t_24585e00` and `t_81bc2b83`.

**Why the hold, restated for this card:** `t_9e59c235` is the parent edge of `t_81bc2b83`, so
`kanban_complete` on it promotes a second writer into article 004 with the canon choice still blank.
Holding is not caution; it is this card's only correct terminal state, exactly as it is for revision
1's card.

### Gate answers: still none, re-checked board-wide at 15:29 CEST

A board-wide `task_comments` scan (281 comments, all cards) finds no human or operator statement
answering any 004 gate — no canon choice, no real-provider wording sentence, no release-order
sentence, no public title or byline, no `docs/SCENARIO.md` amendment list. The only 004 comments are
the planner's graph handoff (`t_5fbd61ee`), the research handoff (`t_67b1463e`) and the hold comment of
the sibling ledger (`t_4d1b3041`, 15:28:42). This card carried no comment before this revision.
Revision 1's statement that the card-body template sentences are **unapplied templates** holds for
this card too: both bodies carry them, neither has been answered, and a later reader grepping for a
template string must read it as the slot, never as a decision.

### This card's own gate-body acceptance, verified

`t_9e59c235`'s body carries all five gates (004-A … 004-E), each with its fail-closed default, its
`Binds` clause, and the verbatim answer slots — checked string by string: the five `## Gate 004-X`
headings, the Option A / B / C canon slots, the real-provider wording slot, both release-order forms,
the public title and the author slots, and the amendment-list slot each appear exactly once, and no
slot carries an answer. The acceptance items "the card stays `todo` (or `blocked`) until Gate 004-A is
answered" and "this card is a gate ledger, not a workflow stage" are present. Nothing under
`website/`, no MDX, no frontmatter, no commit, no push and no publication flip belongs to this card,
and none was performed.

### Fail-closed defaults, measured (not restated) at 15:29–15:32 CEST

| Surface                                | Measured for this card                                                                                                                                                                                                                                                              |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `website/news/`                        | `001-project-announcement.mdx`, `002-payload-selection.mdx`, `003-vehicle-design.mdx` only — no article-004 MDX, so no `publication:` field for step 004 exists to flip                                                                                                             |
| `docs/vehicle/`                        | RH-01 `VEHICLE.md` and its six plates only — no launch-vehicle dossier, no launcher imagery                                                                                                                                                                                         |
| `website/wiki/`                        | does not exist, so the `wiki` collection is empty and no launch-vehicle node can be authored                                                                                                                                                                                        |
| Media registry                         | `src/features/news/media.ts` holds four keys (`programme-identity`, `asteria-plates`, `payload-sensor-illustration`, `vehicle-references`) — no launch or launcher key                                                                                                              |
| Launcher / provider / facility strings | `grep` over `website/news/` returns nothing; the only published mentions of a launch vehicle are the negative statements in 002 and 003 (revision 1 §2)                                                                                                                             |
| Guardian coverage                      | `website/scripts/guards.mjs` `fd5a9e43…`: `gatedDirectoryNames = ['timeline']`, `gatedFilePathSegments` = the one withheld vehicle scene, `gatedTextMarkers = ['18° 42', '226° 14']` — still no marker for a provider or vehicle name or a withheld launch date (revision 1 §5, C5) |
| Parent-gated child                     | `t_81bc2b83` (draft) is `todo`; the five sibling chain-A stages are `todo`; the sibling ledger `t_4d1b3041` is `blocked` (`needs_input`)                                                                                                                                            |
| Canon files                            | `docs/SCENARIO.md` `99206373…` and `docs/timeline/` unchanged this run; canon was cited, never edited                                                                                                                                                                               |

Live origin `https://mars-ai-simulation.janpolacek.workers.dev`, in-page fetch hashed with
`crypto.subtle` at 15:30–15:32 CEST; token families reported by hit count only:

| Route                                                   | Result                                                                               | Withheld-token hits |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------- |
| `/`                                                     | 200, 17,119 B, sha256 `a455ca48…`, 12 page links, no 004 link                        | 0                   |
| `/news/`                                                | 200, 10,814 B, sha256 `a58b85ba…`, cards for 001–003 only, no 004 link               | 0                   |
| `/news/001-project-announcement/`                       | 200, 11,792 B, sha256 `ba789bc9…`                                                    | 0                   |
| `/news/002-payload-selection/`                          | 200, 14,177 B, sha256 `e8e1a456…` — one "launch vehicle" mention, the negative claim | 0                   |
| `/news/003-vehicle-design/`                             | 200, 11,293 B, sha256 `ae5251c8…` — one "launch vehicle" mention, the negative claim | 0                   |
| `/news/004-launch-provider/`                            | **404**, 0 bytes                                                                     | 0                   |
| `/wiki/`                                                | 200, 4,601 B, sha256 `37c56896…`, zero content links                                 | 0                   |
| `/wiki/vehicle/`, `/wiki/area/`, `/wiki/project/`       | **404**                                                                              | 0                   |
| Three launch-vehicle slug probes under `/wiki/vehicle/` | **404**                                                                              | 0                   |
| `/sitemap.xml`, `/sitemap-index.xml`, `/sitemap-0.xml`  | **404**                                                                              | 0                   |

The launcher family, the provider family, the launch-facility family and the step-005 launch-date
forms return **zero hits on every served route**, and the withheld coordinate markers
`18° 42` / `226° 14` do not appear anywhere. The fail-closed default therefore holds on the surface a
reader reaches, for this card's gates as for revision 1's.

### Movement since revision 1 (recorded, none of it a blocker)

| Time (CEST) | Observation                                                                                                                                                                                                                  | Effect on this verdict                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 15:28–15:30 | The shared checkout advanced: `HEAD` `aa71714` (`t_de785d99`, the simulated-record-date field and its render) and `origin/main` now hold the same commit, where revision 1 measured `HEAD` one commit ahead of `origin/main` | None — the live origin was measured directly, not inferred from the tree                                  |
| 15:30–15:32 | Every served route moved slightly in size and hash against revision 1's 15:23–15:25 table (`/` 16,968 → 17,119 B; `/news/` 10,663 → 10,814 B)                                                                                | None — same routes, same absences, still zero withheld-token hits                                         |
| 15:29       | `.agents/work/sources/004-launch-provider.md` is `67c3ae80…` (29,351 B) and a second research card, `t_24585e00`, was still **running** on that same output path                                                             | None for this hold, but the source pack's hash can move: it is a **hotspot** for whoever consumes it next |
| 15:32       | Sibling ledger `t_4d1b3041` `blocked` (`needs_input`, 15:28:51) with revision 1's records; the duplicate chain B cards `t_24585e00` (running) and `t_81bc2b83` (todo) remain on the board                                    | A board-dedupe question for the operator, reported above; no effect on the continuity verdict             |

### What revision 2 adds to the verdict

Nothing that weakens it, and one order-sensitivity item the release card must still carry:
`docs/SCENARIO.md` still holds no milestone for a launch-provider decision (revision 1 §7), so this
card assigns no record date and names the gap; and the present-tense negative claims already public in
002 and 003 (`no launch vehicle has been named`) remain true at their own moment only, so they are
made time-bound by the record dates or by a scoped wording corrective **before** any 004 flip
(revision 1 §2 and §6 C6, still open: `t_531698d9` and `t_1059c973` — the field now exists in the
schema as of `aa71714`, the three published articles carry no value yet).

---

## Revision 3 — the answers arrive: continuity verdict for the answered gate state

Recorded 2026-09-17 19:02 CEST by `mars-ai-simulator-editor`. **Superseded revision:** this file at
sha256 `1987c4664ef01c955811e2fbd38d2e00ee1b1fe368591ad304a422398766544e` (241 lines, 28,062 B —
revision 2). Revision 3 covers the state the gate answers create. It withdraws nothing from revisions
1–2: those measured the unanswered state, and their measurements are the baseline this revision
starts from. Companion record: `.agents/work/reviews/004-launch-provider-gates.md` revision 3, where
the answers, their scope and the conditions are recorded.

### What was compared, and against what

- The two operator comments on `t_4d1b3041` (18:52 CEST), read back from `task_comments` at 18:53 CEST.
- `docs/SCENARIO.md` `99206373…` — the mission-identity, flight-system, calendar and cost rows the
  004-A answer leaves standing, and the release controls at `:277` and `:281`.
- `docs/timeline/004-launch-provider.md` `1c61b918…`, `docs/timeline/005-launch.md` `3a996027…`,
  `docs/timeline/README.md`.
- `.agents/work/briefs/004-launch-provider-canon.md` `9f827e1e…` (wording rules, withheld-fact list)
  and `.agents/work/briefs/004-launch-provider.md` `5f27e4c9…` (allowed and forbidden angles).
- The released articles `website/news/001…003.mdx` and the live origin, re-measured at 18:57–18:58 CEST.

### Chronology

No chronology moved. Option A is the canon the released timeline already rested on, so the answer adds
no date, no order and no event: the record dates already applied to 001–003 (2026-10-12, 2027-03-19,
2029-07-13) stay the anchors they are, and the launch day stays step 005's. The step-004 article's own
record date is still unassigned and must sit between 003's anchor and step 005's row; the constraint
set is in the review record §R3.5. The answer does not supply it, and no inferred date is written here.

### Canon consistency

The answer is "the locked canon stands", so there is nothing to reconcile. `docs/SCENARIO.md` is
unchanged — no amendment was requested (004-E is not applicable) — and the flight-system, calendar and
cost rows the step touches are exactly as they were. The vehicle the dossier and the wiki page will
document is the one those rows already name. `docs/SCENARIO.md:281` (real institutions need explicit
review before any public mention) is respected by the containment decision in the review record §R3.3,
and `:277` (the launcher waits for step 004) is respected by releasing the step only now that the human
story owner has released it.

### Plausibility

The answer makes the forthcoming article plausible in the way the step requires: it documents a real
launcher instead of inventing one, and the interface the programme documents is the programme's own
(payload adapter, injection segment, integration campaign). The plausibility limits the step carries
are unchanged and must survive into the copy: the announcement is a decision, not a launch-date
promise, and nothing may state or imply that the vehicle is in transit, integrated at the pad or
flight-ready.

### Spoiler safety and the public surface — measured, not restated

Re-measured at 18:54–18:58 CEST, tree and live origin: `website/news/` holds 001–003 with article 004
absent; `docs/vehicle/` holds the RH-01 dossier and its plates only; `website/wiki/` does not exist; and
on the live origin `/news/004-launch-provider/`, `/wiki/vehicle/`, `/wiki/area/` and
`/wiki/vehicle/rh-01-pathfinder/` all return **404** while `/` (17,792 B, `ef1466f4aa9789ef…`),
`/news/` (11,352 B, `bcbb0e8038c71158…`) and `/wiki/` (4,599 B, `821a2d846a2ea5b2…`) return 200 with
zero hits for the launcher, operating-company, facility and withheld-launch-day families.

Two containment facts follow, and both are conditions rather than verdicts:

- **The answers release no byte.** Advancement in the release order is not publication: this card holds
  no `publication:` field, and the cards that will carry one are its children.
- **The withheld set shrinks by exactly one name, and one family stays shut.** The launcher designation
  is locked canon and is what step 004 releases, so it moves from withheld to released. The operating
  company, other real institutions and the real launch facility are still named on no public surface,
  and the 004-B constraint keeps them off one until a recorded approval covers a specific sentence
  (review record §R3.3); the guard's marker set must follow that split rather than cover the launcher
  (review record §R3.7 C5). The launch-day forms and the landing-region coordinate markers stay
  withheld.

Nothing in the answers creates a spoiler: no event after the step becomes public, no withheld date is
stated, and the one name they clear was already locked canon.

### What this verdict does and does not clear

`continuity clear` for the answered **gate state**: five gates answered as recorded, the answers' scope
applied without extending it, no canon authored, no chronology moved, and no step-004 byte public. It
does **not** clear a package: article 004 does not exist, the launch-vehicle dossier does not exist and
the wiki page does not exist, and each will need its own continuity check against its own bytes at its
own card. The measurements above are the baseline that check starts from.
