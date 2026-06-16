# A História de Ruby on Rails | Por que deu certo?

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=oEorhw5r2Do
- **Duração:** 1:20:50
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Finalmente! Finalmente, decidi fazer um episódio sobre Ruby on Rails. |
| 0:07 | Muita gente que me conhece nas interwebs como AkitaOnRails começou a me acompanhar quando eu comecei a evangelizar Rails mais de 12 anos atrás. |
| 0:16 | Quando comecei o canal talvez muitos pensariam que a coisa mais óbvia é que eu ia continuar falando de Rails, mas até hoje ainda não fiz nenhum video a respeito. |
| 0:25 | Esse é o episódio que eu queria ter feito 1 ano atrás mas que precisei publicar 58 vídeos antes pra dar o contexto. |
| 0:33 | Exagerando um pouco eu diria que todos os videos que eu fiz até agora foram um prólogo pra esse. |
| 0:39 | Também é apropriado que estou oficialmente iniciando o 2o ano do canal exatamente com esse tema. |
| 0:45 | Quem acompanha o canal já me viu mencionando alguns eventos históricos de Ruby on Rails como nesse episódio da série Começando aos 40 (episodio 1 de backend) Se alguém me perguntar hoje: é essencial usar Rails? |
| 0:56 | Honestamente não, embora eu diria que você se daria melhor usando Rails, sem dúvida. |
| 1:02 | Em 2019 temos muitas outras opções se, e somente se, você souber o que está fazendo. |
| 1:08 | Eu ainda considero Rails o melhor framework de ponta a ponta e o melhor ecossistema pra maioria dos casos, o pacote completo. |
| 1:16 | Os princípios e fundamentos que tornaram Rails especial em 2004 continuam valendo hoje. Mesmo que você não use Ruby, você provavelmente está "On Rails" e não sabe disso. |
| 1:27 | A história do Rails é um caso único e eu não vejo ele se repetindo de novo tão cedo. |
| 1:32 | A idéia do video de hoje não é ser a história totalmente completa, mas sim a história pelo |
| 1:38 | meu ponto de vista enquanto personagem nessa história, então vai ter alguns eventos talvez importantes que eu talvez pule. |
| 1:45 | Enquanto escrevia eu via as páginas aumentando, 10 páginas, 20 páginas, 30 … e resolvi que não vou cortar em múltiplos video, pra variar. |
| 1:53 | Vai tudo numa tacada só (... respira …), então vão pegar a pipoca, a água, vão no banheiro antes, e senta aí que lá vem história. |
| 2:00 | (...) Como é o jeito "certo" de desenvolver um software médio web hoje em dia? |
| 2:14 | Simples, começa criando um novo projeto no GitHub ou GitLab. Daí roda o generator do seu framework pra criar o esqueleto. |
| 2:22 | Faz o primeiro commit e dá push pro repositório e agora abre acesso pros seus colegas de trabalho. |
| 2:28 | Vamos organizar o trabalho da equipe num backlog e cada um vai fazendo uma pequena feature. |
| 2:34 | Cada feature você abre um novo Pull Request ou Merge Request, dependendo se for GitHub ou GitLab. Agora vamos criar os specs e fazer o código pra passar. |
| 2:43 | Ou se você não é adepto de test-first development ou TDD como Eu também não sou sempre, pode ser o bom e velho test-after, importante é subir seu código com um mínimo de testes. |
| 2:56 | Alguém insistiu em tentar subir código sem testes? git reset --hard nele! Junta os commits dos testes, do seu código, manda pro branch do pull request. |
| 3:04 | Finalizou? Pede pros colegas darem aquela revisada marota. |
| 3:08 | Agora que tem algum código já seria bom automatizar a execução dos testes, então vamos configurar um Travis-CI ou Circle-CI ou o CI integrado do próprio GitLab. |
| 3:18 | Agora a gente vai subindo novos códigos, vendo os testes de todo mundo da equipe rodando e passando. |
| 3:24 | E depois de alguns pull requests mergeados, temos uma primeira versão que já dá pra pro usuário brincar. |
| 3:30 | Hora de subir num ambiente de staging pra mandar pros usuários testarem. |
| 3:35 | Então bora criar um projeto no Heroku, definir os recursos extras como banco de dados que vamos precisar e git push heroku. |
| 3:43 | Sucesso! Aplicativo funcionando! E pra facilitar a vida, vamos criar um continuous deployment ligado ao CI pra toda vez que subir código novo e os testes passarem, ele já subir a versão nova pro ar. |
| 3:56 | Ou então pra cada pull request ainda não aprovado subir um ambiente de testes no Heroku em paralelo também. Assim a vida dos testers e QA vai ficar mais fácil. |
| 4:05 | Além disso podemos conectar serviços como CodeClimate pra constantemente avaliar a saúde do nosso código, ver se não estamos acumulando muito débito técnico. |
| 4:15 | Avaliar se não estamos deixando de atualizar bibliotecas com bugs de segurança. |
| 4:20 | Se quisermos adicionar recursos mais avançados como WebSockets, pra criar um chat ou fazer push notifications, devemos usar serviços como o bom e velho Pusher. |
| 4:31 | Pra maioria de nós não é necessário usar Node.js ou Go ou algo assim. |
| 4:35 | E podemos habilitar o New Relic RPM no Heroku pra monitorar o uso da nossa aplicação e avaliar possíveis gargalos que precisamos ir otimizando. |
| 4:44 | Ah, é bom viver nessa era de Software as a Service. |
| 4:48 | Tudo isso que eu acabei de explicar em 2 minutos é o dia a dia de qualquer projeto web comum, |
| 4:54 | ou pelo menos deveria ser caso você ainda esteja numa empresa que não segue esse tipo de fluxo de trabalho. |
| 5:00 | Eu diria que mesmo quem não segue, sente uma certa inveja e gostaria de estar trabalhando assim. |
| 5:06 | Porém lembre-se do que eu venho falando em todos os meus vídeos: essa é uma realidade hoje pra muitos, em 2019. |
| 5:13 | Isso não era verdade em 2004. E esta é a história de como a comunidade Ruby on Rails criou essa realidade. |
| 5:21 | Eu já contei parte disso no episódio do Diário de Henry Jones, mas em 2004 eu ainda |
| 5:26 | era um consultor Java e SAP, lidando com o peso e burocracia de projetos enterprise desenhados |
| 5:32 | em centenas de páginas de casos de uso e diagramas UML, usando coisas como IBM WebSphere ou BEA WebLogic. |
| 5:40 | Mundo open source não era algo que programadores enterprise discutiam muito, porque não parecia muito "profissional", era coisa de "agência de php pra sitezinho de sobrinho". |
| 5:51 | Profissionais usavam JSP, com algum framework proprietário da IBM ou da Oracle. |
| 5:57 | Pensem em um ambiente onde gerenciar banco de dados era um troço difícil, nenhum programador gostava de fazer ou mesmo podia fazer se quisesse. |
| 6:06 | Pra isso existiam DBAs. |
| 6:08 | Subir aplicativo web em produção era um saco, ninguém queria fazer, por isso existia gente de infra só pra subir versão nova em produção. |
| 6:16 | Gerenciar versionamento de software era um saco! Ninguém queria fazer! |
| 6:21 | Eu juro que existia emprego pra uma posição chamada "Gerente de Configuração" pra ferramentas |
| 6:27 | da Rational tipo Clearcase, que é literalmente alguém cujo job description era fazer commit do código! |
| 6:34 | (mindblown!) O que havia de mais avançado no mundo open source naquela época era poder desenvolver |
| 6:40 | apps em Apache Struts ou o novíssimo Spring na era do Java 1.4 pra 1.5, subir num tomcat ou glassfish local pra testar e num JBoss pra subir em produção. |
| 6:52 | Usar Subversion era um troço meio subversivo ainda. Povo preferia usar Clearcase ou Microsoft SourceSafe. |
| 6:58 | E mesmo usar Subversion era sofrido, tenta fazer merge de branches pra subir no trunk. |
| 7:04 | E desenvolver fora da rede offline não dava porque Subversion precisava estar online já que commit é o equivalente a commit mais push num Git de hoje. |
| 7:13 | Windows XP ainda era mais do que normal, com um tanto de antivirus tipo McAfee (video) pesando e mesmo assim com aquela sensação que ligar o XP na internet era que nem fazer sexo sem proteção. |
| 7:25 | Acho que eu formatava e reinstalava meu sistema com certa frequência só pra garantir. Eram tempos difíceis ... |
| 7:32 | Então em 2005 a gente esbarra num video com o chamativo título de "Blog em 15 minutos" |
| 7:39 | de um moleque desconhecido com cara de cagador de regra … não, não, não era eu, era esse dinamarquês chamado David Heinemeir Hansson que a gente se acostumou a chamar só de DHH. |
| 7:50 | Pff ... em 15 minutos meu Eclipse com os plugins de Websphere nem carregou tudo ainda. |
| 7:55 | Esse video aliás, tem quase 15 anos, e eu acho que vale a pena incorporar ele aqui. |
| 8:01 | Lembrem-se, eu sei que 15 anos atrás muitos de vocês assistindo tinham uns 10, talvez |
| 8:06 | 15 anos de idade, mas tente assistir assumindo que Nada que vocês usam hoje existia naquela época. |
| 8:20 | (... blog 15 minutos) |
| 8:42 | A gente chamava esse video também de "video do oops". |
| 8:52 | O David foi convidado pra vir pro FISL de 2005, o Forum Internacional de Software Livre que acontece em Porto Alegre, todo ano. |
| 9:01 | Um dos organizadores naquele ano foi meu camarada Rodrigo Kochenburger que hoje mora em São Francisco e é um dos melhores programadores que eu já conheci. |
| 9:09 | Antes de mim, pessoas como ele já estavam engajados nessa comunidade de nicho que era Ruby. |
| 9:16 | Agora, entenda que literalmente ninguém usava Ruby fora do Japão e mesmo lá era só um pequeno grupo. |
| 9:22 | Quando o DHH veio apresentar o Rails no FISL a platéia eram basicamente pythonistas e outros que tavam nos corredores. |
| 9:30 | Se tinha meia dúzia de rubistas, no FISL inteiro, era muito. |
| 9:34 | Pra dar uma noção, tirando pessoas como o Rodrigo não tinha quase nenhum rubista na ativa em 2005. |
| 9:41 | Tinha o Caffo que é outro Rodrigo, o Rodrigo Franco que tinha começado a primeira mailing list brasileira de Rails, a Rails-BR. |
| 9:48 | Tinha o Adriano Dadario e o Ronie Uliana que mantinham o antigo site/forum RubyBR. |
| 9:55 | Tinha o mestre Eustáquio Rangel que publicou o primeiro livro de Ruby no Brasil, e o Ronaldo Ferraz que publicou o primeiro tutorial de Rails em português. |
| 10:03 | Ainda ia levar algum tempo pra aparecer outros blogs que viraram referência aqui no Brasil como o Simples Ideias do Nando Vieira. |
| 10:11 | Aliás, eu provavelmente vou esquecer muitos nomes do começo da história, me perdoem e quem se lembrar da galera das antigas pode mandar nos comentários abaixo. |
| 10:20 | Naquela época o Vinicius Teles do Rio de Janeiro já tinha publicado seu livro sobre Extreme Programming e estava começando a aplicar em projetos Rails. |
| 10:29 | E outros nomes começaram a surgir como o Manoel Lemos, que hoje virou venture capitalist na Redpoint mas na época desenvolveu o BlogBlogs em 2006, antes de entrar pra Editora Abril. |
| 10:42 | A ótima equipe que de alguma forma o Marco Gomes conseguiu juntar foi quem construiu o famoso Boo-Box em 2007. |
| 10:49 | Na época existia os e-mail do UOL e tinha um produto paralelo que era o BOL ou Brasil Online, que foi feito em Rails lá por 2006 ou 2007 também. |
| 10:59 | Como falei em outros episódios eu acredito em ciclos de mercado. |
| 11:03 | É muito difícil identificar o começo de um ciclo, normalmente você se dá conta que tá dentro de um quando já passou da fase de early adopters. |
| 11:11 | Mas em 2005 eu sabia que Ruby on Rails, principalmente no Brasil, estava ainda começando o dia 1 desse ciclo. |
| 11:18 | É muito raro conseguir enxergar o dia 1 de alguma coisa que vai conseguir completar o ciclo de 10 anos e embarcar nele no começo. |
| 11:27 | Em 2005 eu tinha já uns 10 anos de carreira, e eu lembro que senti esse frio na espinha quando relembrei de 1995, ano que tivemos alguns dos lançamentos mais históricos até |
| 11:36 | então, o Java 1.0, o Delphi 1.0, o Netscape 1.0 com Javascript 1.0, o Windows 95 inaugurando a era 32-bits. |
| 11:45 | E ali estava eu, 10 anos depois, sentindo que um novo ciclo de 10 anos estava iniciando no mundo de programação. |
| 11:51 | Eu não podia imaginar o que viria pela frente, só agora em retrospectiva dá pra ligar os pontos. |
| 11:57 | Eu achei o David Hansson, o DHH, um cara muito inteligente, diferente da maioria puramente técnica. |
| 12:04 | Ele criou um produto que ninguém tinha feito igual até então. E não estou dizendo só em criatividade técnica. Estou falando em produto como um todo mesmo. |
| 12:13 | Aliás, ninguém se referia a sites como “produtos” nessa época. |
| 12:17 | Algumas coisas eram geniais só de bater o olho e algumas coisas a gente sabia que seria genial mas faltava ainda tempo pra se provar. |
| 12:24 | Vamos começar do básico. |
| 12:26 | Naquela época dentre algumas das linguagens mais usadas estava Basic, tanto do Visual |
| 12:31 | Basic, quanto VBScript de ASP e plugins de Office, e no novo .NET, daí C#, Java, PHP, ColdFusion, lembram de ColdFusion?? |
| 12:41 | Lembrando que estamos falando de C# acho que 2, Java 1.5, PHP 3 ou 4. Javascript ainda era não mais que um brinquedo pra soltar box de alert nas páginas. |
| 12:50 | ActionScript que era baseado em Javascript só existia no mundo Flash. |
| 12:55 | Nenhuma das novas linguagens que você conhece hoje tinham sido inventados ainda como Scala, Elixir, Go, Rust, Clojure, Swift, Kotlin. |
| 13:03 | Objective-C ou Erlang já existiam mas ninguém nunca tinha ouvido falar neles no mercado em geral. |
| 13:08 | Falando em Objective-C a gente tava entrando no final do ciclo de hype de orientação a objetos. |
| 13:14 | Nos anos 70 principalmente a discussão sobre o que era a melhor forma de descrever e programar objetos foi tema de inúmeras discussões, livros, eventos e eu argumentaria que a melhor linguagem orientada a objetos de todos os tempos foi Smalltalk. |
| 13:29 | Porém as empresas que mantinham as versões comerciais de Smalltalk como ParcPlace-Digitalk, |
| 13:35 | ObjectShare, acho que tiveram ingerências ou azar mesmo, e começaram a desaparecer nos anos 80. |
| 13:41 | E o aparecimento de coisas como Visual Basic e depois Java meio que foi o tiro de misericórdia. Smalltalk desapareceu quase totalmente nos anos 90, ninguém mais ouvia falar. |
| 13:51 | Hoje se você procurar ainda acha a Cincom ou a Gemstone e versões open source como o Squeak e Pharo. |
| 13:58 | Só alguns nichos ainda carregavam a herança de Smalltalk em linguagens como Objective-C |
| 14:04 | que a NEXT de Steve Jobs estava usando e essa linguagem obscura do Japão chamada Ruby, que é uma das únicas que se assemelha ao estilo do Smalltalk e Objective-C, mesmo hoje. |
| 14:15 | Escolher Ruby foi um acerto improvável. |
| 14:19 | Muitos poderiam criticar o fato do DHH não ter escolhido algo como Python que também é uma linguagem interpretada, orientada a objetos e com tipagem dinâmica, mas teria sido a escolha errada. |
| 14:30 | Eu nem sei se o DHH chegou a pensar tão longe assim, eu acho que foi mais sorte mesmo, mas ainda bem que ele escolheu Ruby no lugar. |
| 14:38 | Apesar da linguagem em si ter características excepcionais de ser super flexível, expressiva |
| 14:45 | e agradável de trabalhar comparado com Java, ele tinha Uma coisa que ninguém mais tinha: … ninguém usava, não tinha um ecossistema estabelecido. |
| 14:54 | É como você encontrar ouro e acumular, anos antes do mundo determinar que ele tinha valor. |
| 15:00 | O DHH começou como um freelancer, trabalhando da Dinamarca que é o país dele, pra agência chamada 37signals, de Chicago, que foi fundado por Jason Fried. |
| 15:09 | Ele já tinha trabalhado um pouco com Java, um pouco com PHP, e assim como todos nós naquela época, já estava de saco cheio da burocracia do Java ou dos bugs e cultura de "quick and dirty" do PHP e Perl do fim dos anos 90. |
| 15:23 | Então por 2003 ou 2004 a agência começou a migrar pra virar uma empresa de produtos, e o DHH resolveu dar uma chance pra esse tal de Ruby. |
| 15:32 | Assim ele desenvolveu o lendário Basecamp que é uma ferramenta colaborativa pra organizar pequenos projetos, e em 2004 ele extraiu o framework Ruby on Rails. |
| 15:42 | Aliás, primeira dica, nunca acredite num framework que não foi extraído de um aplicativo de verdade. (musica de suspense) Agora aqui entra a minha análise pessoal. |
| 15:50 | O fato do DHH ter se aliado a Jason Fried e o DNA da 37signals ser de design, especialmente numa época onde o design da Apple estava começando a despontar, foi extremamente importante. |
| 16:03 | Muito da linguagem minimalista do design da escola alemã de Bauhaus se misturou ao estilo de código, produto e filosofia do DHH. |
| 16:12 | Naquela época o normal pra um arquiteto enterprise era criar frameworks o mais flexível possível, |
| 16:18 | tudo explícito, tudo configurável, com o maior número de abstrações e indireções pra suportar projetos corporativos de qualquer tamanho e qualquer escala, e de preferência via comitê, com consenso de gente que nem de fato vai usar. |
| 16:32 | Era a filosofia de “e se amanhã eu precisar?”. |
| 16:35 | O DHH preferiu fazer o caminho inverso, que na época era muito inédito: criar um produto de verdade primeiro, que realmente funciona com usuários de verdade, e depois extrair as peças da fundação pra montar um framework. |
| 16:49 | Ironicamente era assim que antes empresas como IBM e Oracle extraíam seus produtos: depois de implementar primeiro num grande cliente, como o governo ou os militares. |
| 16:59 | (comercial java) Pouca gente fazia isso nos anos 2000. Arquitetos corporativos eram esnobes demais pra ir pra ralé e, deus me livre, fazer alguma |
| 17:08 | coisa que funciona de verdade. (excerpt) No mundo PHP o pessoal fazia produtos inteiros, vide Joomla, vide Drupal, vide Wordpress. |
| 17:16 | Mas eles raramente extraíam as partes comuns pra reusar em outro projeto, e a comunidade ficava fragmentada em ilhas. |
| 17:23 | O estilo de código quick and dirty macarrônico, muita otimização prematura, porque o PHP não era exatamente a coisa mais performática do mundo também, e diferente de Ruby o PHP de fato tomou muita porrada de verdade. |
| 17:36 | Em vez de "perder tempo" fazendo frameworks, eles ficavam cada um na sua ilha de produto e não se preocupavam muito em reuso. |
| 17:44 | O máximo eram as tentativas de imitar o mundo Java, e imitar justamente a parte ruim: fazendo frameworks gigantes demais como o Zend e criando monstrinhos como o primeiro Magento. |
| 17:55 | "Vamos ficar masturbando diagramas abstratos como se fosse arte barroca o dia inteiro". |
| 17:56 | (comercial php) Comparativamente o framework Ruby on Rails era muito pequeno. |
| 17:59 | Quando eu escrevi o primeiro livro de Rails eu também não sabia tudo de Rails ainda, então eu escrevi meu livro, capítulo a capítulo lendo o código fonte de cada parte. |
| 18:09 | O código naquela época era pequeno o suficiente pra dar pra ler de ponta a ponta. |
| 18:14 | Mais importante: o código que eu como desenvolvedor de uma app usando Rails precisava escrever era surpreendentemente pouco. |
| 18:21 | Vindo de J2EE a gente tinha que fazer um trilhão de boilerplates; exatamente porque o framework exigia tudo explícito. |
| 18:29 | Por exemplo, quero fazer um Entity Bean em 2000. |
| 18:32 | Precisava fazer um arquivo que é a interface, outro que é a implementação em si, outro que é um stub pra acesso remoto e por aí vai. |
| 18:40 | Cada coisa que você fazia num J2EE precisava de uns 3 ou 4 arquivos de boilerplate pra ligar as coisas no framework. |
| 18:47 | Não seria exagero dizer que se o projeto tinha 100 arquivos, só uns 20 era código de verdade com regra de negócio e tudo. |
| 18:54 | Por isso a gente precisava usar Eclipse com plugins: pra ele gerar e atualizar essas classes extras pra gente. |
| 19:01 | Era que nem os JavaBean antigos, se eu precisasse programar 10 propriedades, precisava implementar |
| 19:07 | 20 métodos: 10 getters e 10 setters e, de novo, o Eclipse gerava isso automaticamente pra gente. |
| 19:13 | Sério, era um saco programar com as primeiras versões de J2EE. (abaixa a cabeça) Mas aí eu vi que no Rails não precisava fazer nada disso. |
| 19:21 | Tinha quase zero boilerplates, era uma heresia! |
| 19:25 | Ele apresentou esse conceito de Convention over Configuration e DRY ou Don't Repeat Yourself, que é um pensamento meio óbvio hoje - ou pelo menos deveria ser - mas não era em 2004. |
| 19:36 | Toda entidade vai ter os mesmos 3 ou 4 arquivos de boilerplate que não serve pra nada, então pra que gerar? |
| 19:42 | Faça o framework inferir o que precisa gerar em tempo de execução e não gere nenhum arquivo que não seja absolutamente necessário. |
| 19:50 | E, mais do que isso, o pouco que eu preciso gerar, não precisa de um plugin numa IDE: roda um script na linha de comando e boom, gera tudo pra mim! |
| 19:59 | Isso era revolucionário! Daí é facil ver como um projeto que deveria ter 100 arquivos, em Rails tinha só uns 20 ou menos. |
| 20:08 | Justiça seja feita, o J2EE foi quem introduziu o modelo de MVC ou Model View Controller ou mais corretamente o Model 2 da Sun para o mundo em geral. |
| 20:17 | Só que era tão complicado de entender que fazia sentido você precisar de certificação de arquiteto Java só pra conseguir entender esse tal de MVC. |
| 20:26 | O Rails foi quem tornou MVC e conceitos como thin-controllers algo finalmente acessível pro público em geral. |
| 20:33 | O gerador do Rails sempre gera o esqueleto do projeto. |
| 20:37 | Você sempre sabe que controllers vai nessa pasta, models vão nessa pasta, e views vão nessa outra pasta. |
| 20:43 | Sem XMLs complicados pra configurar e duas dúzias de boilerplates que você nunca sabe onde colocar. |
| 20:50 | Daí todo projeto Rails tem mais ou menos a mesma estrutura e era fácil pular de projeto e saber onde ficam as coisas. |
| 20:57 | E a idéia se pagou porque 15 anos depois, a estrutura do Rails 5 de hoje é muito parecida com a do Rails 1. |
| 21:03 | Mais do que Convention over Configuration, desde o começo Rails era o que gente chamava de opinionated, ou seja, seguia as opiniões do DHH. |
| 21:12 | Isso é controverso até hoje, mas ele bateu o pé e insistiu em integridade conceitual. |
| 21:17 | Isso Não é uma democracia e Rails era um framework sem consenso e sem comitê. |
| 21:23 | Já não era sem tempo, consenso em mundo técnico é só o mínimo denominador comum dos membros. |
| 21:29 | Em vez de tentar abraçar o mundo e criar um framework que poderia ser pra qualquer coisa ele focou pra ser bom pra fazer apps similares ao Basecamp. |
| 21:37 | Tem gente que odeia isso, mas haters gonna hate. |
| 21:41 | Você pode trocar alguns componentes com alguma facilidade, mas quanto mais diferente você tentar ficar do Rails original, mais complicado vai ficar pra manter o projeto no futuro. |
| 21:51 | E aqui vemos a influência da Apple. |
| 21:54 | Macbooks bem que poderiam ter mais portas de expansão, ser mais fácil de trocar peças e assim por diante. Mas aí ele seria igual um Dell ou Lenovo. |
| 22:03 | O que torna o Macbook um Macbook é a forma. |
| 22:06 | Sempre vai existir a discussão de forma contra função mas qualquer coisa diferente só pra conseguir consenso com algum nicho destrói sua integridade conceitual. |
| 22:16 | Minimalismo parte do princípio que quem faz o design tem uma opinião muito forte sobre o que é esse mínimo. |
| 22:22 | DHH não é nenhum Jobs, mas ambos certamente tinham muita opinião e não seriam dobrados com facilidade, e ambos foram provados corretos ao longo da década. |
| 22:32 | Não é difícil de argumentar que se hoje Macs são dominantes no mundo de tech startups, foi por causa de Ruby on Rails. Sim, a culpa é nossa. |
| 22:40 | Vejam este vídeo de 2007 que foi feito em parceria |
| 24:17 | com |
| 24:52 | a Apple Education: |
| 25:11 | (apple video) |
| 25:31 | Um dos aspectos que vinham ligados por padrão era segurança. |
| 25:45 | Numa época onde era super comum sites sendo lançados em produção com erros primários |
| 25:50 | como cross site request forgery, cross site scripting, sql injection, session hijacking, tudo isso já era travado por padrão no Rails. |
| 26:00 | De novo um efeito de Convention over Configuration, ou seja, porque ter que ligar coisas manualmente que já deveriam estar ligadas por padrão? |
| 26:08 | Você precisava manualmente desligar as proteções se quisesse, e aí fica por sua conta. |
| 26:14 | Por isso apps Rails por muitos anos sempre estiveram entre alguns dos mais seguros por padrão. |
| 26:20 | Todo framework que te vende "flexibilidade" porque você mesmo pode escolher quais componentes por adicionar, sempre vai ser pior porque a grande maioria vai sempre escolher errado. |
| 26:31 | E se isso não fosse suficiente, nesse esqueleto que ele gera igual pra todo projeto ainda havia outra coisa Completamente diferente: um diretório chamado test. |
| 26:41 | E todo gerador de models, ou controllers ou views também gerava arquivos correspondentes de testes vazios nesse diretório. |
| 26:49 | Lembrem-se era 2004, o manifesto ágil de software tinha saído só 3 anos antes. |
| 26:55 | Vamos lembrar uma coisa, Gerry Weinberg fez testes pela primeira vez em cartões perfurados em 1989. |
| 27:01 | Kent Beck, um dos criadores de Extreme Programming começa a experimentar essa ideia e cria SUnit |
| 27:07 | em 1994 inaugurando a idéia da gramática de testes como test cases, asserts, e vai |
| 27:12 | fazendo pesquisa e escrevendo a respeito até finalmente consolidar a idéia de test driven development e lançar o JUnit no ano 2000. |
| 27:19 | Ou seja, a idéia de TDD não tinha ainda 4 anos desde que o mercado começou a ouvir falar. |
| 27:25 | Os mundos de desenvolvimento tradicionais, sejam .NET, Java, PHP, não estavam assim muuuuito empolgados em adotar, só alguns pequenos nichos. |
| 27:35 | Então nesse ponto era muito frustrante querer que os programadores fizessem testes, se você |
| 27:40 | tentasse provavelmente todo mundo ia tirar sarro de você na melhor das hipóteses ou você podia ser demitido mesmo, por ser improdutivo fazendo código irrelevante pro projeto! |
| 27:52 | Éee eu sei! De novo, aqui temos outro insight: é muito difícil implementar mudanças radicais como um TDD num ecossistema gigante que já existe e é resistente a mudanças. |
| 28:03 | Não vai acontecer tão fácil, mas existem estratégias. |
| 28:07 | Lembram que eu falei antes que um dos acertos improváveis do DHH foi ter escolhido Ruby, uma linguagem que ninguém usava? |
| 28:14 | Eis o motivo de porque deu certo: porque ele precisava introduzir um novo paradigma mas sem ter que gastar tempo convencendo antigos usuários de Ruby e migrando projetos inteiros pro novo paradigma, por isso dava pra se mover muito rápido. |
| 28:28 | No ano 2001 o mundo Ruby começou a se interessar com a idéia de testes no estilo de xUnit, |
| 28:35 | surgiram bibliotecas como testsup, depois Lapidary, finalmente RubyUnit e Test::Unit que seguia o estilo xUnit do Kent Beck. |
| 28:43 | E isso foi adotado no Rails do DHH, como padrão! |
| 28:47 | Não algo que você tinha que adicionar depois, mas algo que o framework obrigava você a manualmente tirar se não quisesse. |
| 28:54 | Junte a isso que alguns agilistas como Ward Cunningham e acho que Martin Fowler já estavam com um olho no Ruby porque ele lembra o Smalltalk que eles já gostavam como a verdadeira orientação a objetos, um estilo que ficou perdido nos anos 80. |
| 29:08 | Aliás, o primeiro livro de Ruby em inglês saiu em 2001, apelidado de Pickaxe por causa da capa, foi escrito por dois signatários do Manifesto Ágil, Dave Thomas e Andy Hunt. |
| 29:20 | Portanto você imagina que além de tudo essa comunidade ocidental de Ruby, começando do zero já iniciaria com Extreme Programming e The Pragmatic Programmer como filosofias de fundação. |
| 29:32 | Finalmente uma comunidade de software que estava começando do zero do jeito certo, ou seja, o jeito verdadeiramente Ágil de desenvolvimento. |
| 29:41 | Mais do que isso, o tipo de desenvolvedor que virava rubista era muito estranho. |
| 29:46 | O exemplo mais notável foi o lendário Why, the Lucky Stiff, que escreveu naquela mesma época o lendário livro que muitos usaram pra aprender Ruby: The Poignant Guide to Ruby. |
| 29:57 | Sério, olha algumas páginas desse livro (video). |
| 30:36 | Why era |
| 31:03 | um pseudônimo, e ele nunca quis revelar seu nome ou qualquer detalhe da sua vida, e quando |
| 31:09 | algumas pessoas começaram a fuçar e começar expor sua vida pessoal, inclusive revelando seu nome verdadeiro como sendo Jonathan Gilette, ele fez uma coisa que admiro até hoje. |
| 31:20 | Ele resolveu sumir do mapa em 2009, sem deixar vestígios. |
| 31:24 | Aliás, em 18 de agosto de 2019 faz 10 anos desde que Why apagou todos os seus repositórios e sites e desapareceu. |
| 31:33 | Ele era um artista que usava código pra se expressar, e ao contrário de um Python ou |
| 31:39 | Java com seu estilo de engenharia de ter só um jeito certo pra se fazer as coisas, e tudo deve ter consenso em comitê, o Ruby era o oposto: manipule a linguagem como você quiser. |
| 31:49 | Ele tinha a liberdade do Lisp com a expressividade do Smalltalk. Nenhuma outra linguagem da época permitiria algo como o que Why fazia. |
| 31:58 | Why the Lucky Stiff que inclusive é um nome que aparece citado uma única vez no romance The Fountainhead, de Ayn Rand. |
| 32:05 | Outra coincidência que eu achei muito providencial dado que Why fez a mesma coisa que o fim do livro A Nascente. |
| 32:11 | (video acabando com chunky bacon) Se você nunca ouviu a expressão "Chunky Bacon", você ainda não aprendeu Ruby do jeito certo (risos). Ruby começou sendo ferramenta de artistas. |
| 32:20 | A primeira geração de rubistas é um grupo que não se via igual talvez desde os anos 60 ou 70. |
| 32:26 | E o que eu falei que Ruby atraía desenvolvedores estranhos é porque eram pessoas que gostavam de expressar suas décadas de experiência com código. |
| 32:35 | Entrar num grupo gigante é fácil, é só ser um seguidor. Mas pra entrar num grupo com zero pessoas, você precisa ser um criador. |
| 32:44 | Por isso a primeira geração de rubistas trouxe gente como Chad Fowler, Rich Kilmer, David Black, o falecido e adorado Jim Weirich, depois agilistas como Dave Thomas ou Martin Fowler ou Uncle Bob. |
| 32:56 | Não deixem de assistir o documentário sobre o Why que eu co-apresentei na Rubyconf Brasil de 2014 com Kevin Triplett e meus artigos sobre ele que vou deixar nas descrições abaixo. |
| 33:07 | Então vamos recapitular nossa sopa primordial: uma linguagem obscura, que resgata o espírito |
| 33:13 | de Smalltalk e Lisp, a orientação a objetos original, que implementa corretamente os princípios |
| 33:18 | ágeis, e até mesmo outras noções como yagni ou you ain't gonna need it, que é o jeito minimalista que o DHH aprendeu na renascença da nova Apple de Steve Jobs, numa |
| 33:28 | comunidade de misfits e artistas wannabe, de desenvolvedores experientes dos anos 70 a 90 que queriam voltar a se expressar com código. |
| 33:38 | Claro que isso atraiu a atenção de muitos agilistas da época, incluindo metade dos signatários do manifesto. |
| 33:44 | E mais do que isso: chegamos ao fim da depressão do crash das ponto coms em 2001, estava na |
| 33:50 | hora de recomeçar a criar produtos e o Basecamp e o estilo Getting Real da 37signals se tornou o exemplo de como fazer isso. |
| 33:59 | Aliás, o Getting Real que aqui no Brasil chegamos a fazer uma tradução oficial em português também e que se tornou o manifesto da nova geração de empreendedores de produtos de tech startups, muito antes do surgimento de Lean Startup. |
| 34:11 | E claro, todo mundo deu risada de Ruby on Rails, um framework não-enterprise, que não |
| 34:17 | era infinitamente configurável, que vinha com defaults estranhos como MySQL em vez de |
| 34:23 | suportar Oracle, que não tinha suporte pra Windows, que te obrigava a apagar os arquivos de testes, porque ninguém queria fazer testes no mundo Java, e ainda usando Macs??? |
| 34:34 | Profissionais usam Windows XP, lógico! E ainda usando essa linguagem bizarra chamada Ruby que diz que é orientada a objetos mas não tem tipos estáticos como toda linguagem profissional como Java ou C#. |
| 34:46 | Lógico que ia ser um fracasso. (gandhi) Ah, e você não gosta do Jira hoje? |
| 34:51 | Imagina como o Jira era mil vezes pior em 2004, e como todo mundo ria que algo no estilo Basecamp nunca seria usado no mundo enterprise. |
| 34:59 | Se ainda não entendeu a gravidade da situação da época foi em 2003, 1 a 2 anos antes que |
| 35:05 | o Java Server Faces, o JSF tinha acabado de ser lançado e todo mundo estava adotando aquele lixo, que era um ASP.NET WebForms piorado pra Java! |
| 35:15 | Ah sim, pra quem gosta de falar em frameworks baseados em componentes e orientados a eventos, ASP.NET e JSF. (joinha) |
| 35:23 | A partir de agora, apertem os cintos, vamos fazer uma longa timeline, de uns 7 anos! |
| 35:29 | Eu não vou por temas e sim em ordem cronológica. Vocês assistiram os demais videos do meu canal né? |
| 35:36 | Porque agora muita coisa que eu disse neles vai se encaixar. 2004 foi um ano especial. |
| 35:43 | Em 1o de Abril o Gmail foi lançado, demonstrando um dos primeiros single page applications e o poder de tecnologias como Ajax. |
| 35:50 | Em 24 de julho saiu o primeiro beta público do Ruby on Rails versão 0.5. |
| 35:55 | Em 2 de Outubro o DHH apresenta o Rails pela primeira vez numa RubyConf, que na época estima-se que tinha umas 60 pessoas na platéia. |
| 36:03 | Três dias depois a O’Reilly promove a conferência Web 2.0 onde o termo foi cunhado pela primeira vez. |
| 36:10 | Em 10 de dezembro o Google lança aquela funcionalidade que você usa todo dia e nem pensa muito, o Google Suggest, que vai te dando sugestões à medida que você vai digitando os termos |
| 36:19 | de pesquisa, usando XMLHTTP e de novo demonstrando o poder do AJAX e comunicação assíncrona em tempo real. |
| 36:27 | Todo mundo queria fazer a mesma coisa. 2005 não ia ficar pra trás. |
| 36:32 | Logo no 1o dia do ano, a Robot Co-op lança o 43 Things; o site é um early adopter de Ruby on Rails. |
| 36:39 | Em 8 de fevereiro o Google Maps lança pra Internet Explorer e Firefox, redefinindo o nível de interação possível em um web browser. |
| 36:46 | Essa era a época que o Google tava literalmente on-fire lançando um app atrás do outro. |
| 36:51 | E alguns dias depois, em 15 de Fevereiro, Jesse James Garrett cunha o termo Ajax para descrever as novas aplicações web ricas como Flickr, Google Suggest, ou Google Maps. |
| 37:02 | No dia seguinte o Rodrigo Caffo cria a primeira mailing list brasileira de Rails, a Rails-BR. |
| 37:08 | Em março o britânico Peter Cooper começaria o blog Ruby Inside, o melhor blog pra se manter |
| 37:13 | atualizado no mundo Ruby e Rails e que daria origem anos depois ao conjunto de mailing lists como JavaScript Weekly, Ruby Weekly, RubyFlow, Frontend Focus, Node Weekly, Golang |
| 37:23 | Weekly e vários outros que centenas de milhares de desenvolvedores usam até hoje e se mantêm com um dos melhores canais pra se manter atualizado. |
| 37:32 | Em 7 de Abril tivemos outra revolução, o Lançamento inicial do sistema de controle de versão distribuída git. |
| 37:39 | E na sequência, em 2 de Julho, o DHH grava o demo do blog de 15 minutos, demonstrando a velocidade do desenvolvimento rápido com Rails. |
| 37:47 | Esse video se torna viral e todos os sites de todas as linguagens começam a notar a presença desse alien. |
| 37:54 | E não demorou muito, também por volta de julho tivemos o lançamento inicial do Groovy on Grails, um framework inspirado no Rails pra recém lançada linguagem Groovy que roda na JVM. |
| 38:06 | Foi o primeiro de muitos clones de Rails que apareceriam nos próximos anos. |
| 38:11 | Daí ainda em julho, no dia 7, é lançada a biblioteca javascript script.aculo.us 1.0.0 que possibilita um novo nível de interação em páginas web, tornando fácil adicionar os efeitos de estilo Web 2.0 nas suas aplicações. |
| 38:24 | No dia 21 de Julho, o framework Django é lançado depois de ficar em desenvolvimento por mais de 2 anos. |
| 38:31 | Em 4 de Agosto o livro Agile Web Development with Rails, primeira edição foi publicado pela PragProg, novamente escrito pelos agilitas Dave Thomas e Andy Hunt. |
| 38:41 | E foi em outubro de 2005 que o indiano Satish Talim inaugurou o curso online pra iniciantes RubyLearning que está ativo até hoje e foi importante naquela época. |
| 38:51 | De curiosidade, em 3 de Dezembro teve a Conferência Snakes and Rubies que levou os criadores do |
| 38:57 | Django e do Rails (video) pra discutir sobre frameworks web e os caminhos diferentes que eles tomaram. |
| 39:03 | Naquela época ainda não estava claro quem ia ganhar, mas os motivos que eu já citei antes devem deixar claro porque um foi muito diferente do outro apesar de terem começado parecido. 10 dias depois o Rails 1.0 é lançado. |
| 39:17 | (...) Nós tínhamos alguns dos melhores escritores de blog daquela geração, um dos melhores sempre foi o Ilya Grigorik do blog Igvita e que hoje é engenheiro de web performance do Google. |
| 39:29 | Seus artigos sobre performance no Ruby e Web em geral influenciaram toda a nossa geração e vale a pena reler ainda hoje. |
| 39:36 | Seu primeiro blog post foi ao ar em 28 de dezembro. E assim acaba 2005! As coisas começam a esquentar em 2006. |
| 39:43 | Primeiro, em março, Jamis Buck que entrou pra equipe Core do Rails renomeia seu projeto |
| 39:49 | SwitchTower pra se tornar o que conhecemos como Capistrano e a forma inédita de automatizar |
| 39:55 | deployment de projetos em máquinas de produção orquestrando via SSH, e essa ferramenta inspiraria diversas outras como o Fabric e Ansible de Python que vieram depois dele. |
| 40:07 | Ainda em março, no dia 21 o Jack Dorsey posta o primeiro tweet: "just setting up my twttr". |
| 40:12 | 2 dias depois o Eustáquio Rangel lança o primeiro livro de Ruby no Brasil e um mês depois em 5 de Abril eu escrevo meu primeiro post no que viria depois a se tornar o blog AkitaOnRails.com. |
| 40:24 | Em 22 de Junho acontece a primeira RailsConf em Chicago. |
| 40:28 | E já em 30 de Junho o rubista Hamptom Caitlin sobe o primeiro commit do SASS e inicia uma |
| 40:34 | nova era de meta-linguagens pra tornar possível ser capaz de codar decentemente em linguagens chatas como CSS. |
| 40:41 | Também já em 5 de Julho surge o JRuby 0.9, uma versão de Ruby que roda em cima da JVM e já consegue rodar Rails. |
| 40:49 | Charles Nutter e Tom Enebo continuam firmes e fortes mantendo a linguagem até hoje. |
| 40:55 | Muito antes de termos a onda de cursos online que temos hoje, a comunidade Ruby on Rails |
| 41:00 | foi pioneira em mostrar como cursos de qualidade poderiam ser feitos e foi Geoffrey Grosenbach que iniciou isso com seu Peepcode, que anos depois seria adquirida pela Pluralsight. |
| 41:11 | Muita gente, incluindo eu, aprendemos muito nos cursos do Geoffrey. |
| 41:15 | Pra continuar os lançamentos revolucionários, em 25 de Agosto a Amazon Web Services, ou |
| 41:21 | AWS, lança o Elastic Compute Cloud (EC2) e inicia de fato a Era do "Cloud Computing" como conhecemos hoje. |
| 41:29 | No dia seguinte, em 26 de Agosto o John Resig lança o então adorado e hoje denegrido jQuery. |
| 41:35 | Pouco mais de um mês depois em 6 de Outubro meu primeiro livro "Repensando a Web com Rails" saiu da gráfica, o primeiro de Rails publicado no Brasil. |
| 41:44 | Três dias depois em 9 de Outubro, o Ronaldo Ferraz lança o primeiro tutorial de Rails no Brasil. |
| 41:50 | E ainda em Outubro surge o primeiro framework concorrente de Rails escrito em Ruby, o Merb 0.03 que significa ("Mongrel+Erb"). |
| 41:58 | (video jobs iphone) E falando em 2007, logo no começo do ano em 9 de Janeiro o mundo da tecnologia recebe um novo marco: o lançamento do primeiro iPhone. |
| 42:09 | Poucos dias depois em 18 de Janeiro é lançado o Rails 1.2 lançado com o lendário RESTful |
| 42:15 | resources e o mundo finalmente aprendeu que HTTP não é só GET e POST e finalmente os outros verbos ganharam uso. |
| 42:22 | Foi neste ponto que mundo Web começou a proliferar a idéia de APIs REST como Roy Fielding publicou no ano 2000 definindo REST. |
| 42:30 | Ruby on Rails se tornou o gold standard em APIs. |
| 42:34 | Em 20 de Fevereiro o Christian Neukirchen define a interface Rack, inspirado pelo Web |
| 42:39 | Service Gateway Interface ou WSGI de Python que foi definido na famosa PEP 333 de 7 de dezembro de 2003. |
| 42:46 | Em 4 de março o saudoso Ryan Bates lançou o primeiro episódio do videocast chamado Railscasts. |
| 42:53 | Assim como Geoffrey da Peepcode ele criou dezenas de videos curtos sensacionais e muito bem produzidos e editados. |
| 43:00 | Novamente mostrando como videos de programação poderiam ser bem feitos e ensinando toda uma geração de Railers, incluindo eu mesmo. |
| 43:09 | Infelizmente ele parou por volta de 2013. |
| 43:11 | Eu diria que o sucessor espiritual do Ryan hoje é o Avdi Grimm com seu também excelente RubyTapas, cujo primeiro episódio foi ao ar em 24 de setembro de 2012, então ele realmente é quase uma continuação do Railscasts só que voltado ao Ruby em si. |
| 43:26 | Eu recomendo que vocês assinem. Na renascença das tech startups, começaram a surgir as famigeradas redes sociais, a versão moderna do muro das lamentações. |
| 43:36 | Na melhor fase tivemos Orkut, Friendster e MySpace que já estavam saturados mas o público pedia por mais. |
| 43:43 | Facebook estava só começando a aparecer, não lembro se nesse ano já tinha aberto no Brasil. |
| 43:49 | De repente um grupo que tinha crescido no mundo de blogs com a Odeo resolveu criar um modelo experimental de micro-blogging, que você podia enviar posts via SMS, e por isso tinha o limite de 140 caracteres. |
| 44:01 | E eles resolveram batizar esses micro-posts de tweets, inaugurando também a era de nomes bizarros pra startups. |
| 44:08 | E, mais importante, escolheram Ruby on Rails pra implementar. |
| 44:12 | Claro, ser inspirado pelo framework do blog de 15 minutos pra fazer uma plataforma de micro-blogging fazia todo sentido. |
| 44:19 | Eu abri minha conta em 2007 se não me engano. Agora, em Abril de 2007 inicia-se a maior infâmia da história até então, a famigerada |
| 44:27 | controvérsia do "Rails não Escala" iniciada por uma comunicação mal feita do Alex Payne, do próprio Twitter. |
| 44:34 | Lembram que eu expliquei que Twitter foi criado como uma plataforma de micro-blogging? Pensa se o Twitter tivesse sido programado em cima do Wordpress. |
| 44:42 | Só que 2 anos depois ele deu certo e milhões de pessoas começaram a usar, só que o uso mudou. |
| 44:48 | Em vez de ser micro blog posts, a plataforma começou a ser usada como um sistema de comunicação, ou seja, de broadcast de mensagens. |
| 44:57 | Claro que nem Ruby, nem PHP, nem Python, aguentariam isso. O problema nunca foi a linguagem, foi a arquitetura. |
| 45:05 | Só existia uma arquitetura conhecida na época que suportaria o broadcast massivo de mensagens, e se chamava Erlang. |
| 45:13 | Mas ninguém queria ter que usar a sintaxe do Erlang, e por sorte o Odersky tinha acabado de lançar o Scala, com o framework Akka, que copia a arquitetura de atores do Erlang e possibilita usar esse sistema em cima da JVM. |
| 45:27 | Ou seja, o Scala era a coisa mais próxima do Erlang que se tinha e, claro, fazia sentido mudar essa parte do back-end. |
| 45:33 | Não é que o Rails não escala, nenhum outro framework em nenhuma outra linguagem ia escalar. Hoje em dia, pra esse cenário seria Elixir. |
| 45:43 | Essa controvérsia seguiria o Rails por anos (e finalmente nos livramos disso, afinal se você acha que o Rails não escala, olhe pro GitHub, até hoje feito em Rails e usando |
| 45:53 | a última versão) Em 18 de Maio de 2007 o mundo de testes nunca mais seria o mesmo. |
| 45:59 | Já expliquei sobre a importância de desenvolvimento com testes e como isso foi um gancho importante |
| 46:05 | pra ganhar o apoio dos agilistas ao Rails, mas foi neste dia que o lendário RSpec foi |
| 46:11 | lançado, baseado nas experiências de Steven Baker desde 2005 e com a ajuda de Dave Astels, |
| 46:16 | Aslak Hellesøy que depois criaria o Cucumber, iniciando a era de Behavior Driven Development, |
| 46:23 | e claro o simpático David Chelimsky que a comunidade brasileira adorou conhecer quando eu trouxe nas duas primeiras Rails Summit Latin America em 2008 e 2009. |
| 46:32 | Todos os frameworks de teste na maioria das linguagens modernas que você conhece hoje como o Chai do Javascript é descendente direto do RSpec. |
| 46:43 | Seguindo na linha dos clones de Rails, ainda em maio de 2007 surge o Framework Play para Java. |
| 46:49 | Em 16 de Maio eu iniciei meu primeiro emprego oficial como Railer full-time na Surgeworks, uma pequena consultoria de Utah. |
| 46:57 | Mais pro fim vou falar da pessoa que se arriscou em contratar um brasileiro numa época em que isso era muito raro. |
| 47:03 | Eu trabalhei remoto por um ano mais ou menos, onde eu finalmente comecei a programar em Rails profissionalmente, aos 30 anos. |
| 47:10 | Só pra relembrar: eu deixei de ser sênior de Java e SAP e voltei a ser júnior e ganhar como júnior. |
| 47:17 | Por volta de Julho outro nome importante apareceu, o grupo do RailsEnvy com Gregg Pollack e Jason Seifer que contribuíram muito no estilo diferentão dos hipsters de Rails dessa época. |
| 47:29 | Eles aproveitaram a campanha Get a Mac que a Apple agressivamente publicou como comerciais |
| 47:35 | de TV entre 2006 e 2009, no auge da dominância da Apple do Zeitgeist, os famosos comerciais |
| 47:42 | "Hello I'm a Mac …. |
| 48:08 | (comercial mac vs pc) Então em 2007 Gregg e Jason fizeram diversos clones desses videos com o mesmo princípio |
| 48:17 | com Rails pra tornar mais divertido a forma como a gente via as demais tecnologias diferentes de Rails que até aquele momento ainda estavam vivendo no passado. |
| 48:26 | E eles fizeram vários videos começando com o famoso Hi, I'm Ruby on Rails … (comercial) |
| 49:57 | Vocês podem ver os videos no canal de YouTube do Gregg Pollack que vou deixar linkado abaixo. |
| 50:02 | Com o tempo o Gregg e Jason acabaram se separando, o Gregg montou a consultoria EnvyLabs e em |
| 50:08 | paralelo, seguindo nos passos de Geoffrey Grosenbach e Ryan Bates montou o famoso Code School, com uma grade mais estruturada pra ensinar Ruby on Rails e outras novas tecnologias. |
| 50:19 | E foram eles que criaram o conceito de Rails for Zombies que depois outras comunidades, como Python, copiaram também. |
| 50:27 | Não existia comunidade que gerava mais conteúdo técnico do que a de Rails naquela época. O Rails for Zombies foi o primeiro curso do Code School que foi lançado em 2010. |
| 50:36 | E o negócio foi vendido em 2015 também pra PluralSight onde vocês ainda podem achar os cursos. |
| 50:43 | Em 4 de Outubro tivemos o lançamento inicial do microframework Sinatra, também escrito |
| 50:49 | em Ruby mas que não tinha o objetivo de competir com o Rails, ele era mais focado em micro-aplicações |
| 50:55 | ou mesmo pra ser micro-serviço de APIs; ele é largamente copiado em outras linguagens até hoje. |
| 51:01 | Ainda em outubro, no dia 19 finalmente os rubistas Chris Wanstrath e Tom Preston-Werner começam a trabalhar no GitHub, literalmente de um Starbucks. |
| 51:11 | O Chris tinha o blog Err the Blog e começou criando bibliotecas de Ruby que conseguiam interfacear com Git. |
| 51:17 | Também em outubro, no dia 22 foi a primeira vez que eu organizei um evento, em São Paulo, |
| 51:23 | o RejectConf SP que teve muitos dos nomes do Ruby brasileiro que você reconhece até |
| 51:29 | hoje como Carlos Brando (CTO do Enjoei), Danilo Sato (ThoughtWorks), Fabio Kung (que foi do |
| 51:34 | Heroku por muitos anos e agora está no Netflix), Vinicius Teles (da HE:Labs), Carlos Villela (que foi da ThoughtWorks por muitos anos e foi pra DigitalOcean), George Guimarães (Plataformatec) e mais. |
| 51:46 | A Caelum do Paulo Silveira estava lá também ajudando com o coffee-break da galera. |
| 51:51 | Vocês estão vendo como as coisas estão acontecendo muito rápido, todo mês, às vezes toda semana estava saindo alguma coisa que influenciaria o mercado pelos próximos anos. |
| 52:01 | Como eu disse no começo, 2004 marcou o início de uma nova era pra Web. |
| 52:06 | (2008) E pra não quebrar a tradição do ano iniciar com alguma coisa, já no primeiro dia de 2008 tivemos nosso primeiro grande RubyDrama. |
| 52:14 | Era engraçado que antigamente não existia dramas em nenhum lugar, com frequência. Era tão raro na real que quando acontecia a gente chamava de RubyDrama. |
| 52:23 | Notem que dramas só começaram a acontecer com frequência com o surgimento de plataformas como o Twitter. |
| 52:30 | No caso do Ruby em 2008, Zed Shaw, o criador do Mongrel que foi o primeiro servidor de aplicações pra Rails, fez uma declaração bombástica de sua saída, chamando a comunidade Ruby de ghetto. |
| 52:41 | Isso reverberou por um algum tempo. |
| 52:43 | E ele não estava totalmente errado, só que ele não sabia jogar o jogo, o Zed é o tipo de cara tecnicamente excepcional mas de cabeça quente. |
| 52:51 | Mas, todo drama que parece tão importante pra você hoje, alguns anos depois, ninguém |
| 52:57 | mais nem se lembra, e o Mongrel foi rapidamente substituído por outros servidores de aplicação como o Thin, Passenger, Unicorn e depois o Puma que usamos hoje. |
| 53:07 | Mais importante do que isso, nesse mesmo dia 1o de Janeiro de 2008 foi quando o Heroku recebeu seu primeiro investimento seed de USD 20 mil da Y/Combinator. |
| 53:16 | Esse foi o mesmo ano que eu participei da minha primeira Railsconf nos Estados Unidos. Lá eu conheci o James Lindenbaum um dos fundadores do Heroku. |
| 53:26 | Eles estavam com um estande no evento e ninguém mais se lembra disso mas a primeira versão do Heroku era pra ser uma IDE Web pra desenvolvimento de software. |
| 53:35 | Só que eles viram que isso não ia rolar naquela época. Pense que 10 anos atrás ainda era muito difícil imaginar coisas como o Electron que usamos |
| 53:43 | hoje, o Google ainda não tinha começado a otimizar o Javascript, acho que nem tinha o V8 ainda. |
| 53:49 | Então eles tiraram essa idéia mas ficaram com a segunda parte que era onde os apps iam rodar, a infraestrutura de containers que surgiria muito antes do Docker e que inaugura o primeiro PaaS ou Platform as a Service. |
| 54:04 | Aliás, é disso que nasce as boas práticas do Doze Fatores ou 12 factors pra escalabilidade em 2007, escrito por Adam Wiggins que foi co-fundador do Heroku também. |
| 54:15 | E, claro, Ruby on Rails foi o primeiro framework que estava compatível com os Doze Fatores. |
| 54:19 | Se você é de Elixir, pra efeitos históricos vale relembrar o projeto Reia de Tony Arcieri, |
| 54:26 | que eu recomendo que vocês sigam porque ele manja muito sobre segurança e hoje em dia Rust. |
| 54:32 | Pra dar perspectiva, o primeiro commit do Elixir do José Valim foi em 9 de Janeiro de 2011. |
| 54:37 | O primeiro commit do Reia é de 21 de março de 2008 e ele é basicamente o Elixir uns |
| 54:43 | três anos antes: uma nova linguagem muito mais próxima de Ruby que compila em bytecodes que executam na VM Beam do Erlang. |
| 54:51 | No fim o Tony perdeu o interesse no projeto e foi fazer outras coisas como a biblioteca Celluloid pra Ruby que hoje é usado pra abstração de concorrência, seja de threads ou I/O assíncrono, inclusive hoje é dependência no Rails. |
| 55:02 | Já em 2 de Abril o desenvolvimento do Rails sai de Subversion e move seus repositórios |
| 55:08 | pro GitHub, dando credibilidade pra essa ferramenta chamada Git que quase ninguém tinha ouvido falar fora dos grupos de Linux e desenvolvimento do kernel. |
| 55:17 | Por muito tempo 90% dos repositórios que tinha no GitHub eram projetos Ruby e Rails, e todo mundo de fora começou a ficar interessado em testar. |
| 55:26 | Alguns dias depois, em 10 de Abril o GitHub sai do beta e lança publicamente. |
| 55:31 | Hoje em dia vocês nem pensam e basicamente adotam Git, mas nessa época além de Subversion, |
| 55:36 | no mundo open source ainda tinha gente que usava CVS mesmo, e a nova geração ainda estava entre coisas como Mercurial ou Bazaar. |
| 55:44 | Em 14 de Abril foi quando José Valim mandou seu primeiro commit pro Rails, foi o começo de 2 anos de trabalho que o tornou membro do grupo Rails Core em 2010. |
| 55:55 | Nesse ano eu estava tendo que me virar. Em Junho eu tinha saído da Surgeworks e entrei na Locaweb. |
| 56:01 | Embarquei pra Portland, no Oregon, pra Railsconf com a missão de conseguir integrar com a |
| 56:07 | comunidade de lá e organizar o primeiro grande evento de Rails no Brasil, na América Latina na real. |
| 56:13 | Com cerca de 3 meses só pra organizar tudo do zero, em 15 de Outubro tivemos o Rails Summit Latin America 2008, no Auditório Elis Regina do Anhembi em São Paulo. |
| 56:23 | Deu bastante trabalho mas os nomes que eu consegui trazer muitos vão reconhecer até hoje como Chad Fowler, um dos rubistas originais no Ocidente, fundador da Rubyconf, meus amigos |
| 56:33 | Ninh Bui e Hongli Lai da Phusion que desenvolveram o Passenger, um dos servidores de aplicação |
| 56:38 | tipo o Puma de hoje, o David Chelimsky que contribuía no projeto RSpec e Cucumber, o Chris Wanstrath, fundador do GitHub, o Dr. |
| 56:47 | Nic, o Obie Fernandez e mais. |
| 56:49 | Ninguém achava a) que um evento desses fosse possível, nem b) que ele seria consistente e duraria quase 10 anos! |
| 56:56 | Nessa primeira edição acho que já conseguimos juntar mais de 400 pessoas. |
| 57:00 | Outro acontecimento que vale lembrar nesse ano foi em 2 de setembro quando o Google finalmente |
| 57:06 | lança o venerado e hoje temido navegador Chrome junto com a engine de Javascript mais |
| 57:12 | importante de todos os tempos, o controverso V8, que vai dar início ao atual ecossistema Javascript. |
| 57:18 | Pare um instante pra considerar isso se você for iniciante. A Apple se inspirou no Konqueror do KDE, fez fork e transformou o componente KHTML no WebKit. |
| 57:29 | Daí o Google tinha contratado engenheiros do Firefox alguns anos antes mas eles nunca se acharam na posição de empurrar um novo navegador, mas chegaram num ponto que fez |
| 57:37 | sentido começar com o WebKit como fundação e, no melhor estilo Google, fazer um deles parecido a partir de um fork em 2013. |
| 57:45 | Pra fechar bem o ano, em 23 de Dezembro tivemos o merge dos projetos Rails e Merb e a equipe do Merb se junta ao Rails core team. |
| 57:54 | Lembram o RubyDrama do começo do ano do Zed Shaw? Ele tinha meia razão, sempre existiu um grupo fechado pra discutir o desenvolvimento do |
| 58:03 | Ruby on Rails, e isso não é nenhum problema, o DHH sempre quis ser como um Steve Jobs, |
| 58:08 | ele controla o Rails com mãos de ferro, e não só o código mas tudo relacionado ao “produto” Ruby on Rails, como a marca, o nome, os eventos e tudo mais. |
| 58:18 | Certo ou errado, ele owna as decisões em vez de se esconder atrás de um comitê. |
| 58:23 | Isso é integridade conceitual que todo projeto precisa: um ditador benevolente. Gostem ou odeiem, foi o que manteve o Rails intacto até hoje. |
| 58:33 | Mas deixa eu explicar esse episódio, só pra ter registrado. |
| 58:37 | Durante essa bolha de interesse explosivo em cima de Ruby on Rails, alguma empresas foram fundadas pra suportar a infraestrutura de startups que cresciam do nada como Twitter |
| 58:48 | ou GitHub, especialmente depois da famigerada controvérsia do Rails não escala do Alex Payne. |
| 58:54 | Uma dessas foi a Engine Yard, que estava competindo com a AWS e Rackspace. |
| 58:59 | Pense que em 2008 a AWS só existia fazia 2 anos e nem todo mundo ainda tinha entendido essa idéia de máquinas virtuais voláteis cobradas por uso. |
| 59:08 | Ainda dava pra pensar em competir com a AWS. |
| 59:10 | A Engine Yard foi fundada por pessoas excepcionais, em particular o EZRA ZYGMUNTOWICZ, super gente boa que eu conheci em 2008 também. |
| 59:20 | Ele era genial, tanto como programador, como quanto infra. |
| 59:24 | Por exemplo, na época ele criou um sistema de deployment em máquinas físicas usando o protocolo Jabber que se usa em instant messager. |
| 59:32 | Pensa você abrir faz de conta, um whatsapp de hoje em dia, e falar com sua infraestrutura e mandar ordens como atualizar as máquinas ou deployar apps, em 2008! |
| 59:43 | Além disso ele foi o único que enxergou como fazer um concorrente de verdade pro Ruby on Rails, dado sua experiência com hardware e otimização de Linux, ele começou fazendo |
| 59:53 | patches no Rails e no Mongrel e eventualmente criou o Mongrel ERB, um software que tira o Rails da equação. |
| 1:00:00 | Em vez de fazer só mais um micro-framework, ele resolveu competir pau a pau e fez um Rails que muitos argumentariam que era melhor, esse foi o Merb. |
| 1:00:10 | A equipe que a Engine Yard montou contou com programadores como o Yehuda Katz e Carl Lerche pra acelerar o desenvolvimento do Merb. |
| 1:00:19 | Tudo isso enquanto ele estava montando um data center, carregando servidores nas costas, montando rede, e ajudando outras tech startups a escalarem seus projetos em Rails. |
| 1:00:30 | Então eles rapidamente criaram uma excelente reputação. Eles eram um dos maiores patrocinadores da Railsconf. |
| 1:00:36 | Só que o erro foi que eles começaram a evangelizar o Merb agressivamente demais. Tipo, eles iam nas Railsconf falar mal do Rails e ofereciam o Merb como opção. |
| 1:00:46 | Eu disse que o DHH queria ser o Steve Jobs? Saibam que a Railsconf só pode acontecer com o aval dele, porque a marca Ruby on Rails é trademark do DHH e o evento também. |
| 1:00:58 | Imagina se na Macworld aparecesse um palestrante falando que Mac é um lixo, na frente do Steve Jobs. |
| 1:01:04 | …. Pois é, o DHH ficou furioso com isso e eu soube de uma conversa dele com o Tom Mornini, um dos co-fundadores e na época CTO da Engine Yard. |
| 1:01:13 | Eu estava online pouco depois que isso aconteceu falando com o Matt Aimonetti, outro core developer do Merb na época e o autor do post de reconciliação anunciando que o Merb seria mergeado no Rails. |
| 1:01:24 | Eu não estava fisicamente na sala ouvindo, então não me citem, mas do que eu ouvi foi um ultimato do DHH pro Tom Mornini. |
| 1:01:34 | Ou vocês páram com essa palhaçada de falar mal do Rails, na Railsconf, que inclusive é o seu sustento já que vocês atendem clientes de Rails, ou vamos "ter problemas". |
| 1:01:45 | Isso seria péssimo problema de relações públicas num estágio onde eles provavelmente ainda estavam no vermelho, procurando mais investidores e mais clientes. |
| 1:01:54 | Então no final a Engine Yard cedeu à pressão e anunciou parar o Merb. |
| 1:01:58 | Foi assim que o Yehuda Katz, Carl Lerche e Matt Aimonetti entraram pro grupo Rails Core Team e foi assim que o Merb morreu e nasceu o Rails 3.0. ufffff |
| 1:02:08 | (2009) Com toda essa controvérsia "resolvida" por enquanto, podemos começar o próximo ano, 2009 em 16 de Março com o lançamento do Rails 2.3; agora sendo uma aplicação Rack. |
| 1:02:19 | Finalmente, só agora, 7 anos depois do lançamento do framework baseado em I/O assíncrono Twisted |
| 1:02:26 | do Python, em 27 de Maio temos o lançamento inicial do Node.js graças ao V8 lançado um ano antes. |
| 1:02:33 | Ela permite que programadores escrevam Javascript client side e server side, pela primeira vez desde o falecido Netscape Livescript nos anos 90. |
| 1:02:42 | E só pra colocar um pé do Rails até nisso, Ryan Dahl mesmo disse que foi inspirado pelo parser do Mongrel de Zed Shaw pra fazer o Node.js. |
| 1:02:51 | Em 13 de Dezembro, Jeremy Ashkenas sobe o primeiro commit do Coffeescript, um dos primeiros transpilers pra tentar tornar programar em Javascript algo mais agradável. |
| 1:03:03 | Lembrando que nesta época ainda não tínhamos nem sinais do ES6 e Javascript pré-ES6 era um pesadelo de se usar. |
| 1:03:11 | Na época o Coffeescript era excelente pra se trabalhar, ele inventou o conceito de fat arrows pra funções anônimas, interpolação de strings e muito mais que hoje você tem |
| 1:03:20 | no ES6, então é muito fácil odiar o Coffee hoje sem saber como era em 2009. O Coffeescript serviu seu propósito em ajudar a evoluir o Javascript. |
| 1:03:31 | Virando mais um ano, por volta de abril de 2010 Steve Jobs publica o prego no caixão |
| 1:03:36 | do Adobe Flash com o artigo Thoughts on Flash e sedimenta o caminho para HTML 5 + CSS 3 + Javascript não só em dispositivos móveis mas também em desktops. |
| 1:03:47 | O Flash se tornou um morto-vivo desde então. |
| 1:03:50 | A intenção original de Jobs era empurrar o então melhor navegador com o então melhor engine Javascript que era o Safari no Mac e agora no iPhone como uma plataforma para criar aplicações web. |
| 1:04:02 | Eu diria que foi Jobs que sem querer tornou mainstream o conceito de Single Page Apps e o primeiro framework javascript a oferecer isso foi o hoje defunto SproutCore que deixou |
| 1:04:13 | descendente na forma do atual Ember, que foi criado pelo mesmo Yehuda Katz que trabalhou no Merb da Engine Yard e também no Rails 3.0 e resolveu o problema de dependências |
| 1:04:23 | do Ruby com a introdução do Bundler, que se tornaria referência pra todas as ferramentas |
| 1:04:28 | de gerenciamento que vieram depois dele como Hex do Elixir, Cargo do Rust, Npm e Yarn no Javascript e assim por diante. |
| 1:04:36 | Esse negócio de dois frameworks se unificarem e só sobrar um, como o próprio Yehuda lembrou na época, já tinha acontecido outras vezes. |
| 1:04:44 | No mundo Java o Struts 2 foi um merge com outro framework, o WebWork que se vendia como "Struts feito direito". |
| 1:04:52 | Em 1o de agosto de 2010 é lançado o Rails 3.0 com contribuições do Merb core team; um ano desde o lançamento do Rails 2.3. |
| 1:05:02 | O que sobrou da comunidade Merb viu as promessas de um caminho de migração e a idéia de que o Rails se tornaria mais próximo das idéias do Merb se esvair. |
| 1:05:11 | E esse foi o fim dessa história. |
| 1:05:13 | 2011 foi outro ano interessante, em 12 de Julho o Criador do Ruby, Yukihiro Matsumoto (Matz) e outros membros do Ruby Core, são contratados pelo Heroku. |
| 1:05:23 | Em 31 de Agosto o Rails 3.1 é lançado e o jQuery substitui o antigo Prototype como padrão. |
| 1:05:29 | E em 19 de Setembro eu anunciei a criação da minha primeira empresa de desenvolvimento de software própria, a Codeminer 42. |
| 1:05:37 | Aqui se iniciaria uns 4 anos de pesadelo na minha vida, vocês não tem idéia de como doeu criar uma empresa do zero, bootstrapped, sem investimento externo, pra crescer de forma sustentável e ser lucrativa. |
| 1:05:49 | Felizmente já faz uns 3 ou 4 anos que as coisas tão super bem, graças a de … graças aos esforços incessantes de quem trabalhou nesses últimos anos na empresa. |
| 1:05:51 | Finalmente, em Novembro de 2011 outro produto importante foi lançado, o Travis-CI, fundado por rubistas como Josh Kalderimis, Konstantin Haase, Sven Fuchs e outros, em Berlin, na Alemanha. |
| 1:06:02 | Eles conseguiram finalmente produtificar o conceito de integração contínua. |
| 1:06:07 | Não só isso como ofereceram um serviço gratuito pra projetos open source que se integra diretamente no GitHub e pela primeira vez projetos de software livre tinham a opção |
| 1:06:16 | de demonstrar seu nível de testes diretamente na primeira página dos repositórios. |
| 1:06:22 | Vocês podem ver que nós rubistas originais levávamos testes realmente a sério. |
| 1:06:27 | Só de bônus, foi também em 2011 mas não achei a data que Bryan Helmkamp criou o CodeClimate |
| 1:06:34 | pra automatizar ferramentas de análise de código como Rubocop, Flay, Brakeman e outros, se integrando ao GitHub pra demonstrar como anda a saúde de nosso código. |
| 1:06:44 | A partir desse ponto fomos refinando mais e mais nosso cinto de utilidades de qualidade de código Ruby e demos o exemplo pra todas as outras comunidades. |
| 1:06:55 | Nenhum até hoje conseguiu chegar no mesmo nível obsessivo de qualidade que nós das primeiras gerações de Railers quisemos alcançar. |
| 1:07:03 | Vou parar a cronologia por aqui, veja que estou parando 8 anos atrás, mas acho que |
| 1:07:09 | vocês podem ver como os acontecimentos do mercado em geral e do Ruby on Rails a esta altura já tinham mudado o mundo de desenvolvimento de software. |
| 1:07:18 | Novas linguagens começaram a surgir, muitos influenciados por Ruby. Novos frameworks começaram a surgir, muitos influenciados por Ruby on Rails. |
| 1:07:27 | O fluxo de trabalho havia sido já fundamentalmente mudado graças à adoção das práticas ágeis |
| 1:07:34 | de extreme programming, Os conceitos de produtos Web 2.0, adoção de SaaS, PaaS, mundo cloud e tudo mais derivou dessa geração de Ruby on Rails entre 2004 e 2011. |
| 1:07:46 | E em 2011 ainda estamos 2 anos antes do Docker ser lançado pela primeira vez, essa história é longa. |
| 1:07:52 | Lá no começo, em 2008 eu comecei a entrevistar diversos rubistas e outros desenvolvedores e publiquei no meu blog. |
| 1:07:58 | Se você é de Microsoft vai saber quem é Scott Hanselman, leia a entrevista no blog. Adrian Holovaty o criador do Django de Python? |
| 1:08:06 | Tá no blog também. |
| 1:08:09 | Criadores de conteúdo como Geoffrey Grosenbach que na época tocava o Peepcode e o Peter Cooper que na época tocava o Ruby Inside? Tão no blog também. |
| 1:08:17 | Depois da controvérsia que o Alex Payne do Twitter causou com o Rails não Escala eu entrevistei um dos primeiros engenheiros do Twitter, o Blaine Cook, confira no blog. |
| 1:08:27 | Membros fundadores do Ruby Central e os primeiros rubistas, Chad Fowler, David Black depois Evan Phoenix do projeto Rubinius e Ruby Specs, tão no blog. |
| 1:08:37 | Rails Core Team Alumni como Jamis Buck e Josh Peek, também tão lá no blog. Enfim, vou deixar a página com as entrevistas linkadas nas descrições abaixo. |
| 1:08:47 | Durante esse período entre 2008 e 2016 eu tive a oportunidade de trazer muitos dos principais nomes pra cá incluindo os fundadores do Ruby Central como Chad Fowler, David Black e Rich Kilmer, depois Evan Phoenix. |
| 1:08:58 | Trouxe gente do Rails Core da época como Matt Aimonetti, Aaron Petterson que é o Tenderlove. Fundador do GitHub Chris Wanstrath, depois Scott Chacon. |
| 1:09:06 | O Konstantin Haase do Sinatra e Travis-CI. E na última tivemos gente do Ruby Core Team do Japão com a presença de Akira Matsuda. |
| 1:09:14 | E falando em última, foi no dia 25 de setembro de 2016, que depois de 10 anos organizando eventos de Ruby, eu decidi pendurar as chuteiras. |
| 1:09:24 | Como tudo que eu faço fora do meu trabalho principal, eu nunca lucrei nada com os eventos. |
| 1:09:30 | Vamos dizer que como gerador de conteúdo eu dou um péssimo empresário, porque meu primeiro livro de Rails eu escrevi sem ganhar um centavo porque abri mão dos royalties pra baratear o custo, o objetivo era fomentar o mercado. |
| 1:09:43 | O blog eu até experimentei colocar ads por um tempo mas era muito feio então desisti e nunca monetizei. |
| 1:09:49 | Os podcasts que eu fazia com Carlos Brando ou o Rosa nunca monetizei. A Rubyconf eu nunca tive nenhuma compensação financeira. |
| 1:09:57 | E agora fazendo videos, eu também não monetizo. Faz mais de 10 anos que eu gero conteúdo de graça e espero poder continuar fazendo isso. |
| 1:10:06 | E eu não faço isso porque eu sou um cara legal, pelo bem disso ou pelo bem daquilo. Eu só faço assim porque eu quero. O dia que eu não puder, eu páro. |
| 1:10:13 | Na minha cabeça eu sempre tive uma noção que se meu conteúdo fosse atrelado a um incentivo financeiro, isso ia me comprometer demais. |
| 1:10:21 | Isso já aconteceu antes, quando tinha patrocinador ou grupos externos envolvidos. |
| 1:10:26 | E não tem nada que me irrita mais do que eu não poder falar alguma coisa porque certos grupos não iam gostar. |
| 1:10:33 | Por isso eu prefiro pagar as coisas do meu bolso pra nunca ser usado como plataforma pros outros. |
| 1:10:38 | Quando anunciei minha aposentadoria da Rubyconf Brasil, eu achava que finalmente ia conseguir passar um ano sem ter que pensar em eventos… ledo engano. |
| 1:10:48 | Em dezembro de 2016 uma idéia apareceu do nada na minha cabeça, eu juro que tentei tirar essa idéia da cabeça, mas aí eu e meu sócio começamos a montar a conferência experimental The Conf, mas isso é história pra outro dia. |
| 1:11:02 | Agora em 2019 estamos na 3a edição da The Conf, crescendo um passo de cada vez, como aconteceu com a Rubyconf Brasil. |
| 1:11:09 | Um dia eu juro que páro de fazer eventos. |
| 1:11:12 | E, de novo, eu quero que o evento seja o mais independente possível, basicamente eu e meus sócios pagamos praticamente tudo. |
| 1:11:14 | Essa história pra mim começou numa quarta-feita a noite em abril de 2006 quando eu me dei conta que quase ninguém no Brasil inteiro tava dando a mínima pra Ruby on Rails ou sequer sabia o que era isso. |
| 1:11:24 | Eu nunca tinha visto algo assim antes: a tecnologia certa, com os conceitos certos, tudo pronto, e todo mundo ignorando. |
| 1:11:32 | Eu tinha duas escolhas, me mudar pra São Francisco e tentar a vida em tech startup de Rails, ou tentar começar do absoluto zero no Brasil. |
| 1:11:41 | Obviamente escolhi a segunda opção e foi assim que eu comecei, com zero seguidores, zero views, zero empresas e zero emprego. |
| 1:11:49 | Preciso agradecer muito meu primeiro chefe de Rails, o Carl Youngblood que achou meu blog lá no começo e me mandou uma oferta de trabalho remoto pra Surgeworks. |
| 1:11:58 | A coincidência é que o Carl foi missionário no Brasil. Ele é mórmom de Utah. |
| 1:12:03 | E ele fala português brasileiro quase perfeito, com sotaque brasileiro e tudo, foi muito bizarro ver um gringo falar melhor português do que eu falo inglês. |
| 1:12:12 | E foi assim que me tornei o primeiro brasileiro da equipe e pra onde eu levei diversos nomes que você deve conhecer hoje como Carlos Brando, o Rodrigo Kochenburger que mencionei no começo, |
| 1:12:23 | o Marcos Tapajós do Rio de Janeiro, o Renato Carvalho de Brasília que depois fundou a Startaê e vários outros. |
| 1:12:30 | Com a missão de evangelizar Ruby e Rails no Brasil eu embarquei numa jornada de palestras |
| 1:12:35 | por todo o Brasil, fui pra Natal, Teresina, Brasilia, Fortaleza, Campos no Rio, Xanxerê, |
| 1:12:41 | Londrina, Porto Alegre, Curitiba, Salvador, Rio de Janeiro, São Carlos, Campo Grande, |
| 1:12:46 | além de ter tido a oportunidade de fazer amigos como o Nihn e Hongli da Phusion na Railsconf de Portland em 2008, ter ido pra Las Vegas pela primeira vez na RailsConf 2009, |
| 1:12:57 | ter conseguido palestrar pela primeira vez num evento internacional na RailsConf 2010, |
| 1:13:01 | onde eu conversei pela primeira vez com o DHH, com o Bob Martin e muitos outros, e de |
| 1:13:26 | lá fui palestrar em Buenos Aires na Locos x Rails, em Moscow, em Amsterdam, em Tel Aviv |
| 1:13:32 | em Israel que certamente foi um dos países mais fascinantes que eu já conheci, e finalmente em Tokyo em 2011 onde eu pude conhecer o grupo por trás do desenvolvimento do Ruby, incluindo |
| 1:13:43 | seu criador, o Matz, que assistiu minha palestra sobre como a comunidade de Ruby cresceu no Brasil. |
| 1:13:50 | Ao longo de 10 anos eu devo ter dado umas 200 palestras no Brasil e no mundo, foi uma jornada absurda que eu não imaginava que pudesse acontecer naquela quarta feira a noite em 2006. |
| 1:14:01 | Não podia deixar de relembrar os rubistas que nós perdemos. |
| 1:14:04 | O Jason Seifer, que foi parceiro de Gregg Pollack no RailsEnvy nos deixou em abril de 2017. |
| 1:14:11 | O excelente blogueiro de Ruby e criador de bibliotecas como o resource controller original, anterior ao inherited resources nos deixou 3 dias antes de acabar 2014. |
| 1:14:23 | Ezra Zygmuntowicz nos deixou em Dezembro de 2014. |
| 1:14:27 | O simpático e saudoso Jim Weirich que inspirou toda uma geração a se importar com testes |
| 1:14:32 | nos deixou também em 2014, em fevereiro. 2014 foi um ano ruim onde, por diversas razões, perdemos excelente pessoas na nossa comunidade. |
| 1:14:43 | Falando em Jim Weinrich se você gosta da linguagem Ruby devia se exercitar num de seus |
| 1:14:48 | legados, o site Ruby Koans com diversos exercícios diferentes do que vocês está acostumado e que vai te fazer pensar bastante. |
| 1:14:56 | E na mesma linha temos o Ruby Quiz do James Edward Grey II com mais dezenas de exercícios. |
| 1:15:03 | São excelentes opções pra você que quer juntar seus amigos pra aprender Ruby, como desenvolver com TDD, no formato de Dojo. |
| 1:15:10 | Ruby on Rails já completou 15 anos. |
| 1:15:13 | Foi uma década e meia de mercado e até hoje ainda temos um mercado enorme, onde rubistas |
| 1:15:19 | ainda estão entre os desenvolvedores mais bem pagos do mercado e onde o framework ainda |
| 1:15:25 | é o pacote mais completo, tanto do ponto de vista do framework em si e do ecossistema que se formou ao redor. |
| 1:15:32 | É o pacote mais pragmático pra montar uma tech startup, salvo raras exceções em componentes especiais que podem ser feitos em Elixir ou Go. |
| 1:15:42 | Mas se você não quer ter dores de cabeça, você ainda escolhe Ruby on Rails. |
| 1:15:46 | E se precisa de exemplos, não precisa ir muito longe, o GitHub que você talvez já use todo dia é Ruby on Rails, o gigante Shopify foi um dos primeiros a usar Rails e usa até |
| 1:15:58 | hoje, o AirBnb é Rails, Kickstater é Rails, a Bloomberg ainda usa Rails, o Twitch usa |
| 1:16:05 | Rails, Zendesk é Rails, Hulu que foi adquirida primeiro pela Fox e agora pela Disney é Rails. |
| 1:16:12 | Uma das coisas que muita gente critica é que Ruby on Rails é um framework que se tornou quase um monopólio dentro da comunidade Ruby, temos alguns micro-frameworks como Sinatra |
| 1:16:23 | e outros menores que tem seu lugar, mas depois do incidente do Merb, nunca mais outro framework chegou perto de competir. |
| 1:16:31 | Muita gente usa isso pra dizer como em Java, PHP, Javascript tem muito mais opção. |
| 1:16:37 | Só que isso é um problema na verdade, porque todo mundo pega uma escolha diferente e isso fragmenta a comunidade. |
| 1:16:45 | Agora você como desenvolvedor muda de empresa, vai encontrar um projeto com bibliotecas e estruturas e estilos completamente diferentes. |
| 1:16:53 | Toda vez você tem uma curva de aprendizado maior e você nunca realmente domina, é o caso de virar um Jack of all trades, master of none. |
| 1:17:03 | Como em Ruby, todo projeto em Rails é parecido, quando você muda de empresa, encontra o mesmo ambiente e já é produtivo imediatamente. |
| 1:17:12 | Por isso andamos tão rápido em tão pouco tempo, porque além disso todo o ecossistema |
| 1:17:18 | de bibliotecas, produtos e soluções só precisava focar num único framework e com isso nasceu Heroku, Travis, CodeClimate, New Relic. |
| 1:17:25 | Levou anos pras outras comunidades começarem a entender um pouco disso e agora no Python meio que Django é a escolha padrão, em PHP o Laravel é a escolha padrão, em Elixir o Phoenix é o padrão, em Crystal o Lucky ou Kemal são padrão, no Java não tenho certeza se Play ou Spring é mais usado, no Go não tenho idéia de qual é padrão mas acho que não tem, são várias opções, em Javascript nem me pergunta, não quero nem pensar nessa zona. |
| 1:17:31 | A única outra comunidade na época que pôde usufruir desse fator, pelo bem ou pelo mal, foi o ASP.NET da Microsoft. |
| 1:17:36 | A diferença é que o ASP.NET original era baseado nos paradigmas que tínhamos no J2EE do fim dos anos 90 e que foi justamente o que o Rails veio combater em 2004. |
| 1:17:47 | E em 2004 nenhuma outra linguagem tinha opção parecida. |
| 1:17:51 | Levou anos e anos até finalmente chegarmos no estágio de hoje, onde todo mundo finalmente |
| 1:17:58 | está trabalhando mais ou menos "on Rails" que quer dizer com foco em qualidade, em entregar |
| 1:18:04 | valor, em usar as práticas ágeis, usando essa geração de SaaS e IaaS com bons repositórios |
| 1:18:10 | de código como GitHub ou GitLab, bons gerenciadores de projeto especialmente os derivados do Pivotal |
| 1:18:16 | Tracker, embora os derivados de Trello também quebrem o galho, boas soluções de deployment de Heroku a soluções da AWS. |
| 1:18:24 | E até a Microsoft cedeu e com o ASP.NET MVC ele se aproximou dos paradigmas do Ruby on Rails também. |
| 1:18:32 | O modelo de desenvolvimento de software se divide em antes e depois de 2004. |
| 1:18:37 | E tudo que construímos nos 10 anos seguintes até 2014 é o que usamos até hoje em 2019 como o estado da arte. |
| 1:18:45 | Eu queria falar dos últimos 8 anos desde 2011 mas vou parar por aqui e quem sabe retomar num próximo episódio, mas o objetivo de hoje era registrar o que eu lembro que foi |
| 1:18:56 | importante pra mim no começo da história e qual foi a importância do surgimento do |
| 1:19:01 | Ruby on Rails e porque vai ser muito difícil algo parecido acontecer de novo: o DHH teve |
| 1:19:07 | a sorte de lançar o produto certo na hora certa, com diversos acontecimentos por todo o mercado convergindo no tipo de solução que ele apresentou. |
| 1:19:17 | O produto certo, feito com os princípios corretos, escolhendo as tecnologias e paradigmas |
| 1:19:22 | que mais tinham chance, e conseguindo convencer o grupo certo de pessoas, inspiradas pela |
| 1:19:29 | vontade de se expressar com código em vez de só seguir patterns chatos corporativos e fazer produtos enterprise que ninguém ligava. |
| 1:19:38 | Mas sendo muito honesto eu acredito que a influência do Ruby on Rails foi até mais ou menos 2012. |
| 1:19:44 | Depois disso finalmente as demais comunidades adotaram práticas similares e apareceu uma nova classe de problemas pra resolver. |
| 1:19:53 | O tipo de coisa que você precisa pra ter um Whatsapp, Discord, Hangouts, Facebook Messenger. |
| 1:19:59 | Eu diria que é onde o problema original do Twitter finalmente atingiu o mainstream e |
| 1:20:04 | realmente passamos a resgatar o modelo do Erlang em outras linguagens como Clojure, Go, Elixir, e o meio tapa buraco que foi Node.js pra esses casos. |
| 1:20:15 | Depois de 2012 que as linguagens mobile se modernizaram com Swift e Kotlin. |
| 1:20:20 | E também foi depois de 2012 que o Docker apareceu e a conversa sobre devops ganhou um level up culminando com o surgimento de ferramentas e plataformas como Terraform e Kubernetes. |
| 1:20:32 | Com tudo isso dito, missão cumprida! Por hoje eu fico por aqui. |
| 1:20:36 | Se ficaram com dúvidas mande nos comentários abaixo, se curtiram mandem um joinha, não deixem de assinar o canal e clicar no sininho pra não perder os próximos episódios. |
| 1:20:45 | A gente se vê semana que vem, até mais! |
