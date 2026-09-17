# Red Horizon website

The static Astro application for Mars AI Simulation. It serves the Red Horizon
Preparing site today and is structured to carry the news, wiki, mission-update,
and media surface described in `docs/PLAN.md` Phase 2.

## Structure

```text
src/
  layouts/BaseLayout.astro      document shell: head, splash, page column, chrome slots
  components/                   shared presentational pieces, no feature knowledge
  features/<feature>/           one directory per product area
    news/                       query, media registry, card, carousel, list, article view
    mission/                    hero, at-a-glance panel, its fact list
    progress/                   public progress log and its steps
  styles/                       tokens, base/reset, layout utilities (page-wide only)
  lib/                          site strings, navigation map, route paths, release gate, helpers
  pages/                        file-based routes
```

Rules that keep it that way:

- A page composes sections; it holds no page-wide `<style>` block and no inline
  behaviour script. `src/pages/index.astro` imports four feature components.
- A component owns the styles for the markup it renders; only genuinely
  page-wide rules (reset, element typography, the `.page` column, the shared
  label and description treatments) live in `src/styles/`.
- A component in `src/components/` knows nothing about a collection.
- A feature owns its own query, its media, and its client behaviour, and does
  **not** import another feature's internals. Features may import `components/`
  and `lib/`.
- `src/lib/` holds strings and constants, never markup.

### Adding a feature

1. Create `src/features/<feature>/` with the components it needs.
2. Put its content query and any client module in the same directory.
3. Add a route under `src/pages/` that renders the feature with data.
4. Add the route to `src/lib/navigation.ts` if it belongs in the site nav — the
   header and the footer both render that one map.

### Typing

`npm run typecheck` checks `.astro` frontmatter, `src/**/*.ts`, and
`astro.config.mjs`. Type the boundaries that carry real logic — the collection
query, the release gate, the media registry, and `getStaticPaths` — in `.ts`
files, where the types actually flow into the pages.

`.astro` frontmatter stays plain JavaScript. ESLint parses it with `espree`, and
this project installs no TypeScript parser for `.astro`, so `interface Props`
and `import type` are parse errors; a JSDoc `@typedef` is not an alternative
because Astro compiles the frontmatter as TypeScript, where JSDoc types are
ignored. Components therefore read `Astro.props` directly and document their
props in a comment. Each feature component owns its collection query, which is
how its data stays typed without a props declaration.

Adding `@typescript-eslint/parser` as a dev dependency and setting it as the
`.astro` parser would restore `Props` interfaces and call-site prop checking.

## Routing

| Route           | Page                          | Notes                                                 |
| --------------- | ----------------------------- | ----------------------------------------------------- |
| `/`             | `src/pages/index.astro`       | Hero, mission panel, news carousel, progress log.     |
| `/news/`        | `src/pages/news/index.astro`  | Published items only, every card visible.             |
| `/news/<slug>/` | `src/pages/news/[slug].astro` | **Release-gated.** Generated only for released slugs. |

`astro.config.mjs` sets `output: 'static'` and `trailingSlash: 'always'`, so
every route is a directory with a trailing slash.

The homepage anchors `#top`, `#updates`, `#mission`, and `#timeline` still exist
and are still linked (`/#mission`, `/#timeline`); the nav's "News" entry points
at the real `/news/` index. There is no client-side router: "route" here means a
file under `src/pages/` plus one entry in the navigation map.

### Release gate

`src/lib/releases.ts` holds `releasedNewsSlugs`, the list of article slugs a
render may generate a detail page for. It is **empty by default**.

- An editor's `approved` review is not a release. A slug goes on the list only
  when a human has recorded a release reference on the task card.
- With the list empty, `getStaticPaths` returns nothing, so the build emits no
  `/news/<slug>/` page and no article body text anywhere in `dist/`. The news
  card's label then renders as a plain `<span>`: no dead href, no false link.
- When a slug is on the list, the card label becomes a link to the generated
  page and the article body renders from the MDX file.

`/about/` and `/404` are **not** built: both need approved prose that does not
exist yet. A follow-up card covers them.

### Canonical URLs

No production origin is recorded in this repository, so `astro.config.mjs` reads
`site` from the `SITE_URL` environment variable. With `SITE_URL` unset, no
canonical link is emitted. Set it to the human-approved origin for a release
build:

```sh
SITE_URL=https://<approved origin> npm run build
```

## News content

Articles are authored as MDX in [`news/`](./news/) and are the website's direct
publication source. The collection discovers every `*.mdx` file in that folder.

Frontmatter fields:

