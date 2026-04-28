---
name: humanize
description: Strips AI-tells from a draft and rewrites it in the sender's voice. Reads voice rules from ../../config/sender-profile.md. Triggers on "humanize this", "make it sound like me", "de-AI this", "remove em-dashes". Run as a final pass before any email ships.
---

# humanize

Pending genericization. Source: private `humanize` skill, with hardcoded "Omar voice" rules replaced by reads from `sender-profile.md` → `Voice rules` section.

Default removals (before reading sender profile):
- em-dashes
- "I hope this finds you well"
- "I wanted to reach out"
- corporate hedging ("potentially," "leverage," "synergy")
- AI sign-offs ("Looking forward to hearing your thoughts!")
