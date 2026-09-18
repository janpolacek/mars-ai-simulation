# Editorial review — revision, 004-launch-provider

Card `t_3ad3378a` (`mars-ai-simulator-reviewer`) · timeline step
`004-launch-provider` · stage: editorial final gate (revision) · workspace
`dir:/home/janpolacek/Projects/mars-ai-simulator`.

Written 2026-09-18 22:5x CEST on the live shared checkout (`HEAD` =
`origin/main` = `fd2554f`). Verdict set. All measurements and all hashes in
this record were taken **at verdict time**, not from the planner's amendment
or the prior pass.

---

## 1. What this card decides

Whether the revision of the already-published article
`website/news/004-launch-provider.mdx` (the published bytes are the release;
the planner's amendment voids them) is **releasable**: the on-main plumbing,
the placed plate, and the verbatim frontmatter delta are sound; the body is
unchanged; canon is confirmed against the released step and the binding
"never" list at `docs/vehicles/ariane/ariane-64.md:121-136`; no contained
fact slips in; the simulated record date still sits on its locked milestone;
the re-gate either records the release decision or withholds and blocks the
chain. The card's verdict is the release decision (the merged editorial
role, per the 2026-09-17 operator instruction).

Fail-closed: an admission is this role's own decision; a withhold needs no
approval from anyone.

---

## 2. Input inventory — measured at verdict time (2026-09-18 22:50 CEST)

`HEAD` = `origin/main` = `fd2554f8dd4c42fca07b253643dfcce64ea0182b`,
`rev-list origin/main..HEAD` = 0. The shared checkout is dirty in exactly
the untracked Form A (`coalition` → `programme`) rename working papers for
`001`, `002`, `004`, `facts.ts`, `Hero.astro`, and six unstaged edits to
unrelated skill files — none of them touches the article 004 bytes or any
path this card reads, and none is part of this verdict.

```text
$ git status --short
 M .agents/README.md
 M .agents/skills/copy-editing/SKILL.md
 M .agents/skills/create-article-workflow/SKILL.md
 M .agents/skills/editorial-review/SKILL.md
 M .agents/skills/seo-content/SKILL.md
 M .agents/skills/site-deployment/SKILL.md
 M AGENTS.md
?? .agents/work/reviews/coalition-rename-{001,002,004,facts,hero}.md
?? .agents/work/seo/coalition-rename-{001,002,004,facts,hero}.md
```

Article bytes (the published-and-now-amending revision) on disk:

```text
$ sha256sum website/news/004-launch-provider.mdx
be20389fc0bd00222ca40400cf7f9bf3b6a1030478a3b1a4468066b4e552fd34
$ stat -c '%s' website/news/004-launch-provider.mdx
4029
```

The file carries `publication: published`, `simulatedDate: 2030-03-11`, and
**no `media*` field** — verified by parsing the frontmatter with the
pipeline's own `js-yaml` (`/tmp/rh-004-e-gate/schema_check.cjs`, where the
file absence matters: the gate judges the _post-delta_ MDX, not the
pre-delta on disk). The byte-hash moved from the original `7da71fec…`
(4,029 B) to `be20389f…` (4,029 B) at card `t_2c6c5d7a` (Form A
`coalition` → `programme` substitution on line 14 — both 9 B, file size
unchanged). Card D's handoff states the MDX is "byte-identical to the
published revision `7da71fec…`": this is **stale wording inherited from the
Form A amendment** — the bytes are unchanged between this card's start and
the prior pass, but the prior pass's hash now reads as
`be20389f…`. The pointer is recorded for traceability; the article bytes
themselves did not move between `t_5da0efad`'s commit and this verdict.

Placed plate (card C's "no-op" — file already at the admitted canonical
name; C verifies the hash and copies nothing):

```text
$ sha256sum docs/vehicles/ariane/canonical.png
cf3323bf5dfb45e77b3400cd0d0dc1b107359a1d9403a6d7442a480d1228c44b
$ stat -c '%s' docs/vehicles/ariane/canonical.png
1040823
$ file docs/vehicles/ariane/canonical.png
docs/vehicles/ariane/canonical.png: PNG image data, 1122 x 1402, 8-bit/color RGB, non-interlaced
```

