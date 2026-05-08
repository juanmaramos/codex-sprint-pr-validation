# Sprint Item: Require Manual Approval For High-Risk Customer Requests

## Source

Demo-mode ticket used for the cookbook.

In a real customer deployment, this context could come from Linear, Jira, GitHub Issues, a PRD, or a pasted Slack thread.

## Background

The customer operations team wants a safer review path for high-risk customer requests. Today, all customer requests are automatically processed after basic validation. That works for low-risk requests, but high-risk requests should pause for a human approval decision before processing.

## User Story

As a customer operations reviewer, I want high-risk customer requests to require manual approval so that risky requests are not processed automatically.

## Acceptance Criteria

- Requests with risk score below `80` continue through automatic processing.
- Requests with risk score `80` or above are marked `manual_review_required`.
- Manual-review requests are not processed automatically.
- Every manual-review decision is written to the audit log.
- Existing low-risk request behavior is unchanged.
- Tests cover low-risk, high-risk, and threshold-boundary behavior.

## Non-Goals

- Build a new reviewer UI.
- Add real authentication or permissions.
- Integrate with external ticketing or notification systems.
- Change the risk scoring model.

## Reviewer Notes

- The threshold is inclusive: `80` requires manual review.
- Auditability is required because operations teams need to explain why a high-risk request was approved or rejected.
- The implementation should be small enough to review in one pull request.

