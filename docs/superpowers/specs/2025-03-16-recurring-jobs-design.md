# Spec: Jobs Recorrentes (Cron/Interval)

**Data:** 2025-03-16
**Status:** Design aprovado, aguardando implementação
**Autor:** Serendipd + Usuario

---

## Resumo

Adicionar suporte a **jobs recorrentes** (tipo cron) no JobSync, permitindo que jobs sejam executados automaticamente em intervalos regulares ou expressões cron, com controle de limites, datas finais e comportamento em falhas.

---

## 1. Modelo de Dados

### Nova Tabela: RecurringJob

```prisma
model RecurringJob {
  id              String   @id @default(cuid())
  name            String
  description     String?

  organizationId  String   @map("organization_id")
  organization    Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)

  queueId         String   @map("queue_id")
  queue           Queue    @relation(fields: [queueId], references: [id])

  userId          String?  @map("user_id")
  user            User?    @relation(fields: [userId], references: [id], onDelete: SetNull)

  // Configuração da recorrência
  recurrenceType  RecurrenceType
  interval        Int?            // para INTERVAL (minutos)
  cronExpression  String?         // para CRON (ex: "0 9 * * 1-5")

  // Configuração do webhook
  webhookUrl      String   @map("webhook_url")
  webhookMethod   String   @default("POST") @map("webhook_method")
  callbackUrl     String?  @map("callback_url")
  payloadTemplate Json     @map("payload_template")

  // Limites e comportamento
  maxRuns         Int?     @map("max_runs")
  recurrenceEndDate DateTime?  @map("recurrence_end_date")
  continueOnFailure Boolean @default(false) @map("continue_on_failure")

  // Status
  isActive        Boolean  @default(true) @map("is_active")
  nextRunAt       DateTime @map("next_run_at")

  // Execuções
  jobs            Job[]

  metadata        Json?
  tags            String[]

  createdAt       DateTime @default(now()) @map("created_at")
  updatedAt       DateTime @updatedAt @map("updated_at")

  @@index([organizationId])
  @@index([queueId])
  @@index([nextRunAt])
  @@index([isActive])
  @@map("recurring_jobs")
}

enum RecurrenceType {
  INTERVAL
  CRON
}
```

### Modificação em Job

```prisma
model Job {
  // ... campos existentes ...

  recurrenceId    String?  @map("recurrence_id")
  recurrenceJob   RecurringJob? @relation(fields: [recurrenceId], references: [id], onDelete: SetNull)

  @@index([recurrenceId])
}
```

---

## 2. Fluxo de Execução (Scheduler)

### Processo Scheduler

Roda junto com o Worker, a cada 30 segundos:

1. Busca `RecurringJob` onde `isActive = true` E `nextRunAt <= now()`
2. Valida limites (maxRuns, endDate)
3. Valida falha anterior (se `continueOnFailure = false`)
4. Cria `Job` filho com `recurrenceId`
5. Calcula próximo `nextRunAt` e atualiza
6. Desativa se limites atingidos

### Algoritmo de nextRunAt

**INTERVAL:**
```
nextRunAt = agora + (interval * 60 * 1000)  // interval em minutos
```

**CRON:**
```
Usar node-cron ou biblioteca similar para calcular próxima execução baseada em cronExpression
```

---

## 3. API Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/api/recurring-jobs` | Criar recorrência |
| `GET` | `/api/recurring-jobs` | Listar recorrências |
| `GET` | `/api/recurring-jobs/:id` | Detalhes + histórico |
| `PATCH` | `/api/recurring-jobs/:id` | Atualizar configuração |
| `POST` | `/api/recurring-jobs/:id/pause` | Pausar + cancelar pendentes |
| `POST` | `/api/recurring-jobs/:id/resume` | Reativar |
| `DELETE` | `/api/recurring-jobs/:id` | Desativar + limpar pendentes |
| `POST` | `/api/recurring-jobs/:id/trigger` | Execução imediata |

---

## 4. Error Handling

| Situação | Comportamento |
|----------|---------------|
| `continueOnFailure = false` + job falhou | Pausa recorrência, notifica |
| `continueOnFailure = true` + job falhou | Ignora, agenda próximo |
| `maxRuns` atingido | Desativa, status COMPLETED |
| `endDate` passou | Desativa |
| Pausar durante execução | Não cancela job ativo, só PENDENTES |
| Editar recorrência | Recalcula `nextRunAt` |

---

## 5. Frontend

- Página **"Recorrências"** no sidebar
- Cards: nome, tipo, próxima execução, status
- Formulário de criação/editação
- Detalhe: timeline de execuções, controles (pause/resume/trigger)
- Badge no Dashboard

---

## 6. Como Usar (Guia Prático)

### Exemplo 1: Job a cada 5 minutos (INTERVAL)

```bash
curl -X POST "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Consulta CEP SP",
    "description": "Consulta CEP a cada 5 minutos",
    "queue": "test-cep-api",
    "recurrenceType": "INTERVAL",
    "interval": 5,
    "webhookUrl": "https://viacep.com.br/ws/01001000/json/",
    "webhookMethod": "GET",
    "payloadTemplate": {"teste": "automático"},
    "maxRuns": 100,
    "continueOnFailure": true
  }'
```

**Resultado:** Cria jobs às 09:00, 09:05, 09:10, ... até 100 execuções.

---

### Exemplo 2: Todo dia às 9h (CRON)

```bash
curl -X POST "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Relatório Diário",
    "description": "Gera relatório todo dia às 9h",
    "queue": "reports",
    "recurrenceType": "CRON",
    "cronExpression": "0 9 * * *",
    "webhookUrl": "https://seu-api.com/reports/daily",
    "webhookMethod": "POST",
    "payloadTemplate": {"type": "daily"},
    "recurrenceEndDate": "2025-12-31T23:59:59Z"
  }'
```

**Resultado:** Executa todos os dias às 9h até 31/12/2025.

---

### Exemplo 3: Toda segunda-feira (CRON)

```bash
cronExpression: "0 9 * * 1"
```

---

### Exemplo 4: A cada hora, para se falhar para

```bash
continueOnFailure: false
```

Se um job falhar, a recorrência pausa automaticamente.

---

### Exemplo 5: Pausar recorrência

```bash
curl -X POST "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs/{id}/pause" \
  -H "Authorization: Bearer $API_KEY"
```

Cancela todos os jobs PENDENTES futuros, mantém histórico.

---

### Exemplo 6: Trigger manual

```bash
curl -X POST "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs/{id}/trigger" \
  -H "Authorization: Bearer $API_KEY"
```

Força execução imediata, sem alterar `nextRunAt`.

---

## 7. Testes

### Backend

- Criar recorrência INTERVAL → validar 3 execuções
- Criar recorrência CRON → validar horário correto
- Testar `continueOnFailure` com job falhando
- Testar `maxRuns` → desativar automaticamente
- Testar `endDate` → desativar automaticamente

### Frontend

- Criar recorrência via formulário
- Listar recorrências com filtros
- Pausar/Retomar/Trigger via botões
- Visualizar timeline de execuções

---

## 8. Dependências

- `node-cron` ou `croner`: para calcular próxima execução CRON
- Modificações no Worker: adicionar loop de scheduler
- Nova rota em `routes/recurring-jobs.ts`
- Novo serviço em `services/recurring-job.service.ts`
- Frontend: páginas em `src/pages/RecurringJobs.tsx`

---

## Status

✅ Design aprovado pelo usuário
⏳ Aguardando implementação (writing-plans skill)
