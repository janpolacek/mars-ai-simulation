# Red Horizon visual identity

## Status and approved source

**Status:** approved by the human story owner on 2026-09-15; not yet scheduled
for public release.

The approved source mark is
[`red-horizon-sunrise-mark.png`](../assets/brand/red-horizon-sunrise-mark.png).
It is a 1254 × 1254 PNG with SHA-256
`f9543989560da54fc56a8973002833b2b8dbe3d1c085fc1293af3faca457b749`.

**Subject:** a stylised view of Mars at sunrise. A rust-red planetary disc
contains a low segmented relief line, with a broad Olympus Mons-inspired rise
slightly left of centre. A small Sun emerges behind the planet’s upper-left
rim; Earth and the Moon appear as a small paired cue at upper right.

**Public caption:** *Red Horizon — Mars at sunrise.*

**Alt text:** *A rust-red Mars disc on black, crossed by low highlighted hills.
A small Sun rises behind its upper-left edge, while blue Earth and a smaller
Moon point appear at upper right.*

**Private provenance:** selected GPT Image candidate, retained locally as
`tools/visual-generator/assets/red-horizon/logo/logo-gpt-image-mars-horizon-sunrise-large-earth-01.png`.
The exact generation record and prompt remain in the local visual-generator
workspace. Approval, refinement history, and validation are recorded in Beads
issue `mars-ai-simulator-2tm`.

## Core composition

- **Mars is the principal circle.** It must remain visually distinct from the
  Sun: full rust-red disc, centred, and large enough to carry the relief.
- **The relief is the Red Horizon signature.** Use a low chain of four to six
  connected hills inside the upper half of Mars. The left-of-centre rise is
  broad and shield-like, not a sharp mountain peak.
- **The Sun is a sunrise, not a second planet.** Show only its exposed upper
  portion behind Mars’s upper-left rim. A small, soft amber halo may illuminate
  the nearby rim and first relief ridge; do not add rays or lens flare.
- **Earth and Moon remain supporting cues.** Keep Earth small, blue, and high
  to the right. Place the Moon as a smaller, dimmer nearby point. They are a
  readable mission-context symbol, not a scale diagram.
- **The black field is intentional negative space.** Do not fill it with a
  star field, labels, spacecraft, badges, or decorative orbit lines.

## Working colour palette

These design tokens are distilled from the approved raster mark. They provide
consistent working colours for future layouts and vector tracing; they are not
a claim that the generated raster uses only flat pixel values.

| Token | Hex | Use |
| --- | --- | --- |
| Void | `#000000` | Primary background and negative space |
| Mars ember | `#D85D38` | Sunlit upper region of Mars |
| Mars oxide | `#B63A1D` | Main lower Mars mass |
| Relief shadow | `#8F2818` | Interior hill planes and restrained depth |
| Rim light | `#FFD08A` | Thin relief edge and sunrise-lit rim |
| Sunrise gold | `#FFE7A0` | Exposed solar disc |
| Sunrise amber | `#D97B27` | Soft halo and nearby reflected warmth |
| Earth blue | `#79AFFF` | Distant Earth point |
| Moon blue-gray | `#9AA9BE` | Smaller, dimmer Moon point |

Keep Mars as the dominant warm mass. The Sun and rim light are accents only;
Earth blue should be the sole cool contrast. Do not introduce saturated greens,
purples, or additional celestial colours.

## Use and accessibility

- Use the full mark on dark fields at comfortable display sizes. For small
  placements, preserve the Mars circle and the sunrise silhouette first; do
  not remove the relief.
- Maintain a generous black clear space around the mark—at least the diameter
  of the Earth point on every side.
- Do not place text inside the mark. A wordmark, if later approved, must sit
  outside the clear-space area.
- Do not redraw the mark as a real agency seal or imply an endorsement by a
  real space organisation. Red Horizon remains fictional.
- Treat the PNG as the approved source until a human approves a vector master
  or an alternate lock-up. Do not alter, crop, recolour, or regenerate it for
  public use without a new review.

## Publication boundary

The source file is stored under `assets/brand/` as an approved identity asset.
It has not been copied to `assets/media/`, referenced by the website, or
deployed. A separate human release decision is required before any public-site
or social use.
