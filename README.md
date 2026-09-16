# Mars AI Simulation

**Red Horizon** is a fictional, continuously simulated multinational Mars mission.
It is also a real-world AI-harness test: a human coordinates specialised agents
that create, inspect, and prepare a living mission website.

The public site starts in a deliberate **Preparing** state—identity, promise, and
disclosure only. It becomes a chronological stream of project announcements,
technical decisions, mission news, wiki pages, visuals, and eventually the full
surface campaign. It must never masquerade as a real space programme.

## Project principles

- **Living story, private scenario:** the audience sees events unfold; the team
  preserves the full planned arc privately to keep the simulation coherent.
- **Human owns canon:** agents may research, draft, check, build, and prepare;
  only a human can approve canon or cause a public release.
- **Plausible by default:** engineering, operations, and science should feel
  credible. Any intentional fiction is narrow, explicit, and consistently shown.
- **Traceable media:** stable, approved assets are copied into this repository;
  experiments and raw ComfyUI records stay in the generation workspace.
- **Searchable and accessible:** public material is clear, internally linked,
  descriptively titled, and usable without an image or prior knowledge.

## Start here

| Need                                         | Read                                                                               |
| -------------------------------------------- | ---------------------------------------------------------------------------------- |
| The map of `docs/`                           | [Docs map](docs/README.md)                                                         |
| Product intent, boundaries, and terminology  | [General information](docs/GENERAL.md)                                             |
| Locked private scenario canon                | [Red Horizon scenario](docs/SCENARIO.md)                                           |
| How all contributors must work               | [Project instructions](docs/INSTRUCTIONS.md)                                       |
| Ordered build/release work                   | [Delivery plan](docs/PLAN.md)                                                      |
| Hidden mission source of truth               | [Private timeline](docs/timeline/README.md)                                        |
| Kanban-driven article preparation            | [`create-article-workflow` skill](.agents/skills/create-article-workflow/SKILL.md) |
| Per-article working papers                   | [`.agents/work/`](.agents/work/)                                                   |
| Approved visual identity and colour guidance | [Red Horizon visual identity](docs/brand/BRAND.md)                      |
| Vehicle canonical baseline                   | [RH-01 Pathfinder](docs/vehicle/VEHICLE.md)                                        |
| Landing region and operations area           | [Asteria Field dossier](docs/area/AREA.md)                                         |
| Project-local task procedures                | [Skill catalog](.agents/README.md)                                                 |
| Role contracts and handoffs                  | Held by each agent as its `SOUL.md` (Hermes profile), not in this repository       |

## Repository map

```text
docs/                 Project documentation: intent, canon, rules, plan, and dossiers
.agents/              Project-local skills, procedures, and per-article working papers
website/              Astro application, its scripts, and static build output
tools/                Local ComfyUI generation workspace (scratch, git-ignored)
```

[docs/README.md](docs/README.md) maps that folder file by file. Dossiers keep
their subject's assets beside them — `docs/brand/`, `docs/vehicle/`, `docs/area/` —
and the website copies the release-cleared PNGs into its generated
`website/public/assets/` directory, served at `/assets/...`. Article working papers
live under `.agents/work/`; articles are authored as MDX directly in
`website/news/`. Do not manually edit the generated website directories.

`tools/visual-generator/` is the local ComfyUI generation workspace. It is not a site
dependency: copy a selected approved export into its subject dossier under `docs/`
rather than linking the website to its mutable local files.

## Website development

The website is an isolated Astro project at `website/`, using Node `26.8.2`
managed with `fnm`. From that directory:

```sh
fnm use
npm run dev
npm run build
```

The first command uses the pinned version in `website/.node-version`. `npm run
build` also refreshes the generated local media copy before building.

## Work tracking and release authority

This project uses the **Hermes kanban board** for task tracking: a SQLite queue
shared by all Hermes profiles on this machine. One card is one deliverable with
one assignee profile, and cards are scoped to this repository only through
`--workspace dir:/home/janpolacek/Projects/mars-ai-simulator` (the `--project`
flag is not used). Read `AGENTS.md`, `docs/INSTRUCTIONS.md`, and the matching
project-local skill, then choose an unblocked card using
`hermes kanban list --status ready` (a worker finds its own with
`hermes kanban list --mine`). Claim or create one card before starting a
deliverable; record decisions, review outcomes, and handoffs as card comments.
The board is local to this machine and has no cross-machine sync, so the durable
record for a task is the repository artifact plus the card's result and comments.
Pre-kanban issue history is archived read-only at `docs/beads-archive.jsonl`.

The user explicitly authorizes commits and pushes for completed requested work.
Do not create a public deployment, configure a domain, connect provider
credentials, or publish a story item without a separate explicit instruction.
