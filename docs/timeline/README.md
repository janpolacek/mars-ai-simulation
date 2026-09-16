# Private Red Horizon timeline

This directory is the hidden scenario backbone. Each numbered file is one
distinct, ordered mission step; it may later yield one or more public pages, but
no public page may reveal a later step. The timeline is not automatically
published, imported into Astro collections, or copied into site metadata.

The [locked scenario canon](../SCENARIO.md) defines the programme, architecture,
budget, and calendar that every numbered step must follow. The numbered steps in
this directory control when those facts may become public.

## How to use the timeline

The story coordinator reads only the upcoming step and its direct dependencies,
then creates a bounded release brief as a kanban card. Writers may use the
approved facts from that brief; continuity reviewers compare output against the
relevant step.
Open decisions remain open until the human story owner selects them—agents must
not fill gaps with apparently canonical detail.

Each step states its private situation, decisions/constraints, allowed public
angle, dependencies, future spoilers, and media possibilities. The "public angle"
is a release suggestion, not permission to publish.

| Step                                   | Private event                                  | Minimum public prerequisite |
| -------------------------------------- | ---------------------------------------------- | --------------------------- |
| [001](001-project-announcement.md)     | Programme announcement and partner commitments | —                           |
| [002](002-payload-selection.md)        | Sensor/payload selection                       | 001                         |
| [003](003-vehicle-design.md)           | RH-01 design freeze                            | 002                         |
| [004](004-launch-provider.md)          | Launch vehicle decision                        | 003                         |
| [005](005-launch.md)                   | Departure from Earth                           | 004                         |
| [006](006-cruise.md)                   | Interplanetary flight                          | 005                         |
| [007](007-landing-preparation.md)      | Landing readiness                              | 006                         |
| [008](008-landing.md)                  | Mars landing                                   | 007                         |
| [009](009-first-surface-checks.md)     | Commissioning and first image                  | 008                         |
| [010](010-operations-and-discovery.md) | Traverse, scans, discovery                     | 009                         |
| [011](011-repair-and-end-of-life.md)   | Repairs and mission close                      | 010                         |

## Continuity invariants

- RH-01 is a robotic rover: it has no passengers, cabin, weapons, or magical
  propulsion. Its established silhouette and hardware persist across visuals.
- The programme releases information cautiously and truthfully. Failures can be
  difficult without becoming sensational or contradicting a later success.
- Major discoveries must follow credible observation, verification, and careful
  interpretation; the mission does not find life or make world-changing claims by
  default.
- Time passes at the editorial pace selected by the human. Do not invent calendar
  dates, mission sol counts, mass figures, partner names, or launch provider until
  approved as canon.
