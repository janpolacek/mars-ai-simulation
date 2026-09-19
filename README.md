# Mars AI Simulation

**Mars AI Simulation is a testbed for Hermes Agent and its multi-agent flow.** The purpose
is the experiment: a human operator runs a roster of specialised agents — planner, writer,
reviewer, visuals, and developer — that research, draft, review, illustrate, implement, and
validate a real website end to end, and the question being tested is whether that
orchestration can carry a real project. The orchestration is the experiment; the fiction
the team produces is the workload that makes it observable.

The operation is deliberately budget-first: every role runs on a cheap or free model
([Models and budget](#models-and-budget)), because what is being tested is the flow, not
the model. Strong frontier models would raise the cost without adding anything to the
experiment.

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
editorial review passes, the search and metadata review, the image generation through a
hosted image model with a local ComfyUI fallback, the implementation of the site, and its
local validation. A human does not write the pages.

What a human holds is every decision that makes something public: approving canon,
deciding that a page is published, and releasing it. Agents never approve canon or
publish, and no agent runs a deploy command. The public site is connected to a
Cloudflare Workers Build, so pushing to `main` deploys the build automatically — which
is why a push that carries content into the public site is a release, and waits for the
human approval recorded on its release card. Everything outside the repository —
hosting configuration, domain and DNS, provider accounts, and credentials — is a human
action.

The site states this in its own words, on every page and on
[About Red Horizon and how it is made](https://mars-ai-simulation.janpolacek.workers.dev/about/):
every page carries the disclosure that this is AI-generated fiction unaffiliated with any
real space agency, and the imagery is labelled as illustration of the fiction rather than
mission photography. How the harness works is documented in [docs/HARNESS.md](docs/HARNESS.md).

## What runs it

- **Hermes Agent** (Nous Research) — the runtime the agent roles run on, with its
  **kanban board** as the shared task and handoff record: one card is one deliverable, and
  a card's comments are where evidence, decisions, and handoffs are written down.
- **Image generation** — imagery is produced through the Hermes `image_generate` tool
  (provider `openai-codex`, model `gpt-image-2-medium`). The hosted GPT model produces the
  better images, and published imagery comes from this path. The local ComfyUI installation
  (Flux 2 Klein for text-to-image, Qwen-Image-Edit for edits) produces visibly worse
  renders and is used only as a fallback when the hosted quota is exhausted. Candidates and
  their provenance stay in the visuals profile's image cache, outside this repository, and
  only a human-selected export is copied into the subject's dossier under `docs/`.
- **Astro 7 with MDX** — builds the site; [`website/`](website/README.md) is the
  application, and articles are authored as MDX in [`website/news/`](website/news/).
- **Cloudflare Workers** — serves the static build through Workers Static Assets
  (`workers_dev`), configured in [`website/wrangler.jsonc`](website/wrangler.jsonc).
- **Node 26.8.2** — pinned in [`website/.node-version`](website/.node-version) and selected
  with `fnm`.
- **Quality gates** — `astro check` (types), `vitest` (tests), `eslint` (lint), `dprint`
  (format, configured in [`dprint.json`](dprint.json) and provided by `npm install` from the
  pinned `dprint` dev dependency), and the build guard
  [`website/scripts/check-dist.mjs`](website/scripts/check-dist.mjs), which fails a build
  that carries withheld material and prunes it from the output.

The harness as the operator sees it: the _Tasks_ board that tracks the work, and the
_Assistants_ grid that holds the role profiles.

![The Hermes Workspace Tasks board: the Triage, Ready, Running, Review, and Blocked
columns, with one card per deliverable showing its stage and its assigned role
profile.](docs/harness/hermes-workspace-tasks.png)

_The Tasks board: one card per deliverable, its stage, and its assigned role profile — a
screenshot of the operator's local harness, not mission imagery._

![The Hermes Workspace Assistants grid: the operator profile and the seven
mars-ai-simulator role profiles, each with its description.](docs/harness/hermes-workspace-assistants.png)

_The Assistants grid: the operator profile and the seven `mars-ai-simulator-<role>` profiles
the harness runs — a screenshot of the operator's local harness, not mission imagery._

Both are screenshots of the operator's own machine, so they show working state rather
than canon. Their source paths, capture dates, and hashes are recorded in
[`docs/harness/`](docs/harness/README.md).

## Models and budget

The experiment is about the multi-agent flow, so every role runs on a cheap or free
model — deliberately no frontier model. The current assignment (2026-09-19) lives in each
Hermes profile on the operator's machine:

| Role (Hermes profile)                   | Model                                 | Provider     |
| --------------------------------------- | ------------------------------------- | ------------ |
| Planner (`mars-ai-simulator-planner`)   | `deepseek-v4-flash`                   | opencode-zen |
| Reviewer (`mars-ai-simulator-reviewer`) | `deepseek-v4-flash`                   | opencode-zen |
| Writer (`mars-ai-simulator-writer`)     | `inclusionai/ling-3.0-flash-fin:free` | NousResearch |
| Visuals (`mars-ai-simulator-visuals`)   | `inclusionai/ling-3.0-flash-fin:free` | NousResearch |
| Developer (`mars-ai-simulator-dev`)     | `inclusionai/ling-3.0-flash-fin:free` | NousResearch |

Both are hosted, budget-tier APIs (opencode.ai's Zen relay and the NousResearch inference
API); nothing in the roster runs on a frontier model. Staying mostly on budget is the
point: the operation costs almost nothing to run, and the capability ceiling of the models
is part of what the orchestration has to absorb. Earlier passes tried other budget tiers —
`upstage/solar-pro4:free`, `minimax-m3`, `deepseek-v4.1-flash`, `gpt-5.6-luna` — before
settling on the pair above. Image models are the one deliberate exception to the budget
rule, and they show it: the hosted GPT model (`gpt-image-2-medium`) produces the good
imagery, while the local Flux 2 Klein / Qwen-Image-Edit fallback produces visibly worse
renders and is only pulled in when the hosted quota runs out.

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
npm run format:check # dprint check (see below)
```

The formatter is configured at the repository root, so it runs over the whole tree rather than
the site alone:

```sh
npm run format:check # dprint check — reports offences, rewrites nothing
npm run format       # dprint fmt — applies them
```

`dprint` comes from the `dprint` dev dependency pinned in
[`website/package.json`](website/package.json), so `npm install` provides it; the plugins pinned
in [`dprint.json`](dprint.json) download on the first run. The tracked tree still carries files
`dprint` would reformat, so run `format:check` to see the current state — a repository-wide
reflow is its own change, not part of an unrelated one.

The public origin is a build input, not a constant. `website/astro.config.mjs` reads
`SITE_URL` and emits no canonical link when it is unset, so a release build supplies it:

```sh
SITE_URL=https://mars-ai-simulation.janpolacek.workers.dev npm run build
```

No domain or origin is hard-coded in the repository. No agent runs a deploy command, and
none is needed: `main` is connected to the Cloudflare Workers Build, so a push to `main`
deploys the build automatically. A push that carries a release into the public site is
therefore a publication, and needs the human approval recorded on its release card.

## Repository layout

```text
docs/        Documentation, the locked scenario, and one dossier per subject
.agents/     Project-local task skills, and the working papers for articles in flight
website/     The Astro application and its build scripts
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
  brand/  vehicles/  area/                             one dossier per subject, with its assets
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
- [`docs/vehicles/`](docs/vehicles/) — one folder per vehicle: `ariane/` holds the Ariane 64
  launch-vehicle dossier, `pathfinder/` the RH-01 Pathfinder rover dossier and its reference
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
