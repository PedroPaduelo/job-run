# 16 Linguagens em 16 Dias: Minha Saga da Rinha de Backend

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=EifK2a_5K_U
- **Duração:** 1:39:10
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Se costuma acompanhar a comunidade de desenvolvimento no Twitter, talvez tenha ouvido falar que |
| 0:07 | em agosto de 2023 aconteceu um mini evento online chamado de Rinha de Backend, organizado |
| 0:14 | pelo Zanfranceschi, desenvolvedor experiente, atualmente trabalhando no Nubank. |
| 0:19 | Eu não conhecia ele e só fiquei sabendo que esse evento aconteceu quase uma semana depois que já tinha acabado. |
| 0:25 | Mesmo se soubesse antes não teria participado porque nunca fui de competições, hackathons ou algo assim. |
| 0:30 | Mas eu gostei muito do que os participantes fizeram e, sem querer, isso tomou boa parte |
| 0:36 | do meu tempo, incluindo várias noites mau dormidas. Sem sombra de dúvidas este vai ser o video mais trabalhoso que já fiz na história deste |
| 0:43 | canal. Não só este como o próximo. Hoje vou resumir minha saga de 16 dias do pós-rinha avaliando diversos projetos dos |
| 0:53 | participantes. Neste percurso, aprendi muita coisa nova que não sabia ou que achava que fosse ser diferente. Foi uma longa saga, muitas noites mau dormidas, frustração, ansiedade, crises existenciais, |
| 1:04 | suor e lágrimas. É bastante coisa e só o resumo vai dar um video de mais de 1 hora. Por isso vou pedir muita paciência de vocês. |
| 1:11 | Vai ter várias técnicas importantes que vou mencionar o nome e os efeitos que causam, mas vai ser bem por cima. |
| 1:18 | Se ficarem confusos com termos que parecem complicados, não se preocupem, vou explicar os detalhes no próximo. |
| 1:24 | Também vai ser no próximo que vou falar detalhes das linguagens que vou mencionar. Então segurem as críticas. |
| 1:29 | Hoje quero só compartilhar como foi minha experiência. Primeiro vou resumir como foi o evento em si, um pouco sobre os projetos que ganharam |
| 1:41 | e o ranking que gerou alguma controvérsia, pelo que ouvi falar. Daí vou contar o que pensei a respeito e como resolvi começar a abrir os projetos |
| 1:49 | dos participantes com uma missão: fazer todo mundo chegar no primeiro lugar! (...) |
| 1:55 | Como disse, eu não participei do evento, nem acompanhei o dia a dia. Acho que o desafio foi lançado primeiro mas ninguém sabia exatamente como seriam os critérios |
| 2:02 | pra definir o vencedor até dias depois. E parte da graça de uma "rinha" como essa não é ser uma competição tecnicamente, |
| 2:10 | perfeitamente justa, tem muito fator sorte e incerteza envolvido, como em qualquer esporte. |
| 2:16 | Nem sempre é o melhor atleta técnico que ganha todos os jogos, mas quem aprendeu mais |
| 2:21 | nos jogos anteriores, quem consegue se adaptar rápido e quem teve menos azar. Assim foi esta rinha também, por isso em nenhum momento encarem qualquer coisa que |
| 2:30 | parece uma crítica como uma crítica ao evento e sim como dicas pros próximos. |
| 2:36 | Minha discussão vai ser puramente técnica. A crítica real vai pra quem tentou levar isso a sério demais. |
| 2:42 | Ser torcedor apaixonado de um time é normal, sair xingando e brigando na rua quando vê o cara do outro time é ser um animal irracional imbecil. |
| 2:50 | Vou assumir que estou falando com homo sapiens e não neandertais. O desafio foi divulgado num repositório de GitHub do Zan que vou deixar o link nas descrições |
| 3:00 | abaixo. Aliás, sempre olhem a descrição de todo video. Eu coloco links pra várias coisas extras pra vocês. |
| 3:06 | Além de ter a descrição de todos os capítulos pra ficar mais fácil achar seções de videos longos como este. |
| 3:12 | Enfim, leiam as instruções do desafio mas em resumo, o objetivo era escolher qualquer linguagem de programação, com ou sem frameworks, implementar 4 endpoints de APIs e configurar |
| 3:23 | pra rodar com Docker Compose numa configuração específica de infraestrutura. Fazer a API em si, em qualquer linguagem, é super simples. |
| 3:32 | É um endpoint POST "/pessoas" que recebe um JSON simples com dados como apelido, nome, |
| 3:38 | data de nascimento e stack de programação, um array com elementos como "php" ou "java". É como se fosse o cadastro de um sisteminha de recrutamento ou algo assim. |
| 3:46 | Tem que validar que apelido tem no máximo 32 letras, nome no máximo 100 letras, data de nascimento tem que ser minimamente válido. |
| 3:53 | Inclusive ele não fala que 31 de fevereiro tem que ser inválido, só fala que o formato tem que ser ano, tracinho, me, tracinho, dia. |
| 3:59 | A lista de stack tem que ser um array sem elementos nulos e cada elemento não podia |
| 4:05 | ter mais que 32 letras. E finalmente, o ID tinha que ser um UUID, que é um tipo de número aleatório. |
| 4:11 | Isso foi um bom requerimento como vou mostrar mais pra frente. Mas em termos de validação era só isso. Se passar dados inválidos temos que devolver o cabeçalho HTTP 400 de bad request. |
| 4:21 | Ou se voltar erro no insert do SQL por causa de constraints inválidas como nome não poder |
| 4:27 | ser nulo, apelido já existir ou algo assim, tem que devolver cabeçalho HTTP 422 de erro |
| 4:33 | unprocessable entity. A resposta pra requisição de criação precisa ter o cabeçalho HTTP 201 created e um cabeçalho |
| 4:40 | "Location" com o caminho pra essa pessoa recém criada no formato GET "/pessoa/uuid". |
| 4:46 | Isso é comum numa API restful básica. Esse endpoint devolvido no Location deve conseguir encontrar a pessoa recém criada e devolver |
| 4:54 | o JSON com os dados. Se passar um UUID que não existe, tem que devolver o cabeçalho HTTP de 404 not found. |
| 5:02 | Depois precisava ter outro endpoint GET "/pessoas" que receba um parâmetro chamado "t" pra ser |
| 5:07 | um "termo de procura", pra pesquisarmos o termo no apelido ou nome ou na stack. Seria tipo fazer um SQL com apelido like "%termo%" OR nome like termo OR stack like termo. |
| 5:19 | Já vou explicar porque esse seria o pior jeito. Devolvemos o resultado em JSON com código HTTP 200 ou devolve código 400 de erro se |
| 5:28 | não passar termo nenhum. Não encontrando nada bastava devolver um JSON com array vazio em vez de 404 not found. |
| 5:35 | E finalmente o 4o endpoint era um simples GET "contagem-erro" que deveria fazer um count |
| 5:40 | na tabela e devolver quantas inserções de fato aconteceram. Esse é o único endpoint que não faz parte do stress test e isso pode se tornar um ponto |
| 5:49 | importante pra alguns truques como vou explicar no próximo video. Como podem ver, são endpoints super triviais. |
| 5:55 | Se você é um programador experiente tenho certeza que já tem de cabeça como faria na sua linguagem mais fluente. Dá pra fazer rapidinho uma versão que funciona em 1 ou 2 horas se estiver um pouco enferrujado. |
| 6:06 | Mesmo se for bem iniciante, seguindo qualquer tutorial de APIs restful no framework que estiver aprendendo, é pra conseguir fazer em 1 dia. |
| 6:13 | Essa é a ordem de grandeza e talvez sirva pra vocês saberem em que pé estão. Vai demorar mais do que isso se quiser experimentar técnicas diferentes. |
| 6:21 | Teve versão que eu levei uns dois dias pra terminar porque resolvei aprender um framework novo do zero, por exemplo. |
| 6:27 | No próximo video vou demonstrar como dá pra fazer uma versão simples em poucos minutos, por agora só acreditem que dá. |
| 6:34 | Aliás, vamos começar a listar coisas pro próximo episódio. "Mostrar como fazer uma versão simples do zero". |
| 6:40 | Mas agora vem a parte que separa os adultos das crianças: a infraestrutura. Não basta só fazer o código e dizer "roda na minha máquina". |
| 6:47 | Tem que rodar dentro das restrições da rinha. Então não é só subir um banco de dados, subir sua aplicação sozinha e acabou. |
| 6:54 | Segundo as regras, tem que subir duas instâncias da sua aplicação, pra rodar em paralelo. E ambos precisam ficar embaixo de um balanceador de carga, no caso pediram o Nginx. |
| 7:04 | No mundo real aplicações rodam com várias instâncias em paralelo embaixo de um balanceador de um Kubernetes, Seasaw, HAProxy ou várias outras alternativas. |
| 7:14 | Azure tem o Application Gateway, AWS tem o ELB, o Elastic Load Balancing, tem o Traefik, |
| 7:21 | F5 Big-IP e mais. Mas NGINX é fácil e simples o suficiente pra este desafio. |
| 7:26 | Não é o mais rápido, mas também não é o mais difícil de usar. E aqui começa a parte realmente difícil: uma instância de NGINX, uma instância de |
| 7:34 | banco de dados, que pode ser postgres, mysql ou mongodb, mais duas instâncias da sua aplicação |
| 7:40 | sendo balanceadas, precisam caber em 1 CPU e meio e no máximo usar 3 gigabytes de RAM |
| 7:46 | e só. Essa é a regra da rinha. Fazer a API não é o desafio. Essa limitação que é. |
| 7:52 | Mas tudo bem, fazer caber é fácil, o problema mesmo é que no final esse sistema tem que aguentar um stress test, um teste de carga. |
| 8:00 | Stress test é um teste automatizado que simula como pessoas ou sistemas consumiriam o seu |
| 8:06 | sistema, mandando requisições http pros endpoints da API. No caso eles escolheram a ferramenta Gatling, que tem versão aberta e uma paga com mais |
| 8:14 | recursos. A versão gratuita é razoavelmente simples de usar e o script pro cenário de carga está no GitHub da rinha. |
| 8:21 | Vamos anotar aqui pra eu explicar "O Básico de Stress Test" no próximo video. Lembrando que quando a rinha começou acho que os participantes ainda não tinham acesso |
| 8:30 | a esse script de testes, justamente pra não tentar burlar os critérios. Eu não sei se eles sequer tiveram acesso ao script durante a rinha. |
| 8:37 | Imagino que não, só no final. Vamos assumir que ninguém sabia. Isso que diferencia os participantes da rinha de programadores como eu agora, que tem a |
| 8:45 | oportunidade de avaliar sabendo tudo que eles não sabiam. Não comparem o meu resultado com o deles, isso seria injusto. |
| 8:51 | Em resumo, você podia escolher linguagem, framework e implementar uma aplicação web que serve 4 endpoints de APIs. |
| 8:58 | Tinha que ser o mais leve possível pra aguentar carregar duas instâncias, mais nginx, mais |
| 9:04 | banco, em 1.5 CPUs e 3GB de RAM, orquestrado por docker compose. |
| 9:10 | Eu ainda não fiz um video explicando o que é um framework web, então vamos anotar aqui pra explicar no próximo video. |
| 9:16 | Eu já tinha feito um video sobre Docker, recomendo que assistam depois, mas aí também no próximo vou explicar como usar o Docker Composer pra subir todos os componentes de |
| 9:26 | um sistema web na sua máquina também. A idéia é que os participantes deviam empacotar a aplicação numa imagem de Docker, subir |
| 9:33 | no Dockerhub, postar o arquivo de docker compose como pull request no GitHub da rinha e aí |
| 9:38 | os organizadores iam rodar esse docker compose e aplicar algum teste de carga. |
| 9:44 | Quem passasse, ia pro ranking final. O ranking foi interessante. Teve 90 participantes. Desses, 39 foram desclassificados por diversas razões. |
| 9:53 | Ou o docker compose tinha algum bug e nem carregava, ou algum dos endpoints da API não respondia como deveria, ou deixaram de implementar alguma coisa que tinha nas regras. |
| 10:02 | Sobraram 51 projetos que funcionaram, mais da metade. Um número respeitável. No final, além de implementar os endpoints corretamente, o resultado pro ranking foi |
| 10:11 | baseado na quantidade de inserts que foram feitos no banco de dados. Ordenando a lista por essa quantidade de inserts, tivemos os Top 10. |
| 10:19 | Quem ganhou a rinha foi o Vinicius Fonseca, com sua implementação usando Rust, com o framework Actix com Tokio. |
| 10:26 | Em segundo lugar ficou o Leo Vargas com sua versão em Go e Fiber, o framework que usa |
| 10:31 | FastHTTP. Em terceiro ficou o André Marra e Albert Kliemke, que fizeram em dupla uma versão |
| 10:37 | em Dotnet 8 com C#. Em quarto ficou a Isadora Souza, que também usou Go com Gin. |
| 10:42 | Em quinto ficou a dupla algebraic, a Sofia e a Gabi, que fizeram em Lean4, a linguagem |
| 10:48 | mais desconhecida da rinha toda. Depois vou falar delas. Em sexto ficou o Vinicius Santos que também fez em Rust. |
| 10:54 | Em sétimo ficou o Jean Rodrigues que também fez em Go. Em oitavo ficou o Luiz Picanço, com outra versão em Rust. |
| 11:01 | Em nono lugar "e" também em décimo ficou o Rodrigo Navarro, que participou com duas |
| 11:06 | versões de Rust, uma feita com o framework Axum e outra com o mais leve Touche que, por |
| 11:11 | ironia, ficou depois da versão em Axum. Aliás, parece que ele fez pelo menos uma dessas versões numa live no canal dele, pra |
| 11:18 | quem se interessar corre atrás pra assistir. Portanto, nos Top 10 ficou assim: 5 versões em Rust, 3 versões em Go, 1 em Lean e 1 em |
| 11:26 | dotnet. Aí as redes sociais foram à loucura. Primeiro, ninguém achou estranho já que isso confirma a hegemonia do Rust e do Go |
| 11:34 | como as linguagens mais rápidas da atualidade. Pior ainda: o fato de dar um dotnet nos Top 10 mas não um Java, fez um monte de gente |
| 11:41 | ficar ridicularizando o Java. Sabe o que falei do torcedor de time neandertal? Sim, afinal na cabeça deles, Java é uma linguagem velha e ultrapassada, certo? |
| 11:50 | Vamos ver como os neandertais leram o resto do ranking. Seguindo pros próximos 10. |
| 11:55 | Em décimo primeiro ficou o Gabriel Oliveira com uma versão em Elixir. Alguns ficaram tipo, "puts, não era o Elixir que se vendia como rápido? |
| 12:03 | Perdeu até pro dotnet?" Em décimo segundo ficou o Lucas William com uma versão em C++. "Ué, C++ não era pra ser o mais rápido? |
| 12:11 | Rust e Go são foda mesmo, muito melhor que C++". Em décimo terceiro ficou o Lucas Weis com uma versão em Node.js com Express. |
| 12:19 | "Pois é, bem que me falaram que Javascript não é tudo isso que falam, né?" Em décimo quarto ficou o Yuri Gomes que fez uma versão em Bun, antes do lançamento da |
| 12:28 | versão 1.0 alguns dias atrás. E pois é, Bun é só hype mesmo, nem lançou ainda e já é lento. |
| 12:34 | Em décimo quinto ficou o Thales Maciel que fez em Rust também. Coitado, deve ser um júnior que né, não é culpa do Rust. |
| 12:42 | Em décimo sexto ficou um cara de apelido saiintbrisson, que não deixou arquivo de README pra trás com o nome nem links, então nem fui tentar procurar. |
| 12:50 | Em décimo sétimo ficou o Lauro Appelt com sua versão em PHP. Finalmente uma linguagem que se associa mais com Web clássica. |
| 12:57 | Quem diria, PHP ainda não morreu, mas tá lá embaixo com um pé na cova né? E só em décimo oitavo ficou o Bruno Borges com a primeira versão em Java da rinha. |
| 13:07 | E só pra piorar a situação do Java, ele ficou encostado no décimo novo que foi o Lázaro Nixon com uma versão em Ruby on Rails e o vigésimo do Leandro Proença que também |
| 13:17 | fez uma versão em Ruby. Peraí, Java tá tão ruim agora que fica encostado em Ruby?? |
| 13:22 | Que fase heim? Eu queria parar no vigésimo, mas só no vigésimo primeiro lugar tivemos o Ian Cambrea com a |
| 13:28 | primeira versão em Python, usando Sanic, na competição. Pelo visto Python também é só hype né? |
| 13:36 | Não ganhou nem de PHP, nem de Ruby e nem de Java. Espero que vocês que acompanharam não tenham pensado desse jeito, porque seria vergonhoso. |
| 13:43 | Dentre os 51 projetos enviados, 8 foram feitos em Go, 7 em javascript, 6 em Rust, 6 em Java. |
| 13:50 | 5 em PHP. 4 em dotnet. 3 em Python, 2 em Ruby, 2 em Elixir, 1 em C++, 1 em Lean, e o último |
| 13:57 | lugar foi 1 feito em Bash pelo Leandro. Teve uns 3 no ranking que o README não dizia em que linguagem foi feito e nem o link pro |
| 14:05 | Github então também não fui atrás pra saber. O Lean da Sofia e Gabi foi o mais inesperado, ainda mais por ter entrado nos Top 10 e o |
| 14:13 | último de Bash do Leandro foi o mais inusitado porque acho nem ele esperaria ganhar com isso, |
| 14:18 | mas quis representar e mandou super bem. Sim, Bash de terminal que vocês usam no Linux como shell. |
| 14:23 | Tem gente que roda Doom numa calculadora, porque não uma aplicação web em Bash? Mas nesse caso, como esperado, Bash não tinha como competir mesmo. |
| 14:32 | Alguns participaram com mais de uma implementação, como o Leandro que fez em Ruby e Bash, o Lauro Appelt com duas versões em PHP, o Rodrigo Navarro com duas em Rust. |
| 14:41 | Não sei como foi a divulgação do Zanfranchesci, mas ele mandou muito bem. Foi uma participação bem variada e ao meu ver cumpriu exatamente o que eu imaginaria |
| 14:49 | de uma rinha: galos de diferentes tamanhos e cores. Rust e Go na frente, Javascript e Java pra trás. |
| 14:55 | É o que a platéia gostaria de ver. Foi show de bola. Tendo visto os resultados, se no topo tivesse sido uma hegemonia absoluta de Rust e Go provavelmente |
| 15:06 | eu teria aceitado como todo mundo: sim, talvez nessas restrições de infra, só eles mesmo |
| 15:11 | pra aguentar a carga. Mas como tinha um dotnet ali na terceira posição, e meus parabéns pro André e Albert por isso, |
| 15:18 | mas isso chamou minha atenção: não vejo porque dotnet consegue estar nos Top 10 e outra linguagem não, seja Java ou seja Javascript. |
| 15:26 | Com essa pulga atrás da orelha, minha saga começa na sexta feira, dia 25 de agosto, |
| 15:31 | eu abri o editor e comecei a fazer minha versão. Tava um pouco enferrujado, então levei acho que umas 2 horas pra implementar em Ruby on |
| 15:38 | Rails mesmo. Levou mais tempo do que deveria porque pensei: "hum, se é um teste de carga em inserção, |
| 15:44 | talvez o postgres seja o gargalo. Depois do HTTP POST, o teste vai checar se inseriu pelo ID. |
| 15:50 | Não tem como deixar só em memória porque são duas instâncias isoladas. Como tem balanceador de carga, o normal vai ser a inserção cair numa instância e a |
| 15:58 | pesquisa cair na outra instância". A conclusão imediata que qualquer um chegaria é: vou colocar um cache compartilhado, talvez |
| 16:06 | memcached. Mas como queria já lidar com o que achei que fosse o gargalo, pensei, "vou jogar jobs |
| 16:12 | em fila de redis pra inserir em background". Então esquece memcache, vou usar redis tanto como cache quanto fila de jobs. |
| 16:19 | Deve caber nas restrições de RAM porque aí o postgres deve trabalhar um pouco menos e eu divido os recursos. |
| 16:26 | Pelo que avaliei depois, não fui só eu que pensei assim. Várias das versões fizeram a mesma coisa: usaram redis ou nats como cache e fila de |
| 16:35 | jobs assíncronos. É uma coisa que todos nós, que já temos cicatrizes de guerra, fazemos meio sem pensar |
| 16:41 | e isso é um sério problema. Não existem soluções automáticas. Cada caso é um caso e precisa ser medido antes de implementar qualquer truque. |
| 16:49 | Cache ou filas não deixam nada rápido automaticamente em todo caso. Eles também custam recursos. |
| 16:56 | De novo, vamos deixar anotado aqui pra eu explicar no próximo video, como é essa estratégia de usar jobs e filas pra inserir e porque cache não fazia diferença aqui. |
| 17:05 | Pelo mesmo motivo achei que fosse ver mais gente usando MongoDB, assumindo que muitos imaginam que é mais rápido, mas do total de 90 projetos só 7 tentaram. |
| 17:14 | E mesmo MySQL só 2 tentaram. A maioria esmagadora acreditou no Postgres por padrão. |
| 17:20 | A conclusão: coisas relativamente fáceis, como adicionar caches e filas, todo mundo faz na frente. |
| 17:26 | Coisas mais complicadas, como mudar o paradigma de armazenamento, aí deixamos pra depois. Eu também escolhei ir de Postgres. |
| 17:33 | Sendo eu criador de conteúdo que, por 20 anos venho evangelizando coisas como uso de Postgres, cache e jobs assíncronos com Redis, me deu uma ponta de dor na consciência. |
| 17:43 | Mesmo aqui no canal já fiz um video chamado "Tornando sua App Web Mais Rápida", onde faço justamente essas recomendações. |
| 17:50 | Eu tento explicar em que casos usar, mas acho que dá pra explicar isso em mais detalhes, por isso deixei anotado pra voltar nesse assunto no próximo video. |
| 17:58 | Quando terminei minha versão de Rails, com cache, jobs e tudo mais, rodei o stress test. |
| 18:03 | Já imaginava que poderia não ser rápido, mas sempre tem aquela esperança de "vai que" né? |
| 18:09 | E pra minha decepção não deu mais que uns 15 mil inserts, abaixo ainda das versões |
| 18:14 | de Rails do Lazaro e do Leandro. Foi quando comecei a postar tudo que ia descobrindo no Twitter. |
| 18:19 | Esse foi meu primeiro tweet. Olha que situação ridícula. Quem gera esses relatórios é a própria ferramenta Gatling, que roda o teste de carga. |
| 18:28 | No próximo video vou mostrar como ele funciona. Nesse gráfico interessa a barrinha verde, olha como tá lá embaixo e a vermelha tá |
| 18:35 | lá em cima. É a quantidade de knockouts ou KOs, de requisições que não conseguiram ser processadas e foram |
| 18:42 | perdidas. Em resumo, só entenda que queremos que verde seja grande e vermelho seja pequeno ou idealmente, |
| 18:49 | zero. Nesse momento eu pensei: "é, talvez essa carga seja muito pesada pra uma linguagem interpretada como Ruby numa infra de docker tão apertada". |
| 18:57 | Resolvi baixar a versão do Leandro que usa Ruby mas sem framework pesado como o Rails. |
| 19:03 | E os resultados dele foram bem melhores que os meus, mas ainda assim tem uma barra vermelha considerável de knockouts. |
| 19:09 | Eu conseguia 15 mil inserts e a versão dele batia acima de 30 mil inserts, na minha máquina. |
| 19:15 | Na minha cabeça essa discrepância fazia sentido. Imagino que façam na de vocês também, afinal quanto menos coisa tiver, mais rápido deveria |
| 19:23 | ficar. Só pra testar os limites, tirei a restrição de 1.5 CPU e 3GB de RAM e configurei o docker |
| 19:29 | compose pra usar 24 CPUs e 20GB de RAM, afinal meu PC aguenta muito mais que isso. |
| 19:36 | Assim a barrinha verde de fato sobe, mas olha que ainda tem uma barrinha vermelha. Eu ainda estou perdendo requisições, e pára pra pensar, isso não faz sentido, em nenhuma |
| 19:46 | linguagem. Nesse ponto as coisas não estavam fazendo muito sentido. Bacana, eu sei que Rust e Go são rápidos, afinal são compilados e tals, mas se o problema |
| 19:54 | fosse só falta de recurso, na minha máquina, que é absurdamente potente, não deveria estar dando nenhum knockout. |
| 20:01 | Isso foi aumentando a pulga atrás da minha orelha. A conclusão nunca pode ser "a linguagem é uma bosta", a primeira conclusão sempre tem |
| 20:09 | que ser "eu estou fazendo alguma coisa errada" e ir atrás de descobrir o que. |
| 20:14 | Resolvi tentar uma outra versão, aproveitar o domingo, dia 27 de agosto. Fazia algum tempo que queria desenferrujar meu Crystal e aprender o framework web chamado |
| 20:24 | Lucky. Ótima desculpa. Deixei a documentação do site aberta de um lado, editor do outro e fui fazendo tentativas. |
| 20:30 | Minha premissa é que Crystal, sendo uma linguagem que compila binário nativo, como Go, deveria |
| 20:36 | ser bem mais rápido que minha versão em Rails. No final gastei o domingo inteiro mais a segunda feira seguinte pra fazer, porque nunca tinha |
| 20:43 | usado Lucky antes. Vamos anotar isso também pro próximo video: falar um pouco mais das minhas experiências |
| 20:49 | mexendo em linguagens diferentes, mas pra hoje só precisa entender que os criadores do Crystal, o Ary e o Brian, quiseram inventar uma linguagem com sintaxe o mais próximo |
| 20:58 | possível de Ruby, adicionando coisas modernas como inferência de tipos, fibers, channels, |
| 21:03 | mas com perfil de performance similar de Go, e em alguns casos até de Rust. Foi nesse ponto que fui vendo outros desenvolvedores na comunidade começarem a esmiuçar mais |
| 21:13 | os critérios do ranking, em particular o MrPowerGamerBR. Sendo javeiro ele foi um dos que ficaram sofrendo bullying do povo tirando sarro do Java ter |
| 21:22 | se saído tão mau no ranking. Em vez de só sair dando reply xingando todo mundo, como todo twiteiro faz, ele fez o que |
| 21:28 | um programador de verdade deveria fazer: abrir o código e provar com números. |
| 21:34 | Ele fez a mesma coisa que eu: começou uma nova versão na linguagem que mais gosta: Kotlin. |
| 21:39 | Pra quem não sabe, Kotlin foi inventado pela JetBrains, a empresa que faz a IDE IntelliJ e o Android Studio. |
| 21:45 | Eu também gosto dela e vou deixar anotado pra comentar a respeito no próximo video. |
| 21:50 | Pra hoje, basta entender que é compatível com Java e tecnicamente oferece a mesma performance. |
| 21:56 | Dia 28 de agosto ele postou essa versão, que não só melhora a posição de Java, |
| 22:01 | mas iguala na mesma posição Top 1 da versão de Rust do Vinicius Fonseca. Mais do que isso, ele estudou mais a fundo o script de stress test em Gatling e determinou |
| 22:11 | que existe um número máximo de requisições e de inserts possível durante os 3 minutos |
| 22:16 | fixos do teste: 46 mil quinhentos e setenta e seis inserts. Na verdade vai ser 46 mil quinhentos ou seissentos e alguma coisa porque no script de stress |
| 22:27 | test do Gatling tem essa chamada pra "randomized" que afeta a quantidade de requisições pra |
| 22:32 | criação de registros. Se rodar o teste várias vezes, vai dar números diferentes. Imagino que o Zanfranchesci fez isso de propósito pra adicionar o fator de "sorte" no espírito |
| 22:42 | de uma rinha. Portanto o resultado numérico nunca foi pensado pra ser totalmente justo. |
| 22:47 | E antes que os haters apareçam de novo: eu estou super ok com isso. Mais do que isso, o MrPowerGamerBR olhou com mais calma a versão de Rust do Vinicius. |
| 22:57 | Sim, ele estava inconformado, e nada é mais motivador do que a força do ódio. Ele notou que surgiam inconsistências esquisitas. |
| 23:04 | Às vezes o total dava 300 a mais do que o máximo. Às vezes dava 500 a mais. Como isso poderia ser possível? |
| 23:10 | Não tem como aparecer requisições do nada. Se existe um máximo e passa do máximo, obviamente existe um bug. |
| 23:17 | E de fato tem. Não foi de propósito, a gente esquece bugs. Por isso sempre falamos: não é porque uma linguagem compila, não é porque uma linguagem |
| 23:25 | tem checagem de tipos, que não precisa de testes. No código do Vinicius tem uma rotina de aquecimento que insere mais de 500 registros falsos, não |
| 23:34 | sabemos porque, mas depois tem um código que deleta isso. Só que esse código tem uma race condition, uma condição de corrida. |
| 23:41 | Um erro clássico em programação concorrente. Ou seja, às vezes a rotina de limpeza roda antes de terminar de inserir tudo, aí sobra |
| 23:50 | registros e isso polui o total no final. Não chega a ser um problema, porque mesmo se corrigir esse bug, ainda assim a versão |
| 23:57 | dele atinge o máximo, então sempre seria o primeiro. Mas estudando o stress test, estudando o código do Vinicius e também o do Lucas Weis que |
| 24:05 | fez em Node.js, o MrPowerGamer aprendeu que existem truques que poderiam ser usados que |
| 24:10 | a maioria não pensou. Não foram só eles, mas alguns pensaram além do óbvio e conseguiram resultados melhores. |
| 24:17 | Em 10 de setembro, o MrPowerGamerBR soltou um video detalhando essas descobertas e recomendo |
| 24:23 | que assistam depois. Eu vou explicar tudo que ele falou e muito mais no próximo video. Uma dessas técnicas foi bulk inserts, a outra técnica foi gerar um índice especial pra |
| 24:32 | pesquisas. Vamos deixar anotado aqui pro próximo video: explicar o que são bulk inserts e explicar |
| 24:38 | como fazer pesquisas fuzzy no postgres e os segredos de ajustes de performance. |
| 24:43 | Se consertar o bug de race condition do código do Vinicius e se tirar o fator de aleatoriedade |
| 24:49 | do stress test, o ranking fica bem diferente. Como o MrPowerGamer mostra nos seus tweets, o primeiro lugar seria compartilhado entre |
| 24:57 | a versão de Rust do Vinicius, que continua sendo o primeiro, mas a versão de Go do Leonardo Vargas também sobe pra primeiro assim como o 6o lugar da Isadora e o 9o lugar do Navarro |
| 25:07 | também virariam primeiro lugar. Por causa disso o terceiro lugar de dotnet do André e Albert pula pro segundo lugar. |
| 25:15 | Eles raspam no máximo mas não ultrapassam por meros sessenta e cinco inserts. O quinto lugar do Luiz Picanço em Rust sobe pro terceiro lugar. |
| 25:23 | O Navarro, que tinha feito duas implementações em Rust, também sobe a outra versão, do 10o pra quarto. |
| 25:29 | O oitavo lugar do Jean Rodrigues, em Go, sobe pra quinto lugar. Todo mundo vai subindo no ranking. |
| 25:35 | Mais ainda: sabendo o número máximo de inserts, se alguma versão ultrapassar, sabemos que |
| 25:40 | tem bug nas validações. E isso aconteceu com o quarto lugar em Lean4 da Sofia e da Gabi, e a que ficou em sétimo |
| 25:47 | lugar do Vinicius Santos, em Rust. Ambos ultrapassam os 48 mil e quinhentos e tanto, mas como tinha aquele fator de aleatoriedade |
| 25:55 | no script, na rodada oficial, passaram batido, mas deveriam ter sido desclassificados. E que fique claro que não foi de propósito, que atire a primeira pedra quem nunca deixou |
| 26:03 | um bug pra trás. Como já expliquei, numa rinha tem fator sorte, e está ok. O problema é que o script de stress test, e o critério de ranking, não tinham sido |
| 26:12 | divulgados desde o começo e nem testam tudo que está nas instruções. Por exemplo, eles deveriam checar as constraints da DDL do SQL que cria a tabela e índices |
| 26:23 | pra garantir que coisas como apelido tem índice de unicidade, que o campo de data de nascimento |
| 26:28 | era realmente de tipo data e coisas assim. Se fizer um campo de nascimento sendo um varchar, um string, e simplesmente inserir o que vier |
| 26:36 | sem checar, no final vai ter mais registros do que deveria. Se fosse pra ser mais rígido, deveriam ter implementado uma rotina de testes automatizados |
| 26:44 | em Cypress, por exemplo, uma suite de testes de aceitação que testam todas as regras |
| 26:50 | que estão nas instruções. Assim seria possível ver se a aplicação está devolvendo os códigos de erro quando |
| 26:55 | enviamos dados inválidos. Sem isso, vários bugs passam despercebidos. |
| 27:01 | Fica a dica pra uma próxima rinha. E também pra projetos de verdade: sem testes, tudo compila, tudo roda, mas bugs de validação |
| 27:09 | vão passar despercebidos, em todas as linguagens, compiladas, tipadas, ou não. |
| 27:15 | Vou repetir: não encarem como uma crítica à rinha, o próprio nome "rinha" é pra ser |
| 27:20 | uma brincadeira. Inclusive, eu acho que se tivesse um teste de aceitação mais rígido assim, teria muito |
| 27:25 | menos participantes e muito mais projetos desclassificados, e meio que perderia a graça. |
| 27:31 | Mas o que me motivou a gastar tanto tempo nisso é que só olhando o ranking oficial, sem todo o contexto, eu também estava aceitando que Rails ou Java iam ser lentos mesmo e bola |
| 27:41 | pra frente. Mas à medida que fui explorando o que o Vinicius, o Lucas, o Leandro, o MrPowerGamerBR, fizeram |
| 27:47 | nas versões deles, resolvi copiar na minha versão de Crystal, pra tirar a prova dos nove. |
| 27:53 | Não era pra ser difícil. Na minha cabeça, coisa de poucas horas. Demorei um tanto pra entender o framework Lucky, o Avram que é o ORM que fala com o |
| 28:01 | banco, tive até que abrir o código fonte deles pra entender. Na dúvida, na falta de documentação ou stackoverflow, nunca penso duas vezes e vou |
| 28:10 | ler direto na fonte. Vantagem de usar projetos de código aberto é que o código é aberto, sacaram? |
| 28:15 | É pra ler. E eu fiquei empolgado em tentar implementar o sistema de cache com job assíncrono pra |
| 28:21 | fazer bulk insert como o Vinicius fez em Rust. Sendo Crystal compilado, era pra ter performance similar, né? |
| 28:28 | Ledo engano. Assim que terminei e fui testar com o Gatling, a decepção. Lembra a barrinha vermelha? |
| 28:33 | Olha ela aqui firme e forte. Minha implementação nem entraria nos Top 20. |
| 28:39 | Meros 20 mil inserts. Só que diferente do que tava pensando sobre Ruby, que é lento por ser interpretado e |
| 28:45 | não tinha o que fazer, ou Java que come muita RAM e não tinha o que fazer, aqui eu fiquei meio puto. A culpa não podia ser do Crystal, nem do Lucky, tinha que ser minha. |
| 28:53 | Eu estava fazendo alguma coisa muito errada. Será que eu sou uma farsa? Será que eu sou tão ruim assim? |
| 28:59 | Quando gastamos um tempo tentando descobrir um problema num código e depois de "ver tudo", ou achar que viu tudo, ainda assim não encontrar, eu sempre tenho uma saída que funciona. |
| 29:07 | Olhem neste código de Crystal. Pra passar o stress test, basta devolver HTTP 201 created e um Location válido pra próxima |
| 29:16 | requisição. Até tinha deixado comentado aqui esse código de teste aqui. Posso descomentar essas duas linhas e comentar todas as de baixo. |
| 29:24 | É isso mesmo, na dúvida, tire tudo e faça a resposta mais simples e idiota, devolver |
| 29:29 | uma constante. Mas esta Location não vai existir, porque se não inserir nada, não existe ninguém |
| 29:34 | com ID número 1. Então, no show.cr, também tinha deixado esta linha comentada, que sequer tenta fazer |
| 29:41 | a pesquisa no banco, só devolve outra constante. Descomento e comento o resto. Pro teste de consulta passar certo, basta devolver HTTP 200 de OK. |
| 29:51 | Finalmente, na pesquisa por termos, mesma coisa, descomento esta linha pra devolver código 200 e comento o resto. |
| 29:58 | Só fazendo isso o teste de carga já passa. Esta vai ser a velocidade máxima desse app, sem processar nada no banco, manjam? |
| 30:05 | Estou removendo uma das variáveis de incerteza. Rodando o Gatling, só esperar 3 minutos e esse é o resultado. |
| 30:12 | Tudo verde, nenhum vermelho de knockout, e olhem aqui do lado, todos os tempos de resposta |
| 30:17 | da ordem de 1 milissegundo. Na verdade é menos de 1 milissegundo, mas ele arredonda. Esse é o tempo perfeito, porque a aplicação não tá fazendo praticamente nada. |
| 30:26 | Ótimo, isso mostra como o Crystal sozinho é rápido. Agora posso ir voltando meu código, uma linha de cada vez. |
| 30:34 | Salvo, subo o docker-compose, que vai recompilar a imagem, e rodo o Gatling de novo. |
| 30:40 | Checo e vejo se a diferença no resultado condiz com o código extra que coloquei. Volto, descomento mais uma linha, salvo, reinicio docker-compose, testo de novo, meço. |
| 30:50 | E vou fazendo isso, uma linha de cada vez. E como esperado, nenhuma dessas coisas extras deu nada de estranho. |
| 30:57 | Até eu chegar nesta linha, a que monta a URL de Location. A única coisa que isso vai fazer é gerar uma linha como esta aqui em cima, um http://localhost |
| 31:07 | etc. Claro, este método faz mais do que só concatenar strings, serve pra montar todo tipo de URL |
| 31:14 | complexa que quiser incluindo encoding de parâmetros e tudo mais. Imagina aquelas URLs gigantes da Amazon. |
| 31:20 | Mas eu nunca esperaria isso causar qualquer diferença significativa. Na realidade, isso tá até errado. |
| 31:26 | Pensei melhor e Location na realidade só precisa devolver o path, só a parte de "/pessoas/id". |
| 31:32 | Não precisa do protocolo nem domínio a menos que eu queira redirecionar o cliente consumindo a API pra outro domínio diferente, que não é o caso. |
| 31:40 | Substituindo o método .url pra .path e testando de novo, batata, agora o resultado melhorou. |
| 31:47 | Eu twitei sobre isso, daí uma conta da comunidade Crystal retwitou e um dos desenvolvedores |
| 31:52 | do framework Lucky, o Jeremy, ficou interessado. Ele foi tão legal que abriu uma issue no projeto. |
| 31:58 | Fui lá explicar esses detalhes. Ele já tinha uma suspeita em mente e me pediu pra testar um ajuste. Este foi meu post no ticket aberto. |
| 32:05 | Quando testei sem o patch dele, tava tomando knockouts, mas colocando o patch, caiu de mais de 600 knockouts pra menos de 10, então tinha alguma regressão de performance mesmo. |
| 32:17 | Não sei explicar exatamente o motivo ainda. A versão anterior parece que só concatenava strings, e o patch usa tipo um string builder. |
| 32:25 | Concatenar gera duplicatas da string. Um Builder pré-aloca espaço e vai só adicionando as novas partes sem duplicar. |
| 32:32 | É um trade off de CPU por RAM. Eu sei que isso faz alguma diferença, mas não sei ainda explicar porque faria diferença |
| 32:38 | aqui. Mesmo tendo, não deveria ser significativo. Mas de qualquer forma, no número de stress test do Gatling fez muita diferença. |
| 32:47 | Sem querer, acabei achando um gargalo de performance no framework que levou a um conserto. |
| 32:52 | É assim que a gente acaba contribuindo em projetos open source: sem querer. Mas essa não era a única otimização. |
| 32:58 | Olhando outras versões notei que ninguém tava devolvendo mensagens de erro completas, como "apelido já existe" ou "formato de data inválida". |
| 33:06 | As instruções só falam que precisa devolver código de status 400 ou 422. Na minha versão, antes, além do código eu devolvia um JSON com o erro. |
| 33:14 | E processar JSON também custa tempo. Tirei todos os métodos de render ou json e usei só o método "head" que, como o nome |
| 33:23 | diz, devolve só o cabeçalho, o código de erro. É uma coisa besta, que em testes individuais não faria diferença, mas o Gatling manda |
| 33:30 | centena de milhares de requisições. Aí parece que faz diferença. Mesma coisa logs. O teste não exige logs. |
| 33:37 | No mundo real precisamos ter mensagens de erro gravadas e retornadas pra ficar mais fácil achar bugs e defeitos, mas pra este desafio de performance que só dura 3 minutos, |
| 33:47 | podemos desligar todos os logs e ganhar alguns milissegundos importantes. E fazendo pequenos ajustes assim, o resultado de inserts de Crystal foi subindo. |
| 33:55 | Dos pífios 15 mil inserts, foi pra 30 mil, daí pra quase 40 mil inserts. |
| 34:01 | Não bati no máximo mas chegando perto dos 40 mil inserts, já foi um salto muito bom. Quando postei esse resultado já era dia 1o de setembro. |
| 34:09 | Ainda me distraí no processo porque queria uma biblioteca pra auxiliar o caching em Redis |
| 34:15 | mas não tinha nenhuma bem feito. Esbarrei num bem antigo chamado Kiwi que ninguém atualizava fazia tempo, então resolvi arrumar |
| 34:21 | e melhorar o código dela. E essa foi minha segunda pequena contribuição open source. Enquanto isso, em paralelo, o Leandro e o Lazaro, das versões de Ruby mínimo e de |
| 34:30 | Ruby on Rails, continuaram mexendo nas versões deles. O lázaro que, no ranking oficial da rinha, tinha ficado lá na 19a posição com uma |
| 34:38 | faixa de 24 mil inserts, também saiu ajustando as configurações dele e com muito pouco ajuste já tinha conseguido bater os 40 mil inserts também. |
| 34:46 | O Leandro também. Com esses resultados eles já teriam entrado nos Top 10. O Leandro experimentou mais com as configurações de postgres e de nginx. |
| 34:55 | Muitos de nós achávamos que esses dois componentes não eram tão importantes. Pior, achávamos que eles não ajudavam em nada, então fizemos outra coisa feia que |
| 35:04 | muitos fazem sem pensar: colocamos nginx pra aceitar o máximo de conexões quanto possível |
| 35:09 | aumentando o número de worker connections lá pra cima de 10 mil. E no caso do Postgres a gente configurava os pools de conexão pra dezenas ou centenas |
| 35:18 | de conexões. E isso é um enorme erro. Vamos anotar pra explicar no próximo video, mas deixa eu tentar ilustrar aqui. |
| 35:25 | Pra ter uma visão na cabeça vamos imaginar uma lanchonete, com vários caixas tirando pedido e mandando pros cozinheiros atrás. |
| 35:33 | Os caixas são nossa aplicação, feitos em qualquer das nossas linguagens. Os cozinheiros são as conexões do banco de dados que é a cozinha. |
| 35:41 | O nginx é como o tamanho da porta da lanchonete. Se fizer uma porta que aguenta passar 100 mil pessoas de uma só vez, o que acontece? |
| 35:49 | O stress test começa com poucas pessoas, umas 3, mas ao longo de 3 minutos, dispara 600 simultaneamente. |
| 35:55 | Só que essas 600 não são atendidas ao mesmo tempo. Não tem caixa suficiente, daí vai formar um amontoado de gente desordenado. |
| 36:04 | Do lado da cozinha, o banco de dados, cada cozinheiro extra exige pelo menos uns 3 MB de RAM de espaço e vai consumir CPU. |
| 36:11 | Mas a cozinha, é limitada. Lembra da regra da rinha? No máximo 1.5 CPU. |
| 36:16 | Não adianta aumentar cozinheiro infinitamente, que a cozinha não aguenta. Se falarmos pros caixas tirarem quantos pedidos conseguirem, rapidamente esses pedidos vão |
| 36:25 | ficar empilhados porque não tem cozinheiro suficiente pra atender. A vontade é aumentar os cozinheiros, o pool de conexões. |
| 36:33 | Digamos, temos duas instâncias da aplicação, os caixas, e cada um vai poder tirar até 100 pedidos de uma só vez. |
| 36:40 | Então 200 pedidos. Mas não tem como ter 400 cozinheiros. Primeiro porque eles ocupam espaço, 3 mega cada já vai dar no mínimo 1.2 gigabytes |
| 36:48 | de RAM. Mas beleza, o estabelecimento inteiro aguenta 3 gigabytes que é o limite imposto pela rinha |
| 36:53 | lembra? Mas não tem fogão suficiente pra cozinhar, a cozinha tá apertada, temos menos de 1 CPU, |
| 36:59 | cada cozinheiro vai demorar mais e mais tempo pra atender cada pedido. Entenderam? |
| 37:04 | Então o cenário é assim: a porta do estabelecimento permite entrar todo mundo de uma só vez, mil pessoas, 10 mil pessoas, entra tudo. |
| 37:12 | Só tem 2 caixas, duas instâncias. Mesmo tirando pedidos rápido, fica tudo acumulado esperando. |
| 37:17 | Não adianta contratar mais cozinheiro, porque a cozinha é limitada, e quanto mais cozinheiros tentamos colocar, mais cada cozinheiro demora. |
| 37:25 | E enquanto o pedido não é atendido, a pessoa fica lá pendurada na frente do caixa esperando. |
| 37:30 | E assim, vai acumulando centenas de pessoas na lanchonete esperando, até começarem a |
| 37:35 | perder a paciência e ir embora. São as requisições perdidas ou knockouts. A solução que o Leandro publicou não é intuitiva. |
| 37:43 | Em vez de fazer o nginx aceitar quantas pessoas puder, fazemos diferente: limitamos o tamanho |
| 37:48 | da porta. Digamos, no máximo 1000 pessoas. O NGINX coloca um sistema de senhas do lado de fora e vai deixando entrar só 1000 de |
| 37:56 | cada vez, de forma mais ordenada. É igual num Poupa Tempo ou no seu banco. Pega a senha, senta e espera ser chamado. |
| 38:04 | Agora os caixas atendem menos pessoas de uma vez, mais ordenado, e tiram menos pedidos de uma só vez, digamos, no máximo 50 em vez de 100 ou 200. |
| 38:13 | Esse é o pool de conexões. E na cozinha, em vez de precisarmos de 300 ou 400 cozinheiros, agora precisamos só de |
| 38:20 | 100. Mas aí não vai andar mais devagar? Não, porque sobra mais espaço na cozinha e cada cozinheiro consegue cozinhar mais rápido. |
| 38:28 | É melhor 100 cozinheiros terminando os pratos em 1 minuto ou 400 cozinheiros levando 10 |
| 38:34 | minutos cada porque tão disputando fogão? Entenderam? Eu estava cometendo esse erro também. |
| 38:39 | Tava deixando nginx lá em cima, com portão gigante pra suportar 10 mil conexões e compensando |
| 38:45 | com 200 conexões no pool de cada instância do Rails. E pra piorar ainda estava cometendo um erro no postgres. |
| 38:51 | Eu tinha esta linha no docker-compose: Isso diz pro Docker Compose pegar esse arquivo postgresql.conf do meu diretório local e |
| 39:00 | copiar pra dentro do container de postgres. Mas tava faltando modificar o comando de inicialização pra ter "-c" com o nome desse arquivo. |
| 39:09 | É nesse arquivo que digo pro postgres que ele deve suportar, digamos, um máximo de 400 conexões. |
| 39:15 | Como não tava carregando o arquivo, subia com o limite padrão de 100 conexões. E isso confunde, porque eu pensava que ia conseguir abrir mais de 100, mas não ia. |
| 39:23 | E não sabia porque. Esse foi o primeiro motivo de porque meus resultados tavam lá na casa dos 15 mil inserts: |
| 39:29 | nesse caso faltava cozinheiro e eu achava que tinha suficiente. Falta de atenção que chama isso. |
| 39:35 | Em vez de consertar no lugar certo, eu ficava tentando compensar em outros lugares, como |
| 39:40 | no NGINX. No próximo episódio vou explicar como eu poderia ter evitado essa confusão. Vamos deixar anotado aqui. |
| 39:47 | Depois que descobri isso, e li o tweet do Leandro, reconfigurei o nginx pra faixa de 1000 workers de conexão e depois diminuí o número de cozinheiros no pool de conexões |
| 39:56 | pra uns 40. O problema nem era o máximo de conexões, era a compensação excessiva que tava fazendo |
| 40:02 | no NGINX. Um erro levando a outro erro. À medida que ia diminuindo esses dois números, passava a aumentar a quantidade de inserts |
| 40:10 | no final, a quantidade de pessoas atendidas de fato. Eu tava achando que minha versão de Rails, pelo fato de ter exagerado na solução e |
| 40:18 | enfiado Sidekiq pra jobs, Redis pra fila e cache, ia faltar espaço na cozinha, mas não |
| 40:24 | foi isso, foi questão de gerenciar o fluxo de pessoas. Limitar a porta e os caixas em vez de escancarar. |
| 40:33 | Lembrem-se disso: atendimento não é tentar atender todo mundo de uma só vez, é atender grupos organizados de cada vez. |
| 40:39 | É uma questão de vazão e fluxo. Isso é essencial em operações. Seja atendimento numa lanchonete, seja numa linha de fábrica, seja num servidor web. |
| 40:49 | E foi assim que em 3 de setembro, postei o resultado da minha versão de Rails. |
| 40:55 | Faixa de 39 mil inserts, quase batendo os 40 mil que queria. O cenário que descrevi de gerenciar o fluxo de pessoas na lanchonete é um caso clássico, |
| 41:03 | que demonstra que o problema não é a capacidade de atendimento do caixa, ou de cozinhar dos cozinheiros: é de gerenciar o fluxo de requisições, das pessoas ou sessões. |
| 41:13 | É quando sabemos que o problema principal é gerenciar I/O, entrada e saída. |
| 41:19 | Nós que somos mais experientes já deveríamos ter parado pra pensar nisso primeiro, mas assumimos errado no começo e essa hipótese errada nos fez perder muito tempo. |
| 41:29 | Assumimos que o problema seria a cozinha, o banco de dados. Aí tentamos compensar aumentando número de cozinheiros ou cozinheiros mais rápidos |
| 41:37 | que seriam os caches. Seria o caso se o problema fosse CPU bound, limitação de CPU. |
| 41:43 | Mas na realidade era problema de fluxo, de entrada e saída, no fluxo dos caixas, o problema |
| 41:48 | era I/O bound, como a maioria dos problemas de Web comum. Uma vez controlado o fluxo, podemos otimizar o caixa pra em vez de só tirar o pedido e |
| 41:58 | ficar esperando de braços cruzados esperando; enquanto o cozinheiro tá ocupado, o caixa pode fazer outras coisas na frente, como receber o pagamento, pegar a bandeja, separar o refrigerante, |
| 42:08 | limpar o balcão. Não precisa esperar o prato chegar pra depois fazer tudo isso, dá pra fazer em paralelo. |
| 42:13 | É pra isso que servem threads ou os async/await de várias linguagens, como Javascript no |
| 42:19 | Node.js. Nesse ponto eu já tinha visto o MrPowerGamer e outros colaboradores como o Bruno Borges |
| 42:25 | conseguindo subir Kotlin e Java pro mesmo nível do Rust. Já vi o Leandro e o Lazaro subindo Ruby e Rails pra perto do mesmo nível, faixa dos |
| 42:34 | 40 mil inserts. Eu mesmo já tinha conseguido subir Crystal e Rails. Foi quando minha intuição dizia que a maioria dos participantes, se tivessem conhecimento |
| 42:43 | de tudo que a gente descobriu até agora, seriam capazes de chegar perto desses 40 mil inserts ou até bater o máximo dos 46 mil e quinhentos do Rust do Vinicius. |
| 42:53 | Alguns não gostaram de ouvir isso, porque agora aquele bullying contra o Java ou a fanboyisse |
| 42:58 | de Rust perderiam valor. E como eu detesto dizer uma coisa sem ter provado antes, resolvi fazer a única coisa |
| 43:04 | racional: demonstrar na prática. Ainda era a mesma segunda-feira, 4 de setembro. Escolhi começar aleatoriamente mexendo na versão em Node.js e Express do Lukas Weis |
| 43:15 | que já tava perto do topo, na faixa de 34 mil inserts, em 13o lugar no ranking oficial. |
| 43:21 | Na minha máquina tava dando abaixo disso, uns 27 mil. A versão dele foi uma das que mexi mais. |
| 43:28 | Como foi um código feito pra competição, ele e muitos outros não se preocuparam em seguir boas práticas, clean code, nem nada disso, só cuspiram código até funcionar |
| 43:37 | e publicaram. Não tem absolutamente nada de errado nisso e não considerem esses códigos como representação |
| 43:43 | do que eles conseguem fazer com mais tempo, em projeto de verdade. Isso tem que ser repetido o tempo todo: código pra competição é diferente de código de |
| 43:52 | verdade. Mas como eu estava com tempo e não era pra participar da competição, aproveitei pra desenferrujar meu Javascript e fui refatorar um pouco o código pra ficar mais organizado |
| 44:01 | e mais legível. Meu objetivo era totalmente diferente da rinha: dar uma limpada e otimizar o suficiente pra |
| 44:08 | bater pelo menos a faixa dos 40 mil inserts, o que elevaria o projeto pros Top 5 oficiais. |
| 44:14 | Recomendo que leiam meu pull request com calma, deixei o link na descrição do video abaixo, mas em resumo, depois de organizar o código comecei tirando fora a otimização prematura |
| 44:24 | de usar Redis como cache. Como falei antes, o problema não era a velocidade dos cozinheiros, o postgres. |
| 44:30 | Portanto a solução não era tentar achar cozinheiro mais rápido, um Redis. Com a configuração adequada do fluxo de nginx, do pool por postgres, dividindo CPU |
| 44:39 | e RAM melhor no Docker Compose, já resolvia. Arranquei o Redis fora, daí teria mais recursos pro postgres. |
| 44:46 | Esse cache, além de tudo, não estava sendo efetivo porque o Lucas tentava cachear os resultados do endpoint de pesquisa por termos, só que o stress test manda pesquisas com |
| 44:56 | termos aleatórios, raramente repetidos, então o cache nunca ia ajudar, porque toda pesquisa |
| 45:01 | ia ser nova e não ia ter o resultado no cache. Portanto cache na pesquisa de termos era inútil, só um peso a mais de gravar no cache. |
| 45:10 | Além disso, no endpoint de criar novo registro, ele deixava o banco de dados criar a chave |
| 45:15 | primária, daí recebia de volta no final e só aí gravava no cache. Isso tem que acontecer um atrás do outro, não dá pra ser assíncrono. |
| 45:24 | Adicionar o valor no cache só aumentava o tempo da requisição. Mais uma vez, era um trabalho extra sem benefício. |
| 45:30 | No endpoint seguinte, de pesquisar pessoa direto por ID, ele buscava no cache. |
| 45:35 | Mas a pesquisa por chave primária no postgres é igualmente rápido. De novo, o cache não fazia diferença. |
| 45:42 | Só faria sentido se primeiro gerar a chave primária, com uma biblioteca de UUID na aplicação, |
| 45:47 | e mandar o insert pro banco já com essa ID e em paralelo já mandar gravar no cache também |
| 45:53 | com a mesma ID. Como não precisa esperar o banco devolver uma nova ID, não precisamos esperar pra gravar |
| 45:59 | no cache, entenderam? É uma das vantagens de usar um gerador de chaves primárias externo ao banco. |
| 46:05 | Muito iniciante não sabe que não é obrigatório deixar o banco responsável por IDs. |
| 46:10 | O Lucas também tava devolvendo códigos de erro HTTP junto com mensagens em JSON descrevendo |
| 46:16 | o erro, mas a rinha não se incomodava com isso, então só arranquei fora. O stress test não liga pra mensagem, só quer respostas rápidas. |
| 46:24 | No mundo real, o certo é dar respostas completas, porque sem logs bem descritos depois fica |
| 46:30 | difícil achar bugs e problemas. Novamente, é uma otimização que só serve pra uma competição. |
| 46:35 | O Node.js tem recurso de cluster, subir forks do processo pra escalar melhor. |
| 46:41 | Mesma coisa que Rails também faz. O Lucas parece que experimentou, mas desistiu. Eu ia tirar fora, mas voltei e passei a usar pra tentar distribuir um pouco mais a carga. |
| 46:51 | Ter um reactor com corrotinas assíncronas e conseguir ter concorrência é diferente de ter paralelismo e o ideal é ter as duas coisas. |
| 46:59 | Eu explico isso no video de concorrência e paralelismo e no próximo video talvez eu tente explicar melhor neste contexto. |
| 47:06 | Vamos deixar anotado. A parte que possivelmente pesou mais na versão do Lucas foi o endpoint de pesquisa que faz |
| 47:12 | select LIKE na tabela. Muitos erraram nisso: precisa fazer select LIKE nas colunas apelido, nome e stack, então |
| 47:19 | é apelido LIKE termo OR nome LIKE termo OR stack like termo, e esse é o pior jeito de |
| 47:25 | fazer select. O melhor jeito é pré-criar um único campo com as três colunas concatenados durante |
| 47:32 | o insert. Daí fazer um índice usando GIST com a extensão de trigrams. Alguns tentaram GIN, mas pra este desafio o melhor era GIST. |
| 47:40 | Já tínhamos anotado, mas vou explicar isso no próximo video. A segunda coisa foram as validações. |
| 47:45 | Validar os dados antes de inserir no banco costuma ser mais rápido do que tentar inserir |
| 47:51 | e deixar o banco devolver erro. Por exemplo, que a data de nascimento é inválido, tipo mês 13 ou dia 31 em fevereiro. |
| 47:58 | Podemos só checar se a string tem o formato de ano, tracinho, mês, tracinho dia, no mínimo. |
| 48:04 | Ou tentar converter essa string num objeto válido de data pra garantir. Eu não medi exatamente esse ponto, mas o Lucas usou a biblioteca moment.js, que antigamente |
| 48:13 | já foi bem popular mas acho que é considerada meio obsoleta. O jeito mais popular hoje é usar outra biblioteca, a date-fns ou simplesmente usar o construtor |
| 48:23 | da classe Date do Javascript nativo. Eu comecei tentando usar o date-fns mas achei mais fácil só checar se o parse da string |
| 48:31 | pra um new Date is not a number (isNaN). Com todas essas mexidas fui mexer no Docker Compose. |
| 48:36 | Ele tava subindo 3 instâncias de Node no Docker, mas como reativei o código de Node |
| 48:41 | Cluster, desci pra 2, cada uma com 1 fork extra, totalizando 4 processos. |
| 48:46 | Diminuindo a carga do código de cache, que não tava servindo pra nada. Melhorando as pesquisas por termo. |
| 48:52 | Diminuindo a carga do código de validação. Ou seja, fazendo nossos caixas trabalhar menos, em seguida era o problema de diminuir a montanha |
| 49:00 | de gente que o nginx tava deixando entrar tudo de uma só vez. Diminuí a quantidade de workers do nginx dos absurdos 20 mil, pra 10 mil até 1024. |
| 49:10 | Notei que uns 1000 é ideal pra maioria das aplicações. Muitos até menos. Fazendo isso os caixas trabalham de forma mais organizada e eficiente, precisando de |
| 49:19 | menos cozinheiros, menos conexões de banco no pool. O Lucas tinha configurado com 200, mas agora dava pra descer pra uns 45, talvez até menos. |
| 49:28 | E fazendo tudo isso, essa versão de Node.js saiu da faixa de 27 mil inserts, na minha |
| 49:34 | máquina, ou 34 mil que conseguiu na máquina dos organizadores da rinha, e pulou pra faixa |
| 49:39 | dos 40 mil também. Do meu ponto de vista, foi uma mudança significativa. E cimentou na minha cabeça que dava pra fazer a mesma coisa pra outras versões. |
| 49:49 | Desculpas ao Lucas por ter pego ele pra Judas, mas não entendam errado. Vários outros, incluindo eu mesmo, cometemos os mesmos erros. |
| 49:56 | Só aproveitei pra explicar mais na versão dele pra não me repetir em todos os próximos. Enfim, ainda no dia 4 de setembro, depois de atingir os 40 mil inserts com o Node.js, |
| 50:06 | resolvi mexer em outro velho conhecido, Elixir. Na minha cabeça não fazia sentido Elixir ter se saído abaixo dos Top 10. |
| 50:14 | Mas eu fiquei surpreso com um problema: essa versão do Gabriel Oliveira se recusava a carregar na minha máquina! |
| 50:20 | Como chegou a figurar no ranking oficial, significa que o Zan conseguiu rodar pra avaliar. |
| 50:25 | Portanto, se a versão é a mesma (e tem que ser, é a mesma imagem de Docker), por exclusão, tem que ser alguma coisa na minha máquina. |
| 50:31 | Mas toda vez que eu tentava subir o Docker Compose, via as instâncias da app crasheando sem nenhuma mensagem de erro, simplesmente morriam. |
| 50:39 | Puf, zero, nada. Sem entender o motivo, fiz um teste: mudei o comando do docker compose pra só subir |
| 50:45 | um "sleep infinity" do Linux. Todo mundo conhece o conceito de sleep, certo? |
| 50:51 | Pausa o processamento pelo tempo que mandar. Linux suporta infinity, daí fica pausado pra sempre, como um loop infinito, while true |
| 50:58 | da vida. Fazendo isso o container fica de pé pra eu poder fuçar. Daí é possível usar o comando docker-compose exec pra abrir um bash dentro do container. |
| 51:07 | De dentro, tentei executar o binário do app na mão, e de fato, crasheava. Achei isso muito estranho, aí me ocorreu, será que o app é muito pesado? |
| 51:16 | Vou tentar carregar o iex que é só a linha de comando do REPL do Elixir, sem carregar nada da aplicação. |
| 51:22 | E crasheava também. Estranhíssimo. Vamos pular o Elixir e carregar direto só o Erlang, o comando "erl". |
| 51:27 | E crasheava! Bizarro! A sensação que eu fiquei é que os programas pediam mais recurso do que a máquina conseguia |
| 51:34 | entregar e crasheavam, como falta de RAM. Resolvi editar o arquivo de docker compose pra tirar a limitação da rinha de CPU e |
| 51:42 | RAM. Tentando rodar de novo, aí subia! Por alguma razão tava faltando RAM. Abri o HTOP pra ver quanto de RAM tava usando e era um absurdo, coisa de quase 1 gigabyte |
| 51:51 | e meio! Fiquei bem confuso. Como fazia tempo que não mexia com Elixir fiquei pensando, "ué, será que nos últimos |
| 51:57 | anos eles enfiaram tanta coisa no Elixir que agora precisa de mais memória que uma JVM do Java?". |
| 52:03 | É confuso porque quem já mexeu com web de Java, com Spring e tudo, sabe que 1GB de RAM não é fora do comum. |
| 52:09 | Mas não esperava isso do Elixir. Eu tava quase jogando a toalha, então resolvi reportar no meu Twitter. |
| 52:15 | Todo mundo achou estranho, mas o próprio Gabriel conseguiu achar a resposta, era o limite máximo de porta que o Erlang detectava no meu sistema. |
| 52:23 | Em Erlang e portanto também em Elixir, portas são usadas pra se conectar com o mundo externo. |
| 52:28 | Por exemplo, pra ler do standard input, STDIN, ou escrever no standard output, STDOUT, são |
| 52:34 | portas. Pra abrir arquivos, pra receber conexões de rede, são portas. |
| 52:39 | Erlang pré-aloca no mínimo 1024 portas. Pra determinar o máximo, podemos abrir o shell "erl" e rodar o comando `erlang:system_info(port_limit).` |
| 52:48 | E olha só: meu sistema devolve mais de 1 milhão de portas. Daí tem o detalhe que ainda não entendi: na aplicação em Elixir parece que tenta |
| 52:56 | pré-alocar esse máximo sei lá porque, em vez de ir só alocando se precisar. |
| 53:01 | Daí dá mais de 1 gigabyte de RAM. E se limito dentro das restrições da rinha, iria faltar memória no container, crasheando |
| 53:08 | na inicialização. Felizmente, com uma simples variável de ambiente `ERL_MAX_PORTS`, podemos colocar um número |
| 53:15 | mais sano, tipo 2048 ou algo assim. Limitando de 1 milhão pra 2 mil, fez uma puta diferença, agora o app sobe, consumindo |
| 53:24 | na faixa de 160 megabytes por instância, que é bem mais razoável e próximo até de versões como Rails ou Node. |
| 53:30 | Isso é um problema que só aconteceu no meu sistema porque a configuração de Arch Linux |
| 53:36 | é mais agressiva nos limites do que um Debian ou Ubuntu, que são mais conservadores. Sendo mais específico, isso é limite de file descriptors, ulimit do sistema, depois |
| 53:45 | pesquisem sobre isso. De qualquer forma, a versão Elixir do Gabriel eu gostei bastante porque usou características |
| 53:51 | exclusivas de Elixir. Ele fez as duas instâncias rodando em containers diferentes se conectarem num cluster. |
| 53:58 | Clusters saem de graça em Erlang, porque a máquina virtual já trás toda a infraestrutura pronta. |
| 54:04 | É fácil de usar. Não serve pra tudo, mas quando precisa é bem útil. Lembram como falei que não valia a pena usar um cache como Redis, primeiro porque o postgres |
| 54:13 | já era rápido o suficiente, mas também porque subir um container de Redis significa dar menos recursos pro postgres? |
| 54:19 | Com o recurso de cluster do Erlang, dá pra ter um cache compartilhado entre as duas instâncias, |
| 54:25 | sem precisar de um Redis entre os dois. O app em Elixir consegue consultar na memória da primeira instância, e a segunda instância |
| 54:33 | no outro container, consegue pedir pra primeira instância porque estão no mesmo cluster. |
| 54:38 | Assim não precisam de uma memória externa na forma de um Redis da vida. À primeira vista isso parece mais esperto, mas como já disse antes, o problema não |
| 54:46 | é o postgres, e adicionar um sistema de cache só adiciona peso desnecessário. |
| 54:51 | Mesmo assim esta versão, ajustando só nginx e o pool de conexões, consegue passar dos |
| 54:57 | 41 mil inserts e entra nos Top 5. Mas tem um porém, além do cache, as instâncias faziam chamadas RPC entre eles, ou seja a |
| 55:06 | 1a instância podia pedir pra 2a instância gravar ou pesquisar no banco e vice versa. |
| 55:11 | Isso eu achei desnecessário e adiciona uma comunicação externa via rede pra toda chamada. |
| 55:16 | Eu não tive tempo de testar, acho que se arrancar fora essas chamadas remotas, o código de cache e dar mais recursos pro postgres, talvez seja possível conseguir um resultado |
| 55:26 | melhor. Mesmo assim eu esperava que Elixir conseguisse um número maior. De todas as versões que eu mexi, essa ainda foi a que performou um pouco pior. |
| 55:34 | Então tem espaço pra simplificar mais o código. Elixir certamente consegue mais. Estão notando o padrão: em vez de adicionar coisa, estou tirando coisas e com isso deixando |
| 55:44 | mais rápido. Por isso sempre repetimos tanto que otimização prematura é a raíz de todo o mal. |
| 55:51 | Com a versão Elixir do Gabriel batendo acima dos 40 mil inserts, resolvi procurar uma versão |
| 55:56 | em Go Lang. E escolhi um dos que ficou mais embaixo no ranking. A do Luan ficou em 23o lugar com só 21 mil inserts. |
| 56:04 | Assim como Elixir, não tem porque Go ficar lá embaixo e isso já se provou porque pelo |
| 56:09 | menos 3 versões tinham alcançado os Top 10. Fiz pequenos ajustes no docker compose, pra dar um pouco menos de CPU pras instâncias |
| 56:19 | de app, assumindo que Go sem nenhum framework iria precisar de menos recursos que Elixir. |
| 56:25 | Daí podemos aumentar CPU do postgres. Teve duas modificações de código que quis mexer. Primeiro, fazer erros devolverem só os códigos de erro 400 ou 422 de HTTP sem mensagens de |
| 56:35 | erro. É pouca coisa mas já faz um pouco de diferença. A segunda coisa é que ele tava usando Regular Expressions pra validar o formato da data |
| 56:43 | de nascimento. Na real, acho que isso é meio besteira, mas como Regex costuma ser mais lento do que dar |
| 56:49 | split na string e checar cada componente, troquei também. Acho que nenhuma dessas duas coisas faz muita diferença no final. |
| 56:55 | O que deu diferença sim foi o que já falei antes. Primeiro, diminuir o tamanho da porta de entrada: diminuir os 10 mil workers de nginx pra 1024. |
| 57:04 | E aumentar o pool de conexões, embora isso também nem tenha sido necessário. Só de limitar e controlar o fluxo de entrada de requisições, literalmente uma linha, |
| 57:14 | já disparou o resultado da faixa de 29 mil inserts pra 34 mil. Não chegou nos 40 mil que eu queria, mas por hora resolvi subir meu pull request, que |
| 57:22 | também tem link na descrição abaixo, e pular pra outra coisa. Só pra terminar esse dia 4 de setembro, fui dar uma fuçada na tal versão em dotnet do |
| 57:30 | André e Albert que alcançaram terceiro lugar. Como muitos outros, eles também optaram por fazer uma versão codificada de forma rápida, |
| 57:38 | sem muitas boas práticas, então ficou bem verbose, tudo super longo. A curiosidade é que como muitos, também optaram por implementar um cache, mas diferente |
| 57:48 | da maioria, em vez de Redis escolheram usar Nats. Nats deveria ser mais usado, e parece que povo de Dotnet usa mais. |
| 57:55 | É uma alternativa até mais confiável do que Redis pras funções de cache ou como uma fila de jobs simples. |
| 58:01 | Em cima do nats, usaram os recursos de async do C# com channels pra fazer a implementação |
| 58:07 | de bulk insert. E com isso conseguiram atingir quase o máximo, 44 mil inserts. |
| 58:12 | Esta versão não mexi em nada, só fucei e tweetei a respeito. No dia seguinte, dia 5 de setembro, me sugeriram fuçar alguma versão de PHP então puxei |
| 58:21 | pra rodar a versão do Lauro Appelt que ficou em 17o lugar no ranking, com meros 25 mil |
| 58:27 | inserts. Fazia muitos anos que não mexia com PHP, então precisei da ajuda dos universitários. Pacotes de PHP hoje em dia se instalam com Composer, que é parecido com NPM de Javascript |
| 58:37 | ou Cargo de Rust. Foram-se os dias de baixar zip de sites como Freshmeat ou SourceForge. |
| 58:43 | Mas PHP ainda tem o conceito de extensions, que como o nome diz, carrega junto com o PHP |
| 58:50 | em si, e modificam as estruturas internas da linguagem. Antigamente lembro de usar PEAR que eram as extensions em C, mas hoje parece que são |
| 58:58 | PECL. Nesse estágio precisava carregar essa nova extension chamada Swoole, que adiciona funcionalidades |
| 59:05 | de corrotinas e modelo de I/O não-bloqueante, o que transforma o PHP em algo parecido com |
| 59:11 | Node.js. Basta baixar, compilar e instalar a extension e editar o php.ini pra carregar ela na inicialização. |
| 59:19 | Depois de bater cabeça pra entender isso e instalar os pacotes, pude rodar essa versão do Lauro, que ele implementou com o framework Hyperf. |
| 59:26 | PHP 7 tem uma sintaxe bem mais moderna do que o antigo PHP 3 que eu usava, mais de 20 |
| 59:32 | anos atrás. Mudou bastante coisa, tá bem mais legível, bem mais organizado. E o Lauro foi um dos poucos que deu uma caprichada e deixou tudo fácil de entender e legível. |
| 59:41 | Recomendo darem uma olhada. Nessa versão também não mexi em nada no código, só parei pra entender, desenferrujar |
| 59:48 | um pouco do meu PHP. A única coisa que ajustei foi o pool de conexões. Aqui, ao contrário da maioria, o Lauro foi super conservador e limitou o pool de conexões |
| 59:58 | com 10 conexões, muito pouco. Resolvi soltar tudo e jogar lá pra cima, em 500, que é exagerado. |
| 1:00:04 | Mas fazendo isso e rodando o stress test, essa versão também subiu pra quase 40 mil inserts, o que também o colocaria lá pelos Top 5. |
| 1:00:12 | Por causa disso já me dei por satisfeito por enquanto, já que queria pular pra ver outras versões. |
| 1:00:17 | Nesse dia não mexi em muita coisa. Dei uma pausa e a noite resolvi que ia mexer mais no dia seguinte, mas acabei não conseguindo |
| 1:00:24 | dormir. Levantei e voltei pro PC. Queria mexer em pelo menos mais uma versão, a de Python. |
| 1:00:29 | Escolhi o 21o lugar do Ian Cambrea, com menos de 24 mil inserts. Ele não fez em Django, que seria o mais comum pra web em geral, nem em FastAPI que parece |
| 1:00:39 | ser o mais comum pra APIs. Ele escolheu Sanic, que é um framework que eu não conhecia. A única modificação significativa que eu fiz foi notar que ele também resolveu usar |
| 1:00:47 | Redis pra cache, mas não implementou um pool de conexões pro Redis. Tava usando uma única conexão pra tudo. |
| 1:00:54 | Não consigo afirmar que era só isso, mas testando na minha máquina como os outros, o resultado bateu nos 40 mil inserts também. |
| 1:01:02 | De curiosidade, essa foi a única versão que eu vi que usou NGINX diferente. Normalmente a gente configura NGINX pra fazer balanceamento de carga usando protocolo HTTP, |
| 1:01:12 | portanto usando rede TCP por baixo, fazendo proxy reverso pra outro servidor web HTTP |
| 1:01:17 | atrás, no caso o Sanic. Mas NGINX, e outros serviços que rodam em Linux, como o próprio Postgres, que também |
| 1:01:25 | costumamos conectar via TCP na porta 5432, suportam conexões usando UNIX Sockets. |
| 1:01:32 | Se tudo for rodar na mesma máquina, que não é comum no mundo real, não tem necessidade |
| 1:01:37 | de usar rede TCP/IP. Tá tudo na mesma máquina. Podemos fazer um processo se comunicar diretamente com outro processo usando IPC ou inter-process |
| 1:01:46 | communication, e um dos jeitos de fazer isso é via UNIX Sockets. De forma resumida, sabe quando fazemos tipo um cat num arquivo, adicionamos um Pipe, e |
| 1:01:56 | rodamos um grep do outro lado pra filtrar o conteúdo do arquivo? Isso é um jeito do processo grep se comunicar com o processo cat via esse pipe que liga |
| 1:02:05 | o stdout do cat ao stdin do grep. É mais ou menos isso que acontece com o NGINX usando unix sockets pra falar com as instâncias |
| 1:02:13 | de Sanic. Basta todos enxergarem os mesmos arquivos .sock. Depois dêem uma olhada no repositório do Ian pra ver como ele fez. |
| 1:02:21 | Como a versão de Python também foi fácil e não exigiu nenhum trabalho meu além de ajustes triviais, fui dormir e no dia seguinte resolvi olhar pro topo da lista de novo. |
| 1:02:31 | Fiquei curioso com isso de Lean4 que a Sofia e a Gabi usaram e alcançaram o Top 4 do ranking. |
| 1:02:38 | Nunca tinha ouvido falar nessa linguagem, mas o que vi foi impressionante. Lean4 é uma linguagem experimental ainda, longe de ser 1.0, criada na Microsoft Research |
| 1:02:47 | pelo brasileiro Leonardo de Moura em 2013. O objetivo dele foi criar uma linguagem pra ser fácil criar provas de teoremas. |
| 1:02:55 | É uma linguagem mais focada em formalidades matemáticas, inspirada em linguagens funcionais |
| 1:03:00 | como Haskell ou OCaML. Ele tem um cheiro de dialeto de linguagem da família ML. |
| 1:03:05 | Se curte linguagens funcionais e formalidade matemática, essa pode ser uma boa alternativa. |
| 1:03:11 | Mais impressionante foi a dupla Algebraic, as autoras do projeto da rinha, a Sofia que |
| 1:03:16 | tem só 21 anos e a Gabi que tem só 17 ou 18 anos. Como falei desde o começo, implementar esses endpoints de API, em si, não é nenhum desafio. |
| 1:03:26 | Mas neste caso foi. Lean4 é experimental, comunidade pequena, e quase nada pra Web, porque nunca foi o foco. |
| 1:03:33 | Ela é quase toda focada em teoremas matemáticos e não criar APIs pra Web. Pra fazer APIs, elas precisavam de um parser de JSON, já que na regra da rinha, o stress |
| 1:03:43 | test ia mandar milhares de requisições com JSON. Mas não tinha uma biblioteca de JSON, então a Sofia fez um do zero. |
| 1:03:50 | Quando se recebe as requisições HTTP, algumas contendo esses JSON, precisa conseguir parsear |
| 1:03:55 | o pacote. Existe já parser de HTTP em C, que todo mundo usa em várias linguagens, mas pra Lean4 não |
| 1:04:02 | tinha. Então a sofia fez um wrapper em FFI pra integrar. Pra implementar a aplicação em si, ela queria usar algum framework web, como em Node você |
| 1:04:10 | tem Express ou em Java tem Spring. Mas em Lean4 não tinha, então a Sofia fez um pequeno do zero. |
| 1:04:17 | Além disso, pra rodar uma aplicação web, duh, precisa de um servidor Web. |
| 1:04:22 | Sabe? Tipo Node.js, tipo um web2py, ou um Tomcat. E claro, também não tinha. |
| 1:04:28 | E claro, a Sofia fez um. Ou seja, esse foi aquele caso de "não sabendo que era impossível, foi lá e fez". |
| 1:04:34 | Só esse esforço já merece uma menção honrosa, porque eu acho que ninguém teve metade do trabalho que elas tiveram. |
| 1:04:41 | Mais foda ainda porque essa versão foi uma das mais performáticas. Também é igualmente impressionante que uma linguagem desconhecida, experimental e que |
| 1:04:49 | provavelmente ninguém nunca usou pra web, seja tão performática. O criador, Leonardo, focou em fazer uma linguagem com objetivo de provar teoremas e verificação |
| 1:04:58 | formal em vez de performance bruta. Mesmo assim foi bem sucedido em performance. |
| 1:05:03 | Não deixem de olhar o código da rinha no repositório da Gabi, além das bibliotecas no repositório da Sofia. |
| 1:05:09 | Links abaixo. No video de análise do MrPowerGamerBR, onde ele descobriu os limites do stress test e |
| 1:05:15 | das regras da rinha, também conseguiu identificar que algumas das versões nos Top 10 tinham |
| 1:05:20 | bugs, como de validação, que acabaram deixando passar inserts que não deveriam, em particular |
| 1:05:26 | por falta de validação de data. Essa versão em Lean4 tinha esse tipo de bug. Elas esqueceram de colocar validação da data de nascimento. |
| 1:05:35 | Tudo bem, mesmo com a validação, a versão delas ainda ia ficar entre os Top 10, por pouco. |
| 1:05:40 | Então aproveitei pra tentar molhar meus dedos em Lean4 pela primeira vez e implementei uma validação simples. |
| 1:05:46 | Foi o código menos intuitivo que eu fiz em muito tempo. Acredito que quem for mais experiente em linguagens como Haskell ou F# devem conseguir entender |
| 1:05:53 | mais fácil. Tinha outro pequeno bugzinho na hora de gerar a URL pro cabeçalho de Location depois de |
| 1:05:59 | inserir o registro no banco, então corrigi isso também. De qualquer forma, vejam o link dos meus pull requests na seção de links abaixo. |
| 1:06:07 | No fim desse dia postei um tweet de resumo até este momento com tudo que descobri. Neste estágio da minha saga, já tinha conseguido fazer minha própria versão de Rails e de |
| 1:06:17 | Crystal bater os 40 mil inserts, ajustei a versão em Node do Lucas, Elixir do Gabriel, Go do Luan, PHP do Lauro, Python do Ian, além dos ajustes no Lean da Sofia e Gabi. |
| 1:06:28 | Chegamos no dia 6 de setembro, véspera de feriado prolongado de Independência e que eu tinha planejado viajar... |
| 1:06:34 | Depois de ter batido cabeça com Lean4, resolvi que queria bater cabeça com outra linguagem |
| 1:06:39 | que nunca mexi antes. Tentei fuçar Zig, mas achei que tava experimental demais, o ferramental super instável, na |
| 1:06:46 | verdade, tudo instável. Coisas da versão 0.10.0 quebram na 0.12.0. Pra uma experiência de um dia só, não ia compensar. |
| 1:06:53 | Eu acho que é uma das linguagens mais promissoras, tanto que foi usada pra fazer o novo Bun, |
| 1:06:58 | mas vou deixar pra outra ocasião. Então lembrei que sempre quis tentar a linguagem Nim, outra que é compilada como Go, tem uma |
| 1:07:05 | sintaxe inspirada em Python, existe já faz alguns anos então assumi que seria mais estável e melhor documentada do que Zig. |
| 1:07:13 | Provavelmente fácil de chegar numa boa performance, assim como consegui com Crystal. Ledo engano. |
| 1:07:18 | Apanhei bastante, a começar pela falta de documentação. Não ajudou nada que a biblioteca assíncrona pra Postgres se chama asyncpg, que é o mesmo |
| 1:07:28 | nome da de Python. Quando pesquisa no Google, adivinha quem aparece primeiro? Pra piorar, a linguagem e suas bibliotecas usam e abusam de macros, que modificam a sintaxe |
| 1:07:38 | da linguagem. Sem ter uma boa experiência, foi confuso diferenciar o que era da linguagem e o que |
| 1:07:44 | eram macros. As mensagens de erro do compilador confundiam mais do que ajudavam. Reclamações de amador, claro, não estou dizendo que é um defeito, mas é uma curva |
| 1:07:53 | de aprendizado maior pra iniciantes. Recursos de corrotinas, tipos como Option, pareciam ainda meio experimentais, com hacks |
| 1:08:01 | pra funcionar certas sintaxes. Escolhi o framework web Jesper ,que parece um Sinatra de Ruby. |
| 1:08:08 | Apanhei um bocado mas consegui implementar os 4 endpoints numa manhã. Só que contrário às minhas expectativas, o resultado foi pífio, uma verdadeira droga |
| 1:08:18 | mesmo. Já tentei compilar com opção speed, nada. Já tentei compilar com modo multithread, nada. |
| 1:08:25 | Suspeito que a biblioteca de async pool que estou usando é imatura e vaza conexões. Depois preciso investigar isso melhor. |
| 1:08:32 | Mesmo aumentando pool pra 100 ou mais, nem chega até o fim do stress test, abre o bico muito antes. |
| 1:08:38 | Male male insere 2000 inserts. Isso deixaria esta versão lá no fim do ranking oficial, só ganhando da versão de brincadeira |
| 1:08:45 | feita em Bash do Leandro. A probabilidade maior é que eu, sendo amador, posso ter feito erros de iniciantes e por |
| 1:08:52 | isso foi ruim. Mas na maioria das linguagens mais maduras, um iniciante teria dificuldade de deixar tão |
| 1:08:58 | lento assim, mesmo se fosse num Javascript. Se tiver alguém assistindo que tem experiência com Nim, não deixe de dar uma olhada no meu |
| 1:09:05 | pull request linkado abaixo pra ver se descobre o problema, mas no estado que tá agora, eu não recomendaria usar Nim pra uma aplicação web, mesmo se fosse bem simples. |
| 1:09:13 | Se for pra usar uma linguagem imatura com bibliotecas instáveis e mau testadas, é melhor ir direto pra Zig ou V Lang que são mais modernas. |
| 1:09:22 | Apesar dessa tentativa frustrada, outros desenvolvedores acompanhando minha saga começaram a se mexer |
| 1:09:27 | pra fazer versões melhores. Por exemplo, nesse mesmo dia vi o Junior Leão mostrando uma outra versão em Java com Spring |
| 1:09:34 | Boot, usando Redis pra cache com JDBC direto e também conseguiu alcançar os 40 mil inserts. |
| 1:09:41 | Outra tentativa bem sucedida foi do Carlos Silva, conhecido como Insalubre, que tinha participado com uma versão em V Lang, mas tinha algum problema e ele foi desclassificado, |
| 1:09:51 | então nem entrou no ranking oficial. V Lang é uma nova linguagem com cara de Go. Ele se inspirou nas discussões de técnicas que ficamos fazendo no Twitter, consertou |
| 1:09:59 | a versão dele, e atingiu os 46 mil inserts. O Leandro continuou mexendo na sua versão de Ruby e neste dia reportou que conseguiu |
| 1:10:08 | bater os 46 mil inserts. Ele foi quem mais testou a hipótese de diminuir a porta de entrada do NGINX e controlar a |
| 1:10:16 | vazão de requisições. Com só 256 workers do NGINX e 30 conexões totais de Postgres no pool, conseguiu alcançar |
| 1:10:24 | os 46 mil inserts, demonstrando que nem o nginx e nem o postgres nunca foram os gargalos |
| 1:10:30 | desta rinha. Veja o fio do tweet dele nos links abaixo pra mais detalhes. No fim do dia resumi num tweet todas as técnicas que descobrimos até agora. |
| 1:10:39 | Por exemplo, validação pode consumir tempo precioso, quanto mais otimizar, melhor. |
| 1:10:45 | Não precisa devolver mensagens de erro elaboradas, muito menos em JSON, só o cabeçalho HTTP |
| 1:10:50 | com o código de erro tá otimo e vai ser mais rápido. O postgres não é o gargalo, não com essa quantidade mixuruca de dados. 50 mil inserts |
| 1:10:59 | não é nem um peido. Por isso não precisa tentar otimizar prematuramente com Redis pra cache. |
| 1:11:05 | Linguagens que escalam com threads ou forks precisam de mais conexões com o banco. |
| 1:11:10 | Um exclusivo pra cada thread. Então tem que dar um pouco mais de RAM pro banco subir essas conexões extras. |
| 1:11:17 | Cada conexão de Postgres custa caro, uns 2 a 3 megabytes, porque são forks. |
| 1:11:22 | Então 100 conexões exigem no mínimo 300 megabytes. E ainda tem que sobrar RAM pra processar as queries. |
| 1:11:28 | Ou seja, menos de 500 megabytes é inviável. Linguagens com suporte a fibers exigem um pouco menos conexões, porque compartilham |
| 1:11:36 | a mesma conexão na mesma thread. De novo, tá anotado já pra eu explicar isso no próximo episódio. |
| 1:11:42 | Uma coisa que eu e o MrPowerGamerBR vimos na implementação vencedora em Rust do Vinicius |
| 1:11:48 | Fonseca, é que ele entendeu mas nem todo mundo pensou na forma correta de lidar com searches fuzzy do Postgres. |
| 1:11:55 | Também já anotamos pra eu explicar no próximo episódio. O Vinicius fez certinho. Ao tornar o search mais eficiente, sobra mais CPU pro postgres conseguir lidar com os inserts. |
| 1:12:04 | E por fim, o mais importante, é lembrar do conceito de controlar a vazão na entrada, |
| 1:12:10 | diminuindo quantidade de workers de NGINX. Esse nunca foi o gargalo, com meio CPU e quase nada de RAM, aguenta todas as requisições |
| 1:12:18 | do stress test sem reclamar. Alguns não gostam de NGINX porque algo usando FastHTTP de Go é muito mais eficiente, mas |
| 1:12:26 | nesta rinha o NGINX nem chega perto de ser gargalo. Colocando 0.15 CPU e uns 200 megabytes pro NGINX, perto de 0.75 CPU e pelo menos 1.2 |
| 1:12:37 | GB de RAM pro Postgres, daria pra colocar um pool exagerado de mais de 200 conexões, |
| 1:12:43 | embora os 100 padrão no total seja suficiente pra maioria. O que sobrar, dá pra dividir com sua aplicação, ou seja, 0.3 CPU e até 0.8 GB de RAM pra |
| 1:12:52 | cada instância. Depende se sua aplicação for mais pesada que isso, como as versões em Java ou Rails |
| 1:12:58 | ou mesmo Node, aí precisa ir tirando e testando de 0.05 em 0.05 do postgres, dando pra aplicação |
| 1:13:04 | e medindo pra ver os limites. E chegamos no feriadão de 7 de setembro. Apesar de eu estar coçando pra investigar mais códigos da rinha, tive que parar por |
| 1:13:13 | alguns dias. Eu corri pra tentar desvendar tudo antes do feriado, e apesar de ter conseguido ajustar |
| 1:13:19 | várias versões pra chegar nos 40 mil inserts, ainda tava coçando a cabeça com o elusivo |
| 1:13:24 | máximo de 46 mil. Tinha algumas suspeitas pra testar quando voltasse, mas fui viajar com essa pulga atrás |
| 1:13:31 | da orelha ainda. Já tinha planejado de levar minha namorada pra conhecer Gramado, no Rio Grande do Sul. |
| 1:13:37 | Nos divertimos bastante apesar de estar super cheio e com tempo meio duvidoso. Visitamos diversas atrações, como a Super Carros, onde pude fazer test driver de Ferrari |
| 1:13:46 | e Nissam GT-R! Mas, este video não é de turismo. Quem me acompanhou no Instagram viu as stories em tempo real. |
| 1:13:53 | Se não acompanhou e ficou curioso, deixei um destaque lá. Procurem o link na descrição abaixo. |
| 1:13:59 | Mesmo durante o feriado, vários desenvolvedores continuaram empenhados em desvendar os mistérios |
| 1:14:04 | da Rinha e na sexta feira, dia 8 de setembro, outro dos participantes, o Vinicius Ferraz, |
| 1:14:10 | fez umaa descoberta muito importante. Ele twitou assim: "você que participou da rinha, tomou um j.i.IOException: Premature |
| 1:14:18 | Close? Tunou o banco, sua app, o nginx e não conseguiu resolver 100%? |
| 1:14:23 | Sabe onde poderia estar o problema? Na rede do docker. Como resolver? network_mode: host em todos os serviços. |
| 1:14:31 | Caraca!!! Nas primeiras versões que mexi, na minha em Rails, em Crystal, a de Node, onde gastei |
| 1:14:36 | mais horas, chegava perto dos 40 mil, 39 mil, o comportamento ficava estranho. |
| 1:14:42 | Olhando no gráfico não tinha muita explicação. Ficava esse tremido esquisito no fim do gráfico, como se estivesse tentando ultrapassar um |
| 1:14:49 | teto invisível. Mesmo nas versões vencedoras, como o Rust do Vinicius, dava pra ver um tremido menor |
| 1:14:55 | no fim. Mas ele conseguia ir aguentar até o fim. Independente da versão, mais cedo ou mais tarde, aparecia isso. |
| 1:15:02 | Eram requisições que começavam a se perder! Não perdia tudo nos inserts, mas principalmente nas pesquisas por termo, até em pesquisas |
| 1:15:10 | inválidas, o que era mais absurdo, já que só checa se o parâmetro de termo não existe e devolve cabeçalho de erro. |
| 1:15:16 | Esse endpoint nunca tinha que dar knockout, porque não processa nada. Como teve aquele caso do Elixir do Gabriel, que descobrimos que meu sistema Manjaro baseado |
| 1:15:23 | em ArchLinux tem ulimit maior e por isso afetava o uso de memória do Erlang, imaginei que |
| 1:15:29 | tinha alguma coisa na minha infra que também pudesse estar afetando isso. Cheguei a suspeitar do Podman, que eu estava usando no lugar do Docker. |
| 1:15:36 | Mas não deu tempo pra investigar isso porque chegou o feriadão e fui obrigado a parar. E era mesmo no Docker, e o mesmo problema acontece no Podman. |
| 1:15:44 | Explicando. Quando subimos container de Docker, não é uma máquina virtual. Eu expliquei isso em detalhes no meu video de Docker, então assistam lá depois. |
| 1:15:52 | O processo roda nativo no sistema operacional host. Só que a infra do RunC de Linux, que é a base do Docker e do Podman, nos dá opção |
| 1:16:01 | de enganar o processo rodando. Uma dessas formas é quando mapeamos volumes. Dizemos que um diretório dentro do container na verdade mapeia pra outro diretório do |
| 1:16:09 | lado de fora, no host. O mesmo vale pra rede. Digamos que eu queira subir vários postgres na mesma máquina. |
| 1:16:16 | Não ia conseguir, porque o primeiro ia subir e dar bind na porta 5432. O segundo ia tentar dar bind na mesma porta, mas como já tá ocupado, ia falhar. |
| 1:16:26 | Com containers, cada processo consegue dar bind na porta 5432 de uma rede falsa, virtual. |
| 1:16:32 | Ele acha que tá sozinho na máquina. Daí podemos mapear a porta interna do container pra uma porta na rede de verdade do lado de |
| 1:16:40 | fora. Pra isso precisamos de uma ponte de rede, um "bridge", que é o modo de rede ou network |
| 1:16:45 | mode padrão. Mas podemos escolher fazer bind direto na porta da rede de verdade, do host. |
| 1:16:53 | É isso que o Vinicius sugeriu: network_mode: host. Ao não usar o modo ponte, estamos retirando o gargalo da tradução de tráfego da rede |
| 1:17:00 | virtual pra rede de verdade. Isso custa recursos, é mais pesado. Não existe almoço grátis. |
| 1:17:07 | Tudo custa alguma coisa. O que a gente não sabia é que era pesado a ponto de afetar esse stress test. |
| 1:17:13 | Sem querer, esse era o elo perdido da rinha, a última peça que faltava. |
| 1:17:18 | E só pra me deixar ainda mais ansioso pra voltar do feriadão, no domingo dia 10 o desenvolvedor |
| 1:17:23 | Reinaldo resolveu fazer uma versão nova em Java usando Quarkus, Reactive e VertX seguindo |
| 1:17:29 | as dicas do Bruno Borges e Vinicius Ferraz. Depois vejam o repositório dele, o usuário é zsantana. |
| 1:17:35 | Ele twitou como conseguiu uma versão que atingia mais de 51 mil inserts. |
| 1:17:40 | Mas já falamos que o máximo é 46 mil e quinhentos, portanto certamente esta versão |
| 1:17:46 | tem bug de validações, como eu demonstrei na versão em Lean4 da Sofia. Mais importante, esta versão em Java atingia um critério que a rinha não media mas que |
| 1:17:55 | pra mim era importante e eu passei os últimos dias tentando entender porque ninguém atingia: |
| 1:18:00 | Zero Knockouts. Não perder nenhuma requisição. Esse é o ponto onde vencemos o stress test. |
| 1:18:07 | Entenderam? Até este momento a noção era que o stress test era tão pesado que nenhuma aplicação |
| 1:18:13 | conseguia segurar tudo e eventualmente ia perder algumas requisições. Alguns mais, alguns menos. |
| 1:18:19 | Isso é comum em testes de carga. Mas assim como nginx e postgres nunca foram o gargalo, a carga também nunca foi tão |
| 1:18:25 | pesada assim. Quando o Zan foi testar os participantes pra encontrar os finalistas, o teste era ainda |
| 1:18:31 | mais leve. Ele dobrou o teste, senão todo mundo ia passar. Mas mesmo dobrando, ainda não é pesado o suficiente. |
| 1:18:39 | Todos os teste que fiz até agora foi com essa versão já dobrada. É importante ter essas ordens de grandeza em mente. |
| 1:18:45 | Vamos deixar anotado porque preciso explicar isso pra vocês, o que significa sessões simultâneas, tempo de resposta, throughput. |
| 1:18:52 | Faixa de 50 mil linhas numa tabela é super leve pra um banco de dados como Postgres. |
| 1:18:58 | Só vamos sentir que ele tá pedindo água quando atingirmos faixa de milhões de linhas e isso se estiver sem índices adequados. 600 sessões fazendo requisições, não é |
| 1:19:08 | pesado. Mesmo com a restrição de menos de 1 CPU no Docker Compose. 1000 sessões simultâneas |
| 1:19:14 | continua não sendo pesado. A viagem de volta de Gramado foi cansativa. Varamos noite no domingo pra segunda. |
| 1:19:21 | Estava de carro alugado e saímos quase 2h da manhã de Gramado pra devolver o carro às 4h em Porto Alegre e pegar o vôo de volta pra Congonhas, em São Paulo às 6h. |
| 1:19:31 | Pegamos táxi perto das 9h da manhã. Antes das 10h chegamos em casa. |
| 1:19:36 | Eu só pude cochilar rapidinho no avião e quando cheguei já liguei meu PC. A primeira versão que queria testar foi a de Crystal com Lucky. |
| 1:19:44 | Troquei o network mode no docker compose pra host e ... foi! Era isso. |
| 1:19:50 | Bateu 47 mil inserts. Provavelmente algum bug de validação porque ultrapassou o máximo. |
| 1:19:56 | Zero knockouts. Sabe a tal tremida nos gráficos que falei? Liso, até o fim, uma linha reta em todos os gráficos. |
| 1:20:03 | Era isso que eu sabia que Crystal tinha capacidade, e confirmamos, a rede do Docker que não estava |
| 1:20:08 | deixando! Próxima versão, mexi no meu Rails overengineered com Sidekiq e tudo mais. |
| 1:20:13 | Network mode host e bateu acima de 45 mil inserts, faltou pouco pra atingir o máximo |
| 1:20:19 | dos 46 mil e tantos. Não gastei muito tempo ajustando valores no docker composer, mas mesmo assim deu só |
| 1:20:25 | 4% de knockouts. Antes dava 20%, 30% ou mais. Mas isso prova meu ponto: o gargalo nunca foi nem falta de CPU e nem falta de RAM, nem |
| 1:20:35 | postgres e nem nginx, era um problema de I/O e isso é gerenciável em quase qualquer linguagem. Se Crystal e Ruby batem o máximo, qualquer outra deveria conseguir. |
| 1:20:44 | Peguei a versão de Lean4 e ainda tem algum bug de validação, mas bate acima dos 47 |
| 1:20:50 | mil inserts. Mais uma versão que vence o stress test sem suar. Peguei a versão em Node.js do Lucas e também bateu no máximo de 46 mil e tantos. |
| 1:21:00 | E isso foi se repetindo. A versão em Python e Sanic do Ian Cambrea, a versão em V Lang do Carlos, a versão em |
| 1:21:06 | Go do Luan, a de PHP com Swoole do Lauro, a outra versão em Rails do Lazaro, todos |
| 1:21:12 | batem o máximo. De bônus, resolvi testar a versão em C++ do Lucas William que tinha ficado em 12o lugar |
| 1:21:20 | com menos de 35 mil inserts, também bate perto do máximo agora, 43 mil inserts. |
| 1:21:26 | Não bateu por algum bug na validação. Enquanto algumas versões faltava validação e deixava inserir mais que o máximo, nesta |
| 1:21:33 | versão tem alguma coisa filtrando demais e impedindo de gravar mais. Olhando os gráficos claramente podemos ver que tá sobrando recursos. |
| 1:21:42 | Zero knockouts, não tá perdendo requisições, então tem recursos sobrando. Nesta segunda-feira, tava todo mundo só falando do lançamento da versão 1.0 do Bun, a nova |
| 1:21:52 | alternativa a Node.js e Deno que promete ser mais performático. Ainda é cedo pra dizer e ainda nem é totalmente compatível. |
| 1:22:00 | Mas o Yuri Gomes tinha participado da rinha com a versão pré-lançamento do Bun, 0.8 |
| 1:22:06 | e tinha ficado em 14o lugar com menos de 28 mil inserts. Mas com network mode em host, ele também bateu o máximo e com tempos similares da |
| 1:22:15 | versão de Rust. Neste exemplo com escopo pequeno, seu desempenho foi à altura do hype, o que é bem promissor. |
| 1:22:22 | Alguns ficaram me cutucando pra mexer em C# também. Eu não tinha mexido em nenhum até agora porque a versão do André e do Albert já |
| 1:22:30 | provaram que alcançava o máximo. Mas, nada mais justo do que finalizar essa segunda-feira super corrida pós-feriado, |
| 1:22:36 | do que avaliar a versão do nosso querido organizador da rinha, Zanfranceschi. Por coincidência ele participou com uma versão de Dotnet. |
| 1:22:45 | Não vi ele no ranking oficial. Acho que, como organizador ele se absteve de se colocar na disputa, participou pela |
| 1:22:52 | diversão mesmo. Mas cometeu o mesmo erro que eu e outros: assumimos que postgres ia ser o gargalo e |
| 1:22:57 | colocamos cache de Redis antes de realmente medir a necessidade. Mas espero que a esta altura tenha ficado claro que postgres nunca foi o gargalo. |
| 1:23:05 | Não estou dizendo que nunca é, em outros projetos pode ser, mas neste desafio não era. |
| 1:23:11 | Por isso é caso a caso, precisa medir. Por causa disso ele implementou um cache em memória usando um ConcurrentDictionary. |
| 1:23:18 | Lembra aquelas pesquisas com select LIKE que mencionei antes? No Postgres, se indexarmos com GIST e trigrams, fica bem rápido, mas com uma estrutura rudimentar |
| 1:23:27 | como um dicionário, um hash, ele é obrigado a percorrer 100% do dicionário o tempo todo, |
| 1:23:33 | extremamente lento. Isso limitou o resultado a 40 mil inserts. Eu tentei fazer os mesmos ajustes de todo mundo: limitar vazão do nginx, mexer no pool |
| 1:23:42 | de conexões, dividir melhor recursos do docker composer, colocar em network mode host, mesmo |
| 1:23:47 | assim não dava. Minha suspeita é que esse ConcurrentDictionary matou esta versão, se alguém quiser tentar |
| 1:23:53 | tirar e retestar, vá no repositório dele nos links abaixo. De qualquer forma, com a ajuda de todo mundo, do Leandro, do MrPowerGamer, do Gabriel Oliveira, |
| 1:24:03 | do Vinicius Ferraz e outros, conseguimos atingir o objetivo não oficial que eu estabeleci pra rinha: vencer o stress test e colocar todas as linguagens no mesmo 1o lugar ou dentro |
| 1:24:14 | dos Top 3. Fizemos isso com 3 versões de Ruby, Node.js, PHP, Python, Java e Kotlin, Bun, V Lang, Go |
| 1:24:22 | Lang, Crystal, C++, todo mundo bateu os máximos. As duas exceções que não bateram foi a de C# do Zan e a de Elixir do Gabriel. |
| 1:24:31 | Em ambos os casos, acho que a lógica de cache engargalou. Que é lição aprendida: não faça otimização prematura. |
| 1:24:38 | Em vez de ficar mais rápido, pode ficar mais lento. Se tirar esse cache, provavelmente bateriam os Top 3. |
| 1:24:44 | E falando em Top 1, agora que consegui cumprir minha missão nesta rinha, só faltava uma última coisa que queria fazer: desenferrujar meu Rust mexendo na versão do ganhador oficial, |
| 1:24:54 | o Vinicius Fonseca. Finalmente chegamos no 16o dia da minha saga, dia 13 de setembro. |
| 1:25:01 | Assim como a versão em C++ do Lucas, ou em Node do outro Lucas, que colocaram tudo num |
| 1:25:06 | arquivo só. O Vinicius fez a mesma coisa em Rust. Repetindo: é uma rinha, o critério não era o código durar pra sempre, era só aguentar |
| 1:25:13 | o stress test. Beleza do código, mantenabilidade, legibilidade, segurança, nada disso eram critérios. |
| 1:25:21 | Eu que fui narigudo e fiquei fuçando e mexendo no código dos outros sem ninguém pedir. Meu objetivo era só desenferrujar meus skills. |
| 1:25:28 | Uma boa forma de fazer isso era pegar o código dos outros e sair reorganizando. |
| 1:25:33 | Essa foi a primeira coisa que fiz no código do Vinicius: refatorar. Rust já não é uma linguagem muito fácil de bater o olho. |
| 1:25:40 | Cheio de anotações, um monte de .clone() e .unwraps() e tipos e generics pra lá e pra cá. |
| 1:25:46 | E tudo amontoado. Dividindo em módulos fica mais fácil de bater o olho. Mas eu queria corrigir o bug que o MrPowerGamerBR identificou na análise dele: a condição |
| 1:25:54 | de corrida que acabava deixando sobrar mais linhas na tabela do que o máximo possível. |
| 1:25:59 | Isso acontece porque o Vinicius manda inserir mais de 500 linhas na inicialização pra algum tipo de aquecimento. |
| 1:26:05 | Que eu saiba o Rust não tem e nem precisa de um just in time compiler, um JIT, já que |
| 1:26:10 | é pré-compilado em binário. Aquecimento faz mais sentido pra Java, que tem JIT. |
| 1:26:15 | Enfim, ele deixa essa rotina rodando numa corrotina da biblioteca Tokio, a mais famosa que dá suporte à semântica de Futures, o equivalente a Promises de Node.js. |
| 1:26:25 | Na sequência, inicia um segundo Future assíncrono. Essa rotina tem um timer, um sleep de 2 segundos. |
| 1:26:32 | Quando passa 2 segundos manda um comando de SQL pra deletar as linhas de aquecimento. |
| 1:26:37 | É aqui que acontece a condição de corrida. Nada garante que 2 segundos é suficiente pra inserir essas 500 linhas. |
| 1:26:44 | Muitas vezes o delete acontece antes. Daí sobra linhas na tabela. Não havia necessidade do delete estar num future separado. |
| 1:26:52 | Bastava disparar o delete depois do último insert. Ou uma gambiarra seria aumentar esse timer de 2 pra mais segundos. |
| 1:26:58 | Eu fiz isso. E pra garantir, alterei o último endpoint, o de contagem final da tabela, pra filtrar |
| 1:27:05 | os registros de aquecimento. Com isso batemos os mesmos 46 mil e tantos inserts, como todo mundo. |
| 1:27:11 | Depois dêem uma olhada no meu pull request pra conseguir entender melhor essa versão de Rust. Eu não curto competições de código. |
| 1:27:18 | Não porque sou contra. Cada um com seu entretenimento. Não tem nada de errado em competir com código. |
| 1:27:23 | Só não pode achar que código de competição é a mesma coisa que código pra projeto de verdade. |
| 1:27:28 | As técnicas são diferentes. Os requerimentos são diferentes. Muitos truques que mencionei, não devem ser usadas sem critério, vai dar errado. |
| 1:27:36 | E nenhuma comparação generalizada deve ser feita entre as diferentes tecnologias usadas. |
| 1:27:42 | Uma competição no estilo dessa rinha serve pra mostrar quem foi mais esperto, quem teve mais sorte, quem foi mais cuidadoso. |
| 1:27:49 | O Zan teve bastante trabalho pra organizar e pra avaliar um a um. Cada rodada do stress test do Gatling custa 3 minutos. 50 projetos que passaram significa |
| 1:27:59 | que ele gastou quase 3 horas só esperando os testes rodarem, sem contar os outros projetos |
| 1:28:05 | participantes que tinham bugs. Agora que passou é fácil dizer "ah, poderia ter feito X melhor, poderia ter feito Y melhor", |
| 1:28:12 | mas a posteriori tudo é fácil. Eu gastei mais de 2 semanas avaliando 18 repositórios em 16 linguagens diferentes. |
| 1:28:21 | Eu tive a sorte de contar com a contribuição de diversos outros desenvolvedores que se animaram pra investigar junto. |
| 1:28:28 | Acho que conseguimos desvendar todos os truques possíveis desta rinha, incluindo vencer o |
| 1:28:33 | stress test do Gatling. Mas isso não é competição, é análise técnica. Não é divertido pra todo mundo, só pra nós mais nerds. |
| 1:28:42 | Mesmo se você for torcedor de um Neymar, Messi, Cristiano Ronaldo, seja lá quem acha |
| 1:28:47 | que é o melhor jogador do mundo, se no dia do jogo eles torcerem o tornozelo e não participarem, |
| 1:28:53 | o resultado vai ser o que der no dia. Quando perdem, não significa que são ruins no geral. |
| 1:28:58 | Só significa que perderam aquele jogo, ponto final. É o conjunto da obra que determina os melhores e não um jogo individual. |
| 1:29:06 | Sorte faz parte do jogo. Mesma coisa nesta rinha. Só porque um Java ou um PHP não apareceram no topo, desta vez, não tem nenhuma correlação |
| 1:29:15 | com a qualidade deles em outros jogos. Amador desbocado é quem faz mais barulho nas redes sociais, então meu objetivo foi |
| 1:29:22 | educacional: demonstrar porque estão errados e fazer todos entenderem que sim: com mais |
| 1:29:28 | tempo, experiência, skill, qualquer uma das linguagens tinha capacidade de alcançar resultados |
| 1:29:34 | semelhantes, alguns com mais trabalho, alguns com menos trabalho, alguns gastando mais recursos, |
| 1:29:40 | alguns menos, não importa. Sua linguagem não te define. Assistiram meus videos de Sua Linguagem Não é Especial? |
| 1:29:47 | O que eu falei lá? Um bom desenvolvedor é promíscuo com linguagens. |
| 1:29:52 | Eu mexo em qualquer uma, a qualquer hora, quando quiser e como quiser. |
| 1:29:58 | O que eu falei em videos como Aprendendo a Aprender ou Aprendizado na Beira do Caos? |
| 1:30:03 | Várias das linguagens que mexi nesta saga, ou nunca tinha mexido, como Nim, Lean4, V |
| 1:30:08 | Lang, ou tava enferrujado fazia anos, como C++, C#, Rust, Go, PHP, Crystal. |
| 1:30:14 | Mesmo linguagens que tenho um pouco mais de intimidade, como Ruby, Javascript, Python, |
| 1:30:19 | tive que quebrar a cabeça. O que eu fiz? Instalei uma a uma e fui fuçar código dos outros. |
| 1:30:25 | Quebrei elas várias vezes. Consertei, refatorei, reorganizei, fiquei em muita tentativa e erro, reimplementei técnicas |
| 1:30:35 | diferentes, apliquei técnicas de uma linguagem em outra, li muito código fonte. |
| 1:30:40 | Mesmo sem nunca ter mexido num framework como Lucky, mesmo Bun que acabou de lançar, não |
| 1:30:46 | levou mais que algumas horas pra me acostumar. Essa é a diferença: as primeiras linguagens que aprender vai levar meses, anos pra dominar. |
| 1:30:54 | As próximas vão ficando exponencialmente mais rápido de pegar, o suficiente pra conseguir |
| 1:30:59 | fazer o básico. Novamente, demonstrei este ponto na prática. Em um dia já dá pra fazer alguma coisa, se me der poucos dias, consigo me virar em |
| 1:31:09 | qualquer uma. Em poucas semanas já vou saber truques avançados de cada uma. Eu consigo me tornar produtivo numa linguagem nova em 1 mês. |
| 1:31:18 | Onde vou levar mais tempo? Em linguagens que tem paradigmas muito diferentes, como Haskell, Ocaml, F#, Clojure ou o Lean4 |
| 1:31:26 | que vimos hoje. Com todos esses disclaimers e avisos feitos, ouçam até o final antes de sair comentando. |
| 1:31:33 | Sim, Rust e Go aparecem no topo do ranking oficial porque, se não cometer erros graves, |
| 1:31:38 | o tempo de resposta individual de cada requisição vai ser na faixa abaixo de 1 milissegundo, |
| 1:31:44 | de microssegundos. Frameworks como Rails ou um Laravel da vida vão responder na faixa de milissegundos. |
| 1:31:51 | Quanto menor o tempo de resposta, mais requisições dá pra responder no mesmo período de tempo. Rust ou Go realmente tem mais velocidade bruta e conseguiram bater a barreira acima dos 40 |
| 1:32:01 | mil inserts, mesmo com docker em modo ponte, e chegar no máximo durante o evento. |
| 1:32:07 | Porque todo mundo não passa a adotar Rust, Go, V Lang, Zig, de uma vez? Tudo compilado em binário nativo super rápido? |
| 1:32:14 | Vamos colocar assim: não existe um único motivo. Não pensem que as pessoas ou empresas são burras e não sabem que são rápidos. |
| 1:32:21 | C e C++ existem muito antes da maioria de vocês nascerem e sempre foram rápido. |
| 1:32:27 | Todo mundo sabe disso. No caso de um V Lang ou Zig é fácil explicar: é porque são novos demais e instáveis demais, |
| 1:32:34 | tem suporte baixo, tem ferramental imaturo, mudando o tempo todo e quebrando compatibilidade, |
| 1:32:41 | falta documentação na forma de livros, cursos justamente porque ainda estão mudando muito. Esses não tem como ser adotados em larga escala. |
| 1:32:48 | Só early adopters muito dedicados. Só empresas menores e com maior margem de assumir riscos, com um co-fundador ou diretor |
| 1:32:57 | técnico muito bom pra liderar. Mas tudo é uma questão econômica. Não me xinguem, eu sou só mensageiro, mas a realidade é que a enorme maioria dos programadores |
| 1:33:06 | não tem capacidade de aprender a usar linguagens de baixo nível, no nível que seria necessário |
| 1:33:12 | pra serem produtivos e produzir código bem feito. O fato da maioria das empresas não estar desesperadamente procurando esse perfil é |
| 1:33:21 | a evidência. Sempre existem exceções, não comece com "ah, mas eu conheço fulano ou ciclano". |
| 1:33:26 | Exceção não define a regra. Fica a dica: se tornar um programador avançado nas tecnologias mais difíceis, te torna uma |
| 1:33:34 | mosca branca, que vale muito mais que os outros. O que eu sempre falo? Tudo que é fácil pra você aprender, também é fácil pra qualquer outro. |
| 1:33:42 | Quanto mais gente tiver fazendo a mesma coisa, mais barato todos vão ser. O valor está em ser bom naquilo que poucos tem capacidade de conseguir. |
| 1:33:51 | Onde a barreira é mais alta. E isso vai ser Rust, Go, C++, pra resolver problemas muito mais complicados do que fazer |
| 1:34:00 | Cruds ou APIs. Reflitam sobre vocês mesmos, porque estão estudando Java ou C# ou Javascript? |
| 1:34:07 | Porque são as posições que tem mais vagas. Rust não se vê vagas todos os dias. Estão vendo? |
| 1:34:12 | É o problema do ovo e da galinha. Você não quer investir tempo pra aprender Rust porque não vê vagas todo dia. |
| 1:34:18 | E as empresas não oferecem vagas porque não vêem trocentos cursos e estudantes aprendendo. |
| 1:34:23 | Por isso que esse tipo de movimento, ou começa em startups arrojadas ou dentro de gigantes |
| 1:34:28 | como uma Microsoft. As vagas existem, bem pouco, e pagam bem, só que são bem mais exigentes. |
| 1:34:35 | Mas ninguém gosta de vagas difíceis, só querem as que acham fácil. Não é prático nem realista manter aplicações web complexas e gigantes em linguagens assim. |
| 1:34:45 | Imagine um Shopify, GitHub, MercadoLivre, Amazon ou iFood da vida, 100% em linguagens |
| 1:34:50 | de baixo nível. Partes do sistema, que são mais sensíveis a performance, já adotam coisas como Go, |
| 1:34:56 | mas é a menor parte. Pro uso do dia a dia, dashboard, relatórios, cruds e coisas assim, não compensam. |
| 1:35:02 | Seria um enorme desperdício dar tarefas consideras commodity como fazer relatórios, pra um tipo |
| 1:35:08 | de programador raro e caro, com de Go ou Rust. Adotar uma tecnologia só porque é mais rápida, não é um bom argumento. |
| 1:35:17 | Hoje em dia todas são rápidas o suficiente. Mesmo linguagens que um programador de Rust chamaria de lentas, como Javascript ou Python, |
| 1:35:25 | conseguimos atingir patamares similares com um custo um pouco maior de máquina. Como demonstrei aqui, na maioria dos casos, é possível dobrar a performance, triplicar, |
| 1:35:34 | tendo o conhecimento adequado, sem quase modificar código, nem precisar jogar tudo fora e reescrever |
| 1:35:40 | tudo em Rust. É isso que programadores como eu fazemos. No fim dia, dado a escassez de programadores de Rust ou Go e a dificuldade de achar talentos |
| 1:35:50 | que consigam ser treinados nisso, em pouco tempo, sai bem mais barato compensar com servidores |
| 1:35:56 | mais parrudos. Alguns pensam que pra dobrar a performance da sua aplicação em PHP, em Java, Dotnet, |
| 1:36:02 | Python, Node, precisa jogar tudo fora e reescrever em Go. Tá errado. Só vai garantir que os erros por ignorância que foram cometidos com um PHP, vão se repetir |
| 1:36:12 | em Go. Programador ruim, vai fazer código ruim em PHP ou em Go. |
| 1:36:18 | Não existe nenhuma garantia que vai ficar mais rápido se você continua não sabendo porque o anterior tava lento. |
| 1:36:24 | Por outro lado, por experiência, já melhorei muito sistema de verdade mexendo nos 20% de |
| 1:36:30 | problemas que dão 80% de retorno. É sempre assim, às vezes são besteiras de pouquíssimas linhas, como as que mostrei |
| 1:36:37 | durante este video. Como falei antes, são vários motivos, custo-benefício sendo o principal. |
| 1:36:43 | No geral o maior problema é que é muito difícil formar bons programadores que consigam tirar vantagem dessas tecnologias. |
| 1:36:49 | O custo-benefício não compensa. Não significa que essas linguagens não tem chance, significa que esse mercado sempre |
| 1:36:56 | vai ser de nicho. Mas pra quem tem o talento e a capacidade, é um nicho que paga muito melhor. |
| 1:37:02 | É só ser bom. Enfim, hoje eu só quis resumir minha saga de como explorei 16 linguagens, claro que |
| 1:37:09 | superficialmente, em 16 dias. Não deu pra detalhar cada truque, mas deixamos tudo anotado, e no próximo video vou explicar |
| 1:37:17 | o truque por trás da mágica: como tudo isso funciona, por que funciona e, mais importante, quando usar e quando não usar. |
| 1:37:23 | Se ficaram com dúvidas mande nos comentários abaixo, se curtiram o video deixem um joinha, assinem o canal e não deixem de compartilhar o video com seus amigos. |
| 1:37:31 | A gente |
| 1:38:27 | se vê, até mais! |
