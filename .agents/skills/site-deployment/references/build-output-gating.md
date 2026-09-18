# Build-output gating and emitted-file proof

What the build emitted, what the guard pruned, and which of those facts a grep over the
built output can and cannot prove.

- Gate the build output, not the build script's intent: after `npm run build` list
  `website/dist` and grep it for gated names, then prove the guard end to end by
  planting a single withheld marker under `website/public/assets/` and rebuilding
  — `postbuild` (`scripts/check-dist.mjs`) must report the offence, prune the file
  from `dist/`, and exit non-zero, so a stale output cannot be served. Remove the
  probe and rebuild clean afterwards: `website/public/assets/*` is itself
  gitignored (root `.gitignore`), so an orphaned probe does **not** show in
  `git status` and a clean status is not proof it is gone — confirm removal on
  disk (`ls website/public/assets/`), because the file stays publicly served
  either way.

- An empty grep over built HTML is not proof of absence: Astro injects scope
  attributes, so `class="card-label">` matches nothing on a page that does carry
  the element — the real markup is `class="card-label" data-astro-cid-…>`. Grep
  `class="card-label[^"]*"[^>]*>` (or `card-kicker[^>]*>`), and count the elements
  (`grep -c '<a class="card-label"'`) so a pattern that silently matches nothing
  cannot be read as a pass. A card body can also prescribe a class that does not
  exist: the news card's image block is `div.news-image` with `span.image-label`
  (`src/features/news/NewsCard.astro`), there is no `card-media` class anywhere in
  the site, and a grep for it returns 0 on a page that does render the card image.
  Check the prescribed selector against the component before reading 0 as "no
  image", then assert on the emitted `<img src>`/alt/label instead.

- `grep -c` counts matching _lines_, and Astro minifies built HTML onto one line,
  so an element count needs `grep -o '<a class="card-label"' dist/index.html |
  wc -l`. With one element the line-based form looks correct and cannot tell two
  from one: exercise the multi-item case (a temporary second article with
  `publication: published`) before trusting any "equals the expected count" check.

- An element's own `display` beats the UA's `[hidden]` rule, so a component styled
  `display: grid` stays rendered _and tabbable_ while carrying `hidden` and
  `aria-hidden="true"` — a carousel can put every slide in the tab order and the
  layout at once. Never take those attributes as proof a slide is out of the tab
  order: drive a real Tab trace
  (`cdp('Input.dispatchKeyEvent', type='keyDown'/'keyUp', key='Tab', code='Tab',
  windowsVirtualKeyCode=9)` N times, reading `document.activeElement` and
  `activeElement.closest('[hidden]')`), and check
  `getComputedStyle(card).display` plus `offsetParent === null`. Fix it with a
  scoped `.<component>[hidden] { display: none; }`. To assert the rule shipped,
  grep the built HTML as well as `dist/_astro/*.css`: Astro inserts its scope
  attribute between the compound parts (`.news-card[data-astro-cid-…][hidden]`)
  and inlines small scoped stylesheets into `<style>` blocks.

- An unreferenced asset does not reach the served output: `website/scripts/media-scope.mjs`,
  wired as the `mediaScope()` integration in `website/astro.config.mjs`
  (`astro:build:done`), removes every file under `dist/_astro/` that no built
  document references, and `website/test/media-scope.test.mjs` pins the rule on
  fixtures and on the real build output. So the procedure for a new `media:` key
  is: build, then assert `find dist -type f` lists no unreferenced `_astro` file,
  and that the asset appears — referenced — once the article's `publication` is
  `published`. The predicate is the build output, not the frontmatter, because an
  unreferenced emitted asset _is_ the asset of an item the publication gate holds
  back: a published item's page names its own file, so nothing renders the other
  one's. When an asset _is_ served, still hash it against its canonical `docs/`
  source to show it is not a re-encode.

- A release flip landing in the shared tree can break a guard suite that assumes
  a draft exists (`unpublishedSlugs()` plus `expect(length).toBeGreaterThan(0)`).
  Reproduce it against the scratch baseline before reporting, name the flip as the
  cause, and hand the assertion repair to the release's build card instead of
  fixing it twice. The repair is not a fixture written during the test run: both
  failing tests assert over the already-built `dist/`, so a draft created while the
  suite runs was never in the build and the assertion would pass vacuously. The
  gate itself is already covered self-contained by the `publication gate` block in
  `test/guards.test.mjs` (synthetic `draft`/`published` items through
  `selectPublicNews`), so the build-output half needs either a standing draft
  article under `website/news/` — an editorial-space decision, not a dev one — or a
  scratch build inside the test. Settle which before editing, and never drop the
  `toBeGreaterThan(0)` presence assertion to go green: that deletes the only thing
  stopping the guard from reporting success while checking nothing.
