# Introdução a Redes: Como Dados viram Ondas? | Parte 1

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=0TndL-Nh6Ok
- **Duração:** 37:59
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Quem me acompanha no instagram viu minha saga atualizando meu armazenamento pra um NAS maior e mais rápido, inclusive os |
| 0:08 | problemas que tive e como resolvi. Mas durante as semanas que postei stories, recebi dezenas |
| 0:13 | de mensagens diretas com dúvidas elementares. Mesmo programadores tem buracos de conhecimentos |
| 0:19 | importantes quando se fala de redes. Eu não sou nenhum especialista em redes, bem longe disso, e é um dos motivos de porque evitei falar do assunto por tanto tempo. Minha intenção não é |
| 0:29 | falar sobre tudo que existe do assunto, precisaria de um canal inteiro pra isso. O que quero falar |
| 0:34 | neste e nos próximos dois episódios são só alguns conceitos que podem ser úteis pra iniciantes. Sem |
| 0:41 | entender nem o que vou explicar nesta mini-série, não tem como entender coisas como Docker, que eu quero falar no futuro. (...) |
| 0:53 | Vamos começar com coisas que todo mundo tem em casa. Esse aqui é meu modem da Vivo, estou |
| 0:58 | com um plano de fibra ótica de 300 megabits por segundo. Olha aqui, esse fininho é a fibra ótica. |
| 1:04 | Vamos checar? Só digitar "speedtest" no Google e você pode usar esse aqui do próprio Google, ou esse aqui embaixo da Ookla que é bem famoso, ou o Fast do Netflix, que por alguma razão dá |
| 1:14 | números um pouco mais inflados. Cada um vai dar medidas um pouco diferentes mas no geral é próximo da velocidade de verdade. Vamos ver os três rodando um pouco. |
| 1:23 | Olhem só como é diferente, mas uma coisa é certa, o download tá ok dentro do plano de 300 megabits |
| 1:29 | por segundo. Nos três fica até um pouco acima disso, mas o upload é sempre lá pela metade dessa |
| 1:34 | velocidade. Provedores sempre fazem isso porque você nota mais lentidão em download do que upload. |
| 1:40 | Mas tudo bem, um episódio aqui do canal fica na faixa de 10 a 15 gigabytes. Nessa velocidade eu |
| 1:45 | consigo subir pro YouTube em aproximadamente 15 minutos. Não é ruim. Agora, você consegue saber |
| 1:50 | como chega nessa estimativa? Muita gente vê os planos escritos 100 mega, 300 mega, e assume que é 100 megabytes ou 300 megabytes, mas não, são megabits. E |
| 2:00 | isso faz muita diferença. Lembram? 1 byte são 8 bits. Portanto 300 megabits você divide por |
| 2:06 | 8 pra ter em megabytes. 300 dividido por 8 é 37 megabytes por segundo, esse é o máximo |
| 2:11 | que vai conseguir em downloads. Se for um plano de 100 megabits, divide por 8, não é muito mais que 12 megabytes por segundo de download. Essa é a velocidade que interessa. |
| 2:21 | Quando se fala em velocidades de rede, por alguma razão se fala em bits em vez de bytes. Eu acho que |
| 2:26 | tem o lance de pro marketing parecer melhor pra colocar números grandes em propagandas, mas acho |
| 2:32 | que tem a ver com o histórico de que antigamente, estou falando de década de 60, transmitir 300 bits |
| 2:38 | por segundo era considerado bastante. Eu mesmo cheguei a usar modem de linha discada de 9600 |
| 2:43 | bits por segundo. Em 1991, a velocidade média era de 14 kilobits por segundo. Se dividir por 8 pra |
| 2:50 | ter em bytes, é nada menos que 1.75 kilobytes por segundo. Pouco mais de mil e setecentas letras de |
| 2:57 | 1 byte cada, por segundo. No fim dos anos 90, começo dos anos 2000, a maioria das pessoas estava em modems de 56 kilobits por segundo. Só quando começamos a |
| 3:07 | ter ADSL com serviços como o Speedy, que chegamos perto do elusivo 1 megabit por segundo, que ainda |
| 3:13 | assim, dividido por 8 são só 128 kilobytes por segundo. Lembro quando eu vi um demo da Ajato |
| 3:19 | lá por 1993, e download de 1 megabit parecia a coisa mais rápida do mundo. |
| 3:24 | Deixou o eu no colegial daquela época realmente imaginando que chegamos no futuro. Agora pensa, |
| 3:31 | um arquivo de música mp3 de qualidade média é alguma coisa na faixa de 5 a 10 megabytes. |
| 3:36 | Digamos que seja 10 megabytes. Quanto tempo leva pra baixar esse arquivo com um modem do fim dos |
| 3:42 | anos 90 de 56 kilobits por segundo? A conta é 10 megabytes vezes 1024 pra ter em |
| 3:49 | kilobytes. 1024 porque estamos falando em binário e isso é 2 elevado a 10. Tem toda |
| 3:54 | uma controvérsia de usar múltiplos de 1000, mas isso é só marketing. O certo é sempre potências |
| 3:59 | de 2. Daí divide isso por 56 kilobits, dividido por 8 pra ser bytes. E isso vai |
| 4:04 | dar uns 1462 segundos, dividido por 60 e vai dar nada menos que 24 minutos. |
| 4:09 | Quase meia hora pra baixar uma música que não tem muito mais que 5 minutos de duração. Essa é |
| 4:15 | a era antes do streaming ser possível. Lembram do episódio que expliquei compressão? Pra streaming |
| 4:21 | de áudio ser possível, eu precisaria no mínimo ser capaz de baixar essa música nos mesmos 5 minutos |
| 4:26 | de duração. Por isso que não existia streaming nos anos 90 e começo dos anos 2000. A velocidade mínima seria esses 10 megabytes do mp3 divido por 5 minutos, ou seja, 2 megabytes |
| 4:37 | por minuto. Isso vai dar 40 kilobytes por segundo, ou 320 kilobits por segundo. Nem é muita coisa, |
| 4:45 | mas o modem da época de 56 kilobits era 6 vezes mais devagar. Os anos 2000 não foram |
| 4:50 | fáceis não, por isso a gente deixava um monte de downloads enfileirados a noite inteira pra conseguir baixar um álbum de música. Em pouco mais de 20 anos fomos de 1 megabit pros 300 |
| 4:59 | megabits que tenho em casa agora. 300 vezes mais rápido, e isso nem é o máximo que dá pra chegar. Nos Estados Unidos, Canadá, Japão e outros lugares existem alguns planos de 1 |
| 5:09 | gigabit por segundo. Quando falamos em velocidades assim, pensamos em fibra ótica, que é o que tem nesse meu modem. Pense numa fibra ótica como um tubinho |
| 5:18 | muito fino de fibra de vidro por onde passa luz. Literalmente se eu acender luz numa ponta, |
| 5:23 | vai acender na outra ponta. Vocês já devem ter visto em algumas baladas. Se não me engano um bom cabo de fibra ótica, e tem tipos diferentes, tem capacidade de transmitir até |
| 5:33 | 10 gigabits por segundo por uma faixa de 5 a 10 quilômetros. Isso é máximo teórico. Distância |
| 5:39 | afeta banda, porque mesmo numa fibra ótica existe perda de sinal. Em todo cabo, quanto |
| 5:44 | maior a distância, menor a velocidade porque maior vai ser a perda de sinal e interferência |
| 5:49 | no meio do caminho. Abaixo de fibra ótica estão cabos de rede como este, cabos ethernet, com conector RJ-45. Eles são divididos em categorias. Na |
| 5:59 | prática à medida que conseguimos ir melhorando os processos de fabricação e os processadores de switches e roteadores, fomos subindo de categoria. E a gente classifica esses cabos pela |
| 6:08 | categoria ou cat. Esse na minha mão acho que é o mais comum, Cat 5e. Na dúvida hoje em dia, assuma |
| 6:14 | que deve ser cat 5e ou até cat 6. Cat 1 até 3 acho não se usa mais, não lembro se |
| 6:21 | teve cat 4. Era pra redes inferiores a 10Base-T, ou seja, menos que 10 megabits por segundo pra |
| 6:27 | baixo. Lembra que nos anos 2000 a gente male male tava falando de 1 megabit pra internet? |
| 6:32 | 10 megabits era 10 vezes isso, tava ótimo pra época. Um CD-ROM ocupava 650 megabytes, seria |
| 6:38 | menos de 10 minutos pra transferir numa rede de 10 megabits. No cat 5 subimos pra rede de |
| 6:44 | 100 megabits. Alguns lugares com cabeamento antigo ainda devem ser cat 5. Mas tudo isso |
| 6:49 | já é considerado obsoleto. Com cat 5e fomos pra rede de 1000 megabits ou |
| 6:55 | 1 gigabit por segundo. Eu acho que a maioria dos computadores, pelo menos dos últimos 10 anos pra |
| 7:00 | cá, se tem placa de rede, é 1 gigabit. A maioria das placas mãe de boas marcas como Gigabyte ou MSI |
| 7:06 | já tem com porta de ethernet 1 gigabit. A minha placa mãe mais moderna que é o X570s vem com porta |
| 7:13 | de 2.5 gigabits. Cabos mais modernos são categoria 6 e 7, que tem especificações de construção mais |
| 7:19 | exigentes e conseguem suportar sinais na faixa dos 500 Mhz e conseguem ir até os 10 gigabits |
| 7:24 | por segundo de redes modernas. Mas até pra redes 1 gigabit vão ser melhores que cat 5e. Na dúvida, |
| 7:30 | só compre cabos cat 6. Cat 7 e cat 8 a maioria não vai precisar. 1 gigabit por segundo numa rede local tá ótimo. A internet que a maioria das pessoas tem em casa é |
| 7:41 | 10 vezes mais lento que isso. Então dá e sobra pra conectar múltiplos dispositivos na rede, |
| 7:46 | compartilhar a internet e ainda sobra banda pra transferir arquivos localmente e tudo |
| 7:51 | mais. Pra fazer streaming de video, na prática, acima de 3 megabits já é possível. Ou seja, |
| 7:57 | a maioria das pessoas não lida com nada muito maior que 10 megabits. Rede 1 gigabit é 100 vezes isso. Considere também as redes sem fio como do seu |
| 8:07 | celular. Se estiver numa boa região metropolitana com 4G LTE pelo menos, as velocidades são mais ou |
| 8:12 | menos. No meu celular eu consigo a faixa de 60 a 70 megabits por segundo pra download e |
| 8:18 | menos de 5 megabits pra upload. Eu pessoalmente acho horrível, mas pra média da população isso é |
| 8:23 | rápido o suficiente. De novo, acima de 3 megabits dá pra fazer streaming, receber mensagem de áudio |
| 8:29 | e tudo mais, então tá ótimo. Falando nisso, saiu faz pouco tempo o novo padrão Wifi 6 que promete ser umas 3x mais rápido que Wifi 5, que é o que todo mundo tem. Mas Wifi |
| 8:40 | 5 não é grande coisa também. Vamos fazer outro teste rápido. Esse é o Librespeed, uma versão open |
| 8:45 | source do Speedtest do Google que mostrei lá no começo. É um teste de download e upload do meu PC |
| 8:51 | pro meu NAS usando rede cabeada. Tá ótimo, faixa de 6 gigabits de download e de upload. |
| 8:58 | Minha rede é de 10 gigabits, mas depois falo disso. Agora vamos ver meu smartphone conectado via wifi na mesma rede acessando o mesmo serviço. É essa coisa ridícula aqui de |
| 9:08 | faixa de 200 megabits por segundo. Wifi é umas 3x mais lento que uma rede 1 gigabit que todo |
| 9:14 | mundo tem. Mas é mais rápido que a internet do seu provedor então, de novo, tá ótimo. Wifi e outras formas de comunicação sem fio usam o ar como o meio de transporte das ondas |
| 9:25 | em vez de cabos de cobre. Mesmo com paredes no meio do caminho, a onda consegue passar e continuar em frente, embora perdendo força. Você sabe disso porque se gritar de um quarto, |
| 9:35 | sua mãe vai te xingar lá da cozinha. A onda da sua voz atravessa paredes e chega até lá. Tudo |
| 9:40 | que oferece resistência vai diminuir o sinal e introduzir barulho. Por isso que você não consegue ir tão longe do seu roteador sem notar que a velocidade caiu bastante. |
| 9:48 | Sua voz tem baixa frequência, por isso atravessa paredes fácil. Quanto maior a frequência, |
| 9:54 | mais difícil é atravessar paredes, por isso que o Wifi mais comum é o que opera na faixa de 2.4Ghz |
| 10:00 | e você consegue ir até uns 100 metros de distância e ainda navega, mesmo que mais lento. Mas na rede |
| 10:06 | mais rápida de 5Ghz, uma ou duas paredes e você já nota que fica bem ruim de usar. |
| 10:11 | Isso é outro assunto que daria uma tangente enorme, mas basta saber que essas bandas de frequência são convenções definidas por política. Várias organizações estabeleceram quais bandas |
| 10:22 | podem ser usadas pra quais coisas. A faixa de 900 Mhz e 2.4 Ghz, por exemplo, são chamadas de |
| 10:29 | ISM ou Industrial, Scientific, Medical, que são bandas não licenciadas que podem ser livremente |
| 10:35 | usadas sem interferir com aplicações militares, por exemplo. Mas por isso também os canais dessas |
| 10:40 | bandas costumam ser super congestionadas porque coisas como seu telefone sem fio, controle remoto de garagem e tudo mais operam nas mesmas bandas que seu Wifi e |
| 10:49 | tudo isso causa interferências. Por causa disso, a partir de 2001 a organização FCC abriu a faixa de 5Ghz até 64Ghz pro público. É nela que trafega coisas como TV aberta em alta |
| 11:01 | definição, que sua TV capta por antena. É na parte mais baixa dessa banda, nos 5Ghz que opera a |
| 11:07 | maioria dos pontos de acesso de Wifi. Na prática, quanto maior a frequência, maior a velocidade, mas menos área o sinal cobre e mais dificuldade tem de passar obstáculos, como paredes. É o |
| 11:17 | problema do 5G, que tem várias versões. Se você não sabia, 5G não é só uma coisa, são |
| 11:22 | diferentes bandas de frequência. No começo dos anos 2000 a gente experimentou redes sem fio 2G, que ainda era comutação de circuito e velocidades de pico na faixa de 64 kilobytes |
| 11:33 | por segundo. E cuidado que wireless a gente fala em velocidade de pico, que é em situação ideal, |
| 11:38 | com sinal limpo, pouca ou nenhuma interferência. Na vida real a velocidade vai ser menor e variar |
| 11:44 | bastante dependendo de onde você está. Mas em seguida tivemos 3G, na época do iPhone 3G lá |
| 11:49 | por 2008. Agora já era packet switch indo até uns 2 megabits por segundo, e uma revisão que |
| 11:55 | veio depois, o 3G HSPA+ que podia ir de uns 8 megabits até 21 megabits por segundos, usando a |
| 12:02 | banda de de 15 a 20 megahertz. Eu tô simplificando bastante porque 3G, 4G, |
| 12:07 | 5G são famílias de tecnologias. Cada uma usa diversas bandas diferentes de frequências. Por |
| 12:13 | isso o 4G de um provedor pode ser diferente do 4G de outro provedor. Por exemplo, nos Estados Unidos a T-Mobile usava bandas de 800 Mhz até 1900 megahertz. Mas a Sprint usava banda de |
| 12:25 | 850 até 2500 megahertz. Velocidade máxima teórica de 4G seria equivalente a uma rede de 1 gigabit, |
| 12:31 | mas na prática não ia muito mais que 50 megabits por segundo. A gente sempre operou wireless em faixas abaixo de 2 gigahertz. A tal quinta geração ou 5G entra numa |
| 12:42 | categoria de ondas chamado Extreme High Frequency, literalmente frequências extremamente altas, |
| 12:48 | que vai de 30 até 300 gigahertz. Isso é o que se chama de millimiter wave. Pra comparação, |
| 12:54 | o que a gente chama de microondas ou microwaves é de 3 a 30 gigahertz. Millimiter wave começa |
| 13:00 | nos 30 gigahertz. Eu posso estar falando bobagem, mas acho que o que se chama de 5G comercial hoje em dia é bem abaixo disso, um pouco mais que a faixa de 4G LTE. É mais rápido, |
| 13:10 | mas não tanto quanto se espera. Millimiter wave é muito mais rápido, subindo do máximo teórico de 4G de 1 gigabit e indo direto até 10 gigabits. De novo, teórico, |
| 13:20 | porque apesar da alta velocidade, a altíssima frequência significa que tem alcance muito menor, |
| 13:26 | muito mais direcional, e é muito fácil de interferir, por isso tem a dificuldade de atravessar obstáculos como prédios entre o celular e as antenas. Logo, precisa de muito mais antenas |
| 13:36 | pra cobertura e por isso demora tanto pra ter em todo lugar. Não espere ver essa banda perto de você tão cedo. Na prática é só entender que transmitimos dados |
| 13:45 | como ondas usando o ar como meio. Existem várias faixas de frequências úteis que vão de 3 kilohertz |
| 13:51 | até o topo de 300 gigahertz. Politicamente várias dessas faixas foram reservadas pra usos específicos, por exemplo, rádio AM dentro da banda que vai de 300 kilohertz até 3 megahertz, |
| 14:02 | rádio FM dentro da banda que vai de 30 megahertz até 300 megahertz, 4G que tá banda seguinte até 3 gigahertz. E agora explorando millimiter wave que começa |
| 14:13 | em 30 gigahertz e antes era usado mais pra comunicação via satélite, astronomia e coisas |
| 14:18 | assim. Tudo isso porque aprendemos a modular e demodular sinal digital em analógico, e graças |
| 14:24 | a pesquisadores como Claude Shannon sabemos como lidar com interferência e garantir que os pacotes |
| 14:29 | que recebemos estão intactos. Estou dando todos esses números pra vocês terem um pouco de ordem de grandeza das coisas. No mundo de data centers, os engenheiros estão lidando com |
| 14:39 | redes acima de 10 gigabits, Fibra ótica e tudo mais. No mundo caseiro, a média da população ainda |
| 14:44 | tá na era da rede 100 megabits, tecnologia de uns 20 anos atrás. Mas como eu disse, |
| 14:49 | a média da população não lida com petabytes de dados. A maioria dos HDs de vocês male male tem |
| 14:55 | meio terabyte, um quarto de terabyte. O maior volume de transferência é streaming de video. |
| 15:00 | Realmente não precisa de mais que 100 megabits. 1 gigabit já tem muita sobra. Eu acho 300 mbps de download e 150 mbps de upload da Vivo muito lento. Mas por outro lado, |
| 15:10 | eu também não uso mais que isso no dia a dia, só de vez em quando queria ter internet gigabit. Mas o custo não compensa, por isso aguento com velocidades baixas assim. Um exemplo de |
| 15:20 | eventos raros onde isso faz diferença. Estou fazendo backup do meu backup no serviço AWS |
| 15:25 | Glacier. É tipo um S3 mas feito pra backups e coisas que não se acessa o tempo todo, |
| 15:30 | então é mais barato pra armazenar. Estou transferindo uns 15 terabytes de dados pra lá. Quanto tempo acha que leva, nesse plano da Vivo de meros 150 megabits de upload? |
| 15:40 | Vamos fazer as contas. 150 megabits, dividido por 8, é menos de 19 megabytes por segundo. |
| 15:46 | 15 terabytes, multiplicado por 1024 dá 15.360 gigabytes, multiplicado de novo por 1024, dá |
| 15:54 | mais de 15 milhões de megabytes. Agora dividindo pela velocidade de 19 megabytes por segundo, |
| 15:59 | vai dar mais de 800 mil segundos. Dividido por 3600 dá mais de 229 horas, |
| 16:05 | dividido por 24 horas, dá pouco mais de 9 dias. Isso sem contar horas do dia que a |
| 16:10 | velocidade fica instável ou cai. Fácil isso vai dar mais de 10 dias pra eu conseguir transferir |
| 16:15 | tudo pra lá. Por isso eu disse que é uma velocidade horrendamente baixa. Só que só retardados como eu faz uploads de 15 terabytes de coisas. Não é o normal. |
| 16:24 | Já que estamos falando de modem, eu queria fazer uma tangente pra dar outra noção que muitos não devem ter. Como que os dados são transportados na fibra ou em cabos como coaxial ou ethernet? |
| 16:34 | Pra explicar isso precisaria de mais física do que estou confortável pra explicar então vou |
| 16:39 | usar um exemplo beeeem simplificado só pra ter uma imagem na cabeça. Lembra quando vocês eram criança e brincavam de telefone de copinho? Como que fazia? Prendia cada ponta de um fio |
| 16:49 | bem longo no fundo de dois copos e ia longe até esticar o cabo sem arrebentar. Quando você gera voz, tá empurrando o ar com uma certa frequência e amplitude pra |
| 16:58 | cada fonema. Já viram como a voz é representada num programa de edição como esse aqui? Tudo que |
| 17:03 | eu vou falando é representado como ondas. Olha só, aaaaa .... bbbbb .... ccccc .... No mundo |
| 17:09 | físico isso são minhas cordas vocais vibrando e empurrando o ar. Isso vai bater no fundo do copo |
| 17:14 | e vibrar o fio conectado nele. Se o fio estiver tensionado o suficiente, ele vai transferir essas ondas até a outra ponta. E o copo no final vai servir pra amplificar um |
| 17:24 | pouquinho o que recebeu e empurrar o ar até seus ouvidos. Na real "empurrar" não é o termo adequado |
| 17:29 | porque não está movendo nada, é como numa bacia de água em repouso quando vc toca numa ponta, |
| 17:35 | gera uma onda, que vai até outra ponta, mas se tiver algo boiando no meio, ela continua no mesmo |
| 17:40 | lugar. A água, o ar, ou o fio, servem de meio por onde as ondas vão trafegando. E a voz e outros |
| 17:46 | sons são formados pelas diferenças em amplitude e frequência dessas ondas. É mais ou menos assim mesmo que os |
| 17:55 | telefones antigos também funcionavam, com materiais um pouco menos rudimentares que |
| 18:00 | copinhos de plástico e barbante. Mas nesse modelo, só dá pra ligar uma pessoa até outra pessoa. E se |
| 18:06 | eu quisesse falar com pessoas diferentes? Já viram filmes antigos que tinha telefonistas? Você estava |
| 18:11 | sempre conectado com uma central onde atendia uma telefonista. Daí dizia pra ela, "me conecta com |
| 18:17 | fulano de tal" e aí ela pegava um fio e ligava num painel. Era ela ligando o fio do seu telefone, |
| 18:23 | via esse painel, com o fio do outro telefone, fechando um circuito. Isso é no começo da telefonia comercial, um século atrás quase, claro, depois eliminou-se essa posição de pessoa |
| 18:31 | ligando cabos e passou a se usar sistemas que conectavam números de telefone automaticamente, os switches. Nem eu antigamente nunca falei com uma telefonista, era só discar o número e esperar |
| 18:42 | a outra ponta atender. Mas imagine que é o mesmo cenário, onde se faz switching, ou comutação, e fecha um circuito entre as duas pontas, como no telefone de copinhos. |
| 18:52 | Isso se chama circuit switching ou comutação de circuito. E nesse caso a linha entre eu e |
| 18:58 | a outra pessoa fica dedicada a essa sessão até uma das pontas desconectar. Por muitos anos foi |
| 19:04 | assim que funcionou, toda casa tinha uma linha telefônica ligada numa central, e a gente pagava |
| 19:09 | por minuto que a sessão ficava aberta entre dois telefones. O sistema automático que substituiu |
| 19:14 | a telefonista fazia o switching e a bilhetagem. E foi assim que o mundo se conectava. Em paralelo, estamos falando dos anos 60 a 70, no mundo empresarial estavam experimentando com |
| 19:24 | esse tal de computador, que como todo mundo já viu em fotos antigas, eram equipamentos gigantes |
| 19:31 | que ocupavam um quarto inteiro. Super quentes, e pros padrões de hoje, extremamente fracos. |
| 19:36 | Se falarmos de começo dos anos 70, um PDP-11 tinha CPU de 16-bits e poderosos 15 megahertz |
| 19:43 | e na faixa de pouco mais de 2 kilobytes de RAM, acho que podia ir até 32 kilobytes. |
| 19:48 | Se você não consegue entender essa ordem de grandeza pense no seu celular onde está assistindo esse video, ou seu notebook. Ele tem |
| 19:59 | uma CPU de múltiplos cores onde cada um roda na faixa de 2 gigaherz ou mais. Giga é mil vezes mais que mega. Estamos na ordem de processamento |
| 20:05 | de mais de mil vezes um processador dos anos 70. E você tem mais de 1, talvez uns 8, rodando em |
| 20:11 | paralelo. No PDP-11 era um só de 15 megahertz. Memória então, nem se fala. Seu celular talvez |
| 20:17 | tenha o quê, uns 4 gigabytes? Gigabyte é 1024 vezes megabyte que é 1024 vezes |
| 20:22 | kilobyte. Você está numa ordem de grandeza de um milhão de vezes mais memória que se tinha nos anos 70. Não é dobro, não é 100 vezes, é um milhão de vezes. |
| 20:31 | Até aproveitando, muita gente me pergunta qual computador é ideal pra aprender a programar e |
| 20:37 | a resposta é óbvia: qualquer um que você conseguir comprar. Não existe "computador |
| 20:43 | melhor pra aprender". O computador mais furreca que você comprar hoje é mil vezes melhor do que |
| 20:48 | eu tinha pra aprender nos anos 80. Se eu aprendi a programador num PC na faixa de 6 megahertz com |
| 20:54 | 1 mega de RAM, não vejo porque você não possa aprender a programar num Raspberry Pi de 1 gigahertz com 1 gigabyte de RAM. Quem realmente quer aprender, aprende com qualquer equipamento |
| 21:04 | que tiver acesso e aprende a espremer o máximo dele. Se você não consegue extrair o máximo de |
| 21:10 | um computador fraco, um computador mais forte é um desperdício pra você. Só que nos anos 70, 15 megahertz de processamento e 2 kilobytes de RAM era bastante coisa e super |
| 21:22 | caro. Coisa da faixa de 150 mil dólares, em dólares dos anos 70. Ajustado pela inflação |
| 21:28 | seria mais de 1 milhão de dólares de 2022. É um puta investimento. E custando caro assim, |
| 21:33 | obviamente eram recursos que precisavam ser divididos por mais pesquisadores e engenheiros ao mesmo tempo. Desses esforços |
| 21:42 | que surge coisas como o sistema operacional UNIX cuja função era não só facilitar escrever |
| 21:48 | aplicativos, mas compartilhar a máquina com mais de um usuário. É o conceito de time sharing, ou compartilhamento de tempo. Pra conseguir ter várias pessoas usando o |
| 21:57 | mesmo computador ao mesmo tempo, primeiro o sistema operacional precisava dividir o tempo de |
| 22:02 | processamento e a memória pra vários aplicativos rodando em paralelo. Eu fiz dois vídeos explicando |
| 22:08 | como se faz isso, mas em resumo ele deixa um aplicativo rodar por um tempo, daí pausa ele, |
| 22:13 | e dá tempo pra outro aplicativo de outra pessoa rodar um pouco. Daí pausa esse, e resume o |
| 22:18 | anterior que tava pausado. No total cada um vai levar mais tempo pra rodar, mas pelo menos os |
| 22:27 | dois puderam iniciar os trabalhos ao mesmo tempo e não ter que ficar esperando na fila de braços |
| 22:27 | cruzados esperando o outro acabar. Quando esse tipo de sistema começou a ficar |
| 22:37 | possível, agora seria mais conveniente que cada pessoa tivesse seu próprio monitor e teclado, |
| 22:37 | pra realmente trabalhar simultaneamente no mesmo computador. E assim começou a surgir os tais terminais burros. Na parte 2 dos meus videos de teclado eu explico um pouco |
| 22:46 | como isso funcionava. E parte das tecnologias do mundo de telecomunicações passaram a |
| 22:46 | entrar nos computadores. Como um exemplo pequeno, eu tenho aqui |
| 22:56 | esse teclado IBM Model M dos anos 80 e ele não tem um cabo USB, óbvio, mas também |
| 23:07 | não é o conector PS2 que se tinha nos anos 90. É um cabo telefônico de par trançado |
| 23:07 | com conector RJ-11, que é o mesmo cabo e conector que se usava em telefones nos anos |
| 23:07 | 80. Eu não cheguei a usar esses terminais, mas acho que eles literalmente "discaram" pro |
| 23:16 | computador pra se conectar, mais ou menos como |
| 23:16 | se fazia com modems discados. Na época já existia cabos coaxiais, que é |
| 23:21 | parecido com da sua TV a cabo ou cabo de áudio, aquele mais grosso, que tem um canal físico no |
| 23:26 | meio insulado por uma camada que é uma blindagem. A camada do meio transporta o sinal e é envolto |
| 23:31 | por outro canal físico que é criado pelo plástico. O canal de fora é o ground, ou terra. São bons cabos mas caros. A alternativa surge com o que chamamos de |
| 23:40 | twisted pair ou par trançado, que contém literalmente um par de fios de cobre, normalmente com cores diferentes, trançados um no outro. Lembram das aulas de física elétrica |
| 23:50 | no colegial? Se você tem um cabo por onde passa uma corrente, o que acontece? Ele gera um campo |
| 23:55 | eletromagnético. Se fez cursinho até deve lembrar do truque do dedão, onde colocamos |
| 24:00 | o dedão na direção da corrente e os outros dedos representam o campo eletromagnético. O problema de cabos não trançados é que |
| 24:09 | quando eles são expostos a um campo magnético, formam um loop e indução de voltagem. Os circuitos |
| 24:16 | no final do cabo ficam mais suscetíveis a barulho induzido se não estiverem trançados. Um circuito |
| 24:21 | é formado por dois cabinhos, daqueles coloridos, com voltagens opostas. Se um fio carrega voltagem |
| 24:28 | positiva, a outra é igual mas negativa. A voltagem das duas é a mesma mas com polaridades opostas. |
| 24:34 | Sem entrar em detalhes, ao ter dois cabos passando a mesma amplitude e frequencia mas de polaridades |
| 24:39 | opostas trançados entre si, isso cancela a interferência eletromagnética, garantindo uma taxa |
| 24:44 | de sinal melhor e menos barulho. Agora começa a parte importante. Você pode |
| 24:50 | carregar múltiplos canais num mesmo meio físico, como os fios de cobre. Isso se chama |
| 25:00 | multiplexing e é um tópico beeeem complicado. Na prática pense em várias conversas de voz que podem ser combinadas num único sinal, |
| 25:06 | esse é o processo de multiplexing ou mux e tem vários jeitos de fazer isso. Lembrem voz, |
| 25:16 | música é tudo onda, frequências e amplitudes que são transmitidos como sinais elétricos. Mux pode ser feito com divisão de espaço ou de |
| 25:16 | frequência ou de tempo ou polarização e por aí vai. O importante é saber que é possível |
| 25:26 | combinar múltiplos canas num único sinal e transferir tudo junto num mesmo meio físico, |
| 25:26 | no caso os cabos. E do outro lado, na central, é possível fazer demultiplexing ou demux e separar |
| 25:32 | os canais. É assim que rede telefônica funciona e |
| 25:32 | esse processo não é novo, foi inventado no fim do século 19. Quando falamos do termo bandwidth ou banda, |
| 25:41 | estamos falando do máximo teórico de faixas de frequência que o meio físico permite passar. Isso |
| 25:47 | determina quantos canais podem passar pelo mesmo cabo. Muito abaixo ou muito acima da frequência |
| 25:52 | que o meio aguenta e o sinal é degradado. Daí |
| 25:52 | você cai em coisas como cálculo de capacidade de canal de Shannon-Hartley. Claude Shannon, |
| 26:01 | que todo mundo de ciências da computação, conhece como o pai da Teoria da Informação, |
| 26:01 | que justamente criou a matemática pra calcular esse tipo de coisa. Enfim, tem muita matemática e física envolvida em |
| 26:11 | telecomunicações e eu só passei muito rápido por cima, mas eu queria chegar no ponto do telefone |
| 26:16 | de copinho de novo. Com tudo isso, no final o que |
| 26:22 | temos é um modelo mais sofisticado pro mesmo conceito de telefone de copinho. Onde uma vez |
| 26:28 | estabelecido uma sessão entre dois participantes, você trava o canal de comunicação de ponta a ponta |
| 26:35 | só pra vocês. Por isso o modelo de negócio era tarifar por minuto onde esse canal ficava preso. |
| 26:35 | Isso é comutação de circuito. Agora, ondas são super versáteis. Não é só |
| 26:40 | conversa de voz ou música. Podemos converter dados binários em ondas. E de novo, é um tanto |
| 26:46 | de física e matemática, mas falando de forma super simplificada, podemos usar a amplitude pra representar quando é bit 1 ou bit 0 e a frequência |
| 26:56 | pra determinar quantos bits podem trafegar por segundo. O processo de transformar bits |
| 27:02 | digitais em ondas é o que se chama de modulação, e o processo inverso pra recuperar esses bits é a |
| 27:08 | demodulação e por isso os equipamentos que fazem isso são chamados de "modem". Com os primeiros modems comerciais, a gente conectava a linha telefônica de casa num |
| 27:17 | modem e discava pra um provedor. No provedor ele ia ter dezenas de linhas telefônicas com |
| 27:23 | modems também. Quando discava pra lá um modem atendia e travava tanto minha linha telefônica |
| 27:28 | quanto a do provedor, fechando o circuito. Imagina como isso era caro. Antes da privatização |
| 27:34 | das telecomunicações, ter uma linha telefônica era caríssimo, se bobear mais caro que um carro, |
| 27:39 | era literalmente um investimento. Acho que foi logo depois que privatizaram e linhas telefônicas |
| 27:44 | começaram a ficar acessíveis que possibilitou ter provedores com dezenas ou centenas de linhas |
| 27:49 | pra atender as pessoas, mas mesmo assim, se quisesse ter 100 pessoas simultaneamente |
| 27:58 | conectadas precisava ter 100 linhas, era bem difícil de escalar e era super comum |
| 27:58 | ligar pro provedor e dar ocupado. Sem contar que era inconveniente pras pessoas. |
| 28:04 | Toda vez que discava e conectava a linha ficava ocupada, então não dava pra receber chamadas |
| 28:13 | nem ligar pra ninguém. Um dos motivos de porque a gente só entrava na internet de noite e de |
| 28:13 | madrugada. Fora que tinha aquele esquema acho |
| 28:13 | que era da noite de sábado e domingo só cobrava |
| 28:13 | um pulso então não saia tão caro. Pois é, era difícil isso de acessar a internet nos anos |
| 28:24 | 90. Você tinha que se planejar. Mas felizmente |
| 28:24 | a tecnologia avançou rápido. Uma característica da voz falada humana é que a gente não usa todas as frequências que um cabo |
| 28:33 | de telefone suporta. A gente pensa em cabos e fala |
| 28:33 | em bits por segundo. Mas simplificando, lembra que |
| 28:39 | bits são modulados em ondas por um modem. O cabo |
| 28:39 | na verdade tem uma capacidade de frequências e |
| 28:45 | por isso falamos em cabos digamos de 1.5 megahertz |
| 28:45 | e male male arredondamos pra 1.5 megabits. |
| 28:51 | A conversão não é direta assim, mas pra hoje |
| 28:51 | pensa que é relacionado. Enfim, digamos que o cabo |
| 28:57 | telefônico tenha uma banda de 1.5 megahertz. A voz |
| 28:57 | humana não precisa de uma faixa muito maior |
| 29:07 | que de 0 até 4 kilohertz, então poderíamos reservar só essa faixa pra voz e vai sobrar muitos |
| 29:07 | outros canais até 1.5 megahertz. Significa que quando travamos o circuito pra |
| 29:13 | uma ligação, estamos desperdiçando toda essa |
| 29:18 | banda numa conversa. Daí nasce a era dos modems ADSL como da Speedy que funcionava na mesma rede |
| 29:23 | telefônica e permitia deixar o canal de voz livre pra ligações e conectar na internet com |
| 29:29 | o mesmo cabo. No antigo sistema CAP, de 0 até 4 kilohertz era reservado pro canal de voz, |
| 29:35 | daí de 25 a 160 kilohertz era o canal de upstream, pra upload de dados. O canal downstream |
| 29:41 | pra download começava em 240 kilohertz e ia até a banda máxima do cabo que podia ser 1.5 kilohertz. |
| 29:41 | Tem um espaço vazio de frequências entre cada canal pra diminuir interferência. O sistema CAP mudou rápido pra DMT que é discrete |
| 29:52 | multitone e em resumo ela divide as frequências em |
| 29:58 | vários pequenos canais de 4 kilohertz, um total de 247 canais separados. Lembra quando falei |
| 29:58 | que antes um provedor precisava ter uma linha telefônica pra atender cada um usuário? Pensa |
| 30:08 | agora uma única linha podendo atender um máximo de 247 canais na mesma linha. Se um canal estivesse |
| 30:08 | com muito ruído, o switch mudava pra outro canal. Não quero entrar em detalhes nisso porque eu nunca |
| 30:17 | trabalhei numa telecom nessa área então vai ter muito detalhe que não vou saber. Mas imagina |
| 30:17 | que isso evoluiu pro modem da TV a cabo ou da fibra ótica da Vivo que eu uso. Mais importante é que mudamos do conceito de circuit switching pra packet switching. |
| 30:26 | Agora vocês precisam entender pelo menos o conceito de frames e protocolos. O jeito antigo é o que podemos chamar de ponto a |
| 30:35 | ponto, inclusive o protocolo de provedor discado era usando um protocolo chamado PPP |
| 30:35 | que é Point to Point Protocol, tinha um outro mais antigo chamado SLIP. Quem usou internet |
| 30:40 | no começo dos anos 90 vai lembrar disso. O modem faz o handshake, aquele barulhinho |
| 30:57 | nostálgico que povo da minha idade conhece, o aperto de mão com o outro modem do outro |
| 31:11 | lado e eles abrem uma conexão stateful, uma sessão exclusiva fechada. A partir |
| 31:11 | daí está aberto um stream de dados, que pode ser half duplex ou full duplex. Uma via |
| 31:21 | de mão única ou uma via com duas faixas, uma pra |
| 31:21 | download e outra pra upload. Uma vez aberto um stream, se está fazendo download, inicia o recebimento e espera até acabar |
| 31:31 | tudo e não faz mais nada enquanto isso. Se está |
| 31:31 | enviando, começa a enviar, e espera até acabar. Que nem numa chamada de voz se não tem tráfego |
| 31:37 | nenhum, mesmo assim a sessão fica aberta e sendo desperdiçada até um dos lados desligar. Mas isso |
| 31:42 | é um desperdício. Em vez disso podemos pegar qualquer informação, seja um email, seja um |
| 31:54 | arquivo, seja um comando ou o que for e fracionar essa informação em blocos de tamanhos fixo. Lembra |
| 31:54 | o linguição de bits que eu expliquei em outros episódios, e lembra o conceito de que a menor |
| 32:03 | unidade na partição do seu HD não são arquivos e sim blocos? É parecido. |
| 32:03 | Muita gente que só usou interface gráfica em sistema operacional tem a noção que a menor |
| 32:13 | unidade é sempre um arquivo. E que uma partição é basicamente como o "C:\" que você vê no Explorer. |
| 32:13 | Por isso fiz uma playlist inteira pra explicar sobre armazenamento e como dados são realmente |
| 32:25 | organizados num disco. Todo HD ou pendrive é o que chamamos de dispositivos de bloco. E em |
| 32:25 | telecomunicações é parecido, mas a menor unidade chamamos de pacote ou datagram. E datagram pra não |
| 32:31 | esquecer é só pensar que no mundo analógico temos telegrams ou telegramas. Datagram é o |
| 32:37 | telegrama de sinais digitais. Se tava achando complicado, a partir daqui que realmente vai complicar. Então antes |
| 32:45 | de continuar eu realmente preciso que vocês tenham na cabeça essa idéia de fragmentar |
| 32:51 | informação em pacotes. Pensa assim. Todo dado, seja um arquivo ou um email, é um linguição de |
| 32:56 | bits. Expliquei bastante sobre isso no episódio sobre a diferença de arquivo texto e binário. |
| 33:01 | Se temos aquele arquivo mp3 de 10 megabytes, são 80 megabits ou mais ou menos 80 milhões |
| 33:07 | de zeros de uns um atrás do outro que formam o conteúdo desse arquivo. Na mesma analogia do telefone de copinho, |
| 33:16 | se formos transferir esse arquivo tudo de uma só vez, os dois lados precisam esperar essa |
| 33:16 | operação acabar pra conseguir enviar ou receber outros arquivos. E no modelo de circuito fechado, |
| 33:25 | se vocês ficarem conectados o dia todo, mesmo se não estiver passando nenhum dado, |
| 33:25 | a conexão vai ser desperdiçada. Por isso os sistemas de telecomunicação mudaram do modelo de circuit switch pra packet switch e |
| 33:35 | de sessões stateful pra stateless. É isso que permite a escalabilidade que temos agora. |
| 33:35 | Estou resumindo de forma bem grosseira, mas vamos entender o que muda. A partir de agora cada canal não fica mais travado |
| 33:45 | entre dois pontos. Está todo mundo conectado sem travar uma sessão, por isso chamamos de stateless, |
| 33:50 | sem estado. Agora eu quero fazer download daquele mp3, eu mando o comando pra algum servidor na |
| 33:56 | outra ponta e ele vai começar a me mandar esse arquivo. Só que não vai mandar tudo de uma só vez. Em vez disso ele vai quebrar esse arquivo em |
| 34:05 | pacotes. Digamos, pedaços de tamanho fixo de 1500 bytes. Isso vai dar um total de mais ou menos 7 mil pedaços. Mas não é só isso. Imagine um sistema de correios ou DHL e esses |
| 34:16 | pedaços precisam ser entregues. Como faz? Você coloca cada pedaço de informação numa caixa e |
| 34:21 | preenche os dados do destinatário. No caso da internet vamos dizer que é o endereço de IP da |
| 34:30 | pessoa que pediu. Além disso o servidor coloca outros metadados no pacote, como o número |
| 34:30 | do pedaço, porque quando eu for recebendo, vou precisar remontar o arquivo pedaço |
| 34:40 | a pedaço mas precisa ser na ordem certa, senão o arquivo seria corrompido. Agora o servidor começa a enviar esses pacotes, |
| 34:40 | um a um. Toda vez que eu receber, eu devolvo uma resposta, um acknowledgement ou ACK, |
| 34:45 | dizendo "beleza, manda o próximo". Se durante a transmissão teve alguma interferência no |
| 34:55 | cabo ou algo assim, e o pacote for danificado, quando eu recebo consigo checar. Existe toda |
| 34:55 | uma forma de reconhecimento de erros que vou explicar no próximo episódio, só assuma que |
| 35:04 | eu sei como reconhecer se o pacote veio amassado e aí eu jogo fora e respondo "não veio direito, |
| 35:11 | pode mandar outro", esse é o NAK, o oposto de ACK, daí o servidor repete o mesmo pacote e envia, |
| 35:11 | e vai fazendo isso pacote a pacote. Agora digamos que um segundo usuário aqui em casa na mesma rede resolva assistir episódio novo de |
| 35:21 | série na Disney+. Se fosse que nem antigamente, |
| 35:21 | não ia conseguir, ia precisar esperar eu terminar meu download. Mas o lance é que no intervalo entre um pacote e outro do meu mp3, |
| 35:30 | ela pode mandar outros pacotes pra outros lugares no mesmo canal. O grande lance é que um cabo de |
| 35:36 | comunicação era uma rodovia de várias faixas, ou canais como a gente chama, que só transitava |
| 35:41 | um carro de cada vez. Quando fechava o circuito eu tava fechando e monopolizando essa rodovia |
| 35:50 | inteira só pra mim. Mas agora a rodovia fica aberta e a gente vai usando as faixas que estão |
| 35:55 | livres pra transitar mais carros. De novo, é uma explicação grosseira, mas o |
| 35:55 | conceito é que em vez de monopolizar um circuito, agora a gente compartilha, fragmentando a carga |
| 36:01 | em vários pedaços. Daí mesmo que todas as faixas |
| 36:06 | estejam ocupadas, na mesma faixa pode ir vários pedaços de vários arquivos. Como pacotes sendo |
| 36:11 | enviados pelo Mercado Livre, cada pacote com seu endereço e destinatário pra não misturar e cada |
| 36:21 | um recebendo seu pacote no final direitinho. É como se eu quisesse comprar um PC na Amazon. |
| 36:21 | Eu compro cada componente separado. Eles são entregues fora de ordem, mas com o manual correto, |
| 36:30 | eu consigo remontar o PC direitinho no final. E cada pacote veio de um lugar diferente por rotas diferentes até. A internet |
| 36:30 | funciona mais ou menos assim. Mas eu estou me adiantando. Até aqui eu quis |
| 36:40 | descrever em linhas gerais pra que serve esse cabo de fibra ótica ou o cabo de TV a cabo que |
| 36:40 | chega até meu modem e porque é possível ter várias pessoas no meu prédio usando o mesmo cabo, |
| 36:50 | em diferentes canais. Esse é o papel do modem, modular e demodular o sinal digital em sinal |
| 36:55 | elétrico, e trafegar em canais de frequência por cabos de cobre ou fibra até o switch |
| 36:55 | de alguma central, no caso do provedor, e de lá ir pra internet. Agora que começa |
| 37:03 | a parte interessante. Por acaso, esse modem da Vivo, assim como modems de outros provedores como a Claro, |
| 37:08 | tem múltiplas funções. É ao mesmo tempo um modem, mas acumula funções de um roteador e |
| 37:13 | ponto de acesso Wifi. E eles costumam ser ruins em todos eles. Pra poucos dispositivos e pouco uso, |
| 37:13 | realmente não faz nenhuma diferença usar. Mas no meu caso eu prefiro desligar essas funções e conectar num roteador separado, |
| 37:23 | no caso esse meu TP-Link aqui do lado. Mas acho que por hoje já é suficiente e |
| 37:33 | vou pausar a história por aqui. No próximo episódio quero resumir pra que serve um roteador |
| 37:33 | e como ele distribui a conexão pro meu PC, TV, e tudo mais. Se ficaram com dúvidas mandem |
| 37:33 | nos comentários abaixo, se curtiram o video deixem um joinha, assinem o canal e compartilhem |
| 37:33 | o video com seus amigos. A gente se vê, até mais. |
