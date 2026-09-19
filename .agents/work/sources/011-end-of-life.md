# Source pack: 011-end-of-life

## Metadata

- Slug: `011-end-of-life`
- Brief: `.agents/work/briefs/011-repair-and-end-of-life.md` (page 2 of 3 — this
  card; page table line 10; allowed facts line 16; common framing lines 19-24;
  forbidden list lines 26-31; human gate lines 33-35; asset/image decision line
  40; draft contract lines 43-47; acceptance criteria lines 49-55)
- Timeline step: `011-repair-and-end-of-life` — page 2 of 3 (this card; page 1
  `011-two-mars-years` is released; page 3 `011-archive-final-report` is a later
  record and stays spoiler-bound; the step's private timeline file exists =
  boundary)
- Locked milestone source: `docs/SCENARIO.md:206` — `21 July 2035 | Thirty-day
  listening campaign ends and mission end-of-life is declared`
- Proposed reviewer-assigned record date: `simulatedDate: 2035-07-21` (proposal
  only — reviewer verifies from the locked row and assigns on the review card
  t_1c13ab54; writer leaves it unset)
- Status: research source pack (2026-09-19); not a canon record, article, or
  release decision
- Access date for repository and web sources: 2026-09-19 (session date)

## Confidentiality rule

Row `docs/SCENARIO.md:206` is THIS page's own record. The established convention
(008 `:198`, 009-egress `:199`, 009-first-drive `:200`, 010-first-sample `:201`,
010-stratigraphy `:202`, 010-one-mars-year `:203`, 010-health-review `:204`,
011-two-mars-years `:205`, verified on the page-1 continuity record
`.agents/work/continuity/011-two-mars-years.md`) holds: naming the milestone term
and calendar day on its own record is the step's release and does not re-apply an
earlier boundary. So THIS page may name `21 July 2035`, `Thirty-day listening
campaign ends`, and `mission end-of-life is declared` — the locked row and the
approved brief license exactly that event and calendar day (brief `:16`, page
table `:10`). The record date's arithmetic is public-derivable and consistent:
the released page-1 record anchors the campaign start on 21 June 2035
(`011-two-mars-years.mdx:7, :20, :44`) and the row's own milestone name is
"Thirty-day listening campaign", so the end date IS this row (`date -d
'2035-06-21 + 30 days'` = `2035-07-21`, verified 2026-09-19). The page may state
that the closeout campaign announced on 21 June ended on 21 July — that is this
row's own record, not a deduction of a withheld date.

Everything after the row remains the spoiler boundary: row `:207` (calibrated
science archive and final engineering report completion, 30 Jun 2036) must not
be referenced by name, date, shape, or implication, and no later event exists in
the mission table after `:207` (`docs/timeline/011-*` exists = boundary; brief
line 31 forbids "any later event beyond these rows"). The reserved step-011
facts stay reserved: `docs/SCENARIO.md:211` reserves "the final-contact cause and
any late-life mitigation" for timeline step 011, and the brief `:24` states the
final failure mode, remaining capability, and final message "are chosen only
after reviewing every preceding public fact — and only with human approval of
the final sequence". Those items are UNRESOLVED for this source pack: the writer
must NOT invent whether/how/when a final contact occurred, the cause, a
mitigation, a failure mode, remaining capability, or a final message — see C4,
C5, C6 and the Forbidden fact ledger.

