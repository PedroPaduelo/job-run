# Quebrei 3 HDs: Entendendo Armazenamento

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=lxjBgxmDZAI
- **Duração:** 27:26
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita |
| 0:02 | Se você assistiu o episódio sobre meus Backups que fiz lá no começo do canal sabe que costumo |
| 0:06 | ser um pouco obsessivo sobre armazenamento. |
| 0:09 | Eu cheguei a perder algumas coisas que tinha em disquetes e cartuchos de zip drive, então |
| 0:13 | meus primeiros projetinhos, coisas da faculdade, eu perdi. |
| 0:16 | Desde então tento manter múltiplas cópias das coisas mais importantes. |
| 0:20 | Eu tenho backupsdo meu Outlook do ano 2000 por exemplo, todos os meus emails de mais |
| 0:25 | de 20 anos atrás. |
| 0:27 | Mesmo os atuais que ficam no Gmail eu baixo offline com o Thunderbird pra ter uma cópia |
| 0:31 | local. |
| 0:32 | Nunca confie em serviços cloud, especialmente se forem gratuitos. |
| 0:35 | Você sempre vai receber exatamente o que paga. |
| 0:39 | Um belo dia sua conta tá suspensa, por erro ou porque você foi imprudente e não habilitou |
| 0:43 | autenticação de 2 passos nem manteve senhas fortes. |
| 0:46 | Vai acontecer, é só questão de quando. |
| 0:50 | Mesmo usando coisas como Dropbox, Google Drive e Microsoft OneDrive - sim, eu uso os três |
| 0:55 | - tenho uma cópia nos HDs do meu PC, outra cópia no meu laptop, e outra nos meus NAS. |
| 1:00 | A grande vantagem que eu vejo hoje em dia comparado com os anos 90 ou anos 2000 é que |
| 1:05 | armazenamento barateou muito. |
| 1:07 | No primeiro dia de 1995, ano que entrei na faculdade, o custo médio por 1 gigabyte era |
| 1:13 | nada menos que 850 dólares, em dólares dos anos 90! |
| 1:17 | Só 1 giga! |
| 1:19 | 5 anos depois, no último dia de 1999 o mesmo 1 gigabyte agora custava em média 15 dólares. |
| 1:24 | E em 2009 custava só 7 centavos. |
| 1:27 | Hoje em dia 1 terabyte é menos de 100 dólares. |
| 1:31 | Hoje eu quero discutir um pouco sobre armazenamento. |
| 1:34 | Na nossa saga pela máquina de Turing e a linguição de bytes, eu expliquei como bytes |
| 1:39 | mais ou menos são organizados na memória, estruturas de árvores, stack, heap e tudo |
| 1:44 | mais. |
| 1:45 | Mas memória RAM é volátil. |
| 1:46 | Toda vez que você desliga o computador essa memória foi pro saco. |
| 1:49 | Pra ter algo persistente agora precisamos entender como armazenar nossa fita de bytes |
| 1:53 | numa mídia sólida, como os atuais drives de SSD NVME. |
| 1:57 | Muita gente pensa que a única coisa importante sobre drives é que a gente particiona e tem |
| 2:01 | uma estrutura de diretórios e arquivos, e só lê arquivos e grava arquivos e acabou |
| 2:06 | a história. |
| 2:07 | Só que é muito mais que isso. |
| 2:09 | Então vamos entender. |
| 2:10 | (...) |
| 2:11 | Por muitos anos, desde 2008, eu mantinha meu backup num dispositivo chamado Drobo. |
| 2:23 | Quando saiu parecia excepcional, hoje em dia é bem ultrapassado, mas eu ainda tenho um |
| 2:27 | Drobo 5N que é um NAS. |
| 2:30 | NAS é sigla pra Network Attached Storage ou armazenamento anexado na rede que é um |
| 2:35 | nome mais bonito pra um PC na rede com vários HDs. |
| 2:39 | Esse Drobo 5N tem 5 baias pra HDs. |
| 2:41 | E eu tenho 5 HDs mecânicos de 4 terabytes cada. |
| 2:45 | Isso dá um total de 4 vezes 5 que é 20 terabytes, mas eu só posso usar pouco menos de 15. |
| 2:51 | Se você nunca ouviu falar em redundância pode achar isso estranho, pra onde foi os |
| 2:54 | outros 5 teras?? |
| 2:55 | O Drobo e outros NAS costumam usar alguma variação do conceito de RAID que é sigla |
| 3:01 | pra Redundant Array of Inexpensive Disks ou um arranjo redundante de discos baratos. |
| 3:07 | O problema é o seguinte, HDs tradicionais mecânicos tem o problema de serem mecânicos, |
| 3:11 | terem partes móveis. |
| 3:13 | O HD tem discos um em cima do outro formando um cilindro e cada um tem cabeças de leitura, |
| 3:18 | um pra cada lado do disco, ligadas num motor pra movimentar essas cabeças a milímetro |
| 3:23 | de distância dos discos. |
| 3:25 | Eu lembro que nos anos 90 a gente tinha que dar um comando no MS-DOS chamado `park` que |
| 3:30 | é estacionar. |
| 3:31 | Era um comando pra forçar o estacionamento das cabeças. |
| 3:34 | Pense em cabeças como a agulha que desliza sobre um disco de vinil de música. |
| 3:38 | Apesar das cabeças num HD não tocarem fisicamente os discos e sim usar magnetismo pra ler os |
| 3:44 | bits, se você esbarrasse no computador podia arriscar dessa cabeça tocar no disco, e aí |
| 3:50 | podia estragar. |
| 3:51 | Por isso era boa prática mandar estacionar antes de desligar o computador. |
| 3:55 | Hoje em dia eles são mais inteligente e já fazem isso sozinhos. |
| 3:58 | O ponto é que existem muitas peças móveis, e tudo que tem peças móveis eventualmente |
| 4:03 | vai falhar. |
| 4:04 | Seja por problema de fabricação, seja só por tempo de uso. |
| 4:07 | Tudo deteriora. |
| 4:08 | E quando isso acontecer você pode perder acesso aos seus dados. |
| 4:12 | Existem variações na implementação de estratégias de RAID, mas no modelo clássico |
| 4:16 | RAID-5 tem esse número porque se espera ter pelo menos 5 HDs. 4 vão estar ligados e um |
| 4:22 | 5o fica offline de reserva, desligado mesmo e por isso chamamos de Cold Spare. |
| 4:27 | Apesar de ser 4 HDs ligados ao mesmo tempo, você enxerga como se fosse um único drive. |
| 4:32 | Um único volume pra ser mais exato. |
| 4:35 | Os dados, mais corretamente os blocos, são divididos entre os 4 drives e cada HD mantém |
| 4:40 | uma parte da cópia do outro drive. |
| 4:43 | Sabemos que HDs mecânicos eventualmente vão morrer. |
| 4:45 | Mas vamos apostar que em 4 drives a chance de todos morrerem ao mesmo tempo é baixa. |
| 4:51 | Normalmente só um vai morrer primeiro. |
| 4:53 | Se isso acontecer os outros 3 drives vão ter cópias dos demais e seu volume vai sobreviver |
| 4:57 | intacto, sem perder nenhum dado. |
| 5:00 | Isso te dá tempo pra pegar aquele 5o HD de reserva, o cold spare pra substituir pelo |
| 5:04 | que falhou. |
| 5:05 | Daí o controlador do RAID vai reconstruir o novo HD com os dados redundantes dos outros |
| 5:09 | três. |
| 5:10 | Por isso que apesar de eu ter um total de 20 tera nos meus 4 drives, ele só me deixa |
| 5:14 | usar 15. |
| 5:15 | Porque os outros 5 tera são gastos com redundância. |
| 5:18 | São os dados de paridade. |
| 5:20 | E eu já tive esse problema de HDs morrerem várias vezes e toda vez fui salvo por esse |
| 5:24 | sistema. |
| 5:25 | Em data centers isso é crucial. |
| 5:26 | Imagina que um data center como os do Google ou Amazon da vida tem milhares de HDs. |
| 5:32 | Todos eles vão falhar uma hora. |
| 5:33 | Não de uma vez, mas aos poucos. |
| 5:35 | Com essa quantidade massiva, falha alguns por dia, especialmente porque ficam ligados |
| 5:40 | e funcionando dia e noite sem nunca desligar. |
| 5:43 | HDs usados em data centers são diferentes do que a gente usa nos nossos PCs caseiros. |
| 5:47 | HDs como os Seagate Iron Wolf Pro, feitos pra serem mais robustos e resistentes. |
| 5:53 | HD doméstico quebra mais fácil, por isso é mais barato. |
| 5:56 | No meu caso, eu precisava de mais de 15 teras. |
| 5:59 | Eu tenho duas opções: uma seria trocar os HDs de 4 teras por outros maiores de 6 ou |
| 6:04 | 8 teras. |
| 6:05 | Em vez disso eu queria testar os produtos de NAS da Synology e por isso comprei um modelo |
| 6:09 | de entrada que é o DS420j, e já digo que achei razoável. |
| 6:14 | Sem me alongar muito, nada de errado com esse modelo, ele faz exatamente o que diz que faria |
| 6:18 | e acho que se for só pra backup tá bem mais que suficiente. |
| 6:21 | Mas não dá pra usar ele no dia a dia com arquivos grande, porque ele é limitado pela |
| 6:26 | velocidade dos HDs mecânicos e não tem opção pra aumentar a RAM e nem colocar um SSD NVME |
| 6:32 | como cache. |
| 6:33 | Uma versão como o DS920+ já tem opção pra esses upgrades e isso aumentaria bastante |
| 6:38 | a velocidade: mais cache. |
| 6:40 | E mesmo assim, se eu quisesse editar video direto dele precisaria ser um outro modelo |
| 6:44 | que também tenha saída de rede 10Gigabit em vez do tradicional 1 gigabit. |
| 6:50 | Lembrem-se disso quando estiverem escolhendo um. |
| 6:52 | Esses dias eu tive um problema. |
| 6:54 | Uns dois anos atrás eu pedi pro meu sócio trazer HDs pra mim quando ele foi pros Estados |
| 6:58 | Unidos. |
| 6:59 | O problema de HDs, como eu falei, é que são frágeis. |
| 7:01 | Se você jogar os HDs na na mala e não proteger muito bem, com todo o balanço da viagem, |
| 7:06 | mala sendo jogada dentro do avião, é quase certeza que vai estragar. |
| 7:09 | Dito e feito, eles nunca se comportaram como deveriam. |
| 7:12 | Eu usei eles no Drobo, mas aí o Drobo reclamou que os HDs tavam falhando. |
| 7:16 | Resolvi comprar mais 4 HDs novos no Mercado Livre e fui trocando. |
| 7:20 | Daí esses HDs massacrados ficaram sobrando. |
| 7:23 | Quando comprei o Synology eu pensei: ok, eu sei que eles não tão 100% mas vamos tentar |
| 7:27 | de novo. |
| 7:28 | Se falhar não vai ser todos de uma vez. |
| 7:30 | Funcionou por alguns meses, esses dias o Synology desligou tudo sozinho. |
| 7:34 | Tentei religar e entrar no painel de administração e batata, 3 dos HDs tavam marcados com defeito. |
| 7:40 | Três de uma vez só é foda. |
| 7:42 | Mas na prática os próprios HDs é que sinalizam pro servidor que tão começando a falhar |
| 7:46 | e que é arriscado continuar, não quer dizer que quebraram totalmente. |
| 7:49 | Ainda bem que hoje em dia os HDs são mais inteligentes, eles tem a funcionalidade de |
| 7:53 | SMART que é sigla pra Self-Monitoring, Analysis and Reporting Technology ou seja, Auto-monitoramento, |
| 8:00 | análise e tecnologia de relatório. |
| 8:03 | O HD sabe que vai morrer a qualquer momento. |
| 8:05 | Enfim, lá vou eu encomendar mais HDs no Mercado Livre. |
| 8:09 | Eles acabaram de chegar, dessa vez comprei Western Digital RED que são os equivalentes |
| 8:13 | em robustez aos Seagate Iron Wolf. |
| 8:16 | Qualquer uma das duas linhas eu recomendo. |
| 8:18 | O problema é que 3 HDs de uma vez começaram a notificar problema. |
| 8:21 | Num dia normal onde no máximo só um falha, bastaria trocar só ele e os outros três |
| 8:26 | iriam ser usados pra reconstruir o quarto. |
| 8:29 | Como os três falharam, o próprio Synology se auto-desligava inteiro por garantia. |
| 8:34 | Então seria arriscado tentar o processo de reconstrução dele mesmo. |
| 8:37 | Eu queria uma forma mais direta de fazer um clone de um HD direto pro outro. |
| 8:41 | Por isso procurei um sistema de clonagem e achei um genérico que parece que funciona, |
| 8:45 | da marca Mymax e você acha no Mercado Livre. |
| 8:48 | É um dispositivo que não precisa estar ligado no computador pra funcionar. |
| 8:52 | Você coloca o HD original no slot A, o novo HD no slot B, só garante que o novo HD é |
| 8:57 | do mesmo tamanho ou maior que o original, aperta um botão e ele sozinho vai fazer um |
| 9:01 | clone, bloco a bloco. |
| 9:03 | E isso é importante. |
| 9:04 | Esse dispositivo não tem a mínima idéia de que sistema de arquivos o HD tem, se é |
| 9:08 | NTFS de Windows ou ext4 de Linux. |
| 9:11 | Ele não precisa carregar um filesystem e copiar arquivo a arquivo, isso seria o arriscado. |
| 9:16 | Em vez disso ele vai fazer um clone de verdade, copiando bloco a bloco de um HD pra outro. |
| 9:22 | Isso é modo raw ou crú. |
| 9:24 | Daí veio a idéia desse episódio. |
| 9:25 | Muita gente, incluindo programadores não tem a mínima idéia de como HDs funcionam. |
| 9:29 | No máximo sabem que um SSD é mais rápido que um HD e só. |
| 9:34 | Quando eu falei clonar um HD, muita gente deve imaginar tipo selecionar vários arquivos |
| 9:38 | e copiar pro outro como faria num Windows Explorer. |
| 9:42 | Tem gente que tem até computadores ou HDs externos com mais de um drive configurado |
| 9:46 | em RAID-0, formando um único volume, ou seja, estão em stripe. |
| 9:51 | Mau eles sabem que se um dos HDs falhar você acabou de perder todos os dados dos dois ao |
| 9:56 | mesmo tempo. |
| 9:57 | Se você não sabe o que é Stripe, é uma versão de RAID que faz um único volume em |
| 10:02 | cima de dois ou mais HDs. |
| 10:04 | Daí no seu Windows você enxerga só um drive C:, por exemplo. |
| 10:07 | A vantagem é que a velocidade vai ser maior, porque você distribui o trabalho entre os |
| 10:11 | dois HDs, em paralelo. |
| 10:13 | No melhor caso você vai ter o dobro de performance. |
| 10:16 | Alguns blocos vão pra um HD e outros blocos vão pro outro HD. |
| 10:20 | Mas você pode pensar, ué, se metade dos arquivos foi pra um HD e outra metade foi |
| 10:25 | pro outro, se um dos HD falhar eu vou perder só metade dos meus arquivos, mas a outra |
| 10:29 | metade tá salva, não tá? |
| 10:31 | Não! |
| 10:32 | Eu disse que vai distribuir blocos e não arquivos. |
| 10:35 | O você talvez não saiba é que arquivos são divididos em blocos, normalmente de tamanho |
| 10:40 | fixo, digamos de 512 bytes. |
| 10:42 | Então um arquivo de 1 megabyte pode ocupar pelo menos 2 blocos. |
| 10:46 | Um arquivo de 10 mega vai ocupar 20 blocos e assim por diante. |
| 10:49 | Agora, o sistema RAID-0 de stripe vai DIVIDIR esses blocos entre os dois HDs. |
| 10:55 | Por isso é mais rápido ler depois, porque ele pode ler partes do mesmo arquivo vindo |
| 10:59 | de HDs diferentes. |
| 11:00 | E por isso que se você perder um dos HDs, vai perder o arquivo todo, porque tá picotado. |
| 11:05 | Se você perder só 1 bloco, seu arquivo inteiro foi corrompido. |
| 11:09 | Você trocou confiabilidade por performance. |
| 11:12 | E isso é válido, por exemplo, se você tá configurando um servidor de cache, onde se |
| 11:16 | os dados forem corrompidos, consegue reconstruir porque tem os originais em outro lugar. |
| 11:21 | As aplicações tentam facilitar as escolhas pra você, por isso às vezes você não sabe |
| 11:25 | o que está acontecendo. |
| 11:26 | Por exemplo, toda vez que reinstala um Windows, ou qualquer distro Linux moderna, só precisa |
| 11:31 | ir dando next, next, next e o instalador é inteligente o suficiente pra fazer as escolhas |
| 11:35 | mais sensíveis e você nem precisa entender o que ele fez. |
| 11:39 | Uma dessas escolhas é como particionar seu HD, como gravar uma partição de boot, qual |
| 11:44 | sistema de arquivos escolher e formatar. |
| 11:46 | Em poucos minutos você parte de um HD virgem pro sistema operacional instalado e funcionando. |
| 11:51 | Nem sempre foi assim. |
| 11:53 | Talvez tirando os Macs, que mesmo nos anos 90 tinha 100% de controle do hardware e do |
| 11:58 | software, então ele sabia exatamente que HDs estavam instalados e como formatar da |
| 12:02 | melhor forma. |
| 12:03 | A vantagem da idéia de comoditizar PCs da IBM é que você podia comprar os componentes |
| 12:08 | separadamente, um chip compatível com x86 só que da Cirrus, uma placa mãe talvez da |
| 12:13 | Soyo, uma placa de som da Sound Blaster, um modem da US Robotics, e um HD ou Winchester |
| 12:19 | como a gente chamava naquela época da Seagate. |
| 12:21 | Agora você quer instalar MS-DOS ou um UNIX ou uma das primeiras versões de Linux no |
| 12:26 | começo dos anos 90. |
| 12:27 | Boa sorte. |
| 12:28 | Falando especificamente de Linux, primeiro você ia encomendar uma distro comercial como |
| 12:33 | um RedHat. |
| 12:34 | A versão 4.2 foi minha segunda distro. |
| 12:36 | Daí coloca o disquete de boot pra inicializar o sistema, detectar o hardware que a BIOS |
| 12:41 | já achou, carregar os drivers mais básicos pra cada componente. |
| 12:44 | No final ele monta um ramdisk, que é o equivalente a um volume de HD só que na memória. |
| 12:49 | Agora você troca o disquete e coloca o de root ou suplemento como a RedHat costumava |
| 12:54 | chamar. |
| 12:55 | Ele vai montar esse disquete como o diretório /usr no ramdisk. |
| 12:59 | Agora ele tem as ferramentas pra continuar. |
| 13:01 | O próximo passo é detectar seu HD, se é IDE ou SCSI, carregar o driver e te dar a |
| 13:05 | opção de particionar os volumes usando o temido `fdisk`. |
| 13:10 | Se você já teve o azar de cair num sistema que só te dá fdisk, e você nunca usou na |
| 13:15 | vida, vai ser difícil. |
| 13:16 | Só no fim dos anos 90 a RedHat adicionou a ferramenta Disk Druid que já ajuda muito, |
| 13:21 | e hoje em dia você tem um GParted ou equivalente que vai particionar seu HD automaticamente, |
| 13:26 | indicar onde você tá errando, e você nem precisa saber muitos detalhes. |
| 13:30 | Mas fdisk não, fdisk ele te pede pra criar a partição nativa que vai montar como o |
| 13:34 | root ou barra, a partição de swap e pra fazer isso você precisa digitar o número |
| 13:38 | do primeiro e do último CILINDRO. |
| 13:40 | Daí ele te mostra informações como setores ou sectors e cabeças ou heads. |
| 13:46 | Esse é o sistema CHS, cylinder-sector-head que são as coordenadas que definem a geometria |
| 13:52 | tridimensional do seu HD. |
| 13:54 | Se você nunca pensou nisso, vou resumir. |
| 13:56 | Se você abrir um HD mecânico, vai encontrar vários discos organizados um em cima do outro. |
| 14:01 | Em cima de cada disco vai ter um braço com uma cabeça na ponta, que é quem lê e escreve |
| 14:06 | de fato no disco. |
| 14:07 | Cada cabeça identifica um dos discos. |
| 14:09 | Quantas cabeças tem depende do HD. |
| 14:12 | Agora, como se organiza o disco? |
| 14:13 | Na época do LP de música, o disco de vinil era organizado numa trilha espiral. |
| 14:18 | Você coloca a cabeça no começo da espiral, mais pra borda do disco e enquanto gira, a |
| 14:23 | cabeça vai deslizando dentro da trilha, lendo o engruvinhado que representa as ondas, que |
| 14:28 | ele traduz como som. |
| 14:29 | E o final da trilha é perto do meio do disco. |
| 14:32 | HDs não são espiral, em vez disso é um conjunto de anéis um dentro do outro. |
| 14:37 | É isso que chamamos de cilindro. |
| 14:39 | A distância de cada cilindro varia de acordo com a evolução da tecnologia magnética |
| 14:43 | da cabeça. |
| 14:44 | Se os cilindros estiverem muito perto e o motor não tiver precisão suficiente, poderia |
| 14:48 | acabar pulando cilindros. |
| 14:50 | Então o número de cilindros é limitado pela resolução da cabeça e o limite onde |
| 14:54 | o magnetismo causa interferência. |
| 14:56 | Em vez de ser um engruvinhado físico dentro da trilha como num disco de vinil, no caso |
| 15:02 | de HD as trilhas são magnéticas. |
| 15:04 | A cabeça serve pra magnetizar ou desmagnetizar um bit de cada vez. |
| 15:09 | Faz de conta que se tem uma carga então é 1, se tira a carga é zero. |
| 15:13 | Se as trilhas, ou cilindros ficarem pertos demais, a carga de um bit poderia afetar o |
| 15:17 | estado do outro bit. |
| 15:19 | Aliás, um jeito fácil de estragar um HD é colocar um ímã forte perto. |
| 15:23 | Isso é verdade até hoje. |
| 15:24 | Um HD moderno tem mais de 16 mil cilindros por lado do disco. |
| 15:29 | A estrutura de dados que identifica cada cilindro tem 16-bits então é possível ter até 65 |
| 15:35 | mil quinhentos e trinta e seis cilindros. |
| 15:37 | Eu acho que ainda não estamos perto de atingir esse limite. |
| 15:39 | À medida que a precisão do motor e das cabeças foi aumentando a gente pulou de menos de 4 |
| 15:43 | mil cilindros nos anos 90 até mais de 16 mil hoje. |
| 15:47 | Por isso dá pra ter HDs com 18 terabytes ou mais. |
| 15:51 | Um disco pode ser escrito dos dois lados, assim como você pode virar um vinil e do |
| 15:56 | outro lado tem mais música. |
| 15:57 | Como num HD não tem como "virar" o disco, ele vai ter duas cabeças por disco. |
| 16:02 | Numa estrutura padrão de 8-bits significa que podemos identificar até 256 cabeças, |
| 16:07 | numeradas de 0 a 255, isso dá um máximo de 128 discos. |
| 16:11 | Na prática, duvido que existe um HD que chega perto de 128 discos. |
| 16:15 | Continuando, esses cilindros são organizados em setores. |
| 16:19 | Dependendo do sistema operacional, sistema de arquivos, os setores podem variar de tamanho. |
| 16:24 | Um dos tamanhos mais comuns era 512 bytes. |
| 16:26 | Hoje em dia acho que é 4 kilobytes. |
| 16:28 | Estou especulando, mas eu acho que essa divisão existe pra ajudar a fragmentar menos os dados. |
| 16:34 | Fora que não seria eficiente movimentar o motor pra ler um bit de cada vez. |
| 16:37 | Ele vai ler blocos de bits de cada vez. |
| 16:40 | Na realidade acho que mais de um setor. |
| 16:42 | Pra ler os bits no disco, o motor precisa mover a cabeça de uma borda a outra do disco, |
| 16:48 | passando pelos cilindros. |
| 16:49 | Digamos que você tenha um arquivo de 100 bytes. |
| 16:52 | Agora imagine que você usou um sistema de arquivos bem estúpido que vai gravando cada |
| 16:56 | byte em lugares aleatórios no disco. |
| 16:58 | O pobre motor vai precisar trabalhar bastante pra achar cada byte. |
| 17:02 | É um motor mecânico, se cada byte estiver num cilindro, isso vai fazer o motor trabalhar |
| 17:06 | bastante e tudo vai ficar lento. |
| 17:08 | Agora, se os mesmos 100 bytes estiverem organizados sequencialmente, um byte atrás do outro, |
| 17:14 | o motor só precisa ter o trabalho de chegar no primeiro byte do cilindro e pronto, girar |
| 17:18 | o disco é mais fácil que mover a cabeça. |
| 17:20 | Então é só deixar o disco girar e quando eu achar o primeiro byte vou lendo sequencialmente |
| 17:25 | um atrás do outro. |
| 17:26 | Isso minimiza o trabalho do HD. |
| 17:29 | Digamos que você tenha um arquivo de 21 mil e trezentos bytes, ou mais ou menos 21 ponto |
| 17:34 | oito megabytes. |
| 17:35 | Se dividir em setores de 512 bytes e arredondar, porque não dá pra ter números quebrados, |
| 17:40 | seriam 42 setores. |
| 17:42 | Mas isso daria um total de 21 mil quinhentos e quatro bytes, isso é duzentos e quatro |
| 17:47 | bytes maior que nossos 21 mil e trezentos. |
| 17:49 | E agora? |
| 17:50 | Na prática o HD vai reservar quarenta e dois setores. |
| 17:53 | Ele vai usar quarenta e um setores inteiros e o último vai ocupar só trezentos e oito |
| 17:57 | e deixar livre duzentos e quatro bytes. |
| 17:59 | E esses duzentos e quatro bytes tão perdidos, não dá pra usar eles pra outro arquivo. |
| 18:04 | Como os arquivos do seu sistema operacional e os que você produz nunca vão ser exatamente |
| 18:08 | múltiplos de quinhentos e doze ou seja lá qual for o tamanho do setor, sempre o último |
| 18:13 | setor vai desperdiçar alguns bytes de espaço inusável. |
| 18:17 | E isso é normal. |
| 18:18 | É um dos motivos de porque o total ocupado no seu HD não é a soma do tamanho em bytes |
| 18:23 | de todos os arquivos. |
| 18:24 | Na prática vai ser um pouco mais, porque precisa ser múltiplo do tamanho do setor. |
| 18:29 | Eu sempre falo que computação é um trade off. |
| 18:31 | Pra ter zero desperdício de espaço, era só fazer cada setor ser 1 bit. |
| 18:35 | Mas você já deve ter entendido que além de fragmentar bastante, isso ia fazer o motor |
| 18:40 | do nosso HD suar sangue pra ler depois. |
| 18:42 | Com isso você entende porque a velocidade num HD nunca é constante. |
| 18:46 | Depende do tamanho do arquivo, da fragmentação do drive. |
| 18:49 | O problema é que nunca temos como saber se o drive vai ter mais arquivos muito pequenos |
| 18:54 | ou poucos arquivos muito grandes. |
| 18:56 | Por isso também costuma ser ordens de grandeza mais rápido ler um único arquivo gigante, |
| 19:01 | tipo um zip grande ou um video ou um arquivo de ISO de 500 gigabytes em vez de quinhentos |
| 19:06 | mil arquivos de 1 megabyte cada. |
| 19:08 | O tamanho total é o mesmo, mas o número de operações do HD vai ser muito maior e |
| 19:14 | é isso que mais afeta a velocidade. |
| 19:15 | O arquivo grandão tende a ter seus setores próximos. |
| 19:19 | Mesmo com alguma fragmentação, você dá a ordem pro HD e ele só tem que se preocupar |
| 19:23 | com uma sequência. |
| 19:24 | Mas no caso de quinhentos mil arquivos, você vai ter que dar quinhentos mil comandos de |
| 19:29 | leitura e pra cada arquivo o motor vai ficar se movendo pra achar onde no disco tá cada |
| 19:34 | um. |
| 19:35 | Isso que chamamos de overhead, o trabalho extra de ter que receber milhares de comandos |
| 19:39 | em vez de só um. |
| 19:41 | Conseguem imaginar esse trampo? |
| 19:42 | Não é à toa que um HD vai se deteriorando com o tempo. |
| 19:45 | Daí como a gente não sabe se vai ter mais arquivos pequenos ou mais arquivos grandões, |
| 19:49 | também precisamos achar um tamanho de setor que balanceia desperdício de espaço no último |
| 19:54 | setor de um arquivo e não pode ser tão pequeno que vai fazer o HD ser mais lento tendo que |
| 19:59 | caçar muitos setores por arquivo. |
| 20:01 | Se eu quiser ter pouca ou nenhuma fragmentação, basta fazer setores gigantes, mas aí cabe |
| 20:06 | poucos arquivos. |
| 20:07 | Se eu quiser ter milhões de pequenos arquivos, desperdiçando pouco espaço, basta fazer |
| 20:11 | o setor ser o menor possível, só que aí a velocidade vai cair drasticamente. |
| 20:15 | Trade off. |
| 20:16 | Na maioria dos sistemas de arquivos o tamanho do setor não é menor que 512 bytes e em |
| 20:22 | alguns casos pode ser mais próximo de 4 kilobytes. |
| 20:25 | Isso desperdiça um pouco de espaço, mas o preço veio caindo então hoje temos espaço |
| 20:29 | sobrando, daí dá pra desperdiçar espaço pra ter mais velocidade. |
| 20:33 | Se estiver no Windows e quiser saber, basta abrir um command prompt com permissão de |
| 20:38 | administrador e rodar `fsutil fsinfo ntfsinfo c:` ou outro drive. |
| 20:44 | No meu caso por exemplo meu C: tem setores de 4 kilobytes e meu I: tem 512 bytes. |
| 20:51 | Voltando à nossa instalação de Linux RedHat do meio dos anos 90, cá estamos frente à |
| 20:56 | frente com essa tela de fdisk pedindo pra gente adivinhar o tamanho das partições |
| 21:01 | baseado em cilindros. |
| 21:02 | Antigamente o tamanho máximo de um HD era pouco menos de 8 gigabytes. |
| 21:07 | Eu falei que cada gigabyte custava uns 15 dólares? |
| 21:09 | Então isso era um HD de uns 120 dólares. |
| 21:12 | Em 2021 isso é o preço de um HD Barracuda de 6 Terabytes. |
| 21:16 | Quase mil vezes maior. |
| 21:18 | Esse HD Barracuda de cinco mil e quatrocentas rotações por minuto, diz a propaganda que |
| 21:23 | consegue uma velocidade máxima de 6 gigabits por segundo. |
| 21:27 | Como é em bits, precisa dividir por 8 pra ter em bytes, que é uns 700 megabytes por |
| 21:32 | segundo. |
| 21:33 | Mas isso é velocidade teórica de pico. |
| 21:34 | Na prática num HD desses você vai ter sorte se conseguir mais que uns 300 megabytes por |
| 21:39 | segundo, em média. |
| 21:40 | Pra piorar nossa conta, HDs modernos mais caros tem módulos de memória RAM. |
| 21:44 | Ou no caso de Intel Optane, tem um mini SSD de cache. |
| 21:48 | A Barracuda tem duzentos e cinquenta e seis mega de RAM. |
| 21:51 | Isso é pelo menos dezesseis vezes mais RAM do que eu tinha no meu PC em 1995, e é só |
| 21:56 | pra cache. |
| 21:57 | A vantagem de ter RAM no HD que ele pode manter dados mais acessados na memória daí não |
| 22:02 | precisa movimentar o motor pra pegar nos discos, por exemplo. |
| 22:04 | É uma das formas do HD mecânico ficar mais rápido. |
| 22:07 | Mais do que isso, quando você pede pra gravar seu arquivo na realidade você não pede pro |
| 22:12 | HD. |
| 22:13 | Você pede pro seu sistema operacional como seu Windows e o Windows que vai fazer o pedido |
| 22:17 | pro HD. |
| 22:18 | O HD tem RAM, mas sua máquina também tem RAM e o Windows vai primeiro gravar em RAM, |
| 22:23 | esperar acumular mais operações de escrita, reordenar pra facilitar o trabalho e vai dar |
| 22:27 | "ok" e devolver o controle pro seu editor de textos. |
| 22:30 | Provavelmente ele nem mandou pro HD ainda. |
| 22:33 | Quando mandar o HD pode usar a RAM dela e dizer pro Windows que tá tudo ok também. |
| 22:37 | Isso parece inteligente não parece? |
| 22:39 | RAM é ordens de grandeza mais rápido que seu HD. |
| 22:42 | Eu disse que a velocidade do HD mecânico vai ser na faixa de 300 megabytes por segundo, |
| 22:47 | na média. |
| 22:48 | Um pente de memória DDR4 de 3600 megahertz tem picos de velocidade de 28 GIGAbytes. |
| 22:54 | Isso é quase cento e cinquenta vezes mais rápido. |
| 22:57 | É isso que significa diferença de ordens de grandeza. |
| 23:00 | O problema desses níveis de cache no meio do caminho é que antigamente, quando você |
| 23:04 | recebia OK que o arquivo foi gravado, com grande probabilidade ele realmente foi gravado. |
| 23:09 | Se daqui 1 segundo a energia da sua casa cair e desligar seu computador, pelo menos aquele |
| 23:14 | último arquivo com certeza gravou no seu disco. |
| 23:16 | Hoje, se a força cair, você não tem certeza que o arquivo foi gravado. |
| 23:21 | Provavelmente foi, porque é rápido, mas não se sabe. |
| 23:23 | Num desktop, computador doméstico, tudo bem, porque raramente vai dar coincidência de |
| 23:28 | você estar no meio da operação de escrita e a energia cair. |
| 23:31 | Mas num servidor, tipo do Dropbox, com milhões de pessoas subindo arquivos sem parar, as |
| 23:36 | chances de perder dados se a energia cair é alta. |
| 23:39 | Por isso data centers tem tantos sistemas de redundância. |
| 23:43 | O sistema de RAID que eu falei é só uma das peças do Lego deles. |
| 23:46 | Enfim, acabei dando uma tangente. |
| 23:48 | O ponto é que todas essas peças móveis, dos HDs mecânicos até seu programa, tem |
| 23:53 | muitas camadas no meio do caminho, muitos caches, e uma pane em alguma dessas camadas |
| 23:58 | vai fazer você perder arquivos. |
| 23:59 | Felizmente em 2021 as chances de você perder ou corromper arquivos é menor do que na minha |
| 24:04 | época de MS-DOS e Winchesters de meros 20 megabytes que custavam uma fortuna. |
| 24:09 | E eu ainda não terminei o fdisk do Linux que tava instalando. |
| 24:13 | Se prestar atenção, mesmo o fdisk de 1997 já tem uma ajuda. |
| 24:17 | Nas primeiras versões você precisava saber tudo o que eu falei até agora sobre a geometria |
| 24:22 | física dos HDs. |
| 24:23 | Se eu tinha um HD de 8 giga, ia querer reservar uma partição de swap de uns 128 megabytes, |
| 24:28 | que era o máximo. |
| 24:29 | Olha só essa tela do fdisk. |
| 24:31 | Eu dou `p` pra dar `print` nas partições. |
| 24:34 | Não tem nada. |
| 24:35 | Daí dou `n` pra `new` ou nova partição. |
| 24:37 | Começo no cilindro 1. |
| 24:38 | Agora eu precisaria fazer esse cálculo que ele mostra acima. |
| 24:41 | Unidade é cilindros vezes 16 mil sessenta e cinco setores, onde cada setor tem quinhentos |
| 24:47 | e doze bytes, então cada cilindro pode ter uns 8 megabytes. |
| 24:50 | Em cima ele fala que meu disco pode ter até mil e vinte e quatro cilindros, cada cilindro |
| 24:55 | com sessenta e três setores, indo de zero até duzentos e cinquenta e cinco heads ou |
| 24:59 | cabeças. |
| 25:00 | Claro que meu HD vai ter menos que isso. 128 megabytes é do cilindro 1 até dezessete, |
| 25:06 | o que vai dar cento e trinta e seis blocos. |
| 25:08 | O fdisk assume cada bloco tendo uns mil e vinte e quatro bytes. |
| 25:12 | Pra chegar no número de cilindros é só dividir os cento e vinte e oito que eu quero |
| 25:16 | por mil e vinte e quatro. |
| 25:17 | Pra ter o número de blocos por cilindro é só dividir a unidade, os quase 8 gigas por |
| 25:22 | mil e vinte e autro. |
| 25:23 | Isso dá o número de blocos por cilindro que são uns oito mil. |
| 25:26 | Agora é multiplicar isso pelo número de cilindros pra cada partição. |
| 25:30 | Cento e vinte e oito mega dividido por 8 vai dar dezesseis e uns quebrados, por isso arredonda |
| 25:35 | pra 17. |
| 25:36 | Achou chato? |
| 25:37 | Pois é, isso era chato. |
| 25:38 | Agradeça que os aplicativos de particionamento hoje fazem todas essas contas pra você. |
| 25:43 | Na realidade, a partir de 2002 com o padrão ATA-6 finalmente mudamos pro sistema de endereçamento |
| 25:49 | linear de 48-bits chamado LBA ou Logical Block Addressing. |
| 25:54 | E com isso esse sistema CHS de cilindro, cabeça, setor foi declarado obsoleto. |
| 25:59 | LBA é um mapeamento de endereços lineares em cima do sistema de CHS que o HD entende |
| 26:05 | fisicamente por baixo. 2 elevado a 48 dá um máximo de duzentos e cinquenta e seis |
| 26:10 | terabytes. |
| 26:11 | Parece bastante pra uso doméstico, mas pra servidores não é tanto assim não. |
| 26:14 | Por isso depois foi de 48-bits pra 64-bits. |
| 26:18 | Assim você endereça o disco do endereço zero até duzentos e cinquenta e seis teras. |
| 26:23 | E por baixo ele vai converter em cilindros, cabeças e setores como antes. |
| 26:27 | Você vai notar que muito na programação é fazer "de-para" que é conversão de coisas |
| 26:31 | complicadas em coisas mais simples. |
| 26:34 | Tabelas de-para é que nem um dicionário, você traduz as coordenadas tridimensionais |
| 26:38 | do disco por exemplo, cilindro, cabeças e setores num número. |
| 26:41 | E pro sistema operacional, pra você como programador, é como se fosse um arrayzão |
| 26:46 | gigante de 0 até aquele máximo. |
| 26:48 | À medida que as coisas evoluem a gente pode desperdiçar um pouco de memória e processamento |
| 26:52 | em ficar fazendo essas conversões. |
| 26:55 | Desta vez vou quebrar o assunto em múltiplos episódios. |
| 26:58 | Eu fui escrevendo e no final deu quase 80 páginas de coisas que se eu tentar explicar |
| 27:02 | tudo de uma só vez vai ficar complicado demais. |
| 27:04 | Acho que por hoje já foi o suficiente, mas não se preocupem que eu já escrevi a continuação |
| 27:08 | então o próximo episódio vai chegar mais rápido dessa vez. |
| 27:12 | Se ficaram com dúvidas mandem nos comentários abaixo, não deixem de assinar o canal e clicar |
| 27:16 | no sininho pra não perder a continuação, e compartilhem o video pra ajudar o canal. |
| 27:21 | A gente se vê, até mais. |
