# Red Horizon website

This is the static Astro application for Mars AI Simulation. It will begin as the
Red Horizon Preparing site and later render approved news, wiki, mission-update,
and media content.

## Runtime

Node is managed by `fnm` and pinned in `.node-version`.

```sh
fnm use
npm install
npm run dev
```

## Shared assets

Do not add approved reusable media directly to `public/media/`. Put it in the
repository-root `assets/media/`, where it remains the canonical source. The
`predev` and `prebuild` scripts copy that source to `public/media/`, making assets
available in pages at `/media/<filename>`.

This prevents duplicate source files while keeping Astro's public directory and
deployment output self-contained. Generated files are ignored by Git.

## Commands

| Command | Result |
| --- | --- |
| `npm run dev` | Sync shared assets and start Astro locally. |
| `npm run build` | Sync shared assets and build static output in `dist/`. |
| `npm run preview` | Serve the last production build locally. |
| `npm run astro -- check` | Run Astro's project checks once configured. |
