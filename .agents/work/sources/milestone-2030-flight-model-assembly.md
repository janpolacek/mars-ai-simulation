# Source pack: milestone-2030-flight-model-assembly

## Pack metadata

| Field                   | Value                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------- |
| Slug                    | `milestone-2030-flight-model-assembly`                                                 |
| Brief                   | `.agents/work/briefs/milestone-2030-flight-model-assembly.md`                          |
| Milestone source        | `docs/SCENARIO.md:173-189` (locked milestone table; use only row 188 for this package) |
| Proposed simulated date | `2030-03-11` — reviewer must assign and verify from the locked row                     |
| Status                  | Planner source pack; not a release decision                                            |

## Confidentiality boundary

This pack uses the locked milestone row in `docs/SCENARIO.md` and released canon only. It does not quote or expose any private `docs/timeline/` text. Later milestones are listed in the brief only as withheld categories, not as public facts. The milestone table is scenario canon, while the release decision and public wording remain with `mars-ai-simulator-reviewer`.

## 1. Claim ledger for the capsule

| ID  | Claim or editorial use                                                                                                                                            | Source                                                                                                | Status / containment                                                                                                                           |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| C-1 | Red Horizon is a fictional, AI-assisted Mars exploration programme.                                                                                               | `website/news/003-vehicle-design.mdx:16-19,73-75`                                                     | Released; retain disclaimer.                                                                                                                   |
| C-2 | RH-01 Pathfinder is the first surface vehicle, a compact robotic/uncrewed Mars surveyor for terrain mapping, rock-context investigation, and safe-route scouting. | `docs/vehicles/pathfinder/VEHICLE.md:1-7,13-25`; `website/news/003-vehicle-design.mdx:16-19`          | Released canon; use concise wording.                                                                                                           |
| C-3 | RH-01 has the released design baseline: roughly two metres in class, six wheels, short camera mast, and one front contact arm.                                    | `docs/vehicles/pathfinder/VEHICLE.md:13-25,56-63,83-100`; `website/news/003-vehicle-design.mdx:16-19` | Released; include only if useful context, not as new assembly detail.                                                                          |
| C-4 | The locked milestone is “11 March 2030 — RH-01 flight-model assembly begins.”                                                                                     | `docs/SCENARIO.md:179-189`, exact row at `:188`                                                       | Locked scenario fact; exact reviewer-controlled `simulatedDate: 2030-03-11`. Do not strengthen “begins” into “completed” or “fully assembled.” |
| C-5 | Red Horizon One's architecture includes RH-01 as the rover element of a larger flight system.                                                                     | `docs/SCENARIO.md:122-127`; `website/news/004-launch-provider.mdx:29-35`                              | Released context; do not state that the elements are now integrated.                                                                           |
| C-6 | Integration, testing, and readiness work remain conceptually distinct from the earlier architecture decision.                                                     | `website/news/004-launch-provider.mdx:51-56`                                                          | Released context; use only to explain what this capsule does not claim. Do not import any dated later test milestone.                          |

## 2. Public wording guardrails

Preferred core sentence: “On 11 March 2030, RH-01 Pathfinder’s flight-model assembly begins.” The reviewer may adjust tense or style while preserving the exact milestone meaning. Explain any use of “flight model” in general, accessible terms; if a definition would require an unsupported programme-specific detail, mark it unresolved instead of inventing one.

The article should distinguish:

- a vehicle design baseline (already released),
- the start of flight-model assembly (this milestone), and
- later integration, testing, readiness, and launch work (not part of this release).

Use only released internal links: `/news/003-vehicle-design/` and, if genuinely needed, `/news/004-launch-provider/`. Keep the package text-only; no image claim is needed to support assembly.

## 3. Withheld facts and spoiler controls

- No later milestone or private timeline wording.
- No claim that RH-01 assembly is complete, that the rover is integrated with the lander or cruise stage, or that the flight stack is at a pad or launch site.
- No launch date, exact time, countdown, launch-readiness claim, landing date, cruise event, surface deployment, drive, sampling, or end-of-mission fact.
- No Asteria Field landing-design detail, coordinates, traverse plan, hazard inventory, science-zone plan, or AF-* identifier.
- No assembly facility, country, organisation, team, personnel, supplier, serial number, test result, cost, mass, or schedule-confidence claim unless a later approved source pack explicitly supplies it.
- No real-agency or operator participation/endorsement implication.
- No documentary image or generated depiction of assembly; recommended result is text-only.

## 4. Canonical source notes

1. `docs/SCENARIO.md:188` is the sole source for the milestone date and event wording. It is not a public route and must not be linked from the article.
2. `docs/vehicles/pathfinder/VEHICLE.md` is the canonical RH-01 design dossier. It supports identity and released design context, not assembly-site or manufacturing claims.
3. `website/news/003-vehicle-design.mdx` is the released public vehicle context and disclaimer.
4. `docs/SCENARIO.md:122-132` supports the high-level flight-system architecture and separates RH-01 from cruise/landing elements.
5. `website/news/004-launch-provider.mdx:45-56` supports the already-published distinction between an architecture decision and future integration, tests, and readiness. It does not authorise dated future milestones.

No external web research is required for this capsule. If the writer proposes a material real-world engineering definition or comparison, research must be added with a canonical, verifiable citation before drafting proceeds.

## 5. Asset decision

No approved asset currently carries the assembly moment. The RH-01 dossier renders are design references, not assembly documentation. The recommended images outcome is `text-only/no new imagery`, recorded in `.agents/work/assets/milestone-2030-flight-model-assembly/assets.md` by the visuals card if the graph requires that manifest. No new image should depict an invented facility, worker, test stand, integrated stack, or unapproved hardware state.

## 6. Acceptance checks

- [x] Exact locked milestone row and simulated date recorded.
- [x] Every proposed material claim has a source path and line range.
- [x] Released canon is separated from the milestone source.
- [x] Private timeline text is not quoted or exposed.
- [x] Later facts are withheld, not used as article claims.
- [x] Text-only/no-new-imagery recommendation is explicit.
- [ ] Writer draft and SEO pass — next graph stage.
- [ ] Visual manifest — next graph stage; expected text-only decision.
- [ ] Editorial continuity and release decision — `mars-ai-simulator-reviewer`.
- [ ] Technical build/push validation — `mars-ai-simulator-dev` after editorial approval.

## Handoff

- Result: claim-level source pack for a single 2030-03-11 RH-01 assembly milestone capsule.
- Source/timeline step: `docs/SCENARIO.md:188`; no private timeline text copied.
- Canon impact: none; no canon or release decision made.
- Outputs: `.agents/work/sources/milestone-2030-flight-model-assembly.md` and companion brief.
- Validation: cross-checked the exact scenario row, released articles 003/004, and RH-01 dossier paths; containment list included.
- Review outstanding: reviewer must verify wording, simulatedDate, canon, spoiler safety, and release scope.
- Next owner/action: planner creates the serial research -> writer/SEO -> images -> reviewer -> dev graph after brief review; writer drafts only from this pack.
