# SEO package: 004-launch-provider

## Package metadata

| Field           | Value                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| Slug            | `004-launch-provider`                                                                                   |
| Timeline step   | `004-launch-provider`                                                                                   |
| Article         | `website/news/004-launch-provider.mdx`                                                                 |
| Brief           | `.agents/work/briefs/004-launch-provider.md`                                                            |
| Source pack     | `.agents/work/sources/004-launch-provider.md`                                                           |
| Draft card      | `t_1ff6a809` (done)                                                                                     |
| Gate card       | `t_4d1b3041` (done — Option A selected, 004-D deferred, 004-B "not required")                          |
| SEO card        | `t_acea152d`                                                                                             |
| Prepared by     | `mars-ai-simulator-seo`                                                                                 |
| Status          | metadata applied; no release, no deploy, no canon change                                                |
| Public impact   | none — `publication: draft` is untouched, so nothing here is a public route, a crawlable page, or canon |
| Confidentiality | `docs/timeline/004` read for containment only; no gated value in any recommended metadata string        |
| File hash       | 4ac5647bc8695e81100953c136501a1d7a10ba7ebaf1cb3e75f473fbdab18f33 (matches parent task; unchanged)       |

---

## 1. Reader intent

**Single honest intent.** _"Tell me how Red Horizon's Mars mission will reach the planet — what launcher and architecture were chosen, and what remains before flight."_

The article satisfies it. It names the Ariane 64 launcher, explains the delivery architecture (payload adapter, injection segment, cruise stage, EDL concept, relay architecture), and states plainly that the announcement is a design decision, not a launch-date promise. The reader who opens this page learns what the mission's Earth-to-Mars stack looks like without being told a launch day or landing site.

- **Primary query theme:** "Red Horizon launch architecture" / "how Red Horizon One reaches Mars" — informational, pre-launch, reader who wants to understand the delivery decision.
- **Secondary themes:** "Mars mission launcher choice", "Earth to Mars delivery architecture", "Red Horizon Ariane 64", "Mars cruise stage and EDL".
- **Queries this page must not chase:** "Red Horizon launch date" (gated at step 005), "Red Horizon landing site" (gated at step 006), "Ariane 64 launch schedule" (real-world, not this page's subject), "Red Horizon partner list" (article 001's territory).

---

## 2. Title (`title`)

- **Current:** `"The launch architecture, chosen."` — 32 characters, one sentence, period at end, matches the site's declarative sentence-heading style.
- **Gate 004-D:** title deferred to the release gate; the writer's drafted title applies. No title set by the gate.
- **Recommendation: keep as-is.** 32 chars (46 with `| Red Horizon` suffix) — well within the ~60-char search-snippet budget. It states the one thing this step settles (the architecture is chosen) and omits what it does not settle (a launch date, a landing site).
- **Route-level `<title>`:** `BaseLayout` appends `| ${site.name}`, so the document title becomes `"The launch architecture, chosen. | Red Horizon"` — 46 characters.
- **Why:** the title frames the reader's question honestly — what did the programme decide? — without promising a date or revealing step 005–011 facts. The word "architecture" is the plain-language category for what the article describes; "chosen" is the step's fact. The period at the end matches the established site style (cf. "The rover design, frozen.").
- **Rejected alternatives:**
  - "Red Horizon selects its launch vehicle" (reads like a press release; "selects" implies a decision event the article explicitly says is not a launch-date promise)
  - "The launch provider announcement" (vague — the article is about architecture, not provider branding)
  - "How Red Horizon One will leave Earth" (future-tense implication; the article is about a design decision)

---

## 3. Meta description (the `summary` field)

- **Current (153 chars):** `"Red Horizon One's delivery architecture is decided: an Ariane 64 launcher, a cruise stage for the transfer to Mars, and the integration work still ahead."`
- **Recommendation: keep as-is.** 153 characters, within the 155-char budget. Reads cleanly. States the three key facts a searcher needs: (1) the architecture is decided, (2) the launcher is Ariane 64, (3) integration work remains. No truncation risk.
- **Rejected alternatives:**
  - Trimming to 149 chars by dropping "the integration work still ahead" — loses the "not a launch promise" signal that the reader needs.
  - Adding "2031 launch window" — that fact is in article 001's territory; adding it here would create a redundant search snippet.
  - Name-drop "cruise stage, lander platform, relay" — too many nouns for a 155-char field; the body explains the stack.

---

## 4. Slug and public URL

