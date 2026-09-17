---
name: seo-content
description: Improve search intent, metadata, internal linking, and information architecture for public Red Horizon pages without clickbait or narrative spoilers.
---

# SEO content for Red Horizon

Use this skill when planning or reviewing public news, wiki, mission-update, or
homepage copy for search discoverability. Do not use it to generate hidden
scenario material or to optimise an unpublished draft for public indexing.

Read `docs/GENERAL.md`, `docs/INSTRUCTIONS.md`, and
your own role definition (your agent's `SOUL.md` — the `mars-ai-simulator-seo` profile) before making
recommendations. Optimise for an
honest reader question, not traffic volume: choose one clear intent, a descriptive
title and meta description, a stable human-readable slug, useful heading order,
and a small set of natural internal links.

Do not manufacture keywords, claim real-world agency involvement, expose future
timeline events, or use metadata to reveal information that the page body may not
yet publish. Report recommendations as a review package; changing site schema,
creating a public page, or publishing remains subject to the project approval
workflow.

## Verified practice

- **Inventory the real indexable surface before recommending anything.** An
  article can be `publication: published` and still be rendered nowhere: the
  detail route is gated behind a human release reference. Check
  `website/src/lib/navigation.ts`, `website/src/lib/releases.ts` and
  `website/src/pages/` before proposing a URL, slug, heading outline or internal
  link. Never add a link, label or anchor that points at a route the site does
  not generate — that repeats the false-affordance defect the corrective cards
  were opened for.
- **The slug is not the frontmatter.** The content id (the file name) is the
  release-gate key and the URL segment; there is no `slug` field. Recommend a
  series-wide URL convention once, before the second article is released, instead
  of renaming a file that briefs, source packs, reviews and card text all cite.
- **Apply only meaning-neutral metadata, and record the revert string.** The
  frontmatter `title` and `summary` are the writer's visible copy and the public
  title may be an open human decision: recommend, do not overwrite. Alt text is
  the one frontmatter value this role can complete safely when the cue is
  verified visible and a prior gate asked for it; keep the wording
  background-neutral so it survives an open asset-variant decision.
- **Measure every proposed string** with a script, not by eye: search titles
  ≤ 60 characters, descriptions ≤ 155. A 250-character `summary` used as a meta
  description truncates mid-fact, and that is invisible until you count.
- **Read the document head of every route that builds, not only whether the route
  exists.** A page file that passes no `title`/`description` props to
  `BaseLayout` silently ships the site defaults, so two live routes can present one
  identity to a search engine. Grep the props in `src/pages/**` and the `<title>`
  values in the last `dist/` before recommending per-page metadata, and treat the
  duplicate as a metadata defect this role may fix with a recorded revert string.
- **An error route is a route.** `404.astro` renders inside the same layout, so it
  inherits the canonical derived from `Astro.url.pathname` and is indexable unless
  something stops it. Recommend the layout-level opt-out (`noindex`, no canonical)
  while no origin is recorded, and keep the error copy free of mission facts so it
  cannot outrun a release step.
- **Verify an image claim in the asset, not only in the rendered page.** Count
  the cue colours in the PNG (Pillow is available); a rendered-page measurement
  goes stale the moment the media pipeline changes.
- **Withhold structured data until its inputs exist.** `NewsArticle` needs a
  recorded first-publication date, a byline policy, a stable released URL and a
  machine-readable fiction disclosure; `Organization` markup for a fictional
  programme asserts a real entity and must never be used. Emitting no canonical
  while no production origin is authorised is the correct state, not a gap.
- **Cite the gated-term list; do not copy it.** A working paper is a git
  artifact: reference the list recorded in the step's editorial review instead of
  writing withheld names, coordinates, dates, providers or figures into a new
  file, and report the scan result rather than the term inventory.
- **A duplicate dispatch of a stage you already finished is a re-validation, not a redo.** Read the
  existing package against its acceptance criteria and the live tree, correct only what drifted, and
  leave an already-approved article byte-identical: re-applying metadata a gate has signed off would
  undermine the very approval that record carries. Record the pass as a dated re-validation section in
  the same package (a "was / is" table plus a fresh evidence table) instead of rewriting the reviewed
  text.
- **Re-measure the package's own validation claims; they go stale fast in a moving checkout.** Guard,
  test and lint counts from an earlier pass can invert within the hour (three `gated-path` findings →
  exit 0; "14 of 15 tests" → 36/36), and a gated-marker list can shrink when a human releases a
  previously withheld name — a retired guard marker is still content the step's brief may forbid, so
  keep treating it as withheld on that page. Re-run the commands and correct the rows in place.
- **Article media is key-based, so a new image is a site card before it is a frontmatter value.**
  `media:` names a key validated by the content schema; the allowed keys and their per-plate alt and
  caption requirements live in `src/lib/media.ts`, and the plate resolver plus the `src/lib/assets.ts`
  import must exist for that key. Recommend the frontmatter strings, and route a missing key as
  site-engineering work rather than assuming a visual can be declared.
- **Editing a package after a gate recorded its hash strands the hash, not the verdict.** Say so in
  the package, state that the reviewed article hash is unchanged, and route the re-baseline to the
  record's owner instead of editing their artifact. When a sibling card is already editing the site,
  file any follow-up with that card as its parent so two `website/` cards never run at once.
- **Settle a metadata convention in the package, and implement it as a card.** "The SEO owner settles
  the convention" means a decided string with its rationale and rejected alternatives recorded; the
  implementation stays a site card, and a title composed only of copy the site already publishes
  ("News" from the nav plus the existing `| {site.name}` template) needs no editorial sign-off.
- **Settle a shared metadata surface only after reading what is already applied to
  it, and name the value you are superseding.** Two of this role's packages settled
  opposite `<title>` strings for the same page three minutes apart — one applied in
  the page file, the other written against a premise the first had already falsified
  — and a dev card then implemented the loser; reconciling it cost two corrective
  cards. Read the target file, the last `dist/` output and any sibling package that
  names the same route before recording a decision, and state in the package which
  applied value (if any) the decision supersedes and which recorded alternative
  survives.
- **Shared checkout.** Other workers refactor `website/src/` and rename `docs/`
  files while a pass runs; re-read a file immediately before you patch it, and
  record any concurrent edit you find next to your own diff.
- **A scoped rule can compile into the built CSS and still never match.** Astro stamps
  `data-astro-cid-<scope>` on the elements written in the file that owns the `<style>` block, and on the
  root element of a child component *used* there — never on elements that child renders inside itself. So a
  `.parent-class h1 { font-size: … }` aimed at `SectionHeading`'s output is dead while the wrapper rule next
  to it is live, and the route `h1` ships at the base tier with no test or guard covering it. Audit by
  counting matches for every compiled selector that carries two scope attributes
  (`document.querySelectorAll(sel).length` on each built page; `:hover`/`:focus-visible`/`::after` rows read
  0 for state reasons and must be filtered) — reading the CSS cannot tell you. When a dead rule and the
  rendered value disagree, decide from the site's own hierarchy evidence (which tier the other route titles
  use, what the file overrides and caps), record the rejected alternatives, and file the fix as a dev card
  instead of editing the stylesheet yourself.
