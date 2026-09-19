# Review: 009-egress

Card: t_f3dd8fd2 (Editorial final gate: 009-egress)
Reviewer: mars-ai-simulator-reviewer
Date: 2026-09-19 (session), run 369

## Inputs verified

| Input            | Path                                                                                                                                                                                                                                  | Hash / status                                                                                                                                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Draft            | `website/news/009-egress.mdx`                                                                                                                                                                                                         | sha256 `dfc63f511d1b8c8c2e1f40ba46c170d2404e9e36a24abd10b947d3e66b2ad7cd`, 3,357 B, 31 lines, `publication: draft`, `simulatedDate: 2031-09-23` (reviewer-assigned in this gate; pre-edit writer hash `14c1a6ca…` from the writer card metadata) |
| Source pack      | `.agents/work/sources/009-egress.md`                                                                                                                                                                                                  | sha256 `debb5777f07dd825f9559733fe00deaff5a031df5db5261e922335b017de33e2`; claims C1–C12 supported/bounded; C4/C5/C7 first-public-wording flags and C11 imagery decision reviewed in this gate                                                   |
| Asset manifest   | `.agents/work/assets/009-egress/assets.md`                                                                                                                                                                                            | sha256 `af14baa888e57d455a3fba6bafe2d40b5164ba76bbc3b63475ea1235536650ad`; one candidate (01-egress_00003_) with provenance; its "ramp visible" continuity claim is NOT pixel-supported — see §Image finding                                     |
| Brief            | `.agents/work/briefs/009-first-surface-checks.md`                                                                                                                                                                                     | row 10 fixes the milestone and the proposed `simulatedDate`; §Assets line 36 fixes the egress image scene (rover descending on the ramps, no drive/sample action)                                                                                |
| Timeline step    | `docs/timeline/009-first-surface-checks.md`                                                                                                                                                                                           | continuity control only; no symptom listed for this page; movement tests belong to page 3                                                                                                                                                        |
| Scenario         | `docs/SCENARIO.md`                                                                                                                                                                                                                    | sha256 ``99206373bbb6140bac1202dc6cc5e80c6315bec649e49e223b61f305b636bc54``; row ``:199`` = `23 September 2031                                                                                                                                   | RH-01 egress from the landing platform` (re-verified at verdict time) |
| Released context | `website/news/008-landing.mdx`, `009-health-packet-panorama.mdx`, `004-launch-provider.mdx`, `003-vehicle-design.mdx`, `005-launch.mdx`, `website/wiki/asteria-field.mdx`, `rh-01-pathfinder.mdx`, `ariane-64.mdx`, `red-horizon.mdx` | line citations verified against current bytes; all four wiki sections resolve                                                                                                                                                                    |
| Content schema   | `website/src/content.config.ts:23, :45, :60-63`                                                                                                                                                                                       | `publication` defaults to `draft`; `simulatedDate` optional, pattern/date union accepted; no undeclared key in the draft                                                                                                                         |
| Surface          | `website/src/features/news/ArticleView.astro`, `NewsCard.astro`, `src/lib/simulated-date.ts`, `src/lib/seo.ts`, `website/dist/` (read-only)                                                                                           | date renders as `Simulated record date · 23 September 2031`; seo.ts keeps the simulated date off every meta surface; no `/news/009-egress/` route in the draft state                                                                             |

## Simulated record date

**`simulatedDate: 2031-09-23`** — drawn from the locked milestone row
`docs/SCENARIO.md:199`:

> `23 September 2031 | RH-01 egress from the landing platform`

The row is exactly the milestone this step releases, so the record date is the row's own
calendar day — the date, inside the fiction, on which the article is written.

Checks against the value before applying it:

