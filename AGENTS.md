# Agent Instructions

## Mars AI Simulation operating rules

Before making product, editorial, media, site, deployment, or documentation
changes, read `docs/INSTRUCTIONS.md`, your own role definition (your agent's
`SOUL.md`), and the matching project-local skill under `.agents/skills/` when one
exists. Role authority lives with the agent, not in this repository; the
[skill catalog](.agents/README.md) defines task procedures.
The private mission timeline (`docs/timeline/`) is continuity material only: never
place its unreleased content in public routes, metadata, assets, or summaries.

Agents prepare bounded, reviewable deliverables. A human alone approves public
canon, content publication, external deployments, hosting credentials, domain/DNS
changes, and media uploads. Technical agents may implement local site work and
validate builds but must not deploy or configure external services without a
separate current human instruction.

## Content workflow policy

- `docs/` is the project documentation and content root; article handoffs and
  identity sources belong under `docs/content/`. Do not create a parallel root
  `assets/` directory; `tools/visual-generator/assets/` is tool-local only.
- The Hermes kanban board is the source of truth for article state and
  dependencies.
- Claim one ready card before editing; work only within its acceptance criteria.
- Persist handoffs in repository artifacts and card comments
  (`hermes kanban comment <id> "..."`), never only in chat.
- Cite a canonical source for every material factual claim.
- Editorial approval is required before technical validation; human canon and
  release approval are still required before any public deployment.
- Do not overwrite another worker's artifact without a kanban-linked corrective
  card. Record paths, URLs, commands, and verification results before closing.

Use the matching project-local skill in `.agents/skills/` for task-specific
procedures. Skills supplement the agent's own role definition (its `SOUL.md`);
they must not broaden a role's authority or override project instructions.

This project uses the **Hermes kanban board** (`hermes kanban`) for task tracking:
a SQLite queue shared by every Hermes profile on this machine. One card is one
deliverable with one assignee profile, and cards scope to this repository only
through `--workspace dir:/home/janpolacek/Projects/mars-ai-simulator` (the
`--project` flag is not used). Read `docs/INSTRUCTIONS.md` and the matching
project skill, then run `hermes kanban list --mine` (or
`hermes kanban list --status ready`) to refresh tracker context.

> **Architecture in one line:** cards live in a local SQLite board shared by all
> Hermes profiles on this machine. The board is machine-local: there is no remote
> and no cross-machine sync to run, so the durable record for a task is the
> repository artifact plus the card's result and comments.

Task tracking was previously **Beads** (`bd`). It is retired in this repository:
its Dolt database, git hooks, and Codex integration are gone, and the 32 closed
issues are archived read-only at `docs/beads-archive.jsonl`. Do not re-initialise
Beads here, and do not keep agent memory in it — agent memory belongs to the role
profile (its built-in memory and its own Mnemosyne vault), not to the repository.

## Quick Reference

```bash
hermes kanban list --status ready   # Find available work
hermes kanban list --mine           # Find work assigned to your profile
hermes kanban show <id>             # View card details
hermes kanban claim <id>            # Claim work atomically
hermes kanban comment <id> "..."    # Record a handoff note
hermes kanban complete <id> --result "..." --summary "..."  # Complete work
```

## Non-Interactive Shell Commands

**ALWAYS use non-interactive flags** with file operations to avoid hanging on confirmation prompts.

Shell commands like `cp`, `mv`, and `rm` may be aliased to include `-i` (interactive) mode on some systems, causing the agent to hang indefinitely waiting for y/n input.

**Use these forms instead:**

```bash
# Force overwrite without prompting
cp -f source dest           # NOT: cp source dest
mv -f source dest           # NOT: mv source dest
rm -f file                  # NOT: rm file

# For recursive operations
rm -rf directory            # NOT: rm -r directory
cp -rf source dest          # NOT: cp -r source dest
```

**Other commands that may prompt:**

- `scp` - use `-o BatchMode=yes` for non-interactive
- `ssh` - use `-o BatchMode=yes` to fail instead of prompting
- `apt-get` - use `-y` flag
- `brew` - use `HOMEBREW_NO_AUTO_UPDATE=1` env var

## Agent Context Profiles

This task-tracking guidance is not permission to override repository, user, or
orchestrator instructions.

- **Conservative (default)**: Use the Hermes kanban board for task tracking. Do not run git commits or git pushes unless explicitly asked. At handoff, report changed files, validation, suggested next commands, and the proposed card status.
- **Minimal**: Keep tool instruction files as pointers to `docs/INSTRUCTIONS.md`; use the same conservative git policy unless active instructions say otherwise.
- **Team-maintainer**: Only when the repository explicitly opts in, agents may complete cards, run quality gates, commit, and push as part of session close. A current "do not commit" or "do not push" instruction still wins.

## Session Completion

This protocol applies when ending a kanban implementation workflow. It is
subordinate to explicit user, repository, and orchestrator instructions.

1. **File cards for remaining work** - Create kanban cards for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update card status** - Complete finished cards, comment on in-progress items
4. **Handle git by active profile**:
   ```bash
   # Conservative/minimal/default: report status and proposed commands; wait for approval.
   git status

   # Team-maintainer opt-in only, unless current instructions forbid it:
   git pull --rebase
   git push
   git status
   ```
5. **Hand off** - Summarize changes, validation, card status, and any blocked commit/push step

**Critical rules:**

- Explicit user or orchestrator instructions override this block.
- Do not commit or push without clear authority from the active profile or the current user request.
- If a required push is blocked, stop and report the exact command and error.
