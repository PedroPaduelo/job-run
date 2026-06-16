# Subindo Aplicações Web em Produção | Aprendendo HEROKU

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=TLRW_xTnQwY
- **Duração:** 41:32
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Bem vindos ao primeiro video de 2022. O video de hoje vai ser parte 1 de 2 videos. Eu queria falar sobre os famosos 12 fatores pra |
| 0:10 | criar projetos escaláveis modernos. Pra fazer isso eu preciso que todo mundo já tenha visto pelo |
| 0:15 | menos uma vez como é trabalhar com uma plataforma chamada Heroku. Se você já trabalha com Heroku, o |
| 0:21 | que vou falar hoje é o arroz com feijão, mas vocês podem usar pra apresentar a plataforma pra amigos |
| 0:26 | seus que ainda não conhece. Pra todo o resto, esse é o modelo de trabalho que você deveria almejar se |
| 0:32 | nunca usou essa plataforma. (...) |
| 0:39 | Antes de começar deixa eu responder algumas coisas que vi online depois dos últimos vídeos. No caso |
| 0:47 | do exemplo que dei do ingresso.com eu terminei concluindo que se eles não tem controle sobre o sistema de reserva de assentos dos cinemas - |
| 0:58 | que imagino que sejam aplicativos super antigos que não foram feitos pra escala de internet - então deveriam controlar o acesso a esses sistemas usando uma fila virtual. Ninguém |
| 1:07 | acessa diretamente a reserva de assentos, cai primeiro numa página mais fácil de escalar de fila e fica esperando a vez. Por acaso foi exatamente isso que a Caixa |
| 1:17 | Econômica Federal fez pra Mega Sena da virada que ia sortear mais de 300 milhões de reais. E |
| 1:23 | eles implementaram justamente uma fila virtual pra ver se aguentavam a multidão que ia tentar acessar tudo no último dia. Eu não perco meu tempo apostando em loteria porque é só garantia que vou estar dando dinheiro de graça pros outros, |
| 1:32 | mas quem tentou parece que teve muita dor de cabeça mesmo tendo esse sistema de fila implementado. Mas é óbvio. Só porque você implementou |
| 1:40 | algum pattern ou arquitetura não existe nenhuma garantia que implementou certo ou que não exista nenhum outro problema que ficou pra trás. |
| 1:46 | Eu não sei como eles fizeram, mas imagino pelo menos 2 problemas. O primeiro e mais óbvio é que o tráfego gerado por uma Mega Sena dessas |
| 1:55 | deve ter sido absurdamente alto. No nível que até uma Amazon da vida sofreria um pouco. Então |
| 2:00 | dou o benefício da dúvida que eles tentaram o máximo mas mesmo assim o tráfego foi ainda maior |
| 2:06 | do que era imaginado. O segundo problema, que acho que é o mais factível, é que o sistema foi mal feito mesmo. Não me entendam mal. Eu acho que existem sim, |
| 2:14 | bons programadores, com boas capacidades técnicas e boas intenções que tentaram o |
| 2:19 | máximo pra fazer isso funcionar. Porém, a grande maioria dos funcionários públicos que trabalham nos diversos departamentos e sistemas integrados provavelmente não tavam |
| 2:29 | dando a mínima e foram obstáculos pros poucos que tentaram fazer as coisas direito. Entenda a seguinte verdade: nenhum sistema feito |
| 2:40 | pelo estado jamais vai ser tão bom quanto os melhores sistemas feitos na iniciativa privada. É uma impossibilidade. O motivo é muito simples: |
| 2:45 | não tem concorrência. A mesma coisa vale pra empresas privadas que tem conluio com governos, |
| 2:51 | que passam a ser basicamente empresas públicas com fachada de empresa privada. A maioria dos |
| 2:57 | grandes monopólios só existem porque foram auxiliados pelos governos. Sem concorrência, pra que eu preciso fazer um |
| 3:07 | sistema melhor? As pessoas têm outra opção? Não, então foda-se, vai ser obrigado a usar o que tem. Mesmo se for uma merda. E eu, que trabalho aqui, vou ser mandado embora se não funcionar? Também não, |
| 3:15 | então foda-se de novo. E vai ser sempre assim. Eu sinto pena dos poucos que trabalham lá que |
| 3:21 | querem fazer as coisas funcionar direito, mas vão sempre esbarrar em um monte de departamento que |
| 3:26 | tá pouco se fodendo e um monte de burocracia que impede melhorias. Mas é isso aí. Software nunca tá "pronto". Se o lugar |
| 3:36 | tem mentalidade de "terminar" o software e não mexer mais, sempre vai ser uma porcaria. O Software precisa estar constantemente atualizado, |
| 3:42 | constantemente consertado, constantemente expandindo e remodelado. O problema em |
| 3:48 | lugares como uma Caixa é que deve ter dezenas de sistemas que tá no esquema "tá funcionando? então não mexe!" só que eventualmente vai precisar integrar, se comunicar. Mas não tem como, |
| 4:03 | daí vai nascendo dezenas de gambiarras pra fazer as coisas funcionarem ao redor dessas |
| 4:09 | ilhas radioativas. Deixe passar alguns anos assim e você tem a experiência bosta que foi a Mega |
| 4:17 | da virada. É simples assim. E isso me lembrou de um assunto que eu queria explicar faz algum tempo. No video sobre a história do Ruby on Rails |
| 4:22 | eu mencionei rapidamente sobre Heroku e a metodologia de 12 fatores do Adam Wiggins, |
| 4:27 | um dos co-fundadores do Heroku. Objetivo hoje vai ser dar uma repassada nesses conceitos pra |
| 4:33 | quem nunca viu. Se você é um programador sênior certamente já sabe de tudo isso e certamente já |
| 4:43 | usa no seu dia a dia. Eu não chamaria ninguém que não segue no mínimo os 12 fatores de sênior. E eu digo o mínimo porque isso é o básico do básico e na parte final do video |
| 4:52 | vou até complementar mais algumas coisas que todo mundo já deveria saber. Os 12 fatores em si vou falar no próximo video. |
| 4:58 | Pra entender os 12 fatores você precisa saber o que é Heroku. Se nunca usou Heroku faça um |
| 5:06 | favor a você mesmo e veja qualquer tutorial básico de como subir um aplicativo nele. Pra um iniciante é uma experiência que muda |
| 5:14 | sua forma de pensar em deploys. Pra quem é das antigas e nunca se atualizou também vai ser um choque. Quando precisava subir um projeto web pra |
| 5:22 | produção, como a gente fazia nos anos 90 e começo dos anos 2000? A gente configurava um servidor |
| 5:27 | remoto Linux, num Virtual Private Server ou VPS como um Linode da vida. Nesse servidor a gente configurava tudo |
| 5:34 | manualmente via telnet ou SSH. Instalava um banco de dados como MySQL, um servidor web como Apache, |
| 5:41 | alguma linguagem interpretada como Perl ou PHP, copiava os arquivos da aplicação, normalmente feita em Perl ou PHP, |
| 5:48 | via FTP ou hoje em dia SFTP e pronto, tava tudo no ar. Essa stack inclusive tinha um nome, |
| 5:53 | chamado LAMP, que é acrônimo pra Linux, Apache, MySQL e Perl ou PHP. Isso é tecnologia do fim dos anos 90. Entenda, se alguém fizer isso hoje |
| 6:01 | em 2022, você tá parado no tempo mais de 20 anos. Ninguém em sã consciência atualiza código direto |
| 6:09 | no servidor assim via FTP mais. Eu já tinha dito no episódio do ingresso.com que o jeito errado é fazer tudo rodar numa única |
| 6:15 | máquina, configurar tudo manualmente. Atualizar código direto lá é a pior forma possível de |
| 6:21 | colocar uma aplicação no ar. Agora vamos ver como é o estado da arte, a melhor forma de fazer |
| 6:27 | deploy tanto do ponto de vista de escalabilidade quanto de segurança. E pra isso eu vou seguir |
| 6:32 | um tutorial oficial do próprio Heroku pra vocês verem como é absurdamente simples. O tutorial começa com o básico. Você obviamente |
| 6:41 | precisa ter uma conta criada no Heroku. Se ainda não fez isso, vai lá depois de assistir o video e cria a conta. Eles tem tutoriais pra quem |
| 6:46 | usa Rails, Node, Java e muito mais, mas já que falei da stack LAMP, vamos ver como se sobe uma aplicação PHP. Vamos assumir que se você é de PHP |
| 6:52 | já tem tudo instalado e obviamente usa Composer pra gerenciar suas dependências. Se você for de outras linguagens como Python |
| 7:01 | ou Elixir, não importa. Se nunca viu Heroku funcionando não interessa a linguagem, se |
| 7:06 | atenha ao passo a passo e o raciocínio. Qualquer bom programador tem que ser capaz de no mínimo seguir o raciocínio mesmo se for em |
| 7:12 | outra linguagem. Também vamos assumir que você já sabe usar minimamente Git. Se ainda não sabe, |
| 7:17 | assistam meus vídeos sobre Git depois. E vocês se lembram que no video de Conhecimentos Básicos eu |
| 7:23 | falo que saber Git é básico? Pois é, repito, é básico. Não tem como trabalhar em projetos |
| 7:28 | modernos sem saber Git. Agora, pra usar Heroku precisamos instalar a linha de comando do heroku. Praticamente tudo |
| 7:35 | que vai precisar tem nessa linha de comando. Num archlinux da vida basta fazer um `yay -S heroku-cli`, num Ubuntu da vida dá pra instalar |
| 7:42 | com Snap. Procure como instalar pra sua distro mas no final você deve ser capaz de abrir um terminal, digitar `heroku login` e vai abrir um navegador pra logar na conta que acabou de criar. E, |
| 7:48 | claro, sempre habilite autenticação de duas etapas, é o mínimo. |
| 7:54 | No próximo passo ele vai mandar você fazer o clone de um projetinho de exemplo feito em PHP Symfony, |
| 8:00 | que é um dos muitos frameworks web pra PHP. Symfony tem muita inspiração tanto em Rails quanto Django. Pra projetos novos |
| 8:07 | recomendo usar Laravel, que tem uma comunidade mais ativa e um ecossistema que cresceu bem em torno dele. De qualquer forma, se você sabe |
| 8:14 | Git, clonar um projeto é arroz com feijão. Tudo vai acontecer dentro do diretório desse projeto, então só dar `cd` pra ele. Agora vamos subir essa aplicação de exemplo. |
| 8:21 | Pra isso precisamos cadastrar uma nova aplicação no Heroku. Você pode subir quantas aplicações |
| 8:28 | quiser na sua conta e pode começar com opções gratuitas. Depois pode transferir a propriedade |
| 8:33 | das aplicações que subiu pra outra conta, como do seu cliente. Pra cadastrar é simples, |
| 8:39 | do diretório do projeto, num terminal, só usar a linha de comando que instalamos e fazer `heroku create`. Se não disser que nome quer, ele vai |
| 8:45 | inventar um aleatório. O nome em si não interessa tanto porque depois você vai registrar um domínio de verdade e apontar pra esse nome, |
| 8:51 | o CNAME, então o usuário final mesmo nunca vai ver esse nome. Mas vai servir pra gente testar |
| 8:56 | no domínio do Heroku. Uma vez a aplicação registrada na sua conta, |
| 9:01 | agora é só subir o código. Quando rodou o comando anterior, ele também criou um branch |
| 9:07 | remoto no Git do seu projeto. Então agora é só subir o que tem na branch principal `main` que |
| 9:13 | antigamente se chamava `master` pra esse remote chamado `heroku`. Relembrando, todos os remotes |
| 9:18 | ficam no arquivo `.git/config`, dá um `cat` nele pra ver o conteúdo, olha o remote lá. Agora é só |
| 9:25 | fazer `git push heroku main`. Olha o que vai acontecer no seu terminal. Se você ainda não entendeu, o Heroku criou um repositório Git remoto associado com sua nova |
| 9:31 | aplicação, esse é o remote. É como se fosse um projeto novo no GitHub que você vai dar push. Mas o Git tem uma funcionalidade que |
| 9:37 | você pode configurar que ele detecte quando você faz um `push` e rodar algum script. No |
| 9:44 | caso, o Heroku detectou que tá subindo código PHP e por isso vai automaticamente instalar |
| 9:49 | a buildpack pra ter as ferramentas de PHP que vai precisar como o próprio interpretador PHP, |
| 9:55 | o Composer, Apache, NGINX e tudo mais. O que o Heroku chama de buildpack é mais ou menos o |
| 10:00 | que você chamaria de Dockerfile. Aqui vale um adendo se você já usa Docker. Por que o Heroku reinventou a roda com esses buildpacks |
| 10:07 | em vez de usar Dockerfiles? Na verdade é o contrário: o Heroku precede a invenção |
| 10:13 | do Docker. Na realidade, muito do Docker foi inspirado no que o Heroku fez anos antes dele. O |
| 10:18 | Heroku foi lançado por volta de 2008, o Docker foi lançado só em 2013. O objetivo da vida do Docker |
| 10:25 | e tudo que saiu em torno de containers como Docker Compose, Docker Machine, |
| 10:31 | Dokku, até Kubernetes, é conseguir imitar o que o Heroku fez antes de todo mundo. |
| 10:37 | Vamos considerar o que tá acontecendo nesse ponto. O comando `git push` que fizemos tá mandando o |
| 10:43 | Heroku fazer o equivalente a criar uma imagem de Docker, é semelhante a um `docker build`. Nos servidores deles rodam diversos containers, que |
| 10:49 | eles chamam de `dynos`. Tem de diversos tamanhos, a versão gratuita são dynos de 512 megabytes de RAM, se não me engano com uns 4 cores ou |
| 10:55 | núcleos virtuais fraquinhos. Se precisar, dá pra subir pra versões de 1 giga até 14 giga de RAM se precisar muito. Mas cuidado, a grande maioria das aplicações |
| 11:02 | deveria conseguir rodar suficientemente bem em 512 mega de RAM, se precisa de mais que isso |
| 11:09 | precisa ver se não tá com vazamento de memória, ou você programou muito porcamente e tá enchendo a memória de lixo. Trabalhar em um ambiente |
| 11:14 | mais restrito do que sua máquina local é uma boa prática. Qualquer notebook hoje tem 8 giga |
| 11:21 | ou mais de RAM e você muitas vezes nem percebe que sua aplicação tá usando muito mais |
| 11:26 | memória do que deveria. Seguindo o tutorial a próxima coisa que ele manda |
| 11:32 | fazer é escalar a aplicação com o comando `heroku ps:scale web=1` que basicamente manda o Heroku |
| 11:39 | subir sua aplicação num único dyno. Se mudar pra web igual a 2, ele vai subir dois dynos. |
| 11:45 | O que significa isso? Vamos fazer uma conta de padeiro. Eu disse que o dyno gratuito tem uns |
| 11:52 | 4 cores virtuais. Se eu configurar o apache pra pendurar um fork de processo por núcleo significa |
| 11:59 | que consigo ter até 4 requisições simultâneas. Se subir 2 dynos eu posso ter até 8 requisições |
| 12:04 | simultâneas. Simultâneo significa exatamente no mesmo instante. Nessa conta de padeiro |
| 12:11 | estou considerando 1 requisição por processo, sem considerar opções de threads ou I/O assíncrono. |
| 12:18 | Digamos que a aplicação leve 100 milissegundos pra responder uma requisição. Então em 1 segundo |
| 12:25 | daria pra responder até 10 requisições. Com 1 dyno então seria teoricamente possível responder até |
| 12:32 | 40 requisições por segundo e com 2 dynos até 80 requisições por segundo, entenderam? Isso |
| 12:38 | é teórico porque estou assumindo que cada core conseguiria responder 10 requisições todo segundo, |
| 12:45 | mas depende se durante o processamento de cada requisição se não bloqueia algum recurso que outra requisição pode precisar, como banco de dados e coisas assim, por isso |
| 12:51 | o tempo real pode variar bastante. Containers, como Docker, como Dynos de Heroku, |
| 12:58 | não são máquinas virtuais. Eu explico sobre isso no meu episódio sobre Devops. Se você não sabe |
| 13:04 | a diferença recomendo que assista depois. Mas na prática só entenda que é uma forma de particionar os recursos da sua máquina |
| 13:10 | e cada programa rodar isoladamente achando que está sozinho nessa máquina. Assim é possível particionar uma máquina real grandona em diversos |
| 13:16 | containers menores, dividir os recursos, e te cobrar de uma forma mais fácil. |
| 13:22 | Mais do que isso, o Heroku já deixa muita coisa de infraestrutura preparada pra você. Por exemplo, eu expliquei que tem esse comando `ps:scale` |
| 13:27 | que permite subir a imagem da sua aplicação em múltiplos dynos. Significa que você tem vários |
| 13:33 | servidores web de pé ao mesmo tempo. Agora, quando um usuário digitar a URL pra sua |
| 13:39 | aplicação ele não cai direto no servidor web da sua aplicação e sim num balanceador de carga, ou load balancer, proprietário do Heroku, |
| 13:45 | que vai pegar as requisições e distribuir nos dynos que você tem de pé provavelmente usando uma estratégia como round robin. Se você é iniciante isso pode parecer estranho. |
| 13:50 | Quando sobe um processo de servidor web na sua máquina local, seja nginx, |
| 13:57 | seja apache, seja um webpy de python, tomcat de java, puma de rails, vai ser um processo |
| 14:02 | pendurado em uma porta. Toda vez que no seu navegador você carrega `localhost:3000` ele |
| 14:08 | vai direto pra quem responde nessa porta 3000 e é isso. Mas quando você sobe vários containers, cada |
| 14:14 | um com seu próprio servidor na porta 3000, cada um dos containers tem um IP interno próprio. Faz |
| 14:20 | de conta, 172.16.0.10 e 172.16.0.11. No seu navegador você não pode mais usar localhost |
| 14:25 | porque não tem mais ninguém no ip local 127.0.0.1 na porta 3000, que seria o localhost. Quando você |
| 14:32 | sobe containers de Docker localmente, ele cria uma rede virtual local. Cada container de Docker |
| 14:37 | que sobe ganha um IP virtual privado e nele que o servidor web da sua aplicação vai se pendurar na |
| 14:44 | porta 3000 por exemplo. Se achou confuso recomendo que estude e treine Docker na sua máquina local, |
| 14:50 | em particular usando Docker Compose pra orquestrar cada serviço num container separado. |
| 14:55 | Você pode naturalmente digitar direto o ip privado de um dos containers como 172.16.0.10:3000 e aí |
| 15:02 | vai carregar sempre só desse container, mas o segundo container vai ficar lá parado sem trabalhar. Pra conseguir acessar os dois |
| 15:07 | containers, em vez de acessar direto, pode subir um terceiro container, com um load balancer como o NGINX ou HAProxy ou vários outros. |
| 15:13 | Nesse load balancer você configuraria uma regra dizendo, toda vez que alguém mandar uma requisição na porta 80 eu envio pra porta 3000 de um dos dois |
| 15:19 | containers que tenho cadastrado. Isso que se chama um proxy reverso. Digamos que o container do load balancer subiu com IP virtual |
| 15:25 | 172.16.0.13. Agora você pode ir no navegador e digitar `172.16.0.13` que por default vai |
| 15:31 | conectar na porta 80. O load balancer vai pegar essa requisição e mandar pra um dos dois containers web respondendo nas suas portas 3000. Pro navegador é transparente. Ele não tem |
| 15:37 | idéia de quantos containers web tem por baixo, nem em que portas eles respondem de verdade, |
| 15:43 | nem que IPs tem. Load balancer é tanto uma forma de distribuir requisições pra mais servidores web |
| 15:49 | quanto anonimizar os IPs dos servidores para que os usuários não saibam quem são. O objetivo do episódio não é ensinar redes, mas |
| 15:56 | como tem muito iniciante assistindo achei melhor pelo menos dar o resumo do resumo. Pra saber |
| 16:01 | mais procurem artigos sobre load balancer, em particular tentem fazer exatamente esse cenário que eu falei: subir com Docker Compose 2 |
| 16:07 | ou mais containers com uma aplicação web qualquer e outro container com NGINX configurado como load balancer e veja na prática suas requisições |
| 16:14 | sendo distribuídas pelos seus containers. Tem dezenas de tutoriais que você acha no Google |
| 16:19 | pra fazer isso, só não ter preguiça de procurar, pra treinar qualquer um serve. Falando nisso, voltando pro tutorial do Heroku, |
| 16:25 | o próximo passo é ver se sua aplicação subiu direito e está respondendo como deveria. Pra isso |
| 16:31 | você precisa conseguir ver os logs em tempo real. Se fosse uma aplicação local era só fazer tipo um |
| 16:38 | `tail log/application.log` pra ficar monitorando o que entrar no log em tempo real. Tail é inglês |
| 16:43 | pra rabo, e como o nome diz a gente fica seguindo o rabo, ou seja, o final do arquivo. Pro Heroku |
| 16:50 | é parecido mas só usar a linha de comando deles fazendo `heroku logs --tail`. Lógico, o `--tail` |
| 16:56 | é opcional, mas se usar vai manter o log aberto e tudo que for sendo logado vai aparecendo no seu terminal. De novo, se você tá acostumado a usar |
| 17:02 | Linux isso é algo super comum. Fizemos o clone da tal aplicação de exemplo |
| 17:09 | mas nem vimos o que tem nele. O principal é entender que toda aplicação que sobe no Heroku |
| 17:14 | precisa ter pelo menos um arquivo na raíz do projeto chamado `Procfile`. Nele definimos que no container de tipo `web` vai executar |
| 17:21 | o binário executável do apache apontando pra pasta `web`. Isso é específico de cada |
| 17:27 | framework. Se fosse um Rails o executável seria `bin/rails server` e assim por diante. É assim que o Heroku sabe o que é pra executar dentro |
| 17:32 | do container. Se fosse um `Dockerfile` seria o equivalente ao parâmetro `CMD`. Não vou mostrar isso hoje, mas além de web |
| 17:39 | existem outros tipos de containers que você pode declarar como `queue` ou `job` se quiser montar imagens que sobem workers pra uma fila assíncrona, |
| 17:45 | por exemplo. Eu expliquei um pouco sobre filas assíncronas no episódio do ingresso.com e no de concorrência e paralelismo. O importante é saber |
| 17:51 | que Heroku não sobe só aplicações web. Além disso, o formato de arquivo `Procfile` meio |
| 17:58 | que virou universal. No mundo Rails você pode usar uma ferramenta como o `foreman` que vai ler esse arquivo e localmente subir sua aplicação pra |
| 18:04 | simular como rodaria no Heroku. Você pode usar o foreman escrito em Ruby |
| 18:10 | pra rodar localmente sua aplicação mesmo se for escrita em PHP, ou usar o node-foreman que faz a mesma coisa ou o goreman ou forego |
| 18:16 | que são outros clones de foreman escritos em Go. Tanto faz no que é escrito porque só vai |
| 18:22 | ler o que tem no arquivo `Procfile` e executar o que está lá. É uma boa prática testar localmente antes de subir pro Heroku ou outra plataforma |
| 18:27 | que também suporte Procfiles. O próximo passo do tutorial foi o que expliquei |
| 18:34 | agora pouco. Como escalar sua aplicação subindo mais containers web. Só usar o comando `heroku ps:scale` e fazer `web=2` ou mais. Se quiser |
| 18:40 | desligar a aplicação, tirar da web, só fazer igual a zero que vai desligar todos os containers. Você pode aumentar ou diminuir o |
| 18:47 | número de containers manualmente com esse comando ou contratar um serviço de auto-escala |
| 18:52 | que usa algumas estratégias pra fazer esse ajuste automaticamente dependendo da carga que sua aplicação tá recebendo. |
| 18:59 | Dizendo assim pode parecer que escalar sua aplicação é algo tão simples quanto rodar esse comando e subir 100 dynos de uma |
| 19:05 | só vez em horário de pico. Mas isso não é uma bala de prata. Lembre-se que se subir 100 |
| 19:11 | dynos vai precisar que recursos embaixo dele, como seu banco de dados, tanto consiga aguentar |
| 19:17 | esse tanto de conexões simultâneas e ter CPU e RAM suficientes pra processar tanta coisa de uma só vez. Escalabilidade nunca é automática, |
| 19:23 | você precisa estar preparado pra isso. Na prática, essa funcionalidade é mais pra você economizar custos. Digamos que no máximo, os |
| 19:30 | recursos que instalou suportariam 100 dynos de pé ao mesmo tempo. Mas de madrugada seu tráfego |
| 19:36 | cai um monte e só 10 dynos seriam suficientes. Então você pode fazer um script que derruba |
| 19:42 | 90 dynos de madrugada pra economizar custos e de manhã cedo sobe 90 dynos novos pra aguentar o tráfego do dia. |
| 19:49 | Agora vamos falar de dependências. Se você programa em Rails, obrigatoriamente usa a |
| 19:55 | ferramenta Bundler pra gerenciar dependências. Toda nova biblioteca que precisa adicionar no seu projeto, primeiro você declara no arquivo `Gemfile` e instala a tal biblioteca com o |
| 20:02 | comando `bundle update`. Você jamais vai no site da biblioteca, baixa um zip e descompacta dentro |
| 20:08 | do diretório do seu projeto, isso seria uma barbárie e algo totalmente inaceitável numa sociedade civilizada moderna em 2022. Se você programa em Javascript, Node.js, |
| 20:14 | obviamente adiciona todas as suas dependências com o comando `npm install` e a opção `--save-dev` por exemplo. |
| 20:21 | Ou se usa `yarn` usa o comando `yarn add`. Em ambos os casos isso vai atualizar o arquivo |
| 20:27 | `package.json`, que todo projeto civilizado de Javascript tem obrigação de ter. Se você é de Java, certamente conhece Maven e usa a ferramenta Gradle, e tudo vai estar declarado no arquivo `build.gradle` ou `pom.xml`. Se você |
| 20:34 | é de Python, eu sei que é chato e ainda não é uma solução perfeita, mas deveria estar usando `pip` e todas as dependências deveriam |
| 20:41 | estar no arquivo `requirements.txt`. Se é de Go, só recentemente começaram a ficar |
| 20:47 | mais civilizados e agora fazendo `go mod init` você cria um arquivo `go.mod` que é onde se |
| 20:53 | declara dependências. Daí rodando o comando `go mod tidy` vai baixar as dependências |
| 20:59 | que precisa pra compilar e executar sua aplicação. O Rust sempre veio com o utilitário |
| 21:05 | Cargo e você sempre tem um arquivo `Cargo.toml` que declara os crates, que é como povo de |
| 21:11 | Rust chama suas bibliotecas. Entenderam? Não importa que linguagem você usa, toda linguagem civilizada tem um gerenciador de dependências padrão, sempre tem um arquivo onde se |
| 21:18 | declara essas dependências, e você nunca, jamais, deve baixar bibliotecas manualmente e jogar |
| 21:24 | dentro do seu repositório. Mais do que isso, todo gerenciador competente costuma ter um arquivo de tranca, de lock. Por exemplo, projetos de |
| 21:31 | Javascript tem o `package.json` onde você declarou as bibliotecas e versões que queria, mas quando o `npm` ou `yarn` realmente baixam e instalam ele gera um outro arquivo chamado `package-lock.json` |
| 21:37 | que você nunca deve editar manualmente, que declara exatamente quais bibliotecas e |
| 21:44 | exatamente quais versões baixou. Esse arquivo de lock é especialmente importante |
| 21:50 | porque quando outro desenvolvedor dá pull e clona o repositório do projeto ou quando você dá `git |
| 21:56 | push` pro Heroku, ele roda o `npm install` e vai baixar exatamente o que estiver nesse |
| 22:02 | arquivo de lock. 1.0.0 é diferente de 1.0.2. Isso é importante pra todo mundo baixar exatamente a |
| 22:08 | mesma versão de tudo. Basta uma biblioteca que era pra ser, faz de conta, versão 1.0.1 e no servidor |
| 22:14 | baixar a 1.0.2 que um bug pode ser introduzido sem ninguém saber. Gerenciamento de dependências |
| 22:20 | é uma ciência exata. Ela só fica caótica quando você não segue essas regras. Essa longa explicação foi só pra pular pro próximo |
| 22:27 | passo do tutorial onde ele rapidamente explica que nosso projeto PHP de exemplo usa um gerenciador de dependências chamado Composer. E como esperado, |
| 22:34 | existe um arquivo chamado `composer.json` na raiz do projeto junto com um arquivo `composer.lock`. No caso do PHP, no arquivo `web/index.php` tem uma linha com o comando |
| 22:41 | `require` carregando um `autoload.php` que é quem se responsabiliza por carregar as bibliotecas |
| 22:47 | declaradas no `composer.json`. Na sua máquina local, se fizer `compose update` vai baixar todas as dependências localmente e agora pode rodar o projeto na sua máquina. |
| 22:54 | E quando fazemos `git push` pro Heroku os scripts no buildpack de PHP vão procurar o arquivo `composer.json` e se achar, vai rodar o `compose update` pra montar a imagem. E é por isso que você precisa gerenciar as dependências |
| 23:01 | dessa forma, pra que outro desenvolvedor não tenha problemas quando baixar na máquina dele, e pra quando subir num Heroku ou máquina de produção |
| 23:08 | sabemos que não vai faltar nenhuma dependência. Isso é crucial pra vivermos numa sociedade civilizada. Imagina como era |
| 23:15 | na época da barbárie quando não tínhamos ferramentas como essas. Vamos simular que esse projeto ainda está |
| 23:22 | em desenvolvimento. Vamos adicionar uma nova funcionalidade. Pra isso começamos usando o comando `compose require` que vai declarar e puxar a biblioteca `cowsayphp` |
| 23:28 | que é um programinha besta que só desenha uma vaca com caracteres ASCII. Depois disso só rodar `compose update` pra garantir que foi baixada e instalada. Se abrirmos o arquivo |
| 23:36 | `composer.json` veja que ela foi declarada automaticamente pelo Composer. Agora, no `index.php` podemos criar uma rota chamada `/cowsay` que vai usar essa biblioteca |
| 23:42 | `Cowsayphp` e mandar ela desenhar a vaca dizendo "Cool beans". Vamos só copiar e colar esse trecho do tutorial no nosso projeto, e pronto. Agora precisamos adicionar tudo isso que modificamos no |
| 23:50 | repositório Git. Pra isso basta fazer `git add .`. Lembrem-se que nos vídeos de Git eu falo pra tomar cuidado pra não adicionar coisas que não precisam. |
| 23:56 | Por acaso esse projeto tem um `.gitignore` e se dermos `git status` podemos ver que só vamos adicionar os arquivos do Composer e o `index.php` |
| 24:03 | que modificamos. Na dúvida sempre rode `git status` antes de dar `git commit`. Finalizamos com o `git commit -m` adicionando |
| 24:10 | uma mensagem descritiva da modificação que fizemos e executamos um novo `git push heroku main` pra subir a modificação e gerar uma nova |
| 24:17 | imagem. Olhem o Heroku recebendo, rodando `compose update` que vai baixar a biblioteca que mandamos, vai regerar a imagem, daí ele sozinho vai |
| 24:23 | desligar os dynos que estavam rodando antes e subir novos dynos com a imagem nova. Se usarmos o comando `heroku open cowsay` ele vai |
| 24:30 | abrir o navegador pra gente, já apontando pra URL da aplicação /cowsay. Não precisa desse comando, |
| 24:36 | você podia abrir o navegador e digitar a URL manualmente, mas assim é mais rápido. Demora um segundo pra abrir porque o Heroku |
| 24:43 | está atualizando os dynos, mas voilá, tá funcionando. E é assim que subimos versões |
| 24:50 | novas da nossa aplicação. Lembram deploy contínuo que eu falei? É assim que faz. Além de toda essa infraestrutura de containers, |
| 24:56 | load balancers, facilidade de subir atualizações usando Git, o Heroku tem parceria com dezenas de |
| 25:02 | empresas que oferecem serviços que são úteis pras nossas aplicações. No tutorial, o próximo |
| 25:08 | passo é justamente instalar uma delas, o addon pra ferramenta chamada Papertrail. |
| 25:14 | Addon é sinônimo de plugin e Papertrail é um serviço que recebe os logs da nossa aplicação e oferece uma interface web que podemos monitorar |
| 25:21 | e, principalmente, fazer pesquisas. A maioria dos addons oferece uma versão gratuita pra gente testar e pra aplicações pequenas costuma |
| 25:28 | ser suficiente também. Pra instalar basta ir no terminal e fazer `heroku addons:create papertrail`. Esses comandos têm várias opções, |
| 25:34 | por exemplo pra já instalar com um plano pago mais parrudo. Sempre leia a documentação de cada addon antes de sair instalando. De qualquer forma, |
| 25:40 | com o comando `heroku addons` podemos listar quais já temos instalado e veja como o Papertrail já aparece. Pra abrir a interface web no seu navegador, |
| 25:46 | via terminal podemos rodar `heroku addons:open papertrail` e voilá, agora temos como fazer pesquisas nos nossos logs. Isso é mais importante se considerarmos que podemos ter mais de um dyno |
| 25:52 | rodando ao mesmo tempo e no Papertrail vai concentrar os logs de todos os dynos ativos. Assim podemos pesquisar os logs de todos ao mesmo |
| 25:59 | tempo. Por acaso esse é um addon que eu recomendo sempre instalar em toda aplicação. Papertrail |
| 26:05 | e também o Rollbar que você pode configurar pra te notificar por e-mail se alguma mensagem de erro crítico aparecer no log. |
| 26:12 | O próximo passo do tutorial é um pouco mais avançado e eu não recomendo que você use isso se não for um desenvolvedor mais experiente. A linha de comando do Heroku permite abrir um |
| 26:18 | container novo pra onde ele vai abrir uma conexão SSH segura. Dentro dele você pode rodar o shell interativo do seu framework como o `php -a` |
| 26:24 | no caso de PHP ou o `rails console` no caso de Rails ou simplesmente abrir um shell bash caso |
| 26:31 | queira checar alguma coisa no nível do sistema operacional. Tudo que carrega nos containers de |
| 26:37 | web também carrega nesse container de console, então pode ser bom pra debugar algum bug que |
| 26:43 | não acontece na máquina de desenvolvimento mas aparece quando sobe a aplicação no Heroku. |
| 26:49 | Use com cuidado, mas essa opção já salvou minha vida diversas vezes. Esclarecendo, esse comando não abre SSH |
| 26:55 | direto pra um dos containers web rodando. Ele abre um novo container, com a mesma imagem que |
| 27:01 | sobe nos containers web, só isso. A vantagem é que de lá você tem os mesmos acessos ao banco |
| 27:07 | de dados se precisar muito rodar alguma query de emergência ou algo assim. E justamente por isso |
| 27:13 | eu falo pra tomar muito cuidado, porque o que você rodar no banco vai ser permanente. Quando desconecta do shell interativo, esse container |
| 27:19 | é destruído, por isso não crie ou baixe arquivos pra lá porque esse container vai sumir tão logo |
| 27:25 | você se desconecte dele. É especificamente pra tarefas administrativas especiais. Outro conceito que pra iniciantes pode não ser |
| 27:32 | muito óbvio são variáveis de ambiente. Por exemplo, imagino que a maioria que usa Linux no mínimo já lidou com variáveis como `PATH` num arquivo local como `.profile` ou `.bashrc` |
| 27:38 | da vida. Você faz alguma coisa como `export ABC=blabla`. Isso declara uma variável global |
| 27:44 | na sua sessão e você pode ver o conteúdo da variável fazendo `echo $ABC` e vai imprimir o `blabla` no seu terminal. Pois bem, é considerado uma boa prática declarar |
| 27:51 | configurações assim como variáveis de ambiente, particularmente em containers. Se você já viu um arquivo `.env` na raíz do seu projeto, ele serve pra declarar e simular variáveis de ambiente do |
| 27:57 | projeto. De novo, a gente inventou isso no Rails e todo framework web meio que adotou a mesma |
| 28:04 | funcionalidade. Fazemos a configuração num arquivo pra cada desenvolvedor não precisar manualmente |
| 28:10 | ficar escrevendo um monte de `exports` no seu profile local de Bash. Além disso é boa prática ter um arquivo como `.env.example` que quando |
| 28:16 | clonamos o projeto fazemos uma cópia dele pra `.env`, assim não precisamos adivinhar quais variáveis existem pra usar. E mais importante, é boa prática colocar `.env` no arquivo `.gitignore` pra nunca |
| 28:23 | entrar no repositório Git. Isso porque os frameworks que suportam essa convenção, se existir o arquivo `.env` ele tem prioridade sobre as variáveis de ambiente de verdade |
| 28:30 | configuradas no seu sistema operacional. Mas quando subimos pra produção não queremos que a aplicação carregue desse arquivo e sim das |
| 28:37 | variáveis de verdade no sistema operacional. Então sempre se lembre dessa regra: `.env` sempre declarado no `.gitignore`. |
| 28:43 | Entendido isso, localmente na sua máquina de desenvolvimento você edita o que precisa |
| 28:49 | no arquivo `.env` que só existe na sua máquina, mas em produção configura variáveis de verdade. No Heroku fazemos isso com o comando `heroku config:set`. |
| 28:55 | Vamos fazer um exemplo pra ilustrar isso. Naquele arquivo `index.php` vamos adicionar mais uma rota, no caso substituir a rota raiz do |
| 29:01 | site. Vamos repetir a palavra "Hello" X vezes, e essas X vezes vai estar declarado na variável de |
| 29:07 | ambiente chamada `TIMES`. Pra ler essa variável, em PHP, se usa a função `getenv`. Agora, não temos como editar um `export` |
| 29:13 | no arquivo de profile de um dyno, pra isso usamos a linha de comando `heroku config:set TIMES=20`. Pra listar todas as variáveis que |
| 29:20 | existem só usar o comando `heroku config`. Olhem como tem uma variável do Papertrail |
| 29:25 | que foi criado pela linha de comando que usamos pra adicionar o addon, esse é o token secreto |
| 29:31 | de acesso. Não tem problema ter coisas como tokens e senhas em variáveis de ambiente, porque elas só existem dentro do container. Se alguém conseguiu ver esse token é porque ganhou |
| 29:38 | acesso ao seu container de produção e seu problema é bem maior do que só ter o token exposto, |
| 29:44 | você está com tudo exposto. Ninguém jamais deve ter acesso direto aos containers. E pra reforçar, é exatamente por isso que nunca se |
| 29:50 | deve adicionar arquivos como `.env` no repositório Git, porque normalmente guardamos coisas como senhas e tokens em variáveis de ambiente, e esse tipo de informação, jamais, sob nenhuma |
| 29:57 | hipótese, pode aparecer dentro de um repositório Git. Nenhuma credencial ou segredo jamais |
| 30:04 | deve estar no código fonte do projeto. Tem que ser um tosco de proporções bíblicas pra |
| 30:10 | pensar em colocar segredos num versionador de código que todo mundo tem acesso. E pronto. Agora podemos fazer `git add .`, `git |
| 30:16 | commit -m` e uma mensagem e finalmente `git push heroku main` de novo. Ele vai criar uma nova imagem com as modificações que acabamos |
| 30:23 | de fazer e se abrirmos o navegador com `heroku open`, esperamos um segundo pro Heroku derrubar |
| 30:29 | os dynos e subir com a imagem nova e, voilá, veja "Hello" repetido 20 vezes. E como mencionamos "banco de dados" algumas vezes, |
| 30:36 | o último passo do tutorial é justamente adicionar Postgres na nossa aplicação. Assim como o Papertrail, Postgres é um addon que tem diversos tamanhos e preços e você deve |
| 30:42 | checar as opções antes de adicionar. Isso porque se pegar um muito pequeno e precisar dar upgrade, o processo não é simples e muito menos trivial. |
| 30:49 | Leia a documentação do Heroku sobre isso. Uma das melhores coisas do Heroku é justamente o serviço de banco de dados, que é um dos melhores que existem, mas você precisa ter um mínimo de |
| 30:55 | noção do que tá fazendo. Eles não fazem mágica nem são à prova de idiotas. Avisos dados, pra adicionar a versão gratuita |
| 31:02 | menor, que se chama `hobby-dev`, basta digitar no terminal `heroku addons:create heroku-postgresql:hobby-dev`. Agora vamos adicionar uma funcionalidade no nosso projeto |
| 31:08 | PHP pra conectar no banco e listar o conteúdo de uma tabela em HTML, o arroz com feijão só. Pra isso começamos usando o Composer pra adicionar |
| 31:15 | a biblioteca de PDO que é PHP Data Objects. Se você é de Java ou .NET da vida, é a mesma coisa que um DAO da vida. |
| 31:21 | Fazemos `compose require csanquer/pdo-service-provider=~1.1dev` que vai baixar uma versão compatível mas não |
| 31:28 | necessariamente exata com 1.1dev dessa biblioteca, lembram? Por isso precisamos ter um arquivo de lock que vai registrar a versão exata que ele |
| 31:34 | achou e baixou. Rodamos um `compose update` pra garantir que baixou tudo e agora podemos alterar o arquivo `index.php` de novo pra |
| 31:41 | configurar o acesso ao banco de dados. Vamos copiar e colocar do tutorial. O importante é saber que é uma convenção do Heroku ter a URL de acesso ao banco declarado numa variável de ambiente chamada `DATABASE_URL`. |
| 31:48 | Podemos ver ela usando o comando `heroku config` e olha só. E esse trecho de código que copiamos e |
| 31:54 | colamos é pra pegar o conteúdo dessa variável com a função `getenv` e parsear os diversos componentes dessa string e passar pra biblioteca |
| 32:00 | de PDO configurar coisas como username, password, host, porta e path pra conseguir conectar no novo banco de dados Postgres. E simples assim, |
| 32:07 | subimos um banco de dados seguro e funcional na nossa infraestrutura. Agora vamos criar uma nova rota lá embaixo |
| 32:13 | chamada '/db'. Ele vai usar esse PDO pra mandar uma query pro banco e fazer um loop com `while` pra ir montando um array com todos os nomes que voltaram da query. E pra montar o HTML, |
| 32:20 | o framework Symfony oferece um sistema de template chamado Twig. Passamos o array de nomes pro |
| 32:27 | template chamado de `database.twig`. Então precisamos criar um novo arquivo `views/database.twig` e vamos copiar e |
| 32:33 | colar o template do tutorial nele. Ele vai pegar cada nome que veio no array que passamos pra ele e montar uma lista em HTML, nada de mais, arroz |
| 32:40 | com feijão. Isso tudo feito, vamos adicionar as modificações no Git com `git add .`. Com `git status` podemos ver que modificamos os |
| 32:46 | arquivos do Composer, o `index.php` e criamos um arquivo novo `database.twig`. Está correto então |
| 32:52 | podemos fazer `git commit -m` com uma mensagem descritiva e finalmente `git push heroku main` pra mandar as modificações pro Heroku. Espero que a essa altura você já esteja acostumado |
| 32:59 | com o processo de criar uma nova funcionalidade, adicionar no Git, mandar pro Heroku e conseguir |
| 33:05 | testar de verdade. O Heroku recebe a modificação, monta uma nova imagem, derruba os dynos que |
| 33:11 | estavam rodando e sobe de novo com a nova imagem. Só tem um probleminha. |
| 33:18 | Note que criamos um novo banco de dados, mas ele está vazio. Em qualquer framework web moderno |
| 33:25 | existe um recurso chamado Migrations, mais uma coisa que nasceu no Ruby on Rails e todos os outros frameworks imitaram, onde criamos |
| 33:31 | scripts que vão criar as tabelas e índices que precisamos, caso já não existam, e também já |
| 33:38 | pré-cadastram coisas como conta de administrador, se precisar. Isso tudo fica em scripts que declaramos pro Heroku executar na próxima vez |
| 33:44 | que subir dynos novos. Procure a documentação do seu framework e aprenda sobre Migrations |
| 33:50 | porque é super importante. Como isso é só um tutorial simples, tentando ser didático pra ensinar sobre o Heroku e não |
| 33:56 | sobre seu framework, ele pula qualquer coisa sobre Migrations e manda você abrir um novo container de shell, lembra? Que nem abrimos o bash remoto? |
| 34:03 | Só que no caso agora é abrindo o console do Postgresql que é o `psql`, então vamos fazer isso |
| 34:09 | usando o comando `heroku pg:psql`. Agora abriu o console remoto lá no servidor do Heroku já conectado no nosso novo banco de |
| 34:16 | dados. Só precisamos fazer isso uma vez, mas vamos copiar do tutorial o comando pra criar a tabela chamada test_table e em seguida vamos dar |
| 34:22 | insert em alguns valores aleatórios como esse 'hello database' e também um 'hello world', |
| 34:28 | por que não? Pronto, pra sair do console do Postgres é só digitar `\\q`. |
| 34:35 | Podemos abrir o navegador de novo usando o comando `heroku open db` que é a nova rota que |
| 34:41 | criamos e voilá, veja que conseguiu executar a query no banco, trazer as duas linhas que acabamos de inserir, e montar o HTML com elas. |
| 34:47 | E pronto, nesse estágio fomos capazes de criar uma nova aplicação no Heroku, ir subindo novas funcionalidades à medida que fomos codificando, |
| 34:54 | configurando o ambiente e cadastrando novos addons como o Papertrail e Postgres. Esse é o básico do |
| 35:01 | básico sobre Heroku que todo mundo deveria saber. Mas o Heroku faz bem mais que isso. No fim do |
| 35:07 | tutorial, no último passo, ele dá links pra outros artigos como o "How Heroku Works" que vai começar a explicar muito mais detalhes sobre o ciclo de |
| 35:13 | vida de uma aplicação em dynos. Por exemplo, lembram que durante o tutorial repetimos `git push heroku` |
| 35:20 | várias vezes? Todas as vezes ele cria uma nova imagem com as últimas modificações, derruba os dynos rodando a versão antiga e sobe |
| 35:26 | tudo de novo com a imagem nova. O que eu não expliquei é que as imagens antigas continuam |
| 35:33 | disponíveis se precisar. O Heroku chama isso de releases ou lançamentos. Se rodar o comando `heroku releases` podemos ver tudo que subimos |
| 35:39 | desde a primeira vez. Ele vai numerando cada release e acho que você pode cadastrar tags nelas também pra facilitar achar depois. A vantagem mais imediata é: digamos que você |
| 35:46 | subiu uma nova versão que não testou muito bem e, surpresa, começou a dar pau em produção. Em |
| 35:53 | vez de ficar tentando consertar na tentativa e erro durante o sufoco, podemos rapidamente dar rollback pra última release que sabemos |
| 35:59 | que tava funcionando, por exemplo `heroku releases:rollback v10`. A versão 11 que acabamos |
| 36:05 | de subir dá pau, mas a versão 10 funcionava, então voltamos pra ela. É o tipo de coisa que você nunca ia conseguir fazer rápido e organizado |
| 36:12 | assim se estivesse atualizando código fonte manualmente usando FTP. E é por isso que você |
| 36:18 | paga mais por isso também. Eu normalmente não gosto de fazer videos de tutoriais de ferramentas específicas porque elas |
| 36:24 | envelhecem muito rápido. Mas assim como no caso de Git, o Heroku existe faz mais de dez anos e continua funcionando basicamente do mesmo jeito. |
| 36:31 | Esse mesmo tutorial que funcionaria em 2010 continua funcionando em 2022 e provavelmente |
| 36:38 | vai continuar funcionando por muitos mais anos do mesmo jeito e toda nova solução de |
| 36:44 | devops que aparece é pra tentar se aproximar desse ideal de fluxo de trabalho. Por isso, |
| 36:50 | mesmo que você não use no seu trabalho atual, acho muito importante que se familiarize |
| 36:57 | com esse jeito de trabalhar. No próximo episódio vamos pegar o que aprendemos hoje pra discutir um pouco mais sobre arquitetura |
| 37:03 | e gerenciamento de projetos ágeis de verdade. Se ficaram com dúvidas mandem nos comentários |
| 37:09 | abaixo, se curtiram o video deixem um joinha, assinem o canal e compartilhem o video com seus amigos. A gente se vê, até mais! |
