# Concorrência e Paralelismo (Parte 1) | Entendendo Back-End para Iniciantes (Parte 3)
- videoId: cx1ULv4wYxM
- url: https://www.youtube.com/watch?v=cx1ULv4wYxM
- duracao: 42:34
- pilar: 8. Backend, Concorrência & Memória
- pilaresSecundarios: [1. Fundamentos de Computação & Arquitetura de Hardware, 6. Linguagens, Compiladores & Fundamentos de Programação]
- prioridade: Alta
- conceitos: time-sharing e context switching; multi-tarefa preemptiva vs cooperativa; forks e copy-on-write; race conditions, mutexes e deadlocks; schedulers (CFS, NPTL); I/O bloqueante vs assíncrono; problema C10K; padrão Reactor/event loop
- sintese: Conta a história da computação paralela: de mainframes com time-sharing a threads POSIX e NPTL, explica race conditions/mutexes/deadlocks, a evolução de schedulers Linux e o problema C10K que motivou NGINX e o padrão Reactor com I/O assíncrono (epoll/kqueue/IOCP) para atender milhares de conexões por thread.
