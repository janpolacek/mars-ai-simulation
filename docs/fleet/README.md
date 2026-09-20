# Fleet archive — the Mars AI Simulator agent fleet (2026-09-20)

This directory preserves the agent fleet behind the Red Horizon project so the
project can be sunset and archived without losing how it was built: each role's
definition (`SOUL.md`), its profile metadata (`profile.yaml`), the model wiring
in use, the built-in per-profile memories, and the project memories recorded in
the shared Mnemosyne vault during the project's run (2026-09-16 → 2026-09-20).

The definitive task record is the Hermes kanban board (machine-local SQLite,
all cards done at sunset). This archive captures the _actors_, not the
transcript; the board itself is not replicated here.

## Roles

Five profiles were live at sunset, on this machine under
`~/.hermes/profiles/mars-ai-simulator-*`. Three earlier roles were merged into
them on 2026-09-18 and exist only in the hermes-backup git snapshot of
2026-09-16 23:00 (kept here under `profiles/retired/`).

| Profile                        | Role title                 | Status                                    | Model (default)                       | Provider / base_url                                  |
| ------------------------------ | -------------------------- | ----------------------------------------- | ------------------------------------- | ---------------------------------------------------- |
| `mars-ai-simulator-dev`        | Software developer (coder) | live at sunset                            | `inclusionai/ling-3.0-flash-fin:free` | `nous` / `https://inference-api.nousresearch.com/v1` |
| `mars-ai-simulator-planner`    | Story coordinator          | live at sunset                            | `deepseek-v4-flash`                   | `opencode-zen` / `https://opencode.ai/zen/v1`        |
| `mars-ai-simulator-reviewer`   | Reviewer-in-chief          | live at sunset                            | `deepseek-v4-flash`                   | `opencode-zen` / `https://opencode.ai/zen/v1`        |
| `mars-ai-simulator-visuals`    | Visual creator             | live at sunset                            | `inclusionai/ling-3.0-flash-fin:free` | `nous` / `https://inference-api.nousresearch.com/v1` |
| `mars-ai-simulator-writer`     | Writer                     | live at sunset                            | `inclusionai/ling-3.0-flash-fin:free` | `nous` / `https://inference-api.nousresearch.com/v1` |
| `mars-ai-simulator-editor`     | Copy editor                | retired 2026-09-18 (merged into reviewer) | `deepseek-v4.1-flash`                 | `opencode-go` / `https://opencode.ai/zen/go/v1`      |
| `mars-ai-simulator-seo`        | SEO redactor               | retired 2026-09-18 (merged into writer)   | `deepseek-v4.1-flash`                 | `opencode-go` / `https://opencode.ai/zen/go/v1`      |
| `mars-ai-simulator-continuity` | Continuity redactor        | retired 2026-09-18 (merged into reviewer) | `mimo-v2.5-free`                      | `opencode-free` / `https://opencode.ai/zen/v1`       |

Model/provider/base_url are the operative wiring; the full `config.yaml` is not
archived. Retired-profile model lines are from the 2026-09-16 backup and reflect
that date, not the day of the merge.

## Layout

- `profiles/<profile>/SOUL.md` — the role definition (authoritative for the role's
  authority and boundaries; the project deliberately kept role contracts out of the
  repository while it ran).
- `profiles/<profile>/profile.yaml` — profile metadata (description, UI group).
- `profiles/<profile>/MEMORY.md` — the profile's built-in memory at sunset
  (present for dev, reviewer, visuals, writer; planner had none; retired profiles
  had none captured).
- `profiles/retired/<profile>/` — SOUL.md and profile.yaml from the
  2026-09-16 backup snapshot for the three merged roles.
- `mnemosyne-2026-09/` — 14 project memory notes from the shared Mnemosyne vault
  (`~/obsidian-vault/hermes-memory/`), files named `YYYY-MM-DD-<slug>.md`; the
  vault is a machine-local markdown store, and these are its Mars AI Simulator
  entries.

## What is deliberately not here

Credentials and private state are excluded by design: `auth.json`, per-profile
`.env` files, provider keys, the kanban/state databases (conversation history),
caches, and image-generation records (the visuals profile's
`cache/images/`). None of those are needed to understand the fleet, and none
belong in a repository. Restoring the fleet on a new machine re-authenticates
providers (`hermes auth`) rather than copying secrets.

## Known drift in the archived text

The SOULs are point-in-time artifacts and were archived unchanged. Some
references are stale relative to the final state:

- The writer SOUL still names `mars-ai-simulator-editor` as the release gate;
  since 2026-09-18 that authority lives in `mars-ai-simulator-reviewer`.
- The planner SOUL describes local ComfyUI planning constraints that no longer
  apply after the hosted-image switch (2026-09-17); the visuals SOUL reflects the
  hosted path and is the current one.
- `docs/harness/` screenshots caption seven role profiles; five existed at
  sunset (the three merged roles retired).

## Recreating the fleet

```bash
hermes profile create mars-ai-simulator-<role>   # per role
# copy the role's SOUL.md and profile.yaml into ~/.hermes/profiles/<name>/
# set the model block (model.default / model.provider / model.base_url) as in the table
hermes auth   # authenticate the providers the role's model wiring needs
```

The project skills these roles operated with live on in the repository at
`.agents/skills/` (catalogued in `.agents/README.md`), and the operating rules
in `AGENTS.md` and `docs/INSTRUCTIONS.md` remain the procedural record.
