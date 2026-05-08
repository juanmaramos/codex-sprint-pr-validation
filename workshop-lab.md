# Workshop Lab: Validate Sprint Items Before Human PR Review

## Purpose

Help an engineering team turn one sprint item and PR into a repeatable Codex validation workflow.

## Time

45 minutes

## Audience

- engineering leads
- senior engineers
- platform engineers
- QA or release owners
- teams adopting Codex for production codebases

## Learning Goals

By the end of the lab, participants can:

- identify useful acceptance criteria for Codex validation
- configure repo-specific review guidance in `AGENTS.md`
- ask Codex to compare a PR against a sprint item
- interpret missing-test and risky-behavior findings
- prepare a human review packet
- capture a reusable rule in a skill or `AGENTS.md`

## Materials

- [examples/sprint-item.md](examples/sprint-item.md)
- [examples/pr-diff.md](examples/pr-diff.md)
- [skills/sprint-pr-validation/SKILL.md](skills/sprint-pr-validation/SKILL.md)
- [cookbook/validate-sprint-items-before-pr-review.md](cookbook/validate-sprint-items-before-pr-review.md)

## Exercise

## Facilitator Agenda

| Time | Activity | Output |
| --- | --- | --- |
| 0-5 min | Explain the bottleneck: PR volume increased, validation is now the limiter | Shared problem statement |
| 5-10 min | Read the sprint item and acceptance criteria | Criteria list and open questions |
| 10-18 min | Inspect the PR diff and demo tests | Initial risk notes |
| 18-28 min | Run the Codex validation prompt | Validation table and missing-test findings |
| 28-35 min | Review verification evidence and focused fix | Human review packet draft |
| 35-42 min | Capture one reusable rule | `AGENTS.md` or skill update |
| 42-45 min | Debrief rollout fit | Pilot decision |

## Participant Deliverables

Each participant or group should produce:

- acceptance criteria coverage table
- at least one missing-test or risky-behavior finding
- verification command and result
- human review packet
- one reusable rule for `AGENTS.md` or the skill

### Step 1: Read The Sprint Item

Identify:

- acceptance criteria
- non-goals
- ambiguous requirements
- risky behavior areas

### Step 2: Inspect The PR Diff

Find:

- behavior changes
- new branches or statuses
- data writes
- missing tests
- likely downstream assumptions

### Step 3: Run The Codex Validation Prompt

Use:

```text
Use $sprint-pr-validation.

Validate this PR before human review.

Inputs:
- Sprint item: examples/sprint-item.md
- PR diff: examples/pr-diff.md
- Repo guidance: demo/AGENTS.md
- Demo source: demo/src/customerRequests.js
- Demo tests: demo/tests/customerRequests.test.js

Compare the PR against the acceptance criteria.
Identify missing tests, risky behavior changes, and verification gaps.
Prepare a human review packet.
```

### Step 4: Review The Output

Discuss:

- What did Codex catch?
- What did it miss?
- Which findings require human judgment?
- Which findings can be converted into reusable repo guidance?

### Step 5: Improve The Workflow

Add one reusable rule to `AGENTS.md` or the skill.

Example:

```md
When a change introduces a numeric threshold, validate the threshold boundary explicitly.
```

## Debrief

Use these prompts:

- Where would this workflow fit in our current PR process?
- Which repos are safe first pilots?
- What test command should Codex run before review?
- Who owns acceptance criteria quality?
- What findings should block merge vs. inform review?
- What metrics would tell us this workflow is working?

## Good Answer Rubric

Strong outputs should:

- link each finding to an acceptance criterion or repo rule
- distinguish missing evidence from confirmed defects
- include the exact verification command and result
- keep fixes focused on the sprint item
- preserve human ownership of product and security decisions
- add one reusable rule that would help future PRs

## Suggested Metrics

- review latency
- missing-test findings per PR
- acceptance criteria gaps found before human review
- reviewer rework
- escaped defects related to sprint item behavior
- number of reusable rules added to `AGENTS.md` or skills
