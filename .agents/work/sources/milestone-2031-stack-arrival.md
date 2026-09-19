# Source pack: milestone-2031-stack-arrival

## Metadata

- Slug: `milestone-2031-stack-arrival`
- Brief: `.agents/work/briefs/milestone-2031-stack-arrival.md`
- Proposed linked release-order step: `005-launch` (pending reviewer confirmation; the capsule
  is a pre-launch status update in the launch sequence, and the separate factual launch update
  for that step is already released)
- Locked milestone source: `docs/SCENARIO.md:191`
- Proposed reviewer-assigned record date: `simulatedDate: 2031-01-13`
- Status: planning source pack (refresh 2026-09-19); not a canon record, article, or release decision
- Access date for repository sources: 2026-09-19 (session date)

## Confidentiality rule

The private timeline is continuity material only and is not reproduced here. This pack uses the
locked milestone row in `docs/SCENARIO.md` plus released public records. It deliberately does not
use `docs/timeline/` text as an article source. The 005-launch factual update
(`website/news/005-launch.mdx`) is now publicly released with `simulatedDate: 2031-02-17`; the
capsule under planning carries the earlier field record date of `2031-01-13` and must continue to
be written entirely in its pre-launch frame. The event is proposed as a bounded public
possibility; the reviewer-in-chief must confirm its release-order mapping, wording, and record
date before drafting can become publishable.

## Claim inventory

| ID | Proposed material claim                                                                                                                                                                                                                                                                  | Canonical source                                                                                                                                                       | Status / use constraint                                                                                                                                                                                                                                                            |
| -- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C1 | Red Horizon is a fictional, AI-assisted Mars exploration programme.                                                                                                                                                                                                                      | `website/news/004-launch-provider.mdx:16, :58-61`; `website/wiki/red-horizon.mdx:14-16, :18-22`                                                                        | Released; required fiction disclosure.                                                                                                                                                                                                                                             |
| C2 | Red Horizon One is an uncrewed mission whose flight stack travels together: Ariane 64 interface, cruise stage, entry/descent/landing platform, and RH-01 Pathfinder, leaving Earth on one launch. Use only the detail needed to explain "flight stack"; no new subsystem specifications. | `website/news/004-launch-provider.mdx:16-19, :29-35, :49`; `docs/SCENARIO.md:122-127`                                                                                  | Released architecture context (step 004). Keep concise.                                                                                                                                                                                                                            |
| C3 | Ariane 64 is the real launcher designation used by the fictional programme's selected architecture; no real agency, launcher operator, or launch facility is a partner.                                                                                                                  | `website/news/004-launch-provider.mdx:23-27, :58-61`; `docs/vehicles/ariane/ariane-64.md:21-28`                                                                        | Released by step 004. State non-endorsement; do not name a real provider/operator/facility.                                                                                                                                                                                        |
| C4 | The flight stack arrives at the launch campaign site on 13 January 2031.                                                                                                                                                                                                                 | ``docs/SCENARIO.md:191`` — locked milestone row: `13 January 2031                                                                                                      | Flight stack arrives at Kourou`                                                                                                                                                                                                                                                    | Locked scenario fact supplied for this capsule; proposed public release pending reviewer confirmation of the step mapping and wording. Public copy should say `launch campaign site` by default, not the facility name. |
| C5 | Arrival begins a ground-campaign phase in which integration, site checks, and readiness work remain.                                                                                                                                                                                     | `website/news/004-launch-provider.mdx:51-56`; `docs/vehicles/ariane/ariane-64.md:92-103` (esp. :99)                                                                    | Released process context; phrase as process, not as a claim that a named test, review, or readiness gate passed. Article 004's own "integration and readiness work remain" line is date-scoped to its 2030-03-11 record date and must not be repeated as a timeless current claim. |
| C6 | The locked milestone row records the arrival event and its date only; it does not state integration status, test outcomes, review passage, or schedule consequence.                                                                                                                      | `docs/SCENARIO.md:191` (the row holds exactly two columns: date and milestone name)                                                                                    | Negative claim — the draft must leave what happens after arrival (including launch readiness and the launch itself) unresolved.                                                                                                                                                    |
| C7 | The launch update for step 005 is separately released in fiction for 17 February 2031 and reports launch, cruise entry, and later status dates. This capsule is date-scoped to 2031-01-13, precedes that release in fiction, and must not link to, quote, or assume the launch article.  | ``website/news/005-launch.mdx:6`` (``simulatedDate: 2031-02-17``), ``:17`` (launch text), ``:37-43`` (later status dates); ``docs/SCENARIO.md:193`` (`17 February 2031 | Ariane 64 launch and Earth departure`)                                                                                                                                                                                                                                             | Continuity constraint: the launch date and outcome are now public in article 005, but the capsule is written before them in fiction, so they stay absent from its prose, metadata, links, and SEO fields. |
| C8 | The article's in-fiction record date should be `2031-01-13`.                                                                                                                                                                                                                             | `docs/SCENARIO.md:179-207` (milestone table), especially `:191`; `docs/INSTRUCTIONS.md:77-81`                                                                          | Reviewer-owned exact value; writer must leave it unset and reviewer must record/verify it against the locked row.                                                                                                                                                                  |

