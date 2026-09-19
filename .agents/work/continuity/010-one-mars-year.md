# Continuity verdict: 010-one-mars-year

- Card: `t_b3e19a8e` (editorial final gate, stage review)
- Timeline step: `010-operations-and-discovery` — page 3 of 4 (this card); pages 1–2
  (`010-first-sample`, `010-stratigraphy`) are released public record
- Locked milestone row: `docs/SCENARIO.md:203` — `3 August 2033 | One Mars year of surface operation completed`
- Article: `website/news/010-one-mars-year.mdx`
- Article SHA-256 at verdict: `27c98ad080bd319ff75b0c8184378e4d739b77d6148fc96cb269b6b40d332ec9`
  (after the reviewer's `simulatedDate` assignment — the only change from the writer's draft)
- Review record: `.agents/work/reviews/010-one-mars-year.md`
- Verdict: **continuity clear**
- Date of pass: 2026-09-19 (session date); timestamps in the probe log (UTC 2026-09-19T18:06Z and rerun after date assignment)

## Inputs re-read for this pass

- `docs/SCENARIO.md` milestone table (lines 179–212), esp. rows `:197`–`:203`; the
  spoiler boundary rows `:204`–`:207`; the private payload (`:157-166`), power/thermal
  (`:144-152`) boundaries
- `docs/timeline/010-operations-and-discovery.md` (continuity material only — phrases
  "measured traverses", "equipment wear", "operational limits" cross-checked for absence)
- Article `website/news/010-one-mars-year.mdx` (draft + assigned date)
- Published predecessor records: `008-landing.mdx`, `009-egress.mdx`,
  `009-first-drive.mdx`, `010-first-sample.mdx`, `010-stratigraphy.mdx`,
  `003-vehicle-design.mdx`, `001-project-announcement.mdx`, `002-payload-selection.mdx`
- Published wiki leaves: `rh-01-pathfinder.mdx`, `asteria-field.mdx`, `red-horizon.mdx`
- Source pack `.agents/work/sources/010-one-mars-year.md` (claims C1–C12)
- Asset manifest `.agents/work/assets/010-one-mars-year/assets.md` (visuals `t_6d180087`)
- Image index `.agents/work/image-index.md` and the site media machinery
  (`src/lib/media.ts`, `src/features/news/media.ts`, `src/lib/assets.ts`,
  `src/lib/simulated-date.ts`, `src/content.config.ts`)

## Chronology check

