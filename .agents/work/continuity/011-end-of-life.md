# Continuity verdict: 011-end-of-life

- Card: `t_1c13ab54` — editorial final gate + continuity (one pass), stage
  review
- Article: `website/news/011-end-of-life.mdx`
- Route once published: `/news/011-end-of-life/`
- Timeline step: `011-repair-and-end-of-life` — page 2 of 3 (this card; rows
  `docs/SCENARIO.md:206`; page 1 `011-two-mars-years` released; page 3
  `011-archive-final-report` stays withheld)
- Article SHA-256 at verdict: `e146ecbe6658ef40c38c19302c8411f18241d691866f7055bc7cd87ff023f510`
  (7,041 B, 46 lines — writer draft `f7cc6c2dd0af7afe4ab3c35f1e823987ca3744db88a0f0b6654612f80ea496fa`
  at 7,015 B plus this gate's one frontmatter line `simulatedDate: 2035-07-21`,
  +26 B; `publication: draft` unchanged)
- Review run: 2026-09-19 (session date); probes re-run at verdict time
- Related records: `.agents/work/reviews/011-end-of-life.md` (review table and
  the human-gate hold); asset manifest `.agents/work/assets/011-end-of-life/assets.md`
  (text-only, placement none); source pack `.agents/work/sources/011-end-of-life.md`
  (C1–C12)

## Verdict

**continuity clear** — chronology, canon consistency, plausibility, and the
spoiler boundary hold on the current bytes (this pass re-verifies the same
bytes as pass 1 — article hash unchanged `e146ecbe…`).

Revision history: pass 1 (run 428, 2026-09-19 21:55) recorded this verdict with
the step-011 HUMAN GATE unsatisfied (no recorded human story-owner approval for
this page) and the review record at `blocked`. Pass 2 (this record, run 429,
2026-09-19 ~22:35): the human story-owner approval arrived **on this card**
(worker comment, operator relay of the human's clarify response 2026-09-19:
"Approve — record approval on the card and unblock (archival: archive update as
its own later event, per article)"), scoped to THIS page and covering final
sequence, public wording, authoritative final media, and archival strategy.
The review record `.agents/work/reviews/011-end-of-life.md` now carries final
status `approved` and the release decision is recorded (release decision is the
review record's own sentence; the text/canon dimension of this continuity file
is unaffected).

## Chronology

Every date and order claim in the article matches the released record chain and
the locked milestone table, re-verified at verdict time:

| Event                                                      | Article                                    | Row (SCENARIO)         | Article's own date       |
| ---------------------------------------------------------- | ------------------------------------------ | ---------------------- | ------------------------ |
| Landing at Asteria Field                                   | `website/news/008-landing.mdx` (published) | `:197` 16 Sep 2031     | simulatedDate 2031-09-16 |
| First engineering health packet and panorama               | `009-health-packet-panorama.mdx`           | `:198` 17 Sep 2031     | 2031-09-17               |
| Egress from landing platform                               | `009-egress.mdx` (published)               | `:199` 23 Sep 2031     | 2031-09-23               |
| First controlled drive and mobility assessment             | `009-first-drive.mdx` (published)          | `:200` 30 Sep 2031     | 2031-09-30               |
| First onboard sample + mineral analysis                    | `010-first-sample.mdx` (published)         | `:201` 31 Oct 2031     | 2031-10-31               |
| First mineral-stratigraphy campaign                        | `010-stratigraphy.mdx` (published)         | `:202` 18 Apr 2032     | 2032-04-18               |
| One Mars year completed                                    | `010-one-mars-year.mdx` (published)        | `:203` 3 Aug 2033      | 2033-08-03               |
| Three Earth years / final-year health review               | `010-health-review.mdx` (published)        | `:204` 16 Sep 2034     | 2034-09-16               |
| Two Mars years completed; supported surface operations end | `011-two-mars-years.mdx` (published)       | `:205` 21 Jun 2035     | simulatedDate 2035-06-21 |
| **Listening campaign ends; mission end-of-life declared**  | **this article**                           | **`:206` 21 Jul 2035** | **assigned 2035-07-21**  |

Calendar arithmetic verified with GNU date at research time and re-confirmed:
`2035-06-21 + 30 days = 2035-07-21` — the released page-1 campaign-start record
plus the row's own "Thirty-day listening campaign" name equals this row's date.
The article restates the campaign start historically and records its end; the
"about 687 Earth days" design frame is only recapped through the released
record chain wording, never re-derived.

