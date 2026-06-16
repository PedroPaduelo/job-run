# Entendendo WSL 2 | E uma curta história sobre Windows NT

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=28jHuWBi72w
- **Duração:** 1:13:59
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita O próximo grande upgrade de Windows 10 |
| 0:05 | está próximo, não sei ainda se vai ser agora já em setembro ou outubro, mas quando vier ele vai |
| 0:10 | trazer a funcionalidade que todo desenvolvedor estava precisando: conseguir rodar aplicações |
| 0:16 | de Linux quase nativamente em Windows 10. Acho que a esta altura quase todo mundo já ouviu |
| 0:22 | falar do tal WSL ou Windows Subsystem for Linux. Porém muita gente ainda não entendeu direito o |
| 0:28 | que é isso. Na real é super simples. E se você é iniciante e já assistiu meus vídeos da série |
| 0:34 | Começando aos 40, muito do que eu expliquei na parte de virtualização e containers vai ser usado |
| 0:40 | hoje então, se ainda não assistiu, recomendo assistir antes, especialmente os que explicam sobre virtualização e containers. Rodar um ambiente Unix ou Linux em cima do |
| 0:51 | Windows, com suporte oficial da Microsoft, é um elo perdido que muitos de nós viemos perseguindo |
| 0:57 | nas últimas décadas, eu mesmo venho acompanhando isso faz algum tempo. E pra sua surpresa essa |
| 1:03 | nem é a primeira vez que a Microsoft oferece algo assim. Se você está interessado só na parte |
| 1:08 | prática do WSL pode pular direto pra este tempo aqui embaixo, mas como sempre eu vou fazer uma |
| 1:14 | tangente pela história, então vamos lá. (...) Essa história se inicia nos primórdios dos anos 80. Se você não sabe disso a Microsoft |
| 1:30 | cresceu graças à IBM que licenciou seu MS-DOS para ser instalado nos IBM PC, |
| 1:35 | fruto da amizade da mãe de Bill, Mary Gates com o CEO da IBM na época, John Opel. Todo mundo |
| 1:42 | relaciona Microsoft com MS-DOS e depois Windows. Todo mundo relaciona interface gráfica com o |
| 1:48 | Macintosh original ou no máximo com o Apple Lisa e a Xerox Parc. Em termos de interfaces gráficas, |
| 1:53 | existiram diversas tentativas como o GEM dos Atari ST, o famoso Amiga Workbench no AmigaOS, |
| 2:00 | o DeskMate do TRS-80. Mas em processadores de 8-bits que, |
| 2:05 | com muito esforço, dava pra mapear 64 kilobytes de RAM, desperdiçar espaço |
| 2:11 | com interfaces gráficas era demais. O AmigaOS, por exemplo, precisava do processador Motorola |
| 2:16 | 68000 de 16 ou 32-bits. De qualquer forma pouca gente relaciona que a Microsoft teve outros |
| 2:22 | sistemas operacionais e outras interfaces gráficas muito antes do Windows. Por exemplo, vocês sabiam que a Microsoft já teve um UNIX de verdade? Sim, muito antes da |
| 2:33 | Apple comprar a Next e transformar o NextStep no OS X. Aliás, vale relembrar: Linux não é um UNIX, |
| 2:41 | ele é mais ou menos compatível, mas na prática é um sistema operacional totalmente diferente. O UNIX original vem da Bell Labs e sua herança hoje vive nos derivados de BSD |
| 2:51 | como FreeBSD ou NetBSD e no Darwin do MacOS. A maioria dos UNIX de verdade vieram desaparecendo |
| 2:58 | ou diminuindo consideravelmente com o tempo como o Solaris da Sun ou o Irix da Silicon Graphics que, |
| 3:04 | de curiosidade, se você assistiu Jurassic Park, já viu o Irix funcionando. |
| 3:12 | Em 1980 a Microsoft se uniu à SCO ou Santa Cruz Operation e eles desenvolveram o Xenix que era |
| 3:29 | outro UNIX de verdade, e estamos falando mais de uma década antes do surgimento do Linux. Segundo |
| 3:35 | a Microsoft era um UNIX muito próximo do UNIX original versão 7 que rodava nos minicomputadores |
| 3:41 | PDP-11. Aliás, de curiosidade também, antigamente a gente chamava os mainframes de computadores, |
| 3:47 | coisas como o PDP são os minicomputadores, e os Commodore, TRS-80, Sinclair, MSX, |
| 3:53 | e mesmo os IBM PC eram os microcomputadores. Por isso falamos em "micros". Enfim, uma das idéias era evoluir o MS-DOS 2 pra se aproximar do XENIX em single-user, |
| 4:04 | que iria virar o XEDOS, mas foi mais um vaporware que nunca saiu do papel. Aliás, |
| 4:09 | foi daí que o termo "vaporware" nasceu, em 1982 por causa do XENIX. A SCO seguiu sozinha com seu |
| 4:17 | SCO UNIX depois e a Microsoft desistiu da idéia e se uniu à IBM pro projeto OS/2 em 1987. |
| 4:24 | Esse período foi especialmente conturbado porque estamos falando da transição dos processadores de |
| 4:30 | 8-bits como os antigos Z80 ou Intel 8086 e 8088 e indo pra 16-bits com o 80286, |
| 4:37 | que inclusive foi onde eu ganhei meu primeiro computador, um clone de IBM PC XT em 1989. Porém |
| 4:43 | o 286 era um processador complicado, pra dizer o mínimo. Estávamos migrando do modo real de |
| 4:49 | execução pro modo protegido, que hoje é o padrão. Nessa transição apareceu a necessidade de emular |
| 4:55 | o 8086 no modo protegido. Mas o modo protegido e emulado do 8086 nos 286 era falho. Além disso |
| 5:01 | existia o problema do endereçamento segmentado de memória, diferente do modelo flat que você |
| 5:07 | está acostumado hoje, onde pode endereçar toda a memória de 32 ou 64-bits. Pense que em 16-bits você só consegue endereçar 64kb de RAM, pra ter acesso a mais RAM você |
| 5:19 | precisa apontar pra espaços secundários, ou segmentados, de RAM. Como um índice apontando |
| 5:24 | pra uma página em outro livro. Em termos simples você tinha um índice de 24-bits com endereços de |
| 5:30 | 16-bits em múltiplos segmentos. No frigir dos ovos, com os problemas de hardware não seria |
| 5:36 | possível rodar múltiplos ambientes paralelos de MS-DOS como deveriam. E a Microsoft obviamente não gostou muito disso. Na parceria da IBM com a Microsoft eles |
| 5:45 | desenvolveram o OS/2. A primeira versão era só modo texto, e a primeira interface gráfica tinha |
| 5:51 | a cara do Windows 2, que saiu mais ou menos na mesma época. Porém a IBM insistiu no suporte ao |
| 5:57 | 286 e esse foi um dos motivos da quebra da parceria porque o MS-DOS e o Windows tinham |
| 6:02 | problemas com o 286. A Microsoft queria ir direto pro 386 de 32-bits que era muito melhor. Aliás, |
| 6:09 | no caso do 286, imagine um processador que tinha máximo de 16MB de RAM. Claro, |
| 6:14 | estamos falando de 1988. Os 386, em comparação, sendo de 32-bits, tinha máximo teórico de |
| 6:20 | infinitos 4GB de RAM. Mas mais importante, rodava DOS em modo protegido perfeitamente. |
| 6:26 | Por outro lado, a IBM queria privilegiar a sua linha de hardware, claro, e eles tinham |
| 6:31 | se comprometido com os 286 e sua linha de PCs PS/2 (entenderam? PS/2, OS/2 ...) e por isso insistiram |
| 6:39 | no OS/2 ser especializado nesse processador. Então em 1992 a IBM e a Microsoft se separaram, a IBM se |
| 6:46 | manteve com o OS/2 e a Microsoft estava muito bem, obrigado, com seu Windows 3, a interface |
| 6:52 | gráfica de maior sucesso da época. Em paralelo a isso a Microsoft começou a criar |
| 6:57 | um sistema operacional portável pra múltiplas arquiteturas de computador como processadores |
| 7:02 | RISC da MIPS, PowerPC, Itanium, Intel e contratou Dave Cutler que trabalhava na VMS, |
| 7:09 | que fazia o VAX/VMS mas não estava interessado em muitas de suas idéias. Daí ele foi pra |
| 7:14 | Microsoft e caiu no projeto NT onde ele pôde aplicar muitas dessas idéias. Aliás, o nome Windows NT tem alguma controvérsia no seu significado, muitos talvez ainda pensem em NT |
| 7:25 | como sendo New Technology. O Dave Cutler vai dizer que WNT seria uma brincadeira em cima do nome da VMS de onde ele veio. Assim como muita gente gosta de |
| 7:35 | brincar que IBM é uma brincadeira em cima do nome HAL, a inteligência artificial do filme |
| 7:40 | 2001 do Stanley Kubrick. Se você pegar HAL e dar shift de uma letra pra frente, o H vira i, |
| 7:46 | o a vira b e o l vira m. Mesma coisa com VMS se você der shift uma letra pra frente o v |
| 7:53 | vira w o M vira N e o S vira T e daí WNT ou Windows NT. Tem outras teorias mas eu pessoalmente gosto mais dessa. Hoje em dia na real não significa nada, só um nome mesmo. |
| 8:02 | Com o objetivo de ser portável o Windows NT implementa uma camada de abstração do hardware, |
| 8:08 | chamado convenientemente de HAL também, ou Hardware Abstration Layer. Vocês veem que |
| 8:14 | nós de programação não somos exatamente muito criativos com nomenclatura das coisas. Além |
| 8:20 | disso o NT começou tentando implementar um micro-kernel, inspirado nas idéias da |
| 8:25 | kernel Mach de Carnegie Mellon. Hoje em dia nós usamos kernels monolíticos ou kernels híbridos. |
| 8:31 | A idéia de um microkernel é ser um kernel o mais minimalista, leve e estável possível rodando no |
| 8:37 | modo de supervisão ou Ring-0 que é o anel de maior privilégio. Eu expliquei isso em outro vídeo. Daí |
| 8:43 | todos os serviços que compõe o sistema rodam em user mode ou Ring-3. O problema disso é que |
| 8:49 | você acaba com um overhead muito grande de IPC ou interprocess communication pois os programas |
| 8:55 | rodando no anel de menor privilégio precisam ficar constantemente se comunicando com o kernel que |
| 9:00 | roda no anel de maior privilégio. Essa controvérsia de micro-kernels versus kernels monolíticos ou macro-kernels foi tema de grande discussão na comunidade Linux no começo, |
| 9:10 | inclusive é um episódio histórico a discussão de Linus Torvalds defendendo o design monolítico da |
| 9:16 | kernel do Linux contra a visão acadêmica de micro-kernels do professor Andrew Tanenbaum, |
| 9:22 | autor de um dos livros sobre sistemas operacionais mais famosos e que você provavelmente teve que |
| 9:27 | estudar se cursou ciências da computação. Na prática, apesar do design de micro-kernels ser |
| 9:32 | o mais elegante, macro-kernels funcionam melhor como o sucesso do Linux já comprovou. |
| 9:37 | No caso do NT, por exemplo, subsistemas de drivers de I/O, como video ou mesmo impressão rodavam tudo |
| 9:45 | em Ring-3, em user-mode, como deveriam. Mas no Windows NT 4 eles foram movidos pro Ring-0, |
| 9:51 | dentro do espaço do kernel. Eu costumo dizer que o Windows NT mais estável e robusto era o Windows |
| 9:57 | NT 3.5 justamente porque ele tinha o menor kernel, mas pro hardware da época acho que |
| 10:03 | não tinha muita alternativa. No Windows 2000 ou XP se não me engano eles moveram uma parte |
| 10:08 | do IIS na versão 6.0, pro Ring-0 na forma do driver HTTP.sys. Isso substituiu o Winsock que |
| 10:15 | rodava em user-mode, e eu acho que isso foi um erro. Imagine parte do seu servidor web embutido |
| 10:21 | na kernel incluindo coisas como cache e fila de requests. De qualquer forma isso garantiu melhor |
| 10:26 | performance pro IIS se comparado ao Apache que rodava exclusivamente em user mode, mas ao custo |
| 10:32 | de bugs na stack de HTTP potencialmente causarem problemas no nível do kernel, |
| 10:37 | que poderia levar desde um crash do sistema até a buracos sérios de segurança. A equipe do Windows NT era formada por muita gente da DEC ou Digital Equipment Corporation, |
| 10:48 | liderada pelo Cutler, e uma das tais idéias que ele trouxe da VMS foi a noção de um sistema |
| 10:53 | operacional orientado a objetos e por isso na arquitetura do NT você tem um Object Manager |
| 10:59 | na camada privilegiada do Windows Executive, abstraindo todos os recursos do sistema na forma |
| 11:05 | de objetos lógicos. Além deles alguns membros da equipe vieram do time do OS/2 que também queria |
| 11:12 | integrar noções de orientação a objetos. Uma das coisas que eu achava fascinante na interface do OS/2, o Workplace Shell, é que tudo eram objetos. Infelizmente isso não foi implementado |
| 11:22 | no Windows. Mas por exemplo, em vez de abrir um programa e clicar no menu em Novo Arquivo, você abria uma pasta de templates e arrastava o template pro desktop pra criar um novo arquivo, |
| 11:32 | como uma instância de uma classe. A idéia de orientação a objetos foi embutido em todos |
| 11:38 | os sistemas operacionais dos anos 90 e por isso coisas como a API de um NextStep sendo orientados |
| 11:43 | a objetos, e você tem abstrações e encapsulamento de comportamento criando coisas como o Hardware |
| 11:49 | Abstration Layer do NT. Pra todos os efeitos e propósitos, do fim dos anos 80 pro início dos anos 90 eu diria que os sistemas operacionais desktop mais |
| 11:59 | avançados eram o OS/2, o AmigaOS, o NextStep e o Solaris. Eles inspiraram diversos outros |
| 12:06 | como o BeOS ou o Irix. Mas os mais populares eram sem dúvida o MS-DOS, o Windows 3.1 e o System |
| 12:13 | 7. O Windows NT apareceu pela primeira vez em 1993 com o nome de Windows NT 3.1 pra ser paralelo ao |
| 12:20 | nome Windows 3.1 que era completamente diferente e ainda rodava por cima do DOS. De comum eles tinham |
| 12:25 | basicamente a mesma interface gráfica. Daí em 1995 tudo mudou com o advento do Windows |
| 12:31 | 95, trazendo a era de 32-bits pros desktops populares. Comparado com hoje em dia, |
| 12:37 | eu lembro como a gente achava o Windows 95 pesado, precisando de 4MB de RAM sendo que o Windows 3.1 |
| 12:43 | rodava tranquilamente com 2MB de RAM. No ano seguinte saiu o Windows NT 4.0 com a |
| 12:49 | interface mais parecida com do Windows 95. Os NT, pela natureza da sua arquitetura mais |
| 12:54 | robusta também precisava de mais recursos pra rodar, eu acho que com menos de 8MB ou 16MB de |
| 12:59 | RAM não dava pra rodar decentemente, e por isso eles eram mais usados em servidores. Nos anos 90 fomos evoluindo do Windows 95 pro 98 até o famigerado Windows ME ou Millenium |
| 13:11 | Edition. E no lado do NT que era mais voltado a servidor fomos do NT 4 pro 2000. Passamos os |
| 13:16 | anos 90 surfando na Lei de Moore e processadores mais rápidos iam saindo o tempo todo, do 486 pros |
| 13:23 | Pentium pro Pentium II, Pentium III, no servidor tínhamos os Itanium. RAM foi ficando mais barato. |
| 13:29 | A grande virada veio em 2001 com a unificação dos Windows no famigerado XP e finalmente nos livramos |
| 13:35 | do legado do MS-DOS por baixo do Windows. Desde então sempre tivemos uma versão de NT pra desktop e outro pra servidor. Então na era do XP tivemos o Windows Server |
| 13:46 | 2003 e 2003 R2. Com o Windows Vista sucedendo o XP tivemos o Windows Server 2008. Depois o |
| 13:52 | Windows 7 e o Windows 2008 R2. Depois disso o Windows 8 e o Windows Server 2012 e 2012 R2 |
| 13:59 | e na geração do Windows 10 a partir de 2015, que teoricamente vai ter só upgrades sem mudar o nome, |
| 14:05 | tivemos o Windows Server 2016 e Server 2019. O Windows 10 hoje está na oitava edição estável |
| 14:11 | build 1903 de maio de 2019. Essas edições costumam sair entre abril e maio e depois |
| 14:17 | outubro, por isso eu acho que a próxima edição importante vai sair em outubro de 2019. |
| 14:22 | Eu falei que o NT desde o começo veio com a mentalidade de ser portável, ele não rodava só em Intel. Mas aos poucos o suporte de hardware foi diminuindo à medida |
| 14:31 | que essas arquiteturas foram caindo em desuso. Por exemplo, no Windows 2000 caiu o suporte |
| 14:37 | a MIPS, Alpha e PowerPC. Mas além do lado hardware o NT implementou a idéia de "personalidades" ou |
| 14:43 | subsistemas. Você tinha a Win32 que é o suporte a API moderna do Windows. Hoje em dia programas |
| 14:49 | 32-bits rodam emulado sobre o WoW64 ou Windows 32 on Windows 64. Mas desde o começo ele foi lançado |
| 14:57 | com suporte a subsistemas como OS/2 que permitia um grau de compatibilidade com a API do OS/2, |
| 15:03 | já que a Microsoft tinha interesse no nicho que eles ajudaram a criar com a IBM. Claro que eles precisavam manter compatibilidade com o MS-DOS e pra isso eles já embutiam uma |
| 15:12 | virtual machine pra DOS. Sim, um tipo de máquina virtual. E pra conseguir atender contratos de |
| 15:18 | governo que requeriam UNIX eles também tinham um subsistema compatível com POSIX, que como eu |
| 15:24 | já expliquei em outro episódio, é a superfície de compatibilidade com os UNIX da época. Ou seja, seria possível pegar o código fonte de aplicativos feitos pra UNIX e teoricamente |
| 15:35 | compilar num Windows NT e rodar nativamente! Ele era compatível com o padrão POSIX.1 por isso não |
| 15:42 | tinha um shell ou ambiente de uso e comandos de usuários, coisas como um mísero 'ls', |
| 15:47 | que só passaria a existir como padrão no POSIX.2. Por isso pra usuários normais de Linux como nós, |
| 15:53 | esse ambiente é basicamente inútil. Só serve se você tinha código fonte em C compatível com POSIX.1 e precisava de um compilador C compatível. |
| 16:02 | Com a evolução rápida das distros Linux nos anos 90 e igualmente rápido desuso dos UNIX, |
| 16:09 | esse subsistema no Windows era meio inútil. Nesse vácuo, projetos open source como o Cygwin |
| 16:14 | apareceram. Cygwin se chama assim porque foi criado pela empresa Cygnus Solutions que depois |
| 16:20 | foi adquirida pela RedHat. Era um ambiente em user-mode compatível com POSIX e com Linux em |
| 16:26 | particular. E diferente do subsistema POSIX original da Microsoft, eles portaram boa parte |
| 16:32 | do toolchain do GNU no pacote, trazendo shells como bash e além das ferramentas pro compilador, |
| 16:37 | também trouxe diversas outras coisas úteis como awk, sed, tar, ssh, servidores como Apache, |
| 16:43 | Postgres, linguagens como Perl, Python, Ruby, Prolog e muito mais. Era como uma distro baseada em Linux rodando sobre uma camada que tentava abstrair o NT por baixo na |
| 16:54 | forma de DLLs. Muita gente ainda usa Cygwin até hoje e sempre foi a melhor ou mesmo a única forma |
| 17:00 | de rodar muitas ferramentas de Linux de forma nativa no Windows. Mas Cygwin não se encaixa na |
| 17:06 | categoria de distro de Linux porque ele tem uma semi compatibilidade em nível de código fonte, |
| 17:12 | mas os binários de Linux não rodam no Cygwin nativamente, precisa recompilar sempre. |
| 17:17 | Com o passar dos anos o subsistema POSIX original foi removido no Windows XP e Windows Server 2003 |
| 17:24 | sendo substituído por outro subsistema que foi originalmente desenvolvido por uma empresa |
| 17:29 | chamada Interix, adquirida pela Microsoft, e sua solução foi renomeada como Windows Services for |
| 17:36 | UNIX ou SFU e você podia instalar opcionalmente. O suporte ao SFU veio gradativamente diminuindo, |
| 17:43 | tendo muitos de seus componentes removidos do instalador até o Windows 8 e Windows |
| 17:48 | Server 2012. Mas pra todos os efeitos e propósitos ele é muito similar ao Cygwin |
| 17:54 | só que o Cygwin é compatível com GNU/Linux e o SFU é compatível com UNIX. Novamente, |
| 17:59 | se você tinha código fonte de UNIX podia compilar no SFU e rodar no Windows. |
| 18:05 | Em 2004 surgiu a primeira forma de rodar Linux sobre o Windows de verdade, sem virtualização. |
| 18:10 | Foi o Cooperative Linux ou coLinux. Infelizmente a última versão estável dele é de 2011 então não |
| 18:18 | espere que ele funcione hoje em dia. Mas em vez de ser um subsistema ou uma máquina virtual, ele era uma kernel linux modificada que era carregado no Ring-0 do lado do kernel do NT. E ele |
| 18:29 | compartilhava os recursos da máquina com o kernel NT, por isso cooperativo. Isso era possível |
| 18:35 | através de um driver, e drivers rodam em Ring-0 junto com ferramentas como um Windows Service pra |
| 18:40 | dar acesso. Daí em user-land você podia rodar os binários originais de uma distro como Ubuntu ou |
| 18:46 | Arch. Dava pra acessar o terminal via SSH ou mesmo a interface gráfica do X via um VNC. Pra todos os |
| 18:53 | efeitos era quase como rodar um Virtualbox mas sem o overhead de virtualização. Eu imagino que manter |
| 18:59 | suporte de algo assim deve ser bem complicado porque você meio que está lobotomizando o kernel |
| 19:04 | do NT por um hack via um driver. Como podem ver, rodar Linux ou UNIX sobre o |
| 19:10 | Windows é uma coisa que muita gente já tentou fazer de diversas formas. Com hardware moderno, |
| 19:16 | a opção mais estável é abrir um Virtualbox ou VMWare e rodar virtualizado. Graças à evolução |
| 19:22 | do suporte de virtualização dos processadores, na minha experiência não só é viável mas serve muito |
| 19:28 | bem como máquina principal de desenvolvimento. E quando eu digo hardware moderno estou falando no |
| 19:33 | mínimo de um Core i5 de 4 cores com no mínimo 8GB de RAM, preferencialmente 16GB. O problema |
| 19:40 | de virtualização normal é que normalmente você precisa pré-reservar quantos cores e quanto de RAM |
| 19:46 | vai ser dedicado pra máquina virtual. Vejam o problema. Com soluções como o subsistema |
| 19:51 | POSIX, o Cygwin ou o SFU tudo roda nativo, não é virtualização. Mas pra |
| 19:57 | funcionar você precisa ter o código fonte de tudo, talvez modificar alguma coisa, compilar e gerar um binário nativo de Windows NT. Se conseguir fazer isso o binário vai rodar |
| 20:07 | como qualquer outro binário de Windows. Por outro lado, é muito difícil conseguir compatibilidade |
| 20:12 | com tudo e muita coisa simplesmente não vai nem compilar sem modificações significativas. Pelo simples fato que as primitivas do kernel do NT são diferentes do kernel do Linux. Já |
| 20:24 | expliquei em detalhes em outros vídeos como o Windows, o Mac e o Linux gerenciam coisas como |
| 20:29 | estrutura de processos, scheduler de threads, memória, I/O de formas diferentes. |
| 20:34 | Por exemplo, num SFU não adianta eu compilar alguma coisa como o programa 'ip' ou o antigo |
| 20:40 | 'ifconfig', eles vão tentar mexer em coisas como o /etc/network/interfaces que o Windows NT não |
| 20:47 | usa pra expor suas interfaces de rede. Isso sem contar que coisas como 'fork' funcionam diferente |
| 20:53 | no Windows, como já expliquei no vídeo de gerenciamento de memória. Não adianta eu compilar um programa que gerencia processos via o diretório /proc porque o Windows não expõe os metadados dos |
| 21:03 | processos lá. O sistema de autenticação e permissão são completamente diferentes, então nenhum programa que gerencia usuários e permissões como 'useradd' ou 'chown' vai conseguir |
| 21:15 | modificar nada no Windows. Essas diferenças tornam complicado rodar programas de UNIX ou Linux lado a |
| 21:22 | lado de programas Windows porque existe uma dissociação semântica enorme. Por outro lado, rodar dentro de uma virtual machine traz a vantagem de isolar completamente |
| 21:32 | os comportamentos de Linux e Windows. De dentro da máquina virtual tudo funciona perfeitamente como |
| 21:38 | se fosse uma máquina de verdade isolada. Daí você controla coisas do host Windows via ferramentas de |
| 21:44 | Windows e coisas de Linux separadamente com coisas de Linux e cada um vive feliz separado. |
| 21:51 | Vamos ver o caso do macOS rapidamente. Como ele foi construído sobre uma fundação UNIX, |
| 21:56 | todo o sistema operacional obedece às leis do UNIX. Todo programa de Mac é de fato um processo |
| 22:03 | UNIX e pode ser controlado com coisas que todo mundo de Linux conhece. Se eu usar o comando `ps` no terminal, vai listar processos como o Chrome ou Final Cut. Se eu usar o comando `kill` |
| 22:14 | no terminal, vai matar de fato os programas todos. Se eu usar comandos como `ip` eu de |
| 22:19 | fato gerencio as interfaces de rede da máquina, e assim por diante. A API do Mac é construído sobre |
| 22:25 | as APIs do UNIX por baixo. Então a integração é praticamente 100%. Um serviço de UNIX é um |
| 22:31 | serviço de Mac e assim coisas como servidor de SSH ou Postgres rodam lado a lado de serviços do Mac. |
| 22:38 | Usuário de Mac são usuários do UNIX. Permissões de arquivos feitos via o Finder ou feitos via |
| 22:43 | Terminal com comandos como 'chown' ou 'chmod' são a mesma coisa. Por isso existe coerência semântica |
| 22:50 | entre os aplicativos gráficos e os de linha de comando. E a Apple trouxe muito do toolchain GNU pra dentro, então o MacOS é como se fosse um FreeBSD mais bonito, na prática. |
| 23:00 | Por outro lado, assim como no subsistema POSIX, Cygwin ou SFU no Windows, o macOS |
| 23:06 | tem compatibilidade de código-fonte mas não de binário. Binários formato ELF de Linux não são |
| 23:12 | compatíveis com binários de BSD ou macOS ou Cygwin ou SFU. Por isso no Mac você precisa |
| 23:19 | compilar programas de Linux especificamente pra rodar no Mac e por isso a gente não pode usar |
| 23:24 | pacotes pré-compilados que já existem em distros como Ubuntu ou Arch. Por outro lado, ao contrário |
| 23:30 | de Cygwin ou SFU, o comportamento do macOS, que é parecido com o comportamento do BSD e tem a |
| 23:36 | mesma semântica do Linux, garante que quase todo o código-fonte seja compatível porque coisas como |
| 23:42 | interfaces de I/O, gerenciamento de memória e de threads é significativamente parecido. |
| 23:47 | Então existe algum trabalho que precisa ser feito no código-fonte de alguns programas, mas no geral, basta recompilar no Mac e tudo magicamente funciona. O mesmo não pode ser dito |
| 23:58 | em ambientes como o antigo subsistema POSIX ou SFU ou Cygwin. E mesmo quando compilam, eles não tem |
| 24:05 | acesso ao resto do sistema Windows. A grande reclamação do povo de Linux quanto |
| 24:11 | a gerenciar os recursos de um Windows é que tudo precisa ser feito via ambiente gráfico. |
| 24:16 | Por isso gerenciar um servidor remoto sempre exigiu coisas como um Remote Desktop ou VNC |
| 24:22 | pra podermos ter a tela gráfica remotamente. É um puta pé no saco quando em servidores Linux |
| 24:27 | podemos conectar via terminal com um cliente de SSH e gerenciar todos os recursos da máquina via |
| 24:33 | linha de comando. Pra resolver parte disso a Microsoft criou o Powershell. Em resumo, a história remete ao fim dos anos 90 de novo, quando a Microsoft iniciou o projeto |
| 24:44 | .NET. Com o tempo boa parte, se não toda a API do Windows, foi mapeada em classes dos frameworks |
| 24:50 | disponíveis no .NET, além de componentes COM e WMI. Porém o antigo programa de linha de |
| 24:56 | comando do Windows, o Command, que herda as características do antigo MS-DOS, é um lixo. |
| 25:01 | As linguagens de script que ele traz como o BATCH ou REXX, oriundo da antiga herança do OS/2, são |
| 25:08 | muito fracos e quase nada do sistema operacional é exposto pra linha de comando, você é obrigado |
| 25:14 | a programar coisas como scripts em visual basic pra acessar o WMI ou componentes COM que tem algum |
| 25:20 | acesso a algumas coisas do sistema como gerenciar usuários. Esquece fazer scripts complicados como |
| 25:26 | os que fazemos em Bash pra Linux. Porém, uma idéia interessante é um console de |
| 25:31 | linha de comando com acesso ao framework do .NET. E é basicamente isso que é o Powershell. Ele trás |
| 25:38 | uma linguagem de script mais poderoso e com muitas coisas que encontramos num Bash. Ele tem inclusive |
| 25:43 | um pipe! E eu argumentaria que um pipe superior ao do Linux. No Linux todo script ou comando aceita |
| 25:51 | argumentos e um stream de bytes que chamamos de standard input e tem uma saída de bytes na forma |
| 25:56 | do standard output, que eu também já expliquei nos vídeos sobre concorrência e paralelismo. E por isso você precisa de comandos como awk ou sed ou grep pra tratar o texto que |
| 26:07 | os scripts devolvem. No caso do Powershell os comandos devolvem estruturas de .NET, |
| 26:12 | ou seja, são dados estruturados. O episódio nem é de Powershell mas obviamente |
| 26:18 | agora eu empolguei. Eu também acho interessante que muita gente que usa Linux nunca viu Powershell. Pense num script de Bash pra selecionar processos que estão |
| 26:29 | usando mais que 100MB de RAM, como você faria. Num bash provavelmente algo parecido com este |
| 26:35 | script aqui: ``` ps -eo rss=,pid=,user=,comm= k -rss \|\| while read size pid user comm do if [ "$size" -gt 102400 ] then echo "$pid $size $user $comm" else break fi done ``` Ou seja, precisamos ir linha a linha da saída do comando `ps` e checar o tamanho em kilobytes até achar o que queremos. Em |
| 26:44 | Powershell podemos fazer assim: `Get-Process \|\| Where-Object WorkingSet -gt 104857600` E como o Powershell suporta aliases e |
| 26:49 | ele já vem com muitos aliases pré-programados, a mesma linha poderia ser escrita assim: |
| 26:55 | `ps \|\| ? WorkingSet -gt 104857600` Do ponto de vista de usabilidade pra novatos, a sintaxe do Powershell é muito mais fácil de ler. E pra veteranos de shell existem formas |
| 27:03 | de simplificar pra comandos mais familiares. E veja como estamos usando o pipe pra passar os |
| 27:09 | objetos do ps pro where-object fazer um filtro na propriedade do objeto. E isso |
| 27:15 | é universal pra todos os comandos. Tecnicamente eu diria que o Powershell pode ser considerado superior em muitos aspectos a Bash ou outros shells de Linux. Eu acho que não é 100% |
| 27:25 | do Windows que pode ser controlado via Powershell mas uma parte considerável pode, e ele pode ser |
| 27:31 | estendido via .NET, então seja via C# ou F# você pode expor o que quiser pra esse shell. E mesmo |
| 27:38 | se você for de Linux pode usar Powershell, porque a Microsoft abriu não só o .NET na forma do .NET |
| 27:44 | Core como open source como também o Powershell na forma do Powershell Core. Aqui o problema é |
| 27:49 | o inverso, ainda não sei quanto do Powershell se integra aos recursos do Linux mas ele pode |
| 27:54 | ser uma opção interessante pra fazer scripts de automação numa linguagem menos cheia de truques |
| 28:00 | se comparado a um Bash, especialmente se estiver rodando coisas como SQL Server pra Linux e outros |
| 28:05 | programas .NET. Ele é particularmente bom pra lidar com dados estruturados como JSON. |
| 28:11 | Essa tangente pro Powershell foi primeiro pra introduzir vocês ao tema, mas segundo pra dizer que apesar dele ser muito bem feito e eu pessoalmente |
| 28:19 | achar elegante e um passo grande pra Microsoft, ele ainda não resolve o problema de quem quer |
| 28:25 | usar o Bash de verdade e está acostumado com o ferramental GNU. Mesmo o Powershell sendo bacana, |
| 28:31 | a gente ainda quer usar ferramentas antiquadas mas funcionais como awk, sed, |
| 28:36 | grep e tudo mais. A única saída nesses casos é instalar Cygwin ou rodar num Virtualbox já que |
| 28:43 | o subsistema POSIX já morreu, o SFU já morreu, e o coLinux não tem suporte desde 2011. |
| 28:48 | Até aqui eu expliquei como era possível rodar alguma coisa de UNIX ou Linux no Windows mas |
| 28:54 | e o oposto? Ou seja, rodar programas de Windows no Linux? Se você já brincou de Linux por algum |
| 29:00 | tempo já deve ter ouvido falar ou mesmo usado o projeto Wine ou Wine is not an Emulador que é um |
| 29:07 | acrônimo recursivo, coisa de programador, como eu já disse a gente é ruim de nomenclatura. O Wine |
| 29:13 | é um projeto capaz de carregar um binário feito pra Windows, sem precisar recompilar, e executar |
| 29:19 | no Linux. Pra fazer isso ele mapeia as chamadas de API pra Kernel do NT em chamadas pra kernel |
| 29:24 | do Linux e faz engenharia reversa de dezenas de DLLs que compõe o Windows e com isso ele consegue |
| 29:30 | executar muitos aplicativos de Windows rodando com performance quase nativa em ambiente Linux. Claro, |
| 29:37 | engenharia reversa significa que 100% de compatibilidade é extremamente difícil. |
| 29:43 | Muitos aplicativos abrem e rodam bem, mas algumas partes deles podem precisar de APIs que não foram reimplementados ainda e crashear ou simplesmente não funcionar. |
| 29:53 | Lembram como no video sobre Ubuntu eu falo como não dava pra rodar todos os games do Windows no Linux? Muitos me lembraram depois que a Steam tem o projeto Proton que permite rodar muitos jogos, |
| 30:04 | mas não todos. Você precisa consultar o site da comunidade, o ProtonDB pra ver se seu jogo |
| 30:10 | roda. Na realidade o Proton usa Wine por baixo. Ele é mais um de uma família de aplicativos que |
| 30:16 | usam Wine e tentam facilitar a instalação de dependências pra programas específicos, como o |
| 30:21 | antigo CrossOver. Por isso o Proton consegue rodar jogos que originalmente foram feitos pra Windows, |
| 30:26 | mas em Linux. O Wine é como se um fosse uma camada de Windows dentro do Linux. |
| 30:32 | O maior problema é que como os binários do Windows não são código aberto, é preciso fazer engenharia |
| 30:38 | reversa dos binários e reimplementar do zero no Linux. É um processo black-box de desenvolvimento, |
| 30:45 | ou mais corretamente, um grande cornojob de tentar executar o binário do Windows, ver ele crasheando, |
| 30:51 | ver que chamada de sistema ele tentou fazer que ainda não existe e implementar essa função |
| 30:57 | no Linux. Função a função. Wine existe já faz muitos anos e com o tempo ele evoluiu bastante, |
| 31:03 | mas o Windows não parou no tempo também, então cada vez que sai uma versão nova, o Wine ganha |
| 31:09 | mais trabalho pra suportar as coisas novas. É um trabalho insano que me deixa fascinado pelo fato |
| 31:15 | de até hoje ainda existir. Muito bem, vamos resumir agora. Vocês lembram o que eu já expliquei em outros vídeos. Um sistema operacional é composto de pelo menos |
| 31:24 | duas partes principais, o kernel e drivers e outros subsistemas que rodam no Ring-0 de |
| 31:30 | maior privilégio do sistema. E a outra parte são outros subsistemas e aplicativos que rodam |
| 31:35 | em user-land ou Ring-3 de menor privilégio. Pra rodar os programas de outro sistema operacional |
| 31:41 | você precisa ter as dependências, talvez fazer algumas modificações no código-fonte, recompilar o programa. É o processo que chamamos de "portar". É pra isso que serviam ambientes |
| 31:52 | como o subsistema POSIX, o SFU e o Cygwin. É como funciona no macOS hoje ou mesmo nos |
| 31:59 | BSDs. Compatibilidade de nível de código-fonte. Quer rodar programas de Linux fora do Linux, |
| 32:05 | precisa recompilar em todos esses ambientes: Windows, macOS ou outros UNIX. |
| 32:10 | Pra rodar um binário de outro sistema operacional, sem recompilar, você precisa ter o kernel e dependências rodando lado a lado do seu sistema principal e um mecanismo pra carregar |
| 32:21 | os binários não modificados. O coLinux conseguiu executar a kernel do Linux cooperativamente, |
| 32:27 | compartilhando os recursos da máquina, do lado da kernel do NT, ele conseguia montar |
| 32:33 | um filesystem de Linux e executar os programas de Linux em user-land sem precisar recompilar nada. |
| 32:39 | Você podia rodar os binários de um Ubuntu ou Arch por cima desse ambiente. Fora isso você tem a opção de virtualização, seja com VirtualBox, VMWare ou Hyper-V, daí você |
| 32:50 | roda tudo em user-land mas com as instruções da VT-X da Intel que permite o kernel virtualizado |
| 32:57 | conseguir acessar o hardware por baixo com menor overhead possível. Você perde 20% ou |
| 33:03 | mais de performance virtualizando, dependendo da configuração do seu hardware, mas no geral tudo |
| 33:08 | funciona perfeitamente. Virtualização é uma opção quase plug-and-play hoje em dia. |
| 33:14 | Eis que do nada a Microsoft anunciou o projeto Windows Subsystem for Linux ou WSL 1 como podemos |
| 33:21 | chamar hoje. Ele começou a aparecer no Fast Ring do Windows Insider lá pelo Anniversary |
| 33:26 | Edition acho que pelo começo de 2016, e foi lançado de verdade no Creators Update uns 3 |
| 33:32 | meses depois. Hoje em dia temos o WSL 2 que é completamente diferente e já vou explicar |
| 33:38 | porque. Mas o WSL 1 do ponto de vista técnico é muito mais interessante, mas eu entendo porque |
| 33:44 | eles desistiram dessa forma. Antes de mais nada, a Microsoft faz muita pesquisa, e eventualmente muitos dos resultados dessas pesquisas realmente acabam no Windows |
| 33:55 | de verdade. Um desses projetos foi o Drawbridge que estava pesquisando formas de rodar processos |
| 34:01 | isolados, como em containers, sem precisar de virtualização. Um dos resultados foi permitir |
| 34:07 | o kernel de criar processos com o mínimo ou zero de interferências. Lembram nos episódios |
| 34:13 | de gerenciamento de memória que eu expliquei que dentro do espaço de endereços virtuais do |
| 34:18 | processo o Windows mapeia suas DLLs de sistema e outras coisas pra compartilhar seus recursos com |
| 34:24 | os processos e por isso um processo de 32-bits no Windows de 32-bits nunca tinha os 4GB totais |
| 34:31 | disponíveis pra ele? O resultado desse projeto Drawbridge foi permitir o kernel NT de criar |
| 34:37 | o que eles chamaram de Minimal Process e Pico Process que são processos sem interferência do OS, |
| 34:43 | com o espaço de memória limpo. A diferença de um processo Minimal e Pico é que no caso |
| 34:49 | do Pico existe um driver associado a ele que permite a comunicação desse processo pra fazer syscalls. Isso existe desde 2013 e o time do WSL |
| 34:59 | resolveu usar esse recurso pra carregar o binário não-modificado de um programa Linux que tem o formato ELF64 pra dentro de um Pico process. Agora pra executar, |
| 35:09 | esse programa vai querer fazer coisas como syscalls pra kernel do Linux. E aí entra a parte |
| 35:15 | do driver. Esse driver vai converter as chamadas pra kernel do Linux em chamadas pra kernel do NT. |
| 35:21 | Então na prática não existe um kernel de Linux rodando. Quando o programa de Linux chamar um |
| 35:26 | fork ele vai ser traduzido pro equivalente NtCreateProcess, ou se chamar fopen ele vai ser traduzido pro NtOpenFile e assim por diante. Na realidade a tradução acontece no nível do |
| 35:38 | assembly, mas a idéia é a mesma. Como já expliquei, o Windows trata todos os recursos do sistema como objetos, incluindo arquivos e o file system, tudo é roteado pelo |
| 35:48 | Object Manager. E ele sempre teve essa idéia do HAL de abstrair o hardware. E de fato, |
| 35:53 | por cima do NTFS temos o VFS ou Virtual File System. Se vocês já usaram Windows e Linux |
| 35:59 | sabem que existem diferenças em como o filesystem NTFS do Windows e o EXT4 do Linux se comportam. |
| 36:06 | Por exemplo, no Windows não tem como deletar um arquivo que está em uso por algum programa, no Linux podemos renomear ou deletar o arquivo mesmo que ele esteja em uso. São comportamentos |
| 36:17 | diferentes e não defeitos na operação, prova disso é que o WSL 1 replica o comportamento |
| 36:23 | de um EXT4 por cima do NTFS removendo algumas validações e checagens que no NTFS são ligadas |
| 36:30 | por padrão. Inclusive o WSL consegue replicar o comportamento do ProcFS e SysFS pra expor partes |
| 36:37 | do sistema operacional como arquivos, como no diretório /proc que lista processos do sistema |
| 36:42 | como expliquei no episódio de Ubuntu. Então esse novo subsistema que seria o herdeiro do antigo subsistema POSIX e do SFU emula o comportamento da kernel do Linux, sem de |
| 36:54 | fato ter o kernel do Linux e sim traduzir tudo pro kernel NT, com a vantagem de carregar binários não |
| 37:01 | modificados. Como eu já expliquei antes, tirando a kernel o que muda de uma distro pra outra são os |
| 37:06 | binários de user-land. E como o WSL consegue carregar os programas de Linux diretamente |
| 37:12 | nos processos Pico, sem precisar modificar ou recompilar esses binários, você pode literalmente |
| 37:17 | pegar todos os binários de um Ubuntu ou Arch ou Fedora e rodar em cima desse subsistema. |
| 37:23 | Uma grande vantagem dessa forma é que ao abrir um Bash e usar comandos como ps ou kill podemos |
| 37:30 | não só manipular programas Linux como programas Windows também. Muitos comandos que num Cygwin |
| 37:36 | seriam inúteis como programas pra configurar interfaces de rede e muito mais passam a funcionar |
| 37:41 | minimamente. Programas que manipulam arquivos podem manipular alguns arquivos do lado Windows |
| 37:47 | também. Foi a primeira vez que programas Linux não modificados puderam rodar lado a lado de programas |
| 37:54 | Windows. Era bizarro porque eu podia abrir o Task Manager do lado do Windows e ver cada programa de |
| 38:00 | Linux individualmente listado. A integração era muito bem feita embora ainda incompleta. |
| 38:06 | Eu rodei esse ambiente por algum tempo, e apesar de não ser tudo que funcionava, era possível rodar |
| 38:12 | tudo que eu precisava pra desenvolver projetos de Ruby on Rails ou Node.js incluindo bancos de dados |
| 38:18 | como Postgres ou Redis e carregar servidores que corretamente faziam binds nas portas nativas do |
| 38:24 | Windows, e conseguir testar do Chrome do Windows. Seria esse o ambiente perfeito? |
| 38:29 | Infelizmente havia ainda vários problemas. O maior ofensor eu diria que era a virtualização |
| 38:35 | do file system. Essa virtualização em cima do VFS funciona, mas o VFS é interligado com o |
| 38:42 | Windows Defender e outros antivírus e antimalware. Toda operação de disco no Windows dá trigger pro |
| 38:48 | Defender avaliar se não tem perigo ler o arquivo. Obviamente isso adiciona um overhead gigantesco. |
| 38:54 | Some a isso operações altamente custosas de I/O como um `npm install` em um projeto de Node e |
| 39:00 | você pode ir tomar um café enquanto espera ele terminar. Isso poderia ser resolvido se a equipe |
| 39:05 | do WSL mudasse a estratégia de tentar manter o file system aberto em cima do NTFS e simplesmente |
| 39:12 | montasse um disco virtual dentro de um arquivão como no formato VHD que Virtualbox ou VMWare usam. |
| 39:19 | Máquinas virtuais costumam montar o filesystem do sistema Guest na forma de arquivos esparsos, |
| 39:25 | ou seja, digamos que você configure um HD de 1 TB dentro do Linux virtualizado mas seu HD de verdade |
| 39:30 | só tem 500GB. Claro que não cabe, mas você não precisa pré-alocar esse espaço, pode só mentir |
| 39:35 | pro sistema virtualizado e só alocar o que ele realmente for usar e ir adicionando novos blocos |
| 39:41 | nesse disco virtual sob demanda. Mas o problema principal não é esse. O conceito original é mapear syscalls do Linux pra syscalls do kernel NT. Eles esbarraram no mesmo problema |
| 39:53 | que a equipe do Wine tem até hoje: toda vez que sai uma atualização pro Windows, alguma coisa |
| 39:58 | vai quebrar no Wine porque as syscalls e outras dependências mudaram. Então manter essa camada |
| 40:04 | de compatibilidade entre as duas kernels vai ser sempre instável. Toda vez que sai uma versão nova |
| 40:10 | da kernel do Linux, alguém na equipe do WSL vai precisar ajustar essa camada de tradução. Então |
| 40:16 | nunca vai ser possível ter um sistema totalmente estável porque essa é a natureza de wrappers e |
| 40:21 | adapters, eles são alvos móveis. Ficar fazendo isso desde 2016 demonstrou que |
| 40:27 | como prova de conceito, de fato tudo funciona, mas muitas syscalls de Linux não tem equivalente |
| 40:33 | em NT e davam trabalho de manter. E toda vez que a kernel atualizava tanto do lado Linux quanto |
| 40:39 | do lado NT, precisava ajustar a camada de adaptação. É uma bola de neve sem fim. Por |
| 40:44 | fim eles decidiram mudar a estratégia toda e recomeçar do zero. É uma pena, porque como eu disse, eu gostava muito dessa estratégia porque uma das vantagens era ter |
| 40:54 | os recursos do Windows como processos em execução, expostos numa camada Linux onde era possível usar |
| 41:01 | as ferramentas de Linux pra mexer em partes do Windows. Se eles conseguissem abstrair coisas |
| 41:06 | mais complicadas como o Registry em alguma forma que pudesse ser gerenciada pelo Bash, |
| 41:12 | ia começar a ficar mais útil ainda, mas aí já era pedir demais mesmo. Pra isso existem coisas |
| 41:17 | como o Powershell. Se a intenção é gerenciar os recursos do Windows pela linha de comando, |
| 41:23 | ainda é muito melhor, mais estável e mais completo usar o Powershell. Em vez de tentar fazer de tudo, melhor fazer menos mas fazer direito. Já que é |
| 41:33 | muito difícil emular a kernel do Linux como um adaptador em cima da kernel do NT e se |
| 41:38 | simplesmente rodássemos o kernel do Linux de verdade? Seria a estratégia do coLinux, |
| 41:44 | mas em vez de um hack, podemos usar o Hyper-V que nesta altura evoluiu bastante e é muito bom. |
| 41:50 | O problema com programas de virtualização, como expliquei antes é que você normalmente precisa reservar quantos cores e quanta RAM vai ficar travado pra máquina virtual. |
| 41:59 | Mas durante a evolução do Windows Server pra atender os requerimentos de serviços como o Azure, |
| 42:05 | eles conseguiram evoluir o Hyper-V pra criar máquinas virtuais mais leves e mais flexíveis. |
| 42:11 | Existe a opção de lightweight utility VMs onde ele consegue pedir mais recursos à medida que for |
| 42:18 | precisando. Daí não precisamos desperdiçar 4GB do sistema deixando reservado pra máquina virtual se |
| 42:24 | logo no boot ele só precisa de 500Mb, por exemplo. Além disso existe a opção de não exigir um cold |
| 42:30 | boot, ou seja, um boot do zero. Ele dá a opção de você conseguir carregar o equivalente a um dump |
| 42:36 | da RAM, como no processo de hibernate. Dessa forma você consegue boots quase instantâneos, |
| 42:42 | que levam segundos em vez de minutos. E como também expliquei no video de virtualização, existe a opção de paravirtualização. Numa virtualização completa o kernel dentro da |
| 42:52 | máquina virtual não sabe que está numa máquina virtual, é um Inception. Numa paravirtualização |
| 42:58 | você modifica o kernel de dentro pra ele estar ciente de estar num ambiente virtualizado e |
| 43:04 | conseguir um comportamento melhor cooperando com o sistema operacional do lado de fora. |
| 43:09 | Um último componente um pouco inusitado foi a inclusão de uma parte do antigo projeto Plan9, |
| 43:16 | no caso o protocolo 9P que era usado pra file system em rede. Pense assim, |
| 43:21 | como a partir do Windows eu poderia acessar o filesystem do Linux e vice versa se agora |
| 43:26 | o Linux vai rodar de dentro de uma máquina virtual? Existem várias opções como o próprio protocolo SMB e o serviço SAMBA ou mesmo SFTP que é FTP em cima de SSH. A própria Microsoft não se |
| 43:38 | manifestou do porque dessa escolha oficialmente, mas algumas teorias dizem que talvez seja porque |
| 43:43 | o protocolo 9P é mais simples e mais fácil de implementar do que os disponíveis hoje. |
| 43:48 | De curiosidade o Plan9 é outro projeto da antiga Bell Labs que inventou a linguagem C e o UNIX, |
| 43:55 | na realidade parte das mesmas equipes criaram o Plan9 que era um sistema operacional distribuído |
| 44:01 | em rede. Com o tempo o Plan9 caiu em desuso e a Bell Labs criou o projeto Inferno que tinha |
| 44:07 | como objetivo virar concorrente do então novo Java da Sun, e nas pesquisas de sistemas distribuídos |
| 44:13 | tanto a Sun quanto a Bell Labs chegaram à conclusão que precisariam de uma máquina |
| 44:18 | virtual pra lidar com tantas configurações de rede diferentes disponíveis na época. Vocês podem ver |
| 44:23 | que a história da virtualização vem de longa data, e só nesse episódio vocês viram que nos anos 70, |
| 44:29 | 80, 90 até os 2000 tinha alguma coisa de virtualização em cada solução da época. |
| 44:35 | Virtualização e containerização não são tecnologias novas, são décadas e |
| 44:41 | décadas de pesquisas e experimentação. De qualquer forma, somando os lightweight utility |
| 44:46 | VM do Hyper-V com a capacidade de boot rápido, mais uma kernel de Linux de verdade customizada |
| 44:53 | pela Microsoft, mais a implementação do protocolo 9P pra exposição do filesystem em rede, e agora |
| 44:59 | temos o Windows Subsystem for Linux versão 2 ou WSL 2. Ela nunca vai ter as mesmas possibilidades |
| 45:07 | de integração com o resto do Windows como o WSL 1 tinha, mas por outro lado ela oferece 100% de |
| 45:14 | compatibilidade binária com Linux, coisa que o WSL 1 nunca ia ter. E como agora o filesystem |
| 45:20 | se tornou virtualizado, ele parou de ter os problemas de performance por causa do Windows Defender também. Por outro lado o WSL2 não oferece ainda opções pra configurar o filesystem virtual, |
| 45:31 | se não me engano ele tem um limite máximo pra 256GB, o que é suficiente pra maioria dos cenários, mas seria bom ter futuramente a opção de expandir esse drive. |
| 45:40 | Do ponto de vista de performance, sem rodar nenhum benchmark nem nada, eu diria que é a |
| 45:45 | mesma performance que eu já sentia rodando num VMWare, porém reservando menos recursos |
| 45:51 | da máquina no geral. Usando todos os dias tudo vem funcionando exatamente igual funcionaria num Linux |
| 45:57 | em Virtualbox ou Vmware. É um linux virtualizado. E como bônus se de dentro do WSL2 você subir um |
| 46:04 | servidor, digamos um servidor de Rails que se liga na porta 3000, você pode abrir o Chrome |
| 46:10 | do Windows e acessar localhost:3000 e vai abrir normalmente, porque ele faz automaticamente o NAT |
| 46:16 | interno de mapeamento de portas. Isso é ao mesmo tempo bom e ruim, porque se você tiver serviços no |
| 46:22 | Linux com portas que conflitam com portas no lado do Windows, vai ter problemas que podem ser difíceis de diagnosticar. Do ponto de vista de ecossistema é um passo |
| 46:31 | gigantesco porque se você acompanhou pessoalmente a história que eu contei até agora, como foi o meu |
| 46:37 | caso, se no ano 2000 alguém me dissesse que um dia a Microsoft embutiria o binário da kernel do Linux |
| 46:44 | dentro do Windows, eu diria que a pessoa era louca e devia se tratar. Diferente de alguma coisa como |
| 46:50 | Cygwin, sendo suportado pela própria Microsoft, mais e mais pessoas podem depender dessa opção |
| 46:56 | como algo estável e que vai estar disponível mesmo em futuros upgrades do Windows. |
| 47:01 | A história foi longa, mas instalar o WSL 2 é super easy, barely an inconvenience... |
| 47:08 | Quando sair a versão oficial no próximo upgrade do Windows 10 você pode pular o primeiro passo, mas |
| 47:13 | se ainda for setembro de 2019, você vai precisar se cadastrar no programa Windows Insider. Ah sim, |
| 47:19 | só funciona no Windows 10 Pro, o Windows 10 Home não tem suporte a Hyper-V se não me engano. Uma |
| 47:25 | vez cadastrado, você vai precisar habilitar o Fast Ring que vai trazer os builds mais recentes |
| 47:31 | do Windows mas também tem o risco de vir binários instáveis. Habilitar o Fast Ring é concordar que |
| 47:37 | você está baixando versões alfa de muita coisa e instabilidades fazem parte do contrato. Eu venho |
| 47:43 | usando o Fast Ring faz meses e tirando uma ou duas vezes que tive telas azuis, no geral tudo |
| 47:49 | tem funcionado sem problemas graves. No caso até a data onde estou gravando este episódio está na build 18970. Com o Fast Ring ativado é só deixar o Windows Update baixar |
| 48:00 | as últimas versões. Vai demorar bastante pra baixar e instalar a última versão, |
| 48:05 | vamos esperar um pouco ... só mais um pouco .... só mais um pouco .... ah sim, |
| 48:11 | em uma das vezes que fui instalar ele reclamou que eu tinha o VMWare instalado, precisei baixar a versão mais nova pra ele parar de reclamar, mas cuidado com isso: com o Hyper-V ativado, não dá |
| 48:21 | pra usar Virtualbox nem VMWare até eles aderirem às APIs de virtualização da Microsoft. Enfim, |
| 48:27 | uma vez atualizado daí é restartar. Agora você precisa abrir um Powershell como Administrador e digitar o seguinte comando: `Enable-WindowsOptionalFeature |
| 48:34 | -Online -FeatureName VirtualMachinePlatform` Isso vai exigir um restart e pronto, agora você já tem WSL. Abra um command prompt ou powershell e garanta que está com o WSL 2 |
| 48:42 | como padrão executando o comando `wsl --set-default-version 2` E pra instalar o Ubuntu você pode ir na Windows Store, procurar por Ubuntu e instalar. É gratuito. |
| 48:52 | Daí você espera um pouco … configura seu usuário e senha e .... Instalado. Primeira coisa que eu |
| 48:58 | sempre faço quando instalo é rodar o apt update e upgrade pra atualizar todos os pacotes. Daqui |
| 49:03 | você pode seguir meu video de Ubuntu e praticamente tudo deve funcionar. Eu digo praticamente porque o WSL é feito primariamente pra aplicativos de linha de |
| 49:13 | comando como o próprio Bash, coisas como ssh, git e tudo mais. Mas sempre existe a opção de instalar |
| 49:19 | um cliente X no Windows e rotear o DISPLAY do X no Linux pra ser fora dele. Se você não sabia disso, |
| 49:26 | o X é outro capítulo conturbado na história do UNIX e Linux. Nós tivemos o XFree86, |
| 49:32 | depois o X.org e finalmente muitos estão migrando pro Wayland. Em termos simples, o X é feito pra aplicativos gráficos. A intenção original é que um servidor |
| 49:42 | UNIX com um servidor X poderia servir múltiplos terminais burros, incluindo terminais gráficos, |
| 49:47 | que seriam clientes de X. Pense em servidor web e navegador web, é basicamente a mesma coisa só que |
| 49:54 | em vez de trafegar um protocolo primitivo como o HTTP ele usa um protocolo próprio do X pra |
| 49:59 | enviar comandos como "desenhe um botão na tela" e quando o botão é clicado essa ação trafega pro |
| 50:05 | servidor X decidir o que fazer e devolver outro comando pra redesenhar alguma parte da tela. Isso até que funciona, o que o povo de desenvolvimento não gosta é da implementação, é |
| 50:15 | um código difícil de dar manutenção. E as coisas ficaram mais difíceis depois que a Apple mostrou o que era possível fazer com um sistema de composite e aceleração via hardware |
| 50:25 | como o Quartz e a interface Aqua. Como você faz pros clientes X terem os mesmos recursos? |
| 50:32 | Dificulta muito que o X era um monolito, que os drivers das principais GPUs como NVIDIA é |
| 50:38 | proprietário e distribuído só como binário, e as versões open source tem qualidades variadas, |
| 50:44 | e no final o que acaba acontecendo é que você raramente usa o X de forma distribuída e tanto |
| 50:49 | o cliente quanto o servidor ficam na mesma máquina desktop de qualquer jeito. Por causa disso o X tem dois modos de renderização acelerada, a direta onde o próprio servidor |
| 50:59 | X acessa a GPU e o indireto onde ele manda os comandos de OpenGL pro cliente rodar. |
| 51:04 | No caso do WSL, ele não tem acesso direto a algumas coisas incluindo o hardware de vídeo. |
| 51:10 | Portanto ele depende de um rasterizador via software. Você não tem como rodar o cliente de X dentro do WSL porém você pode rodar o cliente de X de Windows e rotear os comandos de X do WSL |
| 51:23 | via rede pra fora. E vai funcionar perfeitamente bem. Existem duas opções gratuitas e open source |
| 51:28 | que são o VcXSrv e o XMing e uma versão paga que eu pessoalmente acho melhor que é o X410, |
| 51:35 | que eu costumo usar, mas na prática tanto faz. Se eu não estou enganado todos devem suportar o modo |
| 51:41 | de aceleração indireta, basta configurar dentro do WSL uma variável de ambiente dizendo isso, |
| 51:47 | o libgl_always_indirect e adicionar num bashrc pra sempre ter a variável quando se logar. |
| 51:53 | ``` export LIBGL_ALWAYS_INDIRECT=1 ``` Pra rotear os comandos o WSL precisa do endereço IP do host Windows. No WSL 1 ficava tudo em localhost porque pra todos os |
| 52:02 | efeitos e propósitos o WSL 1 rodava lado a lado do Windows e não virtualizado. No WSL 2 como ele é |
| 52:09 | uma máquina virtual, do lado de dentro ele tem também uma rede virtual e o Windows do lado de |
| 52:14 | fora é mapeado pra um endereço local dentro, é um tipo de ponte de rede que traduz o roteamento |
| 52:20 | de pacotes do lado de dentro pro lado de fora. Se fosse localhost bastava fazer a variável Display |
| 52:26 | ser igual a dois pontos e zero. Porém toda vez que a máquina reinicia pode ser que esse endereço |
| 52:31 | virtual mude. Precisamos configurar uma variável de ambiente que aponte pra esse endereço e pra |
| 52:37 | isso podemos fazer o seguinte one-liner, adicionar no bashrc e agora configurar a variável display |
| 52:43 | pra usar o valor ``` export WSL_HOST=$(tail -1 /etc/resolv.conf \|\| cut -d ' ' -f2) export DISPLAY=$WSL_HOST:0 ``` Colocando essas variáveis de ambiente no arquivo .bashrc, toda vez que o bash iniciar ele vai ter |
| 52:50 | essas variáveis. E agora podemos instalar alguns programas gráficos que eles vão aparecer do lado |
| 52:55 | de fora, no Windows mesmo. Vamos instalar o gvim que eu gosto, o terminal Tilix que é o mesmo |
| 53:01 | que eu instalei no tutorial de Ubuntu e o pacote dbus-x11 que programas gnome precisam. |
| 53:07 | Agora, precisamos instalar o tal cliente X, que como eu disse antes tem opções gratuitas mas eu |
| 53:13 | pessoalmente gosto do X410 que eu já tinha comprado então vamos instalar pela Windows |
| 53:18 | Store. Quando terminar e ele carregar, não esquecer de habilitar pra poder receber |
| 53:23 | conexões da rede pública, se for a primeira vez o Windows Firewall vai apitar pra liberar acesso, |
| 53:28 | libere e pronto. De volta ao bash, como só editamos o script bashrc precisamos |
| 53:34 | ou deslogar e logar de novo ou só recarregar o bashrc com o comando source. Agora podemos |
| 53:40 | abrir o gvim e olha só, abriu fora da máquina virtual, como um programa normal de Windows. |
| 53:46 | Mesma coisa o Tilix e nele podemos configurar a aparência, escolhemos o tema Material … melhor |
| 53:52 | o Monokai Dark … pronto, e agora podemos configurar o tamanho das fontes. Mas pra mudar o tema geral, das bordas e tudo mais não vamos poder usar o gnome-tweaks. Como |
| 54:02 | não estamos carregando todos os serviços que o gnome precisa pra rodar, se gastar algum tempo em tentativa e erro uma hora o gnome tweaks deve funcionar, mas por agora podemos |
| 54:12 | simplesmente editar manualmente o arquivo de configurações em .config, gtk-3 settings.ini. |
| 54:19 | Dentro dele habilitamos o modo dark, depois declaramos o nome do tema que é o Flat Remix |
| 54:25 | GTK Blue Darker e finalmente o nome do pacote de ícones que é o Flat Remix Blue Dark. |
| 54:31 | Agora precisamos de fato baixar esses temas e ícones e aqui é a mesma coisa que já fizemos |
| 54:36 | no episódio de Ubuntu, vou seguir exatamente o mesmo tutorial de antes. E como é a mesma coisa, |
| 54:42 | vamos acelerar isso aqui. Pronto, agora podemos chamar o Tilix de novo boom, tá bem mais bonito não acham? O Gvim também ficou um pouco melhor mas |
| 54:52 | ele ainda está mais cru porque não carreguei nenhum dotfiles que configura ele como o Yadr que mostrei no episódio de Ubuntu. Até agora eu estava usando o programa Command |
| 55:02 | que vem com todo Windows. A Microsoft veio modernizando o antigo Command pra aceitar |
| 55:08 | comandos de VT100, ANSI e tudo mais e com isso ele hoje é capaz de renderizar corretamente, |
| 55:13 | vocês podem ver que as cores ANSI funcionam perfeitamente. Ele ainda tem cheiro de coisa velha mas comparado a como era até as primeiras edições do Windows 10, foi uma evolução considerável. Mas |
| 55:25 | terminais mais maduros como o Tilix que acabamos de instalar ou mesmo o terminal padrão de um MacOS ainda são melhores. Em vez de mexer demais no código velho do antigo |
| 55:34 | Command, eles resolveram codificar um novo e com isso existe o programa simplesmente chamado de |
| 55:40 | Terminal que você pode instalar via o Windows Store. Ele ainda está em desenvolvimento e por |
| 55:45 | isso se chama Preview, mas mesmo no estágio atual ele já é muito melhor que o Command, |
| 55:51 | inclusive ele é acelerado via DirectX então coisas como scrolls longos renderiza muito rápido. Vamos |
| 55:57 | abrir e veja como ele é mais moderno com suporte a tabs. A configuração ainda é toda em texto, |
| 56:02 | o que eu não acho ruim. Por exemplo, podemos mudar o tamanho das fontes de todos os perfis. |
| 56:08 | Vale a pena brincar nesse arquivo um pouco pra customizar como você quiser. Você pode usar esse novo Terminal pro WSL 2 até pra rodar o antigo CMD se precisar de scripts de |
| 56:19 | batch antigos ou também rodar Powershell em outra aba. Ele é totalmente configurável e customizável, |
| 56:25 | suporta abas e pode ser uma boa opção. Eu particularmente prefiro carregar o próprio |
| 56:30 | Tilix e usar um terminal de verdade que suporta split de tela. Tem gente que prefere usar o TMux |
| 56:36 | pra splits mas pro meu workflow um simples split do próprio terminal é suficiente. Se quiser ver |
| 56:41 | o Tmux em funcionamento, veja meu vídeo de Ubuntu onde eu mostro como instalar e usar. Mas só instalar o Ubuntu é muito fácil. Agora é uma boa hora de mostrar algo diferente. Hoje a |
| 56:52 | Microsoft suporta o Ubuntu, o Fedora e o OpenSuse além de uma distro paga feita especialmente pro |
| 56:59 | WSL 2 que é Pengwin, que se não me engano é uma derivação de Debian. Mas eles tem receitas no |
| 57:05 | GitHub de como você pode empacotar qualquer outra distro de Linux. Desde o WSL 1 havia uma versão |
| 57:12 | de Arch que você podia instalar e eu testei e vi que eles deram suporte pro WSL 2 também, então |
| 57:17 | porque não testar? Mas, aviso que essa demo é meio experimental, ele não tem suporte da Microsoft e |
| 57:23 | muitas coisas não funcionam perfeitamente ainda. Se você for experiente em Linux talvez consiga |
| 57:29 | achar os workarounds, mas se for iniciante, por agora é melhor ficar no Ubuntu mesmo. Vamos no Google, pesquise por ArchWSL e o primeiro link deve ser a página de GitHub do projeto. Lá |
| 57:41 | tem todas as instruções que você precisa. Baixe o zip, descompacte em algum lugar como no seu |
| 57:46 | diretório de usuário do Windows. Dentro vai ter um executável de Arch, dê duplo clique ou abra |
| 57:52 | o novo Terminal, navegue até o diretório, digite arch e execute. Esse instalador faz menos coisas |
| 57:59 | que o de Ubuntu, o que é esperado pra filosofia Arch de fazer você configurar tudo. Ele vai te |
| 58:04 | logar como root direto. A primeira coisa a fazer é colocar uma senha pro root. Agora vamos criar um |
| 58:09 | novo usuário não-root, configurar a senha, e abrir o visudo pra dar permissão de sudoer pra esse |
| 58:16 | novo usuário. Dessa forma você vai poder logar como esse usuário em vez de root e ter acesso a |
| 58:22 | sudo. … Feito isso podemos sair da sessão do Arch de volta ao Command do Windows e configurar o arch |
| 58:28 | pra carregar com esse novo usuário. Feito isso precisamos inicializar o pacman que é |
| 58:33 | o gerenciador de pacotes, isso só precisa ser feito uma vez. Uma vez inicializado, mesma coisa de antes, eu gosto de atualizar os pacotes todos e fazemos isso com o comando pacman |
| 58:44 | traço Syu. No Ubuntu começamos instalando pacotes como o build-essential pra ter o toolchain de |
| 58:51 | desenvolvimento. Com o pacman instalamos pacotes como o base, base-devel e vamos aproveitar pra |
| 58:57 | instalar também o gvim, tilix e git. Seguindo os mesmos passos, vamos exportar as |
| 59:03 | mesmas variáveis de ambiente pra rotear o X…. Pronto, podemos carregar o Tilix. Porém aqui já |
| 59:09 | vemos um problema dessa versão. Programas gnome precisam do dbus pra comunicação interprocessos, |
| 59:15 | incluindo gerenciar configurações. Mas veja as mensagens de aviso dizendo que não encontra o |
| 59:21 | dbus-launch. Um workaround pra isso é chamar o dbus-launch manualmente. De novo, eu não parei |
| 59:27 | pra investigar a fundo quais dependências estão faltando ou serviços que não estão carregando. Se você souber como corrigir isso, não deixe de mandar nos comentários abaixo. |
