---
name: sprint-pr-validation
description: Validate a pull request or diff against sprint item acceptance criteria before human review. Use when a team wants Codex to inspect ticket context, PR changes, repo guidance, tests, risky behavior changes, and prepare a concise review packet.
---

# Sprint PR Validation

Use this skill when a PR, branch, or pasted diff is ready for review and the team wants Codex to validate it against the sprint item before human reviewers spend time on it.

## Inputs To Look For

- Sprint item, ticket, PRD, GitHub issue, Linear/Jira item, or pasted Slack context
- Acceptance criteria or expected behavior
- PR diff, branch, or changed files
- Applicable `AGENTS.md` review guidance
- Test commands, CI logs, or local verification instructions

If acceptance criteria are missing or ambiguous, call that out before judging the implementation. Do not invent product requirements.

## Workflow

1. **Understand the sprint item**
   - Extract the user story, acceptance criteria, non-goals, and explicit constraints.
   - Mark unclear requirements as open questions.

2. **Inspect the change**
   - Review the PR diff or changed files.
   - Identify behavior changes, new branches, new states, side effects, and data writes.

3. **Compare against acceptance criteria**
   - Build a small coverage table: criterion, status, evidence.
   - Distinguish covered, partially covered, missing, and unclear criteria.

4. **Check risky behavior**
   - Pay extra attention to auth, permissions, audit logs, idempotency, thresholds, concurrency, data integrity, external calls, and rollback behavior.
   - Look for changes that pass basic tests but violate business rules.

5. **Find test gaps**
   - Identify missing edge cases, weak assertions, untested branches, and boundary conditions.
   - Prefer focused tests over broad snapshots or brittle mocks.

6. **Verify**
   - Run relevant tests when available and safe.
   - If tests cannot be run, state exactly why and list the command that should be run.
   - Do not claim verification without evidence.

7. **Propose or apply focused fixes**
   - Fix only issues directly required by the acceptance criteria or review risk.
   - Keep changes small and reviewable.
   - Do not broaden scope or add unrelated abstractions.

8. **Prepare the human review packet**
   - Summarize readiness, acceptance criteria coverage, verification evidence, residual risks, and human decisions.
   - Include the exact commands run and results.

9. **Capture reusable lessons**
   - If a recurring rule appears, suggest an `AGENTS.md` or skill update.
   - Examples: threshold boundaries must be tested, audit events are required for new decision branches, status changes need downstream compatibility checks.

## Output Format

Use this structure:

```markdown
## Validation Summary

## Acceptance Criteria Coverage

| Criterion | Status | Evidence |
| --- | --- | --- |

## Risky Behavior Changes

## Missing Tests

## Verification Evidence

## Focused Fixes

## Human Review Packet

## Suggested AGENTS.md Or Skill Updates
```

## Rules

- Do not replace human review.
- Do not invent acceptance criteria.
- Do not treat passing CI as sufficient if behavior is untested.
- Do not apply broad refactors during validation.
- Do not hide uncertainty; mark it as an open question.
- Always preserve production accountability with the human reviewer.

