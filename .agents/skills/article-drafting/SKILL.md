---
name: article-drafting
description: Draft one accessible Red Horizon article or wiki reference page strictly from its brief and source pack.
---

# Article drafting

Required inputs: the claimed kanban card, `.agents/work/briefs/<slug>.md`,
`.agents/work/sources/<slug>.md`, the article or wiki template, and the relevant writer and
brand-voice contracts. Read `AGENTS.md`, `docs/INSTRUCTIONS.md`,
your own role definition (your agent's `SOUL.md` — the `mars-ai-simulator-writer` profile),
`.agents/skills/brand-voice/SKILL.md`, and the source
pack before writing.

The skill covers **two related deliverables**: the news article graph
(`website/news/<slug>.mdx`) and the wiki reference-entry graph
(`website/wiki/<section>/<slug>.mdx`). The wiki variant follows the rules below
under **Reference entry (wiki)**, force-loaded on every wiki writer card via
`--skills article-drafting`. The wiki schema has no `simulatedDate` field; no
wiki page may present one.

Allowed tools: repository editing, source-pack inspection, and the `hermes kanban`
worker commands (`show`, `claim`, `comment`, `complete`). A worker may only
claim, comment on, and complete its own card; it does not create or reassign
cards. Do not research around an unresolved source-pack gap, approve canon,
create media, or deploy.

Prepare only `website/news/<slug>.mdx`. Preserve its stable front matter and set
`publication: draft` until a human authorises publication; the website filters
drafts out. Leave the simulated record date (`simulatedDate`) unset: the
editorial gate assigns it from the milestone table in `docs/SCENARIO.md`, and a
date chosen at drafting is new scenario canon, which no drafting role owns. Use
clear Markdown/MDX, link sources naturally, and distinguish real-world facts from
the fictional, AI-assisted Red Horizon project when relevant.

Reject uncited material claims, a conflict with the brief/source pack/canon, or
missing required metadata. Acceptance checks: title and body match the brief;
each material claim traces to the source pack; no private timeline material is
present; Markdown headings and links are usable. Record paths and checks as a
card comment (`hermes kanban comment <id> "..."`) and in
`website/news/<slug>.mdx` before `hermes kanban complete`.

## Reference entry (wiki)

The wiki graph is a **reference entry**, not a news article. The wiki MDX lives at
`website/wiki/<slug>.mdx` (flat under the collection's `base: ./wiki`; the URL is
`/wiki/<section>/<slug>/` — the section comes from the frontmatter, not the
directory). A nested path like `website/wiki/<section>/<slug>.mdx` produces
`/wiki/<section>/<section>/<slug>/` and fails the build with
`TypeError: Missing parameter: section` (the glob loader has no
`generateId`). The site asserts the flat shape in
`website/test/wiki-index.test.mjs` and the SEO structural review recommends it
(`.agents/work/seo/wiki-collection.md:58`).

The schema (`website/src/content.config.ts:78-117`) requires `title`, `section`,
`publication`, `order`, `summary` and accepts `related`, `canonicalDocs`, and the
same media fields as news. The page is a single subject, stable enough to be
linked to from anywhere and re-read unchanged.
This section is the wiki voice rule; record it once here so page N is not
re-litigated by each writer.

- **No news structure.** No news lead / inverted pyramid; no announcement or
  "has been selected" framing; no dateline; no journalist attribution; no
  "recently / latest / now / this week / this year"; no promise of future
  events ("will soon", "is expected to"). The page describes what its subject
  _is_, in a stable present, not what happened.
- **Subject headings.** Structure the body by **subject headings** — identity
  and control facts (canonical dossier's "Control record"), description,
  constraints, relationships — not by narrative chronology. The canonical
  dossier in `docs/` is the model.
- **Traceability.** Every material claim traces to the canonical dossier; name
  it in `canonicalDocs:`. Where the dossier is silent, name the gap or omit
  the claim. The source pack (`.agents/work/sources/wiki-<slug>.md`) holds the
  per-claim citations.
- **`summary` is a reference gloss** of the subject (renders as the index deck
  and the meta description, ≤155 chars); never a news standfirst.
- **Cross-links.** `related:` for wiki→wiki cross-links (resolves against the
  published selection, so unknown or withheld ids produce no link); inline
  `/news/<slug>/` links to the published article that first released a fact.
  A `/news/<slug>/` link is only valid after that file exists in `dist/`.
- **No record date.** The wiki schema has no `simulatedDate` field; no wiki
  page may present one. Do not write "as of", "in [year]" or any date string
  that implies a fictional day of writing. A wiki page is not "written on" a
  date.
- **Media reuse only.** A wiki page carries `media:` only when an existing
  media key is reused (`vehicle-references`, `asteria-plates`,
  `programme-identity`, `payload-sensor-illustration`). The key's requirements
  (`plateCount`, `altCount`, `captionCount`, `requiresLabel`) come from
  `src/lib/media.ts` and apply to the wiki frontmatter the same way they do for
  news. A new media key is a decision plus a dev card, never a discovery by
  the visuals worker.
- **Wiki-path independence.** The page is a wiki leaf, not an article. No link
  to `docs/timeline/`. No performance figures (speed, range, mass) unless
  released in the canonical dossier. No Ariane 64 or any other launch vehicle
  unless the canonical dossier names it as released canon. No real-institution
  claim beyond the SCENARIO research-grounding sources (no endorsement, no
  partnership).
- **Set `publication: draft` on staging.** The build filters drafts out; the
  editorial gate flips `publication: published` on its release decision.

Acceptance for a wiki draft: title fits the wiki deck (≤60 chars with `| Red
Horizon` suffix), summary is a reference gloss (≤155 chars), body is subject
heading-led, every claim traces to the source pack, no `simulatedDate`, no
release date, no news structure. The SEO pass remeasures title/summary length
on the built page; the editorial gate re-measures on the built page. Record
paths and checks as a card comment and in the MDX file before
`hermes kanban complete`.

## Pitfalls

- **A draft already at the target path may be an approved revision.** The article graph
  can be re-issued (a path or docs restructure, a re-planned step), so a new draft card
  can arrive for a slug whose artifact already exists. Before writing, compare
  `sha256sum website/news/<slug>.mdx` with the hash recorded in
  `.agents/work/reviews/<slug>.md` and in any downstream deploy handoff. When it matches
  an `approved` revision, re-verify that revision against the brief and source pack and
  report the duplicate instead of rewriting it — overwriting an approved revision
  invalidates the editorial verdict and every downstream record pinned to that hash.
- **Another stage's non-blocking suggestions are not yours to apply freely.** Copy items a
  reviewer marked optional are writer-owned, but applying them changes the hash and needs
  re-review. Hand the decision back on the card rather than editing an approved file.
- **Re-verify, do not trust, prior handoffs.** Re-run the build and the forbidden-term
  scans in your own session; other profiles edit the same working tree concurrently, so a
  hash recorded an hour ago may already be stale.

## Verified practice

- **The card body's frontmatter instructions can be stale — the site's code is the
  authority.** A card may say "keep `media: /assets/logo.png`" long after the schema moved
  to media _keys_ (`src/lib/media.ts` + `src/features/news/media.ts`). When released media
  exists, read both modules: they state the key, the plate count, and how many `mediaAlt`
  / `mediaCaption` / `mediaLabel` entries the key demands. A key mismatch fails the build;
  a value that predates the schema cannot be honoured at all, so record the switch on the
  card instead of guessing.
- **Never duplicate a component-composed caption.** `src/features/news/plates.ts`
  (`plateCaptionText`) already joins the plate label, the registry's provenance sentence
  and any per-plate `captionNote` onto the article's own caption; writing the provenance
  into `mediaCaption` prints it twice. Verify the rendered caption, not the frontmatter
  text, and say so in the handoff so the editorial gate does not hunt for it.
- **An unpublished article body is never compiled.** The detail route is release-gated
  (`src/lib/releases.ts`), so a `publication: published` body is not rendered by
  `astro build` and MDX syntax errors in it stay invisible. To render one, copy `website/`
  (excluding `node_modules`, `dist`, `.astro`) plus a symlink to `docs/` into a scratch
  directory outside the repository, set the released-slug list **only in the copy**, and
  build there; then inspect the HTML for figures, alt text, captions and paragraphs.
  Editing the repository's release gate even briefly can put an unreleased article in
  front of another worker's build — do not.
- **Prove the schema check is running; do not infer it.** Add a temporary entry with a
  deliberately wrong media field count, run the build, confirm the
  `InvalidContentEntryDataError`, then delete the probe and rebuild green. A passing build
  only means something once the same build has been shown to fail on bad input.
- **Keep a body under ~600 words heading-free unless the SEO record says otherwise.** The
  retro SEO pass keys the heading decision on body length, so check that record before
  adding `h2`s, and tell the SEO card when the body has moved close to its threshold.
- **Another profile's in-flight edits can look like your regression.** When `npm test`
  fails on fixture strings that are not your article and a component file's mtime is
  seconds old, re-run, note the mtime, and flag the file as a hotspot on the card rather
  than "fixing" someone else's component.
- **A stub can arrive declaring a media key the registry does not have yet.** A planning
  stub may carry `media: <key>` for a plate no site card has wired, and `newsMediaKeys`
  (`src/lib/media.ts`) fails the content schema, so `astro build` stops with
  `InvalidContentEntryDataError: … media must be one of: …` before any page renders (and the
  authoring card owns the red build, not the site card). The fail-closed draft state is **no
  `media` key at all** — the release record's Gate 1 default, amber `news-placeholder` — with
  the alt text and label left in the asset manifest for the release card. For a plate under
  `docs/vehicles/pathfinder/` the site card that registers the key also needs a `guards.mjs` repair:
  `vehicle` is a gated directory name, so the resolver's import fails `check-dist`'s source
  scan. Report that dependency on the card instead of registering the key yourself.
