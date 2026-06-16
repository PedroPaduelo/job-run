# Criando uma Rede Segura | Introdução a Redes Parte 6 - VPN e NAS

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=EOmzo5d0F9Y
- **Duração:** 46:58
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Finalmente, hoje vou voltar a falar do meu novo NAS e na segunda metade dar mais um tópico |
| 0:07 | sobre redes que me interessa, como acessar meu NAS fora de casa, sem comprometer a segurança |
| 0:12 | da minha rede de casa. Na verdade, eu acho que o objetivo todo dessa mini-série de redes que ando fazendo foi |
| 0:18 | justamente pra chegar no episódio de hoje pra falar do meu NAS novo. De volta aos meus videos sobre armazenamento, lá explico tudo sobre como HDs funcionam |
| 0:27 | e como eu posso configurar vários HDs num único volume pra ter redundância e mais segurança. |
| 0:33 | Se não assistiram, recomendo ver depois. Entender arquivos e entender redes é o mínimo do mínimo que um programador precisa saber. |
| 0:42 | (...) Foi lá por 2009 que eu comprei meu primeiro NAS caseiro. |
| 0:48 | Naquela época eu usava Mac e nos primórdios de podcast e webcast eu assistia uma reviewer |
| 0:53 | de tech chamada Cali Lewis, que fez propaganda de uma nova marca muito da hora chamada Drobo. |
| 1:03 | Desde aquela época eles faziam um lance mais inteligente do que RAID normal. |
| 1:15 | Um RAID clássico precisa de HDs de mesma capacidade pra montar o array. Significa que se eu colocar um HD diferente maior, o espaço que sobra ele desperdiça. |
| 1:26 | Mas o Drobo usava um sistema proprietário que conseguia usar o máximo de discos de tamanho diferente. |
| 1:31 | Foi o que me chamou a atenção. Por quase 10 anos eu usei esse Drobo, primeiro acho que foram uns 4 HDs de 512 GB ou 1 TB |
| 1:39 | cada. Com o tempo eu ia trocando pra HDs maiores um de cada vez. Mas acho que nunca usei nada maior que uns 4 TB por HD. |
| 1:47 | E durante essa quase uma década eu já tive problema de HD realmente falhar e graças ao Drobo eu conseguia só trocar esse HD falhando e ele conseguia se reconstruir sem perder |
| 1:57 | nada. Porém a interface dele acho que era USB 2, com seus meros 480 megabits, o que não dá |
| 2:03 | muito mais que 60 megabytes por segundo. Mas como era mais pra backup, e não pra acessar o tempo todo, eu deixava fazendo backup a |
| 2:11 | noite, aí não importava tanto se era muito lento. Eu tive uma pane no Drobo inteiro uma vez que ele não ligava mais. Comprei outro Drobo, a versão 5N, que já era USB 3. |
| 2:20 | Só tirei os HDs do primeiro que quebrou, coloquei no novo na mesma ordem, e tudo voltou |
| 2:26 | a funcionar. E com a vantagem que com USB 3 já era até 10 vezes mais rápido que o USB 2. Chegava perto dos 100 megabytes por segundo. |
| 2:32 | Que continua sendo 2 a 3 vezes mais lento que um bom HD mecânico, e pelo menos 4 ou |
| 2:37 | 5 vezes mais lento que um SSD SATA. Durante a pandemia resolvi experimentar com um novo NAS e peguei um Synology DS420j, de |
| 2:46 | tamanho similar ao Drobo. Depois de mais de 10 anos, o Drobo meio que parou no tempo. O software dele é super limitado e não oferece nada além do básico. |
| 2:55 | Diversas outras marcas como QNap, Synology e mesmo opções open source como TrueNAS |
| 3:00 | pra você montar seu próprio NAS num gabinete de PC evoluíram e deixaram o Drobo no chinelo. |
| 3:05 | Resolvi ver o que os concorrentes estavam fazendo. E o Synology eu achei bacana porque é basicamente um Linux, com Linux Raid rodando mdadm por |
| 3:15 | baixo e suportando filesystems open source como ext4 ou btrfs. Ele não é tão sofisticado quanto um TrueNAS, que tem ZFS e consegue facilmente suportar |
| 3:25 | armazenamento em nível de data center, com arrays de dezenas de HDs e petabytes de dados. |
| 3:31 | Mas TrueNAS não é pra amadores. Não basta só seguir um tutorial na internet e fazer funcionar da primeira vez. |
| 3:37 | Se você nunca precisou recuperar um TrueNAS com problemas, seus dados vão estar inseguros quando você mais precisar. |
| 3:43 | Não adianta nada um software sofisticado que você vai cometer erros de amador e potencialmente corromper seus dados no meio do caminho. |
| 3:50 | E não adianta só fazer funcionar da primeira vez. O teste de fogo é quando alguma coisa der pane e você realmente precisa recuperar dados. |
| 3:57 | Se nunca passou por isso, considere que vai fazer errado da primeira vez. Como eu não quero virar administrador de sistemas nem trabalhar em data center, eu |
| 4:06 | queria uma solução que usasse componentes open source que eu confio como Linux Raid, |
| 4:11 | mas com suporte comercial decente e softwares maduros que me ajude a não cometer erros de amador. |
| 4:17 | E a Synology oferece tudo isso. Sim, é mais caro que montar um do zero com TrueNAS, mas é mais confiável, e pra isso |
| 4:24 | eu pago mais caro. Valor é relativo. Não adianta nada ser barato pra montar mas na hora de recuperar dados, você cometer |
| 4:31 | um erro e perder tudo. Aí saiu super caro. Todo amador comete esse erro de só considerar o valor inicial das coisas. |
| 4:38 | O DS420j foi bacana, mas ele tinha o mesmo problema do Drobo, interfaces lentas. |
| 4:44 | Ele tinha ou USB 3 ou conexão de ethernet 1 gigabit. Como eu disse no primeiro episódio desta série de redes, 1 gigabit é ok. |
| 4:53 | Pra maioria dos casos é velocidade suficiente. Mas por causa do canal, mais e mais eu estava lidando com arquivos de centenas de gigabytes. |
| 5:00 | Eu gravo meus videos em 4K com codec de edição DNxHR, isso dá uma média de quase 100 gigabytes |
| 5:07 | por hora de gravacão. Alguns episódios eu preciso ficar umas 2 horas ou mais gravando, então toda vez da |
| 5:13 | 200 gigas ou mais. E não, se deu vontade de comentar "ah, porque você não grava de jeito X ou jeito Y", obrigado |
| 5:20 | pelo palpite, mas se eu gravo nesta configuração é porque eu já sei que é a melhor. E isso nem é considerado muito. |
| 5:25 | Estúdios profissionais que gravam em 8K estão acostumados a lidar com terabytes por projeto. |
| 5:31 | Agora pensa, transferir 200 gigas a uma velocidade de uns 120 megabytes por segundo significa |
| 5:37 | quase meia hora pra transferir tudo pro Synology. 120 megabytes por segundo é quase saturar |
| 5:43 | a conexão ethernet de 1 gigabit. É o máximo que meu Synology conseguia ir. E no Drobo era mais lento ainda. |
| 5:50 | E isso só pra fazer backup. Eu precisava ter terabytes de SSD no meu PC pra editar isso. |
| 5:55 | Pra editar video 4K desse tamanho, HD mecânico é muito lento. E assistindo videos de outros youtubers como Linus Tech Tips, MKBHD e outros eu sabia que |
| 6:05 | todos editam videos direto dos NAS deles, usando redes acima de 2.5 gigabits. |
| 6:11 | Em 2021 eu atualizei meu equipamento de gravação. Antes minha câmera Sony A7III gravava em SD cards. |
| 6:18 | Mas ele tem aquela maldita limitação de parar de gravar automaticamente depois de 30 minutos. Toda câmera fotográfica faz isso por causa de mais uma maldita lei da Europa. |
| 6:28 | Europeu é campeão de criar leis imbecis. De qualquer forma SD cards não são confiáveis e um dia tive problema de corromper meus arquivos |
| 6:36 | e perdi um episódio. Cansado dessas limitações eu comprei um Atomos Ninja V. |
| 6:41 | Agora ligo a saída HDMI da minha câmera nesse Atomos, que por sua vez tem um SSD SATA |
| 6:47 | e ele grava direto do HDMI em arquivo no SSD, sem limitações. Isso resolveu o problema de video. |
| 6:53 | De novo, se tava indo comentar "porque não grava direto no PC", novamente, pra mim não era uma boa solução. |
| 6:59 | Obrigado pelo palpite. Daí um belo dia meu gravador de áudio, que era uma Tascan velha, comecou a dar pau e mastigar os arquivos de áudio. |
| 7:06 | Cansei dele e comprei um gravador novo, um Zoom H5. Agora ele grava tanto em SD card, mas eu ligo a saída de áudio na entrada do Atomos, então |
| 7:14 | o Atomos grava tanto o video da câmera quanto o áudio do gravador tudo junto e eu ainda tenho uma segunda cópia no gravador, via SD Card. |
| 7:22 | Daí resolvi o audio também. Agora eu queria resolver a edição e backup dos videos originais. |
| 7:27 | E sim, eu guardo e sempre vou guardar os originais. Novamente, não precisa ir nos comentários dizer pra apagar os originais pra economizar |
| 7:34 | espaço. Um profissional nunca joga fora originais. E pra isso eu queria transferir os arquivos do SSD do Atomos direto pro meu NAS em rede |
| 7:42 | 10 gigabit. 10 gigabit seria um pico de mais de 1 gigabyte por segundo. E esse meu Synology DS420j que é um modelo caseiro, não oferece upgrade de hardware, |
| 7:52 | tipo colocar placa de 10 gigabits. Então resolvi que era hora de investir num NAS profissional, o modelo DS1821+. |
| 7:59 | A série que termina com "j" acho que é de entrada, é bom pra quem tá começando. A série 21 plus é profissional. |
| 8:06 | Tem modelos ainda maiores, mas pra mim esse seria suficiente. Pra começar, esse modelo tem 8 baias de HDs. |
| 8:12 | Então decidi ir all in e comprar nada menos que 6 HDs Seagate IronWolf de 12 Terabytes. |
| 8:18 | IronWolf são HDs feitos pra NAS, eles tem mais durabilidade, aguentam mais vibrações, |
| 8:23 | tem cache maior. É como um HD caseiro, tipo modelo Barracuda, mas muito mais resistente, e obviamente mais |
| 8:30 | caros. Liguei os 6 no novo Synology, e montei um volume com 5 deles em modo SHR que é Synology |
| 8:36 | Hybrid RAID. Em vez de um RAID normal que exige HDs de tamanho igual, ele consegue aproveitar o espaço |
| 8:42 | de HDs diferentes melhor de um jeito proprietário dele. Lembra o que eu falei que o Drobo fazia? Hoje em dia outros fabricantes já superaram. |
| 8:49 | No meu caso, isso virou um volume de 42 terabytes, e o 6o HD fica desligado como hot spare. |
| 8:55 | Se um dos 5 HDs falhar, o NAS automaticamente desliga o que falhou, liga o hot spare no |
| 9:00 | lugar e começa a reconstruir o volume sem perder nada. E como é pra ir all in, resolvi fazer todos os upgrades que esse modelo permite. |
| 9:08 | Coloquei 2 NVMEs de 1 terabyte cada dedicados só pra ser cache. Assim arquivos mais acessados ficam no NVME, em vez de ter que ir nos HDs mecânicos. |
| 9:17 | E nem é muito que precisava porque apesar de serem HDs mecânicos e muita gente ficar me perguntando se um RAID feito com SSDs não seria mais rápido. |
| 9:25 | A resposta deveria ser óbvia: não, o custo simplesmente não compensa. Mas na cabeça de vocês, se imagina que porque estou lidando com HDs mecânicos, vai ser |
| 9:34 | mais lento que um SSD. E é aí que estão errados. Em IOPS talvez, mas em velocidade não. |
| 9:40 | Cada HD desses é capaz sozinho de mais de 200 megabytes por segundo. Lembra da explicação de dispositivos de bloco e como arquivos são divididos em blocos |
| 9:49 | e como esses blocos são dividos nos vários HDs de um RAID? Cada HD no RAID contribui com mais ou menos metade da velocidade pra leitura e escrita. |
| 9:58 | Então cada um contribui com pelo menos 100 megabytes por segundo pra velocidade total, indo pra mais de 500 megabytes por segundo. |
| 10:05 | Pra dar perspectiva isso é mais de 4000 gigabits. E eu estou arredondando por baixo, em benchmarks eu estou conseguindo ir até 6000 ou 7000 |
| 10:13 | gigabits. Sua rede cabeada de casa é só 1 gigabit, mas na minha que é 10 gigabits, consigo suportar |
| 10:21 | isso. Pra conseguir essas velocidades na rede eu comprei a placa de rede 10 gigabits e comprei cabos de rede cat 6a com conectores blindados. |
| 10:29 | Não adianta nada placa de rede boa com cabos que não aguentam a velocidade. Se eu falei que consigo ir na faixa acima de 7000 gigabits por segundo, às vezes 8000, |
| 10:38 | significa que estou usando a maior parte do que minha rede consegue. E pra tudo falar nessa velocidade, também comprei uma placa de 10 gigabits pro meu PC |
| 10:46 | e um pequeno switch TP-Link que suporta 10 gigabits em todas as portas. Aliás, cuidado com switches com marketing duvidoso. |
| 10:54 | Eu vi caixas de switches baratos dizendo que suportam 5 gigabits, e tem 5 portas, aí você |
| 10:59 | pensa que cada porta suporta 5 gigabits, mas não, em letras miúdas eles falam que o aparelho |
| 11:05 | suporta até o máximo de 5 gigabits ou seja, cada porta é só 1 gigabit. |
| 11:11 | No meu caso são 5 portas de 10 gigabits cada, então o aparelho todo suporta 50 gigabits. |
| 11:16 | E isso é importante, porque lembra todo o processamento de checagem de erros, roteamento e tudo mais que um switch precisa fazer? |
| 11:23 | Tudo isso exige CPU que consiga processar o tráfego de 50 gigabits por segundo. Ele fica bem quente quando tá ligado trabalhando. |
| 11:30 | Finalmente, o último upgrade desse all in foi trocar os 4 gigabytes de RAM que o DS1821 |
| 11:36 | vem e colocar 16 giga de RAM ECC, que tem correção de erros, pra evitar single event |
| 11:42 | upset de raios cósmicos, por exemplo, como expliquei no segundo video da série, de correção de erros. |
| 11:48 | Minha memória ECC provavelmente tá rodando Hamming Code, pra recuperar qualquer bit flip acidental. |
| 11:53 | Tudo isso pra garantir que nenhum dado nessa caixa seja corrompida de jeito nenhum. E agora sim, eu consigo gravar os videos crus depois da gravação direto pro NAS em velocidade |
| 12:04 | máxima e consigo usar o DaVinci Resolve pra editar videos direto do NAS, sem precisar |
| 12:09 | ter nada em SSD local. Vou te falar que a qualidade de vida é incrível, meu fluxo de trabalho fica bem mais fácil. |
| 12:15 | Isso tudo já é equipamento que um pequeno estúdio de gravação teria, pra ter 2 ou 3 editores de video trabalhando direto do NAS. |
| 12:23 | Pra estúdio maior, eles teriam racks de HDs, cada uma com mais de uma porta de 10 gigabits, |
| 12:28 | talvez numa rede de 100 gigabits por segundo. Nos videos do Linus ele tem o projeto petabyte, onde montam rack com TrueNAS e dezenas de |
| 12:36 | HDs ou SSDs com ZFS que suportaria uma dúzia de editores de video tudo trabalhando por |
| 12:42 | rede 2.5 gigabit, lidando com videos 8K de terabytes de tamanho. O que eu montei é a versão junior disso. |
| 12:50 | Dá pra ir muito longe. Mas isso foi só pra solucionar meu fluxo de trabalho de video que, honestamente nem |
| 12:56 | é tão pesado assim. Eu sou o único editor e faço tudo sozinho. Portanto sim, esse investimento foi bem mais do que eu precisaria. |
| 13:03 | Só pra ter uma idéia, o NAS, os HDs, os upgrades de SSD, rede e RAM, deram um total |
| 13:10 | de bem mais que 30 mil reais. Se fosse lá fora teria custo fácil mais de 3 mil dólares. |
| 13:15 | Em dólar nem parece tão caro. Um computador moderno como um Mac Studio custa mais que isso. |
| 13:20 | Mas falando em reais, sim, é um terço de um carro popular. Qualidade é proporcional ao preço. |
| 13:26 | Mas, eu não ia usar só pra videos. A vantagem desse NAS é que ele vem com um bom processador, um AMD Ryzen quad-core de |
| 13:33 | 2.2 Ghz cada. Não chega nem aos pés dos 16 core que meu Ryzen 9 5850 do meu PC tem, mas pra um NAS |
| 13:41 | tá sobrando. Um NAS é nada mais, nada menos, que um PC com Linux. Na teoria você não deveria, mas pode rodar qualquer outro software dentro dele. |
| 13:49 | Não deveria porque a função de um NAS é ser dedicado a lidar com arquivos. Num ambiente onde outras pessoas estivessem trabalhando e puxando arquivos o tempo todo |
| 13:58 | pra editar, a CPU ia ficar trabalhando só pra entregar os blocos o mais rápido possível. Fora que você não quer que, por acidente, um aplicativo com bug acabe corrompendo seus |
| 14:07 | dados. Então nunca rode nada diferente num NAS de trabalho. Mas como é meu NAS caseiro onde eu sou a única pessoa com acesso, quis aproveitar |
| 14:15 | o processamento sobrando pra mais coisas. O software da Synology já suporta Docker nativamente, com interface gráfica facinha |
| 14:22 | de usar e acesso a terminal via ssh se eu quiser rodar manualmente. Então comecei a fuçar coisas pra rodar nele. |
| 14:30 | Em outro episódio vou finalmente explicar mais detalhes sobre Docker e containers, mas por hoje entenda Docker como uma forma fácil, controlada e isolada de instalar software |
| 14:40 | no meu NAS sem grandes riscos. Vamos recapitular o básico de redes. Toda vez que eu navego em sites, normalmente não me preocupo porque todos oferecem HTTPS, |
| 14:48 | então tudo que trafega entre meu navegador e o site é criptografado. Mas isso é depois que já sei o endereço IP do site. |
| 14:54 | Pra saber o endereço IP baseado no domínio como google.com ou apple.com, alguém precisa |
| 15:00 | me dizer que apple.com é o IP x.y.z. E quem sabe disso é um DNS, lembram? |
| 15:06 | No terceiro episódio da série eu disse que meu PC ganha endereço IP privado atrás de um NAT graças ao serviço de DHCP do meu roteador, que funciona como um síndico do |
| 15:16 | prédio. Eu ligo meu PC e ele pergunta pro síndico, "ow, que endereço ip tem sobrando pra mim", e o DHCP responde "tem esse 192.168.1.200, beleza?" |
| 15:23 | e aí o PC assume esse endereço. Junto com o endereço vem outras configurações, como o endereço de DNS, que eu disse pra |
| 15:32 | mudar pra ser 1.1.1.1 da CloudFlare ou 8.8.8.8 do Google e evitar usar o DNS que o provedor |
| 15:38 | já pré-configurou pra você caso se preocupe com privacidade, porque DNS de provedor não |
| 15:44 | oferece DoH, que é DNS over HTTPS. O navegador abre conexão encriptada via TLS com o site depois que sabe o endereço ip |
| 15:54 | do site, mas a requisição pro DNS, perguntando "qual ip que é apple.com" vai em texto puro, |
| 16:00 | aberto, sem criptografar. E se você deixou o DNS do provedor, ele sabe que sites você navegou, que horas, a partir |
| 16:06 | de qual lugar. Não chega a ser nenhuma informação tão crucial assim, mas pra quem se importa com privacidade, é mais uma informação sobre você que está vazando. |
| 16:14 | Tem gente que diz "foda-se" e tudo bem, não precisa comentar isso, seu palpite é irrelevante. |
| 16:19 | Estou falando com quem se importa. Não só isso. A gente usa plugins de adblock pra bloquear propagandas em sites, mas eles não conseguem |
| 16:26 | pegar tudo sempre. Toda ajuda a mais é bem vinda. Por tudo isso resolvi que o primeiro container que queria instalar no NAS seria do aplicativo |
| 16:34 | Pi-Hole. Ele se chama assim porque foi originalmente feito pra instalar num raspberry-pi, que é |
| 16:39 | como eu usava antes. Mas ele é levinho e mover pro NAS significa um equipamento a menos que preciso dar manutenção. |
| 16:45 | O Pi-Hole é um servidor de DNS e que oferece uma aplicação web pra dar um monitoramento |
| 16:50 | gráfico pra gente. O que eu faço é configurar pra usar o DNS da CloudFlare 1.1.1.1 e ele faz cache de tudo. |
| 16:56 | E ele também se sincroniza com alguns bancos de dados mantidos pela comunidade de domínios |
| 17:01 | reconhecidos como sites de propaganda ou mesmo de malwares. Daí se algum site onde navego pede alguma coisa desses domínios, o Pi-Hole rejeita |
| 17:10 | e não me deixa navegar pra lá. Daí o que eu faço é colocar o endereço IP do NAS como DNS no DHCP do meu roteador. |
| 17:17 | Daí todos os equipamentos de casa, meu PC, minhas TVs, meus consoles de video game, meu celular, até minhas lâmpadas inteligentes, recebem a mesma configuração e passam a |
| 17:26 | usar o Pi-Hole como servidor de DNS. A outra vantagem é que ele consegue fazer requisições de DoH ou DNS over HTTPS. |
| 17:35 | Lembram que eu falei que toda requisição de pergunta pra DNS vai em texto aberto? Com DNS over HTTPS ele primeiro abre uma conexão segura via HTTPS e manda a pergunta criptografada. |
| 17:46 | Agora tudo é criptografado, dificultando alguém saber meu padrão de navegação na web. |
| 17:52 | Pra isso precisei de um segundo container de Docker, oferecido pela própria Cloudflare, que é o serviço cloudflared. |
| 17:58 | Lembrando que "d" no final é de daemon. Não vou entrar em detalhes porque a documentação diz tudo que precisa saber mas o container |
| 18:04 | em si já vem pré-configurado apontando pros servidores de DNS que suportam HTTPS da Cloudflare. |
| 18:11 | Daí eu aponto meu Pi-Hole pra esse daemon e pronto, meu navegador pergunta pro Pi-Hole, que abre uma conexão segura com a Cloudflare e resolve o domínio via HTTPS e nesse percurso, |
| 18:21 | ninguém no meio do caminho, incluindo meu provedor, conseguem saber em quais sites estou navegando. |
| 18:27 | Se gostaram da solução, vou deixar links pro que falei na descrição do video abaixo. O próximo container eu falei um bocado nas stories do meu Instagram então quem acompanhou |
| 18:36 | sabe. Faz décadas que venho baixando animes, série e filmes. Tem coisas que eu assistia nos anos 80 e 90 e que não existem mais em nenhuma plataforma |
| 18:44 | de streaming de hoje, em particular animes antigos. Tem outros que existem no Japão, mas nunca vieram pro Ocidente. |
| 18:51 | Enfim, tem milhares de conteúdos que se você só assiste Netflix, nunca ficou sabendo que existe. |
| 18:56 | Aliás, a seleção do Netflix é bem ruim e incompleta. Sinto pena de quem só conhece o que tem lá. |
| 19:01 | Sim, tecnicamente é pirataria. Não estou incentivando mas eu também acho que quem quer piratear vai piratear independente. |
| 19:09 | Avisar que não pode nunca fez nenhum efeito. É que nem foto de câncer em pulmão em caixa de cigarro. |
| 19:14 | Isso nunca funcionou, como ex-fumante eu sempre ignorei completamente aquilo. Cada um é adulto e lide com as consequências. |
| 19:22 | Quer fumar, fume. Só não incomode os outros. Quer piratear, pelo menos pirateia direito. Que atire a primeira pedra quem nunca baixou nada via bittorrent. |
| 19:31 | Em outro episódio falo sobre ele, mas por hoje, todo mundo pelo menos sabe que é o melhor jeito de piratear. |
| 19:36 | Eu sou da época do LimeWire, eDonkey, Kazaa, Napster e outros, mas bittorrent é animal. |
| 19:43 | E existem softwares open source como Jellyfin, Radarr, Sonarr e Prowlarr que fazem o seguinte. |
| 19:50 | Jellyfin é um projeto em cima de outro conhecido, o Emby, é basicamente um software que organiza |
| 19:55 | sua mídia, videos, música e tudo mais numa interface parecida com da Netflix, com tocador |
| 20:01 | e tudo mais. Vale a pena pesquisar. Ele vasculha suas pastas de mídia e faz índice, baixa capas dos filmes, notas do Rottentomato, |
| 20:08 | informações de elenco num IMDB e organiza bonitinho pra você. Mas você ainda tem que ficar baixando as coisas manualmente, renomeando, colocando |
| 20:19 | nas pastas certas. E se desse pra ser tudo automático? É pra isso que servem o Radarr, Sonarr e Prowlarr. |
| 20:25 | Você pode assinar o RSS de bittorrent de séries que ainda estão saindo e o povo de fansub ainda tá legendando, e quando ficam disponíveis, baixa sozinho pra você, renomeia, |
| 20:36 | baixa capa e tudo mais e quando você liga a TV, já está organizado no seu Jellyfin. Dependendo da série que tá acompanhando, se for muito famosa, no mesmo dia que saiu |
| 20:45 | na Amazon Prime, algumas horas depois já aparece no seu Jellyfin. É literalmente como se você tivesse seu próprio Netflix particular, só que melhor. |
| 20:53 | Hoje não vou mostrar como configura tudo isso mesmo porque eu sou das antigas e uso mais pra baixar coisas que não se encontra fácil. |
| 21:01 | Séries novas eu prefiro assistir direto dum Crunchyroll da vida. Eu assino todos os serviços de qualquer forma. |
| 21:06 | Mesmo filmes que gosto muito compro em Blu-Ray, então quando baixo, normalmente já tinha comprado, só baixo porque é mais fácil pra assistir. |
| 21:14 | E em vez de Jellyfin, prefiro usar o Plex. Ele é meio chatinho com planos pagos e tudo mais, mas é o que tem a interface mais bem |
| 21:21 | feita, melhores apps pra celular e TV, e realmente funciona igual uma Netflix. |
| 21:26 | Dêem uma olhada. Eu tenho séries de anime, ele organiza as temporadas, episódios que já assisti, posso |
| 21:32 | começar a assistir no PC e continuar na TV, perfeito. O único problema é que ele só funciona dentro de casa, na minha rede local. |
| 21:40 | O Plex é o concorrente do Jellyfin, Emby, Kodi e outros, tem planos pagos se eu quiser |
| 21:45 | acessar de fora, mas digamos que prefira continuar usando só os recursos gratuitos, como faço |
| 21:51 | pra poder assistir meus animes quando estiver viajando, na casa dos meus pais ou em qualquer lugar fora de casa? |
| 21:57 | E agora vem a última coisa que queria explicar de redes pra vocês. Por causa da pandemia, muita gente ganhou a opção de trabalhar remotamente de casa |
| 22:04 | e aqui o problema é oposto. Como você faz pra poder ter acesso a servidores da empresa por exemplo? |
| 22:10 | É aqui que entra a solução de uma VPN, Virtual Private Network ou redes virtuais |
| 22:15 | privadas. VPN existem diversos tipos e de novo,não sou especialista em redes então quero compartilhar |
| 22:21 | com vocês só o básico. Até aqui a gente sempre assume que redes funcionam com dispositivos de hardware como |
| 22:28 | placas de rede, que fisicamente tem um buraco pra espetar um cabo ethernet com conector |
| 22:33 | RJ-45. Ou uma placa Wifi que você conecta num ponto de acesso. Mas em ambos os casos se trata de dispositivos físicos de hardware. |
| 22:42 | Pro sistema operacional falar com esses e outros dispositivos eles precisam de um pedaço de software chamado driver. |
| 22:48 | Esses drivers normalmente são carregados juntos com a kernel do seu sistema operacional, |
| 22:54 | seja Linux, Windows, Mac, Android, iOS, não importa. Se tem um hardware, a kernel precisa de um driver. |
| 22:59 | Num Windows você enxerga os dispositivos no gerenciador de dispositivos e pode ver |
| 23:05 | detalhes, tentar atualizar os drivers por lá e tudo mais. Em Linux pode usar comandos como `lspci` pra listar os dispositivos ligados no bus ou barramento |
| 23:13 | de PCI. Enfim, o importante é a kernel conseguir enxergar todos eles. |
| 23:20 | Mas tecnicamente pro sistema operacional, meio que não importa se o hardware existe de verdade, contanto que exista um driver que diz que existe. |
| 23:28 | Presta atenção. Um driver pode mentir pro sistema. É o que acontece quando se instala uma máquina virtual com um VirtualBox da vida. |
| 23:37 | Dentro dela manda instalar o Windows e ela vai instalar drivers que dizem pra esse Windows que tem uma placa gráfica, embora não tenha hardware disso. |
| 23:44 | O driver está emulando um hardware e desenhando na janela do VirtualBox. O Windows virtualizado acha que é uma placa de verdade. |
| 23:53 | Ele não tem como saber a diferença, ele tá dentro da Matrix. E isso acontece com todos os dispositivos. |
| 23:58 | Dentro da máquina virtual os drivers dizem que tudo existe, mas na prática os drivers conversam com o VirtualBox do lado de fora e assim possibilita compartilhar meu teclado |
| 24:09 | de verdade, mouse, som e tudo mais. E se fosse possível eu ter placas de redes virtuais? |
| 24:14 | E aqui entra os conceitos de TUN e TAP. Lembra a idéia que pacotes de rede são divididos em camadas? |
| 24:20 | No modelo OSI temos camada 1 que é física, camada 2 que é data link, que é o que ethernet |
| 24:25 | se preocupa, tem a camada 3 que é network que é onde a parte IP de TCP/IP se preocupa. |
| 24:30 | Na prática TUN é um dispositivo de rede virtual que atua na camada 3 de rede e TAP |
| 24:36 | cria um dispositivo de rede virtual que atua na camada 2. Isso é uma tecnicalidade que pra gente não importa muito, mas só pra saber. |
| 24:43 | Nos diversos componentes de uma infraestrutura de rede, cada um lida com pacotes em camadas diferentes. |
| 24:49 | A gente que é programador acaba só lidando com camada de aplicação, mas coisas como placas de rede ou switches atual da camada 3 pra baixo, não se importando com as camadas |
| 24:59 | superiores. Numa máquina virtual, se instala um driver de rede, pra simular que existe rede, e o |
| 25:06 | Windows virtualizado fala com uma placa que não existe, um TAP, que por baixo cria um |
| 25:11 | bridge, ou ponte, entre essa placa virtual e a placa real do PC que é host. |
| 25:17 | Graças a essa placa virtual, dentro da máquina virtual ele ganha um IP tipo 172 ponto alguma coisa. |
| 25:22 | E tudo que é roteado por essa placa, chega na placa real e é roteado pra internet. Na prática é como se existisse uma nova sub-rede privada dentro da rede interna. |
| 25:31 | Eu uso VMWare na minha máquina, e se abrir as configurações avançadas de rede, olha |
| 25:36 | só o que eu acho, várias placas de rede. Quase todas virtuais. Essa Ethernet aqui é a minha placa de 10 gigabits de verdade que falei antes. |
| 25:45 | Essa outra é a de 2.5 gigabit que vem embutida na placa mãe. Só essas são as de verdade. |
| 25:51 | Mas essas outras aqui são placas virtuais pra coisas como minhas máquinas virtuais. |
| 25:56 | Mesmo num Docker você pode subir container em dois modos de rede, host ou bridge. |
| 26:01 | Se for host, vai subir como se fosse qualquer outro programa no seu PC, usando as mesmas configurações de rede local. |
| 26:08 | Mas se escolher bridge, o container vai falar com uma placa de rede virtual TAP, que vai |
| 26:13 | criar uma sub-rede separada, e rotear os pacotes por essa ponte até meu PC host. |
| 26:20 | A vantagem de usar bridge é o seguinte. Digamos que eu suba dois containers de web, que internamente vai carregar um programa |
| 26:26 | servidor web que quer se conectar na porta 80. Ambos estão em modo host. |
| 26:31 | O primeiro vai carregar e se pendurar na porta 80 do meu PC. Mas o segundo container vai falhar, porque vai tentar se conectar na porta 80, mas já |
| 26:39 | tá ocupado, então o sistema operacional recusa e rejeita o pedido do container. Agora, se rodar ambos em modo bridge, eles ganham uma rede vazia com outro range de endereços |
| 26:50 | IP estilo 172 alguma coisa que do lado de fora ninguém enxerga. É como sua rede 192.168 local que do lado de fora ninguém enxerga por causa do NAT. |
| 27:00 | Cada container, nessa rede 172 privada, consegue se ligar na porta 80 interna do container, |
| 27:06 | porque é como se estivessem numa máquina vazia com uma placa de rede só pra eles. Mas do lado de fora podemos mapear a porta 80 de dentro do container com a porta 8080 |
| 27:16 | de fora do meu PC, e o segundo container sube na porta 80 interna e podemos mapear pra porta |
| 27:23 | 8081 do mesmo PC. Ambos os programas acreditam que estão sozinhos, conseguem ligar em portas 80 virtuais, mas |
| 27:30 | do lado de fora estamos remapeando as portas virtuais pra outras portas livres de verdade. |
| 27:35 | Máquinas virtuais e containers são formas de eu mentir pros programas acharem que estão rodando numa máquina sozinhos. |
| 27:41 | E do lado de fora eu controlo o que quero expor pra elas. De novo, containers de Docker estão na Matrix e não sabem disso. |
| 27:49 | Não são só tecnologias de virtualização e containers que usufruem de placas de rede |
| 27:55 | virtuais. E agora entra os TUN que significa tunel. A parte que eu falei em outros episódios que não queria explicar é roteamento e agora |
| 28:02 | vou mostrar só o mínimo pra vocês entenderem onde quero chegar. Eu mostrei já no episódio 3 desse mini-série como pacotes conseguem sair da minha rede |
| 28:10 | pelo roteador do provedor e ir pra internet. E mostrei rapidamente uma tabela de rotas. |
| 28:15 | Todo sistema operacional com TCP/IP mantém uma tabela de rotas. Ela que diz pra mandar todo tráfego pro roteador, que costuma ter o endereço IP mais baixo |
| 28:25 | da sub-rede interna como 192.168.1.1 ou 10.0.0.1 ou algo assim. |
| 28:31 | No meu caso é esse TP-Link que deixo do lado do modem. Ele recebe os pacotes e também tem uma tabela de rotas como essa só que no caso dele a |
| 28:38 | saída padrão é mandar pro modem, e o modem por sua vez passa pra frente pra outros servidores |
| 28:43 | na internet. Essa é a tarefa de um default gateway, a porta padrão de saída. |
| 28:49 | Lembra no episódio anterior onde mostrei o exemplo onde estou numa rede de empresa rígida que restringe uso da internet e fecha quase todas as portas e nem deixa eu navegar |
| 28:58 | em todos os sites? E como usando um servidor da Digital Ocean eu furei um buraco no firewall e abri um túnel |
| 29:05 | seguro encriptado usando SSH? Uma VPN é um programa diferente de SSH mas em conceito funciona parecido, furando buraco |
| 29:13 | em firewall ou no meu caso no CGNAT da Vivo, se conectando num servidor de fora e abrindo |
| 29:19 | um túnel. Mas em vez de eu abrir o túnel manualmente com o comando SSH uma VPN costuma instalar |
| 29:25 | uma placa de rede virtual TUN. No caso de Linux cria um dispositivo como `/dev/tun`. |
| 29:30 | Esse dispositivo ganha um endereço IP inválido de internet como 172 alguma coisa. |
| 29:36 | E o software de VPN faz mais uma coisa, cria entradas nessa tabela de roteamento que falei. |
| 29:42 | Dá pra configurar de varias formas. Por exemplo, posso adicionar na tabela que toda vez que do meu PC de casa eu tentar acessar |
| 29:48 | um IP que só existe na rede da empresa, os pacotes são direcionados não pra minha placa |
| 29:54 | de rede de verdade, mas sim pra esse dispositivo virtual TUN que na realidade é um tunel criptografado |
| 30:00 | ligado no servidor de VPN da empresa. Vamos dar um exemplo. Como já falei existem dezenas de formas diferentes de VPN. |
| 30:07 | Existe OpenVPN, existe Microtik, soluções baseadas em Wireguard como Tail Scale, mas |
| 30:13 | eu escolhi usar a Zero Tier, que achei simples, fácil de usar, e resolve o meu problema de |
| 30:18 | expor meu Plex de anime fora de casa. Pra começar crio uma conta lá e uma nova rede. |
| 30:24 | Essa rede tem um código identificador que, obviamente estou escondendo uma parte. Ela começa com a84. |
| 30:30 | Agora vou no meu NAS e instalo o docker da ZeroTier, que é um programa cliente que vai se conectar no servidor deles. |
| 30:36 | Seja no meu NAS, seja num PC com Linux, primeiro preciso carregar o driver pra criar o tal dispositivo virtual de TUN. |
| 30:43 | Eu me conecto no NAS via SSH e, como root, crio o seguinte script: `echo -e '#!/bin/sh -e \\
insmod /lib/modules/tun.ko' > /usr/local/etc/rc.d/tun.sh |
| 30:49 | chmod a+x /usr/local/etc/rc.d/tun.sh /usr/local/etc/rc.d/tun.sh ls /dev/net/tun /dev/net/tun` Estou só escrevendo um arquivo com o comando insmod e o caminho pro módullo de tun pra kernel carregar. |
| 30:54 | Na sequência estou dando permissão pra esse script executar. Eu falei nos videos de Ubuntu pra estudar chmod e permissões lembram? |
| 31:02 | Daí rodo da primeira vez manualmente, no próximo boot já vai carregar sozinho. No final checo se o dispositivo virtual apareceu com o comando ls pra listar e de fato, tá |
| 31:12 | lá. Agora tenho o equivalente a uma placa de rede virtual, de mentira. Ainda do terminal, agora baixo e rodo o container da zerotier que é um programa cliente que |
| 31:21 | vai se conectar no servidor deles, furando um buraco em firewall e CGNAT. Relembrando, o conceito de furar é porque do lado de fora, meu PC é inacessível por |
| 31:31 | conta de firewall ou NAT do provedor. O servidor da ZeroTire não tem como abrir uma conexão comigo. |
| 31:37 | Mas eu consigo me conectar com o servidor deles. Pra entrar está bloqueado, mas pra sair está liberado. |
| 31:42 | Agora que eu abri a conexão, o servidor da ZeroTier consegue falar de volta comigo por essa mesma conexão. |
| 31:49 | Isso que significa "furar". `docker run -d \\
 --name zt \\
 --restart=always \\
 --device=/dev/net/tun \\
 --net=host \\
 --cap-add=NET_ADMIN \\
 --cap-add=SYS_ADMIN \\
 -v /var/lib/zerotier-one:/var/lib/zerotier-one |
| 31:54 | zerotier/zerotier-synology:latest` Nessa configuração eu faço esse container enxergar o dispositivo TUN que acabamos de criar, configuro rede pra ser host, ou seja, sem ser ponte, configuro um volume externo |
| 32:01 | pra configuração que é onde o container vai gravar coisas que ele precisa e que não podem desaparecer se o container bootar. |
| 32:07 | E é isso. Quando terminar de subir vai se conectar e vai ganhar um número identificador da zero |
| 32:13 | tier. Ainda pelo terminal, posso mandar comandos pra esse container e o que preciso fazer é mandar se conectar naquela rede da ZeroTier que criei que começa com a84 lembra? |
| 32:22 | É um numerozão. Se você se registrar no site e criar uma nova rede, obviamente o número vai ser diferente. |
| 32:28 | Então vamos conectar esse cliente que instalei via Docker com minha rede privada no servidor da ZeroTire. |
| 32:34 | `docker exec -it zt zerotier-cli join e5cd7a9e1cae134f` Pronto. Do lado do NAS é só isso. Agora vou no meu celular e no meu PC e baixo o aplicativo da ZeroTier e instalo nos dois. |
| 32:42 | É o equivalente ao docker que instalei no NAS, um aplicativo cliente da ZeroTire. No meu celular abre esse aplicativo feioso aqui. |
| 32:49 | Mesma coisa, eu clico em Add Network e cadastro a mesma rede que começa com a84 e já posso |
| 32:54 | conectar nela. No meu PC depois que instalei e rodei, aparece aqui embaixo na barra de tarefas. |
| 33:00 | Mesma coisa, me junto na mesma rede. Note que em cada dispositivo diferente ele tem um outro número identificador. |
| 33:06 | No meu celular lá embaixo tem esse outro número que eu escondi que começa com `eeb`, é o identificador do meu celular. |
| 33:13 | E no app do PC mesma coisa, ele tem esse "My Address" que começa com `3d7`. Pronto, todo mundo configurado e conectado na mesma rede da minha conta na Zero Tire. |
| 33:23 | Último passo, volto pro site, abro a configuração da rede `a84` e lá embaixo vai ter uma lista |
| 33:28 | de dispositivos que se conectaram. E olha só, meu PC que começa com `3d7` apareceu, meu NAS que começa com `d46` aparece e meu |
| 33:36 | celular que começa com `eeb` apareceu. Agora só preciso autorizar todos com esses checks do lado e pronto. |
| 33:42 | Tá todo mundo conectado na mesma rede privada. Nessa nova sub-rede todo mundo tem endereços 172.22 ponto alguma coisa. |
| 33:51 | Por exemplo, meu NAS ganhou o endereço 172.22.61.42, o mesmo vale pra todos os dispositivos, cada |
| 33:58 | um com um endereço IP. Esses endereços não são válidos na internet, só dentro dessa rede privada. |
| 34:04 | Agora vamos entrar no meu celular com o ZeroTier desligado. Se eu abro o app do Plex, que não pago a assinatura, olha que tristeza. |
| 34:12 | Vazio. Vamos fechar, abrir o ZeroTier e conectar na rede dele. Agora abro o app do Plex de novo e voilá!! |
| 34:18 | Olha aqui minhas bibliotecas, e todos os meus animes bonitinho aparecendo! Estou via 4G, fora do Wifi de casa. |
| 34:25 | Estou conseguindo falar com o docker de Plex no meu NAS porque estamos conectados na mesma sub-rede privada da ZeroTier via VPN. |
| 34:34 | Mesma coisa no meu notebook. Se estivesse fora de casa, em vez de usar o endereço IP da minha rede que é 192.168 |
| 34:40 | ponto alguma coisa, ligo o ZeroTier e no navegador digito aquele endereço 172.22 porta 32400 |
| 34:48 | e olha só, estou navegando no Plex de dentro do NAS, mesmo estando fora da minha rede. |
| 34:53 | Mas como isso é possível? E aí vem o truque que a ZeroTier e outros softwares de VPN fazem. |
| 34:58 | Vamos abrir o terminal do Windows. Digitando `route print -4` pra mostrar rotas de ipv4, tenho rotas pra todo endereço 192.168 |
| 35:07 | interno da minha rede. É com essa tabela que ele sabe pra onde mandar pacotes. Mas depois que habilito o ZeroTier, podemos rodar o comando de route de novo e vemos que |
| 35:16 | adiciona novas entradas nessa tabela. Olha só, ele passa a reconhecer endereços 172 ponto alguma coisa e o default gateway |
| 35:24 | é esse dispositivo 172.22.121.226. Vamos de volta na janela de configurações avançadas de rede do Windows, onde lista |
| 35:32 | dispositivos de rede e olha aqui o dispositivo virtual TUN da ZeroTier. É como se fosse uma placa de rede normal, mas ela não existe, é o driver mentindo |
| 35:40 | pro Windows, ela é virtual. Botão direito e propriedades. Vamos ver que configurações de IPV4 ele tem e olha o endereço, 172.22.121.226, que |
| 35:51 | é o default gateway que registrou na tabela de roteamento. Por isso que toda vez que tento navegar, por exemplo, pro meu Plex, com o endereço 172.22.61.142, |
| 36:00 | o sistema pega os pacotes, manda pro dispositivo virtual, que por sua vez é só um software |
| 36:05 | cliente que tá conectado no servidor da ZeroTier. Ele faz forward desses pacotes, ou seja, redireciona pra fora, pra ZeroTier. |
| 36:13 | E no mesmo servidor está conectado o cliente de docker que instalei no NAS, que recebe |
| 36:18 | os pacotes por essa conexão. O que eu tinha mostrado de abrir túnel SSH no episódio anterior é o modelo que se chama |
| 36:25 | de client to site ou acesso remoto. Mas nesse caso eu tenho dois clientes atrás de uma rede privada conversando como se estivessem |
| 36:33 | na mesma rede, ambos com clientes conectados num servidor de VPN, é o modelo site to site |
| 36:39 | ou gateway to gateway. Depois estudem esses termos. Mas na prática, essa solução da ZeroTier cria um túnel criptografado entre meu celular |
| 36:47 | ou meu notebook com o NAS usando um serviço no meio que permite burlar as restrições |
| 36:53 | de cada uma das redes, seja firewalls, seja CGNATs. Isso que mostrei da ZeroTier é uma solução boa quando você precisa acessar um servidor |
| 37:01 | específico na sua casa ou na empresa, dentro de uma rede privada virtual. Mas isso deve soar um pouco diferente do que você já deve ter ouvido falar de VPN. |
| 37:09 | Se eu tentar navegar na Web, esse tráfego não vai pra ZeroTier. Só endereços 172.22 que vão ser enviados pelo túnel, todo o resto é roteado normalmente |
| 37:20 | pela sua rede local, sem mudar nada. O que você conhece de VPN é o contrário, que todo tráfego Web passa pelo túnel da |
| 37:28 | VPN e sai pelos servidores deles. Muita gente que vê propaganda de VPN pensa neles como uma forma de burlar o filtro de |
| 37:35 | região de sites como Netflix ou Amazon Prime pra conseguir assistir séries que não passam |
| 37:40 | no Brasil. Ou o uso mais correto que é conseguir navegar com segurança mesmo quando estiver em redes |
| 37:46 | não-confiáveis como o Wifi do Starbucks. Falando sobre redes públicas, obviamente, nunca, jamais, digite sua senha de qualquer |
| 37:55 | coisa enquanto estiver conectado em rede da faculdade, do aeroporto, do starbucks ou o que for. |
| 38:01 | Lembra no terceiro episódio da minissérie quando falei sobre o problema de hubs, modo promíscuo e tudo mais? |
| 38:06 | Você não sabe quem está escutando seus pacotes numa rede aberta. Sempre que estiver numa rede pública, use uma VPN pra acessar coisas como seu banco. |
| 38:15 | Assim você garante que vai estar tudo criptografado e mesmo se tiver alguém fuçando seus pacotes |
| 38:20 | de rede, não vai conseguir ler nada. Se usa um celular android da Samsung, eles já tem embutido um serviço de VPN barato |
| 38:27 | que ativa automaticamente quando se conecta em Wifi público. Recomendo testar se puder, mas qualquer um serve. |
| 38:35 | NordVPN, ExpressVPN, qualquer um. O que acontece quando você usa um cliente de VPN? |
| 38:40 | Por acaso eu uso o NordVPN. Ele oferece opção de se conectar em servidores que eles mantém pelo mundo todo. |
| 38:46 | Então vou me conectar num dos Estados Unidos. E pronto, conectado. Agora navego na web normalmente e parece que nada mudou. |
| 38:53 | Vamos praquele site que mostra qual é meu ip, what is my ip. E olha só, fala que o endereço que ele enxerga de mim é um endereço nos Estados Unidos. |
| 39:01 | Justamente porque todos os pacotes da minha máquina estão sendo tunelados pra um servidor da NordVPN nos Estados Unidos e de lá indo pros sites que quero navegar. |
| 39:11 | Do ponto de vista dos sites, é um computador nos Estados Unidos que tá conectado. Foi isso que fizemos com SSH no episódio anterior, lembra? |
| 39:19 | Local Forwarding? É a mesma coisa, só que mais fácil de usar em vez de ter que digitar aquele comando grande |
| 39:25 | no terminal. Mas o que de fato tá acontecendo? Pra isso vamos abrir a tabela de rotas de novo na linha de comando com `route print`. |
| 39:32 | Veja a primeira linha e a última linha. Estou simplificando mas ele basicamente diz pra qualquer endereço IP que quero acessar |
| 39:38 | de 0 até 255, pra mandar pro default gateway 192.168.1.1 que é meu roteador como mostrei |
| 39:44 | no terceiro episódio. Mas agora vamos ver quando estou conectado na NordVPN. Olha o que apareceu. |
| 39:50 | Logo no começo e lá no final da tabela de rotas, agora tem novas entradas apontando |
| 39:56 | pra interface 10.5.0.2. E quem diabos é isso? Ainda na linha de comando digitamos `ipconfig /all` no Windows pra ver todos os dispositivos |
| 40:04 | de rede e olha só. Tem um dispositivo NordLynx Tunnel. Um dispositivo virtual de rede. |
| 40:10 | O Windows acha que é uma placa de rede, mas não tem hardware por baixo. Ele cria um túnel e roteia os pacotes pela minha placa de rede de verdade, só que criptografado |
| 40:19 | e sempre pro servidor que eu conectei na rede da Nord. Como que o sistema operacional decide se deve mandar pacotes pra rota anterior do meu roteador |
| 40:27 | 192.168 ou mandar pra rota nova da VPN em 10.5? É por causa desse número de métrica aqui no fim, que é um número de prioridade. |
| 40:36 | Ele vai mandar pro menor número. E de curiosidade, esse "on-link" significa que são endereços que podem ser resolvidos |
| 40:42 | localmente, sem precisar rotear pra fora. Claro, são dispositivos virtuais locais, estão na mesma máquina. |
| 40:48 | Tem um tanto de outras rotas aqui mas é porque meu PC tem máquinas virtuais instaladas, |
| 40:54 | e elas também tem placas de rede virtuais que precisam ser roteadas. Na sua máquina, vai ser uma tabela diferente, mas o princípio é o mesmo, a primeira coisa |
| 41:02 | que vai ter é a rota pro seu roteador. É assim que os pacotes saem da sua máquina e sabem pra onde ir. |
| 41:08 | Toda vez que você aperta o botão pra conectar na VPN, o que acontece por baixo dos panos é que ele adiciona essas novas entradas na tabela de roteamento. |
| 41:16 | Quando desconecta, apaga essas linhas, aí seus pacotes voltam a trafegar pelo seu roteador |
| 41:21 | como sempre. É isso que um cliente de VPN faz, cria um dispositivo virtual e reconfigura sua tabela |
| 41:27 | de rotas pra desviar os pacotes por esse dispositivo virtual. Mas voltando pra conversa da ZeroTier e meu servidor de anime. |
| 41:36 | Sem uma solução de VPN, todos esses dispositivos não conseguiriam se conectar através da |
| 41:41 | internet, só seriam acessíveis na mesma rede local, no caso, dentro da minha casa. Mas agora meu NAS fica sempre conectado na rede da ZeroTier, esperando pacotes virem |
| 41:50 | de lá até a placa de rede virtual TUN que criamos, e a partir daí, pro resto do sistema |
| 41:56 | e aplicações, é como se fosse uma conexão local na mesma rede. E é assim que muitas empresas conseguiram ter funcionários trabalhando de casa, em |
| 42:04 | redes restritas atrás de CGNAT, abrindo conexão em servidores que estão nas empresas, de |
| 42:10 | forma segura, porque todas as soluções de VPN são criptografadas. Por muito tempo se usou protocolos como PPTP que é Point to Point Tunneling Protocol, |
| 42:19 | pra criar túneis ponto a ponto seguros, mas se não estou muito errado ninguém mais usa PPTP, já é obsoleto e acho que considerado inseguro. |
| 42:27 | Se esbarrar num tutorial com PPTP pode pular porque deve ser velho. Muita gente ainda usa soluções derivadas de OpenVPN, que é um software complexo, escrito |
| 42:35 | em cima de outro software complexo e controverso que é o OpenSSL. Mas no mundo Linux pelo menos, acho que povo tá migrando pro Wireguard, com código mais |
| 42:44 | moderno e mais leve, que agora vem direto na kernel do Linux. Eu mesmo não sei muitos detalhes, mas se o assunto de redes e segurança te atrai, |
| 42:51 | definitivamente estude Wireguard. Como disse antes, a ZeroTier usa alguma solução proprietária que parece que é criptograficamente |
| 42:58 | um pouco menos seguro que Wireguard, mas não significa que seja inseguro. Se quiser um serviço equivalente que use Wireguard por baixo, tem a Tail Scale, que |
| 43:08 | funciona mais ou menos do mesmo jeito que mostrei. E no caso de soluções pra empresas, acho que muitos usam os produtos da Microtik. |
| 43:15 | Só lembrando que nada disso sai de graça, e não digo no custo de assinatura dos serviços. |
| 43:20 | Pacotes tendo que passar por outras máquinas intermediárias no meio do caminho, em túnel |
| 43:26 | criptografado, adiciona tempo de processamento e tempo de rota, por isso seus pacotes vão chegar no destino levando mais tempo e por isso conexões atrás de VPN tem velocidade |
| 43:36 | menor e latência maior. O que varia nos diversos serviços por aí é a oferta de servidores próximos de você |
| 43:43 | que podem ajudar a diminuir essa latência. Pra navegar na web não faz diferença mas pra coisas como gamers, latência é importante. |
| 43:51 | Enfim, no frigir dos ovos consegui fazer o que queria. Configurei um NAS super rápido, o suficiente pra conseguir editar video pesado direto dele |
| 43:59 | em rede de 10 gigabits local e consigo acessar coisas do meu NAS como meu Plex, mesmo estando |
| 44:05 | fora de casa, usando uma VPN da ZeroTier. Tudo isso foi super simples de configurar porque já estou mais que familiarizado com |
| 44:13 | VPNs, túneis e tudo mais. Do momento que decidi usar o ZeroTier, já estava com tudo configurado em todos os dispositivos |
| 44:19 | em uns 15 minutos. Mesmo você não sendo alguém de infraestrutura, é importante saber esses conceitos porque |
| 44:25 | em pouquíssimo tempo dá pra criar soluções pra problemas simples como o meu, que era expor meu NAS na internet de forma segura. |
| 44:32 | Eu falo como é impressionante o quanto se aprende quando brinca de pirataria. Mesmo gamers já tiveram que lidar com esse tipo de tecnologia. |
| 44:40 | Quem aqui nunca arrancou os cabelos tentando fazer o Hamachi funcionar? Pra quem não sabe Hamachi é que nem o NordVPN, um serviço de VPN da LogMeIn. |
| 44:50 | Por alguma razão gamers tendem a usar Hamachi. Eu poderia ter criado tudo na mão, um servidor particular numa Amazon ou Digital Ocean, um |
| 44:58 | túnel local forwarding com SSH ou mesmo uma VPN com Wireguard, tudo configurado via linha |
| 45:04 | de comando no terminal, na mão. E é uma boa opção pra quem quer aprender. Mas eu queria algo plug and play. |
| 45:09 | Como exercício deixo de lição de casa pra vocês que tem um PC em casa e um notebook, |
| 45:15 | criar uma VPN usando Wireguard ou SSH, sem usar um software mais fácil como ZeroTier |
| 45:21 | ou NordVPN. Acho que só o tanto de documentação pra ler e tentativa e erro que vão ter que fazer |
| 45:26 | vai valer mais que muito curso de redes que tem por aí. E com isso finalmente consegui concluir a mini-série de redes. |
| 45:33 | Em seis episódios mostrei só o básico do básico do que considero introdução ao assunto |
| 45:39 | de redes e internet. Ainda tem bem mais coisas e muito mais detalhes, como VLANs. |
| 45:44 | Mas vou deixar pra falar sobre essas coisas mais pra frente. Por agora cansei de falar de redes. Se ficaram com dúvidas mandem nos comentários abaixo, se curtiram o video deixem um joinha, |
| 45:53 | assinem o canal e não deixem de compartilhar o video com seus amigos. |
| 46:24 | A gente se vê, até mais! |
