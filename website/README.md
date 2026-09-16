# Red Horizon website

This is the static Astro application for Mars AI Simulation. It will begin as the
Red Horizon Preparing site and later render approved news, wiki, mission-update,
and media content.

## News content

Homepage news items are authored as MDX files in [`news/`](./news/). The Astro
content collection discovers every `*.mdx` file in that folder during the build
and orders items by their frontmatter `order` value. Each file must include:
`title`, `category`, `status`, `summary`, `linkLabel`, and `order`. Optional
`media`, `mediaAlt`, `mediaLabel`, and `accent` fields control the card artwork.

Keep news copy within approved public canon. The private mission timeline under
the repository root is continuity material and must not be imported into this
folder or the public build.

## Runtime

Node is managed by `fnm` and pinned in `.node-version`.

```sh
fnm use
npm install
npm run dev
```

## Shared assets

Do not add approved reusable assets directly to `public/`. Put publication
media in repository-root `content/media/` and approved identity files in
`content/brand/identity/`, where each remains the canonical source. The `predev`
and `prebuild` scripts copy those directories to `public/media/` and
`public/brand/`, making assets available in pages at `/media/<filename>` and
`/brand/<filename>`. Favicon exports are the exception: they live directly in
`public/`, while their stable source artwork lives in `content/brand/favicon/`.

This prevents duplicate source files while keeping Astro's public directory and
deployment output self-contained. Generated files are ignored by Git.

## Commands

| Command                  | Result                                                 |
| ------------------------ | ------------------------------------------------------ |
| `npm run dev`            | Sync shared assets and start Astro locally.            |
| `npm run build`          | Sync shared assets and build static output in `dist/`. |
| `npm run preview`        | Serve the last production build locally.               |
| `npm run astro -- check` | Run Astro's project checks once configured.            |

## Cloudflare Workers static assets

The production target is a Cloudflare Worker that serves Astro's static build
output. The connected Cloudflare Workers Build uses:

| Setting                | Value           |
| ---------------------- | --------------- |
| Production branch      | `main`          |
| Root directory         | `website`       |
| Build command          | `npm run build` |
| Build output directory | `dist`          |
| Node.js version        | `26.8.2`        |

`wrangler.jsonc` points Workers Static Assets at `dist/`; no Worker application
code is needed. Do not commit provider tokens, project IDs, custom-domain
settings, or other credentials. Preview deployments are disabled so branches
cannot create public URLs for unapproved content.
