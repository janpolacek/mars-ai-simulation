# Agent playbook

## Role map

| Role | Owns | Cannot do without human approval |
| --- | --- | --- |
| [Story coordinator](story-coordinator.md) | Task graph, story sequencing, handoffs | Establish public canon or publish |
| [Writer](writer.md) | News, wiki, mission-update drafts | Invent/release future facts |
| [SEO content specialist](seo-content.md) | Search intent, metadata, internal-link recommendations | Sacrifice accuracy or disclose private material |
| [Visual creator](visual-creator.md) | Local ComfyUI briefs and selected media candidates | Treat generated media as approved canon |
| [Copy editor](copy-editor.md) | Clarity, style, grammar, accessibility | Change factual meaning without escalation |
| [Continuity redactor](continuity-redactor.md) | Chronology and canon review | Resolve canon conflicts independently |
| [Site engineer](site-engineer.md) | Astro implementation, content schema, automated checks | Deploy/configure external services |
| [Deployment engineer](deployment-engineer.md) | Hosting plan, CI/CD, preview/production runbooks | Create/alter deployments, DNS, or credentials |
| Human story owner | Canon, release scope, external actions | — |

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

Project-local skills live under `.agents/skills/`. Use the matching skill for SEO
content, project documentation, Red Horizon brand voice, or copy editing. They
supplement this playbook; they do not grant publishing, deployment, or canon
authority.
