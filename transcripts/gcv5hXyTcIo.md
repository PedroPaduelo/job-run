# Como sua Internet Funciona | Introdução a Redes Parte 3

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=gcv5hXyTcIo
- **Duração:** 41:22
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Finalmente vou poder falar um pouquinho mais sobre a parte que mais interessa pra programadores |
| 0:06 | iniciantes, que é o básico do básico de uma rede caseira. Eu resolvi falar disso porque recentemente estava justamente fuçando minha própria |
| 0:12 | rede de casa, configurando meu NAS novo, e pareceu uma boa hora pra introduzir alguns conceitos de rede. |
| 0:18 | Muito do que quero falar em episódios futuros depende de todo mundo saber pelo menos esse básico. |
| 0:24 | Hoje pulamos do modem pro roteador e o vocabulário mais básico sobre endereços IP, rotas, e |
| 0:30 | tudo mais. Pra maioria das pessoas tudo isso é invisível. Você já conecta no seu Wifi e tudo funciona. |
| 0:35 | Mas programadores precisam entender porquê essas coisas funcionam. |
| 0:41 | Então vamos lá. |
| 0:48 | (...) Sem vocês saberem nos últimos dois episódios eu toquei em dois tópicos específicos de redes. |
| 0:54 | O que se chama de camada física e a camada de dados, physical layer e data link layer. Claro, eu só toquei em pouquíssimos tópicos desses assuntos, se quiserem saber o assunto |
| 1:02 | completo, como sempre, eu recomendo que estudem o famoso livro de redes do professor Tanenbaum. |
| 1:07 | Quem fez ciências da computação provavelmente teve que estudar esse livro, e na minha época da faculdade também era ele. |
| 1:13 | Se conseguiram chegar até aqui, espero que já consigam enxergar dados não como arquivos e sim como conjuntos de blocos de bits, ou o que chamamos de pacotes. |
| 1:23 | E espero que já tenham começado a entender a idéia de protocolos como o formato como preenchemos os metadados do cabeçalho desses pacotes. |
| 1:30 | A metáfora de e-commerce onde o produto é o dado e o pacote de fora onde se preenche |
| 1:36 | endereços é o protocolo. Esses pacotes tem coisas como o número deles pra depois a gente receber e montar na ordem |
| 1:42 | certa. O hello world do estudo de redes é o modelo de referência OSI, que tecnicamente não |
| 1:48 | é mais usado hoje em dia. A gente tá mais familiarizado direto com o protocolo TCP/IP que se usa na internet. |
| 1:54 | O Tanenbaum diz que os protocolos associados ao modelo OSI não são mais usados, mas o modelo em si é bem útil e geral e ainda válido. |
| 2:02 | Já no TCP/IP é o contrário, o modelo em si não é muito útil mas os protocolos são muito utilizados. |
| 2:08 | Por isso na prática a gente usa TCP/IP mas aprende o modelo OSI. O modelo OSI é dividido em 7 camadas e eu disse que já mencionei parte das duas mais |
| 2:17 | baixas, a camada física 1 e a camada de data link 2. A idéia das camadas é que elas poderiam ser substituídas sem alterar as camadas de |
| 2:24 | cima. Por exemplo, posso trocar a camada física de cabos ethernet por wifi e o resto funciona |
| 2:30 | igual. A camada física é isso, a camada responsável por transportar bits por algum canal de comunicação. |
| 2:36 | A camada de data layer é responsável por cuidar de coisas como checagens de erros. Checksums e o algoritmo Internet 16-bits que mencionei no episódio anterior. |
| 2:45 | A idéia de detectar um erro e pedir pra repetir o pacote caso tenha erro. Depois vem a camada que não falei, a camada de rede propriamente dita, é quem cuida das |
| 2:54 | rotas e pra onde enviar os pacotes. No caso de TCP/IP as camadas física e data link são uma camada só, a camada chamada |
| 3:02 | só de link. E a camada de rede é a responsabilidade do protocolo IP. Quando falamos em IP pensamos em endereço IP, mas IP em si é Internet Protocol, que |
| 3:12 | é a camada de Internet junto com outro protocolo, o ICMP ou Internet Control Message Protocol, |
| 3:18 | que a gente usa quando fazemos ping por exemplo. Acima disso, no modelo OSI temos camada de transporte, sessão, apresentação e de aplicação. |
| 3:27 | Tecnicamente a camada de transporte em si é o TCP que é Transport Control Protocol, ou protocolo de controle de transporte. |
| 3:34 | Portanto TCP/IP é justamente protocolo de controle de transporte de pacotes na internet. TCP tem como característica controlar conexão entre duas pontas de forma confiável. |
| 3:45 | Em paralelo temos UDP ou User Datagram Protocol, que é um protocolo que não fecha conexão |
| 3:50 | e não usa o sistema de sequenciamento de pacotes do TCP. Ele tem menos metadados e é mais leve, mas é menos confiável e feito pra situações |
| 3:59 | onde perder um pacote não é um problema. Streaming de audio e video é um exemplo onde UDP pode ser útil. |
| 4:05 | A camada de aplicação é onde encapsulamos outros protocolos dentro. É onde nós programadores mais trabalhamos com coisas como HTTP pra web, SMTP pra email, |
| 4:14 | DNS pra domínio e assim por diante. A maioria dos protocolos que usamos no dia a dia de programação são empacotados nessa |
| 4:21 | última camada de aplicação. Pras camadas embaixo, não importa o que foi encapsulado, porque vamos fragmentar tudo |
| 4:27 | em frames e eles só se importam em entregar esses frames de uma máquina pra outra. É como um entregador do mercado livre. |
| 4:34 | Pra ele não interessa o que tem dentro do pacote, ele vai entregar do mesmo jeito seja lá o que tiver lá dentro. |
| 4:39 | Mas entregar, precisamos saber pra quem entregar. Eu disse no episódio de modem que a responsabilidade dele é modular e demodular entre sinal digital |
| 4:47 | e sinal analógico. Mas essas caixinhas de uma Vivo ou Claro da vida fazem mais, são também roteador e ponto |
| 4:54 | de acesso. É como um negócio pequeno familiar como a padaria do pai que é padeiro, a mãe recebe pedidos, manda o filho ir entregar e vai funcionando assim. |
| 5:02 | Essa é a beleza dos protocolos de internet, você pode entuchar tudo num PCzinho fraco que vai funcionar ou dividir responsabilidades com PCs mais fortes pra escalar. |
| 5:12 | Pra maioria das pessoas, com 1 TV, 3 ou 4 celulares, 1 ou 2 PCs, usar essa caixinha |
| 5:17 | tá mais que bom e vai funcionar bem o suficiente que poucos vão notar a perda de performance e possível falta de segurança. |
| 5:24 | Eu mesmo não tenho usos muitos drásticos, mas talvez por ser mais old school, eu prefiro desligar a função de ponto de acesso e deixar ele conversar só com um dispositivo, o meu |
| 5:33 | router separado. Não é um router robusto nem nada disso, é só um TP-Link Archer C6 normal. |
| 5:39 | Eu uso um cabo cat5e que suporta até 1 gigabit. Como meu plano é de 300 megabits só, mais do que isso sobra. |
| 5:46 | O roteador registra o gateway de saída padrão como sendo o IP do modem que é 192.168.15.1. |
| 5:51 | E o roteador como sendo o dispositivo 192.168.15.2. |
| 5:57 | Hoje vamos falar desse tal de endereço IP, esse número de quatro blocos divididos por pontos que todo mundo já viu pelo menos uma vez na vida. |
| 6:04 | Infelizmente pra realmente explicar isso eu precisaria tocar no assunto de roteamento, |
| 6:09 | classless interdomain routing ou CIDR, e eu realmente não tenho nenhuma vontade de explicar isso. |
| 6:15 | Então, de novo, recomendo o livro do Tanenbaum e o capítulo sobre a camada de rede pra estudar. Dessa vez só vou dizer o que é, mas não porque é assim. |
| 6:23 | Mesmo cortando o grosso, ainda assim explicar endereços é um saco. Vamos por partes. Um endereço IP é basicamente um número de 32-bits que escolhemos dividir em 4 blocos |
| 6:32 | de 8 bits. Assim como em decimal, quando temos um número grande como 1 milhão, a gente costuma separar |
| 6:38 | por ponto a cada três números pra ficar mais fácil de ler. Sendo blocos de 8 bits, se você é de front-end já tá acostumado com cores RGB sendo 3 blocos |
| 6:46 | de 8 bits cada, indo de 0 até 255. Mesma coisa. Os endereços IP podem ir de 0.0.0.0 até 255.255.255.255. |
| 6:56 | Aqui vale falar outra coisa, eu venho falando em blocos ou pacotes ou frames, mas existem várias nomenclaturas usadas de formas confusas e no mundo de IP fala-se em datagrams, é |
| 7:06 | a mesma coisa, pacotes de bits com um cabeçalho de metadados. Assim como antigamente tinha telegrama no mundo analógico, em digital temos datagramas. |
| 7:14 | Mas no fundo é tudo pacote de bits, não se perca nas diferentes nomenclaturas. A parte importante são os campos de metadados definidos pelo protocolo, que descrevem pros |
| 7:24 | diversos componentes da rede, como switches e seus dispositivos o que fazer com esse pacote, |
| 7:29 | pra onde mandar e tudo mais. Mas realmente não tenho nenhuma vontade de detalhar esses campos, novamente, leia Tanenbaum. |
| 7:36 | Mas voltando, endereços IP versão 4 ou IPv4 como chamamos são números de 32-bits. |
| 7:42 | Mas só esse número não quer dizer muita coisa sozinho. A gente sempre precisa de uma máscara de sub-rede, subnet mask, que é aquele número |
| 7:49 | 255.255.255.0 ou similar que você também já deve ter visto e como o próprio nome diz é uma máscara pra ser aplicada no endereço IP pra saber qual parte define a sub-rede |
| 7:59 | e qual define o host. Isso é uma coisa que todo programador tem obrigação de saber que são operações |
| 8:04 | bitwise. Se nunca viu operação bitwise, vamos ver como que funciona. Vamos pegar o endereço que o modem deu pro roteador, 192.168.15.2 e escrever o número |
| 8:14 | em binário aqui na tela, 32 bits. Eu quero saber qual é o prefixo que identifica a sub-rede. |
| 8:20 | Pra isso usamos a máscara. Lembra, 255 significa tudo 1, então 3 blocos de 8 bits 1 e o resto é zero. |
| 8:26 | Agora fazemos operação bitwise AND, ou seja, fazemos AND bit a bit. 1 and 1 é 1, 1 and |
| 8:32 | 0 é 0, 0 and 0 é 0. Eu expliquei isso no guia mais hardcore de introdução a computadores. |
| 8:37 | Fazendo isso, o que sobra no final é o prefixo de rede. 192.168.15.0. A máscara arranca fora o sufixo que identifica o dispositivo individual na rede. |
| 8:46 | Essa máscara na prática me diz que os primeiros 24 bits representam a rede, por isso outra forma de representar isso é escrever 192.168.15.255/24. |
| 8:56 | Isso denota uma rede onde é possível ter até 256 dispositivos. Se fosse 192.168.255.255/16 ou máscara 255.255.0.0 significa que poderíamos ter 2 elevado a |
| 9:07 | 16 ou seja, mais de 65 mil dispositivos. É uma rede grande demais, por isso você não vê rede barra 16 por aí. |
| 9:14 | Num roteador caseiro, uma rede barra 24 é mais que suficiente, porque ninguém tem mais de 200 dispositivos em casa precisando de endereços. |
| 9:23 | Por que precisa ter isso? Um roteador é responsável por rotear pacotes na rede interna e também ligar com outro |
| 9:29 | roteador numa rede externa, tipo a rede da Vivo. Se não tivesse essa hierarquia de rede e hosts, todo roteador precisaria ter uma tabela |
| 9:38 | com cada endereço de cada dispositivo dizendo pra onde o pacote de cada um deles precisaria |
| 9:43 | ir. Em vez disso o roteador só precisa saber, se da rede internet vier um pacote cujo prefixo |
| 9:48 | do endereço seja 192.168.15.x ele precisa mandar pra rede externa do modem. |
| 9:54 | Não importa se veio de 192.168.15.2 ou 192.168.15.3. Então o roteador só precisa manter uma linha em memória pra essa rede em vez de uma tabela |
| 10:03 | com todos os endereços dessa rede. É mais ou menos como telefones. Se todo mundo tivesse um número de telefone de 11 números aleatórios, toda central em |
| 10:11 | todo estado precisaria ter uma tabelona com 100% de todos os números pra saber pra onde |
| 10:16 | mandar. Mas a gente usa o tal de DDD, os dois primeiros números representam uma região, mais ou |
| 10:21 | menos uma cidade ou conjunto de cidades. Na Grande São Paulo o DDD é 11, Rio de Janeiro, o DDD é 21, em Natal o DDD é 84 e assim |
| 10:29 | por diante. Então se a Central de São Paulo faz uma ligação pra um número com prefixo 84, ele sabe que precisa rotear a chamada pra Central da Natal. |
| 10:37 | A Central de São Paulo não precisa ter o banco de dados com os números de Natal, só mandar pra outra central que vai ter esse sub-conjunto de números de Natal, que é |
| 10:47 | a Central de Natal. Endereços IP é a mesma coisa, só que mais simples, ele representa a sub-rede e o host, |
| 10:54 | ou identificador do dispositivo nessa rede. Mas tem mais detalhes pra quem quer estudar redes de verdade que é entender CIDR ou Classless |
| 11:02 | InterDomain Routing, como se usa máscaras pra definir sub-redes independentes dentro de uma mesma organização, por exemplo, blocos de IPs diferentes pra cada departamento. |
| 11:11 | E a forma antiga que se usava até 1993 de classful addressing, onde provedores tinham |
| 11:17 | que lidar com classes A até E. Como falei antes, isso tudo tem a ver sobre como roteadores sabem como rotear quais pacotes |
| 11:25 | pra quais redes. Isso é o capítulo de camada de rede do Tanenbaum. O que mais interessa é o problema que vocês já devem ter ouvido falar. |
| 11:32 | Especialmente depois da explosão da internet no fim dos anos 90, seguido da explosão de smartphones nos anos 2010, a gente literalmente tem ordens de grandeza mais dispositivos conectados |
| 11:42 | na internet do que existem endereços disponíveis num número de 32-bits como definido pelo |
| 11:48 | IPv4. É mais ou menos o mesmo problema que expliquei no episódio dos 640 kilobytes de RAM quando |
| 11:54 | se achava que isso era o máximo de RAM que uma pessoa normal jamais ia precisar, e nos anos 90 se provou que isso era muito pouco. 32-bits que dá um máximo de 4 gigabytes |
| 12:03 | também é pouco e hoje estamos em 64-bits. IPv4 sendo 32-bits significa que o máximo teórico de endereços seria pouco mais de |
| 12:11 | 4 bilhões. Só de smartphones já temos mais de 3 bilhões. Some a isso todo PC, todo servidor em todo data center. |
| 12:19 | Some a isso um tanto de IPs que já foram desperdiçados também. A gente já passou de 4 bilhões de endereços muitos anos atrás. |
| 12:25 | Mas porque tudo continua funcionando? E pra entender isso eu acho importante todo mundo saber o que é um NAT ou Network Address |
| 12:33 | Translator. O conceito é muito simples. Todo provedor como Vivo ou Claro tem muito menos blocos de endereços IP reais do que |
| 12:41 | clientes. Por isso é impossível dar um endereço real pra cada cliente e de fato ninguém faz isso. |
| 12:46 | Em vez disso eles implementam o que chamamos de um CGNAT ou Carrier Grade NAT, ou seja, |
| 12:52 | um NAT tamanho industrial. O grande lance é que podemos ter o intervalo inteiro de IPv4 dentro de cada sub-rede isolada |
| 12:59 | e traduzir o endereço quando ela sai de uma rede e vai pra outra. Em redes embaixo de NAT existem 3 blocos de endereços reservados só pra isso. |
| 13:08 | Os com prefixo 10 barra 8, que é um intervalo de 24 bits de mais de 16 milhões de endereços |
| 13:14 | possíveis. Ou com prefixo 172.16 que é barra 12, uma rede de 20 bits ou mais de 1 milhão de endereços |
| 13:21 | e finalmente com prefixo 192.168 que é barra 16 que é uma rede de 16-bits ou mais de 65 |
| 13:27 | mil hosts. Por isso que normalmente seus dispositivos na sua rede local de casa ou do escritório |
| 13:32 | costumam ser 192.168 alguma coisa ou 172 ponto alguma coisa ou 10 ponto alguma coisa. |
| 13:38 | São intervalos reservados pra redes locais embaixo de NAT. Meu PC tem endereço 192.168.1.200. |
| 13:45 | Eu quero assistir alguma coisa do YouTube. Faz de conta que o endereço de destino é 142.250.219.14 porta 443 que é a porta de |
| 13:54 | HTTPS. Outro dia explico portas. Então meu PC monta pacotes onde a origem é meu endereço 192.168 com destino 142.250 |
| 14:01 | bla bla porta 443 pedindo a página de video e manda isso na rede local aqui de casa. |
| 14:07 | Antes de chegar em NAT vou aproveitar pra adicionar mais detalhes desse processo. Dentro de uma rede local os pacotes não são roteados pelo endereço IP. |
| 14:16 | No protocolo de rede, estamos na camada de rede, mas na rede local o que importa é a camada de data link, da ethernet. |
| 14:22 | E ethernet não entende endereços IP. Essa tangente vale a pena fazer. Segura o exemplo do YouTube. |
| 14:28 | Digamos que eu queira falar com um dispositivo aqui dentro na minha rede local. No caso o meu NAS. Eu que configurei então sei que tá com endereço local 192.168.1.161. |
| 14:38 | Posso abrir aqui o command prompt do Windows e dar um ping pra ele. Todo mundo já fez ping pra medir latência e tempo de resposta, ele manda um pacote ICMP |
| 14:47 | e mede o tempo. De novo, como meu PC sabe mandar pacote exatamente pra esse dispositivo e não confunde com, |
| 14:54 | digamos, minha smart TV que tá na mesma rede? O jeito mais simples seria toda vez eu ficar mandando pacotes pra todo mundo na rede perguntando |
| 15:03 | "ow, quem aí é IP final 161", daí o NAS responde "sou eu! manda pra cá". |
| 15:08 | E ficar fazendo isso toooooda vez, pra todo pacote. Mas conseguem enxergar como isso seria um desperdício? |
| 15:14 | Eu ia ficar toda hora incomodando os vizinhos gritando no corredor. Minha TV ia receber pacotes que não precisa. |
| 15:20 | Meu smartphone conectado via Wifi ia ficar recebendo. Toda vez que preciso enviar pacotes, ia ter que ficar gritando no corredor. |
| 15:27 | Seria um saco. Por isso existe um outro tipo de pacote chamado ARP ou Address Resolution Protocol. |
| 15:33 | No command prompt mesmo eu posso digitar `arp -a` e vai aparecer uma tabela, que é um cache |
| 15:38 | aqui no meu PC. Quando eu fiz o ping pro meu NAS, na realidade ele pediu pro ARP gritar no corredor "ow, |
| 15:44 | quem aí é o NAS!?". Aí o NAS respondeu "sou eu, caralho!" e incomodou todo mundo na rede. |
| 15:49 | Mas aí o ARP que não é burro nem nada, registrou a posição do apartamento no andar. É pra isso que serve o tal MAC address. |
| 15:56 | Toda placa de rede, seja ethernet, seja wifi, tem um endereço único de 48 bits que vem |
| 16:01 | de fábrica. 2 elevado a 48 são mais de 281 trilhões de endereços. |
| 16:06 | É endereço suficiente pra todas placas de rede já fabricadas e em operação. Olha a tabela que o comando `arp -a` me mostra agora. |
| 16:14 | Tem um registro dizendo que 192.168.1.161 é esse MAC address que eu escondi uma parte. |
| 16:21 | O endereço IP é relevante pra roteador de internet, mas na camada de baixo da rede física, |
| 16:26 | IP não quer dizer nada. Ethernet encontra coisas baseado em MAC address. Mas com isso meu PC já sabe que se quiser falar com o NAS de novo, não precisa mais |
| 16:35 | gritar no corredor. É só mandar direto pra placa de rede que responde nesse MAC address. |
| 16:40 | Mas isso funciona pra endereços da rede local. Se for endereço IP 192.168 o ARP vai ficar gritando aqui no corredor. |
| 16:47 | Mas e se for o endereço do YouTube, que é no prédio ali na esquina? Agora não adianta ficar gritando no corredor. |
| 16:52 | E é pra isso que serve o tal do default gateway que você também costuma ver na configuração de rede do seu roteador. |
| 16:58 | É como se fosse o porteiro do seu prédio. Todo endereço que não faz parte deste prédio você manda pro default gateway, que por convenção |
| 17:05 | é o endereço IP mais baixo, como 192.168.1.1. E agora pede pra ele ir no outro prédio, pedir pro porteiro de lá, o roteador de lá, |
| 17:15 | gritar no corredor de lá. Rede é mais ou menos isso mesmo, todo mundo gritando pra lá e pra cá e uma correria |
| 17:21 | de entrega de pacotes. Mas tudo isso pressupõe que todo apartamento tem um endereço IP único dentro do prédio. |
| 17:27 | Mas digamos que se mudou um vizinho pentelho, e só pra foder, ele resolveu colocar o mesmo |
| 17:33 | número de apartamento do vizinho. O ARP vai gritar no corredor "ow. quem aí é endereço final 161" e dois apartamentos |
| 17:39 | gritam "sou eu!!" e agora? Agora eu não posso entregar o pacote pra nenhum dos dois, porque não sei dizer quem |
| 17:45 | tá dizendo a verdade. Então o pacote é dropado, jogado fora, e nenhum dos dois recebem. |
| 17:50 | Um deles precisa colocar um endereço IP que nenhum outro esteja usando. Essa é a regra de conduta do prédio. |
| 17:56 | Pensa, seria uma zona se toda vez que você se muda pra um prédio, você mesmo precisasse definir qual é o número do seu apartamento. |
| 18:03 | O prédio é progressista, ele deixa você escolher o número que mais te agrada. Só que aí metade escolhe número 13, a outra metade escolhe 22. |
| 18:11 | E o ARP ia ficar o dia inteiro gritando nos corredores e não ia poder entregar nada pra ninguém. |
| 18:17 | O prédio seria uma zona. Ainda bem que na vida real, todo apartamento já tem números pré determinados e você |
| 18:22 | não escolhe. Hoje em dia, numa rede local, é a mesma coisa. Pra isso serve essa outra coisa que você já deve ter visto no seu roteador chamado |
| 18:29 | DHCP ou Dynamic Host Configuration Protocol. Toda vez que um novo dispositivo se conecta na rede, ele pergunta pro servidor de DHCP, |
| 18:38 | que em cenário caseiro, fica no seu modem ou no seu roteador separado. Em empresas um servidor DHCP pode ser um servidor separado e independente. |
| 18:47 | Mas o funcionamento é o mesmo. O DHCP é o síndico do prédio. O meu PC conecta na rede e checa "ow, tem um síndico ativo por aí?" |
| 18:55 | e o DHCP responde "opa. tem eu aqui! o que manda?". Aí o PC pergunta "ow, que endereço tem sobrando aí pra mim?" |
| 19:01 | e o DHCP mantém uma tabela parecida com aquela do ARP, e fala "opa, tem final 200, firmeza?" |
| 19:07 | e o PC responde "valeu irmão, vou usar esse então". E quando o NAS conecta, ou a TV ou seu smartphone, todos perguntam pro DHCP qual endereço tá |
| 19:16 | sobrando e ele manda um certinho, de tal forma que ninguém tem um IP colidindo com de outro |
| 19:21 | dispositivo. E assim o ARP funciona e os pacotes são entregues pros lugares certos. No DHCP eu posso também configurar dizendo que um certo MAC address sempre receba o mesmo |
| 19:30 | endereço de IP. É útil pra coisas como meu NAS porque eu monto um drive nele do meu PC e seria um saco |
| 19:36 | se toda hora o DHCP desse um endereço diferente pra ele. Tudo parece encaixar bonitinho, mas tem alguns problemas que eram mais graves no começo |
| 19:43 | da internet e foram sendo tratados ao longo do tempo. Por exemplo, antigamente a gente usava hubs em redes, pra compartilhar um cabo entre vários |
| 19:51 | computadores. Lembra antigamente quando tinha extensões de telefone na sua casa? Aí seu namorado liga e toca nos dois telefones, a menina no quarto atende e a mãe na cozinha |
| 20:01 | atende também. Daí a mãe se toca "opa, é o namorado da minha filha, vou desligar pra não ouvir a conversa". |
| 20:07 | E sendo uma mãe honesta, ela desliga. Mas isso pressupõe que todo participante nessa rede seja honesto. |
| 20:14 | É o que placas de rede legítimas numa rede em hub fazem. Se vem pacotes que não é pro MAC address dele, ele dropa, ou rejeita esses pacotes |
| 20:23 | e não fica escutando. Porém, a placa de rede tá aqui fisicamente na minha máquina, eu posso hackear ela. |
| 20:28 | E isso se chama colocar essa placa em modo promíscuo. Quem já brincou com softwares como Wireshark sabe disso. |
| 20:35 | A gente podia ficar vendo todos os pacotes trafegando na rede, mesmo os que não são pra mim. |
| 20:40 | Por isso que hoje em dia se usa switches. Um switch estabelece uma conexão direta entre o dispositivo e o roteador e os outros canais |
| 20:47 | do switch não vêem pacotes que não sejam direto pro MAC address dele. Por isso que hubs são baratinhos, porque eles enviam os pacotes pra todo mundo conectado, |
| 20:56 | sem processar nada. Mas ainda tem outro problema. De novo, MAC address é um endereço que vem de fábrica na placa de rede. |
| 21:02 | Mas eu posso modificar essa placa e fazer ele responder qualquer outro MAC address. Daí o switch é obrigado a mandar pacotes pra mim que não eram pra mim. |
| 21:11 | Não só isso, mesmo meu endereço IP mudando por causa do DHCP, meu MAC address é sempre o mesmo, então o provedor consegue saber o tempo todo com quem estou me conectando |
| 21:20 | e registrar isso. Por isso empresas como a Apple vem planejando gerar MAC address aleatórios em iPhones por |
| 21:26 | exemplo, pra dificultar saber quem é quem. Na prática, se você compartilha a internet numa casa, dormitório ou sei lá, com outras |
| 21:33 | pessoas, não use hubs, use switches. Não importa se você confia nas pessoas da sua casa, você não sabe se ela sem querer |
| 21:40 | instalou um malware que colocou o PC dela em modo promíscuo e tá escutando os pacotes da sua rede. |
| 21:46 | Em computação você não deve nunca confiar em ninguém, sob nenhuma hipótese, essa é |
| 21:51 | a regra número um. Nada nunca é 100% confiável, então assuma sempre 100% suspeito. |
| 21:58 | Enfim, com esses componentes básicos você já deve entender que seus dispositivos conseguem |
| 22:03 | endereços IP usando um servidor de DHCP e por isso muitos de vocês nunca precisaram configurar endereços na mão. |
| 22:09 | Também já sabem que tem esse ARP que descobre qual dispositivo na rede responde pra qual |
| 22:15 | endereço e mantém um cache que faz o de-para de endereço IP pra MAC address. Sabe que todo mundo está conectado no roteador seja diretamente via cabo de rede, via wifi, |
| 22:24 | e se for cabo e tiver múltiplos dispositivos, coloca um switch pra conectar todo mundo de |
| 22:30 | forma mais segura. E sabe que internamente os pacotes são roteados pelo MAC address, mas se eu quiser acessar |
| 22:37 | servidores fora da minha rede, peço pro default gateway, que é tipo o porteiro do prédio, |
| 22:42 | pra ir falar com o porteiro do outro prédio. E esse é o básico do básico de redes que você precisa saber. |
| 22:48 | Mas vamos voltar pro exemplo de acessar o YouTube, acho que dá tempo de explicar como de fato me comunico com o mundo externo, fora do meu prédio. |
| 22:55 | Eu falei que meu PC tem o endereço IP interno de 192.168.1.200 e quero assistir um video |
| 23:00 | no youtube. Eu magicamente falei que ele pode se conectar talvez no prédio vizinho cujo endereço é |
| 23:05 | 142.250.219.14. Deixa eu explicar como essa mágica funciona e ela começa na configuração do seu servidor |
| 23:12 | de DHCP no roteador, onde configurei esse tal de endereço DNS. Isso é um servidor externo e normalmente vem o endereço do servidor de DNS do seu |
| 23:22 | provedor, como da Vivo. Eu recomendo como primeira coisa mudar isso ou pro servidor do Google que é 8.8.8.8 ou |
| 23:30 | da CloudFlare que é 1.1.1.1. Explicando de forma mais simples, um servidor DNS tem como única função traduzir um endereço |
| 23:38 | em forma de texto como www.youtube.com em um endereço IP. A rede não entende nomes humanos, só entende endereços. |
| 23:46 | Quando seu PC pediu um endereço IP pro DHCP ele ganhou também essa configuração de |
| 23:52 | DNS. Quando no seu PC você digitou www.youtube.com no navegador, o PC checa pra qual DNS deve |
| 23:58 | perguntar e vai ser pro endereço que recebeu do seu DHCP. Todos os outros dispositivos da sua casa vão ter essa mesma configuração, seja seu smartphone, |
| 24:07 | seja sua smart TV. Se eu abrir um terminal de Linux temos o comando `dig` e eu posso fazer `dig www.youtube.com` |
| 24:14 | e volta essa tabela aqui. O que interessa pra gente é esse "Answer Section". E eu vejo que a primeira linha é o `www.youtube.com` que eu pedi. |
| 24:22 | E ele aponta pra um registro CNAME ou canonical name. Um registro CNAME diz pro DNS fazer uma nova pesquisa pra esse nome `youtube-ui.l.google.com`. |
| 24:32 | Daí volta o resto da tabela que diz que esse domínio aponta pra múltiplos registros A com vários endereços. |
| 24:38 | Registro A é um endereço IPv4, registro AAAA seria endereço IPv6 e já falo disso. |
| 24:44 | Mas e agora, o que eu faço com esse tanto de IPs? Toda vez que você perguntar pro DNS sobe o youtube, ele vai devolver conjuntos de endereços |
| 24:51 | IP diferentes. Essa é uma estratégia do Google. Ele nunca te dá 100% de todos os registros, porque eles tem literalmente centenas de máquinas |
| 25:00 | pro YouTube, em dezenas de data centers espalhados pelo mundo. Ele vai te devolver alguns endereços de máquinas do data center que é geograficamente mais |
| 25:09 | próximo de você. Daí seu PC recebe esse conjunto e faz um round-robin load balancing. |
| 25:15 | Traduzindo, ele faz balanceamento de carga. Ou seja, numa aba ele vai usar o primeiro endereço. |
| 25:21 | Numa segunda aba, ele talvez vai usar o segundo endereço e assim por diante. Assim você vai sempre caindo em servidores diferentes, pra balancear sua carga. |
| 25:30 | Cada servidor recebe no pacote algumas informações sobre você, como os cookies do seu navegador. |
| 25:35 | Daí ele sabe que você já tinha feito login num outro servidor e te mantém logado no servidor seguinte. |
| 25:41 | Pra você, é como se estivesse sempre no mesmo lugar, sem saber que por baixo seu PC tá te mandando toda hora pra um desses outros servidores da lista. |
| 25:49 | Um DNS é isso, um serviço que contém uma tabelona apontando um nome de servidor pra |
| 25:55 | um ou mais endereços IP. Lembram quando falei sobre modo promíscuo que alguém pode estar escutando seus pacotes |
| 26:01 | na rede? Então, um provedor sempre está, entre aspas, em modo promíscuo, porque ele recebe os pacotes |
| 26:07 | de todos os clientes assinantes pra poder mandar pra internet. Então ele é obrigado a receber todos os pacotes pra passar pra frente. |
| 26:15 | Claro, se ele for honesto, assim como sua mãe na extensão, deveria só passar pra |
| 26:20 | frente e não escutar a conversa. Mas, seguro morreu de velho e o certo é assumir que não só eles estão escutando, mas registrando |
| 26:27 | e até revendendo esses dados. Você não tem como saber. Por isso se fala pra nunca acessar sites que não sejam HTTPS, ou seja, cuja conexão é |
| 26:35 | encriptada. Daí mesmo se alguém no meio escutar seus pacotes não tem como saber o que tá sendo transmitido. |
| 26:41 | Porém, DNS normalmente não é criptografado e antes do HTTPS ativar, o navegador precisa |
| 26:47 | converter www.youtube.com pra um dos endereços IP do Google. E essa pergunta pro DNS é feita em forma não encriptada. |
| 26:54 | Claro, o provedor ou qualquer um no meio do caminho pode só ver o endereço IP e deduzir que é endereço do Google. |
| 26:59 | Mas eu já estou dando a informação que é www.youtube.com de mão beijada. E por isso existem novas tecnologias como DNS over HTTPS ou DNS over TLS que, como o |
| 27:10 | nome diz é o equivalente HTTPS pra DNS. Isso é simples de ativar, basta colocar na configuração do seu router e seu celular |
| 27:19 | o endereço de um servidor de DNS que suporte DNS over HTTPS, no caso o mais famoso é o |
| 27:25 | 1.1.1.1 do CloudFlare. Mesmo assim, o CloudFlare é outra entidade, o Google também. |
| 27:31 | Eu estaria confiando que eles não estão fazendo nada de errado, o que também é impossível de saber. |
| 27:36 | Mas entre confiar na Vivo ou na Claro, hoje em dia nossa escolha é escolher o menor de dois maus. É por isso que eu pessoalmente uso um DNS caseiro, o Pi-Hole. |
| 27:45 | Como ele cacheia a resolução de endereços, mesmo o CloudFlare pra onde ele conecta não sabe exatamente quando eu pedi esses endereços. |
| 27:52 | Mas isso é tema pra outro dia. Só entenda que estamos meio expostos no setor de DNS ainda. |
| 27:57 | Enfim, eu fiz uma longa tangente só pra voltar pro assunto de NAT. Agora meu PC tem um endereço IP local graças ao DHCP do meu roteador e eu tenho o endereço |
| 28:07 | IP do youtube, graças a algum DNS como do CloudFlare. Pronto, agora eu posso fazer um pacote com origem sendo 192.168.1.200 e destino sendo |
| 28:17 | 142.250.218.14. Mando o pacote pro default gateway do meu roteador TP-Link. |
| 28:22 | Ele por sua vez roteia o pacote pro Modem na rede 192.168.15.1. |
| 28:27 | E o Modem manda esse pacote pra rede da Vivo. A rede da Vivo vai enviar pra Internet e aqui vem a parte de roteamento na internet que |
| 28:35 | eu não estou a fim de explicar. Mas pelo menos posso mostrar. No Linux costuma ter um comando chamado `traceroute` e no Windows tem o comando `tracert`. |
| 28:43 | Eu chamo então `tracert 142.250.218.14` e ele vai me mostrar o caminho do pacote da minha máquina até a máquina do Google. |
| 28:51 | Olha só, na primeira linha, como falei, vai pro roteador que é 192.168.1.1. Dele vai pro modem 192.168.15.1 que ele chamou de meuvivofibra. |
| 29:00 | Lá dentro da rede da Vivo ele passa por outras sub-redes como esse da telesp. Pra quem não sabe a Vivo lá por 2002 ou 2003 foi criada como a junção de várias |
| 29:09 | telecoms pelo Brasil. Em São Paulo, a empresa original era a Telesp. Enfim, dessa rede ele passa pra outra chamada vivozap. |
| 29:17 | E aí vai passando por outros hops até no final chegar no destino. Existem vários serviços com tabelas que associam endereços IP com coordenadas geográficas |
| 29:27 | de latitude e longitude. É uma estimativa. Dá pra chegar perto, mas eu posso mudar o endereço IP de uma máquina numa região |
| 29:33 | pra de outra região. Ainda mais do tamanho do Google que eles podem remanejar grandes grupos de endereços de |
| 29:39 | um data center nos Estados Unidos pro Brasil, por exemplo. Mas segundo o serviço IP2Location ele diz que esse IP 142.250.218.14 |
| 29:48 | que eu tentei acessar está em Mountain View, na Califórnia, sede do Google. Mas se eu usar outro serviço como o IPapi.co, ele parece ser um pouco mais atualizado e |
| 29:58 | me diz que esse endereço na realidade está em São Paulo. E isso faz mais sentido. O DNS do Google me mandou pra um endereço mais próximo geograficamente de mim, pra |
| 30:06 | ter menos hops ao longo da rota. Quanto mais perto, menor a latência, maior a velocidade. |
| 30:12 | Por isso grandes serviços como Google tem servidores espalhados ao redor do mundo pra garantir que a maioria das pessoas tenham a melhor velocidade possível. |
| 30:20 | Tá ótimo. Mas e agora? Como que o Google sabe pra quem devolver os pacotes de video? |
| 30:25 | Ué, é só devolver pra origem que tá registrado no pacote, não? Só que lembra? Meu pacote tá com origem 192.168.1.200. |
| 30:32 | Dentro da rede da Vivo não tem só você. Todo cliente da Vivo vai ter IPs como 192.168 alguma coisa. |
| 30:39 | Vira aquela situação que eu falei do vizinho pentelho que copiou o mesmo número do seu apartamento. O Google não tem como devolver a resposta pra pessoa certa só com isso. |
| 30:48 | E ele nem precisa, porque ele nunca recebeu esse endereço 192.168.1.200. |
| 30:53 | E finalmente eu volto pro assunto do tal NAT e como não temos endereços IPv4 suficientes |
| 30:59 | pra todos os dispositivos do mundo. Pra visualizar é a mesma coisa que um número de telefone comercial e ramais. |
| 31:05 | Já pensou que dificuldade que ia ser se uma grande empresa tivesse um número de telefone diferente pra cada pessoa que trabalha lá? |
| 31:12 | Uma empresa com 10 mil funcionários precisando ter 10 mil números de telefone diferentes? Eles não tem. |
| 31:17 | Na realidade normalmente tem um número de telefone comercial que liga num PBX. Esse PBX roteia pra mesa da pessoa certa baseada num número de ramal. |
| 31:27 | É parecido na Vivo, o NAT é o PBX. Ela tem alguns poucos IPv4 de verdade. |
| 31:33 | Mas internamente dá tipo ramais pra cada cliente. É isso que um NAT faz, no caso um CGNAT, carrier grade, porque é um NAT gigante. |
| 31:42 | Faz um teste, vai no Google e pesquise por "what is my ip", qual é meu ip. |
| 31:47 | Qualquer primeiro link serve. No meu caso vai aparecer esse aqui que estou escondendo os últimos dígitos. Esse é o endereço IP da Vivo de saída e é esse endereço que ele carimbou por cima |
| 31:57 | do meu pacote antes de enviar pro Google, e é pra esse endereço que o Google vai devolver os pacotes de video. |
| 32:03 | Daí o CGNAT da Vivo mantém uma tabelona que mapeia que quando voltar resposta do Google, |
| 32:08 | é pra devolver pro modem certo que fez o pedido. E é por isso que você consegue conectar na internet e se comunicar mesmo não tendo |
| 32:16 | um endereço IPv4 válido na internet. O CGNAT faz o trabalho de enviar e devolver os pacotes pras sub-redes corretas. |
| 32:23 | Literalmente Network Address Translator ou tradutor de endereço de redes. O problema disso é que você consegue se conectar nos outros, mas outros de fora não |
| 32:33 | conseguem achar você diretamente. Pra alguém de fora se conectar em você, primeiro você precisa se conectar nele pra |
| 32:40 | abrir uma conexão. Vou deixar como lição de casa. No mundo de hoje que fazemos chamadas de Zoom, ligação via Whatsapp e outras formas de |
| 32:47 | Voz sobre IP ou VoIP, o requerimento é que duas pontas só conseguem se conectar diretamente |
| 32:53 | se ambos os lados conseguem se encontrar na internet. Mas normalmente você e a pessoa que quer falar estão escondidas numa sub-rede privada |
| 33:02 | atrás de um NAT de provedor. Portanto nenhum dos dois lados está acessível. Como que se cria uma conexão ponto a ponto, sem precisar de intermediários? |
| 33:11 | Pra isso existem formas como ICE que é STUN/TURN e protocolos como RTP. |
| 33:17 | Dêem uns googles aí de como isso funciona. Não vou tentar explicar hoje. Voltando ao problema de endereços IP serem 32-bits e permitirem no máximo 4 bilhões |
| 33:24 | de endereços. A essa altura já era pra ter acabado esses endereços. Se uma Vivo tiver, sei lá, 100 milhões de clientes, ia precisar de 100 milhões de endereços |
| 33:32 | IPv4, pelo menos, sem contar que cada cliente tem hoje um PC, uma smart TV, alguns smartphones, então fácil ia precisar de meio bilhão de endereços. |
| 33:40 | Mas graças ao CGNAT, faz de conta, com 1 único endereço IPv4 ela pode manter esse |
| 33:46 | meio bilhão de dispositivos em redes privadas escondidas com endereços 192.168 ou 10 ponto |
| 33:52 | da vida por trás. E é assim que a gente evitou acabar os IPv4. Mas isso é um paliativo. |
| 33:58 | NAT ajudou a evitar o colapso da internet por falta de endereços mas ao mesmo tempo dificultou e complicou muita coisa, como o que falei de Voz sobre IP e todo tipo de conexão |
| 34:08 | ponto a ponto, como você conseguir jogar online com seus amigos. Como na prática todo mundo tá escondido em redes privadas atrás dos provedores, estamos |
| 34:16 | à mercê da boa vontade deles pra muita coisa. Esse problema não é novo, já se falava do problema de acabar endereços desde o fim |
| 34:23 | dos anos 80. Desde o começo dos anos 90 já se começou pesquisas sobre como resolver esse problema. |
| 34:29 | E já temos a solução na forma do IPv6 desde 1998. |
| 34:34 | Você já deve ter visto IPv6. É um número de 128 bits. Eu venho dizendo que 64 bits é um número absurdo. |
| 34:41 | Computadores modernos de 64 bits não tem barramentos de 64 bits ainda, o máximo acho |
| 34:46 | que é 48 bits, que já é endereço de memória como se não houvesse amanhã mesmo pra um supercomputador. |
| 34:52 | Pra ter uma idéia, a maioria das pessoas hoje já acha 128 gigabytes de RAM algo absurdo. |
| 34:58 | Pra endereçar 128 giga um barramento de 37 bits seria suficiente. |
| 35:03 | 2 elevado a 128 é um número tão absurdo que um ser humano normal não consegue imaginar. |
| 35:09 | Imagina a superfície inteira do planeta Terra, incluindo a superfície dos oceanos, inteiramente |
| 35:14 | coberta por PCs. Eu poderia ter 7 x 10 elevado a 23 endereços IP por metro quadrado. |
| 35:22 | Conseguem entender? 10 seguido de 23 zeros de quantidade de PCs, por metro quadrado. |
| 35:27 | Estudantes de química vão notar que esse número é maior que o número de Avogadro. Literalmente seria possível dar um endereço IP pra cada molécula da superfície da Terra |
| 35:36 | e sobrar. É astronomicamente grande. Na prática isso significa que todo dispositivo em existência hoje, todo PC, todo servidor, |
| 35:45 | cada smartphone, cada dispositivo inteligente da sua casa como sua TV ou sua geladeira, |
| 35:51 | cada uma poderia ter um endereço IP único com facilidade, por gerações a fio. E fazendo isso não precisaríamos mais estar atrás de um CGNAT. |
| 35:59 | Todo mundo poderia estar diretamente na internet sem intermediários, o que facilitaria muito |
| 36:04 | todo tipo de serviço ponto a ponto como voz sobre IP, e nunca teríamos que nos preocupar de novo com acabar endereços e ter que fazer gambiarras como NAT. |
| 36:12 | O problema é que o sucesso da internet evitou que pudéssemos migrar pra melhor solução a tempo. |
| 36:19 | IPv6 surgiu no calor da febre da bolha da Internet do fim dos anos 90. Pra maioria da população, nem se sabia se essa tal de internet ia mesmo dar certo. |
| 36:28 | Muita gente achava que era só um troço passageiro que ia morrer logo. Coisa de hipster. Usar internet no fim dos anos 90 era opcional, e muita gente não tava interessada. |
| 36:38 | Pra dar certo, investiu-se tudo no que já existia e se sabia que funcionava, que era |
| 36:43 | IPv4. Por que a gente ia se preocupar em acabar endereços se ninguém nem sabia se ia entrar gente suficiente pra acabar os endereços? |
| 36:50 | Migrar naquele momento pra IPv6 parecia uma otimização prematura. E pra piorar, tivemos o crash da bolha da internet em 2001. |
| 36:58 | Aí sim, ninguém ia investir milhões de dólares pra migrar toda a infraestrutura de tudo pra IPv6. |
| 37:04 | Pra tudo funcionar perfeito, o certo, seria o mundo inteiro migrar quase que tudo de uma |
| 37:09 | vez pra IPv6. Senão como alguém com IPv4 vai conectar num servidor IPv6? |
| 37:14 | Pra isso foram sendo inventadas formas de migração menos agressivas como NAT de IPv6 |
| 37:20 | pra IPv4. Temos NAT64 por exemplo, que permite que PCs que já usem endereço IPv6 consigam conectar |
| 37:27 | em servidores que ainda são IPv4. Mas a moral da história foi essa: o inimigo do IPv6 foi o sucesso do IPv4. |
| 37:34 | E vocês sabem, se alguma é opcional, a maioria sempre vai esperar até a última hora. |
| 37:39 | Por que eu vou gastar meu tempo pra ter todo esse trabalho se todo mundo ainda vai estar usando o esquema antigo? |
| 37:45 | Vou ficar no antigo também. É a lei do menor esforço. Migração pra IPv6 só vai acontecer o dia que for mandatório, tipo os governos decidirem |
| 37:53 | que ninguém mais acessa nenhum serviço do governo se não for IPv6. Mas governos normalmente são os últimos a adotar qualquer coisa nova. |
| 38:01 | Eu não esperaria muito deles. Enquanto isso a gente vive num mundo em eterna transição entre IPv4 e IPv6. |
| 38:08 | Alguns provedores já suportam nativamente, alguns você pode ligar e pedir pra habilitar roteamento por IPv6, mas não tem um padrão. |
| 38:16 | Cada caso é um caso. Tem uma questão de privacidade também. Se todo dispositivo tiver um IPv6 estático, seria como um MAC address que nunca muda. |
| 38:24 | Hoje em dia ninguém do lado de fora pode dizer com 100% de certeza quem é você porque só enxerga o IP público do provedor e não seu IP privado da rede atrás do NAT. |
| 38:34 | Mas se for direto com IPv6 dá pra dizer com certeza que veio do seu dispositivo. |
| 38:39 | Por isso sistemas operacionais como Windows usam números IPv6 temporários pra se comunicar |
| 38:45 | e garantir algum nível de privacidade. Não recomendo desligar isso. Mas veja, se eu der o comando `ipconfig` no meu Windows eu vejo que eu tenho um IPv6 estático |
| 38:54 | na minha placa de rede, que obviamente estou obfuscando uma parte, e embaixo tenho o IPv6 |
| 38:59 | temporário, que é o que um servidor iria ver se eu conectar direto nele sem NAT. De qualquer forma, se IPv4 até dava pra você decorar. |
| 39:07 | IPv6 é mais difícil. Primeiro o número é longo, então a notação pra ficar menos difícil digitar foi separar |
| 39:14 | oito blocos de 16 bits por dois pontos. Mas diferente de IPv4 onde escrevemos cada bloco no formato decimal mesmo, de 0 até |
| 39:22 | 255, 16 bits é um número que vai até mais de 65 mil então ficaria longo. Por isso escrevemos em hexadecimal, onde cada dígito vai de 0 até F, assim o bloco precisa |
| 39:31 | de no máximo 4 dígitos hexadecimais. São 8 blocos de 4 dígitos hexadecimais separados por dois pontos. |
| 39:39 | Se escolher direito, pelo menos no começo, vai ter muito endereço com vários blocos de zero no meio. |
| 39:44 | Pra facilitar, o protocolo permite omitir esses blocos. E finalmente, endereços IPv4 podem ser escritos como IPv6 colocando dois dois pontos antes |
| 39:54 | do endereço escrito no mesmo formato de antes. Enfim, pra maioria tudo isso é automático, porque o modem do provedor vem com servidor |
| 40:01 | de DHCP e ponto de acesso wifi, então ele automaticamente te dá endereço IP, configura |
| 40:07 | seu DNS, e basta você se conectar no Wifi que já tá navegando. Mas programadores precisam saber que esses detalhes existem. |
| 40:13 | Em breve muitos de vocês vão precisar lidar com esse problemas, como conectar pessoas num app de comunicação ponto a ponto tendo que furar NAT ou implementar IPv6. |
| 40:23 | E com isso terminamos essa parte da mini-série sobre o básico de redes. Isso resume, super resumido, os capítulos de camada física, camada de data link, camada |
| 40:33 | de rede e um pouco da camada de transporte do modelo OSI, com um pezinho na camada de aplicação que é a parte mais prática de verdade e que devo tentar falar mais em outros |
| 40:42 | episódios. Se ficaram com dúvidas mandem nos comentários abaixo, se curtiram o video deixem um joinha, |
| 40:55 | assinem o canal e compartilhem o video com seus amigos. |
| 41:12 | A gente se vê, até mais! |
