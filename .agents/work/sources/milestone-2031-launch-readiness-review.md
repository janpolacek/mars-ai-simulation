# Source pack: milestone-2031-launch-readiness-review

## Metadata

- Slug: `milestone-2031-launch-readiness-review`
- Brief: `.agents/work/briefs/milestone-2031-launch-readiness-review.md`
- Proposed linked release-order step: `005-launch` (pending reviewer confirmation; the review
  is the last pre-launch milestone in the launch sequence, and the separate factual launch
  update for that step is already released)
- Locked milestone source: `docs/SCENARIO.md:192`
- Proposed reviewer-assigned record date: `simulatedDate: 2031-02-11`
- Status: research source pack (refresh 2026-09-19); not a canon record, article, or release decision
- Access date for repository sources: 2026-09-19 (session date)

## Confidentiality rule

The private timeline is continuity material only and is not reproduced here. This pack uses the
locked milestone row in `docs/SCENARIO.md` plus released public records. It deliberately does not
use `docs/timeline/` text as an article source. The 005-launch factual update
(`website/news/005-launch.mdx`) is now publicly released with `simulatedDate: 2031-02-17`, and
the stack-arrival capsule (`website/news/milestone-2031-stack-arrival.mdx`) is publicly released
with `simulatedDate: 2031-01-13`. The capsule under research carries the earlier field record
date of `2031-02-11` and must continue to be written entirely in its pre-launch frame. The event
is proposed as a bounded public possibility; the reviewer-in-chief must confirm its release-order
mapping, wording, and record date before drafting can become publishable.

## Claim inventory

| ID | Proposed material claim                                                                                                                                                                                                                                                                                                                    | Canonical source                                                                                                                                                       | Status / use constraint                                                                                                                                                                                   |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C1 | Red Horizon is a fictional, AI-assisted Mars exploration programme.                                                                                                                                                                                                                                                                        | `website/news/004-launch-provider.mdx:16, :58-61`; `website/wiki/red-horizon.mdx:14-22`                                                                                | Released; required fiction disclosure.                                                                                                                                                                    |
| C2 | Red Horizon One is an uncrewed Mars mission with one selected delivery architecture: Ariane 64 interface, cruise stage, entry/descent/landing platform, and RH-01 Pathfinder. Use only the detail needed to explain the review's context; no new subsystem specifications.                                                                 | `website/news/004-launch-provider.mdx:16-19, :29-35`; `docs/SCENARIO.md:122-127`                                                                                       | Released architecture context (step 004). Keep concise.                                                                                                                                                   |
| C3 | Ariane 64 is the real launcher designation used by the fictional programme's selected architecture; no real agency, launcher operator, or launch facility is a partner.                                                                                                                                                                    | `website/news/004-launch-provider.mdx:23-27, :58-61`; `docs/vehicles/ariane/ariane-64.md:5, :21-28, :35`                                                               | Released by step 004. State non-endorsement; do not name a real provider/operator/facility.                                                                                                               |
| C4 | Between the architecture decision and flight sit integration and readiness work: bringing the elements into one stack, testing the stack and its parts against flight conditions, and closing the reviews that establish the mission is ready to fly.                                                                                      | `website/news/004-launch-provider.mdx:51-56`; `website/news/milestone-2031-stack-arrival.mdx:21-30`                                                                    | Released process context. Do not convert it into a claim that this specific review passed or that launch follows.                                                                                         |
| C5 | The programme reaches a Launch Readiness Review milestone on 11 February 2031.                                                                                                                                                                                                                                                             | ``docs/SCENARIO.md:192`` — locked milestone row: `11 February 2031                                                                                                     | Launch Readiness Review`                                                                                                                                                                                  | Locked scenario fact supplied for this capsule; proposed public release pending reviewer confirmation of the step mapping and wording. |
| C6 | The locked milestone row records the review's name and date only; it does not state an outcome, pass/fail result, authorization, or schedule consequence.                                                                                                                                                                                  | `docs/SCENARIO.md:192` (the row holds exactly two columns: date and milestone name)                                                                                    | Negative claim — the draft must leave the review's outcome unresolved even though the separately released 005 launch update reports a later launch; the capsule is written before that update in fiction. |
| C7 | The launch day itself (17 February 2031) and the launch outcome are now public in the separately released 005 launch update, but this capsule is date-scoped to 2031-02-11 and precedes that update in fiction, so both stay absent from its prose, metadata, links, and SEO fields, and the capsule must not link to `/news/005-launch/`. | ``website/news/005-launch.mdx:6`` (``simulatedDate: 2031-02-17``), ``:17`` (launch text), ``:37-43`` (later status dates); ``docs/SCENARIO.md:193`` (`17 February 2031 | Ariane 64 launch and Earth departure`)                                                                                                                                                                    | Continuity constraint: released in article 005, but withheld from this capsule as chronology discipline — the capsule is written before the launch in fiction. |
| C8 | The article's in-fiction record date should be `2031-02-11`.                                                                                                                                                                                                                                                                               | `docs/SCENARIO.md:173-193`, especially `:192`; `docs/INSTRUCTIONS.md:77-81`                                                                                            | Reviewer-owned exact value; writer must leave it unset and reviewer must record/verify it against the locked row.                                                                                         |

