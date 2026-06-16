# Entendendo Como ChatGPT Funciona - Rodando sua Própria IA

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=O68y0yRZL1Y
- **Duração:** 1:30:08
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Este é um episódio que eu tava tentando evitar fazer. Primeiro porque acho que vai |
| 0:05 | ser um dos temas onde parte do video vai acabar ficando obsoleto meio rápido, já que as tecnologias de IA estão acelerando e mudando bastante ainda. Segundo, porque eu mesmo nunca |
| 0:15 | trabalhei com IA. Maioria das coisas que explico neste canal, já me envolvi em projetos reais |
| 0:20 | de alguma forma, por isso não é só teoria, é experiência. Mas IA, eu brinquei, mas |
| 0:25 | nunca trabalhei nem fiz pesquisa acadêmica, nem nada disso, por isso nunca me senti adequado pra explicar. |
| 0:31 | Mas considerando que quase a totalidade de videos feitos sobre o assunto hoje são de pessoas com menos conhecimento ainda, fazendo afirmações cada vez mais absurdas; até |
| 0:41 | eu certamente consigo fazer muito melhor. Pra variar, os oportunistas já saíram lançando cursos e afins. No fim do video vou explicar porque todos são uma droga e você deve evitar. |
| 0:52 | Também vou explicar de novo porque ela não vai substituir programadores. Hoje vou explicar o que de fato é um ChatGPT e onde estamos quando se fala em IA. Então vamos lá. |
| 1:07 | (...) Esses dias resolvi brincar de IA, o objetivo era ter o meu próprio ChatGPT, rodando offline, |
| 1:14 | totalmente local, na minha máquina, sem conectar com nenhuma API de terceiros como da OpenAI. |
| 1:20 | Isso ficou fácil porque agora existem diversos esforços da comunidade de código aberto, em particular projetos de Open LLM, ou Large Language Models, que é a categoria de IA |
| 1:30 | onde se encontra um GPT. Esses esforços ganharam força quando a Meta decidiu abrir seu modelo Llama em fevereiro |
| 1:37 | de 2023. As big tech tem diversos modelos prontos, cada um pra algum uso específico, |
| 1:43 | desde respostas gerais ou mais focados em código e assuntos específicos. Por exemplo, a OpenAI tem os modelos GPT 3.5, GPT 4, Codex. A Microsoft tem o Zero, ou Megatron em conjunto |
| 1:54 | com a NVIDIA. O Google tem modelos como o BERT, Palm, LaMDA, Minerva e outros. |
| 1:59 | A Meta, de novo, tem o OPT, Galactica, METALM, LLaMA. Alguns desses modelos são citados |
| 2:05 | em papers mas são fechados, como o novo BARD do Google ou o próprio GPT 4 da OpenAI. Mas |
| 2:11 | o lançamento do LLaMA ao público foi um evento importante e a Meta parece que liberou vários outros como o OPT e Galactica. A primeira parte do video de hoje vai ser entender o |
| 2:20 | que diabos são esses modelos. Isso foi em fevereiro, este video tá saindo em junho, só 4 meses. E de lá pra cá a |
| 2:28 | comunidade usou o LLaMA pra criar derivados mais otimizados e menores pra rodar em computadores |
| 2:34 | menos parrudos. Surgiram diversas variantes como Alpaca, Vicuna, GPT4ALL, Koala, Dolly |
| 2:40 | e dezenas de outros. Literalmente dezenas. O site HuggingFace, que é um repositório de modelos e ferramentas pra inteligência artificial, tem listado uns 200 modelos diferentes. |
| 2:50 | O que dá pra fazer com esses modelos abertos? Deixa eu mostrar. Eu queria um ChatGPT pessoal, offline, que ninguém sabe o que tô conversando com ele, sem filtros, sem controle, sem nada. |
| 3:01 | Só eu e a ferramenta. Existem vários projetos abertos que implementam interface web similar |
| 3:06 | ao ChatGPT, onde posso digitar perguntas, ver as respostas da IA, e ficar conversando |
| 3:11 | com ela, sem precisar estar conectado na internet. Olha só esse exemplo. |
| 4:09 | Se assistiram meu episódio sobre games em máquina virtual, sabem que tenho uma máquina que alguns consideram "parruda", um AMD 5950X de 16 cores, 32 threads, rodando a uns 4 gigahertz |
| 4:21 | por core. Mais 64 gigabytes de RAM DDR4. Uma GPU NVIDIA RTX 3090 com 24 gigabytes de memória |
| 4:29 | GDDR5. Fora meu NAS Synology de 60 terabytes, conectado em rede 10 gigabits. Meus testes |
| 4:35 | foram feitos numa máquina virtual QEMU rodando Ubuntu normal, com passthrough de PCI pra |
| 4:40 | ter acesso direto à GPU NVIDIA. Todos os detalhes sobre essa QEMU eu mostrei no video de Games em Máquina Virtual. |
| 4:47 | Sem nenhum motivo em particular, escolhi o projeto aberto "text-generation-webui" que |
| 4:53 | é uma aplicação web escrita em Python. Ela simula a interface web de chat do ChatGPT. |
| 4:58 | Por baixo, carrega bibliotecas como bitsandbytes, pytorch e outros que vou explicar depois. |
| 5:04 | Daí podemos baixar modelos e fazer ele carregar um deles. No caso estou rodando Vicuna 30b quantizado. De novo, já vou explicar o que isso significa. Dizem que tem qualidade parecida |
| 5:14 | com GPT 4 mas pra mim pareceu mais um GPT 3. As respostas que consigo no GPT 4 ainda |
| 5:19 | são mais completas do que nesse Vicuna. Mas mesmo assim é impressionante. Estão vendo? Estou conversando de boas. E não está |
| 5:27 | conectando com nenhum serviço online de ninguém, nem da Microsoft, nem da OpenAI, nem do Google. |
| 5:33 | Tudo rodando offline, local, dentro da minha máquina virtual. Vou repetir, porque quando |
| 5:38 | postei sobre isso no Instagram, muita gente ficou confusa. Sim: dá pra rodar um programa similar ao serviço de ChatGPT da OpenAI num computador normal. E não se trata de uma |
| 5:49 | demonstração hello world, realmente funciona. Não precisa de um monte de servidores parrudos |
| 5:54 | pra conseguir isso. Ué, mas eu achava que precisava ter o tamanho de uma Microsoft ou Google pra fazer isso, o que mudou? |
| 6:02 | A exigência de hardware depende da complexidade do modelo. Como falei, estou usando Vicuna |
| 6:07 | de 30 bilhões de parâmetros, mas existem modelos menores, como o próprio Vicuna de 7 bilhões de parâmetros, ou a Ada da Microsoft, de só 350 milhões. Se o modelo for pequeno |
| 6:19 | o suficiente, é possível até rodar num bom smartphone Android ou um Raspberry Pi com um upgrade de RAM. O tamanho do modelo é um dos fatores que pode afetar a qualidade |
| 6:28 | das respostas, portanto quanto menor o modelo, mais simples seriam as respostas. Simplifiquei |
| 6:34 | sobre "tamanho", guardem essa informação que já vou explicar mais. Deixa recapitular um pouco. O que diabos é isso de modelo? Honestamente, eu mesmo não |
| 6:42 | sei dizer em todos os detalhes, pra isso precisaria ter estudo e treinamento em inteligência |
| 6:48 | artificial, em particular redes neurais. Muita gente aprendeu isso em optativas ou iniciação científica na faculdade de ciências da computação. Não vou tentar dar explicação acadêmica, |
| 6:59 | mas sim dar uma intuição pra maioria de vocês conseguirem ter uma imagem na cabeça. Acadêmicos, sejam compreensivos, e se quiserem complementar, sintam-se a vontade nos comentários |
| 7:07 | abaixo. Pense em redes neurais como uma simulação do aprendizado que acontece no nosso cérebro. |
| 7:13 | Sabemos que temos neurônios. Aprendizado e memória acontecem quando temos sinapses, conexões desses neurônios, ou comunicação, ou melhor "ativação de um neurônio", que |
| 7:23 | é como se ele escolhesse um caminho dentre muitos. Um neurônio pode ter milhares de conexões, dizem que umas 7 mil. De novo, explicação grosseira. Mas é mais ou menos |
| 7:32 | isso que temos em redes neurais. Assista os videos do canal 3Blue1Brown sobre redes neurais |
| 7:38 | pra entender em mais detalhes. No caso específico de texto, poderíamos pensar que a forma de fazer computadores aprenderem |
| 7:44 | a interpretar e gerar texto seria cadastrando regras gramaticais, ortográficas, vocabulário, |
| 7:50 | dicionários, e assim ele conseguiria construir frases gramaticalmente corretas. Mais ou menos |
| 7:55 | como você pensa que é o jeito certo de aprender uma língua nova como inglês ou francês num curso qualquer. Esse parece ser o jeito intuitivo, certo? |
| 8:04 | Mas se assistiu meu video de Como eu Aprendi Inglês e a minha live com o Matt sobre aprender |
| 8:09 | japonês, já sabemos que não é assim. Não se trata de decorar dúzias de regras. Nem |
| 8:14 | no aprendizado em geral, nem em inteligência artificial. Não existem "regras" como um monte de "ifs". Pense por dois segundos: quando foi a última vez que você escreveu um texto |
| 8:24 | 100% gramaticalmente e formalmente correto? Concorda que um texto assim seria super estranho? |
| 8:29 | Sem gírias, sem maneirismos, sem coloquialismos, com palavras consideradas rebuscadas. Exatamente |
| 8:35 | o que associamos com um robô falando. Já falei isso nesses outros videos, mas vou repetir: como você aprendeu português? Foi |
| 8:42 | lendo um livro do tamanho da Bíblia, lotado de regras gramaticais? Quando tinha 1 ou 2 |
| 8:48 | anos de idade? Como um bebê que nasceu nos Estados Unidos aprendeu inglês? Como um bebê que nasceu na China aprendeu chinês? Nenhum deles usou nenhum livro, nenhum curso, nenhuma |
| 8:59 | regra. Simplesmente passaram um tempão ouvindo os pais e pessoas ao redor e começaram a |
| 9:04 | repetir o que ouviam. Bem errado no começo. Todo mundo vai dando feedback. Quando o bebê tinha uma intenção, sei lá, dizer que está |
| 9:11 | com fome. Ele tentava juntar palavras que já tinha ouvido antes e que parecia descrever o que queria. Se os adultos ao redor dessem comida, é o feedback que o que falou parece |
| 9:22 | que faz sentido. E assim ele vai associando as combinações de palavras com comportamentos. Vai refinando seu aprendizado. Fazendo novas sinapses, novas conexões. Pouco a pouco melhorando |
| 9:32 | a comunicação e se fazendo entender melhor.  A grosso modo é como seria o que chamamos de treinamento supervisionado, no mundo de |
| 9:40 | inteligência artificial. Nós não programamos regras gramaticais nem cadastramos palavras |
| 9:45 | num banco de dados manualmente e ficamos fazendo "ifs" pra montar frases. Em vez disso começamos |
| 9:51 | com um corpo de dados gigante. Por exemplo, todos os artigos da Wikipedia, todos os códigos |
| 9:57 | abertos disponíveis no GitHub, todos os papers acadêmicos disponíveis publicamente, todos |
| 10:02 | os livros digitalizados num Google Books. Bastante texto. Dezenas ou centenas de gigabytes |
| 10:08 | de texto puro. Pra entender isso, deixa eu fazer uma tangente e explicar um conceito relacionado que não |
| 10:14 | é, em si só, inteligência artificial, mas faz parte da matéria. Na faculdade de ciência |
| 10:19 | da computação, se aprende sobre processos estocásticos, que estuda aleatoriedade, probabilidades, |
| 10:25 | ou melhor, a evolução de um sistema ou fenômeno ao longo do tempo de forma probabilística. |
| 10:31 | Ele descreve o comportamento de um sistema ou quantidades que mudam aleatoriamente ao longo do tempo. Em particular quero falar de Cadeias de Markov. |
| 10:39 | Não estou falando que o ChatGPT não é uma Cadeia de Markov, é só pra ilustrar um ponto. Cadeias de Markov é uma das formas de representar e analisar sequências de eventos, ou estados, |
| 10:50 | onde a probabilidade de transicionar de um estado pra outro depende somente do estado |
| 10:56 | atual, é um sistema sem memória ou backtracking, sem considerar a sequência de todos os estados |
| 11:02 | anteriores, só o último. Em resumo é um conjunto de estados e probabilidades de transição. |
| 11:07 | Se pareceu grego, vamos ver um exemplo prático. Digamos que em vez de ter gigabytes de textos como descrevi antes, nosso corpo de treinamento |
| 11:15 | sejam só 3 frases em português: "Eu gosto de comer maçãs.", daí "Ela gosta de jogar |
| 11:20 | tênis." e finalmente "Ele prefere ler livros.". Podemos construir um modelo baseado nessas |
| 11:25 | frases, onde os estados são palavras, ou tokens, e as transições entre estados representam |
| 11:31 | a probabilidade de mover de um token pra outro. Vamos construir esse modelo simplificado. |
| 11:37 | Os tais estados podem ser só as palavras, tokenizadas ou quebradas a partir dessas frases, daí teríamos essa lista de palavras, "Eu", "gosto", "de" etc.  As transições são as probabilidades. Esses são exemplos, mas digamos que a transição |
| 11:42 | do token, ou estado "Eu" pro estado "gosto" é probabilidade 1, ou seja, 100%. Mas a transição |
| 11:48 | do estado "de" pra "comer" é 0.5 ou 50% porque poderia ser pra "jogar" que é 0.5 também. |
| 11:55 | Pra ficar claro, na primeira frase temos "de comer", mas na segunda frase tempos "de jogar", |
| 12:01 | por isso a partir do token "de" temos duas possibilidades, 50% de chance pra cada. |
| 12:06 | Como temos poucas frases de treino, as transições são quase 100% de uma palavra pra outra, |
| 12:12 | porque esse modelo só conhece 3 frases. Num treinamento de verdade com gigabytes de textos, |
| 12:17 | teríamos trilhões de possibilidades diferentes e probabilidades pequenas e fracionadas, como |
| 12:23 | 0.001234 bla bla.  Finalmente, digamos que começamos a digitar um texto e queremos que esse modelo continue |
| 12:29 | completando a frase pra gente. Podemos usar o modelo da cadeia de Markov pra prever o |
| 12:35 | que seria a palavra mais provável baseado nas probabilidades de transição que vimos na lista anterior. Por exemplo, começo digitando "Eu" e a probabilidade da próxima palavra |
| 12:45 | ser "gosto" é 100%, então é isso que ele dá de previsão. Se digitar "Ele", a probabilidade |
| 12:50 | segundo a lista é 100% pra "prefere". Por causa de smartphones, todo mundo já viu isso em ação de verdade. É a funcionalidade |
| 12:58 | de auto-correção que tem em todo teclado. Olhe neste exemplo, começo digitando uma palavra e o teclado sozinho vai sugerindo a próxima palavra, e podemos só aceitar |
| 13:07 | a sugestão. E ele vai sozinho completando a frase. Claro, se ficar fazendo só assim, |
| 13:12 | a frase vai ficando meio sem sentido nenhum, mas ele consegue gerar uma frase que mais ou menos parece um humano que escreveu, não acha? |
| 13:20 | Vou repetir: isso é uma explicação simplificada, tem várias outras técnicas em cima de cadeias |
| 13:25 | de Markov, mesmo pra um tecladinho simples de iOS ou Android. Mas em linhas gerais, pense |
| 13:31 | que em vez de 3 frases, o modelo desses teclados foi pré-treinado com milhares de frases. |
| 13:36 | O modelo é essa lista de combinações de palavras e as probabilidade da próxima palavra, |
| 13:41 | dada uma palavra anterior. Essas probabilidades é o que chamamos de "pesos". E mais importante: |
| 13:47 | em nenhum momento usamos quaisquer regras hard-coded de gramática ou ortografia ou |
| 13:53 | ifs ou templates. Ele vai completando a frase puramente usando esses pesos, aprendidos no |
| 13:59 | treinamento, nada mais. Agora vamos voltar pro ChatGPT ou pra minha versão local do text-generation com Vicuna. |
| 14:06 | Vocês nunca acharam estranho que as respostas sempre demoram e ele vai escrevendo uma palavra de cada vez? Alguns poderiam achar que é só uma animação arbitrária pra fazer parecer |
| 14:16 | que o ChatGPT é uma pessoa digitando. Mas deixa eu rodar uma versão fora da interface |
| 14:21 | Web, na linha de comando mesmo. Prestem atenção. |
| 14:34 | Pra ficar mais claro, vou colocar do lado o monitoramento da minha GPU, a ferramenta da nvidia chamado "nvidia-smi" que faz o monitoramento dos recursos sendo usados na GPU. Notem que |
| 14:45 | durante a composição da resposta, a GPU está em uso constante, processando alguma |
| 14:50 | coisa, sem parar. Não sei porque usa só 50% do processamento disponível, mas de qualquer |
| 14:55 | forma, a resposta não é instantânea. Não é uma animação feita só pra fazer graça, é que ele demora isso mesmo palavra a palavra. Cada palavra nova que vai aparecendo está |
| 15:05 | gastando processamento da GPU. Se levou 5 segundos pra dar a resposta, foi 5 segundos |
| 15:10 | que a minha GPU ficou processando sem parar. Conseguem ver as similaridades entre o auto-corretor do seu tecladinho de celular e o processo |
| 15:18 | de resposta do ChatGPT? Internamente ele está fazendo algo similar a procurar probabilidades |
| 15:24 | na cadeia de Markov. Mas claro, o modelo de GPT, LLaMA, Vicuna, Bard, e outros, é mais |
| 15:30 | complicado que um mero modelo de Markov. Vamos entender. Quando as primeiras notícias anunciando o ChatGPT saíram, gerou muita confusão, que |
| 15:39 | persiste até hoje. Por exemplo, quando o ChatGPT 4 foi anunciado, eles mencionam, "uau, |
| 15:45 | o ChatGPT 3.5 tinha 175 bilhões de parâmetros mas o ChatGPT 4 tem incríveis 100 a 170 TRILHÕES |
| 15:52 | de parâmetros". A única coisa que os jornalistas e vocês entenderam foi "uau, bilhões pra |
| 15:58 | trilhões de ... whatever ... trilhões é absurdamente maior que bilhões, então o |
| 16:04 | GPT novo é milhões de vezes melhor e o GPT 5 vai ser mais milhões de vezes melhor". |
| 16:10 | E é assim que todo mundo mente e se auto-engana com números, sem saber o que significa. |
| 16:16 | Esse meu Vicuna, rodando localmente na minha máquina, tem meros 30 bilhões de parâmetros. |
| 16:21 | Puuuts, quer dizer que ele deve ser pelo menos 5 vezes pior que o ChatGPT antigo, né? Nem chega aos pés do GPT 4. Só que se olhar alguns artigos que descrevem o Vicuna menor, |
| 16:31 | o de 13 bilhões de parâmetros, muitos declaram que rodando diversos testes, os mesmos que |
| 16:36 | a própria OpenAI usa pra avaliar o GPT deles, dizem que o Vicuna 13B chega a 90% do nível |
| 16:42 | de qualidade do GPT 4 ou Google Bard. E o Vicuna, sendo derivado do LLaMA do Facebook, |
| 16:48 | nesses mesmos testes, ultrapassa o LLaMA original. Como pode isso? Antes de mais nada, o que diabos são esses tais parâmetros? No contexto de machine learning, |
| 16:58 | parâmetros se referem aos pesos que o modelo aprende durante o processo de treinamento. De forma simplificada e grosseira, lembra a lista de probabilidades de transição de |
| 17:07 | estados da cadeia de Markov que mostrei no exemplo? Aquilo poderíamos chamar de parâmetros. |
| 17:12 | No nosso treinamento com só 3 frases, gerou um modelo de 16 parâmetros. Pense numa lista |
| 17:17 | como aquela só que bilhões de linhas. 13 bilhões ou 30 bilhões no caso do Vicuna, |
| 17:23 | ou 170 trilhões no caso do ChatGPT 4. E lembra como no exemplo, dado uma palavra, podemos ir na lista de probabilidades e ver |
| 17:31 | qual poderia ser a próxima palavra? A grosso modo, é como GPT ou Vicuna fazem. Só que |
| 17:37 | em vez de considerar só a palavra anterior e procurar a próxima, ele vê quais foram as palavras anteriores e leva todas em consideração pra tentar prever a próxima palavra. Lembra |
| 17:47 | como minha GPU fica processando sem parar enquanto monta a resposta? É isso que está fazendo: pesquisando no modelo pela próxima palavra, mas considerando parte ou todo o |
| 17:56 | texto anterior, incluindo as palavras que ele mesmo sugeriu, vai ficando cada vez mais pesado. Por isso demora. |
| 18:03 | Antes que o pessoal acadêmico me crucifique, é melhor eu me corrigir aqui. Eu repeti várias vezes "a grosso modo", "a grosso modo", porque o modelo do GPT não são probabilidades de |
| 18:12 | pares de palavras, daquele jeito bonitinho como no exemplo. Intuitivamente, poderíamos pensar que quando se quebra um texto longo, teríamos conjuntos de "palavras". Mas vamos |
| 18:22 | recordar a metáfora do bebê aprendendo? Todo mundo já deve ter percebido que um bebê não ouve um adulto falar uma palavra e sai |
| 18:29 | repetindo bonitinho igualzinho, certo? Parte da diversão é justamente ver ele falando errado no começo e ir ajustando. O bebê tenta reproduzir o que ele "acha" que ouviu. |
| 18:39 | Daí você dá o feedback negativo e ele vai tentando de outras formas, até uma hora acertar. |
| 18:44 | No mundo de machine learning e deep learning, podemos usar isso como metáfora. No treinamento ele não isola palavras, isola "patterns" de funcionalidades, ou features, do material |
| 18:54 | de treinamento.  Fora de IA, no mundo de full-text search, ou em processamento de linguagem natural, |
| 19:01 | temos ferramentas como Elasticsearch ou Apache Solr, que expliquei no episódio do Twitter. |
| 19:06 | Eles não quebram os textos indexando palavras, mas sim grams. Quem já leu a documentação |
| 19:12 | deve ter visto o termo n-gram, que são sequências de "n" itens ou tokens. Pode ser uma palavra |
| 19:18 | inteira, mas pode ser só parte de uma palavra. Uma sequência de só uma letra seria um unigram, |
| 19:23 | duas letras um bigram, três letras, trigram e assim por diante. Quando indexamos texto, é mais útil indexar n-grams do que palavras inteiras, é o que |
| 19:33 | nos permite fazer coisas como achar palavras "parecidas" ou que "soam" parecido, que tem mesmo sufixo ou mesmo prefixo, como conjugação de verbos. Mesma coisa com o teclado de auto-correção, |
| 19:44 | ele indexa n-grams. Por isso você digita a pesquisa tudo errado num Google, mas ele diz no resultado "você quis dizer X". O mundo de indexação de textos é todo baseado no |
| 19:53 | conceito de n-grams. Vale a pena estudar isso depois. Quer dizer que o tal modelo do GPT são pesos em cima de n-grams? Infelizmente também não |
| 20:02 | é assim fácil. Eu mencionei n-grams só pra explicar como podemos dividir palavras de outras formas não intuitivas. Agora, o problema com sinapses no nosso cérebro ou |
| 20:12 | redes neurais é que os pesos não são aplicados em cima de idéias discretas, como palavras ou letras ou imagens inteiras. De novo, pra entender tecnicamente como redes neurais funcionam, |
| 20:22 | procure material de universidades como do MIT, Stanford ou lugares assim, e de novo, |
| 20:27 | acadêmicos, peguem leve comigo. No fim do dia, um modelo é como se fosse um banco de dados, contendo probabilidades |
| 20:34 | ou pesos de um elemento pra outro elemento. Parecido com o exemplo da auto-correção. |
| 20:39 | Mas o principal é que não são necessariamente palavras, não são também só n-grams, pode ser qualquer tipo de pattern que foi identificado no aprendizado. Pode ser uma letra pra uma |
| 20:49 | palavra. Pode ser um bigram pra um trigram. Pode ser muitas coisas. Por exemplo, poderia ser "ef" pra "yw" probabilidade 0.01234. O que isso significa? |
| 21:01 | Isoladamente não significa absolutamente nada. Ela só vai fazer sentido dentro de uma rede de pesos. A probabilidade final é uma composição de múltiplos passos pelos |
| 21:11 | nós dessa rede. O modelo não é uma lista, provavelmente é mais como um espaço vetorial |
| 21:17 | multi-dimensional, tipo matrizes de matrizes. Eu expliquei espaços vetoriais no episódio do Twitter também. Similaridade de Cosseno, Álgebra Linear, lembram? De novo, pra visualizar, |
| 21:27 | não pense num modelo como sendo uma lista, como um array simples. Pense como um array de arrays, de arrays. Multi-dimensional. |
| 21:35 | Se multi-dimensional não é intuitivo pra vocês, pense num elemento simples, tipo uma |
| 21:40 | variável de tipo inteiro. Isso é o que chamamos de valor escalar, com zero dimensões. Representa |
| 21:46 | um único valor. Agora, um array de escalares, como um array de inteiros. Isso é vetor, |
| 21:52 | uma lista de uma única dimensão. Em seguida, em vez de escalares, se eu fizer um array de arrays, onde cada elemento do array é outro array, e esse array for unidimensional, |
| 22:02 | agora temos uma matriz, que é um retângulo, ou uma grade de valores escalares. Finalmente, e se esse array interno também tiver arrays como elementos? Agora temos um |
| 22:11 | array de arrays de arrays, tridimensional. E podemos ir adiante, esse último array também |
| 22:16 | pode ter arrays de elementos, que tem arrays de elementos, que tem arrays de elementos, aí temos matrizes multi-dimensionais ou mais corretamente, tensores de alto ordenamento |
| 22:26 | ou tensores n-dimensionais. Aliás, tudo isso que eu expliquei são tensors, sabe, do tal Tensorflow do Google? Um escalar |
| 22:35 | é um tensor de zero dimensões, um vetor é um tensor de uma dimensão, uma matriz |
| 22:40 | é um tensor de duas dimensões e acima disso é um high-order tensor ou n-dimensional tensor. |
| 22:46 | Então, voltando pro tal modelo do GPT ou Vicuna, não pense como no exemplo simples do auto-corretor, que foi somente um vetor, um array unidimensional de pesos. Pense que |
| 22:55 | esses pesos estão estruturados em tensores n-dimensionais. Todos esses conceitos que vim explicando não são a ponta do iceberg. São a raspa da ponta |
| 23:05 | do iceberg. Pode parecer que quero dizer que um ChatGPT não é mais que uma cadeia de Markov, só que maior. Não é isso, é só uma metáfora pra explicação. Deixa eu tentar |
| 23:14 | explicar qual foi a tal "revolução" que permitiu o salto de um mero auto-corretor pra um ChatGPT. Mas entenda: redes neurais e deep learning existem faz décadas. A comunidade |
| 23:25 | de ciências da computação vem fazendo descobertas e refinando as tecnologias faz muito tempo. Não foi do nada que isso apareceu. |
| 23:31 | Seguindo o exemplo do auto-corretor, deve ser fácil de perceber um dos problemas: ele só usa a palavra anterior pra tentar descobrir qual a próxima palavra. Por isso muito rapidamente |
| 23:42 | a frase fica sem sentido. Dá impressão que foi um humano que escreveu, mas um humano bem burro. É diferente de um punhado de palavras completamente aleatórias, mas as frases que |
| 23:51 | gera, são bem inúteis. Quanto maior tentar fazer a frase, pior vai ficar. Claro, o certo é que a próxima palavra leve em consideração não só a palavra anterior, |
| 24:01 | mas todas as palavras anteriores, pra manter a coerência. É isso que poderíamos chamar de backtracking ou recurrency. Isso tem que ser levado em conta durante o treinamento. |
| 24:10 | Não basta quebrar o texto em palavras e só fazer o peso da palavra seguinte. Tem que ser o peso da palavra seguinte dado as palavras anteriores. É aí que nasce coisas como RNN |
| 24:20 | ou Recurrent Neural Networks. RNNs foram desenhados pra lidar com sequências de tamanhos variados, como sentenças, dados |
| 24:28 | de séries de tempo, sinais de discurso. Eles conseguem processar inputs, como texto, um |
| 24:34 | passo de cada vez e ao mesmo tempo mantendo um estado interno escondido que mantém informações |
| 24:39 | dos passos anteriores. Ou seja, ele mantém memória durante o aprendizado. É como a |
| 24:45 | gente aprende também. Uma coisa é aprender, por exemplo, a palavra "foda". Dependendo do contexto pode significar |
| 24:51 | coisas diferentes. Pode ser que signifique "puts, que foda esse macbook novo" ou seja, |
| 24:56 | positivo. Ou pode ser "puts, que trampo foda de difícil", ou seja, negativo, e várias |
| 25:02 | outras variações. Precisamos de contexto, e contexto precisa de memória pra gerar pesos |
| 25:07 | diferentes pra contextos diferentes. Consegue imaginar o trampo de processar pensando dessa |
| 25:13 | forma? RNNs usam técnicas como BPTT ou Backpropagation Through Time, literalmente propagação reversa |
| 25:20 | através do tempo, pra computar gradientes e atualizar os parâmetros do modelo. Então |
| 25:25 | não é um processamento que você pega um texto, lê só uma vez do começo ao fim e já gera um modelo, escrito linearmente do começo ao fim. Tem que ficar voltando pra |
| 25:33 | trás no modelo pra ajustar. E já que é pra dificultar, em todo paper de IA por aí vamos esbarrar nesse termo "gradiente". Deixa eu resumir. |
| 25:42 | Gradiente se refere à derivada da loss function, função de perda, ou de custo. Puts Akita, |
| 25:48 | eu nunca vou usar Cálculo na vida, é perda de tempo. Bom, eis um pequeno exemplo. Pra |
| 25:53 | que serve derivada? Ela serve pra medir a taxa de mudança de uma função. Em resumo, a derivada nos diz como o resultado de uma função muda à medida que fazemos pequenas |
| 26:03 | modificações nos valores de entrada. Lembra de física cinemática no colegial? Fórmula pra saber o espaço ao longo do tempo? Fórmula de Velocidade ao longo do tempo? A de velocidade |
| 26:12 | é derivada da fórmula de espaço, porque velocidade é a taxa de mudança da fórmula de espaço ao longo do tempo. Aceleração é a taxa de mudança da fórmula de velocidade. |
| 26:23 | Em particular, gradientes em cálculo de múltiplas variáveis é um vetor que aponta na direção |
| 26:28 | da ascendente mais íngreme da função. Isso é super importante em otimização de algoritmos, |
| 26:34 | como gradient descent, ou descida de gradiente, que iterativamente atualiza os parâmetros |
| 26:39 | pra encontrar a função de custo mínimo. Dado que gradientes nos ajudam a entender a taxa de mudança de resultados de uma função, podemos usar pra encontrar os pontos de máxima |
| 26:48 | e mínima, pra otimização. E esse conceito é importante em otimização de machine learning. |
| 26:53 | Em Machine Learning tem um troço que chamam de "loss function" também conhecido como função de custo, que é uma função matemática que quantifica a discrepância entre resultados |
| 27:03 | previstos de um modelo com os valores de verdade. Lembrando, uma das formas de treinar é dar |
| 27:08 | um monte de dados de treinamento, daí pedir pro modelo devolver respostas a várias perguntas |
| 27:13 | e ver se as respostas estão corretas. Justamente pra calibrar o aprendizado. Lembra do bebê aprendendo a falar e olhando pra nossa cara pra ver se a gente entendeu? Tipo isso. |
| 27:22 | O objetivo do tal treinamento é ver quão bem um modelo performa determinadas tarefas. |
| 27:28 | A escolha de qual função de custo usar depende do problema que queremos resolver, como regressão, |
| 27:34 | classificação, geração de sequências. Por exemplo, em tarefas de regressão, uma função de custo popular é o MSE ou mean squared error, erro quadrado mediano, ou o |
| 27:44 | MAE que é mean absolute error, erro absoluto mediano. Em tarefas de classificação tem |
| 27:49 | custo de entropia cruzada e assim por diante. O importante é entender que treinamento não é um troço aleatório. Tem funções de métrica e controle pra calibrar e otimizar. |
| 27:59 | Durante o treinamento, os parâmetros do modelo são ajustados pra minimizar essa função de custo usando algoritmos de otimização como o "gradient descent". Agora vocês entendem |
| 28:09 | uma das formas que cálculo influencia a qualidade do treinamento de um modelo de rede neural. |
| 28:15 | Pra hoje, pense em rede neural como uma caixa preta, que nem uma função que você programa na sua linguagem de programação. Ela tem variáveis de entrada e algum retorno. A entrada |
| 28:24 | seria as tais toneladas de textos pro treinamento. Daí no meio, nessa caixa preta, esses dados |
| 28:29 | são processados de alguma forma, e o retorno vai ser o tal modelo multi-dimensional. |
| 28:35 | Essa etapa no meio é o processamento dos textos e materiais de treinamento que passamos. Processos como tokenização que é quebrar o texto em listas de sequências de palavras. |
| 28:44 | São uma série de transformações pra massagear esses dados em diversas camadas escondidas. |
| 28:50 | Essas transformações envolvem cálculos, por exemplo, soma ponderada. Cada neurônio de uma camada escondida recebe inputs de uma camada anterior. A cada input é assinalado |
| 29:00 | um peso. O neurônio computa a soma ponderada dessas entradas, onde os pesos determinam |
| 29:06 | a significância da contribuição de cada input pra saída do neurônio. |
| 29:11 | Daí a soma ponderada pode ser passada pra uma função de ativação, que introduz não-linearidade |
| 29:17 | e determina a saída da função. Não linearidade e sistemas complexos é um assunto gigantesco, |
| 29:23 | nem vou tentar explicar. Mas pra ter intuição pense assim: você tá acostumado a pensar em sistemas lineares. Por exemplo, se 1 litro de gasolina dá pra andar 15 quilômetros, |
| 29:32 | então 10 litros de gasolina vai dar 150 quilômetros. Mas não-linearidade é que nem tentar prever |
| 29:37 | o tempo.  Só porque temos 80% de humidade no ar e no passado vimos que isso indicava uma chuva |
| 29:43 | de, sei lá, 20 milímetros. Não quer dizer que se eu medir hoje 80% vai dar os mesmos 20 milímetros. Pode ser 40. Pode ser zero. Tem uma rede de outras variáveis, algumas |
| 29:54 | mensuráveis, algumas desconhecidas, uma influenciando a outra. Variáveis minúsculas podem amplificar |
| 30:00 | resultados completamente inesperados. É o famoso caso da Borboleta de Lorenz. Aquela história que uma borboleta bate as asas no |
| 30:08 | Brasil e tem um tsunami no Japão. Não foi a borboleta que causou o tsunami, não é |
| 30:13 | linear, não tem causalidade direta. Mas quer dizer que essa minúscula contribuição, somado a milhares de outras, "pode" ter causado o tsunami. |
| 30:22 | Depois parem pra ler sobre Teoria do Caos, é fascinante, e o mundo real é cheio de efeitos não-lineares. E levamos isso em conta em redes neurais. Nosso cérebro tem |
| 30:31 | aprendizado não-linear, e é o que tentamos simular com redes neurais. Agora, Deep Learning, |
| 30:37 | como o próprio nome diz é aprendizado profundo, e profundidade se refere a várias camadas de aprendizado. Aquela função caixa preta que eu mencionei? Imagine várias delas em |
| 30:47 | série, uma chamando a outra, várias camadas de profundidade. Lógico, explicação simplificada, |
| 30:52 | mas só pra dar uma noção. Enfim, a parte importante é que processar texto em deep learning usando técnicas como |
| 30:57 | RNN e BPTT seria absurdamente caro, pra manter toda a memória e fazer todo esse backtracking |
| 31:04 | na força bruta. É aí que entra o famoso paper do Google, "Attention is All You Need". |
| 31:10 | Literalmente "Atenção é Tudo que Você Precisa", publicado por Vaswani e equipe em 2017. É o paper que introduz a arquitetura de Transformers, os famosos transformadores |
| 31:20 | que permitiram esta geração de LLMs como GPT. Em pouquíssimas palavras, ele introduz o mecanismo de self-attention, ou auto-atenção, |
| 31:29 | também conhecido como atenção escalada de produto escalar. Eu expliquei produto escalar no contexto de espaços vetoriais no episódio do Twitter. Não vou explicar de novo. Mas |
| 31:37 | esse mecanismo permite o modelo pesar a importância de diferentes posições na sequência de |
| 31:43 | entrada, possibilitando capturar efetivamente as dependências longas. Eu sei, é difícil de entender isso, e também de explicar. Mas lembra como RNN precisa manter um estado em |
| 31:52 | memória pra lembrar o contexto? Self-attention é uma otimização disso. Em vez de ser recurrent neural network, ele passa a poder usar feed forward neural network. |
| 32:03 | Da forma como eu entendo, em vez de um processo onde você dá um passo pra trás antes de poder dar um passo pra frente, agora é só passos pra frente, feed forward. O que possibilita |
| 32:13 | isso é o tal mecanismo de auto-atenção. Elimina a necessidade de recorrência ou convolução. |
| 32:19 | E ainda permite paralelizar o processamento. Antes, como o passo seguinte dependia do passo |
| 32:24 | anterior, tinha que ser feito em série, em sequência linear. Parte da dificuldade de conseguir rodar coisas em paralelo é eliminar as dependências que amarram o passo seguinte |
| 32:34 | com o passo anterior. Isso vale não só pra IA mas qualquer coisa. Tornando o processo feed forward, evitando convolução, podemos paralelizar o processamento. |
| 32:43 | O que levaria, chutando, um ano pra treinar, poderia ser feito em um mês. O importante |
| 32:49 | é entender que essa arquitetura de transformers é uma otimização massiva. É mais ou menos |
| 32:54 | o tipo de impacto que você vê num desenvolvimento web comum quando coloca um índice numa tabela |
| 33:00 | gigante, ou quando coloca um cache na frente do banco de dados e ganha 5x ou 10x a performance. |
| 33:06 | Independente de como funciona no detalhe, o importante é entender que foi um salto grande.  Toda hora eu fico falando que os acadêmicos vão me matar vendo essas minhas explicações |
| 33:15 | grosseiras, mas eu mesmo fico doído de ficar toda hora falando "a grosso modo", "simplificando", |
| 33:21 | "em metáfora", porque cada parágrafo que falei até agora são dúzias de papers e formalidades matemáticas. Estou tentando trazer um pouco desse vocabulário, pra vocês |
| 33:30 | entenderem que não é um chute do nada, mas também reduzir em poucas palavras que ajudem a dar uma intuição. Pra maioria de nós, os detalhezinhos não importam tanto. Tem |
| 33:39 | mais valor ter a noção desse processo, em linhas gerais, pra entender que não é mágica. Principalmente: qual o limite dessa mágica. |
| 33:47 | Mas com tudo isso que falei, vamos tentar entender o que é o ChatGPT então. Como é um projeto proprietário, fechado e secreto da OpenAI, temos que acreditar nas informações |
| 33:56 | que eles disponibilizaram. Então sempre leiam isso com vários quilos de sal. Isso dito, |
| 34:02 | parece que o treinamento foi baseado num corpo de aproximadamente 570 gigabytes de texto. Quais textos exatamente? Não sabemos, mas eles mencionam Wikipedia, artigos de pesquisa |
| 34:11 | e papers, websites e outras formas de conteúdo escrito na web, com um limite até 2021. Isso |
| 34:17 | é arbitrário. Pessoalmente, achei pouco texto, eu teria chutado mais. Mas 570 gigabytes só de texto |
| 34:23 | puro é bastante coisa na real. Por exemplo, a Wikipedia inteira dá um total de 21 gigabytes, |
| 34:28 | e isso eu acho que é contando com o HTML que monta as páginas. Se filtrar e limpar só os textos puros vai ser bem menos. Mas digamos que seja 21 gigabytes. Precisaria |
| 34:38 | de mais de 30 Wikipedias inteiras pra completar os 570 gigabytes de dados de treino. É um |
| 34:44 | volume respeitável. Esse tanto de texto, dizem que deu um total de 300 bilhões de "palavras", entre aspas, |
| 34:51 | mas acho que o jornalista entendeu errado. Um dicionário de inglês, como o Merriam Webster online não tem meio milhão de palavras. Acho que são 300 bilhões de tokens, que |
| 35:00 | incluem palavras, mas também n-grams como falei antes, e seja lá quais outros patterns |
| 35:06 | o deep learning identificou nesse material. Daí passa por semanas fazendo todo o processo que falei de transformação. Esse processo, que levaria meses, agora parece que dura mais |
| 35:15 | ou menos um mês rodando em não sei quantos servidores usando hardwares como os agora |
| 35:20 | famosos NVIDIA Grace-Hopper, os GH100. Lembra que falei que, internamente, não estamos lidando com valores escalares e sim com tensores |
| 35:30 | multi-dimensionais? CPUs como um Intel ou AMD que roda no seu PC, mesmo os M1 ou M2 da Apple, são chips com instruções feitas pra cálculos em cima de valores escalares. |
| 35:40 | Uma função de soma pega dois valores inteiros de 64 bits e cospe um resultado inteiro de |
| 35:45 | 64 bits. Eu explico como isso funciona nos episódios de emuladores como o do Super Mario, |
| 35:51 | com processadores de 8-bits, depois dêem uma olhada. CPUs modernas incluem instruções pra lidar com vetores, instruções SIMD, Single Instruction, |
| 35:59 | Multiple Data, literalmente uma instrução pra múltiplos dados. Começou com as instruções MMX dos primeiros Pentium nos anos 90. Hoje temos conjuntos de instruções como SSE4 |
| 36:10 | ou AVX-512. Pra ter a intuição, em vez de uma função que recebe um inteiro, pense |
| 36:15 | numa outra função que recebe dois arrays, soma os dois arrays, e cospe um array resultante, |
| 36:21 | tudo numa única instrução. GPUs, diferente de CPUs, não tem capacidade de rodar qualquer programa genérico. Lembram |
| 36:28 | do meu episódio de Turing Complete? A grosso modo, uma máquina de Turing é basicamente qualquer programa. Em particular, pra ser Turing Complete, pra ser um computador moderno, |
| 36:38 | ele precisa ser capaz de rodar um programa que consegue simular ser um computador. Como exemplo mais óbvio pense uma máquina virtual. Ele nem precisa conseguir rodar na prática, |
| 36:47 | mas tem que ter a capacidade teórica. Num CPU ARM M2 da Apple, é possível simular uma CPU Intel usando o Rosetta. E esse programa de Intel roda achando que tá num PC de verdade. |
| 36:58 | Isso é possível porque um CPU ARM M2 é Turing Complete. Já uma GPU não tem essa capacidade. Diferente de CPUs, que são genéricos, e podem simular |
| 37:08 | qualquer coisa, mesmo que lento, uma GPU é um hardware especializado, pra executar um |
| 37:13 | conjunto pequeno de tarefas bem definidas. Uma GPU não consegue rodar um sistema operacional |
| 37:18 | genérico, nem simular ser outra GPU, tipo um AMD Radeon tentar simular ser um NVIDIA |
| 37:25 | RTX. Não funciona assim. Quando existe camada de abstração, quem cuida disso é a CPU. |
| 37:30 | A GPU é boa numa única coisa: fazer cálculos de vetores e matrizes. |
| 37:35 | Uma CPU Intel costuma ter sei lá, 8, 16, 32 núcleos com 2 threads cada, rodando a |
| 37:41 | 4 ou 5 gigahertz hoje em dia. Mesmo chips de servidores como um Intel Xeon ou AMD EPIC |
| 37:47 | não tem muito mais que isso de cores. Já uma GPU é diferente. Uma novíssima RTX 4090 |
| 37:52 | tem nada menos que 16 mil núcleos pra shading de CUDA, 128 núcleos pra ray tracing e nada |
| 37:58 | menos que 512 núcleos exclusivos só pra tensors. Uma GPU, diferente de uma CPU, tem |
| 38:04 | milhares de núcleos que rodam em clocks baixos como 1 gigahertz, pra funções altamente |
| 38:10 | especializadas. O que eu falei que é o resultado do treinamento de deep learning? Um modelo de tensors n-dimensionais. |
| 38:16 | O que foi feito pra calcular tensors multi-dimensionais? GPUs. Processar áudio, processar video, processar |
| 38:24 | polígonos ou voxels tridimensionais, é tudo processamento de matrizes multi-dimensionais. |
| 38:29 | Uma tela de computador ou do seu smartphone, como é representado? Num monitor Full HD, é um array de 1080 colunas, onde cada elemento é um array de 1920 elementos pra cada linha. |
| 38:40 | Se eu quiser escurecer essa imagem inteira? Pode ser uma substração em cada valor desses arrays. Fazemos isso adicionando, ou subtraindo uma matriz por outra matriz, que chamamos |
| 38:49 | de um "filtro" ou kernel. Numa CPU, você programaria como um loop nas colunas e outro loop nas linhas pra calcular |
| 38:56 | a nova cor, pixel a pixel, seria 1920 vezes 1080 operações, ou mais de 2 milhões de |
| 39:03 | operações. Numa GPU eu passo a matriz inteira e ele calcula tudo numa única operação. |
| 39:08 | De novo, não vou conseguir entrar em detalhes, mas essa é a diferença fundamental. De curiosidade, um dos maiores problemas dessa arquitetura de CPU controlando GPU é o compatilhamento |
| 39:18 | de memória. Em PCs modernos a CPU tem um conjunto de RAM e a GPU tem um conjunto de |
| 39:23 | VRAM separados. A CPU prepara os dados e tem que mandar pra GPU processar. Daí uma vez |
| 39:29 | calculado, a CPU precisa puxar o resultado de volta pra própria RAM. No frigir dos ovos, essa comunicação é um gargalo. |
| 39:36 | Não é raro vermos jogos, por exemplo, que perde frames mesmo a GPU não estando em 100%, |
| 39:41 | mas se olhar a CPU, ela que tá em 100%, então vira um gargalo e a GPU fica um tempo parado esperando. Por isso desde a nona geração de consoles de videogames como PS5 e Xbox |
| 39:51 | Series X se falou tanto em loads instantâneos e tecnologias de melhorar esse gargalo, como |
| 39:56 | o Microsoft DirectStorage. Também é por isso que a estratégia da Apple com os chips M1 e M2 é ser um SoC ou System |
| 40:05 | on a Chip; um único chip que embute CPU, GPU e RAM tudo junto, pra minimizar ao máximo |
| 40:11 | esse gargalo. Juntar tudo no mesmo lugar garante uso mais eficiente de memória e caminho mais |
| 40:16 | curto de comunicação, ajudando a evitar gargalos. Na velocidade que estamos hoje, a distância da sua CPU Intel pros pentes de RAM é gigante |
| 40:24 | se comparado a soldar tudo junto no mesmo chip como a Apple faz. É um saco porque não |
| 40:29 | dá pra aumentar RAM depois, mas a razão não é porque eles são uma corporação querendo arrancar mais dinheiro de vocês, mas sim porque tirar esse gargalo faz muita |
| 40:39 | diferença. A mesma coisa acontece na solução pra data centers da Nvidia, a tal arquitetura Grace-Hopper |
| 40:44 | que eu falei, começa com um superchip Grace-Grace, tanto Intel quanto ARM, que eles mesmos desenvolveram, |
| 40:51 | num único pacote com NVLink que é um barramento de altíssima velocidade entre eles, e a alternativa |
| 40:56 | Grace-Hopper que é outro superchip que junta uma CPU Grace com uma GPU `H100` Hopper. |
| 41:03 | São soluções que juntam todos eses chips junto com meio terabyte de memória RAM LPDDR5 |
| 41:09 | de 32 canais. Estamos falando de 96 núcleos de 3 nanômetros. É um monstro. É esse o |
| 41:16 | produto que tem feito as ações da NVIDIA disparar, porque eles encaixam perfeitamente pra acelerar processamento de transformers. Meu PC não é "parrudo", esse da NVIDIA sim, |
| 41:26 | é a verdadeira definição de "parrudo", o atual estado da arte em 2023. É com servidores desse tipo, não sei quantos, que se pega meio terabyte de dados, quebramos |
| 41:37 | em 300 bilhões de tokens, e no final a OpenAI consegue gerar um modelo de GPT 4.0 com os |
| 41:42 | tais 170 trilhões de parâmetros. Conseguem entender melhor agora essa frase? Daí a mídia |
| 41:48 | e os jornalistas ficam assustados e noticiam como o GPT 4 se iguala ao cérebro humano, |
| 41:54 | que tem 100 trilhões em sinapses. Lembram? Sinapses mais ou menos são os pesos ou parâmetros |
| 41:59 | entre neurônios. Agora que entendemos mais ou menos o que são esses parâmetros, vamos discutir a premissa errada: parâmetros não são equivalentes a sinapses do cérebro humano. |
| 42:09 | Quando se joga números arbitrários assim no título de uma matéria, todo mundo fica empolgado. Vamos entender o erro. Pra começar, nosso cérebro, em média, tem uns 100 bilhões |
| 42:18 | de neurônios. De novo, eu não sou um neurologista, então já assuma que minha explicação vai ser simplificada e de alto nível. Em pesquisa de IA, tentamos igualar neurônios biológicos |
| 42:28 | com neurônios digitais numa rede neural, e falamos em bits, como num computador. Mas pra começar, neurônios não são exatamente binários assim. Um único neurônio é capaz |
| 42:38 | de lidar com múltiplos sinais e conexões. Em termos de sinapse pode ter até umas 7 |
| 42:43 | mil. Isso acho que seria máximo, mas em média o cérebro é capaz de até uns 600 trilhões |
| 42:49 | de sinapses. Não sei porque, dependendo de onde se pesquisa, falam em 100 trilhões, outros falam em 600 trilhões. De novo, precisa pesquisar um pouco mais a literatura de neurologia |
| 42:59 | pra entender o que isso significa. Mas não é um número absoluto. Tem vários fatores. Doenças como Alzeimer, por exemplo, afeta justamente a capacidade de fazer e manter |
| 43:08 | sinapses. Em crianças, quando o cérebro ainda é muito mais elástico e não foi limitado pelo crescimento, |
| 43:13 | o potencial é de 1 quadrilhão de sinapses. É um número absurdo, mas mais importante, |
| 43:19 | os 170 trilhões de parâmetros do GPT 4 não se equipara à quantidade de sinapses que nosso cérebro é capaz ainda. Portanto é falso que o GPT 4 já se igualou ao cérebro |
| 43:30 | humano em quantidade de sinapses. A outra premissa que errada: um parâmetro de modelo de GPT não é equivalente a uma |
| 43:36 | sinapse do cérebro humano, nem de longe. Usamos vocabulário neurológico pra simplificar |
| 43:42 | a descrição em termos de inteligência artificial, como redes "neurais". É uma metáfora. Em |
| 43:48 | nenhum momento, nenhum cientista da computação vai te dizer que um neurônio de rede neural é idêntico ou sequer próximo de um neurônio biológico. É só uma abstração. |
| 43:57 | E no caso de IA, parâmetros de modelos de transformers, comparado com neurônios do |
| 44:04 | cérebro. Vamos voltar ao meu Vicuna rodando localmente na minha máquina. Lembram da afirmação |
| 44:10 | do povo que fez testes e otimizou esse modelo? Um modelo Vicuna de 13 bilhões de parâmetros, em muitos casos, chega até 90% da qualidade de respostas de um ChatGPT 4.0 de 170 trilhões |
| 44:21 | de parâmetros. Como isso é possível? E por isso mencionei não-linearidade e Teoria do Caos. Um único parâmetro isolado, se |
| 44:28 | tentar ler e interpretar, não tem como inferir nada. Só funciona se estiver combinado com vários outros parâmetros, numa rede. O resultado final depende da interação de múltiplos |
| 44:38 | parâmetros, e por isso se gasta processamento da GPU pra gerar uma resposta. Parâmetros são pesos, probabilidades. E tem várias formas de otimizar isso. Por exemplo, probabilidades |
| 44:47 | pra ter o máximo de precisão podem ser valores escalares de tipo float de 32 bits. É isso |
| 44:53 | que se gera num modelo depois do treinamento. Porém, pesquisas mostram que podemos truncar esses valores pra float-16 e a qualidade das |
| 45:02 | respostas não cai tão drasticamente. É uma forma de otimização. Simplificando, é parecido com o conceito de música em MP3, que dados das frequências que o ouvido humano |
| 45:11 | não é capaz de detectar são cortados fora. Tecnicamente isso tira qualidade do áudio, |
| 45:16 | mas na prática a maioria dos humanos não sente. Em termos de armazenamento, economizamos 10 vezes o espaço fazendo isso. |
| 45:22 | Expliquei no episódio de 25 tera pra 5 gigas, onde pegamos uma imagem bruta em bitmap e |
| 45:28 | reduzimos pra um JPEG. A qualidade cai, mas o olho humano sem treinamento, não nota diferença |
| 45:33 | tão grande assim. Otimizações e compressão são formas de simplificar os dados, diminuir |
| 45:38 | a qualidade, de forma que nossos sentidos, sem treinamento, não sintam diferença significativa. |
| 45:44 | Fazemos isso com modelos de IA também. Reduzir os valores de Float 32 pra Float 16 é uma forma de quantização. Existem várias |
| 45:53 | formas de quantização que são otimizações dos modelos, pra exigir menos processamento pra gerar respostas, sem danificar demais a qualidade. Isso ajuda a conseguir fazer |
| 46:02 | um clone de ChatGPT como o Vicuna, rodar numa máquina caseira como a minha. Parece que minha RTX 3090 já é quase topo de linha, mas não. Por isso expliquei sobre a NVIDIA |
| 46:12 | GH100 que é o tipo de hardware necessário pra rodar o ChatGPT de verdade. Mas respondendo como um Vicuna de 13 bilhões de parâmetros consegue competir com um GPT |
| 46:21 | 4 de 170 trilhões é porque além de quantização, os algoritmos de auto-atenção tem evoluído |
| 46:27 | também. Em auto-atenção, que acontece no processo de treinamento, cada token numa sequência precisa ser considerado com todos os outros tokens pra capturar dependências e relacionamentos. |
| 46:37 | Tipicamente, auto-atenção é computado dentro de uma janela de contexto, onde cada token |
| 46:42 | é considerado com tokens vizinhos. Agora tem uma variante chamada "auto-atenção global" onde cada token é considerado independente |
| 46:51 | de posição ou distância, que permite o modelo capturar dependências num contexto mais global. Na prática é assim: custa mais caro pra treinar, mas os parâmetros resultantes |
| 47:00 | no modelo tem mais qualidade. Então com menos parâmetros conseguimos chegar em respostas |
| 47:06 | de qualidade similar. Entenderam? A qualidade de um parâmetro não é universal nem estático, |
| 47:11 | está mudando à medida que aperfeiçoamos os algoritmos de treinamento e estruturas de dados. |
| 47:16 | Redes neurais, mesmo deep learning com auto-atenção global, ainda são representações rudimentares |
| 47:22 | e grosseiras do nosso cérebro. Pra um GPT ou Vicuna da vida, conseguir escrever um texto |
| 47:27 | com estilo de Shakespeare, precisamos treinar com todos ou quase todos os textos do Shakespeare. |
| 47:32 | Pra conseguir gerar uma música parecida com Mozart, temos que dar o máximo de composições de Mozart quanto possível. O processo de treinamento vai encontrar patterns ou padrões |
| 47:42 | e criar pesos pra eles, registrando no modelo. Mas isso ainda é bem ruim se comparado ao |
| 47:48 | cérebro humano. Pense você. Se estiver treinando em literatura ou música. Mesmo não lendo nem perto de |
| 47:55 | todas as obras de Shakespeare, mesmo não estudando nem de perto todas as composições do Mozart, rapidamente consegue começar a copiar o estilo deles. Veja você como programador. |
| 48:04 | Não precisou ler todos os códigos já feitos em React pra começar a escrever códigos. Bastou uns 2 tutoriais. Nosso cérebro consegue aprender muito melhor que um transformer, |
| 48:13 | com muito menos dados, e produzir resultados similares ou melhores dentro de um mesmo determinado |
| 48:19 | assunto. IA hoje em dia ainda depende muito de força bruta. Desde que o LLaMA foi lançado em fevereiro de 2023, estamos só em junho e já temos |
| 48:28 | dezenas de modelos diferentes, com vários níveis de quantidade de parâmetros, caindo desde 65 bilhões até só 7 bilhões, com vários tipos de otimização como GPTQ pra |
| 48:39 | quantização, ou Float 16. E isso permite rodar algo parecido com esse meu Vicuna local, num Android ou até num Raspberry Pi. |
| 48:46 | É o que eu acho ideal: um transformer rodando localmente, offline, sem compartilhar nenhum |
| 48:52 | dado pessoal meu, nenhuma conversa, com nenhuma corporação por aí. Quanto menos dados meus |
| 48:57 | eu tiver que dar pra alguém, melhor. Especialmente se esse alguém não me paga por isso. Pelo contrário, pra usar OpenAI eu preciso pagar assinatura. E sabe-se lá o que fazem com |
| 49:07 | minhas conversas. Bacana, significa que se o jornaleiro fala que o GPT 4 é próximo já de um ser humano, |
| 49:13 | e os nerdolas das ciências da computação já compactaram e tornaram eficientes até esse ponto do VIcuna. Então já era. Tá fácil fazer a Skynet né? Afinal, GPT 4 já |
| 49:22 | consegue escrever código de programação. Basta eu carregar o código do GPT 4 e mandar ele melhorar o código e gerar o GPT 5. Daí eu pego o novo GPT 5 e faço ele fazer uma |
| 49:33 | versão melhor, o GPT 6, e assim sucessivamente, até eu ter o Gigachad GPT T-1000 Skynet que |
| 49:40 | vai dominar o mundo, certo? Errado. No final do dia, um GPT 5, 10, 20, continua não sendo mais que um auto-corretor |
| 49:49 | do seu teclado em versão maior. Tirem da cabeça a noção de que é uma "inteligência". Ela não é inteligente. Tentar definir inteligência é um buraco de coelho profundo demais, vai |
| 50:00 | ter gente masturbando filosofia aqui até o fim dos tempos e ninguém vai chegar numa conclusão. Vamos só assumir que até hoje não temos uma definição exata de "inteligência |
| 50:09 | humana". Na verdade, quando chamamos de "inteligência artificial" só quer dizer que os resultados, |
| 50:14 | pra um ser humano, podem "parecer" com algo inteligente, mas não que de fato "é" inteligente. |
| 50:19 | Entendem a diferença? Não ter uma definição exata é ruim, porque não temos um plano exato de pra onde ir. |
| 50:26 | Na neurologia de verdade, apesar dos avanços, não temos uma receita exata de como neurônios |
| 50:31 | e sinapses funcionam 100%. Temos uma boa idéia. Muita coisa ainda é especulativo. Mas podemos |
| 50:38 | dar alguns chutes educados baseado em tudo que falei até agora. E aqui vai ser minha opinião pessoal. Se alguém tiver pesquisas que discordam, sintam-se à vontade pra linkar |
| 50:46 | nos comentários abaixo. Opinião por opinião, cada um pode ter a sua. A maioria parece estar |
| 50:51 | pulando rápido demais pra religião do AGI e eu vou ser advogado do diabo e dizer porque |
| 50:56 | isso não está nem perto de acontecer. Vocês entenderam até aqui? Quando vamos na interface Web do ChatGPT ou Vicuna ou qualquer |
| 51:03 | outro derivado e escrevemos o tal do prompt, a pergunta, damos uns segundos, e ele nos |
| 51:08 | trás uma resposta. Mas na realidade não é isso. O que vem na verdade é uma continuação do texto do prompt. Tem uma diferença importante aqui: ele não está tentando te responder. |
| 51:18 | Acontece que com os parâmetros treinados do modelo, a probabilidade maior das próximas palavras é se parecer com uma resposta. Essencialmente o que está acontecendo é similar ao auto-corretor |
| 51:29 | do teclado do seu celular: dado o texto que acabou de digitar, quais palavras tem mais probabilidade de serem continuação? |
| 51:37 | Entendam essa sutileza. Por isso falo que não é uma "inteligência". GPT ou Vicuna |
| 51:42 | não são pessoas e nem entidades com cognição tentando se comunicar. É meramente um completador |
| 51:49 | de textos, ou mais tecnicamente, um transformer pré-treinado generativo, um gerador de texto. |
| 51:56 | Uma pergunta, ou prompt, é um texto que se digita na expectativa que o modelo consiga continuar completando. É por isso que o texto da resposta vai aparecendo aos poucos, não |
| 52:05 | é uma animação arbitrária, é igual você ficar clicando na próxima palavra sugerida pelo teclado. |
| 52:10 | Um dos parâmetros que afeta essa continuação se chama temperatura. Nós não temos controle da temperatura do ChatGPT pela interface Web, mas no Bing da Microsoft tem esses controles |
| 52:21 | de mais balanceado, mais preciso ou mais criativo. E no meu Vicuna tenho esse campo numérico. |
| 52:26 | Novamente, do jeito que todo mundo escreve, parece que estamos configurando uma pessoa pra ser "mais criativa". Mas isso é só parte do showzinho. Um transformer não é mais |
| 52:36 | ou menos criativo, ele é mais ou menos "aleatório".  Temperatura controla a aleatoriedade do complemento de texto sendo gerado, o que você chama de |
| 52:45 | "resposta". O modelo assinala probabilidades pra cada possível token, que são candidatos |
| 52:51 | pra ser a próxima palavra na sequência. Alta temperatura, valores maiores do que "1.0", |
| 52:56 | significa que o modelo assinala probabilidades similares a um conjunto maior de tokens. Se vários tokens tem probabilidades parecidas, as respostas podem variar mais quando se repete |
| 53:06 | a mesma pergunta. Quanto maior a temperatura mais você vai "achar" que ele tá sendo mais criativo, mas também aumenta a probabilidade dele começar a dar respostas sem sentido. |
| 53:16 | Temperatura média, entre 0.5 a 1.0, é a resposta "balanceada" do Bing. Mesma coisa |
| 53:22 | que alta temperatura mas ele assinala probabilidades similares pra um conjunto menor de tokens, |
| 53:27 | controlando um pouco mais o que se perceberia como "criatividade". Baixa temperatura, que |
| 53:33 | é abaixo de 0.1, faz o modelo assinalar probabilidades similares pra palavras que realmente tinham |
| 53:39 | mais chances de ser o próximo token. Isso faz a resposta parecer mais focada, determinística, |
| 53:45 | previsível. Respostas sem sentido, muitos chamam de alucinação. Eu não gosto desse termo, porque implica |
| 53:51 | que se alucinação é temporária nas respostas, então no resto do tempo ele está sendo sóbrio |
| 53:56 | ou racional. E não está. Todas as partes das respostas foram geradas mediante probabilidades |
| 54:01 | do modelo. Eu só ajusto a quantidade de de aleatoriedade nos candidatos pra próxima |
| 54:07 | palavra. Nada mais, nada menos. Ele nunca alucina, assim como nunca é sóbrio. Ele não é uma entidade consciente pra ser nenhuma das duas, é só um programa obedecendo probabilidades |
| 54:18 | armazenadas num modelo. Entenda, no frigir dos ovos, "criatividade" no mundo de transformers, é só uma métrica |
| 54:25 | de aleatoriedade. Não tem nada a ver com criatividade humana. Assim como inteligência |
| 54:31 | artificial não tem nada a ver com cognição de verdade. Transformers, e todo tipo de machine |
| 54:37 | learning ou deep learning, são meros sacos de probabilidades. Eles não tem de fato cognição pra pensar "huumm, os dados dizem que a probabilidade desse evento é X, mas realmente faz sentido? |
| 54:48 | tem alguma coisa que eu não estou percebendo? Deixa eu parar pra pensar", que seria o que um ser humano inteligente consegue fazer. Transformers não refletem, só cospem exatamente |
| 54:58 | o que as probabilidade do treinamento do modelo dizem pra ele cuspir, e nada mais. Quando um transformer consegue pegar uma equação e achar a resposta, ou pegar até a planilha |
| 55:08 | de balanço de uma empresa e dizer se está indo bem ou mau. Ela não está sendo inteligente. |
| 55:13 | Simplesmente existem probabilidades no modelo que levam à resposta porque materiais que ele usou de treinamento tinham já a resolução de equações parecidas. |
| 55:22 | Da mesma forma que eu disse que não existe um monte de "ifs" de regras gramaticais pra conseguir escrever textos, também não tem um monte de "ifs" de regras matemáticas pra |
| 55:31 | fazer contas. Sempre volte à imagem daquela lista de pares de palavras e probabilidades do exemplo do teclado com auto-corretor. Aquilo é tudo que ele tem. Um conjunto gigante de |
| 55:43 | probabilidades. Toda resposta que te dá, por mais inteligente que pareça, não teve nenhum tipo de raciocínio ou lógica ou inferência, nem nada, só probabilidades. |
| 55:53 | Um texto gerado por um transformer às vezes pode parecer "simpático". Se você for uma |
| 55:59 | pessoa carente, vai parecer que o transformer responde se importando com você. Mas nada |
| 56:05 | disso é intencional, é você projetando nele o que gostaria que ele fosse. Todo mundo |
| 56:10 | faz isso com animais de estimação. Isso se chama "antropomorfismo". Você pode atribuir |
| 56:16 | emoções humanas pra animais ou objetos inanimados. Tem gente que jura que uma escultura sorri |
| 56:22 | pra ele quando passa na frente. Obviamente não.  Um exemplo simples disso são nuvens no céu. Vira e mexe você olha pro céu e vê claramente |
| 56:31 | uma escultura nas nuvens. Dependendo da sua inclinação ideológica poderia pensar. "Uau, |
| 56:37 | Deus realmente é criativo, olha que obra maravilhosa nos céus que ele está me dando". Ou "Uau, a mãe natureza é especial, mãe Gaia continua a demonstrar sua genialidade |
| 56:48 | criativa até nos céus". Ou "Uau, a droga que eu acabei de tomar é da hora ..." Só |
| 56:53 | esse último pode estar certo. O fato é que a nuvem em si não está em formato de nada. Se passar um avião por cima |
| 57:00 | da mesma nuvem, não vai ver nada, ou vai ver outra imagem. Da posição que você está, na sua cabeça, suas sinapses pré-treinadas sugerem que você está enxergando a sillhueta |
| 57:11 | de algum objeto ou animal que já viu antes. É um efeito colateral da nossa cognição. Poderíamos chamar de bug. É seu cérebro primitivo. O cérebro rápido, automático |
| 57:20 | e meio burro. Ninguém moldou essa nuvem, ela aleatoriamente acabou numa determinada posição, que parece |
| 57:28 | ter um determinado formato. Não houve intenção. Foi aleatório. Eu diria que a IA tá pouco |
| 57:35 | se fodendo pra você, mas isso implicaria que ela tem consciência. Ela nem está se fodendo pra você. Ela não pensou em você. Mesma coisa com um transformer. Ela não tem |
| 57:45 | consciência, ela simples é. Uma mera ferramenta. Uma chave de fenda que sabe cuspir palavras |
| 57:51 | segundo uma matriz de probabilidades. Nada mais, nada menos. Por acaso você está olhando |
| 57:57 | pra chave de fenda e achando que está sorrindo pra você. Não está. Isso diz mais sobre |
| 58:02 | seu estado emocional do que sobre a ferramenta. Significa que ela não tem insights, não tem momento "eureka" de descobrimento de coisas |
| 58:10 | novas. Ela só é capaz de sugerir uma palavra, depois das outras palavras que vieram antes, |
| 58:16 | seguindo uma tabela de probabilidades que vieram do treinamento feito com gigabytes de texto. De vez em quando, dá impressão que ela "criou" algo que não existia, mas |
| 58:25 | não é criação, é aleatoriedade, pura sorte. É a nuvem no céu. Não é um processo |
| 58:31 | repetível e ela não sabe refletir algo como "uau, isso que eu inventei é da hora, nunca |
| 58:36 | tinha visto antes". Ela não tem emoções pra conseguir dizer "uau". |
| 58:42 | Se você der o código de uma IA feita com RNNs como falei antes pro GPT 4 analizar, |
| 58:47 | ela não vai magicamente conseguir chegar no paper de transformers. Se esse paper não estava no material de treinamento, ela não vai concluir sozinha que esse era o próximo |
| 58:56 | passo. Portanto ela é incapaz de conseguir chegar num GPT 5. Novas descobertas precisam |
| 59:01 | ser feitas por humanos, documentadas, alimentadas no treinamento da IA e só aí ela vai saber |
| 59:07 | cuspir o texto desse paper. Ela é incapaz de usar o que aprendeu pra gerar descobertas novas de forma intencional. |
| 59:14 | Existe uma historinha que é chamado do Teorema dos Macacos Infinitos. O teorema sugere que |
| 59:19 | se tivermos um macaco apertando teclas numa máquina de escrever por uma quantidade infinita de tempo, quase com certeza vai conseguir digitar qualquer tipo de texto, incluindo |
| 59:28 | todas as obras do Shakespeare. Na prática, estamos falando de uma quantidade tão absurda de tempo que seria impossível até de vocês terem noção, estamos falando provavelmente |
| 59:36 | de mais tempo que a idade atual do Universo desde o Big Bang. Mas é um conceito que demonstra |
| 59:42 | que sim, sem nenhuma inteligência, só com aleatoridade, dado um tempo absurdo, uma hora |
| 59:47 | tudo que já produzimos vai aparecer. Sem nenhuma intenção, só via aleatoriedade. |
| 59:53 | É uma história pra dar noção de conceitos como infinito e aleatoriedade. Essa história |
| 59:59 | é creditada ao matemático francês Felix Émile Borel, de 1913. Ou seja, desde o começo |
| 1:00:05 | do século XX já se tinha essa noção que muitos de vocês, mais de um século depois, |
| 1:00:10 | ainda estão com dificuldades de entender. GPT e derivados são macacos modernos dessa história. Só que em vez de totalmente aleatório, demos um modelo de probabilidades pra facilitar |
| 1:00:20 | o trabalho dele, só isso. Mas chamar de macaco é meio ofensivo, pro coitado do macaco, que |
| 1:00:25 | ainda é mais inteligente que qualquer IA.  Falando em século passado. Deixa eu aproveitar pra voltar lá atrás na história das inteligências |
| 1:00:32 | artificiais. O estudo de algoritmos e técnicas que contribuem pra esse campo existe desde |
| 1:00:37 | os anos 50 pelo menos. Mas nos anos 70 surgiu um programa que até hoje ainda deixa os desavisados |
| 1:00:43 | meio surpresos. O nome do programa é Eliza. Existem várias versões, inclusive rodando |
| 1:01:09 | online. Dêem uma olhada. |
| 1:01:27 | Como podem ver, é um chatbot também, que nem o ChatGPT. E parece uma pessoa bem desconfiada, |
| 1:01:33 | fica dando umas respostas meio grossa. Weebs de anime chamariam ela de "tsudere". Mas se |
| 1:01:38 | hoje povo fica empolgado com ChatGPT respondendo, imagina isso nos anos 70. Só pra dar contexto, |
| 1:01:44 | isso é antes da revolução dos microcomputadores de 8-bits como Commodore ou Apple II. Isso é antes da Microsoft ou Apple existirem. Nem internet existia ainda. Quando eu rodei |
| 1:01:54 | uma versão de Eliza pra DOS lá no começo dos anos 90, lembro que fiquei fascinado e pensando como eu faria a minha própria versão. E aí vocês podem se perguntar, "caraca, |
| 1:02:02 | mas como era possível ter isso nessa época??" Bom, quem faz ciências da computação ou programa um pouco, já deve ter entendido |
| 1:02:09 | o funcionamento. O modelo é super simples. É baseado inteiramente em pattern matching. |
| 1:02:15 | Basicamente encontrar palavras-chave, ver se tem uma resposta pré-programada, e montar essa resposta, na mão. É um sistema de templates. Quando eu digo "na mão", aqui sim, ao contrário |
| 1:02:25 | de modelos de transformers, é realmente um monte de "ifs". Quem já montou agentes ou |
| 1:02:31 | robozinhos, tanto de chat de suporte ou email marketing, já fez coisa similar pra respostas |
| 1:02:36 | automáticas. É um bom exercício de faculdade pra iniciantes. No GitHub vai achar várias versões. Veja esta, é uma versão feita em Java. E vamos |
| 1:02:44 | ver o tal "modelo" entre aspas. É uma lista de chaves e valores, e os valores, como podem |
| 1:02:50 | ver, são frases pré-prontas. Por exemplo, se durante o chat você se desculpa e escreve algo como "I'm sorry", ele quebra essa string, encontra a palavra "sorry" e nesta lista olha |
| 1:03:00 | só, tem 3 respostas pré-programadas. Ela pode te responder "Por favor, não se desculpe" ou "Desculpas não são necessárias". E vai escolher aleatoriamente, pra não parecer |
| 1:03:09 | que tá se repetindo. Só isso já é suficiente pra passar no Teste de Turing, que é um teste feito pra identificar |
| 1:03:16 | quando uma inteligência artificial consegue enganar um ser humano numa breve conversa. |
| 1:03:21 | Eliza é a avó espiritual do ChatGPT. Mas o ponto em apresentar a Eliza é pra vocês verem que pra enganar seres humanos, não precisa muito. Por alguma razão, nós seres |
| 1:03:30 | humanos, somos muito fáceis de enganar e somos propensos a acreditar em qualquer coisa. Acho que somos animais com fé excessiva. É um ponto forte, mas é um enorme ponto |
| 1:03:40 | fraco também. Eu pessoalmente sou cético, mas aí me chamam de "do contra", vai entender. |
| 1:03:46 | Vou continuar não sendo o trouxa, só isso. Um ChatGPT, se eu quisesse simplificar bastante, não é muito diferente da Eliza, em conceito. |
| 1:03:55 | É um programa que usa um modelo, um dicionário de probabilidades, que mostra frases de acordo |
| 1:04:00 | com o que se digitou antes, roboticamente, automaticamente, pegando palavras cujos valores |
| 1:04:06 | de probabilidade fazem mais sentido dado as palavras anteriores. Não existe nenhuma emoção envolvida. Não existe simpatia, não existe compaixão, não existe amargura. Nada. Não |
| 1:04:17 | tem uma linha de código, nem de dados no modelo, que representam qualquer emoção. É apenas uma calculadora, que em vez de devolver números, devolve conjuntos de palavras. Só |
| 1:04:28 | isso. Mas e as IAs que geram imagens inéditas? Vide o próprio Dall-e 2 da OpenAI, vide o |
| 1:04:35 | Midjourney, vide o Stable Diffusion, vide os novos plugins de geração e ajustes de |
| 1:04:40 | imagens proprietário da Adobe, que começaram a ser distribuídos no Creative Cloud. Classificação |
| 1:04:46 | de imagens e geração de novas imagens são campos diferentes dentro de inteligência artificial. Só pra não perder o gancho, deixa eu jogar na mesa mais alguns conceitos. |
| 1:04:54 | Um campo que existe desde pelo menos os anos 80 é o estudo sobre CNNs. (piada) Não, não, |
| 1:05:00 | não é esse, é um CNN útil. Convolutional Neural Networks, que é um modelo que dizem |
| 1:05:05 | que é bom pra processar dados que se parecem com grades, como uma grade de pixels, que é como representamos uma imagem. As tais camadas convolucionais, não sei se é assim |
| 1:05:14 | que fala em português, aplicam vários filtros ou kernels, aos dados de pixels pra criar |
| 1:05:19 | um mapa de funcionalidades.  Em resumo, esses filtros extraem características da imagem. O equivalente a tokenizar um texto |
| 1:05:27 | e gerar palavras ou n-grams. Mas CNNs ficaram super famosos só depois de 2012 quando saiu |
| 1:05:33 | a AlexNet de Alex Krizhevsky, Ilya Sutskever e Geoffrey Hinton. (piada) Arregacei os nomes, |
| 1:05:40 | mas beleza. Era um concurso que todo ano o vencedor ficava um pouco melhor do que o do |
| 1:05:46 | ano anterior. Mas em 2012, o salto foi uma ordem de grandeza melhor. Não lembro os números, mas faz de conta que todo ano os melhores algoritmos conseguiam identificar 85% das |
| 1:05:55 | imagens, no ano seguinte, 86%, aí do nada deu um salto pra 99%. Isso gerou um enorme |
| 1:06:00 | interesse na comunidade de pesquisa em cima de classificação de imagens. Em paralelo, em 2014 surgiu o conceito de GANs, Generative Adversarial Networks ou redes |
| 1:06:10 | generativas adversárias, desenvolvido pelo Ian Goodfellow e seus colegas. Foi um avanço |
| 1:06:17 | no conceito de geração de imagens. De forma simplificada é como se fossem duas IAs uma competindo com a outra. Um gerador cria imagens e um discriminador avalia. Por exemplo, digamos |
| 1:06:27 | que quero gerar imagens de gatos, o gerador faz as imagens, e o discriminador tenta identificar |
| 1:06:32 | se é um gato mesmo. É um sistema que acelera o processo de aprendizado por fornecer feedbacks mais rápidos do que um treinamento supervisionado por humanos. |
| 1:06:40 | CNNs e GANs eu mencionei mais pra vocês saberem alguns nomes importantes. Mas o Dall-e da OpenAI não usa GANs, ele usa um derivado do modelo de transformers do GPT só que aplicado |
| 1:06:51 | a imagens. Assim como geração de respostas de texto, onde ele vai prevendo uma palavras após a outra, levando o contexto anterior em consideração, o Dall-e também usa uma |
| 1:06:59 | arquitetura de transformers, criando imagens um pedaço atrás do outro. Ou seja, também usa mecanismos de auto-atenção em vez de camadas recorrentes ou convolucionais tradicionais. |
| 1:07:10 | Essa não é a única forma de se criar um gerador de imagens. Mais do que o Dall-e, que é fechado, eu gosto mais do Stable Diffusion que, assim como o LLaMA da Meta, também foi |
| 1:07:19 | liberado publicamente como modelo aberto. Quem me acompanha no Instagram viu quando eu fiquei brincando de usar o Stable Diffusion com outras ferramentas abertas pra fazer remasterização, |
| 1:07:29 | upscaling de video. Assim eu pegava um video super antigo com qualidade de DVD e conseguia |
| 1:07:35 | fazer ele redesenhar uma versão 4K. Se não viu isso, veja o destaque "Usando IA" no meu |
| 1:07:41 | Insta. Enfim, diferente do Dall-e que usa transformers, o Stable Diffusion, como o próprio nome diz, usa um modelo de difusão. |
| 1:07:48 | Esse modelo gera imagens simulando um processo aleatório rodando em reverso, ou seja, o |
| 1:07:54 | processo de geração começa com uma simples distribuição, como um Gaussian noise, literamente um gerador de barulho aleatório mesmo, e vai gradualmente refinando esse barulho, passo |
| 1:08:04 | a passo, até chegar numa imagem que parece com os dados que o modelo foi treinado. É meio como partir de um punhado de argila, tudo bagunçado, e passo a passo ir esculpindo |
| 1:08:13 | e refinando, até chegar numa estátua. Esse processo de refinamento é dirigido por uma rede neural que aprende a predizer o próximo passo da difusão. E por isso se chama Stable |
| 1:08:23 | Diffusion, ou Difusão Estável. Um site que parece que tem ganhado relevância na comunidade de pesquisa e desenvolvimento |
| 1:08:30 | de ferramentas e modelos de IA, é o HuggingFace. Ele serve como um repositório. É de lá |
| 1:08:35 | que podemos baixar os modelos do LLaMA, Alpaca, Vicuna em todos os diferentes tamanhos e formatos. |
| 1:08:41 | Existem modelos específicos pra texto como o Vicuna, específico pra imagens como o do |
| 1:08:47 | Stable Diffusion, conversor de texto pra áudio como o Speech T5 do Facebook e muitos outros. O ponto é que não existe uma única inteligência unificada que faz tudo, existem modelos isolados |
| 1:08:58 | e independentes feitos pra tarefas específicas. Um GPT não sabe converter texto em áudio, |
| 1:09:04 | isso é outro modelo. Portanto, quando ver produtos web que parecem uma única inteligência, não é, é um integrador |
| 1:09:10 | que divide o que você pediu entre diversas inteligências diferentes. O que me leva a outro tema que queria tocar de leve, mesmo porque só comecei a estudar isso recentemente. |
| 1:09:20 | Eu expliquei como as coisas funcionam, superficialmente, por baixo dos panos. Mas agora precisamos falar do que fica por cima dos panos, o que usuários normais como eu e você enxergam, |
| 1:09:30 | a interface. Não só interface gráfica web de chat, mas interface de APIs e tudo mais. Surgiu um framework |
| 1:09:36 | que tem ganhado cada vez mais relevância na comunidade que está investindo pra construir ferramentas integradas com os diversos serviços de IA que mencionei, como GPT, Bard, Stable |
| 1:09:45 | Diffusion e outros. Esse framework se chama LangChain. A grosso modo, pense um framework |
| 1:09:51 | como Django, ou Laravel, ou Rails, ou Spring, mas feito pra construir aplicativos que usam |
| 1:09:56 | IA. Eu gostei particularmente da documentação. Pra um projeto de código aberto novo, tem |
| 1:10:02 | material suficiente de estudo, incluindo pesquisa de papers acadêmicos sendo publicados agora. Em particular queria tocar no ponto de prompts. A moda dos parasitas sangue-suga agora, é |
| 1:10:12 | criar cursos online de prompts. Já viram por aí? "Vire um Engenheiro de Prompt". É a coisa mais idiota que já vi. |
| 1:10:19 | Seria o equivalente a você se chamar de "Engenheiro de Pesquisa no Google". Já deixo a dica pra |
| 1:10:25 | você: não faça nenhum deles. Sem nem olhar, posso garantir que quase todos são pega-trouxa. |
| 1:10:30 | Lembra aquele ditado? Todo dia um malandro e um otário acordam e vão pra rua, e quando se encontram, rola negócio. Não seja o otário. |
| 1:10:38 | Enfim, o LangChain é um framework extenso. Não pense algo simples como um Express de |
| 1:10:43 | Node.js. Isso tá mais pra um Spring de Java. Tem diversos conceitos, como Models pra interfacear |
| 1:10:49 | com os diversos serviços de IA, como o ChatGPT. A grosso modo esses Models seriam como um |
| 1:10:54 | Hibernate, um ORM pra IAs. Mas tem outras abstrações. Tem Agentes. Tem Correntes. |
| 1:11:01 | Tem Índices, mas uma das partes interessantes é que tem Prompts. Diferente desses cursinhos idiotas por aí, que ficam mais no esquema "olha só, eu testei |
| 1:11:09 | uns prompts aqui e vou compartilhar com vocês" ou então povo que fica copiando teorias da conspiração de prompt que surgem no Reddit. De fato existem pesquisas acadêmicas sendo |
| 1:11:19 | feitas no estudo das melhores formas de se fazer perguntas pra passar pra um transformador generativo como GPT. Lembram o que eu falei? Os transformers só continuam adicionando |
| 1:11:29 | palavras na frente do prompt que você escreveu. Quanto melhor escrito for o prompt, maiores |
| 1:11:35 | as probabilidades de se conseguir as respostas que procura. Ele vai conseguir prever melhor as palavras seguintes. |
| 1:11:40 | O melhor prompt não é escrever um textão aleatório, mas sim conciso e estruturado. |
| 1:11:46 | Na documentação eles fazem links pros diversos papers acadêmicos com o estudo pra cada tópico. |
| 1:11:51 | Eu não levaria 100% a sério, nem todos os papers são consenso, muita coisa é só teoremas |
| 1:11:56 | e hipóteses. Mas é melhor do que chutes do YouTuber. Com um LangChain, eu poderia fazer um Model que se integra com o meu Vicuna rodando localmente, |
| 1:12:04 | daí poderia não depender de serviços de terceiros e também manter a privacidade dos meus dados, já que não preciso compartilhar nada com ninguém. Se alguém tiver interesse |
| 1:12:13 | de estudar, pesquisar ou até empreender com essa nova geração de transformadores, essas são ferramentas que podem ser muito úteis. Esquece curso idiota que é "duh, olha só |
| 1:12:23 | como sou inteligente, sei integrar com a API da OpenAI". Sério, isso é o básico do básico |
| 1:12:30 | do básico, você aprende em 10 minutos num blog post. Não tem absolutamente nada demais. |
| 1:12:36 | Aliás, um curso de IA que se preza, tem por obrigação ter tudo que eu falei neste vídeo, |
| 1:12:42 | só que explicado com 10 vezes mais detalhes. Caso contrário não vale seu dinheiro e muito |
| 1:12:49 | menos seu tempo. Não perca tempo com esses cursos caça níquel. São todos perda de tempo. Veja os links que deixei na descrição do video e estude um a um que no final você |
| 1:12:59 | vai aprender muito melhor, e de graça. O hype em torno de IA está fora de proporção. |
| 1:13:04 | Um prato cheio pros oportunistas de plantão. Pra finalizar, acho que vale a pena voltar na questão que incomoda todo programador |
| 1:13:12 | iniciante: "mas será que com essa evolução rápida de transformers, não é questão |
| 1:13:17 | de tempo até ele substituir todos os programadores?". Eu já tinha feito um video só pra responder |
| 1:13:23 | isso e recomendo que assistam, mas considerando o que expliquei hoje, vou explicar porque, tecnicamente, isso não vai acontecer. |
| 1:13:30 | Primeiro. Um transformer é incapaz de gerar textos sobre assuntos que nunca viu na vida. |
| 1:13:36 | Isso é importante de entender. Vamos recordar, o que é um modelo, é um banco de dados de tokens retirados dos textos de treinamento e mais importante: as probabilidades de um |
| 1:13:45 | token pra outro token dentro de uma rede. O modelo não contém o texto original, só |
| 1:13:51 | pesos. Vou repetir porque isso é importante: nenhum texto original aparece na sua forma original, |
| 1:13:56 | dentro do modelo. Pra ter na cabeça pense assim. Já viram que vários livros no final tem algumas páginas com um "índice remissivo"? São todas as palavras importantes que aparecem |
| 1:14:06 | no texto do livro e as páginas onde aparecem. É que nem um índice rudimentar de banco de dados. |
| 1:14:12 | Quando fazemos um prompt e pedimos, sei lá, pra ele citar um trecho da peça King Lear, |
| 1:14:17 | de Shakespeare. Vai gerar o trecho, se não igual, muito próximo ao trecho do texto original. |
| 1:14:22 | E isso confunde, pois parece que então, ele tem o texto inteiro guardado em algum lugar. Mas não. Por exemplo, pedi pra ele citar um diálogo entre Albany e Cordelia e corretamente |
| 1:14:32 | diz que não existe diálogo entre os dois na peça, e sugere outra cena, Ato 4, Cena 2, onde Albany fala com sua esposa Goneril. E segue o trecho exatamente como está na |
| 1:14:42 | peça.  Novamente, é muito difícil traçar o caminho exato dentro do modelo, indo de probabilidade |
| 1:14:48 | em probabilidade pra reverter o processo e descobrir como o GPT conseguiu escrever o |
| 1:14:53 | texto. Mas podemos dar um chute educado: a sequência de palavras do diálogo tem altíssima probabilidade. Primeiro, no meu prompt tem todas as palavras-chave importantes pro contexto |
| 1:15:03 | como "Shakespeare", "Albany" e tudo mais. Quando ele começa digitando o trecho "You are" no contexto to diálogo, a chance maior |
| 1:15:11 | é da próxima palavra ser "not", depois da palavra ser "worth", depois ser "the" e depois |
| 1:15:16 | "dust". São as probabilidades mais altas dessa sequência. Ele não tem o texto original, |
| 1:15:22 | mas tem as probabilidades, que permitem remontar uma boa parte do texto original. |
| 1:15:27 | Até certo ponto, a grosso modo, o modelo acaba servindo como uma versão comprimida |
| 1:15:32 | dos textos originais, mas com perdas. Quebramos todos os textos em tokens e gravamos os relacionamentos |
| 1:15:39 | de forma que é possível recuperar alguns desses textos. Mas não podemos garantir que é possível recuperar tudo, porque a mistura de alguns textos similares vai desajustar |
| 1:15:49 | as probabilidades. No final teríamos no máximo uma versão mesclada de dois ou mais textos. Quanto mais |
| 1:15:56 | repetidas vezes um determinado texto aparece em diversas fontes no material de treinamento, |
| 1:16:03 | maiores as chances de conseguir reconstruir depois. Shakespeare, tendo obras que foram analisadas, discutidas e citadas inúmeras vezes em várias fontes, tem maiores chances |
| 1:16:13 | de ser reconstruído.   Sobre mim, Fabio Akita, já vai ser mais difícil, porque no contexto geral da Web, eu sou extremamente |
| 1:16:20 | pouco citado. Mesmo assim, o GPT 4 até que consegue fazer uma descrição super genérica |
| 1:16:25 | sobre mim. Fala coisas certas, por exemplo, que sou brasileiro, que fundei a CodeMiner, que palestrei em eventos e ajudei a divulgar Ruby on Rails. Mas aí fala que também ajudei |
| 1:16:34 | a divulgar metodologias Ágeis, que não é mentira, mas nunca foi um ponto importante. Ele fala que fui "keynote speaker", ou seja, que dei palestra de abertura em muitas conferências, |
| 1:16:45 | o que não é verdade. Ele já começou a misturar informações de outras pessoas similares. Mas isso não é acidente, é porque comparado a um Shakespeare, não tem quase nada sobre |
| 1:16:54 | mim na Web, e as probabilidades são muito parecidas com outros palestrantes de tecnologia |
| 1:16:59 | da mesma área. Por isso também é difícil pra ele citar fontes exatas, porque cada palavra do texto |
| 1:17:05 | que gera pode ter vindo de um lugar diferente. Não tem como saber exatamente. Pra ter links pra fontes, como o Bing faz, especulo que precisa de um processo em duas ou mais etapas. |
| 1:17:15 | Primeiro, gerar o texto da resposta, como um GPT faz. Depois, pegar esse texto e fazer |
| 1:17:20 | uma pesquisa tradicional no Bing antigo. Daí cruzar as duas informações e ver se os textos |
| 1:17:26 | minimamente batem, e finalmente apresentar juntas, como se a resposta já tivesse saído pronto com os links pras fontes. |
| 1:17:33 | Não é o transformer que dá os links, é um segundo processo separado. Porque o modelo |
| 1:17:40 | do transformer, em si, não tem como garantir exatamente qual parte veio de onde. Quanto |
| 1:17:45 | mais um certo assunto tiver textos pra treinar, mais precisas vão ser as respostas. Por isso |
| 1:17:50 | é mais fácil conseguir informações sobre celebridades, do que sobre alguém como eu ou vocês. No nosso caso, nossas informações vão ser misturadas com de outras pessoas |
| 1:17:59 | similares, porque as probabilidades não vão ajudar.  Lembra a temperatura de "criatividade"? Ela garante que, mesmo sem saber a resposta exata, |
| 1:18:07 | o ChatGPT vai continuar tentando responder baseado nas probabilidades que tem no modelo |
| 1:18:13 | atual. Mas não tem jeito, toda resposta sobre coisas que não tinha no material original de treinamento, ou tinha muito pouco, vai ser uma alucinação probabilística. Só |
| 1:18:22 | isso. E vai estar errado. E isso vai acontecer com tudo que for novidade. No dia 1, todo transformer vai ser praticamente inútil. |
| 1:18:29 | Outra coisa, mesmo sendo capaz de ler código, explicar código dos outros e gerar códigos, ainda não vai ter a capacidade de gerar um projeto inteiro. Lembra os códigos vazados |
| 1:18:39 | do Twitch ou o código de ranking do Twitter que eu analisei? Estamos falando de milhares |
| 1:18:44 | de arquivos, centenas de milhares de linhas de código. Sabe qual é um dos calcanhares de aquiles de toda IA? Backtracking e memória. As respostas costumam ser boa hoje porque |
| 1:18:56 | ele leva em consideração o texto anterior. Em partes. Existe um limite de quanto consegue voltar atrás no texto anterior. No caso do GPT 3 |
| 1:19:05 | e 4 atual, ele se limita a enxergar uma janela de contexto de no máximo 2048 tokens. E as |
| 1:19:11 | respostas também tem um limite. Quanto mais longo for esse limite, mais caro fica pra processar o resultado seguinte do gerador de palavras, maiores as chances dele começar |
| 1:19:20 | a "esquecer" o contexto e muito maiores as chances de rapidamente perder a coerência |
| 1:19:26 | de respostas longas. Entendam: o GPT atual não tem capacidade de ler mais que 2048 tokens. Então jogar |
| 1:19:33 | o código inteiro da kernel do Linux pra ele analisar, por exemplo, é impossível. E pedir |
| 1:19:38 | pra ele escrever um código desse mesmo tamanho, é mais impossível ainda. Lógico, nada é impossível, mas é altamente improvável. No meu Vicuna rodando local, tem essa tela |
| 1:19:48 | de configuração pra justamente configurar o tamanho da janela de contexto e de resposta. E não é um número muito grande não, |
| 1:19:55 | Num teste não científico, tentei abrir duas janelas do projeto text-generation que é |
| 1:20:00 | a interface web que estou usando em cima do Vicuna. Não sei se é uma precaução da interface web ou uma limitação do próprio Vicuna por baixo, mas só tem capacidade de |
| 1:20:08 | responder uma pergunta de cada vez. Se eu abrir outro navegador e tentar fazer outra pergunta, enquanto na outra janela ele ainda não terminou de responder a primeira, vai |
| 1:20:15 | ignorar e não deixa rodar em paralelo. E mesmo se conseguisse. Só com um único processo de resposta, está consumindo, no |
| 1:20:23 | mínimo, 50% da minha GPU, consumindo mais de 18 gigabytes de VRAM, e enquanto responde |
| 1:20:30 | esse consumo continua aumentando. Ou seja, numa máquina como a minha, ele só consegue responder uma pergunta de cada vez. Você está pensando em fazer um serviço online, |
| 1:20:38 | SaaS, pra vários usuários acessarem? Vai sair super caro, porque só vai possibilitar uma resposta a cada 2 a 5 segundos. Um servidor web pequeno tem capacidade pra responder, |
| 1:20:48 | sei lá, 1000 requisições por segundo ou mais. Mas um Vicuna está mais pra 0.2 requisições |
| 1:20:54 | por segundo. É ridiculamente pesado e não escala. Não lembro que artigo que a OpenAi falava que cada dia de operação do ChatGPT custa |
| 1:21:02 | 1 milhão de dólares. Sim, 1 milhão, por dia. Mais ou menos faz sentido, dado o custo |
| 1:21:08 | de GPU necessário pra responder todo mundo. Mas claro, novas técnicas de otimização tem aparecido, como o exemplo de quantização que expliquei antes, mas estamos falando que |
| 1:21:17 | precisa melhorar ainda umas 10 mil vezes pra ficar economicamente viável pra casos como |
| 1:21:22 | escrever um livro inteiro de 500 páginas, sem perder coerência, ou escrever um projeto de verdade com milhares de arquivos de código. No estágio atual da tecnologia, isso é impossível. |
| 1:21:33 | Essas são só algumas das razões de porque um ChatGPT não vai substituir programadores e outras profissões. A partir de um certo ponto fica tão caro que não compensa, especialmente |
| 1:21:42 | porque como já expliquei, essa ¨inteligência" não é inteligente, só cospe probabilidades. |
| 1:21:48 | Não tem criatividade, não sabe tomar decisões baseadas em coisas como custo-benefício ou |
| 1:21:53 | bom senso. Não vai ter coerência em respostas longas, não tem noção se o código sendo |
| 1:21:58 | cuspido tem segurança, ou escalabilidade. Ela tem memória menor que um peixinho dourado. |
| 1:22:04 | 2048 tokens. Mesmo se aumentar 10x esse limite, ainda é super pouco. O script deste episódio |
| 1:22:10 | tem 15 mil palavras. O ChatGPT é incapaz de escrever meus scripts. |
| 1:22:16 | Mas tudo bem, como uma ferramenta de auxílio, é super boa. Trechos pequenos e repetitivos, |
| 1:22:22 | ou código trivial que facilmente encontramos num stackoverflow repetidas vezes. O estado |
| 1:22:27 | atual de transformers é mais que suficiente pra acelerar um bom profissional. Hoje é impossível e vai continuar sendo impossível alguém que não é programador conseguir |
| 1:22:36 | fazer um projeto complexo inteiro. Qualquer um que diga o contrário não tem a menor noção do que está falando. Considere como os algoritmos funcionam e considere os pontos |
| 1:22:45 | de máximo e mínimo. Não basta dizer "ah, eu tenho esperança, é só ter fé". Precisamos |
| 1:22:50 | de números e os números dizem que é extremamente improvável. Eu uso o GitHub Copilot faz meses. Em vários videos, toda vez que aparece trechos de código, |
| 1:23:00 | usei a ajuda do ChatGPT ou Copilot. Ambos tem plugins pra vários editores como NeoVim |
| 1:23:06 | ou VS Code e funcionam super bem. Tem capacidade de ler o código do arquivo que se está editando. |
| 1:23:12 | Não consegue usar o projeto inteiro de contexto pelos limites que acabei de explicar, mas só de usar o trecho próximo do que está digitando, já ajuda muito. Ou seja, parte |
| 1:23:19 | do prompt é o código do arquivo aberto naquele momento.  Pra mim, vale cada centavo. E todo desenvolvedor que quiser ter vantagens de produtividade, |
| 1:23:28 | deveria considerar usar esses plugins. De novo, não vai conseguir fazer tudo pra você, e por causa da aleatoriedade e alto risco de alucinações, você nunca deve aceitar |
| 1:23:37 | o código que ele sugere sem ler com muita calma antes. Mas pra tarefas bem braçais, tediosas, onde faríamos muito copy e paste, como fazer testes unitários simples, ajuda. |
| 1:23:47 | Testem. Com tudo isso que expliquei, minha conclusão pessoal é que não estamos nada perto do |
| 1:23:52 | que o povo chama de AGI, ou Inteligência Artificial Geral. A IA que vai superar todas |
| 1:23:58 | as IAs. A IA que vai pegar o código inteiro do GPT 4 e sozinho gerar um GPT 5 melhorado. |
| 1:24:05 | O coitado male male tem capacidade de lembrar de um único arquivo de código, que dirá |
| 1:24:10 | milhares. Mesmo se conseguisse, ele não estará "analisando". Ele não analisa nada. Ele não |
| 1:24:15 | sabe analisar. Não sabe as regras de cálculo, as regras de programação. Só sabe juntar |
| 1:24:21 | pedaços que viu repetidas vezes de muitas fontes, 100% via probabilidades. Quando não |
| 1:24:26 | sabe, vai pegar as probabilidades mais próximas e cuspir o que der, e vai ser um texto sem sentido nenhum. |
| 1:24:32 | Vou repetir: transformers não tem inteligência nenhuma de análise e cognição. Ele não |
| 1:24:38 | sabe porque 2 mais 2 é 4, só leu muitas vezes que é, e as probabilidades fazem ele |
| 1:24:43 | repetir isso. GPT quer dizer Transformer Generativo Pré-Treinado. Hoje você entendeu o que esses |
| 1:24:49 | termos significam. E se ficou até aqui, espero que tenha entendido: por mais impressionante que pareçam os textos que gera, é só um gerador de textos, um auto-corretor de teclado |
| 1:25:00 | de celular glorificado. Um gerador de textos nunca vai ser inteligente. Só vai "parecer" inteligente. Assim como |
| 1:25:08 | o formato de animal que você viu numa nuvem foi totalmente um acidente. Ninguém teve a intenção de desenhar um animal na nuvem, sequer é um animal, é só um formato aleatório. |
| 1:25:18 | Foi você que escolheu entender assim.  E foi por isso que no outro episódio de ChatGPT eu afirmei e repito: Seu grau de empolgação |
| 1:25:26 | com IA é inversamente proporcional ao seu entendimento de IA. Quanto menos entender, |
| 1:25:33 | mais empolgado vai ficar. Vai acreditar que as ações da NVIDIA estarem a mais de 400 dólares é normal, porque acredita que negócios de IA vão aumentar absurdamente e em breve |
| 1:25:43 | a ação vai atingir 1000 dólares. Vai investir todo seu dinheiro nisso. Já eu, acho que a ação da NVIDIA está hiper valorizado por puro hype. O preço justo da ação deveria |
| 1:25:52 | ser abaixo de 300 dólares, e vai voltar pra isso uma hora. Não sei quando vai estourar, mas eu estou precavido. |
| 1:25:58 | Não tenho dúvidas que transformers são úteis. Várias ferramentas já estão usando. |
| 1:26:04 | Em particular o Creative Cloud da Adobe tá tirando bom proveito. A Microsoft vai embutir em Office, Windows e tudo mais. Mas no final é isso que vamos ter: um Alexa melhorado. |
| 1:26:14 | Um template mais inteligente de Excel. Mas não ache que vai substituir seu Diretor Financeiro |
| 1:26:19 | e que ele vai conseguir tomar decisões inteligentes. Só parece, por sorte e por acidente. Quem |
| 1:26:25 | apostar em mais do que isso, nas tecnologias atuais, vai perder. |
| 1:26:30 | Pessoalmente eu acho que as tecnologias de transformers e outras que nem mencionei hoje que compõe o que é o GPT, assim como tudo, segue uma curva em S. Passamos pela parte |
| 1:26:39 | do S que é o crescimento que parece exponencial, mas a curva tem um teto em cima. Quando pulamos |
| 1:26:45 | de bilhões de parâmetros pra trilhões de parâmetros, vamos começar a ter retornos diminuídos, diminishing returns. Se amanhã sair um GPT 5 com o dobro de parâmetros, |
| 1:26:54 | sei lá, 300 trilhões, não vai ficar duas vezes melhor. Talvez melhore sei lá, 20%. |
| 1:27:00 | Cada melhoria custa mais caro do que o retorno. Isso é diminishing returns.  Não existe crescimento infinito, e quanto mais rápido você força, só chega mais |
| 1:27:10 | rápido no teto. Precisa acontecer novas descobertas, novas invenções que ainda não conhecemos, |
| 1:27:16 | obviamente, pra ter uma nova etapa de evolução significativa. Enquanto isso não acontecer e só insistir no que temos até hoje, não vai ser muito melhor que isso não. Já estamos |
| 1:27:26 | perto do limite. E AGI não está no horizonte ainda. É a mesma coisa ficar especulando |
| 1:27:31 | se estamos pertos de conseguir construir uma USS Enterprise. É irrelevante, beira ficção |
| 1:27:36 | científica. Acho que já me estendi demais. Como falei no começo do video, eu não sou nem de longe um especialista no assunto, sequer tenho experiência prática de trabalhar em projetos relacionados. |
| 1:27:46 | Meu conhecimento até agora é puramente teóricos. Eu só pesquisei o que existe publicado online. |
| 1:27:51 | Se eu entendi até aqui em poucos dias, quem dedicar algumas semanas vai acabar sabendo muito mais do que eu, muito rapidamente. Não é tão difícil assim. Espero que tenha dado |
| 1:27:59 | pra quebrar alguns mitos que tinham na cabeça e finalmente tenham conseguido separar o joio |
| 1:28:05 | do trigo. Se ficaram com dúvida ou quiserem complementar, fiquem a vontade nos comentários abaixo. Se curtiram o video deixem um joinha, assinem o canal e não deixem de compartilhar |
| 1:28:14 | o video com seus amigos. A gente se vê, até mais. |
