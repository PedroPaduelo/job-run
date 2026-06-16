# Configurando Docker Compose, Postgres, com Testes de Carga - Parte Final da Rinha de Backend
- videoId: -yGHG3pnHLg
- url: https://www.youtube.com/watch?v=-yGHG3pnHLg
- duracao: 1:35:44
- pilar: 9. Web, Escalabilidade & Arquitetura de Aplicações
- pilaresSecundarios: [10. DevOps, Containers, Linux & Virtualização, 4. Bancos de Dados]
- prioridade: Alta
- conceitos: Docker Compose como infraestrutura/documentação viva; reverse proxy/load balancer (NGINX) com múltiplas instâncias; bridge vs host network mode; teste de carga com Gatling (ramp, percentis p50/p95/p99 vs média); connection pool e max_connections do Postgres; full-text search com índices GiST + pg_trgm (trigramas) vs seq scan; bulk insert; medir antes de otimizar (anti over-engineering)
- sintese: Mostra como transformar um projeto-tutorial num backend real configurando Docker Compose, NGINX como balanceador e Postgres, e usando testes de carga (Gatling) para medir gargalos e tomar decisões de otimização baseadas em dados em vez de achismo.
