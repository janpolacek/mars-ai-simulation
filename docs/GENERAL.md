# General information

## Purpose

Mars AI Simulation is a real-world testbed for multi-agent creative and technical
work. Its fictional output is **Red Horizon**, a plausible international Mars
exploration programme experienced as an ongoing public project rather than a
finished story archive.

The experiment tests local models and agent orchestration across writing, image
and video generation, continuity review, web development, operations, and
deployment. This purpose is stated plainly on the site's About/Method page and
linked in every public-page footer.

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

- A coalition of fictionalised European, American, Japanese, and other research
  partners develops a robotic Mars mission.
- RH-01 Pathfinder is the first surface rover. It maps terrain, examines rocks,
  and proves the coalition's operating model.
- The arc progresses through planning, commitments, payload selection, vehicle
  design, launch choice, launch, cruise, landing, commissioning, exploration,
  repair, and end of life.
- Real agencies and technologies may be referenced only when the content clearly
  distinguishes fact from the fictional Red Horizon narrative. Prefer invented
  institutions for material that could otherwise imply a real endorsement.

## Canon, drafts, and publication

| State | Meaning | May appear on public site? |
| --- | --- | --- |
| `scenario` | Private possible/approved future event | No |
| `proposal` | Agent work awaiting review | No |
| `draft` | Edited candidate, not yet approved | No |
| `approved` | Human-selected canon and asset | Not until scheduled |
| `published` | Released public content | Yes |
| `superseded` | Replaced by a correction or later decision | Keep only with an editorial note |

The private timeline is the authoritative order of events. A public page is
canonical only after human approval. Never reveal later milestones, prompt text,
unselected images, experimental videos, or hidden decision notes through public
content, page metadata, GitHub deployment artifacts, filenames, or alt text.

## Repository and asset boundaries

- This repository contains the Astro application, versioned editorial workflow
  artifacts, approved stable assets, editorial documentation, and project-local
  skills. Workflow artifacts are never public routes unless a human approves and
  the site explicitly includes them.
- `~/Projects/mars-image-gen` contains local ComfyUI workflows, model-specific
  work, prompts, references, generated candidates, and run records.
- Beads contains durable work state, task dependencies, handoffs, and approval
  decisions. It is not a content-management system.
- Hosting credentials, domains, provider API keys, machine-local model files,
  generation prompts, and unapproved media must not be committed. A versioned
  asset manifest may point to a private provenance record without copying it.

## Media policy

Every approved visual needs a stable filename, public caption, meaningful alt
text, a linked story/vehicle subject, approval status, and private provenance
reference. Images must preserve the canonical vehicle silhouette; visual style
cannot overrule established equipment placement or mission chronology.
