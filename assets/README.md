# Shared assets

This directory holds the immutable, approved source files that can be reused by
the Red Horizon website, social cards, documentation, and future release packages.
It is deliberately separate from `website/` so there is one reviewed source asset
instead of copies managed by individual pages.

## Structure

```text
assets/
├── brand/
│   ├── identity/  Approved logos, marks, and identity source files
│   └── favicon/   Stable source artwork for application favicon exports
├── media/         Approved images and videos for publication
└── articles/      Per-article asset manifests; never candidate media
```

`website/scripts/sync-assets.mjs` copies `assets/media/` and
`assets/brand/identity/` into the generated `website/public/media/` and
`website/public/brand/` directories before local development and production
builds. Website code references them as `/media/<filename>` and
`/brand/<filename>`. Favicon exports remain application files under
`website/public/`; their stable source artwork remains in `assets/brand/favicon/`.

The approved Red Horizon mark and its usage guidance are maintained separately:
[Brand guidelines](../docs/BRAND_GUIDELINES.md).

## Intake rules

1. Generate candidates locally in `tools/visual-generator/`.
2. A human selects the stable public asset after visual and continuity review.
3. Copy the selected source to `assets/media/` with a descriptive stable filename.
4. Record its caption, alt text, subject, timeline step, and private provenance in
   the associated content/review task before publication.

Do not store raw ComfyUI runs, model files, prompts, unselected candidates,
provider credentials, or mutable temporary exports here.
