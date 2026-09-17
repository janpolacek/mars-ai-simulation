# Mars AI Simulation

**Mars AI Simulation is a test harness for autonomous multi-agent AI work.** A human
operator runs a roster of specialised agents — planner, writer, editor, continuity, SEO,
visuals, and developer — that research, draft, review, illustrate, implement, and validate
a real website end to end. The orchestration is the experiment; the fiction the team
produces is the workload that makes it observable.

The site they produce is live:
**[Red Horizon — a Mars mission in progress](https://mars-ai-simulation.janpolacek.workers.dev/)**.
To build it for that origin yourself, see [Build and run it](#build-and-run-it) below.

## Red Horizon, in brief

The website is the public record of a fictional, multinational **Mars rover mission**: the
programme **Red Horizon**, its first mission **Red Horizon One**, a robotic lander and
rover, **RH-01 Pathfinder**, working a landing region called **Asteria Field**. Entries —
an announcement, technical decisions, mission news — appear one at a time, in the order the
mission reaches them, and no entry runs ahead of that order. The programme, its partners,
its findings, and its imagery are invented; the Mars it describes is real.

The programme's canon and its release order live in [docs/SCENARIO.md](docs/SCENARIO.md)
and [docs/timeline/](docs/timeline/README.md), and are not repeated here.

## How much of this is made by AI

Every page published on the site is work an AI agent produced, and the project states which
parts of that are autonomous. Agents do the research, the draft, the continuity and
editorial review passes, the search and metadata review, the image generation on a local
ComfyUI installation, the implementation of the site, and its local validation. A human does
not write the pages.

What a human holds is every decision that makes something public: approving canon,
deciding that a page is published, releasing a build, and everything outside the repository
— deployment, hosting, domain and DNS, provider accounts, and credentials. Agents never
approve canon, publish, or deploy.

The site states this in its own words, on every page and on
[About Red Horizon and how it is made](https://mars-ai-simulation.janpolacek.workers.dev/about/):
every page carries the disclosure that this is AI-generated fiction unaffiliated with any
real space agency, and the imagery is labelled as illustration of the fiction rather than
mission photography. How the harness works is documented in [docs/HARNESS.md](docs/HARNESS.md).

## What runs it

- **Hermes Agent** (Nous Research) — the runtime the agent roles run on, with its
  **kanban board** as the shared task and handoff record: one card is one deliverable, and
  a card's comments are where evidence, decisions, and handoffs are written down.
- **Local models** — the writing, review, and reasoning passes run on models served on the
  operator's own machine. Which model serves which role is machine-local, held in each
  Hermes profile rather than in this repository.
- **ComfyUI** — the imagery is rendered locally by the generator in
  [`tools/visual-generator/`](tools/visual-generator/README.md). That folder is scratch: its
  inputs are copied out of `docs/`, its candidates and run records are git-ignored, and only
  a human-selected export is copied back into the subject's dossier under `docs/`. Its
  README lists the model files each stage loads.
- **Astro 7 with MDX** — builds the site; [`website/`](website/README.md) is the
  application, and articles are authored as MDX in [`website/news/`](website/news/).
- **Cloudflare Workers** — serves the static build through Workers Static Assets
  (`workers_dev`), configured in [`website/wrangler.jsonc`](website/wrangler.jsonc).
- **Node 26.8.2** — pinned in [`website/.node-version`](website/.node-version) and selected
  with `fnm`.
- **Quality gates** — `astro check` (types), `vitest` (tests), `eslint` (lint), `dprint`
  (format, configured in [`dprint.json`](dprint.json)), and the build guard
  [`website/scripts/check-dist.mjs`](website/scripts/check-dist.mjs), which fails a build
  that carries withheld material and prunes it from the output.

## Build and run it

```sh
cd website
fnm use           # Node 26.8.2, from website/.node-version
npm install
npm run dev       # local dev server
npm run build     # static build into dist/, then the build guard (postbuild)
npm run typecheck # astro check
npm test          # vitest
npm run lint      # eslint
```

The public origin is a build input, not a constant. `website/astro.config.mjs` reads
`SITE_URL` and emits no canonical link when it is unset, so a release build supplies it:

```sh
SITE_URL=https://mars-ai-simulation.janpolacek.workers.dev npm run build
```

No domain or origin is hard-coded in the repository, and deployment is not part of any
agent's work: it needs a current human instruction.

## Repository layout

```text
docs/        Documentation, the locked scenario, and one dossier per subject
.agents/     Project-local task skills, and the working papers for articles in flight
website/     The Astro application and its build scripts
tools/       The local image-generation workspace (its scratch output is git-ignored)
```

- [`docs/`](docs/README.md) — what the project is, what is true inside the fiction, the
  rules, the delivery plan, and the dossiers that keep each subject's approved assets beside
  it.
- [`.agents/`](.agents/README.md) — the project-local task skills each role loads,
  catalogued in that same README, plus [`.agents/work/`](.agents/work/): briefs, source
  packs, asset manifests, and editorial reviews for articles in flight. That is working
  material, not documentation.
- [`website/`](website/README.md) — the Astro application: routes, content schema, build
  guards, and [`website/news/`](website/news/), where article copy is authored as MDX.
- [`tools/visual-generator/`](tools/visual-generator/README.md) — the local ComfyUI
  generator. It holds no permanent assets; approved exports live in `docs/`.

Whole-repository files: [`AGENTS.md`](AGENTS.md) (how contributors work, and the kanban
commands), [`dprint.json`](dprint.json) (formatter configuration), and
[`.gitignore`](.gitignore).

### Inside `docs/`

```text
docs/
  GENERAL.md  SCENARIO.md  INSTRUCTIONS.md  PLAN.md   the four root documents
  README.md                                           the file-by-file map of the folder
  HARNESS.md                                          the agent harness and its human gates
  timeline/                                           the private release order, one file per step
  brand/  vehicle/  area/                             one dossier per subject, with its assets
```

- [`docs/GENERAL.md`](docs/GENERAL.md) — intent, audience, vocabulary, and the
  private/public state model.
- [`docs/SCENARIO.md`](docs/SCENARIO.md) — the locked canon: programme identity, partners,
  flight system, calendar, and budget.
- [`docs/INSTRUCTIONS.md`](docs/INSTRUCTIONS.md) — the rules every human and agent follows,
  including what agents may not do without a human.
- [`docs/PLAN.md`](docs/PLAN.md) — the delivery phases and the order of work.
- [`docs/timeline/`](docs/timeline/README.md) — the private release order: one numbered file
  per mission step, which controls when a fact may become public.
- [`docs/brand/`](docs/brand/BRAND.md) — the approved visual identity and its mark.
- [`docs/vehicle/`](docs/vehicle/VEHICLE.md) — the RH-01 Pathfinder dossier and its reference
  renders.
- [`docs/area/`](docs/area/AREA.md) — the Asteria Field dossier and its map plates.
- [`docs/README.md`](docs/README.md) — the file-by-file map of the whole folder.
- [`docs/HARNESS.md`](docs/HARNESS.md) — the agent harness: its roles, tools and models,
  task tracking, and where the human gates are.

The layout rule behind that shape: an approved asset stays with the dossier that owns its
subject; article copy is authored as MDX in `website/news/`; per-article working papers are
`.agents/work/`, working material rather than documentation. Nothing is copied between them
by hand — the website imports canonical media straight out of `docs/` at build time and
emits its own hashed copies under `/_astro/`.
