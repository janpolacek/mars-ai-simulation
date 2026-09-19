# Release-gap audit: public material through the launch step

Planner audit, 2026-09-18. Scope: compare the public website against the numbered timeline through the launch step, then route the missing reference page and the next launch article. This is a planning record, not canon and not a release decision.

## Measured current state

### News

Published news files present:

- `website/news/001-project-announcement.mdx`
- `website/news/002-payload-selection.mdx`
- `website/news/003-vehicle-design.mdx`
- `website/news/004-launch-provider.mdx`

No `website/news/005-*.mdx` exists. The next missing news package is the launch update for timeline step `005-launch`.

### Wiki

Published wiki files present:

- `website/wiki/red-horizon.mdx`
- `website/wiki/asteria-field.mdx`
- `website/wiki/rh-01-pathfinder.mdx`

The launch-vehicle leaf planned by the completed `t_fea1e735` shell is still absent. The current canonical dossier is `docs/vehicles/ariane/ariane-64.md`; the older shell's `docs/vehicle/<slug>.md` wording is superseded by the per-vehicle folder layout. The missing page belongs beside RH-01 under `/wiki/vehicle/`, not in a new section.

### Media

The launch image already exists at `docs/vehicles/ariane/lunch.png` (the filename is retained literally from the supplied asset). It is a generated candidate, not automatically an approved public asset. The launch article's visuals card must verify pixels, provenance, rights, and public alt/caption wording; it must not generate a replacement unless the existing candidate fails review.

## Gap decisions

1. **Open the Ariane 64 wiki-leaf content graph first as a corrective implementation of the already-approved step-004 wiki state.** Use `docs/vehicles/ariane/ariane-64.md` as canonical source. Reuse of `docs/vehicles/ariane/canonical.png` is a proposal only; the visual manifest and editorial gate confirm it.
2. **Prepare the missing launch article graph next.** Slug: `005-launch`. It may use only the allowed public angle from `docs/timeline/005-launch.md`: a factual launch update, the immediate check, and the next status expectation. Exact time and telemetry are unresolved and must not be invented.
3. **Do not create articles for already-covered steps 001–004.** They exist and are published. Do not create later-step articles or wiki leaves.

## Confidentiality boundary

No public card, title, slug, metadata, asset filename, alt text, caption, link, or summary may contain later-step events, cruise anomalies, landing success, surface targets, or private timeline wording. The launch package must not imply flawless operations or disclose exact telemetry/time.

## Routing

- Ariane wiki graph: `.agents/work/sources/wiki-ariane-64.md` → `website/wiki/ariane-64.mdx` → `.agents/work/assets/wiki-ariane-64/assets.md` → `.agents/work/reviews/wiki-ariane-64.md` and `.agents/work/continuity/wiki-ariane-64.md` → dev publication evidence.
- Launch article graph: `.agents/work/sources/005-launch.md` → `website/news/005-launch.mdx` → `.agents/work/assets/005-launch/assets.md` → `.agents/work/reviews/005-launch.md` and `.agents/work/continuity/005-launch.md` → dev publication evidence.

The launch graph is not a release approval. The reviewer records the release decision; the dev card publishes only after that decision exists.
