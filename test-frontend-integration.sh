#!/bin/bash
API="https://job-assync-api.ddw1sl.easypanel.host"
FRONTEND="https://job-async.ddw1sl.easypanel.host"

echo "=== FRONTEND INTEGRATION TEST ==="
echo "Frontend URL: $FRONTEND"
echo "API URL: $API"
echo ""

# Simulate frontend localStorage tokens (as set by bootstrap)
TOKEN="jsk_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"
ORG_ID="org_demo_001"

echo "1. Testing health endpoint..."
curl -s "$API/health" | head -c 100
echo -e "\n"

echo "2. Testing /api/stats (Dashboard loads this)..."
curl -s -H "Authorization: Bearer $TOKEN" -H "X-Organization-Id: $ORG_ID" "$API/api/stats" | head -c 200
echo -e "\n"

echo "3. Testing /api/jobs (Jobs page loads this)..."
curl -s -H "Authorization: Bearer $TOKEN" -H "X-Organization-Id: $ORG_ID" "$API/api/jobs?limit=5" | head -c 300
echo -e "\n"

echo "4. Testing /api/queues (Queues page loads this)..."
curl -s -H "Authorization: Bearer $TOKEN" -H "X-Organization-Id: $ORG_ID" "$API/api/queues" | head -c 300
echo -e "\n"

echo "5. Testing /api/recurring-jobs (RecurringJobs page loads this)..."
curl -s -H "Authorization: Bearer $TOKEN" -H "X-Organization-Id: $ORG_ID" "$API/api/recurring-jobs" | head -c 200
echo -e "\n"

echo "6. Test CORS from frontend origin..."
curl -s -I -H "Origin: $FRONTEND" -H "Access-Control-Request-Method: GET" -X OPTIONS "$API/api/stats" 2>/dev/null | grep -i "access-control"
echo ""

echo "=== ALL TESTS COMPLETED ==="
