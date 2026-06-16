# Detecção e Correção de Erros | Introdução a Redes Parte 2

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=3W-8TQJwuWY
- **Duração:** 29:59
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita No episódio anterior eu quis trazer algumas |
| 0:04 | noções de como dados trafegam por redes cabeadas ou wireless. Isso porque ultimamente andei |
| 0:10 | brincando com coisas como meu novo NAS. Mas antes de poder falar dele e coisas que andei prometendo |
| 0:14 | como Docker, achei que finalmente chegou a hora de falar um pouquinho sobre redes. Como já tinha |
| 0:19 | falado antes, estou longe de ser especialista de redes, então quero explicar as coisas do ponto de |
| 0:23 | vista mais de alguém que é programador e usa a rede mais do que monta redes. |
| 0:28 | No episódio de hoje quero explorar o motivo de porque eu montei um NAS: evitar perder dados. |
| 0:33 | A maioria das pessoas hoje tá acostumado a um mundo plug and play, sempre conectado, |
| 0:38 | serviços de cloud e tudo mais e tem muito menos preocupação com seus dados. Na real, |
| 0:42 | a maioria não tem dados tão importantes que se perder vai ser um grande problema mesmo. |
| 0:46 | Por isso acho que não tem problema. Se perder, perdeu. Se doeu, deveria ter se precavido. Mas |
| 0:52 | programadores eu acho que deveriam ter um pouco mais de cuidado, especialmente porque |
| 0:56 | lidam com dados dos outros. Sobre isso tem dezenas de assuntos que |
| 1:00 | poderíamos falar, como segurança de dados, mas hoje quero falar só sobre os blocos mais básicos |
| 1:04 | de como erros podem acontecer e como a ciência da computação vem resolvendo esses problemas desde |
| 1:10 | pelo menos os anos 60. (...) |
| 1:19 | Veja meu NAS. Ele está construído numa configuração RAID-6. Mas vamos falar de |
| 1:25 | novo do formato mais simples, só 2 HDs. Se ainda não assistiu minha playlist de armazenamento, |
| 1:30 | vou resumir só essa parte de novo. Com dois HDs eu posso fazer 2 coisas: |
| 1:34 | escolher segurança ou escolher performance. Se eu for um gamer que posso baixar tudo de novo da |
| 1:38 | Steam caso perca os HDs, talvez faça sentido colocar em modo RAID-0. Nesse modo o sistema |
| 1:44 | operacional vai enxergar os dois HDs num único volume lógico. Se os HDs tem 1 terabyte cada, |
| 1:50 | em RAID-0 o volume lógico, o meu "C:\" no Windows, vai ter 2 terabytes inteiros e vou ter quase o |
| 1:56 | dobro de performance, porque posso escrever nos dois ao mesmo tempo. |
| 1:59 | Lembram o que já expliquei antes sobre arquivos e transmissão de dados em geral? |
| 2:03 | A maioria das pessoas olha um Windows Explorer e assume que a menor unidade são arquivos. Os |
| 2:09 | sistemas operacionais escondem os detalhes e mesmo programadores só lidam no máximo |
| 2:13 | com arquivos na maior parte do tempo. Mas isso é ineficiente. HDs não são dispositivos de arquivos, |
| 2:19 | são dispositivos de blocos. Por isso o serviço da Amazon onde posso instalar um HD virtual na |
| 2:25 | minha máquina virtual do EC2 se chama EBS ou Elastic Block Store. Ele nos dá um dispositivo |
| 2:31 | de blocos. Eu explico isso nos videos sobre armazenamento, assistam lá depois. |
| 2:35 | No episódio passado eu falei que comunicação de redes usa hoje em dia comutação de pacotes. |
| 2:40 | Pacotes são essencialmente blocos de bits. Por isso tenha na cabeça que tanto arquivos no seu |
| 2:46 | sistema como transfência desses arquivos pela rede, acontecem de forma fragmentada, |
| 2:51 | um pacote de cada vez e não um arquivo inteiro de uma vez. Por isso tenho o dobro de performance |
| 2:57 | num RAID-0. Se o sistema só enxergasse arquivos, quando fosse gravar, gravaria o |
| 3:01 | arquivo inteiro só em um HD, daí a velocidade máxima seria só desse HD. |
| 3:05 | Mas como na realidade a partição é uma tabela que tem um registro dizendo "arquivo hello.mp3 |
| 3:11 | tem 2000 blocos de 4 kilobytes cada, e os blocos de ID 1 até 1000 estão no HD 1 e os blocos de 1001 |
| 3:18 | até 2000 estão no HD 2", daí ele pode mandar gravar os blocos nos dois HDs ao mesmo tempo, |
| 3:23 | e por isso eu tenho mais velocidade tanto pra ler quanto pra gravar, |
| 3:26 | porque o arquivo pode ser segmentado nos dois HDs. Mas também por isso esse sistema de RAID-0 |
| 3:31 | tem um grande calcanhar de aquiles: e se um dos HDs sofrer um defeito e morrer? |
| 3:36 | Se um HD morrer, você perdeu tudo dos dois HDs. Entenderam? Por que alguns blocos dos arquivos no |
| 3:42 | HD que está vivo estavam no HD que morreu, então você ficou com um monte de arquivos quebrados que |
| 3:46 | não servem pra nada. Por isso que você nunca deve usar RAID-0 se os dados que tiver sejam |
| 3:51 | importantes. Se era só pra games que você pode recuperar tudo depois, beleza. Compra outro HD, |
| 3:56 | remonta o RAID-0, formata tudo, reinstala o Windows do zero e baixa tudo de novo da Steam. |
| 4:02 | A importância aqui era a performance e os dados tinha backup fora, então ok. |
| 4:06 | Mas se vai misturar com trabalho, e coisas que se perder vão te dar prejuízo, e só puder comprar |
| 4:11 | dois HDs, então coloque eles em RAID-1. Esse é o sistema de espelhamento. O seu sistema operacional |
| 4:17 | vai enxergar os dois HDs de 1 terabyte como se fosse um único HD de 1 terabyte. Toda vez que |
| 4:23 | mandar gravar um arquivo, o sistema vai mandar todos os blocos pros dois HDs e fazer uma cópia |
| 4:27 | idêntica, bloco a bloco. Então a performance vai ser a de 1 único HD, um pouco menos até |
| 4:33 | porque agora vai ter o trabalho de gravar no outro HD também. Quando ler, não vai ter quase |
| 4:37 | diferença. Em termos de performance, vai perder um pouco, então, qual a vantagem? |
| 4:41 | A vantagem é que se um dos HDs morrer, o sistema automaticamente elege o outro como HD primário |
| 4:47 | e na prática você nem vai notar. Seu sistema não vai crashear e vai poder continuar usando |
| 4:51 | tudo como antes. Zero perda de dados. Agora é só comprar outro HD, substituir o que falhou, |
| 4:57 | e no próximo boot o sistema vai copiar tudo do HD que sobrou pro HD novo, criando outra cópia |
| 5:02 | espelho. Aqui trocamos um pouco de performance e metade do espaço por segurança. |
| 5:07 | Pra entender os outros níveis de RAID com mais HDs, de novo, veja minha playlist sobre |
| 5:13 | armazenamento pra entender mais sobre isso de blocos e redundância de HDs, |
| 5:16 | mas pra hoje eu precisava que vocês tivessem na cabeça esse modelo de tradeoff de performance, |
| 5:22 | segurança e redundância. Isso porque poderia parecer que um RAID-1 é perfeito e vai deixar |
| 5:27 | seu sistema protegido. Isso é verdade até certo ponto. É muito raro de se ver, |
| 5:31 | mas um evento que acontece é bit rot ou degradação de bit ou simplesmente bit flip. |
| 5:37 | Entenda, qualquer sistema de armazenamento, seja um HD mecânico, seja um SSD que usa chips NAND |
| 5:43 | flash como também SD cards ou pendrives, seja memória RAM, tudo está sujeito a uma hora sofrer |
| 5:49 | algum tipo de degradação. O melhor é quando a falha é bem aparente e ele pára de funcionar |
| 5:54 | totalmente. O problema é quando ele continua funcionando mas os bits armazenados não são |
| 5:59 | mais confiáveis. Tudo é gravado magneticamente. Informação é um linguição de bits. Bits são cargas |
| 6:06 | eletromagnéticas, armazenadas ou transportadas num fio de cobre ou em ondas pelo ar. Qualquer |
| 6:11 | tipo de interferência eletromagnética poderia flipar bits aleatoriamente. |
| 6:16 | Por isso existe blindagem e todo um processo de fabricação pra evitar ao máximo qualquer tipo de |
| 6:22 | interferência externa, mas nada é perfeito. Escrevendo sobre isso me lembrou de duas |
| 6:26 | historinhas que seria legal vocês saberem. Em 18 de maio de 2003 aconteceu a primeira eleição |
| 6:32 | com voto eletrônico da cidade de Schaerbeek em Bruxelas. Milhões votaram eletronicamente pela |
| 6:38 | primeira vez. Tudo correu conforme esperado até o dia de contar e checar os votos. |
| 6:43 | Aí a comissão da eleição notou duas coisas fora do comum. Primeiro porque uma candidata razoavelmente |
| 6:49 | desconhecida ganhou milhares de votos a mais do que seria esperado. Mas a segunda coisa que |
| 6:55 | foi mais absurda é que o total de votos foi maior do que o total de pessoas que votaram! |
| 7:00 | Claramente isso é um problema e obviamente vocês imaginam o tanto de gente apontando o |
| 7:06 | dedo um pro outro atrás de fraude. Teve diversas investigações pra entender o que aconteceu, |
| 7:10 | se foi um bug ou manipulação, mas uma coisa chama a atenção. O excesso de votos contados |
| 7:16 | dava exatamente 4096 votos. Pra todo mundo, 4096 é só um número, |
| 7:22 | mas pra gente de computação, 4096 é um número muito específico. Se vocês não sentiram alguma |
| 7:27 | coisa quando ouviram o número, precisam praticar mais, porque é exatamente 2 elevado a 12. Lembra |
| 7:33 | quando eu falo que vocês precisam se acostumar a converter números decimais e pensar em binário? |
| 7:36 | Um número é uma cadeia de bits, digamos de 32 bits. Se você flipar o bit na posição 13, |
| 7:42 | vai dar esses 4096 a mais se lá estivesse zero. Não quer dizer que não houve fraude, |
| 7:47 | mas é muita coincidência alguém que fosse fraudar pensar num número exatamente assim. |
| 7:52 | O objetivo não é detalhar o caso, então depois Googlem pra saber como foram as investigações, |
| 7:57 | de fato encontraram bugs de segurança e coisas assim no software. Todo software de votação, ainda |
| 8:03 | mais na primeira vez, ainda mais se não foi visto e revisto, testado e retestado e auditado por |
| 8:08 | diferentes grupos de programadores independentes, certamente tem bugs importantes. Não é talvez, é |
| 8:14 | certeza absoluta. Mas mesmo assim, nenhum dos bugs encontrados conseguia explicar esse acidente em |
| 8:20 | particular. E uma hipótese que não dá pra provar, mas tem chances de acontecer, é que esse bit foi |
| 8:26 | flipado por raios cósmicos. Pois é, caso você não saiba, estamos o tempo |
| 8:31 | todo sendo bombardeados por milhares de partículas subatômicas que vieram de explosões de Supernovas, |
| 8:37 | que caem na Terra como raios cósmicos. Muitos experimentos delicados são feitos abaixo da terra, |
| 8:42 | com muita blindagem, pra tentar minimizar o efeito desses raios, onde qualquer mínima |
| 8:46 | variação da ordem de um elétron, pode mudar os resultados. Dependendo do estudo que achar |
| 8:51 | pode encontrar que é possível ter 1 bit flip por gigabyte de memória por ano. Sabe aquela tela azul |
| 8:57 | de Windows que só aconteceu uma vez e nunca mais e não teve motivo nenhum? Talvez tenha |
| 9:02 | sido um bit flip de raios cósmicos. Tem muito mais histórias do que essa das eleições |
| 9:06 | e só mais uma que eu achei interessante porque é um assunto que eu gosto, |
| 9:09 | foi num speedrun de 2013 de Super Mario 64, do usuário DOTA_Teabag. Speedrun pra quem não |
| 9:16 | sabe é competição pra ver quem consegue acabar um jogo no menor tempo possível. |
| 9:19 | Durante esse speedrun, ele esbarrou num glitch considerado impossível sem manipular o jogo. Num |
| 9:25 | determinado pedaço da fase, ele tava simplesmente pousando numa plataforma e fez um warp pra cima |
| 9:31 | do teto sem nenhuma razão. Todo mundo da comunidade tentou replicar isso, |
| 9:34 | usando emuladores, replicando exatamente os passos do Teabag frame a frame com scripts, |
| 9:39 | mas ninguém conseguiu replicar esse efeito. Isso porque pra realizar esse warp requer o que se |
| 9:45 | chama de um single event upset que é fora do controle do jogador. A única forma de replicar |
| 9:50 | o warp é fazendo um bit flip no número que representa o peso do Mario. Se você flipar |
| 9:55 | 1 bit mudando de C5 pra C4 hexadecimal isso dá o peso exato pra fazer o warp pra |
| 10:01 | cima naquele exato momento. De novo, é impossível dizer que foi isso, |
| 10:05 | mas a hipótese de novo é que raios cósmicos fliparam esse 1 bit naquela hora, causando |
| 10:10 | o warp. Mas o ponto é que bit flips acontecem, e raios cósmicos é só mais um fator numa enorme |
| 10:16 | lista de fatores que podem levar à corrupção de dados. Em particular quando usamos mídias |
| 10:22 | magnéticas pra armazenar e transportar dados. E se tudo isso ainda não te convenceu, não precisa |
| 10:26 | ir muito longe: quantos de vocês lembram da época de CDs piratas de games e como vocês gostavam de |
| 10:31 | esfregar o disco na camiseta e mesmo o disco tendo vários riscos, ele ainda funcionava. |
| 10:36 | Como pode essas coisas? Isso é tudo pra vocês entenderem que erros |
| 10:40 | e corrupção de dados são inevitáveis e se vocês nunca notaram isso é um testamento de como a |
| 10:45 | ciência da computação já conseguiu resolver a grande maioria desses problemas e pra todo mundo, |
| 10:50 | tudo simplesmente só funciona. Vamos recapitular. Imagine um arquivo de imagens como esse gato. |
| 10:55 | Obviamente é sempre um gato. Mas o que a gente vê é a representação visual de um linguição de bits. |
| 11:01 | Eu expliquei isso no episódio sobre compressão. Só por conveniência pra mostrar aqui na tela |
| 11:05 | posso representar essa linha contínua de bits quebrando em várias linhas, digamos, em linhas |
| 11:10 | de 11 bits. E eu posso organizar mais ainda cada linha de 11 bits como um bloco. |
| 11:16 | Em particular, vou organizar os 11 bits da primeira linha num bloco de 16 posições, |
| 11:21 | numerado de zero a quinze. As posições 0, 1, 2, 4, e 8 vamos reservar e eu preencho |
| 11:27 | as 11 posições seguintes com meus bits de dados. Agora vamos olhar metade dos bits e checar o que |
| 11:32 | chamamos de paridade. Paridade é literalmente se temos um número par ou número ímpar de |
| 11:37 | bits 1. Nesse caso temos 2 bits 1, então é par. E assim preenchemos o bit de paridade |
| 11:42 | na posição 1 com zero. Agora olhamos o próximo grupo e checamos |
| 11:46 | a paridade. Temos 3 bits 1, é ímpar então na posição 2 preenchemos esse outro bit de paridade |
| 11:52 | com 1. Agora que vimos os grupos de colunas na vertical, vamos checar grupos na horizontal. |
| 11:56 | Esse próximo grupo também tem número ímpar de bits 1. Portanto no bit de paridade da posição 4 |
| 12:01 | preenchemos com 1. E finalmente checamos o último grupo, que também tem número ímpar de bits 1, |
| 12:06 | portanto preenchemos o bit de paridade da posição 8 com 1. |
| 12:10 | Finalmente, checamos a paridade do bloco inteiro. Temos 8 bits 1, é par, |
| 12:15 | então o bit de paridade da posição 0 vai ser zero. Pode parecer complicado mas aguentem até o final |
| 12:20 | do exemplo pra eu explicar o que estamos montando aqui. Nesse momento criamos um bloco de 16 bits |
| 12:26 | pra carregar 11 bits de dados e 5 bits de checagem de paridade. Agora faz de conta que estamos |
| 12:31 | transmitindo esse bloco pela internet, sujeito a todo tipo de interferência eletromagnética, |
| 12:36 | erros de burst, degradação do material do fio e tudo mais, e um ou mais bits desse bloco vai |
| 12:42 | ser flipado no meio do caminho. Mas na outra ponta a gente não sabe disso. |
| 12:46 | Agora a outra ponta recebeu esse bloco. Duvido que vocês lembrem de cabeça como era o bloco original, |
| 12:51 | então vamos checar a paridade. Checamos o primeiro grupo e vemos número par de bits 1, |
| 12:56 | então o bit de paridade na posição 1 está correto com zero e sabemos que a 2a e 4a colunas parecem |
| 13:03 | ok. O próximo grupo tem um número par de bits 1 mas no bit de paridade na posição 2 está 1, |
| 13:08 | o que é um problema. Sabemos que tem um erro em algum lugar nessas últimas duas colunas. Mas como |
| 13:13 | já sabemos que a quarta coluna tava ok, o problema tá em algum lugar na 3a coluna. |
| 13:17 | Checando o próximo grupo, temos um número ímpar de bits 1 então o bit de paridade na posição 4 está |
| 13:23 | correto sendo 1, portanto sabemos que a 2a e 4a linha estão ok. E no último grupo temos um número |
| 13:29 | par de bits 1 mas o bit de paridade na posição 8 está 1 em vez de zero. Então temos algum problema |
| 13:34 | nessa duas últimas linhas. Mas já sabemos que a 4a linha tava ok pela checagem anterior, |
| 13:39 | portanto o erro tem que estar na 3a linha. E como já sabemos que tem algum erro na 3a coluna, |
| 13:45 | cruzando as duas sabemos que deve ter um erro na posição 10. Esse bit foi flipado. |
| 13:50 | Mais do que isso, olhando o bloco inteiro, vemos que a paridade é impar, então no bit de paridade |
| 13:56 | do bloco deveria estar 1 em vez de zero. Isso nos dá confiança de saber que só houve 1 bit |
| 14:01 | flip e não dois, portanto só o bit da posição 10 foi flipado. E se mudarmos de 1 pra zero, |
| 14:06 | jogarmos fora os 5 bits de checagem, temos o bloco correto original de 11 |
| 14:11 | bits que foi enviado. O que fizemos aqui foram duas coisas: |
| 14:14 | nós tivemos a capacidade de checar a existência de um bit flip, e ainda tivemos a capacidade de |
| 14:19 | recuperar o bit que foi danificado e recuperar o bloco inteiro. O que vocês acabaram de ver |
| 14:25 | foi o algoritmo de correção de erros Hamming Code, nomeado depois de seu criador Richard |
| 14:30 | Hamming. E essa é uma das formas que temos hoje pra correção de erros. |
| 14:34 | Essas animações devem ser familiares, porque peguei emprestado do excelente canal 3Blue1Brown, |
| 14:39 | que fez dois videos excelentes dois anos atrás explicando exatamente como funciona o Hamming |
| 14:44 | Code. E ele fez isso em conjunto com outro canal que vocês já viram eu mostrar aqui, |
| 14:49 | o do Ben Eater, que implementou Hamming Code em protoboards, em hardware, pra demonstrar como é |
| 14:54 | possível colocar correção de erros em hardware. Eu altamente recomendo que assistam os videos |
| 14:59 | deles pra saberem em detalhes como que isso funciona. Eu assisti esses videos dois anos |
| 15:03 | atrás e tava esperando uma oportunidade pra encaixar eles nos meus videos. Quem seguiu |
| 15:09 | minha recomendação de seguir os canais deles já deve ter visto. |
| 15:11 | Richard Hamming é um pesquisador da época que se programava em cartões perfurados. Imagina |
| 15:16 | você levar dias escrevendo um programa nesses cartões daí leva pra uma máquina mecânica que |
| 15:21 | vai ler esses cartões através dos furos. Mas vira e mexe ele erra um furo e registra a informação |
| 15:27 | errada. Se até hoje aquelas porcarias de máquinas de refrigerante não conseguem identificar seu |
| 15:31 | dinheiro, imagina uma máquina mecânica velha que tem que ler centenas de cartões sem errar nenhum |
| 15:37 | furo. Isso acontecia tanto que deixou o Hamming putaço. E não existe melhor forma de invenção do |
| 15:43 | que não se acostumar com problemas e sim coçar a própria coceira. E assim ele fez, e inventou |
| 15:49 | todo esse sistema de paridade do Hamming Code pra checar e corrigir erros. |
| 15:53 | A gente usa Hamming Code até hoje em coisas como memória ECC ou Error Correction Code em RAM de |
| 15:59 | workstations e datacenters. A memória que você tem no seu PC provavelmente não é ECC, mas o servidor |
| 16:05 | de cloud que armazena seus dados certamente tem ECC. E é por isso que coisas como raios cósmicos |
| 16:11 | não são aparentes no nosso dia a dia. Outra forma de correção de erros é o Reed-Solomon Code, que |
| 16:16 | é usado em CDs e Blu-Rays e é por isso que mesmo você riscando o disco, esfregando na sua camiseta, |
| 16:22 | ainda é possível ler os dados. Mas o mais astuto entre vocês assistindo poderia |
| 16:27 | pensar. Peraí, você tá me dizendo que pra um bloco de 11 bits eu precisei reservar mais 5 bits |
| 16:32 | pra redundância. Ou seja, 45% do espaço e banda de transferência foi desperdiçado pra isso? Então num |
| 16:38 | Blu-Ray de 40 gigabytes eu precisaria ter quase 20 gigabytes a mais só pra redundância? |
| 16:43 | Mas o mais astuto do mais astuto entre vocês talvez tenha notado que eu fui fazendo checagens |
| 16:49 | naquele bloco de metade em metade. Toda vez que em ciência da computação você vê procuras |
| 16:54 | feitas de metades de metades deveria vir à cabeça procura binária. Lembra os episódios |
| 16:59 | onde falei de árvores e porque árvores são uma das coisas mais importantes que todo |
| 17:03 | programador deveria ter em mente? Checamos 2 paridades de 2 grupos de colunas |
| 17:08 | verticais, depois 2 paridades de 2 grupos de linhas horizontais. Num bloco pequeno de 16 |
| 17:13 | bits precisamos fazer 4 perguntas de paridade pra localizar e corrigir o bit flipado. Mas e |
| 17:18 | num bloco bem maior, de 256 bits? Vamos precisar fazer só 8 perguntas de colunas e linhas, e pra |
| 17:24 | isso precisamos reservar só 8 bits de redundância. Ou seja, só 3% do tamanho dos dados e não 45% como |
| 17:31 | era no bloco de 16 bits. Quanto maior for o bloco, menor vai sendo a quantidade de bits de |
| 17:36 | redundância necessário. Esse é o poder da procura binária. E eis porque vocês precisam estudar |
| 17:42 | algoritmos e estruturas de dados. Estamos usando blocos de 16-bits só porque é mais |
| 17:47 | fácil de colocar aqui na tela ou pra você ver no seu celular. Mas um bloco de sistema de arquivos |
| 17:52 | costuma ter pelo menos uns 4 kilobytes de dados. Um bloco de rede costuma ter pelo menos 1500 bits. |
| 17:58 | Mas em rede não se usa nem Hamming e nem Reed Solomon. Só pra coisas como programa espacial |
| 18:04 | da Nasa, onde o Voyager por exemplo usa Reed Solomon Code pras transmissões. Hoje em dia se usa |
| 18:10 | variações de Reed Solomon pra fitas magnéticas, CDs, Blu-rays e toda mídia de armazenamento, |
| 18:15 | incluindo HDs. Você nem sabe disso, mas toda vez que um bloco de dados é gravado no disco, |
| 18:19 | o sistema calcula esses bits de redundância e grava no lugar apropriado no HD. |
| 18:24 | Então tá resolvido tudo então? Só usar Hamming ou Reed Solomon em tudo que tá tudo certo? |
| 18:29 | Mais ou menos. Por mais que eles sejam altamente eficientes e não gastem tantos bits assim, ainda |
| 18:35 | assim são bits extras, pra cada bloco de bits. A indústria de HDs por exemplo vem pesquisando |
| 18:40 | outras formas que sejam quase tão eficientes quanto Reed Solomon, mas perdem em 0.1% dos casos, |
| 18:46 | como o LDPC code. Reed Solomon tem complexidade O(n^2) o que significa que pra discos gigantes |
| 18:52 | de dezenas de terabytes leva muito tempo pra corrigir erros. Particularmente ruim em data |
| 18:56 | centers que tem arrays com centenas de HDs. Um LDPC atinge 99.9% de recuperação comparado com |
| 19:03 | Reed Solomon mas com complexidade O(n). É uma área ainda com pesquisas ativas. |
| 19:08 | Recuperar erros não só gasta bits extras de armazenamento como exige processamento pra |
| 19:14 | fazer essa correção. Imaginem agora switches de rede em escala de internet. Por isso eu acho que |
| 19:19 | em rede não se fala tanto em correção de erros e sim em checagem de erro. É muito menos trabalho |
| 19:24 | identificar que tem um erro, mas não recuperar esse erro. Se você tá fazendo aquele download |
| 19:29 | longo e vê a velocidade cair porque a internet da sua região é bem instável, não é tentativa |
| 19:33 | de correção de erros que tá acontecendo e sim repetição de pacotes. |
| 19:37 | Em rede, funciona mais ou menos assim. Seu arquivão de download é quebrado em vários pacotes, |
| 19:42 | enviados um atrás do outro. Seu PC vai recebendo esses pacotes e remontando o arquivo. Mas ele faz |
| 19:48 | uma checagem antes. Essa checagem é parecida com a checagem de bits de paridade do Hamming Code, |
| 19:54 | mas um pouquinho só mais sofisticado. No caso de internet falamos de checksum, em particular, |
| 19:59 | Internet 16-bits. Esse checksum é uma soma dos bits do bloco dividido por palavras |
| 20:05 | de 16-bits. Existem formas melhores como Fletcher's checksum ou CRC, que é Cyclic |
| 20:11 | Redundancy Check. Mas eu acho que ainda se usa Internet 16-bits mesmo. |
| 20:15 | De qualquer forma, entenda que existe essa checagem via checksum pra cada pacote. |
| 20:19 | Se for detectado que houve um bit flip ou coisas como burst, que é comum, |
| 20:24 | o pacote é rejeitado e seu PC manda aviso de volta pro servidor, "olha, o pacote ID xpto veio cagado, |
| 20:31 | manda de novo". Esse é NAK que falei antes. Daí o servidor manda o mesmo pacote outra vez. É um dos |
| 20:37 | motivos de porque você vê a velocidade de download caindo e flutuando. No caso de rede é mais barato |
| 20:42 | pedir o pacote de novo do que tentar corrigir ele. Correção é mais importante quando você não tem pra |
| 20:48 | quem pedir uma cópia original, como arquivos no seu HD, que só você tem. |
| 20:51 | No começo da internet a gente usava um serviço chamado Usenet, que usava o protocolo NNTP. |
| 20:57 | Pensa tipo um sistema de fóruns. Assim como o protocolo SMTP de email ou HTTP de web, |
| 21:03 | era outro protocolo baseado em texto puro de 8 bits. Ele foi feito pra transmissão de texto e |
| 21:08 | não arquivos binários. Pense em usenet como Wordpress que povo tenta entupir mais coisa |
| 21:14 | do que ele foi planejado pra fazer. Usenet foi feito pra sincronizar artigos de texto entre |
| 21:18 | diferentes servidores Usenet. Mas obviamente, a gente achou jeitos de entupir arquivos binários |
| 21:23 | pra fazer pirataria. Estamos falando de uma era anos antes de bittorrent. |
| 21:27 | Eu mesmo fiz muito isso na faculdade. A gente baixava imagens, software e tudo mais da Usenet. |
| 21:33 | O problema é que por diversas razões, os arquivos podiam acabar corrompidos. Erros |
| 21:38 | de conversão. Erros nos discos rudimentares dos servidores da época e tudo mais. Mas o |
| 21:43 | problema é que invariavelmente eles acabavam corrompidos. Primeiro, a gente precisa resolver |
| 21:47 | o problema de trafegar arquivos binários num protocolo de textos. |
| 21:51 | Os mais astutos já tem a resposta na ponta da língua. Base64. É uma forma de transformar |
| 21:57 | binários em textos de 7-bits. Base64 não é encriptação de jeito nenhum. O problema é |
| 22:03 | que se você tentar abrir um arquivo binário num notepad, não tem como dar copy e paste em outro |
| 22:08 | notepad e salvar o arquivo, vai corromper tudo, porque um editor de textos não reconhece todos |
| 22:12 | os símbolos binários. A solução é converter o binário num sub-conjunto de ASCII que um editor |
| 22:18 | de textos entenda e depois converter de volta num binário. O custo disso é gastar |
| 22:23 | um pouco mais de espaço. Cada dígito de Base64 representa exatamente |
| 22:27 | 6 bits de dados. Então 3 bytes de 8 bits cada do arquivo, ou seja, 3 x 8 ou 24 bits, |
| 22:34 | podem ser representados por 4 dígitos de 6 bits, que dá 24 bits também. Isso significa que a versão |
| 22:41 | Base64 do arquivo vai ser 133% maior do que o original. Um arquivo binário de 100 megabytes vai |
| 22:47 | virar 133 megabytes em Base64. Como arquivos podem ter tamanhos variados, |
| 22:52 | como um filme longo por exemplo, ou o instalador do Photoshop ou coisas assim, pra Usenet não |
| 22:58 | reclamar, a gente quebrava esse binários primeiro em múltiplos binários usando o bom e velho formato |
| 23:03 | rar ou WinRar, porque assim como Zip ele compactava o arquivo, mas diferente de zip, |
| 23:09 | ele permitia quebrar em múltiplos arquivos com final .rar2, .rar3 e assim por diante. E depois |
| 23:15 | que baixava todos os rars, o WinRar conseguia remontar e descompactar o original. |
| 23:20 | Então o processo era simples: faz vários arquivos rar, converte em texto Base64, |
| 23:25 | na época usando a ferramenta uuencode do UNIX, que significa unix to unix encode. Postava cada pedaço |
| 23:32 | em um artigo da Usenet. Do outro lado a gente baixava o base64 de cada pedaço, usava uudecode |
| 23:38 | pra conseguir os binários de volta, e usava um equivalente WinRar pra descompactar os arquivos |
| 23:43 | originais. Era assim que a gente fazia antes de Google Drive, Mega ou BitTorrent. |
| 23:48 | Como disse antes, a Usenet não foi feita pra transportar arquivos, e por inúmeras razões, |
| 23:53 | incluindo defeitos nesse monte de passos que a gente tinha que fazer, alguns bits acabavam |
| 23:57 | corrompidos. Então a gente precisava de uma forma de garantir que dava pra recuperar de |
| 24:01 | alguma forma após o download, caso notássemos que o arquivo veio corrompido. E aí surgiu a |
| 24:07 | idéia do Parchive ou arquivos .par ou a versão melhor que foi o Par2. Agora você podia baixar |
| 24:13 | os arquivos rar e também os arquivos par2, que era bem menores. E se o rar estivesse corrompido |
| 24:18 | na hora de descompactar, podia experimentar recuperar usando os arquivos .par2. |
| 24:23 | E o que é Par2? É basicamente aqueles bits de redundância como no exemplo do Hamming Code, |
| 24:29 | só que são os bits pra Reed Solomon Code, como eu disse que funciona pra CDs. Os |
| 24:34 | primórdios da Internet era muito legal porque a gente era obrigado a aprender |
| 24:38 | essas coisas se quisesse baixar pirataria. Eu me lembrei disso porque recentemente decidi |
| 24:42 | fazer backup dos videos originais aqui do canal em M-Discs ou Millennial Disc, |
| 24:47 | a evolução dos discos Blu-Ray. É tecnologia nova, de 2010 pra cá. E me perguntaram se não era bom |
| 24:53 | eu fazer parchives pra gravar junto, eu até fiz, mas acho que não precisava. |
| 24:57 | De curiosidade pra quem não sabia, CDs, DVDs e Blu-rays comerciais comuns, vem com uma camada |
| 25:02 | de proteção pra proteger contra riscos leves, aquela esfregada leve na camiseta. Porém, |
| 25:07 | essa camadinha é feita de material orgânico que reage com oxigênio e umidade do ar. Significa que |
| 25:13 | mesmo que você guarde com todo cuidado possível, eventualmente essa camada vai degradar e você |
| 25:18 | pode acabar com um disco que não dá mais pra ser lido. Pode demorar 10 anos, demorar um pouco mais, |
| 25:23 | mas é questão de tempo. Sua coleção de CDs não vai durar pra sempre a menos que esteja numa |
| 25:28 | câmara a vácuo com zero umidade e temperatura controlada. E mesmo com os bits de redundância |
| 25:33 | de Reed Solomon, você vai perder dados se essa camada danificar o suficiente. |
| 25:38 | Por isso escolhi M-Discs. Eles são basicamente Blu-rays só que a camada de proteção é feita de |
| 25:43 | material inorgânico, não reagente, não oxidante. Só pra ter uma imagem, pensa uma camada de |
| 25:49 | proteção feita de pedra. Em testes de mais de 250 horas sob temperaturas de 90 graus Celsius, |
| 25:55 | 85% de umidade, mesmo assim os discos permanecem intactos. Por isso se chamam millennial discs, |
| 26:01 | são discos feitos pra durar mil anos, sob condições adversas. Perfeitos pros meus backups. |
| 26:06 | Alguns vieram sugerir fitas magnéticas, mas nesse mesmo nível de durabilidade, |
| 26:11 | custam ordens de grandeza mais caro por gigabyte. |
| 26:14 | E eu disse que não precisava ter manualmente criado arquivos par2 com os bits de Reed |
| 26:19 | Solomon Code porque um Blu-ray por padrão já tem esses bits. Hoje em dia tem poucos motivos |
| 26:24 | pra se preocupar com bits de redundância porque a maioria dos sistemas de armazenamento modernos |
| 26:29 | tem esse cuidado, incluindo seu SSD e seu HD. Só sua RAM que ainda não porque memória ECC é |
| 26:35 | bem mais cara. Mas como no mundo caseiro a gente dá refresh nessa RAM porque bootamos toda hora, |
| 26:39 | a chance de um bit flip causar problemas é muito baixa. De vez em quando, uma tela azul de Windows |
| 26:44 | sem motivo nenhum, é a rara consequência que você vai encontrar. |
| 26:48 | Hoje em dia não precisamos baixar arquivos par pra recuperar downloads corrompidos, |
| 26:52 | mas muitos sites de downloads você já deve ter visto um código md5 ou sha1 junto pra checar a |
| 26:58 | integridade do binário. Eu já expliquei sobre isso no episódio de criptografia, |
| 27:02 | mas um sha1 é um algoritmo de hashing, um tipo de checksum. Se baixarmos a ISO de uma distro |
| 27:08 | de Linux, e tiver sequer um bit flip, passando por sha1 o hash resultante vai ser completamente |
| 27:13 | diferente do hash original que deveria ser. Por isso é um mecanismo importante pra sabermos se |
| 27:18 | não houve bit rot ou mesmo manipulação no meio do caminho. Sha1 é muito superior a uma mera |
| 27:24 | checagem de paridade, mas também custa mais caro pra processar. |
| 27:27 | Menciono isso porque já que comecei falando de NAS, em sistemas de RAID como o Linux Raid ou |
| 27:33 | sistemas de arquivos realmente modernos como Btrfs ou ZFS que expliquei no último episódio da série |
| 27:39 | de armazenamento, eles oferecem proteção contra erros e exigem rodar uma tarefa em background com |
| 27:45 | alguma periodicidade chamada Data Scrubbing. No ZFS tem um comando justamente chamado `scrub` pra |
| 27:50 | isso, detectar e corrigir data rot. No meu NAS também tem essa opção de agendar um |
| 27:55 | data scrubbing a cada 3 meses ou o período que eu quiser. Não precisa rodar sempre. Mesmo o HD tendo |
| 28:01 | suporte a Reed Solomon Code, nem isso garante que vai estar tudo ok. Checar e corrigir erros |
| 28:06 | é uma tarefa que custa processamento e tempo, por isso não se roda toda hora. Ele vai usar coisas |
| 28:11 | como checksum de cada arquivo, equivalente ao que falei de checar o hash depois de um download, pra |
| 28:15 | ver se o arquivo está intacto. Isso exige ler e calcular em cima de todos os bits do arquivo. |
| 28:21 | Por isso custa processamento. Se coisas como o checksum ou paridade não baterem, |
| 28:25 | ele usa a cópia redundante do RAID pra reconstruir o pedaço com danificado. E vai fazendo isso |
| 28:30 | arquivo a arquivo. Se tiver poucos erros é fácil de consertar, mas se deixar acumular por chegar |
| 28:35 | num estado que é impossível recuperar, por isso se roda data scrubbing periodicamente. |
| 28:40 | Como disse antes, pra maioria de vocês, tudo isso é invisível. Se um pacote na rede é corrompido, |
| 28:45 | seu sistema pede pro servidor reenviar os pacotes. Se um arquivo é levemente corrompido |
| 28:50 | na hora de gravar no seu HD, ele tem sistemas pra se auto corrigir. Com exceção de desastres graves, |
| 28:55 | você raramente tem problemas de ver corrupção de dados. Seu streaming sempre funciona, |
| 29:00 | as páginas que carrega sempre vem inteiros, e tudo isso porque pesquisadores como Hamming, |
| 29:05 | Reed, Solomon, Shannon e muitos outros criaram as bases pra que |
| 29:09 | tudo isso funcione. Mas de qualquer forma é bom saber porque as coisas funcionam num |
| 29:14 | ambiente hostil onde corrupção de dados deveria ser o normal. |
| 29:18 | O objetivo desse episódio era complementar o que falei nos episódios de armazenamento, no episódio |
| 29:23 | sobre compressão, e o anterior onde comecei a falar sobre transmissão de dados e redes. |
| 29:28 | Viemos muito longe desde um simples telefone de copinho e barbante e agora você sabe porque. |
| 29:33 | Se ficaram com dúvidas mandem nos comentários abaixo. Se curtiram o video deixem um joinha, |
| 29:38 | assinem o canal e compartilhem o video pra ajudar o canal. A gente se vê, até mais. |
