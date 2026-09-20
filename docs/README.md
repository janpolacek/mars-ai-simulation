# Docs map

`docs/` holds the project's documentation and its canon-adjacent dossiers. Article
copy does not live here: articles are authored as MDX in `website/news/`, and
per-article working papers live in `.agents/work/`.

Read in this order: [GENERAL.md](GENERAL.md) for what the project is,
[SCENARIO.md](SCENARIO.md) for what is true inside the fiction,
[INSTRUCTIONS.md](INSTRUCTIONS.md) for the rules, and [PLAN.md](PLAN.md) for the
order of work.

| Path                                         | What it owns                                                                                                          | Who writes it                                                                                       |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [README.md](README.md)                       | This map                                                                                                              | `project-documentation`, whenever the tree changes                                                  |
| [GENERAL.md](GENERAL.md)                     | Intent, audience, the fiction boundary, terminology, and the private/public state model                               | `project-documentation`; human approval for changes                                                 |
| [SCENARIO.md](SCENARIO.md)                   | The locked canon facts: programme identity, coalition, flight system, calendar, budget                                | Human story owner only; agents cite it and never edit it                                            |
| [INSTRUCTIONS.md](INSTRUCTIONS.md)           | The rules every human and agent follows, including the source-of-truth order and where each file lives                | `project-documentation`; human approval for rule changes                                            |
| [PLAN.md](PLAN.md)                           | Delivery phases and their order, plus the pointer to the article pipeline skill                                       | Story coordinator (`mars-ai-simulator-planner`), with human approval                                |
| [HARNESS.md](HARNESS.md)                     | The agent harness: its role roster, tools and models, task tracking, the human gates, and the public-release boundary | `project-documentation`; human approval for changes                                                 |
| [IMAGES.md](IMAGES.md)                       | The image catalog: every project image with path, description, status and SHA-256                                     | `mars-ai-simulator-visuals` appends per generation; `mars-ai-simulator-reviewer` maintains statuses |
| [fleet/](fleet/)                             | The sunset agent-fleet archive: role SOULs, profile metadata, and project memories (2026-09-20)                       | Captured once at sunset for the GitHub archive                                                      |
| [timeline/](timeline/)                       | The private release order: one numbered step per file, plus its [README](timeline/README.md)                          | Human story owner with the story coordinator                                                        |
| [brand/](brand/)                             | [BRAND.md](brand/BRAND.md) and the approved identity mark and its derivative                                          | Human story owner approves; `mars-ai-simulator-visuals` produces; documentation records it          |
| [vehicles/](vehicles/)                       | One folder per vehicle in the flight system: the launcher and the surface rover                                       | `project-documentation` with `mars-ai-simulator-visuals`; human approval for canon changes          |
| [vehicles/pathfinder/](vehicles/pathfinder/) | [VEHICLE.md](vehicles/pathfinder/VEHICLE.md), the RH-01 Pathfinder rover dossier, and its six reference renders       | `project-documentation` with `mars-ai-simulator-visuals`; human approval for canon changes          |
| [vehicles/ariane/](vehicles/ariane/)         | [ariane-64.md](vehicles/ariane/ariane-64.md), the Ariane 64 launch-vehicle dossier                                    | `project-documentation` with `mars-ai-simulator-visuals`; human approval for canon changes          |
| [area/](area/)                               | [AREA.md](area/AREA.md), the Asteria Field dossier with its map package, and the three map plates                     | `project-documentation` with `mars-ai-simulator-visuals`; human approval for canon changes          |
| [harness/](harness/)                         | Screenshots of the operator's local Hermes Workspace and their provenance, in [README.md](harness/README.md)          | `project-documentation` records it; the operator selects the exports                                |

## Elsewhere

- **Procedures** are the project skills in `.agents/skills/`, catalogued in
  [`.agents/README.md`](../.agents/README.md).
- **Per-article working papers** are in `.agents/work/`: briefs, source packs, asset
  manifests, and editorial reviews. They are working material for the article
  pipeline, not documentation.
- **Article copy** is authored as MDX in `website/news/`, with
  `publication: draft|published` deciding whether the site renders it.
- **Task state** is the Hermes kanban board; [`.agents/README.md`](../.agents/README.md)
  and `AGENTS.md` hold the commands.
- **Generation scratch** is the visuals profile's image cache
  (`~/.hermes/profiles/mars-ai-simulator-visuals/cache/images/`), outside the repository;
  the retired local generator's `tools/archive/visual-generator/` scratch is git-ignored and
  never a source root.

Nothing in this folder is a public route. What may become public, and when, is set
by `docs/timeline/` and the release controls in [SCENARIO.md](SCENARIO.md).
