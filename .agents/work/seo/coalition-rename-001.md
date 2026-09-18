# SEO package: Form A programme rename — 001 announcement

## Package metadata

| Field | Value |
| --- | --- |
| Article | `website/news/001-project-announcement.mdx` (frontmatter `publication: published`) |
| Timeline step | `site-foundation` / published surface (advances no timeline step) |
| Card | `t_46378ed2` (`mars-ai-simulator-seo`) |
| Owner | `mars-ai-simulator-seo` |
| Skill | `seo-content` |
| Parent writer | `t_b5b0ff2e` |
| Inputs read | `website/news/001-project-announcement.mdx` (revised); `t_8e8364e4` Form A decision; `website/src/lib/navigation.ts`; `website/src/lib/media.ts` |
| Conventions read | `.agents/skills/seo-content/SKILL.md`, `.agents/skills/brand-voice/SKILL.md` |
| Artifact | `.agents/work/seo/coalition-rename-001.md` (this file) |
| Applied to the page | One word change on line 77: `coalition` → `programme` |
| Status | recommendations issued; **no release, no deploy, no canon change** |

Assumptions recorded:

1. The rename is the sole authorised change. No metadata, dates, links, headings, or frontmatter values were modified or proposed for modification.
2. No human release reference exists for article 001's detail route; `src/lib/releases.ts` (in-flight) gates `/news/<slug>/` behind a human release reference. No new URL is proposed as live.
3. The private timeline (`docs/timeline/`) was not consulted — it is continuity material only and carries no public metadata implication for this rename.

---

## 1. Change under review

**Authorised wording change:** line 77 of `website/news/001-project-announcement.mdx`

- **Before:** "That is where the public record begins: with a shared objective, a coalition, and the practical decisions that turn a mission idea into a testable plan."
- **After:** "That is where the public record begins: with a shared objective, a programme, and the practical decisions that turn a mission idea into a testable plan."

The word `coalition` is now fully absent from the article body. This aligns the closing sentence with the frontmatter field `summary`, which already reads "a fictional, AI-assisted Mars **programme**", and with `status: Programme announced`.

---

## 2. Title — unchanged, no regression

| Check | Result |
| --- | --- |
| Frontmatter `title` | `"A Mars mission takes shape in public."` (unchanged) |
| Length | 38 characters (≤ 60) — **pass** |
| Search intent | Brand informational — clear, honest, no clickbait |
| Impact of rename | None. The title does not contain `coalition` or `programme`. |

**Verdict:** No change recommended. Title is within bounds and unchanged by the rename.

---

## 3. Summary / meta description — unchanged, no regression

| Check | Result |
| --- | --- |
| Frontmatter `summary` | `"Red Horizon is a fictional, AI-assisted Mars programme. Ten national teams have announced one uncrewed lander and rover, with a 2031 launch window."` (unchanged) |
| Length | 149 characters (≤ 155) — **pass** |
| Keyword consistency | Uses `programme`, now consistent with the article body after the rename |
| Impact of rename | None. The summary was already using `programme` before the change. |

**Verdict:** No change recommended. Summary is within bounds and was already consistent with the rename.

---

## 4. Slug / URL — unchanged, no regression

| Check | Result |
| --- | --- |
| Slug field | No `slug` field exists in frontmatter |
| Release-gate key | File name `001-project-announcement.mdx` serves as the release-gate key and URL segment |
| Route convention | `routes.newsArticle` in `navigation.ts` generates `/news/{slug}/` |
| Resulting URL pattern | `/news/001-project-announcement/` (not live — gated behind release reference) |
| Impact of rename | None. The file name is unchanged. |

**Verdict:** No change recommended. No slug field to modify; the file name is stable.

---

## 5. Internal links — unchanged, no regression

| Link | Target | Anchor text | Affected by rename? |
| --- | --- | --- | --- |
| Internal link in body | `/#mission` | "fictional, AI-assisted Mars exploration programme" | **No** — the anchor text uses `programme`, already consistent |
| External links (3) | USGS, NASA, planetarynames.wr.usgs.gov | Descriptive text about Mars regions | **No** — external URLs unaffected |

