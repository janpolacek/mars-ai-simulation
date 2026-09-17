# Continuity check: progress-log — the homepage progress-log wording

## Check metadata

| Field          | Value                                                                                                                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug           | `progress-log` (homepage section `#timeline`, plus one consistency string in the Mission brief panel)                                                                                  |
| Package        | Site-string deck `.agents/work/drafts/progress-log.md` (SHA-256 `9d2a14e62b7cbec6c61b1943c91fc33624e86bd6d15a66c9efc9366d8796d24e`, 374 lines) and the SEO package `.agents/work/seo/progress-log.md` (SHA-256 `ffba8b0e272a2f400fa942098c53ea4e8ada6ef70383a6dc6b7cec23e19c8331`) |
| Timeline step  | `site-foundation` — homepage chrome copy. Advances **no** timeline step. Factual bound = the published step-001 article plus `docs/SCENARIO.md` §"Continuity and release controls" |
| Card           | `t_1abe4cae` — `mars-ai-simulator-continuity` (parent `t_365846b7` SEO; child `t_bd1fd539` editorial)                                                                                    |
| Role / skill   | Continuity redactor; project skill `continuity-recheck`                                                                                                                                 |
| Checked        | 2026-09-17 09:24–09:35 CEST, against the live shared working tree, HEAD `9cefa55`                                                                                                       |
| Package state  | The proposed strings exist **only** in the deck. `website/src/features/progress/steps.ts` and `website/src/features/mission/facts.ts` still carry the old strings; nothing built, committed, deployed or approved by this card |
| Verdict        | `continuity clear` (a continuity gate only — see §11)                                                                                                                                   |

Method: read-only inspection plus scripted scans. **No build, no preview, no deploy, and no edit to
`website/`, the deck, either article, `docs/`, or the release record** by this card. Scratch checkers live at
`/tmp/t_1abe4cae/` (`scan.py`, `detail.py`, `timing.py`, `summary.py`, `control.py`, `selfhits.py`) with the
withheld-class pattern list at `/tmp/t_1abe4cae/patterns.txt` — outside the repository, so no withheld token
enters the tree.

Step 002 is named by number throughout this record; its subject vocabulary is not restated here (see §8).

## 1. Gate inputs (re-read and hashed immediately before this verdict, 09:28–09:31 CEST)

