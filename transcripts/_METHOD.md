# Método das Pedras — Extração de Transcrição do YouTube (via Browser MCP)

Método validado para extrair a transcrição **direto do painel oficial do YouTube**
(sem ferramentas de terceiros). Funciona mesmo em IP de datacenter, desde que a
página `watch` carregue (às vezes o YouTube redireciona pra login — basta recriar
a sessão e/ou re-navegar pro `watch` URL; geralmente na 2ª tentativa carrega).

## Pré-requisitos
- Browser MCP com sessão ativa (`create_automation_session`).
- A sessão pode cair sozinha; se algum tool retornar "No active automation session"
  ou "Detached while handling command", recrie com `create_automation_session` e siga.

## Passo a passo (por vídeo)

### 1. Navegar para o watch URL
```
navigate_to("https://www.youtube.com/watch?v=<VIDEO_ID>")
page_ready({ timeout: 15000 })   // pode dar timeout no spinner — tudo bem, segue
```
Se a URL virar `accounts.google.com/...signin` → login wall. Mitigação:
- `create_automation_session` de novo e re-navegar; ou navegar primeiro pra
  `https://www.youtube.com/` e depois pro watch URL.

### 2. Capturar título + duração (opcional, do snapshot)
```
get_page_snapshot()
```
- Título: `document.title` (sem o sufixo " - YouTube").
- Duração e canal aparecem no snapshot (ex.: "0:02 / 17:46", nome do canal).

### 3. Expandir a descrição
```
click_element({ selector: "#expand" })   // botão "...mais"
```

### 4. Abrir o painel de transcrição
O botão tem `aria-label="Mostrar transcrição"` (PT) / "Show transcript" (EN).
```
click_element({ selector: 'button[aria-label="Mostrar transcrição"]' })
```
Confirme via `evaluate_in_page` procurando por botões com texto/aria contendo
"transcri" se o seletor exato variar por idioma.

### 5. Extrair os segmentos
O layout novo do YouTube usa **`transcript-segment-view-model`** (NÃO o antigo
`ytd-transcript-segment-renderer`). Cada segmento tem:
- timestamp em `.ytwTranscriptSegmentViewModelTimestamp`
- texto em `span[role="text"]`

⚠️ NÃO use `innerText` do segmento inteiro — ele inclui um label de
acessibilidade duplicado (ex.: "3 segundos"). Pegue os dois sub-elementos.

Espere os segmentos carregarem (podem demorar 1–3s após o clique). Script:
```js
(() => {
  const segs = document.querySelectorAll('transcript-segment-view-model');
  const out = [];
  segs.forEach(s => {
    const t = s.querySelector('.ytwTranscriptSegmentViewModelTimestamp')?.textContent.trim() || '';
    const span = s.querySelector('span[role="text"]')?.textContent.trim() || '';
    out.push({ t, text: span });
  });
  return { count: out.length, rows: out };
})()
```
Se `count === 0`, aguarde (`setTimeout` dentro de um eval async) e tente de novo;
o painel pode existir mas os segmentos ainda estarem sendo populados. Os painéis
ficam em `ytd-engagement-panel-section-list-renderer` com
`target-id="engagement-panel-searchable-transcript"`; o expandido tem
`visibility="ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"`.

### 6. Salvar no formato padrão
Arquivo: `transcripts/<VIDEO_ID>.md`. Cabeçalho + tabela de timestamps:

```markdown
# <título do vídeo>

- **Canal:** <canal>
- **URL:** https://www.youtube.com/watch?v=<VIDEO_ID>
- **Duração:** <mm:ss ou h:mm:ss>
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | ... |
| 0:03 | ... |
```
(Escape `|` no texto se houver, e mantenha cada segmento em uma linha.)

## Notas de robustez
- Vídeos sem legenda/transcrição: o botão "Mostrar transcrição" não existe →
  registre como "sem transcrição disponível" e siga.
- Idioma: o `aria-label` muda conforme o locale da sessão (PT vs EN). Busque por
  substring "transcri" para ser robusto.
- A duração no manifest está em formato `h:mm:ss`/`mm:ss` (badge do thumbnail).
- Para paralelizar: 1 subagente por `videoId` do `_manifest.json`, cada um
  gravando seu próprio `transcripts/<VIDEO_ID>.md` (escopos de arquivo disjuntos).