**No internal link uses the word `coalition` as anchor text.** The only internal link (`/#mission`) was already using `programme` in its anchor text before the rename. No link text needs updating.

**Verdict:** No change recommended. All internal links are unaffected by the rename.

---

## 6. Frontmatter audit — unchanged

| Field | Value | Changed by rename? |
| --- | --- | --- |
| `title` | "A Mars mission takes shape in public." | No |
| `category` | "Announcement 01" | No |
| `status` | "Programme announced" | No |
| `publication` | "published" | No |
| `simulatedDate` | "2026-10-12" | No |
| `summary` | (as above) | No |
| `linkLabel` | "Announcement summary" | No |
| `order` | 1 | No |
| `media` | "asteria-plates" | No |
| `mediaAlt` | 3 entries, all neutral | No |
| `mediaCaption` | 3 entries, all neutral | No |
| `accent` | "oxide" | No |

**Verdict:** No frontmatter field was modified by the rename. All frontmatter values are unchanged and within bounds.

---

## 7. Content consistency check

| Element | Uses `programme`? | Uses `coalition`? |
| --- | --- | --- |
| Frontmatter `summary` | Yes | No |
| Frontmatter `status` | Yes (capitalised) | No |
| Body (line 77, post-rename) | Yes | **No** |
| Body (all other lines) | No instances of either term | No instances remaining |
| Internal link anchor text | Yes | No |

The rename eliminates the sole remaining `coalition` instance in the article body, achieving full terminological consistency: `programme` is now the only term used throughout the article. This is a positive outcome — the text no longer mixes `coalition` and `programme` to describe the same concept.

---

## 8. Cross-page consistency note (informational, out of scope)

The file `website/wiki/red-horizon.mdx` still uses `coalition` in its summary and body text (lines 6, 16, 38, 48). This is a separate page with a separate ownership chain and was not part of the authorised change for this card. If a broader terminology harmonisation is desired, it would require a separate task and editorial approval.

---

## 9. Confidentiality check

- No content from `docs/timeline/` appears in this package or in any recommended string.
- No unreleased scenario facts appear in the article or in this package.
- The rename is purely terminological within already-published public text.
- The `simulatedDate` (2026-10-12) is unchanged and was not touched.
- No private or gated material is referenced, quoted, or implied.

**Verdict:** No confidentiality concern.

---

## 10. Validation completed

| Check | Method | Result |
| --- | --- | --- |
| Line 77 diff | Read file at offset 74–78 | Confirmed: `coalition` → `programme`, exactly one word |
| `coalition` absent from article body | `search_files` on `website/news/001-project-announcement.mdx` for "coalition" | Zero matches — confirmed absent |
| Title length | Character count | 38 chars ≤ 60 — pass |
| Summary length | Character count | 149 chars ≤ 155 — pass |
| Internal link integrity | Read `navigation.ts` route `newsArticle` | `/news/{slug}/` convention confirmed; `/#mission` link valid |
| Media key validity | Read `media.ts` `newsMediaKeys` | `asteria-plates` is a declared key — pass |
| Route existence | Read `navigation.ts` | Route `newsArticle` defined; detail route gated behind release |
| Frontmatter unchanged | Read file frontmatter | All fields identical to pre-revision state |

---

## 11. Verdict

**APPROVED AS PROPOSED.** The rename from `coalition` to `programme` on line 77 introduces no SEO regression. All metadata surfaces (title, summary, slug, internal links, frontmatter) remain unchanged and within bounds. The rename improves internal terminological consistency by aligning the closing sentence with the already-used `programme` terminology in the summary and status fields. No issue blocks the gate.

No recommendation to change any metadata, heading, link, or slug. The article passes as-is with the authorised wording change.

---

## Review outstanding

This package is submitted for editorial review by `mars-ai-simulator-editor`. The editor confirms canon and records the release. No further SEO action is required unless the editor identifies a concern.
