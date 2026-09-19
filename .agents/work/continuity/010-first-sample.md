# Continuity: 010-first-sample

Card: t_ae604f8e (Editorial final gate: 010-first-sample)
Reviewer: mars-ai-simulator-reviewer
Date: 2026-09-19 (session), run 386
Timeline step: 010-operations-and-discovery — page 1 of 4 (`010-first-sample`)

## Inputs (re-verified immediately before this verdict)

| Input            | Path                                                                                                                                                                                                                          | Hash / status                                                                                                                                                                                                                              |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Article          | `website/news/010-first-sample.mdx`                                                                                                                                                                                           | sha256 `2def4b8698995951c496e35af2b5ad652bd5204094e4b048533841ce1f1ac73f`, 6,995 B, 53 lines; `publication: draft`, `simulatedDate: 2031-10-31` (reviewer-applied; +26 B over the writer's 6,969 B = the single inserted frontmatter line) |
| Scenario         | `docs/SCENARIO.md`                                                                                                                                                                                                            | sha256 `99206373bbb6140b…`; row `:201` = `31 October 2031 \| First onboard sample collection and mineral analysis`; sample contract `:168-171`                                                                                             |
| Timeline step    | `docs/timeline/010-operations-and-discovery.md`                                                                                                                                                                               | sha256 `9b970764769f0bc3…`; continuity control only; discovery staging (observation → corroboration → cautious interpretation → stated limitation), no life claim, operational degradation only at later-mitigable level                   |
| Brief            | `.agents/work/briefs/010-operations-and-discovery.md`                                                                                                                                                                         | sha256 `e3edd2afdf5e9bb3…`; page table row `:9` (010-first-sample → `:201`, 2031-10-31); allowed facts `:16`; forbidden list `:27-34`                                                                                                      |
| Source pack      | `.agents/work/sources/010-first-sample.md`                                                                                                                                                                                    | sha256 `5621b4f2f1c7c9de…`; claims C1–C11 + forbidden ledger + first-public-wording flags + asset finding                                                                                                                                  |
| Asset manifest   | `.agents/work/assets/010-first-sample/assets.md`                                                                                                                                                                              | sha256 `6042471c4377dceb…`; REUSE decision, `payload-sensor-illustration` / `47d39a0b…`                                                                                                                                                    |
| Released context | `website/news/009-first-drive.mdx`, `008-landing.mdx`, `009-egress.mdx`, `002-payload-selection.mdx`, `003-vehicle-design.mdx`, `005-launch.mdx`; `website/wiki/rh-01-pathfinder.mdx`, `asteria-field.mdx`, `red-horizon.mdx` | line citations re-verified at verdict time; quotes in the article match the released bytes                                                                                                                                                 |
| Content schema   | `website/src/content.config.ts:14-71`                                                                                                                                                                                         | `publication` defaults to `draft`; `simulatedDate` optional union; no undeclared key in the article                                                                                                                                        |
| Media contract   | `website/src/lib/media.ts` (key `payload-sensor-illustration`: plateCount 1, altCount 1, captionCount 0, requiresLabel false), `website/src/features/news/media.ts:63-65`, `website/src/lib/assets.ts`                        | frontmatter satisfies the contract (verified with the pipeline's `js-yaml`); registry resolves the key to `docs/payload/payload-sensor-illustration.png`                                                                                   |

## Chronology

- The article's only in-fiction dates are 31 October 2031 (this step's row `:201`) and the released day references in the opening sentence: 16 September (landing, `:197`, released by 008), 23 September (egress, `:199`, released by 009-egress), 30 September (first controlled drive, `:200`, released by 009-first-drive). All four match the locked milestone table and the published articles.
- No later-step date or milestone appears — rows `:202`–`:207` (stratigraphy campaign, one Mars year, final-year health review, end of supported operations, end-of-life, archive completion) are absent in every form (prose, metadata, alt, links). The word "campaign" is absent; no implied next-record date.
- The article is the record the 009-first-drive close-out promised ("Later surface milestones belong to subsequent updates that have not yet been released", `009-first-drive.mdx:39`) and resolves that page's explicit state "no target approach, no contact tool deployment" (`:21`) — the contact tool is deployed here. Order within the fiction: 008 (16 Sep) → 009-p1 (17 Sep) → 009-egress (23 Sep) → 009-first-drive (30 Sep) → this page (31 Oct). Chronology: clear.

## Canon consistency

- Sample language matches the `docs/SCENARIO.md:167-171` contract exactly: contact tool abrades a weathered surface, captures no more than one cubic centimetre of loose material, analyses it in the tool's reusable chamber, and the material is returned to the ground near its source ("local, onboard, returned to ground"). The public meaning sentence ("sample" = a locally collected and onboard-analysed portion of Martian material) is the contract's own public-language definition.
- Payload/vehicle vocabulary stays at the released level (002 + wiki rh-01-pathfinder): "contact tool", "front-centre arm", "exactly two connected joints", "spectral", "spectroscopy as the standard technique" family; no private instrument names (Raman/VNIR combined unit, elemental chemistry sensor, weather-package detail) appear in the body.
- Condition continuity: the landing-era condition is restated at the released observable level (`009-first-drive.mdx:33` wording, monitored, no new symptoms, no diagnosis, no repair, no end-of-life); the article correctly attributes the qualifier and the open-question resolution to the first drive update.
- Ariane 64 paragraph reuses the released non-endorsement family (`005-launch.mdx:22`, `009-first-drive.mdx:41`); no operator/agency/facility/partner claim.
- Fiction disclosure present at the top (`/#mission` link) and in the closing italic paragraph.
- Canon consistency: clear (except the surface leak in F1, which is a confidentiality matter judged under spoiler safety below).

## Plausibility

- The mineral analysis is staged as observation plus first corroboration of one collected sample: "consistent with … not as a final determination", "the team is checking the result against further observations", "one collected sample analysed in a single session". No confirmed mineral detection, no life claim, no world-changing claim.
- The stated-limitation requirement is met (cautious level + checking + single-session scope).
- Process bounds hold: "no more than one cubic centimetre" flagged as an upper bound, not a measured volume; "reusable" explained as repeat-use; no invented telemetry, sol counts, distances, timestamps, or volume figures.
- Plausibility: clear.

## Spoiler safety

- No `docs/timeline/` content or paths; no later-step row content; no landing-design geometry; no withheld coordinates; no working-paper links; the built `website/dist/` carries no `/news/010-first-sample/` route and no HTML reference to the slug while draft (fail-closed, re-verified).
- **F1 — confidentiality FAIL (material):** the italic "Errata and technical vocabulary note" (article line 51 in the reviewed bytes) is process documentation that leaked into public copy. It cites the private scenario canon by path (`docs/SCENARIO.md:168-171`) and line range, refers to "the working brief" (under `.agents/work/briefs/`), and announces the existence of "private payload instrument names". The brief's forbidden list forbids "private timeline text or paths" in every public surface, and a public page referencing the private scenario file by path is a spoiler/confidentiality violation regardless of tone. The terms it "releases" are already defined in the article's prose (lines 18, 24, 26, 28), so removing the note loses no fact.
- Corrective t_d77ef1fd (writer) removes the paragraph and collapses the blank lines; the re-gate then re-runs this scan (target: 0 hits for `docs/SCENARIO`, `brief`, `Errata`, `private payload`).

## Verdict

**`return for revision`** — chronology, canon consistency, and plausibility are clear; the package fails the confidentiality scan on exactly one line (F1). The corrective t_d77ef1fd is linked as a parent of the review card; after it lands, the re-gate can confirm `continuity clear` on the corrected bytes without re-judging chronology/canon/plausibility rows whose evidence is unchanged.

_Continuity record. Not a canon record, not a release decision, not public material._

## Revision 2 — re-gate after corrective t_d77ef1fd (run 386b)

- Corrective t_d77ef1fd (writer) completed; independently verified here: reverse-inserting the removed
  errata paragraph into the corrected file reproduces the run-386 article hash `2def4b86…` byte-for-byte
  (6,995 B, 53 content lines) — proof that only the paragraph and one blank line moved.
- Corrected article: sha256 `4f575ccb3a519def4401765f98da86d58c936890b6bcbb86809549f85c165226`, 6,574 B,
  51 content lines; frontmatter preserved (`publication: draft`, `simulatedDate: 2031-10-31`,
  `media: payload-sensor-illustration`).
- Confidentiality scan on the corrected bytes: 0 hits for `docs/SCENARIO`, `brief`, `Errata`,
  `private payload`, `spectroscopy`, `stratigraph*`, `campaign`, cache/ascent/Earth-return tokens
  (the single `sealed` hit is the licensed negative sentence "No sample is kept sealed, held for
  return, or sent to Earth"); the `life-detection` / `life exists` / `habitable` / `diagnosis` hits
  are the released negative and caution-ceiling wording, unchanged.
- Verdict (revised): **`continuity clear`** for text, metadata, and package on the corrected bytes;
  the superseded pass-1 verdict `return for revision` is resolved by the corrective.