| Input | SHA-256 (working tree) | State |
| ----- | ---------------------- | ----- |
| `.agents/work/drafts/progress-log.md` (deck) | `9d2a14e62b7cbec6c61b1943c91fc33624e86bd6d15a66c9efc9366d8796d24e` | untracked; **byte-identical to the hash the SEO pass read** — the strings it approved are the strings judged here |
| `.agents/work/seo/progress-log.md` | `ffba8b0e272a2f400fa942098c53ea4e8ada6ef70383a6dc6b7cec23e19c8331` | untracked; verdict `approved as proposed` |
| `.agents/work/releases/002-…md` (step-002 release record) | `57758defe622d4e9055dbe653281b58fb90d14689d654bd44052abd822cf72b7` | untracked; status reads `blocked — human decision required` |
| `website/news/001-project-announcement.mdx` | `73c2d04734b466a8f642f342bf1ce01c5fb3b0d343f17f6b6c8e9ee8007ab5ec` | published (`publication: published`, `status: Programme announced`, `order: 1`); **same bytes the continuity re-check `t_38d86b7a` cleared** |
| `website/news/` article 2 (step 002) | `6437379171bdcc1a3929821ab14715ccfa15f9805b0f87ff9ef78ad0c7fd1b5b` | `publication: draft`; equals the hash pinned in the release record above |
| `docs/timeline/001-project-announcement.md` | `3aa1bca721348fcc9d4a2594974480528031726168fb37a0d685f8e4d038e942` | unmodified; matches the hash every 001 gate recorded |
| `docs/timeline/002-…md` | `1006eedd407cdc4daaca30840ee1a005b1aa865782cefbd4ae6d8b6bef908046` | read for the fictional present only (§2 row 2); quoted nowhere |
| `docs/SCENARIO.md` | `4cc0438bc2d08d51f91665fd08a4094ec61793476a1a7a624d0d47dc1c58602e` | unmodified during the check |
| `docs/timeline/README.md` | read | step order and continuity invariants |
| `website/src/features/progress/steps.ts` | `24de1edd91dd0b13e47e970c9a3ef1a3db97c1561e666b7e0b1d5d81b0afcee4` | **old strings still in place**; the deck's §1 table matches this file field for field |
| `website/src/features/progress/ProgressLog.astro` | `f01f771a19e8ec2f3e8e9419d77dd1d02abf7f91b616eb7c4e74dfd25fd47bbf` | renders `state` → `<p class="timeline-state">`, `title` → `<h3>`, `detail` → `<p>`; `li.is-current` marks the highlighted step |
| `website/src/features/mission/facts.ts` | `b97d2726bdca8a4d14675e8838ae6ee30fd5c725a08da16e8050318f95f495b3` | old `Current state` value in place; unchanged since the about-method gate hashed it |
| `website/src/lib/navigation.ts` | `5c487504a49f9577184b14de3697bbec5f9a798ca4bf6e6db728fbb1f24af80b` | `routes.newsArticle(slug)` returns `/news/<slug>/`; nav label `Progress` → `homeAnchor('timeline')` |
| `website/scripts/guards.mjs` | `65d31b917f99fc2779f95031768041dd159ba9ff107259072071e50624786cea` | marker list read at scan time (§8) |
| `website/dist/index.html` / `dist/news/001-project-announcement/index.html` | `1baf44fef11a5d365db869a06d203e17d8dda06442e9c33000f489b3a2192358` / `16e487acc744162171a9c2ff74e99a9368b30a12df41909148a0a5ebe6a22b9e` | last build on disk, 09:20:59 CEST; read only, never rebuilt |

**`git status --short` (09:31 CEST, shared checkout):** three untracked entries only —
`.agents/work/drafts/progress-log.md`, `.agents/work/seo/progress-log.md`, `.agents/work/releases/`.
**No file under `website/` is modified**, by this card or any other at verdict time, so every claim below
about "the current strings" is a claim about the working tree, not about an in-flight edit.

**Final re-hash before writing the verdict (09:35 CEST, `/tmp/t_1abe4cae/final.py`):** all fifteen inputs
above re-hashed and compared programmatically against the values in this table — **0 differ**, so no input
moved between the check and the label.

## 2. Check 1 — chronology against the released step

| # | Proposed element | Released evidence | Result |
| - | ---------------- | ----------------- | ------ |
| 1 | Step 1 state `Announced` | `website/news/001-project-announcement.mdx` frontmatter `status: Programme announced`; `docs/timeline/001-project-announcement.md` §"Allowed public angle": "Red Horizon may now be announced publicly" | **PASS** — the log's label is the record's own word, and the announcement is the one act step 001 released |
| 2 | `current: true` moves off step 1 to step 2 (`Mission architecture`) | 001 `:72–74` publishes the *open* technical selections as "still ahead of us"; `docs/timeline/002-…md` §"Private situation" puts the selection work in hand; `docs/timeline/README.md` orders 002 directly after 001 with prerequisite 001 | **PASS** — the log stops flagging as current a step the record has carried, and flags the work the record and canon both describe as open. No timing, no percentage, no completion is claimed |
| 3 | Step 1 title `Coalition and purpose` | 001 `:22–26` (ten teams, one lander and rover, one architecture) and `:28–32` (the purpose) | **PASS** — the vestige of an activity the record never announced is replaced by the outcome the record carries |
| 4 | Step order `Announced` → `Current progress` → `Later` | `docs/SCENARIO.md` §"Continuity and release controls": "Timeline steps 001–011 remain the release order"; `docs/timeline/README.md` table | **PASS** — three curated public entries in release order; the section does not claim to enumerate the release order, and §4 of the deck records why the list stays hand-curated |
| 5 | Eyebrow `Progress log`, title `One step at a time.`, nav label `Progress`, section id `timeline` unchanged (D3) | `ProgressLog.astro:6` (`id="timeline"`), `navigation.ts:46` | **PASS** — an unchanged anchor and label; no route or nav contract moves |