- **Keep `004-launch-provider`. No change.** Stable, human-readable, already the content collection id: the brief, the source pack, this package, and the kanban cards all reference it. The numeric prefix is the real ordering fact shared with `001-project-announcement`, `002-payload-selection`, and `003-vehicle-design`.
- **Route, as the site now implements it:** `/news/004-launch-provider/` — directory routes (`trailingSlash: 'always'`), generated by `src/pages/news/[slug].astro` only for slugs whose `publication` is `published`. That field is `draft` today, so the route exists and emits **no** article page.
- **Convention (carried forward from 001/002/003):** content id = release-gate key = public URL. No separate public-slug field. No renaming after release.

---

## 5. Heading outline

**Current state:** the body has **0 markdown headings** in 579 words across eight paragraphs. The frontmatter `title` is the intended `h1`.

**Recommendation: heading-free at 579 words.** The article-drafting skill guideline keeps body copy heading-free under ~600 words; at 579 words this article is just below that threshold. The piece reads as a single narrative arc: what was decided → what the launcher is → what the programme's interface looks like → what the EDL architecture does → why the mission shapes this way → what remains. Breaking that arc with headings would add scanability at the cost of the article's voice.

If headings are desired later (e.g. for the editorial gate or after a body expansion), the natural break points would be:

| Level | Heading (suggested) | Rationale |
| ----- | ------------------- | --------- |
| h1    | The launch architecture, chosen. (frontmatter title) | the one thing step 004 settles |
| h2    | The launch vehicle | Ariane 64 description, non-endorsement framing |
| h2    | The programme's interface | payload adapter, injection segment, separation |
| h2    | Getting to Mars and getting down to it | cruise stage, EDL, relay architecture |
| h2    | What remains before flight | integration, tests, readiness — the "not a promise" close |

These headings are **not applied**. The writer decides whether to add them and how to phrase them. The body's current eight-paragraph structure is the authoritative reference.

---

## 6. Internal links

| # | Anchor text | Target | Placement | Why |
| - | ----------- | ------ | --------- | --- |
| 1 | fictional, AI-assisted Mars exploration programme | `/#mission` | paragraph 1 (line 12) | already present — links to the mission brief; keeps the fiction disclosure one hop from the claim |
| 2 | the six-wheel rover | `/news/003-vehicle-design/` | paragraph 3 (line 30) | already present — links to the predecessor article about the vehicle; the natural predecessor link |
| 3 | programme announcement | `/news/001-project-announcement/` | paragraph 7 (line 47) | already present — links to the first article where the 2031 launch window was announced |

**All three links are already present in the draft.** Every target is a published route (`/#mission` in the homepage, `/news/001-project-announcement/` and `/news/003-vehicle-design/` released). No additional internal links recommended:

- A link to `/news/002-payload-selection/` is not warranted: article 002 covers the payload scope agreement, which is not this article's subject. Forcing a link there would be a navigational cost, not a reader benefit.
- A link to `/wiki/vehicle/` is not warranted: the wiki vehicle node is not yet a published route (it will be released at step 004 per Gate 004-C, but the route does not exist today).

**Convention check:** all three links use the site's directory-route format (`/news/<slug>/` with trailing slash). The `/#mission` anchor link is the homepage fragment. No false-affordance links.

---

## 7. Structured data

**Not recommended at this time.** `NewsArticle` structured data requires a recorded first-publication date, a byline policy, a stable released URL, and a machine-readable fiction disclosure — none of which exist while the article is `publication: draft` and no production origin is authorised. Emitting no canonical while no production origin is recorded is the correct state, not a gap. This matches the approach taken for articles 001, 002, and 003 (the `seo.ts` suppress-canonical behaviour applies).

The same suppress-canonical behaviour that `seo.ts` already implements for 001/002/003 applies to 004. No sitemap membership for article 004 unless the origin-gated sitemap integration is separately reviewed and approved (per the wiki-tree SEO check `t_b2c55032` precedent).

When the article is released, the site engineer should add `NewsArticle` JSON-LD to `ArticleView.astro` with:

- `headline`: the frontmatter `title`
- `datePublished`: the first-publication timestamp
- `author`: the programme attribution (fictional entity, clearly labelled)
- `description`: the `summary` field
- `isPartOf`: the Red Horizon project

This is a **site-engineering card**, not an SEO-package recommendation.

---

## 8. Changes applied to `website/news/004-launch-provider.mdx`

