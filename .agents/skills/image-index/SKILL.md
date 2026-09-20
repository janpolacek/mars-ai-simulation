---
name: image-index
description: Consult the single image catalog (docs/IMAGES.md) before requesting, reusing, or describing any Red Horizon image.
---

# Image index

The single reference for every project image lives at
`docs/IMAGES.md`. The writer, the reviewer, and the image
visualizer must consult it **before** requesting new art, deciding a reuse,
or describing an existing asset. Read `AGENTS.md`, `docs/INSTRUCTIONS.md`,
and your own role definition before a media decision; this skill owns the
convention around the index, not any role's authority.

## The one rule

**A missing entry means "does not exist — request it".**

If an image you need has no row in `docs/IMAGES.md`, it is not
available to place, reuse, or describe — it must be generated (visuals card)
before any article, wiki page, or site surface can carry it. Never name an
asset from memory, from a neighbour article's media key, or from a path a
handoff mentions, when the index has no entry for it. A path without a row
is an unindexed candidate at best, and a leak vector at worst.

## What every entry carries

- **Path** — the stable path (`docs/...` for approved/exports, the visuals
  profile cache path for candidates).
- **A 2–3 sentence description** — enough that a reader can judge reuse
  without opening the file: subject, setting, composition, palette, and any
  text/marking carried in the pixels.
- **Status** — `released` (placed on a public surface), `approved-unplaced`
  (approved, placement is a fresh decision), `admitted-alternative`,
  `withheld` (guard-protected or human-gated), `rejected`,
  `legacy-unreferenced`, `candidate` (unapproved, in the visuals cache).
- **SHA-256** — full digest; verify with `sha256sum <path>` before relying
  on a file's identity. A moved or re-exported file changes the hash, and a
  hash mismatch invalidates the row's status claims.

## Who writes what

- **Writers and reviewers** read the index; they do not append to it. A
  wanted image with no row → request new art through the visuals card, never
  improvise a description of a file one has not verified.
- **The image visualizer appends one entry per generated image after each
  run** (path + 2–3 sentence description matching the brief + full SHA-256 +
  status `candidate`), and keeps the index the single source of truth.
  One generation = one row; a generation that errored gets no row.
- **The reviewer maintains** the index structure and the statuses of placed /
  approved / withheld entries, and re-hashes entries when the tree moves.

## Canon and confidentiality

- Withheld assets (`docs/vehicles/ariane/travelling-to-mars.png`,
  `docs/vehicles/pathfinder/contact-arm-scene.png`, withheld ariane
  side/rear plates, AF-03 reuse) stay marked `withheld` in the index. Naming
  them in the index to record the bar is not a release; placing, importing,
  or relabelling them is.
- Statuses come from review records and dossiers (`.agents/work/reviews/`,
  `docs/*/...`); do not upgrade a `candidate` or `withheld` row on your own
  authority. Approving a candidate, or placing an approved-unplaced asset, is
  the editorial gate's decision and needs its recorded release sentence.
- The catalog lives at `docs/IMAGES.md` — a documentation file, never a public
  route — and never carries the private timeline's content.

## Verifying before you reuse

1. Find the row in the index. If missing, stop — request it.
2. `sha256sum` the file and compare with the row's digest.
3. Read the status: `released` and `approved-unplaced` are usable; `withheld`
   and `rejected` are not; `candidate` needs a release decision.
4. Check the article's moment against the entry's description: a plate that
   depicts a different event (e.g. a launch plate for a cruise update) is not
   a valid reuse, and repeating a neighbour article's plate needs editorial
   justification, not convenience.
5. Record the reuse (path, hash, key) on the card, then place through the
   article's `media:` key — never by importing a file path into prose.
