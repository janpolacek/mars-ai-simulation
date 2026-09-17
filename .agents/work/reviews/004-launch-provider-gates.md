# Review: 004-launch-provider-gates — gate ledger and hold decision

Slug: `004-launch-provider-gates`. Card `t_4d1b3041` (`mars-ai-simulator-editor`), stage: gate ledger
(informational, hold) · timeline step `004-launch-provider`.
Companion record: `.agents/work/continuity/004-launch-provider-gates.md` (`continuity clear` for the
hold state this gate records, and for nothing else).

## Review metadata

| Field                      | Value                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card / stage               | `t_4d1b3041` — gate ledger for step `004-launch-provider`: launch-provider canon, real-provider wording, release-order advance, title / byline, `docs/SCENARIO.md` amendments. Created by `t_5fbd61ee` (planner), assignee this role, **no parents, one child** (`t_1ff6a809`, the article-004 draft card)                                                                                                                       |
| Package under review       | **None exists.** `website/news/004-launch-provider.mdx` is absent; no launch-vehicle dossier exists (`docs/vehicle/` holds only the RH-01 surface-vehicle dossier and its plates); no wiki content exists (`website/wiki/` absent, collection empty); no launch-vehicle imagery exists                                                                                                                                           |
| Gates in scope             | 004-A launch-provider canon · 004-B real-provider wording review · 004-C release-order advance to step 004 and the launch-vehicle wiki node's publication state · 004-D public title and byline · 004-E `docs/SCENARIO.md` amendment list. Bodies verbatim on this card; the answering material is `.agents/work/briefs/004-launch-provider-canon.md` (`9f827e1e…`)                                                              |
| Gate answers on the board  | **None, in any form.** No comment on this card; board-wide scan of `task_comments` finds no operator or human statement answering any 004 gate — the only human/operator relays on 2026-09-17 concern step 003, the wiki label settlement, the role merge, and the homepage                                                                                                                                                      |
| Whose decisions they are   | 004-A, 004-C, 004-D and 004-E are canon authorship, release-order and public-identity decisions and stay with the human story owner (`docs/INSTRUCTIONS.md` source-of-truth 1; `docs/timeline/README.md` "do not invent calendar dates, mission sol counts, mass figures, partner names, or launch provider until approved as canon"). 004-B is conditional on 004-A and becomes this role's wording review at release time (§3) |
| Evidence boundary          | Shared checkout `HEAD` `6cc2f37455f964fe75f602e1944097851b29d9c9`, one commit ahead of `origin/main` `8276b47a9db48f21e9b547b0b0ebf05cf9f941fb`; `origin/main` is what the push-triggered build serves. Nothing reset, checked out or stashed. Inputs re-hashed at verdict time, all unchanged (§6)                                                                                                                              |
| Fail-closed state          | Verified **in fact**, in the tree and on the live origin, at 2026-09-17 15:23–15:25 CEST: `/news/004-launch-provider/` 404; `/wiki/` 200, empty index; every wiki section and leaf route 404; zero withheld-token hits across every served route (§5)                                                                                                                                                                            |
| Released material compared | Live `/news/001-project-announcement/`, `/news/002-payload-selection/`, `/news/003-vehicle-design/` (all 200); `docs/SCENARIO.md` `99206373…` `:277` (the launcher waits for step 004) and `:281` (real-institution review); `docs/timeline/004-launch-provider.md` `1c61b918…`; `docs/timeline/005-launch.md` `3a996027…`                                                                                                       |
| Record date for step 004   | **Not assignable today, and named as a gap, not filled (§7).** The milestone table holds no row for a launch-provider or architecture decision                                                                                                                                                                                                                                                                                   |
| Hold decision              | **Hold — nothing released.** Recorded as its own sentence in §2, not inferred from the status row                                                                                                                                                                                                                                                                                                                                |
| Verdict written            | 2026-09-17 15:26 CEST, against the shared tree and the live origin                                                                                                                                                                                                                                                                                                                                                               |
| Status                     | **`blocked`** — the gate cannot close: four of its five gates are unanswered questions this role may not settle, and completing the card would release a parent-gated writer card into drafting an article whose canon the gate exists to withhold                                                                                                                                                                               |

## 1. Verdict

**`blocked`.** This is a gate ledger, not a package, so the verdict says what the gate leaves behind
rather than what it approves: every fail-closed default is the correct answer today, each one is
implemented and measured rather than restated, and the card must not close.

Three things that follow, each load-bearing:

1. **Completing this card would release the very work it gates.** The card is the parent of
   `t_1ff6a809` (Draft article: 004-launch-provider, `mars-ai-simulator-writer`, `todo`), which is in
   turn the parent of `t_acea152d` (SEO). A completion promotes the draft card to `ready`, and a writer
   handed a brief whose canon choice is blank would have to fill it — inventing the provider the gate
   exists to protect. The hold is therefore not caution; it is the graph's only correct terminal state.
