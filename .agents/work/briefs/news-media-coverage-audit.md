# News media coverage audit and corrective routing

Card: `t_efaee4b7`
Timeline scope: released news steps `001-project-announcement`, `002-payload-selection`, `003-vehicle-design`, and `004-launch-provider`.
Audit date: 2026-09-18 CEST.
Status: measured; no corrective child graph created because the authoritative live surface has no affected published article.

## Release goal

Maintain the public invariant that every published news article has at least one resolved, real image with non-empty descriptive alt text on its detail page, the newsroom index, the homepage news card/carousel, and no placeholder slide is included in the published set. This card routes work only; it does not alter public content, approve canon, or publish.

Human requirement preserved verbatim:

> planner should make sure editor / planner change news 004 -> there are missing images that already exit for ariane, there are multiple; there is also missing "carousel" image for that "news"; each article should contain image, and be considered, what images are required -> then they should be requested from image visualizer agent -> handed over and used in article; if possible, each article should contain at least one image, either existing, downloaded from web or generated

## Measured inventory

All four published source articles were enumerated from `website/news/*.mdx`:

| Slug | Source | Media declaration | Registry key / source asset | Source asset measurement | Published live detail | Live `/news/` card | Live `/` carousel card |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `001-project-announcement` | `website/news/001-project-announcement.mdx:10-19` | `asteria-plates`, 3 alts, 3 captions, label | `website/src/features/news/media.ts:28-45`; `docs/area/asteria-field-01-mars-locator.png`, `-02-regional-context.png`, `-03-local-operations.png` via `website/src/lib/assets.ts:3-5` | AF-01 `1536x1024`, sha256 `f12c58f57d3315f6446bcea61fb5258e4731192fb7fa2f9390dfe3d06a48085c`; AF-02 `1536x1024`, `253784572f441738c305c2d481c1ece785872b305113e373371a9f5af4f357e0`; AF-03 `1448x1086`, `2890e34343bf7f5441ae3352d681039fc4383edbb7fabdebad7aab875c451c23` | 200; 3 article plates, non-empty alts | 200; AF-01 lead image | 200; AF-01 lead image |
| `002-payload-selection` | `website/news/002-payload-selection.mdx:10-12` | `payload-sensor-illustration`, one alt, label | `website/src/features/news/media.ts:60-62`; `docs/payload/payload-sensor-illustration.png` via `website/src/lib/assets.ts:8` | `1024x1024`, sha256 `47d39a0bbe4e69992f3aa5c005015b2373aa19b0d4126787536701cf3562aed9` | 200; 1 image, non-empty alt | 200; 1 image | 200; 1 image |
| `003-vehicle-design` | `website/news/003-vehicle-design.mdx:10-12` | `vehicle-references`, one alt, label | `website/src/features/news/media.ts:79-80`; `docs/vehicles/pathfinder/canonical.png` via `website/src/lib/assets.ts:10` | `1448x1086`, sha256 `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267` | 200; 1 image, non-empty alt | 200; 1 image | 200; 1 image |
| `004-launch-provider` | `website/news/004-launch-provider.mdx:10-12` after the completed revision | `launch-vehicle-reference`, one alt, label; no caption by contract | `website/src/features/news/media.ts:99-101`; `docs/vehicles/ariane/canonical.png` via `website/src/lib/assets.ts:9` | `1122x1402`, sha256 `cf3323bf5dfb45e77b3400cd0d0dc1b107359a1d9403a6d7442a480d1228c44b` | 200; 1 image, non-empty alt | 200; 1 image | 200; 1 image |

Live measurement used browser `fetch(..., {cache:'no-store'})` and DOM parsing against `https://mars-ai-simulation.janpolacek.workers.dev/` on `/`, `/news/`, and all four detail routes. The live response for `/` contained seven images including four news images (the other three are site identity/hero images); `/news/` contained four news images; each detail route contained the expected news image(s) plus the header mark. Every news image had a non-empty alt string. The live 004 image was `/_astro/canonical.B5Cinj0C_ZPsHQo.webp`, 1024x1280, and its alt and label matched the approved revision hashes recorded by parent card `t_d7e3aa8b`.

The local `website/dist/` snapshot is stale relative to the live origin: its detail route `website/dist/news/004-launch-provider/index.html` has only the header image, and its local homepage/news index omit the 004 image. This is not a live defect: parent card `t_d7e3aa8b` verified the post-revision live route and derivative byte-for-byte, and the current live origin is authoritative for released content. A future dev validation may rebuild the current tree, but no corrective media implementation is justified by the measured public surface.

## 004-specific finding and reuse decision

The prior Ariane editorial selection record `.agents/work/reviews/ariane-plates-selection.md:177-203,271-304` admits exactly `docs/vehicles/ariane/canonical.png` and marks `front-left.png` alternative-only; `side-view.png`, `rear-right.png`, `lunch.png`, and `travelling-to-mars.png` remain withheld or not-the-silhouette. The revision record `.agents/work/reviews/004-launch-provider-revision.md:323-361` and release append `.agents/work/releases/004-launch-provider.md:533-564` confirm that only the canonical plate is public. No alternative or withheld plate may be silently added.

