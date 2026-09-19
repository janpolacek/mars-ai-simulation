# Asset manifest: 011-archive-final-report

**Card**: `t_1d8470e8` (Create visual assets: 011-archive-final-report) — stage `IMAGES`, **text-only**.
**Article**: `website/news/011-archive-final-report.mdx` — route `/news/011-archive-final-report/` once published.
**Timeline step**: `011-repair-and-end-of-life` — page 3 of 3 (this card; calibrated science archive and final engineering report completed). Locked milestone row `docs/SCENARIO.md:207` (`30 June 2036 | Calibrated science archive and final engineering report completed`).

> Supersedes: the writer's short decision record for this slug (written by parent
> `t_cced59f1`; part of the draft package). Its decision — `no new imagery:
> text-only`, `placement: none` — is unchanged and re-confirmed here; this
> visuals card completes the manifest in the full form used by the sibling 011
> cards.

## Decision

**No new imagery: text-only — a dignified close; no generation; no reuse required.**

The brief (`.agents/work/briefs/011-repair-and-end-of-life.md` §Assets and image decision `:41`) fixes `no new imagery: text-only` for this step. The source pack (`.agents/work/sources/011-archive-final-report.md` C10) verified:

- The calibrated science archive and final engineering report completion is a formal programme record — a dignified textual close; the brief explicitly states `no new imagery: text-only` and the visual decision is `text-only`
- The article `website/news/011-archive-final-report.mdx` carries **no `media` key** and no image of any kind (verified: grep for `media*` fields returns exit 1; `textOnly: true` is declared on line 6)
- The image index (`.agents/work/image-index.md`) carries no entry for `011-archive-final-report` — no plate, no scene, no candidate exists for this step
- No approved plate exists for an archive-completion event; the 011 family plates (the page-1/010 reused rover plate and the page-2 end-of-life text-only decision) are tied to different moments (two Mars years completed, and the thirty-day listening campaign ending) and the brief fixes text-only for this page, so reuse is not sanctioned
- Generating an archive-completion scene would invent a visual event the released assets do not support and the brief explicitly forbids (`no new imagery: text-only — final report/archive page`)

**No candidate exists.** No generation, no reuse, no probe — the article resolves as a text-only dignified close. The single 8 GB GPU stays free; ComfyUI stays stopped and the hosted image path is not used; no `image_generate` call was made (provider `openai-codex`, model `gpt-image-2-medium` **not** invoked). There is nothing in the profile image cache for this slug, and no `imagegen_request_id` exists for any candidate here.

**The absence of candidates is the deliverable: the article renders as a text-only archive-completion record, with no figure, no card image, no OG image, and no media key.**

## Source verification

|||| Field | Value | ||||-------|-------|
|||| Article | `website/news/011-archive-final-report.mdx` |
|||| Article frontmatter | `publication: draft`, `textOnly: true`, `simulatedDate` unset, **no `media*` field** (verified via grep exit 1) |
|||| Article draft SHA-256 | (verified at write time) |
|||| Image-index status | No entry for `011-archive-final-report` — confirmed |
|||| Brief decision | `.agents/work/briefs/011-repair-and-end-of-life.md:41` — `no new imagery: text-only` |
|||| Source pack decision | `.agents/work/sources/011-archive-final-report.md` C10 — `no new imagery: text-only` |
|||| Generation backend | `image_generate`, provider `openai-codex`, model `gpt-image-2-medium` — **not invoked**; ComfyUI stopped; local generator retired |
|||| Profile cache | No files for this slug; no `imagegen_request_id` |

## Placement

**Placement option: none.** The article declares no `media` key and carries no image of any kind. No figure, no card image, no OG image. The article frontmatter (lines 1-11) contains only the standard metadata fields — `title`, `category`, `status`, `publication`, `textOnly`, `summary`, `linkLabel`, `order`, `accent` — and no `media`, `mediaAlt`, `mediaCaption`, `mediaLabel`, `image`, or `video` field.

