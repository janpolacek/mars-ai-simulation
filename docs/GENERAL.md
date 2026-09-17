# General information

This file owns what the project is for, who it is for, the vocabulary it uses, and
the line between private and public material. It does not own mission facts: the
locked canon lives in [Red Horizon scenario](SCENARIO.md). The rules every human and
agent follows live in [Project instructions](INSTRUCTIONS.md), delivery phases and
order live in [Delivery plan](PLAN.md), and [README.md](README.md) maps the rest of
this folder.

## Purpose

Mars AI Simulation is a real-world testbed for multi-agent creative and technical
work. Its fictional output is **Red Horizon**, a plausible international Mars
exploration programme experienced as an ongoing public project rather than a
finished story archive.

The experiment tests local models and agent orchestration across writing, image
and video generation, continuity review, web development, operations, and
deployment. This purpose is stated plainly on the site's About/Method page and
linked in every public-page footer.

The harness that runs it — the role roster, the tools and models, how work is
tracked, and where the human gates are — is described in
[The agent harness](HARNESS.md).

## Audience and public experience

The site serves curious space readers and people interested in the creative
process. A reader should be able to understand the current mission state from a
single page, then explore deeper news and wiki links without needing to know the
private scenario or technical stack.

The default public voice is a careful, optimistic project newsroom: direct,
specific, and calm under uncertainty. It is neither a governmental archive nor a
conspiracy publication. Updates acknowledge trade-offs and setbacks without
manufacturing drama.

## Story world

The fiction's own facts — the programme and mission identity, the partner coalition
and its governance, the flight-system architecture, the calendar, and the budget —
are locked in [Red Horizon scenario](SCENARIO.md), which owns them. This file does
not restate them, because a second copy here would drift from the canon as it
changes. The [private timeline](timeline/README.md) owns the order in which those
facts may become public, and the [vehicle dossier](vehicle/VEHICLE.md) and
[area dossier](area/AREA.md) own the vehicle and landing-region detail.

The boundaries that hold everywhere in the project:

- Real agencies and technologies may be referenced only when the content clearly
  distinguishes fact from the fictional Red Horizon narrative.
- Prefer invented institutions for material that could otherwise imply a real
  endorsement.

## Terminology

Use these terms as written. The linked owner file holds the definition; this table
is only the shared vocabulary.

| Term              | Meaning                                                                               | Owner                                  |
| ----------------- | ------------------------------------------------------------------------------------- | -------------------------------------- |
| Red Horizon       | The fictional Mars programme, and the fiction's public name                           | [Scenario](SCENARIO.md)                |
| Red Horizon One   | The programme's first mission                                                         | [Scenario](SCENARIO.md)                |
| RH-01 Pathfinder  | The mission's surface rover; the subject of the canonical vehicle dossier             | [Vehicle dossier](vehicle/VEHICLE.md)  |
| Asteria Field     | The fictional landing and traverse region; not an official place name                 | [Area dossier](area/AREA.md)           |
| Timeline step     | One numbered file under `docs/timeline/`; the unit that controls release order        | [Timeline](timeline/README.md)         |
| Dossier           | A reference document about one subject, not per-article work                          | [docs map](README.md)                  |
| Working paper     | A per-article artifact under `.agents/work/`: brief, source pack, manifest, or review | [docs map](README.md)                  |
| Publication state | Where a fact or page sits between private scenario and published content              | [below](#canon-drafts-and-publication) |
| Preparing         | The site's opening public state: identity, promise, and disclosure only               | [Delivery plan](PLAN.md) Phase 1       |

## Canon, drafts, and publication

| State        | Meaning                                    | May appear on public site?       |
| ------------ | ------------------------------------------ | -------------------------------- |
| `scenario`   | Private possible/approved future event     | No                               |
| `proposal`   | Agent work awaiting review                 | No                               |
| `draft`      | Edited candidate, not yet approved         | No                               |
| `approved`   | Human-selected canon and asset             | Not until scheduled              |
| `published`  | Released public content                    | Yes                              |
| `superseded` | Replaced by a correction or later decision | Keep only with an editorial note |

The private timeline is the authoritative order of events. A public page is
canonical only after human approval. Never reveal later milestones, prompt text,
unselected images, experimental videos, or hidden decision notes through public
content, page metadata, GitHub deployment artifacts, filenames, or alt text.

## Repository and asset boundaries

The rules for where each kind of file lives are in
[Project instructions](INSTRUCTIONS.md); the file-by-file map is
[docs/README.md](README.md). What follows is the boundary behind that layout.

- This repository contains the Astro application, versioned editorial workflow
  artifacts, approved stable assets, editorial documentation, and project-local
  skills. Workflow artifacts are never public routes unless a human approves and
  the site explicitly includes them.
- `tools/visual-generator/` is a processor, not a store: its prompts, references,
  generated candidates, and run records stay there, are ignored by Git, and are not
  a second project source root.
- The Hermes kanban board contains durable work state, task dependencies,
  handoffs, and approval decisions. It is not a content-management system.
- Do not create a parallel project-root `assets/` directory. Articles are authored
  as MDX directly in `website/news/`, and approved media is published only through
  the website's generated public asset copy.
- Hosting credentials, domains, provider API keys, machine-local model files,
  generation prompts, and unapproved media must not be committed. A versioned
  asset manifest may point to a private provenance record without copying it.

## Media policy

Every approved visual needs a stable filename, public caption, meaningful alt
text, a linked story/vehicle subject, approval status, and private provenance
reference. Images must preserve the canonical vehicle silhouette; visual style
cannot overrule established equipment placement or mission chronology.
