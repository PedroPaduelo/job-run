# Sua Linguagem NÃO É Especial! (Parte 1)

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=p9-WuJbVHHc
- **Duração:** 11:41
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Esta semana vamos pular pra |
| 0:04 | assuntos de tecnologia. Mas eu quero colocar em prática o que eu disse semana passada nos |
| 0:10 | episódios geek. Lembra como eu disse que nós geeks não só assistimos as coisas mas |
| 0:16 | gostamos de ficar explorando detalhes, rotas alternativas e até re-editando o que gostamos? |
| 0:22 | Hoje eu vou mostrar como fazemos isso em tecnologia também. Muitos de vocês hoje devem ter |
| 0:28 | linguagens de programação favoritas. Todo mundo tem pelo menos uma. Como muitos de vocês sabem, |
| 0:34 | eu gosto muito da linguagem Ruby. Porém isso não me torna cego às demais linguagens |
| 0:40 | e eu não digo isso só da boca pra fora. Também como disse no episódio de faculdade, |
| 0:45 | eu comecei no fim dos anos 80, passei por Basic, dBase III, Clipper, Turbo Pascal 6, Visual |
| 0:51 | Basic 6, Delphi desde a versão 1.0, Perl desde a versão 5 - se bem que ela nunca saiu da |
| 0:55 | 5, PHP desde a 3, ASP clássico, .NET C# e VB.NET desde a versão 1.0, Java desde a versão 1.0, |
| 1:03 | Javascript desde antes de virar padrão ECMA, Python 2. E isso foi só até o fim dos anos 90. |
| 1:10 | Se tem uma coisa que vocês devem levar deste episódio é o seguinte: |
| 1:14 | linguagens de programação Não são filosofias de vida. Linguagens de programação são meras |
| 1:20 | ferramentas. Ferramentas foram feitas para servir seus mestres, e não o contrário. Linguagens de |
| 1:27 | programação não merecem lealdade e definitivamente não são religiões. Eu não sou definido pela |
| 1:37 | minha linguagem de programação favorita. Você não é sua linguagem de programação. |
| 1:42 | (...) (crack de dedos) |
| 1:51 | É hora de mostrar aqui quem manda. A melhor forma de desmistificar qualquer |
| 1:56 | coisa é abrir e dissecar. Ver do que é feito. Ver quem fez. Ver de onde veio. Pare de colocar |
| 2:03 | as coisas num pedestal só porque você não compreende. Nada merece ficar num pedestal, |
| 2:08 | muito menos linguagens de programação. Antes de mais nada, se eu te perguntar, |
| 2:14 | quais todas as linguagens de programação que existem hoje? Você talvez tenha a |
| 2:20 | seguinte imagem na cabeça (IMAGEM) Mas a realidade é que esta é a lista |
| 2:25 | de linguagens ATIVAS nesse momento. Pois é, bem mais do que você imaginava. |
| 2:30 | Existem linguagens em uso neste momento que você sequer ouviu falar. Você precisa |
| 2:36 | expandir seus horizontes. E agora o mundo que já parecia grande parece impossível. Mas |
| 2:42 | não se preocupe, vamos organizar isso. Se você só conhece uma ou duas linguagens, |
| 2:47 | ou mesmo meia dúzia, faz parecer que cada uma delas é genial e única. Faz parecer que |
| 2:54 | nunca mais ninguém vai chegar numa combinação tão perfeita. Por exemplo, a orientação a protótipos |
| 3:00 | de Javascript, os CSP de Go, o garbage collector do Java, o pattern matching do Elixir. |
| 3:07 | Vamos começar do começo. Muitos quando pensam em linguagens antigas pensam em Fortran ou Lisp, |
| 3:14 | mas eu começaria por Speedcode ou Speedcoding do lendário John Backus. É uma das primeiras |
| 3:21 | linguagens interpretadas de alto nível. Muita gente acha que COBOL é quem inaugurou a era das |
| 3:27 | linguagens simbólicas que prezava pela facilidade de uso ao usar palavras em vez de mnemônicos como |
| 3:34 | Assembly, como o próprio nome Speed code já diz. Estamos falando de 1953. O objetivo |
| 3:42 | foi facilitar a computação numérica de ponto flutuante para calcular posições astronômicas, |
| 3:48 | trocando facilidade de uso por performance. O mesmo John Backus depois criaria a linguagem |
| 3:54 | mais famosa dele e que ainda está em uso até hoje, o Formula Translator ou Fortran, |
| 4:01 | de 1957. Agora você sabe que a idéia original veio de Speedcoding. Como disse antes Speedcoding |
| 4:08 | era interpretado e embora com uma linguagem fácil de usar a performance era sofrível, |
| 4:14 | até 20x pior que assembly de máquina e naquela época hardware era proibitivamente caro. Por |
| 4:22 | isso pense em Fortran como uma evolução compilada de Speedcode. Embora uma linguagem de uso geral |
| 4:29 | obviamente ele foi pensado como uma linguagem para cálculo númerico. Se você fez faculdade e aprendeu |
| 4:36 | sobre montadores, aprendeu sobre assembly. De bônus, muitos ainda pensam que Fortran gera |
| 4:43 | binário mais rápido do que C. Isso foi verdade no começo. Depois do padrão C99 ter colocado |
| 4:50 | o keyword restrict isso já não é mais verdade. A diferença é que Fortran não permite aliasing |
| 4:55 | de pointers. Dois nomes apontando pro mesmo espaço de memória e fazendo overlap. Se você |
| 5:01 | usar restrict em C o mesmo código vai gerar um binário igualmente rápido. |
| 5:07 | Seguindo a história, você tem o Algorithmic Language ou ALGOL que é |
| 5:12 | uma família de linguagens imperativas. Como o nome diz foi usado para descrever algoritmos, |
| 5:18 | uma evolução do Fortran em termo de linguagem de alto nível. Uma das coisas mais importantes |
| 5:23 | da produção do ALGOL foi a invenção do Backus Normal Form por John Backus de novo que depois |
| 5:31 | foi revisado e extendido por Peter Naur pro ALGOL 60 e renomeado como Backus-Naur Form ou |
| 5:38 | BNF por sugestão do lendário Donald Knuth. BNF é uma técnica de notação para gramáticas livre |
| 5:45 | de contexto usado para descrever e definir sintaxe de linguagens. Se você fez faculdade |
| 5:52 | e aprendeu sobre compiladores então teve que lidar com o Yet Another Compiler-Compiler ou |
| 6:00 | YACC que é padrão em BSD ou o GNU bison. Se seguirmos para o começo dos anos 1960 |
| 6:06 | encontramos o Combined Programming Language também chamado de Cambridge Programming Language por ter |
| 6:14 | sido desenvolvido na universidade de Cambridge ou Christopher’s Programming Language por ter |
| 6:21 | sido desenhado por Christopher Strachey junto com David Barron. Na prática uma linguagem |
| 6:26 | inspirada em ALGOL 60. Mas a linguagem demorou muito pra ficar pronta, quis fazer muita coisa, |
| 6:33 | ele queria ao mesmo tempo possibilitar programação de baixo nível e ter abstrações |
| 6:37 | de alto nível. No final não foi pra lugar nenhum mas inspirou um derivado mais simples |
| 6:43 | chamado BCPL ou Basic CPL ou também Boostrap CPL voltado mais pra programação de sistemas, |
| 6:50 | particularmente pra escrever compiladores. A família de linguagens ALGOL daria origem a |
| 6:56 | derivados em particular alguns que você não imaginaria. Niklaus Wirth e Tony Hoare |
| 7:02 | propuseram o ALGOL W como sucessor do ALGOL 60. Esse trabalho inspiraria Wirth a criar uma nova |
| 7:09 | linguagem desenhada pra ser eficiente em tempo de compilação e execução, fortemente tipada, |
| 7:16 | que possibilitaria a criação de estruturas de dados complexas e seria boa para ensinar |
| 7:23 | programação estruturada e algoritmos, e entre 68 e 69 nasce a linguagem Pascal. Sim, Pascal é um |
| 7:31 | derivado direto de ALGOL. Eu aprendi algoritmos e estruturas de dados com esse livro de Wirth. |
| 7:37 | Dando uma tangente nessa história, nos anos 80 Anders Hejlsberg escreveu o compilador |
| 7:44 | Blue Label Pascal. Depois de ser adquirido pela Borland isso se tornaria o Turbo Pascal, |
| 7:50 | que eu mencionei em outro episódio que foi a linguagem que aprendi na faculdade. Turbo Pascal |
| 7:56 | fez muito sucesso na época, era muito compacto, eficiente e ainda vinha com uma IDE. Muitos |
| 8:03 | programas famosos do Macintosh original foram escritos num dialeto de Turbo Pascal. E da Apple |
| 8:10 | Computer saiu a extensão Object Pascal. É parecido mas não é a mesma coisa que o Object Pascal da |
| 8:17 | Borland que viria a se tornar o famoso Delphi. Quem contratou Anders Hejlsberg foi a Microsoft e |
| 8:24 | ele criou o Microsoft J++, o derivado de Java da Microsoft. Eu costumo dizer que |
| 8:29 | o atual C# que foi desenhado pelo Anders é o filho bastardo de Delphi com J++. |
| 8:35 | Voltando ao ALGOL e ao BCPL, como você pode imaginar, é bem adequado que da linguagem ALGOL |
| 8:41 | ou A, venha BCPL que na sequência coincidentemente deu origem à linguagem B por volta de 1969 |
| 8:48 | desenhada pelos lendários Ken Thompson e Dennis Ritchie na Bell Labs. O BCPL, CPL, ALGOL tem |
| 8:55 | cara de Pascal pelos motivos que falei acima, mas Thompson e Ritchie reverteram muita coisa |
| 9:01 | da sintaxe. Por exemplo, em vez de atribuição ser dois pontos e igual passou a ser só igual, |
| 9:06 | eles inventaram os operadores aritméticos de atribuição que é o mais igual ou menos igual |
| 9:13 | além de incrementadores e decrementadores que são os operadores mais mais e menos menos. Enquanto |
| 9:20 | Pascal virou um derivado de tipagem forte de Algol, o B foi feito pra ser sem tipo. Agora |
| 9:26 | adicione a isso a sintaxe de chaves e você tem a próxima linguagem desenhada por Thompsom e |
| 9:32 | Ritchie para suceder o B, a linguagem C. Agora você sabe de onde veio C e como Pascal |
| 9:38 | é seu primo e como Java e C# são netos bastardos e primos bastardos um do outro, |
| 9:44 | é um verdadeiro bacanal de linguagens. Mas isso não pára por aqui. Sabe quem mais |
| 9:49 | trabalhou na evolução do ALGOL, o ALGOL 68? Um cara chamado Stephen Richard Bourne, que criou |
| 9:56 | um troço chamado Bourne Shell pra substituir o Thompson Shell ou SH. A linguagem de script |
| 10:02 | é inspirado em ALGOL 68. Falando em shells David Korn criou o Korn Shell ou KSH baseado |
| 10:09 | no Bourne Shell e é um meio do caminho entre ele e o C Shell de Bill Joy - talvez vocês de |
| 10:15 | Java lembrem dele da época da Sun Microsystems. Agora some Bourne Shell, C Shell e Korn Shell |
| 10:21 | implementado no mundo GNU e você tem o Bourne Again Shell ou BASH! Agora você sabe de onde vem |
| 10:28 | o BASH. E só pra finalizar essa tangente, se você pegar BASH, KSH e o TC Shell sai o mais moderno Z |
| 10:36 | Shell que muitos preferem usar hoje. Se você vem de UNIX de verdade e sistemas BSD antigos deve |
| 10:43 | ter encontrado o Bourne Shell original. Ufa, essa história é bem longa. Mas depois |
| 10:58 | dessa tangente em shells vamos parar por aqui. No próximo episódio eu vou |
| 11:02 | finalizar essa história mas eu acho que você já entendeu onde eu quero chegar. |
| 11:07 | O mundo de programação é muito maior do que sua linguagem favorita. E linguagens não são |
| 11:14 | estáticos. Elas não nasceram do nada por um criador místico. Todas são derivadas de alguma |
| 11:21 | outra e sabendo de onde elas vieram você pode começar a entender pra onde elas vão evoluir |
| 11:26 | no futuro. O que acharam desse episódio? Se gostaram deixem um joinha, assinem o canal e |
| 11:32 | não deixem de clicar no sininho pra não perder a parte 2 dessa história. A gente se vê, até mais! |
