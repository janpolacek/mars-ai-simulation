Stage: release record for the revision (with `editorial-review` skill) · timeline step `004-launch-provider`.

Card G of the ariane-plates-incorporation graph (planner `t_723e991f`).
Brief: `.agents/work/briefs/ariane-plates-incorporation.md`. Parent: E.
Children: none.

Card G closes the loop: it appends the revision record the editorial gate
(card E) recorded and confirms the live origin. Card G does not edit
`website/`, does not commit, does not push.

Workspace: `dir:/home/janpolacek/Projects/mars-ai-simulator`.

Read first — `AGENTS.md`, `docs/INSTRUCTIONS.md`, your role definition
(`mars-ai-simulator-editor` profile), the project skill
`.agents/skills/editorial-review/SKILL.md`, the brief, the dossier
`docs/vehicles/ariane/ariane-64.md`, the editor verdict on card A, the
editorial re-gate on card E (the revision's release decision), the build
proof from card D, the push proof from card F, and the existing release
record `.agents/work/releases/004-launch-provider.md`.

## What to write

Append (do not overwrite) a "Revision" section to
`.agents/work/releases/004-launch-provider.md`. The previous record is
preserved verbatim. The new section carries:

| Field                                         | Value                                                                                                    |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Revision date                                 | 2026-09-17 (CEST)                                                                                        |
| Recorded by                                   | `mars-ai-simulator-editor` on `t_<cardG>`                                                                |
| Article sha256 (revised)                      | from card D's commit                                                                                     |
| Article sha256 (original release, superseded) | `7da71fec1f2ce0dbaff8aa2966e802b6de439eb78b73e34b1a8eafab5d764ca3`                                       |
| Admitted plate                                | canonical path + sha256 from card C                                                                      |
| Media key                                     | from card D                                                                                              |
| Frontmatter delta                             | `media`, `mediaAlt`, optional `mediaLabel` strings (verbatim)                                            |
| Build hash (local `dist/`)                    | from card F's build proof                                                                                |
| Live URL                                      | `https://mars-ai-simulation.janpolacek.workers.dev/news/004-launch-provider/`                            |
| Live verification                             | byte-identity match to local `dist/` derivative                                                          |
| Push                                          | commit SHA, push result, `git rev-list --count origin/main..HEAD` = 0                                    |
| Exact public scope                            | route, card on `/` and `/news/`, plate, label, alt text, real strings (Ariane 64 only), record-date line |
| Supersedes                                    | the previous record's `exact_public_scope` row ("no plate and no emitted derivative")                    |
| Voiding condition                             | "any change to the revised bytes voids the revision"                                                     |

## What to confirm

- The live URL serves the revised bytes (hash match against local
  `dist/`).
- 0 withheld markers on the live page.
- 0 hits for the institution / operator / facility families on every
  served byte (the released designation `Ariane 64` is the only real
  token, as in the original record).
- 0 launch-day forms beyond the 2031 window.
- The two landing-region coordinate markers (`'18° 42'`, `'226° 14'`)
  absent.
- The record-date label appears once on the article page, once on each
  of `/` and `/news/` cards, with no raw ISO form and no
  machine-readable date token.

## What to record on the card comment

- The sha256 of the appended release record
  (`.agents/work/releases/004-launch-provider.md`).
- The sha256 before the append (the file as it was when card E
  recorded the revision).
- The card ids of the chain (A → C → D → E → F → G), with their
  assignments and results.
- The list of human-only escalations that remained open or that the
  operator answered during the run.

## Acceptance criteria

- The revision record is on disk and the appended section carries every
  field above.
- `dprint check` clean (the release record follows the repo's formatter).
- The live URL is verified.
- No `website/` edit, no commit, no push, no further deploy.

## Out of scope

- Editing the dossier.
- The next record (step 005).
- Re-running the editorial gate on card A's verdict (card E owns that).
