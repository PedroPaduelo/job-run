# Devo usar NOSQL? | "ENDGAME" para Iniciantes em Programação | Série "Começando aos 40"

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=EdOkYEE1J_Y
- **Duração:** 36:01
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá, Fabio Akita Este é o terceiro episódio do tema |
| 0:05 | de devops pra encerrarmos o assunto e ao mesmo tempo vamos finalmente encerrar a série "Começando |
| 0:11 | aos 40" neste décimo quarto episódio. No episódio da semana passada eu disse que iria |
| 0:16 | explicar sobre bancos de dados. Eu tentei escrever esse script diversas vezes de diversas formas nos |
| 0:23 | últimos dias, mas é um assunto muito mais complexo do que caberia num único episódio. Eu não vou |
| 0:29 | entrar em detalhes de como eles são implementados, os algoritmos e arquitetura. Eu queria falar sobre |
| 0:35 | clustered indexes, bloom filters, write ahead logs, mvcc, consistent hashing e muito mais. Em |
| 0:42 | vez disso quero só compartilhar algumas opiniões que talvez nem todos concordem, mas que deve ser |
| 0:48 | o mais útil pra maioria das pessoas. Então quero aproveitar pra falar muito |
| 0:53 | rapidamente de uma coisa que não mencionei no episódio anterior quando falei sobre máquinas   virtuais e containers, o tal de Function as a Service ou FaaS que muitos ficam hypando hoje |
| 1:05 | em dia. Finalmente vou fechar com um pensamento de como tudo isso que eu expliquei nos últimos |
| 1:10 | episódios afeta o mundo de código livre. Hoje é dia do Endgame, fiquem comigo! |
| 1:17 | (...) Como primeiro assunto, vamos falar rapidamente |
| 1:28 | sobre bancos de dados e arquitetura. Se você estiver mais interessado em ir direto pra parte de |
| 1:33 | Function as a Service vá pra esse tempo indicado aqui embaixo. E se quiser ir direto pra conclusão, |
| 1:39 | vá pra este outro tempo aqui embaixo. Se você é iniciante eu não recomendo tentar |
| 1:45 | instalar e configurar manualmente nenhum banco de dados sozinho. Nem os bancos relacionais como |
| 1:52 | MySQL ou Postgres e nem os NoSQL como Redis, MongoDB ou Cassandra. Não adianta só seguir |
| 1:58 | um tutorial e fazer rodar. Garantir que você não vai perder dados importantes é muito mais do que |
| 2:04 | meramente fazer um servidor rodar. Seguir um tutorial é absolutamente trivial. |
| 2:09 | Todos os bancos tem dezenas de configurações diferentes que devem ser planejadas exclusivamente |
| 2:15 | pro uso da aplicação. Não existe uma única configuração que serve universalmente pra tudo. |
| 2:22 | E não, NoSQLs não são mais fáceis de configurar ou dar manutenção do que os bancos relacionais. |
| 2:29 | Se você tem essa noção de algum lugar, tire isso da sua cabeça. Eu diria que uma infraestrutura |
| 2:34 | NoSQL de verdade dá tanto trabalho ou mais do que bancos relacionais. Especialmente se realmente |
| 2:41 | formos eliminar pontos únicos de falha e tivermos requerimento de estratégias de recuperação de |
| 2:47 | desastres com zero downtime, ou seja, o banco sempre estar disponível mesmo que um dos |
| 2:53 | servidores do cluster sofra algum problema. Se você for programador aprenda SQL e o modelo |
| 3:00 | relacional corretamente. Você precisa saber como fazer queries decentes. A pior parte de uma |
| 3:06 | aplicação é quando o desenvolvedor acredita que a biblioteca de mapeamento objeto-relacional que ele |
| 3:11 | está usando, seja Hibernate no Java, SQLAlchemy no Python, ActiveRecord no Ruby, Eloquent ORM no PHP, |
| 3:19 | nenhum deles vai fazer queries eficientes pra você. E queries ineficientes é um dos principais |
| 3:25 | ofensores em desperdício de memória e performance. Não adianta trocar de banco se seu código é uma |
| 3:31 | porcaria, nenhum banco vai fazer mágica. Muita gente acha que usar um MongoDB é bala |
| 3:37 | de prata pra combinar facilidade de uso e performance, especialmente pra iniciantes. |
| 3:42 | Se você não assistiu meu episódio sobre o livro The Mythical Man Month, aqui vai   um resumo: não existe bala de prata! Pra começar, se você subir uma instância de |
| 3:53 | MongoDB e deixar ele sozinho, você já começou errado. MongoDB não tem garantias de 100% de |
| 3:59 | durabilidade. O melhor caso de uso do Mongo é que o dataset caiba inteiro em RAM. Todas as |
| 4:06 | operações são feitas em RAM, é o que garante sua performance. Mas isso significa que se a |
| 4:11 | máquina der pane antes da RAM ter chance de dar flush pro disco, você vai perder dados. Você pode |
| 4:17 | configurar pra que ele garanta mais durabilidade. Por exemplo, hoje quando você manda gravar alguma |
| 4:23 | coisa no Mongo ele devolve ok antes de ter realmente gravado. O ok do Mongo é mais tipo |
| 4:29 | "bele, recebi a ordem pra gravar, quando der eu gravo". Diferente de um banco relacional que |
| 4:34 | só dá ok se garantidamente o dado foi gravado. Você pode configurar o Mongo pra fazer o mesmo, |
| 4:40 | devolver ok só se garantidamente uma outra instância de replica master recebeu o dado. Mas aí |
| 4:47 | você perde a performance que era justamente o que te fez escolher Mongo em primeiro lugar. |
| 4:52 | Aliás, uma instalação mínima de Mongo precisa de pelo menos duas instâncias em replica set. |
| 4:58 | Eu disse que o sweet spot é o dataset caber em RAM, mas você não tem RAM infinita, |
| 5:04 | se você pretende armazenar ordens de grandeza mais dados do que cabe em RAM,   talvez precise fazer shards. Mas configuração de shard precisa ser planejada do começo. Mudar |
| 5:14 | de uma configuração sem shard pra ter shard não é só ligar ou desligar uma chave, você vai ter |
| 5:20 | que refazer toda a infraestrutura do zero e mover todos os dados de lugar se escolher errado. Some |
| 5:27 | replicação e sharding pra configurar e você criou um emaranhado de gato pra resolver. Portanto não, |
| 5:33 | um MongoDB não é mais simples do que qualquer outro banco se você realmente vai usar da forma |
| 5:39 | certa. Instalar na sua máquina só pra brincar, qualquer banco é simples, não só o Mongo. |
| 5:44 | Um NoSQL wide column store como Cassandra, apesar de ter similaridades com bancos relacionais só na |
| 5:51 | superfície, especialmente nos schemas e no CQL que é similar a SQL, não tem absolutamente nada a ver. |
| 5:59 | Eles são como key-value stores multi dimensionais com column families e foram feitos pra serem |
| 6:05 | bancos altamente distribuídos, com múltiplos nós num cluster, de preferência em múltiplas regiões |
| 6:11 | diferentes. Cassandra não foi feito pra usar numa única instância, como banco de um blog. |
| 6:17 | O sweet spot dele é funcionar em cluster, com múltiplos nós, e com muita escrita. |
| 6:22 | Aliás, a maioria dos NoSQL é alguma derivação de uma estrutura de chave e valor, os key-value |
| 6:30 | stores, como um Hash ou um Dicionário que qualquer linguagem de programação tem. O próprio Mongo pra |
| 6:36 | mim é um key-value onde o value é um documento JSON, por isso chamamos de Document store. O |
| 6:43 | sweet spot deles é localizar um valor tendo a chave em mãos. Diferente de um banco relacional, |
| 6:49 | a maioria não é nem um banco transacional e nem um banco analítico, ou seja, que você pode |
| 6:55 | sair fazendo queries como em SQL com qualquer critério e a qualquer momento. Pesquisas em |
| 7:01 | bancos NoSQL precisam ser planejadas, indexadas com antecedência. NoSQLs tendem a ser bancos que |
| 7:07 | você quer que funcionem em cluster, com shards, ou seja, nenhum servidor tem todos os dados que você |
| 7:14 | precisa ao mesmo tempo, e se sua pesquisa for mal planejada, ela vai ter que ir vasculhando |
| 7:19 | em todos os nós da rede, e isso custa processamento e custa tempo, muito tempo. |
| 7:25 | E um aviso muito importante que eu já dei em outros episódios: você não é o Facebook, |
| 7:31 | nem o Google, nem o Netflix, nem o Uber. As experiências de engenharia dentro do Uber só |
| 7:37 | tem valor pra outro produto com o mesmo nível de escala do Uber. Aceite a seguinte realidade: |
| 7:42 | os 99,999% de nós jamais vai chegar a uma fração da escala do Uber. Portanto as decisões mais |
| 7:50 | críticas de infraestrutura que eles relatam e que dão excelentes blogs posts e palestras são |
| 7:56 | quase como ficção científica pra gente: é legal de ver, mas não nos impacta de nenhum jeito. |
| 8:01 | Um exemplo disso foi um blog post incendiário de um engenheiro do Uber de 2016 intitulado: |
| 8:07 | "Por que a engenharia do Uber migrou de Postgres pra MySQL" acusando o Posgres de |
| 8:13 | ter uma "arquitetura ineficiente pra escritas". Se você ler só isso vai sair que nem um idiota |
| 8:19 | dizendo "puuts, temos que migrar nossos Postgres pra MySQL porque ele tem defeitos de escrita". |
| 8:25 | Tem idéia de qual imbecil isso soa? Pra começo de conversa, o teor do artigo se refere a limitações |
| 8:31 | do Postgres em casos extremos de grande volume de updates ou atualizações. E novamente, na escala do |
| 8:38 | Uber. Tanto MySQL quanto Postgres são excelentes escolhas pra todos os casos que você precisa de |
| 8:44 | um banco relacional, e que por acaso é a grande maioria dos casos. Programador é muito crédulo, |
| 8:49 | fica acreditando em conto do vigário toda hora, é impressionante. Parem com isso! |
| 8:55 | Na prática a maioria de nós vai sempre acabar usando uma combinação de um banco relacional |
| 9:01 | com um cache, usando algo como um Redis. Nessa configuração o Redis pode até ser um pouco mais |
| 9:07 | relaxado porque o certo é fazer com que os dados sejam consultados no Redis e o que não estiver lá |
| 9:13 | você carrega do banco relacional e grava no Redis à medida que for precisando. Portanto |
| 9:18 | o Redis pode ser reconstruído do zero mesmo se der pane e precisar derrubar tudo. E você usa |
| 9:25 | o Redis pra manter coisas pesadas de calcular e gravar num banco relacional como agregações, |
| 9:30 | coisas com contadores, médias e outras métricas que agregam múltiplas linhas do banco. |
| 9:36 | Num banco relacional, o que mais custa performance é escrever, mais do que ler. A escrita precisa ter |
| 9:43 | o tal ACID garantido: atomicidade, consistência, isolamento e durabilidade. Dados escritos precisam |
| 9:50 | garantidamente estar no disco de tal forma que uma pane inesperada não faça você perder dados. |
| 9:56 | Múltiplas conexões escrevendo ao mesmo tempo não podem um pisar no pé do outro, |
| 10:02 | você precisa de um esquema de concorrência como multiversion concurrency control ou   MVCC que a maioria dos bancos usa hoje em dia. E você precisa de transaction |
| 10:11 | logs pra conseguir dar rollback ou voltar ao estado original dos dados se uma transação |
| 10:16 | de múltiplas operações dá pau na metade. Numa aplicação com grande pressão de escrita, |
| 10:23 | digamos um ecommerce em dia de Black Friday, fechando várias compras por segundo. Você deve |
| 10:29 | programar sua aplicação pra usar filas. Toda nova compra entra na fila e vai sendo escrito no banco |
| 10:35 | à medida que der. Você nunca pode só aumentar a quantidade de servidores de aplicação web e |
| 10:40 | deixar conectar todo mundo no mesmo banco ao mesmo tempo, isso só vai aumentar a contenção |
| 10:46 | e no final ninguém consegue escreve. Então é melhor todo mundo entrar numa fila e só a fila |
| 10:52 | gerenciar o banco. As leituras usam caches de Redis e isso tira a carga de pesquisa no banco. |
| 10:58 | O grande gargalo numa aplicação web é o banco de dados, porque mesmo com replicação e sharding, |
| 11:04 | você sempre vai ter contenção por causa das garantias ACID. Além disso, num banco relacional você aprende na faculdade a idéia de normalização, |
| 11:13 | onde separa os fatos em tabelas e faz referências entre as tabelas, de forma a diminuir ao máximo |
| 11:20 | a redundância dos dados entre tabelas. Do ponto de vista de modelagem, assim é mais |
| 11:25 | bonito. Mas uma verdade é que do ponto de vista de performance, quanto mais você normalizar, pior |
| 11:32 | pode ser a performance. Tanto bancos relacionais quanto NoSQL privilegiam tabelas denormalizadas. |
| 11:39 | Você faz trade-off de redundância e mais uso de disco pra ter mais performance. Uma coisa cara |
| 11:46 | no processamento de pesquisas é justamente fazer joins entre tabelas, por isso bancos como Postgres |
| 11:52 | oferecem recursos como views materializadas. Views é como se fosse uma tabela lógica, |
| 11:57 | que não existe, porque é o resultado dinâmico de uma query, mas uma view materializada é como |
| 12:03 | se fosse uma tabela denormalizada de verdade. Ou seja, numa aplicação de verdade, você talvez se |
| 12:10 | veja obrigado a denormalizar algumas tabelas. Um jeito errado de usar um MongoDB ou Cassandra por |
| 12:17 | exemplo, é granular as coisas demais e tentar fazer o equivalente a joins. NoSQL não foi |
| 12:23 | feito pra ter joins e relacionamentos. E você vai descobrir que muitos problemas de performance que |
| 12:29 | você tem com bancos relacionais é normalização demais. Pense em sharding e se você deixar uma |
| 12:35 | tabela num servidor, outra tabela com dependências em outro servidor, como você vai fazer joins |
| 12:41 | rápida entre tabelas em servidores diferentes? Como tudo em computação, não existe uma forma |
| 12:47 | de quanto é normalizar demais. É uma arte, muita tentativa e erro em diferentes casos de uso. |
| 12:53 | Um exemplo bem idiota, a famosa tabela de estados. A grande maioria dos programadores faz uma tabela |
| 13:00 | separada chamada estados com uma coluna de código pra colocar por exemplo SP e outra coluna de nome |
| 13:07 | pra colocar São Paulo. Daí numa outra tabela de cadastro você tem um campo estado_id que |
| 13:14 | é uma referência pra linha da tabela de estados. Agora toda vez que você puxar o cadastro precisa |
| 13:20 | fazer um join com a tabela de estados. Eu acho isso desnecessário. Eu colocaria SP e São Paulo |
| 13:26 | direto na linha da tabela de cadastros e um select simples, sem join, vai devolver tudo   que eu preciso. Mas aí toda linha vai duplicar São Paulo toda vez. Foda-se. A probabilidade do |
| 13:37 | estado de São Paulo mudar de nome é praticamente zero. Se um dia mudar sim, vai custar um pouco |
| 13:43 | caro dar update em todas as linhas de todas as tabelas que ficou com isso duplicado,   mas isso é uma possibilidade remota. Pra que eu vou normalizar dados que nunca mudam? |
| 13:53 | Mas isso significa que não pode haver o caso de alguém mandar gravar São Paulo com til e |
| 13:58 | de outro lugar alguém mandar gravar um Sao Paulo sem acento. A letra C de consistência |
| 14:04 | do ACID vem migrando do banco pra aplicação faz algum tempo e se você começar a denormalizar, |
| 14:10 | vai ter que garantir essa parte da consistência na aplicação. Vamos assumir que seu código não |
| 14:16 | é porco, que você colocou enums no seu código e validações antes de mandar gravar no banco. |
| 14:22 | Lógico, novamente é um trade-off, vou trocar performance por mais trabalho. Como eu disse, |
| 14:28 | computação é uma arte, não existe almoço de graça, se pra você performance é mais importante, |
| 14:33 | vai ter mais trabalho. Se pra você conveniência é mais importante,   você paga tendo menos performance. Aliás, pra ter mais segurança, mais disponibilidade, |
| 14:44 | mais durabilidade, mais integridade, tudo isso você paga tendo menos performance. |
| 14:50 | Se quiser aumentar a performance, alguns desses fatores devem cair, por isso fica esperto! |
| 14:56 | E no final o que você vai ter com mais frequência é uma solução híbrida. Independente da sua |
| 15:02 | linguagem favorita ou framework web, o mais comum é você usar um banco relacional. Eu pessoalmente |
| 15:09 | gosto de Postgres mas não há nenhum motivo pra não usar MySQL com InnoDb ou mesmo seus forks |
| 15:16 | como as versões da Percona ou o MariaDB. Você vai acabar movendo a consistência pra aplicação, |
| 15:22 | com boas validações e bons testes no seu código. Também vai acabar denormalizando algumas tabelas |
| 15:27 | pra evitar joins desnecessários, sempre criar índices corretamente, mas também evitar criar |
| 15:34 | índices demais porque quanto mais índices pior a performance de escrita no banco. |
| 15:40 | Você também quer evitar gargalos de leitura e gargalos de escrita. Pra otimizar a leitura, |
| 15:46 | você quer colocar um cache na frente do banco relacional. Você vai programar pra primeiro   procurar o que quer num Redis. Se não achar lá, ou seja, tiver um cache miss, daí vai no banco |
| 15:57 | relacional puxar os dados e gravar no Redis pra estar lá da próxima vez; com algum período |
| 16:02 | de tempo pra expirar esse dado. E opcionalmente, se não quer o risco de parar o banco caso venham |
| 16:08 | escritas demais, você vai programar sua aplicação pra colocar o pedido de escrita numa fila, seja no |
| 16:15 | próprio sistema de publish/subscribe do Redis ou numa fila de verdade como RabbitMQ. Significa que |
| 16:22 | o tempo geral de escrita deve ser mais lento do que mandar direto pro banco, mas se por acaso vier |
| 16:27 | um pico inesperado que o banco não está preparado pra receber, em vez dele dar timeout e perder as |
| 16:34 | operações, é sempre melhor ficar mais lento mas que garantidamente uma hora vai executar. |
| 16:40 | E não, programar com um framework assíncrono, seja Node.js ou qualquer outro que hoje em dia |
| 16:46 | suporte async/await também não é uma bala de prata. Ajuda um pouco, mas não resolve o |
| 16:53 | problema de picos e gargalo de concorrência no banco. No dia da Black Friday o que resolve o |
| 16:59 | problema são filas, estruturas que você consegue controlar. async/await são boas pra ajudar, |
| 17:05 | mas são só mais uma ferramenta e nunca a única solução que vai resolver tudo. E se você precisar fazer uma coisa chamada Full text Search, que é pesquisas como você faz numa |
| 17:16 | Amazon, onde você encontra produtos similares e tem resultados por relevância, você tem suporte |
| 17:22 | a isso tanto no MySQL quanto no Postgres, mas na idéia de tirar o máximo de processamento do banco, |
| 17:28 | o certo é manter um outro serviço só pra isso, no caso um Elasticsearch que é um dos melhores |
| 17:35 | pra full text search. Toda vez que você escrever no banco relacional, também manda escrever no |
| 17:41 | Elastic. Novamente vamos gastar mais recursos pra ganhar performance dos dois lados. Trade-off. |
| 17:47 | Se você usar Heroku, significa sua aplicação web rodar em um ou mais dynos web, e você ter um ou |
| 17:54 | mais workers assíncronos que rodam em dynos de workers. Daí um Heroku Postgres, configurado |
| 18:01 | com um follower pra onde você vai redirecionar as queries mais pesadas. Adicione também o Heroku |
| 18:07 | Redis ou outro SaaS como Redis Cloud pra cache. Eu adicionaria um Cloudinary se sua |
| 18:12 | aplicação precisar armazenar e processar uploads, um SendGrid se precisar mandar e-mails, um Rollbar |
| 18:19 | pra guardar logs de erro, um New Relic RPM pra monitorar a performance da aplicação e um Bonsai |
| 18:25 | Elasticsearch pra funcionalidades de pesquisa avançada. Espere gastar algo em torno de 200 |
| 18:31 | a 300 dólares ou uns 1000 reais por mês. Parece muito? Não é, porque se você pretende instalar |
| 18:37 | e configurar e manter tudo sozinho, você precisa de um sysadmin que vai te custar 5 a 10 vezes isso |
| 18:43 | por mês. E isso só compensa se você for manter pelo menos 10 aplicações iguais a essa. |
| 18:49 | Se você realmente for manter parte disso sozinho, você que é sysadmin vai acabar usando um IaaS |
| 18:55 | como a AWS ou Google Cloud. Nesse caso vai configurar as coisas com Kubernetes, Helm, |
| 19:01 | Terraform e mesmo assim o ideal vai ser manter o banco de dados gerenciado em produtos como o |
| 19:08 | AWS RDS ou AWS Aurora ou Google Cloud SQL. O banco de dados é a pior parte pra se manter, |
| 19:15 | acredite. O trabalho simplesmente não compensa a menos que você seja muito grande. Não estou nem |
| 19:21 | dizendo tamanho do Uber, mas você precisa estar lidando com terabytes diários de dados críticos |
| 19:26 | pra compensar uma solução sob medida. É tudo uma questão de gerenciamento de risco, |
| 19:32 | um trade-off entre pagar mais pra ter mais segurança. Quanto custa pro seu negócio ficar |
| 19:38 | fora do ar por 2 dias numa Black Friday? Quanto custa pro seu negócio perder os dados financeiros |
| 19:44 | de meio dia de negociações? Na verdade, quanto custa perder 1 dia dos seus dados? Se você disser |
| 19:51 | que não tem nenhum problema, eu questionaria a importância da existência do seu produto. |
| 19:56 | Uma última dica de infraestrutura: independente se você colocar sua aplicação numa máquina virtual |
| 20:02 | de um VPS ou no AWS EC2 ou em containers via Kubernetes, ou mesmo numa plataforma como serviço |
| 20:09 | como o Heroku ou Openshift, em qualquer dos casos contrate a Cloudflare. Ele é um serviço que vai |
| 20:16 | substituir seu DNS, toda vez que alguém digitar seu domínio num navegador, o tráfego vai todo |
| 20:21 | pra Cloudflare primeiro, e ele vai tanto servir como CDN que é um cache pra coisas como as imagens |
| 20:28 | e outros assets do seu site como vai servir de detecção e prevenção de ataques. Se algum hacker |
| 20:34 | ou algum moleque com um script tentar invadir seu site, o Cloudflare vai ser sua primeira linha de |
| 20:39 | defesa e por experiência vou dizer que eles são muito bons. Altamente recomendado. Custa caro, |
| 20:45 | mas de novo, quanto custa pra você se alguém entrar no seu site e roubar os dados dos seus |
| 20:51 | clientes? Ou causar um Denial of Service no seu ecommerce no pico da Black Friday? |
| 20:56 | Como segunda seção deste vídeo, deixa eu explicar Function as a Service ou FaaS, |
| 21:03 | que são produtos recentes como o AWS Lambda ou Microsoft Azure Functions ou Google Cloud |
| 21:09 | Functions. Eles são basicamente containers. Se você já usou coisas containers de Docker |
| 21:15 | ou dynos de workers do Heroku, a idéia é similar. A implementação varia entre os |
| 21:20 | diferentes fornecedores então cuidado porque não é um padrão! Você configura um evento ou um trigger, |
| 21:26 | que pode ser várias coisas, uma chamada HTTP, um pub/sub de algum serviço de fila como o AWS SQS, |
| 21:33 | ou o Firebase no caso do Google Cloud. Quando esse evento vier, ele vai subir um container pequeno |
| 21:40 | que vai executar essa sua tal lambda ou função que está englobada num frameworkzinho específico |
| 21:46 | pra plataforma. Dizer lambda ou functions é mais marketing do que qualquer outra coisa, |
| 21:52 | se você ainda não tinha notado, pra aproveitar esse hype em cima de linguagens funcionais, |
| 21:58 | mas não tem nenhuma relação. Os containers já vem pré-configurados com imagens |
| 22:03 | pra diversos frameworks como Node.js, ou Ruby, ou Go, ou Python, ou Java, ou C#. A idéia não é rodar |
| 22:10 | um framework web monolítico como Ruby on Rails, ou ASP.NET MVC, ou Play Framework. Repetindo: |
| 22:17 | sim, como é um container comum, que roda uma linguagem conhecida, que inclusive permite você |
| 22:23 | instalar dependências externas, então tecnicamente você pode rodar o quiser nesses containers. Mas só |
| 22:29 | porque você pode, não quer dizer que você deve. Sempre existe a ferramenta certa pro problema |
| 22:34 | certo e na minha opinião FaaS não foram feitos pra hospedar sites grandes inteiros. |
| 22:40 | Máquinas virtuais de um IaaS como AWS EC2 ou mesmo num VPS tendem a ter um SLA alto. |
| 22:47 | Eles não garantem que a máquina vai ficar de pé pra sempre, mas a intenção é ficar de pé por um |
| 22:53 | longo período de tempo. Semanas ou meses. Num PaaS como Heroku, os containers que ele chama |
| 22:59 | de dynos também tendem a ficar de pé por longos períodos, dias ou semanas. Mas não é uma garantia, |
| 23:06 | por isso ele força você a não depender de gravar coisas no disco local, porque os dynos   são containers voláteis. Você deve programar de tal forma que se um dyno restartar, a aplicação |
| 23:17 | reinicie sem problemas e tudo que você precisa está em banco de dados ou caches externos. |
| 23:22 | Um container de função tende a ser menor e a ficar de pé por períodos ainda menores, horas, no máximo |
| 23:29 | dias. A intenção é que você não se preocupe de manualmente ter que subir esses containers. Eles |
| 23:35 | vão sendo iniciados a partir desses triggers ou eventos. A função deveria receber os dados |
| 23:40 | do evento, processar o que precisar o mais rápido possível, e assumir que ele pode desligar depois |
| 23:46 | disso. Na prática o AWS ou Google vai manter o container de pé por mais algum tempo caso |
| 23:52 | outros eventos estejam esperando na fila. Mas se ficar sem fazer nada por muito tempo ele deveria |
| 23:57 | desligar pra não desperdiçar recursos. Como é possível receber um trigger de tipo HTTP |
| 24:03 | ou seja, você poderia apontar seu navegador pra uma URL que seja gatilho pra ativar uma função, |
| 24:09 | e de dentro da função você poderia conectar num banco de dados e devolver um HTML, |
| 24:15 | você pode ficar tentado a colocar um site, ou pior, uma aplicação web inteira. E vai funcionar. |
| 24:22 | Existem alguns frameworks web mais enxutos feitos pra tentar tirar vantagem disso. Se você não tem problema em ter alta latência e tempo de resposta demorado de tempos em tempos, |
| 24:32 | pode funcionar sim. Mas você precisa garantir que sua aplicação seja pequena.   Como os containers de funções podem desligar a qualquer momento, quanto maior for sua aplicação |
| 24:43 | mais vai demorar pra ele levantar um novo container no próximo evento. Eu pessoalmente |
| 24:48 | acho que usar AWS Lambda e outros FaaS pra servir aplicações web é o uso errado da tecnologia. |
| 24:55 | Lembram como eu falei agora pouco que uma das formas de evitar gargalos no banco de   dados é jogar o pedido de escrita numa fila e depois um worker que ouve essa fila ir |
| 25:05 | escrevendo no banco? Esse seria um jeito. Você enfileira os pedidos no AWS SQS que é uma fila, |
| 25:13 | conecta ele como event source no AWS Lambda, faz uma função que conecta no AWS Aurora e aí grava |
| 25:19 | no banco. Ou outras coisas pesadas pra sua aplicação como processar imagens ou vídeos. |
| 25:24 | Você manda uploads da sua aplicação pro AWS S3, daí manda enfileirar a ordem no AWS SQS de novo, |
| 25:31 | que vira event source pra um Lambda que vai puxar o arquivo do S3, processar e jogar de volta no S3 |
| 25:38 | ou manda arquivar no AWS Redshift. Eu diria, de maneira simplória, que o AWS   Lambda está pra AWS como um dyno de worker está pro Heroku. Ele não é nenhuma grande revolução |
| 25:50 | como muito palestrante ou blog post faz parecer. Ele é mais um sub-produto do uso de containers |
| 25:56 | pra tentar desperdiçar menos recursos. Em vez de você subir um EC2 inteiro e deixar |
| 26:02 | ele esperando sem fazer nada até vir alguma coisa pra rodar, melhor criar um container |
| 26:07 | que vai ficar simplesmente desligado se não tiver nenhuma atividade. Ele é melhor pra aplicações que |
| 26:13 | não tem tanta atividade assim o tempo todo, por exemplo, quando de noite ou de fins de semana não |
| 26:19 | vem nenhum novo evento ou vem muito pouco. E nos casos onde sua aplicação tem picos difíceis |
| 26:25 | de prever, com esse sistema ele pode subir múltiplos containers se a fila estiver com   muita pressão. Então Function as a Service é só isso: um container com um código simples |
| 26:36 | dentro de uma função, preferencialmente, que vai responder a eventos pré-configurados, |
| 26:41 | seja de uma fila, seja um gatilho via HTTP, com o mínimo possível de configuração. |
| 26:47 | Como terceiro e último tema de hoje, quero compartilhar um pensamento com vocês. Eu não |
| 26:53 | sou um idealista, eu não sou um ativista: eu gosto de pensar que sou mais uma testemunha |
| 26:58 | da história. Se possível eu prefiro tentar explicar as coisas da forma como eu vejo, |
| 27:04 | mas não julgo ninguém por estar de um lado ou de outro porque só a história vai realmente dizer |
| 27:09 | quem estava certo. Eu prefiro estar atento e me mantendo anti-frágil às mudanças. Quem |
| 27:15 | leu Nassim Taleb, sabe o que isso significa. Faz uns 30 anos que estamos vivendo num mundo de |
| 27:20 | tecnologia dividido entre o mundo de código livre e o de código proprietário. Todos sabem que até o |
| 27:27 | fim dos anos 90 o mundo de código proprietário sempre foi dominante. Mas principalmente a |
| 27:33 | partir do novo século que o mundo de código livre evoluiu muito rápido. Hoje em dia todo |
| 27:38 | desenvolvedor que se preza usa ferramentas derivadas do mundo de código aberto. Tudo |
| 27:44 | que eu vim falando nessa série toda, incluindo distribuições Linux, Docker, Kubernetes, MySQL, |
| 27:49 | Redis, tudo isso é mundo de código livre. Em 1995 Bill Gates soltou o famoso memorando |
| 27:56 | interno na Microsoft explicando a ameaça do navegador à hegemonia do sistema |
| 28:02 | operacional Windows e outros produtos como o Office. Em breve o navegador substituiria |
| 28:07 | o sistema operacional. E ele estava certo. Considere o seguinte: antigamente precisaríamos |
| 28:13 | comprar um servidor de e-mails como um Microsoft Exchange. Finalmente surgiram opções de código |
| 28:19 | aberto como Zimbra, Open Xchange e vários outros. A mesma coisa foi acontecendo com todo |
| 28:25 | software proprietário. E por um tempo pareceu que o modelo estava funcionando e o mundo open source |
| 28:30 | foi ganhando força até que as versões abertas passaram a superar as fechadas em muitos lugares, |
| 28:36 | em particular em tecnologias de web, redes, servidores e infraestrutura. |
| 28:42 | Então surgiu o Gmail em 2006 e na sequência a Amazon e seu AWS, |
| 28:47 | que inaugurou o conceito de empacotar as coisas como serviço, e expor esses serviços como APIs, |
| 28:54 | em uma escala que não se imaginava. E muitas empresas seguiram o mesmo modelo, oferecendo |
| 29:00 | software como serviço. Antes você pagava licenças caras pra comprar ou assinar pelo uso de software |
| 29:06 | proprietário. O que mudou agora é que com os canais de distribuição da internet podemos fazer |
| 29:13 | a mesma coisa que antes, que era comprar software encaixotado de prateleira ou via consultoria ou |
| 29:19 | vendedores. Então o que realmente mudou foi o preço ser muito menor porque o software |
| 29:24 | consegue chegar em mais pessoas e empresas. Mas note: voltamos ao mesmo modelo dos anos 90. |
| 29:32 | Você paga uma assinatura mas não é proprietário do software. Pior: você não tem acesso ao código |
| 29:38 | do software, porque ele funciona fechado atrás do que chamamos de um walled garden ou jardim |
| 29:44 | emparedado. É um jardim bonito, mas lembre-se que ele não é aberto. Apesar da Amazon, Google, |
| 29:50 | Facebook, Netflix, Uber e todos os outros de fato colaborarem ainda com software livre |
| 29:56 | porque seria burrice não fazer isso, já que todos usam Linux e outras ferramentas. Mas o software que torna a Amazon a Amazon ou o Google o Google jamais vai ser aberto. |
| 30:07 | O AWS é o Windows da Amazon. O Google G Suite é o Office do Google. Custa muito caro criar uma |
| 30:14 | versão aberta que seja igualmente competitiva, especialmente porque estamos falando de larga |
| 30:19 | escala. Quanto mais eles crescerem, mais difícil vai ser pra qualquer outra empresa conseguir |
| 30:25 | competir com eles. Então é um mercado com uma barreira de entrada enorme. E você basicamente |
| 30:30 | trocou o Microsoft Office proprietário pelo Google Docs que também é proprietário. Na prática, a maior parte do software que realmente dependemos no nosso dia a dia é |
| 30:41 | proprietário, mas achamos que está tudo bem porque roda num navegador e não no Windows, |
| 30:47 | mas tudo que tem acesso livre na verdade é pago com os dados da sua privacidade - e eu nem sou |
| 30:53 | necessariamente contra, mas se você de alguma forma achava que é idealista de software livre |
| 30:59 | usando tecnologias do Google ou Facebook, hoje já está num mundo fechado na sua maior parte, e |
| 31:05 | você é equivalente a ser evangelista da Microsoft nos anos 90. De novo, nenhum problema nisso, |
| 31:11 | só esclarecendo que não é o que você achava. Considere que muito do que hoje é mantido |
| 31:17 | como software livre não são nada mais do que bibliotecas que consomem APIs. Eles sozinhos |
| 31:23 | não servem pra nada, são apenas cascas em cima de clientes de HTTP. Toda biblioteca da Amazon, |
| 31:29 | do Google, do Facebook conectam com os serviços deles e só servem pra isso. Muitos desenvolvedores |
| 31:35 | de software livre como o Salvatore que criou o Redis tem reclamado disso faz meses. Eles chegaram |
| 31:42 | a mudar a licença pra uma mais controversa que impede que empresas como Amazon ou |
| 31:47 | Google possam usar produtos como o RedisSearch, RedisGraph, RedisJSON e outros produtos. |
| 31:53 | Aos poucos você vê uma Amazon agindo como a Microsoft dos anos 90, adotando software de |
| 31:59 | fora, e criando modificações que atraiam as pessoas pra sua versão proprietária e depois |
| 32:05 | fechar as pessoas dentro de seu walled garden. Veja o AWS Aurora que é um MySQL modificado e cuja |
| 32:12 | modificação não é open source. Daí eles lançam um AWS Lambda e uma gama de outros produtos que |
| 32:18 | basicamente vão prender você dentro da AWS. Uma vez que você adotar esses produtos e seu negócio |
| 32:24 | realmente der certo, você não vai mais sair de lá. Lembra o que os desenvolvedores reclamavam |
| 32:29 | de Windows e Office? A AWS é o novo Windows e Office caso ainda não tenham percebido. |
| 32:35 | Eu comecei a pensar em outra coisa por causa de retrogaming e meu hobby gostando   de tecnologias antigas. Se eu pegar um computador dos anos 80, um Commodore 64, |
| 32:44 | eu consigo rodar todos os softwares daquela época. Se eu pegar um Gameboy, ainda consigo rodar todos |
| 32:50 | os cartuchos. E como foram feitos dumps dos cartuchos, CDs e DVDs, então todos os jogos |
| 32:57 | foram preservados em algum site. Essa parte do passado está preservada pra sempre. |
| 33:02 | Mas se eu pegar um celular Android de primeira geração, o HTC G1, muitos dos serviços nele |
| 33:08 | não funcionam. Porque eles são só cascas pra software as a service que já não existe mais. |
| 33:14 | Vários hardwares de 10 anos atrás vão começar a falhar sem serviços pra conectar. Consoles |
| 33:20 | de videogame é outro exemplo. Se a Playstation Network decidir que nenhum PS3 pode mais logar |
| 33:26 | na rede deles, você basicamente perdeu o uso desse hardware. Todo jogo online daqui a 20 anos, |
| 33:31 | sem os servidores proprietários, não vão servir pra mais nada. Não há como preservar mais esse |
| 33:37 | software. Daqui 40 anos uma geração não vai ter como saber o que se usava nos anos 2010 a não |
| 33:44 | ser por fotos de tela. Eu posso rodar o Office de 1995 hoje se quiser, mas não poderemos mais rodar |
| 33:50 | o Google Docs de 2019 daqui a alguns anos. E a direção dos software as a service indicam |
| 33:56 | uma mudança de paradigma. Um mundo ideal de um Uber é onde a maioria das pessoas não |
| 34:02 | precisasse mais comprar carros. Uber é carro como serviço. Pra um AirBnb o mundo ideal é |
| 34:08 | onde a maioria das pessoas não precisasse mais comprar casas. AirBnb é casa como serviço. iFood |
| 34:15 | é comida como serviço. Netflix é entretenimento como serviço. Spotify é música como serviço, |
| 34:22 | você não tem mais propriedade sobre sua mídia de música ou filmes. E assim por diante. |
| 34:27 | Como eu disse antes, em tecnologia tudo é um trade-off. Estamos trocando propriedade por |
| 34:33 | conveniência. Eu não digo que isso é bom ou ruim, o veredito ainda não foi definido. Mas |
| 34:39 | eu achei interessante colocar como pensamento final desta série. O mundo da tecnologia desta |
| 34:45 | década é diferente de 10 anos atrás, que foi diferente de 20 anos atrás, então não espere |
| 34:51 | que daqui a 10 anos vai ser igual agora, você pode esperar uma mudança geral de ecossistema e |
| 34:56 | tecnologias mais ou menos a cada 10 anos. E com esse pensamento, eu tenho o prazer de |
| 35:03 | finalmente encerrar esta série! Eu realmente não pensei muito quando comecei. Imaginava |
| 35:08 | que fosse encerrar em 3 ou 4 episódios e acabou se tornando uma mini-série de 14 episódios! Eu |
| 35:15 | publiquei o primeiro episódio em 22 de Janeiro e não pulei nenhuma semana. E eu quis encerrar |
| 35:20 | exatamente hoje porque coincidiu de ser o dia do Endgame, claro! |
| 35:25 | Depois desse projeto eu quero tirar uma ou duas semanas de folga do canal e ver o que |
| 35:31 | quero gravar a seguir. Não tenho dúvidas que só toquei na ponta do iceberg ainda, |
| 35:36 | mas espero que tenha atiçado a curiosidade de todo mundo que queira se tornar um desenvolvedor. |
| 35:41 | Mandem dúvidas nos comentários abaixo e sugestões de novos assuntos. Se curtiram o vídeo mandem |
| 35:47 | um joinha, e por favor compartilhem o video pra ajudar o canal. Não esqueçam de assinar |
| 35:52 | abaixo e clicar no sininho pra saberem quando eu voltar. A gente se vê na próxima, até mais!! |