2. **The answers are not this role's to give.** The 2026-09-17 authority change moved _releasability
   and canon confirmation_ to the merged role. It did not move canon _authorship_, the release-order
   advance, or the public title and byline: inventing a fictional provider and vehicle, publishing a
   step the release order has not reached, and naming a public byline are new scenario canon and stay
   with the human story owner (`docs/INSTRUCTIONS.md`; this role's definition). Nothing on the board
   answers them, so the hold is the fail-closed answer, not a request for permission this role could
   grant itself.
3. **Nothing was changed by this gate.** No `website/` file, no canon file, no brief, no card body, no
   commit, no push, no `publication:` field. The two records it writes are new files; every other path
   this run touched was read-only.

## 2. Hold decision (this gate's own sentence)

> **Hold decision, `t_4d1b3041` (`004-launch-provider-gates`), recorded 2026-09-17 CEST by
> `mars-ai-simulator-editor`: no step-004 material is released. No stage of the article-004 pipeline,
> no launch-vehicle dossier and no launch-vehicle wiki page may start; no provider name, vehicle
> designation, launcher imagery, launch-vehicle route or article flip may reach a public surface, and
> no commit or push may carry one there. Gates 004-A, 004-C, 004-D and 004-E are canon, release-order
> and public-identity decisions that stay with the human story owner; Gate 004-B's wording review
> becomes this role's at release time, when a public sentence exists to review. Until the answers are
> recorded on this card, the fail-closed defaults stand as measured in §5. The card holds.**

Exact public scope of this decision: **nothing becomes public.** The only public surfaces in play stay
as measured: `/news/` carries steps 001–003, `/news/004-launch-provider/` is 404, `/wiki/` is an index
with zero entries, and no served byte names the launcher, the provider, the launch facility or any
step-004 fact.

Evidence behind the decision: the absence of any 004 artifact in the tree; the live 404s and the
empty wiki index; the zero withheld-token hits on every served route; the absence of any gate answer
on the board; the card's own fail-closed defaults, each verified rather than restated; and the
release-control lines `docs/SCENARIO.md:277` and `:281`, which keep the launcher and every
real-institution mention gated.

## 3. Gate ledger — state of the five gates

Every gate below carries a card-body fail-closed default. This table records what the default is,
whether it currently holds, and which authority the answer belongs to. The card-body **template
sentences are not reproduced here and are not decisions**: none has been answered, and a later reader
grepping for them must find them only in the card body.

| Gate  | Question                                                                                | Whose answer                                                                                                                                                   | Fail-closed default                                                                                                                 | Holds today         | Binds                                                                                                              |
| ----- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 004-A | Launch-provider canon: locked canon, a new fictional provider and vehicle, or hybrid    | **Human story owner** — canon authorship                                                                                                                       | No provider named in public copy, no vehicle name, no dossier, no imagery, no wiki node, no flip                                    | **Yes** (§4)        | Every article stage from draft onward; the launch-vehicle dossier card; the wiki launch-vehicle parent card        |
| 004-B | Review of the exact public sentence(s) if a real institution or provider is named       | **This role at release time** (card body routes it to the human; the 2026-09-17 authority change moved wording review with releasability — see the note below) | The real name appears in no public surface at all, including frontmatter, alt text, captions, slug, asset names and commit messages | **Yes** (§5)        | Every card that touches public text, the dossier, the wiki page, the asset manifest, the SEO package, the dev card |
| 004-C | Release-order advance to step 004, and the launch-vehicle wiki node's publication state | **Human story owner** — the release order is theirs alone                                                                                                      | Step 004 stays unreleased: no launch-vehicle route, article 004 stays `draft`                                                       | **Yes** (§5)        | The wiki launch-vehicle parent card; the article release card; the dossier card                                    |
| 004-D | Public title and byline, article and wiki page                                          | **Human story owner** — a public byline names a person; the card reserves both                                                                                 | Title = whatever the writer drafts; no `author` field (the content schema has none)                                                 | **Yes** (n/a yet)   | The article release card; the wiki parent's SEO / release stage                                                    |
| 004-E | `docs/SCENARIO.md` amendment list, only if Option B or C                                | **Human story owner** — `docs/SCENARIO.md` is human-only, and the four rows are eight-vote Council fields                                                      | `docs/SCENARIO.md` unchanged                                                                                                        | **Yes** (§6, row 9) | The dossier's in-fiction canon; the wiki page's canon accuracy; the article's published frontmatter                |

**Note on 004-B.** `docs/SCENARIO.md:281` requires explicit review before any public mention of a real
institution, and the card body asks the human for a verbatim approval of the exact sentences. Under
the 2026-09-17 authority change, the review that _releasability and canon confirmation_ need is this
role's, so at release time the exact public sentences are reviewed here against the six
accurate / non-endorsing rules in `.agents/work/briefs/004-launch-provider-canon.md` §"Accurate /
non-endorsing wording rules", and that review is part of the release decision recorded on the release
card. Until a public sentence exists there is nothing to review, and the fail-closed default stands.
This gate neither weakens nor pre-empts the human's choice in 004-A: whether a real provider is named
at all is theirs.

## 4. Review table

| #  | Check                                                       | Result              | Evidence                                                                                                                                                                                                                                                                                                                                                                                                           |
| -- | ----------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1  | Card read in full against its sources of truth              | PASS                | Card body (five gates, fail-closed defaults, acceptance, out-of-scope); `.agents/work/briefs/004-launch-provider-canon.md` `9f827e1e…`; `.agents/work/briefs/004-launch-provider.md` `5f27e4c9…`; `docs/timeline/004-launch-provider.md` `1c61b918…`; `docs/SCENARIO.md` `99206373…` `:22`, `:124`, `:193`, `:230`, `:277`, `:281`; `docs/timeline/README.md`; `.agents/work/briefs/wiki-tree-plan.md` `8d602f85…` |
| 2  | Gate answers exist on the board, and are quoted if they do  | PASS (none found)   | Zero comments on `t_4d1b3041`; board-wide `task_comments` scan for the gate vocabulary and the canon options returns nothing for step 004 — the only 2026-09-17 relays are step 003, the wiki label settlement, the role merge and the homepage chain                                                                                                                                                              |
| 3  | No approval is invented, inferred or templated              | PASS                | No gate sentence is attributed to any human in this record or its companion; the card-body templates appear only as a citation, and §3 says so explicitly                                                                                                                                                                                                                                                          |
| 4  | Fail-closed default 004-A holds in the tree                 | PASS                | `docs/vehicle/` holds the RH-01 dossier and its plates only — no launch-vehicle dossier; no launcher imagery anywhere under `docs/`; `grep` for the launcher, provider and facility strings over `website/news/` returns only the negative sentences quoted in §5, never the value                                                                                                                                 |
| 5  | Fail-closed default 004-A holds on the published surface    | PASS                | Live `/news/004-launch-provider/` 404, 0 bytes; `/news/`, `/news/001…003/`, `/news/004…/`, `/wiki/` scanned for the launcher, provider, facility and launch-date tokens: **0 hits** on every route                                                                                                                                                                                                                 |
| 6  | Fail-closed default 004-C holds in fact                     | PASS                | `website/wiki/` does not exist, so the `wiki` collection is empty; `src/pages/wiki/[section]/index.astro` derives its route set from sections that have a published page, hence `/wiki/vehicle/` 404 live — the launch-vehicle node does not exist in state or in route                                                                                                                                            |
| 7  | Article 004 pipeline is shut at the first stage it can be   | PASS                | `website/news/` holds 001–003 only; `t_1ff6a809` (draft) is parent-linked to this card and is `todo`; `t_acea152d` (SEO) sits downstream of the draft                                                                                                                                                                                                                                                              |
| 8  | The graph the card's acceptance requires is complete        | PASS with condition | The draft and SEO cards are parent-gated as required. The launch-vehicle dossier card and the wiki launch-vehicle parent card **do not exist yet** — `t_5fbd61ee` (planner) is still `running`. C3/C4, owner planner                                                                                                                                                                                               |
| 9  | No canon file, brief or other worker's artifact was edited  | PASS                | `docs/SCENARIO.md`, `docs/timeline/`, the dossiers, both 004 briefs, the wiki plan and every card body are read-only this run; the two records written are new files                                                                                                                                                                                                                                               |
| 10 | The hold agrees with released canon                         | PASS                | The released step is 003 (live 200 at 15:23 CEST); `docs/SCENARIO.md:277` places the launcher at step 004, which the release order has not reached; withholding every 004 surface implements that exactly                                                                                                                                                                                                          |
| 11 | Release-order sensitivity of already-published copy checked | PASS with condition | Live `/news/002-payload-selection/` and `/news/003-vehicle-design/` each state in the present tense that no launch vehicle has been named. True today; the 004 flip would make both read stale. C6 — routed as a release condition, not a continuity failure of an unpublished package                                                                                                                             |
| 12 | Record-date question handled honestly                       | PASS with condition | §7: the milestone table holds no row for a launch-provider decision, so no value is invented and the gap is named for the release card                                                                                                                                                                                                                                                                             |
| 13 | Containment checklist carried into the downstream cards     | PASS                | The draft card body carries the withheld-fact list verbatim and forbids `simulatedDate` at draft time; the article brief and the canon proposal each carry the same list for their downstream readers                                                                                                                                                                                                              |
| 14 | The build guard's coverage of step 004 checked              | PASS with note      | `website/scripts/guards.mjs` `fd5a9e43…`: `gatedDirectoryNames = ['timeline']`, `gatedTextMarkers = ['18° 42', '226° 14']`, plus the one withheld file. No marker covers a provider/vehicle name or the withheld launch date, so 004's containment rests on the gates and the reviews. C5, owner dev at implementation                                                                                             |
| 15 | No external action of any kind                              | PASS                | No commit, no push, no deploy, no hosting/DNS/credential use, no media upload; `publication:` fields untouched                                                                                                                                                                                                                                                                                                     |
| 16 | Concurrent work probed for interference                     | PASS                | Six cards `running` during this gate (§6); none can release a 004 surface — the researcher's card is canon-agnostic by its own body, and the site cards touch the record-date field, the homepage copy and a git hook                                                                                                                                                                                              |
| 17 | Copy gate on the records this gate writes                   | PASS                | Plain, specific, ASCII; the hold is stated as a decision rather than hedged; no slogan, no acronym left undefined, no withheld value restated                                                                                                                                                                                                                                                                      |
| 18 | The card's out-of-scope list respected                      | PASS                | No provider or vehicle chosen, no canon value written, `docs/SCENARIO.md` not amended, no release order advanced, no prose written, no imagery produced, no `website/` change, no closed card reopened                                                                                                                                                                                                             |

## 5. Fail-closed state, measured (not restated)

Tree, in `/home/janpolacek/Projects/mars-ai-simulator`, re-read at 15:24 CEST:

| Surface                                                  | Measured                                                                                          |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `docs/vehicle/`                                          | RH-01 dossier (`VEHICLE.md`) plus its six plates — no launch-vehicle dossier, no launcher imagery |
| `website/news/`                                          | `001-project-announcement.mdx`, `002-payload-selection.mdx`, `003-vehicle-design.mdx` only        |
| `website/wiki/`                                          | does not exist → the `wiki` collection has zero entries                                           |
| Launcher / provider / facility strings in published news | two hits, both **negative** statements ("no launch vehicle has been named"), never the value      |
| `docs/SCENARIO.md`                                       | `99206373…`, unchanged, `:277` and `:281` intact                                                  |
| Article 004 parent-gated child                           | `t_1ff6a809` `todo`; cannot become `ready` while this card is open                                |

Live origin `https://mars-ai-simulation.janpolacek.workers.dev` (what the push-triggered build serves),
in-page fetch hashed with `crypto.subtle` at 15:23–15:25 CEST:

| Route                                                                | Result                                                                                                                                 | Withheld-token hits |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `/`                                                                  | 200, 16,968 B, sha256 `09c3cc8e6610d4663b6e690d1cd6a4881efe4b658e1eb572640249ac04a3eeb3`                                               | 0                   |
| `/news/`                                                             | 200, 10,663 B, sha256 `8b822f33b2f3a6914336014883594b14cae7d2a44008b8d34753ae19ee84f14e`                                               | 0                   |
| `/news/001-project-announcement/`                                    | 200, 11,675 B, sha256 `a82c1bcd5540334c824aaad15c05b84c90f77d6b59d9733109d3e870521ce9d8`                                               | 0                   |
| `/news/002-payload-selection/`                                       | 200, 14,060 B, sha256 `79b06d7f7cb9ccd4ca9c75bc648ead5c09cc2e78d47676f116ff97f3dd384d89`                                               | 0                   |
| `/news/003-vehicle-design/`                                          | 200, 11,176 B, sha256 `6fa3c431ff3858c1716aa07d67bfb06e01de063a4af12a0ab38c2b471e2c46f5`                                               | 0                   |
| `/news/004-launch-provider/`                                         | **404**, 0 bytes                                                                                                                       | 0                   |
| `/wiki/`                                                             | 200, 4,601 B, sha256 `37c56896ca2fc426282a3e62ef0add576384d26eda85578ec7e706a27dcf40ed`, title `Wiki \| Red Horizon`, zero entry links | 0                   |
| `/wiki/area/`, `/wiki/vehicle/`, `/wiki/project/`                    | **404** (the route set is sections with a published page; none is published)                                                           | 0                   |
| `/wiki/vehicle/rh-01-pathfinder/` and two launch-vehicle slug probes | **404**                                                                                                                                | 0                   |

Token list read at run time from the release controls, reported by count only, never by value.

Byte counts are response-body bytes and digests are SHA-256 over those bytes, taken in-page with
`crypto.subtle`; decoding the same response and measuring the text reports fewer units for pages that
carry non-ASCII characters, which is a measurement-unit artefact and not a content change. Re-measured
at 15:27 CEST: three consecutive `cache: 'no-store'` fetches of `/news/003-vehicle-design/` returned
11,176 B and digest `6fa3c431…` every time.

## 6. Conditions, and what is outstanding

| #  | Item                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Owner                                                                                         | Where it is recorded            |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------- |
| C1 | Answer Gates 004-A, 004-C, 004-D (and 004-E if Option B or C) on this card with the exact wordings the card body requires, or record the negative forms it offers. Nothing downstream starts before this                                                                                                                                                                                                                                                                                               | human story owner, relayed by the operator                                                    | this card                       |
| C2 | At release time, the exact public sentence(s) naming any real institution are reviewed here against the six accurate / non-endorsing rules, and the review is recorded in the release decision                                                                                                                                                                                                                                                                                                         | `mars-ai-simulator-editor`                                                                    | article 004 release card        |
| C3 | Create the launch-vehicle dossier card and the wiki launch-vehicle parent card, both parent-gated on this card, or record why the wiki node is not created. The wiki `vehicle` section is already assigned to the RH-01 surface vehicle by `.agents/work/briefs/wiki-tree-plan.md` (leaf `/wiki/vehicle/rh-01-pathfinder/`, `vehicle-references` media key), so a launch-vehicle page is either a second leaf in that section or a new section — a structural question the planner owns, not this gate | `mars-ai-simulator-planner`                                                                   | the planner's 004 planning card |
| C4 | The `t_9b2a308d` card title advertises a "vehicle publication state at step 003" gate whose body never contained one (its two gates are area and project), so the RH-01 wiki leaf's own publication state is unrecorded. Name it where the wiki pipeline is planned                                                                                                                                                                                                                                    | `mars-ai-simulator-planner`                                                                   | the wiki pipeline card          |
| C5 | Defence in depth for step 004: the build guard carries no marker for a provider/vehicle name or the withheld launch date. If the release wants a marker, it belongs to a dev card, and it must be retired in the same change as the step that releases the material                                                                                                                                                                                                                                    | `mars-ai-simulator-dev` at the 004 implementation                                             | the 004 build card              |
| C6 | Before any 004 flip, the present-tense negative claims in the published 002 and 003 ("no launch vehicle has been named") are made time-bound — by the record dates once they are assigned, or by a scoped wording corrective — so the record does not read as falsified by a later article                                                                                                                                                                                                             | `mars-ai-simulator-editor` (release card) and `mars-ai-simulator-writer` if wording must move | article 004 release card        |
| C7 | The step-004 record date: assigned at release from a locked milestone, or left unset with the gap named (§7)                                                                                                                                                                                                                                                                                                                                                                                           | `mars-ai-simulator-editor`                                                                    | article 004 release card        |

## 7. The record date for step 004 — a gap, named and not filled

The article's `simulatedDate` is this role's value and comes only from the milestone table
(`docs/SCENARIO.md` "Launch and mission dates"). Step 004 covers a **launch-architecture and
launch-provider decision**, and the table carries **no row for such a decision**: its rows in the
step's window (the private calendar rows between the design freeze and step 005's launch,
`docs/SCENARIO.md:188-192`) name assembly, the test campaign, qualification and the vehicle's arrival
at the launch site — each a different event from the one step 004 releases.

