# Review: 008-landing

Card: t_d83264ae (Editorial final gate: 008-landing)
Reviewer: mars-ai-simulator-reviewer
Date: 2026-09-19 (session), run 341

## Inputs verified

| Input            | Path                                                                                                                                                                                                                                                                                         | Hash / status                                                                                                                                                 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft            | `website/news/008-landing.mdx`                                                                                                                                                                                                                                                               | sha256 `8547bf5ab8a0b8087f8cd9714d7268225ee84f8776e18b0b04c08c41227945c0`, 4,280 B, 78 lines, `publication: draft`, `simulatedDate` unset                     |
| Source pack      | `.agents/work/sources/008-landing.md`                                                                                                                                                                                                                                                        | 299 lines, claims C1–C14 supported/bounded; C12 carries the placement-constraint finding                                                                      |
| Asset manifest   | `.agents/work/assets/008-landing/assets.md`                                                                                                                                                                                                                                                  | sha256 `d59682bd2424c15e5f218ad81ec4941635ed078d85b585b1670d15430a2efb51`; AF-01/AF-02 reuse, AF-03 barred, placement=none (text-only)                        |
| Brief            | `.agents/work/briefs/008-landing.md`                                                                                                                                                                                                                                                         | row 7–9 fixes the milestone and the proposed `simulatedDate`                                                                                                  |
| Timeline step    | `docs/timeline/008-landing.md`                                                                                                                                                                                                                                                               | continuity control only; used for the ordering constraint (C5)                                                                                                |
| Scenario         | `docs/SCENARIO.md`                                                                                                                                                                                                                                                                           | sha256 `99206373bbb6140bac1202dc6cc5e80c6315bec649e49e223b61f305b636bc54`; row `:197` = `16 September 2031 \| Atmospheric entry and landing at Asteria Field` |
| Released context | `website/news/001-project-announcement.mdx`, `004-launch-provider.mdx`, `005-launch.mdx`, `006-cruise-first-correction.mdx`, `006-cruise-checkout.mdx`, `006-cruise-final-approach.mdx`, `website/wiki/asteria-field.mdx`, `website/wiki/rh-01-pathfinder.mdx`, `website/wiki/ariane-64.mdx` | line citations in source pack verified against current bytes                                                                                                  |
| Content schema   | `website/src/content.config.ts:23, :45`                                                                                                                                                                                                                                                      | `publication: z.enum(['draft', 'published']).default('draft')`; `simulatedDate: z.union([z.string().regex(simulatedDatePattern), z.date()]).optional()`       |
| Surface          | `website/dist/` (read-only inspection)                                                                                                                                                                                                                                                       | no `008-landing` route yet (draft); `/wiki/area/asteria-field/index.html` built and serves the three plates                                                   |

## Simulated record date

**`simulatedDate: 2031-09-16`** — drawn from the locked milestone row
`docs/SCENARIO.md:197`:

> `16 September 2031 | Atmospheric entry and landing at Asteria Field`

The row licenses the event and its calendar day; the date is the in-fiction record date
on which the article is written (it carries the row's milestone, the date on which that
milestone occurred). The row is exactly the milestone this step releases, so the record
date is the lower bound for any later-step `simulatedDate` (rows `:198`–`:207`).

Checks against the value before applying it:

- Implies no event this step has not released — the date IS the step's event.
- Cannot be read as a launch / landing / other withheld mission date — it IS the landing
  date, which is the row this step releases.
- Contradicts no sentence already public — `006-cruise-final-approach.mdx:50-52` closed
  cruise with "details of entry, landing, or surface operations are not part of this
  record; … the arrival at Asteria Field lies ahead"; a record dated the day of arrival
  is consistent with that closing.
- Articles stay in timeline order by their `simulatedDate` — the released 005/006 chain
  ends at `2031-08-21` (final approach), and `2031-09-16` follows it.
- The schema accepts the pattern: `simulatedDatePattern` permits ISO-style `YYYY-MM-DD`.

The published surface (built `/news/008-landing/`) will render the date under a label that
identifies it as part of the fiction (the schema's `simulatedDate` description, `:42-46`,
is explicit: "This is a date inside the fiction, never a real publication date"). It is
never presented as a real publication date, `datePublished`, or `lastmod`.

## Review table

