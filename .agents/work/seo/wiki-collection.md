# Wiki collection SEO review

Card: t_b2c55032. Timeline: site-foundation (wiki structure only).
Date: 2026-09-17. Verdict: structural review complete with corrections and explicit deferrals; NOT a release approval or an all-criteria pass.

## Evidence boundary and sources

The shared checkout is 13 commits behind origin/main and contains unrelated edits. No tracked site files or sibling worktrees were changed. Audit performed in `.worktrees/t_b2c55032`, a new detached worktree at `72743e5`, with its own npm dependencies and content cache. All paths below are repository-relative; inspected implementation paths resolve under that worktree. No remote deployment was performed or independently checked in this pass.

Inputs: card t_b2c55032; parent t_5f4bee93 and its implementation handoff; `.agents/work/briefs/wiki-tree-plan.md` (planning intent, not proof of implementation); `docs/GENERAL.md:10-35` (fiction disclosure and audience); `docs/INSTRUCTIONS.md:59-85` (confidentiality and authority); `website/src/content.config.ts:50-96`; `website/src/lib/wiki-query.ts`; `website/src/features/wiki/query.ts`; `website/src/lib/navigation.ts`; `website/src/pages/wiki/`; `website/src/layouts/BaseLayout.astro:44-72`; `website/src/lib/site.ts`; `website/src/lib/seo.ts`; `website/package.json`; `website/astro.config.mjs`; `website/test/wiki-index.test.mjs`.

The plan's automatic sitemap claim is false in this revision. `src/lib/releases.ts`, named by the generic skill, no longer exists; do not infer an additional release-reference gate from that historical practice. The wiki's actual code gate is `publication === 'published'`, with missing publication defaulting to draft. Human approval remains a workflow obligation. The inspected human-gate cards t_9b2a308d and t_c77be834 remain blocked without approval comments. No wiki source pages exist in this revision.

## Numbered acceptance checklist

1. PARTIAL / DEFERRED — real built `/wiki/` has one distinct nonempty title, `Wiki | Red Horizon` (18 characters), and one description (108 characters). The description is the inherited site default, not wiki-purpose copy. `/wiki/area/`, `/wiki/vehicle/`, `/wiki/project/` and all leaf pages are absent by construction, so their real-content inventory is deferred. Source review shows section titles currently use `Area wiki | Red Horizon`, `Vehicle wiki | Red Horizon`, and `Project wiki | Red Horizon`; all inherit the same default description. Leaf title/summary strings are neither length-limited nor uniqueness-validated by the schema.
2. PASS for the existing built wiki route / DEFERRED for real section and leaf pages — build explicitly ran with SITE_URL unset; zero canonical links in `/wiki/`. BaseLayout and canonicalUrl suppress canonicals when Astro.site is absent. No origin was set or inferred from an existing deployment URL.
3. FAIL / DECISION REQUIRED — no sitemap XML in dist, no @astrojs/sitemap dependency, no sitemap integration. Even `/wiki/` is therefore absent from a sitemap. Do not interpret the absence of published leaf pages as a sitemap pass. Recommend a separately reviewed, origin-gated integration once a human authorises the canonical production origin. Until then, retain omission rather than invent absolute URLs. Future sitemap validation must exclude error, verification, draft and withheld routes, not indiscriminately include every generated file.
4. PASS for `/wiki/` / DEFERRED for real section and leaf pages — zero application/ld+json scripts. No wiki structured-data emitter exists in the inspected templates. Continue suppression; origin approval alone does not establish eligibility for schema markup. Never emit Organization markup for the fictional programme.
5. PASS — parsed `/wiki/` has exactly one Wiki anchor in the header and exactly one in the footer, both `/wiki/`. The 16-test wiki suite also passes its navigation checks. No nav change recommended. Parent's 320px gutter observation was not independently remeasured; it reported no horizontal scroll and is not grounds for changing nav in this SEO card.
6. PASS for existing index links / DEFERRED for published leaf cross-links — read-only HTML audit checked 10 internal anchor occurrences from `/wiki/`, including fragment destinations; zero missing files or fragments. No leaf content exists, so a real leaf-to-news or leaf-to-wiki check cannot pass yet. `selectRelatedWiki` resolves IDs against the published selection, but handwritten MDX links are not protected by that helper. Recheck both at first release.
7. PASS — this package distinguishes the real build, fixture tests and deferred content checks. Non-vacuity exception in the card is invoked: zero actual published wiki leaf pages. Fixture controls are regression evidence, not canon or substitute published content.

## Validation executed

All commands ran in `.worktrees/t_b2c55032/website` unless noted.

