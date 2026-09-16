---
name: site-deployment
description: Validate a reviewed article in the Astro site and prepare, but never assume authority for, deployment.
---

# Site deployment

Required inputs: the claimed Beads issue, an editorial review whose final status
is `approved`, the article, asset manifest, a human canon/release approval
reference, and the repository deployment configuration. Read `AGENTS.md`,
`docs/INSTRUCTIONS.md`, `.agents/roles/site-engineer.md`, and
`.agents/roles/deployment-engineer.md` first.

Allowed tools: local schema checks, `fnm use`, local build/preview commands,
repository inspection, and `bd`. Do not create a provider project, deploy,
configure DNS, use credentials, or change editorial meaning without a corrective
issue.

Write validation evidence to the Beads issue: schema/front-matter result, build
command/result, preview verification of title/body/images/alt text, source
commit, and any proposed deployment inputs. When explicit human deployment
authority exists, record its reference and the verified URL; otherwise leave the
issue open as `blocked` with the exact required approval.

Reject an unapproved review, missing human approval, failed build, failed preview,
or missing asset/alt-text evidence. Acceptance checks require a successful local
build and preview plus explicit approval and verified URL for a production deploy.
Never close a deployment issue with a merely assumed approval.
