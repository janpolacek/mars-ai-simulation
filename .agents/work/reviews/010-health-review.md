# Editorial review: 010-health-review

- Card: `t_c1ebe852` — editorial final gate + continuity (one pass), stage review
- Article: `website/news/010-health-review.mdx`
- Route once published: `/news/010-health-review/`
- Timeline step: `010-operations-and-discovery` — page 4 of 4
- Article SHA-256 at verdict: `ec4c38ea017be4f50cf0e30045a184a9b41d03ebb7cc0e99c73709b6128165f2`
  (7,033 B)
- Review table run: 2026-09-19 (session date); probes at verdict time (UTC 2026-09-19 ~20:38Z)
- Continuity verdict: `.agents/work/continuity/010-health-review.md` — `continuity clear`

## Revision history

| Rev | Date (session) | Article hash at pass                                                         | Status              | What moved                                                                                                                                                                                                                                               |
| --- | -------------- | ---------------------------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | 2026-09-19     | `f699984f47780eb454cd1cf5f790d9744d8225aa5b7b196466787997ffc7e52e` (6,926 B) | `changes_requested` | First gate. F1 (season misdefinition `:28`), F2 (barred tokens `telemetry`/`temperatures`/`heater`/`thermal-control` at old `:20`,`:28`), C1 (`symptom`, old `:40`). Corrective t_402342fd (writer) linked as parent; this card blocked kind=dependency. |
| 2   | 2026-09-19     | `ec4c38ea017be4f50cf0e30045a184a9b41d03ebb7cc0e99c73709b6128165f2` (7,033 B) | `approved`          | Re-gate after corrective t_402342fd completed. F1/F2/C1 verified resolved on the corrected bytes (hash matches the corrective's report; fragment evidence below). Release decision GRANTED on this card.                                                 |

Superseded hash: `f699984f…` (pass 1). The pass-1 bytes are unrecoverable (the draft was
untracked, never committed, no dangling git blob of matching size, no `/tmp` copy — see
Corrective verification), so this re-gate re-judges the three corrected regions plus the
carried rows; the reverse-application limitation is stated under Corrective verification.

## Final status

**`approved`** — both material findings (F1, F2) and the minor item (C1) resolved on the
corrected bytes; no material failure remains. Release decision GRANTED (see Release
decision).

## Simulated record date

- **Value:** `simulatedDate: 2034-09-16` (in the article frontmatter; assigned by this gate
  in pass 1 and unchanged by the corrective — verified on the corrected bytes).
- **Milestone line:** `docs/SCENARIO.md:204` — `16 September 2034 | Three Earth years after
  landing; final-year health review`.
- **Checks:** the date is this step's own row (the milestone the page releases), so it
  implies no unreleased event; it cannot be read as a launch/landing or other withheld
  mission date (landing rows are released; no withheld event falls on 16 Sep 2034); it
  contradicts no published sentence (003's negative launch/landing-site claims are
  record-date-scoped to 2029-07-13 and were closed by the 001–003 record-date card); the
  news chain stays in timeline order (… 010-one-mars-year 2033-08-03 → this page
  2034-09-16, and every later milestone row `:205`-`:207` is later still).
- **Surface:** the pipeline's own module renders `Simulated record date · 16 September 2034`
  under the in-fiction label (`src/lib/simulated-date.ts`, probe-verified at verdict time:
  js-yaml parses the frontmatter Date, `toCalendarDate()` normalises to `2034-09-16`,
  `simulatedDateText()` produces the line); `src/lib/seo.ts` carries no `simulatedDate`
  reference — nothing machine-readable is derived. The dev card `t_8cafd2f9` verifies the
  built page after the flip.

## Corrective verification (how pass 2 proves F1/F2/C1 are closed)

- Current hash `ec4c38ea…` (7,033 B) **matches** the corrective card's reported hash
  exactly; the writer's stated change set was `website/news/010-health-review.mdx` only
  (`git status` shows no other file from the corrective).
- **Fragment evidence (content level):** every pass-1 record fragment is absent from the
  corrected bytes — `"none of them introduces new telemetry or figures"`,
  `"does not introduce temperatures, heater mechanisms, or thermal-control details for the
  rover"`, `"a season is one full orbit of Mars around the Sun"`, `"the health review adds
  no new symptoms"` — verified 0 hits. The corrected sentences restate released canon only
  (see continuity record Findings rows).
- **Delta accounting:** 6,926 B → 7,033 B = **+107 B**. The two rewritten sentence tails
  account for roughly +80 (line 21) and +116 (line 29 parenthetical) with the C1 region
  netting negative — consistent with exactly the three claimed region changes plus
  line-wrap/paragraph adjustments; no region outside the three shows any pass-1 quote
  surviving or any new quote appearing.
- **Limitation stated:** byte-exact reverse-application to the pass-1 hash was **not
  possible** — the pass-1 file was untracked and uncommitted, no dangling git blob in the
  6,000–7,200 B window matches `f699984f…` (git fsck, 111 unreachable blobs probed), and no
  copy exists under `/tmp`, `~/.hermes`, or the obsidian vault. The re-gate therefore
  carries pass-1 rows on region-diff evidence (all pass-1 quoted prose reads identical in
  the corrected file) rather than on an exact reconstruction; no third change is
  observable or plausible from the evidence.

## Review table

| Area                                  | Result | Notes and evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Citations / claim grounding           | PASS   | Every material claim traces to a locked SCENARIO row or a published article (chain 008 → 009-p1 → 009-egress → 009-first-drive → 010-first-sample → 010-stratigraphy → 010-one-mars-year; design frame 001:69-72; relay 004:39-43; stages 003:56-60 / rh-01-pathfinder:117-121). Source pack C1–C12 verified against current bytes. F1 (the only claim-precision item) is resolved: the corrected parenthetical states `010-one-mars-year.mdx:20` verbatim ("one Mars year is one full orbit of Mars around the Sun") and adds no new factual claim (line 29's status sentences are the source pack's own pre-approved C8 sentence family; line 21's tail is a scope-restating meta sentence, no figures).                                                                                                                                                                                                                                                                                                                                |
| Links                                 | PASS   | All 12 internal links are released public routes (`/#mission`, `/news/008-landing/`, `/news/009-egress/`, `/news/010-first-sample/`, `/news/010-stratigraphy/`, `/news/010-one-mars-year/`, `/news/003-vehicle-design/`, `/news/002-payload-selection/`, `/news/005-launch/`, `/wiki/vehicle/rh-01-pathfinder/`, `/wiki/area/asteria-field/`, `/wiki/project/red-horizon/`). No working-paper or private path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Coherence                             | PASS   | Record-chain recap mirrors 010-one-mars-year:18; sections follow the brief's four-subsystem scope (power, thermal, communications, mechanical wear) plus condition, design frame, disclosure; no contradiction with any published sentence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Voice / grammar                       | PASS   | Red Horizon voice maintained: informed, candid, modest, specific; date-scoped; no marketing language; disclosures present and prominent (top-of-page sentence + Ariane paragraph + closing italic + real-world boundary notes). Minor redundancy in the corrected line 29 ("the record now spans a full Martian year of seasons" appears twice) is stylistic, not material, and stays within the released seasons vocabulary.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Image placement / captions / alt text | PASS   | No `media` key, no figure, no card art, no OG image (text-only per brief `:40` and manifest `assets.md`); `newsMediaIssues()` returns `[]` (probe) — no visual surface to leak; SEO alt-text recommendation correctly N/A.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Metadata / schema                     | PASS   | Frontmatter validates against `src/content.config.ts` (probe: js-yaml parses; keys = title, category, status, publication, simulatedDate, linkLabel, order, accent, summary — all declared fields, no undeclared key); `publication: draft` preserved by the corrective; `simulatedDate: 2034-09-16` preserved; no `media*` key preserved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Published surface                     | PASS   | Probe (read-only, no build) shows the draft route `/news/010-health-review/` absent from `dist/` route list (30 routes listed) — the body is not public. `scanSourceForGatedReferences()` reports NO offences. HEAD == origin/main == `88432aa`; `git log origin/main..HEAD` empty; the article is staged-new but uncommitted (`publication: draft`); no accidental deployment path. Date label verified via the real module (`Simulated record date · 16 September 2034`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Spoiler / confidentiality             | PASS   | Re-scanned on the corrected bytes: 0 hits for `telemetry`, `temperature`, `heater`, `thermal[- ]control`, `symptom`, `sol`, `margin`, `battery`, `radioisotope`, `watt/percent/kW`, `supported operations`, `docs/timeline`, private timeline phrases, `2035`/`2036`, `21 June`, `listening`, `end-of-life/terminal/EOL`, `degraded/intermittent/lost/failing`, `worsen`, `second Mars year` (as event), `ascent vehicle`, `Earth-return`, `habitable`, `confirmed clay/sulfate`, ellipse/geometry, `AF-*`, `delta-v`. "thermal" appears only as the four-subsystem scope noun, the `## Thermal` heading, and "thermal review" — the milestone's own release at review-name level (brief `:19`, source pack C8); the source-pack bar is "never 'thermal control' for RH-01, no heater/radioisotope/temperature words", all zero. "diagnosis"/"traverses" appear only in the released qualifier family verbatim (`009-first-drive:33`, `010-one-mars-year:40`). No row `:205+`, no step-011 material, no EOL declaration or failure drama. |
| SEO / metadata quality                | PASS   | Search intent honest and descriptive; title 43 chars (≤60); summary 150 chars (≤155); headings scannable; internal links reinforce the record chain; no `datePublished`/`lastmod` derivation (seo.ts carries no simulatedDate reference).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Accessibility                         | PASS   | Semantic headings, short paragraphs, plain terminology, no text-in-image, no images needing alt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Findings

| ID | Location                  | Severity                        | Finding                                                                                                                                                 | Resolution (pass 2)                                                                                                                                                                                                                                                                                                                                                                                         |
| -- | ------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| F1 | line 29 (old 28)          | material (canon + plausibility) | "a season is one full orbit of Mars around the Sun" misstated the released definition (one Mars _year_ is one full orbit — `010-one-mars-year.mdx:20`). | **RESOLVED.** Corrected parenthetical restates the released vocabulary: "the record spans a full Martian year of seasons, one Mars year is one full orbit of Mars around the Sun, and the mission's design frame already promised at least one full seasonal cycle". No sentence equates a season with a full orbit (scan: only "one Mars year is one full orbit…" present, once, matching `:20` verbatim). |
| F2 | lines 21, 29 (old 20, 28) | material (token bar)            | First-public hits of source-pack barred tokens: `telemetry`, `temperatures`, `heater`, `thermal-control`.                                               | **RESOLVED.** Those tokens are 0 hits on the corrected bytes (cleaned scan, context-aware; `packet` appears only inside the released "engineering health packet" — `009-p1:22`; the "thermal" occurrences are the subsystem-name release per C8/brief `:19`). The sentences now keep the meaning (four subsystems at the released reporting level, no new figures or details).                              |
| C1 | line 41 (old 40)          | minor wording                   | "the health review adds no new symptoms" introduced the 0-hit token `symptom`.                                                                          | **RESOLVED.** `symptom` is 0 hits. The condition paragraph ends at the released qualifier family ("…the mission reports what is observable and continues to assess. The condition remains consistent with the released qualifier from the first drive update, and the mission continues to assess.") — the exact ending the pass-1 gate suggested.                                                          |

Evidence paths: article `.agents/work/reviews/../news/010-health-review.mdx` hashed
`ec4c38ea…`; probe script `/tmp/review-010-health-review.mjs` (read-only, real pipeline
modules); corrective verification `/tmp/verify-010-corrective.py`, `/tmp/scan-010-cleaned.py`,
`/tmp/find-010-blobs.py`; continuity record
`.agents/work/continuity/010-health-review.md`; source pack
`.agents/work/sources/010-health-review.md`; asset manifest
`.agents/work/assets/010-health-review/assets.md`.

## Release decision

**GRANTED** (recorded on card t_c1ebe852, 2026-09-19, pass 2).

- **Exact public scope:** one article `website/news/010-health-review.mdx` —
  `publication: published`, `simulatedDate: 2034-09-16` from `docs/SCENARIO.md:204`;
  text-only (no `media` key; no placement; no OG image). The article releases this
  record's own event — three Earth years after landing, final-year health review — and
  the first-public rover-**thermal** subsystem name at review-name level only (brief `:19`,
  source pack C8); no row `:205+` name/date/shape, no step-011 reference, no EOL
  declaration, no failure drama, degradation at the released observable/design-stage
  level consistent with later mitigation.
- **Evidence:** corrected article hash `ec4c38ea017be4f50cf0e30045a184a9b41d03ebb7cc0e99c73709b6128165f2`
  at the moment of this decision (dev's flip will change the file from `draft` to
  `published` and therefore its hash; the release decision covers the corrected body
  bytes, which the dev must carry unchanged apart from the flip); record date applied as
  `simulatedDate: 2034-09-16`; continuity `clear`; probe: route absent from `dist/`,
  guards clean, `publication: draft` until the dev flips.
- **Conditions:** the dev card `t_8cafd2f9` flips `publication` to `published` (keeping
  `simulatedDate: 2034-09-16` and the body bytes), validates build/guard/tests, commits
  and pushes with message `t_8cafd2f9: publish 010 health-review update` under the
  standing 2026-09-17 instruction, rebases before push, and reports SHA and push result.
  No guard-marker retirement is needed (`scanSourceForGatedReferences()` clean;
  `gatedTextMarkers` carries none of this article's released strings). Order-sensitive
  standing condition (inherited): the record-date-scoped negatives and the "final-year"
  adjective must stay true on 2034-09-16; satisfied by the assigned date.
- **Public/canon impact:** no new canon beyond row `:204` and released step-009/010
  context; the first-public items are exactly the milestone's own terms plus the
  rover-thermal subsystem name at review level.

## Confidentiality

The reviewed bytes name no `docs/timeline/` path, no later-step row, no landing-design
geometry, no withheld telemetry value, no private power/thermal fact, and no real
operator/facility beyond the Ariane 64 non-endorsement disclosure and the NASA
plain-language-context disclosure (both released-pattern; the latter says explicitly the
real-world sources "do not support any fictional mission event"). Token re-scan on the
corrected bytes: ledger families all 0 hits (see Spoiler row). Rendered surface verified;
route absent from `dist/`; HEAD == origin/main == `88432aa`; `git log origin/main..HEAD`
empty at verdict time.

_Review record. Verdict and status recorded 2026-09-19 by mars-ai-simulator-reviewer;
revision 2 supersedes revision 1 (hash `f699984f…`, status `changes_requested`). Not a
canon record. The release decision is the sentence in this record and on the card._
