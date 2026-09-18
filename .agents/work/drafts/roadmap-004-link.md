# Deck: roadmap-004-link — the homepage roadmap after article 004 publishes (round 2.5, a delta deck)

## 0. Deck metadata

| Field                                                               | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card                                                                | `t_116ca903` — `mars-ai-simulator-writer`, follow-up editorial work · timeline step `004-launch-provider`                                                                                                                                                                                                                                                                                                                                                                                            |
| Deliverable                                                         | A three-string delta to `website/src/features/progress/steps.ts` (one `link` href, one `link` label, one `detail` literal) plus one non-rendered source-comment clause; the `current` flag is decided and stays. No other string, file or shape changes                                                                                                                                                                                                                                              |
| Revision                                                            | 2 — the decisions are unchanged from this card's first pass. This revision re-measures every input and re-runs every check in §10 (the first pass cited them to a scratch directory that did not survive the run and left §0's hash row unfilled); §3's gate-record citation is corrected to the section that actually holds the fact, and §12 records the chain as filed rather than as planned                                                                                                     |
| Skills applied                                                      | `brand-voice` (project), `copy-editing` (project), both read before writing                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Decisions in scope                                                  | Exactly the two the card names: (1) whether step 2's link moves to article 004 or a fourth step is added; (2) whether step 2 stays `current: true`. One connected wording decision (§4) is argued as subordinate to (1) and may be struck by the gate without affecting either                                                                                                                                                                                                                       |
| Out of scope by operator note (2026-09-17 20:00 CEST, on this card) | The round-3 expansion (more than three steps) and the step-1 title rename — both belong to child card `t_9f4bbea2` (planner), which reads this deck and builds on it                                                                                                                                                                                                                                                                                                                                 |
| Factual bound                                                       | The published record only: `website/news/001-project-announcement.mdx` (`923a12d8…`), `002-payload-selection.mdx` (at `HEAD` `7b69bd7f…`; the shared checkout's working copy is `8dc22a4f…` — an uncommitted `mediaAlt` edit from a card in flight, which touches no sentence this deck cites), `003-vehicle-design.mdx` (`51f2ee69…`), `004-launch-provider.mdx` (`7da71fec…`, `publication: published`), and the live origin `https://mars-ai-simulation.janpolacek.workers.dev` measured this run |
| Structural bound                                                    | `steps.ts` sha256 `1236ead76962cb8672d2ce25fabc73b45efc04e2e346adafa015a630c08e4db5` at `HEAD` = `origin/main` = `5a59f340…` (measured 20:41 CEST); the round-2 frozen shape (15 literals, one optional `link`, `#timeline` id) is untouched                                                                                                                                                                                                                                                         |
| Status                                                              | `draft` — no approval exists; nothing under `website/` was edited by this card; no build, commit, push, deploy or publication run                                                                                                                                                                                                                                                                                                                                                                    |
| Public/canon impact                                                 | No new canon. Proposes the next wording of one live public panel so it points at the published record of all four steps; the strings' first deployment needs the editorial gate's recorded release decision (round-2 pattern)                                                                                                                                                                                                                                                                        |
| Deck file sha256                                                    | `2dbbafcf238254418b75664472bf1486f154e5c8d5ec74ce8c39a8d0cc4a0609` — hash of this file with the value in this row replaced by the literal `<64-hex>`; recipe and re-check in §10.1                                                                                                                                                                                                                                                                                                                   |
| Frozen payload                                                      | The three §7 fenced `ts` blocks (transcribed verbatim by the dev card) and `STRINGS-2` (the two changed rendered literals); sha256 in §10.3                                                                                                                                                                                                                                                                                                                                                          |

Every measurement in this deck was taken on 2026-09-17 between 19:47 and 20:46 CEST from the shared
checkout, the live origin (read-only browser reads; the origin was never written), and the four
published articles. Nothing is estimated: string lengths, hashes and scan results come from a scratch
script outside the repository (`/tmp/t_116ca903b/measure.py`, §10) and are printed into §10 as literal
values so this deck does not depend on that script still existing.

---

## 1. The state this deck starts from, measured

- The article is **live**: `/news/004-launch-provider/` returns 200 with `h1` `The launch architecture, chosen.`, one `Simulated record date · 11 March 2030` line, no `h2`, and body anchors to `/news/003-vehicle-design/` and `/news/001-project-announcement/` (browser read, 20:41 CEST).
- The homepage newsroom links all four articles; the 004 card carries the label `Launch architecture briefing`, beside `Announcement summary` (001), `Payload selection briefing` (002) and `Rover design briefing` (003) (live anchor inventory, 20:41 CEST).
- The roadmap panel is the round-2 wording, live: step 1 `Announced` / `Coalition and purpose` → 001 (`Read the announcement`); step 2 `In hand` / `Mission architecture` + `is-current` / detail "The first rover's design is frozen and the payload scope is agreed. The mission around the rover is still being assembled." → 003 (`Read the rover design`); step 3 `Ahead` / `Surface operations`, no link (live DOM read, 20:41 CEST; equal to `steps.ts` at `1236ead7…`).
- Nothing in the live strings is false after 004 published. The gap is curation: the panel does not point at the fourth step's article, and the highlighted step's sentence does not name the step's newest published outcome. This is the card's own framing ("a curation gap, not a corrected claim") and it holds.
- The record dates, in order: 001 `2026-10-12`, 002 `2027-03-19`, 003 `2029-07-13`, 004 `2030-03-11` (frontmatter, all four measured; `004`'s status is `Architecture selected`).

## 2. Decision 1 — the link: step 2's link moves to article 004

**Decided: `link.href` becomes `routes.newsArticle('004-launch-provider')`, label `Read the architecture decision`. No fourth step is added by this card.**

Why the link moves (four reasons, each from the record):

1. **The link tracks the newest article that carries the step.** That is the rule round 2 applied when it chose 003 over 002 (round-2 deck §5 D2: "003 is the newest article that reports this step, and it carries the step's lead clause outright"). 004 is now that article: it reports the mission-architecture step's own subject — the architecture of the mission around the rover — as a published decision (`004:14` "The coalition has selected a delivery architecture for the mission"; `:13–16` "it has now decided how Red Horizon One will leave Earth"). 003 reports one element of the mission (the rover); 004 reports the mission-level assembly the step's title names.
2. **Chain of reach.** Round 2's other criterion was "both published articles are reachable from this one anchor". From 004 the reader reaches 003 directly (`004:31`, "the six-wheel rover" → `/news/003-vehicle-design/`) and 001 (`004:48–49`, the programme announcement); 003 in turn reaches 002 (`003:63`). Keeping 003 offers none of the forward reach: 003 predates 004 and links nowhere forward to it. The one anchor that carries the step's whole evidence chain is now 004.
3. **The panel's job is to say which step each article belongs to** (round-2 deck §4). After 004 published, the article that carries the step's current state is 004; leaving the anchor on 003 makes the roadmap's one pointer for this step sit on an article that does not mention the step's newest published outcome.
4. **The step title stays `Mission architecture`** (round-2 decision, kept in §5), and 004 is the article whose own title and category carry that noun (`The launch architecture, chosen.` / `Launch architecture 04`) — the same title-to-step agreement round 2's D5 recorded between the panel and `facts.ts`.

**Why not a fourth step (the card's other branch):** the public record describes the architecture decision as part of assembling the mission around the rover, not as a new phase boundary — `004:50–52`: "What sits between this decision and the flight is integration and readiness work: bringing the elements together into one stack, testing that stack… and closing the reviews." Integration and readiness work is mission-architecture work. Round 2 already rejected payload and vehicle steps for exactly this reason (round-2 deck §4, rejected alternatives: "that work belongs inside `Mission architecture`; … it would claim a milestone boundary the public record does not describe"). And the operator note (20:00 CEST) routes the list's expansion to child card `t_9f4bbea2` — this deck does not pre-empt it.

**Label: `Read the architecture decision`.** It follows the round-2 label rule (subject-bearing, describes the destination out of context, distinct from the news card's own label on the same page): the live 004 news card says `Launch architecture briefing` (measured), so the roadmap anchor must not repeat that noun phrase; `decision` is 004's own word for what it publishes (`004:16–17` "a decision about a design, not a promise about a date"; `:52–53` "The programme has published a decision, not a countdown"), and the `Read the …` shape keeps step 1's `Read the announcement` pattern. Rejected: `Read the launch architecture` (collides with the card label a screen above), `Read the delivery plan` ("plan" overstates a record that says decision-not-promise), `Read more` (no subject — round 2 rejected it).

## 3. Decision 2 — the current flag: it stays on step 2

**Decided: `current: true` stays on `Mission architecture`.**

The frozen header comment's rule (`steps.ts:9–10`): "move the current flag only when the record carries the next step's opening." The next step is `Surface operations`. The published record carries no such opening — it carries the opposite:

- `004:18` — "no part of the flight stack has been integrated with a launcher or delivered to a launch site."
- `004:52–53` — "The programme has published a decision, not a countdown."
- No published sentence reports surface operations under way; nothing in 001–004 dates or opens the surface phase (round-2 audit stood on 001–003; 004 adds no surface-operations claim).

And step 2 is still the work in hand, now on 004's own evidence: `004:50–52` names what sits between the decision and the flight — integration, testing, readiness reviews — which is the mission-assembly work the step names, restating 003's closing clause (`003:71` "the mission around it is still being assembled") on the record's newest article.

**What would move the flag** (recorded for round 3 and the next release): the record carrying the opening of the step after `Mission architecture`. In the release order that is step 005's material, and the launch-day forms stay withheld (gate ledger `t_4d1b3041`, review record `.agents/work/reviews/004-launch-provider-gates.md` §R3.4 and condition C5 — the families that stay withheld are the operating-company/institution and facility names and the launch-day forms). No step-004-adjacent release can move the flag; it moves when the surface-operations opening publishes, exactly as the comment says.

## 4. The connected wording decision — step 2's detail gains the architecture clause

**Decided (subordinate to Decision 1; the gate may strike it without affecting either decision above): `detail` becomes**

> The first rover's design is frozen, the payload scope is agreed, and the delivery architecture is chosen. The mission around the rover is still being assembled.

Why it belongs to this deck: the anchor the link decision moves sits inside this sentence. If the link points at 004 while the highlighted step's detail stops at the design freeze, the step's newest published outcome is absent from the one sentence the panel highlights — the same defect class this card exists to close (§1: "the panel does not point at it yet"). The clause is one participial addition to a sentence whose every other clause is unchanged and published:

- "The first rover's design is frozen" — `003:4` (`status: Design frozen`), `003:71` ("The rover design is settled").
- "the payload scope is agreed" — `002:21–22`, recapped `003:62–65`.
- "the delivery architecture is chosen" — new: `004:2` (title, "The launch architecture, chosen."), `004:14` ("selected a delivery architecture"), `004:7` (summary, "delivery architecture is decided").
- "The mission around the rover is still being assembled" — `003:71`, in substance restated by `004:50–52`.

Rejected: rewriting the whole sentence around 004 (would drop two published, gate-approved clauses to name one new one — the smallest change that fixes the gap is the addition); naming the launcher designation in the detail (the roadmap describes the work, not the vehicle's identity — round-2 §7 kept the designation out of the panel and the linked article carries it at `004:20`); adding a date (no released date for this step; round-2 D4 stands).

## 5. What this deck deliberately does not change, and why

| String / surface                                                          | State | Why unchanged                                                                                                                                                                          |
| ------------------------------------------------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Step 2 `state` `In hand`, `title` `Mission architecture`, `current: true` | kept  | Decisions 1–2; round-2 D2's reasoning stands on the expanded record (§3)                                                                                                               |
| `facts.ts` `Current state: Mission architecture` (`facts.ts:23`)          | kept  | The highlighted step's title is unchanged, so the panel and the grid still use one term for one state (round-2 D5); editing it would be churn                                          |
| Step 1 (state, title, detail, link)                                       | kept  | The step-1 title is round 3's commissioned rename (operator note); its detail already carries 001's own 2031-window sentence (`001:66`)                                                |
| Step 3 (`Ahead` / `Surface operations`, no link)                          | kept  | No published article reports surface operations; the test pins the last step by title (`progress-log.test.mjs:220`) and asserts it carries no link                                     |
| Heading trio (`Mission roadmap` / `One step at a time.` / description)    | kept  | Round-2 approved wording; still true against the four-article record (the highlighted step is still the work in hand; the step after it is still not settled)                          |
| Nav label `Roadmap`, section id `timeline`                                | kept  | Round-2 D1; the anchor and its one definition are untouched                                                                                                                            |
| The 15-literal shape, one `link` per step                                 | kept  | Round-2 frozen shape; widening `link` to a list stays round-2 §11(d)'s planning escalation, and under round 3's longer list one link per step maps each step to its own article anyway |
| `missionIntro.description`, date rows in `facts.ts`                       | kept  | Out of scope (round-2 §11 a/b escalations stand)                                                                                                                                       |

## 6. Before / after — every changed string

| # | Where                                              | Before (live, `1236ead7…`)                                                                                                     | After (this deck)                                                                                                                                                                      |
| - | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | `steps.ts:44` `link.href`                          | `routes.newsArticle('003-vehicle-design')`                                                                                     | `routes.newsArticle('004-launch-provider')`                                                                                                                                            |
| 2 | `steps.ts:44` `link.label`                         | `Read the rover design`                                                                                                        | `Read the architecture decision`                                                                                                                                                       |
| 3 | `steps.ts:42` `detail`                             | `The first rover's design is frozen and the payload scope is agreed. The mission around the rover is still being assembled.`   | `The first rover's design is frozen, the payload scope is agreed, and the delivery architecture is chosen. The mission around the rover is still being assembled.`                     |
| 4 | `steps.ts:9–10` file-header comment (non-rendered) | `Add a step's link when its article is published; move the current flag only when the record carries the next step's opening.` | `Add a step's link when its article is published, and re-choose it when a newer article carries the step; move the current flag only when the record carries the next step's opening.` |

Row 4 is a source comment, never rendered; it is proposed because this round exercises the
re-choose branch the round-2 deck §6 predicted and the comment does not yet name. The dev card
carries it in the same edit. A matching comment refresh in `website/test/progress-log.test.mjs:13–14`
(names the 003 target) is proposed in §8; the test's assertions need no change (§8).

## 7. Transcribable strings (the dev card transcribes this verbatim)

```ts
// steps.ts — the step-2 entry after this deck (state, title, current unchanged):
    {
        state: 'In hand',
        title: 'Mission architecture',
        detail:
            "The first rover's design is frozen, the payload scope is agreed, and the delivery architecture is chosen. The mission around the rover is still being assembled.",
        current: true,
        link: { href: routes.newsArticle('004-launch-provider'), label: 'Read the architecture decision' },
    },
```

```ts
// steps.ts — the header comment's second rule line after this deck:
 * here may describe a fact the record has not released, and `link` points only
 * at a published article. Add a step's link when its article is published, and
 * re-choose it when a newer article carries the step; move the current flag
 * only when the record carries the next step's opening.
```

```ts
// test/progress-log.test.mjs — the history comment's round-2 sentence, extended
// (comment only; no assertion changes):
 * Round 2 (card `t_cc2dfd29`) added the second roadmap link — step 2,
 * `Mission architecture`, now points at `/news/003-vehicle-design/` — and the
 * 004 round re-chose it: the step's newest carrier is `/news/004-launch-provider/`.
```

## 8. Test impact, measured against `progress-log.test.mjs` (`4fc56e74…`)

- The link contract is predicate-based: `publishedSlugs()` (`:137–150`) reads the real `website/news/` frontmatter through `selectPublicNews()`, and the assertions check shape (one anchor per linked step, routes resolve, last step linkless) rather than slugs (`:184–224`). Pointing step 2 at `004-launch-provider` satisfies every assertion as long as the article is `publication: published` — it is, and the route is live (`:200–214` is the published-set check; §10.7 measures the route).
- The pinned strings the test carries: last step's title `Surface operations` (`:220`) — unchanged by this deck; exactly one `current` (`:255`) — unchanged (§3).
- The only stale text after the delta is the header comment's history sentence (`:13–14`), which names the 003 target; §7's third block refreshes it. Comment-only, same file, same dev change.
- R1 (round-2's rendering condition, detail parity across steps) carries automatically: the `.timeline-detail` rule is class-keyed (`ProgressLog.astro:113`), no selector is touched, step 2 keeps its link paragraph and step 3 stays linkless.

## 9. Withheld-class audit on the changed strings

The two changed rendered literals and the comment delta were scanned against ten withheld families —
launcher designation, rover designation, region name, the two gated coordinate markers, degree
values, institution/operator/facility names, launch-day forms, ISO dates, any digit, and currency or
figure forms — by the scratch script of §10, whose pattern list lives outside the repository and is
cited there by location, never copied into this deck: **0 hits in 30 family×string checks**, and the
only digit class cannot fire because neither rendered literal contains a digit. The positive control
(`docs/vehicles/pathfinder/VEHICLE.md`, `0cea455f…`) fires on two families, so the scan is live. The
launcher designation the step-004 release cleared is deliberately absent from the panel strings — the
linked article carries it (`004:20`), and the panel describes the work, not the vehicle's identity (§4).

## 10. Validation performed on this card

| #    | Check                                       | Tool / source                                                                               | Result                                                                                                                                                                                                                                                                                                                                   |
| ---- | ------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.1 | Deck file hash, recipe re-checked           | `python3 /tmp/t_116ca903b/measure.py` (script and its `report.json` outside the repository) | §0's value, re-taken after this revision's final edit; the recipe is a fixed point — re-running it reproduces the row's own value                                                                                                                                                                                                        |
| 10.2 | Input stability                             | `sha256sum` / same script, 20:41–20:46 CEST                                                 | `steps.ts` `1236ead7…` (51 lines); test `4fc56e74…`; round-2 deck `8fc9a181…`; round-2 review `2f247573…`; round-2 SEO `424a44ff…`; `facts.ts` `7cf85ec8…`; `ProgressLog.astro` `68a4b4d5…`; 001 `923a12d8…`; 002 `7b69bd7f…` at HEAD (working copy `8dc22a4f…`); 003 `51f2ee69…`; 004 `7da71fec…`; `HEAD` = `origin/main` = `5a59f340…` |
| 10.3 | Frozen payload hashes                       | same script                                                                                 | three §7 blocks and `STRINGS-2`; literal values in §10.3 below                                                                                                                                                                                                                                                                           |
| 10.4 | String measurements                         | same script                                                                                 | detail before 122 chars → after **160**; label before 21 → after **30**; both after-values ASCII, digit-free                                                                                                                                                                                                                             |
| 10.5 | Withheld-class scan + positive control      | same script, pattern list outside the repository                                            | 0 hits over three strings × ten families; control fires (2 families)                                                                                                                                                                                                                                                                     |
| 10.6 | Containment of §7 strings in §4/§6          | same script, whitespace-collapsed presence check                                            | all three frozen strings present in this deck's §4, §6 and §7                                                                                                                                                                                                                                                                            |
| 10.7 | Link target published and routed            | live origin browser read, 20:41 CEST                                                        | `/news/004-launch-provider/` 200; `h1` `The launch architecture, chosen.`, 0 `h2`, one record-date line; body anchors to 003 and 001; frontmatter `publication: published`, `simulatedDate: 2030-03-11`                                                                                                                                  |
| 10.8 | No `website/` edit by this card             | `git status --short` at verdict time                                                        | this card's only write is this deck (a new file under `.agents/work/drafts/`); every other modified/untracked path belongs to cards in flight on the shared checkout                                                                                                                                                                     |
| 10.9 | No build, commit, push, deploy, publication | —                                                                                           | none run; the live origin was read, never written                                                                                                                                                                                                                                                                                        |

### 10.3 Frozen payload (values the script measured)

- §7 block 1, the step-2 entry the dev card writes (483 chars): sha256 `5864980edbd3c0f20189417db406b9e158aad9d0ea23262f12428586d8dd2ce3`.
- §7 block 2, the header-comment rule the dev card writes (363 chars): sha256 `1818f0b53b3f2b716e2d684a38e9bf881c494f1848505939662c13dbb708463d`.
- §7 block 3, the test comment the dev card writes (357 chars): sha256 `bd6cf4a1cce6edc7c3cfcf2a315dfe405450c0e14a03c275820d92be9de6f817`.
- `STRINGS-2` = the two changed rendered literals, `\n`-joined in §6 order (label, detail): sha256 `9d218ef630b113c9ea200a5aeb56d06d1824318e0b1443d5222e287b53877fc7`. The two values alone: label after `2d22370085a022774ac54523e0a4c45507f4b5107c976ae0fae32a7b266e5885`, detail after `6e895c691b38d6765752ade5dc02720ccc117c4ebc47fa7387052701f301a31b`.

The three block hashes are taken from this file's own fenced blocks, so the dev card and the gate can
re-derive them from the deck the gate approved, and the gate can re-run the same recipe
(`/tmp/t_116ca903b/measure.py`, §10.1) instead of trusting these lines.

## 11. What this deck hands to round 3 (`t_9f4bbea2`, planner), per the operator note

- The two decisions and their reasoning (§2, §3) are round 3's baseline: under any longer list, the mission-architecture step's article is 004 (chain-of-reach argument, §2), and the flag stays on that step until the record carries the surface-operations opening (§3, with the step-005 boundary named).
- The per-clause trace (§4) is reusable for any restructured step-2 sentence; every clause cites its article line.
- The round-2 escalations this deck re-confirms rather than re-opens: one `link` per step (round-2 §11 d), no date on steps 2+ (round-2 §11 a/e), the grid's `To be announced` rows (round-2 §11 b).
- Round 3 owns what this deck was told not to attempt: more than three steps (the human's ask), and the step-1 title `Coalition and purpose`, which the human reads as political — the word is on the public surface six times in five files (`steps.ts:33`, `001:77`, `002:87`, `004:14`, `facts.ts:18`, `Hero.astro:12`; six instances, checked against the files this run). This deck's delta neither adds nor removes an instance.
- Sequencing this deck's chain does not disturb round 3: its own acceptance already records that its dev card depends on this deck's transcription of `steps.ts` (same file, one card at a time), and any `progress-log.test.mjs` shape change moves in that card.

## 12. Escalated, and the chain

- **(a) The label's article-noun tension.** `Read the architecture decision` names 004's event class, not its `Launch architecture` noun phrase, to stay distinct from the news card's label. If the gate prefers the noun phrase, it is a one-string substitution at the same anchor — but it collides with `Launch architecture briefing` on the same page, which is why this deck ships the decision form.
- **(b) The comment re-choose clause (§6 row 4)** is a source-comment wording choice; the gate may keep the comment as-is and the strings still stand.

**Chain (round-2 pattern).** Filed from this card: `t_1b0b1951` (`mars-ai-simulator-seo`) — the SEO pass
over this deck, writing `.agents/work/seo/roadmap-004-link.md`; it owns the anchor text, the
internal-link count and the homepage metadata question, and it does not edit this deck. Still to be
created after it, each depending on the one before:

1. **Editorial gate** — owner `mars-ai-simulator-editor`. It records the release decision for the published strings (round-2's gate record is `.agents/work/reviews/progress-log.md`), names the approved revision of §7, and files the dev transcription card (item 2) as its own child.
2. **Dev transcription** — owner `mars-ai-simulator-dev`. The transcription belongs to timeline step `004-launch-provider`: that release fired this card, and the panel change advances no timeline step of its own. It transcribes the gate-approved §7 blocks verbatim into
   `website/src/features/progress/steps.ts` and the test comment in `website/test/progress-log.test.mjs`,
   stages only those two paths, and pushes. **Its push is a publication and needs the gate's recorded
   release decision first**, and it must be the only card editing `steps.ts` in that window (round 3's
   dev card, `t_9f4bbea2`'s chain, depends on this transcription having landed).

Nothing here is approved, released or published; this card edits no `website/` file, runs no build and
no deploy.

**Next recommended owner and action:** `mars-ai-simulator-seo` on the SEO child card (anchor text,
internal-link count, no metadata change expected), then `mars-ai-simulator-editor` at the gate, then
`mars-ai-simulator-dev` for the transcription. `steps.ts` is a hotspot shared with round 3's future
chain.