| Field         | Required | Notes                                                                                                                   |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `title`       | yes      |                                                                                                                         |
| `category`    | yes      | Shown as the card kicker.                                                                                               |
| `status`      | yes      | Shown next to the category.                                                                                             |
| `publication` | no       | `draft` \| `published`. **Defaults to `draft`**: an item that forgets to declare its state is held back, not published. |
| `summary`     | yes      |                                                                                                                         |
| `linkLabel`   | yes      | Rendered as text, and as a link once a release authorises a route.                                                      |
| `order`       | yes      | Sort key within the published set.                                                                                      |
| `media`       | no       | A media **key**, not a URL. See below.                                                                                  |
| `mediaAlt`    | no       | Required, and non-empty, whenever `media` is set.                                                                       |
| `mediaLabel`  | no       | Caption overlay on the card image.                                                                                      |
| `accent`      | no       | `oxide` \| `amber`, used by the placeholder panel.                                                                      |

The optional fields become required in the fields that matter: `order` and
`linkLabel` are required, and the schema refuses an item that sets `media`
without `mediaAlt`.

`publication: draft` material is filtered at collection-query level
(`src/lib/publication.ts`) as well as in the selection helpers, so a draft
cannot reach a card, a listing, or a route.

## Media

Canonical media lives under `docs/`, beside the dossier that owns it. The site
**references it at build time**; nothing is copied into `website/public/`.

- The identity mark is imported exactly once, in `src/lib/assets.ts`, from the
  hash-approved source named in `docs/brand/BRAND.md`. Components and the news
  media registry import it from there rather than re-importing the file.
- Astro's `astro:assets` pipeline reads the canonical file, emits an optimised
  hashed variant (`/_astro/...`), and the built page references that. A
  source-relative import may point outside the Vite root; that is how the
  `docs/` reference works.
- `website/public/assets/favicon.ico` and `favicon-32.png` stay **tracked** site
  files served at stable paths, because the platform needs fixed URLs for them.
- Per-placement sizes differ (the wordmark, splash, hero, and card each request
  their own width), so one source file yields a small variant per placement.

### Declaring media in an article

Article frontmatter cannot import an image, so `media:` names a **key**:

```yaml
media: programme-identity
mediaAlt: A rust-red Mars disc on black ...
```

`src/lib/media.ts` holds the key list (imported by the content schema, so it must
stay free of image imports); `src/features/news/media.ts` maps each key to the
canonical asset. To add media:

1. Put the approved asset in its subject dossier under `docs/`.
2. Add the key to `newsMediaKeys` in `src/lib/media.ts`.
3. Map the key to the imported asset in `src/features/news/media.ts`.

An unknown key fails the content schema with the list of valid keys. This is
deliberate: a URL in `media:` would silently 404 now that no copy step exists.

## Build guards

`npm run build` runs `scripts/check-dist.mjs` afterwards as `postbuild`. The
rules live in `scripts/guards.mjs` so the build and the test suite check the same
thing, and there is no copy step left to delete along with them.

What is enforced:

1. **No reference into a withheld directory.** The source scan covers `.astro`,
   `.mdx`, `.ts`, `.js`, `.mjs`, `.json`, `.css`, `.html`, `.svg`, and YAML — any
   literal path into a withheld dossier, and any relative reference (import,
   `src=`, Markdown link) that _resolves_ into one. Markdown prose is excluded,
   because the runbook discusses those directories by name.
2. **No withheld file in `dist/`**, matched by file name, by leading name token
   (which catches a re-encoded copy such as `canonical.<hash>.webp`), or by
   content hash.
3. **No withheld marker in built text** (see `gatedTextMarkers`).
4. The guard **prunes** whatever it finds from `dist/` and exits non-zero, so a
   stale output cannot be served even if someone ignores the failure.

`npm run check:dist` runs the same check without building.

The suite in `test/guards.test.mjs` exercises the rules against temporary
fixtures and, when `dist/` exists, against the real build. It asserts the draft
gate (no page, no listing entry, no card), that no unreleased article body text
reaches `dist/`, that the news card offers no link while no slug is released, and
that the release list is empty until a human records a release reference.

## Commands

| Command              | Result                                                         |
| -------------------- | -------------------------------------------------------------- |
| `npm run dev`        | Start Astro locally.                                           |
| `npm run build`      | Build static output in `dist/`, then run the build guard.      |
| `npm run preview`    | Serve the last production build locally.                       |
| `npm run check:dist` | Run the build guard against the existing `dist/`.              |
| `npm run typecheck`  | `astro check` — types for `.astro`/`.ts` including the config. |
| `npm run test`       | `vitest run` — the guard suite.                                |
| `npm run lint`       | `eslint .`                                                     |
| `npm run format`     | `dprint fmt` over the repository (`dprint.json` at the root).  |

## Runtime

Node is managed by `fnm` and pinned in `.node-version` (26.8.2).

```sh
fnm use
npm install
npm run dev
```

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

A release build additionally needs `SITE_URL` set to the approved origin (see
"Canonical URLs"). Deployment itself requires a current human instruction: no
agent profile holds release authority.
