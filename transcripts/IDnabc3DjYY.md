# Games em Máquina Virtual com GPU Passthrough | Entendendo QEMU, KVM, Libvirt

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=IDnabc3DjYY
- **Duração:** 1:08:18
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado), `[música]` e erros de reconhecimento de fala. A transcrição disponibilizada pelo YouTube cobre até 49:27; o trecho final do vídeo (demonstração) não possui legendas.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Video de hoje vai ser mais pra mim do que pra vocês. Quem me acompanha no Insta sabe o que eu ando mexendo e alguns |
| 0:07 | meses atrás viram que eu estava brincando com upgrade no meu PC, NAS e, principalmente, |
| 0:12 | PCI passthrough da GPU pra máquinas virtuais. Quero mostrar como ficou, como estou usando, |
| 0:18 | mais ou menos os principais conceitos envolvidos. Embora não seja um passo a passo, vou explicar coisas que normalmente não se vê numa instalação normal de Linux e detalhes |
| 0:27 | sobre como um PC funciona. Mais importante, vou explicar todos os componentes pra rodar máquinas |
| 0:32 | virtuais em Linux e como elas funcionam. Se queria aprender mais sobre virtualização, hoje é o dia. (...) |
| 0:43 | Eu já fiz dois videos falando do meu setup anterior então assistam depois. Mas agora estou |
| 0:49 | com um PC bem potente, com CPU AMD Ryzen 9 5950X de 16 núcleos ou cores e 32 threads, 2 pentes de |
| 0:57 | memória DDR4 de 4 Ghz funcionando com perfil XMP, ou seja, com overclock, da G.Skill, placa |
| 1:03 | mãe Aorus X570S. Não é a melhor placa mas dá conta do recado. Ela tem 2 slots M.2 pra NVME que é SSD |
| 1:09 | muito mais rápido, um Samsung 970 Evo Plus de 2TB onde tá instalado Windows 11 nativamente como dual boot e outro NVME primário Samsung também de 1 TB onde está meu Manjaro GNOME. |
| 1:19 | Além deles preenchi 3 slots SATA com SSDs normais Samsung modelos 860 e 870 de 1 TB que uso só pra |
| 1:28 | cache do DaVinci Resolve, outro de 4TB que era meu antigo drive pra jogos da Steam e que recentemente |
| 1:33 | encheu então comprei um de 8TB pra mover tudo pra lá. Vou fazer esse de 4TB ser meu novo cache |
| 1:41 | pro DaVinci por enquanto. Óbvio que não precisa de tudo isso só pra cache, mas não tenho outro uso pra ele por enquanto, então beleza. O Linux boota usando a GPU primária da AMD, |
| 1:50 | um modelo fraquinho que é o RX 6400. Essa placa não é muito melhor que uma antiga NVIDIA GTX |
| 1:56 | 1050 de 2016. Mas é mais do que suficiente pra coisas como tocar video 4K sem perder frames, |
| 2:02 | renderizar aplicativos de produtividade como terminal ou editor de texto. Só pra programar e navegar na Web é muito mais do que suficiente. Mas obviamente é imprestável |
| 2:11 | pra games mais pesados que um CS:Go. Pra renderização pesada de video quando edito |
| 2:16 | os episódio do canal com DaVinci Resolve, ou pra brincar de modelagem 3D com Blender ou pra jogos |
| 2:21 | pesados como God of War da vida, aí tenho uma GPU secundária que fica desligada no Linux. A NVIDIA |
| 2:28 | RTX 3090 com 24 Gigabytes só de memória de video. Esse sim é um monstro. |
| 2:34 | Recentemente saiu a RTX 4090 que tem quase o dobro da performance da minha, mas também |
| 2:40 | custa o dobro do preço, usa muito mais energia e ocupa quase o dobro do espaço dentro do gabinete, |
| 2:45 | e pra funcionar decentemente o certo seria trocar minha placa mãe pra uma que suporte memória DDR5 e |
| 2:52 | trocar minha CPU da série 5000 pra nova série 7000 que também acabou de sair pra não ter gargalo. Na |
| 2:58 | prática o custo-benefício ainda não compensa. Vou fazer esse upgrade só daqui mais uns 2 anos. Falando em resolução, eu uso setup de dois monitores, a principal é a Asus ROG TUF de 31", |
| 3:10 | resolução de 2160 por 1440 pixels, ou seja, 2K a 144 hz. O topo de linha pra gamer seria |
| 3:18 | um monitor de micro LEDs 4K de 300 hz HDR+, mas pro meu uso tá mais que bom. Eu não participo |
| 3:23 | de esports então mais que 1440p e 144hz eu nem ia perceber tanta diferença e só ia pesar mais |
| 3:29 | na GPU. Nessa configuração consigo jogar qualquer jogo pesado da Steam em Ultra High com Ray Tracing |
| 3:34 | e ainda ter mais de 100 frames por segundo. Meu monitor secundário é um Samsung de 29" 4K e |
| 3:40 | 60hz. Esse eu exagerei um pouco. É o monitor que uso na vertical pra deixar coisas como meu Discord, Gmail, gráficos da bolsa e coisas assim pra ficar dando uma olhada. Poderia ser |
| 3:50 | um monitor de 24" e não precisava ser 4K porque uso em 1440p pra ficar igual ao principal. Enfim, |
| 3:56 | o resto não é importante pro video de hoje mas só pra ficar completo, tenho um microfone BM 800 e |
| 4:02 | uma webcam Logitech Brio de 1080p de resolução. Não sou, nem quero ser podcaster nem streamer. |
| 4:09 | Pra calls de Zoom tá mais que bom. Pra áudio, em vez de usar o que vem na placa mãe liguei um DAC externo da Topping via USB. DAC é um conversor digital pra |
| 4:18 | analógico. Ele recebe o áudio digital via USB e converte em onda pra mandar pra um pre-amp, |
| 4:23 | que pega esse áudio analógico convertido com sinal baixo e amplifica pra nível de linha pra mandar pras caixas de som ou fone de ouvido. As caixas de som não nem nada de especial, |
| 4:32 | são 2 Edifier. Pra usar na mesa perto de mim é o suficiente. Já o fone que uso é um Sennhaiser HD |
| 4:39 | 650 que é um modelo de entrada pra quem quer um som de referência, não modificado. |
| 4:44 | Meu mouse é um Logitech MX Master 3 sem fio, o melhor mouse de produtividade que existe. Super |
| 4:50 | confortável e excelente pra trabalhar em edição de video por exemplo. Ele não é feito pra jogar, |
| 4:55 | embora nada impeça. Um mouse gamer tem metade do peso desse Logitech Mas como falei, |
| 5:00 | não participo de esports e também não jogo FPS. Não curto Valorant, Apex Legends, Overwatch nem |
| 5:06 | nada disso. Só jogo single player e com gamepad. E gamepad os meus preferidos são o de Xbox One X, |
| 5:12 | depois o modelo SN30 pro+ da 8BitDo que compartilho com meu notebook, e o de PS4 |
| 5:17 | pra emuladores como Dolphin ou CEMU pra jogos da Nintendo porque gamepad de PS4 tem acelerômetro |
| 5:24 | e giroscópio, coisa que do Xbox não tem. Todo mundo que acompanha o canal sabe que sou |
| 5:29 | um sommelier de teclados e meu favorito até hoje é o Moonlander da ZSA. Dá bastante trabalho pra |
| 5:35 | treinar e se acostumar, mas depois que aprendi realmente a usar um teclado split, separado no |
| 5:40 | meio, com layout ortolinear, não consigo mais voltar pra um teclado normal. Eu sofro um pouco quando preciso usar do notebook. Quem não sabe o que é isso, assista meu terceiro video |
| 5:49 | sobre teclados, que explico em detalhes. O objetivo hoje é eu conseguir instalar uma máquina virtual Windows em cima do meu Manjaro e passar a GPU da NVIDIA inteiramente pra ele. Meu |
| 5:59 | Manjaro continua funcionando normalmente via a GPU da AMD, e na máquina virtual a |
| 6:04 | RTX 3090 vai ficar exclusiva só pro Windows virtualizado. Muitos podem se perguntar "ué, |
| 6:10 | mas não é mais fácil só fazer um dual boot?" E sim, é mais fácil mesmo. Mas vejam esta tela |
| 6:16 | do programa Virt Manager que eu instalei. Tudo isso são máquinas virtuais. Eu tenho uma |
| 6:21 | instalação de Garuda que é outra versão de Arch Linux mais voltado pra gamers. Eu tenho um Ubuntu |
| 6:27 | que uso pra testes e eu tenho 4 instalações de Windows 11. Uma que está como dual boot, instalado |
| 6:32 | numa NVME e outras 3 que rodam num disco virtual em rede. Eis porque eu não queria só depender de |
| 6:38 | dual boot: queria poder instalar outros Windows pra tarefas ou testes diferentes em separado, sem |
| 6:44 | ter que reparticionar meu SSD toda hora e ficar reconfigurando dual boot. Do jeito que fiz, |
| 6:50 | posso instalar um novo OS virtualizado a qualquer momento, ou destruir também, sem afetar a estabilidade do meu sistema. Veja que tenho um MacOS também. Infelizmente é |
| 6:59 | lento porque Apple parou de dar suporte pra GPU da NVIDIA faz alguns anos. Só GPUs antigas da |
| 7:05 | NVIDIA funcionariam, como a GTX série 1000 de mais de 5 anos atrás, e só até o MacOS Mojave |
| 7:12 | de 2021. Simplesmente não existem drivers pra usar a RTX 3090 num Mac. Pra conseguir acelerar |
| 7:18 | esse MacOS virtualizado precisaria passar a GPU da AMD, mas como é minha principal, que o host Manjaro usa, ia ficar complicado então por enquanto não vai rolar Mac. |
| 7:28 | Falando em suporte de hardware e abrindo a página de PCI passthrough do ArchWiki, a primeira coisa |
| 7:33 | que ele vai explicar é que precisa checar se o meu hardware suporta o que precisa. A primeira coisa é mais óbvia, minha CPU precisa suportar instruções de virtualização o VT-x ou VT-d. Tem |
| 7:43 | que entrar na BIOS e checar se tá ativado. Muitas vezes vem desligado. Hoje em dia toda CPU suporta |
| 7:49 | sem problemas, mas CPUs de uns 5 anos ou mais pra trás, é bom checar. No Wiki também fala sobre |
| 7:54 | modelos de placa mãe. Mas de novo, só se preocupa com isso se seu hardware for muito velho. Os passos 1, 2 e 3 do Wiki podem ser automatizados por essa ferramenta `gpu-passthrough-manager`, |
| 8:03 | instala com `yay` ou `pacaur` ou seja lá qual gerenciador de AUR você usa. Eu gosto do `yay`. Ele vai fazer duas coisas importantes: configurar a linha de comando |
| 8:12 | que carrega a kernel no boot pra habilitar IOMMU e depois que rebootar, vai separar a |
| 8:18 | GPU da NVIDIA pra não carregar mais os drivers no boot, já que precisa estar desligado pra passar pra máquina virtual. Vamos entender. IOMMU, ou Input Output Memory Management Unit é |
| 8:29 | um recurso que ligamos na kernel e que a CPU por baixo precisa suportar. A grosso modo é assim, a CPU e dispositivos como teclado ou placa de video, normalmente se comunicam via endereços |
| 8:40 | de memória direta entre um e outro. O problema é que se a CPU de verdade já está falando com o dispositivo, não teria como outra CPU virtual compartilhar os mesmos dispositivos. |
| 8:48 | Em vez disso o controlador de IOMMU cria endereços virtuais que mapeiam pros reais e esses endereços |
| 8:56 | virtuais podem ser passados pra máquinas virtuais, dando acesso direto aos dispositivos sem ter que |
| 9:02 | passar pela CPU host pra intermediar essa comunicação. Isso é crucial pra máquina |
| 9:07 | virtual conseguir falar diretamente com a GPU ou com outros dispositivos, por exemplo se colocar |
| 9:13 | uma segunda placa de rede de verdade no PC, poderia passar inteira pra máquina virtual. O Wiki explica como ligar isso, mas depois pede pra criar um script com esse código |
| 9:21 | aqui e executar. O resultado vai ser algo parecido com isso aqui. Esses são os diversos grupos de |
| 9:27 | IOMMU que meu sistema organiza. O que me importa é este Grupo 30 que tem só dois dispositivos, a RTX |
| 9:34 | 3090 e um controlador de áudio também da NVIDIA. E o importante é que não tem mais nenhum outro dispositivo compartilhando o mesmo grupo. Se tivesse, na hora de passar a NVIDIA pra máquina |
| 9:44 | virtual precisaria passar o outro dispositivo nada a ver junto, e dependendo do que fosse, poderia ter problemas. O ideal é estar assim: o que eu quero passar, isolado num grupo separado. |
| 9:54 | Significa que passamos pelos pré-requisitos, meu hardware suporta o que quero fazer. Até esse ponto, se fizer uma instalação normal de Manjaro, o identificador de hardware acha tanto |
| 10:04 | minha AMD RX 6400 quanto a RTX 3090 e carrega os drivers dos dois. Mas pra poder passar pra máquina |
| 10:11 | virtual, preciso que no boot, o driver da NVIDIA não seja carregado. Pra isso vamos usar um truque: |
| 10:16 | carregar um driver dummy, de mentira, que vai se pendurar e bloquear a GPU. Pra isso usamos |
| 10:22 | um driver VFIO que é um módulo que vem na kernel do Linux. Aquela ferramenta que falei antes, o `gpu-passthrough-manager` vai fazer isso pra gente, só selecionar os dois dispositivos da |
| 10:32 | NVIDIA e deixar ele fazer o trabalho. Na Wiki tem o jeito manual também, mas vou pular. Agora chegou a hora de instalar e configurar o software de virtualização propriamente dito. |
| 10:41 | Precisamos dos pacotes `qemu-desktop`, `libvirt`, `edk2-ovmf` e o `virt-manager`. Pra rede precisa |
| 10:49 | do pacote `dnsmasq`. Quando instalar tudo, só habilitar o libvirt pro SystemD carregar no boot com `sudo systemctl enable libvirtd` e já dar start nele também. Pronto, |
| 10:59 | do ponto de vista de preparo e instalação já tá tudo pronto. Agora é a parte divertida, configurar |
| 11:04 | a máquina virtual propriamente dita. Uma máquina virtual vai se conectar com os mesmos |
| 11:09 | dispositivos que seu Linux Host, o que boota nativamente de verdade, no caso o meu Manjaro. |
| 11:15 | Coisas como os NVME posso deixar outra máquina usar, se e somente se, não estiverem montadas. |
| 11:21 | Lembra a diferença? Uma coisa é um dispositivo como `/dev/nvme1n1` outra coisa é o ponto de |
| 11:28 | montagem `/mnt/blabla` que aponta pra uma partição no device. Se ficou confuso é porque você pulou |
| 11:35 | meus videos de Linux onde explico isso. Se não sabe como Linux boota e como funciona por baixo, não vai entender nada deste video também. Enfim, o ponto é que é possível passar |
| 11:44 | dispositivos de armazenamento entre meu host e o guest contanto que só um deles tenha pontos |
| 11:49 | de montagem. Aliás, pra facilitar, vou dizer host sempre que me referir ao meu Manjaro principal, |
| 11:54 | e guest ou convidado é a máquina virtual. Continuando, dispositivos USB como teclado, |
| 12:00 | mouse, hubs e tudo mais suportam hot swap. Isso deve ser intuitivo, podemos desconectar |
| 12:06 | e reconectar que o OS reinicializa a quente, sem precisar rebootar. Quando ligamos um |
| 12:11 | dispositivo USB no guest, é como se estivéssemos tirando o cabo do host e ligando no guest. Placa de video só dá pra passar via grupo de IOMMU e se estiver descarregado, |
| 12:20 | ou seja, com o driver stub de VFIO bloqueando. O driver VFIO é como se fosse um plugue esperando |
| 12:27 | a tomada da máquina virtual ligar nele, saca? Só aí que a placa mãe vai ser ativada. Os monitores, |
| 12:33 | por sua vez, via cabo HDMI ou DisplayPort estão conectados fisicamente nas placas de video e não na placa mãe, então quem controla os monitores são as placas de video. |
| 12:43 | Cada monitor suporta ligar vários cabos de entrada neles. Normalmente só ligamos um, |
| 12:49 | mas já devem ter visto este menu que permite selecionar input sources diferentes, |
| 12:54 | as diferentes portas na parte de trás. É assim que dá pra compartilhar um monitor com mais de um computador e ficar alternando os sinais de entrada. Meu monitor secundário |
| 13:04 | vertical, o Samsung, tá ligado na placa da AMD. Meu monitor principal, o Asus, também tá ligado |
| 13:09 | no AMD, então no boot o Wayland vê os dois e configura setup de extensão do meu desktop. |
| 13:16 | Antes que alguém pergunte, pra ter papel de parede que enche os dois monitores desse jeito uso um programa chamado HydraPaper. Ele funciona via esse programa gráfico mas também |
| 13:25 | dá pra chamar via linha de comando, daí não é difícil fazer um script pra colocar no cron e |
| 13:30 | assim mudar o papel de parede de tanto em tanto tempo. Fica de exercício pra vocês. Voltando, esse monitor Asus também tem outro cabo HDMI ligado nele, que se conecta com a placa de |
| 13:41 | video da NVIDIA, que neste momento permanece desligado. Já já vamos acordar ele. Mas não é só com placa de video que preciso me preocupar. Esqueci de mencionar, mas minha placa |
| 13:50 | mãe X570S vem com uma placa de rede embutida de 2.5 Gigabits por segundo, que é excelente já que |
| 13:57 | a maioria dos PCs e notebooks no máximo vem com placa de 1 Gigabit. E lembrando que 1 Gigabit |
| 14:02 | é mais que suficiente pra maioria das pessoas porque a conexão de internet de provedores ainda é faixa de 100 megabits, ou seja, 1 Gigabit é 10 vezes mais banda do que precisa pra uma pessoa |
| 14:12 | assistindo YouTube. Mas pra editar video via rede é pouco. Eu explico sobre isso nos videos |
| 14:18 | da mini-série de redes vejam lá depois. Eu queria poder guardar os videos que gravo pro canal, que são em 4K formato DNxHR, que é pouco comprimido pra manter qualidade, |
| 14:28 | no NAS e apontar o DaVinci Resolve direto pra uma pasta de rede aberto nesse NAS. Assim não preciso |
| 14:34 | ficar copiando os arquivos pro meu PC e depois copiando de volta pro NAS. Pra isso a velocidade entre os dois precisa ser alta. Por isso resolvi comprar um switch e uma placa de video PCI Express |
| 14:44 | de 10 Gigabits, que é 1000 vezes mais rápido que seu plano de internet de 100 megabits. |
| 14:49 | Eu não vou passar essa placa diretamente pra máquina virtual porque uso ela no host também. Como quero compartilhar a mesma placa entre duas máquinas, preciso tipo criar uma placa |
| 14:59 | de rede virtual, como o dispositivo TAP que expliquei no episódio de VPN e uma rede entre |
| 15:06 | a placa virtual ou a placa real, aí tenho algumas opções. Vamos abrir o aplicativo Virt-Manager, |
| 15:11 | que é uma interface gráfica que facilita configurar as coisas. Essa interface é opcional porque tudo que vou mostrar graficamente pode ser feito via linha de comando usando o |
| 15:20 | comando virsh. Por exemplo, no meu terminal posso digitar `sudo virth net-list --all` e mostra as |
| 15:27 | duas redes virtuais que já tinha configurado na minha máquina: default e network. Voltando pro Virt-Manager, posso abrir no menu "Edit" e "Connection Detail" e olha só as mesmas |
| 15:38 | duas redes aparecendo. Clicando em "+" posso criar uma nova rede virtual, mas não preciso porque já |
| 15:43 | tenho essa daqui que chamei de "network", podia ser um nome mais criativo. Mas o importante é o |
| 15:48 | nome do dispositivo virtual, a placa de rede de mentira, que dei o nome de "virbr1" porque na rede |
| 15:54 | "default" já tinha "virbr0". Configurei pra ser uma rede usando NAT pra sair pela minha placa real |
| 16:00 | cujo nome é "enp4s0". E como sei esse nome? Lembram dos videos de rede? No terminal posso usar |
| 16:07 | o comando "ip" pra mexer na rede. Se fizer `ip link show` mostra todos os dispositivos |
| 16:12 | de rede. Lembram que falei que minha placa mãe já vinha com rede embutida de 2.5 Gigabits, esse é o |
| 16:18 | dispositivo "enp8s0" que aparece logo embaixo do loopback. Estou escondendo o MAC Address deles, |
| 16:25 | claro. Em seguida temos o "enp4s0" que falei que é a placa externa de 10 Gigabits. Em seguida temos |
| 16:31 | dispositivos virtuais, "virbr0" e "virbr1". No fim tem um "wl" alguma coisa que é o Wi-Fi |
| 16:37 | que não uso, mas também veio embutido. Do ponto de vista do sistema operacional, tanto "enp4s0" quanto esse "virbr0" são placas de rede. Posso criar quantos dispositivos |
| 16:48 | virtuais quiser. Posso criar um separado pra cada máquina virtual ou conectar várias máquinas na |
| 16:54 | mesma placa. E cada placa pode usar diversas estratégias pra se conectar na rede. Vamos entender essa opção "mode". Olha só, isolated é fácil, impede a placa virtual de se conectar na |
| 17:04 | rede e na internet. Só vai conseguir enxergar outras máquinas virtuais, mas como o nome diz, |
| 17:09 | ficam isoladas do resto do mundo. Todas as outras permitem acessar tanto a rede interna quanto a internet. Se escolher Bridge, vai se comportar como se fosse uma |
| 17:18 | nova máquina de verdade conectada na rede. Vai procurar e encontrar o DHCP do modem da Vivo, |
| 17:23 | igual meu PC de verdade faz no boot, pegar um IP e navegar normalmente. Se escolher NAT, |
| 17:28 | como eu fiz, ele pega um IP privado atrás do meu PC de verdade e usa NAT pra falar na rede e acessar a internet. Routed nunca precisei usar então não sei os |
| 17:38 | detalhes e Open acho que é se quisesse que a máquina virtual ficasse exposta diretamente na internet pública, que não é nosso caso. Então na prática ou escolho Bridge ou NAT. Tecnicamente, |
| 17:48 | Bridge deveria ser mais performático, já que não precisaria passar por um NAT intermediário. Mas não lembro se tive problemas ou se não senti nenhuma diferença, |
| 17:55 | mas vale testar entre os dois. Pronto. Rede tá ok. Agora podemos começar o processo de criar a máquina virtual. É com esse ícone de "mais" no topo. Escolho a |
| 18:05 | primeira opção pra procurar a ISO de instalação do Windows. Ele detecta corretamente. Caso fosse uma distro de Linux que não detectasse, precisaria escolher manualmente o mais próximo, |
| 18:14 | mas pra agora vamos pro próximo passo. Agora posso escolher quanto de RAM e quantas |
| 18:20 | threads da minha CPU quero dar pra máquina virtual. Não vou mexer aqui porque isso vou mudar mais pra frente, então vamos pro próximo passo. E agora é a parte pra criarmos um HD |
| 18:29 | virtual ou apontarmos pra um SSD de verdade na máquina. Vou só criar um HD virtual. Nos meus videos, como de WSL, mostrei como faz pra criar um HD virtual formato |
| 18:39 | de VMWare ou Hyper-V que é o formato VHD ou VHDX, literalmente Virtual HD. Mas o QEMU |
| 18:46 | gosta de usar outro formato, o QCOW2 que significa QEMU Copy-On-Write versão 2. |
| 18:52 | COW permite que esse HD virtual seja usado simultaneamente por duas ou mais máquinas |
| 18:58 | virtuais diferentes, cada uma vai continuar criando blocos novos tipo num snapshot diferente. |
| 19:03 | Isso também significa que esse HD virtual suporta snapshots, suporta voltar pra versões anterioes, |
| 19:09 | mesmo se dentro não estivermos usando BTRFS. O formato QCOW2 acho que é mais avançado |
| 19:14 | que um VHD. Além de snapshots também suporta compressão e encriptação. |
| 19:20 | Posso escolher deixar gravar no diretório padrão, mas prefiro criar num diretório que separei só pra isso no meu NAS. Então escolho "Manage" e nessa janela escolho um pool, que é um diretório e mando |
| 19:29 | criar um novo volume, dou um nome qualquer, formato qcow2 e uns 100 gigabytes. Tanto |
| 19:35 | faz o tamanho porque esse arquivo é dinâmico, na realidade só vai realmente gastar o que precisar, |
| 19:40 | então no começo não ocupa espaço nenhum. Ele não precisa já pré-reservar o espaço todo. E |
| 19:45 | agora no último passo mando deixar customizar mais antes de fazer o primeiro boot. |
| 19:51 | Esta é a tela mais detalhada que mostra tudo que vai ter nesta nova máquina virtual. Vamos um a um nos itens que importam. Logo no Overview tem uma mudança importante. Precisamos garantir |
| 20:01 | que estamos com o Chipset Q35 em vez do antigo legado i440FX e que o Firmware seja UEFI mas a |
| 20:09 | versão OVMF com secboot, que é secure boot. Fodeu, um monte de letrinhas né? Vou explicar. Chipset, |
| 20:16 | como o nome diz, é o conjunto de chips na placa mãe que controla memória, processador, I/O e |
| 20:22 | tudo mais. Queremos os chips mais novos. UEFI já expliquei nos videos de armazenamento. Muita gente ainda chama de BIOS, mas UEFI é a evolução da BIOS. Dentre outras coisas, |
| 20:33 | é quem dá suporte a HDs com partições GPT, que permite partições de tamanho superior a 2 |
| 20:38 | terabytes e um número enorme de partições. Toda UEFI moderna nem precisa de um bootloader como |
| 20:44 | Grub. Se a partição tiver uma pasta EFI, vai conseguir bootar direto. Na minha placa-mãe, |
| 20:49 | por exemplo, é só apertar F12 no boot que me dá um menu pra escolher de qual partição quero bootar, |
| 20:54 | o que facilita fazer dual boot. OVMF significa Open Virtual Machine |
| 20:59 | Firmware. É um firmware, o UEFI propriamente dito, ou seja o software que boota primeiro logo |
| 21:05 | que liga o computador e é responsável por checar e inicializar todos os dispositivos do sistema, |
| 21:11 | achar o bootloader da kernel do sistema operacional em alguma partição GPT e passar o controle pra continuar o boot. Numa placa mãe de verdade esse firmware |
| 21:20 | costuma ser mais complexo porque tem uma interface gráfica. Meu Aorus por exemplo, se apertar a tecla Delete no boot, abre essa tela gráfica fancy aqui. O OVMF tem telas em |
| 21:31 | modo texto bem mais simples e com bem menos opções, porque é pra máquinas virtuais. Escolhi a versão com Secure Boot porque Windows 11 passa a exigir a existência de um chip de |
| 21:41 | segurança TMP e o firmware precisa ter suporte pra conseguir falar com esse chip. Pronto, podemos |
| 21:47 | confirmar e agora precisamos adicionar uma versão virtual desse chip. Só adicionar novo hardware, |
| 21:53 | escolher TPM, que vai ser emulado, mas selecionar as opções avançadas pra ser modo TIS e versão 2.0 |
| 21:59 | que é o que o Windows 11 não vai reclamar. Um secure enclave como esse TPM, no mundo real, |
| 22:05 | é um chip separado da CPU que vai conter coisas como chaves privadas que jamais vai dar pra ler |
| 22:11 | diretamente, incluindo outras credenciais como certificados digitais. Também vai ter gravado a configuração da sua máquina que a firmware vai informar pra ele, assim nos próximos boots dá pra |
| 22:22 | detectar se alguém modificou o hardware, que é o que normalmente se reclama com Secure Boot. Muitos gamers odeiam Secure Boot e TPM não porque eles são ruins, mas porque software de Anti-cheat, |
| 22:34 | de detecção de trapaças que muitos jogos instalam justamente fazem modificações muito semelhantes ao que um vírus, malware ou rootkit faria na kernel do sistema. O problema |
| 22:44 | é a existência de anti-cheats mau feitos. Enfim, isso é assunto pra outro dia. O importante |
| 22:49 | é que temos como adicionar um TPM virtual pro Windows achar a aceitar. Mas já aproveito pra |
| 22:55 | avisar que o anti-cheat de alguns jogos, como o Easy usado no Elden Ring, conseguem detectar |
| 23:00 | que está rodando em máquina virtual e não permite entrar online, só dá pra jogar offline. Pra mim isso não é problema, mas pra alguns pode ser. Agora chegou a hora de configurar a CPU. Problema |
| 23:09 | que essa interface gráfica não permite modificar tudo que preciso. O que vou fazer é abrir a configuração de outra máquina que já tenho, copiar o XML do trecho de CPU e colar nessa nova máquina. |
| 23:19 | Olha só, por padrão tenho uma linha pra quantas vcpus, depois o OS que é o firmware que acabamos |
| 23:26 | de configurar, daí temos features da CPU e modo da CPU. Tudo isso precisamos mexer. Abrindo |
| 23:32 | outra máquina que já tenho, começo copiando essas configurações de vcpu e cputune. |
| 23:37 | VCPU é simples: quantas threads vou dar pra máquina virtual. Como tenho uma Ryzen 5950X, |
| 23:43 | posso dar bastante. Decidi dar metade, ou seja, 16 threads pra máquina virtual. O que é essa |
| 23:49 | configuração longa que colei aqui? Eu dei 16 threads, e se não colocar esse bloco de "cputune", |
| 23:55 | essas threads vão ser controladas pelo scheduler de threads do Linux Host por baixo. É ineficiente |
| 24:01 | porque no Windows ou outro OS guest do lado de dentro já tem um scheduler e por baixo vai |
| 24:06 | ter outro scheduler e no final as 16 threads vão ficar embaralhadas entre as 32 totais, |
| 24:12 | podendo mudar dependendo se o Host tiver alguma carga pra processar. Essa configuração depende do uso. No meu caso, se estou com um guest aberto, |
| 24:21 | normalmente não estou fazendo nada pesado no host. 16 threads pra cada dá e sobra na real. |
| 24:26 | Mas essa pinagem de vcpu pra thread real não é aleatório. De onde vem esses números? Pra |
| 24:32 | isso preciso saber a topologia de núcleos e caches deste processador em particular. |
| 24:37 | Vamos lá, quando falamos CPU, estamos falando deste quadradinho aqui. Seja da Intel ou da AMD, |
| 24:44 | é o processador central. Porém, quando o sistema operacional fala em "CPU" está se referindo a um único núcleo ou a uma única thread. Vocês já devem ter visto que a CPU |
| 24:53 | do seu PC ou notebook pode ter 4 núcleos e 8 threads. Isso porque a maioria das CPUs modernas |
| 24:59 | suporta um troço chamado HyperThreading, onde cada núcleo é compartilhado por até 2 |
| 25:05 | threads. As duas ao mesmo tempo não conseguem funcionar em capacidade máxima, claro. Só uma única thread consegue saturar um núcleo. Mas no dia a dia, raramente você está saturando |
| 25:15 | tudo, então 2 threads conseguem compartilhar os recursos de um núcleo e simular 2 processamentos |
| 25:21 | paralelos. Enfim, quando ver em Linux falar em CPU pense que é a thread. Meu Ryzen 9 tem 16 |
| 25:28 | núcleos e 32 threads ou 32 CPUs. Isso porque bem antigamente, de fato uma CPU era só um núcleo. |
| 25:35 | Só dos anos 2000 pra cá que começamos a explorar múltiplos núcleos no mesmo die, ou processador, |
| 25:40 | que é o quadradinho na minha mão. Aproveitando, num terminal todo mundo sabe que se digitar `ls` vai listar os arquivos no diretório, certo? Mas sabiam que existem vários |
| 25:50 | programas `ls` -alguma coisa? Faz o teste, abre um terminal, digita `ls` e dá "tab". Olha no meu, |
| 25:55 | vários comandos diferentes. Nos videos de Linux já mostrei o `lsblk` lembram? Que lista os dispositivos de bloco do sistema, no caso seus HDs ou SSDs. Olha só os meus. E |
| 26:06 | se você usa Snap pra instalar programas vai ter essa poluição de dispositivos de loop aqui, mas pode ignorar isso. Pra agora nos interessa `lscpu` com a opção |
| 26:16 | "-e". Ele lista todas as threads disponíveis no meu processador, o clock máximo e mínimo |
| 26:21 | que aguenta e o clock atual no final. Não sei se sabiam disso mas hoje em dia os clocks são |
| 26:27 | controlados dinamicamente. Eles aumentam ou diminuem dependendo da carga que mandarmos. Isso é importante pra economizar energia. Se estamos fazendo quase nada, o chip elege |
| 26:37 | deixar as threads em clock mais baixo. Alguém poderia pensar: "boa, quer dizer que quando eu mandar fazer coisas pesadas como renderizar video, vai subir todo mundo pra |
| 26:45 | esse máximo aqui então?" E na realidade não. Depende do governador do sistema operacional, |
| 26:50 | depende dos algoritmos e sensores de Precision Boost da AMD ou Turbo Boost da Intel. Eles tentam |
| 26:57 | ser mais inteligentes do que só subir tudo pro máximo ou desligar tudo pro mínimo. Se eu forçasse todos pra ficar em 5Ghz, não ia aguentar muito tempo, porque todos os núcleos iam |
| 27:07 | consumir mais energia, e esquentar muito mais. E todos atingindo temperaturas altas demais, tipo mais de 90 graus Celsius, o processador vai entrar em modo de proteção e fazer o que |
| 27:17 | se chama de throttling, que é diminuir a energia e diminuir o clock pra conseguir resfriar. Por isso que parece contra o bom senso, mas muitos fazem undervolting. Que é limitar a energia e |
| 27:28 | evitar de chegar em clocks tão altos. Mas qual a vantagem disso, não fica mais lento? Pensa assim, é melhor todas as threads funcionarem por mais tempo abaixo de 4Ghz do que ir pra 5Ghz, |
| 27:40 | esquentar demais, e daí a CPU forçar todo mundo pra baixo de 2Ghz até esfriar. Entenderam? |
| 27:45 | Devagar e sempre é melhor que pico rápido e cansa rápido. Em notebook que não tem espaço, |
| 27:51 | undervolting é a única solução. Em PC com espaço a solução é colocar um cooler melhor. |
| 27:57 | Enfim, clocks não importam pra hoje, mas se não conheciam é legal estudar as configurações de |
| 28:02 | Precision Boost ou Turbo Boost que tem na UEFI da sua placa mãe. Placas baratas não permitem |
| 28:08 | mexer muita coisa, mas as placas mais avançadas e mais caras costumam dar mais opções de tensão, |
| 28:13 | corrente, e tudo mais que afetam os clocks. Mas vamos voltar pro `lscpu`. Pra fazer a tal |
| 28:18 | pinagem de VCPU pra CPU real precisamos saber o número real das CPUs que é a primeira coluna, |
| 28:25 | de 0 até 31. Mas os núcleos ou cores de verdade é a 4a coluna. Veja como cada núcleo tem 2 threads |
| 28:32 | como expliquei agora pouco. Mas e aí, é só pegar 16 quaisquer, colocar lá naquele XML e já era? Não, pra saber baixamos o pacote hwloc. Execute `lstopo` no |
| 28:44 | terminal e vai aparecer uma janela gráfica parecida com essa. No lado direito mostra os dispositivos conectados em pistas ou lanes de PCI. São coisas como SSDs. Isso também não interessa, o |
| 28:54 | importante é bloco maior na esquerda. Entenda, pra uma CPU, uma thread, funcionar de forma eficiente, |
| 28:59 | ela precisa ter acesso aos dados que vai processar no momento em que for processar. Se toda instrução tiver que pausar e esperar procurar na RAM e trazer pra CPU, |
| 29:09 | tudo seria lento, a CPU ia desperdiçar clocks não fazendo nada além de esperar. Isso porque RAM é |
| 29:16 | super lenta comparado com um registrador, que é quase instantâneo. Mesmo minha CPU rodando na |
| 29:22 | média a 3.4Ghz e estar usando DDR4 de 4 Ghz, não é só o clock. O barramento é lento, tem |
| 29:28 | distância física da CPU até os pentes de memória, tudo isso afeta o desempenho. Inclusive é uma |
| 29:33 | das razões de notebooks modernos soldarem RAM na placa mãe: pra diminuir a distância física. |
| 29:39 | Pra evitar que uma CPU fique com fome de dados e pause, cada uma delas tem um pequeno cache L1, |
| 29:45 | nesse caso de 32 kilobytes e um cache L2 de meio megabyte. Parece pouco, mas é bastante coisa pra uma única CPU e elas ficam literalmente grudados a milimetro |
| 29:54 | de distância só. Se tudo correr bem, esses caches vão ter os dados que as CPUs precisam, na hora que precisam e nada pausa. L1 é a memória mais rápida e mais cara de todas, por isso tem |
| 30:05 | tão pouco. L2 é um pouco menos rápido, e L3 é mais lento que L2. Preste atenção nesse diagrama. |
| 30:11 | A parte importante é que diferente de L1 e L2 que são exclusivos por CPU, o cache L3 é compartilhado |
| 30:18 | com um grupo de CPUs, no caso temos dois blocos de L3 de 32 megabytes cada, compartilhado entre |
| 30:25 | 8 núcleos cada. Digamos que tem uma thread de C ou Java rodando no núcleo 0. Por alguma razão |
| 30:30 | o scheduler do Linux gostaria de usar o núcleo 0 pra outra coisa e resolve mover a thread que ainda |
| 30:37 | não acabou do núcleo 0 pro núcleo 3. Como ambas compartilham o mesmo cache L3, |
| 30:43 | se o estado dessa thread, quer dizer, imagine as variáveis dentro da thread, estiverem no L3, basta |
| 30:49 | parar a thread do núcleo 0 e reiniciar no núcleo 3 que vai continuar de onde parou sem problemas. |
| 30:54 | Mas digamos que o scheduler do Linux fosse burro e mandasse pro núcleo 15, o último. |
| 31:00 | Antes de conseguir iniciar a thread no núcleo 15, ele precisa primeiro copiar o bloco de |
| 31:05 | memória do 1o cache L3 pro segundo cache L3, senão a nova thread não sabe como continuar o |
| 31:11 | trabalho. Sacaram? Um scheduler de threads tem que ser inteligente pra gerenciar esse tipo de coisa. E essa é a dica pra podermos pinar, ou seja, reservar CPUs pra nossa máquina virtual: |
| 31:20 | queremos pegar todas as CPUs embaixo do mesmo cache L3. No meu caso, os núcleos de 0 a 7 ou |
| 31:27 | de 8 a 15. Vamos voltar pro terminal e ver a saída do comando `lscpu` de novo. Eu arbitrariamente escolho usar os núcleos de 8 a 15 e nessa listagem significa pegar as threads |
| 31:38 | de 8 a 15 e de 24 a 31. Agora vamos voltar pra configuração XML. Estão vendo aqui os atributos |
| 31:45 | "cpuset"? São exatamente as threads de 8 a 15 e de 24 a 31. Eu mapeei pras CPUs virtuais ou |
| 31:51 | VCPUs de 0 a 15. Essa configuração vai variar se eu quiser passar menos CPUs, |
| 31:56 | ou se o processador tiver menos núcleos e com outra topologia de caches L3, por isso precisa usar os comandos `lscpu` e `lstopo` pra decidir no seu sistema. Cada um vai ser diferente |
| 32:06 | dependendo do modelo de processador. Essa opção "emulatorpin" é pra dizer pro |
| 32:12 | controlador da máquina virtual onde rodar as tarefas que permitem a máquina virtual funcionar. Mas até aqui só dissemos pra máquina virtual, quais CPUs usar. Meu host Manjaro ainda |
| 32:22 | enxerga todas as 32 threads e pode querer usar as mesmas que mandei o guest usar. Como fazer |
| 32:28 | pro host só usar os núcleos do primeiro cache L3? De 0 a 7? Vamos de volta pra Wiki. |
| 32:35 | Tem várias formas diferentes, poderia permanentemente limitar meu Linux a só |
| 32:40 | usar os núcleos de 0 a 7, mas isso seria um desperdício quando não estiver usando máquina virtual. Em vez disso quero forçar o Manjaro a se limitar só quando iniciar a máquina virtual |
| 32:49 | e pra isso posso usar o SystemD. Lembra que SystemD faz bem mais que só gerenciar daemons |
| 32:55 | no boot? Aqui ele gerencia os cgroups do sistema. Chegou a hora de explicar mais alguns termos que vocês não conhecem. Antes de criarmos a máquina virtual falei que |
| 33:04 | precisava instalar os pacotes do virt-manager, que é a interface gráfica pra criar a máquina virtual, |
| 33:09 | mas também instalei qemu e libvirt sem explicar. Tentando ser curto é assim, o emulador propriamente dito é o QEMU que literalmente significa "Quick Emulator". Ele quem |
| 33:20 | vai simular a máquina virtual, rodar os programas virtualizados e passar instrução a instrução |
| 33:26 | pra máquina de verdade por baixo. O equivalente VirtualBox ou VMWare ou Hyper-V seria o QEMU. |
| 33:33 | Na realidade ele faz bem mais que isso. Uma das principais funções é fazer tradução binária dinâmica. Pra quem usa Mac é o equivalente ao Rosetta. E pra quem não usa Mac, |
| 33:43 | o que é Rosetta? 2 anos atrás a Apple saiu fora de usar processadores da Intel, que é padrão x86-64 e passou a usar chips M1 que eles mesmos desenvolveram, |
| 33:53 | derivado de ARM. É meio como pular de um chip que fala português pra outro que fala chinês. Funciona assim, digamos que eu tenha um programa compilado pra x86. Um trecho desse programa, |
| 34:03 | em assembly poderia ser como esse aqui na tela. Não sei assembly de x86 então pedi pro ChatGPT |
| 34:09 | gerar esse trecho pra mim, de bater o olho parece fazer sentido. Daí pedi pra escrever como seria a tradução que o QEMU faria pra ARM64 e ele me deu esse outro trecho. |
| 34:19 | Estão vendo como os mnemônicos são diferentes? Em Intel existe a instrução `mov` pra carregar valores, mas em Arm a instrução se chama `ldr`. Se assistiram meus videos da playlist de Como |
| 34:30 | Computadores Funcionam eu falo mais sobre como Assembly e instruções de baixo nível como esses funcionam, assistam lá depois. Naquele pacote `qemu-desktop` que instalamos |
| 34:39 | vem só dois emuladores: o `qemu-system-x86_64` e o `qemu-system-i386` que são os emuladores |
| 34:45 | de plataforma Intel de 64 bits e 32 bits. Mas existem outros emuladores pra diversas |
| 34:51 | plataformas como ARM. Pra isso tem que instalar o pacote `qemu-emulators-full` ou direto tudo com `qemu-full` e aí ganhamos emuladores como `qemu-system-aarch64` pra ARM, |
| 35:02 | mas olha a lista: tem os antigos MIPS, Alpha ou até Motorola 68000 mas tem coisa nova como Risc V. Quem tem interesse em programar baixo nível pra Risc V, pode criar máquina virtual |
| 35:13 | com esse emulador. Leiam também a página de Wiki específica de QEMU depois pra aprender tudo. |
| 35:18 | Traduzir de uma arquitetura pra outra é bem lento mas no caso, pra rodar Windows |
| 35:23 | de Intel em cima de um Linux compilado pra Intel, não tem tradução nenhuma envolvida. Só precisa pegar a instrução da máquina virtual e passar direto pra máquina real embaixo, é bem |
| 35:33 | menos trabalhoso e por isso a performance é quase inteira mantida. Uma CPU virtual funciona uns 15 a |
| 35:39 | 20% mais devagar por conta dessa intermediação do QEMU no meio. Mas sem configurar nada, |
| 35:45 | mesmo de Intel pra Intel, um Windows rodaria lento emulado, e o culpado não é o QEMU. |
| 35:51 | A culpa são dos dispositivos da máquina: memória, HD, rede, e tudo mais é virtualizado em software, |
| 35:58 | porque a máquina virtual não pode acessar o hardware diretamente, só a kernel do Linux rodando de verdade no metal é que pode. Por isso a AMD e Intel criaram as instruções VT-d, |
| 36:09 | pra permitir passar acesso aos dispositivos reais diretamente, sem precisar gambiarrar com software |
| 36:15 | no meio. Por isso lá no começo o Wiki manda checar se seu sistema suporta VT-d e VT-x. |
| 36:21 | Tendo essas instruções agora é tarefa da kernel do sistema operacional usar. No Windows isso |
| 36:27 | é responsabilidade do Hyper-V. No MacOS é o "Hypervisor.framework". Num BSD Unix o nome |
| 36:33 | é bizarro, se chama "bhyve", que significa "BSD Hypervisor". Um hypervisor dá acesso às |
| 36:40 | instruções VT-d e VT-x da Intel ou AMD-V da AMD, permitindo criar e gerenciar múltiplas máquinas |
| 36:46 | virtuais rodando em cima deles. No Linux, o módulo responsável por isso se chama KVM, |
| 36:51 | que significa "Kernel Virtual Machine". Eu detesto esse nome porque KVM também significa |
| 36:57 | Keyboard, Video and Mouse e é uma caixinha onde conectamos, teclado, video e mouse, |
| 37:03 | e podemos ligar em vários PCs diferentes, tipo numa lan house ou data center. Daí é só virar |
| 37:08 | uma chavinha pra escolher qual PC queremos controlar. O nome deve ter sido de propósito |
| 37:13 | porque o Kernel Virtual Machine ou KVM de Linux serve pra justamente gerenciar múltiplas máquinas |
| 37:20 | também, só que virtuais. Só o QEMU sozinho seria lento, pela falta de acesso ao hardware. Mas ele aceita usar aceleradores. E o KVM pode ser usado como |
| 37:30 | acelerador e por isso chamamos a solução de "QEMU/KVM". Entendido isso falta só mais um |
| 37:35 | componente, o tal do "libvirt" que é o daemon que habilitamos no SystemD. KVM não é o único |
| 37:41 | hypervisor que existe no Linux. Um pouco antes dele, existia outro chamado Xen, e tem alternativas comerciais, como o VMWare. Seria um saco ter que saber os comandos |
| 37:50 | específicos de cada um, e é pra isso que o libvirt serve: ele é o intermediário que fala com |
| 37:56 | hypervisors de Linux. Eu posso controlar qualquer um com o mesmo comando `virsh` que mencionei |
| 38:02 | antes. A interface gráfica "Virt Manager" que usei pra criar a máquina virtual de exemplo, por baixo, |
| 38:08 | provavelmente usa esse comando, e eu poderia ter criado a máquina direto do terminal com esse |
| 38:13 | comando também, só fazer `virsh create ...` O comando virsh é complexo, posso controlar |
| 38:18 | todos os aspectos de um ambiente virtual come ele. Criar redes virtuais, pools de storage, snapshots |
| 38:25 | e mais. Vale a pena estudar depois, mas pra hoje eu preciso de bem pouca coisa dele. Enfim, agora |
| 38:30 | vocês sabem o que é libvirt, KVM e QEMU. Antes dessa longa tangente eu tinha parado no |
| 38:36 | problema onde já configuramos a máquina virtual pra só falar com as threads de 16 a 31 e agora |
| 38:42 | precisamos obrigar o scheduler do Linux host a só falar com as threads de 0 a 15. Dessa |
| 38:48 | forma cada sistema tem seu grupo de núcleos isolados. Isso é importante porque senão do nada o guest pode começar a engasgar quando o host ficar roubando as threads do guest. |
| 38:58 | Como falei antes, o libvirt é responsável por falar com o KVM pra fazer coisas como |
| 39:04 | iniciar ou parar uma máquina virtual. Depois que minha máquina estiver configurada direitinho, é só fazer `virsh start` e o nome da máquina e pra desligar forçado, equivalente a apertar o botão de |
| 39:14 | força de um PC, é só executar `virsh destroy`. Felizmente o libvirt tem eventos e hooks, |
| 39:20 | ou ganchos, onde podemos pendurar scripts. A Wiki nos manda criar o script |
| 39:27 | `/etc/libvirt/hooks/qemu`. Toda vez que o QEMU iniciar ou parar, o libvirt vai chamar esse |
| 39:32 | script. Se receber o comando `started` usamos o systemd pra ajustar a propriedade AllowedCPU de |
| 39:39 | 3 cgroups pra permitir usar só as threads de 0 a 15. Dessa forma finalmente garantimos que de |
| 39:44 | 16 a 31 vai mesmo ser só pra máquina virtual. E quando vier o comando "release", ajustamos pra |
| 39:50 | voltar a permitir usar todos os núcleos. Agora é só reiniciar o serviço `libvirtd` e pronto. Isso |
| 39:55 | termina a longa configuração de pinar VCPUs. Vamos testar pra ver se funciona. Primeiro, |
| 40:01 | sem nenhuma máquina virtual rodando, vou executar o programa GeekBench, que todo canal no YouTube |
| 40:06 | que faz reviews de processador usa, e pular direto pros testes de multi-core. Olha o htop rodando em |
| 40:13 | outro terminal e sim, todas as minhas 31 threads estão sendo trabalhadas. Podemos cancelar e agora abrir uma máquina virtual qualquer que já tenho configurado. Fazendo |
| 40:22 | isso o libvirt vai atirar o evento de started pro hook e executar aqueles comandos de systemd. |
| 40:28 | Pronto, o guest tá carregado, voltamos pro terminal e executamos o GeekBench de novo. |
| 40:34 | Vou pular pros testes de multi-core como antes. Voltamos pro htop: só as threads de 0 a 15 estão |
| 40:40 | saturados. As threads de 16 a 31 estão sem fazer nada, reservados pro guest poder usar |
| 40:45 | sem ninguém atrapalhando. Sacaram? É assim que garantimos que se eu estiver jogando na máquina guest e o Host decidir processar alguma coisa, não vai sequestrar uma thread minha e |
| 40:55 | causar engasgos no meu jogo. Conseguimos controlar o processador com sucesso! Mas o que são aqueles system.slice, user.slice e init.scope? São control groups, |
| 41:06 | ou cgroups. Cgroups é um recurso de Linux pra organizar processos em agrupamentos, |
| 41:12 | daí podemos limitar acesso a recursos pro grupo todo. Nesse caso estamos limitando acesso à CPU |
| 41:18 | pra esses 3 grupos e a kernel vai enforçar isso. Aliás, pra quem não sabia, é combinando cgroups |
| 41:24 | com outro recurso da kernel, namespaces, que começa a formar as bases pra containers como |
| 41:30 | Docker. Mas isso fica pra outro episódio. Mais um detalhe, esse hook vai rodar toda vez |
| 41:35 | que qualquer máquina for iniciada ou parada pelo QEMU. No meu caso sempre pretendo criar máquinas |
| 41:42 | virtuais com exatamente os mesmos núcleos pinados, então pode rodar sempre. Mas se você quiser máquinas com mais ou menos núcleos, precisa de um hook diferente pra cada máquina. |
| 41:52 | E isso é simples. Em vez do script anterior de systemd em `/etc/libvirt/hooks/qemu` eu colocaria |
| 41:59 | este outro script mais complicadinho: Não vou explicar linha a linha, é um script de |
| 42:04 | shell. Se você entende de Linux é fácil. Toda vez que o QEMU iniciar uma máquina virtual, esse script vai rodar. Vai pegar o nome da máquina, digamos que seja |
| 42:13 | `win11-video` e vai procurar o esse script `/etc/libvirt/hooks/qemu.d/win11-video/qemu` |
| 42:21 | e lá podemos colocar aquele script anterior de systemd mas agora ajustando exatamente quais CPUs vou permitir pro host pra essa máquina virtual em particular, sacaram? |
| 42:31 | O perfil de boost da CPU é controlado por uma coisa chamada Governador da Kernel. Sabe nas configurações de energia de qualquer sistema operacional, especialmente em notebooks, |
| 42:40 | que você escolhe Balanceado, Modo de Economia ou Alta Performance? É isso. Normalmente o Linux se |
| 42:46 | configura em perfil Balanceado, mas eu gostaria de forçar pra perfil de performance antes de iniciar |
| 42:53 | meu Windows de games. Pra isso existe o comando `cpupower`. Só rodar `cpupower frequency-set -g |
| 42:59 | performance` e pronto. Estude sobre `cpupower` depois pra descobrir se sua CPU tá em modo |
| 43:04 | balanceado ou economia e você nem sabia. Voltando pra configuração XML, vou copiar e |
| 43:09 | colar vários blocos. Isso tudo tá explicado na Wiki mas não compensa ir um a um. Em resumo, o bloco de features declara quais funcionalidades essa máquina vai ter, como ACPI que é um padrão |
| 43:19 | pra controlar energia da máquina. Relevante aqui é esse trecho de KVM com estado escondido. Isso |
| 43:25 | é uma tentativa do KVM de tentar esconder do sistema virtualizado que ele está numa máquina virtual. Antigamente GPUs da NVIDIA davam erro se descobriam que estavam sendo virtualizados, mas |
| 43:35 | nos modelos mais novos isso não acontece. Talvez se tentar usar algo mais velho que uma GTX talvez |
| 43:41 | precise, e também desse outro atributo de vendor_id em cima. Nos blocos de baixo, importante é deixar CPU em modo "host-passthrough" e checar que a topologia |
| 43:51 | está de acordo com todo o trampo que fizemos no bloco de pinagem antes. Aqui tá certinho, 1 soquete, com 1 processador, 8 núcleos e 2 threads cada, totalizando as 16 threads que |
| 44:02 | pinamos. No meu caso que estou usando AMD Ryzen, precisa dessa feature "topoext", |
| 44:07 | senão não dá pra usar hyperthreading. Em Intel não precisa. E pronto, acho que isso resolve a |
| 44:12 | configuração da CPU. O Virt-manager podia já fazer tudo isso automaticamente pra gente, mas até lá precisa saber esses detalhes todos pra tirar o máximo do processador. |
| 44:20 | Por isso precisa ler a Wiki em detalhes. Continuando, o Virt-manager já adicionou alguns |
| 44:26 | dispositivos que podem ser estranhos como esse Display Spice e Video QXL. QXL significa |
| 44:32 | "Qemu eXtended Logical" e é uma placa de video virtual. Podemos escolher outros modelos e eu |
| 44:39 | preferi deixar em Virtio que tem essa opção de aceleração 3D. Não espere nenhuma mágica disso |
| 44:44 | ser capaz de rodar games, mas já é alguma coisa. Esse dispositivo é necessário em máquinas onde |
| 44:49 | não temos ou não queremos dedicar placa de video de verdade só pra ela como estou fazendo. Na real, fiz um teste bem besta. Bootei o Ubuntu virtualizado com Video QXL e testei |
| 45:00 | abrir o firefox e carregar um demo de WebGL. Daí eu desligo, mudo de QXL pra Virtio com aceleração |
| 45:06 | 3D e não faz nenhuma diferença, tenho os mesmos quadros por segundo. Das duas uma, ou o QXL também faz aceleração 3D ou o Virtio não tá acelerando nada, mas seja lá qual for o caso, |
| 45:18 | o resultado parece o mesmo então meio que tanto faz. Até porque o objetivo de usar esses dispositivos virtuais não é fazer nada pesado graficamente como animação 3D |
| 45:26 | ou jogos. Pra renderizar a interface gráfica de janelas, a velocidade é mais que suficiente. |
| 45:32 | SPICE é um protocolo pra acessar a interface gráfica remotamente, mais ou menos como um VNC |
| 45:38 | ou Remote Desktop de Windows ou mesmo passar X via SSH pra quem é de Linux, mas é mais performático. |
| 45:44 | Nunca vai ser rápido o suficiente pra games, mas pro dia a dia é suficiente. Então, Display |
| 45:50 | SPICE é o monitor virtual que vai mostrar o que sai da placa virtual com Virtio. E vai aparecer |
| 45:55 | aqui nessa aba com ícone de monitor. Deixa eu mostrar como é com outra máquina virtual que já tinha configurado que é um Ubuntu. Nesse Ubuntu não passei minha NVIDIA, então só tem a placa |
| 46:05 | virtual mesmo, já que uso pra testes e não pra jogar nem nada mais pesado. (liga máquina) No meu caso, salvo pra casos de sistemas de testes como esse Ubuntu, pretendo passar a placa de video |
| 46:15 | real da NVIDIA pra dentro do guest. Então depois que instalar o sistema operacional e os drivers, |
| 46:20 | vou tirar o Video Virtio e o Display SPICE. Mas um terceiro dispositivo que ainda tenho |
| 46:26 | um pouco de dúvidas é o Console PTY. Isso é um terminal virtual de texto que conecta num |
| 46:31 | pseudo-terminal PTY do host. É uma das formas do host se comunicar com o guest e vice-versa. |
| 46:37 | Antes podia arrancar isso fora, mas não sei se teve alguma atualização que sem o console eu não tava conseguindo bootar a máquina virtual direito, então só deixo lá agora. |
| 46:45 | Agora vem o dispositivo de som. Pra maioria dos casos pode deixar o que vem por padrão já. Ele |
| 46:51 | emula um dispositivo ICH9 que permite entrada e saída em estéreo. Se precisar usar microfone, |
| 46:57 | acho que essa é a melhor opção. Mas se tiver um home theater, no caso um receiver ligado no PC com configuração de surround ou 5.1, que significa duas caixas laterais frontais, |
| 47:08 | duas caixas traseiras surround, um central pra voz e um sub-woofer que é esse .1, |
| 47:13 | daí precisa mudar no XML pro modelo ser "usb". Áudio via USB desse dispositivo |
| 47:18 | suporta saída 5.1 mas não fornece entrada. Áudio em Linux é outro ninho de ratos chato mas |
| 47:25 | no geral, na maioria das distribuições Linux funciona assim: primeiro tem os drivers pro |
| 47:31 | hardware de áudio, seja o que vem embutido na sua placa mãe ou dispositivos externos. Esses drivers |
| 47:37 | são chamados de ALSA, que significa Advanced Linux Sound Architecture. Mas os aplicativos, |
| 47:43 | como um tocador de música ou video, não fala diretamente com esses drivers. Entre os aplicativos e os drivers existe um intermediário que roda em userland que |
| 47:53 | normalmente é o Pulseaudio. Tem também o Jack mas nunca vi o Jack em distros populares. O |
| 47:58 | Pulseaudio é quem permite múltiplos aplicativos acessarem saída de áudio, organiza e centraliza |
| 48:05 | o controle de múltiplos streams. Sabe quando abre a configuração de som num GNOME e ele deixa controlar o volume independente pra cada aplicativo? É o Pulseaudio. |
| 48:14 | Eu não acompanhei a evolução, mas parece que o Pulseaudio, sendo um sistema antigo e legado, |
| 48:19 | envelheceu mal pra lidar com o aumento no uso de multimídia de aplicativos modernos, especialmente necessidades profissionais, como editores de música que precisam trabalhar com |
| 48:28 | dezenas ou centenas de streams de áudio de uma só vez e exigem baixíssima latência. Latência em |
| 48:34 | áudio é crucial. Imagina um notebook de DJ no meio de um show enorme, e do nada latência dá um pico, |
| 48:41 | trava e quebra o som no meio do show por 1 segundo. É o tipo de coisa que jamais pode acontecer. É um dos pontos fortes do MacOS, por isso todo mundo usa Macbooks em shows. |
| 48:51 | Pra combater isso nasceu um novo projeto, o Pipewire. Algumas distros modernas, |
| 48:56 | como meu Manjaro, já começaram a substituir o Pulseaudio pelo Pipewire. Parece que Pipewire |
| 49:02 | também tem suporte melhor a áudio via Bluetooth, então quem tinha problemas com fones sem fio, deve ter uma experiência melhor agora. Outra vantagem do Pipewire é ter uma camada de |
| 49:12 | compatibilidade de API, daí aplicativos que esperam trabalhar com Pulseaudio conseguem se |
| 49:17 | comunicar com o Pipewire. De qualquer forma, na configuração do QEMU não precisamos mexer nada. No XML que ele nos deu já vem esse canal de áudio apontando pra pulseaudio. Eu estou usando |
| 49:27 | Pipewire no Manjaro e tá tudo funcionando então acho que funciona plug and play. |
