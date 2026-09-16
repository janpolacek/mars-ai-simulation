# Private Red Horizon timeline

This directory is the hidden scenario backbone. Each numbered file is one
distinct, ordered mission step; it may later yield one or more public pages, but
no public page may reveal a later step. The timeline is not automatically
published, imported into Astro collections, or copied into site metadata.

The [locked mission baseline](000-mission-baseline.md) defines the programme,
architecture, budget, and calendar that every numbered step must follow.

## How to use the timeline

The story coordinator reads only the upcoming step and its direct dependencies,
then creates a bounded release brief in Beads. Writers may use the approved facts
from that brief; continuity reviewers compare output against the relevant step.
Open decisions remain open until the human story owner selects them—agents must
not fill gaps with apparently canonical detail.

Each step states its private situation, decisions/constraints, allowed public
angle, dependencies, future spoilers, and media possibilities. The "public angle"
is a release suggestion, not permission to publish.

| Step                                   | Private event                      | Minimum public prerequisite |
| -------------------------------------- | ---------------------------------- | --------------------------- |
| [001](001-coalition-proposal.md)       | Initial joint-mission proposal     | —                           |
| [002](002-partner-commitments.md)      | Coalition and responsibility split | 001                         |
| [003](003-payload-selection.md)        | Sensor/payload selection           | 002                         |
| [004](004-vehicle-design.md)           | RH-01 design freeze                | 003                         |
| [005](005-launch-provider.md)          | Launch vehicle decision            | 004                         |
| [006](006-launch.md)                   | Departure from Earth               | 005                         |
| [007](007-cruise.md)                   | Interplanetary flight              | 006                         |
| [008](008-landing-preparation.md)      | Landing readiness                  | 007                         |
| [009](009-landing.md)                  | Mars landing                       | 008                         |
| [010](010-first-surface-checks.md)     | Commissioning and first image      | 009                         |
| [011](011-operations-and-discovery.md) | Traverse, scans, discovery         | 010                         |
| [012](012-repair-and-end-of-life.md)   | Repairs and mission close          | 011                         |

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
