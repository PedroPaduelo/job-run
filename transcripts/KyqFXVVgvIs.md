# Tornando sua App Web Mais Rápida! | 4 Técnicas de Otimização

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=KyqFXVVgvIs
- **Duração:** 49:02
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Hoje vai ser um tema bem complicado de acompanhar,  mas é pra vocês programadores iniciantes fazendo |
| 0:07 | cursos superficiais ou aprendendo a fazer suas  primeiras aplicações Web. O objetivo é tentar |
| 0:12 | explicar qual a diferença do seu app que acabou de  conseguir fazer subir na sua máquina depois de ver |
| 0:18 | alguns tutoriais e o que se faz em aplicações  de empresas de verdade como Amazon ou Mercado |
| 0:23 | Livre da vida. Por que o ecommerce que você fez  passo a passo assistindo um video no YouTube |
| 0:27 | não se parece com nada com uma aplicação de  verdade? Qual a diferença? Vamos entender. |
| 0:36 | (...) O que vou mostrar hoje existe detalhado em  diversos tutoriais, blog posts, documentação, |
| 0:42 | pra cada framework web. Eu poderia mostrar  exatamente qual o jeito que se faz em |
| 0:48 | Ruby on Rails, ou em Spring Boot, mas eu quero  que o foco não seja a linguagem ou framework, |
| 0:52 | mas sim os conceitos. Em outro episódio talvez  explore um pouco mais no nível do código, |
| 0:58 | mas pra hoje os conceitos são mais importantes do  que o código em si, que você pode achar facilmente |
| 1:01 | no Google. Tudo que eu disser aqui é válido  pra qualquer framework web. Não existe nada |
| 1:07 | que uma linguagem ou framework faça que outra  também não faça. Muita gente pensa que o segredo |
| 1:12 | é escolher a linguagem certa, mas não, é saber  como as coisas funcionam além do passo a passo. |
| 1:17 | Vamos recapitular rapidinho. Você abre seu  navegador e chama amazon.com.br. O navegador |
| 1:23 | empacota esse pedido no que chamamos de  um HTTP Request, uma estrutura de dados |
| 1:28 | que segue o protocolo HTTP. Esse pacote sai  da sua máquina via rede, cai na internet, |
| 1:32 | como expliquei nos episódios sobre redes, e chega  até um dos servidores da Amazon. Seja lá no que é |
| 1:38 | feito a aplicação web deles, possivelmente  Java, recebe essa requisição. Ele monta a |
| 1:42 | página HTML, empacota num HTTP response, de  resposta, e devolve pela mesma conexão de |
| 1:47 | volta pro seu navegador que, finalmente,  renderiza a homepage deles pra você ver. |
| 1:53 | Se abrir o Developer Tools e ir na aba de  Rede dá pra ver exatamente o cabeçalho do |
| 1:57 | pacote de requisição aqui, olha só o endereço  que pedimos e outros detalhes como que navegador |
| 2:02 | está usando. E em seguida temos o pacote  de resposta, que contém um cabeçalho com |
| 2:06 | um código de resposta 200, que significa  que deu tudo certo e no corpo vem o HTML. |
| 2:12 | Se estiver estudando front-end ou mesmo se baixar  um template pré-pronto, acho que todo estudante |
| 2:17 | assistindo aqui consegue imaginar fazendo essa  página em Laravel, Express, Spring, Django |
| 2:23 | ou Rails. Basta ter um banco de dados qualquer  seja em MySQL ou Postgres ou Mongo, montar o |
| 2:30 | HTML e devolver. Um pseudo código seria mais ou  menos assim: um template HTML, e uma lógica que |
| 2:35 | faz select na tabela de produtos, pega os 10 ou  20 primeiros, e monta a lista de produtos em HTML. |
| 2:41 | Qualquer um que tenha assistido qualquer  curso online sabe fazer até aqui, |
| 2:46 | certo? Se for uma aplicação em Rails você  sobe ela com o comando `rails server`, |
| 2:49 | se for Django sobe com `python manage.py  runserver`, se for express pode subir com |
| 2:55 | `npm run dev` ou seja lá como chamou a task. Se  for Laravel vai subir com `php artisan serve`. |
| 3:01 | Se for Spring vai subir com `gradlew bootRun`. Se  for Elixir Phoenix vai subir com `mix phx.server`. |
| 3:08 | Todo framework tem uma forma de iniciar o  servidor web que vai servir a aplicação. |
| 3:12 | Se funciona assim na sua máquina, provavelmente  já imaginou que bastaria então criar um servidor |
| 3:18 | remoto na DigitalOcean, Linode, AWS, Azure,  instalar a linguagem, clonar o código fonte |
| 3:24 | do seu projeto e executar o mesmo comando no  servidor, e pronto, tá terminado né? Você já é |
| 3:31 | um programador web. Fácil. Basta agora registar  um domínio, apontar pra esse servidor e pronto, |
| 3:36 | seu site está no ar. E sim, esse é o jeito  errado de fazer. Agora que a coisa começa. |
| 3:39 | Já notou que quando sobe uma aplicação web na sua  máquina, o framework costuma subir numa porta como |
| 3:45 | 3000 ou 4000 ou 8080? Tudo menos porta 80? Mas  acho que até o mais iniciante, ou se assistiu meus |
| 3:51 | videos de rede, sabe que o navegador, por padrão,  manda requisições HTTP na porta 80 ou 443 dos |
| 3:57 | servidores. Então porque o framework já não deixa  sua aplicação rodando na porta 80 direto? Dois |
| 4:02 | motivos. Primeiro porque pra subir na porta 80  precisa ter privilégios de administrador, daí você |
| 4:08 | seria obrigado a subir usando o comando `sudo`  toda hora, o que não é recomendado. Mas em segundo |
| 4:13 | lugar, porque nenhum framework web foi feito pra  rodar diretamente exposto na internet na porta 80. |
| 4:19 | Por exemplo. Tirando Java e Elixir, que são  linguagens com suporte a threads reais e |
| 4:25 | multi-thread, todas as linguagens de script,  Javascript, PHP, Python e Ruby, são feitos |
| 4:30 | pra rodar primariamente numa thread só. Sim,  eles tem um certo suporte a múltiplas threads, |
| 4:36 | mas via de regra, assuma que cada processo que  sobe, tem capacidade de saturar somente um dos |
| 4:40 | núcleos da CPU da sua máquina ou do servidor. Pode  fazer o teste, faça um código que fica sei lá, |
| 4:45 | fazendo um loop infinito fazendo qualquer coisa, e  rode. Agora abra um monitorador de CPU como htop, |
| 4:51 | e vai ver que sua máquina tem várias CPUs,  mas a maioria delas não está sendo usada. |
| 4:57 | Se for instalar num servidor digamos, de  4 núcleos, o certo é subir sua aplicação |
| 5:00 | web 4 vezes, um processo por núcleo. Talvez um  pouco menos, depende da carga, já falo disso, |
| 5:05 | mas só um processo vai desperdiçar sua CPU.  Um dos processos pode subir na porta 3000, |
| 5:11 | o segundo na porta 3001, a outra na 3002 e  assim por diante. Cada processo precisa dar |
| 5:16 | bind numa porta diferente. Mas aí fodeu, como  que o navegador do usuário vai saber com que |
| 5:22 | porta conectar? Você nunca teve que digitar  amazon.com.br dois pontos 3002, por exemplo. |
| 5:27 | Como eu disse, nenhum framework web  foi feito pra ser exposto direto na |
| 5:31 | internet. Processos web sempre ficam atrás de  um balanceador de carga, um outro programa como |
| 5:37 | HAProxy ou, o mais comum hoje em dia, NGINX.  Eles fazem um processo chamado Proxy Reverso. |
| 5:42 | Quem fica exposto na porta 80 ou 443 é um  NGINX. Os usuários mandam requisições pra |
| 5:49 | esse balanceador de carga que, por sua vez, sabe  que tem 4 processos nas portas 3000 a 3003 de |
| 5:55 | pé no servidor por trás e fazem round robin  ou alguma outra estratégia de balanceamento |
| 6:00 | pra mandar uma requisição pra cada processo,  tentando manter todos igualmente ocupados. |
| 6:05 | O usuário final não sabe que na primeira vez caiu  no processo na porta 3002, quando clicou num link |
| 6:11 | pedindo outra página, caiu na porta 3003 e  assim por diante, pra ele é transparente, |
| 6:17 | porque só enxerga o balanceador de cargas. E o  processo atrás, também não sabe que existe um |
| 6:20 | balanceador na frente, ele recebe a requisição  HTTP como se o usuário tivesse conectado direto |
| 6:26 | nele, como se faz na sua máquina local de  desenvolvimento quando pede "localhost:3000" |
| 6:32 | no navegador. Mas esse é o primeiro jeito mais  simples do que chamamos de escalabilidade. |
| 6:37 | Faz de conta que a lógica que você fez no seu  código, pra puxar produtos do banco de dados, |
| 6:42 | montar o HTML e tudo mais leve em média 100  milissegundos. Significa que esse um processo |
| 6:48 | que você subiu na porta 3000 tem capacidade  de responder até 10 requisições por segundo, |
| 6:54 | já que um segundo tem mil milissegundos. Se vier  mais do que 10 requisições no mesmo segundo, |
| 6:59 | os que vieram depois ficam numa fila esperando  o processo desocupar. Por isso subimos mais de |
| 7:05 | um processo na mesma máquina. Se subirmos  4 processos nos servidor, a grosso modo, |
| 7:10 | passamos a suportar 40 requisições por segundo.  É isso que chamamos de throughput do servidor, |
| 7:15 | que é a capacidade de quantas requisições  ela consegue responder por segundo. |
| 7:19 | Nenhum programador iniciante pensa nisso, mas  o código que você faz tem um limite de quanto |
| 7:25 | consegue responder por período de tempo. Não é  mágica. Quanto mais gente for usar sua aplicação, |
| 7:30 | ou subimos mais processos, em mais servidores,  ou damos um jeito de fazer a requisição ser |
| 7:36 | respondida mais rápido que 100 milissegundos  pra ter mais capacidade no mesmo processo. Por |
| 7:41 | isso que a gente tira tanto sarro de programador  copy-e-paste de stackoverflow, porque vocês que |
| 7:46 | fazem isso às cegas, estão adicionando código que  diminui a capacidade de resposta de cada processo. |
| 7:51 | Um proxy reverso como NGINX serve como primeira  barreira de segurança. Ele é um software mais |
| 7:57 | simples, melhor otimizado, mais seguro, e que  muda muito menos que o servidor web que vem |
| 8:03 | com seu framework, seja o Tomcat de Java ou  o Puma de Ruby ou o Cowboy de Elixir. É boa |
| 8:08 | prática esconder eles atrás do NGINX. Mas não  só isso, além de servir pra balancear a carga |
| 8:13 | de requisições entre vários processos, é nele  que também instalamos coisas como o certificado |
| 8:19 | SSL pra abrir conexões seguras via HTTPS. O  navegador fecha uma conexão encriptada com o |
| 8:25 | NGINX, mas atrás dele, o NGINX manda HTTP não  criptografado pra sua aplicação. Dessa forma, |
| 8:31 | sua aplicação não precisa se preocupar  em lidar com coisas com certificados, |
| 8:36 | o que facilita muito mais o gerenciamento  de infraestrutura pros devops. |
| 8:40 | Sem entrar em detalhes, no mundo Kubernetes esse  é o papel do controlador Ingress, que pode usar o |
| 8:46 | NGINX como proxy reverso também. Em resumo, uma  aplicação de verdade vai ter NGINX balanceando |
| 8:52 | carga pra múltiplos processos da sua aplicação  web, possivelmente em múltiplos servidores. Só |
| 8:57 | que mesmo NGINX também não escala infinitamente.  E se meu balanceador de carga estiver no limite? |
| 9:03 | Tem vários jeitos de resolver isso e um deles é  direto no DNS. Quem assistiu meus videos de rede |
| 9:08 | vai lembrar que quando pedimos pro DNS resolver  um domínio, o DNS devolve um endereço IP. Esse |
| 9:14 | é o endereço IP pro servidor que tem o NGINX ou  equivalente. Mas no caso de serviços muito grandes |
| 9:20 | como Google ou Amazon, eles devolvem múltiplos  endereços IPs. E essa é a razão: porque tem vários |
| 9:26 | servidores de balanceamento de carga. Inclusive  tem um conjunto de servidores específicos pra |
| 9:32 | cada região geográfica. Se pedirmos amazon.com do  Brasil, vai voltar um conjunto de endereços pra |
| 9:36 | servidores daqui. Mas se estiver no Japão, vai  receber um conjunto de endereços diferentes pra |
| 9:42 | servidores da Ásia. É assim que uma Amazon  da vida consegue escalar em nível mundial. |
| 9:45 | Lógico, pra maioria de nós, um único servidor  de NGINX costuma ser mais que suficiente, |
| 9:50 | mas é bom saber que essas técnicas existem. E  aí você pensa. Beleza, entendi. Se eu fiz uma |
| 9:55 | homepage que responde em 100 milissegundos, e eu  subir 4 processos num droplet da DigitalOcean, |
| 10:01 | significa que consigo responder até 40 requisições  por segundo. Se ver no Analytics que minha |
| 10:06 | campanha de marketing deu certo e o tráfego  está subindo pra 80 requisições por segundo, |
| 10:11 | das duas uma, ou eu faço upgrade na máquina pra  ter 8 núcleos pra subir o dobro de processos, |
| 10:16 | ou subo um segundo servidor pra subir 4  processos novos. Reconfiguro o NGINX pra |
| 10:22 | saber que existem esses 4 novos processos e  ele passa a balancear a carga pra lá também. |
| 10:27 | Quando fazemos upgrade da mesma máquina, chamamos  de "escalabilidade vertical", quando colocamos |
| 10:33 | máquinas novas embaixo do balanceador de carga,  chamamos de "escalabilidade horizontal". E falando |
| 10:38 | desse jeito parece simples. Se o tráfego  aumentar pra 400 requisições por segundo, |
| 10:44 | é só subir 10 servidores embaixo do NGINX certo?  Só que não, quem dera fosse fácil assim. O que |
| 10:49 | vou falar agora tem muitas nuances por causa do  comportamento de múltiplas threads, mas vou tentar |
| 10:55 | simplificar pra ficar fácil de visualizar,  só entenda que é mais complicado que isso. |
| 10:58 | Lembram do video de Heroku? Eu ainda  recomendo como melhor lugar pra iniciar, |
| 11:03 | mesmo tendo cancelado os planos gratuitos. Pra  só brincar, precisa achar outro lugar, mas se |
| 11:08 | pretende colocar um ecommerce no ar e queria  colocar num plano gratuito, você precisa repensar |
| 11:13 | seu negócio. Uma aplicação que sequer consegue  pagar a própria infraestrutura, tem problemas |
| 11:18 | muito mais sérios do que custo de máquina. Uma das  vantagens é que essa parte toda de balanceador de |
| 11:24 | carga NGINX é transparente. Eles gerenciam,  você só precisa mandar subir os processos no |
| 11:30 | servidores deles, que eles chamam de dynos. E  o balanceador é automaticamente reconfigurado. |
| 11:35 | Tem uma calculadora online que vai nos ajudar  a ilustrar o que eu quero dizer aqui. Olha só. |
| 11:40 | Digamos que estamos naquele cenários de 400  requisições por segundo. Num dyno pequeno de |
| 11:45 | 4 cores, a recomendação é subir 3 processos.  Se pegar um dyno maior o recomendado é subir |
| 11:50 | o total de cores menos um. Lembra que o  sistema operacional também precisa de um |
| 11:54 | pouco de CPU pra gerenciar o que roda por  cima, por isso não queremos saturar tudo só |
| 11:59 | com nossa aplicação. Você tem que saber pensar  essas coisas. Então vamos subir 3 processos, |
| 12:04 | só que aí, pra responder 400 requisições  por segundo, 10 requisições por processo, |
| 12:09 | dividido por 3 processos, vamos  precisar de pelo menos 13 dynos. |
| 12:13 | Eu disse que linguagens de scripts lidam  com múltiplas threads diferente de Java |
| 12:18 | ou Elixir. Eles tem threads, só não  conseguem rodar todas em paralelo o |
| 12:22 | tempo todo. Eu falo sobre isso no episódio  sobre concorrência e paralelismo. Mas na |
| 12:27 | prática podemos configurar cada processo  pra aceitar, digamos, 5 threads, ou seja, |
| 12:31 | 5 conexões simultâneas. Não pensem muito sobre  isso agora. Mas o importante é o número a seguir: |
| 12:37 | 5 conexões a banco de dados no pool de  conexões. O que diabos é um pool de conexões? |
| 12:43 | Conexão a banco de dados é uma operação que  custa recursos do banco de dados. Não dá |
| 12:48 | pra ficar abrindo conexão infinitamente.  Estão notando um tema no video de hoje: |
| 12:52 | nada é infinito em programação. Você como  iniciante só não sabe disso porque só testando |
| 12:57 | seu programinha do tutorial sozinho é muito  pouco pra chegar no limite. Mas na internet, |
| 13:02 | com milhares de usuários de verdade usando,  toda hora vai esbarrar em limites e sua função, |
| 13:08 | como programador, é saber como gerenciar esses  limites. Pensa assim, cada sessão de uma conexão |
| 13:13 | no banco de dados precisa ser registrada em  algum lugar. Esse registro vai gastar memória |
| 13:18 | e CPU. Quanto mais conexões, mais memória e  CPU vai se gastar pra gerenciar todo mundo. |
| 13:23 | Seja o processo da sua aplicação  web ou o processo do banco de dados, |
| 13:27 | sem um limite, uma de duas coisas  vai acontecer: ou vai acabar memória, |
| 13:31 | ou vai acabar processamento. Mas um dos  dois vai acabar. Quando isso aconteder, |
| 13:36 | tudo trava e pára de responder. Não queremos  que isso aconteça, então configuramos limites, |
| 13:40 | pra conseguirmos pelo menos ter processamento pra  rejeitar e devolver erro caso um dos limites seja |
| 13:46 | atingido. Antigamente a gente deixava rodando até  passar do limite e era o caso onde páginas na web |
| 13:51 | ficavam com ampulheta de "carregando" por minutos,  sem resposta. Hoje tomamos um timeout pelo menos. |
| 13:56 | Uma das técnicas que adotamos lá na virada  do século foi pool de conexões. Digamos que |
| 14:02 | minha aplicação Java mal feita saísse abrindo  conexões e esquecendo de fechar elas. Rapidamente |
| 14:07 | o limite do banco ia estourar. Se o mesmo banco  fosse usado por várias aplicações diferentes, |
| 14:12 | bastava uma mal feita, pra saturar todas  as conexões. Em vez disso limitamos a |
| 14:18 | quantidade que cada aplicação pode usar. A  aplicação deixa de conectar direto no banco, |
| 14:23 | em vez disso ela se conecta num pool, e esse pool  mantém um certo número fixo de conexões abertas. |
| 14:29 | No exemplo da calculadora, cada processo  da sua aplicação pode ser configurado com |
| 14:34 | 5 conexões. Se tiver 3 processos no  mesmo dyno, cada dyno vai consumir |
| 14:39 | 15 conexões com o banco. Se o banco suportar  até 150 conexões, dá pra subir até 10 dynos, |
| 14:46 | em teoria. E isso deveria ser suficiente. Se  cada processo aceita até 5 threads simultâneas, |
| 14:51 | e cada thread precisar de uma conexão, vai ter  pelo menos 1 pra cada. Quando a thread terminar |
| 14:57 | de usar a conexão, ela devolve pro pool,  pra poder ser reusada por outra thread. |
| 15:02 | O pool faz meio que o papel do NGINX entre  o navegador do usuário e sua aplicação, |
| 15:07 | é um intermediário de balanceamento. No caso, a  função do pool de conexões é permitir múltiplas |
| 15:13 | threads da aplicação reusar conexões já existentes  em vez de toda hora tentar abrir novas conexões. E |
| 15:19 | com isso conseguimos controlar a quantidade máxima  de conexões sendo utilizadas ao mesmo tempo. |
| 15:25 | Serviços como o Heroku Posgres ou AWS RDS tem  diversos planos de tamanhos e preços diferentes. |
| 15:31 | Um iniciante pensa num plano de banco de dados  mais como dólares por capacidade de armazenamento |
| 15:37 | de dados. Sei lá, 10 dólares pra 1 terabyte, 100  dólares pra 10 terabytes ou algo assim. Mas mais |
| 15:44 | importante que total de armazenamento é qual  o máximo de conexões que cada plano oferece. |
| 15:50 | Um plano básico de Heroku Postgres, pode  oferecer, digamos 120 conexões no máximo. |
| 15:54 | Ou seja, de acordo com a simulação que fizemos na  calculadora. Subindo minha aplicação em 13 dynos, |
| 16:00 | com 5 threads cada, com um pool de 5 conexões,  13 vezes 5 vezes 5, significa que preciso de |
| 16:06 | no mínimo 195 conexões pro banco de dados. Ou  seja, um plano básico de 120 conexões máximas, |
| 16:12 | já não vai dar. Se realmente tiver as tais  400 requisições por segundo, das duas uma, |
| 16:18 | ou eu pago mais e aumento meu plano  de Postgres, ou uso um paliativo que |
| 16:22 | é colocar um gerenciador de conexões  como o pgbouncer na frente do Postgres. |
| 16:28 | A grosso modo funciona assim. Antes, na sua  máquina, sua aplicação conectava direto no |
| 16:32 | banco de dados. Não fazemos mais isso, todo  framework decente já trás um pool de conexões |
| 16:37 | pra você usar e é ele quem se conecta no banco.  Mas podemos colocar uma camada a mais e o pool |
| 16:42 | também não fala mais direto com o banco e sim com  outro intermediário, o pgbouncer. O pgbouncer vai |
| 16:48 | usar no máximo uns 75% do máximo de conexões  do banco, nesse exemplo seriam 90 conexões. Mas |
| 16:54 | ele tem capacidade de deixar até 10 mil pedidos de  conexão pendurados em cima dele antes de dar erro. |
| 16:59 | Significa que não vamos tomar erro de  falta de conexão, mas as requisições |
| 17:05 | precisam esperar mais tempo e se ficar pesado  demais, tomar timeout de qualquer jeito, |
| 17:08 | só estamos tentando esticar um pouco mais.  É como se fosse a fila de um Poupatempo ou |
| 17:14 | cartório da vida. Só tem 90 atendentes, mas tem  195 pessoas na fila. As primeiras 90 são atendidas |
| 17:20 | imediatamente, o pgbouncer são as cadeiras  de espera pras outras 105 ficarem esperando |
| 17:26 | com a senha pra serem atendidos. |
| 17:29 | A solução de todos os limites em  programação é a mesma de uma repartição |
| 17:33 | pública: fazer fila e esperar a vez. Só que isso é um paliativo. Significa que se antes  cada requisição era respondida em até uns 100 |
| 17:39 | milissegundos, agora pode levar mais tempo, talvez  120 milissegundos. Isso muda a conta toda que |
| 17:45 | fizemos até agora. Se o número de processos por  dyno é fixo, precisamos subir mais dynos. Mas se |
| 17:51 | subirmos mais dynos e carregarmos mais processos,  isso vai pressionar mais o pool de conexões, |
| 17:57 | que vai exigir mais conexões ao banco de dados.  Estão ententendo como as coisas não são fáceis? |
| 18:00 | Existem várias formas de resolver isso. Chegamos  ao limite do que só configurando infraestrutura |
| 18:06 | pode fazer. Será que não dá pra resolver isso no  código? Opa, talvez sim. Dos 100 milissegundos que |
| 18:12 | sua aplicação web leva pra montar a homepage, 50  é gasto só mandando a query de select pro banco, |
| 18:17 | recebendo as linhas de resposta e processando  esses dados. Mas pensa comigo, no seu ecommerce |
| 18:24 | pequeno, literalmente todo mundo que pedir a  homepage vai acabar vendo os mesmos produtos, |
| 18:28 | não vai? Se vieram 400 requisições de  homepage, você fez 400 pesquisas no banco |
| 18:33 | de dados que ficou respondendo 400 vezes  a mesma coisa. Isso é um puta desperdício. |
| 18:38 | Todo framework web que se preza já  tem embutido recursos pra fazer cache. |
| 18:42 | Cache é guardar a última resposta pra não  reprocessar tudo de novo a mesma coisa. Se |
| 18:48 | fizermos a implementação mais simples e tosca,  fazemos um código pro seguinte: procure por |
| 18:53 | um arquivo local chamado "cache-homepage".  Se não tiver, faça a mesma coisa de antes: |
| 18:58 | solicite uma conexão ao banco pro pool,  mande o select pra fazer a pesquisa, |
| 19:03 | receba as linhas de resposta, processe e monte o  HTML baseado nos produtos recebidos. Mas agora, |
| 19:08 | antes de devolver pro usuário, grave um  arquivo local chamado "cache-homepage". Pronto. |
| 19:13 | Na segunda requisição por homepage que vier,  agora ele vai encontrar esse arquivo, podemos |
| 19:18 | checar que esse arquivo não é mais velho que 5  minutos, faz de conta, e pulamos toda a parte de |
| 19:24 | falar com o banco de dados, devolvendo direto o  que estiver nesse cache. Entenderam? Vamos fazer |
| 19:30 | as contas. Digamos que subimos só 8 dynos, com 3  processos cadas, 5 threads e 5 conexões no pool, |
| 19:35 | o que vai consumir todas as 120 conexões  que o banco Postgres que contratei suporta |
| 19:41 | no máximo desse plano. Daí começa a vir  requisições. Digamos que o NGINX balanceou |
| 19:45 | perfeitamente e as primeiras 8 requisições que  chegaram mandou um pra cada um dos 8 dynos. |
| 19:51 | Em cada dyno, o processo que respondeu primeiro  fez conexão com o banco e deixam esse arquivo |
| 19:55 | "cache-homepage" pra trás. Agora chegou o resto  das 392 requisições durante 1 segundo. Sabe |
| 20:01 | quantas conexões pro banco foram abertas nesse  segundo? Antes precisava de 195. Agora precisou |
| 20:07 | de zero. Sacaram? Zero! Porque toda requisição que  veio depois que o arquivo de cache foi gravado, |
| 20:13 | leram direto desse arquivo e não  precisaran conectar nem no pool, |
| 20:18 | nem no banco. E se arbitrariamente  estabelecermos que a lista de produtos |
| 20:21 | não corre risco de sofrer alterações  durante 5 minutos, por 5 minutos, |
| 20:27 | essa homepage passa a consumir  zero conexões com o banco de dados. |
| 20:30 | Esse é o tipo de otimização simples com alto  impacto. Antes precisávamos de 195 conexões com o |
| 20:36 | banco por segundo, agora precisamos de  não mais que uns 10 a cada 5 minutos. |
| 20:42 | E como 50 milissegundos por requisição  era gasto só nesse trabalho com o banco, |
| 20:46 | significa que na média eu diminuí o tempo de cada  requisição pela metade! Sem trocar linguagem, |
| 20:52 | sem trocar framework, sem reescrever a aplicação.  Eu poderia diminuir pela metade a quantidade de |
| 20:58 | dynos pra responder as mesmas 400 requisições  por segundo. Ou deixo como está e posso fazer |
| 21:03 | mais marketing pra dobrar o tráfego e ainda  consigo responder todo mundo com folga. |
| 21:08 | Vou insistir no conceito pra martelar  na cabeça de vocês. Trocar de linguagem |
| 21:12 | ou framework, sair de Python e ir pra  Javascript, ou sair de Dotnet e ir pra Java, |
| 21:17 | sair de Laravel e ir pra Express, ou qualquer  coisa assim, pode dar alguma diferença pequena |
| 21:23 | em algumas partes. 5%, 10%. Mas técnicas  como essa de cache, colocadas em lugares |
| 21:29 | inteligentes de alto tráfego, podem economizar  recursos em ordens de grandeza, 5x, 10x, |
| 21:34 | ou até mais. É esse o tipo de otimização  que vale a pena fazer. Gastar semanas, |
| 21:39 | pra ter ganho de 1%, 2%, não vale a pena. Gastar  horas pra ganhar 5x, 10x, isso sim vale a pena. |
| 21:46 | Eu falei arquivo só pra explicar o conceito mais  fácil, mas na realidade não usamos arquivos pra |
| 21:52 | cache. Usamos um segundo banco de dados  mais leve, como um Memcache ou Redis. São |
| 21:57 | bancos que não tem as garantias de um  Postgres de atomicidade, consistência, |
| 22:02 | integridade ou durabilidade, ou seja, pode ser  que eu mande gravar e ele não grave um registro, |
| 22:06 | pode ser que grave mas quando for ler não  está lá ainda, pode ser que grave duas vezes. |
| 22:12 | Se fosse um banco de dados de pagamento isso seria  um problema. Mas pra cache não. Não tem problema, |
| 22:16 | porque a lógica da aplicação que fizemos  é: se existir no cache e não expirou, |
| 22:21 | usa, se não existir, conecta no banco,  remonta o HTML e grava um novo cache. |
| 22:26 | Não ter essas garantias significa que o Memcache  ou Redis conseguem executar muito mais rápido |
| 22:31 | e aceitam uma ordem de grandeza mais conexões  simultâneas. Por isso configuramos um Memcache, |
| 22:37 | que é um serviço barato, e fazemos essa lógica  de cache pra ler e gravar do memcache em vez de |
| 22:42 | um arquivo. A desvantagem é que precisamos  pagar mais um serviço. Mas ele é barato e |
| 22:47 | economiza mais ainda os recursos do banco,  porque antes cada dyno precisava gerar seu |
| 22:51 | próprio arquivo de cache, então quanto mais  dynos, mais continua precisando puxar do |
| 22:56 | banco na primeira vez. Agora só precisa uma  vez e todos os dynos lêem do mesmo memcache. |
| 23:01 | Memcache como o próprio nome diz, é Memory Cache.  É literalmente um cache em memória. Por isso que |
| 23:07 | quando o servidor de memcache reinicia, perde  tudo que tinha armazenado. Mas não tem problema, |
| 23:12 | porque toda aplicação que depende do cache  sabe como reaquecer esse cache, ou seja, |
| 23:16 | reconstruir os dados que precisa em cache  pra próxima requisição. Um Redis é parecido, |
| 23:22 | mas com a vantagem que também  grava em disco, daí se reiniciar, |
| 23:26 | ele sabe reaquecer sozinho. Ele é pouca coisa  mais lento mas tem durabilidade. De novo, |
| 23:31 | é um trade-off. Em ambos os casos, significa que  não precisamos aumentar o plano de banco de dados. |
| 23:37 | Mas a coisa não termina aqui. Isso foi  só Hello World do Hello World. Bancos de |
| 23:42 | dados é outro assunto infinito que daria pra  fazer um canal inteiro só sobre esse assunto, |
| 23:48 | mas o importante é que todo banco de dados tem  perfis de performance de escrita e de leitura. |
| 23:52 | Um banco de dados relacional como MySQL, Postgres,  SQL Server, Oracle, costuma ter perfil de leitura |
| 23:59 | rápida mas escrita lenta, justamente porque tem  como característica as tais garantias ACID que |
| 24:05 | falei antes. É lento pra escrever, porque se ele  diz que escreveu, é porque escreveu e escreveu |
| 24:11 | garantidamente correto. Ninguém vai receber um  pedido duplicado, ou ser cobrado duas vezes, |
| 24:15 | ou deixar de receber porque deu erro  na gravação e ninguém ficou sabendo. |
| 24:20 | Os tais bancos NoSQL, tem outras  características. Um Redis, Mongo, |
| 24:23 | Cassandra, te dão menos garantias, por isso  podem ser mais rápidos pra escrever. Eu já |
| 24:28 | fiz um video sobre NoSQL, depois assistam.  Mas quando faz sentido ser rápido mas não |
| 24:33 | ter garantias? Pensa um tipo de aplicação que se  perder um registro não faz diferença. Por exemplo, |
| 24:38 | um Google Analytics. Todo site que tem configurado  vai mandando pro Analytics cada clique e cada |
| 24:44 | visita dos usuários no site. Se uma dessas  visitas se perder e não registrar no Analytics, |
| 24:48 | não vai fazer diferença. Ou seu Apple Watch,  que fica monitorando batimentos cardíacos |
| 24:53 | a cada X segundos. Ele manda pro servidor  pra ir montando um perfil da sua saúde. Se |
| 24:58 | um desses batimentos se perder e não gravar,  não importa, o importante é a média ao longo |
| 25:04 | do tempo. São casos onde não ter as garantias  ACID permite usar um outro banco mais rápido. |
| 25:09 | Um MongoDB pode ser quase ACID se configurar  pra esperar pra dar ok na escrita, |
| 25:15 | pra garantir que realmente gravou. Só que aí  perdemos a característica de ter escrita mais |
| 25:19 | rápida e vai ter que esperar de qualquer  jeito. Um Cassandra tem escrita atômica, |
| 25:24 | mas consistência eventual. Ou seja, até  garante que escreveu, mas se consultarmos |
| 25:29 | imediatamente talvezresponda que ainda não está  lá, porque a leitura caiu num outro node que ainda |
| 25:34 | não sincronizou. Isso é útil quando o que queremos  é replicação do banco em múltiplos servidores. |
| 25:40 | Não existe um tamanho que serve tudo.  Por isso que pra decidir qual banco usar, |
| 25:45 | precisa entender a diferença nesses perfis de  todos em detalhes. Não vai ter uma resposta |
| 25:49 | fácil pra tudo. Mas no geral, pra grande maioria  da população que não é uma startup unicórnio, |
| 25:54 | você realmente só precisa de um banco de dados  relacional como Postgres sendo auxiliado por um |
| 26:00 | servidor de cache como Memcache ou Redis. Mais do  que isso e não é vendo um video que vai ajudar. |
| 26:05 | E mesmo quando falamos leitura. Existem leituras  simples, como puxar uma lista de produtos pra |
| 26:11 | montar uma página, e leituras complicadas que  é gerar um relatório das vendas do semestre |
| 26:16 | organizado por região e tudo mais, que cruza os  dados de todos os pedidos feitos no semestre, |
| 26:21 | com os dados de todos os clientes, e seja  lá quantas outras tabelas pa montar um |
| 26:26 | único relatóriozão. Quem entende de SQL é  aquela query com 500 joins, outer joins, |
| 26:31 | sub-selects. Se já trabalhou em algo assim,  já viu esse problema: quando seu ecommerce ou |
| 26:36 | sistema fica lento ou até pára de responder toda  vez que precisa gerar esses relatórios gigantes. |
| 26:42 | Uma coisa é uma pesquisa simples que  responde em poucos milissegundos. Outra |
| 26:45 | coisa são relatórios que podem levar  múltiplos segundos travando o banco |
| 26:48 | inteiro. E se você tiver um tráfego de  400 requisições por segundo, de repente, |
| 26:53 | todo mundo tendo que esperar na  fila até o relatório terminar, |
| 26:57 | e levar 10 segundos pra terminar, são 4000  requisições que estamos deixando de responder, |
| 27:01 | centenas de pessoas tomando timeout no navegador  e ficando irritados que o site não responde. |
| 27:06 | Por isso que num sistema de verdade, dividimos  essas coisas em múltiplos servidores. Temos o |
| 27:12 | banco principal, que está ocupado gravando pedidos  de pessoas de verdade e não pode ser interrompido |
| 27:17 | quando algum gerente pede um relatório gigante.  Por isso que em serviços como Heroku Postgres |
| 27:22 | ou AWS RDS tem fácil pra se gerar servidores  de réplica só pra leitura. É uma cópia que |
| 27:29 | pode estar até alguns segundos atrasado do banco  principal e que não deixa ninguém gravar nele, |
| 27:35 | mas como fica num servidor separado do banco  principal, mesmo se rodarmos coisas pesadas |
| 27:38 | nele, não interrompemos o tráfego do  site, que conecta em outro servidor. |
| 27:43 | Na verdade é bem comum ter um banco principal só  pra escrita e uma réplica só pra servir dados pra |
| 27:49 | montar as páginas do site, e outra réplica  exclusiva pra tarefas administrativas como |
| 27:54 | gerar relatórios. Quem fala que quer usar um  NoSQL porque bancos relacionais não escalam, |
| 27:59 | não sabem o que estão falando. Em escala  de empresas normais não-unicórnios, |
| 28:03 | não precisa. De novo, soluções exotéricas de  NoSQL só são necessários se você for o Netflix. |
| 28:08 | Mas pros resto da população, um banco de dados  tradicional relacional com réplicas de leitura, |
| 28:14 | já resolve a grande maioria dos problemas.  Lembra? Soluções simples de alto impacto |
| 28:20 | que não exige reescrever tudo.  É isso que sempre queremos. |
| 28:25 | Mas ainda temos um último problema de banco de  dados. Até que não é tão difícil ter réplicas só |
| 28:29 | de leitura. E eu digo só de leitura porque ter  replicação bi-direcional de leitura e escrita, |
| 28:34 | é pouco prático e só deve ser considerado  em situações especiais. No geral é melhor |
| 28:39 | ter um único servidor que concentra  todas as escritas e envia os dados pra |
| 28:43 | réplicas só de leitura. Mas isso  significa que em algum momento, |
| 28:47 | se o tráfego do site aumentar, numa situação  de semana de Natal, Black Friday da vida, |
| 28:51 | vai ter mais gente tentando gravar pedidos do  que o servidor principal consegue suportar. |
| 28:56 | Uma lógica comum numa página de checkout  de ecommerce é mais ou menos assim: |
| 29:00 | a lógica do carrinho de compras já checou  que tem disponibilidade dos produtos, |
| 29:05 | seu front-end já coletou os dados de entrega, os  dados de pagamento, e agora iniciamos a transação |
| 29:10 | pra gravar o pedido. Dentro da lógica dessa  transação, conectamos com o meio de pagamento, |
| 29:15 | seja MercadoPago, Paypal, ou o que for, e  esperamos responder ok. Se foi confirmado, |
| 29:21 | terminamos a transação e fechamos o commit  na tabela do banco de dados e, finalmente, |
| 29:26 | respondemos o HTML pro usuário com o número do  pedido que acabamos de gerar. Durante esse período |
| 29:31 | todo o navegador do usuário ficou pendurado,  com ampulhetinha rodando, esperando carregar. |
| 29:36 | Num dia normal de pouco movimento,  ou na sua máquina de desenvolvimento, |
| 29:40 | isso funciona perfeitinho. Mais um exemplo de  coisa que parece simples só porque você não tem |
| 29:46 | noção da realidade. Mas agora imagina. Você não  controla coisas externas como o meio de pagamento. |
| 29:52 | E num dia de Black Friday, ele também pode ficar  mais lento. Num dia anormal, tem um monte de gente |
| 29:56 | pendurado nos seus servidores, todo mundo tentando  dar checkout nos pedidos. O banco de dados tem |
| 30:02 | limite de conexões, tem limite de transações, e  chega uma hora que mesmo tendo fila, o tempo é tão |
| 30:08 | longo que ele é obrigado a começar a desconectar  as pessoas pra conseguir trabalhar. É quando o |
| 30:14 | cartório tá tão cheio que não cabe mais gente  dentro. O que você faz, manda todo mundo embora? |
| 30:17 | Parte disso já expliquei no  video sobre o Ingresso.com. |
| 30:21 | Onde resolvemos a primeira parte do  problema, na parte da frente da loja, |
| 30:25 | que é dar senha pras pessoas e manter uma  fila muito mais longa do tipo "volta mais |
| 30:30 | tarde pra ver se já chegou sua vez". E  pelo menos o navegador dos usuários não |
| 30:35 | ficam ativamente pendurados nos servidores web,  consumindo recursos. Eles podem desconectar, |
| 30:40 | e uma lógica no navegador conecta de tempos em  tempos pra checar ou usa protocolos apropriados |
| 30:45 | pra isso como Web Sockets. Mas e depois que as  pessoas estão na loja e querem pagar o pedido? |
| 30:51 | E, pra surpresa de ninguém, não é diferente,  a solução é fazer mais filas. Muita gente |
| 30:56 | associa o número do pedido com o ID da  gravação da linha na tabela que o banco |
| 31:02 | de dados auto-incrementa e devolve quando deu  tudo certo na gravação. Mas se já estamos no |
| 31:07 | cenário onde passamos do limite físico de  gravações por segundo que o banco aguenta, |
| 31:12 | não podemos depender disso. O correto é ter  uma API ou um microserviço cuja única função |
| 31:16 | é me dar um número que é garantidamente único e  não duplicado. Tem várias formas de fazer isso. |
| 31:21 | Mas só entenda o conceito que desassociamos o  número do pedido do ID da tabela de pedidos. |
| 31:28 | Em seguida, não gravamos mais o pedido direto no  banco. Em vez disso pegamos os dados do pedido, |
| 31:34 | com esse número e jogamos num serviço de  fila. Já falo disso, mas ao fazer isso, |
| 31:39 | quando o usuário preenche seus dados no  formulário de checkout e clica em pagar, |
| 31:43 | imediatamente devolvemos a página  HTML de resposta dizendo "obrigado, |
| 31:48 | o número do seu pedido é XYZ, e assim que  confirmarmos você receberá um e-mail". E pronto, |
| 31:52 | liberamos essa pessoa pra ir embora, e ela  pára de consumir recursos no nosso sistema |
| 31:58 | tendo que ficar esperando. É o equivalente  de fazer a pessoa ir embora do cartório ou |
| 32:03 | correios e dar espaço pra outra pessoa entrar  logo, fazendo a fila andar mais rápido. |
| 32:07 | Existem vários serviços de fila. Podemos usar  o próprio Redis que usamos pra cache pra ser |
| 32:13 | o gerenciador da fila. Podemos usar um serviço  feito exclusivamente pra filas como o RabbitMQ |
| 32:18 | ou Apache Kafka ou ActiveMQ ou vários desses MQ  que significa Message Queue ou Message Brokers. |
| 32:25 | A AWS oferece o ActiveMQ ou RabbitMQ como serviço  ou podemos usar o pŕoprio dele que é o AWS SQS de |
| 32:33 | Simple Queue Service. Todos são Queues, ou  filas. A vantagem de serviços de fila é que |
| 32:39 | podemos ficar enviando milhares de mensagens  pra eles enfileirarem, que vai ser muito mais |
| 32:42 | rápido e eficiente do que gravar no nosso banco  de dados que já tá no limite de processamento. |
| 32:48 | Eu falei Redis, ele funciona direitinho, mas não  é tecnicamente feito pra ser uma fila de verdade. |
| 32:52 | Protocolos de fila de verdade, como implementado  num RabbitMQ tem garantias como um banco de dados |
| 32:58 | relacional tem ACID. Um serviço de fila de  verdade precisa nos dar garantia de entrega, |
| 33:03 | ou seja, se ele responde que entregou, precisa  ter entregue de verdade, e não pode duplicar |
| 33:08 | a mensagem ou coisa assim. Além disso um  erro que alguns cometem é criar uma tabela |
| 33:13 | no banco de dados pra usar como fila. Mas se  estamos querendo justamente tirar pressão do |
| 33:17 | banco de dados usando uma fila, não faz  nenhum sentido botar a fila no banco. |
| 33:22 | Uma vez na fila, daí nós programadores  precisamos fazer uma segunda aplicação separada, |
| 33:28 | que chamamos de workers. Workers são  programinhas curtos que ficam de pé |
| 33:32 | esperando alguma coisa aparecer numa fila  dessas. Eles ficam escutando essas filas, |
| 33:37 | normalmente falamos que assinam um canal  dessas filas. Uma fila pode ter um canal |
| 33:42 | de recebimento de pedidos, outro canal de envio  de emails, canal de realizar pagamentos. Cada |
| 33:47 | canal vai ter um worker que sabe o que fazer com  a mensagem que tiver naquele canal. O Worker que |
| 33:53 | assina o canal de realizar pagamento sabe  como se conectar com o meio de pagamento. |
| 33:58 | A vantagem é que separamos as atividades que  não controlamos, como confirmação de pagamento, |
| 34:03 | e não precisamos deixar o usuário pendurado  esperando uma resposta. Mandamos o usuário |
| 34:08 | embora o quanto antes, e mesmo que o meio de  pagamento resolva demorar bem mais que o normal, |
| 34:14 | tudo bem, só vamos demorar um pouco  mais pra mandar o email de confirmação |
| 34:16 | pro usuário. E não precisamos torturar o  nosso banco de dados com várias transações |
| 34:22 | abertas penduradas que começam a  dar timeout e rollback sem parar. |
| 34:27 | De novo, cada framework web moderno tem  sua forma de lidar com isso que chamamos |
| 34:31 | de asynchronous jobs. No Ruby on Rails tem  ActiveJob, que é uma classe que herda de |
| 34:36 | ApplicationJob e implementa um método chamado  `perform`. Na configuração geral dizemos que |
| 34:42 | vai escutar de um Redis ou outro serviço de fila.  No Node Express podemos usar a biblioteca Bull, |
| 34:48 | onde configuramos um objeto de Queue que também  diz de que fila consumir e os workers, que ele |
| 34:53 | chama de consumers, onde temos uma função chamada  `process` pra processar cada job que vier da fila. |
| 34:59 | Em Spring podemos integrar com Apache Kafka,  fazendo uma classe consumer com um método |
| 35:04 | `consume`. Em PHP o Laravel tem suporte nativo,  onde fazemos uma classe que herda de ShouldQueue |
| 35:10 | e implementa um método `handle`. Acho que  deu pra entender. E cada um tem estratégias |
| 35:15 | de como configurar esses workers, como fazer  deploy e tudo mais. Vocês precisam estudar a |
| 35:20 | documentação oficial. Em qualquer outro framework,  pesquise no google por "asynchronous jobs". |
| 35:25 | Mas claro, nem tudo são flores. Você poderia  pensar. "Boa, então é só eu pendurar 500 |
| 35:31 | workers atrás dessas filas que tudo  vai ser processado rapidinho então". |
| 35:35 | Mas não. Alguns desses workers, no final,  continuam precisando gravar coisas como o |
| 35:41 | pedido na tabela do banco de dados principal.  Eles podem demorar mais do que a aplicação web, |
| 35:46 | porque não tem um usuário pendurado esperando,  mas o pedido final precisa ser consolidado no |
| 35:50 | banco e aí caímos de novo no problema de máximo  de conexões e processamento do servidor de banco. |
| 35:56 | Se voltarmos naquela calculadora do Heroku, |
| 35:59 | note que embaixo tem uma parte que eu não  tinha mostrado. O Heroku suporta subir workers, |
| 36:04 | mas cada worker vai consumir conexões no banco  também. Se subir 10 dynos, com 1 processo cada, |
| 36:10 | 10 threads por processo e 10 conexões no pool,  vai precisar de 100 conexões no banco de dados, |
| 36:15 | além das conexões que já precisava  pros dynos de web. Por isso, de novo, |
| 36:20 | não é mágica. Temos que ficar balanceando quantos  processos web versus quantos processos workers |
| 36:26 | queremos ter pra um certo orçamento que  estou disposto a pagar pela infraestrutura. |
| 36:31 | Sacaram? Organizar esses recursos é parecido  com jogar RPG, quantos pontos queremos de vida, |
| 36:36 | quantos pontos queremos de mágica, quanto quero  gastar em upgrade de arma. Não adianta ter a |
| 36:41 | melhor arma, mas pouca vida. Configurar  arquitetura web é que nem jogar RPG. |
| 36:46 | Mas como começamos a colocar cache na camada  web, o que diminui a necessidade de dynos web, |
| 36:51 | sobra mais conexões pra colocarmos mais  workers. E é assim que vamos evoluindo |
| 36:57 | de uma aplicação de um único processo  que roda na sua máquina pra uma que |
| 37:00 | divide os recursos e nos dá oportunidades  de balancear onde queremos usar mais do que. |
| 37:06 | Vamos ver o que acabei de falar num  diagrama pra facilitar. Começamos assim: |
| 37:09 | uma caixinha que representa um  processo da nossa aplicação web, |
| 37:13 | aquela que você sobe na sua máquina com  comandos como `npm run dev` ou `gradlew |
| 37:18 | bootRun`. Esse processo vai configurado pra  conectar num banco de dados como Postgres. Seu |
| 37:25 | navegador se conecta direto nessa caixinha, via  `localhost:3000`. E na sua máquina tudo funciona. |
| 37:28 | Mas numa infraestrutura de verdade, como AWS,  Azure, Google Cloud ou Heroku que gosto de usar |
| 37:34 | de exemplo pela simplicidade, já começa que na  frente da caixinha da sua aplicação vai ter um |
| 37:40 | balanceador de carga, como um NGINX. É nele que  seu navegador vai se conectar quando digitar o |
| 37:45 | domínio da sua aplicação. É o endereço IP  dele que você configura no registro do seu |
| 37:50 | domínio pra DNS. No painel de todos tem como  configurar certificados SSL e tudo mais. Ele |
| 37:56 | que vai pegar o tráfego dos usuários e direcionar  pra containers web, os dynos. DigitalOcean chama |
| 38:01 | de droplets. Em Kubernetes chamamos de pods. Mas  enfim, é onde roda o processo da sua aplicação. |
| 38:07 | Na realidade, em produção não vai ter só uma  caixinha da sua aplicação. Vai ter várias. Cada |
| 38:13 | um numa porta separada no tal container ou dyno.  E o balanceador de carga vai distribuindo uma |
| 38:19 | requisição pra cada uma delas, tentando manter  todos ocupados por igual, se possível. Agora, |
| 38:24 | todas essas caixinhas continuam precisando  se conectar no banco de dados. Mas já sabemos |
| 38:28 | que existe um limite máximo dependendo do  plano que pagamos. Pra não perder controle, |
| 38:33 | cada caixinha vai ter um pool de conexões, com um  máximo de conexões reusáveis que ele pode manter. |
| 38:38 | Pra não desperdiçar recursos do banco de dados,  a técnica mais importante é estrategicamente |
| 38:44 | colocar cache nos lugares ou mais pesados ou que  são acessados com mais frequência e cujos dados |
| 38:50 | não mudem muito, ou que pelo menos não mude muito  no espaço de alguns minutos que seja. 5 minutos |
| 38:55 | que suas caixinhas não se conectam no banco  faz muita diferença. Lembrem-se, temos muitas |
| 39:01 | caixinhas ativas ao mesmo tempo! Então subimos  um novo serviço, um Memcache. Um serviço de cache |
| 39:07 | também tem um limite de quantos megabytes  ou gigabytes de RAM queremos usar de cache. E |
| 39:13 | não precisamos nos preocupar se encher  esse espaço porque o Memcache é inteligente |
| 39:17 | de ir apagando cache mais velho pra dar  espaço pra cache mais novo. E eu só dei |
| 39:22 | exemplo de cachear algo que todo mundo vê  igual, como lista de produtos numa homepage, |
| 39:26 | mas podemos fazer cache por usuário. Assim  se o usuário ficar dando refresh na página |
| 39:31 | de perfil dele, não precisa ficar toda hora  indo no banco pra pegar os mesmos dados. |
| 39:34 | Vai estar no cache dele. Estratégias de cache  são importantíssimos, vale estudar em detalhes. |
| 39:40 | Mas à medida que nossa aplicação cresce,  temos funcionalidades pesadas, integrações |
| 39:44 | com serviços de terceiros, como meios de  pagamento, sistemas de gestão como um ERP, |
| 39:50 | várias coisas que aumentam o tempo  de resposta e fazem nossos usuários |
| 39:53 | esperar tempo indeterminado. E nosso banco de  dados também não tem processamento infinito. |
| 39:58 | Mesmo colocando cache, ainda assim  precisamos controlar esses recursos. |
| 40:01 | Pra isso podemos começar distribuindo a  leitura em servidores de réplica desse |
| 40:06 | banco. Todo bom framework tem como configurar  pra toda leitura ser feita num banco de dados |
| 40:10 | e toda escrita ser feita em outro banco de  dados. E esse banco de escrita é responsável |
| 40:16 | por atualizar as réplicas. Mesmo se as réplicas  ficarem um pouco atrasadas, alguns segundos, |
| 40:21 | pra coisas como relatório semestral de vendas  ou algo assim, não vai fazer diferença. E pra |
| 40:26 | coisas como confirmação de número de pedido,  podemos até deixar no cache do usuário, enquanto |
| 40:31 | os bancos de dados ainda não se sincronizaram.  Assim ninguém vai notar a diferença de tempo. |
| 40:36 | Mas só isso não é suficiente. O mundo ideal é  que toda requisição HTTP feita por um usuário |
| 40:42 | seja devolvido imediatamente, sem precisar  esperar ninguém. Por isso não chamamos |
| 40:46 | serviços externos como pagamento ou outras  APIs no mesmo processamento de requisição |
| 40:51 | HTTP do usuário. Devolvemos imediatamente  pra ele um "aguarde, depois mandamos um |
| 40:56 | email confirmando". E criamos uma tarefa  assíncrona que jogamos numa fila como SQS, |
| 41:02 | Kafka ou mesmo Redis, então instalamos uma nova  caixinha aqui que vai ser responsável só por isso. |
| 41:07 | E por fim, criamos workers  ou consumers pra essas filas, |
| 41:11 | pra fazer o processamento a posteriori,  realizar pagamento, integrar com ERP, |
| 41:17 | integrar com nota fiscal eletrônica, envio  de e-mails e tudo mais, e só aí confirmamos |
| 41:22 | gravando no banco de dados principal. Como  essas tarefas podem demorar um pouco mais, |
| 41:26 | também não saturamos o banco de dados principal e  tudo continua funcionando de forma mais estável. |
| 41:32 | Mas não é só ir subindo caixinhas aleatoriamente.  Pra isso é bom ter em mente aquela calculadora que |
| 41:37 | mostrei antes. Existem várias calculadoras assim  pra coisas como AWS, só procurar. Mas não espere |
| 41:43 | que alguém te dê uma resposta exata. Tempo  médio de uma requisição não o único número |
| 41:48 | que você precisa. Numa aplicação web, páginas  de conteúdo como lista de produtos, detalhes |
| 41:53 | de produtos, perfil do usuário, são coisas  facilmente cacheáveis e que respondem rápido. |
| 41:59 | Mas páginas de gerenciamento de carrinho  que checa disponibilidade de produtos, |
| 42:02 | checkout com integração de pagamentos, são  páginas que demoram muito mais. Chutando, |
| 42:07 | numa página de conteúdo conseguimos  responder em menos de 50 milissegundos, |
| 42:12 | mas uma página mais complicada de checkout  poderia levar 500 milissegundos. São |
| 42:17 | diferenças assim de 10x que se encontra  em diversas partes de uma aplicação Web. |
| 42:22 | Se tirar a média, vamos chegar num número tipo  100 milissegundos, que não serve pra muita coisa, |
| 42:27 | porque estamos escondendo as páginas pesadas  que precisaríamos otimizar, e talvez estejamos |
| 42:32 | otimizando páginas de conteúdo que já são rápidas  o suficiente. Por isso eu sempre recomendo que se |
| 42:38 | instale uma ferramenta online de monitoramento. A  melhor que conheço é o produto RPM da New Relic. |
| 42:43 | Tem boas alternativas como o Scout e outros  que não conheço. Mas o New Relic dá um raio |
| 42:49 | X mais detalhado. Ele mostra quem são os  principais ofensores, e se ele suportar o |
| 42:54 | framework web que você usa, como Ruby on Rails,  é capaz de dizer qual controller, qual model, |
| 42:59 | qual query que realmente tá pesada.  Assim não precisamos ficar adivinhando. |
| 43:03 | Otimização nunca deve ser feita no  chutômetro. "Ah, eu acho que é essa classe, |
| 43:08 | ah eu acho que se refatorar esse job fica  melhor". Olhem os números. 80% dos problemas |
| 43:14 | de performance costumam ser causados por 20%  da sua aplicação. Não precisa reescrever tudo. |
| 43:19 | Em 10 funcionalidades, deve ter 2 que  precisamos focar e conseguir economizar |
| 43:24 | metade dos recursos da infraestrutura inteira.  Como no exemplo do cache que mostrei no começo. |
| 43:29 | Toda otimização deve ser baseada em dados  analíticos de uso real em produção, dados |
| 43:34 | de uso de usuários de verdade usando  sua aplicação. Por isso precisa de um |
| 43:39 | New Relic. Uma vez estabelecido quem  é o ofensor, sabemos quanto tempo tá |
| 43:43 | consumindo. E quando fizer a correção e  subir em produção, basta medir algumas |
| 43:48 | horas e dá pra saber quanto foi efetivo ou não.  Por isso não basta funcionar só na sua máquina, |
| 43:53 | testando só com um usuário. Assuma que  você não sabe nada até medir em produção. |
| 43:58 | Pro pessoal de front tem uma última otimização  importante: aprender a usar CDN. O problema é |
| 44:03 | o seguinte. Quando se monta o HTML  e o servidor devolve pro navegador, |
| 44:08 | esse HTML vai conter várias tags de imagens,  css, scripts. Agora o navegador precisa voltar |
| 44:12 | pro servidor e ir pedindo todos esses assets.  Então uma requisição se multiplica em 20, 50, |
| 44:17 | sejá lá quão complexo é o HTML que você fez.  Normalmente um servidor web é bem rápido pra |
| 44:23 | devolver essas coisas, já que não envolve conectar  com banco de dados, APIs nem nada disso, mas mesmo |
| 44:28 | assim, em grande volume, também pesa. Aquelas  caixinhas da sua aplicação tão perdendo tempo |
| 44:34 | devolvendo imagens sendo que podiam estar usando  esse tempo pra gravar mais um pedido da sua loja. |
| 44:38 | Cada framework web, de novo,  tem formas de integrar com um |
| 44:43 | CDN como o AWS CloudFront ou Azure  CDN ou Fastly. CDN funciona assim: |
| 44:47 | em vez de escrever uma tag de imagem  com o source relativo ao seu domínio, |
| 44:52 | explicitamente escrevemos a URL do serviço de CDN  tipo "minhalojablabla.cloudfront.com" ou seja lá |
| 45:00 | qual URL que o serviço te der. E reescrevemos  a tag de imagem usando um source absoluto. |
| 45:06 | Só que isso seria um saco por dois motivos.  Enquanto se está desenvolvendo a aplicação, |
| 45:09 | nem tem o CDN configurado ainda, daí você,  desenvolvedor front-end, nem ia conseguir |
| 45:15 | visualizar o que tá fazendo. O segundo problema é  se escrever na mão as URLs pro CloudFront mas aí |
| 45:19 | o pessoal de infra decide que prefere mudar pro  Azure. E aí? Sai mudando todas as URLs na mão? |
| 45:24 | Lógico que não. Pra isso usamos helpers.  Funções que escrevem a URL pra você. Em vez |
| 45:31 | de escrever URL relativa ou absoluta pro CDN,  use a linguagem de templates do seu framework |
| 45:36 | e chame funções. Por exemplo, no Node Express,  usando EJS, poderia escrever a tag de imagens |
| 45:41 | assim como nesse exemplo. Essa função vai  checar se está rodando na sua máquina local, |
| 45:46 | daí escreve a URL relativa normal. E quando  estiver em produção, fazemos uma configuração |
| 45:51 | que indica pra função qual é a URL do  CDN e ele reescreve usando URL absoluta. |
| 45:57 | Esse exemplo é usando express-cdn mas tem  várias bibliotecas que fazem a mesma coisa. |
| 46:03 | É importante que todo desenvolvedor de front  saiba fazer isso pra depois não ter que ficar |
| 46:07 | caçando URL hard-coded pra sair mudando em  massa um dia antes do primeiro deploy. A |
| 46:12 | vantagem de fazer isso é que a partir de agora,  se feito direito, sua aplicação web devolve o |
| 46:18 | HTML pro navegador. O navegador encontra  essa tag de imagem apontando pro servidor |
| 46:22 | de CDN e vai pedir pra lá. O servidor de CDN  vai checar "hum, eu tenho essa imagem? Não", |
| 46:28 | daí ele vai pedir só uma vez pra sua aplicação web  e vai cachear a imagem de resposta. Todo mundo que |
| 46:35 | pedir a mesma imagem vai pegar do cache do  CDN e não vai mais pesar na sua aplicação. |
| 46:41 | De novo, é outra coisa que remove uma  quantidade grande de requisições feitas |
| 46:44 | na sua infra e move tudo pra infra de  CDN com outra vantagem: CDNs grandes |
| 46:50 | costumam sincronizar seus dados em servidores de  diversas regiões geográficas pelo mundo. Então, |
| 46:54 | mesmo que você tenha feito deploy da  sua aplicação num servidor do Brasil, |
| 47:00 | se alguém do Japão acessar, pelo menos todas  as imagens, css, arquivos de javascript, |
| 47:03 | podem ser puxados de servidores de CDN do Japão,  o que vai proporcionar uma experiência melhor |
| 47:09 | pros usuários. No final todo mundo ganha e  sua infraestrutura fica melhor balanceada. |
| 47:14 | Finalizando, estude estratégias de cache  usando componentes como Memcache ou Redis. |
| 47:18 | Estude jobs assíncronos usando serviços como AWS  SQS ou Kafka. Estude como monitorar e conseguir |
| 47:26 | métricas reais da sua aplicação em produção. E  estude como integrar CDNs no seu front-end. São |
| 47:32 | 4 das principais técnicas de otimização que toda  aplicação web precisa. E isso porque eu pulei, |
| 47:38 | mas vale mencionar, que saber fazer queries  SQL otimizadas, instalar índices adequados, |
| 47:44 | também melhora tudo uma ordem de grandeza. Só  porque seu framework esconde o SQL não significa |
| 47:48 | que você pode ignorar SQL. Um monte de problemas  de performance são causados por SQL mau feito. |
| 47:54 | Mas por hoje vou acabar aqui. Eu só queria  rapidamente mostrar alguns dos aspectos que |
| 48:00 | separam uma aplicação web que funciona só na  sua máquina, mas que não escala de verdade em |
| 48:05 | produção, e como isso não tem nada a ver com sua  escolha de linguagens, frameworks, mas sim do seu |
| 48:10 | não-entendimento de como uma aplicação de verdade  realmente funciona. Eu mostrei só o pico do |
| 48:16 | iceberg e tenho certeza que muita gente experiente  vai complementar o que falei nos comentários então |
| 48:21 | se ficaram com dúvidas não deixem de mandar aqui  embaixo, se curtiram o video deixem um joinha, |
| 48:25 | assinem o canal e compartilhem o video  com seus amigos. A gente se vê, até mais. |
