# Project-local skills

This directory contains the project-local task guidance for the Mars AI Simulation
repository. Role definitions live with the agent — each role is a Hermes profile
whose `SOUL.md` holds its authority, boundaries, and handoff duties — while
executable task guidance lives in [skills/](skills/).

1. Read `docs/INSTRUCTIONS.md` and your own role definition (your agent's `SOUL.md`).
2. Read the matching skill below for the task procedure and acceptance checks.
3. Follow the narrower boundary if a skill and your role definition differ, and
   record any genuine conflict for human resolution.

Skills are procedural extensions, not independent authority. They must not
approve canon, publish content, deploy externally, expose private timeline
material, or override human instructions. The `agents/openai.yaml` files only
provide UI metadata for skill discovery; the `SKILL.md` files are the operative
guidance.

## Skill catalog

| Skill                     | Owning profile                                             | Purpose                                                                                                 |
| ------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `article-drafting`        | Profile `mars-ai-simulator-writer`, brand voice            | Draft one source-aware article                                                                          |
| `brand-voice`             | Cross-cutting                                              | Keep public prose grounded and candid                                                                   |
| `copy-editing`            | Profile `mars-ai-simulator-reviewer`, brand voice          | Polish copy without changing canon                                                                      |
| `create-article-workflow` | Profile `mars-ai-simulator-planner`                        | Create the serial article task graph                                                                    |
| `editorial-review`        | Profile `mars-ai-simulator-reviewer`                       | Run the continuity check, the final editorial gate, the simulated record date, and the release decision |
| `image-generation`        | Profile `mars-ai-simulator-visuals`                        | Prepare reviewable visual candidates and metadata                                                       |
| `image-index`             | Cross-cutting (maintained by `mars-ai-simulator-reviewer`) | Single index of every project image (`.agents/work/image-index.md`); consult it before requesting art   |
| `mars-story-toolset`      | Profile `mars-ai-simulator-visuals`                        | Render vehicle references and scenes through the retired local ComfyUI fallback                         |
| `project-documentation`   | Owning profile's `SOUL.md`                                 | Revise project guidance and runbooks                                                                    |
| `research-and-fact-check` | Profile `mars-ai-simulator-planner`                        | Build a claim-level source pack                                                                         |
| `seo-content`             | Profile `mars-ai-simulator-writer`                         | Apply honest search intent and metadata during drafting                                                 |
| `site-deployment`         | Profile `mars-ai-simulator-dev`                            | Validate locally and prepare authorised release inputs                                                  |

Task tracking is not a project skill: the Hermes kanban board and its commands
are described in [AGENTS.md](../AGENTS.md), the article graph mechanics are in
[`create-article-workflow`](skills/create-article-workflow/SKILL.md), and the role
authority for each card lives in the assignee profile's `SOUL.md`, not here.

Per-article working papers live in [work/](work/): briefs, source packs, asset
manifests, and editorial reviews for articles in flight. They are pipeline working
material, not documentation — the documentation tree is mapped in
[docs/README.md](../docs/README.md).

If a new skill introduces a new responsibility or approval boundary, update the
corresponding agent profile's `SOUL.md` first, then add the skill to this catalog.

## Retired tools

`tools/visual-generator/`, the local ComfyUI generator behind the `mars-story-toolset`
fallback and the earlier `image-generation` procedure, was retired by the operator on
2026-09-17 (_archive tool inside project to generate images (sunset), since we use gpt images
for much better quality_) and moved out of the live tool tree to
`tools/archive/visual-generator/` (card `t_ad6d3fb3`). The production path is the hosted
`image_generate` tool — provider `openai-codex`, model `gpt-image-2-medium` — documented in
[`image-generation`](skills/image-generation/SKILL.md). Do not restore the local tool, and do
not run it as the production path, without a current human instruction.
