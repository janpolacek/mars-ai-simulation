# Editorial gate review: Form A programme rename — 002 payload

## Package metadata

| Field | Value |
|-------|-------|
| Card | `t_d26cf68c` |
| Stage | Editorial gate (merged continuity + copy + editorial role) |
| Mission-timeline step | `site-foundation` / published surface; advances no timeline step |
| Article | `website/news/002-payload-selection.mdx` |
| Parent SEO card | `t_1673b220` (APPROVED AS PROPOSED — `.agents/work/seo/coalition-rename-002.md`) |
| Writer card | `t_5ab97c00` (applied single-line wording substitution, recorded on `comments/437`) |
| Upstream human decision | `t_8e8364e4` (2026-09-18): Form A — use `programme` everywhere |
| Status | Editorial gate recorded |
| Public impact | None — the article stays `publication: published`; no later-step route or asset created |

## 1. The change under editorial gate

A single line in `website/news/002-payload-selection.mdx` (the only line that contained the term `coalition`):

- **Line 87 (was line 87 in the SEO diff):**
  - BEFORE: `The Red Horizon coalition is ten partner groups with one vote each, whatever they contribute.`
  - AFTER:  `The Red Horizon programme is ten partner groups with one vote each, whatever they contribute.`

One word replaced: `coalition` → `programme`. The diff against `HEAD` (verified via `git diff`) is exactly this one line; the rest of the file is untouched.

`grep -n "coalition" website/news/002-payload-selection.mdx` returns zero matches — the article no longer mixes `coalition` and `programme`. The body now reads `programme` consistently in every reference to the entity (lines 16, 21, 24, 87, 90, 105, 120).

## 2. Continuity and canon

### 2.1 Released canon

The 002 article was published in earlier timeline work (committed `44e416f t_b429a50d: publish 002-payload-selection after human approval`) and carries `publication: published`. The rename touches only the article body, not the canonical lock — `docs/SCENARIO.md` is unchanged and the article continues to describe the same fictional programme as before.

The 002 article already uses `programme` in its intro (line 16: "Red Horizon is a fictional, AI-assisted Mars exploration programme"), in its body ("the programme has now agreed a payload scope", "the programme is treating it that way", "the programme will not describe them as settled", "the programme announcement"), and in its closing sentence ("nothing in this article implies that any real agency has endorsed or joined the programme"). Only line 87 still used `coalition`. The rename removes the inconsistency, not the canonical fact.

### 2.2 Wiki cross-reference (acknowledged, out of scope)

`website/wiki/red-horizon.mdx` (currently `publication: draft`, not released) still uses `coalition` in lines 6, 16, 22, 38, 42, 48 — including its `summary` ("a ten-nation coalition"), the body ("built and operated by a coalition as a single mission"), the section heading "Coalition and governance", and two inline references to "the coalition that carries it". This is the wiki surface, not the news surface. It is out of this card's scope and should be its own continuity card; flagging here so the next wiki gate sees it.

### 2.3 Spoiler check

- No later timeline material is exposed. Step 003 (vehicle design) facts, step 004 (launch provider) facts, and any post-004 details remain absent.
- No launch date, landing date, instrument names, or partner names are introduced or removed.
- The "What is not settled" section (lines 100–106) keeps its forward-looking blanks intact, including the explicit "No launch or landing date is being stated."

### 2.4 Simulated record date

- The article's `simulatedDate` remains `2027-03-19`.
- This value matches the locked milestone in `docs/SCENARIO.md` line 183 — **19 March 2027 — Mission Concept Review** — the milestone associated with the released timeline step that 002 covers.
- The published surface states the date under the "Simulated record date" label; the SEO review and the earlier publishing card both confirmed the surface is intact.
- No invented day, month, or year; nothing in the rename affects the date or its label.

## 3. Copy

