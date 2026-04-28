# gtm-cold-email-pack

A Claude Code skill pack for GTM engineers who write cold emails.

Drop these skills into `~/.claude/skills/`, fill in one config file (`sender-profile.md`), and Claude will draft frame-appropriate cold emails for founders, growth leaders, and hiring managers — without the AI-generated tells.

## What's inside

- `welcome` — interactive setup that interviews you, drafts `sender-profile.md`, and offers to install the rest of the skills
- `email-founder` — for cold emails to founders/CEOs (product-user or ecosystem-peer frame)
- `email-growth-leader` — for cold emails to VPs/Heads of Growth (stage-matched builder frame)
- `email-hiring-manager` — JD-anchored fit emails for role-specific outreach
- `pick-frame` — router that selects the right framing skill given recipient + sender profile
- `humanize` — strips AI-tells and rewrites in your voice (reads `sender-profile.md`)
- `story-consistency` — fact-checks drafts against your `sender-profile.md`

## Quick start

```bash
git clone https://github.com/<you>/gtm-cold-email-pack
cd gtm-cold-email-pack
```

Then in Claude Code, run `/welcome`. It interviews you, drafts `config/sender-profile.md`, and offers to symlink the pack's skills into `~/.claude/skills/` so you can use them from anywhere.

No Node, no scaffolder script — the setup itself is a Claude Code skill.

## Status

Pre-release. Skills are being genericized from a private working set. See `examples/` for sample inputs and outputs.

## License

MIT
