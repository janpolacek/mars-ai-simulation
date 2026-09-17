# Build + deploy verification: 002-payload-selection

Card: `t_b429a50d` (step 002-payload-selection, stage deploy/verify) · profile `mars-ai-simulator-dev`
Date: 2026-09-17 · written at the handoff, after the push and the live check

Companion to the release record `.agents/work/releases/002-payload-selection.md` (editor card
`t_5a62fb28`), which states that build + guard proof belongs to this card. This file is that proof.

## Status

**Published and live.** The flipped article was built, guarded and pushed by this card; the push to
`main` is the automatic Cloudflare Workers deploy (human instruction 2026-09-17, `AGENTS.md`), and the
live origin was verified after the deploy finished. No agent ran the deploy action itself: no
`wrangler`, no credential, no DNS call.

## Inputs (all preconditions met before the build)

- Release flip — `t_5a62fb28` (editor), Gate 2 recorded verbatim: article `publication: published`,
  `media: payload-sensor-illustration`, with the approved alt text and label.
- Media key — `t_4b49346b` (dev): `payload-sensor-illustration` in `src/lib/media.ts`; the canonical
  asset `docs/payload/payload-sensor-illustration.png` is tracked in git.
- Homepage hero — `t_183d9f11` (dev): `done`, so the one-`website/`-card-at-a-time rule was satisfied.
- Article bytes — `sha256 website/news/002-payload-selection.mdx` =
  `adc6a1a68cefac0e1ee0ec9e7cd705158e98d83ce9b4b430ad41523ceb709711`, identical to the hash the
  release card released.

## Build and guard evidence

Run in the shared checkout, `website/`, Node v26.8.2 (`website/.node-version`).

```
npm run build          -> exit 0   (astro build + postbuild check-dist)
[check-dist] generated routes: /404.html, /about/index.html, /googlef5c43421bd049659.html,
                                /index.html, /news/001-project-announcement/index.html,
                                /news/002-payload-selection/index.html, /news/index.html
[check-dist] no reference into a withheld directory, and no withheld file or marker in dist/.
[check-dist] splash scope: only /index.html carries the splash and its is-loading class.
```

`/news/002-payload-selection/index.html` is in the generated route set. Listing, per surface, counted
as elements (`grep -o … | wc -l`, not `grep -c`, which counts minified lines):

```
href="/news/002-payload-selection/"   dist/index.html      = 1
href="/news/002-payload-selection/"   dist/news/index.html = 1
```

Card image: the card body's prescribed `class="card-media"` does not exist in this site — the news
card's image block is `div.news-image` with `span.image-label`. Measured on the emitted markup
instead: all three surfaces reference
`/_astro/payload-sensor-illustration.BprT2vSN_ZRie9U.webp` (54,982 B), with the approved alt text and
the label `Red Horizon // payload sensor illustration` on the two listing surfaces.

Gated markers in the build output:

```
grep -rIl "RH-01\|Pathfinder\|18° 42\|226° 14" dist/   -> 0 files
```

### Guard proof (end to end)

Planted `website/public/assets/RH-01-probe.txt`, rebuilt, removed, rebuilt clean:

```
npm run build   (probe present)  -> exit 1
  - gated-text: …/dist/assets/RH-01-probe.txt (RH-01)
  [check-dist] pruned 1 withheld file(s) from dist/.
```

The probe is absent from `dist/` after the tripped build, and `website/public/assets/` (gitignored, so
a clean `git status` is not proof) was confirmed on disk to hold only the two favicons afterwards. The
clean rebuild exits 0 with 0 probe files under `dist/`.

Other gates on this tree: `npm run typecheck` exit 0 (48 files, 0 errors/warnings/hints);
`npm run lint` exit 0. `npm test` is **not** green — see the open finding below.

## Commit and push

- `44e416f` — `t_b429a50d: publish 002-payload-selection after human approval`:
  `website/news/002-payload-selection.mdx` (+4/−1).
- `f3f143b` — `t_b429a50d: site-deployment skill - …`:
  `.agents/skills/site-deployment/SKILL.md` (+20/−3).

Push: `ca03b35..44e416f  main -> main` (exit 0), then `d1749fe..f3f143b  main -> main` (exit 0);
`git pull --rebase` was refused by sibling roles' uncommitted files, and both pushes were verified as
clean fast-forwards instead (`origin/main` was the commit's parent, 0 behind / 1 ahead).
`git log origin/main..HEAD` is empty; `origin/main == HEAD == f3f143b`.

Note: the card body asked for `git add website/dist/ …`. `dist/` is gitignored (`**/dist/`), so no
build output can be committed; the site is published by the host building the pushed commit. Only the
article and the skill file were staged — never a sibling's in-flight file.

## Live verification (after the deploy finished)

```
GET /news/002-payload-selection/                                   -> 200
      title: "Choosing what a Mars rover carries. | Red Horizon"; 0 gated markers
GET /                                                              -> 200, 1 href to the article
GET /news/                                                         -> 200, 1 href to the article
GET /_astro/payload-sensor-illustration.BprT2vSN_ZRie9U.webp       -> 200, 54,982 B
      live sha256 9860e70059a792c5a20bdd677e134230f754ebbd6c15d02440329e4553025f43
      == this checkout's emitted sha256 (byte-identical)
```

The route answered 404 for ~80 s after the push while the Workers Build ran, then 200; the two
listing surfaces picked up the href and the media asset in the same deploy. Re-verified after two
further sibling pushes, and after `f3f143b` (which changes no build input).

## Open finding — `npm test` is red, and so is CI

```
Test Files  1 failed | 5 passed (6)
     Tests  2 failed | 70 passed (72)
```

`test/guards.test.mjs` → `keeps every unpublished article body out of the build` (line 287) and
`renders no page, no listing entry, and no card for an unpublished article` (line 339), both
`expected 0 to be greater than 0`.

Cause: both loop over `unpublishedSlugs()` (line 152) and assert the loop checked at least one item.
`website/news/` now holds only published articles, so 002's flip removed the last ambient draft these
tests were borrowing. Nothing leaked; the guard simply has nothing to check. It was **not** silenced:
the fixture-presence assertions are the only thing stopping the guard from reporting success while
checking nothing, and weakening them is out of bounds.

The repair needs a decision this card does not own. A draft written during the test run cannot repair
these two, because both assert over the already-built `dist/` — a fixture created after the build was
never in it, so the assertion would pass vacuously. The gate itself is already covered self-contained
by the `publication gate` block (synthetic `draft`/`published` items through `selectPublicNews`), so
the build-output half needs either a standing draft article under `website/news/` (an editorial-space
decision) or a scratch build inside the test. `.github/workflows/ci.yml` now runs `npm test` on every
push to `main`, so this is a red CI run, not only a red local suite.

Handed to card `t_10109bf6` (dev), gated behind this card.

## Held at the handoff

Six other dev cards were live on this checkout, so only this card's own two paths were committed.
Left uncommitted and deliberately not snapshotted: `README.md`, `docs/README.md`, the four
`.agents/skills/*/SKILL.md` edits, `.agents/work/assets/002-payload-selection/assets.md`,
`.agents/work/{continuity,drafts,reviews,seo}/progress-log.md`,
`.agents/work/reviews/002-payload-selection-media.md`, `.agents/work/releases/`,
`docs/harness/`. `.agents/work/releases/` is the release ledger of blocked/completed cards
`t_5a62fb28` and `t_dd78c8e6` (`t_dd78c8e6` was running against that record). A clone cannot build
without `docs/payload/payload-sensor-illustration.png`; it is tracked, so it is in the pushed commit.
