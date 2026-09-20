---
id: b7889730
date: 2026-09-19T20:44:04Z
category: project
tags: mars-ai-simulator,readme,models,budget,hermes
source: tool
---

# mars-ai-simulator README updated 2026-09-19 (in-session commission, no card): op

mars-ai-simulator README updated 2026-09-19 (in-session commission, no card): opening now frames the project as a testbed for Hermes Agent + multi-agent flow, budget-first; new "Models and budget" section lists current per-role assignment from profile configs (planner+reviewer: deepseek-v4-flash via opencode-zen; writer/visuals/dev: inclusionai/ling-3.0-flash-fin:free via NousResearch), historical budget tiers (upstage/solar-pro4:free, minimax-m3, deepseek-v4.1-flash, gpt-5.6-luna), and the image quality split (hosted gpt-image-2-medium via openai-codex = better/published; local ComfyUI Flux 2 Klein + Qwen-Image-Edit = visibly worse, quota fallback only). Removed all dead tools/ references (tools/ dir no longer tracked — deleted in commit 1d6adff; local ComfyUI now lives on the machine at ~/Applications/ComfyUI). Verified: npx dprint check passes on README.md; uncommitted (conservative profile, no push).