**The writer's draft already carries correct SEO-owned metadata.** The file was re-read immediately before this pass; the hash `4ac5647b...` matches the parent task's recorded hash. No changes were needed.

The frontmatter fields this package owns:

| Field          | Current value                                     | Recommended value             | Applied?        |
| -------------- | ------------------------------------------------- | ----------------------------- | --------------- |
| `title`        | `"The launch architecture, chosen."`              | keep (§2)                     | n/a — unchanged |
| `summary`      | 153 chars (current)                               | keep (§3)                     | n/a — unchanged |
| `slug`         | `004-launch-provider` (file id)                   | keep — no change              | n/a             |
| `linkLabel`    | `"Launch architecture briefing"`                  | keep — appropriate            | n/a             |
| Headings       | 0 `h2`s in body                                   | heading-free at 579 words (§5) | n/a — unchanged |
| Internal links | 3 present, all valid (§6)                         | keep — all three warranted    | n/a — unchanged |
| `publication`  | `draft`                                           | must stay `draft` until release gate | n/a — unchanged |

**No metadata field was modified.** The writer's draft was already SEO-correct.

---

## 9. Containment check

- No launch day, time, or date beyond the 2031 launch window (already in article 001's territory). Checked: the summary mentions no date; the title mentions no date.
- No launch vehicle performance figure, integration date, or step 005–011 fact in any metadata string. Checked: summary names "Ariane 64 launcher" (the cleared designation) and "integration work still ahead" (status, not a date).
- No keyword stuffing. Title is 32 chars; description is 153 chars; both are natural sentences.
- No real institution, provider, operator, or facility name in any metadata string. Gate 004-B "not required — no real provider or institution named" applies; the launcher designation "Ariane 64" is the cleared canon value, not an institution name.
- Internal links point only to published routes: `/#mission`, `/news/001-project-announcement/`, `/news/003-vehicle-design/`.
- No JSON-LD, no sitemap entry, no canonical override. The `seo.ts` suppress-canonical behaviour for 004 matches the 001/002/003 precedent.
- No article 004 content in any metadata surface that would pre-empt step 005–011.

---

## 10. Validation

- Title character count: 32 chars (measured with `echo -n | wc -c`). With suffix: 46 chars.
- Description character count: 153 chars (measured with `echo -n | wc -c`).
- Route existence: `/news/004-launch-provider/` is not generated (publication is `draft`).
- Internal link targets verified: `/#mission` exists in `src/pages/index.astro`; `/news/001-project-announcement/` is published; `/news/003-vehicle-design/` is published.
- Heading count: 0 `h2`s in current body (verified by reading the file).
- Article word count: 579 words (verified; 629 lines in file, but the file includes frontmatter; body words counted from content start).
- File hash: `4ac5647bc8695e81100953c136501a1d7a10ba7ebaf1cb3e75f473fbdab18f33` (matches parent task).
- Forbidden-token scan: no launch-day forms, no step 005–011 facts, no real institution names, no coordinates, no cost figures in title, summary, or linkLabel.

---

## 11. Conflicts and open decisions

1. **Title is a Gate 004-D deferral.** The writer's drafted title applies until the release gate sets one. The SEO role recommends keeping it (§2). No title change was applied.

2. **Heading decision is body-length-gated.** At 579 words, the article is just under the 600-word heading-free threshold. The recommended heading outline (§5) is recorded but not applied. The writer decides whether to add headings before the editorial gate.

3. **Media key is not registered.** The brief names no media key for article 004; the IMAGES card `t_6fde5f04` owns the visual decision. No `media:` field exists in the frontmatter, which is the correct fail-closed state (amber news-placeholder). The site engineer registers the key only after an approved asset exists.

4. **simulatedDate is not assigned.** The milestone table holds no row for a launch-architecture/provider decision. The gap goes to the article's release card (per the gate ledger's C7 constraint).

---

## Handoff

- **Card:** `t_acea152d` (SEO pass, timeline step `004-launch-provider`)
- **Article hash:** `4ac5647b...` (unchanged — no SEO-owned field was modified)
- **Next owner:** `t_6fde5f04` (IMAGES card) — decide new vs reuse imagery; no media key exists today.
- **Then:** `mars-ai-simulator-editor` — editorial gate, simulatedDate assignment (C7), and release decision.
- **Then:** `mars-ai-simulator-dev` — if the IMAGES card registers a new media key, a dev card wires the plate resolver and repairs `guards.mjs`.
