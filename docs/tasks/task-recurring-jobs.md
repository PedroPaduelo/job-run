# Jobs Recorrentes (Recurring Jobs)

**Data:** 2026-03-16
**Status:** ✅ Implementado

## O que foi implementado

Funcionalidade completa de **Jobs Recorrentes** (tipo cron/interval) no JobSync, permitindo criar jobs que são executados automaticamente em intervalos regulares ou expressões cron.

### Funcionalidades

1. **Tipos de recorrência:**
   - **INTERVAL**: Executa a cada X minutos (1 a 525.600 minutos)
   - **CRON**: Executa baseado em expressão cron (ex: `0 9 * * *` = todo dia às 9h)

2. **Limites e controle:**
   - `maxRuns`: Número máximo de execuções
   - `recurrenceEndDate`: Data final para a recorrência
   - `continueOnFailure`: Continuar executando mesmo se houver falha

3. **Operações:**
   - Criar recorrência
   - Listar (todas, ativas, pausadas)
   - Pausar (cancela pendentes + desativa)
   - Reativar
   - Deletar
   - Trigger manual (execução imediata)

4. **Scheduler automático:**
   - Roda a cada 30 segundos no Worker
   - Busca recorrências com `nextRunAt <= now`
   - Cria jobs filhos com `recurrenceId`
   - Calcula próximo `nextRunAt` baseado no tipo

## Arquivos criados/alterados

### Backend

- **`src/lib/scheduler.ts`** (criado)
  - `RecurringJobScheduler` class
  - Cron job que roda a cada 30s
  - Valida limites (maxRuns, endDate, falhas)
  - Calcula próximos run times

- **`src/services/recurring-job.service.ts`** (criado)
  - CRUD de recorrências
  - Métodos: create, list, getById, update, pause, resume, delete, trigger

- **`src/routes/recurring-jobs.ts`** (criado)
  - Rotas API REST
  - Endpoints: POST /, GET /, GET /:id, PATCH /:id, POST /:id/pause, POST /:id/resume, DELETE /:id, POST /:id/trigger

- **`src/server.ts`** (modificado)
  - Import e registro de `recurringJobRoutes`

- **`src/worker.ts`** (modificado)
  - Import e start do scheduler
  - Scheduler para no shutdown

### Frontend

- **`src/lib/api.ts`** (modificado)
  - Interfaces TypeScript para RecurringJob
  - `recurringJobsApi` com todos os métodos

- **`src/hooks/useRecurringJobs.ts`** (criado)
  - React Query hooks: useRecurringJobs, useRecurringJob, useCreateRecurringJob, etc.

- **`src/pages/RecurringJobs.tsx`** (criado)
  - Página de listagem e criação de recorrências
  - Formulário completo com todos os campos
  - Ações: pausar, reativar, trigger, deletar

- **`src/App.tsx`** (modificado)
  - Rota `/recurring-jobs`

- **`src/components/Layout.tsx`** (modificado)
  - Link "Recorrências" no sidebar com ícone Clock

### Database

- **`prisma/schema.prisma`** (modificado)
  - Model `RecurringJob` adicionado
  - Enum `RecurrenceType` (INTERVAL, CRON)
  - Campo `recurrenceId` adicionado ao model `Job`

### Types

- **`src/types/index.ts`** (modificado)
  - `createRecurringJobSchema` (Zod)
  - `updateRecurringJobSchema` (Zod)

## Como usar

### Via API (curl)

#### Criar recorrência do tipo INTERVAL (a cada 2 minutos)

```bash
API_KEY="jsk_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"

curl -X POST "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Backup Diário",
    "description": "Backup do banco a cada 2 minutos",
    "queue": "test-cep-api",
    "recurrenceType": "INTERVAL",
    "interval": 2,
    "webhookUrl": "https://viacep.com.br/ws/01001000/json/",
    "webhookMethod": "GET",
    "payloadTemplate": {"source": "backup"},
    "maxRuns": 5,
    "continueOnFailure": true
  }'
```

#### Criar recorrência do tipo CRON (todo dia às 9h)

```bash
curl -X POST "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Relatório Matutino",
    "queue": "report-generator",
    "recurrenceType": "CRON",
    "cronExpression": "0 9 * * *",
    "webhookUrl": "https://api.seusistema.com/relatorio/diario",
    "webhookMethod": "POST",
    "payloadTemplate": {"tipo": "diario"}
  }'
```

#### Listar recorrências

```bash
# Todas
curl "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs" \
  -H "Authorization: Bearer $API_KEY"

# Apenas ativas
curl "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs?isActive=true" \
  -H "Authorization: Bearer $API_KEY"
```

#### Pausar recorrência

```bash
curl -X POST "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs/{ID}/pause" \
  -H "Authorization: Bearer $API_KEY"
```

