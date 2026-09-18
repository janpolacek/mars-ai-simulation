# SEO package: Form A programme rename — homepage hero

## Package metadata

| Field | Value |
| --- | --- |
| Page | `website/src/features/mission/Hero.astro` (homepage hero component, rendered by `website/src/pages/index.astro`) |
| Timeline step | `site-foundation` / homepage public surface (advances no timeline step) |
| Card | `t_56bf4ad7` (`mars-ai-simulator-seo`) |
| Owner | `mars-ai-simulator-seo` |
| Skill | `seo-content` |
| Parent writer | `t_cda1bfc4` |
| Inputs read | `website/src/features/mission/Hero.astro` (revised); `t_8e8364e4` Form A decision; `website/src/lib/navigation.ts`; `website/src/lib/site.ts`; `website/src/layouts/BaseLayout.astro` |
| Conventions read | `.agents/skills/seo-content/SKILL.md`, `.agents/skills/brand-voice/SKILL.md` |
| Artifact | `.agents/work/seo/coalition-rename-hero.md` (this file) |
| Applied to the page | One word change on line 12: `coalition` → `programme` |
| Status | recommendations issued; **no release, no deploy, no canon change** |

Assumptions recorded:

1. The rename is the sole authorised change. No metadata, dates, links, headings, or frontmatter values were modified or proposed for modification.
2. Hero.astro is a component with no frontmatter; page-level metadata (`title`, `description`) comes from `BaseLayout.astro` via `site.defaultTitle` and `site.defaultDescription` (`website/src/lib/site.ts`). Neither default string contains `coalition` or `programme`.
3. The private timeline (`docs/timeline/`) was not consulted — it is continuity material only and carries no public metadata implication for this rename.

---

## 1. Change under review

**Authorised wording change:** line 12 of `website/src/features/mission/Hero.astro`

- **Before:** "Red Horizon follows a fictional international coalition as it works through the real questions behind a robotic Mars expedition: what to build, where to go, and how to make decisions with evidence."
- **After:** "Red Horizon follows a fictional international programme as it works through the real questions behind a robotic Mars expedition: what to build, where to go, and how to make decisions with evidence."

The word `coalition` is now fully absent from the hero summary. This aligns the hero with the rest of the public surface, where `programme` is the authorised term (per the `t_8e8364e4` Form A decision).

---

## 2. Title — unchanged, no regression

| Check | Result |
| --- | --- |
| Frontmatter `title` | None (Hero.astro is a component; page title comes from `BaseLayout` → `site.defaultTitle` = `"Red Horizon \| A Mars mission in progress"`) |
| h1 heading | `"A mission to read Mars carefully."` (unchanged, line 10) |
| h1 length | 37 characters (≤ 60) — **pass** |
| Search intent | Brand informational — clear, honest, no clickbait |
| Impact of rename | None. The h1 does not contain `coalition` or `programme`. |

**Verdict:** No change recommended. The h1 is within bounds and unchanged by the rename. The page title (from `site.defaultTitle`) is also unchanged and unaffected.

---

## 3. Summary / meta description — unchanged, no regression

| Check | Result |
| --- | --- |
| Meta `description` | `site.defaultDescription` = `"Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface."` (unchanged, `site.ts` line 17) |
| Length | 104 characters (≤ 155) — **pass** |
| Keyword consistency | Does not contain `coalition` or `programme`; unaffected by rename |
| Impact of rename | None. The meta description is set in `site.ts`, not in Hero.astro, and was not touched. |

**Verdict:** No change recommended. The meta description is within bounds and unaffected by the rename.

---

## 4. Slug / URL — N/A (component)

Hero.astro is a component, not a standalone page. It renders inside `index.astro` at the route `/`. The URL is determined by the page file, not the component. No slug or URL is affected by the rename.

**Verdict:** No change recommended. Not applicable to a component.

---

## 5. Internal links — unchanged, no regression

| Link | Target | Anchor text | Affected by rename? |
| --- | --- | --- | --- |
| `.text-link` (line 15) | `#updates` | "Read the first announcement →" | **No** — anchor text does not contain `coalition` or `programme` |

Navigation links (`website/src/lib/navigation.ts`): `News`, `Wiki`, `Mission` (`#mission`), `Roadmap` (`#timeline`), `About` — none reference the hero text and none are affected.

