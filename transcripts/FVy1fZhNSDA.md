# RANT: A Realidade do "Software Livre"

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=FVy1fZhNSDA
- **Duração:** 37:50
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Eu acabei pulando o carnaval e não publicando |
| 0:05 | video semana passada. Eu fiquei em dúvida entre dois temas e qual eu ia falar primeiro e os dois |
| 0:11 | são trabalhosos pra explicar. Então deixei o assunto maturar na minha cabeça um pouco mais de tempo. O tema que eu escolhi falar foi sobre software livre. O problema é que software livre é |
| 0:21 | um puta tema espinhoso. Se eu escolher palavras um pouco ambíguas, vai chover hater nos comentários |
| 0:27 | porque todo mundo tem uma opinião forte sobre o assunto e na grande maioria das vezes elas estão |
| 0:32 | erradas ou no mínimo incompletas. O motivo desse tema é que de vez em quando ainda me perguntam qual é a vantagem de mexer com software livre. As respostas mais comuns, |
| 0:42 | de fato acabam sendo alguma coisa como "pra ajudar a comunidade" ou "pra outros poderem te |
| 0:47 | ajudar". Não está completamente errado, mas não é só isso. E pensando um pouco mais no assunto, eu vejo que os motivos vão ser completamente diferentes pra pessoas e situações diferentes. |
| 0:57 | Então acho que primeiro eu preciso explicar os mecanismos por baixo e daí você pode tirar |
| 1:02 | conclusões melhores. Na realidade, pra variar, eu quero quebrar algumas concepções erradas que |
| 1:07 | eu sei que muitos iniciantes ainda tem. Eu já expliquei alguns dos elementos dessa novela, por exemplo, no video da Lerna vs ICE eu expliquei a diferença entre licenças |
| 1:17 | permissivas e restritivas e a impossibilidade de mudar licenças retroativamente. E no vídeo |
| 1:23 | sobre a Apple e GPL eu explico sobre como o GPLv3 que foi criado pra brigar contra |
| 1:28 | DRM no episódio da Tivoização levou a Apple a migrar do compilador GCC para clang e evoluir |
| 1:34 | o LLVM até sair a linguagem Swift. Eu acho fascinante acompanhar as diversas novelas |
| 1:39 | jurídicas e discussões filosóficas em torno de software livre e como você é facilmente |
| 1:45 | enganado por ideologia barata se não parar pra ler além da propaganda. Por exemplo, talvez você |
| 1:50 | ache que é um defensor do software livre usando Linux e programas de código aberto todo dia. Mas |
| 1:56 | você não é 100% dentro da ideologia se navega em qualquer site moderno que executa Javascript. Já |
| 2:02 | pensou porque? (...) |
| 2:11 | Deixa eu começar com esse ponto que eu acho irônico. Muita gente pensa que usar Javascript é a |
| 2:16 | mesma coisa que contribuir com o mundo de software livre, quando de fato não é. Se você é adepto da |
| 2:22 | ideologia de software livre como Free Software e não somente como Open Source, você provavelmente |
| 2:28 | conhece as quatro liberdade de software de cor, certo? Vamos relembrar. "Número 0 - e, claro, em programação listas começam em zero -, a liberdade de executar o programa como quiser, |
| 2:38 | pra qualquer propósito." Se você vai num Google Docs, ou Slack, ou Spotify, isso está satisfeito. |
| 2:44 | Quando o seu navegador favorito carrega o site, ele carrega um monte de Javascript e executa o programa e você usa como quiser. O primeiro ponto está satisfeito. |
| 2:52 | "Número 1, a liberdade de estudar como o programa funciona, e mudá-lo pra ele computar como você |
| 2:59 | desejar. Acesso ao código fonte é pré-condição pra isso." Pronto, basicamente os principais produtos |
| 3:06 | feitos em Javascript hoje quebram essa condição. O código Javascript é carregado no seu navegador, |
| 3:11 | mas ele quase sempre vem em forma minificada. É impossível entender como esse código funciona porque minificação, que é uma forma de obfuscação criada pra minimizar o tamanho dos arquivos, |
| 3:21 | é quase próxima de compilação. Você não tem como modificar o cliente do Google Docs ou do Spotify nem criar sua própria versão facilmente. |
| 3:30 | Continuando. "Número 2, a liberdade de redistribuir cópias para ajudar seu vizinho." |
| 3:35 | Neeeh, impossível. E "Número 3, a liberdade de distribuir cópias da sua modificação pros |
| 3:41 | outros. Fazendo isso você dá uma chance pra toda a comunidade de se beneficiar de suas mudanças. Acesso ao código fonte é pré-condição pra isso." Pois é, também não. |
| 3:50 | E antes que os haters cheguem nos comentários, calma! Eu usei Javascript de exemplo só porque é o |
| 3:56 | alvo mais fácil já que a maioria de vocês estão aqui assistindo este video num front-end feito em |
| 4:01 | Javascript que é o YouTube. E o YouTube não é software livre. E não só o Javascript do |
| 4:06 | front-end, mas nenhum componente de nada que você usa todo dia, YouTube, Slack, Discord, Spotify, Netflix, Amazon, AliExpress, Uber, a maioria esmagadora dos |
| 4:16 | softwares que você usa no seu dia a dia, são todos proprietários e fechados. Isso não é imediatamente óbvio pros desavisados porque praticamente todas essas empresas e marcas |
| 4:26 | parecem associadas de alguma forma com software livre. Em muitos casos oferecendo bibliotecas |
| 4:32 | de código aberto que você pode consumir em seus próprios programas pra falar com as APIs dos produtos deles. Só que cliente de API é um software inútil sem a parte que roda |
| 4:42 | no servidor. É simples entender a consequência. Você faz hoje um aplicativo que usa o cliente |
| 4:47 | de API de um Dropbox. Digamos que amanhã o Dropbox feche, ou simplesmente decida fechar sua API. Seu aplicativo não serve pra mais nada. Era pra evitar esse tipo de cenário que |
| 4:57 | nasceu a idéia de software livre. Porém, o mundo SaaS inteiro se aproveita do que conhecemos como o GPL loophole. É uma brecha da licença GPL. Entenda, a GPL foi desenhada de tal |
| 5:09 | forma que se você copiar um software GPL e fizer modificações, por exemplo, construindo seu produto |
| 5:14 | em cima dele, e daí você comercializar ou distribuir o binário desse produto, você obrigatoriamente deveria distribuir o código fonte. Só que produtos SaaS não comercializa nem |
| 5:24 | distribui o conteúdo, todo o código e binários rodam somente dentro dos servidores. E executar |
| 5:30 | o código que você modificou é um direito do GPL. O que ele oferece aos usuários é apenas |
| 5:35 | uma API e um front-end em Javascript com uma licença de uso remoto. E contanto que esse |
| 5:40 | Javascript não contenha código GPL, também não há obrigação de abrir o código fonte. À medida que muita coisa se move nessa direção onde tudo roda remoto, nenhum dos códigos |
| 5:50 | proprietários é comercializado nem redistribuído. Porque você acha que idéias como usar iPad no |
| 5:56 | lugar de Macbook ou Chromebooks são tão atraentes pra Apple e pro Google? A licença GPL não está |
| 6:01 | sendo quebrada, só subvertida. O mundo de software livre obviamente notou isso e por isso existe |
| 6:07 | a licença Aphero GPL ou AGPL, criada em 2002. A diferença com a GPL normal é que se você usa AGPL |
| 6:14 | pra fazer um software as a service, seu código inteiro precisa ser aberto. E é por isso que nenhuma das empresas que eu mencionei e diversas outras, jamais vão chegar perto de software AGPL, |
| 6:24 | porque ela basicamente quebra o modelo de negócios de SaaS como é conhecido hoje. Um exemplo disso foi a entrevista do diretor de open source do Google em 2008, |
| 6:34 | Chris DiBona que declarou que AGPL é banido dentro do Google. Toda grande empresa que se |
| 6:39 | preza tem um departamento preocupado em avaliar todo o software desenvolvido internamente e suas dependências porque com o tanto de gerenciadores de pacotes que puxam coisas de fora como NPM pra |
| 6:50 | Javascript ou Pip do Python e outros, é muito simples uma biblioteca GPL ou AGPL acabar |
| 6:56 | entrando sem querer e contaminar todo o código. É um problema sério isso. Por isso todas as empresas |
| 7:01 | vão sempre escolher licenças permissivas como MIT ou BSD ou derivadas delas. |
| 7:07 | Não existe nada como o passar do tempo. 20 anos atrás empresas como Apple, Microsoft ou Oracle |
| 7:13 | eram os inimigos número 1 do software livre. Mas essa imagem foi revertida, e não é porque eles |
| 7:18 | aderiram ao software livre, mas porque aprenderam como subverter a idéia toda. Hoje em dia a gente |
| 7:23 | quer mais conveniência do que liberdade. Na verdade, hoje estamos mais dispostos a abrir mão |
| 7:29 | de parte da liberdade em nome de mais conveniência e por isso todo mundo está em jardins fechados, os |
| 7:35 | walled gardens, como dentro do ecossistema Apple, ou Amazon, ou Google ou similar. Todo o software |
| 7:41 | que você usa e todos os dados que você deixa pra trás estão fora do seu controle, não importa se você usa Linux ou não. É o oposto de livre. Até mesmo quem está reclamando de privacidade continua |
| 7:52 | dentro desses ecossistemas. Antigamente você podia ter uma máquina Linux, com software 100% livre, rodando offline na sua máquina e ser razoavelmente produtivo. |
| 8:01 | Mas hoje você não tem mais como, na prática. Se você trabalha remoto, vai ser obrigado a usar um comunicador, e ele vai ser um Slack ou similar, que é fechado. |
| 8:10 | Se precisa compartilhar arquivos vai ser obrigado a usar um Dropbox ou OneDrive ou Google Drive, |
| 8:15 | todos fechados. Se precisa compartilhar documentos, vai acabar usando Google Docs ou |
| 8:20 | ironicamente Office online, e eles são fechados. Basicamente, tudo que não funciona se você fica |
| 8:27 | offline, é software proprietário que encontrou caminho pra dentro do seu Linux. Dá impressão que não é nada demais porque você não tá instalando manualmente nenhum binário |
| 8:37 | proprietário na própria máquina. Na verdade, é pior: agora você não tem nem o binário mais: |
| 8:42 | fica tudo remoto. Você abriu mão até do binário. Pior ainda, em vez de pagar uma única vez pelo |
| 8:48 | software, você paga uma assinatura pelo direito de uso temporário desse software remoto. Pare |
| 8:53 | de pagar e você não tem mais acesso ao software e muitas vezes nem aos seus dados. Não tem nem como |
| 8:58 | piratear esse software, porque não existe mais um binário. No máximo um front-end e um cliente de API, que são meras cascas descartáveis. Nem o conteúdo que você gera nesses softwares |
| 9:09 | fica mais na sua máquina, fica na sua conta online do Google, ou da Apple. Mas e o tanto de software livre que existe hoje em dia em lugares como GitHub? Sim, existem diversos |
| 9:19 | softwares muito importantes e muito bons de forma livre e aberta. Só não os que você precisa usar |
| 9:25 | todo dia. Com o passar do tempo e a maturidade no entendimento de software livre pelas empresas, |
| 9:30 | um modelo ficou mais óbvio: mantenha todo o código crítico dos seus produtos fechados, |
| 9:36 | mas abra alguns que podem se beneficiar da contribuição de fora. A kernel do Linux é um exemplo disso. É muito caro pra uma empresa criar e manter seu próprio kernel, |
| 9:46 | que dirás seu próprio sistema operacional inteiro. O valor desse desenvolvimento e manutenção não |
| 9:51 | compensa o investimento. Portanto é vantajoso dividir esse custo com outras empresas. O |
| 9:57 | Linux é o que é hoje por causa do investimento compartilhado de dezenas de empresas da Linux |
| 10:02 | Foundation que pagam programadores pra manter seus interesses em dia. Empresas como IBM, Microsoft, Intel, Oracle, RedHat, e várias outras. E todo mundo se beneficia disso. É um compromisso |
| 10:14 | pragmático. Não soa tão legal se você for um purista que achava que um Linux da vida era |
| 10:19 | feito só com programadores anônimos voluntários aleatórios, mas essa é a realidade. Pra um Google compensa manter sua linguagem, o Go, como código aberto. Nem tanto pra ganhar |
| 10:29 | contribuições de fora, mas porque eles precisam constantemente contratar bons engenheiros. E é |
| 10:35 | sempre melhor se os candidatos aparecerem já dominando a linguagem que eles usam. Mas não espere que eles liberem o código fonte do algoritmo de pesquisa, ou do banco de dados |
| 10:46 | BigTable, ou qualquer outra coisa assim que se usa internamente. Esses códigos sempre foram |
| 10:51 | e sempre vão ser fechados. Mesma coisa o Facebook, pra eles compensa contribuir com linguagens como PHP, que eles usam internamente, vale a pena liberar o React |
| 11:01 | como código aberto. Novamente eles precisam recrutar engenheiros o tempo todo. Essa é a |
| 11:07 | principal motivação pra manter uma comunidade externa de desenvolvedores. Brigar contra |
| 11:12 | software livre nos anos 90 e começo dos 2000 se mostrou extremamente danoso. A Microsoft sofreu |
| 11:18 | isso na pele, sendo corretamente reconhecida como inimigo da liberdade. Pra contratar bons profissionais, especialmente em um ambiente de abundância excessiva de hoje, |
| 11:27 | com vários outros competidores, essas empresas precisaram mudar a estratégia. O marketing |
| 11:33 | precisava mostrar que eles não eram o inimigo. Só que abrir o código secreto dos seus principais |
| 11:38 | produtos nunca foi uma opção. Em vez disso elas se tocaram que dá pra pagar um preço mais barato |
| 11:44 | e colher os mesmos benefícios. No começo dos anos 2000 todos os departamentos jurídicos |
| 11:49 | já se atualizaram sobre as leis de propriedade intelectual de código frente a licenças de código aberto. O truque é simples: primeiro de tudo, você não precisa abrir o código dos produtos |
| 11:59 | mais importantes, só do que não é crítico, como clientes de API, linguagens de programação, |
| 12:04 | frameworks, bibliotecas, tudo aquilo que é commodity. Segundo, nunca usar GPL e |
| 12:11 | muito menos AGPL internamente. Felizmente pras empresas, depois do movimento de software livre, que é de fato um movimento social, ganhou força o movimento open source |
| 12:21 | ou código aberto, que é um movimento pragmático de uma metodologia de desenvolvimento. Software |
| 12:27 | Livre de verdade quase nenhuma empresa de fato adotou em seu núcleo e você vai notar que todas elas escolhem falar "open source" ou código aberto e raramente "free software" ou |
| 12:38 | software livre. Open source é muito fácil de adotar porque elas costumam preferir licenças permissivas como MIT e BSD em vez de licenças restritivas como GPL e AGPL. O movimento open |
| 12:50 | source meio que "matou" o software livre. E como pra maioria da população, incluindo a maioria dos desenvolvedores que nunca vão estudar sobre isso; open source e software livre são parecidos |
| 13:00 | o suficiente pra passar batido. Podem dar uma olhada nas suas empresas favoritas e quais projetos abriram e quais são as licenças. A licença do Go? É similar a um BSD. A licença do |
| 13:11 | V8 que é o coração do seu Javascript? É similar a um BSD. A licença do React? É MIT. A licença |
| 13:17 | do novo Terminal do Windows que roda Bash? É MIT. A licença do VS Code? É MIT. Eu poderia apostar |
| 13:23 | que a maioria das coisas que você usa no seu dia a dia, tirando o Linux, não é GPL. Ou seja, não é software livre, é só open source. Então todo mundo começou a adotar open source sem pensar |
| 13:34 | muito e achando que é tudo a mesma coisa. Mas qual a importância dessa diferença? Pense na Amazon Web Services ou AWS. E pra não ser injusto pense também no Google Cloud ou Microsoft |
| 13:44 | Azure. Use qualquer um dos produtos deles, seja AWS Lambda, seja Google App Engine, seja Azure |
| 13:51 | Machine Learning. Você nunca mais vai sair deles. Porque as alternativas são todas incompatíveis e |
| 13:56 | uma vez que seu negócio estiver rodando em alguma delas, você está preso. Pelo próprio tamanho, escopo e complexidade, é praticamente impossível ter opções de código aberto que você poderia rodar |
| 14:06 | no seu próprio servidor. E o modelo de negócio de vender assinaturas em vez de licenças tornou tudo tão mais barato e acessível, que você sequer conseguiria manter algo similar a um custo |
| 14:15 | equivalente. Esse é o poder da adoção em massa num período de abundância econômica. |
| 14:21 | Antigamente a gente se preocupava que se todo mundo continuasse a usar Office, todos os documentos do mundo um dia poderiam ficar ilegíveis se o Office sumisse, ou se decidíssemos |
| 14:31 | que não queríamos mais pagar a Microsoft e sim outra alternativa. Era um caminho sem volta. Deu um trabalhão e pressão de governos pra fazer a Microsoft criar um formato aberto que são os |
| 14:42 | atuais DOCX e XLSX pra Word e Excel por exemplo. O antigo formato DOC e XLS eram binários fechados e |
| 14:49 | sem documentação. As versões novas são basicamente arquivos XML abertos compactados num zip. Levou |
| 14:56 | anos pra conseguir isso e hoje em dia ninguém mais dá a mínima porque edita dentro do Google Docs e ninguém sabe internamente que formato que eles usam. Como ele exporta em formatos conhecidos |
| 15:06 | a gente não liga tanto. Pior, a gente não baixa e guarda os arquivos na própria máquina, todo mundo |
| 15:11 | se acostumou a confiar no servidor do Google como mais seguro. Como foi que começamos a abrir mão |
| 15:17 | das nossas propriedades assim? A resposta é simples: nós somos baratos. Eu |
| 15:22 | não lembro mais a fonte mas eu acho que o case de marketing que me contaram era assim. Cervejarias de diversas marcas precisam competir pra serem escolhidas pelo consumidor. |
| 15:32 | Não lembro se foi a Heineken que teve a boa idéia de distribuir cerveja grátis ou muito mais barato pras fraternidades de faculdades, pras cervejadas e festas de estudantes. Óbvio, |
| 15:42 | se todo mundo aprende a tomar Heineken na faculdade, as chances de continuarem a tomar Heineken quando se formarem e entrarem na vida adulta aumenta muito. |
| 15:50 | Toda empresa que pode faz isso. Sempre que você vê uma grande marca patrocinando eventos |
| 15:56 | em faculdades, dando descontos generosos nos seus produtos, custeando salas de computador |
| 16:02 | e material de aprendizado, não é porque eles são bonzinhos. Eles estão competindo pela sua fidelidade exatamente na época onde estudantes são facilmente compráveis com um coffee break |
| 16:12 | barato em evento e algumas camisetas e stickers. É muito barato comprar a fidelidade de estudantes. E |
| 16:18 | como funciona! Não faz sentido na minha cabeça ser fã de empresas. Eu pago pelos produtos, |
| 16:24 | e pronto, eu não sou outdoor ambulante pra ficar carregando a marca delas de graça, ou em troca de um brinde. Se parece um exagero, vamos olhar a AWS. A |
| 16:34 | comunidade de desenvolvimento em geral parece gostar bastante dela, afinal a grande maioria |
| 16:39 | das tech startups e produtos web escolhem ela como primeira opção. Afinal ela oferece suporte |
| 16:45 | de muitos produtos open source que você quer usar como o MySQL ou Postgres no produto RDS |
| 16:51 | ou o ElastiCache que implementa Memcached e Redis. Em dezembro teve o evento deles, o AWS re:Invent |
| 16:57 | onde muita gente comemorou que eles vão começar a oferecer o NoSQL Cassandra como opção gerenciada, |
| 17:03 | o que deve aumentar adoção do Cassandra por mais gente. Note que toda propaganda da AWS sempre faz |
| 17:09 | menção de como eles gostam de contribuir com o mundo open source. E se eu parar aqui, realmente |
| 17:14 | parece que é isso mesmo. Vamos aos fatos. Segundo o blog post da RedisLabs, |
| 17:20 | que é a mantenedora do Redis e que já tiveram vários problemas com a AWS, novamente, o que a |
| 17:25 | propaganda diz não é a realidade. Pra começar a AWS não está oferecendo o Cassandra. Na verdade |
| 17:31 | é só uma camada de compatibilidade. Eles vão oferecer uma API compatível com o Cassandra mas |
| 17:36 | que internamente vai falar com o produto DynamoDB que eles já oferecem faz anos. Segundo a equipe |
| 17:42 | do ScyllaDB que é uma implementação aberta de Cassandra em C++ esse produto da AWS não |
| 17:48 | vai oferecer coisas essenciais a usuários de Cassandra como suporte multi-região, não vai ter UDT, não vai ter alter table, não vai ter counters, não vai ter views materializadas, |
| 17:56 | não vai ter como carregar SSTables diretamente. É uma versão simplificada que "parece" Cassandra mas |
| 18:03 | na verdade é o DynamoDB por baixo. É como se no ano 2000 a Microsoft falasse que está |
| 18:09 | lançando o MySQL. Só que por baixo dos panos na verdade é uma versão frankenstein do MySQL |
| 18:15 | que recebe os comandos compatíveis de MySQL e só traduz pro SQL Server que é quem de fato vai estar |
| 18:21 | rodando. A AWS está fazendo exatamente isso: um frankenstein do Cassandra pra receber os comandos, |
| 18:26 | por exemplo tudo da API CQL e vai mandar pro DynamoDB. Os preços inclusive são |
| 18:32 | basicamente do DynamoDB só que 16% mais caros pra ter essa camada por cima. E por isso não |
| 18:38 | tem como ter todas as funcionalidades do Cassandra de verdade. E essa não é a primeira vez, eu disse que o povo da RedisLabs tem problemas com a AWS porque o |
| 18:46 | produto ElastiCache que suporta Redis, como o nome diz, é voltado primariamente pra ser só um cache, |
| 18:53 | e não inclui suporte a funcionalidades chave que tornam o Redis viável pra ser um broker persistente de mensagens ou mesmo um banco de dados primário. Do ponto de vista da |
| 19:02 | AWS se você precisa de mensageria ou suporte a pubsub deveria estar usando SQS ou SNS e se |
| 19:09 | quer um banco de dados primário deveria usar o DynamoDB ou RDS. O Redis é bem mais do que |
| 19:14 | a AWS oferece no ElastiCache. A mesma coisa acontece com o MongoDB da AWS. |
| 19:19 | O MySQL da AWS se não me engano também não é o mesmo MySQL que você instala no seu Linux, |
| 19:25 | é uma modificação interna que eles não abrem o código. E ao fazer isso, a Amazon divide as comunidades em duas: as que optam pela versão completa e realmente |
| 19:34 | aberta e as que se acomodam às limitações dos produtos da AWS. É literalmente uma apropriação: |
| 19:40 | agora que todo mundo gosta do Redis, vamos nos apropriar do nome Redis mas oferecer um produto |
| 19:46 | inferior mas que pelo menos é mais conveniente de usar pra maioria das pessoas, já que a maioria sequer sabe a diferença. Por menos que isso a Microsoft foi julgada como |
| 19:55 | inimigo 20 anos atrás. E eu nem estou defendendo que eles deixaram de ser, só aprenderam a se marketar melhor. Porém, quando foi a última vez que você ouviu qualquer coisa |
| 20:04 | negativa assim da AWS? Pois é. Esse é o resultado de um marketing muito bem trabalhado pela Amazon. |
| 20:11 | Eles tem muito mais fãs do que detratores. E o mais interessante é que ela é bem vista como |
| 20:16 | amiga do mundo de software livre. Se não ficou claro ainda, deixa eu desenhar: a AWS de hoje é a Microsoft dos anos 90. É a mesma tática, só que executada com |
| 20:27 | muito mais finésse e pzazz. E isso não é uma exclusividade da Amazon. Você vai encontrar |
| 20:32 | exemplos similares de todas as empresas que você é fã, seja Google, Facebook, Apple. E todos eles |
| 20:38 | fizeram a lição de casa. Por exemplo, eles tem dezenas de programadores influencers como MVPs, |
| 20:44 | evangelists, advocates ou seja lá qual é o título hoje em dia. Estão todos nas folhas de pagamentos |
| 20:50 | deles. São todos recursos de marketing, não do desenvolvimento core de verdade. Eles patrocinam |
| 20:56 | eventos e distribuem brindes em todos os lugares. Sempre que podem repetem como o mundo open source |
| 21:01 | é importante e como eles apoiam. E com isso dobraram a opinião pública e hoje são os heróis |
| 21:07 | do software livre. Richard Stallman e Eben Moglen estão se revirando em seus caixões. Com tudo isso que eu disse, pode parecer que eu sou um defensor do software livre. Mas eu não |
| 21:17 | sou não, nunca fui e não tenho vocação pra ser. Eu sou pragmático, eu me adapto às limitações de cada |
| 21:24 | era. Eu nunca usei Linux porque queria participar do movimento de software livre. Eu sempre usei |
| 21:29 | open source porque me interesso por tecnologia tanto em plataformas abertas quanto fechadas. |
| 21:34 | Mas eu não posso evitar e dar risada se você se considera um defensor do software livre e diz isso |
| 21:41 | vestindo uma camiseta da Amazon ou do Google. Seu preço é um brinde de evento, você é uma |
| 21:46 | propaganda ambulante que custa barato e ainda não entendeu como as coisas funcionam. Agora, falando de forma pragmática. Eu tiraria proveito desse momento. Como eu já venho repetindo |
| 21:56 | em todos os meus vídeos, estamos num período da abundância. E goste disso ou não, essas empresas |
| 22:01 | estão no topo do jogo. Se você tem ideologia de software livre e não gostou do que acabou de |
| 22:06 | descobrir sobre a AWS, não seja ingênuo de achar que Google Cloud ou Microsoft Azure ou qualquer |
| 22:12 | outro são diferentes. Digamos que você use Google AppEngine e você acha que é o super defensor |
| 22:17 | do mundo de software livre porque programa em Python. Só que sua aplicação usa o DataStore do |
| 22:23 | Google, que é um software proprietário e fechado. Pois é. Essa é a realidade. Eu sinto um pouco de pena por quem é defensor de software livre, ou mesmo de quem é defensor |
| 22:33 | da liberdade em geral, porque o voto da maioria dos programadores foi abrir mão da liberdade por |
| 22:39 | conveniência. Antigamente o mantra era que o conhecimento e a informação querem ser livres. |
| 22:44 | Mas acho que as pessoas em geral não fazem tanta questão assim disso. Independente de qual lado |
| 22:50 | desses movimentos você está, a importância de ter contato com software livre também é entender como as coisas funcionam no mundo real. Em particular eu gosto da parte jurídica disso. E |
| 23:00 | o tema que você precisa entender é copyright e propriedade intelectual. Nunca, em hipótese alguma, use um código que você achou num GitHub da vida que não tem nenhuma |
| 23:11 | licença ou copyright. É pedir pra ter problemas jurídicos depois. Se você desenvolve produtos |
| 23:16 | web e o que eu falei até agora foi novidade, reveja todas as dependências que você usa e |
| 23:21 | garanta que não existe código AGPL misturado. Se você desenvolve produtos mobile e distribui |
| 23:27 | os binários, veja se não está usando alguma dependência GPL. GPL e AGPL são licenças virais, |
| 23:33 | eu expliquei isso no video da Apple e GPL. Todo código que toca neles se torna automaticamente GPL |
| 23:39 | ou AGPL e sua obrigação é abrir todo o código que você escreveu. Não existe nenhum problema em usar |
| 23:45 | GPL ou AGPL, eu até acho que muitos casos deveriam usar, mas não se meta com licenças se você ainda |
| 23:50 | não estudou como elas funcionam. Na dúvida, a recomendação costuma ser pra escolher |
| 23:55 | licenças permissivas como MIT ou BSD. Toda vez que você cria um repositório no GitHub ele te lembra |
| 24:02 | pra você escolher uma licença. Quando falamos em liberdade você precisa entender o seguinte: licenças restritivas como GPL ou AGPL promovem o software livre, ou seja, estamos garantindo |
| 24:12 | a liberdade do software e protegendo os usuários, mas restringindo a liberdade dos desenvolvedores. |
| 24:18 | Licenças permissivas como MIT ou BSD estão promovendo a liberdade dos programadores e |
| 24:24 | das empresas, mas não necessariamente do software e nem dos usuários. Ou seja, se você desenvolve |
| 24:30 | um produto usando software com licença BSD, você não é obrigado a abrir o código que fez, você faz |
| 24:36 | o que quiser, pode inclusive comercializar e nunca abrir o código. Você tem liberdade de escolher o que fazer. Entenderam? Tirando a parte ideológica e filosófica, software |
| 24:45 | livre e open source são um pequeno caso de leis de copyright e propriedade intelectual. Eu não tenho |
| 24:52 | treinamento jurídico nisso portanto tudo que eu disser a respeito, não considerem como conselhos legais, mesmo porque eu nem posso advogar nada. De qualquer forma é um assunto muito interessante |
| 25:01 | especialmente se você se considera criador de conteúdo. Só porque você pode baixar e editar |
| 25:07 | algum código, não quer dizer que você tem licença vender. É a mesma coisa com código e qualquer |
| 25:12 | outro produto de criação como video, áudio, imagens e tudo mais. Se você encontra na internet |
| 25:18 | talvez só tenha licença pra ver, mas não pra usar. E se usar, você não pode declarar ignorância da |
| 25:24 | lei. Ser ignorante da lei não o torna isento da lei, isso vale pra qualquer coisa. Em resumo super resumido, copyright é literalmente o que o nome diz, |
| 25:33 | o direito de cópia. E a única pessoa que tem o direito de cópia sobre uma criação é o próprio |
| 25:39 | criador. Esse direito é automático. Propriedade Intelectual é bem mais complicado e depende de pesquisa pra garantir que não havia obra igual ou similar já registrada antes. Licenças de |
| 25:50 | software como a GPL foram chamadas de copyleft. Na realidade é um copyright onde o criador dá a |
| 25:56 | licença de uso e modificação da criação se a pessoa obedecer as restrições da licença, |
| 26:01 | que são as quatro liberdades que eu disse logo no começo do video. GPL é uma subversão do copyright, |
| 26:07 | na prática é uma licença que restringe o uso, por isso chamamos de restritivas. Em coisas fora de software, como este video, eu só posso usar coisas que eu comprei a licença. |
| 26:17 | Por exemplo, a vinheta de entrada eu comprei. As músicas que eu uso em todos os vídeos são |
| 26:22 | licenciadas pelo site Epidemic Sound. E nos casos onde eu uso pequenos trechos de músicas |
| 26:28 | de filmes por exemplo, eu tento ao máximo estar próximo do que se chama de Fair Use. Essa parte |
| 26:34 | da lei é a complicada, que é o limite de até onde você pode usar a criação de outra pessoa de forma |
| 26:39 | que não entre em conflito com seu copyright. Um exemplo simples era antigamente que a gente fazia mix tapes, ou fitas cassetes com nossas músicas favoritas pra ouvir no carro. Se eu tinha a fita |
| 26:49 | ou CD original comprado, eu tinha direito sob o Fair Use de fazer uma cópia pessoal para uso |
| 26:55 | pessoal. No minuto que eu vendo a fita, aí eu infringi a lei, e vira pirataria. Se você |
| 27:01 | assina um Spotify hoje, você concordou com os termos da assinatura, e você só tem a licença pra ouvir a música, mas não pode baixar e ouvir fora do Spotify. Muito menos usar as músicas |
| 27:11 | inteiras ou mesmo trechos dela. E você não pode reclamar, a conveniência de pagar mais barato é |
| 27:16 | que você abriu mão do fair use. Na dúvida: não copie o que não é seu. Pra todo |
| 27:21 | o resto, consulte um advogado especializado em propriedade intelectual. E já aviso que muitos vendem bullshit, então tomem cuidado e exercitem o pensamento crítico. Muita gente |
| 27:31 | que quer empreender tem essas dúvida quanto ao software que estão desenvolvendo. Alguns acham que precisam registrar esse software. Mas isso é um dos bullshits: seu software nunca vai estar |
| 27:41 | finalizado, você vai mudar ele o tempo todo. E provavelmente é um produto web as a service, |
| 27:47 | que nunca vai ser exposto. Digamos que alguém copie seu software e lance um concorrente de alguma forma. Essa é outra preocupação. Mas minha resposta pra isso |
| 27:55 | é simples: se seu produto é tão frágil que só de copiar o código qualquer um consegue |
| 28:00 | lançar um concorrente melhor, eu diria que sua empresa está muito mal montada. A marca, a operação, a comunicação, a reputação e tudo mais fazem o produto e não só o código. O |
| 28:11 | código é só uma pequena parte de uma empresa de produto. Se seu negócio vai pros ares no segundo |
| 28:17 | que alguém lança um concorrente, eu questionaria a necessidade da sua empresa existir. Registrar seu software não vai servir pra muita coisa. Se você teve uma idéia realmente original, |
| 28:27 | de novo, consulte um advogado e consiga uma patente. Agora, copyright, propriedade intelectual, patentes, não são coisas que se enforçam sozinhas também. É |
| 28:37 | obrigação do detentor da propriedade de proteger sua própria propriedade, então se alguém infringir |
| 28:42 | sua propriedade você deve acionar seu advogado pra começar os procedimentos legais. Mas isso não é barato, é extremamente caro na realidade, estamos falando de centenas de milhares de reais |
| 28:52 | pra mais. A hora de advogado é muito caro, e se você perder você arca com os custos do outro lado |
| 28:58 | também. Portanto não é algo que você vai usar tão cedo. De curiosidade eu recomendo dar uma olhada num caso recente da Jukin Media vs MxR que é explicado num canal que eu gosto bastante que |
| 29:11 | é o Legal Eagle onde um advogado de verdade discute um caso de disputa de copyrights do ponto de vista legal e não do seu ponto de vista do que você acha que é certo ou não. |
| 29:18 | A discussão sobre propriedade e copyright é a parte mais cabeluda e não existe um consenso. Depende do caso. A legislação varia de país pra país e se quiser ter segurança sobre o assunto, |
| 29:29 | consulte um advogado. Mas em princípio existem os que acreditam que tudo que alguém cria deveria ser |
| 29:35 | domínio público e os que acreditam que tudo que alguém cria é propriedade do criador. Eu pessoalmente sou do segundo campo, tudo que você cria é automaticamente seu. Daí você tem |
| 29:45 | a escolha do que fazer, se você acha que quer deixar os outros usarem, então é seu direito conceder a licença de uso. Do lado de quem usa também, se você aceitou o trabalho de alguém, |
| 29:55 | você tem obrigação de seguir a licença que foi anexada nela. Esse é o protocolo. Isso tudo dito. Por que uma empresa abriria seu código como software livre ou open source? |
| 30:05 | Dezenas de motivos e dezenas de estratégias. Mas mais importante, só porque você abriu o |
| 30:11 | código não tem nenhuma garantia que alguém vai adotar. Muita gente pensa que abrir o código |
| 30:16 | automaticamente vai trazer gente pra colaborar. Eu diria que se você está aqui se perguntando isso, |
| 30:21 | provavelmente é porque não deveria tentar ainda. Vá estudar primeiro e participar de projetos que |
| 30:26 | já existem pra entender como funciona. Pare de ver videos ou blog posts pra achar essa resposta. Não |
| 30:32 | é barato manter o software aberto. Alguém precisa manter esse projeto ativo, responder dúvidas, |
| 30:38 | orientar os possíveis voluntários, avaliar as contribuições o mais rápido quanto possível, manter o software estável pra quem está usando, manter canais de comunicação ativos |
| 30:47 | e assim por diante. Repito, não é de graça manter um projeto open source. Depois que sua empresa já estiver inserida em projetos abertos, tiver prática, |
| 30:56 | entender a cultura e as licenças, é possível sim fazer bastante coisa. Um dos exemplos mais simples |
| 31:02 | são projetos com licença dupla. Sim, você pode ter uma licença aberta e outra licença fechada. |
| 31:08 | Um exemplo é o próprio MySQL. O conceito é simples, se seu software já tem sucesso você pode abrir ela com licença GPL, dessa forma você garante que outra empresa não pode |
| 31:17 | copiar seu código e lançar uma versão própria fechada. Se outra empresa modificar o código, |
| 31:23 | ela tem obrigação de soltar essa modificação ou ela vai estar infringindo a licença. Mas se uma empresa precisa fazer isso, ela tem a opção de te contatar pra comprar sua licença proprietária que |
| 31:34 | dá o direito dela modificar o produto internamente e não liberar o código. É um modelo de negócio. |
| 31:39 | Se ela é efetiva ou não, depende do negócio e, de novo, consulte seu advogado. Você enquanto desenvolvedor, porque contribuir em projetos open source? Primeiro, porque você tem |
| 31:50 | um problema com o software que você usa e quer ver consertado ou você quer uma funcionalidade |
| 31:55 | que a comunidade não parece interessada em fazer. A idéia toda de open source é |
| 32:00 | que você coce sua própria coceira. A postura da maioria dos desenvolvedores é ser bem folgado, |
| 32:06 | povo só posta "ow, e aí, quando vocês vão fazer a funcionalidade lá que eu pedi 2 meses atrás?" |
| 32:11 | Folgado pra caramba. Povo que mantém os projetos tem que ser super paciente, porque se fosse eu já |
| 32:17 | respondia "eu vou fazer a hora que você me pagar, folgado". Se você é desenvolvedor e nem você que |
| 32:22 | precisa da funcionalidade se deu ao trabalho de tentar implementar, porque outra pessoa vai fazer pra você de graça? Se liga, é assim que você começa com o pé esquerdo. |
| 32:30 | A idéia de trabalho voluntário em projetos abertos parece algo estranho, mas não é tanto assim. Pra |
| 32:36 | começar é uma base de treinamento. Você que é iniciante, você acha que já é o pica das galáxias, |
| 32:42 | que manja do código? Eis um excelente lugar pra provar isso. Resolva um problema seu e ao mesmo |
| 32:48 | tempo demonstre suas capacidades com código. Tem gente que acha que só deve escrever uma linha de código se é pago pra isso. Eu questiono se esse tipo de pessoa realmente gosta de programar, |
| 32:59 | e se for esse o caso, eu não vejo crescendo como programador. Um bom programador escreveria código sozinho, sem ninguém ver, só pelo prazer ou vontade de programar, independente |
| 33:09 | se alguém fosse ver ou não. Mais do que isso, antigamente a gente não tinha referências pra saber o que é considerado um código bem feito ou mal feito, em que velocidade |
| 33:18 | certos códigos são feitos, as diferentes alternativas de código pra resolver o mesmo |
| 33:24 | problema. Você tem à sua disposição hoje, milhares de projetos abertos, gratuitamente disponíveis, |
| 33:30 | que você pode fuçar quanto quiser. Mesmo se não tiver vontade de contribuir, eu fico pasmo que |
| 33:36 | poucos iniciantes estão baixando esses códigos e estudando. Toda nova biblioteca ou programa útil |
| 33:41 | que aparece, se me interessa eu baixo o código e vou olhar como foi implementado essa ou aquela |
| 33:47 | função que me interessa e sempre me dá algum insight de "ahhh, dá pra fazer assim!" e isso |
| 33:52 | vai se aculumando ao longo dos anos. Eu mesmo fiz poucas contribuições em projetos open |
| 33:57 | source. Quando eu tava na faculdade, quando eu ainda era um programador júnior, eu não era o melhor programador. E era bem difícil de contribuir em projetos abertos naquela época. Se |
| 34:07 | você viu meus vídeos de Git eu expliquei porque. Foi só depois de 2008, ou seja, quase 20 anos |
| 34:13 | depois que eu comecei a aprender a programar, que contribuir em projetos open source se tornou fácil |
| 34:18 | como é hoje. Eu teria sido um programador muito melhor se desde o começo eu tivesse conseguido |
| 34:24 | contribuir e criado essa rotina. Mas tanto empresas quanto programadores, a |
| 34:29 | intenção deste vídeo foi colocar suas expectativas em dia. Open source não é mágica. Só porque você |
| 34:35 | abriu seu código, não quer dizer que alguém vai se interessar por ele. Na verdade é até uma boa se quiser testar, você abre seu código e vê que zero pessoas se interessaram. É uma boa |
| 34:44 | evidência que esse código que você achava legal na verdade não tem tanta serventia pras pessoas, ou |
| 34:50 | você que é muito ruim de comunicar os benefícios. De qualquer forma é um feedback útil. Mesma coisa |
| 34:56 | se for um desenvolvedor, se suas contribuições que você achava que eram boas forem rejeitadas, é um bom feedback pra melhorar. E é isso que a maioria das pessoas precisam de qualquer forma: |
| 35:06 | feedback. É como se você tivesse programadores sêniors do seu lado apontando seus erros. Só |
| 35:12 | isso já tem muito valor. Por isso que apesar do trabalho ser voluntário, estão existindo trocas |
| 35:17 | entre você, o projeto e os outros colaboradores. Isso não é caridade, são trocas voluntárias pra |
| 35:22 | mútuo benefício. Além disso, da mesma forma que você escolhe entrar, qualquer hora pode escolher sair. Jamais pense que alguém te deve alguma |
| 35:31 | coisa só porque você fez uma contribuição. É outro bom exercício pra entender o valor das |
| 35:37 | coisas. Você contribuiu pra coçar uma coceira sua. Se outra pessoa se beneficiou disso, bom pra ela, |
| 35:43 | mas isso foi o efeito colateral. Se outra pessoa fez melhor uso da sua contribuição do que você mesmo, melhor ainda pra ela, e bom aprendizado pra você também. Não existe mérito automático, |
| 35:53 | mérito é algo que você conquista, nunca vai ser dado pra você independente da quantidade de esforço que você fez. Enfim, o mundo de software livre não é tão |
| 36:02 | ideológico como você poderia imaginar no começo. As grandes empresas já entenderam como formular |
| 36:08 | estratégias onde eles podem alocar projetos open source como bons canais de marketing e |
| 36:14 | de contratação de talento. E isso não é uma coisa totalmente ruim, basta que você como desenvolvedor |
| 36:19 | não fique perdendo tempo sendo fanboy de empresa e use o que está disponível como material grátis |
| 36:25 | pra sua própria evolução. Essa é a única coisa que interessa pra um programador. Os brindes são |
| 36:30 | inúteis, mas os códigos, sejam eles abertos via licenças permissivas ou via licenças restritivas, |
| 36:36 | são códigos úteis. Pode ser que esse mundo abundante suma amanhã, então aproveite enquanto ela existe. Eu já ouvi muita gente reclamar que mora em |
| 36:45 | lugares afastados, cidades pequenas, que sequer tem empresas ao redor onde elas podem começar a |
| 36:50 | trabalhar. Em muitos casos, projetos open source podem ser a única fonte de conhecimento e contato |
| 36:56 | com outros programadores. E mais, você tem a oportunidade de fazer código e receber feedback |
| 37:02 | desse código. Se o feedback for negativo, você finalmente sabe no que precisa melhorar. Em vez |
| 37:07 | de pensar mesquinharias de "ah, mas eu vou estar trabalhando de graça" eu pensaria diferente "puxa, |
| 37:13 | eu estou recebendo feedback de graça". E com o tempo, se você se dedicar de verdade, é possível montar um bom portfolio de contribuições em projetos relevantes que chamem |
| 37:23 | a atenção de outras empresas procurando alguém como você. E por hoje vamos ficando por aqui, |
| 37:28 | se ficaram com dúvidas mandem nos comentários abaixo, se curtiram o video mandem um joinha, assinem o canal, não deixem de clicar no sininho pra não perder os próximos episódios e ajudem o |
| 37:39 | canal compartilhando o video com seus amigos. Este mês vai ter menos vídeos porque vou passar |
| 37:44 | as próximas semanas nos Estados Unidos, então a gente se vê na minha volta. Até mais. |