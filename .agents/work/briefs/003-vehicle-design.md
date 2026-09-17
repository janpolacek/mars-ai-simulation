# Brief: 003-vehicle-design

## Article metadata

| Field             | Value                                    |
| ----------------- | ---------------------------------------- |
| Slug              | `003-vehicle-design`                     |
| Title             | _(to be confirmed by human story owner)_ |
| Author            | _(to be confirmed by human story owner)_ |
| Timeline step     | `003-vehicle-design`                     |
| Status            | `draft`                                  |
| Canonical sources | `.agents/work/sources/003-vehicle-design.md` |

## Brief

_(Human story owner: fill in the public-safe article brief here. What public angle does this article take? What may it state and what must it withhold?)_

### Allowed angle (from `docs/timeline/003-vehicle-design.md`)

Release the first rover dossier and approved studio references. Explain the
design's science role and limitations, avoiding unverified performance statistics.

The article covers RH-01 Pathfinder: its silhouette, body and colour blocking,
six-wheel mobility system, mast and vision system, front contact arm and travel
cradle, rear panel, and materials — as described in `docs/vehicle/VEHICLE.md`.
The science role is observational and methodical: panoramic and navigation
imaging, weather observation, mineral and rock-context sensing, and a
close-contact tool. Its operating appearance is described in four stages from
baseline configuration through late mission.

### Forbidden angle (spoilers)

- Launch announcement (step 004+)
- Landing site, surface photography (step 006+)
- Damage or discovery (step 007+)
- Asteria Field material: maps, centre coordinates, traverse logic, hazard
  inventory, science-zone plan (gated until SCENARIO.md:279 is satisfied)
- Ariane 64 launch vehicle (step 004)
- Any fact from steps 004–011

### Canonical sources

The article's source text is `docs/vehicle/VEHICLE.md`. The approved studio
references are the five neutral-floor renders under `docs/vehicle/`:

- `canonical.png` — primary studio view (plate candidate)
- `front-left.png` — front-left three-quarter
- `side-view.png` — side profile
- `rear-right.png` — rear three-quarter
- `contact-arm.png` — front contact arm detail

`contact-arm-scene.png` is a scene image; it sits behind the rule that the
human must approve canonical references before editorial scene images.

### Required containment checklist

- [ ] No launch vehicle, launch date, or launch window stated or implied.
- [ ] No landing site, landing date, or surface operations described.
- [ ] No Ariane 64 or other specific launch vehicle named.
- [ ] No Asteria Field name, coordinate, map, or operational detail.
- [ ] No damage, discovery, or late-mission event.
- [ ] No performance statistics (speed, range, duration, payload mass).
- [ ] No step-004+ fact.
- [ ] VEHICLE.md is the canonical reference; article agrees with it.
- [ ] Four operating-appearance stages described correctly from VEHICLE.md §4.
- [ ] "Design freeze" does not imply built or launch-ready.

## Media

**Media key**: `vehicle-references` (plateCount: 1, altCount: 1, captionCount: 0,
requiresLabel: false — mirror of `payload-sensor-illustration`)

**Plate**: `docs/vehicle/canonical.png` (or another approved studio reference, per
human Gate 1 decision). The article may carry one studio plate.

**Label**: `RH-01 Pathfinder · studio reference`

**Alt text**: descriptive alt derived from VEHICLE.md, labelled as illustrative
artwork of the fiction, no real agency implied.

## Acceptance criteria

- Every material claim traces to `docs/vehicle/VEHICLE.md` or an explicit
  unresolved note.
- No fact from `docs/timeline/` steps 004–011 appears.
- No Asteria Field material appears.
- No launch, landing, damage, or discovery material appears.
- The draft preserves `publication: draft` until editorial and human approval.