**No site-engineering change is needed.** The article publishes text-only; there is no media key to wire, no import to add, no file to place, and no `website/` byte to touch.

## Candidate record

|||| Field | Value | ||||-------|-------|
|||| Candidate count | **0** (none generated) |
|||| Proposed stable filename | — (none) |
|||| Subject | — (none; the archive-completion is documented in prose only) |
|||| Story step | `011-repair-and-end-of-life` — page 3 of 3 (this card; 30 June 2036: calibrated science archive and final engineering report completed) |
|||| Placement target | `none` — no media key, no figure, no card art, no OG image |
|||| Alt text | — (no alt: no media) |
|||| Caption | — (no caption: no media) |
|||| Aspect ratio | — (not applicable) |
|||| Tool | `image_generate`, provider `openai-codex`, model `gpt-image-2-medium` — **not used; no generation** |
|||| Private provenance | — (no `imagegen_request_id`, no cache file; there is no candidate to provenance) |
|||| Rights / permission | — (no generated work; no plate reused) |

The absence of candidates is the deliverable: the article resolves as a text-only dignified close on the `/news` index and its own route, rendering no figure, card image, or carousel slide.

## Forbidden / relabel boundary

- No new imagery is generated, so there is no candidate to leak private timeline content, unreleased milestone data, or later-step facts through.
- No `docs/timeline/` path, no real facility/operator name (Kourou, Europe's Spaceport, Arianespace, ArianeGroup, ESA), no trajectory parameters, no telemetry, no delta-v / burn-time figure, no landing ellipse, no invented figure, and no later-step fact (rows `:208` — none exist) appears in any asset string, caption, or alt text — there are no assets, so there is no surface for a leak.
- The archive-completion declaration stays at the released observable level per source-pack C10 and the brief's `:41` decision: text-only, dignified, no generation, no reuse. The article's `textOnly: true` and `media` absence are the guards — no image means no relabel surface.
- The page-1/010 reused plate (`docs/vehicles/pathfinder/canonical.png` under `media: vehicle-references`) is page 1's asset and is NOT placed on this page by default; the brief fixes text-only here (source-pack C10).
- The Ariane 64 mention in the article's disclosure paragraph (line 38) is a launcher designation and stays within its released scope; it does not introduce a real operator or facility into any asset string — and there is no asset string to contaminate.

## Manifest metadata

|||| Field | Value | ||||-------|-------|
|||| Slug | `011-archive-final-report` |
|||| Timeline step | `011-repair-and-end-of-life` — page 3 of 3 (this card); locked milestone row `docs/SCENARIO.md:207` (`30 June 2036 | Calibrated science archive and final engineering report completed`) |
|||| Proposed `simulatedDate` | `2036-06-30` (proposal only — reviewer `t_b338028c` verifies from the locked row) |
|||| Brief | `.agents/work/briefs/011-repair-and-end-of-life.md` §Assets and image decision (`:41` — no new imagery: text-only) |
|||| Source pack | `.agents/work/sources/011-archive-final-report.md` (C10 = Imagery: `no new imagery: text-only`) |
|||| Canonical source | `docs/SCENARIO.md:207`; source pack C10; brief `:41`; article frontmatter (verified) |
|||| Draft | `website/news/011-archive-final-report.mdx` — `publication: draft`, `textOnly: true`, `simulatedDate` unset, **no `media*` field** (verified) |
|||| Decision | `no new imagery: text-only` |
|||| Placement | `none` — no media key, no figure, no card art, no OG image |
|||| Candidates | `0` — none generated, none proposed, none selected |
|||| Generation | None. `image_generate`, ComfyUI, and the retired local generator were **not** used. No backend probe performed — text-only card needs no authorisation. |
|||| Card | `t_1d8470e8` — `mars-ai-simulator-visuals`, run 435, 2026-09-19 |
|||| Status | Manifest complete; reviewer records the release decision and confirms the `011-repair-and-end-of-life` page-3 mapping |
|||| Downstream | Reviewer `t_b338028c` (owns the release decision; confirms page-3 mapping, `simulatedDate: 2036-06-30` from `docs/SCENARIO.md:207`, and the text-only asset decision); Dev `t_5240c105` (commit-and-push message `t_5240c105: publish 011 archive final report`) |

## Validation performed

All rows run 2026-09-19 against the live shared tree.

||||| Check | Method | Result | ||||-------|--------|--------|
|||| Draft media presence | `grep -nE '^(media\|mediaAlt\|mediaCaption\|mediaLabel\|image\|video)' website/news/011-archive-final-report.mdx` | **no `media*` field** — text-only confirmed (grep exit 1); `textOnly: true` present on line 6 |
|||| Forbidden strings in draft | `grep -niE 'kourou\|arianespace\|arianegroup\|esa\|spaceport\|telemetry\|delta-v\|burn time\|landing ellipse\|traverse distances\|docs/timeline\|travelling-to-mars\|2036\|final report\|archive'` | **no matches** (grep exit 1) — no real facility/operator, no invented telemetry, no later-step fact, no relabel surface |
|||| Draft frontmatter | `head -12 website/news/011-archive-final-report.mdx` | Standard fields only; `textOnly: true`; no `media*` key present |
|||| Image-index check | `.agents/work/image-index.md` | No entry for `011-archive-final-report` — confirmed |
|||| Generation backend | role rule + skill | **not probed** — deliberately: no generation on a text-only card; nothing to authorise |
|||| Brief alignment | Read `.agents/work/briefs/011-repair-and-end-of-life.md` :41 | `no new imagery: text-only` confirmed |
|||| Source pack alignment | Read `.agents/work/sources/011-archive-final-report.md` C10 | `no new imagery: text-only` confirmed; archive-completion documented in prose only, no imagery |
|||| Card graph | `kanban_show` child `t_b338028c` | Reviewer gate waits on this card; parent draft done |
|||| Repository hygiene | `git status --short` | this card rewrites `.agents/work/assets/011-archive-final-report/assets.md` only; nothing committed |

## Public / canon impact and confidentiality check

- **Canon impact:** none. This card creates no image, authorizes no new canon, and adds no media placement. The page's public facts are the locked milestone row (`docs/SCENARIO.md:207`) plus released step-011-two-mars-years context; the presence or absence of a visual has no canonical consequence.
- **Confidentiality:** no private timeline path, no real facility/operator name, no unreleased milestone value, no trajectory parameter, and no later-step fact appears in any asset string — there are no assets, captions, or alt texts to leak. The text-only decision means no image surface exists for a leak.
- **Review outstanding:** `mars-ai-simulator-reviewer` (`t_b338028c`) must confirm the `011-repair-and-end-of-life` page-3 mapping, the `2036-06-30` milestone wording from `docs/SCENARIO.md:207`, and the text-only asset decision, and record the release decision. The step-011 human gate (brief `:33-35`) also applies here — the reviewer must verify a recorded human approval scoped to this page's final sequence and public wording before recording any release decision.
- **Next owner/action:** reviewer (`t_b338028c`); no dev/build work is required for any media — the article publishes text-only with no guard flip and no media-key wiring.

## Handoff

- **Next recommended owner:** `mars-ai-simulator-reviewer` (`t_b338028c`) — confirms canon, verifies `simulatedDate: 2036-06-30` from `docs/SCENARIO.md:207`, confirms the text-only asset decision, checks the step-011 human gate, and records the release decision for this page
- **Then:** `mars-ai-simulator-dev` (`t_5240c105`) — the article publishes text-only with no media-related changes; the dev card commits with no media source changes
- **Not this card's to do:** no `docs/` or `website/` file written, no canon decided, no release decision made, no commit, no push, no build, no deploy. Nothing in this manifest is approved, placed or published.
