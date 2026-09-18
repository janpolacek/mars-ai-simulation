# Review: Form A programme rename — 004 launch provider

Slug: `004-launch-provider` (article `website/news/004-launch-provider.mdx`).
Card `t_2c6c5d7a` (`mars-ai-simulator-reviewer`), stage: editorial gate on the Form A wording
substitution. Mission-timeline step: `site-foundation` / published-surface revision, advances **no**
timeline step. Companion original-gate record: `.agents/work/reviews/004-launch-provider.md`
(verdict `approved` at R2, release decision at §12.5 of that file).

This is a **re-validation** of the same article after the human story owner chose Form A on
`t_8e8364e4` (2026-09-18). Form A substitutes the word `programme` for `coalition` on five
public surfaces. This record covers only the article slice (line 14). The four other surfaces
(001:77, 002:87, facts.ts:18, Hero.astro:12) live behind their own cards.

## Review metadata

| Field                | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card / stage         | `t_2c6c5d7a` — editorial gate on the Form A wording substitution. Parent SEO `t_f4b3352f` (done); child dev card `t_4da7b3eb` (`todo`, awaits this verdict)                                                                                                                                                                                                                                                                                                                                                                        |
| Package under review | `website/news/004-launch-provider.mdx` — sha256 `be20389fc0bd00222ca40400cf7f9bf3b6a1030478a3b1a4468066b4e552fd34`, 4029 B, 58 lines, `publication: published`, `simulatedDate: 2030-03-11`                                                                                                                                                                                                                                                                                                                                        |
| R3 (this pass) hash  | `be20389f…` (the on-disk state at verdict time)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| R2 release hash      | `7da71fec…` (the published tree at commit `4d1795a`, the post-publication state)                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| SEO pass recorded    | before `4ac5647b…` (pre-Form-A working state, never in git), after `be20389f…` — this gate re-hashes and matches the SEO's "after"                                                                                                                                                                                                                                                                                                                                                                                                 |
| R2–R3 delta          | exactly one replacement, both words 9 bytes: `coalition` → `programme` on line 14. Reconstructed pre-rename hash from this pass = `7da71fec…`, byte-identical to `4d1795a:website/news/004-launch-provider.mdx` (file size unchanged at 4029 B). Diff vs `origin/main`: `-decided how Red Horizon One will leave Earth. The coalition has selected +decided how Red Horizon One will leave Earth. The programme has selected` (one line)                                                                                           |
| Evidence boundary    | HEAD = origin/main = `1d6adff` at verdict time (no concurrent push during this run); article hash re-measured immediately before writing the verdict                                                                                                                                                                                                                                                                                                                                                                               |
| Record date          | unchanged at R3: `simulatedDate: 2030-03-11`, milestone `docs/SCENARIO.md:188` ("11 March 2030 — RH-01 flight-model assembly begins") — assigned at the original R2 gate, not reassigned here                                                                                                                                                                                                                                                                                                                                      |
| Release decision     | **RELEASED at R2** — `.agents/work/reviews/004-launch-provider.md` §12.5 carries the decision sentence and the exact public scope for this article. R3 does not re-decide release: the article is already public, and the Form A rename is a wording change inside a published surface. The renamed bytes **may** ship when the dev card `t_4da7b3eb` lands in the serialised 001 → 002 → 004 → facts → hero publication order set by the planner (`t_8e8364e4` completed handoff). The rename itself is **approved** by this gate |
| Verdict              | **`approved`** — one authorised Form A substitution; no other change                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Status               | **`approved`** → `kanban_complete`, which releases dev card `t_4da7b3eb`. No corrective card. No new release decision (the article is already public)                                                                                                                                                                                                                                                                                                                                                                              |

## 1. Scope of the gate

Per the card body, this gate verifies:

1. Exactly one approved Form A wording substitution is present in the article.
2. Launch architecture facts and the simulated record date are preserved verbatim.
3. Released canon still holds.
4. No `docs/timeline/` or later-step material is introduced.
5. No images or visual change.

The original R2 gate (`t_35061463`) already passed every other axis: voice, citations, links,
spoiler safety, asset provenance, chronology, canon fidelity, plausibility. R3 is scoped to the
delta only; the carried-over rows are named in §3.

## 2. The wording substitution — verified

`grep -n -i "coalition" website/news/004-launch-provider.mdx` → no matches (zero instances remain
in the article). `grep -c "programme" website/news/004-launch-provider.mdx` → 8 instances,
consistent with the SEO measurement (lines 13, 14, 24, 39, 48, 48, 52, 55, including the closing
disclaimer). Line 14, the only line touched, reads in full:

> `decided how Red Horizon One will leave Earth. The programme has selected a delivery architecture`

