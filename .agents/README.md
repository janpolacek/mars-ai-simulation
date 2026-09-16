# Project-local skills

This directory contains executable task guidance for agents working in the
Mars AI Simulation repository. Use it together with the canonical [agent
playbook](../docs/agents/README.md):

1. Read `docs/INSTRUCTIONS.md` and the relevant role contract in `docs/agents/`.
2. Read the matching skill below for the task procedure and acceptance checks.
3. Follow the narrower boundary if a skill and role contract differ, and record
   any genuine conflict for human resolution.

Skills are procedural extensions, not independent authority. They must not
approve canon, publish content, deploy externally, expose private timeline
material, or override human instructions. The `agents/openai.yaml` files only
provide UI metadata for skill discovery; the `SKILL.md` files are the operative
guidance.

## Skill catalog

| Skill | Role contract(s) | Purpose |
| --- | --- | --- |
| `article-drafting` | [Writer](../docs/agents/writer.md), brand voice | Draft one source-aware article |
| `beads` | Project-wide workflow | Manage durable task state and handoffs |
| `brand-voice` | Cross-cutting | Keep public prose grounded and candid |
| `copy-editing` | [Copy editor](../docs/agents/copy-editor.md), brand voice | Polish copy without changing canon |
| `create-article-workflow` | [Story coordinator](../docs/agents/story-coordinator.md) | Create the serial article task graph |
| `editorial-review` | [Copy editor](../docs/agents/copy-editor.md), [Continuity redactor](../docs/agents/continuity-redactor.md) | Run the final editorial gate |
| `image-generation` | [Visual creator](../docs/agents/visual-creator.md) | Prepare reviewable visual candidates and metadata |
| `project-documentation` | Owning role contract | Revise project guidance and runbooks |
| `research-and-fact-check` | [Story coordinator](../docs/agents/story-coordinator.md) | Build a claim-level source pack |
| `seo-content` | [SEO content specialist](../docs/agents/seo-content.md) | Review honest search intent and metadata |
| `site-deployment` | [Site engineer](../docs/agents/site-engineer.md), [Deployment engineer](../docs/agents/deployment-engineer.md) | Validate locally and prepare authorised release inputs |

If a new skill introduces a new responsibility or approval boundary, add or
update the corresponding role contract in `docs/agents/` first, then add the
skill to this catalog and the playbook mapping.