## Canon consistency

- `docs/SCENARIO.md:206` (re-verified at line 206 of 312): `21 July 2035 |
  Thirty-day listening campaign ends and mission end-of-life is declared` — this
  page's own record. Naming the milestone term and calendar day on its own
  record is the established release convention (rows `:198`–`:205` precedent).
  The row licenses exactly two clauses: campaign end (C4) and the EOL
  declaration (C5); it does not license the final-contact cause, failure mode,
  remaining capability, or final message (`docs/SCENARIO.md:211` stays reserved
  for step 011).
- Both milestone clauses are stated at the row's scope; `end-of-life`,
  `declared`/`declaration` (mission sense), `21 July 2035`, the campaign's end,
  and `intact` are first-public vocabulary released by this record (0 hits in
  prior released MDX, verified 2026-09-19).
- The released relay-architecture birthday (steerable downlink, short-range
  link, low-rate direct-to-Earth; `008:30-34`, `004:39-43`,
  `011-two-mars-years:46`) is restated historically — it frames what the
  campaign was, not any post-declaration state.
- The EOL definition ("reaching end of life means the programme has ended the
  mission — no further operations or campaign are commanded") matches the brief's
  allowed fact and does not assert internal state beyond the row.
- The Ariane 64 disclosure paragraph is byte-verbatim the released page-1
  template (`011-two-mars-years.mdx:56`), including "no real agency, launcher
  operator, or launch facility is a partner … has endorsed or approved it"; the
  `005-launch` link records the departure and nothing more.
- No row `:207` material (calibrated science archive / final engineering report,
  30 Jun 2036) appears by name, date, shape, or implication; "any later update
  to the archive or public record … a separate matter" is the brief-required C6
  third arm of the distinction, phrased without naming or dating page 3.

## Plausibility

The close is dignified and technically coherent: the campaign is recorded as
ended; the declaration is an Earth-side programme record; the record stays
intact at the released level; the distinction between the last signal (part of
the communications record), the official declaration, and later record updates
is drawn conceptually — no contact event is dated, narrated, or denied, and no
hardware state is claimed after the declaration. No continuation promise, no
revival hint, no melodrama, no farewell register (the real-world
"Farewell, Opportunity" frame was explicitly avoided).

## Spoiler safety / confidentiality

- Forbidden-ledger probe over the article bytes (ledger = source pack
  Forbidden fact ledger + first-public-wording flags): **0 hits** — no row
  `:207` shape, no private timeline phrase or path, no reserved step-011 fact
  (cause, mitigation, failure mode, capability, final message), no
  continuation vocabulary, no real facility/operator/agency names (Kourou,
  Arianespace, ArianeGroup, ESA, Europe's Spaceport), no invented telemetry, no
  landing-design facts, no "mission over"/"terminated" vocabulary, no life
  claims.
- The only `archive` token is the released 001 structure noun used inside the
  required C6 distinction (not an archive event).
- `EOL` acronym: 0 hits (forbidden in prose by the flags table).
- Guard surface: `gatedTextMarkers = ['18° 42', '226° 14']` (landing-region
  coordinates) — nothing in this article's bytes matches; `gatedDirectoryNames =
  ['timeline']` — no `docs/timeline` reference. No guard marker or retirement is
  needed for this page's flip; the guarded coordinate markers are unaffected by
  this record's first-public vocabulary.
- `website/dist/` at verdict time contains `/news/011-two-mars-years/index.html`
  (published page 1) and **no** `/news/011-end-of-life/` route — the draft body
  is not public while `publication: draft` (measured, not assumed).

## Release-order conditions

- The dev card `t_469c6c98` is gated on this card and must not flip before the
  recorded release decision exists (AGENTS.md 2026-09-17 standing instruction).
- No other release-order condition arises from this page: the record is
  strictly about row `:206`; row `:207` and page 3's chain remain withheld and
  serialized later.

## Evidence files

- Probe script: `/tmp/gate_011_eol.py` (hash, ledger, git, dist);
- Date-render probe: `/tmp/probe-011-date.mjs` (js-yaml + real
  `src/lib/simulated-date.ts`);
- Board human-gate scan: `/tmp/scan_human_gate.py` + `/tmp/human_gate_scan.txt`
  (all 601 comments and events scanned for step-011 approval records).
