---
id: fe2fb31e
date: 2026-09-17T13:22:35Z
category: project
tags: mars-ai-simulator,kanban,skills,worktree,trust,pitfall,dprint
source: tool
---

# Mars AI Simulator — worktree-scoped kanban cards die at spawn on the project-ski

Mars AI Simulator — worktree-scoped kanban cards die at spawn on the project-skill trust gate (diagnosed 2026-09-17 on card t_c8d5d167, "add a dprint pre-commit hook").

Symptom: worker exits 1 in ~60s, twice, then gave_up -> blocked; last_failure_error and the worker log's only output is "Error: Unknown skill(s): site-deployment" (raised at cli.py:3099 when EVERY requested --skills name is unknown). Same failure had already archived the scratch-workspace card t_cc5688ba.

Root cause (agent/skill_utils.py): find_project_root() = nearest ancestor containing .git (dir OR worktree file), starting from the surface cwd; is_project_root_trusted() requires that root to be listed EXACTLY in skills.trusted_project_dirs. A worktree's nearest .git ancestor is the worktree root (.worktrees/<card>/.git is a file), which is not the trusted shared-checkout path, so the profile loads ZERO project skills (from .agents/skills) and every --skills NAME the board passes is unresolvable. Measured probe from .worktrees/t_c8d5d167: project root=.worktrees/t_c8d5d167, trusted=False, project skills=[], untrusted root reported with 11 skills; from the shared checkout: trusted=True, 11 skills.

Fix that works without a core edit: trust that worktree root in the card's profile — `hermes -p <profile> skills trust <worktree-root>` (writes that profile's skills.trusted_project_dirs; the shared-checkout entry stays). Then `hermes kanban unblock <id>` — unblock_task resets consecutive_failures to 0 (a deliberate unblock is a fresh retry budget) and the dispatcher re-spawns into the same pinned worktree. Verified: probe trusted=True, argv carried --skills site-deployment, worker logged "the site-deployment skill (already preloaded)", status running.

Rule for future worktree cards: trust the worktree root before/at dispatch, or the spawn fails on skills before any work happens. Cards with workspace_kind=dir on /home/janpolacek/Projects/mars-ai-simulator are unaffected (that path is trusted). A general fix would make the trust check resolve a worktree to its main checkout (git-common-dir) — not done.