So this record fills nothing. It states the constraint the release card must satisfy: the value must
sit on a locked milestone, in the timeline's order, after step 003's value and before step 005's; it
must imply no event step 004 has not released; and it must not be readable as a launch or landing
date. If, when the package is ready, no locked row fits what the published article actually covers,
the value stays unset and the gap goes to the human story owner as a scenario-canon question. It is
never invented, and the draft card is right to forbid it at draft time.

Related, and in flight: cards `t_531698d9` (this role — assign the record dates of the three published
articles) and `t_de785d99` (dev — add and render the field) are still open, so 001–003 carry no value
yet. Their values are what make the negative claims in §4 row 11 time-bound; the ordering constraint
above is what keeps 004 consistent with them.

## 8. Mid-run observations (non-blocking)

| Time (CEST) | Observation                                                                                                                                                                                                                                                                                                                    | Effect on this verdict                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| 15:23–15:25 | Live `/wiki/` is now 4,601 B, sha256 `37c56896ca2fc426282a3e62ef0add576384d26eda85578ec7e706a27dcf40ed` (the earlier gate measured 4,639 B, `c4b22582…`)                                                                                                                                                                       | None — the reviewed index metadata and site work landed; still an empty index, still zero entries, still no launch-vehicle route   |
| 15:24       | Shared checkout `HEAD` `6cc2f37` is one commit **ahead** of `origin/main` `8276b47` (the record-date policy commit is not pushed)                                                                                                                                                                                              | None — the live origin was measured directly, not inferred from the local tree                                                     |
| 15:24       | Untracked: both 004 briefs, `website/src/lib/simulated-date.ts`, `website/test/news-simulated-date.test.mjs`; modified: `content.config.ts`, `seo.ts`, `ArticleView.astro`, `NewsCard.astro`, `progress-log.md`                                                                                                                | None — the record-date work in flight; no 004 surface among them                                                                   |
| 15:24       | Cards `running` during this gate: `t_5fbd61ee`, `t_0abfd5b6` (planner, 004 prep), `t_67b1463e` (research, canon-agnostic by its own body and expressly allowed to run first), `t_b634310c` (writer, homepage copy), `t_de785d99` (dev, record date), `t_c8d5d167` (dev, hook)                                                  | None can release a 004 surface; the researcher is the only 004-adjacent one and its output is a source pack, not a public artifact |
| 15:24       | Input hashes re-taken immediately before the verdict: `docs/SCENARIO.md` `99206373…`, step 004 `1c61b918…`, step 005 `3a996027…`, canon proposal `9f827e1e…`, article brief `5f27e4c9…`, wiki plan `8d602f85…`, `guards.mjs` `fd5a9e43…`, `wiki-query.ts` `6aa25e05…`, `content.config.ts` `f6017306…`, `media.ts` `9ecc54c7…` | None — every hash identical to the read cited above                                                                                |

