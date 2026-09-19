# Public-safe brief: milestone-2030-flight-model-assembly

## Package metadata

| Field                  | Value                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------- |
| Slug                   | `milestone-2030-flight-model-assembly`                                                                          |
| Proposed public angle  | RH-01 Pathfinder flight-model assembly begins                                                                   |
| Mission milestone      | `docs/SCENARIO.md:188` — 11 March 2030 — RH-01 flight-model assembly begins                                     |
| Exact reviewer date    | `simulatedDate: 2030-03-11`                                                                                     |
| Package status         | Planner brief; not canon, not a release decision                                                                |
| Working article output | `website/news/milestone-2030-flight-model-assembly.mdx` (writer card only; do not create in this planning task) |
| Source pack            | `.agents/work/sources/milestone-2030-flight-model-assembly.md`                                                  |

## Release goal

Prepare one short, accessible milestone capsule for readers who know the Red Horizon programme and want to understand what changes when the RH-01 Pathfinder design moves into flight-model assembly. Keep the update narrowly focused on the start of assembly, explain the distinction between a flight model and a finished mission, and preserve the fictional-programme disclaimer. Do not expand this package into a launch, test-campaign, landing, or surface-operations story.

## Target audience

General readers following Red Horizon, including readers who have seen the programme announcement, payload-selection briefing, vehicle-design briefing, and launch-architecture briefing but do not need specialist spacecraft-assembly vocabulary.

## Allowed facts

- Red Horizon is a fictional, AI-assisted Mars exploration programme; no real agency, operator, or facility is a partner or implied endorser.
- RH-01 Pathfinder is the programme's first surface vehicle: a compact, uncrewed, six-wheel Mars survey rover for terrain mapping, rock-context investigation, and route scouting. Source: `docs/vehicles/pathfinder/VEHICLE.md`; released vehicle-design article `website/news/003-vehicle-design.mdx`.
- The RH-01 design is already frozen/released as a design baseline. Assembly is the next bounded status change; do not describe it as a redesign.
- The locked scenario milestone says exactly: `11 March 2030 — RH-01 flight-model assembly begins` (`docs/SCENARIO.md:188`). Use that wording or a plain-language equivalent that does not strengthen it.
- “Flight model” may be explained as the hardware intended to represent the vehicle that would fly, but the writer must mark this as explanatory terminology, not add an unapproved programme specification. If the distinction cannot be sourced cleanly, call it an unresolved editorial note rather than inventing a definition.
- The previously released architecture includes RH-01 as one element of the Red Horizon One flight system; the launch architecture article describes integration, testing, and readiness as work still ahead. Source: `docs/SCENARIO.md:122-132`; `website/news/004-launch-provider.mdx:45-56`.
- The article may link to `/news/003-vehicle-design/` and `/news/004-launch-provider/` for context only.
- The article's frontmatter must carry the exact reviewer-controlled line `simulatedDate: 2030-03-11`. The reviewer assigns/verifies it from the locked milestone table; the writer must not treat this brief as independent canon authority.

## Forbidden / spoiler facts

- Do not disclose or imply any private timeline text or any later milestone: integrated rover/lander/cruise-stage testing, environmental qualification, flight-stack arrival, launch-readiness review, launch, cruise, landing, egress, driving, sampling, or mission end-of-life.
- Do not state or imply that assembly is complete, that the vehicle is integrated with the lander or cruise stage, that it is at a launch site or pad, or that it is flight-ready.
- Do not publish the 17 February 2031 launch date, exact launch time, landing date, or any countdown language. The already released 2031 launch window may be mentioned only if needed and only as context; omission is preferred for this short capsule.
- Do not add Asteria Field landing-design facts, surface imagery, traverse logic, hazard inventory, coordinates, or AF-* identifiers.
- Do not invent assembly location, partner responsibility, staffing, hardware serial numbers, dimensions, test results, schedule confidence, cost, mass, or manufacturing details.
- Do not name a real institution, launch operator, or launch facility as a participant or imply endorsement.
- Do not present an illustrative render as documentary assembly photography. No new assembly image is authorised by this brief.

## Images

Text-only is the recommended package. No approved asset under `docs/vehicles/`, `docs/area/`, or `docs/brand/` depicts the assembly moment, and a new generated scene would invite unapproved facility, personnel, hardware, and spoiler details. If the article graph still requires an IMAGES card, its body must say: `no new imagery: text-only package; no approved assembly image exists`. The manifest should document that decision at `.agents/work/assets/milestone-2030-flight-model-assembly/assets.md`; do not generate or select an image for this brief.

## Writer and SEO requirements

The writer owns the SEO pass in the draft card: one clear search-intent phrase around “RH-01 flight-model assembly” or “Red Horizon rover assembly”; plain-language headings; concise metadata that does not imply launch readiness; internal links only to released context pages; and no timeline-derived terms in slug, metadata, alt text, or summary beyond the approved milestone wording. The draft remains `publication: draft` until the reviewer records the release decision.

## Acceptance criteria

- The draft is one central milestone update, not a multi-page release package.
- Every material factual claim maps to the source pack or is marked unresolved.
- The exact `simulatedDate: 2030-03-11` line is present for reviewer verification, with the reviewer named as the authority for assigning it.
- Assembly is not conflated with full-stack integration, testing, launch readiness, or launch.
- No private timeline text, later milestone, unsupported operational detail, or real-world endorsement claim appears in public copy, metadata, links, captions, or asset names.
- Recommended media outcome is documented as text-only/no new imagery.
- Editorial review by `mars-ai-simulator-reviewer` remains outstanding; that role alone confirms canon and records the release decision. Technical validation follows editorial approval.

## Next serial graph recommendation

After this brief is reviewed, the planner should create a serial graph: research/source verification (`mars-ai-simulator-planner`) -> draft plus integrated SEO (`mars-ai-simulator-writer`) -> one images decision card (`mars-ai-simulator-visuals`, text-only reuse/no-new-imagery manifest) -> editorial continuity and release gate (`mars-ai-simulator-reviewer`) -> build/push validation (`mars-ai-simulator-dev`). The draft, images, review, and dev cards must be dependency-gated in that order; no separate SEO card. The dev card must require its commit SHA, push result, clean tree, and `git log origin/main..HEAD` empty at handoff.

## Handoff

- Result: bounded public-safe brief for the 2030-03-11 assembly milestone.
- Source/timeline step: locked milestone row `docs/SCENARIO.md:188`; released context only from the cited article and dossier paths.
- Canon impact: none; this brief proposes a release package and does not establish canon, timing, or publication.
- Files: this brief and `.agents/work/sources/milestone-2030-flight-model-assembly.md`.
- Confidentiality check: private `docs/timeline/` text was not used or copied; later milestone facts are listed only as forbidden categories, not disclosed.
- Review still outstanding: human story owner retains canon/timing authority; reviewer owns the eventual editorial release decision.
- Next owner/action: planner reviews this package, then creates the serial article graph only after the brief is accepted.
