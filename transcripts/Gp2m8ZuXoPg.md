# Hello World Como Você Nunca Viu! | Entendendo C

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=Gp2m8ZuXoPg
- **Duração:** 1:09:22
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Seguindo meus episódios com o tema de fita de bits que venho explicando desde os episódios |
| 0:07 | de introdução à computação até a história de Turing e Von Neumann, no penúltimo episódio eu expliquei sobre a diferença entre arquivos binários executáveis como os de formato |
| 0:16 | ELF e arquivos texto e como tudo são fitas de bits ou o que eu chamei de linguição de bits. |
| 0:22 | E hoje quero tentar explicar como podemos representar dados e manipular bits nessa linguiçona |
| 0:27 | pra vocês conseguirem enxergar um pouco melhor como linguagens de programação lidam com dados. |
| 0:33 | Se você foi direto aprender uma linguagem de alto nível como Python ou Javascript, sem ter aprendido linguagens de baixo nível, vai eternamente ter dúvidas de "o que" exatamente |
| 0:44 | a linguagem tá fazendo. Por que certos comportamentos estranhos acontecem do nada. Eu aprendi programação no começo dos anos 90 com linguagens de alto nível também, |
| 0:53 | no caso foi Basic e depois dBase. Eu só fui entender como as coisas funcionavam quando comecei a estudar Ciências da Computação. |
| 1:00 | Muita gente resolveu pular essa etapa e por isso vai ficar travado muito em breve. No video de hoje eu quero tentar abrir as portas pra coisas que você raramente vai |
| 1:08 | encontrar num curso qualquer por aí. Infelizmente é impossível eu resumir anos de ciências da computação num video só, |
| 1:16 | então você vai precisar complementar o que eu disser hoje com a ajuda do seu professor da faculdade, ou pelo menos alguém mais experiente que você. |
| 1:23 | Aliás, sei que tem vários professores que assistem os vídeos, então este é um episódio onde seus alunos vão precisar de ajuda. |
| 1:30 | Eu fiquei me indagando se devia quebrar este episódio em dois ou três mas resolvi entuchar |
| 1:36 | tudo em um só mesmo pra tirar isso do caminho, então já aviso que vai ser super denso e |
| 1:41 | bem difícil mesmo se você for iniciante. É normal não entender tudo só assistindo uma vez. |
| 1:47 | Mesmo se você já sabe C, talvez goste de rever alguns conceitos de novo e até ajudar o povo nos comentários. |
| 1:53 | Com tudo isso dito, respirem fundo, peguem papel e caneta pra anotações e vamos lá! |
| 2:02 | (...) O objetivo hoje é destrinchar o linguição de bits de Turing e mapear o que acontece |
| 2:12 | numa linguagem de programação de verdade. Vamos seguir o buraco de coelho e tentar enxergar a mulher de vermelho na Matrix. |
| 2:18 | E a primeira coisa pra relembrar: na fita de bits, a máquina de Turing, ou o tal programa tem tanto binários que representam instruções pra sua CPU como também valores e dados, |
| 2:28 | tudo junto um atrás do outro. Por exemplo, num hello world da vida, vai existir o valor "hello world" como uma cadeia |
| 2:35 | de caracteres, o que chamamos de um String, e junto vai ter instruções pra mostrar esse String na tela de alguma forma. |
| 2:41 | String, em inglês é tipo um barbante, uma corda ou um fio. A forma mais simples de String é uma cadeia de bytes terminada com nulo de C. |
| 2:51 | Se a gente encodar o "hello world" usando ASCII ou UTF-8, cada letra será representada |
| 2:57 | por um código de 8-bits que é 1 byte. Então serão 11 bytes de tamanho mais o nulo no final. |
| 3:02 | Mas se for em japonês "haroo waarudo", isso é uma String de 7 símbolos, cada símbolo |
| 3:08 | no alfabeto katakana vai ocupar 3-bytes, então serão 21 bytes de tamanho. Como expliquei no episódio anterior, quantos bytes cada símbolo ocupa depende da tabela |
| 3:16 | de conversão entre glifos e caracteres. Esse é o encoding. Uma String com caracteres ocidentais de 8-bits é particularmente interessante porque é |
| 3:25 | igual a um Array de bytes. Array em inglês é tipo uma série ou conjunto de coisas. |
| 3:31 | Uma lista sequencial, com cada elemento do array um atrás do outro na memória, sem |
| 3:36 | buracos no meio. Essa distinção é importante e já vou voltar a falar de arrays daqui a pouco, mas antes |
| 3:42 | precisamos falar de números. Em algumas linguagens você vai ver duas palavras distintas, um byte e um char. |
| 3:50 | Se o char for ASCII de 8-bits, então um char é a mesma coisa que um byte na prática, como é em C. |
| 3:55 | Mas em C# ou Java cada char representa um caractere UTF-16 que tem 16-bits ou 2 bytes, |
| 4:02 | portanto é um double byte. Não se pode achar que um char é sempre um pra um com um byte, só quando falamos de |
| 4:09 | C. Como hoje só vou falar de C, então considere um char sendo 1 byte. Cada linguagem suporta um certo número do que chamamos de tipos primitivos. |
| 4:18 | Char é um exemplo de primitivo, que é um pequeno pacote de bits, sem metadados. |
| 4:23 | Outro exemplo são números. No mundo real estamos acostumados a pensar em números como os inteiros indo de menos |
| 4:29 | infinito até mais infinito, mas em computadores os números são limitados por seus tipos |
| 4:34 | e temos diversos tipos de inteiros. Na maioria das linguagens de programação a gente costuma lidar com Inteiros de 8, 16, |
| 4:41 | 32 ou 64-bits, respectivamente Int8, Int16, Int32 ou Int64. |
| 4:48 | Na linguagem Rust, por exemplo, é exatamente assim que é dividido e eles são chamados de i8, i16, i32 e i64. |
| 4:56 | E o Rust ainda tem o i128 também. Um int8 é basicamente um byte ou um char de C. |
| 5:03 | No caso de C# o Int16 é chamado de Short, o Int32 é o Inteiro propriamente dito e Int64 |
| 5:10 | é chamado de long. No caso do C é mais complicado porque se eu não estou muito errado o int dependia |
| 5:15 | da arquitetura do CPU, então um int num computador de 16-bits era o Int16, mas num computador |
| 5:22 | de 32-bits, se você recompilasse o mesmo programa, o int passava a ser 32-bits. |
| 5:27 | À primeira vista parece uma boa idéia, porque assim toda vez que as CPUs evoluem, bastaria |
| 5:32 | recompilar o programa e ele automaticamente teria acesso a mais memória. Mas na prática isso pode levar a diversos tipos de bugs inesperados. |
| 5:40 | Então quem decide o tamanho dos inteiros de C é o compilador. Mas nas linguagens mais modernas como C# ou Rust a declaração fica mais explícito qual |
| 5:49 | tipo de inteiro você tá usando. A razão de ter diferentes tipos de inteiros é a eficiência. |
| 5:55 | Se você sabe que no seu programinha não vai precisar de números maiores que duzentos e cinquenta cinco, basta alocar um int8, ou 1 byte, e vai ser suficiente. |
| 6:04 | Se você alocar um int64 sem precisar, vai desperdiçar 7 bytes que não vão servir |
| 6:09 | pra nada. Se for uma variável só, não faz diferença, mas se for um array com milhares ou milhões |
| 6:15 | de elementos, você vai rapidamente desperdiçar megabytes ou até gigabytes à toa. Números inteiros ainda tem outra característica importante. |
| 6:23 | Eles podem ser signed ou unsigned, ou seja, ter sinal ou não ter sinal. Se declarar um inteiro unsigned, sem sinal, ele pode ser usado pra números de 0 até |
| 6:33 | hexa FF que é duzentos e cinquenta e cinco. Mas se for signed pode ir de negativo 127 até positivo 128. |
| 6:41 | Quase a metade. Nesse caso o primeiro bit, que é chamado de bit mais significativo, e costuma ficar à esquerda dependendo do endianness do processador, é onde vai ficar o sinal. |
| 6:50 | Se o primeiro bit for 0 então é um número positivo. Se for 1, então é negativo. Daria pra fazer um video inteiro só falando de inteiros negativos e porque eles são interessantes, |
| 7:00 | e isso é uma das coisas que recomendo pesquisarem a respeito depois. Mas vamos dizer o seguinte. |
| 7:05 | Pra subtrair dois números com sinal, como 15 e 5, o computador primeiro vai enxergar eles em binário. |
| 7:11 | Em 8-bits, no caso de 15 seria o binário 0000 1111. No caso de 5 seria 0000 0101. |
| 7:19 | Você já aprendeu que subtrair um número é o mesmo que somar com seu negativo. Então poderíamos usar a máquina de somar que já mostrei como funciona no episódio |
| 7:26 | de introdução mais hardcore a computadores. Reveja se não lembra mais. |
| 7:31 | Computadores usam o que se chama de método de complemento, que é a ideia de fazer uma subtração virar uma soma e usar o mesmo circuito de soma. |
| 7:40 | Pra fazer isso ele transforma o segundo número no seu complemento de dois, ou two’s complement. Esse é um tema que você pode perguntar pro seu professor se ele não explicou. |
| 7:49 | Pra achar esse complemento é simples, basta flipar todos os bits e somar 1, então o número |
| 7:54 | 5 que é 0000 0101 vai virar 1111 1010 + 1 que é 1111 1011. |
| 8:02 | O porquê de ter esse 1 extra no final é um dos motivos pra você estudar a teoria completa de two’s complement depois. |
| 8:08 | Por agora vamos somar o 15 com esse 5 negativo. Da direita pra esquerda, vamos lá, 1 mais 1 dá 2 que é 1 e 0 então fica zero e sobe |
| 8:17 | um. Agora 1 mais 1 mais 1 é 3 que é 1 e 1, então fica 1 e sobe 1 de novo. 1 + 1 é 1 e 0 então |
| 8:24 | fica zero e sobe um. De novo 1 mais 1 mais 1 é 3 então fica 1 e sobe 1. Agora tá fácil, 1 mais 1 fica zero e sobe 1. |
| 8:31 | De novo, 1 mais 1 fica zero e sobe 1. Fica zero e sobe um. Fica zero e sobe um. |
| 8:36 | O último um que subiu a gente descarta. E o que fica no final é 0000 ou seja, como o primeiro bit é zero, o número é positivo |
| 8:45 | e depois 1010 que é 8 mais 2 que dá 10. Exatamente 15 menos 5, como você já sabia. |
| 8:52 | E com isso demonstramos que é possível subtrair números inteiros com sinal usando o método |
| 8:57 | de complementos e reusando o mesmo circuito da máquina de somar binário. As CPUs são feitas de tal maneira pra tirar vantagem de ser base 2 em vez de base 10 pra |
| 9:07 | conseguir calcular de forma mais eficiente do que fazemos com número decimais. Multiplicar e dividir é mais complicado e se tiverem interesse estudem o algoritmo de |
| 9:16 | multiplicação de Booth. Mas tudo isso foi só pra dizer que existe diferença entre inteiros com sinal e sem |
| 9:22 | sinal. Já expliquei que dentro da CPU existem diversos registradores, que é como se fossem variáveis |
| 9:27 | globais fixas no hardware. No 6502 do Nintendinho tinha o registrador A, X, Y e outros, todos de 8-bits. |
| 9:36 | E quando falamos de um Intel ou AMD moderno, eles têm registradores e instruções de |
| 9:41 | 64-bits. Mas e quando precisamos fazer contas com números extraordinariamente grandes, acima dos exabytes |
| 9:47 | que 64-bits comportam? Isso não é incomum, principalmente num mundo de Big Data e data science. |
| 9:54 | Pra isso existem tipos compostos como o BigInteger, que tecnicamente não tem limites. |
| 9:59 | Se você tentar colocar um número de 128-bits num registrador de 64-bits vai dar overflow, |
| 10:06 | ou seja, transbordar. Daí esse número seria truncado e metade seria perdido. Em vez disso, alocamos memória na RAM pra guardar esse número e, a grosso modo, fazemos |
| 10:15 | a soma com a primeira metade, depois com a segunda metade e concatenamos o resultado. E sim, você pode fazer a soma de um número grande como duas somas de números menores, |
| 10:25 | basta carregar o carry bit pra segunda soma. Então precisaria de pelo menos 2 instruções de adição numa máquina de 64-bits pra somar |
| 10:33 | dois BigInteger de 128-bits, mas é possível. Só vai custar pelo menos 2 vezes mais caro do que somar números menores de 64-bits. |
| 10:41 | Tudo em computação tem um custo, não é automático nem tudo igual. Isso dito, falei um monte de nomes que podem parecer complicados mas só precisa lembrar |
| 10:50 | que são convenções de como representar números inteiros decimais em formato binário, |
| 10:56 | com limites que vão de 8 até 64-bits dependendo da arquitetura nativa da CPU, ou mais se usarmos |
| 11:02 | abstrações como BigInteger. E com esses números podemos fazer praticamente tudo que precisamos. |
| 11:08 | Aliás, pense que a geração de microcomputadores de 8 e 16 bits foi quase inteira baseada só |
| 11:13 | em números inteiros. Todo joguinho de nintendinho até mega drive é feito usando números inteiros. |
| 11:19 | A tela de um jogo tem 320 colunas por 240 linhas de resolução, que é um número inteiro. |
| 11:25 | Um sprite de nintendinho tem 8 por 8 pixels ou 8 por 16 pixels. |
| 11:31 | Pra mover um sprite de lugar basta ir somando de um em um pixel. Os sprites podem escolher entre paletas de 4 cores dentre 54 disponíveis. |
| 11:40 | Pontuação de jogos, quantidade de vidas, número de fases, são todos números inteiros. E fora dos games, em aplicativos de produtividade, seja planilhas, processadores de texto, tudo |
| 11:50 | é baseado em números inteiros. Quantidade de letras ou palavras num texto é um número inteiro. |
| 11:56 | Mesmo se você mexer com coisas como preços, que têm frações da moeda em centavos, basta multiplicar por 100 e fazer contas com inteiros e só no final dividir por 100 e truncar depois |
| 12:06 | de 2 casas decimais. Então preços de produtos, salários, impostos, tudo pode ser calculado facilmente e mais |
| 12:13 | importante, rápido, porque o hardware tem circuitos pra somar números inteiros. Foi principalmente com o advento de coisas como computação gráfica, animação em |
| 12:22 | 3D, que números fracionados começaram a fazer diferença no mundo comercial. Claro, na computação científica já precisavam fazer cálculos fracionados com muita precisão. |
| 12:31 | Em previsões de meteorologia ou laboratórios. Mas isso era em nichos mais isolados e restritos com acesso a hardware especializado. |
| 12:40 | Desde o começo do século XX já haviam formas de calcular números fracionados. O Z1 de Konrad Zuse, que mencionei na história de Turing e Von Neumann, já tinha esses conceitos. |
| 12:50 | Inclusive seu Z4 foi o primeiro computador comercial nos anos 1940 a ter suporte a números |
| 12:56 | fracionados. Mainframes como o UNIVAC ou os da IBM dos anos 60 tinham suporte a calcular números |
| 13:03 | fracionados também. Mas foi só quando começamos a adotar arquitetura de 32-bits no começo dos anos 80 que os diversos |
| 13:09 | padrões começaram a convergir pro que viria a se tornar o padrão IEEE 754. |
| 13:14 | E só a partir do meio dos anos 80 que começamos a adotar em microcomputadores domésticos. |
| 13:20 | Nos CPUs de 8-bits como o 8086 a Intel começou a desenvolver o que se chamaria de co-processadores |
| 13:27 | matemáticos, como o 8087. Até a era do 386 a gente tinha opção de adicionar um segundo chip, como o 80387 que |
| 13:36 | custava caro pra caramba e poucos programas usavam. Não lembro se foi já a partir dos 486 ou só nos Pentiums que paramos de precisar de |
| 13:44 | co-processadores porque as instruções passaram a vir na própria CPU. Precisamos entender pra que serviam esses co-processadores. |
| 13:51 | Eu disse que até agora estávamos indo bem com números inteiros. Os CPUs dos anos 80 eram bons em processar números inteiros. |
| 13:58 | Mas eventualmente a gente precisa lidar com números fracionados, com decimais. Em particular, números irracionais, ou seja, números que não podem ser representados |
| 14:08 | por uma fração de números inteiros. Raíz quadrada de 2, o número Pi e muito mais. |
| 14:13 | O Pi é o inteiro 3, depois tem uma vírgula e começa uma cadeia infinita de números um, quatro, um, cinco, nove, dois, seis, cinco, três e assim vai sem padrão nenhum até |
| 14:23 | o infinito. Se um número com decimais pode ser representado por uma fração, podemos usar números inteiros. |
| 14:29 | Por exemplo, o número 0 vírgula 33333333 ad infinitum, é o inteiro um dividido pelo |
| 14:35 | inteiro três. Assim muitos números com casas decimais infinitas podem ser representadas claramente com números |
| 14:42 | inteiros finitos. Mas o mesmo não acontece com números irracionais como Pi. E computadores não tem memória infinita, então não temos como representar perfeito. |
| 14:50 | Daí precisamos de uma aproximação. E a palavra importante aqui é “aproximação”, o que significa que ele não vai ser armazenado |
| 14:58 | na memória como você acha que deveria e sim algo perto disso. Essa aproximação é a especificação IEEE 754 que define o que chamamos de ponto flutuante. |
| 15:09 | Esse tema é super chatinho e levaria um curso inteiro pra explicar e mesmo assim você vai |
| 15:14 | ter dificuldade de entender, então vou simplificar grosseiramente hoje. Agora pouco eu expliquei como podemos ter inteiros com sinal e sem sinal. |
| 15:21 | E quando tem sinal reservamos o primeiro bit mais significativo pra ser o sinal. Se for zero é positivo e se for 1 é negativo. |
| 15:28 | Mas podemos reservar mais bits pra outras coisas também. Bits são o que a gente quiser que elas sejam. |
| 15:34 | Em países como Brasil as casas decimais são separadas por vírgula, mas nos Estados Unidos |
| 15:40 | e em outros lugares se usa ponto em vez de vírgula. Por isso falamos em ponto flutuante e não vírgula flutuante. |
| 15:48 | Você já deve ter ouvido falar do tipo `float`. O ponto separa a parte inteira do número da parte decimal e num computador fazemos |
| 15:55 | esse ponto flutuar pra aumentar ou diminuir a precisão. Mas isso não é a história toda. |
| 16:00 | O IEEE 754 define vários tipos de float. O mais conhecido hoje é o binary64 que é um número de 64-bits ou 4 bytes. |
| 16:09 | O primeiro bit é igual de um inteiro com sinal, ele define o sinal. Depois vêm 11 bits que representam o número do expoente e os demais 52 bits representam |
| 16:19 | a mantissa. E o que é isso? É notação científica, mas na base 2. Na base 10 pra representar um número como 15000 poderia ser 1.5 x 10^4 ou 1.5e4, e esse |
| 16:31 | “e” é de “expoente”. 1.5 é a mantissa e 4 é o expoente na base 10. Um float é a mesma coisa, só que seria o primeiro bit de sinal pra positivo ou negativo, |
| 16:41 | daí 2 elevado ao expoente armazenado nos próximos 11 bits, multiplicado pelo número |
| 16:46 | representado nos 52-bits seguintes, que é a mantissa. O número inteiro máximo que pode ser representado nesse formato é 2 elevado a 53 que dá o |
| 16:55 | número 9 quadrilhões e alguma coisa, que em particular, se você é de Javascript, é o que você já conhece como MAX_SAFE_INTEGER que, em binário, é representado assim aqui |
| 17:05 | do lado: zero pro sinal pra ser positivo, o expoente só com o último bit flipado e a mantissa inteira de uns. |
| 17:11 | Da mesma forma, o que no Javascript você chama de MIN_SAFE_INTEGER que é o menor número |
| 17:17 | que se pode representar assim, é só flipar ou inverter todos os bits do expoente e o |
| 17:22 | primeiro bit significativo do sinal que temos o 9 quadrilhões e tanto negativo. |
| 17:28 | O grande lance é que não conseguimos representar em notação científica de base 2 exatamente |
| 17:33 | o número que normalmente queremos de decimal, sempre vai ter um erro de conversão. Por exemplo, podemos ir no site do link abaixo, que eu vou deixar nas descrições, que mostra |
| 17:42 | essa conversão pra gente. Se tentarmos converter 0.1 na realidade vai dar zero ponto um zero zero sete vezes um |
| 17:49 | quatro nove etc que é esse binário aqui do lado. É uma aproximação na base 2. |
| 17:55 | Ou seja, depois do 1 vai ter uma pequena sujeira por isso tecnicamente é diferente de 0.1 |
| 18:00 | exato, embora bem próximo se arredondar. Mesma coisa se tentarmos converter 0.2 em binário, vai virar zero ponto dois, zero |
| 18:10 | zero sete vezes de novo, dois nove oito etc. E esse numero float em binário é esse outro numerozão aqui do lado. |
| 18:18 | E pra finalizar, 0.1 mais 0.2 deveria ser 0.3 se fosse base 10, mas 0.3 em binário |
| 18:24 | vai ser esse numerozão aqui do lado. Com o erro de conversão na verdade vai ser zero ponto três zero zero seis vezes um um |
| 18:31 | nove dois etc. Sempre vai sobrar uma sujeirinha em vez de ser zero zero zero só zero. |
| 18:36 | Se somarmos o 0.1 e 0.2 na instrução de soma binária do CPU, com os erros de precisão |
| 18:43 | da conversão em binário, o resultado vai dar zero ponto três zero zero sete vezes, |
| 18:49 | depois quatro quatro sete etc. Mas a conversão do 0.3 pra float dá zero ponto três zero zero só seis vezes em vez |
| 18:58 | de sete e depois um um e não quatro quatro. É por isso que no Javascript e em diversas outras linguagens como Python, se você fizer |
| 19:04 | 0.1 + 0.2 e tentar comparar com 0.3 vai dar false. Porque de fato quando converter de decimal pra float na base 2 ele vai ganhar essas sujeirinhas |
| 19:12 | de erro de precisão na conversão e quando se faz conta com essas precisões ligeiramente erradas, a precisão do resultado também vai ser ligeiramente errado. |
| 19:20 | `0.100000001490116119384765625 + 0.20000000298023223876953125 00111101110011001100110011001101 + 00111110010011001100110011001101 0.3 = 0.300000011920928955078125 = 00111110100110011001100110011010 0.1 + 0.2 = 0.300000004470348358154296875` Quem já tentou fazer muitas contas com float já se deparou com isso. E pra ser justo não é só em Javascript. |
| 19:26 | Se você fizer a comparação de 0.1 mais 0.2 com 0.3 vai encontrar que é falso em |
| 19:32 | Ruby, em Rust, em Python. Se não me engano, C# é uma linguagem que se dá ao trabalho de ajustar esse erro de |
| 19:38 | precisão e devolve verdadeiro, mas no resto, que só faz a conversão direta pra binary64 |
| 19:43 | do IEEE 754, vai ter esse problema nada intuitivo se você só pensar na base 10 e não na base |
| 19:50 | 2. Você faz 0.1 mais 0.2 e no final não é exatamente 0.3. |
| 19:55 | E isso é pior no Javascript por outra razão. Em Javascript o único tipo numérico que existe é o float binary64. |
| 20:02 | Não existem inteiros primitivos como mostrei antes. Então, em vez do inteiro máximo de dois elevado a 64, o máximo vai ser dois elevado |
| 20:09 | a 53 como declarado no tal MAX_SAFE_INTEGER. Que é um número grande, mas não é o máximo que sua arquitetura suporta. |
| 20:16 | E se você fizer conta com dinheiro, tipo desconto em produtos, ou calcular saldo baseado num extrato de conta, não faça contas com float, porque esse erro de precisão uma hora |
| 20:25 | vai dar ruim. Pequenas sujeiras de precisão, em volume grande de contas, uma hora vai afetar bastante. |
| 20:30 | No mínimo multiplique o valor por 100 pra trabalhar com centavos ou trunque depois de duas casas pra não ter essa sujeira final. |
| 20:38 | Melhor ainda, justamente por conta de bugs de precisão como esse, existe outro tipo de dado. |
| 20:44 | Semelhante ao BigInteger que falei antes, a maioria das linguagens tem um tipo chamado BigDecimal. Assim como o BigInteger, pra fazer contas aritméticas, vai ser mais lento, porque vai |
| 20:54 | precisar quebrar o numero em segmentos, fazer aritmética das partes e depois dar um jeito de concatenar o resultado, porque o numerozão não cabe nos registradores de 64-bits. |
| 21:03 | No caso do BigDecimal, mesma coisa, ele vai permitir mais precisão e cuidar pra evitar essa sujeira de conversão. |
| 21:10 | A linguagem Javascript não tem um BigDecimal nativo, então você precisa baixar uma biblioteca |
| 21:15 | que ofereça isso. Na verdade esse é um dos pontos onde Javascript é corretamente criticado. |
| 21:20 | Todo número nele, seja um inteiro ou seja um float, em binário, é representado como |
| 21:25 | um float binary64, o que eu pessoalmente acho tosco. Existe uma classe Number e ela deveria converter nos tipos corretos internamente, até pra |
| 21:34 | pesar menos toda vez que precisa fazer cálculos. Dependendo de que versão da história você ver, esse é um dos efeitos colaterais da |
| 21:41 | linguagem ter sido criada tão às pressas. E depois que já foi adotado assim, você tem dificuldade de voltar atrás agora. |
| 21:47 | Pesquise sobre isso depois. Enfim, o float que a maioria das linguagens usa é o tal binary64, de 64-bits que eu expliquei. |
| 21:55 | Mas antigamente o que era chamado de float em C era a versão binary32. E a versão 64-bits era chamada de double. |
| 22:02 | Então se algum dia você ver double, é o float de 64-bits. De qualquer forma, o importante era explicar que existia essa forma de se representar números |
| 22:11 | e existem outras, como pra representar números complexos, mas não é importante pra hoje. Lógico, que fique de lição de casa pra vocês depois. |
| 22:18 | Agora vamos voltar ao tal do Array. Array é um conjunto que contém elementos do mesmo tipo, sequencialmente, um atrás |
| 22:26 | do outro na fita de bits, como por exemplo array de números int8 ou float. |
| 22:31 | Quando associamos uma variável a um array na realidade estamos apontando pro endereço do primeiro elemento desse array. |
| 22:38 | E toda vez que tentamos acessar uma posição específica dentro desse array, basta pegar o endereço inicial e somar pelo tamanho do tipo do elemento que ele contém. |
| 22:47 | O importante de Arrays e Strings é entender que a sequência de bytes ou chars é necessariamente |
| 22:53 | um atrás do outro, sem intervalos no meio. Se a gente aloca um array de 100 elementos int8, que é de 1 byte de tamanho, o array |
| 23:01 | vai usar cento e um bytes de memória contígua. Esse um a mais é o byte nulo no final da sequência que indica o término dela, no |
| 23:09 | caso de Strings. A beleza é que pra acessar qualquer elemento dessa sequência, sabendo a posição, basta |
| 23:15 | pegar o endereço do primeiro elemento, o comprimento de cada elemento, no caso 1 byte, e multiplicar pela posição pra ter o endereço do que estamos procurando. |
| 23:24 | No exemplo do "hello world", é um array de chars de 12 bytes contando o nulo no final. |
| 23:30 | Se eu quiser puxar a 7a letra, basta pegar o endereço do primeiro elemento que é o "h" do hello, e somar por 7 bytes, já que cada char tem 1 byte de comprimento, e nesse |
| 23:39 | 7o endereço vai estar a letra "w", de "world", como esperado. Agora, isso só funciona porque cada elemento tem exatamente o mesmo comprimento, a mesma |
| 23:49 | quantidade de bits. O requerimento de todo array é que todos os elementos dentro devem ser do mesmo tipo. |
| 23:56 | Se quisermos armazenar números long, que tem 4 bytes, então todos os outros elementos precisam ser long. |
| 24:02 | Daí um array de 100 elementos long vai ter 400 bytes de tamanho. E um outro problema disso é que um array tem tamanho fixo. |
| 24:10 | Uma vez alocado, não tem como ser expandido. Daí você pode ficar confuso, porque num Javascript e outras linguagens, se o array |
| 24:17 | inicial tem 100 elementos e eu quiser adicionar mais, basta acessar direto a posição 101 |
| 24:22 | e escrever lá. Por exemplo, vamos abrir o console de Javascript em qualquer navegador e declarar um array |
| 24:28 | chamado `lista` com umas cinco letras, como nosso "hello". Se eu tentar acessar a posição 4, vamos pegar a última letra "o", e é 4 porque todo |
| 24:37 | array que se preza começa da posição 0. Se eu tentar pegar a posição 5, vai vir undefined porque passei do fim do array. |
| 24:44 | Mas eu posso tranquilamente gravar uma nova letra como "exclamação" nessa posição e boom, o array automaticamente “expande” pra comportar a nova letra, mas como isso |
| 24:54 | é possível se eu falei que arrays tem tamanho fixo? Na maioria das linguagens mais alto nível que C, tem estratégias, do grego estrategia. |
| 25:03 | Se eu não disser o tamanho exato que quero, ela vai pré-alocar um espaço maior do que |
| 25:08 | preciso. Dessa forma, se precisar de mais elementos depois do fim, tem espaço livre sobrando. |
| 25:14 | E é uma estratégia quando você sabe que tem mais RAM do que precisa. Mas, se eu realmente chegar ao fim do espaço que a linguagem alocou pro meu array, o que |
| 25:22 | ela vai fazer é alocar um novo array maior, copiar elemento a elemento pro novo array |
| 25:28 | e descartar o antigo. De novo, você não tá sabendo, mas tá acontecendo um custo extra de processamento por baixo |
| 25:35 | dos panos. No dia a dia você nem percebe porque normalmente mexe em poucos arrays, mas em operações |
| 25:40 | que tenham milhares ou milhões, aí você vai querer tomar mais cuidado com operações que fiquem mudando o tamanho dos arrays. |
| 25:47 | Mesmo que a operação na linguagem seja só uma linha, por baixo dos panos ela vai fazer diversas outras, como duplicar seu array, que você nem fica sabendo e aí não entende |
| 25:56 | porque a performance ficou tão ruim sem motivo aparente. Mais ou menos a mesma coisa acontece com Strings. |
| 26:03 | No C, sem bibliotecas extras, um String é literalmente declarado só como um array de |
| 26:09 | chars. Em linguagens mais modernas o String é um tipo separado do Array, mas internamente a |
| 26:14 | maioria usa Arrays, só que o tipo extra dá um suporte maior a coisas como conversão |
| 26:19 | de encoding e tudo mais. Na prática, tanto arrays quanto strings, uma vez declarados e preenchidos, são fixos. |
| 26:26 | E aumentar o tamanho deles pode envolver criar um novo array e copiar o conteúdo do antigo |
| 26:31 | em cima do novo. Por isso um Java tem classes extras como StringBuffer pra lidar com strings que você vai precisar |
| 26:38 | crescer depois. Agora, tudo isso que eu vim falando até agora, array, string, ints ou floats, todos ocupam |
| 26:44 | algum lugar numa memória, seja RAM, ROM, SSDs ou qualquer outra coisa. É tudo uma fita de bits, onde cada posição tem um endereço. |
| 26:54 | Zero, um, dois, e assim vai. Cada valor em uso pode ser encontrado nessa fita com um endereço, é uma localização. |
| 27:01 | O conceito importante aqui é entender que tudo tem um endereço nessa fita, que pode ser qualquer tipo de memória. |
| 27:07 | Pode parecer complicado só porque endereços em máquinas de 64-bits podem ir até numerozões |
| 27:12 | do tamanho de exabytes. E pra piorar escrevemos esses endereços como hexadecimais. |
| 27:18 | Mas endereços são só isso: números. Eu sei que tô andando bem rápido e já soltei bastante coisa até agora, mas se segurem |
| 27:25 | que agora que a coisa vai ficar interessante. Recomendo que depois assistam tudo de novo com calma se isso é novo pra vocês, mas |
| 27:32 | agora é uma boa hora pra eu descer mais ainda na escovação de bits. Uma coisa que não é claro pra iniciantes é onde ficam todas essas variáveis ao longo |
| 27:41 | da execução de um programa. Então vamos partir de um exemplo bem besta em C. E não se preocupem se você nunca usou C, mesmo assim você deve ser capaz de acompanhar. |
| 27:50 | Em outros episódios eu já mostrei como isso funciona. A gente abre um editor de textos, escreve o codigozinho em C e usa o compilador `cc` |
| 27:59 | que é o GCC pra ler esse código e dar output ou saída num binário executável em formato |
| 28:04 | ELF, que o Linux consegue entender e executar. Se não sabe o que é isso, pelo menos assista o episódio da diferença de arquivos binário |
| 28:11 | e texto, onde eu mostro como isso funciona. O binário ELF tem um endereço específico onde fica a primeira instrução que vai começar |
| 28:19 | a executar. No caso é o hexa 0x1000. Esse endereço é gravado no registrador chamado PC, que é o program counter ou contador de |
| 28:28 | programa. É a partir disso que o CPU vai executando a instrução que tá apontado nesse contador. Uma vez executado o contador incrementa o endereço e aponta pra próxima instrução |
| 28:37 | na fita de bits. Bem a grosso modo, só pra ficar mais fácil de explicar, é como se esses endereços fossem |
| 28:44 | os números da linha do código C no nosso editor de textos. Claro que não é, porque o que tá no binário não é o código que digitamos e sim o que |
| 28:53 | o compilador traduziu pra linguagem de máquina, o linguição de bits. Mas pra facilitar a explicação, pense que no tal endereço 0x1000 ele pula ou dá JUMP |
| 29:02 | pro endereço da função `main` do C e vai executando uma linha de cada vez dessa função. |
| 29:08 | Sempre que eu me referir a endereço de programa como sendo o número da linha, é só uma metáfora pro endereço hexadecimal da instrução equivalente na memória de verdade. |
| 29:16 | A função `main` é o ponto de partida de qualquer programa em C. Neste exemplo vai alocar uma String "hello world". |
| 29:24 | Daí pegamos a referência dessa variável com esse & comercial na frente. Isso pega o endereço onde a string tá armazenada pra podermos imprimir na tela. |
| 29:33 | Daí passamos a variável pra outra função que vamos chamar de `f1` e colocar no começo do arquivo. |
| 29:39 | Aqui parece qualquer outra linguagem que você já usou, chamando uma função e passando um argumento entre parênteses. |
| 29:45 | E precisamos declarar a função `f1` antes da `main` porque em C, pra usar uma função embaixo, ela precisa estar definida antes. |
| 29:53 | Em outras linguagens isso não é verdade, depende do compilador. Mas no caso de C é assim. |
| 29:58 | Daí nessa função `f1` vamos receber como argumento um array de chars de novo e dentro |
| 30:03 | vamos imprimir o endereço onde a variável desse argumento foi armazenado, e depois repassar |
| 30:09 | essa variável pra outra função `f2`. De novo, definimos acima a função `f2` que, mesma coisa, vai receber um argumento de array |
| 30:17 | de chars, imprimir o endereço da variável e por último imprimir o valor da variável que é o "hello world". |
| 30:23 | É um exemplo super besta, só fomos passando o mesmo valor algumas funções pra frente. |
| 30:29 | Vamos sair do editor e usar `gcc` ou `cc` pra compilar esse código no tal executável |
| 30:34 | ELF, e podemos rodar. Agora a gente vê primeiro o endereço da primeira vez que declaramos a variável `hello` |
| 30:40 | na função main. Vou repetir caso tenha ficado confuso. Se eu der `printf` direto na variável `hello` iria imprimir o valor “Hello World”. |
| 30:48 | Mas como colocamos esse & comercial na frente da variável, na realidade ele vai acessar o endereço onde o Hello World está gravado na memória. |
| 30:55 | Tudo tem um endereço e em C, diferente de outras linguagens, temos acesso direto a esse |
| 31:01 | endereço com essa notação. Eu já falei do endereço de cada instrução do executável e na mesma memória estão |
| 31:08 | valores que vamos criando, como essa String. Então executar um programa é executar a instrução que tá em algum endereço. |
| 31:14 | E os valores que cada instrução vai usar, por sua vez, também estão em algum endereço |
| 31:20 | na memória. E com esse & comercial na frente da variável podemos fuçar o endereço. Pense no Hello World como o conteúdo de um arquivo texto e esse endereço como sendo |
| 31:29 | uma URL de uma página web tipo http://hello.com. O segundo numerozão que aparece é o endereço do argumento de dentro da função `f1`, quando |
| 31:40 | passamos o `hello` pra ela. Veja que o endereço é diferente, apesar do valor ser o mesmo. |
| 31:45 | Ou seja, ao passar a variável pra função ela foi duplicada. E a terceira linha é a mesma coisa, outro endereço diferente que foi impresso de dentro |
| 31:54 | da função `f2`. Porque quando a `f1` passou sua variável pra `f2` como argumento, essa variável foi |
| 32:00 | duplicada de novo. No final criamos 3 cópias desse String na memória ao longo do caminho, cada uma com |
| 32:07 | endereços diferentes. Você pode ver que toda vez que damos `printf` passando a referência da variável ela imprime |
| 32:13 | um número diferente. Toda vez que se passa uma variável de tipo primitivo como argumento de uma função, |
| 32:19 | ela é duplicada. E isso não é só em C, mas na maioria das linguagens. Isso tem um nome, se chama “passagem por valor”, que é diferente de “passagem |
| 32:27 | por referência”, que eu vou mostrar já já. A vantagem é que se a gente modificar o valor do argumento dentro da função, por exemplo |
| 32:34 | a `f1`, o valor original antes de ser duplicada, por exemplo, na função `main`, não vai |
| 32:40 | mudar depois que a `f1` der return. Outro detalhe, o endereço é impresso negativo na tela porque o binário desse endereço |
| 32:47 | começa com 1 e a função `printf` interpreta como sendo um integer com sinal, que como |
| 32:52 | eu expliquei agora pouco, se começa com 1 ele acha que é um número negativo. Mas também por começar com 1 sabemos que se trata de um endereço na metade mais alta |
| 33:02 | dos endereços da memória. Considere que o endereço mais baixo é o binário zero zero zero etc sessenta e quatro |
| 33:08 | vezes e vai incrementando de um a um até o endereço um um um um sessenta e quatro |
| 33:14 | vezes que é o endereço mais alto. O espaço de memória que um programa enxerga é segmentado segundo alguma convenção. |
| 33:22 | Pra facilitar a vida, num Windows da vida, ele começa a alocar memória pra drivers e coisas do sistema no final da metade alta, ou seja, começa no endereço binário um |
| 33:31 | um um etc ou hex FFFF etc e vai diminuindo. Já programas de usuário, tipo seu navegador, o Spotify e tals, começa no início da metade |
| 33:41 | baixa, mais próxima dos endereços que começam com zero. Um adendo. Um computador antigo de 32-bits suportava um máximo de RAM de dois elevado a 32 que |
| 33:51 | é pouco mais de 4 gigabytes. Quando passamos a adotar arquiteturas 64-bits, não dobramos de memória, mas sim elevamos |
| 33:58 | ao quadrado. Por isso o máximo teórico é mais de 16 exabytes. Porém, nenhum chip comercial que a Intel ou AMD fabricam de fato suportam mapear esse |
| 34:08 | tanto de memória ainda. Internamente as instruções lidam com valores de 64-bits mas nenhum hardware que você conseguir |
| 34:15 | comprar, nem os AMD EPIC Threadripper da vida suporta tudo isso. Eles costumam ser capados em 42 ou 48 bits de endereços em vez de 64, ou seja, pouco |
| 34:25 | mais de 280 terabytes. Que é coisa pra caramba, claro, mas só pra você saber que ainda não chegamos no máximo |
| 34:31 | dos 64-bits em hardware comercial. De qualquer forma, isso é a memória real. |
| 34:37 | Mas como expliquei nos episódio de gerenciamento de memória, um processo rodando enxerga memória virtual, que é o sistema operacional mentindo pros nossos programas como se eles tivessem |
| 34:48 | acesso a toda a memória teórica de 64-bits. É o que chamamos de memória virtual. |
| 34:53 | Dentro desse espaço virtual, os endereços que começam do zero e vão subindo é o que chamamos de memória dinâmica, ou "heap" que é pra onde vai a maioria dos dados que |
| 35:03 | seu programa carrega. Quando você carrega um arquivo em memória, ou quando se conecta num servidor de API e puxa JSON, ou quando pede dados no banco de dados, tudo vai pro heap. |
| 35:13 | Heap em inglês é um montão, um amontoado. Repetindo, lá no topo, nos endereços que começam com bit 1, é onde fica o segmento |
| 35:22 | de memória reservada pra kernel, que é uma área exclusiva pra endereços de coisas do sistema operacional, mas o próximo segmento é o que chamamos de pilha ou "stack". |
| 35:32 | Se eu não tô muito enganado, todo processo começa com pelo menos 8 megabytes de memória alta reservada pra stack e ela pode expandir decrementando endereços pra baixo. |
| 35:42 | Pode consumir até uns 2 gigabytes. A heap é a mesma coisa mas do outro lado, começa na memória baixa já com pelo menos |
| 35:48 | 1 megabyte reservado e se precisar de mais vai incrementando endereços pra cima. |
| 35:54 | Lembre-se que o stack de um nintendinho de 8-bits tinha meros 255 bytes, que é do endereço |
| 36:00 | hexa $0100 até $01FF. Eu explico pra que serve essa stack no episódio da introdução mais hardcore a computadores |
| 36:09 | mas vamos resumir usando o exemplo do hello world que fiz agora. Eu tenho 3 funções, a main, a f1 e a f2. |
| 36:16 | Cada uma delas aloca espaço pra duplicatas da string hello world, daí imprimem o endereço onde a variável foi alocada e no final sai fora e retorna pra função que chamou ela. |
| 36:26 | Aliás, em C, se uma função tem como tipo de retorno um `void` que é tipo `nada` em |
| 36:31 | C, então nem precisa dar return, porque não estamos retornando nenhum valor. Vamos na ordem. |
| 36:37 | Ao executar o binário ele pede pra kernel do sistema operacional alocar espaço pro novo processo e inicializar seja lá o que ele precisa. |
| 36:45 | A kernel vai usar o gerenciador de memória e alocar o mínimo necessário pro programa rodar e depois vai dando memória real pra ele à medida que for pedindo. |
| 36:55 | Depois ele pula pra primeira função que é a `main`. Agora cria a variável `hello` que é um array de chars com 12 bytes de tamanho. |
| 37:02 | Isso é alocado na Stack. Agora eu chamo a função do C chamado `printf`. Não vou explicar como o `printf` funciona, mas vamos aproveitar pra explicar a mecânica |
| 37:11 | dessa tal stack ou pilha. Toda chamada de função começa guardando o endereço atual de execução, o que está |
| 37:18 | no tal contador de programas. No nosso pseudo-exemplo de endereços seria o número da linha do nosso código onde chama |
| 37:25 | a função. No momento que a função `main` chama a função `printf` ele faz tipo um bookmark do contador |
| 37:31 | de programa e coloca no stack. Daí podemos substituir o endereço no contador de programa pelo endereço da função que |
| 37:39 | tá chamando, no caso o endereço pra `printf`. Agora, dentro da `printf` vai alocar outras variáveis, faz de conta, umas variáveis |
| 37:47 | x ou y quaisquer, que vão sendo colocadas na stack. Finalmente imprime na tela o que precisava e no final dá `return`. |
| 37:55 | Esse return começa a desempilhar o que alocou na stack até achar o último endereço que |
| 38:01 | a `main` gravou, o tal bookmark do contador de programas, e dá jump, ou seja, pula pra |
| 38:06 | ela. E pular significa colocar de volta esse endereço mais um no contador de programa, daí ele |
| 38:12 | pode continuar da próxima linha depois de chamar a função. É mais ou menos isso que faz um `return`. |
| 38:18 | O que tinha sido colocado na stack pelo `printf` foi liberado e voltamos a executar na próxima |
| 38:24 | linha. De volta ao `main` a próxima linha chama a nossa função `f1`. Mesma coisa, vamos empilhar o endereço dessa posição na stack. |
| 38:32 | Como eu disse antes, ao passar a variável `hello` como argumento, estamos duplicando a variável, então vai empilhar essa duplicata na stack também. |
| 38:41 | Dentro de `f1` vai chamar `printf` de novo pra imprimir o endereço dessa duplicata, |
| 38:47 | por isso temos valores diferentes de endereços. Já sabemos como isso funciona, então vamos pular os detalhes de `printf` pra não ficar |
| 38:55 | repetitivo. Pode assumir que empilhamos e desempilhamos `printf`. Em seguida o `f1` vai chamar a `f2`, e novamente o endereço dessa linha vai ser empilhado |
| 39:04 | na stack, a variável hello vai ser duplicada e empilhada na stack também, e de novo vamos |
| 39:10 | chamar `printf`. por fim vai ter um return. Esse `return` vai desempilhando até ver o endereço de volta à função `f1` e dar |
| 39:19 | jump pra ela. Agora no `f1` não tem mais nada a não ser outro `return`, então continua desempilhando |
| 39:24 | até o último endereço gravado da função `main` e dá jump de volta pra ela. E finalmente na `main` também temos um return. |
| 39:31 | Agora é o último de todos, então ele sai do programa inteiro, daí o sistema operacional vai fazer a limpeza da memória desse processo e tudo termina com sucesso. |
| 39:40 | A razão dessa explicação longa foi pra mostrar no nível mais básico o que significa |
| 39:45 | chamar funções e como variáveis são gerenciadas na stack. Toda vez que você chama funções e passa argumentos pra ela, esse registro de execução |
| 39:54 | vai sendo empilhado na stack, que é uma pilha. Pilha é uma estrutura de dados super importante e uma das mais fundamentais junto com Queues, |
| 40:03 | que é inglês pra filas. Elas são parecidas, mas não vou falar de queues hoje. E pilhas existem dois tipos, FIFO e LIFO. |
| 40:11 | A pilha que estamos usando aqui é do tipo LIFO, ou seja, Last in, first out. |
| 40:17 | Então o último elemento que empilhamos é o primeiro que vai ser desempilhado. Esse é mais um tema que você precisa estudar em detalhes, como é implementada e como funciona |
| 40:26 | em todos os casos. É uma das lições da matéria de Estrutura de Dados e Algoritmos que qualquer faculdade |
| 40:32 | ensina e mesmo se você for autodidata deveria estudar. De qualquer forma, você vai se lembrar que eu falei que essa stack costuma começar com |
| 40:40 | um tamanho de 8 megas e pode expandir até uns 2 gigas. Isso é bastante pra programas de qualquer tamanho. Repetindo, um jogo de Nintendinho inteiro, seja Super Mario, Zelda ou Final Fantasy conseguia |
| 40:51 | se virar com uma stack de meros 255 bytes, isso é um quarto de um mísero megabyte. |
| 40:57 | Estourar esse stack é sinal de má programação e acredite, não é difícil estourar a stack. |
| 41:03 | E quando ela estoura, seu programa crasheia. O jeito mais fácil de estourar é via recursão. |
| 41:09 | Recursão é uma função ficar chamando ela mesma sem parar. Vamos dar um exemplo, podemos fazer uma função chamada `f3` como essa aqui do lado, e ela |
| 41:18 | ficar chamando ela mesma. Além disso, nessa função `f3` vou ficar passando o argumento hello toda vez. |
| 41:24 | Cada chamada a `f3` vai duplicar a string de hello world na stack. Daí vamos imprimir o endereço que cada uma delas tá ocupando na stack. |
| 41:34 | Se compilar e executar notem como os endereços seguem uma sequência decrescente um atrás |
| 41:39 | do outro. Não são números aleatórios. Como eu disse, a stack começa nos endereços mais altos, depois do espaço da kernel na |
| 41:47 | memória. À medida que vamos empilhando novas chamadas de f3 e duplicando a variável hello como |
| 41:52 | argumento, os endereços vão diminuindo. Ela vai do fim em direção ao meio da memória. E no final, boom, o programa crasheia porque acabou a stack. |
| 42:01 | A função `f3` fica chamando ela mesma infinitamente até bater no limite que o sistema operacional |
| 42:08 | permite. No caso do linux dá um segmentation fault. Esse erro é bem genérico mas significa que você tentou acessar memória que não existe, |
| 42:15 | ou que não te pertence, ou qualquer tipo de acesso a memória que o sistema não sabe como lidar. |
| 42:21 | No nosso caso, por ter acabado a memória da stack. Se pegarmos o primeiro endereço impresso na tela e o último e subtrair um pelo outro, podemos saber quanto de memória da stack foi ocupada antes do crash. Como expliquei antes, esse primeiro número é negativo porque em binário começa com |
| 42:26 | o primeiro bit mais significativo sendo 1, que o `printf` entendeu como integer com sinal negativo. Mas se convertermos de volta pra hexa temos esse linguição aqui, hexa F nove sete D dois zero A oito. Mesma coisa fazemos com o último endereço que foi impresso na tela e vamos ter hexa quatro um zero nove três sete zero oito. |
| 42:32 | Fazendo um menos o outro temos esse numerozão, que se formos dividindo por mil e vinte e quatro, vai dar exatamente 2 gigabytes. Então podemos estabelecer que nosso stack durou até bater 2 gigabytes. Recursão é extremamente importante na programação e você precisa garantir que uma hora essa recursão vai parar antes da stack encher. Existe um caso especial de recursão que não enche a stack agressivamente desse jeito e |
| 42:38 | ela simplesmente vai fazer jump de volta pra algumas instruções pra trás sem ficar enchendo a stack a cada chamada recursiva. |
| 42:44 | Isso se chama Tail Recursion e vou deixar de lição de casa pra vocês estudarem caso nunca tenham ouvido falar disso. |
| 42:50 | A maioria das boas linguagens suporta tail recursion e isso diminui bastante os casos |
| 42:56 | de estourar a stack. Mas além da recursão temos outro problema nesse exemplo besta. |
| 43:01 | Toda vez que chamamos a função `f3` recursiva, passamos a string de hello world e ela é |
| 43:06 | passada por valor, ou seja, é duplicada. Cada chamada recursiva que fazemos, no mínimo, tá empilhando o endereço pra onde o return |
| 43:14 | vai dar jump de volta, que é um endereço de 64-bits ou 4 bytes, “mais” a duplicata |
| 43:19 | de hello world que custa 12 bytes. Só isso são no mínimo 16 bytes a cada chamada. |
| 43:25 | Ou seja, dos 2 gigabytes de stack, talvez uns 3 quartos tão ocupados só com duplicatas de hello world, que é um grande desperdício. Uma string idealmente deveria ser imutável. Quando precisamos modificar a String ou concatenar mais texto nela, aí sim precisaríamos fazer |
| 43:33 | uma duplicata. Mas se a variável vai permanecer sempre a mesma como uma constante, não precisaríamos |
| 43:38 | ficar duplicando toda vez que passamos pra outra função. Imagina se em vez de hello world essa string fosse um texto enorme, uma ou mais páginas |
| 43:46 | da Wikipedia, ocupando 1 mega, ou talvez 1 giga. Em duas chamadas de função duplicando a variável passando por valor ia acabar a stack. |
| 43:54 | Então o que fazemos? Vamos nos lembrar que eu falei que a stack é só um dos segmentos da memória total. |
| 44:00 | A memória virtual total de 64-bits caberia até 16 exabytes de dados. |
| 44:06 | Meros 1 giga não é nada. Eu poderia duplicar um texto de 1 gigabyte trilhões de vezes até acabar a memória |
| 44:12 | toda. Mas no nosso caso o segmento da stack acaba em 2 gigabytes. Então como fazemos? Agora vem a parte mais complicada. Vou tentar explicar pra vocês o temido Pointer ou apontador. |
| 44:19 | Parece difícil mas o básico é bem simples, na real. Em vez de alocar espaço na stack pra guardar meus strings ou mesmo qualquer outro array |
| 44:27 | gigante, vamos alocar ela no heap. Já expliquei antes que o Heap é o segmento da memória total que começa nos endereços |
| 44:35 | mais baixos perto de zero e cujos endereços vão incrementando. Repetindo, enquanto os endereços da stack começam do endereço mais alto e vão decrementando |
| 44:44 | em direção ao começo, os da heap começam no endereço mais baixo e vão incrementando em direção ao fim. |
| 44:50 | O sistema operacional vai garantir que um não cruze os limites do outro no meio. Tecnicamente os endereços da heap podem ir incrementando até o limite de não ultrapassar |
| 45:00 | os endereços do stack, entenderam? Quando você instancia um objeto numa linguagem como Python, Javascript, Ruby, Java, C#, o |
| 45:09 | bloco de memória que contém todos os dados do objeto ficam no heap. E na stack fica só endereço, ou a referência que aponta pra esse objeto, que numa arquitetura |
| 45:19 | de 64-bits vai ter sempre o tamanho fixo de 4 bytes, independente de quanta memória foi |
| 45:25 | alocada pro objeto no heap. O truque é simples, vamos voltar ao hello world e em vez de alocar na stack, vamos mover |
| 45:31 | pro heap. Em C precisamos incluir o cabeçalho `stdlib.h` que nos dá acesso à famosa função `malloc` |
| 45:39 | que significa “memory allocation”. O argumento que passamos é quantos bytes queremos que ela reserve no heap. |
| 45:45 | No caso, podemos usar outra função chamada `sizeof` que, como o nome diz, mede o tamanho |
| 45:51 | de alguma coisa. E como parâmetro pra essa função passamos a variável hello que alocamos na stack, que |
| 45:56 | é 12 bytes. Poderíamos passar direto o número 12, também. Mas o que o `malloc` vai fazer é procurar um segmento contínuo de 12 bytes no heap |
| 46:05 | e passar pra gente o endereço que ele reservou no heap. E essa nova variável `hello2` vai guardar esse endereço, que é um número de 4 bytes. |
| 46:13 | Então esse `hello2` é um ponteiro porque seu endereço aponta aonde vai estar o string |
| 46:19 | na Heap. É só isso. Aqui a coisa pode ficar mais cabeluda ainda, então prestem atenção. |
| 46:24 | Com esse endereço em mãos podemos usar outra função do C, o `strcpy` ou string copy, |
| 46:31 | passando como argumentos esse endereço e a variável hello antiga pra copiar o hello world pra esse novo espaço na heap. |
| 46:37 | Essa é a única duplicata que vamos ter a partir de agora. A parte importante é entender que na variável `hello2` nós não temos a string hello world |
| 46:45 | e sim o endereço pro primeiro byte na heap onde vamos encontrar essa cópia do hello |
| 46:51 | world. Sendo o hello2 um ponteiro com um endereço e sabendo que cada char da string tem exatamente |
| 46:58 | um byte e sabendo que ela acaba quando encontramos o caracter NULO, se fizermos outro ponteiro |
| 47:03 | chamado `hello3` que é `hello2` mais 6, agora vamos ter só a palavra `World` se dermos |
| 47:10 | `printf` nela. Vamos compilar e rodar pra ver. Olha como imprime na tela o Hello world do ponteiro hello2 e só world do ponteiro hello3. |
| 47:18 | Mas a gente não criou ou duplicou uma nova string, estamos apontando pro mesmo espaço |
| 47:23 | na memória só que 6 bytes mais pra frente. Essa sintaxe ou notação de asterisco é pra indicar à linguagem que essa variável |
| 47:31 | é um ponteiro e queremos acessar o valor gravado no heap, nesse exato endereço. |
| 47:37 | Se não colocarmos o asterisco, vemos direto só o endereço. Se colocarmos o asterismo ele trás o valor pra onde esse endereço tá apontando. |
| 47:45 | Tanto as variáveis `hello2` quanto `hello3` parecem representar um string diferente mas |
| 47:51 | na verdade são só endereços ou, mais corretamente, referências, ao mesmo string, só apontando |
| 47:57 | pra posições diferentes no mesmo string. Pra acessar o string em si, usamos asterisco hello2 e asterisco hello3. |
| 48:04 | Seja um string ou seja um array, já que string é um caso especial de array, a variável |
| 48:10 | `hello` não contém "O" array e sim o endereço pro primeiro elemento do array. |
| 48:16 | Se eu quiser pegar um elemento no meio do array, primeiro pego o endereço e somo a quantidade de bytes que leva ao elemento que eu quero. |
| 48:24 | Se for um array de chars, que é uma string, onde cada char tem 1 byte; pra pegar a 6a |
| 48:29 | letra, basta somar 6 bytes ao primeiro endereço. Quando fazemos aquela notação que tem em toda linguagem, com brackets ou colchetes, |
| 48:38 | com um número no meio, a linguagem tá traduzindo por baixo em uma soma de endereço, como eu |
| 48:43 | mostro aqui no código. É o endereço inicial, mais o tamanho de cada elemento multiplicado pela posição. |
| 48:50 | Vejam que estou repetindo essa operação pra tentar deixar bem claro esse funcionamento. Tem uma última estrutura de dados que eu quero explicar pra vocês hoje. |
| 48:59 | Como eu repeti de propósito várias vezes até agora, arrays são listas que tem sempre os mesmos tipos de elementos, ou mais corretamente, que tem elementos de mesmo tamanho. |
| 49:08 | Se for um string, é um array onde cada elemento tem 1 byte, se for um array de inteiros de |
| 49:14 | 64-bits, todo elemento tem exatamente 4 bytes. E eu vim repetindo a mesma coisa sobre elementos iguais por causa do seguinte: e se eu quiser |
| 49:22 | uma sequência onde cada elemento tem tamanhos diferentes? Pra isso, em linguagens de alto nível tipo Python existe a tupla ou tuple, ou no caso |
| 49:32 | de C existe Struct. Em conceito não são a mesma coisa, mas pra hoje pense que é. |
| 49:37 | Vou explicar porque. Diferente de um array onde cada elemento em sequência tem o mesmo tamanho, num struct |
| 49:44 | ou tupla podemos declarar tipos diferentes que vão ser concatenados um atrás do outro no linguição de bits. |
| 49:50 | Por exemplo, podemos declarar uma Struct ou estrutura chamada Person, cujo primeiro elemento |
| 49:55 | vai ser um array de chars de 10 bytes, um nome curtinho. O segundo elemento vai ser um int de 8 bits, ou 1 byte, chamado age, pra ser a idade dessa |
| 50:04 | pessoa. E finalmente o terceiro elemento vai ser a altura ou height, que vai ser um inteiro de |
| 50:10 | 8 bits também. Essa estrutura define um tipo de dados novo, chamado Person, cujo tamanho total sempre |
| 50:16 | vai ser de 12 bytes. Agora eu posso criar uma variável que vai ser esse tipo e o C vai preencher os valores |
| 50:23 | que vamos passar na sequência correta na fita de bits. Se eu fizer `person.age` igual a 43, `person.height` igual a 172 e `person.name` igual a "Fabio", |
| 50:33 | a cadeia de bits vai ficar exatamente assim em hexadecimal. Lembrando que cada dois dígitos em hexa representa 1 byte, começamos com o hexa quatro seis |
| 50:42 | que é a letra "F", daí 0x61 que é "a" daí chega uma sequência de zeros porque "Fabio" tem menos de 10 bytes. |
| 50:48 | O penúltimo hexa 2B é a idade 43, e o último hexa AC é 172. |
| 50:54 | A Struct meio que serve como um molde, que encaixa exatamente nessa sequência de bits |
| 50:59 | e quebra os valores pra dentro dos campos que criamos. No caso de idade e altura, como são inteiros de 8 bits sem sinal, sabemos que podemos ter |
| 51:07 | idades de zero até duzentos e cinquenta e cinco e alturas de no máximo duzentos e cinquenta e cinco centímetros, e tirando alguma raríssima exceção, tipo se você for mais alto que |
| 51:16 | o Hulk, isso cobre qualquer pessoa do mundo. Única coisa nesse trecho de código que talvez deixe você confuso é porque podemos fazer |
| 51:24 | `person.age` igual 43 mas não podemos fazer `person.name` igual "Fabio" e em vez disso |
| 51:30 | eu usei a função que copia strings de duas posições da memória, que é essa `strcpy`. |
| 51:35 | Só entenda que é assim que se faz em C, mas em outras linguagens como Javascript você faz do jeito mais simples de só usar "igual". |
| 51:43 | Coisas desse tipo que linguagens de mais alto nível facilitam. É o que eu chamaria de ergonomia da linguagem. |
| 51:48 | Mas com o que eu expliquei até agora, você conhece os principais tipos numéricos primitivos |
| 51:54 | como integers e floats, arrays e strings, e agora structs. Um Tuple é como se fosse um Struct anônimo, sem nomes e etiquetas, parecido com um array. |
| 52:05 | Aliás, toda vez que você ver um Tuple num Python da vida, vai achar que é a mesma coisa |
| 52:10 | que um array. Uma Tupla é um conjunto imutável com elementos de tipos diferentes, só isso. |
| 52:15 | Um Array é um conjunto mutável de elementos do mesmo tipo. Pra extrair os elementos de uma tupla, você precisa de um molde que declara qual o tamanho |
| 52:24 | de cada elemento, um molde que vai ser parecido com um Struct. Estamos chegando no final, e agora com tudo que aprendemos, só falta mais um truque pra |
| 52:32 | vocês começarem a entender melhor como os programas funcionam. Vocês meio que já devem ter entendido que funções nada mais são que sequências de |
| 52:40 | instruções que ficam localizados em algum endereço na memória. A CPU vai executando “linha a linha” e quem dita qual linha é o tal contador de |
| 52:49 | programas. Daí quando uma função chama outra, ela primeiro faz bookmark desse contador na stack, |
| 52:55 | e dá JUMP pro endereço dessa outra função. Repetindo, é como se cada uma dessas linhas de código ficasse num endereço na memória. |
| 53:04 | Estamos simulando como se fossem as linhas do código no editor de textos. Quando na função `main` lá embaixo eu chamo a função `f1`, e o compilador do C gera |
| 53:13 | o binário, ele vai substituir por algo semelhante a um `jump` ou mesmo `goto` em linguagens |
| 53:19 | mais antigas, pro endereço da linha da função `f1`. No comentário é um pseudo-código de como seria se o C tivesse uma função chamada |
| 53:28 | `jump`. E isso é uma das razões de porque precisamos de compiladores. Ia ser chato pra caramba ter que ficar lembrando o endereço de cada função que precisamos. |
| 53:38 | E aí a gente resolve mexer na função, muda de lugar, e isso muda o endereço, daí tem |
| 53:43 | que mudar todo lugar que chama esse endereço na mão. Puta trampo. Em vez disso usamos nomes que representam esses endereços, como nomes de função e |
| 53:52 | nomes de variáveis, e deixamos o compilador traduzir isso em endereços no binário final. |
| 53:58 | Isso é outro conceito importante: nomes de coisas não precisam existir no binário. Se a gente quiser podemos dizer pro compilador manter os símbolos pra debug. |
| 54:08 | Símbolos são esses nomes. Os campos nome, idade e altura não existem no binário onde estão os valores. |
| 54:14 | É só um linguição de bits e só. Linguagens de mais alto nível às vezes guardam esses símbolos por padrão. |
| 54:20 | São metadados ou dados que explicam os dados, e metadados ocupam espaço. |
| 54:26 | Mas como não são necessários pra rodar o programa e sim pra debugar depois, não é bom guardar tudo porque seria um desperdício de espaço. |
| 54:33 | Se você já mexeu com coisas como XML ou JSON, eles são grandes e desperdiçam bastante |
| 54:39 | espaço, primeiro porque representam tudo como strings e segundo porque levam os metadados de tudo junto com os dados. |
| 54:45 | Mas isso é um detalhe que vou explorar em outro episódio. Aliás, é por isso que um Google inventou coisas como Protobufs, se você estiver interessado |
| 54:53 | em mais um assunto pra estudar. No caso do texto do código, nós declaramos símbolos, ou nomes pra endereços e cadeias |
| 55:02 | de bits, pra facilitar a vida do programador de ler o código ou debugar depois, mas a |
| 55:07 | máquina em si não se importa com nada disso. Pro computador é tudo uma cadeia de bits e só. |
| 55:13 | O computador não dá a mínima pra como você chama as coisas ou o significado que dá pra elas. |
| 55:18 | Um código é feito pra outros programadores entenderem. Computadores só entendem os binários sem nomes e sem significados. |
| 55:28 | Entenda esse conceito. A parte importante é que tudo tem endereços, não só variáveis mas funções também. |
| 55:34 | Em particular, em C, podemos pegar a referência de uma função e passar como argumento pra |
| 55:40 | outra função, da mesma forma como eu passei o endereço da variável `hello` pro `printf` imprimir na tela, lembra? |
| 55:46 | Por exemplo, vamos reorganizar esse código de criar struct numa função nova chamada `createPerson` onde passamos como argumentos o nome, idade, altura e um último argumento |
| 55:57 | que é um ponteiro pra uma função que não retorna nada, então `void` mas tem como argumento |
| 56:03 | um struct de Person. Dentro dela fazemos igualzinho antes, onde declaramos a struct Person, preenchemos os |
| 56:10 | campos mas no final executamos a função que veio nesse endereço chamado `function_pointer`. |
| 56:16 | Entenda isso. a variável `function_pointer`, assim como aquela `hello2` vai ser só uma |
| 56:21 | referência, um endereço pra alguma função que tem as características que declaramos, que retorna `void` ou seja, nada, e tem uma struct Person como argumento. |
| 56:31 | Ao colocar um asterisco na frente dela, é como se estivéssemos dando copy e paste do |
| 56:36 | nome da função de verdade aqui e executando ela. A seguir vamos declarar a função pra passar pra esse `createPerson`. |
| 56:43 | Vamos chamar de `printPerson`, que retorna `void` e recebe um `Person` de argumento e |
| 56:49 | dentro é só um `printf` como fizemos antes. Mas note que diferente de antes, onde precisamos declarar acima as funções que vamos usar |
| 56:57 | embaixo, estamos declarando o `printPerson` abaixo da função `createPerson` porque ela |
| 57:02 | ainda não sabe que é essa função que vamos usar. Ela só sabe que vai receber uma referência que pode ser pra qualquer outra função. |
| 57:10 | Se a `createPerson` chamasse direto a `printPerson` ela precisaria ter sido declarada antes. |
| 57:16 | Mas vamos ver a seguir como eu passo a referência dessa função pra `createPerson`. |
| 57:21 | Na função `main` chamamos a `createPerson` passando os mesmos valores de antes, "Fabio", |
| 57:27 | 43 e 172 e em seguida & comercial e `printPerson`. Aqui estamos pegando a referência, o endereço da função e passando como argumento. |
| 57:37 | Quando compilamos e executamos vemos que a saída na tela é igual antes. Esse & comercial `printPerson` tá pegando o endereço onde a função tá declarada |
| 57:47 | e passando como argumento pra `createPerson`. É só um integer que faz cast pra uma função. |
| 57:53 | Cast é a ação de declarar que tipo esse número representa pro compilador do C saber |
| 57:59 | o que fazer com ela. Mas só isso não tem graça, vamos declarar uma segunda função `printPerson2` pra ver |
| 58:05 | como podemos passar uma referência diferente. Lá em cima, fazemos uma cópia do `printPerson`, chamamos de `printPerson2` e vamos só mudar |
| 58:13 | o jeito que o `printf` mostra os dados. De volta lá embaixo vamos chamar o `createPerson` de novo, mas passando a referência pra esse |
| 58:20 | novo `printPerson2`. Depois de compilar e executar, veja que imprime essa nova versão também. |
| 58:26 | A função `createPerson` aceita qualquer função compatível, que tenha a mesma assinatura, |
| 58:32 | ou seja, o tipo de retorno e os tipos de argumentos que ele espera. Isso é o que chamamos de assinatura de uma função. |
| 58:38 | Ela só recebe a referência pra função que estiver nesse endereço. Basta essa função ter a assinatura correta, ou seja, aceitar a struct de Person e retornar |
| 58:48 | void, ou nada. Isso de uma função ser passada como referência pra outra função é o que você já deve |
| 58:54 | ter ouvido falar como um `callback`. É uma função que vai ser chamada "call" de volta "back". |
| 59:01 | Qualquer um que tenha se interessado por programação funcional sabe que uma característica importante é ter funções que recebem outras funções como argumento. |
| 59:10 | A função `createPerson` é o que em funcional o povo chama de "High Order Function". |
| 59:15 | Quando em Javascript, Python ou Ruby você usa funções como `forEach`, `map`, `filter`, |
| 59:21 | `reduce` e outros, eles recebem como argumento a referência pra outra função, normalmente |
| 59:26 | uma função anônima, ou seja, que não tem nome e é declarada dentro dos parênteses |
| 59:31 | de argumento. E com isso você entendeu o primeiro passo pra ter uma linguagem funcional. |
| 59:37 | Na teoria, sim, você poderia escrever código C do jeito “funcional”, mas ninguém faz |
| 59:42 | isso porque não é prático. Mas com isso você pode imaginar como C poderia ser usado pra criar uma linguagem funcional |
| 59:49 | como um Lisp da vida. É assim que a gente começa a manipular uma linguagem pra aceitar paradigmas que ela não |
| 59:55 | foi projetada pra fazer. E com o que aprendemos até agora eu já posso mostrar mais um passo adiante. |
| 1:00:00 | Vamos entender o primeiro passo que leva C pra uma linguagem orientada a objetos como |
| 1:00:06 | C++ ou Objective-C. O que eu vou mostrar a seguir não é a implementação da verdade, mas só um rascunho de como poderia |
| 1:00:13 | ser. Quando eu penso em orientação a objetos só penso em duas coisas: um ponteiro pra uma struct e ponteiros pra funções cujo primeiro argumento, o que você aprendeu num |
| 1:00:23 | Python ou Javascript como `self` ou `this`, sendo um ponteiro de volta pra mesma struct. |
| 1:00:29 | Vamos refatorar a `createPerson` primeiro. Até agora ela tá declarando a struct na stack e quando chama a `printPerson` tá duplicando |
| 1:00:38 | por causa da passagem por valor. Em vez disso, vamos criar a struct no Heap e economizar espaço no stack fazendo passagem |
| 1:00:46 | por referência. Pra isso precisamos usar `malloc` passando o tamanho da struct como parâmetro. |
| 1:00:52 | E isso pra mim é o que significa `instanciar um objeto na memória`. Basicamente alocar espaço na heap pra uma struct. |
| 1:01:00 | No caso de C, quando criamos qualquer coisa no Heap, precisamos colocar asterisco na frente |
| 1:01:05 | da variável que guarda essa referência pra acessar o valor, mas no caso de struct em |
| 1:01:11 | C basta trocar essa notação de "ponto" pra uma seta com tracinho e sinal de maior. |
| 1:01:16 | Se você é de C++ ou PHP já viu essa notação e eu acho que ela deriva disso em C mesmo. |
| 1:01:22 | Pra acessar os campos de uma struct de C que foi alocada na heap, sem precisar usar parênteses |
| 1:01:27 | e ponto, basta usar a setinha, é a mesma coisa. Agora vamos tirar o argumento de ponteiro de função do final do `createPerson`. |
| 1:01:35 | Em vez disso, vamos mover pra struct de Person. Um novo campo que é um ponteiro de função chamado `show`. |
| 1:01:42 | Dentro da `createPerson` declaramos que o campo `show` desse person que instanciamos no heap vai apontar pra referência da função `printPerson` que a gente já tinha. |
| 1:01:51 | Finalmente, vamos mudar o tipo de retorno da função pra devolver o ponteiro dessa |
| 1:01:56 | struct e no final podemos dar return do person que acabamos de criar e configurar. |
| 1:02:02 | Quem já programa orientado a objetos em alguma linguagem pode estar achando isso familiar. Eu chamaria essa função `createPerson` de “construtor”. |
| 1:02:11 | Um constructor é uma função responsável por alocar espaço pra um objeto na memória |
| 1:02:16 | Heap e configurar os valores iniciais desse objeto, retornando o endereço, ou referência, |
| 1:02:22 | pra esse objeto. Agora vamos usar isso na função `main`. Primeiro vamos armazenar o ponteiro que a `createPerson` vai criar numa variável que |
| 1:02:31 | é um ponteiro, um asterisco person. E passamos os valores que queremos como argumento a esse construtor. |
| 1:02:37 | E pra imprimir esses valores na tela podemos chamar direto o método deste “objeto”. E pra quem não sabe, “método” é o nome que damos a funções associadas a um objeto. |
| 1:02:48 | O método `show` já foi configurado no construtor pra ser um ponteiro pra `printPerson`. |
| 1:02:53 | A última refatoração que precisamos fazer é mudar a função `printPerson` pra usar |
| 1:02:58 | essa variável `self` pra acessar os campos de nome, idade e altura. Se você é de Python, deve estar começando a se sentir em casa porque métodos de objetos |
| 1:03:08 | de Python tem explicitamente o primeiro argumento recebendo `self`. E é o que estou simulando aqui em C. |
| 1:03:15 | Em Javascript e outras linguagens orientadas a objetos, em vez de `self` chamamos de `this` |
| 1:03:20 | mas é mais ou menos a mesma coisa, só que o primeiro argumento é implícito, você não precisa declarar ela. |
| 1:03:27 | Mas faça de conta que a linguagem tá botando ela lá pra você. Então, só chamando `person` setinha `print` e passando `person` como o argumento `self` |
| 1:03:35 | vai tudo funcionar. Qual seria um próximo passo pra ficar mais parecido com uma linguagem orientada a objetos? |
| 1:03:42 | Pra quem não sabe, em C tem uma coisa chamada `pré-processamento`, que é reescrever o |
| 1:03:47 | código antes de compilar. Se você é de Javascript pense como um “transpiler”. Por exemplo, lá no topo do arquivo podemos declarar uma cerquilha `#DEFINE` e dizer que |
| 1:03:57 | toda vez que achar escrito `Class` pode trocar pra `struct` antes de compilar. |
| 1:04:02 | Onde tá `struct Person` podemos substituir como `Class Person`. Vamos lá usar a função de procurar e substituir do editor e boom. |
| 1:04:10 | Olha só como de repente parece que estamos lidando com uma linguagem orientada a objetos de verdade. |
| 1:04:15 | Se você aguentou até aqui, espero que tenha conseguido minimamente visualizar o que são |
| 1:04:20 | os diferentes tipos de dados, as diferenças entre inteiros e floats, arrays, tuples e |
| 1:04:27 | structs. Como dados são alocados na stack que é a pilha e como a execução de um programa com funções que chamam outras funções vai sendo empilhado e desempilhado da stack. |
| 1:04:37 | Como tudo tem endereços ou referências, incluindo funções. Algumas linguagens expõem referências a funções, mas não permitem manipular essas |
| 1:04:46 | referências pra apontar pra outras regiões de memória. Javascript é assim. Um Java lá atrás só tinha referência a objetos, por isso a única forma de passar |
| 1:04:56 | funções pra outras funções era primeiro encapsular numa classe anônima, instanciar |
| 1:05:02 | e passar a referência do objeto como argumento pra outras funções. Por baixo dos panos é assim que as coisas funcionam. |
| 1:05:09 | Pra complementar, recomendo rever os vídeos sobre gerenciamento de memória. Quando fazemos programinhas simples, que alocam poucos dados e não tem nenhuma recursão |
| 1:05:18 | maluca, o stack é mais que suficiente. E você não precisa lidar com o heap. O problema de alocar coisas no heap é que quando termina a função que fez a alocação, |
| 1:05:27 | o ponteiro sai do stack, mas o que foi alocado no heap continua lá ocupando espaço se você |
| 1:05:33 | não der `free` pra liberar explicitamente. Memória na heap não se desempilha sozinha. |
| 1:05:38 | Por isso surge a necessidade de um garbage collector ou outros truques como o ARC de Swift pra limpar o heap. |
| 1:05:45 | Só que garbage collector não faz milagres. Ele sempre vai reservar mais memória do que realmente precisa e sempre vai causar pausas |
| 1:05:53 | na execução do programa pra fazer essa limpeza de tempos em tempos. Mesmo se você tiver memória sobrando pra desperdiçar, essas pausas pra limpeza sempre |
| 1:06:02 | vão ser um problema. E é o que linguagens como Swift ou Rust ou C tentam evitar. |
| 1:06:08 | Por isso são melhores pra fazer coisas como sistemas operacionais, drivers ou coisas de mais baixo nível que vão ser eficientes no uso de recursos e evitar pausas de manutenção |
| 1:06:17 | o máximo possível. O mesmo não se pode dizer de Java, C# ou Go. |
| 1:06:22 | Linguagens interpretadas como Javascript, Python, Ruby, PHP são extensões bem pesadas |
| 1:06:28 | em cima de C. Elas adicionam diversas funcionalidades pra facilitar a programação, mas por baixo dos |
| 1:06:35 | panos o que faz elas funcionarem mais rápido e mais eficiente são bibliotecas escritas em C. |
| 1:06:41 | Uma biblioteca escrita só em Python ou Javascript nunca vai ser nem tão rápida nem tão eficiente. |
| 1:06:47 | Por isso, funções como criptografia, funções de I/O pra lidar com arquivos ou pacotes de rede, funções matemáticas e tudo mais é tudo escrito em C. |
| 1:06:55 | Eu chamo elas de linguagens "cola". Você só escreve a cola em Python, que é uma sintaxe mais simples, pra mexer com funções |
| 1:07:03 | mais complicadas que estão escritas em C ou C++. Por exemplo, em machine learning, Python não é importante porque as funções de um Tensorflow |
| 1:07:12 | são todas escritas em C++. Se você usar SciPy pra computação científica, de novo as funções são todas em C++ ou |
| 1:07:19 | Fortran. Nenhuma linguagem cola é rápida o suficiente pra essas coisas. São boas como cola, pra consumir essas coisas mais fácil. |
| 1:07:28 | Se você mexe em machine learning em Python, você é só um consumidor de ferramentas escritas em C++ ou C e faz cola em Python. |
| 1:07:37 | Não tem nenhum problema nisso, e na prática a maioria de vocês assistindo nunca vai precisar de mais que isso. |
| 1:07:43 | Linguagens que são "cola" nunca vão ser boas pra fazer o que eu chamo de "sistemas". Coisas como drivers, criptografia, processamento massivo de dados como um banco de dados ou |
| 1:07:53 | mesmo protocolos de rede eficientes. Elas sempre vão ser só a cola pra sistemas feitos em C++ ou C. |
| 1:08:01 | Por isso eu recomendo que você saiba no mínimo uma linguagem de mais baixo nível como C |
| 1:08:06 | ou Rust. E junto uma linguagem cola pra ter produtividade como Javascript ou Python. |
| 1:08:11 | Quem só sabe linguagens "cola" sempre vai achar que o que acontece no baixo nível é "mágica". |
| 1:08:18 | E com o episódio de hoje eu espero ter conseguido quebrar um pouco dessa "mágica" e fazer vocês |
| 1:08:23 | enxergarem suas linguagens favoritas com outros olhos. Claro, tudo que eu falei rápido em um episódio é o que se ensina em no mínimo um semestre |
| 1:08:32 | em ciências da computação, talvez um ano ou até mais. Eu só mencionei estruturas de dados simples, não falei de listas ligadas, árvores, red |
| 1:08:40 | black, AVL e nem cheguei a falar dos algoritmos pra lidar com essas estruturas. |
| 1:08:46 | Quem sabe em outro episódio no futuro, mas entenda que tudo que eu falei hoje é o básico em ciências da computação. |
| 1:08:52 | Se você se considera programador e nunca viu nada do que expliquei hoje, considere estudar e treinar mais. |
| 1:08:59 | Isso vai te ajudar a subir pro próximo nível na programação. Se ficaram com dúvidas mande nos comentários abaixo, inclusive se já sabem de tudo que |
| 1:09:06 | eu disse aqui, ajudem a responder às dúvidas dos colegas nos comentários também. Não deixem de assinar o canal e clicar no sininho pra não perder os próximos episódios. |
| 1:09:15 | Compartilhem o video pra ajudar o canal. A gente se vê, até mais! |
