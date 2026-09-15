# Shared assets

This directory holds the immutable, approved source files that can be reused by
the Red Horizon website, social cards, documentation, and future release packages.
It is deliberately separate from `website/` so there is one reviewed source asset
instead of copies managed by individual pages.

## Structure

```text
assets/
├── brand/     Approved logos, marks, and identity source files
└── media/     Approved images and videos for publication
```

`website/scripts/sync-assets.mjs` copies `assets/media/` into the generated
`website/public/media/` directory before local development and production builds.
Website code references them as `/media/<filename>`.

## Intake rules

1. Generate candidates locally in `~/Projects/mars-image-gen`.
2. A human selects the stable public asset after visual and continuity review.
3. Copy the selected source to `assets/media/` with a descriptive stable filename.
4. Record its caption, alt text, subject, timeline step, and private provenance in
   the associated content/review task before publication.

Do not store raw ComfyUI runs, model files, prompts, unselected candidates,
provider credentials, or mutable temporary exports here.
