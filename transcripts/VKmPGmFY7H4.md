# A História do Front-End para Iniciantes em Programação | Série "Começando aos 40"

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=VKmPGmFY7H4
- **Duração:** 48:28
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Estamos no quarto episódio desta série,   semana passada começamos com algumas coisas básicas do Developer Roadmap onde eu discuti |
| 0:10 | porque saber Git e aprender Linux de verdade são as duas coisas mais importantes pra começar. Mas |
| 0:17 | eu me lembrei no caso de Linux que eu disse que tinha duas formas, você aprender do jeito |
| 0:22 | difícil que é instalar e configurar uma distro como Arch Linux num ambiente virtualizado como |
| 0:28 | Virtualbox. Ou aprender do jeito ultra difícil, que eu esqueci de mencionar no final do episódio, |
| 0:34 | e que é instalando direto como sistema operacional principal da sua máquina! Sim, vai ser bem difícil |
| 0:41 | se for sua única máquina e você só tiver acesso ao site do Arch Wiki pelo celular. Mas vai por mim, |
| 0:47 | hoje tá bem fácil porque a gente fazia essas coisas nos anos 90 só confiando que tinha tudo |
| 0:53 | certo nos disquetes e sem internet pra baixar alguma coisa caso tivesse esquecido, e Wikis |
| 0:59 | sequer haviam sido inventados, aliás, Google não tinha sido inventado. Então considere que hoje tá |
| 1:04 | muito fácil e instale Arch Linux como seu sistema operacional principal. Se conseguir fazer isso |
| 1:10 | sozinho, você está no caminho certo. No episódio de HOJE vamos falar sobre um dos |
| 1:16 | assuntos mais desnecessariamente complicados da carreira de programador Web, o guarda-chuva |
| 1:22 | que chamamos de Front-end. Porém, em vez de seguir o Roadmap, neste episódio vou fazer uma |
| 1:28 | longa tangente hoje. Aliás, vai ser um dos meus episódios mais longos, então não deixem de dizer |
| 1:34 | nos comentários se preferiam que eu tivesse quebrado esse episódio em duas partes ou se |
| 1:40 | nesses casos está ok ser longo mesmo. Se você está entrando hoje no mercado de   front-ends vai esbarrar em dezenas de letrinhas, coisas como Sass, Vue, React, Angular, Ember, |
| 1:52 | Bootstrap, Npm, Yarn, Webpacker, Flow, TypeScript, Dart, BEM, SMACSS, PWAs, SPAs, RAIL, e por aí vai. |
| 2:00 | Eu entendo porque alguém que está iniciando os estudos agora vai ficar extremamente confuso sobre   por onde começar. E como sempre o melhor jeito de entender como começar é do começo. |
| 2:10 | (...) A tangente que eu me referi |
| 2:20 | é que eu vou fazer o contrário da maioria dos tutoriais ou guias que falam de front-end. Em vez |
| 2:26 | de dizer logo de cara o que eu acho que você devia estudar, eu pessoalmente acho mais fácil explicar |
| 2:32 | porque aquelas sopas de letrinhas existem e daí vocês mesmos podem começar a chegar em algumas |
| 2:38 | conclusões. A história do front-end é a própria história da Web e algumas coisas que você tem hoje |
| 2:45 | só fazem sentido no contexto dos anos 90 ou dos anos 2000, sem saber disso você meio que tem que |
| 2:52 | engolir como as coisas são sem entender porque. No fim do episódio eu espero que vocês tenham muito |
| 2:58 | mais perguntas do que neste momento. A estrutura mais simples que você precisa ter   na cabeça é a seguinte: quando você abre um navegador e digita um endereço tipo |
| 3:07 | https : // meusite.com.br ele vai fazer dezenas de operações mas no mínimo ele precisa primeiro |
| 3:14 | traduzir o domínio num endereço IP, e quem faz esse trabalho inicial é o tal servidor |
| 3:20 | de DNS ou Domain Name Server que você já deve ter ouvido pelo menos o nome, pra onde a configuração |
| 3:27 | de rede do seu computador está apontando. DNS é como se fosse uma lista telefônica, |
| 3:32 | traduzindo nomes pra números. Agora é tarefa da tal rede, roteadores,   provedores, conectar seu navegador a um servidor. A internet funciona porque todas as pontas falam |
| 3:45 | o mesmo formato de mensagens e trafegam de uma determinada maneira, que é o que chamamos de |
| 3:51 | protocolo, e o padrão que nos interessa é o famoso TCP/IP. Por agora só entenda que com o |
| 3:57 | endereço ele encontra o servidor certo no mundo. Bem em resumo estamos falando de um programa ou |
| 4:04 | aplicação que é um cliente de TCP ligando a um servidor TCP, que fica escutando no que chamamos |
| 4:10 | de uma porta. Todo servidor web que serve páginas HTML é um programa que quando você carrega ele se |
| 4:17 | liga a uma porta, que é representado por um número que vai de 1 a mais de 65 mil. |
| 4:22 | A convenção é que um servidor Web ouve conexões na porta 80. Um servidor SSH ouve na porta 22. Um |
| 4:28 | servidor Web também escuta na na porta 443 quando recebe requisição de conexão segura via HTTPS, |
| 4:35 | e muitos servidores de desenvolvimento como Node.js, Rails ou Java ouvem em portas como |
| 4:41 | 3000 ou 5000 ou 8080, respectivamente. Não há nada de mágico nesses números, são arbitrários |
| 4:48 | e foram escolhidos anos atrás e por isso é só uma convenção, mas na prática, qualquer |
| 4:54 | número de porta serve, contanto que exista alguma coisa "escutando" nessa porta. |
| 4:59 | Nesse minuto de explicação eu simplifiquei bastante. Na faculdade você faria exercícios |
| 5:06 | simples de escrever um programinha que escuta numa porta e outro que conecta nessa porta. É |
| 5:11 | assim que começa a nascer a semente de um servidor web e de um navegador. Agora o que é o servidor |
| 5:18 | Web mais simples de todos? Ele simplesmente lê um arquivo da máquina e serve esse arquivo. O |
| 5:25 | endereço completo que você digita no navegador se chama URL ou Universal Resource Locator que |
| 5:32 | é composto pelo protocolo, pelo domínio e pelo caminho de um arquivo, no caso mais simples. |
| 5:37 | Então antigamente você veria endereços como esse http://sitedafaculdade.edu/~jose/arquivo.html |
| 5:45 | E esse til jose, se você estudou Linux como eu disse no episódio anterior, vai saber que é um |
| 5:50 | atalho pro diretório /home/jose. E é assim que você faz o servidor web mais simples de todos e, |
| 5:56 | como hoje em dia sabemos, o mais bugado em termos de segurança porque se ele traduz direto |
| 6:02 | da URL pra um caminho de arquivos no seu sistema operacional, sem nenhuma checagem, você poderia |
| 6:08 | ficar tentando achar maneiras de vasculhar todos os arquivos do usuário, mesmo os que ele achou |
| 6:13 | que não seriam servidos publicamente. E fazíamos isso mesmo antigamente pra achar brechas. |
| 6:19 | E quando o navegador, que é um exemplo de um programa que é cliente de TCP, recebe esse |
| 6:25 | arquivo.html agora ele traduz as marcações pra elementos visuais. E como existe o elemento que |
| 6:32 | chamamos de LINK que é o  onde "A" significa anchor ou âncora e href é hypertext |
| 6:39 | reference, nasce o conceito de hipertexto onde um texto possui links pra outros textos. No |
| 6:45 | começo ninguém estava interessado em visual, simplesmente em disponibilizar textos linkando |
| 6:50 | com outros textos. E assim nasce a tal World Wide Web ou WWW. É um conceito que nasceria |
| 6:57 | naturalmente dados esses elementos que eu mencionei até agora, era inevitável. No próximo passo alguém pensou, e se em vez de digitar o nome de um arquivo eu digitar o nome |
| 7:08 | de um programa executável? Um binário que é um programa, que no caso do Windows são aqueles |
| 7:14 | arquivos que terminam o nome com .exe, tipo um Word.exe ou Excel.exe em vez de um hipertexto |
| 7:22 | cujo nome termina com a extensão .html? Num navegador bem antigo não ia acontecer |
| 7:27 | nada. Provavelmente poderia dar erro porque o servidor não saberia interpretar algo que   não é texto. Mas aí alguém fez um dos primeiros servidores web reconhecer quando alguém pede um |
| 7:39 | executável e em vez de só ler o arquivo e cuspir o conteúdo pro navegador, ele primeiro tenta |
| 7:45 | rodar esse executável no servidor e cospe pro navegador o resultado dessa execução, |
| 7:50 | que esperamos que seja um texto em HTML. Ou seja, pro navegador não faz diferença se |
| 7:58 | pedimos um executável ou um arquivo texto ao servidor, contanto que o que volte pra ele |
| 8:03 | como resposta seja um conteúdo texto em HTML. E se considerarmos que pedir arquivos texto, |
| 8:10 | que nunca mudam é algo estático, assim nasce a primeira geração de sites dinâmicos, ou seja, |
| 8:17 | que dinamicamente podem mudar o resultado dependendo do que o executável faz. Isso |
| 8:22 | começa com programas binários feitos em C mesmo, e o padrão foi nomeado como CGI ou Common Gateway |
| 8:29 | Interface. Mas fazer C ficar cuspindo HTML é como usar um canhão pra matar uma mosca, |
| 8:35 | mas felizmente havia outra linguagem mais simples em ambientes UNIX e Linux e melhor |
| 8:41 | adaptada pra manipular cadeias de texto, ou strings, e foi assim que Perl se tornou a |
| 8:47 | principal linguagem para fazer CGIs e foi assim que o mundo começou a conhecer mais sobre essa |
| 8:52 | sub-linguagem que o Perl trazia chamada Regular Expressions ou REGEX pra manipular strings. Se |
| 8:59 | você ainda não sabe o que é REGEX coloque na sua lista de coisas obrigatórias pra estudar. |
| 9:05 | E depois do surgimento de alguns servidores web como o da NCSA, ou da Netscape, dentre outros, |
| 9:12 | um começou a despontar pela sua facilidade de uso e por ser open source, ou seja de código aberto, |
| 9:18 | o famoso Apache, cujo nome eu sempre ouvi a história de que foi inspirado em "A Patch", que |
| 9:24 | traduz em português como "remendo" já que ele não deixa de ser um puxadinho de remendos de código |
| 9:30 | que foram sendo adicionados, um patch de cada vez. Pra quem não sabe, você pode comparar duas |
| 9:37 | versões do mesmo arquivo de código, um mais antigo e outro mais novo usando uma ferramenta de linha |
| 9:44 | de comando que vem na maioria das distribuições Linux chamada "diff" pra tirar a "diferença" |
| 9:49 | entre eles e colocar num arquivo de remendo ou "patch", e usar outra ferramenta, a linha de |
| 9:56 | comando "patch" pra aplicar essa diferença. E falando em remendos de arquivos, uma das coisas |
| 10:02 | mais irritantes da Web no começo dos anos 90 era que se eu quisesse fazer um site com 10 páginas e |
| 10:09 | algum layout ou estilo visual, eu precisava copiar e colar o HTML inteiro de uma página pra outra, |
| 10:15 | dez vezes e daí editar o conteúdo diferente entre cada uma. Se depois eu quisesse mudar |
| 10:21 | o layout pra outro formato, eu precisava abrir as 10 páginas e mudar uma a uma. Originalmente |
| 10:27 | a idéia não era que o HTML ditasse como o conteúdo seria visualmente estilizado, |
| 10:33 | a idéia era que cada navegador estilizasse as páginas do jeito que quisesse. O motivo disso foi |
| 10:39 | porque HTML foi inspirado em outras linguagens de marcação de conteúdo como SGML, voltados |
| 10:46 | estruturar documentos governamentais que pudessem ser lidos por um computador. A função do HTML era |
| 10:52 | marcar o que era um cabeçalho, um parágrafo, uma lista, e os perfis de impressão decidiam fonte, |
| 10:58 | espaçamentos e tudo mais pra comportar esse conteúdo numa página de papel, e os navegadores |
| 11:03 | é decidiriam como apresentar esse conteúdo num monitor, inclusive o usuário do navegador poderia |
| 11:11 | customizar escolhendo que não queria o padrão de fontes Times New Roman e sim Arial e todas |
| 11:17 | as páginas mostrariam Arial. Por isso se você viu exemplos de páginas do começo da web, ela |
| 11:23 | eram todas bem sem sal, com fundo cinza, fontes pretas e links azuis, tudo meio igual. |
| 11:29 | Você já podia embutir um jeito rudimentar de forçar o controle de estilo direto no HTML com |
| 11:35 | o atributo chamado style, mas foi com CSS que separamos o estilo do conteúdo e ganhamos mais |
| 11:42 | controle sobre como o navegador pinta o visual na tela, coisas como escolher fontes, tamanhos, |
| 11:48 | espaçamentos, alinhamentos, e muito mais. Isso foi no começo dos anos 90, até lá por 95 ou 96 |
| 11:54 | quando CSS apareceu pela primeira vez. Nessa época você já tinha Netscape superando o antigo Mosaic, |
| 12:00 | mas o Internet Explorer sairia na frente porque implementava melhor o primeiro CSS, |
| 12:06 | ao contrário da Netscape. Foi quando surgiram páginas de teste como o famoso ACID pra checar |
| 12:12 | a compatibilidade de CSS entre navegadores. Tem uma página com a história completa da |
| 12:17 | novela em cima do CSS que estou deixando nos links na descrição abaixo. Essa briga deu início à Guerra dos Navegadores, as ferozes batalhas entre a Microsoft e a Netscape |
| 12:29 | pela hegemonia da Web com cada versão de um navegador tentando ser melhor, principalmente |
| 12:35 | em termos visuais e de interatividade do que o anterior. Recomendo muito que você procure pelo |
| 12:40 | documentário da Discovery, The True Story of the Internet onde o primeiro episódio narra em mais |
| 12:46 | detalhes como foi essa guerra. Eu falei sobre isso num dos primeiros episódios desse canal quando dei |
| 12:52 | dicas de séries e filmes pra programadores. No fim dos anos 90, a Netscape estava perdendo a |
| 12:58 | guerra e resolveu mudar seu modelo de negócio que envolvia vender o navegador, e abriu seu código |
| 13:04 | fonte, criando a fundação Mozilla. O Opera apareceu também mostrando como redimensionar |
| 13:10 | conteúdo pros dispositivos móveis da época como os Palms, Pocket PC e os primeiros dumb-fones |
| 13:16 | de marcas famosas na época como Nokia ou Siemens, a primeira geração de pseudo-"smartphones" vamos |
| 13:24 | assim dizer, isso antes ainda do surgimento da Blackberry e foi quando vimos o primeiro uso de |
| 13:29 | media types, que evoluiriam pra media queries e viriam a se tornar oficiais só no CSS3 em 2012, |
| 13:36 | mas os primeiros rascunhos datam desde pelo menos 1997. Se você não sabe o que são media types, |
| 13:43 | lembre-se que layout de conteúdo era mais especializado para impressão em papel, pra |
| 13:48 | editorar revistas, jornais ou livros. E tínhamos agora que adaptar para monitores de computador, |
| 13:55 | mas além disso ainda havia outras formas de mostrar conteúdo. Imagine dispositivos tácteis |
| 14:01 | como braille para cegos ou que geram som para surdos. Cada um deles é um "tipo de mídia" ou |
| 14:07 | media types. E o Opera começou a popularizar o uso do atributo @media que evoluiria para as |
| 14:13 | media queries que usamos hoje onde o CSS pergunta ao navegador que tipo de mídia |
| 14:18 | estamos lidando, se é uma tela de celular, tela de tablet ou tela de computador. Com o boom do Internet Explorer foi quando a Microsoft começou a embutir o máximo possível |
| 14:28 | da Web no Windows, e com o Windows 98 vimos pela primeira vez a integração dessas tecnologias |
| 14:35 | direto no sistema operacional, como a utilização de MIME-types, uma tecnologia que surgiu primeiro |
| 14:42 | em e-mails para possibilitar embutir arquivos binários em e-mails que eram somente texto puro. |
| 14:48 | MIME que significa Multipurpose Internet Email Extensions e que você conhece como pares que |
| 14:55 | determinam o tipo de arquivo como text/html ou image/png ou video/mpeg. É uma forma mais |
| 15:02 | avançada do que no Windows são as extensões de arquivo como .html ou .png ou .mpg. |
| 15:08 | O File Explorer foi mesclado ao Internet Explorer que possibilitava explorar os |
| 15:15 | arquivos da máquina ou explorar os arquivos na Web. Hoje em dia todos os navegadores de |
| 15:20 | arquivos usam MIME types. E isso foi um dos estopins para caracterizar prática monopolista |
| 15:26 | da Microsoft em forçar as pessoas a usar Internet Explorer. A comissão européia na época forçou a |
| 15:32 | Microsoft a deixar os fabricantes de computador escolher se deixariam pré-instalado o Netscape |
| 15:38 | ou Opera. Mas o argumento da Microsoft era que era impossível separar o Internet Explorer do |
| 15:44 | Windows porque ele era parte fundamental de como você navegava no sistema. Foi uma controvérsia |
| 15:51 | enorme na época do Windows 98. Voltando ao assunto dos servidores web,   quando servidores como Apache se tornaram capazes de coisas como executar um script |
| 16:01 | que manipulava o HTML antes de mandar para os navegadores eu poderia escrever o HTML do |
| 16:07 | layout como se fosse um template, um modelo, e fazer só o conteúdo diferente daquelas 10 |
| 16:13 | páginas separadas, e se precisasse mudar o layout, bastava mudar nesse template e todas |
| 16:19 | as 10 automaticamente seriam modificadas. Com esse conceito começamos a evoluir o mundo de |
| 16:25 | escrever páginas de texto com hiperlink pra algo mais dinâmico e visualmente mais agradável do que |
| 16:32 | textos em fontes Times New Roman ou Courier New com fundo cinza. A diferenciação passou a ser |
| 16:38 | a customização gráfica e de design dos sites e começava a nascer a profissão de web designers |
| 16:44 | que começou com designers gráficos de revista tentando entender como traduzir a linguagem visual |
| 16:50 | de revistas e livros no formato digital da Web. A gente via muito design muito bizarro nessa época, |
| 16:56 | eu diria que foi a época da esplendor exuberante barroco do design Web. E não é só isso, dado que linguagens no servidor, seja em C ou Perl poderiam ter acesso a recursos |
| 17:09 | como bancos de dados, de repente uma nova possibilidade se abre: aplicações Web em |
| 17:15 | vez de só sites Web. E se eu pudesse fazer um formulário onde o usuário pudesse digitar seu |
| 17:21 | cartão de crédito e enviar para esse script Perl no servidor e gravar no banco de dados? É como se |
| 17:27 | inicia a semente para coisas como e-commerces. A Microsoft novamente não deixou passar a |
| 17:32 | oportunidade e criou seu próprio servidor web, o IIS ou Internet Information Services que adicionou |
| 17:39 | tecnologias proprietárias como o Frontpage Server Extensions que, junto com o programa Frontpage, |
| 17:46 | permitir criar páginas dinâmicas, com validações complicadas de formulário, de maneira simples. |
| 17:52 | Porém páginas feitas com essas extensões só podiam rodar em IIS e serem interpretados |
| 17:58 | por Internet Explorer, aumentando ainda mais a pressão em cima de Apache ou Netscape. Você |
| 18:04 | encontra resquícios disso em produtos atuais da Microsoft como o servidor Sharepoint. |
| 18:10 | Em paralelo ao Perl e os CGIs, nasceu outra forma de criar páginas dinâmicas com extensões embutidas |
| 18:17 | diretamente dentro do núcleo do Apache, e seu principal proponente foi o PHP. Agora, |
| 18:23 | em vez do servidor web chamar um programa externo pra gerar os HTMLs, o próprio servidor web ganhou |
| 18:29 | a capacidade de interpretar lógica de programação pra cuspir HTML. A Microsoft seguiu lado a lado |
| 18:35 | adicionando em 1996 a extensão de ASP no IIS. E então nasceu a guerra server-side entre PHP e ASP |
| 18:42 | pela hegemonia do mundo servidor. Na sequência ainda ganhamos aberrações como Coldfusion, |
| 18:49 | representando o pico do mau uso do então inovador XML não só como forma de representar |
| 18:54 | dados em formato de tags, mas usar tags como linguagem de programação, inspirado |
| 19:00 | pelo famigerado JSP no mundo J2EE. Isso coincidiu com a evolução do Java no lado |
| 19:07 | do servidor, e outra categoria de servidores Web, os application servers ou servidores de aplicação. |
| 19:13 | Entenda que um servidor de aplicação é um servidor web, mas nem todo servidor Web como Apache ou |
| 19:20 | NGINX de hoje é um servidor de aplicação. Servidores Web tem como principal função |
| 19:25 | servir páginas HTML e servidores de aplicação tem como principal função executar programas |
| 19:32 | que cospem HTML. Essa época também coincidiu com a abertura inicial de capital ou IPOs da |
| 19:38 | Netscape e Yahoo que marcam o início da famosa Bolha da Internet do meio pro fim dos anos 90. |
| 19:43 | Com a entrada de programadores mais experientes do que meros designers fazendo HTML, tecnologias que |
| 19:50 | permitiam o tráfego de informações seguras como o SSL da Netscape, nasceram as primeiras aplicações |
| 19:57 | Web como content management systems ou CMS como o histórico FileNet, o monstruoso Vignette que todo |
| 20:05 | portal de conteúdo usava, versões open source como PHP Nuke, Mambo que viriam a inspirar a |
| 20:11 | próxima geração como Drupal, Joomla, ou Zope em Python, que daria origem ao Plone, e finalmente o |
| 20:18 | nascimento do Wordpress no começo dos anos 2000 que ajudaria a iniciar a era dos blogs. Uma vez que começou a ficar claro que era possível programar aplicações interativas, |
| 20:29 | controlar o visual se tornou mais e mais importante. A evolução do CSS1 pro CSS2 |
| 20:36 | que inaugurou também a época das Web Fonts, e moveu os layouts ou estruturas de páginas |
| 20:42 | de usar tabelas e células para a era Tableless e design fluido também viu o nascimento de outras |
| 20:48 | 2 tecnologias fundamentais para a Web de hoje: Dynamic HTML ou DHTML com o HTML versão 4 e uma |
| 20:56 | tecnologia inaugurada pela Mozilla na forma de Asynchronous Javascript ou AJAX. E seu principal |
| 21:02 | garoto propaganda, o GMAIL que começou a ser desenvolvido em 2001 e foi lançado só no dia |
| 21:08 | primeiro de abril de 2004, também inaugurando a era dos memes do dia da mentira. |
| 21:13 | O GMAIL foi a personificação de tudo que Bill Gates temia nos anos 90: que os navegadores Web se |
| 21:21 | tornassem substitutos dos sistemas operacionais, no caso do Windows, na função de executar |
| 21:27 | programas. Ele previu corretamente que sem padrões proprietários você não teria como segurar os |
| 21:33 | usuários no Windows, porque eles poderiam rodar o mesmo programa num navegador como Netscape em |
| 21:40 | qualquer sistema como MacOS ou distribuições Linux. O GMAIL foi provavelmente a primeira |
| 21:46 | aplicação Web que substitui com sucesso um dos programas nativos mais importantes num sistema |
| 21:52 | operacional: o cliente de e-mails como o Outlook da Microsoft. E isso ameaçava tudo, incluindo o |
| 22:00 | monopólio sobre programas como o Office. Neste ponto da história, estamos entrando em |
| 22:05 | 2004. Em termos de tecnologias de front-end avançamos o HTML até a versão 4 que comporta |
| 22:12 | coisas como Dynamic HTML e AJAX. Derivado do SGML tivemos o HTML mas também surgiria |
| 22:19 | o XML para estruturar qualquer tipo de dados e como uma estrutura mais geral onde HTML, |
| 22:25 | ou mais especificamente, XHTML seria um caso especial. HTML é especializado em estruturar |
| 22:32 | conteúdo de texto. XML é especializado em estruturar dados, como cadastros. CSS versão |
| 22:38 | 2.1 é o cascading style sheet, que passou a suportar web fonts, internacionalização, |
| 22:44 | posicionamento relativo e absoluto que permite que os elementos na tela de ajustem dinamicamente |
| 22:50 | de acordo com o tamanho total da tela, ao contrário do que fazíamos no meio dos anos 90 |
| 22:55 | onde considerávamos um comprimento fixo de tela pra encaixar os elementos, especialmente dentro |
| 23:02 | de tabelas e usando muito recorte de imagens porque CSS não era poderoso o suficiente para |
| 23:08 | alguns designs gráficos. Além disso, é importante entender que CSS é uma linguagem declarativa, |
| 23:15 | onde declaramos regras visuais que são aplicadas no HTML e essas regras são cascateadas onde uma |
| 23:23 | regra herda as características da regra pai, numa hierarquia de regras. Aliás, tenham sempre em |
| 23:29 | mente a estrutura de uma árvore ou hierarquia. Quase tudo na Web é baseado nessa estrutura. |
| 23:35 | HTML são árvores de elementos. CSS são árvores de atributos de estilo. Sites são árvores de páginas |
| 23:43 | uma linkando na outra. E agora que evoluímos de simples sites de conteúdo hipertexto, pra |
| 23:49 | gerenciadores de conteúdo CMS, pra e-commerces e com o início da era de aplicativos Web como Gmail |
| 23:55 | e redes sociais como Orkut, MySpace e Friendster, abriu-se uma nova fase de desenvolvimento. |
| 24:01 | Em paralelo, na era Java do começo dos anos 2000 popularizou-se o conceito de Frameworks, |
| 24:08 | que mais do que linguagens fornecem uma estrutura pré-definida para ajudar a desenvolver |
| 24:15 | aplicativos, fornecendo coisas como segurança, validação de dados, autenticação e autorização |
| 24:20 | granular, templates visuais, e que determinavam meio que um "guia" de lugares onde você deveria |
| 24:27 | colocar cada tipo diferente de código. Antes disso cada aplicativo como Joomla ou Drupal fazia |
| 24:34 | tudo do zero. No mundo PHP começaram a surgir frameworks inspirados em J2EE ou Struts, como o |
| 24:41 | Zend Framework. E finalmente abrimos a era do Ruby on Rails pro fim de 2004 e o agora lendário demo |
| 24:48 | do blog em 15 minutos que David Hansson gravou no evento FISL de 2005 no Brasil, inaurando a era dos |
| 24:55 | frameworks que herdam os conceitos de Agilidade inaugurado pelo Manifesto Ágil de 2001. |
| 25:01 | Por causa de Ruby on Rails começou a surgir a primeira geração de sub-frameworks |
| 25:07 | Javascript e CSS. Até então escrever HTML ou CSS ou mesmo Javascript era algo trabalhoso, |
| 25:14 | que não funcionava exatamente da mesma forma em todos os navegadores. Lembrando que estamos na |
| 25:19 | época do famigerado Internet Explorer 6 do também famigerado Windows XP e do Netscape |
| 25:25 | 7. Com isso em mente, alguém pensou: porque não unificar essas coisas? Por que não fazer |
| 25:31 | um framework via Javascript pra homogeneizar e evitar que o programador tenha que fazer código |
| 25:37 | específico para Internet Explorer ou Netscape? Daí surge a primeira geração de micro-frameworks |
| 25:43 | especializados em visual do lado do navegador como Mootools, Dojo, o próprio JQuery, e os |
| 25:51 | que o Ruby on Rails tornou popular na época, no caso o Prototype e o Scriptaculous. Scriptaculous |
| 25:57 | que popularizou novas formas de elementos de interação como drag and drop de elementos no HTML, |
| 26:03 | onde podíamos arrastar as coisas como podemos arrastar e-mails no inbox do GMAIL. |
| 26:09 | Pouco tempo depois, em 2007 surge uma nova revolução na área de design visual e usabilidade. |
| 26:17 | Vemos o nascimento dos smartphones a partir do primeiro iPhone lançado em julho de 2007. Com |
| 26:23 | ele temos o navegador Safari, que é uma evolução do navegador chamado Konqueror do KDE no Linux, |
| 26:29 | que usava o núcleo KHTML que viria a se tornar o que conhecemos hoje como WebKit. Só que telas |
| 26:36 | de celular tinham resolução muito menor do que um desktop. Em 2007 o mais comum eram monitores |
| 26:42 | com resolução de 1024 pixels por 768, mas o iPhone tinha meros 320 por 480 pixels. |
| 26:49 | Uma coisa que se tornou popular nos anos 90 e que eu não falei ainda, foi uma forma de simplesmente |
| 26:55 | não usar nada de HTML nem CSS nem Javascript. Pra tentar tomar a dianteira, empresas como a |
| 27:02 | Microsoft não fizeram só componentes proprietários pro servidor como o Frontpage Server Extensions ou |
| 27:09 | ASP. A Sun criou o Java e queria dar um jeito de colocar Java em tudo. O Java servia pra muitas |
| 27:17 | coisas incluindo fazer aplicativos pra Desktop, como os malditos aplicativos de Imposto de Renda |
| 27:22 | que você usa até hoje. Mas eles queriam dar um jeito de colocar Java nos navegadores, |
| 27:27 | mas sendo uma linguagem geral ela virar um problema de segurança se de repente você |
| 27:33 | rodasse Java no navegador e ele pudesse acessar seus arquivos. Por isso criou-se o conceito de |
| 27:39 | sandboxing, um container que permite executar código Java com baixos privilégios ou seja, |
| 27:46 | sem privilégios pra acessar arquivos ou a própria rede, ele devia rodar dentro desse   container e assim nascem os aplets. Quem dessa época não lembra do famigerado |
| 27:55 | applet de demonstração que mostrava água se mexendo num tipo de animação que era impossível |
| 28:01 | de fazer só com CSS ou mesmo com GIF animado. E seguindo nessa tendência a Microsoft criou o |
| 28:08 | padrão ActiveX que era o mesmo que applets mas em vez de usar Java você programava em C++ ou mesmo |
| 28:16 | Visual Basic 6. Felizmente Applets Java e ActiveX já não existem mais, mas a Macromedia também fez |
| 28:23 | seu sandbox na forma do famigerado plugin Flash que trazia tecnologias realmente legais pra época |
| 28:29 | como ilustrações vetoriais com curvas de Bezier que já era usado em programas como CorelDraw |
| 28:35 | ou Adobe Illustrator para conseguir embutir ilustrações de melhor qualidade e tamanho muito |
| 28:41 | menor do que imagens bitmap como JPEG ou GIF. E mais do que isso, adicionar o conceito de linha do |
| 28:48 | tempo para animar essas ilustrações. Adicionando uma linguagem bem tosca e simples chamada |
| 28:54 | ActionScript e você podia fazer coisas interativas como joguinhos. Todo mundo jogou alguma coisa |
| 29:01 | em Flash no começo dos anos 2000. Em 2019 o processador de um iPhone, o famoso A12 |
| 29:07 | Bionic nos novos iPhone XS é quase tão potente quanto um processador Intel Core em um Macbook |
| 29:13 | Pro. Um processador em um iPhone original de 2007 era um processador ARM11 de meros 412Mhz e tinha |
| 29:22 | só meros 128 MEGAbytes de RAM. E a bateria tinha não mais que 1400 miliamperes, hoje celulares tem |
| 29:29 | até 4000 miliamperes. Entre pouco processamento e pouca bateria, sem teclado, sem mouse, |
| 29:35 | só com touch, rodar Flash era um exercício de futilidade. Os primeiros Androids queriam |
| 29:41 | se destacar deixando rodar Flash mas rapidamente foi provado que isso só deixava celulares Android |
| 29:46 | extremamente lentos e a bateria acabava num piscar de olhos. Flash já não tinha boa reputação por |
| 29:52 | causa do tanto de bugs e principalmente buracos graves de segurança em sua programação porca. |
| 29:58 | A gente dava um jeito de aguentar com CPUs mais potentes e muita RAM em desktops, mas   em smartphones não tinha pra onde correr. A Apple se recusou a rodar Flash e não só isso demonizou o |
| 30:09 | Flash publicamente na famosa carta aberta de Steve Jobs que selou o destino do fim do Flash. |
| 30:16 | Só que a partir de 2005 a única forma decente de ver videos do YouTube ou outros sites era via |
| 30:23 | o plugin de Flash ou via o plugin de Silverlight que era tipo uma evolução do ActiveX da Microsoft, |
| 30:29 | mas também não durou muito. Sem esses plugins não havia video. A Apple ajudou a evoluir o |
| 30:35 | HTML para suportar playback de vídeo acelerado por hardware, e popularizou o envelope MP4 de |
| 30:41 | vídeo com compressão H.264 e com isso nascia novas tags de vídeo pra HTML. Somado ao fim |
| 30:48 | do Flash também aumentou a pressão por adicionar funcionalidades de animação também acelerado pela |
| 30:54 | nova classe de GPUs e assim surgem coisas como o atual canvas controlado por CSS e WebGL. |
| 31:01 | A revolução dos smartphones, a queda da Sun que foi adquirida pela Oracle pondo também um ponto |
| 31:07 | final em applets, as ingerências da Microsoft pós julgamento anti-truste nos anos 2000 desacelerando |
| 31:14 | os desenvolvimentos do Internet Explorer e tecnologias como Silverlight. Tudo isso forçou |
| 31:20 | a W3C e seu consórcio de empresas a acelerar uma coisa que já estava muitos anos atrasado: |
| 31:26 | a evolução pro HTML5 e CSS3 que só aconteceu em 2014 onde alguns anos antes disso todos |
| 31:34 | os navegadores, começando com o surgimento do Google Chrome em 2008 começaram a implementar   uma funcionalidade de cada vez. Ficamos de 2008 a 2015 num período muito |
| 31:44 | chato de transição. Tínhamos que desenvolver Web em meio a HTML, CSS, Javascript estando no meio |
| 31:52 | do caminho e mudando o tempo todo em cada nova versão de cada navegador. Era impossível fazer |
| 31:58 | um site que funcionasse em todos os navegadores e em todos os dispositivos ao mesmo tempo com os |
| 32:04 | padrões ainda não oficializados e cada navegador implementando partes da especificação. E por conta |
| 32:10 | disso surgiram meta-linguagens pra nos blindar essa bagunça. Foi quando JQuery deixou de ser |
| 32:16 | opcional e passou a ser uma necessidade pra lidar com Javascript e CSS. Com o |
| 32:22 | fim do Flash, Javascript voltou a ser a única alternativa viável pra animação e interação, |
| 32:27 | uma linguagem extremamente ruim que não via uma evolução significativa desde o começo dos anos |
| 32:34 | 2000. Então começou a surgir uma gambiarra na forma de transpilers, linguagens que não são |
| 32:40 | compiladas em instruções nativa de uma máquina real ou uma máquina virtual, mas que traduzem |
| 32:46 | de uma linguagem para outra linguagem. Novamente, o mundo Ruby on Rails veio tentar |
| 32:51 | ajudar. O rubista Hamptom Caitlin escreveu o SASS ou Syntathically Awesome Stylesheets, |
| 32:58 | usando Ruby. SASS é tipo um dialeto de CSS que permite estruturar melhor o CSS, |
| 33:04 | dando funcionalidade de reusar código, e esconder detalhes específicos de navegadores. O Twitter |
| 33:11 | resolveu criar sua própria versão e daí surgiu o LESS. SASS e LESS ficaram concorrendo por |
| 33:17 | anos mas SASS é superior hoje em dia. Também do mundo Ruby, em 2009 Jeremy Ashkenas |
| 33:23 | escreveu um compilador em Ruby chamado Coffeescript. Uma nova linguagem cujo |
| 33:29 | resultado da compilação era Javascript. Ele adicionou dezenas de conceitos de linguagens |
| 33:35 | como Ruby e Python para criar uma nova linguagem muito mais agradável de trabalhar e que geraria |
| 33:41 | a porcaria do Javascript por baixo. Isso ajudou muito a evitar termos que usar algo como JQuery |
| 33:48 | ou ficar nós mesmos nos preocupando em adicionar código específico pra cada navegador. Hoje em |
| 33:54 | dia todo mundo demoniza Coffeescript porque a sintaxe dele é um pouco agressivo e pouco |
| 34:00 | ortodoxo, mas foi dele que saíram diversos conceitos como interpolação de strings, |
| 34:06 | melhor controle sobre enumerators e iteradores, a agora famosa sintaxe de fat arrow pra funções |
| 34:12 | anônimas e muito mais que foi incorporado ao Javascript versão ES6 que só foi sair em 2015, |
| 34:18 | tornando o Coffescript obsoleto. Mais do que só matar o Flash,   o surgimento de smartphones com telas verticais e resoluções diferentes de um monitor de computador, |
| 34:29 | também surgiu a necessidade de criar estilos que se adequassem automaticamente ao formato da tela |
| 34:38 | e com o movimento de tableless, ou seja, parar de usar tabelas pra estruturar layout em HTML, |
| 34:44 | e a consolidação de elementos flutuantes com espaçamento relativo do CSS2 transicionamos pro |
| 34:51 | tal design responsivo que tanto se fala em hoje em dia. Layouts que automaticamente se adequam ao |
| 34:57 | dispositivo e com o advento da interação via touch uma nova classe de pesquisa foi iniciada, |
| 35:04 | o que hoje chamamos de UX ou usabilidade. Pense que até então o normal eram teclado e mouse, |
| 35:10 | como criar telas interativas que só usam o dedo? Hoje em dia isso é um problema resolvido,   mas principalmente entre 2009 e 2015 isso foi assunto de muita discussão. |
| 35:19 | E como o primeiro smartphone de verdade do mundo foi o iPhone da Apple, além das tecnologias ela |
| 35:26 | trouxe outra coisa do seu DNA: seu estilo de design e linguagem de usabilidade. Se o fim dos |
| 35:33 | anos 90 foi a época barroca do design Web, a Apple trouxe a linguagem de Bauhaus: o que hoje chamamos |
| 35:39 | de design minimalista, que valoriza os espaços em branco entre elementos, linhas simples sem o |
| 35:47 | escândalo de cores bregas e tudo desalinhado que se via em páginas de redes sociais como MySpace. |
| 35:53 | E em cima dessa linguagem as empresas pararam de reinventar a roda em cada site e passaram a criar |
| 36:00 | bibliotecas de estilo reusáveis e daí nascem os frameworks de CSS, escritos nas linguagens SASS |
| 36:06 | e LESS que falei acima. O mais famoso deles sendo o Twitter Bootstrap. Por isso muitos sites parecem |
| 36:13 | que foram feitos pelo mesmo designer, porque todo mundo usa o Bootstrap em vez de partir do zero e |
| 36:19 | ficar reinventando a roda redesenhando o visual de botões e outros elementos. Daí criamos elementos |
| 36:25 | novos com o hamburguinho pra menus, os Jumbotrons e Scrollspy que toda landing page usa. |
| 36:32 | Com tantos novos elementos de Javascript e CSS surgiu outra necessidade. Agora não |
| 36:37 | era mais só escrever um arquivo de CSS, linkar no HTML e pronto. Passamos a reusar dezenas de |
| 36:44 | bibliotecas como um JQuery da vida, código pra Google Analytics, frameworks de CSS gigantes, |
| 36:50 | enfim muitos e muitos assets. Primeiro, precisávamos dar um jeito de baixar todos |
| 36:56 | esses assets e bibliotecas nos nossos projetos sem ficar indo de site em site, clicando no link |
| 37:01 | de download e descomprimindo zips manualmente nos diretórios. No mundo Perl já tinhamos coisas |
| 37:07 | como o CPAN que permitia baixar bibliotecas de um servidor central. No mundo Ruby, depois de |
| 37:13 | várias tentativas finalmente consolidamos no Bundler pra não só baixar as bibliotecas mas |
| 37:19 | gerenciar corretamente as versões corretas que nossos projetos precisariam. E no mundo |
| 37:25 | Javascript as coisas começaram meio devagar com o advento do NPM que só ficaria realmente usável |
| 37:32 | quando concorrentes como YARN tentaram tomar seu lugar. Mas no mundo Javascript o NPM pelo |
| 37:38 | menos se tornou o padrão de fato para gerenciar os assets no lado da máquina do desenvolvedor. |
| 37:44 | Mas só isso não é suficiente. Como eu expliquei no começo do episódio, um servidor web cospe HTML |
| 37:51 | e todos esses assets pro navegador. E como agora colocarmos dezenas deles nos nossos |
| 37:57 | projetos você devia imaginar que quanto mais arquivos e quanto maior eles forem, mais lento |
| 38:04 | vai ser pro navegador baixar e renderizar tudo. E isso se tornou ainda mais óbvio nos primeiros |
| 38:09 | smartphones. Hoje em dia temos alta velocidade em conexões 4G e já estamos próximos de ir pra 5G, |
| 38:16 | mas em 2009 o normal ainda era 2G e poucos com 3G. Como otimizar esses assets pra ficarem |
| 38:23 | menor? Alguém parou pra pensar: esses assets de Javascript e CSS são tudo texto. Nós programadores |
| 38:29 | sabemos fazer texto ficar menor. Por exemplo, nós escrevemos código com tabulação, espaços, usamos |
| 38:36 | nomes grandes e descritivos pra ficar mais fácil outro programador conseguir editar esse código. |
| 38:42 | Mas um navegador não se importa com espaços em branco ou nomes descritivos, computadores sabem |
| 38:48 | ler dados sem formatação. E espaços em branco ou nomes grandes ocupam espaço desnecessário. Mais |
| 38:56 | do que isso, quanto mais arquivos separados tivermos, mas lento vai ser. Então porque |
| 39:01 | não juntar vários arquivos num único arquivo e porque não filtrarmos e tirarmos fora espaços |
| 39:07 | em branco e reduzir nomes de variáveis e funções ao menor tamanho possível, dentre outros truques? |
| 39:13 | Esse é o conceito que chamamos de minificação, minificar textos humanamente legíveis em textos |
| 39:20 | menores horrorosos mas que navegadores conseguem ler. E com tantas atividades agora pra chegar |
| 39:26 | nos arquivos de HTML, CSS e Javascript finais otimizados, temos que transpilar de SASS pra CSS, |
| 39:33 | de Coffeescript ou ES6 pra Javascript ES5 que na época era mais usado. É o que chamamos de um canos |
| 39:40 | de processamento de assets ou Asset Pipeline como chamamos no Ruby on Rails onde o conceito |
| 39:46 | nasceu. E no mundo Javascript surgiram coisas similares como Grunt, Gulp e hoje em dia Webpacker |
| 39:53 | somado a ferramentas como Babel que fazem exatamente esse tipo de coisa. Por causa disso, |
| 39:59 | todo novo framework que se preza tem algum tipo de integração com coisas como Webpacker pra ter esse |
| 40:05 | pipeline de processamento. Isso ficou um pouco menos necessário desde que evoluímos pro padrão |
| 40:11 | HTTP/2, mas isso é assunto pra outro dia. Evoluindo em cima da herança do GMAIL, só AJAX não |
| 40:18 | era mais suficiente e passamos a experimentar em tirar lógica dos servidores de aplicação e |
| 40:24 | transferir o controle do estado da aplicação pra mais próximo da tela gráfica, e assim   surgem os frameworks Javascript. Em vez de ficar controlando cada elemento da tela individualmente |
| 40:36 | via Javascript e ficar controlando os estilos globais com CSS, por que organizar uma tela de uma |
| 40:42 | aplicação direto só em seus menores elementos? Por exemplo, num Spotify em vez de falarmos em botões |
| 40:49 | ou listas, podemos separar em coisas maiores como Playlist, Menu de Usuário, dashboard de playback, |
| 40:57 | lista de resultados de pesquisa de música. São todos grandes "componentes" que interagem |
| 41:03 | entre si. E cada um deles tem uma representação gráfica que depende de um estado. Por exemplo, |
| 41:09 | no dashboard de playback, temos estados como tocando, pausado, shuffle ativado ou Não. E pra |
| 41:15 | criar esses componentes e gerenciar os estados no lado do cliente, aproveitando tecnologias   do HTML5 como web storage que permite guardar esse estado no navegador, surgem frameworks como Ember, |
| 41:28 | Angular, React + Redux ou Vue.js. E assim também surge o conceito de uma única página |
| 41:35 | que carrega toda essa aplicação que é composta de javascript e assets como CSS e imagens, |
| 41:41 | sem precisar mudar de página pra atualizar entre cada estado. Pra fazer isso usamos |
| 41:46 | Ajax por baixo e rodamos tudo numa única página e por isso temos o conceito que vocês já devem ter |
| 41:52 | ouvido de SPAs ou Single Page Apps. Isso aconteceu a partir do nascimento de |
| 41:59 | aplicações mais complexas em interação e estado como o próprio Google Docs, Slack, |
| 42:05 | Spotify e outros. E é por isso que hoje você tem esses frameworks. Na época que a Apple estava |
| 42:11 | na dianteira desse tipo de aplicativos por conta do iCloud ela tinha um framework próprio chamado |
| 42:17 | Sproutcore. Dali veio a semente que viria a se tornar Ember, que também saiu da comunidade Ruby |
| 42:23 | on Rails e por isso Ember se parece um pouco em estrutura com o Rails. O Google tinha o |
| 42:29 | antigo GWT que foi muito usado no mundo Java pra fazer aplicativos parecidos com o Gmail, |
| 42:35 | mas depois criou o Angular e depois o Polymer que não deu muito certo em adoção. E com |
| 42:40 | o crescimento do Facebook e necessidade de criar aplicativos como o Facebook Messenger,   surgiu o React que torna mais veloz o desenho de partes da tela cujo estado foi modificado |
| 42:52 | com seu Virtual DOM. Ou seja, em vez de ficarmos redesenhando explicitamente um elemento na tela, |
| 42:59 | tipo mudar a cor de um botão pra vermelho, só mudamos o estado do botão e deixamos esse Virtual |
| 43:05 | DOM redesenhar o que precisar na tela, de forma que podemos evitar redesenhar o que não se precisa |
| 43:12 | e ao mesmo tempo otimizar a velocidade total do redesenho. E na tentativa de fazer concorrência e |
| 43:19 | evoluir em cima da experiência do Angular e React, no mundo open source surgiu o Vue.js que começou |
| 43:26 | a ganhar algum momento graças à sua inclusão como padrão no framework Laravel no mundo PHP. |
| 43:32 | E nos dias de hoje, com a evolução do Javascript ES6, a dominância do Chrome como navegador mais |
| 43:39 | usado e a decadência do Internet Explorer, e também o surgimento de processadores multi-core |
| 43:45 | mais rápidos e mais eficientes nos smartphones, com RAM mais barata que permite que desktops e |
| 43:52 | dispositivos consigam ter 6GB ou 8GB ou mais de RAM, começou a surgir uma nova classe de |
| 43:58 | aplicativos: os híbridos. Aplicativos de desktop ou de mobile que tecnicamente tem uma estrutura |
| 44:05 | nativa que liga com o hardware como camera, touch, audio e muito mais mas são controlados por uma |
| 44:11 | fina camada de Javascript e outras tecnologias Web como HTML5 e CSS3. Então podemos usar a |
| 44:18 | mesma estrutura que descrevi acima pra fazer aplicativos desktop ou mobile como é o caso de |
| 44:24 | coisas que usamos todo dia como o próprio Spotify ou Slack ou editores de código como Atom ou Visual |
| 44:30 | Studio Code. E assim surgem também frameworks híbridos como o Electron que é uma forma de |
| 44:36 | encapsular tecnologias do Chrome e abrir como se fosse um aplicativo nativo ou então React Native |
| 44:43 | que torna possível você desenvolver um aplicativo simples pra iOS ou Android como se estivesse |
| 44:49 | desenvolvendo um site web em React. Caraca!! Eu sei que eu pincelei bem por cima |
| 44:55 | de dezenas de assuntos e mais de 25 anos de história. Já disse em outros episódios que |
| 45:01 | eu sinto que nasci na hora certa porque eu pude ver cada evento que eu narrei aqui acontecendo em |
| 45:06 | tempo real. Isso me ajudou muito porque eu pude ir aprendendo cada nova tecnologia à medida que |
| 45:12 | elas foram aparecendo. Algumas delas morreram já, como ASP clássico, Flash, Silverlight, |
| 45:18 | Active X, Applets Java, Coffeescript, GWT, e ao mesmo tempo muitas novidades apareceram na forma |
| 45:25 | dos atuais padrões HTML 5, CSS 3 e Javascript ES6 e as ferramentas por cima delas como React, |
| 45:32 | SASS e assim por diante. Mas eu espero que ao ouvir sobre essa linha do tempo você consiga |
| 45:37 | ter uma noção melhor de onde cada coisa se encaixa. E eu recomendo que você assista   este episódio mais vezes, não agora, mas de tempos em tempos pra ver se o que eu estou |
| 45:48 | falando vai fazendo mais sentido à medida que você vai estudando e treinando. Sempre que tiver dúvidas sobre uma tecnologia comece do começo: |
| 45:57 | pesquise sua história. A história vai te dizer, porque essa tecnologia existe? Que |
| 46:02 | problemas ela foi desenhada pra resolver? Ela ainda resolve esse problema da melhor forma |
| 46:08 | ou já surgiram substitutos? Ainda vale a pena aprender ou já tem coisa melhor na frente? Por |
| 46:15 | onde anda o autor original da tecnologia? Ou a empresa que patrocinou essa tecnologia? São |
| 46:21 | perguntas como essas que vão te dar o norte sobre o que estudar e como estudar. Se eu fiz meu trabalho direito, você começou este episódio com dúvidas sobre o que estudar. E deve |
| 46:32 | ter terminado este episódio com mais dúvidas ainda! E esse é o objetivo. Se você tem poucas |
| 46:38 | perguntas, não está se esforçando o suficiente. Faça a pergunta errada e vai receber a resposta |
| 46:44 | errada. Reveja seus conceitos, veja a lista de coisas que tem pra estudar, coloque na linha do |
| 46:51 | tempo, veja quais problemas você vai resolver com quais ferramentas. Encontre problemas pra resolver |
| 46:57 | e vá aprendendo dessa forma: na tentativa e erro. Quais problemas? Eu não disse no episódio anterior |
| 47:03 | que você precisa aprender a fuçar os projetos open source que estão no Github? É por ali mesmo, |
| 47:09 | você vai achar o tal clone do Instagram que alguém fez. Ele vai estar feito em Angular, |
| 47:14 | que eu falei aqui. Você já entendeu pra que ele serve, procure um tutorial online sobre |
| 47:20 | Angular. Daí vai ver que tem arquivos com extensão .scss que é SASS e agora você sabe |
| 47:26 | o que é SASS e que deve ter algum pipeline, como Webpacker, então procure um tutorial de   SASS e outro tutorial de Webpacker. E quando for rodar, você já sabe pelo menos em conceito |
| 47:36 | a diferença de um servidor web e um servidor de aplicações, e se levou a sério meu episódio   anterior você está estudando distribuições Linux, agora procure um tutorial de como instalar, |
| 47:46 | configurar e subir um NGINX por exemplo. Cada um desses assuntos não é pra levar anos pra   aprender. Se você for devagar, gaste 1 mês em cada item. Aprenda os 20% que eu vivo   falando. E aprenda treinando. Teoria e prática. A parte avançada vai aparecendo à medida que você   realmente coloca a mão no código e faz rodar na sua máquina. Qualquer coisa antes disso é perda   de tempo. E apesar de eu não gostar de recomendar diretamente sites de tutoriais ou cursos,   vou deixar linkado alguns que conhecidos meus recomendaram, então não deixe de ver esses   links na descrição do vídeo abaixo. E por hoje é isso aí, o objetivo de hoje |
| 47:52 | foi colocar as tecnologias de front-end dentro da história. Semana que vem quero tentar fazer |
| 47:58 | a mesma coisa com tecnologias back-end e na seguinte finalmente um pouco sobre devops. Eu |
| 48:04 | sei que vocês ficaram com dúvidas, e eu mesmo não sou o melhor programador de front-end,   então mandem suas dúvidas nos comentários abaixo pra todo mundo poder ajudar a |
| 48:14 | responder. Se curtiram mandem um joinha, compartilhem com seus amigos, assinem o canal |
| 48:20 | e cliquem no sininho pra não perder os próximos episódios. A gente se vê, até mais pessoal! |
