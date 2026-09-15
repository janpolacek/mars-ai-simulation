# Content multi-agent harness — implementation brief

## Objective

Build a durable, inspectable workflow that turns a user request such as **“write and publish article X”** into a completed article. Use Beads as the source of truth for work state and dependencies. Use Codex/Claude agents as specialised workers. Do not rely on a parent agent remembering the next step or passing hidden chat context between agents.

The intended pipeline is:

```text
User brief
  -> research source pack
  -> redactor draft
  -> visual assets
  -> editor integration and factual-quality gate
  -> technical build, preview, and deploy
```

The editor is the final content-quality authority. Deployment is permitted only after the editor gate passes.

## Principles

1. **Beads owns state.** A Beads epic and its child issues describe every required unit of work, its inputs, its acceptance criteria, and its dependencies.
2. **Artifacts own context.** Agents exchange Markdown, source records, images, metadata, and check results in the repository. Do not treat an earlier agent’s chat response as the canonical handoff.
3. **One worker, one responsibility.** Each worker claims one ready Beads issue, performs only that task, leaves evidence, then closes it.
4. **Dependency closure unblocks work.** A later task becomes runnable because its blockers close, not because an agent sends a vague “continue” instruction.
5. **Quality gates may reject work.** The editor can reopen or create corrective tasks for an inaccurate draft, missing evidence, unsuitable asset, or incoherent integration.
6. **Deployment is an explicit boundary.** Start with manual production approval. Automatic staging deployment is acceptable only after the workflow is demonstrated to be reliable.

## Roles and skills

Store repeatable role instructions as skills. Put only repository-wide policies in `AGENTS.md`.

| Role | Skill | Responsibility | Cannot do |
|---|---|---|---|
| Researcher | `research-and-fact-check` | Find canonical sources, extract claims, attach exact URLs and access dates | Publish, invent unsupported claims |
| Redactor | `article-drafting` | Produce an article from the brief and approved source pack | Treat uncited claims as facts, deploy |
| Visual worker | `image-generation` | Create/select visuals, deliver alt text, caption, source/license record, and file paths | Alter factual claims or publish |
| Editor | `editorial-review` | Verify claims, coherence, citations, house style, image placement and accessibility | Deploy if any gate fails |
| Technical worker | `site-deployment` | Validate content schema, build, preview, deploy, and verify page availability | Modify editorial meaning without reopening review |
| Orchestrator | `create-article-workflow` | Translate the user brief into the Beads graph; route ready issues to workers | Bypass a closed acceptance gate |

Recommended initial skills:

```text
.agents/skills/
  create-article-workflow/SKILL.md
  research-and-fact-check/SKILL.md
  article-drafting/SKILL.md
  image-generation/SKILL.md
  editorial-review/SKILL.md
  site-deployment/SKILL.md
```

Every skill must state: required inputs, allowed tools, output locations, rejection conditions, acceptance checks, and the Beads close-out procedure. Keep skills short, concrete, and versioned in Git.

## Repository contracts

Use a predictable directory layout. Adjust names to the CMS/framework, but preserve the separation between source material, draft content, assets, and review evidence.

```text
AGENTS.md
.agents/skills/
content/articles/<slug>.md
content/briefs/<slug>.md
content/sources/<slug>.md
content/reviews/<slug>.md
public/articles/<slug>/
  hero.webp
  figure-01.webp
  assets.md
```

### Required article metadata

Each article has stable front matter, for example:

```yaml
title: ""
slug: ""
status: draft # draft | in_review | approved | deployed
author: ""
published_at: null
sources_file: content/sources/<slug>.md
review_file: content/reviews/<slug>.md
```

### Source-pack contract

`content/sources/<slug>.md` must identify each material claim, its canonical URL, publisher/author, publication or update date when available, date accessed, and a short note explaining how the source supports the claim. Prefer official documentation, original research, primary institutions, and direct statements over summaries or copied claims.

### Asset contract

`assets.md` must list each image’s path, placement target, alt text, caption, source/prompt, model/tool where relevant, and licence or permission status. Do not use an image with unknown usage rights.

### Editorial review contract

`content/reviews/<slug>.md` records a pass/fail result for:

- factual claims and citations;
- broken or misleading links;
- title/body coherence and internal consistency;
- audience, voice, grammar, and house style;
- image placement, captions, and meaningful alt text;
- metadata and CMS-content schema;
- final status: `approved`, `changes_requested`, or `blocked`.

An editor must not mark an article approved with unresolved material failures.

## Beads work graph

Create one epic per article and five child tasks. The IDs below are placeholders.

```text
ARTICLE (epic)
├── RESEARCH  — source pack
├── DRAFT     — depends on RESEARCH
├── IMAGES    — depends on DRAFT
├── REVIEW    — depends on IMAGES
└── DEPLOY    — depends on REVIEW
```

Use labels for routing and filtering:

```text
content, article, slug:<slug>, role:research, role:redactor,
role:visual, role:editor, role:tech, stage:research, stage:draft,
stage:assets, stage:review, stage:deploy
```

The exact Beads dependency rule is:

```sh
# BLOCKED cannot start until BLOCKER closes
bd dep add BLOCKED BLOCKER
```

Example creation sequence:

