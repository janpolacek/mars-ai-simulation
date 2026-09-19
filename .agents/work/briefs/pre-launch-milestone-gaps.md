# Pre-launch milestone gap plan

Scope: compare the locked milestone table in `docs/SCENARIO.md` with the four published news articles, then route short public-safe milestone capsules through the launch step. This plan does not advance canon or publish anything.

## Existing coverage

| Simulated date | Milestone                                           | Existing coverage                                                                                                                                                                                             |
| -------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-10-12     | Council charter takes effect                        | `001-project-announcement.mdx` (date present)                                                                                                                                                                 |
| 2027-03-19     | Mission Concept Review                              | `002-payload-selection.mdx` (date present)                                                                                                                                                                    |
| 2029-07-13     | Critical Design Review / flight-build authorisation | `003-vehicle-design.mdx` (date present)                                                                                                                                                                       |
| 2030-03-11     | RH-01 flight-model assembly begins                  | `004-launch-provider.mdx` carries this record date, but its subject is launch architecture; treat the assembly milestone as a continuity gap to resolve in the writer/reviewer pass, not as silently covered. |

## Missing smaller news capsules

Create one short, text-first news package for each missing milestone below. Images are optional; the visuals card must explicitly record `no new imagery: text-only` when an image does not improve comprehension.

| Proposed slug                                | Simulated milestone date | Public-safe subject                                                                             | Forbidden / unresolved                                                                       |
| -------------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `milestone-2027-system-requirements`         | 2027-09-24               | requirements review and target-confirmation decision, only at the already released public level | no landing-design geometry, hazard/traverse plan, or private Asteria details                 |
| `milestone-2028-payload-selection`           | 2028-04-07               | payload selection review closes the payload scope                                               | no unapproved instrument names or real partner claims                                        |
| `milestone-2028-power-readiness`             | 2028-10-20               | preliminary design review and power-system maturity gate                                        | no invented gate result, supplier, flight qualification, or redesign                         |
| `milestone-2030-flight-model-assembly`       | 2030-03-11               | RH-01 flight-model assembly begins                                                              | reconcile with article 004's existing simulated date; no claim that launch readiness follows |
| `milestone-2030-integrated-tests`            | 2030-08-30               | integrated rover/lander/cruise test campaign begins                                             | no test result, anomaly, or launch readiness claim unless separately released                |
| `milestone-2030-environmental-qualification` | 2030-11-22               | environmental qualification and landing-system rehearsal complete                               | no flawless result or exact test telemetry unless source pack resolves it                    |
| `milestone-2031-stack-arrival`               | 2031-01-13               | flight stack arrives at the launch campaign site                                                | no named facility/operator, pad integration, or flight-ready claim                           |
| `milestone-2031-launch-readiness-review`     | 2031-02-11               | launch readiness review                                                                         | no exact time, decision outcome, or launch guarantee unless explicitly released              |
| `005-launch`                                 | 2031-02-17               | factual launch update and immediate next check                                                  | no telemetry/time, cruise anomalies, landing success, or surface targets                     |

The date values come only from `docs/SCENARIO.md`'s locked milestone table. The reviewer owns assigning `simulatedDate`; writers leave it unset.

## Routing and release shape

Each capsule is short and may be text-only. Each still needs research, writer (including SEO), one IMAGES decision card, reviewer/continuity gate, and dev validation. The launch package is a separate full graph and may reuse `docs/vehicles/ariane/lunch.png`; no image generation is requested.

The articles must not be released out of date order. The news-listing implementation also needs a separate dev correction: sort published entries by `simulatedDate` descending, with a deterministic fallback only for entries missing the field, and test that the newest article appears first on `/news/`, homepage cards, and the carousel.
