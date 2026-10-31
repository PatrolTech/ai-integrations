# Security policy

## Reporting a vulnerability

Please report vulnerabilities privately, never in a public issue or pull request:

- **GitHub:** [report a vulnerability](https://github.com/PatrolTech/ai-integrations/security/advisories/new) from the Security tab of this repository.
- **Support bot:** WhatsApp [wa.me/34624085772](https://wa.me/34624085772) or Telegram [@patroltechbot](https://t.me/patroltechbot).
- **Email:** [info@patroltech.app](mailto:info@patroltech.app).

Include the steps to reproduce and the impact you expect. Do not send credentials, access tokens or customer data: if a report needs them, say so and we will agree on a safe channel.

We acknowledge reports within 3 working days and keep you informed until the fix is released.

## Scope

This repository contains manifests, plugin configuration and skill instructions that point assistants at the PatrolTech MCP connector. Its code lives in [PatrolTech/mcp-server](https://github.com/PatrolTech/mcp-server).

These files grant no access by themselves: every request is authorised by the PatrolTech API with the user's OAuth token, scopes and role.
