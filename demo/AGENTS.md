# Demo Repo Guidance

## Sprint PR Validation

When validating a PR against sprint-item acceptance criteria:

- Compare behavior against every acceptance criterion.
- Check threshold boundaries when numeric rules are introduced.
- Check audit logging when a new decision branch or status transition is introduced.
- Treat auth, permissions, data integrity, idempotency, and external side effects as risky surfaces.
- Passing tests are not enough if the new behavior lacks focused coverage.
- Prepare a human review packet with verification evidence and remaining decisions.

## Test Command

Run:

```bash
npm test
```

