# RH-01 Pathfinder

## Status and role

**Status:** proposed private canon. Human approval is required before a public
vehicle page or canonical visual is published.

RH-01 Pathfinder is Red Horizon's first surface vehicle: a compact robotic Mars
surveyor that maps local terrain, investigates rocks in context, and establishes
safe routes for later science targets. It is an instrument, not a character: its
design should show the constraints of dust, terrain, power, communication delay,
and remote operations.

## Canonical physical baseline

| System | Approved direction | Must not appear |
| --- | --- | --- |
| Body | Low, roughly two-metre-class warm-white equipment body with muted red identification panels and a dark instrument deck | Cockpit, passenger cabin, windows, weapons, decorative fins |
| Mobility | Six broad metal-mesh wheels on visible articulated suspension | Tracks, legs, hover hardware, mismatched wheel count |
| Vision | Short central mast with a compact stereo-camera pair | Tall human-like head, multiple arbitrary antennae, floating sensors |
| Contact science | One front-centre two-joint arm ending in a small contact tool; it folds into a travel cradle | Extra arms, disconnected joints, oversized drilling rig |
| Materials | Matte ceramic coating, brushed metal arm, protected dark pivots, restrained seams and fasteners | Toy gloss, loose cables, exposed fantasy energy parts |

Every approved image must retain these features, natural occlusion, plausible
suspension/ground contact, and consistent front/rear orientation. New instruments
need an approved mounting location before they appear in copy or media.

## Science and operations

The rover's initial payload direction includes panorama/navigation imaging, local
weather observations, mineral/rock context sensing, and a close-contact tool. It
operates in short deliberate traverses: survey, select target, approach, inspect,
record results, then choose the next safe route. Exact names, measurement limits,
power source, communications architecture, and landing region remain open.

## Visual states

1. **Canonical reference:** clean studio-style views, arm folded, every system
   visible enough to establish identity.
2. **Early surface operations:** newly deployed, restrained dust, short tracks,
   functioning mast and folded/active arm only when the event calls for it.
3. **Mature operations:** naturally accumulated dust and small abrasion, but no
   unannounced hardware damage or missing equipment.
4. **Late mission:** wear follows approved timeline decisions; it remains a
   maintained scientific machine, not an abandoned cinematic wreck.

## Visual source workflow

Use the `vehicle-01-atlas` pattern in `tools/visual-generator/` as a workflow
reference only. Create a dedicated RH-01 story set, generate canonical reference
views, and have a human select the authoritative package before scene generation.
Record prompt/workflow provenance privately in that generator workspace. Copy only
the selected stable exports, with captions and alt text, into this repository.
