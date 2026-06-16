# Entendendo Back-End para Iniciantes em Programação (Parte 1) | Série "Começando aos 40"

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=Qjk-cSW-jk4
- **Duração:** 47:16
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Espero que vocês tenham sobrevivido ao meu último episódio onde gastei um longo tempo |
| 0:08 | tentando dar contexto sobre as tecnologias de Front-End. Também espero que tenham entendido a receita: na dúvida, encontrem o contexto de porque |
| 0:18 | determinada tecnologia foi criada. Tecnologia são ferramentas, ferramentas foram criadas com um propósito. |
| 0:27 | Por isso não existe uma única tecnologia que resolve todos os problemas. |
| 0:32 | Já diria o sábio que pra quem acha que só existe martelo, todos os problemas são pregos. |
| 0:38 | E seguindo nessa mesma linha, no episódio de HOJE, vou tentar dar contexto para as tecnologias |
| 0:43 | que chamamos de Back-end. Porém, back-end é muito, mas muito maior do que front-end e mesmo se eu fizer um episódio |
| 0:52 | de uma hora, não vai dar pra explicar tudo que eu quero. Eu comecei a escrever o script deste episódio, aí cheguei na página 10, fui escrevendo |
| 1:00 | e cheguei na página 20 e mesmo vocês tendo gostado do episódio anterior que deu quase 50 minutos se eu tentar encaixar tudo agora vai facilmente dar mais de 2 horas. |
| 1:11 | E se eu fizer isso vou correr demais e talvez não explicar direito, então vou ser obrigado a cortar em vários episódios e mesmo assim vai ficar grande! |
| 1:20 | Então vamos lá porque temos bastante coisa pra cobrir. Pra começar, a pergunta mais comum quando se fala em programação back-end pra Web |
| 1:28 | é qual linguagem aprender? Javascript? Java? C#? |
| 1:33 | PHP? Python? Ruby? Elixir? Go? Scala? |
| 1:39 | Clojure? Rust? Nos episódios sobre Sua Linguagem não é especial que eu espero que tenham assistido, eu dei uma rápida introdução nos primeiros 40 anos de história das linguagens e como |
| 1:47 | uma linguagem veio influenciando as outras. Assistam essa história antes e, mesmo que não tenha intenção de se tornar um desenvolvedor |
| 1:55 | front-end, assista o episódio anterior antes pra ter o contexto necessário. |
| 2:01 | Se não assistiu vai lá, eu espero …. Pronto, já foi? Então vamos lá! |
| 2:14 | (...) No Brasil infelizmente nós praticamente pulamos a história da computação até os anos 80 |
| 2:20 | e só começamos mais ou menos nos anos 90. Isso porque antes dos anos 80 vivíamos numa ditadura, e perdemos o timing da evolução |
| 2:29 | dos transistores e nunca tivemos um mercado decente de microprocessadores. |
| 2:34 | Nosso mercado era fechado a importar coisas de fora. Maldita reserva de mercado, toda reserva de mercado é um puta erro. |
| 2:42 | A gente precisava ir até o Paraguai pra conseguir comprar máquina decente. Havia também computadores nacionais como os da Itautec e Microsiga que faziam clones |
| 2:52 | de IBM PC e mesmo de outros como os famosos Sinclairs, quem não lembra da série TK como |
| 2:58 | o TK-90? Tinha a Hotbit e Gradiente fazendo MSX que eu gostava bastante. |
| 3:04 | E tinha a Unitron que fazia clones de Apple II e chegou até mesmo a fazer um clone excepcional |
| 3:09 | do Mac 512, que era quase igual e rolou até uma controvérsia direto com a Apple onde |
| 3:15 | eles quase pediram sanções dos EUA contra exportações do Brasil por causa disso. |
| 3:20 | Essa história é interessante e explica porque por muitos anos Steve Jobs odiou o Brasil, |
| 3:27 | vou deixar linkado na descrição abaixo sobre isso. E tivemos até sistemas operacionais nacionais como o Sisne que era um clone de MS-DOS, só |
| 3:36 | que em português. Eu brincava de Basic com computadores como Apple II e MSX quando ia na casa de amigos, |
| 3:43 | meu primeiro mesmo veio do paraguai no fim dos anos 80. Foi um PC XT de talvez 10 Mhz ou algo assim, poderosos 1 MB de RAM e 10 MB de HD, com monitor |
| 3:54 | CGA verde, de incríveis 4 tons de verde. Fiz muitos programas em dBase e Clipper nessa máquina, fiz muitos trabalhos de escola com |
| 4:01 | ele. E joguei muito também. Você não precisa da máquina mais potente pra aprender a programar, você precisa aprender |
| 4:08 | a controlar a máquina que tem e tirar o absoluto máximo que ela pode dar. Ninguém nunca vai dirigir bem uma Ferrari se sequer tem coordenação pra trocar marcha |
| 4:17 | num Gol. Vocês vão notar que mesmo hoje em dia, em pleno 2019, é muito raro encontrar programadores |
| 4:24 | de cabelo branco. Eu mesmo só comecei a ganhar os meus nos últimos poucos anos. E esse é um dos motivos: havia muito pouco programador antes dos anos 80. |
| 4:35 | Mesmo durante os anos 80 era difícil ser programador. Então os que estão na ativa são ainda mais raros. |
| 4:42 | Nos Estados Unidos você vê vários, incluindo famosos como os Uncle Bob da vida. |
| 4:47 | Por isso temos muito pouca gente realmente com décadas de experiência. Se programador no Brasil só se tornou uma carreira realmente mainstream depois do advento |
| 4:56 | da Web, antes era bem mais nicho. E por isso você vê muito pouca gente que pode dizer coisas como: trabalhei em projetos |
| 5:04 | com Lisp, ou Smalltalk, ou PROLOG, sem ser do meio acadêmico. Bom, antes de falarmos sobre as linguagens novas, precisamos começar do começo. |
| 5:14 | Todo hardware, mais especificamente a CPU vem de fábrica entendendo um certo conjunto |
| 5:21 | de instruções ou funções. Eles tem registradores que é como se fosse um tipo de memória. |
| 5:27 | Você coloca valores nesses registradores e chama uma instrução que é mais ou menos |
| 5:32 | a mesma coisa que chamar uma função passando argumentos, se você começou a aprender alguma |
| 5:38 | linguagem. Daí a CPU executa alguma coisa e grava o resultado em outros registradores e você |
| 5:46 | pode ler a resposta. A linguagem que usamos pra falar diretamente com a máquina é Assembly, e seu montador, |
| 5:54 | o assembler, traduz o código escrito em texto com mnemônicos como JMP ou ADD ou MOV diretamente |
| 6:00 | nas instruções binárias da máquina. Além do hardware temos instruções específicas do sistema operacional, o que chamamos de |
| 6:08 | syscalls ou chamadas de sistema. Então o tal binário nativo que falamos são instruções pra máquina e pro sistema operacional |
| 6:17 | que é uma abstração da máquina. Sempre que falamos em abstrações pense que é uma forma de pegar uma sequência de instruções |
| 6:25 | que, por si só, podem ser difíceis de entender o que vai fazer e encapsular numa chamada |
| 6:30 | só com um nome mais descritivo. É o que você chamaria de funções. Um sistema operacional tem várias funções que abstraem instruções mais simples que |
| 6:40 | a máquina oferece, como ler arquivos, ou ou alocar espaço na memória pra um programa. |
| 6:45 | É extremamente chato e trabalhoso escrever Assembly diretamente, além de ser bem ineficiente |
| 6:52 | hoje em dia, tanto porque precisamos escrever muito código pra fazer uma aplicação inteira |
| 6:57 | e porque a performance não vai ser melhor e vou explicar porque a seguir. Mas pior, o código que escrevemos é totalmente dependente da CPU que estamos usando. |
| 7:08 | Programar Assembly de Intel x86 ou PowerPC ou ARM exigem instruções diferentes. |
| 7:14 | Por isso temos linguagens como C. Um "compiladores" traduz o código como escrito em C e realiza diversas otimizações |
| 7:23 | antes de terminar de traduzir em instruções binárias. Mas mais importante, podemos usar o mesmo código C com diferentes compiladores pra |
| 7:32 | gerar as instruções de um Intel x86 ou ARM sem mudar o código C. Uma linguagem como C cria um programa binário nativo. |
| 7:40 | Ou seja, ele depende de chamar diretamente instruções do sistema operacional e da máquina. |
| 7:46 | Um compilador faz muito mais que só traduzir código um pra um pra instruções de máquina, |
| 7:52 | ele vai tentar o possível pra melhorar seu código primeiro. Vai tirar instruções que não servem pra nada. |
| 7:58 | Vai tentar executar coisas fora de ordem se o resultado for o mesmo. Vai trocar pedaços inteiros por instruções mais simples. |
| 8:06 | Vai tentar prever o que é o próximo resultado e já pré-calcular e assim por diante. |
| 8:11 | Ele literalmente faz mágica, portanto parta do princípio que seu código deve ser escrito |
| 8:17 | primariamente pra que outro ser humano consiga entender e é trabalho do compilador melhorar |
| 8:23 | pra ficar mais eficiente na máquina. Você eventualmente pode otimizar seu código pra ficar mais eficiente quando ficar complexo, |
| 8:32 | mas se sua linguagem exige que você faça isso o tempo todo, sua linguagem é defeituosa. |
| 8:37 | No processo de transformar um código texto em um binário que executa na máquina você |
| 8:44 | precisa primeiro de um compilador. Só que ninguém escreve um programa 100% do zero. |
| 8:49 | Normalmente você nem fala diretamente com o hardware ou o sistema operacional. Existem dezenas de bibliotecas que você deve reusar e que vão facilitar seu trabalho. |
| 8:59 | No C você vai precisar de coisas como LIBC ou no C++ você talvez vai usar coisas como |
| 9:04 | Boost. São grandes bibliotecas reusáveis pra você não ter que ficar reinventando a roda toda |
| 9:10 | hora. No Windows seriam as DLLs que você já deve ter visto, como win32. No Linux a extensão dessas bibliotecas binárias é ponto SO. |
| 9:19 | Agora você precisa de um linker que vai ligar seu programa compilado com essas bibliotecas. |
| 9:25 | E você tem duas opções, linkar estaticamente ou linkar dinamicamente. |
| 9:30 | Pra linkar estaticamente você precisa do binários antes dele virarem um SO ou DLL, |
| 9:36 | ou seja do que chamamos de arquivo de objetos, normalmente com extensão ponto O que é transformado |
| 9:42 | em ponto A ou ponto LIB em Windows. Se seu programa é um binário e a biblioteca é outro binário, ao linkar estaticamente |
| 9:50 | você vai ter as duas coisas mescladas num único bináriozão. Porém se todo programa que você fizer tiver que mesclar o binário das bibliotecas, vai |
| 9:59 | ter um binários gigantes. Por outro lado você pode linkar dinamicamente, pra isso você precisa do arquivo de cabeçalho |
| 10:06 | da biblioteca que é um código que declara quais funções estão expostas no binário |
| 10:12 | dessa biblioteca. Dessa forma todos os programas vão ter tamanho menor e vão reusar o mesmo binário da biblioteca |
| 10:20 | que está instalado no seu sistema. Porém ao copiar esse binário pra outra máquina você precisa garantir que a biblioteca dinâmica |
| 10:28 | está lá também. É por isso que muitos programas no Windows antigamente mandavam você instalar antes |
| 10:35 | o runtime do Visual Basic 6 ou hoje em dia o runtime do .NET ou outros componentes como |
| 10:41 | DirectX pra games. E mais, você precisa instalar a versão certa de cada biblioteca ou vai ter problemas. |
| 10:48 | Se você já está instalando e configurando seu Linux do zero na mão, já deve ter aprendido sobre variáveis de ambiente. |
| 10:55 | Não basta só baixar as bibliotecas e copiar em algum diretório qualquer. Pra que seus executáveis encontrem as bibliotecas, se você instalar na mão, vai precisar mexer |
| 11:05 | em variáveis de ambiente como LD_LIBRARY_PATH que indicam onde procurar por elas. |
| 11:11 | Essa discussão se linkar dinamicamente ou estaticamente é melhor é uma das coisas |
| 11:17 | que programadores gostam de discutir. Ambas tem vantagens e desvantagens. |
| 11:22 | Se você tem todo o código-fonte de tudo disponível o tempo todo e quer um binário |
| 11:28 | que você possa copiar pra outra máquina e não se preocupar com dependências, pode compilar tudo estático, ficar com um binário gigante e quando eu digo gigante estou falando |
| 11:38 | de binários de 200Mb ou mais ainda. É o que linguagens novas como o Go do Google fazem: ele prefere baixar o código fonte |
| 11:46 | das dependências e compilar e linkar tudo estaticamente. Tem algumas exceções que vou falar depois mas na maior parte do tempo todo binário |
| 11:55 | de Go você pode gerar na sua máquina, copiar num servidor e na maior parte do tempo tudo |
| 12:01 | funciona sem se preocupar em precisar instalar dependências dinâmicas. Mas se é tão simples assim e ficar se preocupando com versões de bibliotecas dinâmicas ou |
| 12:12 | se elas estão instaladas é tão chato, porque não compilar tudo estaticamente? |
| 12:18 | Primeiro porque você não precisa ter o código fonte das bibliotecas, só o arquivo de cabeçalho que lista suas funções. |
| 12:25 | Segundo, porque digamos que você tenha 10 programas, todas elas linkam estaticamente |
| 12:31 | uma biblioteca de criptografia. Digamos que descobrimos que tem um bug de segurança crítico nessa biblioteca. |
| 12:39 | Se todos os programas estiverem linkados dinamicamente, basta recompilar só a biblioteca de criptografia |
| 12:46 | e substituir na máquina em cima da antiga e todos os 10 programas automaticamente vão |
| 12:52 | carregar a versão corrigida. Caso contrário, você agora precisa recompilar todos esses 10 programas pra que eles gerem |
| 13:00 | novos binários com as correções e substituir na máquina um a um. |
| 13:05 | Tudo sempre depende de pra que serve seu programa. Aliás, programação é muito isso: aprender a fazer escolhas entre opções que não estão |
| 13:14 | erradas, que você precisa saber o contexto. Nem sempre as escolhas são simples, vá se acostumando com isso. |
| 13:20 | É como em arte, qual cor é melhor? Vermelho? Azul? |
| 13:25 | Amarelo? Não existe cor certa. Existe saber usar a cor certa no lugar certo. Na maioria das distribuições Linux existe o conceito de um gerenciador de pacotes. |
| 13:36 | No Redhat tempos o RPM e a ferramenta yum, em distribuições derivadas de Debian como o Ubuntu tempos DEB e a ferramenta apt. |
| 13:44 | Em Arch Linux e derivados como Manjaro temos o pacman. E assim por diante. Mas quando não existe o pacote de algum programa que queremos você normalmente baixa um tarball |
| 13:54 | que é tipo um zip, e vai precisar descomprimir, compilar e instalar a partir desse código |
| 14:01 | fonte. E você normalmente vai ver a seguinte sequência de 3 comandos que precisa executar na linha de comando. |
| 14:06 | Primeiro tem o ./configure. Configure é responsável justamente por checar se você tem todas as dependências que se |
| 14:14 | precisa pra compilar já instalados na sua máquina, se não tiver ele vai dar erro e |
| 14:19 | você precisa instalar as dependências e rodar configure de novo. Daí você roda make. |
| 14:24 | Make lê um arquivo chamado Makefile que vem no projeto e que declara tarefas que a ferramenta |
| 14:30 | make pode executar, e o default ou padrão é compilar. Ele vai chamar compiladores como o GCC ou CLANG e transformar o código C em binários. |
| 14:40 | E por fim você tem o make install que é o make chamando a tarefa install do Makefile |
| 14:47 | que vai pegar esse binário que acabou de compilar, dar permissão de executar, e mover |
| 14:52 | pra um diretório que o PATH consiga encontrar, como o /usr/local/bin ou pra outro lugar arbitrário |
| 14:59 | tipo /opt/blabla e colocar esse diretório no PATH se precisar. Toda vez que você faz essa sequência vê como demora. |
| 15:07 | Programas modernos são dependentes de dezenas de bibliotecas e o compilador tem bastante |
| 15:13 | trabalho pra transformar centenas de arquivos ponto C em ponto O e depois no binário final |
| 15:19 | linkado estaticamente ou dinamicamente com as bibliotecas que precisa, e só aí finalmente |
| 15:25 | você pode executar seu programa. Em Windows você quase nunca instala programas assim, você normalmente já baixa o binário |
| 15:32 | que vem embutido num instalador. O instalador normalmente instala as dependências que precisa. |
| 15:39 | Em Windows, ao contrário de Linux, preferimos manter todas as versões de uma determinada |
| 15:44 | biblioteca no sistema. Por isso você tende a ter um sistema operacional mais gordo que o Linux e com bibliotecas bem |
| 15:51 | antigas ainda disponíveis, mas a vantagem é que conseguimos pegar um binário feito |
| 15:58 | pra Windows 98 e ele vai provavelmente funcionar no Windows 10. |
| 16:03 | MacOS é um híbrido dos dois conceitos, ele mantém muitas bibliotecas antigas até um |
| 16:08 | certo ponto, mas não tão longe quanto o Windows, e ao contrário do Windows ele trás |
| 16:13 | já os compiladores e dá a opção de compilar direto do código-fonte mantendo os cabeçalhos |
| 16:20 | de bibliotecas que precisam pra compilar. Por isso existem adaptações de programas de Linux que funcionam perfeitamente em MacOS. |
| 16:30 | Você vai ver mais sobre esse tipo de escolha quando estiver usando linguagens que compilam |
| 16:35 | em binários nativos, como C, C++, Pascal ou Object Pascal do Delphi, Objective-C ou |
| 16:42 | Swift pra iOS e até em linguagens novas como o Google Go que eu falei a pouco e o Rust |
| 16:47 | da Mozilla. Mas do outro lado espectro existe o conceito de um interpretador. Um interpretador é em si só um programa mas a função dele é ler código que você |
| 16:58 | escreveu e traduzir em instruções pra máquina sem necessariamente precisar compilar esse código em binário nativo. |
| 17:05 | Ou seja, ele depende de ter o código fonte do seu programa e traduzir, ou interpretar, o código toda vez que carrega. |
| 17:14 | Ele contém partes de um compilador, como o parser. Pra interpretar o código que você escreveu, precisamos de um programa que leia esse código |
| 17:23 | e interprete de acordo com uma gramática da linguagem e traduza isso em instruções |
| 17:28 | de máquina ou uma representação similar, pra isso serve o parser. Aqui que a coisa começa a ficar confuso, mas vamos focar pra tentar entender. |
| 17:38 | Originalmente um interpretador é só um programa como eu já disse, você executa na linha de comando e passa como argumento o caminho pra um arquivo de texto que contém o código |
| 17:48 | que você escreveu na linguagem que esse interpretador entende. Ele vai carregar esse arquivo, vai usar o parser pra checar que você escreveu certo, |
| 17:58 | vai transformar numa representação interna que ele entende, normalmente numa árvore |
| 18:04 | - lembra que eu falei no episódio anterior da importância de você entender estruturas de árvores? E finalmente vai começar a interpretar e executar as instruções pra fazer o que você |
| 18:15 | pediu. Quando terminar seu programa, o interpretador também termina. É assim que funcionam originalmente linguagens como Perl, PHP, Python, Ruby, até Javascript. |
| 18:26 | Elas variam em algumas funcionalidades, por exemplo, Perl e Python permitem pré-compilar |
| 18:31 | seu código fonte na representação intermediária que eu falei. O termo "compilar" pode confundir porque você pode achar que ele está compilando |
| 18:40 | num binário nativo como o compilador de C, mas é diferente. Ele apenas vai economizar o tempo de ler o arquivo texto e parsear na tal estrutura de |
| 18:50 | árvore que num Ruby chamamos de AST ou Abstract Syntax Tree. Por isso em Perl você tem a extensão ponto PL pro código fonte e ponto PLX pro pré-compilado |
| 19:00 | ou em Python você tem ponto PY pro código fonte e ponto PYC pro pré-compilado. |
| 19:06 | Ruby e Javascript não tem essa funcionalidade ainda. Na prática tanto faz, hoje em dia os HDs são rápidos o suficiente pra não importar |
| 19:13 | tanto isso. Antigamente fazia sentido porque a principal função de um interpretador era permitir |
| 19:19 | que você pudesse criar programas de linha de comando que executam e terminam muito rápido. |
| 19:25 | Você podia chamar de duas formas: digitando perl e passando como argumento o arquivo do |
| 19:31 | código ou ligando o flag de execução direto do arquivo texto de código e tendo como primeira |
| 19:37 | linha o que chamamos de "shebang" que é a cerquilha com exclamação e o caminho |
| 19:42 | absoluto pro executável do interpretador. E se você já fuçou pela Web por scripts deve ter visto isso. |
| 19:49 | Existia ainda outra opção que era criar um pacote que embute o interpretador junto com a representação do seu código fonte num único executável. |
| 19:59 | O Perl permitia isso e é o que o Visual Basic antes da versão 6 também fazia. No final parecia que era um binário nativo como de um C, mas na verdade era um pacote |
| 20:08 | que embutia as duas coisas. De curiosidade eu disse Visual Basic até o 6 porque no 6 você tinha a opção de compilar |
| 20:15 | o código fonte em binário nativo quando ele passou a adaptar e usar o compilador do Visual C++. |
| 20:21 | Visual Basic 6 é um produto que me impressionou bastante na época. Como eu disse antes, um interpretador originalmente foi feito pra iniciar rápido e terminar rápido. |
| 20:32 | No episódio anterior eu comecei a falar sobre servidores web. Todo sistema operacional lida com processos. |
| 20:39 | Toda vez que você executa uma aplicação, seja o executável nativo compilado em C ou |
| 20:45 | os interpretadores que citei antes que também são feitos em C ou C++, o trabalho do sistema |
| 20:51 | operacional é carregar, alocar memória e criar um processo em execução. Em ambientes UNIX ou principalmente Linux criar processos é uma coisa relativamente |
| 21:01 | barata, ordens de grandeza se comparar com MacOS ou Windows. Em Windows criar processos envolve mais peso ou o que chamamos de overhead, não é uma |
| 21:12 | coisa barata e nem é porque ele é pior mas porque tem requerimentos diferentes. Pensando antigamente num UNIX, um programador naturalmente faria um programa que é executado |
| 21:23 | e, se for um servidor TCP, ele só consegue servir um cliente TCP de cada vez, como já |
| 21:29 | expliquei no episódio anterior. Pra conseguir servir múltiplos clientes TCP ao mesmo tempo, a coisa mais fácil de se |
| 21:36 | fazer é um FORK do processo, ou seja, criar uma cópia do programa em execução na memória. |
| 21:43 | Cada nova conexão o servidor faz um novo FORK. E esse fork é razoavelmente rápido de criar e usa pouca memória porque ele reusa os mesmos |
| 21:53 | bits do programa pai original que também está na memória, é um truque do sistema |
| 21:58 | operacional e esse recurso é chamado de COW ou Copy on Write que evita fazer uma cópia |
| 22:04 | inteira do executável da memória pra outro espaço de memória. Então se um processo precisa de 200 kbytes em memória, no instante que fizer fork ele |
| 22:14 | não vai dobrar a memória e usar 400, vai usar muito menos que isso. Um servidor web como o Apache antigo que eu falei, no começo só usava FORK. |
| 22:23 | Por isso ele era simples. E mais do que isso, ganhou a capacidade de executar programas dependendo da URL que era |
| 22:30 | pedido, através do padrão que falei que ficou conhecido como CGI. No começo esses executáveis eram só programas nativos compilados de C. |
| 22:39 | Mas falei que rapidamente fizeram Perl funcionar no Apache também e começamos a era da web |
| 22:46 | dinâmica. Pois bem, interpretadores com programas curtos iniciam e terminam rápido. |
| 22:51 | Mas se o programa vai ficando mais e mais complicado, incluindo coisas custosas como |
| 22:57 | conectar num banco de dados ou manipular arquivos, ou carregar muitos dados em memória, é muito |
| 23:03 | custoso ficar iniciando e terminando esses programas toda vez. Foi quando surgiu a primeira gambiarra na forma de coisas como o mod_perl e depois o |
| 23:13 | mod_php que são módulos compilados dentro do Apache e que dá inclusive acesso às estruturas |
| 23:19 | internas do Apache. Toda vez que um novo fork do Apache é feito ele já pré-carrega com a capacidade de executar |
| 23:26 | Perl ou PHP sem precisar carregar o interpretador separadamente. Isso é mais rápido do que CGI puro, porém é um terrível buraco de segurança já que |
| 23:35 | bugs no Perl ou no PHP dão acesso ao Apache inteiro e a tudo que ele tem acesso na máquina. |
| 23:42 | A segunda gambiarra pra evitar ter que carregar os interpretadores a cada nova requisição |
| 23:47 | foi o FastCGI que é basicamente um segundo servidor que carrega paralelo ao Apache ou |
| 23:54 | outro servidor web, ele mantém o interpretador e seu programa ativos em memória e pode servir |
| 24:01 | múltiplas requisições sem precisar terminar e reiniciar toda vez. Daí o servidor web e o servidor de FastCGI se comunicam via TCP ou outras formas como |
| 24:11 | Unix Sockets que é recurso em Unix para que dois processos consigam se comunicar. |
| 24:17 | Quando uma requisição chega ao Apache ele passa essa informação e outros metadados |
| 24:22 | pro servidor de FastCGI executar o programa Perl ou PHP e devolve a resposta resultante |
| 24:28 | de volta pro Apache devolver pro navegador. Uma grande vantagem disso era poder isolar os dois servidores de forma que um não invada |
| 24:37 | demais o espaço do outro em caso de bugs de segurança. Mas em Windows, você não tem o conceito de FORK na API de alto nível do sistema, |
| 24:46 | o CreateProcess. Internamente o kernel do Windows permite algo parecido com FORK incluindo o recurso de COW |
| 24:53 | ou Copy on Write, mas não é tão usado e mesmo assim ainda é uma ordem de grandeza mais lento. |
| 24:59 | Isso explica porque os primeiros Apache eram uma porcaria em Windows, nem perto da performance |
| 25:04 | num Linux e por isso dávamos preferência a usar o próprio IIS da Microsoft. |
| 25:10 | Só porque dois programas compilam pra dois sistemas operacionais diferentes e rodam, |
| 25:15 | não significa que rodam igual. Coisas feitas pra Windows funcionam melhor em Windows e coisas feitas pra Linux só rodam |
| 25:23 | bem em Linux. Lembre-se disso. Dada essa limitação você acaba sendo obrigado a usar mais Threads que são linhas de execução |
| 25:32 | em paralelo dentro de um mesmo processo. Já falamos da discussão de compilação estática vs compilação dinâmica. |
| 25:39 | É hora de falar de outro dilema da programação: programação baseada em processos com fork |
| 25:45 | versus um processo com múltiplas threads. Hoje em dia usamos muito mais Threads mas processos com fork não estão obsoletos, |
| 25:54 | por exemplo, o conector do banco de dados PostgreSQL funciona via fork assim como muitos |
| 25:59 | outros softwares. Como eu disse antes, toda vez que você executa um programa o sistema operacional carrega |
| 26:05 | os bits em memória e inicia uma entidade chamada processo. O sistema operacional tem o poder de matar esse processo ou pausar e reiniciar sua execução. |
| 26:16 | Dentro do processo ele não tem consciência de todos os outros processos ao seu redor |
| 26:21 | a menos que tenha privilégios de perguntar ao sistema operacional. Pra todos os efeitos, ele se sente como se fosse a única coisa rodando na máquina. |
| 26:30 | Quando o processo precisa escrever na memória ele não escreve diretamente. |
| 26:35 | Pense na memória como um livro com páginas numeradas sequencialmente de 1 até um número |
| 26:40 | grande. Num computador de 32-bits temos a capacidade de mapear de 1 até 2 elevado a 32 ou seja |
| 26:47 | mais de 4 bilhões ou 4GB. Num computador de 64-bits temos a capacidade de mapear até 2 elevado a 64 ou seja mais |
| 26:56 | de 18 quintilhões de bytes ou 18 exabytes, que é bastante coisa. |
| 27:01 | Se tem vários programas na memória você imaginaria que o certo seria cada programa |
| 27:06 | começar a partir de uma determinada página dessa memória, tipo o Word começando na página 1, o Excel na página 100, o Chrome na página 200 e assim por diante, mas isso |
| 27:17 | seria extremamente complicado de controlar. Em vez disso todo mundo começa na página 1, mas de uma memória virtual e o sistema |
| 27:26 | operacional que se encarrega de traduzir a página 1 da memória virtual do Excel pra página 100 da memória real. |
| 27:32 | Então o Excel nunca teria como acessar a memória do Chrome. E assim começamos a criar um mínimo de segurança entre os programas. |
| 27:40 | No MS-DOS antigo que rodava no que chamamos de modo real, cada programa tem acesso a todos |
| 27:46 | os endereços reais da máquina, mas não tinha problema porque no MS-DOS só dava pra |
| 27:51 | rodar um programa de cada vez. Pra trocar do Word pro Excel, tinha que primeiro sair do Word e daí carregar o Excel. |
| 27:59 | Mas hoje em dia onde vários programas. Isso facilita muito pra nós programadores porque não precisamos nos preocupar com a |
| 28:08 | memória de terceiros. E se precisamos fazer algo como um servidor Web onde cada conexão de um cliente TCP precisa |
| 28:15 | rodar em paralelo a outras conexões, podemos fazer só um FORK do processo pra cada um. |
| 28:21 | Cada FORK é um processo isolado e daí um não afeta a memória do outro. |
| 28:26 | Tudo funciona perfeitamente. Mas se é caro, ou não é possível fazer FORKS, a única outra solução é dentro |
| 28:34 | de um único processo iniciarmos múltiplas Threads, que são bem mais baratas que forks. |
| 28:40 | Cada Thread daí pode servir um cliente TCP conectado ao processo. Mas agora começamos a ter problemas. |
| 28:46 | Porque não existe memória isolada pra cada thread, dentro do processo cada thread tem acesso a toda a memória virtual do processo. |
| 28:54 | Por isso você vai ouvir falar, caso ainda não tenha passado por isso, que escrever programas que são multi-thread é uma puta dor de cabeça, porque você precisa garantir |
| 29:04 | o que chamamos de thread-safety ou seja, código seguro pra rodar em threads. |
| 29:10 | Nesse caso, você como programador tem a responsabilidade de escrever código que, quando executado |
| 29:15 | numa thread, não pise sem querer na memória de outra thread executando ao mesmo tempo. |
| 29:21 | A forma de fazer isso normalmente envolve toda vez que você precisa escrever algum dado em memória, primeiro você notifica o sistema que vai escrever, pega o que chamamos |
| 29:31 | de um lock, escreve e depois libera esse lock. Se falhar em pegar o lock, se arrisca a corromper a memória de outra thread. |
| 29:40 | Se esquecer de soltar o lock vai causar um deadlock e bloquear outras threads de pegar |
| 29:45 | o lock. Pense essa rotina em milhares de linhas de código. Ou seja, dor de cabeça. |
| 29:51 | Recapitulando, um programa binário é executado pelo sistema operacional num espaço de memória |
| 29:58 | isolado, chamado processo. Cada processo pode ser clonado via fork num Linux. |
| 30:03 | E cada processo pode rodar uma ou mais threads dentro dele. Um servidor web é um processo e pra servir múltiplas requisições ele faz um fork pra |
| 30:12 | cada uma. Daí nasce CGI ou FastCGI. Mas em Windows como forks são ordens de grandeza mais caros, o servidor web IIS precisa de |
| 30:21 | outro truque e isso veio na forma do padrão ISAPI que é como se fosse um programa escrito |
| 30:26 | pra CGI mas com modificações pra ser thread-safe e compilado dentro de uma biblioteca DLL que |
| 30:33 | é carregado pelo IIS. O servidor web da Netscape, que não existe mais, tinha outro padrão similar, o NSAPI. |
| 30:40 | Muitos programadores de Delphi já devem ter feito programas pra Web e compilado em DLLs |
| 30:46 | ISAPI ou NSAPI. Com o advento de coisas como CGI, FastCGI, ISAPI, NSAPI e outras arquiteturas e o fato |
| 30:54 | de termos interpretadores que possibilitam escrever código que tem pouca dificuldade |
| 30:59 | de rodar porque não precisamos nos preocupar com compilação e gerenciamento de dependências, |
| 31:05 | é quando linguagens interpretadas como Perl, PHP e ASP Clássico ganham notoriedade no |
| 31:11 | mercado, especialmente com o timing do início da bolha das ponto coms a partir do meio dos |
| 31:17 | anos 90. Voltando a threads mais um pouco, como faz pra várias threads rodarem em paralelo? |
| 31:24 | Pense assim, um processo tem pelo menos 1 thread. Pra um processo executar múltiplas threads ao mesmo tempo, o CPU tem uma coisa chamada |
| 31:33 | agendador ou scheduler, mas só pode rodar um número limitado de threads ao mesmo tempo. |
| 31:39 | Então ele pausa uma thread em execução de acordo com vários critérios e acorda |
| 31:44 | outra thread que tava pausada pra dar chance dela rodar e vai fazendo isso com os vários |
| 31:49 | threads de tal maneira que você tem a impressão que estão todos rodando ao mesmo tempo. |
| 31:54 | E quando você pede o tal lock é esse scheduler que vai evitar que outras threads pisem no |
| 32:00 | seu calo por exemplo. Programação multi-thread vai ser uma longa jornada pra vocês que estão iniciando e |
| 32:08 | é até hoje considerada uma das coisas mais difíceis pra um programador realmente entender, |
| 32:14 | só competindo com gerenciamento de memória e segurança. Entendendo esses conceitos básicos que eu expliquei muito rapidamente, podemos começar |
| 32:23 | a entender coisas como o surgimento do Java. Você precisaria ter tido experiência com C++, Smalltalk e Lisp pra entender realmente |
| 32:32 | como um Java nasce mas vamos começar por aqui. Em 1991 surge uma nova linguagem na Sun com o codenome Oak, e o objetivo inicial era ser |
| 32:41 | um sistema pra set-top-boxes. Naquela época se tinha o conceito que as pessoas teriam "caixas" multimidia nas |
| 32:47 | salas integrando a tv a cabo e outros conteúdos. Esse conceito anos depois viria a se tornar um Tivo ou Roku ou mesmo Google Chromecast |
| 32:57 | e Apple TV de hoje, que inclusive seriam substituídos pelas Smart TVs e consoles de videogame também. |
| 33:03 | Lembrem-se que Linux ainda estava só no começo, ainda era rudimentar, e coisas como Android |
| 33:10 | estão muitos anos à frente ainda. Java embute alguns conceitos de compiladores e interpretadores. |
| 33:17 | Mais especificamente de máquinas virtuais, por isso você tem a JVM ou Java Virtual Machine. |
| 33:23 | Uma máquina virtual é uma evolução de um interpretador. Em vez de ser só um programa que executa código escrito numa determinada linguagem, |
| 33:32 | como Java, a JVM tem uma ambição maior, ele quer ser o próprio sistema operacional |
| 33:37 | e abstrair a máquina real por baixo. Pro programa em Java não existe um sistema operacional Linux ou Windows rodando num processador |
| 33:45 | Intel ou ARM. Só existe a JVM. O conjunto todo que a Sun inventou tem várias ferramentas. |
| 33:52 | Diferente de um interpretador e mais similar a uma linguagem compilada como C++, ele separa |
| 33:57 | a fase de compilação da fase de execução. O compilador JAVAC pega seu código fonte escrito em Java (eles usaram o mesmo nome |
| 34:05 | pra tudo e isso dificulta explicar, eu sei) e compila numa representação intermediária |
| 34:11 | que chamamos de Java Byte Code. Na prática, lembra que eu falei que o compilador de C traduz seu código C em instruções |
| 34:18 | nativas do sistema operacional e do processador? E se seu sistema operacional e processador forem a JVM? |
| 34:25 | Também falei que cada processador hardware vem com um conjunto particular de instruções |
| 34:30 | que só roda nesse processador. No caso da JVM é a mesma coisa, é isso que chamamos de bytecode. |
| 34:37 | Então quando o JAVAC compila, ele gera um binário nativo só que específico pra máquina |
| 34:43 | virtual Java. Na época se pesquisou inclusive fazer um processador hardware mesmo que entendia essas |
| 34:49 | instruções mas nunca foi mesmo pra frente. Entenderam? A JVM é como se simulasse um computador. |
| 34:55 | Assim como um interpretador, você carrega a JVM e aí ele carrega o seu programa, abstraindo |
| 35:02 | o sistema real por baixo. Mas diferente de um interpretador ele faz coisas mais pesadas e tem premissas mais caras. |
| 35:10 | Java é péssimo pra ser algo como substituto de Perl na linha de comando porque a inicialização |
| 35:16 | dele é extremamente lenta até hoje. Isso porque ele tem um gerenciador de memória muito mais sofisticado do que a maioria dos |
| 35:25 | interpretadores e carrega muito mais coisas na inicialização. Por causa disso também ele não é bom pra fazer FORK pra rodar em múltiplos processos, |
| 35:34 | porque o custo desse gerenciador de memória é extremamente alto. Como simulador de um sistema operacional, nesse sentido ele se parece mais com o Windows |
| 35:44 | do que um Linux. Então o caso de uso ideal do Java é rodar um único processo, sozinho na máquina, e |
| 35:52 | seus programas rodam em paralelo dentro da JVM e a JVM substitui o sistema operacional |
| 35:58 | pra gerenciar seus programas rodando em paralelo. E cada programa seu precisa usar Threads pra executar coisas em paralelo dentro dele. |
| 36:07 | Viu porque eu disse que a JVM praticamente substitui o sistema operacional? Você tira o máximo dele quando não roda mais nada além da JVM e dá todos os recursos |
| 36:17 | da máquina pra ele gerenciar. E eu disse que compiladores como C fazem dezenas de otimizações pra reescrever seu código |
| 36:26 | da maneira que rode mais rápido possível. A JVM vai um passo além, ele fica medindo como seu programa roda e otimiza em tempo |
| 36:35 | real pra binário nativo da máquina por baixo pra ficar mais rápido. É a técnica que chamamos de JIT ou compilador Just In Time. |
| 36:44 | Javascript faz algo semelhante em navegadores modernos como Safari ou Chrome. Um otimizador em tempo de compilação demora Muito pra compilar, se você já tentou compilar |
| 36:53 | um programa manualmente, dependendo do tamanho já viu que pode levar de segundos a minutos. |
| 36:59 | Uma página web não pode demorar tanto pra carregar. Em vez de tentar otimizar tudo, ele só lê o código fonte em Javascript e faz o mínimo |
| 37:08 | pra interpretar e executar, mas à medida que ele executa um compilador JIT vai otimizando |
| 37:14 | seu código em tempo de execução e só o código que está executando. Se você por acaso carregou uma biblioteca que nunca é usada, o compilador JIT nem vai |
| 37:23 | perder tempo tentando otimizar esse pedaço. Então é tipo um meio termo entre um compilador AOT ou Ahead of Time como em C e um interpretador. |
| 37:33 | A vantagem do Java compilar num binário intermediário de bytecode e rodar numa JVM é que eliminamos |
| 37:40 | o problema de ter que ter compiladores pra cada arquitetura de computador como Intel ou ARM. |
| 37:45 | Basta que cada tipo de computador e sistema operacional tenha uma JVM. Você já deve ter visto isso com programas Java que rodam em Mac ou Linux ou Windows, |
| 37:55 | mas em cada um você precisa baixar um Java específico uma vez só. Além disso o Java cresceu rapidamente e temos quase tudo escrito em Java. |
| 38:05 | Assim como uma das maiores idéia do C era sua portabilidade para diferente arquiteturas, |
| 38:11 | contanto que você recompilasse o código C, no caso do Java eles também queriam portabilidade |
| 38:17 | escrevendo o máximo possível de tudo somente em Java. Aliás, essa é outra diferença do Java com interpretadores. |
| 38:24 | Em Java, você tem praticamente tudo que um sistema operacional como Windows ou Linux |
| 38:30 | oferecem mas escritos todos em Java e embutidos dentro da JVM. |
| 38:35 | Em interpretadores como Perl ou Python ou PHP ou Ruby eles dependem bastante do sistema |
| 38:41 | operacional por baixo. Interpretadores de código aberto como eles nunca tiveram a ambição de substituir o |
| 38:48 | sistema operacional, mas de se integrar a eles. Pra fazer isso usamos o conceito de binding, que é uma forma do interpretador expor a |
| 38:57 | uma biblioteca de código nativo o acesso a suas estruturas internas e sua memória. |
| 39:02 | Então, em vez de escrever uma biblioteca de criptografia toda em Python, ele simplesmente |
| 39:08 | mapeia para o que o OpenSSL já instalado no sistema operacional oferece. |
| 39:14 | Perl, PHP e Ruby fazem a mesma coisa. Isso inclusive cria um problema: se a biblioteca nativa que você está fazendo binding não |
| 39:22 | for thread-safe, você bloqueia o interpretador de rodar threads em paralelo. |
| 39:28 | Isso acontece o tempo todo em todos os interpretadores. Por isso também é mais difícil de fazer interpretadores rodarem em todos os sistemas |
| 39:37 | operacionais. Muitas vezes eles rodam, mas algumas funcionalidades são diferentes ou tem qualidade inferior |
| 39:44 | porque as mesmas dependências não existem em todos os sistemas operacionais. |
| 39:49 | Por isso mesmo, nunca faça programas complexos que rodam num interpretador no Windows esperando |
| 39:56 | que vá funcionar igualzinho em Linux ou Mac. Entre Mac e Linux existe mais compatibilidade porque ambos compartilham muitas das mesmas |
| 40:05 | bibliotecas open source. No Windows elas precisam ser remendadas pra se ligar a bibliotecas proprietárias que |
| 40:12 | só existem no Windows. Portanto, se vai codar em linguagens interpretadas como essas, prefira sempre Linux ou Mac. |
| 40:20 | Não é uma questão de ser anti-Microsoft ou algo assim, os interpretadores que foram |
| 40:25 | criados em Linux funcionam bem só em Linux, mesmo que exista uma versão pra Windows. |
| 40:31 | Macs passaram a ser construídos sobre um UNIX baseado na Kernel do BSD UNIX quando |
| 40:36 | o OS X saiu em 1999, sistema esse que foi uma evolução do NextStep criado no fim dos |
| 40:43 | anos 80 depois que Steve Jobs foi removido da Apple. Ele é um UNIX de verdade, assim como o Solaris da Sun ou o HP-UX. |
| 40:51 | Eles se parecem com distribuições Linux porque o Linux tentou ser um clone de UNIX. |
| 40:56 | E eles são razoavelmente compatíveis porque os UNIX modernos e distribuições Linux usam |
| 41:02 | mais ou menos as mesmas ferramentas gerais, incluindo o mesmo compilador GCC e suas dependências |
| 41:08 | como o GLIBC. Só o Windows que é completamente diferente dentre os principais sistemas operacionais. |
| 41:14 | E o Java nasceu com a promessa de permitir que você pudesse escrever programas que rodavam |
| 41:20 | em qualquer lugar, porque havia JVM para Linux, para Solaris, pra Mac, pra Windows. |
| 41:26 | Por isso ele se popularizou tanto tão rápido. E também coincidiu com o começo da bolha da internet que acelerou ainda mais a adoção |
| 41:33 | de Java. Vendo isso, a Microsoft não quis perder o bonde. Primeiro, aproveitando a experiência com Visual Basic e Visual C++ que compilavam binários |
| 41:43 | nativos compatíveis com Windows, eles contrataram o Anders Hejlsberg, criador do Turbo Pascal |
| 41:49 | e do Object Pascal do Delphi da Borland. Seu primeiro produto foi o Visual J++ que era uma versão de Java da Microsoft que compilava |
| 41:57 | pra uma JVM proprietária e com várias funcionalidades incompatíveis. Por exemplo, notável era que o Java também tinha um jeito de fazer bindings pra binários |
| 42:02 | nativos chamado JNI mas a no J++ a Microsoft fez uma forma diferente e discutivelmente melhor ou mais performática chamada RMI e o J++ fazia vários atalhos pra se ligar ao Windows de forma mais eficiente. A linguagem tinha a mesma cara do Java mas não era compatível com o Java da Sun. Por conta disso os programas compilados em J++ rodavam de forma mais eficiente só que |
| 42:12 | o bytecode era incompatível com a JVM da Sun e como pra se chamar Java precisava ser |
| 42:17 | compatível a Sun processou a Microsoft. O J++ acabou sendo descontinuado por conta disso mas as suas sementes é que deram origem |
| 42:27 | ao que você conhece como o CLR o Common Language Runtime, ao framework .NET e à linguagem |
| 42:33 | C#. Por isso as primeiras versões de C#, pra mim, tinham cara de Java misturado com Delphi. |
| 42:40 | Veja, como a JVM executa bytecodes binários, qualquer linguagem pode ser transformada nesses |
| 42:47 | bytecodes. A sintaxe que conhecemos como Java é só um deles. |
| 42:52 | Por isso hoje em dia você tem linguagens como Scala, Clojure e Kotlin que compilam |
| 42:57 | para o mesmo bytecode e rodam na JVM. Mas a Microsoft usou essa característica antes e além de C# já fez também Visual |
| 43:05 | Basic.NET e ambas compilavam pro bytecode do CLR. O CLR ao contrário da JVM fazia muitos bindinds direto pro sistema operacional pra conseguir |
| 43:16 | ter a melhor performance. Portabilidade não era importante porque bastava rodar onde o Windows rodava, e nessa época |
| 43:23 | a Microsoft ainda considera o mundo open source como inimigo, coisa que só veio a mudar nos |
| 43:29 | anos recentes. Essa é a grande diferença entre Java e .NET. Embora ambas sejam máquinas virtuais e os códigos compilem em bytecodes, o Java tinha |
| 43:39 | como meta rodar no maior número de dispositivos quanto possível e o .NET só em Windows. |
| 43:45 | Mas as coisas foram mudando. Essa ambição da Sun se mostrou muito a frente do seu tempo. |
| 43:50 | A Sun teve muitas ingerências, perdeu valor e foi comprada pela Oracle e desde antes disso |
| 43:57 | com a depressão depois do crash da bolha da internet em 2001 que ela evolui a passos de tartaruga. |
| 44:03 | Em paralelo no mundo open source, surgiu uma iniciativa ousada. A Microsoft abriu a linguagem C# como um padrão aberto Ecma, então Miguel de Icaza, do projeto |
| 44:14 | GNOME decidiu tentar implementar o CLR no Linux, esse projeto recebeu o nome de Mono. |
| 44:20 | Levou quase 10 anos pra conseguir de fato criar uma CLR e todo o framewortk quase totalmente |
| 44:26 | compatível com o da Microsoft. Porque não era só uma questão de fazer a máquina virtual e o compilador, era necessário |
| 44:33 | também reescrever do zero todas as bibliotecas que compõe o pacote .NET framework. |
| 44:39 | E muitas delas dependem de bindings para bibliotecas nativas do Windows como já falei. |
| 44:45 | Isso foi um dos maiores problemas pra conseguir compatibilidade no Linux. Por exemplo, as bibliotecas para fazer aplicativos desktop, tipo um Word da vida, usam bibliotecas |
| 44:55 | nativas do Windows pra gerar janelas nativas e não janelas diferentes como o Java fazia |
| 45:02 | com seu toolkit Swing. Do jeito do Java o peso era maior e a performance era menor. |
| 45:07 | Mas usando bibliotecas nativas a velocidade do C# e do .NET pra desenhar as mesmas janelas |
| 45:13 | era muito maior e mais comparável com o que o Visual Basic ou Visual C++ anterior faziam. |
| 45:19 | O Mono no Linux fazia bindings com o GNOME pra também conseguir ter performance similar. |
| 45:25 | Depois de muitos anos e com a troca de CEO com a saída de Steve Balmer e a entrada de Satya Nadella e sua política de boa vizinhança, a Microsoft se tornou finalmente mais amigável |
| 45:35 | ao mundo open source e acabou comprando a empresa de Miguel De Icaza, a Xamarin. |
| 45:41 | E o Mono foi renomeado como .NET Core e hoje está em caminho de substituir o antigo .NET |
| 45:47 | framework. E apesar do CLR suportar múltiplas linguagens na prática todo mundo programa ou em C# ou |
| 45:53 | em Visual Basic.NET mesmo. E pro episódio de hoje acho que já cobrimos bastante terreno. |
| 46:00 | Eu tentei explicar um pouco sobre como as coisas funcionam por baixo dos panos. A idéia de CPUs, sistemas operacionais, gerenciamento de processos e de memória. |
| 46:09 | As diferenças entre linguagens compiladas de forma estática e dinâmica. O que são interpretadores e o conceito de máquinas virtuais e bytecodes. |
| 46:18 | E também as diferenças de rodar coisas em paralelo com forks e com threads. Os anos 90 foram o terreno para o crescimento de Java e .NET no mundo mais proprietário |
| 46:29 | e em paralelo pra evolução do mundo open source como um todo, do Linux, e linguagens interpretadas como Perl e PHP. |
| 46:37 | Estamos ainda só começando o século XXI. No próximo episódio vamos precisar do que expliquei aqui pra você finalmente começarem |
| 46:45 | a entender as diferenças entre todas as linguagens modernas. Como eu já disse no episódio anterior, se eu fiz meu trabalho direito espero que vocês |
| 46:53 | tenham ficado com mais dúvidas do que quando começaram a assistir. Mandem suas dúvidas nos comentários, se curtiram o vídeo mandem um joinha, compartilhem |
| 47:03 | com seus amigos, não deixem de assinar o canal e clicar no sininho. Aguardem a parte 2 sobre tecnologias back end na semana que vem, a gente se vê, até |
| 47:09 | mais! |
