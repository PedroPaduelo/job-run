# 16 Linguagens em 16 Dias: Minha Saga da Rinha de Backend
- videoId: EifK2a_5K_U
- url: https://www.youtube.com/watch?v=EifK2a_5K_U
- duracao: 1:39:10
- pilar: 9. Web, Escalabilidade & Arquitetura de Aplicações
- pilaresSecundarios: [6. Linguagens, Compiladores & Fundamentos de Programação, 13. Carreira, Aprendizado & Desenvolvimento Pessoal, 8. Backend, Concorrência & Memória]
- conceitos: problema I/O bound vs CPU bound (analogia da lanchonete); controle de vazão limitando workers do NGINX em vez de aumentar; dimensionamento de connection pool do Postgres; anti otimização-prematura (cache/fila inúteis quando o banco não é gargalo); network_mode host vs bridge no Docker; compilado vs interpretado e custo de talento; "sua linguagem não te define" / aprender a aprender
- prioridade: Alta
- sintese: Relato da exploração de 16 linguagens resolvendo a Rinha de Backend, mostrando que o gargalo era I/O (controle de fluxo no NGINX e pool), não a linguagem nem o Postgres, e que quase qualquer stack atinge o máximo evitando otimização prematura.
