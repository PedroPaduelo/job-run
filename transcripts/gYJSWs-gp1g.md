# Concorrência e Paralelismo (Parte 2) | Entendendo Back-end para Iniciantes (Parte 4)

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=gYJSWs-gp1g
- **Duração:** 1:01:05
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita O episódio da semana passada foi   bem pesado em conceitos. Estamos no nono episódio da série Começando aos 40, episódio quatro do tema |
| 0:11 | de Back-end, e a segunda parte especificamente sobre Concorrência e Paralelismo. Pra variar, |
| 0:17 | eu tentei encurtar esse episódio mas ele vai acabar virando um dos mais longos da série   de novo. Se você ainda não assistiu meus episódios anteriores do tema de Back-end, |
| 0:27 | eu recomendo que pause agora e vá assistir, porque tudo que eu falei antes vai convergir hoje. |
| 0:33 | Como eu já disse, é um tema bem cabeludo e vamos tentar desembaraçar os últimos   conceitos que vocês vão precisar saber pra conseguir seguir com seus estudos sozinhos. |
| 0:44 | A pergunta que todo mundo fica na cabeça é: qual das linguagens é a mais performática? Ou, |
| 0:50 | qual vai me dar a escalabilidade do Whatsapp e ao mesmo tempo ser mais fácil de programar? |
| 0:55 | Vários números podem parecer impressionantes. Muita gente adora repetir os X milhões de |
| 1:02 | conexões simultâneas que um servidor do Whatsapp consegue suportar e chegam à conclusão que não |
| 1:08 | existe nada melhor do que Erlang. Esse número é bacana, mas não é impressionante. Parem de se |
| 1:14 | impressionar com números sem contexto. E parem de ficar escolhendo tecnologia baseado em blog post |
| 1:21 | ou palestra de engenheiro do Netflix ou Facebook. É um absurdo sem sentido pra pessoas que deveriam |
| 1:28 | ter como profissão raciocinar com lógica. Repitam comigo: você não é o Netflix. Seu |
| 1:35 | produto que ainda nem saiu do papel, não tem nem um usuário, você não precisa nem pensar |
| 1:40 | na escalabilidade massiva de um Netflix, que em horas de pico pode representar ⅓ |
| 1:45 | do tráfego total da internet dos Estados Unidos. Quando alguém me pergunta: Akita, |
| 1:51 | queria fazer tal coisa igual do Facebook, será que dá? Minha resposta é a mais óbvia: claro que dá, |
| 1:57 | você está disposto a PAGAR o mesmo que o Facebook pagou? Se sim, então claro, dá pra fazer igual |
| 2:02 | ou melhor. Guardem esse pensamento, eu ainda vou falar sobre isso em mais detalhes em outro |
| 2:07 | episódio, mas por agora só entendam esta verdade: foda-se mil conexões simultâneas ou 10 milhões de |
| 2:15 | conexões, sua preocupação como iniciante tá a milhares de quilômetros de distância disso. |
| 2:21 | Atenha-se a entender as tecnologias sem virar fã de marcas e ter metas fora da realidade. |
| 2:26 | (...) Já entendemos os mecanismos |
| 2:37 | básicos de como conseguimos ter concorrência e paralelismo. Mas na minha opinião o real problema |
| 2:43 | é a coordenação. Não adianta nada você ter silício suficiente pra executar milhares de threads em |
| 2:50 | paralelo se você não consegue coordenar o trabalho dessas threads. Então se tiver uma única coisa |
| 2:56 | que você precisa levar dessa série toda é que a coisa mais importante nesse tipo de programação   é conseguir a maneira mais simples e “barata” de coordenar tarefas concorrentes. |
| 3:08 | Vamos voltar ao que interessa. Você é um iniciante, finalmente entendeu os conceitos |
| 3:13 | mais básicos de processos e threads. Aprendeu rapidamente sobre forks, sobre copy on write que |
| 3:20 | ajuda a economizar memória. Mas você precisa entender alguns conceitos adicionais sobre   coordenação agora. A unidade mais simples numa CPU é uma instrução. Uma instrução em Assembly, |
| 3:32 | que usa como argumentos certos valores que você preenche em determinados registradores. |
| 3:38 | Daí a instrução executa e o resultado é escrito pela CPU em algum acumulador ou |
| 3:44 | outro registrador. Ele incrementa o contador de programa e vai pra próxima instrução. |
| 3:49 | É assim que a CPU começa a transformar o mundo ao seu redor. Tudo que você programa serve para |
| 3:56 | pegar alguma informação que o mundo exterior vai fornecer, por exemplo o que o usuário digita ao |
| 4:02 | programa, e você vai usar essa e outras informações para gerar algum resultado. |
| 4:08 | Programação é basicamente isso: transformação de dados. Uma instrução simples de soma, |
| 4:13 | pega dois números que você armazena um em cada registrador, a instrução executa o cálculo e |
| 4:19 | transforma esses dois números num único que representa a soma deles, e grava em outro |
| 4:25 | registrador. Essa instrução é basicamente o que você chamaria de uma função. Toda função recebe |
| 4:31 | parâmetros ou argumentos de entrada, processa alguma coisa e retorna algum valor de saída. |
| 4:37 | E você pode usar o resultado de uma função como parâmetro ou argumento de outra função, e então |
| 4:43 | vai encadeando uma função atrás da outra. Quando você manda o sistema operacional executar   o binário do seu programa, digamos um programa como wget ou curl no Linux, |
| 4:53 | que você pode pensar como se fossem navegadores Web muito simples que rodam na linha de comando, |
| 4:59 | você normalmente passa uma parâmetro, no caso uma URL de algum arquivo que você quer baixar. |
| 5:06 | Você já viu ou vai ver um monte de tutoriais que usam um desses dois comandos pra baixar |
| 5:11 | alguma coisa. O OS vai fazer o que já expliquei antes: alocar memória, criar um processo isolado, |
| 5:17 | carregar seu binário, e passar esse parâmetro pro processo. Esse processo vai executar, |
| 5:23 | no caso conectar no servidor que você mandou e baixar o tal arquivo. E quando terminar, |
| 5:28 | o OS vai descarregar e liberar os recursos e o resultado, se tudo deu certo, pode ser |
| 5:34 | um arquivo gravado em algum lugar no seu sistema de arquivos. Nesse caso o programa funciona como |
| 5:39 | uma “função” também, ele tem uma entrada que é a URL que você passou de parâmetro |
| 5:45 | e tem um retorno que foi o arquivo gravado. Ele transformou uma URL em um arquivo. |
| 5:51 | Em sistemas UNIX ou Linux, os shells como BASH ou ZSH, onde você roda na linha de comando, permitem |
| 5:59 | encadear esses programas como se fossem funções. Quando seu programa carrega e vira um processo |
| 6:04 | o sistema cria três canais unidirecionais: um canal padrão de entrada ou Standard In ou STDIN, |
| 6:11 | um canal padrão de saída ou Standard Out ou STDOUT e também um outro pra erros, o STDERR. |
| 6:18 | Na prática pense que todo processo pode iniciar conectando alguma coisa no STDIN |
| 6:24 | e alguma outra coisa no STDOUT. Por exemplo, podemos usar o tal programa CURL pra baixar |
| 6:29 | um arquivo da Web mas em vez de gravar em um arquivo local podemos redirecionar o conteúdo |
| 6:34 | baixado pra esse STDOUT e conectar no STDIN de outro programa, por exemplo, um programa como o |
| 6:41 | famoso grep que filtra texto pra fazer pesquisa. (curl -s http://somepage.com \| grep whatever) Quando ensinei sobre processos já expliquei que processos sobem em espaços isolados de memória e |
| 6:51 | o código interno do processo não interfere no espaço de memória de outro processo. O |
| 6:57 | que eu acabei de falar sobre encadear processos redirecionando o STDOUT de um ao STDIN do outro, |
| 7:04 | usando o que chamamos de Pipes é a primeira forma mais simples de comunicação e, portanto, |
| 7:09 | coordenação entre processos, mas não é o único e nem necessariamente o mais útil, porque você só |
| 7:16 | liga o final de um programa ao começo de outro programa e esses canais só tem uma direção, |
| 7:22 | ou seja, o primeiro programa é quem manda coisas pro segundo programa, mas não o oposto. |
| 7:28 | Sem entrar em muitos detalhes hoje, existem outras formas de um processo se comunicar com outro. Como |
| 7:34 | já disse antes existem os sinais como SIGINT. E você pode codificar seu programa pra ignorar isso |
| 7:41 | ou fazer alguma coisa quando recebe esses sinais ou eventos. Novamente é mais uma forma rudimentar |
| 7:47 | de comunicação. Um terceira forma rudimentar é que dois processos abram um mesmo arquivo, |
| 7:53 | daí um deles pode ir escrevendo uma linha nova de cada vez nesse arquivo e o outro processo pode   ir lendo essas linhas novas. Expandindo nessa idéia de um arquivo |
| 8:02 | comum entre dois processos, o sistema operacional oferece outra opção, os FIFOs que se você estudou |
| 8:09 | alguma coisa de estruturas de dados, funcionam como uma fila, First In, First Out, ou seja, |
| 8:15 | o primeiro elemento que entra é o primeiro elemento que sai. Você pode abrir um FIFO e   dar um nome e abrir o mesmo FIFO a partir de outro processo, é quase como se fosse um arquivo. Agora |
| 8:26 | os processos podem se comunicar e a essa estrutura damos o nome de Named Pipe. E chamamos de pipe |
| 8:33 | porque é como se fosse um cano mesmo, passando informação de um lado para o outro. Eles são |
| 8:39 | limitados como os pipes simples ou arquivos. Um dos processos abre o named pipe pra ler |
| 8:45 | e o outro pra escrever e por isso também a comunicação só flui numa única direção. Em todos os exemplos, um dos processos serve de produtor de alguma informação e o outro processo |
| 8:56 | serve de consumidor. E o mecanismo no meio, seja um arquivo ou um named pipe, serve meio como uma |
| 9:04 | fila. Eu acho que o mecanismo mais simples de comunicação entre dois processos é uma fila e o |
| 9:10 | sistema operacional já oferece esses mecanismos faz décadas. Porém, no nosso mundo de Web, |
| 9:15 | internet e programas que funcionam como servidores - que seriam os produtores - e programas que |
| 9:21 | funcionam como clientes - que seriam consumidores, esses mecanismos não funcionam, porque não |
| 9:27 | se comunicam pela rede. Mas mesmo na mesma máquina, sem depender de rede, podemos simular a |
| 9:34 | comunicação entre um servidor e múltiplos clientes usando named pipes ou arquivos. Porém, cada novo |
| 9:41 | cliente conectando no servidor exige um novo named pipe ou arquivo. Por isso existem os sockets. |
| 9:48 | No caso da internet falamos sobre sockets de IP que trafegam pacotes no formato TCP. Uma |
| 9:54 | das vantagens de usar sockets é que o programa servidor se liga a uma porta no sistema como já |
| 10:00 | expliquei e aceita conexões de múltiplos clientes. Mas diferente de arquivos ou named pipes, |
| 10:06 | o servidor só precisa se comunicar através de um único socket, a partir de onde vai aceitando |
| 10:12 | as conexões de múltiplos clientes. Além de só precisar de um único socket pra abrir esse canal, |
| 10:17 | a comunicação é bi-direcional, então o cliente também pode enviar dados pro   servidor e vice-versa, pelo mesmo socket. No caso de Unix e Linux além de um socket IP |
| 10:29 | existe o que chamamos de Unix Sockets. Ele tem propriedades parecidas com sockets de IP mas só |
| 10:35 | servem para processos rodando na mesma máquina já que não é um socket de rede. É a maneira preferida |
| 10:40 | de fazer dois processos se comunicarem de forma eficiente porque você só precisa de um socket no |
| 10:47 | processo servidor pra atender múltiplos outros processos clientes, que normalmente chamamos |
| 10:52 | de workers, e ele abre um canal bi-direcional, diferente de named pipes. No episódio anterior |
| 10:58 | eu expliquei como o servidor web NGINX tem um processo master, que serve como um servidor, |
| 11:03 | e ele cria diversos processos workers e, claro, eles se comunicam entre si via esses Unix Sockets, |
| 11:10 | canais versáteis bi-direcionais. É como outros servidores que geram forks e workers |
| 11:15 | fazem para seus processos coordenarem entre si, como um Postgres ou MySQL. |
| 11:20 | No mundo web, onde hoje temos os tais micro-serviços, eles são basicamente processos, |
| 11:26 | programas servidores, que se ligam a uma porta de rede e abrem sockets IP aceitando conexões |
| 11:33 | TCP e em particular oferecendo comunicação via o protocolo HTTP. Mas na prática são processos |
| 11:39 | que se coordenam via sockets. Basta vocês entenderem que sockets, em particular sockets IP, |
| 11:45 | obrigam um processo a se ligar a uma porta; e são canais bi-direcionais de comunicação. Em UNIX como |
| 11:52 | BSD ou clones como Linux, podem ser Unix sockets para comunicação de processos na mesma máquina ou |
| 11:58 | sockets IP para comunicação de múltiplas máquinas numa rede TCP/IP. E no nosso mundo Web essa |
| 12:04 | comunicação normalmente se dá através do protocolo HTTP mas não é uma obrigação, podemos ter outros |
| 12:11 | protocolos mais eficientes como o Protobuf ou Protocol Buffers que é um protocolo em formato |
| 12:16 | binário, que é mais eficiente que o HTTP que é um protocolo texto, inventado pelo Google. |
| 12:23 | Aliás, lembrem que protocolos binários sempre são mais eficientes que protocolos em texto pelo |
| 12:29 | simples fato que texto ocupa muito mais espaço. A explicação é muito simples. Num computador, |
| 12:35 | representamos tudo no formato binário, 1 ou 0. Você já deve ter aprendido isso então vou resumir |
| 12:40 | muito rapidamente. 1 byte são 8-bits. Em 1 byte você pode representar números inteiros |
| 12:46 | de 0 até 255. Por que 256? Porque 2 elevado a 8 é 256. Uma palavra double byte ou seja 2 elevado |
| 12:53 | a 16 representa números até 65 mil 536. Um número como 1,000, cabe perfeitamente em   2 bytes, se for representado binariamente. Mas, se você preferir mandar o número 1,000 como um texto, |
| 13:01 | isso seria um texto de 4 caracteres. Em um sistema moderno que reconhece Unicode ou UTF-8, |
| 13:06 | cada letra precisa de 2 bytes ou mais. Existe uma tabelona que mapeia cada caracter de cada alfabeto |
| 13:13 | do mundo a um código. Em alfabetos ocidentais, 1 byte já resolve, mas kanjis de japonês precisa de |
| 13:20 | pelo menos 2 bytes por exemplo. Mas no caso do texto 1,000 que é um, zero, zero, zero, |
| 13:25 | são pelo menos 4 bytes. Em resumo, o número puro sozinho, em binário, cabe em 2 bytes, |
| 13:31 | mas sua representação em texto precisa de 4 bytes, ou seja, o dobro do tamanho. Iniciantes tem |
| 13:37 | dificuldade de entender isso mas comece decorando, o número inteiro 1000 é um elemento totalmente |
| 13:42 | diferente do texto de 4 caracteres “1000”. Isso fazia mais diferença numa época onde as redes |
| 13:49 | eram extremamente lentas, e hoje você não pensa muito nisso porque qualquer um pode |
| 13:54 | ligar nas porcarias de uma Net ou Vivo e pedir internet de 50 Megabits ou mais. Mas se você |
| 14:02 | tem um sistema que trafega milhões de gigas por hora, todo byte faz diferença, por isso |
| 14:07 | pra muita coisa o Google usa o Protobuf em vez de HTTP em seus sistemas. Pro seu dia a dia, |
| 14:14 | não se preocupe tanto, HTTP tá de bom tamanho mesmo porque hoje sabemos comprimir texto com |
| 14:19 | algoritmos como GZIP que podem derrubar o tamanho de um texto longo até menos de um décimo do seu |
| 14:24 | tamanho. Mas isso é assunto pra outro dia. Eu expliquei tudo isso porque a comunicação entre |
| 14:30 | dois processos, usando um protocolo pesado como HTTP, sobre TCP/IP, passando pros sockets que seu |
| 14:36 | programa se conecta, vai precisar fazer uma coisa chamada marshalling ou serialização. Ou seja, |
| 14:42 | internamente no seu programa o dado, digamos o tal número 1000 puro, está numa variável que |
| 14:48 | provavelmente é um inteiro de 2 bytes. Mas quando você vai enviar pra fora do seu processo, como a |
| 14:54 | exigência é o protocolo HTTP, você vai serializar ou seja, transformar o inteiro binário pra um |
| 15:01 | texto e cuspir pelo socket. Do outro lado um outro processo cliente vai receber esse texto e vai ter |
| 15:07 | que converter de volta pra um inteiro, ou seja, desserializar o dado. Muitos dos bugs modernos em |
| 15:13 | micro-serviços, ou seja, comunicação de processos através de HTTP, vem de erros nessa conversão e |
| 15:20 | desconversão. Fique esperto com isso. Mas eu estou me adiantando. Tudo isso   foi pra explicar as diversas opções que existem para comunicação entre processos, |
| 15:30 | você tem coisas muito simples como pipes, named pipes, arquivos, unix sockets e até |
| 15:36 | sockets IP. Pra fazer um programinha besta, que só roda localmente, falar com outro programinha, |
| 15:41 | que também roda só localmente na mesma máquina, obviamente usar um protocolo como HTTP é dar um |
| 15:47 | tiro de canhão pra matar uma mosca. É descomunal e ineficiente. Na pior das hipóteses você vai querer |
| 15:54 | usar Unix Sockets. Se você programa em C existem bibliotecas como OpenMPI e OpenMP para facilitar |
| 16:00 | programar comunicação inter processos na mesma máquina ou mesmo entre diversas máquinas. |
| 16:06 | Entendido como processos se comunicam, vamos entrar dentro de um processo e falar de Threads. |
| 16:13 | Eu já expliquei nos episódios anteriores que uma Thread tem acesso à toda a memória interna |
| 16:19 | do processo. Então se uma thread precisa se comunicar com outra thread, elas podem |
| 16:24 | basicamente compartilhar uma mesma estrutura de dados. No caso de C digamos um Array. Ou uma lista |
| 16:31 | ligada. Como fica tudo no mesmo espaço de memória, não existe a necessidade de você usar mecanismos |
| 16:36 | fora do processo como um named pipe ou unix sockets, porque você acessa o dado diretamente |
| 16:43 | no endereço da memória virtual do processo. Mecanismos externos que eu falei antes existem |
| 16:49 | porque um processo não enxerga nenhum endereço de memória externo ao seu espaço virtual alocado pelo |
| 16:55 | sistema operacional. Por isso comunicação entre threads é ordens de grandeza mais eficiente, |
| 17:01 | mas com essa eficiência vem todos os problemas de mutex, semáforos, bugs de race condition |
| 17:07 | e dead-locks que eu já expliquei. Programar com threads é um processo que   tem que ser extremamente cuidadoso da parte do programador. O sistema operacional não tem como |
| 17:17 | te proteger e você precisa garantir que uma thread não vai escrever em cima do mesmo endereço onde |
| 17:23 | já tem outra thread escrevendo ao mesmo tempo. Num sistema que só opera com uma thread real, |
| 17:29 | esse problema meio que não existe porque o scheduler do sistema operacional vai deixar |
| 17:35 | só uma thread realmente rodar e a outra precisa esperar a vez, o tal do time-slice que eu já |
| 17:41 | expliquei. Mas em máquinas com 2 cores ou mais, realmente 2 threads podem estar rodando exatamente |
| 17:48 | no mesmo instante, com paralelismo real, e é aí que os bugs que eu falei podem acontecer. |
| 17:54 | Como eu disse antes, o problema todo é coordenação. Pra piorar, vocês vão   notar que existe a CPU com seus cores reais, o hardware de silício, que rodam threads reais, |
| 18:04 | uma por core. E existem as threads que o sistema operacional organiza e gerencia. |
| 18:10 | O tal scheduler do sistema operacional como o CFS do Linux, tem acesso a esses cores físicos, |
| 18:16 | mas os programas podem mandar criar 100 Linux threads. Então numa máquina Intel i5 da vida, |
| 18:22 | com quad-core e hyper-threading, existem 8 threads reais que podem rodar em paralelo em cada |
| 18:28 | determinado instante, mas o sistema operacional pode gerenciar centenas ao mesmo tempo, |
| 18:34 | fazendo seu scheduler ir dando um pouco de tempo pra cada uma, fazendo o tal context-switching que |
| 18:40 | eu expliquei, tirando as coisas da mesa de uma thread, recolocando as coisas na   mesa pra outra thread e dando vez pra ela. Para gerenciar essas threads, fazer o tal context |
| 18:49 | switching, o sistema operacional precisa guardar o tal contexto em memória pra cada thread. E eu já |
| 18:55 | disse que uma thread vai gastar pelo menos 1 MB de memória. Então quanto mais threads você criar mais |
| 19:01 | memória vai gastar. Pior, quanto mais threads você criar, maior o trabalho de context switching. E |
| 19:08 | pior ainda, quanto mais threads você criar maiores as chances de seu programa ter aqueles bugs por |
| 19:14 | não ser thread-safe. Existe ainda outro agravante, criar threads é uma atribuição do sistema, |
| 19:20 | mais especificamente da kernel. Para seu programa pedir pra kernel criar threads |
| 19:25 | você precisa fazer system calls, as syscalls que eu falei, e isso também não é barato. |
| 19:31 | Aliás, se você não sabia, vale definir. Você pode pensar que a kernel do Linux, |
| 19:37 | drivers, os programas que vem numa distribuição, e os próprios programas que você escreveu,   é tudo a mesma coisa. São todos binários que rodam na máquina. Se você fez o que eu |
| 19:46 | recomendei e estudou um pouco de Linux, você sabe que existe o comando `sudo`, o comando |
| 19:52 | que escala seu programa pra rodar com permissões de root ou administrador da máquina. Nesse caso |
| 19:58 | você sabe no mínimo que existem diferenças entre rodar como um usuário restrito normal   ou rodar como um root que tem acesso a tudo. Mas na verdade o root não é a coisa mais poderosa |
| 20:09 | do sistema. O Kernel é que é. No final das contas é o kernel que decide o que o root pode ou não |
| 20:16 | pode fazer. Então se você só chegou até o root, vamos entender outra coisa. A única coisa que |
| 20:21 | tem acesso irrestrito a tudo da máquina, todos os dispositivos, toda a memória e pode executar |
| 20:27 | qualquer coisa, é a kernel. Na arquitetura de processadores Intel existem 4 anéis de permissão. |
| 20:33 | A Kernel boota e roda no chamado Ring 0, ou anel 0, dentro desse anel qualquer código tem acesso |
| 20:40 | a tudo. Todos os seus programas, inclusive os que rodam via sudo, rodam no Anel 3, o mais restrito |
| 20:46 | de todos. É onde rodam os seus programas. Nos Anéis 1 e 2 rodam os drivers e coisas de |
| 20:52 | virtualização, por exemplo o Virtual Box carrega a kernel do OS que ele vai emular no Anel 1. No |
| 20:58 | Anel 3 várias instruções de Assembly da máquina não funcionam, como a instrução que muda de anel, |
| 21:04 | obviamente, ou a instrução HLT que dá Halt e pára a máquina. O sudo simplesmente libera mais system |
| 21:11 | calls pra kernel, mas o programa ainda vai ter que fazer syscalls e pedir coisas pra kernel. |
| 21:16 | Num processador ARM também existem Rings mas a numeração é ao contrário,   o que ele chama de EL0 é o equivalente ao user land, ou Ring 3 da Intel. O EL1 é onde |
| 21:28 | roda a kernel, eu não tenho certeza mas acho que seria mais equivalente ao Ring 1 da Intel, porque   no EL3 roda o Hypervisor que vai ser tema talvez do próximo episódio. Daí você pode rodar múltiplos   kernels no EL1 isolados um do outro. O mais importante é entender que existe User   land que é onde rodam todos os seus programas e Kernel space, onde roda a Kernel, a única |
| 21:38 | entidade que tem real acesso a tudo do sistema. Chamar uma função dentro do seu próprio processo |
| 21:43 | é extremamente barato. Chamar uma syscall é mais ou menos como chamar uma função em outro processo, |
| 21:50 | então você pode imaginar que vai acontecer algo parecido com um context switch toda vez. Fora |
| 21:56 | isso, existe um salto em privilégios do Ring 3 pro Ring 0. Tudo isso custa. Ok, |
| 22:01 | são micro-segundos a mais toda vez. Mas pense um servidor web com threads,   com milhares de usuários pedindo requisições HTTP e seu servidor criando threads pra cada |
| 22:11 | uma e matando todas que vão acabando. Milhares por segundo, milhares de syscalls por segundo, |
| 22:17 | agora as coisas começam a ficar caras. Não tem nada mais rápido do que código que roda   dentro do seu processo. Por isso você quer evitar fazer syscalls o máximo que puder. Criar milhares |
| 22:28 | de processos ou milhares de threads custa memória, custa context switch, custa escalar privilégios |
| 22:35 | entre Rings. Parece que o povo do Node.js estava correto em usar I/O assíncrono, certo? Calma, |
| 22:41 | I/O assíncrono e event loops ou reactors é só “Uma” forma rudimentar de concorrência em |
| 22:47 | sistemas que não suportam outros mecanismos como threads. E justamente, Javascript não suporta |
| 22:52 | threads. Ele é mono-thread, então a sua única opção é usar o intervalo entre atividades de |
| 23:00 | I/O como arquivos ou sockets pra tentar fazer alguma coisa. Mas isso é muito pouco. Eu já expliquei uma das soluções no episódio anterior. É fazer o que o NGINX faz: |
| 23:09 | múltiplos processos, na média um pra cada core da sua máquina, ou seja, um processo pra cada thread |
| 23:16 | e cada uma delas com um reactor pra aproveitar que chamadas de I/O costumam gastar tempo pra |
| 23:22 | completar. A grande vantagem num sistema como Node.js que é um processo de um único-thread é que |
| 23:28 | você tem alguma concorrência graças às syscalls de I/O assíncrono do sistema operacional, e pelo |
| 23:34 | menos não tem que lidar com as dores de cabeça de mutex e bugs de sincronia como race conditions ou |
| 23:40 | deadlocks. Imagine o inferno extra que ia ser se Javascript além de tudo ainda tivesse que lidar |
| 23:46 | com mais esse tipo de categoria de bugs. Interpretadores que dependem bastante do sistema |
| 23:52 | operacional por baixo, como Python ou Ruby possuem Threads reais. Porém existe um grande problema. |
| 23:58 | Para ter boa performance, eles delegam muita coisa pra módulos escritos em C. O Scipy, uma |
| 24:05 | das bibliotecas científicas mais famosas do mundo Python é quase inteira escrita em Fortran e C++, |
| 24:11 | por isso ela é veloz, só uma casca é escrita em Python. Essas extensões ganham acesso às |
| 24:18 | estruturas de dados internas dos interpretadores, é como se fossem parte do interpretador. Agora vem o grande problema: elas não são necessariamente thread-safe, na verdade |
| 24:29 | a maioria não é, e você não tem como saber. Por causa disso, as Threads de Python e Ruby, |
| 24:34 | apesar de mapearem para threads reais do sistema operacional e terem a capacidade de   rodar em paralelo, acabam bloqueadas por um lock gigante do interpretador, que justamente ganha o |
| 24:45 | nome de Global Interpreter Lock, ou GIL. Com exceção de chamadas de I/O que conseguem |
| 24:51 | rodar realmente em paralelo, as threads do interpretador são bloqueadas por causa do tal |
| 24:56 | GIL. Elas ainda são úteis, mas não tanto quanto numa linguagem que não tenha o GIL. Na prática, |
| 25:02 | assim como Javascript, tanto Python quanto Ruby acabam sendo essencialmente single-threaded, |
| 25:08 | com algumas exceções como operações de I/O. Clones deles como Pypi ou JRuby, como não precisam |
| 25:15 | manter compatibilidade com extensões em C, podem desligar o GIL e usufruir de threads reais. |
| 25:20 | Assim como Node.js em 2009, eu já expliquei como o Twisted em 2002 implementou a mesma solução de |
| 25:28 | colocar um event loop numa thread pra atender milhares de requisições de I/O assíncronas e |
| 25:33 | usar o intervalo enquanto espera essas chamadas completarem pra executar alguma computação e assim |
| 25:40 | ter um jeito rudimentar de concorrência. Obviamente isso tem duas desvantagens, |
| 25:46 | a primeira é que basta você fazer uma computação que demore demais e o event loop inteiro é |
| 25:52 | bloqueado mesmo que a chamada de I/O já tenha terminado, já que roda tudo na mesma thread. |
| 25:57 | E a segunda desvantagem é que sua aplicação precisa ter muitas requisições de I/O pra |
| 26:03 | compensar, ou seja, é melhor se usado em servidores de rede, como um servidor de aplicações |
| 26:09 | Web. Esse modelo não funciona pra programas que são pesados em computação só. Por isso |
| 26:15 | Node.js ou Twisted são indicados pra aplicações web. No mundo Ruby temos opções similares como |
| 26:21 | Eventmachine ou o mais recente Async. No mundo Python, depois do Twisted também foi criado o |
| 26:27 | Tornado e o Gevent que tem APIs mais modernas. Na prática é a mesma solução em todos eles: |
| 26:33 | um event loop rudimentar que chamamos de reactor, que é gerenciado numa única thread, |
| 26:39 | intercalando syscalls assíncronas de I/O e executando algum código nos intervalos. |
| 26:44 | Do ponto de vista da programação do código temos um problema. A forma como se programa |
| 26:50 | um event loop é fazendo uma chamada de função assíncrona e passando como parâmetro uma segunda |
| 26:56 | função que deve ser chamada quando o I/O acabar. Por exemplo, uma função de ler um |
| 27:02 | arquivo de template de HTML na máquina recebe de parâmetro uma segunda função pra preencher esse |
| 27:09 | template e gerar o HTML final. Num sistema single-thread, com tudo bloqueante, você |
| 27:14 | escreveria essas chamadas de função uma embaixo da outra. Mas num sistema orientado a eventos, |
| 27:20 | você precisa passar as funções subsequentes uma como parâmetro da outra. E isso cria o horroroso |
| 27:27 | padrão de cascata ou o que eu gosto de chamar, de hadouken de funções. Se você ver algo assim |
| 27:34 | hoje em dia, é um jeito antigo de escrever, é hediondo e não há ser vivo no planeta que veja |
| 27:40 | algo nesse formato e não sinta imediatamente vontade de vomitar um pouco na boca. No C já tínhamos algo parecido mas não necessariamente só pra concorrência, é o conceito |
| 27:50 | de passar o ponteiro ou referência de uma função como parâmetro de outra função, chamamos isso de |
| 27:56 | callbacks. Interfaces gráficas em VB ou Delphi ou Java Swing também tinham esse conceito com |
| 28:02 | Listeners por exemplo. É um jeito rudimentar de se encadear funções onde uma depende do resultado da |
| 28:09 | outra dentro de um loop de eventos. Toda interface gráfica é basicamente um loop também. Na prática, |
| 28:16 | você tem um callback pra quando tudo dá certo e outro callback pra quando dá algum erro. |
| 28:21 | O Twisted do Python introduziu um conceito de código, os Deferreds. Em vez de chamar uma função, |
| 28:27 | você cria um objeto que pode ser encadeado. Esse objeto basicamente engloba a tal chamada |
| 28:33 | assíncrona, por exemplo, e você pode configurar esse objeto chamando métodos como addCallback. |
| 28:39 | É quase a mesma coisa que antes, mas como estamos encapsulando a função num objeto, |
| 28:44 | ele fica um pouco mais maleável de se trabalhar no seu código sem precisar virar um callback hell ou |
| 28:50 | hadouken que falei antes. No mundo Web o framework JQuery adicionou a mesma construção com o mesmo |
| 28:56 | nome, Deferreds. Assim você podia configurar uma chamada Ajax e conectar callbacks. |
| 29:02 | Na prática você encapsula uma chamada assíncrona num objeto, que você vai “deferir” a execução pra |
| 29:09 | algum ponto no futuro, normalmente depois de ter a oportunidade de configurar esse |
| 29:14 | objeto com callbacks ou esperar outros deferreds ficarem prontos e executar tudo de uma vez só, |
| 29:20 | por exemplo. De qualquer forma é uma forma melhor do que ter hadouken de callbacks. |
| 29:25 | Retomando, fazer syscalls é caro. Context Switching é caro. Chamar coisas, funções, dentro |
| 29:32 | do próprio processo é rápido e barato. Dentro do seu processo existe seu código transformado em |
| 29:38 | binário. E você tem suas funções lá. Funções que demoram demais pra executar bloqueiam todo o seu |
| 29:45 | processo ou thread. E se fosse possível pausar uma função antes dela acabar, deixar ela de lado, |
| 29:52 | e dar chance de outra função rodar dentro do mesmo processo? Não estou falando de criar 2 threads, |
| 29:58 | estou falando de na mesma thread a função ser pausada, deixar outra executar e daí |
| 30:04 | voltar a executar a primeira. É como se fosse uma thread mas como é tudo dentro do mesmo processo, |
| 30:10 | sem syscalls, sem context switching. É pra isso que serve uma corrotina, pense |
| 30:16 | uma função com múltiplos pontos de suspensão, que você pode continuar ou resumir depois. |
| 30:22 | Em particular, um caso especial de corrotina se chama Fiber ou Generator. Se você já brincou com |
| 30:29 | classes de Enumerators e Iterators em Python ou Ruby, sabe pra que elas servem. Elas são |
| 30:35 | basicamente funções ou métodos como qualquer outro. Mas de dentro desse método faça de conta |
| 30:41 | que existe um loop gigante, indo até infinito. Significa que esse método vai bloquear tudo e |
| 30:47 | você não vai rodar mais nada pra sempre. Mas de dentro desse loop você pode chamar uma função, |
| 30:52 | normalmente nomeada como yield, que vai devolver o controle pro código anterior que chamou o método. |
| 30:59 | Agora esse código anterior pode executar outra coisa e quando quiser pode chamar o método resume, |
| 31:06 | pra resumir a execução desse método com loop gigante, e ele vai dar yield de novo e assim |
| 31:11 | por diante. Se você lembra de quando eu falei do Windows 3.1, isso seria algo parecido com uma |
| 31:17 | multitarefa cooperativa. Fibers são funções, ou objetos de execução, onde você codifica |
| 31:24 | pontos de suspensão ou pausa da execução. A maioria das linguagens atuais têm algo assim, |
| 31:31 | os nomes vão variar mas se você ouvir corotina, fiber ou generator é basicamente a mesma coisa. |
| 31:37 | Python tem, Ruby tem, Javascript tem, Swift tem, Kotlin tem, todo mundo tem algo assim. |
| 31:43 | De qualquer forma, pra que servem essas corotinas que pausam e podem ser resumidas se elas não rodam |
| 31:50 | em paralelo? Em princípio elas se parecem com threads: elas estão dentro do processo, |
| 31:55 | portanto tem acesso a todas as estruturas de dados do processo. Porém, como elas não rodam |
| 32:01 | em paralelo, não existe a situação de uma querer escrever em cima dos dados da outra. Você que tem |
| 32:07 | que manualmente pausar e manualmente resumir uma fiber, portanto você tem controle. Por isso elas |
| 32:14 | são mais simples de se trabalhar do que threads. Mas elas não rodam em paralelo, então se parecem |
| 32:19 | mais com as threads de Python ou Ruby, que apesar de terem a capacidade de rodar em paralelo já que |
| 32:25 | mapeia pra threads reais do sistema operacional, existe o GIL que vai bloqueá-las. Mas diferente |
| 32:32 | de threads, não precisamos de chamadas pra Kernel, elas são simples abstrações   dentro do seu programa, em user-land. A existência dessa construção na linguagem |
| 32:42 | facilita a programação de concorrência. ?Eu não disse que a forma rudimentar é uma |
| 32:48 | função recebendo callbacks pra chamar outras funções quando vier o evento que determinado |
| 32:54 | I/O finalizou? Depois inventamos Deferreds que já ajuda. Porém, podemos usar Fibers pra escrever o |
| 33:01 | mesmo código que seria um hadouken de callbacks quase como se fosse programação imperativa |
| 33:07 | tradicional, só que o yield bloqueia até a chamada voltar e daí ele resume daquele ponto. Então veja |
| 33:14 | no exemplo como é um código hadouken Agora veja o mesmo código usando fibers |
| 33:20 | e a chamada de yield, e você vai ver como de repente do ponto de vista do código tudo ficou |
| 33:25 | mais simples e sequencial. Então só por isso já temos um ganho absurdo em legibilidade e, por |
| 33:31 | consequência, mantenabilidade do código. Do ponto de vista do código, se somarmos um |
| 33:37 | event loop com I/O assíncrono, conseguimos ter algum nível de concorrência e com fibers |
| 33:43 | conseguimos ter um código que não é tosco. Estamos chegando em algum lugar aqui. Com |
| 33:48 | isso Javascript com Node.js, Python com Twisted, Tornado ou GEvent, Ruby com Eventmachine ou Async, |
| 33:55 | todos tem a possibilidade de usar essa arquitetura de reactors, porque no fundo quem realmente faz a |
| 34:01 | mágica é a Kernel e suas syscalls assíncronas como epoll, kqueue ou IOCP. Porém, todas as bibliotecas |
| 34:08 | que fazem chamadas síncronas, ou seja, do jeito bloqueante, precisam ser reescritas para usar |
| 34:15 | esse recurso de fibers ou generators. Daí você entende porque em Python ou Ruby esse suporte é |
| 34:20 | mais complicado e porque no Node.js é mais fácil: porque Node.js já nasceu com suas bibliotecas |
| 34:26 | sendo criadas pra serem assíncronas. Isso ajuda em linguagens que tem dificuldades |
| 34:31 | com paralelismo de threads reais. Vamos falar das que tem acesso a threads reais sem o problema de |
| 34:37 | um GIL ou lock global, como Java, ou C#. Pra elas existem Thread Pools. Em vez de ficar |
| 34:44 | criando quinhentas threads a torto e a direito, sem controle, você limita quantas threads vão de |
| 34:50 | fato existir simultaneamente. Como já disse antes uma média de uma thread por core da |
| 34:55 | máquina. Tanto em Java quanto C#. Elas costumam ter alguma coisas como uma classe ThreadPool, |
| 35:02 | literalmente um tanque de threads, e melhor ainda, quando tem outra abstração chamada Task |
| 35:08 | ou Tarefa. A grande vantagem você vê num loop em uma lista gigante, onde você quer processar |
| 35:14 | cada elemento dessa lista em paralelo. Só que se você ficar criando uma thread pra cada elemento, |
| 35:19 | e a lista tiver quinhentos elementos, você vai acabar tento uns quinhentos threads pro   sistema gerenciar. Ao passo que se você usar Tasks, que é só uma abstração, e configurar |
| 35:29 | a ThreadPool pra ter só 5 threads, mesmo a lista tendo 500 elementos, você nunca vai ter mais que |
| 35:35 | 5 threads rodando ao mesmo tempo. Uma Thread Pool funciona como se fosse   um load balancer de threads, vamos dizer. Nós usamos o conceito de Pool em tudo que é |
| 35:45 | recurso caro. Por exemplo, bancos de dados nós usamos connection pools. Mesmo se tivermos 500 |
| 35:52 | navegadores simultaneamente conectando no servidor de aplicação, não vamos criar 500 conexões no |
| 35:58 | banco, vamos configurar um pool de conexões pra, digamos 100 conexões, e é só isso que vai existir, |
| 36:05 | os primeiros 100 vão usar essas conexões, quando o primeiro acabar devolve a conexão |
| 36:10 | pro pool e agora o próximo esperando vai pegar e usar e assim sucessivamente. A mesma |
| 36:16 | coisa em ThreadPools. E esse é um dos principais conceitos que você tem que saber em arquitetura |
| 36:22 | de concorrência e paralelismo: pools e filas. É como numa agência de banco. É dia de pagamento, |
| 36:28 | 100 pessoas aparecem na hora do almoço, mas só vai ter 10 caixas. As 10 caixas representam |
| 36:34 | o pool. E assim vamos tendo 10 pessoas sendo atendidas simultaneamente e as outras esperam na |
| 36:40 | fila. É assim que o scheduler de threads funciona também. E é assim que podemos ter algum controle |
| 36:47 | sobre as threads do sistema operacional. No mundo .NET você tem classes como Parallel e |
| 36:53 | Task que abstraem esses conceitos. Em Ruby temos também uma blblioteca chamada Parallel que vai |
| 36:59 | abstrair pools de forks ou pools de threads. No mundo de Mac e BSD existe o Grand Central Dispatch |
| 37:06 | e seus DispatchQueue. Enfim, cada linguagem ou sistema operacional vai oferecer alguma coisa |
| 37:12 | que tem essa arquitetura. Alguma combinação de queues ou filas e pools. Preste atenção: você |
| 37:18 | raramente quer usar Threads reais diretamente, especialmente em grandes quantidades. Se precisar |
| 37:25 | de threads sempre use Pools, Queues e Tasks. Esse conceito também se estende pra computação |
| 37:31 | distribuída. Até agora sempre falamos de um código que, na hora que precisa,   carrega alguma forma de executar uma tarefa em paralelo. Ou um fork pra gerar um novo processo. |
| 37:42 | Ou criando uma nova Thread. Ou agora criando Pools. Mas existe a opção de já ter essa segunda |
| 37:49 | entidade pré-carregada e esperando. Um segundo processo, ou uma thread ou algo assim. |
| 37:55 | Em Java sempre tivemos no Enterprise Edition os JMS ou Java Message Service. No mundo Ruby on |
| 38:01 | Rails usamos coisas como Sidekick, a aplicação conecta a uma fila representada num banco de |
| 38:07 | dados Redis e existe um ou mais processos que ficam pré-carregados e ouvindo nessa mesma fila. |
| 38:13 | Chamamos esses processos secundários de Workers. Temos isso em quase toda linguagem. Uma fila e |
| 38:20 | vários workers, e como é um número limitado de workers é como se fosse um Pool também. |
| 38:25 | No mundo .NET temos opções como o projeto Hangfire. No mundo Python temos projetos |
| 38:30 | como Celery ou RQ. No mundo Node.js temos coisas como o Kue. No mundo Java temos Message Queues |
| 38:37 | no JEE ou Background Jobs no Spring. O conceito é sempre o mesmo: algum tipo de fila como RabbitMQ, |
| 38:44 | Redis ou qualquer coisa assim, e diversos workers consumindo dessas filas. É uma |
| 38:50 | solução de paralelismo que funciona tanto na mesma máquina quanto em diferentes máquinas, |
| 38:55 | representando um tipo de computação distribuída. Outro nome que você vai ouvir associado a esses |
| 39:01 | mesmos conceitos é Background Jobs. Esse tipo de solução resolve a grande maioria |
| 39:07 | dos problemas reais que temos hoje. Mesmo numa aplicação mono-thread, que tenha um reactor, |
| 39:13 | ainda temos operações que custam tempo e processamento, que eu já expliquei que vão   bloquear o event loop. Em vez de executar isso no processo principal, podemos enviar uma mensagem a |
| 39:24 | uma fila e deixar outro processo, ou worker, fazer esse trabalho pesado, e assim deixar o |
| 39:29 | reactor principal mais leve e mais rápido. Mas ainda assim gostaríamos de alguma coisa |
| 39:36 | mais eficiente dentro de um mesmo processo. E até agora não chegamos lá ainda. Mas se você |
| 39:42 | prestou atenção aos episódios anteriores, existe sim uma construção pra definir concorrência em |
| 39:48 | sistemas operacionais e hardware que não tem mais do que uma thread real. Uma green thread. Ou seja, |
| 39:54 | uma thread que só existe em User land e não em kernel space. É o que o protótipo do Java |
| 40:01 | original tinha no começo quando foi desenhado pra set-top-boxes, tipo Tivo como eu expliquei   em outro episódio. Um conceito de hardware barato do começo dos anos 90 que não rodaria |
| 40:11 | nada muito mais potente que um DOS. Se quiséssemos programar concorrência, não haveria threads reais, |
| 40:16 | mas mesmo assim podemos programar concorrência com green threads, só que elas nunca vão rodar em |
| 40:22 | paralelo. Lembram? Uma coisa é ter concorrência, outra coisa é ter paralelismo. Ter paralismo |
| 40:28 | implica ter concorrência, mas não o oposto. Corotinas, fibers ou generators que expliquei |
| 40:34 | acima, seriam mecanismos para chegar em green-threads: funções com pontos de suspensão, |
| 40:40 | onde podemos gerenciar várias delas ao mesmo tempo, e ir executando um pouco de cada uma de |
| 40:46 | cada vez. À primeira vista, hoje que temos máquinas multi-core com múltiplas threads |
| 40:52 | paralelas reais, pra que serviriam green-threads? Pra muita coisa. Eu já repeti várias vezes e vou |
| 40:58 | repetir de novo: threads custam memória, talvez 1 MB, tem context switching caro, |
| 41:04 | executado pelo scheduler da kernel, tem syscalls que precisam pular de user-land pra kernel space. |
| 41:10 | Green threads são baratas, dependendo da linguagem pode custar talvez na ordem de 2 quilobytes, |
| 41:16 | ou seja umas 500 vezes mais leve que uma thread. Elas estão dentro do mesmo processo, |
| 41:22 | em user land, e não dependem de syscalls nem de context switching da kernel. Ou seja, comparado |
| 41:29 | com threads, elas são realmente muito mais baratas. Mas tem um problema: só com o que sabemos |
| 41:34 | até agora, elas não rodam em paralelo. Aí que você se engana. E se, usássemos |
| 41:39 | o conceito de thread pools e fizéssemos um código que pegasse milhares de green-threads |
| 41:45 | e mandássemos executar num pool de threads reais? Basta construirmos um scheduler em user-land que |
| 41:53 | se encarregaria de fazer esse load balancing de green-threads entre threads num pool. E |
| 41:59 | muito bem chegamos à base de um Scala, Clojure, Go ou Erlang e, por consequencia, Elixir. |
| 42:04 | Erlang, nos anos 80, fez o seguinte: quando sua VM Beam sobe, ele sequestra os recursos da máquina |
| 42:12 | pra ele: o I/O, a memória e principalmente as threads reais do sistema operacional. Ele roda |
| 42:17 | um scheduler em user land pra cada thread real. As funções em Erlang não são só fibers, elas são |
| 42:24 | corotinas, e a VM tem o poder de arbitrariamente pausar uma função quando bem entender, ou seja, |
| 42:30 | ela não depende que você tenha programado um yield na função pra devolver o controle, ela vai |
| 42:36 | pausar quer você queira ou não, exatamente como a Kernel do Linux faz com seus programas. Ou seja, |
| 42:42 | o Erlang implementa o equivalente a um scheduler preemptivo de green threads em user land, e em vez |
| 42:50 | de fibers ela tem corotinas de verdade. Mas o Erlang tem algo mais importante ainda. |
| 42:56 | Um dos problemas de uma thread é que se ela tem problemas, exceções, erros e outros bugs, |
| 43:02 | ela pode corromper toda a memória do processo. Então basta uma thread fazer bobagem e seu |
| 43:08 | processo inteiro pode crashear. Pra evitar isso o Erlang resolveu que cada uma dessas |
| 43:13 | suas corotinas não compartilhasse nenhuma memória com outras corotinas. Na verdade, |
| 43:19 | pra dificultar nosso vocabulário, dentro do Erlang ele chama essas corotinas que estão executando de |
| 43:25 | “processos”, não confunda com processos de verdade de um Linux, apesar do comportamento |
| 43:31 | ser similar. Existem funções normais como de qualquer outra linguagem, mas existem esses |
| 43:37 | processos de erlang. Como esses processos não enxergam memória de outros processos, |
| 43:42 | se você quiser fazer um processo se comunicar com outro temos o equivalente a Unix Sockets se fossem |
| 43:50 | processos de Linux, canais bi-direcionais por onde eu posso enviar mensagens. |
| 43:55 | Essas mensagens são estruturas de dados, de novo, não compartilhadas. A VM do Erlang, |
| 44:01 | assim como um OS Linux, aloca espaços de memória protegidos pra cada processo. Mas diferente do |
| 44:08 | kernel Linux, que aloca 1 MB pras estruturas de um processo ou thread, o Erlang não precisa |
| 44:13 | alocar mais que 2 quilobytes pra cada processo. O processo vai recebendo mensagens num mailbox, |
| 44:19 | um tipo de fila e escolhe o que fazer com essas mensagens quando quiser. Quando um |
| 44:25 | processo termina ou crasheia, existe um garbage collector pra cada processo individualmente. E |
| 44:31 | isso pra mim é o que diferencia Erlang de todo o resto, um processo, que é um green-thread, |
| 44:37 | com bug não afeta e nunca corrompe o resto do sistema já que ele não compartilha nada. |
| 44:43 | Eles não compartilham ponteiros nem nada e por isso nunca tem a capacidade de desestabilizar |
| 44:49 | o sistema. Por isso eu costumo dizer que a VM Beam do Erlang é quase como se fosse um |
| 44:55 | mini-Linux. Pra ficar mais similar ainda, os Linux tem um processo master que dependendo da |
| 45:01 | distro pode ser um initd ou systemd ou outro que sobe daemons, que já expliquei antes, |
| 45:06 | são processos especiais, serviços do sistema. No Erlang temos a mesma coisas só que se chamam |
| 45:12 | Supervisors. Eles se encarregam de quando você subir sua aplicação, no boot da VM do Erlang, vai |
| 45:19 | subir os supervisors que vão iniciar os processos necessários e garantir que se um deles crashear |
| 45:25 | ele vai subir um novo processo no lugar. Eu expliquei em 2 minutos o Erlang, mas pense em |
| 45:31 | Erlang mais como um Java: uma máquina virtual que te oferece diversos serviços, incluindo coisas que |
| 45:38 | o Java ou .NET não tem: schedulers e processos. Esses processos são green-threads. Tudo roda em |
| 45:45 | user-land, e por isso é extremamente barato. É tão barato de fato que podemos fazer o que |
| 45:50 | eu expliquei que fazíamos antigamente: toda nova conexão de rede antes a gente gerava |
| 45:55 | uma thread real pra lidar com ela. Mas com o C10K descobrimos como é caro e não escala |
| 46:02 | ficar criando threads reais o tempo todo pra toda conexão. 10 mil threads consumiria 10 gigabytes |
| 46:07 | de RAM. Mas 10 mil processos Erlang consome só 19 Megabytes. Portanto, como essa green-thread |
| 46:14 | é ordens de grandeza mais barato, podemos voltar a criar uma green-thread por conexão se quisermos. |
| 46:21 | Entenderam a diferença? Green-threads são ordens de grandeza mais eficientes que uma thread real, |
| 46:26 | e se a máquina virtual tem seu próprio scheduler pra gerenciar a thread-real pra rodar as |
| 46:32 | green-threads temos paralelismo de verdade. No Java normal não temos essas construções,   mas outras linguagens por cima do Java como Scala e Clojure implementam estruturas similares de |
| 46:44 | green-threads e schedulers. Em particular o Scala introduziu o framework Akka por volta de 2009, |
| 46:51 | que implementa a arquitetura de Actors. Actors, é como eu chamo essa função especial no Erlang, |
| 46:57 | os processos, que tem características de corotinas com múltiplos pontos de suspensão, |
| 47:03 | com mailboxes que servem como filas de comunicação, e onde as mensagens trocadas entre |
| 47:08 | processos não compartilham memória, nunca trafegam coisas como ponteiros, mantendo as green-threads |
| 47:14 | isoladas entre si. Isso é um Actor, basicamente. Por isso tanto Erlang quanto Scala compartilham de |
| 47:22 | arquiteturas similares, apesar das linguagens em si serem bem diferentes. O Jonas Bonér, |
| 47:28 | criador do Akka, se inspirou diretamente no Erlang pra fazer o framework Akka do Scala, |
| 47:33 | por isso eles tem conceitos similares. Lembram quando eu expliquei que os schedulers de   thread de Linux e o próprio suporte de pthreads eram ruins no Linux e que só depois de 2007, |
| 47:43 | na kernel 2.6, que ganhamos o NPTL e o CFS do Igor Molnár? Eu expliquei que o sistema |
| 47:49 | operacional mapeia uma estrutura de thread pra cada core real do hardware. O tal modelo um pra |
| 47:55 | um. Mas se você adicionar um scheduler e múltiplos green-threads em user land, |
| 48:00 | voltamos ao modelo M pra N que eu disse que a IBM tentou implementar no Linux com o projeto NGPT. |
| 48:07 | Lembram que eu falei pra vocês guardarem essa informação? Estamos revisitando o tema agora. O Go faz mais ou menos a mesma coisa. O que o Erlang chama de processo, em Go se chama |
| 48:17 | goroutine. Só que eu diria que as goroutines são mais baixo nível do que um Actor de Scala. Num |
| 48:24 | Erlang, assim como num Linux, cada processo tem um PID ou Process ID, um número que identifica |
| 48:31 | unicamente cada processo rodando. Esse PID serve como um e-mail, e um processo pode mandar |
| 48:37 | mensagens pra outro processo através desse PID. O Erlang é tão versátil que podemos mandar mensagens |
| 48:43 | pra um PID de um processo em outra máquina. O Go tem uma outra abstração: as channels, |
| 48:49 | literalmente canais. Duas gorotinas podem compartilhar uma mesma channel. Uma gorotina |
| 48:55 | escreve num channel e outra gotina pode ficar escutando do mesmo channel. Lembram de algo |
| 49:01 | similar que expliquei hoje? Na prática não me parece nada muito diferente de um named |
| 49:06 | pipe entre processos Unix, um canal unidirecional bloqueante. E eu disse que gorotinas e channels |
| 49:12 | são mais baixo nível que Actors de Erlang ou Scala porque eles permitem trafegar qualquer coisa, |
| 49:18 | incluindo ponteiros de memória, ou seja, eles compartilham memória entre si e, portanto, |
| 49:24 | tem os mesmos problemas que programar com threads reais: se você escolher trafegar ponteiros, |
| 49:30 | vai precisar lidar com mutexes e locks e os temidos bugs de race condition e deadlocks. |
| 49:35 | Diferente de Erlang ou Java, o Go não é uma máquina virtual, cheia de serviços. |
| 49:41 | A filosofia e os usos são diferentes. Ele tem um runtime por causa do controle das gorotinas que |
| 49:46 | podem rodar em paralelo. Diferente do scheduler de Erlang que é preemptivo, o scheduler de Go é |
| 49:53 | cooperativo. Ele espera determinados eventos numa gorotina como syscalls pra receber o controle de |
| 49:59 | volta e dar a vez pra outra gorotina. É menos sofisticado do que Erlang nesse caso mas é mais |
| 50:05 | leve e mais previsível também. E obviamente, por causa disso ele é automaticamente mais poderoso |
| 50:11 | do que Node.js e mais simples de programar aplicações complexas. Assim como Erlang ou Scala, |
| 50:18 | um reactor é desnecessário, porque eles tem schedulers que podem pausar uma corotina quando |
| 50:24 | alguma coisa como I/O bloqueante é executado. Na minha opinião, schedulers em user-land pra |
| 50:30 | corotinas são melhores do que reactors. Reactors são interessantes em linguagens que não tem como |
| 50:36 | ter schedulers em user-land. A premissa pra isso é acesso irrestrito às threads reais, |
| 50:42 | sem locks globais que Python ou Ruby tem. Do ponto de vista puramente dos interpretadores ou |
| 50:48 | máquinas virtuais. Temos PHP, Python, Ruby, Perl e Javascript que são todos interpretadores. Alguns |
| 50:55 | tem acesso a threads reais, mas na prática, todos são essencialmente single-threaded, |
| 51:00 | com locks globais que chamamos de GILs por conta das antigas extensões em C. Em todos eles, |
| 51:06 | a opção de um Reactor com a ajuda de Fibers pra não complicar a programação, é a melhor solução |
| 51:11 | pra concorrência. Erlang e Java são máquinas virtuais, no caso de Java significa que Scala, |
| 51:19 | Clojure ou mesmo Kotlin, todos rodam sobre a mesma máquina virtual. Essas VMs são excepcionais |
| 51:25 | trabalhos de engenharia e foram feitas pra sequestrar todos os recursos da máquina. O melhor |
| 51:31 | caso de uso é seu programa e a VM rodarem sozinhas na máquina e elas gerenciarem tudo. E mais do que |
| 51:37 | isso: o melhor caso de uso é que uma vez iniciadas elas não fiquem rebootando toda hora. Guardem essa |
| 51:44 | informação pro episódio de devops. Erlang, na minha opinião, é quem tem as |
| 51:49 | melhores abstrações de concorrência, e por consequência Elixir também já que ele basicamente |
| 51:54 | gera bytecodes pra mesma VM, usando os mesmos frameworks. Em Java, Scala e depois Clojure e |
| 52:01 | Kotlin adicionaram abstrações de linguagem e bibliotecas pra facilitar concorrência,   inclusive no caso de Scala e Clojure implementando schedulers user-land e passando a adotar o |
| 52:13 | conceito de green-threads, que o Java nativo não tem. O C# veio copiando cada uma dessas coisas |
| 52:19 | de outras linguagens como Fibers, ThreadPools e tudo mais, mas que eu me lembre ele também não tem |
| 52:24 | schedulers em user-land nem green-threads. Kotlin, Swift, C# tem sim classes chamadas schedulers que |
| 52:32 | não é a mesma coisa que eu falei de Scala ou Go. Eles não são serviços do runtime, eles são classes |
| 52:39 | pra agendar coisas pro futuro, como um cron num Linux, onde vc diz pra determinada tarefa rodar |
| 52:45 | numa thread num determinado horário ou numa determinada frequência. Os nomes confundem, |
| 52:50 | eu sei, mas schedulers de Kotlin, por exemplo, é como se fosse um cron. |
| 52:55 | O Go é uma linguagem que compila binário nativo, assim como Rust ou C. Mas o Go possui um runtime, |
| 53:02 | pense um pedaço grande de código que gruda no seu pra gerar o binariozão final. Ele tem um |
| 53:07 | scheduler real cooperativo e oferece green-threads com coordenação via channels, que como eu disse, |
| 53:14 | parece com named pipes como eu expliquei no começo do episódio. Rust e outras linguagens |
| 53:20 | como Crystal ainda Não tem o mesmo nível de concorrência e paralelismo. Mesmo em Rust |
| 53:25 | o suporte a I/O assíncrono demorou pra chegar. Crystal está agora ganhando suporte experimental |
| 53:30 | a rodar fibers em paralelo, mas nenhum dos dois possui schedulers em user-land que vem |
| 53:36 | pré-embutido no runtime da linguagem. Se não ficou claro, Javascript não tem |
| 53:42 | paralelismo. Ele é a mais simples de todas as linguagens, e muito do investimento em   engenharia no Google se focou em tornar a V8 muito boa em cuspir código nativo, |
| 53:52 | portanto ele é um Just In Time Compiler, um JIT muito bom. Ele não tem sintaxe complicada, não tem |
| 53:58 | bibliotecas padrão pra manter, e obviamente não oferece scheduler user-land também. Não tem um GIL |
| 54:05 | como Python ou Ruby, mas também não tem acesso a threads reais. Sua única forma de concorrência são |
| 54:10 | generators ou fibers, em multitarefa cooperativa, e na falta de um scheduler, essa multitarefa é |
| 54:17 | controlada num event loop reactor. No máximo dá pra fazer fork pra outros processos. Porém, |
| 54:24 | Javascript troca performance por uso de memória, então Copy on Write do Linux Não ajuda muito |
| 54:29 | porque ele faz JIT, então muita coisa não pode ser reaproveitada entre processos. Por isso eu |
| 54:35 | tendo a dizer que apesar de ser rápido, é uma das linguagens mais rudimentares que temos. Eu ia falar sobre a parte da programação, mas como já tá comprido pra caramba de novo vou só resumir. |
| 54:45 | Eu expliquei até agora sobre como as coisas funcionam por baixo. Agora como tudo isso fica |
| 54:51 | no seu código? Se lidarmos com threads reais, já expliquei que precisamos ficar programando mutexes |
| 54:57 | pra lá e pra cá. Em linguagens antigas como Java ou C#, que expõe Threads reais, você ainda precisa |
| 55:04 | se preocupar com isso. Em Go também você precisa se preocupar com isso, porque ele transporta |
| 55:09 | ponteiros nos channels entre gorotinas. Ou seja, o oposto de um Erlang ou Elixir que não compartilha |
| 55:15 | nada entre seus processos. Portanto ficou na sua mão como desenvolvedor se virar com sincronização |
| 55:22 | e coordenação. Experimente criar um deadlock no seu channel de Go: seu programa crasheia. É um |
| 55:28 | dos motivos de porque eu fico decepcionado com Go em 2019 que já poderia ter oferecido   abstrações melhores direto na linguagem. Mas é uma opinião pessoal, o mesmo problema acontece num C |
| 55:40 | ou C++ onde eu tenho acesso a tudo, incluindo ponteiros. Esconder ponteiros é uma decisão |
| 55:46 | de design da linguagem. Mas assim como GOTO desapareceu, Null é considerado ruim hoje em dia, |
| 55:53 | Ponteiros também já haviam sido aposentados quando Java foi criado, não é nenhuma novidade. |
| 55:58 | De qualquer forma, Node.js no começo, por 2010, tornou famoso o estilo porco de programação |
| 56:05 | com callbacks. Twisted e JQuery tornaram famosos a abstração de Deffereds. E Scala, |
| 56:11 | não lembro se foi o primeiro, mas foi um dos que ajudou a popularizar o termo Future. Não deixa de |
| 56:16 | ser uma pequena evolução sobre Deferreds. Na prática é mais uma forma de encapsular   uma execução futura num objeto, um tipo de placeholder. Em vez de fazer sua variável receber |
| 56:27 | direto o resultado de uma chamada assíncrona ou mesmo uma chamada externa tipo uma chamada HTTP, |
| 56:34 | que não se tem certeza se vai completar, ou uma query num banco, você faz a variavel receber |
| 56:41 | um Future e o Future encapsula essa chamada incerta. Quando o Future executar e resolver, |
| 56:49 | ele é substituído pelo resultado. Ninguém mais usa os nomes Deferred ou |
| 56:54 | Futures ou mesmo Delay, o próximo passo nessa evolução são Promises, em particular o famoso |
| 57:00 | spec A+. Se você está em Javascript faz alguns anos, já deve estar de saco cheio de ouvir falar |
| 57:05 | de Promises. Dois ou três anos atrás eu dizia que a ironia de Promises é que eles permaneciam |
| 57:11 | sendo promessas. Enfim, na prática, Promise é como eu já falei antes de Deferred e Futures, |
| 57:17 | um objeto que encapsula alguma chamada incerta. Esse objeto é encadeável e   customizável e costuma ter métodos como then e catch, que é onde você adiciona callbacks, |
| 57:28 | como o addCallback do Deferred de Twisted. Java 8 tem CompletableFuture, frameworks como Guava tem |
| 57:36 | SettableFuture. Javascript tem Promise/A+. Deffereds, Delays, Futures, Promises, |
| 57:42 | são termos que acabam sendo usados um no lugar do outro, mas hoje em dia as pessoas falam mais de |
| 57:47 | Promises. Sobre os objetos de Promises podemos adicionar o que chamamos de syntactic sugar, |
| 57:53 | ou literalmente um açúcar na sintaxe da linguagem pra não ter que lidar com objetos de Promise |
| 57:59 | diretamente nem essas configurações via then ou catch. Se não me engano a Microsoft desenvolveu |
| 58:05 | a sintaxe de async/await pro C# e várias outras linguagens implementaram algo similar. |
| 58:11 | Voltando um pouco, em linguagens que tem Threads costuma também existir a função de join. Por |
| 58:17 | exemplo, você pode criar um array ou lista com 10 Threads. Ao criar todas elas, o código pai que |
| 58:23 | está criando pode chamar Join em todas elas. Assim o programa principal vai ficar bloqueado até todas |
| 58:30 | elas executarem e retornarem. Daí ele continua a execução com o resultado de todas as threads, que |
| 58:36 | garantidamente já acabaram de rodar. Async e Await é quase a mesma coisa, funções marcadas como async |
| 58:44 | costumam devolver um objeto Promise e o await é como se fosse um join numa thread, ou um yield num |
| 58:50 | Fiber, é tipo um join numa promise, esperando que ela resolva pra depois continuar. |
| 58:56 | A diferença é que async/await é uma semântica que pode ser usada em threads, green-threads ou |
| 59:02 | corrotinas ou fibers. Então é como se fosse Join pra coisas que não são threads. Todo |
| 59:08 | programa que você escreve são trechos de código que chamam outros trechos de código, uma função |
| 59:13 | chamando outra. Pra explicar um exemplo, vamos chamar a primeira função de Maria e a segunda   função de Joao. Maria chama Joao, Joao executa, e devolve controle pra Maria. Se Joao for uma Fiber,   Maria chama Joao, Joao começa a executar e dá yield, suspende e devolve controle pra   Maria. Agora Maria pode fazer outra coisa e, se quiser, pedir pro Joao resumir de onde parou. Com Promises é assim: Maria chama Joao, Joao não faz nada e devolve uma promessa. Maria pode |
| 59:18 | escolher quando cobrar a promessa. Daí ela cobra, e Joao executa o prometido e quando   termina “resolve” devolvendo o resultado. Agora Maria pode escolher o que fazer com o resultado.   Ela tem duas opções, ou usar a sintaxe padrão de Promises e dizer ao Joao: Joao quando você   terminar chama a Camila. Ou, a Maria pode cobrar a promessa do Joao, esperar ele terminar que é   o await, e quando terminar ela mesma pode chamar a Camila. Entenderam, é uma questão de estilo de   código, ambos vão chegar no mesmo resultado, mas hoje em dia se tornou consenso que se precisar   fazer uma chamada externa, por exemplo uma requisição de rede, que não sabemos quando   vai ficar pronto ou mesmo se vai completar, então englobamos num Promise. Daí escolhemos   se esperamos já ele terminar ou se só atrelamos nele um callback e vamos fazer outra coisa. Processos, threads, user-land e kernel-space, context switching, schedulers de user-land,   corrotinas, fibers, generators, são construções do sistema operacional, |
| 59:25 | interpretador, runtime ou máquina virtual pra modelar e executar concorrência e paralelismo. |
| 59:32 | Recursos das linguagens como filas, mailboxes e channels, promises e async/await são recursos das |
| 59:39 | linguagens pra facilitar a programação de concorrência e paralelismo. Finalmente, chegamos ao final. Espero que tenham aprendido o suficiente pra começar a entender como |
| 59:51 | as diferentes linguagens lidam com concorrência e paralelismo, o que de fato acontece por baixo |
| 59:56 | dos panos, e não misturem o que uma linguagem pode ou não pode fazer. Na prática, hoje em dia, |
| 1:00:03 | todas as linguagens tem recursos muito bons. Alguns servem pra coisas que os outros não são |
| 1:00:08 | tão bons, então nenhuma das linguagens que falei aqui é obrigatoriamente melhor do que |
| 1:00:13 | a outra. Não adianta ser só rápido. Não adianta só ter concorrência massiva. Uma boa linguagem, |
| 1:00:19 | primeiro, precisa de um ecossistema que gera resultados com eficiência. Quanto |
| 1:00:25 | menos desperdício, quanto mais resultados, pra determinado caso de uso, melhor. |
| 1:00:30 | Estamos já faz muito tempo nesse assunto de back-end e o assunto de concorrência se   esticou bastante. Ainda estou em dúvida se semana que vem ainda adiciono mais um tema, |
| 1:00:41 | que é relacionado a gerenciamento de memória, ou se já vou direto pro assunto final da série: |
| 1:00:47 | devops. Vou pensar ainda. Se ficou com dúvidas não deixe de mandar nos comentários abaixo, |
| 1:00:52 | se curtiu mande um joinha, compartilhe com seus amigos, não deixe de assinar o canal e cilcar no |
| 1:00:58 | sininho pra não perder os próximos episódios. A gente se vê semana que vem, até mais. |
