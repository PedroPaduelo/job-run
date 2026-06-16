# Entendendo Conceitos Básicos de CRIPTOGRAFIA | Parte 1/2

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=CcU5Kc_FN_4
- **Duração:** 41:11
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita No último episódio eu tentei responder a pergunta se computação quântica tem o potencial de acabar com os esquemas de |
| 0:09 | segurança que usamos hoje. Mencionei coisas como RSA ou AES. Eu imagino que não só iniciantes, |
| 0:16 | mas mesmo desenvolvedores de software que já tem alguma experiência tem dificuldades de entender |
| 0:21 | mesmo o básico sobre criptografia. Cybersecurity é um tema gigante. Existem as |
| 0:27 | tecnologias, as ferramentas e os processos. Segurança da informação ou Infosec é uma |
| 0:33 | pequena parte de cybersecurity e foca mais na implementação e manutenção de processos e políticas, é onde você vê a maioria das certificações. Muito de segurança |
| 0:43 | é uma questão de procedimentos. Porém, essa parte me interessa muito pouco, pelo menos por agora. A idéia hoje é começar a explicar alguns dos jargões e conceitos pra que |
| 0:53 | você se confunda menos quando estiver lidando com aspectos de segurança, em particular com criptografia. Vou repetir de novo porque é difícil de explicar a dimensão |
| 1:01 | desse, é uma área gigante, com uma história longa, muita matemática, e você pode dedicar sua |
| 1:08 | vida inteira estudando só isso e ainda não saber tudo. É tão grande na real que até este script, |
| 1:13 | que é só um mero resuminho, ficou gigante e por isso tive que dividir em duas partes. Hoje vai ser a parte 1, semana que vem termino na parte 2. Peguem papel e caneta e se preparem, |
| 1:24 | porque vocês vão precisar anotar bastante coisa pra estudar em mais detalhes depois. E falando em segurança, agora é uma boa hora pra agradecer o patrocinador deste vídeo. Se |
| 1:34 | você quer evitar que suas senhas sejam vazadas, ou evitar que o FBI descubra os sites de pornografia |
| 1:40 | e bittorrent que você usa, devia estar usando uma VPN. E porque não usar NordVPN .... não não não, |
| 1:47 | tô brincando, este episódio não é patrocinado pela NordVPN ou qualquer outra empresa, rola a vinheta!! (...) |
| 1:54 | Se eu fosse chutar, eu diria que a maioria esmagadora dos programadores não pensa em |
| 2:06 | segurança nem o mínimo que deviam. Sim, você mesmo aí assistindo. E eu também de |
| 2:11 | vez em quando. Isso era assim 20 anos atrás e continua sendo assim hoje. O que mudou é que nos |
| 2:17 | últimos 15 anos pelo menos criamos frameworks e práticas que todo mundo usa hoje meio sem pensar, |
| 2:23 | e por causa disso muitos dos erros triviais foram evitados e você nem sabe disso. Por exemplo, |
| 2:29 | um erro trivial e muito comum antigamente era codificar manualmente comandos SQL pra banco de dados numa string, concatenar o que o usuário mandava de um formulário, tipo de login, |
| 2:39 | por exemplo, e mandar esse comando pro banco de dados. Como este exemplo aqui do lado. Mas se o usuário fosse minimamente esperto, nem precisa ser muito inteligente, sabendo que é assim que o |
| 2:48 | programador faz, ele manda exatamente a string que se concatenada envia outros comandos arbitrários |
| 2:55 | de SQL que o programador não estava esperando. Assim como nesse exemplo aqui do lado. Pronto, você tem um problema de SQL Injection na sua aplicação. |
| 3:04 | Praticamente todo framework web como Rails, Django, Laravel, ASP.NET e todos os outros |
| 3:10 | hoje vem como algum tipo de ORM que é uma biblioteca de mapeamento objeto pra relacional, |
| 3:16 | não só pra mapear tabelas com classes mas também fazer coisas como sanitização dos valores enviados |
| 3:22 | por usuários. Daí a maioria de casos como SQL Injection são eliminados automaticamente. Além de |
| 3:28 | SQL Injection a maioria dos frameworks competentes protege contra coisas como CSRF que é Cross Site |
| 3:33 | Request Forgery, Session Hijacking, Replay Attacks e muito mais. Se não fizer no mínimo essas coisas, |
| 3:39 | não é um bom framework. Mas eu como disse antes. A maioria dos programadores não pensa em segurança. Daí você lê em algum post de blog, por exemplo, pra em vez de |
| 3:49 | deixar o ORM gerar o comando SQL, se você escrever o comando manualmente e não usar nenhum ORM, pode ser que tenha mais performance. Pronto, você acabou de deixar de usar os mecanismos |
| 3:59 | de segurança do framework pela promessa de performance. Isso é o mais comum. Programador é |
| 4:05 | um bicho meio burro, e não devia ser. Nós devíamos ser de Ciência da Computação, cadê a ciência em |
| 4:11 | ficar ouvindo promessas e implementando sem saber se funciona ou não? Tem hora que programador parece que tá escolhendo dieta da moda. Na dúvida é melhor assumir primeiro que se o framework guia |
| 4:21 | você pra desenvolver de uma certa maneira deve ter razões pra isso. Especialmente se é usado |
| 4:27 | por milhares de pessoas faz muitos anos. Entenda quais são essas razões antes de decidir não usar. |
| 4:34 | Não estou falando de frameworkzinho hipster da moda que acabou de ser lançado. Bons frameworks são como bons vinhos, precisam de anos pra amadurecer. Só que aí programador iniciante |
| 4:44 | tem mania de achar que sabe mais que as milhares de pessoas que gastaram milhares de horas homem amadurecendo o framework e decide: ah, vou fazer meu próprio framework porque eu sei |
| 4:53 | fazer melhor. Pronto, você acabou de ganhar uma catástrofe esperando pra acontecer. O trabalho de um programador é conseguir desenvolver alguma coisa o mais rápido possível, |
| 5:03 | com a melhor qualidade possível. E qualidade significa não só funcionar como foi pedido como funcionar com a melhor performance, com a melhor escalabilidade e com a melhor segurança, |
| 5:14 | e ainda tendo a melhor mantenabilidade. Só que é impossível ter 100% de todas essas |
| 5:20 | características. Não existe almoço de graça. O trabalho de um programador é encontrar o meio do |
| 5:26 | caminho entre todos esses parâmetros. Esse balanço de tradeoff, ou de custo-benefício, não é simples. Aqui entra a experiência de ter trabalhado com outros programadores mais |
| 5:36 | experientes e de ter visto atrasos, dificuldades de manutenção, buracos de segurança e gargalos de |
| 5:43 | performance, na prática, em diversos projetos diferentes. Só porque alguma coisa "roda" não significa que ela funciona corretamente. A maioria dos cursos e tutoriais se preocupa |
| 5:54 | em fazer alguma coisa "rodar", mas não se preocupa com todos esses outros aspectos: segurança, performance, escalabilidade, produtividade e mantenabilidade. |
| 6:03 | Por exemplo, nos anos 90 quando todo mundo ainda tava aprendendo como programar pra web, não havia |
| 6:08 | frameworks decentes. Lógico, a Web comercial tinha acabado de nascer. Não tinha boas práticas |
| 6:14 | bem definidas como temos hoje. Então digamos que você quisesse fazer um sitezinho com login, página de produtos, um checkout pra colocar cartão de crédito. Como se fazia? Simples: |
| 6:24 | um formulário HTML que dava POST pra um script Perl ou PHP, que recebia a senha e o cartão e |
| 6:30 | gravava direto numa tabela no banco. Ah sim, o banco e o site eram instalados na mesma máquina porque esses recursos custavam caro. E como quem programa site normalmente tinha e |
| 6:40 | ainda tem pouco conhecimento de coisas como configuração de infra, então instalava tudo sem senha ou colocava a senha hardcoded no código. Desastre, lógico. |
| 6:49 | Na verdade eu não falei certo, isso não é só antigamente, todo iniciante começa fazendo |
| 6:55 | exatamente desse mesmo jeito, não importa a linguagem. A diferença é que nos anos 90 todos |
| 7:01 | mundo era iniciante ainda, mas com o tempo fomos evoluindo. Entenda isso: como iniciante você não tem como saber até onde dá pra ir, por isso você é iniciante. Mas não se preocupe, parta do princípio |
| 7:12 | que só porque Você não sabe, não quer dizer que não existe. E só porque roda não quer dizer que você fez certo. O problema é um iniciante colocar um site em produção sozinho. Até hoje, |
| 7:22 | quando eu clico em recuperar a senha, tem site que manda a minha senha, aberta, no meu e-mail. Em 2019, isso é ridículo. Uma coisa é você estar treinando e fazendo errado. Isso não tem problema, |
| 7:32 | faz parte do aprendizado. Outra coisa é achar que só porque fez meia dúzia de tutoriais já sabe tudo e colocar seus usuários em risco. Isso é irresponsabilidade. |
| 7:41 | Como desculpa para iniciar alguns conceitos, vamos pegar o exemplo de guardar as senhas em plaintext, ou seja, em texto aberto, numa tabela do banco de dados, como eu disse que um amador faria se |
| 7:52 | fizesse tudo do zero, sem usar nenhum framework. Vamos assumir que existe uma possibilidade real dessa tabela ser roubada por um hacker. Isso é muito mais comum do que você pensa, |
| 8:02 | empresas gigantes de LinkedIn até marcas famosas como Sephora, sites de relacionamentos como Adult |
| 8:08 | Friend Finder, games como Clash of Kings e muito mais que você pode procurar no site I have been |
| 8:14 | pwned já tiveram dados dos usuários expostos. Nesse site aliás, você pode digitar seu e-mail |
| 8:20 | e ver se sua senha já foi exposta. Toda tabela de senhas uma hora vai ser roubada, não é uma questão de "se", é só uma questão de quando. Em segurança, nunca assuma que existe |
| 8:30 | segurança, sempre parta do pressuposto do pior caso, que os dados vão ser expostos, mais cedo ou mais tarde. Seu trabalho é garantir que seja o mais tarde possível. |
| 8:40 | A segunda coisa que alguém poderia pensar pode ser, "ok, não tem problema, e se eu encriptar a senha antes de gravar no banco?" Primeiro vamos entender o que |
| 8:49 | significa encriptação. Em criptografia normalmente estamos nos referindo à uma encriptação simétrica. |
| 8:56 | De maneira bem simples, pense uma função onde passamos algum texto e um segredo como |
| 9:01 | entrada e a saída é o texto bagunçado. Simétrico porque se passarmos o texto bagunçado de volta, |
| 9:08 | com o mesmo segredo, revertemos de volta pro texto original. Isso é decriptação. As primeiras |
| 9:14 | versões de encriptação era a coisa mais simples que você poderia imaginar: trocar uma letra por outra ou simplesmente dar shift e mover as letras pra frente ou pra trás como nos algoritmos Caesar |
| 9:25 | ou ROT13. Esses normalmente são usados em cursos introdutórios de criptografia, tipo um hello |
| 9:31 | world, por serem super triviais. Um Caesar é basicamente um cipher de substituição. |
| 9:37 | Primeiro escolhemos um valor de shift, por exemplo 2 pra ficar simples, esse é o segredo. Então toda |
| 9:43 | letra A, dois pra frente, vira um C, toda letra B vira um D, toda letra C vira um F, sempre dois |
| 9:50 | pra frente e assim por diante. A chave secreta é esse valor de shift 2. Uma forma de quebrar isso? Se você notar que se trata de algo parecido com um algoritmo Caesar, você pode tentar via força |
| 10:00 | bruta que é tentar todos os 25 possíveis valores de shift já que o alfabeto só tem 26 letras, você pode facilmente tentar um a um até descobrir, no papel, em poucos minutos. |
| 10:11 | Outra forma é usar análise de frequência, por exemplo, se eu sei que a mensagem original é em |
| 10:17 | inglês, as letras que aparecem com mais frequência na maioria das palavras são letras "E" ou "A". |
| 10:22 | Digamos que na mensagem encriptada a letra que mais aparece é "P", e eu podia chutar que |
| 10:28 | originalmente é um "E" e na verdade o shift foi de 11 letras. Se não funcionar, eu poderia chutar |
| 10:34 | que é um "A" e que o shift foi de 15 letras. Daí em vez de tentar todas as 25 possibilidades na |
| 10:39 | força bruta, só duas ou três tentativas já seria suficiente. Veja que mesmo nesse exemplo simples, |
| 10:45 | podemos diminuir a dificuldade da força bruta de 25 tentativas pra dois ou três, quase 10 vezes |
| 10:51 | mais rápido. Qualquer tentativa de quebrar uma encriptação, na pior das hipóteses é via força |
| 10:57 | bruta, mas com criptanálise, como esse básico que mencionei aqui, ou seja analisando a mensagem |
| 11:03 | encriptada, que chamamos de ciphertext, podemos usar matemática, mais precisamente estatística, pra diminuir as tentativas algumas ordens de grandeza. |
| 11:12 | O ROT13 é mais uma brincadeira, ele é um caso especial do Caesar com shift fixo de |
| 11:18 | 13 letras. Aliás, o Caesar original foi usado pelos Romanos, por isso se chama Caesar e assim |
| 11:23 | como o ROT13 também tinha um valor de shift fixo, acho que 3 ou 5. De qualquer forma, |
| 11:29 | uma coisa que tem que ficar muito claro: o dado encriptado não pode compartilhar características |
| 11:34 | com a mensagem original, porque via criptanálise eu conseguiria inferir alguma informação. Outro |
| 11:40 | caso clássico ensinado como introdução em criptanálise é o famoso cipher Enigma usado |
| 11:45 | pelos alemães na Segunda Guerra, que também era um cipher de substituição. Recomendo que dêem uma |
| 11:51 | procurada em canais como Numberphile que explica ele em detalhes, mas o equipamento era tipo uma |
| 11:57 | máquina de escrever onde cada letra que você teclava devolvia uma outra letra, qualquer uma |
| 12:02 | das outras 25 letras do alfabeto, menos ele mesmo. E ele não substitui todo "A" pela mesma letra |
| 12:09 | toda vez, cada A no texto vai virar uma letra diferente. A máquina é configurada conectando |
| 12:15 | pares de letras no que se chama de plugboard, e configurando três rotores e um refletor que |
| 12:21 | fazia o embaralhamento. Sem entrar em detalhes, se você souber a configuração desse plugboard, dos rotores e do refletor, daí você conseguia reverter a mensagem encriptada. |
| 12:31 | O grande erro dos alemães e o grande insight de Alan Turing foi notar que todo dia de manhã |
| 12:37 | os alemães mandavam um relatório do tempo. E todo relatório começava com as mesmas palavras |
| 12:43 | no topo da mensagem, tipo "tempo" que seria "Wetterbericht" em alemão e terminava com "Hail |
| 12:49 | Hitler". Daí ele entendeu que apesar das letras serem embaralhadas, a mesma letra nunca virava |
| 12:55 | ela mesma. Então você conseguia chutar os pares de letras no plugboard e ir tentando decifrar |
| 13:01 | letra a letra, mas uma hora dava errado porque o próximo par colidia com um que você já tinha |
| 13:06 | achado que sabia. Então precisava começar de novo, mas como as letras nunca voltavam pra elas mesmas, |
| 13:12 | a combinatória inteira de todos os pares que você testou podia ser descartada e só testar outra combinação inicial diferente dos pares que você já tentou. |
| 13:21 | E era isso que fazia a máquina que o Turing construiu, o tal Bombe. Se você já viu uma foto parecendo uma estante com vários rotores, a cada rotação ele vai tentando |
| 13:31 | um espaço de combinações, não funcionando, descarta o espaço inteiro e tenta de novo, |
| 13:36 | o que sobrar é a resposta certa. E ele conseguia achar a configuração em uns 20 minutos, de novo, |
| 13:43 | dado esse insight de que a mesma letra nunca vira ela mesma e sabendo uma palavra que aparece em |
| 13:49 | toda mensagem. Na força bruta, sem esses insights, só testando cada configuração possível do Enigma, |
| 13:55 | um computador desktop dos dias de hoje ainda levaria de horas a dias pra conseguir decifrar. De |
| 14:02 | novo, o que Turing e sua equipe conseguiram fazer, foi usar criptanálise pra diminuir drasticamente o espaço de tentativas. Essa história toda foi pra explicar duas |
| 14:11 | coisas. Uma função de encriptação simétrica com um segredo, no caso a combinação dos rotores, |
| 14:17 | é construída de tal forma que via força bruta seria computacionalmente inviável. No caso do |
| 14:23 | Enigma existem mais de milhões de milhões de milhões de possibilidades. Mas como ele tinha os defeitos que eu falei, mesmo nos anos 40, sem um computador potente como temos hoje, |
| 14:34 | já foi possível derrotar o algoritmo em 20 minutos com rotores mecânicos. A segunda coisa: |
| 14:39 | criar um algoritmo de encriptação robusto, resistente a criptanálise, é muito mais |
| 14:45 | difícil do que parece. Se você não é um bom matemático teórico, nunca, jamais tente inventar |
| 14:52 | seu próprio algoritmo. Sua melhor tentativa vai ser pior do que o Enigma. Nos UNIX originais nos anos 70 o crypt foi implementado como uma variação de uma |
| 15:02 | máquina de rotores, parecido com o algoritmo do Enigma. Algumas versões eram ainda mais fracas, |
| 15:08 | e literalmente implementavam o Caesar que eu falei acima. O ROT13 não era brincadeira, ele chegou a |
| 15:14 | ser usado de verdade. Essas implementações foram feitas numa época onde não havia a preocupação de |
| 15:20 | hoje em criptografia. Feitos por gente como eu ou você, sem treinamento em matemática, era só pra deixar as coisas um pouco mais difíceis. Em breve o Caesar foi substituído |
| 15:30 | no comando crypt por algoritmos melhores como o Data Encryption Standard ou DES. |
| 15:35 | O DES foi desenvolvido pela IBM e escolhido pelo NIST ou National Institute of Standards |
| 15:41 | and Technology como o padrão de encriptação do governo americano nos anos 70, usando um segredo, |
| 15:48 | ou chave, de 56-bits. Relembrando, significa um espaço de dois elevado a 56 ou 72 quadrilhões de |
| 15:55 | possíveis chaves. Como vocês viram na história do Enigma e de algoritmos triviais de substituição, uma das fraquezas mais óbvias é encontrar um padrão ou relação estatística entre a mensagem |
| 16:05 | original em plaintext e o ciphertext. Dentre as várias coisa que o DES implementou foram |
| 16:11 | S-boxes ou substitution boxes. A partir daqui começa a entrar matemática mais complicada, |
| 16:16 | coisas como funções de Bent, transformação Afim, transformada de Walsh e por aí vai. Mas basta |
| 16:22 | entender que S-boxes são tabelas de substituição que causam o que Claude Shannon chama de confusão, |
| 16:28 | tentando eliminar qualquer correlação ou relacionamento entre o plaintext da entrada e o ciphertext da saída. Pra evitar a situação do "Hail Hitler" |
| 16:37 | do Enigma onde conseguiríamos inferir alguma coisa do plaintext a partir do ciphertext, |
| 16:43 | criou-se a idéia de quebrar a mensagem original em blocos. Digamos de 128 bits, passar por várias |
| 16:50 | rodadas de transformação usando coisas como os S-boxes e usar o ciphertext desse bloco como |
| 16:55 | entropia pro bloco seguinte. De tal forma que mesmo que o texto tenha trechos que se repetem, |
| 17:01 | eles não vão ser encriptados da mesma forma, e assim no ciphertext final não temos como |
| 17:06 | encontrar padrões. Mesmo assim, o mesmo plaintext aplicado no mesmo algoritmo sempre vai resultar |
| 17:12 | no mesmo ciphertext e pra evitar isso também costuma se usar um Initialization Vector ou IV |
| 17:19 | no primeiro bloco. Dessa forma, o plaintext com a chave secreta, variando esse IV, o ciphertext vai ser bastante diferente. Além do princípio da confusão de Shannon |
| 17:29 | ainda existe o princípio da difusão, ou seja, se mudarmos 1 bit no plaintext, |
| 17:34 | pelo menos metade dos bits do ciphertext deveriam mudar de lugar. Diminuindo ainda |
| 17:40 | mais a correlação do ciphertext com o plaintext. Enfim, não precisam decorar o que eu acabei de falar. A idéia é mais explicar como as coisas evoluíram desde o famoso Enigma. |
| 17:50 | De qualquer forma, o DES de 56-bits já foi quebrado. Uma das formas hoje de fazer isso é |
| 17:56 | via FPGA ou Field Programmable Gate Arrays. Pense num chip genérico onde podemos desenhar circuitos |
| 18:03 | e reprogramar esse chip pro tipo de circuito que quisermos. Se vocês assistiram o começo do meu vídeo sobre Supremacia Quântica eu rapidamente explico sobre portas lógicas e |
| 18:12 | como podemos criar circuitos com essas portas. FPGAs é isso: reprogramação das portas lógicas, |
| 18:19 | pra criar um hardware especializado. Enfim, hoje existem FPGAs que conseguem gerar da ordem de |
| 18:25 | terachaves por segundo, no caso quase 800 bilhões de chaves por segundo e como eu falei que 56-bits |
| 18:32 | dá um total de 72 quadrilhões de chaves, significa que dá pra quebrar o DES hoje em pouco mais de 26 |
| 18:38 | horas, via força bruta. FPGAs não foram criados só pra isso claro, eles existiam antes, mas criptografia sempre vai usar o que tem de melhor pra estar um passo à frente. |
| 18:48 | O DES foi muito importante porque ele recebeu um escrutínio enorme. E como o governo americano |
| 18:53 | estava usando, havia muita motivação pra entender como ele funciona, e obviamente como tentar |
| 18:59 | quebrar. Lembrando, ele foi inventado nos anos 70. Esse sistema com FPGAs que eu falei foi criado em |
| 19:06 | 2012. E mesmo assim leva 26 horas pra quebrar, não é instantâneo. Quando as primeiras teorias |
| 19:12 | de como quebrar o DES começaram a aparecer, também surgiram formas de deixar o próprio |
| 19:17 | DES mais forte e uma dessas formas é literalmente rodar o DES mais de uma vez. Mais especificamente, |
| 19:24 | passar cada bloco da mensagem pelo DES três vezes, e isso é o que conhecemos hoje como |
| 19:30 | TripleDES. Teoricamente ele é computacionalmente inviável de quebrar mas pouca gente usa TripleDES |
| 19:36 | hoje. Isso porque o DES não é particularmente rápido e TripleDES, como você pode imaginar pode ser três vezes ainda mais lento. Então o NIST comissionou um novo algoritmo |
| 19:46 | e depois de um longo processo e diversos bons novos candidatos, eles escolheram o algoritmo |
| 19:52 | Rijndael cujo nome é derivado dos nomes dos autores, Joan Daemen and Vincent Rijmen. |
| 19:58 | Diferente do DES que usa chaves de 56-bits, o Rijndael usa chaves de 128, 192 ou 256 bits. |
| 20:06 | Agora que vocês sabem que o sistema de FPGA mais rápido de 2012 demorava 26 horas pra percorrer o espaço de 56-bits, lembram que eu expliquei no episódio anterior que cada mais |
| 20:16 | um bit que você adiciona duplica o espaço? Uma chave de 256-bits é 2 elevado a 256 que |
| 20:23 | dá um número tão astronômico que tamos falando de um número com 77 casas. O quadrilhão que eu |
| 20:28 | falei acima tem só umas 15 casas. O algoritmo usa essa chave pra derivar outras 10 chaves, |
| 20:34 | usa os tais S-boxes que eu falei, passa cada bloco por 10 a 13 rodadas de transformações mais complicadas que o DES. E com tudo isso ele ainda é três vezes mais rápido que o DES. |
| 20:44 | O algoritmo Rijndael foi batizado pelo NIST como Advanced Encription Standard ou AES. Mas as |
| 20:51 | técnicas de criptanálise evoluíram também. Hoje em dia sem saber que algoritmo ou que chave é usada, |
| 20:58 | existem análises que checam quanto tempo tá levando cada trecho do algoritmo, o consumo de energia em cada etapa, a radiação eletromagnética e muito mais pra conseguir |
| 21:08 | mais dados pra diminuir as possibilidades de tentativas, já que força bruta pura num espaço |
| 21:13 | de 256 bits é computacionalmente inviável. E uma das formas de mitigar isso que se chama |
| 21:19 | de ataques de side-channel é que hoje em dia o processador implementa o AES direto em hardware, |
| 21:25 | pra evitar que implementações de software possam ser analisadas quando rodam. Já faz 10 gerações atrás que a Intel implementa essas instruções no processador, |
| 21:35 | desde uma antes da Sandy-Bridge. A AMD também implementa desde o Jaguar. E é o AES-256 que você |
| 21:43 | provavelmente usa se tem partição encriptada. Com tudo isso, ela é extremamente rápida, o suficiente pra encriptar e decriptar dados do seu HD em tempo real, e é absurdamente segura. Eu |
| 21:54 | concluí no episódio de Supremacia Quântica, que nem um computador quântico seria capaz de quebrar o AES, ele só diminuiria a força bruta em uma ordem de grandeza, mas o espaço |
| 22:04 | computacional é tão gigante que ele continua inviável de quebrar mesmo assim. Eu queria dizer que encriptação simétrica de ciphers de bloco são funções que recebem |
| 22:13 | um plaintext, um segredo e um initialization vector e cospe um ciphertext seguro. Mas isso |
| 22:20 | não explica o que realmente significa ser seguro, então resolvi fazer essa tangente. Acho que vale |
| 22:25 | a pena ter uma noção do que significa algo ser encriptado com AES. Mas eu não demonstrei como |
| 22:31 | funciona essa geração de chaves a partir da chave de 256 bits, como ele gera as tabelas, os S-boxes, |
| 22:38 | as várias rotações e como isso aumenta a confusão e difusão segundo Shannon. Se tiver interesse |
| 22:44 | existem centenas de documentações e videos aqui no YouTube mesmo explicando o processo. |
| 22:50 | Agora, existe uma outra categoria de algoritmos que é comumente confundido com encriptação e são |
| 22:56 | as funções criptográficas de hash ou message digest, literalmente funções que digerem |
| 23:02 | mensagens. Diferente de encriptação simétrica como o TripleDES ou AES, |
| 23:07 | onde você pode reverter o processo e decriptar do ciphertext pro plaintext, algoritmos de hashing |
| 23:13 | são o que chamamos de one-way, direção única, ou seja, irreversíveis. Toda função de hashing pega |
| 23:20 | um plaintext de qualquer tamanho e cospe uma saída de tamanho fixo. Por exemplo, o antigo MD5 sempre |
| 23:26 | vai cuspir uma saída de 128 bits, representado como uma string de 32 caracteres em hexadecimal. |
| 23:31 | Outro que vocês devem conhecer é o SHA1, ou Secure Hash Algorithm 1, que cospe digests de 160 bits |
| 23:38 | representados em uma string de 40 caracteres em hexadecimal. Nos primórdios da internet, com conexões instáveis e pouco confiáveis, pra garantir que o download |
| 23:47 | de um arquivo não veio corrompido era usado o antecessor do MD5, o MD4 pra comparar os hashes |
| 23:54 | original e o do arquivo downloado. Um MD5 é basicamente o MD4 com mais uma rodada. Já já |
| 24:01 | vou explicar o que é uma rodada. Ambos MD5 e SHA1 tem seus usos, mas são |
| 24:06 | considerados inseguros hoje em dia. No lugar deles deve ser usado SHA2 ou o SHA3 que foi aprovado |
| 24:12 | pelo NIST em 2015, a partir do algoritmo chamado Keccak. Vocês devem ter notado que o NIST tem uma |
| 24:18 | nomenclatura meio padrão, AES pra encriptação é o Rijndael, SHA3 é o Keccak, isso pode confundir. |
| 24:25 | Mas fora dos meios de criptografia, poucos ouvem falar em Rijndael ou Keccak e você ouve mais AES ou SHA. Mas enfim, como funciona e pra que servem algoritmos de hashing? |
| 24:36 | Eu disse que a função recebe uma entrada de qualquer tamanho, seja uma string de senha, seja um arquivo PDF de contrato, seja um arquivo binário do instalador de algum programa, |
| 24:45 | e sempre vai cuspir uma saída de tamanho fixo, de 128 bits no caso do MD5 ou 160 bits no caso |
| 24:52 | do SHA1. Pra fazer isso um MD5, por exemplo, você divide o binário do arquivo e vai processando em |
| 24:58 | blocos de 128-bits. É um cipher de bloco, só que em vez de preservar os blocos numa |
| 25:04 | cadeia, aqui ele usa o processamento do bloco anterior em cima do próximo bloco, sobrando |
| 25:09 | sempre um bloco de tamanho fixo. Em cima de cada bloco é aplicado alguma computação, e é aí que os |
| 25:15 | algoritmos diferem pra ganhar as características desejadas de segurança. Pra simplificar, imaginem que o texto original é este blob em binário aqui do lado, de 3 linhas só. |
| 25:25 | Agora vamos quebrar esse blob em blocos de 10 bits em vez de 128, de novo, pra simplificar. |
| 25:31 | De forma extremamente ingênua, vamos só aplicar um exclusive OR ou XOR que eu expliquei no vídeo |
| 25:37 | anterior, um bloco de cada vez. Um XOR da primeira linha com a segunda linha. E agora o resultado com a terceira linha, mas temos um problema, a terceira linha não tem 10-bits, |
| 25:47 | pra poder executar o XOR precisamos completar ela, e pra isso fazemos o que se chama de padding. Se |
| 25:54 | não estou enganado um MD5 continua o que falta colocando primeiro um bit 1 e o resto com zeros. |
| 26:00 | Pronto, agora fazemos o último XOR. E no final, temos um único bloco de 10-bits e isso seria uma |
| 26:05 | função de hashing de 10-bits que é extremamente inseguro porque eu só usei um mísero XOR. Claro |
| 26:12 | que o MD5 faz mais coisas por bloco, mas só pra vocês terem uma noção de como a partir de uma entrada de tamanho arbitrário, chegamos numa saída de tamanho fixo. |
| 26:20 | Novamente, não implementem uma função de hashing assim como eu mostrei. Um MD5 usa |
| 26:26 | tabelas pré-computadas, divide cada bloco de 128 bits em quatro sub-blocos de 32-bits, |
| 26:32 | performa várias operações além de XOR, como AND, OR, e mais, e depois de vários rounds |
| 26:37 | de operações concatena os sub-blocos de volta nos 128-bits e repete pra cada bloco. É um pouco mais |
| 26:44 | complicado e mesmo assim o MD5 e o SHA1 não são mais considerados seguros. Eles tem pelo menos dois problemas, sofrem de ataque de colisão e ataque de extensão de comprimento. |
| 26:54 | Pra entender colisão precisamos entender algumas das características desejáveis em funções de hashing. Primeiro, gostaríamos que o hash que ela cospe, que é um número binário, |
| 27:05 | seja difícil de distinguir de uma função que cospe números aleatórios. Ou seja, não seria bom que a saída se concentrasse próximo de certos números e sim que ela tivesse |
| 27:15 | uma distribuição normal. Como a frequência de números jogando dados. Nunca se concentrando só num número. Vamos dar um exemplo de uso. Digamos que eu tivesse a tarefa de organizar |
| 27:25 | centenas de livros em dezenas de estantes numa biblioteca. Como organizar? |
| 27:30 | A primeira coisa que vem à cabeça seria talvez organizar em ordem alfabética por título ou autor. |
| 27:36 | Porém, rapidamente você vai notar que tem mais livros que começam com certas letras do que |
| 27:41 | outras, por exemplo, que começam com a letra A do que com Z, faz de conta. Mesmo se eu organizasse |
| 27:47 | assim, eu ainda ia ter que ficar caçando em qual estante começa e em qual prateleira começa qual |
| 27:53 | letra. Em vez disso poderíamos numerar cada posição em cada estante, digamos que cada |
| 27:58 | estante comporte 200 livros e temos 20 estantes então temos espaço pra 4000 livros. Temos 1000 |
| 28:05 | livros pra organizar, e poderíamos passar o título numa função de hashing e ele nos devolve um número |
| 28:10 | entre 1 e 4000. É quase 12-bits, portanto seria uma função de hashing de 12-bits. |
| 28:16 | Agora, o que seria o ideal? Que cada título devolvesse um número não repetido, |
| 28:21 | porque não seria legal se muitos livros caíssem na mesma posição, certo? Se caíssem elas entrariam em |
| 28:27 | colisão. Não dá pra colocar dois livros no mesmo lugar físico nesse nosso exemplo. Essa é uma das |
| 28:33 | coisas que é desejável numa função de hashing: que existam poucas ou o mais próximo de zero |
| 28:39 | colisões. Mas justamente uma das fraquezas do MD5 e do SHA1 é que descobriram que se você pegar o |
| 28:45 | título do livro e cuidadosamente alterar o título colocando digamos alguns zeros no final do título, |
| 28:50 | uma hora chegaríamos no mesmo hash de outro título, criando uma colisão. Por que isso é ruim no mundo real? Uma das utilidades de uma função de hashing é ser |
| 29:01 | uma impressão digital. Digamos que eu tenha um contrato de 100 páginas em Word. Como eu sei que depois que eu transmiti o arquivo pra você via e-mail, ninguém interceptou o e-mail, |
| 29:11 | alterou o contrato e mandou uma cópia adulterada? Simples, antes de enviar o contrato eu passo ela num MD5 que vai me cuspir uma impressão digital de 32 caracteres. |
| 29:22 | Eu passo o arquivo pra você e te digo qual é o hash. Daí você pode passar o contrato pelo MD5 |
| 29:28 | do seu lado e comparar com o meu hash e se bater sabemos que é o mesmo arquivo. Porém, se a função é fraca contra ataques de colisão, alguém no meio do caminho poderia |
| 29:38 | adulterar o contrato pra te foder, mudar as palavras cuidadosamente pra tornar o contrato ruim |
| 29:44 | pra você. Só que isso iria alterar o hash. Mas aí quem interceptou, sabendo da fraqueza do MD5, |
| 29:51 | faz pequenas alterações como adicionar ou tirar uma vírgula, um ponto, alguns espaços e é possível |
| 29:57 | chegar no mesmo hash do arquivo original. Aí você recebe o arquivo que foi cuidadosamente |
| 30:02 | adulterado, roda ele no MD5 e ele te dá o mesmo hash do arquivo original. E você agora vai confiar |
| 30:09 | que esse contrato é o válido e vai assinar sem ler. Isso é um ataque de colisão. E o tal ataque de extensão de comprimento? Aqui vou simplificar bastante mas eu deixei |
| 30:19 | o procedimento completo nos links na descrição abaixo. Digamos que você tenha feito um site pra fazer download de arquivos privados, um mini Dropbox. Você faz o upload de um arquivo |
| 30:30 | e o site devolve uma URL com uma chave especial na URL. Muita gente faria assim, |
| 30:35 | pegaria o nome do arquivo, concatenaria com algum segredo que fica no servidor e devolveria o hash |
| 30:41 | feito com MD5 ou SHA1. Pra baixar de novo o arquivo, você precisa mandar a mesma URL com |
| 30:47 | o nome do arquivo e esse hash. Em particular esse uso de hash pra autenticação é o que se |
| 30:52 | chama de MAC ou Message Authentication Code. Toda vez que você usa um hash pra autenticação |
| 30:59 | damos esse nome de MAC. Enfim, digamos que você é um usuário malicioso querendo baixar outros arquivos do servidor diferente desse que deu upload. Digamos o |
| 31:09 | arquivo /etc/passwd. Só que não temos o segredo do servidor pra concatenar com esse nome de arquivo |
| 31:15 | e gerar um novo MAC, então como podemos fazer? Lembram como o hash é calculado no meu exemplo |
| 31:21 | simples com XOR? O string é quebrado em blocos de 128-bits no caso do MD5 ou 160-bits no caso |
| 31:28 | do SHA1, o último bloco provavelmente não vai ter o tamanho total então fazemos padding adicionando |
| 31:35 | o bit 1 seguido de zeros até completar o tamanho do bloco. Daí fazemos várias operações em vários |
| 31:41 | rounds em cima de cada bloco e usamos esse resultado em cima do bloco seguinte. O hash de |
| 31:47 | cada bloco, no caso do SHA1, é a composição de 4 sub-blocos de 32-bits, que é concatenado pra |
| 31:54 | gerar o hash intermediário até o último bloco que ele tinha. Daí vamos pro bloco seguinte, que tem nosso valor adulterado. Entendem? Tudo que a função de hash precisa pra processar o bloco |
| 32:04 | seguinte é o hash dos blocos anteriores. Ou seja, sem saber o texto original passada pra função, |
| 32:10 | se soubermos o hash, sabemos como processar novos blocos seguintes só adicionando o padding de zeros |
| 32:16 | antes do nosso valor malicioso. Pra gerar o tal MAC que é o hash com SHA1, o servidor concatena um certo segredo com o nome do arquivo, faz o padding até o tamanho do string |
| 32:26 | ser divisível por 160 bits e vai aplicando o SHA1 um bloco em cima do outro. Sem saber o segredo, se eu souber aó o tamanho do segredo, eu posso fazer o padding de zeros manualmente |
| 32:36 | a partir do nome do arquivo que eu fiz upload e iniciar um novo bloco com o nome do arquivo que eu realmente quero. E eu vou conseguir gerar um novo MAC mesmo sem saber o segredo, |
| 32:46 | porque o hash que eu já tenho é tudo que a função precisa pra processar o próximo bloco. É meio |
| 32:52 | complicado de visualizar mas imagina que sabendo só o hash que é esse MAC do arquivo original, eu posso configurar o estado da função do SHA1 pra continuar a partir desse ponto, como se ainda |
| 33:04 | tivesse mais um bloco pra terminar de computar, que é o bloco malicioso que eu concatenei no |
| 33:09 | final. O problema é que o hash gerado pelo MD5 ou SHA1 me dá todas as informações que |
| 33:15 | preciso pra continuar a fazer ele rodar pra novos blocos e gerar hashes válidos. |
| 33:21 | Se não entenderam, revejam esse trecho, ou acreditem que só de saber o hash eu posso |
| 33:26 | adicionar novos blocos e gerar um novo hash válido como se a mensagem original tivesse |
| 33:31 | esse bloco adicional desde o começo. Mas tem um porém, justamente pra evitar essas coisas |
| 33:37 | você concatena um segredo no começo da mensagem original, no caso o nome do arquivo. Mesmo que eu |
| 33:43 | acredite que esse procedimento funcione, como eu vou saber o tamanho do segredo, que é importante |
| 33:48 | pra saber quantos zeros eu preciso colocar de padding? Simples, digamos que a aplicação que |
| 33:54 | eu estou tentando hackear é baseado num projeto open source, tipo um Wordpress ou Magento da vida. |
| 34:00 | Basta ir no GitHub e ver que tamanho de segredo está sendo usado no código fonte e testar. De |
| 34:06 | novo, eu não preciso saber o segredo, só o tamanho da string do segredo. É por isso que existe HMAC, que talvez vocês já tenham esbarrado em algum tutorial. Pra ajudar a |
| 34:17 | evitar ataques de colisão e ataques de extensão de comprimento como expliquei acima. Em vez de |
| 34:23 | só aplicar o hash em cima segredo mais a mensagem. Depois de fazer esse hash, você aplica a função de |
| 34:30 | hash de novo concatenando o segredo com o hash. Ou seja, rodamos a função de hash duas vezes |
| 34:36 | uma em cima da outra concatenando o segredo nas duas vezes. Isso é um HMAC ou hash-based message |
| 34:44 | authentication code. Você usa isso quando quer garantir que o conteúdo original da mensagem não foi adulterado. Algoritmos mais novos como SHA3 não precisa fazer esse procedimento, |
| 34:53 | ele sozinho já é um HMAC. Estão vendo como as coisas não são tão simples quanto vocês pensam? Todo mundo pensa que ah, basta eu concatenar um salt |
| 35:02 | ou segredo numa string antes de aplicar o hash e ele vai já vai ser magicamente seguro. Por |
| 35:08 | isso eu repito que vocês não devem subestimar segurança e ficar tentando fazer soluções de |
| 35:14 | criptografia na mão. O que determina a força de um algoritmo não é só o tamanho da chave, é como você usa o algoritmo. E falando em subestimar, ataques de extensão de comprimento |
| 35:24 | compromentem hashes usados como MACs ou seja, como métodos de verificação e autenticação, |
| 35:30 | como no exemplo de download de arquivos. Mas e hashes usados pra obfuscar senhas, como no caso |
| 35:37 | da tabela de senhas roubado? Um procedimento padrão é receber a senha de um usuário no cadastro e nunca guardar a senha aberta e nem encriptar. Recapitulando, |
| 35:47 | porque se a senha de encriptação for roubado, você consegue abrir 100% de todas as senhas da base. |
| 35:53 | Você tem um ponto único de falha muito perigoso. Por isso a próxima idéia que muita gente teve foi |
| 35:59 | fazer hash das senhas antes e gravar só esse hash no banco. Daí quando o usuário for fazer login, |
| 36:05 | você faz o hash da senha que ele digitou e compara com o hash do banco, se bater, quase com certeza sabemos que é a senha certa. Parece promissor, não parece? Mas só guardar o |
| 36:16 | hash da senha ainda é muito fraco. A maioria dos usuários usa como senha palavras |
| 36:21 | fáceis de lembrar. Incluindo coisas toscas como 12345678 ou teste123. Ou dados que estão abertos |
| 36:28 | no seu cadastro, como data de aniversário ou algo parecido. Via força bruta, testando todo |
| 36:34 | string possível, você levaria anos pra encontrar uma única senha. Mas os hackers não fazem força |
| 36:40 | bruta. E se você pré-calculasse o hash de todas as palavras mais usadas de um dicionário? Agora |
| 36:46 | você sai comparando o hash da tabela de senhas roubada com a tabela de hashes do dicionário. Numa base de dados grande como de uma rede social, com milhões de pessoas, você com certeza ia achar |
| 36:57 | centenas ou milhares de senhas assim. Ataques de dicionário ou ataques com rainbow |
| 37:03 | tables usam tabelas pré-computadas de hashes. Lembrando que a possibilidade de colisões num |
| 37:08 | algoritmo de hash é tecnicamente pequena mas não é zero. Duas senhas diferentes |
| 37:14 | podem acabar colidindo no mesmo hash. Lembram do exemplo dos livros e estantes? Mesmo usando algoritmos que não tem as fraquezas de colisão do MD5 ou SHA1 como o SHA2, |
| 37:24 | ainda assim sempre existe o risco do paradoxo do aniversário, já ouviram falar? Vale contar isso |
| 37:30 | se você nunca ouviu antes porque novamente, o que chamamos de "senso comum" normalmente falha perto da estatística. Imagine uma sala de aula, qual a chance de |
| 37:40 | duas pessoas fazerem aniversário no mesmo dia? Você podia pensar que seria perto de zero, |
| 37:45 | afinal uma sala de aula tem só 30 alunos, e existem 365 dias no ano. Porém, é mais frequente |
| 37:51 | do que você pensa. Pra calcular é simples e vou deixar links nas descrições abaixo, mas pense assim. Em vez de tentar calcular a chance de duas pessoas terem o mesmo aniversário, é mais fácil |
| 38:02 | calcular primeiro a probabilidade de ninguém na sala ter o mesmo aniversário. Então a primeira pessoa pode fazer aniversário qualquer dia do ano, então ele tem 365 dividido por 365, ou seja |
| 38:12 | 1. A segunda pessoa só pode cair em 364 dos dias restantes, então 364 dividido por 365. A terceira |
| 38:20 | pessoa só pode cair em 363 dos 365. E assim por diante. Multiplicamos todas as probabilidades, |
| 38:27 | pros 30 alunos. Agora, fazemos 1 menos essa probabilidade pra ter a probabilidade de duas pessoas terem o mesmo aniversário, sabe qual o resultado? Numa sala de aula de 30 pessoas |
| 38:37 | a probabilidade é de uns 70%! Tá bem longe de zero isso. Colisões são estatisticamente mais |
| 38:43 | frequentes do que gostaríamos, é um fato da matemática. E é esse um dos perigos com algoritmos de hash, o fato que colisões são probabilisticamente possíveis. |
| 38:53 | Eu levanto esse fato porque muito programador usa hashes de algoritmos como SHA256 achando que eles |
| 38:59 | sempre vão ser únicos e por isso poderiam ser usados até como identificadores únicos. |
| 39:04 | Mas isso tá errado. Por acaso, a distribuição estatística de um message digest se comporta |
| 39:11 | parecido com um gerador de números pseudo aleatórios, mas eventualmente haverá colisões |
| 39:16 | como eu acabei de explicar. Por isso que existe outra coisa se você precisa de números únicos, |
| 39:21 | que são os Universally Unique Identifiers ou UUID, ou a implementação da Microsoft que são |
| 39:28 | os Globally Unique Identifiers ou GUID. Por acaso eles são também números de 128-bits, que é o mesmo |
| 39:35 | comprimento da saída do MD5, representados como hexadecimais de 32 caracteres. Por isso a "cara" |
| 39:42 | de um UUID é meio parecido com a saída de um MD5. UUID também tem chance de ter colisões, |
| 39:48 | mas eles são desenhados pra essa probabilidade ser realmente quase zero. Quando acontecem, e já aconteceu algumas vezes, é considerado um bug na implementação. |
| 39:57 | Aliás, falando em strings parecidos, também não confundir com o novo padrão IPv6 que |
| 40:03 | também é um endereço de 128-bits, e adivinhem, representados com 32 caracteres hexadecimais. |
| 40:10 | Portanto, pra quem nunca viu nada disso, um endereço IPv6, um identificador único |
| 40:16 | UUID ou GUID, e um hash de MD5, tem mais ou menos a mesma "cara", sendo todos números de 128-bits, |
| 40:23 | representados com 32 caracteres hexadecimais. Mas eles são gerados de formas diferentes e tem |
| 40:29 | usos completamente diferentes. E com isso eu vou terminar por hoje num cliffhanger! Exatamente neste ponto estamos na metade do assunto e o resto já está escrito. Mas |
| 40:39 | agora é uma boa hora pra rever o que eu expliquei. Peguem suas anotações, façam mais pesquisa nos pontos que mais se interessaram e estudem bastante porque o próximo |
| 40:49 | episódio vai ser tão denso quanto este. Não vou nem perguntar se vocês ficaram com dúvidas, porque até eu ainda tenho muitas dúvidas em muitas coisas. Mas não deixem de comentar abaixo, |
| 40:59 | se curtiram o vídeo mandem um joinha, compartilhem com seus amigos, não deixem de assinar o canal e clicar no sininho pra não perder a parte 2. A gente se vê semana que vem, até mais. |