Decision: **no new imagery for 004; reuse `docs/vehicles/ariane/canonical.png` exactly** through `launch-vehicle-reference`. The existing manifest `.agents/work/assets/004-launch-provider/assets.md` is the provenance handoff; the editor-approved alt and label are already live. The portrait aspect ratio is intentionally contained, not cropped, on all three surfaces. No second carousel asset is required because `NewsCard.astro:63-73` resolves the same lead plate for detail cards and `NewsCarousel.astro:17-19` renders every published item as a `NewsCard`.

## Required-image matrix and deliberate omissions

| Article | Required public image | Reuse / request | Visual brief or manifest | Deliberate omission |
| --- | --- | --- | --- | --- |
| 001 | At least one lead image; detail keeps all three plates | Reuse existing approved Asteria set; no generation | `.agents/work/assets/001-project-announcement/assets.md` | No new Asteria render; no unpublished landing-design material |
| 002 | One resolved lead image | Reuse existing approved payload illustration | `.agents/work/assets/002-payload-selection/assets.md` | Do not substitute the rejected side-matte/star candidate named in its editorial record |
| 003 | One resolved lead image | Reuse `docs/vehicles/pathfinder/canonical.png`; no generation | `.agents/work/assets/003-vehicle-design/assets.md` | Do not place the withheld `contact-arm-scene.png` or the other unplaced renders |
| 004 | One resolved lead image on detail, index, homepage carousel | Reuse `docs/vehicles/ariane/canonical.png`; no generation | `.agents/work/assets/004-launch-provider/assets.md` | Do not place Ariane `front-left.png` as a second plate, and do not place the four withheld/alternative-only plates; no new carousel-only asset |

Web-downloaded imagery is not needed. If a future article lacks an approved reuse candidate, its visuals card must include a bounded brief with placement, smallest candidate count, aspect ratio, exact continuity references, allowed released facts, forbidden/spoiler classes, intended alt meaning, rights/provenance, and `.agents/work/assets/<slug>/assets.md`; generation must use the hosted image workflow and candidates must remain outside the repository until editorial selection.

## Canon and confidentiality boundary

Allowed facts are only the released facts represented by each article and its approved dossier/media record. Image labels, alt text, captions, filenames, metadata, and links must not disclose private timeline material, later mission events, unpublished real institutions/operators/facilities, launch-day details, landing-site details, or withheld Ariane plates. No new canon, public timing, rights statement, or publication decision is made here. The reviewer-in-chief owns editorial confirmation and release; the human story owner owns canon authorship, release order, and unresolved rights/account decisions.

## Board routing result

A board-wide open-card scan at completion found only:

- `t_74d301a3` — `mars-ai-simulator-dev`, running, owns the current held-change-set/repository close-out and overlaps relevant shared paths; it is not a media corrective card and must not be raced.
- `t_efaee4b7` — this audit.

Parent `t_d7e3aa8b` is complete and its 004 live verification is the authoritative upstream handoff. No open card duplicates any of the four article source files or the four existing asset manifests for this audit's measured scope.

**Created child cards: none.** Because every published article already satisfies the live invariant and each needed image is already approved, resolved, and visible on all required public surfaces, creating visuals/editor/writer/dev cards would duplicate completed ownership and violate the instruction to avoid racing the 004 chain. No child IDs or parent/child edges exist. The stale local `website/dist/` snapshot is a validation-state observation, not a public-content defect; t_74d301a3 remains the current technical owner of the shared checkout.

## Acceptance criteria for any future corrective graph

If a later live audit finds a failure, create one serial lane per affected article only:

1. `mars-ai-simulator-visuals`: reuse exact path or bounded visual brief; write `.agents/work/assets/<slug>/assets.md`; record candidate/cache/export identifiers, rights/provenance, alt, and final studio state.
2. `mars-ai-simulator-reviewer`: select/approve the exact file/key/alt/caption, confirm canon and rights, and record the release decision before public bytes change.
3. `mars-ai-simulator-writer` or `mars-ai-simulator-dev`: consume the approved handoff and wire frontmatter/registry. A dev card must state its required commit message, commit SHA, push branch/remote, clean tree, and `git log origin/main..HEAD` empty; it must prove detail, `/news/`, `/`, and carousel rendering.
4. Technical validation occurs only after editorial approval. A failed generation, unresolved rights, withheld canon, unknown media key, missing alt, placeholder, or detail-only resolution blocks publication rather than being inferred away.

## Validation and next action

Completed: source inventory; media/schema/registry trace; SHA-256 and pixel measurements for every canonical source asset; live route and image/alt measurement; 004 plate verdict and release-record cross-check; open-board ownership scan; local stale-dist comparison.

Review outstanding: none for this planner audit artifact; the audit does not approve or publish media. Recommended next owner/action: leave the board unchanged while `t_74d301a3` completes its scoped repository close-out; then run a fresh technical build/live verification if the operator wants the local `website/dist/` snapshot refreshed. Any newly measured live failure should reopen a narrowly scoped serial graph rather than reuse this no-op decision.