**Verdict:** No change recommended. The single internal link in the hero is unaffected by the rename.

---

## 6. Frontmatter / metadata audit — N/A (component)

Hero.astro has no frontmatter. All page-level metadata is handled by `BaseLayout.astro` from `site.ts`:

| Field | Value | Changed by rename? |
| --- | --- | --- |
| `site.defaultTitle` | `"Red Horizon \| A Mars mission in progress"` | No |
| `site.defaultDescription` | `"Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface."` | No |
| `site.name` | `"Red Horizon"` | No |
| `site.disclosure` | AI fiction disclosure | No |

**Verdict:** No metadata field was modified by the rename. All page-level metadata is unchanged and within bounds.

---

## 7. Heading structure and alt text

| Element | Value | Status |
| --- | --- | --- |
| h1 (`#hero-title`) | `"A mission to read Mars carefully."` | Unchanged, well-formed |
| eyebrow (line 9) | `"Fictional mission // AI-assisted project"` | Unchanged |
| Image alt (`line 20`) | `alt=""` | Unchanged (decorative identity mark) |
| ARIA | `aria-labelledby="hero-title"`, `aria-hidden="true"` on decorative elements | Unchanged |

**Verdict:** No heading or alt-text regression. The h1 is unique on the page and properly associated with the section.

---

## 8. Content consistency check

| Element | Uses `programme`? | Uses `coalition`? |
| --- | --- | --- |
| Hero summary (line 12, post-rename) | Yes | **No** |
| Page title (`site.defaultTitle`) | No | No |
| Meta description (`site.defaultDescription`) | No | No |
| Internal link text | No | No |

The hero now uses `programme` consistently with the rest of the public surface (001 announcement, 002 payload, 004 launch provider, facts.ts). The word `coalition` is fully absent from the hero component, matching the Form A decision.

**Cross-page note (informational, out of scope):** `website/wiki/red-horizon.mdx` still uses `coalition` in its summary and body text (lines 6, 16, 38, 48). This is a separate page with separate ownership and was not part of the authorised change for this card.

---

## 9. Confidentiality check

- No content from `docs/timeline/` appears in this package or in any recommended string.
- No unreleased scenario facts appear in the hero or in this package.
- The rename is purely terminological within already-published public text (the hero is part of the site-foundation surface).
- No private or gated material is referenced, quoted, or implied.

**Verdict:** No confidentiality concern.

---

## 10. Validation completed

| Check | Method | Result |
| --- | --- | --- |
| Line 12 diff | Read `Hero.astro` at offset 10–14 | Confirmed: `coalition` → `programme`, exactly one word |
| `coalition` absent from Hero.astro | `search_files` on `website/src/features/mission` for "coalition" | Zero matches in the mission directory — confirmed absent |
| h1 length | Character count | 37 chars ≤ 60 — pass |
| Meta description length | Character count | 104 chars ≤ 155 — pass |
| Internal link integrity | Read `navigation.ts` routes and Hero.astro line 15 | `#updates` anchor is a valid in-page section; link text unaffected |
| Metadata source | Read `site.ts`, `BaseLayout.astro` | Page metadata comes from `site.ts`; no `coalition`/`programme` in defaults |
| Component structure | Read `Hero.astro` full file | No frontmatter; no slug; no metadata; decorative image with empty alt |
| Parent writer confirmation | `t_cda1bfc4` review | Approved: line 12 changed, no remaining `coalition` instances |

---

## 11. Verdict

**APPROVED AS PROPOSED.** The rename from `coalition` to `programme` on line 12 of `Hero.astro` introduces no SEO regression. The component carries no frontmatter or metadata of its own; page-level title and description come from `site.ts` defaults and are unaffected. The h1 heading is unchanged and within bounds. The single internal link is unaffected. The rename improves terminological consistency across the public surface, aligning the hero with the rest of the site that now uses `programme`. No issue blocks the gate.

No recommendation to change any metadata, heading, link, or slug. The homepage hero passes as-is with the authorised wording change.

---

## Review outstanding

This package is submitted for editorial review by `mars-ai-simulator-editor`. The editor confirms canon and records the release. No further SEO action is required unless the editor identifies a concern.