The private timeline (`docs/timeline/011-repair-and-end-of-life.md`) is
continuity material only and is not reproduced here; its situations and phrases
("attempts a cautious mitigation", "extends useful work or safely changes the
rover's operating envelope", "restoring it to an impossible perfect state",
"power, thermal, communications, mechanical wear, or another approved limit ends
regular contact", "final status", "final message") are listed in the Forbidden
fact ledger so they stay out of public prose. The one phrase the brief itself
licenses on this page is "with the scientific and operational record intact"
(brief `:16`; the same phrase appears in the timeline's continuity description)
— that is an allowed-facts quote for the declaration's transparency point, not a
license to narrate the end's cause (C7).

The `docs/SCENARIO.md:209-211` planning notes remain private canon: the 687-day
Mars year and "roughly 1,374 Earth days" design frame are public through the 001
frame (C3/C5 patterns established on page 1); "supported surface interval" and
"supported science operations" stay out; the "30-day listening campaign is
closeout, not an extension of supported science operations" note is public only
through page-1's released campaign-start phrasing and this row's own "Thirty-day
listening campaign" name — the private phrasing itself is not quoted (C4).

No public file, canon change, release decision, commit, or push is part of this
research card (verified at C12 and Validation).

## Claim inventory

| ID  | Proposed material claim / use                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Canonical source                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Support and boundary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C1  | Red Horizon is a fictional, AI-assisted Mars exploration programme; every public page keeps the standard disclosure present and prominent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `website/news/011-two-mars-years.mdx:18, :54-60` (current released template — top-of-page fiction sentence and closing italic paragraphs); `website/wiki/red-horizon.mdx:14-22`; `website/news/010-health-review.mdx:13, :55`; `docs/SCENARIO.md:3-6` (private canon, boundary only)                                                                                                                                                                                                                                                                                                                                                                                           | Released disclosure boilerplate; reuse the page-1 closing sentence set as the current template. The Ariane 64 non-endorsement paragraph (`011-two-mars-years.mdx:56` family) is optional but must keep the "no real agency, launcher operator, or launch facility is a partner … has endorsed or approved" sentence if reused. Real-mission precedent links (002 pattern) must keep the "not partners, no endorsement" sentence. On an EOL page the disclosure block is the fiction guard — it must stay prominent, and no real mission's end story may read as RH-01's story (see Real-world sources).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| C2  | The 21 July 2035 milestone is the in-fiction record this page is released for: `Thirty-day listening campaign ends and mission end-of-life is declared` (locked row). The proposed `simulatedDate` is 2035-07-21.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `docs/SCENARIO.md:206` (locked row, date + milestone name); `.agents/work/briefs/011-repair-and-end-of-life.md:10, :16` (page table row, allowed facts); review card t_1c13ab54 (assigns/verifies from the row)                                                                                                                                                                                                                                                                                                                                                                                                                                                                | The row licenses the event and its calendar day. Naming "21 July 2035", "thirty-day listening campaign ends", and "mission end-of-life is declared" on this page IS this step's release — the `:198`-`:205` convention. Both milestone clauses are licensed: the campaign's end (C4) and the EOL declaration (C5). The row holds exactly two columns — it does not license the final-contact cause, the failure mode, telemetry, margins, or results (reserved, C6/C9, `docs/SCENARIO.md:211`). Date consistency is verified: page-1 released the campaign start on 21 June 2035 (`011-two-mars-years.mdx:7, :20, :44` — "a 30-day listening campaign begins"), and this row names it a "Thirty-day listening campaign", so `2035-06-21 + 30 days = 2035-07-21` (GNU date, verified 2026-09-19). The page may restate the start historically to frame the end; it must keep "about/roughly" qualifiers on design-frame figures and never derive the private "supported surface interval" (`:209`).                                                                                                                                                                                                                                                                                     |
| C3  | Released day-before context (the record chain, all published, ending with page 1 of this step): landed at Asteria Field 16 Sep 2031 (008); health packet and panorama 17 Sep (009-p1); egress 23 Sep (009-egress); first controlled drive 30 Sep (009-first-drive); first onboard sample 31 Oct 2031 (010-first-sample); first mineral-stratigraphy campaign 18 Apr 2032 (010-stratigraphy); one Mars year 3 Aug 2033 (010-one-mars-year); three Earth years / final-year health review 16 Sep 2034 (010-health-review); two Mars years completed, supported surface operations end, and a 30-day listening campaign begins as closeout on 21 Jun 2035 (011-two-mars-years, published, `simulatedDate: 2035-06-21`, pushed at 5d32ad9f). The page-1 record closed with "The listening campaign is the mission's next phase on this record."                                                             | `website/news/011-two-mars-years.mdx:18-20, :42-50` (published); `.agents/work/reviews/011-two-mars-years.md` and `.agents/work/continuity/011-two-mars-years.md` (page-1 release decision, human-gate record, chronology); `website/news/010-health-review.mdx:15-19, :47`; `010-one-mars-year.mdx:18, :44`; `010-stratigraphy.mdx:15, :41`; `010-first-sample.mdx:17`; `009-first-drive.mdx:15`; `009-health-packet-panorama.mdx:18`; `009-egress.mdx:17`; `008-landing.mdx:15-17`; parent container t_b409e2c1 handoff (chain verified end-to-end)                                                                                                                          | This page is the record that resolves page-1's "next phase" sentence: the campaign that began on 21 June ends, and EOL is declared. It may recap the chain in the same sentence style the 010 family and page 1 used. The "RH-01 is operating at Asteria Field" state sentence is superseded (page 1 already replaced it) — never present it as current state. It is NOT a new science explainer and adds no new results. "What comes next" handling on this page is delicately bounded — see C8.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| C4  | Event clause 1 (the row's own first clause): `Thirty-day listening campaign ends`. The campaign is the closeout period page 1 announced: the team continued to listen for any further signal from the rover rather than commanding surface work; closeout, not an extension of surface science (all released on page 1). This page records its conclusion on 21 July 2035.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `docs/SCENARIO.md:206` (the row's own first clause); `website/news/011-two-mars-years.mdx:20, :42-46, :50` (released campaign-start framing: listen for any further signal; closeout, not an extension; transition from commanding to monitoring); `docs/SCENARIO.md:209-211` (private planning note — boundary only, not quoted verbatim); `.agents/work/briefs/011-repair-and-end-of-life.md:16` (allowed facts: "the listening campaign ends")                                                                                                                                                                                                                              | FIRST-PUBLIC on THIS record: the campaign's END. The end date is the row itself (21 July 2035) — the page may state "the thirty-day listening campaign that began on 21 June ended on 21 July" (C2). HARD BOUNDARIES: the campaign's OUTCOME is step-011 reserved material (`docs/SCENARIO.md:211`) and the page must not assert the campaign heard a final signal OR fell silent, must not date the last contact, must not say "no further signal was received", and must not promise/deny post-campaign listening (the row records the campaign END; "we will keep listening" is a continuation hint — C8). Do not reuse page-1's forward "will continue to monitor and listen" sentence as current state; it is historical campaign framing only. No comms numbers, no link budgets, no "lost contact" drama (C9).                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| C5  | Event clause 2 (the row's own second clause): `mission end-of-life is declared`. The programme declares the mission at end of life — a formal, transparent public record made by Red Horizon, with the scientific and operational record intact (brief `:16`). The declaration is an Earth-side programme decision and record, not a Mars-surface event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `docs/SCENARIO.md:206` (the row's own second clause); `.agents/work/briefs/011-repair-and-end-of-life.md:16` (allowed facts: "end-of-life is declared transparently with the scientific and operational record intact"); `website/wiki/red-horizon.mdx:26-28` (released governance: coalition reports technical risk and anomalies candidly); `website/wiki/red-horizon.mdx:14` ("published as a single ongoing project record")                                                                                                                                                                                                                                               | FIRST-PUBLIC vocabulary on THIS record: `end-of-life` / `EOL` (0 content hits in released MDX, verified 2026-09-19) and `declared` / `declaration` in the mission sense (0 hits). The page may use the milestone's own phrase "mission end-of-life is declared" and define it plainly: reaching end of life means the programme has ended the mission — no further operations or campaign are commanded, and the declaration is recorded transparently with the record intact. Use "declared at end of life" / "end-of-life declaration" as the record vocabulary; avoid "terminated", bare "mission over", or "mission complete" (not in the row; last two invite the forbidden "mission over" family). HARD BOUNDARIES: the cause (power, thermal, communications, mechanical wear, or "another approved limit" — private timeline, never named as why), the final failure mode, remaining capability, the final message, and any late-life mitigation are ALL reserved (`docs/SCENARIO.md:211`; brief `:24`; timeline `:13`) — UNRESOLVED, never invented or implied (C6, C9, Forbidden ledger).                                                                                                                                                                                    |
| C6  | The distinction the brief and timeline require: a final contact, an official end declaration, and later archival/wiki updates are three different things and the page must keep them distinct. The declaration is a formal programme record; the last signal received from the rover is part of the mission's communications record; any later update to the archive/record is a separate matter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `.agents/work/briefs/011-repair-and-end-of-life.md:16` ("final contact distinguished from the official end declaration"), `:23` (common framing: "Distinguish a final contact, an official end declaration, and later archival/wiki updates"); `docs/timeline/011-repair-and-end-of-life.md:17` (same distinction — continuity control, phrase not quoted in public); page-3 row `docs/SCENARIO.md:207` (the "later" record exists — boundary only, never named/dated)                                                                                                                                                                                                         | The page IS expected to draw this distinction (it is the card's acceptance criterion and the brief's allowed fact). WRITER DIRECTIVE: phrase it conceptually — the end-of-life declaration is an official record made by the programme, distinct from the communications record (including the last signal the rover sent, whenever it occurred) and distinct from later record updates. DO NOT: give the date, content, format, or cause of any final contact; assert a final signal was or was not received; invent a farewell transmission; describe the last message; or narrate contact loss. Those are `docs/SCENARIO.md:211` reserved and human-owned (brief `:24`) — the pack marks them UNRESOLVED (see "Unresolved facts for the writer", below). The "later archival/wiki updates" arm of the distinction must be phrased without naming or dating page 3's event (`:207` — no "final archive", no "calibrated science archive", no 30 June 2036, no "next year's report"; C7/C8).                                                                                                                                                                                                                                                                                          |
| C7  | The declaration is made transparently "with the scientific and operational record intact": the mission's record — what it observed, analysed, and reported — remains intact and available at the released level, and the programme states that plainly rather than announcing an archive deliverable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `.agents/work/briefs/011-repair-and-end-of-life.md:16` (allowed fact: "end-of-life is declared transparently with the scientific and operational record intact"); `website/wiki/red-horizon.mdx:26-28` (released candid-reporting commitment); `website/news/001-project-announcement.mdx:27` (released structure noun: "one science archive, and one public record"); `website/news/001-project-announcement.mdx:67` and `website/wiki/red-horizon.mdx:42` (released lifecycle-frame noun "final science archive" — context only)                                                                                                                                             | FIRST-PUBLIC word on THIS record: `intact` (0 hits in released MDX). The brief licenses the phrase "the scientific and operational record intact" for the declaration's transparency point; the page may restate it in plain language (the record stays intact / nothing is lost; the mission reports what it did and what stayed uncertain at the released level). BOUNDARY: recording the record as intact is NOT the calibrated-archive event — row `:207` (30 Jun 2036) stays unnameable as event, date, or promise; no "the archive will be completed", no "final report", no "next update" of record. If "science archive"/"one public record" nouns are reused at all they are 001's released structure/lifecycle context, never this page's event. `operational record` must appear only inside the brief's licensed phrase — no freestanding "operational" as current-state vocabulary (C9 flags).                                                                                                                                                                                                                                                                                                                                                                            |
| C8  | No continuation, dignified close: the end-of-life declaration closes the mission's operational phase; nothing continues after the declared EOL. No revival hints, no unexplained rescue, no melodramatic destruction, no sudden miraculous breakthrough.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `.agents/work/briefs/011-repair-and-end-of-life.md:19-24` (common framing: dignified, technically coherent close; no melodrama/rescue/miracle), `:27` (forbidden: "any claim of mission continuation after the declared EOL; 'revival' hints; unresolved rescue"); `docs/timeline/011-repair-and-end-of-life.md:15-16` (continuity control — never reproduced verbatim)                                                                                                                                                                                                                                                                                                        | The page must read as a close: the campaign ended and the mission is declared at end of life, stated plainly. Do NOT: promise future contact, reactivation, "we never say never", continued listening after the campaign, or rover/relay/platform current-state claims (the fate of the hardware after the declaration is not released — do not say it keeps working, goes silent, or is shut down); carry page-1's "will continue to listen" forward as current state; or add farewell melodrama ("goodbye", "final words", "last look", "farewell, RH-01" tone — the real-world "Farewell, Opportunity" stylings in the sources below are exactly the frame to avoid). "What comes next": the page may end on the declaration and the record's integrity (C7) at the released level; it must NOT name or date page 3's archive/report record, promise a next update, or hint at the shape of a later record (brief `:31`; C7). The step-011 human gate covers this page's final sequence and wording (C12) — the writer drafts text-only, dignified, and unresolved on every reserved item.                                                                                                                                                                                          |
| C9  | Technical vocabulary stays at the released level; NO telemetry, no failure details, no subsystem drama, no step-011 reserved facts (the final-contact cause, late-life mitigation, final failure mode, remaining capability, final message).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Line list at left (all published): comms architecture `008-landing.mdx:30-34`, `004-launch-provider.mdx:39-43`, `009-health-packet-panorama.mdx:22`, `009-egress.mdx:25`; power sentence family `008:27`, `009-p1:22`, `010-one-mars-year:38`, `010-health-review:27`; design frame `001:69-72`, `red-horizon.mdx:42`; operating-appearance stages as "vocabulary, not events" `003:56-60`, `rh-01-pathfinder:117-121`, `011-two-mars-years.mdx:52`; landing-era condition qualifier `009-first-drive:33` family; `docs/SCENARIO.md:144-152, :157-166, :168-171, :211, :279` (private — boundary only); `011-repair-and-end-of-life.md:26-31` (forbidden list)                 | This is the EOL-declaration record, not a failure report and not a health review. Restate released strands only if the recap needs them, with no numbers, no margins, no source, no heater/radioisotope/temperature words, no sol counts, no drive distances, no comms figures, no landing-design facts (ellipse geometry, P0 zone, hazard inventory, AF-* unit identifiers). The landing-era condition qualifier may be restated verbatim only as part of the historical record chain — never as the cause of the close, never "worsened"/"final"/"ended". The private timeline's limit sentence (power, thermal, communications, mechanical wear "or another approved limit ends regular contact") stays out entirely. Do not assert the rover reached an operating stage, faded, or accumulated dust as achieved states. Words like "degraded", "intermittent", "failing", "lost contact", "silent", "went quiet" as claims about the rover are forbidden on this page (C4/C5/C6).                                                                                                                                                                                                                                                                                                  |
| C10 | Imagery: `no new imagery: text-only` — a dignified close; no generation, no reuse required. Exactly one IMAGES card (t_8da8530c) writes `.agents/work/assets/011-end-of-life/assets.md`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `.agents/work/briefs/011-repair-and-end-of-life.md:40` (asset/image decision — `no new imagery: text-only`, "a dignified close; no generation"); visuals card t_8da8530c (same acceptance: manifest exists, `placement: none`, no candidates)                                                                                                                                                                                                                                                                                                                                                                                                                                  | No image surface exists, so no alt/caption can leak. The article declares NO `media` key. No generation: ComfyUI stays stopped, the single 8 GB GPU stays free; the visuals card reports `comfyctl status` only if it ever starts a server (it should not need to). The page-1 reused plate is page 1's asset and must not be re-placed here by default (the brief fixes text-only for this page).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| C11 | Draft contract + integrated SEO: target `website/news/011-end-of-life.mdx`, `publication: draft`, `simulatedDate` unset; writer owns search intent, metadata, headings, internal links and alt-text recommendation (no separate SEO card); metadata must carry no gated fact; dev card t_469c6c98 later commits-and-pushes with message `t_469c6c98: publish 011 end-of-life update` under the standing 2026-09-17 instruction.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Writer card t_2af0afd8 (child of this card); visuals card t_8da8530c; review card t_1c13ab54 (owns the human-gate check and the release decision; assigns/verifies `simulatedDate: 2035-07-21` from `docs/SCENARIO.md:206`); dev card t_469c6c98 (child of the reviewer; explicit commit-and-push authority); `.agents/work/briefs/011-repair-and-end-of-life.md:43-47, :49-55`; standing instruction AGENTS.md (2026-09-17 — dev card is explicit commit-and-push authority, main = automatic production deploy, release decision must exist before the flip is pushed); route scheme `website/src/lib/navigation.ts` (content id = URL segment; file name IS the route gate) | Released link palette for this page: `/news/011-two-mars-years/`, `/news/010-health-review/`, `/news/010-one-mars-year/`, `/news/010-stratigraphy/`, `/news/010-first-sample/`, `/news/009-first-drive/`, `/news/009-health-packet-panorama/`, `/news/009-egress/`, `/news/008-landing/`, `/news/003-vehicle-design/`, `/news/002-payload-selection/`, `/news/001-project-announcement/`, `/news/004-launch-provider/` (relay context), `/news/005-launch/` (if the Ariane non-endorsement paragraph is used), `/wiki/vehicle/rh-01-pathfinder/`, `/wiki/area/asteria-field/`, `/wiki/project/red-horizon/`, `/wiki/vehicle/ariane-64/` (only with the Ariane paragraph), `/#mission` (fiction-disclosure link). Never link working papers or private paths. Metadata carries no `:207` name/date, no "archive"/"final report" event wording, no continuation promise; `linkLabel`/`status`/`summary` stay at the row's own record level. SEO search intent is honest and date-scoped (e.g. a record-page intent around the mission's declared end-of-life on 21 July 2035), never clickbait ("gone forever", "tragic loss", "goodbye").                                                                                                                                               |
| C12 | Downstream chain, human gate, and confidentiality handoff: research (this card, released by the completed 011-two-mars-years container parent t_b409e2c1, 2026-09-19) → writer t_2af0afd8 (draft, `publication: draft`, unset `simulatedDate`) → visuals t_8da8530c (text-only asset manifest) → reviewer t_1c13ab54 (continuity + editorial gate in one pass; assigns/verifies `simulatedDate: 2035-07-21` from `docs/SCENARIO.md:206`; runs the step-011 HUMAN GATE — verifies a recorded human approval scoped to THIS page's final sequence and public wording exists before recording any release decision, and blocks with `needs_input` if missing/insufficient; writes `.agents/work/continuity/011-end-of-life.md` + `.agents/work/reviews/011-end-of-life.md`; records the release decision) → dev t_469c6c98 (commit-and-push under standing 2026-09-17 instruction) → container t_7b6ac959. | Pre-created chain cards t_2af0afd8 → t_8da8530c → t_1c13ab54 → t_469c6c98 → t_7b6ac959 (board state 2026-09-19; children of this card t_acdeb34f); `.agents/work/briefs/011-repair-and-end-of-life.md:33-35` (human gate, "especially `011-end-of-life`") and `:49-55` (acceptance criteria); page-1 chain precedent (research t_08fec1ea → writer t_8e5548f8 → visuals t_b61cdd02 → reviewer t_eda18653 → dev t_3242d709 → container t_b409e2c1); AGENTS.md "Developer role" and "Reviewer-in-chief" commit-and-push records                                                                                                                                                  | HUMAN-GATE FLAG FOR THE WRITER AND REVIEWER GATE: the recorded human approval that satisfied page 1 (on t_eda18653, comment 2026-09-19 21:30, quoting the operator's clarify response "Approve as-is — record approval on the card and unblock"; scope documented in `.agents/work/reviews/011-two-mars-years.md:79-87`) covers page 1's final sequence and public wording and explicitly includes "no EOL declaration" for page 1. It is NOT by itself sufficient for THIS page: page 2's EOL-declaration wording and the human-owned choices (final failure mode, remaining capability, final message, the final-contact treatment — brief `:24`, `docs/SCENARIO.md:211`) were not part of that approval's scope. The reviewer must verify a recorded human approval whose scope covers THIS page's final sequence and public wording (or an explicit extension of the page-1 record) before recording any release decision; if only the page-1 record exists and is not scoped to page 2, the reviewer blocks with `needs_input` rather than recording a release (reviewer card t_1c13ab54 body says the same — "if missing, block with needs_input rather than recording a release"). This research card itself publishes nothing, commits nothing, and makes no release decision. |

## Unresolved facts for the writer (do not invent)

The following are REQUIRED-input gaps for the article; each is marked because the
brief reserves it or the public surface has not released it. The writer drafts
around them; the human story owner supplies them (if at all) at the step-011
human gate, and only then may they appear in public prose:

1. Whether the 30-day listening campaign detected any further signal from the
   rover, and if so when/whether a final contact occurred — reserved at
   `docs/SCENARIO.md:211` ("final-contact cause … reserved"), human-owned at
   brief `:24`. The article must not assert a signal was or was not received and
   must not date or narrate a last contact (C4, C6).
2. The final-contact cause and any late-life mitigation — reserved (`:211`,
   brief `:24`); the private timeline's "power, thermal, communications,
   mechanical wear, or another approved limit ends regular contact" sentence is
   continuity material, never public prose (C9).
3. The final failure mode, remaining capability, and final message — "chosen
   only after reviewing every preceding public fact — and only with human
   approval of the final sequence" (brief `:24`). No failure mode, no
   capability statement beyond the released record chain, no final words
   (C5/C6/C9).
4. The fate of the rover, platform, and relay after the declaration — not
   released; the article states the declaration and the record's integrity, not
   hardware states or post-declaration monitoring (C4/C8).
5. The shape, date, or completion of the calibrated science archive and final
   engineering report — row `:207` (30 Jun 2036) is page 3's record and stays
   unnameable (C7/C8, brief `:31`).

Where the article needs one of these to read naturally, the plain-language
"record" wording (the declaration is official; the last signal is part of the
communications record; the record stays intact) carries the meaning without
inventing the fact (C6/C7).

## Canonical source notes

### Locked scenario source

`docs/SCENARIO.md:206` is the only source for this page's milestone and its
calendar day: `21 July 2035 | Thirty-day listening campaign ends and mission
end-of-life is declared`. The row holds exactly two columns (date and milestone
name), so it licenses the event and its date — the campaign's end and the
end-of-life declaration — not a findings list, failure mode, or technical
detail. The supporting facts live in already-public rows: the landing day `:197`
through the page-1 record `:205` (released by 008 → 011-two-mars-years; see C3),
and the public design frame in `001:69-72` (`docs/SCENARIO.md:209`'s numbers are
public through that frame). The planning notes at `docs/SCENARIO.md:209-211`
remain private canon: `:211` explicitly reserves "the final-contact cause and
any late-life mitigation" for step 011, which is THIS step — pages 2 and 3 of
step 011 decide them with the human story owner (C12); `:210`'s "supported
science operations" phrasing and "supported surface interval" stay out (C4).
Row `:207` (30 Jun 2036, calibrated science archive and final engineering report
completion) is the remaining spoiler boundary and must not be referenced by
name, date, implication, or milestone shape.

### The released predecessor record (page 1 of this step) — the campaign frame

`website/news/011-two-mars-years.mdx` is published (`simulatedDate: 2035-06-21`),
the immediate predecessor. Its released facts this page builds from: two Mars
years completed on 21 June 2035; supported surface operations end; "a 30-day
listening campaign begins as closeout — the team continues to listen for any
further signal from the rover rather than commanding surface work"
(`:20, :44`); the campaign "is closeout — not an extension of surface science,
and no further surface operations are commanded — and marks the transition from
commanding the rover to monitoring it" (`:44`); listening continues "through the
relay architecture the programme has used throughout: a steerable downlink from
the platform, a short-range link to the rover, and a low-rate direct-to-Earth
connection for health reports and commands" (`:46`); the rover's systems "are
monitored at the same level the programme has reported at every milestone since
landing" (`:46`); and the close: "The listening campaign is the mission's next
phase on this record." (`:50`). THIS page is that next phase's closing record:
the campaign ends and EOL is declared. The page-1 record must be recapped
historically where needed; its forward "will continue to listen" sentence must
not be carried into this page as current state (C4/C8).

### Released predecessor chain (the continuity recapitulation)

- `website/news/008-landing.mdx` (published, `simulatedDate: 2031-09-16`):
  landing confirmed; "power is established, communications with Earth through
  the relay architecture are stable, and the rover is alive and responding"
  (`:26-29`); relay framework (`:30-34`).
- `website/news/009-health-packet-panorama.mdx` (published, `2031-09-17`): health
  packet ("the rover's own summary of how its systems are doing", `:22`).
- `website/news/009-egress.mdx` (published, `2031-09-23`): egress; "the platform
  remains in place, serving as the relay station" (`:25`).
- `website/news/009-first-drive.mdx` (published, `2031-09-30`): first controlled
  drive; "limited power, uneven terrain, and the communication delay" (`:27`);
  landing-era condition qualifier (`:33`).
- `website/news/010-first-sample.mdx` (published, `2031-10-31`): first onboard
  sample + mineral analysis; cautious analysis wording (`:33`).
- `website/news/010-stratigraphy.mdx` (published, `2032-04-18`): first
  mineral-stratigraphy campaign; stated limitation (`:29-39`).
- `website/news/010-one-mars-year.mdx` (published, `2033-08-03`): one Mars year
  completed ("about 687 Earth days", `:20`); "RH-01 is operating at Asteria
  Field" (`:44` — superseded as current state by page 1).
- `website/news/010-health-review.mdx` (published, `2034-09-16`): final-year
  health review; "it is not a countdown and does not imply what happens at the
  end of the design frame" (`:45`); "surface operations continue" (`:47` —
  superseded).
- `website/news/011-two-mars-years.mdx` (published, `2035-06-21`): page 1 of
  this step — see the note above.

### Released vocabulary anchors (001, 002, 003, 004, the wiki)

- `website/news/001-project-announcement.mdx` (published): mission purpose
  (`:29-33`); not-life-search (`:42-44`); structure noun "one science archive,
  and one public record" (`:27`); lifecycle-frame noun "final science archive"
  (`:67`); design-life and Mars-year frame (`:66-72`).
- `website/news/002-payload-selection.mdx` (published): not-life-detection
  (`:110-114`); real missions not partners (`:116-120`).
- `website/news/003-vehicle-design.mdx` (published): design brief — "dust,
  uneven terrain, limited power, a communication delay" (`:20-21`); the four
  operating-appearance stages — design stages, "not events that have happened"
  (`:56-60`).
- `website/news/004-launch-provider.mdx` (published): relay architecture
  (`:39-43`).
- `website/wiki/red-horizon.mdx` (published): fiction disclosure (`:14-22`);
  coalition/governance — "reporting technical risk and anomalies candidly"
  (`:26-28`); "one uncrewed lander and one rover … does not search for living
  organisms" (`:16`); lifecycle frame incl. "final science archive" (`:42`).
- `website/wiki/rh-01-pathfinder.mdx` (published): baseline and operating-
  appearance stages (`:108-121`); disclosure (`:142-145`).
- `website/wiki/asteria-field.mdx` (published): caution ceiling (`:101-105`);
  release boundary (`:115-120`).

### Approved brief and downstream card bodies (planning decisions)

The brief (`011-repair-and-end-of-life.md`) and the pre-created chain cards
(writer t_2af0afd8, visuals t_8da8530c, reviewer t_1c13ab54, dev t_469c6c98,
container t_7b6ac959) codify the approved scope for page 2: the thirty-day
listening campaign ends on 21 July 2035; mission end-of-life is declared
transparently with the scientific and operational record intact; the final
contact is distinguished from the official end declaration; dignified,
technically coherent close with no continuation hints, no melodramatic
destruction, and no miraculous breakthrough; the step-011 human gate applies
"especially" to this page; imagery `no new imagery: text-only` (manifest
`.agents/work/assets/011-end-of-life/assets.md`, `placement: none`);
`simulatedDate` reviewer-assigned 2035-07-21 from `docs/SCENARIO.md:206`; dev
commit-and-push message `t_469c6c98: publish 011 end-of-life update` under the
standing 2026-09-17 instruction. This pack treats those card bodies as part of
the approved working plan and flags the gate and the reserved facts for the
writer and reviewer.

## Real-world sources

Used only for bounded plain-language technical context, never as support for
fictional mission occurrence or programme participation. Verified live via
search-index position with this session's keyless web-search tier (HTTP fetch
blocked by this session's security policy — same policy noted in the 006/008/
009/010/011 suites; re-confirmed unchanged this cycle). Each source below is
OPTIONAL for the article; the page's claims are fully grounded in fictional
canon (C2/C4/C5/C6) without them.

1. NASA JPL / NASA Science, "NASA's Opportunity Rover Mission on Mars Comes to
   End",
   https://www.jpl.nasa.gov/news/nasas-opportunity-rover-mission-on-mars-comes-to-end/
   (also https://science.nasa.gov/missions/mer/nasas-opportunity-rover-mission-on-mars-comes-to-end/
   and https://www.nasa.gov/news-release/nasas-record-setting-opportunity-rover-mission-on-mars-comes-to-end/ ;
   verified live at search positions 1-3 on 19 Sep 2026 — the result snippets
   carried the key sentences). Optional plain-language context for the
   distinction a space programme makes between the last signal received from a
   spacecraft and the formal declaration that its mission has ended: NASA's
   announcement separates the rover's last communication (June 10, 2018) and a
   multi-month recovery/listening effort from the decision, announced in
   February 2019, that the mission was at an end. Boundaries: never import the
   real durations (eight-month recovery, fifteen years), the failure cause (dust
   storm, solar power), the deep-space-network/antenna details, the "farewell"
   or "well done" tone (exactly the melodramatic register the brief forbids),
   or Opportunity as an analogue ("like Opportunity"); the fictional 30-day
   campaign duration is canon and unrelated to any real listening window.
2. NASA, "NASA Retires InSight Mars Lander Mission After Years of Science",
   https://www.nasa.gov/missions/insight/nasa-retires-insight-mars-lander-mission-after-years-of-science/
   (verified live at search position 1 on 19 Sep 2026), and NASA, "NASA Prepares
   to Say 'Farewell' to InSight Spacecraft",
   https://www.nasa.gov/missions/insight/nasa-prepares-to-say-farewell-to-insight-spacecraft/
   (position 2 — the "Declaring Mission End" section describes a pre-set
   criterion, a missed-communication threshold, then an end declaration, then a
   listening period). Optional context for how agencies structure an
   end-of-mission declaration as a public record separate from contact events.
   Boundaries: no InSight durations, causes ("dead bus", dust, solar power),
   sol counts, watt-hour figures, or farewell phrasing; no implication that any
   real agency's procedure is Red Horizon's procedure.

Already-released real-region URLs (linked on the public wiki `asteria-field.mdx`
and therefore treated as released externals — reusable by direct link or via the
wiki route): USGS SIM 3209, USGS SIM 3489, NASA Science clays-and-hydrated-
minerals resource, USGS Gazetteer Margaritifera Terra (full URLs listed in
`.agents/work/sources/010-stratigraphy.md` Real-world sources §1-4; unchanged
this cycle). The NASA year-length context sources verified for the 010/011
family (JPL "Mars in a Minute: How Long Is a Year on Mars?";
https://science.nasa.gov/mars/facts/) were re-verified for page 1 and are
available unchanged if this page recaps the design frame. The scenario's own
real-world grounding list (`docs/SCENARIO.md:284-312`) is available for
reference.

## Forbidden fact ledger

Intentionally unsupported for this page; must remain absent from prose, metadata,
SEO fields, links, asset names, alt text, captions, summaries, and commit messages:

- `docs/timeline/` content or paths; `docs/timeline/011-repair-and-end-of-life.md`
  situations and phrases ("attempts a cautious mitigation", "extends useful work
  or safely changes the rover's operating envelope", "restoring it to an
  impossible perfect state", "power, thermal, communications, mechanical wear,
  or another approved limit ends regular contact", "final status", "final
  message") stay out.
- Row `:207` in any form: calibrated science archive and final engineering
  report completion (30 Jun 2036); no milestone name, date, "final archive",
  "final report", "archive completed", "the archive will be released", or any
  promise/shape of a later record (brief `:31` — "any later event beyond these
  rows" is forbidden).
- Step-011 reserved facts (`docs/SCENARIO.md:211`; brief `:24`): the
  final-contact cause, any late-life mitigation, the final failure mode,
  remaining capability, and the final message — never invented; the writer must
  not assert whether the campaign heard a signal, when the last contact was, or
  what it said; no "final transmission", "last words", "goodbye", "farewell",
  "went silent", "fell quiet", "stopped responding", "we never heard from it
  again".
- Mission continuation after the declared EOL; revival hints; unresolved rescue;
  "we will keep listening"; reactivation; "never say never"; any current-state
  claim about the rover, platform, or relay after the declaration (C8).
- Real agencies, launcher operators, facilities, or partners as participants or
  endorsers; documentary framing; turning artwork into a photograph or mission
  record (no imagery on this page, C10 — nothing to mis-frame).
- Milestone-adjacent wrong vocabulary: bare "mission over" as a phrase (the
  only released "mission over" substring is "for the mission overall" in the
  disclosure sentence — do not echo it as a claim), "mission complete" as a
  declaration, "terminated", "KIA/casualty" framing, telemetry/destruction drama.
- Life claims, biology wording, "habitable" as a result; cache/sealed samples,
  ascent vehicle, Earth-return (released negative frames `002:110-114`,
  `001:42-44`).
- New or confirmed science results; "discovery" except in the released negative
  frame (`asteria-field.mdx:101`); any recap that exceeds the released records.
- Invented telemetry or numbers: power figures or source (wattage, percent,
  margin, battery, solar, radioisotope), thermal values, communications figures
  (link budget, data rate, packet count, downtime, antenna, frequency),
  mechanical figures (drive/route distances, traverse counts, wear
  measurements), sol counts, image/scan counts, timestamps.
- Claimed achieved wear: "faded paint", "rubbed wheels", "accumulated dust" as
  an achieved state, "mature operations" as a reached stage (released only as a
  design stage, `003:56-60`); diagnosis or worsening of the landing-era
  condition beyond the released qualifier; any statement that the condition
  caused or explains the close.
- Landing-design facts: ellipse geometry, P0 touchdown zone, science-zone plan,
  hazard inventory, traverse logic, AF-* unit identifiers (`docs/SCENARIO.md:279`;
  `docs/area/AREA.md:18-19`).
- Private planning phrases from `docs/SCENARIO.md:209-211`: "supported surface
  interval", "supported science operations"; "supported" outside the page-1
  milestone phrase recital; freestanding "operational" as current-state
  vocabulary (the brief's "scientific and operational record intact" phrase is
  the only licensed "operational record" token).
- Reference to files, working papers, or private paths; links to anything other
  than released public routes (C11).

## First-public-wording flags (2026-09-19 scan of released `website/news/` + `website/wiki/` MDX)

| Token                                                                                      | Hits in released routes                                                                                                                                                                          | Guidance for the writer                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `end-of-life` / `EOL`                                                                      | 0                                                                                                                                                                                                | Released by THIS record as the milestone's second clause ("mission end-of-life is declared"). Use the row's phrase and "declared at end of life"/"end-of-life declaration". Never "EOL" as an acronym in prose.                          |
| `declared` / `declaration` (mission sense)                                                 | 0                                                                                                                                                                                                | Released by THIS record. The declaration is an official programme record — a Red Horizon statement, not a Mars-surface event. Distinguish it from the last signal (C6).                                                                  |
| `21 July 2035` / `2035-07-21`                                                              | 0 (page 1 released only `21 June 2035`)                                                                                                                                                          | THIS record's date; the only new in-fiction date this page adds. Never `2036`.                                                                                                                                                           |
| `Thirty-day listening campaign` (as a completed, ended event)                              | The campaign-start frame is released (`30-day listening campaign` in `011-two-mars-years:7, :20`; `listening campaign` `:42, :44, :50`)                                                          | The campaign's END is released by THIS record from row `:206`. Restate the start historically if needed; record the end; never count down from a future (there is none on this page), never promise post-campaign listening.             |
| `final contact` / `final transmission` / `last signal` / `last contact`                    | 0                                                                                                                                                                                                | The distinction is licensed (C6) but the EVENT is reserved (`:211`) — write the distinction conceptually ("the last signal, whenever it occurred, is part of the communications record"), never as a dated/narrated event, never denied. |
| `intact`                                                                                   | 0                                                                                                                                                                                                | Released by THIS record inside the brief's licensed phrase "with the scientific and operational record intact" (C7). Use for the record, not the hardware.                                                                               |
| `record` (mission record / public record)                                                  | Released — `001:27` ("one science archive, and one public record"), `011-two-mars-years:26` ("The record marks the design life as achieved"), `red-horizon:14` ("single ongoing project record") | The record theme is safe at the released level; do not turn "record" into an archive deliverable (page 3).                                                                                                                               |
| `archive` / `archival`                                                                     | 3 hits, all released nouns: `001:27` ("one science archive"), `001:67` + `red-horizon:42` ("final science archive" lifecycle frame)                                                              | No archive EVENT on this page (`:207`). The released nouns are context only; prefer to omit entirely.                                                                                                                                    |
| `2036` / `30 June` / `final report`                                                        | 0                                                                                                                                                                                                | Never. Page 3's row.                                                                                                                                                                                                                     |
| `farewell` / `goodbye` / `final message` / `final words` / `last words`                    | 0                                                                                                                                                                                                | Never — the melodramatic register the brief forbids (C8; real-world "Farewell, Opportunity" styling is a negative example).                                                                                                              |
| `monitor` / `monitoring`                                                                   | Released — `011-two-mars-years:44, :46, :50`, `010-health-review:41`                                                                                                                             | Reuse only historically (the campaign monitored; the page-1 record said so). NOT as a post-declaration promise ("we will continue to monitor").                                                                                          |
| `listening`-adjacent comms terms (`relay`, `X-band`, `direct-to-Earth`)                    | Released — `008:28, :31-34`, `004:39-43`, `009-p1:22`, `009-egress:25`, `011-two-mars-years:46`                                                                                                  | May frame what the campaign was (recap) through the released architecture; no link budgets/rates/packets; no "lost contact"; don't assert the relay's post-declaration state.                                                            |
| `supported surface operations end` / `supported`                                           | Released by page 1 (`011-two-mars-years:7, :20, :44` — milestone phrase)                                                                                                                         | Recap historically only, inside the page-1 milestone phrase; never extend ("supported surface interval", "supported science operations" — private).                                                                                      |
| `surface operations`                                                                       | Released (`008`, `003:57`, `010-health-review:47`, page 1)                                                                                                                                       | Historical recap only; the phase ended on page 1's record.                                                                                                                                                                               |
| `operating at Asteria Field`                                                               | Released through `010-stratigraphy:41` / `010-one-mars-year:44` / `010-health-review:47`                                                                                                         | Superseded by page 1 — never current state; historical quotes only.                                                                                                                                                                      |
| `power` / `communications` / `condition`                                                   | Released at recorded levels (`008:27`, `009-p1:22`, `010-one-mars-year:38`, `010-health-review:27, :41`)                                                                                         | Recap only if the record chain needs it; the landing-era condition qualifier is verbatim-family only and is never the cause of the close.                                                                                                |
| `campaign`                                                                                 | Released (listening campaign page 1; also benign "launch campaign", "stratigraphy campaign")                                                                                                     | The listening sense is sequential on this page (ends); no other campaign claims.                                                                                                                                                         |
| `season` / `seasonal`                                                                      | Released (`001:70`, `002:31, :69`, `010-one-mars-year:38`)                                                                                                                                       | Design-frame recap only; no invented weather.                                                                                                                                                                                            |
| `sol` / `sols` / `margin` / `battery` / `heater` / `radiat*` / `telemetry` / `temperature` | 0 content hits                                                                                                                                                                                   | Never — each would be invented-telemetry territory on this page (C9).                                                                                                                                                                    |
| `mission record` / `simulatedDate` label                                                   | Released — date-scoped labels on all released pages; `src/lib/simulated-date.ts` formats month names                                                                                             | The page states 21 July 2035 under the fiction label; it is not a real publication date and must not read as one.                                                                                                                        |

## Asset finding (visual decision)

**`no new imagery: text-only` — a dignified close; no generation, no reuse
required.** The brief (`011-repair-and-end-of-life.md:40`) and the visuals card
t_8da8530c fix this decision; the visuals card writes the manifest
`.agents/work/assets/011-end-of-life/assets.md` with `placement: none` and no
candidates (C10). The article declares NO `media` key, so no alt/caption surface
exists to leak. The page-1 rover plate (`docs/vehicles/pathfinder/canonical.png`,
reused by the 010/011 family under `media: vehicle-references`) is NOT placed on
this page by default — the brief fixes text-only here; if the human later
directs authoritative final media for the close (brief `:24` — "authoritative
final media" is part of the human gate), that is a separate, human-approved
change. This research card requests no generation; ComfyUI stays stopped, the
single 8 GB GPU stays free.

## Validation completed (2026-09-19)

- Read the task card (t_acdeb34f), the pre-created chain cards (writer
  t_2af0afd8, visuals t_8da8530c, reviewer t_1c13ab54, dev t_469c6c98, container
  t_7b6ac959), `AGENTS.md`, `docs/INSTRUCTIONS.md`, the research-and-fact-check,
  mars-release-planning project skills, `.agents/work/briefs/011-repair-and-end-of-life.md`
  (page 2 of 3; page table `:10`; allowed facts `:16`; framing `:19-24`;
  forbidden `:26-31`; human gate `:33-35`; asset decision `:40`; draft contract
  `:43-47`; acceptance `:49-55`), `docs/timeline/011-repair-and-end-of-life.md`
  (continuity control only — not reproduced), `docs/SCENARIO.md` (`:197-211`
  milestone table and planning notes, `:144-152`, `:157-166`, `:168-171`, `:279`),
  the released `website/news/011-two-mars-years.mdx` (page 1 of this step,
  published, `simulatedDate: 2035-06-21`), `010-health-review.mdx`,
  `010-one-mars-year.mdx`, `010-stratigraphy.mdx`, `010-first-sample.mdx`,
  `009-first-drive.mdx`, `009-health-packet-panorama.mdx`, `009-egress.mdx`,
  `008-landing.mdx`, `001-project-announcement.mdx`, and the wiki leaves
  `red-horizon.mdx`, `rh-01-pathfinder.mdx`, `asteria-field.mdx` (citations
  verified against current bytes), the page-1 release records
  `.agents/work/reviews/011-two-mars-years.md` (human-gate record and scope,
  `:79-87`) and `.agents/work/continuity/011-two-mars-years.md` (chronology and
  spoiler-safety rows carried into this pack), and the page-1 source pack
  (`.agents/work/sources/011-two-mars-years.md`) for the established pack
  conventions and the first-public-wording baseline.
- Verified `docs/SCENARIO.md:206` holds the locked row `21 July 2035 | Thirty-day
  listening campaign ends and mission end-of-life is declared`; `:197`-`:205`
  are released public record and `:207` is the remaining spoiler boundary (never
  named, dated, or deduced on this page).
- Verified the calendar arithmetic with GNU date: `date -d '2035-06-21 + 30 days'` = `2035-07-21` — the page-1 released campaign start (21 Jun 2035) plus the
  row's own "Thirty-day listening campaign" name equals this row's date; no
  arithmetic involving `:207` was performed or implied.
- Ran first-public-wording scans of released `website/news/` + `website/wiki/`
  MDX (2026-09-19): `end-of-life|EOL` = 0; `final contact|final transmission|
  last signal|last contact|farewell|goodbye` = 0; `declar*` = 0 (mission sense);
  `intact` = 0; `21 July|30 June|2036|final report` = 0; `archive` = the released
  001/red-horizon nouns only (`001:27`, `001:67`, `red-horizon:42`);
  `2035|listening|closeout|30-day` = the released 011-two-mars-years record only;
  `mission over` = only the benign "for the mission overall" disclosure
  substring; `campaign` = benign released uses (launch campaign, stratigraphy
  campaign, listening campaign); `monitor` = released page-1/health-review uses
  only; `supported` = released page-1 milestone phrase plus benign earlier
  verbs.
- Verified the real-world precedent URLs live at search-index positions (NASA
  Opportunity end-of-mission, positions 1-3; NASA InSight retires position 1 and
  "farewell to InSight"/"Declaring Mission End" position 2; 19 Sep 2026, keyless
  tier — HTTP fetch blocked by session policy, re-confirmed unchanged); recorded
  the import boundaries (no real durations, causes, sol/watt figures, farewell
  tone, or mission names as analogues).
- Verified the serialized chain: research (this card, released by the completed
  011-two-mars-years container parent t_b409e2c1, 2026-09-19) → writer
  t_2af0afd8 → visuals t_8da8530c → reviewer t_1c13ab54 (assigns/verifies
  simulatedDate 2035-07-21 from `docs/SCENARIO.md:206`, owns the step-011
  human-gate check and the release decision) → dev t_469c6c98
  (commit-and-push under standing 2026-09-17 instruction, message
  `t_469c6c98: publish 011 end-of-life update`) → container t_7b6ac959; no
  separate SEO card exists beyond the writer's integrated pass.
- Confirmed no public MDX, public canon file, release record, commit, or push
  was changed by this research task: HEAD == origin/main == 5d32ad9f (the
  page-1 publish), `git log origin/main..HEAD` empty; the working tree differs
  only in pre-existing `.agents/work/**` working papers (project convention;
  sibling cards) and this new source pack — none of which is public.

## Review still outstanding / next owner

- `mars-ai-simulator-writer` (t_2af0afd8, released by this card's completion):
  next owner — draft `website/news/011-end-of-life.mdx` with `publication:
  draft`, `simulatedDate` unset, integrated SEO pass, fiction disclosure,
  date-scoped language, accessible structure. The milestone record for 21 July
  2035: the thirty-day listening campaign ends and mission end-of-life is
  declared, transparently, with the scientific and operational record intact;
  the final contact distinguished from the official end declaration, written
  conceptually with NO invented contact event (C6, Unresolved facts); dignified,
  technically coherent close; no continuation hints, no melodrama, no
  destruction, no miracle. Recap the released record chain through page 1 (C3)
  historically; release the row's own vocabulary (`end-of-life`, `declared`,
  `21 July 2035`, campaign-end) exactly at the milestone's scope (C2/C4/C5);
  treat the page-1 "will continue to listen" sentence as history, never current
  state (C4/C8); no `:207` archive/report reference in any form (C7/C8); no
  reserved step-011 fact invented (final-contact cause, late-life mitigation,
  final failure mode, remaining capability, final message — C6/C9);
  `no media` key (C10). MUST avoid: rows `:207` in any form, "mission over" as
  a phrase, terminal/melodramatic wording, "supported" beyond the page-1
  milestone recital, private timeline phrases, invented telemetry, achieved-wear
  claims, and any promise of post-declaration monitoring or continuation.
- `mars-ai-simulator-visuals` (t_8da8530c, already created): write the manifest
  `.agents/work/assets/011-end-of-life/assets.md` — `no new imagery: text-only`
  (`placement: none`, no candidates, no media key in the article). No
  generation; GPU stays free; report `comfyctl status` only if a server is ever
  started (it should not be).
- `mars-ai-simulator-reviewer` (t_1c13ab54, already created): confirm the event
  mapping (011-end-of-life = row `:206`, 21 Jul 2035), the milestone scope
  (campaign ends; mission end-of-life is declared; record intact; final
  contact/declaration distinction preserved — C2/C4/C5/C6), the first-public-
  wording releases (`end-of-life`, `declared`, `21 July 2035`, campaign-end,
  `intact` — C2/C4/C5/C7 and the flags table), the no-continuation discipline
  (C8), the reserved-facts discipline (no invented contact event, cause,
  failure mode, capability, or final message — C6/C9 and the Unresolved facts
  block), the internal-link list (C11), the metadata/simulatedDate handling
  (`2035-07-21` from `docs/SCENARIO.md:206`), the text-only visual decision
  (C10), and **the step-011 HUMAN GATE with a scope check: verify a recorded
  human approval covering THIS page's final sequence and public wording exists
  (the page-1 recorded approval on t_eda18653 is scoped to page 1 and included
  "no EOL declaration" — it is not by itself sufficient for page 2; a new or
  explicitly extended approval is required), and block with `needs_input` if
  missing (reviewer card t_1c13ab54 body and brief `:33-35`); then write
  `.agents/work/continuity/011-end-of-life.md` and
  `.agents/work/reviews/011-end-of-life.md`, verify the built-page date label
  under the in-fiction label, and record the release decision before any dev
  flip is pushed.**
- `mars-ai-simulator-dev` (t_469c6c98, already created): after the recorded
  release decision on t_1c13ab54 (including the step-011 human approval scoped
  to this page), flip `publication: draft → published` (reviewer-assigned
  `simulatedDate: 2035-07-21` already in frontmatter), validate
  build/guard/tests, commit-and-push under the standing 2026-09-17 instruction
  with message `t_469c6c98: publish 011 end-of-life update`, rebase before push,
  report the commit SHA and push branch/remote, end with clean
  `git status --short` and empty `git log origin/main..HEAD` — including
  publishing finished-but-unpublished leftovers from earlier cards if any exist.
- Container t_7b6ac959 (planner-owned) closes after the dev card finishes;
  page 3 (`011-archive-final-report`, row `:207`) remains a separate serialized
  card later in the step — not this chain's business.
- No publication or deployment is authorised by this pack; the step-011 human
  gate (scoped to this page) must be satisfied before any release decision.

_This source pack is working material. It does not create canon, approve release, or expose
the private timeline._
