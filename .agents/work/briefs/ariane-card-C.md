Stage: `docs/` placement (with `site-deployment` skill) · timeline step `004-launch-provider`.

Card C of the ariane-plates-incorporation graph (planner `t_723e991f`).
Brief: `.agents/work/briefs/ariane-plates-incorporation.md`. Parent: A.
Children: F (placement is a precondition for the push).

Card C copies the plate(s) card A admitted under their admitted canonical
name, unchanged, with hash re-verified on copy. Card C does not edit
`website/`, does not introduce a new media key, does not commit, does not
push.

Workspace: `dir:/home/janpolacek/Projects/mars-ai-simulator`.

Read first — `AGENTS.md`, `docs/INSTRUCTIONS.md`, your role definition
(`mars-ai-simulator-dev` profile), the project skill
`.agents/skills/site-deployment/SKILL.md`, the brief, the dossier
`docs/vehicles/ariane/ariane-64.md` (it does **not** name the plates in
its `Provenance` section — admission is decided by card A), and the editor
verdict on card A (`kanban show <CARD_A>` after card A is complete).

## What to copy

The admitted plate(s) only. The admission list comes from
`.agents/work/reviews/ariane-plates-selection.md` (card A's deliverable):

- For each admitted plate: source path under `docs/vehicles/ariane/`,
  destination path under `docs/vehicles/ariane/` (the same folder; the
  copy's only purpose is to record the editor's verdict in a stable
  filename), and the admitted canonical name (operator's existing naming
  precedent: `canonical`, `front-left`, `side-view`, `rear-right`).

A plate whose admission depends on a human gate answer (5 or 6) is **not**
copied; card C stays blocked on the gate answer, not on card A.

A plate whose admission depends on the provenance gate (3) is **not**
copied until the human answers escalation 3.

A plate card A withholds is **not** copied; the withheld plate stays
under its original filename in `docs/vehicles/ariane/`.

If card A admits **no** plate, card C **is not created** (the chain
collapses). If card A admits one plate, card C copies that one. If card A
admits more than one, card C copies each under its canonical name.

## How to copy

```sh
SRC=<source path under docs/vehicles/ariane/>
DST=<admitted canonical name under docs/vehicles/ariane/>
python3 -c "
import hashlib, shutil, os
src, dst = os.environ['SRC'], os.environ['DST']
src_hash = hashlib.sha256(open(src, 'rb').read()).hexdigest()
shutil.copyfile(src, dst)
dst_hash = hashlib.sha256(open(dst, 'rb').read()).hexdigest()
print('src_sha256', src_hash)
print('dst_sha256', dst_hash)
print('match', src_hash == dst_hash)
"
```

If `src_sha256 != dst_sha256`, the copy is a failure — repeat from the
source. The hashes must be recorded in card A's review file as the
"copied by-hash" provenance.

## What to record on the card comment

- Source path + sha256.
- Destination path + sha256.
- The match proof above.
- The card A verdict row (admit / withhold / etc.) for the copied plate.
- The fact that no other file was written by this card.

## Acceptance criteria

- Destination file exists, hash matches the source, both recorded.
- No other file under `docs/` was written.
- No `website/` edit. No commit, no push.

## Out of scope

- Editing the dossier (no `docs/vehicles/ariane/ariane-64.md` edit).
- Renaming a withheld plate (a rename is a `docs/` write — `lunch.png` stays
  as-is until card A's editor verdict names a rename).
- Introducing a media key (card D).
- The article MDX, the build, the push (cards D, F).
- The release record (card G).
