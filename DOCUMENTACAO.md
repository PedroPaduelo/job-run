# Documentação JobSync — Como Funciona

## Status Atual (2026-03-17)

**Está tudo funcionando.** Os problemas foram resolvidos.

---

## O Que Foi Feito

### 1. Estrutura da Documentação

```
docs/
├── index.html                    ← Página principal (dashboard de docs)
├── docs-server.py                ← Servidor HTTP Python
├── styles.css                    ← (NÃO USA MAIS - CSS inline agora)
└── guides/
    ├── como-usar-jobsync.html    ← Guia principal
    ├── api-reference.html        ← Referência de API
    ├── dashboard.html            ← Docs do Dashboard
    ├── jobs-page.html            ← Docs da página Jobs
    ├── queues-page.html          ← Docs da página Queues
    ├── arquitetura-overview.html ← Arquitetura do sistema
    └── ... (70+ páginas)
```

### 2. Servidor de Documentação

**ANTES (problemático):**
- Usava `npx serve` com `--single`
- Retornava `304 Not Modified` (cache)
- Usuário via versão velha mesmo após reload
- Links `.html` redirecionavam e quebravam

**DEPOIS (resolvido):**
- Usa `docs-server.py` (Python HTTP customizado)
- Headers anti-cache:
  - `Cache-Control: no-store, no-cache, must-revalidate`
  - `Pragma: no-cache`
  - `Expires: 0`
- Links `.html` funcionam
- Página sempre atualizada

### 3. index.html — CSS Inline

**Por que CSS inline?**
- Arquivo `styles.css` externo não carregava
- CSS inline resolve completamente
- Design moderno dark mode
- Responsivo mobile-first
- 0 dependências externas

**Estrutura do index.html:**
- Navbar sticky com blur backdrop
- Hero section com gradiente
- Stats bar (70+ páginas, REST API, BullMQ, v1.0)
- Cards organizados por seção:
  - Core (Arquitetura, Fluxos, BullMQ)
  - Autenticação & Segurança
  - API Reference
  - Frontend
  - Infraestrutura
  - Riscos & Performance
- Footer com links úteis

---

## Como Usar a Documentação

### Acesso Principal

```
https://docs-job-async.ddw1sl.easypanel.host
```

### Página Inicial (index.html)

1. **Card destacado no topo** → "Guia Completo — Como Usar o JobSync"
   - Comece AQUI se é novo no sistema
   - Explica Dashboard, Jobs, Queues, Recorrências
   - Tem exemplos de código (curl, Node.js)

2. **Seções organizadas** com cards coloridos:
   - **Azul (Core)**: Arquitetura, fluxos, modelo de dados
   - **Amarelo (Auth)**: Autenticação, API Keys, permissões
   - **Verde (API)**: Endpoints, exemplos, integração
   - **Roxo (Infra)**: Redis, PostgreSQL, Sentry
   - **Vermelho (Riscos)**: Problemas conhecidos, soluções

3. **Clique em qualquer card** → abre a página específica

### Navegação Entre Páginas

**Regra:** TODOS os links funcionam. Se não funcionar:

1. **Primeiro:** Tente Ctrl+Shift+R (hard reload)
2. **Se ainda falhar:**
   - Verifique se o servidor Python está rodando
   - Olhe logs: `npx pm2 logs docs-job-async --lines 20`
   - Reinicie: `npx pm2 restart docs-job-async`

---

## Como Gerenciar o Servidor de Docs

### Verificar Status

```bash
npx pm2 list | grep docs-job
```

Saída esperada:
```
| 53 | docs-job-async | default | ... | online | ... |
```

### Ver Logs

```bash
npx pm2 logs docs-job-async --lines 50 --nostream
```

### Reiniciar

```bash
npx pm2 restart docs-job-async
```

### Parar

```bash
npx pm2 stop docs-job-async
```

### Recriar (se quebrar)

```bash
# 1. Deletar processo atual
npx pm2 delete docs-job-async

# 2. Recriar com Python server
npx pm2 start /workspace/temp-orquestrador/users/5aaf347f-952f-4355-8513-ac3f4024b43e/projetos/job-run/docs-server.py \
  --name docs-job-async \
  --interpreter python3

# 3. Verificar que subiu na porta 4174
netstat -tlnp | grep ":4174"
```

---

## Como Criar/Editar Páginas de Documentação

### Criar Nova Página

1. **Decida a categoria:**
   - Core? Backend? Frontend? API? Infra?

2. **Crie o arquivo HTML:**
   ```bash
   # Exemplo: nova página de API
   touch docs/guides/meu-novo-topico.html
   ```

3. **Estrutura mínima do HTML:**
   ```html
   <!DOCTYPE html>
   <html lang="pt-BR">
   <head>
     <meta charset="UTF-8">
     <title>Meu Novo Tópico</title>
     <style>
       body { font-family: sans-serif; padding: 2rem; background: #09090b; color: #fafafa; }
       h1 { color: #fff; }
     </style>
   </head>
   <body>
     <h1>Meu Novo Tópico</h1>
     <p>Conteúdo aqui...</p>
     <a href="../index.html">← Voltar</a>
   </body>
   </html>
   ```

