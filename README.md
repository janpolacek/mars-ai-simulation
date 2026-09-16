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

| Need                                         | Read                                                    |
| -------------------------------------------- | ------------------------------------------------------- |
| Product intent, boundaries, and terminology  | [General information](docs/GENERAL.md)                  |
| Ordered build/release work                   | [Delivery plan](docs/PLAN.md)                           |
| How all contributors must work               | [Project instructions](docs/INSTRUCTIONS.md)            |
| Approved visual identity and colour guidance | [Red Horizon visual identity](docs/BRAND_GUIDELINES.md) |
| Role contracts and handoffs                  | [Agent playbook](.agents/roles/README.md)               |
| Project-local task procedures                | [Skill catalog](.agents/README.md)                      |
| Beads-driven article preparation             | [Content workflow harness](docs/CONTENT_WORKFLOW.md)    |
| Hidden mission source of truth               | [Private timeline](docs/timeline/README.md)             |
| Vehicle canonical baseline                   | [RH-01 Pathfinder](docs/vehicles/red-horizon-01.md)     |

## Repository map

```text
docs/                 Project, lore, and private timeline documentation
content/              Article handoffs, approved media, and identity sources
website/              Astro application, its scripts, and static build output
.agents/              Role contracts, project-local skills, and Beads integration
```

`content/` is the source for reusable approved media and identity artwork. The
website copies `content/media/` and `content/brand/identity/` to its generated
public directories during development and production builds, then refers to them
at `/media/...` and `/brand/...`. Do not manually edit those generated website
directories. Application favicon exports live directly under `website/public/`,
with their stable source artwork under `content/brand/favicon/`.

`tools/visual-generator/` is the local ComfyUI generation workspace. It is not a site
dependency: copy a selected approved export into `content/media/` rather than
linking the website to its mutable local files.

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

This project uses [Beads](https://github.com/gastownhall/beads). Begin with
`bd prime`, then choose an unblocked issue using `bd ready`. Create and claim an
issue before starting a deliverable; record decisions and review outcomes there.

The user explicitly authorizes commits and pushes for completed requested work.
Do not create a public deployment, configure a domain, connect provider
credentials, or publish a story item without a separate explicit instruction.
