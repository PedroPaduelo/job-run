# Qual a REAL diferença entre Arquivos Binário e Texto?? 🤔

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=oSCVb4Ts-G4
- **Duração:** 30:57
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Dois videos atrás comecei a falar   sobre segurança, mas pra continuar eu preciso começar a complementar o assunto de introdução |
| 0:09 | a computadores com um pouco mais de escovação de bits. Se você assistiu todos os meus vídeos pelo |
| 0:15 | menos já sabe um pouco de como um computador funciona. Como você pode carregar um programa   via uma ROM por exemplo, como ele vai instrução a instrução, preenche registradores com resultados, |
| 0:25 | depois você pode endereçar coisas na RAM e assim por diante. Nos episódios que falei da máquina universal de Turing e a arquitetura de Von Neumann, você |
| 0:34 | já sabe que uma característica importante é o fato de programas e dados compartilharem o mesmo espaço |
| 0:39 | numa fita e como o computador vai lendo um bit de cada vez dessa fita, seja lendo ou escrevendo |
| 0:45 | nela. Todo iniciante sabe que computadores lidam com bits e bytes. Mesmo assim muitos |
| 0:50 | tem dificuldade de entender o que de fato isso significa. Hoje vou falar um pouco sobre formatos   de arquivos, mais especificamente sobre qual a relação de arquivos binários ou textos planos, e |
| 1:00 | no final espero que vocês tenham uma noção melhor de como as coisas funcionam por baixo dos panos. |
| 1:05 | Hoje vamos literalmente escovar bits. (...) |
| 1:16 | Vamos começar com uma coisa muito simples, o famoso Hello World, mas escrito em C, |
| 1:21 | que é esse codigozinho idiota aqui do lado. Em C a gente declara dependência ao arquivo   stdio.h ou standard i/o ponto header, porque é um arquivo de cabeçalho. Todo programa em |
| 1:32 | C inicia nessa função `main` e dentro temos a chamada da função `printf` que só existe |
| 1:38 | porque incluímos o stdio.h antes. Passamos a string `Hello World` e finalmente retornamos |
| 1:43 | 0 que indica pro sistema operacional que o programa terminou com sucesso. E é só isso,   depois desse ponto o programa termina e sai. |
| 1:51 | Eu escrevi esse código usando um editor de textos, no caso o Vim no meu Linux. E salvei |
| 1:57 | num arquivo chamado hello.c. Se você for total iniciante poderia pensar "ah, isso é um programa, |
| 2:03 | portanto posso tentar rodar esse programa né?" É uma pergunta válida. E se tentarmos "rodar" |
| 2:08 | esse arquivo? Você começou a estudar um pouco de Linux, pra executar alguma coisa que tá no   mesmo diretório pode simplesmente escrever ponto barra pra dizer que não é pra procurar no PATH e |
| 2:18 | sim no diretório atual, daí hello ponto c e ... permission denied, fuck. Mas você sabe como resolver! Google! E como mostra no primeiro link, claro, |
| 2:28 | precisa dar permissão pra execução nesse arquivo. No Windows basta que alguma coisa   termine em ponto exe ou ponto bat que executa, mas no Linux precisa fazer `chmod +x hello.c` e |
| 2:40 | agora dá pra tentar de novo e ... what the fuck, vários erros. “Essa porra de C é difícil mesmo, |
| 2:45 | melhor voltar pro CSS” (ba dum). Não, tô zoando. Esses erros não são de C. Quando |
| 2:51 | você tenta executar um arquivo de texto na realidade ele tá fazendo o shell executar.   Isso é o mesmo que executar `bash` e passando `hello.c` como parâmetro. Bash ou Zshell ou |
| 3:01 | Fish ou Powershell são interpretadores, que recebem comandos direto que você digita direto |
| 3:07 | na linha de comando ou via um script, que é o que o bash tá achando que é esse hello   ponto c. Os erros que estamos vendo não é de C e sim de Bash. |
| 3:16 | Já já volto pra interpretadores, mas falando sério, eu espero que a esta altura você saiba |
| 3:21 | que C primeiro precisa ser compilado, que em resumo é transformar esses comandos que eu |
| 3:27 | escrevi num binário compatível com o processador por baixo. E pra isso podemos usar clang ou gcc, |
| 3:33 | mas pra ser old school vou usar gcc. Um simples `gcc hello.c -o hello`. E pronto, agora posso |
| 3:40 | executar ponto barra hello e boom, Hello World, que era o que eu queria. Se você já é programador isso deveria ser trivial, mas vamos pensar como iniciantes. |
| 3:48 | Porque isso que eu fiz funciona? No Linux temos comandos como `cat` que lêem o conteúdo |
| 3:54 | de um arquivo e imprime na tela. Se eu der `cat hello.c` aparece o que eu escrevi. Mas |
| 3:59 | se eu der `cat hello` vem esse monte de lixo. O que é esse monte de lixo? Pra entender isso |
| 4:04 | temos que dar um passo pra trás. Relembrem o computador de Turing. Ele entende   uma fita de bits. Toda memória, seja RAM ou ROM, todo SSD ou HD ou pen drive ou, no nosso caso, |
| 4:15 | arquivo texto ou arquivo binário é só isso: uma fita de bits. O comando `cat` que usamos |
| 4:21 | na verdade faz mais do que só ler um arquivo: ele traduz o conteúdo de um arquivo. E ele é burrinho, |
| 4:26 | a única coisa que ele faz é tentar converter uma fita de bits em uma representação   de texto. Uma coisa que hoje é meio padrão é que |
| 4:33 | representamos texto humanamente legível usando uma tabelona chamada UNICODE. Até pouco tempo atrás, |
| 4:40 | antes de UNICODE se disseminar, usávamos uma tabela menor chamada ASCII. Unicode é um assunto |
| 4:46 | super cabeludo que tem vários posts e videos já explicando por isso não vou detalhar demais, |
| 4:51 | entenda que é complexo. Se você acha que entende tudo de Unicode,   você não entende Unicode. Em vez de usar o comando `cat` vamos usar o |
| 4:59 | comando `xxd` que se não me engano já mostrei no video de aprendendo sobre computadores com super |
| 5:04 | mario. Se fizermos `xxd -b hello.c` vamos ver a fita de bits organizado em colunas de 8 bits |
| 5:12 | que é um byte, 6 bytes de cada vez pra caber na tela. Na esquerda temos a posição desses bytes, |
| 5:18 | contado em hexadecimal, não confundir com decimal. Podemos contar assim: começa na posição zero, |
| 5:23 | daí um, dois, três, quatro, cinco, daí pula pra próxima linha começando na posição seis,   continua, sete, oito, nove, “A”, porque dez em hexadecimal é A, daí onze é B e pula de |
| 5:33 | linha e continua na linha seguinte na posição C e assim por diante. Na coluna da direita temos a tradução desses bytes usando a tabela ASCII. Então vemos o segundo byte |
| 5:43 | por exemplo, zero um um zero um zero zero um que é a letra "i". Note que temos outro "i" na palavra |
| 5:49 | `stdio` e esse "i" está no segundo byte da linha que começa no endereço "C" que falei antes. Viu? |
| 5:55 | Olha como o primeiro "i" e o segundo "i" é a mesma sequência zero um um zero um zero zero um. A gente |
| 6:01 | traduz os bytes em letras que conseguimos ler, mas o computador só vê isso, uma fita de bits. Por |
| 6:07 | convenção quebramos a fita em blocos de 8 bits, que chamamos de bytes. E 1 byte, na tabela ASCII, |
| 6:13 | traduz pra uma letra. O que é uma tabela ASCII? Todo computador   hoje vem equipado com essa tabela pré-instalada. Entenda assim: uma CPU sozinha não faz nada. |
| 6:22 | Você liga a energia e ela fica só lá sentada esperando. Relembre o video do Guia mais hardcore |
| 6:28 | de introdução à computação. Nele eu mostro como gravamos um programinha num chip de EPROM e a |
| 6:33 | CPU sempre vai procurar alguma coisa num certo endereço de memória pra começar a executar. De   forma simplificada, num computador moderno esse chip de EPROM é o que chamamos de “firmware” ou |
| 6:43 | BIOS. Por iss,o se você já atualizou o firmware sempre vem avisos de não interromper o processo   no meio. Porque se falhar a atualização do firmware, o computador vai ficar sem |
| 6:53 | o programa que inicia tudo. BIOS é acrônimo pra sistema básico de entrada   e saída. E firmware é uma classe específica de programas que oferece funções que chamamos de |
| 7:03 | baixo nível. Por exemplo, seu Windows ou Linux tá instalado num HD, mas pra saber que o HD |
| 7:08 | existe e como ler bits do HD e depois identificar que tem pentes de RAM e carregar o Linux na RAM, |
| 7:14 | você precisa de um programa antes. Esse programa é o firmware, que oferece funções básicas pra |
| 7:19 | se comunicar com dispositivos de entrada e saída, como a memória. Se você assiste canais de montagem de PCs como o Linus Tech Tips, vai ver eles sempre |
| 7:29 | se preocupando num tal de POST depois que o computador liga. POST é acrônimo pra Power |
| 7:35 | On Self Test ou auto-teste depois de ligar. É a BIOS rodando e identificando corretamente |
| 7:41 | todo o hardware. Depois desse teste é que ele começa a sequência de boot do sistema operacional, |
| 7:46 | procurando numa ordem específica tipo pendrive antes do HD por exemplo. E se for HD procurando |
| 7:52 | numa posição específica do HD. No caso do formato antigo MBR ou Master Boot Record,   são os primeiros 512 bytes da primeira partição do HD. |
| 8:01 | Enfim, sem dar muita tangente, uma das coisas que a BIOS carrega é uma tabela de conversão de bits |
| 8:07 | pra letras que um ser humano consegue ler. Essa é a tabela ASCII, por isso logo que você liga o |
| 8:13 | computador, ele tem a habilidade de escrever textos na tela pra mostrar o boot antes mesmo |
| 8:18 | do sistema operacional iniciar. É o que ele usa pra montar a tela de configuração da BIOS quando   você aperta F12 por exemplo. Se não ficou claro a importância disso, lembram do episódio de video |
| 8:29 | game? Um videogame bem antigo, tipo nintendinho de 8-bits da vida? Então, essa é uma época onde |
| 8:34 | chips de memória eram bem caros. Um chip de 64 kilobytes podia ser tão caro quanto hoje |
| 8:39 | é um pente de 64 GIGABYTES. Por isso você não podia desperdiçar um byte. Uma das formas de economizar memória é que a BIOS de um videogame antigo é tão simples que |
| 8:50 | ele sequer sabe converter bytes em letras. Aliás, um console de 8-bits eu acho que nem |
| 8:55 | tinha equivalente de BIOS, bootava direto do cartucho. Já notou que todo jogo antigo tem   fontes diferentes? Não é porque o sistema vem com várias fontes, que nem hoje você tem Arial |
| 9:04 | ou Verdana ou Times pra escolher. As tais "fontes" precisavam vir na ROM do cartucho, |
| 9:10 | de cada jogo. E pra economizar espaço eles só colocavam as letras e símbolos que de fato o   jogo fosse usar. Se tivesse alguma letra não precisava, ele pulava. Vamos dar um exemplo, |
| 9:19 | vamos abrir a ROM de um jogo antigo como o Super Mario original com o emulador Mesen. |
| 9:24 | Só um parêntese aqui, o Mesen é um excelente emulador se você quiser escovar bit de |
| 9:29 | binário de cartuchos porque ele tem várias ferramentas de debugging, você pode escrever   assembly de 6502 e ele vai converter pro binário e inserir onde você quiser, pode colocar pontos |
| 9:40 | de parada, vasculhar valores nos registradores e tudo mais. Vale a pena pra quem quiser fuçar mais |
| 9:45 | a fundo. Mas pra agora vamos usar uma ferramenta que mostra o conteúdo de segmentos de sprites |
| 9:51 | do cartucho de forma visual. Vamos direto pra região de memória do cartucho   que, por convenção, se chama CHR ou characters. Olhem aqui as letras desenhadas do jogo, |
| 10:02 | literalmente caracteres. Como eu expliquei no outro video um Nintendo de 8-bits lida com sprites |
| 10:07 | em vez de pixels individuais, que são conjuntos de oito por oito pixels. Por acaso o caracter"1" está |
| 10:13 | na posição 1, a "2" está na posição 2 e assim por diante. Pense nessa região de memória como |
| 10:18 | hoje seriam as fontes True Type ou Open Type que você de front-end e CSS tá cansado de ver. Fontes |
| 10:24 | modernas carregam em alguma região específica da memória e ocupam espaço. O problema é que pra representar as letras de oito por oito pixels em memória, só de zero a |
| 10:35 | nove e de A a Z são oito vezes oito vezes trinta e seis letras, o que dá dois mil e trezentos bytes |
| 10:41 | ou mais de 2 kilobytes. A ROM do Super Mario inteiro ocupa 40 kilobytes, então |
| 10:46 | 5% do cartucho já tá ocupado só com essas letras. Por isso evita-se fazer letras maiores, opções de |
| 10:53 | maiúscula e minúscula, porque só de fazer isso ia quase dobrar o espaço usado. Pra entender a importância de economizar espaço, por volta de 1982, 1 megabyte custava mais de |
| 11:04 | 4 mil dólares. Só esses 2 kilobytes representavam pelo menos 7 a 10 dólares! Consegue imaginar isso? |
| 11:11 | Uma moeda de um quarter ou 25 centavos pra cada letra que eu acabei de mostrar. Em 1990, |
| 11:17 | quase 10 anos depois, o mesmo megabyte caiu de 4 mil dólares pra menos de 100 dólares. E é por |
| 11:22 | isso que só a partir dos anos 90 começa a ficar viável fazer coisas que desperdiçam   memória massivamente como interfaces gráficas e fontes variadas pré-instaladas. Nos dias de hoje, |
| 11:32 | 1 megabyte é super insignificante, é só uma fração de centavo, de Real. Quando os microcomputadores começaram a se popularizar, |
| 11:39 | uma coisa que era meio necessário era ter um mínimo de fontes pré-instaladas pra podermos |
| 11:45 | digitar alguma coisa e pro computador conseguir nos mostrar mensagens na tela. E com o tempo |
| 11:50 | passamos a adotar a convenção da tabela ASCII, pra ser possível transferir um arquivo texto   de um computador pra outro de outro fabricante. Se cada fabricante usasse tabelas diferentes, |
| 11:59 | o arquivo texto só ia conseguir ser lido num outro computador do mesmo fabricante. No caso dos videogames com cartucho como Super Mario que eu mostrei, o código 1 representa o |
| 12:09 | símbolo gráfico 1. Pra escrever meu nome, AKITA, eu representaria na memória como   os códigos hexadecimais 0A, 14, 12, 0D e 0A de novo. Isso ocupa 5 bytes, porque cada número em |
| 12:21 | hexadecimal representa 4 bits, dois números são 8 bits, portanto 1 byte. Meu sobrenome tem 5 letras, |
| 12:28 | portanto 5 bytes. Em um byte é possível ir de 00 até FF que seria 256 opções. Mas no nosso caso |
| 12:34 | a tabela termina no código 24. Depois da última letra, do código 25 pra cima ele mapeia pra outros |
| 12:39 | sprites que são os desenhos tipo dos blocos que o Mario quebra, dos sprites que formam personagens   como o próprio Mario ou os Goombas. Pra ter uma imagem na cabeça, o que hoje eu |
| 12:47 | chamaria de tabela de fontes, de uma Arial ou Times, no cartucho de um nintendo é essa área de |
| 12:53 | memória da ROM chamada CHR e as fontes são todos os sprites do cartucho. É como se fizéssemos um |
| 12:59 | jogo só com as letras que aparece no seu teclado, que o povo fazia mesmo, em DOS antigo. Mas num |
| 13:04 | console ou microcomputadores dos anos 80 como os Vic-20, ZX Spectrum, a gente substituia os |
| 13:10 | caracteres de texto pra caracteres "gráficos". Por isso em teclados de VIC-20 ou Commodore 64 |
| 13:16 | você até já tinha uma tabela alternativa de caracteres, e com eles você podia desenhar na   tela sem precisar especificar pixel a pixel toda hora. Pode ser meio complicado de visualizar se |
| 13:26 | você nunca viu isso, então recomendo assistir o canal do 8-Bit Guy, em particular sobre os   computadores da Commodore. Voltando ao nosso exemplo do hello.c, vamos abrir |
| 13:35 | o binário do arquivo texto em formato hexadecimal. É a mesma coisa. Note que o segundo caracter é a |
| 13:41 | letra "i" que a gente viu em binário agora pouco, em hexadecimal é o código 69. Daí na mesma linha |
| 13:47 | temos o "i" da palavra "stdio" que é a terceira letra da direita pra esquerda e, claro, temos o |
| 13:53 | código 69. Na tabela que temos pra representar as letras, o código 69 é "i", então o código 70 |
| 13:58 | vai ser "j", 71 vai ser "k" e assim por diante até Z. Por acaso todo PC usa a mesma tabela e o nome |
| 14:05 | dessa tabela é a tal ASCII. ASCII é abreviação pra American Standard Code |
| 14:10 | Information Interchange. Essa conversão se iniciou na época dos telégrafos, então é lá pelo meio |
| 14:16 | do século XX. E foi estabelecido um padrão de 7-bits pra trocar textos. 7 bits é suficiente |
| 14:22 | pra armazenar 2 elevado a 7 ou seja 128 caracteres. Contando 10 números,   mais 26 letras do alfabeto em maiúscula, mais 26 letras em minúscula, já ocupamos metade da |
| 14:32 | tabela. O resto é ocupado por símbolos como os aritméticos de adição ou subtração, parênteses, |
| 14:37 | colchetes e assim por diante. 7-bits é suficiente pra maior parte dos textos   escritos em inglês e sobra algum espaço ainda pra alguns caracteres acentuados. |
| 14:46 | Claro, ASCII, sendo um padrão americano, funciona bem pra qualquer língua próxima   do inglês. Português usa uma variação que encaixa coisas como cedilha. Espanhol precisa no “N” com |
| 14:57 | til e interrogação ao contrário. Outros países adotaram tabelas alternativas. Imagina no Japão |
| 15:02 | por exemplo. 128 caracteres não cabe nem uma fração de todos os símbolos que se precisa |
| 15:07 | como os famigerados Kanjis. Pra comportar mais caracteres precisamos de mais bytes   e daí nasceram extensões como o padrão EUC que é Extended Unix Code e pro Japão em particular |
| 15:18 | tem o EUC-JP. Pra China tem EUC-CN, pra Coréia tem EUC-KR e assim por diante. |
| 15:23 | Tecnicamente um EUC-JP é mais compatível com ASCII porque em códigos que começam com 0, |
| 15:30 | ou seja de 7-bits, ele corresponde aos mesmos códigos da tabela ASCII e por isso foi usado em |
| 15:36 | coisas como UNIX versão internacional. No Japão surgiram mais de uma tabela. Apesar da EUC-JP ser |
| 15:42 | mais simples pra usar em conjunto com caracteres ASCII não foi a mais usada. A que eu mais vejo é |
| 15:47 | a Shift-JIS que foi criada, ironicamente, pela ASCII Corporation do Japão e pela Microsoft. |
| 15:53 | Quando se usa caracteres de 2 bytes, o Shift-JIS é uma dor de cabeça quando mistura caracteres |
| 15:59 | ASCII porque tem ambiguidade do mesmo código ser usado pra símbolos diferentes dependendo |
| 16:04 | de como foi codificado. O importante é entender que línguas como chinês,   coreano ou japonês são formados por ideogramas, e não sílabas com consoantes e vogais. Então precisa |
| 16:14 | haver uma forma de mapear milhares de símbolos. Com um único byte podemos mapear não mais que 256 |
| 16:20 | caracteres. Pra manter 1 byte precisam ser usados tabelas diferentes pra mapear o mesmo número pra |
| 16:26 | símbolos diferentes. Você imagina a dor de cabeça de ficar trocando entre tabelas diferentes. Quando |
| 16:31 | usamos 2 bytes, aí as possibilidades aumentam pra 2 elevado a 16, que dá mais de 65 mil símbolos |
| 16:37 | possíveis e aí já cabe quase tudo que precisa. Em Unicode temos UTF-8 pra linguagens ocidentais que |
| 16:44 | se aproxima da tabela ASCII e UTF-16 ou UTF-32 pra outras línguas por exemplo. Quanto mais bytes se |
| 16:49 | usa por caracter, mais espaço é desperdiçado num arquivo de texto. Agradeça por ser programador num país ocidental que pode usar só ASCII ou UTF-8, porque coisas |
| 16:59 | simples como gravar um arquivo texto é simples. Em chinês ou japonês, especialmente se tiver que |
| 17:05 | lidar com tabelas antigas como EUC-CN em vez de só Unicode, você ia chorar lágrimas de sangue. |
| 17:10 | Imagine fazer coisas como algoritmos de procura de palavras, algoritmos de ordenação de palavras, |
| 17:15 | algoritmos de encontrar palavras similares. Coisas que mesmo em inglês ainda não é perfeito |
| 17:21 | como transcrever um áudio em palavras. É muito mais complicado. Aproveitando essa tangente vale falar de problemas de segurança que apareciam quando você entende que |
| 17:31 | tá num mundo que representa letras diferente do padrão ASCII. Os símbolos em pixels que desenha |
| 17:37 | na tela, que num nintendinho chamamos de sprites, no mundo de fontes chamamos de glifos. Agora, |
| 17:42 | a letra maiúscula "A" em latim, ou a mesma letra em cirílico, ou a mesma letra em grego, |
| 17:48 | todas têm a mesma imagem ou glifo de "A" nosso, mas cada um é um código diferente nas tabelas |
| 17:54 | Unicode. No caso são respectivamente os códigos 41, 410 e 391. Porque isso é importante? Porque |
| 18:01 | eu poderia registrar um domínio que já existe, digamos example ponto com e trocar o código UTF-8 |
| 18:06 | do "a" minúsculo ASCII pro “a” minúsculo em cirílico. Humanos vão enxergar escrito   "example" mas são duas palavras diferentes, com códigos diferentes. |
| 18:12 | Não entendeu? Em binário, via UTF-8 ou ASCII, é assim que a palavra `example` é representado: |
| 18:19 | `65 78 61 6d 70 6c 65 0a` mas e se trocarmos pelo "а" em cirílico, que é o alfabeto russo? Ele fica   diferente e 1 byte mais longo, assim `65 78 d0 b0 6d 70 6c 65 0a` esse `d0b0` é a letra "a" |
| 18:29 | em cirílico. Se abrirmos com o `xxd`, que tenta representar segundo a tabela ASCII, ele não sabe |
| 18:35 | que letra é, então bota pontos no lugar. São dois bytes que não representam nada na tabela ASCII e |
| 18:41 | isso quebra a palavra pra gente. Mas num navegador que entende Unicode, você abre |
| 18:46 | no gmail um e-mail com um link que claramente diz facebook ponto com. Mas o "a" não é o código 61 e |
| 18:53 | sim o 430 em cirílico. Mas você não tem como saber a diferença só olhando pro glifo. Esse |
| 18:58 | tipo de ataque era possível antigamente mas hoje em dia não mais porque os registras filtram quando |
| 19:04 | você tenta registrar. Era um tipo de spoofing via registro de domínios fakes. É semelhante a |
| 19:09 | um typosquatting que é quando você registra domínios que soam parecido com o original   mas com um errinho que pode passar batido se você lê rápido, ou tá acostumado a falar que |
| 19:19 | nem uma criança, por exemplo `santader.com` em vez de `santaNder.com`. Voltando ao nosso exemplo original do hello world. Aprendemos que nosso arquivo `hello.c` é |
| 19:28 | o que chamamos de um arquivo plain text, ou texto plano, que é um arquivo que contém apenas binários |
| 19:35 | que mapeiam pra algum caracter numa tabela como ASCII. Mas pra todos os efeitos práticos, |
| 19:40 | um arquivo texto também é um arquivo binário. A extensão não modifica nada no arquivo,   é só uma convenção. Dentro dele tem uma fita, uma cadeia de bytes onde cada byte, |
| 19:51 | de acordo com a tabela UTF-8 ou ASCII mapeia cada byte pra um glifo, um desenho de uma letra, |
| 19:57 | número ou símbolo qualquer. Eu estou sendo bem demorado nessa explicação   porque vocês precisam entender desde cedo que o que você enxerga como “texto” é apenas |
| 20:07 | uma representação do shell ou do editor de textos, o arquivo que ele abre é um binário |
| 20:13 | como qualquer coisa no sistema. Tudo é binário. O que popularmente chamamos de “binário” é um |
| 20:18 | tipo específico de binário, os executáveis. E agora vou mostrar qual a diferença do   arquivo `hello.c` que é um binário pra texto do binário executável `hello` que foi gerado pelo |
| 20:29 | `gcc` compilando o código que escrevemos dentro desse `hello.c`. Se usarmos o mesmo comando `xxd hello` vamos ver um monte de sujeira na tela. Diferente |
| 20:40 | do arquivo texto que nós digitamos, aqui tem só umas letras e símbolos jogados. Mas note |
| 20:45 | que lá no começo, o arquivo começa com um código hexadecimal 7f e depois escreve ELF. |
| 20:51 | Isso indica que este é um binário formato ELF que significa Executable and Linking Format, |
| 20:57 | um formato padrão de executável que data da era dos UNIX originais. Quando tentamos executar esse binário o sistema operacional, no meu caso o Arch Linux, vai |
| 21:07 | identificar esses primeiros bytes e começar a checar se é um executável ELF válido. Pra isso |
| 21:13 | vai validar o cabeçalho do arquivo, que ocupa um espaço específico de bytes no começo do arquivo. |
| 21:18 | Tem um endereço especial pra identificação de cada coisa. Por exemplo, no 5o byte se tiver o   valor 1 significa que é um binário de 32-bits, se for 2 significa que é 64-bits e de fato, temos 2, |
| 21:29 | portanto é 64-bits. Se você nunca entendeu o que é um protocolo   binário, esse cabeçalho é um tipo de protocolo. Ele delimita campos dentro de uma cadeia de |
| 21:39 | bytes. Por exemplo, do byte 0 até o byte 4 precisa ter a palavra `ELF` em ASCII, |
| 21:44 | no byte 5 temos identificação de 32 ou 64-bits, e assim por diante. Cada campo |
| 21:49 | tem um endereço de começo, um endereço de fim e alguns valores específicos e arbitrários que |
| 21:54 | se espera encontrar nesse espaço, segundo a definição do protocolo ELF. É tudo só um linguição de bytes, mas se satisfazer esse protocolo, essas regras de posição e valores, |
| 22:06 | vai ser um executável ELF de Linux por exemplo. Um protocolo de rede é a mesma coisa,   um linguição de bytes que tem certos campos em certas posições. Uma hora ainda vou falar |
| 22:16 | sobre redes, mas isso deve dar uma noção pra agora. Lembre-se, é um computador de Turing, |
| 22:21 | programa e dados estão todos misturados na mesma fita de bytes. Continuando, tem um tanto de lugares vazios pra poder adicionar informações extras se |
| 22:31 | precisar numa futura nova versão de ELF, mas o programa de verdade só começa a partir do |
| 22:36 | endereço hexadecimal 0x1000. O que tinha antes eram meta-dados, ou dados que descrevem os dados |
| 22:43 | do binários. E é isso que queremos dizer com dados e programas serem a mesma coisa.   É tudo uma fita de dados. Aqui você vê que fica mais denso de bytes diferentes. |
| 22:52 | Mas note o primeiro, hexadecimal f3 depois 0f daí 1e e fa. é um comando em assembly de Intel |
| 22:59 | x86 64-bits, o comando `endbr64`. Assim como tínhamos uma tabela de caracters como ASCII, |
| 23:06 | pra saber sobre esse assembly, você precisa saber outra tabela, a que mapeia hexadecimais |
| 23:11 | com comandos de assembly. Cada arquitetura de processadores tem uma diferente. Mesmo no   mundo Intel, temos instruções diferentes entre 32-bits e 64-bits, a maioria é compatível mas |
| 23:21 | em 64-bits obviamente temos mais funcionalidades diferentes. Tudo em computadores é sempre mapear |
| 23:26 | bytes pra alguma coisa. Por isso quanto antes você se acostumar a conviver com   hexadecimais, melhor. Diferente de um arquivo texto onde os bytes |
| 23:35 | são traduzidos da tabela UTF-8 pra imprimir os glifos na tela pra gente poder ler, quando o Linux |
| 23:41 | detecta que é um executável ELF, ele valida os metadados do cabeçalho e a partir do endereço 1000 |
| 23:47 | começa a mandar as instruções pro processador. Pra ficar menos complicado de enxergar, em vez   do comando `xxd` podemos usar outra ferramenta que vai traduzir o hexadecimal pros mneumônicos |
| 23:57 | de assembly, no caso o `objdump`. Ele já pula o cabeçalho todo e vai direto pro |
| 24:03 | endereço 1000 e veja os mesmos f3 0f 1e fa que é comando endbr64 que falei. Daí começa uma |
| 24:11 | sequência de iniciação que vai executar essas instruções `sub` de substrair, `mov` de mover   e assim por diante. Mas e um executável de Windows? Se a gente copiar o executável do |
| 24:21 | Mesen que eu tava usando agora pra dentro do Linux podemos ver o conteúdo binário |
| 24:26 | dele com o mesmo `xxd`. Olha como é diferente, primeiro ele não   começa com `ELF` e sim com `MZ`. O cabeçalho é totalmente diferente. A gente não precisa também |
| 24:35 | ficar tentando ler byte a byte do cabeçalho pra saber o que são as coisas. Todos as distribuições   de Linux tem um comando chamado `file` que justamente sabe reconhecer diversos tipos |
| 24:45 | de cabeçalhos de binários e identificar de uma forma que humanos consegue entender. Por exemplo, |
| 24:51 | se fizermos `file hello` veja que ele identifica corretamente como um executável ELF Intel de |
| 24:56 | 64-bits. Se fizermos `file Mesen.exe` vemos que identifica como um PE32 ou Portable |
| 25:03 | Executable de 32-bits Intel, em particular é um assembly de .NET Mono. |
| 25:08 | Todo arquivo no sistema é um linguição de bytes. Se forem bytes que existem na tabela UTF-8, |
| 25:15 | provavelmente é um arquivo texto, como o código do `hello.c`. Quando compilamos com o `gcc` ele gera |
| 25:21 | outro linguição de bytes, mas vai ter o formato ELF que é executável de Linux. Daí quando mandamos |
| 25:26 | executar `hello` ele vai identificar o cabeçalho, validar, descer até o endereço 1000 do arquivo e |
| 25:33 | achar as instruções assembly pra começar a mandar pro processador. Por outro lado temos diversos |
| 25:38 | outros tipos de linguição de dados, por exemplo, uma imagem JPEG que todo mundo conhece, como as |
| 25:44 | fotos que seu smartphone tira. Vamos abrir um arquivo com `xxd` pra ver como é.   Novamente, temos um linguição de bytes, mas em particular esse começa com ff d8. Se formos até |
| 25:53 | o fim do arquivo temos ff d9. Todo arquivo JPEG começa e termina do mesmo jeito. Indo até o fim, |
| 25:58 | esse ff d9 indica quando o arquivo acaba porque em nenhum lugar ele indica o tamanho   total. Mas voltando pro começo, a partir do byte 6 vemos que o `xxd` reconheceu quatro |
| 26:07 | códigos que mapeiam na tabela ASCII pra JFIF que significa JPEG File Interchange Format. Os |
| 26:13 | bytes ff d8 já identificam o arquivo como JPEG mas tem esse JFIF porque também existe o EXIF |
| 26:19 | que é Exchangeable Image File Format que é um formato similar feito por fabricantes de câmeras |
| 26:25 | digitais de antigamente. Essa é uma das formas que o sistema operacional   reconhece que tipo de arquivo estamos lidando. Se for um binário que tem um |
| 26:32 | linguição de bytes que encaixa no formato ELF, é um executável e, se tiver permissão de execução,   tenta executar. Se for um binário com cabeçalho de JFIF é uma imagem JPEG e um programa de ver |
| 26:43 | imagens vai saber os endereços dentro que precisa pra localizar a imagem propriamente   dita. E assim por diante pra todo tipo de arquivo. Zips, video, áudio. |
| 26:52 | E no caso de arquivos texto, eles são binários também, cujos cabeçalhos não são nenhum dos |
| 26:58 | anteriores e podemos tentar mapear byte a byte pra uma tabela como UTF-8. Caso venha só um |
| 27:03 | texto quebrado com lixo no meio de letras, que não parece com palavra nenhuma, pode ser um encoding   diferente, digamos um texto antigo em japonês e, nesse caso, se usar a tabela EUC-JP ou Shift-JIS, |
| 27:15 | podemos encontrar palavras em japonês, se o programa que estivermos usando souber usar |
| 27:20 | os glifos do alfabeto japonês. Por último, vale falar do problema inicial. Por   que não podemos executar o código do arquivo `hello.c` diretamente sem compilar? Primeiro, |
| 27:31 | ele não é um binário ELF nem PE então não contêm instruções em assembly pra passar pro processador. |
| 27:37 | Mas por que eu consigo executar direto um arquivo de Python, ou Perl, ou Javascript? Isso |
| 27:42 | porque normalmente ele tem duas coisas. No caso específico de Linux, vai ter permissão de execução   e segundo, na primeira linha vai conter o caminho no sistema pra um interpretador. Chamamos essa |
| 27:52 | linha de shebang ou simplesmente bang. Se abrir um script de Python, você vai ver que costuma |
| 27:58 | ter essa primeira linha neles. Se só tiver permissão de execução mas não tiver   shebang, quem vai tentar executar esse arquivo texto, que agora chamamos de shebang, vai ser o |
| 28:07 | shell onde estamos neste instante. Por exemplo, quando eu abro um Terminal do Arch Linux,   configurei pra iniciar o Zshell. Se for um Linux normal ou um Terminal no MacOS, |
| 28:16 | sem configurar nada extra, normalmente vai abrir o famoso Bash. Um Windows vem   por padrão com o Powershell. Existem vários interpretadores de terminal. Eu explico mais |
| 28:25 | no episódio sobre WSL 2. Essa linha de comando é um ambiente de   programação. Podemos escrever programinhas. Então toda vez que você cai na tal linha de comando, |
| 28:35 | pode imediatamente escrever código sem abrir um editor de textos separado. Em   microcomputadores antigos dos anos 80 como um MSX ou Apple II ou Commodore 64, |
| 28:44 | o equivalente shell deles era o Basic. E como toda linguagem de programação ele tem uma sintaxe, |
| 28:50 | funções e comandos específicos dessa linguagem que, por acaso,   não tem nada a ver com a linguagem C. E por isso quando você tenta executar o `hello.c` ele vai |
| 28:58 | dizer que tem erros de sintaxe. Claro, não é a mesma linguagem. Você mandou essa shell que,   digamos, é brasileiro, tentar ler um texto em chinês e aí ele buga mesmo. |
| 29:06 | A mesma coisa acontece quando você abre o console do Python, ou um console qualquer   de Javascript ou Ruby. Daí vai ser um outro shell rodando em cima do shell original, |
| 29:15 | Bash ou Zshell. Todo mundo de Ruby por exemplo conhece o IRB que abre uma linha de comando onde |
| 29:21 | podemos executar direto comandos de Ruby. IRB é um acrônimo pra Interactive Ruby Shell. Está no nome, |
| 29:27 | ele é um shell. Mais especificamente um REPL ou Read-Eval-Print Loop, ou traduzindo, |
| 29:32 | um Loop de leitura, execução e impressão. Ou seja, um programa que fica em loop infinito sempre   esperando ler um comando, daí tentar executar, que é um evaluate ou `eval` desse comando, e imprimir |
| 29:43 | o resultado na tela. É um shell. Confunde um pouco pra quem está começando porque   é difícil distinguir o que são funções nativas dos shells como Zshell ou Bash e |
| 29:53 | o que são binários executáveis que parecem funções. Por exemplo, todo mundo conhece   o comando `echo` que imprime o string que passamos pra ele na tela. Mas fora no Zshell, |
| 30:02 | ele é um executável que fica em barra usr barra echo. Os shells tem bem poucas funções nativas, |
| 30:08 | por exemplo `cd` pra mudar de diretório ou `alias` pra criar atalhos. E por hoje vamos ficar por aqui. Eu acho que uma das coisas que mais facilita a vida de um |
| 30:17 | programador é o quanto antes ele se tornar íntimo do computador que usa. Muitos passam |
| 30:23 | anos só trabalhando com linguagens de alto nível e evitam ao máximo lidar com binários, hexadecimais, |
| 30:28 | pacotes, streams, porque parece uma coisa bizarra, tipo tentar ler chinês. Só que isso limita suas |
| 30:35 | capacidades como programador. E limita bastante. Ser um programador não é receber peças de |
| 30:40 | Lego e sair juntando que nem um idiota, em breve é bom você mesmo saber fazer suas próprias peças |
| 30:45 | de Lego. Se curtiram o video deixem um joinha e compartilhem o video com seus amigos, não deixem |
| 30:50 | de assinar o canal e clicar no sininho pra não perder os próximos. A gente se vê, até mais! |
