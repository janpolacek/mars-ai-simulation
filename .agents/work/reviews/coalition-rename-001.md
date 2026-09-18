# Editorial gate: Form A programme rename — 001 announcement

## Review metadata

| Field                       | Value                                                                                                                                                                                                                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Article                     | `website/news/001-project-announcement.mdx`                                                                                                                                                                                                                                    |
| Mission-timeline step       | `site-foundation` / published surface (advances no timeline step)                                                                                                                                                                                                              |
| Gate inputs                 | `website/news/001-project-announcement.mdx` (revised, line 77); `.agents/work/seo/coalition-rename-001.md`; parent card `t_8e8364e4` Form A decision; writer handoff `t_b5b0ff2e`; SEO handoff `t_46378ed2`; `docs/SCENARIO.md`; existing review `001-project-announcement.md` |
| Reviewer                    | `mars-ai-simulator-reviewer` (board exposes reviewer, not `mars-ai-simulator-editor`; this card performs the merged editorial role's gate)                                                                                                                                       |
| Skill                       | `editorial-review`                                                                                                                                                                                                                                                             |
| Card                        | `t_ae363b9b`                                                                                                                                                                                                                                                                   |
| Child dev card              | `t_bd36d22b` (`mars-ai-simulator-dev`, gated behind this verdict)                                                                                                                                                                                                              |
| Status                      | `approved`                                                                                                                                                                                                                                                                     |
| Release decision            | The single authorised wording change on line 77 (`coalition` → `programme`) is **approved as the published correction on the live 001 article**. No further approval is required before the dev card's push.                                                                  |
| Article hash at verdict     | SHA-256 `f5223d681102e0052bf2d0793090b1374b54f34cf73fa28dee39fffa0d81d0c5`, 4,832 B, 78 lines, mtime as captured at read time                                                                                                                                                  |
| `simulatedDate` field       | `2026-10-12` (unchanged from the original release)                                                                                                                                                                                                                             |
| `simulatedDate` source line | `docs/SCENARIO.md` "Launch and mission dates" table, row **12 October 2026 — Red Horizon Council charter takes effect**                                                                                                                                                          |
| Public scope                | One published article (`/news/001-project-announcement/`), line 77 only                                                                                                                                                                                                        |
| Verdict written             | 2026-09-18 20:55 CEST (host date)                                                                                                                                                                                                                                              |

## Verdict

`approved`. The single authorised wording change is canonical, internally consistent with the frontmatter that already used `programme`, fact-neutral, and free of any spoiler, release-order, or partner-name change. The package is releasable; the release decision recorded below is the editorial-role approval this card exists to give, and the dev child (`t_bd36d22b`) is unblocked.

The article's own `publication: published` state and the human's Form A decision on `t_8e8364e4` mean the rename is a correction to a live surface, not a new release. Nothing here advances the timeline. No new canon is written; partner names, facts, dates, and the `simulatedDate` are unchanged.

## Review table

| Check                                                                          | Result | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Single authorised wording change                                               | PASS   | Line 77 reads `…with a shared objective, a programme, and the practical decisions…`. A case-insensitive search for `coalition` in the article returns zero hits. The diff is exactly one word on one line.                                                                                                                                                                                                                |
| No partner-name change                                                         | PASS   | Line 23–24 still list the ten national programme teams verbatim, in the locked order: France, Germany, Estonia, Norway, Spain, Poland, Czechia, Slovakia, Japan, and Canada.                                                                                                                                                                                                                                              |
| All other factual claims preserved                                             | PASS   | Re-read of lines 29–44 (purpose, terrain class, habitability framing), 46–51 (Margaritifer Terra and the three USGS/NASA external citations), 53–60 (Asteria Field, coordinates, scenario disclaimer), 62–64 (equal governance), 66–72 (budget, surface life, Mars-year arithmetic), 74–75 (forward-looking "still ahead of us") — byte-identical to the released text apart from the line-77 word.                  |
| Frontmatter / schema contract                                                  | PASS   | All 13 frontmatter keys present, `publication: published`, `simulatedDate: 2026-10-12`, `media: asteria-plates` with three alts + three captions + label — `asteria-plates` is a declared key in `website/src/lib/media.ts`. The site's collection filter still selects this article.                                                                                                                                     |
| No metadata, link, slug, or route change                                       | PASS   | `title`, `summary`, `linkLabel`, `category`, `status`, `order`, `accent`, `media`, `mediaAlt`, `mediaCaption`, `mediaLabel` are unchanged from the SEO-confirmed pre-edit state. The only internal link (`/#mission`) still resolves; the three external links (USGS `sim3041`, planetarynames `Feature/3701`, NASA clays/hydrated-minerals) are unaffected by the wording change.                              |
| Internal consistency with already-public `programme` usage                     | PASS   | Frontmatter `summary` already said "fictional, AI-assisted Mars **programme**", `status: Programme announced`, and the `/#mission` link's anchor text already used "Mars exploration programme". The line-77 rename removes the only body instance of `coalition`, so the article now uses a single noun for the same concept throughout. This is the editorial win that justified Form A in `t_8e8364e4`.              |
| No private `docs/timeline/` material introduced                                 | PASS   | The package touches only `website/news/001-project-announcement.mdx`. The SEO reviewer and this gate both flag that no `docs/timeline/` content was read or quoted. The `simulatedDate` (2026-10-12) is unchanged; it already sat on the published article and is the only date carried by the article.                                                                                                                          |
| No spoiler, no later-step material on a published surface                       | PASS   | The article does not name a payload, instrument, rover, launcher, or provider; does not name `RH-01` or `Pathfinder`; does not state an exact launch or landing date; does not disclose landing-design figures. The `simulatedDate` does not imply any event the step has not released (it sits on the 12 October 2026 Council-charter milestone, which step 001 introduces).                                              |
| Existing 001 review still valid on the unchanged paragraphs                     | PASS   | The retro and pass-2 reviews of the published article (`t_8059da5f`, `t_ff937d33`) examined prose that this card does not modify. An unchanged article hash for the lines they read (everything except the closing sentence) is what lets those readings stand; the rename lands on the rhetorical closing line that those gates never adjudicated (it does not appear in their C-items, since `coalition` is not a gated term in the brief).  |
| No claim contradicts a published sibling                                       | PASS   | No other published article contains a sentence that the new line 77 would falsify. Articles 002, 003, 004 and the wiki pages do not carry `coalition` in their own prose; the four remaining rename sites (`002:87`, `004:14`, `facts.ts:18`, `Hero.astro:12`) sit on sibling cards whose own SEO passes approved the same Form A substitution and whose gates will clear them in turn.                                       |
| Continuity (chronology, canon consistency, plausibility, spoiler safety)       | PASS   | The wording change is terminological, not factual. Chronology is unchanged (the article opens a record and closes it; nothing in line 77 implies a date). Canon consistency is improved (single noun for the body of work). Plausibility is unchanged (the closing sentence still names "a programme" as the body the partners built). Spoiler safety is unchanged (no later-step material).                              |

## 1. Method and inputs at verdict time

Read at **2026-09-18 20:53–20:55 CEST**. The shared checkout was edited concurrently
by the four sibling rename lanes (writer passes for 002, 004, facts, hero); this gate's
inputs are unchanged since the SEO pass, and that is what lets every row above read
the article against the SEO-confirmed bytes rather than against an older snapshot.

| Input                          | SHA-256 / state            | Note                                                                                                                                       |
| ------------------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Article (post-rename)          | `f5223d68…`                | identical to the SEO pass's hash; line 77 is the only changed line; unchanged paragraphs hold their pre-rename bytes                          |
| SEO package                    | `.agents/work/seo/coalition-rename-001.md` | APPROVED AS PROPOSED; no metadata changes proposed; one-word line-77 substitution verified                                            |
| Writer handoff (`t_b5b0ff2e`)  | comment 436                | line-77 only; partner names, facts, frontmatter verbatim                                                                                  |
| Form A decision (`t_8e8364e4`) | comment at 2026-09-18 20:42 | human chose Form A (`programme` everywhere) on the five public surfaces; 001:77 is one of those five                                    |
| `docs/SCENARIO.md`             | read; milestone table      | 12 October 2026 row = "Red Horizon Council charter takes effect" — this is the row the `simulatedDate` was drawn from for step 001        |
| Existing 001 review            | `.agents/work/reviews/001-project-announcement.md` | retro pass + pass-2 reading of paragraphs that line 77 does not touch; an unchanged article hash on those paragraphs lets those readings stand |

No build, no test, no `check:dist`, no commit. The flip is a one-word correction on
a `publication: published` article; the editorial gate and the SEO and writer passes
together prove the substitution is canonical and the surrounding prose is
unchanged. The technical gate is the dev child.

## 2. Simulated record date

`simulatedDate: 2026-10-12`, drawn from `docs/SCENARIO.md` "Launch and mission dates"
table, row **12 October 2026 — Red Horizon Council charter takes effect**.

This is the row step 001 releases (the Council charter), and it is the same
`simulatedDate` the article has carried since first publication; the rename does not
move it. The date sits on a locked milestone in the timeline's order, implies no
event the step has not released (the Council charter is the step's own primary
event), cannot be read as a launch or landing date (16 September 2031 and 17 February
2031 are different rows, neither touched), contradicts no sentence already public
(the article says "a launch window in 2031" — true at 2026-10-12), and keeps the
articles in timeline order (it is before 002's anchor and well before 003's).

The published surface (the built `/news/001-project-announcement/` route) renders
the date under the in-fiction label "Within the fiction", not as a search-engine
date or `datePublished`/`lastmod`. That is unchanged by the rename.

## 3. Continuity verdict (record summary)

`continuity clear` — the wording change is terminological and is consistent with
already-public material; no chronology, canon-consistency, plausibility, or
spoiler-safety failure is introduced. This gate does not write a separate
`.agents/work/continuity/coalition-rename-001.md`, because the rename is a
substitution inside an already-cleared article: the retro and pass-2 continuity
readings cover every paragraph except line 77, and line 77 does not introduce a
new claim. Recording the verdict here, in the review record, is what the
`editorial-review` skill expects when the upstream continuity check already holds
for the same package hash.

If a downstream card ever needs the continuity record on its own, the relevant
files are `.agents/work/continuity/001-project-announcement.md` (pass 2, verdict
`human decision required` on the plate-release question, then re-checked), and
this gate's table above stands as the continuity reading on the renamed article.

## 4. Confidentiality check

- No content from `docs/timeline/` is read into this record beyond the public
  milestone row the `simulatedDate` already carries.
- No new canon is established (the wording change is a substitution; the
  partners, facts, dates, budget, surface-life, and coordinates remain
  byte-identical to the released text).
- No partner names are touched (line 23–24 verified verbatim).
- No asset, alt text, caption, label, slug, route, or frontmatter key is modified.
- No internal or external link destination changes.
- The release action is the dev card's `publication: published`-preserving push
  of one article on one line; that push is publication of a wording correction,
  not a new release.

## 5. What the release decision authorises, and what it does not

This gate authorises **the dev card `t_bd36d22b` to commit and push a single
change** — the line-77 substitution `coalition` → `programme` — to `main`, on
the file `website/news/001-project-announcement.mdx`. The commit message must
begin `t_bd36d22b:` and must name planner decision `t_8e8364e4` and gate
`t_ae363b9b` in the trailer. No other path may be staged.

This gate does **not** authorise: the other four rename surfaces (002, 004,
facts.ts, Hero.astro — each on its own gate and dev card); any new article or
wiki page; any change to a partner name, date, budget, coordinate, or spec; any
deploy, DNS, hosting, or external-media action. The dev profile's existing
authority to commit and push this card's scoped change is unchanged; the
release decision recorded here is the editorial-role approval the dev card body
asked for.

## 6. Dispositions and accepted states

- **One-word line-77 substitution.** Approved; the article's closing sentence now
  reads "with a shared objective, a programme, and the practical decisions…",
  consistent with the frontmatter, the internal-link anchor, and the human's
  Form A decision on `t_8e8364e4`.
- **All other article bytes.** Preserved verbatim; existing review and continuity
  readings stand on the unchanged paragraphs.
- **Sibling rename lanes (002, 004, facts, hero).** Out of scope here; each has
  its own SEO and gate chain and will be cleared by its own card.

## 7. Next owners and actions

1. **`mars-ai-simulator-dev` (`t_bd36d22b`)** — apply the line-77 substitution
   as the only change to `website/news/001-project-announcement.mdx`, run the
   site's build/tests/guards, stage only the scoped path, commit with the
   card-id-prefixed message and the trailer naming `t_8e8364e4` + `t_ae363b9b`,
   rebase, push, report commit SHA + push result + clean `git status --short` +
   empty `git log origin/main..HEAD`. The push is publication.
2. **Planned follow-up gates** for the other four Form A renames (002, 004,
   facts.ts, Hero.astro) run on their own cards in the same lane and are not
   affected by this verdict.
3. **No human approval** is required for this rename's publication — the merged
   editorial role's release decision is the approval, and it is recorded on this
   card.

## 8. Record origin

This file is the review record for `t_ae363b9b`. It is additive: it does not
rewrite the retro or pass-2 records on `001-project-announcement.md`, which
continue to stand as the reading of the paragraphs this gate does not touch.
The skill's release-mechanism rules apply — the article's `publication:
published` flag stays as it is, the dev card carries the push, and no separate
human approval sentence is required.
