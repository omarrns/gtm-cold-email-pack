---
name: story-consistency
description: Fact-checks a draft against the sender's profile. Flags overclaims, underclaims, fabricated metrics, and dealbreaker violations. Reads ../../config/sender-profile.md. Triggers on "fact-check this", "audit this for accuracy", "does this match my profile?". Run before any email ships externally.
---

# story-consistency

Pending genericization. Source: private `story-consistency` skill, with `STORY.md` references replaced by `sender-profile.md` reads.

Returns a categorized diff per claim in the draft:
- **Accurate** — backed by sender profile
- **Drift** — close but slightly off
- **Over-claimed** — claim exceeds what the profile supports
- **Under-sold** — profile supports a stronger claim
- **Fabricated** — no support in profile
- **Dealbreaker** — violates a hard rule from `Dealbreakers` section
