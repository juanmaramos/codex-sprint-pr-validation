# Validate Sprint Items Before Human PR Review With Codex

This repo is a practical Codex cookbook for enterprise engineering teams.

It shows how Codex can help teams validate sprint items before human PR review by comparing acceptance criteria, PR diffs, repo guidance, and test evidence.

## Why This Matters

AI coding can increase pull request volume faster than review capacity. The bottleneck shifts from writing code to trusting change.

This cookbook demonstrates one bounded workflow:

```text
sprint item ready for PR
-> acceptance criteria
-> PR diff
-> AGENTS.md repo rules
-> Codex validation
-> missing tests / risky behavior found
-> verification
-> focused fix
-> human review packet
-> reusable skill update
```

IMAGE GOES HERE: `assets/sprint-pr-validation-flow.svg`

## What Is Included

- [cookbook/validate-sprint-items-before-pr-review.md](cookbook/validate-sprint-items-before-pr-review.md): the main step-by-step cookbook.
- [skills/sprint-pr-validation/SKILL.md](skills/sprint-pr-validation/SKILL.md): one reusable Codex skill.
- [demo/](demo/): a tiny runnable repo with intentionally failing validation tests.
- [examples/](examples/): sprint item, PR diff, validation output, final review packet, and focused fix.
- [workshop-lab.md](workshop-lab.md): a 45-minute enablement lab for engineering teams.
- [assets/](assets/): visuals for the README, article, or presentation.

## Recommended Reading Path

1. Read this README.
2. Read the [cookbook](cookbook/validate-sprint-items-before-pr-review.md).
3. Run the [demo](demo/).
4. Inspect the [reusable skill](skills/sprint-pr-validation/SKILL.md).
5. Use the [workshop lab](workshop-lab.md) to teach the workflow.

## Run The Demo

The demo is intentionally flawed before the focused fix.

```bash
cd demo
npm test
```

Expected result before the fix:

```text
pass 2
fail 2
```

The failures show that:

- risk score `80` is processed automatically even though the sprint item says the threshold is inclusive
- manual-review routing does not write an audit event

The focused fix is included in [examples/focused-fix.diff](examples/focused-fix.diff).

## Demo Prompt

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

## Demo Mode And Enterprise Mode

Demo mode uses local markdown files so the workflow is reproducible.

Enterprise mode can use the same pattern with:

- Linear or Jira acceptance criteria
- GitHub PR diffs
- Slack context
- `AGENTS.md`
- CI logs
- repo test commands

## Human Ownership

Codex prepares evidence. Humans still own product intent, acceptance criteria quality, architecture judgment, security judgment, final review, merge, rollout, and production accountability.

## License

MIT. See [LICENSE](LICENSE).

