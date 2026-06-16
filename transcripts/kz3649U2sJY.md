# Turing Complete, Emuladores e o Chip ARM M1

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=kz3649U2sJY
- **Duração:** 23:42
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Fiquei contente que vocês gostaram do episódio |
| 0:04 | que contei um pouco mais sobre a máquina de Turing e a arquitetura de Von Neumann. Aquele episódio |
| 0:09 | tinha ficado grande e eu tive que cortar um trecho enorme pra não perder a linha de raciocínio do que |
| 0:14 | eu queria contar. O trecho era tão grande na real, que era praticamente outro episódio. |
| 0:19 | Pois é, no processo de escrever os textos e um dos motivos de porque eu não gosto de fazer live, |
| 0:24 | é que eu faço muita tangente e aí o assunto fica mais complicado do que devia. Mesmo cortando eu |
| 0:30 | ainda faço tangente. Ainda estou praticando cortar coisas, mas vira e mexe acontece de eu |
| 0:34 | escrever 30 páginas e cortar 10 fora, como é o caso do material de hoje. |
| 0:39 | Então a primeira metade do video de hoje vai ser tipo a edição estendida director's cut |
| 0:45 | continuando o video anterior, mas a segunda metade vou começar a falar sobre emuladores e até dar uma |
| 0:51 | palhinha do que eu acho dos novos chips Apple M1 no contexto de emulação e arquitetura. Mas isso |
| 0:57 | vai ser introdução também pro próximo episódio onde vou cair mais no meu lado geek e falar de |
| 1:02 | videogames. (...) |
| 1:10 | Eu nasci no fim dos anos 70. A revolução dos micro-computadores nasceu praticamente |
| 1:15 | junto comigo. Por exemplo, a Atari foi fundada em 1972, a Microsoft em 75, |
| 1:21 | a Apple em 76. No mesmo ano que eu nasci também nascia o computador PET, o antecessor da linha |
| 1:27 | Commodore que sairia em 82. O padrão MSX nasceu em 83. O Sinclair ZX Spectrum nasceu em 82 e no |
| 1:34 | Brasil ele foi clonado pela Microdigital e virou o venerado TK 90X, que eu queria ter |
| 1:39 | quando criança mas não pude. No caso do TK 90X ele usava processador Zilog Z80, |
| 1:44 | o mesmo também usado no Sega Mastersystem que fez muito sucesso no Brasil, fabricado pela Tectoy e |
| 1:50 | que existe até hoje. Outros modelos de micros como o Apple II ou Commodore 64 ou mesmo o Atari 2600 |
| 1:56 | usavam o MOS 6502 ou sua evolução, o 65C02, que eu introduzi no episódio do Guia mais Hardcore |
| 2:05 | de Introdução à Computação. Esse mesmo processador equipava o Nintendinho |
| 2:09 | original de 8-bits. E mesmo o Super Nintendo usa o processador da família do 65816 que é |
| 2:15 | baseado na arquitetura e instruções do 6502, meio como um Intel Core i5 de hoje é uma evolução dos |
| 2:22 | Pentium de antigamente e ainda são compatíveis. Recomendo que assistam meu episódio também de |
| 2:27 | Aprendendo sobre Computadores com Super Mario pra entender um pouco de como as instruções do 6502 |
| 2:32 | funcionam na prática. Essa conversa toda foi só pra voltar no conceito |
| 2:36 | de máquinas Turing Universais ou UTMs. Pra recapitular, uma máquina de Turing, a abstração, |
| 2:42 | é basicamente uma máquina com um leitor que consegue ler um bit de cada vez de uma fita |
| 2:48 | infinita, consegue mover essa fita pra esquerda ou pra direita, e além de ler consegue mudar o valor |
| 2:53 | de um bit de cada vez. Mesma coisa o console de um Nintendinho, onde é possível representar tudo que |
| 2:59 | compõe o console com um número descritivo, porque ele é uma máquina de Turing. |
| 3:04 | Um cartucho é um conjunto de chips de ROM. Dentro dessa ROM tá gravado o programa do jogo e os dados |
| 3:10 | como os sprites, imagens e áudio que compõem o jogo. Mas é basicamente tudo uma sequência de |
| 3:16 | bits. Poderíamos escrever os bits todos numa fita. E de fato, antigamente a gente gravava programas |
| 3:22 | e jogos em fitas cassete. Quem é dos anos 80 deve se lembrar. Era lento pra cacete, mas disk drives |
| 3:28 | ainda eram muito mais caros. Mesmo um disco que tem num HD mecânico ou um CD-ROM é uma fita de |
| 3:34 | discos em círculo na mídia. O cartucho é como se fosse a tal fita na |
| 3:38 | máquina de Turing. Mais do que isso, sem pensar que existem todos esses elementos separados, do |
| 3:43 | ponto de vista da fita ou sequência de bits, são zeros e uns um atrás do outro. Se não ficou claro, |
| 3:50 | vamos pegar um trecho de assembly que eu mostrei no episódio do guia de introdução à computação, |
| 3:53 | instruções do 6502. Lá pelo minuto 49 do vídeo eu mostro uma sequência de instruções, lda ff, |
| 4:00 | sta 60 02. Vamos considerar que o programa são só essas duas linhas. Em hexadecimal |
| 4:05 | isso viraria a9 ff 8d 02 60. Em binário isso viraria esse numerozão aqui do lado. |
| 4:12 | Se eu jogar na calculadora, e convertermos pra decimal, essas duas linhas de código podem ser |
| 4:16 | representados pelo número trezentos e sessenta e cinco mil e tra la la que você pode ver aqui |
| 4:20 | do lado. Entendeu? O programa É esse número. 1010 1001 11111111 1000 1101 0000 0010 1100000 |
| 4:23 | 365068452192 Zeros e uns um atrás do |
| 4:26 | outro é basicamente um numerozão, em binário. No caso do cartucho do Super |
| 4:30 | Mario é um numerozão de mais de trezentos e vinte mil dígitos binários ou bits, pra |
| 4:36 | ser mais exato, porque são 40 kilobytes vezes um mil e vinte e quatro pra termos em bytes e vezes |
| 4:42 | oito pra termos quantos bits, já que 8 bits é 1 byte. Todo programa, não importa o comprimento, |
| 4:47 | é um numerozão. Todo programa que você já escreveu ou vai escrever pode ser representado |
| 4:53 | por um único número gigante. Não só o cartucho por ser representado por um |
| 4:57 | número, mas o funcionamento do nintendinho inteiro também pode ser representado por um numerozão. Uma |
| 5:03 | máquina universal de Turing pode pegar o tal número descritivo de uma máquina de Turing, |
| 5:07 | como o tal numerozão que representa o Nintendinho inteiro e simular. E o resultado dessa simulação |
| 5:13 | vai ser exatamente a mesma da máquina de Turing correspondente, o console de verdade. Então, |
| 5:18 | uma característica importante de uma UTM é sua capacidade de "simular" qualquer outra |
| 5:24 | máquina de Turing. Resumindo. Uma máquina de Turing ou máquina |
| 5:28 | de computar é um modelo abstrato capaz de ter um número finito de configurações ou |
| 5:33 | estados. Ele é alimentado com uma fita infinita de bits. A cada momento a máquina tá escaneando |
| 5:39 | somente um símbolo dessa fita de cada vez, e é automática porque a cada momento o estado da |
| 5:44 | máquina é determinado pelo símbolo, ou bit que ele tá lendo naquele instante. A grosso modo, |
| 5:49 | pense numa máquina de Turing como uma função ou método de qualquer linguagem de |
| 5:54 | programação moderna. O tal número descritivo representa o corpo |
| 5:59 | dessa função, o binário do programa. Esse número descritivo ou programa manipula |
| 6:04 | números computáveis, que na prática é quase todo número que você consegue pensar. E usa |
| 6:09 | o que Turing chamou de funções computáveis. De curiosidade, ao contrário dos números, |
| 6:14 | nem toda função é computável e existe muito mais funções não-computáveis do |
| 6:18 | que computáveis na real. Portanto uma máquina de Turing Não consegue computar qualquer coisa. |
| 6:24 | Existem funções que ela não tem capacidade de resolver. |
| 6:27 | Isso é um conceito importante porque a intuição popular é que dado tempo suficiente pra evolução |
| 6:33 | de chips e processadores, qualquer problema deveria ser possível de resolver com um |
| 6:37 | computador. Porém vale saber que existem problemas que um computador de Turing nunca vai resolver. |
| 6:42 | Um exemplo disso é o Halt Problem. E como é muita tangente pra hoje, recomendo assistir a explicação |
| 6:48 | do Tom Scott, que é outro canal que eu sigo faz anos. Apenas lembre disso: existem problemas que |
| 6:53 | são impossíveis de resolver com um computador. E não, um computador quântico ainda é uma máquina |
| 6:59 | universal de Turing. Daqui algumas décadas tem a possibilidade de ser ridiculamente mais rápido que |
| 7:04 | hoje, sem dúvida, mas não vai ter mais capacidades nem vai ser capaz de resolver problemas que já |
| 7:09 | não se resolve hoje. De qualquer forma, uma Universal Turing |
| 7:12 | Machine é uma máquina que pode pegar o número descritivo de alguma máquina de |
| 7:16 | Turing e simular ela perfeitamente. Então, pra resolver problemas de computação, |
| 7:21 | você pode escolher uma máquina de Turing adequada pra um problema específico, já que cada máquina |
| 7:26 | só consegue executar uma tarefa. Lembrem-se que antes disso uma máquina mecânica era |
| 7:31 | construída pra resolver só um tipo de problema. Agora você pode pegar uma máquina Universal, |
| 7:35 | carregar o número descritivo ou programa, que é o tal numerozão que expliquei antes, e simular |
| 7:41 | diversas máquinas de Turing. Esse é o conceito moderno de programação e computadores derivado dos |
| 7:47 | papers de Alan Turing. Na prática, computadores reais não são máquinas |
| 7:51 | de Turing nem máquinas Universais, pelo simples fato que elas tem limites e a |
| 7:56 | definição matemática tem o ideal de memória infinita. Mas, pra todos os efeitos e propósitos, |
| 8:01 | a revolução de Alan Turing foi conseguir definir a idéia e conceitos de uma máquina de uso geral, |
| 8:07 | em vez de uma máquina especializada como calculadoras por exemplo. Uma máquina de |
| 8:11 | Turing seria o que chamamos de "programa", o tal número descritivo seria a implementação desse |
| 8:17 | programa, uma máquina Universal é o computador propriamente dito que consegue rodar diversos |
| 8:23 | programas diferentes. Alguém me perguntou uma vez se uma calculadora |
| 8:26 | ou um ábaco não poderiam ser computadores já que "computam" números. E é uma pergunta |
| 8:31 | válida. Tecnicamente uma calculadora "e" um computador, intuitivamente, são máquinas de |
| 8:37 | calcular. E quando eu falo calculadora não estou falando de coisas como a TI-83 que |
| 8:41 | todo engenheiro que se preze conhece e usa. Uma TI-83 é definitivamente um computador inteiro, que |
| 8:47 | carrega programas de calcular e plotar gráficos e por isso consegue até rodar Doom nele. Estou |
| 8:53 | falando daquelas calculadoras velhas que se tinha nas mesas antigamente. |
| 8:56 | Na minha definição informal e não-rigorosa, eu costumo pensar num computador como uma máquina |
| 9:02 | que consegue simular qualquer outro computador, mesmo que bem mais lento. Performance não define |
| 9:08 | um computador, suas capacidades sim. E uma linguagem Turing Complete, pra mim, |
| 9:13 | é uma linguagem que consegue programar a simulação de outro computador. Se uma determinada máquina |
| 9:19 | consegue rodar um emulador, pra mim é uma máquina universal. E se a linguagem de programação é |
| 9:24 | capaz de escrever um emulador, pra mim ela é Turing Complete. É uma definição parcial, |
| 9:29 | mas eu gosto dela porque é bem prática. Não consegue escrever um emulador, essa linguagem não |
| 9:33 | é Turing Complete. Não consegue rodar um emulador, então não é um computador. |
| 9:37 | Recentemente um usuário que eu sigo no Twitter faz tempo, o @foone, ganhou o noticiário porque |
| 9:43 | ele fez Doom rodar num teste de gravidez! Pois é, a miniaturização chegou num tal ponto que dentro |
| 9:49 | de um mísero teste de farmácia, daqueles que tem uma telinha LCD bem podrona, tem um CPU turing |
| 9:55 | complete, capaz de minimamente executar um jogo ao ponto dele aparecer na tela e rodar. Lento, feio, |
| 10:01 | mas roda. Pára pra pensar numa coisa, todo teste de gravidez mais moderno é um computador inteiro, |
| 10:07 | com um programa feito pra rodar só uma vez e depois você jogar no lixo! Isso tudo dito, |
| 10:12 | não, ábaco não é um computador, a calculadora antiga de mesa não é um computador, mas um teste |
| 10:18 | de gravidez como esse definitivamente é um computador. |
| 10:22 | Toda vez que alguém fala coisas como "nossa, conseguiram rodar Doom numa TI-83 ou numa câmera |
| 10:28 | fotográfica" lógico, eu acho impressionante que alguém se deu a esse trabalho, mas eu não acho |
| 10:33 | surpreendente porque mesmo um computador fraco é capaz de simular outro computador, |
| 10:37 | só vai ser super lento. Mesma coisa quando alguém se impressiona quando vê uma distribuição Linux ou |
| 10:43 | mesmo Windows 95 rodando no Chrome ou Firefox, emulado via Javascript. Não me surpreende, |
| 10:48 | mas certamente impressiona, especialmente se você for iniciante. |
| 10:53 | Eu entendo a sensação. Eu me sentia da mesma forma nos anos 90, quando eu tinha um PC no |
| 10:58 | nível de um 486 ou Pentium, que sequer tinha 32 MEGAbytes de RAM, e de repente eu tava conseguindo |
| 11:05 | emular um nintendinho, que não fazia 10 anos só era possível jogar com um console de verdade. |
| 11:10 | Ou a primeira vez que eu instalei o sistema operacional OS/2 que vinha com um emulador |
| 11:14 | de MS-DOS e era possível até iniciar Windows 3.1 e rodar lado a lado dentro do OS/2. De qualquer |
| 11:21 | forma, esses conceitos explodiam minha mente nos anos 90 e eu entendo que todo iniciante |
| 11:25 | que vê isso pela primeira vez, mesmo hoje, deve ficar impressionado. |
| 11:28 | Agora, falando especificamente de emuladores. Um emulador simula um chip de outro computador |
| 11:35 | via software. Quando um emulador carrega o jogo de um cartucho, o jogo em si não tem idéia que |
| 11:41 | tá rodando num emulador. Pra todos os efeitos e propósitos, se o jogo tivesse consciência, |
| 11:45 | ele não teria dúvidas que tá rodando no console de verdade. No máximo ia estranhar, "nossa, |
| 11:51 | tá mais rápido esse hardware hoje". Esse é o Matrix de verdade e eu falei um pouco disso |
| 11:56 | no meu episódio sobre virtualização, dêem uma olhada. |
| 11:59 | Em particular sobre as discussões de ARM versus x86 que tá na moda agora, |
| 12:04 | isso é um daqueles eventos que só acontece um a cada vinte anos. Eu usava Macs em 2006 quando |
| 12:10 | aconteceu a transição de PowerPC pra Intel. Não vou entrar em detalhes dessas histórias porque |
| 12:15 | nesse momento todo canal de tech no YouTube já tem vídeos a respeito e seria só ser redundante. Mas é |
| 12:20 | relevante notar que em 2006 a Apple saiu de uma arquitetura RISC, de instruções reduzidas, pra |
| 12:26 | Intel que tem instruções complexas. Agora ela tá fazendo o oposto, saindo de instruções complexas |
| 12:32 | e indo pra arquitetura ARM, que é um RISC, de instruções reduzidas. |
| 12:36 | Pra nós programadores, uma coisa interessante é a camada Rosetta 2 que tem nos Mac OS a |
| 12:42 | partir do Big Sur. Ele é um emulador pra conseguir executar binários legados de x86, |
| 12:47 | convertendo as instruções pra ARM. Assim ele consegue rodar programas que não foram |
| 12:51 | recompilados e atualizados pro novo chip M1. Todo reviewer tá com a cabeça explodindo porque |
| 13:39 | o M1 já é mais rápido que modelos de notebooks PC comparáveis em preço aos novos Macbook Air |
| 13:46 | ou Macbook Pro 13 polegadas. Mais do que isso, todo mundo achava que rodar |
| 13:51 | um Photoshop ou Premiere sendo emulado pelo Rosetta seria provavelmente lento. |
| 13:56 | E eles tão abismados como a performance não só tá aceitável, mas tá realmente rápido, |
| 14:01 | sem engasgos nem nada. Bem diferente de quando pulamos de PowerPC pra Intel em 2006. Sério, |
| 14:08 | eu lembro de usar o primeiro Rosetta nos Macbook brancos Intel e rodar qualquer coisa pelo Rosetta |
| 14:13 | era super lento. Dava desgosto de usar. Mas nos M1 de agora, ao que tudo indica, vai rodar |
| 14:18 | quase que igual à velocidade de quando rodava no Macbook Intel. |
| 14:22 | Eu fiquei pensando sobre isso e vale lembrar um dos motivos possíveis. Todo mundo tá cansado de |
| 14:28 | ouvir que a diferença de chips x86 e ARM é que um tem instruções mais complexas e o outro tem |
| 14:34 | instruções mais simples. Pense por um segundo no que isso significa. A cada clock o processador |
| 14:40 | executa uma ou mais instruções. Quanto mais instruções for possível executar por clock, |
| 14:45 | maior a velocidade e menor o consumo de energia. O problema de instruções de complexidade variada |
| 14:51 | é que é difícil de adivinhar quantas instruções dá pra rodar a cada clock. Pra ser mais exato, |
| 14:56 | uma instrução x86 pode ser de um até 15 bytes de comprimento. |
| 15:01 | Por causa disso um processador Intel costuma executar algo em torno de quatro instruções |
| 15:07 | por clock. Isso é horrível, porque faz de conta que chegamos numa parte do programa que tem 10 |
| 15:13 | instruções simples de um ou 2 bytes um atrás do outro. Talvez o processador pudesse rodar oito, |
| 15:19 | dez ou mais instruções dessas no mesmo clock. Mas como nem sempre dá pra saber se cabe ou não, |
| 15:25 | ele roda só quatro. E fazendo isso ele tá desperdiçando clock, |
| 15:28 | desperdiçando energia. E sem mudar a arquitetura de instruções, o pipeline sempre vai ser curto e |
| 15:34 | isso é inerente a ser um x86. Agora, processadores ARM tem instruções ou de 16 |
| 15:40 | ou de 32 bits, ou seja, de 2 ou 4 bytes. E só. E eles não se misturam. Ou você tá executando |
| 15:46 | instruções de 32-bits ou de 16-bits. Pra mudar entre um ou outro você manda uma instrução pra |
| 15:51 | mudar o mode. Isso significa que você sempre sabe exatamente o tamanho das instruções e com |
| 15:57 | isso pode configurar um pipeline mais longo por clock. Em particular, o chip M1 da Apple |
| 16:02 | consegue executar oito instruções por clock. Só em profundidade desse pipeline, um chip M1 de |
| 16:08 | 2Ghz tem potencial de ser duas vezes mais veloz e eficiente do que um chip Intel equivalente de |
| 16:14 | 2Ghz. Mais do que isso, um chip M1 de 2Ghz pode ser competitivo com um chip Intel de 3 ou até |
| 16:21 | 4Ghz, por isso você tanto ganho de bateria e menos calor sendo dissipado. |
| 16:26 | Mas não é só isso. Considere o aspecto de emulação. Pra um chip ARM emular Intel é |
| 16:32 | relativamente mais fácil do que Intel emular ARM. Por que? Porque como ARM tem instruções simples, |
| 16:38 | ou seja, mais básicas, ela consegue emular facilmente qualquer instrução mais complexa |
| 16:43 | de Intel. Por exemplo. Pra facilitar a explicação imagina se fossem processadores |
| 16:47 | gráficos. Digamos que em ARM existam funções como desenhar uma linha, desenhar um círculo, |
| 16:54 | desenhar um triângulo. Porém, em Intel existem funções mais complexas |
| 17:00 | como, desenhar um botão, desenhar uma janela. Entenderam o que significa quando se fala em |
| 17:04 | diferença de complexidade? Um só desenha linhas o outro numa única instrução já desenha um botão |
| 17:10 | inteiro. Com instruções nesse ARM hipotético, como desenhar linha, eu consigo desenhar os |
| 17:16 | botões ou janelas. Só vai dar mais trabalho porque eu preciso desenhar linha a linha. Se eu fosse um |
| 17:22 | programador de assembly que precisa usar só essas instruções, seria um parto fazer isso. Mas como |
| 17:27 | hoje escrevemos tudo em C ou outras linguagens, não faz diferença. Quem vai ter mais trabalho |
| 17:32 | vai ser o compilador e não o programador. Agora, se eu só tenho instruções complexas, |
| 17:37 | como desenhar o botão inteiro, como que eu desenho só uma linha? Fácil, eu faço um botão com 1 pixel |
| 17:44 | de comprimento. Só que agora eu tô gastando o tempo de processamento de desenhar um botão |
| 17:48 | inteiro pra fazer uma simples linha, portanto vai ser mais lento. |
| 17:52 | Pra piorar a situação, pra rodar instruções de x86, você precisa fazer o equivalente a passar |
| 17:58 | argumentos pra uma função, como num javascript por exemplo. No caso, os argumentos você preenche |
| 18:03 | em registradores e depois chama a instrução, que seria o equivalente de uma função. Ou seja, existe |
| 18:09 | um número limitado de argumentos que uma instrução pode receber, porque existem poucos registradores, |
| 18:15 | que funcionam como variáveis globais numa linguagem como Javascript ou PHP. Pois bem, |
| 18:20 | processadores x86 como Intel de 32-bits possui só 8 registradores de uso geral. Os processadores x86 |
| 18:28 | de 64-bits que a maioria de nós usa hoje tem 16 registradores de uso geral. |
| 18:33 | Adivinha quantos registradores tem um processador ARM de 32-bits? Dezesseis! E quantos tem o ARMv8 |
| 18:41 | de 64-bits? Trinta e dois registradores. O dobro dos equivalentes x86. Ou seja, fodeu, pra um |
| 18:48 | Intel emular uma instrução ARM que tem o dobro de registradores, ele vai ser obrigado a fazer vários |
| 18:53 | truques pra lidar com argumentos que não cabem em todos os registradores que ele tem, e, de novo, |
| 18:59 | a performance vai ser necessariamente mais baixa. No lado oposto, um chip Apple M1 que é um ARM de |
| 19:04 | 64-bits, ele consegue facilmente emular qualquer instrução de x86 64 bits, porque tem registradores |
| 19:11 | sobrando. Então a programação não precisa de truques, é super direto. |
| 19:15 | No frigir dos ovos? É uma ordem de grandeza mais simples e mais performático pra um |
| 19:20 | processador ARM emular binários de x86 do que o oposto. O Rosetta de de 2006 era lento, |
| 19:26 | porque ele tava justamente na situação oposta: precisava fazer os antigos processadores Intel |
| 19:32 | dos novos Mac emular binários legados de PowerPC que é uma arquitetura RISC como ARM, |
| 19:38 | era o caso de ter que usar uma função complexa que desenha um botão e desperdiçar o processamento |
| 19:43 | pra emular uma linha. É um dos motivos de porque é mais difícil ter |
| 19:48 | emuladores de processadores RISC rodando bem em cima de um processador Intel. Por exemplo, |
| 19:53 | até hoje não é performático emular os antigos PowerPC pra rodar Mac antigo. Da mesma forma |
| 19:58 | é lento emular chips de smartphone, como os da Qualcomm que tem na maioria dos celulares |
| 20:03 | Android que usamos. Já o inverso é mais rápido. Por isso eu fiquei um pouco decepcionado com o |
| 20:08 | processador SQ1 que a Microsoft criou em parceria com a Qualcomm pra equipar |
| 20:13 | os Surface Pro X. O SQ1 é um Apple M1 piorzinho. Também é |
| 20:19 | um chip ARM e tá rodando Windows 10 compilado pra ARM, como o Big Sur no caso do Mac. E pra |
| 20:25 | rodar programas legados de x86, ele também roda um emulador. Até hoje tá limitado a rodar binários de |
| 20:31 | 32-bits e mesmo assim roda muito lento. Tá pra sair o suporte a emular binários de 64-bits, |
| 20:37 | e a expectativa é que seja um pouco melhor, mas mesmo assim ainda atrás da Apple. Talvez |
| 20:41 | você nem tenha ouvido falar do Surface Pro X, mas não é de hoje que a Microsoft vem |
| 20:45 | tentando usar chips ARM também. A Apple não foi a primeira, mas pra variar, foi a que |
| 20:50 | entregou mais bem feito. O fato de emular x86 em cima de ARM não ser |
| 20:55 | tão difícil e não representar uma perda tão significativa de performance é importante, |
| 21:00 | porque com Windows, MacOS e Linux ganhando cada vez mais otimizações pra ARM, significa que a |
| 21:06 | hegemonia da Intel tá com os dias contados. Por causa dos smartphones a tecnologia ARM evoluiu |
| 21:12 | bastante e em ambiente móvel, a Intel simplesmente não tem como competir. E agora esses processadores |
| 21:18 | tão pulando pra notebooks e desktop, e já tão bons. E com emuladores ninguém vai ficar preso |
| 21:23 | em Intel por causa de aplicativos legados. E se esse caminho der certo, em breve esses chips ARM |
| 21:29 | vão invadir em massa o ambiente de servidores. Aliás, o maior supercomputador do mundo já usa |
| 21:34 | ARM. E isso poderia representar o último prego no caixão da Intel. Ela vai precisar se mexer |
| 21:40 | rápido pra evitar isso. Eu vou falar um pouco mais sobre ARM no próximo |
| 21:44 | episódio, mas de qualquer forma a comunidade de desenvolvimento de emuladores é grande. Eu |
| 21:49 | sempre fico impressionado porque na maior parte são voluntários trabalhando só pelo prazer de |
| 21:54 | ver as coisas funcionando mesmo, já que não se pode ganhar muito dinheiro em cima de jogos que |
| 21:58 | ainda tem licenças e copyrights, especialmente se mexer em consoles da Nintendo. Nunca mexa com |
| 22:04 | a Nintendo, é processo garantido e muita diversão pra se livrar. A única exceção é se você vive na |
| 22:09 | China, daí você tá seguro. Não dá pra falar de emuladores e não tocar no |
| 22:14 | assunto de pirataria. É um assunto controverso, ser a favor ou contra direitos autorais e eu vou |
| 22:19 | dizer que sou neutro nessa discussão. Não tenho uma solução completa nem pra um lado, |
| 22:23 | nem pro outro. Então não vou tentar argumentar hoje. Mas sim, como todo mundo, eu já pirateei |
| 22:28 | muito quando era moleque. Eu teria tido muito mais dificuldade pra começar a ganhar dinheiro se não |
| 22:32 | fosse pela pirataria naquela época, então tem esse ponto mesmo. Hoje em dia não tenho esse problema, |
| 22:37 | então não tenho motivos pra piratear e pago tudo que eu uso, acho justo. |
| 22:41 | Mesmo assim, existem software antigos especialmente de lugares como Japão por exemplo, |
| 22:46 | que mesmo eu querendo comprar, não existe pra vender, e nesse caso a pirataria tem a |
| 22:51 | função de preservar software do passado. E isso é outro fator importante. Então, se você é a favor |
| 22:57 | ou contra, não sou eu que vou te julgar. Isso tudo dito, assim como todo YouTuber que fala do |
| 23:02 | assunto, eu não vou dizer onde você encontra jogos pirata, mas qualquer um que saiba usar Google e |
| 23:06 | sabe diferenciar de um malware, vai achar o que procura sem muito trabalho. |
| 23:10 | E por hoje é isso aí! Já divaguei bastante e vai ter mais nerdice no próximo episódio. Eu |
| 23:16 | sei que o assunto do Apple M1 tá na cabeça do povo, mas não pretendo fazer um video só |
| 23:20 | sobre isso porque já tem bastante, mas de vez em quando vou salpicando algumas curiosidades como |
| 23:25 | fiz hoje e vou fazer no próximo. Se ficaram com dúvidas não deixem de mandar nos comentários, se |
| 23:30 | curtiram o video mandei um joinha e compartilhem o video com seus amigos, assinem o canal e não |
| 23:36 | deixem de clicar no sininho pra não perder os próximos videos. A gente se vê, até mais! |