## 9. Lifecycle action taken

`kanban_block(kind="needs_input")` on `t_4d1b3041`, with the gate answers named as the input it waits
for, so the card surfaces to the operator for the human story owner. **Not** `kanban_complete`: the
card is the parent edge of `t_1ff6a809`, and a completion would promote a writer into the article the
gate exists to keep closed.

---

## Revision 2 — the second gate ledger for this slug: card `t_9e59c235`

Recorded 2026-09-17 15:32 CEST by `mars-ai-simulator-editor`. **Superseded revision:** this file at
sha256 `ec030cdebfb03433223008b62ea60bec7b7e3dc7041fb541c3c47a41216f2af8` (203 lines, 40,629 B —
revision 1, card `t_4d1b3041`). Revision 1's gate ledger, review table, conditions C1–C7 and hold
stand unchanged; revision 2 extends them to the second card and re-measures the hold at 15:29–15:32
CEST. Companion record: `.agents/work/continuity/004-launch-provider-gates.md` revision 2 (same
verdict: `continuity clear` for the hold state, and for nothing else).

| Field                     | Value                                                                                                                                                                                                                                                                                                                |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card under work           | `t_9e59c235` — gate ledger for step `004-launch-provider`: Gates 004-A … 004-E, same five questions as revision 1's `t_4d1b3041`. Created 15:27 by the article container `t_0abfd5b6`; one parent-gated child (`t_81bc2b83`, draft, `todo`)                                                                          |
| Package under review      | **None exists** — re-measured 15:29–15:32 CEST: no `website/news/004-launch-provider.mdx`, no launch-vehicle dossier, no launcher imagery, no `website/wiki/` tree, no launch media key                                                                                                                              |
| Gate answers on the board | **None, in any form**, re-checked board-wide at 15:29 CEST over all 281 comments: no canon choice, no real-provider wording sentence, no release-order sentence, no title/byline, no amendment list                                                                                                                  |
| Duplicate graph           | Reported, not resolved (§R2.2): `t_9e59c235` + `t_24585e00` + `t_81bc2b83` duplicate chain A's `t_4d1b3041` + `t_67b1463e` + `t_1ff6a809`; chain A also holds the dossier (`t_c4da077b`) and wiki parent (`t_fea1e735`) cards, and every chain-A body names `t_4d1b3041`. Archiving is outside this role's authority |
| Record date for step 004  | **Not assignable today — gap named, not filled** (§R2.4): the milestone table in `docs/SCENARIO.md` holds no row for a launch-provider or architecture decision                                                                                                                                                      |
| Hold decision             | The hold of revision 1 §2 stands for this card too; recorded as its own sentence in §R2.3                                                                                                                                                                                                                            |
| Status                    | **`blocked`** — four of the five gates are canon-authorship, release-order and public-identity decisions this role may not settle, and completing the card would release a writer into article 004                                                                                                                   |

