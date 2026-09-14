# Delivery plan

## Phase 0 — Foundation

1. Bootstrap Astro with MDX content collections.
2. Create the minimal "preparing" landing page and the About/Method disclosure.
3. Add CI for builds, content validation, and exclusion of drafts/private material.
4. Prepare, but do not connect, Cloudflare Pages configuration.

## Phase 1 — Editorial system

1. Add collections for news, wiki pages, mission updates, and media metadata.
2. Implement `draft`, `approved`, and `published` content states.
3. Add an internal timeline reader that is excluded from production builds.
4. Add the first approved public planning-era announcement when selected.

## Phase 2 — Simulation workflow

1. Use Beads to route work among writer, visual creator, and redactor roles.
2. Generate images/video locally through `mars-image-gen` and ComfyUI.
3. Copy only reviewed assets into the site, with metadata, captions, and alt text.
4. Human review promotes a draft and its assets to public canon.

## Phase 3 — Launch and operations

Release updates in chronological order: coalition, spacecraft design, launch,
cruise, landing, surface operations, discoveries, maintenance, and end of life.
Do not publish a milestone until its predecessor is public or the editorial plan
explicitly frames it as a retrospective.
