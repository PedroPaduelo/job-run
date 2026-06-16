# Entendendo Pacotes com Slackware | Deb, Apt, Tarbals

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=iQkBbRPkASo
- **Duração:** 43:32
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Vamos continuar a minissérie de Linux falando mais sobre o que tem por baixo do capô. |
| 0:06 | No video anterior vimos um pouco sobre como é a sequência de boot, desde ligar o computador até chegar na tela de login. |
| 0:13 | E hoje quero apresentar mais conceitos de Linux destacando alguns trechos da instalação |
| 0:18 | da distribuição Linux mais antiga ainda em funcionamento hoje: o lendário Slackware. |
| 0:27 | Vamos lá. (...) Eu vinha dizendo em redes sociais e até alguns videos anteriores que eu recomendo Arch Linux |
| 0:34 | pra você começar a aprender um pouco mais sobre como Linux funciona. Tanto porque a instalação de um Arch é menos fácil que de um Ubuntu ou Fedora, mas |
| 0:43 | também porque o Wiki do Arch é uma das documentações online mais completa sobre todos os aspectos |
| 0:49 | de um Linux. Distros modernas como Ubuntu, PopOS, Mint e coisas assim são hiper triviais de instalar, |
| 0:56 | graças a LiveCDs e instalador gráfico como Calamares, que já fazem o grosso do trabalho |
| 1:01 | pra você. Mas mesmo o Arch não é tão complicado assim e na verdade ele já esconde muito da complexidade. |
| 1:08 | Portanto, instalar Linux moderno hoje em dia não ensina quase nada, a menos que seu hardware seja muito exótico e tenha pouco suporte, daí você vai ser obrigado a descer mais |
| 1:17 | fundo nas suas pesquisas até conseguir fazer tudo funcionar. Canais de reviews também trapaceiam um pouco, e eu vou fazer a mesma coisa. |
| 1:24 | A coisa mais chata na instalação de qualquer sistema operacional, seja Windows ou qualquer |
| 1:29 | distro Linux, é suporte a hardware porcaria que não tem drivers bons disponíveis. |
| 1:35 | Dispositivos de marcas chinesas duvidosas compradas numa Shopee ou AliExpress, webcam |
| 1:41 | baratinha que, quando você conecta, seu sistema nem detecta automaticamente e coisas assim. |
| 1:46 | O maior problema em qualquer sistema operacional é ter bons drivers que desestabilizem tudo. |
| 1:51 | Mas a trapaça que eu falo é que a gente que grava video, não vai ficar testando instalação em vários tipos diferentes de combinações de hardware. |
| 1:59 | Normalmente temos uma máquina separada só pra isso que não é nosso PC primário. Claro, sem nenhum componente muito exótico, que a maioria dos instaladores vai auto detectar |
| 2:08 | de primeira sem problema. Ou vamos usar máquinas virtuais. E a vantagem de usar um VirtualBox, VMWare, QEMU/KVM é que o hardware virtual dessas |
| 2:18 | máquinas é bem documentado e tem bons drivers disponíveis. Qualquer instalador de Linux detecta que tá numa máquina virtual e instala os corretos |
| 2:27 | sem nenhum problema. Por isso que você assiste video de canal de YouTube e parece que foi tão fácil. Entenda que hoje em dia, mesmo Windows, até que funciona direitinho. |
| 2:35 | Quando você tem problemas, normalmente são drivers ruins, ou atualização automática |
| 2:41 | que baixou uma versão nova de driver com bugs. Campeão de bugs são drivers de placas de video como NVIDIA. |
| 2:47 | Saem atualizações com bastante frequência, são pacotes grandes, e vira e mexe chega um bug novo que te fode. |
| 2:53 | Gamers sabem bem o que é isso. E por isso também notebooks de boas marcas costumam ter poucos problemas, porque os fabricantes |
| 3:01 | tendem a arredondar bem os drivers dos componentes da máquina, e fazem pouca ou nenhuma atualização |
| 3:06 | depois que tudo já funciona. Aí você só vai ter problema se o sistema operacional ganhar um upgrade que quebra compatibilidade |
| 3:13 | com seus drivers. Mas no fim, o problema sempre são drivers. Por isso sempre pesquise se todos os componentes que você compra costuma ter drivers disponíveis |
| 3:22 | que são atualizados com uma frequência razoável pra corrigir bugs. Se você tá pesquisando, digamos, uma placa de captura de video, vai no site deles. |
| 3:30 | Se descobrir que a última vez que eles lançaram um driver novo foi uns 3 anos atrás, desiste |
| 3:36 | dessa compra. Isso tudo dito, eu já tinha mostrado no video anterior uma instalação rápida de Ubuntu numa máquina virtual, e em poucos minutos tava tudo detectado e instalado. |
| 3:46 | Zero problemas. Por isso quero instalar um Slackware hoje. Slackware foi a primeira distro que eu tentei instalar, lá por volta de 1995, acho que |
| 3:55 | ainda era 1.0, que vinha num CD junto com um livro importado ensinando sobre Linux. |
| 4:00 | Eu acho que na época não consegui instalar e foi super frustrante, eu só voltei a tentar Linux de novo quando um amigo da faculdade me emprestou um Red Hat versão 4, com um |
| 4:10 | instalador um pouco menos difícil e consegui ir até subir o X pela primeira vez. |
| 4:15 | Se você só instalou Linux modernos, hoje vai ter um choque, porque o Slackware moderno ainda é muito parecido com o que eu lembro de mais de 20 anos atrás. |
| 4:24 | E como disclaimer, o video de hoje não é um tutorial. Não dá pra seguir passo a passo. Quero aproveitar a instalação pra ir destacando alguns conceitos que acho importante saber. |
| 4:34 | Então vamos bootar o Slackware numa máquina virtual, e logo de cara você já vai tomar um susto. |
| 4:39 | Não abre interface gráfica, cai direto numa linha de comando. E sim, LEIA a porra dos textos que aparecem. 90% dos erros de iniciantes é ser preguiçoso |
| 4:49 | e não ler com atenção o que tá escrito. Se alguma coisa escreve na sua tela é porque você deveria ler. |
| 4:55 | Pessoal pensa que LiveCDs que são esses Linux que bootam de pendrive servem só pra instalar |
| 5:00 | a distro no seu HD. Mas na realidade, todo LiveCD tem uma segunda utilidade: ser usado pra conseguir recuperar |
| 5:07 | o Linux do seu PC caso faça alguma bobagem e não consiga mais bootar dele. |
| 5:12 | Essa máquina virtual, por exemplo, tá vazia, mas já estamos dentro de um ambiente Linux. Como ele explica aqui no texto, daqui você pode montar o HD da sua máquina que já tinha |
| 5:21 | uma instalação e no mínimo ter acesso aos seus arquivos, caso não esteja conseguindo bootar normalmente. |
| 5:27 | Aqui ele ensina como fazer isso. Damos enter e olha o que expliquei no episódio anterior: executa o binariozão da kernel |
| 5:34 | do Linux, cria uma partição em RAM que é o initramfs e descomprime a imagem initrd |
| 5:40 | nela pra fazer o segundo estágio do boot. Aí a kernel executa um gerenciador de serviços, um init system, que é processo número 1 |
| 5:47 | que vai iniciar os serviços do runlevel certo. Lembram? Expliquei tudo isso no video anterior. E quando terminar o boot, vai perguntar se quer trocar o layout do seu teclado, caso |
| 5:57 | esteja usando um layout brasileiro, por exemplo. Como é um LiveCD, tem só o usuário root sem senha e de novo, leia a porra do texto, |
| 6:04 | porque já te dá a dica que o próximo passo pra continuar é que vai precisar criar uma partição e formatar antes de conseguir instalar qualquer coisa. |
| 6:12 | E uma coisa que imagino que ninguém vai ter é problema de pouca memória, mas digamos que seu PC seja tão velho que tenha menos de 4 gigas de RAM, daí ele recomenda também |
| 6:21 | criar uma partição de swap. E vamos fazer as duas coisas agora. Pra criar partições, nos anos 90 eu seria obrigado a usar a antiga ferramenta `fdisk`. |
| 6:29 | Era horrível, porque precisava calcular manualmente a quantidade de megas baseado na multiplicação |
| 6:34 | de coisas como tamanho de setor, cilindros, cabeças, coisas que expliquei no video sobre |
| 6:39 | partições. Mas hoje em dia temos uma ferramenta melhor, o bom e velho `cfdisk`. A opção mais padrão agora é escolher a etiqueta de GPT, que também explico no video |
| 6:49 | que falei. Normalmente um Linux dá o nome de "/dev/sda" pro primeiro HD que detecta. Se tiver um segundo HD o nome seria "/dev/sdb". |
| 6:57 | No caso temos 80 giga de espaço livre e vamos criar a primeira partição que vai se chamar |
| 7:02 | "/dev/sda1". Com setinhas, mudo os itens de menu abaixo, escolho "new" e digito que tamanho quero que |
| 7:07 | essa partição tenha. Posso digitar "100M", onde "M" quer dizer "megabytes". Essa vai ser a partição de boot. 100 mega acho que chutei pouco, poderia ser mais. |
| 7:16 | Pra estar seguro, digita uns 150 megas num PC de verdade. Daí no menu embaixo, movo pra direita pra escolher a opção de "tipo" e mudo pra "EFI |
| 7:24 | System". Tá vendo? Se você assistiu meus videos sobre armazenamento, tudo isso de fdisk, partição, tipos, EFI, |
| 7:30 | já expliquei tudo antes. Agora eu movo a setinha pra baixo pra escolher o resto do espaço livre, escolho a opção |
| 7:36 | de nova partição, e chuto uns 4G, onde "G" significa "gigabytes". Essa vai ser a partição "sda2", daí mudo o tipo pra ser Linux Swap. |
| 7:46 | Não existe tamanho certo pra essa partição. Se tem bastante RAM, um swap pequeno só pra emergência tá bom. |
| 7:51 | Se tem pouca RAM, recomendo comprar mais RAM. Pouca RAM é abaixo de 8 giga. Um swap de 4 giga ou menos tá de bom tamanho. |
| 8:00 | Finalmente, selecionamos o espaço que sobrou e criamos a maior partição, que aqui vai ser a "sda3" com mais de 70G e escolhemos o tipo de "Linux filesystem". |
| 8:09 | Esses tipos são só etiquetas. Elas não mudam nada, é que nem uma hashtag de twitter. Só pra depois ficar mais fácil saber o que é cada partição. |
| 8:17 | E notem como a ordem dessas partições não faz diferença. Só a partição de boot que é bom ser a primeira, mas eu poderia ter invertido e deixado |
| 8:25 | a principal como "sda2" e o swap como "sda3". Poderia ter criado uma quarta partição pra ser onde ficaria meu diretório home, pra |
| 8:33 | facilitar coisas como backup e recuperação depois. Tem várias estratégias, mas o que fiz agora é o hello world, o mais simples. |
| 8:40 | A maioria dos instaladores gráficos, por baixo dos panos, faz a mesma coisa sem você saber. |
| 8:46 | Partição é só uma forma de deixar gravado nos primeiros bytes do HD que do byte X até o byte Y está reservado pra partição 1, do byte Y até o byte Z é a partição 2, |
| 8:55 | e assim por diante. É só isso. Mas pra usar essas partições, o sistema operacional precisa saber que formato é pra |
| 9:02 | usar dentro dela, e pra isso que formatamos. E em linux, cada sistema de arquivos tem uma ferramenta "mkfs" que é literalmente "make |
| 9:10 | filesystem", por exemplo, vamos formatar a primeira partição de boot "sda1" como FAT32 |
| 9:15 | com o comando `mkfs.fat -F 32 /dev/sda1`. Pronto, apesar desses avisos, não deu erro e agora tá formatado. |
| 9:23 | A segunda partição "sda2" é o swap. Lembram? Swap é usado quando tamos ficando com pouca memória RAM, daí o Linux passa a mapear |
| 9:31 | parte do disco como memória adicional pra não crashear tudo. Só que HD é sempre MUITO mais lento que RAM, por isso um bom sistema operacional como |
| 9:40 | Linux só vai usar swap se realmente precisar muito. Swap só vale a pena se estiver usando um SSD NVME, que é rápido o suficiente pra |
| 9:49 | não deixar sua máquina muito lenta. De qualquer forma, precisamos formatar essa partição com um sistema de arquivos especial |
| 9:56 | que vai simular memória, e pra isso usamos o comando `mkswap /dev/sda2` que é literalmente |
| 10:02 | "make swap". Mas não basta formatar, temos que dizer pro sistema que é pra usar como swap e pra isso |
| 10:08 | tem o comando `swapon /dev/sda2`, que é literalmente "swap on", de ligar. |
| 10:15 | Se quisermos desligar pro sistema não usar mais essa partição tem o comando oposto |
| 10:20 | que é `swapfoff`. E pronto, temos swap configurado. Finalmente, vamos formatar a partição principal que é onde o Slackware vai se instalar e |
| 10:27 | onde vai ficar os arquivos do sistema. A opção padrão mais fácil é formatar em ext4. |
| 10:33 | Se for um notebook, recomendo antes encriptar a partição com LUKS e dentro criar um volume |
| 10:38 | formatado com ext4 ou usar um sistema de arquivos mais moderno como btrfs ou ZFS que começou |
| 10:44 | a vir nos Ubuntu a partir da versão 19 ou 20. Vou falar um pouco mais sobre isso em outro video. |
| 10:49 | Mas na dúvida, escolha ext4 que é o filesystem mais usado no mundo Linux e todo ferramental |
| 10:55 | que vem em todas as distros já assume que está usando ext4. De novo, se nunca ouviu falar de ext4, btrfs, zfs, fat, é porque não assistiu meu video |
| 11:04 | sobre sistemas de arquivos. Anota aí pra assistir depois. Pronto, agora o HD foi particionado, e cada partição foi formatada com sistemas de arquivos |
| 11:12 | que um Linux entende. Agora precisamos dar acesso a essas partições. E a forma de fazer isso é criando um mount point. |
| 11:18 | Vou falar mais de mount points no próximo video, mas por hoje entenda o seguinte. Um "/dev/sda3" é só o caminho pra um linguição de bits. |
| 11:26 | O sistema não entende arquivos e diretórios, só entende ler blocos de bits e gravar blocos |
| 11:31 | de bits. Lembra o que eu sempre falo? Um dispositivo de armazenamento é um block device, um dispositivo de blocos. |
| 11:37 | O sistema operacional precisa carregar um intérprete pra traduzir conjuntos de blocos |
| 11:42 | em arquivos. Esse é o papel de um sistema de arquivos como ext4. |
| 11:47 | E pra carregar esse intérprete, fazemos um ponto de montagem. Um mount point é só um diretório onde digo: a partir deste diretório, interprete os blocos |
| 11:56 | do dispositivo como uma árvore de diretórios. Use o formato ext4 pra ler e gravar diretórios e arquivos. |
| 12:04 | Então podemos usar o comando `mount /dev/sda3 /mnt`. Tá implícito aqui, mas o comando mais completo seria `mount -t ext4 /dev/sda3 /mnt`. |
| 12:12 | De qualquer forma, a partir de "/mnt" é a raíz da partição sda3. |
| 12:17 | A partir daqui, tudo que gravar em "/mnt" na realidade vai gravar dentro da partição sda3. |
| 12:23 | E dentro crio o diretório "/boot/efi", onde vou montar a primeira partição de boot, |
| 12:29 | o sda1 com `mount /dev/sda1 /mnt/boot/efi`. |
| 12:34 | Isso realmente não teria como você saber de cabeça se nunca configurou EFI. E, de novo, se não sabe a diferença de BIOS e EFI, de MBR e GPT, é porque não assistiu |
| 12:42 | meu outro video sobre isso. Mas saiba que toda instalação automática de Linux tá criando esses mount points por |
| 12:48 | baixo dos panos pra você. Só que o Slackware me obriga a fazer isso manualmente. Sendo honesto, eu não precisava ter formatado as partições na linha de comando com os |
| 12:57 | comandos de "mkfs". O Slackware tem um instalador rudimentar que sabe fazer essas coisas. |
| 13:03 | Mas eu quis mostrar como é manualmente. Apesar que partição de boot EFI você ia ter que fazer na mão de qualquer jeito porque |
| 13:09 | o instalador do Slackware não configura isso, então não fizemos nada muito extra. Mas agora podemos digitar `setup` e vai abrir esse menu de opções. |
| 13:17 | Na opção TARGET, olha só, detectou minhas partições e sabe que "sda2" é o swap porque |
| 13:23 | no cfdisk demos o tipo de "linux swap", lembra? Daí ele se oferece pra fazer o mkswap e swapon, mas como já fizemos isso antes, só dar "não" |
| 13:32 | pra continuar. Agora ele achou a partição principal "sda3" e diz que vai usar pra ser o mount point "/" que |
| 13:38 | é a raíz do sistema de arquivos, o diretório "/" principal. Se tivesse feito outras partições, aqui poderia escolher pra montar como "/home", |
| 13:46 | por exemplo. O que essa ferramenta tá fazendo é preparando o arquivo "/etc/fstab", que é como o sistema |
| 13:53 | init no boot sabe como montar as partições do seu HD automaticamente. De novo, ele se oferece pra formatar essa partição, mas como já fizemos isso, damos |
| 14:02 | "no" de novo. Depois de ter as partições devidamente configuradas é hora de copiar os arquivos do sistema pra |
| 14:08 | lá. A primeira opção é justamente copiar tudo a partir do seu pendrive que usou pra bootar, ou no caso da minha máquina virtual, direto a partir do arquivo de ISO que baixamos. |
| 14:17 | Mas de curiosidade veja essas outras opções aqui embaixo. Ele tem opção de instalar a partir de um diretório compartilhado na rede ou via servidor |
| 14:25 | de arquivos FTP. Quem é dos anos 90 vai se lembrar disso, porque nos anos 90 não ia ter como dar boot |
| 14:31 | via pendrive como fazemos hoje. Pendrive nem existia ainda. Normalmente ia ter 2 disquetes ou floppy disks de 1.44 megabytes cada. |
| 14:40 | Um era o disco de boot, que carrega a kernel e o segundo era o disco de root, que acho que é onde tinha o initrd e as ferramentas de instalação. |
| 14:48 | Daí precisava ter o resto dos pacotes num CD ou DVD. Veja o tamanho deste arquivo de ISO, mais de 3 gigabytes. |
| 14:55 | Um CD na época tinha menos de 700 megabytes, então esse Slackware ia precisar de mais de 4 CDs pra instalar completo. |
| 15:02 | Lá pelo meio dos anos 90, DVD também não era acessível. Então íamos precisar de 2 disquetes, mais uns 4 CDs. |
| 15:09 | Mas se estivéssemos numa boa faculdade ou empresa moderna, talvez tivesse os pacotes num servidor FTP. |
| 15:16 | Daí dava pra instalar pela rede em vez de ter que ficar trocando CD. A gente que curtia Linux tinha tubos com dezenas de CDs. |
| 15:23 | E CD é lento, levava horas pra instalar. Por isso eu falo que hoje tá fácil. Em menos de 1 hora dá pra sair do zero pra um Linux todo configurado e funcionando. |
| 15:33 | Bons tempos. Enfim, agora é só ir escolhendo as opções padrão, que é basicamente não ficar tirando nada e deixar o Slackware instalar tudo completo. |
| 15:41 | O objetivo todo de instalar Slackware foi justamente pra falar um pouco sobre os primórdios do que chamamos de pacotes. |
| 15:47 | Olha só o instalador, ele tá nervoso instalando um pacote atrás do outro, mas o que diabos |
| 15:52 | é isso de pacote? Vamos fazer uma tangente. Se você é programador e já usou um Ubuntu da vida, deve estar acostumado a copiar e |
| 16:00 | colar comandos como `apt install docker`, acender uma vela, e torcer pra não dar nenhum |
| 16:05 | erro, porque você não tem idéia do que fazer se der erro. Se estiver num Fedora, já deve ter digitado `dnf install docker`, se estiver num openSuse, |
| 16:13 | digita `zypper install docker`, ou se estiver num Arch Linux vai ser `yay -S docker`. |
| 16:19 | Apt, Dnf, Zypper, Yay, Pacman, Portage, Apk, são o que chamamos de "gerenciadores de pacotes", |
| 16:26 | justamente porque eles sabem como baixar e instalar ou desinstalar os softwares que vem |
| 16:32 | dentro desses pacotes. Cada distro diferente costuma ter gerenciadores diferentes. |
| 16:37 | Slackware vem de uma época que precede o conceito de gerenciar pacotes. Vamos entender pacotes primeiro. |
| 16:43 | Enquanto o Slackware fica ali instalando pacotes, vamos abrir outra máquina virtual com o Ubuntu |
| 16:48 | 22 que mostrei no episódio anterior. Eu tenho instalado aqui um programa que todo programador já deve ter visto, o htop. |
| 16:55 | Olha só ele mostra informações do sistema, quanto de carga cada core da minha CPU tá puxando, quanto de memória tá sobrando, e embaixo uma lista com todos os processos |
| 17:04 | rodando na máquina, quanto de recursos cada um tá usando. É uma excelente ferramenta de monitoramento pra você saber o que tá acontecendo na sua |
| 17:12 | máquina. Onde fica o binário executável do htop? Do terminal podemos usar o comando `which htop`, que vai vasculhar os PATHs que tão |
| 17:20 | configurados no seu shell e ele acha o binário em `/usr/bin/htop`. |
| 17:25 | Se não tivesse essa variável PATH configurada, precisaria digitar o caminho completo `/usr/bin/htop` |
| 17:31 | pra executar. O PATH é uma conveniência pra facilitar nossa vida na hora de digitar comandos. |
| 17:36 | Enfim, o htop não tá todo contido nesse binário. Ele tem dependência com outros objetos binários, bibliotecas instaladas no sistema. |
| 17:43 | A gente pode saber quais são usando o comando `ldd /usr/bin/htop` e olha só, ele depende |
| 17:50 | desse objeto binário libtinfo.so.6, a mais comum em todos os binários que é a libc |
| 17:56 | ou libc.so.6 e assim por diante. Vamos estragar o htop. Deixa eu mover o libncursesw.so.6 pro diretório /tmp e tentar executar o htop ... e olha só, |
| 18:07 | reclama que não consegue localizar a biblioteca compartilhada libcurses e crasheia. Então vamos mover o ncurses de volta pro lugar com o comando `mv` inverso ... e pronto, |
| 18:16 | agora o htop consegue carregar como antes. Mas o exercício aqui foi pra vocês terem noção que um executável tem o que chamamos |
| 18:22 | de dependências. E resolução de dependências é um problema recorrente que vai acompanhar sua vida inteira |
| 18:29 | de programador. Quanto mais cedo entender sobre isso, melhor. Agora, como instalar um software como htop? |
| 18:36 | Simples, vai no terminal e digita `sudo apt install htop` e pronto. Mas você sabe o que tá acontecendo? |
| 18:42 | Já parou pra pensar nisso? Como esse comando `apt` sabe de onde baixar e o que instalar no seu sistema? |
| 18:48 | Deixa eu dar um resuminho. No caso de todo derivado de Debian, como um PopOS ou este Ubuntu, tudo começa no arquivo |
| 18:54 | "/etc/apt/sources.list", vamos dar `cat` pra ver o conteúdo. E temos uma lista com várias URLs. |
| 19:01 | Ele já foi inteligente pra deixar pré-configurado domínios brasileiros, que são servidores espelho, ou seja, cópias dos servidores oficiais da Canonical, que ficam aqui no Brasil, pra |
| 19:11 | ser mais rápido fazer download. Quando você executa aquele comando que parece que não faz nada, o `apt update`, o que ele |
| 19:17 | faz é baixar um zip de um desses servidores listados. Esse zip é um arquivo texto com a lista de todos os pacotes oficialmente suportados pela |
| 19:26 | Canonical. O que faz um programador bom de verdade? Ele é curioso, se tem uma URL, a gente abre. |
| 19:31 | Vamos abrir aqui essa primeira URL e carrega uma página com diretórios. Agora navegamos aqui em dists, que acho que é distribuições. |
| 19:39 | E dentro temos os codenomes das distros de Ubuntu. Como mostra aqui no arquivo sources.list ele declara pra procurar o codenome "jammy". |
| 19:47 | Sabemos que Jammy Jellyfish é o codenome do Ubuntu 22. Dentro temos o diretório "main", depois "binary-amd64", que são binários de 64-bits compatíveis |
| 19:57 | com AMD ou Intel, então escolhemos ele e finalmente achamos um arquivo suspeito de 1.7 mega chamado "Packages.gz". |
| 20:03 | Vamos baixar. "gz" é a extensão de um arquivo compactado com "gzip", então vamos pro terminal |
| 20:09 | e fazemos `gunzip Packages.gz` e bingo, descompacta um arquivo de 6 mega que podemos abrir num |
| 20:15 | editor de textos como meu vim. Agora vamos procurar o htop que queremos, não é esse, não é esse outro, ah, achamos, |
| 20:22 | olha só esse trecho. Várias informações sobre o htop, mas o que nos interessa é esse "Filename" aqui |
| 20:27 | embaixo, que é o caminho pro pacote htop bla bla ponto deb. Mas onde fica esse diretório "pool"? |
| 20:33 | Acho que já vi antes. Vamos voltando algumas páginas. Aha, olha só, tá aqui nesse servidor mesmo. |
| 20:39 | A gente foi no "dists" lá em cima, mas tem esse "pool" aqui embaixo. Então vamos copiar a URL do servidor e ir pro terminal. |
| 20:46 | Podemos usar a ferramenta `wget` pra facilitar, colando o endereço do servidor e copiando |
| 20:52 | e colando esse caminho poll etc pro arquivo deb. Pronto, baixamos o pacote do htop. |
| 20:57 | Mas o que diabos é um arquivo ponto deb? Não é a mesma coisa mas é como se fosse um arquivo zip. |
| 21:03 | Só que em vez de usar o comando "gzip" o padrão pra deb é usar o comando "ar", que |
| 21:08 | literalmente significa "archive". Vamos fazer `ar x htop bla bla ponto deb`. |
| 21:14 | Opção "x" significa extract. Olha só o que abriu, apareceu arquivos "debian-library" mas mais importante, temos esse "control.tar.zst" |
| 21:22 | e "data.tar.zst". Tar eu já expliquei no video de Ubuntu, é o comando de Tape Archive, que foi criado |
| 21:28 | na época que se usava fitas magnéticas pra gravar arquivos. Em resumo, o tar serve pra concatenar arquivos um atrás do outro num único linguição |
| 21:37 | de bits, um único arquivão, pra mandar pra fita. É que nem um zip, mas sem necessariamente compactar. |
| 21:43 | Mas nesse caso ele tá compactado, e de novo, não é um zip e sim um zstd. Se nunca ouviu falar, zstd é mais uma alternativa a gzip. |
| 21:52 | Por ser mais moderno, usa algoritmos mais refinados de compressão e faz arquivos menores que gzip e é mais performático. |
| 21:58 | Perfeito pra um gerenciador de pacotes. Podemos descompactar fazendo `tar -I unzstd -xvf control.tar.zst` e bingo, ganhamos um |
| 22:08 | arquivo chamado "control". Podemos ver o conteúdo com o comando `cat` e olha só? Parece familiar? |
| 22:14 | Sim, é exatamente o que tinha naquele arquivo Packages que baixamos antes. O arquivo Packages é montado automaticamente com o conteúdo desse arquivo control dos |
| 22:22 | vários pacotes da distro. Agora descompactamos o outro arquivo com `tar -I unzstd -xvf data.tar.zst`. |
| 22:30 | Esse é o arquivo que vai ter o binário executável do htop e outros arquivos que depende. Olha só, surgiu um diretório "usr" e vasculhando vemos que em "usr/bin" temos o binário do |
| 22:41 | "htop". De curiosidade, naquele arquivo de control, veio também um arquivo chamado "md5sum", |
| 22:47 | vamos ver dentro. É uma lista de hashes md5 dos arquivos que tava no data.tar. |
| 22:52 | Vamos checar? Só rodar `md5sum usr/bin/htop` e pronto, é exatamente o mesmo hash. |
| 22:59 | Isso garante que o binário que temos aqui não foi corrompido nesse processo todo de download, descompressão. |
| 23:04 | Lembra do episódio sobre detecção e correção de erros? Poderia ter um raio cósmico que flipou um bit, ou o meu HD poderia estar velho e falhado |
| 23:12 | na hora de gravar um bit. Com essa checagem podemos garantir que o binário que está no meu disco tem 100% dos seus bits |
| 23:19 | intactos. Mas note uma coisa. Lembra que quando apagamos a biblioteca libncurses o htop não funciona? |
| 23:27 | Cadê essa biblioteca? Não aparece nessa lista, se listamos os sub-diretórios que descomprimimos do data.tar, não existe |
| 23:34 | "lib", só "usr". E é pra isso que serve aquele arquivo "control". Vamos listar o conteúdo dele de novo e olhar com mais calma. |
| 23:40 | Olha só como tem um item chamado "Depends". Aqui mostra quais outros pacotes precisam ser instalados juntos e quais versões mínimas. |
| 23:48 | Por baixo dos panos o comando `apt` vai também fazer esse mesmo processo que fizemos manualmente |
| 23:54 | pra todos esses outros pacotes. Se o apt não fosse inteligente pra fazer resolução dessas dependências, precisaríamos |
| 24:01 | fazer na mão um comando bem maior, por exemplo `apt install htop libc6 libncursesw6 libnl-3-200, |
| 24:09 | libnl-gen-3-200 libtinfo6`, mas como o apt sabe encontrar essa lista de dependências dentro do arquivo de "control", dentro do pacote deb do htop, já instala automaticamente |
| 24:19 | pra gente. A única coisa que resta é copiar os arquivos dentro desse diretório "usr" pra cima do |
| 24:24 | diretório "/usr" do nosso HD, e é assim que o binário vai parar em "/usr/bin/htop". |
| 24:32 | Em resumo bem resumido, essa é a anatomia de um pacote deb de Ubuntu. |
| 24:37 | Um arquivão que dentro tem dois outros arquivões. Um é o data.tar que tem os binários do software. |
| 24:42 | O outro é o control.tar que são metadados, informações como a descrição do software, |
| 24:48 | autores, mantenedores, e dependências de outros pacotes. Num Fedora se usa pacotes em outro formato, o RPM que significa "Red Hat Package Manager" |
| 24:57 | e foi criado na época das distros comerciais da Red Hat. Hoje o formato RPM ainda é usado pelo CentOS, Fedora, openSuse. |
| 25:06 | As distros Arch Linux como Manjaro ou Garuda usam o formato PKG de pacote. |
| 25:11 | E agora vamos voltar a falar do Slackware, que pacotes ele usa? Na realidade, o Slackware original não usa nenhum formato especial de pacotes. |
| 25:19 | Deixa eu mostrar o jeito antigo, o jeito padrão e o jeito moderno de instalar software num |
| 25:24 | Slackware. Primeiro, vamos ver como anda a instalação. Olha só, ainda tá instalando como se não houvesse amanhã, é pacote pra caramba. |
| 25:31 | O Slackware é disparado a instalação que mais ocupa espaço em disco comparado com qualquer outro. |
| 25:37 | Quando terminar de instalar e baixar as atualizações todas, vai ocupar quase 20 gigabytes no disco. |
| 25:43 | Em comparação, o Ubuntu que instalei na versão mínima, sem softwares tipo Office, |
| 25:48 | ocupa menos de 4 gigabytes. Mesmo se instalar os softwares opcionais, uma distro tipo Ubuntu ou Manjaro vai ocupar |
| 25:54 | menos de 10 gigas, menos da metade do Slackware completo. E porque o Slack ocupa tanto espaço? |
| 26:00 | Porque a filosofia é a seguinte: pra que ter uma ferramenta complicada tipo Apt ou Pacman pra ficar resolvendo dependências? |
| 26:08 | Basta já ter tudo pré-instalado, todas as bibliotecas como aquela libncurses que o htop |
| 26:13 | precisava, daí quando for instalar o htop, já vai ter o que precisa e não tem que se preocupar. E mesmo se não tiver tudo, dá pra instalar manualmente o pouco que falta. |
| 26:23 | Alguém poderia dizer "porra, quer dizer que vai desperdiçar mais de 10 giga de coisas que talvez nem use?". |
| 26:29 | Sim, vai mesmo. Se fosse uns 10 anos ou mais pra trás, essa reclamação teria mais peso, mas hoje em |
| 26:35 | dia, 10 gigas a mais, 10 gigas a menos, meio que não faz diferença nenhuma. Com menos de 200 reais você compra um SSD barato de 240 gigabytes. |
| 26:43 | Estamos literalmente falando de 10 real a mais ou 10 real a menos. Literalmente não faz diferença. |
| 26:49 | Especialmente se considerar que qualquer jogo Triple A no Steam, como um Red Dead Redemption 2 ou GTA 5 ocupam mais de 100 gigabytes. |
| 26:57 | O remaster do Spider-man que saiu faz pouco tempo, um God of War ou Cyberpunk 2077 custam |
| 27:03 | mais de 60 gigabytes cada. O que é 10 gigas a mais do Slackware? Nada. |
| 27:08 | Merreca. Então, o argumento de desperdiçar espaço, em 2022, meio que tanto faz. O problema é que mesmo tendo um monte de pacotes já pré-instalados, isso ainda não |
| 27:18 | resolve o problema de dependências. A partir daqui vou adaptar o exemplo de um blog post que esbarrei 2 anos atrás. |
| 27:24 | Vou deixar o link na descrição abaixo pra referência. O exercício é instalar a biblioteca "jq", que é um processador de JSON de linha de |
| 27:31 | comando. Quem mexe com APIs provavelmente já usou essa ferramenta, e se não usou, recomendo pesquisar depois. |
| 27:37 | Mas vamos lá, digamos que estamos nos anos 90, quando o conceito de gerenciador de pacotes ainda não era comum. |
| 27:43 | Não temos APT nem Pacman nem nada disso. Não temos repositórios pra baixar pacotes. Como fazemos? |
| 27:49 | Primeiro, procuramos o repositório de código. Antigamente estaria em sites como Sourceforge.net, hoje em dia provavelmente vai estar num GitHub. |
| 27:56 | E de fato, aqui está a página. Agora vamos no link de releases e baixamos o tarball, que é o arquivo tar compactado |
| 28:04 | com gzip do código fonte. Esse é o jeito antigo, nem existia Git nos anos 90, por isso não vamos usar Git. |
| 28:10 | Vamos pro terminal, diretório de downloads e fazemos o bom e velho `tar xvfz jq.tar.gz`. |
| 28:16 | Entramos no diretório e olha só, temos o código fonte completo dessa ferramenta. E quem é das antigas já sabe o que tem que fazer. |
| 28:22 | Rodar o bom e velho `./configure`. Todo código fonte de C costuma vir com um script executável chamado "configure", que |
| 28:29 | vai checar se temos todas as dependências de compilação nos lugares certos e gerar um arquivo de "Makefile" que rodamos com o comando "make" pra realmente pegar todo o |
| 28:39 | código fonte, usar o compilador GCC e gerar o binário. Veja que o configure vai checando e em toda linha vai dizendo "yes", "yes", pra reportar |
| 28:47 | que tá tudo ok. É isso que esperamos ver. Mas antes do fim, erro. Fala que não achou o Oniguruma. |
| 28:53 | Quem é experiente conhece o Oniguruma, que é uma biblioteca de Regex. Vamos listar o que tem nesse "modules/oniguruma" e, por coincidência, o autor desse projeto |
| 29:02 | foi legal e já deixou copiado o código fonte do Oniguruma nesse diretório. Se não tivesse feito isso eu precisaria ir caçar o repositório do Oniguruma, baixar |
| 29:12 | o tarball e descompactar aqui. Mas o erro aconteceu porque ele não achou o script de configure atualizado lá. |
| 29:18 | E isso porque eu não li a documentação do README, como deveria. Se tivesse lido ia ver que o autor me manda rodar o comando `autoreconf` ANTES de rodar |
| 29:27 | o `./configure`. Autoreconf vai rodar outras ferramentas por baixo como autoconf, autoheader e mais. |
| 29:34 | Quem é desenvolvedor de C e C++ conhece isso. Autoreconf vai gerar o script atualizado de configure. |
| 29:41 | Então vamos rodar `autoreconf -fi` como manda. E agora sim, repetimos o `./configure`. |
| 29:47 | Esperamos um pouquinho e pronto: agora sim, terminou sem problema. Significa que nosso Makefile tá pronto, então é só rodar o comando `make`. |
| 29:56 | Pra quem é de Ruby o make é o avô de `rake`. Pra quem é de Javascript rodar make é tipo rodar `npm build` ou `yarn`. |
| 30:02 | É um executador de tarefas. Ele vai automatizar rodar o GCC pra cada arquivo de código fonte C, depois pegar os objetos |
| 30:09 | binário e linkeditar num binariozão executável. E pronto, terminou de compilar. |
| 30:15 | Se listarmos os arquivos, olha aqui o binário "jq". Pra terminar de instalar precisa copiar esse binário pra um diretório do sistema como |
| 30:24 | "/usr/local/bin". Mas não precisa fazer manualmente, no Makefile tem uma tarefa chamada "install" justamente |
| 30:29 | pra isso. Como precisa instalar em diretórios do sistema, o certo seria rodar com `sudo`, mas como é |
| 30:34 | só um exemplo, eu não quero instalar de verdade. Vamos rodar `make install` sem sudo e olha só, dá erro, claro, porque não tem permissão |
| 30:41 | pra copiar arquivos pra diretórios como "/usr/local/lib". Ele tentou copiar a libonig que é a biblioteca do oniguruma que foi compilado junto. |
| 30:51 | Se executasse com `sudo`, iria copiar o libonig.so.4.0.0 pro /usr/local/lib e no final o jq pra /usr/local/bin. |
| 31:01 | E pronto, finalizado. Era assim que a gente instalava software antigamente. Baixava o tarball com o código fonte, rodava direto `./configure` ou `autoreconf` antes |
| 31:10 | pra gerar o script de configure. Checava se faltava alguma dependência. Caçava a dependência, baixava o tarball dele, e ia fazendo assim na munheca. |
| 31:18 | Roda `./configure`. Compila tudo com `make`, instala os binários com `sudo make install`. |
| 31:23 | Antigamente isso de compilar tudo a partir do código fonte era mais necessário porque além de Intel x86 tinha vários tipos de CPUs diferentes. |
| 31:31 | Tinha chips RISC Power da IBM. Chips Sparc de workstations Sun. PA-RISC da HP. |
| 31:38 | DEC, Motorola. Fora a transição de 32-bits pra 64-bits. Como a comunidade de Linux era pequena, não tinha como ficar mantendo binários especializados |
| 31:47 | de todas as versões pra todos esses chips. Era mais fácil fornecer o código fonte, todo mundo tinha compilador GCC, então cada |
| 31:54 | um compilava o binário pra sua arquitetura de CPU. Mas felizmente a gente evoluiu. Empresas como Red Hat apareceram e começaram a manter servidores com repositórios de binários |
| 32:04 | já pré-compilados. E em vez de baixar código fonte, a gente passou a baixar pacotes RPM direto com os |
| 32:12 | binários. Melhor ainda, como tinha um gerenciador de pacotes como o antigo Yum, dava pra manter um banco de dados com todos os pacotes instalados. |
| 32:20 | Se quisesse desinstalar, tinha o manifesto com os arquivos de cada software, era só automatizar apagar. |
| 32:26 | Por exemplo, pra apagar esse "jq" que acabamos de tentar instalar, antigamente, tinha que manualmente apagar o "/usr/local/bin/jq" e lembrar que também copiou arquivos "libonig*" |
| 32:38 | em "/usr/local/lib", e apagar manualmente. Sempre ficava coisa sobrando. |
| 32:43 | Hoje em dia, todo novo software povo já deixa preparado pra gerar pacotes como RPM ou DEB |
| 32:49 | pelo menos. Daí um servidor automatizado baixa o tarball mais novo, compila os binários no servidor, |
| 32:55 | e atualiza a lista de pacotes. É isso que empresas como Red Hat ou Canonical fazem pra manter suas distros. |
| 33:02 | É pra isso que eles servem. O autor do jq se cadastra lá e fala: "toda vez que sair versão nova, vocês podem baixar |
| 33:08 | o tarball dessa URL aqui", e pronto. Daí em outros servidores eles montam a distro, rodam testes automatizados, e garantem que |
| 33:16 | a versão nova dos pacotes não quebra nada. Se quebrar, dá rollback e descarta. |
| 33:21 | Vamos voltar pro Slackware. Como disse antes, não tem oficialmente nenhum equivalente de Apt ou Dnf pra gerenciar pacotes. |
| 33:28 | No máximo tem scripts pra lidar com pacotes como pkgtool ou installpkg, que são bem simples. |
| 33:34 | Ele assume que tudo que vamos precisar já tá instalado. Mas a realidade é que tem um monte de software que não vem na instalação. |
| 33:41 | Esse "jq" é um exemplo. Pra instalar software por fora, poderíamos fazer o que acabei de mostrar, que é baixar |
| 33:47 | os tarballs, compilar e tals. Mas a comunidade Slack criou um site chamado Slackbuilds.org. |
| 33:53 | Ele é um repositório que cadastra softwares como o "jq" e oferece um script em formato SlackBuild. |
| 33:59 | No tal blog post que falei que vou usar de referência, em 2020 que é quando foi escrito, o jq declarava que tinha dependência com o oniguruma, como pode ver nessa foto de tela |
| 34:08 | que tinha no blog. Mas em 2022, se navegarmos pro site slackbuilds.org e pesquisar "jq", vemos que não tem mais |
| 34:15 | essa dependência. E já sabemos porque. Quando baixamos o tarball do jq, vimos que o autor já copia o codigo fonte do oniguruma |
| 34:22 | junto. Daí não precisa mais compilar separado. O ponto do blog post era mostrar que pra instalar o jq, era necessário instalar o oniguruma |
| 34:30 | separado na mão. Isso ainda é verdade pra vários outros softwares, mas por acaso pra esse exemplo não é mais |
| 34:35 | verdade e menciono aqui justamente pra mostrar que blog posts envelhecem e software muda. |
| 34:42 | Por isso você não pode ser um tapado que só vai copiando e colando, tem que saber o que tá acontecendo. |
| 34:47 | Agora sei que posso pular esse trecho todo do blog post e ir direto no slackbuild do |
| 34:52 | jq. Eu tenho que baixar o código fonte original, que já fizemos agora pouco, e baixar esse jq.tar.gz que é o script pra gerar o pacote. |
| 35:00 | Voltamos pro terminal, `tar xvfz jq.tar.gz`, entramos nesse diretório "jq" e movemos o |
| 35:06 | tarball do código fonte aqui pra dentro. O segredo é esse script "jq.SlackBuild". O que fazemos com ele? |
| 35:12 | Vamos ver o que tem dentro ué. É um scriptzão que configura variáveis de ambiente aqui no começo, acerta permissão |
| 35:19 | dos arquivos e olha só, vai executar `./configure` com algumas opções a mais, rodar `make` |
| 35:24 | pra compilar, depois `make check` que vai rodar os testes automatizados pra garantir que compilou certo. |
| 35:30 | Pra você, babaca que acha que testes são desnecessários, o mundo open source só é estável como é hoje graças a testes automatizados. |
| 35:38 | Versões mais novas do seu Ubuntu conseguem sair mais rápido, porque ele roda os testes de todos os pacotes antes de gerar a ISO que você faz download. |
| 35:47 | Finalmente o script roda aquele `make install`, mas manda instalar num sub-diretório, que é o que vai usar pra gerar o pacote final. |
| 35:55 | Vamos executar aqui. `./jq.SlackBuild`. Só reclama que precisa de sudo, então repetimos com sudo. |
| 36:01 | E pronto, no final fala que gerou um pacote jq bla bla ponto tgz. Pacote de SlackBuild é nada mais, nada menos que um zipão. |
| 36:09 | E pra instalar, abrimos um shell de root com `sudo su`. Aqui podemos rodar o script `installpkg /tmp/jq bla bla ponto tgz` e pronto, tá instalado. |
| 36:20 | O "jq" roda bonitinho. Se dermos `which jq` fala que tá em "/usr/bin". E a grande vantagem de instalar dessa forma em vez de fazer `sudo make install` na mão |
| 36:29 | é que pra desinstalar fica mais fácil também. Vamos desinstalar. Só rodar `removepkg jq` e olha só, apagou todos os arquivos direitinho. |
| 36:37 | Além do binário "jq" tinha arquivos de documentação, tinha libs, tudo que ia ficar pra trás sujando |
| 36:42 | meu sistema se não tivesse uma forma automatizada de apagar. E eu falei script, e não programa, porque installpkg é só um script de shell. |
| 36:50 | Damos um `which installpkg` pra ver onde tá. Agora podemos fazer `cat /sbin/installpkg` e olha só. |
| 36:57 | Só um script. Por exemplo, podemos ver que esse script suporta pacotes em 4 formatos diferentes de compressão. |
| 37:04 | O nosso foi final tgz, mas ele suporta extensões como tbz, tlz e txz que respectivamente podem |
| 37:11 | usar bzip, lzip ou xz em vez de gzip. Existem várias variações do lempel-ziv que zip usa, incluindo o zst que é o zstandard |
| 37:19 | que o Debian usa em pacotes ponto deb. Se quiser aprender mais sobre scripts de shell, leia e tente entender esse script. |
| 37:26 | Não é muito difícil. Esses scripts installpkg e removepkg e pkgtool que eu não mostrei, são o equivalente à |
| 37:32 | ferramenta dkpg do Debian e rpm dos derivados de RedHat. Um Apt usa dkpg por baixo. |
| 37:39 | Um Dnf ou Zypper usa o rpm por baixo. Dpkg serve pra, dado que já tenho um arquivo ponto deb, ele sabe como abrir o pacote, como |
| 37:47 | instalar e como desinstalar. O apt serve pra procurar e baixar o pacote, daí chama o dpkg pro resto. |
| 37:54 | Como falei antes, Slackware tem equivalente ao dkpg mas não tem equivalente ao Apt. |
| 37:59 | Mas não significa que a única solução é ficar indo manualmente no site slackbuilds.org pra procurar os softwares que precisamos e gerar os pacotes manualmente. |
| 38:08 | Já que o Slackware não tem nada oficial, a comunidade criou uma ferramenta, chamada de sbopkg. |
| 38:13 | Sbo que significa SlackBuilds.org. Vamos instalar. No momento que estou escrevendo esse episódio, é a versão 0.38.2. |
| 38:22 | Só pegar o link, ir no terminal e baixar com wget. Agora entramos no shell de root e instalamos o pacote tgz com `installpkg`, como fizemos |
| 38:31 | antes com o jq. E agora é só rodar `sbopkg -r`. Esse traço "r" vai fazer um rsync com o site slackbuilds.org pra ter uma cópia local dos |
| 38:41 | pacotes disponíveis lá, pra possibilitar procurar pacotes sem ter que abrir o site num navegador. |
| 38:46 | Por exemplo. Vamos instalar o mesmo "jq" usando essa ferramenta. Ainda no shell de root podemos fazer `sbopkg -p jq`. |
| 38:53 | Vai criar um arquivo em "/var/lib/sbopkg/queues". Ele tem o conceito de fila, onde podemos ir enfileirando vários pacotes pra instalar |
| 39:01 | de uma só vez. Mas aqui vamos direto já rodar `sbopkg -B -i jq.sqf` e pronto. |
| 39:07 | Tá instalado. Se fosse um pacote com várias dependências, não precisaríamos instalar uma por uma na |
| 39:13 | mão como antes, o sbopkg vai se encarregar de instalar tudo sozinho. Vamos instalar algo mais complexo, como um neovim, mas um pouco diferente agora. |
| 39:21 | Digite só o comando `sbopkg` sem nenhum parâmetro e olha só, abre uma interface interativa |
| 39:27 | em ncurses. Podemos dar search pra achar o neovim, selecionar o pacote que quero, e dar install. |
| 39:33 | E pronto. Ele se vira. É tipo a loja de software do seu Ubuntu só que em modo texto. Tem opções pra desinstalar, pra atualizar todos os pacotes e mais. |
| 39:42 | Com isso o slackware também fica um pouco mais moderno e parecido com outras distros. E a quantas anda nossa instalação de Slackware? |
| 39:50 | Vamos ver, puts, continua copiando pacotes. Eu vou parar por aqui, porque no final a única coisa que vai sobrar é ele me perguntando |
| 39:56 | que gerenciador de janelas queremos usar, se queremos KDE ou XFCE mas a curiosidade |
| 40:03 | é que ele vem também instalado com o antigo Window Maker, que é a base da interface de |
| 40:08 | MacOS desde a primeira versão "X" ou "10", a versão open source do que vinha nos computadores |
| 40:13 | da Next do Steve Jobs. E também vem com Motif, que é interface gráfica que vinha em workstations UNIX como |
| 40:20 | da Sun ou Silicon Graphics. Vale testar de curiosidade, mas são bem rudimentares. |
| 40:26 | No final escolhe um KDE da vida que tá de bom tamanho. Reboota e pronto, tá igual qualquer outra distro. |
| 40:31 | O Slackware é provavelmente a distro mais antiga ainda em atividade hoje e eu escolhi falar dela pela oportunidade de explicar vários conceitos que acontecem por baixo dos panos, |
| 40:41 | escondido, em distros mais modernas, e que vocês dificilmente iam aprender sozinhos. |
| 40:46 | Eu sei tudo isso porque comecei literalmente usando Slackware e Red Hat nos anos 90 quando |
| 40:52 | nenhuma das distros modernas existia. Ubuntu só viria a aparecer lá por 2005 ou 2006. |
| 40:58 | Arch só aparece depois de 2001. Todas as distros derivadas de Ubuntu como PopOS só aparecem depois de 2010. |
| 41:05 | Pra mim sempre tudo fez sentido justamente porque aprendi numa época em que a única coisa que a gente tinha era um tarball de código fonte e o GCC pra compilar e mais |
| 41:15 | nada. Por isso foi mais fácil pra mim do que é pra vocês. É muito mais difícil entender as ferramentas de hoje porque tem misturado ferramentas do |
| 41:23 | passado e é confuso saber o que é pra usar quando. Um usuário novato que escolher Slackware vai bater cabeça sem saber como instalar |
| 41:31 | software, porque não entende a filosofia de tarballs e ia ter dificuldade de entender a diferença do script `installpkg` pro projeto `sbopkg`, sem saber que o primeiro é fundação |
| 41:41 | pro segundo. De qualquer forma, eu acho interessante a idéia de já ter um monte de coisa pré-instalada. |
| 41:47 | Espaço hoje em dia é barato. E mesmo assim ele não fica pesado porque apesar de estar instalado, nada que você |
| 41:53 | não pedir vai carregar. Por exemplo, se já tiver apache instalado mas eu não habilitar o serviço pra carregar, |
| 41:59 | então não vai consumir memória ou CPU a mais só por estar lá. Porém, do ponto de vista de segurança eu não gosto. |
| 42:05 | Em segurança queremos sempre ter o mínimo possível de software pré-instalado, porque não dá pra saber se um software antigo, sem manutenção, não tem um bug de segurança |
| 42:15 | que pode ser usado pra algum hacker escalar privilégios pra root e tomar conta da nossa máquina. |
| 42:21 | Eu recomendo sempre só ter instalado o que realmente precisa usar. De qualquer forma, vale tentar instalar e usar por um tempo, pra aprender mais uma distro |
| 42:29 | diferente de Linux. Tendo um sbopkg, o uso é parecido com um apt de Ubuntu ou dnf de Fedora, então não |
| 42:36 | deve dar muito trabalho de usar no dia a dia. Muitos de vocês já instalaram dezenas de software num Ubuntu da vida, sem saber que |
| 42:43 | tava baixando pacotes DEB, sem saber que esses pacotes nada mais são que um zipão. |
| 42:49 | No próximo episódio vamos falar mais conceitos de Linux. Se ficaram com dúvidas, mandem nos comentários abaixo. |
| 42:54 | Se curtiram o video deixem um joinha, assinem o canal pra não perder a continuação, e |
| 43:19 | compartilhem o video com seus amigos. |
| 43:25 | A gente se vê, até mais! |