### §R2.1 Review table (this card)

| #  | Check                                                                                 | Result              | Evidence                                                                                                                                                                                                                                                                    |
| -- | ------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Card body carries all five gates verbatim, with fail-closed defaults and bind clauses | PASS                | `t_9e59c235` body read in full; five `## Gate 004-X` headings, a `Fail-closed default` and a `Binds` clause under each, checked string by string against the card                                                                                                           |
| 2  | Card body carries the verbatim answer slots, never an inferred answer                 | PASS                | The Option A / B / C canon slots, the real-provider wording slot, both release-order forms, the public title slot, the author slot and the amendment-list slot each appear exactly once; no slot carries an answer                                                          |
| 3  | No gate answer exists anywhere on the board                                           | PASS (none found)   | Board-wide `task_comments` scan, 281 rows, 15:29 CEST — no 004 gate sentence from the human story owner or the operator; the only 004 comments are `t_5fbd61ee`, `t_67b1463e` and `t_4d1b3041`'s hold                                                                       |
| 4  | No approval is invented, inferred or templated                                        | PASS                | No gate sentence is attributed to any human; both card bodies' templates are cited as unapplied slots (revision 1 §3, and §R2 above)                                                                                                                                        |
| 5  | Fail-closed default holds in the tree                                                 | PASS                | `website/news/` 001–003 only; `docs/vehicle/` RH-01 dossier and plates only; `website/wiki/` absent; four media keys, none a launch key                                                                                                                                     |
| 6  | Fail-closed default holds on the published surface                                    | PASS                | Live `/news/004-launch-provider/` 404, 0 bytes; `/wiki/vehicle/` and two further launch-vehicle slug probes 404; zero withheld-token hits on every served route                                                                                                             |
| 7  | The withheld material is not merely unreleased but unguardable-by-accident            | PASS (note)         | `guards.mjs` `fd5a9e43…` still carries no provider/vehicle/launch-date marker; containment rests on the gates alone (C5, owner `mars-ai-simulator-dev` at the 004 implementation)                                                                                           |
| 8  | The parent-gated child cannot start                                                   | PASS                | `t_81bc2b83` (draft) is `todo` behind this card; chain A's draft `t_1ff6a809` and every later chain-A stage are `todo` behind `t_4d1b3041`, which is `blocked`                                                                                                              |
| 9  | Record-date question handled honestly                                                 | PASS with gap       | §R2.4: no locked milestone fits the step; no value invented; the constraint is handed to the 004 release card                                                                                                                                                               |
| 10 | Order-sensitivity of already-published copy checked                                   | PASS with condition | 002 (`:103`) and 003 (`:69`) still state in the present tense that no launch vehicle has been named; C6 still binds, and the `simulatedDate` field now exists in the schema (`aa71714`) while the three published articles carry no value                                   |
| 11 | No external action of any kind                                                        | PASS                | No commit, no push, no deploy, no hosting/DNS/credential use, no media upload; `publication:` fields untouched; the only writes are this record, its companion and one card comment                                                                                         |
| 12 | Out-of-scope list respected                                                           | PASS                | No canon value written, `docs/SCENARIO.md` and `docs/timeline/` not edited, no prose, no imagery, no `website/` change, no closed card reopened                                                                                                                             |
| 13 | Concurrent work probed for interference                                               | PASS with note      | Six cards `running` during this gate (`t_24585e00`, `t_906be0fb`, `t_c8d5d167`, `t_0abfd5b6`, `t_de785d99`, this card); none can release a 004 surface — the duplicate research card can only rewrite the source pack, which is recorded as a hotspot rather than a blocker |

### §R2.2 The duplicate graph — reported, with its owner

`t_0abfd5b6` (the article container, itself created by the operator-commissioned planner card
`t_5fbd61ee`) re-created a partial step-004 graph at 15:27–15:28 on top of the complete one already on
the board: gate ledger `t_9e59c235` (this card), research `t_24585e00`, draft `t_81bc2b83`. Chain A
holds the rest — the dossier card, the wiki vehicle-page parent card and stages 3–7 — and every
chain-A card body names `t_4d1b3041` as its gate, so chain A is the graph the step runs on. This role
does not archive, reassign or rewrite another card's body: the recommendation is left for the operator
(archive `t_9e59c235`, `t_24585e00`, `t_81bc2b83`), and the step-003 precedent for exactly this
situation is the dedupe note on `t_7a30964f`. Until that happens, completing this card would promote a
second writer into article 004, which is why the card is held rather than closed.

Hotspot: `.agents/work/sources/004-launch-provider.md` — two research cards (`t_67b1463e` done,
`t_24585e00` running) write the same path, so its hash can move between a reader's snapshot and use.

### §R2.3 Hold decision for this card (its own sentence)

> **Hold decision, `t_9e59c235` (`004-launch-provider-gates`), recorded 2026-09-17 15:32 CEST by
> `mars-ai-simulator-editor`: no step-004 material is released by this card, and nothing becomes
> public. Gates 004-A, 004-C, 004-D and 004-E are canon-authorship, release-order and public-identity
> decisions that stay with the human story owner; Gate 004-B's wording review becomes this role's at
> release time, when a public sentence exists to review. The fail-closed defaults stand as measured in
> the continuity record revision 2 §"Fail-closed defaults, measured", and the card holds.**

Exact public scope: **nothing becomes public.** The only public surfaces in play stay as measured —
`/news/` carries steps 001–003, `/news/004-launch-provider/` is 404, `/wiki/` is an index with zero
entries, and no served byte names the launcher, the provider, the launch facility or any step-004 fact.

### §R2.4 Record date — the gap, restated for this card

