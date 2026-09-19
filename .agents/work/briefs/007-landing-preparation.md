# Brief: 007 landing preparation

Timeline step: `007-landing-preparation`; dependency: step 006 (released). Public-safe goal: a landing-preparation briefing — what will happen, which systems matter, what the team will know first, and when another update will follow — recorded between the 006 cruise close (21 Aug 2031) and the 008 landing confirmation (16 Sep 2031).

## Verdict record (planner, card t_16d4d8cc)

- Gap CONFIRMED against HEAD: no `007-*` file exists anywhere in `website/` (`git ls-files website/news/` jumps `006-cruise-final-approach.mdx` -> `008-landing.mdx`); no wiki leaf, progress-log step, or index entry covers landing preparation under another name.
- The published 006 close (website/news/006-cruise-final-approach.mdx:49-54) explicitly promises "the approach and arrival-preparation phase" as the next record — the gap is a dangling promise in the public story.
- Decision: 007 IS a missing article the release record should contain; it can be written with named-canon sources ONLY (this timeline step's allowed public angle plus released scenario architecture). Its simulated record date is NOT in the milestone table -> NEW SCENARIO CANON, human-owned.
- Human question card filed: `t_fb4e97da` (blocked, verbatim question + fail-closed default). No date is invented here; the editorial gate blocks needs_input until the human answers.

## Page in this brief

| Page slug                 | Locked milestone row                                  | SCENARIO line | Proposed `simulatedDate`                 |
| ------------------------- | ----------------------------------------------------- | ------------- | ---------------------------------------- |
| `007-landing-preparation` | NONE — table holds no landing-preparation row between | —             | UNRESOLVED — human answer on t_fb4e97da; |
|                           | :196 (21 Aug 2031) and :197 (16 Sep 2031)             |               | reviewer must not invent                 |

## Allowed facts

- Red Horizon is a fictional, AI-assisted Mars exploration programme; keep the standard disclosure present and prominent.
- The spacecraft is approaching Mars after the 17 February 2031 launch and the cruise corrections (3 Mar / 20 May / 21 Aug 2031) already released by the 006 updates; the final approach correction was assessed on 21 August 2031 (website/news/006-cruise-final-approach.mdx).
- The landing-preparation phase is what the mission does before entry: completing entry, descent, and landing readiness checks; the landing terrain/surface-science rationale is selected and the landing ellipse is named by the team, but the outcome stays uncertain until communications confirm it (docs/timeline/007-landing-preparation.md).
- Describe what will happen, which systems matter, what the team will know first, and when another update will follow (the step's allowed public angle).
- The public should understand the sequence without a fake live countdown.
- Generic architecture already released may be reused: the landing platform handles entry, descent, landing, rover deployment, and surface relay; the rover is carried to the surface and deploys when checks are complete (website/news/008-landing.mdx + wiki leaves, released vocabulary).

## Forbidden / spoiler facts

- Do not show the landed rover, release a first image, or name a success condition as already achieved (docs/timeline/007-landing-preparation.md).
- No claim of landing success or of entry/landing outcome; no entry date as achieved (16 Sep 2031 remains unreleased until 008).
- Landing-site geometry beyond the already-released destination name (Asteria Field): ellipse coordinates, P0 touchdown zone, science-zone plan, hazard inventory, traverse logic, AF-* unit identifiers (gated by docs/SCENARIO.md:279).
- Any later-step event (008-011), private timeline text or paths, invented dates/mass/technical numbers, real institutional names beyond the standard non-endorsement disclosure.
- Any wording that turns illustrative artwork into a photograph or documentary record.

## Assets and image decision

`no new imagery: reuse docs/mission/cruise-final-approach.png` (media key `cruise-final-approach` already in the registry and placed on the published 006 final-approach article). The plate shows the cruise stage with Mars ahead — the approach/preparation moment, pre-landing framing. Do NOT use `landing-confirmation` (depicts the rover landed on the platform — a later-step image). The IMAGES card body states `no new imagery: reuse <exact path>` and writes `.agents/work/assets/007-landing-preparation/assets.md` documenting hash, dimensions, placement, alt/caption, provenance, and rights for the reused plate.

## Draft contract

- Target: `website/news/007-landing-preparation.mdx`, `publication: draft`; `simulatedDate` UNSET (reviewer applies the human-sanctioned date from t_fb4e97da; the milestone line column stays "human-assigned via t_fb4e97da" until then).
- `order: 7` (sorts between 006 order 6 and 008 order 8 in the news index); `category: Landing readiness 07` to match the "Cruise 06" / "Landing 08" label pattern.
- Writer owns the integrated SEO pass; no separate SEO card.
- One central update plus only the released context needed; date-scoped language; accessible structure.

## Acceptance criteria

- Every material claim traces to a canonical source or explicit unresolved note in `.agents/work/sources/007-landing-preparation.md`.
- Pre-landing framing only: no landed rover, no first image, no success condition achieved, no entry outcome.
- No later-step fact, private timeline text, or invented figure; confidentiality scan clean.
- Visual decision explicit (reuse of the approved final-approach plate, manifest written).
- Reviewer checks chronology/canon/confidentiality, records the human-sanctioned date (or blocks needs_input with the t_fb4e97da question if unanswered), and records the release decision before dev validation.
- No public file, canon change, release decision, commit, or push in this plan.
