# Linguagem Compilada vs Interpretada | Qual é melhor?

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=SNyh-cubxaU
- **Duração:** 1:11:45
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Todo bom iniciante que se preza mais cedo ou mais tarde vai se engajar numa discussão |
| 0:06 | sobre porque sua linguagem favorita é melhor que dos outros. E invariavelmente um dos argumentos |
| 0:12 | que vai aparecer é que ser compilado é melhor, é mais performático, ou que ser interpretado |
| 0:18 | é melhor porque é mais produtivo. E certamente todos que estão participando dessa discussão |
| 0:23 | estão errados de maneiras que vocês nem imaginam. Hoje quero falar um pouco sobre o que significa uma linguagem ser compilada ou interpretada |
| 0:31 | e porque a maioria dos programadores interpreta isso errado (no pun intended). O objetivo não de hoje não é dizer qual é melhor, e sim porque sua linha de raciocínio não |
| 0:40 | leva em conta diversos outros fatores que são mais importantes. No final do video você vai enxergar todas as suas linguagens de uma forma diferente. |
| 0:48 | (...) |
| 0:56 | Pra todo mundo que tá estudando ou já se formou em ciências da computação: não, eu não vou falar do livro do dragão de compiladores. Também não vou falar do livro de sistemas |
| 1:05 | operacionais do Tanenbaum. Porém todo mundo que estudou essas duas matérias vai ter um aproveitamento melhor desse video. Aproveitem pra discutir os detalhes técnicos com seus |
| 1:13 | colegas ou fazer mais perguntas pros seus professores na faculdade e nos cursos. Compiladores e sistemas operacionais são conteúdos pra pelo menos um ano ou mais no |
| 1:23 | curso de ciências da computação. Partes desses assuntos eu já expliquei em videos como o guia mais hardcore de introdução à computação e hello world como você nunca |
| 1:32 | viu antes, e todos os outros na playlist de "Como Seu Computador Funciona". Mas pra ter uma idéia, na faculdade, um dos trabalhos é fazer seu próprio compilador. Se nunca |
| 1:42 | fez, depois do video fica de desafio tentar fazer o seu próprio. E pra isso já dou spoiler pra pesquisar tutoriais sobre a ferramenta ANTLR. Mas não vou falar especificamente |
| 1:51 | de ANTLR hoje também. Vamos começar do começo. Isso aqui é um Hello World em C. Agora, isso aqui é um terminal |
| 1:58 | de Linux no WSL2 do meu PC e compilamos esse arquivo texto com o código em C num binário |
| 2:04 | ELF compatível com Linux usando o compilador "cc", que significa "Compiler Collection". |
| 2:09 | E pronto, isso é tudo que a maioria tem na cabeça quando se pensa em transformar código texto em um executável e no video sobre arquivos texto e binários eu explico como realmente |
| 2:19 | as coisas funcionam e como um executável funciona. Mas vamos pra outro exemplo. |
| 2:24 | Agora, isso aqui é um Hello World em Java. Novamente vamos pro Terminal e é assim que se aprende na faculdade, roda `javac Hello.java` e ele vai gerar um `Hello.class`. E pra rodar |
| 2:35 | é só fazer `java Hello` e voilá. Muita gente costuma dizer que Java é uma linguagem "compilada", entre aspas. Só que olha o que estamos fazendo: chamando o executável "java" |
| 2:45 | antes e dando como parâmetro a classe "Hello" que acabamos de compilar. Se fosse realmente |
| 2:51 | compilado, no sentido clássico, deveria dar pra só fazer `./Hello.class`, mas isso não |
| 2:56 | funciona, o sistema operacional não tem nenhuma idéia de como executar isso, porque um binário `.class` não é um executável em formato ELF. |
| 3:03 | Como tinha explicado no video de arquivos, pro Linux saber que um binário pode ser executado, |
| 3:08 | ele precisa estar num formato chamado ELF, que significa Executable and Linkable Format. Em particular, todo binário ELF começa com a sequência que em hexadecimal seria 7f 45 |
| 3:19 | 4c 46, que propositalmente é ASCII pra string "ELF". Isso é totalmente arbitrário e quem |
| 3:24 | inventou o ELF só definiu que é assim e pronto. Mas se abrirmos os primeiros bits da classe Hello de Java, o que vemos nos primeiros bytes é a sequência hexadecimal `cafe babe`. |
| 3:34 | Obviamente uma piada de café e java que o James Gosling escolheu pra serem os primeiros bytes de todas as classes Java. |
| 3:41 | Se definirmos que compilar é o processo de pegar um código fonte texto, por exemplo em C, passar por uma ferramenta como o "cc", que vai cuspir um binário que o sistema operacional |
| 3:50 | vai conseguir executar diretamente, então não, o Java não é compilado. Por outro |
| 3:56 | lado vamos definir um interpretador. Um interpretador é um programa que vai pegar ou o arquivo |
| 4:01 | texto do código ou uma representação intermediária, como esse ".class" e vai traduzir pro binário |
| 4:07 | de máquina que, aí sim, o sistema operacional e o processador vão entender. Portanto, por |
| 4:13 | essa definição, Java é uma linguagem interpretada. Isso é o que você vai encontrar na bolhadev, e na verdade o que acabei de falar não tá |
| 4:20 | nem totalmente certo, nem totalmente errado. Tanto C quanto Java são linguagens compiladas. |
| 4:26 | E antes de explicar qual a diferença, preciso começar explicando o que é o processo de compilação. Esse processo tem diversos passos mas minha intenção não é escovar bits |
| 4:36 | hoje, mas sim fazer com que vocês tenham um modelo mental fácil na cabeça pra não cairem em pegadinhas de discussão online e conseguir entender as principais diferenças. |
| 4:45 | O estudo de linguagens de programação é meio que um sub-conjunto do estudo de linguagens |
| 4:50 | em geral, tipo português ou inglês. Em ciência da computação, na teoria formal de linguagens, |
| 4:56 | as linguagens de programação como C ou Java ou Python são o que chamamos de linguagens |
| 5:01 | regulares. Por sua vez, uma linguagem regular é uma linguagem formal que pode ser definida |
| 5:06 | por expressões regulares, sabe o regex que você usa todo dia pra validar formato de emails ou cpfs? E por sua vez uma expressão regular pode ser definida como uma linguagem |
| 5:16 | que pode ser reconhecida por um autômato finito. Älguns de vocês já devem ter esbarrado no termo "máquinas de estado finito", que é outro nome que se dá a autômatos de estado |
| 5:26 | finito. Mas relaxa, nem eu sei tudo em todos os detalhes e não vou descer na matemática por trás |
| 5:32 | de autômatos não, mas é pra saber que existe esse campo de estudo. Na prática, pense assim. |
| 5:37 | Temos um texto em português. O que é um texto? É uma coleção de parágrafos. E o que são parágrafos? É uma coleção de frases. E o que é uma frase? É uma coleção |
| 5:45 | de palavras. Palavras são coleções de letras separadas por espaço ou outras pontuações, |
| 5:52 | como vírgula ou ponto. Então, se eu juntar quaisquer letras, vou ter palavras? Se eu juntar quaisquer palavras, |
| 5:59 | vou ter frases? Não. Existe uma ordem que funciona. Conjuntos de letras só formam palavras |
| 6:04 | se elas existem num dicionário, que é uma coleção arbitrárias de conjuntos de letras, que a gente definiu. Se eu juntar as letras "h", "e", "l", "l", "o", um atrás do outro, |
| 6:14 | no dicionário em inglês, isso define uma saudação e uma forma de iniciar uma comunicação por telefone, por exemplo. Tire um "l" dessa palavra e já não significa a mesma coisa. |
| 6:23 | Pra formar frases, não pode sair juntando quaisquer palavras. Elas precisam obedecer uma gramática. Sujeito, predicado, adjetivos, pronomes, tempos verbais e tudo mais que fazem |
| 6:35 | uma frase ter sentido. Se eu disser a frase "não vai ter jeito", significa que não tem |
| 6:40 | mais conserto, fodeu já. Mas se na verdade faltou uma vírgula nessa frase depois do |
| 6:45 | não, então seria "não, vai ter jeito", que é exatamente o significado oposto. Uma única vírgula faz diferença. Quem já programou e teve bug porque esqueceu uma vírgula, em |
| 6:55 | português, também tem bug se esquecer uma pontuação. Voltando pro código C. Pro computador, um texto, é só um linguição de bytes, um |
| 7:03 | linguição de caracteres. Tem letras, tem espaços, tem chaves, mas não quer dizer nada. Mesmo pra você, ser humano assistindo, se nunca programou, esse texto também não |
| 7:12 | quer dizer bulhufas. Eu preciso dar um jeito de fazer o computador juntar letras que formam |
| 7:17 | palavras, que no caso chamamos de "tokens", que fazem sentido. "int" é um conjunto de letras que faz sentido. "printf" é outro conjunto de letras que faz sentido. Então |
| 7:27 | preciso conseguir quebrar esse texto todo em uma lista de tokens. Pra isso vou "tokenizer", ou "lexar", e isso é o trabalho de uma ferramenta que faz análise léxica. |
| 7:36 | Na realidade precisamos definir os lexemes da linguagem, o equivalente de dicionário. |
| 7:42 | Podemos definir que dígitos são todos os caracteres de zero até 9. E definimos como não-dígitos, todas os caracteres de "a" até "z", em mínusculo e maiúsculo. Também |
| 7:50 | definimos que pontuação são todos estes outros caracteres como parênteses, colchetes, vírgula, ponto e tudo mais. Alguns desses caracteres podem repetir em outra definição. |
| 7:59 | Parênteses podem ser operadores, assim como sinal de mais, de menos, asterisco. E assim por diante. Agora um analisador léxico como um chamado `flex` pode pegar meu código em |
| 8:10 | C e entender que tem sinais, strings, digitos, operadores e traduzir isso numa lista de tokens. |
| 8:16 | Uma vez tendo essa lista de tokens, precisamos saber o que significam. Eu preciso que o computador entenda que, o que vai entre parênteses depois do token "printf", é um argumento. Eu preciso |
| 8:26 | que ele entenda que o "return 0" na última linha entre chaves se refere ao tipo "int" |
| 8:31 | declarado no começo da função "main". Elas precisam estar seguindo alguma regra. Uma vez tendo uma lista de tokens, precisamos checar contra uma gramática. |
| 8:40 | Antes de ficar teórico demais, deixa eu mostrar um exemplo prático. Pra isso fiz a linguagem de programação mais idiota do mundo. Ela não é turing complete, só aceita uma expressão |
| 8:50 | no formato `1 add 2` pra somar, ou `4 sub 3` pra substrair. Só isso. Olha só, escrevi |
| 8:56 | um programa nessa linguagem e salvei como "hello.stupid", por que não? Pra rodar esse programa, fiz um interpretador em Javascript chamado "js stupid". Vamos abrir pra ver o |
| 9:06 | que faz. As primeiras linhas é o jeito mais porco de pegar um argumento da linha de comando. |
| 9:11 | Vou executar fazendo "./stupid.js hello.stupid", igual o Java faz com "java Hello" antes, lembra. |
| 9:19 | Pra isso botei um shebang na primeira linha que vai executar o Node automaticamente e carregar o resto do script nele. Depois pego o primeiro argumento e uso a biblioteca `path` |
| 9:28 | pra formar o caminho absoluto até esse arquivo. Daí uso a biblioteca "fs", de filesystem, pra ler o arquivo. Se eu passar um arquivo |
| 9:36 | que não existe vai dar um erro e sair. Senão eu pego o conteúdo do arquivo, limpo coisas no final como o caracter de nova linha, caso tenha, sabe o "\\n"? E aí simulo o que seria |
| 9:46 | o trabalho do tal analisador léxico, que vai tokenizar o conteúdo do arquivo. |
| 9:51 | Meu lexer é tão simples que é só um split de string de javascript. Ele quebra onde tem |
| 9:56 | espaço e joga os tokens nesse array que chamei de "tokens". Nesse ponto, converti o texto |
| 10:02 | do arquivo numa lista e ainda converti o primeiro e o último token pra serem números. |
| 10:08 | Essa minha linguagem é tão besta que não precisa de um analisador sintático. Eu só faço um switch case e vejo o 2o token da lista. Se for "add" eu faço uma soma, se |
| 10:17 | for "sub" eu faço uma subtração. E é isso aí. Eu posso adicionar quantas operações quiser seguindo esse formato. E no final, se colocar um operador que não tá declarado, |
| 10:26 | vai dar erro de sintaxe e sair. Se tiver um pouquinho de imaginação vai conseguir criar linguagens bem simplinhas |
| 10:31 | usando só esse esquema. Mas dando spoilers já adianto onde que vai dar nó na cabeça. |
| 10:37 | E se eu quisesse suportar uma expressão com mais de 2 números? Tipo fazer 1 + 2 + 3, |
| 10:42 | como você faria? E se eu quisesse adicionar multiplicação e quiser que 1 + 2 * 3 dê |
| 10:48 | a resposta correta? Note que multiplicação tem precedência, então 2 * 3 tem que vir |
| 10:53 | antes de somar por 1. E dá pra ir complicando. E se eu quiser suportar variáveis? E se eu |
| 10:58 | quiser suportar funções? Obviamente isso é um problema já resolvido. E o primeiro conceito é separar a análise |
| 11:06 | de sintaxe da execução propriamente dita, que é o que costumamos chamar de "tempo de compilação" e "tempo de execução". Recapitulando, a análise léxica só dividiu o texto em |
| 11:15 | tokens, e agora análise sintática vai dar significado pra esses tokens. Pra isso vai |
| 11:21 | precisar de uma gramática que define o que são expressões, o que são funções, o que são condicionais. Por exemplo, podemos ver a gramática da linguagem C. |
| 11:29 | As ferramentas tradicionais que aprendemos na faculdade são lex ou flex, pra definir a análise léxica, e o bison ou yacc pra definir a gramática. Se procurar no GitHub |
| 11:39 | é fácil de achar a gramática de todas as linguagens. A gramática do C em yacc é bem curtinha. Você imagina que definir uma linguagem deve ser milhares de linhas, mas na realidade |
| 11:49 | não é mais que meia dúzia de page down, algumas centenas de linhas. Isso não é o compilador todo, só o parser, claro. |
| 11:56 | Se olharmos lá no fim da gramática, eis a definição do que é uma função de C, |
| 12:01 | literalmente ele nomeia como "function definition". E pode ser construído de 4 formas diferentes. |
| 12:06 | A 1a são especificadores de declaração, seguido de declarador, seguido de lista de |
| 12:12 | declaração e terminando com composição de statements. Em português não sei como chamam "statements", alguns chamam de expressão, mas a definição de expression e statement |
| 12:21 | são diferentes. Eu acostumei a chamar de statement então vai assim mesmo. Mas o que tudo isso quer dizer? Esses nomes são como etiquetas, a definição de cada |
| 12:29 | uma tá mais pra cima. Por exemplo, vamos ver o que "compound statement" quer dizer. Olha só, pode ser também 4 coisas: um bloco entre chaves vazias, ou uma lista de statements |
| 12:40 | entre chaves, ou uma lista de declarações entre chaves e por último pode ser uma lista de declarações seguida de uma lista de statements, mas o principal é que estamos olhando pra |
| 12:50 | declaração oficial, completa e não-ambígua do que o C chama de "função". Não há espaço |
| 12:56 | pra discussão, esta é gramática que define o C. Agora o que é um statement list? Aqui vemos a definição e ela pode ser um statement |
| 13:05 | ou vários statements, isso é meio que uma definição recursiva, por ser ela mesma várias vezes. Mas isso só define que pode ter um ou mais statements, agora precisamos ver o |
| 13:14 | que é um statement. E agora sim, um statement pode ser de diversos tipos como labeled statement, |
| 13:20 | compound statement que vimos antes, mas o interessante vai ser esse iteration statement. |
| 13:26 | E olha só, é isso que C chama de statements de iteração. Pode ser um while, pode ser |
| 13:31 | um do while, pode ser for. E o for pode ser de dois jeitos diferentes, com ou sem uma |
| 13:37 | expressão no final. E assim por diante. Se você tiver paciência pra ler a definição léxica e a gramática de yacc, tecnicamente é toda a sintaxe e semântica do C definida |
| 13:47 | em 2 arquivos razoavelmente curtos, dá pra decorar e saber de cabeça. Claro, não é um iniciante que vai ler esses arquivos e entender tudo. Mas se alguma vez você já |
| 13:56 | se perguntou, onde que tem a definição exata de uma linguagem? São nesses arquivos, e |
| 14:01 | não em blog post. Por exemplo, o Javascript tem uma definição semelhante. No site do EcmaScript podemos |
| 14:07 | ver como é definido a versão mais nova 2023. E se pularmos aqui no menu pra Notação de |
| 14:13 | Gramática, olha só como é a definição de um Variable Declaration, ou declaração de variável: é um Binding Identifier e um Initializer. Um Binding Identifier são tokens |
| 14:23 | como "const", "let" ou "var" e um Initializer é uma expressão de assignment como "x = 1". |
| 14:29 | E olha aqui embaixo, ele define como é um loop com for, um For Statement, que pode ser definido de 4 maneiras diferentes, todos com um Lexical Declaration e variando a forma |
| 14:38 | da Expression. Mas beleza, essa é a gramática mas e daí, pra que serve? O objetivo é quebrar seu código |
| 14:45 | fonte, que é um texto, em uma listona de tokens e depois usar a gramática pra organizar esses tokens em uma estrutura de dados que podemos manipular programaticamente. O objetivo |
| 14:55 | é transformar seu código em uma árvore, mais especificamente uma Parse Tree. Lembram? |
| 15:01 | Eu sempre falo que uma das estruturas de dados mais importantes é uma árvore, por isso dediquei um video inteiro só sobre isso. No final seu código fonte vai ficar mais |
| 15:10 | ou menos assim: (imagem) Aliás, tudo que expliquei até agora sobre analisadores léxicos e sintáticos, o processo |
| 15:17 | de transformar um texto de código em tokens e reorganizar desses tokens numa árvore, é |
| 15:23 | o que muita gente chama de "parser", mas na realidade a primeira etapa de tokenizar é feito por um lexer, e a segunda parte de pegar os tokens e transformar em árvore é feita |
| 15:32 | por um parser. Pra simplificar, vou pular a explicação do que é uma Parse Tree e ir direto pra mostrar outra representação da mesma árvore, que é a árvore de sintaxe, |
| 15:42 | Syntax Tree, ou mais especificamente uma Abstract Syntax Tree ou AST. |
| 15:48 | Lembra daquela minha linguagem de programação mais estúpida do mundo, que só aceita uma linha e só faz soma de dois elementos? Digamos que eu evolua ela pra fazer conta com mais |
| 15:57 | de dois elementos e queira escrever aquele `1 + 2 * 3`. Essa é a notação que chamamos |
| 16:02 | de infixa onde operadores como o sinal de mais e o asterisco vão no meio dos operandos, |
| 16:08 | que são os números. É a notação, ou forma de escrever, que nós humanos estamos mais acostumados a ver, mas não é a única notação e nem a melhor. |
| 16:17 | Quem tá acostumado com as boas e velhas calculadoras de engenharia da HP conhece a famosa notação |
| 16:23 | RPN ou notação polonesa reversa onde começamos digitando 3, depois 2, depois asterisco. Daí |
| 16:30 | ele multiplica o 3 pelo 2, que dá 6. Continuamos digitando o 1 e só depois o sinal de soma, |
| 16:35 | que vai somar o 1 com o resultado parcial 6, e isso vai dar 7. Notação polonesa reversa é o que chamamos de pósfixa. Portanto notação polonesa é |
| 16:45 | a préfixa. E numa árvore de sintaxe escrevemos de forma préfixa. O importante é saber que |
| 16:50 | o que você considera "bom senso", nem sempre é, tem formas melhores. Vamos ver como fica. |
| 16:56 | A árvore pra essa conta começa com um nó raiz que seria o sinal de mais. Começamos pelo operador, por isso préfixo. Daí divide em dois galhos, o nó da esquerda poderia |
| 17:05 | ser o asterisco e o nó da direita o número 1. Embaixo do nó de asterisco, divide um |
| 17:10 | nó a esquerda pra ser o 2 e outro a direita pra ser o 3. Essa representação seria o equivalente a escrever direto em polonês como `+(*(2, 3), |
| 17:18 | 1)`. Já viram isso antes? Vamos mudar o símbolo de "+" e chamar de `somar` e trocar asterisco |
| 17:25 | por `multiplicar`, daí ficaria `somar(multiplicar(2, 3), 1)`. Ficou mais claro agora? |
| 17:33 | É assim que você programa. A maioria das linguagens de programação, no caso especial de contas aritmeticas, como soma ou multiplicação, deixa você escrever da forma infixa, mas |
| 17:44 | internamente, depois do parsing, o compilador tá mudando pra forma préfixa na árvore, assim como todo o resto das suas funções. Isso tudo foi pra ilustrar rapidamente que |
| 17:53 | a forma que você escreve o código não é a forma como o computador vai executar. |
| 17:58 | Vamos ver como isso funciona. Vamos fazer outro programinha idiota em Java, que pegue os 3 primeiros parâmetros, converta o texto em número, que vai ser os números 1, 2 e |
| 18:07 | 3 que usamos no exemplo anterior. Então precisa chamar o método estático `parseInt` da classe |
| 18:13 | `Integer`. Daí vou imprimir no console com `System.out.print` a soma de a com b vezes |
| 18:19 | c, exatamente como no exemplo. Agora compilamos com `javac` e podemos chamar `java Calc 1 |
| 18:25 | 2 3` e deu 7, como deveria. Nenhuma surpresa aqui. Mas o que de fato executou? Pra quem não sabe existe a ferramenta `javap` que vem no |
| 18:33 | JDK de Java que serve pra desassemblar, pra mostrar o assembly de bytecodes de Java. Lembra |
| 18:40 | no episódio do guia mais hardcore de introdução a computadores que eu mostrei uma parte do assembly da CPU 6502 que era usado no antigo Nintendinho? Mesma coisa, a ferramenta javac |
| 18:50 | vai passar nosso código por um parser, fazer algumas mágicas que já vou explicar e cuspir |
| 18:55 | instruções binárias de máquina, o que comumente se chama de bytecodes ou assembly. |
| 19:00 | E o javap só mostra esses bytecodes na tela de forma que nós humanos conseguimos ler. |
| 19:06 | Parece complicado, mas pra esse exemplo simples não é. Esse trecho que vai até a linha 21 são as instruções pra pegar os argumentos que passamos e converter em inteiro, aquele |
| 19:17 | `Integer.parseInt`. Percebam que a gente só escreveu uma linha de código pra cada um dos três parâmetros, mas pra cada um ele gerou pelo menos 4 instruções, isso sem |
| 19:26 | contar esse `invokestatic` que chama seja lá o que o `parseInt` faça. |
| 19:31 | Novamente, o que você escreve na sua linguagem sempre vira bem mais instruções depois de |
| 19:36 | compilado, e esse é o objetivo. Antigamente, até antes dos anos 90, era super comum escrever |
| 19:41 | direto em assembly, em linguagem de máquina, porque era mais eficiente. Não havia nem |
| 19:47 | memória, nem processamento suficiente pra existir um compilador inteligente como os de hoje. |
| 19:52 | Mas agora os compiladores evoluíram tanto que geram assembly muito melhor do que é |
| 19:57 | possível fazer na mão. Além disso os programas que escrevemos hoje são muito maiores, seria |
| 20:03 | impossível escrever tudo em assembly. Se alguém já se perguntou se seria mais eficiente escrever tudo em assembly, não, não é, tirando raríssimas exceções, nenhum programador |
| 20:13 | hoje é melhor que um compilador. De qualquer forma, a parte que importa são as linhas 24 a 28. Aqui esse bytecode `iload` |
| 20:21 | vai empilhando na Stack os números que converteu. Daí chama o bytecode `imul` que, como dá |
| 20:27 | pra ver pelo nome, é a multiplicação. Ele desempilha os últimos 2 números, multiplica |
| 20:32 | e empilha de volta o resultado. Chega na instrução `iadd` que desempilha os últimos dois valores |
| 20:38 | na Stack, soma e empilha o resultado. Lembram? Eu expliquei pilhas no episódio de Hello |
| 20:43 | World como você nunca viu. Se não sabe como um sistema baseado em pilha funciona, assista esse episódio depois. |
| 20:49 | Os mais espertos aí assistindo talvez tenham notado, mas porque eu fiz essa forma complicada |
| 20:54 | de ter que passar os números como parâmetros na linha de comando? Por que não deixei hardcoded direto no código o `1 + 2 * 3`? Vamos fazer isso agora. Deixa eu criar uma nova classe |
| 21:05 | chamada `Calc2` e fazer direto `System.out.print(1 + 2 * 3)`. |
| 21:11 | Aliás, ignorem a nomenclatura de classes que estou usando, tá bem porco mesmo só pra ir mais rápido, mas obviamente não façam nomes como "Calc2" em projeto de verdade, |
| 21:21 | né? Enfim, agora salvamos, compilamos de novo com `javac` e podemos executar com `java |
| 21:26 | Calc2` e devolve 7 de novo. Se for como no exemplo anterior, agora deve ter cortado aquele |
| 21:32 | monte de bytecodes de parseInt mas deve ter as mesmas instruções de iload pra empilhar |
| 21:38 | e imul e iadd pra multiplicar e somar, né? Vamos conferir. Fazemos `javap -c Calc2` e olha só, ué, cadê a multiplicação e adição? |
| 21:47 | Não tem, em vez disso tem aqui esse bytecode `bipush` que quer dizer "empilhe este número inteiro na Stack", no caso o número 7 que já é direto o resultado de `1 + 2 * 3`. |
| 21:57 | Sacaram? Na hora de compilar o javac já viu: cara, essa conta vai dar 7 sempre, nunca vai |
| 22:02 | mudar, então pra que vou refazer o cálculo toda vez? Deixa eu já pré-calcular e dar direto o resultado. Assim ele economizou 3 chamadas de `iload`, e as chamadas pra `imul` |
| 22:12 | e `iadd`. Em vez disso ficou só uma chamada `bipush` pra empilhar direto o resultado final 7 e daí já pula pra chamada que vai imprimir o texto no console. O compilador literalmente |
| 22:22 | reescreveu meu código. Lembram daquele meu interpretador pra linguagem mais estúpida do mundo? Ele pega o código |
| 22:29 | do meu programa, tokeniza e coloca os tokens num array, e faz um switch case, se achar o operador "add" executa uma soma, se achar um "mul" faz multiplicação. E olhando pra |
| 22:39 | isso, vocês poderiam pensar, "ah, isso faz sentido, pra que precisa de tanto trabalho pra converter os tokens numa árvore e depois da árvore converter em instruções de máquina |
| 22:49 | em vez de direto já cuspir instruções?" E esse é um dos motivos. Vamos filosofar |
| 22:54 | um pouco. Não importa que sintaxe de linguagens você ache mais bonita ou mais elegante ou mais |
| 23:00 | produtiva. Não importa se você gosta de usar chaves pra delimitar funções como no |
| 23:06 | Java ou se prefere usar identação como em Python. Não importa se prefere dividir tudo |
| 23:11 | em várias pequenas funções de poucas linhas ou prefira o jeito go-horse de entuchar o máximo de linhas dentro de uma função. Não importa se gosta ou não de colocar comentários |
| 23:22 | detalhados antes de cada função. Tudo isso é totalmente irrelevante pro computador. |
| 23:29 | Depois que seu código for parseado e compilado, o que vai sobrar são instruções de máquina. |
| 23:35 | Muito do que você escreveu vai ser reescrito, o compilador vai pensar "porque esse idiota |
| 23:40 | deixou um cálculo hardcoded que sempre dá a mesma resposta? vou reescrever e deixar |
| 23:45 | direto só a resposta, foda-se." Sim, o compilador vai jogar fora tudo que você escreveu e vai |
| 23:51 | reescrever tudo do zero da forma que ele acha mais eficiente. É isso que o computador vai |
| 23:57 | ver no final e executar. Mas então, tudo que sempre me falaram de Código Limpo, boas práticas, serve pra que |
| 24:05 | então? Se no final o computador tá cagando e andando, pra que eu tô perdendo tempo organizando |
| 24:11 | todo meu código, escolhendo nomes fáceis de entender e tudo mais? Porque você não |
| 24:17 | está e nem deve estar programando pro computador, você programa pra outras pessoas. Entenda |
| 24:23 | essa verdade: o seu trabalho não é programar pro computador e sim pra que outras pessoas |
| 24:28 | entendam. Incluindo você daqui alguns dias ou meses. Se como eu você curte retrogames, já deve ter assistido videos explicando os truques |
| 24:37 | que programadores faziam antigamente pra conseguir extrair o máximo de máquinas de processadores |
| 24:43 | super fracos como o Z80 ou 6502, com quase nada de RAM, na faixa de 2 kilobytes. Pensa |
| 24:49 | que o Super Mario World inteiro, com todos os gráficos, fases e lógica ocupa meio megabyte. |
| 24:56 | Em meio megabyte hoje você não consegue fazer nada. |
| 25:02 | Qualquer página web simples precisa de múltiplos megabytes. E isso porque antigamente ciclos |
| 25:08 | de CPU e RAM eram hiper caras. Pelo mesmo preço que se comprava um Nintendinho nos anos 80, hoje você compra um Playstation 5. Literalmente, no começo dos anos 80 um |
| 25:18 | nintendinho custava quase 180 dólares, que se ajustar pra inflação dá quase 500 dólares, |
| 25:24 | que é o preço de um PS5. Por isso antigamente era hiper importante economizar ciclos e bytes ao máximo, mesmo |
| 25:32 | que fosse ao custo de dificultar a vida dos programadores, porque o custo do hardware era muito maior que o custo de programadores. 10 kilobytes a mais de RAM que desperdiçasse |
| 25:42 | em 1983 era 200 dólares a mais. Por isso escovar bits era a coisa mais importante. |
| 25:49 | Mas o tempo passou e agora 200 dólares você compra mais de 16 giga de RAM. Por isso que desperdiçar 1 ou 2 gigas de RAM, por mais absurdo que pareça, não é mais grande coisa. |
| 25:59 | Por outro lado o que subiu foi a hora de programador. Se o programador tem que gastar o dia todo |
| 26:04 | pra descobrir que diabos é esse número 7 e que a conta original era 1 + 2 * 3, que |
| 26:10 | se estivesse explícito no código ia custar 2 segundos pra entender, faz muita diferença. |
| 26:16 | Toda boa prática de código é feito pra economizar hora de programador e não hora da máquina. E mesmo se você trabalha sozinho, as boas práticas e código limpo continuam |
| 26:25 | fazendo sentido, porque o você de amanhã, às 2 horas da manhã numa emergência, vai |
| 26:30 | te agradecer por ter feito tudo organizado e fácil de ler. Lógico, não estou dizendo que você não tem que saber programar direito sabendo como |
| 26:39 | a máquina vai se comportar. Nem o melhor compilador do mundo vai melhorar seu código bosta que dá "select *" numa tabela gigante do banco só pra pegar uma linha, porque ele |
| 26:49 | não tem como saber, durante a compilação, que pode ter uma tabela de um milhão de linhas sendo consumido e causando vazamento de memória. Ele vai fazer o melhor possível, mas não |
| 26:59 | existe limites pra programador ruim dificultar a vida do compilador. Mas a tecnologia de compiladores não serve só pra cuspir binários otimizados. Aquela |
| 27:09 | árvore de sintaxe abstrata, a AST é útil pro programador. Sabe quando no VSCode você |
| 27:15 | instala uma extension pra Javascript que roda o jslinter e ele marca no seu código onde |
| 27:20 | tem problemas e possíveis bugs? Essa análise é feita em cima da AST. Ele não tá olhando |
| 27:26 | o texto do seu código. Por baixo dos panos ele passou pelo parser do V8, gerou a estrutura de árvore e tá |
| 27:33 | processando os nós dessa árvore. Os nós podem conter metadados que apontam de volta |
| 27:39 | qual linha do código que representa, e assim dá pra analisar e devolver a análise pro editor mostrar bonitinho pra você. Todo linter funciona assim. Um linter ou ferramentas de |
| 27:49 | análise estática, tentam te orientar pra escrever código melhor e apontar coisas que seriam ambíguas pro compilador, daí ele pode te dizer o equivalente a "tem certeza |
| 27:59 | que é isso que você quer fazer?" O que mostrei até aqui é a fase de parsing. Essa idéia de criar uma gramática livre |
| 28:06 | de contexto veio de ninguém menos que John Backus, criador do Fortran, provavelmente |
| 28:11 | a primeira linguagem de alto nível de sucesso comercial, lá nos anos 60. E não só ele |
| 28:16 | fez a linguagem como se inspirou nos trabalhos de pesquisadores como o grande Turing ou Noam Chomski, cujo foco era linguagens no termo mais genérico, tipo língua portuguesa ou |
| 28:26 | inglês, mas os resultados poderiam ser aplicados em linguagens de computador. O Backus inventou essa idéia de uma linguagem que descreve outra linguagem, ou seja, uma |
| 28:35 | meta-linguagem, e usou pra definir uma nova linguagem chamada IAL, que viria a se tornar |
| 28:41 | o ALGOL. Muita gente costuma pensar em C como o avô das linguagens, mais por causa dos blocos com chave e statements terminando com ponto e vírgula. Outros consideram o C muito |
| 28:52 | novo pra ser avô e o verdadeiro avô seria o COBOL. Mas eu penso diferente. No máximo, COBOL é mais avô de coisas como linguagens de stored procedures de banco de dados. A real linguagem avô do que chamamos de "linguagens |
| 29:06 | de uso genérico", anterior ao C, é o ALGOL. Antes do C ser inventado, o Ritchie e Kerninghan |
| 29:12 | trabalharam no BCPL que poderíamos chamar de linguagem "B" e pra mim a linguagem "A" |
| 29:17 | é o ALGOL. Antes que alguém comente, sim, eu sei, não é exatamente assim. ALGOL foi um linguagem |
| 29:23 | criada por comitê e, como tudo que é gerado por comitê, ficou uma linguagem bloated, |
| 29:29 | complexa, gorda. Daí na universidade de Cambridge em Londres surgiu o CPL que é o Combined |
| 29:35 | Programming Language, mas que obviamente muitos poderiam chamar de Cambridge Programming Language, |
| 29:40 | pra ser o "ALGOL com os pés no chão". Acabou não sendo muito bem aceita, a intenção |
| 29:45 | foi melhor que a implementação. Povo de javascript já viu episódios desse tipo, como yarn querendo ser npm melhorado, ou Deno querendo ser Node melhorado. |
| 29:54 | Ainda em Cambridge tentaram simplificar o CPL com o Basic CPL ou BCPL do Martin Richards, |
| 30:02 | pra ser "só as coisas boas do CPL". Poucos anos depois o Ken Thompson chefiou o projeto |
| 30:08 | de UNIX pras máquinas PDP/11 e fez um compilador pra uma versão reduzida do BCPL que chamou |
| 30:14 | de linguagem B. Mas tanto BCPL quanto B eram limitadas. B era alto nivel demais e como |
| 30:19 | eu disse antes, isso custava recursos escassos e caros de hardware. Por esses e outros problemas, |
| 30:24 | surgiu Dennis Ritchie pra reescrever a linguagem que seria a sucessora do B pra ser mais "próxima |
| 30:30 | da máquina" e daí surgiu o C. Mas independente disso, está claro que as raízes das principais funcionalidades que |
| 30:37 | reconhecemos hoje numa linguagem de uso geral surgiram com o Algol e por isso podemos considerar |
| 30:44 | que ela é a verdadeira linguagem A. E a linguagem C é a versão que realmente vingou e serviu |
| 30:50 | de inspiração pra linguagens mais modernas como C++, Objective-C, que inspiraram depois |
| 30:56 | Java, Python, C# e todo o resto que vocês usam hoje. De qualquer forma, o cientista da computação Peter Naur reconheceu o poder da idéia de |
| 31:05 | metalinguagem do Backus e como já existia o termo "Chomski Normal Form", ele decidiu |
| 31:10 | que a notação do Backus deveria se chamar "Backus Normal Form" ou BNF. Mas tecnicamente |
| 31:16 | não era uma forma normal, como apontou o lendário Donald Knuth e foi ele que sugeriu que BNF deveria ser pra "Backus-Naur Form", e é assim que chamamos até hoje. |
| 31:26 | Mas como falei antes, poucos programadores hoje, eu incluso, estudam as definições matemáticas por trás das notações de linguagens, com o rigor que deveria, porque ferramentas |
| 31:36 | como flex, bison, yacc simplificam tudo isso e a gente tem mais que se preocupar com o |
| 31:41 | design da linguagem propriamente dita, que começa em escrever a tabela de lexemes e |
| 31:46 | a gramática no formato que mostrei antes. Em particular, se tiver interesse em estudar mais sobre geradores de parsers, a que eu vejo que povo considera mais moderna é o |
| 31:55 | ANTLR, que por acaso é feita em Java. Um parser não serve só pra compilar linguagens de programação. Pense um arquivo de configuração |
| 32:03 | em YAML ou um JSON. Ambos não deixam de ser linguagens, só que declarativas e não de |
| 32:09 | programação. Ambas precisam de um parser e de fato, pra transformar um YAML ou JSON |
| 32:15 | num objeto de javascript, ou um Hash em Python, precisa de um lexer e de um parser. |
| 32:20 | Sabe quando você carrega um arquivo texto de HTML num navegador e agora dá pra inspecionar usando as ferramentas de debug? Você que é de front-end sabe disso, ele se transforma |
| 32:30 | no tal do DOM ou Document Object Model. E o que é o DOM? É uma árvore, é resultado |
| 32:36 | de passar o HTML por um parser. E como o navegador desenha as coisas na tela? Navegando pode |
| 32:42 | Node a Node do DOM. O DOM está pra HTML assim como AST está pra uma linguagem de programação. |
| 32:48 | E da mesma forma que você pode modificar nós do DOM, o compilador manipula nós do AST pra melhorar seu código e gerar binários mais eficientes. |
| 32:58 | Tanto o que você chama de compilador quanto o que chama de interpretador começam com |
| 33:03 | um lexer e um parser. Mas a história não acaba aqui. Agora vem a parte interessante da história. Lembra quando fizemos o disassembly do binário compilado de Java? Ele não era |
| 33:13 | uma árvore né, era uma sequência de instruções, o que em Java se chama de bytecodes. Depois |
| 33:18 | que o javac gerou o AST, checou que a sintaxe tá correta e as dependências estão corretas, |
| 33:24 | daí navega nó a nó da árvore e cospe os bytecodes correspondentes pra gerar o arquivo |
| 33:30 | ".class" no final. Vamos recapitular, o que é um bytecode? É literalmente isso, um código de byte. Cada |
| 33:37 | instrução como aquela aaload, iload, imul, iadd são mnemônicos pra um código binário. |
| 33:43 | Por exemplo, aaload é o hexadecimal 32 ou o binário 0011 0010. Lembra, a máquina hardware, |
| 33:50 | a CPU, só entende binário e internamente tem instruções que são representadas por |
| 33:55 | certas sequências de bits. Assista o episódio de Hello World ou outros videos da série "Como Computadores Funcionam" |
| 34:02 | pra relembrar disso. Mas agora vem uma pergunta, que diabos de instrução é isso de aaload, |
| 34:08 | iload, imul. Isso não é assembly de x64, que é o que roda em Intel ou AMD aí no seu |
| 34:14 | PC ou notebook. Também não são instruções de ARM como os Mac M1 ou Qualcomm do seu Android. |
| 34:20 | Que diabo de instruções são essas? E aqui vem a parte que confunde a diferença entre um compilador puro e um interpretador. Essas instruções são pra uma máquina virtual |
| 34:30 | que não existe em forma de hardware. Se existisse um chip de Java - e nos anos 90 a Sun até queria mesmo fazer um chip de |
| 34:37 | verdade Java -, essas seriam as instruções. Mas esse chip não existe, o que existe é |
| 34:43 | a JVM, que literalmente significa Java Virtual Machine. Todo programa Java roda numa máquina |
| 34:51 | virtual. Por similaridade, todo programa Python roda numa máquina virtual Python. Todo programa |
| 34:56 | Javascript roda numa máquina virtual Javascript, como o Google V8 ou Mozilla SpiderMonkey. |
| 35:02 | Todo navegador web vem embutido com uma máquina virtual. E sim, máquina virtual como um Virtualbox |
| 35:08 | ou VMWare, já pararam pra pensar nisso? A gente tá acostumado a pensar em máquina virtual só como um Virtualbox ou Parallels |
| 35:16 | ou erroneamente um Docker - que não é máquina virtual. Pensamos como programas que podemos |
| 35:21 | instalar num Mac M1 pra conseguir rodar outros programas compilados como binários de Intel |
| 35:27 | e interpretar em tempo real pra rodar numa máquina ARM. Tecnicamente, toda máquina |
| 35:33 | virtual é um interpretador, no sentido que ele interpreta uma instrução de uma máquina pra instrução de outra máquina. |
| 35:39 | Pra quem é de Python, quando chamamos `python -c compileall .`, ele vai pegar todos os arquivos |
| 35:46 | texto com extensão `.py` e transformar em `.pyc` ou `.pyo`. Pra isso o código texto |
| 35:52 | vai passar por um lexer, por um parser e no final o AST resultante é transformado em instruções pra uma máquina virtual de Python. Aí ele serializa e salva esse AST num binário |
| 36:03 | ".pyc". O que chamamos de "interpretador" é um caso especial de máquina virtual. Alguns também chamam isso de "runtime", mas são só nomes diferentes pra mesma coisa. Pra |
| 36:12 | todos os efeitos e propósitos, seu programa Python tá rodando numa máquina virtual. O Javascript do seu navegador ou no Node.js também. |
| 36:21 | Dentre várias coisas que podem ser diferentes é que normalmente quando falamos de interpretadores |
| 36:26 | é quando temos algumas facilidades de desenvolvimento, como um REPL que é acrônimo pra Read-Eval-Print-Loop, |
| 36:33 | que é a linha de comando que abre quando você digita `python` ou `node` no terminal e pode sair digitando código que ele vai executando imediatamente, ou seja, ele lê, |
| 36:42 | faz evaluation, imprime o resultado e volta pro loop e fica nisso até apertar `Ctrl+D` |
| 36:48 | pra sair. Aliás, a linha de comando do seu terminal, seja Bash, ZSH ou Fish, é um interpretador |
| 36:55 | também. Sendo mais específico, um interpretador costuma manter o AST num formato que podemos modificar, |
| 37:03 | depois dos arquivos do programa terem todos passados pelo parser. Toda vez que dentro do console de Python a gente define um novo método, estamos adicionando nós na árvore |
| 37:12 | AST. É isso que define o que muitos chamam de "linguagem dinâmica". Mesmo Java, apesar |
| 37:17 | de mais chatinho, tem como modificar o AST que tá em memória. Eu posso mandar o classloader |
| 37:22 | da JVM carregar outros arquivos ".class" que ainda não tinha carregado, ou usar a API de Reflection pra modificar o código em tempo real. |
| 37:31 | Claro, apesar de parecerem máquinas virtuais, interpretadores são diferentes de um VirtualBox. |
| 37:36 | Um VirtualBox da vida de fato tenta ao máquina esconder tudo sobre a máquina host por baixo, |
| 37:42 | pra fazer os programas rodando dentro acreditar que estão numa máquina de verdade. Quando um programa lá dentro pede pra fuçar o disco, o Virtualbox vai dar pra ele um disco virtual |
| 37:52 | e não acesso ao disco de verdade. Quando o programa pede pra conectar na internet, ele não vai ter acesso ao TCP da máquina |
| 37:59 | de verdade, mas sim à uma rede virtual interna, como se fosse uma rede externa separada que |
| 38:04 | faz ponte com a rede da máquina de verdade. E assim por diante. Já um interpretador não |
| 38:10 | tenta esconder nada. Quando o programa de python pede acesso ao disco, o interpretador dá acesso ao disco de verdade. Quando o programa pede pra abrir um socket de rede, ele passa |
| 38:19 | pela rede de verdade. Então tecnicamente sim, Java é uma linguagem compilada porque no final gera um binário |
| 38:26 | com instruções de máquina. Só que não são instruções de Intel ou ARM e sim pra JVM, uma máquina só virtual. Por outro lado, ela é interpretada porque a máquina pra |
| 38:36 | qual ela foi compilada não existe e pra rodar depende de um interpretador que entende essas |
| 38:42 | instruções e vai converter pras instruções da máquina host de verdade, como um Intel |
| 38:47 | x64. O mesmo vale pra Python, Javascript, Ruby, PHP. E eu sei, já estou vendo você aí já indo ferozmente pros comentários pra discordar, porque eu ainda não mencionei |
| 38:56 | JIT, segura a onda aí! Já vou voltar no assunto de interpretadores e máquinas virtuais, mas o importante é |
| 39:02 | saber que depois da fase de parsing, o objetivo é transformar a árvore abstrata de sintaxe |
| 39:08 | em instruções de máquina, seja lá pra qual arquitetura de CPUs: uma de verdade como |
| 39:13 | x64 ou arm64 ou uma virtual como a JVM. A história não acaba aqui. |
| 39:19 | Mesmo o compilador de C como GCC ou o clang de LLVM não sai da AST depois do parsing |
| 39:26 | e já transforma direto em instrução de Intel. Não, acho que hoje em dia praticamente todos os compiladores trabalham com uma representação intermediária. O compilador de DotNet, por |
| 39:36 | exemplo, chama isso de Intermediate Language ou IL. No mundo LLVM isso se chama Intermediate |
| 39:42 | Representation ou IR. No mundo do GNU Compiler Collection ou GCC que todo mundo conhece, |
| 39:48 | ele trabalha com RTL que é o Register Transfer Language. No mundo de shaders como pra rodar |
| 39:54 | em Vulkan no SteamDeck, existe o padrão Standard Portable Intermediate Representation ou SPIR-V. |
| 40:01 | E o que diabos é isso de linguagem intermediária? Agora é a parte da mágica que eu falei antes que vou simplificar bastante, entenda que |
| 40:09 | essa parte é absurdamente extensa na realidade. Vou usar o exemplo mais besta de todos. Lembra |
| 40:15 | aquele exemplo da calculadora que escrevi em Java pra dar print em `1 + 2 * 3` e depois |
| 40:20 | de compilar, fizemos o desassembly pra ver as instruções e só tinha um `bipush` direto |
| 40:26 | do resultado 7? Pois é, o compilador foi inteligente em saber que não precisa traduzir instrução a instrução, a multiplicação e soma e, em vez disso, já pré-calculou |
| 40:35 | e deixou direto o resultado, economizando várias instruções. Ou seja, ele otimizou o código e deixou tanto mais rápido quanto economizou ter que guardar os números 1, |
| 40:44 | 2 e 3 na memória. Essa é a otimização mais trivial e besta de todas, mas o compilador tem a capacidade |
| 40:50 | de fazer centenas de outras otimizações. Por exemplo, digamos que seu código tenha trechos que nunca usa. Dependendo da linguagem e agressividade da otimização, ele pode |
| 41:00 | até escolher jogar fora esse trecho e nem traduzir. Sim, o compilador pode escolher jogar seu código fora. Ele pode simplificar chamadas. Se a ordem dos fatores não influir |
| 41:10 | no resultado, pode mudar a ordem do seu código pra CPU processar de forma mais eficiente. |
| 41:16 | Essa fase de otimização pode passar por todo o código mais de uma vez, é o que se chama de "passes". Isso pra conseguir fazer coisas como achar constantes duplicadas e |
| 41:25 | fazer ambas apontarem pro mesmo lugar. Eliminação de código morto, ou seja, trechos que nunca |
| 41:31 | são executados e podem ser eliminados. Tail Call elimination, pra remover chamadas recursivas |
| 41:36 | que podem ser otimizadas. E muito, muito mais. Isso é o que o LLVM chama de Transformation |
| 41:43 | Passes. Entre aspas é como se você tivesse um Linus Torvalds e um John Carmack juntos, reescrevendo |
| 41:49 | seu código da maneira mais otimizada possível. Na prática essa etapa é o real trabalho |
| 41:54 | de um compilador e onde se gasta mais tempo e mais recursos, porque tem um gerador de código varrendo tudo que você escreveu, exaustivamente, várias vezes, e reescrevendo |
| 42:05 | da melhor forma que se conhece sem quebrar, nem gerar bugs. Agora, imagine o seguinte: tá vendo essa lista de transformações e otimizações? |
| 42:13 | Imagine se toda vez que inventa uma nova linguagem, se precisasse reescrever todas essas estratégias |
| 42:19 | tudo de novo pra linguagem nova. Seria um trabalho absurdo, que ia gerar dezenas de |
| 42:24 | bugs, e as otimizações seriam ruins porque criar essas rotinas levou anos e milhares |
| 42:30 | de horas homens pra aperfeiçoar até ficarem perfeitas. Por isso que o comum é que toda nova linguagem, no final do parsing, seja convertida numa linguagem intermediária, |
| 42:40 | que é sempre igual. E essa linguagem costuma ser tipo um assembly pra uma máquina virtual, |
| 42:45 | que não precisa se preocupar nesse ponto com as limitações de design e legado de uma CPU de verdade com um x64. |
| 42:52 | Daí todas essas estratégias de otimização são executadas nessa linguagem interdiária. |
| 42:58 | Um compilador como GCC ou derivados de LLVM na verdade são programas grandões que podemos |
| 43:03 | dividir em 3 grandes funções diferentes. O primeiro é o front-end, que tem a responsabilidade |
| 43:09 | de pegar linguagens como C, C++, Go, Rust, Swift e fazer o lexing, o parsing, gerar a |
| 43:15 | árvore de sintaxe e dela cuspir as instruções de máquina virtual intermediária, sem quase |
| 43:21 | nenhuma otimização. Essas instruções intermediárias são o RTL, no caso de GCC, ou IR no caso |
| 43:28 | de LLVM, ou IL no caso de DotNet. O clang de LLVM seria o front-end de C pra LLVM, o |
| 43:36 | conjunto das definições de lexer e gramática do parser. Agora o 2o programa pega esse IR não otimizado e gasta um tempão lendo, relendo e reescrevendo, |
| 43:47 | e a saída vai ser outro IR agora totalmente otimizado. Esse programa do meio poderia ser |
| 43:52 | chamado de "middle-end". E relembrando, cada uma das otimizações ou transformation passes |
| 43:58 | que ele faz poderia ser tema de um paper de Ph.D. Não são coisas triviais como o exemplo |
| 44:04 | que eu mostrei. E finalmente temos o 3o programa, que chamamos de "back-end", que vai pegar o IR otimizado e traduzir finalmente pras instruções da máquina de verdade, ou seja, |
| 44:15 | converter de instruções assembly de IR pra instruções assembly de x64 ou arm64 da vida. |
| 44:21 | E esse é o binário final que pode ser executado. Toda vez que que eu quiser inventar uma nova linguagem é só fazer as partes de lexer |
| 44:30 | e parser, fazer só a parte que é o front-end dessa nova linguagem. É pra isso que servem ferramentas como o ANTLR que eu mencionei antes. É isso que linguagens como Rust fizeram |
| 44:40 | quando construíram o compilador em cima de LLVM. Ele pode deixar um compilador que já |
| 44:46 | existe otimizar o que puder. Num primeiro momento, o criador de uma nova linguagem não precisa refazer tudo do zero, pode reaproveitar o que já existe, porque uma vez tendo IR, |
| 44:56 | o resto é igual. A preocupação inicial dele é só fazer um parser que converte sua |
| 45:02 | linguagem em IR, como um transpiler que converte TypeScript em Javascript, por exemplo. |
| 45:08 | Quando um designer de chips como uma Apple inventa um novo como os tais M1, ele só precisa |
| 45:14 | fazer a parte back-end, a parte que pega o IR já otimizado e converte em instruções |
| 45:20 | de máquina. Amanhã a Qualcomm lança um novo chip SnapDragon ARM, ele só precisa |
| 45:25 | atualizar o back-end do compilador, todo o resto continua igual. A AMD lança a nova série 6000 do Ryzen, só precisa atualizar o back-end dos principais compiladores se |
| 45:35 | teve alguma mudança nas suas instruções. Entenderam? Eu expliquei isso no video de Apple e GPL, mas além obviamente do hardware, qual é |
| 45:43 | o grande segredo da Apple em conseguir migrar tudo pra M1 tão rápido? É eles terem investido |
| 45:48 | quase 2 décadas melhorando suas tecnologias de compiladores em cima de LLVM. Com isso |
| 45:54 | conseguiram migrar de PowerPC pra Intel nos anos 2000 e com isso migraram de Intel pra |
| 46:00 | ARM muito rápido. E tudo que só o compilador não consegue resolver, eles tem como desenhar |
| 46:05 | no chip pra compensar. E com isso temos as performances absurdas que vocês assistem |
| 46:10 | nos diversos reviews de como programas originalmente compilados pra Intel rodam liso em ARM sem |
| 46:17 | recompilar, só sendo interpretados em tempo real. Se você é um cientista da computação e tem vontade de criar uma nova linguagem, provavelmente |
| 46:25 | vai começar fazendo um front-end pra LLVM. Assim saíram linguagens como Rust da Mozilla, |
| 46:31 | Julia, Crystal e outros. Pouquíssimas empresas tem capacidade pra fazer um compilador do |
| 46:37 | zero com todos os tipos possíveis de otimização. Java tem otimizador próprio desde a era da |
| 46:43 | Sun e depois passou pra Oracle e tem dezenas de empresas que investem em pesquisa pra continuar melhorando. O DotNet tem a Microsoft, que também investe pesado em pesquisa. E no meio |
| 46:53 | disso tem o Javascript e o V8 do Google. Agora, qual a diferença de C, Java e Javascript? No final do dia quer dizer que C é compilado |
| 47:03 | porque gera binário nativo de máquina, mas Java e Javascript são interpretados? Não, |
| 47:08 | no final do dia, todos geram binário nativo de máquina usando estratégias diferentes, |
| 47:13 | pra resolver problemas diferentes. A estratégia de C se chama ahead of time compiling ou AOT. |
| 47:20 | E no Java e Javascript eles usam Just in Time compiler, o famoso JIT. E mesmo JIT tem diversas |
| 47:26 | estratégias diferentes. Vou fazer outro exemplinho bem besta só pra vocês terem uma imagem na cabeça. Vamos |
| 47:32 | voltar pro exemplo em Java de fazer um cálculo. Quem lembra como calcula a circunferência de um círculo? Lembra? Duas vezes Pi vezes Raio? 2 pi r. Então vamos fazer uma nova |
| 47:43 | classe, método estático main, e System.out.print, 2 vezes 3.141592 etc que é PI mas vou colocar |
| 47:51 | poucos dígitos pro exemplo, e vezes 10 que é o raio que quero usar. Salvamos, saímos, compilamos com `javac`, rodamos e voilá, 62.83 bla bla é a circunferência pra um |
| 48:01 | raio 10. Se fizermos disassembly com `javap` olha aqui embaixo essa instrução `ldc2_w` que puxa |
| 48:09 | uma constante do pool de constantes e manda pra stack, e no comentário gerado temos que |
| 48:14 | essa constante é um double 62.83 bla bla que é o valor pré-calculado. Ele fez a mesma |
| 48:20 | otimização que no caso do `1 + 2 * 3`. Top, é o esperado. Mas como eu disse antes, olha |
| 48:25 | como essa continha no código é feio, mesmo sendo simples. Quem curte código limpo tem gatilho só de ver isso. Dá pra melhorar isso. |
| 48:33 | Vamos escrever uma nova classe. Eu poderia começar definindo uma constante double chamada PI e escrever ali, 3.141592. Mas isso seria idiota porque obviamente Java já tem uma |
| 48:43 | constante estática double de PI, que tá na classe Math. Ah, mas como eu ia adivinhar? |
| 48:49 | Sempre pense: coisas triviais assim, as chances são que já existe. Na dúvida procurar no Google, "Java constant PI" e olha só, nos primeiros links já vem Math.PI. Quando você |
| 48:59 | não acha as coisas não é que não existem ou são difíceis de achar, você que não procurou direito. |
| 49:04 | Enfim, continuamos fazendo uma função estática que retorna double chamada `circunferencia` |
| 49:09 | que recebe como argumento uma variável double chamada `raio`. Dentro calculamos o 2 vezes |
| 49:15 | `Math.PI` vezes a variável raio. E agora sim, no método `main` vamos dar `System.out.print`, |
| 49:22 | como antes, mas o argumento vai ser o resultado do método `circunferencia` passando o valor 10. Pronto, salvamos, saímos, compilamos com `javac` e executamos e tá aí, 62.83 |
| 49:32 | bla bla como tinha dada na outra versão. Compara a versão antiga com a nova. Ficou maior, mas a intenção do código tá muito |
| 49:40 | mais clara. Se daqui 1 mês eu for editar esse código, dá pra saber o que ele faz imediatamente. E claro, dava pra ter feito bem mais bonito que isso, fazer uma classe |
| 49:49 | chamada `Circulo` ou um módulo chamado `Geometria` ou qualquer coisa assim, mas hoje não é design de orientação a objetos, então não impliquem muito com isso hoje. |
| 49:57 | Mas vamos ver como fica fazendo disassembly com `javap` e olha que estranho, tem a instrução |
| 50:03 | `ldc2_w` que puxa a contante 10 que é o raio que eu defini e puxa pra stack, daí invoca |
| 50:09 | a função `circunferencia` e dá jump aqui pra cima. Daí faz outro `ldc2_w` pra puxar a constante de PI pra stack também, na verdade a constante de `2 * Pi`, veja o comentário |
| 50:19 | que ele gerou mostrando que é o dobro de PI, então ele otimizou isso. Mas aí chama a instrução `dmul` que é multiplicação de double e desempilha os últimos dois valores |
| 50:27 | que colocamos na stack pra calcular, retorna e finalmente dá `invokevirtual` no printf |
| 50:32 | pra imprimir na tela. Mas `2 * pi * 10` é tudo constante, porque ele não otimizou o suficiente pra arrancar |
| 50:39 | fora essa função `circunferencia`, ela não seria desnecessária? Eu não disse que o compilador reescreve tudo pra ficar mais eficiente? Não dava pra ter pré-calculado como antes |
| 50:49 | e só guardar a constante com o resultado final? Então, aqui que a coisa começa a complicar. Toda função que criamos no Java se torna uma interface. Se o compilador quisesse |
| 50:58 | ser agressivo ele poderia arrancar tudo fora e deixar só a constante, porém a gente não sabe se ninguém mesmo vai usar essa função. Lembra? Java também é uma linguagem interpretada, |
| 51:09 | dinâmica, cujo código pode ser alterado dentro da JVM. Se pensar isoladamente só nessa classe, não teria problema, mas classes Java não vivem |
| 51:18 | no vácuo, elas foram pensadas pra serem reusadas. Por exemplo, no mesmo diretório posso criar |
| 51:24 | um novo arquivo e escrever uma nova classe assim, fazendo de novo um `System.out.print`, |
| 51:30 | chamando `Calc3.circunferencia` direto assim mesmo e passando 20 como raio. Se eu sair |
| 51:35 | e compilar só esse arquivo calc5.java, posso executar `java Calc5` e tudo funciona. Note |
| 51:42 | que nem na hora de compilar e nem na hora de executar eu mencionei o Calc3, porque ele tá no mesmo diretório, então quando a JVM carrega a classe Calc5 automaticamente faz |
| 51:51 | o Class Loader carregar o Calc3 junto. Mas ele não precisou recompilar o Calc3 de novo. |
| 51:57 | E se eu apagar o Calc3.class e tentar executar o Calc5? Agora vai dar a erro de `NoClassDefFound`. |
| 52:04 | Faz sentido né? Java foi feito de tal maneira que eu não preciso recompilar tudo do zero |
| 52:09 | toda vez que alguma coisa muda. Ele compila cada classe individualmente, e pra garantir que outras classes não quebrem, pelo menos mantém a interface entre eles estável, o |
| 52:19 | que significa que não pode sair otimizando demais e eliminando métodos, mesmo se naquela classe ela não é usada. E mesmo se eu tivesse declarado como `private`, ainda assim não |
| 52:29 | daria pra apagar o método, porque Java tem sistema de Reflection que permite manipular métodos privados. Portanto, qualquer otimização que quebre a interface não pode ser feita. |
| 52:39 | Antes de continuar, agora precisamos entender rapidamente o que é uma interface. No mundo |
| 52:44 | binário, não existe o conceito de abstração, tudo são instruções e endereços. Quando precisa chamar uma função, a máquina na verdade vai guardar o endereço que estamos |
| 52:53 | executando na pilha, vai fazer o jump, vai executar o que precisa, e no final vai retornar pro endereço que tinha guardado, pra continuar de onde parou. Eu expliquei isso no video |
| 53:02 | do Hello World. Agora, pra isso funcionar, quando eu compilei a classe Calc3, o compilador precisaria ter |
| 53:07 | anotado que a função `circunferencia` vai estar disponível num endereço X, faz de conta 9000 0000. Daí quando eu compilei a classe Calc5 que chama essa função, nesse |
| 53:19 | ponto o compilador precisaria saber que precisa escrever um jump pro tal endereço 9000 0000. |
| 53:24 | Mas lembram que eu não passei o Calc3 como parâmetro nem nada? Como que o Java sabe |
| 53:29 | pra qual endereço tem que dar jump? Aqui estou especulando, mas imagino que quando a JVM carrega essas classes, nesse momento |
| 53:36 | que ela vai preenchendo uma tabela interna que diz, "ok, carregar classe Calc3, ela tem um método circunferencia, vou colocar ela no endereço que tem vago aqui, 9000 0000". |
| 53:46 | Depois carrega a Calc5 e quando executa a função `main` dela e de lá pede pra chamar a função `circunferencia`, daí a JVM intercepta essa chamada e consulta sua tabelinha "hmmmm, |
| 53:57 | essa função é a que eu coloquei no endereço 9000 000, pula pra lá". Portanto os endereços |
| 54:03 | não estão nas classes, elas são atribuídas na hora que a JVM carrega elas. Vamos abrir o disassembly de novo, começa executando lá da linha 0 e vai indo. Uma |
| 54:12 | hora esbarra nessa linha 6, que tem um `invokestatic` passando um índice 15. Ele olha lá na tabela |
| 54:18 | interna dele e vê "ah, número 15 é o endereço 9000 0000" e aí dá o jump pro lugar certo. |
| 54:25 | Eu simplifiquei mas justamente porque os endereços finais são definidos quando carrega o módulo e não quando compila, dá pra compilar as classes independentes uma da outra, como eu |
| 54:35 | fiz aqui, compilando individualmente os dois arquivos, porque a JVM é quem vai gerenciar os endereços em tempo de execução. |
| 54:42 | Porém, linguagens como C, C++, Swift, Go, Rust, Crystal, e outras não tem um interpretador |
| 54:48 | ou máquina virtual pra controlar isso, portanto cada parte de cada módulo sendo compilado |
| 54:54 | precisa já saber o endereço final das coisas, senão na hora de executar não ia achar nada. |
| 54:59 | Como que faz? E aqui vem outro conceito de compilador que vou simplificar ao máximo. Pensa, se eu tivesse |
| 55:05 | um projeto com mil arquivos, onde uma função num arquivo pode chamar funções em outros |
| 55:10 | arquivos, seria uma zona pra compilar. Toda vez que eu mudo uma linha num arquivo, precisaria recompilar todos os mil arquivos pra garantir que os endereços de todo mundo estão corretos |
| 55:20 | e eu não apaguei uma função ou deu conflito de endereços ou duplicou endereços sem querer. Então na realidade, tanto o GCC quanto um clang de LLVM quanto um rustc de Rust, vão |
| 55:31 | quebrar a parte final da compilação em duas etapas. Se você é de Linux e já instalou um pacote que compila a partir do código fonte, já |
| 55:39 | deve ter esbarrado num `Makefile`, que nada mais é do que um script que automatiza a função de checar dependências, se tudo que precisa pra compilar tá instalado. Pra |
| 55:48 | você que é de Javascript é o equivalente a um package.json. Pra você que é de Python é tipo um requirements.txt. Ele chama o compilador pra todos os arquivos do projeto. O que costuma |
| 55:58 | aparecer na tela enquanto compila? Um monte de arquivos `.o` sendo gerados. Esses ".o" são objetos, simplificando, eles são os binários compilados a partir de código |
| 56:09 | fonte de C de cada arquivo. Vamos abrir o hello.c lá do começo. Tão vendo esse `include |
| 56:14 | ` na primeira linha, isso indica pro compilador procurar por um arquivo de cabeçalho chamado `stdio.h` que tem que estar no Path do sistema. Nesse arquivo vai constar a interface |
| 56:24 | da função `printf` que usamos lá embaixo. Se olharmos nesse arquivo tá dizendo que o `printf` é uma função que retorna inteiro e recebe como parâmetro um ponteiro constante |
| 56:32 | de char, basicamente um array de chars, e tem outros argumentos opcionais. Sem entrar muito em detalhes sobre o C, ter essa interface permite o compilador saber |
| 56:42 | se quando estamos usando a função `printf`, se tá da forma correta. Porém, no momento da compilação do arquivo `hello.c` pro objeto binário `hello` ele ainda não sabe qual |
| 56:51 | é o endereço onde encontrar a função, porque ela tá numa biblioteca externa, a |
| 56:56 | libc, que é compartilhada com outros programas no mesmo sistema que dependem dela. Praticamente |
| 57:02 | tudo numa distro Linux. No ponto onde chama o `printf` o compilador vai tipo deixar um post-it dizendo "confirmar |
| 57:08 | depois onde fica esse endereço". Se eu dependesse de outras bibliotecas externas, ia ficar deixando |
| 57:13 | vários post-its pra confirmar depois. Pra ilustrar, vamos fazer o disassembly do objeto hello usando o `objdump -d`. Olhar assembly sempre é meio intimidante, mas não tem problema, |
| 57:24 | só focar no pedaço que interessa que é a função `main` que começa aqui a partir do endereço 1139 em hexa. O `printf` é uma função então estamos procurando um `call`. |
| 57:35 | E no endereço 1147 temos um suspeito, um `call`, mas pra um endereço aqui perto, em |
| 57:41 | 1030. Vamos ver o que tem lá. E olha lá, tem um jump pra esse outro endereço e um comentário que é pra função `puts` da glibc. Se não estou enganado, quando se chama |
| 57:50 | o printf com o parâmetro opcional nulo, ele muda pra puts. Mas nessa linha, na primeira |
| 57:55 | fase do compilador, quando ele ainda não sabe os endereços, vai ter algo como um espaço em branco pro endereço, um post-it pra segunda fase confirmar o endereço. |
| 58:05 | Essa segunda fase é o trabalho de um linker, no caso do GNU LD. Até agora eu não precisei |
| 58:11 | chamar o linker manualmente porque o GCC faz isso sozinho pra gente. Mas se eu quiser manipular |
| 58:17 | vários objetos já compilados e transformar numa biblioteca compartilhada, como um `.so` |
| 58:22 | de Linux ou `.dll` de Windows, posso fazer isso com o comando `ld`. |
| 58:27 | Inclusive, o linker pode fazer otimizações em tempo de linking. Apesar do nome ser linker |
| 58:32 | que é linkar ou grudar os pedaços, ele pode modificar mais do binário. É ele que sabe |
| 58:37 | se é possível por exemplo fazer inlining. Lembra o exemplo besta de Java de circunferência? |
| 58:43 | Se fosse em C, como ninguém mais chama aquela função, ele poderia simplesmente copiar o conteúdo da função e colar no lugar onde a função é chamada. Isso evita no mínimo |
| 58:52 | uma instrução de jump e outra de return. Num programa maior tem muito mais ganhos. |
| 58:58 | No final, o compilador de C consegue analisar seu código e realizar um monte de otimizações e reescrever de uma forma otimizada, mas isso arquivo a arquivo independentemente, daí |
| 59:09 | o linker reavalia os binários gerados, liga os endereços de cada um onde precisa e ainda otimiza mais, o que diminui mais ainda o tamanho do binário, economiza mais memória e processamento |
| 59:19 | na hora de executar, e por isso programas em C e similares como Rust são tão rápidos. |
| 59:25 | Linguagens como Java, Javascript, Python, e outros não tem o equivalente de um linker |
| 59:30 | quando compilam do código fonte pra bytecode intermediário. Uma das razões disso é aumentar |
| 59:35 | a reusabilidade desses binários, o que também torna a fase de compilação menos demorada |
| 59:40 | que um C pra um projeto do mesmo tamanho. Porém o binário vai ser menos otimizado, |
| 59:46 | tecnicamente mais lento do que o equivalente gerado por C. Então é isso? C sempre vai ser mais performático que qualquer coisa? Não é bem assim. E agora voltamos pra Just |
| 59:54 | in Time Compiler, os JITs. Quando você carrega um projeto em Java, ele inicia a máquina virtual JVM, daí o class |
| 1:00:02 | loader começa carregando os arquivos binários `.class` do seu projeto e criando tipo uma tabelona interna que diz em quais endereços internos na memória estão quais classes |
| 1:00:12 | e quais funções, de forma que quando uma classe pede pra executar uma função de outra classe, a JVM vai intermediar e arbitrar mandando executar a função correta, devolvendo o |
| 1:00:22 | retorno e tudo mais. Um interpretador ou máquina virtual substitui a necessidade de um linker estático, porque |
| 1:00:29 | ele cuida disso dinamicamente. Então você pode imaginar que o C, que não tem esse intermediário |
| 1:00:35 | já precisa saber de antemão o endereço de tudo. Se de fato toda vez a JVM precisar ficar checando os endereços nessa tabela virtual pra cada chamada de função, seria |
| 1:00:44 | tudo lento mesmo. Mas claro que no mínimo ela faz cache disso pra ir mais rápido. Mas ela pode fazer mais. Ela analisa os códigos mais executados, por exemplo baseado em quais |
| 1:00:54 | caches são mais pedidos, os "pontos mais quentes" do programa, literalmente o HotSpot, |
| 1:01:00 | que é o nome da máquina virtual de Java quando ele ganhou capacidades de just in time compiling, ou JIT. |
| 1:01:06 | Se meu programa chamasse aquela função circunferencia diversas vezes sempre com o mesmo raio, em |
| 1:01:12 | vez de toda vez executar o cálculo, o JIT vai ser esperto e cachear o valor final. Muitas |
| 1:01:17 | das otimizações que eu falei que o linker faz no C em tempo de compilação, o JIT vai fazer durante a execução. Por isso que em Java você já tenha ouvido falar de "tempo |
| 1:01:26 | de aquecimento", ou warm up. Logo que inicia um servidor Java, ele vai ter uma performance |
| 1:01:32 | X que pode até parecer baixa, mas deixe rodando um tempo, e o mesmo código começa a executar mais rápido. O JIT é um otimizador em tempo real, aplicando mais e mais otimizações |
| 1:01:42 | nos códigos mais acessados. Esse JIT, no final, tá traduzindo o bytecode do Java em instruções nativas de máquina |
| 1:01:49 | de verdade mais otimizadas. É literalmente um compilador e mais ou menos um linkeditor |
| 1:01:55 | que só trabalha em cima de código que realmente é necessário. Se seu programa for grande e tem partes que raramente são acessados ou ninguém nunca acessa, eles continuam lá |
| 1:02:04 | sem serem otimizados. E o JIT vai fazendo cache do que vai otimizado, assim da próxima vez que alguém chamar essa parte, ele só executa o binário nativo de novo. E nesse |
| 1:02:14 | ponto, esse trecho do código pode estar quase tão rápido como se tivesse sido escrito em C. Claro, não é só isso que determina a performance final, mas o JIT diminui bastante |
| 1:02:23 | a distância entre traduzir bytecode Java de forma interpretada e um binário nativo |
| 1:02:29 | compilado de C. A mesma coisa acontece com Javascript no navegador. Navegadores baseados em Chromium, como o próprio |
| 1:02:37 | Chrome, Microsoft Edge, Opera, Brave, todos acabam usando a máquina virtual Google V8 pra executar Javascript. V8 na verdade é o nome de um conjunto de tecnologias de compilador |
| 1:02:46 | e máquina virtual, assim como Java ou Python. Internamente ele tem um lexer, um parser, |
| 1:02:52 | que vai cuspir um AST e que por sua vez vai gerar uma representação binária intermediária |
| 1:02:57 | em bytecodes específicos da máquina virtual do V8. Sim, o que roda no V8 não é javascript, são esses bytecodes. Repetindo, elas são |
| 1:03:06 | como instruções de um x64 de verdade, mas pra uma máquina javascript que não existe. |
| 1:03:12 | Nesse arquivo bytecode.h tem declarado todos os bytecodes. Vou deixar nas descrições abaixo pra quem tiver curiosidade. |
| 1:03:19 | Uma ver convertido em bytecodes, o interpretador do V8, que se chama Igniter, começa a traduzir |
| 1:03:25 | instrução a instrução. Não vai ser lento, mas também não vai ser a melhor performance. Assim como na JVM, ele vai ficar analisando a execução e perceber quais partes precisa |
| 1:03:34 | otimizar. Digamos que sua aplicação web baixou trocentas bibliotecas, por exemplo o arquivo inteiro do jQuery. Mas na real você só precisa da função `$()` pra achar um |
| 1:03:43 | elemento da página e a função `fadeToggle` pra criar uma transição animada de fade desse elemento. Todas as outras funções você não usa. |
| 1:03:51 | Se o V8 fosse burro e tentasse compilar tudo que sua página baixa, ele ia gastar um tempão |
| 1:03:57 | pra otimizar a biblioteca do jQuery inteiro, quando na verdade sua página só usa meia |
| 1:04:02 | dúzia dessas funções. Mas à medida que o usuário navega pelo site, o V8 acha os hotspots e agora é hora do Just in Time Compiler, do JIT, entrar em ação, no caso o Google |
| 1:04:13 | chama o JIT do V8 de TurboFan. É ele quem vai gastar memória e processamento pra otimizar |
| 1:04:18 | as partes mais usadas e gerar binário nativo de máquina otimizado, parecido com o que o Java faz, e jogar num cache em memória ou até em disco. E por isso programas em |
| 1:04:27 | Javascript costumam consumir muita memória. Por isso que tanto Java quanto Javascript conseguem atingir velocidades muito boas, |
| 1:04:35 | às vezes próximas de C mesmo sem terem sido agressivamente otimizadas por um compilador |
| 1:04:40 | antes. Mas por que se dar a tanto trabalho e não simplesmente compilar tudo antes como |
| 1:04:45 | o C faz? E isso não tem uma resposta única, mas se eu fosse resumir é o que define a |
| 1:04:51 | diferença entre linguagens estáticas e dinâmicas. A vantagem de C é que os compiladores amadureceram muito nos últimos 40 anos e o binário nativo |
| 1:05:00 | final que geram tendem não só a serem os mais rápidos em geral, mas também a ocupar bem menos espaço em disco e a consumir menos memória quando carregam. Por isso que a kernel |
| 1:05:09 | do Linux, drivers e coisas assim tendem a serem feitos com C, porque eu quero o mais |
| 1:05:14 | otimizado possível e que escale bem, pra rodar tanto num servidor de datacenter com centenas de núcleos de processador e terabytes de RAM quanto num mero Raspberry Pi com quase |
| 1:05:24 | nada de recursos. Uma vez que o binário tá compilado estaticamente, é tudo fixo e imutável, você não tem como |
| 1:05:30 | mudar o comportamento dele. Sim, se tiver muita paciência pra explorar coisas como injeção de código direto na memória do processo ou fazer patches de binários, explorar |
| 1:05:41 | exploits de segurança, aí você consegue mudar alguma coisa. Mas isso é na gambiarra. É o que a comunidade de mods de games faz também. Eles descobrem em qual endereço |
| 1:05:49 | da memória que fica o valor de vidas e eu injeto outro valor lá. Já mostrei isso no video do Super Mario. |
| 1:05:54 | Por outro lado pense no seu navegador web. A qualquer momento eu posso inspecionar um elemento de qualquer página e sair manipulando. Eu mesmo, quando faço capturas de tela pra |
| 1:06:03 | mostrar a imagem de um site nos videos, se tem uma propaganda muito grande, abro o inspetor, |
| 1:06:09 | seleciono o elemento de propaganda e apago. E essa mudança se reflete na página imediatamente. |
| 1:06:14 | Isso só é possível porque o navegador mantém a estrutura de dados que representa essa página em memória de forma acessível via Javascript. E como o código javascript não é estático, |
| 1:06:24 | não é fixo, porque tem um interpretador que aceita código novo sem precisar reiniciar, |
| 1:06:30 | dá pra fazer essas coisas. A grande vantagem de linguagens dinâmicas é permitir esse tipo de flexibilidade. Se |
| 1:06:36 | isso é bom ou ruim, depende do seu uso. Tem gente que acha que isso não deveria ser permitido, |
| 1:06:42 | que uma vez compilado, deveria ser tudo fechado. Tem gente que acha que precisa ser tudo aberto, independente se vai ficar mais lento ou consumir mais memória. Como eu sempre digo, em programação |
| 1:06:51 | a gente troca uma coisa por outra, sempre. Não existe resposta definitiva, tudo depende |
| 1:06:57 | de pra que vai usar. E no caso de um navegador web acho que todo mundo vai concordar que ser aberto e dinâmico é muito mais prático e é por isso que a Web em si fez tanto sucesso. |
| 1:07:07 | Além disso linguagens dinâmicas como Javascript, Ruby, Python, Elixir, Java, C#, possuem capacidades |
| 1:07:12 | muito potentes de metaprogramação, onde você pode escrever código que altera que está em execução. Praticamente toda linguagem com um interpretador possibilita isso. Java |
| 1:07:22 | tem Reflection, Javascript ES6 tem APIs como Reflect ou Proxy, Python tem a função `type`, |
| 1:07:28 | Ruby tem coisas como Refinements. E a vantagem de um interpretador é que podemos injetar novos bytecodes sem reiniciar o programa. Como a maioria dos interpretadores possuem |
| 1:07:37 | algum tipo de JIT, esse novo código também pode gerar binário nativo otimizado. |
| 1:07:42 | Pra não complicar vou pular os detalhes sobre metaprogramação e a diferença com pré-processamento |
| 1:07:48 | estático, templates como em C++, ou macros como em Rust. Estudem se tiver interesse, mas a conclusão de tudo isso é dizer que linguagens estáticas costumam ter um compilador |
| 1:07:57 | que gera binários estáticos, cujo bytecode não é mais modificado facilmente. Linguagens |
| 1:08:03 | dinâmicas costumam ter um interpretados justamente pra ter essas propriedades de dinamicamente modificar o bytecode e alterar o comportamento do programa em tempo real de execução. O |
| 1:08:12 | custo disso é serem mais lentos, porque não puderam contar com a otimização agressiva de um compilador e linkeditor. |
| 1:08:19 | Mas hoje em dia essa diferença diminuiu drasticamente, porque quase todo interpretador vem com um |
| 1:08:24 | compilador embutido que roda em tempo real, um Just in time compiler, ou JIT. No fim do |
| 1:08:30 | dia, ambos acabam gerando binário nativo otimizado, um gera tudo antes, o outro gera enquanto roda. Um usa menos recursos, porque fez toda a compilação e otimização antes, |
| 1:08:40 | e o outro usa mais recursos, porque vai continuamento compilando à medida que o programa é executado. |
| 1:08:45 | Como o video ficou super longo já, no próximo video vou dar uma pincelada em cada linguagem individualmente, mas antes vocês precisavam entender a diferença entre compiladores e |
| 1:08:55 | interpretadores. Ser interpretado não implica ser sempre "lento", só às vezes. Um exemplo, |
| 1:09:01 | quem já ouviu falar de Elixir e Erlang provavelmente reconhece sua reputação de ser altamente escalável, tanto que é com ele que é feito o motor de comunicação por trás do Whatsapp, |
| 1:09:11 | que é gigantesco. Mas nem todo mundo entende que Erlang, assim como Java, é uma linguagem interpretada, que roda numa máquina virtual, que é um tipo de interpretador, e que tem |
| 1:09:20 | um Just in Time Compiler, ou JIT, pra acelerar as coisas. Pela popularidade do Javascript, muita gente já sabe que as performances absurdas que |
| 1:09:28 | ela consegue ter, o suficiente pra portar um game de verdade e rodar dentro do navegador |
| 1:09:33 | é em grande parte graças ao JIT. Mas tem mais detalhes disso. E muito antes de Typescript |
| 1:09:39 | e todas as linguagens transpiladas pra Javascript, um dos primeiros transpilers apareceu no mundo |
| 1:09:44 | PHP com o HipHop do Facebook, que transpilava PHP pra C++. Hoje em dia eles pararam esse |
| 1:09:50 | projeto e estão investindo mais na máquina virtual HHVM que é compatível até certo |
| 1:09:55 | ponto com PHP 7. Python, consegue gravar os bytecodes da fase de parsing como arquivos |
| 1:10:01 | `.pyc`, que são instruções pra sua própria máquina virtual. Ruby também gera bytecodes |
| 1:10:06 | internamente. Enfim, tem bem mais coisas que eu vou guardar pro próximo video. A intenção do video era só educar vocês pra não ficarem com cara de bobos argumentando |
| 1:10:14 | coisas como "ah, sua linguagem é interpretada, por isso nunca vai ser tão rápida quanto |
| 1:10:19 | uma compilada", ou "ah Java é melhor que Javascript porque ela é compilada". A grande |
| 1:10:24 | verdade é que tecnologias de compiladores e máquinas virtuais evoluiu bastante nos últimos 20 anos e essas noções erradas que eram até corretas nos anos 90, já não |
| 1:10:33 | é mais tão simples assim. Se ficaram com dúvidas mandem nos comentários abaixo, |
| 1:10:54 | se curtiram o video deixem um joinha, assinem o canal e não deixem de compartilhar o video |
| 1:11:21 | com seus amigos. A gente se vê, até mais. |
