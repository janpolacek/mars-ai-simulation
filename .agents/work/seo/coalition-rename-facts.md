# SEO review: Form A programme rename — mission facts

## Package metadata

| Field | Value |
|-------|-------|
| Article | `website/src/features/mission/facts.ts` |
| Timeline step | `site-foundation` / public mission brief (advances no timeline step) |
| Card | `t_42a7a9f5` (`mars-ai-simulator-seo`) |
| Owner | `mars-ai-simulator-seo` |
| Skill | `seo-content` |
| Parent writer | `t_86b37fa1` (completed — applied the rename) |
| Form A decision | `t_8e8364e4` (human chose Form A: programme everywhere) |
| Inputs read | `website/src/features/mission/facts.ts` (revised); `t_8e8364e4` Form A decision; `website/src/components/SectionHeading.astro`; `website/src/features/mission/MissionPanel.astro`; `website/src/layouts/BaseLayout.astro`; `website/src/lib/site.ts`; `website/src/pages/index.astro` |
| Conventions read | `.agents/skills/seo-content/SKILL.md` |
| Artifact | `.agents/work/seo/coalition-rename-facts.md` (this file) |
| Applied to the page | One word change on line 18: `coalition` → `programme` |
| Status | recommendations issued; **no release, no deploy, no canon change** |

Assumptions recorded:

1. The rename is the sole authorised change. No metadata, dates, links, headings, or frontmatter values were modified or proposed for modification.
2. The description string at `facts.ts:18` renders as a `<p class="section-description">` inside `SectionHeading.astro` — it is visible section copy, not the page meta description. The page meta description comes from `site.defaultDescription` (`website/src/lib/site.ts`) and is unaffected by this change.
3. The private timeline (`docs/timeline/`) was not consulted — it is continuity material only and carries no public metadata implication for this rename.
4. No human release reference exists for the mission-brief detail route; the homepage is the only route that renders this description. No new URL is proposed as live.

---

## 1. Change under review

**Authorised wording change:** line 18 of `website/src/features/mission/facts.ts`

- **Before:** `A clear public record of a fictional Mars mission, from early coalition planning to the work of its first surface vehicle.`
- **After:** `A clear public record of a fictional Mars mission, from early programme planning to the work of its first surface vehicle.`

One word replaced: `coalition` → `programme`. The change is part of the Form A decision (t_8e8364e4) to use `programme` consistently across all five authorised public surfaces.

---

## 2. Title — unchanged, no regression

| Check | Result |
|-------|--------|
| `missionIntro.title` | `"The programme at a glance"` (unchanged, already uses `programme`) |
| Length | 27 characters (≤ 60) — **pass** |
| Search intent | Brand informational — clear, honest, no clickbait |
| Impact of rename | None. The title does not contain `coalition` or `programme` in the changed phrase. |

**Verdict:** No change recommended. Title is within bounds and unchanged by the rename.

---

## 3. Summary / meta description — unchanged, no regression

| Check | Result |
|-------|--------|
| Page meta description | `site.defaultDescription`: `"Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface."` (from `website/src/lib/site.ts`) — **unchanged** |
| Section description (`missionIntro.description`) | The changed string renders as `<p class="section-description">` inside `SectionHeading.astro` — it is visible page copy, not the `<meta name="description">` tag |
| Character count | The change is character-neutral (`coalition` = 9 chars, `programme` = 9 chars) |
| Impact of rename | None on the page meta description. The section description now reads consistently with the rest of the site. |

**Verdict:** No change recommended. The page meta description is unaffected. The section description change is terminology-consistency only.

---

## 4. Slug / URL — unchanged, no regression

| Check | Result |
|-------|--------|
| Slug field | No `slug` field exists — `facts.ts` is a data module, not a page file |
| Route | The mission panel is rendered on the homepage (`website/src/pages/index.astro`), which has no slug-based route |
| Impact of rename | None. No URL or file name is affected. |

**Verdict:** No change recommended. No slug field to modify.

---

## 5. Internal links — unchanged, no regression

| Link | Target | Anchor text | Affected by rename? |
|------|--------|-------------|---------------------|
| None in this string | — | — | The description at `facts.ts:18` contains no URLs, anchors, or link references |

The `missionIntro.description` string is plain text with no `<a>` elements or markdown links. The change to `programme` does not affect any anchor text or link target.

**No new internal links were added or removed.**

---

## 6. Search intent analysis

The mission-brief section of the homepage serves a single intent: to give visitors a clear, at-a-glance overview of the Red Horizon programme — what it is and where it stands.

The word substitution `coalition` → `programme` does not alter this intent:

- **Before:** "from early coalition planning" — the reader encounters an organisational term that could be ambiguous outside the fiction (political coalition)
- **After:** "from early programme planning" — the reader encounters the same organisational concept expressed with the term the site uses consistently everywhere else

The change is a terminology-normalisation step that aligns the mission brief section description with the established in-universe vocabulary (`programme`) already used in:
- `missionIntro.title` (`"The programme at a glance"`)
- `website/wiki/red-horizon.mdx` (primary descriptor)
- `website/src/lib/assets.ts` (`programme-identity` media key)
- The site navigation and page titles

**Verdict:** Search intent is unchanged. The rename is a net positive for entity disambiguation — it removes a term (`coalition`) that could be confused with real-world political coalitions and replaces it with the site's consistent in-universe term.

---

## 7. Terminology consistency (positive)

The word `coalition` was the last remaining instance of the term on the homepage's mission-brief surface. After this change:

- `facts.ts:18` — `programme` (just changed)
- `missionIntro.title` — `programme` (unchanged)
- `Hero.astro:12` — `programme` (renamed earlier in the Form A chain)

The homepage now uses `programme` consistently in the mission section. No further terminology inconsistency remains on this surface.

**Recommendation:** No further action needed. The rename is complete and consistent.

---

## 8. Metadata changes — none authorised

| Field | Status |
|-------|--------|
| Frontmatter `title` | Not present (data module, not a page) |
| Frontmatter `summary` | Not present |
| Frontmatter `description` | Not present |
| Page meta description | Unchanged (`site.defaultDescription`) |
| Internal links | None added or removed |
| Alt text | Not applicable |
| Structured data | Not applicable (no NewsArticle schema; fictional entity, no real-world markup) |

**Verdict:** No metadata changes are authorised or needed. The rename is a visible-copy terminology substitution with no impact on the document's structured metadata.

---

## 9. Confidentiality check

- No private timeline material (`docs/timeline/`) was used or referenced
- No unreleased facts, dates, partner names, or scenario details were introduced
- The change is purely terminological and does not disclose any information beyond what the page already publishes
- No gated-term list entries were exposed or cited

**Verdict:** Confidentiality clean.

---

## 10. Summary and handoff

The Form A programme rename on `website/src/features/mission/facts.ts:18` is **SEO-neutral and terminology-consistent**. The single-word substitution `coalition` → `programme`:

- Does not affect search intent (the page's purpose remains unchanged)
- Does not affect metadata (the page meta description is from `site.defaultDescription`)
- Does not affect internal linking (no links in the changed string)
- Improves terminology consistency across the homepage mission section

**No metadata changes, no link changes, and no concrete SEO findings requiring action.**

**Next owner:** Editorial gate (`mars-ai-simulator-editor` or `mars-ai-simulator-reviewer`).
