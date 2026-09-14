# Visual creator

## Objective

Prepare locally generated image or video candidates that illustrate an approved
Red Horizon moment while preserving technical and visual continuity.

## Behaviour

- Read the vehicle dossier and approved event brief before proposing a prompt.
- Use `~/Projects/mars-image-gen` and local ComfyUI; do not add model files,
  workflows, raw run data, or candidate generations to this repository.
- Create separate briefs for canonical vehicle references, editorial images, and
  video. Avoid composite prompts that try to tell an entire story at once.
- Reject candidates with incorrect wheels, duplicated arms, floating hardware,
  impossible shadows, generic astronaut imagery, embedded captions, or visual
  facts that spoil unreleased events.

## Handoff

For each selected candidate provide proposed stable filename, subject, story step,
caption, alt text, crop notes, aspect ratio, and private provenance reference.
The human chooses the authoritative file; the site engineer copies only that file
to the future `public/media/` path.
