# O Guia +Hardcore de Introdução à COMPUTAÇÃO

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=8G80nuEyDN4
- **Duração:** 1:18:28
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita O tema do video da semana passada é um buraco de coelho de Alice no País das maravilhas. |
| 0:11 | Estou demorando pra soltar videos porque cada assunto que eu esbarro vou pesquisar e abro mais uma dúzia de abas. Daqui a pouco vou encher meus 32GB de RAM só de abas. Computação |
| 0:25 | retro é uma área gigantesca. Vocês não imaginam quantas comunidades existem não só colecionando itens antigos mas ainda desenvolvendo em assembly do MOS 6502 e outros processadores |
| 0:34 | antigos como Z80, Intel 8088 e isso só no mundos dos 8-bits. Se entrar em 16-bits vai |
| 0:41 | cair em processadores como o 65C816 do Super NES. Eu reescrevi o script de hoje várias vezes, numa das versões eu estava gastando páginas |
| 0:48 | e páginas só pra tentar explicar o problema da multiplicação em processadores antigos. Mas tá muito fora do escopo do canal fazer escovação de bits nesse nível. Mas só |
| 0:58 | pra dar um gostinho do que eu quero dizer, no último video comecei a mostrar um pouco |
| 1:06 | do Assembly do 6502 e algumas instruções básicas como LDA ou STA pra dar load no acumulador |
| 1:11 | ou store do acumulador pra algum outro lugar. De operações aritméticas temos instruções como ADC ou SBC pra adição e subtração. |
| 1:18 | Você já começa tendo problema quando precisa somar números maiores do que 255 que é o limite que cabe em 1 byte, ou 8-bits. Lembra que o 6502 é uma CPU de 8-bits? Então todas |
| 1:28 | as instruções só conseguem trabalhar com 8-bits de uma só vez. Pra trabalhar com números |
| 1:33 | maiores você precisa particionar o número e calcular 1 byte de cada vez. Pra complementar |
| 1:38 | o episódio anterior acho que vale a pena eu falar só sobre adição pelo menos pra |
| 1:44 | vocês terem uma imagem melhor na cabeça de como as coisas funcionam por baixo dos panos. |
| 1:49 | Como todo mundo pelo menos já deve ter ouvido falar, chips como o 6502 são feitos de componentes |
| 1:55 | menores, como um transistor. Um transistor, em sua essência é um componente que funciona como um switch, ou interruptor. Acho que essa é a imagem mais simples de ter na cabeça. |
| 2:07 | Você pode comprar transistors individuais que vem empacotados como um componente mais |
| 2:12 | fácil de manipular num protoboard como esse aqui (video). Usando transistores é possível criar alguns dos circuitos mais simples de todos, as portas |
| 2:21 | lógicas, que são meio que as peças fundamentais sobre as quais todo o resto é montado. Por exemplo, você pode montar uma porta lógica NOT num protoboard com um transistor, um resistor, |
| 2:30 | um led pra ver a resposta, uma bateria e fios pra conectar. Uma porta NOT quando você manda |
| 2:35 | 0 ele responde 1, ou quando manda 1 ele responde 0. Uma porta NOT pode ser feito com dois transistors, |
| 2:41 | por exemplo. Além de NOT podemos montar outras portas fundamentais como AND, NAND, XOR ou exclusive OR, OR e assim por diante. E com essas portas podemos montar coisas mais complicadas. À |
| 2:51 | primeira vista é difícil de entender como operações simples como inverter bits pode ser útil. Vamos pensar numa operação um pouco mais complicada que queremos ter numa |
| 3:00 | CPU, por exemplo somar dois números. Assumindo que todo mundo sabe somar. Pense uma soma besta, o número 28 + 22. Você começa |
| 3:07 | somando 8 com 2, vai dar 10, coloca zero, sobe 1. A mecânica interessante aqui é esse "sobe um". Agora soma esse 1 que subiu com 2 do 28 e 2 do 22 e vai ter 50. Pra somar |
| 3:18 | em binário é exatamente a mesma coisa. Pra converter um número decimal em binário, você vai dividindo por dois. 28 dividido por 2 é 14, resto 0. 14 por 2 é 7, resto |
| 3:38 | 0, 7 por 2 é 3, resto 1, 3 divido por 2 é 1, resto 1. Então fica 11100. Pra ser 8 bits |
| 3:46 | só completar os 3 zeros à esquerda. Fazendo mesma coisa com 22 fica 0001 0110. Números pequenos uma hora você lembra de |
| 3:54 | cabeça, mas pra números maiores qualquer calculadora do Windows mesmo converte pra você. Ou em qualquer linguagem de programação tem uma função de formatar strings onde |
| 4:02 | você passa um inteiro e diz que quer formatar com base 2. Num javascript basta chamar o |
| 4:07 | método .toString com argumento 2 num número. Pra somar esses dois binários, você começa da direita pra esquerda também, zero mais |
| 4:14 | zero é zero. Depois zero e um é um. 1 e 1 é 2 que em binário é 1 0, então coloca |
| 4:22 | zero e sobe 1. 1 mais 1 mais zero, mesma coisa, coloca zero e sobe mais um. 1 + 1 + 1 é 3, |
| 4:32 | coloca 1 e sobe 1. 1 mais zero mais zero é 1. E o resto é zero. Então o resultado final é 0011 0010. Só parece difícil porque você ainda não tá acostumado a enxergar só zero |
| 4:41 | e um, mas a regra é exatamente a mesma e usa a mesma mecânica do "sobe um". |
| 4:46 | A máquina de adição mais simples que soma 2 bits é chamado de half adder ou meio somador. |
| 4:52 | Você liga uma porta AND com uma porta XOR e vai ter a soma e o carry bit. Carry é o |
| 4:57 | bit onde grava o "sobe 1". O meio somador vai fazer exatamente o que eu fui descrevendo |
| 5:03 | agora. Se passar 0 e 0 a soma é 0. Se passar 1 e 0 ou 0 e 1 a soma é 1. Se passar 1 e |
| 5:12 | 1 a soma é 0 e sobe 1, então a resposta é 1 0. Uma versão mais completa se chama |
| 5:18 | full adder ou somador completo. Um dos jeitos de montar um somador completo pode ser ligando duas portas XOR, duas portas |
| 5:25 | AND e uma porta OR. Ou melhor ainda, ligando dois meio somadores. A diferença é que além |
| 5:31 | dos 2 números pra somar ele também recebe o carry bit de entrada e com isso podemos |
| 5:36 | cascatear múltiplos circuitos de somador completo um embaixo do outro, ligando o carry |
| 5:41 | bit de saída de um adder na entrada do outro adder. Se quisermos lidar com números de |
| 5:47 | 4-bits adicionamos 4 somadores completos em cascata. Pra 8-bits precisamos de 8 somadores. E com isso adquirimos um somador completo de 8-bits! (som de zelda) |
| 5:55 | Um circuito de somador completo pode ser montado de maneiras diferentes e com isso varia o |
| 6:00 | número de transistors, mas pense que na média vai ser alguma coisa na faixa de 10 transistors |
| 6:06 | pra cada somador. Pra somar números de 8 bits vamos precisar de no mínimo uns 80 transistors. Pra hoje em dia isso não parece grande coisa já que um processador A13 Bionic dos iPhone |
| 6:15 | 11 Pro tem 10 bilhões de transistors. Um AMD Ryzen 7 3700X tem quase 6 bilhões de |
| 6:21 | transistors e um AMD Epyc Rome tem mais de 39 bilhões de transistors. Lembrando que |
| 6:27 | são todos chips de 64-bits. Nosso pobrezinho MOS 6502 de 8-bits tem na faixa de 3500 transistors, lembrem-se que estamos falando do meio dos anos 70. O que viemos fazendo depois além de aumentar mais |
| 6:37 | e mais a densidade de transistors por centímetro quadrado, foi adicionando novas funcionalidades SIMD que são instruções de single instruction multiple data pra computação paralela, instruções |
| 6:46 | de virtualização como VT-X ou AMD-V, instruções pra criptografia, sem contar que os chips hoje são multi-code então é como se fossem múltiplas CPUs apertadas no mesmo espaço. |
| 6:53 | Mas as instruções fundamentais como somar bytes, carregar acumulador, incrementar contador de programas, atualizar apontador de pilha, e coisas assim que vimos no hello world da |
| 7:01 | semana passada ainda é muito similar. Um primeiro insight é que os chips hoje são na ordem de 10 milhões de vezes mais densos |
| 7:12 | de transistors que os chips dos anos 80 pra trás. Porém isso não se traduz necessariamente em programas 10 milhões de vezes melhores na mesma faixa de preço de hardware. Não |
| 7:22 | vou comparar o primeiro Super Mario, mas pegue o melhor da geração 8-bits que foi Super |
| 7:27 | Mario 3 e compare com New Super Mario Bros rodando no Switch cujo SoC Tegra X1 tem na |
| 7:34 | faixa de 7 bilhões de transistors com 4 cores ARM Cortex A57 ativos. Vamos descer um pouco mais hardcore pra dar mais contexto com o tipo de CPU que estamos |
| 7:44 | trabalhando. Adição eu disse que fazemos mais ou menos do mesmo jeito que você faria no papel somando digito a digito e subindo 1 quando precisa. Se hoje em dia temos transistors |
| 7:55 | de sobra nas CPUs, nos 3500 que tinha num 6502, cada transistor contava. Então só |
| 8:00 | era implementado o estritamente necessário. Somadores completos numa cadeia de 8 bits pra soma está implementado. Se recapitularmos sobre o pouco que aprendemos sobre assembly do 6502, pra realizar uma adição |
| 8:08 | de números de 8 bits, faz de conta, o número 1 mais 2 poderíamos fazer assim. |
| 8:14 | LDA #$01 ADC #$10 STA $6000 Então LOAD do número 1 no acumulador, ADC que é adição com carry onde passamos 2 |
| 8:21 | e ele vai somar com o número 1 que já tava no acumulador, e armazenar ou Store do resultado |
| 8:26 | em A pra algum endereço na memória, como o endereço $6000 que no video anterior ia mandar pro chip de trava e de lá pro LCD. Isso é uma coisa que hoje em dia você não |
| 8:36 | se preocupa porque as linguagens de programação já cuidam disso, mas o 6502 faz cálculos |
| 8:43 | com números de 8-bits. O valor máximo que cabe em 8 bits sem sinal é FF ou 255. O que |
| 8:50 | acontece se eu tentar somar 255 + 255? Precisamos de mais bits. Só porque uma CPU é de 8-bits não quer dizer que não podemos calcular números maiores, |
| 9:01 | mas pra fazer isso precisamos particionar o número e lidar com pedaços dele. Por exemplo, |
| 9:07 | digamos que tivéssemos uma CPU decimal mas que só faz conta com números de 2 dígitos de cada vez, então de 0 até 99. Se somarmos 99 + 5 teríamos 104. Precisaríamos gravar |
| 9:19 | o 1 separado do zero quatro. No caso da soma, eu disse que todo somador completo lida com |
| 9:26 | 1 bit do número. A instrução ADC é como se fossem 8 somadores completos em cadeia |
| 9:33 | pra 8-bits. Uma nomenclatura que às vezes você vai esbarrar é high order e low order. Quando lidamos |
| 9:39 | com 16-bits, temos 2 bytes. O primeiro byte chamamos de high byte e o segundo de low byte. |
| 9:46 | Dentro de cada byte tem 8-bits o bit mais à esquerda é o MSB ou Most Significant Bit |
| 9:52 | e o último bit é o LSB ou Least Significant Bit, literalmente bit mais significativo e |
| 9:59 | menos significativo. Lembra quando expliquei sobre little endian no episódio anterior? É pegar os 2 bytes e inverter assim o low byte é lido antes do high byte. Vou voltar |
| 10:09 | nisso já já. Voltando pra soma, toda vez que tiver um "sobe 1" ele vai ser gravado no registrador C. Antes de toda soma o certo é usar a instrução CLC pra limpar esse registrador, mas podemos |
| 10:20 | não limpar. Lembra que falei que registradores funcionam como varíaveis globais? Várias instruções deixam efeitos colaterais pra trás, deixando registradores com a sobra |
| 10:28 | do que foi processado. E podemos usar isso a nosso favor, começar somando a primeira metade do número até 8-bits, e depois somar a segunda metade usando o carry no C se tiver |
| 10:37 | "sobe 1" nele e continuar a soma com o resto dos bits. Por exemplo, digamos que temos um número grande, de 24-bits tipo o número 2 milhões. Seriam 3 pedaços de 8 bits cada |
| 10:46 | que podemos chamar de high, medium e low byte. Declaramos então os 3 pedaços do primeiro número A como A hi, A mid e A lo, depois |
| 10:52 | B hi, B mid e B lo. Começamos limpando o registrador C, fazemos a soma dos bytes low, |
| 10:58 | que é dar load no A low, adicionar com B low e guardar esse resultado parcial em B |
| 11:03 | low; depois mesma coisa com os bytes medium e high. A soma final é a junção dos três |
| 11:09 | pedaços de B. A_hi, A_mid, A_lo B_hi, B_mid, B_lo START: CLC ; Clear C only to start. LDA A_lo |
| 11:15 | ADC B_lo STA B_lo LDA A_mid ; Note that here we don't re-clear C, but just ADC B_mid ; let it do its job of adding the 9th bit that |
| 11:24 | STA B_mid ; didn't fit in the result of the previous byte's ; addition. LDA A_hi ADC B_hi STA B_hi |
| 11:30 | Pense na sua linguagem favorita, você nunca se preocupa com isso, simplesmente escreveria `A + B` e nem pensaria. Como você tem processamento e memória de sobra e seus programas nunca |
| 11:41 | são particularmente complicados, mesmo que tenha desperdícios, não chega a ser um problema. Mas quando seus recursos são extremamente limitados, desperdiçar bits é um problema |
| 11:48 | real. Desperdiçar ciclos também, porque eu disse que cada instrução gasta ciclos de clock. Um processador moderno roda em faixa de 2Ghz a 5Ghz hoje em dia, mas um 6502 roda |
| 11:58 | a 1 a 3 Mhz. Portanto em máquinas pequenas como o 6520 queremos tanto economizar a quantidade de |
| 12:03 | memória usada e o número de instruções que vamos rodar porque cada instrução extra desnecessária desperdiça clocks. Literalmente podemos fazer dezenas de milhões de instruções |
| 12:15 | a menos por segundo num 6502 do que num processador moderno de qualquer smartphone hoje. Fazer |
| 12:20 | programas simples num computador excessivamente poderoso é muito fácil, qualquer um faz. |
| 12:26 | Eu sempre digo que você sabe quando um programador é bom quando ele consegue programar num sistema |
| 12:33 | com muitas restrições, porque a arte de programar é conseguir tirar o máximo que |
| 12:39 | o hardware oferece. Vamos dar um exemplo besta. Já sabemos como CPUs fazem adição. Subtração e multiplicação |
| 12:46 | é a mesma coisa. Podemos desenhar circuitos equivalentes ao somador completo e implementar com transistors. Como falei antes, no 6502 temos a instrução ADC pra adição e SBC |
| 12:55 | pra subtração, mas não tem multiplicação. No caso de uma adição somar o número 1 milhão mais 1 milhão não vai gastar muito mais clocks do que somar 5 milhões com 5 |
| 13:04 | milhões. Mas multiplicação é mais complicado. Digamos que você, que nunca estudou nada de engenharia ou ciências da computação |
| 13:10 | pense numa forma de implementar multiplicação só usando operações básicas que falamos até agora como adição, o que você faria? Eu aposto como a solução mais imediata que |
| 13:19 | todo mundo pensaria seria via adições sucessivas. Por exemplo se quisermos multiplicar 278 vezes 7, você iria somando 278 sete vezes até dar 1148. Seriam só 7 adições e não parece |
| 13:31 | tão ruim assim. Mas e se quisermos multiplicar 10 mil vezes 10 mil? Agora precisaríamos fazer 10 mil |
| 13:40 | somas pra chegar no resultado. Isso é consideravelmente mais devagar. Vamos usar tempos falsos só pra ilustrar. Pra somar cada bloco de 8 bits digamos que precisariamos gastar uma instrução |
| 13:49 | de LOAD, uma de ADC e outra de STORE, cada um custando uns 5 ciclos de clock. 10 mil |
| 13:55 | é um número que podemos representar em 2 bytes ou 16 bits. Então são pelo menos 2 |
| 14:01 | loads, 2 adc e 2 stores. Portanto são 6 instruções custando uma média de 5 ciclos de clock, ou seja 30 ciclos. |
| 14:10 | Em 1 Mhz podemos ter no máximo umas 33 mil sequências dessa por segundo. Mas se precisamos |
| 14:17 | executar 10 mil sequências de soma dessas gastaríamos 1/3 de segundo ou pelo menos |
| 14:22 | 300 milissegundos. Lembrando que estou considerando condições ideais de temperatura e pressãol, |
| 14:28 | como a gente falava no colégio, ou seja provavelmente gastaria mais ciclos que isso. Parece pouca |
| 14:34 | coisa mas 300 milissegundos é mais tempo que leva pra você pedir uma página num site, ele processar, retornar o HTML e seu navegador renderizar. Aliás, se sua aplicação web |
| 14:41 | demora 300 milissegundos pra responder, isso é considerado muito lento hoje em dia. Pra variar, não existe uma fórmula universal de multiplicação que tem 100% de melhor |
| 14:51 | performance pra todos os casos. Isso é uma coisa que como programador você precisa entender: |
| 14:57 | existem fórmulas que funcionam melhor pra casos diferentes. Por exemplo, no episódio anterior eu já disse como faz multiplicação por 2: basta fazer um shift left, que é o |
| 15:06 | equivalente a adicionar um zero no final do binário e pronto, tá multiplicado numa única instrução. |
| 15:12 | Existe um método ensinado no primário de escolas Russas que ficou famoso porque a gente |
| 15:19 | associa tudo que é russo com excelência em matemática. Na real é um método bom |
| 15:24 | pra números pequenos e não é particularmente bom pra computadores. É chamado de método do camponês russo. Vou explicar só por curiosidade pra vocês conseguirem ver o quanto é possível |
| 15:32 | se pensar só numa operação que todos vocês consideram trivial quanto uma multiplicação,. O método é assim: dobre o primeiro fator, divida o segundo fator pela metade. Se o segundo |
| 15:42 | fator for par ignore e repita. Se o segundo número for ímpar, some com o primeiro fator |
| 15:48 | anterior. Por exemplo, digamos que eu quero multiplicar 278 por 7 como falamos acima. Primeiro dobramos o primeiro fator. Multiplicar por 2 todo mundo consegue fazer de cabeça |
| 15:56 | e vai dar 556. Daí 7 divido por 2 é 3. 3 é impar então somamos 556 com 256 e temos |
| 16:03 | 834. Agora dobramos 556 de novo e vamos ter 1112. No segundo fator temos 3 dividido por 2 que é 1, que é impar, então somamos com 812 com 1112 e vamos ter 1.946. Como o segundo |
| 16:13 | fator chegou a 1 não temos mais como dividir por 2 e acabamos e a resposta é 1.924. Pode |
| 16:19 | abrir uma calculadora aí e checar. Não é difícil implementar isso em Assembly. Existe um site excepcional que é a fonte |
| 16:27 | de referência de qualquer um que quer implementar um emulador de NES que é o Wiki Nesdev e |
| 16:34 | quando ele fala de multiplicação ele implementa justamente esse algoritmo do camponês russo que em Assembly fica assim: |
| 16:40 | https://wiki.nesdev.com/w/index.php/8-bit_Multiply ``` ;; ; Multiplies two 8-bit factors to produce a 16-bit product ; in about 153 cycles. ; @param A one factor |
| 16:46 | ; @param Y another factor ; @return high 8 bits in A; low 8 bits in $0000 ; Y and $0001 are trashed; X is untouched |
| 16:53 | .proc mul8 prodlo = $0000 factor2 = $0001 ; Factor 1 is stored in the lower bits of prodlo; the low byte of |
| 17:00 | ; the product is stored in the upper bits. lsr a ; prime the carry bit for the loop |
| 17:06 | sta prodlo sty factor2 lda #0 ldy #8 loop: ; At the start of the loop, one bit of prodlo |
| 17:14 | has already been ; shifted out into the carry. bcc noadd clc |
| 17:20 | adc factor2 noadd: ror a ror prodlo ; pull another bit out for the |
| 17:26 | next iteration dey ; inc/dec don't modify carry; only shifts and adds do bne loop |
| 17:32 | rts .endproc ``` Você dá load do multiplicador no acumulador, load do multiplicando no registrador Y e roda |
| 17:40 | essa rotina e ele vai gravar o low byte do resultado no endereço $0000 e o high byte |
| 17:51 | em A. Lembrando que o resultado de uma multiplicação costuma ser um número com o dobro de bytes |
| 17:58 | dos fatores, então multiplicar 2 números de 8 bits dá um resultado de 16 bits. |
| 18:03 | Esse algoritmo gasta em torno de 150 ciclos. Se seu programa for ter poucas multiplicações pode ser suficiente. Mas qualquer operação que gasta mais que 100 ciclos num processador |
| 18:12 | como o 6502 não pode ser considerado rápido e claro, existem maneiras mais rápidas que |
| 18:18 | isso. E aqui vem outro insight que como programador você precisa ter na cabeça. Algoritmos costumam |
| 18:25 | ser um balanço de dois fatores: se você quiser economizar memória vai acabar gastando mais ciclos de processamento. Se quiser velocidade economizando ciclos provavelmente vai gastar |
| 18:31 | mais memória. Por exemplo, sem saber nada de computação, como você faria multiplicações rápido no primário? Pra números pequenos você provavelmente teria que ter decorado a tabuada, lembram |
| 18:40 | disso? Tenho certeza que a maioria odiava ter que decorar a tabuada. Mas lembrem de uma coisa, a tabuada é uma tabela pré-calculada. Imagine uma tabela pré-calculada pra todos |
| 18:50 | os valores de 8-bits. Daí basta achar a posição na matrix com o resultado direto. Você vai |
| 18:56 | gastar ciclos pra pré-calcular a tabela da primeira vez ou pode ler direto a tabela de uma ROM. O problema dessa solução é que fácil ela vai ocupar 16 kilobytes de espaço. |
| 19:05 | Considerando que um Super Mario Bros inteiro cabe em 40 kilobytes estamos falando em gastar 1 terço disso só numa tabela de números, o que seria um enorme desperdício. |
| 19:13 | Uma tabela pré-calculada é o que costumamos chamar de lookup table e isso é uma técnica usada em todos os lugares da computação. Por exemplo, mesmo você que faz desenvolvimento |
| 19:22 | web já usou isso. Por exemplo quando faz caches com um Redis ou Memcache, é um lookup |
| 19:28 | table. Quando cria índices numa tabela de banco de dados, isso é um tipo de lookup table. O problema é que se o lookup table for grande demais, o tempo pra procurar na |
| 19:37 | tabela também pode começar a ser um problema, fora o espaço caso você não pense na melhor |
| 19:43 | maneira. Mas como seria uma maneira melhor então? E aqui a matemática nos ajuda. Se você estudou Álgebra e trigonometria não vai achar estranho o que vou dizer a seguir. Uma multiplicação |
| 19:53 | de dois fatores a e b pode ser descrita de maneiras diferentes. Por exemplo, ela pode ser a exponencial da soma dos logaritmos de a e b. Se quiser ser mais complicado ainda |
| 20:03 | ela pode ser a soma do cosseno de x mais y com o cosseno de x - y dividido por 2. Sendo |
| 20:12 | que x é o arco cosseno de a que também é chamado do cosseno inverso de a. Arco cosseno |
| 20:22 | é usado pra terminar o ângulo do cosseno em radianos. Y da mesma forma é o arco cosseno |
| 20:29 | de b. Continuando, a vezes b pode ser também o quadrado de a mais b - o quadrado de a - o |
| 20:38 | quadrado de b tudo dividido por 2 ou finalmente, pode ser o o quadrado de a mais b menos o |
| 20:43 | quadrado de a - b tudo dividido por 4. E essa opção final é que nos interessa, pois podemos reduzir a fórmula pra ser a subtração de a mais b aplicado numa função F com a menos |
| 20:56 | b na mesma função F, sendo essa função F o quadrado do número que passarmos dividido |
| 21:01 | por 4. A parte importante é que decompomos a multiplicação numa adição dos fatores, subtração dos |
| 21:08 | fatores e subtração do resultado de uma função. E a essa função reduziu o lookup table pra em vez de ser todos os possíveis resultados da multiplicação de todos os |
| 21:17 | números, podemos simplesmente ter uma tabela só com o resultado da multiplicação do |
| 21:23 | quadrado dos números. Ou seja, de 1 vezes 1, de 2 vezes 2, de 3 vezes 3 até 65.535 |
| 21:29 | vezes 65.535, que é uma quantidade pré-calculada ordens de grandeza menor, basicamente 65.535 números de 16-bits que ocuparia 510 bytes de memória em vez de mais de 16 kilobytes. |
| 21:37 | E pra calcular o quadrado de todos os números, existe ainda a propriedade que o quadrado do número é o quadrado do número anterior mais um número impar. Quadrado de 1 é zero |
| 21:47 | mais 1. Quadrado de 2 é o 1 anterior mais o próximo impar que é 3, resultado 4. Quadrado |
| 21:52 | de 3 é 4 mais o próximo impar 5 que dá 9. Quadrado de 4 é 9 mais o impar 7 que dá |
| 21:59 | 16. Quadrado de 5 é 16 mais próximo impar 9 que dá 25 e assim por diante. |
| 22:04 | E como eu disse no começo, dá pra ir longe estudando sobre assembly. Outros assuntos |
| 22:10 | que estava pensando em cobrir neste episódio incluem o conceito de complementar de dois, |
| 22:16 | números inteiros com sinal pra lidar com negativos, algoritmo de Booth pra multiplicação |
| 22:22 | e muito mais. Mas é coisa demais e nem eu tenho toda essa paciência, então deixo pra |
| 22:29 | vocês mesmo pesquisarem. Mas eu queria gastar pelo menos um pouco de tempo mostrando essa linha de raciocínio |
| 22:36 | pra vocês entenderem que não, hoje em dia você dificilmente vai gastar tempo implementando |
| 22:42 | uma multiplicação na mão. A grande maioria das linguagens de programação já trás um conjunto de algoritmos pré-prontos que ele escolhe sozinho qual é o melhor pra cada |
| 22:50 | caso e você nem precisa se preocupar com isso. Mas é importante você entender que tudo que uma linguagem te oferece, cada pequena |
| 22:57 | coisinha insignificamente como aquele mero asterisco de multiplicação teve milhares de horas homens de pesquisa, experimentação, otimizações. Literalmente muito suor e lágrimas |
| 23:02 | até chegar no estado da arte que você usa hoje sem nem pensar. É isso que significa subir nos ombros de gigantes, porque é com o conhecimento acumulador de centenas de anos |
| 23:12 | de álgebra, cálculos, trigonometria e muito mais que esse asterisco de multiplicação se tornou possível e você consegue multiplicar dois números de praticamente qualquer tamanho |
| 23:21 | em microssegundos. E também é pra entender que muita coisa hoje ainda tem uma fórmula perfeita. Eu disse |
| 23:29 | que temos CPUs hoje com dezenas de milhões de vezes mais transistors que um 6502 mas |
| 23:35 | ainda assim não temos programas dezenas de milhões de vezes melhores. Isso porque muitas partes do software que usamos ainda não está rodando da melhor forma possível. Grande |
| 23:45 | parte do que é o trabalho de um programador é não ignorar os problemas e parar pra tentar |
| 23:55 | encontrar formas mais inteligentes de fazer o computador processar. Muito bem, vamos voltar rapidamente ao nosso nintendinho. Assim como no exemplo do protoboard |
| 24:04 | do Ben Eater, o PCB que é sigla pra Printed Circuit Board ou placa de circuito impresso, |
| 24:13 | contém o cérebro que é o 6502 e diversos outros chips como chip de RAM, chip de VRAM |
| 24:20 | que é memória de vídeo, e outros componentes como pra ligar seus controles, a PPU que é |
| 24:27 | o Picture Processing Unit ou unidade de processamento de imagens que é a versão primitiva do que |
| 24:37 | hoje você chamaria de GPU e serve pra processar as imagens que vão pra TV e o APU ou audio |
| 24:44 | processing unit pra processar som. O nintendinho já foi tão completamente dissecado nas últimas décadas que temos documentação |
| 24:50 | super completa de cada componente em detalhes suficiente pra ter muita gente fabricando componentes e PCB novos. Você consegue literalmente comprar um hardware moderno de nintendinho |
| 24:59 | hoje se quiser e ele vai ser 100% compatível com qualquer cartucho que você tenha guardado. |
| 25:04 | Mas pro me interessa, a documentação é tão boa que é possível criar emuladores |
| 25:10 | em software que se comportam exatamente como o hardware. Eu não sei se hoje em dia vocês |
| 25:15 | conseguem entender a beleza disso. Todo hardware tem a capacidade de simular o comportamento |
| 25:21 | de outro hardware via software. E praticamente toda linguagem de programação consegue representar qualquer hardware. |
| 25:27 | A tecnologia de virtualização não é novidade. Desde os antigos mainframes da IBM nos anos 60 já era possível criar containers de virtualização, onde o software rodando dentro acha que está |
| 25:36 | sozinho na máquina. O assunto virtualização é em si só bem cabeludo e por isso eu fiz |
| 25:41 | dois videos sobre isso que você pode assistir se ainda não viu, vou deixar o link nas descrições |
| 25:46 | abaixo. Mas o que estamos interessados é a categoria de full virtualization, onde emulamos um outro hardware por completo. É o que você tem quando roda um Virtualbox ou QEMU. E é |
| 25:56 | o que você tem quando roda um emulador de nintendinho como um Nestopia. Tendo documentação tão completa como o Wiki Nesdev que eu mencionei antes, poderíamos |
| 26:04 | escrever nosso próprio emulador. E como alguém faria isso? É um processo mais trabalhoso do que difícil porque você precisa ter o trabalho meticuloso de implementar cada detalhe |
| 26:13 | que está nas documentações, mas por exemplo, podemos começar criando um projeto vazio, digamos usando a linguagem Go. Aliás, como o nintendinho é bem antigo, qualquer linguagem |
| 26:20 | hoje consegue simular um 6502 e os outros componentes. Não existe "O" jeito correto de se escrever um software. Se você pegar diferentes emuladores |
| 26:27 | de nintendinho vai ver que eles são organizados e escritos de maneiras diferentes. Só com experiência e muitos testes você vai chegar no que é o melhor balanço entre legibilidade |
| 26:34 | e eficiência. Mas pra ser simples podemos pensar nos componentes principais que eu falei agora. O elemento que queremos emular é o console então podemos começar criando um |
| 26:40 | arquivo chamado console.go e dentro dele definir o tipo console como uma estrutura. E não se preocupe se você nunca viu Go, não é relevante entender cada linha do código, |
| 26:50 | só a linha de raciocínio. Então nossa estrutura vai declarar ponteiros pra CPU, pro APU, pro PPU, pro cartucho, pros |
| 26:56 | dois controles, pra um troço que vou explicar depois chamado Mapper, delimitamos a RAM que é só um array. Agora precisamos criar arquivos pra cada um desses componentes e definir as |
| 27:02 | estruturas de cada um. Vamos criar então o arquivo cpu.go. A estrutura CPU vai ter muitos dos elementos que eu expliquei no vídeo anterior, por exemplo, |
| 27:10 | começamos definindo uma referência pra uma estrutura de Memory que vou explicar depois. Daí vamos definir PC que é o contador de programar como um inteiro gigante de 64-bits, |
| 27:21 | e nem precisava ser tão grande. Vamos definir o SP que é o apontador de pilha como um inteiro de 16-bits. Daí os registradores todos de 8 bits, ou seja 1 byte, temos o acumulador, |
| 27:31 | o X, o Y, o C, Z, I, D, B, U, V, N. E por fim temos uma última estrutura importante, |
| 27:37 | um array de instruções. Lembra que cada instrução como LDA tem um hexadecimal associado? Pois é, precisamos colocar cada opcode na posição correta nessa lista. Quando quisermos achar a instrução |
| 27:45 | 0xa9 que é o LDA vamos pra posição 0xa9 que é a posição 169 nessa lista. Daí vamos |
| 27:50 | encontrar a referência pra uma função de Go. Agora precisamos implementar cada uma dessas funções. Por exemplo, o nosso LDA sabemos que vai escreve o valor do argumento no registrador A que |
| 27:57 | é o acumulador. Sabemos também que JSR é o Jump pra uma subrotina, o que ele faz é empurrar o endereço no contador de programas pra pilha e sobrescrever o contador de programa com o endereço da |
| 28:06 | subrotina pra onde tem que pular. E assim vai, tem que escrever um a um de acordo com a especificação na documentação do |
| 28:13 | 6502. Uma vez feito isso podemos criar o inicializador NewCPU que vai alocar a estrutura que definimos. |
| 28:19 | Esse inicializador recebe uma referência pra estrutura de console que criamos antes pra passar pra essa nova estrutura chamada Memory. Deixa esse Memory de lado que ainda |
| 28:26 | não é hora pra ele. Em seguida precisamos criar e popular a tal tabela com referências pras instruções que criamos. Finalmente damos Reset nos registradores. |
| 28:32 | Reset é o que você pensou mesmo: o equivalente a você apertar o botão reset que todo console |
| 28:38 | e computador tem. A idéia é limpar o contador de programas pra apontar pro endereço 0xFFFC, |
| 28:44 | lembra no episódio anterior que quando o 6502 inicializa a primeira coisa que ele faz |
| 28:49 | é ir no endereço 0xFFFC procurar a primeira instrução do programa? Pois é. E em seguida |
| 28:54 | limpamos o apontador de pilha pra iniciar em 0xFD. Tem mais coisas que precisam ser feitas pra CPU ficar completa mas por agora vamos pular |
| 29:02 | pra essa tal de Memory criando um arquivo memory. A estrutura em si é muito simples. Ela só vai apontar pra uma referência à estrutura de Console que já definimos antes. |
| 29:11 | A parte importante começa com a função Read. Nós passamos um endereço e ele vai devolver algum valor. |
| 29:16 | Aqui começa a diferença de um nintendinho e outros computadores que usam o processador 6502 como um Atari ou Apple II, o mapa de memória. No episódio anterior eu expliquei |
| 29:24 | que temos endereços de 16-bits então podemos mapear do endereço 0x0000 até 0xFFFF, daí nós dividimos esse espaço e por exemplo a CPU ia procurar no EEPROM se passássemos |
| 29:33 | endereços acima de 0x8000. A grosso modo do endereço 0x0000 até 0x7FF temos 2 kilobytes de RAM. Nos endereços de |
| 29:41 | 0x2000 a 0x2007 que é bem curto temos registradores pra PPU. De 0x4000 a 0x4017 acessamos a APU |
| 29:49 | e registradores de I/O como os controles e só de 0x4020 a 0xFFFF temos o equivalente |
| 29:55 | a uns 50 kilobytes reservados pra endereços que mapeia pra ROM, ou seja pro cartucho. |
| 30:01 | Em particular se acessarmos acima do endereço 0x6000 temos esse negócio que colocamos no |
| 30:06 | código chamado Mapper. Agora vocês precisam entender os truques que eram usados em consoles |
| 30:11 | com cartuchos. Se sua história com games começa só depois do Playstation 1, você está acostumado a |
| 30:17 | ter os games em CDs, DVDs, Blu-Ray ou instalados no HD do seu computador. Daí é de praxe |
| 30:23 | que toda vez que quer jogar tem que esperar o famoso "Loading", que é o tempo do computador |
| 30:29 | começar a carregar os primeiros bytes do jogo na RAM pra só depois conseguir começar a jogar. Daí a cada fase tem que carregar novos bytes pra RAM e jogar fora os bytes |
| 30:40 | da fase anterior que não vai precisar mais. Isso é necessário porque não cabe todo o jogo na memória. Um computador muito bom hoje tem 16 GB, mas qualquer jogo moderno |
| 30:49 | tem 30 GB, 40GB, alguns jogos podem ter absurdos 100GB. Obviamente não cabe tudo na RAM então precisa ir carregando e descarregando. |
| 30:55 | Cartuchos funcionam diferente. O que tem num cartucho é uma ROM, como expliquei no episódio anterior. Então quando você pluga o cartucho no console, não existe loading, não tem |
| 31:02 | que carregar nada e ele pode iniciar imediatamente porque a CPU acessa os endereços diretamente da ROM, sem precisar carregar o jogo em memória. O cartucho "É" a memória. Entenderam? Diferente |
| 31:10 | de CD ou HD, a ROM do cartucho já tem velocidade máxima de acesso, igual da RAM. Da mesma |
| 31:15 | forma que a CPU consultaria um endereço na RAM, no caso pedindo endereços de 0x0000 |
| 31:21 | a 0x7FF, quando ele precisa de dados do jogo ele pede nos endereços acima de 0x4020 até |
| 31:28 | 0xFFFF. Por isso jogos de consoles antigos carregam instantaneamente e não tem loading entre |
| 31:36 | fases e tudo é rápido. Inclusive é isso que a nova geração de consoles PS5 e Xbox |
| 31:42 | Series X estão tentando combater colocando os SSDs e controladores mais rápidos do mercado pra minimizar ao máximo o tempo de carregar coisas do disco. Mesmo assim o tempo nunca |
| 31:52 | vai ser zero como era nos cartuchos. De novo vou repetir o que eu disse antes: programação é sempre um trade off, uma |
| 32:01 | troca. Cartuchos tem tempo zero de carga porque ele é a própria memória. O problema é |
| 32:07 | que chips de ROM são caros de produzir comparado a discos de HD ou Blu-Rays. É extremamente |
| 32:14 | mais caro. A comparação mais óbvia foi na transição dos cartuchos pro CD quando |
| 32:19 | saiu o Playstation 1 e o concorrente na época era o Nintendo 64 que preferiu usar cartuchos |
| 32:25 | pelas razões que eu acabei de falar. Jogos de Playstation podiam ter videos e muito mais conteúdo porque num CD daquela época |
| 32:33 | era possível colocar até 650 megabytes de dados. Em comparação um dos maiores cartuchos |
| 32:38 | de Nintendo 64 era Conker's Bad Fur Day que tinha enormes 60 megabytes. Os clássicos |
| 32:43 | Zelda Ocarina of Time e Majora's Mask eram cartuchos de menos de 30 megabytes. Por isso |
| 32:50 | jogos de Nintendo 64 raramente tinham algum video e quando tinham eram de extrema baixa |
| 32:56 | qualidade e também por isso eles preferiam usar o mínimo de texturas nos modelos em 3D porque texturas são imagens bitmap que consomem muito espaço. |
| 33:01 | Voltando pra era dos 8-bits. Um cartucho como do Super Mario original tem 40 kilobytes, portanto encaixa no nosso espaço de endereços que consegue acessar até no máximo 50 kilobytes. |
| 33:09 | Mas um Super Mario 3 tem 385 kilobytes, quase 10 vezes mais bytes que o original. Um dos jogos mais pesados do nintendinho é Kirby's Adventure e se você rodar vai ver um dos |
| 33:17 | games mais bem elaborados pro nintendinho, chega a ficar próximo do que seria um jogo de Super Nintendo. Também pudera, o cartucho dele tem 769 kilobytes, chegando perto de |
| 33:25 | 1 megabyte. Mas como é possível endereçar isso tudo de bytes só com endereços de 16-bits? Agora |
| 33:31 | vem o segundo grande fato sobre cartuchos: eles não tem só chips de ROM. Na realidade um cartucho é uma placa de expansão, um PCB completo. Quando falo em placas, pense |
| 33:39 | mesmo como quando você compra uma placa gráfica como um novo NVIDIA RTX 2080 e espeta no slot PCI na placa mãe do seu computador. Encaixar um cartucho no console é a mesma coisa. |
| 33:48 | Num PCB você pode plugar não só ROM como qualquer outro componente. Por exemplo, você pode colocar um chip de SRAM e uma bateria de lítio e boom, você acabou de ganhar a |
| 33:55 | capacidade de salvar o jogo. Só que isso torna o cartucho mais caro, claro, por isso |
| 34:00 | nem todo jogo podia salvar. Um dos chips mais famosos se você jogou Super Nintendo foi o chip Super FX, que literalmente era uma placa primitiva 3D que permitiu jogos como |
| 34:09 | Star Fox. O processo é o mesmo, o chip vem no PCB do cartucho. |
| 34:15 | Você literalmente poderia enfiar um nintendinho inteiro dentro de um cartucho. Mas só isso |
| 34:21 | não responde a pergunta de como fazia pra um Kirby ter quase 1 mega de dados. Não basta |
| 34:30 | só enfiar mais chips de ROM se não temos endereços suficientes pra passar de 50 kilobytes. |
| 34:38 | Endereços funcionam como o nome diz, é como se tivéssemos uma rua de casas e só tivesse |
| 34:44 | 50 números, da casa 51 em diante ficaria sem números. Se o carteiro precisasse entregar alguma coisa nessas casas como ele encontra? E se nessa rua colocássemos um síndico, que separasse a rua em blocos? Daí teria |
| 34:55 | casa de 1 a 50 no bloco A, casas de 1 a 50 no bloco B e assim por diante. Continua só |
| 35:03 | tem 50 números mas dependendo do bloco sempre encontraríamos uma casa. E é exatamente isso que o nintendinho faz. No cartucho além de vir mais ROM ele vem com um controlador |
| 35:16 | que chamamos de Mapper, literalmente é o mapeador. Por isso colocamos no código do emulador. |
| 35:21 | O Mapper faz exatamente isso. Em vez de blocos na rua do nosso exemplo a memória ROM é |
| 35:27 | dividida em Banks ou bancos. E a técnica de ter mais memória se chama Bank switching. A CPU continua só conseguindo enxergar dos endereços 0x4020 a 0xFFFF mas ele pode pedir |
| 35:35 | pro Mapper trocar os banks, assim como no exemplo dos blocos da rua. Os banks costumam ter 16 kilobytes de tamanho e podemos ter vários banks, então se montaros o cartucho |
| 35:48 | com ROM suficiente pra 50 banks de 16 kilobytes, vamos ter os quase 800 kilobytes do jogo Kirby. |
| 35:56 | Agora vem a parte cabeluda pra fazer emulador de NES: não basta só escrever código que |
| 36:02 | representa o console, precisa também emular os chips que vem nos cartuchos, em particular esses mappers. Você pode imaginar que deve ter alguns poucos. Mas que nada, se olhar |
| 36:11 | a biblioteca toda de games de nintendinho existem 407 mappers que foram encontrados e documentados. Por sorte, se você cobrir os mappers da própria nintendo e alguns de |
| 36:21 | algumas marcas famosas como Konami, isso já cobria a maior parte dos jogos. Muitos mappers |
| 36:26 | só existem em jogos muito obscuros, muitos feitos na China ou lugares assim. |
| 36:31 | Se você olhar de novo no wiki da nesdev vai encontrar o código que vem no cartucho que |
| 36:37 | identifica qual mapper ele tem. Por isso no nosso arquivo de mapper vamos definir uma |
| 36:44 | interface que todos os mappers vão ter que implementar. Basicamente definimos o que um |
| 36:49 | Mapper precisa fazer que é ler da ROM, gravar na RAM basicamente. No inicializador pegamos o cartucho associado no console. Depois que carregarmos uma ROM |
| 36:57 | ele vai preencher esse Mapper com o código e com isso podemos checar qual mapper vamos |
| 37:02 | ter que carregar. Neste pequeno emulador em Go vai ter só alguns dos principais. De curiosidade |
| 37:08 | esse último mapper código 225 é o que permite aqueles cartuchos de 52 jogos em 1 que você |
| 37:14 | já deve ter visto por aí. Um cartucho desses tinha 6 chips de ROM com meio megabyte cada. |
| 37:22 | Não vou entrar no detalhe, mas só pra mostrar como ficaria, podemos criar um arquivo pro |
| 37:28 | mapper 2. Lembrando que no nosso caso usando máquinas modernas, nós não temos esses limites pequenos de 16-bits. Então podemos carregar a ROM de um cartucho como um arrayzão |
| 37:37 | contínuo de bytes, seja lá quantos bytes tiver porque temos espaço pra mapear tudo. |
| 37:42 | Então recebemos o endereço que o CPU manda e mapeamos com esse arrayzão. |
| 37:48 | No caso o que nos interessa é que quando carregamos a ROM os bytes são divididos em algumas áreas sendo as duas principais o PRG e CHR. PRG são os bytes de programa. |
| 37:56 | CHR são os bytes de caracteres, que é a área onde normalmente estão os tiles. Eu sempre chamo de tiles mas se for traduzir é como se fossem azulejos. |
| 38:04 | O princípio de tiles é simples. Um videogame como nintendinho não fica escrevendo pixel a pixel na tela. Ele escreve tiles. Pense num nintendinho como um editor de textos. |
| 38:13 | Um editor não escreve pixel a pixel na tela, ele escolhe uma letra de alguma família de |
| 38:18 | fontes, digamos Arial, e passa o código que representa ela. E o Windows vai se encarregar de realmente desenhar os pixels como precisar. |
| 38:25 | No nintendinho quem se encarrega de desenhar os pixels é a PPU que eu falei que é a unidade |
| 38:33 | de processamento de pixels. O CPU não entende pixels, ele entende tiles. Se você é de |
| 38:39 | front-end já lidou com algo assim, são os sprites de CSS. Aliás a técnica de sprites |
| 38:45 | de CSS não é novidade, isso é uma técnica antiga. Outra técnica antiga são fontes |
| 38:50 | com imagens como a Font Awesome. A memória CHR da ROM que eu falei é como se fosse uma |
| 38:55 | Font Awesome. Cada fonte é um tile. Acho que assim vocês conseguem visualizar na cabeça. Aliás, consoles antigos assim sequer tem fontes ou tabela de letras. Cada jogo define |
| 39:04 | suas fontes e o código das letras, não tem um padrão como ASCII ou Unicode. A PPU só consegue enxergar 8 kilobytes de tiles de cada vez, então toda vez que precisamos |
| 39:14 | de tiles diferentes, o CPU pede pro Mapper trocar o banco por outro. Existem dois excelentes |
| 39:19 | emuladores pra quem quer aprender a programar jogos de verdade de nintendinho. Um deles é o FCEUX que acho que é o mais conhecido e o outro é o Mesen que eu acho que tem ferramentas |
| 39:32 | mais modernas. Vocês entenderam o que fizemos até agora? Eu fui estruturando o nintendinho como código de Go. Cada aspecto dele são estruturas de dados normais como arrays e bytes. Bytes na |
| 39:40 | memória que sabemos exatamente onde estão e com isso podemos consultar a qualquer momento. Seja em Go, seja em C ou C++ vai ser a mesma coisa. O emulador Mesen implementa de forma |
| 39:52 | parecida mas além de só emular ele expõe essas estruturas de forma visual em tempo |
| 40:01 | real. Por exemplo, podemos abrir um visualizador da memória da PPU e organizar pra vermos |
| 40:08 | os bitmaps. E olha só o que tem na memória da PPU, esses são os tiles. Cada tile é um quadrado de |
| 40:14 | 8 por 8 pixels. Se eu não estou enganado, cada tile consegue escolher 4 cores de um total de 12 cores de uma paleta, num total de 4 paletas que posso escolher. Em outra |
| 40:26 | aba podemos ver as 12 cores da paleta de background e outras 12 cores da paleta pros sprites. Se você já brincou de front-end, HTML e CSS certamente já viu código de cores em |
| 40:35 | hexadecimal, é a mesma coisa. Como a localização dessa área CHR na ROM é conhecida, podemos editar o que tem lá. |
| 40:42 | Os tiles são bitmaps não comprimidos. Hoje em dia você está acostumado a ligar com |
| 40:47 | imagens comprimidas como JPEG que é usa um algoritmo chamado lossy, ou seja, que perde |
| 40:52 | detalhes da imagem pra reduzir o tamanho. Um bitmap é exatamente o que o nome diz, |
| 40:58 | um mapa de bits, nas posições exatas pra formar a imagem e sem nenhuma compressão. Só pra mostrar como podemos afetar o jogo, com o Mesen rodando podemos editar as cores |
| 41:07 | da paleta de background e trocar a cor do céu de azul pra outra cor. Ou podemos mexer |
| 41:13 | na paleta de sprites e trocar a cor do Mario. Você pode mudar completamente a aparência |
| 41:19 | do jogo só de ajustar as cores dessa forma. Pense na tabela de tiles como se fosse uma tabela de fontes de letras. Aliás, o nintendinho |
| 41:28 | sequer tem fontes. Ele não tem um sistema operacional, o jogo começa rodando direto |
| 41:34 | no hardware, sem nenhuma camada intermediária pra ajudar. Então se um jogo quer escrever textos na tela, ele próprio precisa embutir tiles de fontes. E de fato você vai ver que |
| 41:45 | normalmente começando no endereço zero dessa área CHR costuma ter letras, números e símbolos. Aqui o número zero é a posição zero mesmo, o número um é posição um e assim por diante. |
| 41:57 | E começando do zero até a letra F fica bonitinho. Lembra quando usamos no Linux a ferramenta hexdump ou xxd e na terceira coluna ele tenta |
| 42:04 | interpretar bytes que mapeiam pra tabela ASCII como letras e às vezes aparecem textos mesmo? Numa ROM de videogame isso não funciona porque os códigos das letras não seguem a tabela |
| 42:14 | ASCII. Mesmo entre jogos diferentes a posição das letras na ROM não é a mesma. Por isso |
| 42:19 | em emuladores com debug como o Mesen e FCEUX podemos carregar nossa própria tabela. Assim |
| 42:26 | podemos tentar reconhecer algum texto no meio do binário. Por exemplo essa é uma tabela no formato TBL que eles entendem. Vejam no espaço PRG |
| 42:35 | da ROM que não dá pra identificar nada. Mas carregando a tabela começamos a reconhecer quais bytes são textos. E com isso posso editar o texto, por exemplo trocando de MARIO |
| 42:44 | pra FABIO e resetar e olha só como aparece meu nome. Podemos trocar todos os textos num |
| 42:52 | cartucho contanto que o texto novo caiba no mesmo espaço usado pelo texto antigo. Esse |
| 42:58 | é o hacking mais simples de todos e que todo mundo que já brincou com binários já fez |
| 43:05 | na vida. Se tiver filhos pequenos imagino que eles vão gostar de ver os nomes deles |
| 43:11 | nos jogos. E podemos editar o binário não só do texto como dos tiles. Por exemplo existem programas |
| 43:17 | como o Tile Layer Pro. Se abrirmos a ROM do Super Mario, no começo vamos ver um monte |
| 43:22 | de sujeira que são bytes de programa, mas se descermos vamos encontrar os tiles do jogo. Pra enxergar melhor podemos mudar a paleta e rapidamente vamos começar a reconhecer |
| 43:33 | alguns, como os tiles que formam o personagem. Pra ver melhor, podemos arrastar os tiles |
| 43:38 | pra esta outra janela e montar como um quebra cabeça. O Mario é formado por seis tiles. E na ROM tem a sequência pra cada posição da animação, seja correndo ou pulando. Mas |
| 43:46 | só assim podemos ter uma idéia. Mas podemos fazer mais, podemos editar cada tile e mudar o jogo completamente. É um puta |
| 43:53 | trampo editar tile a tile mas se tiver paciência fazendo isso eu poderia pegar os bits de tiles de um Zelda ou Megaman e mudar o Mario pra ser o Link, ou qualquer outro personagem que |
| 44:06 | caiba em seis tiles ou menos. E só com as técnicas eu mostrei aqui você poderia fazer |
| 44:11 | um novo jogo usando um que já existe como base. Sabe quem já fez isso? A Tectoy aqui no Brasil. Por causa deles nós somos o único país |
| 44:23 | no mundo que ainda produz Master System novo até hoje. O Master System foi o concorrente |
| 44:30 | do nintendinho nos anos 80. Também é um console de 8 bits mas no papel ele era tecnicamente |
| 44:37 | superior. Em vez do MOS 6502 de 1.8 Mhz o Master System vinha com o Zilog Z80 que ia |
| 44:42 | até 3.5 Mhz, quase o dobro de clock. Em vez de 2k de RAM e 2k de VRAM ele vinha com 8k |
| 44:49 | de RAM e 16k de VRAM. Em vez de ser limitado a ter só 16 cores na tela, ele podia ter |
| 44:56 | 32 cores, por isso jogos de Master System sempre parecem mais coloridos e vivos, porque tinha uma paleta mais variada e podia exibir mais cores. |
| 45:03 | Essa discussão de especificações e jogos sempre foi uma constante nas rodas de gamers. Um Xbox One X é tecnicamente mais poderoso que um PS4 Pro, mas o Playstation continua |
| 45:14 | tendo alguns dos melhores jogos exclusivos como God of War ou Spiderman. Nos anos 80 |
| 45:19 | não era diferente. O Master System era mais poderoso mas as marcas que chamavam mais atenção |
| 45:27 | estavam no Nintendinho. De qualquer forma o Master System conseguiu um público cativo aqui no Brasil e a Tectoy |
| 45:33 | começou não só a licenciar e distribuir jogos estrangeiros como começou a lançar jogos brasileiros. Um grande exemplo que eu lembro que me impressionou na época foi o |
| 45:42 | jogo da Turma da Mônica. Esse jogo na realidade é o Wonder Boy II com textos e sprites editados pra encaixar |
| 45:50 | numa história da Turma da Mônica. Se nunca viram olhem lado a lado. A Tectoy produziu vários jogos usando essas técnicas como Geraldinho, Sapo Xulé, TV |
| 45:59 | Colosso. Mas fazendo isso eles foram aprendendo como de fato programar no Master System e |
| 46:04 | começaram a produzir jogos mais elaborados. Por exemplo, um dos melhores jogos de Master |
| 46:10 | System sem dúvida é Castle of Illusion e Land of Illusion. Daí a Tectoy pegou emprestado |
| 46:15 | elementos desses jogos e fez um terceiro jogo com fases novas e inimigos novos chamado Legend of Illusion. É bem claro onde são sprites dos jogos anteriores e quais são sprites |
| 46:24 | desenhados do zero. A parte artística ainda tava bem primitiva, mas já é uma evolução. Mas quando você treina e vai aprimorando as coisas melhoram. Por exemplo, eles começaram |
| 46:31 | a experimentar com a idéia de pegar jogos de Mega Drive, que é um console bem mais poderoso que o Master System, pegar os sprites e elementos visuais e diminuir detalhes, diminuir |
| 46:41 | cores, diminuir frames de animação pra tentar fazer caber no Master System. E fazendo isso eles de fato conseguiram alguns jogos interessantes. Mesmo a jogabilidade não sendo nada boa, |
| 46:50 | eu acho interessante pela tentativa. Só no Brasil existem jogos como Street Fighter, Mortal Kombat, Ecco the Dolphin e A Pequena Sereia pra Master System. |
| 46:59 | Tem vários videos no YouTube contando a história da Tectoy. Tem até vários canais gringos |
| 47:05 | descobrindo a Tectoy só agora e ficando impressionado de ver o Master System e Mega Drive sendo |
| 47:11 | fabricados por aqui até hoje, recomendo darem uma olhada, é uma parte da história da nossa |
| 47:17 | indústria brasileira que infelizmente ficou parado nos anos 90 e não conseguiu evoluir. Bom, vamos voltar pro nintendinho. O que eu mostrei do código do emulador é só o começo |
| 47:26 | do esqueleto. Na realidade eu não escrevi um emulador não, esse foi um projeto que achei aleatoriamente no Github. Vocês podem baixar a versão completa dele nas descrições |
| 47:35 | abaixo. E pra mostrar que ele funciona vamos compilar e executar. (nes) Um último insight que eu queria aproveitar pra falar é sobre o PPU. Como expliquei ele |
| 47:42 | era o equivalente aos nossos GPUs de hoje só que muito mais primitivo. Se havia um chip que trabalha incessantemente no nintendinho era o PPU, desenhando 60 quadros por segundo |
| 47:53 | sem parar. Na verdade são dois insights. Vamos lá. Pra começar eu disse que o MOS |
| 47:58 | 6502 roda a meros 1.8 Mhz que é milhares de vezes mais lento que qualquer CPU de hoje |
| 48:05 | em dia que roda de 2Ghz pra cima. Antigamente jogos tentavam usar o máximo que a CPU podia oferecer e o timing de tudo |
| 48:13 | era atrelado ao clock do sistema. Hoje em dia não fazemos isso, em vez de atrelar ao |
| 48:19 | clock atrelamos a outras coisas como framerate que é a taxa de quadros por segundo ou vsync |
| 48:25 | que sincroniza com a frequência de atualização do monitor. Ou seja se temos como alvo rodar |
| 48:31 | o jogo a 60 quadros por segundo, vamos calcular tudo pra caber na faixa de 60 quadros por |
| 48:37 | segundo. Mesmo se o clock aumentar ou diminuir, a referência vai ser os quadros por segundo. |
| 48:43 | Se a CPU for lenta demais vamos ser obrigados a cortar quadros. Se a CPU for rápida demais |
| 48:49 | vamos dar pausas pra esperar. Estou simplificando, claro. Antigamente os games rodavam na velocidade máxima que a CPU podia ir, sem esse controle |
| 48:56 | extra. Por isso se programava em assembly pra ter controle absoluto do hardware. Daí quando os CPUs evoluiram na geração seguinte e pularam de 1Mhz pra digamos 40Mhz os jogos |
| 49:06 | ficaram rápidos demais. Até por isso nos 386 de antigamente tinha um botão Turbo. A idéia desse botão era diminuir o clock do sistema pros programas não funcionarem |
| 49:15 | rápidos demais. Se você tentar rodar um jogo dos anos 80 de PC num PC moderno vai |
| 49:23 | ver que ele roda rápido demais. Um dos desafios mais difíceis nos emuladores de consoles antigos é literalmente adicionar |
| 49:31 | pausas em cada passo pro jogo rodar exatamente como seria antigamente, se não tiver esse |
| 49:36 | controle de pausas o jogo rodaria rápido demais. Por isso temos que editar o arquivo |
| 49:43 | do CPU e adicionar outra informação importante: uma lista dizendo quantos ciclos cada instrução |
| 49:48 | consome. Lembra que falei que um Load, Adição e Store consomem em média uns 5 ciclos? Não |
| 49:55 | pode ser média, tem que ser a quantidade correta de ciclos. Então vamos adicionar |
| 50:00 | a lista, onde cada posição é o endereço da instrução como declaramos na estrutura |
| 50:06 | table. O segundo insight que falei tem a ver com timing de velocidade. O PPU como eu disse |
| 50:11 | é ocupado demais. Ele roda com clock 3 vezes mais rápido que a CPU e precisa de uma rotina |
| 50:19 | pra sincronizar. A coordenação entre CPU e PPU é um assunto fascinante em si só mas |
| 50:24 | a parte importante é que a CPU não pode interromper a PPU a qualquer momento. Ela |
| 50:29 | provavelmente vai estar escrevendo pixels na tela numa frequência precisa e se você interromper, vai quebrar toda a renderização. |
| 50:35 | Significa que do lado da CPU digamos que você detecte que um botão foi pressionado no controle. |
| 50:41 | Digamos que foi um botão de salto. Você iria querer imediatamente mostrar isso na |
| 50:46 | tela acionando a animação de salto do Mario por exemplo. Então você processa esse estado e envia o comando pro PPU atualizar o sprite do Mairo. Mas isso vai quebrar a renderização. |
| 50:55 | A característica importante do PPU é que ele escreve na tela uma linha horizontal de cada vez. Isso se chama ScanLine e é derivado de como monitores de tubo funcionam. Se você |
| 51:06 | nunca viu ele não escrever pixels em qualquer coordenada. No fundo do tubo existe um canhão, |
| 51:15 | que vai atirando eléctrons na tela de fósforo na frente dele uma linha horizontal de cada vez e fazendo um zigue zague pra próxima linha. Diferentes de LCDs modernos que tem |
| 51:23 | uma quantidade fixa de linhas, monitores de podem ter quantas linha quiser, basta o canhão distanciar ou aproximar essas linhas. Por isso bons monitores de tubo tendem a ter imagens |
| 51:31 | melhores do que LCDs. Recomendo ver esse video da Digital Foundry que explicar sobre eles. De qualquer forma, o PPU do nintendinho vai desenhar 240 linhas visíveis e depois vai |
| 51:39 | entrar num período entre as linhas 240 a 260 em que ele não desenha nenhuma linha |
| 51:44 | visível. Isso se chama Vertical Blank ou Vblank. Isso acontece 60 vezes por segundo, uma vez depois de desenhar cada frame. É nessa pequena janela de 20 ScanLines que não |
| 51:52 | aparece na tela que o PPU tem a oportunidade de receber ordens da CPU, por exemplo, dizendo o que tem que desenhar no frame seguinte. |
| 51:59 | De novo, se você é de front-end, uma das boas práticas que deve ter aprendido, principalmente |
| 52:07 | se usa frameworks como um React é que você nunca escrever direto na tela. Você acumula todas as modificações e escreve tudo de uma vez depois. E como você faz isso? Em |
| 52:17 | vez de mandar ordens de desenhar direto na árvore de elementos HTML do navegador, o famoso DOM, você manda escrever numa cópia desse DOM que só existe em memória, o famoso |
| 52:25 | Virtual DOM. Então se você modificou 50 elementos nesse VDOM, você não precisou interromper o navegador 50 vezes. Você guarda essas modificações em memória e só interrompe |
| 52:35 | o navegador uma vez pra desenhar todas as modificações de uma vez só. E é isso que se faz no Assembly também. A idéia de separar lógica da rotina de apresentação |
| 52:45 | não é novidade. É assim que se programa desde pelo menos os anos 80. Então do lado |
| 52:52 | da lógica do jogo na CPU ele faz as modificações em RAM e durante o Vblank o PPU puxa essas |
| 52:58 | modificações e avança pro próximo frame, e com isso temos uma separação de responsabilidades. |
| 53:03 | Como cada jogo representa as estruturas pra guardar o que precisa mandar pra PPU depois varia. Mas um que é visualmente fácil de acompanhar é o Super Mario Bros 3 porque |
| 53:10 | ele a estrutura completa da tela com cada elemento aberto. Se você procurar por memory |
| 53:16 | map e o nome do jogo no Google facilmente vai achar a documentação que várias pessoas |
| 53:22 | gastaram horas garimpando e com isso sabemos que a partir do endereço 0x6000 na RAM vai ter os dados dos levels. |
| 53:27 | Vamos abrir no Mesen e vou colocar lado a lado pra você verem. Olhem os códigos internos |
| 53:35 | de cada bloco e veja como o código muda quando eu modifico um objeto, por exemplo batendo |
| 53:41 | num bloco. E se você é adepto de Mario Maker, esse é o Mario Maker raíz. Vamos olhar algumas |
| 53:50 | telas pra frente. Por tentativa e erro sabemos que esses "arrobas" representam moedas. Vamos criar um monte .... e agora vamos até essa tela. Olha que bonito. E de novo vejam como |
| 54:01 | cada vez que vou pegando as moedas o código se modifica na RAM. |
| 54:07 | De novo usando a analogia com front-end, isso é o equivalente a você dar um inspect no |
| 54:13 | navegador e sair editando os elementos. E aproveitando que estamos no Mesen, vamos abrir primeiro o Super Mario de novo. E esses são todos os tiles que tem no cartucho, somente |
| 54:24 | um único bank de 16 kbytes. Pense que o jogo inteiro, que não é curto, é desenhado somente |
| 54:29 | com esses tiles. É impressionante se considerar que antes dele você só tinha jogos nível pacman bem simples e ele conseguiu esticar pra múltiplas fases que parecem diferente |
| 54:39 | mas são basicamente os mesmos tiles com paletas diferentes de cores. |
| 54:45 | Mas se abrirmos o Super Mario 3 de novo, que vem com o Mapper conhecido como MMC5, ele |
| 54:50 | vai ter bem mais banks. E olha só no visualizador de novo. Podemos ir explorando os diferentes |
| 54:56 | banks que são os conjuntos de tiles. E por isso o Super Mario 3 tem visuais bem mais |
| 55:03 | elaborados e diferenciados de mundo pra mundo. Não é só uma mudança de paleta de cores |
| 55:09 | mas de diversidade de tiles. E no último olha como só a tela de entrada como título |
| 55:15 | grande ocupa um bank quase inteiro. Por isso quando tem imagens bitmap grande que ocupam |
| 55:20 | a tela inteira a gente sabe que é um jogo caro porque literalmente ele tá usando uma parte considerável do chip só pra guardar essa uma imagem que só aparece uma vez. |
| 55:30 | Recentemente teve uma ressurgência de games independentes publicando nos Steam da vida que tentam emular o visual pixel art pra ter aquela vibe de jogo retro. Um bom exemplo |
| 55:40 | disso é o excelente jogo Celeste, considerado um dos melhores jogos de plataforma pra speedrun pela nuance nos controles e como ela recompensa quem consegue combinar timing com movimentos |
| 55:50 | avançados do jogo pra percorrer as fases. Outro bom exemplo é o já clássico Shovel |
| 55:57 | Knight que tem em praticamente todas as plataformas também. Mas o que esses jogos tem em comum |
| 56:04 | é que eles são jogos modernos que escolheram um estilo artístico de pixel art só pela |
| 56:10 | estética e não porque foram obrigados a isso. Entendam, jogos antigos não são pixel art porque o povo gostava do estilo mas sim porque |
| 56:19 | a resolução da tela era de meros 256 pixel na horizontal por 240 pixels na vertical. |
| 56:25 | Isso é um quarto da resolução de um monitor full HD que tem 1080 pixels na vertical. Significa |
| 56:31 | 16 vezes menos pixels. Mas agora você entende também que não é só a resolução, todo |
| 56:36 | o design do jogo, das fases, ele inimigos e outros elementos dependem do espaço na ROM. Quanto mais ROM se adicionava no cartucho mais caro ele ficava. Por isso a maioria dos |
| 56:46 | jogos se mantinha nos limites de 40 kilobytes que o Super Mario original usava. Em comparação a instalação do jogo Celeste tem mais de 700 megabytes. |
| 56:53 | Existem também vários programadores explorando programar no hardware limitado do nintendinho. Um grande exemplo recente é o jogo Micro Mages da Morphcat Games. Dois anos atrás |
| 57:00 | eles soltaram um mini documentário mostrando como as limitações do console e do cartucho influenciaram as decisões de design do jogo. Eles se colocaram no desafio de fazer um jogo |
| 57:12 | de verdade, bem feito, escrevendo em Assembly de 6502 e ainda suportando 4 jogadores simultâneos. |
| 57:18 | O jogo é excepcional, eu paguei pra ter a ROM e recomendo que comprem também, são |
| 57:24 | 10 dólares bem gastos. A mecânica é muito simples, lembra um pouco a idéia do Celeste. |
| 57:29 | É um jogo vertical onde a tela vai subindo lentamente e você precisa alcançar o tempo antes que a tela te alcance. E falando em fases, vale um parêntese pra explicar mais |
| 57:36 | uma estrutura de dados que o nintendinho usava, os nametables. Em resumo hiper resumido, é um espaço em memória que comporta o equivalente a 4 telas. |
| 57:43 | Se você está num Mario que é plataforma horizontal, ele vai mantendo a próxima tela no espaço à direita. Se for plataforma vertical como Kid Icarus ele mantém a próxima tela |
| 57:53 | no espaço pra cima e você pode trabalhar os modos desse namespace se precisar de algo |
| 57:58 | mais complexo como no Mario 3 que é horizontal mas quando você pega a folha pode voar vertical. |
| 58:05 | No caso do Micro Mages ele vai usar um modo semelhante ao do Kid Icarus. Jogando um pouco |
| 58:11 | veja lado a lado como o próximo nivel vai se montando nesse espaço de memória de nametables. |
| 58:18 | No video da Morphcat ele começa explicando o que eu já falei, que gráficos são divididos em duas tabelas CHR. Ele chama tiles de sprites mas é a mesma coisa, eu chamo sprites os |
| 58:28 | tiles que estão na tela neste momento. Ele continua repetindo que cada tile é um quadrado de 8 por 8 pixels e que pode escolher até 3 cores da paleta. E que juntamos tiles pra |
| 58:40 | formar o que ele chama de meta-sprites que é o objeto completo. Continuando ele explica |
| 58:50 | que só dá pra ter até 4 paletas de cores e que ele precisa ser reusado pra outros objetos |
| 58:59 | como inimigos. Outra limitação do PPU que eu não mencionei ainda é que ele só consegue desenhar 8 sprites |
| 59:05 | por scanline. Como cada personagem é formado por duas linhas de dois tiles cada, nesse |
| 59:10 | exemplo vai ter 10 tiles por linha em vez do máximo de 8. Se tiver mais que 8 os sprites |
| 59:18 | seguintes simplesmente não são desenhados. Por isso um truque muito usado é escolher |
| 59:25 | 8 tiles dos 10 e desenhar num frame, daí no próximo frame você esconde 2 que foram |
| 59:30 | desenhados no frame anterior e troca por 2 que ainda não tinham sido desenhados, e vai |
| 59:37 | fazendo isso de frame a frame, e por isso muitos jogos de nintendinho parece que os |
| 59:43 | personagens ficam piscando na tela. Isso acontece quando eles se movimentam e na mesma linha |
| 59:48 | acaba ficando mais de 8 sprites. Por causa dessas limitações, a primeira decisão da Morphcat foi criar personagens |
| 59:55 | que precisam só de um tile pra formar o sprite em vez de 4 ou mais. Além de economizar em |
| 1:00:02 | espaço, isso também evita o flicker, aquela piscada, porque vai ser mais difícil ter |
| 1:00:08 | mais de 8 sprites por scanline. Falando só em espaço, de volta à tabela de tiles CHR |
| 1:00:16 | na ROM, esse é o espaço ocupado por todos os tiles que formam as animações do Mario, |
| 1:00:23 | que nós já vimos antes. E agora o espaço ocupado por todas as animações dos magos |
| 1:00:30 | nesse novo jogo. Veja que economiza bastante espaço se você escolhe fazer personagens menores. E não só isso mas você consegue adicionar mais passos na animação, tornando |
| 1:00:40 | ela mais fluida. Outro desafio costuma ser os chefões, que costumam ser sprites grandões. Por exemplo, esses são todos os frames de animação de um dos chefões. O problema é que se você |
| 1:00:49 | tentar agora encaixar todas essas imagens no que restou do espaço CHR, simplesmente não vai caber. E isso é só um chefão. Agora vem a parte onde a programação e o |
| 1:01:00 | design precisam andar juntos, porque o design faz um chefão cujos frames podem ser divididos |
| 1:01:06 | em 3 partes que podem ser animados de forma independente. Olhando só os frames que fazem a animação da cabeça, dividimos em tiles, e vemos se tem repetições. E de cara você |
| 1:01:16 | pode ver que a primeira metade em todos os 3 frames é igual, então só precisa armazenar |
| 1:01:23 | uma versão que pode ser reusada em todos os frames. Não só isso, se um tile é o espelho de outro tile, você guarda só uma versão e |
| 1:01:30 | pede pro nintendinho inverter horizontalmente por exemplo, e assim pode economizar mais um pouco. E fazendo isso, só na cabeça otimizamos de 16 tiles antes pra só 4 que realmente |
| 1:01:41 | precisam existir na ROM. Pra parte do meio, fazemos a mesma coisa: procuramos todos os tiles repetidos, todos que podem ser invertidos e diminuímos mais ainda. |
| 1:01:46 | E a última parte tem 5 animações mas as duas últimas são inversões das duas primeiras. E fazendo todas essas reduções removendo tudo que é repetido, compare os tiles que |
| 1:01:55 | sobraram com os que originalmente eram necessários sem otimizar. O video continua mostrando como eles aplicaram técnica semelhante pra reduzir ainda mais |
| 1:02:02 | a quantidade de memória necessária pra montar as fases que eu vou pular pra não ficar extenso |
| 1:02:09 | demais mas eu recomendo que vocês assistam e também comprem o jogo, ele é bem difícil, |
| 1:02:14 | daqueles que você erra um salto e morre. Então se prepare pra jogar o controle algumas |
| 1:02:22 | vezes no monitor. Jogos de 8-bits eram dureza, a dificuldade era bem maior que a maioria |
| 1:02:27 | dos jogos casuais de hoje. Nível Demon's Soul de reflexo e precisão. Falando em programar seus próprios jogos, como você faz isso? Simples, se pesquisar |
| 1:02:36 | no Wiki da Nesdev vai encontrar sobre ferramentas, tem vários fóruns ainda ativos onde o povo troca dicas e informações sobre as melhores técnicas e ferramentas, mas o mais básico |
| 1:02:46 | é o cc65 que que vem com o montador ca65 e o disassembler da65. E se procurar num Github |
| 1:02:51 | vai encontrar vários exemplos de hello world a joguinhos completos feitos do zero como o Micro Mages. Se você já pensou em programar games e quer ser mais do que só mais um clonador |
| 1:03:02 | de Flappy Bird, programar em hardware restrito como um nintendinho é um excelente exercício pra aprender todos os fundamentos de um bom design de games. |
| 1:03:09 | Por exemplo, baixei este projetinho que faz todo o setup do ambiente, carrega o mínimo |
| 1:03:15 | de tiles e tudo mais pra ter fontes e com isso consigo fazer um hello world da vida |
| 1:03:23 | rapidamente em C. E sim, é possível programar em C e compilar com o cc65 pra binário de |
| 1:03:29 | 6502 específico de nintendo. A desvantagem de programar em C é que ele vai gerar um |
| 1:03:36 | binário menos otimizado do que um bom programador faria na unha direto em assembly. Por outro |
| 1:03:42 | lado como estamos em ambiente emulado você sempre pode mexer no emulador pra ter uma |
| 1:03:48 | CPU mais rápido do que o nintendinho original e quantos banks de ROM quiser. Nos anos 80 e até parte dos anos 90 sempre era consenso que nenhuma linguagem de alto |
| 1:03:57 | nível conseguiria escrever um assembly mais eficiente do que se você escrevesse na mão. Mas isso mudou com a evolução das tecnologias de compilação. Hoje em dia um programador |
| 1:04:05 | médio jamais escreveria um assembly mais eficiente do que o gerado por compiladores |
| 1:04:11 | como GCC ou CLang, nem adianta tentar. Você precisaria ter um intelecto e experiência |
| 1:04:16 | no nível de um John Carmack pra chegar perto disso. |
| 1:04:23 | Compilar com otimização é um processo custoso. Mas hoje temos multi-cores |
| 1:04:42 | rodando acima de 2 Ghz e RAM de sobra pro compilador ir à loucura e otimizar como se |
| 1:04:55 | não houvesse amanhã. Mas nos anos 80 era inviável ter um compilador com o mesmo nível |
| 1:05:02 | de heurísticas que temos hoje. Cientistas da Computação dos anos 80 venderiam a mãe |
| 1:05:07 | pra ter um Clang de hoje. Falando nisso vale a pena mostrar como de assembly você sobe um pouquinho só de nível |
| 1:05:25 | na linguagem. Não é um compilador, só um processador de macros. Pra quem não sabe, macro é como um template. Um procesador de Markdown é tipo um macro de HTML. Quando |
| 1:05:35 | eu digito asterisco o processador vai pegar o texto seguinte e colocar entre as tags de |
| 1:05:42 | bold por exemplo. Macro é uma forma de reduzir copy e paste de trechos de código. |
| 1:05:53 | O ca65 que é o assembler mais recomendado pra programar pro nintendinho já vem com |
| 1:05:59 | vários macros que adicionam algumas construções mais modernas como ifs, whiles e outras coisas, |
| 1:06:05 | assim você consegue ter mais dicas visuais no código do que cada parte faz. Some isso |
| 1:06:13 | a subrotinas com JSR que mostrei no video anterior e é possível programar sem ficar |
| 1:06:21 | completamente doido no processo. Mas pense assim: é assim que se programava games de |
| 1:06:27 | verdade. O grande lance de programar em consoles é tirar o máximo que o hardware consegue |
| 1:06:33 | oferecer. Outra coisa interessante. Hoje em dia não existe mais o código fonte da maioria esmagadora |
| 1:06:41 | dos games. Mas isso não tem problema. Você sempre consegue reabrir o código a partir |
| 1:06:47 | do binário. Pra isso serve a ferramenta da65 que vem no mesmo pacote. Você pode fazer |
| 1:06:58 | o desassembly e voltar aos mnemônicos. Obviamente você não vai ter o nome correto das subrotinas, |
| 1:07:03 | labels, constantes e variáveis. Mas se você tiver experiência com o hardware vai saber |
| 1:07:11 | por exemplo que se tiver alguma coisa mexendo com o endereço a partir de 0x8000 está acessando |
| 1:07:22 | a ROM, se mexer com o endereço 0x4016 ou 0x4017 está falando com os controles. |
| 1:07:29 | Daí você pode fazer a engenharia reversa que é adicionando as etiquetas e nomes das |
| 1:07:42 | coisas mais óbvias primeiro e fazer o caminho inverso. Ah, se esse trecho |
| 1:08:15 | mexe com o endereço 0x4016 deve ser o trecho que decide o que fazer quando aperta um botão. |
| 1:08:46 | Além disso você pode fazer tracing, visualizar o que acontece em cada registrador |
| 1:09:22 | e na memória a cada instrução pra determinar do que se trata cada subrotina. É super trabalhoso |
| 1:09:41 | mas fazendo isso você consegue encontrar praticamente tudo. |
| 1:10:04 | E de fato, se procurar no Github eu achei um disassembly do Super Mario praticamente |
| 1:10:14 | completo com todos os nomes de subrotinas, etiquetas e constantes. É o |
| 1:10:43 | mais próximo que se chegou do código fonte original. E em cima disso você pode modificar |
| 1:11:19 | o jogo como quiser no nível do código em vez de se limitar a só modificar os bytes |
| 1:11:32 | no nível da ROM como fizemos com textos e tiles. Daí podemos adicionar tiles novos |
| 1:12:09 | ou fazer textos mais longos e reprogramar a lógica porque |
| 1:13:29 | o assembler vai conseguir recalcular todos os |
| 1:14:23 | endereços corretamente e gerar um novo binário |
| 1:17:31 | que funciona. |