- The new sentence reads naturally: "The Red Horizon programme is ten partner groups with one vote each, whatever they contribute." It matches the article's own existing register — informed, composed, candid, specific.
- No vagueness, marketing language, or unsupported certainty is introduced.
- The fact (ten partner groups, one vote each) is preserved verbatim. Only the collective noun changed.
- The Red Horizon voice is upheld. Nothing to rewrite.

## 4. Surface

- Frontmatter (`title`, `category`, `status`, `publication`, `simulatedDate`, `summary`, `linkLabel`, `order`, `media`, `mediaAlt`, `mediaLabel`, `accent`) — verified unchanged; identical to the SEO package's table.
- The three internal links (`/#mission`, `/#updates`, `/#updates`) are unchanged.
- No image, alt text, caption, label, route, or asset change. Per the task scope, none was authorised.
- No edit to `docs/`, `docs/timeline/`, or any scenario file.

## 5. Confidentiality

- No private timeline material present or introduced.
- No unreleased content placed in public routes, metadata, asset names, alt text, links, or captions.
- The `docs/timeline/002-payload-selection.md` reference is continuity material only; the article does not paraphrase it.
- The change does not name any real agency as a participant.

**Result: clean.**

## 6. Validation

| Check | Result |
|-------|--------|
| Exactly one wording substitution | Confirmed via `git diff` — one line changed ✓ |
| Surrounding fact preserved | "ten partner groups with one vote each, whatever they contribute" byte-identical except for the noun ✓ |
| No partner names added or removed | Verified by reading the article; partner list and partner-characterising facts unchanged ✓ |
| No dates changed | `simulatedDate` 2027-03-19 unchanged; no in-body date modified ✓ |
| No image, alt, label, or caption change | None authorised, none applied ✓ |
| No later-step disclosure | Article still withholds instrument names, launch date, landing site ✓ |
| Article hash check | Diff is one line; the article is otherwise byte-identical to `HEAD` ✓ |
| Brand voice | Aligned — `programme` is now consistent throughout the article ✓ |
| Wiki cross-reference | Acknowledged — wiki still uses `coalition`; out of scope for this card; flag recorded ✓ |
| Confidentiality | Clean ✓ |

## 7. Verdict and release decision

**Verdict:** `approved`.

**Release decision (the editorial gate's recorded sentence):** the rename from `coalition` to `programme` on line 87 of `website/news/002-payload-selection.mdx` is approved as a Form A copy correction. The article remains `publication: published` and the public scope is unchanged: a published article that already lives in the released surface, with one noun aligned to the in-universe brand voice. No new content is published by this gate; the rename is a correction to wording that was already public. The dev gate (`t_5717611d`, child of this card) is released by this approval.

## 8. Handoff

- **Card:** `t_d26cf68c`
- **Inputs:** SEO package `.agents/work/seo/coalition-rename-002.md`, writer handoff comment 437 on `t_5ab97c00`, human Form A decision on `t_8e8364e4`.
- **Output:** this review at `.agents/work/reviews/coalition-rename-002.md`.
- **Changed files (this gate):** none — the gate verifies the writer's already-applied change and records the verdict.
- **Confidentiality:** clean; no canon or release impact beyond the wording alignment; nothing new made public.
- **Validation:** single-line diff confirmed, partner facts preserved, simulated date aligned to the locked milestone for step 002 (`docs/SCENARIO.md` line 183, 19 March 2027), spoiler check passed, voice upheld.
- **Outstanding:** none on this card. The next surface work is the dev gate `t_5717611d` (commit/push), which the active developer profile runs under its current 2026-09-17 explicit instruction once this gate approves.
- **Next recommended owner:** `mars-ai-simulator-dev` via `t_5717611d` — commit only the paths this Form A rename touched (the five files already modified in the working tree from the parallel Form A cards: `001`, `002`, `004`, `Hero.astro`, `facts.ts`), with the card id in the commit message, rebase before push, report the commit SHA and push result on the dev card. No external action, no deploy, no domain/DNS — `main` deploys automatically per the standing instruction.