| Claim in article                                                                                                                                    | Canonical/released source                                                          | Result |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------ |
| Landed at Asteria Field 16 Sep 2031                                                                                                                 | `docs/SCENARIO.md:197`; `008-landing.mdx` (published, `simulatedDate: 2031-09-16`) | pass   |
| Egressed 23 September                                                                                                                               | `docs/SCENARIO.md:199`; `009-egress.mdx`                                           | pass   |
| First onboard sample 31 Oct 2031                                                                                                                    | `docs/SCENARIO.md:201`; `010-first-sample.mdx`                                     | pass   |
| First mineral-stratigraphy campaign 18 Apr 2032                                                                                                     | `docs/SCENARIO.md:202`; `010-stratigraphy.mdx`                                     | pass   |
| One Mars year completed 3 Aug 2033                                                                                                                  | `docs/SCENARIO.md:203` (this record's own row)                                     | pass   |
| One Mars year ≈ 687 Earth days; two Mars years = 1,374 Earth days; "at least one full seasonal cycle"; designed to keep working past its first year | `001-project-announcement.mdx:69-72` (published)                                   | pass   |
| Release-order: article dates sit in timeline order 2031-09-16 < 2031-09-23 < 2031-10-31 < 2032-04-18 < 2033-08-03                                   | `simulatedDate` values of the published chain                                      | pass   |

Calendar arithmetic verified with GNU date: `2031-09-16 + 687 days = 2033-08-03`
(the locked row) and `2031-09-16 + 1374 days = 2035-06-21` (row `:205` — a distinct
later record, correctly unnameable here).

## Canon consistency

- Design-life frame: the article ties the anniversary to the already-public design
  frame (001:69-72) and never states the second-Mars-year completion or any row
  `:204`–`:207` event/date; `second Mars year` token absent.
- Operating-appearance stages named exactly as released (003:56-60,
  rh-01-pathfinder:117-121), with the same "design vocabulary, not events that have
  happened" boundary, plus the article's own guard "not a claim about the rover's
  condition".
- Science recap is release-level only: first-sample process (abrade → ≤1 cm³ →
  reusable chamber → returned to ground; 010-first-sample:25-29) and cautious
  analysis wording ("consistent with the mineral composition expected from the
  weathered terrain", "checking the result against further observations" —
  010-first-sample:33) verbatim; stratigraphy recap (layered outcrop observations,
  grounded sedimentary interpretation, stated limitation — 010-stratigraphy:25-37)
  verbatim where it matters. The page explicitly adds no new science result.
- Routine-operations vocabulary is the released set: short deliberate traverses /
  survey / select target / approach / observe / record / next safe route;
  "local weather observations continue"; "power is established"; "what the
  environment does at the measurement point", "how those conditions change over a
  season" (002:30, 002:69).
- Landing-era condition kept at the released observable qualifier family
  (009-first-drive:33, 010-first-sample:39): monitor, observable, does not prevent
  basic science or short traverses, no diagnosis offered, reports what is
  observable and continues to assess. No symptom, no worsening, no wear, no
  "operational limits", no diagnosis. Pass — the wording is a mild variation of
  the released sentence family, nothing added.
- Disclosure family verbatim from the current template (010-stratigraphy:43, :45),
  including the Ariane 64 non-endorsement sentence.

## Plausibility

- Definition of one Mars year as one full orbit, ≈ 687 Earth days, is the public
  001 figure and the real-world source's plain definition (NASA Mars facts);
  "about"/"approximately" qualifiers retained; "exactly" absent.
- The anniversary framing (presence, durability, science so far) is grounded in the
  released design frame and released records; no invented telemetry (no sol counts,
  drive distances, weather values, power numbers, thermal facts, image counts).

## Spoiler safety

- Forbidden-token scan of the article at verdict (probe run 2026-09-19, UTC 18:06
  and rerun after date assignment): `sol\b`, `scan target`, `wheel route`,
  `second Mars year`, `docs/timeline`, `Raman`, `radioisotope`, `thermal`, `2034`,
  `2035`, `2036`, `21 June`, `30 June`, `21 July`, `health review`, `final-year`,
  `listening`, `end-of-life`, `end of supported`, `cache`, `ascent vehicle`,
  `Earth-return` — all absent. The only `confirmed`/`habitable`/`fossil` hits are
  inside the released stated-limitation sentence (010-stratigraphy:37).
- No private timeline path or phrase; `scanSourceForGatedReferences()` over the
  website source reports NO offences.
- Media: reused plate `docs/vehicles/pathfinder/canonical.png` SHA-256
  `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267`
  (re-verified 2026-09-19; matches the image-index row and `assets.ts`); alt text
  is studio-reference meaning — no dust/wear/after-Mars-year/Asteria-Field scene
  claim, no date. Third public placement of already-released bytes (003 article,
  wiki leaf, now this article).
- Draft surface: route `/news/010-one-mars-year/` is absent from the current
  `dist/` route list (probe) — the body is not public before the dev flip.

## Simulated record date

- Value assigned into frontmatter: `simulatedDate: 2033-08-03`.
- Drawn from `docs/SCENARIO.md:203` — `3 August 2033 | One Mars year of surface
  operation completed` (the milestone this step releases).
- Checks: implies no unreleased event (it IS this step's row); not readable as a
  launch/landing/other withheld mission date; contradicts no published sentence;
  keeps the news chain in timeline order (2031-09-16 … 2033-08-03).
- Public surface wording (real pipeline module `src/lib/simulated-date.ts`):
  `Simulated record date · 3 August 2033` — in-fiction label, nothing
  machine-readable derived.
- The dev card `t_aafb44aa` verifies the built page states the date under the
  in-fiction label after the flip.

## Boundary notes (recorded, non-blocking)

- Vision read of the plate described composition matching the alt (clean rover,
  dark deck, six open-mesh wheels, short mast, stowed front arm, plain light
  background); the reader's automatic identification of the render as a specific
  real rover was not relied on — the plate's illustrative status is established
  canon from the step-003 gate (`t_1e84c815` review §2/§8.1) and this pass judges
  the further placement by hash + alt fidelity.
- Writer's SEO handoff reported summary length 148 chars; measured string length is
  111. Immaterial (no gate enforces the bound; search intent and routing facts
  unchanged) — recorded for traceability only.
- "The mission reports what is observable" is a one-word variant of the released
  "the programme reports what is observable"; same meaning, within the released
  qualifier family.

## Verdict

**Continuity clear.** Chronology, canon consistency, plausibility, and spoiler
safety all pass for `website/news/010-one-mars-year.mdx` at
`simulatedDate: 2033-08-03` (docs/SCENARIO.md:203). No material failure, no
corrective card required. Release decision recorded on card t_b3e19a8e; the dev
card t_aafb44aa carries the flip and build validation.
