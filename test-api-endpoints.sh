#!/bin/bash
API="https://job-assync-api.ddw1sl.easypanel.host"
AUTH="Authorization: Bearer jsk_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"
ORG="X-Organization-Id: org_demo_001"

echo "=== 1. GET /api/stats ==="
curl -s -w "\nHTTP_CODE:%{http_code}" -H "$AUTH" -H "$ORG" "$API/api/stats" | tail -5

echo -e "\n\n=== 2. GET /api/stats/timeline?hours=24 ==="
curl -s -w "\nHTTP_CODE:%{http_code}" -H "$AUTH" -H "$ORG" "$API/api/stats/timeline?hours=24" | head -c 200

echo -e "\n\n=== 3. GET /api/jobs (limit=3) ==="
curl -s -w "\nHTTP_CODE:%{http_code}" -H "$AUTH" -H "$ORG" "$API/api/jobs?limit=3" | head -c 300

echo -e "\n\n=== 4. GET /api/queues ==="
curl -s -w "\nHTTP_CODE:%{http_code}" -H "$AUTH" -H "$ORG" "$API/api/queues" | head -c 300

echo -e "\n\n=== 5. GET /api/recurring-jobs ==="
curl -s -w "\nHTTP_CODE:%{http_code}" -H "$AUTH" -H "$ORG" "$API/api/recurring-jobs" | head -c 300

echo -e "\n\n=== 6. GET /api/apikeys ==="
curl -s -w "\nHTTP_CODE:%{http_code}" -H "$AUTH" -H "$ORG" "$API/api/apikeys" | head -c 300