4. **Adicione ao index.html:**
   - Abra `docs/index.html`
   - Encontre a seção correta (Core, API, etc.)
   - Adicione um novo card:
     ```html
     <a href="guides/meu-novo-topico.html" class="card">
       <div class="card-top"><span class="card-emoji">📝</span><span class="tag tag-blue">API</span></div>
       <h3>Meu Novo Tópico</h3>
       <p>Descrição curta</p>
     </a>
     ```

5. **A página já está acessível:**
   ```
   https://docs-job-async.ddw1sl.easypanel.host/guides/meu-novo-topico.html
   ```

### Editar Página Existente

1. Abra o arquivo em `docs/guides/nome-da-pagina.html`
2. Edite o HTML
3. Salve
4. **NÃO precisa reiniciar servidor** — Python HTTP server lê arquivo em tempo real

---

## Problemas e Soluções

### Problema: Página não atualiza (cache)

**Sintoma:** Você editou o HTML mas continua vendo a versão velha

**Causa:** Cache do browser

**Solução:**
- Tente Ctrl+Shift+R (hard reload)
- Se não funcionar, limpe cache do browser
- O servidor Python já tem headers anti-cache, então é problema no browser

### Problema: Links não funcionam (404)

**Sintoma:** Clica em um card e dá 404

**Causa:** Arquivo não existe ou nome errado

**Solução:**
```bash
# Verificar se o arquivo existe
ls docs/guides/nome-da-pagina.html

# Verificar o link no index.html
grep "nome-da-pagina" docs/index.html
```

### Problema: Servidor parou

**Sintoma:** 502 Bad Gateway

**Causa:** Processo pm2 morreu

**Solução:**
```bash
# Reiniciar
npx pm2 restart docs-job-async

# Se não existir, recriar
npx pm2 start /workspace/temp-orquestrador/users/5aaf347f-952f-4355-8513-ac3f4024b43e/projetos/job-run/docs-server.py \
  --name docs-job-async \
  --interpreter python3
```

### Problema: CSS não carrega

**Sintoma:** Página toda branca ou sem estilos

**Causa:** Tentando usar `styles.css` externo

**Solução:**
- **Não use styles.css**
- Todo CSS deve ser inline no `<style>` tag
- Copie estrutura do index.html

---

## Configuração de Infraestrutura

### Dados do Servidor de Docs

Está registrado em `project-infra.json`:

```json
{
  "name": "docs",
  "port": 4174,
  "pm2Name": "docs-job-async",
  "domain": "docs-job-async.ddw1sl.easypanel.host",
  "url": "https://docs-job-async.ddw1sl.easypanel.host",
  "type": "docs",
  "startCommand": "npx pm2 start /workspace/temp-orquestrador/users/5aaf347f-952f-4355-8513-ac3f4024b43e/projetos/job-run/docs-server.py --name docs-job-async --interpreter python3"
}
```

### Comando de Restart Rápido

```bash
npx pm2 restart docs-job-async
```

### Verificar Saúde do Servidor

```bash
# 1. Ver processo
npx pm2 list | grep docs-job

# 2. Ver porta
netstat -tlnp | grep ":4174"

# 3. Ver HTTP
curl -I https://docs-job-async.ddw1sl.easypanel.host/

# Deve retornar:
# HTTP/2 200
# cache-control: no-store, no-cache, must-revalidate
# server: SimpleHTTP/0.6 Python/3.10.12
```

---

## Links Importantes

| Recurso | URL |
|---------|-----|
| Documentação (index) | https://docs-job-async.ddw1sl.easypanel.host |
| Guia Principal | https://docs-job-async.ddw1sl.easypanel.host/guides/como-usar-jobsync.html |
| API Reference | https://docs-job-async.ddw1sl.easypanel.host/guides/api-reference.html |
| App Principal | https://job-async.ddw1sl.easypanel.host |
| API Backend | https://job-assync-api.ddw1sl.easypanel.host |

---

## Resumo

✅ **O que você precisa lembrar:**

1. Documentação = **docs/index.html** + **docs/guides/**.html
2. Servidor = **docs-server.py** (Python, NÃO serve)
3. Porta = **4174**
4. Domínio = **docs-job-async.ddw1sl.easypanel.host**
5. Cache = Resolvido (headers no-cache)
6. Links = Todos funcionam
7. Edição = Salva e funciona (tempo real)

❌ **O que NÃO fazer:**

1. NÃO usar `styles.css` externo
2. NÃO usar `npx serve` (tem cache)
3. NÃO esquecer de adicionar link no index.html ao criar página
4. NÃO usar caminhos relativos quebrados

---

## Comandos Rápidos (Copy-Paste)

```bash
# Verificar status
npx pm2 list | grep docs-job

# Ver logs
npx pm2 logs docs-job-async --lines 20

# Reiniciar
npx pm2 restart docs-job-async

# Testar HTTP
curl -I https://docs-job-async.ddw1sl.easypanel.host/

# Ver porta
netstat -tlnp | grep ":4174"
```

---

Fim. Se você leu até aqui, sabe tudo que precisa sobre a documentação do JobSync.
