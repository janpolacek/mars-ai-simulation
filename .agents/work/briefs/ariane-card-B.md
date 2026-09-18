# Card B body — graph close-out (RESCOPED)

> This file is the working paper for card B of the ariane-plates-incorporation
> graph. **The card as created on the board (`t_74d301a3`) carries the original
> "own the held change set" body; the authoritative scope is the amendment
> comment 356 on that card**, reproduced here for the record. Card B is
> parented on card G (`t_d7e3aa8b`) and runs last.

Stage: graph close-out (with `site-deployment` skill) · advances no timeline step.

Card B of the ariane-plates-incorporation graph (planner `t_723e991f`).
Brief: `.agents/work/briefs/ariane-plates-incorporation.md`. Parent: card G
(`t_d7e3aa8b`). Children: none.

Workspace: `dir:/home/janpolacek/Projects/mars-ai-simulator`.

Read first — `AGENTS.md`, `docs/INSTRUCTIONS.md`, your role definition
(`mars-ai-simulator-dev` profile), the project skill
`.agents/skills/site-deployment/SKILL.md`, the brief, and the amendment
comment 356 on this card.

## Why the original body was superseded

The original card B scope — classify and publish the held change set
(`docs/vehicle/` → `docs/vehicles/` split + the 002 payload swap + the
ariane folder) — duplicates **`t_1476a18c`** (dev, operator-created), whose
body is _"Publish the verified shared-checkout change set — the docs/vehicles
refactor and the 002 plate swap — once both decisions land"_, with
deliverables 1–4 covering the 7 staged renames, the split's path edits, the
002 swap, and `docs/vehicles/ariane/*`. `t_00b65567` (editor) has since
completed and decided the 002 plate (`03-dust-and-contact-closeup` →
`docs/payload/payload-sensor-illustration.png`, corrected alt text), and
`t_1476a18c` applies it. Two dev cards publishing the same paths from one
shared `dir:` checkout is the collision this project keeps paying for, so
card B does not publish the held set.

## This card's scope

1. **Do not publish the held change set.** The `docs/vehicle/` →
   `docs/vehicles/` split, the 002 plate swap, `assets.ts`, `guards.mjs`,
   `media.ts`, the guard tests, and `docs/vehicles/ariane/*` are
   `t_1476a18c`'s, under `t_00b65567`'s and `t_206bee14`'s answers. If those
   paths are still uncommitted when this card runs, report them as
   **held-with-owner `t_1476a18c`** and stop.
2. **Publish this graph's own working papers** as authored, the way
   `t_206bee14` published the step-004 papers:
   `.agents/work/briefs/ariane-plates-incorporation.md`,
   `.agents/work/briefs/ariane-card-{A..G}.md`,
   `.agents/work/reviews/ariane-plates-selection.md` (card A),
   `.agents/work/reviews/004-launch-provider-revision.md` +
   `.agents/work/continuity/004-launch-provider-revision.md` (card E), and
   the revision section of `.agents/work/releases/004-launch-provider.md`.
   Path-limited commits, `--no-verify` where the pre-commit hook would
   reflow bytes whose sha256 is cited on the board; report each path's
   `dprint check` status and sha256 (`site-deployment/SKILL.md` recipe).
3. **Verify the checkout**: `git status --short` clean apart from paths
   another card owns (name them with owners);
   `git rev-list --count origin/main..HEAD` = 0; `origin/main` == `HEAD`.
4. **Record the ownership answer** for `t_206bee14`'s questions 1 and 5
   (the ariane folder, the dossier's release state) — the proposal is §8 of
   the planning brief; record whether the answer that landed agrees.
5. **Add the skill lesson** to `.agents/skills/site-deployment/SKILL.md`
   "Verified practice" if this run yields one. Candidate: _a dev card must
   not commit a shared file whose working-tree copy also carries another
   card's uncommitted edits — `git add <path>` stages the whole file, not
   your hunk, so the other card's work publishes too; that is why card D is
   gated on `t_1476a18c`._

## Acceptance criteria

- No path from the held change set is published by this card; each is
  reported published-by-`t_1476a18c` or held-with-owner.
- This graph's own working papers are published as authored, each with
  sha256 + `dprint check` status, and no board-cited hash changed by reflow.
- `git status --short` clean apart from named foreign paths;
  `git rev-list --count origin/main..HEAD` = 0.
- The ownership answer is recorded on the card.
- No `website/` edit, no deploy, no publication of content.

## Out of scope

- The held change set (`t_1476a18c`).
- The six plates (cards A, C).
- The media key, resolver, import, frontmatter, tests, build (card D).
- The article re-gate, push, or revision record (cards E, F, G).
- The 002 payload swap (`t_00b65567`, `t_1476a18c`).
- The wiki leaf page (`t_fea1e735`'s planned-but-unopened chain).
- Authoring any canon, any frontmatter string, any dossier text, any skill
  text the skill does not already own.