```sh
bd create "Article: <title>" --type epic --labels content,article,slug:<slug>

bd create "Research source pack: <slug>" --parent ARTICLE \
  --labels content,slug:<slug>,role:research,stage:research \
  --skills research-and-fact-check \
  --acceptance "Source pack exists; every material claim has a canonical source."

bd create "Draft article: <slug>" --parent ARTICLE \
  --labels content,slug:<slug>,role:redactor,stage:draft \
  --skills article-drafting \
  --acceptance "Article exists, follows brief and style, and cites source pack."

bd create "Create visual assets: <slug>" --parent ARTICLE \
  --labels content,slug:<slug>,role:visual,stage:assets \
  --skills image-generation \
  --acceptance "Assets, placement notes, alt text, and licence/prompt records exist."

bd create "Editorial final gate: <slug>" --parent ARTICLE \
  --labels content,slug:<slug>,role:editor,stage:review \
  --skills editorial-review \
  --acceptance "Review record is approved; article has integrated, accessible assets."

bd create "Build and deploy: <slug>" --parent ARTICLE \
  --labels content,slug:<slug>,role:tech,stage:deploy \
  --skills site-deployment \
  --acceptance "Build and preview pass; deployment URL is verified."

bd dep add DRAFT RESEARCH
bd dep add IMAGES DRAFT
bd dep add REVIEW IMAGES
bd dep add DEPLOY REVIEW
```

If factual checking finds a problem, create a correction issue and make `REVIEW` depend on it. Do not close review merely because a draft was edited informally.

## Agent operating procedure

Every worker uses this exact lifecycle:

```text
1. Run `bd prime` when context is missing or stale.
2. Find a suitable task with `bd ready --json` filtered by its role label.
3. Read `bd show <id>` and all declared input artifacts.
4. Atomically claim the issue: `bd update <id> --claim`.
5. Execute only the issue scope.
6. Write or update the contracted artifacts.
7. Run the acceptance checks in the issue and skill.
8. Add a Beads note containing output paths, source URLs, checks run, and failures.
9. Close the issue only when acceptance criteria pass.
10. If blocked, leave it open and record the exact blocker and required next action.
```

Worker prompts must include the Beads ID, repository root, skill name, artifact paths, and a requirement to record evidence before closing. Example:

```text
You are the editorial-review worker. Claim and complete Beads issue <id> only.
Read its description, the article, source pack, asset manifest, and repository AGENTS.md.
Apply .agents/skills/editorial-review/SKILL.md.
Write the result to content/reviews/<slug>.md. If a material issue remains, do not close
the review task; create or request a correction task and state the blocked dependency.
If approved, note the exact checks and artifact paths in Beads, then close <id>.
```

## Minimal orchestrator / worker loop

Start with a simple, observable polling loop rather than a free-form multi-agent swarm.

```text
On a user article request:
  1. Orchestrator validates the brief and creates the Beads epic + dependency graph.
  2. Dispatcher queries `bd ready --json`.
  3. Dispatcher reads labels and sends each ready task to the matching worker.
  4. The worker claims, executes, writes evidence, and closes or blocks its task.
  5. Dispatcher queries again. Closing a blocker makes its dependent task ready.
  6. Stop when the epic’s children are all closed, or report the specific open blocker.
```

The dispatcher must not run two workers that edit the same article files at once. Research and visual concept work can be parallel later, but the first version should keep the prescribed serial chain. This is easier to audit and avoids merge conflicts.

Use `--json` for machine parsing; use the human-readable Beads commands for debugging. Store dispatch logs and agent outputs as Beads notes, not only terminal logs.

## Gates and failure handling

### Editorial gate

The editorial bead may close only when all review checks pass. It may:

- reopen the draft issue when writing or factual corrections are needed;
- create a new corrective issue for a scoped defect;
- reject/recreate an image task when assets fail accessibility, licensing, or placement requirements;
- block with a named missing source or unresolved editorial choice.

### Deploy gate

The technical worker must verify:

```text
- article schema/front matter validates;
- static build or CMS validation succeeds;
- preview contains the intended title, body, images, and alt text;
- production deployment has the expected URL and HTTP/application result;
- deployment evidence is recorded in Beads.
```

Production deployment should initially require either an explicit user approval bead or a repository policy that clearly authorizes it. Staging deploy may be automated after editor approval.

### Failure protocol

Never silently fix a predecessor’s work and close its task. Instead:

1. Document the issue in the affected bead and review record.
2. Reopen it or create a corrective child task.
3. Add the corrective task as a dependency of the blocked review/deploy task.
4. Resume the normal `bd ready` dispatch loop after the correction closes.

## AGENTS.md policy content

Keep this global and concise:

```md
# Content workflow policy

- Beads is the source of truth for article state and dependencies.
- Claim one ready bead before editing. Do not work outside its acceptance criteria.
- Persist handoffs in repository artifacts and Beads notes.
- Use canonical sources for factual claims; cite every material claim.
- Editor approval is required before deploy.
- Do not deploy production without the configured approval policy.
- Never overwrite other workers' artifacts without a Beads-linked corrective task.
- Record paths, URLs, commands, and verification results before closing a bead.
```

## Rollout plan

1. Implement the five skills and the repository artifact layout.
2. Build only the graph-creation command and a role-label dispatcher around `bd ready --json`.
3. Run one article manually through every stage. Keep production deployment manual.
4. Review Beads history: did each task have unambiguous input, output, acceptance evidence, and a correct dependency?
5. Add automated staging deploy and limited parallel work only after the manual run is reliable.
6. Add test briefs that intentionally include an unsupported claim, an inaccessible image, and a failed build. Confirm that the workflow blocks deployment in each case.

## Definition of done

An article workflow is done only when:

- all child Beads tasks are closed with evidence;
- the final article, source pack, review record, and asset manifest exist;
- editorial review is `approved`;
- the technical build and preview checks pass;
- deployment has been authorized and its URL verified; and
- the parent epic contains a concise completion note linking all final artifacts.