## Canonical source notes

### Locked scenario source

`docs/SCENARIO.md:192` is the only source for the review milestone and its calendar day. It is
private scenario canon, not itself a public route. The row names the review and the day but gives
no outcome; the milestone six days later (`:193`) is the launch date, released through the 005
factual update. The brief therefore keeps the outcome unresolved and bans the launch date
explicitly.

### Released article 004

`website/news/004-launch-provider.mdx` is the public architecture record. It supports the
released architecture context, the fiction/non-endorsement disclosure, the 2031-window schedule
frame with "no launch day or time has been announced" (date-scoped to its 2030-03-11 record
date), and the statement that integration, testing, and readiness reviews sit between the
architecture decision and flight. The new capsule must be date-scoped to 2031-02-11 and must not
repeat article 004's status line as a timeless current claim.

### Released article 005 (new since the previous refresh)

`website/news/005-launch.mdx` was published in this repository's release for step 005
(`simulatedDate: 2031-02-17`; release recorded and pushed via the 005 article graph). It reports
the launch, early checkout, cruise entry, and the 3 March / 20 May 2031 status points. Its
existence changes the continuity frame for this capsule: the launch date and outcome are now
released canon, but the readiness-review capsule is an earlier-dated, pre-launch status update
(2031-02-11) that lands in the archive between the stack-arrival capsule (2031-01-13) and the
launch update (2031-02-17). That is chronologically coherent (listing order follows
`simulatedDate`), but the reviewer must confirm the mapping still holds, and the writer must not
link forward to the launch article or repeat its content from the capsule. The capsule's
forbidden ledger keeps the launch date banned as chronology discipline — not because it is
secret, but because the capsule is written before it in fiction.

### Released capsule milestone-2031-stack-arrival (new since the previous refresh)

