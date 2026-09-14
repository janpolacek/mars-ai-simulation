# Project Instructions for AI Agents

This file provides instructions and context for AI coding agents working on this project.

## Mars AI Simulation operating rules

Before making product, editorial, media, site, or deployment changes, read
`docs/INSTRUCTIONS.md` and the matching role contract under `docs/agents/`.
The private mission timeline (`docs/timeline/`) is continuity material only: never
place its unreleased content in public routes, metadata, assets, or summaries.

Agents prepare bounded, reviewable deliverables. A human alone approves public
canon, content publication, external deployments, hosting credentials, domain/DNS
changes, and media uploads. Technical agents may implement local site work and
validate builds but must not deploy or configure external services without a
separate current human instruction.

Use project-local skills in `.agents/skills/` for SEO content, project Markdown,
Red Horizon brand voice, and copy editing when relevant.

<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:6cd5cc61 -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

**Architecture in one line:** issues live in a local Dolt DB; sync uses `refs/dolt/data` on your git remote; `.beads/issues.jsonl` is a passive export. See https://github.com/gastownhall/beads/blob/main/docs/SYNC_CONCEPTS.md for details and anti-patterns.

## Agent Context Profiles

The managed Beads block is task-tracking guidance, not permission to override repository, user, or orchestrator instructions.

- **Conservative (default)**: Use `bd` for task tracking. Do not run git commits, git pushes, or Dolt remote sync unless explicitly asked. At handoff, report changed files, validation, and suggested next commands.
- **Minimal**: Keep tool instruction files as pointers to `bd prime`; use the same conservative git policy unless active instructions say otherwise.
- **Team-maintainer**: Only when the repository explicitly opts in, agents may close beads, run quality gates, commit, and push as part of session close. A current "do not commit" or "do not push" instruction still wins.

## Session Completion

This protocol applies when ending a Beads implementation workflow. It is subordinate to explicit user, repository, and orchestrator instructions.

1. **File issues for remaining work** - Create beads for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **Handle git/sync by active profile**:
   ```bash
   # Conservative/minimal/default: report status and proposed commands; wait for approval.
   git status

   # Team-maintainer opt-in only, unless current instructions forbid it:
   git pull --rebase
   git push
   git status
   ```
5. **Hand off** - Summarize changes, validation, issue status, and any blocked sync/commit/push step

**Critical rules:**
- Explicit user or orchestrator instructions override this Beads block.
- Do not commit or push without clear authority from the active profile or the current user request.
- If a required sync or push is blocked, stop and report the exact command and error.
<!-- END BEADS INTEGRATION -->


## Build & Test

The Astro application has not yet been bootstrapped. When it exists, document the
exact install, type-check, content-validation, build, and link-check commands
here. Do not mark a release ready unless its production build succeeds and proves
that private timeline and non-published content are excluded.

## Architecture Overview

This will be a static Astro + MDX site with typed collections for news, wiki,
mission updates, and media. `docs/` contains project and private continuity
material; it is not public application content. See `docs/PLAN.md` for the staged
architecture and `docs/GENERAL.md` for repository boundaries.

## Conventions & Patterns

- Keep public content Markdown/MDX-first and enforce state filtering in the
  application rather than relying on author discipline.
- Treat selected ComfyUI exports as immutable assets. Candidate images and raw
  workflows stay in `~/Projects/mars-image-gen`.
- Record durable work and approvals in Beads, not Markdown task lists.
