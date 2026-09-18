# Retired tools

Nothing under this directory is live. It is kept read-only so the repository keeps the
historical record of a retired procedure, and so the version that was in the live tool
tree stays readable next to the scratch it produced. No skill, role, or card runs a tool
from here: each retired tool names the path that replaced it, and restoring one takes a
current human instruction.

| Tool                | Retired    | Replaced by                                                                                                                                                                                                                                          |
| ------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `visual-generator/` | 2026-09-17 | The hosted image path: the Hermes `image_generate` tool, provider `openai-codex`, model `gpt-image-2-medium`. Its local ComfyUI stages survive only as the documented fallback in [`image-generation`](../.agents/skills/image-generation/SKILL.md). |

## `visual-generator/`

The local ComfyUI generator was retired by the operator on 2026-09-17 — _archive tool
inside project to generate images (sunset), since we use gpt images for much better
quality_ — and moved out of the live tool tree by card `t_ad6d3fb3`. It was the tool
behind the `mars-ai-simulator-visuals` role: a standard-library driver for the local
ComfyUI server that rendered a vehicle in three stages (canonical reference, derived
camera views, scene) from a per-run job spec.

Two things stay with it on purpose:

- **Its scratch stays beside it.** `spec.json`, `assets/`, `stories/` and the other
  paths named in its own `.gitignore` are still ignored where the tool now sits, so the
  candidate renders and run records that produced already-published assets remain on
  this machine as their private provenance record. They are never committed.
- **Its body is unchanged apart from the retirement banner.** A move must not rewrite
  what it moves, so the archived `README.md` still describes the stages, the model
  files, and the commands as they were — under a banner that says plainly they are
  historical.

The live procedure for the local fallback is
[`mars-story-toolset`](../.agents/skills/mars-story-toolset/SKILL.md); the production
path, its candidate cache, and its provenance requirements are
[`image-generation`](../.agents/skills/image-generation/SKILL.md).
