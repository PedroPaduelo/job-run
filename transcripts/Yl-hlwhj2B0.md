# ChatGPT Consegue te Substituir? | Entendendo Jobs Assíncronos

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=Yl-hlwhj2B0
- **Duração:** 39:20
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado), `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Todo mundo parece que gostou do episódio de técnicas de otimização web, onde explico |
| 0:07 | porque o aplicativo que você acabou de conseguir terminar seguindo um tutorial ou curso online não |
| 0:13 | se parece nada com um projeto profissional de verdade. Não foi surpreendente como realmente, a maioria dos iniciantes nem imaginava que aquelas técnicas existiam. E quem já |
| 0:23 | tem experiência também confirmou que tudo que falei é o arroz com feijão. Na mesma semana, em dezembro de 2022, tava todo mundo super hypado com o ChatGPT. Acho |
| 0:33 | que todos assistindo pelo menos ouviram falar dessa inteligência artificial, da OpenAI do Elon Musk, que consegue fazer sua lição de casa, até escrever uma matéria |
| 0:42 | jornalística ou script pra videos de YouTube sem nenhum esforço e, pra nós programadores, |
| 0:47 | o relevante é ele conseguir escrever código direitinho. Muitos YouTubers até prevêem o fim |
| 0:53 | dos programadores. Será? Se você pensou assim também, hoje vou explicar porque está errado! |
| 0:59 | (... ) Recapitulando, no episódio de otimização expliquei rapidamente o conceito básico |
| 1:09 | de balanceador de carga, tanto no nível de requisições HTTP com um NGINX ou entre sua |
| 1:14 | aplicação e o banco de dados com pool de conexões. No final falei sobre como deferimos a execução |
| 1:19 | de operações demoradas pra jobs assíncronos. Alguns iniciantes corretamente se questionaram: |
| 1:25 | por que usar um sistema como o Bull, no caso de Node.js, se existem Promises, Async/Await, |
| 1:31 | Child Processes e Worker Threads? Por que não simplesmente colocar a operação mais demorada |
| 1:37 | numa Promise? Vai rodar em paralelo e devolver o HTML pro usuário rápido. Não é a mesma coisa? Pra responder isso, eu queria mostrar um outro exemplo. E como escrevi este script tarde da |
| 1:47 | noite, realmente tava morrendo de preguiça de escrever código Javascript então resolvi pedir pro meu copiloto, o ChatGPT, pra escrever pra mim. Eu peço as coisas pra ele sempre tudo em inglês, |
| 1:57 | porque o modelo em inglês é o mais completo e mais bem treinado e é quem dá as melhores respostas. |
| 2:03 | E minha primeira requisição foi: "escreve um form multipart pra upload de uma imagem" |
| 2:09 | Como era de se esperar, a resposta está correta, eis o código. E ele até dá uma explicação sobre |
| 2:14 | o atributo `enctype` e tudo mais. Isso é bacana mas não exatamente impressionante. Pra uma lição |
| 2:20 | de casa de curso ou faculdade é suficiente. Mas numa aplicação de verdade não fazemos mais assim. É o seguinte: esse HTML vai gerar um formulário onde o usuário pode escolher uma imagem no seu |
| 2:30 | computador ou smartphone. Quando clicar em "enviar" o navegador vai fazer aquele caminho que já expliquei nos episódios de rede: criar o pacote de HTTP request, |
| 2:38 | conectar no servidor que responde com o endpoint "/upload". E no servidor o |
| 2:43 | processo que recebe essa requisição fica bloqueado esperando receber esse arquivo. Qual o objetivo de um endpoint de uma aplicação web? É responder de volta pro |
| 2:53 | usuário o mais rápido possível, de preferência na faixa abaixo de 100 milissegundos. Lembram? |
| 2:58 | Quanto mais tempo sua aplicação leva pra responder deixando o usuário pendurado, menos |
| 3:03 | requisições por segundo seu servidor consegue responder, daí somos obrigados a gastar mais, colocando mais servidores pra suportar todo mundo acessando simultaneamente. Portanto, |
| 3:13 | sempre precisamos pensar se o que estamos fazendo contribui pra aumentar ou diminuir esse tempo. |
| 3:19 | O problema do form desse exemplo é que ele se conecta e vai deixar sua aplicação e o usuário |
| 3:24 | parados esperando o upload da imagem completar. Num pior caso, digamos que o usuário é um fotógrafo e resolveu dar upload numa foto em 8K RAW, ou seja, descomprimido, |
| 3:35 | que pode ocupar entre 60 a 100 megabytes! Digamos que seja 60 megabytes, e ele está fazendo upload |
| 3:41 | do celular, numa conexão 4G ruinzinha que dá upload só a 10 megabits por segundo. |
| 3:47 | Isso vai custar 480 segundos, ou aproximadamente 8 minutos. Isso é terrível. Esse 1 upload fez um processo do seu servidor ficar simplesmente parado, |
| 3:56 | esperando, e sem poder fazer mais nada por 8 minutos inteiros! |
| 4:02 | O Node tem capacidade de jogar essa espera pra uma thread separada que não bloqueia a habilidade de conseguir responder outras requisições enquanto isso. Porém, imagine que |
| 4:12 | sua aplicação é feita pra fotógrafos que vão ficar o dia todo subindo imagens gigantes desse tipo, |
| 4:18 | o tempo todo. Tudo tem um limite, e em breve seu servidor vai ficar bem pesado, porque não dá pra ficar criando threads infinitamente. E threads não são de graça. |
| 4:27 | Muitos não entendem isso. Cada nova thread ocupa espaço em RAM e tempo de processamento |
| 4:32 | pra mudar o estado de uma thread pra outra. Um paliativo é justamente usar o NGINX na frente da |
| 4:38 | aplicação Node, ou Spring Boot, ou Laravel ou seja lá qual framework esteja usando, porque o NGINX foi feito pra lidar com coisas como uploads demorados de |
| 4:46 | forma mais eficiente do que o Node. O usuário primeiro se pendura no NGINX, faz o upload, e só quando termina o NGINX passa o arquivo direto pra sua aplicação. |
| 4:55 | Só que NGINX, apesar de ordens de grandeza mais rápido que seu Node, também não é infinito, e uma hora vai ficar pesado. Tem diversas formas de |
| 5:04 | lidar com esse problema, mas hoje em dia o melhor custo-benefício é simplesmente não lidar com ele. Especialmente porque tem outro problema ruim que não tem a ver com a espera |
| 5:14 | e sim com onde fica o arquivo: o storage, ou HD local do processo que recebeu o arquivo. |
| 5:19 | Lembra que numa infraestrutura de verdade subimos vários pequenos servidores embaixo de um |
| 5:25 | balanceador de carga? Significa que se a aplicação receber um arquivo e gravar localmente, só os |
| 5:30 | processos no mesmo servidor vão conseguir ler, os outros não vão ter acesso. Mas aí o usuário navega |
| 5:36 | na sua aplicação e vai querer ver a imagem que acabou de subir, e não vai achar, porque o NGINX elegeu outro servidor pra receber sua requisição e nesse servidor não tem a imagem. Como faz? |
| 5:45 | Podemos usar um volume compartilhado na rede via NFS, que nem quando você |
| 5:51 | se conecta num servidor de arquivos da sua empresa. É uma solução válida. Mas ao mesmo tempo gostaríamos de ter um backup, caso o servidor de arquivos dê algum pau, |
| 5:59 | não queremos perder arquivos dos usuários. E no fim, vamos acabar mandando esses arquivos pra algum lugar como o serviço AWS S3. Por isso falei que o menos trabalhoso é simplesmente |
| 6:09 | não lidar com arquivos localmente e sim já mandar direto pro AWS S3. |
| 6:14 | Eu já sabia disso então fiz outra requisição pro ChatGPT. Pedi pra ele: "agora escreva outra versão desse formulário mas com suporte a upload |
| 6:24 | direto pra um bucket com url pré-assinada do S3". E como esperado, devolveu um exemplo correto. |
| 6:30 | Se você é iniciante e pelo menos já tentou programar um upload via web, provavelmente fez igual o ChatGPT na primeira vez: um form multipart dando POST pra um endpoint na |
| 6:40 | sua aplicação. Só que nunca parou pra pensar em coisas como a demora do upload num cenário de verdade e nunca pensou que daria pra dar upload direto pro S3 sem passar pela |
| 6:49 | sua aplicação. O grande truque é o atributo "action". No exemplo anterior era um POST |
| 6:54 | pra "/upload" na sua aplicação. Mas agora é pra URL que estiver nessa variável "presignedUrl". |
| 7:01 | Em seguida tem vários campos escondidos que não chequei na documentação mais atualizada da AWS se é assim mesmo, mas se não for, |
| 7:08 | é parecido. São coisas como o nome da chave onde vai ser gravado esse arquivo no bucket do S3, |
| 7:13 | credenciais e outras configurações. E o resto do formulário é igual. Como falei antes, |
| 7:18 | o lance é que quando o usuário clicar em "submeter", o arquivo não passa por nenhum dos servidores da sua aplicação. Vai dar upload direto pro bucket que você configurou na sua conta antes. |
| 7:28 | Mas como que gera essa tal de URL pré-assinada? Essa foi minha próxima requisição pro ChatGPT: |
| 7:35 | "agora escreva um examplo em Node.js Express de como conseguir a url |
| 7:40 | pré-assinada antes de renderizar o HTML anterior". E ele fez o código de back-end que executa antes de mandar renderizar o HTML que acabei de mostrar. |
| 7:48 | Nada mau. Ele importa bibliotecas como "aws-sdk", o "express" e tudo mais. Note |
| 7:54 | que só pedi esse trecho, mas pra funcionar, ou precisa saber fazer ou pedir pro ChatGPT |
| 8:01 | configurar seu `package.json` o arquivo `app.js` e outras configurações. Só esse |
| 8:07 | código sozinho não funciona. Se nunca usou Express, quando abrir o navegador apontando pra "localhost:3000/upload", vai cair nesse `app.get('/upload')`. |
| 8:16 | Gerar a chave do objeto pode ser feito de diversas formas. Se for antes do usuário escolher qual |
| 8:21 | arquivo vai mandar, vamos precisar criar um nome aleatório usando coisas como uma função de hash, tipo um SHA512 de um número aleatório. Se for via Javascript a partir do formulário, |
| 8:32 | depois que o usuário escolher o arquivo, podemos usar o próprio nome do arquivo. O principal é escolher uma fórmula que gere um string que vai ser único dentro do bucket, |
| 8:41 | pra não sobrescrever o arquivo de outra pessoa. Então construímos um JSON simples indicando o bucket, a chave que geramos |
| 8:48 | e por quanto tempo a URL de upload vai ficar disponível. Coisa como 60 segundos ou menos, porque se essa URL não tiver expiração, e vazar, qualquer um poderia ficar fazendo |
| 8:58 | uploads arbitrários no seu bucket até acabar o espaço ou te fazer pagar uma fortuna à toa. |
| 9:03 | Finalmente, usamos o objeto de s3 que carregamos e chamamos essa função `getSignedUrl` passando |
| 9:10 | os parâmetros que configuramos. A biblioteca do s3 vai chamar a API da AWS e se não der erro, |
| 9:15 | vai devolver uma URL especial, a tal URL pré-assinada. Que passamos pra esse template "upload_form" que é o HTML que mostrei antes. |
| 9:23 | Aliás, faltou uma coisa né? Não tem nada mais ruim pro usuário do que dar upload de um arquivo gigante e não saber se tá fazendo upload devagar ou se travou tudo. |
| 9:32 | Então pedi pro ChatGPT refazer o formulário anterior adicionando uma barra de progresso. " |
| 9:37 | E ele fez de novo uma solução simples, mas correta. Primeiro adicionou um `div` chamado "progress-bar-container" com outro `div` dentro chamado "progress-bar". Em seguida criou um CSS |
| 9:48 | simples pra cada um desses elementos. E no fim fez um Javascript que captura o evento de "submit" do form pra mandar o upload usando a classe XMLHttpRequest, |
| 9:57 | que tem evento pra indicar o progresso do upload. Ele usa isso pra conseguir o percentual que já foi e atualizar o comprimento do `div` da barra via CSS. |
| 10:07 | Honestamente não testei pra ver se funciona. Só de bater o olho parece que sim, mas de novo, |
| 10:12 | é um código super simplificado. Como não especifiquei que era pra usar Vue.js ou React ou outro framework, ele fez javascript puro. Se seu projeto usa React, |
| 10:22 | não dê copy e paste desse código. Faça um componente seguindo o padrão da sua equipe. É o tipo de código que se encontraria numa resposta de stackoverflow e que não se |
| 10:30 | deve copiar e colar sem ajustar. Note que pesquisei rapidamente no stackoverflow e |
| 10:35 | achei uma resposta com código similar ao que o ChatGPT me deu. No geral não tá errado. Estão entendendo? Digamos que você é um programador júnior iniciante num projeto |
| 10:44 | e o gerente pedisse, "fulano, faz um formulário de upload de imagens no nosso site?". Você faria |
| 10:50 | a mesma coisa que o ChatGPT: aquele primeiro formulário HTML multipart mandando o arquivo direto pra aplicação e gravando no disco local do servidor e pronto. Se a mesma requisição |
| 11:00 | viesse pra mim ou outro programador mais experiente, faríamos perguntas: "é pra coisas pesadas? quem vai usar, só pessoal interno ou é pra todo usuário? onde quer gravar |
| 11:09 | essas imagens? podemos mandar direto pro s3? quer mostrar uma barra de progresso pro usuário?" O ChatGPT sabe como fazer tudo isso, mas ele não questiona, faz o mais simples primeiro, |
| 11:19 | e não tá errado. Precisamos saber de antemão que queremos mandar pro S3 via URL pré-assinada, |
| 11:25 | daí ele faz exatamente o que foi pedido. Deixa eu dar outro exemplo pra ficar mais claro e aproveitar pra explicar mais conceitos que iniciantes não conhecem. Agora que temos a imagem |
| 11:34 | no bucket do S3, digamos que nossa aplicação web é tipo um clone de Instagram. Eu gostaria que a |
| 11:40 | imagem fosse cropada em formato quadrado e sempre fosse gravado em formato PNG pra padronizar tudo. |
| 11:46 | Então pedi exatamente isso pro ChatGPT: "agora escreva um exemplo de ação de controller de |
| 11:53 | Node.js Express pra puxar a imagem que deu upload na url pré-assinada do S3, daí use ImageMagick |
| 11:58 | pra cropar num quadrado perfeito, salvar como um PNG e dar upload pra outro bucket do S3". |
| 12:04 | De novo, tá certinho. No começo ele carrega bibliotecas que precisa saber carregar no `package.json`. E cria um endpoint de POST chamado "/process-image" que poderia ser |
| 12:14 | chamado pelo Javascript do formulário, pelo objeto de XMLHTTPRequest quando detectar que |
| 12:20 | o upload terminou, por exemplo. Esse código faz o seguinte, primeiro tem que saber a URL completa do arquivo que acabou de subir no bucket do S3, e configurar os parâmetros pra esse bucket. |
| 12:30 | Ele começa chamando o método `getObject` do objeto do s3. Não estou familiarizado |
| 12:35 | com a biblioteca `aws-sdk` pra Javascript, mas parece que devolve uma Promise e corretamente |
| 12:40 | dá `await`. Pra quem é de outras linguagens que não tem Promises, não é a mesma coisa, mas é como se estivesse colocando esse `s3.getObject` dentro de uma nova Thread |
| 12:51 | e esse `await` é como se fosse `join`, ou seja, pra esperar a thread terminar antes de continuar. |
| 12:56 | Finalmente, puxamos o conteúdo binário do arquivo nessa variável `imageBuffer`. Relembrando, se a |
| 13:03 | imagem tinha 60 megabytes, agora tem 60 megabytes na memória do interpretador V8 |
| 13:08 | desse processo. Na sequência, ele faz o código pra fazer crop, ou seja, pra recortar a imagem |
| 13:13 | num quadrado usando a biblioteca ImageMagick nesse "im" chamando o método "crop" direitinho. |
| 13:19 | Ele assumiu que eu queria uma imagem de 200 por 200 pixels. Tá ok, não tinha dito nenhum outro número, mas de novo, por isso que não pode |
| 13:27 | copiar e colar às cegas. Se o amador só copiasse sem ver e deixasse isso passar, agora aquela imagem de altíssima qualidade em 8K RAW do fotógrafo, se transformou numa imagem |
| 13:38 | porcaria minúscula. Se for pra ser fixo eu não cortaria nada menor que uns 1000 por 1000 pixels. |
| 13:44 | Esse pattern que ele faz de englobar tudo numa nova Promise e imeditamente chamar await, do ponto |
| 13:50 | de vista só desse código, seria a mesma coisa que não ter isso. Desse jeito (muda imagem). Esse |
| 13:55 | código vai esperar, await, até o crop terminar. Pela forma como o event loop do Node.js |
| 14:00 | funciona, suponho que a vantagem é que fazendo assim, a única thread do event loop ficaria bloqueada e o Node não iria conseguir fazer mais nada até o crop do ImageMagick terminar. |
| 14:10 | Mas colocando numa Promise e dando await, ele delega pro sistema operacional a operação de |
| 14:15 | esperar o I/O (ler arquivo, gravar arquivo), e libera o event loop pra fazer outra coisa, |
| 14:20 | como responder outras requisições de outros usuário. Quando a operação cara de I/O retorna, a thread continua depois do await como se nada tivesse acontecido. Essa é a |
| 14:30 | grande vantagem de se usar Node em primeiro lugar, o event loop e o suporte a Promises. |
| 14:35 | Vou voltar nisso mais pra frente. Em seguida temos um bloco de código que chama direto o programa "convert". Mesma coisa, Promise com await. E no final, o último bloco é chamando a biblioteca do |
| 14:45 | S3 pra fazer o upload do binário cropado e reformatado como PNG pro bucket do S3. |
| 14:51 | Agora vamos entender o problema. Quer dizer, não é nenhum problema se só você for usar essa aplicação, ou mesmo se for uma parte administrativa de um site onde |
| 15:00 | só meia dúzia de pessoas for usar. Mas se for pra todo usuário do site e tiver centenas ou milhares de usuários, isso vai pesar rapidamente e exigir que |
| 15:09 | se faça deploy de muitos servidores, tornando a infraestrutura super cara. Primeiro de tudo. Quando fazemos download da imagem do S3 e guardamos nessa variável |
| 15:18 | `imageData` e a imagem tem 60MB, de cara estamos consumindo 60MB de RAM do servidor. Digamos que |
| 15:24 | 100 usuários estão fazendo upload de imagens mais ou menos ao mesmo tempo. Seria 6 GB de |
| 15:30 | RAM sendo ocupado no servidor web. Pra processar imagens, realmente vai usar muita RAM, o problema |
| 15:35 | é compartilhar isso no mesmo servidor que precisa responder requisições web o mais rápido possível. |
| 15:41 | Além disso temos duas operações de rede pra s3, de download e upload, baixando uns 60MB e subindo uma imagem menor, mas é um tráfego que não podemos ignorar. De novo, se |
| 15:51 | tiver 100 usuários simultaneamente subindo imagens de alta qualidade, naquele minuto seu servidor tá |
| 15:56 | precisando gastar uns 6 gigabytes de tráfego só pra baixar do S3. "Ah, mas é porque você mandou |
| 16:02 | fazer direct upload pro s3, se estivesse num storage local estaria ocupando menos banda" Sim, é verdade e eis um exemplo de que não tem resposta certa. Se você é um serviço grande onde |
| 16:13 | uma das partes principais do que oferece aos usuários é armazenamento de arquivos grandes, talvez queira ter essa infraestrutura sob seu controle. Vai ter gente dedicada, com servidores |
| 16:23 | no data center dedicados só pra gerenciar armazenamento, daí não precisa usar tanto S3. Por outro lado, pode ser uma empresa no começo, que ainda não tem tantos servidores, |
| 16:32 | rede e gente de infra dedicada só pra armazenamento. Talvez o S3 seja um custo-benefício melhor. Nenhuma das duas respostas é errada, |
| 16:41 | depende de quem você é, qual seu nível de serviço, seu orçamento, quanto cobra e qual sua receita. |
| 16:46 | Digamos que somos uma empresa menor, e pra gente S3 faz sentido, então o código seria mais ou menos |
| 16:52 | como nesse exemplo. Mas além do armazenamento temos esses dois blocos pesados de processamento, |
| 16:58 | que é calcular o cropping e converter a image pra outro formato. Lembra que falei que na |
| 17:03 | variável `imageData` tem 60 megabytes do binário da imagem original? Nessa parte aqui a variável |
| 17:08 | `croppedImageBuffer` vai ter o binário da imagem recortada, digamos que seja uns 50 Megabytes. |
| 17:14 | E nessa outra parte aqui onde convertemos pra PNG faz de conta que o PNG ficou com uns 5 Megabytes de tamanho, porque é comprimido. Então, |
| 17:22 | antes dessa função acabar, essas 3 variáveis estão ocupando 60 + 50 + 5, ou seja, |
| 17:28 | 115 megabytes de memória. Se tiver 10 usuários pendurados fazendo upload de imagens semelhantes, |
| 17:34 | estamos ocupando uns 11 giga e meio de RAM dos servidores só nesse processo. Estão entendendo? O problema não é só conseguir rodar essas tarefas em paralelo pra liberar |
| 17:44 | processamento pro Node conseguir atender mais requisições. O problema é que quanto mais gente usar o sistema, mais rápido vai acabar os recursos das máquinas web e em breve não vai ter RAM pra |
| 17:54 | atender mais gente chegando. O objetivo é responder rápido, mas fazendo tudo isso, é impossível devolver a resposta HTML pro usuário na faixa de menos de 100 milissegundos. |
| 18:04 | Por isso que pra casos assim, o correto é jogar esse processamento pra fora da aplicação web. |
| 18:10 | Isso não vai diminuir nem a carga de processamento e nem o uso de RAM, mas vamos conseguir segmentar, |
| 18:15 | separar os recursos dedicados só pra web e os recursos dedicados pra processar as imagens. No |
| 18:21 | caso do Node.js podemos usar a biblioteca Bull, como mencionei no último episódio. |
| 18:26 | Pedi pro ChatGPT: "escreva o mesmo código mas sem usar Promises e na realidade deferir as tarefas |
| 18:33 | de download da imagem, cropping, salvar em PNG e fazer upload de volta pra outro bucket como um |
| 18:38 | job assíncrono implementado como um worker de Bull. ("write the same code but without using Promises and actually deferring the tasks for downloading the image, cropping the image, saving as PNG and uploading back to a bucket to an asynchronous job implemented as a Bull worker") Sabendo perguntar em detalhes exatamente o que queremos, |
| 18:45 | o ChatGPT responde direitinho. Ele não tem como adivinhar qual é a melhor solução pra você, |
| 18:51 | por isso sempre vai dar a resposta mais simples. Se eu não soubesse que Bull existe, o ChatGPT não ia me dizer. Mas agora o código começa com ele carregando a |
| 19:00 | biblioteca do Bull e instanciando uma nova fila chamada "image-processing". Em seguida já adiciona uma nova tarefa na fila com a chave do objeto no bucket, que é a imagem original que |
| 19:10 | o usuário fez upload. Esse é o trecho que iria no controller do Express e vamos tirar fora. |
| 19:16 | Eu não pedi pro ChatGPT reescrever aquele trecho `app.post("/upload")` do Express, |
| 19:21 | mas seria arrancar fora todo aquele código do processamento de imagens e simplesmente colocar essa linha de registrar uma nova tarefa na Fila e rapidamente devolver OK |
| 19:31 | pro usuário parar de esperar na fila. Caso a página web que iria devolver tivesse um preview da imagem que subiu, não teríamos como mostrar porque ainda não processamos, |
| 19:39 | mas aí é só colocar uma imagem genérica com uma mensagem de "aguarde, estamos processando", |
| 19:44 | e colocar um WebSocket ou algo assim pra puxar a imagem processada quando ficar disponível depois. |
| 19:50 | Voltando pro Worker de Bull, é a mesma coisa de antes, o código que acabamos de apagar do |
| 19:55 | endpoint de `app.post`. Esse worker eu instalaria num servidor separado só pra workers. A vantagem é que posso controlar quantos tarefas quero processar simultaneamente. Digamos |
| 20:06 | que meu servidor não tenha 11 gigabytes de RAM que seria necessário pra rodar 100 tarefas simultâneas |
| 20:11 | de imagens grandes. Só tenho 4 gigabytes, então só dá pra rodar umas 30 tarefas ou |
| 20:17 | menos. Mas tudo bem. Vai demorar mais, mas como o usuário não tá pendurado esperando e nem estou congestionando os servidores web, não tem problema se demorar o triplo de tempo. |
| 20:27 | Além disso tem outra razão pra jogar essas coisas pesadas num job assíncrono em vez de tentar rodar |
| 20:32 | com Promises ou Threads. Digamos que tenha um bug na biblioteca do ImageMagick ou do S3 e dê |
| 20:38 | um crash na hora de processar por alguma razão. Como faço pra rodar de novo essa tarefa? Existem |
| 20:43 | bibliotecas como o "async-await-retry", mas imagina que seja um erro sistêmico, e tinha 100 usuários subindo imagens e por um erro qualquer, as 100 tarefas comecem a dar pau, |
| 20:53 | e 100 vezes o sistema tente dar retry e fique retentando? Meu servidor vai morrer retentando à toa assim. Eu preciso ter controle sobre regras de retry. |
| 21:01 | Numa fila como Bull, se os workers começam a dar pau, posso configurar pra não dar retry e |
| 21:08 | só marcar erro. Se descobrimos que foi algo sistêmico, podemos corrigir o bug e depois que estiver tudo corrigido, mandar as tarefas pendentes na fila rodar, tudo sob controle. Na |
| 21:18 | documentação do Bull ele explica como podemos configurar retries automáticos, por exemplo, aqui ele diz pra tentar 3 vezes caso dê problema e com um tempo de backoff exponencial que começa |
| 21:28 | em 1 segundo na primeira tentativa, 2 segundos pra segunda, 4 segundos pra terceira. Nunca é |
| 21:34 | bom retentar imediatamente porque muito provavelmente vai dar problema igual. E o Bull tem um monte de funcionalidades importantes como Gracefull shutdown. |
| 21:42 | Digamos que modificamos o código dos workers e agora precisamos atualizar nos servidores. Não pode simplesmente desligar tudo e atualizar. Não queremos crashear jobs |
| 21:52 | que estão rodando. Normalmente queremos que o worker saiba que tem uma atualização e reinicie só depois que terminar de processar o job que estava em andamento. |
| 22:00 | Se temos vários servidores de Bull, cada um com vários processos, ele vai desligando, atualizando e reiniciando um a um só depois que terminar os jobs. Assim |
| 22:09 | nenhum job vai corromper. É que nem dar shutdown normal num Windows em vez de apertar o botão de força e desligar forçado, que nunca é bom. |
| 22:16 | E sendo um sistema com fila e workers separados, existem projetos como o Matador, |
| 22:21 | que é uma interface web pra monitorar os trabalhos na fila do Bull. Assim um administrador ou devops pode checar visualmente se os workers |
| 22:30 | estão se comportando como deveriam e facilitar conseguir identificar se tudo está correndo bem. Entendam, colocar um Bull e jogar aquele processamento pesado de imagens em outros |
| 22:39 | servidores não diminui a quantidade de recursos sendo gastos. Ele serve pra tornar esse processamento mais gerenciável e previsível. Tudo que |
| 22:48 | roda no lado dos servidores web é pra ser leve e rápido. Tudo que é pesado, como nesse exemplo de imagens, jogamos em jobs em outros servidores que só rodam jobs. |
| 22:57 | E a comunicação entre os dois é feita via uma Fila. No caso do Bull ele usa um módulo chamado |
| 23:03 | `ioredis` que usa Redis como servidor de fila. O correto na hora de instanciar a fila é indicar o |
| 23:10 | servidor do Redis na conexão e quando subimos os workers, apontamos pro mesmo Redis pra escutarem |
| 23:15 | quando chegar novos jobs, como estou mostrando neste exemplo que tem na própria documentação. Se não ficou claro vou repetir: quando precisamos executar alguma tarefa mais pesada, faz de conta, |
| 23:25 | mandar uma linha nova de log pra um servidor de log, enviar uma notificação, coisas que |
| 23:30 | não duram muitos segundos ou até minutos, é possível que Promises no caso de Javascript, ou async/await num DotNet ou mesmo Threads como num Java, façam sentido. O problema é quando a |
| 23:40 | duração desse processamento é longo e, pior, varia bastante. Nesse caso o tempo vai variar dependendo |
| 23:47 | do tamanho das imagens. Fica imprevisível demais pra controlar misturado com a requisição web. |
| 23:52 | O certo é mandar pra jobs assíncronos. Isso me lembrou um caso. Esses dias eu estava |
| 23:57 | configurando minha conta de Google Workspace, que são os planos pagos do Google pra serviços como Gmail. Eu queria habilitar a opção de conseguir mudar o tema do meu Gmail, isso |
| 24:07 | tava desligado sei lá porque. Fui no admin, nessa tela e liguei. Mas mesmo recarregando meu Gmail, |
| 24:12 | essa opção não aparecia. Olha só, em outra conta de Google Workspace que é da minha empresa, já tá |
| 24:18 | ligado e em configurações aparece essa opção aqui tão vendo? Por que na outra conta não apareceu? Porque quando habilitei no admin ele mandou isso pra uma fila que tem um |
| 24:27 | tempo super longo pros workers pegarem. Pode ser porque tem tanta operação em fila dos milhões de usuários que usam a plataforma, que precisa de horas pra |
| 24:34 | executar meu pedido. Você imaginaria que deveria ser imediato, mas eles escolheram separar assim porque deve ser pesado por N motivos que não temos acesso de saber. |
| 24:43 | Veja o YouTube. Toda vez que termino um episódio, faço upload do arquivo de video. É um arquivo |
| 24:49 | de dezenas de gigabytes, leva vários minutos pra subir. E depois que sobe precisa fazer checagens |
| 24:54 | de copyright, gerar versões com resoluções menores, sincronizar cópias em CDN e assim por diante. Enquanto isso não acontece, eu fico vendo essa mensagem indicando que ainda |
| 25:03 | tá processando. Só depois que termina que consigo fazer coisas como adicionar cards. Veja no anchor.fm, que é onde eu subo o arquivo mp3 pra publicar no Spotify ou |
| 25:13 | Deezer. Eu faço upload e depois ele manda pra alguma fila, enquanto isso no meu front-end só |
| 25:18 | indica que tá "processando". Meu navegador não tá pendurado no servidor deles. Provavelmente tem um javascript que de tempos em tempos checa se já terminou, ou tem um web socket aberto. |
| 25:28 | Qual "a" melhor forma de fazer tudo isso? Não tem. Depende de quantos servidores, |
| 25:34 | de quais tamanhos você pode pagar. O software tem que ser feito pra organizar os recursos disponíveis de forma que fique tudo menos difícil de gerenciar. Não quer dizer necessariamente |
| 25:44 | mais performance ou rodar tudo em paralelo. Controle significa que quando alguma coisa |
| 25:49 | dá erro eu tenha a oportunidade de pausar, checar, consertar e mandar rodar de novo, |
| 25:55 | e pra isso soluções usando fila e workers como o Bull de Node.js faz sentido. Muitos pensam que porque Node.js tem eventloop não precisa de jobs assíncronos, |
| 26:06 | só Promises. Espero que tenham entendido que são funcionalidades diferentes pra casos diferentes. |
| 26:11 | Mesma coisa pessoal de Java, que tem threads nativas e poderiam achar que não precisam de jobs assíncronos. Mas um dos sistemas de fila mais reconhecidos é justamente o Apache Kafka, que é |
| 26:22 | feito em Java. Aproveitei pra pedir pro ChatGPT reescrever o worker de Bull em Spring Boot ("To |
| 26:27 | process an image that was uploaded to an Amazon S3 bucket using a pre-signed URL in a Spring Boot app, using a Kafka queue to defer the tasks to a worker, you can use the following code") Tecnicamente, o boilerplate, a parte burocrática de configuração de Kafka exige |
| 26:33 | adicionar o pacote org.springframework.kafka no arquivo `pom.xml` do projeto que é mais ou |
| 26:39 | menos o equivalente ao `package.json` de Node. Daí teria que usar o script `kafka-topics.sh` |
| 26:44 | pra criar os tópicos da fila. Finalmente, pra aplicação Spring Boot conseguir criar mensagens pra mandar pra fila, precisa configurar um `ProducerFactory` que é |
| 26:53 | o responsável pela estratégia de como criar instâncias de Producers de Kafka. O código de exemplo que o ChatGPT gerou instancia um KafkaTemplate mas ele deveria injetar um |
| 27:04 | ProducerFactory dentro, que foi omitido. Como o video não é pra ser um tutorial de Spring Boot, |
| 27:10 | depois leiam a documentação, mas só pra explicar que, de novo, o ChatGPT não me deu tudo mastigado. Eu sei que falta coisa porque já li a documentação. Se você |
| 27:19 | nunca usou Kafka na vida e achou que o ChatGPT ia te dar tudo mastigado, pensou errado. |
| 27:24 | Em seguida ele cria um endpoint web chamado "/process-image" como tínhamos feito |
| 27:29 | com o Express. No Spring Boot isso é configurado com uma annotation que é essa linha que começa |
| 27:34 | com arroba pra decorar a função logo abaixo. E essa função responde super rápido porque a única coisa que faz é pegar a instância de KafkaTemplate e enviar a mensagem do job pra fila. |
| 27:45 | A classe de Worker abaixo também é configurado com outra annotation pra dizer que é o responsável por |
| 27:51 | mensagens enviadas pro tópico "image-processing". Nessa classe tem a função `processImage` que vai |
| 27:57 | fazer a mesma coisa que o worker de Bull, só que em Java. Instanciar bibliotecas de S3 e ImageMagick nas versões de Java, download da imagem num ByteArray em memória, |
| 28:07 | cropar e converter em PNG e fazer upload. Em termos de tempo de processamente, como o grosso depende da conexão remota com o S3 e de chamar o mesmo ImageMagick, |
| 28:17 | tanto faz ser em Javascript ou em Java, vai levar mais ou menos o mesmo tempo pra rodar. |
| 28:22 | Pra quem gosta de perder tempo discutindo benchmarks de linguagens em subreddit, entenda |
| 28:28 | esse cenário. Veja esses dois códigos lado a lado. A linguagem meio que não importa, porque o grosso do trabalho não é feito nem em Javascript e nem em Java. O grosso é o |
| 28:38 | ImageMagick e o S3. Nas dus versões, vão fazer fork e subir um processo separado da ferramenta `convert` que vem no pacote do ImageMagick, que é feito em C. |
| 28:48 | Ele é quem vai fazer o trabalho sujo. E sim, eu não precisava ter usado ImageMagick, poderia ter |
| 28:53 | escolhido uma biblioteca feita em puro Javascript e outra feita em puro Java. Mas não vejo porque, ImageMagick é a ferramenta mais madura e mais reconhecida pra trabalhar imagens. É |
| 29:03 | literalmente um Photoshop em linha de comando que faz praticamente tudo. Pra que vou reinventar a |
| 29:09 | roda? E mesmo se eu reinventasse a roda, não seria uma diferença muito grande de qualquer jeito. Novamente, o objetivo de hoje foi demonstrar como um código feito como exercício simples, |
| 29:20 | que só você vai usar sozinho na sua própria máquina é de um jeito. Mas como as mesmas |
| 29:25 | funcionalidades num projeto de verdade ficam completamente diferentes. Na sua própria máquina, não precisa de Bull nem de Kafka. Basta subir uma Promise, ou child process que é fork de processos, |
| 29:35 | ou worker thread que sobe uma thread no mesmo processo pra rodar em paralelo. Mesmo se a imagem |
| 29:41 | for pesada, só você tá usando, mesmo se demorar alguns minutos e usar muita RAM e cair pro swap |
| 29:46 | que é mais lento, não tem problema. O problema só aparece se estiver exposto na internet, aí fodeu. E agora sobre coisas como o ChatGPT ou GitHub Copilot que não mostrei nesse video mas já |
| 29:56 | usei. Acho excelentes. Eu sei exatamente o que quero, eu sei que não quero uma solução simples |
| 30:02 | com upload direto na aplicação web. Eu sei que existe a técnica de URL pré-assinada, então o |
| 30:08 | ChatGPT me obedece. Eu sei que o processamento de imagens, download e upload pro S3 é demorado, |
| 30:13 | por isso eu soube pedir pro ChatGPT fazer o código levando isso em consideração e usar Bull e Kafka. |
| 30:20 | Além disso eu sei que nos exemplos de código que o ChatGPT me devolveu não tem a configuração de |
| 30:26 | Redis do Bull nem do ProducerFactory de Kafka. Eu sei onde configurar e os detalhes que não |
| 30:32 | lembro. Eu sei achar a documentação e completar. Também poderia pedir. "Ow, ChatGPT, faltou a configuração de ProducerFactory no KafkaTemplate, |
| 30:40 | pode completar pra mim?". Entenderam? Vocês assistindo que são iniciantes e ainda não trabalharam em projetos de verdade: já tinham ouvido falar dessas coisas? |
| 30:49 | Não estou dizendo que ninguém ensina, mas entenda: os cursos mais básicos querem que vocês tenham a falsa ilusão que programar é simples e qualquer |
| 30:56 | um pode fazer. E te dão um passo a passo pra conseguir fazer um front-end de instagram, com upload de imagem, e quando conseguir ver a imagem postada na sua aplicação local, |
| 31:05 | fica feliz. E realmente, a primeira vez que consegue é bacana mesmo. Mas acho que falta dizer que em cima disso tem esse tanto de coisas que mostrei nesse video e no anterior. |
| 31:15 | Uma inteligência artificial consegue facilmente substituir um programador júnior inexperiente |
| 31:21 | como puderam ver aqui. Porém, ele ainda não consegue substituir um programador experiente. Eu vou ficar impressionado quando pedir pra ele fazer alguma coisa e em vez de |
| 31:30 | me dar um código simples, começar a me devolver perguntas pertinentes, como quantos usuários eu espero que o sistema tenha que aguentar, ou o volume |
| 31:38 | dos uploads. Um programador experiente não sai codando à toa de qualquer jeito. O ChatGPT é um serviçal bem burrinho que dá respostas erradas ou incompletas com muita |
| 31:50 | convicção. Por exemplo, num video que eu tava assistindo, do Joseph Carlson, ele pediu pro irmão dele, que é médico de verdade, fazer uma pergunta pro ChatGPT, |
| 31:58 | no caso foi "qual a condição mais comum que provavelmente se origina na coróida e que afeta homens jovens?" E o ChatGPT faz um textão explicando que é neovascularização |
| 32:09 | coroidal e segue explicando o que é isso. E o médico responde: "nada mau, mas está incorreto. |
| 32:15 | Seria correto se estivéssemos falando de pessoas idosas. A resposta correta seria retinopatia serosa, e é por isso que fazer auto diagnóstico via Google não funciona". |
| 32:25 | Claro, esse caso em particular, com um pouco mais de treino o ChatGPT deve conseguir responder |
| 32:31 | correto da próxima vez, mas o ponto é que as respostas deles não são garantidamente corretas o tempo todo e quando são erradas, ele não tem noção que tá errado. A resposta |
| 32:40 | é sempre verbalizada de uma forma bem assertiva. Se você não for também especialista no assunto, |
| 32:46 | vai acreditar e nesse caso poderia se auto-diagnosticar errado e acabar tendo problemas graves. Mas isso já acontece hoje com Google também. |
| 32:54 | Pra amadores, o ChatGPT pode ser usado como uma ferramenta de estudos, e nada do que ele soltar deve ser usado no mundo real sem consultar um especialista, |
| 33:03 | porque você não tem o conhecimento e nem a experiência pra saber se veio errado ou incompleto. Pra especialistas de verdade, o ChatGPT é excelente pra fazer as tarefas |
| 33:13 | mundanas que nós sabemos fazer, mas não vale nossa taxa hora, como os códigos que mostrei |
| 33:18 | aqui. Eu sei avaliar se o código serve ou não, por isso pra mim o ChatGPT funciona bem. Quando ele não sabe responder, ou me responde errado, eu sei como consertar. |
| 33:27 | O banco de dados, o modelo dele, é realmente impressionante. O que mais me impressiona não |
| 33:32 | é funcionar. Eu sei que funciona. As teorias pra isso existem e vem sendo evoluídas e desenvolvidas faz décadas. Mas pra fazer modelos desse tipo custa |
| 33:41 | extremamente caro. Eu estava assistindo o canal Coldfusion que gosto muito e recomendo, e no video ele menciona o que o Sam Altman, presidente da OpenAI falou. |
| 33:50 | Hoje temos milhões de pessoas usando o ChatGPT pela novidade. Mas ele não escala pra ordem de |
| 33:56 | bilhões de pessoas, que seria a escala de redes sociais como Facebook ou a escala que Google, |
| 34:02 | Apple ou Microsoft conseguem atingir com seus produtos. O custo seria inviável. Segundo o Altman, uma resposta do ChatGPT custa de 10 a 100 vezes o custo de pesquisa |
| 34:12 | no Google. Ainda precisa otimizar 100 vezes essa tecnologia pra chegar num ponto onde |
| 34:17 | vai ser economicamente viável todo mundo usar no dia-a-dia, como smartphones ou um Google. |
| 34:24 | E claro, em alguns anos isso vai acontecer. Hoje ainda não é esse dia. Pode levar 10 anos, 20 |
| 34:30 | anos. E isso pra otimizar custos. Pra chegar num ponto onde posso confiar quase 100% a ponto de não |
| 34:36 | precisar de especialistas humanos, isso realmente não vejo acontecendo tão cedo. Eu vejo sim, |
| 34:42 | sendo um excelente auxiliar pra nós especialistas, e num espectro menor, ajudando não especialistas |
| 34:47 | com perguntas simples do dia a dia, algo um pouco melhor que as porcarias de Alexa, Siri ou Cortana. |
| 34:53 | Pra nós programadores tem outro aspecto. Muitos iniciantes acham que deveriam estudar tópicos de |
| 34:59 | inteligência artificial porque num futuro próximo todo mundo vai estar programando inteligências artificiais, mas sinto te informar que isso não vai acontecer como você pensa. Sim, |
| 35:08 | se você tem nível e talento pra ser contratado pra times de pesquisa da OpenAI, da Microsoft, |
| 35:13 | da Apple, do Google, aí você teria chances de trabalhar na construção dessas inteligências. Mas fora dessas empresas gigantes, não vai rolar. |
| 35:20 | O maior problema não são os algoritmos. O problema é o treinamento. Pra conseguir fazer um Dall-e 2, Midjourney ou Stable Diffusion gerar fotos e desenhos artísticos realistas, |
| 35:31 | precisou treinar cada um desses modelos com milhões de imagens diferentes por muito e muito tempo. Estamos falando em escala de petabytes de dados, milhares |
| 35:41 | ou milhões de horas em dezenas ou centenas de servidores super caros. Data centers dedicados |
| 35:46 | com o supra sumo das placas de video NVIDIA. Ou seja, você, no seu PCzinho ou notebook, jamais vai conseguir produzir um modelo de verdade que vá além de um brinquedo. |
| 35:55 | Modelos sérios do tamanho de um ChatGPT custam milhões de dólares pra produzir. Você não vai |
| 36:01 | ter acesso a esse tipo de investimento e infraestrutura. Se alguém de uma tech startup desconhecida vier te convidar pra construir um modelo desses, já sabemos que |
| 36:09 | ele mora em Nárnia, enxerga unicórnios e tem amigos imaginários. Não vai acontecer. Na prática, quase todos nós, programadores, no máximo vamos poder usar modelos prontos |
| 36:20 | dos outros, como da OpenAI. Se já tentou usar o ChatGPT todo dia, já deve ter visto como do nada uma resposta engasga e dá erro de conexão, |
| 36:27 | ou como o site todo às vezes fica fora do ar por alguns segundos ou minutos. Exatamente porque nesta versão de agora, ainda não escala. Precisa sair uma versão 2.0 com |
| 36:36 | mais garantias pra gente poder investir em produtos que tirem proveito desse modelo. Mas a pergunta que todo mundo tem na cabeça é "o ChatGPT vai substituir programadores?" E a |
| 36:46 | resposta é simples: sim, vai substituir os ruins, os preguiçosos, os falsos sêniors e |
| 36:52 | infelizmente alguns dos iniciantes. Porque muitas tarefas mundanas de código que um júnior pegaria, |
| 36:57 | eu como sênior posso usar o ChatGPT pra fazer mais rápido e, mais importante, com zero reclamação, mais rápido e com menos erros. Agora, substituir um bom sênior de verdade? Eu |
| 37:07 | diria que precisa pelo menos de uns bons 50 anos antes de cogitar algo assim. Tá longe, bem longe. |
| 37:13 | Eu estou satisfeito o suficiente com ferramentas como o ChatGPT ou Copilot do GitHub. Eles são |
| 37:19 | mais eficientes e mais rápidos do que dar alt-tab e procurar o que preciso no Google ou Stackoverflow. Eu sei quando ele me devolve bobagem e consigo ignorar. E sei |
| 37:28 | quando tá incompleto. Ao mesmo tempo, é bom pra fazer coisas mudanas e repetitivas, como testes |
| 37:34 | unitários por exemplo. Ou me devolver exemplos de códigos que estou com preguiça de procurar no Github. Realmente, é como se eu tivesse um serviçal que procura no Google pra mim. |
| 37:43 | Muitos YouTubers tem feito video dizendo "olha só como o ChatGPT escreveu o script desse video". Eu |
| 37:50 | tentei, mas tava dando tanto trabalho que foi mais r;apido eu mesmo escrever. Sinto muito, na atual versão, o ChatGPT é incapaz de escrever um script pra este canal sem muita intervenção. |
| 38:01 | Eu concluo que os canais dos outros são bem superficiais e simplórios se um script gerado pelo ChatGPT é capaz de enganar a audiência. No meu caso não rolou. O ChatGPT é excelente |
| 38:12 | pra encher linguiça de forma convincente, mas falar direto ao ponto, ele tem muita dificuldade. |
| 38:17 | No final a conclusão é simples: seu grau de empolgação com o ChatGPT é inversamente |
| 38:24 | proporcional ao seu nível de conhecimento. Se for baixo, vai ficar exageradamente empolgado, |
| 38:29 | se for alto, vai achar útil, com ressalvas. É a diferença de quem vê um truque de mágica pela |
| 38:35 | primeira vez, e de quem já sabe como o truque funciona. Pra quem não quer ser substituído por uma IA mande dúvidas nos comentários abaixo. Se curtiram o video deixem um joinha, |
| 38:44 | assinem o canal e não deixem de compartilhar o video com seus amigos. A gente se vê, até mais! |