| Command                                                                                          | Observed result                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm ci --no-audit --no-fund`                                                                    | Exit 0; 431 packages installed. npm reported deprecated ESLint and unapproved install-script warnings; no install-script approval was changed.                                 |
| `env -u SITE_URL npm run build`                                                                  | Exit 0; 7 Astro pages generated; postbuild check-dist passed, no withheld file/marker or directory reference. Wiki root only; expected missing/empty wiki collection warnings. |
| `env -u SITE_URL npm run test -- test/wiki-index.test.mjs`                                       | Exit 0; 16/16 tests, including isolated published/draft fixture controls.                                                                                                      |
| `env -u SITE_URL npm test`                                                                       | Exit 0; 10 files, 111/111 tests.                                                                                                                                               |
| `python3 .agents/work/seo/wiki-audit.py .worktrees/t_b2c55032/website/dist` from repository root | Exit 0; 1 wiki route, 10 internal anchor occurrences, 0 broken links, 0 canonical links, 0 JSON-LD scripts, 0 sitemaps; measured all proposed strings below.                   |
| `git status --short` in audit worktree                                                           | Empty after build and tests.                                                                                                                                                   |

No code changed, so no new implementation lint/typecheck claim is made. `wiki-audit.py` is a read-only package tool, not a build guard: it inventories defects rather than failing the build on every finding.

## Recommendation set (not applied)

One reader intent for the root: find the published reference material for the fictional Red Horizon project. Primary query/theme: Red Horizon wiki. Root describes purpose, not present completeness; it must not promise dossiers that do not yet exist.

Exact strings are also recorded in `wiki-strings.json`, counted by `wiki-audit.py`:

| Route            | Proposed title               | Title length | Proposed description                                                                                 | Description length |
| ---------------- | ---------------------------- | ------------ | ---------------------------------------------------------------------------------------------------- | ------------------ |
| `/wiki/`         | Wiki \| Red Horizon          | 18           | Reference pages for Red Horizon, a fictional Mars exploration project.                               | 70                 |
| `/wiki/area/`    | Landing Zones \| Red Horizon | 27           | Published reference pages about landing zones in the fictional Red Horizon Mars exploration project. | 100                |
| `/wiki/vehicle/` | Vehicles \| Red Horizon      | 22           | Published reference pages about vehicles in the fictional Red Horizon Mars exploration project.      | 95                 |
| `/wiki/project/` | Project \| Red Horizon       | 21           | Published reference pages about the fictional Red Horizon Mars exploration project.                  | 83                 |

Section intents/themes: find landing-zone references; find vehicle references; find project references, respectively. These generic taxonomy terms come from the commissioned plan, not hidden mission facts. Landing Zones is the recommended plain-language label, subject to the card's human label settlement. Vehicles is preferable to a singular category label; Project retains the commissioned term. Reject `Area wiki`, `Vehicle wiki`, `Project wiki` as less readable than descriptive category names; do not change section URL keys. Recommendation supersedes those three implemented title formulas only AFTER review; the root title survives unchanged. Do not claim these changes are already approved or shipped.

All four proposed descriptions replace the inherited value:
`Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface.`
Revert for any applied index description: remove its explicit description prop to restore that default. Revert for section labels: restore `wikiSectionLabel`'s capitalised section value and `{Label} wiki | Red Horizon` title formula. No prior wiki SEO package naming these routes was found in `.agents/work/seo/`.

Slug convention: retain `/wiki/[section]/[content-id]/`, trailing slash, section keys `area`, `vehicle`, `project`, no slug frontmatter. Recommend flat lowercase hyphenated content filenames; do not invent first-page IDs or rename dossiers. The loader accepts nested paths but the leaf route is `[slug]`, so nested authoring is not a validated convention in this pass.

Headings: root H1 Wiki; H2 category labels only for populated sections. Section H1 matches its approved label. Leaf H1 is the approved page title; body begins at H2 and uses H3 only beneath H2. No prose outline or subject-specific headings invented for unwritten pages.

Internal links: retain News (`/news/`) and About/Method (`/about/`) as two useful, verified existing destinations via site navigation/footer; no extra root links required merely to meet a count. When published, use generated section and leaf links plus breadcrumbs to the root and containing section. A leaf may link 2–5 genuinely related released pages, including a relevant `/news/<content-id>/` only after that file exists in dist. Never add placeholder or withheld section links. Keep existing heading-group link generation.

Leaf metadata: retain `{approved title} | Red Horizon` and the approved summary. At first content review measure the full title including suffix (target <=60) and summary (<=155); confirm distinct titles across all built wiki pages. The schema currently allows empty strings and duplicate titles. Recommend a regression guard that flags blank/duplicate/overlong output. Reject silent truncation of the writer's summary: it can remove a qualification. Flag >155 characters and return for a complete, accurate one-sentence editorial replacement; never rewrite visible frontmatter without owner review. No current leaf needs truncation.

Image alt: no wiki content image exists to describe. Keep site identity imagery unchanged. Future leaf alt must describe the selected visible asset and satisfy its actual media key's plate contract; no hidden names or equipment claims, no keyword stuffing. Do not create an OG image, alt string, asset filename or media key for unwritten pages.

Brand/continuity: plain reference language is consistent with docs/GENERAL.md. Fiction disclosure is retained in each proposed description. No keyword-volume claims, agency involvement, partners, future outcomes or scenario specifics are introduced. Private timeline files were not read or copied for this pass. Build confidentiality guard passed. This working package is not public content.

## Handoff and remaining gates

Result: structural SEO recommendation phase complete; no site metadata edited, no wiki prose written, no release, commit or push. Exact public scope proposed for later approval is four index metadata pairs and consistent generic labels, only on routes generated from released content. Do not generate empty section routes to satisfy a checklist.

Next owner: editor reviews this package's wording and flags the human section-label settlement; developer then chooses implementation on a bounded follow-up card after that review and any required human approval. Planner owns the missing-sitemap/origin decision and incorporates it in first-wiki release planning. Existing human gates remain blocked, not implicitly approved. First-page workflow must repeat real-content checks 1–6 after editorial approval, including leaf summary length/uniqueness, news and wiki body links, selected image alt, canonical suppression, no JSON-LD and eventual sitemap membership. Recommend no public release based on this review alone.

Outputs: `.agents/work/seo/wiki-collection.md`, `.agents/work/seo/wiki-strings.json`, `.agents/work/seo/wiki-audit.py`. Built evidence remains at `.worktrees/t_b2c55032/website/dist/` (local, disposable). All recommendation files are uncommitted for the owning workflow to preserve.
