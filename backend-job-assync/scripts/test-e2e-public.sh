#!/bin/bash
# Teste E2E do JobSync usando APIs públicas

API_URL="https://job-assync-api.ddw1sl.easypanel.host"
API_KEY="jsk_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"
ORG_ID="org_demo_001"

echo "=========================================="
echo "  JobSync E2E Test - APIs Públicas"
echo "=========================================="
echo ""

# Função para fazer request
test_job() {
    local name=$1
    local url=$2
    local method=$3
    local payload=$4

    echo "📤 Testando: $name"
    echo "   URL: $url"
    echo "   Method: $method"

    response=$(curl -s -X POST "$API_URL/api/jobs" \
        -H "Authorization: Bearer $API_KEY" \
        -H "Content-Type: application/json" \
        -H "X-Organization-Id: $ORG_ID" \
        -d "{
            \"queue\": \"test-public-api\",
            \"webhookUrl\": \"$url\",
            \"webhookMethod\": \"$method\",
            \"payload\": $payload
        }")

    echo "   Response: $response" | head -c 200
    echo ""
    echo "---"
}

echo "🌐 Teste 1: HTTPBin POST (simples)"
test_job "HTTPBin POST" "https://httpbin.org/post" "POST" '{"nome": "JobSync Test", "email": "teste@exemplo.com"}'

echo ""
echo "🌐 Teste 2: HTTPBin GET (com query params)"
test_job "HTTPBin GET" "https://httpbin.org/get?test=job-sync&timestamp=$(date +%s)" "GET" '{"filtro": "ativo"}'

echo ""
echo "🌐 Teste 3: HTTPBin PUT"
test_job "HTTPBin PUT" "https://httpbin.org/put" "PUT" '{"update": true, "valor": 123}'

echo ""
echo "🌐 Teste 4: HTTPBin DELETE"
test_job "HTTPBin DELETE" "https://httpbin.org/delete" "DELETE" '{"id": 999}'

echo ""
echo "🌐 Teste 5: ViaCEP (API Brasil)"
test_job "ViaCEP" "https://viacep.com.br/ws/01001000/json/" "GET" '{"cep": "01001000"}'

echo ""
echo "🌐 Teste 6: UUID Generator"
test_job "UUID" "https://httpbin.org/uuid" "GET" '{}'

echo ""
echo "🌐 Teste 7: Headers Custom"
test_job "Custom Headers" "https://httpbin.org/headers" "GET" '{"X-Custom-Header": "JobSync-Test"}'

echo ""
echo "=========================================="
echo "  Jobs criados! Verificando status..."
echo "=========================================="

sleep 5

echo ""
echo "📋 Lista de jobs:"
curl -s -X GET "$API_URL/api/jobs?limit=10" \
    -H "Authorization: Bearer $API_KEY" \
    -H "X-Organization-Id: $ORG_ID" | jq '.jobs[:5] | .[] | {id: .id, status: .status, webhookUrl: .webhookUrl}' 2>/dev/null || echo "Erro ao listar"

echo ""
echo "📊 Estatísticas:"
curl -s -X GET "$API_URL/api/stats/overview" \
    -H "Authorization: Bearer $API_KEY" \
    -H "X-Organization-Id: $ORG_ID" | jq '.' 2>/dev/null || echo "Erro ao buscar stats"

echo ""
echo "✅ Teste E2E concluído!"
