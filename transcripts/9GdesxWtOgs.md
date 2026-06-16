# Árvores: O Começo de TUDO | Estruturas de Dados e Algoritmos

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=9GdesxWtOgs
- **Duração:** 57:41
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita No final eu acabei me empolgando no assunto de algoritmos e estruturas de dados. |
| 0:06 | Eu não queria continuar porque dá bastante trabalho fazer esse tipo de episódio, mas já que cheguei até aqui, me senti na obrigação falar da estrutura de dados que eu considero |
| 0:15 | a mais importante da matéria: árvores ou trees. Os vídeos acabaram trazendo muita gente nova que acho que não entendeu a proposta do canal. |
| 0:23 | Eu não tô fazendo um substituto pra cursos oficiais de faculdades, e eu nem tenho intenções |
| 0:29 | de parecer que seja. Só tô discutindo assuntos que acho que são importantes que iniciantes procurem estudar |
| 0:34 | por conta própria. E pra isso eles precisam pelo menos saber que esses assuntos existem e porque são importantes. |
| 0:40 | Pra quem não sabe, o canal não tem fins lucrativos, eu não tenho patreons, nem patrocínios |
| 0:45 | de nenhum tipo, nem vendo nada. E tudo que é arrecadado com ads eu faço doação de 200%, quer dizer, eu pego o que |
| 0:52 | arrecado e dobro do meu bolso pra outros projetos de educação sem fins lucrativos. |
| 0:57 | Vejam meu video acima explicando e não esqueçam de mandar mais sugestões de projetos pro e-mail contato @ codeminer42.com. |
| 1:05 | Como eu faço os vídeos nas minhas horas vagas e como desde o fim do ano passado meu volume de trabalho aumentou drasticamente, tem sobrado bem menos tempo pra me dedicar. |
| 1:13 | Infelizmente não é porque tô jogando muito videogame. Meu pobre PS5 tá pegando pó desde que comprei. |
| 1:19 | E eu sou meio retardado das idéias e decidi justo fazer videos de 1 hora de duração, trabalhosos de editar, e obviamente cometi erros pra lá e pra cá. |
| 1:26 | Desculpem por isso, mas lembrem que eu relato os principais nas erratas na descrição e até mesmo no video seguinte. |
| 1:33 | Por outro lado acho bacana que vocês estão prestando atenção e notando esses erros. E só pra variar, o comecinho do episódio de hoje vai ser pra eu falar das erratas do |
| 1:41 | episódio anterior. Apesar de pra alguns parecer coisa pequena, é importante eu explicar o correto, porque |
| 1:48 | se você entender completamente esta minissérie de 3 episódios, talvez comece a enxergar programação e código de uma forma diferente. |
| 1:55 | E mais do que isso: que cometer erros faz parte do processo. Então vamos lá! |
| 2:01 | (...) Um erro besta, mas importante, é quando eu falo sobre a função de hashing pro nosso |
| 2:12 | exemplo de Hashtable. Sou o primeiro a dizer que as pessoas não devem achar que tudo é uma distribuição |
| 2:18 | gaussiana ou normal no mundo, porque não são. E eu mesmo cometi o erro de fazer isso. Vamos entender rapidamente porque isso é importante e aproveitar pra fazer umas tangentes. |
| 2:27 | Eu não vou explicar estatística porque eu não me acho a pessoa mais adequada. Mas todo mundo já deve ter visto a distribuição gaussiana ou normal. |
| 2:35 | Todo tipo de evento independente pode ser gaussiano, por exemplo a altura média da população. |
| 2:40 | Faz de conta que se medirmos a altura de 100 pessoas, 80 vão estar nos 1 metro e sessenta, 12 vão estar perto de 1 metro e meio ou 1 metro e oitenta, e 8 entre 1 metro e quarenta |
| 2:50 | e 1 metro e noventa. Se colocar isso num gráfico, mesmo medindo poucas pessoas, a gente começa a ver o tal |
| 2:56 | formato de sino ou bell shape, que caracteriza uma distribuição normal. A média é onde costuma estar a maioria das medições, no meio. |
| 3:05 | E quanto mais pra direita ou pra esquerda vai indo, as medições caem rápido. Essas distâncias a gente chama de sigmas. |
| 3:11 | Se não me engano, 65 porcento das medições vão estar em sigma 1, 95 porcento em sigma |
| 3:16 | 2, e 99 ponto sete porcento em sigma três. Quem estudou coisas como processos de controle de qualidade conhece Six Sigma, ou sigma 6 |
| 3:24 | que é o famoso 99 ponto 99966 ou 3.4 defeitos por milhão. |
| 3:30 | Quando a gente fala 99.7% parece muito bom, porque nas nossas concepções mais casuais, |
| 3:37 | parece "perto de 100 porcento o suficiente", mas não é. Um contrato de SLA Sigma 3 de 99.7% significa 1 dia inteiro fora do ar num ano, por exemplo. |
| 3:46 | Em uma indústria que produz milhões de itens por mês, significa 3 MIL defeitos por milhão |
| 3:51 | de itens, por mês. Infelizmente, perfeição, ou seja, zero defeitos é quase impossível no mundo real por períodos |
| 3:58 | prolongados de tempo. Eventualmente vai ter erros humanos, falhas mecânicas. Six Sigma costuma ser a meta. |
| 4:04 | A última coisa a se lembrar sobre distribuições normais e médias é que elas só valem pra |
| 4:10 | eventos independentes entre si. Quando você mensura coisas onde um não afeta o outro, como jogar dados, peças fabricadas |
| 4:17 | em massa, altura de uma população. Mas um lugar onde todo mundo usa errado é salários, porque o salário de um influencia |
| 4:24 | o dos demais, não é um evento independente. É um número dinâmico que varia por diversos fatores. |
| 4:31 | Outras distribuições estatísticas vão se encaixar melhor como a Lei de Potência ou Power Law, mas não a gaussiana. |
| 4:37 | Enfim, essa tangente não tem nada a ver com a minha errata, foi só algumas coisas que eu já queria compartilhar mesmo. |
| 4:42 | Mas a errata é que na explicação sobre funções de hashing eu disse que o ideal seria uma função que conseguisse devolver números que caracterizam uma distribuição |
| 4:52 | gaussiana. Mas tá errado, pois significa que na média ele ia devolver o mesmo valor, com alguns números diferentes próximos da média. |
| 4:59 | Por exemplo, se fosse uma função que devolve números entre 1 e 10, ele poderia só ficar devolvendo o número 5 por exemplo, que é exatamente o oposto do que a gente quer. |
| 5:07 | Na verdade a distribuição pra esse tipo de função deve ser uniforme onde, aí sim na média, ele devolve a mesma quantidade pra cada número do range. |
| 5:16 | E por isso minha confusão antes. No exemplo, se for uma função que devolve números de 1 a 10, e eu rodar essa função |
| 5:22 | cinquenta vezes, cada número de 1 a 10 deveria aparecer na média 5 vezes, e assim balancear |
| 5:29 | o uso do meu hashtable. E mesmo assim não deveria devolver cinco números 1s, depois cinco números 2s etc |
| 5:35 | de forma fácil de prever, determinístico, e aí eu disse que deveria ser o mais próximo |
| 5:40 | de aleatório quanto possível, se mantendo numa distribuição uniforme. E eu sei que isso que eu acabei de falar, por si só é assunto pra outro episódio, |
| 5:48 | então pesquisem sobre números pseudo-aleatórios pra mais detalhes depois. Continuando, eu usei o exemplo de função de hashing djb2 e disse que não é necessariamente |
| 5:58 | a melhor, mas não tá correto também, na realidade a djb2 é uma boa função se você |
| 6:04 | não souber nenhuma outra. Como disse antes, o importante é os resultados caírem o mais perto possível de uma distribuição |
| 6:11 | uniforme e evitar colisões, ou seja, evitar devolver muito do mesmo resultado. |
| 6:16 | Dentre as funções de hashing mais conhecidas, um exemplo didático é o Lose Lose, um dos piores, muita colisão. |
| 6:23 | Tem o Super Fast Hash, que como o nome diz, é rápido, mas também muita colisão. E tem o CRC32 que é bom mas precisa de um lookup table de 1 kilobyte, então consome |
| 6:33 | mais recursos que outros algoritmos, o que pode fazer diferença num ambiente limitado, |
| 6:39 | como embarcado, mas é bom pra todo o resto. Não tenho certeza de cabeça, mas acho que é usado em coisas como protocolos de rede, |
| 6:44 | por exemplo. O que eu venho explicando desde os episódios sobre Turing como tudo são números. |
| 6:49 | Endereços de memória são números. Strings é uma cadeia de bytes, tudo é um numerozão binário. E hashing é uma forma de conseguir números menores que representam um número maior, |
| 6:59 | como Strings. Então um texto da wikipedia é um linguição de bits gigantes, um numerozão enorme. |
| 7:05 | E com hashing podemos etiquetar esse textão com um número menor. No caso de um SHA-256 da vida, seria com uma etiqueta numérica de 256 bits. |
| 7:14 | É como um número de série de um item. O ideal é ser um número único, mas não é garantia e por isso temos colisões onde |
| 7:21 | dois itens diferentes, dois textões diferentes de wikipedia podem chegar no mesmo hash. |
| 7:27 | Quem já programa poderia pensar, mas porque não usamos coisas como SHA-512? Eles são usados pra segurança, não são melhores? |
| 7:34 | Eles tem mais ou menos a mesma função, devolver um número que representa uma cadeia de bits, um String, como a chave do nosso hash. |
| 7:42 | E esse número costuma ser o mais único quanto possível. Nunca vai ser 100% sempre único, mas quanto maior o valor do resultado, estatisticamente |
| 7:50 | menores as chances disso acontecer. Porém, a categoria de funções de hashing como SHA-512 foram desenhados pra ter características |
| 7:58 | de segurança, se usados em conjunto com coisas como salts, como eu expliquei no episódio |
| 8:03 | de criptografia. São mais avançados e consomem mais recursos e mais processamento pra gerar esse número. |
| 8:10 | Portanto, não são necessariamente eficientes como geradores de chaves num hashtable se não há requerimentos de segurança junto. |
| 8:17 | Em particular o SHA-512 é rápido em máquinas de 64-bits porque as funções de cálculo vem implementado em hardware no CPU hoje em dia. De qualquer forma não quer dizer que não poderia ser usado, só que não vai ser o mais eficiente pra hashtables genéricos. E voltando pra errata, eu falei no video que o cálculo do djb2 faz bitwise shift de 5 |
| 8:23 | bits pra esquerda, que é um cálculo rápido e é equivalente a multiplicar por 3 em decimal. |
| 8:29 | O certo é multiplicar por 32. Eu ainda cometi dois erros sobre complexidade. O primeiro foi quando falei que NP é tempo não polinomial, mas o correto, que até falo |
| 8:38 | depois no vídeo, é que NP é Non Deterministic Polynomial Time ou Tempo polinomial não determinístico. |
| 8:45 | Outro erro foi quando falei que complexidade exponencial é Big O de 2 elevado a N mas na realidade é N elevado a N. |
| 8:52 | E falando nisso eu disse que fatorial é a complexidade mais cara, mas na realidade é a exponencial, porque por exemplo, 15 fatorial é 15 vezes 14 vezes 13 vezes 12 etc até |
| 9:02 | 1. Mas 15 elevado a 15, exponencial, é 15 vezes 15 vezes 15 etc 15 vezes. |
| 9:08 | Exemplo de trecho que tirei direto da cabeça e não revisei direito. Eu disse que um exemplo de complexidade fatorial é a implementação do cálculo de fatorial |
| 9:16 | recursivo. Tá errado e nem lembro porque eu falei isso, mas na realidade é O linear e não fatorial. |
| 9:22 | O exemplo correto pra fatorial é o Travelling Salesman, que eu traduzi direto do inglês |
| 9:27 | pra Vendedor Viajante mas no Brasil povo tá acostumado a falar em problema do caixeiro viajante. |
| 9:33 | Na real tanto faz, se você procurar em português vai achar como caixeiro mesmo, mas eu recomendo procurar como travelling salesman que vai achar artigos muito melhores sobre o problema. |
| 9:43 | Tudo isso dito, vamos ver se neste último episódio da série eu cometo menos erros. |
| 9:48 | Sempre leiam os comentários, tem um povo que tá prestando atenção e corretamente corrigindo. Falando nisso eu fico surpreso que tem gente que acha que pessoas como eu não erram. |
| 9:58 | Óbvio que erram e não é pouca coisa, no máximo eu diria que pessoas experientes no geral reconhecem o erro mais rápido e corrigem mais rápido. |
| 10:06 | Pessoal inexperiente, por alguma razão, insiste no erro por muito mais tempo do que deveriam. No final todo mundo erra, então não fiquem frustrados se vocês erram, o problema é |
| 10:16 | errar a mesma coisa o tempo todo. Pra você não se perder vamos recapitular. Ano passado eu adaptei dois vídeos de dois canais que eu gosto, do Ben Eater e do Gaming |
| 10:26 | Mechanics Explained. Primeiro pra mostrar no nível do transistor, num protoboard, como bits são armazenados |
| 10:32 | numa memória e como instruções de "baixo nível" são construídas com transistores, |
| 10:37 | a verdadeira linguagem de máquina. Tudo começa com instruções simples como soma, construído em hardware, passando elétrons |
| 10:44 | por transistores, formando portas lógicas. E com isso você chega no Assembly. Depois, de propósito, resolvi contar a história de Turing e Von Neumann pra explicar como |
| 10:54 | instruções e dados populam a mesma linguiçona de bits e o que isso significa, os primórdios |
| 11:00 | da computação moderna. Na sequência eu quis falar sobre tipos de arquivos, que todo mundo usa e ninguém entende |
| 11:06 | que arquivos texto e arquivos executáveis é tudo a mesma coisa, tudo um linguição de bits. Todo programa, todo arquivo, é nada mais que um numerozão gigante. |
| 11:15 | A ordem que esses bits aparecem nessa fita determina seu formato. |
| 11:21 | Cada bit tem um endereço, que é a posição na fita. E quando você tem sequências especiais de bits em determinados endereços vai começar |
| 11:28 | a diferenciar entre uma imagem jpeg e um executável de Linux, por exemplo. Aliás, quando eu falei de memória virtual nos dois últimos episódios, a divisão de |
| 11:37 | segmentos como stack, heap, ROData, Text é específica de Linux e executáveis ELF. |
| 11:43 | Windows e Mac o layout dos segmentos é diferente, ou seja, o range de endereços de cada coisa |
| 11:49 | vai ser diferente. Mesma coisa entre arquiteturas de 32 ou 64-bits. |
| 11:54 | Enfim, daí chegamos na trilogia de agora, onde comecei com diferentes Hello World pra |
| 12:00 | mostrar como essa fita é usada e como a memória começa a ser organizada em coisas como stack |
| 12:05 | e heap e finalmente no último episódio mostrei como existem diferentes tipos de listas: arrays, |
| 12:12 | listas ligadas, hashtables. Não cheguei a mencionar, mas você pode implementar Stacks que são pilhas e Queues que são filas |
| 12:18 | usando qualquer uma dessas estruturas. Números inteiros, arrays de chars, e coisas assim são tipos primitivos, coisas “concretas”. |
| 12:26 | Pilhas ou filas são conceitos, que podem ser implementados de vários jeitos, e por isso chamamos de tipos abstratos. |
| 12:34 | Pilhas podem ser arrays ou listas ligadas onde você só tem acesso ao último elemento, no caso de pilha, ou seja, só operações de push pra empurrar um elemento pro fim da |
| 12:44 | lista e pop pra tirar o elemento do começo da lista. Filas você também tem duas operações principais, uma enqueue pra colocar no fim da lista e |
| 12:52 | uma dequeue pra tirar do começo da lista. São casos de estruturas que chamamos de lineares. |
| 12:58 | Então também existem estruturas não-lineares, e aqui entra o assunto de Grafos. Eu não lembro se era correto dizer assim, mas um caso particular de Grafo unidirecional |
| 13:07 | é uma Árvore. Voltando. Grafos você vê todos os dias. Toda rede, seja rede local ou de internet, é um grafo. |
| 13:15 | Um conjunto de nós ou Nodes, como computadores, ligados por Edges que são tipo o cabo ethernet |
| 13:20 | pro roteador ou mesmo a conexão wifi que liga seu smartphone no roteador. Uma rede social é um grafo, onde os Nodes são as pessoas. |
| 13:29 | Os Edges são os relacionamentos entre elas. E você pode ter todo mundo ligado com todo mundo ou diversos grupos ligados por algumas |
| 13:36 | poucas pessoas em comum entre os grupos. Se quiser entender redes sociais, você começa entendendo Grafos. |
| 13:43 | Mas grafos é um assunto muito grande pra explicar em pouco tempo. Por hoje, entendam que existe essa matéria pra estudar. |
| 13:50 | Praticamente tudo que você chama de Rede pode ser descrito com grafos. Por exemplo, o algoritmo de como encontrar o caminho mais curto entre dois Nodes num |
| 13:59 | Grafo, que é o Shortest Path do Dijkstra. Poderia ser o caminho mais curto entre duas localizações num Google Maps ou o caminho |
| 14:06 | mais curto no relacionamento de pessoas num LinkedIn. E na estatística existem vários estudos sobre as particularidades de distribuição |
| 14:14 | de diferentes grafos ou redes. Se quiser se aprofundar, recomendo livros de rede do Steven Strogatz e Duncan Watts, |
| 14:21 | que inclusive tem um modelo que leva o nome deles, o modelo Watts-Strogatz. Entendendo redes de forma estatística você chega nos temas de small worlds ou mundos |
| 14:31 | pequenos, os famosos seis graus de separação. Acho que na faculdade o povo ensina até o modelo de Erdös e Rényi. |
| 14:38 | O tema de mundos pequenos explodiu por conta do aparecimento das redes sociais massivas |
| 14:43 | no começo do século XXI. Porque agora temos dados reais massivos pra analisar, o tal Big Data, que foi material |
| 14:50 | de pesquisa pra um Duncan Watts quando trabalhou no Yahoo e hoje na Microsoft. Daí você chega nos modelos de Watts-Strogatz e Barabási-Albert. |
| 14:58 | Se você acha que entende redes sociais e nunca ouviu falar deles, ainda não sabe o que são redes sociais. |
| 15:05 | Isso tudo dito, deixa eu dar uns passos pra trás. Depois de aprender arrays, listas ligadas e hashtables acho que é importante fechar |
| 15:12 | com árvores que, por si só, é um assunto bem grande, podemos ir pra B-trees que sendo |
| 15:17 | honesto eu não lembro mais tudo de cabeça. B-trees é o que tá por trás de índices de bancos de dados, por exemplo. |
| 15:24 | Mas falando genericamente de árvores, você vai ver essa estrutura em tudo que é lugar. Exemplos simples? |
| 15:29 | Basta ver seu Windows Explorer, Mac Finder ou GNOME Nautilus. Seu file system, o sistema de arquivos é inteiro baseado em árvores. |
| 15:38 | Diretórios e arquivos são Nodes na árvore, a raíz pode ser o seu C:. Veja um documento HTML, qualquer página da Web. |
| 15:45 | Sua representação é o famoso DOM ou Document Object Model, uma árvore onde cada Node, |
| 15:50 | ou entidade, são elementos como parágrafos, forms, imagens e tudo mais. E falando em objetos, veja um Java da vida cuja biblioteca é toda herdada a partir da |
| 15:59 | classe Object. Toda herança de classes e interfaces é representada numa árvore. |
| 16:05 | E sem árvores você não consegue seguir pras próximas matérias na ciência da computação como sistemas operacionais ou compiladores. |
| 16:13 | Todo seu código fonte, seja numa linguagem compilada como C ou interpretada como Python ou Javascript passa por etapas como análise léxica, depois análise sintática, que gera |
| 16:23 | coisas como um AST ou abstract syntax tree, que é a representação do seu código texto |
| 16:28 | no formato de uma árvore. E mesmo pra entender sistemas operacionais você vai precisar de árvores. |
| 16:34 | Quando falei de memória virtual vimos dois exemplos de segmentos importantes. Primeiro a stack, que controla o estado da execução do programa a cada instrução |
| 16:43 | e que é implementado como uma estrutura de dados linear de Pilha. Já o segmento Heap pode ser gerenciado com uma árvore. |
| 16:49 | Na realidade o Heap usa uma estrutura de dados baseada em árvore chamada Heap. |
| 16:55 | Um Heap pode ser uma implementação de um tipo de dados abstrato chamado Fila de Prioridade ou Priority Queue. |
| 17:01 | São mais tipos abstratos como a Pilha ou Fila, que podem ser implementadas com as estruturas |
| 17:06 | de dados primitivas que expliquei antes. Se for uma binary heap, então é implementado usando uma binary tree, ou árvore binária. |
| 17:15 | A distinção é importante porque nos exemplos de file system ou DOM de HTML as árvores não são binárias, porque cada Node não tem só dois elementos, eles podem ter múltiplos |
| 17:24 | filhos ou até múltiplos pais, então são grafos mas não árvores binárias. |
| 17:29 | Provavelmente B-trees, que vou explicar o que são mais pro final. A estrutura de Heap é a usada no algoritmo de ordenação Heapsort. |
| 17:37 | Lembram quando falei de Quicksort no episódio anterior? Tem outras nos livros de algoritmos como mergesort, insertion sort; e heapsort costuma aparecer |
| 17:45 | junto. Mas o importante é saber que sua memória tá organizada numa árvore binária. |
| 17:50 | Uma árvore tem como característica começar de um Node raíz ou Root. Root pra quem não sabe, é tradução pra raíz, o primeiro Node. |
| 17:58 | O primeiro usuário num Linux chama Root, por isso. Quando você digita caminhos de diretórios a primeira barra ao contrário, backslash, |
| 18:05 | a gente chama de root do file system. Num Windows o “C:\\” só é a raíz do seu primeiro HD que o Windows sempre chama |
| 18:12 | de C (e pra quem não sabia é porque A e B eram reservados pra drives de disquetes). Mas enfim, você vai ver esse nome root ou raíz em vários lugares. |
| 18:21 | Lembram da Lista Ligada? É uma struct que tem um valor qualquer que queremos guardar e um ponteiro pra outro Node, |
| 18:27 | o previous ou next no nosso exemplo. Numa árvore, cada Node vai apontar pra mais de um Node. |
| 18:33 | Numa árvore binária, em particular, aponta pra 2 outros Nodes que comumente chamamos de `left` e `right` ou esquerda e direita. |
| 18:41 | Uma árvore pode ser balanceada ou não-balanceada. Numa árvore binária, não balanceada, onde vamos incluindo elementos, digamos, tudo pra |
| 18:50 | direita da árvore, vai se comportar basicamente como uma lista ligada com complexidade O linear |
| 18:55 | pra procura. Vamos dar um exemplo besta de árvore assim. Pense numa lista de números quaisquer como vinte e sete, quatorze, trinta e cinto, dez, dezenove, trinta e um e quarenta e dois. Agora vamos imaginar uma Struct Node com ponteiros left e right pra outros Nodes. E vamos desenhar como ficaria na memória a versão ineficiente, onde só vou preencher |
| 19:01 | o ponteiro right de cada Node. Veja como elas ficam sequenciais como se fosse uma lista ligada. É o pior caso. Mas a coisa só fica interessante quando falamos em árvores binárias balanceadas ou pelo menos semi-balanceadas. E nesse caso o tempo de procura vai ser proporcional ao height, ou altura da árvore em vez de |
| 19:07 | ser proporcional ao total de elementos inseridos. De exemplo, podemos desenhar a mesma sequência mais bonitinho, de uma forma balanceada pra ter ambos left e right preenchidos. Veja como fica mais bonito, com uma altura tamanho 2, sem contar a raiz, em vez de ter altura 7 que era a altura da lista ligada. Mas até aqui não ganhamos muita coisa a não ser reorganizar a estrutura. |
| 19:13 | Se eu quiser procurar onde tá a chave 31 ainda ia precisar sair comparando quase todos os Nodes e a procura seria O linear do mesmo jeito que na lista ligada. Vamos ver como melhorar isso. Eu falei antes que um dos problemas de um array é quando queremos inserir um elemento no meio dele. Digamos, inserir na posição 5 de um array de 10 elementos. |
| 19:19 | Tem duas formas. A primeira é copiar os elementos da posição 6 até 10 uma posição mais pra frente - se ainda tiver espaços vazios) e inserir o novo elemento na posição 6. Outra forma é se for uma lista ordenada, daí inserimos o novo elemento no fim do array e mandamos ordenar ele usando um Timsort ou Quicksort da vida. Qualquer uma das formas pode ter uma complexidade maior que O linear, provavelmente loglinear |
| 19:25 | que é a complexidade de um algoritmo de ordenação como Quicksort. Mas, e se fosse possível inserir um elemento numa lista pré-ordenada em complexidade menor que linear, talvez logaritmica? Apesar do nome árvore, e apesar da imagem na cabeça ser algo como diretórios e arquivos numa hierarquia, pense em árvores binárias como se fosse uma lista mesmo. Aqui vem o negócio que se fala sempre sobre abstrações. |
| 19:31 | O objetivo é o seguinte: ter uma lista ordenada que, no geral, é mais barato de procurar e mais barato de inserir ou apagar elementos do que um array ou lista ligada. Árvores aparecem porque, como expliquei no video anterior, se temos um problema que podemos ir particionando, tipo quebrando uma lista ao meio, depois quebrando essa metade ao meio, isso é característica de algo logarítmico. Pense numa árvore visualmente como se fosse uma lista particionada. |
| 19:37 | A raíz poderia ser o elemento mais do meio da lista e cada um de seus filhos tem metade da lista e assim sucessivamente até o fim da lista. |
| 19:43 | Mas só particionar não tem muita vantagem se a lista estiver bagunçada, tudo fora de |
| 19:48 | ordem. O grande truque é ter essa árvore com os itens ordenados. Porém, o que significa Nodes ordenados numa árvore que não parece ter uma única direção? |
| 19:56 | Quem é o primeiro elemento? Quem é o segundo? Vamos pegar essa sequência de 14 números aleatórios e organizar numa árvore binária |
| 20:03 | ordenada. Veja como o número 0 tá mais pra esquerda, o 34 virou a raíz e mais pra direita tem |
| 20:09 | números maiores como 99. O único código que vou mostrar linha a linha hoje é da binary search tree ou árvore de |
| 20:17 | procura binária. Vamos começar criando a struct Node, parecido com o da lista ligada e do hashtable. |
| 20:23 | É muito simples, tem um campo pro número que vamos guardar. Daí os ponteiros de left e right pros Nodes filhos. |
| 20:30 | Agora vamos direto fazer uma função main que vai popular essa árvore. Note que eu declarei a variável root só com o tipo Node em vez de `struct Node` como |
| 20:38 | vim fazendo antes. Isso porque eu declarei ele como um novo tipo com `typedef` então `Node` é a mesma coisa |
| 20:44 | que `struct Node`. Fica mais curto de escrever e agora vocês já viram do outro jeito pra ver a vantagem |
| 20:50 | de usar assim. Começamos com um array de 14 elementos, números aleatórios. E um Node chamado root pra ser a raíz. |
| 20:57 | Fazemos um loop pra inserir todos os elementos desse array na árvore. Então já sabemos que vamos precisar de uma função chamada `insert`. |
| 21:04 | Só pra ficar mais fácil de explicar e não precisar falar de ponteiro de ponteiros, a primeira variável vai ser o endereço pra raíz, que começa nulo e a função devolve |
| 21:13 | o endereço da raíz de volta quando popular. Tem jeito melhor de fazer isso, mas pro exemplo isso é suficiente. |
| 21:19 | Chegou a hora de tentar procurar um elemento dentro da árvore criando outra função, a `search`. |
| 21:24 | Mesma coisa dos outros episódios, vamos passar o endereço da raíz e o número que tamos procurando. |
| 21:29 | Agora vamos voltar lá pro começo do arquivo e criamos essas funções, começando pela `insert` que vai receber um ponteiro pra raíz e o número que queremos inserir e retorna |
| 21:38 | de volta o endereço da raíz. Começamos criando uma instância de Node no heap com malloc e associando o endereço |
| 21:44 | na variável `temp` de temporário. Daí preenchemos a estrutura com o número que passamos no campo `data` e inicializamos |
| 21:51 | os ponteiros de left e right pra ser nulo. Aliás, importante, isso foi uma coisa que esqueci mesmo nos exemplos de lista ligada |
| 21:58 | e hashtable. Se não inicializar os ponteiros com NULL, explicitamente, nada garante que no espaço |
| 22:04 | alocado não havia bits de outra coisa lá e os campos podem começar já preenchidos com lixo, apontando pra algum lugar aleatório bizarro. |
| 22:12 | Das duas uma, ou eu inicializo na mão como fiz agora gravando NULL ou em vez de `malloc` |
| 22:19 | posso usar `calloc` pra que já faz essa limpeza. Voltando, o começo é simples. |
| 22:24 | Se a raiz, ou root, for nula como é o caso na primeira vez, ele passa a apontar pro mesmo |
| 22:29 | lugar que a variável `temp`. Daí termina o `if` e dá return do novo root. |
| 22:35 | Caso contrário, vamos fazer uma cláusula `else` e começamos criando um novo ponteiro temporário chamado `current` que aponta pro Node do root e outro ponteiro chamado `parent` |
| 22:45 | de pai ou mãe, tanto faz, que começa nulo. Começamos fazendo um loop infinito com `while(1)`. |
| 22:51 | Se a gente não fizer nada dentro desse loop pra sair, vai ficar repetindo dentro do loop |
| 22:56 | pra sempre. Dentro começamos fazendo a variável `parent` apontar pra `current` que, na primeira passada |
| 23:02 | do loop é o primeiro Node que já tá inserido. O truque começa aqui. Vamos checar dois casos, se o número que queremos inserir agora for menor que o número |
| 23:11 | do parent. Se não for, cai no `else` que é o caso oposto, se o número que estamos inserindo for maior |
| 23:17 | ou igual ao do Node parent. No nosso exemplo, a raíz é o número 34. O próximo número da lista é 84. |
| 23:25 | Então ele cai no bloco de else. Nesse bloco fazemos a variável current apontar pra direita do Node atual, do 34. |
| 23:33 | E agora podemos ter dois casos. Se o Node current for nulo ou se já tiver outro Node. |
| 23:38 | Nesse caso do 2o item ele ainda é nulo, então fazemos o ponteiro pra direita do node parent |
| 23:45 | apontar pro temporário e saímos do loop dando return da raíz de novo. Vamos completar o código com o próximo item da lista que é o 15. |
| 23:53 | Vai ser um novo insert, passamos o root e o número 15, daí criamos um novo Node temp |
| 23:59 | pra acomodar esse valor 15. Root não é nulo, então entramos no primeiro bloco `else`. |
| 24:04 | Variável current aponta pro root, parent pra nulo. Entramos no `while` infinito. |
| 24:10 | Agora fazemos a variável parent ser igual ao current porque vamos usar pra navegar pela árvore; e o parent sempre vai tá apontando pro Node imediatamente acima dela. |
| 24:19 | Fica mais fácil de entender tendo esse diagrama na cabeça. Agora checamos que 15 é menor que o valor no Node parent, que é raíz 34, então o |
| 24:28 | current vai ser o espaço pra esquerda do Node atual. Por acaso, esse espaço ainda tá vazio, então vai passar a ser o Node 15 que acabamos de |
| 24:36 | criar. Retornamos o root de novo e quebramos o loop infinito. E neste estágio temos uma lista com o 34 no topo, 15 na esquerda e 84 na direita. |
| 24:46 | O código de inserção tá completo, vamos testar mais uma vez com o próximo número da lista, o zero. |
| 24:52 | Começamos no topo da função insert, passando a raiz e número 0. Criamos o node temporário que vai conter o zero, root não é nulo então seguimos |
| 25:00 | criando o ponteiro current apontando pro Node 34 e parent nulo. |
| 25:05 | Entra no loop infinito e começamos com o parent igual ao current que é a raiz. |
| 25:10 | Como zero é menor que o parent, que é o 34 ainda, fazemos o current ser o Node à |
| 25:16 | sua esquerda, que é o 15. Sendo o current não nulo, então sai desse bloco e chega ao fim do while. |
| 25:22 | Como o loop é infinito repetimos. Agora o parent vai ser o current 15. De novo, zero é menor que o atual parent que é 15 então fazemos o current ser o Node |
| 25:32 | left à esquerda. Agora não tem ninguém lá, é nulo, e é onde vamos colocar o node zero. |
| 25:37 | Pronto, atribuímos o left do parent 15 pra ser o node temporário zero e damos return |
| 25:42 | pra sair do loop infinito. Vou acelerar aqui do lado pra inserir os elementos que faltam, e a árvore vai ficando dessa |
| 25:49 | forma. Obviamente não fica bonitinho assim na memória, mas cada Node tem ponteiros apontando pra |
| 25:55 | até dois outros Nodes e podemos rearranjar num diagrama pra ficar visualmente assim. |
| 26:01 | O importante é o seguinte: começa lendo do Node mais à esquerda e vai indo pra direita. |
| 26:07 | Começa pelo zero, depois dois, nove, daí quinze, dezoito, trinta e um e chegamos na raíz trinta e quatro, continua pro trinta e nove, setenta e nove e vai indo até o noventa |
| 26:17 | e nove. Notaram como a lista tá ordenada? Antes de mostrar como fica a função search, acho que vale mostrar como pegar de volta |
| 26:24 | a lista ordenada e mostrar na tela. Temos 3 formas de navegar por essa lista, pre order, post order e in order. |
| 26:32 | Pre order começa da raiz e vai pra esquerda primeiro, depois pra direita. Indo de cima pra baixo. |
| 26:38 | Post order começa do primeiro node mais à direita, no caso o nove e vai subindo, de |
| 26:43 | baixo pra cima. In order, como o nome diz é na ordem. E qualquer um desses casos é simples usando recursão. |
| 26:51 | Primeiro vamos colocar na main a chamada pra função inorder_traversal passando o node |
| 26:56 | raiz. Precisamos criar essa função. Ela começa checando se o node passado é nulo, se for, não faz nada e retorna. |
| 27:03 | Caso contrário chama ela mesma passando o Node à esquerda. Com os nossos valores de exemplo, se a gente pensar como ficaria a Stack do programa, vamos |
| 27:12 | começar chamando inorder pro Node 34. Ela não é nula. Então chama ela mesma de novo passando o Node 15. |
| 27:18 | Acumula no topo da Stack porque não retornamos ainda. Agora o node continua não sendo nulo, então chama ela de novo com o próximo node à esquerda, |
| 27:26 | que é o do zero. Empilha na Stack, de novo. E quando chamarmos outra vez, o Node zero não é nulo, então passamos o node à esquerda |
| 27:33 | dela que, agora é nulo. Empilhamos. Agora a função vai receber nessa variável root um nulo, então o `if` vai ser verdadeiro, |
| 27:42 | não faz nada e retorna. Desempilha da Stack. Voltamos pra chamada anterior que vai continuar do Node 0 e dar `printf` na tela. |
| 27:50 | Vai imprimir zero e agora vamos chamar a função de novo passando quem tá à direita do Node |
| 27:58 | 0, e tem o Node 2. |
| 28:06 | Empilhamos. Mesma coisa, prestem atenção, O node não é nulo, agora chamamos a função passando o ponteiro pro Node à esquerda do 2, por acaso é nulo. Empilhamos. Já sabemos que o `if` vai checar a variável como nulo, não faz nada e desempilha. Agora dá `printf` pro 2 e chama a função passando quem tá à direita do dois. |
| 28:12 | Por acaso é o Node 9. Empilha. Mesma coisa, node não é nulo, chamamos a função pro node à esquerda do nove que é nulo, já sabemos que vai empilhar, entrar e desempilhar porque é nulo, então vamos pular e na sequência vai dar `printf` do 9. |
| 28:17 | Agora tenta chamar a função pro Node à direita do 9, que é nulo. De novo, vai empilhar, checar que é nulo, não faz nada e desempilha. |
| 28:24 | E acaba a função pro 9, retorna e desempilha. A função do 2 também termina, desempilha. |
| 28:30 | A chamada pro zero também acaba e desempilha. Voltamos pro Node 15. Agora continua dando `printf` pra ele, imprime 15 na sequência do 9 e chama a função pro |
| 28:40 | node à direita do 15, que vai ser o 18. Empilha. Node não é nulo então chama a função pro node à esquerda, que é nulo, podemos |
| 28:47 | pular porque sabemos que vai empilhar e desempilhar. Continua dando `printf` pro 18. Agora chama a função pro Node 31 à direita. |
| 28:55 | Pausa, agora olha só, já imprimiu o zero, dois, nove, quinze, dezoito e o próximo vai |
| 29:00 | ser 31, tudo na ordem crescente, ordenadinho e se continuar fazendo a mesma coisa vai imprimir |
| 29:06 | até o 99 na ordem. Se você nunca viu isso antes deve ter dado um nó na cabeça. Mas é justamente isso que precisa acontecer, porque essa estrutura e esse jeito de operar |
| 29:16 | não é intuitivo se você nunca estudou estruturas de dados. Por intuição você vai parar nas listas lineares e nunca vai entender o que vem depois, |
| 29:25 | que são grafos. Ao final, só de ter inserido um monte de números aleatórios na árvore binária conseguimos |
| 29:32 | pegar os elementos já ordenados. O mesmo resultado poderia ser obtido inserindo os números num array e passando um Quicksort |
| 29:39 | da vida neles. Mas entenda a diferença. Se for considerar puramente só inserção de novos valores, é mais rápido colocar |
| 29:46 | num array, porque é complexidade O constante. Já na árvore vai ser O logaritmico. |
| 29:52 | Ou seja, a inserção na árvore é mais lenta. Mas a comparação é injusta. |
| 29:57 | A complexidade de inserir elementos numa árvore de procura binária é O logaritmico porque ele já insere os elementos ordenados. |
| 30:04 | Já no array é O constante pra inserir no fim porque não estamos ordenando. Se também quisermos o array ordenado a cada inserção, precisaria rodar um quicksort |
| 30:12 | no mínimo uma vez no final, daí vai ficar mais caro que O loglinear. Quando o array estiver todo ordenado, podemos pesquisar usando procura binária. |
| 30:22 | Eu não vou mostrar código, mas é assim. O jeito ingênuo de procurar num array é fazer um loop e ir comparando elemento a elemento |
| 30:29 | da esquerda pra direita até achar o 88. Você ia precisar de 10 operações de comparação pra chegar lá. |
| 30:35 | Mas tem um jeito mais rápido que só funciona se a lista já tiver sido ordenada antes. |
| 30:40 | Você pega o tamanho do array e divide por dois, no caso vai ser 7. Daí pega o endereço do primeiro elemento e soma pelo tamanho de cada elemento multiplicado |
| 30:48 | por sete, que é o elemento 39, mais ou menos no meio da lista. Agora compara, 88 é menor que 39? |
| 30:55 | Não é, então já sabemos que não tá na metade à esquerda do 39 e não precisamos olhar nenhum deles. |
| 31:00 | Só de fazer isso já eliminamos metade da lista que não precisamos nos preocupar. |
| 31:05 | Recursivamente fazemos a mesma coisa, à direita do 39 temos 6 elementos sobrando, dividido |
| 31:11 | por 2 são 3, somado à posição 7 chegamos na posição 10, que é o meio da metade da |
| 31:17 | direita. E vai ser o elemento 88 por acaso. Comparamos com o valor procurado 88 e já chegamos nele. |
| 31:23 | Ou seja, com 2 operações de endereço pra chegar no meio do meio e 2 operações de comparação chegamos no 88. 4 operações no total, contra os 10 do jeito ingênuo, |
| 31:34 | menos da metade do processamento. E isso porque essa lista é muito pequena. Quanto maior a lista maior vai ser a economia. |
| 31:40 | Por isso tem vantagem trabalhar com listas ordenadas. Porém, como disse antes, custa O n vezes log de n, loglinear pra ordenar um array. |
| 31:50 | E dependendo do algoritmo, pode custar espaço na memória pra fazer essa ordenação. Um mergesort por exemplo, acho que era um que custava mais caro em espaço extra pra |
| 32:00 | conseguir ordenar a lista em cima. Lembram da animação que mostrei de mergesort no episódio anterior? |
| 32:06 | Vamos ver de novo. Estão vendo que ele vai guardando valores aqui embaixo? Isso é o espaço temporário que o mergesort gasta pra conseguir ordenar a lista em cima. |
| 32:15 | Então, não é só velocidade de processamento pra se preocupar como também espaço temporário de memória que se gasta. |
| 32:21 | Agora pensa na árvore. Ela não custa muito espaço adicional pra ordenar, e custa literalmente O logaritmico, |
| 32:28 | tudo bem que é pra cada elemento, mas a complexidade é uma ordem de grandeza mais rápida que qualquer ordenação de array. |
| 32:34 | E uma vez tendo a árvore ordenada, a procura é parecida com o que acabamos de fazer com |
| 32:40 | procura binária de array. Vamos ver. Voltando ao exemplo, precisamos implementar a função `search`, que vai começar recebendo |
| 32:47 | como argumento o Node raiz da árvore e o valor que estamos procurando, no caso o 88. |
| 32:52 | Criamos uma variável temporária chamada `current` apontando pro `root`. De novo criamos um loop com `while` que vai quebrar se o node current for nulo. |
| 33:01 | E isso só vai acontecer se a gente navegar pela árvore e nenhum dos Nodes tiver o valor que procurado. |
| 33:07 | Agora é a mesma coisa que na busca binária de array. A inserção garante que nossa árvore binária já tá ordenada como acabei de mostrar. |
| 33:14 | Vamos comparar o número 88 com o valor do current que é a raíz 34. |
| 33:20 | Como não é menor, pula pro `else if`. Como é maior faz o `current` ser o Node 84. |
| 33:26 | Repete o loop. 88 ainda não é menor que 84, pula pro `else if` de novo e faz current |
| 33:32 | ser o node à direita, right, que é o 99. Repete o loop. Agora sim, 88 é menor que 99 então vamos fazer o current pegar o Node à esquerda de |
| 33:41 | 99, o ponteiro left. Repete o loop. Agora o Node que achamos não é menor, não é maior, então finalmente cai no último |
| 33:47 | `else` e pronto, achamos o 88. Em quantidade de comparações é equiparável à busca binária de array ordenado, ordem |
| 33:55 | de grandeza Big O logaritmico porque ambos os casos estamos particionando. Entenda a relação. |
| 34:01 | Inserir elementos no fim de um array é rápido, O constante, caso tenha espaços vazios sobrando |
| 34:07 | no final. Se não tiver, precisa criar um novo array maior e copiar os elementos da anterior pra |
| 34:12 | ela. Complexidade O linear. Se quiser que a lista esteja ordenada pra conseguir procurar via busca binária, vai |
| 34:19 | custar O loglinear de um quicksort da vida. No hashtable não se ordena porque a posição depende do hashing da chave. |
| 34:26 | A procura vai ser O linear também. Então a pesquisa numa árvore binária vai ser melhor do que num array, lista ligada |
| 34:33 | ou hashtable. Tudo depende de pra que você vai usar a lista. Pra guardar os campos que vem num formulário simples de cadastro, qualquer lista serve, |
| 34:41 | são poucos elementos. Mesmo na força bruta ingênua, a diferença é pouca. Agora, pra gerenciar coisas como um cache de banco de dados, você vai escolher alguma |
| 34:49 | coisa melhor que um hashtable ou uma árvore binária. Não chegamos no fim da história. Essa nossa árvore binária rudimentar é só a base. |
| 34:57 | O caso ruim pra árvore binária, da forma como implementamos, é tentar adicionar uma lista de números consecutivos. |
| 35:03 | Por exemplo, vamos começar de novo a partir de 99 e tentar inserir cem. Como é maior que 99, vai pra direita. |
| 35:10 | Agora cento e um. Como é maior que 99, vai pro 100. Sendo maior que 100, vai pra direita. Cento e dois, mesma coisa, quando chegar no cento e um, vai pra direita. |
| 35:18 | E se continuarmos adicionando, olha como ficou nossa árvore. Parece um galho seco esperando pra cair, ficou basicamente como uma lista ligada, o pior |
| 35:26 | caso. Pior caso porque, sendo praticamente uma lista ligada, a complexidade pra procurar deixou |
| 35:32 | de ser O logarítmico e voltou a ser O linear. Ou seja, pra achar o último elemento, vai precisar comparar com todos os outros anteriores. |
| 35:40 | Uma árvore assim é desbalanceada. A gente precisa balancear e distribuir em outros galhos dessa árvore. |
| 35:47 | O que vimos até aqui é chamado de árvore de procura binária ou binary search trees, |
| 35:52 | cujo acrônimo é BST. O que costuma ensinar depois é como balancear essas BSTs e uma das formas de fazer isso |
| 36:00 | é o que se chama de RBTrees ou Red Black Trees. Antes que alguém saia correndo pros comentários, vou falar sobre AVLs já já, calma aí. |
| 36:08 | Uma das razões de eu querer pular esse assunto é porque realmente não estou com vontade de explicar linha a linha de como se faz inserções numa árvore Red Black. |
| 36:16 | É muito detalhezinho, vai dar um puta trampo pra editar e indo linha a linha num video vai ser maçante pra caramba. |
| 36:23 | Então, recomendo que vocês procurem o código em qualquer linguagem e testem linha a linha na máquina de vocês. |
| 36:29 | Em vez disso, vou fazer diferente aqui. O que muda numa árvore binária normal e numa Red Black? |
| 36:34 | Pra começar o Node da árvore vai conter um campo extra de um bit, que pode ser zero |
| 36:40 | ou um. Tanto faz se você chama zero de Red e um de Black ou vice versa, mas uma regra inviolável |
| 36:46 | é que o Node raiz é sempre preto. Por padrão, todo Node novo que formos criando vai começar sendo da cor vermelha. |
| 36:53 | Mas depois de inserido na árvore precisamos checar a cor do pai e dos filhos, porque a |
| 36:59 | regra é que um Node vermelho só pode ter pais e filhos pretos. Se depois de inserir não estiver assim, precisamos repintar os Nodes pra encaixar na regra. |
| 37:09 | Parece estranho mas você vai entender. Além disso, todo Node no fim da árvore, que você pode chamar de folhas ou leafs, |
| 37:15 | e terminaria com os ponteiros left e right sendo nulo, vão apontar pra um Node de serviço |
| 37:20 | que muitos nomeariam como Null Node ou TNil. Você pode chamar como quiser, mas é um Node que serve só pros ponteiros left e right |
| 37:29 | dos últimos Nodes não serem nulo e seguir a regra das cores. Como é tudo ponteiro, todo mundo no final vai só apontar pra esse Node mas no diagrama, |
| 37:38 | pra ficar mais bonito, vai parecer que cada um tá apontando pra um Node extra. Só lembrem que é tudo o mesmo Node TNil no final. |
| 37:45 | Uma das razões de ter esses Nodes no final é a regra que se contarmos todos os nodes entre a raíz e esse Nulo deve sempre ter o mesmo número de Node pretos. |
| 37:54 | Na prática isso só vai acontecer se a árvore tiver a altura balanceada. Pra entender isso de balanço considere nossa árvore binária de exemplo. |
| 38:02 | Conseguem ver como alguns galhos pendem mais pra um lado só? Os nodes 0 ou 15 pendem tudo pra direita. |
| 38:08 | Do node 84 pende tudo pra esquerda. Pra árvore ficar balanceada, precisamos fazer uma manutenção, movendo ponteiros de lugar |
| 38:15 | durante a inserção. Lembra aquela ideia de fazer swap de ponteiro que eu falei no episódio anterior? |
| 38:21 | É parecido aqui. Swaps ou trocas, são operações rápidas. Só muda uns dois ou três ponteiros de lugar, independente da quantidade total de Nodes, |
| 38:30 | então é uma operação de complexidade O 1, constante. Essa operação em árvores não é exatamente um swap, mas sim uma rotação. |
| 38:37 | E isso tudo dito, vamos dar um exemplo visual com a mesma lista de números do exemplo, mas agora inserindo com o algoritmo de inserção de uma árvore Red Black. |
| 38:47 | O 34 é a raíz, por isso ela é preta por padrão e seus ponteiros de left e right vão |
| 38:52 | apontar praquele Node Nulo TNil. O próximo número é 84, que por padrão entra vermelho e igual na árvore binária |
| 38:59 | vai pra direita porque é maior que 34. O próximo número 15 é menor que 34 então vai pra esquerda e também é vermelho por |
| 39:06 | padrão. Até aqui tudo bem, mas agora vamos inserir o número 0. Pelas mesmas regras, é menor que 34, menor que 15 então vai indo pra esquerda. |
| 39:14 | E inserimos o Node zero vermelho. Mas a regra é que um node vermelho não pode ter um pai vermelho como o Node 15 em cima |
| 39:21 | dele. Aqui começa o trabalho de zeladoria recolorindo o Node 15 e o Node 84 pra preto. |
| 39:27 | Agora a regra foi satisfeita. Sobre o caminho mais curto que falei, olha só. Quantos nodes pretos tem entre o 34 e o Nil embaixo do 0? |
| 39:36 | 34 é preto, 1. 15 é preto, 2. 0 é vermelho, continua 2, e nil é preto, 3. |
| 39:42 | Conseguem ver que qualquer outro caminho continua sendo 3 nodes pretos? Então as regras continuam satisfeitas. |
| 39:48 | Vamos continuar tentando inserir o número 2. E aqui a coisa ficou diferente. Olha o que aconteceu. |
| 39:54 | Tentamos inserir o número 2. Pela regra da árvore binária, é menor que 34 então vai pra esquerda. |
| 40:01 | É maior que zero então vai pra direita. Agora a árvore ficou desbalanceada. Por que? |
| 40:06 | Pra começar temos dois Node vermelhos um atrás do outro. E o irmão do Node 0, que é o ponteiro pra direita do Node 15 tá vazio. |
| 40:13 | Isso não pode acontecer, a ideia é que os nodes mais pra cima tenham left e right preenchidos, |
| 40:19 | evitando ponteiros nulos antes de chegar nas folhas. Precisamos fazer a tal rotação. |
| 40:24 | Primeiro rotacionamos pra esquerda, subimos o Node 2 na árvore e descemos o Node 0 pra |
| 40:30 | esquerda. Depois rotacionamos pra direita. Subimos o Node 2 pro mesmo andar da 15 e descemos o 15 pra direita. |
| 40:36 | Finalmente repintamos o Node 2 e o Node 15 e pronto, voltamos a cumprir todas as regras do jogo. |
| 40:42 | Nenhum Node vermelho tem pai ou filhos vermelhos e todos os caminhos do Node 34 até os nulos |
| 40:47 | continua tendo o mesmo número de Node pretos, no caso 3. Vamos continuar. |
| 40:53 | Os números noventa e nove, setenta e nove e oitenta e oito vão sendo inseridos do mesmo jeito que na árvore binária. |
| 40:58 | Mas agora vamos ver o 89. Mesma coisa, é maior que 34, vai pra direita. |
| 41:03 | É maior que 84 vai pra direita. É menor que 89, vai pra esquerda e, sendo maior que 88, vai pra sua direita. |
| 41:10 | Alerta! Temos dois nodes vermelhos um atrás do outro e o irmão do 88, ou seja o ponteiro pra direita |
| 41:16 | do 89 tá vazio. Hora de rotacionar. Começa rotacionando pra esquerda, daí o 89 passa a ser o pai de 88 e filho de 99. |
| 41:26 | Rotacionamos pra direita e 99 passa a ser filho de 89 e irmão do 88. |
| 41:32 | Vamos repintar o 88 e 89 e agora estamos cumprindo todas as regras de novo. Conseguem ver que se compararmos com a árvore binária de antes, agora parece visualmente |
| 41:41 | mais balanceada? Ou seja, todos os Nodes antes do andar mais de baixo tem ambos os ponteiros left e right |
| 41:48 | preenchidos, sem buracos sobrando. Vamos continuar os outros números até o fim da lista sem parar mais. |
| 41:53 | Continuamos com dezoito, trinta e um e trinta e nove. Daí escondemos os Nodes nulos no final pra ficar mais fácil de comparar. |
| 42:00 | Olhem como a árvore Red Black e a árvore binária ficaram com um layout bem diferente. |
| 42:06 | É assim que uma árvore binária balanceada se parece usando o método de Red Black. |
| 42:11 | Em termos de espaço extra sendo usado, é barato. Só um bit a mais pra cada Node, fora os ponteiros pro Node nulo no final de cada folha. |
| 42:19 | E mesmo esse espaço tem como economizar e vou falar disso já já. O tempo de inserção é definitivamente mais caro, mas ainda assim na ordem de grandeza |
| 42:28 | de O logaritmico. Ou seja, em comparação com a árvore de procura binária, tá um pouco mais lento, |
| 42:33 | mas a ordem de grandeza de complexidade não ficou muito mais caro. Procurar por itens nessa árvore é a mesma coisa da árvore de procura binária. |
| 42:41 | Uma busca binária. E pra apagar vai ser um pouco mais lento também. Assim como na inserção precisa manter a árvore balanceada, então toda vez precisa |
| 42:49 | checar se precisa rotacionar e recolorir. Como eu prometi, ainda temos árvores AVL pra comentar, que chama assim por causa dos |
| 42:57 | autores Adelson-Velsky e EM Landis, de 1962. |
| 43:02 | Em resumo, diferente do sistema de bit de cor do Red Black, cada Node num AVL tem um |
| 43:07 | número de balanço que pode ser menos um, zero ou um, pra árvore ser balanceada. |
| 43:13 | Se for mais que menos dois ou dois, a árvore tá desbalanceada e precisa rotacionar e recalcular |
| 43:19 | o balanço. Embora ambos AVL e Red Black tenham operações com complexidade na ordem de grandeza O logaritmico, |
| 43:27 | a procura numa árvore AVL é um pouco mais rápida, porque a Red Black ainda pode acabar |
| 43:32 | menos balanceada que a AVL. A AVL é mais agressiva em manter a árvore estritamente balanceada. |
| 43:39 | A inserção da AVL acaba sendo um pouco mais cara que a Red Black pra atingir isso. |
| 43:44 | É sempre um trade-off. Se você fizer mais inserções do que procuras, um Red Black é melhor. |
| 43:49 | Se o tempo de inserção não for importante, mas pra você o tempo de procura for muito |
| 43:54 | importante, então talvez AVLs sejam melhores. Mais do que isso, diferente dos Nodes de Red Black que são só 1 bit, os nodes de AVL |
| 44:02 | precisam de dois bits extras, então vai ocupar um pouco mais espaço na memória. Além disso, os Blacks tem outra vantagem dependendo da implementação. |
| 44:11 | Lembram quando falei sobre números inteiros com sinal e sem sinal? Se a gente souber que os números que vão ser armazenados na árvore sempre é positivo, |
| 44:19 | podemos usar o primeiro bit, que normalmente seria pro sinal pra ser a cor do Node, daí economizamos esse bit a mais na estrutura de Node. |
| 44:27 | E só pra piorar o caso do AVL, eu disse antes que as rotações de Red Black são simples, |
| 44:33 | complexidade O 1 constante. Mas as inserções de AVL podem ter mais rotações mais complicadas, daí o tempo varia mais. |
| 44:41 | Por tudo isso, na dúvida, a escolha padrão acaba sendo Red Black, e AVL em casos especiais |
| 44:47 | que você sabe que precisa das propriedades específicas dele. Vou deixar linkado na descrição abaixo um documento do site da kernel do Linux que explica |
| 44:56 | mais sobre como árvores Red Black são usados no Kernel. Parafraseando, os schedulers de I/O deadline e CFQ usam rbtrees pra rastrear requisições. |
| 45:07 | RBTree você lembra que são Red Black Trees. O pacote de CD e DVD faz o mesmo. O código de timer de alta resolução usa rbtrees. |
| 45:16 | O filesystem ext3 rastreia diretórios em uma rbtree. VMAs ou áreas de memória virtual usam rbtrees. |
| 45:24 | Seu Node.js e todo servidor com I/O assíncrono, por baixo usa o epoll do Linux. |
| 45:31 | Rastreamento de descritores de arquivos, chaves criptográficas e scheduler de pacotes de rede usam rbtrees. |
| 45:37 | Só pra comparar, lembram nosso código de exemplo de procura numa árvore binária? Vamos ver como essa documentação do site da kernel sugere fazer. |
| 45:45 | E olha só, é bem parecido né? As mesmas comparações pra esquerda, pra direita ou quando encontra o Node. |
| 45:51 | Meu exemplo foi rudimentar mas a estrutura básica é a mesma nos casos mais complexos. Não sei porque as linguagens mais populares interpretadas não tem árvores Red Black |
| 46:02 | por padrão. Eu diria que elas deveriam, porque assim como outras estruturas de dados, seriam melhor |
| 46:08 | implementadas em C ou C++ do que em alto nível como Javascript ou Python. |
| 46:14 | A classe `std::map` do C++ implementa árvores Red Black, assim como as classes TreeSet ou |
| 46:20 | TreeMap do Java. Se for uma linguagem compilada como Go ou Rust, você pode baixar do GitHub alguma uma |
| 46:27 | implementação que funciona em boa velocidade porque são compiladas. Mas tirando Java e C++ não sei de nenhuma outra que já vem embutida. |
| 46:34 | Se alguém souber mande nos comentários. Mas lembrem-se, árvores Red Black e AVL tem como objetivo chegar numa árvore de procura |
| 46:43 | binária, como no nosso exemplo anterior, mas balanceadas. Os algoritmos de inserção que usam o sistema de cores ou balanço e rotação servem pra |
| 46:52 | nos dar uma árvore balanceada que vai oferecer o menor tempo médio de procura binária. |
| 46:57 | Mas o que vimos até agora continua sendo uma árvore de procura binária, com Nodes que só tem um valor e dois ponteiros, um pra esquerda e outro pra direita. |
| 47:07 | Depois disso ainda existe a B-Tree que é uma estrutura de árvore que também é auto-balanceada, |
| 47:13 | ou seja, durante a inserção e remoção de Nodes ele faz a zeladoria de se rebalancear. |
| 47:18 | Mas em vez de Nodes que só tem dois filhos, num B-Tree os Nodes podem ser X filhos maiores |
| 47:24 | que 2. E mais coisas que não vou detalhar aqui. A definição vem do livro do Knuth e todo mundo usa a mesma, então pesquisem sobre |
| 47:32 | B-Trees como lição de casa. Visualmente é algo como nessa imagem do lado. |
| 47:37 | Ainda uma árvore, idealmente balanceada, mas com mais filhos por Nodes. E indo mais longe chegamos na B PLUS Trees, que você pode pensar como B-Trees mas onde |
| 47:48 | os Nodes não contém os valores em si. Em vez disso, aponta pra folhas, e esse nodes folha é que vão ter os valores que você |
| 47:56 | quer armazenar. Os Nodes pais vão ter só as chaves que identificam esses valores. |
| 48:01 | E é essa árvore que você vai ver em tudo que usa armazenamento orientado a blocos. |
| 48:07 | Eu tô pensando em fazer um episódio falando sobre blocos de armazenamento. É por isso que se você já brincou com AWS ou Google Cloud ou Azure, já deve ter visto |
| 48:15 | o termo “block storage” pra identificar HDs virtuais. Por agora só entenda que é isso que faz B+ Trees serem ideais pra coisas como filesystems |
| 48:25 | e bancos de dados. Tudo que você imaginar que armazena dados em disco provavelmente é uma B+ Tree ou derivação. |
| 48:32 | Exemplo. Os filesystem de Linux como ReiserFS, EXT4. O NTFS do Windows. |
| 48:37 | O APFS dos Macs. A maioria dos bancos de dados relacionais como DB2, SQL Server, Oracle, SQLite e por |
| 48:44 | aí vai. É tudo B+ Trees. Falando em bancos de dados. Pra entender como os dados são armazenados em disco, você precisa entender B+ Trees. |
| 48:53 | Se você já usou qualquer MySQL ou Postgres da vida vai lembrar que tem a boa prática |
| 48:59 | de sempre criar índices pra melhorar o tempo das suas pesquisas. E se você leu stackoverflow o suficiente também vai lembrar que povo fala pra não |
| 49:07 | sair criando índice pra tudo que é lado, como se não houvesse amanhã, senão vai acabar com a performance. E aí você fica sem saber o que fazer, cria ou não cria índices então? |
| 49:16 | Se você entendeu a ideia de pegar uma lista e colocar numa árvore de procura binária balanceada e a idéia de hashing da hashtable do episódio anterior, meio que já entendeu |
| 49:26 | uma parte da charada. O que são registros de um banco? Pense como se fosse uma struct de C, como as que usamos em todos os exemplos até agora. |
| 49:34 | Agora pense em gravar os bits de instâncias de structs no disco em vez da memória. |
| 49:39 | Uma tabela de banco de dados grande pode ter milhares ou milhões de registros. Seria bem lento sair procurando registro a registro como numa lista ligada. |
| 49:48 | Mesmo se for uma árvore. Diferente de ler da memória, pense que num disco mecânico você precisa sair caçando |
| 49:54 | bits em trilhas num disco. E ficar caçando endereços assim ia ser bem demorado. |
| 49:59 | Mas se não tem nenhum índice, é isso que vai acontecer mesmo. Pelo menos fazendo uma busca binária, você vai eliminando uma boa parte de registros |
| 50:06 | que não precisa vasculhar, mas em milhões de registros, mesmo com busca binária vai ser devagar. É o que muitos já devem ter visto nos seus bancos de dados favoritos quanto a pesquisa |
| 50:15 | cai num table scan. Quando você procura por chave primária ou por um campo indexado é bem mais rápido. |
| 50:22 | Pense num índice como uma segunda árvore, uma B-tree que é a tal árvore onde cada |
| 50:28 | Node pode ter vários filhos, e é auto-balanceada, ou seja, inserções e deleções re-balanceiam a árvore via operações como rotação. |
| 50:35 | Ela fica mais compacta porque é como se fosse uma cópia da sua tabela só que com os campos |
| 50:40 | indexados. Imagina num exemplo simples de árvore de procura binária, como esse na imagem aqui do lado. |
| 50:45 | Se eu fizer uma pesquisa pra achar todos os salários maiores que 10 mil, depois de eliminar a metade esquerda da árvore. |
| 50:52 | Agora temos os IDs ou endereços de onde esses registros estão na outra árvore no disco, e podemos buscar só elas. |
| 50:58 | E porque não é bom criar um montão de índices? Pense em inserir uma tabela como inserir numa árvore Red Black. |
| 51:06 | Pra manter a árvore balanceada, pra acelerar pesquisas, você precisa repintar e rotacionar toda hora. |
| 51:12 | Cada índice da sua tabela é como se fosse uma árvore dessas. Quanto mais índices tiver, mais caro fica inserir em várias delas, porque você precisa |
| 51:20 | inserir na tabela propriamente dita e depois atualizar cada um dos índices que você criou. Índices são bons pra acelerar as pesquisas, mas o custo é aumentar o preço de operações |
| 51:30 | de inserts, updates e deletes. De qualquer forma o objetivo de hoje não é detalhar como bancos de dados funcionam, |
| 51:37 | mesmo porque eu mesmo não sei tudo de cabeça Mas só de saber que seu sistema de arquivos, seu banco de dados usam uma implementação de B+ Trees e que os índices que tornam suas |
| 51:47 | pesquisas mais rápidas e suas inserções mais lentas, provavelmente é uma implementação de B-Trees, já vai ajudar você a procurar mais material pra estudar. |
| 51:56 | Uma última coisa é não confundir B-Trees com Binary Trees ou árvores binárias. |
| 52:02 | Esse B é de Balanced Trees, árvores balanceadas. E balancear árvores tem um custo, as tais operações de rotação por exemplo. |
| 52:10 | Mas no fim do dia, embora você pense visualmente numa árvore como uma hierarquia, na verdade |
| 52:16 | é uma lista ordenada, como um array ou uma lista ligada, mas estruturada de forma diferente. |
| 52:22 | De forma não linear. A complexidade de cada tipo de algoritmo em cada tipo de estrutura de dados tem complexidades |
| 52:29 | diferentes de processamento e uso de recursos. Alguns são rápidos mas consomem mais memória. |
| 52:35 | Outros são mais devagar na inserção mas mais rápidos na procura. Casos excepcionais podem fazer um algoritmo O logaritmico cair pra O linear ou até mesmo |
| 52:45 | O loglinear. Outras coisas que você deve prestar atenção. Se você partir do zero, de C, sozinho, é possível que compreenda um pouco sobre as |
| 52:54 | complexidades de manipular e procurar elementos num array. Com um pouco de prática, vai naturalmente chegar numa lista ligada. |
| 53:01 | Acho difícil chegar num Quicksort sozinho, mas se por acaso esbarrar em algum texto sobre particionamento e logaritmos, talvez chegue em algo parecido pra ordenação e busca binária. |
| 53:11 | John Von Neumann chegou no mergesort. Se você se esforçar bastante, talvez consiga evoluir da lista ligada e array pra hashtable |
| 53:20 | e árvore de procura binária desbalanceada que vimos hoje. Mas eu acho muito improvável você sozinho, sem a ajuda de nenhum livro, chegar na idéia |
| 53:29 | de árvore balanceada e mecanismos como Red Black, AVL ou mesmo B-Trees. |
| 53:35 | Pra isso você precisa de mais literatura. Especialmente porque conceitos como colorização e rotação não são intuitivos, mesmo se |
| 53:42 | você já tiver a idéia de swap de variáveis na cabeça. A ideia de colorização não é usada só em árvores Red Black. |
| 53:50 | Um dos mecanismos de Garbage Collectors se chama TriColor Marking, onde a fase de marcação |
| 53:56 | de objetos categoriza quem pode ou quem não pode ser descartado usando um sistema de três cores, preto, branco e cinza. |
| 54:03 | Se você entendeu a ideia do vermelho e preto, já tem uma noção de TriColor marking. Talvez eu fale sobre isso se for explicar como funcionam os garbage collectors em alto |
| 54:11 | nível , mas por hoje fica a dica. Eu espero que pelo menos tenha conseguido fazer vocês que são iniciantes enxergarem |
| 54:18 | um pouco mais de como as coisas funcionam por baixo do seu Javascript e Python. Mesmo que não usem diretamente no trabalho, reservem um tempinho pra estudar o básico |
| 54:27 | de C. Especialmente porque se vocês se empolgarem, C e C++ vão ser úteis caso um dia queiram |
| 54:33 | usar uma biblioteca em C dentro do Javascript. E sim, isso é possível e é como muitas bibliotecas são feitas de verdade. |
| 54:41 | O nosso linguição de bits sozinho é só isso, bits um atrás do outro. |
| 54:46 | Mas quando definimos estruturas de dados, começamos a dar forma a pedaços desses bits. |
| 54:51 | Delimitamos essas estruturas pelo tamanho de cada primitiva, como inteiros de 32 ou |
| 54:57 | 64 bits, e os endereços em que elas se localizam no linguição. Os bits sozinhos não significam nada. |
| 55:02 | Só quando nós programadores definimos o que cada pedaço é que ela começa a ter sentido. Por exemplo, uma sequência de inteiros um atrás do outro pode ser um array só de números |
| 55:12 | mesmo ou de letras, formando um String, quem decide qual é qual sou eu, programador. |
| 55:17 | Um pacote de bits que tem codificado um número que é outra posição no linguição, é |
| 55:23 | um Node. E esses Nodes podem ser organizados como listas ligadas, hashtables ou árvores. |
| 55:29 | Daí vem o problema de navegar por esses pacotinhos de bits. O jeito simples é sequencialmente como num array, mas logo a gente vê que isso é limitado. |
| 55:36 | Daí saímos pulando de endereço pra endereço de Nodes. Mas isso é lento e complexo. Aí temos que inventar formas de minimizar esse trabalho e chegamos em algoritmos como |
| 55:46 | de ordenação e procura. E à medida que evoluímos o conceito, uma árvore desbalanceada se torna balanceada. |
| 55:53 | Uma procura que levava tempo linear vira logaritmico. E uma estrutura que era simples, vai ficando mais sofisticada. |
| 55:59 | Saímos de heaps de memória até índices de bancos de dados com a mesma categoria de estruturas e algoritmos. |
| 56:05 | O importante é: mesmo se você treinasse por anos a fio, sem estudar a fundação, |
| 56:10 | nunca vai chegar no que vimos nesses últimos 3 episódios sozinho. E ia continuar fazendo errado sem saber porque. |
| 56:17 | “Meu programa tá lento, deve ser meu CPU que é velho”. E esquece que anos atrás se fazia programas que rodam mais rápido que o seu em CPU ainda |
| 56:26 | mais velho. Então o problema não é o hardware não ser o suficiente, mas sim você não saber usar o máximo que ele pode oferecer e se limitar a se conformar com “ah, pelo menos |
| 56:35 | roda”. Tudo que falei até aqui é o básico. Cada assunto que falei tem bem mais detalhes por trás. |
| 56:41 | E mesmo quando você tiver estudado tudo, ainda assim não vai fazer programas bons. Mas ao longo do seu treino e estudos, as peças vão começar a se encaixar mais rápido e |
| 56:50 | você vai começar a dar saltos maiores do que quem começou junto com você mas preferiu |
| 56:55 | pular essa teoria toda. Peguem o livro do Cormen, Tanenbaum e estudem. É chato pra caramba, mas quanto mais cedo fizer isso, melhor vai ser depois. |
| 57:04 | E com isso, finalmente cheguei no final deste assunto. Como eu disse no começo, assistam esta série múltiplas vezes. |
| 57:11 | Se você é iniciante, não vai entender vendo só uma vez e nem tem tudo aquia. Precisa pesquisar mais sobre os assuntos que falei, fazer você mesmo esses códigos como |
| 57:19 | exercício e só assim começar a apreciar como as coisas funcionam. Se acharem algum erro no video não deixem de mandar nos comentários abaixo, se curtiram |
| 57:28 | o video deixem um joinha, assinem o canal e cliquem no sininho pra não perder os próximos episódios. |
| 57:34 | Compartilhem o video com seus amigos pra ajudar o canal. A gente se vê, até mais. |
