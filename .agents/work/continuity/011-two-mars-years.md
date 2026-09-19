# Continuity verdict: 011-two-mars-years

- Card: `t_eda18653` — editorial final gate + continuity (one pass), stage review
- Article: `website/news/011-two-mars-years.mdx`
- Route once published: `/news/011-two-mars-years/`
- Timeline step: `011-repair-and-end-of-life` — page 1 of 3 (this card; rows
  `docs/SCENARIO.md:205`)
- Article SHA-256 at verdict: `25a7710b805f83942878b4914c5d195e74dbd26fbb01d7096aac60b4786ced26`
  (9,036 B — corrected revision from card `t_00556575`)
- Review run: 2026-09-19 (session date); probes re-run at verdict time pass 2
- Revision history: **Revision 2** supersedes Revision 1 (article hash
  `d408046a0c9e81607e96236957936704546ca83ca7ee60c03f0a0928de28f5b0`, 8,945 B,
  cited by the pass-1 records). Corrective `t_00556575` applied two hunks; the
  pass-2 reverse-reconstruction (removing those two hunks from the current
  bytes) reproduces `d408046a…` byte-for-byte, so all pass-1 rows carry over
  except the two corrected items.

## Verdict

**continuity clear** — chronology, canon consistency, plausibility, and the
spoiler boundary hold on the corrected bytes; the corrective's two hunks
(Revision 1 F1 and C1) are resolved and verified; the step-011 HUMAN GATE is
satisfied by the recorded human approval on the card (2026-09-19). See the
review record `.agents/work/reviews/011-two-mars-years.md` (Revision 2) for the
full table and the release decision.

## Chronology

Carried from pass 1 on byte-identical context; re-verified against published
articles and the milestone table at verdict time. Every date and order claim
matches the released record chain:

| Event                                                          | Article                                      | Row (SCENARIO)         | Article's own date       |
| -------------------------------------------------------------- | -------------------------------------------- | ---------------------- | ------------------------ |
| Landing at Asteria Field                                       | `website/news/008-landing.mdx` (published)   | `:197` 16 Sep 2031     | simulatedDate 2031-09-16 |
| First surface panorama / health packet                         | `009-health-packet-panorama.mdx` (published) | `:198` 17 Sep 2031     | 2031-09-17               |
| Egress from landing platform                                   | `009-egress.mdx` (published)                 | `:199` 23 Sep 2031     | 2031-09-23               |
| First controlled drive                                         | `009-first-drive.mdx` (published)            | `:200` 30 Sep 2031     | 2031-09-30               |
| First onboard sample + mineral analysis                        | `010-first-sample.mdx` (published)           | `:201` 31 Oct 2031     | 2031-10-31               |
| First mineral-stratigraphy campaign                            | `010-stratigraphy.mdx` (published)           | `:202` 18 Apr 2032     | 2032-04-18               |
| One Mars year completed                                        | `010-one-mars-year.mdx` (published)          | `:203` 3 Aug 2033      | 2033-08-03               |
| Three Earth years / final-year health review                   | `010-health-review.mdx` (published)          | `:204` 16 Sep 2034     | 2034-09-16               |
| **Two Mars years completed; supported surface operations end** | **this article**                             | **`:205` 21 Jun 2035** | **assigned 2035-06-21**  |

The article's recapitulation sentence restates the chain in the exact order and
wording of the most recent released template; verified byte-level against the
published bytes. Calendar arithmetic verified independently (pass 1):
`2031-09-16 + 687 d = 2033-08-03`; `2031-09-16 + 1374 d = 2035-06-21`;
`2033-08-03 + 687 d = 2035-06-21`.

## Canon consistency

- The milestone line `docs/SCENARIO.md:205` (`21 June 2035 | Two Mars years
  completed; supported surface operations end`) is this page's own record —
  naming the milestone term and calendar day on its own record is the
  established release convention. Re-verified at verdict time: row at line 205
  of 312, text unchanged.
- The design-life frame the article completes is the published 001 frame
  (verified verbatim in `001-project-announcement.mdx:69-72` and the wiki
  `red-horizon.mdx:42`), restated at released level with the "about 687 Earth
  days" qualifier (C5).
