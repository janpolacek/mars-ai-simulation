Stage: media key + wiring + tests (with `site-deployment` skill) · timeline step `004-launch-provider`.

Card D of the ariane-plates-incorporation graph (planner `t_723e991f`).
Brief: `.agents/work/briefs/ariane-plates-incorporation.md`. Parents: A
(the admitted plate and its frontmatter wording). Children: F.

Card D adds the media key, resolver, import and frontmatter, with tests
and a build proof, for the plate(s) card A admitted. Card D does not
commit, does not push.

Workspace: `dir:/home/janpolacek/Projects/mars-ai-simulator`.

Read first — `AGENTS.md`, `docs/INSTRUCTIONS.md`, your role definition
(`mars-ai-simulator-dev` profile), the project skill
`.agents/skills/site-deployment/SKILL.md`, the brief, the dossier
`docs/vehicles/ariane/ariane-64.md`, the editor verdict on card A, the
release record `.agents/work/releases/004-launch-provider.md`, the current
state of `website/src/lib/media.ts` (lines 17–22, 38–61), the 003
precedent (`media.ts:60` key + `website/src/lib/assets.ts:96-119` import

- `website/news/003-vehicle-design.mdx:10-12` frontmatter), and the
  article 004 frontmatter (no `media` field today).

## What to wire

1. **Media key.** Add to `newsMediaKeys` in `website/src/lib/media.ts`
   (line 17–22). The earlier visuals card's draft proposed
   `launch-vehicle-reference`; **the dev card owns the final key name**,
   and the editor's verdict on card A approves the wording. Default key
   if card A does not name one: `launch-vehicle-reference`.
2. **Requirement.** Add to `newsMediaRequirements` (line 38–61), matching
   the `vehicle-references` precedent: `{ plateCount: 1, altCount: 1,
   captionCount: 0, requiresLabel: false }` if one plate is admitted, or
   the multi-plate shape the verdict specifies (one entry per plate, one
   `altCount` per plate, `captionCount: 0` for launcher plates per the
   `vehicle-references` precedent).
3. **Resolver.** Add to `website/src/features/news/media.ts`. The
   resolver imports the admitted plate(s) from `docs/vehicles/ariane/`
   and returns one entry per plate in plate order. The plate count and
   the order must match the requirement tuple, or the build fails.
4. **Import / `assets.ts`.** The admitted plate's import lives in
   `website/src/lib/assets.ts`. The current line 8 imports
   `../../../docs/payload/03-dust-scanning.png` (the foreign swap,
   unchanged from the held change set); card D adds the admitted ariane
   import alongside.
5. **Frontmatter.** Add to `website/news/004-launch-provider.mdx` the
   verbatim strings the editor approved:

   ```yaml
   media: <key from step 1>
   mediaAlt: <verbatim string from card A's verdict>
   mediaLabel: <verbatim string from card A's verdict, optional>
   mediaCaption: <absent if captionCount is 0>
   ```

   Preserve every other frontmatter field byte-for-byte, including
   `publication: published` and `simulatedDate: 2030-03-11`. The
   release decision is voided by any change to the article's bytes; this
   card records the byte-delta on the card comment and re-verifies the
   release decision's hash after the change.

6. **Tests.** Add an assertion to `website/test/news-media.test.mjs`
   (or its equivalent) covering the new key: an unknown key fails, the
   key with a missing `mediaAlt` fails, the key with the right tuple
   passes. The plate-count mismatch is the binding half — the resolver
   must supply exactly the count the requirement declares, or the build
   fails.

7. **Guard.** The card must not widen `guards.mjs`. The withheld set is
   `gatedDirectoryNames = ['timeline']` (`:44`), the per-file rule at
   `:63`, markers at `:86`. The admitted plate's bytes do not match any
   marker; the dossier's withheld file is not the admitted plate.

## What to measure (card §3.5 of the brief)

Build A (with the frontmatter + the new key) and report:

- Carousel cell heights at 1600×900: the article 004 cell's height with
  the admitted plate (carried by the index page if the index includes
  it; otherwise by a separate carousel slide). The shape precedent: 3:2
  pinned, `object-fit: contain`, no crop.
- `/news/` index cell heights at 1280×800: before/after for the article
  004 card. The published set measures 586.1 / 644.6 / 527.1 tall
  today. Report the new cell heights and the section height.
- Article page figure dimensions.

If the new plate is **portrait** (4:5, all six of the operator's plates
are), the cell will measure taller than its neighbours; report the
numbers and the visible band. If the band is unacceptable, escalate to
card A for a re-render in 4:3 or wider.

## Build proof

After wiring and frontmatter, run:

```sh
cd website
npm run build
npm run typecheck
npm run lint
npm test
```

All four must be green before this card comments and is ready for card F.
Capture exit codes and the test count.

## What to record on the card comment

- The new key name, requirement tuple, resolver entry, and `assets.ts`
  import path.
- The frontmatter strings the editor approved (verbatim, with byte-delta
  proof against the published file's hash).
- The test assertion(s) added.
- Build outputs (exit codes, test count).
- Measured cell heights before/after.
- `git diff --stat` against `origin/main` showing only this card's paths.
- The fact that no other path was changed.

## Acceptance criteria

- New key in `newsMediaKeys`, requirement tuple in `newsMediaRequirements`,
  resolver entry, `assets.ts` import, frontmatter string(s), and test
  assertion(s) added in one or more path-limited commits (cards D and F
  commit separately).
- `npm run build`, `npm run typecheck`, `npm run lint`, `npm test` green.
- Measured cell heights reported.
- `git diff --stat` clean; no `git add -A`.

## Out of scope

- The commit and push (card F).
- The release record (card G).
- The dossier (`docs/vehicles/ariane/ariane-64.md`).
- The withheld plates.
- Any 002-payload path.
