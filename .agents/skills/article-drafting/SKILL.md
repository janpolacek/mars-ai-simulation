---
name: article-drafting
description: Draft one accessible Red Horizon article strictly from its brief and source pack.
---

# Article drafting

Required inputs: the claimed kanban card, `.agents/work/briefs/<slug>.md`,
`.agents/work/sources/<slug>.md`, the article template, and the relevant writer and
brand-voice contracts. Read `AGENTS.md`, `docs/INSTRUCTIONS.md`,
your own role definition (your agent's `SOUL.md` — the `mars-ai-simulator-writer` profile),
`.agents/skills/brand-voice/SKILL.md`, and the source
pack before writing.

Allowed tools: repository editing, source-pack inspection, and the `hermes kanban`
worker commands (`show`, `claim`, `comment`, `complete`). A worker may only
claim, comment on, and complete its own card; it does not create or reassign
cards. Do not research around an unresolved source-pack gap, approve canon,
create media, or deploy.

Prepare only `website/news/<slug>.mdx`. Preserve its stable front matter and set
`publication: draft` until a human authorises publication; the website filters
drafts out. Use clear Markdown/MDX, link sources naturally, and distinguish
real-world facts from the fictional, AI-assisted Red Horizon project when
relevant.

Reject uncited material claims, a conflict with the brief/source pack/canon, or
missing required metadata. Acceptance checks: title and body match the brief;
each material claim traces to the source pack; no private timeline material is
present; Markdown headings and links are usable. Record paths and checks as a
card comment (`hermes kanban comment <id> "..."`) and in
`website/news/<slug>.mdx` before `hermes kanban complete`.

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
  to media *keys* (`src/lib/media.ts` + `src/features/news/media.ts`). When released media
  exists, read both modules: they state the key, the plate count, and how many `mediaAlt`
  / `mediaCaption` / `mediaLabel` entries the key demands. A key mismatch fails the build;
  a value that predates the schema cannot be honoured at all, so record the switch on the
  card instead of guessing.
- **Never duplicate a component-composed caption.** `src/features/news/plates.ts`
  (`plateCaptionText`) already joins the plate label, the registry's provenance sentence
  and any per-plate `captionNote` onto the article's own caption; writing the provenance
  into `mediaCaption` prints it twice. Verify the rendered caption, not the frontmatter
  text, and say so in the handoff so continuity does not hunt for it.
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
