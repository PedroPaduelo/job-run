# Python? Java? Rust? Qual a Diferença? | Discutindo Linguagens

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=MI9cdxETA4c
- **Duração:** 49:14
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado), `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Hoje é dia de fazer um episódio que vinha postergando faz anos: falar sobre as principais |
| 0:07 | linguagens de programação em uso no momento. Quem acompanha o canal sabe que evito ao máximo mostrar código dessa ou daquela linguagem, |
| 0:15 | de vez em quando mostro uns trechos de javascript porque sei que a maioria sabe um pouco pelo menos, e em muitos casos uso pseudo-código que não existe quando o foco é o conceito. |
| 0:26 | Eu tenho algumas linguagens favoritas, obviamente Ruby, um pouco de Elixir, Crystal, todas linguagens |
| 0:32 | meio parecidas em sintaxe, embora diferentes por baixo, e mesmo assim acho que nunca mostrei código delas em nenhum video. |
| 0:38 | Mas hoje quero compartilhar algumas curiosidades técnicas e opiniões pessoais que muitos |
| 0:43 | assistindo provavelmente nunca pararam pra pensar. A intenção não é fazer prós e contras, falar bem ou mau de qualquer linguagem. |
| 0:51 | A idéia é fazer você enxergar sua linguagem favorita com outros olhos. (...) |
| 0:57 | Já vou avisar: meu objetivo não é dizer que linguagem X é melhor que linguagem Y |
| 1:05 | nem nada disso. Então os macacos de auditório de torcida organizada podem se retirar. Programação não é pra isso e código não liga pra sua "lealdade" a essa ou aquela tecnologia. |
| 1:15 | Na verdade tecnologia e inovação recompensam a deslealdade. Quem conhece mais tecnologias diferentes sempre vai ser melhor e na verdade esse video é |
| 1:24 | pra mostrar isso. Iniciantes vão ter seus níveis de ansiedade indo pras alturas porque vou mostrar um monte |
| 1:29 | de coisas que nunca viram. Não se aflijam, anotem os termos que não conhecem, estudem, depois voltem pra assistir |
| 1:36 | de novo. A primeira coisa que quero levantar é o seguinte: Python. Nos últimos anos aumentou rápido de popularidade, principalmente por causa de projetos como |
| 1:44 | Jupyter Notebooks, Pandas, Tensorflow, PyTorch e outros projetos relacionados a data science |
| 1:50 | e machine learning. Se você se interessa por essas duas áreas, acho que é seguro dizer que maioria dos cursos |
| 1:56 | e artigos a respeito vai usar uma ferramenta feita em Python. Por isso parece que Python é a linguagem que se deve aprender, certo? |
| 2:03 | Não está errado e não me entenda mau: apesar de não ser minha linguagem favorita, não tenho nenhum problema com Python. |
| 2:09 | O que quero demonstrar hoje é mais dar uma perspectiva pé no chão. Primeiro de tudo, na minha opinião, Python estava no lugar certo na hora certa. |
| 2:17 | Nos anos 90 a linguagem de script mais popular no nascente mundo de Linux foi Perl. |
| 2:22 | Acho que muitos iniciantes aqui nunca ouviram falar, mas muitos scripts de configuração e administração de sistemas Linux eram escritos em Perl. |
| 2:30 | E quando a web começou a surgir, as primeiras aplicações interativas web, o que conhecemos |
| 2:35 | hoje como programação back-end, era ou em C ou em Perl, porque essa linguagem era mais |
| 2:41 | flexível pra lidar com strings, com um HTML, por causa da sua principal funcionalidade: |
| 2:47 | Regular Expressions ou Regex. Mais especificamente PCRE ou Perl Compatible Regular Expressions. |
| 2:54 | Quem programa em Objective-C ou Swift pra iOS e Mac e já tentou usar regex, deve ter notado como é um pouco diferente do regex compatível com Perl. |
| 3:02 | Isso porque a Apple, a Microsoft usam regex com sintaxe baseado em ICU que é International |
| 3:08 | Components for Unicode. Eles são parecidos mas tem pequenas diferenças que podem confundir quem não sabe que existem |
| 3:15 | dois padrões diferentes de regex. Enfim, por causa de regular expressions, Perl sempre foi muito usado pra processar textos, |
| 3:23 | logs, até coisas como sequências de DNA em pesquisa de genoma e coisas assim, já que envolve muito pattern matching de sequências. |
| 3:30 | Porém, na virada do século, o pessoal de Perl quis dar passos maiores que as pernas. Eu lembro que queriam desenvolver um novo Perl, o Perl 6, como uma virtual machine que |
| 3:39 | suportasse múltiplas sintaxes de linguagem por cima, o projeto Parrot. Esse ciclo de desenvolvimento levou anos e nunca chegou no fim. |
| 3:47 | O Perl 5, que foi a última grande versão de Perl ficou estagnado e sem novidades por muito tempo. |
| 3:53 | Enquanto isso outras linguagens evoluíram mais rápido e de forma mais pragmática, e uma delas foi o Python. |
| 3:59 | Não sei se foi a RedHat quem adotou primeiro, mas o fato é que com a incerteza no futuro do Perl, acredito que muitos começaram a migrar pra Python. |
| 4:06 | Python também tinha uma sintaxe e ergonomia muito mais modernas. Perl não era originalmente orientado a objetos, embora tivesse como gambiarrar classes com |
| 4:15 | `bless`. Era uma linguagem dinâmica de tipagem fraca, então bugs por causa de coerção de valores |
| 4:21 | e tipos errados não era incomum. Mas Perl influenciou todas as linguagens de script que vieram depois, incluindo Python, |
| 4:28 | Ruby e o mais óbvio, PHP. De onde vocês acham que variáveis com cifrão vieram? De Perl. |
| 4:34 | O principal legado de Perl, na minha opinião, foi popularizar a viabilidade de linguagens dinâmicas pra aplicações web e popularizar o uso de regular expressions pra pattern matching |
| 4:44 | de textos. Várias linguagens até hoje usam a sintaxe específica de Perl, como em Ruby, Node.js, |
| 4:50 | acho que Go também porque usa a biblioteca "re2" que é compatível com PCRE. |
| 4:55 | Na realidade, nem todas são 100% compatível com Perl. Por exemplo, em Python, se usar a biblioteca "re", o método `match` tem comportamento |
| 5:03 | como se toda regex começasse com crase, que em Perl significa dizer pra começar o matching |
| 5:09 | do começo do string. Ele também não tem o operador global "/g", pra isso se usa o método "re.sub()". |
| 5:15 | São pequenas diferenças, mas pode confundir quem conhecia regex de Perl, por exemplo, se costuma usar Vim como editor, que suporta regex Perl. |
| 5:24 | De qualquer forma, linguagens que quase totalmente suportam a sintaxe de regex de Perl são Python, |
| 5:29 | Javascript, PHP, Ruby. Como falei antes, a biblioteca "re" de Python é só uma casca pra biblioteca Oniguruma, |
| 5:37 | que em japonês significa carro do demônio, sei lá porque. A gem Oniguruma de Ruby é a mesma coisa. |
| 5:42 | A classe RegExp de Javascript também. Oniguruma é uma das melhores e mais rápidas bibliotecas de regex que existem. |
| 5:49 | Mas não é a única. Linguagens como C#, C++, Go usam outra biblioteca, a "RE2". |
| 5:55 | Não confundir com Resident Evil 2. Acho que nem a Oniguruma e nem a RE2 forçam a sintaxe de Perl. |
| 6:02 | Eles oferecem o motor, mas os detalhes da sintaxe, cada linguagem pode configurar como quiser. |
| 6:07 | Por exemplo, C# tem a opção de usar "verbatim string literal" que é escrever a regex com |
| 6:12 | arroba na frente, assim não precisa escapar caracteres especiais dentro do regex com barra ao contrário. |
| 6:18 | Algumas linguagens não usam o estilo Perl e sim a sintaxe ICU, de International Components |
| 6:23 | for Unicode. Exemplos disso são a classe `java.util.regex` de Java, a classe `icu::RegexPattern` de C++, |
| 6:30 | a classe `NSRegularExpression` de Swift da Apple, as funções "preg_*" de PHP. |
| 6:36 | Eu pessoalmente gosto mais da sintaxe Perl. Quando precisava usar ICU pra programar mobile de iOS em Swift ou Objective-C, lembro que |
| 6:44 | vira e mexe tropeçava na sintaxe. 11 anos atrás fiz um pequeno experimento em Objective-C pra importar o Oniguruma e |
| 6:51 | adicionar sintaxe de regex de Perl pra programar iOS. É uma das poucas coisas que ainda sobrou no meu GitHub. |
| 6:58 | Maioria dos meus códigos sempre foi pra projetos de cliente por isso tenho bem pouca coisa aberta. |
| 7:03 | Essa foi uma delas. 11 anos atrás foi 2011, pouco mais de 2 anos depois que a App Store |
| 7:08 | abriu oficialmente. Além do regex não ser compatível com Perl, formatação de data e hora também não era |
| 7:13 | compatível com a biblioteca Time de Linux. Sabe a função strftime? Onde podemos pedir pra formar data e hora usando uma string de template como "%d/%m/%Y |
| 7:24 | %H:%M:%S"? Em Objective-C e depois Swift, usando a classe `DateFormatter` com o método `dateFormat`, |
| 7:30 | o mesmo template fica assim: "dd/MM/yyyy HH:mm:ss". É bem diferente e isso me incomodava porque Ruby usa o mesmo padrão de C mas de novo, |
| 7:41 | Objetive-C e Swift usam o padrão ICU. Diferente de Regex onde a sintaxe Perl ainda é forte em muitas linguagens em vez do formato |
| 7:48 | ICU, no caso de formatação de data e hora, o formato ICU é mais forte do que strftime |
| 7:54 | de C. C++, Python, Ruby, Elixir ainda usam o formato de C, mas Swift, Java, C#, até PHP e JavaScript |
| 8:02 | usam o formato ICU. Tecnicamente, por serem padrões internacionais de Unicode, o formato ICU é quem deveria |
| 8:07 | ser considerado o "correto", mas por direito, formatos derivados do mundo Unix e Linux continuam |
| 8:13 | sendo usados. E de novo, naquele projetinho de biblioteca que fiz pra Objective-C, além de importar |
| 8:19 | Oniguruma, também implementei uma versão de formatador de data e hora usando a função "strftime" da biblioteca "time" de C. |
| 8:27 | Assim eu poderia usar os formatos de Linux e contrariar o formato ICU. E por que? Só pra mostrar que era possível. |
| 8:33 | E eu contei essas duas histórias pra ilustrar um ponto. Não sei se vocês entendem que muita coisa de Javascript ou Python não são escritos |
| 8:41 | em Javascript ou Python e sim em C. A classe RegExp de Javascript ou "re" de Python são meras casquinhas mas por baixo chamam |
| 8:50 | bibliotecas escritas em C. Eu digo isso porque muitas linguagens são escritas nelas mesmas. |
| 8:55 | O compilador de Rust é escrito em Rust. O compilador de Go é escrito em Go. Muito do OpenJDK de Java é escrito em Java. |
| 9:02 | Linguagens compiladas costumam muitas vezes ser escritos nelas mesmas. Isso não torna automaticamente uma linguagem melhor ou pior. |
| 9:10 | Apenas facilita pros desenvolvedores das linguagens não ter que ficar mudando de linguagem o tempo todo. |
| 9:16 | Por exemplo, escrever o compilador em C mas as bibliotecas em Rust. Lembrei disso quando conversei com os criadores e mantenedores de Ruby e eles comentando que |
| 9:25 | escrevem mais C que Ruby. Isso é mais uma curiosidade, não comecem a brigar em Reddit dizendo que sua linguagem |
| 9:31 | é melhor porque é bootstrapped, ou seja, escrita nela mesma. Mais importante é o seguinte: linguagens interpretadas de script como Python, Ruby, |
| 9:40 | Javascript ou PHP herdam muitas características da plataforma onde nasceram: do C. |
| 9:46 | Diferente de Java ou Go que é na maior parte escrita nelas mesmas, linguagens de scripts costumam parecer mais "cascas" pras funcionalidades de C. |
| 9:55 | Veja a função de formatação de data e hora "strftime" de Ruby ou "datetime.strftime" de Python. |
| 10:01 | Por que acha que tem esses nomes? Porque herdaram da função strftime da biblioteca time, cujo cabeçalho se chama "time.h". |
| 10:10 | Se num Linux, abrir um terminal e digitar "man strftime" vai dar os detalhes da função |
| 10:15 | original de C. Essa função fica disponível numa biblioteca compartilhada chamada "libc" ou "glibc", que |
| 10:22 | praticamente todo programa que roda em Linux carrega e usa. Vamos ver mais exemplos? Em Python, claro, muitos dos métodos do módulo "os" são derivados da libc. |
| 10:31 | Temos "os.mkdir()" pra criar diretórios, não por acaso, é o mesmo nome do comando que você usa em qualquer terminal de linha de comando pra criar diretórios, porque ambos |
| 10:40 | usam a mesma função da libC. Ou "os.getenv()" que é o mesmo nome da função da libC pra pegar variáveis de ambiente. |
| 10:48 | Tem funções do módulo "ctypes" que, como o nome diz são "tipos de C", como "ctypes.memcmp()" |
| 10:55 | que compara dois blocos de memória e retorna um inteiro. Em particular vários métodos do módulo "math" herdam funções do cabeçalho "math.h" |
| 11:03 | da libC como "math.sin()" pra calcular seno ou "math.pow()" pra calcular a potência de |
| 11:09 | um número. A mesma coisa vale pra Javascript, Ruby, PHP. E eu quero pegar esse gancho pra voltar pros projetos mais populares de Python. |
| 11:16 | Vamos pegar o Pandas que é uma ferramenta muito poderosa, flexível e razoavelmente amigável de usar pra fazer análise e manipulação de dados. |
| 11:25 | Povo de data science acho que começa aprendendo Pandas. Se abrirmos a página do projeto no GitHub, podemos ver que a maior parte é escrita em |
| 11:33 | Python mesmo. Mas essa não é a história toda. Como todo bom projeto moderno de Python, tem um arquivo de "requirements" que lista as |
| 11:40 | dependências que o projeto precisa carregar pra funcionar, vamos dar uma fuçada. Tem uma quantidade enorme de bibliotecas, mas 2 das principais incluem o numpy e scipy. |
| 11:49 | Vamos começar pelo numpy que é importantíssimo porque fornece coisas como array multidimensional, |
| 11:55 | funções de álgebra linear, transformada de Fourier e mais. Vamos abrir o projeto no GitHub e olha só: um terço é código C. |
| 12:02 | Um dos pontos fortes do numpy é justamente facilitar integrar com bibliotecas em C e |
| 12:07 | Fortran. É por isso que pra gerar o pacote pra Mac, por exemplo, o script que tá na wiki manda instalar o pacote de Fortran. |
| 12:14 | Ou na página de wiki pra Windows, precisa do MSVC que é o pacote de compiladores de |
| 12:19 | C e C++ do Visual Studio da Microsoft. Sim, pra gerar o pacote de um projeto de Python, precisa de compiladores de C, C++ e Fortran. |
| 12:28 | Sabiam disso? O numpy é requisito pra usar o scipy que é um conjunto de módulos científicos pra |
| 12:34 | estatística, otimização, integração, álgebra linear, processamento de sinais e imagens e muito mais. |
| 12:40 | Ele usa os arrays multidimensionais de numpy por exemplo. E no que SciPy é feito? |
| 12:45 | Quase um quinto do código é Fortran e quase outro quinto é C e C++. Ou seja, pelo menos dois quintos do projeto todo também não é em Python e também precisa |
| 12:54 | de compiladores de Fortran, C e C++. Todo projeto de data science feito em Python precisa usar numpy e scipy, que são os grandes |
| 13:02 | diferenciais, e eles são feitos em boa parte em Fortran, C e C++ e não em Python. |
| 13:07 | E isso não é pra minimizar, denegrir, ou falar mal de Python, mas sim pra quem não sabia entender que só porque a cara da frente é numa linguagem, não significa que por |
| 13:16 | baixo do capô também é. E o Tensorflow que todo mundo fica hypado pra machine learning? |
| 13:21 | Vamos ver a página no GitHub? Olha só, bem mais da metade do código é em C++, só um quinto dele é Python. |
| 13:28 | O grosso, o motor mesmo, é todo em C++. E o PyTorch que é redes neurais acelerado por GPU? |
| 13:35 | Metade desse código é em C++. E isso porque eu não estou olhando as dependências no arquivo de requirements. |
| 13:40 | Uma parte significativa que não tá contando aqui é a biblioteca de CUDA da NVIDIA e os |
| 13:46 | shaders pra aceleração em GPU, que podem ser escritos em várias linguagens, incluindo Python mas compilam pra HLSL ou GLSL que é o OpenGL Shader Language. |
| 13:56 | Eu falo sobre linguagens de shaders e GPU no video da longa história de CPUs e GPUs, |
| 14:01 | depois dêem uma olhada. Pra usar esses projetos, sabendo um pouco de Python é suficiente, mas se alguém queria |
| 14:07 | realmente entender como redes neurais, aceleração via GPU pra esse tipo de computação realmente |
| 14:12 | funciona, obrigatoriamente não é Python e sim C++ e linguagens de shaders pra GPU. |
| 14:18 | Eu estou sendo pedante nisso porque da forma como muita gente faz propaganda, parece que é tudo feito em Python e basta saber Python pra resolver tudo nessa área, o que não |
| 14:27 | é verdade. E de novo, meu objetivo não é pegar no pé do Python. Como contei no começo, ele estava no lugar certo na hora certa quanto Perl 5 foi desaparecendo. |
| 14:36 | Linguagens de script como Perl ou Python, que foram feitos pra funcionar muito perto do sistema operacional, são ótimos pra funcionar como cascas pras bibliotecas de alta performance |
| 14:47 | feitos em C ou C++. Era esse tipo de coisa que se fazia com Perl, que era menos ruim do que escrever scripts |
| 14:54 | de SH ou Bash, e depois passamos a usar Python que, com sua sintaxe bem simples e espartana, |
| 15:00 | caiu como uma luva pra administradores de sistemas que precisavam fazer coisas rápidas. Com o tempo passou a ser adotado em distros com programas como o Conda que é escrito |
| 15:10 | em Python e serve pra instalar e gerenciar pacotes. Não confundir com Anaconda que é outro projeto pra computação científica. |
| 15:17 | Daí o pessoal de pesquisa do Google passa anos desenvolvendo um Tensorflow da vida em |
| 15:23 | C++. Nesse estágio ele é difícil de usar, precisa saber C++. Em cima dele fizeram scripts em Python e um ferramental com mais usabilidade e mais simples |
| 15:32 | de usar pra maioria das pessoas. Essa é vantagem do Python. Diferente do Tensorflow de Python, o tfjs ou Tensorflow.js é na maior parte escrito |
| 15:42 | realmente em TypeScript e Javacript. Assim como em Python as partes que exigem performance e falar diretamente com o hardware |
| 15:49 | como GPUs, são feitos em C++, mas na versão de Javascript ele pode rodar no navegador e utiliza o suporte a WebGL e Web Assembly. |
| 15:57 | A versão de Javascript não faz tudo que a de Python mas é suficiente. Tem o Tensorflow Lite pra rodar em smartphones também. |
| 16:05 | Enfim, o principal é entender que quando precisamos de performance normalmente precisamos mais do que Python. |
| 16:11 | E pra não pegar só no pé do Python, Javascript é similar. Tudo que é impressionante e roda rápido no navegador não é mérito do Javascript |
| 16:19 | e sim do navegador que oferece APIs como WebGL pra dar acesso à aceleração via GPU. |
| 16:25 | E todo navegador é feito em C++. Entendam, toda linguagem interpretada depende muito do sistema operacional e outras bibliotecas |
| 16:33 | instaladas. Voltando ao ponto onde linguagens como Python, Javascript ou PHP dependem de bibliotecas |
| 16:39 | como a LibC, - tanto que os nomes das funções são as mesmas das versões em C -, e se a |
| 16:45 | LibC costuma vir em toda distro Linux mas não em Windows ou Mac, como que faz pra rodar Python em Windows? |
| 16:51 | Vamos pro GitHub do CPython e vou te mostrar o que tem embaixo do tapete. Se procurarmos dentro desse repositório por "ifdef MS_WINDOWS" temos 8 páginas de resultados |
| 17:02 | e olhem esses trechos. Se nunca programou em C e não sabe o que é pré-processamento, deixa eu pegar um arquivo |
| 17:08 | aleatório desse resultado. Vamos abrir o arquivo "_ssl.c". Olha aqui na linha 628 tem um "ifdef MS_WINDOWS". |
| 17:16 | Se não existisse pré-processamento seria como se tivéssemos duas versões desse arquivo. |
| 17:21 | Um chamado "_ssl.c" que teria esse trecho assim e outro arquivo chamado "_ssl.c-ms_windows" |
| 17:28 | cujo trecho seria escrito dessa outra forma aqui. Conseguem ver a diferença? O compilador, se estiver em Windows, vai compilar o código com esse "if" a mais chamando essa |
| 17:38 | função "SetFromWindowErr" que só precisa no Windows. Em Linux ou Mac esse código não existe. |
| 17:45 | E isso acontece em dezenas de arquivos, 8 páginas de resultados no GitHub. Ocódigo do CPython pra Windows é diferente da versão de Linux. |
| 17:54 | Por isso o CPython de Windows não é igual ao CPython de Linux que não é igual ao CPython |
| 18:00 | de Mac. Isso vale pra tudo PHP de Windows, Javascript de Windows. Então vamos falar de Node.js. |
| 18:06 | O Node é basicamente um projeto de C++. Um quinto desse projeto é só C++ mas precisamos falar de uma das dependências, o libuv. |
| 18:14 | O coração da principal funcionalidade do Node, que é o famoso eventloop, o reactor, é implementado quase 100% em C. |
| 18:21 | Vamos abrir a página dele no GitHub. Olha só aqui embaixo, 97% de C, mas o resto é só coisas administrativa, por isso é |
| 18:29 | 100%. E o que é a libuv. Novamente, sendo uma biblioteca de C, num terminal de Linux podemos usar o comando "man" |
| 18:35 | que, se alguém tinha dúvida, significa "manual" e não "homem". Normalmente bibliotecas de C instalam sua documentação nesse formato. |
| 18:43 | E como diz aqui, esse projeto foi feito pelos desenvolvedores do Node.js pra ser uma biblioteca |
| 18:49 | com capacidade pra rodar em diversas plataformas como Windows, Mac, BSD e é quem abstrai as |
| 18:54 | funcionalidades de I/O assíncrono que o Node precisa pro seu reactor. |
| 19:00 | Cada sistema operacional implementa I/O assíncrono diferente. Linux costuma ter suporte a epoll, UNIX BSD tem Kqueue, Windows tem IOCP que é I/O Completion |
| 19:10 | Ports, que muitos argumentam que é superior a epoll ou kqueue. Ou seja, a principal funcionalidade do Node só é possível porque quem de fato fornece |
| 19:19 | o músculo é o sistema operacional. O libuv é mais uma casca em C++ pra abstrair essas diferentes formas de fazer I/O assíncrono |
| 19:28 | e tornar possível o Node rodar em qualquer sistema operacional. E o Deno, o competidor que muitos consideram melhor que o Node? |
| 19:35 | Eu nem quero tentar entrar nessa discussão de quem é melhor. Mas se abrirmos a página GitHub do Deno, vemos que mais da metade, mais de 60% é escrito |
| 19:45 | em Rust. Ahhh será que é por isso que ele é melhor que o Node então? Na verdade não. Se procurarmos por libuv nesse repositório, vemos que o Rust importa as mesmas funções |
| 19:55 | do libuv do Node, então em termos do eventloop, ambos fazem a mesma coisa. |
| 20:00 | Claro que podem parametrizar pra se comportar diferente, mas a fundação é a mesma e, de novo, é C++. |
| 20:06 | Eu poderia passar o dia todo dando exemplos em Ruby, em PHP, e até mesmo em Java. Mas ué, tudo que é de Java não era escrito todo em Java? |
| 20:15 | Na realidade não. Como último exemplo, vamos abrir a página do OpenJDK e olha aqui embaixo, 13% do Java |
| 20:21 | é escrito em C++. Mas o que? Vamos ver, olha só, muita coisa do HotSpot que é o motor do JIT ou Just in Time Compiler |
| 20:29 | da JVM é escrito em C++. Nem mesmo o Java, que nasceu nos anos 90 com a frase de "Write Once, Run Anywhere" é puramente |
| 20:37 | feito em Java. E se isso não ficou claro, olha a página de resultados de arquivos C++: tem pelo menos 100 páginas de resultados, uma parte considerável da JVM não é feito em Java. |
| 20:48 | E isso não é perseguição. Ruby, PHP, DotNet, Go, Rust, Swift, e todo o resto tem partes consideráveis que depende |
| 20:56 | de C e C++, coisas como a LibC, coisas de criptografia como OpenSSL ou alternativas |
| 21:02 | como libsodium. Imagina se toda linguagem tivesse que fazer criptografia do zero? O mundo já tem bugs de segurança demais. |
| 21:09 | É melhor todo mundo reusar o que já existe de melhor e mais maduro. E isso só falando em Linguagens. |
| 21:14 | Quem fez Ciências da Computação decentemente não perde muito tempo com discussões de melhor linguagem. |
| 21:20 | Mas pessoal de desenvolvimento web, por alguma razão vira e mexe entra nesse tipo de argumento. Então só pra complementar, além de linguagens, no mundo web temos diversos outros serviços |
| 21:30 | e componentes que precisamos usar no nosso dia a dia. Por exemplo, no que é escrito o banco de dados Postgres? |
| 21:36 | É mais de 85% de C. E o MySQL, mais especificamente o MariaDB? |
| 21:42 | Metade é C++ e quase 40% é C. Bom, mas isso deve ser porque são velhos né, um banco de dados mais novo como MongoDB |
| 21:48 | deve ser em outra coisa mais moderna? Não, 72% é C++. E o Redis que usamos pra cache ou filas o tempo todo? |
| 21:57 | É quase 80% de C. Mas não significa que tudo é em C ou C++. Vejamos o banco de dados distribuído Cassandra, esse é quase 100% feito em Java e não é |
| 22:06 | o único. O Apache Kafka que é o sistema de filas que falei no episódio passado, é quase 75% em Java e 22% em Scala, que é outra linguagem que roda na JVM então 97% é Java. |
| 22:17 | E falando em sistemas de fila, outro com excelente reputação e maturidade e que, se não me engano, era uma das estrelas por trás de serviços como Whatsapp, é o RabbitMQ que |
| 22:26 | é escrito em Erlang, a plataforma por trás da moderna linguagem Elixir. E aqui vem outra coisa que eu queria explicar. |
| 22:34 | Tanto Java quanto Erlang são muito bons pra construir sistemas distribuídos, de forma mais produtiva do que fazer em C ou C++. |
| 22:42 | Go também serviria, mas ele ainda é muito novo comparado com os outros, talvez o próximo grande banco de dados seja em Go, não sei. |
| 22:48 | Ele ainda não se provou nesse espaço. Então deixa eu dar minha perspectiva sobre onde cada linguagem tem mais força. |
| 22:55 | Todo sistema operacional hoje é feito numa mistura de C e C++. E quando eu falo sistema operacional ou OS quero dizer coisas como a kernel e drivers |
| 23:04 | de dispositivos, os componente que rodam no Ring Zero de maior privilégio. Todo o resto, nossos programas e scripts rodam no Ring 3, que tem menos privilégios, o que |
| 23:13 | chamamos de userland. Todo programa em userland precisa usar o kernel do OS como intermediador pra falar com dispositivos |
| 23:20 | como SSD, placa de rede, placa de video, teclado, mouse e tudo mais. O único que tem permissão pra falar com o hardware diretamente costuma ser o kernel |
| 23:30 | e seus drivers, que rodam no mesmo espaço de memória. Isso não vai mudar por muito tempo. |
| 23:35 | A kernel XNU da plataforma Darwin do Mac, a kernel NT do Windows, a kernel do BSD UNIX, |
| 23:41 | que eu não lembro se tinha codinome. Dispositivos Android usam a kernel do Linux. Dispositivos iOS como iPhone usam uma kernel derivada do MacOS. |
| 23:49 | Existem outras de nicho, mas essas são as principais e vão continuar sendo por muito tempo. |
| 23:55 | E todas elas tem uma coisa em comum: são escritos em C e C++. E porque isso importa já que no final, depois de compilar, vira tudo um binário? |
| 24:03 | Porque essas kernels expõe suas funcionalidades como funções de C, que podemos interfacear |
| 24:09 | com os diversos arquivos de cabeçalho com extensão ".h". Pra realmente entender isso, precisa entender um pouquinho de como compilação de C funciona. |
| 24:17 | Eu expliquei parte disso em episódios como do Hello World, a diferença de arquivos texto e binário e o episódio de linguagem interpretada versus compilada. |
| 24:26 | Depois assistam pra entender. A explicação que vou fazer agora acho é um pouco errado, mas é pra simplificar o modelo na cabeça. |
| 24:32 | Se alguém tiver uma explicação de forma mais simples, mandem nos comentários abaixo. Mas pense num driver, como driver da NVIDIA pra placa de video, ou driver pra placa de |
| 24:41 | rede e coisas assim com uma DLL de Windows ou uma biblioteca .SO de Linux. |
| 24:47 | A kernel depois que boota começa a carregar esses drivers. Pense um "import" em Python ou Javascript. |
| 24:53 | As estruturas de dados e funções que esses drivers implementam vão existir no mesmo espaço de memória que as outras estruturas da própria kernel. |
| 25:02 | É como se a kernel já viesse embutida com esses drivers. Uma vez carregado, o driver enxerga tudo que a kernel enxerga e vice versa. |
| 25:10 | Lembra ponteiros? A kernel pode manipular diretamente uma struct de uma placa de rede, por exemplo. |
| 25:16 | Isso é necessário porque no nível da kernel gostaríamos de ter a maior performance possível, o menor número de abstrações. |
| 25:23 | A kernel ideal não desperdiça recursos fazendo indireções e abstrações. Por causa disso você nunca vai conseguir fazer um driver em Javascript, Python, Java |
| 25:34 | ou Erlang. O interpretador de Javascript, como o Google V8 ou o Spidermonkey da Mozilla, assim como |
| 25:41 | a JVM de Java ou a BEAM de Erlang, poderíamos classificar mais ou menos como máquinas virtuais. |
| 25:47 | A intenção delas é abstrair o sistema operacional por baixo, a kernel. Assim um programador de Python pode escrever praticamente o mesmo código pra rodar em |
| 25:57 | Mac ou Windows ou Linux e o interpretador do Python vai se virar pra fazer funcionar embaixo. |
| 26:03 | A JVM é a que mais esconde o OS por baixo, Python ou Javascript escondem menos e às |
| 26:08 | vezes precisa fazer um "if windows faça X else if Linux faça Y" mas é raro precisar. |
| 26:14 | Pra ser capaz de criar um driver de dispositivo que consiga interagir direto com a kernel, |
| 26:19 | em particular carregar no mesmo espaço de memória, precisa ser uma linguagem compilada que gera binários com a mesma ABI de C, ou seja cujo binário seja compatível com binários |
| 26:30 | gerados pelo compilador de C em termos de tipos de dados básicos terem o mesmo tamanho, |
| 26:36 | mesmo alinhamento, mesmo layout de structs e unions e chamadas de funções sigam as |
| 26:42 | mesmas convenções, tipo uma compatibilidade de API no nível binário. Outra coisa que talvez você não saiba de linguagens compiladas como C, C++, Rust, Nim, |
| 26:53 | D ou Go e linguagens tecnicamente interpretadas como Python, Ruby, Javascript, PHP, e até |
| 27:00 | Java, C# ou Erlang e Elixir. Eu digo "tecnicamente interpretadas" porque Java não gera binário nativo. |
| 27:07 | Sim, Java ou Javascript tem coisas como JIT na JVM ou V8, que no final pode gerar binário |
| 27:13 | de alguns trechos, mas originalmente não são binários nativos. Só em tempo de execução. O problema de não ter binário nativo de antemão é que não sabemos o endereço de |
| 27:23 | funções e estruturas de dados. Por isso não temos como fazer um código de C que aponta diretamente pra essas estruturas |
| 27:29 | usando coisas como ponteiros. Mesmo assim é possível integrar binário feito em Rust ou C com programas em Java ou |
| 27:37 | Javascript. Por exemplo, um JavaScript consegue importar bibliotecas como OpenSSL, só que um String |
| 27:43 | de Javascript não é um tipo de dados igual a um String de C. Um String de Python não é igual a um String de C#, então como faz pra uma linguagem falar |
| 27:52 | com outra? A única forma do binário gerado por uma linguagem conseguir usar um tipo de dados |
| 27:57 | diretamente via ponteiro de outra linguagem, só é possível se são binariamente iguais, |
| 28:03 | tenham a mesma ABI. Quando não tem, precisa existir um processo de conversão. Você já deve ter ouvido falar dos termos serializar e desserializar ou marshalling |
| 28:11 | e unmarshalling. A grosso modo, no mundo de web seria mais ou menos como converter uma estrutura XML |
| 28:19 | num JSON ou vice versa. O que acontece quando se chama uma API que só devolve XML mas precisa passar pra uma |
| 28:26 | classe ou outra biblioteca que só entende JSON? Precisa converter, só que conversão tem o seguinte defeito. |
| 28:32 | Veja este exemplo de XML que a API hipotética devolveria, ela tem 845 bytes. |
| 28:38 | Digamos que fizemos um código pra converter de XML pra JSON ou seja, faz marshall entre |
| 28:44 | os dois formatos, e eis o JSON equivalente: Esse JSON é um pouco menor, com 808 bytes. |
| 28:49 | O importante é o seguinte: nesse instante a função que converte tem em memória as duas versões, ocupando o total de 845 + 808 que dá mais de 1600 bytes. |
| 29:00 | Agora pense no nível de uma struct de C versus um objeto JSON de Javascript. Não tem como criar um ponteiro pra um objeto JSON a partir de um código C e tentar usar |
| 29:09 | como se fosse uma struct. Se fossem compatíveis, não precisaria duplicar memória, mas como não são compatíveis, |
| 29:14 | precisamos fazer marshalling, duplicando a memória usada. Eu acho que muito iniciante não pensa assim, mas comece a enxergar onde memória é duplicada. |
| 29:23 | Por exemplo, quando você abre seu navegador e pede uma página web pra amazon.com por exemplo, sabemos que o servidor web da Amazon vai processar o que precisar pra no final |
| 29:32 | gerar um string gigante que é o conteúdo HTML pra te responder. Esse HTML está ocupando memória no servidor. |
| 29:39 | Quando ele envia pra você, e chega no seu navegador, o navegador tem uma cópia dessa string. |
| 29:44 | Tanto o servidor web quanto seu navegador tem uma cópia do mesmo HTML, duplicando memória |
| 29:49 | nos dois lugares. Isso é inevitável. O mesmo vale pra um script feito em Javascript ou Python. |
| 29:56 | Lembra da tal função strftime pra formar data e hora que falei lá no começo do episódio? |
| 30:02 | Por baixo é uma função em C. No Python criamos a String "%d/%m/%Y" pra formatar a data e chamamos "datetime.strftime". |
| 30:11 | Por baixo essa função vai chamar a função da LibC que também chama "strftime", pra isso precisa criar uma String de C, mas a String de Python não é compatível com String |
| 30:20 | de C, então precisa converter e isso vai duplicar esse String. Esse é um dos custos escondidos que tem em várias linguagens quando integram com bibliotecas |
| 30:29 | locais feitas em C por exemplo, ou quando fazemos chamadas remotas pra APIs de microserviços |
| 30:35 | ou servidores de banco de dados. Várias estruturas de dados como Strings estão o tempo todo sendo duplicados pra converter |
| 30:42 | num formato que o outro lado entende. O exemplo que dei de XML e JSON são pequenos, nem 1 kilobyte, mas no mundo real, quem já |
| 30:50 | trabalhou em projetos de verdade sabe que estamos transitando documentos muito maiores que isso, de centenas de usuários o tempo todo. |
| 30:56 | É uma das razões de tanta diferença no uso de recursos entre diferentes linguagens |
| 31:01 | ou diferentes bibliotecas. Quando Java tinha a noção de escrever tudo em Java, ou seja, tudo rodando dentro do mesmo |
| 31:08 | processo da mesma JVM, onde todas as bibliotecas também seriam em Java, não era só pra ser |
| 31:14 | bonito. Uma das vantagens é que se tudo fosse feito em Java, internamente não precisa ter marshalling |
| 31:20 | e unmarshalling, poderia lidar diretamente com referências pras estruturas de dados. Sendo que se integrar como uma biblioteca feita em C usando o recurso de JNI ou Java |
| 31:30 | Native Interface, precisa existir uma tradução entre o layout do espaço de memória de Java |
| 31:35 | pro espaço do C. O mesmo vale pra outras linguagens que não trabalham com os mesmos tipos de C. |
| 31:41 | Se ficou abstrato até aqui, deixa eu mostrar um exemplo super besta em Python. Considere o seguinte trecho de código em Python: |
| 31:49 | Aqui eu estou importando um módulo qualquer feito em C e em seguida chamo uma função declarada nesse módulo passando um String qualquer. |
| 31:57 | Vamos ver como teríamos que fazer essa função em C. Primeiro declaro a tal função `c_function` que recebe uma string e imprime na tela. |
| 32:05 | Um string em C é só um array de caracteres que termina com caracter nulo. Já uma string em Python é um objeto, uma estrutura de dados bem diferente. |
| 32:15 | Por isso embaixo declaramos uma segunda função chamada `py_c_function` que recebe um objeto |
| 32:20 | Python cujo tipo é um ponteiro pra `PyObject` chamado `args`. O primeiro parâmetro é o `self` que todo método de Python declara explicitamente, |
| 32:30 | o equivalente `this` em Javascript, por exemplo. O importante nessa função é essa `PyBytes_AsString` que vai devolver o ponteiro pro array de chars |
| 32:39 | que está nessa variável `py_s`. Agora, praquele código em Python conseguir chamar esse código em C, precisamos de outro |
| 32:46 | código que vai intermediar isso, escrito em Cython com extensão ".pyx" mais ou menos |
| 32:52 | assim: Esse é o código que faz o tal marshalling, ou conversão, do objeto de String do Python |
| 32:58 | pra um array de char, é isso que faz o método "encode" da String, duplica a string. |
| 33:04 | Isso é importante porque o objeto de String de Python está sob controle do garbage collector de Python. |
| 33:09 | Digamos que ele decida que ninguém tá usando mais essa String e limpa da memória. Mas no lado do C, que o garbage collector não enxerga, a String ainda era necessária, |
| 33:18 | daí iria crashear o programa. Mas passando uma cópia separada, agora cada um tem seu próprio string e um não pisa |
| 33:24 | no pé do outro, mas o custo disso foi duplicar essa string. É assim que linguagens como Python, Javascript, Ruby ou PHP fazem pra falar com funções |
| 33:33 | de bibliotecas em C: via marshalling e unmarshalling de estruturas de dados, onde cada lado gerencia |
| 33:39 | a memória do seu jeito. No lado do Python o garbage collector dele se vira com os objetos que ele criou. |
| 33:44 | E do lado do C vai usar, por exemplo, malloc e free, pra lidar com seu espaço de memória. |
| 33:49 | Por isso que precisa duplicar memória na comunicação entre eles e por isso é mais pesado. E qual a diferença com uma linguagem que compila binário nativo compatível com C |
| 33:59 | como Rust? Vamos fazer a mesma coisa usando Rust agora. Eis um exemplo de um código Rust que chama uma função de alguma biblioteca C qualquer |
| 34:07 | que recebe uma String como parâmetro, e sendo em C, sabemos que String de C é sempre um |
| 34:12 | ponteiro pra um array de chars terminado em nulo: Esse "extern C" é pra declarar a assinatura da função C externa que vamos chamar, cujo |
| 34:21 | nome é `c_function` de novo e o parâmetro é o ponteiro pro array de char. Na função `main` começamos criando um String de Rust. |
| 34:29 | Só que, assim como no caso do Python, um String de Rust é um objeto, uma estrutura de dados diferente de array de char, por isso criamos uma `CString` que existe no módulo |
| 34:38 | "std::ffi" pra converter o String de Rust num String de C. Finalmente, dentro de um bloco inseguro, `unsafe` chamamos a função de C passando esse novo |
| 34:48 | String de C como ponteiro. Assim como em Python, tivemos que duplicar a memória pra converter os strings. |
| 34:55 | Mas em Rust podemos pular a parte de criar a string de Rust e direto já trabalhar com |
| 35:00 | String de C. Pra demonstrar isso deixa eu começar fazendo uma nova função em Rust besta que recebe |
| 35:06 | um String e converte tudo pra maiúsculo: Simples, recebe uma referência pra um String e retorna outro String. |
| 35:13 | Agora vamos ver a mesma função mas usando direto String de C em vez do String de Rust: |
| 35:19 | Eu não sou super fluente em Rust então não sei se tem jeito melhor de fazer isso, mas veja a diferença. |
| 35:24 | Agora o parâmetro é direto um string de C e devolve um string de C também. Um objeto de String de Rust tem métodos conveniente como "to_uppercase" pra transformar tudo em |
| 35:35 | maiúsculo. Mas pra trabalhar em cima de um String de C, precisamos manualmente iterar caracter a caracter do array e transformar em maiúsculo com o método "to_ascii_uppercase". |
| 35:44 | Pra fazer código Rust compatível com estrutura de C sem ficar convertendo em objetos nativos |
| 35:50 | de Rust, que são mais convenientes mas duplica memória, precisamos praticamente escrever C usando sintaxe de Rust. |
| 35:58 | Não vai ser o código mais bonito do mundo, mas em casos mais complexos que esse certamente |
| 36:03 | vai ser melhor do que escrever C na mão, porque podemos contar com os recursos mais avançados de gerenciamento de memória e segurança que o compilador do Rust nos fornece. |
| 36:12 | Mas se alguém tinha dúvidas de como trabalhar com Rust e C, por exemplo, na kernel do Linux, |
| 36:18 | esse é um exemplo besta que ilustra como é mais ou menos. Agora é minha opinião, mas dado o que expliquei até agora, o que eu penso de linguagens é |
| 36:26 | o seguinte: se quiser fazer programação de sistemas, ou seja, coisas de baixo nível como drivers de dispositivo ou mesmo componentes de infraestrutura como a stack TCP, o certo |
| 36:37 | é usar C, C++ e agora Rust ou até linguagens meio desconhecidas mas de mais alto nível |
| 36:44 | e compiladas como Nim ou a linguagem D, que como o nome diz, foi pensado pra ser sucessor de C mas nunca conseguiu popularidade, talvez porque Rust e Go surgiram no meio do caminho |
| 36:54 | e meio que roubaram os holofotes. Numa camada acima vem construção de ferramentas de administração e infraestrutura. |
| 37:01 | Antes muitos faziam bibliotecas em C como um oniguruma pra regex, e pra facilitar o |
| 37:07 | uso, criavam clientes com linguagens dinâmicas de script como Python ou Perl da vida. |
| 37:12 | Mas Rust e Go tornaram menos dolorido escrever esse tipo de software. A sintaxe é mais moderna e limpa do que C ou C++ então não é incomum que não precise |
| 37:21 | mais fazer scripts de Python por cima pra facilitar o uso. Exemplo disso é um Docker, feito em Go. |
| 37:27 | Antigamente alguém poderia criar um libdocker em C e um script chamado Docker em Python |
| 37:33 | que integra com essa lib pra ser a ferramenta de linha de comando. Agora podemos usar só Go ou só Rust. |
| 37:39 | Go e Rust geram binários quase tão eficientes quanto C ou C++ e no caso de Rust até mais |
| 37:46 | eficientes e mais seguros em muitos casos. Nos últimos anos o mundo Linux ganhou várias ferramentas como o terminal Alacritty feito |
| 37:53 | em Rust que eu gosto bastante, e tem esta página com várias ferramentas alternativas escritas em Rust que eu uso no dia a dia como o "exa" que substitui o "ls", o "procs" que |
| 38:04 | substitui o "ps", "fd" que substitui o "find" e muito mais, depois dêem uma olhada. |
| 38:09 | Depois entramos na categoria que não expliquei muito que são sistemas distribuídos. São softwares como bancos de dados ou sistemas de armazemento de volumes grandes de dados. |
| 38:19 | Aqui eu vejo muitas soluções que saíram do ecossistema Apache, como Apache Hadoop, Apache Solr, Apache Spark, Apache Kafka, Apache Cassandra e muito mais, todos feitos em Java. |
| 38:31 | Precisava ser em Java? Não, por exemplo, existem alternativas como a DataStax que é Cassandra escrito em C++. |
| 38:38 | Mas o que surgiu desse esforço massivo da Apache foi um ecossistema de bibliotecas e |
| 38:44 | ferramentas que facilitam o desenvolvimento de sistemas distribuídos, como o famoso ZooKeeper |
| 38:50 | que é o componente responsável pelo consenso entre diversos nodes de um sistema distribuído. |
| 38:55 | Se isso soou grego, pensa assim. A grande vantagem de um banco de dados Cassandra é conseguir aumentar a capacidade adicionando |
| 39:02 | novos servidores no cluster. O sistema se coordena pra receber esse node e passa a distribuir o armazenamento e processamento |
| 39:09 | pra ele. Se um node falha, o sistema de consenso lida com isso também, via eleições por exemplo. |
| 39:15 | São soluções pra quem precisa lidar com petabytes de dados, não é pra tech startup pequena sair usando. |
| 39:21 | A grande vantagem do Java é ser mais produtivo e menos doloroso do que C++. Uma coisa é fazer algo relativamente "pequeno" em quantidade de linhas de código como uma |
| 39:32 | ferramenta de linha de comando ou driver, outra coisa é criar um software massivo com milhões de linhas de código pra lidar com processos complexos como coordenação de |
| 39:41 | dados massivos em nós de um sistema distribuído. Java foi a escolha certa na época, talvez a única escolha. |
| 39:48 | Pouca gente conhecia Erlang e a sintaxe também nunca foi muito familiar pra quem se acostumou |
| 39:53 | a herança de sintaxe do C. Hoje em dia um novo Cassandra poderia ser feito ou em Elixir ou em Go, mas sendo sistemas |
| 40:01 | super complexos e já maduros, não existe motivo pra reescrever tudo nessas linguagens. |
| 40:06 | Erlang foi uma oportunidade perdida e Elixir apareceu uns 5 ou 10 anos mais tarde do que |
| 40:13 | deveria. Se tivesse aparecido no começo dos anos 2000, certamente seria uma das linguagens mais usadas hoje. |
| 40:18 | O ZooKeeper que eu falei, boa parte de suas funcionalidades existem por padrão no Erlang, |
| 40:23 | que também usa uma máquina virtual e foi feito pra criar serviços distribuídos no mercado de telecomunicações nos anos 80. |
| 40:30 | Ele estava muito à frente do seu tempo, muito antes de começarmos a nos preocupar com escalabilidade |
| 40:35 | horizontal em tamanho de internet no fim dos anos 90. Só que naquela época as opções era fazer tudo em C++, que é eficiente mas é masoquismo, |
| 40:44 | ou C# mas aí estava fechado no ecossistema de Windows da Microsoft, ou Java, que era |
| 40:50 | multiplataforma e bem mais amigável do que C++. Por eliminação, escolhemos Java. |
| 40:55 | Só que a JVM não foi criado pra sistemas distribuídos como Erlang, então empresas como Apache precisaram criar essa infraestrutura, componentes como o ZooKeeper, Storm, Flink. |
| 41:06 | Eu posso estar superestimando, mas acredito que se fosse fazer tudo que tem no portfolio da Apache em Elixir, seria mais produtivo e menos difícil hoje. |
| 41:16 | Mas nunca vamos saber, porque a essa altura do campeonato, não vale a pena tentar reescrever um ecossistema inteiro. |
| 41:21 | A Apache já resolveu esses problemas com Java e equiparou as funcionalidades como Erlang. |
| 41:27 | Pra entender qual é essa grande vantagem do Erlang, assista essa minha palestra onde explico como isso funciona dentro da VM do Erlang. |
| 41:35 | Do ponto de vista de sistemas distribuídos, outra alternativa moderna é Go. Só que Go tem bem menos ferramentas do que Java ou Erlang, que tiveram muito mais tempo |
| 41:45 | pra amadurecer. Assim como Java, primeiro precisaria criar a mesma infraestrutura. Algoritmos de consenso, sistema de arquivos distribuídos, sistema de processamento de |
| 41:53 | batch, streams distribuídos, armazenamento em cluster e assim por diante, antes de conseguir fazer os equivalente Spark, Kafka ou Cassandra. |
| 42:01 | De novo, é tudo especulação da minha parte, porque a realidade é que se eu precisar de sistemas distribuídos, vou olhar o ecossistema Java da Apache. |
| 42:25 | O que nos leva a criação de aplicações comerciais, como eu chamaria. |
| 42:44 | Coisas que a maioria aqui assistindo provavelmente vai lidar mais. Aplicações web. Seja feito em Ruby on Rails, ou Django com Python, ou Laravel com PHP, ou Spring Boot |
| 42:53 | com Kotlin, ou Express com TypeScript e assim por diante. Aqui vem uma divisor: os softwares que falei até aqui como uma kernel de OS, driver de |
| 43:01 | dispositivo, ferramentas de linha de comando de Linux, ou até um Kafka ou Cassandra tem uma coisa em comum: o ideal é que eles mudem pouco, que a maior parte das melhorias sejam |
| 43:11 | em pequenas otimizações de performance, segurança, estabilidade. Eu não quero meu banco de dados mudando tanto que a cada nova versão dá crash. |
| 43:19 | Já aplicações web, que lidam com consumidor final, seja um chat, ecommerce, rede social, |
| 43:25 | ferramentas de produtividade como um Figma ou Canva, ele competem pela atenção e o dinheiro das pessoas. |
| 43:30 | Pra competir, uma precisa adicionar rápido funcionalidades que superam do concorrente. |
| 43:36 | Mesmo que apareça um bug novo que alguns vão reclamar, o importante é que dê pra subir correções rápido. |
| 43:41 | Pra isso queremos linguagens que facilitem produtividade mais do que performance. Sim, daria pra fazer sistemas mais eficientes escrevendo 100% em Rust, ou Go, ou mesmo Java |
| 43:51 | e Elixir, mas até certo ponto é mais fácil treinar pessoas em Python ou Javascript e elas se tornam mais rapidamente produtivas nessas plataformas. |
| 44:00 | Esse é o motivo de porque não jogamos fora Python ou Javascript: porque taxa homem é mais caro do que custo de CPU por hora. |
| 44:08 | Essas linguagens são mais limitadas como mostrei antes: não servem pra desenvolvimento de coisas com drivers ou protocolos de consenso nem processamento de imagem ou video, mas |
| 44:17 | são ótimos pra fazer código cola mais fácil de usar, importando binários feitos em linguagens |
| 44:23 | mais eficientes como C ou Rust. Portanto podemos usar um Python da vida pra 80% das funcionalidades mais "mundanas" e |
| 44:31 | usamos C, Go ou Rust pra fazer as partes mais difíceis e integramos com uma extensão usando |
| 44:38 | FFI. Daí temos o mundo mobile, Android e iOS. Pra aplicativos simples, pense num iFood, AirBnb, até um Facebook ou Instagram, podemos |
| 44:48 | apelar pra frameworks mais pesados mas, de novo, mais produtivos como React Native ou |
| 44:53 | Flutter, que evita que a maioria dos desenvolvedores precisem saber como o baixo nível funciona |
| 44:58 | e produzam mais rápido. A maioria dos smartphones hoje já tem mais de 2 gigabytes de RAM, e dá desperdiçar |
| 45:04 | um pouco. Claro, se todo mundo usa React Native, todo mundo vai estar limitado nas mesmas coisas |
| 45:10 | que ele suporta. Pra se diferenciar, fazemos a mesma coisa que falei no mundo Web: criamos componentes |
| 45:15 | mais eficientes, de mais baixo nível em Swift pra iOS ou Kotlin pra Android e integramos |
| 45:21 | nesses frameworks. Quem souber o baixo nível sempre vai ser um profissional mais valioso. |
| 45:26 | É obrigatório? Não. Mas você quer evoluir na carreira e ganhar mais no futuro? Então sim, precisa saber. |
| 45:32 | Sabe tudo que vim mostrando de exemplo na primeira metade do episódio? Sim, aquilo tem que parecer arroz com feijão pra você se considerar um especialista no |
| 45:40 | assunto. Daí chegamos nas categorias mais hypadas e consideradas mais modernas como data science, |
| 45:46 | machine learning e inteligência artificial. E aqui o mais importante é tirar o máximo proveito do hardware, em particular de conjuntos |
| 45:53 | de instruções como AVX, SSE ou CUDA em GPUs NVIDIA ou OpenCL em GPUs AMD. |
| 46:00 | Pra isso precisamos voltar pro nível de C++. Como expliquei antes, tudo de data science em cima de Python começa em bibliotecas como |
| 46:07 | numpy e scipy, que são feitos em C e Fortran. Machine learning como um Tensorflow começa em coisas como CUDA e C++. |
| 46:14 | Mesmo em javascript, depende de acesso à GPU via WebGL dos navegadores. Não é a linguagem a parte mais importante e sim acesso a esses componentes de computação |
| 46:23 | paralela de vetores e matrizes de dados. Eu disse no episódio anterior comentando sobre o ChatGPT que no mundo de deep learning, |
| 46:31 | criar modelos como de geração de imagens do Dall-e 2 ou geração de textos como GPT3, |
| 46:36 | custam astronomicamente caro e nenhum de nós vai ser capaz de criar nada perto disso. |
| 46:41 | Só quem tiver acesso a conseguir trabalhar nos centros de pesquisa de uma OpenAI ou Microsoft da vida que vai ter essa oportunidade. |
| 46:48 | Mas pra coisas úteis do dia a dia não precisamos de um GPT. Machine learning com tensorflow e modelos ordens de grandeza mais simples já são úteis |
| 46:56 | pra escopos específicos. Detecção de movimento é um exemplo, pra aplicações de realidade aumentada. |
| 47:03 | Muitos não pensam nisso, mas algoritmos mais "simples" como de relevância que é basicamente |
| 47:08 | classificação estatística já é extremamente útil pra coisas como ecommerce conseguirem mostrar "produtos recomendados pra você". |
| 47:15 | Ou sistemas como Elastic terem pesquisa fuzzy com relevância, como um mini Google, onde |
| 47:20 | o usuário não precisa escrever os termos exatos, mas mesmo assim ele consegue devolver resultados relevantes. |
| 47:27 | Tudo isso já existe e já usamos em diversos sistemas, de ecommerces a redes sociais. |
| 47:32 | A maioria dos desenvolvedores nem sabe o que é um Elastic ou Solr e acha que vai entender como funciona um ChatGPT. |
| 47:38 | Tá longe, bem longe. Enfim, eu sei que o episódio de hoje talvez tenha sido denso, mas eram alguns pensamentos |
| 47:46 | aleatórios que tinha na minha cabeça fazia tempo que queria dar dump. Se você é iniciante, não espere compreender tudo que eu disse de uma só vez, pesquise |
| 47:55 | os termos que não conhecia, volte de novo. Quem já tem experiência já sabia tudo que eu falei, talvez dê alguns insights pra complementar. |
| 48:03 | O objetivo não era dizer que essa ou aquela linguagem é a melhor ou a pior. Cada uma estava no lugar certo na hora certa, não necessariamente foram escolhidas por |
| 48:12 | serem as melhores. E mesmo surgindo coisas novas consideradas melhores, não saímos reescrevendo. |
| 48:18 | Maturidade é sempre mais importante que novidade. Se ficaram com dúvidas mande nos comentários abaixo, se curtiram o video deixem um joinha, |
| 48:38 | assinem o canal e não deixem de compartilhar o video com seus amigos. |
| 49:00 | A gente se vê, até mais! |
