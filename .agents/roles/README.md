# Agent playbook

This is the canonical role-policy layer for the project. Each contract below
defines ownership, approval boundaries, and handoff expectations. The
project-local [skill catalog](../README.md) adds task-specific
procedures and acceptance checks; it does not replace or broaden these
contracts. When guidance appears to conflict, follow the source-of-truth order
in [`docs/INSTRUCTIONS.md`](../../docs/INSTRUCTIONS.md) and record the conflict for
human resolution.

## Role map

| Role                                          | Owns                                                   | Project-local skill(s)                               | Cannot do without human approval                |
| --------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------- | ----------------------------------------------- |
| [Story coordinator](story-coordinator.md)     | Task graph, story sequencing, handoffs                 | `create-article-workflow`, `research-and-fact-check` | Establish public canon or publish               |
| [Writer](writer.md)                           | News, wiki, mission-update drafts                      | `article-drafting`                                   | Invent/release future facts                     |
| [SEO content specialist](seo-content.md)      | Search intent, metadata, internal-link recommendations | `seo-content`                                        | Sacrifice accuracy or disclose private material |
| [Visual creator](visual-creator.md)           | Local ComfyUI briefs and selected media candidates     | `image-generation`                                   | Treat generated media as approved canon         |
| [Copy editor](copy-editor.md)                 | Clarity, style, grammar, accessibility                 | `copy-editing`                                       | Change factual meaning without escalation       |
| [Continuity redactor](continuity-redactor.md) | Chronology and canon review                            | `editorial-review` (where chronology is in scope)    | Resolve canon conflicts independently           |
| [Site engineer](site-engineer.md)             | Astro implementation, content schema, automated checks | `site-deployment`                                    | Deploy/configure external services              |
| [Deployment engineer](deployment-engineer.md) | Hosting plan, CI/CD, preview/production runbooks       | `site-deployment`                                    | Create/alter deployments, DNS, or credentials   |
| Human story owner                             | Canon, release scope, external actions                 | —                                                    | —                                               |

## Standard lifecycle

```text
private timeline -> story coordinator -> writer -> SEO + copy edit
                 -> visual creator -> continuity redactor -> human approval
                 -> site engineer validation -> deployment engineer (when authorised)
```

Roles may iterate, but neither technical delivery nor polished writing bypasses
human approval. The coordinator records dependencies in Beads; agents work only
on unblocked, claimed issues.

## Required deliverable fields

Every role includes the following in its Beads update or handoff:

- linked issue and the mission timeline step (or `site-foundation`)
- input sources and assumptions
- output files/assets/recommendations
- public/canon impact and confidentiality check
- validation completed and remaining review
- next recommended owner/action

## Skill usage

Read the relevant role contract before invoking a skill. Skills may combine more
than one role contract for a bounded workflow, but they must keep the contracts'
approval boundaries intact. `brand-voice` and `project-documentation` are
cross-cutting skills rather than separate roles; use them alongside the owning
role when their scope applies. The skill's `agents/openai.yaml` file is display
metadata only and is not an additional policy source.

## Article harness mapping

The [content workflow harness](../../docs/CONTENT_WORKFLOW.md) turns a single article
brief into a serial Beads graph. Its skills extend the role contracts above;
they do not replace human approval or the continuity redactor's review.

| Harness task                          | Skill                     | Role contract(s) to apply                                     |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------- |
| Workflow creation                     | `create-article-workflow` | Story coordinator                                             |
| Source pack                           | `research-and-fact-check` | Story coordinator; human-approved brief                       |
| Article draft                         | `article-drafting`        | Writer; brand voice                                           |
| Visual manifest                       | `image-generation`        | Visual creator                                                |
| Editorial gate                        | `editorial-review`        | Copy editor; continuity redactor where chronology is in scope |
| Local validation / authorised release | `site-deployment`         | Site engineer; deployment engineer                            |
