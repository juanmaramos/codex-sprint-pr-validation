# Example Verification Output

## Command

```bash
cd demo
npm test
```

## Before Focused Fix

```text
FAIL demo/tests/customerRequests.test.js

processCustomerRequest
  ✓ processes low-risk requests automatically
  ✓ requires manual review for very high-risk requests
  ✕ requires manual review at the threshold
  ✕ writes an audit event when routing to manual review

Expected: "manual_review_required"
Received: "processed"

Test Suites: 1 failed, 1 total
Tests: 2 failed, 2 passed, 4 total
```

## After Focused Fix

```text
PASS demo/tests/customerRequests.test.js

processCustomerRequest
  ✓ processes low-risk requests automatically
  ✓ requires manual review for very high-risk requests
  ✓ requires manual review at the threshold
  ✓ writes an audit event when routing to manual review

Test Suites: 1 passed, 1 total
Tests: 4 passed, 4 total
```

## Verification Notes

- The focused test catches the threshold bug that basic high-risk coverage missed.
- Audit-log behavior is now verified for both automatic processing and manual-review routing.
- Human reviewers still need to decide whether later approve/reject actions require additional audit events.
