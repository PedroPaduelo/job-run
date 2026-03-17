#!/bin/bash
FRONTEND="https://job-async.ddw1sl.easypanel.host"

echo "=== Simulando navegador acessando frontend ==="
echo "GET $FRONTEND"
curl -s -c /tmp/cookies.txt -b /tmp/cookies.txt "$FRONTEND" | head -c 500
echo -e "\n\n=== Extraindo asset principal ==="
ls -lh /workspace/temp-orquestrador/users/5aaf347f-952f-4355-8513-ac3f4024b43e/projetos/job-run/frontend-job-async/dist/assets/*.js
echo ""

# Agora simula as chamadas de API que o frontend faria após carregar
API="https://job-assync-api.ddw1sl.easypanel.host"
TOKEN="jsk_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"
ORG="org_demo_001"

echo "=== API calls after page load ==="
echo "1) GET /api/stats"
curl -s -H "Authorization: Bearer $TOKEN" -H "X-Organization-Id: $ORG" "$API/api/stats" | head -c 250
echo -e "\n"

echo "2) GET /api/jobs?limit=5"
curl -s -H "Authorization: Bearer $TOKEN" -H "X-Organization-Id: $ORG" "$API/api/jobs?limit=5" | head -c 250
echo -e "\n"

echo "3) GET /api/queues"
curl -s -H "Authorization: Bearer $TOKEN" -H "X-Organization-Id: $ORG" "$API/api/queues" | head -c 250
echo -e "\n"

echo "4) GET /api/stats/timeline?hours=24"
curl -s -H "Authorization: Bearer $TOKEN" -H "X-Organization-Id: $ORG" "$API/api/stats/timeline?hours=24" | head -c 250
echo -e "\n"

echo "=== Verificando se frontend HTML contém os arquivos JS corretos ==="
curl -s "$FRONTEND" | grep -o 'src="[^"]*\.js"' | head -1
echo ""

echo "=== Verificando se frontend responde 200 com conteúdo válido ==="
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$FRONTEND")
echo "Status: $HTTP_CODE"
if [ "$HTTP_CODE" = "200" ]; then
  echo "✅ Frontend online"
else
  echo "❌ Frontend com problema"
fi