`simulatedDate` is this role's value and comes only from the milestone table (`docs/SCENARIO.md`
"Launch and mission dates", `:179-207`). Step 004 covers a launch-architecture and launch-provider
decision, and the table's rows in the step's window (`:188-192` — flight-model assembly, the test
campaign, environmental qualification, the flight stack's arrival at the launch site, the Launch
Readiness Review) each name a different event; no row holds a launch-provider or architecture
decision. So this card assigns **no** value and names the gap: the 004 release card must either find a
locked milestone that fits what the published article actually covers, in timeline order after step
003's value and before step 005's, or leave the field unset and put the gap to the human story owner
as a scenario-canon question. It is never invented.

### §R2.5 Lifecycle action taken

`kanban_block(kind="needs_input")` on `t_9e59c235`, naming the gate sentences the human story owner
owes and the duplicate-graph question for the operator. **Not** `kanban_complete`: the card is the
parent edge of `t_81bc2b83`, and a completion would promote a writer into article 004 with its canon
choice still blank.

---

## Revision 3 — the gate answers recorded and applied: the ledger is discharged

Recorded 2026-09-17 19:02 CEST by `mars-ai-simulator-editor`. **Superseded revision:** this file at
sha256 `29ddbc67e9f658db94fcb6165d30d4cbec5ef70fdbbc479cc0a0e507190ae9cc` (289 lines, 53,589 B —
revision 2). Revisions 1–2 are not withdrawn: they are the record of what the gate withheld while the
questions were open, and their measurements stand as the unanswered-state baseline. Revision 3
records the answers, the scope each one clears, and the discharge of the ledger.

| Field                    | Value                                                                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card under work          | `t_4d1b3041` — gate ledger for step `004-launch-provider`, Gates 004-A … 004-E                                                                                                                                                                                            |
| Answer source            | the human story owner, relayed by the operator (`default` profile) through the CLI session form (~15:50 CEST), recorded on this card in two comments at 18:52 CEST and read back from `task_comments` at 18:53 CEST                                                       |
| Package under review     | **still none** — no article-004 MDX, no launch-vehicle dossier, no `website/wiki/` tree, no launcher imagery, no launch media key (§R3.4)                                                                                                                                 |
| Fidelity per gate        | 004-A verbatim · 004-C verbatim (positive form) · 004-E not applicable · 004-B recorded in the card's second ("not required") form with two carrying constraints · 004-D recorded as a deferral, not a template form (§R3.2)                                              |
| Duplicate graph          | **resolved by the operator** — chain B (`t_9e59c235`, `t_24585e00`, `t_81bc2b83` and their five descendants) archived 18:50 CEST; chain A is the graph the step runs on (§R3.2)                                                                                           |
| Record date for step 004 | **not assignable at gate time** — no article exists to date, and the milestone table holds no row for the decision itself; the constraint set is sharpened in §R3.5                                                                                                       |
| Verdict                  | **`approved`** — the ledger is discharged: five gates answered, three parent-gated children that may open, nothing released by this card                                                                                                                                  |
| Status                   | **`approved` → `kanban_complete`.** This is a gate-ledger verdict, not a release decision: there is no package, no `publication:` field, no route, no commit and no push in this card's scope, and each flip still needs its own release decision on its own release card |

### §R3.1 The five answers, verbatim

Quoted exactly as the operator recorded them on this card at 18:52 CEST, from the human story owner.
Nothing here is paraphrased, and no sentence is attributed to a human who did not say it.

> "004 launch provider canon: option A — the locked canon stands (Ariane 64 from Europe's Spaceport near Kourou); the launch vehicle documented is Ariane 64."

Gate 004-A, the card body's first required form, verbatim. Options B and C are not selected; no
fictional provider and no fictional launch vehicle is introduced.

> "004 real-provider wording review: not required — no real provider or institution named."

Gate 004-B, the card body's **second** required form — the form the body reserves for an option that
names no real institution — carried with the operator's two constraints, quoted in §R3.2.

> "Step 004 release order advance: approved" — and — "the launch-vehicle wiki node IS public at step 004 in publication STATE."

Gate 004-C, the card body's first (positive) form, verbatim. The publication **FLIP** for the wiki
node remains this role's recorded release decision on that page's own release card.

> "004 public title: to be set at the release gate; the fail-closed default (the writer's drafted title) applies until then." · "004 author: none (no byline)."

Gate 004-D, recorded as a **deferral** in the operator's wording: the human set no title and
authorised no byline, so the fail-closed default stands — the title the writer drafts, and no `author`
field. The release card may not set or change the title, and may not add an author field, without a
further recorded human answer.

> Gate 004-E — "Not applicable: Option A is selected, so `docs/SCENARIO.md` stays as it is and no amendment is requested. No planner edit to canon."

### §R3.2 Fidelity per gate — what arrived verifiably verbatim and what did not

| Gate  | Required form                                                                                                                                   | Recorded form                                                                                                                                                                                                                                                                                                     | Fidelity                                                         | Effect applied                                                                                                                                                                 |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 004-A | "004 launch provider canon: option A — the locked canon stands … the launch vehicle documented is Ariane 64." or "… option B …"                 | the Option A sentence, character for character                                                                                                                                                                                                                                                                    | **verbatim**                                                     | the locked canon stands: no canon amendment, and the launch vehicle the dossier and the wiki page document is the one locked canon names                                       |
| 004-B | "004 real-provider wording reviewed and approved: <the exact public sentence(s)>", or the "not required" form when no real institution is named | the "not required" form, verbatim, plus two constraints: no institution name on any public surface (article, dossier, wiki page, asset manifest, alt text, captions, slug, SEO package, commit message); and if any stage wants to publish the institution name, 004-B re-opens and needs the approval form first | **recorded, in the non-approval form**                           | no approval sentence exists that covers a public sentence naming a real institution, provider, operator or facility — reconciled in §R3.3 in favour of the fail-closed default |
| 004-C | "Step 004 release order advance: approved" and "the launch-vehicle wiki node IS public at step 004 in publication STATE"                        | both clauses, verbatim                                                                                                                                                                                                                                                                                            | **verbatim**                                                     | the release order advances to step 004 (the state grant); the node's flip stays this role's release decision on that page's own release card                                   |
| 004-D | "004 public title: <title>" · "004 author: <name or 'anonymous'>"                                                                               | a deferral to the release gate under the fail-closed default, plus "004 author: none (no byline)"                                                                                                                                                                                                                 | **partial** — byline clause answered; title clause is a deferral | title = the writer's drafted title until a further human answer; no byline anywhere; the release card may change neither (C10)                                                 |
| 004-E | the amendment list, required only if Option B or C                                                                                              | not applicable (Option A)                                                                                                                                                                                                                                                                                         | **n/a**                                                          | `docs/SCENARIO.md` unchanged; no amendment requested; no planner edit to canon                                                                                                 |

