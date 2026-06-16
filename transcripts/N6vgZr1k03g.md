# Entendendo Back-End para Iniciantes em Programação (Parte 2) | Série "Começando aos 40"

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=N6vgZr1k03g
- **Duração:** 55:59
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Este já é sexto episódio da   série Começando aos 40. O ideal é que vocês assistam todos os outros vídeos da série, |
| 0:10 | e se possível os da playlist de programação que tem a rápida história das linguagens nos   vídeos de Sua Linguagem Não é Especial. Eu vou deixar linkado nas descrições abaixo. Continuo |
| 0:21 | bem contente com a repercussão dos últimos vídeos, parece que vocês estão gostando do formato então |
| 0:27 | vou continuar assim até o fim desta série. Hoje por acaso estou sentindo minha garganta dando |
| 0:32 | pra trás, é possível que minha voz comece a falhar até o fim do vídeo, mas vamos lá. No episódio da semana passada eu expliquei os conceitos mais básicos da computação, |
| 0:41 | sobre instruções de máquina, compilação, interpretadores, como os binários se linkam |
| 0:47 | com suas dependências, lembra? Linkagem estática e dinâmica? Começamos a falar um pouco sobre Java |
| 0:53 | e .NET e máquinas virtuais como JVM. Agora com os conceitos entendidos vamos entender |
| 0:59 | porque eu disse que era importante entender tudo isso antes do que vou falar hoje. Uma das coisas mais importantes pra um programador iniciante entender é |
| 1:08 | que você nunca vai fazer softwares de verdade totalmente do zero, ou seja, |
| 1:13 | que 100% do código foi só você que escreveu. Você vai ser obrigado a usar bibliotecas dos |
| 1:20 | outros. Vamos expandir o conceito de bibliotecas dinâmicas e entender quão fundo vai o buraco |
| 1:26 | desse coelho. (...) |
| 1:32 | Até esse ponto na história você tinha então linguagens estilo Java, que é muito inspirado em |
| 1:41 | C++ e alguns pontos de Smalltalk com alguns, mas não todos os conceitos de orientação a objetos e |
| 1:48 | o conceito de máquina virtual e gerenciador de memória que também havia em Lisp. Na prática, |
| 1:54 | em vez de orientação a objetos eu argumentaria que Java é uma linguagem mais orientada a classes. |
| 2:00 | Muita coisa em Java não são objetos, começando com a própria classe em si. A orientação a objetos |
| 2:06 | veio evoluindo desde Simula, CLU, C com Classes que originou C++, Smalltalk que foi provavelmente |
| 2:12 | a melhor representação de orientação a objetos, e Java que deu alguns passos pra trás. Até esse ponto já entendemos o conceito de bibliotecas dinâmicas que podem ser reusada. |
| 2:23 | Bibliotecas em geral são conjuntos de funções que fazem alguma coisa útil como processar imagens, |
| 2:29 | converter datas, formatar PDFs ou qualquer coisa assim que possa ser reusada. Componentes |
| 2:35 | são funcionalidades, como um componente de calendário que tem a parte visual e   a programação que controla as datas. Uma biblioteca pode ter vários componentes, |
| 2:44 | por exemplo. A parte visual começou a ficar importante com o advento das interfaces gráficas, |
| 2:50 | com a crescente adoção de ambientes gráficos como o Macintosh original, o OS/2 que foi um |
| 2:57 | filho bastardo da IBM com a Microsoft e finalmente o Windows 3.1. Por acaso modelar componentes como |
| 3:04 | classes e objetos era interessante e foi quando esses dois conceitos começaram a se mesclar. |
| 3:09 | No começo dos anos 90 um dos conceitos ligados a orientação a objetos começou a aparecer mais |
| 3:15 | que foi a componentização. Em particular na forma de RAD ou Rapid Application Development, |
| 3:22 | Na categoria de RAD foi onde se popularizou o conceito de Integrated Development Environment ou |
| 3:29 | IDEs como os antigos PowerBuilder, Visual Basic, Visual dBase, Access, Delphi. As linguagens por |
| 3:37 | baixo ainda não eram realmente orientadas a objeto como conhecemos mas aí surgiu o Java |
| 3:43 | que trouxe uma evolução. Ainda longe do que era o Smalltalk mas já melhor do que Visual Basic. |
| 3:49 | Componentização também se tornou uma idéia importante primeiro para evitar reescrever |
| 3:54 | software do zero toda vez e tornar mais fácil reusar software. Mas mais do que isso pra tornar |
| 4:00 | mais fácil comercializar esses componentes. Hoje em dia se você quer uma biblioteca pra, sei lá, |
| 4:06 | imprimir um PDF tem centenas disponíveis de graça no GitHub pra quase todas as linguagens. Mas |
| 4:12 | naquela época a Internet só tava começando, nem 2% da população tinha acesso ainda. E o jeito pra |
| 4:18 | se comercializar era distribuindo em disquetes, encaixotado, em prateleira de lojas. Pra começar, |
| 4:25 | agora que tínhamos um ambiente gráfico mais sofisticado nos sistemas operacionais não dava |
| 4:30 | pra todo programador toda hora ter que fazer tudo do zero. Desenhar um botão fazendo as linhas da |
| 4:37 | borda pixel a pixel. Por isso linguagens como o Microsoft C++ já vem com um framework, o MFC ou |
| 4:44 | Microsoft Foundation Classes e o Delphi vem como VCL ou Visual Components Library. Normalmente são |
| 4:50 | conjuntos de DLLs como já expliquei antes. Com C++ e MFC podemos criar aplicativos como um |
| 4:57 | Word ou Excel. Mas daí a Microsoft foi além e criou outra tecnologia, o OLE ou |
| 5:03 | Object Linking and Embedding que em resumo é uma forma de incluir componentes visuais |
| 5:08 | complexos dinamicamente num aplicativo. Vocês já sabem o que são bibliotecas dinâmicas, |
| 5:14 | mas do jeito como explicamos você precisa compilar o programa já com os bindings pras bibliotecas em |
| 5:21 | tempo de compilação. Mas como fazer pra instalar um componente num programa que já existe sem |
| 5:27 | recompilar? Uma demonstração impressionante na época era conseguir fazer uma tabela do Excel ser |
| 5:33 | embutido dentro de um documento do Word e ser editável. Em cima do OLE surgiu o OLE control |
| 5:39 | extensions ou OCX. Se você já instalou componentes num Access ou Delphi deve ter visto bibliotecas |
| 5:46 | com extensão OCX que se tornou a principal forma de distribuir componentes em Windows. |
| 5:52 | Isso foi uma pequena revolução porque também permitia comercializar componentes num formato |
| 5:58 | padrão que podia ser escrito em qualquer linguagem da época e embutida em qualquer |
| 6:03 | aplicativo que suportasse o padrão, incluindo IDEs. Do OLE original pra OCX também se precisou |
| 6:10 | de um modelo para linguagens interagirem com esses componentes. Então nasce o Component Object Model |
| 6:17 | ou COM. É assim que componentização funcionou na época do Visual Basic e Delphi. No mundo Java o |
| 6:23 | equivalente ao COM poderia ser um Java Bean. Hoje OCX é outra coisa, são componentes ActiveX. Assim |
| 6:31 | como no Java toda classe herda de Object ou em Object Pascal toda classe herda de TObject, em COM |
| 6:38 | você implementa a interface IUnknown. Aqui vale entender a função de uma interface. |
| 6:43 | Numa interface gráfica, tanto faz se você tem uma janela com um botão de OK em Windows, ou em MacOS, |
| 6:49 | ou em GNOME do Linux, a interface é a mesma do ponto de vista do usuário, mas a programação, |
| 6:56 | ou implementação por trás é completamente diferente. A interface garante que quem |
| 7:02 | vai consumir o serviço por trás não precisa se preocupar como ele é construído. A mesma |
| 7:08 | coisa são as interfaces para bibliotecas, nesse caso em vez de ser um elemento visual,   se trata de um arquivo em um determinado formato que simplesmente declara que funções, com que |
| 7:19 | argumentos, com que tipos de dados, e que tipo de resultados você espera. Daí você implementa como |
| 7:25 | quiser por trás e quem consome essa biblioteca pode assumir que no mínimo ele vai implementar |
| 7:31 | as funções conforme descritas na interface. Uma classe numa linguagem orientada a objetos é a |
| 7:37 | implementação de alguma interface, como a tal IUnknown do padrão COM que falei antes. |
| 7:43 | Poderíamos argumentar que o modelo de componentes mais avançado na época, no começo dos anos 90, |
| 7:48 | era a NextStep com sua linguagem Objective C que eu argumentaria que é mais simples, |
| 7:54 | mais elegante e mais orientado a objetos do que C++ ou Object Pascal ou mesmo Java e tinha um |
| 8:01 | conjunto de classes, que eles chamavam de kits como o Foundation Kit, melhor do que o MFC da |
| 8:07 | Microsoft ou VCL da Borland. Pra vocês terem uma idéia de quão à frente do seu tempo ela estava, |
| 8:13 | o desenvolvimento de iOS e MacOS de hoje ainda usa uma evolução direta das mesmas classes até hoje, |
| 8:20 | por isso os nomes das classes como "NSString" ou "NSObject" começam com esse NS que é de NextStep. |
| 8:28 | No fim dos anos 80 e começo dos anos 90, essa idéia de arrastar e soltar componentes direto |
| 8:34 | numa janela gráfica pra criar programas era uma idéia revolucionária. No NextStep   que surgiu o lendário primeiro navegador web de Tim Berners Lee, mas não só isso, |
| 8:44 | pra nerds como eu é a Id Software desenvolveu a engine gráfica do jogo Doom. O também |
| 8:49 | lendário John Carmack gostava dos NextCube. A primeira geração de programas nessa época no fim |
| 8:55 | dos anos 80 eram aplicativos desktop normais, como os feitos em PowerBuilder ou Access que rodavam só |
| 9:02 | localmente em uma máquina. Esses programas normalmente tinham um binário da aplicação |
| 9:07 | e outro arquivo que representava um banco de dados, muitos derivados do primitivo formato |
| 9:13 | DBF (que literalmente significa database file) que usávamos em dBase ou Clipper ou FoxPro. O que a |
| 9:20 | gente chamava de banco de dados era uma estrutura de dados muito simples, pense uma coisa parecida |
| 9:26 | com uma lista ligada de estruturas e um índice primitivo. Numa época que empresas pequenas às |
| 9:32 | vezes tinha só 1 computador pra empresa inteira, isso até funcionava. O banco inteiro era um único |
| 9:39 | arquivo. E se dois usuários em duas máquinas quisessem compartilhar o mesmo banco de dados sem |
| 9:46 | precisar ficar copiando o arquivo toda hora? Com a popularização dos desktops, principalmente |
| 9:51 | PCs e também com acesso a tecnologias de redes locais, antes ainda da Internet |
| 9:56 | comercial realmente decolar, começa a surgir o conceito de aplicativos distribuídos. Foi com |
| 10:02 | a popularização de tecnologias de redes como da Novell e do protocolo IPX/SPX e o Windows NetBios |
| 10:09 | que permitiam compartilhar arquivos numa rede local que as coisas começaram a mudar. Com essa |
| 10:15 | possibilidade, e se colocássemos o tal arquivo de banco de dados numa pasta compartilhada na rede, |
| 10:22 | daí copiamos o programa na máquina de cada pessoa na rede e quando o programa abre ele pode apontar |
| 10:28 | pro arquivo compartilhado e booom agora todo mundo pode acessar os mesmos dados! Sensacional |
| 10:33 | né? Só que não ... Puta idéia errada. Lembram no episódio passado que falei da |
| 10:39 | dor de cabeça que é programar multi-threads porque cada thread tem acesso à memória global   e uma pode ficar pisando na memória da outra? Mesma coisa com programas acessando um arquivo |
| 10:50 | compartilhado na rede. ?O que acontece quando um programa tenta escrever no mesmo registro, |
| 10:56 | no mesmo arquivo, que outro programa na rede? Caos! Foi a era dos arquivos de banco |
| 11:02 | de dados que corrompiam toda hora. Essas linguagens primárias e as redes da   época só tinham uma coisa pra fazer nessa época: bloquear o arquivo inteiro! Ou seja, |
| 11:11 | se alguém decidisse gravar alguma coisa no banco de dados, todos os outros programas precisavam |
| 11:17 | esperar a vez. Não era ideal mas em redes pequenas de 10 ou 20 máquinas não chegava a ser o fim |
| 11:23 | do mundo. Mas o problema é que um arquivo compartilhado não é mágica. Tem um servidor |
| 11:29 | onde fica o arquivo de verdade, na rede as pessoas não tem a cópia inteira do arquivo, ele vai lendo |
| 11:35 | pedaços do arquivo em um stream de dados. Aliás, esse conceito de stream é importante você |
| 11:41 | entender se ainda não estudou. Se você tem um arquivo de, digamos, 100 GB na rede, e você quer |
| 11:46 | só um pedaço no meio dele, você não precisa baixar o arquivo todo. Você abre um stream, |
| 11:52 | tipo uma corrente ou esteira mesmo e vai puxando um pedaço de cada vez até chegar na parte que quer |
| 11:57 | e aí pode fechar esse stream. Ou você pode abrir o stream direto já no meio do arquivo e ir lendo |
| 12:04 | de lá um pedaço de cada vez. Quem é bem iniciante se confunde com isso porque você consegue listar |
| 12:09 | os arquivos na rede como se estivesse local na sua máquina, mas "ver" os arquivos e "ter" os |
| 12:15 | arquivos são coisas diferentes. Mas se você tentar ler esse arquivo   gigante inteiro, dependendo da velocidade da rede, que é sempre lento, pode levar muitos |
| 12:25 | minutos. E na hora de gravar o servidor de rede precisava não errar onde ia gravar no |
| 12:30 | meio do arquivo. ?E se seu programa dá pau na rede no meio de uma gravação? Ou se a rede dá |
| 12:36 | pau? Ou se o servidor engasga? De repente a gente começou a ter um monte de variáveis a mais pra se |
| 12:42 | preocupar onde antes era simplesmente abrir o arquivo, gravar e fechar. Durante os anos 90 fomos evoluindo esse conceito de 2 camadas ou cliente-servidor |
| 12:51 | primitivo. O próximo passo foi usar um servidor de banco de dados em vez de só compartilhar um |
| 12:57 | arquivo na rede. Foi assim que começamos a usar bancos como Ingres, Caché, InterBase, |
| 13:02 | IBM DB/2, Oracle e só depois que a Microsoft adquire a Sybase no meio dos anos 90 que ele |
| 13:08 | constrói o SQL Server sobre ele. A diferença com arquivos compartilhados   é que em vez do programa cliente tentar abrir um arquivo na rede ele se conecta antes a outro |
| 13:18 | programa que está remoto, um servidor. Nesse caso um servidor de banco de dados. Isso evita |
| 13:24 | quase totalmente que o arquivo de dados em si se corrompa tão fácil. Esse servidor vai servir |
| 13:30 | como um mediador, os clientes pedem a ele pra fazer operações no arquivo e o mediador   vai executando na ordem correta as coisas, e como só ele abre e escreve no arquivo, as |
| 13:40 | chances dele corromper eram muito menores. Lembra no episódio sobre a história do front-end   como eu expliquei que um navegador web é um cliente TCP e o servidor web é um servidor TCP? |
| 13:51 | É a mesma coisa aqui, só que antes de começarmos a usar o protocolo TCP antes usávamos protocolos |
| 13:57 | de rede local como o IPX que falei antes, então o programa em Delphi ou FoxPro podia |
| 14:03 | ser um cliente IPX e o banco de dados era um servidor IPX. Pouco tempo depois que a |
| 14:08 | Internet começou a se popularizar e o Windows finalmente começou a vir com uma pilha TCP/IP |
| 14:13 | que começamos a trocar tudo por TCP. Uma pequena evolução nessa arquitetura foi |
| 14:18 | com bancos como Oracle ou SQL Server que permitem escrever programas que rodam dentro do servidor de |
| 14:25 | banco de dados, os famigerados Stored Procedures em linguagens como PL/SQL ou T/SQL. Assim |
| 14:32 | começamos a separar parte da lógica que ficava exclusivamente nos programas cliente para o lado |
| 14:38 | do servidor. Isso ajuda em muito a diminuir a complexidade dos programas cliente, diminui a |
| 14:43 | necessidade de ficar atualizando os programas nos desktops toda vez que a lógica de negócios muda.   Mas por outro lado causa mais lentidão no banco de dados porque agora além de ter que fazer as |
| 14:54 | operações básicas de ler e escrever dados ele vai precisar processar e computar cálculos |
| 14:59 | e outras lógicas em cima desses dados. De novo, lembre a dificuldade que era atualizar |
| 15:04 | o programa cliente nos desktops. Você precisava gerar um novo binário e mandar todo mundo desligar |
| 15:09 | tudo das máquinas, ir de máquina em máquina com um disquete pra instalar ou mandar todo mundo baixar |
| 15:15 | do servidor de arquivos na rede. Pior ainda se a empresa tinha filiais em lugares geograficamente |
| 15:21 | separados onde nem todas as filiais se comunicavam com as outras. Lembre-se, internet ainda era uma |
| 15:27 | coisa opcional. A gente tinha redes locais dentro do escritório, mas não necessariamente internet |
| 15:33 | entre os diferentes escritórios. ?E se uma filial começa a rodar o programa mais novo mas outra |
| 15:39 | filial esquece e fica na versão mais velha? Agora, alguém parou pra pensar: o banco de dados |
| 15:44 | é um servidor de rede. Os programas são clientes que se conectam nesse servidor. Só que o banco faz |
| 15:50 | duas funções: gerencia os dados e roda lógica de negócio com essas stored procedures. Porque |
| 15:56 | não mais um servidor no MEIO do caminho? Daí o cliente se conecta nesse que tem lógica de |
| 16:02 | processamento de dados primeiro, que por sua vez vai se conectar em um segundo servidor,   que seria o de banco de dados. Dessa forma conseguimos tanto separar a lógica de negócio |
| 16:13 | e diminuir o tamanho dos programas nos desktops e também tiramos a carga do servidor de banco |
| 16:18 | de dados. Esse é o nascimento da arquitetura que conhecemos como três camadas ou three tiers. Se |
| 16:25 | você assistiu o episódio sobre SAP é aqui que as soluções corporativas começam a se encaixar. |
| 16:31 | Com a idéia de um servidor de aplicação passamos a pensar mais em interoperabilidade e protocolos de |
| 16:38 | rede. Junte a idéia de componentização, orientação a objetos e a necessidade de componentizar agora |
| 16:45 | um conceito mais abstrato: chamar lógica de negócios em outro servidor. Assim nascem |
| 16:50 | especificações como o COM e Distributed COM ou DCOM que depois seria renomeado como COM+ |
| 16:57 | da Microsoft ou concorrentes como o famigerado CORBA. Na prática eram todas formas de chamadas |
| 17:03 | de procedimento remotos ou o que chamamos hoje de RFC ou RPC, que é remote procedure calls. |
| 17:10 | Eu já expliquei que pra compilar um programa que depende de uma biblioteca dinâmica precisamos de |
| 17:15 | um arquivo de cabeçalho que declara que funções essa biblioteca tem exposta para ser consumida, |
| 17:20 | a tal da Interface. É exatamente a mesma coisa agora só que em vez de uma biblioteca dinâmica |
| 17:25 | é uma biblioteca remota, mais precisamente um cliente de algum serviço remoto. Não temos como |
| 17:32 | saber o que um servidor de aplicações tem de funções expostas então precisamos de algum |
| 17:37 | tipo de interface que declara quaisfunções, com que argumentos, e que resultados esse servidor |
| 17:44 | de aplicações expõe pra gente, através de que protocolo. Pra isso servem coisas como COM+ ou |
| 17:50 | CORBA que tinham o protocolo IIOP ou Inter-ORB onde ORB significa object request broker, |
| 17:57 | para especificar esse protocolo de comunicação, o formato das mensagens trocadas. |
| 18:02 | Esse conceito coincide com a fase do Java onde começa a surgir o famigerado J2EE ou |
| 18:08 | Java 2 Enterprise Edition que hoje é chamado só de JEE, sem o dois. Java 2 é engraçado porque |
| 18:14 | tivemos o Java 1, daí ele foi pro Java 1.1 e depois 1.2 e aí nasceu J2EE mas depois as |
| 18:20 | versões foram 1.3, depois 1.4 e acho que só na 1.5 que ele chamou de direto de versão 5. |
| 18:26 | Hoje acho que estamos no Java 10 ou 11 certo? Enfim, o J2EE era uma especificação realmente |
| 18:31 | interessante porque ela consolidava tudo que tínhamos inventado até então em tecnologias   de desenvolvimento de aplicações em três camadas e agora também usando tecnologias |
| 18:40 | de internet como o protocolo TCP e HTTP. Em resumo J2EE especifica o também famigerado |
| 18:47 | servlet que é uma forma de encapsular as operações de HTTP, ele especifica uma forma complexa de |
| 18:53 | gerar aplicações usando um modelo chamado Model 2 que é basicamente o Model - View - Controller ou |
| 18:59 | MVC que você tanto ouve falar hoje. E na parte do model, que costuma ser uma abstração pra |
| 19:05 | uma ou mais tabelas no banco de dados, temos os também famigerados EJB ou Enterprise Java Beans, |
| 19:11 | além dos JMS ou Java Message Service, que encapsulam maneiras de acessar banco de dados |
| 19:17 | remotos e outros tipos de serviços remotos como outros servidores de aplicação. E tudo |
| 19:23 | isso conectado via arquivos de configuração. E nessa época se tornou moda formatar arquivos de |
| 19:29 | configuração no novíssimo formato XML. Em breve a Microsoft ainda vai inventar Web Services |
| 19:35 | usando o protocolo SOAP que trafega os dados todos formatados em XML também. Na verdade começamos |
| 19:41 | a usar XML em tudo que é lugar. E assim começa a era onde passamos a associar tudo que tem XML |
| 19:48 | com muito enterprise e passamos a odiar XML. Em paralelo a isso, muita nova literatura começou |
| 19:54 | a ser escrita pra ajudar a organizar toda essaa bagunça em metodologias e vocabulários pra |
| 19:59 | conseguir desenhar sistemas complexos orientados a objetos. É quando surgem nomes com Os Tres Amigos, |
| 20:05 | Grady Booch, James Raumbaugh, Ivar Jacobson, cada um com suas idéias de metodologias que se juntaram |
| 20:12 | numa empresa chamada Rational e juntam suas idéias no famigerado Unified Modeling Language |
| 20:18 | ou UML para representar soluções baseadas nessa idéias de programar objetos e componentes. Aliás, |
| 20:26 | UML que podia ser representado em arquivos em que formato? Sim, em XML. A Rational que |
| 20:32 | viria a desenvolver diversas ferramentas como Rose, ClearCase, ClearQuest, e outros. Depois |
| 20:38 | teríamos a famosa gangue dos quatro ou Gang of Four que são Erich Gamma, Richard Helm, Ralph |
| 20:44 | Johnson e John Vlissides que escreveram o agora clássico livro de Design Patterns. O que chamamos |
| 20:50 | hoje de mundo enterprise começa a ganhar forma nessa fase do fim dos anos 90, e ele começa de |
| 20:57 | verdade com J2EE e as metodologias monumentais de engenharia de software orientados a objetos. |
| 21:03 | Em uma década evoluímos muito rápido de pequenos programas que rodavam só em uma máquina, |
| 21:09 | pra soluções cliente-servidor em 2 camadas e agora a arquitetura em 3 camadas e as sementes para |
| 21:16 | aplicações realmente distribuídas com o advento da Internet. Em paralelo, como já contei antes, |
| 21:22 | tivemos C# com a origem num híbrido de J++ e Object Pascal. Como C# é basicamente a |
| 21:28 | Microsoft que controla e basicamente depende só do Windows, ele conseguiu evoluir bem mais rápido |
| 21:34 | do que Java nos anos seguinte, adicionando muito mais funcionalidades à linguagem que a |
| 21:39 | tornaram mais do que simplesmente uma cópia da sintaxe do Java, tanto em termo de novas |
| 21:45 | sintaxes quanto mais bibliotecas e serviços. COM+ e ActiveX se tornam as formas principais |
| 21:51 | de componentização tanto local quanto remota e CORBA vai começando a desaparecer. |
| 21:56 | No mundo mais próximo de Linux, Perl já era popular principalmente como linguagem   para scriptar coisas como ferramentas para administração de sistemas Linux. Ele veio |
| 22:07 | pouco a pouco sendo substituído por Python, que era uma linguagem mais limpa e mais moderna, |
| 22:12 | que também herdou algumas funcionalidades de orientação a objetos. Ele teve a sorte   de pegar o crescimento das distribuições Linux e acabou se tornando a linguagem padrão em muitas |
| 22:23 | distribuições. PHP pegou a onda das aplicações Web e ganhou espaço sendo mais fácil que Perl |
| 22:30 | como sintaxe de linguagem. PHP se uniu a outras tecnologias emergentes no mundo open source como |
| 22:37 | rodar em sistemas Linux, usar o servidor web Apache, e o ainda novato banco de dados MySQL, |
| 22:43 | e assim nasce a pilha de tecnologias ou stack chamado de LAMP. Mas o interpretador do PHP era realmente um puxadinho, bem ruim, |
| 22:51 | sendo um dos piores em gerenciamento de memória e constantes bugs de segurança,   numa época onde ainda estávamos aprendendo sobre segurança agora que começamos a colocar as coisas |
| 23:02 | expostas na internet pública. Fora isso o estilo de programação derivado da filosofia de Larry |
| 23:08 | Wall, criador do Perl, de "quick and dirty" ou "rápido pra desenvolver mas código sujo como |
| 23:15 | resultado" não era atraente pra adoção mais séria da indústria. Mas a bolha da internet acelerou a |
| 23:21 | adoção de todos eles ao mesmo tempo. Com o crash da bolha demorou alguns anos   pras pessoas voltarem a se interessar em novas linguagens. Como eu disse antes, |
| 23:30 | o Manifesto Ágil só foi escrito bem no ano desse crash em 2001. Então o mercado de linguagens |
| 23:36 | que já existiam não tinham muito interesse em adoção em massa de práticas como as ensinadas |
| 23:41 | por metodologias como Extreme Programming ou Cristal. As metodologias num mundo como Java ou C# |
| 23:48 | era ditado pelos fabricantes de ferramentas como a Rational que foi comprada pela IBM, BEA, Oracle, |
| 23:54 | Microsoft. Google estava crescendo rápido mas ainda não tinha tanta influência nesse mercado. |
| 24:00 | Facebook ainda não existia. O mercado passou a associar tecnologias enterprise como "sérias" |
| 24:07 | e tecnologias open source como "amadoras". Mas a gente sabia que tinha jeitos mais simples de |
| 24:13 | desenvolver, principalmente se olhar as linguagens interpretadas, mas ainda não havia uma adoção |
| 24:19 | significativa a não ser do PHP, que pra muitos engenheiros era uma linguagem amadora e pouco |
| 24:25 | sofisticada. Foi só quando Ruby começou a ser adotada por muitos dos signatários do Manifesto |
| 24:31 | Ágil como Ward Cunningham, Martin Fowler, Andrew Hunt, Brian Marick, Robert C. Martin, Dave |
| 24:38 | Thomas que as pessoas começaram a mostrar algum interesse e coincidentemente tivemos o lançamento |
| 24:43 | do framework Ruby on Rails em 2004 e finalmente Ruby, que havia sido criado 10 anos antes em 1995 |
| 24:51 | começou a ganhar tração. Diferente de Java ou C# ou PHP, em vez de ter origem na herança de sintaxe |
| 24:58 | do C++ ele procurou inspiração no Smalltalk e Lisp. Isso a tornou diferente o suficiente e com |
| 25:04 | o suficiente de sofisticação para atrair a atenção desses veteranos de cabelo branco. Já que era muito difícil parar a inércia de gigantes como Java, .NET e PHP, |
| 25:14 | pareceu interessante começar uma comunidade do zero, com uma linguagem sofisticada mas obscura, |
| 25:20 | mas já aplicando as práticas evangelizadas pelas metodologias que seguiam o Manifesto Ágil. Essa |
| 25:27 | Era marca o início da profissionalização das tecnologias open source para desenvolvimento |
| 25:32 | de aplicações, que poucos anos antes eram consideradas mais amadoras pelo   mundo enterprise. Em vez de convencer o mundo enterprise, um novo mundo começou a crescer rápido |
| 25:43 | para competir com elas: as tech startups. O sucesso quase instantâneo do Ruby on Rails |
| 25:49 | para criar os tipos de aplicações que pouco tempo antes só deveriam ser feitos em Java ou |
| 25:54 | C# trouxe uma nova idéia pra indústria: que pra uma linguagem fazer sucesso ela não precisava |
| 26:00 | ser um clone da sintaxe de C++ ou Java ou ter o suporte de grandes nomes como IBM ou Microsoft. |
| 26:07 | Nesse ponto estamos entre 2003 e 2007. Eu diria que esse período de transição é importante porque |
| 26:13 | nos anos 80 surgiu de fato o movimento open source e GNU. Nos anos 90 surgiu o primeiro |
| 26:19 | grande projeto que tornou open source relevante: a kernel do Linux e as distribuições de Linux. |
| 26:25 | Durante a bolha das ponto coms tivemos sucessos comerciais como o VA Linux e a RedHat. De repente |
| 26:32 | open source não era só um hobby e tinha modelos de negócio viáveis que finalmente botaram pressão nas |
| 26:38 | empresas tradicionais. Mas a manutenção e criação de novos projetos não era ainda uma coisa simples, |
| 26:44 | haviam sites como SourceForge, CodeHaus e outros, mas contribuir em open source |
| 26:49 | ainda tinha uma barreira de entrada muito alta. Lembre-se que GitHub só se torna |
| 26:54 | realmente famoso a partir de 2008. Em 2003 mesmo outra iniciativa estava |
| 27:00 | começando com o surgimento do Groovy, uma nova linguagem que compila em bytecode pra JVM. Ela |
| 27:06 | tem muita inspiração na sintaxe de linguagens como Python e Ruby e é uma linguagem muito   mais agradável de trabalhar do que o Java original. E com o sucesso do Ruby on Rails, |
| 27:15 | tivemos o Groovy on Grails. Mas nesse momento eu acho que a comunidade Java e mesmo a open |
| 27:22 | source ainda não estava preparada pra se adaptar a uma nova linguagem. Um dos problemas de ser uma |
| 27:27 | comunidade gigante é que é muito difícil mudar sua direção, especialmente quando essa direção |
| 27:33 | ainda era meio incerta e experimental. Mesmo assim o Groovy teve um bom nicho e ainda hoje você vai |
| 27:39 | ver Groovy se usa ferramentas como o Gradle. Groovy ganhou fôlego quando entrou no GitHub |
| 27:45 | e quando ganhou patrocínio da Pivotal. Pra quem não conhece a PivotalLabs foi uma |
| 27:50 | consultoria que, junto com outros nomes emergentes como ThoughtWorks, ajudou a tornar Agile comercial |
| 27:56 | mais visível, tinha na sua base tecnologias Java e Ruby também. Ela cresceu rápido pós 2008 e foi |
| 28:03 | adquirida pela VMWare e depois pela EMC e hoje é uma empresa pública que mudou da área de serviços |
| 28:09 | de consultoria pra produtos corporativos, mais especificamente cloud corporativo. |
| 28:14 | Por 2 anos ela patrocinou o Groovy. Voltando um pouco na história, até os anos   80 popularizou-se linguagens que chamamos de imperativas como C ou Pascal ou Perl. Elas são |
| 28:26 | simples em estrutura. Você escreve funções que recebem argumentos e devolvem alguma estrutura |
| 28:32 | de dados. Você compõe seus programas com funções que chamam outras funções. Rapidamente você nota |
| 28:39 | que um conjunto de funções que atua em cima de uma mesma estrutura podem ser agrupadas |
| 28:45 | em módulos. Assim nasce a idéia de linguagens como MODULA, precursor do Pascal. Mas então |
| 28:51 | alguém resolve criar um conceito, ou uma abstração que uma estrutura com um grupo |
| 28:57 | de funções pode ser o que chamamos de classes. E podemos criar várias instâncias dessa classe, |
| 29:03 | que chamamos de objetos. Assim começa a nascer programação orientada a objetos. |
| 29:09 | Daí temos linguagens como Simula, Smalltalk, C++, Objective-C, Java,   C#, Python. Organização de objetos pode ser implementada em cima de linguagens imperativas, |
| 29:19 | então C com classes pode virar C++ ou Objective-C. Perl pode ganhar o equivalente a classes usando |
| 29:25 | bless. PHP ganhou classes. Basic ganhou classes em Visual Basic. Pascal ganhou classes rudimentares |
| 29:32 | em Turbo Pascal e depois em Object Pascal que é o Delphi. Até Cobol tem classes hoje em dia. |
| 29:38 | Em paralelo a isso havia outra área de pesquisas que deriva da linhagem de linguagens funcionais |
| 29:44 | como Lisp, Scheme, ML, que lida com a matemática dessa composição de funções   ou lambdas e é definida em Lambda Calculus, que se iniciou com o famoso Alonzo Church, |
| 29:54 | conterrâneo de Alan Turing. Turing aliás, que foi aluno de Church, então você pode ver como |
| 30:00 | as idéias dos dois se misturam e o trabalho de ambos é a fundação do que chamamos de Ciência |
| 30:06 | da Computação. No caso da vertente de Church vamos simplificar assim, uma função recebe um argumento |
| 30:13 | tipo um número ou uma string ou outra coisa, devolve outro tipo de elemento como resultado e, |
| 30:19 | principalmente, tem um nome, e só. ?Mas por que toda função tem que ter um   nome? Por que não podemos ter funções sem nome, o que chamamos de funções anônimas, |
| 30:29 | e por que funções não podem receber funções como argumento e devolver funções como resultado? Em |
| 30:37 | C temos algo rudimentar onde podemos passar o que chamávamos de callbacks,   ou ponteiros pra memória onde está outra função, mas como eu disse era uma forma rudimentar. |
| 30:46 | Provavelmente uma das coisas mais diferentes que Ruby trouxe da herança de Lisp foi o conceito de |
| 30:52 | lambdas para o mundo web, mesmo que ainda não tão avançado como era em Lisp, que implementava |
| 30:57 | as idéias de lambda calculus de Church. Podemos chamar de funções anônimas, ou um tipo mais |
| 31:03 | avançado que chamamos de closures ou blocos. Groovy também trouxe lambdas pra Java dentre |
| 31:09 | outras coisas. Mas esse tipo de composição abriu caminho pra coisas como metaprogramação e DSLs |
| 31:15 | ou Domain Specific Languages, que é como se fossem mini-linguagens em cima da linguagem principal. Em |
| 31:22 | vez de somente seguir o que a linguagem dita e se pudéssemos manipular a própria estrutura e sintaxe |
| 31:29 | da linguagem? A capacidade de moldar a linguagem pra ficar com a "cara" que você quisesse. Isso |
| 31:36 | tornou o chato estilo imperativo de programar, em algo bem mais maleável e flexível e divertido, |
| 31:42 | embora isso tenha aumentado mais a complexidade para quem está iniciando. Lambdas vieram pra |
| 31:48 | ficar e depois disso toda nova linguagem e mesmo as antigas adotaram esses recursos. Hoje Java, |
| 31:55 | C# e outros também ganharam lambdas e alguma capacidade de metaprogramação. Com a virada do século e a aceleração antes do crash que tivemos nesse período, o poder |
| 32:05 | computacional cresceu exponencialmente desde os anos 80, era a consequência da Lei de Moore, |
| 32:11 | que ditava que o poder computacional dobraria mantendo o mesmo preço a cada 12 a 18 meses. |
| 32:18 | Antes nos preocupávamos bem mais com a performance crua dos nossos programas pra tirar o máximo de |
| 32:24 | máquinas caras e fracas, mas agora as máquinas finalmente ficaram poderosas e acessíveis, |
| 32:30 | então passamos a ter surplus ou sobra de processamento. É importante salientar essa |
| 32:35 | mudança de perspectiva. Finalmente em vez de termos que sofrer com linguagens |
| 32:41 | simplistas e burocráticas em nome de economizar performance, porque não passar a pensar em formas |
| 32:46 | de tornar a programação mais agradável? Antes, linguagens mais simples de trabalhar era |
| 32:52 | quase sinônimo de baixa performance, mas agora que a web provou que performance pura não era o único |
| 32:58 | fator pra escolher uma linguagem, poderíamos começar a experimentar em funcionalidades e   a escola de lambda calculus começou a aparecer novamente, graças aos programadores de cabelos |
| 33:09 | brancos que haviam experimentado Lisp ou Scheme nas décadas de 70 a 80. E a tal orientação a |
| 33:15 | objetos também veria uma evolução graças a quem experimentou Smalltalk no mesmo período. |
| 33:21 | Vale lembrar que Lisp já tinha o conceito de máquina virtual e garbage collector décadas   antes de Java. E Smalltalk tinha o conceito de que tudo é realmente objeto e que objetos ficam |
| 33:32 | vivos mesmo se a máquina virtual seja desligada. Pense num VirtualBox ou VMWare quando você sobre |
| 33:38 | outro sistema operacional e então suspende a máquina. O Smalltalk tem esse conceito |
| 33:44 | de suspender a execução sem bootar e limpar a memória, dentro do que ele chama de imagens ou |
| 33:50 | no caso literalmente um banco de dados de objetos. Quando você abre uma imagem de Smalltalk ele pode |
| 33:56 | ter objetos em memória que foram instanciados 30 anos atrás. E você vai compondo novos objetos |
| 34:03 | usando os objetos vivos que já existem. Pensem que louco essa arquitetura. E falando em arquiteturas exóticas. Uma editora de livros que ganhou |
| 34:11 | notoriedade nessa virada de século foi a The Pragmatic Programmer, mesmo nome do clássico |
| 34:17 | livro de 2 signatários do Manifesto Ágil e que ajudaram a dar credibilidade à adoção de Ruby: |
| 34:23 | Dave Thomas e Andy Hunt. Eles também popularizaram o conceito de que todo programador deveria tentar |
| 34:30 | aprender pelo menos uma nova linguagem por ano, e em 2007 eles publicaram suas experiências com a |
| 34:36 | linguagem Erlang dos anos 80, de Joe Armstrong, de quando trabalhava na Ericsson. Erlang que |
| 34:43 | como eu expliquei em outro episódio tem uma sintaxe muito diferente, herdada de Prolog, |
| 34:48 | e que tinha uma arquitetura que ninguém no mundo web tinha visto ainda: o modelo de Atores. Erlang, |
| 34:54 | como Java, tem uma máquina virtual. Mas diferente da JVM ele vai um passo além: ele tem partes do |
| 35:01 | conceito de lambda calculus sem ser puramente funcional e partes das principais propriedades de |
| 35:06 | objetos sem ser orientada a objetos. Mas em vez de organizar as coisas como classes e objetos, |
| 35:13 | ele organiza como módulos e atores. Um ator é como se fosse um objeto com seu |
| 35:18 | estado encapsulado e se comunicando com outros atores via passagem de mensagem, |
| 35:23 | diferente do Java, C++ ou C# e mais similar a Smalltalk e Objetive-C. E mais do que isso, |
| 35:30 | num sistema operacional, além de carregar o Kernel ele também carrega serviços ou daemons |
| 35:36 | via um serviço de supervisão como systemd ou initd ou outros dependendo do seu sabor favorito |
| 35:43 | de Unix ou Linux. O Erlang tem algo similar, um sistema de supervisores que iniciam atores e se |
| 35:50 | encarregam do ciclo de vida dos mesmos. Erlang assim como a JVM ou Smalltalk são quase como |
| 35:55 | sistemas operacionais inteiros. Ao contrário dos interpretadores como Perl ou Python ou Ruby que |
| 36:01 | foram feitos pra iniciar rápido e terminar rápido, Erlang e Java funcionam melhor se você iniciar e |
| 36:08 | deixar elas parasitar a máquina toda. Assim como Java a idéia é subir um único |
| 36:13 | processo de Erlang e deixar que ele gerencie a máquina e seus programas rodando dentro dele. |
| 36:18 | Erlang não foi feito pra ser reinicializado toda hora, e sim pra ficar de pé eternamente, |
| 36:24 | inclusive essa era a grande funcionalidade pra indústria de telecomunicações: que você não |
| 36:30 | estivesse numa ligação e de repente fosse cortado da sua conversa porque alguém precisou subir |
| 36:35 | uma atualização. Ele tem inclusive o conceito de carregar código novo sem precisar necessariamente |
| 36:41 | reinicializar tudo. Na prática é mais ou menos o que Java e J2EE também preferem: ficar de pé sem |
| 36:49 | ficar reinicializando o tempo todo. Ficar de pé eternamente era o grande objetivo. Guardem essa |
| 36:55 | característica porque vai ficar mais óbvio quando falarmos de infraestrutura e Devops mais pra |
| 37:01 | frente. Mas o ponto é que essa linguagem super estranha despertou o interesse em arquiteturas |
| 37:08 | muito diferentes do que estávamos usando. Em 2009 Martin Odersky trouxe ao mundo o |
| 37:14 | resultado das pesquisas que ele vinha fazendo no mundo de lambda calculus e Java desde os |
| 37:20 | anos 80 e 90 na forma de outra linguagem que compilava em bytecodes Java como o Groovy. |
| 37:25 | Essa linguagem foi Scala. E ele se popularizou muito rápido porque adicionava funcionalidades |
| 37:31 | que tornavam o Java mais palatável, coisas como Traits que em Objective-C são o equivalente a |
| 37:37 | Protocolos e alguns diriam que é uma forma mais limpa de se fazer herança de funcionalidades. |
| 37:43 | Inferência de Tipos que eu já expliquei que vem de Hindley-Milner Type System de linguagens como ML, |
| 37:50 | que levantou outro dilema da programação: a discussão se linguagens de tipagem estática |
| 37:55 | são melhores ou não que tipagem dinâmicos. Em um super resumo, todos os dados no seu código, |
| 38:02 | variáveis, estruturas, listas, precisam ter tipos. Pense em tipos como moldes de biscoito. |
| 38:09 | Você precisa dizer de antemão qual o tamanho do molde você vai querer, pequeno, grande. No caso |
| 38:15 | de números, vai ser um inteiro de 32 bits? Um inteiro de 64 bits? Um inteiro sem sinal,   ou seja, sem números negativos? Isso é importante pra um compilador saber quanto de memória precisa |
| 38:25 | alocar pra cada coisa. Se fizer isso errado vai faltar memória e dar erro ou vai usar |
| 38:31 | memória de forma desnecessária, causando leaks ou vazamentos. Em linguagens dinâmicas como Lisp, |
| 38:37 | Python, Ruby a gente não determina isso no código, o interpretador pode determinar o molde, ou o tipo |
| 38:43 | certo, durante a execução do código, por isso chamamos isso de tipos dinâmicos. Eles têm tipos, |
| 38:49 | só que não estão estaticamente declarados no código como fazíamos em Java ou C#. |
| 38:55 | Declarar tipos é super tedioso e você pode errar quando está programando também. Simplesmente não |
| 39:02 | declarar e deixar o interpretador decidir só quando já está rodando é muito mais conveniente |
| 39:07 | mas pode causar desperdícios e alguns erros porque ele pode assumir o tipo que você não |
| 39:12 | esperava e você só vai descobrir quando estiver rodando. Inferência de tipos é meio que o meio |
| 39:19 | do caminho dos dois mundos porque a gente não escreve todos os tipos estaticamente no código, |
| 39:24 | ou seja, deixa de ser absurdamente tedioso. Mas o compilador vai tentar adivinhar os tipos em |
| 39:31 | tempo de compilação, daí o binário ou bytecode no final vai conter os tipos certos antes do |
| 39:37 | programa executar. Só isso já torna escrever em Scala muito mais conveniente do que escrever em |
| 39:43 | Java antigo. E Inferência de tipos foi melhorando e hoje se encontra em linguagens novas como Rust, |
| 39:49 | Swift, Kotlin, Typescript. Mesmo Java, desde a versão 5 você tinha   possibilidade de omitir alguns tipos como quando usava a implementação rudimentar de Generics. No |
| 39:59 | Java 8 você pode omitir tipos em declaração de lambdas. E no Java 10 ele ganha inferência de |
| 40:05 | tipos locais como C# também. Como iniciante você vai notar que estudar tipos é muito importante, |
| 40:11 | independente se você vai aprender uma linguagem dinâmica ou estática, se tem inferência de tipos |
| 40:17 | ou não porque mesmo inferência não é mágica, o compilador ainda precisa de algum contexto |
| 40:24 | ou anotação pra inferir o tipo certo. Na prática entenda: escolha o molde errado |
| 40:30 | e seu biscoito vai sair do tamanho errado. Scala cresceu rápido por um momento mas estagnou. |
| 40:35 | Um grande problema do Scala é que o binário bytecode que ele gera de uma versão de Scala |
| 40:41 | pra outra são incompatíveis. Ou seja, se você tem uma biblioteca compilada pra bytecode de |
| 40:46 | Scala 1 e você faz um programa com Scala 2 e tenta carregar a biblioteca antiga, vai |
| 40:52 | tomar um LinkageError da JVM. Isso era uma puta dor de cabeça: incompatibilidade binária entre |
| 40:59 | coisas compiladas em diferentes versões de Scala. A única forma de solucionar isso é você recompilar |
| 41:05 | tudo de novo sem reusar os binários antigos. É uma escolha de design do criador pra que ele pudesse |
| 41:11 | inovar a linguagem sem se preocupar em ficar dando suporte pra coisas antigas. Hoje em dia o Go meio |
| 41:17 | que exige a mesma coisa: ele prefere que você baixe o código fonte de todas as dependências,   em vez de baixar binários pré-compilados, e compile tudo junto de uma só vez. |
| 41:28 | Aliás, um comentário importante: eu falei lá atrás que você como programador vai precisar |
| 41:33 | sempre se preocupar com as dependências e as versões certas dessas dependências.   Lembra da discussão de compilação estática vs compilação dinâmica? Nos anos 80 e 90 |
| 41:43 | fabricantes de ferramentas de desenvolvimento como Borland, Microsoft, BEA, Oracle, |
| 41:50 | traziam tudo junto. Eles que se viraram pra ter todas as dependências que você iria precisar já instalado |
| 41:56 | ou de forma organizada que você pudesse comprar um CD e instalar na sua máquina. E mesmo assim |
| 42:02 | os anos 90 foram infestados do que chamamos de "DLL Hell" com programas diferentes que |
| 42:08 | precisam da mesma DLL mas em versões diferentes mas tudo no mesmo sistema entrando em conflito, |
| 42:14 | literalmente um inferno de DLLs. Com o advento do mundo open source,   de repente você podia baixar bibliotecas gratuitas de código aberto e instalar você mesmo. Mas eles |
| 42:24 | não estavam esperando por isso e virou uma grande bagunça no começo. Quem daquela época   nunca copiou um site em PHP que na sua máquina tudo funciona mas quando copia pro servidor |
| 42:35 | ele falha porque esqueceu de também copiar ou instalar as bibliotecas de dependência? Ou no |
| 42:41 | caso de Java esquecia de copiar os tais Jars e a aplicação não queria nem iniciar? |
| 42:47 | Assim que nascem ferramentas como Maven no Java que é um grande banco de dados   de bibliotecas binárias. Agora você tem um repositório centralizado onde quem |
| 42:57 | escrevia bibliotecas poderia postar lá e você como desenvolvedor podia declarar num arquivo em XML, |
| 43:03 | lógico, os nomes e versões das bibliotecas que precisava no seu projeto e o Maven se virava |
| 43:10 | pra baixar tudo que você precisava. E como uma biblioteca pode precisar de outras bibliotecas, |
| 43:15 | a gente costumava brincar que toda vez que precisávamos baixar todas as dependências do |
| 43:20 | projeto, o Maven baixava a internet inteira … duas vezes. Hoje essa posição é do NPM do |
| 43:27 | Javascript. No mundo Microsoft demorou mais pra algo similar aparecer mas no .NET você tem hoje |
| 43:33 | NuGet que inclusive passou a vir pré-instalado no Visual Studio 2012 em diante. No mundo de programação até esse ponto a gente tinha o Maven no mundo Java, e hoje muitos usam |
| 43:44 | junto o Gradle que é feito em Groovy como eu disse antes. Temos o CPAN no mundo Perl   até hoje. No mundo PHP era um híbrido, todo mundo baixava as dependências na mão mesmo tendo coisas |
| 43:56 | como o Pear. Hoje em dia felizmente PHP tem algo mais moderno que é o PHP Composer. No mundo Ruby |
| 44:02 | estávamos evoluindo a idéia de gerenciamento de versões com algo rudimentar implementado dentro do |
| 44:08 | próprio Ruby on Rails, que baixava as dependências direto do GitHub e depois evoluímos pra ferramenta |
| 44:14 | Bundler que na época se tornou o benchmark sobre o qual todo mundo se comparava. |
| 44:20 | Python preferia usar o próprio sistema de pacotes das distribuições Linux, então era |
| 44:26 | uma zona porque você precisava fazer pacotes RPM ou DEB ou outros pra cada distribuição e você |
| 44:32 | ainda tinha a zona de ferramentas como setuptools e easy_install, que de easy não tinha nada. Aliás, |
| 44:38 | pra uma linguagem que se orgulha de ter um único jeito pra fazer cada coisa,   instalar pacotes não era assim. Felizmente o mundo Python tem o PIP agora. No mundo Javascript como |
| 44:49 | já falei nasceu o NPM que ganhou concorrência com o Yarn, co-autorado pelo mesmo autor do |
| 44:56 | Bundler de Ruby. No mundo Elixir existe o Hex. No mundo Rust existe o Cargo. O mundo Go tem o dep, |
| 45:02 | mas aqui a coisa é um pouco mais controversa. Declarar dependências no seu projeto, instalar |
| 45:07 | de algum repositório e gerenciar os upgrades de versão é uma coisa extremamente importante. Você |
| 45:13 | nunca pode simplesmente atualizar todas as bibliotecas pras versões mais novas,   porque seu código vai quebrar. Por outro lado você não pode ficar pra sempre com versões velhas, |
| 45:24 | principalmente se elas tiverem relatos de buracos de segurança. Então você vai precisar atualizar |
| 45:29 | as versões e alterar seu código pra comportar as mudanças. Vai ter vezes que o autor da biblioteca |
| 45:36 | simplesmente desiste de manter sua biblioteca, vai ter buraco de segurança, agora você precisa   achar outra biblioteca pra substituir e aí vai precisar reescrever toda a parte do seu código |
| 45:47 | que dependia daquela biblioteca. É uma parte considerável do trabalho de ser um programador |
| 45:53 | e manter um projeto grande. Isso tudo dito, eu estava falando   da incompatibilidade binária do Scala. Assim como Python tem PIP, Ruby tem Bundler o Scala |
| 46:03 | tem o SBT que assim como muitas ferramentas tem a função híbrida de ser um gerenciador de pacotes e |
| 46:10 | também um executor de tarefas. O Scala jogou na mão dos desenvolvedores de bibliotecas gerenciar |
| 46:16 | diferentes binários de cada versão e tem um guia pra tentar manter compatibilidade binária ou o que |
| 46:22 | fazer quando isso não é possível. É meio uma zona porque toda vez que o Scala lança uma versão nova, |
| 46:28 | todo mundo que faz bibliotecas precisa ficar recompilando uma nova versão. Só que é irreal   achar que todo mundo vai fazer isso, então você como programador que depende dessas bibliotecas, |
| 46:37 | ou tem que ficar meses esperando todo mundo alcançar a versão nova, |
| 46:42 | ou você mesmo precisa lidar com recompilar manualmente e ver se nada quebra. |
| 46:48 | Eu mencionei Go porque o Go é diferente da idéia de Java ou Scala, ele não é uma máquina virtual, |
| 46:54 | nem é um interpretador. Ele é mais próximo de C++, ele compila direto num binário nativo |
| 47:00 | e é feito para fazer aplicações e não drivers ou coisas mais baixo nível como fazemos em C. E ele |
| 47:07 | prefere compilação estática pra criar binários que acabam ficando gigantes em tamanho mas que |
| 47:12 | você pode mover pra outro lugar e ele simplesmente funciona. O Go fez uma coisa que a comunidade Ruby |
| 47:18 | on Rails fez em 2008 ou 2009. Ele se integra direto com repositórios Git, em particular o |
| 47:24 | GitHub. Todo desenvolvedor de bibliotecas mantém o código fonte no Github. Você usa o recurso de |
| 47:30 | dep que eu falei pra baixar todas as dependências do GitHub e vai vir todos os código-fonte. |
| 47:35 | Como o intuito do Go é compilação estática ele precisa de todos os fontes disponíveis   pra gerar um binário único. Então a menos que a sintaxe da linguagem não mude de forma drástica |
| 47:46 | de uma versão pra outra, você sempre consegue um binário que não quebra no final sem depender de |
| 47:52 | linkagem dinâmica e LinkageError que o Scala sofre. O Elixir faz algo similar com o Hex, |
| 47:58 | o Rust faz algo similar com o Cargo. A idéia é sempre baixar os código-fontes |
| 48:04 | das dependências e deixar próximo do código do seu próprio projeto e compilar tudo junto |
| 48:09 | depois que baixa em vez de baixar bibliotecas em formato binário como os Jars de Java. |
| 48:15 | A diferença é que em Java o compilador é notoriamente lento. Em vez de toda vez compilar |
| 48:20 | binários a partir do código fonte, nós compilamos e empacotamos em zips que chamamos de JARs, é o |
| 48:27 | que se publica num Maven por exemplo. Daí você ou manualmente ou via Maven ou SBT no caso do Scala, |
| 48:33 | baixa os JARs pré-compilados. A mesma coisa é no mundo .NET, mas a Microsoft tende a ser |
| 48:39 | melhor em manter compatibilidade binária das suas dependências e agora de gerenciar   as diferentes versões de cada uma. Antigamente isso era importante porque não se tinha esse |
| 48:49 | conceito de código aberto, as empresas vendiam bibliotecas e preferiam não abrir o código, |
| 48:55 | na verdade eles faziam o máximo inclusive pra obfuscar os bytecodes gerados pra dificultar |
| 49:01 | alguém fazer engenharia reversa e ver como que ele foi implementado. Por isso eu salientei a diferença na virada do século da explosão do mundo de código aberto e |
| 49:10 | serviços como GitHub e linguagens interpretadas como PHP, Python, Ruby que precisam ter os códigos |
| 49:17 | disponíveis. Scala ainda acaba herdando essa parte do Java, mas linguagens como Go, Rust e |
| 49:23 | Elixir investiram em fazer compiladores bem mais velozes e baixar dependências na forma de pacotes |
| 49:28 | que embutem o código-fonte e compilar seu programa e as dependências tudo localmente em vez de |
| 49:34 | depender de versões binárias pré-compiladas. Voltando ao papo de arquiteturas, Groovy e Scala |
| 49:40 | trouxeram ao mundo Java uma sintaxe bem mais moderna do que o antigo Java e isso ajudou a |
| 49:46 | linguagem a evoluir muito da versão 6 até agora. Scala também trouxe a arquitetura   de Atores para o mundo Java e somado à The Pragmatic Programmer evangelizando Erlang, |
| 49:57 | trouxe também a possibilidade de ir direto na fonte, já que foi ela que introduziu o conceito   de Atores com seu framework OTP ou Open Telecom Platform. Softwares que foram escritos pra Erlang |
| 50:08 | antes também começaram a ganhar a luz do dia, em particular ejabberd e RabbitMQ numa época onde |
| 50:15 | produtos de comunicação como Facebook Messenger ou Whatsapp começaram a aparecer. Erlang, sendo um |
| 50:21 | produto desenhado pra indústria de telecom era um par perfeito pra produtos de comunicação em massa. |
| 50:28 | Mas sejamos honestos, a linguagem do Erlang é horrível de usar nos dias de hoje, talvez ok |
| 50:33 | pros anos 80, mas não pro século XXI. A comunidade Ruby começou a olhar Erlang e |
| 50:39 | rubistas como Tony Arcieri criou a linguagem Reia. Assim como a JVM do Java roda os bytecodes |
| 50:45 | compilados de linguagens como Groovy e não só do Java puro, o Erlang também tem uma máquina virtual |
| 50:50 | chamada BEAM com seus próprios bytecodes. O Reia foi o primeiro experimento de tentar modernizar |
| 50:57 | a sintaxe do Erlang, nesse caso imitando quase diretamente a sintaxe do Ruby para compilar em |
| 51:03 | bytecodes que rodam no BEAM. Em paralelo a ele surgir outra tentativa de fazer a mesma coisa, |
| 51:09 | desta vez de outro rubista, o brasileiro José Valim com a linguagem Elixir. |
| 51:14 | O Elixir foi uma tentativa mais avançada de não imitar diretamente o Ruby mas de criar uma sintaxe |
| 51:20 | moderna em cima das capacidades do BEAM do Erlang e também de criar um conjunto de bibliotecas base |
| 51:26 | para possibilitar realmente criar aplicações de verdade. Levou quase 4 anos pra Elixir finalmente |
| 51:32 | se tornar usável de verdade pra fazer aplicações de verdade em produção. Ele aproveita tudo que o |
| 51:38 | Erlang já faz mas com uma sintaxe e um conjunto de bibliotecas que remetem a coisas como Ruby, |
| 51:44 | aumentando muito a produtividade. Também por causa da influência do framework Ruby   on Rails surgiu o framework Phoenix para desenvolvimento de aplicações Web. |
| 51:54 | Ruby, como vocês já devem ter percebido, é uma linguagem que eu pessoalmente gosto. Ela ajudou |
| 52:00 | a influenciar outras linguagens como Groovy, depois da comunidade saiu CoffeeScript que |
| 52:05 | ajudou a influenciar o atual Javascript ES6, e também influenciou a sintaxe do Elixir e do |
| 52:11 | estilo da programação de suas bibliotecas. Em paralelo começamos a experimentar mais   com outras linguagens uma vez que o paradigma funcional, baseado no lambda calculus que falei |
| 52:21 | acima começou a ganhar terreno. Linguagens obscuras como Haskell e OCAML começaram a |
| 52:27 | ganhar um pouco mais de terreno, inclusive OCAML influenciando a linguagem F# no mundo .NET. Tudo |
| 52:34 | isso também ajudou a evoluir a própria linguagem Java, agora com mais de 10 anos de idade. |
| 52:40 | Para finalizar este episódio preciso falar da linguagem Go mais um pouco,   que eu já vim citando durante este episódio e o anterior. Todos sabem que é a linguagem do Google, |
| 52:50 | mas eu não gosto muito de Go porque pra mim ela representa um passo pra trás. Ela foi criada |
| 52:55 | em 2009 e ignorou muitos avanços que outras linguagens já estavam fazendo. Por exemplo, |
| 53:01 | a inferência de tipos que eu falei que o Scala popularizou e linguagens modernas como Swift, |
| 53:07 | Rust, C# e mesmo Java começaram a usar é menos poderosa em Go. Os tipos do Go são mais pobres, |
| 53:14 | ele não implementa Traits como Rust. Em uma linguagem criada em 2009 que se poderia |
| 53:20 | escolher tudo do melhor, ela preferiu o caminho mais fácil de escolher permitir o ponteiro nulo |
| 53:26 | que é causa de muitos bugs em muitas linguagens. O sistema de tipos é mais pobre, os Generics são |
| 53:32 | mais pobres. Ela não permite estender e redefinir a linguagem, não suporta sobrescrever coisas como |
| 53:38 | operadores. Ela é de fato uma versão melhor do que um C++, que cresceu tão monstruoso e complexo |
| 53:45 | que é realmente difícil de usar hoje em dia. Mas ela não evoluiu a linhagem das linguagens. Como |
| 53:51 | linguagem ela representa um passo pra trás. Nenhuma linguagem é perfeita mas cada nova |
| 53:57 | linguagem veio evoluindo em cima dos seus antecessores e o Go é basicamente mais um |
| 54:02 | caso da síndrome do Google de reinventar a roda. Eu quase diria que o Go é no back-end o que o |
| 54:08 | Javascript se tornou no front-end: nós usamos mais porque existem softwares importantes escritos em |
| 54:14 | Go, como o ultra famoso Docker, e agora ela está se tornando grande demais pra falhar, |
| 54:19 | em breve não vai mais ser uma escolha não usarmos. Vou deixar linkado nas descrições abaixo um link |
| 54:26 | com diversos artigos explicando todos os problemas dessa linguagem, ela compete com |
| 54:31 | Javascript em críticas. Porém, não se pode negar que ela de fato trouxe algumas coisas importantes |
| 54:38 | que vou explicar também no próximo episódio. No próximo episódio eu vou continuar essa história |
| 54:43 | com Go, mais Elixir, um pouco mais de Rust, mais de Javascript, talvez eu fale de Python |
| 54:48 | e principalmente vou tentar explicar mais da importância da Apple nos últimos 20 anos para |
| 54:53 | o desenvolvimento de software e como ela cruza com um evento importante no mundo open source. A história do Back-end não acabou, eu disse que ia ser longo. No episódio de hoje eu voltei à década |
| 55:05 | de 90 e dei uma breve introdução da evolução das arquiteturas de desenvolvimento de software, |
| 55:10 | retornei mais ao mundo Java e entendemos mais sobre a longa e inacabada novela chamada |
| 55:16 | gerenciamento de dependências, uma praga que vai te perseguir por toda sua carreira |
| 55:21 | de programação e finalmente começamos a ter um gosto das novas linguagens, começando com Groovy, |
| 55:28 | Scala, Erlang, Elixir, e um pouco do Go. Acho que finalmente passamos da metade deste tema |
| 55:35 | nesta série, não deixem de mandar suas perguntas nos comentários abaixo, se curtiu o vídeo mande |
| 55:40 | um joinha, assinem o canal e pra não perder a continuação dessa história clique no sininho e |
| 55:46 | não deixe de compartilhar com seus amigos. Como semana que vem temos Carnaval é possível que eu |
| 55:51 | tire o feriado pra descansar, vamos ver. Se não nos vermos até lá, bom Carnaval pra todo mundo! |
