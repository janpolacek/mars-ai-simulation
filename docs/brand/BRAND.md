# Red Horizon visual identity

## Status and approved source

**Status:** approved by the human story owner on 2026-09-15 and used on the
current Preparing site.

The approved source mark is [`logo-bg-black.png`](logo-bg-black.png). It is a
1254 × 1254 PNG with SHA-256
`f9543989560da54fc56a8973002833b2b8dbe3d1c085fc1293af3faca457b749`.

**Subject:** a stylised view of Mars at sunrise. A rust-red planetary disc
contains a low segmented relief line, with a broad Olympus Mons-inspired rise
slightly left of centre. A small Sun emerges behind the planet’s upper-left
rim; Earth and the Moon appear as a small paired cue at upper right.

**Public caption:** _Red Horizon — Mars at sunrise._

**Alt text:** _A rust-red Mars disc on black, crossed by low highlighted hills.
A small Sun rises behind its upper-left edge, while blue Earth and a smaller
Moon point appear at upper right._

**Private provenance:** the selected GPT Image candidate and its exact generation record are
scratch material in the local visual-generator workspace, which keeps no permanent assets; the
approved mark above plus its SHA-256 is the durable record. Approval, refinement history, and
validation were recorded in the retired issue tracker as `mars-ai-simulator-2tm`; that pre-kanban
history is archived read-only at `docs/beads-archive.jsonl`.

## Transparent variant

The homepage hero places the mark over the page field and the two orbit rings,
where the black-field square reads as a hard edge, so the hero uses a
transparent variant derived mechanically from the approved source:
[`logo-transparent.png`](logo-transparent.png), a 1254 × 1254 PNG of 906,047 B
with SHA-256
`990cc5556a9aa969f05c1d0a65374dd282e28fac0ad86479413616518ae68813`, derived from
`logo-bg-black.png` (SHA-256 `f9543989…` above).

**Derivation recipe — un-composite against the field, never redraw.** The
approved source is the mark composited over the void black `#010000`, so every
pixel comes back to straight alpha. Per pixel, with `m = max(R, G, B)`:

- `alpha = m / 255`
- `colour = (P − #010000 × (1 − alpha)) / alpha`, clamped to `0…255`

Recomposited over `#010000`, the variant reproduces the approved source within
1 LSB per channel: the measured maximum is 1 LSB, on the red channel of 682,385
darkest field pixels (alpha ≤ 10), and 0 pixels differ by more than 2. No
generative tool touches it; the recipe is executable as
`website/scripts/derive-identity-mark.mjs`
and `website/test/identity-mark.test.mjs` re-measures the fidelity of the
shipped file and fails the same measurement on the rejected derivative.

**Alt text (transparent variant):** _A rust-red Mars disc crossed by low
highlighted hills. A small Sun rises behind its upper-left edge, while blue
Earth and a smaller Moon point appear at upper right._

**Review and release reference:** commissioned by the human story owner on
2026-09-17 — “replace logo on homepage with one with a transparent background” —
and confirmed the same day as homepage-hero only (kanban card `t_183d9f11`).
The site header, the splash screen and the news `programme-identity` media key
keep the black-field source above, unchanged. This derivation is a local site
change: a public deployment still needs the separate human release decision
described under **Publication boundary** below.

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

## Primary colours in the approved mark

These are direct representative samples from the approved PNG. The mark has
soft raster variation around its sunrise glow, so use these as the canonical
working palette for future layouts and vector tracing rather than treating the
raster as a strictly flat-colour file.

| Token          | Hex       | Use                                       |
| -------------- | --------- | ----------------------------------------- |
| Void black     | `#010000` | Primary background and negative space     |
| Mars oxide     | `#A0301D` | Main lower Mars mass                      |
| Mars ember     | `#CD553A` | Sunlit upper region of Mars               |
| Relief shadow  | `#9F321F` | Interior hill planes and restrained depth |
| Rim light      | `#FCC78B` | Thin relief edge and sunrise-lit rim      |
| Sun core       | `#FCA042` | Exposed solar disc                        |
| Sunrise halo   | `#895215` | Soft halo and nearby reflected warmth     |
| Earth blue     | `#7BA7FA` | Distant Earth point                       |
| Moon blue-gray | `#94A3B0` | Smaller, dimmer Moon point                |

Keep Mars as the dominant warm mass. The Sun and rim light are accents only;
Earth blue should be the sole cool contrast. Do not introduce saturated greens,
purples, or additional celestial colours.

## Favicon derivative

The browser favicon is a compact derivative of the approved mark. Its tracked exports
are `favicon.ico` (16, 32, and 48 pixels) and `favicon-32.png`, kept as tracked site
files in `website/public/assets/` alongside the copies generated from `docs/brand/`.
Do not use the favicon derivative as a replacement for the full identity mark.

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

The source file is stored in `docs/brand/` as an approved identity asset, beside this
guidance. It is available to the website through the generated `website/public/assets/`
directory. A separate human release decision is still required before any new
public-site or social use beyond the current Preparing site.
