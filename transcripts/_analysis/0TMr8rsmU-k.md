# Como fazer o Ingresso.com escalar? | Conceitos Intermediários de Web
- videoId: 0TMr8rsmU-k
- url: https://www.youtube.com/watch?v=0TMr8rsmU-k
- duracao: 48:34
- pilar: 9. Web, Escalabilidade & Arquitetura de Aplicações
- pilaresSecundarios: [8. Backend, Concorrência & Memória, 4. Bancos de Dados]
- prioridade: Alta
- conceitos: ciclo de vida de requisição HTTP (NGINX/proxy reverso/app/banco); cache (TTL, HTTP 304 conditional caching); CDN (Akamai) para assets estáticos; índices de banco; filas e workers assíncronos (Redis, Bull, Celery, ActiveJob); máquina de estados para pedidos; shared-nothing/servidores voláteis; sala de espera virtual (tokens, Bouncer, overbooking); profiling/métricas (New Relic) antes de otimizar; SQL vs NoSQL e réplicas de leitura
- sintese: Usando o caso real do ingresso.com travando na pré-venda do Homem-Aranha, dissecа por que um e-commerce ingênuo não escala e mostra as técnicas intermediárias que resolvem ~80% dos problemas de escalabilidade — cache, CDN, filas/workers, índices, sala de espera virtual e métricas — tudo independente de linguagem ou framework.
