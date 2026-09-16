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

| Skill                     | Owning profile                                                                                | Purpose                                                |
| ------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `article-drafting`        | Profile `writer`, brand voice                                                       | Draft one source-aware article                         |
| `beads`                   | Project-wide workflow                                                                        | Manage durable task state and handoffs                 |
| `brand-voice`             | Cross-cutting                                                                                | Keep public prose grounded and candid                  |
| `copy-editing`            | Profile `editor`, brand voice                                             | Polish copy without changing canon                     |
| `create-article-workflow` | Profile `planner`                                              | Create the serial article task graph                   |
| `editorial-review`        | Profiles `editor` + `continuity`     | Run the final editorial gate                           |
| `image-generation`        | Profile `visuals`                                                    | Prepare reviewable visual candidates and metadata      |
| `project-documentation`   | Owning profile's `SOUL.md`                                                                         | Revise project guidance and runbooks                   |
| `research-and-fact-check` | Profile `planner`                                                                             | Build a claim-level source pack                        |
| `seo-content`             | Profile `seo`                                               | Review honest search intent and metadata               |
| `site-deployment`         | Profile `dev` | Validate locally and prepare authorised release inputs |

If a new skill introduces a new responsibility or approval boundary, update the
corresponding agent profile's `SOUL.md` first, then add the skill to this catalog.