The substitution follows the parallel construction already used in article 002 (`002:21` "The
programme has now agreed a payload scope for Red Horizon One"). The noun is the same body of
work — Red Horizon as a programme — which is also what `steps.ts:33` reads after the round-3
roadmap rename ("Programme and purpose").

## 3. Carried-over rows from the R2 gate

Every claim row and every containment item from `.agents/work/reviews/004-launch-provider.md`
stands on a byte-delta proof: the only bytes that moved between R2 (`7da71fec…`) and R3
(`be20389f…`) are the seven characters in `coalition` → `programme` on line 14. The rows below
are the load-bearing ones; the rest of R2 carries on the same proof.

| R2 row                                                                                                                      | Status at R3 | Reason                                                          |
| --------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------- |
| Voice (Red Horizon: informed, composed, candid, specific, modest)                                                           | carries      | unchanged text                                                  |
| Citations and source-pack (Ariane 64 designation real; partner-institution disclaimer real; mission facts canonical)        | carries      | unchanged text                                                  |
| Internal links (3: `/#mission`, `/news/003-vehicle-design/`, `/news/001-project-announcement/`)                             | carries      | SEO verified; measured again on disk: all three anchors present |
| Metadata and schema (`title` 32 chars, `summary` 153 chars, `linkLabel`, `order: 4`, `accent: amber`, `category`, `status`) | carries      | SEO verified; measured again on disk: identical                 |
| `simulatedDate: 2030-03-11` from `docs/SCENARIO.md:188`                                                                     | carries      | unchanged frontmatter                                           |
| `publication: published` (already public)                                                                                   | carries      | unchanged frontmatter                                           |
| Spoiler safety (no launch day, no landing site, no partner institutions named)                                              | carries      | the Form A rename touches no claim about a withheld fact        |
| Chronology / canon fidelity / plausibility                                                                                  | carries      | see §4                                                          |
| Asset provenance / image placement / alt text                                                                               | n/a at R3    | no image, no alt, no caption change; existing assets untouched  |

## 4. Continuity check (run inline — no separate file)

Per the editorial-review skill: a separate `.agents/work/continuity/coalition-rename-004.md` is
not warranted because the rename is a wording-only change on an already-public article, and a
fresh continuity file would restate the R2 record's `continuity clear` verdict on a change that
cannot affect any of its four axes. The check below is run inline so the verdict is auditable
on this card.

- **Chronology** — the rename introduces no date, order, or sequence. The Form A decision is a
  published-surface wording change that lives outside the mission timeline.
- **Canon consistency** — the published canon (001–004, the wiki, `docs/SCENARIO.md`,
  `docs/area/AREA.md`, `docs/vehicles/pathfinder/VEHICLE.md`) still holds. The article now reads
  `programme` in the same noun-class position as `001`, `002`, `003`, the panel, the mission
  facts panel, and the homepage hero. Article 002 line 87 ("The Red Horizon programme is ten
  partner groups") is the same Form A substitution applied in the parallel lane; consistency
  with it is what the rename is for.
- **Plausibility** — "The programme has selected a delivery architecture" reads as the same
  organisation picking the same launch architecture that the rest of the article describes. No
  voice or register drift.
- **Spoiler safety** — no new withheld fact enters the public surface. No launch day, no
  landing site, no real partner institution, no later-step designation.

**Verdict: `continuity clear` at R3.** Carries the R2 verdict on a byte-delta proof.

## 5. Confidentiality check

- No `docs/timeline/` content was read into this gate's verdict. The renamed article contains no
  unreleased material.
- No real partner institution is named in the article beyond the launcher designation
  (`Ariane 64`), which 004-Gate B cleared for the original publication. The disclaimer block
  (lines 55–57) is unchanged and explicit.
- No later-step designation (RH-02 / Asteria Field / 005 / 006 / etc.) is introduced.
- The rename does not enter any asset, alt text, caption, link target, or commit message — only
  the article body, and only on the one authorised line.

## 6. Validation

- `git status` at verdict time: 5 modified (the five Form A surfaces, all part of the parent
  graph), 4 untracked working-paper artefacts, no surprises.
- HEAD = origin/main = `1d6adff`. No concurrent push during this run; no `git worktree` to
  re-check.
- `git diff origin/main -- website/news/004-launch-provider.mdx` shows exactly one hunk, one
  line: `coalition` → `programme` on the article's line 14 (unified-diff numbering: line 12 of
  the hunk, since the hunk starts at line 11).
- `sha256sum website/news/004-launch-provider.mdx` = `be20389fc0bd00222ca40400cf7f9bf3b6a1030478a3b1a4468066b4e552fd34` (4,029 B).
- Reconstruction: byte-replace `programme` → `coalition` on line 14 of the on-disk file
  produces a hash identical to the published-tree bytes (`7da71fec…`, the blob in commit
  `4d1795a`). File size is unchanged because the two words are both 9 bytes.
- The SEO record (`.agents/work/seo/coalition-rename-004.md`) matches the on-disk state on
  every check.
- No commit, push, deploy, or `website/` write performed by this card.
- No image, asset, alt text, caption, or media key touched.

## 7. Findings

| #  | Check                                                                                            | Verdict | Evidence                                                                                                        |
| -- | ------------------------------------------------------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------- |
| 1  | Exactly one approved Form A wording substitution present                                         | PASS    | §2                                                                                                              |
| 2  | Launch architecture facts preserved verbatim                                                     | PASS    | reconstructed pre-rename hash equals the published-tree bytes §3, §6                                            |
| 3  | Simulated record date preserved                                                                  | PASS    | `simulatedDate: 2030-03-11` unchanged; milestone line `docs/SCENARIO.md:188` was assigned at R2 and still binds |
| 4  | `publication` status preserved                                                                   | PASS    | `publication: published` unchanged                                                                              |
| 5  | Internal links preserved                                                                         | PASS    | 3 links, all unchanged; SEO verified                                                                            |
| 6  | Metadata and schema preserved                                                                    | PASS    | title, summary, slug, linkLabel, order, accent, category, status all unchanged; SEO verified                    |
| 7  | No `docs/timeline/` or later-step material introduced                                            | PASS    | §4 spoiler safety; §5 confidentiality                                                                           |
| 8  | Continuity check (chronology / canon / plausibility / spoiler)                                   | PASS    | §4 — `continuity clear` at R3                                                                                   |
| 9  | Confidentiality (no real partner institution, no withheld fact, no asset / alt / caption change) | PASS    | §5                                                                                                              |
| 10 | No image or visual change                                                                        | PASS    | no image / alt / caption / asset touched; explicitly out of scope per the card body                             |
| 11 | Article hash matches SEO's "after" record                                                        | PASS    | §6 — `be20389f…`                                                                                                |
| 12 | No commit / push / deploy performed by this card                                                 | PASS    | gate is read-only; dev card `t_4da7b3eb` owns the commit                                                        |

**Final status: `approved`.** One authorised Form A substitution, no other change, no new canon,
no new release decision (the article was already released at R2).

## 8. Release decision

**R3 does not re-decide release.** This article was released at R2 (`.agents/work/reviews/004-launch-provider.md`
§12.5, build card `t_de6e9055`, commit `4d1795a`). The Form A rename is a wording change inside a
published surface; the rename is itself approved by this gate, and the renamed bytes **may** ship
when the dev card `t_4da7b3eb` lands in the serialised publication order
(001 → 002 → 004 → facts → hero) set by the planner on `t_8e8364e4`. Until `t_4da7b3eb` pushes,
the published tree still carries the pre-Form-A lead ("The coalition has selected…"); once it
pushes, the public surface carries the Form A lead. The release decision is unchanged in scope and
unchanged in sentence; what changes is one word, on one line, in one article.

The dev card must:

- Commit only the paths the card scoped (the four other Form A surfaces in the same lane push
  first, then this article) and stage this article's rename as the one hunka.
- Include the card id in the commit message (`t_4da7b3eb:` or equivalent).
- Rebase before pushing, and report the commit SHA + push result on its own card.
- Not run the build or the postbuild guard from this gate; the surface verification was already
  done in §3 of the original R2 record and on the SEO pass.

## 9. Handoff

- **Card:** `t_2c6c5d7a` (editorial gate, mission-timeline step `site-foundation`).
- **Inputs:** Form A decision on `t_8e8364e4` (worker comment, 2026-09-18 ~20:42 CEST); writer
  pass `t_7af93a3d`; SEO re-validation `t_f4b3352f` and its package
  `.agents/work/seo/coalition-rename-004.md`; the original R2 review record
  `.agents/work/reviews/004-launch-provider.md` and its continuity companion
  `.agents/work/continuity/004-launch-provider.md`. No `docs/timeline/` or later-step material
  used.
- **Output:** this file, `.agents/work/reviews/coalition-rename-004.md`. No website/ edit.
- **simulatedDate:** unchanged at R3 — `2030-03-11`, milestone
  `docs/SCENARIO.md:188` ("11 March 2030 — RH-01 flight-model assembly begins"). Recorded in the
  original R2 record §12.4 and the build card commit message; the rendered surface already
  carries it under the in-fiction label.
- **Public / canon impact:** authorised wording only. Partner names, facts, dates, institutions,
  provider designation, routes, and timeline order are unchanged. No new canon is established.
- **Confidentiality:** clean — no unreleased material in this verdict, in the article, in any
  asset / alt text / caption / link, or in the SEO record.
- **Validation completed:** §6 — article hash matches SEO's "after" record, byte-delta proof
  reconstructs the published tree exactly, internal diff vs origin/main shows one line changed.
  No commit / push / deploy performed by this card.
- **Release decision:** the article remains **RELEASED at R2**; the rename is **approved** by this
  gate and may ship when the dev card `t_4da7b3eb` lands in the serialised publication order.
  No second, divergent flip is created.
- **Next owner:** `mars-ai-simulator-dev` — dev card `t_4da7b3eb` applies the rename in the
  serialised 001 → 002 → 004 → facts → hero order, then commits and pushes. The article path
  is a hotspot for the dev lane; coordinate with the four sibling rename cards.