- "Supported surface operations end" is used as the milestone's own phrase:
  3 uses (status line, lead, listening-campaign framing) — the row's own
  vocabulary, released by THIS record (C4). The private planning phrases from
  `docs/SCENARIO.md:209-211` ("supported surface interval", "supported science
  operations") and the bare freestanding "supported operations" eliminated by
  the corrective never appear (0 hits; F1 resolved).
- Released predecessor vocabulary is restated at released level only: relay
  architecture (008:30-34, 004:39-43), the contact-arm sample sequence
  (010-first-sample:25-29), the stratigraphy stated limitation
  (010-stratigraphy:37, 010-one-mars-year:32), the operating-appearance stages
  as "vocabulary, not events" (003:56-60, 010-health-review:37), the Ariane 64
  non-endorsement (010-health-review:51). C1 now links the health-review recap
  to the published update.
- No sentence contradicts a published article; the standing state sentence
  "RH-01 is operating at Asteria Field" remains correctly superseded (the
  article never asserts current operations).

## Plausibility

- Dignified, technically coherent close (carried from pass 1; the corrected
  line 44 keeps the same frame): the record states the milestone, begins a
  30-day listening campaign as closeout, and explicitly frames it as closeout
  rather than an extension of surface science ("no further surface operations
  are commanded"). No melodrama, no rescue, no miraculous recovery, no EOL
  declaration, no final message, no failure-mode detail.
- The listening campaign is framed through the released relay architecture
  (steerable downlink from the platform, short-range rover link, low-rate
  direct-to-Earth connection) — no invented link budgets, antennas, or
  frequencies.
- No new science, no confirmed mineral/water/lake/life claims, no "discovery"
  wording outside the released negative frame.

## Spoiler safety

- Rows `:206` (`21 Jul 2035` listening-campaign end / EOL declaration) and
  `:207` (`30 Jun 2036` archive/report) are never named, dated, or implied. No
  "30 days then we declare EOL" countdown, no campaign-end promise or denial,
  no archive event phrasing.
- Step-011 private timeline (`docs/timeline/011-repair-and-end-of-life.md`)
  situations and phrases are absent from prose, metadata, links, and asset
  strings.
- Forbidden-ledger probe re-run pass 2 (same ledger as the pass-1 probe,
  `/tmp/scan-011.mjs` and `/tmp/rev-011-pass2.py`): **2 substring hits, both
  resolved against published bytes as released-level restatements**, not
  containment failures:
  - `mission over` ⊂ "…for the mission overall" — disclosure sentence, verbatim
    from published `010-first-sample.mdx:47`;
  - `mature operations` — the released operating-appearance stage name inside
    the released "vocabulary for the wear the design provides for, not as
    events that have happened" sentence, verbatim from published
    `010-health-review.mdx:37` (stage names released 003:56-58).
    The pass-1 record's "0 hits" prose was over-broad against its own ledger;
    this revision records the measurement honestly. Every other ledger family:
    0 hits — EOL/end-of-life, final contact/message, last transmission, farewell,
    goodbye, mission over (as a phrase), declared over, supported surface
    interval, supported science, supported operations (bare), Kourou/
    Arianespace/ArianeGroup/ESA/spaceport, telemetry, delta-v, burn time,
    landing ellipse, traverse distance, docs/timeline, travelling-to-mars,
    sol/sols, faded paint, rubbed wheels, accumulated dust, degraded,
    intermittent, lost contact, failing, cannot continue, went quiet, silent,
    radioisotope, heater, radiator, temperature, battery, watt, percent, margin,
    link budget, data rate, antenna, frequency, 2036, 21 July 2035, 30 June
    2036, archive completed, final report/final archive, milestone 011,
    011-end-of-life, 011-archive-final-report. Bare "supported operations"
    outside the milestone phrase: **0 hits** (F1 resolved).
- `scanSourceForGatedReferences()` over the website source: **no offences**
  (pass-2 re-run).
- MEDIA: `media: vehicle-references` resolves to the released plate
  `docs/vehicles/pathfinder/canonical.png` (SHA-256 `8dbb33d5…` re-verified on
  disk at verdict); the `mediaAlt` is the studio-reference string (clean
  baseline configuration, illustrative artwork, no dust/wear/scene claim) —
  same alt the plate already carries publicly. No asset name, alt, or caption
  leaks private timeline material; the article prose carries the milestone,
  not the image.
- Boundary verified in fact: the draft route `/news/011-two-mars-years/` is
  ABSENT from the `dist/` route list (31 routes) — the body is not public while
  `publication: draft`. `HEAD == origin/main == 76bfd0a`, 0 commits ahead; the
  article is untracked; no accidental deployment path exists.

## Evidence files (Revision 2)

- Probe scripts (outside the repository): `/tmp/rev-011-pass2.py` (hash +
  reverse-reconstruction + forbidden ledger), `/tmp/scan-011.mjs`,
  `/tmp/review-011-two-mars-years.mjs`, `/tmp/scan-011-links.mjs`,
  `/tmp/routes-011.mjs`
- Asset manifest: `.agents/work/assets/011-two-mars-years/assets.md`
- Source pack: `.agents/work/sources/011-two-mars-years.md`
- Brief: `.agents/work/briefs/011-repair-and-end-of-life.md`
- Image index: `.agents/work/image-index.md`

## Handoff

- Next owner: `mars-ai-simulator-dev` (card `t_3242d709`) — flip, build, guard,
  preview, push per its card body, after this gate's recorded release decision
  (card `t_eda18653`).
- No unresolved material failure remains; the step-011 HUMAN GATE record stands
  (recorded approval on the review card, 2026-09-19).
