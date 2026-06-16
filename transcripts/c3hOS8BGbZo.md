# Tudo que Você Queria Saber Sobre Dispositivos de Armazenamento

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=c3hOS8BGbZo
- **Duração:** 41:13
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita No episódio anterior eu contei um pouco sobre meus servidores de arquivos, o Drobo e o Synology, |
| 0:07 | algumas noções sobre RAID, e desci um pouco no detalhe sobre fdisk, sistema de coordenadas |
| 0:12 | CHS e LBA. Hoje vou continuar essa saga falando sobre boot. Como um computador entende seus HDs. |
| 0:20 | No episódio anterior eu parei a instalação daquele RedHat de 1997 explicando sobre cilindros |
| 0:26 | e como do sistema de coordenadas de cilindro-cabeça-setor chegamos no LBA que é um endereçamento linear. |
| 0:32 | Acho que o mais importante era entender que num HD ou pendrive ou qualquer dispositivo de armazenamento a gente não lê e escreve dados bit a bit ou byte a byte e sim em blocos, |
| 0:44 | no caso em setores, que normalmente são blocos de 512 bytes. Mas beleza, particionamos o HD com `fdisk` e agora, como o computador boota minha máquina? |
| 0:56 | (...) No nível do sistema operacional você ainda tem as opções de escolha de como particionar |
| 1:06 | o disco. Falando rapidamente, antigamente e até em algumas máquinas não atualizadas de hoje, |
| 1:11 | o sistema mais usado era MBR ou Master Boot Record. É um setor especial no primeiro cilindro reservado como setor de boot. |
| 1:19 | Os primeiros 512 bytes. Quando o computador boota, precisa iniciar algum programa, uma primeira instrução. |
| 1:26 | Essa vai ser a BIOS, um firmware que hoje é atualizável. É um chip persistente que independe do seu sistema operacional. |
| 1:34 | A BIOS vai detectar o hardware, configurar sua máquina e deixar disponível pra uso. No final desse programa vai ter uma instrução de JUMP pra um endereço fixo no primeiro |
| 1:43 | HD que ele encontrar. No caso o endereço com segmento 0000 e offset 7C00. |
| 1:50 | Parêntese, se você assistiu o episódio da CPU montada em protoboard do Ben Eater que expliquei no Guia Mais hardware de Introdução à computação e um dos mais recentes que |
| 1:59 | foi explicando sobre os 640 kilobytes de RAM, você entendeu 100% do que acabei de falar. |
| 2:05 | Instrucões, jump, segmentos. Se não entendeu, recomendo assistir esses episódios depois. |
| 2:10 | Depois ele vai checar o cabeçalho da estrutura até achar 55 AA. Essa sequência identifica um MBR. |
| 2:17 | Daí vai encontrar uma estrutura, literalmente como uma struct de structs de C. |
| 2:22 | A estrutura do MBR permite registrar até no máximo 4 partições. Era o que cabia no espaço que foi definido e pra época provavelmente acharam que era |
| 2:32 | suficiente. E as configurações nessa struct tem tamanho fixo. Por isso que não dá pra plugar qualquer HD moderno num computador antigo e por isso |
| 2:40 | que no fdisk antigo você vê que ele só deixa cadastrar 4 partições. O máximo que dá pra ter é 2 elevado a 32 vezes o tamanho padrão do setor que são |
| 2:50 | quinhentos e doze bytes. Isso dá 2 terabytes. Então máquinas antigas com MBR não conseguem ter partições maiores. |
| 2:57 | Ah sim, falei 2 elevado a 32. Lembram do tal LBA que falei no episódio anterior? É uma lista de 32-bits. |
| 3:04 | Então só vai ter endereços pra 2 elevado a 32 setores. A distinção aqui é importante. |
| 3:09 | Em outros episódios eu falava de listas ou arrays onde cada endereço apontava pra um byte. |
| 3:15 | Mas a gente pode apontar qualquer coisa e um LBA é uma lista onde cada elemento aponta pra um setor. |
| 3:21 | E cada setor tem X bytes. Quanto maior o setor maior a partição que daria pra usar. |
| 3:26 | Acho que MBR não suportava setores de 4 kilobytes por exemplo. Então o máximo vai ser esse mesmo. |
| 3:32 | Tem jeito de gambiarrar isso um pouco com partições extendidas. Mas é gambiarra, nem vou explicar, mesmo porque hoje em dia ninguém mais usa MBR em |
| 3:40 | computadores e laptops, o normal é usar GPT ou GUID Partition Table que, como o nome diz, |
| 3:46 | vai usar GUIDs pra identificar as partições. Se ficou confuso, no MBR você identificava as partições com 4 números, de 1 a 4. |
| 3:55 | Mas no GPT você vai identificar a partição com um numerozão de 128-bits. Não só partição, mas tipo de partição também. |
| 4:02 | Se você assistiu meu episódio sobre criptografia, eu explico GUIDs lá. Mas em resumo, quando a gente quer dar um número que tem alta probabilidade de ser |
| 4:10 | único, usamos ou UUID ou GUID, no caso GUID é a versão da Microsoft do conceito de Universally |
| 4:17 | Unique Identifier, GUID é Globally Unique Identifier. Quase mesma coisa. Usar números inteiros sequenciais pequenos é garantido que alguém já vai estar usando. |
| 4:26 | É que nem quando você tenta cadastrar seu apelido numa plataforma qualquer. Certeza que já tem um joão cadastrado e você é obrigado a cadastrar tipo um joão99123 |
| 4:36 | e até isso já deve existir. Por isso muitas plataformas pegam seu apelido e concatenam um número aleatório no final, |
| 4:43 | como o Discord. Não usar números sequenciais é uma boa prática e outro dia eu falo sobre isso em |
| 4:48 | particular, mas o ponto é que suas partições são identificadas com um GUID. O GUID é um número binário de 128-bits. |
| 4:56 | E ele é representado em 5 blocos legíveis em hexadecimal. Por convenção a gente separa esses blocos com hífen pra ficar mais fácil se precisar |
| 5:04 | digitar manualmente. Vamos recapitular porque foi muita letrinha de uma vez só. Toda a explicação sobre cilindros e cabeças foi só pra relembrar como era antigamente, |
| 5:13 | mas hoje é LBA, uma lista linear de endereços de 32-bits em máquinas antigas com MBR e |
| 5:19 | 64-bits em máquinas modernas com GPT. Elas representam o mapeamento de setores no seu HD. |
| 5:25 | Com 32-bits e setores de 512 bytes daria pra no máximo endereçar 2 terabytes de HD. |
| 5:31 | Mas com 64-bits a gente tem capacidade pra ir até um HD de vários Zetabytes. Um zetabyte é tão grande que se você pegar todo o conteúdo da Internet, não ia chegar |
| 5:40 | perto disso. A gente quer conseguir endereçar tamanhos absurdos porque mesmo não tendo um único HD de mais do que terabytes, você sabe que existem recursos como stripe ou RAID-0. |
| 5:51 | Nada impede alguém de tentar ir ligando vários HDs gigantes num único volume. No fim da vida de MBR a gente tava limitado no tamanho do HD porque não tinha endereços |
| 6:00 | suficientes, mesmo problema dos 640 kilobytes de RAM, mas depois que migramos pra LBA e |
| 6:05 | GPT agora temos endereços sobrando e quantidade de partições sobrando. MBR ou GPT são estruturas de dados, como structs de C, que tem campos de tamanho fixo |
| 6:15 | pra armazenar a configuração do seu HD e das partições. O HD é dividido em partições e as partições são divididas em setores. |
| 6:23 | Daí os primeiros setores do primeiro cilindro são ocupados com essas estruturas. Na verdade você começa a partição propriamente dita mais pra frente na lista LBA. |
| 6:32 | Mas é tudo o mesmo linguição de bytes no HD, é tudo uma questão de quantos setores você quer perder pra guardar esses metadados. |
| 6:39 | No caso de GPT, ele precisa de uma partição ESP que é EFI system partition. |
| 6:45 | Aí fodeu, que GPT existe mais uma sigla junto que é EFI e UEFI. |
| 6:50 | Em resumo é o seguinte, o esquema BIOS e MBR ficou velho muito rápido na virada do século daí surgiu Extensible Firmware Interface ou EFI da Intel que define uma nova interface |
| 7:01 | pro sistema operacional conseguir falar com o firmware. Mas em 2005 o EFI foi atualizado pra virar UEFI. |
| 7:07 | No mundo open source, quando você boota um virt-manager da vida, pra rodar uma máquina virtual vai ver que o logo que aparece é da TianoCore que desenvolve uma implementação |
| 7:17 | de UEFI aberta chamada EDK2. Se você é das antigas, o que a gente chama de firmware hoje é o que antigamente era |
| 7:24 | mais conhecido como BIOS. Na prática é o primeiro código que qualquer computador executa. No caso de HD, o primeiro setor é o boot sector ocupado pela estrutura MBR. |
| 7:34 | E continua sendo assim por motivos de compatibilidade. Vai ter a estrutura de dados antiga, mas se você tentar rodar ferramentas velhas tipo |
| 7:41 | o fdisk de 1997, ele ainda vai encontrar o MBR lá, mas as partições de verdade não |
| 7:47 | estão mais lá, vão estar em setores mais pra frente. Acho que são uns 32 setores pelo menos, com 512 bytes cada, significa que os primeiros |
| 7:54 | 16 megabytes do seu HD você já não tem, porque é lá que ficam as informações pro |
| 8:00 | resto. A idéia do GPT é facilitar fabricantes e desenvolvedores de extender os metadados. |
| 8:05 | Digamos que o Windows precisasse identificar uma partição como sendo de Windows, que número ele usa? |
| 8:10 | Se escolher 1, e se agora a Apple também quiser usar 1 pro tipo dele? Daí que usar GUID é mais prático. |
| 8:15 | Eles podem escolher um GUID qualquer e a chance de alguém já ter escolhido o mesmo é muito baixa. |
| 8:21 | Em qualquer documentação sobre GPT você vai achar tabelas como essa que listam os GUIDs pra tipos de partição por exemplo. |
| 8:28 | E em sistemas UEFI tem essa partição especial pequena que se chama EFI system partition |
| 8:34 | ou ESP. Se você é de linux já deve ter visto um /boot fora da sua partição principal. |
| 8:40 | Pra ser universal ela costuma ser formatada em FAT, normalmente VFAT ou FAT32. |
| 8:46 | E quando o UEFI termina de bootar, ela aponta pra essa partição e carrega o que tiver lá, que no caso do Linux é onde vai ter o bootloader e a kernel mais drivers. |
| 8:55 | No caso de Mac ele força que essa partição seja em HFS+ que é o filesystem antigo deles, |
| 9:01 | e no caso do Windows em vez de ser /boot costuma ser /EFI/Microsoft/Boot, mas é a mesma coisa. |
| 9:08 | Essa partição especial costuma ficar escondida, mas sabendo que ela existe você pode montar ela num diretório usando comandos como `mount`. |
| 9:15 | Inclusive num Linux, quando você baixa e instala uma kernel mais nova, ao rodar comandos como `update-grub` da vida, ele vai atualizar a imagem vmlinuz que contém a kernel e drivers, |
| 9:26 | nessa partição. Quando a UEFI termina o que tinha pra fazer, no final do procedimento de POST que é sigla |
| 9:32 | pra Power-on self-test, daí vai lá nos primeiros setores do primeiro disco e acha a tabela |
| 9:37 | de partições. E dentro procura se tem uma partição com um tipo especial de GUID que começa com C12A |
| 9:44 | e termina em C93B. Em todo computador com sistema operacional instalado vai ter ela, que é o ESP ou partição |
| 9:52 | de boot. Encontrado essa partição então consegue montar e ler os arquivos dentro. |
| 9:57 | Se você tiver mais de um sistema operacional na mesma máquina, vai ter mais de uma configuração de bootloaders ali. |
| 10:03 | Encontrado o bootloader, também acha a imagem do sistema operacional. No caso do Linux acho que cria uma ramdisk ou initial ramdisk, onde vai carregar um filesystem |
| 10:12 | mínimo e continuar o processo de boot. É o mínimo do mínimo que precisa carregar pra continuar lendo as outras partições |
| 10:18 | que estão na tabela e montar com os filesystems adequados, como ext4 no caso de Linux ou NTFS |
| 10:24 | no caso do Windows. Agora ele consegue abrir a partição principal, montar a raíz e ler as configurações num |
| 10:30 | diretório como /etc ou o Registry no caso do Windows e segue subindo serviços, daemons, |
| 10:36 | e tudo mais pra completar o boot do sistema até chegar na tela de login. Aliás, se você tá prestando atenção deveria estar se perguntando, mas se no processo de |
| 10:45 | boot ele vai pegar seja lá que bootloader e seja lá que imagem estiver nessa partição aberta de FAT, não é perigoso? |
| 10:51 | Alguém malicioso ou algum virus não poderia modificar essa imagem e fazer ele carregar alguma coisa ruim? |
| 10:57 | Este não é um episódio sobre segurança então detalhes ficam pra outro dia. Mas sim, isso inclusive acontece de verdade e quando um virus ou programa carrega antes |
| 11:06 | da sua kernel, ela consegue se injetar e ter privilégios de kernel. É isso que faz um rootkit. |
| 11:12 | Se conseguir se injetar na kernel antes do boot, seu sistema operacional não vai conseguir detectar e ele teria a capacidade de enganar os antivirus que carregam depois, ou até |
| 11:21 | comprometer os executáveis dos antivirus. Quando um programa malicioso se carrega no espaço privilegiado da kernel, ele tem acesso |
| 11:28 | a basicamente tudo, é game over. Na prática você precisou ser bem imprudente com o que instala na própria máquina. |
| 11:34 | Nesse caso, rootkit ou não você tá inseguro de qualquer jeito já. Ou, você já deixa sua máquina desprotegida, qualquer um pode usar, e aí também é inseguro. |
| 11:42 | Se alguém tem acesso a sua partição de boot, sua máquina tá escancarada por definição. Se você faz trabalho importante não deveria deixar aberto. |
| 11:49 | Tem gente que não sabe disso, mas conexão Thunderbolt e USB tem defeitos e bugs, e um |
| 11:55 | pendrive preparado com software malicioso, só de plugar na sua máquina vai conseguir injetar malwares ou no mínimo causar um monte de problemas. |
| 12:03 | Por isso em corporações tem até políticas pra proibir espetar um pendrive no notebook. |
| 12:08 | Além disso UEFIs mais novas tem uma coisa chamada Secure Boot. Resumindo, na instalação do sistema operacional, ela permite registrar um certificado digital |
| 12:17 | numa área segura e assinar os binários que precisam carregar no boot como kernel e drivers. |
| 12:23 | Daí em todo boot a UEFI vai checar se o binário foi modificado ou não. |
| 12:28 | Se algum rootkit da vida ou alguém manualmente tentou trocar os binários então a checagem da UEFI vai falhar e ele não vai deixar bootar. |
| 12:36 | Procure saber sobre isso. Aliás, se você é gamer de jogos da Riot por exemplo, já teve que desligar o Secure |
| 12:42 | Boot da sua máquina porque o sistema de anti-cheats ou anti-trapaça deles funciona como um rootkit, |
| 12:49 | um driver que carrega junto com a kernel, alterando seu boot justamente pra você não ser capaz de desligar o anti-trapaça. |
| 12:56 | E não é só a Riot que faz isso. Foi uma controvérsia boa porque desligar o secure boot é desligar segurança da sua |
| 13:03 | máquina e isso é super intrusivo. Não sei se ainda funciona assim, mas isso é bem tosco, pra dizer o mínimo. |
| 13:09 | Parece complicado, mas ainda estamos só começando. Durante a primeira década dos anos 2000 a gente tava em transição da arquitetura de |
| 13:16 | 32-bits pra 64-bits, e ao mesmo tempo fazendo a transição da BIOS com MBR antigo pra GPT |
| 13:22 | e EFI e depois UEFI. Foi uma bela de uma zona pelo que me lembro, mas hoje em dia tá mais normalizado e estável. |
| 13:29 | Depois de ter passado todas essas transições, eu diria que a era de 64-bits finalmente parece |
| 13:35 | bem mais com o conceito de "plug and play" que vinham prometendo pra gente desde os anos 90. |
| 13:40 | Voltando pro HD, deixa eu tentar ilustrar o conceito. Os primeiros setores dessa fita é como se fossem o índice de um livro, dizendo de qual |
| 13:47 | página até qual página fica cada capítulo, que seria a partição. Faz de conta que meu livro tem um índice que diz que da página 1 até a página 50 |
| 13:55 | é o primeiro capítulo e da página 51 até a página 100 é o segundo capítulo. Pra apagar o segundo capítulo, basta apagar do índice que esse capítulo existe. |
| 14:04 | As páginas em si continuam no livro, mas ela só não é mais identificada. Eu não sei se da página 51 até o fim é uma partição só, ou se antes tinha dois |
| 14:12 | capítulos de 25 páginas cada por exemplo. Mas o que tinha escrito nas páginas continua lá. |
| 14:18 | Quando a gente apaga alguma coisa, não é que o HD foi nessas páginas e apagou tudo que tava escrito. |
| 14:23 | Ela só tirou do índice. Por isso que é possível reparticionar um disco sem perder dados. |
| 14:28 | Voltando no exemplo dos dois capítulos, digamos que eu quero aumentar a segunda partição. Pra isso eu poderia ir no índice e escrever que o primeiro capítulo é só da página |
| 14:37 | 1 até a 25 e da 26 até o 100 é o novo segundo capítulo. Se as páginas estavam todas em branco, não vai fazer nenhuma diferença. |
| 14:44 | Mas e se já tinha coisa do primeiro capítulo escrito lá pela página 40? A diferença de HD pra livros é que a gente não vai escrevendo necessariamente em ordem |
| 14:53 | sequencial, tipo preenche toda a página 1, depois vai pra página 2 e assim por diante. A gente cria arquivos, apaga arquivos, atualiza, então vai ficando fragmentado. |
| 15:03 | Pode ter metade da página 1 usada, página 2 em branco, página 3 cheia e assim vai. |
| 15:08 | Portanto toda página, em média, vai ter espaço sobrando se o HD não estiver totalmente cheio. |
| 15:13 | Então eu vejo o que tem na página 26 até a 50 e se o que tem escrito lá couber nas páginas anteriores, posso copiar tudo pra lá e agora sim, reescrever o índice pro |
| 15:23 | capítulo 1 ser da página 1 até a 25 e o capítulo 2 ser da página 26 até a 100. E é assim que se redimensiona partições. |
| 15:30 | Só não vai dar pra reparticionar se o primeiro capítulo já tava quase cheio, daí não tem como. |
| 15:36 | No MBR antigo, nosso livro só podia ter até 2 terabytes, e só podia ter 4 capítulos |
| 15:41 | ou partições. Com GPT, agora podemos ter milhares de partições e cada uma com praticamente quanto espaço |
| 15:47 | a gente quiser, porque o hardware ainda não chegou nos limites estabelecidos no GPT. |
| 15:52 | Lembra? zetabytes. Agora, o sistema operacional, sabendo onde começa e onde termina cada partição, quantos |
| 15:58 | setores tem, toma conta e se encarrega de formatar a partição. Vou falar de filesystems no próximo episódio. |
| 16:05 | Mas a história de partições não acaba aqui. Se você presta atenção a nomenclaturas já deve ter visto a palavra "partição" |
| 16:11 | mas também a palavra "volume". Como a gente já viu, uma partição é uma divisão lógica de um HD ou qualquer outro |
| 16:17 | dispositivo de armazenamento, como um pen drive. Um pen drive também pode ter mais de uma partição. |
| 16:23 | Já um volume é uma abstração do sistema operacional. No caso mais comum a gente pode ter uma partição de boot EFI, uma partição principal do sistema |
| 16:32 | operacional e todos os seus programas e dados, e talvez uma terceira partição pra swap no caso de um Linux. |
| 16:37 | Aliás, essa terceira partição hoje em dia é opcional porque é mais comum um swap ser só um arquivão na partição principal mesmo. |
| 16:45 | Então a gente tá acostumado a ter só uma partição que por sua vez é um único volume. Num Windows cada volume costuma ser uma letra, tipo C:, D:, e assim por diante. |
| 16:54 | Quando você espeta um pen drive no seu computador, vai aparecer um novo volume montado como um |
| 17:00 | E:. No caso do Linux volumes são montados como diretórios e podem aparecer como em /run/media/pendrive |
| 17:07 | por exemplo. Mas lembrem-se do caso que eu expliquei lá no começo do video, sobre RAID, e o caso |
| 17:12 | mais simples como o RAID-0 que é stripe. Você instala dois HDs de 1 terabyte no seu computador. |
| 17:18 | No caso normal, vai formatar um como volume C: e o outro como volume D:. Mas digamos que você não queira um segundo volume e na verdade quer que os dois HDs sejam |
| 17:26 | combinados. Dá pra fazer isso, você cria um volume lógico que é a combinação dos dois HDs. |
| 17:32 | Pro Windows, mais espeficificamente pro sistema de arquivos NTFS, vai ser um único volume |
| 17:38 | de 2 terabytes. O volume é uma forma de organizar partições no mesmo HD ou até em HDs diferentes como |
| 17:44 | um único armazém de dados. Lógico, você já entendeu que nunca deve fazer isso porque se der pau num dos HDs você |
| 17:51 | perde o volume inteiro. O segundo jeito que eu ainda não falei é RAID-1, que é como alguns sistemas caseiros |
| 17:56 | de backup com 2 HDs podem vir configurados. Mesmo exemplo, imagina os dois HDs de 1 tera cada. |
| 18:02 | Podemos configurar um pra ser backup quente do outro. Ambos ficam ativos mas pra você só aparece um volume C: de 1 terabyte. |
| 18:10 | Por baixo seja um hardware de RAID na sua placa mãe ou um módulo de software RAID que seu sistema operacional carrega no boot vai identificar os dois HDs mas organizar |
| 18:20 | como um único volume. Diferente do RAID-0 que você ia enxergar como um único volume com a soma do espaço |
| 18:26 | dos dois HDs, no RAID-1 você enxerga só como se um dos HDs estivesse ligado e o outro |
| 18:31 | não. Metade do espaço total. Parece desperdício, mas essa é a redundância mais simples. |
| 18:37 | Toda vez que você escreve um arquivo, por baixo vai escrever igual nos dois. Um vai ser uma cópia exata do outro e por isso RAID-1 é chamado de mirroring, ou espelhamento. |
| 18:47 | Digamos que daqui alguns meses um dos HDs resolve dar pau. O sistema de RAID vai identificar o problema e você não vai perder nada porque o outro |
| 18:54 | HD ainda tá intacto e com 100% dos seus dados. Basta trocar o HD defeituoso e o sistema de RAID vai reconstruir esse novo HD fazendo |
| 19:02 | uma cópia do outro. A gente pode combinar o espelhamento do RAID 1 com o stripping do RAID 0. |
| 19:08 | Se eu tiver agora quatro HDs de 1 tera cada, ou seja, total de 4 tera, eu posso organizar |
| 19:13 | como dois conjuntos de stripe: dois HDs de 1 tera viram um volume de 2 teras. E agora eu pego esses dois volumes maiores e mando um espelhar no outro. |
| 19:22 | Eu continuo perdendo metade do espaço pra backup, mas também tenho a vantagem de mais performance de ter HDs em stripe. |
| 19:30 | É tipo juntar o melhor dos dois esquemas: redundância e performance. Você vai ver esse arranjo sendo chamado de RAID 10, mas não é número 10 e sim 1 mais |
| 19:38 | 0 porque é Raid 1 combinado com Raid 0. Em qualquer dos casos estou perdendo bastante espaço pra backup. |
| 19:44 | E existe um jeito mais inteligente, e aí voltamos pro RAID-5 do meu Drobo e do Synology |
| 19:50 | e da maioria dos bons servidores de armazenamento. Aliás, no mundo de storages ou armazenamento, existem 3 siglas que você precisa saber: |
| 19:57 | DAS, NAS e SAN. Direct Attached Storage é o mais simples. Um pendrive ou HD externo é um DAS, que é storage anexado direto no seu computador, |
| 20:08 | seja via USB ou Thunderbolt hoje em dia. Aliás, USB é outro ninho de siglas que confundem. |
| 20:14 | Fazendo uma pequena tangente, tudo que é USB antigo de uns 10 anos pra trás é USB |
| 20:19 | 2.0 que tem velocidade máxima de uns 480 megabits por segundo ou 60 megabytes por segundo. |
| 20:26 | Quando você só tem HDs mecânicos, um USB 2.0 tá mais que bom. Mas desde 2008 existe USB 3.0 que opera na faixa de 400 megaBytes por segundo, bem mais |
| 20:36 | que o melhor HD mecânico. E isso é necessário porque nesse ponto a gente já tava começando a adotar mais SSDs. |
| 20:43 | Acho que todo mundo pelo menos tem idéia do que é um Solid State Drive. SSD é uma placa com chips de NAND Flash. |
| 20:50 | Modelos mais sofisticados tem chips de RAM também pra operar com cache e melhorar os piores casos. |
| 20:55 | Como eles foram feitos pra conectar na interface Serial ATA ou SATA 3, que tem velocidade teórica |
| 21:01 | máxima de 750 megabytes por segundo, não espere um SSD comum ser muito melhor que isso. |
| 21:07 | Na prática um bom SSD vai operar na faixa de 500 megabytes por segundo, que já é pelo menos 10 vezes melhor que a velocidade média de um HD mecânico. |
| 21:16 | Se for lidar com milhares de arquivos pequenos então, o HD mecânico pode cair pra velocidades ridículas de 3 ou 2 megabytes por segundo. |
| 21:24 | Num SSD o tempo de procura é muito mais rápido porque é que nem um chip de memória, não tem que lidar com um motor e ficar reposicionando cabeças em cima de discos. |
| 21:33 | Se a gente judiar do SSD a velocidade dele pode cair pela metade, mas mesmo assim ainda estamos falando da faixa de 200 megabytes por segundo. |
| 21:41 | Notebooks não tão velhos já devem pelo menos ter um SSD numa caixinha de 2.5 polegadas igual um HD mecânico de notebook mais antigo. |
| 21:48 | Tanto que é fácil trocar um pelo outro e você vai ganhar 10 vezes mais performance. Nenhum upgrade num notebook velho vale mais a pena do que colocar um SSD. |
| 21:57 | De qualquer forma, um USB 2.0 agora é porcaria, daí pulamos pra série 3. |
| 22:03 | Toda vez que você vê um conector USB que é azul é porque é da série 3. E eu falo série porque desde 2008 ele virou 3.1 e 3.2. |
| 22:11 | Na prática quando se fala USB 3, quer dizer pelo menos 3.2 Gen 1. E são quatro tipos, a Gen 1 que é de 5 gigabits por segundo, gen 2 é 10 gigabits, gen 1 x |
| 22:22 | 2 é 10 gigabits, gen 2 x 2 é 20 gigabits. A nomenclatura de USB é uma droga assim mesmo. |
| 22:28 | 5 gigabits que é o USB 3.2 gen 1, é 5 dividido por 8 que dá na faixa máxima de 600 megabytes |
| 22:35 | por segundo. Que é próximo da velocidade máxima de um SSD SATA-3 de qualidade. |
| 22:40 | E 20 gigabits do USB 3.2 gen 2 por 2 é 2.5 gigabytes por segundo. |
| 22:47 | E pra que tudo isso? Porque o mundo de HDs não é só mecânico e SSD. Hoje em dia o melhor são os NVME. |
| 22:53 | NVME é Non-volatile Memory Express. Assim como SSDs eles continuam usando chips NAND flash, mas em vez de ser limitado pelo |
| 23:02 | barramento SATA-3, o NVME usa lanes de PCI Express. Pensa assim, a série ATA e SATA de interfaces foi pensada pra HDs mecânicos. |
| 23:11 | Então os SSDs mais comuns que usam SATA-3 tem uma série de obstáculos de tecnologia legada. |
| 23:17 | PCI Express é o mesmo barramento onde você liga coisas como sua placa gráfica. Trocando SATA-3 por PCIe, a gente ganha menos overhead e menos obstáculos. |
| 23:27 | Se um bom HD mecânico faz na faixa de 50 megabytes por segundo, se um bom SSD SATA-3 |
| 23:33 | faz na faixa de 500 a 600 megabytes por segundo. Um bom NVME que usa PCIe e se conecta em slots que chamamos de M.2, faz na faixa de 2 a 3 |
| 23:44 | gigabytes por segundo que, por acaso, é a faixa de velocidade do USB 3.2 Gen 2 por 2 |
| 23:49 | que eu falei antes. O que todo mundo fica confuso é não saber que USB 3 é um protocolo e que tem várias |
| 23:55 | gerações que variam bastante de velocidade. Aí tem a gente confunde o protocolo USB 3 com o conector USB Type C. |
| 24:03 | Isso é outro problemão porque agora estamos falando de conector e cabos. O conector mais comum sempre foi o USB type A que é aquele retângulo maior. |
| 24:13 | Tem o Type-B que é menor e mais quadrado que liga em impressora e que existe pra você não inverter os lados do cabo. |
| 24:19 | Cabo USB transmite energia só pra um lado. Normalmente do Type-A sai energia e no Type-B recebe. |
| 24:26 | Se fosse tudo Type A você podia acabar invertendo o cabo e queimar alguma coisa. Enfim, Type C é novo conector que saiu uns 3 ou 4 anos atrás pra justamente arrumar |
| 24:35 | um pouco essa zona. Todo mundo só pensa que com o Type-C não tem jeito certo pra encaixar. Mas não só isso, você pode ter cabo com as duas pontas sendo Type-C, porque ele é |
| 24:44 | multi-direcional pra energia e o protocolo vai garantir que você não vai queimar nada se inverter o cabo. |
| 24:50 | O cabo Type-C, junto com o protocolo 3.2 Gen 2 x 2 tem capacidade máxima de 20 Gigabits |
| 24:56 | por segundo, que são os mais de 2 gigabytes por segundo de velocidade. Mas tem acima disso. |
| 25:02 | Computadores Intel e Mac, ou seja, menos a AMD, tem Thunderbolt 3, com velocidade máxima |
| 25:07 | de 40 gigabits por segundo ou 5 gigaBytes por segundo. E aí você pode pensar, mas ué, o NVME mais rápido é na faixa de 2 a 3 gigabytes, pra |
| 25:16 | que precisa do dobro? Porque Thunderbolt não é feito só pra dispositivos de armazenamento, mas pra tudo, incluindo |
| 25:22 | monitores. Um cabo HDMI 2.0 que é o mais comum e que você deve ter na sua TV, sozinho, tem banda |
| 25:28 | de 18 gigabits, perto do máximo de uma USB Type C. Você consegue transmitir no máximo 4K a 60 quadros por segundo. |
| 25:36 | Sem entrar muito no assunto de video, mas só pra complementar, pra jogar Playstation 5 ou Xbox Series X em 4K a 120 hertz em HDR, precisa de cabo HDMI 2.1 que tem banda de |
| 25:48 | 48 gigabits por segundo. Então, num USB 3.2 Gen 2 x 2 não dá pra ligar mais de um monitor 4K e ainda ter boa |
| 25:55 | velocidade pra copiar arquivos pra um SSD externo. Thunderbolt serve pra isso. E isso porque estamos pra receber já já USB 4 e Thunderbolt 4. |
| 26:04 | Só mencionei porque tanto USB 3.2 quanto Thunderbolt usam cabos com o mesmo conector |
| 26:10 | Type-C. Por isso é uma zona. Quando a entrada Type-C suporta Thunderbolt, costuma ter um ícone de raio do lado. |
| 26:16 | Mundo Mac tá mais acostumado com tudo Thunderbolt, no mundo PC a gente tá um pouco mais atrasado |
| 26:21 | na adoção. Voltando a falar de SSDs e NVMEs, laptops e placas mãe modernas já vem com pelo menos |
| 26:28 | um slot M.2 que dá pra colocar um NVME. E se não tiver, no mínimo você deveria jogar fora o HD mecânico e colocar um SSD |
| 26:35 | SATA-3. Qualquer coisa vai ser no mínimo 10 vezes melhor que um HD mecânico. No caso de NVME vai ser quase 100 vezes melhor. |
| 26:42 | Agora, SSDs e NVMEs não são todos iguais. NAND Flash tem em diversas variedades. Você tem chips que suportam 1 bit de dados que é single-level cell ou SLC. |
| 26:52 | Você pode ter um chip que suporta 2 bits, que é multi-level cell ou MLC. Entendeu? |
| 26:57 | O próximo tipo suporta 3 bits e se chama triple-level cell ou TLC e o último suporta 4 bits ou quad-level cell ou QLC. |
| 27:05 | Então SLC, MLC, TLC e QLC. Quanto mais bits melhor? Na realidade não, o melhor é o single level cell, SLC. |
| 27:14 | Quanto mais bits você entuchar numa célula, menos espaço ocupa. Então tem drives com maior capacidade no mesmo espaço. |
| 27:21 | Porém, quanto mais bits ele tem, mais lento ele fica e, pior, menos tempo ele dura. |
| 27:26 | Chips NAND tem capacidade máxima de escrita. Todo SSD tem uma quantidade máxima de vezes que dá pra usar antes das células pifarem. |
| 27:34 | Chips SLC, de 1 bit por célula, vão durar na faixa de 50 a 100 mil ciclos de program |
| 27:41 | e erase ou PE que é a unidade que se usa. Um chip QLC vai suportar 100 vezes menos, talvez uns 1000 ciclos de PE. |
| 27:48 | Então, no mesmo preço, ou você escolhe um SSD de menor capacidade mas que vai durar |
| 27:53 | muito tempo ou um de maior capacidade que vai durar menos tempo. Mais um trade-off. Nenhum SSD vai durar pra sempre. |
| 28:00 | Apesar de não ter peças móveis ele também deteriora com o uso. A vantagem é que não vai estragar antes do tempo porque você derrubou e estragou |
| 28:07 | o motor ou riscou o disco. E justamente porque a gente sabe que tanto HDs, quanto SSDs ou NVMEs uma hora vão todos |
| 28:15 | morrer, que você precisa de tempos em tempos garantir que tem backup. A tangente toda começou porque eu comecei falando de DAS. |
| 28:22 | Um HD externo mecânico ligado via USB 2 é um DAS porque tá anexado direto no seu PC. |
| 28:28 | Se usar um SSD externo, provavelmente vai ser via USB 3. Se usar um NVME externo vai ter conexão Thunderbolt. |
| 28:35 | E mesmo soluções de RAID com múltiplos drives também pode ser de SSDs, e se for você pode conectar via Thunderbolt também. |
| 28:43 | Mas não é sempre prático ter uma caixona grande com múltiplos drives na sua mesa. Às vezes você pode preferir colocar esse servidor em algum lugar mais escondido. |
| 28:51 | Dentro do seu closet, no porão ou algo assim. E aí tem uma desvantagem de cabos como USB ou Thunderbolt. |
| 28:58 | Eles não foram feitos pra serem longos assim. Mas existem cabos que foram feitos pra ser bem longos, são cabos Ethernet de rede. |
| 29:05 | E indo direto ao assunto, adivinhem, só porque um cabo é azul ou amarelo, e tem o mesmo conector RJ-45 de rede, não quer dizer que são iguais. |
| 29:13 | Mesma coisa que eu falei dos diferentes tipos de USB 3.2. Cabos ethernet são divididos em categorias. |
| 29:20 | Hoje não é episódio sobre redes, mas deixa eu só explicar os cabos. Existem categorias como cat5E, cat6, cat6A, cat7, cat8. |
| 29:28 | De cat5 a cat6 é velocidade máxima de 1000 megabits por segundo, que é uns 125 megabytes. |
| 29:34 | Isso é o dobro de USB 2.0 mas é 5 vezes mais lento que USB 3.2 Gen 1. |
| 29:41 | Cat6A e Cat7 é categoria dos 10 gigabits por segundo. Agora igualamos com USB 3 Gen 1. |
| 29:47 | Se o comprimento for menos de 50 metros, ainda pode subir pra 100 gigabits e aí já ficou melhor que Thunderbolt. |
| 29:53 | Um cabo cat8 já entra em território de velocidade de fibra ótica. Além de velocidade varia a construção do cabo, resistência, blindagem. |
| 30:01 | Acho que Cat 6 ou 7 são mais comuns, eu nunca vi um Cat8, vai ser mais em data center. |
| 30:07 | Quem lembra de física elétrica básica do colégio lembra que num fio que passa eletricidade |
| 30:12 | gera um campo magnético ao seu redor, por todo o comprimento. Se colocar vários fios em paralelo um do lado do outro, eles vão dar interferência |
| 30:20 | entre eles. Um cabo Ethernet é um conjunto de vários cabos mais finos dentro, organizados em twisted |
| 30:26 | pair, ou par trançado. Se você já clipou um cabo de rede já deve ter visto isso. |
| 30:32 | Normalmente esses cabos conseguem atingir distâncias de até 100 metros e se precisar mais longo existem extensores pra isso. |
| 30:38 | Mas o ponto é que você pode tranquilamente puxar cabos de dezenas de metro pela sua casa sem problemas. |
| 30:44 | É o que eu faço: em vez de usar um DAS conectado direto no meu PC eu tenho um NAS, um network |
| 30:49 | attached storage do lado do meu roteador e do meu PC sai um cabo ethernet cat7 que vai |
| 30:55 | até o roteador. Meu Synology DS420j é um NAS de entrada. |
| 31:00 | Tá configurado com 4 HDs mecânicos de 4 terabytes cada, reservando uns 5 giga espalhado |
| 31:06 | pelos drives. É uma porção de cada drive reservado pra redundância. Um NAS é só um nome mais bonitinho pra um PC pequeno com Linux. |
| 31:14 | Ele tem uma CPU Celeron antiga, uns 1 giga de RAM e só. Um NAS mais sofisticado vai ter um processador melhor, muito mais RAM e até opção de colocar |
| 31:23 | um SSD, normalmente formato mSATA ou talvez até M.2. Você mesmo pode montar um NAS caseiro num PC velho que tiver sobrando com placa de rede |
| 31:32 | ou até Wifi. Como a gente acaba usando HDs mecânicos, velocidade de Wifi acaba sendo suficiente. |
| 31:37 | Eu ainda não coloquei um NAS melhor porque não preciso editar arquivos grandes direto dele, só uso como backup mesmo. |
| 31:43 | Mas existem casos que você precisa trabalhar direto do NAS. Exemplo disso são estúdios que editam videos profissionais. |
| 31:50 | Aí você tem vários editores trabalhando de computadores bons mas todos precisam acessar os mesmos arquivos ou os arquivos são tão grandes que não é prático ter na máquina |
| 31:59 | de cada um. Se você não tem noção, video ocupa muito espaço. Mesmo na minha produção caseira, um video de 30 minutos em 4K ocupa nada menos que 3 |
| 32:09 | gigabytes e meio. Um dos meus últimos videos longos, antes de editar, foram 4 arquivos que dá quase |
| 32:15 | 2h de gravação e ocupa quase 40 gigabytes no total. Pra um video de YouTube! |
| 32:20 | Tudo bem que é um video que editado deu uns 45 minutos, mas mesmo assim. 10 episódios nesse formato já seria quase meio terabyte. |
| 32:27 | Menos de 20 videos e acabou um terabyte. Lembrem que meu canal já tem 100 videos. Numa produção profissional bem mais cara, usando uma câmera RED Monstro, gravando no |
| 32:37 | formato Redcode com compressão de 8 pra 1 e video de 8K custaria nada menos que 1 terabyte |
| 32:43 | pra cada 30 minutos. Ouviram? Se eu tivesse gravado as mesmas duas horas que eu falei nesse formato ia me custar mais |
| 32:49 | de 3 terabytes. Num único video! Imagina 100! Ah, mas depois de editar o video final é só jogar fora os originais. |
| 32:56 | Não, isso é pensamento de amador. A gente NUNCA joga fora originais de nada. Você nunca sabe quando precisa voltar nos originais pra re-editar, ajustar, talvez fazer |
| 33:05 | um remaster amanhã. Profissionais guardam tudo em servidores. Por isso você vai num canal como Linus Tech Tips e ele fala tanto em servidores de armazenamento |
| 33:13 | como esse aqui dele montando 1 petabyte num servidor com 60 HDs, 256 Giga de RAM controlado |
| 33:21 | por uma CPU AMD Epic Threadripper acho que de 24 cores. E eles tem mais de um desses servidores. |
| 33:28 | Nossos computadores domésticos e laptops costumam vir no máximo com um plug Ethernet de 1 gigabit, que é suficiente pra no máximo 128 megabytes por segundo de transferência. |
| 33:38 | Pra navegar na Web e copiar arquivos pequenos pela rede tá mais que bom. Quase nenhum plano de Internet doméstico que você achar vai saturar isso, nem perto, |
| 33:46 | especialmente se for uma porcaria como NET da vida. Meu NAS Synology e o Drobo não fazem muito mais que 25 megabytes por segundo. |
| 33:53 | Mas pra conseguir editar video de 8K em tempo real, direto num drive montado na rede, precisa |
| 34:00 | ser Ethernet 10 gigabit, pra ter velocidades de mais de 1 gigabyte por segundo. |
| 34:05 | Um servidor desses, aliás, provavelmente vai ter múltiplas saídas de ethernet 10 gigabit pra conseguir lidar com múltiplos computadores editando video ao mesmo tempo. |
| 34:15 | Aí a brincadeira começa a fica interessante. Recomendo procurar por videos dos bastidores do Linus Tech Tips que ele detalha bastante |
| 34:21 | disso. O ponto importante é que a gente imagina computador como sendo só o HD interno e no máximo um HD externo via USB. |
| 34:28 | Mas tem muito mais opção que isso. Falando em opção a última coisa que eu queria comentar é sobre storage em cloud. |
| 34:35 | Seja seu Dropbox ou AWS da vida. Num container virtual você não tem nenhum controle sobre os HDs por baixo. |
| 34:42 | Quando você cria uma instância tipo um AWS EC2 da vida e monta um volume de EBS, provavelmente |
| 34:47 | por baixo é um SAN ou Storage Area Network, que é o terceiro tipo que faltava falar mesmo. |
| 34:53 | NAS você já entendeu, é um servidor com HDs, em alguma configuração de RAID. O servidor de 60 HDs do Linus por exemplo, provavelmente tá configurado com filesystem |
| 35:02 | ZFS e uns 8 HDs são reservados pra paridade. Parece bastante mas 8 de 60 é uma perda de pouco mais de 10% comparado aos 20% que eu |
| 35:12 | perco no meu RAID-5, é bem justo. Significa que ele pode ter até 8 HDs crasheando ao mesmo tempo sem perder nenhum bit de dados. |
| 35:20 | Nos próximos episódios vou falar de ZFS mas só entenda pra hoje que é o melhor filesystem pra configurações assim de múltiplos HDs. |
| 35:27 | Um SAN é uma infraestrutura mais complexa. Num NAS a gente cria um volume virtual em cima dos 4 HDs ativos e enxergamos tudo como |
| 35:35 | se fosse um único drivezão em vez de enxergar. Um SAN é um volume virtual bem maior, que pode agrupar o equivalente a vários NAS por |
| 35:43 | baixo. A grosso modo pense num SAN como um conjunto de NAS, um rackzão de data center com vários |
| 35:49 | servidores ainda maiores que o do Linus. É em cima de hardware assim que funciona um Dropbox ou Google Drive. |
| 35:55 | E se você não conhecia, EBS é o serviço da Amazon Web Services pra criar volumes virtuais, |
| 36:01 | que você pode montar na sua máquina virtual Linux como se fosse um drive. Máquinas da Amazon EC2 são voláteis. |
| 36:08 | Quando desliga a máquina, tudo que tinha dentro se perde. Pra persistir dados, você monta um volume do EBS e vai gravando lá. |
| 36:14 | Quando desligar a instância, os dados no volume do EBS continuam lá até você remontar |
| 36:19 | em outra instância. Outra hora eu explico mais sobre porque a AWS funciona dessa forma. Mas a curiosidade é o nome. |
| 36:25 | EBS é Elastic Block Storage. Existem dois tipos de dispostivos, character devices e block devices. |
| 36:32 | Character devices quando você conecta ele vai imediatamente transmitindo byte a byte |
| 36:37 | individualmente pro seu software. Block devices recebem ou enviam bytes literalmente em blocos. |
| 36:44 | Por exemplo, setor a setor de uma partição ou melhor, clusters de vários setores ao mesmo tempo. |
| 36:49 | Um character device ou também chamado de raw device, "raw" de crú, onde a gente recebe |
| 36:55 | e envia byte a byte imediamente. Um block device tem uma espera, porque a kernel do sistema operacional vai manter um cache |
| 37:02 | em memória. Blocos é mais eficiente quando o dispositivo é lento. Lembra do trabalho que é o motor mover as cabeças por um disco que fica em rotação? |
| 37:10 | Por outro lado, coisas como teclado, mouse, você não quer que demore, pelo contrário, você quer a menor latência possível. |
| 37:16 | Por isso tem dois tipos. Em Linux pelo menos, a distinção deve ter motivos históricos, quando o normal era ter |
| 37:22 | que lidar com HDs bem lentos, ou mesmo os antigos disquetes e CDs. Ao contrário de Linux a família de UNIX BSD não trata HDs como block devices e sim |
| 37:32 | como raw devices, hoje em dia. Isso porque o fato do cache existir pra tentar melhorar a performance do HD trás uma desvantagem |
| 37:39 | que usuários domésticos como a gente não vai notar. Mas num servidor com muito uso pode ser fatal. Tudo que tá num cache é volátil. |
| 37:46 | Memória RAM depende de energia e se a energia caiu, perdeu o que tinha lá. Você quer RAM porque acelera a transmissão, mas quanto mais demorar lá, maiores as chances |
| 37:55 | de perder. O BSD quer partir da premissa que ele não vai interferir, e seu aplicativo pode implementar |
| 38:01 | cache por cima e gerenciar o risco que está disposto a assumir em vez de tentar melhorar |
| 38:06 | performance ao custo de um risco escondido. Essa situação é raro de acontecer, mas não impossível. |
| 38:12 | Quantas vezes no ano caiu energia bem quando você acabou de mandar salvar alguma coisa? É raro, mas comigo mesmo ao longo dos anos aconteceu algumas vezes. |
| 38:20 | Mas o ganho de performance graças aos caches automáticos do sistema operacional tem mais validade pra mim do que talvez perder um arquivo uma vez por década. |
| 38:29 | Num servidor a história é outra. Lembra o servidor do Linus com 60 HDs? Pensa servidores muito maiores, centenas de servidores, com milhares de HDs. |
| 38:39 | Num data center vai ser bem mais comum ter problemas, provavelmente até múltiplas vezes por dia. |
| 38:44 | Num conjunto de dezenas de milhares de HDs, certamente alguns HDs vão dar pau. Algum servidor pode dar pane de algum tipo. |
| 38:50 | E se seus dados estiverem num cache na memória, você pode perder arquivos importantes de algum cliente. |
| 38:56 | Talvez por isso os BSDs, cujo maior uso é em aplicações de servidor e muito menos como desktop, não suportam mais block devices, todos são character devices ou raw devices. |
| 39:07 | Não quer dizer que block devices são ruins. Num laptop, que tem bateria, você corre muito menos risco de perder alguma coisa por conta |
| 39:13 | de uma falta de energia aleatória. Por outro lado, a performance extra por ter o cache vai faciltar seu dia a dia. |
| 39:20 | Mas servidores é diferente, eles ficam ligados 24 horas por dia, 7 dias por semana, com milhares |
| 39:25 | de pessoas realmente lendo e gravando dados sem parar. E você não pode perder um byte, ou já já vai ter usuários muito bravos com você. |
| 39:33 | Tem muito mais que isso pra se falar sobre dispositivos de armazenamento, mas eu acho que com o que falei hoje já deve cobrir a maioria dos casos de uso que um programador |
| 39:42 | médio vai precisar. Você precisa entender o que está usando e não confiar numa abstração. |
| 39:47 | Eu lembro que antigamente a gente sabia que o programa tava funcionando e lendo ou gravando porque a gente colocava a orelha no gabinete e ouvia o som do motor e das cabeças trabalhando. |
| 39:56 | Pra diferenciar se um programa tava travado ou só demorando pra acabar, era só ouvir o HD. |
| 40:02 | Se estivesse em silêncio e o programa ainda pausado, é porque travou. Se desse pra ouvir o HD trabalhando, então tinha que esperar mais um pouco. |
| 40:10 | Hoje em dia, especialmente se você tá conectado numa máquina virtual em cloud, não tem mais esse contato com a máquina. |
| 40:16 | Então é mais importante ainda saber como essas coisas estão estruturadas, pra saber em que parte pode estar com problema: na sua aplicação, no sistema operacional, num dos |
| 40:25 | caches, na camada de rede se for um NAS, e assim diagnosticar o lugar certo. A pior coisa que um programador pode fazer é acreditar em superstições porque não |
| 40:33 | entende como as coisas funcionam. Daí quando realmente precisa resolver um problema difícil vai ficar achando receitas |
| 40:38 | homeopáticas e ficar tacando tudo na parede pra ver se algum gruda. Não precisa ser programador pra fazer as coisas às cegas assim. |
| 40:46 | Espero que tenha dado pra aumentar o interesse de vocês em estudar mais sobre o hardware. No próximo episódio vou falar sobre o que vai dentro dos volumes: o sistema de arquivos. |
| 40:56 | Cada sistema operacional usa um diferente e eles tem vantagens e desvantagens. Se ficaram com dúvida mandem nos comentários abaixo, se curtiram o video deixem um joinha, |
| 41:05 | assinem o canal, clique no sininho e compartilhem o video com seus amigos. A gente se vê, até mais. |
