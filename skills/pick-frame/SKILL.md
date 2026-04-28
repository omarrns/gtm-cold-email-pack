---
name: pick-frame
description: Router that selects the right cold-email skill given recipient role + sender profile. Reads ../../config/sender-profile.md and dispatches to email-founder, email-growth-leader, or email-hiring-manager. Triggers on "pick the right frame for [target]" or as the default entry point for cold-email work.
---

# pick-frame

Router logic:

1. Founder/CEO recipient → `email-founder`
2. VP/Head of Growth recipient → `email-growth-leader`
3. Hiring manager / role-specific outreach → `email-hiring-manager`

Within `email-founder`, sub-frame is decided by cross-referencing target company against sender's `ecosystem connections` list:
- Match → product-user frame
- No match → ecosystem-peer frame

No domain-insider branch. If a sender has genuine insider context for a market, that framing belongs in a private skill, not here.