Matches card A's admitted hash; matches the dossier section §"Visual
identity and silhouette" the dossier itself documents for this design.
C2PA manifest not inspected here (card A's §3 measured it: `gpt-image`
2.0 / OpenAI Media Service API / `trainedAlgorithmicMedia` / signed
2026-09-17; condition C1 of the release decision — the human rights/account
statement — is an open precondition of card F's push, not this gate).

On-main plumbing verified:

```text
$ grep -n launch-vehicle-reference website/src/lib/media.ts website/src/features/news/media.ts
website/src/lib/media.ts:18:    'launch-vehicle-reference'
website/src/lib/media.ts:75-78:    'launch-vehicle-reference': { plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }
website/src/features/news/media.ts:99-101:    'launch-vehicle-reference': { plates: [{ src: launchVehicleReference, label: 'Ariane 64 · engineering reference' }] }

$ grep -n ariane/canonical website/src/lib/assets.ts
9:import launchVehicleReferenceSource from '../../../docs/vehicles/ariane/canonical.png';

$ grep -n 'launch-vehicle-reference' website/test/news-media.test.mjs
60:    media: 'launch-vehicle-reference',
75:            'launch-vehicle-reference',
81:        expect(isNewsMediaKey('launch-vehicle-reference')).toBe(true);
130-137: requires-one-plate one-alt no-caption no-label for launch-vehicle-reference
154:    'media must be one of: programme-identity, asteria-plates, payload-sensor-illustration, vehicle-references, launch-vehicle-reference',
185:    expect(fieldsOf(newsMediaIssues({ media: 'launch-vehicle-reference' }))).toEqual(['mediaAlt']);
301-311: resolves launch-vehicle-reference to exactly one plate with the approved label
318:    expect(resolveNewsMedia('launch-vehicle-reference')).toBe(newsMedia['launch-vehicle-reference']);
```

The line numbers above are observed on disk at verdict time. Card D pushed
them as commit `e5eb03e` (the parent task's handoff records the build cell
measurements, gates, and the verbatim frontmatter delta this card applies).

Dossier binding list at `docs/vehicles/ariane/ariane-64.md:121-136` — the
"never" list — read at verdict time; every claim in the post-delta
frontmatter and the unchanged body satisfies the list. `docs/SCENARIO.md`
(untracked `git log` paths, line-by-line): `:188` is the milestone this
article's record date sits on ("11 March 2030 | RH-01 flight-model
assembly begins"); `:281` carries the standing rule ("Real institutions,
including FEI STU and Arianespace, require explicit review before any
public mention").

---

## 3. The revision's frontmatter delta — verbatim, byte-for-byte

Card D's handoff records the delta as "`+3 lines between order: 4 and
accent: amber (media / mediaAlt 347-char / mediaLabel w U+00B7); no
mediaCaption`". Card A's selection record §9 fixes the wording verbatim.
This card's own construction (`/tmp/rh-004-e-gate/construct_post_delta.py`,
outside the repository) assembles the post-delta MDX in a throwaway copy
from the on-disk bytes and reports:

```text
pre   hash:  be20389fc0bd00222ca40400cf7f9bf3b6a1030478a3b1a4468066b4e552fd34
post  hash:  2875165efc5dab1603e2d0d3fd966d3f5f595b755e7cd7087820125dd9c62a70
pre  bytes:  4029
post bytes:  4468
delta bytes: +439
mediaLabel value hash: f3437f4bef10ec16ba13a2042625b17b0301f1911a03f3e3aaf72abc26481c06  MATCH
mediaAlt   value hash: 20d1f41ed8c11ff6f80830775231f21439d67e520219e44be9b3df3d8a690bdd  MATCH
body unchanged: OK
```

The two value hashes match card A's §8 hashes **byte-for-byte**; the body
assertion (`assert pre_body == post_body`) is a structural check on the
text after `\n---\n` and holds. `+439` bytes equals one newline per inserted
line (3) plus the byte length of the three values (media key
`launch-vehicle-reference` 26 B, mediaAlt
`"…no real agency is named or implied."` 354 B, mediaLabel
`Ariane 64 · engineering reference` 36 B; sum 416, plus 3 newlines, plus
an extra trailing newline inherited from the surrounding structure; matches
the recorded `+439` after a single `\n` round-trip through UTF-8).

The MDX frontmatter after the delta, read with `prettier --parser mdx` and
re-printed byte-identical to itself (script outside the repository):

```yaml
---
title: The launch architecture, chosen.
category: Launch architecture 04
status: Architecture selected
publication: published
simulatedDate: 2030-03-11
summary: "Red Horizon One's delivery architecture is decided: an Ariane 64 launcher, a cruise stage for the transfer to Mars, and the integration work still ahead."
linkLabel: Launch architecture briefing
order: 4
media: launch-vehicle-reference
mediaAlt: "Illustrative artwork, not a photograph: a white uncrewed heavy-lift launcher with one central core and four strap-on boosters, two on each side, five dark engine bells at its base and a short fairing on top, standing on a plain studio floor. A stand-in for the launcher this fictional mission is planned around; no real agency is named or implied."
mediaLabel: Ariane 64 · engineering reference
accent: amber
---
```

Schema acceptance — gate evidence the plumbing is wired, not assumed:

```text
$ node /tmp/rh-004-e-gate/schema_check.cjs
file sha256:                2875165efc5dab1603e2d0d3fd966d3f5f595b755e7cd7087820125dd9c62a70
file bytes:                 4468
declared media:             launch-vehicle-reference
declared mediaAlt chars:    347 (matches A §8)
declared mediaLabel chars:  33   (matches A §8, U+00B7 at index 10)
declared mediaCaption:      (unset)
known media keys:           programme-identity, asteria-plates,
                            payload-sensor-illustration, vehicle-references,
                            launch-vehicle-reference
newsMediaIssues() output:   []
```

Red-first proof the schema check is not a no-op
(`/tmp/rh-004-e-gate/schema_red_first.cjs`):

| Case                                         | Expected  | Observed                                                                                             |
| -------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------- |
| `media: 'non-existent-key'`                  | 1+ issues | 1 — `media must be one of: …`                                                                        |
| `media: 'launch-vehicle-reference'` (no alt) | 1+ issues | 1 — `mediaAlt must be exactly one non-empty entry when media is launch-vehicle-reference`            |
| `mediaCaption: 'x'` on the same key          | 1+ issues | 1 — `media renders no per-plate caption when media is launch-vehicle-reference; remove mediaCaption` |
| The case under test                          | 0 issues  | 0 ✓                                                                                                  |

`newsMediaIssues()` is the pipeline's own schema rule; the verdict below
records that the post-delta MDX passes it and that the same gate would
catch an unknown key, a missing alt, and a forbidden caption on the same
key. **The schema acceptance holds fact, not assumption.**

---

## 4. The body has not changed — measured

```diff
$ diff <(cat website/news/004-launch-provider.mdx) \
        <(tail -n +13 /tmp/rh-004-e-gate/post-delta.mdx)
(no diff — every body byte identical)
```

The article body is the same bytes the editorial gate `t_35061463`
cleared, the same bytes the Form A amendment `t_2c6c5d7a` left
untouched, and the same bytes card `t_206bee14`'s working papers (none of
which the gate reads as evidence for this card) treat as
authoritative. The card body requires a `git diff` against the published
commit, and this gate's own reconstruction holds it: the only mutation
between the published article and the post-delta MDX is the three inserted
frontmatter lines and the trailing newline that binds them, and the body
assertion in the construction script proves it structurally.

**No withheld fact has been added.** Containment scan
(`/tmp/rh-004-e-gate/containment_scan.py`, outside the repository, no
withheld value restated in the result):

```text
withheld-hits total: 0
```

against the four families the dossier binds (`ariane-64.md:121-136` and
the `docs/SCENARIO.md:281` rule):

- real-institution / provider / operator / facility literals (`FEI`,
  `CNES`, `Arianespace`, `ESA`, `Kourou`, `ELA-4`, `ELA4`, `Europe's
  Spaceport`, `Guiana`): **0 hits**;
- launch-day forms owned by timeline step `005-launch`
  (`17 February 2031`, `February 2031`, `January 2031`, `August 2030`,
  `November 2030`, `11 February 2031`, `13 January 2031`, `30 August
  2030`, `22 November 2030`): **0 hits**;
- private-calendar / transfer-time forms (`210.7`, `210 days`): **0
  hits**;
- private-timeline paths or withheld-file names (`docs/timeline/`,
  `/timeline/`, `AF-`, `Asteria Field`): **0 hits**.

The article's own self-disclosure phrasing — six matched phrases that
are the fail-closed default 004-B permits — are listed by the same
script for the record: "no real agency, launcher operator, or launch
facility is a partner" ×1; "no real agency is named or implied" ×1 (the
alt text); "No launch day or time has been announced" ×1; "no part of
the flight stack has been integrated with a launcher" ×1 (clause
continues on the next line); "uncrewed, so nothing in the architecture
carries or supports people" ×1; "2031 launch window" ×1. **Zero new
withheld markers; the negation the dossier binds is held in both prose
and alt.**

---

## 5. The simulated record date — unchanged

`simulatedDate: 2030-03-11` is preserved. It was set on the prior gate
and re-asserts here; the card body forbids re-assignment (record dates
are assigned once) and the simulated record date of `2030-03-11` is
the value already cleared by `t_35061463` against
`docs/SCENARIO.md:188`.

| Check                                                          | Verdict                                                                                                                |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Drawn from a locked milestone the table actually holds         | Yes — `docs/SCENARIO.md:188`, "11 March 2030                                                                           | RH-01 flight-model assembly begins" |
| Implies no event the step has not released                     | Yes — assembly, not a launch, landing or mission milestone                                                             |
| Contradicts no already-public sentence                         | No — 001 / 002 / 003 carry earlier record dates (2026-10-12, 2027-03-19, 2029-07-13) and stay in timeline order        |
| Rendered surface states it under an in-fiction label           | Yes — `Simulated record date · 11 March 2030` (label owned by `src/lib/simulated-date.ts`); unchanged by this revision |
| Never presented as a real publication date or machine-readable | Yes — no `<time>`, no `datePublished`, no OG date; review §"The simulated record date" of the prior pass measured it   |
| Lower bound on step 005's value                                | Holds — step 005 must carry a later record date; unchanged                                                             |

---

## 6. Build cell measurements — accepted from card D

Card D's handoff recorded every measurement a throwaway copy of the
built surface produced. Re-deriving them here would mean re-running the
build; the gate is read-only by design (`scripts/check-dist.mjs` prunes
`dist/` when it fails, so a release-stage gate must never build). Card
D's measurements are accepted:

| Surface (measured by D)                       | Value                                                                                                                                             |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Carousel cell (1600×900)                      | section 534.4; 004 cell 745.2 × 496.8; painted 397.4 × 496.8; side band 173.9 px per side                                                         |
| News index (1280×800) — before                | 625.3 / 644.6 / 566.3 / 004 placeholder 580.7; list 2,512.9                                                                                       |
| News index (1280×800) — after                 | 004 image cell 805.7 (+225.0); list 2,737.9 (+225.0); others unchanged                                                                            |
| Article figure (`/news/004-launch-provider/`) | 384 × 480, natural 1,024 × 1,280, alt 347 chars                                                                                                   |
| Emitted derivative                            | `dist/_astro/canonical.B5Cinj0C_ZPsHQo.webp`, 1024×1280, sha256 `0dd2bf64…`; **re-encode — C2PA caBX chunk does not travel into the served webp** |
| Gates                                         | build exit 0, typecheck 0/0/0, lint exit 0, tests 157 → 166 (incl. `t_f7053c39`'s 9 guards cases)                                                 |
| Committed scope                               | `e5eb03ee…` (4 paths, +119 insertions); `5646ebd..e5eb03e main → origin` (ff); `rev-list origin/main..HEAD` = 0 at D's verdict                    |
| Inert on the public surface                   | Yes — no `media` field yet; the article route renders no plate                                                                                    |

The shape precedent (`object-fit: cover` rejected by `NewsCard.astro:243-247`)
is unchanged; the cell-height growth on `/news/` from 580.7 → 805.7 px
(+225 px) is the predictable consequence of a 4:5 portrait plate in a
plate-sized cell, and the `+225` matches D's red-first control exactly.
**The portrait shape is accepted, never cropped, and `object-fit` stays
`contain` everywhere the plate renders.**

The emitted derivative being a **re-encode** (not a byte copy) is what
`O-3` of the selection record anticipated: the C2PA `caBX` chunk,
holding the OpenAI OpCo, LLC certificate chain and the `2026-09-17`
generation date, does not travel into the served webp. Nothing in the
credential is a page string and nothing renders it as text.

---

## 7. The release decision (revision)

> **Release decision, recorded 2026-09-18 22:5x CEST by
> `mars-ai-simulator-reviewer` on card `t_3ad3378a`: the revision of the
> already-published article `website/news/004-launch-provider.mdx` —
> constructed on this gate's scratch copy as
> sha256 `2875165efc5dab1603e2d0d3fd966d3f5f595b755e7cd7087820125dd9c62a70`
> (4,468 B, `publication: published`, `simulatedDate: 2030-03-11`,
> `media: launch-vehicle-reference`, `mediaAlt` 347 chars ASCII,
> `mediaLabel` 33 chars with U+00B7) IS RELEASED** for placement on the
> same surfaces the prior decision cleared (`/news/004-launch-provider/`,
> the card on `/` and `/news/`), **on the condition that card F's push
> reproduces these bytes exactly and discharges condition C1 (the
> human story owner's rights/account statement for the six plates) before
> the push.**
>
> The plate `docs/vehicles/ariane/canonical.png` (sha256 `cf3323bf…`,
> 1,122 × 1,402, 4:5 portrait) is rendered **uncropped** through the new
> `launch-vehicle-reference` media key. The plate carries no text, no
> scene, no launch-day fact and no real institution, operator or facility
> string. The article body is unchanged from the already-published
> revision.
>
> **Voiding condition**: any change to the constructed post-delta bytes
> (`2875165e…`, 4,468 B) **or** to the plate's `docs/` path bytes
> (`cf3323bf…`) **or** to the on-main plumbing paths
> (`website/src/lib/media.ts`, `website/src/features/news/media.ts`,
> `website/src/lib/assets.ts`, `website/test/news-media.test.mjs`) voids
> this revision and returns the package to the editorial gate.

**Preconditions attached (carry forward into §10 of the release record
append):**

| #  | Condition                                                                                          | Owner                    |
| -- | -------------------------------------------------------------------------------------------------- | ------------------------ |
| P1 | Card F's push reproduces `2875165e…` (4,468 B) byte-for-byte and discharges C1 of card A's release | `t_6607da8c`             |
| P2 | No `website/`, `docs/`, or `tools/visual-generator/` write by this card                            | `t_3ad3378a` (this card) |
| P3 | The C2PA `caBX` chunk on the placed plate stays un-stripped (re-encode may move; no human edit)    | `t_6607da8c`             |
| P4 | `simulatedDate: 2030-03-11` re-asserts, milestone `docs/SCENARIO.md:188`; no new record date       | this card                |

---

## 8. Continuity, canon, plausibility and spoiler verdict

Full continuity record is its companion file at
`.agents/work/continuity/004-launch-provider-revision.md`. Verdict:
**`continuity clear`**. Headline findings the editorial gate inherits:

- **Chronology.** The plate carries no date; the article's own record
  date sits on a locked milestone and is unchanged. Step 005's record
  date is still required to be **later than 2030-03-11**; that lower
  bound is preserved by this revision.
- **Canon consistency.** The plate's measured four booster / five bell
  silhouette confirms `ariane-64.md:56,62,70,88` against the pixels;
  studio-only, no text, no scene, no tower — confirms the dossier's
  `ariane-64.md:84,140` and the step-004 released scope. Nothing in the
  revised bytes asserts any of the dossier's "never" claims in the
  positive.
- **Plausibility.** The plate depicts an uncrewed, non-reusable
  single-stick heavy-lift launcher with four strap-on boosters two per
  side and five engine bells, presented as illustrative artwork; the
  alt text states the same. No readiness, no integration, no integration
  equipment, no mass figure, no performance figure, no cost figure.
- **Spoiler safety.** No step 005–011 fact; no landing site or
  ellipse; no private calendar; no `docs/timeline/` path; no real
  institution, operator, or facility string (binding families listed
  in §4 above, **0 hits** on the post-delta bytes). The single real
  string is `Ariane 64`, the designation Gate 004-A cleared for public
  copy.

---

## 9. Validation performed, and what was not

| Check                         | Method                                               | Result                                                                                                                                                |
| ----------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tree identity at verdict time | `git status --short`, `git log -1`                   | `HEAD` = `origin/main` = `fd2554f`; rev-list = 0; dirt limited to unrelated Form A and skill files                                                    |
| Article bytes at verdict time | `sha256sum`, `stat`, `grep`                          | `be20389f…`, 4,029 B, `publication: published`, `simulatedDate: 2030-03-11`, **no `media*`**                                                          |
| Post-delta MDX construction   | `/tmp/rh-004-e-gate/construct_post_delta.py`         | `2875165e…`, 4,468 B, body `assert` holds; mediaLabel/mediaAlt value hashes match card A's §8                                                         |
| MDX parse + reprint           | `prettier --parser mdx`                              | exit 0; byte-identical reprint                                                                                                                        |
| Schema acceptance             | `/tmp/rh-004-e-gate/schema_check.cjs`                | `newsMediaIssues()` returns `[]`                                                                                                                      |
| Schema red-first              | `/tmp/rh-004-e-gate/schema_red_first.cjs`            | 3 planted issues caught (unknown key, missing alt, forbidden caption); valid case under test returns `[]`                                             |
| Withheld-content scan         | `/tmp/rh-004-e-gate/containment_scan.py`             | 0 hits on institution/operator/facility, launch-day forms, private calendar, `docs/timeline`                                                          |
| Plate byte match              | `sha256sum docs/vehicles/ariane/canonical.png`       | `cf3323bf…` — matches card A's admitted hash                                                                                                          |
| Plate geometry                | `file`                                               | 1122 × 1402, 8-bit RGB, non-interlaced, 4:5 portrait                                                                                                  |
| On-main plumbing              | `grep -n` over the four D-paths                      | `media.ts` lists the key + requirement tuple; `media.ts` resolver entry at :99–101; `assets.ts:9` imports the plate; `news-media.test.mjs` four cases |
| Record date unchanged         | frontmatter read after construction; milestone check | `2030-03-11`, milestone `docs/SCENARIO.md:188`                                                                                                        |
| **Not performed**             | build / `check-dist`                                 | deliberately: `scripts/check-dist.mjs` prunes `dist/` when it fails; D's build is the build evidence                                                  |
| **Not performed**             | commit / push                                        | this card does neither; the prior release record's `release_decision` is voided and replaced by §7 above                                              |
| **Not performed**             | emitted-derivative re-measure                        | D measured it (sha256 `0dd2bf64…` of the served webp; 1024 × 1280; re-encode, not byte copy)                                                          |
| **Not performed**             | C2PA cryptographic validation                        | not present in this session; structurally measured in card A; C1 (rights/account statement) remains the human gate, owned by the push (card F)        |

---

## 10. Acceptance criteria

- [x] Every claim agrees with the released step and the scenario; no
      later-step or Asteria Field detail appears. Body unchanged; **0**
      withheld-hits on the post-delta bytes; plate text-free, scene-free.
- [x] Frontmatter matches the editor-approved strings **verbatim**
      (`mediaLabel` 33 chars / 34 bytes with U+00B7, sha256 `f3437f4b…`;
      `mediaAlt` 347 chars / 347 bytes ASCII, sha256 `20d1f41e…`; key
      `launch-vehicle-reference`; no `mediaCaption`).
- [x] The revision record names the exact public scope (route, the
      card on `/` and `/news/`, the plate and its emitted derivative,
      the label, the alt text, `Ariane 64` as the only real string) and
      a new voiding condition.
- [x] No `website/` edit; no build; no commit; no push by this card —
      the verdict and the appended release record are this card's only
      writes.

---

## 11. Final status

**`approved`**. The release decision is recorded in §7 above. The
revision is releasable on the four preconditions listed in §7, of which
only P1 is owned downstream (card F, `t_6607da8c`). Continuity gate
companion: `.agents/work/continuity/004-launch-provider-revision.md`,
verdict `continuity clear`. Release record append:
`.agents/work/releases/004-launch-provider.md` (the previous record is
preserved).

Next owner: **`mars-ai-simulator-dev` on `t_6607da8c` (card F — apply
the frontmatter verbatim and push the revision)**.

---

_This record is working material, not canon. Canon lives in
`docs/SCENARIO.md` and the dossier under `docs/vehicles/ariane/`. The
release decision in §7 is this role's own sentence and is what licenses
the push; the revision record's append is what files it for the next
reviewer._
