# Expected Findings

Use this file as instructor notes or as a reference after running the workflow. Do not pass this file to Codex during the validation step.

Codex should identify these gaps from the sprint item, PR diff, repo guidance, and verification evidence:

- The implementation uses `>` instead of `>=`, so risk score `80` is processed automatically.
- The code does not write an audit log entry when a request enters manual review.
- Tests do not cover the threshold boundary at `80`.

The strongest validation output should connect each finding back to an acceptance criterion.

