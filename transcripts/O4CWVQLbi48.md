# Sua Linguagem É Especial? Parte 2 em 2001

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=O4CWVQLbi48
- **Duração:** 12:04
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:01 | Sua Linguagem É Especial! Parte 2 No episódio passado eu mostrei um |
| 0:04 | mini-framework que eu fiz com ASP clássico tentando imitar o que, na época, era o moderno |
| 0:10 | ASP.NET Web Forms. Estamos falando de 2001. Mas alguns meses antes desse framework eu fiz um |
| 0:16 | código que - olhando hoje - é ao mesmo tempo assustador - porque o código é |
| 0:22 | grande e bem feio - mas também surpreendente. Lembram quando eu falei no episódio de Blockchain |
| 0:27 | rapidamente sobre o Hype do NoSQL em 2010? E se eu te disser que eu já usava noSQL em 2001? |
| 0:35 | (...) Estamos em 2001, |
| 0:45 | como eu expliquei no episódio anterior eu estava desenvolvendo e dando manutenção em diversos sites |
| 0:51 | esportivos de propriedade da PSN como os sites do Corinthians e Cruzeiro aqui no Brasil. |
| 0:57 | Além disso havia todo um Gerenciador de Conteúdo usado pelos jornalistas pra postar artigos e |
| 1:03 | todo workflow de aprovação e publicação. Tinha área pra subir fotos, ferramentas pra montar |
| 1:08 | pesquisas online tipo polls e muito mais. Mas tinha 2 problemas que eu queria resolver. |
| 1:13 | Um deles é que antigamente, tanto em ASP ou PHP a gente fazia o HTML misturado com |
| 1:19 | o código. Se você já abriu o código fonte de um Wordpress, bom, era pior que isso. |
| 1:24 | Olha um exemplo disso, (aponta pro lado) HTML, dados, styles (já tinha |
| 1:29 | CSS mas ele não era tão poderoso como hoje e pouca gente sabia usar direito |
| 1:33 | ainda) e código tudo misturado. Era uma zona. Uma coisa que tava começando a se popularizar |
| 1:38 | na época era XML. Mas nem todo mundo entendia isso direito ainda. Muito menos no mundo ASP. |
| 1:45 | Assim como hoje em dia pra vocês é tudo JSON, pra mim naquela época o quente era tudo XML. |
| 1:51 | Tecnologia funciona assim, você não sabe os limites, vai testando. |
| 1:54 | Então o primeiro problema que eu queria resolver era separar os dados do HTML. Eu não lembro se já |
| 2:00 | existia o framework de Java Apache Coccoon, mas pra quem não sabe ele tinha exatamente |
| 2:05 | esse conceito. Pra quem não sabe o que é XSL é o Extensible Style Language. Hoje XSL é uma família, |
| 2:13 | por exemplo você talvez já tenha ouvido falar de XPATH? Faz parte. |
| 2:18 | Na época só existia o XSLT que é um padrão de transformação pra modificar um XML em |
| 2:24 | outro XML. Então eu pensei, ora, um exemplo de XML é HTML ou mais especificamente o XHTML que |
| 2:32 | a gente usava na época. Um HTML mais restrito e que é um XML válido. Pensei, porque não separar |
| 2:39 | os dados puros em um XML estruturado e usar transformações XSLT pra converter em HTML? |
| 2:46 | E foi o que eu fiz. Já que todo site de evento esportivo era basicamente o |
| 2:50 | mesmo template mas com dados diferentes, eu reduzi os dados de cada evento em XML |
| 2:56 | e usava essas transformações pra gerar o HTML final a partir de um template XSLT. |
| 3:02 | Vou falar que o código que eu fiz ficou tão complicado que só de bater o olho hoje |
| 3:07 | rapidamente nem eu consigo entender tudo que eu fiz. (risos) Quem me conhece sabe que eu |
| 3:12 | costumo dizer que coisas como testes unitários não é uma coisa que você faz pros outros, |
| 3:17 | é pra você mesmo de amanhã. E eu digo essas coisas por experiência, se eu pudesse voltar 17 anos no |
| 3:24 | passado eu daria um tapa na orelha em mim mesmo. Mas dá um desconto, em 2001, o assunto testes |
| 3:30 | automatizados era meio novo até em Java. Só pra vocês terem uma idéia o site do JUnit |
| 3:36 | só foi lançado 1 ano antes, em 2000. De qualquer maneira eu meio que consegui |
| 3:40 | fazer isso e pelo menos alguns eventos como Campeonato Paulista, Copa Libertadores, |
| 3:44 | Copa Merconorte, Copa Mercosul, eu acho que consegui implementar nesse framework. |
| 3:50 | Novamente, eu fiz componentes VBScript encapsulados em Windows Script Components |
| 3:55 | ou WSC. Eu criei componentes com nomes meio bizarros como TXMLSynchro, |
| 3:59 | TXMLFront, TXMLEvents, TXMLLanguage e TXMLTranslation. |
| 4:08 | Ou seja, como eram portais de conteúdo internacionais pra América Latina e Estados |
| 4:13 | Unidos, eu também tinha uma mini-engine de internacionalização. E suportando 2 |
| 4:19 | bancos de dados, SQL Server e Oracle. E porque tudo começa com T? Porque eu era |
| 4:24 | desenvolvedor de Delphi alguns anos antes. E em Delphi todos os componentes começavam com a letra |
| 4:30 | T e eu acabei pegando esse hábito de começar tudo com T. Em Delphi existia essa convenção porque |
| 4:36 | tudo que definia um Tipo começava com T. O componente principal TXMLSynchro usava uma |
| 4:42 | convenção de pastas e ele ia percorrendo as pastas em busca dos XML e os templates XSL pra |
| 4:49 | ir gerando os HTML. Esse conceito soa familiar? Se você já usou Jekyll por exemplo, é parecido, |
| 4:55 | só que em vez de ser Markdown, era XML. Então eu tinha um gerador de site em XML em 2001. |
| 5:02 | Na verdade, era um passo além. Os jornalistas podiam editar o conteúdo via um Admin que |
| 5:07 | gravava o XML no banco de dados. Daí eu pegava esse XML e aí convertia pra HTML via o XSL, |
| 5:14 | por isso era TXML Synchro o nome do componente. Ao mesmo tempo esse pacote era um gerador de |
| 5:21 | eventos, daí o outro componente TXML Event, daí cada nova Copa ou evento |
| 5:26 | era mais ou menos simples de gerar tudo. Agora vem o principal. Eu gostei desse conceito |
| 5:32 | de gravar XML natabela. E fui um passo além. Tinha um outro problema em todos os eventos esportivos, |
| 5:38 | todo campeonato era visualizado via uma chave. Sabe? Basicamente uma árvore de nós |
| 5:44 | convergindo na semi-final, final até o campeão. Mas todo evento tem chaves diferentes. O problema: |
| 5:52 | como eu represento isso num sistema multi-eventos? |
| 5:55 | A primeira coisa que você provavelmente teria vontade de fazer é criar uma tabela Evento, |
| 6:00 | uma tabela Jogo e uma tabela Time ou algo assim e ir criando uma linha no banco pra |
| 6:05 | cada nó da árvore. Isso é um design terrível. É o pattern que chamamos de Parent-Child. Terrível |
| 6:12 | porque não tem como trazer todos os nós da árvore num único select. |
| 6:16 | Árvore é uma das coisas ruins de se mapear numa tabela SQL. O jeito correto é usar um Nested Set, |
| 6:23 | vou deixar o link abaixo se você nunca ouviu falar em Nested Sets. Mas em 2001 |
| 6:28 | eu também não conhecia isso, só conhecia o Parent-Child que é o que eu falei agora |
| 6:32 | que é ruim, e pelo menos eu sabia disso. Aqui foi um insight. Gerenciar nós de uma árvore, |
| 6:39 | em SQL não é trivial. Gerenciar nós num XML era fácil, é um DOM, como o DOM que você manipula |
| 6:46 | hoje via Javascript num HTML, é uma árvore. CreateElement, Sibling, Child, etc. Mas não |
| 6:53 | existe banco de dados XML, não em 2001. Mas, bancos SQL tem campo BLOB. E se eu |
| 6:59 | simplesmente gravar o XML num campo blob? Daí com um único select eu puxo o XML inteiro que |
| 7:05 | representa a árvore toda e posso passar num DOM Document pra parsear e criar os objetos todos. |
| 7:11 | E se eu for além, e se eu usar XSL em cima do XML que veio do banco pra gerar o HTML final que o |
| 7:18 | jornalista ia ver no gerenciador de conteúdo? E se eu for além, e se eu usar esse troço novo |
| 7:24 | que o Internet Explorer 4 tinha inventado uns 3 anos antes chamado Dynamic HTML que |
| 7:29 | me permite modificar o HTML dinamicamente na página via Javascript? Cês tão vendo? Eu to |
| 7:34 | falando de tecnologia de ponta aqui. E se eu somar isso a esse componente novo chamado |
| 7:40 | MSXML que eu podia instalar tanto no servidor mas tinha componente pro browser. Isso permite, |
| 7:46 | via Javascript ou VBScript, fazer uma requisição HTTP pra aplicação ASP me devolver o XML e, |
| 7:53 | no client-side, eu poderia via javascript parsear com MSXML e ter o DOM na memória? |
| 7:59 | Agora se eu somar tudo isso. Eu posso fazer o jornalista clicar em qualquer nó da árvore, editar |
| 8:05 | o nome do time, pontuação e tudo mais direto na representação do DOM do XML na memória do browser. |
| 8:10 | Daí via Javascript gerar o XML que representa essa árvore e dar POST pro servidor, que daí ia |
| 8:17 | gravar direto na tabela do banco. O que eu tinha acabado de fazer? |
| 8:20 | Asynchronous Javascript and XML ou AJAX, nome que seria cunhado só em 2005, 4 anos depois. Eu |
| 8:29 | não fui o primeiro a fazer isso, muito antes do Google fazer o Gmail que popularizou a técnica, |
| 8:34 | a Microsoft já tinha o Outlook Web App em 2000 que era basicamente um Outlook versão Web que |
| 8:40 | usava o componente XMLHTTP, que é o precursor do XMLHttpRequest. Ninguém usa esse objeto direto, |
| 8:48 | hoje em dia vocês usam o que? Axios? Mas por baixo é o mesmo XMLHttpRequest. Esse componente |
| 8:54 | nasceu pela primeira vez em 1997 ou 98 com o Internet Explorer 4, mas acho que só começou |
| 9:01 | a ser usado de verdade com o IE 5 em 1999. E isso de serializar e deserializar árvores de |
| 9:08 | objetos XML num campo blob numa tabela é um tipo rudimentar de NoSQL. É o que |
| 9:14 | hoje a gente faz com Postgres e o tipo de campo JSONB. É basicamente a mesma coisa: |
| 9:19 | em vez de fazer um monte de tabela pra cada campeonato, eu reduzi tudo |
| 9:23 | numa tabela só sem schema, schemaless. O termo NoSQL foi cunhado primeiro em 1998 mas |
| 9:30 | só se popularizou quando a Last.fm reintroduziu o termo em 2009, 8 anos depois do que eu fiz. |
| 9:38 | Imaginem minha surpresa quando em 2005 eu vi todo mundo ficando doido com o conceito de |
| 9:43 | Ajax e em 2009 todo mundo ficando doido com o conceito de NoSQL. Eu juro que coçava a |
| 9:49 | cabeça pensando, é legal, mas isso é velho não? Lembrando que em 2001 não tinha ainda Hacker News, |
| 9:56 | nem Reddit, nem Quora, nem Stackoveflow. Esses conceitos nasceram organicamente combinando as |
| 10:03 | peças que eu aprendi fora da caixa e fazendo o que todo programador novo faz: over engineering. |
| 10:09 | Engraçado que eu tinha noção que a solução que eu fiz era bem overkill e over engineering mesmo pra |
| 10:17 | época, mas assim como muitos de vocês, é aquelas coisas que você faz mais porque é divertido e |
| 10:23 | menos porque é um bom custo-benefício. O objetivo dessa história é ilustrar como |
| 10:28 | sem querer eu cheguei nas mesmas conclusões que outras pessoas chegaram de outra forma. Acho que |
| 10:34 | muitas outras pessoas usavam da mesma maneira, mas não era tão famoso porque não tinha blogs, |
| 10:40 | não tinha meetups, não tinha screencasts nem nada disso em 2001. Se você não prestar tanta atenção |
| 10:45 | na propaganda, ou a forma como os outros dizem que você deve usar essa ou aquela ferramenta e |
| 10:53 | encarar tudo como peça de lego eventualmente você mesmo vai chegar nas mesmas conclusões |
| 10:58 | que os grandes nomes chegam. O que eu falo mais é o seguinte: se você |
| 11:03 | está seguindo o que os outros estão dizendo, você já está atrasado. Eu não sigo muito os outros, eu |
| 11:11 | penso: pra que esse troço serve ou não serve. Em vez de seguir o que os outros dizem “ah, isso só |
| 11:17 | dá pra fazer se for em Java” ou “ah, isso o melhor é se for em Javascript”. Eu penso. Quem disse? |
| 11:23 | Deixa eu testar. 99.9% das vezes não funciona, mas essa é justamente a graça do negócio. Programação |
| 11:30 | não é pra ser um negócio que todo código que vc digita precisa necessariamente ser útil pra |
| 11:35 | alguma coisa. É como dizer que toda vez que você for chutar pro gol precisa fazer gol. Senão nem |
| 11:41 | vale a pena tentar chutar. Se futebol fosse só isso, não teria graça, teria? E fazendo assim, |
| 11:46 | um vez por década você tem um momento eureka! E você, já teve seu momento eureka em algum |
| 11:52 | momento? Compartilhe com a gente sua história nos comentários abaixo. Se curtiram o vídeo |
| 11:57 | mandem um joinha, assinem o canal e cliquem no sininho! A gente se vê, até mais! |
