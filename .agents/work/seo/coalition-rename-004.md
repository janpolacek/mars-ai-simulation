# SEO package: Form A programme rename — 004 launch provider

## Package metadata

| Field | Value |
|---|---|
| Slug | `004-launch-provider` |
| Timeline step | `site-foundation / published surface` (advances no timeline step) |
| Article | `website/news/004-launch-provider.mdx` |
| Parent writer card | `t_7af93a3d` (renamed "coalition" → "programme" on line 14) |
| Form A decision card | `t_8e8364e4` |
| Previous SEO package | `t_acea152d` / `.agents/work/seo/004-launch-provider.md` (metadata pass, approved) |
| SEO card | `t_f4b3352f` (this pass) |
| Prepared by | `mars-ai-simulator-seo` |
| Status | re-validation complete |
| Public impact | none — article remains `publication: draft`; the rename is a wording change inside an unpublished body |
| Confidentiality | clean — no timeline, partner, or release facts disclosed or altered |
| Next owner | `mars-ai-simulator-editor` — editorial gate |
| No commit or push performed | — |

---

## 1. Scope of review

This is a **re-validation**, not a redo. The article `004-launch-provider.mdx` was previously SEO-reviewed under card `t_acea152d` (package `.agents/work/seo/004-launch-provider.md`, APPROVED). That package's findings on title, summary, slug, headings, internal links, and structured data remain valid and are not restated here.

This pass reviews **only the authorised wording change**: line 14, "The coalition has selected a delivery architecture" → "The programme has selected a delivery architecture." All other facts, dates, institutions, provider names, and architecture details were preserved verbatim by the parent writer card.

---

## 2. What changed

**Source file**: `website/news/004-launch-provider.mdx`

| Item | Before | After |
|------|--------|-------|
| Line 14 lead sentence | "The **coalition** has selected a delivery architecture" | "The **programme** has selected a delivery architecture" |
| All frontmatter fields | unchanged | unchanged |
| All other body text | unchanged | unchanged |
| All internal links | 3 present, unchanged | 3 present, unchanged |
| `publication` field | `draft` | `draft` |
| `simulatedDate` | `2030-03-11` | `2030-03-11` |
| File hash | `4ac5647b...` | `be20389f...` |

The word "coalition" no longer appears anywhere in `004-launch-provider.mdx`. The word "programme" now appears 8 times consistently throughout the body, matching the usage in articles 001–003.

---

## 3. SEO check: was / is

| Check | Was (per `t_acea152d`) | Is (after rename) | Verdict |
|-------|----------------------|-------------------|---------|
| Title (`title` frontmatter) | `"The launch architecture, chosen."` — 32 chars | **Unchanged** | ✅ PASS |
| Summary (`summary` frontmatter) | 153 chars, within 155 budget | **Unchanged** | ✅ PASS |
| Slug / URL | `004-launch-provider` → `/news/004-launch-provider/` | **Unchanged** | ✅ PASS |
| Internal link 1 | `/#mission` (programme link) | **Unchanged** | ✅ PASS |
| Internal link 2 | `/news/003-vehicle-design/` (rover link) | **Unchanged** | ✅ PASS |
| Internal link 3 | `/news/001-project-announcement/` (announcement link) | **Unchanged** | ✅ PASS |
| Heading count | 0 `h2`s in body | **Unchanged** | ✅ PASS |
| `publication` status | `draft` | **Unchanged** — route still not generated | ✅ PASS |
| `simulatedDate` | `2030-03-11` | **Unchanged** | ✅ PASS |
| Structured data | Not recommended (draft) | **Unchanged** | ✅ PASS |
| `linkLabel` | `"Launch architecture briefing"` | **Unchanged** | ✅ PASS |
| Forbidden tokens | None present | **None present** after rename | ✅ PASS |
| Word "coalition" in article | 1 instance (line 14) | **0 instances** — fully removed | ✅ PASS |
| Word "programme" consistency | Mixed | **8 instances**, consistent with articles 001–003 | ✅ PASS |

---

## 4. Concrete findings

### 4.1 No SEO issues from the rename

The rename is semantically correct and SEO-neutral:

- **"Programme" is the correct term** for Red Horizon as a whole (used in articles 001–003, the wiki, and the navigation). The previous use of "coalition" in the lead of article 004 was inconsistent with the rest of the article, which already used "programme" in lines 23, 24, 39, 52, and 55.
- **No metadata was affected.** The frontmatter `title`, `summary`, `slug`, `linkLabel`, `simulatedDate`, and `publication` fields are all untouched.
- **No internal links were affected.** All three existing links remain valid and unchanged.
- **No later-step disclosure was introduced or removed.** The article still discusses only the architecture decision, with no launch date, landing site, or step 005–011 facts.

### 4.2 Stale build artifact (non-issue, noted for awareness)

The built output at `website/dist/news/004-launch-provider/index.html` still contains the old text "The coalition has selected". The `website/.astro/data-store.json` also retains the pre-render content with "coalition". Both are **gitignored build artifacts** (`website/dist/`, `website/.astro/`), not source files. They will be regenerated on the next site build and will reflect the corrected source. **No action required by this role.**

### 4.3 Cross-article "coalition" usage (not in scope)

The word "coalition" still appears in `website/wiki/red-horizon.mdx`, `website/news/002-payload-selection.mdx`, and `website/news/001-project-announcement.mdx` — correctly, as it refers to the ten-nation partner group. Article 004's rename does not affect these documents. This pass reviews article 004 only, per the task scope. **No action required by this role.**

---

## 5. Containment check

- No launch day, time, or date beyond the 2031 window is in any metadata string. ✅
- No step 005–011 facts in title, summary, or linkLabel. ✅
- No keyword stuffing. Title is 32 chars; summary is 153 chars. ✅
- No real institution, provider, or facility name in any metadata string. ✅
- Internal links point only to published routes: `/#mission`, `/news/001-project-announcement/`, `/news/003-vehicle-design/`. ✅
- No JSON-LD, no sitemap entry, no canonical override. ✅
- No article 004 content in any metadata surface that would pre-empt step 005–011. ✅
- The rename does not introduce any new search-intent mismatch or spoiler. ✅
- Confidentiality clean: no private timeline material, unapproved partners, or future outcomes in any metadata surface. ✅

---

## 6. Validation

- File hash measured: `be20389fc0bd00222ca40400cf7f9bf3b6a1030478a3b1a4468066b4e552fd34` (changed from `4ac5647b...`, expected from the one-word content change)
- `grep -n "coalition" website/news/004-launch-provider.mdx` → no matches
- `grep -c "programme" website/news/004-launch-provider.mdx` → 8 instances
- Title character count: 32 chars (measured)
- Summary character count: 153 chars (measured)
- Route `/news/004-launch-provider/` not generated (publication is `draft`)
- `website/dist/` and `website/.astro/` confirmed gitignored
- `steps.ts` route reference `routes.newsArticle('004-launch-provider')` unaffected by rename
- No commit or push performed

---

## Handoff

- **Card:** `t_f4b3352f` (SEO pass, timeline step `site-foundation`)
- **Article hash:** `be20389f...` (changed from `4ac5647b...` — the rename is the only content change)
- **Previous SEO package:** `.agents/work/seo/004-launch-provider.md` (unchanged, still valid)
- **All metadata and internal links confirmed unchanged.** No concrete SEO issues found.
- **Next owner:** `mars-ai-simulator-editor` — editorial gate, records the release decision.
- **Then:** `mars-ai-simulator-dev` — if a rebuild is needed to clear the stale `dist/` artifact, that is a site-engineering card, not an SEO action.
