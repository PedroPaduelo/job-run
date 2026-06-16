# Entendendo Conceitos Básicos de CRIPTOGRAFIA | Parte 2/2

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=HCHqtpipwu4
- **Duração:** 47:48
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Pois bem, vamos pra parte 2 do tema de conceitos |
| 0:06 | básicos de criptografia. Semana passada eu vomitei um tanto de informação, e espero que vocês tenham |
| 0:12 | conseguido acompanhar. Esta semana não vai ser diferente. Portanto peguem papel e caneta de novo |
| 0:18 | e preparem-se pra fazer muitas anotações. Da mesma forma como na semana passada, a matemática é muito pesada, e eu não sou a pessoa mais indicada pra descer nos detalhes |
| 0:28 | das provas matemáticas. Já vou me considerar com sorte se eu não confundi os conceitos durante as |
| 0:34 | explicações. Se tiverem interesse, na internet existem centenas de documentações explicando |
| 0:40 | toda a matemática em detalhes. Vale a pena dar uma olhada, porque se eu fosse tentar explicar |
| 0:45 | em video, teria que fazer um outro canal inteiro do tamanho do Numberphile. Recapitulando, semana passada falamos sobre encriptação de chave simétrica, |
| 0:53 | falamos sobre algoritmos de hashing e message digest, falamos sobre derivação de chaves. Agora vamos continuar o assunto começando a mostrar as ramificações por cima disso. |
| 1:03 | (...) Continuando a nossa historinha hipotética |
| 1:14 | da tabela de senhas roubadas. Já estabelecemos que não devemos gravar senhas dos usuários em |
| 1:19 | plaintext numa tabela em nosso banco. Também já estabelecemos que não devem ser encriptadas, |
| 1:25 | e agora tentamos gravar o hash. Mas como já vimos, é fácil atacar com dicionários ou rainbow tables |
| 1:32 | com hashes pré-calculados. E como ainda existe o paradoxo do aniversário que garante que existe |
| 1:38 | uma boa probabilidade de colisões, é possível encontrar uma palavra que gere o mesmo hash da |
| 1:43 | senha do usuário, mesmo que não seja exatamente a mesma senha. Pra evitar esses ataques, |
| 1:48 | uma forma de mitigar é concatenar algum número grande junto com a senha e daí gerar o hash. |
| 1:55 | Então pra cada novo usuário cadastrado, geramos esse número que chamamos de salt, daí fazemos o |
| 2:00 | hash da senha prefixado com esse salt e gravamos o hash resultante no banco, junto com o salt. Daí |
| 2:08 | vai ser mais difícil um ataque com rainbow tables pré-calculadas. Se você já fuçou o código fonte de |
| 2:14 | qualquer sistema de autenticação, vai encontrar esse campo salt ou equivalente. Então, resta ao hacker tentar calcular os hashes na hora, usando os salts, via força bruta, |
| 2:25 | concatenando palavras de um dicionário com o salt que está na tabela, até achar um hash que tenha |
| 2:31 | colisão com o hash gravado na tabela. Parece difícil, porém a geração de hashes pode ser |
| 2:36 | acelerado. Aqui é mais uma especulação, nem sei se fazem isso. Mas faça de conta. Se você acompanhou |
| 2:42 | a corrida pelo Bitcoin nos últimos anos deve ter ouvido falar que os tais mineradores acabaram |
| 2:47 | com o estoque de GPUs do mercado em 2017. E que mineradores gigantes como a Bitmain criaram ASICs |
| 2:53 | ou Application Specific Integration Circuits. Lembram o que eu falei dos FPGAs? FPGAs são |
| 3:00 | circuitos programáveis via software, é como se eu pudesse "moldar" o hardware do chip como se fosse um chip feito sob medida. ASICs são exatamente chips feitos sob medida direto, direto da |
| 3:10 | fábrica. Existem ASICs feitos exclusivamente pra gerar hashes específicos de mineração, os |
| 3:16 | famosos Antminer S9 que é uma combinação de ASIC, FPGAs e processadores ARM como controladores. Pra |
| 3:23 | dar uma idéia, um CPU topo de linha como o Intel Core i9 9900K tem o que chamamos de hash power, |
| 3:29 | que é a potência de geração de hashes. São uns 478 hashes por segundo. Parece bastante? Nah, isso é uma porcaria. Uma GPU pode ser usada pra gerar hashes mais rápido |
| 3:39 | ainda. Uma NVIDIA TITAN X, arquitetura Pascal, que é a geração passada, consegue fazer 1.3 gigahashes |
| 3:47 | por segundo, ou seja, 1.3 milhões de hashes por segundo. É ordens de grandeza mais rápido |
| 3:53 | que uma CPU. E eu posso ligar mais de uma GPU no mesmo computador em paralelo. Mas isso também é |
| 3:59 | uma porcaria, uma única unidade do Antminer S9 consegue fazer uns 14 terahashes por segundo, |
| 4:07 | ou seja, 14 bilhões de hashes por segundo. Agora estamos começando a conversar. Sem entrar muito nos detalhes de como Bitcoin funciona, o que chamamos de proof of work, que |
| 4:18 | é o processo de assinatura de um bloco de Bitcoin é basicamente achar um hash especial desse bloco. |
| 4:24 | Não é um hash qualquer, você precisa ir alterando um número dentro desse bloco que altera o hash |
| 4:30 | final, até achar um hash que começa com um certo número de zeros à esquerda. Mas você lembra que |
| 4:36 | eu falei que algoritmos de hash precisam embutir os princípios de confusão e difusão de Shannon, |
| 4:42 | ou seja, se eu mudar 1 bit na mensagem original, mais da metade dos bits do hash precisam mudar, |
| 4:48 | de forma que não seja fácil achar um relacionamento entre a mensagem original e o hash final. Se eu ficar alterando só um número dentro do tal bloco de transações de Bitcoin e |
| 4:57 | refazer o hash, ele vai ser completamente diferente do hash anterior, de forma que o comportamento é parecido com a geração de um número pseudo aleatório. Então eu preciso ficar |
| 5:07 | alterando esse um número do bloco e regerando hashes até conseguir achar um hash específico |
| 5:14 | que tem a tal sequência de zeros à esquerda. Essa quantidade de zeros é o que chamamos de |
| 5:19 | dificuldade da mineração. E você imagina que um minerador precisa de muito hashpower, porque minerar é uma competição. Centenas de mineradores estão tentando assinar o |
| 5:29 | mesmo bloco ao mesmo tempo. Quem achar o hash primeiro ganha um prêmio em Bitcoin, uns 12 |
| 5:35 | bitcoins agora em novembro de 2019. Além do prêmio o minerador ganha as taxas de transação acumuladas |
| 5:41 | nesse bloco. Quem perder, não ganha nada. Por isso quanto mais hashpower o minerador tiver, |
| 5:47 | mais chances tem de achar o hash primeiro. E por isso se usa ASICs como o AntMiner e por isso só |
| 5:53 | com GPUs ou CPUs você não tem chances de competir, porque estamos falando de pular de milhões |
| 5:58 | de hashes por segundo com GPUs pra bilhões de hashes por segundo com Antminers. |
| 6:04 | Mas, não só de mineração de Bitcoins vive geradores de hashes. Imagine você colocar |
| 6:10 | uma versão derivada de Antminer feita exclusivamente gerar hashes normais. Pra |
| 6:15 | tentar achar a colisão via força bruta numa tabela de senhas roubada. Mesmo com salt, |
| 6:21 | um equivalente Antminer pode ficar permutando num dicionário, concatenando cada palavra com o salt e |
| 6:28 | gerar o hash na hora pra comparar. É um processo parecido com mineração de Bitcoins, mas pode ser |
| 6:34 | usado pra tentar quebrar senhas via força bruta, à uma velocidade de bilhões de hashes por segundo |
| 6:39 | por Antminer. E como cada Antminer custa só 3 mil dólares, imagine se eu colocar um data center de |
| 6:46 | derivados de Antminer com o único objetivo de estourar senhas. Especialmente se forem senhas |
| 6:51 | importantes como senhas de banco ou senhas de funcionários do governo americano. Voltando à nossa história da tabela de usuários roubada, por isso mesmo, |
| 7:00 | só fazer o hash de senhas, mesmo com o recurso de concatenar com salts antes de hashear, |
| 7:06 | ainda oferece o risco iminente de encontrarmos colisões usando ASICs especializados. E agora |
| 7:12 | o problema é outro, quanto mais rápido for a performance de um algoritmo de hashes, mais rápido esse ASIC hipotético conseguiria processar. Então existe uma outra forma de |
| 7:22 | proteger. E é usando algoritmos de derivação de chaves com capacidade de adicionar dificuldade |
| 7:28 | no processamento. Um dos mais conhecidos hoje é o Password-based Key Derivation Function ou |
| 7:34 | PBKDF2. Como o nome diz ele é uma função que deriva chaves a partir de senhas. |
| 7:41 | Vamos entender, uma senha normal é normalmente muito fraca. Não importa se você acha que fez |
| 7:47 | ela ser forte trocando "A" por arroba ou "I" por exclamação, essas coisas qualquer atacante |
| 7:53 | já adiciona no algoritmo de força bruta pra quebrar sua senha. Parta sempre do princípio |
| 7:58 | que sua senha é uma bosta. Por isso sistemas de autenticação baseadas em Kerberos, por exemplo, |
| 8:03 | não usam sua senha diretamente, primeiro elas modificam sua senha num processo conhecido como |
| 8:09 | key strengthening ou key stretching, literalmente fortalecimento e esticamento de chaves. Elas |
| 8:16 | não são necessariamente a mesma coisa, mas pra esse vídeo vamos assumir que são. É basicamente o processo de adicionar um salt gigante, algo com mais de 64-bits de comprimento, |
| 8:27 | e aplicar alguma função HMAC de hashes milhares ou centenas de milhares de vezes, |
| 8:33 | um em cima do outro, e adicionar alguma entropia extra como o horário atual, |
| 8:38 | algumas vezes no meio do processo. Isso tem duas funções, a primeira é gerar uma |
| 8:43 | nova senha mais forte e mais longa que você pode usar no lugar da sua senha curta e |
| 8:48 | fraca. É uma senha derivada da sua, mas que vai resistir a rainbow tables e dificultar |
| 8:54 | colisões. Mais do que isso, algoritmos como o PBKDF2 tem um fator de dificuldade, |
| 8:59 | parecido em conceito com o processo de proof of work que é usado na mineração de Bitcoins. |
| 9:05 | É literalmente quantas vezes você vai rodar o algoritmo de hash como um SHA2 ou HMAC-SHA1. |
| 9:12 | Se você rodar dezenas de milhares de vezes, o algoritmo vai custar meio segundo, talvez até um |
| 9:17 | segundo pra gerar o hash final. Com o que falei até agora, você já deve estar entendendo porque é desejável um algoritmo custar caro pra gerar o hash. Eu mencionei |
| 9:27 | a possibilidade de usar um similar a Antminer, um ASIC, pra quebrar senhas hasheadas com salts. Eu |
| 9:34 | fico falando similar, porque na prática você não vai usar um Antminer de verdade, porque a lógica |
| 9:39 | do circuito está feita especificamente pra lógica de proof of work de mineração de Bitcoin. Porém, |
| 9:45 | com um FPGA ou desenhando um novo ASIC específico pra SHA256 por exemplo, ou no mínimo usando GPUs, |
| 9:52 | você já está na casa dos milhões de hashes por segundo. Com um novo ASIC você poderia ir pra bilhões de hashes por segundo. Sabendo que o custo de desenvolvimento de hardware decai todo ano, |
| 10:02 | em breve ficará acessível criar equipamentos assim muito barato, na China. Por isso começamos a migrar pra algoritmos de geração de hashes como o PBKDF2 |
| 10:12 | que custa caro pra processar. Mas essa não é a única solução, é uma corrida |
| 10:18 | entre aumentar a dificuldade do algoritmo versus conseguirem criar hardware mais rápido com mais |
| 10:24 | hashpower. Imagine o seguinte problema. Digamos que no cadastro de usuários do seu sistema, você resolveu se precaver e escolheu usar PBKDF2 com HMAC-SHA1 com um salt de 64-bits |
| 10:37 | e com dificuldade de umas mil rodadas. Isso leva alguns milissegundos pra gerar o hash e é |
| 10:42 | isso que você vai gravar no banco. Com hardware atual, isso levaria milhares de anos pra achar uma colisão. Dê mais 2 ou 5 anos, digamos que consigam fazer esse tal ASIC, barato, |
| 10:53 | que comece a achar colisões. E se agora eu quiser aumentar a dificuldade e migrar todos os hashes |
| 10:59 | pra usar SHA2, com salts de 128-bits e aumentar pra 100 mil rodadas? Eu não tenho como fazer isso, |
| 11:05 | porque obviamente eu também não tenho a senha original do usuário. Por isso, outra forma de mitigar que algumas aplicações implementam é atualizar o hash do |
| 11:15 | banco quando o usuário se logar com sucesso da próxima vez, porque é só nesse momento que você |
| 11:20 | tem a senha do usuário de novo. Daí pode gerar um novo hash com maior dificuldade e atualizar |
| 11:26 | no banco. O hash de um PBKDF2 é o hash concatenado do salt, do número de iterações da dificuldade, |
| 11:34 | por isso ele é bem comprido e por isso você não precisa criar outro campo na tabela só pra guardar o valor do salt. Além de aumentar a dificuldade exigindo mais |
| 11:43 | processamento, existem outras formas de mitigar. Por exemplo, o custo de memória RAM costuma ser |
| 11:49 | proporcionalmente maior do que CPUs, ao longo do tempo. Elas diminuem menos rápido de preço. |
| 11:55 | E se criarmos um algoritmo de hash que além de ser caro pra processar também exige um uso de |
| 12:01 | memória bem elevado. E é isso que faz algoritmos como bcrypt, scrypt e outros novos como Argos2. |
| 12:08 | Finalmente chegamos no bcrypt que muitos tutoriais hoje recomendam usar, seja em PHP ou Ruby, |
| 12:14 | você vai achar bibliotecas e tutoriais que usam o bcrypt pra fazer o hash da senha. Assim como |
| 12:19 | o PBKDF2 ele tem dificuldade configurável, então pra produção você deixa uma dificuldade elevada, |
| 12:25 | mas pra sua máquina de desenvolvimento ou pra ambiente de testes com ferramentas de continuous integration, você deixa uma dificuldade baixa pra rodar rápido. |
| 12:34 | O bcrypt na realidade não é um algoritmo específico de hash, ele pode ser usado como |
| 12:39 | uma função de derivação de chaves através de algoritmo de encriptação simétrica, |
| 12:45 | no caso o cipher Blowfish. O Blowfish foi criado como uma alternativa mais segura e mais rápida |
| 12:51 | que o DES. Lembram que falei dele no episódio passado? Na verdade, acho que qualquer coisa hoje em dia é mais seguro e mais rápido que o DES. O Blowfish tem uma característica importante que nos |
| 13:02 | interessa: ele um custo de setup alto, ele precisa de 4kbytes de memória pra cada novo setup. Parece |
| 13:08 | pouco, mas isso escala rápido e torna o Blowfish caro em termos de uso de memória. Vocês lembram |
| 13:15 | que uma das formas de deixar o DES mais rápido era rodar o algoritmo três vezes por bloco. Pois bem, |
| 13:21 | existe uma derivação do Blowfish chamado TwoFish que foi um dos finalistas na |
| 13:26 | competição da NIST pra escolher quem seria o novo AES. Mas como falei no episódio anterior, |
| 13:31 | quem ganhou foi o Rijndael. De qualquer maneira, podemos usar o Blowfish pra gerar hashes. Isso é uma coisa que nem todo mundo sabe: hashes podem ser gerados |
| 13:41 | a partir de algoritmos de encriptação de chave simétrica. O bcrypt é um exemplo disso, usando |
| 13:47 | o Blowfish pra gerar hashes. Diferente do PBKDF2 você não precisa gerar e passar um salt porque o |
| 13:54 | bcrypt gera um salt automaticamente, por isso se você rodar o bcrypt várias vezes em cima de uma |
| 14:00 | mensagem, ele vai gerar hashes diferentes toda vez. E assim com o PBKDF2 você pode configurar a |
| 14:06 | dificuldade, o custo dele. Inclusive o parâmetro se chama "cost". Assim, quanto maior o custo, |
| 14:12 | mais rodadas ele vai fazer e mais demorado vai ficar. Mas diferente do PBKDF2, só com um ASIC |
| 14:19 | você não vai conseguir acelerar um ataque de força bruta porque além de hashpower você vai precisar |
| 14:24 | de muita RAM, elevando o custo, e dificultando alguém tentar algo assim. Existem outros sucessores ao bcrypt como o scrypt e Argon2, que foram desenhados especificamente |
| 14:35 | pra serem mais caros ainda em uso de memória e dificultar ataques de hashpower via GPUs ou |
| 14:41 | ASICs. Muitos frameworks web hoje usam o bcrypt porque ele é melhor que nada. Mas eu imagino |
| 14:47 | que se alguém precisasse escolher o algoritmo de hash mais resistente e moderno seria ou o |
| 14:53 | Argon2 que é o mais flexivel em termos de customização ou no mínimo o scrypt. |
| 14:58 | Concluindo a parte de como proteger senhas, sabemos que jamais, nunca, devemos gravar em plaintext. Também sabemos que não adianta encriptar a senha e gravar no banco. |
| 15:09 | Aprendemos também que só usar um hash, seja um SHA256 ou um HMAC-SHA256 por si só, não vai |
| 15:16 | resistir muito tempo a ataques de dicionários ou rainbow tables. Adicionar salts ajuda bastante, |
| 15:22 | mas não vai ser resistente a ataques via hardware especializado como GPUs ou ASICs. Portanto, |
| 15:28 | a melhor medida é usar um algoritmo de derivação de chaves que seja muito caro |
| 15:33 | tanto em processamento quanto uso de memória como Argon2 ou scrypt, e de tempos em tempos, |
| 15:40 | toda vez que um usuário se logar com sucesso, gerar um novo hash com uma dificuldade ainda |
| 15:45 | maior e gravar no banco. Dessa forma mitigamos o máximo possível caso o banco de dados seja |
| 15:51 | comprometido e os dados caiam na mão de hackers dispostos a quebrar suas senhas. |
| 15:56 | "Mas, meu site usa autenticação de dois fatores, só com a senha ele não vai conseguir entrar." O |
| 16:03 | grande lance de quebrar senhas não é pra usar só no seu próprio site. Um dos problemas com |
| 16:08 | usuários normais é que eles usam a mesma senha em sites diferentes . Se num banco de dados de |
| 16:14 | 1 milhão de pessoas, eu conseguir 100 mil senhas, são 100 mil possibilidades pra se usar em diversos outros sites que os usuários tenham contas. Por isso mesmo falamos que além |
| 16:25 | de habilitar autenticação de dois fatores, cada conta em cada site que você tenha cadastro deve |
| 16:30 | usar uma senha segura diferente. E por isso você devia estar usando ferramentas de gerenciamento de senhas como 1Password ou LastPass ou equivalentes. Eu faço isso, |
| 16:41 | nenhuma conta minha tem senhas repetidas. Twitter, Facebook, GitHub, Instagram, Google, cada uma usa |
| 16:48 | senhas de uns 40 caracteres aleatórios gerados por ferramenta, impossíveis de decorar. |
| 16:53 | Uma pequena tangente, eu já falei como muita gente confunde hashes de message digests, |
| 16:59 | funções de derivação de chaves, ou mesmo UUID, GUID, IPv6, porque todos eles são strings com |
| 17:06 | caracteres representando hexadecimais que parecem aleatórios. Existe ainda outro gerador que cospe |
| 17:12 | strings que parecem bagunçadas que podem confundir, esse é o Base64. Base64 é uma |
| 17:18 | ferramenta usada pra converter um binário em strings de texto. Cada caractere do base64 |
| 17:24 | representa 6-bits, então três bytes de 8-bits são representados em 4 caracteres de 6-bits. Portanto |
| 17:30 | sempre se lembre que converter um binário em texto via Base64 aumenta o tamanho final em pelo menos 20% se não forem comprimidos com gzip ou algo assim. |
| 17:39 | E porque eu preciso converter binários em texto? Simples, porque todo protocolo de internet como os |
| 17:45 | de e-mail e mesmo HTTP são protocolos texto. Se eu quiser enviar um e-mail com um anexo |
| 17:51 | que é um arquivo PDF ou word ou uma imagem, ele precisa converter em texto pra poder concatenar |
| 17:57 | no corpo do e-mail. Sim, se você não sabia disso, todo e-mail é sempre 100% texto e todo |
| 18:04 | binário precisa ser convertido em base64 pra ser anexado e por isso todo anexo de e-mail é mais |
| 18:09 | pesado que o binário original, e por isso você deve evitar mandar anexos gigantes. Eu acho que não preciso dizer isso a esta altura, mas eu fico pasmo toda vez que vejo |
| 18:18 | um programador que acha que Base64 é uma forma de encriptação. Ela não é. Ela é só uma conversão |
| 18:25 | simples de binário pra texto. Sem chave, sem entropia, sem nenhuma operação que bagunça |
| 18:31 | seu conteúdo. Nunca use Base64 achando que está adicionando alguma dificuldade de obfuscação, |
| 18:37 | pois não está. Base64 é trivialmente reversível do texto pro binário. Outro nome que talvez você |
| 18:44 | veja por aí é ASCII armor ou Radix-64, mas é tudo Base64. A mesma coisa vale pra checksums |
| 18:50 | ou CRC que é cyclic redundancy check, em resumo é um cálculo feito em cima de um número pra ver |
| 18:56 | se algum dos dígitos está errado. Por exemplo, um código de barras de um boleto bancário tem um CRC, |
| 19:01 | dessa forma é muito fácil checar se a pessoa digitou um número errado do boleto. Naquele códigozão que você digita no seu internet banking tem um CRC no final, que é um número calculado a |
| 19:11 | partir dos anteriores. Digite um número errado e o CRC não vai bater. CRC também é útil pra |
| 19:17 | checagem de erros no tráfego de pacotes de rede. O protocolo TCP tem uma checagem de CRC meio fraco, |
| 19:23 | e por isso existe outra checagem na camada 2, no nível do frame de Ethernet por exemplo. É uma |
| 19:29 | forma de rapidamente checar errors de transmissão causado por barulho ou interferência na rede por |
| 19:34 | exemplo. Mas isso também não tem nada a ver com hashing ou encriptação. Até agora tudo que falamos de encriptação depende de um componente: um segredo, |
| 19:43 | ou uma chave. Pra coisas como encriptar seu HD, isso é suficiente. Quando você usa o BitLocker do |
| 19:49 | Windows 10 Pro ou o FileVault do MacOS ou o LUKS no Linux, eles vão fazer um processo similar. Você |
| 19:55 | começa providenciando uma senha que deveria ser forte. Mas como ao mesmo tempo você não quer esquecer a senha e perder acesso aos seus dados, provavelmente você vai acabar usando uma |
| 20:06 | senha porcaria. Mas não tem problema, o sistema de encriptação vai gerar uma senha forte pra você, |
| 20:12 | usando um salt gigante com um algoritmo de derivação de chave como o Scrypt ou PBKDF2 que, |
| 20:19 | como já expliquei, são resistentes a ataques de força bruta ou dicionários e até ASICS. Aqui eu |
| 20:24 | estou chutando, mas essa ainda não deve ser o segredo pra encriptação. Ele vai gerar outra |
| 20:30 | senha forte, que seria o mount key. Esse mount key é que vai ser usado pra encriptar os dados do seu |
| 20:35 | disco. E a senha forte derivada da sua vai ser usada pra encriptar o mount key. |
| 20:41 | Dessa forma, se amanhã você quiser mudar sua senha ou passphrase, você vai só mudar a derivação que |
| 20:47 | abre seu mount key. E não precisaria decriptar e encriptar seu disco inteiro tudo de novo. Adicione |
| 20:54 | ainda um token ou identificação biométrica como autenticação de dois fatores e você tem um pouco |
| 20:59 | mais de segurança. Entenda que além dos seus dados, tem outra coisa importante que precisa ficar encriptado: o seu swap. O swap é como se fosse uma extensão da RAM em disco. Não dá |
| 21:11 | pra saber o que tem nesse swap. Se alguém pegar seu swap lá pode ter o que tinha na memória das |
| 21:16 | aplicações que estavam rodando na máquina. Números de cartão de crédito, mesmo senhas, ou outros |
| 21:22 | dados sensitivos podem estar lá. Você gostaria que a memória também esteja encriptada. |
| 21:27 | A Intel, por exemplo, tem o SGX ou Safe Guard Extensions, em resumo ele garante que dados |
| 21:33 | específicos que saem do processador pra memória já saiam direto do processador encriptados, |
| 21:39 | colocados numa região específica da memória que chamamos de "enclaves" ou secure enclaves. Pense |
| 21:46 | numa partição criptografada dentro da RAM que só é lida e escrita pela CPU e nem seu |
| 21:52 | sistema operacional tem acesso, nem como root, nem como administrador nem nada. Não é 100% do |
| 21:58 | que está na RAM mas só coisas específicas que você manda via uma API. É uma API que pode ser |
| 22:03 | usada por softwares que precisem trabalhar com dados sensíveis como sua chave mestra, de forma que ela não fique nem por um milissegundo exposta na RAM em plaintext e suscetível a ser |
| 22:14 | roubada dali por um malware. Resumindo até agora. Falamos de algoritmos de hashing, tanto obsoletos como MD5 e SHA1 quanto mais novos como HMAC-SHA256. Falamos |
| 22:26 | de derivação de chaves como Bcrypt e PBKDF2. De encriptação simétrica de chave. Coisas como o AES |
| 22:33 | Rijndael ou Blowfish ou TripleDES que são todos algoritmos block cipher, por processarem um bloco |
| 22:39 | de cada vez. Mas existem outros algoritmos como RC4 que são stream ciphers, que aplica |
| 22:45 | processamento bit a bit em vez de bloco a bloco. Mas pros propósitos de hoje, só block ciphers |
| 22:51 | é suficiente. Falta falarmos de encriptação assimétrica e troca de chaves. |
| 22:56 | Tudo que falamos até agora de encriptação depende de uma chave secreta, é a chave pra encriptar e |
| 23:03 | decriptar. Dentro da mesma máquina tudo funciona. Mas e quando queremos mandar um ciphertext pra |
| 23:10 | outra pessoa? Pra essa outra pessoa decriptar a mensagem ele precisa ter o mesmo segredo usado pra |
| 23:16 | encriptar. Só que não existe nada mais inseguro do que trafegar uma senha pela internet. Essa senha |
| 23:22 | vai ser certamente interceptada no meio do caminho e toda sua segurança vai por água abaixo. Queremos |
| 23:28 | um jeito de criar uma chave na minha máquina e na máquina de outra pessoa, sem trafegar as chaves, |
| 23:35 | de tal forma que o que eu encriptar com a chave que só eu tenha seja possível de ser |
| 23:40 | decriptada com a chave que só a outra pessoa tenha. Esse é o conceito. Pra simplificar vamos falar das duas mais importantes. Diffie-Hellman e RSA. Ambas |
| 23:51 | cujos nomes são os nomes dos criadores, no caso Whitfield Diffie e Martin Hellman e no |
| 23:57 | caso de RSA é Rivest, Shamir e Adleman. Vocês devem ter percebido que muitos algoritmos |
| 24:02 | de segurança ganham uma derivação do nome dos criadores, mesma coisa com Rijndael que é o AES, |
| 24:08 | por exemplo. E tanto Diffie-Hellman e RSA por coincidência tem minha idade, já que nasceram |
| 24:13 | em 1977, o ano onde descobrimos que é possível trafegar comunicação encriptada sem o risco de |
| 24:20 | trafegar uma chave secreta e eu argumentaria que é a partir desse ponto que a internet realmente |
| 24:25 | se torna comercialmente viável e anos depois permitiria coisas como e-commerce. |
| 24:30 | Já avisando que felizmente é fácil explicar como esses algoritmos funcionam, mas vai ser impossível |
| 24:35 | demonstrar "porque" eles realmente funcionam, falta matemática pra explicar aritmética modular, |
| 24:42 | teorema de Euler, totientes e muito mais, então de novo, por hoje vocês vão ter que |
| 24:48 | acreditar no que eu disser, mas eu recomendo que você pesquisem as provas matemáticas. Foi |
| 24:53 | isso que diferenciou Diffie-Hellman, porque eles conseguiram demonstrar matematicamente a segurança do algoritmo. Pra que serve Diffie-Hellman? Ele |
| 25:02 | possibilita que duas pessoas consigam gerar duas chaves, separadamente, cada um gerando |
| 25:08 | sua própria senha em sua própria máquina, sem nunca trafegar essas chaves. E eles garantem que, |
| 25:14 | o que a chave de um encriptar, a chave do outro consegue decriptar. Conseguem entender as |
| 25:19 | implicações? Todo mundo explica Diffie-Hellman usando cores ou números pequenos pra facilitar |
| 25:25 | a explicação, então vou roubar a explicação da Wikipedia porque é bem simples. Imagine duas pessoas na internet, Alice e Bob. Primeiro eles trocam duas informações públicas, |
| 25:36 | de modo inseguro via internet mesmo, um número é o módulo p igual a 23, por exemplo, |
| 25:41 | e uma base g igual a 5, e 5 porque ela é uma raíz primitiva módulo 23. Falei que precisa de |
| 25:48 | aritmética modular. Daí Alice escolhe um segredo chamado azinho que ela não divulga pra ninguém, um |
| 25:54 | número como 4. Agora vai complicar um pouco. Alice precisa calcular o g, que é um número público, |
| 26:00 | elevado a esse azinho, que é secreto, módulo p, ou seja, 5 elevado a 4 módulo 23 que por acaso |
| 26:06 | é 4 de novo, porque estamos usando números muito pequenos. Esse resultado 4, que vamos chamar de Azão, ela pode mandar publicamente pro Bob via internet insegura. |
| 26:16 | Agora o Bob também escolhe um segredo que ele não divulga, um bezinho igual a 3, |
| 26:21 | e faz a mesma conta de g elevado a bezinho módulo p, ou seja, 5 elevado a 3 módulo 23 |
| 26:28 | que é 10. Vamos chamar isso de Bezão e Bob pode mandar esse Bezão pra Alice via internet também, |
| 26:34 | aberto. Alice agora pode computar o Bezão do Bob elevado ao azinho dela módulo p. Ou seja, |
| 26:42 | 10 elevado a 4 módulo 23. Isso vai dar 18. E o Bob pode fazer o mesmo, pegar o Azão que recebeu |
| 26:47 | da Alice, elevar com o segredo bezinho dele que é 3, e fazer módulo 23 e o resultado é 18 também. |
| 26:53 | Pronto, tanto Alice quanto Bob compartilham o mesmo segredo 18 e esse número nunca trafegou |
| 26:59 | pela internet, e mesmo sabendo o módulo 23, a base 5, o Azão 4 da Alice e o Bzão 10 do |
| 27:05 | Bob é impossível chegar no segredo 18 que só os dois conseguem ter. Uma pessoa que ouviu a comunicação no meio do caminho não tem como calcular o segredo. Essa é |
| 27:16 | a propriedade de grupo multiplicativo de inteiros módulo p. Agora podemos fazer um derivação de |
| 27:22 | chave desse segredo - ou no caso de um TLS/SSL eles fazem acho que só um hash simples via SHA2, |
| 27:29 | porque acho que TLS antecede a criação do conceito de derivação de chaves. E esse hash |
| 27:35 | pode ser usado como o segredo por ambos num algoritmo de encriptação de chave simétrica, |
| 27:40 | como o AES, e trafegar mensagens encriptadas inviáveis de decriptar, como já expliquei |
| 27:46 | antes sobre o AES. Relembrando que a idéia de fazer uma derivação de chaves via hashes seria |
| 27:52 | pra esticar e fortalecer a chave. Claro, esse exemplo usa inteiros miseravelmente |
| 27:57 | pequenos, na realidade o tal módulo p vai ser um número primo gigantesco, digamos de 4096-bits. |
| 28:05 | A dificuldade pra alguém de fora é descobrir qual número que podemos elevar o Azão ou o Bezão módulo |
| 28:12 | p que vai nos dar o segredo. E pra achar esse número caímos no problema de logarítmo discreto, |
| 28:17 | que é computacionalmente inviável de resolver, e esse é o problema que só um algoritmo |
| 28:24 | quântico de Shor conseguiria tentar resolver, num computador quântico de mais de 4000 qubits, como |
| 28:30 | eu já expliquei no episódio anterior. Diffie-Hellman é bom pra criar chaves temporárias. |
| 28:36 | Mas tem um problema, ele sozinho não tem como autenticar as identidades da Alice e do Bob. |
| 28:42 | Por exemplo, uma terceira pessoa chamada Eve podia fazer um ataque man-in-the-middle, ou seja, toda |
| 28:49 | comunicação da Alice passa pela Eve e ela devolve pro Bob e vice versa. Daí a Alice e a Eve acabam |
| 28:56 | combinando o segredo via Diffie-Hellman e depois a Eve e o Bob combinam outro segredo. E pronto, |
| 29:02 | ela participando desse processo vai produzir segredos conhecidos com os dois e consegue ao mesmo tempo ver a comunicação e repassar a comunicação entre os dois, de tal forma que |
| 29:11 | Alice e Bob não percebam que a comunicação está sendo interceptada e repassada. |
| 29:17 | Pra evitar esse ataque de man-in-the-middle existe outro protocolo usado por cima do Diffie-Hellman |
| 29:23 | que é o STS ou protocolo Station-to-Station que em resumo exige uma checagem de assinaturas entre |
| 29:30 | os participantes, pra validar as identidades, antes de entrar no processo de geração de chaves secretas. E isso envolve o uso de certificações de chave pública, onde tanto Bob quanto Alice |
| 29:42 | tem um par de chaves privadas e chaves públicas. Isso chamamos de chaves assimétricas. |
| 29:48 | Pra entender chaves assimétricas, vamos de uma vez entrar no RSA. Aqui a matemática fica mais |
| 29:54 | difícil. Se você já gerou chaves públicas pra cadastrar no GitHub provavelmente teve que usar |
| 30:00 | o comando ssh-keygen e normalmente o padrão é usar a opção RSA. Em resumo hiper resumido, |
| 30:07 | o processo começa escolhendo dois números primos gigantescos, de novo lá pela casa dos |
| 30:12 | 2048 bits. Na verdade os tutoriais todos devem estar recomendando você escolher 4096 bits. O |
| 30:18 | primeiro processo envolve a multiplicação desses dois primos, esse é o módulo da operação. Daí |
| 30:25 | você escolhe um outro número coprimo da função totiente de Carmichael pra esse módulo, esse |
| 30:31 | vai ser o expoente da operação. A chave pública é a combinação do módulo e do |
| 30:36 | expoente. Agora você acha o inverso multiplicativo modular do expoente inverso módulo esse totiente. |
| 30:44 | Essa é a chave privada. Nem se preocupe em saber o que é função totiente ou inverso multiplicativo |
| 30:50 | modular. Se quiser entender toda a matemática vai precisar saber o que é o algoritmo de extensão |
| 30:55 | euclidiano, teorema de Lagrange, e de novo o tal grupo multiplicativo de inteiros módulo p |
| 31:01 | que usamos em Diffie-Hellman. Mas entenda só que a operação inicia com dois números primos gigantes, |
| 31:08 | com ele você calcula a chave pública primeiro e dela deriva a chave privada, e por isso elas são relacionadas. A propriedade mais importante é que tudo que |
| 31:17 | você encriptar com a chave pública só pode ser decriptada com a chave privada, e vice-versa. A |
| 31:23 | chave privada você guarda num diretório na sua máquina, com o máximo de permissões fechadas, tipo o que você tem no diretório .ssh em todo Linux. E a chave pública é a que você pode |
| 31:35 | divulgar pra qualquer um e é o que você cadastra na sua conta no GitHub por exemplo. Mas como Alice e Bob conseguem autenticar a identidade deles? Ou seja, como Alice que |
| 31:47 | sabe que Bob é confiável e vice versa? Aqui entra o papel de um Central Authority ou CA, |
| 31:52 | como uma Certisign. Todo sistema operacional vem pré-instalado com as chaves públicas de |
| 31:58 | autoridades confiáveis como a Certisign, Sectigo, Digicert, GlobalSign e outros. Quando você clica |
| 32:04 | no cadeado do seu navegador e for no caminho da certificação, você vai ver no topo um desses CAs. Você confia neles porque vieram de alguém confiável. O Windows veio da Microsoft, |
| 32:14 | a Microsoft confia nessas CAs e seu navegador vai confiar nelas também. Confiança é uma cadeia. Pra |
| 32:21 | duas pontas desconhecidas confiarem uma nas outras elas precisam de um terceiro que ambos |
| 32:27 | confiam primeiro. Esse é o princípio. A Alice começa mandando antecipadamente a chave |
| 32:33 | pública dela pra uma GlobalSign por exemplo. A GlobalSign vai usar a chave privada dela pra |
| 32:40 | assinar a chave pública da Alice. A chave e a assinatura são armazenados num pacote especial, |
| 32:46 | tipo um template, que é o formato X.509. De novo, quando você clica no cadeado em algum |
| 32:51 | site com TLS ele abre várias informações, e é isso que vem dentro de um certificado |
| 32:56 | X.509. Mais importante, nesse certificado está a chave da Alice assinada pela GlobalSign. Mas |
| 33:03 | o que é essa assinatura? Aqui vou simplificar de novo. Pra assinar |
| 33:09 | alguma coisa com uma das chaves considere que as chaves são números. Digamos que a chave privada |
| 33:14 | seja o número 10 e a chave pública seja o número 4. Você pega caractere a caractere |
| 33:20 | da mensagem que quer assinar e multiplica ela por ela mesma 10 vezes. Se o caractere |
| 33:25 | em binário é o número 2, vamos fazer 2 vezes 2 vezes 2 … 10 vezes. Lembram que no começo determinamos um módulo? Então se o resultado dessa multiplicação for maior que o módulo, aplicamos o |
| 33:36 | módulo nele e essa é a mensagem encriptada. Agora pra decriptar pegamos essa mensagem e de novo, |
| 33:42 | caractere a caractere multiplicamos ela por ela mesmo 4 vezes, que é a chave pública do |
| 33:48 | nosso exemplo. Repetindo, se o número for maior que o módulo, aplicamos o módulo no número e o |
| 33:53 | resultado vai ser a mensagem decriptada. Esse é o poder da aritmética modular. |
| 33:59 | Quantas vezes vamos precisar multiplicar cada caractere da mensagem? Lembram que eu falei que a gente gera chaves de 4096 bits? Isso é 2 elevado a 4096 que vai dar um número da |
| 34:10 | ordem de 1233 dígitos. É um número astronômico e nenhuma calculadora nem sua linguagem favorita |
| 34:17 | vai conseguir multiplicar. Mas calma, não vamos usar esse numerozão não. Sempre temos um módulo n, |
| 34:23 | lembram? Vai ser o numerozão módulo n. Ainda assim é um numerozão, mas ordens de grandeza menor. |
| 34:29 | E vamos multiplicar cada caractere da mensagem elevado a esse numerozão módulo n. |
| 34:34 | Voltando ao exemplo, é assim que a GlobalSign usa a chave privada dela pra assinar a chave |
| 34:39 | pública da Alice, e ela coloca o resultado, que é a assinatura, num certificado X.509 |
| 34:45 | que a Alice pode agora mandar pro Bob. O Bob confia na GlobalSign e tem a chave pública |
| 34:51 | dela pré-instalada na sua máquina. Com isso a chave pública da GlobalSign ele pode decriptar a |
| 34:57 | assinatura do certificado e achar a chave pública da Alice dentro. Com isso o Bob pode confiar na |
| 35:03 | Alice. Agora o Bob pode enviar mensagens com segurança pra Alice. Pra isso ele pode usar a |
| 35:09 | chave pública da Alice pra encriptar uma senha secreta e só a Alice vai poder decriptar com a |
| 35:14 | chave privada que só ela tem. Pronto, como em Diffie-Hellman ambos os participantes possuem a mesma chave simétrica pra iniciar uma conversa segura encriptada. Podemos usar um AES pra |
| 35:25 | trafegar mensagens encriptadas. De tudo isso temos alguns problemas. No caso do Diffie-Hellman sozinho, ele não tem esse mecanismo de CAs e um terceiro de confiança |
| 35:36 | pra assinar as chaves públicas. Portanto ela não tem como garantir a identidade dos participantes. Com STS ou no caso o RSA que é mais usado, ambos os participantes tem chaves |
| 35:47 | pré-criadas e pré-assinadas, e eles podem fazer esse processo de aperto de mão, ou handshake, |
| 35:53 | pra validar a identidade. Se o Bob consegue abrir a identidade da Alice com a chave pública da |
| 35:59 | GlobalSign, sabemos que Bob confia na GlobalSign e a GlobalSign confia na Alice então, por |
| 36:05 | consequência, o Bob pode confiar na Alice, e agora temos autenticação comprovada. |
| 36:11 | Mas porque usar AES pra encriptar a comunicação em vez de só usar RSA |
| 36:17 | direto pra fazer a encriptação de tudo? Porque RSA é computacionalmente muito caro. As chaves |
| 36:24 | são enormes, de 4096 bits, e tem esse processo ridiculamente pesado de multiplicação caractere |
| 36:30 | a caractere pelo módulo da chave de 4096 bits. Seria inviável encriptar um stream de Netflix |
| 36:37 | via RSA, por isso trocamos por AES, que sabemos que é rápido e até acelerado via hardware na CPU. |
| 36:43 | Além disso temos outro problema, forward secrecy. Digamos que no futuro alguém de fato construa um |
| 36:49 | computador quântico funcional de mais de 4000 qubits e execute o algoritmo de Shor. Agora toda |
| 36:54 | comunicação do passado que usou as mesmas chaves assimétricas estão comprometidas. As chaves são a |
| 37:01 | identidade das pessoas e elas raramente mudam. Então tudo que foi encriptado nelas poderia |
| 37:06 | ser decriptado no futuro, por isso falamos que RSA não tem forward secrecy. |
| 37:12 | Mas Diffie-Hellman tem, porque a idéia é gerar novas chaves secretas a cada sessão. Então o |
| 37:18 | que temos aqui? E se usarmos RSA pra gerar chaves assimétricas, certificados X.509 pra ter as chaves |
| 37:26 | assinadas por uma CA que todos confiam? Com isso podemos autenticar a identidade dos participantes. |
| 37:32 | Daí podemos usar Diffie-Hellman pra trocar segredos que nunca trafegam. E finalmente podemos |
| 37:37 | usar AES pra fechar uma conexão segura e rápida. Em resumo bem resumido é isso que é um TLS ou |
| 37:44 | o que chamamos de SSL faz! E em outras combinações é o que um SSH também faz. |
| 37:50 | No caso do SSH você usa a ferramenta ssh-keygen pra gerar o par de chaves, |
| 37:56 | daí copia sua chave pública pro arquivo authorized_keys no servidor. Agora quando |
| 38:01 | tentar se conectar no servidor ele pode autenticar sua identidade. No caso mais simples não precisa |
| 38:06 | de um CA porque se a chave pública tá no servidor, alguém de confiança teve que colocar lá e isso já |
| 38:13 | é suficiente pra servir de autenticação. É como funciona no caso do GitHub também. Tanto no caso de TLS quanto SSH existe uma etapa que é a negociação dos ciphers. Eles não usam só |
| 38:25 | um cipher. Ah é, acho que eu não disse mas chamamos esses algoritmos de criptografia de |
| 38:31 | ciphers. Quando eles fazem o handshake o servidor envia uma lista de combinações de ciphers que ele |
| 38:37 | suporta, o navegador vê sua própria lista e eles escolhem uma combinação que ambos suportam. Isso |
| 38:43 | é um Cipher Suite. As combinações da lista são como esse TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384. |
| 38:54 | Puta monte de letrinha, mas agora acho que você já reconhece quase tudo. TLS é o protocolo. ECDHE |
| 39:00 | é Elliptic Curve Diffie-Hellman Ephemeral. Diffie-Hellman você já sabe, Elliptic Curve |
| 39:05 | ou falar já já. RSA é o sistema autenticação com chaves assimétricas que acabei de falar. AES 256 |
| 39:12 | é como a encriptação vai ser feita. GCM é o modo de execução do AES, chamado Galois Counter Mode, que também vou explicar já já. Finalmente SHA384 é o algoritmo de hashing HMAC que vai ser usado pra |
| 39:22 | verificação de integridade dos dados. Sobre GCM, você precisa entender que todo |
| 39:27 | algoritmo de encriptação de chave simétrica tem customizações pra serem mais flexíveis. |
| 39:33 | Por exemplo, um erro ao usar TripleDES é usar ele em modo ECB, que é o padrão. Nesse modo o |
| 39:39 | initialization vector, ou IV é nulo e se eu rodar a mesma mensagem pelo TripleDES ele |
| 39:44 | sempre vai gerar o mesmo valor encriptado. Mas adicionando um IV na operação do primeiro bloco |
| 39:49 | vai acontecer uma avalanche porque o bloco seguinte usa o resultado do bloco anterior, |
| 39:55 | como eu já expliquei no ataque de extensão de comprimento. Daí o resultado encriptado vai ser |
| 40:00 | bem diferente pra toda vez que você mudar o IV. É meio como a idéia de um salt, quando geramos |
| 40:06 | hashes pra gravar no banco, como também expliquei antes. Usar o IV é o modo chamado de CBC, |
| 40:12 | que é o recomendado no TripleDES. O AES também tem modo CBC. Sem entrar em muitos |
| 40:18 | detalhes o modo CBC tem esse requisito de um bloco anterior influenciar o bloco seguinte, em cadeia. |
| 40:25 | Por isso não tem como rodar em paralelo. Já o modo GCM é um tipo de contador e a característica é que |
| 40:31 | você pode encriptar blocos em paralelo, tornando o processo mais rápido. Além disso, o GCM tem características que tornam a encriptação mais segura também, daí você pode usar uma chave |
| 40:42 | menor do que em CBC, ou seja, em vez de usar chaves de 256-bits, pode usar uma de 128 e ter |
| 40:50 | relativamente o mesmo nível de segurança. Você já deve ter entendido que quanto menor a chave, menos |
| 40:56 | trabalho os algoritmos têm, são ordens de grandeza menos multiplicações. E em comunicação via TLS em |
| 41:02 | sites seguros, você gostaria que a comunicação fosse segura mas também fosse rápida, por isso |
| 41:07 | existe a opção de escolher AES GCM. Agora, EC ou Elliptic Curve. Em resumo resumido, |
| 41:15 | tamos falando literalmente de uma função que gera um gráfico parecido com este aqui do lado, |
| 41:20 | isso é uma curva elíptica. Tem bastante matemática pra entender as propriedades dessa curva, mas |
| 41:26 | uma importante é que se escolhermos dois pontos quaisquer dessa curva e traçarmos uma linha reta, |
| 41:31 | ela sempre vai interseccionar num terceiro ponto. Um dos pontos da linha que escolhemos vai ser a |
| 41:37 | chave privada e o ponto de interseção vai ser a chave pública. Sim, curvas elípticas são usados |
| 41:43 | pra gerar chaves assimétricas. Lembram que no caso de RSA o processo começa escolhendo dois |
| 41:49 | números primos gigantes e depois faz várias derivações pra chegar na chave privada? Aqui, |
| 41:55 | de forma simplificada, é traçar uma linha em cima do gráfico e temos nossas chaves. A propriedade importante é que as chaves geradas através de curva elíptica são mais |
| 42:05 | resistentes a tentativas de fatorar os primos com Quadratic Siege e General Number Field Sieve. |
| 42:11 | Elas são técnicas matemáticas pra tentar fatorar o numerozão nos primos correspondentes, sem recorrer |
| 42:17 | só a força bruta. Mesmo sem computador quântico e Shor existem outras tentativas matemáticas |
| 42:23 | pra tentar chegar na fatoração de primos. Não é prático e muito menos rápido, então acalmem-se, |
| 42:29 | seus porns e nudes ainda estão seguros. A geração de chaves via curvas elípticas cria chaves ainda |
| 42:35 | mais fortes do que o RSA normal consegue criar, graças à essas propriedades da curva. |
| 42:41 | Portanto ECDHE, o que é isso? Elliptic Curve Diffie Hellman Ephemeral. Lembram que eu falei |
| 42:48 | que só Diffie Hellman sozinho pode sofrer ataque de man-in-the-middle? E precisamos usar algo como |
| 42:53 | STS? No caso, a parte do Elliptic Curve substitui a necessidade de STS e providencia autenticação |
| 43:01 | ao Diffie Hellman. E lembram como eu falei que as chaves do RSA sofrem de forward secrecy porque as |
| 43:07 | chaves nunca mudam? Por isso tem o Ephemeral no nome desse, porque eles geram chaves assimétrica |
| 43:13 | pra cada sessão e depois elas são descartadas. Assim, mesmo se um dia alguém quebrar as chaves |
| 43:19 | que estou usando na minha sessão de Pornhub agora, o atacante não vai conseguir quebrar as sessões |
| 43:25 | do passado, que usaram chaves efêmeras. Agora combinamos Diffie Hellman com chaves efêmeras |
| 43:31 | via curva elíptica pra trocar segredos e podemos combinar com RSA pra garantir a identidade. E |
| 43:37 | continuamos usando AES pra encriptar os dados em si com as chaves trocadas com |
| 43:44 | Diffie Hellman. Agora sim, esse é mais ou menos o TLS, que você pode conhecer como SSL que todo |
| 43:50 | site e aplicativo usa hoje em dia. Chaves geradas através de curvas elípticas estão |
| 43:55 | sendo adotadas cada vez mais. É isso que é usado no algoritmo do Bitcoin pra gerar suas chaves. A |
| 44:01 | Apple usa no iMessage. Empresas como DNSCurve usam no DNS. E como vimos na cipher suite de |
| 44:09 | navegadores, eles também suportam. E mesmo em SSH hoje recomenda-se criar chaves com ed25519. Aliás |
| 44:17 | ele tem esse nome porque usa a curva 25519 que é uma curva elíptica. Se você viu essa recomendação |
| 44:22 | em algum tutorial talvez não tenha entendido até hoje porque mandam usar ed25519 em vez de RSA, |
| 44:28 | e porque o tamanho da chave é menor de uns 256 bits em vez dos 4096 bits que se recomenda pra |
| 44:34 | RSA. Agora você já deve ter entendido. Como falei antes, as chaves de curva elíptica são mais fortes, e por isso podem ser menores. E sendo menor você também já sabe: muito menos |
| 44:44 | multiplicações, o que significa uma encriptação mais rápida. Com o aumento na adoção na maioria |
| 44:50 | dos lugares, hoje em dia, se for gerar chaves com ssh-keygen, escolha ed25519 em vez de RSA. O |
| 44:57 | GitHub, por exemplo, suporta. Você vai notar como a chave pública que ele gera é bem mais compacta, |
| 45:02 | justamente porque a chave é menor. E agora você consegue entender todas as letrinhas |
| 45:08 | que aparecem nos cipher suites dos navegadores. De qualquer forma, mesmo curvas elípticas ainda |
| 45:14 | não são resistentes a um futuro ataque com Shor em computadores quânticos. Mas como eu |
| 45:20 | expliquei no episódio anterior ainda estamos bem longe disso. E existem vários algoritmos novos |
| 45:25 | na categoria de pós-quânticos que não dependem da dificuldade de fatorar primos. |
| 45:31 | Mesmo Curvas Elípticas continuam sendo suscetíveis a ataques de um possível futuro |
| 45:36 | computador quântico também. Mas existe uma evolução disso que é o Supersingular Isogeny Graph. Parafraseando da Wikipedia, gráficos de isogenia supersingulares são |
| 45:48 | classes de expansores de gráficos que aparecem em computação da teoria dos números e foram aplicados |
| 45:54 | em criptografia de curva elíptica. Os vértices representam curvas elípticas supersingulares |
| 46:00 | sobre campos finitos e as bordas representam isogenias entre curvas... Pronto, fodeu, |
| 46:07 | eu não consigo nem ter um insight de como isso funciona. Mas, uma das propriedades importantes é |
| 46:13 | que ele consegue ser mais seguro ainda com chaves ainda menores e é considerado pós-quântico. Quer |
| 46:19 | dizer que é resistente aos algoritmos quânticos. Repetindo o que eu disse no episódio anterior, o |
| 46:26 | mundo da criptografia não pretende ficar de braços cruzados esperando o computador quântico chegar. |
| 46:33 | Povo tá antecipado. Em criptografia você sempre precisa estar um passo à frente. E com isso fechamos o tema de conceitos básicos de criptografia. E eu não estou brincando, |
| 46:43 | tudo que eu disse até aqui é o básico do básico de criptografia, especialmente se você tem interesse |
| 46:50 | em criptanálise. Um dos campos da computação onde matemática é absoluto é criptografia. Mas |
| 46:57 | mesmo sem saber a matemática toda, a intenção foi expor vocês a todos esses jargões e como |
| 47:03 | eles se relacionam uns com os outros. Espero que agora você tenham uma noção melhor de onde |
| 47:09 | cada jargão é usado, o que significam, quais os pontos fortes e fracos, e também porque |
| 47:14 | você não deve sair tentando criar soluções que envolvem criptografia. Os ataques que eu falei |
| 47:20 | aqui são todos "simples" pros especialistas e hackers. White hats e Black hats estão usando |
| 47:26 | isso e coisas mais avançadas no arsenal deles. Novamente, eu tenho certeza que todo mundo ainda |
| 47:31 | tem um monte de dúvidas, mas não deixem de discutir nos comentários abaixo. Se curtiram |
| 47:36 | o vídeo mandem um joinha, compartilhem com seus amigos, assinem o canal e não deixem de clicar no sininho pra não perder os próximos episódios. A gente se vê, até mais. |
