# Como Funciona Sockets, Cliente, Servidor e a Web? | Introdução a Redes Parte 4

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=lc6U93P4Sxw
- **Duração:** 45:49
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita No começo dessa mini-série eu ia só até o episódio passado, mas depois que escrevi, |
| 0:07 | resolvi estender mais três episódios. Estou pulando toda uma parte sobre rede física, MLPS, OLDM, Wimax, 802.11. |
| 0:14 | Vale estudar o livro de redes do Tanenbaum pra esses detalhes, o objetivo é focar mais |
| 0:19 | em assuntos que ajudem programadores e não quem está interessado em seguir na carreira de infraestrutura, por isso eu sei que pra quem é de telecom ou infra tem bastante coisa |
| 0:28 | simplificada. Agora quero ir direto pra camada de transporte e aplicação e nos próximos episódios falar |
| 0:34 | assuntos que o Tanenbaum não chega a explicar no livro. Só antes de continuar, tem uma errata que esqueci de falar nos videos anteriores, sobre |
| 0:41 | o primeiro video de redes. Lá eu tava tentando simplificar com metáforas pra falar que ondas como de rádio e internet |
| 0:47 | wireless se parecem com ondas na água, mas do jeito que falei ficou parecendo que wireless |
| 0:53 | precisa de um meio como ar pra se propagar, mas claro que não, ondas na água são diferentes |
| 0:58 | de ondas eletromagnéticas, que se propagam no vácuo, diferente de som. Por isso que no espaço não tem barulho, mas satélites conseguem se comunicar. |
| 1:07 | Já tá na errata do episódio mas achei melhor esclarecer. Todo programador vai ter que lidar com coisas como endereços IP, que já expliquei, e também |
| 1:14 | com as tais portas. Toda vez que você roda um `npm start` da vida, sobe uma aplicação web nas tais portas |
| 1:21 | 3000 ou 4000. Todo tutorial só menciona isso: magicamente funciona. |
| 1:26 | Mas não explica o que está acontecendo de verdade. É hora de entender a mágica. O episódio de hoje é sobre sockets. |
| 1:32 | (...) Em resumo bem resumido, pense em sockets literalmente como tomada da sua casa. |
| 1:42 | Diferentes portas tendo diferentes padrões de buracos, como o padrão brasileiro sendo uma porta, padrão europeu sendo outra, padrão americano outra e assim vai. |
| 1:51 | E só plugues corretos encaixam em determinadas tomadas. Por isso seu notebook importado não encaixa na porcaria da tomada do Brasil. |
| 1:59 | + Na prática o conjunto de endereço IP e porta de saída, digamos, do seu navegador conectando |
| 2:05 | num site, e o endereço IP e porta de entrada do tal site, essas quatro informações é |
| 2:10 | o mínimo pra definir um socket. É o plug e a tomada conectada. Não se atenha tanto ao nome mas a esse conjunto de informações, é o que se precisa pra |
| 2:19 | formar uma conexão de rede entre dois processos, que é o caminho que os pacotes que falamos |
| 2:25 | antes vão trafegar. Sockets, na verdade, é uma forma de comunicação entre processos. |
| 2:31 | Todo sistema operacional existe pra gerenciar processos. Expliquei isso nos videos de Programação pra Iniciantes, em particular nos de concorrência |
| 2:39 | e paralelismo e gerenciamento de memória. Processo é todo programa que tem rodando no seu computador, seja seu spotify ou banco |
| 2:46 | de dados. No nível mais básico, um processo é representado por um número, um process ID ou PID que o |
| 2:53 | sistema operacional dá pro seu programa. Quando do terminal de um Linux se digita `ps -ax` dá pra ver os processos e seus PIDs. |
| 3:02 | O sistema operacional aloca uma certa quantidade de memória e internamente, seu processo acha |
| 3:08 | que tem acesso a toda memória teórica de 64-bits, mas na realidade o sistema operacional |
| 3:14 | é quem intermedia o acesso à RAM ou Swap de disco. |
| 3:19 | Isso é importante. Um processo é como uma criança rica mimada gastando cartão de crédito dos pais. |
| 3:25 | Ele não tem noção que tem limite, e só vai gastando, e os pais, que é o sistema |
| 3:30 | operacional, vai sempre só pagando, então essa criança tem a ilusão que tem dinheiro |
| 3:35 | infinito. É mais ou menos assim. Seu PC tem só 8 giga de RAM real, mas seu processo acha que tem do endereço 0 até |
| 3:42 | 2 elevado a 64 de memória, que seria o máximo teórico de 16 exabytes. |
| 3:48 | Nenhum computador de verdade tem exabytes de RAM ainda. Isso é importante de entender então vou insistir com outra metáfora. |
| 3:55 | Cada processo rodando na máquina enxerga uma memória virtual, de 0 até 16 exabytes. |
| 4:00 | Quando falamos que se consegue endereçar memória, na realidade pense assim: Imagine um livro com uma parte de índice no começo. |
| 4:08 | O índice tem espaço pra 16 exabytes de linhas, mas o livro em si não tem 16 exabytes de |
| 4:14 | páginas, saca? Todos os processos estão compartilhando a mesma memória física de 8 gigabytes reais, |
| 4:20 | mas ele só enxerga o índice. O sistema operacional intermedia e garante que um processo não consiga acessar a memória |
| 4:27 | real inteira, as páginas do livro, de outro processo. Por isso falamos que rodam isolados, sem um sobrescrever a memória do outro. |
| 4:35 | Eu explico sobre isso nos episódios sobre gerenciamento de memória. Mas a parte importante é entender que um processo não enxerga nunca a memória de |
| 4:42 | outro processo. Ele acha que está sozinho na máquina. Antigamente, nos primeiros computadores sem isolamento de memória, um processo poderia |
| 4:50 | escrever num endereço de memoria real e um outro processo poderia ler essa informação diretamente desse endereço. |
| 4:56 | Um livros sem índices. Na época dos computadores de 8 e 16 bits era mais ou menos assim. |
| 5:02 | Até a Intel inventar memória protegida. Todo processo enxergava todas as páginas e poderia escrever em qualquer lugar. |
| 5:10 | Endereçar memória diretamente era mais rápido mas levava a dezenas de bugs de um processo escrevendo em cima de endereços que outro processo tava usando, levando desde a comportamento |
| 5:20 | não-determinístico até a crashes. Isso era menos ruim quando a gente só rodada um programa de cada vez, na era do MS-DOS. |
| 5:28 | Mas nos primeiros Windows isso já era um problemão. Desde que passamos a isolar os processos e demos endereços virtuais em vez de reais, |
| 5:36 | pelo menos essa categoria de bugs foi extinta, já na época do Windows 3.1 e foi melhorando a cada nova versão. |
| 5:42 | Também significa que se um processo quiser se comunicar com outro processo, não tem como, porque não tem como gravar algo na memória que outro processo possa ler diretamente. |
| 5:51 | As únicas duas formas de dois processos se comunicarem ou é via pipes ou via arquivos. |
| 5:58 | Vamos entender. Pipes de Linux é simplesmente ligar a saída padrão de um programa na entrada padrão |
| 6:04 | de outro programa, o stdout ligado ao stdin via um pipe, ou cano. |
| 6:10 | Que nem quando fazemos `cat algum_arquivo` pipe `grep alguma coisa`. Expliquei um pouco disso no episódio de Ubuntu se quiser relembrar. |
| 6:17 | Isso significa que um programa roda primeiro, cospe algum resultado no stdout, e esse resultado |
| 6:23 | é passado pro stdin, pra entrada, do próximo programa. É uma forma de dois programas diferentes se comunicar, mas é uma forma serial: um |
| 6:31 | programa precisa rodar primeiro até o fim, terminar, e só depois começa o outro. Portanto é mais complicado se eu quero os dois programas rodando em paralelo, sem um |
| 6:41 | esperar o outro terminar. A única outra solução é um programa ficar cuspindo coisas num arquivo e o outro programa |
| 6:49 | ficar lendo desse arquivo. Esse arquivo serve de ponte, de stream de entrada e saída pra ambos, criando um tipo |
| 6:56 | de conexão. Isso resolve o problema deles conseguirem rodar em paralelo, ao mesmo tempo. |
| 7:01 | Como exemplo, pense num programa que vai gravando coisas num arquivo de log e pense outro programa |
| 7:06 | como o Prometheus, que vai lendo esse log e organizando a informação. |
| 7:11 | Arquivos é uma área compartilhada que dois processos podem usar pra se comunicar, já que memória é isolada. |
| 7:18 | Todo iniciante precisa se acostumar a lidar com arquivos. Sem entrar em detalhes, na maioria das linguagens, você manda abrir um arquivo a partir de um |
| 7:25 | path ou caminho, que é a sequência de diretórios e sub-diretórios separados por uma barra e o nome do arquivo com extensão. |
| 7:32 | Isso abre o que chamamos de um stream, pense como se fosse um cano de bits bidirecional, |
| 7:37 | um rio onde flui bits. Agora podemos ou ler ou escrever nesse stream. |
| 7:43 | Podemos ler bit a bit, ou pedir pra ir enchendo tipo um balde antes, um buffer, um acumulador, |
| 7:49 | pra pegar linha a linha de cada vez, por exemplo. Mesma coisa pra escrever, podemos jogar bit a bit nesse stream, ou preencher um buffer |
| 7:56 | antes e mandar vários bits de uma só vez, como uma linha inteira. Podemos programar pra deixar encher esse balde, e quando tiver uma certa quantidade de bits |
| 8:04 | ou quando vier algum caracter especial como uma quebra de linha, pedir pra notificar o programa pra fazer alguma coisa com o que veio. |
| 8:11 | De novo, a maioria das bibliotecas de linguagens modernas já cuidam disso e você como programador |
| 8:16 | só lida com coisas como linha a linha. Mas por baixo existem coisas como buffers. |
| 8:22 | Vale lembrar que se você programar numa linguagem um pouco mais baixo nível, tipo C, Rust ou até Java, vai lidar mais com esses conceitos de buffers. |
| 8:30 | Java tem classes como Buffered Stream, por exemplo. Numa linguagem mais alto nível como Javascript, ele cuida disso pra gente por baixo dos panos, |
| 8:37 | e você só fala "vai lendo de linha a linha e vai me dando". Bibliotecas de linguagens de alto nível foram feitas pra oferecer produtividade ao custo |
| 8:45 | de dar menos controle. Por outro lado é o velho 80/20, pra 80% das coisas que precisa, o 20% que oferece por |
| 8:52 | padrão costuma ser suficiente. Pros outros 20%, aí precisa descer pra um C da vida. |
| 8:57 | Só pra ter de referência aqui, como que em Javascript com Node dá pra escrever e ler de um arquivo? |
| 9:03 | Primeiro carrega a biblioteca "fs" de filesystem e ele tem várias funções como esse `writeFile` |
| 9:09 | onde passo o nome do arquivo e o conteúdo como String. Se não der nenhum erro, podemos usar `readFile` pra ler o conteúdo que acabamos de escrever |
| 9:17 | e mostrar na tela com o bom e velho `console.log`. Mas o principal é entender que a semântica são funções como essas, read alguma coisa, |
| 9:24 | write alguma coisa. `var fs = require("fs"); fs.writeFile('hello.txt', 'Hello World', function(err) { if (err) { return console.error(err); } fs.readFile('hello.txt', function (err, data) { if (err) { return console.error(err); |
| 9:30 | } console.log("read: " + data.toString()); }); });` Enfim. Com pipes e arquivos, você tem o mínimo suficiente pra fazer dois processos comunicarem entre si mesmo sem compartilhar memória RAM. |
| 9:36 | Esse tipo de técnica fica embaixo de um guarda chuva de assuntos que chamamos de IPC ou inter |
| 9:41 | process communication. Existem outras formas de comunicação como sinais, mas só isso é suficiente pra hoje. |
| 9:47 | Se você só tem um computador, isso é suficiente. Mas aí lá nos anos 60 inventaram um troço que fodeu esse esquema. |
| 9:55 | Essa tal de rede. Com redes, temos mais de um computador rodando em paralelo e seria bacana se um processo |
| 10:01 | rodando em um computador pudesse falar com um processo rodando em outro computador. E seria mais legal ainda se pudéssemos usar uma semântica parecida com lidar com arquivos, |
| 10:11 | sem de fato usar arquivos. Ter comandos parecidos como "read" ou "write", ler ou escrever num stream de bits. |
| 10:19 | Pensando assim que em 1983 surge a implementação de Berkeley Sockets no UNIX original BSD versão |
| 10:26 | 4.2. Por isso são chamados de BSD sockets, de Berkeley Software Distribution ou POSIX sockets. |
| 10:34 | POSIX que é o conjunto de APIs e protocolos que define o que é um UNIX. |
| 10:39 | Pra entender um pouco mais sobre UNIX e Linux e licenças de software livre, não deixe de assistir o episódio de Apple e GPL que fiz faz tempo. |
| 10:47 | BSD Sockets se tornou meio que o padrão de como lidamos com comunicação entre processos |
| 10:54 | de forma mais geral. Já vimos nos episódios anteriores dessa mini-série de redes, como que informação |
| 11:00 | é fragmentada em pacotes, e como esses pacotes são transferidos numa rede de um computador |
| 11:06 | até outro, seja numa rede local ou seja na internet em geral. Vamos assumir que tudo isso funciona e que os sistemas operacionais sabem como produzir |
| 11:13 | pacotes e enviar na rede e consumir pacotes que chegam da rede, seja via fibra ótica, |
| 11:19 | cabo de cobre ou rede sem fio. Não por acaso venho me repetindo bastante sobre sistemas de armazenamento: como HDs |
| 11:26 | são dispositivos de blocos e não dispositivos de arquivos. No baixo nível do hardware, sistemas operacionais lidam com blocos de bits num HD ou blocos |
| 11:35 | de bits em pacotes de rede. Tudo são blocos, toda informação é fragmentada e transferida num stream. |
| 11:43 | Podemos fazer buffers de blocos. Se blocos de bits forem arquivos num HD, podemos pensar em blocos de bits que vem pela rede |
| 11:50 | meio como arquivos também. As abstrações são parecidas embora no meio físico sejam diferentes. |
| 11:56 | No fim do dia você está lendo bits de algum lugar e escrevendo bits em algum lugar, esse |
| 12:01 | é o conceito principal. Não é a definição exata mas a grosso modo poderíamos pensar em sockets como uma generalização |
| 12:08 | das primitivas de arquivos. Um Linux entrega um file descriptor ou file handle pro seu programa, tanto se for um arquivo |
| 12:16 | local no seu HD ou um socket de rede. Pense em um handle ou descriptor como uma caixa preta que representa um arquivo, um |
| 12:24 | intermediário pra quem você pede pra receber bits ou enviar bits. E essa caixa preta poderia ser um arquivo em disco, mas poderia ser uma conexão remota |
| 12:32 | em rede. Tem uma preparação extra que precisa fazer pra se comunicar na rede e em toda linguagem |
| 12:38 | de programação vai ser parecido. O protocolo que os Berkeley Sockets definiram funciona mais ou menos assim. |
| 12:43 | `const http = require('http'); const hostname = '127.0.0.1'; const port = 3000; const prepareResponse = (req, res) => { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end('Hello World\n'); } const server = http.createServer(prepareResponse); |
| 12:49 | server.listen(port, hostname, () => { console.log(`Server running at http://${hostname}:${port}/`); });` Primeiro seu programa pede um bind pro sistema operacional. Bind é literalmente ligação, a ligação de um endereço IP com um outro número de 16 bits que chamamos de porta. |
| 12:55 | Bind é um pedido de registro. Funciona assim. Todo processo quando inicia, o sistema operacional oferece um número de identificação, o tal |
| 13:03 | PID. Só que esse PID muda o tempo todo. Hoje seu Spotify inicia com PID 10. Mas amanhã pode já ter outro programa com PID 10, então o sistema atribui PID 11 ou |
| 13:13 | qualquer outro número. PIDs identificam programas rodando naquele momento, mas não servem pra identificar um |
| 13:20 | programa individualmente a qualquer momento. Então precisamos de outro número que seja fixo que o programa possa pedir pra se registrar. |
| 13:28 | Digamos que seu programa peça pro sistema registrar ele com o número 3000. O sistema operacional mantém uma tabela em memória e poderia associar o PID atual do |
| 13:37 | seu programa, digamos que seja 11, com esse número 3000, que ele chama de porta, ligados |
| 13:42 | ou bound num endereço IP. Porta é um número que identifica um processo que o sistema operacional mantém numa tabela |
| 13:50 | de controle na memória dele. Se ninguém antes pediu pra registrar essa porta, o sistema te associa nela e nenhum |
| 13:56 | outro programa pode pedir pra se ligar na mesma porta. Porta é só isso, um identificador do programa rodando ligado ao endereço IP do computador. |
| 14:05 | Quando o sistema consegue te associar nessa porta 3000, devolve um ok pro programa e devolve |
| 14:10 | o equivalente a um stream de bits, o cano aberto, como se tivesse acabado de conseguir |
| 14:15 | abrir um arquivo. E agora seu programa pode entrar em modo de escuta, ou listen. |
| 14:21 | Nesse momento ele fica bloqueado esperando o sistema te mandar alguma coisa por esse cano e não precisa fazer mais nada enquanto isso. |
| 14:28 | Normalmente isso fica numa thread bloqueada ou é usado I/O assíncrono, que não é escopo explicar hoje. |
| 14:33 | Só entenda que depois do bind, seu programa ficaria parado esperando e escutando o que |
| 14:39 | vier através dessa porta 3000. O processo de bind e listen de sockets é similar ao processo de dar open e abrir um |
| 14:47 | arquivo. Daí alguém na rede resolve mandar alguma informação, pro endereço IP do computador onde ele tá rodando, e mandando junto que quer falar com seja lá quem está ligado |
| 14:56 | nessa porta 3000. O sistema operacional recebe isso e vê, "hum, quem tá escutando na porta 3000, vamos ver |
| 15:02 | na tabela, ah é o processo de PID 11, vou mandar no cano aberto dele". |
| 15:07 | Agora seu programa, que estava só escutando, começa a receber bits. Nesse momento ele pode escolher aceitar ou rejeitar, normalmente só se aceita, isso |
| 15:15 | é o passo de accept. E é no accept que fecha o que se chama de conexão entre este computador e o outro que |
| 15:22 | pediu a conexão. O socket serve pra estabelecer essa conexão, esse stream de bits, entre dois programas |
| 15:29 | rodando, mesmo se for em máquinas diferentes. E agora os dois programas precisam enviar comandos que ambos entendam. |
| 15:36 | Se seu programa receber bits que formam um comando válido, pode começar ou a receber ou a enviar bits de volta pela mesma conexão. |
| 15:43 | Aqui é a metáfora das tomadas de padrão diferente. Pra comunicação acontecer, ambos precisam concordar que comandos aceitam trocar. |
| 15:52 | Esse acordo entre as duas pontas é o tal de protocolo. Pense em protocolo como sendo os pinos nas posições corretas que encaixam certo nos |
| 15:59 | buracos da tomada. Mesmo tendo um processo pendurado numa porta, se ele não for um servidor web, não adianta |
| 16:05 | um navegador web tentar se comunicar nele, eles não vão se entender e só vai dar erro. Por exemplo, se um navegador web tentar se conectar com um servidor de banco de dados, |
| 16:14 | só vai dar erro, porque o banco de dados não entende comandos de HTTP que o navegador manda. Falando bem resumido, esse é o básico do básico do básico de programação distribuída |
| 16:22 | em rede. Toda linguagem vai te dar bibliotecas e funções que tem nomes parecidos com esses passos, |
| 16:28 | bind, listen, accept, send. Apesar da sintaxe de cada linguagem ser diferente, podem ver que em todas é o mesmo processo, |
| 16:36 | porque as primitivas no sistema operacional são as mesmas e as tecnologias de rede são as mesmas. |
| 16:41 | Independe da linguagem, o jeito de falar em rede é sempre a mesma. Eu sempre falo que é mais importante saber a fundação do que uma linguagem só, porque |
| 16:49 | se você aprendeu isso em C, facilmente vai conseguir fazer a mesma coisa em Java ou Python. Do lado do sistema operacional, entenda que portas é só uma tabelona com identificadores |
| 16:59 | numéricos de 16-bits, onde é possível associar 2 elevado a 16 portas no total, de 0 até |
| 17:05 | 65 mil 536. Por isso você nunca viu número de portas acima disso. Essa tabelona diz que se receber bits endereçados pra um IP e porta, ele sabe pra qual cano |
| 17:15 | de qual processo rodando enviar. Agora vamos entender isso a partir do programa mais comum pra se comunicar em rede hoje, |
| 17:21 | seu navegador web, como Chrome ou Firefox. Seu navegador é um exemplo desse tal programa que pede uma conexão, um cliente. |
| 17:29 | Ele não precisa fazer bind, porque não precisa que ninguém se conecte nele. Ele só quer se conectar na porta dos outros, de um servidor web. |
| 17:36 | E é isso que diferencia um cliente de um servidor. Um servidor faz bind e listen numa porta e fica esperando, escutando. |
| 17:43 | Um cliente envia pacotes pro endereço IP do servidor e pede pra se conectar num programa rodando lá que está escutando numa determinada porta. |
| 17:51 | Pra isso funcionar, o cliente precisa saber não só o endereço IP como em qual porta o servidor está escutando. |
| 17:57 | E por isso se estabeleceu que certas portas são exclusivas pra um determinado uso. |
| 18:02 | Mas não se enganem, portas são só números numa tabela que o sistema operacional gerencia. Os usos de cada número de porta são completamente arbitrários, determinados por consenso, e |
| 18:13 | pro programa em si não faz nenhuma diferença se ligar numa porta 80 ou 3000 ou 8080. |
| 18:19 | Não existe nenhum tratamento especial diferente. Portas são só números. E por isso você sobe uma aplicação web feita em Node numa porta 3000 e ela funciona |
| 18:27 | igual quando subimos na porta 80 num servidor na Amazon. Por convenção, estabeleceu-se que as primeiras 1024 portas, de 0 até 1023 são portas de |
| 18:37 | sistema, e num Linux precisa ter permissão de root pra fazer um programa se registrar numa delas. |
| 18:43 | Essa distinção existe porque vários usuários podem abrir sessões num mesmo servidor UNIX |
| 18:48 | ou Windows Server, mas só o administrador pode subir processos em portas abaixo de 1024. |
| 18:54 | Usuários nesse servidor podem subir processos em outras portas menos nessas. É nesse intervalo que se encontram as duas portas mais famosas de todas, a 80 de HTTP |
| 19:04 | e 443 de HTTPS. Temos outras famosas, como porta 21 de FTP, porta 22 de SSH, porta 25 de SMTP pra envio |
| 19:09 | de emails, porta 37 que usamos pra sincronia de horário via NTP, porta 53 que é DNS, |
| 19:15 | porta 194 é de IRC, 993 pra IMAP de cliente de email e assim por diante. |
| 19:20 | Existe uma organização que registra o uso dessas portas baixas, a IANA ou Internet Assigned |
| 19:25 | Number Authority. Dá pra ligar qualquer programa numa porta baixa, mas normalmente essas portas costumam |
| 19:31 | ter serviços específicos como servidor web ou DNS. Por isso que num navegador quando digitamos endereço, podemos omitir a porta, porque |
| 19:39 | o navegador preenche a porta pra gente usando essas convenções. Quando digitamos http://www.google.com primeiro ele precisa resolver esse nome de domínio, |
| 19:49 | pra isso resolve esse nome num endereço IP e pra isso precisa de um name server ou DNS. |
| 19:55 | Já mostrei no episódio anterior como seu sistema operacional pergunta quem é esse nome pra um DNS, como o 1.1.1.1 da CloudFlare ou 8.8.8.8 do Google. |
| 20:04 | O DNS vai te devolver um grupo de endereços IP e seu computador escolhe um deles. A partir desse ponto faz um cache disso localmente. |
| 20:12 | Se no navegador pedir de novo o www.google.com, nem precisa pedir pro DNS, porque já tem gravado num cache local. |
| 20:18 | Toda resposta de DNS tem uma coisa chamada TTL ou time to live, que é tipo uma expiração. |
| 20:24 | Quando expirar, aí sim seu computador vai no DNS e pergunta de novo qual é o endereço do nome www.google.com. |
| 20:30 | Em outro video vou explicar DNS com um pouco mais de detalhe mas se acostumem com esse conceito primeiro. |
| 20:35 | Enfim, graças ao DNS ou o cache local de DNS, seu navegador agora tem um endereço |
| 20:41 | IP. Ele pode começar a se conectar. Mas como disse antes, precisa saber em que porta nesse endereço vai estar o programa |
| 20:48 | que vai te devolver os HTMLs. Esse programa chamamos de servidor web, e como falei antes, por convenção, vai estar |
| 20:54 | escutando nas portas 80 ou 443. Se no navegador você digitou http:// significa que quer conectar na porta 80. |
| 21:01 | Se digitar https:// quer dizer que quer conectar na porta 443. O que vem antes dos dois pontos é com qual protocolo quer se comunicar com esse servidor, |
| 21:11 | no caso HTTP ou HTTP com TLS. Protocolos é quem definem os tais comandos e valores que ambos o navegador e o programa |
| 21:21 | servidor web conseguem entender, os pinos certos pros buracos certos da tomada. No protocolo HTTP temos comandos em texto como GET ou POST pra pedir ou enviar coisas |
| 21:31 | do navegador pro servidor. Vamos fazer um exemplo simples só pra consolidar o conceito. Vou fazer rapidinho um servidor web em Node.js estilo hello world, só pra ter um programa |
| 21:41 | escutando numa porta. Isso você encontra quinhentos tutoriais na internet não vou detalhar muito. |
| 21:46 | Olha esse do tutorial do próprio site oficial do Node.js. Primeiro ele carrega a biblioteca "http". |
| 21:52 | Em seguida declara duas variaveis, uma pra guardar o endereco 127.0.0.1. Esse é o endereço que chamamos de loopback, ele representa o endereço local de rede do |
| 22:01 | seu computador. Todo pacote enviado pra esse endereço não vai sair do seu computador, ele vai devolver |
| 22:06 | pra ele mesmo. Por isso chamamos de loopback. Vale entender isso porque muita gente acha que 127.0.0.1 é a mesma coisa que outro endereço, |
| 22:14 | o 0.0.0.0 e não sabe a diferença. Normalmente um endereço IP é associado com uma placa de rede instalado na sua máquina, |
| 22:23 | mas 127.0.0.1 é como se fosse uma placa de rede virtual, de mentira. Ele recebe pacotes e devolve pra ele mesmo. |
| 22:30 | 127.0.0.1 é a mesma coisa que localhost. Quando damos bind de um processo nesse endereço, dá pra abrir o navegador e conectar por ele |
| 22:38 | com http://localhost. Mas se alguém de fora tentar se conectar no mesmo serviço, na mesma porta, não vai |
| 22:45 | conseguir, porque na placa de rede de verdade não tem bind nessa porta. Localhost só é acessível de dentro do próprio computador, não de fora. |
| 22:53 | Tem também o endereço 0.0.0.0 que significa "qualquer placa de rede do computador". |
| 22:59 | Quando queremos pendurar um servidor que vai receber bits independente de por qual placa de rede do seu computador vier, penduramos ele no 0.0.0.0. |
| 23:08 | E no navegador podemos digitar localhost porque 127.0.0.1 é um desses "qualquer placa de |
| 23:14 | rede", mas também um navegador em outro computador na rede, vai conseguir se conectar no seu programa. |
| 23:20 | Todo computador responde nesses endereços locais. Muita gente pensa que são a mesma coisa, mas só localhost e 127.0.0.1 são a mesma |
| 23:27 | coisa. Pra desenvolvimento a gente usa localhost, porque normalmente não queremos outra pessoa na mesma rede acessando enquanto estamos no meio do desenvolvimento. |
| 23:35 | Mas num servidor de verdade queremos dar bind em 0.0.0.0 pra deixar o programa acessível |
| 23:41 | a qualquer pessoa. A segunda variável define que quer se ligar na porta 3000. Eu expliquei que portas de 0 até 1023 são reservados e o sistema operacional exige permissão |
| 23:51 | de administrador pra ligar um programa nessas portas baixas. Por isso que em máquina de desenvolvimento, preferimos usar portas de 1025 até 49 mil |
| 24:00 | 151. Porque com suas permissões de usuário normal, pode pedir pro sistema ligar seu programa numa porta, sem privilégios especiais, sem precisar ficar usando o comando `sudo` toda |
| 24:10 | hora. Por isso que pra subir uma aplicação de Node.js ou Django ou Laravel, numa porta como |
| 24:16 | 3000 ou 4000, não precisa executar com `sudo`. Pra complementar, de 49 mil 152 até 65 mil 535 são o que chamamos de portas dinâmicas |
| 24:26 | ou privadas. Em particular 49 mil 152, que é um número difícil de decorar em decimal, mas é a mesma |
| 24:32 | coisa que 2 elevado a 15 menos 2 elevado a 14, que é mais fácil de lembrar. Também são chamadas de portas efêmeras. |
| 24:39 | Você até pode mas normalmente não se registra nenhum programa servidor que vai ficar rodando permanentemente nesse segmento. |
| 24:46 | Essas são as portas usadas, por exemplo, por comunicadores como o Zoom ou Skype pra |
| 24:52 | abrir conexão com outra pessoa na internet. Pode ser usado por games pra sessões multiplayer. |
| 24:57 | São portas temporárias. Programas de comunicação tentam diversas dessas portas e usam a primeira livre que |
| 25:03 | acharem. Não é regra, mas eu acho que programas que usam UDP em vez de TCP usam mais essas portas. |
| 25:10 | Por isso que nós programadores web, quando fazemos uma aplicação usando Node.js ou Spring ou Laravel ou qualquer coisa assim usamos portas como 3000, 4000, 8000, 8080 |
| 25:20 | como era o Tomcat de Java e assim por diante. Qualquer uma depois de 1024 e antes daqueles 49 mil e tanto servem. |
| 25:28 | Sem interferir com calls de Zoom e sem precisar de privilégios de administrador e ter que ficar digitando `sudo`. |
| 25:35 | De novo, portas são só números. Se você achava que porta 8080 ou 3000 tinha algum significado, não tem, foram escolhidas |
| 25:42 | arbitrariamente por alguém e todo mundo só usa a mesma porta por convenção. |
| 25:47 | Enfim, agora é específico de cada linguagem e framework, mas no caso do Node criamos uma |
| 25:52 | instância do que ele chama de "server". Eu modifiquei um pouco o exemplo do tutorial porque quando criamos o servidor já registramos |
| 26:00 | como queremos que ele responda quando vier algum comando de HTTP. Já volto nisso. Na sequência, fazemos essa instância de server pausar e ficar escutando, esperando |
| 26:09 | alguma coisa, que o sistema operacional vai mandar pra gente no cano dessa porta 3000. Se ninguém mais estava pendurado na porta 3000, e ele conseguir se ligar com sucesso, |
| 26:19 | daí escreve essa mensagem de servidor rodando. E pronto, agora está escutando na porta 3000 desse computador. |
| 26:26 | Vamos voltar pro navegador. Lá no campo de endereço escrevo que quero usar o protocolo "http", dois pontos, barra, |
| 26:33 | barra, localhost que é outra forma de dizer "127.0.0.1", dois pontos, porta 3000. Se eu não colocasse explicitamente esse dois pontos 3000, ele ia assumir que seria porta |
| 26:43 | 80. Tenta aí, em qualquer site como google.com, digita no final dois pontos 80. |
| 26:48 | Vai ver que dá no mesmo. E pronto, veio uma resposta Hello World. Vamos voltar pro código do servidor. |
| 26:54 | Lembra que quando criei a instância de server registrei uma função de resposta? O framework do Node esconde os detalhes. |
| 27:01 | O Linux recebeu os pacotes de bits do navegador endereçados pra porta 3000, viu que tinha |
| 27:06 | meu programa pendurado nele e começou a reenviar os pacotes pro cano da porta 3000. |
| 27:12 | O meu programa em Node começa a receber pacote e dá accept. E aí vê o que fazer com esses pacotes. |
| 27:18 | Daí tinha essa minha função registrada no server. Ele encapsula esses pacotes numa estrutura chamada Request, ou HTTP Request. |
| 27:26 | É isso que faz essa biblioteca "http" que estamos usando. Ele se encarrega de receber os bits e organizar tudo bonitinho nesse objeto de Request pra |
| 27:35 | gente. A partir desse ponto eu posso fazer lógica de código pra fazer coisas diferentes dependendo |
| 27:40 | do que vier nessa request, como carregar um arquivo HTML. No caso, como é um exemplo besta, eu só mando responder a mensagem de Hello. |
| 27:48 | Mas não é só a mensagem. Isso é um protocolo, tem algumas regrinhas. O mínimo do mínimo que se espera de resposta é montar uma segunda estrutura chamada HTTP |
| 27:57 | Response. Nesse response registro um status code 200, que é o código do protocolo HTTP pra dizer |
| 28:04 | que tá tudo ok, daí por boa etiqueta, registro também um cabeçalho com um mime type, no |
| 28:09 | caso pra indicar que não vou responder um HTML e sim só um texto puro. É com esse mime type que o navegador sabe se é pra interpretar como HTML ou se é um |
| 28:19 | binário e é pra fazer download, por exemplo. E finalmente, posso escrever minha mensagem de hello no response como um simples string. |
| 28:26 | O Node vai pegar esse pacote de response que preenchi e mandar pro sistema operacional |
| 28:32 | devolver pela rede pro navegador pela mesma conexão. E o sistema operacional por baixo vai fazer tudo que já expliquei antes, vai quebrar |
| 28:39 | esse response em datagrams, vai encontrar a rota pra enviar, etc. E no final o navegador vai receber o pacote de resposta e interpretar isso visualmente |
| 28:48 | na tela, desenhando o hello na tela pro usuário. Esse é o fluxo mais básico de web. |
| 28:53 | Se não entender nem isso, não vai entender nada mais complicado, então garanta que esse fluxo está super claro na sua cabeça. |
| 29:00 | Tem outra forma de ver como isso funciona. Antigamente todo sistema operacional vinha com um programa de internet bem simples chamado |
| 29:07 | telnet. É um programa que se conecta em qualquer porta que tenha algum outro programa escutando |
| 29:13 | e com ele posso manualmente digitar comandos pra enviar, caso eles aceitem comandos em |
| 29:18 | texto em vez de binário. No caso do Arch Linux hoje ele fica no pacote opcional chamado de inetutils. |
| 29:24 | Em nenhuma distro se instala mais por padrão porque acho que é considerado um risco de |
| 29:30 | segurança. São ferramentas que precedem o conceito de encriptação. Em vez de telnet hoje se usa SSH pra abrir conexões encriptadas, mas como não quero |
| 29:39 | ter que lidar com criptografia neste episódio, deixa eu mostrar o bom e velho telnet. |
| 29:44 | Aquele meu programa de hello de Node continua rodando. Ele tá pendurado na porta 3000 e mesmo quando processa a requisição de algum navegador, |
| 29:53 | continua aceitando novas requisições de outros navegadores. Por isso que um servidor web consegue atender várias pessoas ao mesmo tempo. |
| 30:00 | Vamos abrir um outro terminal e conectar direto nele usando telnet, passando o endereço e |
| 30:05 | a porta. Pronto, estou conectado. Agora posso enviar uma requisição HTTP manualmente. |
| 30:10 | O protocolo HTTP diz que posso digitar o comando GET seguido de uma URI que é o barra alguma |
| 30:17 | coisa e no final escrever HTTP/1.0 denotando a versão do protocolo que estou querendo usar. |
| 30:23 | Isso é tudo texto. Nas linhas seguintes posso mandar outros detalhes desse comando, mas se der dois enters, duas |
| 30:29 | quebras de linha, isso indica pro servidor que terminei minha requisição. E olha só, quando dei dois enters, o Node entendeu que podia começar a responder, e |
| 30:37 | essa é a resposta que ele envia. Olha só o que tinha mandado ele preencher na tal estrutura de resposta. |
| 30:43 | O status code 200 veio na primeira linha, seguido do content type que é texto puro, mais uma data e horário que o framework preencheu pra mim e o fechamento da conexão seguido |
| 30:52 | do corpo da resposta que é o string da mensagem hello. Claro, hoje em dia não preciso de telnet pra ver isso. |
| 30:58 | Todo navegador agora tem o tal Developer Tools, que se acessa com o atalho control shift J |
| 31:03 | no Windows ou control option J no Mac. Ele tem essa aba Network ou rede, onde podemos ver os pacotes de request e response e os |
| 31:11 | cabeçalhos. Mesma coisa que fizemos no telnet, olha como no request ele mostra que o navegador fez um comando GET e embaixo temos a mesma resposta que recebemos via telnet, status code 200, |
| 31:22 | content type text plain, a data e horário. Antes de existir Dev Tools a gente usava coisas como Telnet pra debugar. |
| 31:29 | Em linhas gerais é assim que um navegador, um cliente de APIs e tudo mais que fazemos na web funciona. |
| 31:35 | Com o navegador conectando na porta 80 ou 443 ou numa porta de usuário como a 3000 |
| 31:41 | do meu Node.js. O navegador monta uma estrutura em texto chamada request, um servidor feito em qualquer framework |
| 31:47 | como Node da vida recebe, decide o que fazer baseado no que foi pedido, monta uma outra |
| 31:53 | estrutura chamada response e devolve. Esse é o básico do básico de web. A porta 443 e TLS é uma camada a parte. |
| 32:01 | É um processo que acontece entre seu navegador e o servidor web, independente da aplicação |
| 32:06 | por baixo. Esse meu hello em Node não precisa estar ciente que a conexão estava ou não criptografada. |
| 32:11 | O navegador pede um handshake, um aperto de mão, com o servidor que, se estiver devidamente |
| 32:17 | configurado com certificados SSL, vão abrir uma conexão segura usando chaves assimétrica, |
| 32:23 | trocar uma chave simétrica, e a partir daí todo pacote que o servidor web envia vai criptografado |
| 32:28 | e o navegador consegue descriptografar e vice versa. Eu explico isso na parte 2 dos meus videos sobre criptografia. |
| 32:36 | Mas eu digo que tanto faz porque o programa Node por baixo vai receber a request já descriptografado |
| 32:42 | direitinho, como se nada tivesse acontecido. E em redes existe isso de cada camada na arquitetura trabalhar os pacotes trafegando e as camadas |
| 32:50 | de cima, como minha aplicação, não precisar estar cientes e funcionar normalmente. Se não sabia o que é uma boa arquitetura, a arquitetura OSI de camadas de rede é uma |
| 32:59 | boa inspiração, onde cada camada tem sua responsabiilidade, cada camada não precisa |
| 33:04 | estar ciente se uma camada embaixo foi adicionada ou trocada, contanto que realizem as mesmas |
| 33:09 | tarefas. Programação de software pra rede costuma ter essa metáfora de camadas de uma cebola. |
| 33:15 | Quem já brincou de Tor e coisas assim já deve ter ouvido falar de Onion, por isso. Outro dia falo de coisas como Tor. |
| 33:22 | Um navegador web como Chrome é um dos softwares mais complexos que você tem instalado no seu computador depois do próprio sistema operacional, especialmente pra renderizar |
| 33:32 | a parte gráfica corretamente. Mas pra se conectar num servidor web e mandar comandos simples de GET, um mero telnet como |
| 33:39 | mostrei já serve. Vários outros programas simulam um navegador simples como os programas wget ou curl de |
| 33:47 | Linux, que a gente usa mais pra fazer download, mas tecnicamente ele se comporta como um navegador |
| 33:52 | web. Ou bibliotecas que usamos pra fazer clientes pra APIs como o Axios de Javascript, ou a |
| 33:57 | classe HttpClient de Java ou C#, ou a classe http.client de Python e assim por diante. |
| 34:04 | São todos mini navegadores, sem a parte gráfica. Se nunca pensou assim, um servidor é todo programa que pede um bind de uma porta pro |
| 34:13 | sistema operacional e fica em modo listen de escuta, esperando pra dar accept e abrir |
| 34:18 | uma conexão com outro computador remoto. Aliás, vale outro conceito básico. Eu categorizo programas em dois tipos, short lived e long lived. |
| 34:26 | Ou em bom português, programas de tiro curto e programas persistentes. Programa de tiro curto são muitos dos que você roda via linha de comando, comandos |
| 34:34 | como o grep, sed, ou awk de Linux, programas que recebem um input, processam alguma coisa, |
| 34:40 | cospem um resultado e saem fora. Servidores ou programas persistentes são loops. |
| 34:45 | Vamos desconsiderar por um segundo que existem threads, I/O assincrono, e que tudo seja como |
| 34:51 | era antigamente, quando só dava pra rodar um comando bloqueante e síncrono por vez. |
| 34:56 | Se eu fosse escrever numa pseudo-linguagem, ou seja, uma linguagem que não existe, a estrutura mais básica de um servidor de rede seria assim: |
| 35:03 | `while(true) { listen(:3000) stream = accept() while(not stream.eof) { request += stream.read_line } response = processa_alguma_coisa(request) send(response) }` Todo servidor fica num loop infinito até receber sinal do sistema operacional pra morrer, |
| 35:09 | o tal SIGTERM ou sinal de término, que se você já usou Linux, já enviou com o comando `kill`. |
| 35:14 | Ou no Windows via powershell com o comando `taskkill`. Enfim, entenda que se executar um programa e ele tiver o comportamento de esperar um |
| 35:22 | evento, reagir, e voltar a esperar, normalmente é um loop, equivalente a um while true. |
| 35:28 | Dentro desse while, ele manda comando pro sistema operacional, o `listen`, pra pedir pra ficar esperando o que vier numa porta, como 3000. |
| 35:36 | Nesse ponto que eu falei pra ignorar que existe threads e concorrência. Faz de conta que quando ele dá listen, fica parado nessa linha até receber alguma coisa. |
| 35:44 | Uma hora alguém conecta e começa a enviar bits. Daí sai dessa linha e cai no `accept` onde recebe o stream de bits, o tal cano de bits. |
| 35:53 | Agora eu fiz um pseudo código arbitrário que é ficar lendo linha a linha até sinalizar `eof` que, se nunca viu, costuma ser sigla pra end of file, que terminou o envio ou acabou |
| 36:04 | o arquivo. Agora, o programa faz alguma coisa com esses bits que vieram, que chamei de request, e |
| 36:09 | monta alguma resposta, que é a estrutura de response. No final envia de volta ou dá `send` desse response, pedindo pro sistema operacional |
| 36:18 | devolver, pela mesma conexão fechada no accept, e o loop reinicia esperando outra requisição. |
| 36:25 | Volta pro estado de listen, até aparecer mais bits. No mundo real existem threads e na realidade uma das coisas que pode acontecer dependendo |
| 36:32 | da linguagem é o accept abrir uma nova thread pra processar o request e response enquanto |
| 36:38 | o loop de listen continua ativo esperando mais conexões. Possibilitando lidar com dezenas ou centenas de conexões simultaneamente. |
| 36:47 | Aproveitando o conceito. Todo programa gráfico é um grande loop também. Ele fica esperando você digitar alguma coisa ou clicar alguma coisa com o mouse, é parecido |
| 36:56 | com esse `listen`. E fica no loop infinito até receber um sinal pra fechar como o menu de Quit ou alt-f4 no |
| 37:02 | Windows. Um game também é um grande loop, esperando seus comandos e reagindo. Essa é a fundação pro que muitos chamam de programação orientada a eventos original. |
| 37:12 | O programa reage a eventos, como input de mouse e teclado ou algo assim. Não vou entrar em paradigmas, mas só pra lembrar que esse é um dos patterns mais comuns |
| 37:21 | em programação, o que eu pessoalmente chamo de Big Loop. Normalmente, em web, a gente fica muito preso ao protocolo HTTP, onde as duas peças principais |
| 37:30 | são a tal estrutura texto de HTTP Request e HTTP Response e comandos básicos como GET, |
| 37:35 | POST ou PUT. Todo tutorial de web começa direto neles. E por causa disso muita gente faz o que não devia, tentando embutir tudo que pode dentro |
| 37:43 | dessas estruturas. Mas a internet não é feita só de HTTP, ela só é a mais popular. |
| 37:48 | Muitos falam "internet" pensando em redes, roteadores, pontos de acesso. E chama o resto de Web. |
| 37:53 | Mas Web, que é o nome mais curto pra World Wide Web, que se refere à capacidade de hipertexto |
| 37:59 | de páginas HTML. A idéia que uma página pode ter links pra outras páginas formando uma teia, ou Web. |
| 38:06 | Mas internet na realidade é um conjunto de tecnologias, que envolve coisas como ethernet, wifi, fibra, o TCP/IP e todos os outros protocolos de aplicação, incluindo o HTTP de Web. |
| 38:16 | E chamamos assim porque como expliquei antes, o modelo OSI de internet define sete camadas. |
| 38:22 | A camada física que foi o episódio que expliquei sobre ondas, cabos de cobre e wireless. A camada de data link responsavel entre outras coisas como checar erros, como eu expliquei |
| 38:31 | sobre Hamming Code e tudo mais. A terceira camada, de rede é que lida com coisas como roteamento, endereços IP e tudo |
| 38:37 | mais. Eu pulei as camadas seguintes, a camada 4 de transporte, a camada 5 de sessão, a camada |
| 38:43 | 6 de apresentação e a camada 7 de aplicação. Isso porque em TCP/IP as funções da camadas acima da 5 acabam sendo acumuladas na camada |
| 38:51 | de aplicação, que é onde mora protocolos como HTTP de Web. Em OSI existe uma camada pra lidar com sessões, mas em Web controlamos sessão direto no HTTP |
| 39:01 | usando cabeçalhos como de cookies. Sessões servem pra literalmente identificar uma sessão individual de cada usuário e |
| 39:08 | no modelo OSI esse controle ficaria na camada 5, mas a gente acaba achando mais fácil acumular |
| 39:14 | isso direto na camada de aplicação. Por isso em vez de ter um jeito único de lidar com sessões, protocolos como HTTP, |
| 39:21 | FTP, IMAP e tudo mais, cada um controla sessões do seu jeito. Tem vantagens e desvantagens de se fazer isso. |
| 39:29 | Exemplo de outro protocolo era o antigo FTP ou File Transfer Protocol que hoje em dia ninguém mais usa pelo mesmo motivo que não se usa Telnet, ambos precedem conceitos mais |
| 39:38 | modernos de segurança. Muitos antigos servidores de FTP estão expostos atrás de um servidor web, como o FTP da Unicamp |
| 39:48 | que eu usava muito na faculdade e hoje hospeda espelhos de arquivos de Linux. Se digitar ftp.unicamp.br no seu navegador, vai ver que ele coloca http:// na frente, |
| 39:57 | indicando que não está usando o protocolo FTP. Num terminal Linux, se instalar o antigo pacote inetutils, além do telnet, vai ganhar o programa |
| 40:05 | ftp. Basta digitar `ftp ftp.unicamp.br` no terminal. |
| 40:11 | Ele vai pedir um usuário. Como antigamente, muitos servidores públicos aceitavam o usuário `anonymous`. |
| 40:16 | E felizmente esse ainda aceita. A senha pode ser qualquer coisa ou vazia. E pronto, abriu uma conexão de FTP onde ele passa a esperar comandos que são parecidos |
| 40:25 | com os comandos pra navegar no seu HD via terminal como `cd` pra mudar de diretórios ou `ls` pra listar o conteúdo do diretório. |
| 40:32 | Se digitar `help` mostra os comandos que o protocolo FTP suporta. Lembra que HTTP suporta comandos como GET? |
| 40:39 | Em FTP ele suporta comandos diferente. Get em FTP é pra fazer download de algum arquivo. |
| 40:45 | Eu até consigo mudar de diretório fazendo `cd /pub` pra ir pro diretório público, mas não sei porque, comandos como `ls` não devolvem nada e dão timeout. |
| 40:54 | HTTP versão 1.0 era ótimo pra baixar páginas HTML e até mesmo fazer download de arquivos, |
| 41:00 | como agora. Mas era chatinho enviar arquivos pro servidor. Hoje em dia é fácil, mas nos primórdios, a gente ainda não entendia tudo que dava |
| 41:08 | pra fazer, nem lembro se HTML 1.0 tinha form multipart. Pra enviar arquivos pra um servidor, o certo era usar FTP. |
| 41:16 | Acumulamos um monte de funções em cima de HTTP que antes eram de outros protocolos. |
| 41:21 | Hoje em dia é muito normal abrir um Gmail e anexar um arquivo. Ou abrir um Dropbox e subir um arquivo. |
| 41:27 | E mesmo se quisermos transferir arquivos num equivalente FTP, não se usa FTP pelo mesmo |
| 41:33 | motivo que hoje usamos HTTPS em vez de HTTP, por segurança. HTTPS é HTTP mais encriptação com certificado TLS. |
| 41:41 | O equivalente seria FTPS. Assim como em vez de Telnet hoje usamos SSH. |
| 41:47 | E SSH é mais versátil porque permite não só abrir um terminal remoto seguro, como também trafegar arquivos, via SFTP que é FTP sobre SSH. |
| 41:55 | Vou falar mais de SSH no próximo episódio. Outro protocolo que até existe ainda mas num nicho muito pequeno é o que falei 2 episódios |
| 42:04 | atrás quando expliquei correção de erros e parchives. O protocolo NNTP de rede Usenet. |
| 42:09 | A idéia era ter um servidor de artigos de texto, como fóruns e sincronizar diferentes |
| 42:15 | servidores usando esse protocolo NNTP. De novo, acumulamos essas funções dentro de HTTP e o equivalente seria sites como StackOverflow, |
| 42:24 | HackerNews, Reddit. No começo da internet não usávamos navegador web pra tudo. Usávamos programas separados como FTP pra transferir arquivos. |
| 42:33 | News pra ler notícias e discussões da Usenet, literalmente newsgroups. Telnet pra abrir sessões remotas de terminal. |
| 42:39 | E Gopher, que eu quase nunca usei porque meio que tinha o mesmo propósito de HTTP e perdeu espaço quando a Web ficou mais popular. |
| 42:46 | Mas todos são exemplos dos primeiros protocolos de aplicação no começo da internet comercial. |
| 42:51 | Na prática, Usenet ainda é usado até hoje pra facilitar pirataria, algumas coisas que talvez seja mais difícil em BitTorrent ainda se acha na Usenet. |
| 43:00 | Todos foram substituídos. HTTPS se tornou o protocolo mais popular. SSH é a única boa alternativa tanto pra telnet quanto ftp. |
| 43:10 | E protocolos específicos como NNTP, IRC de chat, Gopher e outros, tiveram suas funções |
| 43:16 | acumuladas em HTTPS. E o S de segurança se tornou importante nos primórdios do comércio eletrônico, onde |
| 43:23 | encriptação se tornou essencial pra permitir trafegar coisas como número de cartão de crédito. |
| 43:28 | Sem isso seria impossível ter comércio online. Tivemos primeiro o SSL da Netscape, e hoje é o TLS ou Transport Layer Security. |
| 43:37 | Isso possibilitou escalar a economia na Web mas também dificultou pra hobistas e amadores |
| 43:42 | que queriam só fuçar a rede com comandos simples no terminal, porque agora temos que lidar com uma camada de encriptação no meio. |
| 43:49 | Antigamente era só plugar telnet em qualquer porta que já dava pra fuçar, hoje já não é tão simples e como isso torna as coisas mais indiretas e abstratas, imagino que deve |
| 43:58 | dificultar o aprendizado de muita gente. Sem contar que se eu quisesse contribuir na rede e participar de sub-redes como servidores |
| 44:05 | de chat IRC, era só montar meu próprio servidor IRC e plugar na internet. Ou se quisesse ter meu próprio servidor de newsgroups era só montar um servidor de NNTP |
| 44:14 | e plugar na Usenet e assim a gente podia fazer parte do mesmo serviço distribuído na rede. |
| 44:20 | No momento onde centralizamos tudo em HTTP, também perdemos a característica de serviços distribuídos e entramos na era de walled gardens ou jardins emparedados. |
| 44:29 | Acho que os únicos exemplos de rede verdadeiramente distribuída onde qualquer um pode entrar |
| 44:35 | e participar é BitTorrent e Bitcoin da vida. Sim, eu sei, como falei antes Usenet e IRC ainda existem, mas são nichos bem pequenos |
| 44:44 | e desconhecidos. Tem muito mais gente usando Discord do que IRC. E falando nisso, eu acho que preciso explicar um pouquinho sobre segurança de rede e vou |
| 44:53 | deixar isso pro próximo episódio. Se ficaram com dúvidas mandem nos comentários abaixo, se curtiram o video deixem um joinha, |
| 45:00 | assinem o canal e compartilhem o video com seus amigos. |
| 45:25 | A gente se vê, até mais! |