`website/news/milestone-2031-stack-arrival.mdx` was published (`simulatedDate: 2031-01-13`) as
the pre-launch capsule one milestone earlier in the same launch sequence. It reports the flight
stack's arrival at the launch campaign site and states that integration, site checks, and
readiness work remain in progress (`:21-30`), with no launch outcome. It is in-fiction earlier
than this capsule, so a link to `/news/milestone-2031-stack-arrival/` is chronologically safe and
aids comprehension ("the stack arrived; integration and readiness work continued; the readiness
review is the milestone under report"). The capsule may reference that released predecessor for
context but must not copy its status lines as current.

### Released launcher dossier

`docs/vehicles/ariane/ariane-64.md:5, :21-28, :35, :90-103` is the internal canonical dossier
behind the released Ariane 64 designation and architecture interface. It separates the fictional
programme interface (payload adapter, injection segment, integration campaign at `:90-103`) from
the real launcher's public record. Gate 004-B (`:5`, `:21`) withholds real facility/operator
names from public surfaces. Do not carry its withheld facility/operator names, the private launch
date (`:18, :101`), exact performance figures, or visual scene instructions into the public
article.

### Public site fiction disclosure

`website/wiki/red-horizon.mdx:14-22` supports the site's established disclosure that Red Horizon
is fictional and that real places, technologies, and sources do not imply real partnership or
endorsement.

## Real-world sources

No real-world source is required for the central event claim: the review is fictional scenario
canon, and the canonical source is the locked scenario row. If the writer adds general technical
context about what a launch-readiness review is, it must be plain, generic process context (a
structured check of mission systems, operations, and open risks before flight) with no invented
programme specifics, or the writer must add a direct source record and keep it separate from
programme facts. The safe first draft should avoid that extra claim class.

Potentially relevant official sources already listed by the scenario, for reviewer-approved context
only:

1. Arianespace, "Ariane 6 User's Manual," Issue 2 Revision 0, March 2021:
   https://www.arianespace.com/wp-content/uploads/2021/03/Mua-6_Issue-2_Revision-0_March-2021.pdf
   (listed at `docs/SCENARIO.md:297-298`). Supports generic launcher-interface context only; not
   the fictional programme's review, schedule, or performance.
2. Arianespace Newsroom, "Arianespace successfully launches 32 Amazon Leo satellites with the
   first Ariane 64":
   https://newsroom.arianespace.com/arianespace-successfully-launches-32-amazon-leo-satellites-with-the-first-ariane-64/?lang=eng
   (listed at `docs/SCENARIO.md:299-300`). Supports real-world Ariane 64 configuration context
   only; must not be used to name a real launch facility or imply Red Horizon participation.

## Forbidden fact ledger

The following are intentionally unsupported for this capsule and must remain absent from article
text, metadata, SEO fields, links, asset names, alt text, captions, and summaries:

- `docs/timeline/` content or paths.
- Review outcome: pass/fail result, launch authorization, certification, safety concurrence,
  waiver, readiness score, named anomaly, corrective action, unresolved risk, or any claim that
  the mission is ready to launch.
- The launch day/date (17 February 2031) and any wording implying how soon launch follows the
  review — including any reference to or link to the released launch article
  `website/news/005-launch.mdx`, which the capsule precedes in fiction.
- Exact review time, countdown, fuelling, pad activity, weather, telemetry, launch window
  execution, launch success, Earth departure, cruise events, anomalies, landing, or surface
  operations.
- Asteria Field and all landing-design or Mars-surface details.
- Real facility/operator/provider/agency/company names and any partnership or endorsement
  implication.
- Unapproved mass, performance, cost, schedule, staffing, test, readiness, or risk numbers.
- Documentary image framing or a control-room/launch-site scene that the approved assets do not
  document.

## Asset finding

The approved step-004 Ariane 64 studio reference at `docs/vehicles/ariane/canonical.png`
represents the launcher silhouette, not this review event, and must not be relabelled as a
readiness-review or launch-site image. The recommended decision is `no new imagery: text-only
capsule` (`.agents/work/briefs/milestone-2031-launch-readiness-review.md:50`). The serialized
IMAGES card for this slug (t_86be9858) already carries exactly that brief and must write
`.agents/work/assets/milestone-2031-launch-readiness-review/assets.md` with the explicit
no-new-imagery decision and placement (`none`); no candidate generation is justified by this
source pack.

## Validation completed (refresh 2026-09-19)

- Read the task brief, `AGENTS.md`, `docs/INSTRUCTIONS.md`, `docs/SCENARIO.md`, the timeline
  index (step 005), the planning brief, and the release-planning / research-and-fact-check
  project skills.
- Verified `docs/SCENARIO.md:192` contains the locked Launch Readiness Review milestone row
  (`11 February 2031 | Launch Readiness Review`) and `:193` the gated launch row
  (`17 February 2031 | Ariane 64 launch and Earth departure`); the milestone table used for
  simulated dates spans `docs/SCENARIO.md:179-207`.
- Verified all article-004 citations (`website/news/004-launch-provider.mdx:16, :20-21, :23-27,
  :29-35, :51-56, :58-61`) against the current file; all line references hold.
- Verified `website/news/005-launch.mdx` is published with `simulatedDate: 2031-02-17` and
  reports the launch, cruise entry, and 3 March / 20 May 2031 status points; recorded its
  continuity consequence in C6/C7, the source note, and the forbidden ledger.
- Verified `website/news/milestone-2031-stack-arrival.mdx` is published with
  `simulatedDate: 2031-01-13` and supports C4 (integration/site checks/readiness work in
  progress) as released predecessor context.
- Verified the fiction disclosure at `website/wiki/red-horizon.mdx:14-22`.
- Verified the Ariane 64 dossier's released designation, the Gate 004-B facility-name withhold
  (`docs/vehicles/ariane/ariane-64.md:5, :21-28, :35, :90-103`).
- Confirmed the serialized board chain for this slug: research (this card) → writer t_6719e91d
  (released on this card's completion) → visuals t_86be9858 (exact text-only IMAGES brief) → the
  reviewer card that follows; no separate SEO card exists beyond the writer's integrated pass.
- Confirmed no public MDX, public canon file, release record, commit, or push was changed by this
  research task.

## Review still outstanding / next owner

- `mars-ai-simulator-reviewer`: confirm that the milestone can be mapped to `005-launch` now that
  the 005 factual update is already released (this capsule backfills the immediately-preceding
  in-fiction date; listing order by `simulatedDate` keeps chronology intact), confirm the
  no-outcome wording boundary (the released 005 update does not license an outcome in this
  pre-launch capsule), confirm the launch-date ban as chronology discipline and the ban on
  referencing the released launch article, confirm the text-only decision, and verify
  `simulatedDate: 2031-02-11` from the locked row.
- `mars-ai-simulator-writer`: next owner; the draft card t_6719e91d waits on this research card
  and is released on its completion. Writer owns the integrated SEO pass and leaves
  `simulatedDate` unset; no separate SEO card. May link to the released predecessor capsule
  (stack arrival) for comprehension; must not link to `/news/005-launch/`.
- No publication or deployment is authorised by this pack.

_This source pack is working material. It does not create canon, approve release, or expose the
private timeline._
