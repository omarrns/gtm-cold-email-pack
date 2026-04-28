---
name: email-founder
description: Drafts a cold email to a founder or CEO at a company where the sender has a PRODUCT CONNECTION or ECOSYSTEM CONNECTION. Uses a "product user + specific business gap insight" frame. Reads sender positioning from ../../config/sender-profile.md. Trigger phrases — "email the founder", "cold email for [company] CEO", "founder email", "draft the founder email."
argument-hint: [company name, founder name, optional gap observation]
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Email Founder / CEO (Product User + Insight Frame)

You are drafting a cold email from the sender to a **founder, co-founder, or CEO** at a company where the sender has a **product or ecosystem connection** (uses their product, built on their API, is in their ecosystem). The recipient cares that the sender loves their product, sees a specific gap in their business, and has proof of solving that exact type of problem.

## Step 0: Read the sender profile

Before drafting anything, read `./config/sender-profile.md` (or `../../config/sender-profile.md` from inside the skills tree). This file is the canonical source for the sender's positioning, hero achievements, voice rules, and dealbreakers. If it doesn't exist, stop and tell the user to run `/welcome` to scaffold it.

Pay attention to:

- **Current status** — what the sender just left or is doing now
- **Hero achievements** — pick one that maps to the gap observation
- **Ecosystem connections** — verify the target company is in the list, otherwise ask the user to confirm the connection
- **Voice rules** — apply on the rewrite pass
- **Dealbreakers** — never violate

## When to use this skill

Use when ALL of the following are true:

- The recipient is a **founder, co-founder, CEO, or senior executive**
- The sender has a **genuine product connection** (uses their product, built on their API, is in their ecosystem) OR a **genuine ecosystem connection** (overlapping tools, adjacent space, shared customers)

## When NOT to use this skill

- If the recipient is a Head of Growth / VP Growth → use `email-growth-leader`
- If the email is anchored on a specific role/JD → use `email-hiring-manager`
- If the sender has NO product or ecosystem connection → this template loses its power. Ask the user what their connection is before proceeding. Do not fabricate one.

## Prerequisites

Before drafting, gather:

1. **Recipient name** — first name only in the salutation
2. **Company name and product** — what they build
3. **Sender's specific connection** — pulled from `sender-profile.md` ecosystem connections, OR confirmed by the user
4. **A specific business gap observation** — concrete, observable. Not "your content could be better" but "Competitor X is defining your positioning when Googling 'Y alternatives'." If the user doesn't have one, ask. Do not fabricate.
5. **Hero achievement to bridge with** — pulled from `sender-profile.md`, picked to match the gap

## Why this frame works

1. **Product user credibility is instant trust.** The founder knows this isn't a cold applicant.
2. **A specific gap observation shows genuine care.** "It bugs me when X is happening" — slightly confrontational, but from a place of product love.
3. **A relevant hero achievement creates instant credibility for the fix.** The gap sets up a problem; the achievement proves the sender has solved this category before.
4. **A casual, conditional ask removes pressure.** Peer saying "if this is relevant, let's talk."
5. **Short and direct.** Total body should never exceed 150 words and ideally less.

## Email structure

### 1. Subject line

`interested in working at [Company].`

- Lowercase "interested" — intentional. Reads like a real person typed it.
- Period at the end, not a question mark. Declarative.

### 2. Opening (1 sentence)

**Template:** `{FirstName}, I figured I'd reach out directly as I'm interested in working at {Company}.`

- First name only. No "Hey" or "Hi" — just the name and a comma.
- "I figured I'd reach out directly" — casual, peer-level, no games.

### 3. "Quick context on me:" header + 3 bullets

Use the exact header `Quick context on me:` — casual, frames the bullets as context not pitch.

**Bullet 1: Product user proof**
Show that the sender uses their product in production. Be specific about the use case. Pull current role from `sender-profile.md` → current_status.

