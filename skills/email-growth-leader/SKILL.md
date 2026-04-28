---
name: email-growth-leader
description: Drafts a cold email to a Head of Growth, VP Growth, or growth leader using a stage-matched builder frame. Reads sender positioning from ../../config/sender-profile.md. Trigger phrases — "email the head of growth", "draft the growth email", "outreach to [growth leader name]", "email for [company] growth role."
argument-hint: [company name, recipient name, role title]
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Email Growth Leader (Stage-Matched Builder Frame)

You are drafting a cold email from the sender to a **Head of Growth, VP Growth, Director of Growth, or growth team leader**. The framing is fundamentally different from the founder/CEO email: the recipient may not recognize the sender's last company by name, so the email leads with **what the sender just built and what happened**, not who the sender worked for.

## Step 0: Read the sender profile

Before drafting, read `./config/sender-profile.md`. Pay attention to:

- **Current status** — pull the descriptor for the sender's last company (stage, headcount, market) since the recipient may not know the name
- **Hero achievements** — pick proof points that match the recipient's stage and stack
- **Voice rules** — apply on the rewrite pass

If `sender-profile.md` doesn't exist, stop and tell the user to run `npx tsx scripts/init.ts` first.

## When to use this skill

Use when ANY of the following are true:

- The recipient is a Head of Growth, VP Growth, Director of Growth, or similar growth leader
- The role is Growth Ops, Growth Engineering, GTM Engineering, or Demand Gen — and reports to a growth leader

## When NOT to use this skill

- If the recipient is a founder or CEO → use `email-founder`
- If the email is anchored on a specific JD with structured requirements → use `email-hiring-manager`

## The key insight: stage-matched builder, not name recognition

A Head of Growth is evaluating: "Can this person build the growth infrastructure I need stood up right now?" They have a specific operational problem and need evidence the sender has solved it before. They care about **what was built, with what stack, and what happened** — not which market it was built in.

| What works                                | What doesn't                            |
| ----------------------------------------- | --------------------------------------- |
| "I just built what you need built"        | "I just left {company name they don't recognize}" |
| Operational proof carries                 | Domain credibility carries              |
| "Same stage, same problem, same stack"    | "Same buyer, same market"               |
| Slightly more proof-heavy email           | Short, insider-vibes email              |

## Prerequisites

Before drafting, gather:

1. **Recipient name and title** — Head of Growth, VP Growth, etc.
2. **Company name, stage, and headcount** — "same stage" is the hook
3. **Role title** — what specific role the sender is reaching out about
4. **Stage descriptor for sender's last company** — pulled from `sender-profile.md` (e.g., "enterprise AI startup, ~40 people"). The recipient should be able to map this to their own company.

## Email structure

### 1. Subject line

If the recipient might recognize the sender's last company (AI/tech, devtools), use:

`{LastCompany} to {TargetCompany}?`

Otherwise use a stage-matched alternative:

- `Just built this from scratch at an {stage descriptor}`
- `{Role title} — just did this at a {stage descriptor}`

**Avoid:** `Experienced growth marketer interested in {role}` (applicant energy)

### 2. Opening (1–2 sentences)

Lead with the **stage match** — describe the sender's last company by stage and size, and connect it to what the recipient's company needs right now.

**Template:** `I just left {stage descriptor} — built the entire {area} from zero.`

**Good openers:**

- "I just left {stage descriptor} — built the entire growth infrastructure from zero."
- "Saw the {role} role. {Company} is at the exact stage I just came from — building foundational growth systems for the first time."

**Bad openers:**

- "I just left {company name}, so I've been selling to the same buyer." (Recipient doesn't know the company.)
- "I noticed {company} is growing fast and hiring growth roles." (Generic.)

### 3. Proof bullets (3–4 bullets, no more)

Each bullet is 1–2 sentences. They prove **operational capability** — what was built, with what tools, and what happened.

**How to pick bullets:**

- **One stack bullet:** Name the tools the sender set up and wired together. Growth leaders care about tools because it tells them the sender can operate their infrastructure. Match the JD's tools where possible.
- **One automation/AI bullet:** Show the sender builds AI-powered systems, not just configures tools. Cite a specific outcome.
- **One identity bullet:** What kind of builder the sender is — the differentiating one-liner from `sender-profile.md`.
- **One revenue-lens bullet (optional):** If the sender has a sales/revenue background, show ops-from-the-revenue-side thinking in one line.

Pick bullets that match the JD's stated needs. If the JD names Clay, Salesforce, Looker, etc., make sure the stack bullet addresses them.

### 4. The bridge (1 sentence)

Connect the stage match explicitly:

`{Company} is at the exact stage I just came from — {one-line description of that stage}. That's where I'm strongest.`

### 5. The ask (1 sentence, single CTA)

One ask only. Don't hedge with a second option — two asks = decision fatigue.

`If this is relevant for the {role} role, I'd love to chat.`

**Bad:** "If you're the hiring manager, I'd love to chat. If not, happy to be pointed the right way."

### 6. Sign-off

```
Best,
{FirstName}
```

Or `Hope to hear back,` — either works.

## Reference structure (anonymized)

```
Hey {FirstName},

I just left {stage descriptor} — built the entire growth infrastructure from zero.

Quick context on me:
- Set up and wired the full stack — {tools matching the JD} — and built the data flows between them.
- Built AI-powered automation ({tools}) that {specific outcome with a number}.
- {Identity bullet — the differentiating one-liner}.
- {Optional revenue-lens bullet}.

{Company} is at the exact stage I just came from — {stage description}. That's where I'm strongest.

If this is relevant for the {role} role, I'd love to chat.

Best,
{FirstName}
```

Total body: ~120–130 words.

## Adaptation rules

1. **Describe the sender's last company by stage, not name.** Use descriptors the recipient can map to their own company: "enterprise AI startup, ~40 people" or "Sequoia-backed AI company, pre-Series B."
2. **Match the stack to the JD.** If the JD names specific tools, the stack bullet must address them — direct experience or analogous tools.
3. **Match the bridge to their specific stage.** Be specific: "building foundational growth systems for the first time," "scaling from $10M to $50M ARR," "standing up the first GTM function."
4. **If there's a thematic connection to the sender's thesis, add it.** Only if it's genuine, not forced.
5. **If the sender has a known gap for the role, consider acknowledging it.** Honesty over spin. One sentence.

## Voice rules (from sender-profile.md)

Apply the **Voice rules** section of `sender-profile.md` on the rewrite pass. The `humanize` skill should run as a final pass before delivery.

## Operational notes

- **Don't batch to dense markets.** No more than 3–4 per day to the same segment. Space across days and vary the opening line.
- **Fix typos before sending.** Misspelling the company name undercuts the "detail-oriented" positioning.

## After drafting

- Show the full email to the user
- Run `story-consistency` against `sender-profile.md`
- Run `humanize` as a final voice pass
- Do NOT save to a file unless asked
