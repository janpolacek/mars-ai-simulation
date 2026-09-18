# Test-suite attribution and scratch copies

Deciding whether a red or a green suite says anything about your own change, and the
scratch copy that lets you answer it without touching the shared tree.

- A shared `dist/` can hide a real test failure, so `npm test` passing before your
  own build proves nothing — build first, then test. Astro copies every file in
  `website/public/` verbatim into `dist/`, and `listRoutes()`
  (`website/scripts/guards.mjs`) returns those files as generated routes, so
  `test/guards.test.mjs`'s `route identity` assertion fails on any `public/` file
  with no `<title>`: the human's Google Search Console verification file
  (`website/public/googlef5c43421bd049659.html`, commit `b4ed729`, content
  prescribed by Google) did exactly this and made a fresh build of `main` fail
  1/50 for every worker until a card owned the repair.

- Attribute a failure to a file instead of arguing it: park the suspect file,
  rebuild and retest, then restore it byte-identically and rebuild and retest, in
  one node script with a `finally` restore and a before/after sha256
  (`/tmp/rh-gsc-attribution.mjs` pattern). Green with the file absent plus the
  same red with it present isolates the cause without touching your own diff.
  Never `git stash` to measure HEAD here: an unfiltered stash sweeps sibling
  roles' uncommitted files on this shared checkout. While a sibling card is live,
  also check the board right before your close-out — if it is still `running`,
  commit only your own paths and record the leftovers you held.

- Adding a `media:` key breaks three _existing_ assertions in
  `website/test/news-media.test.mjs`, not just a new case, and card bodies omit
  this: the `newsMediaKeys` deep-equal, the unknown-key message
  (`media must be one of: …`, which joins the whole key list), and the
  `resolves the two keys and nothing else` case. Update all of them or the suite
  ships red.

- Attribute a failing shared-checkout suite with a scratch copy of `website/`
  outside the repository: copy `website/` (skip `node_modules`, `dist`, `.astro`),
  symlink `node_modules` back, and symlink the repository root's other entries
  (`docs`, `tools`, `.agents`, …) **except** `website` and `.git`, because
  `scripts/guards.mjs` resolves `projectDirectory` as the copy's parent and reads
  the canonical `docs/` tree from there — symlinking avoids copying the withheld
  directories out of the repository. Restore the card's own files with
  `git show HEAD:<path> > <scratch path>`; if the same failures appear with the
  card's delta removed, they follow from the tree, not from the card. The same
  scratch tree gives red-first evidence for the card's new test and makes
  `check-dist`'s generated-route line comparable with and without the change (an
  unchanged route set, proven under one sibling state).

- When CI has no browser, a layout contract is still testable without one:
  evaluate the cascade of just the properties that decide flow (`display`,
  `position`, `visibility`, `content-visibility`, grid placement) from the built
  page's own stylesheets against the emitted markup, in both slide states and
  both breakpoints. The corpus needs both halves — component styles are inlined
  into the page's `<style>` blocks while page-level rules land in `_astro/*.css`,
  so a corpus of emitted CSS alone silently compares nothing — and the matcher
  must fail closed on a selector it cannot evaluate while skipping at-rules other
  than `@media`/`@supports`/`@layer` (so a `@keyframes` step never reaches it).
