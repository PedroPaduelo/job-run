#!/bin/bash
API="https://job-assync-api.ddw1sl.easypanel.host"
AUTH="Authorization: Bearer jsk_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"
ORG="X-Organization-Id: org_demo_001"

echo "=== Test: /api/jobs with empty status param ==="
curl -s -w "\nHTTP_CODE:%{http_code}" -H "$AUTH" -H "$ORG" "$API/api/jobs?status=&queue=&from=&to=&limit=20&offset=0" | head -c 200

echo -e "\n\n=== Test: /api/queues/:id/stats ==="
curl -s -w "\nHTTP_CODE:%{http_code}" -H "$AUTH" -H "$ORG" "$API/api/queues/cmmu7hhhl0001wr2v3t68mb6k/stats" | head -c 200

echo -e "\n\n=== Test: /api/jobs/:id ==="
curl -s -w "\nHTTP_CODE:%{http_code}" -H "$AUTH" -H "$ORG" "$API/api/jobs/cmmu88rpi0005n63h9om9mbpe" | head -c 300
