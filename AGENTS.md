# AGENTS.md

## Project Purpose

This repo demonstrates one practical Codex deployment workflow:

> Validate sprint items before human PR review.

The goal is to help engineering teams use Codex to prepare better review evidence, not to automate merge decisions.

## Workflow

Use this workflow throughout the repo:

```text
sprint item ready for PR
-> acceptance criteria
-> PR diff
-> repo guidance
-> Codex validation
-> missing tests / risky behavior found
-> verification
-> focused fix
-> human review packet
-> reusable skill update
```

## Review Guidance

When validating a PR against sprint-item acceptance criteria:

- Compare behavior against every acceptance criterion.
- Check threshold boundaries when numeric rules are introduced.
- Check audit logging when a new decision branch or status transition is introduced.
- Treat auth, permissions, data integrity, idempotency, and external side effects as risky surfaces.
- Passing tests are not enough if the new behavior lacks focused coverage.
- Prepare a human review packet with verification evidence and remaining decisions.

## What To Avoid

- Do not broaden the example into a generic skills library.
- Do not add a prototype app.
- Do not treat Codex output as merge approval.
- Do not invent acceptance criteria.
- Do not hide uncertainty; mark it as an open question.

## Human Ownership

Codex may draft validation notes, missing test suggestions, focused fixes, review packets, and skill updates.

Humans own product intent, acceptance criteria quality, architecture judgment, security judgment, final review, merge, rollout, and production accountability.