## Canonical source notes

### Locked scenario source

`docs/SCENARIO.md:191` is the only source for the event and its calendar day. It is
private scenario canon, not itself a public route. The source row names Kourou, but the released
step-004 record and the Ariane 64 dossier (Gate 004-B standing rule, `docs/vehicles/ariane/ariane-64.md:1-5`)
explicitly withhold real facility/operator names from public surfaces. The brief therefore uses
the safe public abstraction `launch campaign site` and escalates any more specific wording to the
reviewer. The milestone table used for simulated dates spans `docs/SCENARIO.md:179-207`; row
`:191` is the arrival, `:192` the Launch Readiness Review (a separate milestone, gated), and
`:193` the launch day (released only through the 005 factual update).

### Released article 004

`website/news/004-launch-provider.mdx` is the public architecture record. It supports the released
architecture context (C2), the fiction/non-endorsement disclosure (C1, C3), the statement that
integration, testing, and readiness reviews sit between the architecture decision and flight (C5),
and the date-scoped line that no launch day or time had been announced at its 2030-03-11 record
date (`:20-21`). The new capsule must be date-scoped to 2031-01-13 and must not repeat article
004's status lines as timeless current claims.

### Released article 005 (new since the previous refresh)

`website/news/005-launch.mdx` was published in this repository's release for step 005
(`simulatedDate: 2031-02-17`; release recorded and pushed via the 005 article graph). It reports
the launch, early checkout, cruise entry, and the 3 March / 20 May 2031 status points. Its
existence changes the continuity frame for this capsule: the stack-arrival capsule is an
earlier-dated, pre-launch status update that arrives in the archive after the launch update. That
is chronologically coherent (listing order follows `simulatedDate`, so the capsule sorts below the
launch update), but the reviewer must confirm the mapping still holds, and the writer must not
link forward to the launch article or repeat its content from the capsule. The capsule's forbidden
ledger keeps the launch date banned as chronology discipline — not because it is secret, but
because the capsule is written before it in fiction.

### Released launcher dossier

`docs/vehicles/ariane/ariane-64.md:21-28, :37-50, :90-103` is the internal canonical dossier
behind the released Ariane 64 designation and architecture interface. It separates the fictional
programme interface (payload adapter, injection segment, integration campaign at `:92-103`) from
the real launcher's public record. Do not carry its withheld facility/operator names, private
launch date (`:18, :101`), exact performance figures, or visual scene instructions into the
public article.

### Public site fiction disclosure

`website/wiki/red-horizon.mdx:14-16, :18-22` supports the site's established disclosure that Red
Horizon is fictional and that real places, technologies, and sources do not imply real partnership
or endorsement.

## Real-world sources

No real-world source is required for the central event claim: the arrival is fictional scenario
canon, and the canonical source is the locked scenario row. If the writer adds general technical
context about Ariane 6 or launch-site operations, the writer must add a direct source record and
keep it separate from programme facts. The safe first draft should avoid that extra claim class.

Potentially relevant official sources already listed by the scenario, for reviewer-approved context
only:

1. Arianespace, "Ariane 6 User's Manual," Issue 2 Revision 0, March 2021:
   https://www.arianespace.com/wp-content/uploads/2021/03/Mua-6_Issue-2_Revision-0_March-2021.pdf
   (listed at `docs/SCENARIO.md:297-298`). Supports generic launcher-interface context only; not
   the fictional programme's arrival, schedule, or performance.
