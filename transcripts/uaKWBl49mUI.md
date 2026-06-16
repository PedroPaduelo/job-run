# Entendendo Supremacia Quântica

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=uaKWBl49mUI
- **Duração:** 1:05:27
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita O episódio dessa semana tá atrasado porque eu ia falar de um assunto mas nos quarenta e cinco do segundo tempo eu resolvi mudar o |
| 0:10 | assunto e reescrever o script do zero. Parte do assunto original era eu rapidamente falar |
| 0:16 | sobre alguns conceitos básicos de criptografia e segurança. Acho que todo mundo pelo menos ouviu |
| 0:22 | falar no termo Quantum Supremacy que o Google anunciou semana passada, alguns dizem até que o |
| 0:28 | preço do Bitcoin despencou 1000 dólares entre dia 23 de outubro por causa do medo de que o Bitcoin |
| 0:34 | estivesse com os dias contados. Claro, tudo exagero da mídia e o preço do Bitcoin já subiu de |
| 0:40 | novo mais 2000 dólares em cima da baixa. Na verdade, criptomoedas é o menor dos seus |
| 0:46 | problemas se real supremacia quântica representasse uma ameaça hoje. Basicamente |
| 0:52 | toda encriptação assimétrica, de tudo, teria chances reais de ser quebrada hoje. Então, |
| 0:58 | se o Google atingiu a tal Supremacia Quântica, tamos ferrados então? Todos os nudes do seu whatsapp encriptado podia vazar então? Calma, não suem ainda. |
| 1:08 | A mídia não especializada, como sempre, quer vender notícias, então eles precisam colocar títulos dramáticos, exagerados e às vezes simplesmente errados. Drama, notícia ruim e fake |
| 1:20 | news vende. Notícia boa não vende. Eu não sou especialista em computação quântica, pouca gente |
| 1:26 | é, mas já que eu já falei de criptomoedas no canal e justamente eu estava pensando em falar sobre o |
| 1:31 | tema de segurança, acho que aproveitar o embalo da supremacia quântica pra falar sobre a fundação da |
| 1:37 | computação pode ser uma boa. (...) |
| 1:44 | Primeiro, vamos definir Supremacia Quântica, que é um termo que foi cunhado pelo físico John |
| 1:52 | Preskill em 2012 onde um computador quântico deveria ser capaz de executar um cálculo, |
| 1:58 | qualquer cálculo na real, mais rápido do que conseguiríamos fazer no computador mais rápido que existe hoje. Agora se segurem que por 2 minutos eu vou falar um monte de jargões que |
| 2:09 | você certamente não vai ter a mínima idéia do que eu tô falando, mas vamos lá: |
| 2:14 | O Google construiu um computador quântico de cinquenta e quatro qubits. O teste que foi usado pra medição é um tipo de gerador de números "verdadeiramente" aleatórios. O paper do |
| 2:24 | Google diz que esse computador conseguiu executar esse cálculo com cinquenta e três dos cinquenta e |
| 2:30 | quatro qubits durante 3 minutos e 20 segundos e a parte da supremacia é que o Google afirmou |
| 2:35 | que levaria 100 mil computadores convencionais o equivalente a mil anos pra executar o mesmo |
| 2:41 | cálculo, bem longe do que seria prático e portanto eles atingiram a definição de supremacia do |
| 2:47 | Preskill. Mais especificamente o paper mostra que o experimento implementou um circuito com |
| 2:53 | um depth ou profundidade 20, com 430 gates de 2 qubits e 1.113 gates de 1 qubit. |
| 3:00 | Essa notícia causou furor na mídia e a IBM entrou no drama dizendo que o resultado é bom mas não é |
| 3:06 | tão dramático assim. E que se usar o Oak Ridge Summit, o super computador da IBM que ocupa o |
| 3:13 | espaço de 2 campos de basquete com seus 250 petabytes de espaço em disco, eles poderiam |
| 3:19 | escrever os 9 quadrilhões de amplitudes em disco, quebrando a premissa de escrever o vetor inteiro |
| 3:24 | em uma simulação de tipo Schroedinger pra uma simulação de Schroedinger-Feynman fazendo |
| 3:29 | trade-off de espaço por tempo. E fazendo isso, em vez dos mil anos que o Google disse que ia levar, |
| 3:35 | o IBM Summit poderia simular o mesmo cálculo em algo próximo de dois dias e meio, que é uma |
| 3:41 | ordem de grandeza muito menor. Hahahaha, se você entendeu 100% de tudo que |
| 3:46 | eu falei até agora, parabéns, que diabos você tá fazendo aqui neste canal? Agora, se como eu você |
| 3:52 | entendeu só uma parte ou praticamente nada, eu quero tentar explicar em mais detalhes. Preciso |
| 3:58 | começar pedindo desculpas porque o script de hoje não é 1% do que eu gostaria de escrever. Porém, |
| 4:03 | ele seria 100 vezes mais longo e levaria semanas pra eu escrever. Se vocês forem nas descrições |
| 4:09 | do vídeo abaixo e ver a quantidade de coisas que eu linkei pra vocês, não é metade do que |
| 4:14 | eu estudei pra escrever esta versão. Eu peguei emprestado muita coisa de muitos canais muito |
| 4:19 | bons que eu vou mostrando ao longo do video. Sério o assunto é denso demais pra só em uma |
| 4:25 | semana eu virar expert no assunto. E mesmo ainda nem comecei, é um assunto extremamente |
| 4:30 | fascinante que eu provavelmente vou continuar estudando daqui pra frente. Antes de entrar na parte sobre computação quântica, como eu sei que tem muitos iniciantes |
| 4:39 | assistindo, eu vou fazer uma tangente em computação clássica e apresentar algumas |
| 4:44 | coisas que todo programador já deveria saber, todo cientista ou engenheiro da computação já sabe, |
| 4:50 | mas se você é autodidata ou fez um curso que não é de análise de software ou sistemas de informação, |
| 4:55 | talvez nunca tenha visto ou só viu muito por cima. Não se preocupem não vou me |
| 5:01 | alongar demais nisso, só relembrar alguns conceitos muito básicos. Vamos lá, sendo hiper simplista. Toda a revolução da computação começa com um conceito muito |
| 5:11 | simples. Um bit. Pra qualquer pessoa normal que aprendeu na escola a calcular tudo com |
| 5:17 | sistema numérico de base 10 é bem estranho ter intuição sobre outras bases. Mas base 10 é o mais |
| 5:23 | intuitivo, temos 10 dedos nas mãos. Um computador não tem 10 dedos, ele tem só 1 dedo, que |
| 5:28 | antigamente nos primeiros computadores poderia ser uma válvula. Na verdade qualquer coisa que |
| 5:33 | consiga guardar dois estados serve como bit. Pode ser uma lâmpada, ligado representa 1, |
| 5:40 | desligado é 0. Pode ser um interruptor, ligado e desligado. Assumindo que conseguimos criar um sistema com vários desses dispositivos em série, podemos armazenar um dado em binário. |
| 5:50 | Por exemplo, se tivéssemos oito interruptores em série e quiséssemos armazenar o número 42 |
| 5:56 | em base 2 você vai dividindo o número 42 por 2 e vai acumulando o resto, e a sequência dos restos é o número em base 2 ou binário. Então no caso 42 é 1 0 1 0 1 0. Uma |
| 6:07 | sequência de 8 bits é o que chamamos de um byte. Em um byte podemos representar a combinação de |
| 6:12 | dois elevado a 8 números, que dá um máximo de até duzentos e cinquenta e seis números. Cada |
| 6:18 | um bit que adicionamos dobra a quantidade de números que podemos representar. Então |
| 6:23 | se fosse uma sequência de 9 bits seria 2 elevado a 9 que é 512. |
| 6:28 | Existe uma lenda indiana ou algo assim sobre o inventor do tabuleiro de xadrez. Ele mostrou |
| 6:34 | pro imperador da Índia que ficou tão impressionado que ofereceu uma recompensa. E o tal criador disse |
| 6:39 | que só queria um grão de arroz pra começar e pra cada casa do tabuleiro ele queria que a quantidade |
| 6:44 | fosse dobrando. Então dois grãos pra segunda casa, quatro grãos pra terceira casa, oito grãos pra |
| 6:51 | quarta casa e assim por diante, acumulando os das casas anteriores claro, até a casa |
| 6:56 | sessenta e quatro do tabuleiro. O imperador pensou como qualquer um assistindo aqui pensaria: ah, |
| 7:01 | isso é uma miséria de arroz e aceitou. Mas daí o tesoureiro voltou pro imperador alguns |
| 7:07 | dias depois falando: fodeu, você prometeu uma quantidade de arroz absurda. Seria mais de 18 |
| 7:14 | sextilhões de grãos. O Brasil inteiro produz mais de 230 toneladas de arroz. 100 grãos de |
| 7:20 | arroz pesa 2 gramas e meio. Isso dá 9 bilhões de grãos. Ou seja, se eu não errei a conta, |
| 7:25 | o Brasil sozinho levaria 2 bilhões de anos pra produzir os 18 sextilhões que o indiano ficou |
| 7:32 | devendo. Detalhe, a Terra tem 4 bilhões e meio de anos. Não é intuitivo se você não está acostumado, |
| 7:37 | mas esse exponencial rapidamente. Contei essa lenda pra vocês terem uma noção na cabeça sobre |
| 7:44 | grandes números, dimensões que você não tem muita referência no dia a dia. Mas se um dia te oferecerem um milhão de dólares ou, um centavo todo dia, sendo dobrado todo dia durante um mês, |
| 7:55 | escolha a segunda opção. Mas voltando, a representação binária tem algumas vantagens na hora de representar cálculos aritméticos. Relembrando aritmética clássica, |
| 8:05 | somar dois números inteiros é simples. Você coloca um em cima do outro e vai somando o |
| 8:11 | número de cima com o de baixo, se der maior que 10 você tem o "vai 1" pra cima do logo |
| 8:16 | à esquerda, você agora tem três números pra somar, e vai fazendo isso. Com binário |
| 8:21 | é exatamente a mesma coisa. Agora, num mundo onde você tem bits, como fazer uma máquina binária calcular, por exemplo, a soma de dois números binários? Em cima de cálculo |
| 8:31 | binário você tem toda uma gama de operações que podem ser feita com zeros e uns. Somar é |
| 8:37 | uma operação mais complexa que pode ser montada com outras operações mais simples. Se você é |
| 8:42 | programador já sabe algumas delas como o operador binário AND ou OR. AND é simples, se você tem um |
| 8:49 | e um vai dar um, se for um e zero vai dar um, se for zero e um vai dar um e se for zero e zero vai |
| 8:55 | dar zero, ou seja, AND é sempre um com exceção se for os dois zeros. O OR é diferente, é tudo |
| 9:02 | zero com exceção se os dois valores forem um. Mas existe uma operação mais básica, é o que chamamos de NAND ou NOT-AND onde zero e zero é um, zero e um e um e zero é um, e só se for um e um vai dar |
| 9:15 | zero, é o oposto do AND. O NAND é interessante porque você pode construir todas as outras funções booleanas como AND, NOT e OR só com o NAND se quiséssemos, |
| 9:26 | é uma propriedade tanto do NAND quanto do NOR que é o NOT-OR. Essas operações podem ser construídas |
| 9:33 | com transistores num circuito, o que chamamos de gates ou portas lógicas em eletrônica e lógica |
| 9:39 | booleana. Quando falamos de lógica, é aqui que começamos. Toda porta lógica tem uma ou duas |
| 9:46 | entradas e uma saída. Pense em portas como funções que tem argumentos e retorna resultados. Podemos |
| 9:52 | compor uma porta com outra gerando novas portas, assim como fazemos com funções. Uma porta NAND é |
| 9:59 | feito com uns 4 transistores, uma porta NOT com 2 transistores e assim por diante. Se você ligar a |
| 10:04 | saída de uma porta NAND com a entrada de uma porta NOT você tem a porta AND por exemplo. |
| 10:10 | Se você estudou lógica booleana conhece essas operações. Se não, estude, isso é super |
| 10:16 | fundamental. Vamos voltar pra soma de números. Todo mundo sabe somar números decimais. Em soma |
| 10:22 | binária, toda vez que tem um e um, daria dois, mas daí não cabe no bit, então "vai um" pra esquerda |
| 10:28 | e você coloca zero no bit atual. Quando é zero e um ou um e zero, daí a soma é um. E quando é zero |
| 10:35 | e zero é zero mesmo. Soma em números binários é a mesma coisa. Se ignorar a parte do vai um, |
| 10:41 | o que acabamos de descrever é a tabela verdade da porta XOR ou eXclusive OR então |
| 10:47 | podemos começar por essa porta. Pra fazer o que se chama de half-adder ou somador parcial, podemos adicionar uma porta AND pra receber os mesmos dois parâmetros e se for |
| 10:59 | um e um ele vai devolver um, e esse é o "vai um", daí repassa os dois valores pra porta XOR e essa é |
| 11:06 | a soma parcial. Agora podemos conectar duas somas parciais com mais algumas portas como XOR e pra |
| 11:13 | não ficar muito longa a explicação terminamos com um full adder ou somador completo, mas de |
| 11:18 | 1 bit. Pra somar números de 4 bits, conectamos 4 full adders e assim por diante. |
| 11:24 | Pense que um CPU acessível de hoje em dia tem bilhões de transistors. Assim você começa a |
| 11:30 | entender como de princípios muito simples é possível programar coisas mais complicadas. A |
| 11:36 | ciência da computação estuda e cria as fundações. Coisas simples como propriedades associativa e |
| 11:42 | comutativa dos valores numa porta lógica. No dia a dia a gente assume que se alguma função funciona |
| 11:49 | pra um ou dois valores, deve funcionar pra tudo. Mas em matemática a gente é mais formal que isso: |
| 11:54 | eu preciso conseguir testar pra todos os inteiros, por exemplo, de menos infinito até mais infinito e |
| 12:00 | garantir que funciona, ou quais exatamente são as exceções. Não basta dizer "é óbvio que vai |
| 12:06 | funcionar". Daí temos todas as premissas ou axiomas pra começar a provar tudo que tem em |
| 12:11 | cálculo, álgebra e assim por diante. Tudo que usamos em termos de cálculo de números |
| 12:17 | binários obedece regras, e podemos demonstrar que a matemática sempre consegue prever o |
| 12:22 | comportamento físico das portas lógicas montadas com transistors por exemplo. Daí temos certeza |
| 12:29 | que num circuito desenhado corretamente com 100 transistors, isso vai escalar pra mil transistors |
| 12:34 | ou bilhão. É difícil de explicar isso mas pense na matemática como uma linguagem, ou seja, |
| 12:40 | um vocabulário e uma gramática pra descrever com precisão o comportamento físico desses materiais. |
| 12:46 | Matemática eu gosto de pensar como a melhor linguagem pra descrever a natureza e o universo, |
| 12:51 | nossas línguas faladas simplesmente são primitivas demais e não tem palavras suficientes pra |
| 12:58 | descrever tudo, por isso é difícil de explicar muita coisa com precisão. Entenda matemática |
| 13:04 | e você começa a enxergar o comportamento preciso da natureza. Guarde esse conceito. |
| 13:10 | Do transistor vamos pra portas lógicas e daí pra circuitos mais complicados, |
| 13:15 | daí chegamos na arquitetura básica de um CPU e coisas como registradores, contador de programa, |
| 13:21 | e operações mais complexas que são as instruções de máquinas que programamos em Assembly. Com |
| 13:26 | esse Assembly podemos criar linguagens mais fáceis de programar como um C, por exemplo, e com C podemos criar todas as outras linguagens que conhecemos hoje. Cada nova camada vai |
| 13:38 | facilitando o uso do computador, com o trade-off de diminuir a eficiência do uso da máquina. |
| 13:44 | Mas como temos algumas dezenas pra bilhões de transistors, podemos nos dar ao luxo de tornar |
| 13:50 | as linguagens mais próximas do programador e mais longe da máquina. Pra gente que é de ciências da computação, tem toda uma área que nós só aceitamos que |
| 14:00 | existe e funciona, que é eletrônica. Por isso não vou nem raspar a ponta do pico desse |
| 14:05 | iceberg hoje. A gente comumente ouve falar que antigamente existia válvula e depois inventaram |
| 14:10 | os transistores e a revolução dos computadores nasceu. Existem décadas de história que envolve |
| 14:17 | a experimentação de novos materiais e técnicas de fabricação. A gente não usa materiais como silício |
| 14:23 | e cobre do nada, foram anos de experimentação. Transistores em conceito fazem a mesma coisa que |
| 14:30 | uma válvula ou uma lâmpada fazem. Só que no caso em escalas de milionésimos de milímetro. Aplicando |
| 14:37 | uma voltagem dá pra criar uma barreira magnética que impede a passagem de corrente, e isso chamamos |
| 14:42 | de zero, ou quando ele libera essa barreira e daí passa corrente e seria um. Os transistores mais |
| 14:48 | comuns hoje são os MOS ou MOSFET que é sigla pra metal-oxide-semiconductor field-effect transistor, |
| 14:57 | que é o que eu acabei de explicar. Os primeiros circuitos integrados tinham da ordem de meia dúzia de diodos, transistores, resistores e capacitores. De lá pra cá |
| 15:06 | os processos de fabricação e materiais mudaram bastante e o processo atual do que se chama de |
| 15:12 | VLSI ou very large-scale integration que é a idéia de criar chips ultra densos com milhões ou bilhões |
| 15:19 | de transistores é o CMOS ou complementary MOS. Um Intel Core i7 de oitava geração tem |
| 15:26 | da ordem de mais de 2 bilhões de transistores. Os processos de fabricação buscam soluções pra |
| 15:32 | diminuir cada vez mais o tamanho dos transistores ao mesmo tempo que tentam diminuir o desperdício |
| 15:37 | de energia. Novos processos de fabricação e materiais continuam sendo pesquisados, |
| 15:43 | então este formato de computador não vai deixar de existir tão cedo. Agora precisamos fazer um salto de conceitos. Primeiro vocês precisam entender teoria quântica |
| 15:52 | e mecânica quântica. Estamos ainda numa fase onde a palavra "quântico" entrou no zeitgeist, |
| 15:59 | todo mundo repete a palavra quântico e ninguém sabe o que diabos é um quantum. Se você quiser |
| 16:04 | fazer qualquer porcaria parecer da hora, só gruda a palavra quantum do lado e já era. Não |
| 16:10 | ajuda muito que Richard Feynman, um dos melhores físicos de todos os tempos, soltou a famosa frase |
| 16:16 | dizendo "se você acha que entende física quântica, você não entende física quântica". E isso levou à |
| 16:23 | interpretação errônea de que nem os cientistas entendem física quântica e isso deu passe livre |
| 16:29 | pra qualquer idiota achar que a interpretação de qualquer pessoa é tão boa quanto dos cientistas. E |
| 16:34 | por sua vez isso abriu caminho pras bobagens que o povo de New Age e os atuais coaches quânticos |
| 16:40 | repetem que nem gralhas. Eu já disse no outro vídeo, opinião é que nem bunda, todo mundo tem um. Opiniões não tem valor por si só, só o que pode ser cientificamente |
| 16:51 | demonstrado tem valor, todo o resto é capim. O meu capim vale tanto quanto o seu. E aqui vou afirmar |
| 16:57 | categoricamente: a teoria quântica e mecânica quântica definem muito bem tudo o que funciona |
| 17:03 | e o que não funciona. Hoje sabemos como fazer os cálculos quânticos com a linguagem da matemática, |
| 17:08 | e diversos experimentos comprovam os resultados. A matemática é a única linguagem que deve ser usada. |
| 17:15 | Qualquer outra coisa que qualquer um de New Age ou coach quântico inventar é 100% bullshit, bobagem, |
| 17:23 | e devem ser totalmente ignorados sem nenhuma chance de absolutamente nada. A próxima coisa que um coach desses vai dizer é que eu não consigo provar que ele tá errado |
| 17:32 | na interpretação dele. E essa é outra forma de bullshit. O ônus da prova é de quem faz a |
| 17:39 | afirmação, sempre. E prova não é uma historinha, ou uma "evidência" que mostra alguma correlação. |
| 17:45 | O famoso "ah, mas eu conheço casos" que é a mesma coisa que bullshit. Uma evidência não comprova uma |
| 17:53 | hipótese. Todo experimento científico precisa ser independentemente testado e funcionar todas |
| 18:00 | as vezes. Não basta funcionar uma vez e chamar de "prova". Funcionar uma vez é coincidência. |
| 18:06 | Teorias como de Darwin, Einstein, Schroedinger e outros são consideradas sólidas porque ao longo |
| 18:11 | das décadas, dezenas ou centenas de outros cientistas repetiram os experimentos de forma |
| 18:17 | independente e toda vez os resultados batem, sem ambiguidade. Toda vez que o experimento demonstra |
| 18:23 | uma falha, por menor que seja, a matemática inteira precisa ser revista. É que nem seu código, |
| 18:28 | não adianta parecer que funciona só uma vez, na sua máquina. Coloca em produção e deixa eu ver |
| 18:33 | se realmente funciona. Se quebrar, precisa arrumar o código. É o mesmo processo. Os comportamentos quânticos só funcionam no mundo das partículas subatômicas. Quando tamos |
| 18:44 | falando de coisas como eléctrons ou fótons. Elas não se manifestam nos materiais do nosso |
| 18:50 | mundo macroscópico. Nós não somos "feitos de energia", nós não temos "consciência coletiva", |
| 18:56 | não existe isso de energia do pensamento positivo ou qualquer outro bullshit assim. Não é assim que |
| 19:03 | a ciência funciona. No mundo do nosso tamanho, assuma física newtoniana. No mundo cosmológico, |
| 19:10 | assuma relatividade especial de Einstein. E no mundo subatômico, use mecânica quântica. É só |
| 19:16 | isso. Os estudos sobre física quântica ainda não estão completos, mas na prática isso não importa |
| 19:21 | muito porque os efeitos quânticos são reais e experimentalmente demonstráveis e mensuráveis. |
| 19:28 | Então existem dois campos de pesquisa: a procura do "porquê" os efeitos se manifestam da forma como |
| 19:33 | se manifestas e o "como" podemos usar esses efeitos na prática. Um é a física teórica e |
| 19:39 | a outra é a física aplicada. Pensa assim, faz séculos que os exploradores |
| 19:44 | olharam pros céus e entenderam que era possível usar as estrelas pra se localizar e navegar |
| 19:51 | na direção certa. Ninguém daquela época sabia exatamente o que eram aquelas coisas brilhantes no céu, mas você podia saber exatamente onde elas estariam a cada noite. Era possível calcular a |
| 20:02 | posição das estrelas mas não era possível ainda entender o que elas eram. Eram deuses? Eram |
| 20:08 | alienígenas? Eram velas incandescentes penduradas numa redoma? Levou séculos até descobrirmos que |
| 20:15 | são gigantescas bolas de gás incandescentes sofrendo reações de fusão nuclear formando |
| 20:21 | um corpo celestre com a força da gravidade. Física quântica é um pouco parecido, nós sabemos navegar, |
| 20:28 | calcular com precisão, mas só não descobrimos ainda o que realmente são. Qualquer tentativa |
| 20:33 | de interpretação vai cair na categoria de velas penduradas numa redoma. Essa é uma das partes que eu estou mais me coçando pra tentar explicar mas eu acho que |
| 20:42 | levaria semanas pra eu conseguir compilar todas as histórias do século XX inteiro em pesquisa de |
| 20:49 | teoria quântica e o video teria horas e horas. Então eu vou me conter por agora. Pra quem já |
| 20:54 | se interessou é a parte onde começaria falando como Max Planck encontrou a constante de Planck, |
| 21:00 | como Einstein usou isso pra descobrir o efeito fotoelétrico e postular a idéia de que a luz é |
| 21:06 | formada por pequenos pacotes de energia, a menor quantidade possível, que é o fóton ou quantum e, |
| 21:12 | dois Nobels depois, inicia a revolução dessa nova física chamada mecânica quântica. Daí vai |
| 21:18 | passar por todos os nomes que em algum momento você já ouviu falar como Werner Heisenberg, Louis de Broglie, Erwin Schrödinger, Max Born, John von Neumann, Paul Dirac, Enrico Fermi, |
| 21:29 | Wolfgang Pauli, e muitos outros, até chegar na controversa interpretação de Copenhagen |
| 21:34 | de Niels Bohr. Então só acreditem que existe mais de um século de pesquisas, diversas histórias dramáticas e brigas como os papers de Einstein Podolski e Rosen |
| 21:45 | e o gato de Schroedinger, o teorema de John Bell. E como o Einstein, que sem querer deu |
| 21:51 | início à essa nova física, até o fim tentou demonstrar como essa teoria era incompleta, e toda tentativa dele de quebrar a teoria no final acabou colaborando pra novas descobertas |
| 22:01 | que acabaram resolvendo os paradoxos que ele mesmo levantou. Como falei antes, neste momento |
| 22:06 | ainda não sabemos tudo, de fato, mas é como eu falei sobre as estrelas. Hoje temos o suficiente |
| 22:11 | pra aplicar o que se sabe em problemas reais. O porquê elas funcionam é o que ainda vai levar |
| 22:17 | décadas ou séculos pra sabermos. Foi assim com a física clássica. Qualquer interpretação como a |
| 22:24 | hipótese de existir um multiverso, é só isso, uma teoria por mais que nosso fandom pela Marvel fosse |
| 22:30 | adorar se isso fosse verdade. Neste ponto eu recomendo 4 canais que eu gosto |
| 22:35 | bastante e que já gravaram bastante material explicando a parte da física, a parte da matemática e as aplicações. Vou deixar os links nas descrições abaixo mas são |
| 22:45 | as playlists sobre mecânica quântica dos canais MinutePhysics, PBS Space Time e Infinite Space, |
| 22:52 | o excelente 3Blue1Brown e o reconhecido Veritasium. Tem outros ainda mas pra começar, |
| 22:58 | esses são suficientes, são várias horas de diversão. Mas não dá pra resumir tudo isso em 15 minutos, infelizmente. Caindo em computação quântica, vamos começar |
| 23:07 | do começo, como você constrói um qubit? Pegando emprestado a explicação do canal Veritasium, por |
| 23:14 | exemplo, com átomos de fósforo em um cristal de silício bem do lado de um transistor. Esses átomos |
| 23:21 | tem um spin, como você já deve ter aprendido no colegial em física eletromagnética. Spin pra cima |
| 23:27 | e spin pra baixo como chamamos. Pra resetar a orientação do spin desses átomos pro estado de |
| 23:33 | menor energia, spin pra baixo, você precisa de um campo elétrico de um supercondutor. Pra mudar o |
| 23:38 | spin você aplica energia, e não precisa de muito, só o calor ambiente já seria suficiente pra fazer |
| 23:45 | esses átomos ficarem mudando de spin que nem doido. Por isso você coloca esse aparato num |
| 23:50 | ambiente com hélio líquido, completamente isolado, pra chegar em temperaturas de frações de 1 Kelvin, |
| 23:57 | quase perto do zero absoluto. E agora, pra mudar o spin de forma controlada de um átomo |
| 24:02 | de cada vez, você envia microondas numa frequência específica. Agora, existe uma interação entre um portal de elétrons do transistor de silício que reage com |
| 24:13 | o átomo de fósforo e aplicando frequências específicas é possível medir esse átomo. |
| 24:18 | Mais do que isso, podemos mudar e medir o spin do núcleo de um átomo de fósforo. O spin desse |
| 24:25 | núcleo pode ser medido e visto num osciloscópio, indiretamente através da interação com um elétron. |
| 24:31 | O núcleo é mais estável e mais isolado que um elétron e consegue conservar esse spin |
| 24:37 | por um período de tempo considerável e com isso conseguimos armazenar um valor 1 ou 0 nele, como |
| 24:43 | num transistor tradicional. Esse núcleo é o qubit. Veja o vídeo do Veritasium pra mais detalhes mas |
| 24:50 | o importante é dizer que já conseguimos manipular um núcleo do átomo de fósforo individualmente pra encodar bits. Agora você vai precisar acreditar no que eu falei |
| 24:59 | antes: no um século de evolução da física quântica e os efeitos que já sabemos que |
| 25:05 | funciona e são controláveis. Esse qubit obedece as leis da mecância quântica e conseguimos realizar |
| 25:11 | algumas operações nele. Uma delas é mudar o spin pra cima ou pra baixo de forma controlada |
| 25:17 | e que podemos ler depois. Então sabemos como encodar valores binários numa cadeia de qubits. |
| 25:23 | Podemos fazer mais. Podemos colocar o qubit num estado de superposição. Esse é o estado |
| 25:30 | que todo mundo coça a cabeça pra entender. É o tal estado do gato morto vivo de Schroedinger. |
| 25:35 | O gato tá vivo ou morto dentro da caixa? Isso é um exercício teórico e tem mais a ver com a |
| 25:40 | substância radioativa dentro da caixa que seria o gatilho pra matar o gato do que o gato em si. |
| 25:46 | Mas falando puramente de forma simbólica, a resposta é que ele não tá nem vivo nem morto, |
| 25:52 | o que significaria mais exatamente um estado 100% vivo ou 100% morto. Em matemática não existe |
| 25:58 | "mais ou menos", é sempre um estado definido nem que seja probabilístico. Então o gato, |
| 26:03 | ou mais precisamente o átomo da substância radioativa, está num estado probabilístico |
| 26:08 | 50% vivo e 50% morto. "Mas isso quer dizer o que?" e a resposta é: |
| 26:14 | não importa, esse é o estado seja lá o que na realidade isso signifique. Não existe um |
| 26:20 | estado desse na nossa realidade macroscópica por isso nos falta vocabulário pra descrever, mas |
| 26:26 | matematicamente é um estado bem definido. Era o grande problema do Einstein e Schroedinger, de que |
| 26:32 | é difícil conciliar a realidade macroscópia com a matemática quântica, por mais que na matemática |
| 26:38 | faça sentido. É como se fosse um terceiro estado, que seria uma range de probabilidades entre os |
| 26:45 | dois estados. Só faz sentido dizer se é vivo ou morto depois de medirmos e ver se depois |
| 26:51 | de abrir a caixa o gato de fato está vivo ou de fato está morto. Mas não é que o estado já existia e a gente só não estava conseguindo ver. Esse estado não tem localidade e nem causalidade, |
| 27:01 | é um estado não determinístico real. Verdadeira aleatoriedade. Antes de abrir a caixa ele é |
| 27:08 | indefinido. Por isso é melhor evitar metáforas com o mundo real o quanto possível. Sem a matemática |
| 27:14 | pra descrever, vira essa história mal contada de gato morto ou vivo indefinido. Esse conceito é importante porque toda vez que ouvir falar de superposição vai ouvir esse |
| 27:24 | palavreado de "medir" e "colapsar". O que não é intuitivo pra mim e acho que pra muita gente é, |
| 27:31 | Beleza! Digamos que eu engula esse estado completamente aleatório que pode ser 50% 1 ou |
| 27:37 | 50% zero. Como eu faço cálculos com isso? Existem outros mecanismos que você precisa entender. O |
| 27:43 | próximo é o também controverso entanglement. Você pode colocar dois qubits em superposição |
| 27:50 | e depois em entanglement. Daí quando você medir um deles - que vai causar o colapso do seu estado |
| 27:57 | pra 1 ou 0 -, quando medir o outro qubit ele vai estar no mesmo estado. Se já era difícil colocar na cabeça que uma partícula pode ter um estado indefinido antes |
| 28:07 | de medir, entanglement é acreditar que duas partículas podem estar correlacionadas e se |
| 28:13 | manter assim mesmo se separadas. A propriedade do entanglement é que uma vez correlacionadas |
| 28:19 | eu posso separar as duas e "transportar" pra muito longe. No exato instante que eu medir uma |
| 28:24 | a outra automaticamente vai tá no mesmo estado quando for medido. Ou seja, se antes de medir |
| 28:30 | elas tavam numa superposição de 50% de chance de ser um ou 50% de chance de ser zero, quando eu medir a primeira e der um, a outra partícula só tem 100% de chance de ser um. |
| 28:40 | Mas cuidado, isso não é uma comunicação, ou seja, não existe a possibilidade da primeira partícula, |
| 28:48 | depois que medimos e colapsamos seu estado tenha enviado essa informação pra segunda |
| 28:53 | partícula. Ou seja, não existe possibilidade de um Skype quântico. Essa foi uma controvérsia |
| 28:59 | que Einstein odiava porque se fosse esse o caso a informação teria que viajar mais rápido que |
| 29:05 | a velocidade da luz. E nada viaja acima da velocidade da luz, é impossível. Mas então, |
| 29:11 | pelo senso comum, as partículas já teriam que ter "combinado" antes de serem separadas qual seria |
| 29:17 | o estado final no colapso. Mas é o que o teorema de John Bell já provou que não é o caso, ou seja, |
| 29:22 | existe um experimento que prova que não haveria como as partículas terem qualquer informação do |
| 29:28 | estado final antes de medirmos. Novamente, essa é uma das partes onde não vamos |
| 29:33 | chegar em lugar nenhum se ficarmos especulando se a estrela é uma vela pendurada numa redoma |
| 29:38 | no céu ou o quê. Ainda não temos informação suficiente pra afirmar nada. Só podemos afirmar |
| 29:45 | que é exatamente isso que acontece. Já foi testado exaustivamente, de forma independente. |
| 29:51 | Por exemplo, em 2017 um experimento chinês foi capaz de colocar dois fótons em superposição |
| 29:56 | e entanglement e enviar um deles via um laser pra um satélite a mais de 1200 km de distância |
| 30:03 | e realizar a medição e o colapso. Vários desses experimentos já foram feitos. Vamos só aceitar que |
| 30:08 | superposição e entanglement existem. Nos vídeos dos canais que eu recomendei eles explicam em |
| 30:14 | mais detalhes sobre isso também. Aliás, só pra finalizar os efeitos não intuitivos. |
| 30:19 | Uma vez tendo essas propriedades você acaba tendo teletransporte também. - O que, ah, vai |
| 30:25 | se fuder, tá de brincadeira, isso é Star Trek agora puta que pariu - ufff Pois é! É possível |
| 30:33 | um efeito de cut and paste ou "recortar e colar". É possível teletransportar o valor de um qubit pra |
| 30:39 | outro qubit de forma destrutiva, ou seja não é um clone, é uma teletransporte. Por exemplo, |
| 30:45 | Alice e Bob podem ter dois qubits pré-entangled. Daí Alice prepara um terceiro qubit e faz entanglement com o dela. Ela prepara um payload qualquer e ao medir os dois é |
| 30:56 | feito o teletransporte desse payload - cujo valor é destruído nesse instante - pro do Bob através do |
| 31:02 | pré-entanglement que eu falei que já tinha entre os qubits da Alice e do Bob, que vai funcionar |
| 31:08 | como um cabo de rede entre os dois. Pronto, fodeu, ficou bem abstrato isso. Vamos ver |
| 31:13 | na prática como isso poderia funcionar. Pois bem, esse é o diagrama do circuito de três qubits em |
| 31:20 | entanglement. Aqui temos os qubits de Alice e Bob sendo colocados em entanglement. Agora temos a |
| 31:26 | preparação do payload no terceiro qubit. Agora a Alice faz o entanglement do qubit do payload |
| 31:32 | com o qubit dela. E finalmente teletransportamos o payload pro Bob. É literalmente como se fosse |
| 31:38 | um recortar e colar, sem um intermediário fazendo isso. E no passo final o Bob pode verificar que |
| 31:44 | de fato o payload chegou nele. Isso que você tá vendo é como representamos um circuito quântico. Cada linha representa um qubit e temos 5 deles. Cada um desses |
| 31:55 | quadradinhos é uma quantum gate ou o equivalente a uma porta lógica de um computador clássico que |
| 32:01 | eu expliquei lá no começo. Temos portas como X ou Y ou Z que são portas de Pauli. Basicamente |
| 32:07 | o X faz um bitflip como uma porta lógica NOT. O H é um Hadamard que se eu entendi direito coloca |
| 32:13 | o qubit em superposição. O mais comprido que puxa uma linha entre dois qubits com um sinal de mais |
| 32:19 | no meio é uma porta chamada CNOT ou controlled NOT, e na prática ele coloca os dois qubits em |
| 32:26 | entanglement. No final onde temos um ícone que parece um medidor, e é justamente isso, a operação |
| 32:31 | que faz a medição do qubit não é uma porta lógica porque um requerimento pra ser uma porta lógica |
| 32:38 | é que toda operação quântica seja reversível. Esse princípio é matematicamente importante, |
| 32:43 | mas pra gente basta entender agora que dizer costuma ser o fim do circuito. Esse diagrama é uma representação visual de um código, que é escrito no formato OpenQASM. E o que |
| 32:55 | diabos é isso que eu tô mostrando? Esse é o site IBM Q Experience. Eles tem uma plataforma online |
| 33:02 | com documentação explicando alguns conceitos e eles tem online tanto um editor pra você montar |
| 33:08 | seus próprios circuitos quânticos visualmente ou via código, e rodar tanto num simulador quando |
| 33:15 | em computadores quânticos de verdade! Claro que versões fraquinhas de no máximo 5 qubits e alguns |
| 33:22 | com taxa de erro elevada. Mas dá pra brincar um pouco, é como se você estivesse montando um circuito eletrônico num simulador com o CircuitLab onde você pode montar circuitos |
| 33:32 | tradicionais com portas lógicas, como a máquina de somar que mostrei no começo. Se você tem interesse em molhar os dedos no básico, pode baixar o Qiskit que é um projeto open |
| 33:44 | source feito em Python, onde você pode escrever programinhas em OpenQASM como mostrei antes e |
| 33:50 | rodar localmente na sua máquina ou conectando no simulador da IBM. Uma coisa que talvez você |
| 33:55 | não sabia é que é possível simular qubits num computador tradicional. Obviamente você não |
| 34:01 | consegue simular quantos qubits quiser, porque vai ficando exponencialmente mais pesado. Mas |
| 34:07 | alguns poucos qubits dá. E pra aprender, com cinco qubits já dá pra testar muita coisa. Por exemplo, |
| 34:13 | em computação clássica você viu que com poucos transistores você consegue montar um somador |
| 34:19 | completo de 1 bit com portas lógicas tradicionais. Daí vai adicionando vários pra conseguir somar |
| 34:24 | números de 8 bits e assim por diante. Mas você sabe que se funciona com 2 ou 3 bits, |
| 34:30 | vai funcionar pra 8 ou 16 bits. Você consegue escrever manualmente, no papel, as tabelas |
| 34:35 | verdade pra verificar. Em computação quântica, é mais complicado. A representação na mão é feita com notação de álgebra linear. No diagrama você vê os qubits |
| 34:47 | representado por essa notação estranha de um pipe, um número e um bracket de maior. |
| 34:53 | Essa é a notação de Dirac pra vetores. E toda a álgebra linear, multiplicação de matrizes e tudo |
| 34:59 | mais funciona. Essa portas quânticas que falei, é basicamente representado com uma multiplicação |
| 35:04 | de matrizes com o vetor que são os qubits. Do ponto de vista da ciência da computação |
| 35:09 | você pode visualizar as máquinas de estado dos qubits como valores num círculo - se estiver |
| 35:15 | representando só com inteiros - onde cada valor é uma probabilidade da superposição. Na realidade |
| 35:21 | a matemática é usando números complexos e os valores caem num espaço de Hilbert. Lembra que |
| 35:27 | eu falei que em superposição você tem valores num espaço probabilístico? Pra entender a quantidade, |
| 35:34 | pense em pontos na superfície de uma esfera por exemplo. O Hello World de programar um computador quântico é justamente colocar uma porta |
| 35:44 | Hadamard pra colocar um qubit em superposição e uma porta CNOT pra fazer o entanglement com outro |
| 35:50 | qubit e depois medir pra colapsar o estado. Como são dois qubits temos quatro possíveis estados |
| 35:57 | zero zero, zero um, um zero, e um um. Igual nas tabelas verdade das portas lógicas que expliquei |
| 36:03 | no começo. Um programa quântico a gente não roda só uma vez, precisa rodar várias vezes e fazer um |
| 36:10 | histograma dos resultados de cada estado. Se fosse um sistema completamente aleatório, você esperaria |
| 36:15 | que saísse qualquer um dos quatro estados um quarto ou 25% das vezes. Mas como estamos com um |
| 36:22 | sistema em entanglement, se rodarmos várias vezes, no exemplo, os estados zero zero e |
| 36:27 | um um saem mais que os outros. Justamente porque se eu medir o primeiro e der zero, o outro em entanglement tem que dar zero também, mesma coisa com um. Os resultados zero um e |
| 36:38 | um zero que aparece é devido a erro no sistema, se fosse perfeito deveriam aparecer zero vezes. Vou |
| 36:45 | falar de erro depois, guardem isso. Eu vou dizer que me falta intuição matemática - |
| 36:50 | falta de prática mesmo - pra entender direito o que tudo isso significa. Intuitivamente eu |
| 36:56 | consigo ter uma noção. Na prática você tá lidando com variáveis aleatórias, porém via essas portas |
| 37:02 | lógicas e coisas como entanglement, você consegue influenciar coisas como a amplitude e a fase, na |
| 37:09 | prática, você influencia as probabilidades dentro da superposição. Daí você roda esse programa |
| 37:15 | centenas de vezes e plota num histograma, onde o sinal for mais forte é onde a barra do histograma |
| 37:21 | vai ser maior, ou seja, é o resultado que aparece mais vezes. Numa metáfora de pobre, como se fosse |
| 37:27 | uma moeda onde você pudesse influenciar o resultado durante o giro dela, e aí começa |
| 37:32 | a ser mais cara que coroa por exemplo. Então um insight que eu não tinha é que um programa |
| 37:37 | quântico não dá uma resposta absoluta como estamos acostumados em programação com portas lógicas, |
| 37:44 | ou qualquer coisa em cima disso, como linguagens de programação tradicional. |
| 37:49 | O cálculo com qubits trás um resultado dentro de um espaço de probabilidades. Nós manipulamos |
| 37:55 | a aleatoriedade do princípio da incerteza de Heisenberg pra conseguir manipular um |
| 38:01 | espaço de possíveis probabilidades. Cada qubit pode estar num range de resultados diferentes |
| 38:07 | em superposição, e com entanglement podemos conectar um qubit com vários outros qubits, |
| 38:14 | formando um campo de influência. Pense como várias ondas como na física acústica, |
| 38:20 | uma onda causando interferência na outra. Dois picos em duas ondas, uma amplifica a outra, |
| 38:26 | duas ondas inversas, uma cancela a outra. E se configurar essas portas quânticas corretamente |
| 38:32 | você começa a ter a possibilidade de fazer cálculos com vários estados em superposição, |
| 38:38 | ao mesmo tempo, o que leva à conclusão que computadores quânticos poderiam resolver problemas em uma ordem de grandeza menos tempo; problemas que hoje, em computadores tradicionais, |
| 38:48 | levaria tempo exponencial. Pra entender um pouco mais da matemática dessa representação eu recomendo começar com estes vídeos da série da PBS Infinite Space |
| 38:59 | falando sobre a matemática por trás dos qubits. E depois ver essa apresentação da Microsoft de |
| 39:05 | computação quântica pra cientistas da computação, onde é explicado passo a passo como fazer cálculos |
| 39:11 | com os vetores e matrizes na mão com algumas portas quânticas mais simples e como, com isso, |
| 39:17 | você consegue implementar um algoritmo muito simples, como o Deutsch Oracle. Falando em algoritmos, os primeiros exercícios como o Deutsch Oracle, Deustch Josza, |
| 39:27 | Simon começaram a aparecer no começo dos anos 90. Lembram que falamos bastante sobre a natureza |
| 39:34 | da função de onda e como ela descreve o possível espaço de resultados? Se falamos de ondas você que |
| 39:40 | é engenheiro vai se lembrar de Fourier. Fourier pode ser usado pra centenas de aplicações que vai |
| 39:46 | de processamento de sinais até bioengenharia. Recomendo assistir o vídeo do 3Blue1Brown que |
| 39:52 | explica visualmente como a transformada de Fourier funciona pra separação de ondas e coisas como |
| 39:58 | limpeza de barulhos, especialmente de barulhos com períodos constantes, como o barulho do motor |
| 40:04 | de avião, que é a base de como cancelamento de barulho ou noise cancelling avançado funciona em |
| 40:10 | fones de ouvido bons. E existe uma implementação chamada tranformada quântica de Fourier. Ela não é |
| 40:17 | exatamente o equivalente do Fourier tradicional, mas serve para vários casos. Em particular ela permite o algoritmo de Shor, inspirado no algoritmo anterior de Simon. Esse |
| 40:29 | é o temido algoritmo que chamou a atenção do mundo pra computação quântica e causou furor |
| 40:35 | quando foi publicado pela primeira vez nos anos 90. Se não me engano o primeiro algoritmo com |
| 40:40 | potencial uso real que poderia mudar a forma como usamos computadores. O algoritmo de Shor consegue, |
| 40:47 | em alguns casos, cerca de trinta e sete porcento das vezes, conseguir fatorar números inteiros nos seus fatores primos. Isso é extremamente inviável de se fazer num computador |
| 40:58 | tradicional. Pegue dois números primos gigantes, digamos de dois mil e quarenta e oito bits de comprimento. Multiplique os dois. Todos os computadores do mundo podem gastar bilhões |
| 41:08 | de anos pra conseguir encontrar os dois fatores primos originais. O algoritmo não é perfeito. Você não consegue passar um número gigante e ele automaticamente |
| 41:17 | cospe os fatores pra você. Na realidade você começa com um chute e com as propriedades de |
| 41:24 | aritmética modular e o teorema de Fermat você consegue ir chutando números melhores que, |
| 41:29 | em quase 40% dos casos pode chegar na fatoração. Eu fiquei pensando se descrevia o algoritmo aqui |
| 41:36 | ou não mas acho que vai muito além do que precisa pra este episódio. O canal MinutePhysics junto |
| 41:42 | com o 3Blue1Brown fizeram alguns vídeos muito bons que explicam passo a passo como |
| 41:47 | é o processo pra encontrar esses fatores. E o canal PBS Infinite Space tem outro um pouco mais |
| 41:54 | pesado nos conceitos que vale a pena assistir depois pra entender os passos. Sem entender aritmética modular não dá pra entender como funciona isso de quebrar a |
| 42:03 | fatoração. Mas entenda que o processo que existe hoje é basicamente brute force, |
| 42:09 | testar um número atrás do outro. Com as características de superposição, entanglement, |
| 42:15 | e aplicando a transformada quântica de Fourier, é possível fazer o cálculo que levaria centenas |
| 42:21 | de anos em alguns minutos. Hoje em dia o algoritmo de Shor já foi executado em computadores quânticos |
| 42:28 | de verdade e conseguiu fatorar os números 15 e 27 que é o atual recorde. Tá beeeem longe |
| 42:35 | ainda de um número de 2048 bits. A razão toda de porque todo mundo ficou histérico com a afirmação |
| 42:41 | do Google ter alcançado Supremacia Quântica é a possibilidade deles conseguirem usar o algoritmo |
| 42:48 | de Shor na prática com mais qubits. Recapitulando o que eu disse no começo."O Google |
| 42:54 | construiu um computador quântico de cinquenta e quatro qubits." - E agora você sabe o que é |
| 42:59 | um qubit. - "O teste que foi usado pra medição é um tipo de gerador de números "verdadeiramente" |
| 43:05 | aleatórios." - e agora você tem uma intuição do verdadeiramente aleatório por causa da |
| 43:11 | superposição. Diferente de pseudo-aleatório que é o que usamos em computadores tradicionais onde |
| 43:17 | você produz números que estatisticamente parecem aleatórios mas na realidade não são. "O paper do |
| 43:24 | Google diz que esse computador conseguiu executar esse cálculo com cinquenta e três dos cinquenta |
| 43:30 | e quatro qubits" - guarde esta informação - "durante 3 minutos e 20 segundos e a parte |
| 43:36 | da supremacia é que o Google afirmou que levaria 100 mil computadores convencionais o equivalente a |
| 43:42 | mil anos pra executar o mesmo cálculo, bem longe do que seria prático e portanto eles atingiram a |
| 43:48 | definição de supremacia do Preskill." - só enfatizando, veja que foi um cálculo de muitos |
| 43:54 | minutos e não instantâneo. Muita gente pensa que computador quântico é instantâneo, mas não é. - "Mais especificamente o paper mostra que o experimento implementou um circuito com um depth |
| 44:05 | ou profundidade 20, com 430 gates de 2 qubits e 1.113 gates de 1 qubit." - Essa profundidade é a |
| 44:13 | quantidade de portas quânticas na maior sequência, que nem você viu no diagrama que mostrei antes pra teleportação ou hello world. Quatrocentos e trinta gates de 2 qubits, seria como uma porta |
| 44:23 | CNOT pra entanglement por exemplo e mil cento e treze portas de 1 qubit seriam como o X de |
| 44:29 | Pauli ou Hadamard ou Phase Shift e outras portas lógicas, todas de um qubit. |
| 44:34 | No segundo parágrafo da citação eu falei o seguinte: "Essa notícia causou furor na mídia |
| 44:41 | e a IBM entrou no drama dizendo que o resultado é bom mas não é tão dramático assim. E que se usar o |
| 44:48 | Oak Ridge Summit, o super computador da IBM que ocupa o espaço de 2 campos de basquete com seus |
| 44:54 | 250 petabytes de espaço em disco, eles poderiam escrever os 9 quadrilhões de amplitudes em disco, |
| 45:00 | quebrando a premissa de escrever o vetor inteiro em uma simulação de tipo Schroedinger |
| 45:05 | pra uma simulação de Schroedinger-Feynman fazendo trade-off de espaço por tempo. E fazendo isso, em |
| 45:11 | vez dos mil anos que o Google disse que ia levar, o IBM Summit poderia simular o mesmo cálculo |
| 45:17 | em algo próximo de dois dias e meio, que é uma ordem de grandeza muito menor." Em resumo, eu falei que eles usaram cinquenta e três qubits nesse cálculo que é um espaço |
| 45:27 | de 2 elevado a cinquenta e três e isso dá 9 quadrilhões de valores possíveis. Transformando |
| 45:34 | isso em petabytes seria uns 8 petabytes, ou seja, poderíamos literalmente escrever um a um todos os |
| 45:41 | valores possíveis em disco e colocar no storage de duzentos e cinquenta petabytes. Daí em vez de |
| 45:46 | computar os valores podemos buscar o valor no disco. Eu estou simplificando bastante, claro. |
| 45:52 | Isso é bem menos trivial do que parece só dizendo. Por exemplo, parece que o IBM Summit consegue |
| 45:57 | escrever em disco na velocidade de 2.2 terabits por segundo de dados sequenciais, algo em torno de |
| 46:04 | 275 gigabytes por segundo. Pra escrever 8 petabytes, sem processar nada, |
| 46:10 | só escrever sem parar, ia levar nada menos que 9 horas só pra escrever. Por isso eu imagino |
| 46:17 | que o argumento da IBM seria que levaria 2 dias e meio em vez dos mil anos que o Google falou, |
| 46:22 | é o tempo de computar e gravar todos os valores em disco, o jeito mais brute force possível. Mas |
| 46:28 | isso é o tempo mais otimista possível usando o valor que é o pico de velocidade e você sabe |
| 46:34 | que nenhum drive consegue sustentar o pico o tempo inteiro. Digamos que ele decaia pra na média metade da velocidade. Já aumenta o tempo pra quase um dia inteiro só escrevendo |
| 46:44 | os dados todos! Em resumo o argumento da IBM tem alguma lógica mas até ser experimentado é só uma |
| 46:51 | teoria. E considere que são 2.5 dias usando o supercomputador mais rápido do mundo em máxima |
| 46:58 | capacidade só pra cuspir um número aleatório. Pense em quanto isso custa. |
| 47:03 | Se você seguiu com atenção até agora você tem uma intuição de como começa o que o |
| 47:09 | Google fez. Mas temos o problema do erro que eu falei pra você guardar na cabeça, lembra? Cinquenta e quatro qubits parece bastante coisa, porém as chaves que usando |
| 47:19 | hoje pra criptografia assimétrica com algoritmos como RSA tem tamanho de 2048 bits. Se eu não |
| 47:26 | entendi errado, seria necessário no mínimo essa quantidade de qubits funcionando em entanglement |
| 47:32 | ao mesmo tempo pra se fazer o cálculo, a menos que seja possível particionar o problema. Na |
| 47:37 | minha falta de matemática, eu chutaria que não dá porque estamos procurando fatores primos |
| 47:42 | desse comprimento. Pra particionar precisaria haver uma forma de fatorar esse primo, o que |
| 47:48 | obviamente não é possível, portanto você precisa procurar o número inteiro de uma vez só. E isso |
| 47:53 | é literalmente metade do problema. A parte importante é quando eles falaram que 1 dos |
| 47:59 | qubits não funcionou, então o cálculo foi feito com cinquenta e três qubits. Esse é o calcanhar de |
| 48:06 | Aquiles de toda a computação quântica. Lembram que eu descrevi como um qubit fica totalmente isolado, |
| 48:12 | mantido a quase zero absoluto, num ambiente o mais livre de interferência possível? Qualquer |
| 48:18 | coisa pode excitar o núcleo e mudar o spin dele ou pior, tirar o núcleo do estado de superposição. |
| 48:26 | Uma partícula em superposição colapsa no instante que alguma coisa observa ele; e o ambiente está |
| 48:32 | constantemente tentando observar a partícula. Micro vibrações, campos eletromagnéticos, fótons, outras partículas subatômicas, qualquer coisa que chegar perto pode flipar esse núcleo. |
| 48:44 | Então nesse momento o que se consegue construir é extremamente frágil. E eu disse que o núcleo |
| 48:49 | consegue manter seu estado por mais tempo, mas esse tempo não é dias ou horas, pode ser minutos |
| 48:55 | ou segundos. Quanto maior a profundidade de portas quânticas, maiores as chances de um |
| 49:01 | dos qubits colapsar no meio do caminho e você tem que começar tudo de novo. Existe um efeito |
| 49:06 | chamado "crosstalk" onde um qubit por causar interferência no outro também. |
| 49:12 | Decoherence ou decoerência é quando um qubit em superposição é colapsado nos bits clássicos antes |
| 49:20 | do tempo por exemplo. Ou quanto o entanglement falha. E como eu disse qualquer coisa pode causar |
| 49:25 | isso. O sistema precisaria estar 100% isolado pra garantir coerência permanente. Só que você precisa |
| 49:32 | conseguir enviar microondas e ler os resultados, em algum momento você precisa causar decoherence |
| 49:37 | pra ler o resultado, por exemplo e isso torna o sistema aberto com o ambiente. A maior quantidade |
| 49:43 | qubits que já se colocou junto é no computador da D-Wave que já tem 2048 qubits mas ele não é igual |
| 49:50 | os computadores da IBM ou do Google, a princípio ele não é universalmente programável, é hardcoded |
| 49:57 | pra operações específicas e teoricamente não é capaz de rodar o algoritmo de Shor. Sobre o mínimo necessário de qubits, na realidade é mais do que parece. Segundo algumas estimativas, |
| 50:09 | com a implementação do algoritmo que se sabe fazer, seria necessário no mínimo 4000 qubits |
| 50:15 | pra conseguir quebrar os algoritmos de chave pública que usam o conceito da dificuldade de |
| 50:21 | fatoração de inteiros. Isso é o que teoricamente quebraria o mecanismo de troca de chaves que |
| 50:26 | usamos hoje. Estamos falando especificamente de RSA e Diffie-Hellman. Troca de chaves é o que |
| 50:33 | acontece toda vez que você conecta num site com certificado SSL ou TLS ou quando você se |
| 50:39 | conecta via SSH em algum servidor. Esse sistema normalmente é usado pra autenticar a identidade |
| 50:45 | dos participantes e depois pra trocar um segredo entre eles. Esse segredo é usado em algoritmos |
| 50:51 | simétricos como RC4 e AES pra de fato realizar a encriptação da comunicação. |
| 50:58 | Pra entender esse conceito recomendo assistir os seguintes vídeos do Computerphile e da PBS Space |
| 51:05 | Time que explica em mais detalhe. Talvez eu faça um vídeo resumindo esses conceitos depois. Mas |
| 51:10 | entenda que RSA é um sistema de encriptação assimétrica cara. Por custar caro ela não é |
| 51:18 | usada comumente pra encriptação dos dados em si. Ela é usada pra autenticar as partes e |
| 51:23 | daí trocar uma chave simétrica, que tem tempo de duração curta, e que daí é usada por algoritmos |
| 51:29 | como RC4 ou AES pra encriptar a comunicação num comunicador por exemplo. |
| 51:35 | AES, que é um algoritmo de encriptação simétrica, ou seja, uma função reversível, |
| 51:40 | é que você usa pra encriptar e decriptar os dados da partição do seu disco por exemplo. É literalmente inquebrável. O algoritmo de Shor não vai quebrar ela. E ainda não tem um algoritmo |
| 51:52 | conhecido que possa fazer isso. O problema que se encontra no AES é sempre na implementação, |
| 51:57 | algum bug que expõe a chave simétrica que deveria ser secreta. Por exemplo, ficou |
| 52:03 | sobrando na memória RAM e um malware consegue interceptar da memória. Ele não quebrou o AES, |
| 52:09 | ele só roubou a chave que ficou na memória por engano. Por isso mesmo eu sempre falo: jamais tente implementar um algoritmo como RC4 ou AES você mesmo pra usar em algum projeto seu, você |
| 52:22 | necessariamente vai implementar errado. Mesmo quem tem anos de experiência implementa errado, |
| 52:28 | você que nunca fez isso vai com certeza absoluta implementar errado. Eu implementaria |
| 52:33 | completamente errado. Faça como exercício mas jamais pra usar de verdade. Pra isso já existem |
| 52:39 | bibliotecas abertas que já foram escrutinizadas por milhares de pessoas e tem maior garantia |
| 52:44 | que funcionam como no clássico OpenSSL ou nos mais recentes como libsodium. |
| 52:50 | Só pra ninguém comentar que esqueci de mencionar. Algoritmos de encriptação simétrica como AES |
| 52:56 | poderiam sofrer ataques usando o algoritmo quântico de Grover, que poderia ser usado |
| 53:02 | pra aumentar muito a velocidade numa pesquisa num banco de dados não indexado por exemplo. Ou |
| 53:08 | a definição que mais interessa que seria inverter uma função, por exemplo uma função de encriptação |
| 53:14 | simétrica pra fazer ela decriptar. Porém Grover não é mágica, é um algoritmo que trás uma aumento |
| 53:20 | quadrático em velocidade se comparado com o que temos hoje, mas mesmo isso não é suficiente se a |
| 53:27 | chave for grande o suficiente. Hoje usamos AES-256 bits como o mais seguro, bastaria |
| 53:33 | dobrar pra 512 ou até 1024 e nem um computador quântico conseguiria quebrar. Esse é o poder |
| 53:39 | da exponenciação. E falando especificamente de criptomoedas ainda não há indícios que |
| 53:44 | computação quântica poderia comprometer os algoritmos atuais e mesmo os mais paranóicos |
| 53:50 | já tem altcoins que usam algoritmos teoricamente mais resistentes a uma eventual real supremacia |
| 53:57 | quântica. O IOTA é um deles. O campo de estudo de algoritmos quânticos ainda |
| 54:02 | está no começo. Existem poucos algoritmos ainda. Com as características e potenciais de reduzir |
| 54:08 | processamentos com complexidade exponencial em uma complexidade menor tipo logaritmica, isso abre |
| 54:15 | a fantasia pra resolver diversos problemas que hoje custa muito caro ou é simplesmente inviável |
| 54:22 | num computador tradicional. Por isso se fala em aplicação na indústria genética ou farmacêutica |
| 54:29 | pra simular moléculas e drogas de forma melhor. Mas isso é como sonhar com as possibilidades de |
| 54:34 | renderização 3D em tempo real em 4K quando o transistor nem foi inventado ainda. Estamos a |
| 54:40 | décadas de distância disso. A realidade parece ser mais a seguinte: todo o futuro da computação quântica depende de alguém descobrir como reduzir drasticamente o |
| 54:51 | problema de noise e decoherence pra ser prático colocar milhares de qubits em |
| 54:57 | superposição e entanglement e o sistema inteiro não colapsar antes do tempo. Não existe um jeito |
| 55:03 | padrão eficiente de fabricação como temos CMOS e MOSFET pra transistores hoje em dia. Estamos |
| 55:10 | realmente nos primeiros dias ainda. Por isso é um campo extremamente interessante e fascinante. Eu mesmo já tô viciado em estudar a respeito. Eu tive que me forçar a parar pra escrever o script |
| 55:20 | de hoje porque tem centenas de coisas que eu ainda não entendi direito e queria conseguir verbalizar |
| 55:26 | melhor. É como se eu estivesse em 1948 quando o transistor acabou de ser inventado. Ninguém |
| 55:32 | tinha idéia de pra onde podia ir. Os transistors originais eram feitos do elemento germânio, só |
| 55:38 | depois descobriram que silício era melhor. Qubits é a mesma coisa, eu mencionei átomos de fósforo, |
| 55:44 | mas não é o único elemento viável. E nem a forma de fabricação com cristais de silício. Tem muito chão pela frente ainda. Quando o Google anunciou a Supremacia Quântica, |
| 55:54 | nós que nos inserimos dentro das ciências da computação ficamos otimistas na possibilidade |
| 56:00 | de vermos um uso prático de computação quântica ainda dentro do nosso tempo de vida, ou seja, |
| 56:06 | antes de morrermos. Por isso eu chuto que estamos a algumas décadas de distância de começarmos |
| 56:12 | a usar em alguma escala útil em vez de só experimental e acadêmico como é hoje. |
| 56:19 | Se um computador quântico de 4000 qubits existisse hoje, poderíamos descobrir chaves |
| 56:25 | privadas de algoritmos como RSA hoje. Mas como eu disse estamos longe disso. Mas até |
| 56:31 | esse computador existir, o resto do mundo não está parado. Já existem diversos estudos de algoritmos pós-computação quântica. Algoritmos que não usam a dificuldade |
| 56:42 | de fatoração de números primos ou problemas de logaritmos discretos ou problemas de logaritmos |
| 56:48 | discretos de curva elíptica. Como última tangente, nos últimos 5 anos |
| 56:53 | atingimos um teto na Lei de Moore que você já deve ter ouvido falar, que inclusive não é uma lei mas uma observação, de que a cada 2 anos você consegue dobrar o poder computacional |
| 57:03 | de um processador ao mesmo preço. Mas nós batemos no teto do Gigahertz, e desde então |
| 57:09 | não aumentamos os clocks com a mesma velocidade de antes. Daí começamos a ter multi-cores, |
| 57:14 | primeiro com o IBM POWER4 e depois com o AMD Athlon 64 e finalmente com o Intel Core 2 Duo. Na |
| 57:22 | última década também os GPUs começaram a despontar e a diferença é a densidade de cores ou o que |
| 57:28 | a NVIDIA chamaria de CUDA cores. Nesse período viemos quebrando programas feitos pra rodar num |
| 57:34 | único core e tentando quebrar em trabalhos que podem ser divididos em múltiplos cores tanto na |
| 57:39 | CPU ou se forem trabalhos envolvendo vetores, matrizes ou tensors, que é justamente o tipo |
| 57:45 | de trabalho necessário pra processamento gráfico e machine learning, usamos GPUs. |
| 57:50 | Mas nem todo trabalho é paralelizável e existe outra lei que andamos esbarrando que é a Lei de |
| 57:56 | Amdahl, na realidade é uma fórmula pra calcular o máximo de melhoria de performance que podemos |
| 58:02 | ter pra determinados trabalhos paralelos. Na prática quer dizer que temos um limite pros |
| 58:08 | nossos algoritmos de até onde dá pra melhorar a performance só aumentando cores na máquina e |
| 58:13 | você já deve ter visto isso. Vou deixar linkado abaixo o video do canal Coreteks que explica em |
| 58:19 | detalhes a evolução dos processos de fabricação de processadores e as mudanças em arquiteturas |
| 58:24 | e pra onde ainda vamos com isso. Um GPU ou unidade de processamento gráfico funciona em um SIMD ou Single Instruction Multiple Data ou SIMT que é Single Instruction Multiple |
| 58:38 | Threads, que é uma versão um pouco modificada de um SIMD com funcionalidade de multithreading. |
| 58:44 | Comparado com um CPU ele tem muito mais cores mas cada um é muito mais simples e é mais lento. |
| 58:50 | O que a quantidade de cores permite é o aumento do throughput. Mesmo que uma tarefa individual demore |
| 58:57 | mais comparado a um CPU. Um GPU é tão simples que nem tem um contador de programa. Muitas |
| 59:03 | threads trabalham juntos num warp que no caso de uma Nvidia são grupos de 32 threads. Então todas |
| 59:09 | as threads em warp precisam estar executando a mesma instrução ao mesmo tempo. O que ajuda a performance de uma GPU é a memória mais rápida que ela tem. GPUs normalmente tem |
| 59:20 | mais banda o que ajuda a alimentar a enorme quantidade de cores com dados o suficiente |
| 59:26 | pra eles não ficarem sem nada pra fazer. O que torna um GPU especial é a capacidade de ter um |
| 59:32 | grande número de tarefas simples e independentes rodando em paralelo. Tradicionalmente GPUs eram |
| 59:39 | usadas só pra trabalhar gráficos, já que cálculo de vetores e matrizes é particularmente bom pra |
| 59:44 | processar matrizes de pixels que compõe cada frame de uma animação por exemplo. Mas com a melhoria nos GPUs e algoritmos, finalmente conseguimos programar coisas mais |
| 59:54 | sofisticadas com coisas com GPGPU. Treinamento de Machine Learning é a aplicação de funções de |
| 1:00:00 | otimização em pontos de dados que é o tipo de coisa que GPUs fazem melhor. Porém um GPU não substitui um CPU pela limitação na sua lógica de controle, pelo menos até agora, |
| 1:00:12 | e depende do CPU pra organizar e delegar as tarefas e dados pra ele. Mesmo GPUs, |
| 1:00:19 | que são desenvolvidos com tecnologias similares a CPUs em termos de transistors e materiais como |
| 1:00:25 | silício, levou décadas pra chegar no ponto que estão hoje. E se você ver os vídeos do canal Coretek vai ver que ainda tem bastante coisa que já está em desenvolvimento em relação |
| 1:00:35 | a otimização pra aumentar ainda mais a performance e baixar o uso de energia, |
| 1:00:40 | em particular colocar o CPU e GPU no mesmo chip e mudar de arquitetura pra ARM ou RISC V por |
| 1:00:46 | exemplo. Ainda temos décadas de evolução em cima do que já temos. O computador quântico eu vejo mais sendo um QPU, e o que teríamos no futuro seria um híbrido de CPUs, |
| 1:00:58 | GPUs e QPUs. O CPU continuaria sendo o coordenador. Veja os exemplos de simuladores |
| 1:01:04 | como o Qiskit que mencionei antes pra ver que é exatamente assim que é montado hoje: um programa |
| 1:01:09 | tradicional conecta numa QPU virtual e manda as operações, assim como fazemos com GPUs hoje. |
| 1:01:17 | Trabalhos facilmente paralelizáveis continuariam sendo delegados pra coisas como as GPUs do futuro |
| 1:01:23 | e trabalhos que possam tirar vantagem das propriedades de superposição e entanglement, |
| 1:01:28 | como a transformada quântica de Fourier, poderiam ir pra essa QPU. Não imagine um computador quântico como sendo o substituto do computador atual. Um computador |
| 1:01:39 | quântico não deve rodar Linux e certamente não vai rodar Crisis. Assim como uma GPU é |
| 1:01:45 | um hardware especializado que não substitui um CPU, um QPU seria a mesma coisa. Tecnicamente ela |
| 1:01:53 | parece ser Turing Complete mas é o caso onde tarefas triviais seriam ainda executadas melhor |
| 1:02:00 | e de forma mais rápidas por CPUs. Então a QPU seria mais como uma terceira placa - no dia que |
| 1:02:06 | for possível diminuir o aparato que temos hoje pro formato de algo parecido com uma placa. Na prática |
| 1:02:12 | por muitos anos ela vai ser mais como os super computadores, como os da Cray ou o IBM Summit, |
| 1:02:18 | computadores hiper caros pra usos específicos em agências de governo ou grandes empresas, |
| 1:02:23 | não vai ser algo acessível pra população em geral até que façamos o salto equivalente da |
| 1:02:29 | válvula pro transistor. Na realidade eu diria que ainda não temos o equivalente ao transistor |
| 1:02:34 | no mundo dos qubits. Por último, quero repetir de novo. Os comportamentos quânticos como superposição, entanglement e coisas assim só fazem sentido |
| 1:02:45 | no mundo subatômico. E segundo a interpretação de Copenhagen não faz muito sentido ficar especulando |
| 1:02:52 | demais a natureza por trás disso, porque ainda nem não temos elementos suficientes pra discutir. |
| 1:02:57 | Vamos direto aos cálculos e aos experimentos que de fato funcionam. Como diria o professor David |
| 1:03:04 | Mermim "Shut up and calculate". Portanto, como eu já disse no começo, esqueça qualquer coisa pseudo pop científica que fica prometendo soluções quânticas pra sua |
| 1:03:15 | vida. Mais energia. Mais conectividade. Mais empatia ou qualquer bobagem pseudo-quântica. |
| 1:03:22 | Guarde isso pra ficção científica. Não existe isso no mundo macroscópico. Porém, os efeitos |
| 1:03:28 | quânticos são reais e observáveis. Seu computador, os sensores da sua câmera digital, raios laser que |
| 1:03:35 | você usa pra operar os olhos, basicamente todo uso avançado do efeito fotoelétrico é |
| 1:03:40 | baseado em mecânica quântica. Toda essa teoria não é só acadêmica ou experimental, nós já nos |
| 1:03:46 | beneficiamos da mecânica quântica em tudo que é microeletrônico e em particular que trabalha a |
| 1:03:51 | luz de alguma forma. No canal do MinutePhysics tem outro video explicando o efeito estranho usando filtros polarizadores pra mostrar um efeito quântico com a |
| 1:04:02 | luz. E este vídeo do canal Domain Science explica os usos na vida real em mais detalhes e vou deixar |
| 1:04:08 | os dois linkados abaixo também. O que você precisa levar de tudo isso que eu ruminei nesse vídeo é |
| 1:04:14 | que mecânica quântica é algo real, matematicamente calculável, e usado na prática. Semicondutores |
| 1:04:21 | obedecem as leis da física quântica por exemplo. E computadores quânticos realmente existem, podem |
| 1:04:28 | ser usados hoje e simulados por você mesmo em casa. Ainda não sabemos se vai ser de fato prática |
| 1:04:34 | de ser construída e usada mas isso é especulação de futuro, algo na ordem de décadas ainda, com |
| 1:04:41 | sorte enquanto ainda estivermos vivos. E é isso aí, nem vou perguntar se vocês tem |
| 1:04:47 | dúvidas, porque hoje eu não consegui nem raspar o pico do iceberg. Milhares de pessoas estão aprendendo isso em cursos na faculdade ao redor do mundo hoje, e eu sou |
| 1:04:57 | nada além de um mero iniciante nisso. Mas, fazer seu primeiro qubit realizar uma coisa considerada ficção científica como teletransporte é fascinante! De qualquer forma, se você tem |
| 1:05:08 | mais informações científica pra compartilhar não deixem de mandar nos comentários abaixo, |
| 1:05:14 | se curtiram o video deixem um joinha, compartilhem com seus amigos e não deixem de assinar ao canal e |
| 1:05:20 | apertar o sininho pra não perder os próximos episódios. A gente se vê, até mais! |