| #  | Check                                                                                      | Result | Evidence                                                                                                                                                                                                              |
| -- | ------------------------------------------------------------------------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Chronology agrees with the locked milestone row                                            | Pass   | Only `16 September 2031` (this step's row) and `17 February 2031` (released launch row) appear in the body; no later-step date leaks.                                                                                 |
| 2  | Canon consistent with released public records                                              | Pass   | Mirrors the 004/005/006 wording for relay architecture, journey context, and the cruise-record handoff; reuses the released non-endorsement disclosure.                                                               |
| 3  | Landing success ordered after basic power, communications, and rover-survival confirmation | Pass   | `:25-33` lists the three factors as the foundation of the success claim; "What is confirmed" precedes any "successful landing" wording.                                                                               |
| 4  | Known → to-check → expected-operations order                                               | Pass   | Three section headings in that order (`:23, :35, :44`).                                                                                                                                                               |
| 5  | No later-step fact (egress, drive, samples, panorama, POV, mineral results, end-of-life)   | Pass   | Banned-token scan clean; "before the rover leaves the platform" uses released "rover deployment" vocabulary; no milestone name or date from rows `:198+` appears.                                                     |
| 6  | Asteria Field geometry stays name-only                                                     | Pass   | No ellipse, P0, science-zone, hazard, traverse, or AF-* unit code in prose or frontmatter; only the released planning-centre concept is implicit via the released wiki leaf link.                                     |
| 7  | EDL description stays at the released architecture level                                   | Pass   | No "seven minutes of terror" / no real-mission numbers / no sky-crane / no aeroshell performance claim. The article does NOT describe the EDL sequence; it references the relay architecture only.                    |
| 8  | Early-uncertainty wording is an uncaused open question                                     | Pass   | `:54-60` is generic ("whether the commissioning sequence will complete entirely on the nominal plan remains an open question") with no premature cause.                                                               |
| 9  | Internal links resolve to released public routes only                                      | Pass   | All 6 links resolve to built routes; no working-paper or `docs/timeline/` link.                                                                                                                                       |
| 10 | External links policy                                                                      | Pass   | No external links.                                                                                                                                                                                                    |
| 11 | Fiction disclosure present and prominent                                                   | Pass   | First sentence + final italicised paragraph (`:14, :75-78`).                                                                                                                                                          |
| 12 | Ariane 64 stays at the released non-endorsement level                                      | Pass   | `:16, :68-73, :75-78` repeat the released disclosure verbatim.                                                                                                                                                        |
| 13 | Image decision explicit and consistent with brief                                          | Pass   | Asset manifest records reuse of AF-01/AF-02 only, AF-03 barred; current draft places no image and links the released wiki leaf for context (same precedent as 006 pages).                                             |
| 14 | Asset provenance by content hash                                                           | Pass   | AF-01/AF-02 hashes match released records; no re-exported derivative; AF-03 not referenced in the article.                                                                                                            |
| 15 | Image alt/caption/label strings                                                            | N/A    | No image placed; nothing to fail.                                                                                                                                                                                     |
| 16 | Voice / grammar / brand                                                                    | Pass   | Same Red Horizon voice as the released 005/006 chain: composed, candid, specific, modest; no marketing superlatives, no unsupported certainty, no unexplained acronyms.                                               |
| 17 | Accessibility / structure                                                                  | Pass   | Frontmatter metadata; semantic headings (`##` for the five topical sections + the closing `## What the record covers`); short, scannable paragraphs; one central update with only released context.                   |
| 18 | Frontmatter schema                                                                         | Pass   | `title`, `category`, `status`, `publication: draft`, `summary`, `linkLabel`, `order: 8`, `accent: amber` all match the schema; `simulatedDate` optional and unset (reviewer assigns `2031-09-16`); no undeclared key. |
| 19 | `simulatedDate` fits the milestone table                                                   | Pass   | `2031-09-16` is the locked row `:197` value; reviewer-assigned per the standing rule.                                                                                                                                 |
| 20 | Spoiler / confidentiality scan                                                             | Pass   | No `docs/timeline/` content or paths in the article; no landing-design fact; no real institution/operator/agency name beyond the released disclosure.                                                                 |
| 21 | Continuity verdict (separate file)                                                         | Pass   | `.agents/work/continuity/008-landing.md` — verdict `continuity clear`.                                                                                                                                                |

## Final status

**`approved`.** No material failure remains unresolved.

## Release decision (recorded on card t_d83264ae)

The package is **releasable**. The exact public scope:

- One article: `website/news/008-landing.mdx`, with `publication: published` and
  `simulatedDate: 2031-09-16`.
- No new imagery; no asset is placed on the article. The article is text-only and links
  the released `/wiki/area/asteria-field/` wiki leaf for landing-target context (same
  precedent as the released 006 pages).
- No other public file, canon change, deployment, secret, DNS, or external media upload
  is authorised by this decision. The dev card `t_ba8e974b` carries the commit and push
  of the frontmatter flip under the standing 2026-09-17 instruction, with commit
  message `t_ba8e974b: publish 008 landing confirmation`.
- The article hash at the moment of the decision is
  `8547bf5ab8a0b8087f8cd9714d7268225ee84f8776e18b0b04c08c41227945c0`; the dev card
  records the post-flip hash.

## Next owner / action

- `mars-ai-simulator-dev` (t_ba8e974b): commit-and-push the frontmatter flip (`publication:
  published`, `simulatedDate: 2031-09-16`) and rebuild. The push triggers the
  Cloudflare Workers Build on `main`. No other implementation is required for this
  release.
