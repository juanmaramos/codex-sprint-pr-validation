# Demo Repo

This tiny Node.js module is intentionally flawed for the cookbook exercise.

Run from this folder:

```bash
npm test
```

The validation tests should fail before the focused fix because:

- risk score `80` is processed automatically even though the sprint item says the threshold is inclusive
- manual-review routing does not write an audit event

Use Codex to inspect the sprint item, the implementation, the tests, and `demo/AGENTS.md`, then apply the smallest fix.

