---
id: c4076068
date: 2026-09-17T11:58:56Z
category: fact
tags: mars-ai-simulator, kanban, profiles, model-tiers, respawn-guard
source: tool
---

# mars-ai-simulator fleet, 2026-09-17: the 003-vehicle-design chain (SEO → visuals

mars-ai-simulator fleet, 2026-09-17: the 003-vehicle-design chain (SEO → visuals → continuity → editorial gate → build/deploy → release, container 'Article' hung off release) was stalled with its 6 cards sitting in the Workspace-UI Triage lane. Two stacked causes, both now fixed: (1) profile mars-ai-simulator-seo had `model: mimo-v2.5` as a BARE SCALAR, so the provider was inferred as OpenRouter and every worker died in ~3s with HTTP 401 'Missing Authentication header'; rewritten to the mapping form (default mimo-v2.5 / provider opencode-go / base_url https://opencode.ai/zen/go/v1 / api_mode chat_completions) and verified answering on the primary. (2) card t_e48168fa (SEO pass) was then parked forever by the respawn guard's auth regex reading the stale 401 text — cleared via block→unblock (kanban assign did NOT clear it). Dispatcher re-spawned it (run 126) and the chain now flows stage by stage. Note: the Workspace UI Kanban's 'Triage' column = Hermes status `todo`, i.e. cards waiting on unfinished parents — cards sitting there are dependency-queued, not broken.