**Bullet 2: Builder identity**
The tools and stack that signal the sender ships things. Pull from `sender-profile.md` → hero achievements / voice. Include the target company's product naturally if relevant.

**Bullet 3: Career thesis connection**
Connect the sender's career arc to the problem space. Don't explain the thesis — just state the connection.

### 4. The specific business gap observation (2–3 sentences)

This is the section that makes this template different. Requirements:

- **Start with genuine product appreciation:** "Genuinely love {Company}'s product, which is why..."
- **State a specific, observable gap:** Not "your content could be better" but a concrete absence with a competitor name, search query, content type, or funding contrast.
- **Use the "it bugs me when" energy:** Slightly confrontational, coming from care.
- **Quantify or contextualize if possible:** "Zero enterprise case studies on the site, and you just raised at $X."
- **End with a solvable framing:** "That's a fixable gap with [specific approach]."

**Critical constraint:** This observation MUST be genuinely specific. If the user doesn't have a real gap observation, DO NOT fabricate one. Ask. A generic observation destroys the template.

### 5. Hero project bridge (1 sentence)

**Template:** `At {SenderLastCompany} I solved this with {HeroProjectName} — {one-sentence description relevant to the gap}.`

Pick the hero achievement from `sender-profile.md` that maps closest to the gap. Adapt the description to the gap, not the other way around.

### 6. Casual ask (1 sentence)

**Template:** `Would love to chat if {relevant hiring area} is on your radar.`

- Match the hiring area to what makes sense given the gap (growth, content engineering, GTM, etc.)
- Conditional and low-pressure. One ask only.

### 7. Sign-off

```
Hope to hear back,
{FirstName}
```

- "Hope to hear back," — warmer than "Best,". Default to this unless sender's voice rules say otherwise.

## Reference structure (anonymized)

```
Subject: interested in working at [Company].

[FirstName], I figured I'd reach out directly as I'm interested in working at [Company].

Quick context on me:
- {current role} and I've been using [Company]'s [product] in prod (like a lot) — [specific use case].
- I build with these tools daily: {tool list from sender-profile, including target's product if relevant}.
- {career thesis one-liner connecting to the company's problem space}.

Genuinely love [Company]'s product, which is why it bugs me when [specific observable gap with a name/number/competitor]. {one sentence of additional context or contrast}. That's a fixable gap with [specific approach].

At {sender's last company} I solved this with {hero project} — {one-sentence description matched to gap}.

Would love to chat if {relevant hiring area} is on your radar.

Hope to hear back,
{FirstName}
```

## Voice rules (from sender-profile.md)

After drafting, read the **Voice rules** section of `sender-profile.md` and apply it. The `humanize` skill should run as a final pass before delivery.

Default cuts (apply even if profile says nothing):

- No em-dashes (use commas, semicolons, or split sentences)
- No "I hope this finds you well"
- No corporate hedging ("potentially," "leverage," "synergy")
- No three-option asks
- No research mirror-backs ("I saw you raised $X")

## Adaptation rules

1. **The gap observation must be genuinely specific.** If the user has one, use it. If not, ask. The skill's value collapses on a generic observation.
2. **Adjust the hero project description to match the gap.** Don't paste the canonical description. Pick the aspect that maps to the gap.
3. **Adjust bullet 3 to connect the sender's thesis to THEIR problem space.** Look at the company's product and find the genuine connection.
4. **If the sender has no product connection, the ecosystem connection must be real.** Shared customers, shared tools, adjacent market — something concrete.

## Operational notes

- **Don't batch-send this template.** Each email requires a genuinely specific gap observation.
- **Fix typos before sending.** Especially company name, founder name, and competitor names.
- **Total body: ~150 words max.** Shorter is better.

## After drafting

- Show the full email to the user for review
- Run the `story-consistency` skill against `sender-profile.md` to fact-check
- Run the `humanize` skill as a final voice pass
- Do NOT save to a file unless asked
- If the user wants it in their email client, output a copy-paste-ready block
