---
name: email-founder
description: Drafts a cold email to a founder/CEO using a product-user or ecosystem-peer frame. Reads the sender's positioning from ../../config/sender-profile.md. Triggers on "email the founder", "cold email for [company] CEO", "draft the founder email".
---

# email-founder

Pending genericization. Source: private `email-founder` skill, with all sender-specific references replaced by reads from `sender-profile.md`.

Frame logic:
- If target company is in sender's `ecosystem connections` → product-user frame
- Else → ecosystem-peer frame (no insider claim)
