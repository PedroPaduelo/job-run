# O que vem DEPOIS do Hello World | Consertando meu C

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=YyWMN_0g3BQ
- **Duração:** 59:05
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita No último episódio eu fiz diversos tipos de Hello World em C pra explicar o básico |
| 0:07 | de programação mais de baixo nível, e foi super trabalhoso porque eu não queria quebrar o conteúdo em vários episódios. |
| 0:14 | Eu não programo em C faz muitos anos então muita coisa enferrujou mesmo. Eu nunca fui um bom programador de C e agora então, só o básico. Eu editei aquele script algumas |
| 0:23 | vezes e mudei os exemplos enquanto fui revisando, e tirei muita coisa de cabeça. Nisso acabei deixando passar vários erros que me deixaram bem frustrado porque eu só vi depois. O bom |
| 0:32 | foi que vários de vocês viram e relataram nos comentários. Eu coloquei algumas na erratas daquele vídeo e vou usar o video de hoje pra complementar o que eu acho que faltou |
| 0:42 | falar. A ideia destes vídeos não é ser um curso de C, nem de longe. É a mesma coisa na faculdade, |
| 0:48 | C ou Pascal era usado só pra não termos que usar alguma pseudo-linguagem pra ensinar os conceitos. Tem várias nomenclaturas e conceitos que aos olhos de quem programa C |
| 0:57 | no dia a dia ficou feio. Muita coisa eu simplifiquei pra explicação ficar mais fácil. Pra aprender |
| 1:03 | C de verdade tem que ver livros com The C Programming Language do Kernighan e Ritchie, os criadores da linguagem e estudar muito código fonte. |
| 1:11 | Se você é programador de C, perdeu uma oportunidade. Podia ter feito um video chamado “Vamos |
| 1:16 | consertar o C cagado do Akita”. É um bom tema. Tem muito pouco video sobre C hoje em |
| 1:21 | dia. De qualquer forma, já que ninguém fez, vou fazer eu mesmo. A primeira metade de hoje vai ser uma errata aproveitando pra adicionar mais conteúdo ao que eu já tinha explicado |
| 1:30 | e a segunda metade vai molhar um pouco os dedos em mais coisas de estruturas de dados e algoritmos que não coube no episódio passado. Então vamos lá. |
| 1:46 | (...) Vamos começar com alguns erros pequenos. Tem um que se eu não prestar atenção cometo toda hora sem perceber, até eu acho irritante. Provavelmente porque por muitos anos programei |
| 1:55 | em 32-bits, eu confundo quando converto bits em bytes. Mas é simples, só dividir por 8. Endereços de 32-bits são armazenados em 4 bytes. Mas endereços de 64-bits são |
| 2:05 | 8 bytes. Só que minha memória muscular me ferra. Aos 6 minutos e 6 segundos do video eu falo que se você alocar um inteiro de 64-bits |
| 2:14 | mas não for usar valores maiores que 255, vai estar desperdiçando 7 bytes desses 8. |
| 2:19 | E isso tá correto. Mas durante a edição a memória muscular ficou me falando “32 bits é quatro bytes”, o que tá errado, e achei que eu tinha gravado falando errado. |
| 2:28 | Daí escrevi uma correção na tela de que iria desperdiçar 3 bytes. Ou seja, eu falei certo na gravação e corrigi errado na edição. A mesma coisa aconteceu aos 45 minutos e 20 |
| 2:37 | segundos que eu falo que é 4 bytes, mas são 8. Outra coisa que vira e mexe me confunde se falar muito rápido foi como aos 40 minutos |
| 2:44 | e 54 segundos eu falo que 255 BYTES é um quarto de 1 megabyte. Tá errado, lógico, |
| 2:50 | é um quarto de KILObyte. 255 vezes quatro são 1024 bytes, ou um kilobyte. Daí aos |
| 2:56 | 6 minutos e 50 segundos eu falei errado o range de inteiros de 8-bits com sinal, o correto |
| 3:01 | é de menos 128 a positivo cento e vinte e sete. Em hexa é mais difícil de errar porque vai de hexa FF até 7F. |
| 3:09 | Mais pro fim, depois dos 57 minutos quando faço a `struct` Person e começo a fazer |
| 3:15 | createPerson escrevi errado `nome` em vez de `name` e ficou meio estranho. Foi um typo |
| 3:21 | feinho mas como não chega a estragar o exemplo em si resolvi não regravar só por causa disso. Pior foi quando dei copy e paste do código de inicialização da struct pra dentro |
| 3:30 | da função createPerson e esqueci os valores hardcoded em vez de usar os argumentos. O |
| 3:35 | código ficou desse jeito aqui, mas o correto deveria ter editado pra ficar assim. Por isso |
| 3:40 | a gente tem que tomar cuidado ao ficar dando copy e paste de código. Além desses erros menores, o erro que me deixou mais irritado foi perto dos 39 minutos |
| 3:49 | quando eu quis explicar sobre stack e passagem de parâmetros por valor. O exemplo original era com inteiros e nesse caso ela teria sido copiada 3 vezes passando da `main` pra `f1` |
| 3:59 | e depois pra `f2`, mas eu substituí pela string “hello world” e na hora nem pensei muito porque eu tava com pressa, só segui o mesmo exemplo como se o string estivesse |
| 4:07 | sendo duplicado na stack. Obviamente que não tá. E pra explicar, preciso complicar a parte que eu não queria. Quando falei de memória virtual pode parecer que ela é dividida só |
| 4:16 | entre stack e heap, mas na verdade tem mais que isso. Se eu quiser complicar e mostrar mais, vai ficar deste outro jeito. Seguindo pra baixo |
| 4:24 | do heap a gente tem o segmento BSS que é o block starting symbol, ou que alguns chamam de better save space. Toda variável global estática que só foi declarada mas você |
| 4:34 | não atribui nenhum valor fica nesse espaço, automaticamente inicializado como zero ou nulo. É diferente de quando você usa um `malloc` ou `calloc` que vai pegar algum trecho |
| 4:43 | de memória disponível da heap. Embaixo do BSS tem mais dois segmentos que interessa pra gente hoje, a ROData e a Text. |
| 4:52 | Esse segmento Text, ao contrário do que você pode entender pelo nome, é o espaço de endereços do seu programa executável propriamente dito, é um segmento de código, das instruções |
| 5:02 | em linguagem de máquina. Agora o segmento ROData é mais interessante pra gente. Quando eu fiz `char hello[] = "Hello World"` eu tinha dito que isso seria alocado na stack, |
| 5:12 | o string inteiro. Tá errado. Que burro, dá zero pra ele. E até podia ser assim mesmo numa outra linguagem, mas no caso de C, o hello vai ser uma referência pra um endereço |
| 5:21 | que fica nesse espaço chamado `ROData`. Quando o compilador GCC passa pelo meu código fonte, |
| 5:27 | ele vê dados como esse `hello` que é fixo e constante e grava dentro desse segmento no binário final. RO é de Read Only, então ROData é um segmento de dados somente de |
| 5:36 | leitura. Isso não altera a explicação de passagem por valor. Toda vez que eu passo a variável |
| 5:42 | `hello` como argumento das funções `f1` e `f2`, cada uma vai empilhar uma nova cópia no stack, mas não do string inteiro, e sim dos 8 bytes de endereço que apontam pro array |
| 5:51 | "Hello World" que é fixo, constante e tá dentro do segmento `ROData`. |
| 5:57 | Pense nesse segmento com uma versão estática do Heap, que é dinâmico. O ROData é pra |
| 6:02 | valores que você tem hardcoded no seu código fonte. Como strings. Mas strings dinâmicas, |
| 6:08 | por exemplo, de valores que vieram num JSON que você puxou via API, de linhas do banco de dados que você puxou da rede, tudo isso vai ser alocado no Heap e, mesma coisa, os |
| 6:17 | ponteiros pra eles vão sendo empilhados na stack durante a execução do programa. Quando eu falei do formato ELF binário, que é o linguição de bits num formato específico |
| 6:27 | pro Linux executar, a primeira instrução começa no endereço hexa 1000. Mas no mesmo |
| 6:32 | binário ELF existem outros segmentos que você pode inclusive ver usando o comando no shell `objdump -h` e o executável que acabou de compilar. Então, se passarmos esse |
| 6:42 | objdump no nosso hello vão aparecer todos os segmentos. Você vê que o décimo primeiro é o segmento `init` no endereço hexa 1000 que eu falei antes e na décima quinta posição |
| 6:52 | tem o endereço hexa 2000 que é o segmento ROData. No video anterior, ignorem quando eu falo que o string inteiro é alocado no Stack. |
| 7:01 | Ele tá no ROData e na stack as variáveis `hello` são referências com o endereço |
| 7:06 | pra esse string. É algo assim. As referências ocupam espaço, pouco espaço se comparado |
| 7:11 | a um arrayzão, mas ocupam. E quando são passadas por valor, de função pra função, vão sendo duplicadas na stack. Três vezes no nosso hello world, cada uma com 8 bytes. |
| 7:20 | Mas não é pra você se preocupar com uso de espaço na stack, isso raramente é um problema. Como eu já tinha dito só quando seu programa é pesado em coisas como recursão. |
| 7:30 | Outra coisa que eu Não falei no episódio anterior quando expliquei ponteiros é que depois de chamar `malloc` pra alocar espaço no heap, quando você termina o que tinha |
| 7:38 | pra fazer, a boa prática é chamar a função `free`, que avisa o gerenciador de memória que aquele segmento não tá mais em uso e ele pode usar pra outra coisa. Eu não fiz |
| 7:47 | `free` pra explicação não ficar extensa mas também porque o programa executa e sai muito rápido. E quando um programa termina, o sistema operacional se encarrega de tornar |
| 7:54 | toda memória que você tava usando disponível de novo pra outra coisa, independente se você deu free antes ou não. |
| 8:01 | Programinhas que executam rápido como um hello world não precisam se preocupar. O problema são programas que ficam abertos muito tempo, digamos um navegador, ou um servidor |
| 8:10 | web. Tirando em exercícios como o hello world, em código de verdade, você DEVE se preocupar |
| 8:15 | com a memória sendo usada porque elas vão ficar em uso por tempo indeterminado. Podem ser horas ou dias e se você ficar dando `malloc` e nunca der `free` a memória disponível |
| 8:25 | no heap vai acabar ou chegar perto de acabar, e quando isso acontece mecanismos como o OOM |
| 8:30 | do sistema operacional pode forçar a parada do seu aplicativo. OOM é o sistema que monitora a memória usada por aplicativos, que significa Out of Memory Killer. |
| 8:38 | Justamente porque gerenciamento de memória é complicado de explicar, eu já tinha feito dois vídeos que recomendo que vocês assistam. Uma das vantagens de linguagens de mais alto |
| 8:48 | nível com Java, C#, Go e todas as interpretadas como Javascript, Ruby, Python, é que elas |
| 8:54 | tem algum garbage collector, cuja responsabilidade é gerenciar o heap no lugar do programador. |
| 8:59 | Porém, a comodidade vem com um custo: todo garbage collector sempre vai usar mais memória do que se você gerenciar manualmente e causar picos de pausa pra limpeza durante o processamento, |
| 9:09 | o que pode ser um problema pra você. Por outro lado tem menos riscos de vazar memória por causa de código mal feito. |
| 9:16 | As duas linguagens modernas que tem um bom balanço entre comodidade e não desperdiçar muita memória são o Swift e o Rust. Recomendo estudar o ARC do Swift que é uma ajuda do |
| 9:26 | compilador pra gerenciar memória via contador de referências e o sistema de Borrow do Rust |
| 9:31 | que é o mais diferente de todos. Voltando aos meus erros, outra coisa que eu falei errado no video anterior foi quando |
| 9:37 | disse que o Stack, ou Pilha, tem dois tipos, LIFO e FIFO e logo na sequência falei que tem Queues ou filas. Eu bobeei aqui, uma cadeia onde a gente vai empilhando elementos no topo |
| 9:47 | e desempilhando do topo é last in first out, LIFO que é uma Pilha. Uma cadeia onde a gente |
| 9:52 | vai empilhando elementos no fim mas vai tirando do começo, ou seja, vai tirando por ordem de chegada, é first in first out, FIFO também conhecido como Fila. Então toda pilha é |
| 10:02 | LIFO e toda fila é FIFO. Pilhas são usadas na execução de quase todo programa. Filas você vê todo dia no |
| 10:10 | supermercado ou banco, ou se é desenvolvedor web. Todo servidor web tem uma fila, as requisições |
| 10:16 | http vão chegando e sendo enfileiradas e vão sendo servidas na ordem de chegada. Todo |
| 10:21 | job em background usa uma fila. Tudo que você precisa segurar porque não dá pra processar tudo de uma vez usa uma fila. Em sistemas distribuídos é particularmente importante |
| 10:31 | pra coordenar e controlar a carga. Não adianta sua linguagem ser rápida em conseguir iniciar um monte de jobs assíncronos e sobrecarregar a máquina. Você precisa controlar quanto |
| 10:41 | processamento paralelo quer ter num determinado momento, e filas é a estrutura básica por |
| 10:46 | baixo desses tipos de mecanismos de controle. E antes que alguém comente, eu disse que “quase” toda execução de programas coloca |
| 10:53 | frames no stack mas existem linguagens chamadas stackless, que significa “sem stack”, |
| 10:58 | embora isso não seja totalmente verdade. Inclusive existe uma versão de Python stackless. Não é que elas não usam nada do stack, mas elas criam um stack próprio no heap também. |
| 11:08 | É um assunto longo por si só então só quis mencionar pra quem tiver curiosidade, mas pode ser interessante em casos de muita recursão ou concorrência onde você separa |
| 11:17 | a stack de cada thread pra evitar coisas como condições de corrida. Continuando, ficou outra dúvida nos comentários sobre arrays, porque eu disse que array é |
| 11:25 | uma sequência contínua de elementos de mesmo tamanho, ou mesmo tipo. Tipo, em C, meio que |
| 11:30 | define o tamanho do elemento. Se for um uint8_t é um inteiro sem sinal de 8-bits, portanto |
| 11:36 | o tamanho é de 1 byte. Uma struct como a Person que eu mostrei, tem 3 campos, uma string de 10 chars, depois 2 ints de 8-bits, portanto 12 bytes no mínimo. O tamanho e formato do |
| 11:46 | binário é definido pelo compilador e não vai ser necessariamente na ordem que eu mostro no exemplo. |
| 11:52 | Mas num Javascript eu posso fazer arrays conterem strings, números, outros arrays e o que eu |
| 11:58 | quiser. Então ele é um array ou não é um array? Sendo honesto nunca parei pra ver o código em C++ que implementa Arrays de Javascript mas se ele for parecido com a forma |
| 12:07 | que outras linguagens como Java ou C# da vida fazem ele provavelmente é um array de ponteiros |
| 12:12 | mesmo. Se o espaço do Array acaba e você tenta inserir um novo elemento, ele vai alocar um |
| 12:17 | novo array um pouco maior e copiar todos os elementos da antiga pra nova, e no final liberar |
| 12:22 | o espaço do array original. E todos os elementos dentro vão ser ponteiros, endereços pra |
| 12:28 | objetos que pode ser objeto de string, objeto de número, objeto de array. Esses objetos |
| 12:34 | estão alocados em algum lugar no heap, mas nesse array não vai ter o objeto em si, só o endereço que aponta pra esses objetos. E todos os endereços vão ocupar o mesmo |
| 12:43 | tamanho de 8-bytes, portanto são todos elementos de mesmo tamanho, exatamente o requerimento |
| 12:48 | pra um array. Se uma linguagem suporta coisas como Generics, daí você consegue limitar um array de objetos |
| 12:54 | pra ter elementos só de um determinado tipo, como Strings, e nunca aceitar um objeto de número por exemplo. Por baixo dos panos, no binário, não faz diferença porque tudo |
| 13:03 | vai ser um ponteiro. Mas importa pra linguagem. Tipos em C eu acho mais importante pra determinar |
| 13:08 | o layout binário das coisas. Tipos em linguagens de alto nível como Java é pra determinar |
| 13:14 | a semântica do seu código. Se você nunca estudou estruturas de dados sempre vai coçar a cabeça de porque um Java |
| 13:20 | da vida tem classes como ArrayList, LinkedList, Vector, ArrayDequeue, HashSet, e tantas outras |
| 13:28 | que herdam das interfaces de Iterable, Collection, Set e List. Sem conhecimento prévio, à primeira |
| 13:34 | vista, tudo parece só um array. É impossível eu explicar tudo, mas quero tentar explicar dois tipos diferentes de coleções hoje, que são dois dos mais usados pra vocês entenderem |
| 13:43 | porque tem diferença. Recapitulando, a grande vantagem de um array é rapidamente encontrar os valores de qualquer |
| 13:50 | posição, com a premissa que você sabe que posição quer acessar. Só pegar o endereço do primeiro elemento e multiplicar pela posição e pelo tamanho do elemento, e por isso é |
| 13:59 | importante todo elemento ser do mesmo tamanho. A desvantagem é se esse array precisa crescer |
| 14:05 | o tempo todo e você não sabe o tamanho final. Daí toda vez que chega no final, precisa criar um outro array maior pra poder continuar, copiar todos os elementos do anterior e liberar |
| 14:14 | essa memória, e ficar fazendo isso até conseguir preencher com todos os dados que precisa. |
| 14:20 | Vamos fazer de conta que na sua linguagem favorita ele instancia um array de 10 elementos por padrão. Daí você conecta num banco de dados, faz uma pesquisa e começa a vir |
| 14:28 | linhas de dados. Você vai colocando na posição 0 do array, a próxima linha na posição 1, depois na posição 2 e vai indo. Aí preenche as 10 posições mas ainda tem mais linhas |
| 14:38 | vindo do banco de dados. Por baixo dos panos, vai alocar outro array, agora com 20 posições, |
| 14:43 | copiar as 10 da anterior, liberar o espaço dessas 10 antigas e agora você continua preenchendo, |
| 14:48 | posição 10, posição 11 e vai indo. Digamos que no final vieram 100 linhas da tabela do banco de dados. Pra comportar isso |
| 14:55 | na memória, seu array precisou ser expandido 10 vezes. Ou seja, teve 10 operações de alocar um novo array e copiar o anterior nele. E na última etapa, quando você tinha um |
| 15:04 | array de 90 elementos e acabou espaço, ele precisou alocar um de 100 elementos. Ou seja, |
| 15:09 | num determinado momento você ocupou o dobro de memória, além de ter que fazer operações de alocação e cópia de todos os elementos até 9 vezes. É um desperdício de processamento |
| 15:18 | e de memória. Imagina se fosse uma tabela com cem mil linhas. Ou no outro extremo, imagine se você precisasse |
| 15:25 | de 100 arrays que só vão ter 2 elementos cada. Nas no nosso faz de conta, cada array |
| 15:30 | começa com 10 posições pré-alocadas. Agora você tem 800 posições que vão ficar desocupadas, |
| 15:36 | mas ainda assim ocupando espaço na memória. Então a linguagem não pode nem pré-alocar um array grande demais pra pra não ter que processar muitas operações de alocar novo |
| 15:45 | array e copiar tudo e nem pode pré-alocar muito pequeno pra economizar memória. É um dilema, por isso sempre que possível você deve iniciar arrays dizendo pra ele quanto |
| 15:54 | de espaço pretende usar. Se você está no caso de listas que vão expandir e você não sabe quanto, pode escolher |
| 16:01 | não usar arrays. Vamos começar usando o struct que aprendemos e criar uma chamada `Node` que traduz pra um nó, em português. Dentro vamos criar dois elementos, um valor |
| 16:10 | inteiro pra guardar qualquer número, e eu vou usar número só porque Strings em C puro é mais chatinho e ia complicar o exemplo, mas eu recomendo de lição de casa vocês |
| 16:18 | tentarem fazer o valor do nó ser um String. O próximo elemento é mais importante, vou chamar ele de `previous` pra apontar pro nó que foi criado antes desse. Esse é o truque |
| 16:29 | da lista ligada, é uma lista que liga elementos um atrás do outro ou um na frente do outro, |
| 16:36 | como você preferir. Pra facilitar, vamos criar uma função que aloca e inicializa um nó, semelhante ao que |
| 16:41 | fizemos no video anterior com a struct Person. Como argumentos ele vai receber um valor inteiro qualquer e o nó que foi criado antes pra ele apontar pra ele. Dentro vamos usar `malloc` |
| 16:51 | pra alocar essa nova struct, depois preenchemos o campo `value` com o que veio como primeiro argumento e checamos se o segundo argumento veio nulo. No caso, o primeiro Node criado |
| 17:01 | não aponta pra ninguém, então deixa ele nulo, senão preenche o campo `previous` pra apontar pro nó que passamos. |
| 17:09 | Agora no `main` vamos criar 3 nodes bestas, um com valor de 2020 e mandando NULL que é |
| 17:16 | nulo, porque é o primeiro nó. O segundo nó vai ter 2021 e passamos a referência pro `first` que criamos antes. Mesma coisa pro terceiro nó que passamos o valor 2022 |
| 17:25 | e a referência do segundo nó. Agora que a coisa fica interessante. Vou criar um quarto ponteiro, chamado `iterator` que vai apontar pro mesmo endereço da variável |
| 17:34 | `third`, a última. Assim começamos um loop que vai parar quando a variável `iterator` for nulo. Nulo em C e várias linguagens interpreta pra `false` e quando der isso o loop `while` |
| 17:45 | vai sair. A cada rodada do loop vamos imprimir o valor inteiro do nó na tela separado por |
| 17:50 | vírgula usando nossa conhecida função `printf`. Pra quem não sabia ele formata os valores |
| 17:55 | que passamos pra ele. Então "%d" é de decimal, daí ele formata números. No vídeo anterior eu usei "%x" que formata números como hexadecimais e "%s" é pra interpretar como um string mesmo. |
| 18:07 | E finalmente, depois de usar o valor do node, fazemos a variável iterator apontar pro endereço |
| 18:13 | que tá no campo `previous`. Como o iterator começou sendo a variável third, e como o previous dela aponta pro endereço que tava na variável second, é isso que ele vai se |
| 18:21 | tornar. Daí o loop volta pro começo, checa que a variável iterator ainda não é nulo e imprime o valor que tá na struct apontada por second. Finalmente fazemos o iterator |
| 18:31 | ser o endereço que tá no campo previous desse second, que vai ser o first, e repetimos |
| 18:36 | o loop. Como o iterator agora aponta pra mesma struct que a variável first, ela continua não sendo |
| 18:43 | nula. Imprime o valor de first, e o iterator vai ser o que estiver no campo previous dela. |
| 18:48 | Como ela foi a primeira a ser criada e passamos NULL no segundo argumento quando criamos, ela não aponta pra mais ninguém. Agora o iterator vai ser NULL e isso vai parar o loop |
| 18:58 | do `while`, e também vai terminar a função main porque não tem mais nada pra fazer, então o programa acaba e sai. |
| 19:03 | Um Node ligado a outro Node forma uma lista de Nodes ligados. Por isso falamos em Lista |
| 19:10 | ligada que é outra estrutura de dados importante na computação. Ela tem várias vantagens em cima de um array. Pra começar, é fácil adicionar novos nodes. Só alocar uma struct |
| 19:20 | no Heap e fazer o campo de ponteiro dela apontar pro último nó que foi criado. Assim não |
| 19:25 | precisamos pré-alocar espaço que não vamos precisar. Mais do que isso. Já pensaram como faz pra inserir um elemento novo no meio de um array? |
| 19:33 | Como o array é sequencial e fixo, você é obrigado a fazer alguma coisa como copiar |
| 19:38 | todos os elementos do meio pro final pra outro lugar, inserir o valor novo no meio, e copiar |
| 19:44 | todos os elementos que guardamos de volta. Vai desperdiçar espaço e processamento. No caso de uma lista ligada basta alocar uma nova struct e mudar os ponteiros dos nodes |
| 19:54 | ao redor da posição onde queremos inserir. Fazemos o elemento seguinte apontar pra ele e a nova struct apontar pro elemento anterior e pronto, inserimos no meio. O custo de inserir |
| 20:04 | um novo elemento no meio é praticamente igual a inserir no fim, e independe do tamanho da |
| 20:09 | lista. Mas então, porque não usamos listas ligadas pra tudo? Porque ela tem uma grande desvantagem. |
| 20:15 | Repetindo, num array, pra eu pegar o valor do centésimo elemento, basta pegar o endereço do primeiro e multiplicar o tamanho de cada elemento vezes 100 e imediatamente chegamos. |
| 20:24 | Mas numa lista ligada, preciso pegar a primeira struct, e ir seguindo os ponteiros pro próximo |
| 20:29 | elemento 100 vezes. Então quanto maior for a lista ligada, mais lento vai ser achar elementos |
| 20:36 | nela, porque cada struct fica em algum lugar aleatório no heap e não tem como achar só com aritmética de ponteiro. |
| 20:42 | Arrays e Listas Ligadas, à primeira vista, especialmente se tiver poucos elementos, funcionam |
| 20:47 | praticamente igual. Você nunca vai notar a diferença de operações ou performance porque mexer em listas de 10 elementos, cem elementos, mesmo mil elementos, é muito rápido |
| 20:57 | na sua máquina. Mas quando você conecta num banco de dados, ou precisa processar centenas de arquivos grandes, e precisa alocar listas pra manipular todos esses dados, usar arrays |
| 21:07 | ou listas vai fazer uma grande diferença de performance. E sem saber como elas funcionam, |
| 21:12 | você jamais vai entender o que tá dando errado. E tem outras estruturas importantes. A próxima que eu quero explicar pra você é um Map, |
| 21:19 | ou HashMap ou Hashtable ou dicionário. Tem vários nomes por diversas particularidades |
| 21:25 | de implementação. Na maioria das linguagens você provavelmente chama só de Hash. É |
| 21:30 | quando você cria uma lista, mas em vez de navegar nela direto por posição, navega usando uma chave. |
| 21:36 | Em Javascript é o que você chamaria de objeto JSON. Por exemplo, podemos criar uma variável person com os campos name, age e city, preencher com Fabio, 43, Sao Paulo e podemos acessar os valores com a sintaxe de colchetes que nem um array mas passando o nome do campo, |
| 21:46 | como "age" e ele devolve 43. Se você não sabia disso, apesar da sintaxe parecer um |
| 21:51 | array, isso não é um array e por baixo funciona bem diferente. Existem diversas formas de implementar Hashtables. Quero mostrar uma forma rudimentar em C. Antes |
| 22:01 | vamos ver como se usa. Na função `main` eu quero alocar primeiro uma struct chamada Hash que vamos criar depois. Daí vamos criar uma função chamada `insertNode` que recebe |
| 22:11 | o ponteiro pra esse hash e vamos inserir alguns dados. Primeiro um valor "world" com uma chave |
| 22:16 | "hello". Se fosse javascript seria hash abre colchetes, daí "hello" igual "world". Apesar |
| 22:22 | da sintaxe não ser bonitinha com colchetes, pense no funcionamento como sendo a mesma coisa do equivalente em Javascript. |
| 22:28 | Vamos fazer mais um `insertNode` pro mesmo hash, mas com chave "Fabio" e valor "Akita". |
| 22:34 | Agora vamos imprimir na tela esses valores procurando pela chave. Se fosse javascript seria o equivalente a um console ponto log entre parênteses hash colchetes com a chave |
| 22:43 | "hello". Mas a gente vai fazer uma função chamada `search` que recebe como parâmetro o ponteiro do mesmo hash e a chave "hello". Daí passamos o valor que ele vai retornar |
| 22:52 | pro `printf` imprimir na tela. Agora sabemos que precisamos implementar uma struct chamada Hash e pelo menos duas funções, |
| 23:00 | a `insertNode` e a `search` que é procurar em inglês. Vamos começar pela struct Hash que vai conter uma variável chamada `list` que é um array de ponteiro pra struct chamado |
| 23:10 | `Node`. O hashtable vai ser implementado com um array de tamanho fixo. Na prática nem precisava ser uma struct Hash, eu podia só ter criado direto um array, mas só pra ficar |
| 23:19 | mais fancy. Só pra ficar menos feio vamos definir essa constante 100 com o nome de HASH_SIZE lá |
| 23:25 | em cima usando o pré-processamento #define, que eu expliquei no episódio anterior. É |
| 23:30 | uma forma de não largar números mágicos por aí. Quando passarmos pelo compilador, imagine que vamos dar copy e paste do número 100 no lugar desse nome HASH_SIZE. |
| 23:39 | Agora temos que implementar a struct principal, que é a `Node` que vai conter os campos principais |
| 23:44 | de chave e valor que são as strings `key` e `value`. Depois, como na lista ligada, um |
| 23:50 | ponteiro pra `next` que vai ser o próximo Node na cadeia. De propósito antes eu mostrei uma lista ligada que vai apontando pro Node anterior. Aqui vai ser uma lista ligada na |
| 24:00 | direção oposta, apontando pro próximo Node mais novo, só pra mostrar que tanto faz a direção. Dependendo do exemplo que você achar por aí vai ter jeitos diferentes de |
| 24:08 | implementar. Agora vamos implementar a função mais importante de um hashtable que é a função que converte |
| 24:14 | a chave num identificador numérico. No nosso caso a chave vai ser só strings. Esse número |
| 24:20 | identificador é o que chamamos de hash e eu expliquei mais sobre hashing nos episódios de criptografia, então dêem uma olhada depois. Grosseiramente é como se fosse um gerador |
| 24:30 | de números aleatórios ou random, onde o seed ou semente é o valor da tal chave. |
| 24:36 | Gostaríamos que essa função de hash devolvesse números o mais aleatório possíveis, ou |
| 24:41 | seja, cuja distribuição estatística seja próxima de uma curva normal ou gaussiana. |
| 24:46 | Se não entendeu isso, coloque na lista estudar estatística básica. A razão disso é simples. A struct Hash que criamos vai conter um ponteiro pra um array de tamanho fixo. Num hashtable |
| 24:56 | podemos inserir mais elementos do que o tamanho do array. A mágica pra isso começa em transformar |
| 25:01 | a chave que é um string num número entre 0 e 99. Uma função de hash pega, por exemplo, |
| 25:07 | a string "hello" e converte num número, por exemplo esse numerozão aqui do lado. Pra isso vamos fazer uma função chamada `hashCode` que recebe essa chave. Se você |
| 25:16 | é de Java já viu esse nome. Dentro começamos declarando um número mágico, no caso cinco |
| 25:21 | mil trezentos e oitenta e um. Poderia ser qualquer número. Depois declaramos uma variável chamada `c` que a cada rodada do loop vai pegando uma letra da chave. Esse loop vai |
| 25:33 | repetindo até acabar as letras da chave e o `c` ficar nulo e parar o loop. O cálculo dentro do loop não é importante pra hoje, tem várias outras formas. Em particular |
| 25:43 | neste exemplo começa com o valor inicial da variável hash que é o cinco mil e tantos acima. Daí multiplicamos por 33 que é o mesmo que fazer bitwise shift pra esquerda |
| 25:53 | de 5 bits, somamos ao hash original junto com o endereço da primeira letra. E vamos fazendo isso letra a letra até o loop parar. No final vamos ter um numerozão que identifica |
| 26:03 | essa chave. Esse número pode ser bem maior do que o tamanho do array e a gente gostaria que fossem posições válidas dentro do nosso array. |
| 26:10 | Sempre que você tem um range ou sequência limitada, no nosso caso que vai de 0 a 99, |
| 26:15 | mas temos um número maior que isso, pra caber, usamos a operação de módulo. E aqui é mais um exemplo de porque matemática importa. Vamos precisar de módulo. Na prática um |
| 26:24 | módulo faz um wrap. Qualquer número módulo 100, vai devolver um número menor que 100. |
| 26:29 | Daí podemos usar isso como um índice ou hash. Toda chave sempre vai chegar no mesmo hash, mas a partir do hash não temos como voltar ao valor original da chave. |
| 26:39 | O cálculo do exemplo chamado de djb2. Não é o único e nem é o melhor, mas é fácil |
| 26:58 | pra explicar pra hoje em uma linha só. Lembram quando eu disse que vídeos como esse e qualquer outro tutorial e curso priorizam a facilidade da explicação? Entenda que existem outros |
| 27:08 | algoritmos mais sofisticados do que multiplicar por 33 e ir acumulando. Especialmente algoritmos |
| 27:14 | estatisticamente melhor distribuídos. Mas por agora, o importante é entender que esta é uma das maneiras de converter um string num número e com o módulo, garantidamente |
| 27:24 | devolver uma posição dentro do Array. Antes de continuar, vamos criar uma função que instancia e popula uma struct Node. Podemos |
| 27:32 | chamar de `createNode` que recebe como argumentos os strings de chave e valor, `key` e `value`. |
| 27:38 | Dentro fazemos `malloc` pra reservar espaço pra essa struct. Em seguida populamos os campos `key` e `value` da struct com os valores que recebemos de argumento. Bem simples. Vamos |
| 27:48 | manter o campo `next` da struct como nulo. Como aprendemos no episódio anterior, ao usar a notação de setinha que é um traço |
| 27:55 | e sinal de maior, ele acessa o valor do ponteiro de item que é a struct de Item que tá em |
| 28:00 | algum lugar no Heap. Essa sintaxe de setinha é equivalente a fazer asterisco variável |
| 28:05 | entre parênteses e usar a notação de ponto. Mas setinha fica mais bonito. Finalmente chegamos ao filé mignon da explicação implementando a função `insertNode` que |
| 28:15 | vai de fato armazenar o par de chave e valor dentro do nosso array fixo. Começamos com |
| 28:20 | função `hashCode`, passando a `key` que veio como argumento e achando a posição numérica dentro do array, que vai ser essa variável `index`. Continuamos declarando |
| 28:29 | uma variável node que vai apontar pro primeiro Node na posição index do arrayzão. |
| 28:35 | A lógica vai assim: se no array da estrutura de hash, na posição que chamamos de `index`, |
| 28:40 | não existir nada, se for nulo, então criamos um novo Node com a função `createNode`, |
| 28:46 | passando key e valor e armazenamos o endereço desse Node na posição `index` do Array chamado |
| 28:52 | `list` dentro da estrutura que chamamos de hash. Caso contrário, se na posição `index` já existir um Node, temos duas opções. Se no |
| 29:00 | campo `next` desse Node não existir nada, for nulo, chamamos `createNode` pra criar um Node e associamos seu endereço no campo `next`. Agora temos uma lista ligada de dois |
| 29:10 | elementos. Podemos quebrar o loop e sair fora. Se a lista tiver mais de um elemento já, |
| 29:16 | esse `next` já vai estar apontando pra outro Node. Então fazemos a variável `node` apontar pra esse `next` e repetimos o loop, até achar o último Node cujo `next` é nulo e nele |
| 29:27 | associamos nosso novo Node. Essa nossa variável `list` na struct Hash não é um array simples como mostramos até |
| 29:34 | agora. É um array onde cada posição vai apontar pra uma lista ligada, ou seja, é tipo uma matriz. O conceito é assim: cada lista ligada pode ter quantos elementos quisermos. |
| 29:44 | Daí nesse array fixo vamos conseguir colocar mais elementos do que o tamanho total de posições só do array. Estamos combinando o melhor do array com o melhor da lista ligada numa |
| 29:53 | estrutura só. Outro conceito importante é que o número que o `hashCode` devolve identifica uma ou |
| 29:59 | mais chaves. Já disse que ela não é única pra cada chave. Especialmente porque fazemos o módulo do hash pra ter a posição do array. Se múltiplas chaves podem chegar no mesmo |
| 30:10 | número significa que mais cedo ou mais tarde vamos ter uma colisão, ou conflito. Esse é o termo mesmo. Quando acontecer uma colisão, dois Nodes vão competir pela mesma posição |
| 30:27 | no array. Vamos dar um exemplo, faz de conta que queremos inserir um valor "bla" com uma chave "abc". |
| 30:40 | E faz de conta que queremos inserir outro valor "foo" com uma chave sendo "xyz" e agora |
| 30:46 | o principal, faz de conta que o cálculo da nossa função `hashCode` devolva o número 42 pra ambos os strings. Vamos simular um caso de colisão. |
| 30:56 | Da primeira vez, vamos pra posição 42 do array `list` e apontamos pra uma struct Node |
| 31:01 | com a chave sendo 'abc' e valor sendo 'bla'. Na segunda tentativa o hash da chave 'xyz' |
| 31:07 | devolve o mesmo índice 42, mas na posição 42 do array já tem o Node com chave "abc", |
| 31:13 | então criamos um novo Node e fazemos o primeiro apontar pra ele. Agora temos os dois armazenados |
| 31:19 | na posição 42 do array, entenderam? Pra ficar claro, digamos que queremos incluir um terceiro par de valores cuja chave é “foo” |
| 31:26 | e o valor é “bar” e de novo, faz de conta que o hashCode pra essa chave “foo” seja 42 também. Agora já existe uma lista ligada nessa posição do array. Começamos do primeiro |
| 31:37 | Node com chave “abc”. O `next` dela aponta pra outro Node, com a chave “xyz” e agora |
| 31:43 | o `next` é nulo, portanto é o fim da lista. Basta fazer esse `next` apontar pro novo Node |
| 31:49 | com chave “foo” e pronto, adicionamos mais um elemento no hashtable. É isso que acontece num caso de várias chaves colidirem e competirem pela mesma posição no array. |
| 31:59 | De volta ao exemplo, na função `main` usamos a função `insertNode` duas vezes, na primeira |
| 32:05 | pra inserir o par com chave `hello` e valor `world` e na segunda vez pra inserir o par com chave `Fabio` e valor `Akita`. A chave `hello` passando pela nossa função hashCode |
| 32:15 | devolve o número 41 e passando a chave `Fabio` devolve o índice 90. Ou seja, a posição |
| 32:20 | 41 do array `list` vai apontar pra uma instância da estrutura Node com o valor "world" e na posição 90 do array `list` vai existir outra instância de Node com o valor `Akita`. |
| 32:31 | Só pro nosso exemplo ficar mais interessante faz de conta que antes de inserir a chave `hello` já tinha um Node com chave `ano` e valor `2021` e faz de conta que se passarmos |
| 32:41 | a string `ano` pra função hashCode vai dar o número 41. Daí a gente tenta inserir a |
| 32:47 | chave `hello` e valor `world` e passando `hello` em `hashCode` sabemos que volta 41 também. Criamos um novo Node com a chave “hello” e colocamos seu endereço no ponteiro `next` |
| 32:57 | do Node chave `ano`. Esse é o mecanismo. O pior caso é quando a função de hashCode dá colisões demais |
| 33:05 | e a maioria dos elementos que tentamos inserir acaba na mesma posição do array, e aí fica desbalanceado, por isso escolher a melhor fórmula vai fazer diferença e por isso eu |
| 33:14 | falei em uma função que tivesse uma distribuição gaussiana, onde na média, cada posição |
| 33:20 | do array vai ter mais ou menos o mesmo número de elementos. Finalmente, uma vez inserido, e se a gente quiser achar o valor que corresponde à chave |
| 33:28 | `hello`? Vamos criar a função `search` que devolve um ponteiro pra uma String, que vai ser esse valor. E como parâmetro vamos receber a referência pra struct Hash que contém |
| 33:38 | o array `list` e como segundo parâmetro um ponteiro pra string que contém a chave que |
| 33:43 | estamos procurando, no caso "hello". De novo, começamos calculando o tal hash da chave "hello" que já sabemos que vai ser |
| 33:50 | 41. Daí pegamos o primeiro Node da lista ligada que tá na posição 41 do nosso array `list`. Agora começamos um loop. Enquanto a variável `node` não for nulo, entra no |
| 34:00 | corpo do Loop. Dentro comparamos o valor da chave nesse Node com a chave que recebemos no parâmetro da função usando essa função do C chamada `strcmp` ou string compare, que |
| 34:11 | vai devolver `zero` se as duas strings que passamos tiverem o mesmo valor. No nosso exemplo vai dar false porque o primeiro Node contém um Item cuja chave é `ano`. |
| 34:20 | Sendo assim, pulamos esse `if` e fazemos a variável `node` apontar pro `next` do atual. |
| 34:25 | Repete o loop, a variável `node` ainda não é vazio. No `if` comparamos de novo o string |
| 34:30 | do campo `key` com a variável `key` do parâmetro. E como esse segundo Node contém a chave `hello`, |
| 34:35 | o `strcmp` vai dar verdadeiro e podemos retornar o campo `value` do Node, que vai ser `world`. |
| 34:41 | Pronto, em conceito é mais ou menos assim que funciona um hashtable pra inserir e procurar |
| 34:47 | um Node. E é assim que conseguimos inserir centenas ou milhares de itens num array que |
| 34:52 | é limitado em cem posições. Toda vez que tiver uma colisão de chave, anexamos o Node |
| 34:58 | no final da lista ligada nessa posição do array. E quando for procurar a chave, calculamos o hash que dá a posição no array e vamos seguindo a lista ligada que está lá até |
| 35:07 | encontrar o Node com a chave que procuramos. A essa altura você deve estar pensando, "por que todo esse trabalho"? A vantagem é que |
| 35:14 | se nosso array estivesse todo cheio, e quisermos achar onde tá o Node com a chave “hello”, |
| 35:19 | rapidamente sabemos que tá na posição 41 do array, porque o cálculo do hash independe |
| 35:24 | de quantos elementos existem. Mesmo se a hashtable tiver 200 Nodes já, chegamos na posição |
| 35:30 | 41 com um simples cálculo. Daí só precisamos fazer mais 2 comparações de chaves na lista |
| 35:35 | ligada pra ir de next em next até chegar no Node com chave “hello” e vamos achar |
| 35:40 | o valor “world”. Se usássemos só um array pra inserir 200 elementos, mas o array começa com 10 elementos |
| 35:47 | pré-alocados, ia precisar expandir e copiar todos os elementos do array 20 vezes. Mas |
| 35:52 | pra achar um valor numa posição específica é rápido. Por outro lado, se usássemos uma lista ligada pra inserir os 200 elementos, a inserção seria super rápida e econômica. |
| 36:03 | Mas pra procurar teríamos, no pior caso, que vascular 200 elementos. Mas juntando o array com a lista ligada, diminuímos consideravelmente tanto o tempo de inserção quanto o tempo |
| 36:14 | de procura. Mas da forma como implementamos, não só agora eu posso usar uma string como chave |
| 36:20 | em vez de um número, como estamos segmentando, ou seja, dividindo a lista ligada dentro de |
| 36:26 | um array fixo. E isso nos dá o meio do caminho do melhor dos dois mundos entre um array e uma lista ligada. Não vamos desperdiçar memória e processamento tendo que duplicar |
| 36:35 | o array toda vez que chega no fim. E ao mesmo tempo podemos procurar itens razoavelmente rápido porque em vez de vasculhar uma lista ligada inteira, vamos vasculhar só um trecho |
| 36:44 | dela. Então, toda vez que você fizer um hash em Javascript ou outras linguagens que suportam |
| 36:50 | essa sintaxe de colchetes, por baixo dos panos é algo parecido com isso que tá acontecendo. |
| 36:55 | Nessa nossa implementação rudimentar, esse `search` passando o `hash` e argumento `hello` |
| 37:01 | seria o equivalente no Javascript a escrever `hash` colchetes e `hello` dentro. |
| 37:06 | Falando em Javascript, muitos que estão iniciando os estudos agora talvez já tenham visto exercícios |
| 37:12 | implementando coisas como listas ligadas ou hashtables em Python, Javascript ou outra |
| 37:17 | linguagem de alto nível. E de fato, eu poderia implementar exatamente esse hashtable que |
| 37:22 | fiz em C só que em vez de usar structs eu poderia usar classes. Daí você poderia ter a péssima idéia de usar esse hashtable que escreveu em vez de usar a que já vem por |
| 37:33 | padrão na linguagem. Isso é uma má idéia porque nenhuma versão de hashtable que você escrever em Python |
| 37:39 | puro vai ser mais rápido do que a que já vem nela. A explicação é simples. Vamos ver como o Python implementa o hashtable, que ele chama de `dict`. O Python mais usado |
| 37:49 | é o CPython, e esse nome é porque o Python é escrito em C. E se a gente for no GitHub |
| 37:54 | e vasculhar o código fonte do CPython vamos achar o arquivo `dictobject.c` que, chan chan |
| 38:00 | chan chan, é escrito em C. Esse em particular tem mais de 5 mil linhas de C. Por isso eu |
| 38:06 | repito, o exemplo que eu dei antes é uma simplificação rudimentar pra ser didático de explicar. Pra ver o de verdade, você precisa ver esse do Python. |
| 38:14 | A mesma coisa vale pra todas as estruturas de dados a algoritmos básicos de ordenação, |
| 38:21 | procura e coisas mais avançadas como criptografia que o Python te dá. Arrays, listas ligadas, |
| 38:27 | sets que são conjuntos e muito mais. E a mesma coisa acontece em todas as outras linguagens de alto nível como Ruby, como Javascript. Eu disse no episódio anterior que elas são |
| 38:37 | ótimas linguagens pra colar estruturas feitas em C ou C++ com uma sintaxe de mais alto nível |
| 38:44 | e mais fácil de usar. É isso que eu quero dizer. Se você estudou ou for estudar a matéria de estruturas de dados e algoritmos, vai aprender |
| 38:52 | a operar essas estruturas. Até agora eu só mostrei a coisa mais trivial que é inicializar e popular as estruturas. Mas e se quisermos procurar elementos num array gigante? Ou se |
| 39:02 | quisermos ordenar em ordem alfabética? Daí você começa a aprender sobre algoritmos. |
| 39:07 | Sem ter estudado nada, pense, como você ordenaria um array? Ordenação é um dos tópicos da matéria e normalmente o primeiro algoritmo que você |
| 39:15 | aprende é o famigerado bubblesort. Pra acelerar o código é este aqui do lado. Mas só ver o código talvez não ajude muito. Se você procurar no Google por sorting algorithms |
| 39:26 | animation vai achar vários sites que mostram uma versão animada de como cada uma funciona. |
| 39:31 | Vamos ver um bubble sort em ação. Conseguem ver como ele vai comparando pares de números e fazendo os números maiores irem pra direita? Compara um par, se o da esquerda for maior |
| 39:41 | que o da direita, faz um swap e troca eles de lugar e vai fazendo isso até o fim da lista, e repete, até tudo estar ordenado. |
| 39:48 | No exemplo em C é assim. Começamos declarando uma variável total como sendo um número |
| 39:53 | hardcoded 15 e em seguida criamos um array de 15 números fora de ordem qualquer. Daí |
| 39:59 | precisamos de 3 variáveis inteiros pra ajudar, um chamado `i`, outro `j` e um chamado `swap`. |
| 40:04 | Começamos um loop fazendo o `i` ir de 0 até o total menos um que é 14. Lembrando que |
| 40:10 | arrays em C começam de 0 e vai até o total menos 1. Então um array de 15 elementos vai |
| 40:15 | ter posições de 0 até 14. Dentro tem outro loop, fazendo `j` ir de 0 também até o total menos `i`. Isso porque |
| 40:23 | dentro comparamos o elemento na posição `j` com o seguinte que é `j` mais um, então não pode ir até o último senão vamos tentar pegar um décimo sexto elemento que não existe |
| 40:33 | e vai dar pau. Daí comparamos entre o elemento na posição `j` com o de `j` mais um e se |
| 40:38 | o de `j` for maior, fazemos o swap. Swap nesse caso é guardar o elemento de j mais um, copiar |
| 40:44 | o elemento de j pra j mais um, e na posição j gravar o que tava na variável swap. Em |
| 40:50 | outras linguagens tem como fazer swaps assim com uma operação só, mas por baixo dos panos sempre vai ter uma variável intermediária. |
| 40:57 | Se achou complicado depois tente você mesmo executar esse código em C com diferentes arrays, usando `printf` em cada etapa pra ver o que tem nas variáveis `i` ou `j` e |
| 41:07 | o que tem no array nesses posições pra entender o que tá acontecendo. Mas o importante é entender o seguinte. Temos um loop dentro de outro loop percorrendo todos os elementos |
| 41:16 | do array. Na primeira passada tem 14 comparações. Na próxima passada, o `i` vai ser 1 então |
| 41:21 | total menos 1 menos 1 são 13 comparações. Na passada seguinte o `i` vai ser 2 então |
| 41:27 | total menos 2 menos 1 são 12 comparações e vamos assim até o `i` ser igual a `14` |
| 41:33 | e acabar. Ou seja, vamos ter 14 mais 13 mais 12 mais 11 e assim por diante, que vai dar 105 comparações. |
| 41:41 | Se colocarmos um contador no começo do código e ir incrementando dentro do segundo loop, no final podemos imprimir e ver que vai dar 105. Pra somar todos os número de 0 até |
| 41:51 | N precisamos da matemática de análise combinatória. A fórmula é n vezes n menos 1 dividido por |
| 41:58 | dois. Então 15 vezes 14 dividido por 2 é exatamente 105. Sendo essa fórmula da ordem |
| 42:04 | de grandeza de N vezes N ou seja N ao quadrado, também dizemos que esse algoritmo tem complexidade |
| 42:10 | quadrática. Complexidade de tempo de um algoritmo é uma das coisas que você mais vai ver quando se compara algoritmos que fazem a mesma coisa. Por exemplo, no caso de ordenação de arrays, |
| 42:20 | temos esse simples que é o Bubblesort e na média tem complexidade quadrático que escrevemos na notação big-O como sendo O n ao quadrado. Outros algoritmos melhores como o Mergesort |
| 42:30 | ou Quicksort, na média tem complexidade O n vezes log de n ou logarítmico. E aqui eu |
| 42:36 | vou falar de complexidade sem ser formal, então se você é matemático perdoe minha nomenclatura mais solta. |
| 42:43 | Complexidade é outro aspecto da matéria que vocês precisam entender. E pra resumir bem curto existem gráficos como este que compara os principais tipos. Se não me engano |
| 42:51 | o pior tipo seria fatorial, que nem aparece aqui. No caso do nosso exemplo de 15 elementos, |
| 42:57 | se nosso algoritmo fosse extremamente mal feito onde a ordem de grandeza fosse o fatorial |
| 43:02 | de 15, o número de operações seria de 15 vezes 14 vezes 13 vezes 12 etc e isso dá |
| 43:09 | mais de 1.3 trilhão de operações. Comparado com as 105 do bubblesort, que já é ruim, |
| 43:16 | seria totalmente inviável. Um exemplo de um algoritmo fatorial? É o próprio código da forma recursiva ingênua |
| 43:23 | que calcula o resultado de um fatorial, que você encontra de exemplo em tudo que é lugar. |
| 43:28 | Outro problema famoso que você aprende na faculdade é o do vendedor viajante, “the |
| 43:33 | travelling salesman” resolvido usando força bruta. Tem até de fato um algoritmo de ordenação que de propósito foi feito pra demonstrar um caso fatorial, que é o snailsort, que |
| 43:43 | pra cada elemento ele faz uma permutação de todos os outros elementos. Tudo que envolve permutações que são combinações de todos os elementos com todos os elementos, têm |
| 43:53 | chances de ser fatorial. Aliás, o algoritmo do vendedor viajante é o problema do sistema de logística de qualquer |
| 43:59 | Amazon da vida. O caminho mais curto pra passar entre diversos endereços ou cidades diferentes. |
| 44:04 | O jeito mais ingênuo de fazer isso, via força bruta, tem complexidade fatorial, ou seja, |
| 44:10 | é absurdamente caro de processar porque a força bruta seria fazer a permutação de |
| 44:15 | todas as possibilidades de rotas entre todos os pontos de destino e no final comparar pra achar a mais curta. E um algoritmo um pouco melhor vai cair de complexidade fatorial pra |
| 44:25 | exponencial, que continua sendo lento. Esse em particular é da categoria de problemas considerados NP Hard. Problemas ao redor de |
| 44:34 | NP ou “tempo não polinomial” é uma coisa que eu mesmo tenho intuição mas não tenho bagagem matemática pra discutir formalmente. Só entenda que existem diversos problemas |
| 44:43 | matemáticos que não tem uma fórmula simples. Pior, custam complexidade fatorial pra resolver. |
| 44:49 | Existem problemas P, NP, NP Complete, NP Hard. Problemas P podem ser resolvidos tem tempo |
| 44:56 | polinomial, problemas NP são não-determinísticos cujos resultados podem ser verificados em tempo polinomial. Não se preocupe muito com isso no começo, basta saber que isso existe. |
| 45:06 | Mas voltando ao que nos interessa, acessar uma posição num array é complexidade constante, |
| 45:11 | ou seja, não importa se o array tem 10 elementos ou 10 mil elementos, sabendo a posição, recuperar um valor custa sempre o mesmo tempo. Agora, procurar um elemento numa posição |
| 45:21 | de uma lista ligada é complexidade linear, depende do tamanho da lista. Como não dá |
| 45:26 | pra fazer aritmética de endereço, porque os elementos não são sequenciais um atrás do outro, a gente precisa ir de Node em Node seguindo o endereço pro próximo. Então |
| 45:35 | pra achar o décimo Node de uma Lista Ligada onde só temos o endereço do primeiro Node, |
| 45:40 | precisamos fazer a operação de seguir pro próximo ponteiro 9 vezes. Pra achar o vigésimo elemento precisamos seguir ponteiros 19 vezes no pior caso, e |
| 45:48 | assim por diante, ou seja, o tempo que vai custar depende da quantidade de elementos, por isso a ordem de grandeza é chamado de linear, que no gráfico de comparação é |
| 45:57 | a linha que cresce igual nos eixos x e eixo y. Imagina carregar um arquivo com palavras, |
| 46:04 | quebrar num array, e procurar uma palavra. Sem saber coisas como busca binária ou qualquer tipo de indexação via hashing ou algo assim, você vai primeiro fazer um loop e vasculhar |
| 46:13 | elemento a elemento até achar o que procura. Isso é mais ou menos linear, lógico depende |
| 46:19 | do que mais você processa, mas estou falando de ordem de grandeza do caso simples. Agora, na categoria de logarítmico, estão coisas como busca binária, que eu não expliquei |
| 46:28 | e não pretendo detalhar hoje pra não alongar. Mas pensa assim. Em vez de procurar um a um linearmente, você pode usar a estratégia de segmentar a procura quebrando sua lista |
| 46:38 | primeiro ao meio, e recursivamente ir procurando em listas da metade do tamanho e cada pedaço. |
| 46:44 | É meio que a estratégia de dividir pra conquistar. Imagina uma função chamada `pesquisa`. E dentro dela você quebra a lista em duas e passa cada metade pra mesma função `pesquisa`, |
| 46:53 | e vai fazendo isso recursivamente. É a base da idéia de busca binária. Então numa lista de 100 elementos, você quebra em 2. Agora tem a lista de 50. Quebra |
| 47:03 | de novo em 2. Vai ter 25. Quebra de novo. 12. De novo. 6. De novo 3. De novo 1. Se o |
| 47:09 | que procura estiver na primeira metade, talvez você ache em 6 operações em vez de 50. |
| 47:14 | Essa mesma idéia tá por trás de algoritmos como mergesort ou quicksort que são mais rápidos que bubblesort que é complexidade quadrática. Se voltarmos na nossa animação |
| 47:24 | de algoritmos de ordenação, vou mostrar tanto o merge quanto o quick um embaixo do |
| 47:38 | outro. Viram como eles segmentam a lista? Logaritmo é a operação inversa da exponencial, se |
| 47:45 | uma complexidade exponencial seria 15 ao quadrado que seria ordem de 225 operações, a logaritmica |
| 47:51 | seria o log de 15 na base 2, que daria menos de 4 operações. Complexidade exponencial |
| 47:56 | fica mais caro mais rápido que linear. São opostos no nosso gráfico e você gostaria |
| 48:01 | de escrever código mais próximo da logarítmica do que da exponencial. Mas não é sempre que você tem a sorte de achar algoritmos logaritmicos, mais comum eu acho que é achar |
| 48:11 | loglineares que é linear vezes logaritmico ou O n vezes log n. |
| 48:17 | Algoritmos loglineares são por exemplo os mergesort e quicksort que mostrei, que embora sejam bem melhores que quadrático ou exponencial, ainda ficam caros mais rápido que puramente |
| 48:28 | linear. Pra memorizar, veja que a notação O n vezes log n é como se fosse a complexidade |
| 48:33 | linear que é O n vezes a complexidade logaritmica que é O log n. |
| 48:38 | Essa notação de O alguma coisa ou Big O provavelmente porque usamos uma letra `O` |
| 48:43 | maiúscula é pra você ter noção da ordem de grandeza do tempo de processamento e/ou |
| 48:49 | do uso de recursos de um algoritmo. Algoritmos podem ser qualquer código que você faz. |
| 48:54 | Tudo que recebe algum dado de input e faz algum processamento pra resultar em alguma coisa. A notação é pra dar uma ideia da complexidade, no pior caso. Por exemplo, o |
| 49:03 | quicksort na média é loglinear que é O n vezes log de n, mas no seu pior caso pode |
| 49:09 | virar quadrático. Por exemplo, pra acessar o valor de um array, eu repeti dezenas de vezes que é só pegar o endereço do primeiro elemento e somar pelo número da posição vezes o tamanho de bits de cada elemento. Num array de inteiros 64-bits de 100 posições, pra pegar o valor na nonagésima posição basta pegar o endereço da posição 0 e somar por oitenta e nove vezes 8 bytes que é o comprimento de inteiros de 64-bits. Pra qualquer outra posição é o mesmo cálculo. |
| 49:15 | Independente se o array tiver 10 elementos, 100 elementos ou 100 milhões de elementos, pra pegar o valor em qualquer posição o tempo gasto vai ser exatamente o mesmo, porque esse cálculo de endereço inicial mais a soma da multiplicação entre o número da posição e o tamanho de cada elemento independe do tamanho total do array. É o que em notação de Big O a gente chamaria de O 1, ou seja, tempo constante. Esse é o ideal, e todo algoritmo que chega perto disso pode ser considerado muito bom. Você vê no gráfico que à medida |
| 49:21 | que o tempo corre pra direita no eixo x, a complexidade permanece constante no eixo vertical y, constante. A Lista Ligada que implementamos tem complexidade O 1, constante, pra operações de inserir novos Nodes ou apagar existentes, porque independe do tamanho total da lista. Mesma coisa pro Array enquanto ele tem espaço sobrando no fim. Mas procurar elementos na Lista Ligada é da ordem de grandeza de O n, linear. No melhor caso, o elemento que queremos é o |
| 49:31 | primeiro, daí só com uma comparação e achamos, no pior caso é o último elemento da lista, daí precisa navegar Node a Node até o fim. |
| 49:38 | Por isso existe a opção de Lista Duplamente Ligada, onde cada Node aponta pro próximo |
| 49:43 | elemento e pro anterior ao mesmo tempo, assim dá pra começar uma procura do começo da |
| 49:48 | lista ou do fim da lista. Mesmo assim, a complexidade, a ordem de grandeza, continua sendo linear, |
| 49:54 | dependente da quantidade de elementos na lista, sendo o pior caso se o elemento que procuramos estiver no meio da lista, porque se começar a procurar do começo ou do fim, o meio é |
| 50:02 | o ponto mais longe agora. No hashtable que implementamos a complexidade depende do algoritmo de hashing. Se o hashing |
| 50:10 | for bom, ou seja, resulta em números com pouca colisão, o tempo de inserção no melhor |
| 50:15 | caso seria O 1 constante, porque por baixo é literalmente inserir num array. O pior |
| 50:20 | caso é se o hashing der sempre o mesmo número pra toda chave. Por exemplo, digamos que queremos inserir 3 palavras quaisquer e o hashing de todas dá o número 10, agora todos vão estar |
| 50:29 | na posição 10 do array. E a gente implementou cada elemento pra ser uma lista ligada. O tempo de inserção vira linear, porque tem que chegar até o fim da lista pra adicionar |
| 50:38 | o Node novo. Mas a pesquisa, que num array seria tempo constante, no hashtable vai ser linear, igual |
| 50:46 | da lista ligada, O n, linear. Outra coisa importante, só porque dois algoritmos tem |
| 50:52 | complexidade Big O iguais, digamos, O n, linear, não quer dizer que elas têm exatamente a mesma performance. Só significa que vão ficando mais lentas linearmente em proporção |
| 51:01 | à quantidade de elementos pra processar. Ambos array e lista ligada tem complexidade O 1 constante pra inserir novos elementos, mas inserir num array é mais rápido porque |
| 51:11 | já tem o espaço reservado pro elemento ao contrário da lista ligada que precisa chamar `malloc` pra reservar um espaço no heap pra cada elemento. Mas proporcionalmente o tempo |
| 51:21 | de cada um é constante, independente de quantos elementos cada um tenha, entenderam? O importante é lembrar que tudo que você codifica é um algoritmo (ou mais corretamente, |
| 51:31 | pode ser uma heurística, mas vamos deixar isso pra outro dia). Todo algoritmo tem uma complexidade. Ela tem melhor caso, pior caso e tempo médio. No melhor caso, todas são |
| 51:40 | parecidas. Se você testar um bubblesort, quicksort ou mergesort ou outros como insertion |
| 51:45 | sort ou timsort, num array com 10 elementos, meio que não faz diferença nenhuma. |
| 51:50 | Você só vai sentir diferença quando começar a passar mil elementos, cem mil, 1 milhão, |
| 51:55 | daí a diferença de tempo começa a ser mensurável e significativa. Isso é pra lembrar que só |
| 52:00 | porque o código rodou na sua máquina, testando com pouca coisa, nem sempre vai funcionar pra todos os casos. Mas sem entender sobre complexidade, só vai entender como seu código |
| 52:11 | é ruim quando estiver rodando em produção com dados reais, e vai ficar coçando a cabeça sem entender porque e vai ficar botando a culpa na linguagem ou no framework. |
| 52:19 | Seu código roda em tempos diferentes dependendo dos dados que você passar. Por exemplo, o |
| 52:24 | melhor caso de um bubblesort é tentar ordenar uma lista que já tá ordenada. Ele não vai fazer swap de nenhum elemento e ao terminar de comparar com o último elemento, termina. |
| 52:33 | Então vai rodar como se fosse O n, linear. Mas ironicamente, num quicksort, o pior caso |
| 52:39 | é justamente passar uma lista que já tá ordenada, porque ele vai tentar ordenar e |
| 52:44 | rodar em tempo quadrático em vez de loglinear. Ou seja, só porque no tempo médio o quicksort |
| 52:49 | é bom, não quer dizer que é sempre bom. Por isso mesmo, em linguagens como Java, Javascript, Python e outros, quando você dá `sort` não |
| 52:58 | necessariamente vai ser um quicksort por baixo. No caso de Python se usa o algoritmo Timsort |
| 53:03 | que é meio inspirado no mergesort com insertion sort que eu não expliquei. É mais estável |
| 53:08 | e com pior caso melhor do que o quicksort. Vale a pena pesquisar. Mas o recado é que nem sempre o algoritmo mais rápido vai ser o melhor sempre, porque se o pior caso derrubar |
| 53:17 | seu sistema, é melhor um algoritmo um pouco mais devagar mas que lide melhor com o pior |
| 53:23 | caso. Finalmente, antes que alguém jogue nos comentários que eu não mencionei, notação Big O é |
| 53:28 | pode ficar controverso porque povo diz "ah, algoritmo X é quadrático então é ruim, algoritmo Y é linear então é bom" mas não entende que não é pra comparar só pelo |
| 53:36 | Big O, especialmente sem levar em conta coisas como melhor ou pior caso, e sem levar em conta |
| 53:41 | coisas como Big Omega e Big Theta. Na prática, Big O é uma notação de complexidade do |
| 53:47 | limite superior, não necessariamente do pior caso. Big Omega é notação pro limite inferior, |
| 53:53 | não necessariamente do melhor caso. E Big Theta é notação pro tempo entre Big O e Big Omega. |
| 53:59 | Se pareceu complicado é porque é um pouco mesmo, na prática Big Omega e Big Theta é mais interessante pro povo acadêmico, mais matemático da ciência da computação. Big |
| 54:08 | O serve pra dar uma noção da ordem de grandeza do tempo de execução de um código ou algoritmo qualquer. Um programador não se preocupa muito com a notação formal matemática, |
| 54:17 | basta entender que existe, e que algoritmos diferentes tem complexidades diferentes. Todo código é diferente, só porque códigos diferentes chegam no mesmo resultado não |
| 54:26 | significa que são equivalentes. Certamente suas complexidades são diferentes. E certamente |
| 54:31 | sua primeira tentativa vai ter complexidade quadrática, então toma cuidado. Por agora vou encerrar essa introdução à algoritmos e estruturas de dados. E esses |
| 54:40 | dois episódios foram de fato só o topo do iceberg. Mas pros próximos episódios eu precisava que pelo menos todo mundo estivesse na mesma página da existência desses conceitos |
| 54:49 | e uma pequena noção do básico pra eu poder falar de outras coisas. Lembrem-se, o que eu mostrei nesses dois episódios não é um tutorial, nem um curso, pra isso tem material |
| 54:59 | bem melhor. A ideia foi só mostrar que essas coisas existem pra vocês estudarem em mais detalhes. |
| 55:05 | Eu mesmo não sou acadêmico então me falta a matemática formal. Mas as noções principais |
| 55:11 | incluem que todo algoritmo tem características diferentes. Tem o caso médio, tem os extremos, |
| 55:16 | tem casos excepcionais e cada caso vai rodar com qualidades diferentes de performance e uso de recursos e por isso a gente fala que pra escolher um algoritmo, uma biblioteca, |
| 55:26 | ou mesmo um framework ou arquitetura depende do problema que queremos resolver, como vai |
| 55:31 | ser usado, porque aí uma solução que é boa pra um projeto pode não ser tão bom pra outro. Como já disse no episódio do livro The Mythical Man Month, não existe |
| 55:39 | bala de prata e boa parte do trabalho de um programador é saber como escolher entre diferentes opções. |
| 55:45 | Quando eu tava na faculdade estudei essa matéria usando o livro de algoritmos do Nicolau Wirth, |
| 55:50 | criador de linguagens como Modula e Pascal, então eu aprendi usando Pascal. Ela é bem simples de ler de cabo a rabo mas eu acho que pra hoje em dia tá defasado. De longe |
| 56:00 | a melhor coleção é o The Art of Computer Programming, escrito por um dos maiores mitos |
| 56:06 | da ciência da computação, Donald Knuth. Ele começou a escrever em 1968 um conjunto |
| 56:11 | que era pra ser de 7 livros. Pausou no fim da década de 70 porque acho que tava trabalhando em outro projeto que tornou ele famoso, o sistema TeX que você deve conhecer como Latex |
| 56:20 | se já escreveu algum artigo científico pra faculdade. Ainda faltam 3 volumes e os 4 que já existem são bem difíceis de ler e entender sem ter |
| 56:29 | uma base matemática forte. Eu mesmo não tenho paciência e só li trechos específicos. Talvez uma hora faça um episódio de alguns assuntos dele que me interessam. No geral, |
| 56:38 | eu não recomendo esses livros. Pra começar são bem caros. A coleção dos 4 livros na Amazon custa 200 dólares, que convertendo hoje vai pra mais de mil reais. Qualquer livro |
| 56:48 | que você achar que seja de estruturas de dados e algoritmos é suficiente. Veja a bibliografia de qualquer universidade pra ter referências. |
| 56:55 | Um que não é tão barato, melhor do que eu usei na faculdade, mas tá longe de ser o monstro que é o do Knuth, procure pelo Introduction to Algorithms do Cormen, Leiserson, |
| 57:05 | Rivest e Stein. Diferente do que eu fiz neste vídeo, o livro do Cormen vai começar ensinando |
| 57:11 | o Insertion Sort, no capítulo seguinte vai falar sobre notação assintótica que foi o que eu pulei quando falei sobre notação Big O e na sequência vai explicar o que é |
| 57:19 | a estratégia de dividir pra conquistar e depois um pouco sobre análise probabilística. |
| 57:24 | Isso é só a introdução. Depois disso ele vai falar de algoritmos de ordenação como Heap Sort e Quicksort, depois estruturas de dados, grafos e só no final vai falar sobre |
| 57:33 | NP Completeness. Eu também não li esse livro de cabo a rabo, mas se você puder, vai cobrir bastante coisa importante. Mesmo não estando no mesmo nível do Knuth, continua sendo um |
| 57:43 | pouco mais pesado na parte matemática mas também com assuntos mais modernos como multithreading. |
| 57:48 | Mas como eu disse, não importa muito qual livro, contanto que estude pelo menos um que cubra esses tópicos principais de algoritmos, complexidade, estruturas de dados e entenda |
| 57:57 | o que são algoritmos de tempo polinomial versus de tempo não polinomial. Isso é o que em vários vídeos eu venho falando que é parte da base fundamental da programação. |
| 58:07 | Enquanto você não souber esse básico vai ter dificuldade de pular pra tópicos mais avançados e sempre vai ter dúvida se o que tá codando é o melhor jeito pro problema |
| 58:15 | que tem que resolver, ou porque escolher biblioteca X em vez da Y ou porque certa boa prática |
| 58:21 | funciona em alguns casos mas não em outros. O estudo da ciência da computação é bem divertido quando você começa a sentir que |
| 58:28 | tá dominando a ferramenta e não a ferramenta te dominando, e conquistar esse nível de controle vai exigir centenas de horas de esforço, estudo e exercícios. E esse estudo precisa |
| 58:39 | dessa base. Espero que estes vídeos tenham dado um pouco de luz e vocês se motivem a procurar o resto sozinhos. Se ficaram com dúvidas mande nos comentários, quem já |
| 58:48 | estudou tudo isso ajudem os colegas também, se curtiram o video deixem um joinha, assinem |
| 58:53 | o canal, não deixem de clicar no sininho pra não perder os próximos episódios e continuem compartilhando com seus amigos pra ajudar o canal. A gente se vê, até mais. |
