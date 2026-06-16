# Todos os Sistemas de Arquivos: de FAT a ZFS

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=71o6Tyh2MUk
- **Duração:** 38:46
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado), `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita No episódio anterior a gente viu o antigo FAT em detalhes e como ele evoluiu até o FAT32. Demos uma pequena olhada nos primórdios do NTFS, |
| 0:10 | do HFS e como passamos a implementar filesystems com estruturas de árvore, |
| 0:15 | os B+Trees. Vamos continuar exatamente de onde paramos pra falar dos principais filesystems que surgiram depois nos anos 90 até hoje. Vai ser uma longa história então |
| 0:24 | vamos lá. (...) |
| 0:33 | Pra começar, eu tava pensando em escovar bit do sistema de arquivos de UNIX e Linux, mas acho que o mais importante você já viu: que o conteúdo dos arquivos, a linguiça de |
| 0:42 | bytes fica fatiado em cluster, e que as folhas de uma árvore B+Tree apontam pra esses clusters. |
| 0:48 | A árvore em si tem nós com múltiplos filhos e cada nó é uma estrutura de dados que grava os |
| 0:54 | metadados como nome de arquivo ou diretório e suas propriedades. No mundo Linux as duas |
| 0:59 | estruturas mais importantes são os inodes ou index node e dentry ou directory entry. |
| 1:05 | Basta entender que inode e dentry são structs, interfaces. Se quiser saber mais sobre eles |
| 1:11 | basta abrir o arquivo de cabeçalho fs.h no código fonte da kernel. Isto aqui do lado é uma versão |
| 1:18 | simplificada. Um inode carrega os metadados que representam um arquivo ou um diretório. Veja por |
| 1:24 | exemplo os campos de user id e group id que você normalmente modifica com comandos como `chown`. |
| 1:30 | E olha aqui onde ele grava os timestamps. Você consegue ler esses metadados do inode usando o comando `stat` como eu fiz aqui, olha os metadados organizados de forma legível. |
| 1:39 | O nome do diretório ou arquivo fica na estrutura `dentry` que você pode ver aqui do lado simplificado. De importante é que o `dentry` também aponta pra uma estrutura |
| 1:49 | mestra que é o `superblock`, que vai definir o filesystem em si. Pense nela como a raíz da |
| 1:54 | árvore. Os `dentry` apontam pro superblock e pra inodes. E inode aponta pro `file` ou arquivo. E |
| 2:01 | não só isso. Quando falamos que tudo em UNIX é um arquivo é porque arquivos propriamente ditos, |
| 2:06 | dispositivos até named pipes são representados por inodes. As diversas operações que podem ser feita em cima de inodes são definidos em outra estrutura, |
| 2:16 | a `inode_operations`. Veja como ela tem ponteiros pra funções nomeadas como `create`, `mkdir`, |
| 2:24 | `rmdir`. A kernel do Linux não fala diretamente com o filesystem. Ela fala com uma camada de |
| 2:29 | abstração chamada VFS que é o virtual file system e ele fala com o filesystem. |
| 2:36 | Sistemas operacionais modernos aceitam diversos filesystems diferentes, como o Windows aceita NTFS |
| 2:42 | ou FAT. Cada filesystem no Linux precisa preencher essa estrutura pra apontar pra funções específicas |
| 2:48 | de sua implementação, mas todas devem lidar com essas estruturas como inodes ou dentry e assim |
| 2:54 | se tornam compatíveis com Linux. Se você for programador, o `inode_operations` é como uma interface implementada por uma classe num ext4 e os métodos dessa classe recebem |
| 3:05 | objetos `inode` ou `dentry` pra trabalhar ir populando e gerenciando a árvore. Como você só vai ter que lidar diretamente com isso se estiver criando um novo filesystem |
| 3:14 | ou módulos de kernel, saber só isso já deve ser suficiente pra continuar. Um dos recursos que é normal hoje mas antigamente só se usava em máquinas corporativas, |
| 3:23 | como mini-computadores AIX da IBM ou workstations Silicon Graphics, é Journaling. Muita gente nunca |
| 3:30 | ouviu falar disso mas um journal ou um diário é tipo um log, implementado como um log circular. |
| 3:36 | Circular pra não crescer pra sempre. A gente costuma pensar que quando mandamos criar ou apagar um arquivo é só Uma operação que acontece instantaneamente. Mas não é assim, |
| 3:46 | são conjuntos de operações, como qualquer programa que você escreve: uma função formada |
| 3:51 | por múltiplas instruções. Por exemplo, apagar um arquivo num sistema de arquivos de UNIX e compatíveis vai ter pelo menos umas três operações. Primeiro precisa |
| 4:01 | remover a estrutura de entrada de diretório da árvore. Um detalhe de implementação é que precisa |
| 4:06 | devolver a estrutura de inode pro pool de inodes livres. E finalmente precisa liberar os blocos do |
| 4:12 | disco pro pool de blocos livres. Quando tem um crash, por bug ou pane elétrica, pode justamente parar no meio de uma dessas três operações e isso vai deixar |
| 4:22 | nossas estruturas de dados num estado inconsistente ou corrompido. Por exemplo, a entrada de diretório foi removida da árvore mas o inode corresponde não foi devolvido pro |
| 4:31 | pool de inodes. E assim por diante. Por isso que em Linux antigo, se você bootasse a máquina apertando o botão de reset, sem dar shutdown, no próximo boot ele forçava |
| 4:40 | rodar a ferramenta `fsck` que é o filesystem check. Que quem já viu sabe que é lento e |
| 4:46 | você é forçado a esperar. Porque pra detectar onde que pode estar corrompido não tem jeito, precisa navegar nó a nó da árvore do sistema de arquivos e checar inode por inode. |
| 4:56 | Por isso inventaram a idéia de um journal. Um journal pode ser implementado de várias formas. |
| 5:01 | Numa partição escondida, num arquivo escondido, num outro HD secundário separado. Enfim, a |
| 5:06 | implementação vai variar dependendo do filesystem mas a idéia é primeiro escrever aquelas três |
| 5:12 | operações nesse log e só depois começar a executar em cima da árvore de verdade. Se a operação for |
| 5:19 | interrompida na metade, no próximo boot o sistema de arquivos pode checar as últimas operações no |
| 5:24 | journal. Daí ele termina se puder, ou volta pro último estado indicado no journal. |
| 5:29 | De novo, é um trade off. A gente tá usando mais espaço em disco pra uma estrutura de suporte, |
| 5:34 | ou seja, vai de novo ter um pouco menos de espaço livre pra você. Por outro lado temos menos chance de acabar com nosso sistema de arquivos corrompido e perder tempo tentando |
| 5:44 | detectar o erro pra consertar. Num Windows antigo quando isso acontecia no boot ele carregava o Scandisk que é o equivalente `fsck` no Windows. Hoje você nunca vê ele. |
| 5:54 | Isso porque FAT32 não suportava journal, mas o NTFS que foi introduzido pelo Windows NT suporta. |
| 6:01 | Essa era uma das grandes diferenças. O Mac também evoluiu seu HFS e lá pela versão 8 do antigo |
| 6:07 | MacOS dos anos 90 criou o HFS Plus, que além de atualizar suas estruturas pra 32-bits também, |
| 6:13 | passou a adotar um journal. Até poucas versões atrás o MacOS ainda usava HFS+ como filesystem |
| 6:19 | principal, depois foi substituído pelo APFS, mas já falo dele. Falando rapidamente em Macs, todo mundo sabe que depois de ter sido expulso da Apple no |
| 6:28 | meio dos anos 80 o Steve Jobs fundou a NEXT pra produzir workstations UNIX e competir no mercado |
| 6:34 | da Sun e Silicon Graphics. Pra isso o time dele criou o NEXTStep que era um UNIX no espírito |
| 6:39 | de um Solaris ou IRIX. E usava o filesystem UFS como outros UNIX da época. |
| 6:45 | Durante os anos 90 a Apple foi decaindo sem parar. Passou na mão de vários CEOs e ninguém conseguiu |
| 6:50 | recuperar a Apple. No meio dos anos 90, só 10 anos depois, todo mundo já tava contando os dias pra |
| 6:56 | Apple declarar falência e fechar as portas. Daí o último CEO dessa geração, Gil Amelio fez a única |
| 7:02 | coisa que dava pra fazer: convidou o Steve Jobs pra voltar. O resto é história. Nessa época o sistema operacional dos Macs era o System 9. O System naquele ponto já |
| 7:11 | tava praticamente perdendo pro Windows 98. Era ridículo como o software deteriorou em pouco mais de 10 anos, partindo da referência que todo mundo queria ser, pra um sistema legado |
| 7:21 | e atrasado. Quando o Jobs voltou em 97 ele trouxe toda a propriedade intelectual da NEXT, |
| 7:26 | incluindo o NEXTStep e toda a biblioteca orientada a objetos feito em Objective-C pra criar |
| 7:32 | aplicativos modernos distribuídos em rede, que deixou até John Carmack babando. Mas pra ficar compatível com os Macs, decidiram trocar o UFS, o Unix File System, pelo HFS, mais |
| 7:43 | especificamente pelo HFS+ que foi lançado junto com o System 8.1 e adicionou suporte opcional a |
| 7:49 | journaling. Até hoje se você for no Disk Utility dos MacOS, que é o equivalente ao Disk Management |
| 7:55 | do Windows ou um GParted do Linux, vai ter a opção de formatar o volume com HFS+. Como podem imaginar, journaling foi uma das grandes discussões da comunidade open |
| 8:04 | source no fim dos anos 90. Distros Linux começaram usando o MINIX File System. MINIX que é o sistema |
| 8:10 | operacional inspirado em UNIX criado pelo lendário professor Andrew Tanenbaum pra ensinar sistemas |
| 8:16 | operacionais na faculdade. Já não se fazem mais professores como o Tanenbaum. O File system dele |
| 8:21 | era muito bom, muito estável, mas tinha as limitações daquela época do começo dos anos 80 onde a gente economizava bytes, desperdiçando o menos possível, e por isso os nomes de arquivos |
| 8:31 | só suportavam 14 caracteres de comprimento e partições de 64 megabytes. |
| 8:37 | A comunidade ajudou o Linux Torvalds e perto da versão 1.0 o MFS foi trocado pelo extended file |
| 8:44 | system ou ext, que era inspirado um pouco no MINIX mas também no UFS que é o UNIX |
| 8:49 | File System e seu sucessor que foi o Berkeley Fast File System ou BSD FFS. Se não me engano |
| 8:56 | a gente ainda usa uma versão atualizada do FFS nos FreeBSD da vida. O ext foi substituído pelo second extended filesystem. O ext2 foi o |
| 9:06 | filesystem mais adotado no meio da década de 90 no mundo Linux. Comparado ao FAT do MS-DOS, |
| 9:11 | era muito superior. Suportava volumes de até 32 terabytes, arquivos de 16 gigas até 2 tera, |
| 9:16 | nomes longos de 255 caracteres e mais. Não devia nada ao HFS do Mac ou HPFS do OS/2. |
| 9:24 | No meio dos anos 90, acho que só o HPFS, o ext2 e o FAT32 é que ainda eram popularmente |
| 9:31 | usados e não tinham um sistema de journaling. O OS/2 foi caindo em deuso e no fim dos anos 90 a |
| 9:37 | IBM substituiu o HPFS pelo mesmo filesystem que usavam nos mini-computadores mais parrudos AIX, |
| 9:43 | o JFS que significa justamente Journaling File System. Os Silicon Graphics tinham o sistema operacional IRIX como falei alguns episódios atrás e o |
| 9:53 | filesystem deles era um dos mais sofisticados, de alta performance com operações paralelas de I/O, |
| 9:58 | extents, implementado com B+Trees e, claro, journaling. Esse era o XFS. Ambos XFS e JFS foram |
| 10:07 | portados pra Linux no começo dos anos 2000. Por isso que você ainda vê eles por aí. Em paralelo surgiram outros como o controverso ReiserFS que foi o primeiro filesystem com |
| 10:17 | journaling que apareceu pra Linux, antes ainda do JFS e do XFS. Ele virou o filesystem padrão da |
| 10:24 | distribuição SUSE que migrou pro ext3 em 2006. Eu imagino que uma das razões da migração foi o que |
| 10:30 | aconteceu com o autor do ReiserFS, o Hans Reiser, que tinha fundado a empresa Namesys. Em 2006 |
| 10:37 | ele foi preso e em 2008 foi condenado por ter assassinado a esposa, Nina Reiser. Depois disso |
| 10:43 | ex-funcionários da Namesys deram continuidade ao ReiserFs junto com voluntários. No fim dos anos 90 a adoção do Linux cresceu exponencialmente e as fraquezas do ext2 davam |
| 10:53 | mais e mais dor de cabeça, especialmente a demora que era o `fsck` que era forçado a rodar no boot |
| 10:59 | toda vez que você resetava a máquina sem dar shutdown. E de fato, vira e mexe você perdia inodes no caminho. Então fizeram um fork do ext2 e acrescentaram a funcionalidade de journal em cima, |
| 11:10 | renomearam tudo pra ext3 e ele foi fácil de adotar porque era compatível com o ext2. Não precisava |
| 11:17 | reformatar as partições, só carregar o novo filesystem. Então migrar era fácil. Vamos dar uma pausa pra resumir um pouco. No mundo Microsoft a gente pulou dos anos 80 |
| 11:26 | pros anos 90 evoluindo o maldito FAT, de FAT12 pra FAT16 pra VFAT e FAT32. Era essa porcaria |
| 11:33 | que usávamos no Windows 95, 98 e Me. Depois da parceria do OS/2 com a IBM a Microsoft foi evoluindo em paralelo o Windows NT que era código novo feito |
| 11:42 | do zero e diferente do Windows 95. Ele tinha o NTFS que, comparado com o FAT32, era anos luz à frente, suportava volumes muito maiores, arquivos muito maiores, nomes longos, |
| 11:52 | sistema de permissão e tinha journaling. NTFS sobrevive até hoje. No mundo Mac, depois do lançamento do revolucionário Macintosh em 1984 eles pularam |
| 12:02 | do Macintosh File System ou MFS pro Hierarchical File System ou HFS, que já era baseado em B+Tree, |
| 12:09 | suportava nomes longos, mas tinha limitações no tamanho de arquivos e partições. Era tipo |
| 12:14 | um VFAT pouca coisa melhor. Isso ia melhorar em 1998 com o lançamento do System 8.1, |
| 12:20 | a gente ainda estava alguns anos antes da Apple terminar de adaptar o NEXTStep pra virar o MacOS |
| 12:25 | X que só seria lançado no ano 2000. Por quase 20 anos os MacOS iriam usar o HFS+. |
| 12:32 | No mundo Linux tinha a herança dos UNIX File System e isso derivaria no extended file system |
| 12:37 | ou ext. Ele ia evoluir pro ext2 que foi o mais usado nos anos 90 e começo dos anos 2000. Como |
| 12:43 | tava ficando atrasado outros começaram a aparecer como o ReiserFS que foi um dos primeiros a suportar journaling e outras funcionalidades que melhoravam a performance. |
| 12:51 | Ao mesmo tempo a IBM contribuiu abrindo o journaling file system ou JFS pro mundo |
| 12:57 | Linux e além do OpenGL a Silicon Graphics, nos seus últimos dias, também abriu o XFS |
| 13:02 | que usava nos IRIX pro mundo open source. Mas quem acabou sendo mais adotado, principalmente pela facilidade e compatibilidade, foi o ext3. A partir de 2006 começou o desenvolvimento do ext4 |
| 13:14 | que só passou mesmo a ser adotado depois de 2010. Hoje o filesystem mais usado de Linux em desktops |
| 13:20 | e notebooks provavelmente é o ext4 mesmo. Mas em servidores talvez seja um pouco diferente, |
| 13:25 | como já vamos ver. Esse é o panorama até os anos 2010. Não sei porquê, no mundo doméstico filesystems meio que estagnaram nos primeiros 15 anos do |
| 13:34 | século XXI. Mas no mundo de data centers a coisa evoluiu diferente. Uma das últimas contribuições da antiga Sun e seu sistema operacional Solaris, baseado no DNA do UNIX |
| 13:44 | System V, foi a introdução do filesystem ZFS, o Zetta File System. Se você nunca ouviu falar, |
| 13:50 | devia procurar saber. O ZFS foi definitivamente a próxima grande evolução na história de filesystems. Nenhum dos que falei até agora chega perto. Ele inicia a |
| 13:59 | geração de filesystems que não enxergam só uma partição no HD mas é também um gerenciador de |
| 14:04 | volumes ao mesmo tempo. Ele sozinho suporta criar um único volume em cima de vários HDs |
| 14:09 | num pool ou piscina. A gente fala bastante o termo pool, mas pense nessa palavra como |
| 14:14 | sendo um "conjunto" de alguma coisa. É só um nome mais fancy. Enquanto tava todo mundo achando que ter journaling já era suficiente o ZFS tava preocupado |
| 14:22 | com coisas maiores. O mercado da Sun e seu Solaris, principalmente depois que foi comprada pela Oracle, era equipar servidores que rodavam bancos de dados realmente massivos como a própria |
| 14:33 | Oracle. Quando a Oracle comprou a Sun, ela continuou evoluindo o ZFS. Muitos dos filesystem domésticos sequer incluiam checksums. Pra quem não sabe o que |
| 14:42 | é um checksum recomendo assistir esse video do Ben Eater que vou deixar linkado nas descrições abaixo. Mas em poucas palavras é uma forma de certificar um bloco de bytes. Se alguém |
| 14:52 | inexperiente quisesse saber se um bloco não foi corrompido talvez ele mantivesse pelo menos uma cópia exata desse mesmo bloco. Mas isso seria um puta desperdício. Não dá pra |
| 15:01 | saber qual dos dois blocos que tá certo ou se os dois tão errados, só que ficaram diferentes por |
| 15:07 | alguma razão. Essa é a forma mais rudimentar de detectar erro mas desperdiçando o dobro |
| 15:12 | de espaço. Em vez disso, o checksum é um número bem menor, que sim, consome alguns bytes a mais, |
| 15:17 | mas é da ordem de 1% ou menos pra certificar um bloco de bytes e detectar erros. Pense em dígito |
| 15:23 | verificador num código de barras. O NTFS do Windows incrivelmente implementa checksums mas o HFS+ da Apple não e só no ext4 do Linux que passamos a ter checksums nos journals, |
| 15:35 | que é crucial porque dependemos dele pra reconstruir as últimas operações no sistema de arquivos antes de uma pane. O ZFS vai além de checksums. Ao contrário do |
| 15:44 | ext4 e outros derivados do UNIX file system, o ZFS não usa ferramentas como o `fsck`. |
| 15:50 | Ele tem sistemas próprios pra diagnosticar erros e corrupção de dados. Nenhum filesystem é imune a corrupção de dados, mas lendariamente pra você corromper um ZFS |
| 16:00 | precisa ser defeito de hardware. E se estiver usando um pool de HDs, precisa acontecer erro |
| 16:05 | catastrófico de hardware em múltiplos HDs. É bem mais difícil um erro acontecer no ZFS do |
| 16:11 | que qualquer outro. Nenhum outro chega perto. Eu sei, tem outras opções, vou chegar lá, mas entenda que de 2005 em diante, se você quer montar um servidor de armazenamento sério |
| 16:21 | de petabytes num datacenter, nunca vai usar HFS+ ou NTFS e nem ext4. Vai usar ZFS. |
| 16:29 | ZFS tá disponível também em FreeBSD e chegou a ser portado tanto pra Linux quanto Mac OS X. Mas no |
| 16:35 | Mac eles deixaram de suportar. Aliás, por muitos anos a gente ficou discutindo quando a Apple ia oficializar o suporte a ZFS como filesystem principal. Alguns acreditam que o problema foi |
| 16:46 | a Sun ter sido comprada pela Oracle, que deixou o resto da indústria meio insegura. Quando a Oracle adquiriu a Sun em 2010 ela parou o desenvolvimento da versão open source do Solaris, |
| 16:56 | o OpenSolaris. Muitos engenheiros originais da Sun se demitiram e iniciaram projetos |
| 17:01 | paralelos como o OpenZFS, que tenta substituir todo o código proprietário do ZFS da Oracle, |
| 17:07 | pra uma versão open source compatível com licenças de software livre. No outro lado do espectro, a licença CDDL do ZFS e OpenZFS é um problema pro mundo Linux e GPL. |
| 17:18 | Alguns dizem que GPL e CDDL não são compatíveis mas acho que ainda não tem um consenso. Na dúvida, |
| 17:23 | o Linux não vem com OpenZFS. Você pode manualmente baixar e instalar, mas suportar ZFS em Linux sempre vai ser um problema até esse ponto de licenças |
| 17:33 | ser resolvido. Como a licença BSD é menos restritivo, mais livre que o GPL, |
| 17:38 | o CDDL não é um problema. Por isso que se você for montar servidores de armazenamento, é melhor preferir usar FreeBSD em vez de alguma distro Linux. |
| 17:46 | No mundo doméstico de Linux como Ubuntu, só recentemente passou a suportar, a partir da versão 19 ainda meio experimental. Hoje mais estável a partir da versão 20 do Ubuntu, |
| 17:57 | dá pra instalar ZFS de forma mais fácil, direto do instalador. A Canonical não é da bandeira xiita de software 100% livre, então ela tem versões de Ubuntu que vem com coisas |
| 18:06 | proprietárias como os drivers binários fechados da NVIDIA e agora o OpenZFS. Além de checksums no nível de blocos e outras funcionalidades de auto-recuperação pra |
| 18:16 | impedir corrupção de dados e dezenas de outras funcionalidades importantes que eu não conheço, |
| 18:22 | a mais interessante mesmo pra usuários como nós é a capacidade do ZFS de ter snapshots |
| 18:28 | baratos por conta do sistema de COW ou copy on write. Agora fodeu. Vamos entender copy on write. Interessante que dos filesystems domésticos, |
| 18:37 | nem o ext4 do Linux e nem o HFS+ da Apple tem suporte a snapshots baratos mas, de novo, |
| 18:43 | o NTFS do Windows tem, se você tiver o serviço de Volume Shadow Copy ativado. Se for programador um |
| 18:49 | sistema de copy on write é mais ou menos parecido em conceito com um commit de Git. Como expliquei no começo, um arquivo no nível do sistema de arquivos é uma coleção de clusters ou |
| 18:59 | blocos. Quando a gente edita um arquivo de texto e manda salvar, vai alterar só os blocos que foram modificados. O problema na maioria dos filesystems é que essa modificação |
| 19:08 | é feita "in-place", é literalmente escrever o dado novo "em cima" do bloco original. Se der |
| 19:14 | bug ou falta de energia isso pode deixar o bloco original num estado corrompido. Arquivos são divididos em clusters. Pra simplificar vamos imaginar que eu tenha |
| 19:23 | um array que representa o arquivo. Cada posição do array aponta pra um cluster. Se meu arquivo |
| 19:28 | tem 10 clusters, vamos ter um array de 0 a 9. Faz de conta que o nó da árvore que diz "hello.txt" aponta pra esse array. Quero salvar uma modificação que vai alterar |
| 19:38 | o conteúdo só dos cluster 5 e 6. Antigamente eu iria escrever os bits diretamente em cima |
| 19:44 | desses clusters e pronto. Mas hoje eu posso fazer diferente. Primeiro eu faço uma cópia só desse array. Isso vai ser rápido porque ele é uma estrutura pequena só de endereços pros |
| 19:54 | clusters. Agora eu escrevo o novo conteúdo em dois clusters novos. Feito isso basta |
| 19:59 | alterar o endereço das posições 5 e 6 desse novo array pra apontar pros novos clusters. |
| 20:04 | O eu que eu tenho agora? Do ponto de vista do sistema de arquivos eu tenho dois arquivos com o |
| 20:09 | mesmo nome, duas versões diferentes, mas eles não ocupam o dobro de espaço, porque os dois arrays |
| 20:16 | apontam pra maioria dos mesmos clusters. Uma vez terminado, eu sei que o arquivo tá seguro, então eu vou na árvore e só mando trocar o ponteiro do array antigo pro array novo. Pronto, |
| 20:26 | salvei meu arquivo de uma forma segura. Mais do que isso. Porque eu preciso apagar o array antigo? E se eu chamar a estrutura do array antigo de versão 1 e a estrutura do |
| 20:34 | array novo de versão 2? Essa é a raíz pra idéia de snapshots. Faz de conta que você quer fazer uma atualização de sistema meio arriscada, talvez dê pau e você |
| 20:43 | não consiga mais bootar o sistema. Antigamente a única opção que você tem é plugar um HD externo |
| 20:48 | e fazer um backup de tudo. Dependendo do tamanho do seu HD isso pode levar horas. E se desse pra |
| 20:54 | fazer uma cópia de tudo em segundos? Um backup normal vai levar horas porque precisa |
| 20:59 | copiar todos os bytes de todos os arquivos. Mas num sistema que suporta snapshots |
| 21:04 | como eu expliquei, via copy on write, dá fazer uma cópia só da estrutura de árvore. Só os trechos |
| 21:11 | modificados de cada arquivo que vai ocupar espaço novo. Não vai sobrescrever em cima. Se você tem 100 giga de arquivos e faz um snapshot, ter duas versões ocupando praticamente os mesmos 100 giga. |
| 21:21 | Por isso falei que em conceito parece um commit de Git. Um commit só tem as linhas modificadas de um arquivo e não uma cópia do arquivo inteiro. Se não assistiram meu video de como Git funciona, |
| 21:32 | recomendo ver depois. Se é tão fácil assim porque não dá pra fazer isso em FAT32 ou HFS+? Por que as operações de escrita são in-place. Elas sobrescrevem em cima |
| 21:41 | dos blocos antigos, pra economizar espaço. Mas como os HDs de hoje são ordens de grandeza maior, |
| 21:47 | podemos copiar só os novos blocos pra um espaço livre, e manter os blocos originais sem tocar |
| 21:52 | neles. Essa é a idéia por trás de garantir que você não vai acabar com dados corrompidos se crashear no meio do caminho. As versões originais nunca foram tocadas. |
| 22:00 | Snapshots são como commits de Git. E assim como Git você consegue voltar no tempo. Facilmente |
| 22:06 | consegue recuperar diretórios ou arquivos apagados ou modificados, porque os blocos originais |
| 22:11 | permanecem no disco. Obviamente vai ocupar mais espaço com o tempo, mas de novo, espaço em disco |
| 22:16 | hoje é muito barato. A gente pode desperdiçar espaço em disco pra garantir que não vamos perder dados. E com o tempo podemos consolidar versões pra recuperar espaço. |
| 22:25 | Falando em duplicar, se você fizer uma cópia de um arquivo de um diretório pra outro diretório, iria realmente copiar bloco a bloco do arquivo original. Se o arquivo original for |
| 22:35 | grande e tiver vários gigabytes, isso ia levar pelo menos alguns segundos e ocupar o dobro de espaço. Mas num sistema de copy on write vamos ocupar zero bytes a mais. Tem até um processo |
| 22:45 | de deduplicação pra quando for copiar um arquivo ele vê se já não tem outro com os mesmos bytes, |
| 22:50 | daí só aponta pra ele. Como o ZFS tem copy on write por bloco, enquanto ninguém mexer nos dois arquivos, eles vão apontar pro mesmo linguição de bytes. A vantagem é |
| 22:59 | que vai custar tempo zero e espaço zero pra criar a duplicata. Só se um dos arquivos for modificado |
| 23:05 | que realmente vamos precisar ocupar espaço novo só dos blocos que foram modificados. A mesma coisa acontece na memória quando o Linux faz um fork de um processo, ou seja, |
| 23:14 | cria uma duplicata de um processo pra usar os diversos cores de uma CPU moderna. Se fosse uma cópia exata, e o processo estiver ocupando 100 mega de memória, |
| 23:23 | cada vez que fizermos uma cópia deveria duplicar a memória do processo novo. Se fizermos 3 forks, |
| 23:28 | deveria ocupar 300 mega de memória a mais. Mas no momento do fork, o processo original e os 3 forks |
| 23:34 | vão todos ocupar os mesmos 100 mega originais. Só quando o processo voltar a rodar e o programa |
| 23:39 | começar a modificar a memória, que só esses bytes modificados vão ser copiados pro espaço do |
| 23:45 | processo novo e serem modificados. E como copy on write não altera os blocos originais, você não corre risco de corromper os dados originais durante uma operação se |
| 23:54 | cair a luz. Os blocos originais permanecem no mesmo lugar. Significa que um sistema de copy on write bem implementado descarta a necessidade um journal tradicional. |
| 24:03 | Não é que ZFS não tem um journal, mas ele é superior a só um mero log circular. Além das provisões anti-corrupção com checksums por bloco, pode ser configurado |
| 24:13 | pra realmente manter múltiplas cópias, usar algoritmos de checksum melhores como dedup, influenciar como requisições síncronas são feitas e controlar o cache pra balancear performance, |
| 24:24 | mas com algum risco de perder o que tá no cache como já expliquei. O ZFS olha pra um NTFS ou HFS+ e cospe no chão. Porém o ZFS é tudo menos de fácil. Usabilidade |
| 24:36 | pra usuários não técnicos é baixa. Se você configurar o ZFS errado vai sim perder dados ou corromper tudo. É aquela velha história, você pode configurar todos os aspectos de como o ZFS |
| 24:46 | funciona, mas se mandar ele acelerar e bater na parede, é isso que vai acontecer. Mesmo assim, muita gente gostaria de ver o ZFS no MacOS e por anos ficou no ar essa expectativa. |
| 24:55 | Mas isso nunca se materializou. A Apple não gosta de arriscar. E com o controle da Oracle |
| 25:00 | ela desistiu do ZFS e começou a desenvolver um novo filesystem dentro de casa mesmo. Isso levou ao APFS que saiu só em 2017 no iOS 10.3 e macOS 10.13 High Sierra. |
| 25:13 | Não é um ZFS mas pelo menos é moderno. Eu chutaria que supera o NTFS do Windows. De cara ele tem essa |
| 25:20 | funcionalidade de cópias baratas e deduplication usando delta extents. Se você tentar copiar um |
| 25:26 | diretório gigante, vai ser barato porque não vai duplicar os bytes do conteúdo. Melhor que isso, APFS implementa snapshots sem fazer cópia de todos os diretórios e arquivos, |
| 25:35 | parecido com o que expliquei do ZFS. O Time Machine da própria Apple que é o sistema de backup deles meio que já tentava fazer isso usando o recurso de hard links. Isso é em nível |
| 25:45 | de arquivo, ZFS é no nível de bloco. Além disso o APFS incluiu recursos que o NTFS já |
| 25:51 | tinha como encriptação moderna, integridade de dados via checksums, proteção contra |
| 25:57 | crashes usando uma redirect-on-write que é parecido com copy on write e por último compressão dos dados. Eu nem mencionei ainda, mas compressão é uma |
| 26:04 | coisa que eu particularmente não curto muito. Acho que não compensa o trabalho nem o risco. NTFS e ZFS também tem suporte a compressão. Talvez valha a pena se a maioria dos arquivos no sistema |
| 26:15 | for fácil de comprimir como arquivos de texto, que desperdiçam muito espaço. Mas coisas que |
| 26:20 | já são comprimidas como imagens JPG, videos com codecs que já são comprimidos como H.265 ou NVENC, |
| 26:28 | o benefício é muito pequeno. Se você não sabe que precisa de compressão então não precisa de compressão. É diferente de encriptação, isso eu recomendo |
| 26:35 | que todo mundo ative, especialmente em notebooks que podem ser facilmente roubados num aeroporto |
| 26:41 | da vida. A última coisa que você precisa é que alguém acesse seus dados. Ter uma senha não é |
| 26:46 | suficiente porque dá pra montar um HD em outro computador e ler os dados. Macs sempre tiveram |
| 26:51 | o FileVault em cima do HFS+ mesmo, NTFS tem o sistema BitLocker e Linux tem o LUKS. Então |
| 26:58 | todos os principais sistemas operacionais suportam encriptação e você deveria ligar. Como a maioria das CPUs modernas tem instruções de encriptação como AES implementados em hardware |
| 27:08 | a perda de performance é imperceptível. Então perda de performance nem é uma boa |
| 27:13 | desculpa. Só se lembre de não esquecer a senha, porque se esquecer é impossível recuperar seus dados. A única boa desculpa pra não encriptar seus volumes é se você for uma |
| 27:22 | desgraça pra gerenciar chaves. Isso me lembra de outro recurso de sistemas de arquivos que é safe delete. Não sei se você já consegue intuitivamente entender, |
| 27:31 | mas um arquivo é dividido em múltiplas estruturas. Uma coisa é uma struct como dentry e inode que vão |
| 27:38 | guardar coisas como o nome do arquivo, datas de modificação criação, permissões, etc e outra coisa |
| 27:43 | é o data fork, o linguição de bytes do conteúdo do arquivo propriamente dito. Quando você apaga um arquivo, é rápido porque só tem que apagar o inode da árvore e ponto. Porém |
| 27:54 | os bytes do arquivo em si vão continuar no disco. Só não ter nenhuma estrutura apontando pra eles. |
| 28:00 | Se você tiver treinamento forense vai conseguir ler os bytes crus do HD e pode achar dados não |
| 28:06 | encriptados em arquivos texto. Se você guardou senhas num arquivo de texto e depois apagou, esse conteúdo ainda vai estar no disco. Por isso sempre se fala pra |
| 28:15 | não guardar senhas em arquivos. A única forma de garantir que os dados em si foram apagados é sobrescrever bits por cima dos bits originais múltiplas vezes. Se você |
| 28:25 | sobrescrever os bits do conteúdo, de fato tá apagando os dados. E precisa ser múltiplas |
| 28:30 | vezes por uma característica de discos magnéticos de HDs mecânicos de manter as camadas magnéticas |
| 28:36 | antigas embaixo das novas. De novo, se você for um técnico forense com técnica e equipamento adequado, consegue "raspar" os bits da camada mais nova e tentar |
| 28:46 | ler os bits da camada de baixo. Por isso que um safe delete vai sobrescrever todos os bits do arquivo múltiplas vezes. E por isso é demorado e quase ninguém faz. Mas se seu |
| 28:55 | HD estiver encriptado, basta perder a chave. Os dados já eram invioláveis porque os bits |
| 29:01 | tão bagunçados e sem a chave não dá ler, então não precisa sobrescrever nada. Além do APFS pra Mac, o mundo Linux também ganhou uma opção mais moderna. Como teve toda |
| 29:10 | essa controvérsia da Oracle, licenças e tudo mais, apesar de existir uma versão aberta de OpenZFS pra |
| 29:16 | Linux, a adoção é baixa. Só distribuições focadas em serem instaladas em servidores de arquivos que usam. No mundo doméstico, só agora com um Ubuntu 20 que apareceu a |
| 29:26 | opção de modo fácil de instalar. Mas toda essa controvérsia abriu caminho pra um projeto novo e mais moderno, o btrfs que se lê como butter, de manteiga, embora eu sempre |
| 29:36 | achasse que era better, de "melhor". Mas `btr` tem a ver com a estrutura de dados que usa por baixo, |
| 29:41 | que é um B+Tree melhorado. Tem um paper que explica a inovação dessa nova estrutura de dados. |
| 29:47 | Lembra toda a movimentação de nós que precisa fazer pra rebalancear uma árvore? Essa versão o |
| 29:52 | interessante parece ser que ele precisa fazer bem menos operações de rebalanceamento. O importante é que o btrfs também é um filesystem de nova geração como o ZFS, que ao mesmo tempo é |
| 30:03 | um filesystem e um gerenciador de volumes. E também como o ZFS permite criar volumes |
| 30:09 | em cima de um pool de HDs. É implementado com copy on write, permite deduplicação |
| 30:14 | de dados e snapshots baratos. Assim como o OpenZFS, poucas distros suportam |
| 30:19 | btrfs desde a instalação. O Ubuntu 20, além de OpenZFS também passou a suportar btrfs na |
| 30:26 | instalação. O OpenSUSE já vinha suportando também. A Suse tem histórico de adotar filesystems mais |
| 30:33 | modernos mas possivelmente mais instáveis como foi o caso do ReiserFS no começo do século. O Fedora |
| 30:38 | 33 também começou a adotar em 2020 então estamos bem num ponto de inflexão onde o btrfs tá estável |
| 30:46 | o suficiente pra ser mais adotado. O fato é que o ext4 é compatível com o ext3 que é |
| 30:51 | compatível com o ext2. É um dos códigos mais antigos da história do Linux. Isso facilitou |
| 30:56 | adoção mas adicionar funcionalidades novas foi ficando mais e mais difícil e mesmo os |
| 31:02 | desenvolvedores do ext4 concordam que já chegou num limite e acham que coisas mais avançadas só |
| 31:07 | vão ser possíveis em cima do btrfs. Não tem mais nenhum outro filesystem no Linux com |
| 31:12 | potencial porque o OpenZFS precisaria resolver esse problema de licenças e tudo mais. O JFS |
| 31:18 | da IBM ou o XFS da Silicon Graphics também são antigos e pouca gente tem interesse em dar suporte. APFS é proprietário só da Apple e NTFS continua proprietário só da Microsoft. |
| 31:29 | Só sobrou mesmo o btrfs. Eu comecei a usar btrfs no meu Arch Linux Manjaro. E embora o Manjaro não dê suporte total na instalação, foi bem fácil configurar a partição |
| 31:39 | manualmente. E uma vez instalado é transparente pro Linux e funciona muito bem. Essa transparência |
| 31:45 | é muito porque todo sistema operacional moderno hoje funciona com um VFS ou virtual file system, |
| 31:51 | como falei no começo. Dessa forma você não precisa fazer aplicações específicas pra cada filesystem e por isso o Nautilus do GNOME que é o equivalente do |
| 31:59 | Explorer de Windows ou Finder de Mac vai conseguir realizar as operações básicas como listar diretórios, copiar arquivos, renomear diretórios e coisas assim em qualquer |
| 32:09 | filesystem, seja ext4 ou btrfs. Mas pra fechar a história ainda faltou falar |
| 32:14 | do último filesystem. Eu disse que o APFS e mesmo o HFS+ antes dele são proprietários da Apple, sem |
| 32:21 | código aberto. Então, se você formatar um pendrive em APFS, na prática só vai conseguir ler em outro |
| 32:26 | Mac. O mesmo vale pro NTFS da Microsoft. Hoje em dia a gente até consegue pelo menos ler |
| 32:31 | dados de NTFS em Mac e Linux, mas escrever ainda é instável porque os drivers não são suportados pela |
| 32:38 | Microsoft e nunca se sabe quando uma atualização do NTFS vai deixar volumes que dependem do |
| 32:43 | driver open source corrompidos. Por outro lado, todo filesystem de Linux é aberto mas nem Apple e nem Microsoft tem interesse em dar suporte nativo no MacOS ou Windows. Ou seja, |
| 32:54 | se você precisa transferir dados entre diferentes sistemas operacionais, como faz? A forma mais fácil talvez seja usando NFS que é o network file system. É como você se conecta |
| 33:03 | a pastas compartilhadas na rede local. NFS é um protocolo pra filesystems distribuídos em rede, |
| 33:09 | desenvolvido pela Sun. Pois é, a Sun foi um dos desenvolvedores mais influentes dos anos 90 e 2000, uma pena que morreu. Como é código aberto, praticamente |
| 33:18 | todo mundo suporta NFS. O mundo Windows obviamente tem protolos proprietários como SMB e CIFS. CIFS é o sucessor do antigo Samba. A menos que você |
| 33:28 | precise se conectar em algum servidor antigo em Windows 2000, vai usar CIFS. SMB é o Server |
| 33:34 | Message Block mas a gente conhece como Samba mesmo, é bugado, tem buracos de segurança e não é recomendado. CIFS é o Common Internet File System. Mesmo em Linux e Mac dá pra se |
| 33:45 | conectar com esse protocolo. Felizmente nunca precisei lidar muito com nenhum deles mas meu feeling é que NFS tende a simplesmente funcionar e CIFS |
| 33:54 | vira e mexe tem probleminhas. Mas hoje em dia, pra maioria da população, ambos funcionam bem o suficiente pra copiar arquivos entre seu PC e seu notebook por exemplo. |
| 34:02 | Mas e pendrives? Pendrives são dispositivos USB com chips de armazenamento com memória flash. |
| 34:08 | Além de HDs externos que são basicamente caixinhas com adaptadores SATA pra USB, temos pendrives e SD cards. E SD cards variam em qualidade. Os melhores são os SDXC UHS. Se |
| 34:21 | você não é da área de video nem deve saber que existia diferença. Mas SD card e mini SD card tem |
| 34:26 | classes diferentes de velocidade. A classe 2 é a mais lenta, nem sei se ainda existe porque é só de 2 mega por segundo, horrível de lento. A Classe 4 é 4 mega por segundo. |
| 34:35 | Classe 6 é 6 mega por segundo. Classe 10 é 10 mega por segundo. Eu pessoalmente acho 10 mega por segundo horrível, mas a maioria dos SD card baratos que você achar |
| 34:44 | podem ser de 6 mega ou menos. Os realmente bons, que qualquer câmera de 4K vai exigir, são os SDXC UHS que é Ultra High Speed. E mesmo assim não é tão ultra |
| 34:55 | high assim. O UHS 1 ou U1 são os mesmos 10 mega por segundo da classe 10. O top de linha |
| 35:00 | são os UHS 3 ou U3 que são 30 mega por segundo de velocidade de gravação sequencial. |
| 35:06 | Assim como no caso de USB que tem o tipo de conector como USB Type-C e USB, o protocolo, como |
| 35:13 | 3.2 Gen 2, ainda tem os tipos de barramento de SD Card. Normal é pras classes 2 até 6. High Speed é |
| 35:20 | pra clase 10, e UHS-I é pra U1 e UHS-II é pra U3. Na prática é simples, se você for amador, classe |
| 35:27 | 6 é mais que suficiente. Se for profissional, pára de fazer economia porca e compra SDXC U3. |
| 35:33 | Senão não tem como gravar 4K acima de 60 quadros por segundo. Outro dia quero tentar explorar mais sobre video. Mas de volta a SD Cards e pendrives. Que |
| 35:42 | filesystem vamos usar neles? Qualquer um serve, mas se quiser usar o pen drive pra copiar arquivos de um Mac pra Windows ou Linux, existe algum filesystem que funciona em todos? |
| 35:51 | Ironicamente tem, e é um derivado do FAT32. Sei lá porque a Microsoft resolveu ser bonzinha com |
| 35:57 | o mercado a abriu a especificação do FAT e criou o exFAT ou extensible FAT em 2006. |
| 36:04 | Provavelmente pelo crescimento do mercado de multimidia, de câmeras fotográfica e video. Ela |
| 36:09 | viu que ninguém tava a fim de adotar o NTFS. Antes que acabassem adotando outro padrão, ela escolheu o menor de dois maus e criou o exFAT como padrão aberto. |
| 36:18 | O exFAT é um filesystem com cheiro de mofo desde o nascimento. É o pior em termos de |
| 36:24 | funcionalidades comparado com todos que expliquei hoje. Perto de um ZFS ou btrfs ou mesmo o APFS, |
| 36:31 | o exFAT é um neandertal andando nos tempos modernos. Mas isso não importa. Um filesystem de dispositivos pra gravação de câmera não |
| 36:39 | precisa de gerenciamento de volumes e pools de storage. Não precisa de compressão nem de |
| 36:44 | encriptação porque velocidade é prioridade. E não tá nem aí pra journaling, copy on write ou |
| 36:50 | qualquer coisa assim. Um dispositivo pra câmera precisa só ser muito rápido e suportar arquivos |
| 36:55 | muito grandes. Só. Porque logo depois da gravação os arquivos vão ser copiados pra um servidor de |
| 37:00 | ingestão de video e o SD card ou HD externo vai ser apagado pra próxima gravação. Ninguém vai manter nada importante em exFAT por muito tempo. Os arquivos só precisam durar o |
| 37:11 | suficiente pra serem transferidos pra outro lugar depois, como um servidor rodando OpenZFS. E lá |
| 37:18 | sim, precisa de todas as garantias de redundância que já expliquei. Mas numa câmera? exFAT suporta |
| 37:23 | volumes de até 16 exibites teóricos, e nem existe um SD card perto disso. E suporta arquivos de até |
| 37:30 | 16 exibites também. Ou seja, não tem nenhuma garantia que semana que vem seus arquivos vão estar lá, mas foda-se, não precisa durar tudo isso, só precisa ser rápido. |
| 37:37 | E a ironia é isso: o exFAT sendo o filesystem o descendente dos anos 80 e não tendo implementado |
| 37:44 | nenhuma funcionalidade moderna, ficou rápido hoje. Ele é simples de dar suporte. Não tem nada complicado como gerenciador de volumes ou encriptação, é só o bom e velho FAT só que sem |
| 37:54 | limites de espaço e tamanho de arquivos. Sendo simples assim, ficou fácil dar suporte e por isso além de Windows tanto a Apple quanto Linux passaram a dar suporte. |
| 38:03 | Interessante como o único filesystem universal hoje é o exFAT. Se você vai transferir arquivos |
| 38:09 | entre máquinas com sistemas operacionais diferentes ou com coisas como câmeras, provavelmente vai usar SD cards ou HDs externos formatados em exFAT. |
| 38:18 | E aqui termina nossa jornada sobre dispositivos de armazenamento e sistemas de arquivos. A |
| 38:23 | intenção foi dar contexto de como as coisas evoluíram, como uma se relaciona com a outra e porque são importantes. Espero que isso tenha ajudado a dar uma luz nessa sopa de letrinhas. |
| 38:33 | Se ficaram com dúvidas mandem nos comentários abaixo. Assinem o canal, |
| 38:38 | cliquem no sininho, compartilhem o video pra ajudar o canal. A gente se vê, até mais. |
