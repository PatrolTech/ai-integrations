# Distribution and attribution

This repository provides a remote MCP connection, a portable agent skill, and host-specific plugin manifests. A public repository, an installable package, a submitted listing and an approved marketplace listing are separate states.

## Link convention

Use `utm_campaign=ai_integrations` and `utm_medium=referral` on links from external listings or documentation into the PatrolTech marketing site. Use lowercase source names and a placement-specific `utm_content`.

| Placement | utm_source | Example utm_content |
| --- | --- | --- |
| Claude connector directory | claude | connector_listing |
| Cursor marketplace | cursor | marketplace_listing |
| Gemini gallery | gemini | extension_listing |
| Official MCP Registry | mcp_registry | server_listing |
| Glama | glama | connector_listing |
| GitHub integration README | github | integrations_readme_signup |
| GitHub MCP server README | github | mcp_readme_signup |
| Portable agent skill | patroltech_skill | skill_signup |
| SDK README shared by GitHub and npm | patroltech_sdk | sdk_readme_signup |
| Other directories | Actual directory identifier | server_listing |

The SDK README is rendered on both npm and GitHub; its shared source identifies the SDK, while the actual referring hostname distinguishes those surfaces when available. The portable skill does not know which AI client loaded it, so it must not claim a specific host as the source.

Example:

```text
https://patroltech.online/en/start?utm_source=cursor&utm_medium=referral&utm_campaign=ai_integrations&utm_content=marketplace_signup
```

Keep the marketing path and language intact. Preserve existing parameters and fragments. Never put account identifiers, email addresses, tokens or credentials in campaign tags.

## Technical and legal URLs

Keep these untagged: MCP endpoints, OAuth discovery/authorization/token URLs, redirect URIs, API base URLs, OpenAPI contracts, package install sources, schema IDs, icon URLs, repository identity URLs, canonical tags, privacy policy and terms URLs.

Do not add campaign tags to internal website navigation: that can replace the external campaign. The site's existing first-touch attribution should carry the visitor's source through the signup flow.

## Measurement

Filter GA4 by `ai_integrations`, then compare session source/medium, campaign and manual ad content. Compare those visits with the existing signup/lead events and persisted first-touch attribution. A visit, package download, skill installation, OAuth connection and signup are different events; do not report one as another.

Retain the public listing URL, submission receipt, actual status and tagged destination for each directory. Verify the link after publication: some directories strip query parameters or replace the supplied website URL.

## Discovery routes

- [Gemini CLI gallery](https://geminicli.com/docs/extensions/releasing/): public GitHub repository, `gemini-cli-extension` topic and a root manifest. Crawling is automatic; a topic does not guarantee a validated listing.
- [Agent skills](https://vercel.com/kb/guide/agent-skills-creating-installing-and-sharing-reusable-agent-context): public skill source and a documented `npx skills add` command. skills.sh discovery uses real installation telemetry; there is no manual publication command.
- [Cursor marketplace](https://cursor.com/marketplace/publish): submit the public plugin repository after the publisher accepts the marketplace terms.
- [Official MCP Registry](https://registry.modelcontextprotocol.io): canonical server metadata, separate from host-specific marketplace approval.
- [Claude connector directory](https://claude.ai/directory/patroltech): the public community listing.
