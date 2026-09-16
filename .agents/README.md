# Project-local skills

This directory contains the canonical agent guidance for the Mars AI Simulation
repository. Role contracts live in [roles/](roles/); executable task guidance
lives in [skills/](skills/). Start with the [agent playbook](roles/README.md):

1. Read `docs/INSTRUCTIONS.md` and the relevant role contract in `.agents/roles/`.
2. Read the matching skill below for the task procedure and acceptance checks.
3. Follow the narrower boundary if a skill and role contract differ, and record
   any genuine conflict for human resolution.

Skills are procedural extensions, not independent authority. They must not
approve canon, publish content, deploy externally, expose private timeline
material, or override human instructions. The `agents/openai.yaml` files only
provide UI metadata for skill discovery; the `SKILL.md` files are the operative
guidance.

## Skill catalog

| Skill                     | Role contract(s)                                                                             | Purpose                                                |
| ------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `article-drafting`        | [Writer](roles/writer.md), brand voice                                                       | Draft one source-aware article                         |
| `beads`                   | Project-wide workflow                                                                        | Manage durable task state and handoffs                 |
| `brand-voice`             | Cross-cutting                                                                                | Keep public prose grounded and candid                  |
| `copy-editing`            | [Copy editor](roles/copy-editor.md), brand voice                                             | Polish copy without changing canon                     |
| `create-article-workflow` | [Story coordinator](roles/story-coordinator.md)                                              | Create the serial article task graph                   |
| `editorial-review`        | [Copy editor](roles/copy-editor.md), [Continuity redactor](roles/continuity-redactor.md)     | Run the final editorial gate                           |
| `image-generation`        | [Visual creator](roles/visual-creator.md)                                                    | Prepare reviewable visual candidates and metadata      |
| `project-documentation`   | Owning role contract                                                                         | Revise project guidance and runbooks                   |
| `research-and-fact-check` | [Story coordinator](roles/story-coordinator.md)                                              | Build a claim-level source pack                        |
| `seo-content`             | [SEO content specialist](roles/seo-content.md)                                               | Review honest search intent and metadata               |
| `site-deployment`         | [Site engineer](roles/site-engineer.md), [Deployment engineer](roles/deployment-engineer.md) | Validate locally and prepare authorised release inputs |

If a new skill introduces a new responsibility or approval boundary, add or
update the corresponding role contract in `.agents/roles/` first, then add the
skill to this catalog and the playbook mapping.
