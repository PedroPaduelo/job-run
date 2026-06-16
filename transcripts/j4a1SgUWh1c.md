# De 5 Tera a 25 Giga | Compressão de Dados

- **Canal:** Fabio Akita (@Akitando)
- **URL:** https://www.youtube.com/watch?v=j4a1SgUWh1c
- **Duração:** 1:07:37
- **Fonte:** Painel "Mostrar transcrição" do próprio YouTube (transcrição automática)

> Observação: transcrição automática — pode conter `[ __ ]` (palavrão censurado),
> `[música]` e erros de reconhecimento de fala.

---

## Transcrição (com timestamps)

| Tempo | Texto |
|-------|-------|
| 0:00 | Olá pessoal, Fabio Akita Todo mundo já zipou alguma coisa. Até quem não é programador sabe que existe isso de |
| 0:07 | "zipar" as coisas. Um programador tem que ir um passo além de só acreditar cegamente que as coisas funcionam como mágica. Como funciona compressão de dados? Já pararam |
| 0:16 | pra pensar nisso? Melhor ainda, estamos assistindo um video aqui no YouTube. Como funciona a compressão de video pra possibilitar assistir isso aqui em Full HD ou 4K? Quem estudou ciência |
| 0:26 | da computação provavelmente aprendeu o básico. A idéia do episódio de hoje não é falar de tudo que existe no assunto, mas dar mais noção pra você parar de ficar no escuro |
| 0:35 | e aumentar sua curiosidade pra continuar estudando. (...) Vamos fazer uma conta de padeiro. Digamos que você tem grana sobrando, comprou uma |
| 0:41 | TV nova 4K, e quer assistir filmes em 4K, com 8-bits de cor, em pelo menos 30 quadros por segundo. Um monte de jargão, vamos traduzir. Dizer 4K significa dizer 4 vezes a densidade |
| 0:52 | de pixels de Full HD, High Definition. Full HD é a mesma coisa que 1080p, ou seja 1920 pixels na vertical e 1080 pixels na horizontal. O "p" é de progressivo, antigamente a gente |
| 1:02 | tinha "i" de interlaced ou entrelaçado que ninguém usa mais então nem vou falar disso. Então, 4K é o dobro de resolução na vertical, que dá 3840 pixels e o dobro |
| 1:12 | de resolução na horizontal, que dá 2160 pixels. O agora famoso 2160p. E cuidado que |
| 1:18 | 8K tá chegando. Tá claro que dobrando altura e comprimento, quadruplica a quantidade de pixels né? Geometria |
| 1:25 | do primário aqui. Agora, se você é programador front-end, tá acostumado a cores de 24-bits, |
| 1:31 | onde cada componente de RGB tem 8-bits cada, que são 256 tons pra cada uma das 3 cores |
| 1:36 | primárias, vermelho, verde e azul. Normalmente a gente codifica em hexadecimal, então vai de 00 até FF. Preto é todas as cores zeradas então 000000. Branco é todas as cores no |
| 1:47 | máximo, então FFFFFF. Esse é o básico de CSS que se aprende no dia 1, então vou assumir que todo mundo aqui tá confortável com isso. |
| 1:54 | Significa que cada cor precisa de 8-bits ou 1 byte, total de 3 bytes pra guardar uma cor |
| 1:59 | por pixel. Repetindo, 24-bits é a mesma coisa que 3 bytes. Uma imagem 4K então vai ter |
| 2:05 | 3840 colunas vezes 2160 linhas que dá um total de 8 milhões, 294 mil e 400 pixels. |
| 2:13 | Tudo isso vezes 24 bits por pixel, que vai dar 24 milhões, 883 mil e 200 bytes, ou quase |
| 2:20 | 24 megabytes por imagem. Mas um video são 24 ou 30 desses quadros por segundo. A cada segundo precisaria trafegar |
| 2:28 | 24 megabytes vezes 30 quadros que dá mais de 711 megabytes por segundo! De curiosidade, |
| 2:35 | quanto precisaria ter de SSD aí no seu computador pra guardar um filme de 2 horas então? Só multiplicar por 7200 segundos, que é quantos segundos tem em 2 horas. Então 711 megabytes |
| 2:45 | por segundo vezes 7200 segundos, vai dar a quantidade absurda de 5 milhões de megabytes, |
| 2:52 | ou seja, nada menos que 5 terabytes. Pensa um segundo, se isso fosse verdade, eu tenho certeza que o seu SSD aí na sua máquina |
| 3:00 | não seria capaz de armazenar nem um único filme. Mas eu também sei que você baixa um monte de filmes via Torrent e deve ter uma dúzia nesse instante aí na sua pasta |
| 3:10 | de downloads. Você é um programador, sua função é escovar bits. Como que você escovaria esses 42 trilhões de bits pra caber no seu HD? |
| 3:18 | O campo de compressão de video em particular é um corpo de conhecimento gigantesco, tem centenas de pesquisas e implementações e formas diferentes de resolver o problema. |
| 3:28 | O que eu vou fazer a partir daqui é uma simplificação super grosseira pra vocês entenderem o básico, |
| 3:33 | ter um modelo na cabeça pra ficar mais fácil quando quiserem ler sobre os detalhes avançados depois. Pra quem já é profissional da área, perdoem a simplificação mas é por uma boa |
| 3:43 | causa. Vamos continuar. Eu venho falando faz vários videos que tudo no final vira um linguição de bits. Um computador |
| 3:58 | só entende uma fita de bits, nada mais. E uma fita de bits é nada mais, nada menos que um numerozão gigante de milhões de bits. Veja meus videos sobre a máquina de Turing |
| 4:07 | e a introdução mais hardcore de computadores que soltei alguns meses atrás. Mas entenda que um video é também é só isso, um linguição de bits. Nosso trabalho, como programadores, |
| 4:17 | é representar o mundo em forma de bits e processar esses bits pra tranformar em outros |
| 4:23 | bits mais úteis. Um programa é só uma função, que nem uma equação, que recebe números |
| 4:28 | e cospe números, no caso números em binário, bits. E pra isso você tem que parar de assumir que as coisas são regras escritas em pedra. |
| 4:36 | Por exemplo, se você é só programador de front-end e seu dia a dia é justamente escrever cores em hexadecimal pra RGB, seu mundo é estático em pensar que a única forma de |
| 4:46 | representar cores é juntando 1 byte pra vermelho, 1 byte pra verde e 1 byte pra azul, e acabou. |
| 4:51 | Isso não é verdade. Existem diversas formas de representar cores e RGB é a mais fácil |
| 4:57 | de entender, porque todo mundo misturou tintas na escola em algum momento, mas não é a forma mais eficiente. Aqui começa aquele troço que todo iniciante não entende chamado |
| 5:06 | "abstrações". Vamos ver na prática o que isso significa. E se eu quiser gastar menos bits por cor? Podemos diminuir de 24-bits pra digamos, 12-bits. |
| 5:15 | Daí em vez de gastar 3 bytes no total, vamos gastar só 1 byte e meio, metade do espaço. |
| 5:21 | Só que as possibilidades de cores não cai pela metade. Lembra, são potências de 2. Ou seja, caimos de um total de mais de 16 milhões de cores pra só umas 4 mil cores. |
| 5:30 | Pra economizar metade do espaço de bytes, perdemos milhões de possibilidades de cores. |
| 5:35 | É parecido quando se converte uma foto pra um GIF, que vou explicar sobre mais pro fim. Mas 4 mil cores é muito pouco hoje em dia. Pra fazer jogo de Nintendinho em pixel art |
| 5:44 | tá mais que bom. Mas pra editar fotos, é impossível. É muito pouca informação de |
| 5:49 | cor. Até um amador consegue ver uma foto com paleta de 4 mil cores e dizer que a qualidade é inaceitável. |
| 5:55 | Então não dá pra cortar bits do RGB, cada bit que eu corto, divido o total de cores por 8. Fodeu então? Não. No caso de video não se usa RGB e sim outra representação |
| 6:05 | chamada YUV, alguns já devem ter visto esse nome. Mas simplificando a idéia é dividir a cor em 2 grandes componentes, a luminância que é o brilho ou luma e o chroma, que é |
| 6:16 | representado por diferença de azul e diferença de vermelho. Quando se fala em color science, é aqui que isso começa. Em vez de pensar em cores como mistura de tintas, imaginamos |
| 6:25 | cores como a distância pro ponto mais branco num espaço tridimensional. Se você é fotógrafo ou algo assim já deve ter ouvido falar em coisas como sRGB, Adobe |
| 6:35 | RGB ou DCI-P3 que é color gamut ou gama de cores, que é um subconjunto do total teórico |
| 6:42 | de cores possíveis de existir no espaço de cores. YUV representa numericamente todas |
| 6:47 | as cores teóricas e color gamut como Adobe RGB é o que realmente é possível de mostrar |
| 6:52 | num determinado monitor. Essa parte é bem longa, tem que passar por coisas como correção de gama, mas na prática se você não sabe a importância de DCI-P3 contra sRGB, é porque |
| 7:03 | pra você isso não faz diferença. Só fotógrafos e coloristas profissionais que precisam saber os detalhes disso. |
| 7:09 | YUV vem da era de TV preto e branco e como fazer broadcast de video, daí já existia o conceito de luma, já que não tinha cores, ou chroma, ainda. Em YUV o Y é o luma, U |
| 7:20 | é a projeção de azul e V é a projeção de vermelho. Em resumo, converter de RGB pra |
| 7:26 | YUV é multiplicar o RGB por esta matriz aqui. Eu sei, assusta pra quem nunca viu Álgebra |
| 7:31 | Linear. E converter de volta pra RGB é só inverter e multiplicar YUV por esta outra matriz. É uma conversão linear, um pra um, sem perder informação nenhuma. Se nunca |
| 7:41 | pensou nisso, RGB é uma coordenada em 3 eixos de cor num espaço tridimensional, um vetor. |
| 7:47 | Pra visualizar, vejam esta imagem, um quadro de um video. Se separar em RGB, teríamos |
| 7:53 | esse quadro representando só o componente vermelho, este só o verde e este outro só |
| 7:58 | o azul. É como você pensa em canais no Photoshop, cores primárias sendo misturadas. Mas depois |
| 8:04 | de converter pra YUV, agora este é o Y ou luma, que seria a imagem preto e branco e tons de cinza. Este é o quadro de projeção de azul e este outro o de projeção de vermelho, |
| 8:15 | que é o componente UV ou chroma. Junte os 3 e temos a imagem original de volta. |
| 8:21 | Lembram DVD player antigo ou video game antigo? Antes de existir HDMI como que vocês ligavam |
| 8:26 | os aparelhos na TV? Quando era modelo barato era só um cabo com conector RCA, o cabo composite |
| 8:32 | ou composto. Mas tinha modelos melhores, com 2 ou 3 cabos RCA separados. Alguns poderiam |
| 8:37 | chutar que era RGB, sinal de uma das 3 cores primárias em cada cabo. Mas não, é um cabo |
| 8:43 | pra luma, e os outros dois pra chroma. Por isso algumas TVs podiam até ter escrito atrás |
| 8:48 | YCrCr que é a mesma coisa que YUV. Sem entrar em detalhes sobre correção de gama, color space e outros detalhes, o que |
| 8:56 | ganhamos fazendo isso? Beleza, convertemos um número de RGB em outro número em YUV, |
| 9:01 | mas continua usando os mesmos 24-bits. "Tomeito, tomáto". Não mudou nada. Ah, mas agora |
| 9:07 | vem o pulo do gato. Na ciência de cores, pesquisas mostraram que o olho humano é mais sensível a mudanças de luma do que de chroma. Ou seja, o componente Y é muito mais importante |
| 9:18 | que U e V. Em RGB a informação de brilho vem embutido em cada cor primária, e quando |
| 9:24 | convertemos em YUV o que fizemos foi retirar essa informação pra um número separado de luma. |
| 9:30 | Vejam de novo a separação de canais, a imagem preto e branco é super nítida, conseguimos |
| 9:35 | saber o que é. Mas agora olha os componentes de chroma, difícil de discernir o que estamos vendo né? Principalmente os detalhes. O mesmo não acontece se vermos os canais separados |
| 9:45 | de RGB, porque a informação de luma está distribuido nas 3 cores primárias. Tão começando |
| 9:50 | a ver a vantagem de representar a mesma informação de jeitos diferentes? RGB é mais fácil de |
| 9:55 | descrever mas YUV vai ser mais fácil de manipular como vamos ver já já. |
| 10:00 | Já tentou ligar seu computador no HDMI da sua TV velha, que não tem um modo game? Já |
| 10:06 | notou que assistir videos é normal, fica bonito. Mas quando liga o computador pra digitar um email as letras ficam todas meio borradas? Isso acontece porque sua TV é YUV 4:2:0. |
| 10:16 | E o que significa isso? Pra entender vamos voltar pra RGB. Quando falamos em RGB estamos |
| 10:21 | falando de 8-bits cor primária. Quando falamos de YUV estamos falando de samples ou grupos de 4 pixels organizados em duas linhas. Nesta primeira imagem temos o formato não comprimido, |
| 10:32 | logo depois da conversão de RGB, que chamamos de 4:4:4, toda a informação de luma e de |
| 10:38 | chroma preservados. Agora, já disse que as pesquisas mostraram que nossos olhos são mais sensíveis a mudanças |
| 10:44 | de luma do que de chroma. E se mantivermos a mesma quantidade de bits pra guardar luma |
| 10:49 | então, garantindo a definição da imagem, e diminuirmos a quantidade de bits pra guardar chroma? Daí podemos pular pro esquema 4:2:2 que nem podemos ver aqui. Notem o importante, |
| 11:00 | a informação de luma continua a mesma, mas cortamos chroma pela metade nesse sample, |
| 11:05 | nesse grupo de pixels. Isso economiza um terço de bytes e caímos dos 48 bytes pra 36 bytes. |
| 11:11 | Mas dá pra melhorar. Veja que perdemos muito menos informação do que quando tentamos cortar bits de RGB. |
| 11:17 | O que as pesquisas mostraram é que podemos cortar ainda mais no chroma e com isso chegamos ao formato YUV 4:2:0 que toda TV usa, que cai dos 48 bytes originais pra 30 bytes. Eu |
| 11:28 | não tô muito certo dessa conta, mas é nessa faixa. Outra coisa é que o 2 e zero no 4:2:0 |
| 11:34 | não se refere ao total de pixels. É como se fosse uma proporção. O primeiro 4 se refere a todos os 4 sample de pixels originais do canal de luma. O segundo 2 é o número |
| 11:43 | de samples de chroma na primeira linha. O terceiro 0 é o número de mudanças dos samples |
| 11:48 | de chroma entre as duas linhas, no caso 0 mudança no formato 4:2:0. |
| 11:53 | Se pareceu complicadinho é porque é mesmo. O que chamamos de YUV na realidade é o padrão |
| 11:58 | YCbCr às vezes chamado de YCC e é tudo a mesma coisa. Mas não confundir com YPbPr |
| 12:06 | que era o padrão mais antigo. Além disso eu falei que tem vários detalhes como correção de gamma e color space, que define padrões como o Rec. 709 que é o que todo mundo usa |
| 12:16 | pra videos normalmente, como aqui no YouTube. Na prática, convertendo de RGB pra YUV 4:4:4 |
| 12:22 | é um pra um, visualmente e em quantidade de bytes, não muda nada. Mas mantendo o luma em 4 e descendo chroma pra 2:0, economizamos uns 40% de dados sem |
| 12:33 | mudanças perceptíveis pra um ser humano, especialmente num video em movimento. Por isso a maioria das TVs é 4:2:0, por isso que video de DVD, Blu-Ray, streaming, incluindo |
| 12:43 | esse aqui do YouTube é encodado em YUV 4:2:0, segundo o padrão Rec. 709. E por isso eu |
| 12:49 | falei que quando se liga um computador numa TV que não suporta modo de game, PC, ou mais corretamente, YUV 4:4:4, as letras e detalhes precisos vão ficar meio borrados. Como 4:2:0 |
| 13:00 | precisa de menos dados pra representar, é ideal pra fazer broadcast ou streaming ou guardar arquivos de video, porque precisa de menos banda e menos espaço sem quase perder |
| 13:09 | qualidade do video, com exceção de detalhes pequenos, como letras e fontes pequenas. |
| 13:14 | Cada um dos componentes de YUV é representado por samples, e de 4:4:4 pra 4:2:0 estamos |
| 13:21 | diminuindo samples do chroma então chamamos esse processo de Chroma Subsampling. Repetindo, |
| 13:26 | estamos diminuindo bits de cor e mantendo bits de brilho pra ter praticamente a mesma imagem aos nossos olhos usando menos bits. Tudo que você achava que era RGB na verdade |
| 13:37 | é YUV 4:2:0. Quando converte de 4:2:0 de volta pra RGB pra editar, ele completa os |
| 13:43 | bits dos samples que faltam, duplicando dos que sobraram, então só aumenta o tamanho de bits mas não recupera o chroma perdido, lógico. Guarde essa informação. |
| 13:53 | Agora pára e pensa, um video é basicamente um conjunto de imagens. No nosso exemplo, imagens 4K. E precisa de 30 dessas imagens todo segundo pra termos algo em movimento |
| 14:03 | suave como vemos na TV. Se a gente consegue reduzir 40% de todas as imagens, o video inteiro |
| 14:09 | também fica 40% menor, portanto aqueles 5 terabytes pode cair pra até 3 terabytes, |
| 14:15 | olha só que sensacional. Só que 3 tera ainda é absurdo pra 2 horas de video, continua não cabendo aí no seu computador. Como que faz então? |
| 14:23 | Antes de continuar deixa eu introduzir mais um jargão pra vocês. A compressão de cores ou downsampling, que é descer o números de samples de chroma, é só uma técnica |
| 14:32 | pra economizar bits jogando fora informação que nossos olhos não são bons de detectar. |
| 14:37 | Isso significa que uma vez feito o downsampling, não tem mais como voltar pra imagem original, |
| 14:42 | porque os detalhes originais foram simplificados. Isso é uma compressão que chamamos de lossly, ou seja, que perde informação. |
| 14:49 | Mas podemos ir além de chroma downsampling. Uma das principais funções de computadores é representar o mundo natural, analógico, contínuo, pro mundo digital, que é discreto |
| 15:00 | e exato. Quando falamos em pixels, estamos arbitrariamente pegando a luz que chega de algum objeto e dividindo pacotes de luz em pixels, que é uma medida exata e discreta. |
| 15:10 | Temos uma representação digital perto o suficiente pra ser convincente pros nossos olhos. Quanto mais pixels ou samples tivermos, quanto mais resolução, mais enxergamos a |
| 15:21 | imagem como realista. O mesmo vale pra outras coisas da natureza que queremos digitalizar como música e sons |
| 15:27 | em geral. Se aprendeu física acústica no colegial vai lembrar que sons ou ondas representamos |
| 15:33 | com um gráfico de curvas, senos, cossenos, radianos. Se já abriu qualquer editor de |
| 15:38 | áudio como um Audacity ou Adobe Audition, já viu essa representação de ondas. E qualquer |
| 15:44 | engenheiro de áudio sabe o que precisa fazer quando recebe onda analógica pra processamento |
| 15:49 | digital: transformada de Fourier. Eu mesmo não lembro mais quase nada de Fourier que aprendi na faculdade, mas acho que o principal |
| 15:56 | é o seguinte. Da mesma forma que uma imagem não é formada de pixels discretos, uma onda |
| 16:01 | de som também é contínua, mas num computador precisamos representar de forma discreta. |
| 16:07 | Por isso que uma curva bonitinha como dessa imagem, uma linha contínua, pro computador |
| 16:12 | fica tipo uma escadinha, que é um intervalo de valores discreto que mais ou menos representa |
| 16:18 | essa curva original. Lembra quando eu falo que precisa pelo menos ter uma intuição matemática? Se gastou tempo estudando coisas como cálculo, enxergar isso deveria ser trivial. |
| 16:27 | Assim como temos samples pra representar som, samples de pixels por segundo representa video. |
| 16:33 | Em video também representamos um movimento contínuo em quadros por segundo discretos. |
| 16:38 | Quanto mais quadros por segundo pudermos ter, mais o movimento fica suave. Mas convencionamos |
| 16:44 | uns 30 quadros por segundo que já é suficiente pra gente conseguir assistir um filme sem achar estranho. Quadros por segundo é uma medida de frequência. 30 quadros por segundo |
| 16:53 | seriam 30hz. Um game precisa de no mínimo uns 60 quadros por segundo pra ficar bom de |
| 16:59 | jogar, por isso compramos monitores de 60hz ou mais. Quanto mais samples puder ter, maior a resolução, mais preciso vai ser o video ou áudio. A |
| 17:09 | convenção da qualidade de CD de música é de 44.1khz, com samples de 16-bits, ou |
| 17:15 | seja 44 mil e 100 samples por segundo, ordens de grandeza mais samples por segundo que video, |
| 17:21 | mas cada sample ocupa bem menos espaço. Pelo jeito precisamos de bastante resolução pra enganar nossos ouvidos. Música HiFi que é o equivalente 4K da música, são pelo menos |
| 17:31 | 192 khz com samples de 24-bits. Voltando pra CD, 16-bits vezes 44 mil e 100 dá 86 kilobytes por segundo. Um álbum de |
| 17:41 | 24 músicas de 5 minutos cada, ou seja, 7200 segundos, vezes os 86 kilobytes por segundo |
| 17:48 | vai dar aproximadamente 604 megabytes, que se você cresceu nos anos 90 e começo dos |
| 17:53 | 2000 vai lembrar que um CD cabia 650 megabytes, por isso só isso de música já enche um |
| 17:59 | CD. Era até engraçado porque antigamente tinha consoles como o Sega CD ou 3DO. Esses |
| 18:04 | consoles não tinham potência pra ler arquivo de áudio comprimido tipo os mp3 de hoje e descomprimir em tempo real, por isso o áudio era sempre crú, descomprimido. |
| 18:14 | Se tivesse as 24 faixas na trilha sonora, ocupando 600 mega, sobrava menos de 50 mega |
| 18:19 | pro jogo em si. Por isso que cabia, porque um cartucho de megadrive não era muito mais que uns 2 megabytes, daí cabia fácil num CD de Sega CD. Mas eu tô fugindo do assunto. |
| 18:30 | Mencionei áudio pra explicar que tudo analógico, imagem, video e áudio migram do mundo contínuo |
| 18:36 | pro mundo discreto e no caso de áudio, todo engenheiro sabe analizar ondas usando transformada |
| 18:41 | de Fourier, mais especificamente transformada discreta de Fourier pra representar um período |
| 18:47 | de samples de onda como equações lineares. Eu não tenho a matemática pra conseguir explicar isso fácil mas entenda que é uma |
| 18:54 | conversão de sinais analógicos contínuos num domínio de frequências discretas, ou |
| 18:59 | seja, dividir uma onda contínua de som em conjuntos de bits discretos. Pra quem estudou |
| 19:05 | matemática, não dá pra representar todos os infinitos pontos de uma curva em conjuntos de números discretos, mas podemos achar as equações que geram esses pontos em determinado |
| 19:14 | momento do tempo. O problema de transformada discreta de Fourier é que o cálculo disso é lento. Consoles |
| 19:21 | e micros antigos dos anos 80 não tinham como calcular em tempo real. Mas nos anos 60 descobriram |
| 19:26 | uma aproximação que é ordens de grandeza mais fácil de calcular, pulando da complexidade |
| 19:31 | quadrática da transformada discreta de Fourier pra complexidade logaritmica, N.log N que |
| 19:37 | é a transformada rápida de Fourier ou Fast Fourier, que é considerado o algoritmo numérico |
| 19:43 | mais importante já criado. Quando falam se é importante entender matemática e tals, esse é "o" caso mais importante em |
| 19:49 | processamento digital e se tiver interesse em pelo menos ter uma intuição visual de como enxergar uma transformada de Fourier eu recomendo muito os videos do Grant do canal |
| 19:59 | 3Blue1Brown. Ele é o melhor professor de matemática que já vi no YouTube e em particular |
| 20:04 | sobre Fourier tem uma forma visual animada que vai te dar uma imagem mental muito melhor |
| 20:09 | do que eu jamais conseguiria. Muito bem, vamos voltar. Porque falei todo esse mambo jambo de matemática? Porque grupos |
| 20:16 | de pixels em imagens podemos tratar como séries de frequências também. Falando em resumo, |
| 20:22 | bem resumido, estamos com nossa imagem gigante de 4K depois de fazer color downsampling pra |
| 20:27 | YUV 4:2:0. O que podemos fazer agora? Transformada Discreta e Transformada Rápida de Fourier transformam ondas contínuas em |
| 20:35 | uma representação de uma série discreta. Quando falamos em ondas, falamos de senos e cossenos. E nessas equações estamos considerando duas dimensões, por isso são equações |
| 20:44 | de números complexos. Lembra número complexo, que tem um componente que é um número real e outro que é um número imaginário. |
| 20:50 | Quando vamos mexer com imagens só precisamos de uma dimensão de números reais e por isso |
| 20:55 | em vez de DFT ou FFT podemos usar DCT que é transformada discreta de cosseno. Em áudio |
| 21:02 | usamos FFT não só pra representar o áudio analógico de forma digital mas também pra fazer DSP ou processamento digital de sinais, por exemplo, decompondo uma onda em ondas |
| 21:12 | mais simples usando senos e cossenos. E de novo, eu to simplificando grosseiramente, |
| 21:17 | mas é assim que fazemos coisas como denoising que é redução de ruído, equalização e tudo mais. |
| 21:23 | Pois bem, com DCT que é a transformada discreta de cosseno vamos decompor o luma e chroma |
| 21:28 | de cada imagem em uma soma de funções de cosseno de diferentes frequências. Fodeu |
| 21:33 | né. Calma que é complicado mesmo, mas pra visualizar não é tanto assim. Como uma imagem pode ter qualquer dimensão, o algoritmo começa dividindo a imagem em blocos de 8 por 8 pixels. |
| 21:44 | Não importa se é uma imagem pequena do tamanho de um ícone ou gigante do tamanho de uma TV 8K. Vamos sempre trabalhar em blocos de 64 pixels de cada vez. Em computação a gente |
| 21:54 | sempre usa a estratégia de dividir e conquistar. Nenhum trabalho é tão grande que não possa ser quebrado e atacado um pedaço de cada vez. |
| 22:02 | Agora o trabalho da fase de DCT é quebrar os canais de luma, chroma azul, chroma vermelho |
| 22:07 | em uma soma de funções de cosseno. Simplificando, essas funções de cosseno podemos ver visualmente |
| 22:13 | nesta imagem também de 8 por 8 imagens. É uma tabela pré-calculada, não se preocupem |
| 22:19 | agora como ela foi criada, só aceitem que existe. Cada quadrado representa uma onda |
| 22:24 | diferente, a tal função de cosseno, em duas dimensões. Lá no canto superior esquerdo é todo branco, normalmente o componente mais usado. E lá embaixo é uma pattern que parece |
| 22:34 | tabuleiro de xadrez ou damas, um checkerboard. Temos que processar os 3 canais de YUV, mas vamos pegar primeiro um bloco de 8 por 8 pixels |
| 22:42 | só do canal luma, que é a camada preto e branco. E vamos representar cada pixel pela intensidade de preto até branco, indo de 0 até 255. Na real acho que é de 16 até |
| 22:52 | 235 ou algo assim por conta de correção de gama mas não interessa agora. Funções |
| 22:57 | de cosseno, você lembra que é em radianos no eixo X, por exemplo Pi que é 180 graus e 2 Pi que é 360 graus. Mas no eixo Y vai de -1 até 1 positivo. |
| 23:09 | Então a primeira transformação que precisamos fazer pra cada pixel no nosso bloco é substrair por 128 pra dar números que vão de -128 até 127. Agora usando DCT, e aqui é a parte |
| 23:20 | que vai ser uma caixinha preta que vocês vão ter que acreditar que funciona, vamos criar uma nova matriz de 8 por 8 com os pesos pra cada uma das imagens de frequência de |
| 23:29 | base. Cada uma das imagens dessa tabela contribui um pouco pra reconstruir a imagem original. |
| 23:35 | Se não ficou claro, veja esta imagem de uma pequena letra "A". Pegando cada uma daquelas imagens bizarras de cosseno que eu falei e aplicando os pesos ou coeficientes e somando |
| 23:44 | um em cima do outro, no final eu reconstruo o "A" original, sacaram? Se você é de CSS, de novo, é como se esses coeficientes fossem o tanto de RGB, o tanto |
| 23:55 | de vermelho, o tanto de verde e o tanto de azul que precisa misturar pra fazer, por exemplo, marrom escuro. É o peso de cada cor. A diferença é que em vez de misturar, ou seja, somar |
| 24:04 | componentes de cor, estamos somando tipo funções de cosseno, usando esses pesos pra dizer quanto |
| 24:10 | que cada função contribui pra reconstruir a imagem original. A matriz de coeficiente resultante é interessante pela forma como essa base de funções de |
| 24:19 | frequência é construído, blocos mais lá pro canto superior esquerdo tentem a contribuir |
| 24:24 | mais pra reconstruir nosso bloco original de 8 por 8, por isso usamos coeficientes maiores. |
| 24:30 | Mas os blocos mais lá pro canto inferior direito, contribuem pouco, são funções de alta frequência. E faz sentido, essa tabela base foi construída de tal forma a separar |
| 24:40 | componentes de baixa frequência e de alta frequência. Mesmo se você não for de computação já deve ter ouvido que animais, como cachorros, |
| 24:47 | conseguem ouvir sons de alta frequência que nosso ouvidos humanos não conseguem ouvir. Mesma coisa pra luz, a luz visível é só uma faixa pequena de todas as frequências |
| 24:56 | de cores. E sim, lembra que luz é uma onda, assim como som é uma onda. Ondas de baixa |
| 25:02 | frequência começam lá atrás na faixa dos raios gama, depois raios x, depois ultravioleta, |
| 25:08 | aí chegamos na minúscula faixa que é a luz que nós conseguimos enxergar, mas daí vai pro infravermelho até ondas de rádio. |
| 25:15 | E mesmo na faixa visível, nas bordas com o ultravioleta e infravermelho é difícil |
| 25:20 | de distinguir um limite. Essas faixas não são discretas, tipo "a partir exatamente deste ponto que a gente não consegue ver". Vai variar. E essa tabela base é feita pra |
| 25:29 | quando calcularmos a tabela de coeficientes, os números que se aproximam do canto inferior |
| 25:35 | direito sejam cores de alta frequência que a gente não consegue distinguir direito, mais uma vez, depois de anos de pesquisa, sabemos o que não conseguimos enxergar. Assim |
| 25:44 | como na fase de color downsampling já reduzimos o chroma, agora vamos reduzir mais ainda nos |
| 25:50 | 3 canais. E isso foi pra um bloco de 8 por 8 pixels da imagem. Agora precisa repetir a mesma coisa |
| 25:56 | pra todos os outros blocos que formam a imagem, em todos os 3 canais de luma e chroma. Fazendo |
| 26:01 | tudo isso, até agora não comprimimos nada, só processamos os números que representam cada pixel de cada canal em outro número processando com a transformada discreta de |
| 26:11 | cosseno. Mas o pulo do gato vem agora. Lembra quando você vai salvar uma imagem em JPEG e o Photoshop ou outro programa pede pra escolher se quer salvar em alta qualidade ou baixa |
| 26:21 | qualidade, e tem um slider pra escolher algum valor no meio? E normalmente você escolhe lá pelos 80% porque você acha que isso vai salvar 80% dos detalhes do original? |
| 26:31 | Pois é, essa é a fase chamada de quantização. Na prática é uma divisão de matriz. Um exemplo é essa tabela aqui. Notem que os números mais perto do canto superior esquerdo |
| 26:40 | são menores e os próximos do canto inferior direito são maiores. Lembra as tabelas resultantes |
| 26:45 | de coeficientes pra cada bloco de 8 por 8 pixels? Pois bem, vamos dividir cada número por cada número correpondente nessa tabela de quantização. Cada nível de qualidade, |
| 26:55 | tipo os 80% que você escolheu pra salvar no Photoshop é uma tabela diferente. Quanto menor a qualidade, maiores os números dessas tabelas de divisão. |
| 27:04 | Dividindo um número por outro grandão o resultado vai ser um número bem pequeno. Se der quebrado, arredonda pro inteiro mais próximo. Isso significa que os coeficientes |
| 27:13 | mais próximos do canto interior direito vão ficar pequenos, ou melhor ainda, zerados. |
| 27:18 | É aqui que começa a fase real de compressão. Olha só o resultado da divisão, uma boa |
| 27:23 | parte dos números fica zerado e não tem problema porque elas contribuem pouco na reconstrução da imagem, no sentido que os detalhes que acrescentam, nossos olhos não distinguem |
| 27:33 | tão bem. A tal da região da alta frequência. Vamos fazer essa divisão pra todos os blocos que compõe a imagem original. E como último |
| 27:41 | truque, vamos rearranjar esses pixels de lugar. Lembra que a imagem toda é só um linguição |
| 27:46 | de bits? Onde cada grupo de uns 16 bits representa um pixel em YUV? A gente só tá mostrando |
| 27:52 | elas quebradas em linha, formando um retângulo, pra ficar fácil de ver mas na realidade é uma linha atrás da outra no binário. E cada bloco de 8 por 8 pixels representa um pedaço |
| 28:02 | de cada linha. Em vez de escrever uma linha de cada vez, vamos reescrever esse bloco em zigue zague, começando do canto superior esquerdo e descendo até o canto inferior |
| 28:12 | direito. Isso pros zeros ficarem um atrás do outro. Na transformação de cosseno a gente fez de propósito os coeficientes que virariam |
| 28:20 | zero na divisão ficarem mais acumulados num canto. A ordem que se escreve os bits não |
| 28:26 | é importante contanto que na hora de ler de volta seja na mesma ordem, claro. E de novo, até este ponto ainda não comprimimos nada, só fizemos preparativos. Lembra que |
| 28:35 | partimos de um bloco de 8 por 8 pixels e chegamos no mesmo bloco de 8 por 8 pixels. Nada mudou |
| 28:40 | ainda. Depois de fazer o zigue zague olha o que aconteceu, temos um array onde os números mais pro fim |
| 28:46 | tem sequências de zeros. Agora sim, vamos pra compressão. O primeiro algoritmo é mais intuitivo. Vamos pegar um outro exemplo com uma string aleatória com sequências repetidas, |
| 28:56 | tipo um "AABCDDDDEFFFFFGGGH" que tá aqui do lado com 18 caracteres. Concorda que poderíamos |
| 29:04 | reescrever por exemplo como "A2B1D4E1F5G3H1". Ou seja, em vez de repetir F, 5 vezes, escrevemos |
| 29:13 | F5 pra indicar que é pra repetir 5 vezes. Descemos de 18 caracteres e comprimimos pra |
| 29:18 | 14, um ganho de 22%, mas isso porque essa string é curtinha, quanto maior for e quanto |
| 29:24 | mais sequência repetidas tiver, mais comprimida fica. Esse é um dos algoritmos mais simples e ingênuos de compressão lossless, ou seja, que não |
| 29:32 | perde nenhuma informação, diferente de chroma subsampling que fizemos lá no começo. Da |
| 29:38 | string comprimida podemos voltar pra original sem muito trabalho. Voltando pro nosso bloco de coeficientes divididos depois da quantização, aquelas sequências de zeros repetidos podemos |
| 29:48 | fazer a mesma coisa e isso já vai nos dar um pequeno ganho. Esse algoritmo se chama Run Length Encoding ou codificação de corrida de comprimento. |
| 29:57 | O pior caso desse algoritmo obviamente é se a string original tiver alta entropia e quase nenhuma sequência repetida. Mas o próximo algoritmo é mais interessante e se aprende |
| 30:07 | na ciência da computação. E começa criando uma tabela de frequência. No mesmo exemplo da string, vamos contando letra a letra e ordenando pela frequência vamos ter B 1, |
| 30:17 | C 1, E 1, H 1, A 2, G 3, D 4, F 5 Agora vamos montar uma árvore binária de frequências. Começa pegando do começo dessa |
| 30:25 | lista, O B e o C que só aparecem 1 vez cada e coloca embaixo de um nó que é a soma das |
| 30:31 | frequências, no caso 2. Agora pegar o E e H que também só aparecem 1 vez e colocar embaixo de outro nó 2. Agora tem vários com frequência 2, meio que tanto faz, mas |
| 30:41 | na ordem pegamos o nó 2 do E e H que acabamos de criar, o A que aparece 2 vezes no texto |
| 30:46 | e colocamos embaixo de um nó 4 que é a soma das frequências. Continuando, pegamos o nó 2 do B e C e a próxima frequência 3 da letra G e colocamos |
| 30:55 | embaixo de um nó que a soma dá 5. Temos 2 nós 4, do A, E e H e do D, colocamos embaixo |
| 31:02 | de um nó com soma 8. Depois pegamos a sub-árvore do B, C e G e o F que tem frequência 5 também |
| 31:08 | e colocamos embaixo de outro nó com soma 10. E finalmente pegamos os nós resultantes |
| 31:13 | 8 e 10 e colocamos embaixo da raíz 18, e formamos uma árvore binária de frequências. |
| 31:19 | Agora pra que tivemos esse trabalhão todo? Como que o computador enxerga aquela nossa string original "AABCDDDD" etc? Digamos que |
| 31:27 | está representada como caracteres UTF-8. Lembra Unicode? Computadores não entendem letras, só números. Nós, programadores, que precisamos enxergar uma sequência de |
| 31:36 | números e pedir pra ele desenhar ou processar alguma coisa. Sendo simplista, por convenção |
| 31:42 | usamos uma tabelona gigante que é a UTF-16, que associa um número com até 2 elevado |
| 31:47 | a 16 possíveis glifos, mais de 65 mil possíveis glifos. Um glifo é basicamente o desenho de um caracter. UTF é uma tabela arbitrária que usamos por |
| 31:58 | convenção e todo programa e sistema operacional traduz da mesma forma. O glifo da letra A maiúsculo em inglês é o ponto de código 0041 em hexadecimal. O glifo da letra B maiúscula |
| 32:10 | é 0042 e assim por diante. Então, em hexadecimal o string AABC etc fica 4141 4243 e assim por |
| 32:18 | diante. Mas lá embaixo, no nível do computador mesmo, ele enxerga em binário, zeros e uns, então fica um linguição tipo 0100 0001 0100 0001 0100 0010 e assim por diante. |
| 32:26 | No mínimo, o código que representa cada letra, vai ocupar 8 bits se o encoding for em UTF-8. Cada letra ocupa 1 byte portanto a string inteira ocupa 18 bytes. Mas e se |
| 32:37 | eu esquecer UTF-8 e usar outra tabela com códigos que precisam de menos bits? É pra |
| 32:43 | isso que criamos essa árvore binária de frequência. Ela que vai servir pra codificar o A, B, C etc com outro código diferente da UTF-8. Vamos ver como. |
| 32:53 | Começamos da raíz da árvore que é o nó 18 lá em cima e vamos descendo. Cada galho vai representar zero ou um. Se eu for pra esquerda vai ser zero, pra direita vai ser |
| 33:02 | 1. Então vamos lá, qual vai ser o código binário pro A? Em UTF-8 é 0100 0001, 8 bits. |
| 33:08 | Vamos lá começando do nó 18, um galho pra esquerda, então 0. Mais um pra esquerda, 0 de novo. Esquerda, 0. Esquerda 0. Então o código pro A vai ser 0000. Logo de cara |
| 33:20 | já economizamos metade do espaço. Daí tem A de novo, então 0000. Agora o B, da raíz vai pra direita, então 1. Daí tem |
| 33:27 | mais 3 galhos pra baixo pra esquerda, então 3 zeros e o código pro B vai ser 1000. O |
| 33:33 | C mesma coisa, começa pra direita então 1, desce dois galhos pra esquerda, então 0 e 0, e vira pra direita no final então 1. Portanto o código do C vai ser 1001. Mas |
| 33:44 | começa a ficar divertido agora, porque temos uma sequência de 4 Ds. O código do D é começando pra esquerda 0 e indo pra direita que é 1, portanto o código do D é 01. Repetido |
| 33:53 | 4 vezes fica 01010101. 8 bits, pra 4 letras. Agora começaram a entender? |
| 34:00 | Antes esse D seria o hexadecimal UTF-8 0044 que em binário é 0100 0100, 8 bits. Como |
| 34:07 | são 4 Ds tó esse trecho ocuparia 4 bytes. Mas nesse sistema de encoding da árvore de |
| 34:13 | frequência codificamos o D somente com 2 bits. Todas os 4 Ds vão ocupar um único |
| 34:19 | byte, então esse trecho ficou 4 vezes menor! E pra não ficar tedioso vou parar por aqui mas é pra fazer a mesma coisa letra a letra, usando a árvore como o sistema de codificação. |
| 34:28 | No final vai ficar esse binariozão. Olha como o F que repete 5 vezes também ficou curtíssimo com 2 bits cada letra. E não é por acaso que o D e o F, que são as letras |
| 34:38 | que mais repetem, sejam representados só com 2 bits enquanto letras que não repetem tanto como o A ou C precisam de 4 bits. Porque a árvore foi ordenada e montada de tal forma |
| 34:50 | que as letras mais comuns fiquem mais próximos da raíz da árvore, precisando de menos galhos pra chegar neles. O string original tinha 18 letras, portanto 18 bytes. Agora o binário |
| 34:59 | comprimido ficou só com 60 bits que é 12 bytes, economizamos 6 bytes nessa brincadeira |
| 35:04 | que é 2/3 do tamanho original. 0000 0000 1000 1001 01 01 01 01 0010 11 11 11 11 11 101 0011 Pra strings pequenas assim esse sistema não compensa porque pra conseguir descomprimir |
| 35:11 | precisa também salvar a estrutura da árvore junto, e vai dar mais que os 18 bytes originais. |
| 35:17 | Mas em textos mais longos isso pode diminuir tudo em até umas 5 vezes. Pensa um arquivo |
| 35:23 | de código fonte, ou um JSON, que só de identação tem um monte de espaço em branco. Espaço |
| 35:28 | em branco, tabulação, tudo é um caracter e tudo ocupa espaço, mesmo o que você não |
| 35:34 | enxerga. Com uma combinação de Run Length e esse sistema de árvore de frequência que se chama |
| 35:39 | codificação de Huffman, dá pra comprimir bastante. Depende do texto, claro, alguns |
| 35:45 | dá pra comprimir mais, outros menos. Huffman é um bom exemplo de porque todo programador precisa saber o que é uma árvore. E por isso eu fiz um vídeo só falando de árvores |
| 35:54 | algum tempo atrás. Todo mundo pensa em tabelas como uma matriz, um array de array, mas uma |
| 36:00 | tabela ordenada, de chaves e valores, costuma ser implementada como uma árvore. |
| 36:06 | Se estão curiosos em como descomprime, é fácil. Vamos lá, 0000 significa começar |
| 36:11 | da raíz e descer pra esquerda 4 vezes, aí esbarra no A, então escreve A e volta pra raíz. Vem 0000 de novo, vai chegar no A de novo, concatena com o A anterior, volta pra |
| 36:21 | raíz. Agora é 1000, direita e esquerda 3 vezes, esbarra no B, concatena. Volta pra |
| 36:27 | raíz, 1001, direita, esquerda, esquerda, direita, esbarra no C, concatena. Volta pra |
| 36:33 | raíz, 01, esquerda e direita e já esbarra no D, concatena. Volta pra raíz 01 01 01, |
| 36:38 | esbarra no D 3 vezes. E vai fazendo assim até ter o texto original de volta. Viram como é super simples e fácil? |
| 36:45 | Se lembram porque estou falando de Run Length e Huffman? Porque voltando na explicação de imagem, fizemos a compressão de cores com chroma subsampling pra converter de RGB |
| 36:55 | pra YUV 4:2:0, daí dividimos o linguição de bytes de cada canal em blocos de 8 por |
| 37:00 | 8 bits e aplicamos o processamento de transformada discreta de cosseno ou DCT, depois a quantização |
| 37:07 | pra simplificar os coeficientes. Daí reescrevemos bloco a bloco em zigue zague pra forçar zeros repetidos mais próximos |
| 37:15 | no fim de cada bloco. E agora? Uma sequência de zeros repetidos, é só aplicar Run Length pra diminuir o espaço que ocupam. Agora podemos aplicar Huffman. Criar a árvore de frequência |
| 37:25 | dos números que mais se repetem perto da raíz e codificar como no exemplo da string. |
| 37:30 | Recapitulando, uma imagem de video de 4K seria 3240 vezes 2160 pixels, com cada pixel ocupando |
| 37:38 | 3 bytes em RGB. Isso daria uma imagem crua, descomprimida, de uns 20 megabytes. Aaplicando |
| 37:43 | chroma subsampling, transformada discreta de cosseno, quantização de qualidade 8, run-length e Huffman, podemos chegar à mesma imagem ocupando nada menos que 900 kilobytes, |
| 37:55 | menos de 1 mega. Uma compressão de mais de 20 pra 1, 20 vezes menor que o original e |
| 38:00 | que pra 99% das pessoas vai ser difícil de distinguir com o original. Nada mau né? |
| 38:06 | Esse processo todo está por trás do formato de imagem mais difundido do mundo que todo |
| 38:12 | mundo, até quem não é programador usa todo dia, vocês acabaram de aprender como funciona o famoso JPEG, que é um sistema de compressão lossy, que perde informações do original, |
| 38:22 | mas que em quantização lá perto de 8 pelo menos, a gente não vai perceber no dia a dia a menos que precise abrir no Photoshop pra editar. E agora você talvez comece a |
| 38:31 | entender as razões das limitações do formato. Como um JPEG vai cortando informação ao longo de todo esse processo, é impossível |
| 38:39 | recuperar os detalhes do original. É um processo "lossy". E cada vez que edita um JPEG |
| 38:45 | e salva num novo, vai continuar perdendo mais informação. Por isso que não se deve editar um JPEG diversas vezes. Toda vez vai perdendo mais e mais definição. Por todo esse processo |
| 38:56 | que imagens que tem traços muito bem definidos, como desenhos, quadrinhos, anime e coisas assim ficam meio soft e perdem a nitidez nas bordas. Esse sistema é melhor pra fotos de |
| 39:06 | natureza, pessoas, que tem coisas como céu com muitos tons de azul. Mesmo desconstruindo |
| 39:12 | o tanto que fizemos, é difícil alguém não treinado notar que mudou alguma coisa. E por isso JPEGs de baixa qualidade, que o original já não era grande coisa e você |
| 39:22 | ainda vai e manda salvar em qualidade baixa, tipo quantização 1, fica artefatos visíveis |
| 39:27 | em formato de quadradinhos, como num grid, porque a gente divide a imagem em bloquinhos quadrados e processa um a um e depois concatena o resultado. Esse sistema dá resultados impressionantes |
| 39:38 | de mais de 20 ou 30 vezes de compressão, por outro lado, quanto mais nítido, ou no |
| 39:43 | outro espectro, quando mais borrado o original for, pior vai ser o resultado, especialmente |
| 39:49 | em quantizações mais agressivas. Em resumo, JPEG é muito bom pra comprimir uma foto e |
| 39:54 | guardar ou transmir. Mas é uma bosta pra editar. Por isso que fotógrafo profissional não tira fotos em JPEG e sim em RAW, que fica muito maior que os 20 mega que eu falei, |
| 40:05 | porque guarda bem mais informação de cores e tudo mais pra possibilitar manipular e ajustar num Photoshop ou Lightroom depois. |
| 40:12 | O formato BMP que o Paint ou Painbrush do Windows originalmente salvava sempre gerava |
| 40:18 | arquivos grandões, porque não comprime nada. Mais parecido com o formato RAW de câmeras, |
| 40:23 | era o antigo formato TIFF. Ambos são parecidos com BMP ou bitmap no sentido que não joga |
| 40:28 | informação fora, mas eles aplicam um mínimo de compressão lossless, ou seja, que não perde nenhuma informação. Já vou explicar compressão lossless. |
| 40:37 | Mas tem um formato que surgiu da CompuServe, um dos primeiros provedores de internet dos anos 90, mesma época da America Onine, ou AOL. Naquela época estávamos engatinhando, |
| 40:48 | era final dos anos 80. E começou a ficar óbvio que queríamos trafegar imagens, seja em BBS ou nesse troço novo chamado de Web. Mas não dava pra ser em Bitmap descomprimido. |
| 40:58 | Mesmo TIFF era grandão. Daí eles inventaram o famigerado GIF ou JIF, seja lá como prefere |
| 41:04 | chamar. A essa altura já nem me importo mais qual é o certo. É aquele formato de imagem de memes animados que todo mundo manda no zap. |
| 41:11 | O GIF é um patinho feio que continuamos usando até hoje por causa de funcionalidades que |
| 41:17 | poucos tem. Em particular animações bem leves. Pra começar ele limita a quantidade |
| 41:22 | de cores na imagem. Em vez de cada pixel ser representado por 24 bits de cor, limitaram |
| 41:27 | a no máximo 8 bits, o que diminui o espaço de cores de mais de 16 milhões pra meras |
| 41:33 | 256 cores. Sim, só 256. Cada componente do RGB tem 8 bits, mas no GIF tem que dar um |
| 41:40 | jeito e enfiar tudo em só 8 bits no total. E obviamente não dá, então tem que jogar fora quase todas as cores e se virar com quase nada. Eu lembro que parte do trabalho em agência |
| 41:50 | naquela época era otimizar as cores dos GIFs. O processo não é muito diferente de fazer pixel art. Dá pra automatizar o processo |
| 41:57 | de jogar cores fora mas às vezes o algoritmo escolhe um tom que não fica muito bom, daí temos que ajustar manualmente. Em cima disso o GIF ainda tinha duas funcionalidades que |
| 42:06 | são os diferenciais até hoje. A primeira era poder escolher uma cor dessa paleta pra |
| 42:12 | ser transparente. Como não era uma canal alpha de verdade, a transparência era bem abrupta e feia, só em cima de uma única cor. Mas pra memes tá mais que bom. |
| 42:21 | E a segunda funcionalidade era permitir ter mais de uma imagem dentro do mesmo arquivo, com a possibilidade de tocar animado, que é a coisa mais importante em todo meme de |
| 42:30 | hoje em dia. O problema disso era a paleta de cores. Lembra que pode ter no máximo 256 |
| 42:35 | cores? Pois é, e as cores valem pra todas as imagens da animação, por isso é inteligente não fazer animações que tenham quadros muito diferentes um do outro. |
| 42:44 | Depois de comprimir jogando milhões de cores fora, o segundo passo era comprimir reduzindo sequências de bytes repetidos, meio parecido com a idéia do Run-Length que falei antes, |
| 42:54 | mas bem mais agressivo. Pra isso GIF usa um algoritmo de compressão chamado LZW ou Lempel-Ziv-Weich. |
| 43:01 | Tecnicamente o algoritmo original foi criado por Abraham Lempel e Jacob Ziv coincidentemente |
| 43:07 | no ano que eu nasci, em 1977. Por isso que o algoritmo original se chama LZ77 que você |
| 43:13 | vai esbarrar bastante se começar a pesquisar sobre compressão. Também vai esbarrar no LZ78 que é uma otimização da fase de descompressão. O LZW é uma variação desse algoritmo criado |
| 43:24 | por Terry Weich em 1983 mas já volto a falar dele. Vamos focar só no LZ77. |
| 43:31 | Vale eu explicar a idéia geral com um exemplo. Vamos pegar outro string, como esse "um tigre, dois tigres, três tigres". Sem descer em detalhes temos repetido 3 vezes o trecho "tigre". |
| 43:41 | E se a gente substituir o 2o e 3o tigre com um ponteiro dizendo quantas letras pra trás |
| 43:47 | precisa ir pra achar o 1o tigre e quantas letras queremos pegar? Então ficaria algo como "um tigre, dois <12,5>, três <25,5>". Esse 12,5 quer dizer, ande 12 letras pra trás |
| 44:00 | e leia 5 letras. E 25,5 mesma coisa, ande 25 letras pra trás e leia 5 letras, ambos |
| 44:05 | vão cair na primeira palavra "tigre" e com isso dá pra remontar a frase. Se eu codificar esses ponteiros com 4 bits cada valor, em 1 byte dá pra guardar. |
| 44:14 | O string original tem 33 letras, mas substituindo onde repete por esses ponteiros daria pra |
| 44:19 | reduzir de cara pra 23 bytes, mais 2 bytes pra cada ponteiro, ou seja, 25 bytes. Mesmo |
| 44:25 | nesse esquema simplificado já comprimimos em quase 25%, 1 quarto de economia. Imagine |
| 44:31 | que num texto muito maior vai ter muito mais repetições e por isso dá pra comprimir bem. Se só o esquema de Huffman comprime umas 5 vezes, eu diria que o mesmo texto nesse |
| 44:40 | esquema de ponteiros daria pra comprimir na faixa de 10 vezes. No geral acho que a eficiência |
| 44:46 | é pelo menos 2 vezes maior que Huffman. Por isso vale a pena entender mais. Imagina num texto longo fazer esse esquema de ponteiros. Pensa um livro por exemplo, |
| 44:55 | centenas de páginas de texto. Se estivermos lá na última página e precisar fazer um ponteiro pra uma palavra na primeira página. Pra poder apontar tão longe significa que |
| 45:05 | precisaríamos manter o livro inteiro em memória, megabytes de dados ou mais. Seria um puta |
| 45:10 | desperdício de memória. E quando o algoritmo foi criado, no fim dos anos 70, sabemos que memória era hiper cara. Pensa que os melhores microcomputadores do começo dos anos 80 male |
| 45:21 | male tinham 32 kilobytes de RAM. Então eu só posso manter pedaços do texto em memória |
| 45:26 | enquanto vou descomprimindo, e por isso esses ponteiros não podem apontar pra tão longe no começo do texto. |
| 45:33 | Naquela época se reservava tipo 2 kilobytes, talvez 4. Esse bloco de buffer é o que se chama de sliding window ou janela deslizante, porque é como só desse pra ler o trecho |
| 45:43 | do texto onde está essa janela. E os ponteiros só podiam referenciar dentro dessa janela, |
| 45:49 | daí dá pra manter ponteiros usando poucos bits também. Quanto maior o sliding window, |
| 45:54 | maiores as possibilidades de comprimir mais, mas mais RAM vai precisar. Então é um trade off. Hoje em dia RAM é barata, então dá pra ter sliding windows na faixa de megabytes. |
| 46:05 | Porém quanto maior for o sliding window, maior tem que ser os ponteiros, daí ocupa mais espaço no total e comprime um pouco menos. É um balanço. |
| 46:12 | O primeiro grande sucesso que me lembro desse algoritmo surgiu na era dos BBS nos anos 80 |
| 46:19 | pelo Phil Katz que inventou o formato ZIP, que usa esse algoritmo LZ77. Foi o famoso |
| 46:25 | PKZIP que tinha os utilitário pkzip pra comprimir e pkunzip pra descomprimir. Quem daquela época |
| 46:31 | não usou? Com a adoção pela Microsoft já naquela época o formato zip se popularizou, e embora outras coisas melhores tenham surgido, meio que virou o padrão até hoje. Com o |
| 46:41 | tempo ganhou funcionalidades como encriptação, os famosos zips com senha que todo mundo que |
| 46:46 | manja tem medo quando baixa, porque pode ser a pornografia que queria ou um malware. |
| 46:51 | Não confundir porque existem diversos formatos de compressão como zip, arj, rar, 7zip e |
| 46:58 | outros que usam variações do algoritmo Lempel-Ziv. Uma coisa é o formato de arquivo, a estrutura |
| 47:04 | de dados e metadados, outra coisa são os algoritmos que usam por dentro. E cada um |
| 47:10 | usa estratégias diferentes pra tentar ultrapassar os concorrentes. Nos anos 80 mesmo surgiram diversas melhorias em cima do LZ77 como o LZSS ou Lempel-Ziv-Storer-Szymanski de 1982 |
| 47:24 | criado por James Storer e Thomas Szymanski usado no bom e velho RAR. Lembram? WinRAR? |
| 47:29 | O shareware que ninguém nunca pagou. Quem nunca baixou pirataria quebrada em vários arquivos de RAR? |
| 47:34 | No mundo Windows mais recente se popularizou o formato e ferramenta 7-zip, que é versátil |
| 47:40 | e consegue lidar com outros formatos como o RAR ou ZIP originais, mas tem um formato próprio que usa outras variações do LZ77 como o Lempel-Ziv-Markov chain ou LZMA e LZMA2 |
| 47:53 | criado pelo russo Igor Pavlov no fim dos anos 90. O Rar foi criado por outro russo, Eugene |
| 47:58 | Roschal no começo dos anos 90. Naquela época pelo menos a gente falava que não podia subestimar um russo quando a questão era compressão de dados, porque entre RAR e 7zip eles contribuíram |
| 48:08 | com alguns dos melhores formatos de compressão de arquivos. Muitos desses formatos usam uma mistura de Huffman pra substituir letras ou palavras |
| 48:17 | mais frequentemente usados por símbolos guardados num dicionário, aquela árvore binária de frequências e uma variação de Lempel-Ziv como LZSS ou LZMA2 pra substituir repetições |
| 48:28 | por ponteiros dentro de um sliding window. E como cada um ajusta essas diversas combinações |
| 48:34 | de dicionários, sliding windows, tamanho de ponteiros e tudo mais é que varia tanto quanto conseguem comprimir, quanto de CPU e RAM vão gastar no processo. Mas em geral, |
| 48:44 | quanto menor consegue fazer o arquivo ficar, mais processamento e memória vai gastar. Desenvolvedores web devem estão mais acostumados com o formato gzip, que é do começo dos |
| 48:53 | anos 90 e é o mais usado em servidores web. Caso não saibam, toda página web que vocês |
| 48:58 | navegam provavelmente vem compactada em gzip. Se não vem, deveria. O gzip usa o algoritmo |
| 49:04 | deflate, que foi criado pelo Phil Katz pro PKZIP original. A patente dele já expirou |
| 49:10 | e por isso podemos usar hoje de graça. Deflate e gzip são muito comuns no mundo Linux e |
| 49:15 | é uma combinação do LZ77 e Huffman como expliquei. Aliás, toda linguagem de programação |
| 49:21 | ou já tem ou tem bibliotecas pra todos esses algoritmos, deflate, huffman e tudo mais. |
| 49:26 | Pesquisem. Huffman, Lempel e Ziv são as fundações pra tudo que é compressão lossless, ou seja, |
| 49:31 | que não jogamos fora nada dos dados originais e quando descomprime volta exatamente como era antes, diferente do esquema de JPEG em imagens. E falando em JPEG, o objetivo dessa |
| 49:41 | longa tangente de história foi só pra poder voltar a falar do seu GIF de memes. Como falei |
| 49:46 | antes, criado pela Compuserve em cima de outra variação do LZ77, o LZW que é Lempel-Ziv-Weich, |
| 49:53 | do Terry Weich. Estamos falando de uma era antes da idéia de software livre. E naquela época patentear software era mais importante ainda, ninguém sabia como as coisas iam evoluir. |
| 50:03 | O erro foi que a Compuserve criou o GIF usando o LZW do Weich e deu certo, o GIF começou |
| 50:09 | a se popularizar, especialmente quando a Web comercial começou a crescer e surgiram navegadores |
| 50:14 | como o antigo Netscape, que adotou o GIF com um dos formatos de imagem suportado. Antes |
| 50:20 | disso, no meio dos anos 80 o Weich vendeu as patentes pra Sperry Corporation, que fez |
| 50:26 | merge com a antiga Burroughs, famosa por mainframes e pelo UNIVAC e que depois se tornou a Unisys, |
| 50:32 | que existe até hoje. Pois bem, a Unisys ficou sabendo desse tal de GIF usando as patentes |
| 50:37 | deles sem pagar nada e em 1987 começou a negociar com a Compuserve. |
| 50:43 | Ninguém tava muito ciente disso e todo mundo continuou usando. Aí em 1994 eles anunciam |
| 50:48 | que esperam que todo mundo que usasse e distribuisse GIFs precisaria pagar licenças. Imagina se |
| 50:54 | tivesse Twitter em 1994, todo mundo ia ficar putaço e ia cair matando cancelando a Unisys. |
| 51:01 | Como assim querem taxar meus memes?? Aí em 1995 o Thomas Boutell anunciou na usenet, |
| 51:07 | que era tipo nosso Reddit da época, uma proposta pra resolver isso. Que seria todo mundo largar saporra de GIF e trabalhar num formato melhor e mais moderno. E daí nasceria o PNG ou Ping. |
| 51:18 | Deu tão certo que já em 1996 a W3C, que é quem define os padrões da Web, adotou |
| 51:24 | e oficializou o PNG. Mas então significa que todo mundo distribuindo GIFs de memes |
| 51:29 | hoje tá infringindo patente da Unisys? Felizmente não, porque a patente já expirou lá por |
| 51:35 | 2004 e a gente voltou a usar GIFs porque apesar do PNG ser infinitamente superior, ele não |
| 51:41 | suportava animações. A única função que GIF tem é pra memes animados. Até existe |
| 51:46 | um formato de PNG animado que é o APNG mas demorou muito pros navegadores adotarem. Ele |
| 51:51 | já foi criado tarde, pela Mozilla, em 2008. Mas Chromium só adotou em 2017 e por tabela |
| 51:57 | navegadores baseados em Chromium como Microsoft Edge só vieram a adotar depois. Você sabia que tinha APNG? Pois é, nem eu. |
| 52:05 | PNG é bem versátil, suporta imagens de poucas cores como GIF, só com 8-bits de cor, mas |
| 52:10 | dá pra subir pra imagens pra 24 bits ou 32 bits. Também suporta um canal de alpha pra |
| 52:16 | transparência de qualidade infinitamente superior ao GIF e por isso é muito adequado pra desenvolvimento Web. E ele usa um sistema de otimização da paleta de cores pra facilitar |
| 52:26 | ter sequências de repetições, é tipo filtros que não degradam a qualidade da imagem mas |
| 52:31 | facilita depois usar o algoritmo Deflate. Lembra? Baseado em Huffman e LZ77, que o gzip |
| 52:38 | usa? PNG é comprimido com Deflate, portanto, diferente de JPEG, ele é lossless. |
| 52:44 | Depois do PNG surgiram outros formatos como o WebP do Google. Mas nem vou falar do WebP, |
| 52:49 | WebM, codecs como VP8 ou VP9 porque apesar de bons não se tornaram populares. Aliás, |
| 52:55 | toda vez que esbarro numa porcaria de WebP quero xingar porque a adoção é tão baixa que pro Photoshop abrir eu preciso instalar um plugin por fora. Um JPEG faz compressão |
| 53:05 | na casa de 20 pra 1. Um PNG faz compressão na casa de 4 pra um. São ordens de grandeza |
| 53:11 | menos. Mas um WebP é só uns 25% melhor em compressão que um PNG. Eu sei que tem outras |
| 53:17 | vantagens, mas a diferença é muito pequena pra trocar tudo de PNG pra WebP e por isso |
| 53:22 | continuo usando PNG pra tudo. Se eu quero uma foto altamente comprimida, vou usar JPEG. |
| 53:27 | Se quero uma foto razoavelmente comprimida mas mantendo os detalhes do original, vou usar PNG e ponto. |
| 53:33 | Vamos voltar pro assunto principal. Lembram o objetivo? Eu quero assistir um filme de 2h em 4K na minha TV nova. Mas o arquivo não comprimido de video, a gente fez as contas, |
| 53:43 | e ia precisar de uns 5 teras. O máximo que conseguimos fazer foi converter de RGB pra YUV 4:2:0, que joga fora informações do canal de chroma que a gente não percebe, |
| 53:53 | que é o chroma subsampling. Mas mesmo assim o tamanho do arquivo cai só pra 3 teras, |
| 53:58 | que continua sendo coisa pra caramba. O que é um video. É basicamente uma sequência de imagens. Por que não comprimir cada imagem |
| 54:05 | em PNG então? Já cairia o tamanho de tudo 4 vezes. Não muda muita coisa porque isso |
| 54:10 | só diminui o video de 5 pra 1 terabyte. 1 tera é o tamanho total dos HDs de metade |
| 54:16 | de vocês aí assistindo. Eu chuto que a maioria deve estar com HDs de no máximo uns 512 giga. |
| 54:21 | Ou seja, tá chegando perto, mas ainda não dá. Então a próxima escolha óbvia é comprimir |
| 54:27 | cada quadro do frame em JPEG, e aí vai ficar 20 vezes menor né? Sim, isso diminui os 5 |
| 54:33 | teras originais pra 256 gigabytes! Caraca olha só! Significa que se eu comprimir em JPEG já cabe 2 filmes no HD de vocês. |
| 54:43 | Sucesso. Fim do episódio, deixem seu like e assinem o canal! Tô zoando. 256 gigas é |
| 54:48 | um puta avanço, mas ainda não dá. Com conexão de 50 megabits que é o que a maioria de vocês aí deve ter, ia levar nada menos que 12 horas pra baixar. Não rola fazer streaming disso |
| 54:59 | porque assistir um filme de 2 horas precisando de 12 horas pra baixar, só se você assistisse beeeeem em slow motion. |
| 55:08 | Falando em velocidade de internet, esse é o requisito pra streaming. 50 megabits é por volta de 6 megabytes por segundo, no máximo. Pra eu conseguir assistir um filme de 2h nessa |
| 55:19 | velocidade, considerando uma conexão perfeita, que não engasga nem desconecta, ou seja, |
| 55:24 | sem considerar buffer, significa que o tamanho máximo do arquivo do filme teria que ser menos 6 megabytes por segundo vezes 7200 segundos, ou seja, 42 gigas. Esse é o máximo, na realidade |
| 55:36 | tem que ser menos que isso. Então precisamos dar um jeito de pegar o video compactado com JPEG que deu 256 gigas e comprimir 6 vezes ainda. |
| 55:45 | Aliás, realmente existe formato de video que comprime os quadros em JPEG. O Motion |
| 55:51 | JPEG ou M-JPEG. É um dos componentes que depois se torna o que você conhece como MPEG1 |
| 55:57 | que se usava nos antigos Video-CD, ou MPEG2 que se usava nos antigos DVDs. Ou o MPEG4 |
| 56:03 | também chamado de AVC, Advanced Video Coding, que você conhece como H.264 que é o codec |
| 56:10 | que a maioria dos videos aqui do YouTube, Netflix e outros usam. Na verdade a gente tá migrando pro H.265 mas já falo dele. Aliás, nomenclatura de tecnologias de imagens, |
| 56:20 | áudio, video, é uma bosta. Tem três nomes diferentes pra mesma coisa, com um monte de versões diferentes, diferentes empresas usando nomes diferentes. É uma confusão mesmo. |
| 56:30 | Se esses nomes te confundem, você não tá sozinho. Mas vamos nos ater ao básico. Não necessariamente a compressão é o JPEG igualzinho das suas fotos mas sim um algoritmo |
| 56:40 | de compressão baseado em DCT, transformada discreta de cosseno, então seria tipo variações |
| 56:46 | das técnicas usadas pelo JPEG. Mas como já vimos, precisamos de mais que isso. Como estamos |
| 56:51 | chegando no final, não vou entediar demais com todos os detalhes, mas o pulo do gato é simples. Presta atenção aqui em mim. Como são meus videos? É esse meu cenário |
| 57:00 | aqui atrás que fica imóvel e não muda absolutamente nada do começo ao fim do video, e sou eu |
| 57:05 | bobão aqui na frente, falando e se mexendo que nem um idiota. Concorda que precisa só de um quadro com a imagem inteira e depois pode recortar só eu aqui na frente pro resto |
| 57:16 | do video? O que é um video? É um conjunto de imagens. A grosso modo uma câmera de video que nem |
| 57:22 | essa aqui na minha frente tá tirando fotos de mim, 60 vezes por segundo. Num video de 1 hora tem 216 mil fotos. Toda a parte da imagem que é o cenário tá repetido em todas |
| 57:33 | essas fotos, 216 mil vezes. Se eu arrancar fora esse cenário de todas as fotos, só |
| 57:40 | de bater o olho você pode chutar que daria pra jogar fora pelo menos metade da imagem, concorda? Lembra como é mais fácil comprimir sequências repetidas de zeros? Olha quantos |
| 57:48 | zeros tem aqui ao redor de mim agora. É exatamente isso que um codec como o H.264 vai fazer. Ele vai primeiro gravar um interframe |
| 57:56 | ou keyframe que é uma foto completa, como essa. Daí os próximos frames vai gravando |
| 58:02 | o que se chama de intraframes, que são deltas. Sabe commit de Git, que é só o trecho que você mudou no código e não o arquivo original inteiro? Mesmo conceito. Então vai ter um |
| 58:12 | interframe e vários intraframes na sequência com deltas. O correto da imagem inteira é |
| 58:18 | falar interframe, mas vou falar keyframe pra ficar mais fácil de distinguir de intraframe. |
| 58:23 | Eu não lembro se a quantidade de intraframes era fixo ou se o codec detecta quando teve |
| 58:29 | tanta mudança que é melhor pegar um keyframe inteiro de novo. Dependendo do codec ele pode |
| 58:34 | escolher ser conservador e pelo menos o keyframe comprimir usando um algoritmo lossless como |
| 58:41 | equivalente de PNG pra aumentar a qualidade e os intraframes usando um derivado de DCT, |
| 58:47 | como um JPEG. Indo direto aos finalmentes, quanto que aqueles 5 terabytes consegue diminuir |
| 58:53 | somando um esquema de JPEG com um esquema de inter e intrarames? |
| 58:59 | Normalmente um filme por volta de 2h, em H.264 que é o codec mais usado atualmente, numa |
| 59:04 | qualidade boa, próxima de Blu-Ray UHD que é a versão 4K, seria por volta de 20 a 25 |
| 59:10 | gigabytes. Naquela mesma conexão de 6 mega por segundo daria pra baixar esse filme em aproximadamente 1 hora e 18 minutos. Ou seja, dá pra baixar todos os bits do video em menos |
| 59:21 | tempo que a duração do video, que é o pré-requisito pra ser possível fazer streaming, que é poder começar a assistir enquanto o video vai baixando no fundo. Ou seja, atingimos |
| 59:31 | nosso objetivo de conseguir assistir o filme via streaming na TV nova 4K! |
| 59:37 | E é exatamente isso que acontece no YouTube ou Netflix. Os videos em 4K de 30 quadros |
| 59:42 | por segundo são encodados em H.264 com um bitrate de 35 a 45 megabits por segundo, dependendo |
| 59:49 | do video. Lembrando que o tamanho final de um video não é linear com a duração do video. Depende do tipo de conteúdo. Desenho animado, por exemplo, vai ser mais fácil |
| 59:58 | de compactar do que um filme de ação com câmera que balança o tempo todo, famoso shaky cam, como nos filmes do Jason Bourne, porque fica bem mais difícil fazer delta |
| 1:00:07 | intraframes. A qualidade da imagem também importa porque senão fica qualidade ruim |
| 1:00:12 | quando faz color downsampling ou DCT. Por isso que vários filmes diferentes de 2h vão |
| 1:00:18 | dar tamanhos de arquivos bem diferentes um do outro. Tem bem mais otimizações que codecs modernos fazem. Eles avaliam movimentos rápidos entre |
| 1:00:26 | frames pra tentar normalizar, diferente de cenas que são só pessoas paradas conversando |
| 1:00:32 | por exemplo. Tem técnicas como compensação de movimento, que existe desde o MPEG2 dos |
| 1:00:37 | DVDs. O H.264 ou AVC que é o codec de video mais difundido pra consumo foi lançado oficialmente |
| 1:00:43 | por volta de 2003 e levou desde 1998 até chegar no formato final. E mesmo depois saíram |
| 1:00:50 | revisões do formato. E já em 2004 começou os estudos pro sucessor que hoje conhecemos como H.265 ou HEVC de |
| 1:00:59 | High Efficiency Video Coding que foi lançado por volta de 2013 e só em anos recentes a |
| 1:01:05 | adoção ficou significativa. Na prática, se você edita videos, exporte em HEVC que |
| 1:01:11 | os arquivos tendem a ficar quase 50% menores e com qualidade pelo menos similar ao H.264, |
| 1:01:16 | mas pra isso ele gasta bem mais processamento do que o H.264. Lembram o que eu expliquei antes que podemos ajustar o algoritmo pra criar arquivos menores ao custo de mais processamento |
| 1:01:26 | e mais memória? Falando em quem edita videos, H.264 e H.265 são o que se chama de codecs de consumo. |
| 1:01:34 | Assim como eu falei que JPEG é ótimo pra guardar suas fotos mas não pra editar, esses |
| 1:01:39 | codecs de consumo é mesma coisa, ótimo pra poder baixar rápido e assistir, mas péssimos |
| 1:01:44 | pra editar. Primeiro porque assim como JPEG eles fazem chroma downsampling, porque pra TV YUV 4:2:0 é mais que suficiente e você não vai notar que jogamos fora metade da |
| 1:01:55 | informação de chroma. Mas pra editar faz diferença, porque agora não temos cores suficientes pra trabalhar. |
| 1:02:01 | Fotógrafos profissionais devem tirar fotos no formato RAW que usa compressão lossless, |
| 1:02:06 | por causa do algoritmo deflate. Daí edita no Lightroom da vida e no final exporta em JPEG pra postar no Instagram. Mesma coisa video, o formato correto pra gravar nunca |
| 1:02:16 | deve ser H.264 ou H.265 e sim Apple ProRes ou DNxHR ou CineForm ou outros formatos proprietários |
| 1:02:25 | como o REDCODE, se usa câmeras da RED. Todos esses formatos são similares a zip, 7zip, |
| 1:02:31 | rar, compressão lossless, que não joga informação fora. Eles tem diferentes taxas de compressão caso queira sacrificar qualidade de video por espaço de armazenamento. |
| 1:02:40 | Por exemplo, eu gravo meus videos aqui em DNxHR. E gravo no perfil que comprime mais |
| 1:02:46 | e mesmo assim dá 1 gigabyte por minuto de video. Então se eu gravar 2 horas de video |
| 1:02:51 | vai dar pelo menos 120 gigabytes. E se gravar com menos compressão pode chegar lá no 1 |
| 1:02:57 | terabyte fácil. Quem edita videos profissionalmente precisa disso. Num H.264 final vai estar em |
| 1:03:03 | YUV 4:2:0, mas no meu video gravado em DNxHR vai estar em YUV 4:2:2, ou seja, mais informação |
| 1:03:10 | de cor. E pra ser agressivo era só gravar em ProRes 4:4:4 que é zero perda de informação |
| 1:03:16 | de chroma. Agora você sabe o que significa ProRes 4444 versus ProRes 422. |
| 1:03:22 | Além disso H.264 usa o esquema de inter e intraframes. Acho que todo mundo já viu como |
| 1:03:28 | se edita videos? Num programa como Adobe Premiere ou DaVinci Resolve. São programas de uma |
| 1:03:33 | categoria que se chama NLE ou Non Linear Editing, edição não linear, ou seja, que eu posso |
| 1:03:39 | editar qualquer ponto do video que quiser. Só que toda vez que eu peço um frame pra editar, só vai ter o intraframe, que é o delta, a imagem incompleta. Então precisa |
| 1:03:48 | voltar alguns frames pra trás e localizar o keyframe completo, mesclar os dois e aí |
| 1:03:54 | eu tenho a imagem inteira. Imagina navegar num clip de video pra frente e pra trás e toda horas precisar processar frames assim. |
| 1:04:00 | Com um codec profissional como o Apple ProRes ou DNxHR ele vai ter só keyframes. Então |
| 1:04:06 | esses codecs são mais parecidos com o M-JPEG original, o Motion JPEG onde todo frame é |
| 1:04:13 | um JPEG completo, sem deltas. Por isso, apesar do tamanho do arquivo de video ser ordens |
| 1:04:18 | de grandeza maior, pra editar é muito mais performático, porque não precisa reconstruir os frames o tempo todo, eles já estão inteiros, é só ler. Um H.264 atrapalha pra editar |
| 1:04:28 | e exige mais processamento e mais memória da máquina, por isso não compensa. Espaço em disco é barato, melhor plugar um SSD externo via Thunderbolt. Lembra dos meus videos explicando |
| 1:04:38 | NAS e armazenamento? Além de tudo isso que expliquei, nem toquei no assunto de áudio direito, mas assim como |
| 1:04:44 | imagem crua de alta qualidade de câmera se usa o formato RAW, que comprime de forma lossless |
| 1:04:50 | com alguma variação de LZ77, assim como video tem formato lossless como Apple ProRES, |
| 1:04:56 | áudio também tem formato crú comprimido lossless como o FLAC ou os antigos WAV e AIFF. |
| 1:05:03 | Mas também assim como imagem tem formato lossy de consumo como JPEG, video tem formato |
| 1:05:09 | de consumo H.265, áudio tem alta compressão lossy com MP3 ou AAC, Advanced Audio Coding, |
| 1:05:18 | que é o que costuma ir com video H.265 ou Blu-Ray. No final os conceitos básicos são os mesmos: não tem como guardar a informação analógica |
| 1:05:26 | original 100%, por isso pegamos samples, como pixels no caso de imagens. Quadros por segundo |
| 1:05:33 | no caso de video. E sample por segundo no caso de áudio. Ajustamos resolução, frequência, |
| 1:05:39 | e fazemos transformações pra simplificar os dados quando queremos alta compressão. |
| 1:05:44 | Ou só tentamos reduzir repetições se não queremos perder informação. Tem várias outras coisas sobre compressão que nem mencionei, por exemplo, sistemas de |
| 1:05:53 | arquivo que suportam compressão. No Windows com NTFS é possível ligar compressão e |
| 1:05:58 | todos os arquivos no seu sistema vão ser comprimidos. Significa que toda vez que salvar vai levar um tempo a mais pra comprimir, e toda vez que tentar ler um arquivo vai levar |
| 1:06:07 | outro tempinho pra descomprimir, e isso vai ser o tempo todo. Não sei quanto de overhead |
| 1:06:12 | isso adiciona, até imagino que é rápido o suficiente pra não se notar na maior parte do tempo, mas considerando que espaço em disco hoje é super barato, não acho que |
| 1:06:21 | compensa fazer isso. É muito mais inteligente comprar um HD externo USB barato e jogar o |
| 1:06:27 | que não precisa pra lá em vez de deixar seu sistema inteiro lento o tempo todo por conta de poucos megabytes economizados. E ele provavelmente vai usar o equivalente de |
| 1:06:36 | um zip na menor compressão pra não demorar demais, então não comprime nem de perto tanto quanto um zip de verdade. |
| 1:06:43 | Enfim, o objetivo do video de hoje era usar a desculpa de video pra explicar o básico |
| 1:06:48 | de tudo que existe sobre compressão de dados, incluindo as peças básicas mais fáceis que você pode treinar em qualquer linguagem de programação como Run-Length, Huffman, |
| 1:06:58 | Lempel-Ziv, pra comprimir textos e depois ficar curioso pra aprender mais sobre séries de Fourier e transformada discreta de cossenos que, como vimos, você usa diariamente e nem |
| 1:07:07 | sabia disso. Agora que sabe, se é de ciências da computação, não custa nada ir perguntar pro seu professor de algoritmos ou pesquisar por conta própria. Espero que isso tenha |
| 1:07:17 | aumentado sua percepção do que acontece por trás dos panos das atividades mais simples |
| 1:07:22 | que fazemos no dia a dia, como assistir este video no YouTube. Se ficaram com dúvidas |
| 1:07:27 | mandem nos comentários abaixo, se curtiram o video deixem um joinha, assinem o canal e compartilhem o video pra ajudar o canal. A gente se vê, até mais. |
