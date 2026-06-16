# Concorrência e Paralelismo (Parte 1) | Entendendo Back-End para Iniciantes (Parte 3)

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=cx1ULv4wYxM
- **Duração:** 42:34
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado), `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Vamos voltar à Parte 3 do tema de Back-end. |
| 0:05 | Recapitulando já expliquei os conceitos básicos do computador e do sistema operacional, sobre |
| 0:11 | processos e threads. Expliquei sobre compilação e bibliotecas estáticas e dinâmicas. Já expliquei |
| 0:19 | sobre máquinas virtuais e interpretadores. Demos uma rápida passada em características |
| 0:24 | de algumas linguagens, a história do Java, um pouco do lado .NET, até dei uma tangente |
| 0:30 | na história inicial de desenvolvimento mobile e mais um pouco sobre licenças de software. |
| 0:36 | Estamos já no oitavo episódio da série Começando aos 40. E hoje acho que é hora de começar a |
| 0:42 | tratar de um tema que é muito discutido mas eu acho que os iniciantes tem dificuldade pra visualizar na cabeça. Concorrência e Paralelismo. Mas antes entrarmos nos assuntos mais óbvios como |
| 0:54 | Go ou Elixir ou Node.js precisamos voltar na história como sempre pra que todos finalmente |
| 1:00 | comecem a entender esse assunto de verdade! Infelizmente explicar concorrência e paralelismo |
| 1:06 | só falando é muito difícil. Vocês ainda vão precisar praticar programando centenas de vezes |
| 1:12 | coisas diferentes pra começar a entender de verdade como as coisas funcionam. Eu |
| 1:17 | espero que a explicação que eu dê agora pelo menos ajude um pouco vocês terem uma imagem na cabeça do que esperar quando realmente colocarem as mãos no metal. Vamos lá! |
| 1:28 | (...) Hoje em dia todo mundo tem um computador potente. |
| 1:38 | Mesmo o mais fraco Intel i3 é dual core com 3 Ghz ou mais. E se você tiver a bufunfa pra comprar os |
| 1:46 | novos Intel i9 ou AMD Threadripper com 8 cores e mais de 4 Ghz, você tem mais poder de computação |
| 1:53 | do que os mais poderosos computadores dos anos 60, combinados. E se falarmos de processadores |
| 1:59 | de servidor, como os Intel Xeon E7 temos até 24 cores. E vocês sabem que a Intel tem a tal |
| 2:05 | tecnologia hyperthreading que faz você enxergar 2 threads simultâneas num mesmo core, então esse |
| 2:12 | Xeon E7 de 24 cores pode ter até 48 threads de execução. Isso é bastante paralelismo. Até mesmo |
| 2:19 | seu celular Android, com o chipset Qualcomm 845, é nada menos que octa-core com 2.8 Ghz cada. |
| 2:27 | E isso porque não estamos falando de GPUs que tem propósitos diferentes de um CPU, |
| 2:32 | mas possuem cores que processam em paralelo também, no caso da NVIDIA o que chamamos de |
| 2:38 | CUDA cores. E na nova RTX 2080 temos nada mais, nada menos, que 2.944 CUDA cores. Sendo que em |
| 2:47 | placas mães melhores podemos colocar 2 placas dessas rodando em paralelo e poder ter acesso a |
| 2:52 | quase 6 mil CUDA cores ao mesmo tempo. Isso sim é processamento paralelo massivo. |
| 2:58 | Então, do seu celular, a desktop, servidores, estamos claramente num mundo massivamente |
| 3:04 | paralelo. Mas não foi sempre assim. Considere que acesso a esse mundo paralelo só começou de verdade |
| 3:11 | pra nós programadores a coisa de pouco mais de uma década. Pra entender como tudo mudou, vou resumir |
| 3:17 | como foi do fim dos anos 50 até agora. Nos anos 50 talvez vocês já tenham ouvido falar |
| 3:23 | do meme que a IBM dizia que o mundo não precisa de mais do que cinco computadores. Eles estavam |
| 3:29 | falando do IBM 701. E se você não sabia disso, essa frase foi tirada de contexto e é fake news, |
| 3:36 | pra variar. A frase em contexto foi numa reunião de acionistas que dizia que a IBM tinha planos |
| 3:42 | de vender talvez cinco IBM 701 mas voltaram com pedidos pra 19. Estamos falando de uma máquina |
| 3:48 | que, se fosse alugar na época, não custaria menos que 15 mil dólares, em dólares dos anos 50. E a |
| 3:54 | potência? Era uma máquina de 18-bits. Lembrando que seu celular hoje é 64-bits. E essa máquina |
| 4:00 | vinha com nada menos que 1 quilobyte de memória e podia suportar um máximo de 9 quilobytes. E ainda |
| 4:07 | foi a primeira que vinha com … gravador de fita, que podia gravar nada menos que 1.2 megabytes |
| 4:14 | a uma velocidade estrondosa de 5.6 kilobytes por segundo. Lembrando que sua placa de rede ethernet |
| 4:20 | porcaria trafega dados a pelo menos 1 gigabits por segundo, e isso é considerado lento hoje em |
| 4:26 | dia dado que existem placas de 10 gigabits. Então você imagina que numa máquina cara dessas, |
| 4:32 | basicamente uma calculadora glorificada, você gostaria de usá-la da forma mais eficiente |
| 4:37 | possível. Era uma época onde a linguagem mais avançada era Fortran pra fazer cálculos. E onde |
| 4:44 | você carregava programas com cartões perfurados, numa máquina que conseguia ler no máximo 150 |
| 4:50 | cartões por minuto e perfurar no máximo 100 cartões por minuto. Então a forma mais eficiente |
| 4:56 | de usar essa máquina era os programadores serem extremamente cuidadosos pra escrever programas |
| 5:02 | de cálculo muito precisos e sem erros, que chamamos de jobs, e organizar esses jobs em |
| 5:08 | batches ou grupos de programas similares, e deixar numa fila pra ir processando dia e |
| 5:14 | noite. Foi a época dos jobs em batch. Se tivesse um erro no seu programa, você só ia saber no dia |
| 5:20 | seguinte e ter que repetir todo o processo. Então dos anos 50 pros anos 60, alguns grandes |
| 5:26 | nomes que já falei antes como John Backus, criador do Fortran, ou John McCarthy que é considerado o pai da inteligência artificial e o criador do garbage collector do Lisp, |
| 5:35 | começaram a trabalhar um conceito para aumentar a eficiência dos programadores. Em vez de terem |
| 5:42 | que colocar seus jobs numa fila e ficar só esperando de braços cruzados, e se fosse |
| 5:47 | possível usar as ineficiências do computador, como o tempo que ele fica lendo ou escrevendo |
| 5:52 | nas fitas e outras pausas, pra permitir que múltiplos programadores pudessem trabalhar |
| 5:58 | concorrentemente no mesmo computador? O conceito básico era que fosse possível salvar |
| 6:04 | o contexto do ambiente de um programador e trocar pelo contexto de outro programador. |
| 6:09 | Entenda contexto como o que define o ambiente de trabalho do programador, o que está na |
| 6:15 | memória basicamente. Se você trocar muito rápido entre um contexto e outro, ou seja fazer switch, |
| 6:22 | para os programadores “parece” que ele está sozinho na máquina, mas na verdade a máquina |
| 6:28 | está gerenciando entre múltiplos contextos. A máquina oferece um pedaço de tempo, ou time-slice, |
| 6:35 | para cada ambiente e vai dando a vez pra outro ambiente, sucessivamente. Esse é o conceito de |
| 6:41 | time-sharing baseado em context switching. Esse conceito nasceu na época dos IBM 704 e IBM |
| 6:48 | 709 e foi incorporado aos mainframes dos anos 60. O conceito de time-sharing existiu mais no mundo |
| 6:55 | corporativo, em mainframes e mini-computadores dos anos 60 até 70. Nos anos 80 principalmente |
| 7:01 | começou a aparecer nos UNIX usados em workstations. E só nos anos 90 começou |
| 7:06 | a de fato a aparecer no mundo dos desktops. Se você usou micro-computadores nos anos 70 e 80, |
| 7:12 | lidou com micros muito simples, com CPUs como o Z80 ou Motorola 68000 ou mesmo Intel 8088. Todos |
| 7:20 | CPUs de um único core, que só sabiam executar uma instrução de cada vez a cada giro do clock. |
| 7:26 | Se você já teve um Sinclair, MSX, Commodore 64, Apple II ou outras máquinas 8 bits ou 16 bits |
| 7:33 | da década de 80, você se viu na mesma situação dos computadores dos anos 50: só conseguir executar uma tarefa ou um job de cada vez. Num MS-DOS você podia executar um programa, |
| 7:45 | mas pra executar outro precisava sair do primeiro e só depois carregar o segundo. Ou usar um truque |
| 7:51 | de interrupção, a famosa INT 21H que era o recurso de Terminate and Stay Resident ou |
| 7:57 | TSR. De uma forma rudimentar você podia carregar um segundo programa, chamar essa interrupção pra |
| 8:03 | devolver controle pro DOS mas deixar residente em memória de forma que podia ser chamado de volta. |
| 8:08 | Era como utilitários pequenos com o Borland Sidekick funcionavam na época. E isso meio |
| 8:14 | que simulava um tipo de multi-tarefa. Foi só com o Windows 3.1 que a maioria das |
| 8:20 | pessoas realmente experimentou mais esse conceito de multi-tarefa, mas no caso era multi-tarefa |
| 8:26 | cooperativa. Quando falamos em multi-tarefa num computador com CPU de um único core, |
| 8:31 | pensa numa mesa de escritório sendo dividida entre mais de uma pessoa. A primeira pessoa chega, |
| 8:37 | coloca as coisas dela na mesa e começa a trabalhar. Pra outra pessoa usar, a primeira |
| 8:42 | precisa tirar todas as coisas dela da mesa e deixar a outra colocar as coisas dela. As coisas |
| 8:48 | da primeira pessoa é o tal contexto e a troca é o switching. É o mesmo conceito de time-sharing que |
| 8:55 | falei antes. Mas se a segunda pessoa se recusar a sair da mesa, ninguém mais consegue usar a mesa, |
| 9:01 | então ela precisa cooperar pra todo mundo poder usar. Esse é o conceito de multi-tarefa |
| 9:06 | cooperativa, que é o que tinha no Windows 3.1. Se um programa fizesse alguma coisa que bloqueasse o |
| 9:13 | sistema como imprimir, todos os outros programas ficavam impedidos de ter sua vez pra rodar. |
| 9:18 | Isso veio a mudar em sistemas operacionais 32-bits como OS/2 ou Windows 95, Windows NT e também nas |
| 9:25 | distribuições Linux que começaram a aparecer do começo pro meio da década de 90. Nesse caso |
| 9:30 | temos o que já expliquei antes: cada processo era iniciado pelo sistema operacional num espaço de |
| 9:36 | memória protegido, ou seja, onde um programa não consegue escrever em cima da memória do outro. |
| 9:43 | Além disso agora não é o programa que tem que cooperar pros outros poderem rodar. Na metáfora |
| 9:48 | da mesa, imagine que agora tenha um supervisor, que tira a pessoa da mesa pra deixar a outra usar |
| 9:55 | mesmo se a pessoa não quiser sair naquele momento. Esse supervisor é que chamamos de scheduler do |
| 10:01 | sistema operacional. Ele aloca um pedaço de tempo, ou time-slice pra cada programa e interrompe pra |
| 10:07 | deixar outro rodar. A forma de fazer isso é pegar o que está na tal mesa, separar do lado e colocar |
| 10:13 | as coisas da outra pessoa na mesa. E quando der o tempo, ele tira as coisas da mesa e devolve o |
| 10:19 | que tava antes e vai fazendo esse switching de contexto. Isso é multi-tarefa preemptiva. |
| 10:25 | Isso é feito no nível do processo, que na metáfora é o que está executando na tal mesa |
| 10:30 | naquele determinado momento. Mas digamos que quiséssemos ter tarefas em paralelo na mesma |
| 10:36 | mesa ao mesmo tempo. Por definição, cada processo tem uma única thread de execução, |
| 10:41 | pense numa thread como sendo uma tarefa sendo executada na mesa. Mas podemos ter multi-thread |
| 10:47 | que seria o equivalente a ter 2 pessoas usando a mesma mesa e os mesmos materiais na mesa ao mesmo |
| 10:54 | tempo. Pra isso acontecer o tal supervisor faz a mesma coisa: ele força uma das pessoas a parar |
| 11:00 | de usar o material da mesa pra deixar a outra pessoa sentada do lado usar o mesmo material. Multi-thread é mais ou menos isso: duas pessoas começando com o mesmo material ao mesmo tempo. |
| 11:12 | Cada pessoa pode até usar seu próprio material, mas ela tem acesso ao material todo que está na |
| 11:17 | mesa, que na metáfora é o espaço de memória do processo. Um processo pode ter uma ou mais |
| 11:23 | threads. Num processador com um único core, não é possível que as duas pessoas trabalhem exatamente |
| 11:30 | ao mesmo tempo, porque só tem um único espaço na mesa, então a única forma de haver concorrência é |
| 11:36 | o tal supervisor ficar fazendo uma das pessoas pausar o trabalho pra dar um tempo pra outra |
| 11:41 | pessoa continuar o trabalho dela. Quando falei de um processador moderno como o Intel i3, ela tem 2 cores. Pense em 2 cores como duas mesas. Nesse caso cada |
| 11:52 | thread ou cada pessoa realmente pode trabalhar verdadeiramente em paralelo. Mas nos anos 90 o |
| 11:58 | comum era um processador 486 ou Pentium de um único core. Só servidores tinham processadores |
| 12:03 | com dois ou mais cores. Então você tinha multi-tarefa preemptiva que fica pausando |
| 12:09 | threads pra outra poder rodar, e agora você tem multi-processamento paralelo onde cada thread roda |
| 12:16 | separadamente em um processador separado. Quando são dois processos independentes, |
| 12:21 | eles podem rodar 100% em paralelo. Se não estiverem usando nada que é compartilhado |
| 12:27 | pelos dois como um arquivo ou outro recurso de hardware como impressora ou rede. Se um deles |
| 12:33 | estiver usando a impressora, obviamente o segundo processo é obrigado a esperar ou fazer outra coisa enquanto espera. Mesma coisa se forem 2 threads dentro do mesmo processo. |
| 12:43 | Seria o equivalente às duas pessoas uma em cada mesa mas onde ambos dependem do mesmo |
| 12:49 | material pra trabalhar. E é nessa situação que multi-threading começa a ficar complicado. |
| 12:55 | Se ambas as pessoas quiserem escrever no mesmo pedaço compartilhado de papel ao mesmo tempo, |
| 13:00 | imagine a zona que ia ser. Cada linha ou cada palavra de uma pessoa ia ficar misturado com o |
| 13:06 | que a outra pessoa tá querendo escrever por cima. Ou seja, seja lá o que eles gostariam de escrever |
| 13:12 | no papel ia virar um monte de dados misturados. Na realidade você talvez gostaria que a primeira |
| 13:17 | pessoa usasse o papel, e só quando terminasse a segunda pessoa usasse na sequência. Mas como |
| 13:24 | eles estão disputando ao mesmo tempo, pode ser que o inverso aconteça, e como não sabemos quem |
| 13:29 | vai ganhar a disputa de quem começa a usar o papel na frente do outro literalmente temos |
| 13:34 | uma condição de corrida, ou o que se chama de race condition, que pode levar a resultados |
| 13:40 | inesperados ou não-determinísticos. Então como fazer nesses casos? Pra isso precisamos |
| 13:46 | de um sinalizador. Quando a primeira pessoa quiser escrever, ele coloca uma placa dizendo “ocupado”. |
| 13:53 | Quando a segunda pessoa for escrever também ele vê a placa e espera. Quando a primeira pessoa termina |
| 14:00 | o que queria, ele tira a placa de “ocupado”. Agora a segunda pessoa pode colocar a placa dela |
| 14:05 | e escrever sua parte, e depois tirar a placa. Se ela vai embora e esquece de tirar a placa, |
| 14:12 | aquele pedaço de papel fica bloqueado e ninguém mais consegue escrever nele. Agora pense que |
| 14:17 | a primeira pessoa bloqueia o pedaço de papel, então a segunda pessoa resolve bloquear outro pedaço de papel que a primeira vai precisar na sequência. Mas ambos esquecem de tirar as placas |
| 14:28 | de ocupado de seus respectivos papéis e cada um quer usar o papel do outro. Temos um impasse, |
| 14:35 | onde nenhum sinaliza pro outro que já terminou e ambos param de trabalhar esperando. Eles estão |
| 14:41 | literalmente mortos por causa do bloqueio, ou seja, o que chamamos de dead-lock. |
| 14:47 | Essa placa de “ocupado” é o que em programação multi-thread chamamos de lock ou mutex, que |
| 14:53 | significa mutuamente exclusivo. É um sinalizador de exclusividade. E como no exemplo, quem bloqueia |
| 15:00 | o recurso também tem a responsabilidade de desbloquear quando acabar. E com isso você |
| 15:05 | consegue ver como duas threads, mesmo se tiver dois cores na CPU onde eles teoricamente poderiam |
| 15:12 | trabalhar independentes em paralelo, se tiver um recurso compartilhado como o tal pedaço de papel, |
| 15:18 | um é obrigado a esperar o outro terminar. Eu tentei usar metáforas aqui mas você só vai |
| 15:24 | entender realmente o que tudo isso significa o dia que realmente começar a programar usando |
| 15:29 | esses recursos. Entenda alguns fatos primeiro: toda CPU moderna é feita pra rodar threads, |
| 15:36 | é como se fosse a menor unidade de execução. Cada thread executa uma sequência de instruções e tem |
| 15:43 | um contexto, que é seu material de trabalho, que fica nos registradores da CPU. Quando o |
| 15:48 | CPU faz o tal context switching, ele guarda o que está nos registradores naquele momento e |
| 15:54 | deixa outra thread executar. Fazer essa troca de contexto não sai de graça, porque tem o trabalho |
| 16:00 | de tirar o material da mesa e colocar o material do outro na mesa. Então quanto mais threads você |
| 16:06 | tenta executar num core, mais devagar o trabalho geral vai ficar. Então não adianta ficar criando |
| 16:12 | threads como um idiota achando que tudo vai rodar em paralelo e ficar mais rápido, lógico que não. O |
| 16:17 | ideal é ter o mesmo número de threads que número de cores no seu CPU. Por outro lado não é porque |
| 16:24 | você tem 2 cores e inicia 2 threads que ambos vão rodar da forma mais eficiente, porque eles podem |
| 16:30 | estar compartilhando o mesmo recurso e esperando liberar o mutex que o outro colocou. Nesse caso |
| 16:36 | uma terceira thread poderia se aproveitar desse período de espera e executar enquanto isso, |
| 16:41 | caso não precise usar o mesmo recurso. Então você vê como também ter exatamente o mesmo |
| 16:47 | número de threads que cores não é um regra. Em muitos casos determinar qual o número ideal de |
| 16:53 | threads que você pode subir naquela determinada máquina é uma questão de tentativa e erro. |
| 16:59 | Criar processos é um procedimento que custa pro sistema operacional, não é de graça. Ele precisa |
| 17:05 | carregar o binário do programa, alocar memória do sistema, checar permissões de segurança, etc. Esse |
| 17:12 | procedimento inclusive é diferente entre sistemas operacionais. Em particular, sistemas Linux são |
| 17:19 | mais rápidos pra criar processos do que um MacOS e uma ordem de grandeza mais rápido do que um |
| 17:25 | Windows. Já falei em outro episódio que no Linux muitos programas como o Apache tomam vantagem de |
| 17:31 | fazer o tal FORK que cria uma cópia rápida do processo atual pra gerar outro processo que vai |
| 17:37 | rodar concorrentemente. E fazer forks em Linux é uma operação comparativamente mais barata do |
| 17:43 | que no Windows. Ou seja, só porque ambos fazem a mesma coisa não quer dizer que fazem do mesmo |
| 17:49 | jeito. Qualquer sistema que dependa de forks vai rodar ordens de grandeza pior num Windows. |
| 17:56 | Por isso mesmo desenvolvimento em Windows privilegia e recomenda criar um único processo por |
| 18:02 | aplicação mas usar mais threads dentro do mesmo processo. Como uma thread compartilha a memória |
| 18:08 | interna do processo com outras threads, a ação de criar threads é ordens de grandeza |
| 18:13 | mais barato do que criar novos processos. Por outro lado isso também é uma troca. Processos são |
| 18:20 | isolados de outros processos e um não vai pisar no calo do outro. Você não tem race conditions, |
| 18:26 | você não precisa manualmente gerenciar mutexes e nem se preocupar com dead-locks, mas processos |
| 18:32 | em Windows são mais caros pra criar. Por outro lado threads são bem mais baratas, só que agora |
| 18:38 | temos o trabalho de nos preocuparmos em ter que manualmente codificar mutexes e tudo mais. |
| 18:44 | Programação é sempre o ato de se comprometer, você aceita uma vantagem em troca de uma desvantagem. |
| 18:51 | Tudo sempre depende e nunca tem uma resposta certa pra tudo. Alguém poderia dizer que porque |
| 18:57 | threads são mais rápidas de criar e usam menos recursos, eles são obviamente melhores do que |
| 19:02 | fazer forks de processos. Por outro lado alguém pode argumentar que como temos que gerenciar |
| 19:08 | mutexes e coisas assim manualmente, você tem muito mais bugs e situações não-determinísticas |
| 19:13 | com threads e, portanto, processos são infinitamente mais fáceis de programar |
| 19:18 | com menos bugs. Ambos estão certos. Na prática você vai encontrar mais soluções |
| 19:24 | baseadas em fork de processos em sistemas Linux ou UNIX como no MacOS e mais soluções multi-thread |
| 19:30 | no Windows. Mas isso não é uma regra e em alguns casos, a melhor opção não necessariamente é a mais |
| 19:37 | óbvia. Por exemplo, um navegador web como Firefox ou Chrome. Acho que se você é desenvolvedor já |
| 19:43 | sabe que eles usam recursos de multi-processos. Antigamente um navegador só abrir uma única |
| 19:49 | página de cada vez. Mas aí inventaram a idéia de abas e abrir múltiplos sites diferentes em |
| 19:55 | múltiplas abas. Como um navegador é razoavelmente pesado e consome muita memória pra guardar tantas |
| 20:01 | imagens e javascript que cada página carrega, você quer tentar usar a menor quantidade de memória |
| 20:07 | quanto possível. Então o primeiro instinto de um programador é fazer cada aba ser uma thread. |
| 20:14 | De fato você vai usar menos recursos, mas à medida que os navegadores vão ficando mais e mais complexos, a quantidade de bugs por causa de threads aumentam exponencialmente. Agora um |
| 20:25 | bug numa thread pode desestabilizar o navegador inteiro porque dentro do processo do navegador, |
| 20:31 | uma thread tem acesso a tudo que as outras threads tem acesso. Então era muito comum você abrir um |
| 20:38 | site qualquer e de repente seu navegador inteiro com 20 abas dava pau e você perdia tudo. |
| 20:43 | Pra piorar, alguns desses bugs eram bugs de segurança. Imagine uma aba que abre um site |
| 20:49 | conseguir vasculhar a memória da outra aba que está com um e-commerce aberto e com seus dados |
| 20:55 | de cartão de crédito na memória global. Cada vez que você tenta consertar um bug, pode acabar acidentalmente largando um bug novo no lugar. Então é como tentar tampar o sol com a |
| 21:05 | peneira. Some a isso a possibilidade de instalar plugins que ganham acesso à memória do navegador |
| 21:11 | como os plugins de Java ou os antigos de Flash e você tem um desastre esperando pra acontecer. |
| 21:18 | Por isso muitos navegadores começaram a separar certas partes em processos independentes como o |
| 21:25 | Safari que iniciou separando coisas como Flash e Java em processos mas ainda manteve muita |
| 21:32 | coisa em threads pra usar menos memória. Mas no caso do Google Chrome ele resolveu separar |
| 21:37 | completamente cada aba em seu próprio processo. Por um lado isso trouxe muito mais estabilidade. |
| 21:44 | E você já deve ter visto muitas vezes uma aba inteira crashear, mas o navegador continuar |
| 21:50 | rodando sem nenhum problema. E você pode ver cada processo separado num Task Manager do Windows por |
| 21:56 | exemplo, e inclusive pode matar um processo por lá mesmo, na mão. É a grande vantagem de se separar |
| 22:03 | tudo em processos como eu já falei antes. Por outro lado todo mundo sabe como o Chrome hoje |
| 22:09 | é um dos aplicativos que mais come RAM do seu sistema e essa separação é uma das razões já que |
| 22:16 | código comum entre as diversas abas precisa ser copiada em outro processo a cada nova aba. |
| 22:22 | Conceitualmente falando, um fork de um processo é como se você pausasse esse processo e fizesse |
| 22:29 | uma cópia de tudo que ele tem na memória pra outro espaço isolado e resumisse os dois, e a partir daí |
| 22:35 | cada um tem vida independente. Se um processo está consumindo 1 MB de RAM, com um fork você |
| 22:41 | deveria estar agora usando 2 MB. Mas no Linux temos um recurso chamado copy-on-write ou CoW, |
| 22:47 | onde o segundo processo não usa praticamente nenhuma memória adicional e fica apontando pra |
| 22:54 | memória do processo original assim que é criado. Se a memória não for modificada, ambos podem |
| 22:59 | reaproveitar o mesmo dado em vez de fazer cópias desnecessárias e só coisas que o segundo processo |
| 23:06 | começa a gravar começa a usar mais memória e fica invisível ao processo original e vice-versa. No |
| 23:13 | Windows o equivalente ao fork realmente duplica a memória, que é outro motivo de porque criar |
| 23:19 | processos no Windows é considerado mais caro. Um fork com copy-on-write no Linux cada processo |
| 23:25 | tem acesso a uma cópia da memória do processo pai, mas diferente de threads dentro do processo |
| 23:32 | que compartilha tudo, não existe a necessidade de mutexes ou outro tipo de controle de acesso |
| 23:37 | porque a partir do ponto do fork, cada processo tem sua cópia da memória pai e um não escreve |
| 23:43 | em cima da memória do outro. Isso faz as coisas serem muito mais simples de programar. Claro, |
| 23:49 | threads ainda são mais leves e usam muito menos memória no total. Você pensa no Linux como um sistema estático que é sempre igual, mas ele mudou radicalmente |
| 23:58 | dos anos 90 pros anos 2000 e até agora. A interface que você interage com o sistema, |
| 24:05 | que seria os shells de linha de comando, ou as APIs, são parecidas, muito porque |
| 24:10 | ele segue o que chamamos de padrão POSIX que é sigla de Portable Operating System Interface |
| 24:16 | onde o X no final denota sua herança de UNIX. Teoricamente os UNIX e seus clones como Linux |
| 24:23 | deveriam seguir esse padrão pros programas serem portáveis entre eles, no nível do código fonte, |
| 24:28 | porque os binários não são compatíveis. No mundo POSIX você tem a abstração de Posix |
| 24:34 | threads ou pthreads implementado como LinuxThreads anos atrás. Threads em Linux eram bugados e nunca |
| 24:41 | foram grande coisa até que finalmente alguns projetos começaram a surgir pra reimplementar |
| 24:46 | o suporte de threads no Linux, como o Next Generation Posix Threads ou NGPT da IBM |
| 24:52 | que eu me lembro que uma característica marcante era ser um mapeamento M pra N, |
| 24:58 | ou seja uma thread em Linux não seria equivalente um pra um com uma thread de verdade. |
| 25:04 | Mas o projeto que ganhou foi o Native Posix Thread Library ou NPTL de Ulrich Drapper que era |
| 25:11 | mantenedor do glibc e Ingo Molnár que vou citar de novo a seguir. O NPTL é uma implementação um pra |
| 25:17 | um em vez de ser M pra N como o NGPT, portanto era bem mais simples de ser implementado. Esse |
| 25:24 | projeto corrige as falhas do LinuxThreads e só a partir desse ponto dá pra se dizer que threads |
| 25:30 | em Linux ficaram decentes. E isso só é um fato a partir da kernel 2.6 mais ou menos por volta de |
| 25:35 | 2007. Pra ver como as coisas são diferentes entre diferentes Unix, o Solaris usava uma |
| 25:41 | estratégia M pra N até o Solaris 9. O FreeBSD e NetBSD eram M pra N também mas acho que o FreeBSD |
| 25:48 | também ia ou foi pra uma pra um. Parece que um pra um começou a ganhar terreno mas vamos |
| 25:53 | voltar nisso em breve, guarde esse ponto. Eu já expliquei sobre o tal scheduler na metáfora |
| 25:59 | das mesas sendo o supervisor que força uma pessoa a sair da mesa pra dar lugar pra outra. Existem |
| 26:05 | diferentes estratégias que um scheduler pode tomar. Quando você só tem uma mesa, você é |
| 26:11 | obrigado a deixar uma pessoa trabalhando e mandar as outras esperarem a vez, e o supervisor manda |
| 26:16 | trocar de lugar com o próximo pra ir dando chance das outras trabalharem também. Mas imagine se o |
| 26:22 | supervisor resolve deixar uma pessoa que ainda não está pronta sentar na mesa e ela fica sem fazer |
| 26:27 | nada, enquanto as outras estão esperando. E se você adicionar uma segunda mesa, parece que |
| 26:33 | fica mais fácil, mas na verdade fica mais difícil. Imagina se você tem três pessoas pra usar as duas |
| 26:39 | mesas. Mesma coisa, você vai rotacionando uma pessoa em cada mesa. Mas imagina o trampo de |
| 26:45 | uma pessoa ficar transportando seu trabalho de uma mesa pra outra se o supervisor não for muito legal |
| 26:51 | e não deixar ficar na mesma mesa. Quando você tem duas mesas, não dá pra deixar seu trabalho |
| 26:57 | no canto da mesa pra voltar pra ela rápido na próxima rodada necessariamente, você pode ter |
| 27:03 | que ficar transportando suas coisas de um lado pro outro, e obviamente isso é mais lento. |
| 27:08 | E se você não tomar cuidado, e seu scheduler for meio burrinho, ele vai dando vez pra threads que |
| 27:14 | não precisam, ou deixa threads com pouco trabalho ocupando tempo demais na sua vez, ou pior, |
| 27:20 | cortando no meio o trabalho de quem realmente precisa rodar. E por isso no começo dos anos 2000 |
| 27:26 | um Linux era ruim pra coisas como tocar um vídeo. O vídeo ficava engasgando, mesma coisa com áudio. |
| 27:32 | Foi só em 2007 com a Kernel 2.6 que ganhamos o Completely Fair Scheduler ou CFS que implementa um |
| 27:40 | algoritmo melhor, de autoria do Ingo Molnár que já mencionei antes, que se inspirou nas idéias de Con |
| 27:46 | Kolivas. Em resumo esse CFS maximiza o uso da CPU e tenta dar preferência pra programas interativos, |
| 27:53 | como aplicativos desktop, que diferente de processamento intensivo, tende a ficar ocioso |
| 28:00 | por períodos de tempo e de repente precisar de prioridade pra coisas como tocar vídeo. |
| 28:05 | Cada sistema operacional implementa estratégias diferentes de scheduler, MacOS, Windows, BSDs, |
| 28:12 | Linux e outros priorizam coisas diferentes e usam algoritmos diferentes. O próprio Windows demorou |
| 28:18 | anos pra chegar no nível de granularidade do MacOS que sempre foi considerado melhor principalmente |
| 28:25 | em criação multimídia porque ele não engasgava no gerenciamento de threads. Por isso músicos |
| 28:31 | e DJs sempre preferiram Macs, especialmente em apresentações ao vivo: porque eles sabiam que o |
| 28:38 | áudio não ia engasgar do nada porque o scheduler resolveu do nada dar a vez pra outra thread à toa. |
| 28:45 | Isso acontecia com Windows e com Linux por isso eles eram bem inúteis em situações assim. |
| 28:50 | De novo, entenda que threads também tem comportamentos diferentes em diferentes sistemas |
| 28:57 | operacionais. Quem saiu na frente na estratégia de threads foram os Macs no começo dos anos 2000 |
| 29:03 | com o OS X. Windows era o segundo melhor, mais ou menos, e foi passado pelos Linux com o CFS |
| 29:09 | só depois de 2007. Ou seja, o Linux moderno que conhecemos hoje só tomou forma de verdade |
| 29:16 | a partir de 2007. Em termos de engasgos você vai notar que o Windows ainda é menos polido que MacOS |
| 29:22 | e também desktop Linux. E esse fator do scheduler antigo foi mais um motivo de porque no mundo Linux |
| 29:29 | processos continuaram sendo importantes. De 2007, agora vamos voltar quase uma década, em |
| 29:35 | 1999 surgiu um paper que começou a ajudar a mudar a forma como pensamos sobre concorrência no mundo |
| 29:42 | de redes e web. Estamos falando do lendário paper sobre o problema dos C10K de Dan Kegel do antigo |
| 29:48 | site cdrom.com discutindo quando os servidores de FTP da Simtel conseguiam servir até 10 mil |
| 29:55 | conexões simultâneas sobre uma ethernet de 1 gigabit. Começamos a usar esse termo pra discutir |
| 30:02 | como servir grandes quantidades de conexões simultaneamente. 10 mil parece muita coisa, mas |
| 30:08 | um só servidor do Whatsapp hoje serve mais de 2 milhões de conexões simultâneas. O problema é que |
| 30:14 | existem diversas estratégias pra fazer isso. Eu já mencionei I/O mas agora vou definir um pouco |
| 30:20 | melhor. I/O é qualquer entrada e saída do sistema, arquivos, rede, USB, teclado, monitor. Agora pense |
| 30:27 | nos mainframes antigos que usavam dispositivos de fita, como os do IBM 701 que eu falei que |
| 30:33 | gravavam dados a fantásticos 5.6 quilobytes por segundo. Se ele tivesse que ficar esperando a |
| 30:39 | operação toda acabar o computador não ia fazer mais nada a não ser esperar. Por isso mainframes |
| 30:45 | lendariamente tem milhares de canais paralelos de I/O. Mas o mesmo não acontece no barramento |
| 30:51 | de computadores comuns como o que usamos. Ou seja, mesmo que você consiga ter paralelismo |
| 30:57 | disponível na sua CPU e sistema operacional, se você só tem um HD, não tem como milhares de |
| 31:03 | threads escreverem ao mesmo tempo. O barramento de I/O vira gargalo. É como se você dividir o |
| 31:09 | trabalho de escrever um livro entre 500 pessoas, onde cada uma escreve uma página. Então você vai |
| 31:14 | acabar o livro no tempo que leva pra escrever uma única página. Porém, se todo mundo tiver |
| 31:20 | que escrever no mesmo livro, não adiantou nada, só dá pra escrever uma página de cada vez. |
| 31:26 | Lembra quando falei de locks em memória global do processo compartilhado entre múltiplas |
| 31:32 | threads? Algo semelhante acontece quando threads tentam acessar recursos restritos do sistema. |
| 31:37 | É o que chamamos de operações que bloqueiam ou bloqueantes. Então se uma thread resolve escrever |
| 31:44 | alguns gigabytes num arquivo, essa thread fica bloqueada até terminar, nesse caso outra thread |
| 31:51 | pode executar outra coisa que não depende do HD enquanto a primeira fica bloqueada. |
| 31:57 | Conexões de rede também são bloqueantes, imagine uma thread fazendo download de |
| 32:02 | alguma coisa ou algum cliente de rede pendurado numa thread. Essas operações são bloqueantes e a |
| 32:08 | sequência de instruções da thread vai esperar até a operação terminar e desbloquear o processamento. |
| 32:15 | Com o tempo os sistemas operacionais passaram a implementar algo chamado I/O assíncrono. Ou seja, |
| 32:22 | em vez de bloquear o processamento, a thread pode pedir pra escrever alguma coisa num arquivo, mas o |
| 32:28 | sistema operacional não vai bloquear a thread. Em vez disso a thread pede pra escrever e indica na |
| 32:34 | função do sistema pra quando ele terminar, enviar um evento de término. Daí a thread pode configurar |
| 32:41 | pra quando receber esse evento daí executar alguma outra sequência de instruções. Ou seja, a programação fica dependente do evento de término da operação de I/O, |
| 32:51 | seja operação de leitura ou de escrita, e é isso que muitos chamam de orientação |
| 32:57 | a eventos. Isso não é nada novo, qualquer linguagem de programação dos anos 90 usada pra fazer aplicativos gráficos sempre usou programação orientada a eventos. Por exemplo, |
| 33:07 | o código que é executado quando você tem o evento de clicar num botão, ou o evento de arrastar uma janela. Num Linux podemos enviar sinais a um processo, |
| 33:17 | que é uma forma rudimentar de comunicação inter processos, como os sinais de kill |
| 33:22 | como SIGTERM ou SIGINT. Aqui estamos estendendo para eventos de I/O do sistema operacional. |
| 33:30 | Mesmo sem I/O assíncrono podemos atender múltiplas conexões como no problema do C10K fazendo cada |
| 33:37 | conexão ao servidor ser servida por forks do processo servidor. É como a primeira versão de |
| 33:44 | um Apache resolvia isso. Cada nova requisição era gatilho pra um fork do processo principal |
| 33:49 | que gerava um processo filho. Já expliquei que isso é pesado, especialmente em Windows. |
| 33:55 | A segunda alternativa é cada nova conexão recebida no processo servidor ser servida |
| 34:00 | por uma nova thread dentro desse processo. Também já expliquei como threads são bem mais leves que |
| 34:06 | um processo, mas temos o problema de gerenciar o compartilhamento da memória interna do processo |
| 34:11 | entre múltiplas threads e os bugs que isso pode causar como race conditions e dead locks. Além |
| 34:18 | disso quando estamos falando de 10 mil conexões ou mais, seria necessário mais de 10 mil threads, |
| 34:24 | e eu já expliquei como context switching entre threads não é algo tão simples assim nem barato, |
| 34:30 | você precisa de um scheduler muito bom e mesmo assim cada thread também consome recursos do |
| 34:35 | sistema operacional. Versões subsequentes do Apache e outros servidores web como o |
| 34:41 | IIS no Windows se valeram de threads pra servir milhares de conexões, mas não era o bastante. |
| 34:47 | A terceira opção como já imaginaram é usar esse tal recurso de I/O assíncrono, que permite que uma |
| 34:53 | única thread ordene múltiplas operações de I/O ao sistema operacional sem que ele fique bloqueado. E |
| 35:00 | o sistema operacional se vira pra realizar essas operações e vai notificando à thread a medida |
| 35:06 | que cada operação vai terminando. Cada sistema operacional implementa esse sistema |
| 35:11 | de filas de eventos para I/O de formas diferentes. Sistemas derivados de BSD como o FreeBSD ou mesmo |
| 35:18 | o MacOS tem uma syscall chamada kqueue. O Windows usa uma coisa chamada I/O Completion Port ou |
| 35:23 | IOCP. E os Linux tinham syscalls chamada select, depois poll e finalmente a mais usada agora que |
| 35:31 | é a epoll. Assim como gerenciamento de threads e schedulers, cada uma dessas implementações se |
| 35:36 | comportam de formas diferentes. Estão vendo como os sistemas operacionais são mais diferentes do |
| 35:42 | que só uma interface gráfica diferente? Como resultado de toda a discussão no fim dos anos 90 e começo dos 2000 em cima do paper do C10K de Dan Kegel surgiu um projeto que nasceu com o |
| 35:53 | objetivo de superar o Apache em conseguir servir dezenas de milhares de conexões simultâneas usando |
| 36:00 | o mínimo possível de recursos do sistema, ou seja, sem usar a estratégia de uma conexão por processo |
| 36:06 | ou thread e sim usando uma combinação de processos e chamadas de I/O assíncrono. É assim que nasce o |
| 36:13 | projeto do servidor web mais rápido e escalável que temos até hoje, o NGINX de Igor Sysoev que |
| 36:20 | começou a ser desenvolvido a partir de 2002 com lançamento da versão estável em 2004. |
| 36:25 | O NGINX tem um processo master que carrega outros processos que ele chama de “workers” e você vai |
| 36:32 | ver que a palavra “worker” é um termo muito usado em arquiteturas com concorrência. Cada worker |
| 36:38 | consegue gerenciar milhares de sockets de conexões de navegadores requisitando páginas web, por |
| 36:44 | exemplo. Em vez de gerar um fork ou uma thread por conexão, ele registra a requisição via epoll num |
| 36:52 | Linux e implementa um loop de eventos. Pense que o programa do worker é um loop que fica fazendo |
| 36:58 | syscalls não bloqueantes de I/O e cada vez que o loop repete ele checa se veio o evento de término |
| 37:05 | e aí executa o que precisa e devolve a página de volta pro requisitante. É uma forma de numa única |
| 37:12 | thread conseguir servir milhares ou dezenas de milhares de conexões simultaneamente. Não sei se fica claro e isso é importante. Se fosse como era antigamente, e eu fizesse um loop com chamadas de I/O, digamos que ler o arquivo HTML do HD levasse 1 segundo e enviar o HTML pela rede pro navegador levasse 1 segundo - é bem menos que isso na realidade, claro. E agora digamos que esse processo recebesse 10 requisições da mesma página. Levaria pelo menos |
| 37:17 | 20 segundos pra servir todo mundo. Com I/O assíncrono poderia levar pouco mais do que os 2 segundos pra servir as 10 páginas. Numa metáfora, do jeito antigo é como se no restaurante todo cliente pedisse direto pro chef o prato que quer, ele só consegue atender e fazer |
| 37:26 | um prato de cada vez e cada cliente na fila precisaria esperar o prato do cliente anterior |
| 37:32 | ficar pronto pra pedir o seu. Ou seja, o último cliente da fila precisa esperar todos os clientes |
| 37:37 | anteriores ter o prato pronto antes de poder pedir o seu. Agora adicione um garçom, todos os clientes |
| 37:44 | fazem o pedido pro garçom um atrás do outro e podem se sentar. Agora o último cliente da fila é |
| 37:50 | atendido bem mais rápido. E o garçom vai passando os pedidos pro chef, que daí vai devolvendo os |
| 37:56 | pratos à medida que forem ficando prontos, é como o evento de término que eu falei antes, |
| 38:01 | mas os clientes já todos foram atendidos, fizeram os pedidos e podem ficar sentados fazendo outra |
| 38:07 | coisa. É mais ou menos a diferença entre só ter I/O bloqueantes e ter I/O não-bloqueante. Não fica |
| 38:13 | todo mundo bloqueado esperando em sequência. Voltando ao NGINX, como cada worker é uma única |
| 38:19 | thread, o master sobe na média um worker por core disponível na CPU então numa CPU quad-core |
| 38:25 | subiríamos 4 workers. Cada worker com um loop de eventos que fica esperando os eventos de término |
| 38:32 | de cada requisição de I/O que ele recebe, com capacidade de servir dezenas de milhares de |
| 38:37 | conexões simultaneamente. E como ele não precisa criar uma thread por conexão, ele não perde tempo |
| 38:44 | nem recurso fazendo context switching. Então um NGINX num bom servidor consegue servir até |
| 38:50 | milhões de conexões simultaneamente, especialmente se for servir coisas simples como ler uma página |
| 38:56 | HTML estática e só devolver sem processar lógica nenhuma. Se você vem de Javascript talvez já tenha |
| 39:02 | ouvido falar desse pattern de arquitetura, isso se chama um Reactor, porque dentro do loop ele |
| 39:09 | reage aos eventos de I/O que vão terminando. Na mesma época, por volta de 2002 outro framework |
| 39:16 | também implementou o mesmo pattern de Reactor com um event loop e usando I/O assíncrono, |
| 39:21 | Node.js? Nope, ainda não. Esse foi o framework Twisted implementado em Python em 2002. Assim |
| 39:29 | além de servir páginas HTML muito rápido, a cada loop do Reactor você podia executar processamento |
| 39:34 | escrito em Python. Twisted introduziu ainda outro conceito: os Deferreds ou Futures. Mas |
| 39:41 | vou explicar isso no próximo episódio. Nesta primeira parte eu queria deixar bem explícito conceitos que acho que a maioria dos programadores tem problemas em entender |
| 39:49 | logo no começo: concorrência e paralelismo e como os sistemas foram evoluindo pra resolver |
| 39:56 | esse problema. Aliás, eu não expliquei isso antes mas vamos definir agora: concorrência e paralelismo. Simplificando, lembram dos computadores até os anos 90? Você podia ter |
| 40:07 | tarefas que pausam e deixam outras executarem no seu lugar e ficam trocando de lugar, fazendo o tal |
| 40:13 | context switching. Elas são concorrentes mas não são paralelas. Quando você tem dois ou |
| 40:20 | mais cores na CPU aí sim, você realmente tem paralelismo, porque duas tarefas concorrentes, |
| 40:25 | por exemplo threads, podem ser executadas verdadeiramente em paralelo. Seja em uma CPU com |
| 40:32 | capacidade pra somente uma thread ou uma CPU com capacidade pra múltiplas threads, ainda assim você |
| 40:37 | precisa de um scheduler, porque seu programa pode modelar e gerenciar mais threads concorrentes do |
| 40:44 | que existem cores físicas pra executá-las. É importante também que todos entendam como |
| 40:50 | os sistemas operacionais são muito diferentes especialmente nesses aspectos de concorrência, |
| 40:56 | como implementam threads de maneiras diferentes, como existem diferentes schedulers e no Linux você |
| 41:03 | pode inclusive escolher schedulers diferentes pra casos diferentes. E como I/O assíncrono é |
| 41:09 | outro recurso implementado de formas diferentes. Sabendo desses conceitos no próximo episódio vamos |
| 41:16 | falar de coisas mais abstratas como corotinas, fibers e o conceito de deferreds ou futures. |
| 41:22 | Esse assunto é bem cabeludo, concorrência e paralelismo não tem uma resposta única que |
| 41:28 | resolve todos os problemas. Cada tipo de problema vai precisar de uma solução diferente. Forks de |
| 41:35 | processos funcionam. Multi-threads funcionam. I/O assíncrono é só mais uma opção nessa caixa |
| 41:41 | de ferramentas e ainda vamos explorar outras opções. Além disso no mundo Linux o suporte a |
| 41:47 | threads só ficou realmente bom a partir de 2007. Por isso você vê tanta coisa interessante no mundo |
| 41:53 | de concorrência dando as caras principalmente na década de 2010. Muitos acham que event loops, |
| 41:59 | o pattern de Reactor nasce com Node.js a partir de 2009, mas não, NGINX e Twisted pelo menos, |
| 42:06 | já implementavam isso em 2002, derivados diretamente do objetivo de resolver o problema |
| 42:11 | C10K de Dan Kegel de 1999 e esses conceitos mesmo já vinham pesquisas de anos antes. |
| 42:16 | Se tiverem dúvidas não deixem de mandar nos comentários abaixo, se curtiram o vídeo mandem |
| 42:22 | um joinha, compartilhem com seus amigos, assinem o canal e não deixem de clicar no |
| 42:27 | sininho pra não perderem os próximos episódios. A gente se vê semana que vem, até mais. |
