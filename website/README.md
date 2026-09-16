# Red Horizon website

This is the static Astro application for Mars AI Simulation. It will begin as the
Red Horizon Preparing site and later render approved news, wiki, mission-update,
and media content.

## News content

Homepage news items are authored as MDX files in [`news/`](./news/) and are the
website's direct publication source. Drafts may be staged there with
`publication: draft`; the homepage filters them out. Use `publication: published`
for content cleared for the public site. The Astro content collection discovers
every `*.mdx` file in that folder during the build and orders published items by
their frontmatter `order` value. Each file must include:
`title`, `category`, `status`, `summary`, `linkLabel`, and `order`. Optional
`publication`,
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

Approved reusable assets remain in `../docs/brand/` and `../docs/vehicle/`,
where they are the canonical sources. The `predev` and `prebuild` scripts copy
their PNG exports to `public/assets/`, making them available at
`/assets/<filename>`. The favicon exports are kept in `public/assets/` as
tracked site files alongside the generated copies.

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
