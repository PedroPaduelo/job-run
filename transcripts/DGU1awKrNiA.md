# Garbage Collector para Iniciantes em Programação | "ENDGAME" do Back-end | Série "Começando aos 40"

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=DGU1awKrNiA
- **Duração:** 35:35
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Este é o décimo primeiro episódio da série começando aos 40, parte 2 do tema de Gerenciamento |
| 0:09 | de Memória, parte 6 e conclusão do tema de Back-end, finalmente!! |
| 0:14 | Semana passada eu dei uma escovada de bits, expliquei um pouco sobre as diferenças de arquiteturas 64-bits e 32-bits, entendemos rapidamente sobre notação binária e hexadecimal, |
| 0:26 | os diferentes tipos de memória e como os diferentes alocadores fazem seu trabalho pra |
| 0:31 | resolver os problemas de fragmentação e alocação eficiente em ambientes com múltiplas |
| 0:37 | threads reais. No episódio de hoje vamos uma camada pra cima e explorar mais sobre os famosos garbage |
| 0:44 | collectors, que muita gente ainda associa mais com Java, mas que a maioria das linguagens |
| 0:49 | interpretadas e baseadas em máquinas virtuais possuem. O grande truque é balancear processamento e uso de memória. |
| 0:58 | Se ficar tentando economizar memória, o collector precisa trabalhar mais e, por consequência |
| 1:03 | isso diminui a performance geral da sua aplicação. Por outro lado, se o collector rodar pouco pra aumentar a performance geral, você vai |
| 1:10 | acabar usando mais memória do sistema e em ambientes de servidor onde os processos ficam |
| 1:16 | de pé por dias ou semanas sem descarregar, isso pode ser um problema também. |
| 1:21 | Então, como eles fazem pra balancear os dois? |
| 1:32 | (...) Recapitulando, no episódio anterior falamos um pouco das diferenças de alocadores como |
| 1:37 | o ptmalloc2, tcmalloc do Google e o jemalloc que o Facebook usa. No fim, todo alocador vai querer resolver o problema de fragmentação, o problema de |
| 1:47 | contenção de threads, o problema de cache entre threads. E agora temos os garbage collectors. |
| 1:52 | Pense em garbage collectors como sendo um alocador em user-land. |
| 1:58 | Ele faz syscalls pro sistema operacional, como o malloc() pra pedir blocos grandes de |
| 2:03 | memória e internamente gerencia como esse pedação vai ser usado. Python, Ruby, Erlang, Javascript, .NET, Java e por consequência toda linguagem que roda |
| 2:14 | em cima de Java como Scala, Clojure, Kotlin, usam o mesmo garbage collector da JVM. |
| 2:20 | Assim como schedulers the coroutines em user-land são mais rápidos como eu já expliquei em |
| 2:25 | episódios anteriores, um alocador em user-land também é mais rápido do que fazer syscalls pra funções no kernel-space como mmap ou munmap que é o que funções como malloc() |
| 2:35 | fazem. Todo garbage collector faz algumas coisas meio básicas. Não dá pra explicar no detalhe como o collector de cada linguagem funciona, mas vamos ver |
| 2:45 | os conceitos comuns. Pra começar, existem linguagens que lidam com ponteiros, ou seja os tais endereços |
| 2:51 | virtuais diretamente, e os que lidam com referências que são como se fossem atalhos pros endereços. |
| 2:58 | Garbage collectors existem principalmente porque nós programadores somos muito ruins |
| 3:04 | em liberar memória manualmente. Se você teve que lidar com C, sabe que precisa chamar a função free() pra toda memória |
| 3:11 | que deu malloc() antes. Esqueça de dar free e seu programa vai começar a ter leaks ou vazamentos e vai ficar crescendo |
| 3:18 | sem parar. Parece super simples, mas toda regrinha desse tipo você pode ter certeza que vai esquecer. |
| 3:26 | Basta esquecer de digitar uma linha ou apagar uma linha do código com free por acidente. |
| 3:31 | Ou pior, se você der free numa memória que ainda não era pra dar free, vai ficar com um Invalid Pointer por exemplo e seu programa pode crashear. |
| 3:40 | Quando você adiciona classes e objetos em cima do C e gera um C++ a coisa fica pior |
| 3:46 | ainda porque você vai passando ponteiros de objetos pra outros objetos numa árvore gigante de dependências. |
| 3:52 | Quando que você pode destruir um objeto sem deixar outro que dependia dele corrompido? |
| 3:58 | Uma das formas de resolver esse problema é adicionar a todo objeto um contador. |
| 4:04 | E toda vez que você passar esse objeto pra outro objeto ou função, incrementar o contador. |
| 4:09 | Quanto mais objetos apontarem pra esse primeiro, maior vai ficando o contador. À medida que os objetos que apontam pro primeiro também forem sendo liberados, o contador |
| 4:19 | vai decrementando. E quando o contador voltar a ser zero, daí você sabe que ninguém está mais usando |
| 4:25 | e pode liberar esse objeto. Como estamos falando de contagem de referências, você vai ouvir falar nessa estratégia como |
| 4:32 | Reference Counting. Linguagens como Python e Objective-C e, por consequência, Swift usam essa estratégia. |
| 4:40 | No caso do Objective-C ele vai um passo além, ele inclui uma classe chamada NSAutoreleasePool, |
| 4:46 | um tanque de alocação. Você instancia um pool e à medida que vai alocando novos objetos esse pool fica sabendo |
| 4:53 | deles. Diferente de um garbage collector, em Objective-C você manualmente instância quantos pools |
| 5:00 | quiser, e tem que manualmente chamar release no objeto que, diferente da tal função free(), |
| 5:05 | vai só decrementando o contador de referência. E quando quiser pode chamar o método release do pool, que por sua vez dá free de verdade |
| 5:14 | nos objetos com contador zerado. Nas versões mais novas do Objective-C e no Swift, coisa da última década, a Apple adicionou |
| 5:22 | o ARC ou Automatic Reference Counting. Na prática ele vai cuidar de adicionar o código pra dar release do contador usando |
| 5:30 | algumas dicas no seu código, durante a compilação. Vale a pena estudar em detalhes como o ARC funciona se você faz programas pra iPhone |
| 5:39 | ou Mac, mas 90% dos casos você não se preocupa tanto com a memória e vai precisar saber |
| 5:44 | mais quando tiver bugs ou quiser otimizar o uso de memória, por exemplo forçando a limpeza do pool mais vezes. |
| 5:51 | Digamos que você está lendo um arquivo com 500 linhas, em vez de fazer o loop e só no final limpar tudo de uma vez, você pode ir dando release no pool manualmente a cada 50 |
| 6:01 | linhas por exemplo e evitar que o sistema aloque mais memória do que precisa. |
| 6:07 | Se você desaloca memória com muita frequência, vai usar mais CPU e diminuir a performance |
| 6:12 | geral, por outro lado vai consumir menos memória. Se você desalocar com pouca frequência, aumenta a performance, mas também aumenta |
| 6:20 | o uso de memória. Um problema de contagem de referências é o caso de reference cycle ou seja, você tem |
| 6:27 | objeto A com uma referência pro objeto B daí no B fazemos uma referência pro objeto |
| 6:32 | A, agora ambos os contadores de A e de B nunca vão ser menores que 1, e o pool não vai |
| 6:38 | conseguir desalocar a memória desses objetos mesmo que ninguém mais esteja usando, porque os contadores não são zero. |
| 6:45 | Por isso em Objective-C e Swift você tem a diferença entre strong references que são |
| 6:50 | as referências normais. Mas também temos referências weak e unowned, nenhuma das duas incrementa o contador e isso |
| 6:59 | quebra o ciclo de referências. No caso a referência do objeto B pro objeto A poderia ser declarada como Weak e daí o |
| 7:05 | contador de A chegaria a zero normalmente e ambos poderiam ser limpos. Novamente, você precisa ler em mais detalhes a diferentes de uma referência Weak e Unowned |
| 7:16 | que vou deixar nas descrições abaixo. Linguagens com contadores de referência como Python costumam ter a opção de referências |
| 7:23 | fracas ou Weak. Controlar os contadores de uso de cada objeto é uma forma de você não precisar manualmente |
| 7:31 | liberar objeto a objeto quando não precisa mais. Basta ter um controlador como o NSAutoreleasePool que consegue limpar todo objeto com contador |
| 7:40 | zerado de uma vez só. Em C++ temos smart pointers que funcionam mais ou menos parecido. |
| 7:45 | Um garbage collector muito simples poderia simplesmente ser uma thread que, de tempos |
| 7:51 | em tempos, manda limpar esse pool. Seria uma forma rudimentar de garbage collector. |
| 7:56 | Mesmo Python trabalha com contador de referências também, mas seu collector é mais sofisticado do que só isso. |
| 8:03 | Eu falei que em Objective-C você pode criar quantos pools quiser e controla eles manualmente. |
| 8:09 | Outra forma é esse Pool ser tipo uma estrutura global e única, é como funciona em Ruby |
| 8:15 | e em Java e acho que em .NET também. Pense numa lista gigante, onde sempre que precisarmos de memória pedimos pro alocador |
| 8:22 | que vai adicionando nessa lista também, catalogando todos os elementos que vão sendo alocados. |
| 8:28 | Toda vez que você passa a referência desse elemento pra outro objeto, ele vai criando |
| 8:33 | uma árvore de dependência. Objeto A pode ter referências pros objetos B e C, e o objeto C tem referência pro objeto |
| 8:41 | D. Depois de algum tempo, a variável que aponta pra A deixa de existir, por exemplo o método |
| 8:46 | retornou ou você passou nulo pra variável e então ninguém mais aponta pro objeto A. Com o tempo vários objetos vão ficando nesse estado, onde ninguém mais aponta pra eles |
| 8:56 | a não ser a lista global que falei. Então de tempos em tempos um processo especial chamado collector, numa thread no interpretador |
| 9:04 | ou na VM, poderia ir vasculhando essa lista por todos os objetos que ninguém mais está |
| 9:10 | apontando e ir só marcando. Depois um segundo processo poderia ir na mesma lista, elemento a elemento, desalocando os |
| 9:18 | objetos que foram marcados. Então se a lista tinha 1000 objetos, cada um ocupando 1 slot da memória, na fase de |
| 9:26 | marcação 500 objetos foram marcados como não usados, e na fase de limpeza esses são liberados os 500 slots pra uso. |
| 9:34 | Sendo ultra simplista é isso que chamamos de um garbage collector Mark and Sweep. É um collector de duas fases, onde em cada fase ele precisa vascular elemento a elemento |
| 9:44 | da lista de alocação, fazendo um mark na primeira fase e sweep na segunda. |
| 9:49 | Porém, quando eu falo desalocar não quer dizer devolver memória pro sistema operacional. |
| 9:55 | Lembra do problema de fragmentação? Se eu ficar devolvendo memória toda hora, muito rapidamente a memória do processo vai |
| 10:01 | ficar fragmentado. Linguagens como Ruby ou Java começam pedindo um certa quantidade de blocos de memória |
| 10:08 | pro sistema operacional. No caso de Ruby tem o equivalente de chunks que ele chama de slots, cada slot tem um tamanho |
| 10:16 | fixo de 40 bytes onde cabe toda a estrutura que define um objeto de Ruby. |
| 10:22 | Então ele só lida com slots fixos de 40 bytes. Um conjunto desses slots é chamado de Heap. |
| 10:28 | Não confundir com o Heap do malloc de C, é o mesmo nome mas tanto Java quanto Ruby |
| 10:34 | chamam conjuntos de slots ou chunks de Heaps. No caso do Ruby existem várias variáveis de sistema pra configurar o alocador, como |
| 10:42 | por exemplo o RUBY_GC_HEAP_INIT_SLOTS, que por padrão o valor é 1000. |
| 10:47 | Um heap de Ruby costuma ter 16 kbytes. Ou seja, ele vai alocar de 40 bytes x 1000 que seria quase 40 kbytes ou pelo menos 2 |
| 10:55 | heaps. Se acabar os slots disponíveis, o alocador do Ruby vai pedindo pra alocar mais heaps, |
| 11:02 | vários slots de uma só vez. Digamos que ao carregar seu programa ele precisou de 10 mil heaps, ou seja, uns 156 megabytes. |
| 11:10 | Agora digamos que depois de rodar por um tempo, uns 500 mil slots de objetos foram marcados |
| 11:16 | como não usados mais. Na fase de Sweep você imaginaria que ele vai devolver 500 mil x 40 bytes que dá quase |
| 11:23 | 20 megabytes, de volta pro sistema e em vez de ocupar 156 megabytes ele vai passar a usar |
| 11:29 | 136 megabytes. Mas não, no final do Sweep seu programa vai continuar usando os mesmos 156 megabytes. |
| 11:36 | Por que? Porque ele só vai liberar os slots da lista global, mas a memória de verdade continua |
| 11:42 | alocada. Quando você criar novos objetos nos slots livres, ele vai reusar e escrever em cima |
| 11:48 | do mesmo trecho de memória de antes. De cara temos estratégias diferentes entre o Heap de uma linguagem como Ruby ou o Heap |
| 11:56 | de uma linguagem como Java. No caso de Java, todos os objetos ocupam espaço no Heap. |
| 12:02 | No caso de Ruby só a estrutura e dados muito pequenos ocupam os slots de 40 bytes. |
| 12:08 | Mas um array ou um string costuma ser muito maior que 40 bytes, então o Ruby chama a |
| 12:13 | syscall malloc do sistema operacional e guarda o endereço alocado no slots de 40 bytes apontando |
| 12:19 | pro espaço fora do Heap. A vantagem do Ruby é que todo objeto tem o mesmo tamanho dentro do Heap e isso ajuda |
| 12:26 | a não fragmentar tanto, mas ele depende do alocador do sistema operacional pros blobs |
| 12:32 | de dados maiores. No caso do Java ele não tem que se preocupar com o sistema operacional, porque ele usa |
| 12:38 | só sua memória interna do Heap, mas outro lado isso vai causar fragmentação interna |
| 12:44 | e ele tem uma forma de evitar isso, que vamos ver já já. Mas só pra entender que diferentes collectors organizam seus dados internamente de formas |
| 12:52 | diferentes. Do ponto de vista de programação, se você ainda não entendeu, alocar memória desnecessariamente |
| 12:59 | vai aumentar o tamanho dos heaps ou a quantidade de heaps, dependendo do alocador, e isso vai |
| 13:05 | bloquear memória do sistema operacional e causar fragmentação desnecessária também. |
| 13:10 | Você não pode achar que vai alocar 1 giga de dados, devolver esses 1 giga, e vai continuar |
| 13:15 | tendo bonitinho 1 giga de novo sobrando. Você vai fazer o alocador ter que trabalhar muito pra evitar a fragmentação e se seu |
| 13:23 | sistema tiver pouca memória geral, provavelmente não vai conseguir ter esse espaço livre de volta. |
| 13:29 | Exemplos de má programação é o famoso caso de abrir um arquivo gigante de vários gigas na memória, ou conectar num banco de dados e não fazer o select com os critérios |
| 13:39 | de where certos e acabar puxando muito mais linhas da tabela do que precisava. |
| 13:44 | Tudo isso vai ocupar espaço, o alocador vai ter que esticar os heaps, mais memória do |
| 13:49 | sistema vai ser consumido, e não necessariamente ele vai liberar essa memória de volta pro |
| 13:55 | sistema. Mesmo depois que o collector limpar os slots ocupados por esses dados, você ficou com |
| 14:00 | um heap inchado e fragmentado. E se seu servidor for pequeno, você vai começar a ter problemas de memória mesmo que teoricamente |
| 14:09 | tenha "memória sobrando" ainda. Se seu programa rodando em produção tem leaks de memória, normalmente são dados |
| 14:16 | que vem da rede, como dados do banco de dados, ou processamento de arquivos grandes. O ideal é sempre seu código tentar usar memória até um limite. |
| 14:25 | E quando precisa puxar dados externos, ter algumas checagens pra ver se não vai usar |
| 14:30 | memória desnecessariamente. Tipo checar o tamanho de um arquivo antes de carregar ele inteiro na memória. |
| 14:37 | Se for arquivos pequenos de alguns kbytes, dá pra ler tudo e armazenar numa variável |
| 14:43 | de string. Mas se for um arquivo de gigabytes, é melhor abrir como um Stream e ir lendo pedaços do |
| 14:49 | arquivo de cada vez. Ou quando precisa puxar dados de uma tabela num banco de dados, usar coisas como um limit |
| 14:56 | no select pra limitar quantas linhas vai puxar de uma só vez. Famoso caso que o amador fala que na máquina dele funciona, só que na máquina dele ele |
| 15:08 | só testou com arquivos pequenos e com tabelas com 10 linhas de teste. Por isso quando vai pra produção tem esse comportamento. |
| 15:16 | Isso porque é um programador que não tem noção de gerenciamento de memória. Voltando, outro problema é se seu programa é grande e aloca milhões de objetos. |
| 15:25 | Toda vez que o processo de Mark e Sweep rodar, eles precisam passar por todos eles, um por |
| 15:32 | um, toda vez. Mesmo que só leve uma fração de milissegundo pra marcar e sweepar cada objeto, ainda assim |
| 15:39 | vai levar dezenas de segundos pro processo todo se contar milhões de objetos alocados. |
| 15:44 | É muita coisa. Pior ainda, toda vez que você vai marcar os objetos ou limpar, precisa pausar o programa |
| 15:51 | todo, é o que chamamos de Stop the World. Isso porque você tem que garantir que o programa rodando ao mesmo tempo que o collector não |
| 15:58 | se corrompa tentando acessar um objeto que acabou de ser desalocado. Só que se você pausar seu programa por muitos segundos, ele vai ficar muito lento. |
| 16:08 | Ou seja, carregar dados desnecessários não só desperdiça memória como desperdiça |
| 16:14 | performance. Agora você só tem 2 escolhas. A primeira é rodar poucas vezes o Mark e Sweep, mas aí você arrisca consumir muita |
| 16:22 | memória e fazer seu heap crescer demais já que sempre que precisa de mais memória e não tem slots pra reusar ele vai pedir mais pro sistema operacional. |
| 16:30 | E eu já disse que toda memória que ele aloca do sistema ele não devolve mais ou vai demorar |
| 16:36 | pra devolver pra evitar fragmentação, daí seu processo vai crescer mais do que devia. |
| 16:41 | A segunda escolha, se você quer evitar isso então tem que rodar mais vezes o Mark e Sweep |
| 16:46 | só que daí a performance geral do programa vai ficar lento. Ou seja, agora você tem que escolher entre performance ou uso de memória. |
| 16:54 | Pra resolver esse problema é que existe a idéia de Generational Garbage Collectors. |
| 16:59 | Ele vai dividir a memória interna do interpretador ou da máquina virtual em 2 ou mais gerações. |
| 17:06 | Java divide seus heaps em grupos chamados Young, Old e Permanent (por isso você vira |
| 17:11 | e mexe vê configuração em tutorial de JVM pra configurar coisas como o Permsize que é o tamanho desse espaço permanente). |
| 17:18 | O garbage collector G1GC novo do Java chama de Eden, Survivor e Old. |
| 17:25 | Python chama só de geração zero, um e dois. A idéia vem de uma hipótese chamada Weak Generational Hypothesis. |
| 17:32 | Em linhas gerais essa hipótese diz que objetos novos tendem a morrer jovens e objetos velhos |
| 17:38 | tendem a ficar ativos por muito tempo. Parece óbvio quando falamos assim, né? Eu já expliquei como o sistema operacional divide a memória em arenas por exemplo, pra |
| 17:48 | evitar contenção de threads. Agora vamos dividir mais ainda pra evitar passagens desnecessárias por objetos que |
| 17:54 | não vão morrer tão cedo. O problema que um generational garbage collector quer resolver é diminuir ao máximo as pausas |
| 18:02 | da fase de mark and sweep. A forma de fazer isso é evitar ficar olhando objetos que nunca vão ser limpos. |
| 18:09 | Por exemplo, objetos singleton que seu programa carrega no começo e vai usar até morrer. |
| 18:15 | Num Ruby, toda classe é um objeto. Mas as classes raramente precisam ser limpas, então pra que perder tempo olhando pra elas |
| 18:21 | toda vez? Em resumo, na primeira vez que o mark passar, ele vai ter que olhar tudo. |
| 18:27 | Objetos que sobrevivem a múltiplas passagens da fase de mark podem ser promovidos da geração |
| 18:33 | Nova pra geração Velha e se sobreviverem mais algumas passadas de mark, podem ser promovidas |
| 18:38 | pra geração permanente. Podemos dividir as fases de Mark em Minor e Major. |
| 18:44 | O Minor só olha pros objetos mais novos e ativos na geração Nova. O Major olha também pra geração Velha pra ver se algum precisa ser limpo. |
| 18:53 | Mas uma ver promovido pra permanente, podemos esquecer desses objetos. Digamos que um programa normal tenha 100 mil objetos, e que depois de algumas passadas |
| 19:02 | da fase de Mark 50 mil deles tenham sido promovidos pra geração permanente. |
| 19:08 | Os outros 50 mil são objetos que morrem, e novos que são criados e na média ficam |
| 19:13 | sempre uns 20 mil na geração nova, uns 30 mil na geração velha. A performance total da fase de mark é pelo menos o dobro, porque você no mínimo vai |
| 19:22 | passar por metade dos objetos toda vez. E tende a ser mais rápido que isso porque você passa menos vezes na geração velha |
| 19:30 | também. Então é um ganho enorme de performance. Numa linguagem como Ruby ou Python, esses segmentos como eu disse são só listas com |
| 19:37 | ponteiros pros slots ocupados. Como por baixo é tudo estrutura em C temos endereços e como as extensões em C podem |
| 19:45 | precisar do endereço exato de determinada estrutura não podemos mover os dados de lugar. |
| 19:51 | Eu menciono isso porque em Java temos uma coisa extra. Java não lida diretamente com ponteiros, ele trabalha com referências no nível da |
| 20:00 | linguagem. Uma variável em Java aponta pra uma referência e a referência, por baixo dos panos, é indexada |
| 20:05 | num endereço. Mas o endereço pode mudar. Diferente de Ruby ou Python, em baixo nível o alocador pode mover o objeto de um slot |
| 20:15 | pra outro nos heaps. Mover fisicamente vai mudar o endereço e aí eu mudo na referência. |
| 20:20 | Mas no alto nível a variável no Java só vê a referência então pra ele nada mudou. Uma coisa é eu dar um produto na mão de uma pessoa. |
| 20:26 | Agora não posso mais tirar o produto da mão dela sem ela reclamar. Outra coisa é eu dar um vale produto pra pessoa. Agora no estoque tanto faz se eu mudar o produto de lugar, o que vale é a referência. Isso é importante porque na JVM quando acontece a fase de promover os objetos da geração jovem pra geração velha, em vez de só mover o ponteiro de um segmento pra outro de uma |
| 20:38 | lista, na verdade eu estou movendo o objeto de um slot da geração jovem pra um slot |
| 20:43 | da geração velha, fisicamente falando. Estou copiando de um slot pro outro e depois liberando o primeiro slot. |
| 20:50 | Então fisicamente na memória, os heaps de Java tendem a ser menos fragmentados que num |
| 20:56 | Python ou Ruby. E os objetos de Java podem alocar tudo dentro do objeto em vez de usar a estratégia de |
| 21:03 | dividir o objeto em 2 partes, sendo uma estrutura de tamanho fixo e o resto dos dados alocados |
| 21:08 | fora dos heaps via malloc do sistema operacional. Nesse caso os objetos de Java tem tamanho variável, o que causaria fragmentação como |
| 21:17 | eu já falei mas como ele pode mover os objetos de lugar e ir defragmentando a cada passada |
| 21:23 | do collector, então evitamos fragmentação. É como se o collector do Java fosse também ao mesmo tempo um defragmentador e de fato |
| 21:31 | ele tem uma fase chamada compaction, que move objetos de lugar pra defragmentar se o coletor |
| 21:38 | perceber que o heap acumulou muita fragmentação. Se não ficou claro, nos diagramas que mostrei até agora, parece que todos os objetos estão movendo de um espaço de memória pra outro. Isso é verdade no Java. Mas num Ruby os objetos não se movem de lugar, os endereços são fixos. Faz de conta que existam listas como uma lista ligada ou um array grande. |
| 21:44 | Cada elemento da lista é um endereço pra memória real, e as listas são as gerações. Então quando eu falo que o objeto é promovido de uma geração pra outra, na memória real nada acontece, só o endereço que sai de uma lista e vai pra outra lista. Num Java, a estratégia de gerações a ajuda a diminuir fragmentação porque à medida que os objetos são promovidos eles movem de lugar na memória e isso vai defragmentando. Mas num Ruby a fragmentação se mantém a mesma, o que vai melhorar é a velocidade |
| 21:50 | do Mark and Sweep. Esse tipo de processo é o que chamamos de um Compact Copying Collector. A principal função é diminuir a fragmentação da memória. Se você tinha curiosidade, os garbage collectors do Erlang e do .NET são similares. Eles são generational, e tem copy collectors. |
| 21:58 | Os princípios são os mesmos. Só linguagens que lidam com ponteiros e endereços físicos diretamente como as linguagens que |
| 22:05 | compilam nativamente sem um runtime que abstrai a memória ou os interpretadores, não tem |
| 22:11 | como fazer compact ou copy e tendem a fragmentar mais. Não quer dizer que é impossível fazer a parte de copy. |
| 22:18 | Se você mudar um objeto de lugar, ele ganha um novo endereço, agora você precisa garantir que quem tente acessar o endereço antigo caia no novo, algo como uma barreira de leitura. |
| 22:29 | Um dos meus problemas com acesso a ponteiros não é só por aritmética de ponteiro, mas |
| 22:35 | porque dificulta defragmentação via compact copying. Era o que o Go pretendia fazer, mas se não me engano até agora eles não implementaram |
| 22:43 | a fase de copy. Além disso podemos executar partes dessas fases concorrentemente e paralelamente usando |
| 22:50 | threads reais. Por isso em JVM você ouve falar de nomes como Parallel GC ou ConcurrentMarkSweep GC. |
| 22:57 | O primeiro usa múltiplas threads. O segundo só uma thread, mas ele pausa o mundo só na fase inicial de mark e sweep, |
| 23:05 | mas depois ele roda paralelamente à aplicação. JVM pra servidor usava o Parallel GC por exemplo. |
| 23:12 | Hoje em dia temos o G1GC que usa gerações menores de segmentos 0, 1 e 2 ou Eden, Survivor |
| 23:19 | e Old como expliquei acima, mas ele usa múltiplos segmentos de cada geração em vez de segmentos |
| 23:25 | contíguos e outros algoritmos. O problema de rodar concorrentemente é a fase de Mark and Sweep, que exige a tal pausa |
| 23:34 | do programa ou Stop the World. Pra evitar isso, linguagens como Erlang implementam uma versão melhor que é mais custosa mas |
| 23:42 | evita a pausa, chamada Tracing collector. Pense uma fase de mark dividida em 3 fases, como se fossem gerações, usando alguma variação |
| 23:51 | do algoritmo chamado Tri-color, onde determinamos cores como preto, cinza e branco e no mark |
| 23:58 | os objetos são movidos pra preto ou branco, e no final quando nenhum objeto for cinza, |
| 24:04 | podemos fazer sweep de todos os objetos que sobraram com a cor branca. A vantagem disso é que podemos fazer essa marcação sem precisar pausar o programa. |
| 24:13 | O Incremental Mark and Sweep do Ruby usa estratégia de Tri-color pro que se chama de Minor GCs |
| 24:19 | ou fases de mark mais rápidas. O collector do Java tem vários outras estratégias além do que expliquei até agora. |
| 24:26 | De qualquer forma, o que chamamos de um garbage collector, completo, poderia ser um "Parallel |
| 24:31 | Concurrent Generational Incremental Mark and Sweep Copy Compactor Collector". |
| 24:37 | Ruby e Python fazem algo similar, com a limitação de não poderem ser copy collectors nem rodar |
| 24:44 | collectors concorrentemente. Javascript faz a mesma coisa também. Generational garbage collectors tendem a usar mais memória pra manter todas as estruturas |
| 24:53 | e segmentos pra cada geração. Ou seja, é um overhead mais alto do que o jeito do Objective-C e Swift. |
| 25:01 | Linguagens compiladas nativamente com um runtime pequeno como C ou Objective-C tendem a depender |
| 25:07 | principalmente do alocador do sistema operacional como o ptmalloc2 ou jemalloc. |
| 25:12 | Linguagens interpretadas são híbridos, ele tem um espaço de heaps alocados com alocador |
| 25:18 | em user-land pra gerenciar os objetos mas usam o alocador do sistema operacional pra |
| 25:24 | blobs maiores como blocos de texto ou arrays grandes. Uma JVM, se não me engano, pede pro sistema operacional alocar um espaço grande no começo |
| 25:33 | do boot, mas depois ele se vira só em user-land. Vai usar mais memória, mas como não depende de syscalls, tende a ser mais rápido. |
| 25:42 | Ao mesmo tempo, linguagens compiladas e interpretadas dependem do alocador do sistema operacional |
| 25:48 | pra gerenciar a fragmentação de memória como já expliquei no episódio anterior. |
| 25:54 | Uma JVM controla a fragmentação ele mesmo via o processo de copy collector onde ele |
| 26:01 | consegue mover os objetos de lugar. Falando no alocador do sistema operacional, o ptmalloc2 que é o malloc do glibc que a |
| 26:09 | maioria das linguagens usa, aloca arenas pra cada thread real como já expliquei no episódio |
| 26:15 | anterior. Pior ainda, ele não tem thread-cache ainda como o tcmalloc ou jemalloc. |
| 26:21 | Portanto quanto mais arenas ele alocar, mais memória vai desperdiçar. E o multiplicador pra máquinas 32-bits são de 2 vezes o número de threads reais ou seja, |
| 26:31 | máquinas quad-core com hyperthreading que dá 2 threads por core significa pelo menos 16 arenas. |
| 26:36 | Mas em máquinas 64-bits o multiplicador é 8 então são 8 vezes 4 cores vezes 2 threads |
| 26:44 | que dá 64 arenas!! É muita arena. Em estudos do Heroku que é uma plataforma de serviços para deployment de aplicações |
| 26:51 | em ambiente virtualizado eles recomendam diminuir o teto de arenas. Em máquinas pequenas, com 2 cpus virtuais, em testes empíricos ficou notável que configurar |
| 27:02 | o teto pra 2 arenas é mais que suficiente. Segundo Hongli Lai, CTO da Phusion, o motivo desse multiplicador ser tão alto pode ser |
| 27:11 | porque o principal desenvolvedor do alocador de memória é da Red Hat que vende produtos |
| 27:16 | e serviços pro mundo enterprise. Lá a prioridade é aumentar performance mesmo que isso custe desperdiçar muita RAM. 10% |
| 27:24 | a mais de performance por 30 vezes mais memória é uma conta que o mundo Enteprise topa pagar. |
| 27:31 | Mas pra gente que precisa balancear performance com uso de memória pra escalar, a recomendação |
| 27:36 | é simples, basta exportar a variável MALLOC_ARENA_MAX pra 2 e pronto. |
| 27:42 | Só isso já vai evitar muitos vazamentos de memória por mau uso de arenas. |
| 27:47 | Gerenciamento de memória é um assunto absurdamente longo. Até este ponto eu expliquei tudo em linhas gerais. |
| 27:53 | Cada parágrafo deste episódio tem uma literatura gigante que você vai precisar procurar pra |
| 27:58 | entender em mais detalhes. Eu falei de copy collectors numa linha, como se fosse algo trivial, mas não é. |
| 28:04 | Eu falei de thread-cache de malloc como se fosse uma correção simples do ptmalloc2 |
| 28:09 | pro tcmalloc, mas não é. Eu falei como o jemalloc é mais rápido que o tcmalloc, mas procure os relatos de Jason |
| 28:17 | Evans pra ver o tanto de trabalho que eles tiveram pra reescrever várias partes, várias vezes, até realmente chegar na versão atual. |
| 28:25 | Alocadores de memória são super fáceis de escrever errado, de um jeito que vai ser |
| 28:30 | super lento e consumir gigabytes de RAM à toa e ficar vazando em servidores. |
| 28:36 | Nunca tente escrever seu próprio alocador a menos que tenha toneladas de dinheiro e tempo pra jogar fora. |
| 28:42 | Por outro lado, você precisa se interessar em estudar todas as formas que seu alocador |
| 28:47 | funciona. Não basta ver quanto seu processo consome quando sobe. À medida que ele roda o garbage collector vai movendo objetos entre gerações, vai |
| 28:57 | alocando memória do sistema operacional pras suas heaps internas que ele não vai devolver pro sistema operacional ou vai demorar pra devolver. |
| 29:04 | Você precisa achar os pontos no seu programa que geram picos de consumo de memória, porque |
| 29:10 | eles que vão pressionar o tamanho do heap e desperdiçar memória do sistema operacional. |
| 29:16 | Em última instância, você vai lembrar que todo collector tem dezenas configurações |
| 29:21 | pra fazer tuning. Tamanho inicial do heap, fator de crescimento dos heaps, frequência pra rodar os collectors, |
| 29:28 | quantidade de arenas, etc. Normalmente a configuração que já vem é o suficiente pra 99% das aplicações. |
| 29:35 | Não seja ingênuo de achar que seu programa vai ficar muito melhor fazendo tuning dos |
| 29:41 | alocadores ou garbage collectors, praticamente em todos os casos é seu código que desperdiça |
| 29:47 | memória e tuning nenhum vai resolver isso. Mas no 1% dos casos que você já mediu exaustivamente o comportamento da aplicação em produção |
| 29:55 | com dados reais, já corrigiu todo buraco de código possível, então talvez exista |
| 30:00 | alguma chance de um tuning ajudar um pouco. Foi assim que na comunidade Ruby por exemplo descobrimos sobre o tuning de arenas do ptmalloc2 |
| 30:09 | ou trocar pra jemalloc. Em ambientes móveis, smartphones, é pior ainda, porque você não tem disco pra fazer |
| 30:17 | swap. Significa que diferente de desktops e servidores, se seus programas foram mal feitos e alocarem |
| 30:23 | memória de pico demais sem desalocar, o OOM ou Out of Memory Killer vai entrar em ação |
| 30:29 | e matar seu programa com muita frequência, tornando a experiência do usuário uma droga. |
| 30:35 | Por isso eu particularmente não gosto das soluções antigas de abrir aplicações que são só casca pra um navegador web e dentro carregar uma aplicação Javascript. |
| 30:45 | No Javascript você não tem controle sobre o garbage collector e não tem acesso ao pool de memória como no num app nativo de iOS onde você pode mexer nos NSAutoreleasePool, |
| 30:55 | significa que você está à mercê de um generational garbage collector, que usa mais |
| 31:01 | memória que um app nativo, vai ter pausas de mark and sweep, e um Just in time compiler |
| 31:06 | que também está alocando memória e usando mais CPU o tempo todo, porque otimizar código |
| 31:11 | não sai de graça. Tudo tem um preço. Quanto mais alguma coisa é conveniente, menos ele tende a ser eficiente. |
| 31:19 | Quando você está programando pra desktop, que hoje em dia é tudo 64-bits, com muitos |
| 31:25 | endereços virtuais sobrando, mesmo que falte RAM, seu sistema operacional vai jogar tudo |
| 31:30 | pra arquivos de swap em disco. Fica lento, mas nada crasheia, por isso hoje em dia ficou comum fazer todo aplicativo desktop |
| 31:38 | ser uma casca de navegador também e rodar apps web dentro. É o que Spotify, ou Slack ou os editores de texto Atom fazem. |
| 31:46 | Consome memória pra caramba e quanto mais tempo eles ficam rodando mais memória vão |
| 31:51 | consumindo. Por outro lado são super convenientes de fazer e você não precisa controlar memória |
| 31:57 | manualmente. Eu ainda tenho preferência por programas nativos bem feitos que alocam memória de |
| 32:04 | formas eficientes sem a necessidade de usar um garbage collector custoso. Um garbage collector é conveniente, mas não é necessário, especialmente em programas |
| 32:15 | desktop. Como eu já disse antes, tudo é uma questão de trade-off, você troca conveniência por |
| 32:22 | mais lentidão e mais memória. Quanto menos conveniente for, mais você ganha performance e usa menos memória. |
| 32:29 | Não existe um vencedor óbvio, cada caso é um caso. É um aplicativo pra servidor? Pra desktop? |
| 32:35 | Pra smartphone? É grande? É pequeno? Precisa trabalhar quantidades grandes de dados com muita frequência? |
| 32:42 | Precisa coordenar o processamento desses dados paralelamente? Ou de forma distribuída? |
| 32:47 | Tudo isso afeta o que você vai escolher. Com isso você também deve entender porque eu disse no episódio passado que linguagens |
| 32:54 | com máquinas virtuais como Java ou Erlang preferem tomar conta de todos os recursos |
| 33:00 | da máquina, porque o ideal é deixar eles alocarem toda a memória disponível pra gerenciarem |
| 33:06 | os recursos internamente com seus garbage collectors. Percebam que eles levam pra user-land todas as atribuições do sistema operacional no |
| 33:15 | kernel space. Eles fazem poucas syscalls porque conseguem gerenciar coisas como corotinas e gerenciar |
| 33:21 | memória tudo em user-land. O Go usa as funções de alocação como um malloc faz e prefere ficar mais baixo nível, |
| 33:30 | mas ao mesmo tempo evitando depender demais do sistema operacional. Ele evita um pouco da fragmentação porque divide a memória em slabs dependendo do tamanho |
| 33:39 | dos chunks como o ptmalloc e outros mallocs fazem. Mas diferente de Java e Erlang ele não tem e vai ter trabalho pra implementar um copy |
| 33:49 | collector porque expõe ponteiros. É o mesmo motivo de porque Python ou Ruby também Não tem copy collectors. |
| 33:56 | Generalizando um pouco, linguagens interpretadas ou com máquinas virtuais tendem a usar mais |
| 34:02 | memória. Linguagens que não expõe ponteiros podem implementar compact copying collectors e evitar |
| 34:08 | mais fragmentação ao custo de usar mais processamento. E finalmente, chegamos ao último episódio do tema de Back-end! |
| 34:17 | Gerenciamento de Memória era o último assunto pra vocês finalmente terem mais entendimento do funcionamento da máquina e sistema operacional. |
| 34:25 | A discussão sobre linguagens só faz sentido se você entende essas coisas, senão a discussão |
| 34:31 | fica mais parecendo fofoca de telenovela, sem argumentos e só repetindo frases de efeito que alguém disse num tweet ou blog post. |
| 34:38 | Todo mundo só sabe até o ponto que a linguagem tem ou não garbage collector. |
| 34:44 | E todo mundo só acredita que ter um generational garbage collector é bom. Mas ninguém sabe explicar porque é bom e o que você paga tem troca. |
| 34:53 | Mais do que isso, sem entender concorrência, paralelismo e gerenciamento de memória, você |
| 34:58 | também não consegue entrar direito em devops e lá também vai ficar só seguindo superstições, |
| 35:04 | mandingas, e repetindo o que ouviu os outros falar sem realmente saber o que está fazendo. |
| 35:11 | Entender como a máquina e o sistema operacional realmente funcionam, pra mim, é o que começa |
| 35:16 | a dividir as crianças dos adultos. Se você tem dúvida mande nos comentários abaixo, se curtiu mande um joinha, compartilhe |
| 35:24 | com seus amigos, não esqueça de assinar o canal e clicar no sininho pra não perder os próximos episódios. |
| 35:29 | A gente se vê semana que vem, até mais. |