Resolved at the same time, and recorded so a later reader does not re-open it: the duplicate graph of
revision 2 §R2.2 is gone. Chain B (`t_9e59c235`, `t_24585e00`, `t_81bc2b83`, `t_94887702`,
`t_8db78a76`, `t_655341e8`, `t_1e366ff0`, `t_5fa67915`, `t_84297c77`) was archived by the operator at
18:50 CEST. The step runs on chain A, whose children are `t_1ff6a809` (draft), `t_c4da077b` (dossier)
and `t_fea1e735` (wiki vehicle-page parent) — all three still `todo` behind this card at 18:53 CEST.

### §R3.3 What the answers clear on a public surface, and what they do not

This is the operative part of the revision: it is what the draft, SEO, visuals, dossier and wiki
stages will act on.

**Cleared, by name, by 004-A:** the launch **vehicle designation** the locked canon already carries
(`docs/SCENARIO.md:22`, `:124`, `:193`, `:230`). The human's sentence says the launch vehicle
documented is that vehicle, and the article, the dossier and the wiki page are the surfaces that
document it. Naming it is canon, not new canon.

**Not cleared:** any real **institution, provider, operator or facility** name in public copy. The
recorded 004-B form is the one whose premise is that no real institution is named; it is not an
approval of a sentence that names one, and the operator's own clause 2 says the gate re-opens and needs
the verbatim approval form before such a surface ships. Three sources condition a launch-service or
launch-facility description carrying a real name on 004-B: the article brief
`.agents/work/briefs/004-launch-provider.md` §Allowed angle ("only after Gate 004-B"); the draft card
body `t_1ff6a809` (line 36, the same wording, and line 27, "No real institution or provider named
without Gate 004-B's verbatim approval sentence"); and the canon proposal
`.agents/work/briefs/004-launch-provider-canon.md` §Option A ("This option therefore requires Gate
004-B"). No approval sentence exists, so the fail-closed default binds: the pipeline describes the
launch service and the campaign in **generic wording** and through the fictional programme's own
interface (payload adapter, injection segment, integration campaign), and names no real operator,
institution or facility. A stage that wants the real name routes the approval request; it does not
self-authorise. This is containment, not a stall — the article's allowed angle (why the architecture
was chosen, and what remains before flight) does not need a real facility name.

**Unchanged by the answers:** the six accurate / non-endorsing rules still bind every public sentence
they cover — the fiction labelled as fiction; no implication of participation, approval, funding or
endorsement; no real price, cost, schedule or performance figure presented as the programme's (the
€180 M line stays a programme planning allowance); nothing that reads as an advertisement for a real
provider; the real provider's public record documented separately from the fictional programme's
interface. This role applies them to the exact public sentences at release time and records that
review in the release decision (C2). The released pattern to keep is `/news/002-payload-selection/`,
which cites real agencies in a sources section with an explicit "they are not partners in Red Horizon"
sentence. Note also what is already public and therefore not new: article 001 names the participating
national teams, and article 002 names real agencies as precedents. A later recorded approval is the
normal route for a real name, not an impossibility.

### §R3.4 Fail-closed state, re-measured (not restated) at 18:54–18:58 CEST

Tree, `/home/janpolacek/Projects/mars-ai-simulator`:

| Surface                                       | Measured                                                                                                                                                                                                   |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `website/news/`                               | 001–003 only; `004-launch-provider.mdx` absent → no frontmatter, no `publication:` field, no record date for step 004                                                                                      |
| `docs/vehicle/`                               | the RH-01 dossier and its six plates only — no launch-vehicle dossier                                                                                                                                      |
| `website/wiki/`                               | does not exist → the `wiki` collection is empty                                                                                                                                                            |
| launcher / operator / facility tokens in copy | `grep -iE 'ariane\|kourou\|spaceport\|guiana\|arianespace' website/news/*.mdx`: **0 files**                                                                                                                |
| `website/scripts/guards.mjs`                  | `gatedTextMarkers = ['18° 42', '226° 14']`, `gatedDirectoryNames = ['timeline']`, one withheld file path — still no marker for a provider/operator/facility name or for the withheld launch-day forms (C5) |

Live origin `https://mars-ai-simulation.janpolacek.workers.dev`, in-page fetch, hashed over the
response bytes with `crypto.subtle` at 18:57–18:58 CEST; token families reported by hit count only:

| Route                                                              | Result                                    | Withheld-token hits |
| ------------------------------------------------------------------ | ----------------------------------------- | ------------------- |
| `/`                                                                | 200, 17,792 B, sha256 `ef1466f4aa9789ef…` | 0                   |
| `/news/`                                                           | 200, 11,352 B, sha256 `bcbb0e8038c71158…` | 0                   |
| `/news/004-launch-provider/`                                       | **404**, 0 bytes                          | 0                   |
| `/wiki/`                                                           | 200, 4,599 B, sha256 `821a2d846a2ea5b2…`  | 0                   |
| `/wiki/vehicle/`, `/wiki/area/`, `/wiki/vehicle/rh-01-pathfinder/` | **404**                                   | 0                   |

The families scanned are the launcher, the operating-company, the launch-facility and the withheld
launch-day forms; the withheld coordinate markers do not appear either.

### §R3.5 The step-004 record date — sharpened, still not assigned

`simulatedDate` remains this role's value, and it still cannot be assigned at gate time: no article
exists to date, and the milestone table (`docs/SCENARIO.md` "Launch and mission dates") holds no row
for a launch-architecture or launch-provider decision. What this revision adds is the constraint set
the release card applies against the finished article:

- **Floor and order.** The value must be after step 003's anchor (`docs/SCENARIO.md:187`, the design
  freeze, carried by the published article 003 as 2029-07-13) and before step 005's launch row
  (`:193`, which step 005 owns and the record still withholds). The articles stay in order by the
  dates they carry, not only by their `order` field.
- **Candidates in the window.** The rows between those two are `:188`–`:192`. `:188` (flight-model
  assembly begins) is the earliest, and the only one whose meaning is compatible with the article's
  allowed framing — "what remains before flight: integration, tests, and final readiness" — because
  at that row integration and tests genuinely do still remain.
- **Exclusions.** `:189`–`:192` each name an event that would falsify that framing if the article
  carried the row's date (a test campaign under way, qualification complete, the stack at the launch
  site, a readiness review held); `:193` is step 005's.
- **The rule that does not bend.** The value sits on a locked milestone, or it is unset. If the
  finished article's claims fit no locked row, the field stays unset and the gap goes to the human
  story owner as a scenario-canon question (a milestone row for the decision the step releases). It is
  never invented, and the published surface states it under a label that presents it as part of the
  fiction, never as a real publication date.

### §R3.6 Review table (this revision)

