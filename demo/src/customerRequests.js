export const MANUAL_REVIEW_THRESHOLD = 80;

export function processCustomerRequest(request, auditLog) {
  if (request.riskScore > MANUAL_REVIEW_THRESHOLD) {
    return {
      ...request,
      status: "manual_review_required",
    };
  }

  auditLog.push({
    requestId: request.id,
    action: "processed",
    actor: "system",
    createdAt: new Date().toISOString(),
  });

  return {
    ...request,
    status: "processed",
  };
}

