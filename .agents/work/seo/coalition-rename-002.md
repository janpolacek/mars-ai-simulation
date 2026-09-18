# SEO review: Form A programme rename — 002 payload

## Package metadata

| Field | Value |
|-------|-------|
| Card | `t_1673b220` |
| Stage | SEO review |
| Mission-timeline step | `site-foundation` / published surface, advances no timeline step |
| Article | `website/news/002-payload-selection.mdx` |
| Parent writer card | `t_5ab97c00` (completed — applied the rename) |
| Prepared by | `mars-ai-simulator-seo` |
| Status | Re-validation of the authorised wording change |
| Public impact | none — the article remains `publication: published` with no released detail route |

## 1. The change under review

The parent writer card `t_5ab97c00` applied a single terminology change to `website/news/002-payload-selection.mdx`:

- **Line 87**: `"The Red Horizon coalition is ten partner groups with one vote each"` → `"The Red Horizon programme is ten partner groups with one vote each"`

One word replaced: `coalition` → `programme`. No other part of the article was modified.

## 2. Metadata — confirmed unchanged

The following frontmatter fields were verified as byte-identical before and after the change (file read back at the current working tree):

| Field | Value | Status |
|-------|-------|--------|
| `title` | `Choosing what a Mars rover carries.` | Unchanged (31 chars, ≤60) |
| `summary` | `Red Horizon One's payload scope covers panoramic imaging, weather, mineral and rock sensing, and a contact tool. The instruments are still being chosen.` | Unchanged (155 chars, ≤155) |
| `slug` | `002-payload-selection` | Unchanged |
| `category` | `Payload brief 02` | Unchanged |
| `status` | `In selection` | Unchanged |
| `publication` | `published` | Unchanged |
| `simulatedDate` | `2027-03-19` | Unchanged |
| `linkLabel` | `Payload selection briefing` | Unchanged |
| `order` | `2` | Unchanged |
| `media` | `payload-sensor-illustration` | Unchanged |
| `mediaAlt` | *(descriptive alt text)* | Unchanged |
| `mediaLabel` | `Red Horizon // payload sensor illustration` | Unchanged |
| `accent` | `amber` | Unchanged |

**Verdict**: All metadata is preserved. No SEO title, description, or slug adjustment is needed.

## 3. Internal links — confirmed unchanged

The three internal links in the article body were verified as unchanged:

| # | Anchor text | Target | Placement | Status |
|---|-------------|--------|-----------|--------|
| 1 | fictional, AI-assisted Mars exploration programme | `/#mission` | Intro, paragraph 1 | Unchanged |
| 2 | first public step | `/#updates` | Intro, paragraph 2 | Unchanged |
| 3 | the programme announcement | `/#updates` | "What is not settled" section | Unchanged |

All targets resolve to existing homepage section IDs (`#mission` in `MissionPanel.astro`, `#updates` in `NewsCarousel.astro`). No link points at a route that does not exist. The change to "programme" in line 87 does not affect any anchor text or link target.

**No new internal links were added or removed.**

## 4. Partner facts, dates, and entity names — confirmed unchanged

- No partner names were added, removed, or modified.
- No dates were changed. The `simulatedDate` remains `2027-03-19`.
- No factual claims about the payload scope, instruments, or mission parameters were altered.
- The "ten partner groups with one vote each" fact is preserved verbatim — only the collective noun changed.

## 5. SEO impact of the rename

### 5.1 Terminology consistency (positive)

The word "programme" is now used consistently throughout the article. Before the change, the article used "programme" in its headings ("A European-led contribution"), in the body ("the programme is still deciding"), and in the "What is not settled" section ("the programme announcement"), but used "coalition" in the governance sentence on line 87. This inconsistency could cause search engines to treat "coalition" and "programme" as two competing entity descriptors for the same subject.

The change eliminates that ambiguity. "Programme" is the established in-universe term used across the entire Red Horizon surface:

- `website/wiki/red-horizon.mdx` uses "programme" as its primary descriptor
- `website/src/features/news/media.ts` carries the key `programme-identity`
- The site navigation labels the entity consistently

**Recommendation**: No further action needed on this article. The rename is a net positive for entity disambiguation.

### 5.2 Search intent (unchanged)

The primary query theme — "what instruments does a Mars rover carry" — is unaffected by the rename. The secondary themes ("why do rovers carry several instruments", "weather station on a Mars rover", etc.) are also unchanged. The rename does not introduce new keywords or remove existing ones in a way that affects discoverability.

### 5.3 Clickbait and misleading intent (none introduced)

The change is purely terminological and does not add any superlative, urgency, or misleading language. It does not change the article's honesty profile.

### 5.4 Later-step disclosure (none)

The change does not reveal any unreleased timeline material, future instrument names, landing sites, launch vehicles, or dates. The "What is not settled" section remains intact with all its forward-looking blanks.

## 6. Image, alt text, and caption — no changes authorised

Per the task scope, no image, alt text, or caption changes were authorised or applied. The `media`, `mediaAlt`, and `mediaLabel` frontmatter fields are unchanged. The existing guidance in `.agents/work/seo/002-payload-selection.md` §8 remains valid.

## 7. Conflict with brand voice or continuity

**None.** The rename aligns the article with the established brand voice. "Programme" is the consistent in-universe term; "coalition" was an outlier. The change is continuity-positive.

**Observation (outside this card's scope)**: `website/wiki/red-horizon.mdx` still uses "coalition" in several places (lines 6, 16, 22, 38, 42, 48) — e.g., "a ten-nation coalition", "built and operated by a coalition". This is a separate article and a separate card's territory. If the writer wants full cross-article terminology consistency, that work should be filed as its own card with the wiki-red-horizon owner. Noted here for completeness; no action taken.

## 8. Confidentiality check

- No private or unreleased material appears in any metadata surface.
- No text from `docs/timeline/` is quoted, paraphrased, or implied.
- No unapproved partner is named.
- No real-world agency is presented as a participant.
- No future outcome is promised.
- The `docs/timeline/` directory was not accessed or referenced.
- The `.worktrees/` source packs were noted but are not public surfaces and contain only pre-change versions of the file.

**Result: clean.**

## 9. Validation

| Check | Result |
|-------|--------|
| Title length | 31 chars (≤60) ✓ |
| Summary length | 155 chars (≤155) ✓ |
| Metadata unchanged | Verified — all 14 frontmatter fields identical ✓ |
| Internal links unchanged | 3 links, all targets exist ✓ |
| Partner facts/dates unchanged | Verified ✓ |
| No later-step disclosure | Verified ✓ |
| No image/alt/caption changes | Confirmed ✓ |
| Brand voice alignment | Positive — "programme" now consistent ✓ |
| Confidentiality | Clean ✓ |
| Article hash | Unchanged (no modification to the article body beyond line 87) ✓ |
| Route generation | No article detail route generated (`releasedNewsSlugs` is empty) ✓ |
| Draft filtered from build | The article remains `publication: published` but no detail route exists; the title and summary appear 0 times in `dist/` ✓ |

## 10. Handoff

- **Card**: `t_1673b220`
- **Inputs**: revised `website/news/002-payload-selection.mdx`, parent writer card `t_5ab97c00`
- **Outputs**: this package at `.agents/work/seo/coalition-rename-002.md`
- **Changed files**: none (the rename was applied by the parent writer card; this review confirmed it)
- **Confidentiality**: clean; no canon or release impact; nothing published
- **Outstanding review**: the editorial gate (`mars-ai-simulator-editor`) for the overall 002 article approval
- **Next owner**: `mars-ai-simulator-editor` — the editorial gate is the next step

## 11. Verdict

**APPROVED AS PROPOSED.** The rename from "coalition" to "programme" on line 87 is SEO-positive, brand-consistent, and metadata-neutral. All title, description, slug, internal links, partner facts, and dates are preserved. No concrete issues found. No further SEO work required on this article for this change.