2. Arianespace Newsroom, "Arianespace successfully launches 32 Amazon Leo satellites with the
   first Ariane 64":
   https://newsroom.arianespace.com/arianespace-successfully-launches-32-amazon-leo-satellites-with-the-first-ariane-64/?lang=eng
   (listed at `docs/SCENARIO.md:299-300`). Supports real-world Ariane 64 configuration context only;
   must not be used to name a real launch facility or imply Red Horizon participation.
3. European Space Agency, "Ariane 6: the launch zone":
   https://www.esa.int/Enabling_Support/Space_Transportation/Ariane/Ariane_6_the_launch_zone
   (recorded at `.agents/work/sources/004-launch-provider.md:172-173`). Real launch-site framing
   context (Europe's Spaceport, ELA-4); withheld from public copy by Gate 004-B and not usable to
   name a real facility or imply Red Horizon participation without a current cleared wording record.

## Forbidden fact ledger

The following are intentionally unsupported for this capsule and must remain absent from article
text, metadata, SEO fields, links, asset names, alt text, captions, and summaries:

- `docs/timeline/` content or paths.
- The launch day/date (17 February 2031), launch time, countdown, Launch Readiness Review,
  telemetry, weather, fuelling, pad activity, launch success, Earth departure, cruise events,
  anomalies, landing, or surface operations — including any reference to or link to the released
  launch article `website/news/005-launch.mdx`, which the capsule precedes in fiction.
- Asteria Field and all landing-design or Mars-surface details.
- Real facility/operator/provider/agency/company names and any partnership or endorsement
  implication; use `launch campaign site`.
- Unapproved mass, performance, cost, or readiness numbers.
- Documentary image framing or an arrival scene that the approved assets do not document.

## Asset finding

The approved step-004 Ariane 64 studio reference at `docs/vehicles/ariane/canonical.png`
represents the launcher silhouette, not this arrival event, and must not be relabelled as a
stack-arrival or launch-site image. The recommended decision is `no new imagery: text-only
capsule` (`.agents/work/briefs/milestone-2031-stack-arrival.md:45`). If a downstream graph still
creates an IMAGES card, it must write `.agents/work/assets/milestone-2031-stack-arrival/assets.md`
with the explicit no-new-imagery decision and placement (`none`); no candidate generation is
justified by this source pack.

## Validation completed (refresh 2026-09-19)

- Read the task brief, `AGENTS.md`, `docs/INSTRUCTIONS.md`, `docs/SCENARIO.md`, the timeline
  index, and the release-planning / research-and-fact-check project skills.
- Verified `docs/SCENARIO.md:191` contains the locked arrival milestone: `13 January 2031 |
  Flight stack arrives at Kourou`; the milestone table used for simulated dates spans
  `docs/SCENARIO.md:179-207`.
- Re-verified all article-004 citations (`website/news/004-launch-provider.mdx:16-19, :20-21,
  :23-27, :29-35, :49, :51-56, :58-61`) against the current file; all line references hold.
- Verified `website/news/005-launch.mdx` is published with `simulatedDate: 2031-02-17` and
  reports the launch, cruise entry, and 3 March / 20 May 2031 status points (release recorded and
  pushed via the 005 article graph); recorded its continuity consequence in C7 and the forbidden
  ledger.
- Verified the fiction disclosure at `website/wiki/red-horizon.mdx:14-16, :18-22`.
- Verified the Ariane 64 dossier's released designation, the Gate 004-B facility-name withhold
  (`docs/vehicles/ariane/ariane-64.md:1-5, :21-28, :90-103`), and the real-provider source
  records at `docs/SCENARIO.md:297-300` and `.agents/work/sources/004-launch-provider.md:172-173`.
- Confirmed no public MDX, public canon file, release record, commit, or push was changed by this
  research task.

## Review still outstanding / next owner

- `mars-ai-simulator-reviewer`: confirm that the milestone can be mapped to `005-launch` now that
  the 005 factual update is already released (the capsule backfills an earlier in-fiction date after
  the launch update is public; listing order by `simulatedDate` keeps chronology intact), confirm
  the public abstraction `launch campaign site`, confirm the pre-launch frame and the ban on
  referencing the released launch article, and verify `simulatedDate: 2031-01-13` from the locked
  row.
- `mars-ai-simulator-writer`: next owner after this card; the draft card `t_80456508` already
  waits on this research card and is released on its completion. Writer owns the integrated SEO
  pass and leaves `simulatedDate` unset; no separate SEO card.
- No publication or deployment is authorised by this pack.

_This source pack is working material. It does not create canon, approve release, or expose the
private timeline._
