---
name: email-hiring-manager
description: Drafts a cold email to a hiring manager anchored on a specific JD. Reads sender positioning from ../../config/sender-profile.md. Trigger phrases — "email the hiring manager", "draft the role email", "cold email for [role] at [company]", "applying to [JD]".
argument-hint: [company name, recipient name, role title, optional JD content]
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Email Hiring Manager (JD-Anchored Fit Frame)

You are drafting a cold email from the sender to a **hiring manager** for a specific role. The email is anchored on the JD: it identifies 2–3 stated outcomes from the role, picks hero achievements from `sender-profile.md` that match those outcomes, and ends with a specific binary ask.

## Step 0: Read the sender profile

Before drafting, read `./config/sender-profile.md`. Pay attention to:

- **Hero achievements** — pick the ones that map directly to JD outcomes
- **Current status** — for the opening line
- **Voice rules** — apply on the rewrite pass

If `sender-profile.md` doesn't exist, stop and tell the user to run `/welcome` first.

## When to use this skill

Use when ALL of the following are true:

- The recipient is a hiring manager or recruiter for a specific role
- The user has the JD in hand (pasted, file path, or URL)
- The user wants the email anchored on JD fit, not on product/ecosystem connection or stage match

## When NOT to use this skill

- If the recipient is a founder/CEO and there's a product or ecosystem tie → use `email-founder` (warmer frame)
- If the recipient is a Head of Growth and stage-match is the hook → use `email-growth-leader`
- If there's no JD in hand → ask for the JD first. The skill collapses without one.

## Prerequisites

Before drafting, gather:

1. **Recipient name and title** — hiring manager, recruiter, talent partner
2. **Company name and role title** — exact role as listed
3. **JD content** — pasted, URL, or file path. Required.
4. **Sender's hero achievements** — pulled from `sender-profile.md`

## The frame: outcomes, not responsibilities

Most JD-anchored cold emails fail because they mirror the JD's **responsibilities** ("I'm great at owning growth experiments") instead of the JD's **outcomes** ("I just did this thing the JD says you need done"). The hiring manager scans for: did this person already produce the outcome we're hiring for?

## Email structure

### 1. Subject line

`{Role title} — already shipped this`

Or:

`Re: {Role title} at {Company}`

Avoid generic applicant subject lines.

### 2. Opening (1 sentence)

State the role and the sender's current status concisely.

**Template:** `Saw the {Role} role at {Company}. I {sender's current status from sender-profile.md} — read the JD and three things lined up:`

### 3. Three JD-mapped bullets

Each bullet pairs a JD outcome with a sender achievement. Format:

`- JD wants: {outcome paraphrased from JD}. I {action verb} {hero achievement that matches}.`

Pick three. Not four, not two. The bullets should:

- **Quote the outcome from the JD verbatim or near-verbatim** so the hiring manager recognizes it
- **Pair with a metric-led hero achievement** from `sender-profile.md`
- **Stay in active voice** ("I built X" not "X was built")

### 4. The honest gap (optional, 1 sentence)

If there's a genuine gap between sender and the JD, acknowledge it briefly. Honesty signals self-awareness and preempts the "are they being real about the gap?" question.

`The one stretch is {gap}, but {how the sender will close it / what compensates}.`

Skip this if there's no genuine gap.

### 5. The ask (1 sentence, single CTA)

`Worth a 20-minute conversation? Happy to walk through {specific JD outcome} in detail.`

One ask. The "walk through {outcome}" specificity gives the hiring manager a reason to say yes.

### 6. Sign-off

```
Thanks,
{FirstName}
```

## Reference structure (anonymized)

```
Subject: {Role} — already shipped this

Hey {FirstName},

Saw the {Role} role at {Company}. I {current status} — read the JD and three things lined up:

- JD wants: {paraphrased outcome 1}. I {hero achievement 1 with metric}.
- JD wants: {paraphrased outcome 2}. I {hero achievement 2 with metric}.
- JD wants: {paraphrased outcome 3}. I {hero achievement 3 with metric}.

{Optional honest gap, one sentence.}

Worth a 20-minute conversation? Happy to walk through {specific outcome} in detail.

Thanks,
{FirstName}
```

Total body: ~110–130 words.

## Adaptation rules

1. **Bullets must map to JD outcomes, not JD responsibilities.** Outcomes are what they want done. Responsibilities are how they want it done. Mirror outcomes.
2. **If the JD has fewer than three clear outcomes, drop to two bullets.** Don't pad.
3. **Pull achievements from `sender-profile.md` only — never invent.** If no achievement matches a JD outcome, don't claim one. The skill is JD-fit, not JD-roleplay.
4. **The honest-gap line is optional, not required.** Only include if there's a real gap and a real compensating angle.

## Voice rules (from sender-profile.md)

Apply the **Voice rules** section of `sender-profile.md` on the rewrite pass. The `humanize` skill should run as a final pass.

Default cuts:

- No "I'd love the opportunity to..." (applicant energy)
- No "I'm excited to apply" (applicant energy)
- No three-option asks
- No mirroring back the JD verbatim ("As your JD mentions, you're looking for...")

## After drafting

- Show the full email to the user
- Run `story-consistency` against `sender-profile.md` to fact-check the JD-mapped bullets — over-claim is the biggest risk in this frame
- Run `humanize` as a final voice pass
- Do NOT save to a file unless asked
