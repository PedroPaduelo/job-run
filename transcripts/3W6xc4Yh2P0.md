# Refletindo sobre RESOLUÇÃO de Problemas | O bug do Premiere

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=3W6xc4Yh2P0
- **Duração:** 28:03
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita |
| 0:02 | O último vídeo sobre ambiente dev em Ubuntu deu bastante trabalho pra fazer e parece que |
| 0:08 | vocês gostaram! |
| 0:09 | Em dois dias ele já ultrapassou os views do vídeo anterior. |
| 0:13 | E isso porque o diabo tem uma hora e vinte minutos! |
| 0:16 | Esse vídeo foi bem sofrido de fazer e me custou aproximadamente umas 40 horas de trabalho. |
| 0:21 | Eu tive um problema técnico que me fez quase varar 2 noites e atrasou o lançamento em |
| 0:25 | quase 2 dias, por isso acabei lançando só sexta feira passada. |
| 0:30 | Meio que sem pensar eu fui compartilhando o que estava acontecendo nas stories do meu |
| 0:34 | Instagram e Facebook, então quem me segue nas redes sociais viu acontecendo em tempo |
| 0:40 | real. |
| 0:41 | Aliás, se vocês ainda não me seguem, agora é uma boa hora pra fazer isso! |
| 0:44 | Como curiosidade de bastidores eu fiquei com vontade de explicar o que aconteceu e como |
| 0:49 | eu resolvi o problema, se por acaso vocês tenham interesse de como funciona um Adobe |
| 0:55 | Premiere, mas em paralelo eu pensei no video de hoje por causa dos comentários que alguns |
| 0:59 | de vocês me mandaram em privado. |
| 1:01 | Como esse vídeo é dividido meio que em duas partes, se a parte mais técnica de edição |
| 1:07 | de vídeo não interessa tanto, pulem pra este tempo aqui embaixo pra ir direto pra |
| 1:11 | segunda parte. |
| 1:12 | Alguns me deram boas dicas, outros mandaram sugestões enlatadas kkk Eu sei que alguns |
| 1:18 | foi piada pra quebrar o gelo e nenhum foi com má intenção. |
| 1:21 | Porém achei um bom gancho pra um tipo de recomendação que se vocês ainda não ouviram, |
| 1:26 | vão ouvir centenas de vezes durante toda a carreira de vocês. |
| 1:30 | E em como você organiza um pouco a resolução de problemas técnicos, que vai ser válido |
| 1:35 | se você for programador também. |
| 1:37 | (...) |
| 1:38 | Então, o que diabos aconteceu? |
| 1:48 | Como background, eu comecei o canal em Agosto de 2018, este é o episódio 55 então eu |
| 1:53 | já editei mais de 50 vídeos em 1 ano. |
| 1:56 | Mas essa não é a primeira vez que eu edito vídeos. |
| 1:59 | Eu já editava videos de forma ainda mais amadora no passado. |
| 2:02 | Em 2010 eu experimentei com a ideia de tentar vender cursos em video, eu fiz uns 3 videos |
| 2:07 | que divulguei pelo meu blog, eu acho que cobrei R$ 10 reais? |
| 2:11 | Não lembro. |
| 2:12 | Foram os videos ensinando Git, outro ensinando Vim e uma palestra. |
| 2:16 | Porém, o volume de compra foi tão baixo que ficou claro que eu não ia ganhar a vida |
| 2:20 | vendendo video, então eu liberei os videos gratuitamente logo depois. |
| 2:24 | Vou deixar os links nas descrições abaixo caso alguém tenha interesse em ver video |
| 2:29 | velho. |
| 2:30 | Apesar de não terem viralizado nem nada, até hoje eu ainda encontro pessoas que falam |
| 2:33 | que aprenderam Git por esse video. |
| 2:35 | Não lembro se foi o de Git ou de Vim mas um deles tinha umas 3 horas de duração. |
| 2:40 | Se por acaso você aprendeu Git ou Vim por esses vídeos mandem nos comentários abaixo! |
| 2:46 | Antes disso, vira e mexe eu brincava de fazer curtas. |
| 2:49 | Por exemplo, quando eu organizava a Rubyconf Brasil eu fiz alguns videos pra divulgação. |
| 2:54 | No fundo era mais uma desculpa pra eu brincar com isso. |
| 2:57 | Eu gosto de fazer essas coisas faz anos. |
| 2:59 | A primeira vez que vi edição de video foi quando amigos meus faziam AMV ou Anime Music |
| 3:05 | Video no fim dos anos 90 usando dois VCR, sim VHS mesmo. |
| 3:10 | Fitas de video tinham duas trilhas, uma de video e outra de audio e era possível em |
| 3:14 | alguns gravadores de video mais caros gravar as trilhas separadamente, então dava pra |
| 3:18 | colocar um VHS no primeiro player, gravar o trecho de video no segundo e ir concatenando |
| 3:23 | os pedaços de video um atrás do outro e no fim adicionar o audio de uma vez na trilha |
| 3:28 | separada. |
| 3:29 | Aliás, de curiosidade eu disse que eu comecei este canal em Agosto de 2018 mas se você |
| 3:33 | olhar no About do canal vai ver que ele está aberto desde Junho de 2007. |
| 3:38 | Eu devia ter aberto um segundo canal, mas eu só escondi os videos aleatorios que eu |
| 3:42 | subia aqui pra começar a subir os do Akitando. |
| 3:46 | Os links do music video e videos de Rubyconf que eu mencionei ficavam aqui e vou manter |
| 3:50 | privado pra não poluir o canal mas vou deixar os links nas descrições se alguém tiver |
| 3:55 | curiosidade de ver. |
| 3:56 | Eu mesmo cheguei a conseguir um capturador de video pra PC que eu ligava o VCR e fiz |
| 4:02 | meu primeiro AMV numa das primeiras versões do Adobe Premiere lá por 2000 ou algo assim. |
| 4:07 | E desde então eu sempre me interessei por isso no nível de hobby, eu nunca cheguei |
| 4:11 | a tentar ganhar a vida com isso. |
| 4:13 | Edição de video digital segue o mesmo principio até hoje. |
| 4:17 | Numa fita você podia ter 2 trilhas, uma trilha de video e outra de audio. |
| 4:21 | É a mesma coisa digitalmente, mas você pode editar em múltiplas trilhas pra ser compilado |
| 4:26 | em uma no final. |
| 4:28 | As coisas avançaram bastaram nos últimos 20 anos. |
| 4:31 | Codecs foi uma delas. |
| 4:32 | Eu queria fazer um video falando só de Codecs de audio e video, mas só de pensar que ia |
| 4:36 | virar um video de 3 horas eu desisto kk Um dia, um dia … |
| 4:39 | Enfim, eu ainda vou fazer um video só sobre os bastidores do canal, mas eu posso dizer |
| 4:44 | que a parte de editar os videos é a que menos dá trabalho. |
| 4:48 | Normalmente eu levo uma média de 5 a 6 horas entre começar a editar, exportar, fazer upload, |
| 4:54 | colocar os cards e fazer thumbnail. |
| 4:56 | Em videos mais simples que não tem tanta imagem pra procurar e colocar eu demoro menos. |
| 5:00 | Ultimamente eu gravo o video domingo ou segunda, daí chego em casa terça e começo a editar |
| 5:06 | lá pelas 19h e até 1h ou no máximo 2h terminei tudo. |
| 5:09 | Agora, o video da semana passada de Linux, só a parte de edição deve ter levado mais |
| 5:14 | de 20 horas! |
| 5:15 | O sintoma foi assim: eu comecei a editar normalmente como sempre faço. |
| 5:19 | A diferença desta vez é que tinha um video mais longo, de 3 horas, que foi a parte que |
| 5:24 | eu capturei com o programa OBS. |
| 5:27 | São todas as cenas do Ubuntu, que eu gravei da minha tela seguindo o script. |
| 5:31 | As partes onde eu apareço e o audio que acompanha as telas eu já tinha gravado antes. |
| 5:36 | Eu vou recortando e editando de acordo com o script. |
| 5:39 | A gravação da tela ficou com 3 horas porque tem muita parte do apt install e compilação |
| 5:45 | das linguagens que é basicamente ficar esperando até terminar. |
| 5:48 | Se vocês assistiram o video devem ter visto que eu acelerei bastante essas partes pra |
| 5:53 | vocês não ficarem esperando. |
| 5:54 | Então eu fui cortando, sincronizando o audio com a gravação da tela. |
| 5:58 | Aos poucos eu notei que o preview ia ficando um pouco lento pra iniciar, tipo um lag. |
| 6:03 | Mas fui indo mesmo assim e chegou uma hora quando eu tinha editado uns 50 minutos de |
| 6:08 | video que eu não conseguia fazer mais nada. |
| 6:10 | Qualquer coisa travava a interface e eu tinha que fechar forçado o Premiere inteiro e reiniciar. |
| 6:17 | Simplesmente não conseguia mais editar. |
| 6:18 | O script que eu escrevi foi o mais longo até agora. |
| 6:19 | Na média meus scripts tem umas 10 páginas de Word. |
| 6:20 | Os mais compridos que eu já tinha feito era umas 20 páginas. |
| 6:21 | Mas dessa vez eu me superei e escrevi nada menos que 30 páginas. |
| 6:22 | Eu falei que gravo domingo ou segunda, mas desta vez eu já estava atrasado. |
| 6:23 | Eu deixei pra terminar de escrever, gravar e editar tudo na terça que foi feriado, na |
| 6:24 | minha cabeça eu tinha estimado que ia dar tempo pra soltar na quarta como sempre. |
| 6:25 | Porém chegou na terça de noite e começou a acontecer essas travadas. |
| 6:26 | Quem nunca passou por isso? |
| 6:27 | Tá tudo andando bem, você vai cumprir o prazo que estimou, mas aí aparece uma situação |
| 6:28 | que você não esperava, um bug inesperado ou um problema de BIOS mesmo, e aí seu prazo |
| 6:29 | vai pelos ares. |
| 6:30 | Fica a dica: quando isso acontece, como meu sócio diria, Inês é morta. |
| 6:31 | Além disso vale lembrar: eu sou amador em edição de video. |
| 6:32 | Eu nunca trabalhei profissionalmente com video. |
| 6:33 | Então eu sou no máximo nível junior. |
| 6:34 | E junior sempre se fode. |
| 6:35 | Eu sei os 20% sobre edição de video que resolve 80% dos meus problemas e eu consigo |
| 6:40 | entregar os videos toda semana. |
| 6:42 | Lembram que eu expliquei esse conceito no meu video de Devo Fazer Faculdade, versão |
| 6:45 | de 22 anos depois? |
| 6:48 | E eu disse que pra resolver os últimos 20% vai precisar dos 80% de conhecimento que eu |
| 6:53 | ainda não tenho. |
| 6:54 | Essa regra é quase uma lei. |
| 6:55 | E uma hora eu ia passar por isso. |
| 6:58 | Qualquer um que trabalha com video profissionalmente vai ver o que aconteceu e dar risada porque |
| 7:02 | foi um erro trivial pra quem é sênior nisso. |
| 7:05 | E sim, eu sei que no Preview você deve fazer ele apresentar em metade ou um quarto da resolução |
| 7:11 | se o video original for 1080p ou até 8 ou 16 vezes menor se a resolução original for |
| 7:16 | 4K pra cima. |
| 7:18 | Também sei que é pra desabilitar alta qualidade. |
| 7:20 | Também me certifiquei se a configuração de memória estava adequada com o máximo |
| 7:24 | de memória reservada pro Premiere. |
| 7:26 | Chequei se o cache de media estava apontando pro HD mais rápido porque eu tenho um SSD |
| 7:31 | SATA-3 Samsung EVO como drive principal mas ainda tenho um HD mecânico como drive secundário. |
| 7:37 | Também chequei se por algum acidente ele estava usando o renderizador de preview Mercury |
| 7:43 | via software que usa OpenGL. |
| 7:45 | Como eu tenho uma placa de video decente que é a Nvidia GTX 1070Ti o certo é usar a versão |
| 7:51 | do Mercury que usar CUDA que é o jeito programático de usar os cores da NVIDIA. |
| 7:55 | Se estiver em Mac ou estiver usando placas AMD como as Radeon ou Vega, o certo é escolher |
| 8:00 | o OpenCL. |
| 8:01 | E por último, eu sempre crio as sequences com a mesma configuração do video principal |
| 8:06 | que estou editando, ou seja, mesma resolução, mesma taxa de quadros por segundo. |
| 8:10 | Tudo isso estava ok como deveria. |
| 8:13 | Então não era problema de configuração. |
| 8:15 | Aliás, bônus pra você porque todo video ou artigo sobre otimizar Premiere que você |
| 8:20 | procurar vai dizer exatamente esses mesmos pontos que acabei de falar então já te economizei |
| 8:24 | pesquisa. |
| 8:25 | Engraçado que as primeiras idéias que vem na cabeça eu até sei que a probabilidade |
| 8:30 | é baixa, mas o lado geek quer tentar elas primeiro. |
| 8:33 | O OBS grava por padrão os videos em H.264 mas ele coloca no envelope MKV, o Matroska. |
| 8:40 | Diferente do MP4 que é o container padrão hoje em dia, derivado do Quicktime da Apple, |
| 8:45 | o Matroska é muito flexível pra ser um container universal de dezenas de codecs. |
| 8:49 | Por isso o suporte a MP4 costuma ser mais estável, porque ele é mais restrito então |
| 8:54 | fica mais fácil de dar suporte. |
| 8:56 | Ao contrário, suportar Matroska direito é mais complicado. |
| 8:59 | Hoje em dia, eu até acho que um editor como o Premiere não deveria ter problemas com |
| 9:03 | isso. |
| 9:04 | Mas, eu resolvi tentar fazer Proxy files. |
| 9:07 | Isso era uma feature do Premiere que eu sabia que existia mas nunca tentei usar. |
| 9:11 | A idéia de Proxy é que se você filmar numa camera profissional da RED ou da Hasselblad |
| 9:17 | como os YouTubers profissionais fazem, ele vai gravar arquivos de 8K. |
| 9:20 | É impossível editar 8K em tempo real e ter preview, especialmente se adicionar efeitos |
| 9:25 | por cima como Adjustment Layers pra color grading e color correction. |
| 9:29 | Por isso o comum é exportar os videos 8K em resolução mais baixa que 1080p ou Full |
| 9:34 | HD. |
| 9:35 | Só que fazer isso manualmente pra todo clip seria muito trabalhoso então o Premiere oferece |
| 9:40 | a opção de Proxies. |
| 9:41 | Daí você edita na versão de baixa resolução mas na hora de exportar ele vai usar os originais. |
| 9:46 | Problema de fazer proxy é que tem o tempo de exportar os videos. |
| 9:51 | Pensa que demorou quase 1 hora pra exportar o video de 3 horas de captura de tela do OBS. |
| 9:56 | E pensa que já tinha passado da 1 da manhã quando tentei fazer isso. |
| 10:00 | Péssima opção porque durante 1 hora eu não podia fazer nada. |
| 10:04 | Daí terminou e, claro, não fez diferença nenhuma. |
| 10:07 | Interessante que eu tentei mudar pro renderizador via software em vez de via GPU e aí ficava |
| 10:12 | tudo lento mas pelo menos não travava a interface. |
| 10:15 | Fiquei contemplando a idéia de editar tudo lento mas pelo menos não crashear. |
| 10:19 | Mas isso seria um inferno porque ainda tinha mais meia hora de video pra editar das 2 horas |
| 10:24 | restantes de material. |
| 10:26 | Depois de ficar tentando outras coisas já tava dando 5 horas da manhã, então resolvi |
| 10:31 | ir dormir pra conseguir ir pro escritório de manhã. |
| 10:33 | E aqui vai outra dica: eu demorei mais do que devia, o certo era ter ido dormir antes. |
| 10:38 | Eu não posso julgar quem faz isso porque passei a vida inteira varando 1 ou 2 ou até |
| 10:43 | 3 noites sem parar às vezes. |
| 10:45 | Mas não adianta, todo mundo falava a mesma coisa pra mim e eu nunca ouvia. |
| 10:49 | Especialmente quando a gente é mais novo, a tendência é achar que temos stamina infinita, |
| 10:55 | ainda mais se for arrogantão como eu que tem confiança que não importa o problema, |
| 10:59 | sempre vou conseguir resolver. |
| 11:01 | Enfim, lembre-se que é sempre melhor dormir quando já tá tarde e você tá travado. |
| 11:06 | Fui dormir com uma suspeita, pensei nisso durante o dia seguinte, e quando cheguei em |
| 11:11 | casa voltei pra editar. |
| 11:12 | Como eu expliquei antes, tinha os clips onde eu estava acelerando os videos pra vocês |
| 11:17 | não ficarem esperando, as partes de instalação e compilação. |
| 11:21 | Eram trechos que eu queria mostrar sem cortes, só acelerado. |
| 11:25 | Só que pra caber em 10 segundos eu precisava acelerar 1000 porcento, mil e quinhentos porcento, |
| 11:29 | às vezes 6000 porcento! |
| 11:32 | Mesmo sem estar em cima desses clips, o preview de nada funcionava e travava tudo. |
| 11:38 | Parece um bug na realidade, porque pelo menos os clips sem efeito deveria tocar o preview, |
| 11:43 | por isso eu não tinha certeza. |
| 11:45 | Mas daí eu imaginei que devia ter uma forma de pré-renderizar os clipes com efeitos como |
| 11:50 | esse de aceleração. |
| 11:51 | E de fato tem, aprendi só nesse dia sobre o recurso de Render and Replace que é parecido |
| 11:57 | com a idéia de Proxy, mas ele vai usar o mesmo render na exportação final também. |
| 12:02 | Serve pra clips com efeitos complicados que também custam caro de dar preview em tempo |
| 12:07 | real. |
| 12:08 | E eu tinha dezenas de clipes acelerados. |
| 12:10 | Podia ser mais uma aposta que ia me custar o tempo de esperar renderizar tudo mas fazia |
| 12:15 | sentido. |
| 12:16 | Eu tinha feito isso em alguns clipes na noite passada também e por isso só fui dormir |
| 12:20 | 5 da manhã. |
| 12:21 | Mas também não deu diferença nenhuma, a timeline continuava travando tudo. |
| 12:25 | Mas na minha cabeça tinha que funcionar. |
| 12:28 | Não fazia sentido não funcionar. |
| 12:29 | Primeiro pensei que podia ser o codec. |
| 12:32 | De repente se eu usasse um codec que não comprimisse tanto não usaria muito processamento |
| 12:36 | pra fazer o preview então fiquei entre o GoPro Cineform e o Apple ProRes. |
| 12:42 | Ambos ocupam espaço pra caramba mas acabei escolhendo o ProRes, e eu sei que foi um canhão |
| 12:47 | pra matar uma mosca. |
| 12:49 | Mas aí que me toquei que tinha um maldito checkbox que renderiza com os efeitos aplicados. |
| 12:55 | Duh, óbvio que na noite anterior não tinha feito diferença nenhuma renderizar porque |
| 13:00 | acelerar o tempo do video é um efeito, e até mais caro do que eu pensava, e se não |
| 13:05 | marcasse esse checkbox ele estava só trocando seis por meia dúzia, de um codec pra outro, |
| 13:11 | mas o efeito ainda tava sendo processado em tempo real. |
| 13:14 | Dito e feito, umas 2 ou 3 horas fazendo Render and Replace, o preview ainda estava com um |
| 13:20 | lag de 6 a 10 segundos mas pelo menos tocava e não travava tudo! |
| 13:24 | Daí segui uma dica que me deram no Instagram. |
| 13:26 | O cara que mais me deu dicas úteis foi o limas, aliás se estiver assistindo valeu |
| 13:31 | por me ajudar! |
| 13:32 | Não sei o nome dele, o usuário é Limas então vou chamar de Limas. |
| 13:35 | Ele fez certinho, ouviu os sintomas e fomos por eliminação em possíveis causas. |
| 13:40 | Ele trabalhou com edição de video e a última coisa que eu fiz que ajudou bastante foi criar |
| 13:45 | uma segunda sequence já que mesmo não travando mais ainda tinha o lag de 6 a 10 segundos |
| 13:50 | que falei antes. |
| 13:51 | Daí eu conseguia ir editando novos trechos, recortar e colar na sequence principal. |
| 13:56 | Na segunda sequence o preview funcionou em velocidade máxima, na sequence principal |
| 14:01 | mesmo depois de renderizar todos os efeitos ainda dava o tal lag, então teria sido super |
| 14:06 | sofrido se tivesse que continuar assim, mas com a segunda sequence em velocidade normal |
| 14:11 | eu consegui prosseguir sem dores de cabeça. |
| 14:13 | Além de dormir, outra dica muito importante, quando você trava num problema é falar com |
| 14:18 | alguém. |
| 14:19 | Não é obrigatório que essa pessoa tenha a capacidade de resolver seu problema. |
| 14:23 | Só que não diga muita besteira de volta. |
| 14:25 | Só de repetir o que você mesmo disse já ajuda. |
| 14:29 | E mesmo que algumas das sugestões não ajudem, não importa. |
| 14:32 | Esse diálogo faz parte do processo investigativo, eu falo comigo mesmo quando não tem ninguém |
| 14:38 | por perto, mas não é a mesma coisa. |
| 14:40 | Se eu for ser mais técnico, quando você tem um problema difícil de resolver o método |
| 14:45 | socrático pode ajudar, é uma forma de diálogo onde você leva a pessoa à resposta fazendo |
| 14:50 | perguntas simples pra guiar o processo investigativo. |
| 14:54 | Você já viu algo parecido se assistiu séries como House ou qualquer adaptação de Sherlock |
| 14:59 | Holmes, é pra isso que serve o Watson, a segunda metade do método socrático. |
| 15:04 | É um dos motivos de porque eu falo que se você é iniciante ou inexperiente, não vá |
| 15:09 | direto pro caminho de ser freelancer ou trabalhar home-office. |
| 15:13 | Você precisa de outra pessoa pra dialogar, não necessariamente só pra te ensinar, mas |
| 15:18 | pra ser o espelho no seu processo de aprendizado. |
| 15:21 | Outra dica, se na emergência você está sozinho e não tem ninguém pra dialogar, |
| 15:25 | escreva no papel todos os sintomas e hipóteses, mesmo as mais triviais. |
| 15:30 | Não é eficiente, mas vai ajudar a colocar as peças no lugar. |
| 15:33 | É o equivalente ao que você também já viu em séries como CSI ou séries de investigação |
| 15:38 | jornalística onde o investigador vai colocando as pistas num quadro e vai ligando com um |
| 15:43 | barbante. |
| 15:44 | De qualquer forma, mesmo assim teve 2 bugs na edição, logo depois da intro acabou ficando |
| 15:50 | um pequeno espaço preto que vocês nem devem ter notado, e na seção que inicio falando |
| 15:55 | de Docker faltou uns segundos de áudio. |
| 15:58 | Eu coloquei na errata nas descrições do video. |
| 16:01 | Mas considerando o tamanho do video e o tanto de problema, até que ficou bom. |
| 16:05 | Em resumo, o problema todo foi não ter tido a noção que acelerar video é um efeito |
| 16:10 | que pode ficar caro e um conjunto grande de clipes com esse efeito por alguma razão cria |
| 16:15 | lag na timeline inteira da sequence, e isso parece um bug do programa. |
| 16:20 | Agora, a segunda parte deste video foi justamente os comentários dos usuários. |
| 16:24 | Primeiro de tudo, agradecimentos a todo mundo que ficou acompanhando meu sofrimento nas |
| 16:30 | stories do Insta e mandou mensagens de apoio! |
| 16:33 | Tirando o Limas que teve uma paciência de Jó de ficar pensando comigo, todo mundo que |
| 16:37 | mandou sugestões infelizmente errou. |
| 16:40 | Mas eu não estou aqui pra criticar não, porque eu sei que todo mundo só mandou alguma |
| 16:45 | coisa porque se importou em tentar ajudar. |
| 16:47 | Mas eu quero salientar que muitas das respostas são conclusões automáticas que muita gente |
| 16:52 | tem pra vários outros tipos de problemas. |
| 16:55 | E muitos, perigosamente, levam isso a sério. |
| 16:58 | Se eu for resumir, as sugestões tinham 3 padrões: os que assumiam que eu precisava |
| 17:03 | de uma máquina ou algum componente melhor ou mais potente, os que lembraram que eu uso |
| 17:08 | Windows então já vieram falando que eu devia usar Mac, ou os que sugeriam que eu mudasse |
| 17:13 | do Premiere pra Final Cut do Mac ou Da Vinci Resolve ou Sony Vega. |
| 17:18 | Aliás, curioso que duas pessoas me falaram do Vega, e eu nunca tinha ouvido falar. |
| 17:22 | Muita gente chega nas mesmas conclusões pra todo problema, incluindo em programação: |
| 17:27 | 1) trocar pra hardware mais potente; 2) trocar de sistema operacional; 3) trocar de ferramentas. |
| 17:33 | Tirando casos extremos, raramente qualquer uma dessas três respostas deve ser a primeira |
| 17:38 | da lista, na realidade eu diria que seriam as últimas opções. |
| 17:42 | O raciocínio que vou usar agora serve não só pro meu caso imediato de edição de video |
| 17:47 | mas pra tudo, incluindo programação, então acompanhem pra entender e usem pro seu dia |
| 17:52 | a dia também. |
| 17:53 | Trocar de hardware raramente ajuda. |
| 17:55 | O raciocínio é simples: muito filme muito mais complexo já foi editado em hardware |
| 18:01 | muito inferior ao meu. |
| 18:02 | Eu tenho um PC que comprei especificamente pra editar video, e como eu disse no video |
| 18:08 | anterior, você não precisa disso se for iniciante, mas no meu caso eu tenho a escolha |
| 18:12 | de comprar mais do que preciso, então montei uma torre com Core i7 8a geração com 6 cores |
| 18:17 | e 12 threads, tenho 32 GB de RAM, 1 Terabyte de SSD mais 2 Terabyte de HD mecânico secundário, |
| 18:24 | uma placa GTX 1070Ti com 16GB de VRAM e um sistema de watercooling da Corsair pra CPU |
| 18:30 | nunca ter thermal throttle, que é quando a CPU derruba o clock quando detecta temperaturas |
| 18:34 | muito altas. |
| 18:36 | Quem mandou mensagem não sabia necessariamente disso. |
| 18:39 | Mas mesmo se fosse um notebook mais fraco, não seria esse o caso. |
| 18:43 | Em todos os 30 anos que fui programador, o hardware raramente me impediu de fazer alguma |
| 18:49 | coisa. |
| 18:50 | Podia funcionar mais lento, mas não crashear. |
| 18:51 | E o sintoma que falei é que tudo trava, não que fica lento. |
| 18:55 | O segundo caso é a reputação de estabilidade de Mac e Linux comparado à má reputação |
| 19:01 | que o Windows acumulou ao longo dos anos. |
| 19:03 | E isso começou principalmente com o Windows Me ou Millenium que foi o pior sistema operacional |
| 19:09 | nos anos 90. |
| 19:10 | O Windows 2000 ajudou a não derrubar a reputação porque ele era estável, como o Windows NT |
| 19:15 | 4 antes dele. |
| 19:16 | O Windows XP era usável em 2001 mas manter ele vivo por tantos anos destruiu a reputação. |
| 19:23 | A demora no projeto Longhorn que se tornaria o Windows Vista e o resultado catastrófico |
| 19:27 | de prometer demais e entregar muito de menos prejudicou ainda mais essa já horrorosa reputação. |
| 19:33 | O Windows 7 e 8 não ajudaram. |
| 19:35 | Foi só agora no Windows 10 e mesmo assim depois de vários updates que eles finalmente |
| 19:39 | acertaram a mão, mas ele veio uma década mais tarde do que deveria. |
| 19:43 | O Windows 10 ainda não atingiu os mesmos níveis de estabilidade do MacOS ou de qualquer |
| 19:49 | Linux, porém com um hardware bom e principalmente drivers bons, eu não tenho nenhum problema |
| 19:54 | de estabilidade faz muito tempo. |
| 19:56 | Se eu disser que só vi uma tela azul em 2 anos não estou exagerando. |
| 19:59 | E com a opção de agendar pra aplicar updates que exigem reboot só de madrugada, também |
| 20:05 | nunca travei por conta de updates. |
| 20:07 | Claro, na minha ordem de escolha eu continuo preferindo o MacOS mas desde 2014 eu não |
| 20:13 | gosto do jeito que a Apple vem lidando com o hardware e por isso mudei pra hardwares |
| 20:17 | PC. |
| 20:18 | Eu gosto muito do Linux mas eu também gosto dos programas que tem no MacOS e no Windows |
| 20:22 | que não tem no Mac. |
| 20:23 | Por isso eu uso Linux em máquina virtual pra desenvolver. |
| 20:27 | Apesar disso, eu não considero mais o Windows como primeiro fator pra um problema. |
| 20:32 | Eu ainda não usaria Windows como servidor, mas como desktop ele está muito bom. |
| 20:37 | Finalmente, terceiro ponto, trocar de ferramenta. |
| 20:40 | O Adobe Premiere é como o Windows, ele tem mais problemas que seus concorrentes. |
| 20:44 | O Final Cut X é o melhor de todos em usabilidade e fluxo de trabalho apesar de ter um pouco |
| 20:50 | menos funcionalidades. |
| 20:51 | A combinação Final Cut com Motion é o equivalente do Premiere com AfterEffects. |
| 20:56 | Mas em Windows não tem Final Cut então a primeira opção é o Premiere. |
| 21:01 | Hoje em dia existe a opção do Da Vince Resolve, cuja reputação é excelente e ele tem versões |
| 21:06 | pra Mac, Windows e até Linux, fora que ele tem uma versão gratuita que compete com as |
| 21:11 | versões pagas. |
| 21:12 | Eu já estava de olho no Da Vince, que nasceu como uma ferramenta pra fazer color grading |
| 21:17 | e color correction, por isso ele é o melhor de todos nesse departamento, mas ao longo |
| 21:22 | do tempo ele embutiu o equivalente das funcionalidades do Premiere, AfterEffects e Audition tudo |
| 21:28 | numa mesma ferramenta, então ele é extremamente poderoso. |
| 21:32 | Não existe nenhum motivo pra eu não mudar pro Da Vince a não ser preguiça mesmo. |
| 21:36 | Mudar o workflow de trabalho não é exatamente trivial, mas eu pretendo fazer isso em breve |
| 21:41 | nem que seja só pra aprender uma ferramenta nova. |
| 21:44 | Porém, eu estava no meio de uma edição. |
| 21:46 | Mudar de ferramenta no meio da edição não é a melhor resposta. |
| 21:50 | Mudar de linguagem de programação, jogar fora o projeto atual que está funcionando, |
| 21:55 | pelos possíveis benefícios de performance ou escalabilidade ou estabilidade não é |
| 22:00 | uma escolha tão trivial quanto parece. |
| 22:02 | Se eu tivesse mudado pro Da Vince naquela quinta-feira, vocês não teriam tido o video |
| 22:06 | pronto na sexta. |
| 22:08 | Talvez levasse mais dias ainda até eu aprender o workflow do Da Vinci e migrar tudo pra ele. |
| 22:13 | Além disso eu ainda podia ter problemas inesperados no futuro próximo. |
| 22:16 | A grande vantagem das ferramentas da Adobe é o ecossistema. |
| 22:20 | Tem muito mais documentação em foruns e sites explicando como resolver as coisas, |
| 22:25 | tem muito mais assets como videos, audio, efeitos, composições em dezenas de site. |
| 22:31 | A intro do meu video é uma composição de After Effects que eu comprei. |
| 22:35 | E eu tenho essa opção sempre que precisar. |
| 22:37 | No Da Vince não vou ter, dai eu teria que comprar pra After Effects, exportar num video |
| 22:42 | e importar no Da Vince de qualquer jeito, daí o fator preço já não é uma vantagem |
| 22:46 | tão grande. |
| 22:47 | O mesmo raciocínio vale pra frameworks ou linguagens de programação. |
| 22:51 | Mudar não é trivial. |
| 22:53 | Não quer dizer que não vale a pena, só que o contexto precisa ser levado em consideração |
| 22:57 | e o melhor momento de fazer isso não é justo quando você tá com prazo apertado e no meio |
| 23:03 | de uma emergência. |
| 23:04 | Agora a conclusão que devia ser a primeira e mais óbvia: milhares de pessoas estão |
| 23:09 | neste instante usando o mesmo Premiere que eu. |
| 23:12 | O Premiere é usado pra editar filmes e documentários, muito mais longos e complicados que um video |
| 23:18 | de YouTube, com muito mais efeitos, muito mais tomadas de VFX, com dezenas de composições |
| 23:24 | de AfterEffects, ou dynamic links com Audition. |
| 23:26 | E eles conseguem editar e exportar tranquilamento. |
| 23:30 | A conclusão mais óbvia é que “eu” não estou sabendo usar a ferramenta, não que |
| 23:34 | a ferramenta, ou o sistema operacional ou o hardware são ruins. |
| 23:38 | Essas 3 opções partem da premissa que não tem nada de errado comigo e sim com as ferramentas |
| 23:43 | que estou usando. |
| 23:44 | Mas na grande maioria das vezes é o oposto: considere sempre como primeira hipótese que |
| 23:50 | é você que não está sabendo usar as ferramentas. |
| 23:53 | Considere sempre que todo bug, todo crash, toda lentidão, todo lag, todo atraso é sempre |
| 23:59 | culpa sua. |
| 24:00 | A última opção é a ferramenta, o sistema ou o hardware, a última da última opção. |
| 24:05 | Todas as vezes que tive problemas desse tipo, raramente a culpa não era minha. |
| 24:10 | E esse foi justamente mais um caso: só porque eu já editei e entreguei mais de 50 videos |
| 24:14 | ao longo de 1 ano não significa que eu já sou senior, muito pelo contrário, só significa |
| 24:19 | que eu aprendi um jeito de fazer as coisas e repeti esse mesmo jeito por 1 ano, e finalmente |
| 24:25 | esbarrei num projeto que desafiou esse caminho e me obrigou a repensar minha forma de trabalhar. |
| 24:31 | Se eu mudasse de ferramenta não teria aprendido nada. |
| 24:33 | Ao longo do processo de resolver o problema eu aprendi mais e treinei coisas como Proxy |
| 24:39 | files, Render and Replace, otimizações do Premiere, estudei sobre outros codecs e muito |
| 24:44 | mais. |
| 24:45 | Nada disso resolveu o problema imediato, mas eu ganhei mais conhecimento pro futuro. |
| 24:49 | Ainda tem outro ponto a se considerar, e aqui é um princípio pessoal. |
| 24:53 | Vocês sabem que eu não monetizo o canal. |
| 24:56 | Quem define quando um vídeo vai ficar pronto, em que ritmo, sou eu. |
| 25:00 | Por princípio eu decidi que eu só iria gravar e editar a noite, depois que volto do trabalho. |
| 25:06 | Considere que eu sou dono da minha própria empresa, tecnicamente não existe nenhum problema |
| 25:11 | se eu usasse o dia pra fazer isso. |
| 25:13 | Mas por princípio eu escolhi fazer dentro dessas restrições e decidi que eu entregaria |
| 25:18 | um video por semana salvo quando eu tivesse que viajar ou fazer eventos por exemplo. |
| 25:22 | Eu sou o meu próprio chefe e o meu próprio cliente. |
| 25:26 | Eu não conseguir cumprir os deadlines que eu mesmo decidi vai contra meus princípios. |
| 25:31 | Não estou dizendo que todo mundo deve fazer isso, mas se você realmente quer ir um nível |
| 25:35 | acima, deveria ter padrões mais elevados do que desistir e se justificar dizendo “ah, |
| 25:41 | eu nem ganho o suficiente pra ter essa dor de cabeça”. |
| 25:44 | Lógico esse princípio estou exagerando na explicação, mas acho que vocês entenderam |
| 25:48 | o ponto. |
| 25:49 | A moral da história: sempre assumir que você ainda não sabe tudo e não inventar desculpas |
| 25:55 | esfarrapadas. |
| 25:57 | Mas também não adianta só ter falsa-humildade. |
| 25:59 | Ai, tadinho de mim. |
| 26:00 | Falso-humilde é um inútil. |
| 26:02 | Eu preciso saber objetivamente quais itens eu ainda não sei e aprender e treinar um |
| 26:07 | de cada vez. |
| 26:09 | Alguém comentou no meu video sobre Conhecimentos Básicos que depois de assistir viu que não |
| 26:13 | sabia nem esse básico e se questionou “eu devo ser burro mesmo”. |
| 26:17 | E eu digo, não necessariamente, antes você não sabia que não sabia. |
| 26:22 | Agora você sabe o que não sabe, faz uma enorme diferença, porque agora você tem |
| 26:26 | uma meta pra cumprir. |
| 26:27 | É um passo que vai te deixar melhor do que é hoje. |
| 26:30 | A pior coisa é não ter consciência que não sabe. |
| 26:33 | Como você vai melhorar, se não sabe o que não sabe? |
| 26:36 | Por fim, outro motivo que eu quis usar este exemplo: eu venho fazendo videos por quase |
| 26:41 | 1 ano. |
| 26:42 | Nesse período eu saí do 0 pros tais 20% em 3 meses. |
| 26:45 | Dali em diante eu venho basicamente repetindo o mesmo processo. |
| 26:49 | Ter feito 10 videos ou 50 videos ou 100 só seguindo o mesmo processo, não me torna muito |
| 26:55 | melhor hoje do que eu já era em Janeiro. |
| 26:57 | Esse problema que eu tive semana passada foi a primeira vez em meses que eu finalmente |
| 27:01 | subi mais um nível. |
| 27:03 | Isso é o aviso que eu dou a todo estagiário, trainee, junior. |
| 27:07 | É muito, mas muito fácil, sair do 0 e ir pros 20% o suficiente pra conseguir entregar |
| 27:12 | coisas que parecem produtos finais. |
| 27:15 | Veja meus videos, se você só bater o olho ia dizer que eu sou que nivel? |
| 27:19 | Sejam objetivos, seu nível em 1 ou 2 anos continua sendo junior, o meu nível aqui em |
| 27:24 | edição continua sendo junior. |
| 27:26 | Eu preciso apanhar mais vezes como semana passada se eu quiser subir de nivel. |
| 27:31 | E pra isso eu mesmo preciso caçar problemas novos pra resolver em vez de voltar pra zona |
| 27:35 | de conforto e evitar fazer os videos difíceis. |
| 27:38 | E é isso aí, era essa a história e o processo de pensamento que eu queria compartilhar com |
| 27:43 | vocês hoje, se ficaram com dúvidas ou tem outras sugestões mandem nos comentários |
| 27:49 | abaixo, se curtiram o video mandem um joinha, não deixem de assinar o canal e clicar no |
| 27:53 | sininho pra não perder os próximos videos e compartilhem com seus amigos pra ajudar |
| 27:58 | o canal. |
| 27:59 | A gente se vê semana que vem, até mais! |
