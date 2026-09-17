# Harness screenshots

Two operator-selected screenshots of the local Hermes Workspace. They illustrate the harness that
[the harness document](../HARNESS.md) describes: the _Tasks_ board that tracks the work, and the
_Assistants_ grid that holds the role profiles.

They are screenshots of the operator's own machine — the harness's working state, not mission
imagery, and not a depiction of the fiction. They are repository-facing: the website imports
neither of them, and `website/public/` holds nothing but the two favicons, so nothing in this
folder reaches a public route. As everywhere under `docs/`, what may become public, and when, is
set by [`docs/timeline/`](../timeline/README.md) and the release controls in
[SCENARIO.md](../SCENARIO.md).

| File                                                               | What it shows                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [hermes-workspace-tasks.png](hermes-workspace-tasks.png)           | The Hermes Workspace _Tasks_ board: the Triage, Ready, Running, Review, and Blocked columns, with each card's stage and the role profile assigned to it. In-flight card titles are harness state — draft-article work and role names — not canon. |
| [hermes-workspace-assistants.png](hermes-workspace-assistants.png) | The Hermes Workspace _Assistants_ grid: the operator profile and the seven `mars-ai-simulator-<role>` profiles with their descriptions.                                                                                                           |

## Provenance

Both files are operator-selected exports, copied into this folder byte for byte — no re-encoding,
resizing, cropping, or annotation. Copy the bytes, nothing else: a re-encoded or annotated image is
a different asset and this record no longer describes it.

| File                            | Source on the operator's machine                                        | Captured              | Bytes  | Pixels    | SHA-256                                                            |
| ------------------------------- | ----------------------------------------------------------------------- | --------------------- | ------ | --------- | ------------------------------------------------------------------ |
| hermes-workspace-tasks.png      | `/home/janpolacek/Pictures/Screenshots/hermes-workspace-tasks.png`      | 2026-09-17 10:17 CEST | 212191 | 1802×950  | `98a2126e7a7fd5890aed4ac279db8df9b58670e543cff55c7429d9e33e97db59` |
| hermes-workspace-assistants.png | `/home/janpolacek/Pictures/Screenshots/hermes-workspace-assistants.png` | 2026-09-17 10:26 CEST | 185051 | 1657×1328 | `3fa76088e0242ba0f5122162133009e7dff187e6f59c95e89bf9da565757dbde` |

Verify with `sha256sum docs/harness/*.png` from the repository root. Both images are referenced from
the repository [README](../../README.md) §What runs it, by relative path.

## What this folder does not own

- The harness itself — its roles, tools, task tracking, and human gates: [HARNESS.md](../HARNESS.md).
- The map of `docs/`: [docs map](../README.md).
