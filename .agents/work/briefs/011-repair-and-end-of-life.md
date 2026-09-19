# Brief: 011 repair and end of life (three timed pages)

Timeline step: `011-repair-and-end-of-life`; dependency: step 010 (operations and discovery). Public-safe goal: the mission's close, recorded on the three dated milestone rows: end of supported surface operations, the end-of-life declaration, and the final archive/report. This is the only step allowed to close the mission; before release the human story owner approves the final sequence, public wording, authoritative final media, and archival strategy (per `docs/timeline/011-repair-and-end-of-life.md`).

## Pages in this brief

| Page slug                  | Locked milestone row                                                                 | SCENARIO line | Proposed `simulatedDate` |
| -------------------------- | ------------------------------------------------------------------------------------ | ------------- | ------------------------ |
| `011-two-mars-years`       | 21 Jun 2035 — Two Mars years completed; supported surface operations end             | :205          | 2035-06-21               |
| `011-end-of-life`          | 21 Jul 2035 — Thirty-day listening campaign ends and mission end-of-life is declared | :206          | 2035-07-21               |
| `011-archive-final-report` | 30 Jun 2036 — Calibrated science archive and final engineering report completed      | :207          | 2036-06-30               |

## Allowed facts (per page)

- **Two Mars years (21 Jun 2035):** the rover completed two Mars years (≈1,374 Earth days supported interval); supported surface operations end; the 30-day listening campaign begins (closeout, not an extension of supported science). Summation of what the mission accomplished at a released level.
- **End of life (21 Jul 2035):** the listening campaign ends; end-of-life is declared transparently with the scientific and operational record intact; final contact distinguished from the official end declaration.
- **Archive (30 Jun 2036):** calibrated science archive and final engineering report completed; retrospective of what RH-01 achieved, what remained uncertain, and what its data means for future missions.

## Common allowed framing

- Red Horizon is a fictional, AI-assisted Mars exploration programme; keep the standard disclosure present and prominent.
- Dignified, technically coherent close: no melodramatic destruction, unexplained rescue, or sudden miraculous breakthrough.
- Distinguish a final contact, an official end declaration, and later archival/wiki updates.
- Final failure mode, remaining capability, and final message are chosen only after reviewing every preceding public fact — and only with human approval of the final sequence.

## Forbidden / spoiler facts

- Humans or partners implying a real agency; documentary framing; invented telemetry, dates, or technical numbers.
- Any claim of mission continuation after the declared EOL; "revival" hints; unresolved rescue.
- Landing-ellipse geometry, hazards, or surface targets beyond the released destination; private timeline text or paths; turning artwork into a photograph or documentary record.
- Any later event beyond these rows (none exist in the table after :207 for mission events).

## Human gate (all pages, especially `011-end-of-life`)

Step 011 requires the human story owner's approval of the final sequence, public wording, authoritative final media, and archival strategy before release. The review card must verify a recorded human approval exists (card comment or review file) before recording the release decision; if it is missing at gate time, the reviewer blocks with `needs_input` rather than recording a release decision. The chain must not silently skip this gate.

## Assets and image decision

- **Two Mars years (21 Jun 2035):** `no new imagery: reuse approved rover plate` (`docs/vehicles/pathfinder/canonical.png`) if the reviewer sanctions; otherwise text-only; manifest `.agents/work/assets/011-two-mars-years/assets.md`.
- **End of life (21 Jul 2035):** `no new imagery: text-only` — a dignified close; no generation; manifest `.agents/work/assets/011-end-of-life/assets.md`.
- **Archive (30 Jun 2036):** `no new imagery: text-only` (final report/archive page); manifest `.agents/work/assets/011-archive-final-report/assets.md`. If the human's archival strategy routes this surface to a wiki update instead of a news article, the reviewer/human records that decision and the chain adapts; the dated event still gets a card.

## Draft contract (each page)

- Target: `website/news/<page-slug>.mdx`, `publication: draft`; `simulatedDate` unset (reviewer assigns per the table above).
- Writer owns the integrated SEO pass; no separate SEO card.
- Final wording and any authoritative media require the human approval recorded above; date-scoped language; accessible structure.

## Acceptance criteria

- Every material claim traces to a canonical source or explicit unresolved note in `.agents/work/sources/<page-slug>.md`.
- Close is dignified and technically coherent; final contact/declaration/archive distinction preserved; no continuation hints.
- Human approval of the final sequence is recorded before the release decision; no skipped gate.
- Visual decision explicit per page (reuse/text-only manifest written).
- Reviewer checks chronology/canon/confidentiality, verifies each exact `simulatedDate` line, and records the release decision before dev validation.
- No public file, canon change, release decision, commit, or push in this plan.