- **Implies no event this step has not released** — the date IS the step's event (egress from the landing platform).
- **Cannot be read as a launch / landing / other withheld mission date** — it is the egress row; landing (`:197`, 16 Sep) is already released by 008, and rows `:200+` are not implicated.
- **Contradicts no sentence already public** — p1's open question and close-out ("Later surface milestones belong to subsequent updates that have not yet been released") hold on 23 Sep; this article is the second of those updates. p1's "before any movement" frame is resolved only at the movement-testing level, not contradicted.
- **Articles stay in timeline order by their `simulatedDate`** — the released chain ends at `2031-09-17` (009-p1); `2031-09-23` follows it, and it is the lower bound for the first-drive record (`:200`, `2031-09-30`).
- **Schema accepts the value** — the unquoted `2031-09-23` parses as a UTC-midnight `Date`; `simulatedDatePattern` matches the date form and the schema union accepts the `Date` form; `src/lib/simulated-date.ts` normalises both to `23 September 2031`.

The published surface (built `/news/009-egress/`, after the dev card's flip) will render the
date under the in-fiction label `Simulated record date · 23 September 2031`
(`src/lib/simulated-date.ts:28, :82-85`; `ArticleView.astro:27, :109-114`;
`NewsCard.astro:54, :88`); `src/lib/seo.ts` keeps it off `datePublished`, sitemap, and every
meta surface. The dev card verifies the label on the built page.

## Review table

| #  | Check                                                             | Result              | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -- | ----------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1  | Chronology agrees with the locked milestone row                   | Pass                | Only `23 September 2031` (this step's row, `:15`, `:17`) and the day-before landing reference to 16 Sep (`:15`, released row `:197`) appear; no later-step date leaks.                                                                                                                                                                                                                                                                                                                     |
| 2  | Canon consistent with released public records                     | Pass                | Ramp/mobility outcome, relay-station role, six-wheel vocabulary, close-out sentence, and the Ariane 64 disclosure all mirror released 008/004/003/p1/wiki wording; no new mechanical or architecture fact.                                                                                                                                                                                                                                                                                 |
| 3  | Egress framed as commissioning, not discovery                     | Pass                | Whole page is the commissioning-series record (brief `:3`); outcome language at the "performed as planned" level; no discovery/repair/science result anywhere (C8, C10).                                                                                                                                                                                                                                                                                                                   |
| 4  | No drive/sample/discovery/repair fact appears                     | Pass                | Token scan clean; the only drive-family word is the brief's own negative close-out ("No drive distances have been recorded yet", `:27`); no sample, mineral, discovery, repair, diagnosis, or stratigraphy term.                                                                                                                                                                                                                                                                           |
| 5  | Commissioning order within the 009 series is correct              | Pass                | Health packet + panorama (17 Sep) precedes egress (23 Sep) and first drive (30 Sep) per the brief table (`:9-11`); this page reports zero movement outcome and keeps the released close-out.                                                                                                                                                                                                                                                                                               |
| 6  | Landing geometry stays name-only                                  | Pass                | No ellipse, P0, science zone, hazard, traverse, or AF-* identifier in prose, frontmatter, links, or any approved text.                                                                                                                                                                                                                                                                                                                                                                     |
| 7  | Early-uncertainty wording is absent at the invented-symptom level | Pass                | The article mentions no landing-era concern, symptom, or diagnosis at all — the source pack's fail-closed default for this page (C9).                                                                                                                                                                                                                                                                                                                                                      |
| 8  | Internal links resolve to released public routes only             | Pass                | All 9 links resolve (`/#mission`, `/news/008-landing/`, `/news/009-health-packet-panorama/`, `/news/003-vehicle-design/`, `/wiki/vehicle/rh-01-pathfinder/`, `/wiki/vehicle/ariane-64/`, `/wiki/area/asteria-field/`, `/news/005-launch/`, `/wiki/project/red-horizon/`); no working-paper or `docs/timeline/` link; the `/wiki/asteria-field/` short-link anomaly is not copied.                                                                                                          |
| 9  | External links policy                                             | Pass                | No external links.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 10 | Fiction disclosure present and prominent                          | Pass                | First sentence (`:15`) + final italicised paragraph (`:31`).                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 11 | Ariane 64 stays at the released non-endorsement level             | Pass                | `:29` and `:31` repeat the released disclosure verbatim; no new operator/agency claim.                                                                                                                                                                                                                                                                                                                                                                                                     |
| 12 | First-public-wording flags resolved                               | Pass                | `egress` (8 hits) and `measured / movement testing` (2 hits) are released by this page under the brief's own licence; `ramp(s)` upgraded to the outcome level with no count or deployment method; `drive` only in the brief's negative close-out.                                                                                                                                                                                                                                          |
| 13 | Voice / grammar / brand                                           | Pass                | Composed, candid, specific, modest Red Horizon voice; terms defined on first use; date-scoped language; two brief-internal phrasings removed by the gate (see §Reviewer-owned edits).                                                                                                                                                                                                                                                                                                      |
| 14 | Accessibility / structure                                         | Pass                | Frontmatter metadata, semantic `##` headings, short scannable paragraphs, one central update with only released context.                                                                                                                                                                                                                                                                                                                                                                   |
| 15 | Frontmatter schema                                                | Pass                | `title`, `category`, `status`, `publication: draft`, `simulatedDate: 2031-09-23`, `summary`, `linkLabel`, `order: 9`, `accent: amber` all match the schema; no `media*` field until the key lands (dev, post-corrective); no undeclared key.                                                                                                                                                                                                                                               |
| 16 | `simulatedDate` fits the milestone table                          | Pass                | `2031-09-23` is the locked row `:199` value; reviewer-assigned per the standing rule.                                                                                                                                                                                                                                                                                                                                                                                                      |
| 17 | Spoiler / confidentiality scan                                    | Pass                | No `docs/timeline/` content or paths in the article; no later-step date or milestone; no landing-design fact; no real institution/operator/agency name beyond the released non-endorsement disclosure.                                                                                                                                                                                                                                                                                     |
| 18 | Continuity verdict (separate file)                                | Pass(text)          | `.agents/work/continuity/009-egress.md` — verdict: text `continuity clear`; package `return for revision` on the image (see row 19).                                                                                                                                                                                                                                                                                                                                                       |
| 19 | Egress image provenance/rights/alt resolved                       | **FAIL (material)** | The candidate `01-egress_00003_.png` (sha256 `d0ea2595…`) fails the brief's pixel scene: no inclined ramp visible (flat deck per four vision reads + pixel measurement), rover composed mid drive-off straddling the deck edge with track marks behind it, and the manifest's alt string ("stationary on a ramp … short wheel tracks on open rocky terrain") would misdescribe the pixels. Provenance/rights for the file are recorded but the image itself is not releasable as composed. |

## Reviewer-owned edits to the draft (recorded, not silent)

1. Frontmatter: inserted `simulatedDate: 2031-09-23` (line 6) — the reviewer's own field per the standing rule.
2. Summary: `"…left its landing platform for Asteria Field…"` → `"…left its landing platform at Asteria Field…"` — the rover is already at Asteria Field (landed 16 Sep); "for" implied it was departing toward it. Purely editorial precision; 152 → 151 chars, still ≤ 155.
3. Body `:17`: `"identified as the next milestone after commissioning"` → `"identified as the next milestone in the commissioning sequence"` — egress is within the 009 commissioning series (brief `:3`, `:9-11`); "after commissioning" would have implied the commissioning phase ended, contradicting both p1 ("Commissioning continues…") and this page's own "commissioning continues". Purely editorial; no factual meaning changed.
4. Body `:27`: `"commissioning continues at the released level"` → `"commissioning continues"` — removed the brief-internal phrase "at the released level", exactly as the 009-p1 gate removed the same phrase per its review record. Purely editorial.

Net delta: writer bytes 3,391 → 3,357 B post-edit. Article hash at the moment of this
decision: `dfc63f511d1b8c8c2e1f40ba46c170d2404e9e36a24abd10b947d3e66b2ad7cd`. No other byte
of the article changed in this gate.

## Final status

**`changes_requested`.** The article text and metadata pass every review row; one material
image failure remains: the egress plate candidate does not satisfy the brief's pixel scene
(review row 19, continuity record §Image / asset decision). The gate cannot approve the
package, and the release decision is therefore withheld until a corrected candidate passes a
fresh read.

## Release decision (recorded on card t_f3dd8fd2 — withheld)

**No release decision is recorded in this pass.** The exact public scope that would be
released on approval is unchanged from the chain's plan:

- **One article**: `website/news/009-egress.mdx`, `publication: published`,
  `simulatedDate: 2031-09-23` (already applied in the reviewed bytes; the dev card flips
  `publication` in the same change).
- **One placed plate**: the corrective render to be produced by
  `mars-ai-simulator-visuals` (corrected composition: rover ON a visible inclined ramp,
  stationary, no wheel tracks behind it on the deck, no drive-away pose, six wheels,
  stowed contact arm, warm-white, 4:3, illustrative), copied by the dev card to a stable
  `docs/` path; the corrected candidate, its hash, label, and alt are to be re-verified
  cue-by-cue in the resumed gate.
- **New media key** (dev card owns the final name and code shape): egress key analogous to
  `surface-panorama`, requirement tuple `{ plateCount: 1, altCount: 1, captionCount: 0,
  requiresLabel: false }`.
- **No reuse of the p1 panorama plate is sanctioned at this pass** — the egress record
  requires an egress scene; reuse remains a fallback only if the reviewer sanctions it
  explicitly after the corrected render.

**Blocker with owner**: the egress image candidate (owner: `mars-ai-simulator-visuals`),
bounded in the corrective card created in this gate. When it completes, this review card
auto-resumes (dependency) and the gate re-verifies the corrected candidate, the alt-vs-pixels
fidelity, and then records the release decision.

## Corrective card created in this gate

- **Corrective**: bounded egress-plate re-render (`mars-ai-simulator-visuals`), with the
  approved subject, placement, references, spoiler limits, the measured pixel findings, and
  the manifest citation fix (`docs/timeline/…:117-121` → `website/wiki/rh-01-pathfinder.mdx:117-121`).
  Workspace: explicit `dir` at the repository root; created without `parents=[…]` so the
  corrective becomes the parent of this review card via `kanban_link`.
- **This review card** (`t_f3dd8fd2`) blocks with `kanban_block(kind="dependency")` until
  the corrective completes, then a fresh run re-verifies and finishes the gate.

## Next owner / action

- `mars-ai-simulator-visuals` (corrective card): produce the corrected egress plate per the
  bounded brief; write placement, alt/caption, tool, provenance, rights, and the corrected
  source citation into `.agents/work/assets/009-egress/assets.md`; report the stable
  filename, sha256, dims, and any deviation from the brief.
- `mars-ai-simulator-reviewer` (this card, resumed after the corrective): re-read the
  corrected candidate — hash, pixel measurement, vision read, alt-vs-pixels fidelity —
  then record the release decision and complete.
- `mars-ai-simulator-dev` (`t_b9751c8c`): waits on this gate; then applies the release
  decision (plate copy, key wiring, frontmatter media fields + `publication` flip), builds,
  validates the guard and preview, verifies the `Simulated record date · 23 September 2031`
  label and the plate on all four surfaces, and commits/pushes with message
  `t_b9751c8c: publish 009 egress update`.

## No public impact in this pass

- No article flip, no plate copy, no key wiring, no commit, no push. The article stays
  `publication: draft`; `website/dist/` has no `/news/009-egress/` route; `origin/main`
  remains `238bc9de` (the local-only sibling commit `8de7193d` observed mid-run does not
  move the live surface).

---

## Revision 2 — corrective re-gate (run 372, 2026-09-19)

Supersedes the run-369 verdict's material finding (review row 19) and its final status.
The article bytes this revision approves are **byte-identical** to the run-369 pass:
sha256 `dfc63f511d1b8c8c2e1f40ba46c170d2404e9e36a24abd10b947d3e66b2ad7cd` (3,357 B,
31 lines), so every text-side row (1–18) carries over unchanged; this revision re-judges
the corrected image and re-records the release decision.

### Re-verified inputs (fresh at verdict time)

| Input               | Path                                                                                                                                  | Hash / status                                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft               | `website/news/009-egress.mdx`                                                                                                         | sha256 `dfc63f51…` (unchanged), 3,357 B, 31 lines, `publication: draft`, `simulatedDate: 2031-09-23` (line 6)                                                                                     |
| Scenario            | `docs/SCENARIO.md`                                                                                                                    | sha256 `99206373bbb6140bac1202dc6cc5e80c6315bec649e49e223b61f305b636bc54` (unchanged); row `:199` = `23 September 2031 \| RH-01 egress from the landing platform`                                 |
| Corrected candidate | `/tmp/egress-gen/stories/rh-01-pathfinder/scenes/01-egress.png` and profile cache `comfyui-flux-2-klein_20260919_175100_01egress.png` | sha256 `4c3968e94f4b372698abbf1960ff335801a731ae0b0e7a94dc466711f92a5536`, 1,706,094 B, 1200×896 PNG 8-bit RGB non-interlaced — byte-identical at both paths                                      |
| Asset manifest      | `.agents/work/assets/009-egress/assets.md`                                                                                            | sha256 `a17309af…`; citation now `website/wiki/rh-01-pathfinder.mdx:117-121` (verified — lines 117–121 carry the four operating-appearance stages incl. "restrained dust and short wheel tracks") |
| Article at HEAD     | `git show HEAD:website/news/009-egress.mdx`                                                                                           | `dfc63f51…` — working tree == HEAD == the reviewed bytes                                                                                                                                          |
| git                 | HEAD `8de7193d` (local-only, ahead 1), `origin/main` `238bc9de`                                                                       | no push, no public movement; sibling commit's only `website/` file is the unflipped draft article                                                                                                 |
| Built surface       | `website/dist/` (read-only)                                                                                                           | grep for `009-egress` and `01-egress`: exit 1, no matches — draft state holds                                                                                                                     |

### Corrected candidate — re-gate (review row 19 now Pass)

**Approved: `01-egress.png`, sha256 `4c3968e9…`, 1200×896.** The corrective render
satisfies the brief's scene and every cue the rejected candidate failed:

- **Inclined ramp — Pass.** Full-frame vision read: "long, flat metal structure …
  visibly angled upward … connects the lower ground level on the left to a higher
  platform section on the right. It is definitely a diagonal slope, not a flat surface
  with a drop-off." Zoomed read: ramp's lower end rests on open rocky regolith; upper
  end sits on the raised platform block. Pixel measurement (color-neutrality probe,
  stdlib PNG decode, /tmp/egress_gate_measure4.py): the neutral ramp/deck mass runs
  diagonally — high at the right (y≈180–240, x>800) descending to mid-lower rows
  (y≈480–540, x≈540–720) — and the bright band ends by y≈360, decisively different
  from the rejected candidate's flat bright band (y≈0–360) with a sharp near-vertical
  transition at y≈336–430.
- **Stationary — Pass.** No motion blur, no dust plume; rover parked on the slope.
- **No drive-off composition — Pass.** Zoomed read: "the rover is fully on the ramp
  surface, with _no wheels touching open ground or the ramp's edge_".
- **No wheel tracks behind — Pass.** Vision (full + zoomed): no tread marks on the
  ramp between the rear wheels and the platform, only fine machining texture.
  Restricted track scan on the bright band (313 rows): **0 track-like increments**
  (the rejected candidate's track contribution is gone).
- **Six open-mesh wheels / articulated suspension — Pass.** Five wheels visible, the
  sixth occluded behind the body; standard six-wheel rocker-bogie design implied —
  consistent with released vocabulary (`rh-01-pathfinder.mdx:59-73`). Alt asserts the
  released design; pixels do not contradict it.
- **Contact arm stowed — Pass.** No arm extended; instrument cluster compact and
  stowed against the body.
- **Warm-white body / red panels / dark deck / short mast — Pass.** All confirmed by
  the vision reads.

**Alt text verified cue-by-cue against the corrected pixels — Pass.** The manifest alt
("…stationary on a clearly inclined ramp … no dust plume, no motion blur, no wheel
tracks behind the rover on the deck or ramp…") now matches what the pixels show for
every clause. Byte fidelity for the dev card:
515 bytes / 515 chars, sha256 `966de431333ec821f4bc0488a6d392c1dd0bc96bb25bb5f216c2755c1fbbd34a`.
Manifest caption (documentation, not emitted — key `captionCount: 0`): 130 B, sha256
`9f4ea52f4c88aee02705eb0991e5a9408d2a07ec4b0b38d082b45991bbf7c828`.

**Provenance/rights — Pass.** Tool (ComfyUI fallback), model, prompt ID, graph SHA
`03442138…`, history/inputs/job records, source file, cache path, and licence terms all
recorded in the manifest; no human-selected export step is claimed (the reviewer's
approval is the selection for the release scope below). The stale private path
(`docs/timeline/009-first-surface-checks.md:117-121`) is corrected to the released
source.

### Review table delta

| #  | Check                                       | Run 369                       | Run 372                                                                             |
| -- | ------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------- |
| 16 | `simulatedDate` fits the milestone table    | Pass                          | Pass — `2031-09-23`, row `:199`, unchanged                                          |
| 18 | Continuity verdict (separate file)          | Pass(text) / package revision | Pass — verdict `continuity clear` for text and package; continuity record updated   |
| 19 | Egress image provenance/rights/alt resolved | **FAIL (material)**           | **Pass** — corrected candidate approved (hash, dims, pixel + vision evidence above) |

### Final status

**`approved`.** No unresolved material failure remains. The record date stays
`2031-09-23` (line 6, `docs/SCENARIO.md:199`), assigned in run 369 and re-verified in
this revision. The release decision is recorded below.

### Release decision (recorded on card t_f3dd8fd2)

**RELEASE — approved.** Exact public scope:

- **Article**: `website/news/009-egress.mdx` — dev card flips `publication: draft →
  published` (same change carries the media fields and any formatting); `simulatedDate:
  2031-09-23` already sits at line 6 and must remain. Article hash at the moment of this
  decision: `dfc63f511d1b8c8c2e1f40ba46c170d2404e9e36a24abd10b947d3e66b2ad7cd` — the
  flipped article must reverse to exactly this hash after undoing the frontmatter
  change.
- **One placed plate**: `01-egress.png`, sha256
  `4c3968e94f4b372698abbf1960ff335801a731ae0b0e7a94dc466711f92a5536`, 1200×896 — copied
  by the dev card from the approved bytes to a stable `docs/` path (recommended
  `docs/area/asteria-field-egress-01.png`; dev owns the final stable name and path per
  the run-369 scope). No p1 panorama reuse is needed — the corrective plate is approved
  in place.
- **New media key** (dev owns final name and code shape): egress key analogous to
  `surface-panorama`, requirement tuple `{ plateCount: 1, altCount: 1, captionCount: 0,
  requiresLabel: false }`; recommended key name `egress`, recommended label
  `RH-01 Pathfinder · egress` (U+00B7 middle dot — do not normalise). Frontmatter
  `media` / `mediaAlt` (exactly one entry per the key contract; the 515-byte alt above,
  sha256 `966de431…`), optional `mediaLabel`.
- **Guard**: the rejected candidate `01-egress_00003_.png` (sha256 `d0ea2595…`) stays
  out of any served tree; dev keeps it outside approved/withheld-source sets and
  verifies the guard passes after wiring.
- **Conditions**: the built page states `Simulated record date · 23 September 2031`
  under the in-fiction label; the plate renders on detail / newsroom / homepage /
  carousel surfaces; dev verifies the live URL after push.

**The reviewer makes no commit/push in this pass.** The dev card `t_b9751c8c` owns the
flip, plate copy, guard validation, build, and push (commit message
`t_b9751c8c: publish 009 egress update`), per `AGENTS.md` (a push to `main` is the
automatic production deploy). This approval is the release decision that release card
requires before pushing — recorded here, in the continuity record, and on the card.
