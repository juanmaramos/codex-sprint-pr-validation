import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { processCustomerRequest } from "../src/customerRequests.js";

function createRequest(overrides = {}) {
  return {
    id: "req_001",
    customerId: "cus_123",
    riskScore: 25,
    status: "queued",
    ...overrides,
  };
}

describe("processCustomerRequest", () => {
  it("processes low-risk requests automatically", () => {
    const auditLog = [];
    const result = processCustomerRequest(createRequest({ riskScore: 25 }), auditLog);

    assert.equal(result.status, "processed");
    assert.equal(auditLog.length, 1);
    assert.equal(auditLog[0].action, "processed");
  });

  it("requires manual review for very high-risk requests", () => {
    const auditLog = [];
    const result = processCustomerRequest(createRequest({ riskScore: 95 }), auditLog);

    assert.equal(result.status, "manual_review_required");
  });

  it("requires manual review at the inclusive threshold", () => {
    const auditLog = [];
    const result = processCustomerRequest(createRequest({ riskScore: 80 }), auditLog);

    assert.equal(result.status, "manual_review_required");
  });

  it("writes an audit event when routing to manual review", () => {
    const auditLog = [];
    processCustomerRequest(createRequest({ riskScore: 95 }), auditLog);

    assert.equal(auditLog.length, 1);
    assert.equal(auditLog[0].action, "manual_review_required");
  });
});

