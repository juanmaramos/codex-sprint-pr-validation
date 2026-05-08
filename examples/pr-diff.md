# Example PR Diff

This diff is intentionally incomplete. It looks plausible, but it misses one acceptance criterion and one boundary test.

```diff
diff --git a/src/customerRequests.ts b/src/customerRequests.ts
index 81ef782..6f2a901 100644
--- a/src/customerRequests.ts
+++ b/src/customerRequests.ts
@@ -1,18 +1,35 @@
 export type RequestStatus =
   | "queued"
   | "processed"
+  | "manual_review_required";
 
 export type CustomerRequest = {
   id: string;
   customerId: string;
   riskScore: number;
   status: RequestStatus;
 };
 
 export type AuditLogEntry = {
   requestId: string;
   action: string;
   actor: string;
   createdAt: string;
 };
 
+const MANUAL_REVIEW_THRESHOLD = 80;
+
 export function processCustomerRequest(
   request: CustomerRequest,
   auditLog: AuditLogEntry[]
 ): CustomerRequest {
+  if (request.riskScore > MANUAL_REVIEW_THRESHOLD) {
+    return {
+      ...request,
+      status: "manual_review_required",
+    };
+  }
+
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
diff --git a/tests/customerRequests.test.ts b/tests/customerRequests.test.ts
index b973cf1..a641f62 100644
--- a/tests/customerRequests.test.ts
+++ b/tests/customerRequests.test.ts
@@ -24,3 +24,20 @@ describe("processCustomerRequest", () => {
     expect(auditLog).toHaveLength(1);
   });
+
+  it("requires manual review for very high-risk requests", () => {
+    const auditLog: AuditLogEntry[] = [];
+    const request: CustomerRequest = {
+      id: "req_002",
+      customerId: "cus_456",
+      riskScore: 95,
+      status: "queued",
+    };
+
+    const result = processCustomerRequest(request, auditLog);
+
+    expect(result.status).toBe("manual_review_required");
+    expect(auditLog).toHaveLength(0);
+  });
 });
```
