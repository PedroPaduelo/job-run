# Como Funciona o Boot de um Linux? | O que tem num LiveCD?

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=5F6BbhgvFOE
- **Duração:** 46:00
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Por hora, finalizei finalmente a minissérie sobre redes e internet e agora é hora de |
| 0:06 | falar um pouco mais sobre Linux pra complementar os videos de Ubuntu e WSL que já fiz aqui |
| 0:11 | no canal. Tem uma playlist de Software Livre onde falo de assuntos relacionados, caso ainda não |
| 0:16 | tenha assistido e vou adicionar os novos videos nessa mesma playlist. Nos próximos videos vou mostrar um pouco mais em detalhes sobre instalação de algumas |
| 0:25 | distros consideradas mais exóticas, mas hoje quero explorar mais conceitos de Linux e software |
| 0:31 | em geral que talvez vocês não conheçam usando como desculpa a explicação de como um Linux faz boot. |
| 0:38 | Vamos começar a olhar um pouco mais debaixo do capô. |
| 0:44 | (...) Pra escolher distros, hoje em dia é fácil. Basta ir em canais de reviews que tem de tonelada, como do camarada DioLinux ou outros que vem |
| 0:53 | crescendo como do Chris Tut. O comportamento padrão vai ser você vendo qual tem o visual que mais te atrai e daí |
| 1:00 | baixar um Deepin ou PopOS da vida, ou se quiser se sentir mais "edgy" e "gamer hipster" da |
| 1:06 | vida, um Garuda. É assim que 99% de todo mundo que usa Linux faz pra escolher. Além disso, a instalação de qualquer distro tá super trivial. |
| 1:15 | Você baixa o arquivo de ISO no Windows mesmo, usa um programa como o Rufus pra gravar essa ISO num pendrive. |
| 1:22 | Faz boot pelo pendrive e boom, tem um ambiente ao vivo de Linux já funcionando. Ele detecta sozinho praticamente todo o seu hardware. |
| 1:30 | Se nesse ambiente do pendrive parecer que tá tudo funcionando, daí tem um ícone de instalação. |
| 1:36 | Vai abrir o Calamares, que é o programa de instalação que quase toda distro moderna usa. |
| 1:41 | Por isso mesmo meio que tanto faz qual distro escolher, o processo de instalação é muito parecido. |
| 1:46 | O passo a passo que o Calamares abre é sempre o mesmo. Começa pedindo pra escolher que língua usa e que layout de teclado prefere. |
| 1:54 | Eu sempre escolho inglês e o layout US international que, até hoje, continua com o mesmo problema |
| 2:00 | de não suportar acento agudo no "c" pra gerar cedilha, mas isso é fácil de consertar com |
| 2:05 | um script que se acha fácil no Google. No caso do Ubuntu, pede pra escolher se quer instalar um monte de aplicativos como LibreOffice, |
| 2:12 | Gimp, aplicativo de fotos e coisas assim, ou uma instalação mínima, que é o que eu prefiro. Eu gosto de já escolher pra baixar os pacotes mais atualizados via internet e também instalar |
| 2:22 | software proprietário de terceiros, como codecs multimídia e drivers de placa de video da NVIDIA. |
| 2:28 | Se você é iniciante, nem dá bola pra isso, mas no mundo de software livre é uma discussão importante. |
| 2:34 | Por causa de licença de software, toda distro faz um esforço pra ter por padrão somente o que é de verdade software livre, com licenças como GPL ou BSD. |
| 2:43 | Porém, muitos dispositivos, em particular a NVIDIA, não libera o código fonte dos drivers, somente o binário fechado. |
| 2:50 | Mas se você instala isso no seu PC, está concordando com a licença restritiva da NVIDIA |
| 2:55 | e contaminando seu ambiente com software fechado. Do ponto de vista filosófico, não é recomendado. |
| 3:01 | Mas pra nós, usuários finais, meio que tanto faz isso. Por isso sempre habilito, porque eu não sou ativista de software livre. |
| 3:07 | E antes que você vá nos comentários pra dizer que viu notícia que a NVIDIA liberou código dos drivers, nem perca tempo, pra variar é matéria de jornalista bosta que |
| 3:16 | não sabe ler e não viu que eles liberaram só uma pequena parte do código só pra marketing. A parte importante continua fechada e, mais importante, com licença restritiva de uso. |
| 3:27 | Enfim, o próximo passo costuma ser pra escolher em qual SSD ou HD quer instalar, como quer |
| 3:32 | criar partições e com qual sistema de arquivos. O Calamares costuma ter essa primeira opção que diz o seguinte "eu sei que você não |
| 3:39 | tem idéia do que tá fazendo, então deixa que o papai aqui cuida de tudo pra você". É a opção pra idiotas, quero dizer, pessoas não-técnicas. |
| 3:47 | Ele vai apagar o disco todo e criar as partições automaticamente pra você. No caso do Ubuntu, recomendo pelo menos tentar instalar com o sistema de arquivos ZFS em |
| 3:56 | vez do ext4. Se você não tem idéia do que é isso, não esqueça que eu fiz uma minissérie inteira |
| 4:02 | explicando o que são partições, volumes, como o PC faz boot via EFI, e o que diabos |
| 4:07 | é ext4 ou ZFS. Então vai assistir depois. Finalmente, o Calamares vai mandar preencher um formulário com seu nome e que usuário |
| 4:15 | e senha quer cadastrar pra poder fazer login depois. Obviamente você deveria escolher uma senha aleatória e forte e não "senha123" ou "teste123". |
| 4:25 | Também te dá a opção de criar uma senha diferente pro usuário "root" que é o administrador da máquina. |
| 4:30 | Mas aqui estou escolhendo a opção preguiçosa que é usar a mesma pros dois usuários e fazer login automático porque só eu vou usar essa máquina mesmo. |
| 4:37 | E pronto. Acabou. Agora o Calamares vai copiar os arquivos do pendrive pra partição que acabou de criar. |
| 4:43 | Vamos acelerar porque essa é a parte que demora mais, de 15 minutos a meia hora dependendo do seu PC. |
| 4:49 | No final ele configura a carga do boot, e agora é só reiniciar e tá tudo instalado. |
| 4:54 | É absurdamente fácil instalar qualquer distro Linux que usa Calamares hoje em dia. |
| 5:00 | Olha só, vou acelerar aqui o boot, tirar o pendrive, e pronto. Um Ubuntu quentinho recém saído do forno, com tudo funcionando. |
| 5:08 | Se seu PC não for muito bosta, já vai estar tudo detectado, placa de vídeo, som, seu |
| 5:13 | teclado, mouse, wifi e tudo mais. Não precisa fazer mais nada. Muita gente acha o Ubuntu feio, e eu não discordo muito. |
| 5:20 | Apesar que eles tem melhorado o tema visual e até que hoje, pra mim, não cheira nem fede. Não teria nenhum problema de usar um Ubuntu sem mudar muita coisa. |
| 5:29 | A partir daqui, se você nunca mexeu com Linux antes, veja primeiro o meu video só sobre Ubuntu onde também explico os comandos e conceitos mais básicos que vou assumir que |
| 5:38 | todo mundo já sabe pra continuar este video. Se escolher um Linux Mint, Elementary, Budgie, Zorin ou PopOS, o funcionamento não vai diferir |
| 5:47 | porque todos são derivados de Ubuntu. Por isso que muito tutorial que funciona no Ubuntu vai funcionar neles também. |
| 5:53 | Cada um tem alguma característica pra se diferenciar. Seja ter um gerenciador de janelas customizado diferente, seja já ter coisas pré-instaladas |
| 6:01 | e pré-configuradas pro usuário não ter que configurar manualmente depois. Mas na prática, pra todos os efeitos e propósitos, é quase a mesma coisa que usar direto Ubuntu. |
| 6:11 | Antes de continuar, vamos olhar o que fizemos até agora. Um bom programador precisa se acostumar a fazer essas perguntas. |
| 6:17 | Você baixou um arquivo de ISO, gravou num pendrive, e ele logou uma versão light de |
| 6:22 | Ubuntu, sem nem ter instalado nada. Como isso é possível, já parou pra se perguntar isso? Vai, pensa alguns segundos. |
| 6:28 | Como que faz pra bootar um Linux de um pendrive a partir de um mero arquivão com extensão ponto ISO no final? |
| 6:35 | Se você assistiu minha minissérie sobre armazenamento e sistemas de arquivos talvez já saiba parte da resposta. |
| 6:41 | Deixa eu aproveitar pra mostrar alguns conceitos de Linux pra vocês. Um dos fundamentos inventados no UNIX original e herdado pelo Linux é a idéia de tentar |
| 6:50 | fazer tudo num computador ser representado como se fossem diretórios e arquivos. Por exemplo, talvez já tenha usado o comando `ps` pra listar os programas rodando. |
| 6:59 | Só `ps` sem nada mostra os processos que seu usuário iniciou, mas se usar opções como `ps aux` podemos ver todos os processos que foram iniciados desde o boot pelo usuário |
| 7:10 | `root` também. Já expliquei em outros videos sobre processos e como eles tem um PID, que é um process |
| 7:15 | ID, um número que identifica um processo e como podemos mandar sinais sigterm, como |
| 7:20 | `kill -9 pid` pra matar um processo forçadamente. Agora, lembrem que todo Linux costuma ter um diretório na raíz chamado `/proc`. |
| 7:28 | Posso fazer `ls /proc/pid` e olha só, aparece um monte de arquivos e diretórios falsos. |
| 7:34 | O que tem dentro desse diretório não são arquivos de verdade, são informações sobre esse processo representado como arquivos. |
| 7:41 | Por exemplo, posso usar um comando normal de arquivos como o `cat` que se usa pra listar o conteúdo de um arquivo texto. |
| 7:49 | Fazendo `cat /proc/pid/status` temos várias informações sobre esse processo, como quanto |
| 7:55 | de memória ele tá usando. Se eu quiser fazer uma ferramenta parecida com `ps, top ou htop` da vida, posso consultar |
| 8:03 | as informações de cada processo nessa árvore embaixo de `/proc`. Fica de exercício pra vocês fazer uma versão parecida com o comando top ou htop, mas usando |
| 8:12 | python ou javascript ou o que quiser, só lendo do diretório /proc, sem usar syscalls |
| 8:17 | pra kernel. Esse diretório não tem arquivos de verdade, só representações virtuais. Quando der boot, esse diretório desaparece. |
| 8:25 | Se você remover esse HD e ligar em outro PC como HD externo USB por exemplo, não vai |
| 8:30 | ter nada dentro. Esse diretório é o que chamamos de ponto de montagem, um mount point. |
| 8:36 | Tente digitar o comando `mount` no terminal. Vai aparecer uma lista como essa. Esses são os pontos de montagem ativos atualmente. |
| 8:43 | E que diabos é um ponto de montagem? Num Windows pontos de montagem costumam ser letras como C:, D:, E:. |
| 8:50 | Em Linux são sub-diretórios. Pra explicar isso você precisa entender que, uma coisa é o hardware de armazenamento como |
| 8:58 | um HD ou pendrive. Outra coisa é como o sistema operacional acessa esse hardware. O que é um dispositivo de armazenamento? |
| 9:05 | Cansei de repetir em vários videos que são dispositivos que gerenciam blocos de bits, |
| 9:12 | ou block devices. Seja um CD, um pendrive USB ou um SSD, todos são dispositivos de bloco. |
| 9:18 | E por acaso, num Linux temos comandos como `ls` que a essa altura você já sabe que significa `listar` e `blk` ou seja listar block devices. |
| 9:26 | E agora sim temos os nomes dos dispositivos plugados no meu PC, por exemplo, o HD principal se chama `sda`. |
| 9:32 | Um segundo HD se chama `sdb`, um pendrive, quando plugar vai aparecer como `sdc` ou `sde`. |
| 9:39 | Além de `/proc` existe outro ponto de montagem que toda distro Linux monta automaticamente |
| 9:44 | no boot, que é o `/dev`. De novo, o que tem dentro não são diretórios nem arquivos de verdade. |
| 9:50 | Ele representa os dispositivos de armazenamentol. Por isso em muitos tutoriais por aí você já deve ter esbarrado num `/dev/sda` da vida. |
| 9:57 | Isso não é um arquivo, é um canal pra falar com o HD físico "via" um arquivo virtual. |
| 10:03 | No Windows funciona assim também, o HD principal costuma ter o nome de `\\\\.\\PhysicalDisk1`. |
| 10:09 | Abre um Powershell no Windows e digita `Get-PhysicalDisk`. Por exemplo, esse meu NVME Samsung 970 EVO Plus de 2TB se chama PhysicalDisk2. |
| 10:18 | Num Linux um nome equivalente seria `/dev/sdc`. Beleza, o Linux tá enxergando os dispositivos, mas agora como navego dentro desses dispositivos? |
| 10:28 | Agora eu preciso de um mount point. O ponto de montagem é justamente dizer que a partição 1 do drive `/dev/sda` vai ser |
| 10:36 | o diretório raíz "/" e é pra interpretar os bits desse canal usando o sistema de arquivos |
| 10:42 | ext4. Leia o arquivo "/etc/fstab" que significa tabela de file system. Em cada linha vai ter dizendo a partição do disco, o ponto de montagem, o sistema de |
| 10:52 | arquivo e opções, por exemplo, pra abrir só pra leitura, caso seja um CD-ROM. Quando espeto um pendrive nesse meu Ubuntu, automaticamente aparece aqui no meu desktop. |
| 11:01 | Isso porque tem um serviço rodando em background que vai rodar pra mim o comando `mount -t |
| 11:07 | vfat /dev/sdc /run/media/akitaonrails/pendrive`, por exemplo. Em distros mais antigas, eu precisaria rodar esse comando manualmente no terminal se quisesse |
| 11:18 | acessar o pendrive. E o equivalente a dar um eject é rodar o comando `umount /run/media/akitaonrails/pendrive`. |
| 11:25 | Sacaram? Montar é dizer pro sistema operacional como esse dispositivo foi formatado e onde quero |
| 11:31 | que ele apareça e com qual sistema de arquivos é pra interpretar os bits dentro. No Windows isso é feito em aplicativos com o Disk Management, onde posso mudar o ponto |
| 11:41 | de montagem, que no caso é só uma letra de drive, como E:. Vamos recapitular o que já expliquei nos videos sobre volumes e partições. |
| 11:49 | Num computador moderno, logo que liga, quem vai carregar primeiro é um software chamado |
| 11:54 | firmware, que muitos ainda chamam erroneamente de BIOS. Mas é o software que não está no HD e sim num chip de memória na placa mãe. |
| 12:02 | Por isso que mesmo num PC sem HD nenhum, se você ficar apertando uma tecla como "delete" |
| 12:07 | várias vezes, entra naquele software de configuração, onde pode atualizar a data e outras configurações |
| 12:13 | do sistema. Antigamente esse software era chamado BIOS mesmo, que significa Basic Input/Output System, |
| 12:20 | ou sistema básico de entrada e saída que literalmente tem o básico só pra conseguir identificar seu monitor, teclado e mouse pra você conseguir interagir com o computador |
| 12:29 | antes de tentar carregar o sistema operacional do disco. Mas BIOS era um sistema básico até demais, que só conseguia lidar com identificadores |
| 12:37 | de 16-bits, o que impossibilita usar HDs com mais do que 4 partições. Nos anos 90 isso já era pouco e representava um problema. |
| 12:46 | Por isso hoje todo PC moderno tem um firmware UEFI que significa Universal Extensible Firmware |
| 12:51 | Interface. UEFI é um padrão pra firmwares. Além disso antigamente partições eram organizadas com MBR ou Master Boot Record, que é o registro |
| 13:01 | mestre de boot no HD, que são os bits de boot do sistema operacional que a BIOS vai tentar executar logo na sequência. |
| 13:08 | Hoje em dia é UEFI e GPT que é o GUID Partition Table. Eu falei que antigamente estávamos limitados a 4 partições com identificadores de 16-bits. |
| 13:17 | Em GPT, em vez de números, usamos GUIDs que é uma sequência de 32-bits. |
| 13:23 | Números parecidos com esse aqui que você já deve ter visto. Parece aleatório e não são sequenciais. |
| 13:28 | E com isso hoje podemos ter quantas partições de quantos tipos quisermos. Expliquei tudo isso em mais detalhes no video de tudo que você queria saber sobre dispositivos |
| 13:37 | de armazenamento, depois assiste lá. Gerenciadores de boot como LILO ou Grub foram criados pra conseguir lidar com as limitações |
| 13:45 | de BIOS e MBR. Com UEFI e GPT nem precisa mais deles, o próprio firmware tem capacidade pra fazer boot de |
| 13:52 | qualquer partição GPT, basta ter o bootloader numa partição que o UEFI consiga ler, formatado |
| 13:58 | em fat32, por exemplo. E isso me faz voltar aqui pro nosso Linux de exemplo. |
| 14:04 | Vamos ver o arquivo "/etc/fstab" de novo. Olha só, tem uma partição `/dev/sda1` cujo ponto de montagem é "/boot". |
| 14:11 | E de um terminal normal mesmo, usando comandos mundanos como "ls" podemos ver que tem um diretório chamado `/boot/efi` e é aqui que fica o bootloader, ou literalmente o carregador |
| 14:20 | de boot que o firmware UEFI vai carregar depois do POST. É nesse ponto que o firmware UEFI pára de executar e dá controle pro bootloader. |
| 14:30 | O bootloader é quem vai de fato carregar a kernel do sistema operacional, no caso o Linux. |
| 14:36 | E é logo um diretório pra trás, em "/boot" que está o Linux de verdade. É um binário executável chamado “vmlinuz” até que pequeno, de pouco mais de 10 megabytes, |
| 14:46 | já compilado com os principais drivers que precisa pra iniciar o sistema, como driver pra ler HD e abrir a partição formatada nele, onde vai estar o resto do sistema operacional. |
| 14:56 | O bootloader vai se encarregar de executar o binário e é nesse estágio que a tal kernel do Linux finalmente vai começar a exercer controle sobre a máquina. |
| 15:06 | A kernel vai começar a carregar drivers pra ter acesso à memória, aos discos, a periféricos como teclados, monitor e tudo mais. |
| 15:13 | Uma vez que agora a kernel tem controle, ela vai criar um espaço em memória com uma partição virtual, usando um initramfs, literalmente file system de ram de inicialização. |
| 15:23 | Sabe seus diretórios de Linux na raíz do seu HD? Pensa uma versão menor disso, mas montado em RAM. |
| 15:29 | Esse sistema de arquivos estava comprimido junto com a kernel naquele arquivo em "/boot", é esse outro arquivo chamado “initrd.img”, veja que ele é bem maior com uns 100 megabytes. |
| 15:40 | Mas deixa eu fazer uma tangente pra ficar mais claro. Vamos abrir o terminal de novo. Existe uma ferramenta que costumamos usar pra fazer clones de HDs ou pendrives no nível |
| 15:49 | dos blocos, independente se tá formatado em ext4, ntfs ou fat32. |
| 15:55 | É o comando "dd". E o que significa "dd"? Significa Copy and Convert .. eh, deveria ser "cc" só que CC em Linux já significa |
| 16:04 | "C Compiler", então escolheram a letra seguinte .. eh, programador é uma bosta pra dar nome pras coisas. |
| 16:09 | Mas enfim, dd funciona assim, tem um parâmetro "if" que não sei se era "input file", é onde coloco o caminho do dispositivo que quero copiar, tipo "/dev/sdc" e no parâmetro "of" |
| 16:20 | que talvez seja "output file" coloco o path de pra onde quero copiar. Aquele programa de Windows chamado Rufus? |
| 16:27 | É mais ou menos a versão gráfica desse comando. Por exemplo, se do terminal de um Linux eu quiser gravar aquele arquivo de ISO no meu |
| 16:35 | pendrive, poderia ter feito `dd if=ubuntu.iso of=/dev/sdc` e pronto. Lógico, tenho que garantir que “/dev/sdc” realmente é meu pendrive, porque se eu confundir |
| 16:46 | com uma partição do meu HD, esse comando vai gravar a ISO por cima e já era meus arquivos que tavam lá. |
| 16:51 | Agora, só pra complicar deixa mostrar mais alguns truques de Linux que talvez vocês não saibam. Naquele ponto de montagem "/dev" que tem representado dispositivos como meus HDs ou pendrives, também |
| 17:02 | temos alguns dispositivos virtuais especiais como "/dev/null" ou "/dev/urandom". |
| 17:08 | De novo, podemos usar comandos como `cat` com eles. Vamos fazer `cat /dev/null` e, uau, nada. |
| 17:14 | Como o próprio nome diz, esse dispositivo devolve nulo. Mas muitos scripts gostam de usar ele pra mandar coisas que quero jogar no lixo. |
| 17:23 | Por exemplo, digamos que eu rode um comando que imprima várias informações na tela que não estou interessado. |
| 17:28 | Posso redirecionar o stdout do comando pra /dev/null pra ele ser engolido e mandado pro |
| 17:34 | limbo. Um exemplo besta é o comando "echo" que só imprime na tela. Coloco um sinal de "maior" pra redirecionar pra "/dev/null" e pronto, engoliu o saída. |
| 17:43 | Se começar a fuçar scripts de shell, vai esbarrar mais nisso. O "/dev/urandom" por outro lado é um dispositivo que cospe bits aleatórios. |
| 17:53 | Muitas funções de muitas linguagens, incluindo as funções da kernel do Linux e bibliotecas de criptografia usam esse dispositivo quando precisam gerar números aleatórios. |
| 18:03 | Tecnicamente, isso é um PRNG ou pseudo random number generator. É um gerador de números pseudo aleatórios. |
| 18:10 | Em computador não existe aleatoriedade verdadeira, só uma aproximação. Teríamos que explorar conceitos como entropia e tudo mais pra justificar isso, mas não |
| 18:19 | é objetivo de hoje, só entenda que existe isso. Pra hoje, mais importante é outro dispositivo virtual, o "/dev/zero". |
| 18:26 | Assim como o "/dev/null" se eu redirecionar a saída stdout de qualquer comando pra ele, vai engolir tudo. |
| 18:32 | Por outro lado se der um `cat` ou ficar lendo dele, vou receber literalmente nada, só caracteres |
| 18:38 | nulos. Vai cuspindo nulos infinitamente até eu forçar a parada com Ctrl+C. E pra que diabos isso serve? |
| 18:45 | Porque posso usar numa outra ferramenta que aceita dispositivos como parâmetro, como nossa ferramenta "dd". |
| 18:51 | E se em vez de ler de um arquivo de ISO, eu ler desse dispositivo "/dev/zero"? |
| 18:56 | Vamos voltar ao comando "dd" e fazer `dd if=/dev/zero of=hello.img bs=1M count=10` que significa, |
| 19:04 | leia bits do dispositivo "/dev/zero" e grave num arquivo chamado "hello.img" usando blocos |
| 19:10 | de 1 megabyte de tamanho e contando até 10, ou seja, até gerar um arquivo de 10 megabytes. |
| 19:16 | Pronto. Criei um arquivo cujo conteúdo é só de zeros. Olha só, `ls -la` e o arquivo tem mesmo 10 megabytes. |
| 19:22 | Se usar o comando `cat`, não imprime nada, porque dentro é tudo bits vazios. E mesmo se usar um comando que lê binários como `hexdump`, ele mostra que os primeiros |
| 19:30 | bits são todos 0 e esse asterisco significa que todo o resto é igualzinho à primeira linha até o endereço 10 megabytes. |
| 19:37 | E pra que diabos preciso de um arquivo totalmente vazio ocupando espaço com bits zero? |
| 19:43 | Bom, em Linux temos comandos pra formatar partições do seu HD como `mkfs.ext4` ou |
| 19:49 | `mkfs.vfat` onde "mkfs" literalmente quer dizer "make file system". |
| 19:55 | Sabe no Windows quando espeta um pendrive, vai no explorar em cima da letra do drive e com o botão direito do mouse escolhe a opção de "formatar"? |
| 20:01 | É a mesma coisa só que na linha de comando de Linux. Vamos formatar esse arquivo então. |
| 20:06 | No caso, vou formatar com o `mkfs.vfat` pra formatar em FAT32, como eu faria com um pendrive |
| 20:12 | que gostaria de conseguir ler independente de que sistema operacional espetar ele. Só fazer `mkfs.vfat -F 32 hello.img`. |
| 20:20 | Não sei se vocês estão conseguindo entender, normalmente se usa um comando como `mkfs.vfat` |
| 20:26 | na partição de um dispositivo hardware de verdade, como em "/dev/sda1", mas dá pra |
| 20:32 | formatar dentro de um arquivo. E lembra como usando comandos como `cat` ou mesmo `hexdump` só voltava vazio? |
| 20:39 | E agora? O que tem nesse arquivo? Vamos ver. E temos o cabeçalho de uma partição FAT32. |
| 20:45 | Olha só do lado direito o que ele reconhece como caracteres ASCII com mensagens de erro e dizendo que é FAT32. |
| 20:51 | Essa é exatamente a mesma sequência de bytes que encontraríamos lendo direto de um pendrive. |
| 20:57 | Vamos ver? Vamos plugar o pendrive e fazer o mesmo comando de "hexdump" direto do "/dev/sdb1" e olha |
| 21:04 | só, esse é o pendrive. São os mesmos tipos de bytes. E já sabemos que a partir de um "/dev/sdb1" podemos montar num diretório como "/run/media/" |
| 21:14 | da vida. E esse arquivo que acabamos de formatar, dá pra montar também? Basta criar um diretório qualquer como `mkdir hello` e fazer `mount -t vfat hello.img hello`. |
| 21:26 | Podemos dar `cd hello` e agora estamos DENTRO do arquivo hello.img. Sacaram? |
| 21:32 | Deixa eu criar um arquivo texto qualquer chamado "blabla.txt" com qualquer coisa dentro e salvar. Vamos listar e olha só o arquivo. |
| 21:38 | Agora vamos sair desse diretório com "cd .." e desmontar isso. Só fazer `umount hello`. |
| 21:44 | Se tentarmos listar o conteúdo do diretório hello agora, não vai ter nada, porque o arquivo blabla ficou dentro do hello.img que acabamos de ejetar, como se fosse um pendrive que desconectamos. |
| 21:55 | O arquivo blabla não foi criado dentro desse diretório. O diretório só tava servindo como ponto de montagem PRA DENTRO do hello.img. |
| 22:04 | Se eu fizer um hexdump no hello.img olha aqui no fim, os bytes do arquivo que criamos tá |
| 22:09 | dentro dele. Este arquivo hello.img, do ponto de vista do sistema operacional é a mesma coisa que |
| 22:14 | um pendrive, só que sem a parte hardware, só os bits, o linguição de bits. |
| 22:19 | Se ficou confuso, vamos repetir. Lembra o arquivo de ISO que baixamos do site do Ubuntu e gravamos no pendrive? |
| 22:24 | É um arquivão que chamamos de “imagem”. Vamos montar aqui no mesmo diretório hello. |
| 22:29 | Só fazer `mount -t iso9660 -o ro ubuntu.iso hello`. No caso, um CD-ROM é formatado no padrão iso9660, não é fat nem ext4. |
| 22:39 | E coloquei a opção de "ro" porque CD-ROM é read-only, só de leitura, não dá pra |
| 22:44 | modificar nada dentro. Vamos listar o que tem em hello e olha só, todos os arquivos que estão dentro do ISO. |
| 22:50 | É isso que é gravado pelo Rufus num pendrive que queremos dar boot de Ubuntu. Tem o diretório "boot" com o bootloader, o kernel e tudo mais que precisa pra conseguir |
| 22:59 | bootar. É isso que é um LiveCD. Mas o objetivo de toda essa história é pra vocês começarem a largar noções que existe |
| 23:07 | uma entidade física chamada "dispositivo", como um HD ou pendrive, e entender que disposivo |
| 23:14 | de bloco é literalmente qualquer sequência de bits, qualquer linguição de bits, como |
| 23:19 | um arquivo, ou uma conexão de rede. Basta ser formatado de uma forma que dê pra montar com o comando `mount`. |
| 23:26 | O sistema operacional não tem preconceitos. Pra ele foda-se se você espetou um pendrive ou se montou um arquivão de imagem. |
| 23:34 | Pra ele só interessa: eu consigo ler e gravar blocos de bits? Então tá, pra mim é um drive. |
| 23:40 | E é assim que consigo montar coisas como um Google Drive ou Dropbox como se fosse um pendrive virtual também. |
| 23:46 | Só que diferente de gravar os bits num arquivo local, o driver de sistema de arquivo do Google |
| 23:52 | Drive vai mandar os bits pela rede pra sua conta no Google. Mas pro sistema operacional, foda-se. |
| 23:58 | Ele mandou blocos, o driver de sistema de arquivos recebeu e disse que gravou. O sistema operacional tá pouco se lixando o que acontece com os bits, ele delega e só |
| 24:07 | espera ouvir um "ok, tá gravado" e fica feliz. O que fizemos com a ferramenta "dd" dá pra fazer o equivalente no Windows com a ferramenta |
| 24:16 | Disk Management. Olha só, temos essa opção de "Criar VHD" que é virtual hard disk, que é o arquivão |
| 24:22 | vazio. Vamos criar um simples de uns 10 megabytes. Uma vez criado posso anexar esse VHD e tornar ele disponível como um PhysicalDisk numerado. |
| 24:32 | Agora ele aparece aqui embaixo, olha só. Ele vai se comportar como se fosse um pendrive ou HD externo. |
| 24:37 | Eu posso escolher a opção pra formatar como NTFS e no final posso montar com um drive, |
| 24:43 | digamos letra P. Agora o P: é um drive virtual e podemos mover arquivos, criar diretórios, o que quiser. |
| 24:50 | E no final é só desanexar, que é o equivalente de ejetar. De dentro do Linux posso usar aquele comando hexdump nesse arquivão VHD. |
| 25:00 | E parecido com o arquivão hello.img que criamos com "dd", é basicamente um linguição de zeros igualzinho. |
| 25:06 | Olha a linha de zeros e o asterisco embaixo. Mas lá embaixo no arquivo, do endereço a00020 hexa em diante, tem um metadado pra identificar |
| 25:15 | esse arquivão como um VHD. Só por causa desses bytes, que o arquivão que criei com "dd" não se enquadra como um |
| 25:23 | VHD. Mas na prática é quase a mesma coisa: um linguição de bits zeros. Voltando pro boot do Linux, parei no ponto onde o bootloader EFI o binário do kernel |
| 25:32 | no diretório “/boot”. Esse arquivo normalmente é chamado de vmlinuz, muitas vezes o nome segue com a versão da |
| 25:38 | kernel, como 5.15. A gente costuma chamar uma distro como Ubuntu ou Fedora de “Linux”, mas na verdade Linux |
| 25:45 | mesmo é só esse um arquivo binário, a kernel. O resto do sistema operacional, o certo é chamar de GNU/Linux, ou seja, ferramentas |
| 25:54 | GNU que rodam em cima de um kernel Linux. Quando o bootloader tem acesso a esse arquivo é quando iniciamos a segunda fase de boot. |
| 26:03 | Normalmente, no mesmo diretório "/boot" vai ter um outro arquivo, um "initrd.img". |
| 26:09 | Esses nomes vão variar de distro pra distro, mas no caso do Ubuntu e todo mundo que é derivado de Debian, o arquivo vmlinuz e o initrd.img são links simbólicos, tão vendo? |
| 26:19 | O arquivo de verdade é esse que termina com "generic" no nome. A vantagem de ser link simbólico é porque posso querer deixar kernels mais antigas depois |
| 26:27 | de um upgrade do sistema. Vai que a kernel mais nova veio com algum bug ou incompatibilidade e ferra meu sistema, |
| 26:33 | impedindo bootar? Não tem problema, se isso acontecer, basta resetar o PC. Vai voltar pro firmware UEFI da placa mãe que, por sua vez vai carregar o bootloader |
| 26:42 | em "/boot/efi" ou o GRUB, que é aquela tela que tem no começo do boot da maioria das |
| 26:48 | distros Linux. Eu sei que você só dá enter direto sem pensar muito em pra que ela serve. |
| 26:53 | Nessa tela costuma ter uma opção pra justamente poder escolher outra kernel e outras opções de recuperação. |
| 26:59 | Assim dá pra bootar na kernel da versão anterior, que sabemos que funcionava, e ter a oportunidade de consertar alguma coisa. |
| 27:05 | Basta mudar o link simbólico pra kernel e initrd.img anterior e vai voltar a bootar |
| 27:11 | normalmente até sair uma correção pra kernel mais nova. É raro acontecer, mas se acontecer existe essa opção. |
| 27:18 | Enfim, o arquivo initrd.img é um zipão comprimido, pode ser qualquer formato, a distro que decide. |
| 27:24 | No caso do Ubuntu, eu falei “zipão”, mas não é exatamente um zip como feito pela ferramenta "gzip" mas sim um arquivo formato CPIO comprimido com LZ4, o Lempel-Ziv 4. |
| 27:35 | Eu expliquei o que é Lempel-Ziv no video "De 5 Tera a 25 Giga", depois assiste lá |
| 27:40 | pra saber como compressão funciona. Enfim, o importante é que em Ubuntu podemos usar a ferramenta `unmkinitramfs` pra descomprimir |
| 27:49 | essa imagem em qualquer lugar. E olha só, se listarmos o que descomprimiu, vai parecer familiar com a estrutura de diretórios |
| 27:56 | do seu Linux de verdade. Isso é o mínimo que a kernel precisa pra conseguir terminar o boot. |
| 28:02 | Só que aqui descomprimimos essa imagem no nosso HD local. O grande lance é que depois do bootloader conseguir carregar a kernel, ela precisa ter |
| 28:10 | acesso a esses arquivos pra conseguir carregar coisas como driver do seu HD. Por exemplo, e se seu HD tiver partição encriptada com LUKS? |
| 28:18 | Ou se estiver em configuração de RAID dentro de um volume LVM? Como o kernel vai conseguir carregar o driver de RAID pra conseguir montar a partição |
| 28:26 | se já não estiver compilada estaticamente? São drivers como esse que estão nesse initrd. |
| 28:32 | Só que o initrd em si precisa ser descomprimido em algum lugar. E aqui vou continuar simplificando, mas o que acontece é que a kernel pode não ter |
| 28:40 | acesso ao seu HD no boot. Pode não ter os drivers pra isso. Mas ele tem acesso à RAM. |
| 28:45 | Lembra o lance de criar um um arquivo com o comando "dd" vazio e formatar pra ser um pendrive virtual? |
| 28:51 | Podemos fazer a mesma coisa na RAM, criar um espaço de bits que vai servir pra dar mount num sistema de arquivos e descomprimir o conteúdo do arquivo initrd pra lá. |
| 29:01 | Por isso que mesmo se você mandar encriptar sua partição principal ou configurar volumes em RAID, sempre vai ter pelo menos essa pequena partição de boot logo no começo do HD que |
| 29:11 | é formatado em FAT32. Aí o firmware da máquina consegue acesso. Não desperdiça muito espaço, é super pequeno, com não muito mais que uns 100 megabytes. |
| 29:21 | Por isso o initrd é um arquivo compactado, pra caber nessa partição. No Windows mesmo, se você abrir a ferramenta de Disk Management e olhar seu HD, veja, tem |
| 29:30 | essa partição maior onde fica o Windows, e seria o que um BitLocker encriptaria se |
| 29:35 | você escolher. Mas olha aqui no começo, tem um partição pequena de EFI, que é o equivalente no Linux |
| 29:40 | ao "/boot" que estamos analisando. Você não enxerga essa partição de boot EFI no Windows porque ele não monta com nenhuma |
| 29:47 | letra de drive, pra não aparecer pros usuários e correr o risco deles estragarem o boot. |
| 29:53 | No caso do Windows, lá no fim do HD tem outra partição escondida sem letra de drive que é a partição de recuperação. |
| 30:00 | Ele é como se fosse o pendrive do Ubuntu que bootamos pra instalar. É o que boota quando você pede pro Windows iniciar em modo de recuperação pra conseguir |
| 30:08 | diagnosticar algum problema que tá bloqueando o boot do Windows principal. É outro Windows, com kernel e drivers separados, em versão reduzida só com ferramentas de |
| 30:19 | diagnóstico e recuperação. No caso de Linux não temos uma partição assim, porque normalmente usamos pendrive |
| 30:26 | mesmo. Mas é a mesma coisa, a gente gasta um espaço no HD pra ter a comodidade de não ter que |
| 30:31 | sair procurando pendrive se uma hora seu Windows parar de bootar depois de um Windows Update. |
| 30:36 | Já tá tudo no seu HD. Como espaço de HD é barato, podemos desperdiçar algumas centenas de megas. |
| 30:42 | Se você tá pensando em apagar essa partição pra ter um pouco mais de espaço, é hora de pensar em comprar um HD maior, isso sim. |
| 30:50 | Em Macs também tem uma partição escondida com um MacOS reduzido só com ferramentas |
| 30:55 | de manutenção que você consegue acessar se na hora do boot deixar apertado Command + R. |
| 31:01 | Enfim. Nesse segundo estágio de boot, vamos acabar com um drive virtual em RAM, chamado initramfs |
| 31:08 | ou file system de RAM de inicialização, onde o conteúdo do initrd.img vai ser descomprimido |
| 31:14 | e com isso temos um mini Linux inicializado em memória. Agora sim, a kernel vai ter acesso a drivers extras que precisa e diversas outras ferramentas |
| 31:23 | que pode precisar pra pular pra próxima fase. Estamos na terceira e última fase do boot. |
| 31:29 | Agora que começa aquela etapa que já viu no boot do seu Linux, quando vai correndo um monte de linhas que eu sei que você nunca parou pra ler. |
| 31:36 | Aquele monte de linhas é o gerenciador de serviços reportando cada um dos serviços que tá conseguindo carregar naquele momento. |
| 31:43 | Esse gerenciador pode ser o famigerado systemd que tem na grande maioria das distros modernas, |
| 31:48 | ou o OpenRC que tem em distros como Slackware ou Gentoo, ou o Runit que acho que é um dos |
| 31:54 | mais antigos, derivados da era dos UNIX originais. Acho que distros baseadas em BSD ainda usam também. |
| 32:00 | Mas seja lá qual for, esse é o primeiro processo que a kernel vai carregar no seu sistema, o famoso processo com ID 1, o PID número 1. |
| 32:09 | Agora sim, esse sistema de inicialização vai se encarregar de carregar todo o resto |
| 32:15 | dos serviços necessários pra ter um sistema usável. Agora ele consegue acessar a partição principal do seu HD e ler o arquivo "/etc/fstab", que |
| 32:23 | é a tabela de file systems onde tá declarado que partição é pra montar como "/", a raíz |
| 32:29 | do seu sistema operacional. Ele vai dar mount em tudo que precisa, incluindo os mounts especiais como o /proc, /dev, /sys. |
| 32:36 | Vai carregar os serviços de USB pra achar seu mouse ou sua webcam, serviço de bluetooth |
| 32:41 | que vai conectar com seu fone de ouvido, serviço de network que vai carregar seu wifi, serviço |
| 32:46 | de dhcp client que vai pedir IP pro servidor de DHCP do seu roteador de internet e assim por diante. |
| 32:52 | Eu zoei que você nunca prestou atenção nesse monte de linhas subindo no boot porque vai rápido demais mesmo. |
| 32:57 | Pra ver em detalhes o que aconteceu, use o comando `dmesg` depois do boot que lá vai ter essas linhas. |
| 33:03 | Se um serviço deu pau, use o comando `systemctl statusad e o nome do serviço pra ver se tem |
| 33:08 | alguma dica. Esses serviços tem mais um detalhe na realidade. Logo que a kernel carrega um systemd ou runit, ele tem que ver em qual runlevel vai rodar. |
| 33:18 | Isso também meio que varia, especialmente entre Linux e UNIX ou BSD, mas todos tem conjuntos |
| 33:24 | diferentes de serviços que carregam em runlevels diferentes. Mas, Runlevel? Aí fodeu, deixa eu voltar na história um pouquinho. |
| 33:31 | Vamos voltar pro boot, a kernel tá carregada, ele carrega seu primeiro programa, de process ID 1, que antigamente era chamado simplemente de "init". |
| 33:39 | Esse init ia num diretório como "/etc/rc3.d" e lá ia achar vários links simbólicos pra |
| 33:46 | scripts que costumavam ficar em "/etc/init.d". Então cada sub-diretório "rc1.d" ou "rc3.d" podia ter coleções diferentes de links simbólicos |
| 33:56 | de scripts. Os scripts em si ficavam em "/etc/init.d". É o que a gente chama de serviços ou daemons. |
| 34:03 | Eram scripts de shell, que aceitavam parâmetros como "start" ou "stop" e dentro configuravam |
| 34:09 | e executavam algum binário, por exemplo, programa e impressora pra montar o spool de impressão, ou o programa X que carrega a interface gráfica e assim por diante. |
| 34:17 | Um daemon é um programa executável normal, com a diferença que tem esse script que inicia |
| 34:22 | ou termina o programa. E o sistema de init executa esses scripts pra inicializar os serviços durante o boot |
| 34:29 | do sistema. Agora, nesse tal de "/etc/rc3.d" o “rc” é acrônimo pra "run commands" ou rode comandos |
| 34:38 | do "runlevel" ou nível de execução 3. Parece complicado mas originalmente cada runlevel tem uma função específica, o runlevel 0 |
| 34:46 | é pra procedimento de shutdown, o runlevel 6 pra reboot. Runlevel 1 é pra bootar em modo de um usuário só. |
| 34:52 | Runlevel 3 é pra multi-usuário com rede. Runlevel 5 costuma ser pra bootar com interface gráfica. |
| 34:58 | Se você é de Windows, ele vem com pelo menos 2 runlevels, o do boot normal que cai no Windows |
| 35:04 | e aquele "Modo de Segurança" ou "Safe Mode", lembra? Que boota o Windows sem carregar todos os drivers e serviços, daí você fica sem rede, |
| 35:11 | com resolução baixa, tudo pra quando tiver algum problema no boot, ter um ambiente pra bootar sem carregar quase nada, pra te dar a oportunidade de diagnosticar e consertar |
| 35:21 | o problema. Runlevel é isso, quais conjuntos de serviços vai carregar ou não. Vamos ver isso na prática. |
| 35:28 | Abrindo o terminal de novo, podemos digitar o comando `runlevel` e vai dizer que estamos com o runlevel 5 carregado. Digamos que instalamos algum programa gráfico instável que travou tudo. |
| 35:37 | Teclado não funciona, mouse não funciona, nenhuma janela se mexe. Vou simular carregando o Firefox. |
| 35:42 | Faz de conta que foi ele que travou tudo. Nesse ponto a maioria de vocês ia apertar o botão de reset e rebootar. |
| 35:48 | Mas a gente que é de Linux tem outra saída: usar a combinação de teclas Ctrl + Alt + |
| 35:53 | F3 pra mudar pro runlevel 3 que é de multi-usuário com rede em modo texto. |
| 36:00 | Olha isso, saímos do modo gráfico, que continua rodando no runlevel 5. Agora fazemos login em modo texto e podemos usar comandos como `ps aux \| grep firefox`. |
| 36:09 | Lembra? Na nossa historinha, ele travou tudo, então vamos matar forçadamente com o comando `kill |
| 36:15 | -9` e o PID dele. Pronto, agora podemos voltar pro modo gráfico. Normalmente eu diria que é só apertar a combinação Ctrl + Alt + F5 mas por alguma |
| 36:23 | razão quando tava escrevendo o script do episódio, isso não funciona, mas Ctrl + Alt + F1 funciona. |
| 36:29 | Enfim, veja como o programa de terminal continua aqui, mas o Firefox morreu. A resolução que zoou aqui, mas deve ser porque tá rodando numa máquina virtual. |
| 36:37 | Esse é um dos jeitos de tentar destravar alguma coisa antes de ser drástico e dar |
| 36:42 | reset na máquina toda. Dá pra mudar de runlevels no terminal também usando o comando `telinit` com o número do |
| 36:49 | runlevel. O runlevel 1 na realidade é usado pra manutenção e diagnósticos. E se você mudar pro runlevel 6, isso vai dar reboot na máquina, vamos ver? |
| 36:58 | `sudo telinit 6` e olha só, rebootou. Sabe quando você usa no terminal comandos como `shutdown` ou `reboot`? |
| 37:04 | É isso que ele tá fazendo, mudando pro runlevel 6. E por que isso é importante? |
| 37:10 | Runlevels determinam quais conjuntos de serviços iniciar ou desligar. Você nunca quer forçadamente apertar reset. |
| 37:17 | Tem vários programas rodando em background, coletando arquivos de log, tem partições montadas que podem ainda não ter feito flush de caches. |
| 37:25 | Você quer notificar todos os programas rodando pra fechar e limpar as coisas antes de realmente |
| 37:31 | desligar a máquina, é o que chamamos de graceful shutdown ou desligamento gracioso. |
| 37:36 | Se ficar dando reset forçado, uma hora vai corromper arquivos ou partições no sistema, por isso nunca force desligar, sempre dê halt, que é mudar pro runlevel 0. |
| 37:46 | Vamos desligar? `sudo shutdown -h now` ou simplesmente `sudo telinit 0`. |
| 37:51 | Na prática, quando o sistema boots, a kernel carrega e inicia um processo 1 como o antigo |
| 37:57 | "init" ou o atual "systemd", ele vai carregar o conjunto de serviços declarados pro runlevel |
| 38:03 | padrão, que costuma ser o runlevel 3 em servidores que não tem interface gráfica ou o runlevel |
| 38:08 | 5 em desktops e PCs como de vocês assistindo, que vai bootar os serviços pro modo gráfico. |
| 38:13 | Na prática significa que você tem diversas formas diferentes de bootar, só que o padrão pra maioria das instalações é entrar no runlevel 5 que é gráfico. |
| 38:22 | Vamos fazer outro exercício. Digamos que de jeito nenhum consigo entrar no modo gráfico depois de um upgrade ou script |
| 38:28 | mal feito que rodei na máquina, sei lá. Não boota. Nesse ponto a maioria das pessoas já ia pensar "que bosta, cadê meu pendrive, vou reinstalar |
| 38:36 | tudo do zero". Calma! No Ubuntu, ele faz como o Windows, tenta ir direto pra tela gráfica. |
| 38:42 | Mas se antes do computador ligar deixarmos a tecla shift apertada, a tela do GRUB vai |
| 38:47 | aparecer. GRUB é acrônimo pra Grand Unified Bootloader. Como o nome diz, é um bootloader. |
| 38:53 | É ele que o computador vai carregar no boot, e depois se encarregar de achar a kernel do Linux e passar o controle pra ele. |
| 39:00 | O Ubuntu sempre boota com Grub, mas ele carrega quieto, por isso que nunca vemos. Com a tecla shift apertada forçamos a aparecer. |
| 39:07 | Por padrão vai bootar com essa primeira opção aqui, mas podemos apertar a tecla "e" pra editar os comandos de boot da kernel. |
| 39:14 | Daí vamos pra essa linha aqui embaixo e no final escrevemos o número 3, indicando que queremos bootar no runlevel 3 em vez do padrão que é o 5. |
| 39:22 | Com ctrl + x saímos e vai bootar os serviços do runlevel 3, e olha só, não carrega mais |
| 39:27 | o modo gráfico, podemos logar em modo texto e tentar consertar seja lá o que eu fiz de errado. |
| 39:32 | Daí, no próximo boot vai normalmente pro runlevel padrão que é o 5, de modo gráfico. |
| 39:38 | Então a sequência é sempre essa: computador liga, carrega o firmware UEFI da placa mãe que vai inicializar o hardware e os dispositivos. |
| 39:45 | Ele vai procurar a primeira partição no HD ou pendrive que tenha o diretório /boot/efi. |
| 39:50 | No nosso caso, dali vai carregar o bootloader do GRUB. O GRUB por sua vez tem uma configuração, que foi o que editamos agora, que diz onde |
| 39:58 | tá a kernel e onde tá a imagem do initrd. Executa a kernel, monta uma partição temporária na RAM chamada initramfs e descomprime a imagem |
| 40:07 | do initrd lá. Finalmente, a kernel vai carregar um gerenciador de serviços como o systemd como processo |
| 40:14 | número 1 que, por sua vez, vai começar a carregar o resto dos serviços, conforme declarado na runlevel padrão. |
| 40:21 | Cada serviço tem declarado quais outros serviços ele precisa esperar carregar, qual dependência |
| 40:26 | tem, e é isso que vai aparecendo naquele monte de linhas que vai subindo na sua tela no boot. Até finalmente terminar de carregar o servidor Xorg, e o gerenciador de login, no nosso caso, |
| 40:37 | o GDM do GNOME e é aí que aparece a tela gráfica de login. Esses conceitos de runlevels, diretórios de scripts de serviços em "/etc/init.d", |
| 40:46 | links simbólicos pros scripts em diretórios como "/etc/rc5.d" e o processo chamado "init" |
| 40:52 | que era o antigo gerenciador de serviços, é o sistema que chamamos System V ou SysV |
| 40:58 | que nasceu nos UNIX originais. Foi assim que eu aprendi em UNIX dos anos 90, e é assim que gerenciadores como o Runit |
| 41:04 | e acho que o OpenRC ainda funcionam. Mas em distros modernas, nada disso vale mais, pode esquecer tudo que eu falei. |
| 41:11 | Distros como Ubuntu, Fedora, OpenSuse, Manjaro e muitos outros, especialmente se usam gerenciador |
| 41:17 | de janelas GNOME, aderiram ao SystemD e ele descarta todos esses conceitos. |
| 41:22 | Não existe runlevels em systemd e sim targets. E apesar de ter diretórios como "rc3" ou "rc5" eles não são mais usados. |
| 41:30 | Em vez disso existem diretórios como "graphical.target" ou "multi-user.target". E eles tão espalhados em diversos diretórios como "/etc/systemd/system" ou "/usr/lib/systemd/system" |
| 41:41 | e assim vai. Ele tenta simular o comportamento dos runlevels pra manter compatibilidade com comandos como |
| 41:48 | `telinit` que usamos antes. É uma das razões de porque tanta gente odeia o systemd e você vai achar fios de reddit |
| 41:54 | e grupos em discord de gente xingando. Eu mesmo não entendo o systemd a fundo, nem de perto. |
| 42:00 | Ele faz bem mais que o Init de SysV antigo e tenta fazer muito mais coisas por baixo dos panos. |
| 42:06 | Eu me acostumei a usar, mas quem desenvolve pra Linux deve ter mais motivos técnicos de porque isso incomoda. |
| 42:12 | Só o fato de mudar conceitos tradicionais com runlevels pra targets, deve dar um trabalho |
| 42:17 | extra pra manter software pra diferentes distros que não aderiram a esse novo padrão. Por exemplo, em "/usr/lib/systemd/system" tem esses links simbólicos que tenta equiparar |
| 42:28 | o que seriam os antigos runlevel numerados com os atuais targets. Veja, o runlevel5 é um link simbólico pra graphical.target. |
| 42:37 | O runlevel6 é link pro reboot.target. Vamos ver o que é o graphical.target e olha só, é uma configuração que fala que requer |
| 42:45 | carregar a mesma coisa que o multi-user.target, o antigo runlevel 3, mas também quer carregar |
| 42:51 | o display-manager.service. Faz sentido, o modo gráfico nada mais é do que o modo multi-usuário que carrega em |
| 42:57 | texto, mas carregando o serviço de tela pra mostrar interface gráfica. No terminal, com o comando "runlevel" ainda consigo ver os runlevels rodando agora, e |
| 43:07 | com o novo comando `systemctl get-default` consigo ver que o target padrão de boot é |
| 43:12 | o graphical.target. Se quiser mudar pra das próximas vezes bootar em modo texto, posso usar o comando `systemctl |
| 43:19 | isolate multi-user.target`, que é mais ou menos o equivalente antigo a usar o comando |
| 43:24 | "telinit". Cuidado ao fazer isso porque ele vai rebootar o sistema, mas não vai mudar o target padrão, |
| 43:30 | que ainda vai ser graphical.target. Pra todas as vezes bootar só em modo texto, posso mudar o target padrão fazendo `systemctl |
| 43:39 | set-default multi-user.target`. Esse comando "systemctl" você vai ver em diversos tutoriais. |
| 43:45 | Quando instala Docker por exemplo, o tutorial costuma mandar habilitar o serviço pra carregar em todo boot fazendo `systemctl enable docker`, que vai adicionar no target de graphical.target. |
| 43:55 | E pra carregar o serviço na hora pode fazer `systemctl start docker`. Pra ver se o serviço tá carregado, basta fazer `systemctl status docker`, e pra ver |
| 44:05 | todos os serviços que estão carregados agora é só rodar `systemctl --type service`. |
| 44:10 | A maioria dos tutoriais hoje assume que você está usando uma distro com systemd e por isso sempre vai pedir pra rodar comandos como `systemctl start`. |
| 44:18 | O systemd em si faz bem mais coisas que iniciar ou rebootar serviços, então recomendo que |
| 44:24 | leia sobre ele em wikis como do site do Arch ou Gentoo, que costumam ter exemplos de como |
| 44:29 | usar e mais detalhes do funcionamento. Como disse antes, eu mesmo não sei todos os detalhes dele. |
| 44:34 | Enfim, o objetivo de hoje foi juntar o antigo video de Ubuntu e um pouco dos videos de WSL2 |
| 44:40 | com a minissérie sobre armazenamento. Recomendo que assistam agora se ainda não viram. Pra continuar a minissérie, no próximo episódio quero explicar mais conceitos de Linux mostrando |
| 44:50 | como uma instalação realmente funciona, então se ficaram com dúvidas, mandem nos comentários abaixo, se curtiram o video deixem um joinha, assinem o canal |
| 45:13 | pra não perder o próximo episódio e compartilhe o video com seus amigos. |
| 45:45 | A gente se vê, até mais! |