#### Reativar recorrência

```bash
curl -X POST "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs/{ID}/resume" \
  -H "Authorization: Bearer $API_KEY"
```

#### Trigger manual (execução imediata)

```bash
curl -X POST "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs/{ID}/trigger" \
  -H "Authorization: Bearer $API_KEY"
```

#### Deletar recorrência

```bash
curl -X DELETE "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs/{ID}" \
  -H "Authorization: Bearer $API_KEY"
```

### Via Frontend (Web UI)

1. Acesse: **https://job-assync-frontend.ddw1sl.easypanel.host**
2. Clique em **"Recorrências"** no menu lateral
3. Clique em **"Nova Recorrência"**
4. Preencha o formulário:
   - **Nome**: Nome da recorrência
   - **Descrição**: Opcional
   - **Fila**: Selecione a fila onde os jobs serão executados
   - **Tipo de Recorrência**: INTERVAL (minutos) ou CRON (expressão)
   - **Intervalo/Expressão**: Configure conforme o tipo
   - **Webhook URL**: URL para executar
   - **Método HTTP**: GET, POST, PUT, PATCH, DELETE
   - **Payload Template**: JSON com dados do job
   - **Máximo de Execuções**: Opcional (ilimitado se vazio)
   - **Data Final**: Opcional
   - **Continuar mesmo se houver falha**: Toggle
5. Clique em **"Criar Recorrência"**

### Ações na UI

Para cada recorrência listada:
- **Pausar**: Para a recorrência e cancela jobs pendentes
- **Reativar**: Retoma a recorrência
- **Trigger**: Executa imediatamente (fora do schedule normal)
- **Deletar**: Remove a recorrência e cancela pendentes

## Expressões Cron comuns

| Expressão | Descrição |
|-----------|-----------|
| `* * * * *` | A cada minuto |
| `0 * * * *` | A cada hora (no minuto 0) |
| `0 9 * * *` | Todo dia às 9h |
| `0 9,18 * * *` | Todo dia às 9h e 18h |
| `0 9 * * 1-5` | De segunda a sexta às 9h |
| `0 0 * * 0` | Todo domingo à meia-noite |
| `0 0 1 * *` | Dia 1 de cada mês à meia-noite |
| `*/5 * * * *` | A cada 5 minutos |

Formato: `minuto hora dia-mês mês dia-semana`

## Testes Realizados

### ✅ Teste 1: Criação via API

```bash
# Criado recorrência INTERVAL de 2min
# Resultado: Sucesso, nextRunAt calculado corretamente
```

### ✅ Teste 2: Trigger Manual

```bash
# Trigger executado
# Job criado e processado com sucesso
# ViaCEP retornou dados do CEP 01001-000
```

### ✅ Teste 3: Frontend UI

- Página carrega corretamente
- Lista de recorrências exibida
- Botões funcionais (Pausar, Trigger, Deletar)
- Formulário de criação completo

### ✅ Teste 4: Scheduler Worker

- Scheduler iniciado no worker
- Log: `[Scheduler] Started`
- Busca recorrências a cada 30s
- Cria jobs filhos automaticamente

## URLs e Acesso

| Serviço | URL |
|---------|-----|
| Frontend (Web UI) | https://job-assync-frontend.ddw1sl.easypanel.host |
| API Backend | https://job-assync-api.ddw1sl.easypanel.host |
| API Docs (Swagger) | https://job-assync-api.ddw1sl.easypanel.host/docs |

## Comportamentos Importantes

### Pausa
- Define `isActive = false`
- Cancela todos os jobs PENDING/SCHEDULED
- Próximo `resume` recalcula `nextRunAt`

### Deleção
- Cancela jobs pendentes
- Deleta a recorrência
- Jobs COMPLETED/FAILED ficam no histórico (não são deletados)

### ContinueOnFailure = false
- Se o último job falhou, a recorrência é desativada automaticamente
- Útil para evitar execuções infinitas de jobs problemáticos

### MaxRuns
- Quando atingido, a recorrência é desativada automaticamente
- Jobs completados permanecem no histórico

### RecurrenceEndDate
- Quando a data atual passa da endDate, a recorrência é desativada
- Independentemente de quantas runs ocorreram

## Próximos Melhorias (Opcionais)

1. Dashboard com visualização de execuções
2. Histórico detalhado de execuções
3. Editar recorrência (já implementado no service, falta na UI)
4. Notificações de falha
5. Expressões cron avançadas (seconds, @yearly, etc.)
6. Fuso horário configurável por recorrência

## Conclusão

Funcionalidade **100% implementada e testada**. Jobs recorrentes estão operacionais e podem ser criados via API ou frontend, com scheduler automático processando e criando execuções conforme configurado.
