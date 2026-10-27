# PatrolTech MCP

**Run your security patrols by just asking.** The official PatrolTech connector for Claude, ChatGPT,
Microsoft Copilot, Gemini, Cursor and any [Model Context Protocol](https://modelcontextprotocol.io)
client.

![PatrolTech - QR/NFC checkpoints, offline patrols and incident reports](https://raw.githubusercontent.com/PatrolTech/.github/main/02-patroltech-banner.svg)

```
https://mcp.patroltech.online/mcp
```

Remote server · Streamable HTTP · OAuth 2.1 sign-in with your PatrolTech account · works on the Free plan.

## What you can ask

- *Which patrol rounds were missed yesterday?*
- *Show me suspicious scans from the last 7 days.*
- *Which checkpoints haven't been scanned in over a week?*
- *Who is inside the warehouse right now?*
- *Create a night route with Main entrance, Parking and Loading dock, every hour from 22:00 to 06:00.*
- *Mark the "Broken fence" incident as resolved with a comment.*

Answers come from your live PatrolTech data, in your language and your local time.

## Connect

| Client | How |
|---|---|
| **Claude** (web, desktop, mobile) | Settings → Connectors → *Add custom connector* → name `PatrolTech`, URL above → sign in |
| **Claude Code** | `claude mcp add --transport http patroltech https://mcp.patroltech.online/mcp` — or the plugin: `/plugin marketplace add PatrolTech/mcp-server` then `/plugin install patroltech@patroltech` |
| **ChatGPT** | Settings → Apps → create a connector with the URL above (developer mode) → sign in |
| **Microsoft Copilot Studio** | Tools → Add a tool → Model Context Protocol → URL above, OAuth |
| **Gemini CLI** | `gemini extensions install https://github.com/PatrolTech/mcp-server` |
| **Cursor** | [Add to Cursor](cursor://anysphere.cursor-deeplink/mcp/install?name=patroltech&config=eyJ1cmwiOiJodHRwczovL21jcC5wYXRyb2x0ZWNoLm9ubGluZS9tY3AifQ==) |
| **VS Code / GitHub Copilot** | [Install in VS Code](vscode:mcp/install?%7B%22name%22%3A%22patroltech%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A//mcp.patroltech.online/mcp%22%7D) |
| **Any MCP client** | Add the URL above as a remote (Streamable HTTP) server |

Listings in the Claude, ChatGPT, Microsoft and Cursor directories are in review.

## What it can do

**Read**: rounds and their status, round detail per checkpoint, rounds by route, scans (suspicious
and invalid), checkpoints not scanned for days, checkpoints, routes and schedules, guard activity
and app links for guards, incidents, access and visitor logs, plan usage, printable QR sheet.

**Change, always with your confirmation**: create checkpoints, create routes with schedules, add
time windows, activate or deactivate routes, add or remove checkpoints in a route, edit checkpoints
and locations, rename guards, update incidents, alert preferences. Every change is first a
*proposal*: the assistant shows exactly what will happen and nothing is applied until you confirm.

**Never**: delete data, invite users, change roles, create guard credentials or touch billing.

## Security

- OAuth 2.1 + PKCE with your PatrolTech account; revoke access at any time.
- The assistant only sees the organizations and locations your role allows.
- Rate limits and an audit log for every call.
- PatrolTech is SOC 2 Type II, ISO 27001 and ENS certified. [Privacy policy](https://patroltech.online/legal/privacy) · [Terms](https://patroltech.online/legal/terms).

## What's in this repository

| Path | Purpose |
|---|---|
| `server.json` | Entry in the official MCP Registry (`online.patroltech/patroltech`) |
| `skills/patroltech/SKILL.md` | Agent skill: when to use PatrolTech and which tool fits each question |
| `.claude-plugin/`, `.mcp.json` | Claude Code plugin and marketplace |
| `.cursor-plugin/`, `mcp.json` | Cursor plugin |
| `gemini-extension.json`, `GEMINI.md` | Gemini CLI extension |

The server itself is hosted by PatrolTech; this repository holds the public configuration and docs.

## About PatrolTech

PatrolTech is guard tour and security patrol software by Ingenieros Web SL (Madrid, Spain): QR/NFC
checkpoints with GPS anti-fraud, offline patrols, incident reports, visitor management and a
management dashboard, used by security companies, facility teams and property managers in more than
15 countries. The permanent free plan includes five checkpoints and unlimited guards.

[Website](https://patroltech.online/en) · [Pricing](https://patroltech.online/en/pricing) · [Connector docs](https://patroltech.online/en/features/integrations/mcp) · [Tutorials](https://patroltech.online/en/tutorials)

Questions or partnerships: **info@patroltech.app**. Do not include credentials, tokens or customer data in public issues.

[LinkedIn](https://www.linkedin.com/company/patrol-tech/) · [YouTube](https://www.youtube.com/@patroltechapp) · [Instagram](https://www.instagram.com/patroltechonline/)

## En español

Conector oficial de PatrolTech para Claude, ChatGPT, Copilot, Gemini y cualquier cliente MCP.
Pregunta qué rondas no se hicieron, qué escaneos son sospechosos o quién está dentro, y configura
checkpoints y rutas: cada cambio espera tu confirmación. URL del servidor:
`https://mcp.patroltech.online/mcp`. Funciona desde el plan gratuito.
[Documentación en español](https://patroltech.online/features/integrations/mcp).
