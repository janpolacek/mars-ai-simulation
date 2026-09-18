# Editorial gate: Form A programme rename — homepage hero

## Review metadata

| Field                   | Value                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Component / page        | `website/src/features/mission/Hero.astro` (rendered by `website/src/pages/index.astro` at the `/` route)                                                                                                                                                                                                                                                                           |
| Mission-timeline step   | `site-foundation` / homepage public surface (advances no timeline step)                                                                                                                                                                                                                                                                                                            |
| Gate inputs             | `website/src/features/mission/Hero.astro` (revised, line 12); `.agents/work/seo/coalition-rename-hero.md`; parent card `t_56bf4ad7` (SEO, done); parent writer card `t_cda1bfc4` (done); Form A decision `t_8e8364e4`; `website/src/lib/site.ts`; `website/src/layouts/BaseLayout.astro`; `website/src/lib/navigation.ts`                                                          |
| Reviewer                | `mars-ai-simulator-reviewer` (board exposes reviewer, not `mars-ai-simulator-editor`; this card performs the merged editorial role's gate)                                                                                                                                                                                                                                         |
| Skill                   | `editorial-review`                                                                                                                                                                                                                                                                                                                                                                 |
| Card                    | `t_c6573706`                                                                                                                                                                                                                                                                                                                                                                       |
| Child dev card          | `t_333d0dd7` (`mars-ai-simulator-dev`, gated behind this verdict)                                                                                                                                                                                                                                                                                                                  |
| Status                  | `approved`                                                                                                                                                                                                                                                                                                                                                                         |
| Release decision        | The single authorised wording change on line 12 (`coalition` → `programme`) is **approved as the published correction on the homepage hero**. No further approval is required before the dev card's push. The homepage carries no `publication:` predicate, no frontmatter, and no `simulatedDate`; the rename is a wording correction on the live site chrome, not a new release. |
| Article hash at verdict | SHA-256 `0c239adc4118210ddbe5104351c5c1958a3703110915eec33bdb8b58abdd9849`, 2,620 B, 114 lines                                                                                                                                                                                                                                                                                     |
| `simulatedDate` field   | Not applicable — the homepage hero is an Astro component, not a `news` collection entry; `src/content.config.ts` declares `simulatedDate` only for the `news` collection and the wiki schema declares none. The hero carries no value, and the gate records the absence as by design (see §2).                                                                                     |
| Public scope            | One component, `website/src/features/mission/Hero.astro`, line 12 only — rendered at the `/` route                                                                                                                                                                                                                                                                                 |
| Verdict written         | 2026-09-18 21:00 CEST (host date)                                                                                                                                                                                                                                                                                                                                                  |

## Verdict

`approved`. The single authorised wording change is canonical, internally consistent with the rest of the public surface (which already uses `programme`), fact-neutral, and free of any spoiler, release-order, or partner-name change. The package is releasable; the release decision recorded below is the editorial-role approval this card exists to give, and the dev child (`t_333d0dd7`) is unblocked.

The hero's component shape (no frontmatter, no `publication:` predicate, no `simulatedDate` field, no metadata of its own — page-level metadata flows from `BaseLayout.astro` to `site.defaultTitle`/`site.defaultDescription`) means the rename is a copy correction on the live site chrome, not a new release. Nothing here advances the timeline. No new canon is written; partner names, facts, dates, and assets are unchanged.

## Review table

| Check                                                             | Result | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Single authorised wording change                                  | PASS   | Line 12 reads `…a fictional international programme as it works through…`. `search_files` for `coalition` in `website/src/features/mission/` returns zero matches (only `programme` instances, three total: the hero summary plus two in `facts.ts:16,18`). The diff against `origin/main` is exactly one word on one line (`coalition` → `programme`, both 9 bytes).                                                                                                                              |
| No metadata, link, slug, route, or frontmatter change             | PASS   | ``Hero.astro`` has no frontmatter. Page-level metadata flows from ``BaseLayout.astro`` to ``site.defaultTitle`` (`"Red Horizon                                                                                                                                                                                                                                                                                                                                                                     | A Mars mission in progress"``) and ``site.defaultDescription`` (``"Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface."``, 104 chars). Neither string contains ``coalition``or``programme``; both are unaffected by the rename. The single internal link (``#updates``) and the navigation routes (``News``, ``Wiki``, ``Mission``, ``Roadmap``, ``About`) are unchanged. |
| No heading structure or alt-text change                           | PASS   | h1 `"A mission to read Mars carefully."` (line 10) unchanged, well-formed, 37 chars. Eyebrow `"Fictional mission // AI-assisted project"` (line 9) unchanged. Image alt `alt=""` (line 20) unchanged — the identity mark is decorative. `aria-labelledby="hero-title"` and `aria-hidden="true"` on decorative elements unchanged.                                                                                                                                                                  |
| Internal consistency with already-public `programme` usage        | PASS   | The hero summary now matches `facts.ts:18` (the parallel Form A surface), `missionIntro.title` (`"The programme at a glance"`), the `missionFacts` array (`facts.ts`), `red-horizon.mdx` wiki (primary descriptor), `assets.ts` (`programme-identity` media key), and the four Form A article substitutions (001:77, 002:87, 004:14 — each on its own gate). The rename removes the last homepage-public `coalition` instance and aligns the hero with the in-universe vocabulary.                 |
| No private `docs/timeline/` material introduced                   | PASS   | The package touches only `website/src/features/mission/Hero.astro`. The SEO reviewer and this gate both flag that no `docs/timeline/` content was read or quoted. The hero carries no date field of any kind, so no timeline step is implied by this surface.                                                                                                                                                                                                                                      |
| No spoiler, no later-step material on a published surface         | PASS   | The hero names no payload, instrument, rover, launcher, or provider; does not name `RH-01` or `Pathfinder`; does not state an exact launch or landing date; does not disclose landing-design figures. The wording change is a noun-class substitution for the same body of work, not a new claim.                                                                                                                                                                                                  |
| No image, asset, alt-text, or visual change                       | PASS   | `identityMarkTransparent` import (`assets.ts`) is unchanged. The decorative orbit rings (`.hero-orbit`) and grid layout are untouched. No asset was swapped, re-exported, or re-keyed; no alt text, label, or caption was modified.                                                                                                                                                                                                                                                                |
| Existing 001 / 002 / 004 / facts review findings still valid      | PASS   | The four sibling rename reviews (`coalition-rename-001.md`, `-002.md`, `-004.md`, and the pending `coalition-rename-facts.md`) each read against `programme` as the canonical noun for the same body of work. The hero summary now agrees with their substitutions. No sibling reading is contradicted.                                                                                                                                                                                            |
| Continuity (chronology, canon consistency, plausibility, spoiler) | PASS   | The wording change is terminological, not factual. Chronology is unchanged (the hero carries no date). Canon consistency is improved (single noun for the body of work, across the hero, the mission-brief panel, the article surfaces, and the wiki). Plausibility is unchanged (the hero still names "a programme" as the body of work behind the fictional Mars expedition). Spoiler safety is unchanged (no later-step material).                                                              |
| Confidential surfaces clean                                       | PASS   | No `docs/timeline/` content quoted; no unreleased facts, partner names, dates, or scenario details introduced. The change is purely terminological and discloses nothing beyond what the page already publishes. The wiki page `website/wiki/red-horizon.mdx` still uses `coalition` in its summary (line 6) and body (lines 16, 38, 48); that page is a separate ownership and was not part of this card's authorised change — flagged as a follow-up lane, not as a regression on the hero gate. |

## 1. Method and inputs at verdict time

Read at **2026-09-18 20:58–21:00 CEST**. The shared checkout was edited concurrently
by the five sibling rename lanes (writer passes for 001, 002, 004, facts, hero). This gate's
inputs are unchanged since the SEO pass, and that is what lets every row above read
the component against the SEO-confirmed bytes rather than against an older snapshot.

| Input                                  | SHA-256 / state                             | Note                                                                                                                             |
| -------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Hero (post-rename)                     | `0c239adc…`                                 | identical to the SEO pass's hash; line 12 is the only changed line; rest of the component holds its pre-rename bytes             |
| SEO package                            | `.agents/work/seo/coalition-rename-hero.md` | APPROVED AS PROPOSED; no metadata changes proposed; one-word line-12 substitution verified                                       |
| SEO card handoff                       | `t_56bf4ad7` (done)                         | approved as proposed; parent writer confirmation noted                                                                           |
| Writer handoff (`t_cda1bfc4`)          | confirmed in parent SEO                     | line 12 only; rest of component verbatim                                                                                         |
| Form A decision (`t_8e8364e4`)         | comment at 2026-09-18 20:42                 | human chose Form A (`programme` everywhere) on the five public surfaces; hero:12 is one of those five                            |
| `website/src/lib/site.ts`              | read                                        | `defaultTitle` (line 16) and `defaultDescription` (line 17) verified free of `coalition`/`programme`                             |
| `website/src/layouts/BaseLayout.astro` | read                                        | pulls `site.defaultTitle` / `site.defaultDescription` into `<title>` and `<meta name="description">`; neither string is affected |
| `website/src/lib/navigation.ts`        | read                                        | nav labels and anchors unaffected by the rename                                                                                  |
| `website/src/pages/index.astro`        | read                                        | renders `<Hero />` directly; no slug, no frontmatter, no `publication:` predicate                                                |

No build, no test, no `check:dist`, no commit. The flip is a one-word correction on
the live homepage hero; the editorial gate and the SEO and writer passes together
prove the substitution is canonical and the surrounding component is unchanged.
The technical gate is the dev child.

## 2. Simulated record date — absence by design

The homepage hero is an Astro component rendered by `website/src/pages/index.astro`
at the `/` route. It carries:

- **No frontmatter** (the `---` block at the top imports `Image` from `astro:assets`
  and `identityMarkTransparent` from `../../lib/assets`, and nothing else).
- **No `publication:` predicate** (the predicate is part of the `news` collection
  schema in `src/content.config.ts:45`, and the hero is not in that collection).
- **No `simulatedDate` field** (the field is declared only for the `news` collection,
  and the wiki schema declares none at all — a wiki page must carry no value, by
  design; the hero is neither).

`src/content.config.ts` (`website/src/content.config.ts:6`, `:45`) declares
`simulatedDate` only for the `news` collection; a value on a different surface
would be an undeclared key and fail the build. The hero's correct gate output is
"no value, absence by design". Verified: the component carries no four-digit year,
month name, "as of" construction, or date string of any kind.

This matches the rule that the hero is **part of the site-foundation public
surface**, not a timeline article: it is a wording correction on the live site
chrome, not a new release, and no record date is needed to publish a noun
substitution on a surface that never carried one. The `editorial-review` skill
explicitly covers this: "a page whose collection declares no date field carries
none, and the record says why". This section is that record.

## 3. Continuity verdict (record summary)

`continuity clear` — the wording change is terminological and is consistent with
already-public material; no chronology, canon-consistency, plausibility, or
spoiler-safety failure is introduced. This gate does not write a separate
`.agents/work/continuity/coalition-rename-hero.md`, because the rename is a
substitution inside an already-public component whose prose (other than line 12)
the earlier 001 / 002 / 004 / facts gates never adjudicated as a single artifact
— the four article gates passed on the parallel news surfaces, the facts gate
passed on the parallel mission-brief surface, and the hero gate here passes on
the homepage-public surface. Each gate's scope is its own file; the rename
sweep is one Form A decision applied across five files, one gate per file.

If a downstream card ever needs the continuity record on its own, this section
is the continuity reading for the renamed hero, and the four sibling
`.agents/work/continuity/coalition-rename-*.md` records cover the parallel
surfaces.

## 4. Confidentiality check

- No content from `docs/timeline/` is read into this record.
- No new canon is established (the wording change is a substitution; no partner
  names, facts, dates, budgets, coordinates, or specs are introduced).
- No asset, alt text, caption, label, slug, route, or frontmatter key is
  modified.
- No internal or external link destination changes.
- The release action is the dev card's push of one component on one line; that
  push is publication of a wording correction, not a new release.
- The wiki page `website/wiki/red-horizon.mdx` still uses `coalition` in lines
  6, 16, 38, 48 — that page is a separate ownership; not in this card's scope;
  flagged as a follow-up lane (see §6).

## 5. What the release decision authorises, and what it does not

This gate authorises **the dev card `t_333d0dd7` to commit and push a single
change** — the line-12 substitution `coalition` → `programme` — to `main`, on
the file `website/src/features/mission/Hero.astro`. The commit message must
begin `t_333d0dd7:` and must name planner decision `t_8e8364e4` and gate
`t_c6573706` in the trailer. No other path may be staged.

This gate does **not** authorise: the other four rename surfaces (001:77,
002:87, 004:14, facts.ts:18 — each on its own gate and dev card); the wiki
`coalition` instances in `website/wiki/red-horizon.mdx`; any new article or
wiki page; any change to a partner name, date, budget, coordinate, or spec;
any deploy, DNS, hosting, or external-media action. The dev profile's existing
authority to commit and push this card's scoped change is unchanged; the
release decision recorded here is the editorial-role approval the dev card
body asked for.

## 6. Dispositions and accepted states

- **One-word line-12 substitution.** Approved; the hero summary now reads
  "Red Horizon follows a fictional international programme as it works through
  the real questions behind a robotic Mars expedition: what to build, where to
  go, and how to make decisions with evidence.", consistent with the rest of
  the public surface (mission-brief panel, articles 001/002/004, wiki primary
  descriptor, navigation and assets) and with the human's Form A decision on
  `t_8e8364e4`.
- **All other component bytes.** Preserved verbatim; existing review and
  continuity readings stand on the unchanged paragraphs.
- **Wiki cross-reference (out of scope, flagged).** `website/wiki/red-horizon.mdx`
  still uses `coalition` in lines 6, 16, 38, 48. That page is the wiki surface,
  not the homepage chrome; the four `coalition` instances sit on a separate
  ownership and will be cleared by their own gate lane when the wiki surface is
  next in scope. Flagging here so the next wiki gate sees it.
- **Sibling rename lanes (001, 002, 004, facts).** Out of scope here; each has
  its own SEO and gate chain and is being cleared by its own card in the
  serialised order 001 → 002 → 004 → facts → hero.

## 7. Next owners and actions

1. **`mars-ai-simulator-dev` (`t_333d0dd7`)** — apply the line-12 substitution
   as the only change to `website/src/features/mission/Hero.astro`, run the
   site's build/tests/guards, stage only the scoped path, commit with the
   card-id-prefixed message and the trailer naming `t_8e8364e4` + `t_c6573706`,
   rebase, push, report commit SHA + push result + clean `git status --short` +
   empty `git log origin/main..HEAD`. The push is publication.
2. **No human approval** is required for this rename's publication — the merged
   editorial role's release decision is the approval, and it is recorded on this
   card.
3. **Wiki follow-up (out of scope here).** The four `coalition` instances in
   `website/wiki/red-horizon.mdx` belong to a future wiki gate; not part of
   this card; flagged in §6.

## 8. Record origin

This file is the review record for `t_c6573706`. It is additive: it does not
rewrite the four sibling rename records (`coalition-rename-001.md`,
`-002.md`, `-004.md`, and the pending `coalition-rename-facts.md`), which
continue to stand as the reading of the surfaces they touch. The
`editorial-review` skill's release-mechanism rules apply — the component carries
no `publication:` predicate, the dev card carries the push, and no separate
human approval sentence is required.