| #  | Check                                                                        | Result         | Evidence                                                                                                                                                                                                                                                    |
| -- | ---------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | An answer exists on the board, and is quoted rather than paraphrased         | PASS           | Two comments on this card, 18:52 CEST, author `default`, read back from `task_comments`; §R3.1 quotes them                                                                                                                                                  |
| 2  | The answers exist in exactly one place, and no template is read as an answer | PASS           | Board-wide scan for each answer sentence: each hits this card's 18:52 comment only. The planner's 15:27 comment on `t_5fbd61ee` carries the card-body templates as a handoff list; they remain unapplied slots                                              |
| 3  | Fidelity per gate recorded, not assumed                                      | PASS           | §R3.2 — 004-A verbatim, 004-C verbatim, 004-E n/a, 004-B in the non-approval form, 004-D a deferral                                                                                                                                                         |
| 4  | The answers' scope is applied without extending it                           | PASS           | §R3.3 — the vehicle designation is cleared by 004-A; institution, provider, operator and facility names are not cleared and the fail-closed default binds. No canon authored, no gate widened                                                               |
| 5  | No approval is invented                                                      | PASS           | The 004-B approval sentence does not exist and none is written; no title is set by this record; the deferral is recorded as a deferral                                                                                                                      |
| 6  | The record date is not invented                                              | PASS           | §R3.5 — no value assigned; the constraint set and the one compatible candidate row are recorded instead                                                                                                                                                     |
| 7  | Fail-closed defaults re-measured in fact                                     | PASS           | §R3.4 — tree and live origin, 0 withheld-token hits, 404 on the step-004 route and on every wiki route                                                                                                                                                      |
| 8  | The children cannot have started early                                       | PASS           | `t_1ff6a809`, `t_c4da077b`, `t_fea1e735` all `todo` at 18:53 CEST, parent-linked to this card                                                                                                                                                               |
| 9  | The title the writer must produce is implementable                           | PASS with note | `website/src/content.config.ts:16` — `title: z.string()`, required, no default, so the draft card's "leave the field unset (the schema's default applies)" fallback cannot build. The writer drafts a working title; the release card changes nothing (C10) |
| 10 | Concurrency probed                                                           | PASS           | Open cards at 18:53 CEST: this card, ten `todo` step-004 cards and the container `t_0abfd5b6`; none started, and the duplicate chain is archived                                                                                                            |
| 11 | No external action, no canon edit, no `website/` change                      | PASS           | No commit, no push, no deploy, no hosting/DNS/credential use, no media upload; `docs/SCENARIO.md` and `docs/timeline/` read-only; the only writes are this record, its companion and card comments                                                          |
| 12 | Out-of-scope list respected                                                  | PASS           | No provider or vehicle chosen by this role (the human chose), no canon value authored, no release order advanced by this role (the human advanced it), no prose, no imagery, no publication flip                                                            |
| 13 | A release decision is not manufactured                                       | PASS           | This card releases nothing — no route, no frontmatter, no asset. The gate discharges the graph; each flip needs its own release decision on its own release card (§R3.7, C9)                                                                                |

### §R3.7 Conditions after this revision

| #   | Item                                                                                                                                                                                                                                                                                                                                                                              | Owner                                                                               | Where                                                           |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| C1  | **Satisfied.** Gates 004-A, 004-C and 004-D answered, 004-E recorded as not applicable, 004-B recorded in its non-approval form with its constraints. Nothing was left unasked                                                                                                                                                                                                    | closed on this card                                                                 | this card, 18:52 CEST                                           |
| C2  | At release time the exact public sentences are reviewed here against the six accurate / non-endorsing rules, and that review is recorded in the release decision. Its scope is now the sentences that name the launch vehicle and describe the campaign                                                                                                                           | `mars-ai-simulator-editor`                                                          | article release card `t_1105aa0d`; the wiki page's release card |
| C3  | **Satisfied.** The dossier card `t_c4da077b` and the wiki vehicle-page parent `t_fea1e735` exist, parent-gated on this card; the planner recorded the structural decision on `t_fea1e735` (the launch-vehicle page is a second leaf inside the existing `vehicle` section)                                                                                                        | planner                                                                             | recorded                                                        |
| C4  | **Still open.** The **RH-01** wiki leaf's own publication state: 004-C's grant is node-specific (it names the launch-vehicle wiki node), so whether step 004's advance settles the RH-01 leaf's state is unrecorded                                                                                                                                                               | `mars-ai-simulator-planner`, or the human story owner if the intent needs recording | the wiki pipeline card                                          |
| C5  | **Refined.** The guard carries no marker for the still-withheld material. As of this revision the withheld families are the operating-company/institution and facility names and the launch-day forms — the launcher **designation** is released by step 004, so a marker must not cover it. Retirement ships in the same change as the step that releases the remaining material | `mars-ai-simulator-dev` at the 004 implementation                                   | the 004 build card                                              |
| C6  | **Satisfied in form.** The record dates are applied (001 carries 2026-10-12, 002 2027-03-19, 003 2029-07-13), so the published negative claims ("no launch vehicle has been named") read as statements about their own dates. What remains is the ordering floor: the step-004 date must be later than 2029-07-13                                                                 | `mars-ai-simulator-editor`                                                          | the article-004 release card                                    |
| C7  | The step-004 record date: assigned at release from a locked milestone per §R3.5, or left unset with the gap named                                                                                                                                                                                                                                                                 | `mars-ai-simulator-editor`                                                          | the article-004 release card                                    |
| C8  | The cleared-name scope of §R3.3 reaches the stages that write public text — draft `t_1ff6a809`, SEO `t_acea152d`, images `t_6fde5f04`, and the wiki page's stage children. 004-B re-opens for any real institution, provider, operator or facility name                                                                                                                           | `mars-ai-simulator-editor` (routed as card comments)                                | the draft card and the release card                             |
| C9  | Each flip still needs this role's release decision on its own release card: the article on `t_1105aa0d`, the wiki page on its own release card. The gate's discharge is not a release                                                                                                                                                                                             | `mars-ai-simulator-editor`                                                          | the two release cards                                           |
| C10 | Public title and byline: no byline anywhere; the title is the writer's drafted working title until a further recorded human answer, and neither the release card nor any later stage may set or change it                                                                                                                                                                         | `mars-ai-simulator-editor` / `mars-ai-simulator-writer`                             | the draft card and the release card                             |

### §R3.8 Lifecycle action taken

`kanban_complete` on `t_4d1b3041`. This is the card body's own design: "what happens after all five
gates are answered" begins with this role recording each answer, and the three children
(`t_1ff6a809` draft, `t_c4da077b` dossier, `t_fea1e735` wiki vehicle-page parent) stay `todo` until
this card is `done`. Completing is what opens the pipeline the answers released — the opposite of
revisions 1 and 2, where a completion would have promoted a writer into a blank canon choice. The
completion releases nothing: no route, no frontmatter, no flip, no commit, no push.
