# Aprendendo sobre Computadores com Super Mario (do jeito Hardcore++)

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=hYJ3dvHjeOE
- **Duração:** 1:27:21
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita O tema do video da semana passada é um buraco de coelho de Alice no País das maravilhas. |
| 0:07 | Estou demorando pra soltar videos porque cada assunto que eu esbarro vou pesquisar e abro mais uma dúzia de abas. Daqui a pouco vou encher meus 32GB de RAM só de abas. Computação |
| 0:17 | retro é uma área gigantesca. Vocês não imaginam quantas comunidades existem não só colecionando itens antigos mas ainda desenvolvendo em assembly de MOS 6502 e outros processadores |
| 0:29 | antigos como Z80, Intel 8088 e isso só no mundo dos 8-bits. Se entrar em 16-bits vai |
| 0:34 | cair em processadores como o 65C816 do Super NES. |
| 0:48 | Eu reescrevi o script de hoje várias vezes, numa das versões eu estava gastando páginas e páginas só pra tentar explicar o problema da multiplicação em processadores antigos. |
| 0:58 | Mas ficou muito fora do escopo do canal. Só pra dar um gostinho, no último video comecei a mostrar um pouco do Assembly do 6502 e algumas instruções básicas como LDA ou STA pra |
| 1:08 | dar load no acumulador ou store do acumulador pra algum outro lugar. Avançando pra operações aritméticas temos instruções como ADC ou SBC pra adição |
| 1:18 | e subtração. Você já começaria coçando a cabeça quando precisasse somar números |
| 1:24 | maiores do que 255, que é o limite que cabe em 1 byte, ou 8-bits. Lembra que o 6502 é |
| 1:29 | uma CPU de 8-bits? Então todas as instruções só conseguem trabalhar com 8-bits de uma só vez. Pra trabalhar com números maiores a gente particiona o número e calcula 1 pedaço |
| 1:39 | de 1 byte de cada vez. Vamos entender um pouco mais disso. Como todo mundo pelo menos já deve ter ouvido falar, chips como o 6502 são feitos de componentes |
| 1:47 | menores, como um transistor. Um transistor, em sua essência é um componente que funciona |
| 1:53 | como um switch, ou interruptor. Acho que essa é a imagem mais simples de ter na cabeça. Você pode comprar transistors individualmente empacotados como um componente mais fácil |
| 2:02 | de manipular num protoboard como esse aqui (video). Aliás, no video anterior eu chamei isso de breadboard que é como falam nos Estados Unidos, |
| 2:09 | mas aqui se chama protoboard. Enfim, usando transistores é possível criar alguns dos circuitos mais simples de todos, as portas lógicas, que são peças fundamentais sobre |
| 2:19 | as quais todo o resto é montado. Por exemplo, você pode montar uma porta lógica NOT num protoboard com um transistor, um resistor, um led pra ver a resposta, uma bateria e fios |
| 2:29 | pra conectar. Uma porta NOT quando você manda 0 ele responde 1, ou quando manda 1 ele responde |
| 2:35 | 0. Uma porta NOT pode ser feito com dois transistors, por exemplo. Além de NOT podemos montar outras portas fundamentais como OR, AND, NAND, XOR que é |
| 2:42 | exclusive OR e assim por diante. E com essas portas podemos montar coisas mais complicadas como uma CPU inteira. Com outras construções como flip flops, podemos montar memória, |
| 2:52 | e por aí vai. À primeira vista é difícil de entender como operações simples como inverter bits pode ser útil. Vamos pensar numa operação um pouco mais complicada que |
| 3:01 | queremos ter numa CPU, por exemplo somar dois números. Assumindo que todo mundo sabe somar. Pense uma conta besta, somar 28 mais 22. Você começa |
| 3:10 | somando 8 com 2, vai dar 10, coloca zero embaixo e sobe 1. A mecânica interessante aqui é |
| 3:16 | esse "sobe um". Agora soma esse 1 que subiu com 2 do 28 e 2 do 22 e vai ter 50. Pra somar |
| 3:22 | em binário é exatamente a mesma coisa. Pra converter um número decimal em binário, você vai dividindo por dois. 28 dividido por 2 é 14, resto 0. 14 por 2 é 7, resto |
| 3:32 | 0, 7 por 2 é 3, resto 1, 3 divido por 2 é 1, resto 1. Então fica 11100. Pra ser 8 bits |
| 3:38 | só completar os 3 zeros à esquerda. Fazendo mesma coisa com 22 fica 0001 0110. Números pequenos uma hora você lembra de |
| 3:48 | cabeça, mas pra números maiores qualquer calculadora do Windows mesmo converte pra você. Ou em qualquer linguagem de programação tem uma função de formatar strings onde |
| 3:55 | você passa um inteiro e diz que quer formatar com base 2. Num javascript basta chamar o método .toString com argumento 2 num número. |
| 4:04 | Pra somar esses dois binários, você começa da direita pra esquerda também, zero mais zero é zero. Depois zero e um é um. 1 e 1 é 2 que em binário é 1 0, então coloca |
| 4:14 | zero e sobe 1. 1 mais 1 mais zero, mesma coisa, coloca zero e sobe mais um. 1 + 1 + 1 é 3, |
| 4:21 | coloca 1 e sobe 1. 1 mais zero mais zero é 1. E o resto é zero. Então o resultado final |
| 4:26 | é 0011 0010. Só parece difícil porque você ainda não tá acostumado a enxergar zeros |
| 4:32 | e uns, mas a regra é a mesma e usa a mesma mecânica do "sobe um". A máquina de adição mais simples que soma 2 bits é chamado de half adder ou meio somador. |
| 4:42 | Você liga uma porta AND com uma porta XOR e vai ter a soma e o carry bit. Carry é o |
| 4:48 | bit onde grava o "sobe 1". O meio somador vai fazer exatamente o que eu fui descrevendo agora. Se passar 0 e 0 a soma é 0. Se passar 1 e 0 ou 0 e 1 a soma é 1. Se passar 1 e |
| 4:59 | 1 a soma é 2, então baixa 0 e sobe 1 pro Carry bit. A versão completa se chama full |
| 5:04 | adder ou somador completo. Um dos jeitos de montar um somador completo pode ser ligando duas portas XOR, duas portas |
| 5:12 | AND e uma porta OR. Ou melhor ainda, ligando dois meio somadores. A diferença é que além |
| 5:17 | dos 2 números pra somar ele também recebe o carry bit de entrada e com isso podemos cascatear múltiplos circuitos de somador completo um embaixo do outro, ligando o carry |
| 5:27 | bit de saída de um somador na entrada do outro. Se quisermos somar com números de 4-bits adicionamos 4 somadores completos em cascata. Pra 8-bits precisamos de 8 somadores. |
| 5:37 | E com isso adquirimos um somador completo de 8-bits! (som de zelda) Um circuito de somador completo pode ser montado de maneiras diferentes e com isso varia o |
| 5:45 | número de transistors, mas pense que na média vai ser alguma coisa na faixa de 10 transistors |
| 5:50 | pra cada somador. Pra somar números de 8 bits vamos precisar de no mínimo uns 80 transistors. |
| 5:56 | Pra hoje em dia isso não parece grande coisa já que um processador A13 Bionic dos iPhone 11 Pro tem 10 bilhões de transistors. Um AMD Ryzen 7 3700X tem quase 6 bilhões de |
| 6:08 | transistors e um AMD Epyc Rome, que é pra servidores, tem mais de 39 bilhões de transistors. |
| 6:14 | Lembrando que são todos chips de 64-bits. Nosso pobrezinho MOS 6502 de 8-bits tem na faixa de 3500 transistors, lembrem-se que |
| 6:24 | estamos falando do meio dos anos 70. O que viemos fazendo depois, além de aumentar mais |
| 6:29 | e mais a densidade de transistors por centímetro quadrado, foi adicionando novas funcionalidades |
| 6:34 | como SIMD que são instruções de single instruction multiple data pra computação |
| 6:39 | paralela, instruções de virtualização como VT-X ou AMD-V, instruções pra criptografia |
| 6:45 | como AES, sem contar que os chips hoje são multi-core então é como se fossem múltiplas |
| 6:50 | CPUs apertadas no mesmo chip. Mas as instruções fundamentais como somar bytes, carregar acumulador, |
| 6:56 | incrementar contador de programas, atualizar apontador de pilha, e coisas assim que vimos no hello world da semana passada ainda é similar. |
| 7:04 | Um primeiro insight é que os chips hoje são na ordem de 10 milhões de vezes mais densos |
| 7:09 | de transistors que os chips dos anos 80 pra trás. Porém isso não se traduz necessariamente |
| 7:15 | em programas 10 milhões de vezes melhor. Pegue o melhor da geração 8-bits que foi Super Mario 3 e compare com New Super Mario Bros rodando no Switch cujo SoC Tegra X1 tem |
| 7:27 | na faixa de 7 bilhões de transistors com 4 cores ARM Cortex A57 ativos. |
| 7:33 | Vamos descer um pouco mais hardcore pra dar mais contexto com o tipo de CPU que estamos trabalhando. Adição eu disse que fazemos mais ou menos do mesmo jeito que você faria |
| 7:42 | no papel somando digito a digito e subindo 1 quando precisa. Se hoje em dia temos transistors |
| 7:48 | de sobra nas CPUs, nos 3500 que tinha num 6502, cada transistor contava. Então só |
| 7:54 | era implementado o estritamente necessário. Somadores completos numa cadeia de 8 bits está implementado na instrução ADC. |
| 8:02 | Se recapitularmos sobre o pouco que aprendemos sobre assembly do 6502, pra realizar uma adição |
| 8:08 | de números de 8 bits, faz de conta, o número 1 mais 2 poderíamos fazer assim. ``` LDA #$01 |
| 8:13 | ADC #$02 STA $6000 ``` Começa com LOAD do número 1 no acumulador, ADC que é adição com carry onde passamos 2 e ele vai somar com o número 1 que já tava no acumulador, daí armazena ou Store |
| 8:24 | do resultado que fica no A pra algum endereço na memória, como o endereço $6000 que, no |
| 8:29 | video anterior, ia mandar pro chip de trava e de lá pro LCD. Isso é uma coisa que hoje em dia você não se preocupa porque as linguagens de programação já cuidam disso, mas o 6502 |
| 8:39 | faz cálculos com números de 8-bits. O valor máximo que cabe em 8 bits sem sinal é FF |
| 8:45 | ou 255. O que acontece se eu tentar somar 255 + 255? Precisamos de mais bits. |
| 8:50 | Só porque uma CPU é de 8-bits não quer dizer que não podemos calcular números maiores, |
| 8:56 | mas pra fazer isso precisamos particionar o número e lidar com pedaços dele. Por exemplo, |
| 9:01 | digamos que tivéssemos uma CPU decimal mas que só faz conta com números de 2 dígitos de cada vez, então de 0 até 99. Se somarmos 99 + 5 teríamos 104. Precisaríamos gravar |
| 9:13 | o 1 separado do zero quatro. No caso da soma, eu disse que todo somador completo lida com |
| 9:18 | 1 bit do número. A instrução ADC é como se fossem 8 somadores completos em cadeia |
| 9:24 | pra 8-bits. Uma nomenclatura que às vezes você vai esbarrar é high order e low order. Quando lidamos |
| 9:30 | com 16-bits, temos 2 bytes. O primeiro byte à esquerda chamamos de high byte e o último |
| 9:36 | à direita de low byte. Dentro de cada byte tem 8-bits o bit mais à esquerda é o MSB |
| 9:42 | ou Most Significant Bit e o último bit é o LSB ou Least Significant Bit, literalmente |
| 9:48 | bit mais significativo e menos significativo. Lembra quando expliquei sobre little endian no episódio anterior? É pegar os 2 bytes e inverter, assim o low byte é lido antes |
| 9:58 | do high byte. Voltando pra soma, toda vez que tiver um "sobe 1" ele vai ser gravado no registrador C. Antes |
| 10:06 | de toda soma o certo é usar a instrução CLC, literalmente Clear C, pra limpar esse |
| 10:12 | registrador. Mas podemos não limpar também. Lembra que falei que registradores funcionam como varíaveis globais? Várias instruções deixam efeitos colaterais pra trás, deixando |
| 10:21 | registradores com a sobra do que foi processado. E podemos usar isso a nosso favor, começar |
| 10:26 | somando a primeira metade do número até 8-bits, e depois somar a segunda metade que vai usar o carry no C e continuar a soma com o resto dos bits. Por exemplo, digamos que |
| 10:36 | temos um número grande, de 24-bits tipo o número 2 milhões. Seriam 3 pedaços de 8 |
| 10:42 | bits cada que podemos chamar de high, medium e low byte. Declaramos então os 3 pedaços do primeiro número A como A hi, A mid e A lo, depois |
| 10:53 | B hi, B mid e B lo. Começamos limpando o registrador C, fazemos a soma dos bytes low, |
| 11:00 | que é dar load no A low, adicionar com B low e guardar esse resultado parcial em B |
| 11:05 | low; depois mesma coisa com os bytes medium e high. A soma final é a junção dos três |
| 11:10 | pedaços de B. ; ex: 8 milhões = $7A 12 00, A_hi = $7A, A_mid = $12, A_low = $00 A_hi, A_mid, A_lo B_hi, B_mid, B_lo START: CLC ; Clear C only to start. LDA A_lo ADC B_lo STA B_lo |
| 11:15 | LDA A_mid ; Note that here we don't re-clear C, but just ADC B_mid ; let it do its job of adding the 9th bit that STA B_mid ; didn't fit in the result of the previous byte's ; addition. LDA A_hi ADC B_hi STA B_hi Pense na sua linguagem favorita, você nunca se preocupa com isso, simplesmente escreveria |
| 11:21 | `A + B`. Como você tem processamento e memória de sobra e seus programas nunca são particularmente complicados, mesmo que tenha desperdícios, não chega a ser um problema. Mas quando seus recursos são extremamente limitados, desperdiçar bits é um problema real. Desperdiçar ciclos |
| 11:33 | também, porque cada instrução gasta alguns ciclos de clock. Nada sai de graça. Um processador moderno roda na faixa de 2Ghz a 5Ghz hoje em dia, mas um 6502 roda entre 1 a 3 Mhz. |
| 11:46 | Portanto em máquinas pequenas como o 6520 queremos tanto economizar a quantidade de memória usada quanto o número de instruções pra não desperdiçar clocks. Literalmente |
| 11:56 | podemos fazer dezenas de milhões de instruções a menos por segundo num 6502 do que num processador |
| 12:02 | moderno de qualquer smartphone hoje. Fazer programas simples num computador excessivamente poderoso é muito fácil, qualquer um faz. Eu sempre digo que você sabe quando um programador |
| 12:12 | é bom quando ele consegue programar num sistema com restrições, porque a arte de programar |
| 12:17 | é conseguir tirar o máximo que o hardware oferece. Vamos dar outro exemplo besta. Já sabemos como CPUs fazem adição. Subtração e multiplicação |
| 12:26 | é a mesma coisa. Podemos desenhar circuitos como no caso do somador completo e implementar |
| 12:31 | com transistors. Como falei antes, no 6502 temos a instrução ADC pra adição e também |
| 12:36 | temos SBC pra subtração, mas não tem multiplicação. Digamos que você, que nunca estudou nada de engenharia ou ciências da computação |
| 12:44 | pense numa forma de implementar multiplicação só usando operações básicas que falamos até agora como adição, o que você faria? Eu aposto como a solução mais imediata que |
| 12:54 | a maioria pensaria seria via adições sucessivas. Por exemplo se quisermos multiplicar 278 vezes |
| 13:00 | 7, você iria somando 278 sete vezes até dar 1148. Seriam só 7 adições e não parece |
| 13:07 | tão ruim assim. Aquele famoso caso de "testei aqui e no meu computador funciona". Mas e se quisermos multiplicar 10 mil vezes 10 mil? Agora precisa fazer 10 mil somas pra |
| 13:17 | chegar no resultado. Isso é consideravelmente mais devagar e com números maiores só vai piorando. Vamos usar tempos hipotéticos só pra ilustrar. Pra somar cada bloco de 8 bits |
| 13:27 | digamos que precisariamos gastar uma instrução de LOAD, uma de ADC e outra de STORE, cada |
| 13:33 | um custando uns 5 ciclos de clock. 10 mil é um número que podemos representar em 2 bytes ou 16 bits. Então são pelo menos 2 loads, 2 adc e 2 stores pra cada rodada. |
| 13:44 | Então temos 6 instruções custando uma média de 5 ciclos de clock, ou seja 30 ciclos. Em |
| 13:50 | 1 Mhz podemos ter no máximo umas 33 mil sequências dessa por segundo. Mas se precisamos executar |
| 13:56 | 10 mil sequências de soma dessas gastaríamos 1/3 de segundo ou pelo menos 300 milissegundos. |
| 14:03 | Lembrando que estou considerando condições ideais de temperatura e pressão, como a gente falava no colégio, mas provavelmente gastaria mais ciclos que isso. Parece pouca coisa mas |
| 14:11 | 300 milissegundos é mais tempo que leva pra você pedir uma página num site, ele processar, |
| 14:16 | retornar o HTML e seu navegador renderizar. Aliás, se sua aplicação web demora 300 |
| 14:21 | milissegundos pra responder, isso é considerado lento quase parando. Pra variar, não existe uma fórmula universal de multiplicação que tem 100% de melhor |
| 14:29 | performance pra todos os casos. O bom senso é o contrário: fórmulas universais costumam |
| 14:35 | ser lentas. Isso é uma coisa que, como programador, você precisa entender: existem fórmulas que funcionam melhor pra casos diferentes. Por exemplo, no episódio anterior eu já |
| 14:44 | disse como faz multiplicação por 2: basta fazer um shift left, que é o equivalente a adicionar um zero no final do binário e pronto, tá multiplicado numa única instrução. |
| 14:54 | Você não conhece formas diferentes de multiplicar? Deixa eu contar um diferente. Existe um método ensinado no primário de escolas Russas que ficou famoso porque a gente associa tudo que é russo com excelência em matemática. Na real é um método bom pra números pequenos e não é particularmente bom pra computadores. É chamado de método do camponês russo. Vou explicar de curiosidade. O método é assim: dobre o primeiro fator, divida o segundo fator pela metade. Se o segundo |
| 15:00 | fator for par ignore e repita. Se o segundo número for ímpar, some o primeiro fator com o anterior. Por exemplo, digamos que eu quero multiplicar 278 por 7 como falamos antes. Primeiro dobramos o primeiro fator. Multiplicar por 2 todo mundo consegue fazer de cabeça e vai dar 556. Daí 7 divido por 2 é 3. 3 é impar então somamos 556 com 278 e temos 834. Agora dobramos 556 de novo e vamos ter 1112. No segundo fator temos 3 dividido por 2 que é 1, que é impar, então somamos com 834 com 1112 e vamos ter 1.946. Como o segundo |
| 15:06 | fator chegou a 1 acabamos e a resposta é 1.946. Pode abrir uma calculadora aí e checar. Não é difícil implementar isso em Assembly. Existe um site excepcional que é a fonte de referência de qualquer um que quer implementar um emulador de NES que é o Wiki Nesdev e quando fala de multiplicação ele implementa justamente esse algoritmo do camponês russo que fica assim: https://wiki.nesdev.com/w/index.php/8-bit_Multiply |
| 15:12 | ``` ;; ; Multiplies two 8-bit factors to produce a 16-bit product ; in about 153 cycles. ; @param A one factor ; @param Y another factor ; @return high 8 bits in A; low 8 bits in $0000 ; Y and $0001 are trashed; X is untouched .proc mul8 prodlo = $0000 |
| 15:18 | factor2 = $0001 ; Factor 1 is stored in the lower bits of prodlo; the low byte of ; the product is stored in the upper bits. lsr a ; prime the carry bit for the loop sta prodlo sty factor2 lda #0 ldy #8 loop: ; At the start of the loop, one bit of prodlo |
| 15:24 | has already been ; shifted out into the carry. bcc noadd clc adc factor2 noadd: ror a ror prodlo ; pull another bit out for the next iteration dey ; inc/dec don't modify carry; only shifts and adds do bne loop |
| 15:30 | rts .endproc ``` Você dá load do multiplicador no acumulador, load do multiplicando no registrador Y e roda essa rotina e ele vai gravar o low byte do resultado no endereço $0000 e o high byte em A. Lembra que números maiores que 8-bits fica particionado em múltiplos bytes? O resultado de uma multiplicação costuma ser um número com o dobro de bytes dos fatores, então multiplicar |
| 15:36 | 2 números de 8 bits dá um resultado de 16 bits. Esse algoritmo gasta em torno de 150 ciclos. Se seu programa for ter poucas multiplicações pode ser suficiente. Mas qualquer operação que gasta mais que 100 ciclos num 6502 não é exatamente rápido. Existem maneiras mais rápidas que isso. E aqui vem outro insight que como programador você precisa ter na cabeça. Algoritmos costumam ser um balanço de dois fatores: se você quiser economizar memória vai acabar gastando mais ciclos de |
| 15:42 | processamento. Se quiser velocidade economizando ciclos provavelmente vai gastar mais memória. Por exemplo, vamos pensar um pouco mais: como você faria multiplicações rápido no primário, sem calculadora? Pra números pequenos você provavelmente teria que ter decorado a tabuada, lembram disso? Tenho certeza que a maioria odiava ter que decorar a tabuada. Mas lembrem de uma coisa, a tabuada é uma tabela pré-calculada. Você procura o multiplicando e o multiplicador |
| 15:48 | e instantaneamente tem a resposta. Imagine uma tabela pré-calculada pra todos os números que cabem em 8-bits. Daí basta achar a posição na matriz com o resultado direto. Você vai |
| 15:58 | gastar ciclos pra pré-calcular a tabela da primeira vez ou pode ler direto a tabela de uma ROM. O problema dessa solução é que fácil fácil ela vai ocupar 16 kilobytes |
| 16:07 | de espaço ou mais. Considerando que um Super Mario Bros inteiro cabe em 40 kilobytes estamos |
| 16:12 | falando em gastar 1 terço disso só numa tabela de números, o que seria um enorme desperdício. |
| 16:18 | Uma tabela pré-calculada é o que chamamos de lookup table e isso é uma técnica usada |
| 16:23 | em todos os lugares da computação. Você que faz desenvolvimento web provavelmente já usou ou vai usar isso. Por exemplo quando faz cache com um Redis ou Memcache, é um |
| 16:34 | lookup table. Quando cria índices numa tabela de banco de dados, isso é um tipo de lookup table. O problema é que se essa tabela for grande demais, o tempo pra procurar na tabela |
| 16:42 | também pode começar a ser um problema, fora desperdício de espaço caso você não planeje direito. |
| 16:48 | Mas como seria uma maneira melhor então? E aqui a matemática nos ajuda. Se você estudou Álgebra e trigonometria não vai achar estranho o que vou dizer a seguir. Uma multiplicação |
| 16:58 | de dois fatores a e b pode ser descrita de maneiras diferentes. Por exemplo, ela pode ser a exponencial da soma dos logaritmos de a e b. Se quiser ser mais complicado pode |
| 17:09 | ser a soma do cosseno de x mais y com o cosseno de x menos y, tudo dividido por 2. Sendo que |
| 17:15 | x é o arco cosseno de a que também é chamado do cosseno inverso. Arco cosseno é usado |
| 17:21 | pra determinar o ângulo do cosseno em radianos. Y da mesma forma é o arco cosseno de b. |
| 17:28 | Continuando, a vezes b pode ser também o quadrado de a mais b, menos o quadrado de |
| 17:33 | a, menos o quadrado de b, tudo dividido por 2 ou, finalmente, pode ser o quadrado de a |
| 17:39 | mais b menos o quadrado de a menos b tudo dividido por 4. E essa opção final é que |
| 17:45 | nos interessa, pois podemos reduzir a fórmula pra ser a subtração de a mais b aplicado numa função F, com a menos b na mesma função F, sendo essa função F o quadrado do número |
| 17:56 | que passarmos dividido por 4. A parte importante é que decompomos o problema da multiplicação numa adição dos fatores, |
| 18:04 | subtração dos fatores e subtração do resultado da tal função F. E a essa função reduz |
| 18:12 | o tamanho do lookup table pra em vez de ser todos os possíveis resultados da multiplicação de todos os números de 8-bits, pra simplesmente ter uma tabela só com o resultado da multiplicação |
| 18:22 | do quadrado dos números. Ou seja, de 1 vezes 1, de 2 vezes 2, de 3 vezes 3 e assim por |
| 18:27 | diante, que é uma quantidade pré-calculada ordens de grandeza menor, caindo dos 16 kbytes |
| 18:33 | que eu falei pra talvez meio kbyte. E pra calcular o quadrado de todos os números também vai ser rápido porque existe a propriedade |
| 18:41 | que o quadrado do número é o quadrado do número anterior mais um número impar. Quadrado |
| 18:46 | de 1 é zero mais 1. Quadrado de 2 é o 1 anterior mais o próximo impar que é 3, resultado |
| 18:52 | 4. Quadrado de 3 é 4 mais o próximo impar 5 que dá 9. Quadrado de 4 é 9 mais o impar |
| 18:59 | 7 que dá 16. Quadrado de 5 é 16 mais o próximo impar 9 que dá 25 e assim por diante. |
| 19:08 | E como eu disse no começo, dá pra ir longe estudando sobre assembly. Outros assuntos que tava pensando em cobrir neste episódio incluíam o conceito de complementar de dois, |
| 19:18 | números inteiros com sinal pra lidar com negativos, algoritmo de Booth pra multiplicação e muito mais. Mas é teoria demais pra um único video, por hoje vou parar por aqui. |
| 19:27 | Mas eu queria gastar pelo menos um pouco de tempo mostrando essa linha de raciocínio pra vocês entenderem que não, hoje em dia você dificilmente vai gastar tempo implementando |
| 19:36 | uma multiplicação na mão. Toda CPU já implementa as melhores fórmulas em hardware |
| 19:41 | e pra quem precisa de casos específicos existem bibliotecas voltadas pro campo científico que otimizam os piores casos. |
| 19:48 | Mas é importante você entender que tudo que uma linguagem te oferece, cada pequena coisinha insignificamente como aquele mero asterisco de multiplicação teve milhares |
| 19:58 | de horas homens de pesquisa, experimentação, otimizações. Literalmente muito suor e lágrimas |
| 20:05 | até chegar no estado da arte que você usa hoje sem nem pensar. É isso que significa subir nos ombros de gigantes, porque é com o conhecimento testado e acumulado de centenas |
| 20:15 | de anos de matemática que esse asterisco de multiplicação se tornou possível e você |
| 20:20 | consegue multiplicar dois números de praticamente qualquer tamanho em microssegundos. E também é pra entender que muita coisa hoje ainda não tem uma fórmula perfeita. |
| 20:29 | Eu disse que temos CPUs com dezenas de milhões de vezes mais transistors que um 6502 mas |
| 20:35 | ainda assim não temos programas dezenas de milhões de vezes melhores. Isso porque muitas partes do software que usamos ainda não tá rodando da melhor forma possível. Grande |
| 20:44 | parte do que é o trabalho de um programador é não ignorar os problemas e parar pra tentar |
| 20:49 | encontrar formas mais inteligentes de fazer o computador processar. Muito bem, vamos voltar ao nosso nintendinho. Assim como no exemplo do protoboard do Ben |
| 20:58 | Eater, o PCB que é sigla pra Printed Circuit Board ou placa de circuito impresso, contém |
| 21:04 | o cérebro que é o 6502 e diversos outros chips como chip de RAM, chip de VRAM que é |
| 21:10 | memória de vídeo, e outros componentes como pra ligar seus controles. Tem a PPU que é o Picture Processing Unit ou unidade de processamento de imagens que é a versão primitiva do que |
| 21:20 | hoje você chamaria de GPU. E tem o APU ou audio processing unit pra gerar som. |
| 21:26 | O nintendinho já foi tão dissecado nas últimas décadas que temos documentação super completa |
| 21:32 | de cada componente em detalhes suficiente pra ter muita gente fabricando chips e PCB |
| 21:37 | novos. Você consegue literalmente comprar um hardware moderno de nintendinho hoje se quiser, e ele vai ser 100% compatível com qualquer cartucho que você tenha guardado. |
| 21:47 | Mas pro que me interessa, a documentação é tão boa que é possível criar emuladores |
| 21:52 | em software que se comportam exatamente como o hardware. Eu não sei se vocês conseguem entender a beleza disso. Todo hardware tem a capacidade de simular o comportamento de |
| 22:02 | outro hardware via software. E praticamente toda linguagem de programação consegue representar |
| 22:08 | qualquer hardware. Tendo documentação tão completa como o Wiki Nesdev que eu mencionei antes, poderíamos |
| 22:13 | escrever nosso próprio emulador. E como alguém faria isso? É um processo mais trabalhoso do que difícil porque você precisa ter o trabalho meticuloso de implementar cada detalhe |
| 22:23 | que tá nas documentações, mas por exemplo, podemos começar criando um projeto vazio, |
| 22:28 | digamos usando a linguagem Go. Aliás, como o nintendinho é bem antigo, qualquer linguagem hoje consegue simular um 6502 e os outros componentes. |
| 22:37 | Não existe "O" jeito correto de se escrever um software. Se você pegar diferentes emuladores |
| 22:42 | de nintendinho vai ver que eles são organizados e escritos de maneiras diferentes. Só com experiência e muitos testes você vai chegar no que é o melhor balanço entre legibilidade |
| 22:52 | e eficiência. Mas pra ser simples podemos pensar nos componentes principais que eu listei. O primeiro elemento que queremos emular é o console, então começamos criando um arquivo |
| 23:02 | chamado console.go e dentro definimos o tipo Console como uma estrutura. E não se preocupe |
| 23:08 | se você nunca viu Go, não é relevante entender cada linha do código hoje, só o raciocínio. |
| 23:14 | Estude depois com calma. Essa estrutura vai declarar ponteiros pra CPU, pro APU, pro PPU, pro cartucho, pros |
| 23:21 | dois controles, pra um troço que vou explicar depois chamado Mapper, e delimitamos a RAM |
| 23:26 | que é só um array. Lembram todos aqueles hexadecimais que eu falei no video anterior? Pense nesses números como posições no array. Memória é isso: uma listona de bytes. Agora |
| 23:36 | precisamos criar arquivos pra cada um desses componentes e definir as estruturas de cada um. O próximo é o arquivo cpu.go. |
| 23:43 | A estrutura CPU vai ter muitos dos elementos que eu expliquei no vídeo anterior. Começamos definindo uma referência pra uma estrutura de Memory que vou explicar depois. Daí definimos |
| 23:53 | PC que é o contador de programa como um inteiro gigante de 64-bits, e nem precisava ser tão grande porque ele só aponta pro endereço da próxima instrução, então 16-bits bastava. Vamos definir o SP que é o apontador de pilha como um inteiro de 16-bits. Daí os registradores |
| 23:59 | todos de 8 bits, ou seja 1 byte. Temos o acumulador A, o X, o Y, o C, Z, I, D, B, U, V, N. E por |
| 24:07 | fim temos uma última estrutura importante, um array de instruções. Lembra que cada instrução como LDA tem um hexadecimal associado, que é basicamente |
| 24:16 | o endereço da localização dessa instrução? Pois é, precisamos colocar cada opcode na posição correta nessa lista. Quando quisermos achar a instrução 0xa9 que é o LDA vamos |
| 24:26 | pra posição 0xa9 que é a posição 169 nessa lista. Daí vamos encontrar a referência |
| 24:32 | pra uma função de Go. Agora precisamos implementar cada uma dessas funções. Por exemplo, o nosso LDA sabemos que vai escrever o valor no registrador A que é o acumulador. |
| 24:43 | Então em Go é simplesmente associar o valor do argumento na variável A da CPU. |
| 24:48 | Sabemos também que JSR é o Jump pra uma subrotina, o que ele faz é empurrar o endereço |
| 24:54 | no contador de programas pra pilha e sobrescrever o contador de programa com o endereço da |
| 24:59 | subrotina pra onde tem que pular. E assim vai, tem que escrever uma função pra cada instrução que existe de acordo |
| 25:06 | com a especificação na documentação do 6502. Uma vez feito tudo isso podemos criar |
| 25:11 | o inicializador NewCPU que vai alocar a estrutura que definimos. Esse inicializador recebe uma |
| 25:18 | referência pra estrutura de console que criamos antes pra passar pra essa nova estrutura chamada |
| 25:23 | Memory. Deixa esse Memory de lado que ainda não é hora pra ele. Em seguida criamos e populamos a tal tabela com referências pras instruções que criamos. Finalmente criamos |
| 25:33 | uma rotina de reset. Reset é o que você pensou mesmo: o equivalente a você apertar o botão reset que todo console |
| 25:41 | e computador tem. A idéia é limpar o contador de programas pra apontar pro endereço 0xFFFC, |
| 25:46 | lembra no episódio anterior que quando o 6502 inicializa a primeira coisa que ele faz |
| 25:53 | é ir no endereço 0xFFFC procurar a primeira instrução do programa? Pois é. E em seguida limpamos o apontador de pilha pra iniciar em 0xFD. Isso é pra relembrar a importância |
| 26:02 | desses dois registradores, porque é com eles que conseguimos executar um programa. Tem mais coisas que precisam ser feitas pra CPU ficar completa mas por agora vamos pular |
| 26:12 | pra essa tal de Memory criando um arquivo memory.go. A estrutura em si é muito simples. |
| 26:18 | Ela só vai apontar pra uma referência à estrutura de Console que já definimos antes. A parte importante começa com a função de leitura Read. Ele recebe um endereço e |
| 26:27 | vai devolver algum valor que teoricamente está em alguma lugar na tal memória. Aqui começa a diferença de um nintendinho e outros computadores que usam o processador |
| 26:37 | 6502 como um Atari ou Apple II, o mapa de memória. No episódio anterior eu expliquei |
| 26:43 | que temos endereços de 16-bits então podemos mapear do endereço 0x0000 até 0xFFFF, daí |
| 26:50 | dividimos esse espaço e por exemplo a CPU ia procurar no EEPROM se passássemos endereços |
| 26:55 | acima de 0x8000. Ou seja, arbitrariamente definimos que certos chips respondem a certos |
| 27:02 | endereços. A grosso modo, do endereço 0x0000 até 0x07FF temos 2 kilobytes de RAM. Nos endereços de |
| 27:11 | 0x2000 a 0x2007, que é bem curto, temos registradores pra PPU. De 0x4000 a 0x4017 acessamos a APU |
| 27:20 | e registradores de I/O como os controles e só de 0x8000 a 0xFFFF temos o equivalente |
| 27:26 | a uns 32 kilobytes reservados pra endereços que mapeiam pra algum lugar do cartucho. Em particular se acessarmos acima do endereço 0x6000 temos esse negócio que colocamos no |
| 27:35 | código chamado Mapper. Agora vocês precisam entender os truques que eram usados em consoles |
| 27:40 | com cartuchos. Se sua história com games começa só depois do Playstation 1, você tá acostumado a ter |
| 27:46 | os games em CDs, DVDs, Blu-Ray ou instalados no HD do seu computador. É de praxe que toda |
| 27:59 | vez tem que esperar o famoso "Loading", que é o tempo do computador começar a carregar os primeiros bytes do jogo na RAM pra só depois conseguir começar a jogar. Daí a |
| 28:07 | cada fase tem que carregar novos bytes pra RAM e jogar fora os bytes da fase anterior |
| 28:12 | que não vai precisar mais. Isso é necessário porque não cabe todo o jogo na memória. Um computador muito bom hoje tem 16 GB, mas qualquer jogo moderno tem 30 GB, 40GB, alguns |
| 28:21 | jogos podem ter absurdos 100GB. Obviamente não cabe tudo na RAM então precisa ir carregando |
| 28:27 | e descarregando de pedaço em pedaço. Com cartuchos é diferente. O que tem num cartucho são chips de ROM, como expliquei |
| 28:34 | no episódio anterior. Então quando você pluga o cartucho no console, não existe loading, |
| 28:40 | não tem que carregar nada e ele pode iniciar imediatamente porque a CPU acessa os endereços |
| 28:45 | diretamente da ROM, sem precisar carregar o jogo em memória. O cartucho "É" a memória. |
| 28:51 | Entenderam? Diferente de CD ou HD, a ROM do cartucho já tem velocidade máxima de acesso, |
| 28:56 | igual da RAM. Da mesma forma que a CPU consultaria um endereço na RAM, no caso pedindo endereços de 0x0000 a 0x07FF, quando ele precisa de dados do jogo ele pede nos endereços acima |
| 29:07 | de 0x8000 até 0xFFFF. Por isso jogos de consoles antigos carregam instantaneamente e não tem loading entre |
| 29:14 | fases e tudo é rápido. Um dos maiores gargalos ainda não resolvidos em games modernos de |
| 29:20 | fato é a lentidão do I/O, não só do HD mas de toda a cadeia que carrega dados, incluindo |
| 29:25 | barramento, controlador e tudo mais. Inclusive é isso que a nova geração de consoles PS5 |
| 29:31 | e Xbox Series X estão tentando combater colocando os SSDs e controladores mais rápidos do mercado |
| 29:37 | pra minimizar ao máximo o tempo de carregar coisas do disco. Mesmo assim o tempo nunca |
| 29:42 | vai ser zero como era nos cartuchos. Vou repetir o que eu disse antes: programação é sempre um trade off, uma troca. Cartuchos |
| 29:49 | tem tempo quase zero de acesso porque ele é direto um chip de memória. O problema |
| 29:55 | é que chips de ROM são muito mais caros de produzir comparado a discos de HD ou Blu-Rays. |
| 30:00 | É bem mais caro. A comparação mais óbvia foi na transição dos cartuchos pro CD quando saiu o Playstation 1 e o concorrente na época era o Nintendo 64 que preferiu usar cartuchos |
| 30:11 | pelas razões que eu acabei de falar. Jogos de Playstation podiam ter videos e muito mais conteúdo porque num CD daquela época |
| 30:18 | era possível colocar até 650 megabytes de dados. Em comparação um dos maiores cartuchos |
| 30:24 | de Nintendo 64 era Conker's Bad Fur Day que tinha enormes 60 megabytes, ou seja mais de |
| 30:30 | 10 vezes menos espaço e o cartucho ainda custava mais caro. Os lendários Zelda Ocarina |
| 30:36 | of Time e Majora's Mask eram cartuchos de menos de 30 megabytes. Por isso jogos de Nintendo |
| 30:42 | 64 raramente tinham algum video e também por isso preferiam usar o mínimo de texturas |
| 30:47 | nos modelos em 3D, porque texturas são imagens bitmap que consomem muito espaço. |
| 30:53 | Voltando pra era dos 8-bits. Um cartucho como do Super Mario original tem 40 kilobytes, |
| 30:58 | portanto male male encaixa no nosso espaço de endereços reservados pra ROM. Mas um Super |
| 31:04 | Mario 3 tem 385 kilobytes, quase 10 vezes mais bytes que o original. Um dos jogos mais |
| 31:10 | pesados do nintendinho é Kirby's Adventure e se você rodar vai ver um dos games mais |
| 31:15 | bem elaborados pro nintendinho, chega perto do que seria um jogo de Super Nintendo. Também pudera, o cartucho dele tem quase 800 kilobytes, perto de 1 megabyte. |
| 31:24 | Mas como é possível endereçar isso tudo de bytes só com endereços de 16-bits? Agora |
| 31:30 | vem o segundo grande fato sobre cartuchos: eles não tem só chips de ROM. Na realidade |
| 31:35 | um cartucho é uma placa de expansão, um PCB completo. Quando falo em placa, pense |
| 31:41 | mesmo como quando você compra uma placa gráfica como um novo NVIDIA RTX e espeta no slot PCI |
| 31:46 | Express na placa mãe do seu computador. Encaixar um cartucho no console é a mesma coisa. |
| 31:52 | Num PCB você pode plugar não só ROM como qualquer outro componente. Por exemplo, você pode colocar um chip de SRAM e uma bateria de lítio e boom, você acabou de ganhar a |
| 32:02 | capacidade de salvar o jogo. Só que isso torna o cartucho ainda mais caro, por isso nem todo jogo podia salvar. Um dos chips mais famosos se você jogou Super Nintendo foi |
| 32:12 | o chip Super FX, que literalmente era uma placa primitiva 3D que permitiu jogos como |
| 32:17 | Star Fox. O processo é o mesmo, o chip vem no PCB do cartucho. |
| 32:23 | Você literalmente poderia enfiar um nintendinho inteiro dentro de um cartucho. Mas só isso não responde a pergunta de como fazia pra um Kirby ter quase 1 mega de dados. Não basta |
| 32:32 | só enfiar mais chips de ROM se não temos endereços suficientes pra passar de 32 kilobytes. |
| 32:39 | Endereços funcionam como o nome diz, é como se tivéssemos uma rua de casas e só tivesse 32 números, da casa 33 em diante ficaria sem números. Se o carteiro precisasse entregar |
| 32:49 | alguma coisa nessas casas como ele encontra? E se nessa rua colocássemos um síndico? Que separasse a rua em blocos? Daí teria |
| 32:57 | casa de 1 a 32 no bloco A, casas de 1 a 32 no bloco B e assim por diante. Continua só |
| 33:03 | tendo 32 números mas dependendo do bloco sempre encontraríamos uma casa diferente. |
| 33:08 | E é exatamente isso que o nintendinho faz. No cartucho, além de vir mais ROM ele vem com um síndico, um controlador que chamamos de Mapper. |
| 33:16 | Como o nome diz, Mapper é um mapeador. Em vez de blocos na rua do nosso exemplo a memória |
| 33:23 | ROM é dividida em Banks ou bancos. E a técnica pra enxergar mais memória se chama Bank switching. |
| 33:29 | A CPU continua só conseguindo enxergar dos endereços 0x8000 a 0xFFFF mas ele pode pedir |
| 33:36 | pro Mapper trocar os banks, assim como no exemplo dos blocos da rua. Os banks costumam ter 16 kilobytes de tamanho e podemos ter vários banks, então se montarmos o cartucho |
| 33:46 | com ROM suficiente pra 50 banks de 16 kilobytes, vamos ter os quase 800 kilobytes do jogo Kirby. |
| 33:53 | Agora vem a parte cabeluda pra fazer emulador de NES: não basta só escrever código que representa o console, precisa também emular os chips que vem nos cartuchos, em particular |
| 34:03 | esses mappers. Você poderia imaginar que deve ter alguns poucos modelos de mappers. Mas que nada, se olhar a biblioteca toda de games de nintendinho existem 407 mappers que |
| 34:14 | foram encontrados e documentados. Por sorte, se você cobrir os mappers da própria nintendo e alguns de marcas famosas como Konami, já cobre a maior parte dos jogos. Muitos mappers |
| 34:24 | só existem em jogos muito obscuros, feitos na China ou lugares assim. Se você olhar de novo no wiki da nesdev vai encontrar o código que vem no cartucho que |
| 34:32 | identifica qual mapper ele tem. No arquivo de Memory ele vai selecionar um Mapper baseado |
| 34:38 | nesse código identificador que ler da ROM. Daí precisamos de cada um dos Mappers, que |
| 34:43 | precisam responder às mesmas funções. Por isso no nosso arquivo de mapper vamos definir uma interface que todos os mappers vão ter que implementar. Basicamente definimos o que |
| 34:52 | um Mapper precisa obrigatoriamente fazer, que é ler da ROM, gravar na RAM e coisas assim. |
| 34:58 | No inicializador pegamos o cartucho associado no console. Depois que carregarmos uma ROM ele vai preencher esse campo Mapper com seu código identificador, e com isso podemos |
| 35:07 | checar qual mapper vamos ter que carregar. Neste pequeno emulador em Go vai ter só alguns |
| 35:12 | dos principais. De curiosidade esse último mapper código 225 é que permite aqueles |
| 35:17 | cartuchos de 52 jogos em 1 que você já deve ter visto por aí. Um cartucho desses tinha |
| 35:23 | 6 chips de ROM com meio megabyte cada. Não vou entrar no detalhe de cada um, senão a gente fica aqui até o ano que vem, mas |
| 35:31 | só pra mostrar um, podemos criar um arquivo pro mapper 2. Lembrando que no nosso caso, |
| 35:36 | usando máquinas modernas, não temos esses limites pequenos de 16-bits. Podemos carregar a ROM de um cartucho como um arrayzão contínuo de bytes, seja lá quantos bytes tiver porque |
| 35:47 | temos espaço pra mapear tudo. Então recebemos o endereço que o CPU manda e mapeamos com |
| 35:52 | esse arrayzão. No caso, o que nos interessa é que quando carregamos a ROM os bytes são identificados |
| 35:58 | como regiões distintas, sendo as duas principais o PRG e CHR. PRG são bytes de programa. CHR |
| 36:06 | são os bytes de caracteres, que é a área onde normalmente estão os tiles. Eu sempre chamo de tiles mas se for traduzir é como se fossem azulejos. Tiles, azulejos, caracteres, |
| 36:16 | são termos que significam a mesma coisa. O princípio de tiles é simples. Um CPU como o 6502 não fica dando instruções pra escrever |
| 36:24 | pixel a pixel na tela. Ele pede pra escrever tiles. Pense num nintendinho como um editor |
| 36:30 | de textos. Um editor não escreve pixel a pixel na tela, ele escolhe uma letra de alguma família de fontes, digamos Arial, e passa o código que representa ela. E o Windows |
| 36:40 | ou MacOS da vida que vai se encarregar de realmente desenhar os pixels. No nintendinho quem se encarrega de desenhar os pixels é o chip chamado de PPU que eu |
| 36:50 | falei que é a unidade de processamento de pixels. O CPU não entende pixels, ele entende |
| 36:56 | tiles. Significa que o PPU tem que trabalhar bastante pra desenhar pixel a pixel. Inclusive o clock do PPU é maior que do CPU. Mas a CPU só precisa mandar um byte pra identificar |
| 37:07 | blocos de 8 por 8 pixels de uma vez só, em vez de mandar 64 comandos independentes pra |
| 37:12 | cada um desses pixels. Se você é de web front-end já lidou com algo assim, é como os sprites de CSS. Aliás |
| 37:20 | a técnica de sprites de CSS não é novidade, isso é uma técnica antiga. Outra técnica |
| 37:25 | antiga são fontes com imagens, como a Font Awesome que todo site hoje usa pra desenhar |
| 37:30 | icones. A memória CHR da ROM que eu falei é como se fosse uma Font Awesome, literalmente |
| 37:36 | caracteres. Cada caracter, ou fonte, é um tile. Acho que assim vocês conseguem visualizar |
| 37:41 | na cabeça. Consoles antigos assim sequer tem fontes ou tabela de letras. Cada jogo |
| 37:47 | define suas fontes e o código das letras, não tem um padrão como ASCII ou Unicode. |
| 37:52 | A PPU enxerga a resolução máxima de 256 por 240 pixels, e a CPU só enxerga uma grade |
| 37:58 | de 16 por 15 espaços onde cabem os tiles. É parecido com um computador DOS antigo que |
| 38:04 | tem resolução de 640 x 480 mas em modo DOS só enxerga 80 colunas por 25 linhas de texto. |
| 38:12 | O PPU também só consegue enxergar 8 kilobytes de tiles de cada vez, então toda vez que precisamos de tiles diferentes, o CPU pede pro Mapper trocar o banco por outro. Existem |
| 38:21 | dois excelentes emuladores pra quem quer aprender a programar jogos de verdade de nintendinho. Um deles é o FCEUX que acho que é o mais conhecido e o outro é o Mesen que eu acho |
| 38:31 | que tem ferramentas mais modernas. Vocês entenderam o que fizemos até agora? Eu fui estruturando o nintendinho como código |
| 38:37 | de Go. Cada aspecto dele são estruturas de dados normais como arrays e bytes. Bytes na |
| 38:44 | memória que sabemos exatamente onde estão e com isso podemos consultar a qualquer momento. Seja o emulador feito em Go, em C ou C++ vai ser a mesma coisa. O emulador Mesen implementa |
| 38:54 | de forma parecida mas além de só emular ele expõe essas estruturas de forma visual |
| 39:00 | em tempo real. Por exemplo, podemos abrir um visualizador da memória da PPU e organizar |
| 39:05 | pra vermos os bitmaps. E olha só o que tem na memória da PPU, esses são os tiles. Cada tile é um quadrado de |
| 39:13 | 8 por 8 pixels. Se eu não estou enganado, podemos associar até 4 cores pra cada um, |
| 39:18 | dentre 12 cores de uma paleta, num total de 4 paletas que posso escolher. Em outra aba |
| 39:24 | podemos ver as 12 cores da paleta de background e outras 12 cores da paleta pros sprites. |
| 39:29 | Se você já brincou de front-end, HTML e CSS certamente já viu código de cores em |
| 39:35 | hexadecimal, é a mesma coisa. Como a localização dessa área CHR na ROM é conhecida, podemos editar o que tem lá. |
| 39:42 | Os tiles são bitmaps não comprimidos. Hoje em dia você tá acostumado a lidar com imagens |
| 39:47 | comprimidas como JPEG que usa um algoritmo lossy, ou seja, que perde detalhes da imagem |
| 39:53 | pra reduzir o tamanho. Um bitmap é exatamente o que o nome diz, um mapa de bits, nas posições |
| 39:59 | exatas pra formar a imagem e sem compressão. Só pra mostrar como podemos afetar o jogo, com o Mesen rodando podemos editar as cores |
| 40:08 | da paleta de background e trocar a cor do céu de azul pra outra cor. Ou podemos mexer na paleta de sprites e trocar a cor do Mario. Você pode mudar completamente a aparência |
| 40:18 | do jogo só de ajustar as cores dessa forma. Repetindo, pense na tabela de tiles como se fosse uma tabela de fontes de letras. Aliás, |
| 40:27 | o nintendinho sequer tem fontes. Ele não tem um sistema operacional, o jogo começa rodando direto no hardware, sem nenhuma camada intermediária pra ajudar. Então se um jogo |
| 40:36 | quer escrever textos na tela, ele próprio precisa embutir tiles de fontes. E de fato |
| 40:42 | você vai ver que normalmente começando no endereço zero dessa área CHR costuma ter letras, números e símbolos. Aqui o número zero é a posição zero mesmo, o número |
| 40:51 | um é posição um e assim por diante. E começando do zero até a letra F fica bonitinho de 0 |
| 40:56 | a F em hexadecimal. Lembra quando usamos no Linux a ferramenta hexdump ou xxd e na terceira coluna ele tenta |
| 41:04 | interpretar bytes que mapeiam pra tabela ASCII como letras e às vezes aparecem textos mesmo? |
| 41:10 | Numa ROM de videogame isso não funciona porque os códigos das letras não seguem a tabela ASCII. Mesmo entre jogos diferentes a posição das letras na ROM não é a mesma. Por isso |
| 41:20 | em emuladores com debug como o Mesen e FCEUX podemos carregar nossa própria tabela que |
| 41:25 | mapeia código das posições dos tiles pra letras, como essa na tela que é um arquivo |
| 41:30 | texto com extensão TBL. Assim podemos tentar reconhecer algum texto no meio do binário. |
| 41:36 | Vejam no espaço PRG da ROM que não dá pra identificar nada. Mas carregando a tabela |
| 41:41 | começamos a reconhecer quais bytes são textos. E com isso posso editar o texto, por exemplo |
| 41:47 | trocando de MARIO pra FABIO. Resetamos o jogo e olha só como aparece meu nome. Podemos |
| 41:53 | trocar todos os textos num cartucho e salvar o binário por cima, contanto que o texto |
| 41:58 | novo caiba no mesmo espaço usado pelo texto antigo. Esse é o hacking mais simples de |
| 42:04 | todos e que todo mundo que já brincou com binários já fez na vida. É assim que muita gente traduziu cartuchos japoneses pra inglês, por exemplo. Se tiver filhos pequenos imagino |
| 42:13 | que eles vão gostar de ver os nomes deles nos jogos. E podemos editar o binário não só do texto como dos tiles. Por exemplo, existem programas |
| 42:20 | como o Tile Layer Pro. Se abrirmos a ROM do Super Mario, no começo vamos ver um monte de sujeira que são bytes de programa, mas se descermos vamos encontrar os tiles do jogo. |
| 42:31 | Pra enxergar melhor podemos mudar a paleta e rapidamente vamos começar a reconhecer |
| 42:36 | alguns, como os tiles que formam o personagem. Pra ver melhor, podemos arrastar os tiles pra esta outra janela e montar como um quebra cabeça. O Mario grande é formado por seis |
| 42:46 | tiles. Na ROM tem a sequência pra cada posição da animação, seja correndo ou pulando. |
| 42:51 | Podemos fazer mais, podemos editar cada tile e mudar o jogo completamente. É um puta trampo |
| 42:57 | editar tile a tile mas se tiver paciência fazendo isso eu poderia pegar os bits de tiles |
| 43:03 | de um Zelda ou Megaman e mudar o Mario pra ser o Link, ou qualquer outro personagem que |
| 43:08 | caiba em seis tiles ou menos. E só com as técnicas eu mostrei aqui você poderia fazer |
| 43:13 | um novo jogo usando um que já existe como base. Sabe quem já fez isso? A Tectoy aqui no Brasil. Por causa deles nós somos o único país |
| 43:22 | no mundo que ainda produz Master System novo até hoje. O Master System foi o concorrente |
| 43:27 | do nintendinho nos anos 80. Também é um console de 8 bits mas no papel ele era tecnicamente superior. Em vez do MOS 6502 de 1.8 Mhz o Master System vinha com o Zilog Z80 que ia |
| 43:38 | até 3.5 Mhz, quase o dobro de clock. Em vez de 2k de RAM e 2k de VRAM ele vinha com 8k |
| 43:44 | de RAM e 16k de VRAM. Em vez de ser limitado a ter só 16 cores na tela, ele podia ter 32 cores, por isso jogos de Master System sempre parecem mais coloridos e vivos |
| 43:54 | Essa discussão de especificações e jogos sempre foi uma constante nas rodas de gamers. Um Xbox One X é tecnicamente mais poderoso que um PS4 Pro, mas o Playstation continua tendo alguns dos melhores jogos exclusivos como God of War ou Spiderman. Nos anos 80 não era diferente. O Master System era mais poderoso mas as marcas que chamavam mais atenção estavam no Nintendinho. De qualquer forma o Master System conseguiu um público cativo aqui no Brasil e a Tectoy |
| 44:00 | começou não só a licenciar e distribuir jogos estrangeiros como começou a lançar jogos brasileiros. Um grande exemplo que eu lembro que me impressionou na época foi o |
| 44:10 | jogo da Turma da Mônica. Esse jogo na realidade é o Wonder Boy II com textos e sprites editados pra encaixar |
| 44:17 | numa história da Turma da Mônica. Se nunca viram olhem lado a lado. A Tectoy produziu vários jogos usando essas técnicas como Geraldinho, Sapo Xulé, TV |
| 44:27 | Colosso. Mas fazendo isso eles foram aprendendo como de fato programar no Master System e |
| 44:32 | começaram a produzir jogos mais elaborados. Por exemplo, um dos melhores jogos de Master System sem dúvida é Castle of Illusion. Daí a Tectoy pegou emprestado elementos desse |
| 44:41 | jogo e fez um terceiro jogo na sequência do também excelente Land of Illusion, com fases novas e inimigos novos e chamou de Legend of Illusion. É bem claro onde são sprites |
| 44:51 | dos jogos anteriores e quais são sprites desenhados do zero. A parte artística ainda tava bem primitiva, mas já é uma evolução. |
| 44:58 | Mas quando você treina e vai aprimorando as coisas melhoram. Por exemplo, eles começaram a experimentar com a idéia de pegar jogos de Mega Drive, que é um console bem mais |
| 45:06 | poderoso que o Master System, pegar os sprites e elementos visuais e diminuir detalhes, diminuir |
| 45:12 | cores, diminuir frames de animação pra tentar fazer caber no Master System. E fazendo isso eles de fato conseguiram alguns jogos interessantes. Mesmo a jogabilidade não sendo nada boa, |
| 45:22 | eu acho interessante pela tentativa. Só no Brasil existem jogos como Street Fighter, Mortal Kombat, Ecco the Dolphin e A Pequena Sereia pra Master System. |
| 45:32 | Tem vários videos no YouTube contando a história da Tectoy. Tem até vários canais gringos descobrindo a Tectoy só agora e ficando impressionado de ver o Master System e Mega Drive sendo |
| 45:42 | fabricados por aqui até hoje, recomendo darem uma olhada, é uma parte da história da nossa |
| 45:47 | indústria brasileira que infelizmente ficou parado nos anos 90 e não conseguiu evoluir. Aliás, recentemente lançaram um remake HD do Wonderboy II que ficou bem bacana e tá |
| 45:56 | em lojas como Steam. E claro, alguém fez um mod pra ele relembrando o jogo da Turma da Mônica. Então você tem uma versão HD disso também! Vale conferir só pela nostalgia |
| 46:06 | se você já jogou o original no começo dos anos 90. Bom, vamos voltar pro nintendinho. O que eu mostrei do código do emulador é só o começo |
| 46:14 | do esqueleto. Na verdade eu não escrevi um emulador não, esse foi um projeto que achei aleatoriamente no Github. Vocês podem baixar a versão completa no link que vou deixar |
| 46:23 | nas descrições abaixo. E pra mostrar que ele funciona vamos compilar e executar. (nes) |
| 46:29 | Um último insight que eu queria aproveitar pra falar é sobre o PPU. Como expliquei ele era o equivalente aos nossos GPUs de hoje só que muito mais primitivo. Se havia um |
| 46:37 | chip que trabalha incessantemente no nintendinho era o PPU, desenhando 60 quadros por segundo |
| 46:43 | sem parar. Na verdade são dois insights. Vamos lá. Pra começar eu disse que o MOS 6502 roda a meros 1.8 Mhz que é milhares de vezes mais lento que qualquer CPU de hoje. |
| 46:54 | Antigamente jogos tentavam usar o máximo que a CPU podia oferecer e o timing de tudo era atrelado ao clock do sistema. Hoje em dia não fazemos isso, em vez de atrelar ao |
| 47:04 | clock atrelamos a outras coisas como framerate que é a taxa de quadros por segundo ou vsync |
| 47:10 | que sincroniza com a frequência de atualização do monitor. Ou seja, se temos como alvo rodar |
| 47:15 | o jogo a 60 quadros por segundo, vamos calcular tudo pra caber na faixa de 60 quadros por |
| 47:21 | segundo. Mesmo se o clock aumentar ou diminuir, a referência vai ser os quadros por segundo. Se a CPU for lenta demais vamos ser obrigados a cortar quadros. Se a CPU for rápida demais |
| 47:30 | vamos dar pausas pra esperar. Estou simplificando, claro. Mas jogos antigos não tinham o luxo de esperar, cada clock contava. Por isso se programava |
| 47:38 | em assembly pra ter controle absoluto do hardware. Daí quando os CPUs evoluiram na geração |
| 47:44 | seguinte e pularam de 1Mhz pra digamos 40Mhz os jogos ficaram rápidos demais. Até por |
| 47:50 | isso nos 386 de antigamente tinha um botão Turbo. A idéia desse botão era diminuir o clock do sistema pros programas não rodarem rápidos demais. Se você tentar rodar um |
| 47:59 | jogo dos anos 80 num PC moderno vai ver que ele roda rápido demais ao ponto de ser injogável. |
| 48:04 | Um dos desafios mais difíceis nos emuladores de consoles antigos é literalmente adicionar pausas em cada passo pro jogo rodar exatamente como seria antigamente, se não tiver esse |
| 48:14 | controle de pausas o jogo rodaria rápido demais. E nosso emulador precisa levar isso em conta. Por isso temos que editar o arquivo do CPU e adicionar outra informação importante: |
| 48:24 | uma lista dizendo quantos ciclos cada instrução consome. Lembra que falei que um Load, Adição |
| 48:30 | e Store consomem em média uns 5 ciclos? Não pode ser aproximado assim, tem que ser a quantidade |
| 48:35 | exata de ciclos. Então vamos adicionar a lista, onde cada posição é o endereço |
| 48:40 | da instrução como declaramos na estrutura table. O segundo insight que falei tem a ver com timing de velocidade. O PPU é ocupado demais, |
| 48:49 | ele não pode parar de desenhar na tela. Ele roda com clock 3 vezes mais rápido que a CPU e precisa de uma rotina pra sincronizar. A coordenação entre CPU e PPU é um assunto |
| 48:59 | fascinante em si só mas a parte importante é que a CPU não pode interromper a PPU a |
| 49:04 | qualquer momento. Ela vai estar escrevendo pixels na tela numa frequência precisa e se você interromper, vai quebrar toda a renderização. |
| 49:12 | Significa que do lado da CPU digamos que você detecte que um botão foi pressionado no controle. |
| 49:18 | Digamos que foi um botão de salto. Você iria querer imediatamente mostrar isso na tela acionando a animação de salto do Mario por exemplo. Então você processa esse estado |
| 49:27 | e envia o comando pro PPU atualizar o sprite do Mario. Mas isso vai quebrar a renderização, |
| 49:33 | então como faz? A característica importante do PPU é que ele escreve na tela uma linha horizontal de |
| 49:38 | cada vez. Isso se chama ScanLine e é derivado de como monitores de tubo funcionam. Se você |
| 49:44 | nunca viu ele não escreve pixels em qualquer coordenada. No fundo do tubo existe um canhão, |
| 49:50 | que vai atirando eléctrons na tela de fósforo na frente dele uma linha horizontal de cada |
| 49:55 | vez e fazendo um zigue zague pra próxima linha. Diferente de LCDs modernos que tem uma quantidade fixa de linhas, monitores de tubo podem ter quantas linhas quiser, basta |
| 50:05 | o canhão distanciar ou aproximar essas linhas. Por isso bons monitores de tubo tendem a ter |
| 50:10 | imagens melhores do que LCDs. Recomendo ver esse video da Digital Foundry que explica |
| 50:15 | sobre a qualidade esquecida dos CRTs e como eles ainda superam os LCDs. |
| 50:20 | De qualquer forma, o PPU do nintendinho vai desenhar 240 linhas visíveis e depois vai entrar num período entre as linhas 240 a 260 em que ele não desenha nenhuma linha |
| 50:30 | visível. Isso se chama Vertical Blank ou Vblank. Isso acontece 60 vezes por segundo, |
| 50:37 | uma vez depois de desenhar cada frame. É nessa pequena janela de 20 ScanLines que o PPU tem a oportunidade de ser interrompido e receber ordens da CPU, por exemplo, dizendo |
| 50:47 | o que tem que desenhar no frame seguinte. De novo, se você é de front-end, uma das boas práticas que deve ter aprendido, principalmente |
| 50:54 | se usa frameworks como um React é nunca escrever direto no navegador. Você acumula todas as |
| 51:00 | modificações e escreve tudo de uma vez depois. E como você faz isso? Em vez de mandar ordens |
| 51:05 | de desenhar direto na árvore de elementos HTML do navegador, o famoso DOM, você manda |
| 51:10 | escrever numa cópia desse DOM que só existe em memória, o famoso Virtual DOM. Então se você modificou 50 elementos nesse VDOM, você não precisou interromper o navegador |
| 51:19 | 50 vezes. Você guarda essas modificações em memória e só interrompe o navegador uma |
| 51:24 | vez pra desenhar só o que mudou, uma vez só. E é quase isso que se faz no nintendinho também. A idéia de separar lógica da apresentação |
| 51:32 | não é novidade. É assim que se programa desde pelo menos os anos 80. Então do lado |
| 51:37 | da lógica do jogo na CPU ele faz as modificações em RAM e durante o Vblank o PPU puxa essas |
| 51:43 | modificações e avança pro próximo frame, e com isso temos uma separação de responsabilidades. |
| 51:49 | Como cada jogo monta estruturas diferentes pra representar o que precisa mandar pra PPU. Mas um jogo que é visualmente fácil de acompanhar é o Super Mario Bros 3 porque ele mantém |
| 51:59 | a estrutura completa da tela com cada elemento aberto na RAM. Se você procurar por memory |
| 52:04 | map e o nome do jogo no Google facilmente vai achar a documentação que várias pessoas |
| 52:09 | gastaram horas garimpando e com isso sabemos que a partir do endereço 0x6000 na RAM vai |
| 52:16 | ter os dados de montagem de cada tela da fase. Vamos abrir no Mesen e vou colocar lado a lado pra vocês verem. Se procurarmos na RAM |
| 52:23 | depois do endereço 0x6000 rapidamente vamos encontrar padrões que se assemelham à tela |
| 52:28 | que estamos, e na sequência vai tendo todas as outras telas dessa fase. Olhem os códigos |
| 52:33 | internos de cada bloco dessa tela e veja como o código muda quando eu modifico um objeto, |
| 52:39 | por exemplo batendo nele. E se você é adepto de Mario Maker, esse é o Mario Maker raíz. Vamos olhar algumas |
| 52:45 | telas pra frente. Por tentativa e erro sabemos que essas "arrobas" representam moedas. Vamos criar um monte .... e agora vamos até essa tela. ... Olha que bonito. E de novo vejam |
| 52:56 | como cada vez que vou pegando as moedas o código se modifica na RAM. |
| 53:01 | De novo usando a analogia com front-end, isso é o equivalente a você dar um inspect no navegador e sair editando os elementos. E aproveitando que estamos no Mesen, vamos abrir |
| 53:11 | primeiro o Super Mario de novo. E esses são todos os tiles que tem no cartucho, somente |
| 53:17 | um único bank de 16 kbytes. Pense que o jogo inteiro, que não é curto, é desenhado somente |
| 53:22 | com esses tiles. É impressionante se considerar que antes dele você só tinha jogos nível pacman bem simples e eles conseguiram esticar pra múltiplas fases que parecem diferente |
| 53:32 | mas que são basicamente os mesmos tiles com paletas diferentes de cores. |
| 53:37 | Mas se abrirmos o Super Mario 3 de novo, que vem com o Mapper conhecido como MMC5, ele vai ter bem mais banks como eu expliquei. E olha só no visualizador de novo. Podemos |
| 53:46 | ir explorando os diferentes banks que são os conjuntos de tiles. E por isso o Super Mario 3 tem visuais bem mais elaborados e diferenciados de mundo pra mundo. Não é |
| 53:55 | só uma mudança de paleta de cores mas de diversidade de tiles. E no último olha como só a tela de entrada com título grande ocupa um bank quase inteiro. Por isso quando tem |
| 54:05 | imagens bitmap grande que ocupam a tela inteira a gente sabe que é um jogo caro porque literalmente |
| 54:10 | ele tá usando uma parte considerável do chip só pra guardar essa uma imagem que só |
| 54:15 | aparece uma vez. Recentemente teve uma ressurgência de games independentes publicando nos Steam da vida |
| 54:22 | que tentam emular o visual pixel art pra ter aquela vibe de jogo retro. Um bom exemplo |
| 54:27 | disso é o excelente jogo Celeste, considerado um dos melhores jogos de plataforma pra speedrun |
| 54:32 | pela nuance nos controles e como ela recompensa quem consegue combinar timing com movimentos avançados do jogo pra percorrer as fases. Outros exemplos são os já classicos Meat |
| 54:42 | Boy ou Shovel Knight também. Mas o que esses jogos tem em comum é que eles são modernos |
| 54:47 | mas só escolheram um estilo artístico de pixel art pela estética e não porque foram obrigados a isso. |
| 54:53 | Entendam, jogos antigos não são pixel art porque o povo gostava do estilo mas sim porque |
| 54:58 | a resolução da tela era de meros 256 pixels na horizontal por 240 pixels na vertical. |
| 55:04 | Isso é um quarto da resolução de um monitor full HD que tem 1080 pixels na vertical. Cabe literalmente 16 telas de nintendinho numa tela full HD. Mas agora você entende também |
| 55:12 | que não é só a resolução, todo o design do jogo, das fases, inimigos e outros elementos dependem muito do espaço na ROM. Quanto mais ROM se adicionava no cartucho mais caro ele |
| 55:21 | ficava. Por isso a maioria dos jogos se mantinha nos limites de 40 kilobytes que o Super Mario |
| 55:27 | original usava. Em comparação, a instalação do jogo Celeste tem mais de 700 megabytes. |
| 55:33 | Existem vários programadores hoje explorando programar no hardware limitado do nintendinho. |
| 55:39 | Um grande exemplo é o jogo Micro Mages da Morphcat Games. Dois anos atrás eles soltaram |
| 55:44 | um mini documentário mostrando como as limitações do console e do cartucho influenciaram as |
| 55:50 | decisões de design do jogo. Eles se colocaram no desafio de fazer um jogo de verdade, bem |
| 55:55 | feito, escrevendo em Assembly de 6502 e ainda suportando 4 jogadores simultâneos. |
| 56:01 | O jogo é excepcional, eu paguei pra ter a ROM e recomendo que comprem também, são 10 dólares bem gastos. A mecânica é muito simples, lembra um pouco a idéia do Celeste. |
| 56:10 | É um jogo vertical onde a tela vai subindo lentamente e você precisa alcançar o fim |
| 56:15 | da fase antes que a tela te alcance. E falando em fases, vale um parêntese pra explicar mais uma estrutura de dados que o nintendinho usava, os nametables. Em resumo hiper resumido, |
| 56:27 | é um espaço na memória do PPU que organiza o equivalente a 4 telas, duas em cada linha. |
| 56:32 | Se você está num Mario que é plataforma horizontal, ele vai mantendo a próxima tela no espaço à direita. Olha como a memória vai atualizando conforme vamos avançando |
| 56:41 | pelas telas. Se for plataforma vertical como Kid Icarus ele mantém a próxima tela no espaço pra |
| 56:48 | cima e você pode trabalhar os modos desse namespace se precisar de algo mais complexo como num Mario 3 que é horizontal mas quando você pega a folha pode voar vertical. |
| 56:58 | No caso do Micro Mages ele vai usar um modo semelhante ao do Kid Icarus. Jogando um pouco, |
| 57:04 | veja lado a lado como o próximo nivel vai se montando nesse espaço de memória de nametables. |
| 57:09 | No video da Morphcat ele começa explicando o que eu já falei, que gráficos são divididos |
| 57:14 | em duas tabelas CHR. Ele chama tiles de sprites mas é a mesma coisa, eu chamo sprites os |
| 57:20 | tiles que estão na tela neste momento. Ele continua repetindo que cada tile é um quadrado de 8 por 8 pixels e que pode escolher até 3 cores da paleta. E que juntamos tiles pra |
| 57:30 | formar o que ele chama de meta-sprites que é o objeto completo. Continuando, ele explica |
| 57:35 | que só dá pra ter até 4 paletas de cores e que as cores são reusadas pra outros objetos como inimigos porque não dá pra ter cores diferentes pra cada coisa, é tudo as mesmas |
| 57:44 | paletas. Outra limitação do PPU que eu não mencionei ainda é que ele só consegue desenhar 8 sprites |
| 57:51 | por scanline. Como cada personagem é formado por duas linhas de dois tiles cada, nesse |
| 57:56 | exemplo vai ter 10 tiles por linha em vez do máximo de 8. Se tiver mais que 8 os sprites |
| 58:02 | seguintes simplesmente não são desenhados. Por isso um truque muito usado é escolher 8 tiles dos 10 e desenhar num frame, daí no próximo frame você esconde 2 que foram |
| 58:11 | desenhados no anterior e troca por 2 que ainda não tinham sido desenhados, e vai permutando |
| 58:16 | de frame a frame. Por isso muitos jogos de nintendinho parece que os personagens ficam piscando na tela. Isso acontece quando eles se movimentam e na mesma linha acaba ficando |
| 58:25 | mais de 8 sprites. Por causa dessas limitações, a primeira decisão da Morphcat foi criar personagens |
| 58:32 | que precisam só de um tile pra formar o sprite em vez de 4 ou mais. Além de economizar em |
| 58:38 | espaço, isso também evita o flicker, aquelas piscadas, porque vai ser mais difícil ter mais de 8 sprites por scanline. Falando só em espaço, de volta à tabela de tiles CHR |
| 58:48 | na ROM, esse é o espaço ocupado por todos os tiles que formam as animações do Mario, |
| 58:53 | que nós já vimos antes. E agora o espaço ocupado por todas as animações dos magos nesse novo jogo. Veja como economiza espaço escolhendo fazer personagens menores que cabem |
| 59:03 | num único tile. E não só isso, também conseguimos adicionar mais quadros na animação, |
| 59:08 | tornando a movimentação mais fluida. Outro desafio são os chefões, que costumam ser sprites grandões. Por exemplo, esses |
| 59:15 | são todos os frames de animação de um dos chefões. O problema é que se você tentar encaixar todas essas imagens no que restou do espaço CHR, simplesmente não vai caber. |
| 59:24 | E isso é só um chefão. Agora vem a parte onde a programação e o design precisam andar juntos, porque o designer tem que fazer um chefão cujos quadros podem ser divididos |
| 59:34 | em partes, no caso três, que podem ser animados independentemente. Olhando só os quadros que fazem a animação da cabeça, dividimos em tiles, e vemos se |
| 59:44 | tem repetições. E de cara você pode ver que a primeira metade em todos os três quadros é igual, então só precisa armazenar uma versão, que pode ser reusada em todos. |
| 59:54 | Não só isso, se um tile é o espelho de outro tile, você guarda só uma versão e |
| 59:59 | pede pro nintendinho inverter horizontalmente, e assim pode economizar mais um pouco. E fazendo |
| 1:00:05 | isso, só na cabeça otimizamos de 16 tiles pra 4 que realmente precisam existir na ROM. |
| 1:00:10 | Pra parte do meio, fazemos a mesma coisa: procuramos todos os tiles repetidos, todos |
| 1:00:16 | que podem ser invertidos e diminuímos mais ainda. E a última parte tem 5 animações mas de cara as duas últimas são inversões das |
| 1:00:24 | duas primeiras. E fazendo todas as mesmas reduções, removendo tudo que é repetido, |
| 1:00:30 | compare os tiles que sobraram com os que originalmente eram necessários sem otimizar. O video deles continua mostrando como aplicaram outras técnicas pra reduzir ainda mais a |
| 1:00:40 | quantidade de memória necessária pra montar as fases. Mas eu vou pular pra não ficar extenso demais, por isso recomendo que assistam e também comprem o jogo. |
| 1:00:48 | Falando em programar seus próprios jogos, como você faz isso? Simples, se pesquisar no Wiki da Nesdev vai encontrar sobre ferramentas, tem vários fóruns ainda ativos onde o povo |
| 1:00:58 | troca dicas e informações sobre as melhores técnicas e ferramentas, mas o mais básico |
| 1:01:03 | é o cc65 que vem com o montador ca65 e o disassembler da65. E se procurar num Github |
| 1:01:10 | vai encontrar vários exemplos, de hello world a joguinhos completos feitos do zero como o Micro Mages. Se você já pensou em programar games e não quer ser só mais um mero clonador |
| 1:01:19 | de Flappy Bird, programar em hardware restrito como um nintendinho é um excelente exercício |
| 1:01:24 | pra aprender todos os fundamentos de um bom design de games. Por exemplo, baixei este projetinho que faz todo o setup do ambiente, carrega o mínimo |
| 1:01:33 | de tiles e tudo mais pra ter fontes e com isso consigo fazer um hello world da vida rapidamente em C. E sim, é possível programar em C e compilar com o cc65 pra binário de |
| 1:01:44 | 6502 específico de nintendo. A desvantagem de programar em C é que ele vai gerar um |
| 1:01:49 | binário menos otimizado do que um bom programador faria na unha direto em assembly. Por outro |
| 1:01:54 | lado, como estamos em ambiente emulado você sempre pode mexer no emulador pra ter uma CPU mais rápido do que o nintendinho original e quantos banks de ROM quiser. |
| 1:02:03 | Aliás, sobre o hello world, considere o seguinte: o nintendinho não tem um sistema operacional, |
| 1:02:08 | sequer vem com fontes numa ROM, o jogo tem que fazer tudo, então pra fazer um hello world, você precisa primeiro armazenar suas próprias fontes no espaço CHR da ROM. Só |
| 1:02:18 | depois pode escrever alguma coisa. Falando nisso vale a pena mostrar como subir um pouquinho o nível da linguagem pra não ficar tão tedioso fazer só assembly puro. Não é um compilador ainda, tá longe disso, mas muitos assemblers tem capacidade pra macros. Pra quem não sabe, macro é como um template. Um procesador de Markdown é tipo um macro de HTML. Quando eu digito asterisco o processador |
| 1:02:24 | vai pegar o texto seguinte e colocar entre as tags de bold por exemplo. Macro é uma forma de reduzir copy e paste de trechos de código. O ca65 que é o assembler mais recomendado pra programar pro nintendinho já vem com vários macros que adicionam algumas construções mais modernas como ifs, whiles e outras coisas, assim você consegue ter mais dicas visuais do que cada trecho faz em vez de ver só um linguição de instruções. Some isso a subrotinas com JSR que mostrei no video anterior e é |
| 1:02:30 | possível programar sem ficar completamente doido no processo. Mas pense assim: é assim que se programava games de verdade. O grande lance de programar em consoles é tirar o máximo que o hardware consegue oferecer. Outra coisa interessante. Hoje em dia não existe mais o código fonte da maioria esmagadora dos games. Muitas empresas da época até faliram e muito material se perdeu. Mas isso não tem problema. Você sempre consegue reabrir o código a partir do binário. Pra isso serve |
| 1:02:36 | a ferramenta da65 que vem no mesmo pacote. Você pode fazer o desassembly e voltar aos |
| 1:02:42 | mnemônicos. Obviamente não vai ter o nome correto das subrotinas, labels, constantes |
| 1:02:48 | e variáveis. Mas se você tiver experiência com o hardware vai saber por exemplo que se tiver alguma coisa mexendo com o endereço a partir de 0x8000 está acessando a ROM, |
| 1:02:56 | se mexer com o endereço 0x4016 ou 0x4017 está falando com os controles. Daí você pode fazer a engenharia reversa que é adicionando as etiquetas e nomes das |
| 1:03:05 | coisas mais óbvias primeiro e fazer o caminho inverso. Ah, se esse trecho mexe com o endereço |
| 1:03:11 | 0x4016 deve ser o trecho que decide o que fazer quando aperta um botão. Além disso |
| 1:03:17 | você pode fazer tracing, visualizar o que acontece em cada registrador e na memória a cada instrução pra determinar do que se trata cada subrotina. É super trabalhoso |
| 1:03:27 | mas fazendo isso você consegue encontrar praticamente tudo. Diversos jogos já foram mapeados assim. |
| 1:03:33 | E de fato, se procurar no Github você vai achar um disassembly do Super Mario praticamente |
| 1:03:39 | completo com todos os nomes de subrotinas, etiquetas e constantes. É o mais próximo |
| 1:03:45 | que se chegou do código fonte original. E em cima disso você pode modificar o jogo |
| 1:03:50 | como quiser no nível do código em vez de se limitar a só modificar os bytes no nível |
| 1:03:55 | da ROM como fizemos com textos e tiles. Podemos adicionar tiles novos ou fazer textos mais |
| 1:04:01 | longos e reprogramar a lógica porque o assembler vai conseguir recalcular todos os endereços |
| 1:04:06 | corretamente e gerar um novo binário que funciona. Finalmente, vou completar a maior tangente que fiz até hoje. Vocês vão se lembrar |
| 1:04:15 | que o episódio anterior começou só porque eu vi um video falando sobre o Game Genie. Como expliquei antes, Game Genie é um hardware que fica entre o cartucho e o console. E agora |
| 1:04:25 | sabemos que o cartucho responde a uma faixa de endereços bem específico entre $8000 |
| 1:04:30 | e $FFFF. Também sabemos que endereços que a CPU pede não correspondem à localização |
| 1:04:36 | exata nos cartuchos por causa do sistema de mappers e bank switching. Existem duas formas de adicionar cheats, ou trapaças nos jogos. Uma delas é alterando |
| 1:04:46 | o valor carregado na memória RAM e a outra é alterando direto o binário na ROM. Com |
| 1:04:51 | bastante paciência você consegue visualizar o conteúdo da RAM usando emuladores como o FCEUX e o Mesen, gravar dumps da memória entre uma parte do jogo e outro e comparar |
| 1:05:02 | os bits pra ver o que mudou. Por exemplo, gravar a RAM antes de morrer e depois de morrer pra ver qual byte diminuiu e ele é um candidato pra ser o local na memória que representa quantas vidas você tem, daí você pode testar esse valor. Com tantas décadas de gente escovando bits, existem bancos de dados inteiros com diversos |
| 1:05:09 | cheats pra cada jogo. Você facilmente consegue encontrar código pra tudo. Num emulador como |
| 1:05:15 | o RetroArch tem até funcionalidades pra sincronizar com esses bancos de dados daí você nem precisa digitar os códigos manualmente. Só escolher o jogo, selecionar em cheats, carregar e já |
| 1:05:25 | era. Resumindo o video do canal Retro Game Mechanics Explained o que o hardware do Game Genie faz |
| 1:05:32 | é receber um endereço de 16-bits e um ou dois valores de 8 bits cada. Isso forma códigos |
| 1:05:38 | de 6 ou de 8 letras. Quando o código tem 6 letras é fácil porque os primeiros 4 dígitos |
| 1:05:43 | representam o endereço na RAM e os dois últimos digitos representam o valor que o Game Genie vai devolver e pronto. Quando estamos falando de jogos usando o Mapper mais simples, como |
| 1:05:52 | num Super Mario original que só suporta ROMs com 40 kilobytes, isso é tudo que precisamos. |
| 1:05:58 | Agora que você entende bank switching, sabe que no mesmo endereço da RAM pode estar apontando |
| 1:06:03 | dados em banks diferentes da ROM. Depende de qual bank tá apontando no momento. Então |
| 1:06:09 | o Game Genie não pode responder com um valor fixo toda hora, só quando um determinado bank tá selecionado. Pra isso serve o código de 8 digitos. De novo, os primeiros 4 formam |
| 1:06:19 | o endereço na RAM. Agora os dois dígitos seguintes representam qual é o valor que esperamos encontrar na RAM, ou seja, o valor que ele carregou do bank. Se for diferente |
| 1:06:28 | do que passamos é porque o console tá olhando um bank diferente do que queremos. Mas quando o valor voltar igual, é porque ele mudou pro bank que queremos, e aí devolvemos o |
| 1:06:37 | valor fixo que tá no ultimos dois dígitos do código. A forma como o Game Genie monta os códigos é só um embaralhamento arbitrário que ele |
| 1:06:46 | faz sei lá porque, talvez só pra deixar o código um pouco mais legível. É só uma obfuscação simples. Pra isso primeiro você pega os bits do endereço e dos dois valores, |
| 1:06:56 | daí embaralha os bits pra outras posições, e no fim substitui cada bloco de 4 bits por |
| 1:07:02 | uma letra de acordo com uma tabela arbitrária. Pra cada console tem uma regra de embaralhamento |
| 1:07:07 | e tabela de mapeamento de letras diferentes. Eu fiz um programinha bem besta na linguagem Crystal que pega o código do Game Genie, |
| 1:07:16 | traduz de volta em bits, desembaralha os bits e devolve o endereço e os valores. Eu fiz |
| 1:07:22 | em Crystal só porque eu quis, nenhuma razão especial, podia ser em qualquer linguagem. Vou deixar o link pra esse código nas descrições abaixo. Talvez eu termine de fazer o desembaralhamento |
| 1:07:31 | das versões de game genie pros outros videogames mas eu queria um executável simples pro meu |
| 1:07:36 | teste. Eu fiz algumas coisas do jeito menos otimizado, estilo "o que funciona primeiro", então não |
| 1:07:42 | xinguem. Pelo menos tem testes unitários direitinho. Veja esse por exemplo, eu garanto que eu passo um código de Game Genie e ele vai gerar o binário que eu quero. Daí no |
| 1:07:51 | outro spec eu garanto que dado esse linguição de bits vai gerar a representação em hexadecimal |
| 1:07:57 | direitinho também. O código em si é muito simples. Ele começa pegando o código de 6 ou 8 letras do game |
| 1:08:04 | genie, processa letra a letra e troca pela representação binária. Eu não estou lidando com o número binário e sim com a representação em texto mesmo pra ficar mais fácil. Depois |
| 1:08:14 | de montar esse binário, o próximo passo é desembaralhar, e isso é arbitrário do |
| 1:08:20 | game genie, só trocar bits de posição. Finalmente, com os bits rearranjados, faço um outro loop besta pegando de 4 em 4 bits e transformando em hexadecimal. |
| 1:08:30 | Vocês vão notar que eu fiz de um jeito meio tosquinho aqui criando um array pra mapear cada conjunto de bits no hexadecimal em vez de converter a string num número e depois usar um formatador pra hexa, mas foi mais porque eu não achei fácil o jeito de fazer isso em Crystal ainda. Quando descobrir eu mudo. Mas pros meus propósitos esse código tá suficiente. Com isso eu posso compilar um binário e ... pronto, posso chamar o binário, |
| 1:08:35 | passar o código de game genie e ele devolve o hexadecimal certo. O próximo passo foi mexer no emulador feito em Go. A grande maioria dos emuladores mais |
| 1:08:44 | maduros e populares tem suporte a códigos de game genie. Mas esse emulador mais simples |
| 1:08:50 | não tinha, por isso achei que seria um exercício interessante. Pra começar eu resolvi modificar |
| 1:08:55 | o arquivo do console adicionando uma estrutura chamada Cheat que vai ter só dois elementos, |
| 1:09:01 | o valor de condição pra comparar com o que tá no bank da ROM selecionado nesse instante, |
| 1:09:06 | e o valor trapaceado que eu quero devolver. Daí eu adiciono na estrutura do console uma nova estrutura, um Map de Cheats. Map é o que algumas linguagens chamam de dicionário |
| 1:09:15 | ou de hash. É uma lista que vai mapear um número inteiro, que no caso, é o endereço com uma instância da estrutura de Cheat. |
| 1:09:23 | Agora precisamos ler os cheats de algum lugar. No caso escolhi ler de um arquivo. Eu não |
| 1:09:28 | estou mostrando, mas estou seguindo o padrão que esse emulador já fazia pra fazer saves dos jogos, criando um hash md5 do binário. O nome do arquivo que eu vou buscar é o hash |
| 1:09:37 | md5 do Super Mario numa pasta .nes/cheats. Essa função readCheats recebe o caminho |
| 1:09:45 | pra esse arquivo e só vai lendo linha a linha e gravando numa lista. Assim podemos ter múltiplos arquivos pra com códigos específicos de cada jogo que queremos. |
| 1:09:53 | A função seguinte vai interpretar essa lista. A função LoadCheats vai usar a readCheats |
| 1:10:00 | acima passando o caminho do arquivo e recebendo a lista que ele ler. Daí eu passo um caminho |
| 1:10:05 | fixo mesmo por enquanto, pro executável daquele programinha que eu fiz em Crystal. Ele vai passar os códigos pra esse programinha pra decodificar o endereço e valores. |
| 1:10:14 | Com o que ele devolver, checo se é um código de 6 ou 8 digitos, e isso serve pra preencher |
| 1:10:20 | ou não aquele campo de condição na estrutura de Cheat. Feito isso associamos o endereço |
| 1:10:26 | devolvido com a estrutura de Cheat e jogamos no dicionário na estrutura do Console. Com |
| 1:10:31 | isso o console tá ciente dos códigos. Pra de fato aplicar o cheat o lugar mais óbvio pra procurar é a estrutura de Memory, lembram |
| 1:10:40 | dele? É nesse arquivo que tem a lógica pra escolher qual mapper o cartucho carregado precisa. Mas ele abstrai os mappers e a gente não precisa se preocupar. Os Mappers vão |
| 1:10:49 | se encarregar de ler da ROM nos banks corretos. Então o que vamos fazer é, em vez de devolver o valor lido, vamos gravar temporariamente numa variável e passar pra uma nova função |
| 1:10:59 | chamada replaceWithCheat. Essa função recebe o endereço consultado e o valor devolvido. Agora acessamos o dicionário |
| 1:11:07 | de Cheats que tá na instância do Console e procuramos por esse endereço. Se não achar |
| 1:11:12 | nada, devolve o valor real original. Caso encontre ele checa se precisa comparar com |
| 1:11:17 | a condição do Cheat. Se não tiver condição ou se a condição bate com o valor real, então ele devolve |
| 1:11:24 | o valor falsificado. E pronto, é só isso que precisa pra implementar um game genie num emulador. Com isso o console vai receber o valor falsificado em vez do valor real e |
| 1:11:34 | nosso Super Mario vai começar com mais vida. Podemos testar isso. Veja o arquivo de cheats com o código. Agora executamos o emulador passando a ROM do jogo, |
| 1:11:44 | esperamos carregar e olha só, 9 vidas!! Mas digamos que a gente é ruim em Super Mario e o tempo sempre acaba, quero que comece com |
| 1:11:53 | 900 segundos em vez de só 400 e se procurar no Google descubro que o código pra isso |
| 1:11:59 | é VGYOKK, então vamos editar o arquivo de trapaças e adicionar o código. Reiniciamos |
| 1:12:06 | o emulador e ... veja só que bacana, 9 vidas e 900 segundos pra terminar a fase. |
| 1:12:11 | Mas digamos que a gente é tão ruim, mas tão ruim que morre toda hora. Malditos Goombas! |
| 1:12:17 | Mas não se preocupem, existe um código pra isso. Vamos editar de novo o arquivo e adicionar |
| 1:12:23 | SSASSA. Agora vamos reiniciar o emulador e corremos de cara pra um Goomba. E olha só, |
| 1:12:31 | invencibilidade!! Vocês vão notar no terminal que toda vez que eu encosto num inimigo o programa busca |
| 1:12:36 | o endereço 0xD88D pra checar se é pra perder vida ou não, daí se devolver 0xD5 ele sabe |
| 1:12:43 | que é invencível. E é assim que trapaceamos pra chegar até o final fácil! E com isso |
| 1:12:48 | finalmente consegui fechar o assunto que comecei no video anterior, fazer meu próprio Game |
| 1:12:53 | Genie de Nintendinho. Com tudo que expliquei desde o vídeo anterior agora vocês entendem exatamente como tudo funciona. |
| 1:13:00 | E pra finalizar o episódio de hoje quero mostrar como vocês vão ter uma noção melhor pra entender videos de outros canais também. No próprio canal do Retro Game Mechanics |
| 1:13:11 | Explained, alguns dos videos mais divertidos é a explicação de diversos bugs que esses jogos tem, e como podemos tirar vantagem disso. Uma das categorias de gamers mais escovadores |
| 1:13:20 | de bits são os speedrunners. São jogadores que competem pra bater o recorde de quem acaba |
| 1:13:26 | o jogo no menor tempo. Tem várias sub-categorias. Uma das mais divertidas é quando eles encontram |
| 1:13:32 | bugs que permitem, por exemplo, saltar todas as fases e ir direto pro final. Antes de falar desse bug preciso falar de uma última ferramenta que emuladores mais |
| 1:13:41 | avançados como o FCEUX tem, se chama TAS ou Tool Assisted Speedrun. Lembram no nosso |
| 1:13:48 | código em Go que eu associo controles na estrutura de console? Obviamente nós conseguimos |
| 1:13:53 | ler o que vem do controle pra poder codificar o que cada botão apertado vai fazer no jogo. E naturalmente eu posso fazer o que quiser com esses dados, inclusive salvar num arquivo. |
| 1:14:02 | Mais do que isso, como eu controlo a PPU também consigo saber exatamente em que frame cada |
| 1:14:07 | botão foi apertado. Então eu também consigo ler esse tal arquivo que diz em que frame foi apertado qual botão |
| 1:14:14 | e com isso podemos dar replay no jogo inteiro repetindo exatamente tudo que que foi apertado com precisão de 1 frame. E é exatamente assim que esses jogos são arquivados em sites |
| 1:14:24 | como o tasvideos.org, que mantém registros de todos os recordes. E você pode baixar |
| 1:14:29 | o arquivo formato .fm2 ou .fm3 que contém exatamente essa sequência, rodar no seu emulador |
| 1:14:35 | e assistir o speedrun exatamente como a outra pessoa jogou. Então eu vou abrir o FCEUX, carregar a ROM do Super Mario 3, abrir o TAS Editor e carregar |
| 1:14:46 | o arquivo .fm2 que baixei do site tasvideos. Pronto, agora é só despausar e assistir. Vou pular as primeiras fases porque ele usa |
| 1:14:55 | outros truques conhecidos pra ir pulando de warp zone em warp zone até chegar no mundo 7. Nesse ponto a maioria dos speedrunners ia pro Dark World normalmente, mas nessa corrida |
| 1:15:06 | eles vão pelo Pipe World porque é de lá que dá pra acionar o bug. Assistam primeiro. |
| 1:15:25 | (glitch run) |
| 1:15:53 | Foda né, vocês não entenderam nada eu imagino, mas deu pra ver que eles fazem uma sequência bem absurda de coisas no Pipe World, daí começa tudo a descer pra um monte de sujeira |
| 1:16:03 | de tiles e de repente ele chega na princesa direto. Agora que vocês tem uma idéia de como as coisas funcionam, dá pra entender que o bug aciona alguma coisa que faz a tela |
| 1:16:13 | descer por um pedaço de RAM com bytes aleatórios que ele manda pro PPU que mapeia os tiles |
| 1:16:19 | correspondentes, montando uma fase toda bagunçada e com comportamento incerto. E em algum momento |
| 1:16:25 | dá um JUMP. O truque é simples, vamos usar a posição dos sprites na RAM pra montar |
| 1:16:30 | um assembly em tempo real e dar um jeito de executar. O código em si que precisa ser escrito é JSR 0x8FE3. Se conseguir fazer o jump esse |
| 1:16:41 | é o endereço pra subrotina que inicia a sequência final da princesa. Então precisamos de 3 bytes consecutivos num lugar especial na RAM, os bytes sao 0x20 que é o JSR, e |
| 1:16:53 | depois 0xE3 e 0x8F que é o endereço com os bytes invertidos por causa de little endian, |
| 1:16:58 | que vocês já sabem como funciona. A posição X dos inimigos, especialmente dos koopa troopers ficam sempre no mesmo lugar |
| 1:17:06 | e não apagam mesmo quando o sprite some da tela. Por isso esses bytes são bons candidatos |
| 1:17:11 | pra usar. Mas não adianta sair matando qualquer koopa. Precisamos que eles estejam na posição correta nessa lista e também que estejam numa posição X específica. Pra isso precisamos |
| 1:17:21 | tentar fazer com que eles apareçam numa determinada ordem primeiro. A lógica é que novos sprites |
| 1:17:27 | sempre vão aparecer primeiro na posição mais alta livre da lista primeiro. Então usamos essa informação pra fazer eles aparecerem numa ordem em particular. |
| 1:17:36 | Ao matar essa tartaruga e ir pro cano enquanto ela ainda está na tela, podemos forçar as plantas piranha pra aparecer nos slots 2 até 4 e o próximo koopa no slot 5. |
| 1:17:48 | Matamos as plantas pra elas não reaparecerem mais tarde quando voltarmos pra essa parte. Agora o koopa entre os blocos de interrogação vai estar no slot 4 e o parakoopa no slot |
| 1:17:58 | 3. Pegamos a casca dessa tartaruga e matamos jogando ele no bloco. Isso fixa o byte na |
| 1:18:04 | posição fixa 0xE3 que precisamos. Daí ficamos exatamente nessa posição em cima do cano e damos uma rabada no parakoopa |
| 1:18:11 | quando ele estiver exatamente alinhado com o topo do outro cano pra garantir que a casca aterrisse na posição X hexadecimal 0x20, e com isso temos o byte que representa o jump. |
| 1:18:21 | Agora vamos pra baixo, agarramos a casca desse koopa e voltamos ao comeco do nível. |
| 1:18:27 | Nesse ponto precisamos realizar o bug do cano apertando pra baixo no controle ao mesmo tempo |
| 1:18:32 | que faz um clip na parede no canto desse cano. Às vezes o Mario consegue fazer um clip numa |
| 1:18:37 | parede, tipo passar por ela, se estiver rápido o suficiente e bater bem na beira do grid de 16 pixels, é um movimento bem preciso e às vezes precisa fazer várias vezes pra |
| 1:18:46 | acertar. Nessa sequência não tem tanto problema se de vez em quando pisar na casca pra tartaruga não acordar. |
| 1:18:52 | Uma vez entrando no cano inicia uma sequência de bugs porque não tava programado pra ter como ele entrar no cano nesse ponto, dai vai descendo por todo esse lixo aleatório que |
| 1:19:01 | tá na memória. O PPU vai simplesmente mapeando o lixo que vai recebendo com os tiles na tabela |
| 1:19:07 | CHR e mostrando na tela. Por isso fica essa bagunça visual. No final tem que pular com muito cuidado com a casca e alinhar com o fundo bem nessa posição. |
| 1:19:17 | Tem um detalhezinho que se notar que esse bloco de música estiver parcialmente cortado, talvez precise mover o Mario um pixel pra direita pra compensar a posição da camera. |
| 1:19:27 | Deixamos o koopa reaparecer nas nossas mãos e desaparecer no fundo da tela, e essa posição |
| 1:19:33 | onde ele desaparece nos dá o último byte que precisávamos, valor 0x8F. Finalmente |
| 1:19:38 | caímos aqui e pulamos pra ativar a instrução. E se tudo foi configurado exatamente como |
| 1:19:44 | mostrado aqui, vamos pular direto pra princesa e terminar o jogo. Pra entender o que aconteceu vamos usar tudo que aprendemos até agora. Essa fase vertical |
| 1:19:53 | é mapeada entre os endereços 0x6000 e 0x6EFF, que é suficiente pra 16 telas. Mas aquele |
| 1:20:00 | cano que entramos depois de clipar pela parede manda o Mario pra tela 19 que obviamente não |
| 1:20:06 | existe. Então acontece um transbordamento, um overflow da memória e começamos a acessar |
| 1:20:12 | áreas da RAM que não era pra acessar. E pra piorar, além de visualmente aparecer essa zona, a rotina de desenho falha e o que |
| 1:20:19 | estamos vendo pode não estar de fato lá, por isso o Mario consegue subir numa plataforma invisível. A coincidência é que o final desse cano deixa o Mario do lado de um bloco |
| 1:20:28 | de nota invisível e é batendo nesse bloco que ativa os bytes de Jump que configuramos. |
| 1:20:34 | Quando batemos num bloco de musica o tile é temporariamente removido e outra versão |
| 1:20:40 | do sprite aparece pra fazer a animação. E claro, o índice nos dados da tabela de |
| 1:20:45 | fase tá todo zoado quando procura por esse tile e ele pega o endereço 0x9C70 pra atualizar, |
| 1:20:51 | que não é nem de longe perto da tabela de dados. Pior esse endereço simplesmente não |
| 1:20:56 | existe na RAM. Recapitulando o que já vimos sobre os endereços que nintendinho entende, temos a RAM entre 0x0000 e 0x1FFF e temos Work RAM entre os endereços 0x6000 e 0x7FFF e já sabemos que |
| 1:21:07 | de 0x8000 até 0xFFFF é a região reservada pra ROM, ou seja, pro cartucho. Então aquele |
| 1:21:13 | índice errado do bloco de musica tenta escrever na ROM. Mais do que isso, esse endereço na verdade fala com o Mapper do cartucho. E você sabe o que é um Mapper. |
| 1:21:22 | Por acaso quando tentamos escrever nesse endereço 0x9C70, é o mesmo que dizer pro Mapper fazer |
| 1:21:28 | uma troca de banco, pra apontar pra outros bancos da ROM. Recapitulando, já sabemos que entre os endereços 0x8000 e 0xFFFF só cabe 32 kilobytes de dados, mas a ROM de programa |
| 1:21:40 | do Super Mario 3 tem 256 kilobytes. Obviamente não cabe e por isso durante o jogo ele vai |
| 1:21:46 | pedindo pro Mapper ir trocando os bancos pra apontar pra outras regiões da ROM. |
| 1:21:51 | Então esse trecho tá fazendo seu trabalho feliz e contente, achando que tá atualizando um tile na tela pro bloco de musica, mas em vez disso quando executa a instrução no |
| 1:22:00 | endereço 0xDD1A, a ROM de 0xA000 a 0xDFFF é trocado pelo mapper do nada. Ele literalmente |
| 1:22:08 | atira no próprio pé e as próximas instruções foram trocadas pelo que tá no novo banco |
| 1:22:13 | que o Mapper trocou. O apontador de pilha nesse momento da execução é 0xFD, que sabemos que quer dizer que a |
| 1:22:20 | pilha tá quase vazia, lembra do video passado e do código de Reset da CPU que fizemos antes? |
| 1:22:26 | Lembra que a instrução RTS vai retornar pro último endereço que estiver na pilha? E por acaso na pilha tem só um endereço nesse momento. E de fato essas instruções |
| 1:22:36 | novas que vieram na troca do bank pelo Mapper, ele continua executando e uma hora bate num |
| 1:22:42 | RTS fazendo ele pular pro endereço 0x8F4D. Agora caímos no meio de uma nova rotina com uma pilha vazia, coisa que ele não esperava. |
| 1:22:51 | Daí ele continua executando e uma hora vai bater num RTS, vai olhar pra pilha pra saber |
| 1:22:56 | pra onde retornar. Mas a pilha tá vazia então quando isso acontece o ponteiro faz um wrap, |
| 1:23:01 | ele circula como se a pilha estivesse totalmente cheia, lembra de quando falei de stack overflow no video anterior? |
| 1:23:08 | Lembrando que a pilha fica entre os endereços 0x0100 e 0x01FF, mas praticamente nunca a |
| 1:23:14 | pilha enche totalmente então alguns programas acabam usando o topo da pilha pra outra coisa |
| 1:23:20 | e no caso o jogo mantém informação da fase em 0x0100. Lá vai ter o valor 0xC0 se forem |
| 1:23:26 | fases horizontais e 0x80 em fases verticais. E como o ponteiro circulou pro topo da pilha ele pega o valor que tá lá, subtrai 1 e retorna o endereço 0x0081. |
| 1:23:35 | Beleza, então o RTS vai pular pra 0x0081 e isso é endereço da RAM que tem um monte |
| 1:23:43 | de dados voláteis sobre as propriedades da fase. Por exemplo em 0x007E a 0x0086 tem propriedades |
| 1:23:50 | sobre os sprites carregados nesse momento, tipo o timer de quando as plantas piranha tem que aparecer dos canos, ou como os parakoopas voam. Dos endereços 0x0087 a 0x008F tem o |
| 1:24:02 | high byte da posição Y de cada sprite, que é o número da tela onde eles estão. Agora chegamos onde queríamos porque dos endereços 0x0090 a 0x0098 estão os low bytes |
| 1:24:13 | da posição X de cada sprite na tela, que são as posições que viemos manipulando |
| 1:24:19 | no começo e configuramos o JUMP. Os bytes antes disse são dados, mas o processador |
| 1:24:24 | não sabe disso e tenta executar como se fossem instruções. Por coincidência nenhuma das |
| 1:24:29 | tentativas de executar esses dados termina num crash e ele consegue chegar até nosso jump. Como esses dados anteriores podem ser qualquer coisa que representa os tais elementos |
| 1:24:38 | na tela que falei, poderiam ser bytes que representam instruções que crasheiam, então essa sequência toda que fizemos não é garantido que funciona sempre, mas funciona vezes o |
| 1:24:47 | suficiente. Chegando no nosso JSR 0x8FE3 ele pula pra um programa que fica num bank que nunca é |
| 1:24:54 | trocado pelo mapper então garantidamente sempre vai estar lá e é a rotina pra carregar |
| 1:25:00 | o quarto da princesa. Pra fechar, a sequência pra montar a instrução de jump pode ser feita de várias formas contanto |
| 1:25:07 | que a posição X dos inimigos certos entre na sequência correta nos slots da memória. Esse é o recorde mundial usando esse bug do MitchFlowerPower onde ele termina o jogo |
| 1:25:12 | em 3 minutos e 9 segundos. Ele mesmo jogou manualmente e gravou seus comandos. E com tudo isso dito, finalmente chegamos ao final do episódio! Tudo que eu queria |
| 1:25:18 | era explicar como o Game Genie funciona, mas pra realmente entender era necessário entender |
| 1:25:23 | cada componente de como um computador funciona. Com isso eu espero que se você é iniciante |
| 1:25:28 | tenha conseguido ter uma visão um pouco mais abrangente do que significa fazer um hardware funcionar. |
| 1:25:34 | Pra mim isso é programação. Programação nunca foi sobre seguir receitas e procedimentos |
| 1:25:40 | prontos e sim encontrar um cenário de restrição e com conhecimento de verdade usar as ferramentas |
| 1:25:47 | disponíveis pra conseguir soluções criativas. Nenhum livro, nenhum curso, nenhum tutorial |
| 1:25:53 | jamais vai ensinar essas coisas. Só quando você encara problemas difíceis é que conhecimento |
| 1:25:59 | de verdade começa a aparecer. Eu tenho certeza que vocês nunca imaginaram que tinha tanta coisa que podia ser dito sobre um videogame obsoleto dos anos 80. |
| 1:26:08 | Se você ficou empolgado pra escrever seu próprio emulador recomendo que acompanhem outro canal, o do One Lone Coder que está desenvolvendo um emulador de NES em C++ e |
| 1:26:18 | explicando passo a passo no seu canal. Vou deixar o link nas descrições abaixo. O próprio |
| 1:26:24 | canal do Retro Game Mechanics Explained na realidade tem videos detalhados explicando o funcionamento do Super Nintendo. Como funcionam os gráficos e cores, como funciona a memória, |
| 1:26:34 | como funciona o lendário Mode 7. Tem bastante coisa pra passar pra ser processado. E eu vou descer no detalhe em alguns deles então aguardem pelo próximo. Como vários assuntos eu tive que resumir ou mesmo pular pra não ficar confuso demais, |
| 1:26:43 | se você também é entusiata desses assuntos, não deixem de complementar nos comentários abaixo. Se curtiram o video mandem um joinha, assinem o canal e cliquem no sininho. E principalmente |
| 1:26:53 | ajudem o canal compartilhando os videos com seus amigos. A gente se vê na próxima, até mais! |