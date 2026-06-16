# Entendendo Sistemas de Arquivos: FAT

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=6YQve3KUqJs
- **Duração:** 30:50
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal Fabio Akita Depois dos últimos episódios espero que vocês tenham entendido mais sobre como HDs |
| 0:06 | são organizados em partições e volumes e como seu computador boota e acha o sistema operacional instalado no HD. Hoje quero explicar o que tem dentro dos volumes do HD: os sistemas |
| 0:17 | de arquivo ou filesystems. Vou começar contando um pouco o que me lembro. De como a vida era difícil nos PC dos anos |
| 0:24 | 80 e 90 com o maldito filesystem FAT, que corrompia fácil. Apesar de muita gente não |
| 0:29 | gostar, o NTFS do Windows NT foi um adianto de vida enorme. No Linux a gente tinha a série |
| 0:35 | ext de filesystems. Nos Macs tinha HFS. Mas qual a diferença? |
| 0:46 | (...) Antes de começar o assunto eu queria voltar de novo alguns episódios pra trás. Vocês |
| 0:52 | já devem ter notado que fico insistindo nos videos de introdução a computação com videogames e mencionar cartuchos. Quando falei de cartuchos pela primeira vez foi só pra |
| 1:01 | chegar nessa introdução de hoje. Vocês lembram que nos chips da ROM a gente guarda as instruções do jogo em si mas numa |
| 1:08 | região especial tem todos os assets do jogo, as imagens ou tiles, que formam os sprites |
| 1:13 | dos personagens, por exemplo. O intervalo de endereços que definem a área CHR, que provavelmente quer dizer characters. Sem mappers só tem um intervalo pequeno de 8 kilobytes |
| 1:24 | do endereço 0000 até 1FFF. Sprites, como do Super Mario, são formados por tiles ou azulejos. Quatro tiles formam |
| 1:32 | o Super Mario. Cada tile com 8 por 8 pixels. Então o Mario inteiro são 16 por 16 pixels. |
| 1:39 | Vamos fazer umas continhas de padeiro. Sem nenhum mapper, pode ter no máximo 8 kilobytes ou 8 mil cento e noventa e dois bytes. Acabei de falar que cada tile tem 8 por 8 pixels. |
| 1:49 | No Super Mario conseguiram entuchar quinhentos e doze tiles. Portanto, cada pixel só pode ser representado por 2 bits de cor. E pra um NES é mais que |
| 1:58 | suficiente. Hoje em dia, numa imagem normal, se representa cada pixel com pelo menos 24-bits, |
| 2:04 | 8-bits pra cada cor. Se você já mexeu com HTML e CSS, já deve ter escrito uma cor em 24-bits. |
| 2:10 | Por exemplo FFFFFF é branco. O primeiro FF é o hexadecimal de 256, e representa vermelho. |
| 2:16 | O segundo FF é pra verde e o terceiro é pra azul. Os três no valor máximo de 8-bits |
| 2:23 | que é FFFFFF, vai dar branco. FF0000 significa vermelho no máximo e zero pra verde e azul. |
| 2:31 | Hoje em dia tem bem mais cores que isso, em vez de 24-bits podemos usar 30 bits, onde cada uma das 3 cores básicas pode ser representada com 10-bits. Por isso, quando você vê um |
| 2:41 | monitor ou TV moderna dizendo HDR-10 é High Dynamic Range com cores de 10-bits. Mas cores |
| 2:47 | é assunto pra outro dia. O problema é o seguinte: se um tile de nintendinho fosse representado com esse tanto de cor, 30-bits, um tile de 8 por 8 pixels seria 8 vezes 8 |
| 2:57 | vezes 30, ou seja mil noventos e vinte bits. Divide por 8 pra ter em bytes e isso seria |
| 3:02 | duzentos e quarenta bytes. Só que aí, nos nossos pobres 8 kilobytes de ROM no cartucho, só caberia trinta e quatro |
| 3:10 | tiles. Pra fazer caber quinhentos e doze, o máximo que podemos usar pra cores são 2 bits, meio byte. E por isso em videogame antigo tinha uma outra estrutura de dados |
| 3:18 | que são as paletas de cores. Note no debugger do emulador Mesen que embaixo do zoom do tile |
| 3:24 | tem uma estrutura de 4 cores, essa é a paleta atual. A gente pode mudar a paleta e as cores dos tiles vão mudando. É assim que se consegue |
| 3:31 | reusar os tiles que formam a nuvem e tem cores como azul e branco e pra fazer o arbusto, |
| 3:37 | basta trocar a paleta pra verde. Olhem aqui no nosso debuger como esse tile tá verde, mas quando aparece a nuvem na tela, muda pra branco. É o mesmo tile, só muda a paleta. |
| 3:46 | Sem detalhar porque, o nintendinho tinha uma paleta total de 54 cores mas cada tile só |
| 3:52 | podia escolher entre uma paleta que tem no máximo 3 cores, mais o preto, então 4 cores, |
| 3:57 | representado por 2-bits. Isso faz cada tile de 8 por 8 pixels ocupar 32 bytes e num cartucho |
| 4:04 | simples, sem mapper, do endereço 0000 até 1FFF, cabe no máximo quinhentos e doze tiles. |
| 4:09 | Se a gente fosse fazer esse joguinho do super mario num computador moderno, como você faria? Um jeito ingênuo, já que não usamos mais cartuchos, seria gravar cada tile em um arquivo, |
| 4:19 | tipo tile1.png, tile2.png, etc. Cada arquivo contendo exatamente os 32 bytes de cada tile. |
| 4:27 | A parte divertida é que o arquivo na verdade vai consumir mais que 16 bytes. Por que? |
| 4:32 | Porque só o nome do arquivo "tile1.png" tem 18 bytes (em double byte, letras em UNICODE, |
| 4:39 | lembra?). Só o nome já aumenta quase 50% o tanto de bytes. E não acaba aí. Em qualquer gerenciador de arquivos você consegue ver coisas como a data de modificação do arquivo. |
| 4:49 | Precisa guardar esses bits, e digamos que ocupe 1 byte ou mais. E tem que guardar em que diretório esse arquivo tá, então no mínimo mais um ponteiro de endereço pra |
| 4:56 | estrutura de diretório. E na realidade tem mais metadados que isso, então cada arquivinho de 32 bytes vai ter |
| 5:04 | quase o triplo de bytes pros metadados. Num Linux, na realidade, é mais que isso. Cada |
| 5:09 | arquivo tem 2 kilobytes de metadados e estruturas. Os metadados são maiores que esse conteúdo. |
| 5:15 | Por isso que você não deveria tentar guardar uma coisa tão pequena num arquivo. Claro que ninguém faz isso, mas só pra explicar caso você nunca tenha pensado nisso: metadados |
| 5:24 | custam bytes e não são poucos. O tamanho de um arquivo não é só o tamanho do conteúdo. |
| 5:29 | Se o cartucho de Nintendo usasse um sistema de arquivos como um ext4 de Linux moderno, |
| 5:35 | a gente não ia conseguir colocar quase nenhum tile nele. Só de metadados inúteis já ia encher. Aliás, a configuração do ext4 não ia caber no cartucho. E por isso que um cartucho |
| 5:44 | não usa sistema de arquivo. Nenhum tile tem nome nem nada, só direto o endereço. Sistema |
| 5:49 | de arquivos substitui a necessidade de lidar com endereços, ao custo de adicionar peso |
| 5:54 | pra dar nome e organização pras coisas. Se eu fosse simular um cartucho numa linguagem moderna, os bytes de tiles, guardaria num |
| 6:03 | array. E se fosse gravar num dispositivo, gravaria todos os bytes crús juntos num arquivão só. Aliás, é isso que é uma imagem de ROM de cartucho que você roda num emulador: |
| 6:12 | todos os bytes crus do cartucho. Mas aí, como você ia carregar só o tile correto? Igual se fazia antigamente: indo na posição desse arrayzão onde começa o tile e mandando |
| 6:23 | ler só 32 bytes. Quando a gente espeta um cartucho num videogame ou num microcomputador antigo como um Commodore, |
| 6:29 | é o equivalente a espetar mais memória já pré-carregada. Quando executa um jogo num |
| 6:34 | PC que tá gravado num disquete ou mesmo HD, primeiro ele carrega o jogo na memória, então |
| 6:39 | tem um passo a mais e gasta a RAM. Sistema de arquivos aparece quando a gente passa a ter um dispositivo de armazenamento, de onde vamos carregar dados pra memória pra depois |
| 6:49 | usar. Não usamos os bytes direto do dispositivo porque é lento demais. É a transição da fase que computador só tinha memória e expandia com cartuchos. Daí |
| 6:58 | passamos a usar gravador de fita cassette pra guardar os bytes do programa, literalmente uma fita de bytes. Um Commodore 64 usava um sistema de arquivos bem rudimentar, basicamente |
| 7:09 | uma lista ligada com a coordenada de trilha e setor, 2 bytes pro próximo bloco e duzentos |
| 7:15 | e cinquenta e quatro bytes de dados. Acho que era uma tabela de nomes de arquivos e cada arquivo sendo uma lista ligada assim. |
| 7:22 | O problema é que só dava pra escrever sequencialmente, e o próximo arquivo começava a partir do último endereço do último arquivo mais um byte e seguia assim. Se apagasse um arquivo, |
| 7:32 | aquele espaço no meio não dava pra ser reusado automaticamente sem usar um comando como MOVE |
| 7:38 | pra literalmente mover os arquivos que tavam depois pra ocupar os bytes antes. Quando pensamos em dados, seja um único arquivo ou vários arquivos, na nossa cabeça a gente |
| 7:47 | pensa como num cartucho: tudo empacotado um atrás do outro bonitinho. E no fim dos anos 70, no mundo doméstico, muitos computadores eram usados assim: você plugava um cartucho |
| 7:56 | de jogo, jogava e desligava a máquina. Fazia uma conta de calculadora, e desligava a máquina. |
| 8:02 | Carregava um jogo de uma fita cassette, jogava, e desligava a máquina. E toda vez que desligava, tudo que tava na memória RAM apagava e era isso aí. Videogames até a era de um super |
| 8:11 | nintendo, não gravavam nada em lugar nenhum. Com exceção de cartuchos que dava pra salvar o progresso do jogo, que era basicamente um chip de RAM ligado numa bateria daquelas de |
| 8:20 | relógio dentro do cartucho. Sistema de arquivos era mais comum num computador comercial, um mainframe ou minicomputador, |
| 8:27 | rodando UNIX, gravando as coisas em rolos de fita gigantes ou nos primeiros HDs, que também eram gigantes, suportavam só alguns kilobytes e custavam uma fortuna. Mas foi |
| 8:38 | só no começo dos anos 80 que coisas como disquetes e fitas cassete começaram a aparecer. |
| 8:43 | Daí surgiram os primeiros programas de produtividade, como eu já tinha mencionado em outros episódios, |
| 8:48 | editores de texto como Wordstar ou Wordperfect, planilhas como Lotus 1-2-3 ou Visicalc, bancos |
| 8:54 | de dados como dBase. Você ficou o dia todo criando uma planilha de custos, precisava gravar esses dados em algum lugar. Não podia ser como antes que ia desligar a máquina, |
| 9:02 | perder tudo e ter que redigitar tudo no dia seguinte. Daí surge a necessidade de sistemas de arquivos que começaram bem rudimentar em micros como MSX ou Commodore. |
| 9:12 | Nos anos 80, cada microcomputador como Apple II, Commodore e tudo mais usava um sistema de arquivos proprietário. Trocar arquivos entre micros era um saco. Além do sistema |
| 9:22 | de arquivos, no caso de arquivos texto, nem todo mundo usava ASCII, então mesmo conseguindo copiar pra outra máquina, quando abrisse pra editar vinha caracteres estranhos porque |
| 9:31 | cada um usava códigos diferentes pra símbolos diferentes. Com a dominância dos clones de IBM PC e todo mundo rodando ou MS-DOS ou um clone de MS-DOS, |
| 9:40 | meio que estabilizou que o sistema de arquivos mais comum seria FAT e a tabela de caracteres seria ASCII ou uma variante. FAT é sigla pra tabela de alocação de arquivos. Assim |
| 9:50 | como expliquei sobre MBR ou GPT dois episódios atrás, FAT é uma estrutura de dados que |
| 9:55 | define como que arquivos e diretórios são gravados e organizados. O MBR ocupa o primeiro |
| 10:00 | setor da primeira trilha do primeiro cilindro, logo na sequência os próximos setores vão guardar a FAT. |
| 10:06 | Naquela época a maioria das pessoas não tinha HDs, no máximo floppy ou disquetes. Acho que os primeiros tipos, que gravava só de um lado não era mais que 160 kilobytes |
| 10:16 | no total. A gente grava informações sobre o disco e a tabela de arquivos, ou mais corretamente, |
| 10:21 | tabela de alocação de arquivos que é File Allocation Table ou FAT, nos primeiros setores da primeira trilha do disco, lembra? Se as estruturas de dados pra guardar esses dados |
| 10:30 | fosse muito grande, ia usar parte significativa desses 160 kilobytes. Pra ter uma imagem na cabeça pense no seu disco sendo um linguição de bytes, que a |
| 10:39 | gente pode desenhar como sendo várias linhas uma embaixo da outra. Você já sabe que HDs |
| 10:44 | lêem bytes em blocos. O HD reconhece setores e vai lendo de 512 em 512 bytes. O primeiro |
| 10:50 | setor do disco, lá no endereço 0 é o master boot record, que é uma estrutura de dados |
| 10:55 | que vai configurar as partições. Sendo 512 bytes vai do endereço 0 até 01FF. |
| 11:01 | Existem várias versões de MBR, que foi evoluindo até ser substituido por GPT como você já |
| 11:07 | sabe. Mas na primeira versão, a partir do endereço 01BE tinha entradas de partição, |
| 11:12 | que é outra estrutura de 16 bytes. No MBR original eram 4 espaços de 16 bytes reservados |
| 11:18 | pras 4 partições possíveis. Era só isso até criarem o conceito de partições extendidas, |
| 11:24 | mas nem vou perder tempo detalhando porque hoje a gente usa GPT, que permite muito mais partições, mas também ocupa mais que um setor no começo do disco. |
| 11:32 | Independente se é MBR ou GPT, só entender que o primeiro setor do disco é reservado pra ter esse índice. E cada entrada de partição que você configurar com um fdisk da vida |
| 11:41 | vai ter a coordenada em CHS no caso de MBR ou LBA no caso de GPT. Enfim, o endereço |
| 11:48 | onde começa e outro endereço pra dizer onde termina. Daí a BIOS ou UEFI, depois de achar |
| 11:53 | a primeira partição, vai continuar o bootstrapping, carregando o bootloader do sistema operacional, que finalmente vai carregar a kernel, drivers e terminar de bootar a máquina. |
| 12:00 | Agora você entende quando a gente abre um aplicativo como o Disk Management do Windows e vê essas partições. Elas ficam gravadas nessa área de GPT, e olha só como tem uma |
| 12:09 | partição de 184 mega que é o EFI System Partition, que é pra onde a UEFI vai apontar |
| 12:15 | no boot pra carregar a kernel do Windows. Tem outras partições maiores, de quase 500 mega, que provavelmente é a partição de recuperação. Quando você tá com problemas |
| 12:23 | no boot, vai ter um sistema de emergência pra diagnosticar. Hoje que temos espaço sobrando, |
| 12:28 | deixar reservado meio giga ou um giga, não é uma perda grande se for facilitar nossa vida caso algo dê pau. |
| 12:35 | Hoje é comum ter pelo menos 128 giga num HD barato. Mas no começo dos anos 80 o comum |
| 12:40 | era no máximo ter 40 kilobytes num cartucho ou 160 kilobytes num disquete. A gente não |
| 12:46 | tinha espaço pra ficar perdendo. Então imagine que os primeiros sistemas de arquivo tinham que ser super simples. Daria pra fazer vários episódios falando de cada um mas vou resumir. |
| 12:55 | O mais comum no começo foi o FAT12, que tinha endereços de 12 bits. Diferente do que fizemos |
| 13:00 | com memória onde cada endereço aponta pra um byte na memória, endereços de HDs apontam |
| 13:05 | pra clusters. Neste ponto vocês já devem estar começando a se acostumar com o conceito de uma estrutura de dados, tipo uma struct de C mesmo, onde cada campo tem um tamanho |
| 13:14 | fixo em bytes. Sabendo o tamanho de cada campo podemos ir achando os campos no linguição |
| 13:19 | de bytes. Foi assim quando expliquei sobre arquivos executáveis como ELF de Linux, ou |
| 13:25 | o próprio MBR que é tipo uma estrutura de cabeçalho que define o drive. Do byte 0 até 2 vai ter uma instrução de JUMP de assembly pra um endereço. O bytecode |
| 13:36 | dessa instrução e o endereço vai depender da versão do MS-DOS ou Windows NT, mas é aqui que a BIOS passa o controle pro sistema operacional. Nos bytes seguintes vai ter outras |
| 13:46 | informações como o nome do fabricante, daí vem as informações do layout do drive. |
| 13:51 | Nos bytes 11 e 12 tem o número de bytes por setor, que costuma ser 512 mas pode ir até |
| 13:57 | 4 kilobytes que é 4096. No byte 13 tem o número de setores por cluster. Eu falei que |
| 14:03 | o sistema de arquivos vai lidar com clusters e clusters pode ser um ou mais setores. É |
| 14:08 | aqui que vai definir isso. Podemos colocar quanto de espaço queremos ter no drive. Aqui que vem o 12-bits no FAT12. A tabela FAT12 consegue indexar até 2 elevado a 12 |
| 14:18 | endereços pra clusters. Até 4 mil e noventa e seis clusters. Se o cluster tiver 2 setores |
| 14:24 | de 512 bytes cada, o tamanho máximo que dá pra ter na partição vai ser 4 mil e noventa |
| 14:29 | e seis vezes 2 setores, vezes 512 bytes, ou 4 megabytes. O que seria muito pouco. Mas |
| 14:34 | se aumentar o tamanho dos setores de 512 bytes pra 4 kilobytes, esse valor aumenta pra até 16 megabytes. |
| 14:41 | Qual o problema de fazer isso? Lembra que expliquei no episódio de HDs que um arquivo vai ser gravado um setor de cada vez. Na realidade, vai ser gravado cluster a cluster porque é |
| 14:49 | isso que o FAT reconhece. Então se cada cluster tiver 2 setores e cada setor tiver 4 kilobytes, |
| 14:55 | se pegarmos um arquivo de 40 kilobytes pra gravar, precisamos reservar 2 clusters inteiros na FAT pros primeiros 32 kilobytes. Mas os 8 kilobytes restantes vai ocupar o próximo |
| 15:05 | cluster inteiro. Ou seja, vai desperdiçar espaço no fim desse cluster. O arquivo de 40 kilobytes na realidade vai ocupar 48 kilobytes reais no disco. É um desperdício de 20% |
| 15:16 | do disco. Se você escolher um setor de 512 bytes como antes, cada cluster só vai ter 1 kilobyte. |
| 15:21 | Mas o FAT só consegue indexar os mesmos 12-bits, 4 mil e noventa e seis clusters. Aí só dá |
| 15:27 | pra ter uma partição de 4 megabytes em vez de 16. Naquela época isso não era ruim, porque a gente lidava mais com disquetes. No começo dos anos 80 o mais comum acho que |
| 15:36 | era o disquete de 5 e 1/4 polegadas de 360 kilobytes. Então setores de 512 bytes tava |
| 15:42 | de boa. O problema foi do meio pro fim dos anos 80, quando passamos a ter HDs ou winchesters. |
| 15:48 | Em 1990 eu tinha um winchester de 10 megabytes. Agora o FAT12 sozinho não ia dar conta. Por |
| 15:54 | isso foi atualizado pra FAT16. Agora a tabela podia ter 2 elevado a 16, mais de 65 mil clusters. |
| 16:01 | Se manter 2 setores por clusters e setores de 512 bytes mesmo, ainda assim já daria pra ter uma partição de até 64 megabytes. Então tava seguro. Até o meio dos anos 90 |
| 16:11 | pouca gente tinha um HD tão grande assim. Se você não tá acostumado com megabytes. Seu HD no seu computador aí deve ser de 128 |
| 16:18 | giga ou mais. Se for um computador bem barato talvez seja de 64 gigas. Espero que não, |
| 16:24 | porque o diretório C:\Windows sozinho deve estar ocupando mais de 20 gigas. 1 giga é |
| 16:29 | mil e vinte quatro vezes 1 mega. Ou seja, um HD de 64 giga é mil vezes maior que um |
| 16:35 | HD de quase 30 anos atrás. Mas aí, no meio dos anos 90, chegou a hora de aparecer o Windows 95, que ia tentar tirar |
| 16:42 | o atraso nas interfaces gráficas que sistemas como Amiga e Mac já tinham faz anos. Mas |
| 16:48 | construir uma interface gráfica em cima do FAT16 tinha um grande problema: a estrutura de dados que se chama "directory entry" era gravado assim no disco: |
| 16:57 | Os primeiros 11 bytes era o nome do arquivo de 8 bytes e uma extensão de 3 bytes. Só quem usou micros antes de 95 lembra disso. Era horroroso ficar criando vários documentos, |
| 17:07 | planilhas, código fonte de programa e estar limitado a nomear arquivos só com 8 letras. A gente tinha que ser criativo. Mas era assim porque espaço de memória ou disco até aquele |
| 17:17 | ponto custava muito caro. Lembra que eu falei que nome de arquivo ocupa espaço? Eu lembro quando programava Clipper que a gente seguia essa convenção no nome dos |
| 17:25 | campos em tabela de banco de dados. Era muito comum ter campos como CODCLI pra código de cliente, ou NOMCLI pra nome de cliente, DATVAL pra data de validade e assim por diante. Aliás, |
| 17:35 | era pra economizar memória que datas eram gravadas no formato YYMMDD que é dois digitos |
| 17:42 | pra dia, pra mês e pra ano, considerando que se YY fosse 80 então era 1980. |
| 17:48 | De qualquer forma, precisava resolver isso. Nessa entrada de diretório, que usava pra |
| 17:55 | diretório e pra arquivo, o byte 11 depois da extensão era um vetor de bits. Outro dia |
| 18:00 | vou falar das vantagens de um bitvector e bitmasks, mas deixa eu resumir. |
| 18:05 | Um byte tem 8 bits. Você pode pensar em cada bit como se fosse um interruptor de luz. 1 |
| 18:10 | é ligado e 0 é desligado. E o campo inicializa com tudo zerado. No caso do FAT, se eu ligar |
| 18:15 | o 1o bit, o bit 0, significa que é um arquivo ou diretório só de leitura. Se ligar o bit |
| 18:21 | 1, é um arquivo ou diretório escondido. No caso de um Linux, ser escondido é ter o primeiro byte do nome sendo um ponto, os dotfiles. Mas no FAT é só 1 bit, então |
| 18:31 | pra indicar se um arquivo é escondido em FAT usamos 7 bits a menos que no Linux. |
| 18:36 | Continuando, se ligar o bit 2 vai indicar que é um arquivo especial do sistema. Se |
| 18:42 | ligar o bit 3 é a etiqueta ou nome do volume. Se ligar o bit 4 finalmente indica que essa |
| 18:47 | estrutura tá definindo um subdiretório. Por outro, lado se ligar o bit 5 é um arquivo. |
| 18:53 | Imagino que os bits 4 e 5, só um deles pode ser 1 e o outro 0. Já os bits 6 e 7 não |
| 18:59 | significam nada e são ignorados. Ou seja, em um único byte a gente conseguiu enfiar 6 informações diferentes. Se você |
| 19:06 | fizesse do jeito ingênuo como uma struct com 6 campos int, ia gastar 6 bytes inteiros, |
| 19:13 | 5 bytes a mais do que usando um único campo de 1 byte. Isso é muito comum pra guardar informações que é só verdadeiro ou falso, 1 ou 0. Você só precisa de 1 bit pra representar |
| 19:23 | essa informação. Essa técnica aumenta a densidade de informações por byte. |
| 19:28 | E eu me dei ao trabalho de explicar isso porque a forma de permitir nomes longos a partir do Windows 95, foi atualizar o FAT16 pra VFAT. E a principal diferença é que toda vez que |
| 19:39 | cria um arquivo vai criar duas entradas de diretório. Um igualzinho o que acabei de |
| 19:44 | explicar, começando com 11 bytes pro nome no formato antigo de 8 letras e extensão de 3 letras. Mas a segunda estrutura ia entuchar mais bytes no meio pra caracteres, agora em |
| 19:54 | formato UNICODE em vez de ASCII, já que a ambição do Windows 95 era expandir pelo mundo em diversas línguas. |
| 20:01 | Pra programas de DOS antigos não se confundirem, ainda ia ter a estrutura antiga, que ia ignorar a estrutura nova. Pensa que na mesma lista você tem as duas estruturas. Mas aí o DOS |
| 20:09 | antigo ia ler o byte 11 que é o bitvector de atributos e encontrar 0xF, tudo ligado |
| 20:16 | 11111111, que é um atributo inválido, então um DOS antigo ia ignorar. Na prática, você podia digitar um documento no Word do Windows 95 e salvar como hoje, |
| 20:26 | com um nome como "Escopo do Projeto Secreto.doc". Vai gerar uma entrada de diretório com caracteres |
| 20:32 | UNICODE normalmente e junto gerar uma segunda entrada com uma versão no formato antigo |
| 20:38 | de 11 bytes. Provavelmente vai ser "ESCOPO~1.DOC". Se gravar outro arquivo como "Escopo do Projeto |
| 20:44 | do Ano que vem.doc", vai gerar uma versão de DOS chamado "ESCOPO~2.DOC". |
| 20:51 | Esse esquema dura até hoje no NTFS do Windows 10. Se não acredita abre um command prompt |
| 20:56 | e digita "cd c:\progra~1" e ele cai no "Program Files". Se abrir o Explorer do Windows e digitar |
| 21:04 | "C:\progra~1", ele vai te mandar certinho pro diretório "Program Files". O DNA do DOS ainda existe. |
| 21:10 | O VFAT foi uma versão feita pro lançamento do Windows 95, mas logo no segundo DLC que |
| 21:15 | foi o Windows 95 OSR2, a versão que funcionava de verdade, o VFAT foi substituído pelo FAT32. |
| 21:22 | Você já imagina que a tabela subiu pra endereçar 2 elevado a 32 cluster em vez de 16, até |
| 21:28 | 4 milhões de clusters. Com setores de 512 bytes isso daria uma partição de tamanho máximo teórico de 4 terabytes. |
| 21:36 | Se o cluster só tiver 1 setor, então ia até 8 terabytes, mas cada arquivo dentro |
| 21:41 | só poderia ter 4 gigabytes. É 32-bits, então só dá pra ler e gravar 2 elevado a 32 bytes |
| 21:47 | de dados crús, o que dá o famoso limite de 4 giga por arquivo. Mas a gente já viu no outro episódio que era a BIOS e o MBR que não permitiam ter partições maiores |
| 21:57 | que 2 terabytes. Finalmente o FAT32 seria o filesystem que ia durar a virada do século. |
| 22:04 | Em paralelo a isso a Microsoft tentou muitas coisas dos anos 80 até começo dos 90 pra abrir mais pro mercado de workstations, onde tava a Silicon Graphics ou a Sun. Mas MS-DOS |
| 22:14 | e Windows 3 não era suficiente. Por isso teve as iniciativas como o XENIX que foi um |
| 22:20 | UNIX da Microsoft que não vingou e a parceria com a IBM que deu origem ao OS/2. Tem muito |
| 22:26 | sistema como máquinas antigas de sacar dinheiro, as ATMs, sistema de bilhete de metrô e coisas assim que ainda rodam em OS/2. |
| 22:32 | Um dia eu tento falar do OS/2 mas ele era mais sofisticado que o Windows 95, que não era muito mais que um sistema parasita que espera o MS-DOS bootar em modo real pra depois |
| 22:42 | ligar o modo protegido e dar controle pro Windows. Era uma gambiarra de coisas antigas de 16-bits misturado com coisas novas de 32-bits. A série do Windows 95, 98 até o famigerado |
| 22:53 | Millenium Edition no final dos anos 90 foi uma bela de uma zona. Já o OS/2 foi projetado pra ser um sistema mais completo de 32-bits. Acho que a primeira |
| 23:02 | versão era 16-bits mas mudaram rápido. Eu cheguei a ver as primeiras versões do OS/2 que tinha a cara do Windows 3.1. O OS/2 mais famoso acho que o foi a versão 3 Warp e a |
| 23:13 | que perdura até hoje em muitos lugares é a versão 4. E existe uma versão open source que foi feita via engenharia reversa, porque a IBM nunca abriu o código fonte do OS/2. |
| 23:22 | É quase impossível rodar um MS-DOS ou OS/2 dos anos 90 em máquinas modernas sem modificação. |
| 23:29 | Pra começar, o processo de boot mudou de BIOS e MBR pra UEFI e GPT além disso o hardware |
| 23:35 | de hoje tem mais integrações como ACPI e AHCI que é o Advanced Configuration and Power |
| 23:41 | Interface e Advanced Host Controller Interface. O primeiro pra facilitar o sistema operacional |
| 23:46 | encontrar hardware, configurar e gerenciar energia e a segunda pra falar com os controladores |
| 23:52 | de SATA que fala com drives. Seu HD provavelmente é SATA e não mais IDE ou SCSI. Sem entender AHCI, a gente nem encontra |
| 24:01 | o HD. Quando você configura uma máquina virtual num VMWare ou Virtualbox da vida, vai notar que eles configuram um HD SCSI e não SATA. SCSI era a melhor interface da |
| 24:11 | época, usado em workstations e Macs. PCs mais baratos usavam IDE mesmo. |
| 24:16 | Antigamente a gente tinha porta serial, porta paralela e barramento IDE que falava ATA. Ligava impressora na porta paralela, modem na serial. Era um saco configurar alguma coisa |
| 24:26 | nessas portas e barramentos antigos. Ainda não tinha protocolos pros dispositivos se identificarem automaticamente pro sistema operacional. Pensa que isso exige mais bytes |
| 24:35 | e um protocolo mais gordo e a velocidade de transferência era bem lenta. Hoje em dia a gente tem conectores USB como Type C em vez do antigo SCSI, protocolos como |
| 24:45 | USB 3.2 Gen 2 ou Thunderbolt 3 em vez do antigo ATA. Aliás, depois do ATA veio o Serial ATA |
| 24:52 | ou SATA. E esses conectores se ligam em barramentos internos que falam direto com a CPU como PCI |
| 24:58 | Express ou PCIe, que substituiu o antigo PCI e AGP. Essa é uma parte da história que |
| 25:04 | tenho zero saudades: o tanto de problema que era conectar e configurar dispositivo. Nunca funcionava de primeira. Muito diferente de conectar um HD externo num Thunderbolt hoje, |
| 25:14 | que é plug and play de verdade. Mas vamos deixar dispositivos de lado por hoje. A parte importante é que da parceria |
| 25:19 | da Microsoft com a IBM, no OS/2, surgiu o sistema de arquivos HPFS ou High Performance |
| 25:26 | File System. E ele serviu de inspiração pra outro filesystem, o New Technology File |
| 25:32 | System ou NTFS do Windows NT. Em paralelo a essa história de FAT. No mundo dos Macs, tinha o Macintosh com o Macintosh |
| 25:40 | File System, que era um pouco melhor que um FAT12 da vida. Mas com a Apple querendo lançar |
| 25:45 | HDs nos Macintoshs eles evoluíram pra uma nova versão de filesystem chamada Hierarchical |
| 25:51 | File System ou HFS. Assim como o HPFS da IBM pro OS/2 e diferente do FAT, o HFS seria implementado usando B+Trees. |
| 26:01 | Você já entendeu um pouco sobre estruturas de árvores alguns episódios atrás. E eu expliquei rapidamente sobre Balanced Trees ou B-Trees e derivações como B+Trees e B* |
| 26:11 | Trees. Vocês vão ver que essas estruturas estão por baixo de quase tudo que você usa num computador. |
| 26:16 | Em resumo, são árvores balanceadas de baixa profundidado onde cada nó tem vários filhos |
| 26:22 | de uma só vez. Além disso os filhos nos galhos internos só tem metadados e chaves, |
| 26:27 | onde ficam os inodes. E só as folhas da árvore, os últimos nós externos lá embaixo, é |
| 26:32 | que apontam pros dados em si. No caso, pra clusters ou blocos. Tem a vantagem de ter tempo de procura razoavelmente bom, especialmente se comparar com uma mera |
| 26:42 | tabela. E diferente de uma árvore binária, a profundidade vai ser baixa porque cada nó vai ter vários filhos em sequência. E como tem vários filhos por nó, nem toda operação |
| 26:51 | de inserção ou deleção vai precisar promover um rebalanceamento, como eu mostrei que acontece |
| 26:56 | numa árvore como red black trees. Em discos, a vantagem é que isso ajuda a diminuir a fragmentação e aumenta a performance. |
| 27:04 | Os dados são lidos e escritos em conjuntos grandes de blocos de uma só vez. Provavelmente vai desperdiçar um pouco de espaço. Mas isso é outro trade off, a gente troca um |
| 27:12 | pouco de espaço em disco pra evitar fragmentação e aumentar a performance de leitura e escrita. |
| 27:18 | Provavelmente tirando o antigo FAT, todos os file systems usam B+Trees. Mesmo o HFS |
| 27:24 | da Apple em 1985 já era implementado com B+Tree. Num Mac você sabe que dá pra abrir as propriedades de um arquivo e atribuir uma cor pra aparecer |
| 27:33 | destacado no Finder. E dá pra selecionar o ícone, copiar, e colar em outro arquivo. Sem ter um arquivo de icone separado. E muito mais, mas você já pensou onde que se armazena |
| 27:42 | essas coisas? A cor do arquivo até pode ir nos metadados no nó da árvore mas e um ícone que tem |
| 27:48 | múltiplos bytes? Ele vai num resource fork. Na realidade o nó da árvore pode apontar |
| 27:53 | pra dois galhos de dados, um é o data fork que aponta pro primeiro byte do conteúdo |
| 27:59 | do arquivo propriamente dito. O outro galho é o resource fork que aponta pro primeiro |
| 28:04 | byte de um outro conjunto de dados escondido. Por isso que quando você faz um arquivo zip comprimido num Mac e descompata num PC, vem |
| 28:12 | um diretório estranho chamado "underline" MACOSX. Digamos que você tava compactando |
| 28:17 | um arquivo chamado "retrato.jpg" então nesse diretório estranho vai ter um arquivo "._ |
| 28:24 | retrato.jpg" que são os bytes que ficavam no resource fork. Como nem todo filesystem tem suporte a resource forks, em particular FAT não tem nada nem |
| 28:33 | perto disso, então o Mac é obrigado a criar arquivos de suporte pra não descartar informações. |
| 28:40 | Se você copia de um Mac pra outro Mac, isso é transparente. Mas se usa um filesystem intermediário, ou um formato de arquivos como Zip, ele é obrigado a dar um jeito. |
| 28:49 | O NTFS tem suporte a forks, que chama de ADS ou alternate data streams. |
| 28:55 | Se você abrir um command prompt num Windows 10 de hoje, sabe que dá pra criar arquivos texto como num shell de Linux. Basta fazer `echo "hello world" > hello.txt` e tá criado. |
| 29:07 | Se usar o comando `more hello.txt` vai listar de volta o conteúdo. Trivial, todo mundo sabe isso. Mas o que muitos de você não sabem é que posso escrever bytes nesse alternate |
| 29:17 | data stream do arquivo. Tente fazer `echo "isto é um segredo" > hello.txt:segredo`. |
| 29:25 | Pronto. Se usar o comando `more` de novo, não vai enxergar nada, só o texto original. |
| 29:31 | O que aconteceu? Agora posso fazer `more < hello.txt:segredo` e olha só, o texto secreto apareceu! Se abrir |
| 29:38 | num editor de textos normal, nunca vai ver esses bytes. Praticamente ninguém suporta alternate streams nos programas. Mas esse arquivo agora carrega esse segredo escondido. |
| 29:49 | Pena que é um recurso que acaba sendo desperdiçado. Esse 'segredo' é o nome do stream de bytes |
| 29:54 | e a gente pode criar vários streams diferentes. E é mais chato ainda porque se a gente tentar copiar esse arquivo pra algum pendrive em |
| 30:01 | FAT32 da vida, o Explorer vai avisar que o arquivo tem propriedades que não vão ser |
| 30:06 | copiadas e parar por aí. Daí perdemos aquele segredo porque, diferente do Mac, ele nem tenta criar um arquivo separado. Como as ferramentas que gerenciam arquivos do próprio Windows |
| 30:16 | male male reconhecem esses forks, eles acabam sendo inúteis pra gente. E por hoje vou pausar essa história porque no próximo episódio vou começar a falar |
| 30:25 | sobre os outros filesystems e a nova geração que usamos hoje em dia e como esse estudo |
| 30:31 | em estruturas de dados foi modificando a forma como pensamos em arquivos. Se ficaram com dúvida mandem nos comentários abaixo, assinem o canal e não deixem de clicar no sininho |
| 30:42 | pra não perder a continuação. Compartilhem o video pra ajudar o canal. A gente se vê, até mais. |
