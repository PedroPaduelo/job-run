# Fiz um servidor de "SQL"?? | Entendendo Banco de Dados

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=_7nISfpofec
- **Duração:** 1:14:25
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Finalmente resolvi falar um pouco sobre bancos de dados. Esse é provavelmente o primeiro |
| 0:07 | grande desafio pra todo mundo que começa a carreira de programação e parece uma parede muito alta pra escalar, muitos acham intimidante, e muitos começam a usar, decoram alguns comandos |
| 0:17 | SQL, mas não tem muita certeza do que diabos estão fazendo. O objetivo de hoje é tentar |
| 0:22 | dar um modelo mental que vocês consigam enxergar servidores de bancos de dados de uma forma |
| 0:28 | menos complicada. (...) |
| 0:38 | Alguns avisos antes de começar. O episódio de hoje não vai explicar nenhum banco de verdade, seja Postgres ou Mongo. Quem está esperando um tutorial de SQL, não vai ser |
| 0:48 | este video. O começo vai parecer estranho se estava esperando isso, mas tenha paciência e continue acompanhando, eu acho que vocês vão ficar surpresos. Até pra quem já entende |
| 0:56 | de banco de dados, no mínimo vai ter material aqui pra ajudar vocês a explicarem pros seus colegas iniciantes. |
| 1:03 | Outra coisa, todos os exemplos de código que vou mostrar serão em Javascript. Eu pessoalmente teria feito tudo em Ruby ou Crystal que são linguagens que sou mais confortável, mas |
| 1:11 | acho que a maioria das pessoas assistindo é mais Javascript, então vamos de Javascript. Quem for de outras linguagens deve conseguir acompanhar porque não vou usar nada exótico. |
| 1:21 | Tudo que eu fizer aqui dá pra fazer em Python, PHP, C# ou o que quiserem. Desta vez todo |
| 1:26 | o código está disponível num repositório no GitHub que vou deixar o link nas descrições abaixo. Inclusive fica de lição de casa refazer o que eu mostrar aqui na linguagem |
| 1:35 | favorita de vocês. O código desse repositório é ingênuo de propósito porque foi um exercício |
| 1:41 | que eu decidi fazer durante o feriado de Tiradentes e eu me coloquei um limite de 2 a 3 dias pra |
| 1:46 | fazer tudo. A motivação desse episódio é porque a menos que eu esteja muito enganado, a maioria |
| 1:51 | dos tutoriais e cursos sobre banco de dados começa mais ou menos assim. Faça "apt install |
| 1:58 | mariadb", que é um fork do MySQL. Daí termina de instalar, inicia o serviço, abre o console |
| 2:03 | que conecta no servidor e começa: agora vamos fazer "create table users" bla bla e depois |
| 2:09 | "insert into users" bla bla e finalmente "select name from users" e já vai direto pra explicar |
| 2:15 | SQL. Pior ainda se começa num tutorial de framework, que aí você já cai num Hibernate ou Sequelize e sequer sabe o que tá acontecendo por baixo. |
| 2:23 | Só que isso eu acho que é ir do zero a 100 muito rápido. Onde que os dados ficam gravados? |
| 2:28 | Onde é esse tal de "banco"? Como que uma linguagem como SQL atua em cima desses dados? |
| 2:33 | Pra que serve um índice? Qual a diferença disso pra eu simplesmente gravar um JSON num arquivo? Vamos dar uma pausa e começar do começo, bem do começo. E no começo tudo |
| 2:43 | que vocês sabem é lidar com variáveis e collections como arrays ou sets ou, no caso |
| 2:49 | de Javascript, objects. Pois bem, pra começar resolvi escrever o banco de dados mais simples que dá pra fazer. |
| 2:56 | Chamei ele de Stupid Database, porque não é pra ninguém achar que isso é um banco de verdade. Ele só se comporta como um. Tenho uma tabela de usuários, num array simples, |
| 3:05 | onde cada linha é um objeto de Javascript, como podemos ver aqui. Na 1a linha, com ID |
| 3:11 | 1 temos ninguém menos que nosso querido Peter Parker. Não esse, esse outro aqui. Com uns |
| 3:16 | 25 anos, da cidade de Nova Iorque. Na 2a linha, com ID 2, temos o Clark Kent com 35 anos, |
| 3:22 | de Metropolis, e assim por diante. Um total de 37 linhas nesse array, com várias pessoas desconhecidas, de nomes comuns. |
| 3:29 | O que é isso? É um array de objetos. Também podemos chamar isso de "tabela". Olha só. |
| 3:34 | Se eu abrir um console de Node.js, carregar esse arquivo com `db = await import('./lib/users-database.mjs')` |
| 3:42 | e fizer `console.table(db.users)`, ele vai printar exatamente como qualquer um esperaria |
| 3:49 | ver uma tabela, certo? Pra todos os efeitos e propósitos, essa é uma tabela mínima. Ok, mas se é uma tabela, é possível inserir novas linhas, certo? Claro. Podemos criar |
| 3:59 | um novo usuário, vamos dar o nome de outra pessoa desconhecida de nome comum, Levi Ackerman, |
| 4:05 | uns 37 anos, de Paradis. E pra inserir num array de Javascript usamos a função `.push`. |
| 4:11 | E no nosso caso, inventei que o id de cada linha é um número crescente que começa em 1, então essa nova linha vai ser o tamanho da tabela mais um. E pronto, esse seria o |
| 4:21 | equivalente em SQL a fazer um `insert into users` da vida. Beleza, mas então qual é o equivalente a um `select` de SQL? Simples, uma das formas |
| 4:30 | é a função `filter`. Eu passo pra função outra função que ele vai executar em cada |
| 4:36 | objeto, um por um em cada linha desse array, no caso, procurando o objeto que tem o nome "Levi Ackerman". O resultado disso é outro array só com os objetos encontrados. Podemos |
| 4:46 | passar de novo pelo comando `console.table` e voilá, esse é o resultado correto, que seria o equivalente em SQL a fazer `select * from users where name = 'Levi Ackerman'`. |
| 4:58 | Aí nesse ponto você deve estar cético, pensando aí. Porra, Akita tá de sacanagem. Isso aí é só uma porcaria de um array, não é um banco de dados. Eu quero ver comando |
| 5:07 | de SQL, porra! Ok, talvez você tenha razão. Então deixa eu ir pro terminal e executar |
| 5:12 | um programinha que eu escrevi, um REPL. Lembram o que é um REPL? O comando `node` onde eu |
| 5:17 | estou é um REPL, um console que interpreta os comandos que eu digito imediatamente e já me dá o resultado. O REPL `node` interpreta javascript e executa. Pra quem é de Python, |
| 5:27 | se digitar `python` vai abrir o REPL de Python, que executa imediatamente os comandos em Python |
| 5:32 | que digitar, e assim por diante. Várias linguagens tem REPLs que já vem na instalação ou que |
| 5:37 | você pode instalar separadamente, mas só lembrar que REPL é um console interativo |
| 5:42 | da linguagem. É uma ferramenta comum em linguagens dinâmicas. Enfim, vou executar o REPL que eu escrevi e chamei de `repl.mjs`. Olha só, abriu uma |
| 5:51 | linha de comando. Vocês queriam ver SQL? Tá bom, vamos começar digitando `insert into users (name, age, city) values ('Levi Ackerman', 37, 'Paradis')`. Opa, retornou |
| 6:01 | o número 38. Agora vamos ver se inseriu mesmo, vou digitar a query `select * from users where |
| 6:08 | users.city = 'Paradis'`. E, olha só, achou esse senhor desconhecido de nome Levi, como |
| 6:13 | deveria. Pronto, não era SQL que vocês queriam ver? Tá aqui. Mas isso não é MySQL, não é |
| 6:18 | Postgres, nada nessa manga, nada nessa outra, é só Javascript puro. Vamos fazer outra query, quero todos os indivíduos nessa tabela com idades entre 60 e 2000 anos, porque alguns |
| 6:28 | indivíduos tem expectativa de vida bem alta ultimamente. Como que faz? `select * from |
| 6:34 | users where users.age between 60 and 2000`, é assim que vocês aprenderam né? E olha |
| 6:39 | só, obviamente, achou certinho. Olha lá o Steve Rogers com 100 anos, acho que é 100 né? Ou nosso amigo Thor com 1500 anos. Só não comer açúcar, fazer dieta intermitente, |
| 6:49 | e vive saudável muitos anos. Eu espero que eu tenha conseguido deixar vocês confusos. O que diabos tá acontecendo aqui? |
| 6:54 | Eu abri uma linha de comando bizarra e comecei a digitar SQL como se fosse um Postgres da |
| 7:00 | vida, e ele claramente tá pesquisando em cima daquele array de objetos em Javascript. Como isso é possível? E esse é o real objetivo desse episódio, eu quero mostrar como eu |
| 7:09 | fiz isso e em paralelo vocês entenderem mais ou menos como um banco de dados de verdade |
| 7:15 | é feito. Então vamos lá. Primeiro de tudo vamos deixar super claro: isto é meramente um exercício educacional, |
| 7:21 | um código que eu me limitei em uns 2 a 3 dias pra fazer. Todo código que vou mostrar a partir de agora não tem condições de ser usado em produção de verdade. Pra isso |
| 7:31 | ele precisaria ser bem mais complicado pra levar em consideração coisas como autenticação e autorização, locks e concorrência, otimizações de performance, otimizações de redundância, |
| 7:40 | etc e tudo isso só ia dificultar a explicação. Por isso eu fiz só o mínimo do mínimo necessário |
| 7:46 | pra ficar fácil de explicar, que é o objetivo de todo código educacional. O segredo de tudo começa na biblioteca que eu chamei de `lib/fake-sql.mjs`. Essa é uma |
| 7:56 | coleção de funções que eu escrevi com nomes estratégicos. Deixa eu mostrar. A primeira é a função `from` que recebe como argumentos as variáveis `table` e `conditions`. Lá |
| 8:06 | na frente eu vou carregar o array `users` e outro array chamado `heroes`, tudo dentro de um hash chamado `database`, daí se fizer `database['users']` eu acesso o mesmo array |
| 8:16 | que tava mostrando até agora. E aqui uma das vantagens de usar uma linguagens dinâmica interpretada como Javascript. Já |
| 8:22 | que performance e segurança não são preocupações pra hoje, eu posso fazer um protótipo simplesmente |
| 8:27 | montando aquele comando de `filter` como fiz antes concatenado com a variável `conditions.where`. |
| 8:34 | Se não ficou claro, deixa eu mostrar o que essa função faz. Vamos abrir o console do Node e deixa eu dar uns copy e paste só pra importar esse arquivo 'fake-sql.mjs' e o mesmo |
| 8:43 | 'users-database.mjs' de antes. Não se preocupem com essa parte que é só carga. Pronto, agora vamos fazer a mesma pesquisa de antes onde eu quero todo mundo com idades |
| 8:52 | entre 60 e 2000 anos. É só fazer `from('users', { where: 'users.age >= 60 && users.age <= 2000'})` |
| 9:01 | que é a mesma coisa que o `between 60 and 2000` que fiz em SQL. De propósito chamei |
| 9:07 | essa função de `from` e fiz um hash com uma chave `where` pra ficar meio parecido com SQL. E olha só, voltou o mesmo resultado de antes. Tô vendo o Steve Rogers, o Thor, |
| 9:16 | a Diana e o Hank Pym. Essa função é o grosso do meu simulador de SQL, todo o resto agora |
| 9:21 | é perfumaria. Pra parecer mesmo SQL falta começar com `select` né? Pra que serve o select? Serve pra eu |
| 9:28 | pegar só as colunas, ou chaves, que eu quiser, em vez de todas. Vamos criar a função `select` |
| 9:33 | lá na biblioteca então. E olha só, parece mais complicadinho. Essa função recebe como argumentos uma lista de colunas e o resultado do `from`, ou seja, aquele array de resultados. |
| 9:44 | A primeira metade é outra trapaça. Se eu pedir "*" ele vai substituir por uma lista |
| 9:49 | com todas as chaves dos objetos. Aqui estou assumindo que todos os objetos do resultado sempre tem as mesmas chaves. Não estou checando nada e não vou introduzir o conceito de Schemas, |
| 9:58 | por isso falei que tô trapaceando. Enfim, daí ele vê se o argumento foi a palavra "count", daí devolve direto só o total de objetos no array de resultados. E caso contrário, |
| 10:08 | pega a string que passei e dá split por vírgula, pra transformar num array. O resultado dessa função é um `map`. Lembra o que faz um map? Ele pega uma coleção, |
| 10:18 | transforma cada elemento e devolve tudo em outra coleção, convertendo cada objeto da coleção original usando essa função que passo de parâmetro. Em resumo, vai transformar |
| 10:27 | meu objeto original num outro objeto só com as chaves que pedi pra selecionar. Vamos ver |
| 10:33 | na prática lá no mesmo console de Node. Estou de novo no console e faço `select('name,age')`. Aqui é uma escolha de design, eu poderia |
| 10:41 | passar como parâmetro um array com os strings 'name' e 'age' mas só pra ficar mais "limpo" |
| 10:46 | nessa sintaxe que tenta imitar SQL, decidi passar tudo grudado num único string. Por |
| 10:51 | isso, do lado de dentro, preciso fazer um split. Obviamente esse é o jeito menos otimizado de passar parâmetros, mas como eu disse antes, é só um exercício. |
| 10:59 | Aproveitando a deixa, é isso que eu falo em vários videos: experimente com código. Faça experimentos como esse na sua máquina, código que não é de nenhum projeto do trabalho, |
| 11:09 | é só um treino sem compromisso. E aí experimente designs que normalmente ninguém deixaria |
| 11:15 | você fazer no trabalho. Só quando se experimentam coisas que ninguém faria é que às vezes pode dar inspiração pra coisas que podem ser úteis. |
| 11:23 | Pra quem curte anime, isso me lembra o Food Wars, já viram, Shokugegi no Souma? É uma história de competição numa escola culinária onde o protagonista, por acaso, adora fazer |
| 11:32 | comidas bizarras que nunca dão certo. Esse é o motivo. Se você nunca tentou fazer os códigos mais impensáveis, nunca vai chegar num design inovador de verdade. Abra um diretório |
| 11:43 | vazio, começa a escrever, apaga, joga fora, vai treinando. Ninguém precisa nem saber. Enfim, voltando ao console, depois de passar a lista de colunas que queremos, como segundo |
| 11:52 | parâmetro colocamos a mesma função `from` de antes. Olha o resultado: uma lista filtrada |
| 11:57 | só com as colunas que queremos, sem a coluna de cidade ou id, no caso. E veja de novo a |
| 12:03 | implementação. Eu pego o resultado e faço um map. A função de transformação faz um array só com as colunas que eu escolhi. E no final faço um `reduce` pra recriar objetos |
| 12:14 | com o nome das colunas como chave. Parece um pouco complicado se você nunca usou "map" e "reduce", que existem em todas |
| 12:20 | as linguagens e servem pra transformar listas e reduzir o resultado num acumulador. Teste |
| 12:25 | só esse trecho num script com vários tipos de listas pra entender o que isso tá fazendo. É bem básico e você precisa saber. De novo, exercite até conseguir enxergar esse trecho |
| 12:36 | e saber exatamente o que está acontecendo. Tem outras formas de escrever a mesma coisa pra ter o mesmo resultado, eu poderia não ter usado map e reduce e feito só com `for`. |
| 12:44 | Enfim. Olha o que estou fazendo. Só de escrever duas funções, esse "select" e "from" que |
| 12:49 | recebe um hash de condições com uma chave "where", já consigo simular o básico do básico de um select de SQL. Só pra ver mais um exemplo, num SQL você sabe que poderia |
| 12:59 | fazer `select name from users where bla bla order by name desc` pra ordenar o resultado |
| 13:05 | em ordem decrescente de nome. Como daria pra fazer nesse meu fake SQL? Vamos criar uma |
| 13:10 | nova função chamada `orderBy` que recebe como parâmetro o nome da coluna por onde queremos ordenar, daí um segundo parâmetro pra dizer se é ordem ascendente ou descendente |
| 13:20 | e como terceiro parâmetro, de novo o resultado da função `from`. Essa implementação é simples, é basicamente o que qualquer iniciante de Javascript que |
| 13:29 | já estudou algoritmos simples de ordenação já exercitou: implementar a função de comparação |
| 13:35 | que se passa pra função `sort` que todo array tem. Novamente, se nunca tentou ordenar |
| 13:40 | um array procure no google "como ordena um array em javascript" e vai achar a explicação dessa função. Não tem nada de especial aqui. |
| 13:47 | Vamos voltar pro console de Node. Como que fica pra usar isso? Aqui é que vai ficar um pouco diferente de um SQL normal porque o "ORDER BY" costuma ir no final do comando, |
| 13:57 | mas na minha versão em Javascript, vai antes. E fica assim `select('name', orderBy('name', |
| 14:02 | 'desc', from('users', bla bla bla)))`. E olha só, funcionou direitinho, retornou ordenado |
| 14:08 | em ordem decrescente, Lois Lane na frente, Barbara Gordon no final. Pára e pensa, com |
| 14:14 | a função `from` filtramos a tabela inteira pra pegar só quem é de Gotham ou Metropolis. Agora ordenamos o resultado, e finalmente selecionamos só as colunas que queremos. |
| 14:24 | E por que essa ordem? Porque poderíamos escolher ordenar por idade mas no final só selecionar a coluna de nome. Por isso a ordenação vai antes de selecionar as colunas pro resultado |
| 14:33 | final. Só pra terminar essa parte, vamos ver rapidamente só mais duas funções. Como faz o equivalente |
| 14:39 | a um "insert" de SQL? Essa é fácil. é só usar a função `push` que todo array tem como já mostrei antes. No caso, eu estabeleci que todo objeto vai ter um ID que é numérico |
| 14:48 | e cresce incrementalmente, como muita primary key padrão que todo mundo cria, só pra ficar |
| 14:54 | mais fácil. Vamos no console do Node e testar isso. Mesma coisa do primeiro exemplo `insert('users', |
| 14:59 | { name: 'Levi Ackerman', age: 37, city: 'Paradis' })`. E devolve 38 que é o ID que ele calculou |
| 15:06 | pra esse objeto. Agora pra simular delete como no SQL é a mesma coisa que o filter da função `from` |
| 15:12 | pra encontrar os objetos que queremos, daí só usamos a função `pop` que todo array de Javascript tem, e isso vai arrancar os objetos da lista. Nesse código-fonte eu implemento |
| 15:22 | outras funções como o equivalente a "update" e tem uma versão inacabada de como seria um 'inner join' e 'outer join' se tiverem curiosidade de tentar terminar da forma correta. |
| 15:31 | E é assim que vou fazendo um fake-sql pra simular os diversos aspectos que tem num banco |
| 15:37 | de dados SQL comum. Mas claro, mesmo sendo um exercício, já tem código suficiente aqui pra confundir |
| 15:43 | a gente. Então esse é um bom momento pra fazer alguns testes unitários pelo menos né? Lembram como faz? Primeiro é só fazer um `npm install --save-dev jest` pra instalar |
| 15:53 | o framework de testes Jest. Agora abrimos o arquivo `package.json` e colocamos esse |
| 15:59 | comando grandão em scripts, test. Eu precisei usar essa flag experimental pra conseguir carregar os módulos ES certinho. Não sei se é o melhor jeito, mas foi como funcionou |
| 16:08 | aqui. Agora é só rodar `npm test` no terminal e ele vai executar os testes que eu já tinha feito no arquivo `stupid.test.js`. O comando do Jest vai vasculhar por arquivos terminados |
| 16:20 | em ".test.js" e rodar os testes que tem lá dentro. E como é esse arquivo? Vamos abrir |
| 16:26 | rapidinho só pra ver alguns exemplos. As primeiras linhas são pra carregar as funções do fake-sql e as tabelas de users e heroes. |
| 16:34 | Criamos um bloco de describe pra função "select" que é de longe quem tem mais casos de testes. Sabe todos aqueles testes que fizemos manualmente no console do Node? Pois é, é |
| 16:43 | o que queremos automatizar em forma de testes unitários. Por exemplo, o primeiro teste é que deve achar o nome, então executa aquela mesma linha de select name from users where |
| 16:54 | users.name igual Peter Parker. Pega o array de resultados, escolhe o primeiro objeto e espera que a propriedade "name" desse objeto seja Peter Parker, "to be" Peter |
| 17:04 | Parker, se for, esse teste passa. E vai fazendo isso pra outros exemplos. Vocês podem olhar esse arquivo com calma depois que tá no repositório. Link na descrição |
| 17:13 | abaixo como falei, mas veja o último que é mais um teste integrado. Eu começo fazendo dois novos inserts, um pra tabela users com o objeto do Katar Hol, e outro insert na tabela |
| 17:24 | heroes dizendo que na verdade ele é o Hawkman! Quem diria? E ligando com o que seria equivalente |
| 17:29 | a uma chave estrangeira numa tabela de SQL, fazemos a propriedade user_id desse objeto |
| 17:35 | ser igual ao valor que voltou no insert anterior. E é assim que seria um sisteminha CRUD da |
| 17:40 | Liga da Justiça, pensa o estag do Bruce Wayne fazendo isso. Só pra comparar depois, pedimos a contagem das duas tabelas e guardamos nessas duas variáveis |
| 17:49 | de total. Agora fazemos um select com o innerJoin que eu não mostrei o código, mas se você |
| 17:54 | já aprendeu SQL, inner join é uma forma de fazer a intersecção de duas tabelas de resultado. Ele vai ligar o resultado desse `from` feito na tabela users com a tabela |
| 18:04 | heroes via a chave `user_id`. E esperamos receber uma tabela de resultado com as colunas |
| 18:10 | name e alterego. Alter ego só tem na tabela heroes. Então esperamos que na primeira linha do resultado, a propriedade name seja Katar Hol |
| 18:19 | e o alterego seja Hawkman. Continuando, digamos que eu errei a idade do Katar, não era 35 |
| 18:25 | e sim 37. Então eu posso usar essa outra função `updateFrom` que eu não mostrei o código. Quero que o age, a idade, mude pra 37, e isso nos objetos que voltar da mesma |
| 18:36 | função `from` onde a cidade é Thanagar. Eu faço de novo um select pela mesma condição e checo que a idade que voltou mudou pra 37 |
| 18:45 | mesmo. E estamos quase no fim. Agora quero testar a função `deleteId` que também não mostrei o código. Vou apagar os objetos com os ids user_id e hero_id que tinha guardado |
| 18:55 | lá em cima. E pra saber se apagou mesmo, peço um select count pra trazer a contagem |
| 19:00 | das duas tabelas e tem que ter um objeto a menos do que tinha antes de quando eu gravei os totais depois do insert lá em cima. Vamos pro terminal, se rodar `npm test`, olha só, |
| 19:11 | tudo passa corretamente. E agora eu tenho um mínimo de testes caso eu queira brincar de mexer mais nesse código. |
| 19:17 | Testes é outro assunto super longo, mas mesmo num exercício de fim de semana como esse, ter testes me ajudou muito. Se não tivesse eu teria levado o dobro do tempo pra fazer |
| 19:26 | as coisas. Mas eu não segui nenhum tipo de TDD, eu escrevia um pedaço e testava depois, |
| 19:32 | mudava o design, mudava o teste, e fui fazendo assim. Não pensa tanto em procedimento, só faz a porra do teste. |
| 19:38 | Até esse ponto implementei um monte de funções de javascript com nomes como select, insert, |
| 19:44 | updateFrom, from, innerJoin, orderBy e assim por diante pra imitar os nomes dos comandos mais comuns que todo banco de dados SQL tem. E como exercício, eu poderia parar por aqui. |
| 19:54 | Entenderam mais ou menos como é possível simular um fake SQL em cima de arrays de javascript? Mas claro, não é isso que você queria ver. Por mais parecido que seja, isso ainda não |
| 20:04 | é SQL. Funções de Javascript tem um monte de parênteses, o orderBy tá na ordem errada, |
| 20:09 | tá parecido mas tá longe de estar igual a SQL. O que eu quero é poder ter um script como eu fiz nesse arquivo `test.sql` que também |
| 20:18 | tá no repositório. Olha só, vários comandos SQL igualzinho o que você conseguiria executar |
| 20:23 | no MySQL, SQL Server. Pra executar esses SQL eu fiz outro script chamado `stupid.mjs`. |
| 20:31 | Vamos ver o finalzinho dele. Olha só, ele abre o arquivo `test.sql`, passa o script nessa função esquisita `parseScriptWithSplitQueries` e pra cada linha devolvida dá um eval. O |
| 20:42 | que acontece se executar isso? Vamos voltar pro terminal e executar. E voilá, ele executa todos os comandos SQL! Eu dei `console.log` do que tá rodando, e |
| 20:52 | são minhas funções Javascript e não o SQL. Como que faz isso? Vamos voltar praquele |
| 20:57 | script e o segredo começa naquela função esquisita `parseScriptWithSplitQueries`. Ela |
| 21:03 | passa o conteúdo do arquivo `test.sql`, que são aqueles montes de comandos SQL, pra essa |
| 21:08 | classe SplitQueries. Se olhamos lá em cima, ela é importada desse outro arquivo `parser/SplitQueries.mjs`. |
| 21:15 | Vamos abrir ela. Pronto, a primeira coisa que ele faz é importar essa biblioteca chamada Antlr4. E vamos pausar |
| 21:23 | aqui pra eu explicar. Como expliquei no começo, no feriado de Tiradentes eu tava pensando em como ia explicar banco de dados pra vocês, aí tive a idéia de fazer um do zero. Se |
| 21:33 | eu terminasse o episódio aqui, acho que já dava pra ter o primeiro gostinho de como um banco funciona por baixo. Esse código que mostrei até agora é super trivial de fazer, |
| 21:42 | não foi mais que algumas poucas horas brincando. Mas a cereja do bolo seria mostrar como que comandos SQL de verdade funcionam e apesar das funções javascript que fiz terem nomes |
| 21:52 | parecidos com SQL, ainda não é SQL. E aí fiquei coçando a cabeça, porque eu queria mostrar SQL, mas eu não queria gastar muito mais que um dia pra isso. |
| 22:01 | O episódio que lancei antes desse justamente explica o que é uma linguagem compilada e |
| 22:07 | interpretada, e mencionei que tanto um compilador quanto um interpretador começam com um parser. E uma das formas de se fazer um parser é usar um software chamado Antlr4, que é feito |
| 22:17 | em Java. Naquele episódio eu disse que não ia explicar ele. Pois bem, vou explicar rapidinho agora. O antl4 é um gerador de parsers. Lembram o que é um parser? É quando pegamos uma |
| 22:27 | gramática, passamos o código fonte por um lexer pra conseguir uma coleção de tokens e passamos esses tokens pra um parser pra conseguir uma ParseTree. |
| 22:36 | Num interpretador ou compilador, essa ParseTree é transformada numa Abstract Syntax Tree |
| 22:42 | ou AST, que daí passa por uma série de otimizadores pra reescrever o código da forma mais eficiente |
| 22:48 | possível, e aí finalmente gerar o código de máquina tanto pra executar na hora, caso seja um Just in Time Compiler ou gerar um binário num arquivo, caso seja um Ahead of |
| 23:00 | Time Compiler ou AOT. No meu caso, eu não preciso fazer tudo isso, só preciso ir até o ponto onde gera uma Parse Tree, pra a partir dela, fazer um transpiler, que vai converter |
| 23:10 | SQL em Javascript. Entenderam onde eu quero chegar? Escrever uma gramática do zero é extremamente tedioso e trabalhoso. Mas minha vantagem é |
| 23:19 | que não estou inventando uma nova linguagem, pelo contrário, eu quero um SQL que seja o mais compatível possível com o SQL de verdade. E aqui vem outra vantagem do Antlr4. |
| 23:29 | Ele tem uma comunidade muito esforçada que já se deu ao trabalho de escrever a gramática de praticamente todas as linguagens que você já ouviu falar e um monte que vocês nem |
| 23:38 | sabiam que existiam. Vou deixar o link do repositório nas descrições abaixo, mas olha essa página do GitHub que coisa linda. |
| 23:46 | Lembram que eu falei da linguagem BCPL? Quer saber como é a gramática? Basta entrar aqui nessa pasta e abrir o arquivo `bcpl.g4` que é a extensão de gramática do antlr4. Olha |
| 23:57 | o que eu expliquei no episódio anterior. Começa definindo o que ele entende por "letras", são todas as maiúsculas e minúsculas. E essa distinção é importante porque tinha |
| 24:05 | linguagens antigas que só entendiam comandos em maiúsculo. Continua definindo, o que é um dígito em octal, um dígito em hexadecimal, o que são dígitos numéricos. |
| 24:15 | E qual é o tamanho da gramática pra entender BCPL inteiro? Que é a linguagem que inspirou |
| 24:21 | o C? Nada mais que 131 linhas, contando linhas em branco. E se a gente voltar pra primeira |
| 24:26 | página, olha lá embaixo, uma pasta chamada "python", dentro tem python2, e no python3 temos de novo arquivos .g4 que ele separou pro lexer e pra gramática do parser. E mesmo |
| 24:37 | esse arquivo tem menos de 200 linhas. Mas de volta à primeira página, o que nos interessa mesmo é essa pasta sql lá embaixo. |
| 24:44 | Tem as gramáticas do mysql, postgres mas o que eu queria, e ainda bem que tinha, é do sqlite3, que é o banco de dados sql mais simples e provavelmente o mais usado do mundo. |
| 24:55 | Isso porque enquanto um postgres da vida é usado em servidores, todo dispositivo IoT, internet das coisas, que é qualquer dispositivo com um mínimo de processamento com acesso |
| 25:04 | a internet, precisa de um banco de dados local. Pense um roteador de wifi da sua casa. 99% |
| 25:09 | de certeza que dentro usa um sqlite3. Pense vários apps no seu celular Android, vários |
| 25:15 | sqlite3. Pense uma geladeira inteligente, certamente tem sqlite3 dentro. Aliás, o que estou construindo neste episódio estou chamando de stupid database, porque |
| 25:25 | é o banco mais besta e ao mesmo tempo mais simples com objetivo educacional, mas se quiser |
| 25:30 | ver o menor banco de dados SQL realmente completo e funcional, tem que estudar o código C do |
| 25:37 | Sqlite3. Existe um subprojeto chamado Sqlite Amalgamation que concatena os mais de 100 arquivos de código fonte num único arquivo "sqlite3.c" e por isso se chama amalgamation. |
| 25:48 | O sqlite3 inteiro consiste de 75% de código C e o resto é arquivos .h de cabeçalhos. |
| 25:54 | Esse arquivão dá um total de quase 240 mil linhas ou 145 mil se tirar linhas em branco, |
| 26:01 | totalizando 8.4 megabytes de código fonte. Se um dia realmente quiser saber em detalhes |
| 26:06 | como um banco de verdade funciona, precisa entender como o sqlite3 funciona, O código |
| 26:11 | fonte tá disponível pra ler e ir testando pedaço a pedaço. Bom trabalho de iniciação científica ou TCC pra quem tá na faculdade de ciências da computação. |
| 26:21 | Mas, explicar 145 mil linhas de código em um único episódio seria impossível então |
| 26:26 | espero que se contentem com essa minha versão de stupid database. Enfim, falei tudo isso pra dizer que foi nesse respositório de gramáticas do Antlr4 que peguei emprestado os arquivos |
| 26:36 | "SqliteLexer.g4" e "SqliteParser.g4". E como eu não ia ter comandos como "create table", |
| 26:43 | "alter table" e coisas assim, saí apagando da gramática tudo que não ia suportar até ficar com uma versão mais reduzida. Ainda sobrou muita coisa que eu não implemento, |
| 26:52 | mas apaguei o suficiente pra facilitar meu trabalho. Daí eu precisei instalar o antl4, e pra isso é só ir no site deles e ver como instala, |
| 27:00 | não vou detalhar aqui. Assumindo que já tá instalado, no terminal é só rodar o comando `antl4 -Djavascript` pros dois arquivos SqliteLexer e SqliteParser.g4. Esse flag "-" |
| 27:11 | diz em que linguagem ele vai gerar o lexer e parser. E dá pra gerar em praticamente todas as linguagens que quiser, seja python, java e no nosso caso, javascript. Isso gera |
| 27:21 | esses arquivos ".interp" e olha só SqliteLexer.js e SqliteParser.js. Esses arquivos a gente |
| 27:29 | não precisa mexer. Nem vou abrir porque pode assustar os mais fracos de coração. O mais importante é que ele gerou esse SqliteParserListener.js. Esse podemos abrir e vamos descobrir um monte |
| 27:40 | de funções vazias. Que diabos que são essas funções? E eles estão em pares, veja só aqui no começo temos uma função chamada "enterParse" e depois "exitParse". Se abrirmos |
| 27:51 | aquele arquivo que pegamos emprestado, o SqliteParser.g4 podemos ver aqui no começo que "parse" tem |
| 27:57 | esse "sql statement list" e EOF que é End of File ou final do arquivo. Daí vemos que |
| 28:02 | sql statement list tem vários sql statements e sql statement pode ser vários tipos como |
| 28:08 | delete statement, insert statement, select ou update. Entenderam? É assim que ele começa definindo as regras do que esse parser consegue entender, e são justamente as operações |
| 28:17 | que queremos. Então já sabemos que o ponto de entrada no parser vai ser por essa regra "parse" que engloba o arquivo inteiro de comandos SQL que passarmos pra ele. |
| 28:26 | A gente não mexe nesse arquivo de Listener também, porque se amanhã eu mexer no arquivo .g4 e mandar regerar com o comando `antl4`, daí vai sobrescrever nesses arquivos todos. |
| 28:36 | Por isso criei esse outro chamado CustomListener.js. Ele é basicamente uma classe que extende |
| 28:41 | da classe SqliteParserListener e lá embaixo eu copio todas aquelas funções vazias pra |
| 28:47 | sobrescrever elas. Agora sim posso começar a brincar. Eu não vou mostrar tudo em detalhes, depois vocês podem olhar o código fonte no meu |
| 28:55 | repositório. Mas só pra entender vamos voltar pro arquivo principal desse diretório, o |
| 29:01 | SplitQueries.mjs que é pra onde eu tava mandando os comandos SQL do arquivo `test.sql` lembram? |
| 29:06 | Agora que expliquei o que são os principais arquivos, veja que nesse script eu importo todos eles, o Lexer, o Parser e o meu CustomListener. Ele começa recebendo um input, que pode ser |
| 29:16 | uma linha de SQL ou várias linhas de SQL como o conteúdo do arquivo `test.sql`. |
| 29:22 | Uso a função InputStream da biblioteca antlr4 pra quebrar num stream de caracteres. Lembra |
| 29:28 | o que são streams? Lembro que já expliquei isso em algum episódio, mas pra quem não sabe, iniciantes estão acostumados a carregar o conteúdo de um arquivo tudo de uma vez |
| 29:37 | em memória, mas e se o arquivo não couber na memória? O jeito mais eficiente é ir lendo pedaços do arquivo de cada vez e ir processando aos poucos, pra isso abrimos um |
| 29:46 | stream. Enfim, passamos esse stream pro Lexer, que criar uma lista de tokens a partir desse |
| 29:52 | stream. Ou seja, ele recebe a linguiçona de strings e vai quebrando numa lista de tokens. |
| 29:58 | Agora passamos esses tokens pro Parser e em seguida pedimos pra construir a Parse Tree, |
| 30:03 | a árvore, como expliquei no episódio anterior. Pra você que é de front-end, é como quando o navegador carrega uma página HTML, que é um stream de caracteres, e gera o DOM, |
| 30:12 | a árvore que representa aquele HTML. Agora criamos uma instância do nosso CustomListener |
| 30:18 | passando a referência pra esse array "result" que é onde vamos escrever o javascript final. Pra gerar essa parse tree, começamos da primeira regra que tem no nosso arquivo .g4 do parser, |
| 30:29 | que é a regra chamada "parse", por isso chamamos `parser.parse`. Finalmente, fazemos o antl4 passear pela parse tree, nó a nó, por isso essa função chama |
| 30:39 | `ParseTreeWalker` e damos como parâmetro pra ele o Listener, que tem as regras de conversão, |
| 30:45 | e a árvore propriamente dita. E é aqui que entra meu CustomListener. Vamos entrar lá de novo. Aqui eu vou dar uma trapaceada porque quero gerar o javascript baseado no meu fake |
| 30:54 | sql, lembra? As funções em javascript que eu criei chamada "select", "from", "orderBy". Pra isso eu vou pegar os pedaços que a ParseTree vai me dando e vou preenchendo nesse objeto |
| 31:04 | construído pela função `buildSqlStruct` que eu inventei. Ela tem os pedaços que formam |
| 31:09 | um comando SQL. Olha só como tem um array pra colunas, outro array pra condições, e flags pra saber se tem "order by" e coisas assim. |
| 31:17 | Logo embaixo tem a função `enterParse`, mas nesse momento eu não preciso fazer nada. Deixa ele ir navegando pela árvore até achar um comando como "insert" ou "select". Digamos |
| 31:27 | que eu tenha um comando como `insert into users (name, age, city) value ('Katar Hol', 37, 'Thanagar')` como mostrei lá no começo. Um comando sql normal de insert. Olha o nosso |
| 31:37 | arquivo de parser .g4, a regra do insert se chama `insertStmt` de statement. Então provavelmente |
| 31:44 | quando o parser achar o insert, vai chamar a função `enterInsertStmt` passando um |
| 31:49 | contexto nessa variável `ctx` que é a sub-árvore do comando de insert. |
| 31:55 | Essa parte foi a mais trabalhosa que é decifrar o que vem nesse contexto. E já aviso que a documentação que achei online não foi muito útil não. Na prática, o que eu aprendi |
| 32:03 | a fazer foi executar o parser com um comando SQL de teste e vasculhar o que vem no contexto |
| 32:08 | usando o bom e velho `console.log` e eu entendi que o que importa é saber quem são os nós |
| 32:14 | filhos, ou seja `ctx.children`. Então, vamos lá na função de entrada do insert e deixa eu colocar esse `console.log` aqui. Se eu printar o ctx inteiro vai ser super longo, |
| 32:24 | então só imprimo o nome da classe a o `getText()` que é representação em texto desse nó. Vamos abrir o REPL e mandar o comando insert de teste. |
| 32:32 | Olha só o que ele imprime: os nós, que são instâncias de TerminalNode costumam ser tokens como o comando "insert" e as outras partes do comando como "into". Daí quando tem um |
| 32:42 | nome de tabela, com outra super classe, no caso Table_nameContext, daí vem outro TerminalNode |
| 32:48 | que é a abertura de parênteses. Daí temos um Column_nameContext que é o campo "name" |
| 32:53 | e assim por diante. Foi isso que o Lexer fez, ele quebrou o comando e o Parser organizou |
| 32:58 | nesse sub-árvore de nós que podemos navegar. Vamos voltar pro código no Listener. Já sabemos que é só navegar por cada nó dos filhos do contexto, então pra cada `child` |
| 33:08 | de `ctx.children` eu faço um switch case. Se a super classe for Table_nameContext eu |
| 33:14 | preencho o nome da tabela naquele objeto sqlStruct. Próximo nó, se for um TerminalNode, não |
| 33:20 | faço nada. Próximo nó, se for um Column_nameContext vou acumulando numa lista de colunas no objeto |
| 33:26 | sqlStruct e mesma coisa se forem ExprContext, são os valores, então vou acumulando na |
| 33:32 | lista `values` no sqlStruct. Quando acabar a lista de nós filhos, sai dessa função. |
| 33:37 | Daí o Walker vai chamar a função de saída que, por convenção, vai se chamar `exitInsertStmt`, |
| 33:43 | por acaso é a função logo embaixo nesse Listener. Pronto, quando entra nessa função sabemos que navegamos por todo o comando insert. Agora |
| 33:52 | é só pegar o que cadastramos no objeto sqlStruct e literalmente montar uma string com a versão |
| 33:58 | do comando em javascript. Primeiro eu monto uma string combinando o nome de cada coluna como chave, dois pontos, o valor, que é a sintaxe de javascript pra montar um objeto. |
| 34:08 | Depois eu começo a montar a função "insert", concateno o nome da tabela e depois junto os valores com vírgula entre chaves. Isso vai gerar esse comando em javascript que eu |
| 34:18 | mostro no REPL antes de executar. Expliquei meio rápido mas deu pra entender a idéia? Todo comando que eu passar praquela |
| 34:24 | função SplitQueries vai passar pelo Lexer e Parser, e vai gerar uma árvore, a Parse |
| 34:30 | Tree. Daí eu ando nessa árvore, nó a nó, usando as funções do Listener. Toda vez que quero implementar um comando SQL, pego a função de entrada, como a `enterInsertStmt`, |
| 34:40 | pego o contexto que é a sub-árvore e vou dividindo os pedaços que preciso e acumulando na minha estrutura sqlStruct. E na função de saída monto a string com a versão em |
| 34:51 | Javascript, que é o que a função SplitQueries vai retornar, no caso pro REPL. Vamos abrir o script do tal REPL, a linha de comando que vim mostrando até agora. Eu |
| 35:00 | uso uma biblioteca chamada "prompt-sync" que faz exatamente o que o nome diz: abre um prompt que fica esperando eu escrever algum comando. Tá vendo ele escrevendo "stupid query"? Daí |
| 35:10 | eu digito o comando insert e ele captura nessa variável `query`, que vai passar pra função |
| 35:15 | `parseScriptWithSplitQueries` que tá definido lá em cima. Igual eu tava fazendo no script |
| 35:22 | `stupid.mjs` que lia comandos do arquivo `test.sql`. Essa função passa o script pro SplitQueries, que é o parser, que vai navegar e transformar |
| 35:31 | a árvore e cuspir um string com o comando javascript do nosso fake-sql. Pra cada linha |
| 35:36 | que ele cuspir dou um `eval` e executo, imprimo o resultado na tela com o `console.table` |
| 35:42 | e no final abro o prompt de novo, e fica nesse loop, que é o que um repl tem que fazer mesmo. |
| 35:47 | E pronto, é assim que se constrói um interpretador simples de SQL em javascript. O que eu fiz no Listener pra converter o insert em javascript agora preciso fazer a mesma |
| 35:57 | coisa pros comandos delete, update, e select, que é o mais complicado de todos. Vamos só bater o olho no select. Começa pela função `enterSelectStmt`. Diferente do insert que |
| 36:08 | forcei olhar pros nós filhos direto, aqui só crio o objeto sqlStruct que vou precisar |
| 36:13 | preencher e deixo o Walker passear pelos próximos nós pra ir coletando o que eu preciso. Por |
| 36:19 | isso falei que é mais complicadinho, porque precisa implementar várias regras diferentes do Listener que não vou mostrar em detalhes aqui. |
| 36:26 | Em particular um select é complicado porque nas condições que começa depois do Where eu posso ter uma série de expressões, e expressões dentro de expressões. Começo |
| 36:35 | a capturar lá em cima na função `enterExpr`ession. E aqui eu chamo uma função que vai ser recursiva, |
| 36:42 | justamente porque pode ter expressões dentro de expressões. Falei que ia ser complicado. Não tenta entender linha a linha num primeiro momento, começa tentando entender só o conceito. |
| 36:51 | Não vou nem tentar ir passo a passo, de novo, fica de lição de casa, mas só pra mostrar rapidinho, essa função `recursiveChildren` vai tentando interpretar uma expressão de |
| 37:00 | cada vez. Por exemplo, em SQL podemos fazer algo como "age between 60 and 2000" e em javascript |
| 37:07 | isso tem que virar "age >= 60 && age <= 2000" e esse tratamento começa nesse if que checa |
| 37:13 | se esbarrou num "between" e cria uma estrutura pra isso. Ou pior, em SQL podemos ter algo como "city in ('Gotham', 'Metropolis')" e em javascript |
| 37:22 | isso tem que virar "['Gotham', 'Metropolis'].includes(city)" e de novo olha aqui no código o if que ativa |
| 37:28 | se esbarrar no token "IN" pra criar uma estrutura de `range`. Continuando, em SQL o "NOT" vem |
| 37:34 | antes da expressão, então quando falo "NOT age > 40" tem que virar "age <= 40" que é |
| 37:40 | o inverso. Lá em cima eu fiz uma função chamada `invertOp` pra inverter todos os operadores. |
| 37:46 | Se for igual vira diferente, se for maior, vira menor ou igual e assim por diante. Enfim, pra conseguir pegar a maioria dos casos mais comuns de select, eu tive um bom trabalhinho. |
| 37:55 | Por isso que agora consigo ir no meu repl e digitar vários tipos de SELECT e ele vai |
| 38:00 | conseguir montar. Quando terminar de transformar todos os nós que preciso da sub-árvore do |
| 38:05 | SELECT, vai cair na função de saída, o `exitSelectStmt`. Só deem uma olhada. No |
| 38:11 | final vai ter preenchido estruturas como sqlStruct.orderby, sqlStruct.table, sqlStruct.conditions e assim |
| 38:17 | por diante. Daí é só montar a string com minha sintaxe de javascript do fake sql e |
| 38:22 | retornar. Eu sei que parece complicado mas realmente não é. Se você já teve que usar jQuery |
| 38:27 | pra manipular nós de HTML do DOM num navegadow, é basicamente o mesmo conceito. Quando a gente tem um HTML como "12" que é uma lista, o contexto começa com o |
| 38:42 | nó "ul", ele vai ter 2 children que são nós "li", o primeiro "li" vai ter valor 1, |
| 38:47 | o segundo "li" vai ter valor 2. E se tivermos isso aberto no DOM que podemos manipular com |
| 38:52 | javascript, podemos transformar isso em dois parágrafos, por exemplo. E é algo semelhante que fui fazendo nesse Listener, convertendo nós de SQL em string Javascript, pra todos |
| 39:02 | os comandos que eu quis suportar no banco stupid. Esse projetinho ainda tá incompleto, como falei antes, coisas como inner join, outer |
| 39:10 | join, sub-selects e coisas assim eu não implementei. Fica de exercício pra vocês se quiserem. Mas vamos recapitular: até aqui fiz um banco de dados em memória bem stupid, que são |
| 39:20 | só arrays de objetos. Fiz funções javascript com nomes que se assemelham aos comandos SQL |
| 39:25 | e chamei isso de Fake SQL. E de bônus usei o Antlr4 pra pegar a gramática do Sqlite3, |
| 39:31 | gerar lexer e parser em javascript e preencher o listener com código pra transpilar SQL |
| 39:37 | de volta em javascript que chama minhas funções de Fake SQL. Mas até aqui só expliquei como que de comandos SQL dá pra executar alguma coisa por baixo. |
| 39:47 | Mas pra ser um banco de dados de verdade, ainda faltam funcionalidades que vou explicar só em conceito. O mais importante é vocês entenderem índices. Todo iniciante esquece |
| 39:56 | que existem índices porque não entendem a importância. Alguns sabem que é pra aumentar a performance, mas como em máquina de desenvolvimento, que você dá insert em poucas linhas na tabela, |
| 40:05 | não faz quase nenhuma diferença, todo mundo esquece de usar. Então deixa eu explicar o problema. |
| 40:11 | Pra ilustrar criei esse script de benchmark chamado `bench_index.mjs`. Agora, esquece |
| 40:17 | o parser de SQL, vamos usar só o fake sql. Notem que lá em cima eu carrego uma nova biblioteca chamada `fake-sql-index.mjs`. Pula por um segundo. A primeira função aqui é |
| 40:27 | um timer genérico, passo um comando e ele grava a hora logo antes, a hora logo depois, subtrai os dois pra saber quantos milissegundos levou pra processar. Depois faço uma rotina |
| 40:36 | de criação de índices. Vou explicar o que isso significa já já, mas na prática estou criando um índice pra cada coluna da nossa tabelinha. |
| 40:44 | Em seguida crio uma nova função de insert decorada em cima do insert anterior. Ignorem |
| 40:50 | por enquanto, já explico. Agora vem a parte da carga, vou duplicar aquela tabela de 37 usuários 18 vezes. Só que é acumulativo, então da primeira vez, 37 vira 74. Daí duplica |
| 41:01 | de novo e vira 148, daí duplica de novo e vira 296 e faz isso 18 vezes, aumentando a |
| 41:07 | quantidade de objetos exponencialmente até dar quase 10 milhões de objetos em memória. |
| 41:13 | Agora olhem o primeiro teste do benchmark, é usando minha função `from` lembra? Que vai fazer um eval chamando a função `.filter` desse nosso array de quase 10 milhões de |
| 41:22 | objetos e checando um a um se a propriedade `city` é igual a "Wakanda". Ele vai checar |
| 41:28 | isso quase 10 milhões de vezes, objeto a objeto. Porque não tem outra forma nessa |
| 41:33 | versão simples e no nosso teste vai levar algo na faixa de 150 milissegundos, o que é bem rápido porque já tá tudo na memória e fuçar RAM é muito rápido. Se fosse pesquisar |
| 41:43 | num HD seria 100 ou 200 vezes mais devagar que isso, levando vários segundos inteiros |
| 41:49 | pra fazer a mesma pesquisa. O segundo teste é diferente, ele usa outras funções que ainda não mostrei e que está |
| 41:55 | naquele arquivo "fake-sql-index.mjs". Logo no começo chamei a função `createIndex` |
| 42:01 | dessa biblioteca. Vamos ver o que ela faz. Olha só, já tinha uma lista chamada `databases` pra representar o banco de dados e agora criei outra estrutura global chamada `indexes` pra |
| 42:11 | representar índices. Daí crio um índice pra cada chave da tabela. Então a chave pra |
| 42:17 | idade da tabela users seria `indexes['users']['age']` e cada uma delas vai ter uma instância desse |
| 42:22 | tal de `AVLTree`. AVLTree é parecida com uma Red-Black Tree. Expliquei isso no vídeo de Árvores, lembra? |
| 42:29 | Deixa recapitular o conceito rapidinho aqui. Eu tenho aquela lista de usuários com nome, idade e cidade, certo? Se eu quiser achar todo mundo da cidade de Wakanda como faz? |
| 42:38 | Do jeito que tá agora preciso olhar o 1o elemento e vai ser o Peter Parker em Nova Iorque, não é. Pula pro próximo, vai ser Clark Kent, em Metropolis. Só quando chegar |
| 42:47 | na linha 12 que vamos achar o T'Challa em Wakanda. Mas eu não sei se é só ele, vamos checando um a um de novo até chegar na linha 25 e achamos a Okoye. Mas ainda não sabemos |
| 42:57 | se acabou, então tem que ir até a última linha 37 que é a Jubilee em Los Angeles e |
| 43:02 | agora sabemos que só tem 2 usuários de Wakanda, mas pra saber isso tivemos que checar 37 vezes. |
| 43:08 | Tem como melhorar isso? Tem. O jeito mais ingênuo é jogar numa árvore de procura binária. O processo é simples. |
| 43:14 | Primeiro de tudo ordemos a lista de cidades. Vou simular aqui. Depois, não começamos |
| 43:19 | do começo, da linha 0. Começamos do meio. Metade de 36 é 18. E na linha 18 temos New |
| 43:25 | York. Agora, Wakanda é maior ou menor que New York? Por ordem alfabética é maior, então ignoramos tudo abaixo da linha 18 e vamos pra metade entre 18 e 36, que é a linha |
| 43:35 | 27. E 27 continua sendo outro New York. Wakanda ainda é maior, então pegamos o meio entre |
| 43:40 | 27 e 36 que é 31. De novo Wakanta é maior. O meio entre 31 e 36 é 33. E nessa linha |
| 43:46 | temos San Francisco. Ainda Wakanda é maior. Meio de 33 e 36 é 34. Agora é Themyscira. |
| 43:53 | Wakanda ainda é maior. E finalmente, entre 34 e 36 temos 35, onde encontramos o primeiro |
| 43:59 | Wakanda. Esse foi por acaso, o pior caso, onde procurei Wakanda que fica no final da lista. Mas olhem |
| 44:05 | só, no pior caso anterior tinha que vascular 37 vezes. Mas desse jeito binário de ir jogando |
| 44:11 | metade fora a cada checagem, tivemos que fazer só 6 comparações. Ou seja, 6 vezes menos |
| 44:16 | comparações no pior caso. Se em vez de eu procurar na tabela principal, procurar no índice ordenado de cidade, vou descobrir as duas últimas linhas depois de só 7 comparações |
| 44:26 | e isso me resulta nos ids 12 e 25. Agora pego esses ids na tabela principal e acho o T'Challa |
| 44:32 | e a Okoye, totalizando 7 comparações e 2 operações pra pegar os objetos na tabela |
| 44:38 | de usuários. 9 operações, que é quase 4 vezes menos operações. Vamos ver o benchmark das 10 milhões de linhas. Vasculhando, que em mundo de banco de dados |
| 44:47 | é o que chamamos de fazer um "table scan" porque estamos escaneando linha a linha da tabela inteira, 10 milhões de vezes, levou na casa de 150 milissegundos. Mas agora buscando |
| 44:57 | no índice, que é o que faz essa função getFromIndex, vai custar na faixa de 10 milissegundos. |
| 45:03 | 15 vezes mais rápido. Mas aí vai levar uns 35 milissegundos pra pegar os ids e buscar |
| 45:08 | os objetos na tabela, que é o que faz essa função `getFromIds`, um total de uns 40 |
| 45:14 | milissegundos, que continua sendo pelo menos 3 vezes mais rápido do que um table scan. Lembrando que esses tempos só são em millisegundos porque estamos em RAM, se fosse em disco seria |
| 45:24 | muito mais lento. No caso, por causa do javascript, essa função `getFromIds` tá prejudicando nosso benchmark. |
| 45:30 | Mas se fosse em C estaríamos falando de uma diferença ainda maior, na casa de tudo 10 vezes mais rápido mais ou menos. Antes que alguém comece a chiar nos comentários, Javascript |
| 45:39 | não é sempre X vezes mais lento que C, mas nesse trecho específico sim. Enfim, uma AVLTree |
| 45:44 | e uma Red-Black Tree, diferente de uma árvore de procura binária simples, são árvores |
| 45:50 | balanceadas. Eu mostro no outro video a diferença de forma animada, mas em resumo, significa |
| 45:55 | que o processo de ordenar e colocar na árvore exige uma operação de rotação pra fazer o balanceamento, então a inserção na árvore é um pouquinho mais lenta do que uma árvore |
| 46:04 | binária simples, mas na hora de procurar vai exigir menos comparações então a pesquisa |
| 46:09 | é mais rápida. Pra todas as pesquisas serem mais rápidas, o certo é ter índices pra cada expressão |
| 46:14 | que queira procurar. Se quisesse fazer uma pesquisa por idade e cidade ao mesmo tempo, eu deveria ter um índice que contenha esses dois valores na mesma árvore. Se quiser procurar |
| 46:23 | também separado por idade e em outras pesquisas procurar por cidade, daí preciso ter outro |
| 46:28 | indice separado pra cidade e outro pra idade. Mas aí você pensa, porque diabos tenho que ficar criando índices manualmente, se tudo fica mais rápido com índices, o banco já |
| 46:37 | não cria índices pra todas as colunas automaticamente como eu fiz no meu banco estúpido aqui nesse |
| 46:43 | trecho? Agora é hora de falar daquela função nova de insert decorada. Eu usei um decorator só |
| 46:49 | pra não ter que mexer na função de insert original e só plugar a funcionalidade de índice. Vamos ver o que faz esse `decorateInsert`. Abrindo a biblioteca "fake-sql-index", vemos |
| 46:59 | que ela recebe a função `insert` antiga e devolve outra função. Dentro ela chama o insert original, mas na sequência insere também os valores nos índices de cada coluna. |
| 47:10 | Ou seja, se estivermos inserindo um novo objeto com os campos name, age, city e id, são 4 |
| 47:16 | novos inserts. O que antes era só 1 operação de insert no array de users, pra atualizar |
| 47:22 | todos os índices, virou um total de 5 inserts. A operação de insert ficou pelo menos 5 |
| 47:27 | vezes mais lenta. Imagina uma tabela com 50 colunas. Se todas tiverem índices, cada insert vai exigir 51 |
| 47:34 | operações de insert. Um pra linha na tabela principal e 50 inserts pros índices de cada |
| 47:40 | coluna. Então o insert ficaria 50 vezes mais lento. E não é só isso. Concorda que toda |
| 47:45 | vez que fizer update também precisa atualizar todos os índices? E se fizer delete também tem que deletar de todos os índices? Portanto insert, update e delete todos ficam lentos. |
| 47:56 | E é por isso que não se faz índices pra todas as colunas. Índices é um trade-off de deixar operações de pesquisa muito mais rápidas ao custo de |
| 48:05 | deixar operações de escrita muito mais lentos. E nós programadores é que temos que avaliar, |
| 48:10 | testar e achar formas de criar o mínimo de índices possível pra ter a maioria das pesquisas |
| 48:15 | rápidas sem prejudicar demais as operações de escrita. Da mesma forma, não ter índice |
| 48:21 | nenhum significa que as pesquisas podem ser 10 vezes mais lentas, porque vai cair num table-scan. Na prática, todo select complexo vai ser uma combinação de pesquisa em índices |
| 48:31 | e table-scan pras coisas que não tem índice. E é por isso que existe o comando EXPLAIN na maioria dos bancos de dados pra explicar qual estratégia que o banco vai usar pra |
| 48:39 | executar sua pesquisa. Se quiser ficar bom em fazer queries que tiram o máximo dos seus índices, estudem como |
| 48:46 | funciona o comando EXPLAIN. Internamente um banco de dados como Postgres pode pegar seu SELECT com condições WHERE complicadas e dividir o trabalho, por exemplo, pra rodar |
| 48:55 | em paralelo em múltiplos núcleos do CPU. Ele vai tentar sempre otimizar a query pra rodar no menor tempo possível, usando a menor quantidade recursos que puder. É bem mais |
| 49:05 | complicado do que eu dar um "filter" num array, obviamente. Mas já deve dar pra dar uma idéia. |
| 49:10 | De curiosidade, além dos comandos básicos de SQL como select, insert, ainda podemos programar stored procedures, que são programinhas em SQL, com condicionais como IF, variáveis |
| 49:21 | e tudo mais. No caso de Postgres, a linguagem mais comum é o PL/pgSQL, num Oracle é o |
| 49:27 | PL/SQL, num SQL Server é o T-SQL. Um postgres vai passar o código por um parser mais complicado |
| 49:33 | do que eu mostrei e vai usar LLVM pra fazer o just in time compile desses programinhas, |
| 49:38 | incluindo a fase de transformation passes pra otimizar o código antes de tentar executar. |
| 49:44 | Então existe um JIT até no seu banco de dados hoje em dia. Todo banco de dados tem um interpretador embutido. |
| 49:51 | Seguindo no nosso banco estúpido ainda temos um probleminha. Notem que estamos usando o console do Repl do banco stupid pra inserir, apagar linhas, mas quando saímos e entramos |
| 50:00 | de novo, os dados que mudamos não estão mais lá porque sempre carregamos do zero, do mesmo arquivo 'users-database.mjs', mas nunca salvamos em cima desse arquivo. Portanto |
| 50:10 | os dados são fixos. E se a gente quisesse gravar as mudanças em disco pra persistir? |
| 50:15 | Ah, isso é fácil, alguns poderiam dizer. Basta fazer o que todo tutorial de javascript |
| 50:21 | já explicou: transformar a lista de objetos num arquivo JSON e gravar. Certo? Totalmente errado. E nem meu banco é stupid o suficiente pra fazer isso. Na realidade |
| 50:30 | vou quebrar o problema em dois. Um banco de dados de verdade tem no mínimo dois mecanismos, pra tanto persistir dados, quanto garantir a integridade desses dados, em particular |
| 50:40 | num banco SQL. Se você estudou o básico de SQL já deve ter ouvido falar que bancos relacionais tem a característica de ser ACID, certo? Atomicidade, Consistência, Isolamento |
| 50:51 | e Durabilidade. Se nunca ouviram falar, é obrigatório estudar isso. Hoje vou falar só de um pequeno aspecto de consistência e durabilidade. |
| 50:58 | Em particular, tudo que um banco responde "gravei" depois que você mandou inserir, tem que estar garantidamente gravado de verdade quando pesquisar. Todo conjunto de operações |
| 51:09 | que eu mandar numa transação, ou todas executam ou nenhuma executa. Não pode ter operações |
| 51:14 | feitas pela metade. Tudo isso porque uma característica importante é integridade. Tudo que o banco |
| 51:20 | me confirmar eu preciso acreditar que fez realmente tudo certo, sem exceções. Essa |
| 51:26 | é a característica de todo banco de dados relacional. O mesmo não se aplica a bancos NoSQL como Redis ou Dynamo, eles fazem trade-offs diferentes, mas outro dia falo disso. |
| 51:36 | Um dos mecanismos pra ter algumas dessas garantias é o transaction log ou journal. Um sistema |
| 51:42 | de arquivos modernos como NTFS, ext4 ou APFS também tem esse mecanismo, como já expliquei |
| 51:49 | no video de sistemas de arquivos. Como o nome diz é basicamente um arquivo de log, cuja característica principal é ser um arquivo append-only, ou seja, que nunca muda o que |
| 51:58 | já foi escrito e só dá pra ir apendando, só adicionando na frente. O conceito é que |
| 52:03 | antes de executar uma operação você primeiro grava que operação vai fazer nesse log e depois executa. Caso dê alguma catástrofe, tipo acabar a luz e o computador desligar, |
| 52:12 | da próxima vez que reiniciar ele consegue dar replay nesse log e refazer as operações |
| 52:22 | pra trazer os dados de volta num estado consistente. Quero simular isso rapidinho pra vocês verem. Pra isso criei um outro módulo chamado "fake-sql-transact". |
| 52:32 | Abrindo o código, as duas primeiras funções são pra abrir o arquivo de log em modo append |
| 52:37 | - pra isso que serve esse "a" aqui -, e a segunda é pra apendar alguma coisa nesse arquivo. Em seguida, tenho decorators pras três operações principais que modificam |
| 52:46 | os dados, um pra insert, outro pra delete e outro pra update. Repetindo, um decorator |
| 52:51 | recebe como argumento o nome da função original e devolve outra função como retorno. Dentro |
| 52:57 | dessa nova função vou salvar o comando no log de transações e só depois executo de |
| 53:02 | fato o insert, delete ou update. Pra testar dupliquei o script de repl que estava usando até agora e fiz um `replTransact.mjs` |
| 53:11 | pra ter essa funcionalidade. Olha o que faço. Primeiro importo as funções insert, deleteFrom |
| 53:17 | e updateFrom do módulo de fake-sql com outros nomes. Daí o resto importa igual. Agora chega |
| 53:23 | nesse trecho onde começo abrindo o arquivo de log de transações que chamei de `transact.log`. |
| 53:28 | A primeira coisa que faço é checar se tem algum coisa nesse arquivo e, se tiver, essa função de replay vai repetir todas as operações lá dentro. Como toda vez eu carrego sempre |
| 53:37 | os mesmos dados do arquivo de `users-database`, eu sempre perdia tudo que fazia nela. Agora |
| 53:42 | isso vai recuperar o que fiz baseado no log. Em seguida abro o arquivo em modo append e recrio as funções de insert, deleteFrom |
| 53:51 | e updateFrom com versões decoradas que recebem o objeto do arquivo de log aberto. A partir |
| 53:57 | de agora quando chamar um insert, por exemplo, ele vai salvar a operação no log e depois fazer as alterações no array de objetos. O resto do script é igualzinho, então vamos |
| 54:06 | sair, ir pro terminal, e carregar esse novo repl. A primeira coisa que vou fazer é dar insert em mais dois usuários. Vamos inserir os desconhecidos de Paradis. Insert do Levi |
| 54:16 | Ackerman, 37 anos, depois deixa eu inserir uma parente distante dele, Mikasa Ackerman, |
| 54:22 | 20 anos. Pronto, agora posso fazer `select name from users where users.city = 'Paradis'` e estão |
| 54:28 | lá direitinho. Vamos dar Ctrl+C pra sair e abrir o Repl de novo. E olha só, ele executa |
| 54:34 | a função de replay e reinsere os dois. Se eu fizer o mesmo select, eles estão lá direitinho. |
| 54:39 | E com isso eu implementei um tipo estúpido de persistência desses dados. Imagina que isso fosse um servidor de banco normal, como um Posgres, e bem na hora que tá salvando |
| 54:48 | essas linhas em disco, dá uma pane, acaba a energia ou o sistema crasheia. O banco ia ficar num estado inconsistente, mas como antes de tentar gravar na tabela ele salvou as operações |
| 54:58 | num transaction log, no próximo restart, vai conseguir fazer um replay, como o que |
| 55:03 | simulei nessa versão simples. Todo banco de dados e todo sistema de arquivos moderno tem um transaction log ou o outro |
| 55:09 | nome que se usa pra isso, que é um journal, que é inglês pra diário. Óbvio que diferente da minha versão estúpida, ele não vai dar replay de todo o arquivo de transactions toda |
| 55:19 | vez que restarta, isso seria estúpido. Ele só dá replay nas últimas transações que não concluíram até o fim. E isso leva à última característica de um banco de dados |
| 55:28 | que quero discutir hoje, que é: como se salva esses dados numa tabela de verdade num HD? |
| 55:33 | Bom, já mostrei que meu banco estúpido sempre carrega os dados de um arquivo como o "users-database". |
| 55:38 | E nesse caso estou persistindo os dados em formato texto, em javascript. Acho que todo |
| 55:44 | mundo aqui já salvou dados assim de outra forma, como um arquivo JSON. Bastaria chamar a função `JSON.stringify` e salvar a string num arquivo, certo? Por que a gente não faz |
| 55:54 | só isso? Toda vez que insere ou modifica uma linha naquele array de usuários, basta chamar o `JSON.stringify` e salvar tudo no arquivo. Fácil, não? |
| 56:03 | E isso estaria errado. Vamos entender o raciocínio pra vocês nunca cometerem esse erro. O que |
| 56:08 | faz uma função como `JSON.stringify`? Ele executa uma operação que chamamos de serialização |
| 56:14 | ou marshalling. Daí quando lemos de um JSON e recriamos o array de objetos em memória, |
| 56:20 | chamamos de desserialização ou unmarshalling. Esse é o tipo de operação que tem literalmente |
| 56:25 | em toda biblioteca de APIs que você já tenha usado, como APIs pra integrar com meios de pagamento, ou APIs pra fazer bots de instagram ou twitter. Toda API te devolve um XML ou |
| 56:36 | um JSON e você converte pra objetos da sua linguagem pra poder manipular os dados. Daí prepara um payload qualquer e serializa de volta em XML ou JSON pra mandar pra API. |
| 56:47 | Essa operação necessariamente duplica os dados em memória, pra começar. Você já tem o array de objetos em memória, e gera uma versão em JSON, em texto, que também |
| 56:57 | tá em memória. Ambos vão ocupar o dobro ou mais de espaço. Os dados no array estão |
| 57:02 | em binário e toda vez que transforma binário numa representação legível em texto, isso ocupa mais memória. Vamos ver quanto. Eu fiz um scriptzinho besta que usa a biblioteca |
| 57:10 | "object-sizeof" que instalei via npm. E lá embaixo faço uma versão serializada do array |
| 57:16 | de users usando o `JSON.stringify`. Olha só. A string com a conversão em JSON do array tá ocupando 4.3 kilobytes na memória. |
| 57:26 | Já a versão original binária em memória do array de objetos de users ocupa uns 3 kilobytes. |
| 57:31 | Portanto a versão JSON é mais de 40% maior. Imagina se fosse um array gigante, com 1 gigabyte. |
| 57:38 | Significa que o JSON ocuparia algo na ordem de 1.4 gigabytes. 400 Mega a mais por causa |
| 57:44 | da conversão em texto e do formato JSON. Representações em texto de estruturas de dados fazem o trade-off de ocupar mais espaço pra gerar um arquivo que é mais fácil de |
| 57:53 | um ser humano como nós, programadores, conseguirmos manipular num editor de textos. Por isso é um bom formato pra arquivos curtos, que não vão crescer o tempo todo. Mas em termos puramente |
| 58:03 | de performance, trafegar JSON é um desperdício de espaço, banda e processamento. |
| 58:09 | Exatamente por isso que empresas como o Google preferem usar outro protocolo pra fazer comunicação entre serviços, como o ProtoBuf, que é um protocolo binário de formato de dados. Nenhum |
| 58:19 | game que você joga online trafega JSON pra atualizar a posição do seu personagem no |
| 58:25 | jogo, sempre é um protocolo binário. Mas pra APIs de coisas como mandar mensagens automatizadas |
| 58:30 | no Whatsapp ou Twitter, eles oferecem um protocolo baseado em JSON, porque a maioria das pessoas |
| 58:36 | nunca ia conseguir montar um pacote binário. E também porque costuma ser poucos dados trafegados. Num jogo precisa estar trafegando dezenas ou centenas de pacotes de dados por |
| 58:45 | segundo, por isso todo byte conta. Numa API de mensagens ou pagamentos, você manda poucos |
| 58:50 | pacotes de dados, por isso, mesmo que seja 40% mais pesado, não vai fazer tanta diferença |
| 58:56 | assim pra você. Da mesma forma, num banco de dados, a gente primeiro não quer perder 40% de espaço gravando |
| 59:02 | num formato ineficiente como JSON ou XML ou qualquer outro protocolo baseado em texto. |
| 59:09 | Mesmo desconsiderando isso, ainda tem outro problema. Uma função como JSON.stringify, |
| 59:14 | converte a estrutura de dados do array inteira de uma só vez pra texto. Depois não tem como inserir ou modificar só uma linha. Como que adiciona um novo elemento no JSON? Não |
| 59:23 | tem como de maneira rápida. E um banco de dados vai o tempo todo aumentando de tamanho e não dá pra ficar convertendo de binário pra texto, tabelas inteiras toda vez. É inviável. |
| 59:33 | Tem que ter um jeito de ir adicionando só um insert ou update de cada vez, sem mexer |
| 59:38 | no que já tava gravado, sem criar outro arquivo e sobrescrever por cima. Pra gravar em disco queremos gravar em formato binário, algo próximo da tal árvore ordenada |
| 59:49 | que mencionei antes e que simulei com índices usando uma árvore AVL. Você poderia pensar, |
| 59:55 | ok, todo Nó de uma árvore contém a referência ou ponteiro na memória pra outros Nós. Basta |
| 1:00:00 | gravar o nó em disco e mudar de ponteiro em memória pra endereço no disco, daí consigo |
| 1:00:06 | navegar pelos nós no disco e consigo inserir novos nós fácil, certo? Nos videos sobre sistemas de arquivos eu explico como que funciona um sistema de partição, |
| 1:00:15 | endereçamento em sistemas de arquivos e tudo mais. Recomendo que dêem uma olhada. Mas pros nossos propósitos basta saber que na prática o sistema operacional enxerga um |
| 1:00:24 | disco como se fosse um array gigante de dados, começando com a posição zero e incrementando |
| 1:00:29 | pra 1, 2, 3 etc até acabar o espaço de 64-bits, que é endereços pra caramba, terabytes e |
| 1:00:36 | terabytes. Então beleza, é parecido como memória funciona, que pra uma linguagem é como se fosse um arrayzão gigante que começa em 0 e vai endereçando até acabar a RAM, |
| 1:00:46 | também com endereços de 64-bits. Então tá fácil, dá pra gravar um binário em RAM pra um binário em disco só convertendo as posições de cada nó quando passa de |
| 1:00:55 | um arrayzão em memória pro arrayzão em disco. Mas discos de HD tem uma diferença importante. Vamos pensar a árvore AVL. Deixa eu mostrar |
| 1:01:03 | uma representação gráfica de como seria a árvore de índice de idades. Vou inserir aqui todas as idades de todo mundo que tá no array de usuários. Ela vai ficar assim. |
| 1:01:12 | Conseguem enxergar que essa árvore é uma lista ordenada? Começa lendo da esquerda pra direita. Olha só. 22, 25, 27, 30, 30, 30, 30, 32, 33, 33, 35, 35, 35, 35 etc. |
| 1:01:24 | E se eu quiser achar todo mundo com idade maior que 40? Começa descendo tudo pra esquerda. |
| 1:01:30 | 22 é menor que 40, vai pra direita, 27 é menor que 40, sobe, 25 ainda é menor, 30 |
| 1:01:35 | é menor, sobe, 30 ainda é menor, 33 é menor, sobe 30 é menor, 35 é menor, sobe, 35 é |
| 1:01:43 | menor. sobe, 40 é menor. Desce tudo até 40, é menor, opa 41. sobe, 42. opa. Daqui |
| 1:01:49 | pra direita é tudo maior que 40. Então eu tenho no final 10 endereços pras posições na memória onde estão esses nós. |
| 1:01:56 | Essas posições em memória não são necessariamente consecutivas. Eu peço um espaço pro gerenciador |
| 1:02:01 | de memória, tipo malloc, e ele me dá algum endereço que eu não me preocupo. Expliquei isso no episódio de gerenciamento de memória, dêem uma olhada depois. Mas enfim, saiba |
| 1:02:10 | que toda vez que você inicia uma nova variável na sua linguagem, por baixo a variável é só um nome pra alguma posição na memória, um endereço, que você não sabe. Uma das |
| 1:02:20 | utilidades de uma linguagem de programação é esconder esses endereços de você pra não ficar complicado. Em Assembly você teria que lidar direto com o endereço. Em disco |
| 1:02:29 | é a mesma coisa, só que em disco vai ser a localização em coordenadas tridimensionais |
| 1:02:35 | de qual dos discos, em qual trilha e em qual posição da trilha. Tão vendo esse CD aqui, um HD é como se fossem vários CDs um em cima do outro. Em |
| 1:02:45 | cima e embaixo de cada disco desse tem um cabeçote com um leitor, que vai navegar nos diversos cilindros ou trilhas desse disco. Agora imagina que aqueles 10 endereços que |
| 1:02:55 | retornou pras idades maior que 40 seja cada um num disco diferente, em trilhas diferentes, |
| 1:03:01 | em posições aleatórias. Concorda que pra ler tudo, o HD vai ter um trabalhão? Especialmente |
| 1:03:07 | porque os discos não estão parados, eles ficam girando sem parar dentro do HD e o cabeçote |
| 1:03:12 | tem que ir lendo até bater no endereço que foi pedido, daí ele muda de cilindro, e procura outro endereço. É muito trabalhoso pegar endereços aleatórios num disco, é muito |
| 1:03:21 | lento. HDs funcionam melhor quando queremos pegar pedaços mais longos de dados de uma |
| 1:03:27 | só vez numa única passada do cabeçote na trilha. E essa nossa árvore AVL é super curtinha. Imagina um banco de dados de milhares ou milhões |
| 1:03:37 | de nós. Seu HD ia fritar pra ficar procurando nós individualmente e aleatoriamente. Mas |
| 1:03:43 | tem jeito melhor? Tem sim, na verdade tem dois jeitos, as árvores B-Tree e B+Tree que |
| 1:03:49 | eu cheguei a mencionar no episódio de árvores e agora espero que faça mais sentido pra que eles servem. Deixa eu mostrar como ficam as mesmas idades ordenadas organizadas numa |
| 1:03:59 | árvore B-tree. Nem vou inserir todo mundo, só as idades dos 10 primeiros usuários. Olha o formato |
| 1:04:05 | que essa árvore tá ficando. Entenderam? Cada nó pode ter mais de um valor. Em particular se eu pesquisar só quem tem mais de 40 anos, aí vou ter só esses dois grandes nós aqui |
| 1:04:14 | na direita. E eles vão ser lidos do disco em no máximo 2 operações, em vez de ter |
| 1:04:19 | que pesquisar e ler de 10 endereços aleatórios como no exemplo da árvore AVL. A grande sacada |
| 1:04:25 | é justamente isso de acumular vários valores um atrás do outro num único nó grandão, num bloco ou cluster. Isso porque um HD não lê byte a byte, ele lê em setores ou blocos |
| 1:04:36 | de uma só vez. Todo HD vai sempre ler pelo menos um bloco de 512 bytes ou até 4 kilobytes |
| 1:04:42 | de uma só vez e colocar num buffer. Se não ficou claro, lembra quando se formata um HD novo? Na tela de formatação ele pergunta |
| 1:04:49 | sobre tamanho da unidade de alocação. Por padrão costuma ser 4 kilobytes que é o tamanho |
| 1:04:54 | do setor. É a menor unidade que ele lê ou grava de uma só vez. Quanto maior for, melhor |
| 1:05:00 | pra ler depois, mas desperdiça mais espaço, porque quando precisar gravar menos de 4 kilobytes, o que faltar, não pode reusar mais. Mas enfim, em um único setor do disco cabe nossa estrutura |
| 1:05:11 | de usuários inteira, que a gente viu que ocupava menos de 4 kilobytes lembra? Então num HD nossa tabelinha de usuários cabe inteiro num único setor e consegue ser lido do HD |
| 1:05:22 | de uma só vez. O trabalho pra ler um único byte não compensa pro HD, como o disco tá girando sem parar, |
| 1:05:28 | na hora que a cabeça começa a ler, ele já lê de uma só vez vários bytes. Ler um byte ou ler 4 kilobytes, é quase o mesmo trabalho. Então se eu organizar a árvore pra já conseguir |
| 1:05:38 | organizar em clusters, fica mais fácil de ler depois. Na hora que o HD for ler esse valor 41 do exemplo, já vai ler de uma vez o 42, 43 e 47. Como já organizei na árvore |
| 1:05:49 | pra serem valores consecutivos, ou seja, um atrás do outro sem intervalo, ele vai ler os 4 valores corretos numa única passagem. |
| 1:05:57 | Nesse exemplo eu fiz nós que vão ter no máximo uns 7 valores, mas numa árvore B-tree de verdade vai ter dezenas ou centenas de valores um atrás do outro em cada nó. E |
| 1:06:06 | é assim que o HD vai gravar e vai ler de uma só vez. A diferença de uma árvore B-tree e B+tree é que no B+tree só os últimos nós da árvore que vão conter dados, os |
| 1:06:17 | nós acima só vão conter metados, os ponteiros pros nós de baixo. Atualizar a árvore é significativamente mais complicado do que a rotação que já |
| 1:06:26 | mostrei de uma árvore simples Red Black ou AVL, mas o layout pro HD é muito mais amigável. |
| 1:06:32 | Recomendo depois procurar num livro de algoritmos, como o do Cormen, os detalhes sobre uma B+Tree. |
| 1:06:37 | No Cormen inclusive ele explica exatamente sobre essa vantagem e no meu repositório no GitHub desse episódio adicionei outro repositório como sub módulo que encontrei |
| 1:06:48 | alguém que implementou em C a B+Tree do Cormen pra gravar a árvore em disco, pra quem tiver |
| 1:06:53 | curiosidade. E de fato, se eu procurar por "btree" no repositório do código fonte do banco sqlite3, vamos encontrar |
| 1:07:00 | várias menções a árvore B-tree que ele usa pra gravar as tabelas, os índices, e tudo mais. E se sair procurando em outros bancos como MySQL, Postgres, até Redis e |
| 1:07:09 | outros, você vai encontrar uma variação dessa árvore sendo usada. Em resumo o importante é entender que um bom banco de dados precisa levar em consideração |
| 1:07:18 | a estratégia e custos de ler e gravar dados em disco, em blocos, vários bytes de uma |
| 1:07:23 | só vez. Um programador iniciante que só lida com variáveis em memória, costuma pensar só um byte de cada vez, mas é bom saber que dependendo do que tá fazendo, é mais |
| 1:07:32 | eficiente pegar mais dados do que precisa e descartar o que não precisa. Não é intuitivo |
| 1:07:37 | mas é justamente por isso que ninguém deve sair fazendo um banco de dados do zero sem ter conhecimento pra isso. Existem vários papers e anos de pesquisa pra cada aspecto |
| 1:07:47 | de um banco de dados modernos. Lembrem-se que a gente vem fazendo isso faz mais de 60 anos. |
| 1:07:53 | A intenção do episódio de hoje não foi incentivar ninguém a escrever o próprio banco, mas sim entender alguns dos principais componentes que um banco de dados de verdade |
| 1:08:02 | precisa ter. Muita gente tenta racionalizar um banco com variáveis e arrays em memória, |
| 1:08:07 | e espero que tenha ficado mais claro como é bem mais do que isso. E também porque chamei o episódio onde explico árvores de "O Começo de Tudo". Compiladores precisam |
| 1:08:17 | de árvores. Bancos de dados precisam de árvores. Tudo precisa de árvores, e se você não consegue enxergar listas ordenadas como árvores, está perdendo o entendimento de como tudo |
| 1:08:28 | funciona em computação. Aliás, como último exercício de tudo que fiz até agora no meu banco estúpido, faltou |
| 1:08:34 | mostrar mais uma coisa. Como transformar esse meu console de linha de comando de SQL em |
| 1:08:40 | um sistema cliente/servidor, como um banco de verdade. E esse nem vou explicar o código, |
| 1:08:45 | porque é um servidor simples de TCP. Pra quem aprendeu redes na faculdade isso aqui é o primeiro dia de aula. Mas olha só. Num terminal vou executar o servidor com `./stupid-server.mjs` |
| 1:08:55 | e pronto, isso vai pendurar o meu servidor na porta 4000 da minha máquina. Em outro terminal, vou executar `./stupid-client.mjs` que vai tentar se conectar na porta 4000. |
| 1:09:06 | E no terminal do servidor, mostra que alguém se conectou. Esse cliente não tem nenhuma lógica do banco, não importa nenhum código do interpretador de SQL nem o array de users, |
| 1:09:16 | mas eu posso mandar comandos em SQL. Esses comandos vão trafegar pela rede e chegar no servidor. O código do servidor é parecido com o REPL, e no fim devolve o resultado de |
| 1:09:27 | volta pro cliente. E pra provar que é um servidor mesmo, posso abrir outro Terminal separado e abrir mais |
| 1:09:33 | um "stupid-client". O servidor mostra que mais alguém se conectou. Posso mandar mais SQL por aqui, e ele vai responder. E esse é o esqueleto básico de como um servidor |
| 1:09:43 | de banco de dados funciona. Depois estudem o código no repositório do GitHub pra ver como eu fiz isso, mas se entenderam até aqui, essa foi a parte mais fácil, eu literalmente |
| 1:09:52 | fiz esse cliente e servidor em uns 15 minutos. Fazer um banco de dados de verdade exige conhecimento bem mais avançado do que isso em ciências |
| 1:10:00 | da computação e vai exigir centenas, milhares de horas homem de desenvolvimento, testes |
| 1:10:06 | e ajustes. Essa minha versão estúpida eu justamente chamo de estúpido porque fiz só |
| 1:10:11 | as coisas mais fáceis, o suficiente pra fazer esse episódio. Eu basicamente peguei o feriado e pensei "hum, que tipo de banco SQL será que consigo fazer em uns 2 ou 3 dias de trabalho", |
| 1:10:22 | e foi isso aqui que mostrei pra vocês. Em particular, o interpretador de SQL, eu nunca tinha usado Antlr4 antes, então foi a parte que gastei mais tempo pra fazer, devo ter |
| 1:10:31 | gasto pouco mais de 1 dia pra fazer o parser e interpretador. Portanto, tendo conhecimentos básicos de algoritmos e as coisas que já vinha explicando no canal, dá pra fazer esse |
| 1:10:40 | exercício do zero em uns 3 dias. Eu me coloquei um limite de tempo porque não dava pra ficar eternamento mexendo no código, |
| 1:10:47 | uma hora eu precisava gravar este episódio. Mas se alguém se interessar puramente pelo |
| 1:10:52 | exercício, o próximo passo que não fiz foi justamente mover o array de objetos do "users-database" pra uma árvore B+tree e gravar em disco, incluindo os índices. Só |
| 1:11:01 | que aí precisaria também implementar um cache, pra não precisar ir toda hora no disco, e precisaria implementar um sisteminha simples de lock, caso na versão cliente e servidor, |
| 1:11:11 | vários clientes tentem modificar os dados ao mesmo tempo. Além disso era bom fazer um limite de conexões. Javascript não tem multi-thread real, então |
| 1:11:20 | teriamos um limite do que é possível fazer. E nesse caso sintam-se a vontade de reimplementar |
| 1:11:25 | tudo numa linguagem diferente como Java ou C# ou qualquer outra coisa assim. Só que se fizerem numa linguagem que não é dinâmica, aí vão ter mais trabalho por não terem |
| 1:11:34 | a trapaça que eu fiz usando "eval" pra executar as condições de where. Enfim, dá pra ficar |
| 1:11:39 | brincando bastante em cima disso ainda. Pra só usar um banco de dados precisa saber em detalhes como ele foi feito? Claro que |
| 1:11:47 | não. Justamente o que mostrei aqui já é um modelo mínimo suficiente pra ter na cabeça |
| 1:11:52 | pra não parecer que é uma caixa preta mágica. Usem isso pra ajudar a explicar os principais |
| 1:11:57 | conceitos técnicos de como um banco de dados funciona pra colegas e amigos iniciantes. Quero saber se isso ajudou a mudar um pouco o que vocês imaginavam que era um banco de |
| 1:12:06 | dados. Num outro episódio vou falar mais especificamente de bancos de verdade como um Postgres, Redis ou Dynamo. Mas por hoje acho que já ficou comprido o suficiente. |
| 1:12:20 | Se ficaram com dúvidas mandem nos comentários abaixo, se curtiram o video deixem um joinha, |
| 1:13:19 | assinem o canal e compartilhem o video pros seus amigos. A gente se vê, até mais. |