## 3. Check 2 — no step-002 or later disclosure (the load-bearing check)

**Result: PASS.** The 15 rendered string literals in deck §8 were extracted and scanned (§8 lists the
command and hit counts). Zero hits across the four markers the site's own guard exports and across 53
withheld-class patterns — the gated step's own subject vocabulary and hardware classes, the launcher and
its provider name, the landing region and planning geometry, the surface-lifetime figure, exact dates,
real institutions, budget figures and completion verbs.

**The after-002 test, string by string** (the test the card asks for explicitly, because a string that goes
stale the moment step 002 publishes is the defect this package exists to fix):

| Proposed string | True with 001 alone | Stays true after step 002 publishes | Why |
| --------------- | ------------------- | ----------------------------------- | --- |
| Eyebrow / title / description | yes | yes, with the recorded trigger honoured | The description states the section's own convention ("published steps link to the article that carries them") and the reading rule for the highlighted step. Its truth rests on the maintenance trigger in deck §6 and in the frozen file header comment; see §10 item 1 — carried, not a defect in today's strings |
| Step 1 `Announced` / `Coalition and purpose` / `Ten national programme teams, one uncrewed lander and rover, and a mission to work out how water changed an ancient equatorial landscape.` | yes (001 `:22–32`) | yes | A statement about what the announcement published; nothing in a later step can un-publish it |
| Step 1 link `Read the announcement` → `/news/001-project-announcement/` | yes | yes | The target is step 001's own article, published and emitted |
| Step 2 `Current progress` / `Mission architecture` / `Turning the announced objective into a mission: what the rover carries, who builds what, and how the mission reaches Mars.` | yes (001 `:73–74`, verbatim in substance) | yes | It names 001's own three open selections and states no answer to any of them. At least one of the three — how the mission reaches Mars — is bound by the release controls to a step later than 002, so the sentence cannot be invalidated by step 002 publishing; and it does not claim that nothing is decided, so a partly-answered selection does not make it false |
| Step 3 `Later` / `Surface operations` / `Using the rover on the surface to survey terrain and examine rocks in context.` | yes — the title is already published in this very section today, and `facts.ts` Objective already publishes "Map local terrain, examine rocks in context" | yes | Names no vehicle, no design detail, no site, no operation and no date; it asserts only that surface work lies ahead, which 001's lander-and-rover framing already carries |
| `facts.ts` `{ label: 'Current state', value: 'Mission architecture' }` | yes | yes | A state name, not a step-002 fact; it is the same claim the highlighted step makes (§6) |

Two further containment checks, both measured rather than read off:

- **No string is a step-002 sentence.** The step-2 detail is 001's own triple, and the deck's rejected
  alternative (a separate entry for the gated step's subject) is recorded in §4/§5.2 together with the reason
  its inclusion would over-state how far that step has gone.
- **No string is a step-003+ sentence.** The third entry keeps the title the section already published and
  adds no detail about the vehicle, the site, the launcher or surface work.

## 4. Check 3 — no timing or completion implication

**PASS.** Over the same 15 rendered literals: zero hits for completion verbs and temporal tokens
(`will`, `soon`, `now`, `by 20…`, `begun`, `underway`, `approved`, `final`, `%`).

- The three states are positional (`Announced` / `Current progress` / `Later`), not temporal.
- `Announced` names an act the record itself completed and published (`status: Programme announced`); it
  says nothing about the work the coalition was formed to do.
- The one year in the published record (001's launch window) is absent from every proposed string, as is
  every date token — the deck's D1 and §7 record that deliberately.
- The only two temporal tokens anywhere in deck §8 sit inside **code comments**
  (`/tmp/t_1abe4cae/timing.py` prints both source lines), not in a rendered string. Comments do not reach
  `dist/`, and the site's own guard scans `.ts` sources anyway.

## 5. Check 4 — the article link

**PASS.**

| Item | Evidence | Result |
| ---- | -------- | ------ |
| Only a published article is linked | The single `link` is on step 1; `find website/dist -name index.html` returns four routes — `/`, `/about/`, `/news/`, `/news/001-project-announcement/` — and **no step-002 route** | one link, one published target |
| The target is step 1's own article | 001 carries step 1's claims (`:22–32`) and is `publication: published` | correct coupling |
| The href is not hand-typed | Deck §8 uses `routes.newsArticle('001-project-announcement')`; `navigation.ts:13` builds `/news/<slug>/`, matching the site's `trailingSlash: 'always'` and the emitted directory route | one route definition |
| No link into the unpublished step | Searching the emitted site for the step-002 slug (the slug itself is elided here; it is recorded in the step-002 release record) with `grep -rIl <slug> website/dist/` exits 1 with **no output** on the 09:20 build — run for this verdict, not carried from the SEO pass; deck D4 limit 1 forbids the link explicitly | no dead route, no release-bypass hint |
| The anchor describes its destination out of context | `Read the announcement` — a plain action phrase naming the document type, distinct from the news card's own `Announcement summary` label | accessible and not duplicated |

## 6. Check 5 — the one out-of-section string (`facts.ts`)

**PASS.** The deck's D5 changes `mission/facts.ts`'s `Current state` value from `Coalition planning` to
`Mission architecture`.

| Test | Evidence | Result |
| ---- | -------- | ------ |
| Agrees with the log's highlighted step | The log's step 2 title is `Mission architecture`; `ProgressLog.astro` marks `current: true` with `li.is-current` | same claim, same words |
| Agrees with canon | 001 `:72–74` publishes the technical selections as "still ahead of us", and `docs/timeline/002-…md` §"Private situation" puts that selection work in hand | the value names the open work, nothing further |
| Is not a canon change | `grep -rn -i "coalition planning"` over the repository returns the phrase **only** in the site's own inherited strings (`steps.ts`, `facts.ts`), in Astro's prerender cache, and in pipeline working records — no line of `docs/` names the programme's current state | no canon line is being overwritten; the prior editorial review (`reviews/001-project-announcement.md:232–235`) already recorded the old string as a pre-existing published claim "consistent with the step-001 frame and not a failure" |
| Does not strand the phrase | After D5 the homepage still carries "coalition planning" once — in `missionIntro.description`'s range statement ("from early coalition planning to the work of its first surface vehicle"), which D5 deliberately keeps. Read as the start of the record's range, not as the current state, it does not contradict `Current state: Mission architecture` | coherent; recorded, not a defect |
| The panel's other rows are untouched | `Launch date` / `Landing date` stay `To be announced` (`facts.ts:24–25`) | out of this deck's scope; the pre-existing coherence question about them is carried in §10 item 3 |

## 7. Check 6 — brand voice and the fiction disclosure

**PASS.**

- **No real institution is named in any proposed string**, and no partner country, responsibility split,
  budget figure or schedule frame appears. `docs/SCENARIO.md` §"Continuity and release controls" requires
  explicit review before any public mention of a real institution; the strings give it nothing to review.
- The vocabulary is the record's own: "Ten national programme teams" mirrors 001 `:23` and
  `docs/SCENARIO.md`:40 ("fictional national programme teams"); "the rover", "the mission reaches Mars",
  "examine rocks in context" are already published on the same homepage.
- **The fiction disclosure survives.** Nothing in this deck touches `missionIntro.description`, which
  opens the panel immediately above the log with "A clear public record of a fictional Mars mission…", and
  the section itself renders inside the same `BaseLayout`. The proposed strings neither restate nor
  contradict the disclosure.
- **Uncertainty is stated as uncertainty.** The one sentence that touches the programme's status states what
  the record has released (an announcement) and which selections are open; the deck's §7 lists by class what
  the copy deliberately does not say, and the scan in §8 confirms none of it appears.

## 8. Gated-term scan (command and real hit counts)

Command (scratch checker outside the repository; the marker list is read from the repository at run time, so
no token is copied into any file, and the withheld-class pattern list never enters the tree):

```
python3 /tmp/t_1abe4cae/scan.py        # plus detail.py (per-class context), timing.py (comment vs string),
                                       # summary.py (per-target totals), control.py (marker positive control),
                                       # selfhits.py (this record)
```

| Target | Gated markers (4, values withheld) | Withheld-class patterns (53) |
| ------ | --------------------------------- | ---------------------------- |
| Deck §8 **rendered string literals** (15) — what the dev will transcribe | **0 hits** | **0 hits — no pattern of 53 matched** |
| Deck §8 block including code comments | 0 hits | 2 hits in 1 class: the word "now", both inside code comments (`timing.py` prints the two source lines); no rendered string |
| Deck whole file (working paper, not public) | 0 hits | 34 hits in 2 classes: 20 uses of the gated step's vocabulary in the paper's own prose (§2.2, §7, the rejected alternatives) and 14 ordinary English temporal words |
| Built homepage `website/dist/index.html` (09:20 build) | 0 hits | 9 hits in 3 classes: one already-published step-001 plate filename, the published launch-window year, ordinary temporal words |
| Published `001-project-announcement.mdx` (**positive control**) | 0 hits | 22 hits in 7 classes — the released region name, planning envelope, surface-lifetime figure, budget frame, launch-window year and cited real-world institutions |
| Withheld timeline files (**marker positive control**, `control.py`) | step 003 **2 hits**, step 002 **1 hit**; the step-002 article draft 0 hits | — |
| **This record** (`selfhits.py`) | **0 hits** | **0 hits in the gated step's vocabulary and hardware classes, 0 in every withheld-value class**; the timing/completion probe class fires only on ordinary English in this record's own prose (it fires on the words in this very row), so its count is not quoted — its function is reported, not a number |

The two control rows are why a zero count on the proposed strings is a measurement and not a silent no-op:
the marker pattern is proven live against the withheld timeline files, and the class patterns are proven
live against the released values in article 001. **This record contains no gated marker and no withheld
value** — it names step 002 by number and the withheld classes by class name, and the residual matches are
the English words used to describe the probe list.

## 9. Claim → source trace, re-derived (not copied from deck §9)

I re-derived the load-bearing rows against the sources rather than accepting the deck's table:

| Claim in a proposed string | Verified at | Result |
| -------------------------- | ----------- | ------ |
| "Ten national programme teams" | `001-project-announcement.mdx:23`; the ten partners also in `docs/SCENARIO.md`:36 (counted: ten) | PASS |
| "one uncrewed lander and rover" | `:24–26` "a single uncrewed Mars lander and rover together" | PASS |
| "how water changed an ancient equatorial landscape" | `:28–32`, verbatim | PASS |
| "what the rover carries, who builds what, and how the mission reaches Mars" | `:73–74`, verbatim in substance | PASS |
| "survey terrain and examine rocks in context" | `:30–32` (unit mapping) and `:38–39` (one rover comparing altered with unaltered material); also already public in `facts.ts` Objective | PASS |
| "The public record moves one step at a time" | `:76–77` "That is where the public record begins"; `docs/SCENARIO.md` §"Continuity and release controls" | PASS |
| The link target exists and is published | released frontmatter; emitted route on disk | PASS |
| Which work is in hand | internal canon only (`docs/timeline/002-…md`), cited to justify the `current` flag; **no step-002 fact is stated publicly** — the deck's §9 row 6 says the same and my scan confirms it | PASS, non-public support |

Every other row of the deck's §9 traces to 001 or to site-foundation copy. **No claim in the package
depends on a withheld value, and no gap had to be escalated**: the proposed honest current state is fully
supported by 001 plus internal canon, so this card settles no canon question and asks the human for no
canon decision.

## 10. Routed observations (non-blocking; no failure found)

1. **The description's plural is coupled to a maintenance action.** "Published steps link to the article
   that carries them" is true today (one published step, and it links). It stays true only if, when a step's
   article publishes, that step gains its `link` — and the gated step is exactly that case. The coupling is
   recorded in deck §6 and in the frozen file header comment ("Move the current flag and add the link when a
   step's article is published."), so it is a documented obligation rather than a latent defect; it is
   carried here so the obligation survives this card. **Owner:** writer, on the release that publishes
   step 002's article; the editorial card `t_bd1fd539` should acknowledge the carry.
2. **A stale count in the deck's own heading.** Deck §5 is titled "The four decisions the card asks for,
   decided" while the section enumerates five (D1–D5), matching the card body's "the five decisions". The
   frozen strings are unaffected. **Owner:** `mars-ai-simulator-editor` (`t_bd1fd539`), or writer if it
   prefers the deck re-titled — a working-paper heading, not public copy.
3. **Two pre-existing homepage coherence questions, unchanged by this deck.** (a) The fact grid's
   `Launch date` / `Landing date` rows read `To be announced` beside 001's published launch-window frame;
   already routed at `.agents/work/seo/about-method.md` §15 row 5 → continuity `t_a0ee9abf` → recorded
   there as **not a canon conflict**, owner "human story owner if it escalates". (b) The homepage already
   renders step 001's first planning plate as the news card image, with its released alt text naming the
   fictional target region generically and no region name in the alt string. Neither surface is touched by
   this deck and neither is re-opened here. **Owner:** unchanged (writer/homepage owner if a reader-facing
   reconciliation is ever wanted).
4. **Supersession note for the next pass.** Continuity record `.agents/work/continuity/001-project-announcement.md`
   row 16 judges the homepage chrome — including the old `Coalition planning` text — as release-safe with 001
   published. That row remains true of the chrome as it stood; it is **not** a finding that the old strings
   are current, and it is not edited. This record is the one that judges the replacement strings.
5. **Implementation, already routed.** `ProgressLog.astro:103` styles the detail paragraph positionally
   (`.timeline-list li > div:last-child > p:last-child`), so appending the link un-styles that paragraph
   unless the rule is adjusted. This changes no string and no continuity claim; the SEO pass found it and
   routed it to `t_4383dbcc` with a verified fix.

## 11. What this verdict is not, and what is outstanding

`continuity clear` means: the proposed strings agree with the published step-001 record and with the locked
release controls, add no fact beyond them, carry no withheld value in any string, state uncertainty as
uncertainty, and do not hint at what a later step will say.

It is a **continuity gate only**. It is not canon approval, not editorial approval, not a release, not
authorisation to build or deploy, and it decides none of the questions below.

Still outstanding after this verdict:

- **Editorial final gate** `t_bd1fd539` (`mars-ai-simulator-editor`) — the copy gate, including §10 items 1
  and 2 here and the SEO pass's routed observations.
- **Dev transcription** (`t_4383dbcc`, `mars-ai-simulator-dev`) — transcribe deck §8 verbatim after the
  editorial gate, with the positional-CSS fix.
- **A current human release reference** before the wording's first public deployment; an editorial
  `approved` verdict is not a release, and no Red Horizon canon is approved by this record.

Validation completed on this card: §1 hashes and `git status`; §2–§7 read against the cited lines of the
published article, `docs/SCENARIO.md`, `docs/timeline/README.md` and step 002's private situation;
§8 scripted scans with a positive control; §9 trace re-derived. **Not run, and not this card's:** any build,
preview, deployment, DNS or provider action; any asset generation; any canon, copy, deck or `website/` edit.

## Final label

continuity clear
